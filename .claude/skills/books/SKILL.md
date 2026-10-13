---
name: books
description: Generate book-summary lessons with voiceovers for the site, or approve/redo them. Use when the user gives book titles to produce, or says approve/redo/reject for a book or lesson.
---

Run everything through `pipeline.py` in this folder. Don't write lessons by hand.

1. **New titles:** `python pipeline.py run "Title 1" "Title 2" ...`. Run it in the background for more than a couple of books. When it finishes, send `work/review.html` with SendUserFile (display: render), and list each book's status and estimated cost from `python pipeline.py status`.
2. **needs_source:** Claude wasn't confident it knows the book. Tell the user and ask for notes, which go in `sources/<slug>.txt`. Re-run with `--force` only if they say so.
3. **Feedback on a lesson:** `python pipeline.py redo <slug> <n> --note "<their feedback>"`, then send the review page again.
4. **"Approve X":** `python pipeline.py approve <slug>`. This publishes to `site_content/` and to R2 or the webhook if those are configured. Then commit and push.
5. Never approve without the user explicitly saying so.
