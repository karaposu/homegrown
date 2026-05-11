# Innovation: protocol_path_generalization

## User Input

Develop concrete designs (with proposed wording, exact sed lines, and specific insertion points) for each of the 7 pieces from decomposition. Sensemaking concluded Option C (installer-time sed substitution).

---

## Direction

Sensemaking is decisive. Innovation here is mostly mechanical — produce the exact strings to paste. No abstract design space to explore (the verdict is committed). Apply mechanisms only where there's genuine choice (e.g., where to inject the sed in install_for_codex.sh).

---

## Piece 1 — Revert MVL/MVL+ SKILL.md path wording

### Mechanism applied: Constraint manipulation (single literal in-repo path)

**Current wording (commands/MVL.md lines 138-142):**
```
- **YES — the question is answered:**

  Load the **CONCLUDE** protocol file in full and execute it on this inquiry's folder. The protocol lives at `~/.claude/skills/protocols/conclude.md` (when installed via the homegrown skills installer) OR `homegrown/protocols/conclude.md` (when working in the homegrown repo itself). Try the installed path first; fall back to the repo path. CONCLUDE compiles the SIC artifacts into `finding.md` (using the standardized template + style rules + size-adaptive guidance defined in the protocol), archives discipline outputs to `docarchive/`, updates `_state.md` to status COMPLETE, prints the brief summary, and prints any `## Relationships` pointers.

  Do not execute CONCLUDE from memory; always load the protocol file before invoking.
```

**Proposed wording (commands/MVL.md):**
```
- **YES — the question is answered:**

  Load `homegrown/protocols/conclude.md` in full and execute the **CONCLUDE** protocol on this inquiry's folder. CONCLUDE compiles the SIC artifacts into `finding.md` (using the standardized template + style rules + size-adaptive guidance defined in the protocol), archives discipline outputs to `docarchive/`, updates `_state.md` to status COMPLETE, prints the brief summary, and prints any `## Relationships` pointers.

  Do not execute CONCLUDE from memory; always load `homegrown/protocols/conclude.md` before invoking.
```

**Proposed wording (commands/MVL+.md, currently lines 146-150):** same pattern but with extended-pipeline framing preserved:
```
- **YES — the question is answered:**

  Load `homegrown/protocols/conclude.md` in full and execute the **CONCLUDE** protocol on this inquiry's folder. CONCLUDE compiles the loop's artifacts (exploration, sensemaking, decomposition, innovation, critique) into `finding.md` (using the standardized template + style rules + size-adaptive guidance defined in the protocol; CONCLUDE auto-detects the extended pipeline from `_state.md`'s `flow-type: extended` field), archives discipline outputs to `docarchive/`, updates `_state.md` to status COMPLETE, prints the brief summary, and prints any `## Relationships` pointers (using `/MVL+` as the resume runner unless the parent's flow-type is classic, in which case `/MVL`).

  Do not execute CONCLUDE from memory; always load `homegrown/protocols/conclude.md` before invoking.
```

**Net edit:** ~3 lines per file × 2 files = ~6 lines net change (rewording, slight shrink).

---

## Piece 2 — Re-sync homegrown SKILL.md

### Mechanism: trivial cp

**Action:**
```bash
cp commands/MVL.md homegrown/MVL/SKILL.md
cp commands/MVL+.md homegrown/MVL+/SKILL.md
```

**Verification:**
```bash
diff commands/MVL.md homegrown/MVL/SKILL.md   # expect empty
diff commands/MVL+.md homegrown/MVL+/SKILL.md # expect empty
```

**Net edit:** 0 lines (mechanical sync).

---

## Piece 3 — Add sed substitution to install_for_claude.sh

### Mechanism applied: Constraint manipulation (one-line substitution wrapper)

**Current code (install_for_claude.sh lines ~47-51):**
```bash
for skill in "${skills_no_refs[@]}"; do
  echo "  $skill"
  mkdir -p "$SKILLS_DIR/$skill"
  # URL-encode '+' as %2B for safety (some HTTP clients/servers treat literal '+' as space)
  url_skill="${skill//+/%2B}"
  curl -fsSL "$REPO_URL/homegrown/$url_skill/SKILL.md" -o "$SKILLS_DIR/$skill/SKILL.md"
done
```

**Proposed code (replace the single-line curl with a piped sed substitution):**
```bash
for skill in "${skills_no_refs[@]}"; do
  echo "  $skill"
  mkdir -p "$SKILLS_DIR/$skill"
  # URL-encode '+' as %2B for safety (some HTTP clients/servers treat literal '+' as space)
  url_skill="${skill//+/%2B}"
  # MVL/MVL+ reference homegrown/protocols/<file>.md; substitute with install target path
  curl -fsSL "$REPO_URL/homegrown/$url_skill/SKILL.md" \
    | sed 's|homegrown/protocols/|~/.claude/skills/protocols/|g' \
    > "$SKILLS_DIR/$skill/SKILL.md"
done
```

**Why this works:**
- Cross-platform sed via stdin/stdout (no `-i` flag); macOS BSD sed and Linux GNU sed both handle this.
- `|` as delimiter (not `/`) avoids escaping the slashes in the path.
- Only applied to the skills_no_refs loop (MVL, MVL+) — these are the only skills that reference protocols. Other skills are downloaded normally.
- Idempotent: re-running re-applies the substitution from fresh source content.

**Net edit:** ~3 lines added (the sed pipe + comment).

---

## Piece 4 — Add sed substitution to install_for_codex.sh

### Mechanism applied: Combination (extend install_skill_md to optionally apply substitution)

**Current install_skill_md (install_for_codex.sh lines 127-171):** uses awk to strip the unfenced first 2 lines + writes wrapped SKILL.md to target.

**Proposed change — extend `install_skill_md` to accept a third argument and conditionally apply sed:**

```bash
install_skill_md() {
  local src="$1"
  local skill_name="$2"
  local apply_protocol_sub="${3:-false}"   # NEW: third arg, default false
  local skill_dir="$TARGET/$skill_name"

  mkdir -p "$skill_dir"

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

  # NEW: if this skill references protocols, compute the install-target path for substitution
  local proto_target="$TARGET/protocols"

  {
    echo "---"
    echo "name: $skill_name"
    echo "description: $skill_desc"
    echo "---"
    echo ""
    if $has_meta; then
      awk 'NR<=2{next} NR==3 && /^$/{next} {print}' "$src"
    else
      cat "$src"
    fi
  } | {
    if $apply_protocol_sub; then
      sed "s|homegrown/protocols/|${proto_target}/|g"
    else
      cat   # passthrough
    fi
  } > "$skill_dir/SKILL.md"
}
```

**Update the two callers for MVL and MVL+:**

Find lines around 184 and 199 — the calls in the no-refs loop:
```bash
for skill in "${SKILLS_NO_REFS[@]}"; do
  src="$HOMEGROWN_DIR/$skill/SKILL.md"
  if [ -f "$src" ]; then
    install_skill_md "$src" "$skill" true   # CHANGED: pass true for apply_protocol_sub
    echo "  OK: $skill"
    ((installed++))
  else
    echo "  MISSING: $skill — source not found at $src"
  fi
done
```

The other caller (in the SKILLS_WITH_REFS loop) keeps the default false — those skills don't reference protocols.

**Why this works:**
- `$TARGET` is already mode-aware (`~/.codex/skills` for --user; `.codex/skills` for --repo). So `$TARGET/protocols` is the correct install-target protocols path for whichever mode.
- The substitution runs AFTER the awk-stripping but BEFORE the write — so it operates on the final wrapped content.
- Default-false third arg keeps existing callers unchanged (no risk of accidental substitution on non-protocol-referencing skills).

**Net edit:** ~6 lines added (the third arg + the conditional sed pipe + the proto_target var + the `true` arg in MVL/MVL+ callers).

---

## Piece 5 — Verify install_for_claude.sh dry-run

### Mechanism applied: empirical validation

**Action:**
```bash
# Dry-run: simulate install via cp + sed (skip curl since we have local source)
SKILLS_DIR="/tmp/claude_install_test"
rm -rf "$SKILLS_DIR"
mkdir -p "$SKILLS_DIR/MVL" "$SKILLS_DIR/MVL+" "$SKILLS_DIR/protocols"

sed 's|homegrown/protocols/|~/.claude/skills/protocols/|g' \
  homegrown/MVL/SKILL.md > "$SKILLS_DIR/MVL/SKILL.md"
sed 's|homegrown/protocols/|~/.claude/skills/protocols/|g' \
  homegrown/MVL+/SKILL.md > "$SKILLS_DIR/MVL+/SKILL.md"
cp homegrown/protocols/conclude.md "$SKILLS_DIR/protocols/"

# Verify
grep -c "~/.claude/skills/protocols/conclude.md" "$SKILLS_DIR/MVL/SKILL.md"
grep -c "homegrown/protocols/" "$SKILLS_DIR/MVL/SKILL.md"

# Expected: first grep returns 2 (the two CONCLUDE-load mentions), second returns 0.
```

**Verification criteria:**
- [ ] `~/.claude/skills/protocols/conclude.md` count: 2 (load instruction + don't-load-from-memory line).
- [ ] `homegrown/protocols/` count: 0.
- [ ] Same for MVL+.

**Net edit:** 0 lines (verification only).

---

## Piece 6 — Verify install_for_codex.sh dry-run

### Action

```bash
# Dry-run: bash install_for_codex.sh --repo (uses local homegrown/ source)
bash install_for_codex.sh --repo

# Verify
grep ".codex/skills/protocols/conclude.md" .codex/skills/MVL/SKILL.md   # expect 2 hits
grep "homegrown/protocols/" .codex/skills/MVL/SKILL.md                   # expect 0 hits

# Cleanup
rm -rf .codex
```

**Verification criteria:**
- [ ] For --repo mode: `.codex/skills/protocols/conclude.md` appears 2 times in MVL/SKILL.md and MVL+/SKILL.md.
- [ ] No `homegrown/protocols/` references in installed files.
- [ ] YAML frontmatter still wrapped correctly.
- [ ] Other skills (sense-making, etc.) installed normally without protocol-path issues.

**Net edit:** 0 lines.

---

## Piece 7 — Update homegrown/protocols/resume.md failure-mode message

### Mechanism applied: Constraint manipulation (single-path consistency)

**Current line 160:**
```
- **Load failure** — if RESUME itself can't be loaded (e.g., file system error reading the protocol file at `~/.claude/skills/protocols/resume.md` or `homegrown/protocols/resume.md`), the runner's fallback should HALT and tell the user: "Could not load the resume protocol file. Run RESUME manually by checking `_state.md` and continuing the pipeline from the first incomplete discipline."
```

**Proposed wording:**
```
- **Load failure** — if RESUME itself can't be loaded (file system error reading the protocol file), the runner's fallback should HALT and tell the user: "Could not load the resume protocol file. Run RESUME manually by checking `_state.md` and continuing the pipeline from the first incomplete discipline."
```

**Rationale:** Drop the path enumeration entirely from this message. The message is for users seeing the error — they don't need to know which path was attempted (the error itself will include the path). The simplification is consistent with Option C: each install context has a single literal path, so listing alternatives in the user-facing error is redundant.

**Net edit:** ~1 line (drop the parenthetical path list).

---

## Assembly Check

The recommended Configuration: all 7 pieces with the proposed wording above.

### Does the assembly cohere?

YES:
- Source SKILL.md (Pieces 1, 2) uses single literal `homegrown/protocols/conclude.md` path — works as-is in-repo.
- Install scripts (Pieces 3, 4) substitute the literal path with install-target path during copy — each install gets a single literal correct path.
- Verification (Pieces 5, 6) confirms the substitution worked correctly across both installers.
- Auxiliary cleanup (Piece 7) drops redundant path enumeration from resume.md user-facing error.

### Total edit estimate

| Piece | File(s) | Lines |
|---|---|---|
| 1 | commands/MVL.md, commands/MVL+.md | ~6 net |
| 2 | homegrown/MVL/SKILL.md, homegrown/MVL+/SKILL.md | 0 (cp) |
| 3 | install_for_claude.sh | ~3 added |
| 4 | install_for_codex.sh | ~6 added |
| 5 | (verification) | 0 |
| 6 | (verification) | 0 |
| 7 | homegrown/protocols/resume.md | ~1 net |
| **Total** | 6 files | **~16 lines** |

Time: ~25-40 min focused editing + verification.

---

## Mechanism Coverage (Telemetry)

* Generators applied: 1 / 4 (Combination — Piece 4's third-arg pattern). Most pieces are mechanical, no generation needed.
* Framers applied: 2 / 3 (Constraint Manipulation — Pieces 1, 3, 7; Inversion — implicit in Piece 1's "drop dual-path enumeration").
* Convergence: YES — sensemaking concluded Option C; innovation just produces concrete wording for it.
* Survivors tested: 7 / 7 — each piece's wording is concrete and executable.
* Failure modes observed: None.
* **Overall: PROCEED.** Innovation here is delivery, not exploration. Sensemaking did the structural work.

---

## Recommended Configuration (summary)

Apply all 7 pieces with the proposed wording above. ~16 lines edited across 6 files. ~25-40 min total.

**Phasing:**
- Phase 1 (Source, sequential waves):
  - Wave 1 parallel: Piece 1a (commands/MVL.md), Piece 1b (commands/MVL+.md).
  - Wave 2 parallel: Piece 2a (cp → homegrown/MVL/SKILL.md), Piece 2b (cp → homegrown/MVL+/SKILL.md).
- Phase 2 (Install scripts, parallel after Phase 1): Piece 3 (install_for_claude.sh), Piece 4 (install_for_codex.sh).
- Phase 3 (Verification, parallel after Phase 2): Piece 5 (Claude dry-run), Piece 6 (Codex dry-run).
- Auxiliary (anytime): Piece 7 (resume.md message).
