# Media Circle Website

Premium, mobile-first marketing site for Media Circle, a premier event experience provider in Stonecrest, Georgia serving metro Atlanta.

## What’s Included

- Multi-page static site with all requested pages
- Reusable shared header/footer and interaction script in `assets/js/site.js`
- Shared luxury visual system in `assets/css/styles.css`
- SEO-friendly page titles, descriptions, canonicals, `robots.txt`, `sitemap.xml`, and `site.webmanifest`
- Clearly labeled portfolio placeholder areas so real Media Circle imagery can be added later without implying fake work

## Project Structure

```text
.
|-- index.html
|-- pages/
|-- assets/
|   |-- css/styles.css
|   `-- js/site.js
|-- SEO-SUGGESTIONS.md
|-- robots.txt
|-- sitemap.xml
`-- site.webmanifest
```

## Local Preview

This is a static site, so you can preview it with any local web server.

### Option 1: VS Code Live Server

1. Open the folder in VS Code.
2. Start Live Server from `index.html`.

### Option 2: Python

If Python is installed:

```bash
python -m http.server 8080
```

Then open `http://localhost:8080`.

## Deployment

This site can be deployed directly to Netlify, Vercel static hosting, Cloudflare Pages, GitHub Pages, or any standard static host.

### Generic Deployment Steps

1. Upload the full folder contents.
2. Keep `index.html` at the site root.
3. Keep the `pages/` and `assets/` folders intact.
4. Update canonical URLs if you deploy to a staging domain before `https://mediacircle.io`.

## Content Updates

### Replace Placeholder Portfolio Areas

Each page includes clearly labeled placeholder media blocks. Replace those with:

- Real wedding portfolio imagery
- Real event stills
- Real booth setup imagery
- Real film thumbnails or embedded trailers

### Update Navigation or Contact Details

Global layout content lives in `assets/js/site.js`.

### Adjust Styling

Brand colors, layout system, spacing, cards, and button styles live in `assets/css/styles.css`.

## SEO Notes

- Titles and meta descriptions are already added per page
- Suggested refinements are listed in `SEO-SUGGESTIONS.md`
- `sitemap.xml` includes all built pages
- Canonical URLs are written against `https://mediacircle.io`

## Recommended Next Enhancements

1. Replace all placeholder media with real portfolio imagery.
2. Add approved testimonials if and when real client quotes are available.
3. Publish real blog posts and event features to strengthen SEO over time.
4. Add analytics and conversion tracking to availability CTA clicks.
