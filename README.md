# Underkeep — Phase 1

Original-IP dungeon management game inspired by **Dungeon Keeper 2** (3D). Dark-fantasy keeper sim: dig, claim, fortify, build rooms, attract minions, and crush heroes. Protect the **Dungeon Heart**.

## Play online

**https://machine10101-vibes.github.io/underkeep/?v=pass10.9**

Pass 10 play: the keeper loop follows the classic dungeon-keeper playthrough — dig, claim, fortify, rooms, Portal, payday, Heart defense — with Underkeep names and unique gold-cost workers. Pass 10.1: Scrabblers keep digging when the vault is full, and Dig paint marks only the tiles you sweep. Pass 10.2: **Studio (V)** inspects every creature, item, enemy, and room mesh. Pass 10.6: torch-lit cavern (no dig-load brightness snaps), Prison/Workshop loops actually tick, HUD stays on-screen. Pass 10.7: Fortify is a Keeper mark only; the first hero party waits until the keep is built. Pass 10.8: the Portal is a 3×3 gateway buried on the map — dig to it and claim it; it cannot be built. Pass 10.9: Scrabblers chip only tagged blocks; gold reads as ore in dirt.

Works on desktop and phones (touch controls).

## Run locally

```bash
cd game   # or repo root if checked out flat
npm install
npm run dev
```

Open the URL Vite prints (default `http://localhost:5173/underkeep/`).

Production build:

```bash
npm run build
npm run preview
```

`vite` `base` is `/underkeep/` for GitHub Pages project hosting.

Publish a finished pass to the live site:

```bash
npm run publish:pages
```

Pushes to `main` also deploy via `.github/workflows/deploy-pages.yml`.

## Desktop controls

| Input | Action |
|-------|--------|
| **LMB** | Use tool · Hand: pick up · empty+selection: attack-move · shift-click: multi-select |
| **RMB** | Slap creature · Cancel tile mark · Drop held creature |
| **Space** | Drop held creature |
| **WASD / Arrows** | Pan camera |
| **Mouse wheel** | Zoom |
| **1** | Hand / Select (shift-click / drag-box multi-select) |
| **2** | Dig mark |
| **3** | Claim mark |
| **4** | Fortify mark |
| **5–9** | Rooms: Treasury, Lair, Hatchery, Training, Library |
| **0** | Focus the map Portal (cannot be built) |
| **X** | Sell room / door / trap (half gold back) |
| **Q** | Create Scrabbler (gold; cost scales) |
| **E** | Speed Burst (mana) — haste all minions |
| **R** | Lightning (mana) — strike nearest hero |
| **T** | Heal (mana; Library research unlock) |
| **P** | Possess (mana) — FP control one minion; Esc exits |
| **I** | Sight of Evil (mana) — reveal fog around a click |
| **Z** | Call to Arms (mana) — muster fighters to a tile |
| **Shift+H / F / O** | Focus camera on Heart / fight / Portal |
| **B** / **N** | Wooden / Stone bridge over lava or water |
| **U** | Workshop room |
| **J** / **K** / **H** | Prison / Torture Chamber / Graveyard |
| **M** / **C** | Temple / Combat Pit |
| **L** | Creature roster sheet |
| **V** | Model Studio — orbit every 3D mesh (Esc closes) |

## Mobile / touch controls

| Gesture | Action |
|---------|--------|
| **Tap** | Same as left-click — use tool / pick up with Hand |
| **Long-press** (~0.45s) | Same as right-click — slap / cancel mark / drop |
| **Two-finger tap** | Same as right-click |
| **One-finger drag** (Hand on empty ground) | Pan camera |
| **One-finger drag** (Dig/Claim/etc.) | Paint marks / place rooms |
| **Pinch** | Zoom |
| **Pan pad** (✥ bottom-right) | Dedicated camera pan zone |
| **HUD buttons** | Tools & spells (Create Worker / Speed / Lightning) — large touch targets |

Browser page scroll/zoom on the game is disabled (`touch-action: none`, viewport `user-scalable=no`). Safe-area insets apply on notched phones.

Dropping a creature into a fight **stuns** them briefly (DK2-style).

## Phase 1 loop

1. Mark earth / gold / **gem seams** for digging; Scrabblers chip **only tagged blocks** (mark a path to buried ore). Gems never run dry. Gold walls are dirt with ore chunks, not solid gold.
2. Mark dirt to **claim**; claimed tiles regenerate **mana**.
3. Fortify adjacent earth walls (never gold or gems).
4. Build rooms on claimed tiles (costs gold). **Sell** a room to recover half.
5. Dig to the **Portal** buried in the earth and **claim** it — it cannot be built or sold. Then attract **Skitterwing**, **Rattlekin**, **Emberling**, **Gravemage** (first Portal holds 15; each extra chamber +5). No Lair space, and the veil stays shut.
6. Minions sleep (Lair), eat (Hatchery), train (Training — costs gold), gamble (**Wagerden**).
7. **Scrabblers never eat or sleep.** Slap them to work harder. Drop one on the Heart to reclaim half its gold.
8. Hero waves march toward the Heart — **survive 3 waves** OR gather **2500 gold** (needs Treasury space) to win.
9. **Fog of war** — unexplored tiles stay dark until dig/claim, or **Sight of Evil**.
10. **Fortify** is a Keeper mark — idle Scrabblers claim dug dirt, they do not brick walls on their own.
11. **Payday** and **Heart HP** sit on the top bar. Workers defend the Heart instead of fleeing.
12. **Call to Arms** musters fighters. **Possess**, lava/bridges, Workshop, Prison/Torture/Graveyard, Temple, Combat Pit remain.

## Stack

Vite + TypeScript + Three.js (PBR, shadows, fog, bloom, color grade).

## Roster (original names)

| Role | Name |
|------|------|
| Worker | Scrabbler |
| Scout flyer | Skitterwing |
| Early melee | Rattlekin |
| Fire unit | Emberling |
