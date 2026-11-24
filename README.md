# Local Boost Media website

A responsive static website for Local Boost Media. Built with HTML, CSS and vanilla JavaScript; no paid website builder or build step required.

## Before publishing
1. Open `script.js`.
2. Replace `REPLACE_WITH_YOUR_EMAIL` with the real business inbox that should receive enquiries.
3. Test the website locally by opening `index.html`.

The enquiry form validates the fields and prepares an email in the visitor's email app. It does not silently transmit or store personal data. For direct server-side submissions, connect a form service or a backend before launch.

## Deploy free with Cloudflare Pages
1. Upload these project files to the root of your GitHub repository.
2. In Cloudflare, open **Workers & Pages → Create → Pages → Connect to Git**.
3. Select `mlocalboost-lang/local-boost-media-website` and branch `main`.
4. Framework preset: **None**. Build command: leave blank. Build output directory: `/` (or `.` if the UI requires it).
5. Deploy. Cloudflare will provide a `*.pages.dev` preview.
6. In the Pages project, add `localboostmedia.co.in` and `www.localboostmedia.co.in` as custom domains and follow the exact DNS instructions Cloudflare displays. Keep your GoDaddy domain registered; only update DNS records as directed.

## Files
- `index.html` — page content
- `styles.css` — responsive design
- `script.js` — mobile navigation and enquiry form
- `assets/local-boost-media-logo.jpg` — supplied brand logo
