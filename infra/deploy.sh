#!/usr/bin/env bash
set -euo pipefail

# S3 + CloudFront deployment script for cloudsaathi.com
# Usage: ./infra/deploy.sh <S3_BUCKET> [CLOUDFRONT_DISTRIBUTION_ID]
# Example: ./infra/deploy.sh cloudsaathi-website E1A2B3C4D5E6F7

S3_BUCKET="${1:?Usage: deploy.sh <S3_BUCKET> [CLOUDFRONT_DIST_ID]}"
CF_DIST_ID="${2:-}"
DIST_DIR="dist"

if [ ! -d "$DIST_DIR" ]; then
  echo "ERROR: $DIST_DIR not found. Run 'npm run build' first."
  exit 1
fi

echo "=== Deploying to s3://$S3_BUCKET ==="

# 1. Hashed assets (JS, CSS) — immutable, cache 1 year
echo "[1/4] Uploading hashed assets (1yr cache)..."
aws s3 sync "$DIST_DIR/assets/" "s3://$S3_BUCKET/assets/" \
  --cache-control "public, max-age=31536000, immutable" \
  --delete

# 2. HTML files — no-cache so updates propagate instantly
echo "[2/4] Uploading HTML files (no-cache)..."
find "$DIST_DIR" -name "*.html" | while read -r file; do
  key="${file#$DIST_DIR/}"
  aws s3 cp "$file" "s3://$S3_BUCKET/$key" \
    --cache-control "no-cache, no-store, must-revalidate" \
    --content-type "text/html"
done

# 3. Static files (robots.txt, sitemap.xml, favicon, etc.) — short cache
echo "[3/4] Uploading static files (5min cache)..."
for file in robots.txt sitemap.xml favicon.ico; do
  if [ -f "$DIST_DIR/$file" ]; then
    aws s3 cp "$DIST_DIR/$file" "s3://$S3_BUCKET/$file" \
      --cache-control "public, max-age=300"
  fi
done

# 4. Invalidate CloudFront cache
if [ -n "$CF_DIST_ID" ]; then
  echo "[4/4] Invalidating CloudFront cache..."
  aws cloudfront create-invalidation \
    --distribution-id "$CF_DIST_ID" \
    --paths "/*" \
    --query 'Invalidation.Id' \
    --output text
  echo "CloudFront invalidation created."
else
  echo "[4/4] Skipped CloudFront invalidation (no distribution ID provided)."
fi

echo "=== Deploy complete ==="
