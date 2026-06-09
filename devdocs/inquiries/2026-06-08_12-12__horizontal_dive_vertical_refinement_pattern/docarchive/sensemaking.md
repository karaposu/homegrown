# Sensemaking: horizontal_dive_vertical_refinement_pattern

## User Input

`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-06-08_12-12__horizontal_dive_vertical_refinement_pattern/_branch.md`.

Plus surfacing.md in the same folder (26 surfaced items; concept-names list of vocabulary already in workspace).

Goal: produce SV1 → SV6 supporting the three observation targets (what it IS, why useful, what enables).
Layer Commitment: MEANING (user-stipulated; structural and process layers deferred).
Synthesis Trigger: not fired (no ≥2 prior INQUIRY findings consolidated).

---

## SV1 — Baseline Understanding

A two-phase methodology observed in the comprehenslate inquiry archive: one inquiry identifies the AXES of a configuration problem; N follow-up inquiries each refine one axis. The user calls it "horizontal dive + vertical refinement" and wants it formalized as a homegrown methodology asset.

---

## Phase 1 — Cognitive Anchor Extraction

### Constraints (6)

- **C1: Horizontal must NOT pre-commit to per-axis level values.** The comprehenslate root explicitly DEFERRED level values via Next Actions MUST. Premature value-commitment would distort axis-selection.
- **C2: Per-vertical bounded scope.** Each vertical phase refines ONE axis (or one sub-field), without modifying other axes' specifications.
- **C3: Lineage via `refines:` frontmatter is mandatory.** Every vertical declares `refines:` of the horizontal parent in its finding.md. CONCLUDE enforces `## Inherited Commitments Re-test` when N≥3 commitments inherited.
- **C4: Each vertical is a full MVL inquiry.** Not a sub-step inside a controller. It has its own `_branch.md`, `_state.md`, discipline outputs, `finding.md`, `docarchive/`.
- **C5: Synthesis must resolve cross-axis interactions that no vertical can see.** Comprehenslate's synthesis produced 4 cross-axis matrices (5×7 default; 28-pair orthogonality; 3-channel apparatus separation; 4-role action-vocabulary map).
- **C6: Synthesis declares `refines:` of ALL N+1 priors.** Comprehenslate's synthesis re-tested 23 inherited commitments at synthesis level.

### Key Insights (7)

- **I1: Horizontal establishes a COORDINATE SYSTEM** (what dimensions exist) — structurally distinct from `/decompose` which perceives coupling within one complex whole.
- **I2: Verticals are independent MVL loops**, not sub-steps. Each runs surfacing→sensemaking→decomposition→innovation→critique on its single axis.
- **I3: Synthesis has a UNIQUE role** no vertical can fulfill: cross-axis interaction resolution + emergent-pattern naming + Inherited Commitments Re-test.
- **I4: Per-axis pattern emergence is a structural feature** of the fan-out shape. Comprehenslate's 9 architectural patterns (composite-axis, categorical, asymmetric-ordinal, explicit-zero level, etc.) were NAMED at synthesis — they emerged across verticals.
- **I5: A complete H+V+S can still have missing principles**, revealed only by real use. Comprehenslate's post-synthesis diagnostic (target-side accidental polysemy) is exactly this case. The diagnostic was REACTIVE, not part of H+V+S itself.
- **I6: 1 → N+1 + 1 fan-out then fan-in.** More total inquiries than single-loop approaches; bounded per-inquiry cognitive scope is the trade.
- **I7: Recursive in principle.** Comprehenslate's A1 had 5 sub-fields each with its own vertical inquiry.

### Structural Points (5)

- **S1: Three-phase shape.** 1 horizontal → N verticals → 1 synthesis. Fan-out then fan-in. `refines:` lineage throughout.
- **S2: Pattern composes existing MVL inquiries.** It doesn't introduce new disciplines; it organizes inquiries at a higher-order level.
- **S3: Horizontal output shape.** Enumeration of axes + deferral of values + architectural decisions that scope downstream verticals.
- **S4: Vertical output shape.** Refinement of ONE axis's values + per-value definitions + cross-axis boundaries + `refines:` lineage.
- **S5: Synthesis output shape.** Canonical document + cross-axis matrices/maps + Inherited Commitments Re-test + version stamp + downstream-unblock list.

### Foundational Principles (6)

- **P1: SEPARATE coordinate-system selection from coordinate-value selection.** Different cognitive operations; conflating them produces flat output.
- **P2: HORIZONTAL-FIRST ordering.** Axes settled before per-axis values. Reverse order is the failure mode the pattern recovers from.
- **P3: PER-AXIS ISOLATION.** Each vertical operates on ONE axis. Cross-axis interactions deferred to synthesis.
- **P4: LINEAGE PRESERVATION via `refines:`.** Structural traceability child→parent. CONCLUDE re-tests inherited commitments.
- **P5: SYNTHESIS IS A SEPARATE OPERATION.** Cross-axis interaction resolution is its load-bearing role. Skipping leaves verticals fragmented.
- **P6: REAL-USE FALSIFICATION is external.** Pattern does not prevent missing principles; reactive diagnostics catch them.

### Meaning-Nodes (7)

- **M1: COORDINATE-SYSTEM-FIRST** — settle dimensions before values.
- **M2: FAN-OUT INQUIRY** — 1 horizontal produces axes; N verticals fan out per axis.
- **M3: FAN-IN SYNTHESIS** — 1 synthesis rolls up + resolves cross-axis interactions.
- **M4: LINEAGE-PRESERVING REFINEMENT** — `refines:` chain; CONCLUDE-enforced re-test.
- **M5: PATTERN-EMERGENT** — architectural patterns surface ACROSS verticals; named at synthesis.
- **M6: RECURSIVE** — verticals may themselves fan out.
- **M7: SCOPE-BOUNDING** — each inquiry's cognitive scope is bounded by phase role.

*Meta-Inspection (after SV2): H4 (concept names) — "horizontal dive + vertical refinement" preserves user vocabulary; PASS. H5 (motivating examples) — N=1 empirical evidence; specific-vs-pattern check fires; flagged for Phase 3 Ambiguity 3.*

## SV2 — Anchor-Informed Understanding

The pattern is a three-phase methodology (not two) composing MVL inquiries via `refines:` lineage into a fan-out + fan-in structure. It establishes a coordinate system before populating values; enables per-axis tractability and pattern emergence. Horizontal-first ordering and synthesis-as-cross-axis-resolution are load-bearing. Pattern is **distinct from `/decompose`** in scope: `/decompose` is one discipline within one MVL loop; H+V+S composes multiple MVL loops.

---

## Phase 2 — Perspective Checking

### Technical / Logical
H+V+S parallels software engineering's **interface-before-implementation** pattern. Settle the API surface (axes), then implement each method (values), then assemble (synthesis). NEW ANCHOR: the pattern HAS A KNOWN ANALOG. The homegrown contribution is NAMING and SPECIFYING it for AI use, not inventing it.

### Human / User
Humans use this pattern when structuring complex decisions deliberately. "What pricing scheme should we have?" — settle dimensions (per-user / per-feature / per-tier / volume-discount) before populating values. NEW ANCHOR: **COGNITIVE LOAD MANAGEMENT** is the user-facing reason. Single-inquiry approaches force holding the full coordinate space at once.

### Strategic / Long-term
H+V+S enables **CUMULATIVE FRAMEWORK BUILDING**: each vertical is independently revisitable; synthesis is a versioning anchor; subsequent diagnostics can patch specific axes without rebuilding. Comprehenslate's v1.0 spec is the substrate for downstream work (pydantic / prompt / UX). The pattern produces ARTIFACTS THAT COMPOSE.

### Risk / Failure
NEW ANCHOR: failure modes split four ways.
- (a) Wrong axes — partial recovery via within-vertical revision (A8 case in comprehenslate) or post-synthesis diagnostic.
- (b) Wrong values per axis — recoverable by re-running that vertical.
- (c) Missing inter-axis interaction in synthesis — recoverable by re-synthesis.
- (d) Missing principle revealed by real use — NOT recoverable by pattern alone; requires reactive diagnostic.

### Resource / Feasibility
H+V+S is EXPENSIVE in total inquiries (comprehenslate ran 15). Per-axis cost is BOUNDED. Verticals are PARALLELIZABLE in principle. NEW ANCHOR: favorable trade-off when configuration space is too complex for single-inquiry stable axes+values; OVERKILL for simple problems.

### Ethical / Systemic
Every commitment is traceable through `refines:` lineage. Supports peer review, AI-session-to-AI-session handoff, partial reversibility. NEW ANCHOR: **TRANSPARENCY + REVERSIBILITY** as systemic properties. The pattern produces auditable output.

### Definitional / Internal Consistency
- Does H+V+S contradict homegrown disciplines? No — it COMPOSES them.
- Does it contradict `/decompose`? No — but distinction is sharp: `/decompose` operates within one MVL loop; H+V+S operates across many.
- Does it contradict MVLw/MVL+ Pre-Template Checks (Layer Commitment / Synthesis Trigger)? No — Synthesis Trigger fires on the synthesis inquiry naturally; Layer Commitment fires on the horizontal inquiry when the configuration is a framework artifact.
- Does it contradict CONCLUDE's Inherited Commitments Re-test? No — it RELIES on it as the synthesis-phase enforcement.

### Definitional / Frame-exit Completeness
Gating predicate check: has the inquiry inherited multi-value terms from prior findings used across ≥2 distinct propositions in its committed structures? The terms in use ("axis", "MVL", "inquiry", "discipline", "horizontal", "vertical", "synthesis") are not used across distinct propositions in cells/levels of this inquiry's tables/structures (no axis-typology with multiple rows here). **Gating does NOT fire.** Perspective skipped.

### Phase / Calibration-State
Does the pattern's correctness depend on calibration the project has? PARTIALLY — yes for `refines:` support (CHECKED), CONCLUDE enforcement (CHECKED), Layer Commitment / Synthesis Trigger (CHECKED). Pattern correctness is calibrated to CURRENT homegrown state. Future phases (e.g., automated `refines:` validation or branch_for_axis automation) would extend but not change the pattern.

*Meta-Inspection (after SV3):*
- H1 (candidate set): are "H+V+S", "Coordinate-System-First", "Fan-Out Inquiry" three candidates or one underlying concept? **One concept, three framings.** Treat as unified meaning-node.
- H2 (frame scope): I'm building a model that EXCEEDS the N=1 evidence. Acknowledged in Ambiguity 3.
- H3 (question framing): user-named the pattern; preserve unless structural reason to revise. None warranted.
- H7 (phase/calibration state): handled above.

## SV3 — Multi-Perspective Understanding

The pattern is a three-phase fan-out methodology that composes existing MVL inquiries via `refines:` lineage. It enables (a) cognitive-load decomposition along the coordinate-system seam, (b) per-axis independent refinement, (c) per-axis pattern emergence visible only across verticals, (d) cumulative artifact composition. Its load-bearing mechanism is HORIZONTAL-FIRST ORDERING + PER-AXIS ISOLATION + SYNTHESIS-AS-CROSS-AXIS-RESOLUTION. Known failure modes split four ways. Direct analogs in software engineering, human decision-making, and mathematics. Homegrown evidence is N=1 (specific-vs-pattern care needed).

---

## Phase 3 — Ambiguity Collapse

### Ambiguity 1 — Two phases or three?

**Strongest counter:** User said "horizontal + vertical" — only two phases. Synthesis might be just an instance of the broader Synthesis Trigger pattern homegrown already handles, not unique to H+V+S.

**Why counter fails (structural grounds):** Comprehenslate's synthesis had a SPECIFIC role no vertical fulfilled: cross-axis matrices (5×7 default; 28-pair orthogonality; etc.) and the Patterns Compendium of 9 emergent architectural patterns. These require READING ALL VERTICALS TOGETHER. A "synthesis" elsewhere (consolidating 2 priors) doesn't have the cross-axis matrix structure. The cross-axis role is structurally distinct.

**Confidence:** HIGH (mechanism — cross-axis interaction resolution — is structurally required and verticals cannot fulfill it).

**Resolution:** Pattern is THREE phases: Horizontal Dive + Vertical Refinement + Synthesis. User's two-phase naming is preserved as primary; synthesis named as the third phase with explicit cross-axis role.

**Fixed:** Three-phase model. Synthesis is load-bearing, not optional.
**No longer allowed:** Two-phase "H+V only" application (leaves cross-axis interactions unresolved).
**Depends:** Subsequent enablement claims must include synthesis's cross-axis role.

### Ambiguity 2 — Distinct from `/decompose`?

**Strongest counter:** `/decompose` perceives coupling and partitions into pieces. Horizontal-phase perceives orthogonal axes. Same operation? H+V+S might just be "`/decompose` at scale, then MVL on each piece, then CONCLUDE."

**Why counter fails (structural grounds):** Two distinctions remain. (a) **Scope**: `/decompose` runs WITHIN one MVL loop as ONE discipline (one phase of one inquiry). H+V+S operates ACROSS multiple inquiries. Unit-of-work differs by an order of magnitude. (b) **Fan-out-to-loops**: each vertical IS A FULL MVL LOOP running its own surfacing/sensemaking/decomposition/innovation/critique on its single axis. `/decompose` doesn't have this fan-out structure.

**Confidence:** HIGH.

**Resolution:** H+V+S is DISTINCT from `/decompose` and operates at a higher organizational level. The horizontal phase's MVL inquiry COULD use `/decompose` as one of its disciplines to identify axes as natural boundaries (the framings are compatible) but H+V+S is not reducible to `/decompose`-at-scale.

**Fixed:** H+V+S is a methodology pattern composing multiple MVL inquiries, not a discipline.
**No longer allowed:** Conflating with `/decompose` in artifact-form discussions.
**Depends:** Artifact-form work (deferred) must consider protocol/runner/doc-pattern options, NOT new MVL discipline.

### Ambiguity 3 — Proven or premature generalization?

**Strongest counter (specific-vs-pattern recognition cue):** Comprehenslate is ONE instance. Maybe the pattern only works for translation-configuration; maybe it has unobserved failure modes; maybe enablement claims are over-extrapolations.

**Why counter fails (structural grounds):** Three lines of evidence.
(a) The mechanism (horizontal-first ordering / per-axis isolation / synthesis cross-axis resolution) is grounded in COGNITIVE LOAD arguments that don't depend on domain.
(b) Known analogs in software engineering (interface-before-implementation), mathematics (coordinate-system-then-solve), human decision-making (dimension-then-value).
(c) The post-synthesis diagnostic itself demonstrates structural maturity — the framework was complete enough that a missing principle could be NAMED, LOCATED, PATCHED. A flat single-inquiry approach wouldn't have produced a localizable missing-principle slot.

**Confidence:** MEDIUM (mechanism HIGH; generalization MEDIUM — N=1 in homegrown).

**Resolution:** Pattern is GENERALIZABLE with explicit confidence calibration. Mechanism is HIGH-confidence; generalization is MEDIUM-confidence. Frontier flag: at N≥3 successful applications, generalization upgrades to HIGH.

**Fixed:** Hypothesis-level generalizable with confidence calibration.
**No longer allowed:** Treating as universal-validated.
**Depends:** Artifact-form work should include EVIDENCE GATE (promote from named hypothesis to shipped asset at N≥2 additional applications).

### Ambiguity 4 — Configuration-space only, or broader?

**Strongest counter:** Evidence is configuration-system (translation config). Maybe pattern doesn't generalize beyond configuration.

**Why counter fails (structural grounds):** Mechanism doesn't depend on artifact being "configuration." Pattern depends on (a) multiple orthogonal dimensions; (b) per-dimension specifiability; (c) cross-dimension interactions. These hold for: taxonomy design (categories before members), API design (interface before methods), curriculum design (subjects before objectives), decision frameworks (decision dimensions before options), policy frameworks (policy axes before per-axis policy), discipline design within homegrown itself (disciplines before refining each).

**Confidence:** HIGH (three-condition test is a clean structural predicate).

**Resolution:** Pattern applies wherever the THREE-CONDITION TEST holds: (a) multiple orthogonal dimensions, (b) per-dimension specifiability, (c) cross-dimension interactions. NOT domain-gated.

**Fixed:** Applicability is condition-test-gated.
**No longer allowed:** Restricting to "configuration design."
**Depends:** Artifact-form work specifies the condition-test.

### Ambiguity 5 — Rigid three-phase or flexible?

**Strongest counter:** Real methodologies rarely run cleanly through phases. Comprehenslate showed within-vertical revisions to horizontal commitments (A8 revising root's level count). Maybe allow vertical-to-horizontal feedback, partial syntheses, iterative re-runs.

**Why counter fails partially (structural grounds):** Strict horizontal-first → vertical-fan-out → synthesis ordering is load-bearing for the anchor-prevention argument. Verticals modifying horizontal mid-flight = value-commitment distorting axes (the exact failure mode the pattern recovers from). But softer claim: verticals MAY propose revisions to horizontal commitments WHEN justified by cross-axis pattern arguments, recorded as `## Changes from Prior` blocks. A8's case fits: revision was bounded to one horizontal commitment + structurally justified.

**Confidence:** HIGH.

**Resolution:** RIGID in ORDERING (H complete before V; V complete before S). FLEXIBLE in REVISION (verticals may propose revisions with cross-axis-pattern justification; synthesis MUST re-test all such revisions). Iteration (another full H+V+S round on the same problem) is allowed and produces a versioned canonical spec (v1.0 → v1.1 in comprehenslate's case after the diagnostic).

**Fixed:** Three-phase ordering rigid; revision structured.
**No longer allowed:** Phase re-ordering or skipping synthesis.
**Depends:** Pattern specification (deferred) must include the revision protocol.

### Load-bearing concept test

- "Horizontal dive" / "vertical refinement" / "synthesis": user-coined; user-language aligned; project-actual (comprehenslate empirical match). PASS.
- "Coordinate system" (added by sensemaking): proxy-vs-structural test — STRUCTURAL (axes really are orthogonal dimensions of a coordinate space). User language alignment: user said "axes"; "coordinate-system" is a natural generalization for next-inquiry canon connection. PASS with frontier flag (validate at canon connection).
- "`refines:`": discoverability — homegrown supports it (verified in branch_inquiry.md + conclude.md). PASS.
- "Cross-axis interaction resolution": proxy-vs-structural — STRUCTURAL (4 matrices in comprehenslate's synthesis are concrete instances). PASS.

## SV4 — Clarified Understanding

The pattern is a three-phase fan-out methodology with RIGID ORDERING and STRUCTURED REVISION: (1) Horizontal Dive — one MVL inquiry detects orthogonal axes of a coordinate-space problem and defers per-axis values; (2) Vertical Refinement — N independent MVL inquiries fan out, one per axis, each declaring `refines:` of the horizontal parent in finding.md frontmatter, allowed to propose revisions to horizontal commitments only with cross-axis-pattern justification; (3) Synthesis — one MVL inquiry declares `refines:` of all N+1 priors, resolves cross-axis interactions via matrices/maps, names emergent architectural patterns visible only across verticals, and emits a versioned canonical specification. DISTINCT from `/decompose` (which operates within one MVL loop). Applicability is THREE-CONDITION-TEST-GATED (multiple orthogonal dimensions + per-dimension specifiability + cross-dimension interactions). Mechanism HIGH-confidence; generalization MEDIUM-confidence (N=1). Failure modes split FOUR ways.

---

## Phase 4 — Degrees-of-Freedom Reduction

### Variables now FIXED

- Three phases (H + V + S), not two.
- Rigid ORDERING (H complete before V; V complete before S).
- Lineage mechanism is `refines:` frontmatter (homegrown-supported).
- Synthesis's load-bearing role is cross-axis interaction resolution.
- Distinct from `/decompose`: operates at multi-inquiry scope.
- Applicability gated by three-condition test, not domain.
- Primary cognitive layer is MEANING (per user); structural and process deferred.
- Confidence: mechanism HIGH; generalization MEDIUM (promote at N≥3).

### Options ELIMINATED

- Two-phase framing (Ambiguity 1 resolution).
- "Just `/decompose` at scale" (Ambiguity 2 resolution).
- Universal/validated treatment (Ambiguity 3 confidence calibration).
- Domain-specific (configuration-only) (Ambiguity 4 resolution).
- Phase re-ordering / skipping (Ambiguity 5 resolution).
- Treating H+V+S as a new MVL discipline (distinction-from-`/decompose`).

### Paths remaining VIABLE

- Articulating the pattern as a NAMED METHODOLOGY PATTERN at the meaning layer.
- Specifying mechanism (horizontal-first / per-axis isolation / synthesis cross-axis role / `refines:` lineage).
- Specifying applicability test (three-condition gate).
- Documenting failure modes (four split).
- Documenting enablement claims.
- Confidence-calibrated generalization with calibration trajectory.
- Forward-pointers to deferred work (canon / artifact form / process).

## SV5 — Constrained Understanding

The solution space for "articulate the pattern" is narrow: produce a stable meaning-layer model with three-phase shape + rigid-ordering / structured-revision dynamics + `refines:` lineage + cross-axis-resolution synthesis + three-condition gate + four-way failure split + confidence-calibrated generalization + forward-pointers to deferred work. Downstream decomposition can break this into independently-refineable pieces. Innovation can generate variants/extensions. Critique can adversarially test.

---

## Phase 5 — Conceptual Stabilization

*Accommodation trigger check:* did perspectives keep destabilizing the model? NO — each perspective added anchors; no perspective forced wholesale revision. Model fit the territory. No accommodation rebuild needed.

*Meta-Inspection (after SV6):*
- H6 (model fit): no exception-stacking; model accommodates all anchors. PASS.
- H8 (self-reference): am I using sensemaking to evaluate something built on sensemaking? H+V+S USES MVL inquiries; sensemaking is one discipline in MVL. Partial self-reference. Corrective: ground in external reference points. Grounded in (a) comprehenslate empirical case, (b) software-engineering / human-decision-making analogs, (c) cross-discipline comparison with `/decompose`. PASS.

---

## SV6 — Stabilized Model

### Name

**Horizontal Dive + Vertical Refinement + Synthesis (H+V+S)** — user's coinage extended with the synthesis phase made explicit.

### What it IS

A multi-inquiry methodology pattern for problems shaped "settle dimensions, settle per-dimension values, resolve cross-dimension interactions." Composes existing MVL inquiries into a three-phase fan-out + fan-in structure:

1. **Horizontal Dive.** ONE MVL inquiry whose deliverable is the AXES of the problem. Deliberately DEFERS per-axis values (typically via Next Actions MUST) so axis-selection is not contaminated by premature value-commitment.

2. **Vertical Refinement.** N independent MVL inquiries, one per axis. Each declares `refines:` of horizontal parent in finding.md frontmatter. Deliverable per vertical: that axis's value-enum + per-value definitions + cross-axis boundaries to siblings. MAY propose revisions to horizontal commitments via `## Changes from Prior` blocks, justified by cross-axis pattern argument.

3. **Synthesis.** ONE MVL inquiry declaring `refines:` of all N+1 priors. Deliverables: (a) per-axis full prose preserved; (b) cross-axis interaction matrices/maps no vertical could produce; (c) emergent architectural patterns NAMED at synthesis time; (d) Inherited Commitments Re-test (CONCLUDE-enforced at N≥3); (e) version stamp (v1.0); (f) downstream-unblock list.

Lineage preserved by `refines:` throughout. Re-test prevents silent absorption.

### Why it's useful (mechanism-grounded)

Solves three failure modes that single-inquiry approaches produce on coordinate-space problems:

1. **Anchor distortion from premature value-commitment.** Settling axes + values together lets tentative values constrain axis-set. H+V+S's horizontal-first ordering prevents this.

2. **Cognitive overload from full coordinate space.** Single-inquiry forces holding axes + values + interactions simultaneously. H+V+S decomposes: horizontal holds axes; each vertical holds one axis + boundaries; synthesis holds cross-axis interactions on top of completed verticals. Each MVL within bounded cognitive scope.

3. **Pattern invisibility within single inquiries.** Architectural patterns emerging across multiple axes (e.g., "explicit-zero level" in 3 of comprehenslate's axes) are not visible within any single axis. H+V+S makes them visible at synthesis when all verticals are read together. Patterns Compendium is a structural feature of synthesis, not an accident.

### What it enables

- **Coordinate-space artifact production** (configurable systems with explicit axes and per-axis values — pydantic schemas, UX preset catalogs, prompt-context documents).
- **Per-axis architectural-pattern emergence** (composite-axis, categorical, asymmetric-ordinal, explicit-zero level, dual-tier default, etc. — visible only across siblings).
- **Failure localization** (real-use gaps map to specific axes / sub-fields / inter-axis interactions; comprehenslate's polysemy diagnostic targeted LAYER 2 policies slot).
- **Composable refinement** (each axis revisitable independently; synthesis re-runnable; framework versionable).
- **Progressive completion** (Layer 1 framework horizontal-only at v0.1, partially-vertical at v0.5, fully-synthesized at v1.0; comprehenslate's trajectory).
- **Cross-session handoff** (every commitment traceable through `refines:` lineage; new cognizer can audit by following the chain).
- **Reactive patching with structural awareness** (post-synthesis diagnostics fit specific slots; pattern doesn't prevent missing principles but makes them localizable).

### Applicability test (three-condition gate)

H+V+S applies when ALL THREE hold:
1. **Multiple orthogonal dimensions.** Problem has dimensions that vary independently.
2. **Per-dimension specifiability.** Each dimension's values characterizable without first settling every other dimension's values.
3. **Cross-dimension interactions.** Combinations have implications no single-dimension specification captures.

If any condition fails, H+V+S is overkill; a simpler single-inquiry MVL is appropriate.

### Failure modes (four-way split)

| # | Failure | Recoverable? | Mechanism |
|---|---|---|---|
| 1 | Wrong axes | Partial | Within-vertical revision via `## Changes from Prior` + cross-axis-pattern justification; OR post-synthesis diagnostic; OR full re-run |
| 2 | Wrong values per axis | Yes | Re-run the affected vertical; synthesis re-tests inherited commitments |
| 3 | Missing inter-axis interaction in synthesis | Yes | Re-run synthesis with broader matrix coverage |
| 4 | Missing principle revealed only by real use | NO (by pattern alone) | Reactive diagnostic; pattern makes missing principle LOCALIZABLE but doesn't prevent it |

### Confidence calibration

- **Mechanism**: HIGH. Horizontal-first / per-axis isolation / synthesis cross-axis role are structurally sound; comprehenslate + cross-domain analogs converge.
- **Generalization**: MEDIUM. Homegrown N=1. Applicability test structurally clean but unvalidated beyond comprehenslate.
- **Trajectory**: bootstrap (N=1) → early-operation (N=2-3) → mature (N≥5, at least one outside configuration-design domain).

### Distinction from `/decompose`

- `/decompose` operates WITHIN ONE MVL LOOP as one discipline. Perceives coupling topology; partitions complex whole into pieces with interfaces.
- H+V+S operates ACROSS MULTIPLE MVL LOOPS as a methodology pattern. Composes inquiries into fan-out + fan-in structure.
- Compatible: horizontal phase's MVL inquiry COULD use `/decompose` to identify axes as natural boundaries. Not required.

### Forward-pointers (deferred per user; next inquiry)

- **Canon connection**: `docs/canon/thinking_space_dynamics.md` (coordinate-system framing here closely related to "thinking-space" framing in canon); `docs/canon/what_is_meaningful_traversal.md` (H+V+S produces meaningful traversal of a configuration space — coverage, convergence, productivity); `docs/canon/project_north_star.md` (self-improving cognitive system may need H+V+S as its self-spec pattern).
- **Artifact form**: protocol vs runner vs documentation pattern vs Pre-Template Check in MVLw vs something else. Out of scope.
- **Process specification**: explicit steps, triggers, gates. Out of scope.

### Difference from SV1

SV1: "two-phase methodology where one inquiry identifies axes and N inquiries refine each axis independently."

SV6: Confidence-calibrated three-phase methodology with rigid ordering, structured revision, lineage-preserving mechanism, applicability gate, four-way failure mode split, distinct from `/decompose`, with explicit enablement claims and forward-pointers to deferred work.

Structural shifts: two phases → three phases (synthesis as load-bearing); implicit → explicit mechanism; implicit → applicability-gated; uniform → confidence-calibrated; informal → sharp distinction from `/decompose`.

---

## Saturation Indicators

- **Perspective saturation**: 9 perspectives applied; last 3 (definitional/consistency, frame-exit (gating failed), phase/calibration) did not introduce new TYPES of anchors. SATURATED.
- **Ambiguity resolution ratio**: 5 of 5 resolved. None open.
- **SV delta**: SV1 → SV6 shows substantial structural shift (two-phase → three-phase; implicit → explicit; ungated → applicability-test-gated; uniform → confidence-calibrated). HEALTHY.
- **Anchor diversity**: 6 constraints + 7 key insights + 5 structural points + 6 principles + 7 meaning-nodes = 31 anchors across all 5 anchor types and 9 perspectives. DIVERSE.

## Failure-mode self-check (against Pattern B failure modes)

- Status Quo Bias: NO — explicitly tested H+V+S against `/decompose` rather than assuming distinction.
- Premature Stabilization: NO — all 5 ambiguities surfaced and resolved before SV6; 9 perspectives applied; SV delta substantial.
- Anchor Dominance: NO — 31 anchors across all 5 types; model holds together if any single anchor is removed (e.g., remove "horizontal-first ordering" and the cognitive-load argument remains in "per-axis isolation").
- Perspective Blindness: NO — explicitly checked risk/failure (uncomfortable perspective for a pattern advocate); produced the four-way failure split.
- Clean Resolution Trap: NO — each ambiguity tested against a structural counter-argument before commitment; one (Ambiguity 5) revised the resolution from "fully rigid" to "rigid in ordering, structured in revision."
- Self-Reference Blindness: PARTIAL — H+V+S composes MVL inquiries which include sensemaking; sensemaking is being used to evaluate H+V+S. Grounded in external reference points (comprehenslate empirical; software-engineering / human-decision analogs; `/decompose` cross-discipline comparison). Acceptable residual.

## Self-assessment verdict

**PROCEED.** Model is stable, mechanism-grounded, confidence-calibrated, distinguishes itself sharply from neighbors, and provides forward-pointers to deferred work. The three observation targets (what IS / why useful / what enables) are each independently articulated. Downstream decomposition / innovation / critique can build on this directly.
