# Innovation — Explore Canonical Coverage via Staged Iteration

## User Input

`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-13_06-30__explore_canonical_coverage_via_staged_iteration/_branch.md`

Input: this inquiry's `_branch.md` + `exploration.md` + `sensemaking.md` + `decomposition.md`. Generate concrete designs per decomposition piece (P1-P5), apply project-specific risk dimensions (duplicate-derivable-state, operation-parsimony, phase-fit, explicit-culture-fit), apply axis coverage check on four axes (where / when / who / what), run assembly check across pieces.

---

## Seed

Each of the 5 decomposition pieces needs a concrete, shippable design that fits in 1-3 focused sessions. The seed is a Question type ("what shape should P1, P2, P3, P4, P5 take?") + an Absence type (the doc-vs-skill gap for /staged-explore). Intuition direction: the user values minimal new artifacts and explicit human-in-loop at this calibration phase (per nav_north_star.md's "manual-trigger v1 is acceptable").

---

## Phase 2 — Generation (per piece, multi-mechanism)

### P1 — `/staged-explore` design

#### P1-CA — Doc-only (Constraint Manipulation, **contrarian**)

Don't ship a skill at all. Update `homegrown/explore/references/explore.md` §3.6 to include a fully worked manual staging example (with `_frontier.md` template, concrete prompts to use). The user reads the procedure and orchestrates by hand.

- Where: documentation
- When: framing-time + run-time (the doc is read; the user enacts)
- Who: human (manual)
- What: existence-claim aggregation via human-managed merge

#### P1-CB — Thin SKILL wrapper, human-in-loop selection (Constraint Manipulation, **focused** — the user's seed)

Ship `~/.claude/skills/staged-explore/SKILL.md` + `references/staged-explore.md` as a minimal runner. Behavior:

1. Read `_branch.md`; load `references/staged-explore.md`
2. Invoke `/explore` (first pass with declared `expected` + `depth-level`)
3. Present the surfaced inventory as candidate parents; **ask the human which to drill next pass**
4. For each selected parent: invoke `/explore` signal-first with `parent_pass_anchor` set
5. Update `_frontier.md` (transcluded shape from `multi_resolution_navigation.md`'s candidate ledger)
6. Repeat until human says stop OR max-depth reached
7. Manual Merge Contract reference at end (instructs human how to combine child maps)

No autonomous selection. No automated merge. Single-skill artifact, ~150 lines.

- Where: runner skill (new)
- When: run-time (invoked per inquiry)
- Who: human selects parents; runner orchestrates /explore calls
- What: existence-claim aggregation across passes + frontier ledger

#### P1-CC — Auto-select runner (Domain Transfer from `/multi-resolution-navigation`, **generic**)

Ship `/staged-explore` that fully transcludes `multi_resolution_navigation.md`'s policy machinery: `coverage_mode` (exhaustive/budgeted/sampled), `expansion_policy`, `scheduling_policy`, batch_size. Runner auto-selects parents per policy; no mid-run human input.

- Where: runner skill (new)
- When: run-time
- Who: runner auto-selects (calibration-state mismatch with nav_north_star.md's v1 philosophy)
- What: same as P1-CB plus policy state

#### P1-CD — `/MVL+ --staged` flag (Combination + Inversion, **contrarian**)

Don't make /staged-explore a separate skill. Add a `--staged` flag (or _state.md field) to /MVL+. When set, /MVL+'s Exploration step invokes a multi-pass routine internally.

- Where: existing runner extension (/MVL+)
- When: run-time
- Who: human via flag
- What: same as P1-CB

---

### P2 — Canonical-source registry

#### P2 — Registry shape

##### P2-RA — Standalone `## Canonical Sources` field (Absence Recognition, **generic**)

A new section in `_branch.md`. Markdown bullet list. Each bullet: path/identifier + one-line reason. Optional section (omit if no canonical sources beyond what's in Question/Goal).

```markdown
## Canonical Sources
- `homegrown/explore/references/explore.md` — the spec being redesigned
- `devdocs/nav_north_star.md` — staging-pattern model
```

- Where: framing (_branch.md template)
- When: framing-time
- Who: human (inquiry author)
- What: determination-mechanism (the "must-touch" list)

##### P2-RB — Embedded in Scope Check (Combination, **focused**)

Extend the existing Scope Check section with a `Required-touch:` line at the end. Piggybacks on the field the author already fills.

- Where: framing (existing field extended)
- When: framing-time
- Who: human
- What: determination-mechanism, but commingled with scope-fit reasoning

##### P2-RC — Goal-embedded references (Combination, **contrarian** — minimal)

No new field. Require Goal to be specific about sources; /explore parses Goal for path-like patterns and treats them as canonical-by-mention.

- Where: framing (no new field)
- When: framing-time
- Who: human
- What: determination-mechanism via implicit parsing

##### P2-RD — Per-pipeline-stage required-touch (Combination, **generic**)

Per-discipline canonical lists: `Canonical for /explore`, `Canonical for /sense-making`, etc. Each downstream consumer reads its own list.

- Where: framing
- When: framing-time
- Who: human (must predict per-stage needs)
- What: determination-mechanism × pipeline-stage

#### P2 — Authoring guidance (what's NOT canonical)

##### P2-GA — "Discoverable belongs in /explore, not the registry" (Inversion)

The registry is the **safety net, not the table of contents**. Author should NOT list anything they trust /explore to find on its own. The registry is for sources that are structurally relevant but lexically unlikely to surface from the question text alone.

##### P2-GB — "Anything corrections have referenced before" (Domain Transfer from user corrections)

Past corrections are evidence of canonical-source-miss. If past inquiries had to be corrected to add source X, X-type sources are canonical for future inquiries of the same shape.

##### P2-GC — "Explicit Question/Goal references default-canonical" (default heuristic)

If Question or Goal mentions a path, concept, or document by name, it's automatically canonical (no need to re-list). The registry adds sources NOT mentioned but still required.

---

### P3 — Audit C1-C4 firing

#### P3-AA — Per-rule × per-run grid (Domain Transfer from `/td-critique` fitness landscape, **generic**)

A table: rows = recent /explore runs (last 5+); columns = C1 (boundary-discovery), C2 (surround-layer), C3 (confirmed-absent), C4 (jump-scan). Each cell: ✓ (firing-evidence present) / ✗ (evidence absent when it should be present) / N/A (rule doesn't apply to this run). Aggregate verdict per rule: % ✓ over applicable runs → PASS / FLAG / FAIL.

- Where: audit artifact
- When: post-run (audit of existing exploration.md files)
- Who: human (audit author) or future runner
- What: audit-evidence

#### P3-AB — Per-rule firing-evidence with signature (Domain Transfer from `/reflect` structured output, **focused**)

For each rule, define a firing-evidence signature observable in exploration.md:
- C1: `boundary: unknown` declared AND a boundary-discovery output section appears
- C2: inventory includes ≥1 item from project-wide surround layer (e.g., from `homegrown/protocols/` or `enes/`) when one was identifiable
- C3: ≥1 region labeled `confirmed-absent` in confidence map
- C4: telemetry includes `jump-scan performed: ✓`

Audit applies signatures across runs; verdict per rule includes per-run evidence pointer.

- Where: audit artifact + spec update (signatures into /explore spec)
- When: post-run
- Who: human first, automatable later
- What: audit-evidence with signatures (reusable)

#### P3-AC — Just-look-at-recent-flags (Constraint Manipulation, **contrarian** — minimal)

Don't audit systematically. Check whether any recent /explore self-assessment said FLAG or RE-RUN. If yes, examine those runs. If no, no action.

- Where: minimal observational pass
- When: post-run
- Who: human
- What: audit-evidence (relies on /explore's own self-reporting)

#### P3-AD — Co-audit with inquiry-author (Combination)

For 3-5 recent inquiries, ask: "did /explore miss anything you'd consider canonical in this run?" Cross-reference author's answer with the firing-evidence audit. The author's "yes I expected X" is ground truth for false-negative detection.

- Where: audit + human elicitation
- When: post-run
- Who: human (auditor + author)
- What: audit-evidence × author-ground-truth

---

### P4 (optional) — Negative-space audit pass in /explore

#### P4-NA — Pre-declared category taxonomy (Absence Recognition + Domain Transfer from /reflect's "what did we miss?" pattern)

Inquiry-author optionally declares category taxonomy in _branch.md (e.g., "for codebase inquiries: protocols / contracts / disciplines / runners / fundamentals / inquiries"). Post-convergence, /explore checks: which categories have zero hits in the inventory? Flag those as "category-absence: confirmed | unconfirmed".

- Where: /explore extension (post-convergence step)
- When: run-time (end of /explore cycle)
- Who: runner (auto)
- What: audit-evidence (category-level)

---

### P5 (future) — /MVL+ routing between /explore and /staged-explore

#### P5-NA — `flow-staged: yes|no` field in `_state.md` (Combination with existing flow-type pattern)

`_state.md` gains a new field analogous to `flow-type: extended`. When `flow-staged: yes`, /MVL+ invokes /staged-explore at the E step instead of /explore. Default: `no` (preserves current behavior).

- Where: /MVL+ spec + _state.md schema
- When: framing-time (declared at inquiry creation) or run-time (overridden)
- Who: human declares; runner reads
- What: routing decision

---

## Phase 3 — Test (5-test cycle on candidates)

Testing the front-runner candidates per piece:

### P1-CB (thin SKILL wrapper, human-in-loop selection)

| Test | Verdict | Reasoning |
|---|---|---|
| Novelty | Materializing-novel | The design itself isn't novel (spec'd in §3.6 + §7.2); but as an INVOCABLE artifact it's new. Closes the doc-vs-skill gap. |
| Scrutiny survival | PASS | Strongest objection: "/MVL+ already invokes /explore; why a separate runner?" Response: the staging pattern is orthogonal to /MVL+'s pipeline; baking it into /MVL+ (P1-CD) violates surround layer; a thin runner respects discipline/runner separation. |
| Fertility | HIGH | Enables P1-CC upgrade path (auto-select later); enables P5 routing; enables empirical evidence for nav_north_star.md's claim "manual-v1 is sufficient until staging needs autonomy." |
| Actionability | HIGH | ~1-2 sessions: write SKILL.md + references/staged-explore.md (transcluding multi_resolution_navigation patterns) + worked example. |
| Mechanism independence | YES | Reached independently via Constraint Manipulation (what's minimal?) AND Domain Transfer (from /multi-resolution-navigation's structure). |

**Disposition:** ACTIONABLE.

### P1-CA (doc-only)

| Test | Verdict |
|---|---|
| Novelty | LOW (no new artifact) |
| Scrutiny survival | PARTIAL — survives "minimum cost" objection but loses on "the user keeps complaining about manual orchestration tedium" |
| Fertility | LOW — doesn't open upgrade paths |
| Actionability | HIGH (cheap) but solves the wrong problem |
| Mechanism independence | Only Constraint Manipulation produced it |

**Disposition:** DEFERRED with revival trigger ("if P1-CB ships and proves unused for >5 inquiries, revert to doc-only and remove the skill"). Single-mechanism survivor.

### P1-CC (auto-select runner)

| Test | Verdict |
|---|---|
| Novelty | MEDIUM |
| Scrutiny survival | FAILS at this phase. nav_north_star.md commits to "manual-trigger v1 is acceptable"; auto-select is L2+ autonomy; premature. |
| Fertility | HIGH but for a future phase |
| Actionability | LOW (more upfront work than needed) |
| Mechanism independence | YES |

**Disposition:** RESEARCH FRONTIER (revival trigger: "after ≥5 P1-CB runs accumulate selection-rationale calibration data" — exactly per autonomy_ladder.md's L1→L2 gate).

### P1-CD (--staged flag in /MVL+)

| Test | Verdict |
|---|---|
| Scrutiny survival | FAILS on surround layer (sensemaking already ruled against). Mixing pipeline runner with discipline-orchestration runner violates the project's separation of concerns. |

**Disposition:** KILL. Seed extracted: the question of "how does /MVL+ route between /explore and /staged-explore" is real and lives in P5.

### P2-RA + P2-GA (standalone field + safety-net guidance)

| Test | Verdict | Reasoning |
|---|---|---|
| Novelty | MEDIUM — new field + new authoring inversion |
| Scrutiny survival | PASS | Strongest objection: "authors fill it pro-forma." Response: P2-GA's safety-net framing limits scope to non-obvious entries; /explore's per-entry report (P2.3 from decomposition) makes pro-forma misses visible. |
| Fertility | HIGH — enables P3 future-audit; enables P4 (if P4 ships); enables canonical-source tracking project-wide. |
| Actionability | HIGH | ~1 session: add template section + write authoring guidance + update /explore spec for the per-entry report (APPEND-ONLY per the explicit interface constraint from decomposition) + update inquiry-framing discipline spec. |
| Mechanism independence | YES | Field shape reached via Absence Recognition; authoring guidance reached via Inversion (what's NOT canonical) plus Combination with prior corrections. |

**Disposition:** ACTIONABLE.

### P2-RB (embedded in Scope Check)

| Test | Verdict |
|---|---|
| Scrutiny survival | FAILS — Scope Check's role is question-goal alignment; required-touch is source-coverage. Different concerns; conflating them risks weakening Scope Check. |

**Disposition:** KILL. Seed: "is there a shared abstraction over scope-fit and source-coverage?" → frontier question.

### P2-RC (Goal-embedded references)

| Test | Verdict |
|---|---|
| Scrutiny survival | PARTIAL — brittle (parsing Goal text); fails when canonical sources aren't obvious-from-Goal-text. Defeats the safety-net purpose. |

**Disposition:** KILL. Seed: P2-GC ("Question/Goal references are default-canonical") is a sub-rule that lives inside P2-RA, not a replacement for it.

### P2-RD (per-stage registry)

| Test | Verdict |
|---|---|
| Scrutiny survival | FAILS on operation-parsimony — adds 5× the authoring burden for low marginal value. The author can rarely predict per-stage needs accurately. |

**Disposition:** RESEARCH FRONTIER (revival: "if registry usage shows authors consistently differentiating per-stage needs in free-form notes, formalize into the schema").

### P2-GC (Question/Goal references default-canonical)

| Test | Verdict |
|---|---|
| Scrutiny survival | PASS as a sub-rule of P2-RA's authoring guidance |
| Mechanism independence | Reached via Combination |

**Disposition:** ACTIONABLE — folded into P2-RA + P2-GA as an additional authoring heuristic.

### P3-AA (per-rule × per-run grid)

| Test | Verdict |
|---|---|
| Novelty | MEDIUM — simple grid but novel for this project (no formal coverage-rule audit exists) |
| Scrutiny survival | PASS | Strongest objection: "binary ✓/✗ misses severity." Response: severity comes from P3-AD's author-cross-reference; for first audit, binary is sufficient signal. |
| Fertility | MEDIUM | Enables P4 activation if patterns emerge; provides baseline for future audits |
| Actionability | HIGH | ~1 session: read 5 recent exploration.md files; score each cell; produce verdict. |
| Mechanism independence | YES | Reached via Domain Transfer from /td-critique fitness landscape AND from /reflect's structured per-step observations. |

**Disposition:** ACTIONABLE.

### P3-AB (signature-based audit)

| Test | Verdict |
|---|---|
| Fertility | HIGH (signatures reusable for future audits) |
| Actionability | MEDIUM (more upfront definition work) |

**Disposition:** ACTIONABLE — but as a P3-AA refinement, not a separate path. Signatures get added to /explore spec; the first audit uses P3-AA's grid format with the signatures populating each cell.

### P3-AC (just-look-at-flags)

**Disposition:** KILL. Doesn't catch the silent-failure case (rule should fire and didn't).

### P3-AD (co-audit with author)

| Test | Verdict |
|---|---|
| Fertility | HIGH (catches false-negatives invisible to firing-evidence) |
| Actionability | MEDIUM (requires human elicitation) |

**Disposition:** DEFERRED with revival trigger ("after P3-AA reveals at least one rule with FLAG verdict, run P3-AD on the flagged runs to determine if firing-evidence is the right ground truth").

### P4-NA, P5-NA

Both pass their 5-tests at the structural level but are gated (P4 on activation signal from P3; P5 on P1 shipping + ≥3 calibration uses).

**Disposition for P4:** DEFERRED with revival trigger from decomposition.
**Disposition for P5:** DEFERRED with revival trigger from decomposition.

---

## Phase 3.5 — Assembly Check

After 5-test cycle survivors:

- **P1-CB** (thin SKILL wrapper, human-in-loop)
- **P2-RA + P2-GA + P2-GC** (standalone field + safety-net guidance + Q/Goal-default sub-rule)
- **P3-AA + P3-AB** (per-rule × per-run grid using signature definitions)

### Candidate Assembly — "Canonical Coverage Stack" (CCS)

The three survivors combine into a coherent end-to-end architecture:

```
[Inquiry author writes _branch.md]
        │
        ├─ Adds Canonical Sources field (P2-RA)         [framing-time]
        │  using safety-net heuristic (P2-GA)             "list what /explore might miss,
        │  + Q/Goal-default rule (P2-GC)                   not what it'll find anyway"
        │
        ▼
[/MVL+ invokes Exploration step]
        │
        ├─ Calls /staged-explore (if flow-staged: yes)   [run-time]
        │   (P1-CB thin runner) which loops:
        │     ├─ /explore first pass (D2, expected: ~10)
        │     ├─ Read Canonical Sources from _branch.md
        │     ├─ Per-entry report: surfaced / absent / not-checked
        │     ├─ Human selects parents to drill
        │     └─ /explore signal-first per parent → loop
        │
        ▼
[Audit Path runs periodically — not blocking]
        │
        └─ P3-AA grid + P3-AB signatures applied to    [post-run]
           recent /explore runs → verdict per rule
```

### Assembly Emergent Properties

**E1: Two-layer coverage becomes operational.** P2's registry tells /explore what's must-touch; /explore's existing C1-C4 + P2.3 per-entry report ensure must-touch sources either appear in the inventory or appear as confirmed-absent. Layer 1 + Layer 2 together close the canonical-source-miss surface in a way neither alone does. This is the assembly-emergent property the sensemaking predicted.

**E2: Staging amplifies coverage.** /staged-explore (P1-CB) runs /explore multiple times. Each pass re-checks the canonical-source registry. A source that wasn't surfaced in pass-1 has multiple chances to be surfaced in pass-2 or pass-3 (or to be marked confirmed-absent with reasoning across passes). Staging × registry has higher coverage than either alone.

**E3: Audit becomes systematic, not anecdotal.** P3-AA's grid against P3-AB's signatures gives a baseline. As more /explore runs accumulate, the audit can detect drift in rule-firing (if a rule used to fire at 90% and drops to 60%, that's a spec-quality regression signal). Without the grid, drift is invisible.

**E4: The assembly preserves human-in-loop at the calibration phase.** No autonomous selection at any layer. Human writes registry; human selects staging parents; human runs audit. Matches nav_north_star.md's L0-L1 doctrine. Auto-selection is a clean upgrade path (P1-CC + auto-audit) once calibration data accumulates.

### Project-specific risk dimensions check

| Risk dimension | CCS exposure | Notes |
|---|---|---|
| **Duplicate-derivable-state** | LOW | The registry is authored, not derived. /explore's per-entry report is derived from registry + scan, but doesn't duplicate state. `_frontier.md` is the canonical multi-pass state; not duplicated elsewhere. |
| **Operation-parsimony** | MEDIUM-PASS | Three new mechanisms ship together (skill, field, audit). Justified because they're complementary (assembly-emergent property E1). Each alone would be parsimonious-but-incomplete. |
| **Phase-fit** | PASS | Matches current L0-L1 calibration (human-in-loop). Doesn't premature-ship L2+ autonomy. |
| **Explicit-culture-fit** | PASS | Aligns with surround layer (disciplines atomic, runners orchestrate); aligns with nav_north_star.md's manual-v1 acceptance; aligns with §3.6/§7.2 spec commitments. |

---

## Phase 3.5 — Axis Coverage Check

The user named four orthogonal axes. Verify each has at least one candidate variant:

| Axis | Values present in CCS | Coverage |
|---|---|---|
| **(a) WHERE** the mechanism lives | P2 = framing; P1 = runner (discipline-orchestration); P3 = audit/observational | ✓ three values |
| **(b) WHEN** the mechanism fires | P2 fires framing-time; P1 fires run-time; P3 fires post-run | ✓ three values |
| **(c) WHO** triggers | P2 human (author writes); P1 human selects + runner orchestrates; P3 human (audit) | Mostly human; runner secondary. NOTE: this is calibration-appropriate (L0-L1); auto-trigger (P1-CC, P4-NA's runner-internal step) is on the upgrade path. |
| **(d) WHAT** the mechanism captures | P1 existence-claim aggregation; P2 determination-mechanism (canonical decision); P3 audit-evidence | ✓ three values |

All four axes covered. Axis (c) skews to "human" by design (the calibration phase calls for it).

---

## Final Recommendation — Output Dispositions

### ACTIONABLE survivors (ship as a coherent stack)

- **P1-CB** — thin `/staged-explore` SKILL.md + references/staged-explore.md, human-in-loop parent selection, manual Merge Contract reference
- **P2-RA + P2-GA + P2-GC** — `## Canonical Sources` field in `_branch.md` template, "safety-net" authoring guidance, Question/Goal-references-default-canonical sub-rule, /explore spec extension for APPEND-ONLY per-entry report, inquiry-framing discipline spec update
- **P3-AA + P3-AB** — per-rule × per-run grid audit, populated with signature-based firing evidence, applied to ≥5 recent /explore runs

### DEFERRED with revival trigger

- **P1-CA** — doc-only fallback. Revival: P1-CB proves unused for >5 inquiries.
- **P3-AD** — author co-audit. Revival: P3-AA produces a FLAG verdict on any rule.
- **P4-NA** — negative-space audit pass. Revival: P3-AA reveals category-level miss patterns OR ≥2 user reports of "missed a kind of thing."
- **P5-NA** — `flow-staged` field in `_state.md`. Revival: P1-CB ships AND ≥3 hand-orchestrated /staged-explore inquiries accumulate.

### RESEARCH FRONTIER

- **P1-CC** — auto-select runner. Revival: ≥5 P1-CB runs accumulate selection-rationale calibration data (autonomy-ladder L1→L2 gate).
- **P2-RD** — per-pipeline-stage registry. Revival: registry-author free-form notes show per-stage differentiation.

### KILLED (with seed extracted)

- **P1-CD** — /MVL+ `--staged` flag. KILL: violates surround layer. Seed extracted: P5 (routing) is the real question; preserved as DEFERRED.
- **P2-RB** — registry embedded in Scope Check. KILL: conflates source-coverage with question-goal alignment. Seed: "is there a shared abstraction over scope-fit and source-coverage?" → frontier question.
- **P2-RC** — Goal-embedded canonical via parsing. KILL: brittle. Seed: Q/Goal-references-default-canonical survives as P2-GC sub-rule within P2-RA, not as a replacement.
- **P3-AC** — just-look-at-flags. KILL: doesn't catch silent failures.

---

## Mechanism Coverage (Telemetry)

- **Generators applied:** 4/4 (Combination, Absence Recognition, Domain Transfer, Extrapolation — Extrapolation surfaced in the calibration-ladder framing of P1-CC's revival trigger)
- **Framers applied:** 3/3 (Lens Shifting in the calibration-phase reframing of who-triggers; Constraint Manipulation in P1-CA/P1-CB; Inversion in P2-GA)
- **Convergence signal:** YES — three independent mechanisms (Constraint Manipulation, Domain Transfer, Combination) converged on Assembly CCS as the right architecture for the current phase
- **Survivors tested:** 8/8 candidates tested with the 5-test cycle
- **Failure modes observed:** None firing.
  - Premature evaluation: NO (mechanisms run before testing)
  - Single-mechanism trap: NO (multiple mechanisms per piece)
  - Early frame lock: NO (explored contrarian variants P1-CA, P2-RC, P3-AC; rejected on structural grounds, not comfort)
  - Innovation without grounding: NO (all candidates tested)
  - Mechanism exhaustion: NO (8 survivors)
  - Survival bias: LOW (contrarian variants explored and KILLed for structural reasons, not threat)

---

## **Overall: PROCEED** (sufficient coverage + convergence + tested survivors + axis coverage all four axes + assembly-emergent properties identified + project-specific risk dimensions checked).

Downstream consumer (/td-critique) should treat the Canonical Coverage Stack (CCS) as the primary assembly to evaluate, with the four DEFERRED items as conditional follow-ons. The two RESEARCH FRONTIER items should be preserved in the finding's Open Questions section. The four KILLed candidates have seeds extracted; no seeds are unaddressed.
