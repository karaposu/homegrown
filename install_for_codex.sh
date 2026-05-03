#!/bin/bash
# Install homegrown skills into OpenAI Codex format
# Uses the new homegrown/<skill>/ source layout + homegrown/protocols/
# Each skill becomes ~/.codex/skills/<skill>/SKILL.md (with YAML frontmatter) + references/<ref>.md
# Protocols install to ~/.codex/skills/protocols/
#
# Usage:
#   bash install_for_codex.sh              # global install (~/.codex/skills/)
#
# Remote (curl):
#   curl -sL https://raw.githubusercontent.com/karaposu/homegrown/main/install_for_codex.sh | bash

set -euo pipefail

RAW_URL="https://raw.githubusercontent.com/karaposu/homegrown/main"
CLEANUP=""

# Skills with references/<ref>.md
# (note: sense-making's ref file is sensemaking.md — no hyphen, historical)
SKILLS_WITH_REFS=(
  "sense-making:sensemaking.md"
  "innovate:innovate.md"
  "td-critique:td-critique.md"
  "explore:explore.md"
  "decompose:decompose.md"
  "comprehend:comprehend.md"
  "reflect:reflect.md"
  "navigation:navigation.md"
)

# Loop runner skills (no references/ folder)
SKILLS_NO_REFS=(
  "MVL"
  "MVL+"
  "meta-loop"
)

# Supporting protocols (loaded by runners; not directly invoked)
PROTOCOLS=(
  "branch_inquiry.md"
  "conclude.md"
  "resume.md"
)

# --- Source detection: local repo or remote download ---

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]:-$0}")" 2>/dev/null && pwd 2>/dev/null || pwd)"
HOMEGROWN_DIR="$SCRIPT_DIR/homegrown"

if [ ! -d "$HOMEGROWN_DIR" ]; then
  echo "Downloading Homegrown skills..."
  TMPDIR=$(mktemp -d)
  CLEANUP="$TMPDIR"
  HOMEGROWN_DIR="$TMPDIR/homegrown"
  mkdir -p "$HOMEGROWN_DIR/protocols"

  for entry in "${SKILLS_WITH_REFS[@]}"; do
    skill="${entry%%:*}"
    ref="${entry##*:}"
    mkdir -p "$HOMEGROWN_DIR/$skill/references"
    echo "  downloading $skill"
    curl -fsSL "$RAW_URL/homegrown/$skill/SKILL.md"          -o "$HOMEGROWN_DIR/$skill/SKILL.md"
    curl -fsSL "$RAW_URL/homegrown/$skill/references/$ref"   -o "$HOMEGROWN_DIR/$skill/references/$ref"
  done

  for skill in "${SKILLS_NO_REFS[@]}"; do
    mkdir -p "$HOMEGROWN_DIR/$skill"
    # URL-encode '+' as %2B for safety (some HTTP clients/servers treat literal '+' as space)
    url_skill="${skill//+/%2B}"
    echo "  downloading $skill"
    curl -fsSL "$RAW_URL/homegrown/$url_skill/SKILL.md" -o "$HOMEGROWN_DIR/$skill/SKILL.md"
  done

  for proto in "${PROTOCOLS[@]}"; do
    echo "  downloading protocols/$proto"
    curl -fsSL "$RAW_URL/homegrown/protocols/$proto" -o "$HOMEGROWN_DIR/protocols/$proto"
  done
fi

trap '[ -n "$CLEANUP" ] && rm -rf "$CLEANUP"' EXIT

# --- Target selection: Codex installs are always user-global ---

if [ "$#" -gt 0 ]; then
  echo "Usage: bash install_for_codex.sh"
  echo "  Installs to ~/.codex/skills/."
  exit 1
fi

TARGET="$HOME/.codex/skills"

mkdir -p "$TARGET"

# --- Install function: wrap a homegrown SKILL.md with YAML frontmatter for Codex ---

install_skill_md() {
  local src="$1"
  local skill_name="$2"
  local apply_protocol_sub="${3:-false}"   # third arg, default false; true for MVL/MVL+
  local skill_dir="$TARGET/$skill_name"
  local proto_target="$TARGET/protocols"

  mkdir -p "$skill_dir"

  # The homegrown SKILL.md files start with two unfenced lines (`name: X` / `description: Y`).
  # Codex expects strict YAML frontmatter wrapped in `---` delimiters. Re-wrap.

  local first_line=$(head -1 "$src")
  local second_line=$(sed -n '2p' "$src")
  local has_meta=false
  local skill_desc=""

  if [[ "$first_line" =~ ^name:[[:space:]]*(.*) ]]; then
    has_meta=true
    if [[ "$second_line" =~ ^description:[[:space:]]*(.*) ]]; then
      skill_desc="${BASH_REMATCH[1]}"
    fi
  fi

  if [ -z "$skill_desc" ]; then
    local heading=$(grep -m1 '^# ' "$src" 2>/dev/null || true)
    if [[ "$heading" =~ —[[:space:]]*(.*) ]]; then
      skill_desc="${BASH_REMATCH[1]}"
    else
      skill_desc="$skill_name skill"
    fi
  fi

  {
    echo "---"
    echo "name: $skill_name"
    echo "description: $skill_desc"
    echo "---"
    echo ""
    if $has_meta; then
      # Strip the original two unfenced lines + any blank line that follows
      awk 'NR<=2{next} NR==3 && /^$/{next} {print}' "$src"
    else
      cat "$src"
    fi
  } | {
    # If this skill references protocols (MVL/MVL+), substitute the in-repo path
    # with the install-target absolute path. $proto_target is mode-aware via $TARGET.
    if $apply_protocol_sub; then
      sed "s|homegrown/protocols/|${proto_target}/|g"
    else
      cat
    fi
  } > "$skill_dir/SKILL.md"
}

# --- Install ---

installed=0

for entry in "${SKILLS_WITH_REFS[@]}"; do
  skill="${entry%%:*}"
  ref="${entry##*:}"
  src="$HOMEGROWN_DIR/$skill/SKILL.md"
  ref_src="$HOMEGROWN_DIR/$skill/references/$ref"

  if [ -f "$src" ]; then
    install_skill_md "$src" "$skill"
    if [ -f "$ref_src" ]; then
      mkdir -p "$TARGET/$skill/references"
      cp "$ref_src" "$TARGET/$skill/references/$ref"
    fi
    echo "  OK: $skill (with references/$ref)"
    ((installed++))
  else
    echo "  MISSING: $skill — source not found at $src"
  fi
done

for skill in "${SKILLS_NO_REFS[@]}"; do
  src="$HOMEGROWN_DIR/$skill/SKILL.md"
  if [ -f "$src" ]; then
    # MVL/MVL+ reference homegrown/protocols/<file>.md — pass true to apply protocol-path substitution
    install_skill_md "$src" "$skill" true
    echo "  OK: $skill"
    ((installed++))
  else
    echo "  MISSING: $skill — source not found at $src"
  fi
done

# Install protocols (no frontmatter wrapping — protocols are loaded by skills, not invoked)
mkdir -p "$TARGET/protocols"
proto_count=0
for proto in "${PROTOCOLS[@]}"; do
  src="$HOMEGROWN_DIR/protocols/$proto"
  if [ -f "$src" ]; then
    cp "$src" "$TARGET/protocols/$proto"
    echo "  OK: protocols/$proto"
    ((proto_count++))
  fi
done

# --- Summary ---

echo ""
echo "Done. Installed $installed skills + $proto_count protocols to $TARGET"
echo ""
echo "Skills (invoke with \$skill-name in Codex):"
echo "  \$MVL, \$MVL+, \$meta-loop, \$sense-making, \$innovate, \$td-critique,"
echo "  \$explore, \$decompose, \$comprehend, \$reflect, \$navigation"
echo ""
echo "Protocols (loaded by skills, not directly invoked):"
for proto in "${PROTOCOLS[@]}"; do
  echo "  $TARGET/protocols/$proto"
done
