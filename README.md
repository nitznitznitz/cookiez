# Cookiez

A 4-page static website for Cookiez, a cookie business. No build step, no
dependencies — just HTML, CSS, and a little vanilla JS.

## Structure

```
index.html      Home
menu.html       Full flavor menu
about.html      Brand story + timeline
contact.html    Hours, location, ordering info
style.css       All styling (one file, CSS custom properties at the top)
main.js         Mobile nav toggle + footer year
```

## Preview it locally

No server required — just open `index.html` in a browser. If you'd rather
run a local server (so relative links behave exactly like they will once
hosted):

```
python3 -m http.server 8000
```

then visit `http://localhost:8000`.

## Before you publish: replace the placeholder details

I invented plausible-sounding placeholder info so the site wasn't full of
brackets. Search each file for these and swap in the real thing:

- **Address** — `118 Sprinkle St, Austin, TX 73301` (contact.html, also
  used to build the "Open in Maps" link)
- **Phone** — `(512) 555-0148` (a fake 555 number, contact.html)
- **Email** — `hello@cookiez.com` (contact.html, index/menu/about footers)
- **Instagram / TikTok handle** — `@cookiez.bakes` (footers + contact.html)
- **Hours** — currently Tue–Fri 11–7, Sat–Sun 10–6, closed Monday
- **Flavor names, prices, and the "cookie of the month"** on menu.html —
  these are made up; swap in your real lineup

## Design notes

- Fonts are pulled from Google Fonts at request time (Baloo 2 for
  headings/buttons, Quicksand for body text, Chewy for the wordmark) —
  no font files are bundled.
- All illustrations (the cookie, the sprinkle, the social icons) are plain
  inline SVG, so there are no image assets to manage or replace.
- Everything is one shared `style.css`; the color palette and fonts are
  set once as CSS custom properties near the top of the file if you want
  to retheme it.

## Publishing to GitHub Pages (optional)

Once this is pushed to your repo, you can serve it for free from GitHub:
Settings → Pages → Deploy from a branch → pick `main` and `/ (root)`.
It'll be live at `https://nitznitznitz.github.io/cookiez/` a minute or two
later.
