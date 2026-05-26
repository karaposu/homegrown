# Innovation — routeman persistence and invocation modes

## User Input

`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-24_00-20__routeman_persistence_and_invocation_modes/_branch.md`

---

## Phase 1 — Seed

**Seed:** Decomposition's 3 pieces (P1 — Rephrased Question List; P2 — Adoption Spec Sketch; P3 — Inherited Commitments Re-test) require text-generation. The seed is a piece-list inherited from upstream disciplines → **Production-task mode**.

### Methodology-Mode Consideration

- **Inherited mode:** Standard default (balanced 4G+3F; elaborate the committed direction; produce ship-ready candidate text per piece). Implied by Decomposition's handoff text ("generate candidate variations for each piece's deliverable shape").
- **Alternative mode considered:** Contrarian-rethink (Framer-weighted). What follows: would re-litigate whether the user's proposals should be accepted at all; would surface contrarian alternatives like "maybe routeman shouldn't have persistence" or "maybe the protocol-overlap is illusory."
- **Decision:** DEFAULT — use inherited mode. The user committed direction; the inquiry's value is EXPOSING protocol-overlap + ADJUDICATING the adoption; contrarian-rethink would re-litigate vs adjudicate. The per-piece Inversion rule (forthcoming at Phase 2) already provides per-piece contrarian alternatives, so coverage of the contrarian axis is preserved without switching the run mode.

### Meta-Decision-Piece Classification

| Piece | Properties fired | Meta-decision? |
|---|---|---|
| **P1** (Question List) | (b) framing-semantic = 3-bucket SETTLED/NUANCE/OPEN frame; (c) lesson-vocabulary = `protocol overlap` | **YES** |
| **P2** (Adoption Spec) | (a) relationship-label = adoption-extends-protocol; (d) evaluation-criterion = placement-rule + lifecycle-rule; (e) intervention-shape = ADD-CONTENT | **YES** + property (v) fires |
| **P3** (Re-test) | (a) relationship-label = PRESERVED/EXTENDED/CORRECTED/FLAGGED; (d) evaluation-criterion = verdict-taxonomy | **YES** |

All three pieces are meta-decision pieces → **Piece-Level Inversion Rule applies to all three.** P2 additionally fires property (v) → **Intervention-Shape-Axis Inversion required for P2's Inversion-candidate.**

---

## Phase 2 — Generate

### Coverage plan

Across the 3 pieces, applying all 7 mechanisms with each piece getting at least 1G + 1F + 1 Inversion-candidate (per piece-level rule).

| Piece | Generators | Framers | Inversion-candidate |
|---|---|---|---|
| P1 | Combination, Absence Recognition | Lens Shifting | Inversion (root-as-decision-tree, content-axis) |
| P2 | Domain Transfer, Extrapolation | Constraint Manipulation (ADD + REMOVE) | Inversion (intervention-shape-axis: ADD-CONTENT vs REORGANIZE-WITHOUT-ADDING vs DO-NOTHING) |
| P3 | Combination | Lens Shifting | Inversion (direction-reversal, content-axis) |

Mechanism totals: Generators 4/4 (Combination ×2, Absence Recognition, Domain Transfer, Extrapolation); Framers 3/3 (Lens Shifting ×2, Constraint Manipulation, Inversion ×3). **Full coverage.**

---

### P1 — Rephrased Question List

#### P1-G (Generic — standard 7-question list)

> **Mechanism: Combination** (user-language phrasing + status-labels + FF pointers)

```
Q1 — "Does routeman have two distinct invocation modes (generic discovery vs directional/topic-scoped expansion), and are they separate procedures or scope-variants of one?"
  → STATUS: SETTLED. The two modes already exist as stage-1 (Route Map; whole-territory enumeration) and stage-2 (sub-route expansion under a parent) from the staged-mapping adoption (2026-05-23_18-58). They are scope-variants of one procedure, not separate procedures.

Q2 — "Should each inquiry folder carry a persistent-memory sidecar file (the user-proposed `_navig.md`) for routeman state, analogous to `_state.md`?"
  → STATUS: SETTLED. Yes — but the mechanism is not new. The user's `_navig.md` IS functionally the existing `multi_resolution_navigation.md` protocol's `_frontier.md` (frontier ledger + readable run summary + resume instruction). Adoption is mechanism-verbatim; naming is user-aligned via alias note. See P2.

Q3 — "On re-invocation in generic mode, should routeman read prior persistent-memory files to recalibrate existing directions and optionally decompose/create new ones?"
  → STATUS: SETTLED. Yes — this IS the protocol's resume mechanism (read frontier ledger → update candidate records (status/priority) → extend frontier with new candidates). The user's 3 sub-steps map directly.

Q4 — "On re-invocation in directional mode, should routeman scan a parent-route's child sub-folders for prior persistent-memory and apply the same recalibration steps?"
  → STATUS: SETTLED. Yes — same protocol mechanism, scoped to the parent-route's child-map (`output_root/children/<route-id>/`).

Q5 — "Should routeman adopt `cognitive_harness/protocols/branch_inquiry.md` for organizing route expansion?"
  → STATUS: SETTLED-WITH-NUANCE. Two-tier policy: (a) SUB-ROUTE EXPANSION uses `multi_resolution_navigation`'s child-map convention (sub-routes are route-map entries, not inquiries); (b) ROUTE-TO-INQUIRY PROMOTION (when a route is selected for full SIC investigation) uses `branch_inquiry.md`. The precise threshold for promotion is FF-1 (open). See P2 for boundary commitment.

Q6 — "Is the content-vs-control file-split (`routeman.md` for enumerations; `_navig.md` for metadata/status with a pointer to `routeman.md`) the right structural axis, and how should the files be named?"
  → STATUS: SETTLED. The split is structurally right — protocol's existing split (`navigation.md` = content; `_frontier.md` = control) confirms the user's intuition. Naming: user-aligned `routeman.md` + `_navig.md` with documented alias to protocol terms. See P2.

Q7 (meta) — "Have these questions been rephrased clearly, organized, and decoupled so each is testable and the residual open questions are explicit?"
  → STATUS: PRIMARY DELIVERABLE. Yes — Q1-Q6 cover the user's 6 topics with clear status; FF-1 through FF-5 capture residual open questions for follow-up. See P3 for the re-test of inherited commitments.
```

#### P1-F (Focused — cluster summary first, then list)

> **Mechanism: Absence Recognition** — patch-level absence: "no upfront reframing that exposes the protocol-overlap as the central finding." Adds a 2-3 sentence cluster-summary lead-in.

```
**Central reframing.** All 6 user proposals reduce to ONE design move: adopt `cognitive_harness/protocols/multi_resolution_navigation.md` as routeman's persistence mechanism, with (i) user-aligned file names (`_navig.md` + `routeman.md`) backed by alias note; (ii) hybrid placement by invocation scope; (iii) two-tier boundary with `branch_inquiry.md` (sub-routes vs promoted-to-inquiry); (iv) protocol's lifecycle (persistent + in-place + append). The "two modes" are settled (= staged-mapping stages from 18-58).

**Question list** (each linked to the central reframing):

Q1 — Two modes? → SETTLED via 18-58.
Q2 — `_navig.md`? → SETTLED via protocol adoption.
Q3 — Recalibration (generic)? → SETTLED via protocol resume mechanism.
Q4 — Recalibration (directional)? → SETTLED via protocol resume mechanism, scoped.
Q5 — branch_inquiry adoption? → SETTLED-WITH-NUANCE: two-tier policy.
Q6 — File split? → SETTLED via protocol's content/control split + hybrid naming.
Q7 (meta) — Rephrasing complete? → YES; FF-1 to FF-5 = residual opens.
```

#### P1-C (Contrarian — Inversion-candidate, content-axis)

> **Mechanism: Inversion.** Assumption reversed: "the 7 questions are a flat list of independent items." → Reversed: "the 7 questions are NOT a list; they're a single decision tree descending from one root question."

```
**Root decision:** "Is the protocol overlap real — does `multi_resolution_navigation.md` already specify what the user proposes?"
│
├── YES (current verdict per Surfacing + Sensemaking)
│   ├── Q1, Q2, Q3, Q4 → SETTLED via protocol (no further work)
│   ├── Q5 → SETTLED-WITH-NUANCE (two-tier policy)
│   └── Q6 → SETTLED (hybrid naming)
│
└── NO (counterfactual branch — preserved for falsifiability)
    ├── If routeman has needs the protocol can't express, design from scratch
    ├── Triggers: schema gaps surface; placement-by-scope fails; alias creates two-vocabulary friction
    └── Re-invoke this inquiry with the trigger as new evidence
```

**Why reversed:** the flat-list framing presents the questions as DISCRETE design problems, but Sensemaking found they all descend from one structural insight (protocol-overlap). The decision-tree shape EXPOSES that descent and preserves a falsifiability branch (NO → re-design). The list shape hides both.

**What follows from Inversion-candidate:** if adopted, the deliverable becomes a 1-page decision-tree diagram + per-leaf brief reasoning, rather than a 7-row question list. Trade-off: more navigable per the central insight; less navigable per the user's "list them" wording.

---

### P2 — Adoption Spec Sketch

#### P2-G (Generic — standard 5-sub-commitment spec)

> **Mechanism: Domain Transfer.** Source domain — manufacturing: "standardized interface + per-vendor extensions." The protocol = standard; routeman's needs = vendor-specific extensions. Source domain — native (computing): API library + per-consumer config + per-consumer extensions (e.g., a database driver implementing a standard SQL interface with vendor-specific extension functions).

```
## Routeman's Adoption of `multi_resolution_navigation.md`

### 1. Mechanism (PRESERVE protocol verbatim)
Routeman's persistence + recalibration use the protocol's frontier-candidate-record schema + resume semantics. Routeman is a CONSUMER of the protocol; the protocol is name-agnostic at the mechanism level.

### 2. Naming (user-aligned aliases)
- File names in routeman contexts: `_navig.md` (= protocol's `_frontier.md`) and `routeman.md` (= protocol's `navigation.md`).
- Documented alias note added to the protocol's spec: "When consumed by routeman, the canonical names are `_navig.md` and `routeman.md`; the protocol's mechanism is unchanged."
- Routeman SKILL.md uses `_navig.md` + `routeman.md` throughout.

### 3. Placement (hybrid by invocation scope)
- INQUIRY-SCOPED invocation (e.g., "what's next for THIS inquiry's route map"): files in the inquiry folder.
- PROJECT-SCOPED invocation (generating top-level directions across the codebase): files in `devdocs/navigation/<run-id>/` per protocol convention.
- Scope determination: parent-route identifier present at invocation → INQUIRY-SCOPED if invoked within an inquiry folder, PROJECT-SCOPED otherwise. (Determination mechanism is FF-1 with the threshold question; this commits the placement RULE but defers the threshold detail.)

### 4. Lifecycle (protocol's pattern)
- Persistent across invocations.
- In-place status evolution (queued → scheduled → expanded → ...) per protocol's status vocabulary.
- Append for new candidates discovered on re-invocation.
- Revision-reason logged via protocol's `expansion_reason` + `scheduling_reason` fields; routeman-specific revision-history field deferred to FF-3.

### 5. Boundary with `branch_inquiry.md` (two-tier policy)
- SUB-ROUTE EXPANSION (route-map entries): use `multi_resolution_navigation`'s child-map convention (`output_root/children/<route-id>/navigation.md`).
- ROUTE-TO-INQUIRY PROMOTION (route selected for full SIC investigation): use `branch_inquiry.md` to spawn a child inquiry with its own pipeline.
- Threshold for promotion: FF-1 (open).

### 6. Routeman-specific schema extensions (deferred to FF-2)
- Meta-reasoning field versioning (the `why_this_might_be_important` field from 18-58; persists across recalibrations).
- Mode-switch history (when routeman is invoked in generic vs directional mode on the same scope, how is this logged?).
- These extensions are SKILL.md authoring concerns; the spec commits the EXISTENCE of extensions but defers their schema.
```

#### P2-F (Focused — concrete schema deltas)

> **Mechanism: Extrapolation.** Trend: project moves toward multi-head loops + merging loops + Baldwin cycle endgame (per user-memory). Persistence must support concurrent multi-head writes + cross-head reconciliation. Extrapolation flags this as future requirement; current spec should not block it.

```
**Concrete schema deltas** for routeman SKILL.md authoring (extends protocol's frontier-candidate-record):

| Field | Inherits from protocol | Extended | Reason |
|---|---|---|---|
| `candidate_id` | YES | — | Protocol-native |
| `parent_map` | YES | — | Protocol-native |
| `parent_route` | YES | — | Protocol-native |
| `route_type` | YES | + routeman-specific types | Routeman's design memo enumerates types beyond protocol's |
| `priority` | YES | — | Protocol-native |
| `status` | YES | — | Protocol-native status vocabulary applies |
| `expansion_reason` | YES | — | Protocol-native |
| `eligibility` | YES | — | Protocol-native |
| `eligibility_reason` | YES | — | Protocol-native |
| `scheduling_reason` | YES | — | Protocol-native |
| `child_map_path` | YES | — | Protocol-native |
| `blocked_by` | YES | — | Protocol-native |
| `continuation_note` | YES | — | Protocol-native |
| `why_this_might_be_important` | NO | **+ ADD** (versioned) | Per 18-58's meta-reasoning field; versioning needed for recalibration audit |
| `meta_reasoning_revision_history` | NO | **+ ADD** (optional) | If revision-reason logging is more than protocol's `*_reason` fields, this captures the trail |
| `mode_switch_log` | NO | **+ ADD** | Records when this candidate was created in generic vs directional mode; for FF-strat-pattern + cross-head reconciliation |
| `routeman_invocation_id` | NO | **+ ADD** | For multi-head loop attribution (extrapolation-driven) |

**Multi-head extrapolation:** if the project reaches multi-head loops where N parallel routeman heads write to the same `_navig.md`, the schema must support per-head attribution (`routeman_invocation_id` + last-writer-wins OR merge semantics). Current spec defers this to a future inquiry but COMMITS that the schema CAN accommodate it (i.e., doesn't bake in single-head assumptions).
```

#### P2-C (Contrarian — Inversion-candidate, intervention-shape axis REQUIRED per property-(v) rule)

> **Mechanism: Inversion (intervention-shape axis).** Current shape: **ADD-CONTENT** (the spec adds new commitments — naming, placement, lifecycle, boundary, extensions). Reversed → alternative shapes:

> **Alternative shape 1: REORGANIZE-WITHOUT-ADDING.** Don't add commitments; produce only an alias-and-pointer doc. The routeman SKILL.md becomes a 1-paragraph pointer: "Routeman uses `multi_resolution_navigation.md`. Files are named `_navig.md` (= `_frontier.md`) and `routeman.md` (= `navigation.md`). See the protocol for all details." Mechanism is preserved; naming is mapped; nothing new is committed.

> **Alternative shape 2: DO-NOTHING.** Point routeman directly at the protocol's existing files (`_frontier.md` + `navigation.md`). Don't rename. Don't add commitments. The user-language alignment loses; protocol-vocabulary preservation wins.

> **What follows if shape Y is committed instead of X:**
> - REORGANIZE: spec authoring is minimal; no risk of under-specifying routeman extensions because no extensions are committed; routeman-specific needs (meta-reasoning versioning, multi-head reconciliation) become deferred to "we'll write a follow-up doc when needed"; user-language alignment preserved via alias.
> - DO-NOTHING: minimal cognitive load; loses user-language alignment; loses routeman-specific extension surface; if the project later needs multi-head support, the protocol must absorb it (not routeman); creates pressure on the protocol's evolution.

> **Comparison.**
>
> | Shape | Pro | Con |
> |---|---|---|
> | ADD-CONTENT (P2-G) | Captures routeman-specific needs; user-language aligned; explicit extension hooks | Larger spec; alias creates two-vocabulary surface; risk of under-specifying extensions |
> | REORGANIZE | Minimal spec; user-language preserved; defer extensions | Routeman-specific needs invisible until they bite |
> | DO-NOTHING | Smallest cognitive footprint; one vocabulary | Loses user-language alignment; loses routeman-extension hooks |

> **Recommendation pending Critique:** ADD-CONTENT (P2-G) appears correct because (i) routeman-specific extensions ARE needed (meta-reasoning versioning per 18-58; multi-head per extrapolation); (ii) user-language alignment is supported by 18-58's LLM-operational-design principle. But REORGANIZE is a reasonable mid-point if Critique flags ADD-CONTENT as over-specified.

#### P2-additional (Constraint Manipulation — both directions per refinement)

> **Mechanism: Constraint Manipulation (ADD direction).** Constraint added: "must work in the isolated-session file-scanning architecture (per 16-31)." Implication: ALL spec commitments are file-based; no in-memory state assumptions; recalibration MUST work from disk reads alone. Verifies P2-G commitments don't accidentally assume in-context state. PASS — all commitments are file-shaped.

> **Mechanism: Constraint Manipulation (REMOVE direction).** Constraint removed: "user-language alignment is sacred." Implication: P2-DO-NOTHING (use protocol-native names) becomes valid. The constraint-removal demonstrates that the naming decision IS contingent on the user-language principle; remove the principle, and DO-NOTHING is structurally cleaner. This is recorded as a sensitivity check rather than a recommendation flip.

---

### P3 — Inherited Commitments Re-test

#### P3-G (Generic — standard verdict table)

> **Mechanism: Combination** (verdict taxonomy + evidence citation + downstream-impact note).

```
| Prior | Commitment | Verdict | Reason / Impact |
|---|---|---|---|
| **2026-05-23_11-30** (input-dependency anchor) | Routeman's input-dependency relation to cycle artifacts | PRESERVED | Adoption operates on file-scanned inquiry artifacts; the dependency is unchanged. |
| **2026-05-23_14-39** (design memo) | 3-layer identity (Navigational paradigm + cycle-consumer + prescriptive-extension) | PRESERVED | The persistence model lives within all 3 layers; doesn't redefine any. |
| | 10 features (including F-seed; F-revisit; F-adaptive-guidance) | PRESERVED + EXTENDED | F-seed input-contract gains a `_navig.md` input source (read prior persistence); F-revisit semantics align with the protocol's recalibration. |
| | 17-attribute schema (post-staged-mapping) | EXTENDED | Schema accommodates protocol's frontier-candidate-record fields + 4 routeman-specific deltas (per P2-F). |
| | 9-mode LAYER-2 failure framework | PRESERVED | Persistence doesn't introduce a new LAYER-2 mode (revision-history can be checked via existing audit substrate). |
| **2026-05-23_15-20** (frontier questions) | 9 surviving frontier questions | PRESERVED + EXTENDED | Q5 (file-system protocol) gains protocol-adoption answer; Q6 (file-shape) gains schema-extension delta; Q4 (LAYER-2 audit) gains `_navig.md` as audit substrate. |
| **2026-05-23_16-31** (cycle-consumer correction) | Isolated session + file-scanning + parallel workers + singleton navigator | PRESERVED | The persistence model READS `_navig.md` files via the same file-scanning mechanism. Architecture-compatible. |
| **2026-05-23_18-58** (staged mapping + meta-reasoning) | Hybrid two-stage staging (stage-1/stage-2) | PRESERVED — the two user-proposed "modes" ARE these stages | Direct mapping. |
| | Per-Route `why_this_might_be_important` field | PRESERVED + EXTENDED | Field persists across recalibrations; routeman-specific versioning extension flagged (FF-2). |
| | LLM-operational-characteristics-as-design-input principle | PRESERVED + APPLIED | The hybrid naming decision (`_navig.md` + `routeman.md`) is an application of this principle. |
| | 5 frontier flags FF-1 to FF-5 (from 18-58) | PRESERVED | Distinct numbering from THIS inquiry's FF-1 to FF-5; both sets coexist. |
| **`branch_inquiry.md`** protocol | Child-inquiry creation + parent reference + `_branches.md` index | PRESERVED (applied at promotion threshold only) | Two-tier policy: applied at route-to-inquiry promotion; NOT applied to sub-routes. |
| **`multi_resolution_navigation.md`** protocol | Frontier-candidate-record + resume + child-map | **NEW ADOPTION** | This is the new commitment; not inherited. |
```

#### P3-F (Focused — explicit before/after for EXTENDED commitments)

> **Mechanism: Lens Shifting.** Under conditions where Critique catches a subtle contradicted-commitment, the re-test needs explicit before/after framing. Lens shifts from "list verdicts" to "for each EXTENDED verdict, show what's preserved + what's added."

```
**EXTENDED commitments (detailed before/after):**

### 14-39's Feature F-seed input-contract
- BEFORE (per design memo): F-seed inputs = `corpus_limit_seeds` (file-scanned per 16-31 correction)
- AFTER: F-seed inputs = `corpus_limit_seeds` + `_navig.md` (read prior persistence as seed for recalibration)
- Justification: the persistence model REQUIRES recalibration to read prior `_navig.md` files; F-seed naturally consumes this as input.

### 14-39's 17-attribute schema
- BEFORE: 17 attributes per Route (post-18-58 adoption); 18 for sub-routes (parent-reference field)
- AFTER: same base 17/18 + 4 routeman-specific deltas (per P2-F) = 21 base / 22 sub-route
- Justification: routeman-specific extensions (meta-reasoning versioning; multi-head attribution).

### 18-58's `why_this_might_be_important` field
- BEFORE: required per-Route field (length-bounded)
- AFTER: required per-Route field + version-history-aware (revision_history captures recalibration changes)
- Justification: recalibration semantics mean the field may evolve across invocations; version history is the audit substrate.

### 15-20's Q4 (LAYER-2 audit)
- BEFORE: open frontier question — audit substrate undefined
- AFTER: `_navig.md` files provide cross-invocation audit trail; LAYER-2 audit can inspect them
- Note: Q4 is NOT closed by this — the audit substrate is now identified, but the audit MECHANISM remains open.

### 15-20's Q5 (file-system protocol)
- BEFORE: open frontier question — file-name + folder topology undefined for routeman
- AFTER: `_navig.md` + `routeman.md` + hybrid placement-by-scope specified per P2
- Justification: P2 commits the file-system protocol.

### 15-20's Q6 (file-shape constraints)
- BEFORE: open frontier question — `_navig.md` schema undefined
- AFTER: schema = protocol's frontier-candidate-record + 4 routeman-specific deltas (per P2-F)
- Justification: P2-F enumerates the deltas.
```

#### P3-C (Contrarian — Inversion-candidate, direction-reversal)

> **Mechanism: Inversion.** Assumption reversed: "test priors AGAINST the adoption (do priors survive?)." → Reversed: "test the adoption AGAINST each prior (does the adoption survive the prior?)."

```
**Counter-question framework:**

| Prior commitment | Does adoption SURVIVE it? | Surgical-correction if not |
|---|---|---|
| 16-31's isolated-session architecture | SURVIVES — adoption reads `_navig.md` from disk, same isolated session | None needed |
| 14-39's prescriptive-extension layer (4 features) | SURVIVES — persistence doesn't bypass prescriptive content; adaptive guidance still composes pointers from loop outputs | None needed |
| 18-58's meta-reasoning field requirement | SURVIVES + EXTENDS — field is preserved; recalibration adds version-history | None needed; FF-2 captures versioning detail |
| 11-30's input-dependency anchor | SURVIVES — persistence doesn't bypass the dependency; it adds cross-invocation continuity ON TOP | None needed |
| `branch_inquiry.md`'s runner-contract requirement | CONSTRAINS adoption — the two-tier policy is a direct consequence (sub-routes can't use branch_inquiry because they lack a runner) | None needed; the constraint produced the policy |
| 18-58's "LLM-operational-design" principle | CONSTRAINS adoption — naming decision is user-aligned BECAUSE of this principle | None needed; the constraint produced the naming |
```

**What this Inversion reveals:** The contrarian direction surfaces that priors actively CONSTRAIN the adoption (branch_inquiry's runner-contract; LLM-operational-design's user-language preference). The two-tier policy + hybrid naming are NOT free design choices — they're the only options that survive the prior constraints. The verdict-table direction-reversal preserves this insight that the forward direction (do priors survive adoption?) hides.

**Disposition:** RE-TEST TRIGGER consideration — does this contrarian framing imply any committed claim should be re-tested? Look at P2's commitments: the two-tier policy + hybrid naming. P3-C's reversal shows they're FORCED-MOVES, not free choices. This doesn't re-test the commitments (they're still correct); it RECONTEXTUALIZES them. P2 may benefit from a one-line note explaining "the two-tier policy and hybrid naming are derived from prior constraints, not from local optimization." Flagged as a P2 refinement consideration for Critique.

---

## Inherited Frame Audit (between Phase 2 and Phase 3)

### Seed-level central assumption

The seed framing (Decomposition's handoff) carries: "The user's proposals largely overlap with `multi_resolution_navigation.md`; the inquiry adopts the protocol."

**Challenge scan:** Does any candidate explicitly challenge this?
- **P1-C (decision-tree root):** "Is the protocol overlap real?" — explicitly preserves a NO branch + names triggers that would invalidate the overlap. ✓ EXPLICIT CHALLENGE.
- **P2-C (REORGANIZE / DO-NOTHING):** challenges whether routeman should ADD-CONTENT (intervention-shape), not whether the overlap is real. Doesn't challenge the central assumption.
- **P3-C (direction-reversal):** challenges the test direction but accepts the adoption; doesn't challenge the central assumption.

**Verdict:** Seed-level central assumption EXPLICITLY CHALLENGED by P1-C. Audit does NOT fire at seed level. ✓

### Piece-level commitments

| Piece | Load-bearing commitment | Challenged? |
|---|---|---|
| P1 (b: framing-semantic) | 3-bucket SETTLED/NUANCE/OPEN frame applied to a flat list | P1-C REFRAMES as decision-tree → ✓ challenged |
| P1 (c: lesson-vocabulary) | "protocol overlap" as a stable concept | P1-C's NO branch challenges its applicability → ✓ challenged |
| P2 (a: relationship-label) | adoption-extends-protocol | P2-C's DO-NOTHING challenges whether adoption needs an extension layer → ✓ challenged |
| P2 (d: evaluation-criterion) | placement-rule + lifecycle-rule | Not explicitly challenged by any candidate. **AUDIT FIRES at this commitment.** |
| P2 (e: intervention-shape) | ADD-CONTENT | P2-C's REORGANIZE + DO-NOTHING challenge → ✓ challenged |
| P3 (a: relationship-label) | PRESERVED/EXTENDED/CORRECTED/FLAGGED | Not explicitly challenged by any candidate. **AUDIT FIRES at this commitment.** |
| P3 (d: evaluation-criterion) | verdict-taxonomy | P3-C's direction-reversal challenges the implicit asymmetry → ✓ challenged |

### Audit fires for two commitments

**Firing 1: P2's evaluation-criterion (placement-rule + lifecycle-rule).** Type = Constraint (placement-rule constrains where files go; lifecycle-rule constrains how files evolve). Per dispatch table → invoke **Constraint Manipulation REMOVE direction.**

REMOVE placement-rule: "what if there's NO scope-based placement — files always live in ONE location?" Follows: either always per-inquiry (loses central convention's cross-inquiry aggregation) or always central (loses per-inquiry visibility for inquiry-scoped invocations). Removing the rule loses BOTH scopes' affordances. → The hybrid IS the necessary compromise; removing it loses value. NEW CANDIDATE C-AUDIT-1: "Hybrid placement is non-removable; one-location designs are dominated." Add to candidate set.

REMOVE lifecycle-rule: "what if the lifecycle is NOT 'persistent + in-place + append' — it's some other model?" Alternatives: (i) snapshot-per-invocation; (ii) append-only-log without in-place evolution; (iii) full revision-history per field. Removing the protocol's specific lifecycle yields valid alternatives but none clearly dominates. → NEW CANDIDATE C-AUDIT-2: "Lifecycle policy has 3+ alternatives; the protocol-default is one; explicit choice deferred to FF-3 with criteria for selecting." Add to candidate set.

**Firing 2: P3's relationship-label (verdict-taxonomy).** Type = Lesson-vocabulary (PRESERVED/EXTENDED/CORRECTED/FLAGGED is named vocabulary the finding applies). Per dispatch table → Lesson-vocabulary maps closest to Design-choice (the taxonomy IS a design choice about how to label re-test verdicts) → invoke **Absence Recognition redesign-level.**

If designed from scratch today, would the verdict taxonomy be PRESERVED/EXTENDED/CORRECTED/FLAGGED? Bidirectional check:
- (i) What's missing: a verdict for "ADOPTION DERIVES FROM this commitment" (when a prior commitment FORCED the adoption's shape — see P3-C). The current taxonomy doesn't have this.
- (ii) What's already present in different form: the protocol's `expansion_reason` field captures "why this expansion happened" — a similar shape; the re-test could borrow.

→ NEW CANDIDATE C-AUDIT-3: "Add 5th verdict DERIVED-FROM for prior commitments that forced adoption shape (per P3-C insight). Taxonomy becomes PRESERVED/EXTENDED/CORRECTED/FLAGGED/DERIVED-FROM." Add to candidate set.

### Re-evaluate after orchestration

Now: C-AUDIT-1 + C-AUDIT-2 + C-AUDIT-3 added to candidate set. Re-scan: do they cover the previously-un-challenged commitments?
- P2's evaluation-criterion: C-AUDIT-1 + C-AUDIT-2 explicitly challenge the placement-rule and lifecycle-rule via REMOVE direction. ✓
- P3's relationship-label: C-AUDIT-3 explicitly challenges the verdict-taxonomy via Absence Recognition redesign-level. ✓

**Audit no longer fires.** Proceed to Phase 3 Test.

---

## Phase 3 — Test

### 5-test cycle per candidate

| Candidate | Novelty | Scrutiny Survival | Fertility | Actionability | Mechanism Independence | Disposition |
|---|---|---|---|---|---|---|
| P1-G | LOW (standard format) | HIGH (each question structurally defensible per Sensemaking) | MED (opens follow-up FF work) | HIGH (user can read + decide) | YES — reachable via Combination AND directly from Sensemaking SV6 | **ACTIONABLE** |
| P1-F | MED (cluster-summary is the novelty) | HIGH (the lead-in is supported by Sensemaking's central reframing) | HIGH (the lead-in directly answers "what did you find?") | HIGH | YES — reachable via Absence Recognition AND any reader-respecting heuristic | **ACTIONABLE** |
| P1-C | HIGH (decision-tree shape is novel) | MED (departs from user's "list them" wording; structural defense via falsifiability) | HIGH (NO branch opens follow-up triggers) | MED (more abstract than list; requires user to navigate tree) | NO — only Inversion produces this; single-mechanism dependence | **DEFERRED with revival trigger**: revive if user feedback shows confusion with list format OR if a follow-up inquiry needs the falsifiability branch explicit |
| P2-G | LOW (standard spec) | HIGH (each commitment grounded in Sensemaking) | HIGH (commits enable SKILL.md authoring) | HIGH (concrete commitments) | YES — reachable via Domain Transfer (manufacturing analogue) AND directly from Sensemaking SV6 | **ACTIONABLE** |
| P2-F | MED (concrete schema deltas) | HIGH (each delta justified by routeman-specific need) | HIGH (deltas can be reviewed individually) | HIGH (table format is directly usable) | YES — reachable via Extrapolation AND Sensemaking's extension-list | **ACTIONABLE** (complements P2-G; not alternative) |
| P2-C (REORGANIZE) | MED (alternative shape; surfaces the "minimal spec" option) | MED (loses routeman-specific extensions; trade-off explicit) | MED (if chosen, defers routeman-specific work; could be deferred) | MED (depends on whether extensions are needed soon) | NO — only Inversion produces this (intervention-shape axis) | **DEFERRED with revival trigger**: revive if Critique flags P2-G as over-specified |
| P2-C (DO-NOTHING) | MED (degenerate shape) | LOW (loses user-language alignment which is a tested principle) | LOW (closes routeman-specific surface) | HIGH (zero work) | NO — only Inversion produces this | **REJECTED** (fails scrutiny on user-language ground) — preserved as new seed: "is the user-language principle ALWAYS load-bearing, or are there cases where protocol-native wins?" |
| P2-additional ADD (file-scanning constraint check) | LOW (sensitivity check) | HIGH (all commitments PASS) | MED (confirms architecture-compatibility) | HIGH (no action needed; verifies) | YES — would be reached by any architecture-aware reviewer | **ACTIONABLE as verification note** |
| P2-additional REMOVE (user-language principle) | LOW (already explored via P2-C-DO-NOTHING) | MED (recapitulates) | LOW | MED | YES (overlaps with P2-C) | **MERGED into P2-C-DO-NOTHING** (avoids redundant entry) |
| P3-G | LOW (standard table) | HIGH (verdicts grounded) | HIGH (enables cross-doc impact updates) | HIGH | YES — Combination AND any auditor-mode reading | **ACTIONABLE** |
| P3-F | MED (explicit before/after for EXTENDED) | HIGH (each before/after grounded in prior text) | HIGH (the deltas are reusable for SKILL.md authoring + impact notes) | HIGH | YES — Lens Shifting AND careful reading of priors | **ACTIONABLE** (complements P3-G) |
| P3-C (direction-reversal) | HIGH (reveals priors AS constraints on adoption, not just things-to-preserve) | HIGH (survives — the insight is structurally grounded) | HIGH (recontextualizes the two-tier + hybrid-naming as forced-moves) | MED (insight is meta; less immediately actionable than P3-G) | NO — only Inversion | **RE-TEST TRIGGER**: P3-C's insight implies P2's two-tier + hybrid-naming commitments deserve a one-line note explaining their derivation from prior constraints |
| C-AUDIT-1 (hybrid placement non-removable) | MED (sensitivity-check finding) | HIGH (one-location designs dominated) | LOW (closes a question rather than opening new) | HIGH (confirms the spec's placement decision) | YES — Constraint Manip + any sensitivity-checking review | **ACTIONABLE as verification note** |
| C-AUDIT-2 (lifecycle has alternatives; deferred to FF-3) | MED (surfaces lifecycle alternatives) | HIGH (alternatives exist and are valid) | HIGH (FF-3's scope becomes clearer) | HIGH (FF-3 inherits the alternative list) | YES — Constraint Manip + any design-alternatives review | **ACTIONABLE as FF-3 input** |
| C-AUDIT-3 (5th verdict DERIVED-FROM) | HIGH (new verdict label) | MED (requires evidence the label adds value; P3-C's insight is one case) | MED (could be applied to other re-tests in future) | HIGH (one-line label addition) | NO — Absence Recognition only | **DEFERRED with revival trigger**: revive if 2+ inquiries surface commitments-as-constraints insight |

### Test summary

- 14 candidates produced; 11 ACTIONABLE/verification/FF-input; 3 DEFERRED with revival triggers; 1 REJECTED (preserved as new seed); 1 RE-TEST TRIGGER firing on P2.

### RE-TEST TRIGGER processing

**P3-C's content implies P2's two-tier + hybrid-naming should carry a derivation note.** Re-test:
- P2-G commits two-tier policy + hybrid naming.
- P3-C's insight: these are FORCED MOVES (derived from branch_inquiry's runner-contract + LLM-operational-design principle), not free choices.
- Re-test verdict: P2-G commitments STAND (no change to the commitment); P2-G should ADD a one-line note: "The two-tier policy + hybrid naming are derived from prior constraints (branch_inquiry's runner-contract + LLM-operational-design principle), not local optimization."
- This is an additive refinement to P2-G, not a contradiction. Apply at Critique's discretion or at CONCLUDE-side spec assembly.

### Artifact-grounding (6th conditional test)

Does any candidate produce categorical claims about project state that need artifact-checking? Yes:
- P2-G's claim "alias note added to the protocol's spec" — verifies that the protocol can carry an alias note. CHECK: `cognitive_harness/protocols/multi_resolution_navigation.md` is editable; adding an alias section is feasible. ✓
- P3-G's verdicts on prior commitments — verifies each prior's commitment exists as claimed. Cross-referenced against Sensemaking's anchor extraction (which read all priors). ✓
- C-AUDIT-3's claim "the protocol's `expansion_reason` field captures 'why this expansion happened'" — verifies the field exists. CHECK: Surfacing entry 22 lists the protocol's schema including `expansion_reason`. ✓

### Axis coverage check

Orthogonal axes in this problem:
1. **Content axis** (what is written): covered by P1-G/P2-G/P3-G + variations.
2. **Shape axis** (how it's written; intervention-shape): covered by P1-C (decision-tree shape) + P2-C (REORGANIZE / DO-NOTHING alternatives).
3. **Direction axis** (which subject is the "test target"): covered by P3-C (direction-reversal).
4. **Frame axis** (single-decision-tree vs flat-list framing): covered by P1-C.
5. **Constraint axis** (which rules constrain the adoption): covered by C-AUDIT-1 + C-AUDIT-2.
6. **Vocabulary axis** (verdict labels): covered by C-AUDIT-3.

All 6 identified axes have at least one candidate variant. **PASS.**

### Mechanism Independence shared-input check

P1-G + P2-G + P3-G all derive from Sensemaking's SV6 — same upstream. Convergence may be SPURIOUS (tautological from shared input). Counter-test: the P2-C and P3-C contrarian candidates EXPLICITLY challenge SV6's framing; the convergence isn't blind. The shared-input is the inquiry's stabilized model, which is the LEGITIMATE shared ground (per Sensemaking's job). Not spurious in the negative sense; just upstream-grounded. **PASS with note.**

---

## Assembly Check

Combine the ACTIONABLE candidates: P1-G + P1-F (interchangeable; F is enriched) + P2-G + P2-F + P3-G + P3-F + C-AUDIT-1 + C-AUDIT-2 (as FF-3 input).

**Emergent finding-shape:**

The inquiry's finding can assemble as:
1. **Opening (from P1-F's central reframing):** "All 6 user proposals reduce to one design move: adopt `multi_resolution_navigation.md` with hybrid naming + scope-dependent placement + two-tier branch_inquiry boundary."
2. **Question list (from P1-G or P1-F):** 7 rephrased questions with status labels.
3. **Adoption spec (from P2-G + P2-F):** 5 sub-commitments + concrete schema deltas + derivation note (per P3-C RE-TEST TRIGGER).
4. **Re-test (from P3-G + P3-F):** verdict table + before/after for EXTENDED commitments.
5. **FF list (residual opens):** FF-1 (promotion threshold) + FF-2 (schema extensions) + FF-3 (lifecycle policy with alternative list per C-AUDIT-2) + FF-4 (cross-inquiry aggregation) + FF-5 (`_navig.md` ↔ `_state.md` relationship) + FF-strat-pattern (generalization research-frontier).
6. **Inherited commitments re-test section (from P3-G + P3-F + P3-C's recontextualization note).**

**Cross-piece coherence:** the central reframing (P1-F) coheres with the spec (P2) and the re-test (P3). The DEFERRED P1-C and P2-C-REORGANIZE alternatives are preserved for revival if the assembled finding fails downstream tests.

**Emergent insight (not in any individual piece):** the inquiry's PRIMARY VALUE is not the rephrased question list per se — it's the EXPOSURE of protocol-overlap as the central design move. The question list IS the deliverable, but its underlying contribution is the discovery that the user's 6 proposals collapse to 1 adoption + naming/placement/boundary specifications. This emerges only when P1's primary-deliverable status combines with Sensemaking's protocol-overlap finding.

---

## Telemetry

### Mechanism Coverage

- **Generators applied:** 4/4 (Combination ×2, Absence Recognition, Domain Transfer, Extrapolation).
- **Framers applied:** 3/3 (Lens Shifting ×2, Constraint Manipulation [ADD + REMOVE], Inversion ×3).
- **Convergence:** YES — 3+ mechanisms converge on "adopt protocol with extensions" (Combination → spec; Domain Transfer → vendor-extension analogue; Extrapolation → multi-head future-proofing; Lens Shifting → readers'-context views; Constraint Manipulation → forced-moves verification).
- **Survivors tested:** 14/14 (all candidates ran 5-test cycle + relevant refinements).
- **Failure modes observed:** none of the 6.
- **Inherited Frame Audit:** fired at 2 commitments (P2-d, P3-a); 3 new candidates added (C-AUDIT-1/2/3); audit no longer fires after orchestration.
- **RE-TEST TRIGGER:** 1 firing (P3-C → P2 derivation-note recommendation).

### Production-task additional telemetry

| Piece | Mechanism log | Meta-decision-piece classification | Piece-level Inversion compliance |
|---|---|---|---|
| P1 | [Combination, Absence Recognition, Lens Shifting, Inversion:content-axis] | meta-decision (b, c) | satisfied (P1-C is Inversion-candidate) |
| P2 | [Domain Transfer, Extrapolation, Constraint Manipulation:ADD, Constraint Manipulation:REMOVE, Inversion:intervention-shape-axis] | meta-decision (a, d, e); property-(v) fires | satisfied (P2-C is Inversion-candidate on intervention-shape axis — REQUIRED axis per Intervention-Shape-Axis Inversion rule) |
| P3 | [Combination, Lens Shifting, Inversion:content-axis (direction-reversal)] | meta-decision (a, d) | satisfied (P3-C is Inversion-candidate) |

**Verdict: PROCEED.**
- Sufficient coverage (4G + 3F).
- Convergence YES.
- All survivors tested.
- No failure modes.
- All 3 meta-decision pieces satisfy Piece-Level Inversion compliance.
- P2's property-(v) intervention-shape-axis Inversion compliance: satisfied (P2-C names ADD-CONTENT as reversed assumption; names REORGANIZE-WITHOUT-ADDING + DO-NOTHING as alternatives; states what follows; 5-test cycle applied to all three shapes).

---

## Handoff to Critique

Critique's task: evaluate the assembled finding shape (per Assembly Check) against:
1. Whether the central reframing (P1-F opening) is correctly positioned vs over-claiming.
2. Whether the spec (P2-G + P2-F + derivation-note from P3-C RE-TEST TRIGGER) is appropriately scoped (not over-specified per P2-C-REORGANIZE alternative; not under-specified per FF list).
3. Whether the re-test (P3-G + P3-F) catches all load-bearing prior commitments without silently dropping any (the inquiry's Synthesis Trigger obligation).
4. Whether the 6 FFs (5 original + FF-strat-pattern) are correctly distinguished from settled commitments.
5. Whether the DEFERRED candidates (P1-C, P2-C-REORGANIZE) have correctly-specified revival triggers.
6. Whether C-AUDIT-3's DERIVED-FROM verdict is genuinely useful or premature.

Critique should also test the emergent insight (the inquiry's PRIMARY VALUE is protocol-overlap exposure) — is this overclaiming, or is it the structurally correct framing?
