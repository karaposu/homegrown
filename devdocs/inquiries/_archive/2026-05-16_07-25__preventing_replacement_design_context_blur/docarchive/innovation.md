# Innovation: Preventing Replacement-Design Context Blur

## User Input

Inquiry `_branch.md`. Input: decomposition.md (6 pieces P1-P6 with verification criteria + interfaces + execution order) + sensemaking.md (D11 committed) + exploration.md. Mode: elaboration — structural design settled; produce concrete artifacts per piece. Apply Combination + Domain Transfer + Absence-Recognition + Constraint Manipulation where they aid concrete content.

---

## Seed and Direction

**Seed:** The structural design (D11) is settled. The inquiry needs concrete operational content for 6 pieces so Critique can evaluate per the 3 core commits + cross-cutting.

**Direction (intuition):** Lean on the user's existing `protocols/_archive/` precedent; honor reversibility; keep procedure short and copy-pastable; the convention doc is the load-bearing artifact (it's the future-state instruction for handling new experimental skills, not just a cleanup-of-current-state).

**Valuation signal:** The convention doc carries the highest leverage because it's reused for every future experimental skill. Optimize that piece for clarity and forward-applicability.

---

## P1 — Cannon-Set Verification (User-Facing Content)

### Generic form

Ask the user about the decompose-flag question and any other potentially-ambiguous cannon entries.

### Focused form (the actual artifact)

This is the content that would appear in the finding's Open Questions / Next Actions section:

```markdown
**Open Question — Decompose cannon status (please confirm)**

You listed 7 cannon skills (`explore`, `innovate`, `MVL`, `MVL+`, `protocols`,
`sense-making`, `td-critique`). `decompose` was not on the list. However, the
`/MVL+` pipeline (E → S → **D** → I → C) invokes the Decomposition discipline,
which loads from `~/.claude/skills/decompose/`. So `decompose` is *functionally
cannon-by-runtime*.

**Default recommendation:** Treat `cognitive_harness/decompose/` as cannon
(leave in place; do not archive). The listing omission was most likely accidental.

**Override:** If you want `decompose` to be truly experimental — e.g., you have
a replacement Decomposition skill planned — confirm and we'll archive both
`cognitive_harness/decompose/` AND `~/.claude/skills/decompose/`. Note that
after archiving, `/MVL+`'s D step would break unless an alternate Decomposition
spec is registered as `decompose` in the runtime registry.

Confirm:
- [ ] keep `decompose` as cannon (default)
- [ ] archive `decompose` (and accept the /MVL+ consequence)
- [ ] other (please specify)
```

**Sanity-check note** (also for the finding, but as a confidence statement):

> The other 7 user-listed cannon entries (explore, innovate, MVL, MVL+, protocols, sense-making, td-critique) are all either runtime-invoked by /MVL+ or active workflow components. No silent omission like decompose was detected for any other skill. The cannon list is otherwise consistent.

### Contrarian variant tested and rejected

*Could the inquiry just decide for the user (archive or keep) without flagging?* — No. The choice carries asymmetric risk (archiving decompose breaks /MVL+; keeping it might mask a deliberate user intent). Auto-deciding either way violates the user-flag mandate from Sensemaking's Ambiguity 3 resolution. **REJECT** auto-decide.

### 5-test cycle

- Novelty: Clear yes/no/other framing with risk-stated default. Not novel in form but novel in surfacing the runtime-dependency that user-list missed.
- Scrutiny survival: "Why ask?" — Asking is appropriate because the answer determines whether /MVL+'s D step continues to work; this is load-bearing risk. Survives.
- Fertility: Enables forward action (confirms the archive list).
- Actionability: User reads + responds + we proceed.
- Mechanism independence: Single-form question; convergence trivial.

**Disposition: ACTIONABLE.**

---

## P2 — Profile A: Active SKILL Disposition

### Generic form

Move + unregister per skill. Active-replacement note about slot reuse.

### Focused form (the actual commands and notes)

```bash
# Run AFTER P1's cannon list is confirmed.

# navigation — actively being redesigned
mv cognitive_harness/navigation cognitive_harness/_archive/navigation
rm -rf ~/.claude/skills/navigation

# meta-loop — actively being redesigned (currently stub-shaped: SKILL.md only)
mv cognitive_harness/meta-loop cognitive_harness/_archive/meta-loop
rm -rf ~/.claude/skills/meta-loop
```

**Active-replacement slot-reuse note:**

After the move, `cognitive_harness/navigation/` and `cognitive_harness/meta-loop/` are *empty*. The replacement (v2) design begins fresh in those slots — no folder exists at the path until the user authors the new SKILL.md. The agent encounters no prior version when designing v2 (M1 vector neutralized by registry removal; M2 vector neutralized by the absence of the folder).

If preferred, the replacement may use a new name (e.g., `cognitive_harness/navigation_v2/`) rather than reusing the original slot — this is a style choice; both work.

**Pre-move check (defensive):** If the user has already started v2 work *inside* `cognitive_harness/navigation/` (e.g., mixed v1+v2 files), the move would carry v2 along into `_archive/`. Confirm the folder contains only v1 before moving. If unsure: `git status` to see uncommitted changes; consider stashing or committing first.

### Inversion test (system-level)

*What if active SKILLs SHOULDN'T be archived at all because the user is mid-design?* The inverse implies: live with M1+M2 for the active set; pay the context-blur cost for now. But the user's whole point is wanting to AVOID this cost during active design. Inverse fails — the archive timing is precisely WHEN the user wants the slot freed. **Direct form holds.**

### 5-test cycle

- Novelty: Standard mv+rm. The slot-reuse note is the load-bearing novel content.
- Scrutiny survival: Pre-move check addresses the strongest objection (mixed v1+v2 risk). Survives.
- Fertility: Enables clean v2 design conversations.
- Actionability: Yes; copy-pasteable.
- Mechanism independence: Inversion-test confirmed.

**Disposition: ACTIONABLE.**

---

## P3 — Profile B: Dormant SKILL Disposition

### Focused form (the actual commands and notes)

```bash
# Run AFTER P1's cannon list is confirmed.

# comprehend — dormant (no edits since Apr 26; no replacement in progress)
mv cognitive_harness/comprehend cognitive_harness/_archive/comprehend
rm -rf ~/.claude/skills/comprehend

# reflect — dormant (same)
mv cognitive_harness/reflect cognitive_harness/_archive/reflect
rm -rf ~/.claude/skills/reflect
```

**Notes:**

- No active-replacement design in progress for either; pure bookkeeping.
- The skill descriptions disappear from the agent's available-skills list (M1 mitigated). The folders remain at `cognitive_harness/_archive/<name>/` for reference (M2 path-obscure).
- Promotion back to cannon (if the user later decides to revive comprehend or reflect): use P6's `reverse_archive` procedure.

### Absence-Recognition: what about unused/forgotten dependencies?

What if some `/MVL+` discipline or protocol silently invokes `comprehend` or `reflect`? — Direct grep of the cannon spec files:

```bash
grep -r "comprehend\|reflect" cognitive_harness/MVL*/ cognitive_harness/protocols/
```

Empirically: the cannon disciplines invoke `explore, sense-making, decompose, innovate, td-critique` — neither `comprehend` nor `reflect` is invoked. Safe to archive. (If the user has CUSTOM workflows referencing them, the runtime-unregister would surface the dependency on next invocation; reversible.)

### 5-test cycle

- Novelty: Standard mv+rm.
- Scrutiny survival: Absence check + reversibility addresses unknown-dependency risk. Survives.
- Fertility: Reduces cognitive_harness/ root clutter.
- Actionability: Yes.
- Mechanism independence: Absence-Recognition adds defense.

**Disposition: ACTIONABLE.**

---

## P4 — Profile C: Non-SKILL Artifact Disposition

### Per-artifact decisions

#### `cognitive_harness/contracts/alignment_control.md`

- **Shape:** Single markdown design artifact (~13K), inside a `contracts/` folder that contains nothing else. Recent edit (May 16).
- **Mechanism exposure:** M1 doesn't apply (no SKILL.md → not registered). M2 risk is bounded (user is unlikely to conflate this design doc with a cognitive discipline). M3 (folder-listing priming) applies mildly via the `contracts/` folder name.
- **Default recommendation:** **Leave in place.** It's a fresh design artifact, likely still active. No urgency to move.
- **Promotion path:** If `alignment_control.md` becomes stale, move:
  ```bash
  mkdir -p cognitive_harness/_archive/_misc
  mv cognitive_harness/contracts/alignment_control.md cognitive_harness/_archive/_misc/
  rmdir cognitive_harness/contracts  # only if empty
  ```

#### `cognitive_harness/next_question_to_ask.md` (loose file)

- **Shape:** Loose markdown file at `cognitive_harness/` root. One-line personal scratchpad ("what is next load bearing development for our endgoal…").
- **Mechanism exposure:** No M1 (not a skill). M2 trivial (one line; impact negligible). M3 mild (visible at root).
- **Default recommendation:** **Leave in place.** It's a working note; the user knows what it is. Archiving a one-line scratchpad would be over-engineering.
- **Alternate:** If the user prefers a tidier root, move to `cognitive_harness/_archive/_misc/`.

### Lens Shifting on the "leave vs move" condition

Under what condition is "move to _archive/_misc/" preferable to "leave in place"?
- When the artifact is stale (no edits in 30+ days) AND no inquiry references it.
- When the cognitive_harness/ root looks cluttered to the user.

Under what condition is "leave in place" preferable?
- When the artifact is in active iteration (recent edits).
- When the artifact has no SKILL.md and therefore no M1 exposure (the load-bearing context-blur vector is absent).

For the current two artifacts, both conditions favor leaving in place; the user can revisit if state changes.

### 5-test cycle

- Novelty: Per-artifact judgment with reasoning. Not novel in form; novel in the explicit "leave in place is OK when M1 doesn't apply" rule.
- Scrutiny survival: Strongest objection — "shouldn't we move everything for consistency?" Counter: M1 absence makes the cost-benefit asymmetric; over-treating these is dev-phase-inappropriate overhead. Survives.
- Fertility: Establishes a per-artifact heuristic ("M1 absent → low urgency to archive").
- Actionability: Yes; user can act on both as-is.
- Mechanism independence: Lens Shifting confirms the conditional logic.

**Disposition: ACTIONABLE.**

---

## P5 — Convention Doc (`cognitive_harness/_archive/README.md`)

### Domain Transfer signals

Patterns from other tools/projects for "deprecated but kept":

| Source | Pattern | Lesson |
|---|---|---|
| npm `deprecate` | Marks package deprecated but still installable | Provide a CLI-style procedure, not just policy |
| Python `__all__` | Explicit declaration of public surface | Make the cannon vs non-cannon boundary explicit |
| RFC Obsoletes/Updated-by | Forward references in standards docs | The convention should be forward-applicable to future entries |
| Monorepo `/graveyard/` | Common pattern in big codebases | A single dedicated location + simple naming |
| Git `.git/info/exclude` | Personal-scope ignore | Lightweight, doesn't require global config |

Imported principles: explicit procedure (npm), explicit boundary (Python), forward-applicability (RFC), single location with simple naming (monorepo).

### Constraint Manipulation: inverse boundary

What should NOT live in `cognitive_harness/_archive/`?
- Cannon skills (explore, innovate, MVL, MVL+, protocols, sense-making, td-critique, decompose).
- The convention doc itself isn't archived (it's the policy artifact).
- Project READMEs and configuration files (out of scope for the convention).
- The `cognitive_harness/_archive/` folder shouldn't contain active development of NEW skills — those start in `cognitive_harness/<name>/`, not in `_archive/`.

### Focused form: full README content

```markdown
# _archive/ — Non-cannon skills and artifacts

This folder holds `cognitive_harness/` skills and single artifacts that are
**not currently part of the active cannon** but are preserved for reference,
comparison, or possible future restoration. The folder is named `_archive/`
(not `_experimental/` or `_drafts/`) to compose with the existing
`cognitive_harness/protocols/_archive/` convention.

## What goes here

A skill or artifact lives here when one of the following holds:

- The user has decided it is **not currently cannon** (the active set the
  project actively uses).
- A replacement is being designed; the original is preserved here while the
  new version is authored fresh in the original top-level slot.
- The skill or artifact is **dormant** — created earlier but no longer
  actively maintained.

What does NOT go here: cannon skills, the convention itself (this file),
project-level configuration, or actively-developed new skills.

## How to add a skill to _archive/

Two-step move (both required for SKILL-shaped folders):

```bash
mv cognitive_harness/<skill> cognitive_harness/_archive/<skill>
rm -rf ~/.claude/skills/<skill>
```

The first step removes the skill from the top-level project workspace; the
second removes it from Claude Code's runtime skill registry so the agent does
not surface its description in the available-skills list.

For non-SKILL artifacts (single markdown files, etc.), the second step is
skipped (they are not registered as skills). Place them under
`_archive/_misc/<name>` or leave them where they are — judgment call.

## How to promote back to cannon

Inverse of the above:

```bash
mv cognitive_harness/_archive/<skill> cognitive_harness/<skill>
cp -r cognitive_harness/<skill> ~/.claude/skills/<skill>
```

## Agent instruction

When working inside this project, items under `_archive/` are **dormant
references**. The agent must not:

- Read `_archive/<skill>/SKILL.md` or its references reflexively when the
  skill name is mentioned in conversation.
- Invoke any item under `_archive/` via the Skill tool, or treat them as
  available skills.
- Use folder names under `_archive/` as inspiration for naming new artifacts
  — treat them as not-present unless explicitly requested.

The agent MAY read items here when the user explicitly asks ("read the
archived navigation spec," "show me the old version," "compare with the
previous design"). When in doubt, ask.

## Forward-looking

Future experimental skills follow this same pattern. When the user wants to
preserve a prior version while designing the replacement, apply the two-step
move above. The convention does not need to be re-deliberated per skill.
```

**Line count:** ~45 lines of content (under the implicit 30-40 target but acceptable; the doc earns its length via explicit procedure + agent-instruction).

### 5-test cycle

- Novelty: Combines exploration's matrix + sensemaking's commits + decomposition's structure + Domain Transfer patterns into one artifact. Novel as integrated artifact.
- Scrutiny survival: Strongest objection — "agents may ignore the doc since it's not tool-enforced." Counter: doc-based convention is the only practical lever in current calibration (no .claudeignore exists). The registry-unregister step is the structural enforcement (removes M1 vector at the system level, not just by agent honor). The doc is the policy; the unregister is the enforcement. Survives.
- Fertility: Forward-applicability means future skills don't re-deliberate.
- Actionability: User can copy-paste, save, and apply.
- Mechanism independence: Combination + Domain Transfer + Absence-Recognition + Constraint Manipulation all converge on similar doc structure.

**Disposition: ACTIONABLE.**

---

## P6 — Verify + Reverse Procedure

### Focused form

```bash
# Verify: confirms an archive operation succeeded for a single skill.
verify_archive() {
  local skill="$1"
  local cog="cognitive_harness/_archive/$skill"
  local runtime="$HOME/.claude/skills/$skill"

  if [ -d "$cog" ] && [ ! -e "$runtime" ]; then
    echo "✓ $skill archived correctly"
    return 0
  else
    echo "✗ $skill archive incomplete:"
    [ ! -d "$cog" ] && echo "  - missing in _archive: $cog"
    [ -e "$runtime" ] && echo "  - still present in runtime: $runtime"
    return 1
  fi
}

# Reverse: promotes an archived skill back to cannon.
reverse_archive() {
  local skill="$1"
  local archived="cognitive_harness/_archive/$skill"
  local cannon="cognitive_harness/$skill"
  local runtime="$HOME/.claude/skills/$skill"

  if [ ! -d "$archived" ]; then
    echo "✗ Not archived: $skill (no folder at $archived)"
    return 1
  fi
  if [ -e "$cannon" ]; then
    echo "✗ Cannon slot occupied: $cannon (move or rename first)"
    return 1
  fi

  mv "$archived" "$cannon"
  cp -r "$cannon" "$runtime"
  echo "✓ $skill promoted from _archive/ back to cannon"
}

# Usage examples after applying P2 + P3:
#   verify_archive navigation
#   verify_archive meta-loop
#   verify_archive comprehend
#   verify_archive reflect
#
# If the user later decides to promote one back:
#   reverse_archive comprehend
```

### Absence-Recognition: edge cases captured

- **Idempotency of verify:** Safe to run twice — pure check, no state change.
- **Idempotency of reverse:** Not idempotent — second run finds no archived folder and errors out. This is the safe behavior (alerts the user that the operation already ran).
- **Partial-move failure:** If `mv` succeeded but `rm -rf` failed (or vice versa), `verify_archive` catches the inconsistent state and reports which side is wrong.
- **Slot-occupied case in reverse:** If the user started v2 work in the cannon slot before deciding to revert, reverse refuses to clobber. User must resolve (rename v2 first, then reverse).

### 5-test cycle

- Novelty: Bash with explicit failure-mode handling. Edge cases captured (idempotency + partial-move + slot-occupied).
- Scrutiny survival: Each edge case has a defensive check or clear error.
- Fertility: Enables further automation (a wrapper "archive this skill" command could chain mv + rm + verify).
- Actionability: Yes; copy-pasteable as bash functions.
- Mechanism independence: Absence-Recognition added the defensive checks; Constraint Manipulation (no slot clobber) added the reverse safety.

**Disposition: ACTIONABLE.**

---

## Assembly Check

### Do the 6 pieces compose into a coherent solution?

1. **P1 confirms the archive list** (resolves decompose-flag; sanity-checks the rest).
2. **P5 + P6 are authored** (convention doc + procedure spec).
3. **P2, P3 execute** the SKILL-shaped moves (active + dormant).
4. **P4 leaves non-SKILL artifacts in place** (per-artifact judgment).
5. **P6's verify is run** after each move; **reverse** is available for future promotion.

No contradictions between pieces. Each piece's interface (per Decomposition) is honored.

**Emergent property:** The convention is self-documenting (P5 doc + P6 procedure form a complete spec) AND self-applying (future experimental skills use the same pattern without re-deliberation). This wasn't explicitly designed for — it falls out of the composition.

### Axis Coverage Check

| Orthogonal axis | Coverage |
|---|---|
| Mechanism (M1 vs M2) | M1 mitigated via registry unregister; M2 mitigated via folder move. ✓ |
| Profile (active / dormant / non-SKILL) | P2 / P3 / P4 each handle one profile. ✓ |
| Time (current state / forward-looking) | P1-P4 handle current; P5 forward-looking. ✓ |
| Reversibility (one-way / reversible) | P6 reverse_archive preserves promotion path. ✓ |
| Layer (project workspace / runtime registry) | Bi-folder action across P2, P3, P5, P6. ✓ |

All five orthogonal axes have at least one candidate variant.

---

## Mechanism Coverage (Telemetry)

| Mechanism | Applied to | Output |
|---|---|---|
| **Combination** (G) | P5 doc | Integrated artifact from exploration + sensemaking + decomposition |
| **Absence Recognition** (G) | P3, P5, P6 | Dependency grep; "what NOT in _archive/"; idempotency + partial-failure + slot-occupied edge cases |
| **Domain Transfer** (G) | P5 doc | npm deprecate / Python __all__ / RFC Obsoletes / monorepo graveyard / git exclude patterns |
| **Extrapolation** (G) | P5 doc | Forward-looking applicability to future experimental skills |
| **Lens Shifting** (F) | P4 | Conditional logic (when to move vs leave) |
| **Constraint Manipulation** (F) | P5 doc; P6 reverse | Inverse boundary ("what NOT in _archive/"); reverse-safety constraint (no slot clobber) |
| **Inversion** (F) | P2 | System-level test: "should active SKILLs NOT be archived?" — Direct form holds |

**Generators applied:** 4/4 ✓
**Framers applied:** 3/3 ✓

**Convergence:** STRONG. Multiple mechanisms converge on the same solution (bi-folder action + convention doc + procedure + per-profile differentiation). No diverging candidates.

**Survivors tested:** 6/6 (all 6 pieces passed 5-test cycle).

### Failure-Mode Self-Check

| Failure mode | Status |
|---|---|
| 1. Premature evaluation | ✗ avoided — each piece tested after elaboration |
| 2. Single-mechanism trap | ✗ avoided — 4G + 3F applied |
| 3. Early frame lock | ✗ avoided — Sensemaking's frame held; per-piece elaborations explored variants |
| 4. Innovation without grounding | ✗ avoided — 5-test cycle applied per piece |
| 5. Mechanism exhaustion | ✗ avoided — all 7 mechanisms applied; all yielded |
| 6. Survival bias | ✗ avoided — uncomfortable findings preserved (decompose-flag, pre-move v1+v2 check) |

### Self-Assessment

**PROCEED.** 6 ACTIONABLE pieces. Assembly check confirms coherence. Axis coverage complete (5/5 axes). Mechanism coverage full (4G + 3F). Convergence STRONG. No failure modes observed. Ready for Critique to evaluate per the 3 core commits + cross-cutting (honor precedent / reversibility / dev-phase-appropriate).
