## Deploy to Cloudflare Pages with GitHub CI/CD

Your repo `vijay-pk/roots-in-bloom` is a TanStack Start app (SSR-capable, Vite build). For full SSR support use **Cloudflare Workers** (recommended for this stack); Cloudflare Pages also works for the static/SPA parts. Below is the Pages flow you asked for — pushes to `main` auto-deploy.

### Steps

1. **Log in to Cloudflare** → dashboard.cloudflare.com → **Workers & Pages** → **Create** → **Pages** tab → **Connect to Git**.
2. **Authorize GitHub** and select the repo `vijay-pk/roots-in-bloom`.
3. **Set build configuration:**
   - Framework preset: **None** (or Vite if listed)
   - Build command: `bun run build` (or `npm run build` if you don't use Bun on CI — set `npm install && npm run build`)
   - Build output directory: `dist`
   - Root directory: `/` (leave blank)
   - Node version: add env var `NODE_VERSION` = `20`
4. **Environment variables:** add any `VITE_*` vars your app needs (from your local `.env`) under **Settings → Environment variables** for both Production and Preview.
5. **Save and Deploy.** First build runs immediately.
6. **CI/CD is automatic after this:**
   - Push to `main` → Production deploy
   - Push to any other branch / open a PR → Preview deploy with its own URL
7. **Custom domain (optional):** Pages project → **Custom domains** → add your domain and follow the DNS instructions.

### Important note about SSR / server functions

This app uses TanStack Start `createServerFn` (server-side code). Plain Cloudflare Pages serves it as a static SPA and server functions won't run. If you rely on server functions or the Lovable Cloud backend, either:
- Deploy to **Cloudflare Workers** instead (`npx wrangler deploy` with a Git integration under Workers → Connect to Git), OR
- Keep using Lovable's built-in publish (already live at `roots-in-bloom.lovable.app`) which handles SSR + backend for you.

Tell me which target you want (Pages static, Workers SSR, or stay on Lovable) and I can tailor the config further.