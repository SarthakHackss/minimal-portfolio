# sarthakpatil.in — Portfolio

Static portfolio site of **Sarthak Bhagirath Patil** — live at [sarthakpatil.in](https://sarthakpatil.in), served by GitHub Pages from this repository.

## Structure

| Path | What it is |
|---|---|
| `index.html` | Home — hero, work, about, stack, certifications, contact |
| `demo-cablescope.html` / `demo-privacypi.html` / `demo-slipperzero.html` | Per-project demo pages — animated pipeline figure + embedded interactive model |
| `figures/` | Interactive isometric project instruments (self-contained HTML) and static SVG stills (light + dark) |
| `assets/` | Profile photo, Pi 5 render, fallbacks |
| `css/`, `js/` | Styles and the small script for the home page |
| `CNAME` | Custom domain for GitHub Pages (`sarthakpatil.in`) |

## Run locally

```bash
python -m http.server 8931
# open http://127.0.0.1:8931
```

Any static server works; opening `index.html` via `file://` also works.

## Deploy

Pushes to `main` deploy automatically via GitHub Pages (Deploy from branch, root). No build step, no dependencies. The custom domain is pinned by the `CNAME` file; DNS is managed in GoDaddy:

- `A` `@` → `185.199.108.153` / `185.199.109.153` / `185.199.110.153` / `185.199.111.153`
- `CNAME` `www` → `sarthakhackss.github.io`
