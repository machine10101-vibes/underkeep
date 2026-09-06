# Underkeep — Phase 1

Original-IP dungeon management game inspired by **Dungeon Keeper 2** (3D). Dark-fantasy keeper sim: dig, claim, fortify, build rooms, attract minions, and crush heroes. Protect the **Dungeon Heart**.

## Run

```bash
cd /workspace/underkeep/game
npm install
npm run dev
```

Open the URL Vite prints (default `http://localhost:5173`).

Production build:

```bash
npm run build
npm run preview
```

## Controls

| Input | Action |
|-------|--------|
| **LMB** | Use tool (paint dig/claim/fortify/rooms) · Hand: pick up creature |
| **RMB** | Slap creature · Cancel tile mark · Drop held creature |
| **Space** | Drop held creature |
| **WASD / Arrows** | Pan camera |
| **Mouse wheel** | Zoom |
| **1** | Hand / Select |
| **2** | Dig mark |
| **3** | Claim mark |
| **4** | Fortify mark |
| **5–0** | Rooms: Treasury, Lair, Hatchery, Training, Library, Portal |
| **Q** | Create Scrabbler (gold; cost scales) |
| **E** | Speed Burst (mana) — haste all minions |
| **R** | Lightning (mana) — strike nearest hero |

Dropping a creature into a fight **stuns** them briefly (DK2-style).

## Phase 1 loop

1. Mark earth/gold for digging; Scrabblers dig & mine.
2. Mark dirt to **claim**; claimed tiles regenerate **mana**.
3. Fortify adjacent earth walls.
4. Build rooms on claimed tiles (costs gold).
5. Place a **Portal**; attract **Skitterwing**, **Rattlekin**, **Emberling** when thresholds are met.
6. Minions sleep (Lair), eat (Hatchery), train (Training).
7. ~90s in, a **hero wave** marches toward the Heart — survive to win.

## Stack

Vite + TypeScript + Three.js (PBR, shadows, fog, bloom, color grade).

## Roster (original names)

| Role | Name |
|------|------|
| Worker | Scrabbler |
| Scout flyer | Skitterwing |
| Early melee | Rattlekin |
| Fire unit | Emberling |
