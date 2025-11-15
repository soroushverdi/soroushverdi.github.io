
# Marketing PhD – Minimal Academic Website (React + Tailwind)

This is the exact single-file React component you saw in chat. It renders a minimalist 3‑page academic site:

- **Home** (bio + Research Areas integrated next to your photo)
- **Research & Publications** (Overview + Working Papers/Publications)
- **Teaching** (Current Courses + Past Courses)
- Mobile‑friendly, dark‑mode via system preference (no toggle).

## Use in Next.js (recommended)

1. Create a Next.js app with Tailwind:

```bash
npx create-next-app@latest my-site --typescript --eslint --tailwind
cd my-site
```

2. Install icons:

```bash
npm i lucide-react
```

3. Add the component:

- Save `MarketingPhDWebsite.tsx` into `app/MarketingPhDWebsite.tsx` (or `src/app/...` depending on your layout).
- In `app/page.tsx` (Next 13+ app router), render it:

```tsx
import MarketingPhDWebsite from './MarketingPhDWebsite';

export default function Page() {
  return <MarketingPhDWebsite />;
}
```

4. Tailwind is already set up by the Next.js + Tailwind template. Ensure `darkMode: 'class'` in `tailwind.config.ts`.

5. Start dev server:

```bash
npm run dev
```

## Use in Vite + Tailwind

```bash
npm create vite@latest my-site -- --template react-ts
cd my-site
npm i -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm i lucide-react
```

- In `tailwind.config.js` set:

```js
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: { extend: {} },
  plugins: [],
}
```

- In `src/index.css` add:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

- Save the component as `src/MarketingPhDWebsite.tsx` and render it from `src/App.tsx`:

```tsx
import MarketingPhDWebsite from './MarketingPhDWebsite';
export default function App() { return <MarketingPhDWebsite />; }
```

## Change your headshot

- Replace the `src` on the `<img>` in the `Hero` with your own image URL.
- If the image is in your project (recommended), place it in `/public/headshot.jpg` (Next.js) or `/public/headshot.jpg` (Vite) and use:
  ```tsx
  src="/headshot.jpg"
  ```
- For GitHub Pages, you can commit the image under `/public` and reference it the same way.

## Update name, email, and links

- In the `Header` block and `Hero` section, replace `Soroush Verdi`, `s.verdi@rug.nl`, and the LinkedIn URL with your details.

## Notes

- Google Scholar and CV links were intentionally removed per your request.
- Dark mode honors the OS setting; there’s no toggle.

---

## How to adjust your avatar and photo in GitHub

### 1) Change your **GitHub profile avatar**

1. Go to `https://github.com/settings/profile`
2. Click **Edit** next to your avatar → **Upload a photo** → choose your image → **Set new profile picture**.
3. The change can take a minute to propagate across GitHub.

**Tips:** square image, ~400×400 px or larger, JPG or PNG. Keep the subject centered; avoid heavy compression.

### 2) Host your headshot in a GitHub repo and use it on the site

**Option A: Put it in your project’s `/public` folder**  
- File path: `/public/headshot.jpg`  
- Reference it in code: `src="/headshot.jpg"`

**Option B: Use a raw GitHub URL**  
1. Create a repo (or use an existing one), commit the image under `assets/headshot.jpg`.
2. Get the RAW link by opening the file in GitHub → **Raw** → copy the URL. It will look like:
   `https://raw.githubusercontent.com/<user>/<repo>/<branch>/assets/headshot.jpg`
3. Use that URL as the `src` in the `<img>` tag.

**Note:** Raw links are public; only use if you’re fine with that. For private repos, prefer the `/public` folder in your deployed site.

### 3) GitHub organization/repo social preview (optional)

- In a repo, go to **Settings → General → Social preview** to upload an OG/social image.  
- This does not change your profile avatar, but it sets the image used in link previews for the repo.

---

## Minimal smoke tests (already included)

Inside the component there are lightweight runtime assertions:

- nav keys are `home,research,teaching`
- `classNames('a','b')` → `'a b'`
- header renders on mount

They run in development and help catch accidental edits.

Good luck! ✨
