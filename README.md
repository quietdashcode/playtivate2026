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
- The PHP handler now checks request origin and fetch context, enforces request-size limits and locked rate limiting, validates allowed service values, and requires a short project brief.
- Update `public/contact.php` with the final recipient and from-address settings that match the production domain's mail configuration.
- GitHub Pages review builds remain static and cannot execute the PHP mail handler.
- The current visual system uses CSS only and no external media assets yet.

## LayerStack security checklist

- Force HTTPS for the site and redirect all HTTP traffic to HTTPS.
- Enable HSTS at the web server or control panel level once the HTTPS setup is confirmed stable.
- Host the site on the final production domain so the PHP origin checks and cookie settings match the live hostname.
- Keep `public/contact.php` and `public/contact-token.php` accessible only on the same origin as the website.
- Verify the production PHP environment can send mail for `no-reply@playtivate.com`, or replace PHP `mail()` with authenticated SMTP if deliverability is weak.
- Set the web root so only the built site and intended PHP endpoints are public.
- Disable directory listing in the web server configuration.
- Keep PHP and the server image updated with current security patches.
- If LayerStack provides WAF, bot filtering, or request throttling, enable it in front of the contact endpoints.
- Add server-side logging and monitor repeated `403`, `419`, `429`, and `500` responses from the contact endpoints.
- Back up any mail logs or server logs needed for incident review, but do not log full contact message contents unless necessary.
- Confirm cookies are marked `Secure` in production by testing the contact form only over HTTPS.