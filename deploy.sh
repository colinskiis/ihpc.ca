#!/bin/bash

# Deploy script for ihpc.ca
# Builds the site and syncs to Namecheap hosting

set -e

cd "$(dirname "$0")"

echo "^ Building site..."
npm run build

echo "Deploying to Namecheap..."
rsync -avz --delete \
    -e "ssh -p 21098 -i ~/.ssh/namecheap_rsa" \
    dist/ \
    drcohmrh@business81.web-hosting.com:~/ihpc.ca/

echo "Deployment complete!"
echo "Site: https://ihpc.ca"
