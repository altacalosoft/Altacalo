# Altacalo-Soft Static Website

This repository contains a modern static website for Altacalo-Soft. It uses only HTML, CSS, and vanilla JavaScript, so it is suitable for GitHub Pages without build tools or backend services.

## Files

- `index.html` - page structure, SEO metadata, sections, contact form, and footer, with `data-i18n` attributes for translation.
- `styles.css` - responsive layout, visual design, animations, mobile navigation, and language-switch styles.
- `script.js` - mobile menu behavior, section highlighting, reveal animations, dynamic year, English/Spanish translations, and mailto contact form generation.
- `README.md` - project notes and deployment instructions.

## Language Switching

The site ships in English and Spanish. A toggle in the header (`EN` / `ES`) swaps all text, ARIA labels, and meta tags client-side via a translation dictionary in `script.js`. The chosen language is remembered in `localStorage`, and on first visit the browser's language is used to pick a default.

## Contact Form

The contact form is static. When submitted, JavaScript generates a `mailto:` link addressed to:

`altacalosoft@outlook.com`

The visitor's default email client opens with the subject and message fields already prepared.

## GitHub Pages Deployment

1. Create a GitHub repository.
2. Upload `index.html`, `styles.css`, `script.js`, and `README.md`.
3. Go to `Settings > Pages`.
4. Select the `main` branch and root folder.
5. Save and wait for the public URL.

## Notes

- No backend, database, PHP, WordPress, build tools, or mandatory external images are used.
- The site is responsive for desktop, tablet, and mobile.
- The design uses CSS gradients, CSS tech patterns, inline SVG service icons, semantic HTML, and accessible navigation.
