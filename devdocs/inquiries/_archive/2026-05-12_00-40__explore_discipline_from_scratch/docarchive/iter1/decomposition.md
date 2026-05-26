# Decomposition — partitioning the `/explore` skeleton into pieces

## User Input
`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-12_00-40__explore_discipline_from_scratch/_branch.md`

Prior discipline outputs consumed: `exploration.md` + `sensemaking.md` in the same inquiry folder. SV6 stabilized definition is the *whole* being decomposed.

---

## The whole being decomposed

> `/explore` is the upstream cognitive operation that produces a confidence-tagged map of existence claims about items in a stated territory, optionally annotated with low-commitment relevance and adjacency, including confirmed-absent regions. It supports two modes (artifact, possibility) and a preliminary boundary-discovery sub-phase. It is idempotent within a single invocation. It explicitly excludes meaning extraction, mechanism modeling, partitioning, novelty generation, and route selection.

The skeleton must contain everything `anatomy_of_disciplines.md` requires for a complete discipline: **spec anatomy** (Definition, Components, Process Model, Failure Modes, Coverage Strategy) + **output anatomy** (Transform, Progression, Telemetry, Frontier).

---

## Step 1 — Perceive Coupling Topology

### Elements in the whole

From SV6 + the two anatomies:

| # | Element | Source |
|---|---|---|
| E1 | One-sentence definition (cognitive operation formalized) | Definition/Philosophy |
| E2 | NOT-list (5 entries, neighbor-aligned) | Definition/Philosophy |
| E3 | Upstream-precondition claim (logical, not temporal) | Definition/Philosophy |
| E4 | F-weak commitment (relevance + adjacency as low-commitment annotation) | Definition/Philosophy |
| E5 | Anti-drift rules (preventing F-weak drift to F-strong) | Failure Modes |
| E6 | Core components: scan, signal detection, probe, resolution management, frontier tracking, confidence mapping | Structural Components |
| E7 | Annotation layers: existence, confidence, relevance, adjacency, confirmed-absent | Structural Components |
| E8 | Two modes: artifact, possibility | Process Model |
| E9 | Boundary-discovery sub-phase (conditional, preliminary) | Process Model |
| E10 | Cycle (scan → detect → resolution → probe/scan → frontier → confidence → assess) | Process Model |
| E11 | Entry-point choice: frontier-first / signal-first | Process Model |
| E12 | Idempotency within invocation; cross-invocation delegated to runner | Process Model |
| E13 | Six failure modes (premature depth, surface-only scanning, false confidence, premature termination, re-exploration, completeness bias) | Failure Modes |
| E14 | Coverage / convergence criteria (frontier stability + declining rate + bounded gaps) | Coverage Strategy |
| E15 | Calibration-state-dependent items (F-weak anti-drift, territory-boundary input contract) | Coverage Strategy |
| E16 | Transform: the confidence-tagged map structure | Output Anatomy |
| E17 | Progression: cycle-level snapshots | Output Anatomy |
| E18 | Telemetry: frontier state, discovery rate, convergence status, jump-scan, failure-mode checks | Output Anatomy |
| E19 | Frontier output: deferred signals, unbounded gaps, recommendations to downstream | Output Anatomy |

### Pairwise coupling

| Pair | Coupling | Reason |
|---|---|---|
| E1 ↔ E2 | **Strong** | NOT-list is the boundary statement of the definition |
| E1 ↔ E3 | **Strong** | Upstream-precondition is part of what the definition is |
| E1 ↔ E4 | **Strong** | F-weak is the discipline's stance on the user hypothesis |
| E4 ↔ E5 | **Strong** | Anti-drift rules exist to keep F-weak coherent |
| E6 ↔ E7 | **Strong** | Annotation layers ride on the components' output |
| E6 ↔ E10 | **Strong** | Cycle uses the components |
| E8 ↔ E9 | **Strong** | Sub-phase is a conditional preliminary to modes |
| E8 ↔ E11 | **Moderate** | Entry-point applies within a chosen mode |
| E10 ↔ E12 | **Strong** | Cycle is what's idempotent |
| E13 ↔ E6 | **Strong** | Each failure mode is a failure of a component |
| E13 ↔ E14 | **Strong** | Failures and coverage share quality-boundary concerns |
| E14 ↔ E10 | **Strong** | Coverage criteria evaluate the cycle's state |
| E15 ↔ E4 | **Strong** | F-weak anti-drift is calibration-dependent |
| E15 ↔ E9 | **Moderate** | Territory-boundary input contract drives boundary-discovery |
| E16 ↔ E6 | **Strong** | Transform's structure is shaped by components |
| E16 ↔ E7 | **Strong** | Transform contains the annotation layers |
| E17 ↔ E10 | **Strong** | Progression = versioned snapshots of cycles |
| E18 ↔ E10 | **Strong** | Telemetry measures cycle state |
| E18 ↔ E14 | **Strong** | Telemetry reports against coverage criteria |
| E19 ↔ E13 | **Moderate** | Frontier includes signals deferred from probes |
| E1 ↔ E6 | **Weak** | Definition constrains but doesn't determine component choice |
| E1 ↔ E16 | **Moderate** | Definition constrains Transform shape |
| E13 ↔ E10 | **Strong** | Failures are evaluated mid-cycle |

### Coupling map: clusters and valleys

**High-coupling clusters (peaks):**

- **Cluster α — Identity / Definition:** E1, E2, E3, E4 (+ E5 as the operational anchor of F-weak)
- **Cluster β — Components & Annotation:** E6, E7
- **Cluster γ — Process Model:** E8, E9, E10, E11, E12
- **Cluster δ — Quality Boundaries:** E5, E13, E14, E15 (failures + coverage + calibration)
- **Cluster ε — Output Anatomy:** E16, E17, E18, E19

**Low-coupling valleys (boundaries):**

- α↔β: weak/moderate (definition constrains components but they are largely independent design decisions)
- α↔γ: weak/moderate (NOT-list constrains process but process is its own structure)
- β↔γ: strong but ASYMMETRIC (process uses components — directional flow only)
- β↔ε: strong but ASYMMETRIC (components determine Transform shape — directional flow only)
- γ↔δ: moderate (coverage gates process; failures recognize within process; both directional)
- γ↔ε: strong but ASYMMETRIC (process produces Progression + Telemetry — directional flow only)
- δ↔ε: moderate (coverage status feeds Telemetry; deferred signals feed Frontier)

**Topology summary:** Five clusters, each internally cohesive. Inter-cluster flows are asymmetric (one-way from upstream-in-design to downstream): α determines β, γ, δ, ε. β feeds γ, ε. γ feeds δ, ε. δ feeds ε. This produces a clean dependency-ordered partition.

---

## Step 2 — Detect Boundaries (Top-Down)

Cutting at the cluster boundaries:

| Boundary | Cuts between | Crossing traffic | Type |
|---|---|---|---|
| B1 | α (Identity) ↔ β (Components) | Definition constrains component choice; F-weak shapes annotation layers | One-way, low traffic |
| B2 | α (Identity) ↔ γ (Process) | NOT-list constrains process; F-weak commitment shapes mode behavior | One-way, low traffic |
| B3 | β (Components) ↔ γ (Process) | Process invokes components | One-way, moderate traffic |
| B4 | γ (Process) ↔ δ (Quality) | Coverage criteria evaluate cycle state; failure modes recognize within process | Bidirectional moderate (process produces signals; coverage gates) |
| B5 | β (Components) ↔ ε (Output) | Components' outputs populate Transform | One-way, moderate traffic |
| B6 | γ (Process) ↔ ε (Output) | Process produces Progression + Telemetry | One-way, moderate traffic |
| B7 | δ (Quality) ↔ ε (Output) | Failure-mode checks + coverage status feed Telemetry; deferred signals feed Frontier | One-way, low-moderate traffic |

All boundaries are at low or asymmetric-moderate coupling. No high-coupling boundary is cut. **Initial partition: 5 pieces (P1–P5).**

---

## Step 3 — Validate Boundaries (Bottom-Up Check)

### Irreducible atoms

- A1 "Existence claim" — atomic concept; can't be split.
- A2 "Confidence level" — atomic; 5 named values.
- A3 "Scan operation" — atomic; one cognitive move.
- A4 "Probe operation" — atomic; one cognitive move.
- A5 "Frontier state" — atomic; 3 named values.
- A6 "Cycle" — atomic process unit.
- A7 "Mode (artifact)" — atomic mode label.
- A8 "Mode (possibility)" — atomic mode label.
- A9 "Sub-phase (boundary-discovery)" — atomic.
- A10 "Failure mode" — atomic record.
- A11 "Convergence criterion" — atomic record (3 of these).

### Atom-to-cluster mapping check

| Atom | Goes to cluster | Top-down agreement |
|---|---|---|
| A1 Existence claim | Spans α (defined) + β (produced) + ε (in Transform) | The concept is referenced across clusters; defining its meaning sits in α; producing it sits in β; outputting it sits in ε. **No boundary splits it** — the concept itself is in α; β/ε just reference it. ✓ |
| A2 Confidence level | β (annotation layer) + ε (in Transform) | β defines; ε references. ✓ |
| A3 Scan | β | ✓ |
| A4 Probe | β | ✓ |
| A5 Frontier state | β + γ + δ + ε | Component (frontier-tracking is β); process consumes (γ); coverage gates on it (δ); telemetry reports it (ε). **Confirmed multi-cluster referent — needs explicit interface tracking.** ✓ |
| A6 Cycle | γ | ✓ |
| A7, A8 Modes | γ | ✓ |
| A9 Sub-phase | γ | ✓ |
| A10 Failure modes (6 of them) | δ | ✓ |
| A11 Convergence criteria | δ | ✓ |

**Boundary-confidence scoring:**

- B1 (α↔β): HIGH — top-down and bottom-up agree; only constraint flows cross.
- B2 (α↔γ): HIGH — NOT-list constraint only.
- B3 (β↔γ): HIGH — components are used by process; no atom is split.
- B4 (γ↔δ): MEDIUM — A5 (frontier state) bridges; interface needs explicit definition.
- B5 (β↔ε): HIGH — Transform structure references β's outputs.
- B6 (γ↔ε): HIGH — Progression + Telemetry are produced from process; no atom split.
- B7 (δ↔ε): HIGH — coverage status + failure-mode checks reported in Telemetry; no atom split.

No boundary disagreements; all boundaries pass bottom-up sanity check.

---

## Step 4 — Express as Question Tree

### P1 — Identity / Definition (Cluster α)

**Question:** *What cognitive operation does `/explore` formalize, what is its boundary against neighbor disciplines, and how does it commit to the user's "relevance + adjacency" hypothesis?*

**Verification criteria:**
- [ ] One-sentence definition of the cognitive operation stated, naming "existence claim" as the unit and "confidence-tagged map" as the format
- [ ] Upstream-precondition claim stated explicitly as *logical*, not temporal
- [ ] NOT-list: 5 entries (no meaning, no mechanism, no partition, no novelty, no route selection), each with a one-line rationale tied to the named neighbor
- [ ] F-weak commitment stated explicitly: relevance + adjacency tagged as low-commitment annotations, not interpretive operations
- [ ] User-facing language ("map", "items") distinguished from structural language ("existence claim", "annotation layer")
- [ ] One-paragraph "what `/explore` is not" boundary statement

### P2 — Structural Components & Annotation Layers (Cluster β)

**Question:** *What named components does `/explore` consist of, and what annotation layers ride on their output?*

**Verification criteria:**
- [ ] Each of the 6 core components named with its purpose: scan, signal detection, probe, resolution management, frontier tracking, confidence mapping
- [ ] Each component's role categorized: width operation (scan), prioritization (signal detection), depth operation (probe), coordination (resolution management), epistemic (frontier tracking + confidence mapping)
- [ ] 5 annotation layers defined: existence (must), confidence (must, 5 values), relevance (optional/low-commitment), adjacency (optional/low-commitment), confirmed-absent (must)
- [ ] Tier of commitment per annotation layer stated explicitly (must / optional + low-commitment)
- [ ] Component-to-component flows named (e.g., scan → signal detection → probe)

### P3 — Process Model: Modes, Sub-phase, Cycle, Idempotency (Cluster γ)

**Question:** *How does `/explore` run — through what modes, sub-phase, cycle, and entry points — and what is its idempotency contract?*

**Verification criteria:**
- [ ] Two modes defined: artifact (find pre-existing items) and possibility (generate candidates that could exist) with their distinct scan/probe semantics
- [ ] Mode-determination mechanism specified: how does `/explore` know which mode applies? (input from inquiry's `_branch.md`: is the territory artifact-bearing or conceptual?)
- [ ] Boundary-discovery sub-phase defined with its trigger condition (territory boundary not stated by inquiry) and trigger-detection mechanism (check `_branch.md` Scope field for explicit territory specification)
- [ ] Cycle structure: 7 steps (scan → detect signals → manage resolution → probe-or-scan → update frontier → update confidence → assess convergence)
- [ ] Entry-point choice specified: frontier-first (default, no prior signal) vs signal-first (probe a hunch first), with the determination mechanism (does the inquiry hand `/explore` a specific question/hunch?)
- [ ] Idempotency stated: within a single invocation, same input produces same output; cross-invocation re-exploration delegated to runner
- [ ] Recursion contract: within a cycle, "zoom in" recurses on a region; cross-invocation finer-resolution is a runner concern

### P4 — Quality Boundaries: Failure Modes + Coverage + Anti-drift + Calibration (Cluster δ)

**Question:** *How does `/explore` know it is done well (coverage) and when it has gone wrong (failure modes), and what calibration-state-dependent rules apply?*

**Verification criteria:**
- [ ] Failure modes named with recognition signals and corrective actions. Baseline set from prior framework: premature depth, surface-only scanning, false confidence, premature termination, re-exploration, completeness bias in possibility mode. Additions from this redefinition: **F-strong drift** (relevance/adjacency annotations begin extracting relational meaning); **silent boundary-discovery** (sub-phase fires without explicit input flag); **negative-space silent drop** (confirmed-absent regions silently omitted from output).
- [ ] Coverage / convergence criteria: 3 (frontier stability + declining discovery rate + bounded gaps)
- [ ] Jump-scan rule defined to prevent false confidence
- [ ] Anti-drift rules for F-weak: relevance is post-scan annotation (not filter); adjacency claims co-location only, not relational meaning; any relational claim beyond co-location is a drift signal
- [ ] Calibration-state items named: F-weak anti-drift (project hasn't yet calibrated whether annotations stay low-commitment in practice); territory-boundary input contract (project hasn't yet typed `_branch.md` Scope formally)
- [ ] Self-assessment output rule: PROCEED / FLAG / RE-RUN

### P5 — Output Anatomy: Transform / Progression / Telemetry / Frontier (Cluster ε)

**Question:** *What does `/explore` produce as runtime artifact, in what structure?*

**Verification criteria:**
- [ ] Transform structure specified: territory overview (mode, entry point, surround layer), inventory (mode-appropriate), confidence map (regions + 5 confidence levels including confirmed-absent), signal log, frontier state, gaps/recommendations for downstream
- [ ] Progression structure specified: cycle-level snapshots (Cycle 1 → Cycle N), each recording scan/signals/resolution/probe/frontier/confidence updates
- [ ] Telemetry structure specified: mode, entry point, cycles run, candidates generated (possibility mode), signals detected/probed/deferred, resolution progression, frontier state, discovery rate, convergence criteria status, jump-scan performed, failure modes checked, output verdict
- [ ] Frontier output structure specified: deferred signals with reasoning, unbounded gaps, frontier questions handed to downstream disciplines (sensemaking, decompose, innovate, critique, navigate)
- [ ] Annotation layer outputs (relevance, adjacency, confirmed-absent) explicitly placed within Transform sections

### Independence check (per piece)

- **P1:** answerable without P2-P5 details. Identity comes before structure. ✓
- **P2:** answerable given P1's definition; components are named and described without needing process details. ✓
- **P3:** answerable given P1 and P2; uses components but doesn't require P4/P5. ✓
- **P4:** requires P2 (failure modes reference components) and P3 (failures recognized within cycle). Independent of P5. ✓
- **P5:** requires P2 (Transform structure references components) and P3 (Progression/Telemetry derive from cycle) and P4 (Telemetry reports coverage status). ✓

---

## Step 5 — Map Interfaces

### Interface table (with assumptions-not-data check)

| From → To | What flows | Direction | Assumptions on the other side |
|---|---|---|---|
| **P1 → P2** | Definition constraint (must produce existence claims); F-weak commitment (annotation layers must be low-commitment); upstream-precondition (components must operate at existence-claim level, not at meaning/mechanism level) | One-way | P2 assumes definition is fixed before component decisions; P1 assumes P2 will preserve the existence-claim level (no leak to meaning) |
| **P1 → P3** | NOT-list constraint (process must not leak to sense-making, comprehend, decompose, innovate, navigate territory); idempotency-within-invocation commitment | One-way | P3 assumes NOT-list is fixed; P1 assumes P3's mode/sub-phase logic respects the NOT-list |
| **P2 → P3** | Component invocation contract: scan signature, probe signature, frontier-tracking state, confidence-mapping state | One-way (P3 uses P2) | P3 assumes each component has a stable interface and is idempotent within a cycle |
| **P2 → P5** | Component outputs populate Transform sections: scan → inventory; probe → confirmed regions; frontier-tracking → frontier state; confidence-mapping → confidence map | One-way (P5 receives) | P5 assumes component outputs are typed correctly; P2 assumes Transform schema matches its outputs |
| **P3 → P4** | Cycle state stream (current cycle, scan results, signal queue, frontier state, confidence updates) — P4 evaluates these for failures and coverage | Bidirectional (P3 produces state; P4 gates with PROCEED/FLAG/RE-RUN) | P4 assumes the cycle's state is observable mid-run; P3 assumes coverage criteria are evaluable at cycle boundary |
| **P3 → P5** | Cycle-by-cycle snapshots → Progression; mid-cycle telemetry → Telemetry section | One-way | P5 assumes Progression schema accepts cycle snapshots; P3 assumes telemetry fields exist for what it reports |
| **P4 → P5** | Coverage status + failure-mode check results → Telemetry; deferred signals + frontier questions → Frontier output | One-way | P5 assumes coverage + failure-check outputs are typed correctly; P4 assumes Frontier output has a recipient (downstream disciplines) |
| **P1 → P4** | F-weak commitment + calibration-state items → drives the anti-drift failure modes (F-strong drift, silent boundary-discovery, negative-space silent drop) | One-way | P4 assumes F-weak is the canonical commitment; P1 assumes P4 will enforce it via failure modes |

### Assumptions-not-data check (specific surfaces)

- **P3 ↔ P4 mid-cycle observability:** P4 needs to observe cycle state mid-run to detect failures. The assumption is that cycle state is exposed (not encapsulated). **Risk:** if P3 encapsulates cycle state, P4 fails silently. **Mitigation:** P3's cycle structure must publish state at each step boundary.
- **P2 → P5 typing of annotation layers:** P5's Transform structure assumes annotation layers are tagged correctly by P2's components. **Risk:** if scan or probe emits an item without an annotation tag, P5 cannot place it correctly. **Mitigation:** components MUST emit `{existence_claim, confidence, optional_relevance, optional_adjacency, optional_confirmed_absent}` as the typed unit.
- **P1 → P4 enforcement of F-weak:** P4's anti-drift rules assume P1's F-weak commitment is canonical. **Risk:** if P1 is later loosened (allowing F-strong), P4's anti-drift rules become incoherent. **Mitigation:** P4's failure modes reference P1 directly, so any P1 change cascades.

### Hidden coupling check

- **A5 frontier state spans 4 clusters** (β as component, γ as cycle-state, δ as coverage subject, ε as telemetry field). Risk of hidden coupling: HIGH if frontier-state schema is implicit. Mitigation: explicit schema in P2 referenced by P3, P4, P5.
- **Confidence levels span 2 clusters** (β as annotation layer, ε as Transform field). Risk: LOW (same enumeration; one source of truth in P2).

---

## Step 6 — Order by Dependency

### Dependency graph

```
P1 (Identity)
  ↓     ↓
 P2    P3 (parallelizable after P1)
  ↓    ↓
   P4  (depends on P2 + P3)
       ↓
       P5 (depends on P2 + P3 + P4)
```

### Suggested ordering for downstream disciplines

- **Step 1:** P1 (Identity). Must come first; everything else derives from it.
- **Step 2 (parallel):** P2 (Components) and P3 (Process). Each depends only on P1, not on each other. Innovate can propose shape variants for each in parallel.
- **Step 3:** P4 (Quality Boundaries). Depends on P2's components (failures map to them) and P3's cycle (coverage gates the cycle).
- **Step 4:** P5 (Output Anatomy). Depends on P2's components, P3's cycle, P4's coverage/telemetry.

No circular dependencies. P2 ↔ P3 are independent within their layer (parallel).

---

## Step 7 — Self-Evaluate

### Minimum evaluation (3 dimensions)

| Dimension | Check | Pass? | Note |
|---|---|---|---|
| **Independence** | Each piece answerable without sibling pieces (except through interfaces)? | **PASS** | P1 standalone; P2 needs only P1; P3 needs only P1; P4 needs P2+P3; P5 needs P2+P3+P4. Each piece's question can be answered as one focused pass given its predecessors. |
| **Completeness** | Pieces cover the whole? | **PASS** | All 19 elements (E1–E19) mapped to a cluster; all 9 anatomy requirements covered (5 spec + 4 output). |
| **Reassembly** | Pieces + interfaces = the whole skeleton? | **PASS** | P1 + P2 + P3 + P4 + P5 + 8 interfaces reconstruct the SV6 definition plus the two anatomies. Determination-mechanism piece check: mode-determination, entry-point-determination, sub-phase-trigger-detection all explicitly placed in P3 verification criteria. |

### Full evaluation (additional dimensions)

| Dimension | Check | Score |
|---|---|---|
| **Tractability** | Each piece small enough for one focused pass? | PASS — each is one section of a SKILL.md-equivalent document |
| **Interface clarity** | All cross-piece flows explicit; assumptions-not-data check applied? | PASS — 8 interfaces named with directions, content, and assumptions; 3 hidden-coupling risks named with mitigations |
| **Balance** | Complexity proportional? | PASS with note — P3 (Process Model) is slightly heavier than the others because it absorbs modes + sub-phase + cycle + entry-point + idempotency. P5 is slightly lighter. No piece is >2× another. |
| **Confidence** | Top-down and bottom-up agree on boundaries? | PASS — all 7 boundaries scored HIGH or MEDIUM; B4 (γ↔δ) is MEDIUM because frontier state bridges, but the interface is explicitly named. |

### Failure-mode self-check

- **Premature decomposition** (#1): No — sensemaking SV6 clarified the whole.
- **Wrong boundaries** (#2): No — coupling perception was the basis; all boundaries at low or asymmetric-moderate.
- **Hidden coupling** (#3): Checked — 3 risks named (mid-cycle observability, annotation typing, F-weak cascade); each mitigated.
- **Missing pieces** (#4): No — all 19 elements mapped; determination-mechanism piece check passed.
- **Over-decomposition** (#5): No — 5 pieces for a SKILL.md-level skeleton is right-sized; further sub-decomposition would produce fragments.
- **Ignoring dependencies** (#6): No — explicit dependency order produced (P1 → {P2 ‖ P3} → P4 → P5).
- **Imbalanced decomposition** (#7): No — minor imbalance (P3 heavier, P5 lighter) noted but not extreme.

---

## Final Deliverable

### Coupling Map

5 clusters (α Identity, β Components, γ Process, δ Quality, ε Output) with one-way constraint flows from α to all others, and bidirectional process-quality flow at the γ↔δ boundary. Frontier state is the only multi-cluster atom; its schema must be explicit in P2.

### Question Tree

- **P1 — Identity / Definition.** *What cognitive operation does `/explore` formalize, what is its boundary against neighbors, and how does it commit to the user's hypothesis?*
- **P2 — Structural Components & Annotation Layers.** *What named components does `/explore` consist of, and what annotation layers ride on their output?*
- **P3 — Process Model: Modes, Sub-phase, Cycle, Idempotency.** *How does `/explore` run, through what modes / sub-phase / cycle / entry points, and what is its idempotency contract?*
- **P4 — Quality Boundaries: Failure Modes + Coverage + Anti-drift + Calibration.** *How does `/explore` know it is done well, and when has it gone wrong?*
- **P5 — Output Anatomy: Transform / Progression / Telemetry / Frontier.** *What does `/explore` produce as runtime artifact, in what structure?*

### Interface Map

8 interfaces summarized above; 3 hidden-coupling risks named with mitigations.

### Dependency Order

P1 → {P2 ‖ P3} → P4 → P5.

### Self-Evaluation

3/3 minimum dimensions PASS. 4/4 additional dimensions PASS (with minor balance note). All 7 failure modes checked, no triggers.

---

## Frontier (for downstream disciplines)

- *(for /innovate)* Each piece P1–P5 is a candidate site for shape variants. Specifically: P2 has variants for the component list (minimal 6 / standard 6+annotations / maximal 6+annotations+boundary-discovery+negative-space); P3 has variants for how the sub-phase is exposed (preflight check vs first sub-step vs separate mode); P4 has variants for how anti-drift is enforced (failure-mode descriptions vs structural-check vs telemetry threshold).
- *(for /td-critique)* The determination mechanism for mode-detection (artifact vs possibility) is named but not detailed in P3 — innovation should propose mechanisms; critique should stress-test them.
- *(open carry-forward)* The MEDIUM-confidence resolution on boundary-discovery (sub-phase vs third mode) inherits from sensemaking and is re-flagged here. Critique should test whether the sub-phase framing holds under adversarial pressure.

---

## Telemetry

- **Elements identified:** 19 (E1–E19)
- **Coupling pairs evaluated:** ~24 (only the load-bearing pairs tabulated above; many pairs were no-coupling by inspection)
- **Atoms identified for bottom-up validation:** 11 (A1–A11)
- **Atom-to-cluster mappings checked:** 11/11 agree with top-down
- **Boundary-confidence scores:** 6 HIGH + 1 MEDIUM (B4 γ↔δ, mitigated via explicit frontier-state schema)
- **Pieces produced:** 5 (P1–P5)
- **Interfaces named:** 8 (with assumptions-not-data check on 3 risk surfaces)
- **Dependency order:** acyclic; P1 → {P2 ‖ P3} → P4 → P5
- **Self-evaluation:** 3/3 minimum PASS; 4/4 full PASS (with minor balance note)
- **Failure modes triggered:** 0

## Self-Assessment

**Overall: PROCEED**

The skeleton partitions cleanly into 5 pieces with explicit interfaces, no circular dependencies, no hidden coupling (3 risks identified and mitigated), and full coverage of the SV6 definition plus the two anatomies. Innovation should now propose shape variants per piece. Critique should stress-test the F-weak commitment and the sub-phase framing.
