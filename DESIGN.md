# Underkeep — design bible

Working title: **Underkeep**. Original IP inspired by **Dungeon Keeper 2** (1999, 3D) — NOT DK1 (1997).

## Reference priority
1. **Dungeon Keeper 2** systems, rooms, creature roles, 3D dungeon feel
2. Modernize presentation aggressively (graphics quality is a stated goal)
3. Original names/art/audio only — no EA assets or 1:1 character likenesses

## Graphics goals (push hard)
- Three.js with physically based materials (MeshStandard/Physical)
- Directional + point/torch lights, shadows (where perf allows)
- Post-processing: bloom, mild SSAO/outline, color grade (dark fantasy)
- Higher-poly procedural meshes first; Blender GLTF upgrades later
- Atmospheric fog, emissive lava/heart, animated torch flicker
- Prefer visual fidelity over bare minimum placeholders

## Core loop (DK2-aligned)
- Dungeon Heart lose condition
- Imps/workers dig, claim, fortify, mine, haul
- Hand: pick/drop/slap
- Rooms attract/support creatures; Portal intake
- Training, research, workshop traps/doors
- Heroes invade; possess creature (later)
- Dark humor mentor line (original writing)

## Phase 1 vertical slice
Playable browser prototype: dig/claim/fortify/gold/Heart/hand, core rooms, Portal + early units, one hero wave — with the graphics stack above (not flat unlit cubes).

## Stack
Vite + TypeScript + Three.js (+ postprocessing). Blender for later art. Godot only if we leave browser.

## DK2 deltas vs DK1 (must follow)
- Fully 3D dungeon + 3D creatures (our visual north star, modernized)
- **Mana** regenerates from claimed land (+ mana vaults / temple prayer); spells cost mana, not gold
- Gold still for rooms, wages, training
- Dropping a creature into combat **stuns** briefly (Combat Pit exception for training)
- Training Room levels to ~4; **Combat Pit** for higher levels
- No Dragons/Demon Spawn — **Salamander** is the fire unit
- More humanoid evil roster feel (Warlock, Dark Mistress, Rogue, Black Knight, Goblin, Troll, Bile Demon, Firefly, etc.)
- Horned Reaper as rare call-in support, not a portal grunt
- Skeletons via Prison deaths; Vampires via Graveyard
- Convert via Prison → Torture
- Hero Gates; creature vs hero counterparts cause anger
- My Pet Dungeon sandbox mode = later stretch

## Updated original roster map (DK2 roles → Underkeep)
| Role | DK2 reference | Underkeep |
|------|---------------|-----------|
| Worker | Imp | Scrabbler |
| Scout flyer | Firefly | Skitterwing |
| Early melee | Goblin | Rattlekin |
| Fire unit | Salamander | Emberling |
| Researcher | Warlock | Gravemage |
| Manufacturer | Troll | Forgebrute |
| Tank | Bile Demon | Ironhide |
| Torture specialist | Dark Mistress | Thornwitch |
| Elite call-in | Horned Reaper | Phase 3 unique |

## Phase 1 implementation status (game/)

Playable Vite + TypeScript + Three.js slice at `/workspace/underkeep/game`.

Implemented: grid dig/claim/fortify/mine, Dungeon Heart lose condition, Scrabblers + Create Worker, mana from claimed tiles, Speed + Lightning, hand pick/drop/slap (combat stun on drop), rooms (Treasury/Lair/Hatchery/Training/Library stub/Portal), Portal attraction (Skitterwing/Rattlekin/Emberling), sleep/eat/train/fight jobs, one hero wave, HUD + mentor lines, PBR + shadows + fog + bloom/color grade + emissive heart/torches.

Gaps / later: possess, traps/doors, Combat Pit, research, workshop, Prison/Torture conversion, richer pathing through walls for heroes, audio, GLTF art upgrades.

## Visual north star (YT X35cKEjvgrc from 2:20)
Feel targets only — original IP art:
- Distinct dirt / solid rock / claimed stone (strong ownership readability)
- Dig: workers chip, blocks shrink/crumble, then open
- Claim: dirt → paved stone immediately obvious
- Rooms: floor material + props (not outline-only)
- Creatures: readable silhouettes at overview zoom
- Warm torch pools; heart glow secondary to terrain readability
- Angled elevated camera; clear tile seams; FoW optional later
