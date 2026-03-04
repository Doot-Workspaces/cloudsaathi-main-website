# CloudFront + S3 Deployment Guide

Deployment architecture: **S3** (origin, private) → **CloudFront** (CDN, HTTPS) → users.

---

## Prerequisites

- AWS CLI configured (`aws configure`)
- S3 bucket created (e.g., `cloudsaathi-website`)
- ACM certificate for `cloudsaathi.com` in **us-east-1** (required for CloudFront)

---

## 1. S3 Bucket Setup

```bash
# Create bucket (if not exists)
aws s3 mb s3://cloudsaathi-website --region ap-south-1

# Block all public access (CloudFront OAC handles access)
aws s3api put-public-access-block \
  --bucket cloudsaathi-website \
  --public-access-block-configuration \
  BlockPublicAcls=true,IgnorePublicAcls=true,BlockPublicPolicy=true,RestrictPublicBuckets=true
```

**Do NOT enable Static Website Hosting** — we use S3 REST API origin with OAC.

---

## 2. CloudFront Distribution

### Origin Settings
| Setting | Value |
|---------|-------|
| Origin domain | `cloudsaathi-website.s3.ap-south-1.amazonaws.com` |
| Origin access | **Origin Access Control (OAC)** |
| S3 bucket access | Create new OAC → Sign requests (SigV4) |

After creating the distribution, **copy the bucket policy** CloudFront generates and apply it to S3.

### Viewer Protocol Policy
Set to **Redirect HTTP to HTTPS** — this handles the HTTP→HTTPS redirect requirement.

### Default Root Object
Set to `index.html`.

### Custom Error Responses (SPA Fallback)
Since all routes are pre-rendered, most paths resolve. For truly unknown URLs, add:

| HTTP Error Code | Response Page Path | HTTP Response Code | TTL |
|-----------------|--------------------|--------------------|-----|
| 403             | `/index.html`      | 200                | 0   |
| 404             | `/index.html`      | 200                | 0   |

> S3 with OAC returns 403 (not 404) for missing objects.

---

## 3. CloudFront Function (URL Rewriting)

This is **required**. S3 REST API doesn't serve `index.html` for directory paths. The function rewrites `/services` → `/services/index.html`.

1. Go to **CloudFront → Functions** → Create function
2. Name: `url-rewrite`
3. Paste the code from `infra/cloudfront-url-rewrite.js`
4. Publish the function
5. Associate it with your distribution's **default behavior** → **Viewer request** event

---

## 4. Response Headers Policy (Security Headers)

Create a custom **Response Headers Policy** in CloudFront:

| Header | Value |
|--------|-------|
| Strict-Transport-Security | `max-age=31536000; includeSubDomains; preload` |
| X-Frame-Options | `DENY` |
| X-Content-Type-Options | `nosniff` |
| Referrer-Policy | `strict-origin-when-cross-origin` |
| X-XSS-Protection | `1; mode=block` |

Attach this policy to the **default cache behavior** of your distribution.

---

## 5. Alternate Domain + SSL

| Setting | Value |
|---------|-------|
| Alternate domain name (CNAME) | `cloudsaathi.com`, `www.cloudsaathi.com` |
| Custom SSL certificate | Select your ACM cert from us-east-1 |

### DNS (Route 53 or your DNS provider)
```
cloudsaathi.com        → A / ALIAS → d1234abcdef.cloudfront.net
www.cloudsaathi.com    → CNAME     → cloudsaathi.com
```

---

## 6. Build & Deploy

```bash
# Build (client + SSR + prerender)
npm run build

# Deploy to S3 + invalidate CloudFront
./infra/deploy.sh cloudsaathi-website E1A2B3C4D5E6F7
```

The deploy script handles cache headers:
- **`/assets/*`** (hashed JS/CSS) → `max-age=31536000, immutable`
- **`*.html`** (pre-rendered pages) → `no-cache, must-revalidate`
- **`robots.txt`, `sitemap.xml`** → `max-age=300` (5 min)

---

## 7. Verify After Deploy

```bash
# Pre-rendered HTML has content (not empty body)
curl -s https://cloudsaathi.com | grep -i "<h1"

# HTTP redirects to HTTPS
curl -sI http://cloudsaathi.com | grep -i location

# Static files accessible
curl -sI https://cloudsaathi.com/robots.txt
curl -sI https://cloudsaathi.com/sitemap.xml

# Sub-routes work (CloudFront Function rewriting)
curl -s https://cloudsaathi.com/services | grep -i "<h1"
curl -s https://cloudsaathi.com/about | grep -i "<h1"
```

---

## Architecture Summary

```
User request: https://cloudsaathi.com/services
  │
  ▼
CloudFront (HTTPS, HSTS, security headers)
  │
  ├─ Viewer Request Function: /services → /services/index.html
  │
  ▼
S3 (private, OAC) → serves dist/services/index.html
  │
  ▼
Pre-rendered HTML with full content + meta tags + schema
  │
  ▼
Browser hydrates → React SPA takes over
```
