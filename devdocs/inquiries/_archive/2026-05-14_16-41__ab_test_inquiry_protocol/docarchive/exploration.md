# Exploration: A/B-test inquiry protocol — possibility map

## User Input

`devdocs/inquiries/2026-05-14_16-41__ab_test_inquiry_protocol/_branch.md` (signal-first, possibility mode)

## Step 0 — Declarations

| Field | Value |
|---|---|
| `cognitive-commitment-mode` | `open` |
| `territory-type-mode` | `possibility` (conceptual design space; candidates must be generated to be placed on the map) |
| `entry-point` | `signal-first` (user proposed P1 — probe it first, then map neighbors) |
| `expected` | ~20 items |
| `depth-level` | `D2` (functional one-line per item) |
| Boundary | Explicit; no boundary-discovery sub-phase |

## Territory Overview

The territory is the **design space of an A/B-test inquiry protocol for homegrown** — possible shapes that satisfy: (a) runs the same input through two discipline sets (current + snapshot), (b) produces a comparison-ready artifact, (c) composes with existing homegrown protocols.

The territory has six regions corresponding to the major orthogonal dimensions of the protocol:

| Region | What varies in this region |
|---|---|
| **Surround layer (S)** | Existing homegrown machinery the protocol composes with |
| **Region A: Storage shape** | Where the two runs' outputs physically live |
| **Region B: Launch mechanism** | How the two runs are kicked off |
| **Region C: Comparison artifact** | What the comparison output looks like and where it lives |
| **Region D: Granularity** | What level of artifact is compared (full pipeline / single discipline / telemetry / progression) |
| **Region E: Composition** | Whether to build a new protocol or extend/reuse existing ones |
| **Region F: Confirmed-absent** | Paradigms enumerated but found inapplicable |

Coarse-scan first surfaced the surround layer (per the layered-territories rule) before scanning inquiry-specific candidates.

---

## Inventory

### Surround layer (S) — existing machinery the protocol must compose with

| ID | Item | Confidence |
|---|---|---|
| S1 | `homegrown/protocols/branch_inquiry.md` — creates child inquiries under an existing parent with full lineage metadata; supports `branch_mode: single \| set-member` with `branch_set_id` for coordinated sibling branches | confirmed |
| S2 | `homegrown/protocols/conclude.md` — turns a finished iteration into `finding.md`, archives discipline outputs to `docarchive/`, prints relationship pointers (`BRANCH_OF`, `BRANCH_SET`, `RELATED`) | confirmed |
| S3 | `homegrown/protocols/outcome_review.md` — after-use review with delta types (`confirmation \| mismatch \| uncertainty \| drift \| regression`), evidence, confidence, route — already implements an L6 outcome-alignment record schema | confirmed |
| S4 | `homegrown/protocols/loop_diagnose.md` — frames a correction-chain (weak prior + human correction + improved later) as an MVL+ inquiry; produces failure hypotheses with confidence | confirmed |
| S5 | `homegrown/protocols/artifact_materialization.md` — controls decision-to-files conversion; includes a trace contract for downstream review | confirmed |
| S6 | `homegrown/contracts/alignment_control.md` — shared L0–L6 alignment vocabulary + record schema used by outcome_review and loop_diagnose | confirmed |
| S7 | `enes/stability_preservation_via_git.md` — the snapshot infrastructure (snapshot via git archive, prefix all skills, install side-by-side as `/<sha>-MVL+`); produces the second-run capability this protocol depends on | confirmed |
| S8 | `archived_skills/bf4ae1f-hg/` + `install_bf4ae1f_for_claude.sh` — concrete instance of a snapshot ready to be invoked as `/bf4ae1f-MVL+`, etc. | confirmed |
| S9 | `MVL+`'s RESUME mode (per `MVL+/SKILL.md`) — accepts an existing `inquiry_path` and resumes the pipeline; means a pre-created child folder can be picked up by either MVL+ or `<sha>-MVL+` | confirmed |
| S10 | The `_state.md` `## Relationships` field — supports `CONTINUES FROM`, `SUPERSEDED BY`, `RELATED`, `BRANCH_OF`, `BRANCH_SET` — the existing inter-inquiry pointer mechanism | confirmed |

### Region A — Storage shape

| ID | Item | Confidence |
|---|---|---|
| A1 | **Parent folder + two child subfolders** (user's proposal): `devdocs/inquiries/<ts>__ab_<slug>/{current/, snapshot-<sha>/, _ab.md}` — each child is a complete inquiry tree | scanned |
| A2 | **Two sibling root inquiries linked by RELATED**: no parent folder; each root inquiry has `RELATED: ../<other>/_state.md` in its `_state.md` | scanned |
| A3 | **Branch-set under an originating parent**: parent is an input-only inquiry with no discipline outputs; two children created via `branch_inquiry` with `branch_mode: set-member`, shared `branch_set_id` | scanned |
| A4 | **Single inquiry, two-prefixed file sets**: `current_sensemaking.md` + `snapshot_sensemaking.md` in the same folder — denser but harder to read; abandons MVL+'s file-naming convention | scanned (rejected — breaks MVL+ pipeline assumptions) |

### Region B — Launch mechanism (how the two runs are kicked off)

| ID | Item | Confidence |
|---|---|---|
| B1 | **Conversation fork** (user's proposal): user opens a second Claude Code session, runs the snapshot's runner there; original session runs current. Two parallel agent contexts | scanned |
| B2 | **Sequential same-session**: same conversation runs `/MVL+ <a>` then `/<sha>-MVL+ <b>` back-to-back; one context, two pipelines in sequence | scanned |
| B3 | **Automated outer runner**: a new runner `/ab-test "question" --vs <sha>` creates the parent and dispatches both pipelines without user intervention | scanned |
| B4 | **Manual launch with explicit dispatch instructions**: protocol creates the parent + child stubs and prints the two slash-command lines for the user to paste into one or two sessions; agnostic to fork-or-sequential | scanned |
| B5 | **CLI-runner outside Claude Code**: a shell script that invokes both pipelines as separate Claude Code processes from outside; useful for batch regression runs | scanned (engineering-leaning; out of normal homegrown invocation path) |

### Region C — Comparison artifact (where the comparison lives, what shape it takes)

| ID | Item | Confidence |
|---|---|---|
| C1 | **Manual side-by-side reading**: no durable comparison artifact; user reads both `finding.md` files in their editor | scanned |
| C2 | **`comparison.md` at parent root**: free-form prose comparison written by the user or an LLM after both runs complete | scanned |
| C3 | **Repurposed outcome_review record**: the parent's comparison artifact IS an `outcome_review` record (S3) — source = snapshot, expected = "equivalent or better than current", observed = the diff, delta_type ∈ {confirmation, regression, drift, mismatch}, evidence = both finding paths | confirmed (good fit; outcome_review's schema fits A/B verdicts cleanly) |
| C4 | **Comparison-as-third-inquiry**: a third MVL+ inquiry whose input is "compare /Users/.../current/finding.md vs /Users/.../snapshot/finding.md" — comparison itself runs through SIC | scanned |
| C5 | **Per-discipline diff files**: `comparison/sensemaking_diff.md`, `comparison/innovation_diff.md`, etc. — granular, supports per-discipline regression detection | scanned |
| C6 | **Repurposed loop_diagnose**: A/B comparison framed as a correction chain inverted — the "weak prior" is whichever side underperforms, the "improved later" is the better side; uses loop_diagnose's failure-hypothesis output | scanned (structurally awkward — loop_diagnose presupposes a human correction signal that A/B doesn't have) |
| C7 | **Telemetry-only comparison**: no content diff; just compare PROCEED/FLAG/RE-RUN counts, iteration counts, perspective-saturation states across the two runs. Cheap; misses semantic regression | scanned |
| C8 | **Rubric-based comparison**: a per-discipline grading rubric ("did sensemaking extract anchor X?" "did critique kill candidate Y?") applied to both outputs. Score-based, comparable across runs | scanned |

### Region D — Comparison granularity

| ID | Item | Confidence |
|---|---|---|
| D1 | **Full pipeline (finding.md vs finding.md)**: compare the final synthesized output | scanned |
| D2 | **Per-discipline outputs**: compare `sensemaking.md` vs `sensemaking.md` etc. — pinpoints which discipline regressed | scanned |
| D3 | **Single-discipline isolation**: A/B tests just one discipline applied to the same input (e.g., only `/sense-making` vs `/<sha>-sense-making` on a fixed `_branch.md`); skips the rest of the pipeline | scanned |
| D4 | **Progression-internal diff**: compare SV1→SV6 in sensemaking, CV1→CV5 in comprehend — granular per-stage regression detection | scanned (novel; valuable for spec-level diagnosis) |
| D5 | **Telemetry verdicts only**: compare what each run's self-assessment said (PROCEED/FLAG/RE-RUN) without reading content | scanned (overlaps with C7 in artifact form, but distinct as granularity choice) |

### Region E — Composition with existing homegrown protocols

| ID | Item | Confidence |
|---|---|---|
| E1 | **Standalone new protocol** (`homegrown/protocols/ab_test_inquiry.md`): full new file specifying parent creation, child stubs, launch, comparison artifact | scanned |
| E2 | **Layered on branch_inquiry**: ab_test_inquiry calls branch_inquiry twice (once per side), inheriting all lineage / set-member / depth-policy machinery from S1 | scanned |
| E3 | **Pure extension of branch_inquiry**: add a third `branch_mode: ab-test` value to S1; no new protocol file. branch_inquiry handles the whole thing including parent creation | scanned (collapses to one file; trades clarity for compactness) |
| E4 | **Composition via outcome_review only**: no new protocol creates folders; user creates the two inquiries manually (with normal MVL+/`<sha>-MVL+`), then runs outcome_review at the end with the comparison delta | scanned (lightest possible — no folder-creation protocol; relies on user discipline to link the two inquiries) |
| E5 | **N-way generalization**: protocol takes a list of versions (current + N snapshots), creates N+1 child folders, supports cross-comparison; degenerate case is N=1 (= classic A/B) | scanned (future-direction; complicates v1) |
| E6 | **Bootstrap-style baseline lock**: the snapshot's expected output is committed once (frozen) and current runs compare against the locked baseline without re-running snapshot. Saves compute on repeated tests | scanned (eval-fixture analog; useful when running the same regression test repeatedly) |
| E7 | **Predictive A/B**: human predicts the snapshot's behavior; current run is compared against the prediction. No actual snapshot run needed. Lightest, but only valid when predictions are reliable | scanned (rare use-case) |

### Region F — Confirmed-absent (paradigms enumerated but inapplicable)

| ID | Item | Confidence |
|---|---|---|
| F1 | **Statistical sampling / p-values / RCT methodology**: A/B testing here is N=1 per side; no sample distribution; significance testing doesn't apply | confirmed-absent |
| F2 | **Blinding**: there's no human-experimenter analog; the LLM isn't blinded to which version it's running because the slash command name is part of the invocation | confirmed-absent |
| F3 | **Real-time mid-pipeline intervention**: comparison is post-hoc, not in-flight; the pipelines run independently to completion | confirmed-absent |
| F4 | **Discipline-output schema cross-version compatibility check**: assumed YES — both versions produce `sensemaking.md`, `finding.md` etc. with the same canonical filenames per the MVL+ contract. Schema drift between versions is a real concern but is not a paradigm to enumerate, it's a failure mode to handle | confirmed-absent (as a paradigm; flagged as failure mode for downstream) |

---

## Signal Log

| # | Signal type | Source | Action |
|---|---|---|---|
| 1 | **Density** | Region C (8 candidates) and Region B (5 candidates) — comparison-artifact format and launch-mechanism are the dimensions with the most variation | Probed C; deferred deep B-comparison to sensemaking |
| 2 | **Novelty** | C8 (rubric-based), D4 (progression-internal diff), E6 (bootstrap baseline lock), E7 (predictive A/B) | Surfaced; deferred deep treatment to innovate |
| 3 | **Relevance** (purpose-biased) | A1 (user's proposal), C3 (outcome_review reuse), E2 (layered on branch_inquiry) — these minimize new infrastructure for the stated self-maintenance use | Probed all three (probes 1–3 below) |
| 4 | **Tension** | B1 vs B2 vs B3 mutually exclusive at the launch layer; E1 vs E2 vs E3 vs E4 mutually exclusive at the protocol-existence layer | Surfaced; will be resolved by sensemaking/critique |
| 5 | **Absence** | (a) No candidate addresses the **comparison verdict format** explicitly (free-form vs structured vs scored); (b) no candidate addresses the **schema-drift problem** between versions; (c) no candidate addresses the **cost/value heuristic** (when is A/B testing worth running at all?) | Flagged as frontier questions for sensemaking/decompose |

### Probes

**Probe 1 (P1 / A1 — user's proposal in detail):**
Folder structure: `devdocs/inquiries/<ts>__ab_<slug>/{_ab.md, current/<full inquiry tree>, snapshot-<sha>/<full inquiry tree>, comparison.md}`. Each child subfolder is a complete inquiry from MVL+'s perspective. The protocol's setup work: (1) create parent + two child subfolders, (2) write `_ab.md` with shared input metadata, (3) write each child's `_branch.md` (identical content) and `_state.md` (one with `runner: MVL+`, one with `runner: <sha>-MVL+`), (4) print dispatch instructions. Both children are then resumable via MVL+'s RESUME mode (S9). On both completing, the comparison artifact is written at parent root.

**Probe 2 (P4 / E2 — layered on branch_inquiry):**
branch_inquiry already supports `branch_mode: set-member` with shared `branch_set_id` (S1). For A/B: create an originating parent inquiry (with the input as `_branch.md` but no discipline pipeline running on it — `Status: ANCHOR` or similar), then call branch_inquiry twice with same `branch_set_id`, different runners. Hits a wall: branch_inquiry's runner-validation accepts only `MVL` and `MVL+`, not `<sha>-MVL+`. Either (a) extend branch_inquiry's runner validation to accept any `*-MVL+` form, or (b) bypass branch_inquiry and have ab_test_inquiry create the children directly.

**Probe 3 (C3 — outcome_review as comparison artifact):**
outcome_review's record schema (S3) maps directly onto A/B comparison verdicts:
- `source.path` = snapshot version's finding.md
- `expected` = "produces output equivalent to or better than current homegrown's finding.md"
- `observed` = paths to both findings + the actual deltas
- `delta.type` ∈ {`confirmation` (no regression), `mismatch` (regression detected), `regression` (specific behavior worse), `drift` (style/quality changed in unclear direction)}
- `evidence` = both finding paths + per-discipline output paths
- `route.action` = `monitor` / `revise_protocol` / `branch` / `loop_diagnose` (escalate)

This means we DON'T need to invent a comparison-artifact format — outcome_review already provides one, and it integrates with the alignment_control contract (S6). The new A/B protocol is the FOLDER + DISPATCH machinery; outcome_review is reused for the verdict.

---

## Confidence Map

| Region | Confidence level | Notes |
|---|---|---|
| Surround layer (S) | confirmed | Read directly from existing project files |
| Region A (storage) | scanned | Major candidates surfaced; A1 probed in detail (probe 1) |
| Region B (launch) | scanned | Major candidates enumerated; tradeoffs deferred to sensemaking |
| Region C (artifact) | partially confirmed | C3 (outcome_review reuse) probed in detail (probe 3) — confirmed as a strong candidate |
| Region D (granularity) | scanned | Five candidates surfaced; tradeoffs deferred |
| Region E (composition) | partially confirmed | E2 (layered on branch_inquiry) probed (probe 2) — found a runner-validation gap |
| Region F (confirmed-absent) | confirmed-absent | Four paradigms confirmed inapplicable |

Confirmed-absent regions are productive output, not gaps — they prevent downstream disciplines from treating "A/B test" as a sampling-statistics problem (F1), a blinded-experiment problem (F2), or a real-time intervention problem (F3).

---

## Frontier State

**Stable.** After cycle 1 (coarse scan + signal detection + 3 probes + jump-scan), new scans produce variants of existing candidates rather than new structural features. The major dimensions (storage / launch / artifact / granularity / composition) are mapped and the candidate clusters within each are enumerated. The jump-scan from a domain-transfer angle (compiler bootstrap testing → E6; LLM eval suites → C8 rubric grading) added two valuable candidates without revealing a missed major region.

---

## Gaps and Recommendations (frontier questions for downstream)

### Frontier questions handed to sensemaking

- **Verdict format ambiguity:** the comparison verdict's expressive shape is unspecified across candidates. C3 says "use outcome_review's delta types" but doesn't specify per-discipline granularity. C7/D5 say "telemetry only" but lose semantic content. C8 says "rubric" but rubrics aren't enumerated. Sensemaking needs to collapse this ambiguity.
- **What actually counts as a "regression"?** A finding that's worded differently but says the same thing — regression or not? A finding that's factually similar but drops a frontier question — regression? Sensemaking needs to extract the "regression" anchor from the user's actual concern (which is presumably "the snapshot was producing better discipline outputs" — a quality judgment, not a textual diff).
- **Snapshot-vs-current asymmetry:** is the snapshot the "baseline truth" being defended, or is it the "candidate under test" being attacked? Different framings produce different default verdicts and different evidentiary burdens.

### Frontier questions handed to decompose

- **The protocol has at least four sub-pieces** (storage, launch, artifact, composition-with-existing-protocols). Decompose should partition these as independent question-tree pieces with explicit interfaces (what the storage piece hands to the launch piece; what the launch piece hands to the artifact piece).
- **Schema-drift handling** (signal-5b): if the snapshot's `finding.md` has a different schema than current's (e.g., snapshot doesn't have the `Next Actions` section that was added later), how does the protocol cope? This is its own piece.

### Frontier questions handed to innovate

- **Novel candidates worth deepening:** D4 (progression-internal diff — SV1→SV6, CV1→CV5), C8 (rubric-based grading), E6 (bootstrap baseline lock). These weren't in the user's original signal but emerged from the design space.
- **Cost/value heuristic:** when is running an A/B test worth the compute (two full MVL+ pipelines = significant)? Is there a cheap pre-screen (e.g., telemetry-only comparison C7) that triggers a full A/B only on suspicion?

### Frontier questions handed to critique

- **Evaluation dimensions for the protocol candidates** (which sensemaking/innovate produce): coverage (does the protocol handle all cases?), composability (does it cleanly compose with branch_inquiry/conclude/outcome_review?), parsimony (does it add minimum new machinery?), durability of artifacts (can a future session reconstruct the comparison from files alone?), failure-mode surface (how many ways can it go subtly wrong?).

### Unbounded gaps (not interpolable from the current map)

None identified. All gaps are bounded by enumerated dimensions.

---

## Telemetry

| Metric | Value |
|---|---|
| Mode | possibility |
| Entry point | signal-first (probed user's P1 first, then mapped neighbors) |
| Cycles run | 1 (coarse scan + signal detection + 3 probes + jump-scan; convergence reached) |
| Candidates generated | 24 (10 surround-layer S + 4 storage + 5 launch + 8 artifact + 5 granularity + 7 composition + 4 confirmed-absent — overlaps allowed across regions) |
| Signals detected | 5 (density, novelty, relevance, tension, absence) |
| Probes performed | 3 (P1/A1 detail; E2 branch_inquiry layering; C3 outcome_review reuse) |
| Probes deferred | Tension-resolution between launch mechanisms (deferred to sensemaking); novelty-deepening of D4/C8/E6 (deferred to innovate) |
| Resolution progression | Coarse → signal-first probes → jump-scan in domain-transfer direction (compiler bootstrap, LLM eval suites) — added E6/C8/P21/P22 candidates |
| Frontier state | Stable |
| Discovery rate | High in cycle 1 (24 items); jump-scan added 2 marginal items — diminishing |
| Convergence criteria status | (a) Frontier stability: TRUE. (b) Declining discovery rate: TRUE. (c) Bounded gaps: TRUE. |
| Jump-scan performed | TRUE (domain transfer to compiler bootstrap + LLM eval; surfaced E6 and C8) |
| Failure modes checked | Premature depth (no — coarse scan first), surface-only scanning (no — 3 probes performed), false confidence (no — jump-scan performed), premature termination (no — convergence criteria explicitly checked), re-exploration (no — frontier tracked), completeness bias in possibility mode (no — obvious candidates A1/B1/B2/E1 included before novel D4/E6/C8), open→closed drift (no — labels kept at functional-one-line level), silent boundary-discovery (no — boundary explicit), negative-space silent drop (no — Region F explicit), staging-boundary regression (n/a — single invocation), inadequate per-item depth (no — D2 maintained throughout) |

**Overall: PROCEED** — sufficient candidate breadth across all major design dimensions; key tensions and novel candidates surfaced; convergence verified by jump-scan.
