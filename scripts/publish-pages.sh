#!/usr/bin/env bash
# Build Underkeep and push dist/ to the gh-pages branch (GitHub Pages).
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

BUILD="$(sed -n 's/.*name="underkeep-build" content="\([^"]*\)".*/\1/p' index.html | head -1)"
BUILD="${BUILD:-dev}"
MSG="${1:-Deploy ${BUILD}: live GitHub Pages}"

echo "[publish-pages] building ${BUILD}…"
npm run build
touch dist/.nojekyll

WORKTREE="${TMPDIR:-/tmp}/underkeep-gh-pages"
if git worktree list | grep -q "${WORKTREE}"; then
  git -C "${WORKTREE}" fetch origin gh-pages
  git -C "${WORKTREE}" reset --hard origin/gh-pages
else
  rm -rf "${WORKTREE}"
  git fetch origin gh-pages
  git worktree add -B gh-pages "${WORKTREE}" origin/gh-pages
fi

# Replace published files; keep the branch git metadata.
find "${WORKTREE}" -mindepth 1 -maxdepth 1 ! -name '.git' -exec rm -rf {} +
cp -a dist/. "${WORKTREE}/"
touch "${WORKTREE}/.nojekyll"

git -C "${WORKTREE}" add -A
if git -C "${WORKTREE}" diff --cached --quiet; then
  echo "[publish-pages] nothing new to publish"
  exit 0
fi

git -C "${WORKTREE}" commit -m "${MSG}"

delay=4
for attempt in 1 2 3 4 5; do
  if git -C "${WORKTREE}" push origin gh-pages; then
    echo "[publish-pages] live: https://machine10101-vibes.github.io/underkeep/?v=${BUILD}"
    exit 0
  fi
  if [ "${attempt}" -eq 5 ]; then
    echo "[publish-pages] push failed after ${attempt} attempts" >&2
    exit 1
  fi
  echo "[publish-pages] push retry ${attempt} in ${delay}s…"
  sleep "${delay}"
  delay=$((delay * 2))
done
