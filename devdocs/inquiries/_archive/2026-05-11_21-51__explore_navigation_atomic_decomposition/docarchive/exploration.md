# Exploration: Explore-Navigation Atomic Decomposition (Second Pass)

## User Input

Source: `/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-11_21-51__explore_navigation_atomic_decomposition/_branch.md`

Question (restated): what is the atomic-sub-operation decomposition of Explore and Navigation, and what is the precise SHAPE of the overlap — is "TEM" one atomic operation, a cluster name for multiple shared sub-operations, or a higher-level abstraction?

---

## 1. Mode and Entry Point

**Mode: mixed.** Artifact (read `homegrown/explore/references/explore.md` and `homegrown/navigation/references/navigation.md` and identify atomic sub-operations from artifact text). Possibility (generate candidate decomposition schemes; test the TEM characterization at finer granularity).

**Entry point: signal-first.** The 13-45 finding's TEM verdict ("concept mapping with content consumption") is the seed signal. Probe it via atomic decomposition to see if TEM is one atomic operation, a cluster name, or a level-of-description label.

**Surround layer (scanned before going deep):**
- `homegrown/explore/references/explore.md` (333 lines) — Explore discipline spec.
- `homegrown/navigation/references/navigation.md` (483 lines) — Navigation discipline spec.
- `devdocs/inquiries/2026-05-11_13-45__.../finding.md` — the 13-45 verdict + reasoning.
- `devdocs/patterns/typed-enumeration-mapping.md` — the TEM pattern document.
- `devdocs/nav_north_star.md` — the R3 vision artifact.
- The user's framing: "what is common; what kind of decomposition gives us overlap concept; be careful."

Surround layer fully scanned. No Premature Depth.

---

## 2. Cycle 1 — Probe: Atomic sub-operations of Explore

From `homegrown/explore/references/explore.md`:

### Atomic sub-operations identified

| # | Sub-operation | Source in spec | Output |
|---|---|---|---|
| EX-1 | **Mode selection** (artifact vs possibility) | "Two Exploration Modes" section | Mode tag |
| EX-2 | **Entry-point selection** (frontier-first vs signal-first) | Process Model → Entry Point | Entry direction |
| EX-3 | **Coarse scan** (with surround-layer check) | Resolution Progression step 1 | Surface inventory |
| EX-4 | **Signal detection** (5 signal types: density, novelty, relevance, tension, absence) | Key Components → Signal Detection | Signal log |
| EX-5 | **Resolution management** (zoom in / zoom out decision) | Key Components → Resolution Management | Resolution decision |
| EX-6 | **Probe** (depth pass on a signal) | Key Components → Probe | Detailed structural knowledge |
| EX-7 | **Frontier tracking** (3 states: advancing / stable / closed) | Key Components → Frontier Tracking | Frontier state |
| EX-8 | **Confidence mapping** (5 levels: confirmed / scanned / inferred / unknown / confirmed-absent) | Key Components → Confidence Mapping | Confidence-tagged regions |
| EX-9 | **Convergence assessment** (3 criteria: frontier stability + declining discovery rate + bounded gaps) | Coverage Strategy → Convergence Criteria | Converged / not-converged |
| EX-10 | **Jump scan** (counter-direction safety check) | Failure Mode #3 prevention | Counter-direction probe |
| EX-11 | **Output assembly** (territory map with regions + confidence levels + signal log + frontier state + gaps) | "Execute the Exploration Process" Step 4 | Structural map |

**11 atomic sub-operations** identified in Explore's spec.

---

## 3. Cycle 2 — Probe: Atomic sub-operations of Navigation

From `homegrown/navigation/references/navigation.md`:

### Atomic sub-operations identified

| # | Sub-operation | Source in spec | Output |
|---|---|---|---|
| NV-1 | **Input reading** (SIC cycle output OR current project state) | Process Model Step 1 + SKILL.md flexibility | Read state |
| NV-2 | **Freshness Preflight** (context-staleness check before treating input as authoritative) | SKILL.md Step 0 | Freshness verdict |
| NV-3 | **Reachability / gate detection** (blocked region; condition; current state) | Process Model Step 1 sub-step | Gate log |
| NV-4 | **Type assignment** (16-type taxonomy across 3 categories) | Process Model Step 2 + taxonomy section | Typed route-cards |
| NV-5 | **Route-state assessment** (open / blocked / deferred / active / done / stale / superseded) | Route identity + route state section | Route state |
| NV-6 | **Priority assignment** (HIGH / MEDIUM / LOW) | Process Model Step 4 | Priority tag |
| NV-7 | **Purpose / Movement / Unlocks identification** (3 fields per route) | Route meaning section | Route-meaning fields |
| NV-8 | **WHY (evidence) extraction** (route reasoning) | Reasoning section | Route WHY |
| NV-9 | **Guidance mode selection** (none / compact / full / expand-on-selection) | Adaptive guidance section + Process Step 3 | Guidance mode |
| NV-10 | **Guidance pointer generation** (1-2 / 3-5 pointers with their own WHYs) | Process Step 3 sub-step | Guidance lines |
| NV-11 | **Continuation note writing** (durable cross-cycle memory) | Continuation note section | Continuation note |
| NV-12 | **Excluded section maintenance** (structurally inapplicable types) | Process Step 5 | Excluded list |
| NV-13 | **REVISIT triggering** (RESURRECT / INVALIDATE / REVERT across cycles) | Context-directed types section | Revisit signals |
| NV-14 | **Map formatting** (group by 3 categories: content/process/context; route index for large maps) | Process Step 6 | Formatted map |
| NV-15 | **Output assembly** (full navigation map with route-cards + excluded + optional index) | Process Step 6 final | Navigation map |

**15 atomic sub-operations** identified in Navigation's spec.

---

## 4. Cycle 3 — Probe: Overlap mapping

Compare Explore's 11 atomic sub-operations against Navigation's 15. Identify SHARED, EXPLORE-ONLY, NAVIGATION-ONLY regions.

### SHARED atomic sub-operations

| # | Operation | Explore manifestation | Navigation manifestation |
|---|---|---|---|
| S-1 | **Input reading** | EX-3 (coarse scan reads territory) | NV-1 (reads SIC cycle output or project state) |
| S-2 | **Typed-item production** | EX-3 + EX-4 + EX-6 produce inventory items + signals + probes with TYPES (artifact-type or candidate-type) | NV-4 produces route-cards with TYPES (16-type taxonomy) |
| S-3 | **Metadata attachment** | EX-7 + EX-8 attach frontier-position + confidence levels to each item | NV-5 + NV-6 + NV-7 + NV-8 attach state + priority + purpose + WHY to each route |
| S-4 | **Structured map assembly** | EX-11 assembles territory map | NV-14 + NV-15 assemble navigation map |

**4 atomic sub-operations are SHARED at the structural level.** Both disciplines DO these four; their implementations differ (different type schemas; different metadata vocabularies; different map formats).

### EXPLORE-ONLY atomic sub-operations

| # | Operation | Why Explore-only |
|---|---|---|
| EO-1 | **Mode selection (artifact vs possibility)** (EX-1) | Navigation operates in a single mode — enumerate next directions. No mode bifurcation. |
| EO-2 | **Resolution management (zoom in/out)** (EX-5) | Navigation operates at fixed resolution — it produces a single-resolution map per invocation. |
| EO-3 | **Probe vs scan distinction** (EX-6) | Navigation doesn't alternate depth-vs-breadth; it enumerates flat. |
| EO-4 | **Frontier-state tracking** (EX-7, with 3 states advancing/stable/closed) | Navigation doesn't have an evolving frontier — its scope is bounded by the SIC cycle output. |
| EO-5 | **Convergence assessment with 3 criteria** (EX-9) | Navigation doesn't have convergence — it produces ONE map per invocation; no iteration. |
| EO-6 | **Jump scan (counter-direction safety)** (EX-10) | Navigation's safety mechanism is different (excluded section + REVISIT triggers, not counter-direction probes). |
| EO-7 | **5-level confidence scheme** (EX-8) | Navigation uses priority HIGH/MEDIUM/LOW + status (7 values), not confidence levels. |

**7 atomic sub-operations are EXPLORE-ONLY.**

### NAVIGATION-ONLY atomic sub-operations

| # | Operation | Why Navigation-only |
|---|---|---|
| NO-1 | **Freshness Preflight** (NV-2) | Explore doesn't have a context-staleness check before treating input as authoritative — its input is "territory," which doesn't have a freshness state. |
| NO-2 | **Reachability / gate detection** (NV-3) | Explore doesn't have gates — territory is reachable or not based on access; Navigation has explicit BLOCKED / UNBLOCK semantics. |
| NO-3 | **16-type taxonomy assignment** (NV-4) | Explore's type scheme is artifact-type or candidate-type; not 16 types. |
| NO-4 | **Route-state assessment (7 states)** (NV-5) | Explore has frontier states (3) and confidence levels (5), but not per-item route-state. |
| NO-5 | **Adaptive guidance allocation (4 modes)** (NV-9) | Explore doesn't generate per-item adaptive guidance. |
| NO-6 | **Guidance pointer generation** (NV-10) | Explore's output is a map; it doesn't include action-pointers. |
| NO-7 | **Continuation note** (NV-11) | Explore doesn't carry cross-cycle memory in its output. |
| NO-8 | **Excluded section maintenance** (NV-12) | Explore's "confirmed absent" tagging is analogous but not the same — Navigation's excluded section is type-inapplicability driven; Explore's confirmed-absent is region-emptiness driven. |
| NO-9 | **REVISIT triggering across cycles** (NV-13) | Explore is single-pass; no across-cycle REVISIT signals. |
| NO-10 | **Map formatting by 3 categories** (NV-14) | Explore organizes by region/resolution, not by content/process/context. |
| NO-11 | **Optional route index for large maps** (NV-14 sub-step) | Explore doesn't have a route index. |

**11 atomic sub-operations are NAVIGATION-ONLY.**

### Overlap summary

- **Shared:** 4 atomic operations.
- **Explore-only:** 7 atomic operations.
- **Navigation-only:** 11 atomic operations.
- **Total atomic operations across both:** 22 (4 shared + 7 + 11).

**The shared region is 4/22 = ~18% of total atomic operations.**

---

## 5. Cycle 4 — Probe: Refining the TEM characterization

The 13-45 finding characterized TEM as "one underlying operation: concept mapping with content consumption." At the atomic level (this inquiry's resolution), the picture is:

### TEM is NOT one atomic operation

It cannot be — at the atomic level, the shared region decomposes into 4 distinct atomic sub-operations (S-1 through S-4). No single atomic operation is "TEM."

### TEM as a CLUSTER NAME

TEM is a label for the cluster of 4 shared atomic sub-operations. The cluster is real (verified by atomic decomposition). The label is useful as shorthand.

### TEM as a LEVEL-OF-DESCRIPTION abstraction

At the level of "what operation is this discipline doing?", both Explore and Navigation answer "concept mapping + content consumption" — they both produce typed-items-with-metadata maps from input content. At finer resolution, this single answer decomposes into 4 atomic shared operations + 18 discipline-specific atomic operations.

**The most accurate characterization: TEM is a HIGHER-LEVEL ABSTRACTION that NAMES the LEVEL OF DESCRIPTION at which Explore and Navigation look structurally similar.** At one level of resolution, they share an operation. At the atomic level, they share 4 operations and differ in 18.

The 13-45 verdict was correct at one resolution, incomplete at another. Both pictures are true at their respective resolutions.

### What the user's framing actually captures

The user's framing "concept mapping + content consumption" is itself a CONJUNCTION:
- **Content consumption** → maps to atomic operation S-1 (input reading).
- **Concept mapping** → maps to atomic operations S-2 + S-3 + S-4 (produce typed items + attach metadata + assemble structured map).

So the user's two-part framing already CONTAINS the medium-grain decomposition. "TEM" was a compact label; the user's prose framing was more refined.

---

## 6. Cycle 5 — Jump scan: challenge the framing

### Counter-direction 1: Is the shared cluster real, or just structural-similarity coincidence?

**Counter-argument.** "Both produce structured output" is true of many disciplines (Decomposition produces piece-trees; Critique produces verdicts; Innovation produces variations). What looks like TEM-overlap might just be "structured output" — which is a property of most disciplines, not a distinguishing feature.

**Why counter partially holds.** The DISTINGUISHING criterion in the 13-45 finding is that TEM produces MAP-SHAPED output (enumerate; don't commit; don't partition; don't evaluate). The shared 4 atomic operations DO produce map-shaped output specifically — not commitment-shape (Sensemaking), not partition-shape (Decomposition), not verdict-shape (Critique).

So the shared cluster IS distinguishable from sister-discipline operations on the basis of OUTPUT SHAPE. The TEM-overlap is real, not coincidence.

But the counter has a refining value: the shared cluster is at the OUTPUT-SHAPE level (both produce maps), not at the INTERNAL-OPERATION level (the 4 atomic operations are similar in shape but differ in implementation).

**Verdict:** the shared cluster is real but characterizable as a SHARED OUTPUT SHAPE plus 4 atomic operations that produce that shape. TEM names the output-shape commonality; the 4 atomic operations are the structural means.

### Counter-direction 2: Is "atomic" itself well-defined?

**Counter.** "Atomic operation" is relative to a level of granularity. The 4 shared operations could themselves be decomposed (S-2 "typed-item production" includes type-naming + item-identification + per-item-tagging; S-3 "metadata attachment" includes choosing fields + populating values + verifying consistency). At finer grain, the overlap might shrink or grow.

**Why counter partially holds.** This is genuine — the granularity of "atomic" is a choice. The decomposition above is at MEDIUM grain (visible in the spec's named operations, not finer-than-that).

**Verdict.** Treat the decomposition as MEDIUM-GRAIN. At this grain, overlap is 4/22 = ~18%. At finer grain, the shared operations might decompose further — but each finer-grain operation tends to be implemented differently per discipline (Explore's "type-naming" is artifact-vs-possibility; Navigation's is 16-type-taxonomy), so finer grain may produce MORE divergence than overlap. The medium-grain picture is the most useful one.

### Counter-direction 3: Could the overlap be characterized differently — not as 4 shared atomic operations but as something else?

**Counter.** Maybe the overlap is a SHARED CONSTRAINT (both must produce typed-items-with-metadata) rather than 4 shared operations. Both disciplines OPERATE under the same constraint; they DON'T necessarily perform the same atomic operations.

**Why counter has merit.** This is a STRUCTURAL REFRAMING. Under this reading, what's shared is the OUTPUT-SHAPE CONSTRAINT (the meta-rule "produce a typed-item-with-metadata map"). The 4 atomic operations are then INSTANTIATIONS of how each discipline satisfies the constraint. From this lens:
- TEM is a CONSTRAINT on output shape.
- Each discipline satisfies the constraint via its own atomic operations.
- The 4 "shared" atomic operations are STRUCTURAL EQUIVALENTS (they play the same role) but not LITERAL SHARES (Explore's "produce typed items" via signal-detection is structurally different from Navigation's "produce typed items" via type-assignment from taxonomy).

**Verdict.** This counter REFINES the picture. The shared region is more precisely: a SHARED OUTPUT-SHAPE CONSTRAINT that each discipline satisfies via STRUCTURALLY-EQUIVALENT atomic operations.

This is a stronger characterization than "4 shared atomic operations" — it acknowledges that the operations are equivalent-in-role but different-in-content.

---

## 7. Self-applicability check (applying Meta-Inspection)

Apply the meta-question "What am I treating as FIXED that might not be?" to this inquiry's own structure:

- **Treating "atomic" as a fixed grain:** addressed in Counter-direction 2. Acknowledged: medium-grain choice.
- **Treating SHARED vs NOT-SHARED as binary:** addressed in Counter-direction 3. Refined: the operations are structurally-equivalent-in-role but different-in-content. Not literal shares.
- **Treating the 13-45 TEM verdict as starting evidence:** validated by atomic decomposition; the TEM-overlap is real at medium grain.

Self-applicability check PASS.

---

## 8. Frontier State

**Frontier: STABLE.** Five cycles produced:
- 11 Explore atomic operations identified
- 15 Navigation atomic operations identified
- 4 SHARED + 7 Explore-only + 11 Navigation-only overlap map
- 3 candidate TEM characterizations tested (atomic / cluster / abstraction)
- 3 counter-directions tested in jump scan

Frontier hasn't pushed outward in last cycle.

---

## 9. Confidence Map

| Region | Confidence | Note |
|---|---|---|
| Explore atomic sub-operations (11) | Confirmed | Read in spec |
| Navigation atomic sub-operations (15) | Confirmed | Read in spec |
| Overlap shape: 4 shared + 7 EX-only + 11 NV-only | Scanned | Derived from inventories |
| TEM as not-one-atomic-operation | Confirmed | Decomposition shows 4 atomic operations comprise the shared region |
| TEM as cluster name | Scanned | Cluster of 4 atomic operations |
| TEM as level-of-description abstraction | Scanned | Most accurate characterization |
| Shared operations are structurally-equivalent-in-role but different-in-content | Scanned | Refined by Counter-direction 3 |
| Output-shape constraint as the unifier | Scanned | Map-shape distinguishes from sister disciplines |
| Granularity choice (medium grain) | Confirmed | Explicit decision |
| Atomic operations at finer grain | Inferred | Likely more divergence than overlap |
| Whether TEM characterization should be UPDATED in patterns/typed-enumeration-mapping.md | Unknown — deferred to Sensemaking | The finer-grain picture might refine the pattern doc |

---

## 10. Gaps and Recommendations

### Known gaps

- The decomposition is medium-grain; finer-grain decomposition would likely show more divergence than overlap. Out-of-scope for this inquiry's resolution.
- The 13-45 finding's third instance (R3 north-star vision) wasn't explicitly decomposed atomic-operation-by-atomic-operation. R3 is mostly aspirational; the 13-45 finding treated it as a variant of Navigation's pattern. This inquiry inherits that treatment.

### Recommendations for next disciplines

- **Sensemaking** should adjudicate the TEM characterization at finer resolution. Specifically: is TEM best understood as (a) a cluster name for 4 shared atomic operations; (b) a shared output-shape constraint that each discipline satisfies via structurally-equivalent operations; (c) a level-of-description abstraction? These are not mutually exclusive — pick the most useful one for the project's purposes.
- **Decomposition** should partition the finding-deliverable into pieces (atomic inventories; overlap map; TEM characterization; potential update to the pattern doc).
- **Innovation** should draft the refined TEM characterization (possibly updating `devdocs/patterns/typed-enumeration-mapping.md` if Sensemaking confirms refinement is needed).
- **Critique** should adversarially test: does the medium-grain decomposition hold up? Does the "structurally-equivalent-but-content-different" framing add value over the 13-45 verdict, or is it splitting hairs?

---

## 11. Convergence Assessment

- Frontier stability: STABLE.
- Declining discovery rate: YES.
- Bounded gaps: YES.

All three convergence criteria met. Jump scan completed (3 counter-directions tested).

**Premature Evaluation in Possibility Mode guardrail:** the inquiry did not pre-reject any TEM characterization. All 3 characterizations were assessed on structural grounds. The counter-directions in jump scan were RESOLVED, not REJECTED — they refined the picture.

**Convergence: PASS.** Hand off to Sensemaking.

---

## 12. Telemetry

- Regions scanned: surround layer (6 artifacts) + 5 cycles
- Signals: 11 Explore atomic ops + 15 Navigation atomic ops + 4 shared + 18 discipline-specific + 3 TEM characterizations + 3 counter-directions
- Probes conducted: 5 cycles, each a focused probe (Explore atomic; Navigation atomic; overlap; TEM characterization; jump scan)
- Frontier state: STABLE
- Failure modes observed: None — Premature Depth avoided (full surround scan); Surface-Only Scanning avoided (atomic-operation identification grounded in spec text); False Confidence prevented (jump scan tested 3 counter-directions); Premature Termination prevented (3 convergence criteria checked); Re-Exploration prevented; Completeness Bias in Possibility Mode avoided.

### Key emergent observation

The user's prose framing — "concept mapping + content consumption" — was MORE STRUCTURALLY ACCURATE than the loop-coined label "TEM." The "+" in the user's framing is load-bearing: it acknowledges the shared region is a COMPOSITE (content consumption AND concept mapping), not a single atomic operation. The TEM label compressed this away.
