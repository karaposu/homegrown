#!/bin/bash
# Install the bf4ae1f-prefixed snapshot of homegrown skills for Claude Code.
#
# Source: ./bf4ae1f-hg/ (extracted from commit bf4ae1f, with all skills
# renamed with a bf4ae1f- prefix so they install side-by-side with the
# current homegrown skills under distinct slash commands).
#
# Usage (from the project root, where bf4ae1f-hg/ lives):
#     bash install_bf4ae1f_for_claude.sh
#
# Effect:
#   - Installs 11 skills as /bf4ae1f-<name> in $HOME/.claude/skills/
#   - Installs supporting protocols to $HOME/.claude/skills/bf4ae1f-protocols/
#   - Does NOT touch the current homegrown installation
#
# To uninstall: rm -rf $HOME/.claude/skills/bf4ae1f-* $HOME/.claude/skills/bf4ae1f-protocols

set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
SOURCE_DIR="$SCRIPT_DIR/bf4ae1f-hg"
SKILLS_DIR="$HOME/.claude/skills"

if [ ! -d "$SOURCE_DIR" ]; then
  echo "Error: $SOURCE_DIR not found."
  echo "Run this script from the directory that contains bf4ae1f-hg/."
  exit 1
fi

mkdir -p "$SKILLS_DIR"

echo "Installing bf4ae1f snapshot from $SOURCE_DIR ..."

# --- Disciplines (each with SKILL.md + references/<ref-file>.md) ---

skills_with_refs=(
  "bf4ae1f-sense-making:sensemaking.md"
  "bf4ae1f-innovate:innovate.md"
  "bf4ae1f-td-critique:td-critique.md"
  "bf4ae1f-explore:explore.md"
  "bf4ae1f-decompose:decompose.md"
  "bf4ae1f-comprehend:comprehend.md"
  "bf4ae1f-reflect:reflect.md"
  "bf4ae1f-navigation:navigation.md"
)

skills_no_refs=(
  "bf4ae1f-MVL"
  "bf4ae1f-MVL+"
  "bf4ae1f-meta-loop"
)

# Sed program that rewrites the path placeholders inside SKILL.md files
# at install time. The source files use:
#   homegrown/protocols/X.md            -> the (renamed) protocol install dir
#   homegrown/bf4ae1f-<skill>/...       -> the (renamed) skill install dir
# Both rewrites resolve to absolute paths so the agent can read them at
# runtime without depending on the source-repo location.
SED_REWRITE="
  s|homegrown/protocols/|${HOME}/.claude/skills/bf4ae1f-protocols/|g;
  s|homegrown/bf4ae1f-|${HOME}/.claude/skills/bf4ae1f-|g
"

for entry in "${skills_with_refs[@]}"; do
  skill="${entry%%:*}"
  ref="${entry##*:}"
  echo "  $skill (with references/$ref)"
  mkdir -p "$SKILLS_DIR/$skill/references"
  sed -e "$SED_REWRITE" "$SOURCE_DIR/$skill/SKILL.md"        > "$SKILLS_DIR/$skill/SKILL.md"
  cp                    "$SOURCE_DIR/$skill/references/$ref"   "$SKILLS_DIR/$skill/references/$ref"
done

for skill in "${skills_no_refs[@]}"; do
  echo "  $skill"
  mkdir -p "$SKILLS_DIR/$skill"
  sed -e "$SED_REWRITE" "$SOURCE_DIR/$skill/SKILL.md"        > "$SKILLS_DIR/$skill/SKILL.md"
done

# Navigation owns warmup support files loaded by path; copy them too.
echo "  bf4ae1f-navigation/warmup/"
mkdir -p "$SKILLS_DIR/bf4ae1f-navigation/warmup"
cp "$SOURCE_DIR/bf4ae1f-navigation/warmup/"*.md "$SKILLS_DIR/bf4ae1f-navigation/warmup/"

# --- Protocols (loaded by /bf4ae1f-MVL, /bf4ae1f-MVL+, /bf4ae1f-meta-loop) ---

echo "Installing protocols to bf4ae1f-protocols/ ..."

protocols=(
  "branch_inquiry.md"
  "conclude.md"
  "resume.md"
)

mkdir -p "$SKILLS_DIR/bf4ae1f-protocols"
for proto in "${protocols[@]}"; do
  echo "  bf4ae1f-protocols/$proto"
  cp "$SOURCE_DIR/protocols/$proto" "$SKILLS_DIR/bf4ae1f-protocols/$proto"
done

# --- Summary ---

skill_count=$(( ${#skills_with_refs[@]} + ${#skills_no_refs[@]} ))
proto_count=${#protocols[@]}

echo ""
echo "Done. Installed $skill_count bf4ae1f skills + $proto_count bf4ae1f protocols to $SKILLS_DIR"
echo ""
echo "Skills (invoke as /<skill-name>):"
echo "  /bf4ae1f-MVL, /bf4ae1f-MVL+, /bf4ae1f-meta-loop,"
echo "  /bf4ae1f-sense-making, /bf4ae1f-innovate, /bf4ae1f-td-critique,"
echo "  /bf4ae1f-explore, /bf4ae1f-decompose, /bf4ae1f-comprehend,"
echo "  /bf4ae1f-reflect, /bf4ae1f-navigation"
echo ""
echo "Protocols (loaded by skills, not user-invoked):"
for proto in "${protocols[@]}"; do
  echo "  $SKILLS_DIR/bf4ae1f-protocols/$proto"
done
echo ""
echo "These coexist with the current /MVL, /sense-making, etc. so you can"
echo "A/B compare the bf4ae1f state against the current state."
