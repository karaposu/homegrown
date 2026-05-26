# Sensemaking — stabilizing the per-item content depth design

## User Input
`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-12_11-14__explore_surfacing_mechanism_depth/_branch.md`

Prior outputs consumed: this inquiry's `exploration.md`. Prior commitments inherited from CONTINUES-FROM inquiries.

---

## SV1 — Baseline Understanding

From exploration: /explore should produce items at depth levels D0–D4 (identifier; +surface form; +functional one-line; +structural adjacency; +relevance verdict). D5+ crosses into meaning-extraction. The boundary heuristic is inter-rater agreement. A new spec field — depth-level — is orthogonal to the just-finished inquiry's resolution-level field. The NOT-list survives intact with a clarification. But several questions remain: where does depth-level live in the spec? Should D4 (relevance verdict) actually be in /explore or moved to sense-making? Should D2 be the absolute minimum, or is D1 acceptable for coarse scans? How does the inter-rater heuristic handle edge cases like domain jargon?

---

## Phase 1 — Cognitive Anchor Extraction

### Constraints

- **C1.** Preserve iter-2 + just-finished spec commitments (verb-meaning; 5-section skeleton; NOT-list; 4 spec additions; /staged-explore runner).
- **C2.** Address the user's concern: sense-making must NOT have to re-discover what items are at the identifying level.
- **C3.** Maintain /explore vs sense-making boundary (no conceptual-structure meaning extraction).
- **C4.** Maintain /explore vs /navigation boundary.
- **C5.** Runnable today (Level 0 manual); integrates with existing scan-signal-probe cycle.

### Key Insights

- **K1.** Five acceptable depth levels (D0–D4); D5+ excluded by NOT-list.
- **K2.** Inter-rater agreement among **naive scanners** is the load-bearing heuristic (not among experts who've already done sense-making's work).
- **K3.** Depth-level and resolution-level are orthogonal dimensions of the input contract.
- **K4.** Per-item content is a scan-time snapshot (preserved from iter-2 idempotency).
- **K5.** Form is dual-track (prose default; typed when SK-STD+ Schema activates from iter-2 deferred path).
- **K6.** NOT-list "no meaning" survives intact with a clarification: meaning = conceptual-structure meaning, not labeling.
- **K7.** D2 is the default minimum (identifier + surface form + functional one-line); D1 permitted at coarse-resolution opt-in; D0 not acceptable as final output.
- **K8.** D4 (relevance verdict) is forward-tied to the open verification-probe question from the prior conversation.

### Structural Points

- **SP1.** Depth-level field placement: Step 0 declaration alongside resolution-level (explicit, orthogonal).
- **SP2.** Per-item content lives in /explore's output (each surfaced item carries the labeling).
- **SP3.** Default coupling: coarse-breadth pairs with shallower-depth; fine-breadth with richer-depth. Documented but not enforced.
- **SP4.** Per-invocation depth uniformity: depth declared once per /explore call; applies to all surfaced items in that invocation.

### Foundational Principles

- **P1.** Discipline boundaries are operational distinctions of cognitive-operation type, not arbitrary fences.
- **P2.** Each surfaced item must be operationally useful downstream without re-discovery.
- **P3.** Inter-rater agreement among naive readers is the proxy for "structural fact vs interpretive claim."

### Meaning-Nodes

- **MN1. Per-item content depth** — the labeling richness per surfaced item.
- **MN2. Depth-level** — the spec field controlling this richness; new in this iteration.
- **MN3. Identifying-labeling** — what each item IS at surface granularity; OK for /explore.
- **MN4. Meaning-extraction** — conceptual-structure interpretive claims; sense-making's job.
- **MN5. Inter-rater agreement among naive scanners** — the operational boundary test.
- **MN6. "Labeling" vs "anchor"** — labels are identifying-content per item; anchors are conceptual-structure units extracted by sense-making.

### SV2 — Anchor-Informed Understanding

With anchors: /explore produces items at D0–D4 labeling levels with D2 as default. Depth-level is a new Step 0 declaration. The NOT-list's "no meaning" claim refines to "no conceptual-structure meaning." Sense-making receives operationally useful items (not bare IDs) without /explore crossing into anchor extraction or relational claims.

---

## Phase 2 — Perspective Checking

### Technical / Logical

Does the design produce a coherent operational protocol? Yes:
- Scan emits items with identifier + surface form (D1).
- Probe enriches signaled items with functional one-line (D2) + structural adjacency (D3).
- Optional post-scan relevance verdict (D4) tagged at convergence.

The depth-level Step 0 field is declarative and easy to honor. **New anchor:** the discipline's existing cycle (scan → signal → probe → frontier → confidence → assess) naturally accommodates depth — each cycle step gates a depth tier (scan = D0/D1; probe = D2/D3; convergence-assess = D4 tag).

### Human / User

Does the design address the user's concern? Yes — D2-default means sense-making receives items with functional one-liner + surface form, not naked names. Sense-making's anchor extraction operates on labeled items, not has-to-guess names. The user's stated concern ("sensemaking would have to guess") is closed.

### Strategic / Long-term

Long-term, /intuit (the Predictive RC discipline) composes /explore's output. Per-item content depth needs to be predictable for /intuit to score hunches over it. D2–D4 are predictable labels at known granularity. **New anchor:** the depth-level field enables future autonomous mode-selection — at higher autonomy, the system can pick depth based on what /intuit needs to compose.

### Risk / Failure

Where could this fail?

- **R1.** Inter-rater agreement is a soft criterion; hard cases (domain jargon, contested terminology) could push descriptions either side of the boundary. **Mitigation:** name edge-case examples; ambiguous cases treated as "labeling at low confidence," not as meaning-extraction.
- **R2.** D4 (relevance verdict) might cross into sense-making — "relevant to purpose" is purpose-tied, which arguably involves interpretation. **Mitigation:** the verdict operates at purpose-fit level (using inquiry's stated Goal as anchor), not at conceptual-structure level. Keep D4 optional; forward-tie to the verification-probe question.
- **R3.** Default depth-coupling (coarse↔shallow; fine↔rich) is operational reasoning, not empirically validated. **Mitigation:** documented as recommended default, not enforced; calibration-state-dependent.
- **R4.** Per-invocation uniformity may not match practice — some items in an invocation deserve more detail than others. **Mitigation:** uniformity is the COMMITMENT; items with low confidence may have partial content (some fields empty) but the level is still per-invocation.

### Resource / Feasibility

Adding a depth-level field + per-item content specification is small spec work. The Components section gains a "Per-item content" subsection. The Step 0 declaration adds one field. Total: cheap, bounded, runnable today.

### Definitional / Internal Consistency

Contradictions with prior commitments?

- iter-2 NOT-list: preserved + clarified. ✓
- iter-2 verb-meaning: preserved. ✓
- Just-finished resolution-level: preserved; depth-level is orthogonal new field. ✓
- Just-finished merge contract node-identity: preserved; per-item content includes node-identity as identifier (D0). ✓
- iter-2 mode-orthogonality (cognitive-commitment ⊥ territory-type): preserved; depth-level adds a third orthogonal axis without contradiction. ✓

Internal consistency on the new framing: D0–D4 are progressive (each level subsumes the previous); D5+ is the boundary; per-invocation uniform; inter-rater heuristic operational. All consistent.

### Definitional / Frame-exit Completeness

**Gating predicate:** does the inquiry have inherited multi-value terms used across ≥2 distinct propositions within committed structures? The term "labeling" is new this iteration and only appears at one level (the depth taxonomy). The term "meaning" appears at one level (the labeling-vs-meaning boundary). No inherited multi-value terms across distinct propositions.

Gating predicate yields **FALSE.** Perspective skipped.

### Phase / Calibration-State

Calibration-state-dependent items:

- **Inter-rater agreement heuristic** — default; empirical refinement may be needed if edge cases prove confusing.
- **Default depth-by-resolution coupling** — operational reasoning, not validated; refine empirically.
- **D4 (relevance verdict)** — depends on the verification-probe question (open from prior conversation). Optional + forward-tied.

Name these calibration-state-flagged in the spec.

### SV3 — Multi-Perspective Understanding

> *Each /explore-surfaced item carries content at one of five labeling levels (D0–D4) with D2 as default minimum; D5+ is excluded (sense-making's territory). The labeling-vs-meaning boundary heuristic is inter-rater agreement among NAIVE scanners. Depth-level is a new Step 0 declaration orthogonal to resolution-level; default coupling documented but not enforced. D4 is optional + forward-tied to the verification-probe question. Per-invocation depth is uniform across surfaced items. Three calibration-state-flagged items name where empirical refinement is expected.*

Major shifts from SV2:
- Inter-rater agreement sharpened to "naive scanners" (not experts).
- Calibration-state items named.
- D4 forward-tie made explicit.
- Per-invocation uniformity articulated.

---

## Phase 3 — Ambiguity Collapse

### Ambiguity 1: Where does the depth-level field live?

Three readings: (a) Step 0 declaration alongside resolution-level; (b) Derived from resolution-level via default coupling; (c) Implicit by convention.

**Strongest counter to (a):** adding another Step 0 field bloats the input contract.

**Why (a) holds:** the dimensions are orthogonal; conflating with resolution-level loses information; explicit declaration enables predictable behavior across invocations.

**Resolution:** (a) — Step 0 declaration alongside resolution-level, with a recommended default (D2). Resolution-level and depth-level are both declared. The default coupling is documented in the spec but not enforced.

- **Confidence:** HIGH.

### Ambiguity 2: Does D4 (relevance verdict) live in /explore or sense-making?

**Counter (for sense-making):** relevance assessment involves judging items against inquiry purpose, which is interpretation.

**Why D4 stays in /explore:** the verdict at *purpose-fit* level requires only knowing the inquiry's stated Goal (from `_branch.md`); it doesn't require building a conceptual-structure model. This is different from sense-making's anchor extraction.

**But:** D4 is operationally tied to the verification-probe question (from the prior conversation interruption) that is not yet formally resolved. There are 3 verification-probe behaviors (broad scan; positive probe; negative probe); D4 is the output of the verification-probe behavior.

**Resolution:** D4 lives in /explore as **optional** and is **forward-tied** to the verification-probe question (a separate inquiry, planned).

- **Confidence:** MEDIUM-HIGH (forward dependency on verification-probe inquiry).

### Ambiguity 3: Is D0 or D1 acceptable as default?

**Counter (for D1 as default):** for high-volume coarse scans, D1 (identifier + surface form, no functional one-line) might be enough; forcing D2 might be expensive.

**Why D2 is right default:** D1 doesn't address the user's stated concern. Without a functional one-line, sense-making would still need to re-discover "what does this file do" — re-discovery work that /explore can cheaply prevent.

**Resolution:** D2 is the default minimum. D1 is permitted at coarse-resolution **only if explicitly opt-in** (user declares depth-level: D1 in Step 0). D0 is not acceptable as final output.

- **Confidence:** MEDIUM-HIGH.

### Ambiguity 4: Inter-rater agreement at edge cases (domain jargon)

In some research fields, "the dominant paradigm for X" is a high-agreement claim AMONG EXPERTS. Does that make it labeling rather than meaning?

**Resolution:** The heuristic applies at the cognitive-operation level, not the empirical-fact level. The test is: "would a scanner who reads the item but DOESN'T already have a conceptual-structure model produce this description?" — inter-rater agreement **among naive scanners**, not among experts who've already done sense-making's work.

This sharpens the heuristic to its load-bearing form.

- **Confidence:** HIGH.

### Ambiguity 5: Per-item-variable vs per-invocation-uniform depth

**Counter (per-item-variable):** different items in the same invocation deserve different detail.

**Resolution:** Depth is a per-invocation COMMITMENT. All surfaced items in an invocation aim for that depth. Items with low confidence may have partial content (empty fields) but the depth commitment remains uniform.

- **Confidence:** HIGH.

### Ambiguity 6 (load-bearing concept test on "labeling"): user-language alignment

The project's existing vocabulary uses "anchor" (sense-making), "claim" (explore-internal), "item" / "surfaced item" (iter-2). "Labeling" is introduced this iteration.

**Test:** is "labeling" intelligible without prior project calibration? Yes — common-usage term meaning "attaching identifying descriptive content." No project-specific calibration required.

**Refinement:** the spec should explicitly distinguish "labeling" from sense-making's "anchor." Both attach descriptive content to items, but at different layers: labels = identifying surface; anchors = conceptual-structure units.

- **Confidence:** HIGH.

### SV4 — Clarified Understanding

> *Each /explore-surfaced item carries content at one of five labeling levels (D0–D4): D0 bare identifier (NOT acceptable as final output); D1 identifier + surface form (observable facts); D2 D1 + functional one-line (DEFAULT MINIMUM); D3 D2 + structural adjacency (co-location facts); D4 D3 + relevance verdict (OPTIONAL; forward-tied to verification-probe question). D5+ — conceptual-role gloss or relational claims — is excluded; sense-making's territory. The labeling-vs-meaning boundary heuristic is inter-rater agreement AMONG NAIVE SCANNERS (scanners who have NOT yet built a conceptual-structure model). Per-item content depth is declared at Step 0 as a new field — depth-level — alongside resolution-level (orthogonal dimensions; default coupling documented but not enforced). Per-invocation depth commitment is uniform across surfaced items. The iter-2 NOT-list survives intact with a clarification that "meaning" = conceptual-structure meaning, not labeling. "Labeling" is distinguished from sense-making's "anchor" — labels are per-item identifying content; anchors are conceptual-structure units extracted by sense-making.*

---

## Phase 4 — Degrees-of-Freedom Reduction

### What is now fixed

| Element | Decision |
|---|---|
| Depth levels | 5 (D0–D4) |
| Default minimum | D2 (identifier + surface form + functional one-line) |
| Excluded levels | D5+ (conceptual-role gloss; relational meaning) |
| Acceptable final output | D2 default; D1 opt-in for coarse scans; D0 NOT acceptable |
| Boundary heuristic | Inter-rater agreement among NAIVE scanners |
| Depth-level placement | Step 0 declaration alongside resolution-level |
| Depth-level vs resolution-level | Orthogonal; default coupling documented but not enforced |
| Per-invocation uniformity | Uniform across surfaced items in one invocation |
| D4 (relevance verdict) | Optional + forward-tied to verification-probe question |
| NOT-list status | Survives intact; clarification added (meaning = conceptual-structure meaning) |
| Labeling vs anchor | Distinguished explicitly |
| Calibration-state items | 3 named (heuristic edge cases; default coupling; D4) |

### What is eliminated

- D0 as acceptable final output (too thin; user's concern not addressed).
- D5+ in /explore output (NOT-list).
- Depth-level as derived-only or implicit (must be explicit Step 0 declaration).
- Per-item-variable depth within one invocation.
- Inter-rater agreement among experts (must be naive scanners).

### Remaining for downstream

- *Component-level partitioning* (decompose): which spec sections get the additions?
- *Shape variants* (innovate): how is the per-item content spec phrased? Table vs prose? With examples or without?
- *Adversarial test* (critique): does the naive-scanner heuristic actually work at edge cases? Does D4's forward-tie hold under stress?

### SV5 — Constrained Understanding

The design has clear commitments. Remaining degrees of freedom are at component/shape/critique levels.

---

## Phase 5 — Conceptual Stabilization

### Accommodation Trigger Check

Did perspectives destabilize the model? **No.** Risk perspective added calibration-state flags and D4-forward-tie (accommodated). Definitional/Internal-Consistency confirmed no contradiction. Strategic added /intuit-composability implication (accommodated).

### SV6 — Stabilized Model

> **Each /explore-surfaced item carries content at one of five labeling levels (D0–D4). D0 is a bare identifier (NOT acceptable as final output — sense-making would have to re-discover everything, defeating the upstream-precondition relationship). D1 adds observable surface form (size, signature, snippet). D2 adds a functional one-line description at the inter-rater-agreement level (the DEFAULT MINIMUM — closes the user's "would have to guess" concern). D3 adds structural adjacency (co-location facts). D4 adds an optional relevance verdict (forward-tied to the open verification-probe question). D5+ — conceptual-role gloss or relational meaning claims — is excluded as sense-making's territory.**
>
> **The labeling-vs-meaning boundary is operationalized by inter-rater agreement among NAIVE scanners: "would a scanner who reads the item but has NOT yet built a conceptual-structure model produce roughly the same description?" High agreement = labeling. Low agreement (multiple defensible framings) = meaning-extraction.**
>
> **Depth-level is a new Step 0 declaration alongside the just-finished inquiry's resolution-level field. The two dimensions are orthogonal but typically coupled in practice (coarse-breadth ↔ shallow-depth; fine-breadth ↔ rich-depth). Default coupling is documented; users can override. Per-invocation depth commitment is uniform across all surfaced items in that invocation (items with low confidence may have partial content but the depth level remains).**
>
> **The iter-2 NOT-list survives intact. A clarifying note is added: "meaning" in "no meaning extraction" refers to **conceptual-structure meaning** (anchor extraction; relational claims; interpretive role assignment) — NOT to identifying labels at the inter-rater-agreement level. "Labeling" is distinguished from sense-making's "anchor" — labels are per-item identifying content (surface granularity); anchors are conceptual-structure units (sense-making's extraction).**
>
> **Three items are calibration-state-flagged: the inter-rater heuristic's edge cases (refine via observed runs); the default depth-by-resolution coupling (refine via context-budget observations); D4 (resolved fully by the planned verification-probe inquiry).**

### How SV6 Differs from SV1

| Aspect | SV1 | SV6 |
|---|---|---|
| Depth levels | "D0-D4 acceptable; D5+ excluded" | 5 levels with D2 default minimum; D1 opt-in; D0 unacceptable |
| Heuristic | "Inter-rater agreement" | Inter-rater agreement AMONG NAIVE SCANNERS |
| Spec field placement | Open | Step 0 declaration alongside resolution-level |
| D4 status | Open (in /explore or sense-making?) | Optional + forward-tied to verification-probe question |
| Per-invocation depth | Open | Uniform across surfaced items |
| NOT-list status | "Survives with clarification" | Survives intact; clarification on "meaning" = conceptual-structure meaning |
| "Labeling" terminology | Introduced | Distinguished from sense-making's "anchor" |
| Calibration-state items | Implicit | 3 explicit |

---

## Frontier (open questions for downstream disciplines)

1. *(for /decompose)* Partition the spec additions: per-item content specification (Components section); depth-level field (Step 0 / Process section); NOT-list clarification (Identity / Quality section); labeling-vs-anchor distinction (Identity section).
2. *(for /innovate)* Generate phrasings for the per-item content spec table (D0–D4 with examples). Minimal vs standard vs maximal.
3. *(for /innovate)* Generate the heuristic's operational statement: how should "naive scanner" be operationalized in practice?
4. *(for /td-critique)* Stress-test the naive-scanner heuristic at edge cases. What about items in a deeply-technical territory (compiler internals, type theory) where "naive" is hard to define?
5. *(for /td-critique)* Test the D4 forward-tie. Is "optional + forward-tied" actually workable in v1, or does it leave the spec incomplete?
6. *(open carry-forward)* The verification-probe question (from the prior conversation interruption) remains open. This inquiry's D4 is dependent on its resolution.

---

## Telemetry

- **Perspectives applied:** 8 (technical, human, strategic, risk, resource, definitional internal-consistency, frame-exit [gating FALSE — skipped], calibration-state)
- **Frame-exit gating result:** FALSE — no inherited multi-value terms across distinct propositions in committed structures.
- **New anchor types per perspective:** technical → cycle-step-depth alignment; strategic → /intuit-composability implication; risk → calibration-state flags; calibration-state → 3 named items.
- **Ambiguity resolution ratio:** 6/6 (4 HIGH, 2 MEDIUM-HIGH)
- **SV delta:** Large — SV1 ("5 levels; some open questions") → SV6 (full commitments + heuristic operationalization + Step 0 placement + forward-ties + NOT-list reconciliation)
- **Anchor diversity:** 5/5 types
- **Failure modes checked:**
  - Status Quo Bias: NO — willing to extend iter-2 + just-finished additions
  - Premature Stabilization (early-clarity): NO — risk and calibration perspectives forced refinements
  - Premature Stabilization (model-misfit): NO — no destabilizing accommodations
  - Anchor Dominance: NO — multiple anchors load-bearing (depth-level orthogonality; inter-rater-naive; NOT-list clarification)
  - Perspective Blindness: NO — risk and calibration perspectives applied
  - Clean Resolution Trap: counter stated per ambiguity with structural rebuttal
  - Self-Reference Blindness: YES applicable (sensemaking evaluating discipline content depth — both share descriptive-content vocabulary). Corrective: external grounding via /navigation's per-route content as comparator; iter-2 NOT-list as external constraint; user's stated concern as external grounding.

## Self-Assessment

**Overall: PROCEED**

The per-item content depth design is stable. Six ambiguities resolved (4 HIGH; 2 MEDIUM-HIGH where MEDIUM is due to forward-dependencies — D4 forward-tied to verification-probe question; default coupling forward-refinable). The user's concern is closed: sense-making receives operationally useful items at D2 default, not bare IDs. The iter-2 NOT-list survives intact with a clarification. Three calibration-state items named for empirical refinement. Decompose should next partition the spec additions; innovate should propose phrasings; critique should stress-test the naive-scanner heuristic.
