# Decomposition (iter 2) — partitioning the meaning of "to explore"

## User Input
`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-12_00-40__explore_discipline_from_scratch/_branch.md`

Prior outputs consumed: `exploration.md` and `sensemaking.md` (iter 2). The whole being decomposed is the SV6 meaning-definition: *to explore = to perform purposive open-mode surfacing of a territory*.

Iter-1's decomposition (preserved in `docarchive/iter1/`) partitioned the SKELETON (5 SKILL.md sections P1–P5). Iter-2's decomposition partitions the MEANING-DEFINITION (the cognitive operation itself). These are different layers; the mapping between them is produced explicitly in the Reassembly section below.

---

## The whole being decomposed

> *To explore is the cognitive operation in which a cognizer (agent) enters a territory whose contents are not pre-known, holding an open-mode commitment throughout the invocation, attending via purpose-biased relevance to what stands out as worth surfacing, accumulating those surfaced items into a confidence-tagged map with frontier-tracking, and terminating when surprise-bounded coverage is reached — handing off any mid-invocation questions worth pursuing as frontier-output to closed-mode disciplines.*

---

## Step 1 — Perceive Coupling Topology

### Elements in the whole

From SV6, the meaning-definition contains 12 conceptual elements:

| # | Element | Role |
|---|---|---|
| E1 | Agent (the cognizer running the discipline) | Setup |
| E2 | Purpose (the why; provides attention bias) | Setup |
| E3 | Territory (the where; with stated boundary or "unknown" flag) | Setup |
| E4 | Open-mode commitment (accepting contents are not pre-known) | Commitment |
| E5 | Mode-hold (commitment held throughout invocation) | Commitment |
| E6 | Mid-invocation question handoff (questions → frontier output, not mode shift) | Commitment / Exit |
| E7 | Mode confusion failure mode (drifting from open into closed) | Commitment / Quality |
| E8 | Surfacing (the core act — bringing items into view) | Action |
| E9 | Purpose-biased attention (relevance as surfacing criterion) | Action |
| E10 | Confidence assignment (5-level epistemic state per region) | Action / Accumulator |
| E11 | Map (regions + surfaced items + confidence) | Accumulator |
| E12 | Frontier tracking (advancing / stable / closed) | Accumulator / Exit |
| E13 | Negative-space recording (confirmed-absent regions as productive output) | Accumulator |
| E14 | Optional annotations (relevance score, adjacency co-location tag) | Accumulator |
| E15 | Convergence criteria (frontier stability + declining discovery rate + bounded gaps) | Exit |
| E16 | Jump-scan rule (before declaring converged) | Exit |
| E17 | Idempotency within invocation | Exit / Commitment |
| E18 | Cross-invocation re-explore delegated to runner | Exit |

(That's 18, not 12 — finer-grained accounting after first pass.)

### Pairwise coupling assessment

Strong-coupling pairs (must stay together):

- E1–E2–E3 (Agent / Purpose / Territory): the SETUP triad. Purpose without agent is unmotivated; territory without purpose has no attention bias; agent without territory has nothing to explore.
- E4–E5 (open-mode + mode-hold): the commitment IS the hold across time.
- E5–E7 (mode-hold + mode confusion): the failure mode exists to protect the hold.
- E6–E17 (handoff + idempotency): handoff is what makes idempotency-within-invocation possible — questions don't leak across boundaries.
- E8–E9 (surfacing + attention bias): attention bias drives surfacing.
- E9–E2 (attention bias + purpose): attention bias IS purpose-biased; without purpose, no bias.
- E10–E11 (confidence + map): the map carries confidence per region.
- E11–E12 (map + frontier): frontier is a property of the map.
- E11–E13 (map + negative-space): confirmed-absent regions ARE map content.
- E15–E12 (convergence criteria + frontier): convergence is evaluated against frontier state.
- E15–E16 (convergence + jump-scan): jump-scan is part of the convergence protocol.

Weak-coupling pairs (natural boundaries):

- E1–E8 (Agent ↔ Surfacing): the agent enables surfacing but doesn't constitute it — directional.
- E3–E8 (Territory ↔ Surfacing): surfacing happens *in* the territory but surfacing is its own act.
- E4–E8 (open-mode ↔ surfacing): commitment shapes how surfacing proceeds but surfacing has its own structure.
- E8–E11 (surfacing ↔ map): action produces map content (directional).
- E15–E6 (convergence ↔ handoff): handoff happens at convergence (directional).

### Coupling map: clusters

Five natural clusters emerge:

| Cluster | Members | Role |
|---|---|---|
| **α — Setup** | E1, E2, E3 | What the inquiry hands to the discipline at invocation start: agent, purpose, territory. |
| **β — Commitment** | E4, E5, E6, E7, E17 | The cognitive stance held through the invocation: open-mode declaration, mode-hold, mid-invocation question handoff policy, mode-confusion guard, within-invocation idempotency. |
| **γ — Action** | E8, E9, E10 | The cognitive moves performed during cycles: surfacing, purpose-biased attention, confidence assignment. |
| **δ — Accumulator** | E11, E12, E13, E14 | The output structure and progress indicator: map, frontier, negative-space, optional annotations. |
| **ε — Exit** | E15, E16, E18 | Termination and external handoff: convergence criteria, jump-scan rule, cross-invocation re-explore delegation. |

(E6 and E17 sit on the Commitment/Exit boundary — they're rules about handoff and idempotency that the Commitment authors and Exit enforces. Placed in β with explicit interface to ε.)

### Inter-cluster flows

| Boundary | Coupling type | Description |
|---|---|---|
| α ↔ β | weak | Setup provides context (purpose, territory) that Commitment consumes; Commitment doesn't shape Setup. One-way. |
| α ↔ γ | weak | Setup defines what Action operates on; Action consumes territory + purpose. One-way. |
| β ↔ γ | moderate | Commitment shapes how Action proceeds (open-mode → surprise-accepting; mode-hold → no internal shift). One-way. |
| γ ↔ δ | strong (directional) | Action produces Accumulator content (surfaced items + confidence). One-way. |
| γ ↔ ε | moderate (directional) | Action emits signals that feed Exit's convergence check. One-way. |
| δ ↔ ε | strong (directional) | Exit evaluates Accumulator state for convergence. One-way. |
| β ↔ ε | moderate | Commitment's handoff policy is enforced by Exit's handoff routing. Bidirectional (policy ↔ enforcement). |

---

## Step 2 — Detect Boundaries (Top-Down)

Cutting at the five cluster boundaries produces five pieces. All inter-cluster flows are either weak or asymmetric-moderate; no high-coupling region is cut.

| Boundary | Crosses | Traffic | Type |
|---|---|---|---|
| B1 (α↔β) | Setup ↔ Commitment | low | one-way |
| B2 (α↔γ) | Setup ↔ Action | low | one-way |
| B3 (β↔γ) | Commitment ↔ Action | moderate | one-way |
| B4 (γ↔δ) | Action ↔ Accumulator | moderate | one-way (production) |
| B5 (γ↔ε) | Action ↔ Exit | low-moderate | one-way (signaling) |
| B6 (δ↔ε) | Accumulator ↔ Exit | moderate | one-way (state-check) |
| B7 (β↔ε) | Commitment ↔ Exit | moderate | bidirectional (policy ↔ enforcement) |

**Initial partition: 5 pieces (Setup / Commitment / Action / Accumulator / Exit).**

---

## Step 3 — Validate Boundaries (Bottom-Up Check)

### Irreducible atoms

- A1 Existence-claim (the unit; called "surfaced item" at user-facing level)
- A2 Confidence level (5 named values)
- A3 Scan operation
- A4 Probe operation
- A5 Signal-detection (5 signal types)
- A6 Frontier state (3 named values)
- A7 Cycle (atomic process unit)
- A8 Mode (open vs closed; commitment-level)
- A9 Mode (artifact vs possibility; territory-type)
- A10 Convergence criterion (3 of them)
- A11 Purpose (the why)
- A12 Territory boundary (stated or unknown)
- A13 Failure mode (named record)
- A14 Annotation tag (relevance / adjacency / confirmed-absent)

### Atom-to-cluster check

| Atom | Cluster | Top-down agreement |
|---|---|---|
| A1 Surfaced item / Existence claim | γ produces, δ holds | ✓ split across action and accumulator with explicit interface |
| A2 Confidence level | γ assigns, δ records | ✓ same pattern |
| A3 Scan | γ | ✓ |
| A4 Probe | γ | ✓ |
| A5 Signal-detection | γ | ✓ |
| A6 Frontier state | δ holds, γ updates, ε evaluates | ✓ multi-cluster — needs explicit schema (same flag as iter-1) |
| A7 Cycle | γ + δ (one cycle = one action+accumulator round) | ✓ |
| A8 Mode (open/closed) | β | ✓ |
| A9 Mode (artifact/possibility) | α (territory-type is part of setup) | ✓ |
| A10 Convergence criterion | ε | ✓ |
| A11 Purpose | α (input), γ (used for attention bias) | ✓ multi-cluster — explicit interface from α→γ |
| A12 Territory boundary | α (specified or "unknown" flag for boundary-discovery sub-phase) | ✓ |
| A13 Failure mode | β (mode confusion); also γ (premature depth etc. from iter-1) | ✓ |
| A14 Annotation tag | δ | ✓ |

**Boundary confidence:**

- B1 (α↔β): HIGH — clean one-way constraint flow.
- B2 (α↔γ): HIGH — territory + purpose flow to action; no atom split.
- B3 (β↔γ): HIGH — commitment shapes action; A8 mode lives in β, action uses commitment as context.
- B4 (γ↔δ): HIGH — production flow; A1 + A2 + A6 are multi-cluster atoms with explicit schemas.
- B5 (γ↔ε): HIGH — signaling flow.
- B6 (δ↔ε): HIGH — state evaluation flow.
- B7 (β↔ε): MEDIUM — handoff policy spans β and ε. Mitigation: explicit policy statement in β; explicit enforcement in ε.

All boundaries pass bottom-up sanity check.

---

## Step 4 — Express as Question Tree

### Setup piece

**Question:** *What does the inquiry hand to `/explore` at invocation, and what implicit defaults does the discipline assume when inputs are missing?*

**Verification criteria:**
- [ ] Agent role specified (the cognizer running the discipline — typically the loop runner like /MVL+)
- [ ] Purpose specified as input (the why driving attention bias)
- [ ] Territory specified (with stated boundary OR explicit "boundary unknown" flag)
- [ ] Territory-type mode specified or detectable (artifact vs possibility)
- [ ] Entry-point specified or detectable (frontier-first default, signal-first if hunch provided)
- [ ] Implicit defaults named (e.g., purpose absent → use inquiry's `_branch.md` Question + Goal; boundary absent → fire boundary-discovery sub-phase)

### Commitment piece

**Question:** *How does the discipline express and maintain its open-mode cognitive commitment, and what failure mode protects against drift?*

**Verification criteria:**
- [ ] Open-mode commitment declared explicitly at invocation start (e.g., as a Step 0 declaration alongside mode + entry-point)
- [ ] Mode-hold rule stated: commitment held throughout single invocation; no mid-invocation shift to closed-mode
- [ ] Mid-invocation question handoff policy stated: questions worth pursuing become frontier-output to closed-mode disciplines, not internal mode shifts
- [ ] Mode-confusion failure mode named with recognition signals (downstream-observable: sense-making finds redundant anchor work; or in-discipline: explorer starts pursuing specific answer rather than mapping)
- [ ] Idempotency within invocation stated; cross-invocation re-explore delegated to runner
- [ ] Distinction stated explicitly: cognitive-commitment mode (open/closed, in β) ⊥ territory-type mode (artifact/possibility, in α)

### Action piece

**Question:** *What cognitive moves does the discipline perform during a cycle, and how does purpose-biased attention drive them?*

**Verification criteria:**
- [ ] Cycle structure: scan → signal-detection → resolution-management → probe-or-scan → frontier-update → confidence-update → convergence-assess
- [ ] Scan: breadth-first surfacing at current resolution; first pass unweighted; later passes importance-weighted
- [ ] Signal-detection: 5 signal types (density / novelty / relevance / tension / absence) with relevance signal explicitly purpose-biased
- [ ] Probe: depth investigation of prioritized signal
- [ ] Resolution-management: zoom-in triggers (signal not assessable at current res; high importance + low confidence; sub-structure discovered) + zoom-out triggers (region well-mapped; diminishing returns; broader view needed)
- [ ] **Relevance reframed as scan-driver, not post-scan tag.** Attention is purpose-biased during scan; items get surfaced because they stand out as relevant; items get not-surfaced (or surfaced at low confidence) because they don't.
- [ ] Confidence assigned to every surfaced item (5 levels: confirmed / scanned / inferred / unknown / confirmed-absent)
- [ ] Iter-1 failure modes preserved: premature depth, surface-only scanning, false confidence, premature termination, re-exploration, completeness bias in possibility mode

### Accumulator piece

**Question:** *What output structure does the discipline produce, and how does it track its own progress?*

**Verification criteria:**
- [ ] Map structure: regions + surfaced items + confidence levels
- [ ] Frontier tracking: 3 states (advancing / stable / closed); updated each cycle
- [ ] Negative-space recording: confirmed-absent regions are productive output, not gaps; placed explicitly in map
- [ ] Optional annotations: relevance score (low-commitment, post-surfacing) and adjacency tag (co-location, no relational meaning claimed)
- [ ] Output anatomy (per `anatomy_of_disciplines.md`): Transform (the map), Progression (cycle-by-cycle snapshots), Telemetry (operational metrics), Frontier (deferred signals + open questions for downstream)

### Exit piece

**Question:** *When does the discipline stop, and what handoffs leave the discipline?*

**Verification criteria:**
- [ ] Convergence criteria: 3 (frontier stability + declining discovery rate + bounded gaps); all must hold
- [ ] Jump-scan rule: before declaring converged, perform one scan in a previously-unscanned direction; if surprises emerge, frontier wasn't actually stable
- [ ] Handoff: frontier-output specifies questions for closed-mode disciplines (sense-making, comprehend) to pick up
- [ ] Cross-invocation re-explore: explicitly delegated to runner (not re-entered by /explore itself); cycle-internal "zoom in" is the only recursive movement
- [ ] Self-assessment output: PROCEED / FLAG / RE-RUN

### Independence check

- **Setup** standalone — answerable given the discipline's input contract.
- **Commitment** depends on Setup (consumes purpose as context).
- **Action** depends on Setup (operates on territory) and Commitment (held open-mode shapes how action proceeds).
- **Accumulator** depends on Action (consumes surfaced items + confidence + signals).
- **Exit** depends on Accumulator (evaluates state) and Commitment (enforces handoff policy).

Each piece's question is answerable in one focused pass given its predecessors.

---

## Step 5 — Map Interfaces

### Interface table (with assumptions-not-data check)

| From → To | What flows | Direction | Assumptions |
|---|---|---|---|
| **Setup → Commitment** | Purpose context (so Commitment knows what to bias attention toward); territory boundary status (drives boundary-discovery sub-phase decision) | One-way | Commitment assumes purpose is non-empty (if absent, default to inquiry's Question+Goal); Setup assumes Commitment doesn't modify the input contract |
| **Setup → Action** | Territory specification (boundary + type) + purpose (used for attention bias) + entry-point choice | One-way | Action assumes territory is stated by the time it runs (boundary-discovery sub-phase, in α or β, fires first if not); Action assumes purpose can be operationalized as relevance criteria |
| **Commitment → Action** | Open-mode declaration; mode-hold rule (no closed-mode interrogation during action); surprise-acceptance posture | One-way | Action assumes the commitment is non-shifting during the run; Action's design (broad scan first, signal-driven probing, frontier-tracking) instantiates the commitment by structure |
| **Action → Accumulator** | Surfaced items {existence-claim, region, confidence, optional relevance score, optional adjacency, optional confirmed-absent flag}; signal log entries; resolution decisions | One-way (production) | Accumulator assumes Action emits typed-shaped items (5-level confidence, optional annotation slots); Action assumes Accumulator has a schema for these |
| **Action → Exit** | Per-cycle signals: discovery rate, frontier delta, signals probed/deferred | One-way (signaling) | Exit assumes signals are emitted at cycle boundaries; Action assumes Exit reads signals to gate next cycle |
| **Accumulator → Exit** | Current map state + frontier state | One-way (state-check) | Exit assumes the accumulator's frontier state is current at cycle boundaries; Accumulator assumes Exit treats frontier-state as observable |
| **Commitment ↔ Exit** | Policy: mid-invocation questions → frontier-output (not mode shift). Enforcement: Exit routes emergent questions to frontier output, never to internal mode shift. | Bidirectional (policy ↔ enforcement) | Commitment assumes Exit obeys handoff policy; Exit assumes Commitment provides clear routing rule |

### Assumptions-not-data check (specific surfaces)

- **Setup → Action: purpose-operationalization.** Action assumes purpose is operationalizable as attention bias. If purpose is too vague (e.g., "explore the codebase"), Action's relevance criteria are weak. **Risk:** weak purpose produces weak relevance; weak relevance produces unguided scan; unguided scan returns to the iter-1 "F-weak unweighted scan" behavior, losing the iter-2 reframe's value. **Mitigation:** Setup should validate that purpose is specific enough to operationalize (Setup's verification check); if not, flag back to inquiry.

- **Action → Accumulator: typed-item shape.** Accumulator assumes Action emits items with consistent shape. If Action's scan emits items without confidence levels, Accumulator can't place them. **Mitigation:** Action's verification requires every emitted item to carry existence-claim + confidence; annotations are optional.

- **Commitment ↔ Exit: handoff routing.** Commitment specifies the rule (questions → frontier output); Exit enforces it (when an emergent question appears, route to frontier, do not internally pursue). **Risk:** if Exit's routing is implicit, mode confusion can occur silently (Action starts pursuing a question, Exit doesn't catch it). **Mitigation:** explicit failure-mode entry: "mid-invocation question pursuit without handoff" as a sub-case of mode confusion.

### Hidden coupling check

- **Frontier state spans 3 clusters** (γ Action updates it, δ Accumulator holds it, ε Exit evaluates it). Risk: HIGH if schema is implicit. Mitigation: explicit frontier-state schema in Accumulator (δ), referenced by Action and Exit.

- **Purpose spans 2 clusters** (α Setup defines it, γ Action uses it for attention bias). Risk: LOW (single source of truth in Setup; Action consumes via parameter). Mitigation: Setup's purpose specification is the canonical reference.

- **Mode** has TWO atoms (A8 commitment-mode, A9 territory-type-mode) at DIFFERENT clusters (β commitment vs α setup). Risk: confusion between the two "modes." Mitigation: rename them disambiguatedly in the spec (cognitive-commitment mode vs territory-type mode) per sensemaking's orthogonality anchor.

---

## Step 6 — Order by Dependency

```
Setup (α)
  ↓
Commitment (β)
  ↓
Action (γ) ↔ Accumulator (δ)     [γ produces, δ accumulates within cycles]
  ↓                ↓
            Exit (ε)              [exit reads both γ signals and δ state]
```

**Dependency order:**

1. **Setup** (Setup) — first; everything else needs Setup's outputs as context.
2. **Commitment** (Commitment) — next; declares stance the rest enforces.
3. **Action and Accumulator** (Action / Accumulator) — operate together in cycles. Action produces; Accumulator records. Not parallel-as-independent, but parallel-as-paired.
4. **Exit** (Exit) — last; depends on Action's signals + Accumulator's state + Commitment's handoff policy.

No circular dependencies.

---

## Step 7 — Self-Evaluate

### Minimum (3 dimensions)

| Dimension | Check | Pass? |
|---|---|---|
| **Independence** | Each piece answerable without sibling pieces (except through interfaces)? | **PASS** |
| **Completeness** | All 18 conceptual elements covered? | **PASS** — all mapped to a cluster |
| **Reassembly** | Pieces + interfaces = the meaning-definition? | **PASS** — see Reassembly check below |

### Full (additional dimensions)

| Dimension | Check | Score |
|---|---|---|
| Tractability | Each piece a focused pass? | PASS — each is a section of SKILL.md-equivalent content |
| Interface clarity | All cross-piece flows explicit; assumptions-not-data check applied? | PASS — 7 interfaces named with directions, content, assumptions; 3 hidden-coupling risks named with mitigations |
| Balance | Complexity proportional? | PASS with note — Action (γ) slightly heavier (6 sub-criteria); Setup (α) slightly lighter (3 sub-criteria). Within 2x ratio. |
| Confidence | Top-down + bottom-up agree? | PASS — 6 of 7 boundaries HIGH; 1 MEDIUM (β↔ε bidirectional policy/enforcement) mitigated by explicit policy statement. |

### Determination-mechanism piece check

Two load-bearing concepts have runtime-determined applicability:

- **Boundary-discovery sub-phase trigger.** "Fire if territory boundary unstated." Detection mechanism: check `_branch.md` Scope field. Mechanism placed in **Setup (α)** as part of input-contract validation. ✓
- **Mode-confusion drift detection.** "Detect drift from open-mode into closed-mode." Detection mechanism: downstream-observable (sense-making redundancy is the signal). Mechanism placed in **Commitment (β)** as a named failure mode, with detection routing explicitly stated as downstream. ✓ No determination-mechanism gap remains.

### Reassembly check (the meaning-definition reconstructed)

Given Setup (α) + Commitment (β) + Action (γ) + Accumulator (δ) + Exit (ε), can the SV6 meaning-definition be reconstructed?

Walk-through: the agent (α-E1) operates in a territory (α-E3) with a purpose (α-E2), holding an open-mode commitment (β-E4-E5) declared at start. During each cycle, the agent performs surfacing (γ-E8) driven by purpose-biased attention (γ-E9), assigning confidence (γ-E10/δ-E11) to each item. The accumulator builds a map (δ-E11) with frontier tracking (δ-E12), recording confirmed-absences (δ-E13) and optional annotations (δ-E14). Exit (ε-E15) evaluates convergence, runs jump-scan (ε-E16), and on convergence routes mid-invocation questions as frontier output (β-E6 + ε) to closed-mode disciplines. Idempotency within the invocation (β-E17) and cross-invocation re-explore delegation (ε-E18) close the loop. Mode confusion (β-E7) is the failure mode that protects open-mode commitment.

**Reassembly: PASS.** All elements of SV6 are reconstructible from the 5 pieces plus their interfaces.

### Failure-mode self-check

- Premature decomposition: NO — sensemaking SV6 clarified the whole.
- Wrong boundaries: NO — coupling perception was the basis; no high-coupling cuts.
- Hidden coupling: 3 risks identified (frontier, purpose, mode-atom-disambiguation), all mitigated.
- Missing pieces: NO — determination-mechanism check passed for both runtime-determined concepts.
- Over-decomposition: NO — 5 meaning-level pieces is the right grain for a meaning-definition (matches iter-1's 5 structural pieces, validating the size).
- Ignoring dependencies: NO — explicit dependency order produced.
- Imbalanced decomposition: NO — minor weight differences (γ heaviest, α lightest) within acceptable range.

---

## Mapping from meaning-level pieces (iter 2) to skeleton-level pieces (iter 1)

The sensemaking output committed that the iter-1 5-section SKILL.md skeleton is preserved with 3 refinement points. Iter-2's 5 meaning-level pieces are CROSS-CUTTING relative to iter-1's structural pieces (meaning ≠ structure). Mapping:

| Iter-2 meaning-piece | Iter-1 skeleton-section (where the content lands) | Refinement type |
|---|---|---|
| **Setup (α)** | Iter-1 Identity (definition of input contract) + part of Process (Step 0 declaration of mode + entry-point) | New material — formalize the input contract |
| **Commitment (β)** | Iter-1 Identity (open-mode commitment is part of the definition) + Iter-1 Quality (mode confusion failure mode) | Refinement — sensemaking's 3 refinement points: open-mode in Identity; mode confusion failure mode in Quality |
| **Action (γ)** | Iter-1 Components (6 named components) + relevance reframe (relevance moves from Components annotation-layer to Components scan-driver) | Refinement — relevance-as-surfacing-criterion is the substantive change |
| **Accumulator (δ)** | Iter-1 Output (Transform/Progression/Telemetry/Frontier) + Iter-1 Components (annotation layers, now restructured: relevance moved to γ; adjacency + confirmed-absent + existence/confidence remain in δ) | Refinement — annotation-layer restructure |
| **Exit (ε)** | Iter-1 Quality (coverage + jump-scan) + Iter-1 Process (idempotency, handoff to runner) | Preserved with refinement — handoff policy explicit in β↔ε interface |

This mapping shows that iter-1's structural pieces map onto iter-2's meaning pieces along a different axis (structure vs concept), but both partitionings are valid and consistent. Innovation should propose two skeleton shape variants: one preserving iter-1's structural sections, one restructuring to follow iter-2's meaning-level pieces.

---

## Final Deliverable

### Coupling Map

5 clusters: Setup (α), Commitment (β), Action (γ), Accumulator (δ), Exit (ε). Strong-coupling clusters internally cohesive. Inter-cluster flows are weak or asymmetric-moderate. Frontier-state is the only multi-cluster atom; its schema must be explicit in Accumulator (δ).

### Question Tree

- **Setup (α):** *What does the inquiry hand to `/explore`, and what implicit defaults apply?*
- **Commitment (β):** *How does the discipline express and maintain its open-mode commitment, and what protects against drift?*
- **Action (γ):** *What cognitive moves are performed during a cycle, and how does purpose-biased attention drive them?*
- **Accumulator (δ):** *What output structure is produced, and how is progress tracked?*
- **Exit (ε):** *When does the discipline stop, and what handoffs leave the discipline?*

### Interface Map

7 interfaces named with directions, content, and assumptions. 3 hidden-coupling risks named with mitigations.

### Dependency Order

Setup → Commitment → {Action ↔ Accumulator (paired in cycles)} → Exit.

### Self-Evaluation

3/3 minimum dimensions PASS. 4/4 full dimensions PASS (one minor balance note). Determination-mechanism piece check PASS (boundary-discovery trigger + mode-confusion detection both placed). All 7 failure modes checked, no triggers.

---

## Frontier (for downstream disciplines)

- *(for /innovate)* Propose 2 skeleton shape variants for the SKILL.md: (A) **preserve iter-1's 5 structural sections** (Identity / Components / Process / Quality / Output), absorbing iter-2 refinements within them; (B) **restructure to follow iter-2's 5 meaning-level pieces** (Setup / Commitment / Action / Accumulator / Exit). Evaluate the trade-offs.
- *(for /innovate)* Generate candidates for how the open-mode commitment is expressed: as a Step 0 declaration (analogous to "Mode: artifact" in iter-1); as a structural property documented in Identity; as a failure-mode-only guard in Quality; or via process structure (the cycle is open-mode by design, with no explicit declaration needed).
- *(for /td-critique)* Stress-test whether the iter-2 meaning-definition SUPERSEDES iter-1's finding or REFINES it. The skeleton-mapping above shows refinement is the more accurate verb (iter-1's skeleton structure preserved); but the underlying cognitive grounding has changed substantively (relevance-as-criterion not annotation; mode-confusion as new failure mode). The choice between SUPERSEDES and REFINES affects the finding's frontmatter and Next Actions.
- *(for /td-critique)* Test the determination-mechanism placements. Boundary-discovery trigger in Setup (α): is this the right home, or does it belong in Action (γ)? Mode-confusion detection in Commitment (β) routed to downstream: is the downstream-observability sufficient, or is an in-discipline classifier needed?

---

## Telemetry

- **Elements identified:** 18 (E1–E18)
- **Coupling pairs evaluated:** load-bearing pairs tabulated; no-coupling pairs not enumerated
- **Atoms for bottom-up validation:** 14 (A1–A14)
- **Atom-to-cluster agreement:** 14/14 agree with top-down
- **Boundary-confidence scores:** 6 HIGH + 1 MEDIUM (β↔ε bidirectional, mitigated by explicit policy)
- **Pieces produced:** 5 (Setup / Commitment / Action / Accumulator / Exit)
- **Interfaces named:** 7 with assumptions-not-data check on 3 risk surfaces
- **Hidden coupling risks:** 3 identified, all mitigated
- **Dependency order:** acyclic
- **Self-evaluation:** 3/3 minimum PASS; 4/4 full PASS
- **Determination-mechanism piece check:** 2 runtime concepts checked (boundary-discovery trigger, mode-confusion detection); both placed; no gap remains
- **Iter-1 mapping produced:** explicit cross-cutting mapping between meaning-level (iter 2) and structural-level (iter 1) pieces
- **Failure modes triggered:** 0

## Self-Assessment

**Overall: PROCEED**

The meaning-definition partitions cleanly into 5 conceptual pieces (Setup / Commitment / Action / Accumulator / Exit) with explicit interfaces. The pieces are CROSS-CUTTING relative to iter-1's structural partitioning — both partitionings are valid, and innovation should propose shape variants that pick one as the SKILL.md's organizing structure. The 3 refinement points sensemaking named (Identity / Components / Quality) are now precisely localized: Identity refinement is in Commitment (β); Components refinement is in Action (γ); Quality refinement is the mode-confusion addition in Commitment (β). Innovation should generate skeleton shape variants; critique should decide SUPERSEDES vs REFINES for the iter-1 finding.
