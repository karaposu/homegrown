# Innovation: Explore-Navigation Atomic Decomposition (Second Pass)

## User Input

Source: `/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-11_21-51__explore_navigation_atomic_decomposition/_branch.md`

Draft per Decomposition's 2 pieces: P2 analytical reasoning (atomic inventories + overlap map) → P1 pattern-doc section text + insertion plan. Constraint: pass universal-discipline test; preserve user's "+" framing; use "level of resolution" terminology; ~20-30 lines for the section.

---

## Seed and Direction

- **Seed: signal + dissatisfaction.** Exploration produced finer-grain decomposition; user wants deeper understanding without invalidating the 13-45 verdict.
- **Direction:** preserve coarse-grain verdict; add medium-grain refinement; multi-resolution framing; universal-discipline-clean.

**Important state-of-world discovery:** the target file `devdocs/patterns/typed-enumeration-mapping.md` and the `devdocs/patterns/` directory **DO NOT YET EXIST**. The 13-45 finding proposed creating them as its MUST action; that action has not been applied. This finding's pattern-doc section must therefore specify a creation-dependency on 13-45's MUST.

---

## Phase 2 — Generate (mechanisms applied focused)

### Combination + Domain Transfer (Generators)

**Combination.** Combine the 13-45 coarse-grain framing (TEM as one operation) with the 21-51 medium-grain decomposition (4 shared atomic operations + output-shape constraint). The combination = multi-resolution view where both pictures coexist.

**Domain Transfer.** In mathematics, the same object viewed at different levels — set / group / ring / field — is the same object yet structurally different at each level. The TEM pattern is similar: same pattern at three resolutions.

### Absence Recognition (Generator)

What the pattern doc (once created per 13-45) would lack without the 21-51 addition:
- Atomic decomposition of the shared region.
- Explicit output-shape distinguishing criterion.
- Role-equivalent-but-content-different framing.
- Multi-resolution framing (coarse/medium/fine).

These four absences are what the 21-51 medium-grain section fills.

### Extrapolation (Generator)

Future practitioners diagnosing other potential discipline overlaps will encounter this pattern doc as a template. Coarse + medium grain together is more useful than coarse alone. The precedent affects future diagnostic work.

### Lens Shifting (Framer)

Under "compact reference" lens: brief and dense; ~20-30 lines. Under "discovery tutorial" lens: more elaboration helps. Selected: compact reference (Sensemaking's lean-precedent reasoning applies).

### Constraint Manipulation (Framer)

- ADD: ~20-30 line section; universal-discipline-clean; preserve "+" framing; use "level of resolution."
- REMOVE: no need to repeat 13-45's coarse content (the section is ADDITIVE).

### Inversion (Framer)

Component-level: don't add the section. Result: pattern doc stays coarse-only; medium understanding lost. Not viable.

System-level: REPLACE 13-45's drafted pattern doc with 21-51 medium-grain content. Rejected by Sensemaking (major restructure over-investment; 13-45 coarse-grain is correct at its resolution).

7 mechanisms applied; converge on the compact additive section.

---

## P2 — Analytical Reasoning: Atomic-Operation Inventories + Overlap Map

This section lives in the finding's Reasoning section, NOT in the pattern doc.

### Explore atomic operations (11)

| # | Atomic operation | Source in `homegrown/explore/references/explore.md` |
|---|---|---|
| EX-1 | Mode selection (artifact / possibility) | "Two Exploration Modes" |
| EX-2 | Entry-point selection (frontier-first / signal-first) | "Process Model → Entry Point" |
| EX-3 | Coarse scan (with surround-layer check) | "Resolution Progression" step 1 |
| EX-4 | Signal detection (5 signal types: density / novelty / relevance / tension / absence) | "Key Components → Signal Detection" |
| EX-5 | Resolution management (zoom in / out) | "Key Components → Resolution Management" |
| EX-6 | Probe (depth pass on a signal) | "Key Components → Probe" |
| EX-7 | Frontier tracking (3 states: advancing / stable / closed) | "Key Components → Frontier Tracking" |
| EX-8 | Confidence mapping (5 levels: confirmed / scanned / inferred / unknown / confirmed-absent) | "Key Components → Confidence Mapping" |
| EX-9 | Convergence assessment (3 criteria) | "Coverage Strategy → Convergence Criteria" |
| EX-10 | Jump scan (counter-direction safety check) | Failure Mode #3 prevention |
| EX-11 | Output assembly (territory map) | "Execute the Exploration Process" Step 4 |

### Navigation atomic operations (15)

| # | Atomic operation | Source in `homegrown/navigation/references/navigation.md` |
|---|---|---|
| NV-1 | Input reading (SIC cycle output or current project state) | "Process Model Step 1" + SKILL.md |
| NV-2 | Freshness Preflight (context-staleness check) | SKILL.md Step 0 |
| NV-3 | Reachability / gate detection | "Process Model Step 1" sub-step |
| NV-4 | Type assignment (16-type taxonomy) | "Process Model Step 2" + taxonomy section |
| NV-5 | Route-state assessment (7 values) | "Route identity + route state" |
| NV-6 | Priority assignment (HIGH / MEDIUM / LOW) | "Process Model Step 4" |
| NV-7 | Purpose / Movement / Unlocks identification | "Route meaning" |
| NV-8 | WHY (evidence) extraction | "Reasoning" |
| NV-9 | Guidance mode selection (4 modes) | "Adaptive guidance" + Step 3 |
| NV-10 | Guidance pointer generation | Step 3 sub-step |
| NV-11 | Continuation note writing | "Continuation note" |
| NV-12 | Excluded section maintenance | "Process Model Step 5" |
| NV-13 | REVISIT triggering across cycles | "Context-directed types" |
| NV-14 | Map formatting (3 categories: content / process / context) | "Process Model Step 6" |
| NV-15 | Output assembly (navigation map) | Step 6 final |

### Overlap map

**4 SHARED atomic operations (role-equivalent; content-different):**

| Shared op | Explore manifestation | Navigation manifestation |
|---|---|---|
| **S-1 Input reading** | EX-3 (coarse scan reads territory) | NV-1 (reads cycle output or project state) |
| **S-2 Typed-item production** | EX-3 + EX-4 + EX-6 (inventory + signals + probes with type-tags) | NV-4 (route-cards typed by 16-type taxonomy) |
| **S-3 Metadata attachment** | EX-7 + EX-8 (frontier-state + 5-level confidence per region) | NV-5 + NV-6 + NV-7 + NV-8 (state + priority + purpose + WHY per route) |
| **S-4 Structured-map assembly** | EX-11 (territory map) | NV-14 + NV-15 (formatted navigation map) |

**7 EXPLORE-ONLY atomic operations** (and why):
- EX-1 mode selection — Navigation single-mode.
- EX-2 entry-point selection — Navigation has single entry.
- EX-5 resolution management — Navigation fixed-resolution.
- EX-6 probe vs scan distinction — Navigation flat-enumeration.
- EX-9 convergence assessment — Navigation single-pass, no convergence.
- EX-10 jump scan — Navigation safety is different (excluded section + REVISIT).
- EX-7+EX-8 5-level confidence + frontier tracking — Navigation uses priority + status instead.

**11 NAVIGATION-ONLY atomic operations** (and why):
- NV-2 Freshness Preflight — Explore doesn't have context-freshness check.
- NV-3 Gate detection — Explore territory has no BLOCKED routes.
- NV-4 16-type taxonomy — Explore types are artifact/candidate.
- NV-5 Route-state (7 values) — Explore states are frontier (3) + confidence (5).
- NV-9 Guidance mode (4 options) — Explore output doesn't include guidance.
- NV-10 Guidance pointers — same.
- NV-11 Continuation note — Explore single-pass, no cross-cycle memory.
- NV-12 Excluded section (type-inapplicability) — Explore's confirmed-absent is region-based.
- NV-13 REVISIT triggering — Explore single-pass.
- NV-14 3-category map formatting (content/process/context) — Explore organizes by region/resolution.
- NV-14 optional route-index sub-step — Explore has no route index.

**Total atomic operations across both:** 22 (4 SHARED + 7 Explore-only + 11 Navigation-only). Shared region = 4/22 = ~18% at medium grain.

---

## P1 — Pattern-Doc Section Text + Insertion Plan

### Pre-application state check

The target file `devdocs/patterns/typed-enumeration-mapping.md` and the `devdocs/patterns/` directory DO NOT yet exist. The 13-45 finding's MUST item proposed creating both. This 21-51 finding's deliverable is an ADDITION to that pattern doc.

**Two operational paths:**

**Path A (recommended): coordinated single creation.** Apply both 13-45's MUST (create the directory + pattern doc with the 13-45-drafted content) AND 21-51's addition (append the medium-grain section) in one coordinated act. Net result: one new file at `devdocs/patterns/typed-enumeration-mapping.md` containing the 13-45 coarse-grain content + the 21-51 medium-grain section.

**Path B: phased.** Apply 13-45's MUST first (creates the directory + initial pattern doc); then apply this 21-51 finding as a follow-up edit (appending the medium-grain section).

Both paths produce the same end state. Path A is cheaper (one operation); Path B is more cautious (each finding ships independently).

### Drafted section text (~25 lines)

The following is the exact text to ADD to `devdocs/patterns/typed-enumeration-mapping.md` AFTER the existing content (after the "Why this document exists" section that 13-45's MUST creates):

```markdown

## Finer-resolution view: atomic decomposition

The "one underlying operation" view above describes TEM at COARSE grain. At MEDIUM grain, the shared region decomposes into 4 atomic operations sharing an output-shape constraint:

| Shared atomic operation | Role |
|---|---|
| Input reading | Consumes content (territory; cycle output; project state). |
| Typed-item production | Produces items tagged by a discipline-specific type schema. |
| Metadata attachment | Tags each item with discipline-specific metadata (confidence; priority; status; route-state; etc.). |
| Structured-map assembly | Composes the items + metadata into a discipline-specific map format. |

**Output-shape constraint.** TEM-instances produce MAP-SHAPED output — many items, possibly overlapping in scope, with metadata. This distinguishes TEM from sister disciplines: Sensemaking produces commitment-shape; Decomposition produces partition-shape; Critique produces verdict-shape. The 4 shared atomic operations above are how TEM-instances structurally produce map-shape.

**Role-equivalent but content-different.** Each shared atomic operation plays the same structural role in each TEM-instance but with different content. Explore's "typed-item production" uses 5-level confidence + signal-detection; Navigation's uses a 16-type taxonomy. Same role; different implementation content.

**Three resolutions.** At COARSE grain, TEM is one underlying operation (per the description above). At MEDIUM grain, TEM is a cluster of 4 atomic operations sharing an output-shape constraint (this section). At FINE grain, the shared atomic operations themselves decompose differently per discipline — the cluster becomes a level-of-resolution label. All three views are correct at their resolutions.

The user's original framing "concept mapping + content consumption" — note the "+" conjunction — captures the medium-grain composition: content consumption (S-1 above) AND concept mapping (S-2 + S-3 + S-4).

See `devdocs/inquiries/2026-05-11_21-51__explore_navigation_atomic_decomposition/finding.md` for the source of this finer-resolution view.
```

### Line-count check

Counted: 25 source lines (heading through final sentence including blank lines). Within ≤30 target.

### Insertion-point specification

**File:** `devdocs/patterns/typed-enumeration-mapping.md` (to be created per 13-45's MUST, then appended to per this finding).

**Insertion point:** APPEND to the end of the pattern doc (after the existing "Why this document exists" section that 13-45's MUST creates).

**Path A coordinated apply:** when creating the pattern doc per 13-45's MUST, include the 21-51 medium-grain section at the bottom.

**Path B phased apply:** create the pattern doc per 13-45's MUST first; then append the section per this finding.

### Universal-discipline test (the section text only)

| Element | Universal? |
|---|---|
| "TEM," "Explore," "Navigation" | Internal pattern-doc references; universal within the doc. |
| "Sensemaking," "Decomposition," "Critique" | Discipline names; universal in the project. |
| "5-level confidence," "16-type taxonomy," "signal-detection" | Reference to existing discipline content; universal. |
| "concept mapping + content consumption" | User's framing; preserved verbatim. |
| "level of resolution" | Per Sensemaking's terminology refinement. |
| Single inquiry reference (21-51) | Pattern-doc trace; appropriate for this pattern's source. |

No project-governance bloat (no Step 5; no instance thresholds; no failure-mode-promotion procedures; no /MVL+ name references; no "across the corpus"). Universal-discipline test PASS.

### Reversibility

The section is appended; removing it (the entire `## Finer-resolution view: atomic decomposition` block) restores the pattern doc to its pre-21-51 state. Reversibility HIGH.

---

## Phase 3 — Test (5-test cycle)

| Test | Result |
|---|---|
| **Novelty** | The atomic-decomposition framing + output-shape constraint + role-equivalent-but-content-different note are not in the 13-45 finding's pattern-doc draft. NOVEL. |
| **Scrutiny survival** | Sensemaking adjudicated each design choice. Critique will verify universal-discipline-clean + 13-45-preservation + 3-resolution accuracy. SURVIVED preliminarily. |
| **Fertility** | Provides a template for future discipline-overlap diagnoses (medium-grain decomposition as a tool). FERTILE. |
| **Actionability** | Drafted section text + 2 application paths (A coordinated; B phased) + insertion point specified. ACTIONABLE. |
| **Mechanism independence** | 7 mechanisms converged: Combination/Domain Transfer reinforced multi-resolution view; Absence Recognition identified 4 absences in 13-45 draft; Extrapolation justified template value; Lens Shifting + Constraint Manipulation set compactness; Inversion confirmed addition over replacement. HIGH. |

**Test cycle: SURVIVED.**

**Disposition: ACTIONABLE** (multi-mechanism convergent; Sensemaking-confirmed; reversible; preserves 13-45 verdict at coarse grain).

---

## Assembly check + Axis coverage check

### Assembly emergence

P1 (section text + insertion plan) and P2 (analytical reasoning) compose into a complete deliverable. The emergent property: a **multi-resolution pattern-doc template** that future discipline-overlap diagnoses can follow. The precedent of explicitly naming coarse/medium/fine resolutions in a pattern doc is a small but useful structural contribution.

### Axis coverage

| Axis | Variant in this deliverable | Coverage |
|---|---|---|
| Resolution (coarse / medium / fine) | All three named | ✓ |
| Pattern-doc existence (exists / not-yet) | Both paths (A coordinated, B phased) addressed | ✓ |
| Update shape (add / replace) | Add (Sensemaking adjudicated) | ✓ |
| User framing preservation | "+" preserved verbatim | ✓ |
| Universal-discipline test | Section text passes; verified | ✓ |
| Backward-compatibility with 13-45 | Verdict preserved at coarse grain; not invalidated | ✓ |

**Axis coverage: 6/6.**

---

## Mechanism Coverage Telemetry

- Generators applied: 4/4 (Combination + Domain Transfer + Absence Recognition + Extrapolation)
- Framers applied: 3/3 (Lens Shifting + Constraint Manipulation + Inversion at component + system levels)
- Convergence: YES — 7 mechanisms converge on the additive compact section + 2-path application plan.
- Survivors tested: 1/1 SURVIVED.
- Failure modes observed: None.
  - **Premature Evaluation** — generation separated from testing.
  - **Single-Mechanism Trap** — 7 mechanisms.
  - **Early Frame Lock** — pre-application state check caught the doc-doesn't-exist reality and adapted (Paths A/B).
  - **Innovation Without Grounding** — explicit 5-test cycle ran.
  - **Mechanism Exhaustion** — survivors produced.
  - **Survival Bias** — contrarian inversion (system-level replace) explicitly tested and rejected.

**Overall: PROCEED.** Hand off to Critique.
