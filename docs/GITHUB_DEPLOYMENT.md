# GitHub Actions deployment

Production deployment is configured in `.github/workflows/deploy.yml`.

The workflow runs on every push to `main` (or manually via **Actions > Deploy
production site > Run workflow**). It installs dependencies, builds the site,
uploads `dist/` to Namecheap over SSH and confirms the server is serving the
commit that was just built.

## One-time Namecheap step

The deployment stays disabled until the workflow's public key is authorized.

1. Sign in to Namecheap cPanel.
2. Open **Security > SSH Access**.
3. Choose **Manage SSH Keys**.
4. Import the RSA public key with a name such as `gh_rsa` using the contents of
   `docs/namecheap-github-actions.pub`.
5. Return to **Manage SSH Keys**, select the imported key and choose
   **Authorize**.
6. Set the repository variable `NAMECHEAP_DEPLOY_ENABLED` to `true` (via
   **Settings > Secrets and variables > Actions > Variables**, or
   `gh variable set NAMECHEAP_DEPLOY_ENABLED --body true`).
7. Run the **Deploy production site** workflow manually once to confirm it
   works. Pushes to `main` will then deploy automatically.

The public key is safe to copy. Do not place a private key or hosting password
in an issue, commit or chat message.

## GitHub configuration

The `production` environment holds:

- Secret `NAMECHEAP_SSH_PRIVATE_KEY`
- Secret `NAMECHEAP_KNOWN_HOSTS`

The repository holds:

- Variable `NAMECHEAP_DEPLOY_ENABLED` (`false` until the key is authorized)

## Manual deployment

`./deploy.sh` still works as a local fallback. It builds the site and rsyncs
`dist/` to `~/ihpc.ca/` on the same host.
