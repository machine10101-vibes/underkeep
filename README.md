# Underkeep — Phase 1

Original-IP dungeon management game inspired by **Dungeon Keeper 2** (3D). Dark-fantasy keeper sim: dig, claim, fortify, build rooms, attract minions, and crush heroes. Protect the **Dungeon Heart**.

## Play online

**https://machine10101-vibes.github.io/underkeep/?v=pass9**

Pass 9 play: tagged earth is the order. Scrabblers dig, claim, and haul before chores; rooms and the Portal attract a working dungeon; heroes march on the Heart.

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
| **5–0** | Rooms: Treasury, Lair, Hatchery, Training, Library, Portal |
| **Q** | Create Scrabbler (gold; cost scales) |
| **E** | Speed Burst (mana) — haste all minions |
| **R** | Lightning (mana) — strike nearest hero |
| **T** | Heal (mana; Library research unlock) |
| **P** | Possess (mana) — FP control one minion; Esc exits |
| **B** / **N** | Wooden / Stone bridge over lava or water |
| **U** | Workshop room |
| **J** / **K** / **H** | Prison / Torture Chamber / Graveyard |
| **M** / **C** | Temple / Combat Pit |
| **L** | Creature roster sheet |

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

1. Mark earth/gold for digging; Scrabblers dig & mine.
2. Mark dirt to **claim**; claimed tiles regenerate **mana**.
3. Fortify adjacent earth walls.
4. Build rooms on claimed tiles (costs gold).
5. Place a **Portal**; attract **Skitterwing**, **Rattlekin**, **Emberling** when thresholds are met.
6. Minions sleep (Lair), eat (Hatchery), train (Training).
7. Hero waves march toward the Heart — **survive 3 waves** OR gather **2500 gold** to win.
8. **Fog of war** — unexplored tiles stay dark until dig/claim / LOS from claimed land.
9. Idle Scrabblers **auto-fortify** soft earth walls adjacent to claimed territory (rock stays impassable).
10. **Workshop** — Scrabblers craft free door/Sentry kits (or discounted gold builds).
11. **Minimap** — explored/claimed overview with Heart marker.
10. **Lava** burns non-resistant units; Scrabblers will not path across — build **wooden/stone bridges**.
11. **Possess** a minion (mana) for temporary FP steering; Esc returns to Keeper view.
12. **Payday** drains wages from the Treasury; empty coffers crash moods.

## Stack

Vite + TypeScript + Three.js (PBR, shadows, fog, bloom, color grade).

## Roster (original names)

| Role | Name |
|------|------|
| Worker | Scrabbler |
| Scout flyer | Skitterwing |
| Early melee | Rattlekin |
| Fire unit | Emberling |
