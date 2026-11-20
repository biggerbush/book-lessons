"""Instagram carousel engine: one lesson -> 8-12 static 1080x1350 slides that tell the story (white, navy + gold).

    python -m engine.carousel --book deep-work --lesson 1 [--plan plan.json] [--dry]

Plan (JSON) -> stage/carousel.html (one page, every slide) -> Playwright screenshots each slide -> site/carousels/<book>-<n>/NN.png
"""
