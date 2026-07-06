# SoroushVerdi.Science

Personal academic website for **Soroush Verdi**, PhD Candidate in Marketing at the University of Groningen (Faculty of Economics and Business).

A static, multi-page site — modern, minimal, black & white. No build step, no dependencies. Just HTML + one CSS file.

## Pages

| File | Page |
|------|------|
| `index.html` | Home — intro, research areas, working paper |
| `research.html` | Research areas + working papers |
| `teaching.html` | Teaching & supervision |
| `cv.html` | Curriculum vitae (PDF) |
| `styles.css` | Shared styles for every page |
| `assets/` | Images (portrait, etc.) |

## How to update content

- **Text:** open the relevant `.html` file and edit the words directly.
- **Your CV:** drop a file named **`cv.pdf`** in this folder (repository root). The CV page links and embeds it automatically — no code changes needed.
- **Photo:** replace `assets/soroush.jpg` (keep the same filename, or update the `src` in `index.html`).
- **Teaching courses:** in `teaching.html` there is a commented `<!-- EXAMPLE -->` block. Copy it, fill in your course details, and delete the placeholder note.
- **Email:** the footer links to `contact@soroushverdi.science` — change every `mailto:` to your preferred address.

## Deploying on GitHub Pages (custom domain)

1. Create a GitHub repository and upload all of these files (keep the folder structure).
2. In the repo: **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to *Deploy from a branch*, branch `main`, folder `/ (root)`. Save.
4. The `CNAME` file (already included) points the site at **SoroushVerdi.Science**. In **Settings → Pages → Custom domain** it should show this domain.
5. At your domain registrar, point DNS at GitHub Pages:
   - Four `A` records for the apex domain → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - One `CNAME` record for `www` → `<your-github-username>.github.io`
6. Wait for DNS to propagate, then enable **Enforce HTTPS**.

Your site will be live at https://SoroushVerdi.Science

## Local preview

Open `index.html` in any browser, or run a tiny server from this folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```
