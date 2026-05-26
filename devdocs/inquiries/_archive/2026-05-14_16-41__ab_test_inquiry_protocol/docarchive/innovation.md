# Innovation: A/B-test inquiry protocol — design candidates per piece

## User Input

`devdocs/inquiries/2026-05-14_16-41__ab_test_inquiry_protocol/_branch.md` plus upstream `exploration.md` (24 candidates / 6 regions), `sensemaking.md` (5 commitments locked), `decomposition.md` (5-piece question tree P1–P5; hidden coupling on outcome_review install-set flagged).

Seed scope: generate concrete design candidates for each of the 5 decomposed pieces, respecting sensemaking's 5 commitments and satisfying decomposition's verification criteria. Architecture is locked; within-piece design choices are open.

---

## Direction

### Context
The protocol is part of homegrown's self-maintenance loop — the project's regression-detection substrate. It composes with branch_inquiry (parent + branch_set children), outcome_review (delta record schema), conclude.md (relationship printing), and the snapshot infrastructure from `enes/stability_preservation_via_git.md`. The user has just produced their first snapshot (bf4ae1f); A/B is the missing comparability layer.

### Valuation (what feels load-bearing)
- The dispatch instruction format (P3) and the synthesize trigger (P4) determine USER-FACING ergonomics — they're where adoption is won or lost.
- The `_ab.md` schema (P2) and outcome_review handling (P4) determine STRUCTURAL durability — they're where future runs will or won't be readable.
- The hidden coupling on outcome_review's install-set membership (decomposition's I3 finding) needs an explicit resolution, not a punt.
- The "bootstrap clause" archetype (per `artifact_materialization.md`'s pattern) suggests the protocol can be drafted within homegrown's source repo while still useful before being installed as a slash command.

### Motivation
The user's stated need (regression suspicion confirmation) is concrete and immediate. Designed-but-unused (KI5 from sensemaking) is the failure pattern to avoid — every design choice should be tested against "would the user actually invoke this when suspicious?"

---

## Seed

**Constrained seed (within sensemaking-locked architecture):** what concrete within-piece design choices best satisfy decomposition's verification criteria for P1–P5, given that the architecture is fixed (composition over invention, scaffold-and-instruct, structured human verdict via outcome_review reuse, explicit test_intent, N=1 paired-snapshot paradigm)?

---

## Phase 2 — Generation (7 mechanisms × 3 variations = 21 candidates)

Each candidate notes which piece(s) it bears on.

### 1. Lens Shifting (Framer)

**LS-G (generic) — "It's not a protocol file, it's a naming pattern."**
Frame: instead of a new `homegrown/protocols/ab_test_inquiry.md`, the A/B-test is a *convention* documented as one paragraph inside `branch_inquiry.md` plus a slug-naming rule (`<ts>__ab__<slug>/branches/current/` and `.../snapshot-<sha>/`). No new protocol; just convention. Bears on: P1, P2, P5.

**LS-F (focused) — "The input is an existing inquiry, not a fresh question."**
Frame: the most common A/B use-case is "I just ran an inquiry on current, now I want to know if the snapshot would have produced something better." So the protocol's primary input is `inquiry_path` of an already-completed run, not a fresh question. Protocol re-runs that inquiry's `_branch.md` content under `<sha>-MVL+`. Bears on: P1 (input contract grows a re-test mode), P3 (dispatch only needs to start the snapshot side because the current side already exists).

**LS-C (contrarian) — "No verdict; just paired finding.md files."**
Frame: drop the synthesize phase entirely. Protocol just produces the two findings; if the user wants a verdict, they invoke a separate operation (read both manually / run /td-critique on the pair / invoke outcome_review). Bears on: P4 (does it exist?).

### 2. Combination (Generator)

**CB-G (generic) — "branch_inquiry × 2 + outcome_review × 1, sequenced."**
Combine the two existing protocols literally: setup phase = call branch_inquiry twice (with shared `branch_set_id`); synthesize phase = call outcome_review once at parent root with both finding.md files as evidence. The A/B protocol is a thin orchestration over these two existing protocols. Bears on: P2, P4, P5 (composition).

**CB-F (focused) — "Parent is a normal inquiry with `Status: ANCHOR_ONLY`; no separate `_ab.md` file."**
Combine `_ab.md`'s metadata fields into the parent's existing `_state.md` Relationships field. Add a new status value `ANCHOR_ONLY` meaning "this inquiry holds metadata only; doesn't run a pipeline." Reduces new file count by one; reuses existing `_state.md` schema-evolution path. Bears on: P2.

**CB-C (contrarian) — "A/B is a 2-arm meta-loop."**
Force-fit A/B into the existing `meta-loop` machinery: the two pipeline runs are two sequential probes; `_meta_state.md` records both; navigation between them is "merge" or "compare." Reuses meta-loop entirely. Bears on: P5.

### 3. Inversion (Framer)

**IN-G (generic, level 1: component) — "Orchestrate-and-deliver, not scaffold-and-instruct."**
Invert sensemaking's commitment 2: protocol auto-launches both children (subagents or parallel CLI dispatch) instead of printing instructions. Bears on: P3.

**IN-F (focused, level 1: component) — "Verdict is automated against pre-declared criteria."**
Invert sensemaking's commitment 3: before running, user declares "snapshot must say X about Y for the test to pass." Protocol mechanically checks the criterion against the snapshot finding. Bears on: P4.

**IN-F2 (focused, level 2: system — depth-check inversion of IN-F) — "No pre-declared criteria; the protocol learns criteria from accumulated A/B history."**
Invert IN-F at the system level: instead of the user declaring criteria, the protocol accumulates "what counts as regression in this project" across many A/B runs, derived from past delta_summaries. Future verdicts use the learned criteria. Bears on: P5 (and far-future P4).

**IN-C (contrarian) — "One child + diff against a recorded baseline; no live snapshot run."**
Invert "two children both run live": pre-record the snapshot's output once; future A/B tests run only the current side and diff against the recording. Saves 50% compute; loses freshness. Bears on: P1 (baseline-record input), P2 (only one child folder).

### 4. Constraint Manipulation (Framer)

**CM-G (generic) — Add: "Setup must complete in ≤5 minutes of user attention."**
Constraint forces the protocol to be a single slash-command invocation that produces parent + both children + dispatch instructions in one shot. No multi-step interaction. Bears on: P3 (informs the exact output shape).

**CM-F (focused) — Remove: "outcome_review.md must already be installed."**
Drop the assumption that outcome_review is in the install set. Protocol either inlines the essential outcome_review schema in its own file (with cross-ref to `alignment_control.md` for the full contract) OR motivates extending the install script to include outcome_review.md. Bears on: P4 (resolves the hidden coupling from decomposition).

**CM-C (contrarian) — Add: "Snapshot side must run BEFORE the A/B-test invocation."**
Constraint says: the snapshot's output is pre-existing (created during a separate, earlier inquiry); A/B-test only runs the current side and reads the pre-existing snapshot finding. Variant of IN-C. Bears on: P1, P2.

### 5. Absence Recognition (Generator)

**AR-G (generic — gap in current design) — "There's no INVALIDATED status."**
What's missing: a way to mark an A/B test as "abandon, don't trust the verdict" mid-flight (e.g., user realized the input was bad, or the snapshot install was misconfigured). Add `INVALIDATED` status with a `reason` field to parent `_ab.md`'s status enum {ACTIVE, COMPLETE, INVALIDATED}. Bears on: P2.

**AR-F (focused — gap in discoverability) — "A/B inquiries blend into devdocs/inquiries/."**
What's missing: A/B parents look the same as regular inquiries in `devdocs/inquiries/`. No way to filter "show me all A/B tests." Add naming-prefix convention `ab__` so `ls devdocs/inquiries/ab__*` works. Could later add an `_ab_index.md` registry. Bears on: P2 (naming convention).

**AR-C (contrarian — designed-from-scratch) — "A/B isn't a protocol; it's a first-class inquiry kind."**
What's missing if redesigned today: `_state.md` has `Flow-type: classic | extended`. A comparison should be `Flow-type: ab-comparison`. MVL+ runner becomes mode-aware, dispatching to the right pipeline (single-arm pipeline for classic/extended, paired-pipeline for ab-comparison). Architecturally invasive. Bears on: P1, P2, P5.

### 6. Domain Transfer (Generator)

**DT-G (generic — git bisect) — "A/B can chain into bisect when N≥3 snapshots exist."**
git bisect: user marks revisions good/bad, git automatically narrows. Apply: once you've A/B'd current vs bf4ae1f and the verdict is "regression in current," run another A/B against an older snapshot to bisect WHEN regression entered. Implies a `chain` operation that pairs A/B tests. Bears on: future P5 / research frontier.

**DT-F (focused — compiler differential testing input library) — "Use a fixed canonical-input library."**
Tools like csmith/alive2 generate inputs guaranteed to expose differences. Apply: maintain `regression_fixtures/` with canonical questions known to exercise specific discipline behaviors. Run A/B against a library member, not a fresh user-supplied question, for repeatable regression checks. Bears on: future P5 / research frontier.

**DT-C (contrarian — peer-review two-reviewer pattern) — "ab_stability_test sibling protocol."**
Academic peer-review uses two reviewers with arbitration to control reviewer variance. Apply: A/B-test could have a sibling — `ab_stability_test` — that runs the SAME version twice on the SAME input to measure LLM-stochasticity-driven output variance. Different problem: tests stability, not regression. Bears on: future P5 / sibling protocol family.

### 7. Extrapolation (Generator)

**EX-G (generic) — "When snapshots ≥10, default snapshot becomes a convention."**
If the project accumulates 10+ snapshots over time, A/B becomes regression-suite-against-history. Implies a "default snapshot" convention (the most recent stable tag). Bears on: future P5.

**EX-F (focused) — "When A/B becomes routine (>1/week), auto-synthesize via conclude.md."**
Extrapolate adoption: at high frequency, manual synthesize trigger becomes friction. Sensemaking deferred this; extrapolation confirms the deferral with an explicit revival trigger (≥3 manual synthesizes performed → consider auto-trigger). Bears on: P4 (deferred-additions list).

**EX-C (contrarian) — "A/B becomes the CI gate for spec changes."**
Far-future: the project workflow makes every spec edit gate on an A/B suite passing before merge. Implies spec changes themselves spawn A/B inquiries automatically. Bears on: research frontier.

---

## Phase 3 — Testing (5-test cycle on each candidate)

### Per-candidate verdicts

| ID | Novelty | Scrutiny survival | Fertility | Actionability | Mech. independence | Verdict | Bears on |
|---|---|---|---|---|---|---|---|
| **LS-G** no-protocol-just-naming | Low | Fails — verification criteria from decomposition can't be met without a protocol file | Low | Yes but defeats purpose | Low | KILL | — |
| **LS-F** input = existing inquiry | Moderate | Survives — re-running existing `_branch.md` is operationally clean | High — opens "regression-of-existing-inquiry" UX pattern | High — addresses user's most likely real use case | Moderate (AR-G adjacent) | SURVIVE → REFINE | P1 (input contract) |
| **LS-C** no verdict | High contrarian | Fails — violates sensemaking commitment 3 | Low for v1 | Yes but loses comparability layer | Low | KILL (extract seed: "lite" mode for some uses) | — |
| **CB-G** branch_inquiry × 2 + outcome_review | Low (re-confirms sensemaking) | Survives strongly | Yes — it's the base design | High | High — multiple mechanisms converge | SURVIVE → ACTIONABLE | P2, P4, P5 |
| **CB-F** parent uses ANCHOR_ONLY status (no `_ab.md`) | Moderate | Survives but trades file-count for status-enum-growth — both have schema-evolution costs | Yes — generalizes "metadata-only parent inquiry" | Medium — needs branch_inquiry spec change | Single-mechanism | DEFERRED w/ revival (≥2 protocols want metadata-only parents) | P2 |
| **CB-C** A/B = 2-arm meta-loop | High | Fails on parsimony — meta-loop is heavyweight; A/B is simpler | Future-relevant | Low for v1 | Single-mechanism | KILL (extract seed: meta-loop may subsume A/B once stable) | — |
| **IN-G** auto-orchestrate | Moderate | Sensemaking explicitly deferred for v1 | High future | Low for v1 | Single-mechanism | RESEARCH FRONTIER (autonomy Level 3+) | — |
| **IN-F** pre-declared automated criteria | Moderate | Requires user to predict snapshot output reliably; only works for stable, well-understood discipline behavior | Yes — opens fixture-testing direction | Low for v1 (most uses are exploratory) | Convergent with IN-C, CM-C | DEFERRED w/ revival (≥5 same-question A/B reruns) | — |
| **IN-F2** criteria-learning | High | Requires substantial accumulated history; v1 has none | High far-future | Low | Single-mechanism, multi-phase | RESEARCH FRONTIER | — |
| **IN-C** one child + recorded baseline | Moderate (E6 from exploration) | Saves 50% compute but loses freshness; recorded baseline may not represent snapshot's current behavior | Opens regression-fixture suite | Medium for repeated tests | Convergent with IN-F, CM-C | DEFERRED w/ revival (when same A/B reruns becomes common) | — |
| **CM-G** 5-min setup constraint | Low | Survives — useful design rule | Forces tight P3 design | Yes — informs P3's output | Single-mechanism | SURVIVE → ACTIONABLE | P3 |
| **CM-F** inline schema / cross-ref alignment_control | Moderate | Survives — addresses decomposition's hidden coupling directly. Strongest objection: schema duplication risk. Survives because alignment_control.md is the canonical contract; A/B references it rather than copying | Yes — generalizes "inline-or-cite-the-contract" pattern | High | Single-mechanism (only this one tackles the gap) | SURVIVE → ACTIONABLE | P4 |
| **CM-C** snapshot pre-runs | Variant of IN-C | (same as IN-C) | (same) | (same) | Convergent | DEFERRED w/ revival | — |
| **AR-G** INVALIDATED status | Low | Survives — small useful addition | Minor | High — small `_ab.md` schema addition | Single-mechanism | SURVIVE → ACTIONABLE | P2 |
| **AR-F** `ab__` naming prefix | Low | Survives — convention is enforcement-free but adequate at v1 scale | Yes — generalizes typed inquiry kinds | High | Single-mechanism | SURVIVE → ACTIONABLE | P2 |
| **AR-C** first-class ab-comparison flow-type | High | Fails on parsimony for v1 — needs MVL+ runner change, _state.md schema change, conclude.md change | High future-relevant | Low for v1 | Single-mechanism | RESEARCH FRONTIER (revive when 3+ comparison-style protocols emerge) | — |
| **DT-G** chain into bisect (N≥3 snapshots) | High | Requires snapshot calibration not yet present | High future | Low for current N=1 | Single-mechanism | RESEARCH FRONTIER (revive when N≥3 snapshots) | — |
| **DT-F** input library | Moderate | Same as IN-C/IN-F territory | Yes | Low | Convergent with IN-F | RESEARCH FRONTIER | — |
| **DT-C** ab_stability_test sibling | High | Uncovers a real concern (LLM stochasticity could confound A/B verdicts) | Yes — sibling protocol pattern | Medium | Single-mechanism | DEFERRED w/ revival (when A/B verdict confidence is low due to suspected stochasticity) | — |
| **EX-G** default-snapshot convention | Low (just docs the future direction) | Requires snapshots ≥10 | Yes | Low for current calibration | Single-mechanism | RESEARCH FRONTIER | — |
| **EX-F** auto-synthesize at high frequency | Moderate (re-confirms sensemaking deferral with explicit revival trigger) | Survives | Yes — concrete revival trigger | High — informs P4's deferred section | Single-mechanism but consistent with sensemaking | SURVIVE → ACTIONABLE (for the deferral-list entry, not the auto-trigger itself) | P4 |
| **EX-C** A/B-as-CI-gate | Very high | Far future | Yes | Very low for current state | Single-mechanism | RESEARCH FRONTIER | — |

### Disposition tally

| Disposition | Count | Candidates |
|---|---|---|
| **ACTIONABLE** (multi-source convergent or unique-mechanism with strong evidence) | 7 | LS-F, CB-G, CM-G, CM-F, AR-G, AR-F, EX-F |
| **DEFERRED with revival trigger** (single-source survivors with explicit revival) | 5 | CB-F, IN-F, IN-C, CM-C, DT-C |
| **RESEARCH FRONTIER** (architectural/multi-phase; preserved as observation) | 7 | IN-G, IN-F2, AR-C, DT-G, DT-F, EX-G, EX-C |
| **KILL** (failed scrutiny; seed extracted where applicable) | 3 | LS-G, LS-C, CB-C |

---

## Assembly Check

Combining the 7 ACTIONABLE survivors produces a coherent v1 protocol design:

### The assembled v1 design

| Piece | Concrete design choice | Source mechanism(s) |
|---|---|---|
| **P1** (Identity & Contract) | Input contract supports two modes: (a) **fresh-question mode** — user provides Question + test_intent + snapshot identifier; (b) **re-test mode** — user provides existing `inquiry_path` + snapshot identifier; protocol re-runs the existing inquiry's `_branch.md` content. test_intent ∈ {regression-check, improvement-check, free-comparison}. NOT-list documents 4 confirmed-absent RCT paradigms. | LS-F, CB-G |
| **P2** (Setup folder/state) | Parent folder: `devdocs/inquiries/<ts>__ab__<slug>/` (the `ab__` prefix enables `ls ab__*` discoverability). Parent `_ab.md` with status enum {ACTIVE, COMPLETE, INVALIDATED} + reason field. Child subfolders: `current/` and `snapshot-<sha>/`. Child `_branch.md` files contain identical content; child `_state.md` files share `branch_set_id`, declare `BRANCH_SET` + `AB_PARENT` relationships, set per-side runner. Protocol writes children directly (bypasses branch_inquiry's runner-validation gap that rejects `<sha>-MVL+`); parent metadata captured in `_ab.md`. | CB-G, AR-G, AR-F |
| **P3** (Dispatch) | One-slash-command invocation produces parent + children + printed dispatch instructions in one shot (≤5 min user attention). Printed instructions list: parent path, both child paths, the two exact slash commands to run, explicit note that user can run them parallel/sequential/automated, and a pointer to the synthesize-phase trigger command. | CM-G |
| **P4** (Synthesize) | Trigger mechanism for v1: **manual user invocation** (e.g., `/ab-test --synthesize <parent_path>` or re-running the protocol with a synthesize argument). Synthesize produces an outcome_review record at `<parent_path>/comparison.md`. Schema handling: protocol references `homegrown/contracts/alignment_control.md` for canonical schema and inlines a minimal field guide so the protocol works even when `outcome_review.md` is not in the install set. Schema-drift handling: explicit note in `delta.summary` for any sections present in one finding.md and not the other; never auto-flag missing-section as regression. Deferred (with revival trigger ≥3 manual synthesizes): auto-trigger via conclude.md detection of "all branch_set members complete." | CB-G, CM-F, EX-F |
| **P5** (Operational guidance) | Trigger heuristics: invoke A/B when (a) regression is suspected on a known-good past state, (b) want to validate recent improvement, (c) want to compare two architectural directions. Caveats section documents: snapshot-rot (stale snapshot tests wrong thing), sample-size-of-1 (anecdotal evidence only), two-pipeline cost (intentional compute commitment), snapshot-identifier conventions (short SHA or milestone tag; install location per `enes/stability_preservation_via_git.md`). Pointer to snapshot-creation prerequisite. | (operational synthesis from all survivors) |

### Emergent value of the assembly

The assembly produces value none of the individual pieces have alone:

- **The `ab__` prefix (AR-F) + status enum (AR-G) + manual synthesize trigger (CB-G+EX-F)** together create a fully discoverable, recoverable A/B inquiry lifecycle. From the user's perspective: "what A/B tests have I done?" is `ls devdocs/inquiries/ab__*`; "which are still active?" reads the status field; "which need synthesis?" is "status: ACTIVE, both children COMPLETE." This is a self-documenting workflow that emerges only from the combination.
- **LS-F (re-test existing inquiry) + CB-G (base design)** together collapse the user's most common A/B use-case ("I just ran X on current; now run X on snapshot") from a multi-step manual operation into one slash command — `/ab-test --vs <sha> <existing_inquiry_path>`.
- **CM-F (inline/cross-ref schema) + EX-F (deferred auto-trigger)** together solve the immediate hidden-coupling problem AND set up the v2 evolution path with an explicit revival trigger. The protocol works at v1 install configuration AND has a documented growth direction.

---

## Axis Coverage Check

| Axis | Variants in candidate set | Coverage |
|---|---|---|
| Architecture (compose vs invent) | Most candidates compose; AR-C (KILLED) and CB-C (KILLED) attempt invention; resolution: compose | ✓ |
| Trigger (human vs auto) | Sensemaking locked human; EX-F deferred auto with explicit revival trigger | ✓ |
| Input (fresh question vs existing inquiry) | LS-F provides re-test variant on top of CB-G's fresh-question default | ✓ |
| Schema location (inline vs cross-ref) | CM-F addresses both options | ✓ |
| Discoverability (implicit naming vs explicit index) | AR-F provides naming convention; future explicit index deferred | ✓ |
| Status state-machine (binary vs richer) | AR-G adds INVALIDATED; CB-F deferred ANCHOR_ONLY | ✓ |
| Snapshot-side execution (live-rerun vs recorded baseline) | CB-G defaults to live-rerun; IN-C, CM-C, DT-F provide deferred recorded-baseline variants | ✓ |
| Comparison granularity (full pipeline vs per-discipline vs telemetry) | CB-G defaults to full-pipeline; per-discipline + telemetry from exploration deferred to research frontier | ✓ |

8 axes; each has at least one variant in the candidate set. No single-axis candidate-set bias detected.

---

## Mechanism Coverage Telemetry

- **Generators applied:** 4 / 4 (Combination, Absence Recognition, Domain Transfer, Extrapolation)
- **Framers applied:** 3 / 3 (Lens Shifting, Constraint Manipulation, Inversion — including IN-F2 depth-check inversion)
- **Total candidates generated:** 22 (7 mechanisms × 3 variations + 1 depth-check second inversion)
- **Convergence signal:** YES — multiple mechanisms (CB-G, CM-G, AR-G, AR-F, LS-F, CM-F, EX-F) converge on the assembled v1 design described above. The architecture from sensemaking holds; mechanisms refine within-piece choices.
- **Survivors tested:** 22 / 22 (all candidates received the 5-test cycle)
- **Failure modes observed:** None
  - **Premature evaluation:** No — all candidates were generated before testing began
  - **Single-mechanism trap:** No — all 7 mechanisms applied
  - **Early frame lock:** No — the user's framing was probed via LS, inverted via IN, expanded via CB, etc., before settling on the convergent assembly
  - **Innovation without grounding:** No — every survivor was tested; failures (3 KILL) were extracted as seeds where applicable
  - **Mechanism exhaustion:** No — viable outputs in every mechanism (with one Disposition class assigned per output)
  - **Survival bias:** Tested — the most uncomfortable candidates (AR-C invasive redesign; IN-G autonomous orchestration) were KILL'd or marked RESEARCH FRONTIER for evidence-supported reasons (parsimony, sensemaking commitment), not for being threatening

**Overall: PROCEED** — full mechanism coverage achieved; convergence signal strong (7 mechanisms produce the cohesive assembled v1 design); 22/22 survivors tested with explicit dispositions; no failure modes triggered; axis coverage complete across 8 design axes.
