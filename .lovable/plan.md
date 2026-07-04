## Goal
Remove the white background from the product bottle image so it blends naturally into the cream/gradient backgrounds across the site (Hero, Benefits, Shop CTA).

## Steps
1. Run `imagegen--edit_image` on the current bottle asset (`src/assets/bottle.asset.json` → CDN URL) with `transparent_background: true`, saving to `src/assets/bottle.png`.
2. Upload the resulting transparent PNG via `lovable-assets create` and overwrite `src/assets/bottle.asset.json` with the new pointer.
3. Delete the temporary local `bottle.png` after upload so no binary lives in the repo.
4. No component changes needed — `Hero.tsx`, `Benefits.tsx`, and `ShopCTA.tsx` already import from `bottle.asset.json`.

## Notes
- The current `drop-shadow` filters will now cast off the actual bottle silhouette instead of a white rectangle — that's the desired effect.
- Old CDN asset will be replaced; no code references break because the pointer file path stays the same.