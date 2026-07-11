# Support Futuro Vivo — Website

A plain static HTML/CSS/JS site (no build tools, no framework). Open any `.html` file directly in a browser to preview it.

## Adding a News post

The News page (`news.html`) is driven entirely by one data file: **`js/news-data.js`**. To add a post, add one object to the `NEWS_POSTS` array in that file — no new pages, no other files to touch.

### 1. Add your photos

Drop new photos in the matching `photos/<category>/` folder (`campus`, `meals`, `medical`, `other`, `students`, `transportation`), or create a new category folder if none fit.

**Compress/resize photos before adding them.** This site has no image pipeline — whatever you commit is what visitors download. Resize to roughly 1600px on the long edge and aim for under ~400KB per photo (e.g. [Squoosh.app](https://squoosh.app), or export at a smaller size from Preview/Photos).

### 2. Add a post object

Open `js/news-data.js` and add a new entry to the top of the `NEWS_POSTS` array:

```js
{
  id: "2026-08-graduation",              // unique, kebab-case, used in the URL (news.html#2026-08-graduation)
  title: "Graduation Day at Futuro Vivo",
  date: "2026-08-20",                     // ISO yyyy-mm-dd — controls sort order and the displayed date
  excerpt: "A short 1–2 sentence teaser shown on the card.",
  body: [
    "First paragraph of the post.",
    "Second paragraph, and so on — one string per paragraph."
  ],
  cover: "photos/students/graduation_1.jpg",   // main photo, shown on the card and first in the gallery
  gallery: [                              // optional — additional photos shown in the post
    { src: "photos/students/graduation_2.jpg", alt: "Describe what's in this photo" },
    { src: "photos/students/graduation_3.jpg", alt: "Describe what's in this photo" }
  ]
}
```

Notes:
- `id` must be unique across all posts — it doubles as the shareable link (`news.html#2026-08-graduation`).
- `body` is plain text, not HTML — each array entry becomes one paragraph.
- `gallery` is optional; omit it or leave it as `[]` if the post only has the one cover photo.
- Post order on the page is automatic (newest `date` first) — you don't need to keep the array itself sorted.

### 3. Preview and publish

Open `news.html` in a browser to check it looks right, then commit and push/deploy as usual.

## Site structure

- `index.html`, `about.html`, `impact.html`, `donate.html`, `news.html` — pages. Nav and footer are duplicated in each file (no templating), so a nav change must be made in all five.
- `css/style.css` — single shared stylesheet, organized in banner-commented sections per page.
- `js/main.js` — shared behavior (nav, mobile menu, fade-ins, slideshow, lightbox).
- `js/news-data.js` / `js/news.js` — News page data and rendering logic.
- `photos/` — images, organized by category.
