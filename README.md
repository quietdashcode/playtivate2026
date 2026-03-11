# Playtivate Website

This workspace contains a React and Vite rebuild of the Playtivate marketing site.

## Scope

The site has been structured around Playtivate's three core offers:

- VR/AR
- E-Learning
- Serious Games

It includes:

- a service-led homepage
- dedicated service pages
- a curated case studies hub
- individual case study pages
- about and contact pages

## Commands

- `npm install`
- `npm run dev`
- `npm run build`

## Content sources in this workspace

- `website-blueprint.md`
- `wireframe-copy.md`

## Notes

- The contact form posts to `contact.php` and requires PHP-capable hosting for production.
- The form also requests `contact-token.php` to create a session-backed CSRF token before submission.
- The PHP handler now checks request origin, enforces a basic IP rate limit, validates allowed service values, and requires at least a short project brief.
- Update `public/contact.php` with the final recipient and from-address settings that match the production domain's mail configuration.
- GitHub Pages review builds remain static and cannot execute the PHP mail handler.
- The current visual system uses CSS only and no external media assets yet.