# Portfolio Website

## Google Analytics

This site supports Google Analytics 4 through a Vite environment variable.

1. Create a GA4 web data stream in Google Analytics.
2. Copy the Measurement ID, which looks like `G-XXXXXXXXXX`.
3. Add it locally in `.env.local`:

```bash
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

4. Add the same variable in Netlify:
   `Site settings` -> `Environment variables` -> `Add variable`
5. Redeploy the site.

When the variable is present, the app loads `gtag.js` and tracks page views on route changes.
