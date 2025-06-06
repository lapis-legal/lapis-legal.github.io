# Deployment Instructions for Lapis Legal GitHub Pages

## Initial Setup

1. **Push to GitHub** (run these commands):
   ```bash
   # Add your GitHub credentials if needed
   git config --global user.name "Your Name"
   git config --global user.email "your-email@example.com"
   
   # Push main branch
   git push -u origin main
   
   # Create and push gh-pages branch
   git checkout -b gh-pages
   git push -u origin gh-pages
   git checkout main
   ```

2. **Configure GitHub Pages**:
   - Go to your repository on GitHub
   - Navigate to Settings → Pages
   - Under "Source", select "Deploy from a branch"
   - Choose either:
     - `gh-pages` branch / `/ (root)` folder (recommended)
     - OR `main` branch / `/ (root)` folder
   - Click Save

3. **Wait for Deployment**:
   - GitHub will automatically build and deploy your site
   - This usually takes 2-10 minutes
   - Your site will be available at: https://lapis-legal.github.io

## Keeping Branches in Sync

To keep gh-pages in sync with main after making changes:

```bash
# Make your changes on main
git add .
git commit -m "your commit message"
git push origin main

# Update gh-pages to match main
git push origin main:gh-pages
```

## Alternative: Deploy from Main Branch

If you prefer to deploy directly from the main branch:

1. Go to Settings → Pages in your GitHub repository
2. Change the source branch to `main`
3. Save the changes
4. You no longer need a separate gh-pages branch

## Troubleshooting

- **Build Errors**: Check the Actions tab in your repository for build logs
- **404 Errors**: Ensure your repository name matches `lapis-legal.github.io`
- **Domain Issues**: If using a custom domain, add a CNAME file to your repository

## Custom Domain (Optional)

To use a custom domain like `lapislegal.ai`:

1. Create a file named `CNAME` in your repository root:
   ```
   lapislegal.ai
   ```

2. Configure your domain's DNS:
   - Add an A record pointing to GitHub's IP addresses:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153
   - OR add a CNAME record pointing to `lapis-legal.github.io`

3. Enable HTTPS in Settings → Pages after DNS propagation

## Local Development

To test your site locally before pushing:

```bash
bundle exec jekyll serve
# Site will be available at http://localhost:4000
```

## Automated Deployment

Your site will automatically redeploy whenever you push changes to the configured branch.