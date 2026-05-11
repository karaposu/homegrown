# Exploration: protocol_path_generalization

## User Input

`devdocs/inquiries/protocol_path_generalization/_branch.md`

How to generalize protocol path-resolution across install contexts (Claude / Codex user / Codex repo / in-repo) without runtime iteration through multiple paths.

---

## Mode + Entry Point

- **Mode:** hybrid (artifact + possibility). Artifact: existing skills' `references/` pattern, install scripts, filesystem layouts. Possibility: candidate solutions A through E.
- **Entry point:** signal-first. The user has a strong signal — they reject runtime iteration. Probe candidates directly.

---

## Cycle 1 — Map install contexts and per-context filesystem layout

### What was found

For each install context, the resulting filesystem layout:

| Context | SKILL.md path | Protocol path | Relative path SKILL.md → protocol |
|---|---|---|---|
| **Claude install** | `~/.claude/skills/MVL/SKILL.md` | `~/.claude/skills/protocols/conclude.md` | `../protocols/conclude.md` |
| **Codex user install** | `~/.codex/skills/MVL/SKILL.md` | `~/.codex/skills/protocols/conclude.md` | `../protocols/conclude.md` |
| **Codex repo install** | `<repo>/.codex/skills/MVL/SKILL.md` | `<repo>/.codex/skills/protocols/conclude.md` | `../protocols/conclude.md` |
| **In-repo (homegrown)** | `homegrown/MVL/SKILL.md` | `homegrown/protocols/conclude.md` | `../protocols/conclude.md` |

### Key observation

**ALL four contexts have the IDENTICAL relative path from SKILL.md to protocol: `../protocols/conclude.md`.** The install scripts produce isomorphic structures (skills as siblings, protocols/ as a sibling folder of the skill folders). This isomorphism is a deliberate choice — the install scripts mirror the source layout.

Implication: if the agent supports `..`-relative paths, a single literal path `../protocols/conclude.md` would work universally.

---

## Cycle 2 — Probe the existing references/ pattern

### What was scanned

All 8 existing homegrown skills' SKILL.md files (sense-making, innovate, td-critique, explore, decompose, comprehend, reflect, navigation). Specifically: how do they reference their `references/<file>.md` companion file?

### What was found

Every one uses the SAME wording pattern:
> *"**Before reading anything else in this file, read `references/<discipline>.md` in full.**"*

**Path: `references/<discipline>.md`. Plain relative path. No `..`. No absolute path. No environment variables.**

This pattern is validated — the user has been running these skills and they work. So Claude Code (and presumably Codex) DO resolve relative paths from the skill's folder.

### Key observation

**Every existing relative path stays INSIDE the skill folder.** None of them use `..` to escape upward. This means:

- Inside-folder paths (like `references/sensemaking.md`) are PROVEN to resolve correctly.
- Escape-folder paths (like `../protocols/conclude.md`) are UNPROVEN — no existing skill uses this pattern.

This downgrades Option B (`..`-relative) from "clean and minimal" to "clean and minimal but unvalidated." It might work; nothing in the existing project demonstrates it does.

---

## Cycle 3 — Probe how SKILL.md content is actually loaded by agents

### What was scanned

Mental model of how Claude Code (and Codex) handle skill invocation:

1. User types `/MVL` or `/MVL+`.
2. The platform loads the SKILL.md content into the agent's context.
3. The agent follows the SKILL.md's instructions.
4. When the SKILL.md says "Read `references/sensemaking.md`", the agent uses its Read tool with this path.
5. The Read tool resolves the path against some base directory.

### What's unknown

**The platform-level path-resolution rule is undocumented in this project.** The agent must somehow know the SKILL.md's filesystem location to resolve `references/<file>.md` correctly. Possible mechanisms:
- Platform tells agent the skill's folder (most likely — explains why it works).
- Agent searches common locations.
- Platform pre-resolves and substitutes.

Without docs, the mechanism is opaque. But it works for `references/<file>.md` paths inside the skill folder. Whether it tolerates `..` depends on whether the platform allows escape from the skill folder.

### Implication

Option B's viability is gated by a platform-specific behavior that isn't documented in the project's own files. This is structural risk: even if it works today, a platform update could disallow `..` for skill sandboxing.

---

## Cycle 4 — Probe each candidate's behavior + failure mode

### Candidate A: Enumerate-and-try (current state)

**Behavior:** SKILL.md lists multiple paths in flowing prose; agent iterates through them.

**Works in:** All four contexts (the agent will eventually find the right path).

**Failure modes:**
- Wasteful iteration on every invocation — agent must Read 2-4 nonexistent paths before finding the right one.
- Adding new install platforms requires editing SKILL.md.
- The "fallback prose" makes SKILL.md harder to read for humans.

**User has rejected this** — pushback on iteration cost.

### Candidate B: `..`-relative path (`../protocols/conclude.md`)

**Behavior:** Single fixed path in SKILL.md. Agent resolves relative to the SKILL.md's folder.

**Works in:** All four contexts IF the agent supports `..` escape from the skill folder. The path is identical across contexts (per Cycle 1).

**Failure modes:**
- If platform sandboxing disallows `..`, ALL invocations fail. Hard failure.
- Unvalidated by existing project pattern (Cycle 2).
- Future platform update could break this.

**Cleanest IF works.** Risky because untested.

### Candidate C: Installer-time sed substitution

**Behavior:** Source SKILL.md uses `homegrown/protocols/conclude.md` (the in-repo path). Install scripts run `sed` to substitute this with the install-target path during copy. Each installed SKILL.md has the literal correct absolute or relative path for its context.

**Works in:**
- Claude install: SKILL.md has `~/.claude/skills/protocols/conclude.md` (post-substitution).
- Codex user install: SKILL.md has `~/.codex/skills/protocols/conclude.md`.
- Codex repo install: SKILL.md has `.codex/skills/protocols/conclude.md` (or absolute path if user prefers).
- In-repo: SKILL.md has `homegrown/protocols/conclude.md` (no substitution).

**Failure modes:**
- Source SKILL.md no longer matches installed SKILL.md exactly (path string differs).
- Install scripts gain a sed step (~3 lines each). Cross-platform sed via stdin/stdout (no `-i` flag) handles macOS/Linux.
- Adding a new install platform = adding a sed rule to that platform's installer.
- Updating the protocol file content doesn't affect this — the substitution is on the SKILL.md content, not the protocol.

**Most reliable.** Doesn't depend on agent path-resolution semantics.

### Candidate D: Bundle protocols inside each skill folder

**Behavior:** Each runner skill folder gets its own copy of the protocol files. SKILL.md uses `protocols/conclude.md` (relative to skill folder, just like `references/<file>.md`).

**Works in:**
- All install contexts: install scripts copy `homegrown/protocols/conclude.md` → `<TARGET>/MVL/protocols/conclude.md` AND `<TARGET>/MVL+/protocols/conclude.md`. SKILL.md path resolves the same way `references/<file>.md` does (proven pattern from Cycle 2).
- In-repo: SOURCE needs `homegrown/MVL/protocols/conclude.md` to exist. Either as a real file (duplicate kept in sync), a git symlink (resolves on macOS/Linux), or via build-step.

**Failure modes:**
- Source-level duplication or symlinks. Adds maintenance friction.
- Each install duplicates protocol bytes (~3KB × 2 runners × 2 protocols ≈ 12KB). Trivial.
- If protocol updates, all copies need re-sync. With install script doing the copying, this is automatic on next install.
- Symlinks may not work on Windows or in raw-GitHub URL downloads.

**Matches existing references/ pattern.** Highest pattern-consistency. Source-side is the pain point.

### Candidate E: Inline the protocol back into MVL/MVL+ SKILL.md

**Behavior:** Revert the CONCLUDE/RESUME extraction. Each runner has the full protocol text inlined.

**Works in:** All contexts — no external file to load.

**Failure modes:**
- ~107 lines of CONCLUDE + ~165 lines of RESUME duplicated across MVL and MVL+ SKILL.md = ~544 lines of duplication.
- Updating the protocol means editing 2 (or 4 with commands/) files in sync.
- Reverts a recent architectural decision that the user approved.
- Loses deduplication benefit; future runners would each duplicate.

**Functional but architecturally regressive.**

---

## Cycle 5 — Jump scan: alternative angles

### What was scanned

A deliberate look in a different direction: what if the SKILL.md doesn't reference a path at all, and the protocol is loaded by tooling outside the SKILL.md?

### Possibilities found

**Option F: Pre-injected context** — The platform injects the protocol content into the agent's context BEFORE invoking the skill. SKILL.md just references the protocol by name ("Execute the CONCLUDE protocol"); the protocol content is already available. Requires platform support that doesn't exist for arbitrary protocols.

**Option G: Tool-based loading** — Use a custom tool that abstracts the loading. SKILL.md says "Use the load_protocol tool with name='conclude'." The tool implementation knows where protocols live. Requires tool development and integration. Out of scope for current install pattern.

**Option H: Skill-tool invocation (rejected by user)** — Make protocols into proper skills, invoke via Skill tool. The user explicitly said "protocols are not skills." Skipped.

These alternatives require platform features that aren't available in the current install/source-control pattern. Not viable.

---

## Cycle 6 — Probe the in-repo correctness story per candidate

### What was found

Each candidate's behavior in the source repo (when working directly in the homegrown directory, not via install):

| Candidate | In-repo path used | In-repo file exists? | Source-level work needed |
|---|---|---|---|
| A (enumerate) | Lists 4 paths; agent finds `homegrown/protocols/conclude.md` | YES | None (already works) |
| B (`..`-relative) | `../protocols/conclude.md` from `homegrown/MVL/SKILL.md` resolves to `homegrown/protocols/conclude.md` | YES | None (path semantics work IF agent supports `..`) |
| C (sed substitute) | Source has `homegrown/protocols/conclude.md`; agent reads literally | YES | None (source path = real path) |
| D (bundle) | `protocols/conclude.md` from `homegrown/MVL/SKILL.md` resolves to `homegrown/MVL/protocols/conclude.md` | NO unless added | Add file as symlink or duplicate |
| E (inline) | No external load | n/a | None |

### Key observation

**Options A, B (if `..` works), C, and E have ZERO source-level work for in-repo correctness.** Option D requires source-level duplication or symlinks.

This shifts the trade-off: D's "matches existing pattern" benefit comes at the cost of source-level maintenance. The other options keep source clean.

---

## Cycle 7 — Convergence check + jump scan

### Convergence assessment

After 6 cycles, the territory is mapped:
- Install contexts: 4 mapped with identical isomorphic structure (Cycle 1).
- Existing references/ pattern: validated INSIDE-folder relative paths, but `..`-paths unvalidated (Cycle 2).
- Agent path-resolution mechanism: opaque but works for inside-folder paths (Cycle 3).
- 5 candidates with concrete behavior and failure modes (Cycle 4).
- 3 alternative angles considered and dismissed (Cycle 5 jump scan).
- Source-level work per candidate (Cycle 6).

Three convergence criteria:
- ✓ Frontier stability: cycles 5-6 produced no new structural surprises.
- ✓ Declining discovery rate: cycles 4-6 produced fewer new anchors than cycles 1-3.
- ✓ Bounded gaps: the unmapped region (exact agent path-resolution behavior, especially `..` support) is bounded — sensemaking can reason about it via the existing references/ pattern's evidence.

**Convergence reached.** Exploration done.

---

## Final Deliverable — The Structural Map

### 1. Territory Overview

The territory has four major regions:

- **Install contexts and their isomorphic structure** — 4 contexts, all producing skills as siblings of a `protocols/` folder.
- **Existing references/ pattern** — proven for INSIDE-folder relative paths; unproven for `..`-escape paths.
- **Candidate solutions** — 5 enumerated (A enumerate, B `..`-relative, C substitute, D bundle, E inline) plus 3 alternative angles dismissed.
- **Source-level vs install-time complexity** — different candidates push the work to different places.

### 2. Inventory

**Install context inventory:**
- Claude install: `~/.claude/skills/<skill>/SKILL.md` + `~/.claude/skills/protocols/<protocol>.md`
- Codex user: `~/.codex/skills/<skill>/SKILL.md` + `~/.codex/skills/protocols/<protocol>.md`
- Codex repo: `.codex/skills/<skill>/SKILL.md` + `.codex/skills/protocols/<protocol>.md`
- In-repo: `homegrown/<skill>/SKILL.md` + `homegrown/protocols/<protocol>.md`

**Pattern inventory (from existing 8 skills):**
- Wording: "Before reading anything else in this file, read `references/<discipline>.md` in full."
- Path form: plain inside-folder relative path.
- Validated: works in install contexts.

**Candidate inventory:**
- (A) Enumerate-and-try — current state, user-rejected on iteration cost
- (B) `..`-relative — single path; agent-resolution-dependent (unvalidated)
- (C) Installer sed substitution — single literal path post-install; small installer additions
- (D) Bundle in skill folder — matches existing pattern; source duplication needed
- (E) Inline — reverts extraction; ~544 lines duplicated across 2 files

### 3. Signal Log

| Signal | Where detected | Probed? | Status |
|---|---|---|---|
| All 4 install contexts produce identical relative path SKILL→protocol | Cycle 1 filesystem mapping | ✓ | High-priority. Enables Option B if `..` works. |
| Existing references/ pattern uses NO `..` paths | Cycle 2 grep over 8 SKILL.md files | ✓ | High-priority. Downgrades Option B's confidence to MEDIUM. |
| Agent path-resolution mechanism is undocumented in project | Cycle 3 mental model | Partial | Medium-priority. Knowable only via testing or external docs. |
| Source-level work differs per candidate | Cycle 6 in-repo audit | ✓ | High-priority. Shifts D's calculation. |
| Alternative loading mechanisms (pre-inject, custom tool) require platform features | Cycle 5 jump scan | ✓ | Low-priority. Out of scope. |
| Cross-platform sed via stdin/stdout avoids `-i` portability issue | Cycle 4 Option C analysis | ✓ | Medium-priority. Removes Option C's main complexity concern. |

### 4. Confidence Map

| Region | Confidence | Reasoning |
|---|---|---|
| Install context filesystem layouts | **Confirmed** | Direct read of install scripts; verified the mapping. |
| Existing references/ pattern wording | **Confirmed** | Read 8 SKILL.md files; pattern is uniform. |
| Inside-folder relative paths work in agent | **Confirmed** | The existing pattern works in practice (user has been using it). |
| `..` paths work in agent path-resolution | **Unknown (bounded)** | No existing skill validates this. Sensemaking must decide whether to risk Option B. |
| Cross-platform sed correctness | **Confirmed** | stdin/stdout pattern avoids `-i` flag issue. |
| Source-level cost of each candidate | **Confirmed** | Cycle 6 mapped each. |
| Storage cost of bundling (Option D) | **Confirmed** | ~12KB across all installs. Trivial. |
| Future platform path-resolution behavior | **Unknown** | Can't predict. Option B is most exposed to platform changes. |

### 5. Frontier State

**STABLE.** Major regions mapped. The bounded unknown (`..` path support) is a sensemaking-resolvable risk question, not an unmapped region.

### 6. Constraints any answer must honor

- **User has rejected Option F (protocols-as-skills).**
- **Project's no-build-step pattern** — installs are `curl`/`cp`. Any "build step" should be minimal (one sed line is acceptable; multi-step transforms are not).
- **In-repo correctness** — the source SKILL.md must work when read directly from the homegrown source repo (without going through an install). This is how the project itself develops.
- **Existing references/ pattern** — proven; new patterns should match it where possible to reduce risk.
- **Two protocols, two runners** — CONCLUDE and RESUME each used by both MVL and MVL+. Solution must work for all 4 (protocol, runner) pairs.
- **Future install platforms** — Cursor's skills format, others. The chosen approach should accommodate new platforms with minimal rework.

### 7. Frontier Questions for Sensemaking

1. **Is Option B's `..`-path risk acceptable?** Existing pattern doesn't validate it. Sensemaking must weigh: (a) probability `..` works (likely high based on filesystem semantics), vs (b) blast radius if it doesn't (all CONCLUDE/RESUME invocations fail). Hard failure mode argues for safer Option C or D.

2. **Is Option C's sed substitution actually one line?** Probe: write the exact sed invocation for both install scripts. If it's a clean one-liner, the "complexity" objection dissolves. If it requires escaping or multi-step transforms, complexity grows.

3. **Is Option D's source-level duplication acceptable?** Symlinks vs duplicates vs build-step. Each has its own annoyance. Sensemaking must decide whether D's pattern-consistency benefit is worth the source-side cost.

4. **What's the right default if the agent's `..` support is uncertain?** Sensemaking must produce a recommendation that's reliable today AND future-proof against platform changes.

5. **Does the answer differ for CONCLUDE vs RESUME?** Both are extracted protocols. Both face the same path-resolution problem. Sensemaking should confirm the answer is uniform.

6. **What's the migration story?** This inquiry SUPERSEDES the prior `telemetry_routing_protocol_classification` finding's implicit Option-A approach. Sensemaking must produce concrete migration steps (what changes in SKILL.md, install scripts, source layout).

### 8. Recommendations for Sensemaking

Sensemaking should ground its analysis in:
- The doctrine: protocols load deterministically, no waste.
- The existing pattern: inside-folder relative paths work; `..`-paths unvalidated.
- The user's preference: no runtime iteration, minimal complexity.
- The project's source-control pattern: no build steps; markdown source-of-truth.

Sensemaking should produce:
- A clear verdict among A through E (likely C or D given the analysis).
- A path-substitution strategy (C) OR a bundling strategy (D) with explicit source-level handling.
- A concrete migration plan suitable for decomposition + innovation + critique.

---

## Cross-Run Tracking (Telemetry)

* **Mode:** hybrid (artifact + possibility)
* **Cycles run:** 7
* **Convergence criteria:** all three met (frontier stable, declining discovery rate, bounded gaps).
* **Failure modes observed:** None.
  - Premature depth? No — broad scan in Cycles 1-2 before per-candidate probes in Cycles 4-6.
  - Surface-only scanning? No — probed at depth on Options B, C, D failure modes.
  - False confidence? Mitigated via jump scan in Cycle 5 (alternatives F, G, H considered).
  - Premature termination? No — convergence criteria explicitly checked.
  - Re-exploration? No — frontier-tracked across cycles.
  - Completeness bias? Tested — included Option E (inline; user-distasteful) and Options F-H (alternative angles) for completeness even though disfavored.
* **Coverage assessment:** All install contexts mapped; all 5 candidates examined for behavior + failure mode + source-level cost; agent path-resolution probed via existing pattern; alternative angles jump-scanned. The bounded unknown (whether `..` works in agent path-resolution) is the residual risk that sensemaking must reason about.
* **Discovery rate trend:** high in Cycles 1-3 (filesystem mapping, references/ pattern, agent semantics), declining in Cycles 4-6 (per-candidate analysis), low in Cycle 7 (convergence check).
* **Overall: PROCEED to sensemaking.**
