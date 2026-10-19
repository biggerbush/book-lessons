# Book lesson pipeline

Give it book titles. It writes a brief and 10 lessons per book, produces the voiceovers, and builds a review page. Content is published to the site/app only when you approve it.

```
titles → Claude: brief + 10-lesson outline → Claude: each lesson script → ElevenLabs: MP3 per lesson
       → work/review.html (listen/read) → approve → site_content/ (+ R2 upload / webhook to your app)
```

## Setup (once)
1. `pip install -r requirements.txt`
2. Environment variables: `ANTHROPIC_API_KEY`, `ELEVENLABS_API_KEY`
3. In `config.json`, set `elevenlabs_voice_id` to your voice. Optionally change the model, lesson length, tone and audience there too.
4. Optional:
   - **Cloudflare R2 / S3 audio hosting:** set `S3_BUCKET`, `S3_ENDPOINT_URL`, `S3_ACCESS_KEY_ID`, `S3_SECRET_ACCESS_KEY`, `S3_PUBLIC_BASE_URL`
   - **Push to your app's backend:** set `PUBLISH_WEBHOOK_URL` (and `PUBLISH_WEBHOOK_TOKEN`). Each approved book is POSTed as JSON.

## Use
```
python pipeline.py run "Atomic Habits" "Deep Work"   # or: run --file books.txt
python pipeline.py status
python pipeline.py redo atomic-habits 4 --note "Use a more concrete example"
python pipeline.py approve atomic-habits
```
In Claude Code you can also use `/books Atomic Habits, Deep Work`, then reply "approve atomic-habits" or give feedback on a lesson.

- Each step is saved as it finishes, so re-running continues an interrupted book without paying for anything twice.
- If Claude isn't confident it knows a book, it stops with status `needs_source`. Add notes in `sources/<slug>.txt` and run again.

## Output for the site/app
- `site_content/catalog.json`: list of published books
- `site_content/books/<slug>/book.json`: brief and lessons (script, takeaways, action step, `audio_url`, duration)
- `site_content/books/<slug>/lesson-NN.mp3`: audio files (when not using R2)

## The website (`site/`)
`site/index.html` is the VisualGrowth player site: Library → Book → Player (Previous / Next, Autoplay).
Lessons are hand-built animated HTML files, one folder per book: `site/<book>/lesson-NN.html` plus `thumb-NN.jpg`
(cover frame at t = 3 s, made with `python3 tools/make_thumbs.py site/<book>`). To add a lesson, drop the two files in
the book's folder and add its row to the `BOOKS` data at the top of the script in `index.html`.
Preview locally with `cd site && python3 -m http.server` (lessons run in a same-origin iframe, so `file://` won't do).

## Book creation engine

Type a book title in the admin page; GitHub Actions writes the lessons, designs the animated scenes, records the
voice-over (one ElevenLabs generation per lesson) and builds a **draft**. Nothing is public until you approve it.

**One-time setup**
1. Repo → Settings → Secrets and variables → Actions → add `ANTHROPIC_API_KEY` and `ELEVENLABS_API_KEY`.
2. Create a fine-grained token at github.com/settings/personal-access-tokens/new: only this repository,
   permission *Actions: Read and write*. Paste it into the admin page (stored only in your browser).
3. Open `https://biggerbush.github.io/book-lessons/admin/`.

**Use**
- *Dry run* first: free, uses filler content, proves the plumbing. Dry drafts can't be published.
- *Real* run: Claude plans the book, writes each script, designs scenes, checks them in a headless browser (and fixes
  problems) **before** paying for voice-over. Cost is capped by `BOOK_MAX_COST` (default $30).
- Drafts appear in the admin page. *Preview* opens the real player; *Approve & publish* moves it into the library;
  *Reject* deletes it. A stopped run can be resumed from the draft card.

**Layout**: `engine/` (pipeline), `engine-data/<slug>/` (scripts, scene code, MP3s, state), `site/drafts/` (drafts),
`.github/workflows/create-book.yml` and `review-book.yml`, `tests/` (offline tests: `python -m tests.test_timing` etc.).

## Categories (for the app's filters)

`site/books.json` carries each book's categories and a ready-made index:

```json
{ "books": [ { "id": "atomic-habits", "categories": ["Habits & Productivity", "Personal Growth"], ... } ],
  "categories": [ { "name": "Personal Growth", "slug": "personal-growth", "count": 20 }, ... ],
  "updated": "2026-10-18T13:00:00+00:00" }
```

Edit them any time after publishing: admin page → **Published** → tap categories (or type a new one) → **Save categories**.
That runs the *Set categories* workflow (`python -m engine.categories apply ...`), commits `books.json` and redeploys.
Newly approved books start with no categories; publishing never overwrites a book's existing categories.

## Models: narrated animated explainers

Any entry in `site/models.json` can get a two-minute narrated, animated explainer, made by the same engine as the books
(one lesson, one ElevenLabs generation). Start it from the Actions tab (*Create model explainer*, model id) or by
committing `model-requests/<id>.json` (`{"id": "...", "notes": "optional extra points", "mode": "real"}`).
The draft shows in the admin page as `model-<id>`; *Approve* moves it to `site/models/<id>/` and adds
`"video": {"src", "thumb", "d"}` to that model in `models.json`. Models with a video open on the player
(`#/models/<id>`); the swipe slides stay at `#/models/<id>/slides`.

## Book covers

Each book has an illustrated book-jacket cover (our own design: palette colour, title, author and the book's illustration; `site/<dir>/cover.svg`, plus `cover.png` 800x640 for apps), drawn by
`python3 tools/make_covers.py` (add a drawing to `COVERS` for a new book). `books.json` carries `cover` and `cover_png`.
A book without a cover falls back to its first lesson frame. The site draws the play button on top.
