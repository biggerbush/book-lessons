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
