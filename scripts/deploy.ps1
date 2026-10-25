# CloudSaathi Website Deploy Script
# Usage: .\scripts\deploy.ps1
# Prereqs: AWS CLI with 'cloudsaathi' profile, Node.js

$ErrorActionPreference = "Stop"
$PROFILE = "cloudsaathi"
$BUCKET = "cloudsaathi-website"
$CERT_ARN = "arn:aws:acm:us-east-1:045878925687:certificate/449d4a90-2a8b-4853-a945-e7907de4f6d6"
$OAC_ID = "E1WVDX5WNB52DJ"
$HOSTED_ZONE_ID = "Z04700841RTKMU91RYZYD"
$DIST_CONFIG_FILE = "$env:TEMP\cf-cloudsaathi.json"

# ──────────────────────────────────────────────
# 1. Build
# ──────────────────────────────────────────────
Write-Host "Building..." -ForegroundColor Cyan
npm run build
Write-Host "Build complete." -ForegroundColor Green

# ──────────────────────────────────────────────
# 2. Upload to S3
# ──────────────────────────────────────────────
Write-Host "Uploading HTML files..." -ForegroundColor Cyan
aws s3 sync dist/ s3://$BUCKET/ `
  --profile $PROFILE `
  --delete `
  --exclude "assets/*" `
  --cache-control "no-cache, no-store, must-revalidate"

Write-Host "Uploading assets..." -ForegroundColor Cyan
aws s3 sync dist/assets/ s3://$BUCKET/assets/ `
  --profile $PROFILE `
  --delete `
  --cache-control "public, max-age=31536000, immutable"

Write-Host "S3 upload complete." -ForegroundColor Green

# ──────────────────────────────────────────────
# 3. Check if CloudFront distribution exists
# ──────────────────────────────────────────────
$DIST_ID = aws cloudfront list-distributions `
  --profile $PROFILE `
  --query "DistributionList.Items[?Comment=='cloudsaathi.com website distribution'].Id | [0]" `
  --output text 2>$null

if ($DIST_ID -and $DIST_ID -ne "None") {
  # ── 3a. Distribution exists → invalidate cache
  Write-Host "Invalidating CloudFront cache on $DIST_ID..." -ForegroundColor Cyan
  aws cloudfront create-invalidation `
    --profile $PROFILE `
    --distribution-id $DIST_ID `
    --paths "/*" | Out-Null
  Write-Host "Cache invalidated." -ForegroundColor Green
} else {
  # ── 3b. Distribution doesn't exist → create it
  Write-Host "Creating CloudFront distribution..." -ForegroundColor Cyan

  $callerRef = "cloudsaathi-$(Get-Date -Format 'yyyyMMddHHmmss')"
  @"
{
  "CallerReference": "$callerRef",
  "Comment": "cloudsaathi.com website distribution",
  "DefaultRootObject": "index.html",
  "Origins": {
    "Quantity": 1,
    "Items": [{
      "Id": "S3-cloudsaathi-website",
      "DomainName": "cloudsaathi-website.s3.ap-south-1.amazonaws.com",
      "S3OriginConfig": { "OriginAccessIdentity": "" },
      "OriginAccessControlId": "$OAC_ID"
    }]
  },
  "DefaultCacheBehavior": {
    "TargetOriginId": "S3-cloudsaathi-website",
    "ViewerProtocolPolicy": "redirect-to-https",
    "CachePolicyId": "658327ea-f89d-4fab-a63d-7e88639e58f6",
    "Compress": true,
    "AllowedMethods": {
      "Quantity": 2,
      "Items": ["GET", "HEAD"],
      "CachedMethods": { "Quantity": 2, "Items": ["GET", "HEAD"] }
    }
  },
  "CacheBehaviors": {
    "Quantity": 1,
    "Items": [{
      "PathPattern": "/assets/*",
      "TargetOriginId": "S3-cloudsaathi-website",
      "ViewerProtocolPolicy": "redirect-to-https",
      "CachePolicyId": "658327ea-f89d-4fab-a63d-7e88639e58f6",
      "Compress": true,
      "AllowedMethods": {
        "Quantity": 2,
        "Items": ["GET", "HEAD"],
        "CachedMethods": { "Quantity": 2, "Items": ["GET", "HEAD"] }
      }
    }]
  },
  "CustomErrorResponses": {
    "Quantity": 2,
    "Items": [
      { "ErrorCode": 404, "ResponsePagePath": "/index.html", "ResponseCode": "200", "ErrorCachingMinTTL": 10 },
      { "ErrorCode": 403, "ResponsePagePath": "/index.html", "ResponseCode": "200", "ErrorCachingMinTTL": 10 }
    ]
  },
  "Aliases": {
    "Quantity": 2,
    "Items": ["cloudsaathi.com", "www.cloudsaathi.com"]
  },
  "ViewerCertificate": {
    "ACMCertificateArn": "$CERT_ARN",
    "SSLSupportMethod": "sni-only",
    "MinimumProtocolVersion": "TLSv1.2_2021"
  },
  "HttpVersion": "http2and3",
  "PriceClass": "PriceClass_All",
  "Enabled": true
}
"@ | Out-File $DIST_CONFIG_FILE -Encoding utf8

  $dist = aws cloudfront create-distribution `
    --profile $PROFILE `
    --distribution-config "file://$DIST_CONFIG_FILE" | ConvertFrom-Json

  $DIST_ID = $dist.Distribution.Id
  $CF_DOMAIN = $dist.Distribution.DomainName

  Write-Host "Distribution created: $DIST_ID ($CF_DOMAIN)" -ForegroundColor Green

  # ── Bucket policy allowing OAC
  Write-Host "Setting S3 bucket policy for OAC..." -ForegroundColor Cyan
  $ACCOUNT_ID = (aws sts get-caller-identity --profile $PROFILE | ConvertFrom-Json).Account
  @"
{
  "Version": "2012-10-17",
  "Statement": [{
    "Sid": "AllowCloudFrontOAC",
    "Effect": "Allow",
    "Principal": { "Service": "cloudfront.amazonaws.com" },
    "Action": "s3:GetObject",
    "Resource": "arn:aws:s3:::$BUCKET/*",
    "Condition": {
      "StringEquals": {
        "AWS:SourceArn": "arn:aws:cloudfront::$ACCOUNT_ID:distribution/$DIST_ID"
      }
    }
  }]
}
"@ | aws s3api put-bucket-policy --profile $PROFILE --bucket $BUCKET --policy -

  # ── Route 53 A record → CloudFront
  Write-Host "Creating Route 53 A record..." -ForegroundColor Cyan
  @"
{
  "Changes": [
    {
      "Action": "UPSERT",
      "ResourceRecordSet": {
        "Name": "cloudsaathi.com",
        "Type": "A",
        "AliasTarget": {
          "HostedZoneId": "Z2FDTNDATAQYW2",
          "DNSName": "$CF_DOMAIN",
          "EvaluateTargetHealth": false
        }
      }
    },
    {
      "Action": "UPSERT",
      "ResourceRecordSet": {
        "Name": "www.cloudsaathi.com",
        "Type": "A",
        "AliasTarget": {
          "HostedZoneId": "Z2FDTNDATAQYW2",
          "DNSName": "$CF_DOMAIN",
          "EvaluateTargetHealth": false
        }
      }
    }
  ]
}
"@ | aws route53 change-resource-record-sets --profile $PROFILE --hosted-zone-id $HOSTED_ZONE_ID --change-batch -

  Write-Host ""
  Write-Host "========================================" -ForegroundColor Green
  Write-Host "Setup complete!" -ForegroundColor Green
  Write-Host "Distribution ID : $DIST_ID" -ForegroundColor Green
  Write-Host "CloudFront URL  : https://$CF_DOMAIN" -ForegroundColor Green
  Write-Host "Site URL        : https://cloudsaathi.com (live in ~15 mins)" -ForegroundColor Green
  Write-Host "========================================" -ForegroundColor Green
}
