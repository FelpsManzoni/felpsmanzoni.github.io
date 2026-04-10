---
title: Welcome to the Blog
date: 2026-04-10
description: A simple starter post that shows the structure for future updates, notes, and longer technical write-ups.
category: Site update
reading_time: 2 min read
image: /assets/images/Professional_Perfil.jpeg
image_alt: Felipe Manzoni profile picture
---

This post is the baseline format for new entries in the blog section. Each post now supports:

- A title and publication date
- A short description used in the blog index card
- An optional image for the card and the post header
- Free-form Markdown content for the full article page

## Suggested front matter

```yaml
---
title: Your post title
date: YYYY-MM-DD
description: Short summary shown on the blog card.
category: Optional label
reading_time: Optional read time
image: /assets/images/your-image.jpg
image_alt: Accessible description of the image
---
```

## Writing flow

Create a new Markdown file under `_blog_posts/`, update the front matter, and add the post content below it. Jekyll will publish it automatically under `/blog/<file-name>/`.

Because the blog index reads from the collection, every new post will automatically appear as a callout card on the main blog page.
