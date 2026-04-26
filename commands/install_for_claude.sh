#!/bin/bash
# Install homegrown slash commands for Claude Code
# Usage: curl -sL https://raw.githubusercontent.com/karaposu/homegrown/main/commands/install_for_claude.sh | bash

set -e

REPO_URL="https://raw.githubusercontent.com/karaposu/homegrown/main"
COMMANDS_DIR="$HOME/.claude/commands"

mkdir -p "$COMMANDS_DIR"

# --- Slash Commands ---

echo "Installing slash commands..."

commands=(
  MVL.md
  MVL+.md
  comprehend.md
  decompose.md
  elaborate.md
  explore.md
  innovate.md
  inquiry.md
  navigation.md
  reflect.md
  sense-making.md
  td-critique.md
  wayfinding.md
)

for cmd in "${commands[@]}"; do
  echo "  downloading $cmd"
  curl -sL "$REPO_URL/commands/$cmd" -o "$COMMANDS_DIR/$cmd"
done

# --- Summary ---

echo ""
echo "Done. Installed ${#commands[@]} slash commands to $COMMANDS_DIR"
echo ""
echo "Slash commands: /MVL, /MVL+, /comprehend, /decompose, /elaborate, /explore, /innovate, /inquiry, /navigation, /reflect, /sense-making, /td-critique, /wayfinding"
echo ""
echo "Using Cursor? You can simply run:"
echo ""
echo "  mkdir -p ~/.cursor/commands && cp ~/.claude/commands/*.md ~/.cursor/commands/"
echo ""
echo "Or for project-specific:"
echo "  mkdir -p .cursor/commands && cp ~/.claude/commands/*.md .cursor/commands/"
