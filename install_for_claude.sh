#!/bin/bash
# Install homegrown skills (and supporting protocols) for Claude Code
# Usage: curl -sL https://raw.githubusercontent.com/karaposu/homegrown/main/install_for_claude.sh | bash

set -e

REPO_URL="https://raw.githubusercontent.com/karaposu/homegrown/main"
SKILLS_DIR="$HOME/.claude/skills"

mkdir -p "$SKILLS_DIR"

# --- Skills (each with SKILL.md + references/<ref-file>.md) ---

# Disciplines + loop runners. Layout:  homegrown/<skill>/SKILL.md  +  homegrown/<skill>/references/<ref>.md
# Note: sense-making's reference file is named `sensemaking.md` (no hyphen) — historical.

echo "Installing homegrown skills to $SKILLS_DIR ..."

# (skill-name : reference-file-name)  — one per line; reference left blank for skills with no references/
skills_with_refs=(
  "sense-making:sensemaking.md"
  "innovate:innovate.md"
  "td-critique:td-critique.md"
  "explore:explore.md"
  "decompose:decompose.md"
  "comprehend:comprehend.md"
  "reflect:reflect.md"
  "navigation:navigation.md"
)

skills_no_refs=(
  "MVL"
  "MVL+"
  "meta-loop"
)

for entry in "${skills_with_refs[@]}"; do
  skill="${entry%%:*}"
  ref="${entry##*:}"
  echo "  $skill (with references/$ref)"
  mkdir -p "$SKILLS_DIR/$skill/references"
  curl -fsSL "$REPO_URL/homegrown/$skill/SKILL.md"          -o "$SKILLS_DIR/$skill/SKILL.md"
  curl -fsSL "$REPO_URL/homegrown/$skill/references/$ref"   -o "$SKILLS_DIR/$skill/references/$ref"
done

for skill in "${skills_no_refs[@]}"; do
  echo "  $skill"
  mkdir -p "$SKILLS_DIR/$skill"
  # URL-encode '+' as %2B for safety (some HTTP clients/servers treat literal '+' as space)
  url_skill="${skill//+/%2B}"
  # MVL/MVL+ reference homegrown/protocols/<file>.md; substitute with install target path.
  # Using ${HOME} (not literal ~) so the resulting installed SKILL.md contains an absolute
  # path that doesn't depend on tilde expansion at agent read-time.
  curl -fsSL "$REPO_URL/homegrown/$url_skill/SKILL.md" \
    | sed "s|homegrown/protocols/|${HOME}/.claude/skills/protocols/|g" \
    > "$SKILLS_DIR/$skill/SKILL.md"
done

# --- Protocols (loaded by /MVL, /MVL+, future runners) ---
# Installed alongside skills under ~/.claude/skills/protocols/ for a single canonical location.

echo "Installing protocols..."

protocols=(
  "branch_inquiry.md"
  "conclude.md"
  "resume.md"
)

mkdir -p "$SKILLS_DIR/protocols"
for proto in "${protocols[@]}"; do
  echo "  protocols/$proto"
  curl -fsSL "$REPO_URL/homegrown/protocols/$proto" -o "$SKILLS_DIR/protocols/$proto"
done

# --- Summary ---

skill_count=$(( ${#skills_with_refs[@]} + ${#skills_no_refs[@]} ))
proto_count=${#protocols[@]}

echo ""
echo "Done. Installed $skill_count skills + $proto_count protocols to $SKILLS_DIR"
echo ""
echo "Skills (invoke as /<skill-name>):"
echo "  /MVL, /MVL+, /meta-loop, /sense-making, /innovate, /td-critique,"
echo "  /explore, /decompose, /comprehend, /reflect, /navigation"
echo ""
echo "Protocols (loaded by skills, not user-invoked):"
for proto in "${protocols[@]}"; do
  echo "  $SKILLS_DIR/protocols/$proto"
done
echo ""


# Persistent Effort: Add "effortLevel": "max" to your ~/.claude/settings.json file to make max the default.
