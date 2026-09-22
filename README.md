# MTM Copy & Print — React site

Vite + React version of the MTM Copy & Print landing page.

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build → dist/
npm run preview    # serve the build locally
```

## Add your photos

Image cards show a dashed placeholder until you add a photo. Drop a file into
`src/assets/images/` **named exactly like the slot** (`.jpg`, `.jpeg`, `.png`, `.webp`, `.avif` or `.svg`)
and the placeholder is replaced automatically — no code changes.

| File name     | Where it appears              | Suggested shape        |
| ------------- | ----------------------------- | ---------------------- |
| `hero`        | Top of the page, beside title | Portrait, ~800 × 1000  |
| `services`    | 6th card in Services grid     | Landscape, ~1000 × 750 |
| `step-1`      | How it works, step 1          | 4:3, ~1000 × 750       |
| `step-2`      | How it works, step 2          | 4:3, ~1000 × 750       |
| `step-3`      | How it works, step 3          | 4:3, ~1000 × 750       |
| `gallery-1`   | Gallery, wide (top left)      | Wide, ~1400 × 900      |
| `gallery-2`   | Gallery, small (top right)    | Landscape, ~900 × 700  |
| `gallery-3`   | Gallery, small (bottom left)  | Landscape, ~900 × 700  |
| `gallery-4`   | Gallery, wide (bottom right)  | Wide, ~1400 × 900      |

Photos are cropped to fill their card (`object-fit: cover`), so keep the subject near the middle.
Compress images before adding them (e.g. squoosh.app) — aim for under 300 KB each.

To rename a slot, change its alt text, or add new ones, edit `imageSlots` in `src/data/site.js`,
then use `<ImageCard slot="your-key" />` anywhere.

## Change the content

Everything written on the page — phone, email, hours, services, steps, stats, FAQ — is in
`src/data/site.js`. Colors and spacing are CSS variables at the top of `src/styles.css`.

## Structure

```
src/
  App.jsx                 page order
  styles.css              all styles
  data/site.js            content + image slot definitions
  lib/images.js           finds photos in src/assets/images
  hooks/useReveal.jsx     scroll-in animations
  components/             Nav, Hero, Services, Process, Stats, Gallery,
                          FindUs, Contact, Footer, FloatingActions, ImageCard
```

## Before you launch

- The contact form does not send anything yet (`Contact.jsx`, marked TODO). Connect Formspree/EmailJS, or send to WhatsApp.
- Check `email` in `src/data/site.js` — it still says `orders@albacopyprint.co`.
- Check the FAQ price answer (first question) — it needs a proper price wording.
- Deploy: push to GitHub and import into Vercel (framework preset: Vite), or run `npm run build` and upload `dist/`.
