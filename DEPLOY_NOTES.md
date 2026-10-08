# Pendragon Tracker — build 2026-10-08 (UI pass)

index.html version stamp: 20261008_120000
Design and usability changes only. No campaign data changed.

## Files
- `index.html` — changed
- `pendragon-family-view.js` — changed (union tags hidden in player view)
- Unchanged: `pendragon-adventures.js`, `pendragon-npcs.js`, `pendragon-realms.js`,
  `pendragon-treedata.js`, `portraits.js`

## Changed in this build
- Header shrunk to a slim bar; main menu stays pinned at the top while scrolling;
  one set of line icons in the menu.
- One tab style for Realm, Player Families and Estates sub-tabs.
- Realm › Kingdoms: no inner scroll box; the map fits the screen height; clicking
  a realm no longer jumps — only the map and the details card redraw. The details
  card stays pinned beside the map; colour key moved above it.
- Estates: clear Map | Bookkeeping switch next to the knight tabs; a ledger strip
  above every manor map (latest year, total, "Open the books").
- Bookkeeping redesigned: four headline tiles, a new Estate Summary chart
  (income & costs on top, net result below, hover for the year's figures;
  income gaps where the sheet has no income figure), "Lands of …" list in
  parchment cards, full-width ledger, improvements in a tidy grid. Duplicate
  banner, sparklines and duplicate summary table removed.
- Adventures: no per-knight routes, initials, chips, counts or "Rode together"
  line. One dashed route through the year's places; the map stays pinned while
  the event list scrolls.
- Knights & Ladies: faction pills replaced by one dropdown (with counts);
  character list and "Add NPC" hidden in the player view (still in GM Tome).
- Player Families: union tags (u2, u4…) hidden unless the GM view is on.
- GM Tome hidden from the menu. Open the site once with `?gm` to show it in that
  browser (it is remembered); `?gm=off` hides it again.
- Phones/small windows: no sideways scrolling; menu scrolls horizontally.
- Removed the unused old Economics view (~200 lines).
- `IMPROV_ICONS` is now a single global in index.html (was duplicated).

## Deploy
All files in the repo root, GitHub Pages on. Do not add `pendragon-families.js`
or `pendragon-treedata-gm.js`.

Test locally with `python3 -m http.server 8000` and open http://localhost:8000 —
never by double-clicking index.html. After deploying, hard-refresh (Ctrl+Shift+R).
GM machine: open http://localhost:8000/?gm (or the live URL with ?gm) once.

## Still open from the previous build (spreadsheet fixes, unchanged)
1. NPC Tracking, Lady Calire: line break before "490:" so the betrothal note survives.
2. Bledri (Mellyr sheet): status "Entourage" → "Alive".
3. M - Newton Tony 493: deduct the 2£ for the relatives (final 3 → 1).
4. T - Laverstock: place the refugees' +0.5£/yr from 494.
