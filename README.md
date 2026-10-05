# portfolio-Nancy-Sharma

Personal portfolio website for **Nancy Sharma**, a language trainer and academic leader. She is Division Chair for Verbal Ability & Professional Readiness at Galgotias College of Engineering and Technology.

Built with **React 18**, **Vite 5** and **Tailwind CSS 3**.

## Getting started

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build in dist/
npm run preview   # serve the production build locally
```

Requires Node 18+.

## Editing content

All text, links, experience, education and programs are stored in one file:
[`src/data/profile.js`](src/data/profile.js). Edit it to update the site; no component changes needed.

Images and the CV live in [`public/assets/`](public/assets/). That folder's README lists the expected file names.
The site shows fallbacks until the photos are added.

## Design

Flat **Bordo / Green / Cream** palette, used with the 60-30-10 rule:

| Token    | Hex       | Role (share)                                |
|----------|-----------|---------------------------------------------|
| `cream`  | `#F5DABF` | Backgrounds and surfaces (60%)              |
| `forest` | `#0F3D3A` | Hero, headings, stats, footer (30%)         |
| `bordo`  | `#6C151E` | Buttons, active states, accents (10%)       |

The colours are defined in [`tailwind.config.js`](tailwind.config.js). The design uses no gradients.

## Structure

```
src/
  data/profile.js      # all site content
  components/          # Navbar, Hero, About, Expertise, Experience, Programs, Contact, Footer
  lib/enquire.js       # "Enquire" buttons pre-fill the contact form subject
  index.css            # Tailwind layers + shared button/field styles
public/assets/         # photos and resume PDF
```
