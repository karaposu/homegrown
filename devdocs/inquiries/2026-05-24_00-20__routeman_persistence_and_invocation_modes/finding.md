---
status: active
model: claude-opus-4-7[1m]
effort: unknown
---
# Finding: routeman persistence and invocation modes

## Question

**From `_branch.md`:** What are the well-phrased questions latent in the user's proposal about routeman's persistence model, invocation-mode split, recalibration semantics, branch-protocol adoption, and file-content split — and what is the structural reasoning per question (settled answer, candidate design, or needs-further-inquiry verdict)?

The user explicitly asked: "check all these questions, and list them in better phrased way." The clean rephrased question list is the primary deliverable; per-question reasoning + adoption-spec + open frontier flags are supporting deliverables. The user also asked the inquiry to honor a structural intuition that route-enumeration content and routeman invocation metadata belong in different files.

For context: `routeman` is the renamed `/navigation` discipline — a cycle-consumer discipline that produces a Route Map (enumerating directions for what to do next on a codebase or inquiry). Prior inquiries in this chain established routeman's identity (`devdocs/inquiries/2026-05-23_14-39__routeman_discipline_design/finding.md`), corrected its process-layer architecture (`devdocs/inquiries/2026-05-23_16-31__routeman_isolated_session_correction/finding.md`), framed open implementation questions (`devdocs/inquiries/2026-05-23_15-20__routeman_implementation_frontier_questions/finding.md`), and adopted a hybrid two-stage route mapping + a per-Route meta-reasoning field (`devdocs/inquiries/2026-05-23_18-58__routeman_staged_mapping_and_reasoning_field/finding.md`). This inquiry extends that chain to the persistence-and-invocation model.

---

## Finding Summary

- **The user's 6 proposals MAP TO a single adoption** of an existing project protocol — `cognitive_harness/protocols/multi_resolution_navigation.md` — which already specifies the persistence ledger, the route-map content file, the parent-map/child-map two-level expansion, the resume mechanism across runs, and the candidate-record schema. The inquiry's central value is exposing this overlap, then adjudicating naming + placement + boundary + extensions.

- **The "two invocation modes" (generic discovery vs directional/topic-scoped) are not new.** They are the staged-mapping adoption's two stages (stage-1 = parent Route Map; stage-2 = sub-route expansion under a selected parent) from the previous inquiry (`2026-05-23_18-58`). The NEW commitment in this inquiry is persistence + recalibration that lets the stages be re-invoked across sessions.

- **Naming is user-aligned with documented alias.** Files in routeman contexts are `_navig.md` (= protocol's `_frontier.md`) and `routeman.md` (= protocol's `navigation.md`). An alias note added to the protocol records the mapping. Mechanism is preserved verbatim; only labels differ.

- **Placement is hybrid by invocation scope.** Inquiry-scoped routeman runs place files in the inquiry folder (like `_state.md` does); project-scoped routeman runs place files at `devdocs/navigation/<run-id>/` per the protocol's central convention. Pure-per-inquiry and pure-central designs are dominated; hybrid is non-removable.

- **Two-tier boundary with `branch_inquiry.md`.** Sub-route expansion in a route map uses `multi_resolution_navigation`'s child-map convention (sub-routes are route-map entries, not full inquiries). Route-to-inquiry promotion (when a specific route is selected for full SIC investigation) uses `branch_inquiry.md` to spawn a child SIC pipeline. The precise threshold for promotion is an open frontier (FF-1).

- **Lifecycle is the protocol's pattern:** persistent across invocations + in-place status evolution + append for new candidates discovered on re-invocation. The user's three recalibration sub-steps (read prior `_navig.md` files; recalibrate existing directions; decompose-or-create new ones) map directly to the protocol's resume mechanism.

- **The two-tier policy + hybrid naming are forced moves, not free choices.** They are derived from `branch_inquiry.md`'s runner-contract requirement (which excludes it from sub-route use) and from the LLM-operational-design principle (from `2026-05-23_18-58`'s adoption of user-language alignment). Recording the derivation prevents future inquiries from treating these as arbitrary preferences.

- **Routeman-specific schema extensions are flagged for the SKILL.md authoring follow-up,** not committed in this finding. Three candidate extensions (meta-reasoning field versioning; mode-switch history; multi-head attribution) are surfaced as scope-setting examples for FF-2.

- **All prior commitments from the routeman chain are preserved** (4 routeman-chain inquiries + the input-dependency anchor + `branch_inquiry.md` protocol). Several are EXTENDED (the 17-attribute schema; the meta-reasoning field's lifecycle). None are CORRECTED. The `multi_resolution_navigation.md` adoption is a new commitment, not an inherited one.

- **Five frontier flags remain open** for follow-up (the SKILL.md authoring inquiry or further design work): the route-to-inquiry promotion threshold (FF-1); routeman-specific schema extensions (FF-2); `_navig.md` lifecycle alternatives (FF-3); cross-inquiry aggregation (FF-4); the `_navig.md` ↔ `_state.md` relationship (FF-5). One out-of-scope research frontier (generalization of the `_navig.md` pattern to other disciplines) is also flagged.

---

## Finding

A short orientation before the answer: the user came in with six design proposals and a meta-task ("list them in better phrased way"). The conventional shape would be to take each proposal, evaluate it, and produce a six-row decision table. Surfacing did that — and discovered something the user's proposals didn't reference: an existing project protocol, `cognitive_harness/protocols/multi_resolution_navigation.md`, that already specifies most of what the proposals ask for. Once that was visible, the inquiry's work shifted. The deliverable is still the rephrased question list (the user's explicit ask), but most of the answers were already settled — by the protocol or by prior inquiries. The work the inquiry actually did was (a) make the overlap visible, (b) adjudicate the residual naming/placement/boundary decisions that the overlap doesn't directly resolve, and (c) flag the open questions that need follow-up.

### 1. Rephrased question list (the user's primary ask)

The user's six topics + meta-task, rephrased as seven testable questions with status labels:

**Q1 — Does routeman have two distinct invocation modes (generic discovery vs directional/topic-scoped expansion), and are they separate procedures or scope-variants of one?**

STATUS: **SETTLED** by the prior staged-mapping inquiry (`2026-05-23_18-58`). The two modes already exist as stage-1 (Route Map; whole-territory enumeration) and stage-2 (sub-route expansion under a selected parent). They are scope-variants of one procedure, not separate procedures. The new commitment in this inquiry is the persistence + recalibration mechanism that lets the modes be re-invoked across sessions.

**Q2 — Should each inquiry folder carry a persistent-memory sidecar file (the user-proposed `_navig.md`) for routeman state, analogous to `_state.md`?**

STATUS: **SETTLED** by adopting `multi_resolution_navigation.md`. The file IS needed; the mechanism is the protocol's `_frontier.md` (frontier ledger + readable run summary + resume instruction). The user is independently rediscovering the protocol's existing design. Naming is `_navig.md` per user-language preference, with documented alias to `_frontier.md` (see §3 below).

**Q3 — On re-invocation in generic mode, should routeman read prior persistent-memory files to recalibrate existing directions and optionally decompose or create new ones?**

STATUS: **SETTLED** by the protocol's resume mechanism. The user's three sub-steps (read; recalibrate importance/goal; decompose-or-create) map directly to (read frontier ledger; update candidate records' status and priority; extend frontier with new candidates).

**Q4 — On re-invocation in directional mode, should routeman scan a parent-route's child sub-folders for prior persistent-memory and apply the same recalibration steps?**

STATUS: **SETTLED** by the same protocol mechanism, scoped to the parent-route's child-map (`output_root/children/<route-id>/`).

**Q5 — Should routeman adopt `cognitive_harness/protocols/branch_inquiry.md` for organizing route expansion?**

STATUS: **SETTLED-WITH-NUANCE.** Two-tier policy. Sub-route expansion within a route map uses `multi_resolution_navigation`'s child-map convention because sub-routes are route-map entries, not full SIC inquiries — `branch_inquiry.md`'s contract requires a discipline pipeline (`runner`), which sub-routes don't have. Route-to-inquiry promotion (when a specific route is selected for deep investigation and an MVL2+ inquiry is spawned to investigate it) uses `branch_inquiry.md`. The precise threshold for promotion is open (FF-1).

**Q6 — Is the content-vs-control file-split right, and how should the files be named?**

STATUS: **SETTLED.** The split is structurally correct — the protocol's existing split (`navigation.md` for content; `_frontier.md` for control) confirms the user's intuition. Names: user-aligned `routeman.md` (= `navigation.md`) and `_navig.md` (= `_frontier.md`), with documented alias.

**Q7 (meta) — Have the questions been rephrased clearly, organized, and decoupled so each is testable and the residual open questions are explicit?**

STATUS: **PRIMARY DELIVERABLE.** Yes — Q1-Q6 cover the user's six topics with clear status; FF-1 through FF-5 capture residual opens (see §4). The earlier framing presented six independent design decisions; the rephrased framing exposes that most are settled by the existing protocol or by prior inquiries, with naming + boundary + extensions as the actual decisions to make.

### 1a. Falsifiability triggers

The adoption verdict is HIGH confidence on mechanism (the protocol's pre-existence is verified by reading the protocol). The naming verdict is LOW-MEDIUM confidence (genuinely two reasonable choices; user-language wins for stated reasons). This adoption would be re-tested if any of the following surfaces in practice:

- The protocol's frontier-candidate-record schema cannot accommodate routeman's meta-reasoning versioning (from `2026-05-23_18-58`) or multi-head attribution (anticipated in the project's trajectory).
- The hybrid placement-by-scope creates aggregation friction (e.g., a project-level Route Map needs to read across many inquiry-scoped `_navig.md` files and the placement makes this expensive).
- The alias between `_navig.md`/`routeman.md` and `_frontier.md`/`navigation.md` creates more two-vocabulary friction in practice than the user-language alignment saves.
- A consumer of `multi_resolution_navigation.md` other than routeman emerges with conflicting needs that the routeman-aligned alias makes harder to satisfy.

### 2. Adoption spec sketch

The concrete commitments routeman's SKILL.md authoring inquiry will inherit:

**Architecture-compatibility note (preamble).** All commitments below are file-shaped — no in-context state is required. This is compatible with the isolated-session + file-scanning architecture committed in `devdocs/inquiries/2026-05-23_16-31__routeman_isolated_session_correction/finding.md`.

**§2.1 Mechanism.** Routeman's persistence and recalibration use `multi_resolution_navigation.md`'s frontier-candidate-record schema + resume semantics verbatim. The protocol is name-agnostic at the mechanism level; routeman is a consumer.

**§2.2 Naming.** In routeman contexts the canonical file names are `_navig.md` (= protocol's `_frontier.md`) and `routeman.md` (= protocol's `navigation.md`). An alias note is added to the protocol's spec recording the mapping. Routeman's SKILL.md uses `_navig.md` and `routeman.md` throughout. The decision is supported by the LLM-operational-design principle (from `2026-05-23_18-58`'s adoption that user-language alignment matters for LLM instruction-following) and is reversible without structural cost if two-vocabulary friction later proves to outweigh user-language alignment.

**§2.3 Placement (hybrid by invocation scope).**

- Inquiry-scoped invocation (e.g., "what's next for this inquiry's route map"): `_navig.md` + `routeman.md` live in the inquiry folder, alongside `_state.md` and `_branch.md`.
- Project-scoped invocation (generating top-level directions across the codebase): files live at `devdocs/navigation/<run-id>/` per the protocol's central convention.
- Scope determination uses the parent-route identifier present at invocation; the precise rule is FF-1.

Verification note: pure-per-inquiry and pure-central placements were considered and are dominated. Per-inquiry only loses the protocol's cross-inquiry aggregation when project-scope is needed; central only loses per-inquiry visibility for humans triaging an inquiry folder. The hybrid is non-removable; removing it loses one or the other affordance.

**§2.4 Lifecycle.**

- Persistent across invocations.
- In-place status evolution per the protocol's status vocabulary (queued → scheduled → expanded → pending → deferred_by_budget → out_of_policy → blocked → skipped_with_reason → stale → superseded).
- Append for new candidates discovered on re-invocation.
- Revision-reason logged via the protocol's existing `expansion_reason` and `scheduling_reason` fields. A routeman-specific `revision_history` field is deferred to FF-3 (the lifecycle policy may evolve).

**§2.5 Boundary with `branch_inquiry.md` (two-tier policy).**

- Sub-route expansion within a route map (directional mode) uses `multi_resolution_navigation`'s child-map convention (`output_root/children/<route-id>/navigation.md` or its routeman-aliased equivalent).
- Route-to-inquiry promotion (when a route is selected for full SIC investigation as its own inquiry) uses `branch_inquiry.md` to spawn a child SIC pipeline under the parent.
- The threshold for promotion (when does a route warrant a full inquiry vs stay as a route-map entry?) is FF-1.

**Derivation note.** The two-tier policy and the hybrid naming are forced moves, not free design choices. The two-tier policy is forced by `branch_inquiry.md`'s contract: it requires a `runner` (a discipline pipeline to run on the child), which sub-routes don't have. The hybrid naming is forced by the LLM-operational-design principle (user-aligned names improve LLM instruction-following) plus the structural fact that the protocol's mechanism stands name-agnostic. Recording the derivation prevents future inquiries from treating these as arbitrary preferences.

**§2.6 Routeman-specific schema extensions (scope-setting examples for FF-2; NOT commitments).**

The protocol's frontier-candidate-record schema (candidate_id, parent_map, parent_route, route_type, priority, status, expansion_reason, eligibility, eligibility_reason, scheduling_reason, child_map_path, blocked_by, continuation_note) is inherited. The SKILL.md authoring inquiry (under FF-2) will likely add candidate extensions like:

- `why_this_might_be_important` (carrying the per-Route meta-reasoning field from `2026-05-23_18-58`) — extended with versioning to capture recalibration changes.
- `meta_reasoning_revision_history` (optional) — if revision-reason logging needs more than the protocol's existing `*_reason` fields.
- `mode_switch_log` — records when a candidate was created or updated in generic vs directional mode.

Future-state additions (anticipated by extrapolation; current spec does not commit but does not block):

- `routeman_invocation_id` for multi-head loop attribution, if the project reaches multi-head routeman runs writing to the same `_navig.md`.

### 3. The two-vocabulary risk and its mitigation

Adopting the protocol's mechanism with routeman-aligned names creates one risk that deserves explicit acknowledgment: the project may grow two vocabularies for the same concept (`_frontier.md` for non-routeman consumers of the protocol; `_navig.md` for routeman). The mitigation is the alias note documented in the protocol's spec. The alternative — using protocol-native names verbatim — was considered and killed because it drops the LLM-operational-design principle's commitment to user-language alignment (see Reasoning §R-K1).

### 4. Frontier flags (residual opens for follow-up)

The protocol adoption does not close every open question. Five routeman-specific frontiers remain, plus one out-of-scope research frontier:

- **FF-1 (promotion threshold).** What is the precise threshold that distinguishes a sub-route (stays in the route map; uses child-map convention) from a route worth promoting to its own SIC inquiry (uses `branch_inquiry.md`)? This determines when each side of the two-tier boundary fires. Likely heuristics: route's expected effort exceeds a threshold; route's investigation requires its own decomposition; route's verdict has independent ship-value. Resolution belongs in the SKILL.md authoring inquiry.

- **FF-2 (routeman-specific schema extensions).** Which extensions to the protocol's frontier-candidate-record schema does routeman need? Initial scope-setting candidates are listed in §2.6. The SKILL.md authoring inquiry finalizes the schema.

- **FF-3 (`_navig.md` lifecycle policy).** The protocol's default is persistent + in-place evolution + append. Alternative lifecycle models exist: (i) snapshot-per-invocation; (ii) append-only-log without in-place evolution; (iii) full revision-history per field; (iv) protocol-default. FF-3 may discover more. Open question: what discriminates between them; does routeman's auditability requirement (per `2026-05-23_15-20`'s LAYER-2 audit Q4) demand more than the protocol's default?

- **FF-4 (cross-inquiry aggregation).** Does routeman ever read `_navig.md` files across MULTIPLE inquiry folders to produce a project-level Route Map summary? If yes, the central-placement mode handles it; if also from per-inquiry files, an aggregation step is needed.

- **FF-5 (`_navig.md` ↔ `_state.md` relationship).** Both files live alongside in inquiry-scoped invocations. Do they ever cross-reference (e.g., does `_state.md` know about `_navig.md`'s presence; does `_navig.md` know about which inquiry pipeline phase the inquiry is in)? Open until a use-case forces it.

- **FF-strat-pattern (research frontier; out-of-scope).** If `_navig.md` becomes a precedent, future disciplines might want analogous per-discipline persistence files. Generalization of the pattern to other disciplines is a project-wide concern beyond this inquiry's scope.

### 5. Deferred candidates (preserved for revival)

Three design alternatives were considered, tested, and deferred rather than rejected outright. They are preserved in the accumulator with explicit revival triggers:

- **Decision-tree shape for the question list** (rather than the flat list above). Deferred because the user said "list them"; the falsifiability insight is captured as §1a instead. Revive if user feedback shows confusion with the list format, or if a follow-up inquiry needs the falsifiability branch explicit as a tree.

- **Minimum-viable spec shape (REORGANIZE-WITHOUT-ADDING).** A 1-paragraph spec pointing at the protocol with the alias note and nothing else. Killed in this inquiry because it drops `2026-05-23_18-58`'s meta-reasoning recalibration commitment (would silently defer schema work that has a load-bearing prior dependency). Revive if a future routeman inquiry has no prior-commitment dependencies.

- **Protocol-native naming (DO-NOTHING; no rename).** Killed in this inquiry because it fails the user-language principle. Preserved as research-frontier seed: "is the user-language principle ALWAYS load-bearing, or are there cases where protocol-native vocabulary is the right choice?"

A fourth deferred item is a verdict-taxonomy candidate (a fifth DERIVED-FROM label for re-test verdicts) that surfaced during the Inherited Frame Audit. Deferred because the forced-moves insight is already captured as the derivation note in §2.5; the verdict label is redundant for this inquiry. Revive if 2+ future inquiries surface the commitments-as-constraints insight independently.

---

## Inherited Commitments Re-test

This inquiry's `_branch.md` declared a Synthesis Trigger listing five priors plus two protocols. Each commitment that this finding's content depends on is re-tested below.

### From `devdocs/inquiries/2026-05-23_11-30__navigation_surfacing_territory_dependency_recheck/finding.md` (the input-dependency anchor)

- **Commitment:** Routeman is dependent on the cycle's output as input (the cycle-consumer relation).
- **Re-test status:** RE-TESTED.
- **Evidence:** The persistence model in this finding reads inquiry artifacts (via the file-scanning mechanism corrected in `2026-05-23_16-31`); the dependency is preserved. The new `_navig.md` files are READ by routeman alongside other inquiry artifacts, on top of the existing dependency, not replacing it.

### From `devdocs/inquiries/2026-05-23_14-39__routeman_discipline_design/finding.md` (the design memo)

- **Commitment:** Routeman's 3-layer identity (Navigational paradigm + cycle-consumer + prescriptive-extension residuals).
- **Re-test status:** RE-TESTED.
- **Evidence:** The persistence model lives within all three layers and redefines none. Navigational paradigm is preserved (routeman still produces a Route Map for navigation). Cycle-consumer is preserved (the file-scanning still operates as the previous correction specified). Prescriptive-extension layer is preserved (the 4 features — F1 adaptive guidance, F2 reachability, F4 REVISIT, F5 auto-vs-judgment — operate over the persisted Route Map but the layer's identity does not change).

- **Commitment:** The 10 routeman features (including F-seed input-contract and F-revisit cross-cycle).
- **Re-test status:** RE-TESTED.
- **Evidence:** F-seed's input-contract gains a `_navig.md` input source (the persistence ledger is read as a seed for recalibration on re-invocation). F-revisit's cross-cycle semantics align with the protocol's recalibration. No feature is dropped or contradicted; F-seed is extended.

- **Commitment:** The 17-attribute Route schema (post-staged-mapping; 18 for sub-routes).
- **Re-test status:** RE-TESTED.
- **Evidence:** The schema accommodates the protocol's frontier-candidate-record fields. Routeman-specific deltas (per §2.6 of the Finding) are flagged for FF-2 but not committed in this finding. The base schema's 17/18 attributes stand.

- **Commitment:** The 9-mode LAYER-2 failure framework.
- **Re-test status:** RE-TESTED.
- **Evidence:** Persistence does not introduce a new LAYER-2 mode. The existing audit substrate (Q4 in the frontier-questions finding) is enriched by `_navig.md` as a cross-invocation audit trail, but the framework's mode count is unchanged.

### From `devdocs/inquiries/2026-05-23_15-20__routeman_implementation_frontier_questions/finding.md` (the frontier-questions finding)

- **Commitment:** Nine surviving frontier questions for SKILL.md authoring.
- **Re-test status:** RE-TESTED with PARTIAL EXTENSION.
- **Evidence:** Q5 (file-system protocol — `_navig.md` filename and folder convention) is partially answered by this finding's §2.2 + §2.3 (naming + placement); the routeman-specific schema details remain open in FF-2. Q6 (file-shape constraints — `_navig.md` schema) is scoped by §2.6's candidate extensions list; the precise schema remains open in FF-2. Q4 (LAYER-2 audit substrate) gains `_navig.md` as the cross-invocation audit trail. None of the other Q's are contradicted.

### From `devdocs/inquiries/2026-05-23_16-31__routeman_isolated_session_correction/finding.md` (the cycle-consumer correction)

- **Commitment:** Routeman runs in an isolated session, with file-scanning input + parallel workers + singleton navigator architecture.
- **Re-test status:** RE-TESTED.
- **Evidence:** The persistence model READS `_navig.md` files via the same file-scanning mechanism the correction specified. The architecture is preserved; the persistence model is additive within it. The architecture-compatibility verification note in §2 (preamble) documents this explicitly.

### From `devdocs/inquiries/2026-05-23_18-58__routeman_staged_mapping_and_reasoning_field/finding.md` (the staged-mapping + meta-reasoning adoption)

- **Commitment:** Hybrid two-stage route mapping (stage-1 = Route Map; stage-2 = sub-route expansion under a parent).
- **Re-test status:** RE-TESTED — DIRECT MAPPING.
- **Evidence:** The user's "two invocation modes" (generic vs directional) ARE these two stages. The persistence model adds cross-invocation continuity TO the stages; it does not redefine them. See Finding §1, Q1.

- **Commitment:** Per-Route `why_this_might_be_important` meta-reasoning field, required + length-bounded + named verbosely on purpose.
- **Re-test status:** RE-TESTED with PARTIAL EXTENSION.
- **Evidence:** The field is preserved unchanged. Routeman-specific extension to add versioning (per recalibration) is FLAGGED as a candidate in §2.6 but not committed; FF-2 finalizes. The field's required status is preserved.

- **Commitment:** LLM-operational-characteristics-as-design-input principle.
- **Re-test status:** RE-TESTED — DIRECTLY APPLIED.
- **Evidence:** The naming decision in §2.2 (user-aligned `_navig.md` + `routeman.md` with alias) IS an application of this principle. The decision's reasoning explicitly cites the principle.

- **Commitment:** Five frontier flags (FF-1 to FF-5) from the staged-mapping inquiry.
- **Re-test status:** INHERITED-WITHOUT-RE-TEST.
- **Reason:** The frontier flags from `2026-05-23_18-58` operate at a different scope (staged-mapping mechanics) than this inquiry's frontier flags (persistence-and-invocation). The numbering coincides but the content does not collide; both sets coexist. Re-testing the staged-mapping FFs is out of this inquiry's scope.

### From `cognitive_harness/protocols/branch_inquiry.md` (the child-inquiry creation protocol)

- **Commitment:** Child-inquiry creation under `[parent_path]/branches/[branch_id]/` with parent reference, `_branches.md` index, runner-agnostic creation pattern, runner-contract requirement.
- **Re-test status:** RE-TESTED.
- **Evidence:** The two-tier policy in §2.5 of the Finding APPLIES `branch_inquiry.md` only at the route-to-inquiry promotion threshold (when a route warrants a full SIC inquiry), NOT at the sub-route level (where the runner-contract requirement would force sub-routes to be inquiries, which they are not). The runner-contract requirement is what FORCES the two-tier policy — the policy IS the structural response to this protocol's contract.

### From `cognitive_harness/protocols/multi_resolution_navigation.md` (the navigation expansion protocol; NEW ADOPTION)

- **Commitment:** Frontier-preserving navigation expansion via `_frontier.md` control ledger + `navigation.md` map content + parent-map/child-map two-level structure + resume semantics across runs + coverage modes (exhaustive / budgeted / sampled) + frontier-candidate-record schema + no-final-selection enforcement.
- **Re-test status:** This is a NEW ADOPTION, not an inherited commitment. The protocol's content was read in full during Surfacing; the inquiry's adoption decision is the central commitment of this finding.
- **Evidence (adoption justification):** The user's stated functions for `_navig.md` (read prior files; recalibrate importance/goal; decompose-or-create new) map point-for-point to the protocol's resume mechanism. Adopting rather than reinventing is the structurally efficient choice (FP1 — don't reinvent the wheel). The protocol's mechanism is name-agnostic; the alias note in §2.2 records the routeman-specific name overlay.

---

## Next Actions

### MUST

- **What:** Add the routeman alias note to the protocol's spec at `cognitive_harness/protocols/multi_resolution_navigation.md`.
  - **Who:** SKILL.md authoring inquiry (or this inquiry's CONCLUDE follow-up).
  - **Gate:** condition-bound — before the SKILL.md authoring inquiry writes routeman SKILL.md content that references `_navig.md` or `routeman.md`.
  - **Why:** prevents the two-vocabulary friction (D12 risk) from materializing silently; documents the alias so other consumers of the protocol know how to translate routeman-specific references.

- **What:** Write impact notes into the four prior routeman-chain findings linking to this finding.
  - **Who:** CONCLUDE-side (this finding's follow-up; cross-doc updates were delegated to CONCLUDE per the decomposition).
  - **Gate:** observable — when this finding is committed.
  - **Why:** the prior findings need to know that the persistence model has been adjudicated and that their relevant commitments are preserved/extended.

### COULD

- **What:** Open the SKILL.md authoring inquiry for routeman, taking this finding's adoption spec sketch (§2) as input.
  - **Who:** any runner spawning a new inquiry; preferably `/MVL2+` with this finding as `branch_from`.
  - **Gate:** condition-bound — when SKILL.md authoring is queued in the project's overall progression.
  - **Why:** turns the adoption-spec sketch into the actual runtime spec.
  - **Depends-on:** none — this inquiry's adoption commitments are enough to start the SKILL.md inquiry; the open FFs are scoped for that inquiry to address.

- **What:** Open a follow-up inquiry on FF-1 (the route-to-inquiry promotion threshold).
  - **Who:** any runner.
  - **Gate:** condition-bound — when the SKILL.md authoring inquiry surfaces the need for an explicit threshold rule.
  - **Why:** the two-tier policy is committed but the trigger that switches between sub-route and inquiry is open; needs a concrete rule.

### DEFERRED

- **What:** Open the cross-inquiry aggregation inquiry (FF-4).
  - **Gate:** observable — when a project-level Route Map summary is needed across multiple inquiry-scoped `_navig.md` files.
  - **Why (if revived):** the central-placement mode handles project-scope; if a use-case emerges that needs aggregation FROM per-inquiry files, an aggregation step is needed.

- **What:** Open the `_navig.md` ↔ `_state.md` relationship inquiry (FF-5).
  - **Gate:** observable — when a use-case forces cross-reference (e.g., `_state.md` needs to know about `_navig.md`'s presence, or vice versa).
  - **Why (if revived):** both files live alongside; their relationship currently is "peers that don't cross-reference"; a use-case may force a richer relationship.

- **What:** Open the FF-strat-pattern research frontier on generalizing `_navig.md` to other disciplines.
  - **Gate:** observable — when 2+ disciplines other than routeman are observed wanting analogous per-discipline persistence files.
  - **Why (if revived):** if the pattern generalizes, a project-wide convention is more efficient than per-discipline reinvention.

---

## Reasoning

### Why this finding over the alternatives

The inquiry started with six user proposals. The conventional response would have been to adjudicate each independently — six design choices, six verdicts. Surfacing did the work of reading the project's existing protocols and found `multi_resolution_navigation.md`, which had already been written and which committed to most of what the user was proposing. That changed the inquiry's central work.

The natural alternative would have been to design routeman-specific persistence from scratch and ignore the protocol. That was rejected because (a) the user's stated functions for `_navig.md` map point-for-point to the protocol's resume mechanism, so the design would be a duplicate; (b) the project's "don't reinvent the wheel" principle (FP1) applies; (c) a parallel mechanism would have created two persistence systems in the project to maintain.

Six design choices the inquiry considered and either adopted, refined, or rejected:

**Naming.** Three shapes considered: (i) user-aligned `_navig.md` + `routeman.md` with alias to protocol terms (adopted); (ii) protocol-native `_frontier.md` + `navigation.md` (killed — drops the LLM-operational-design principle from `2026-05-23_18-58`); (iii) routeman-specific names without alias (rejected — creates two vocabularies without mitigation).

**Spec shape (intervention-shape axis).** Three shapes considered: (i) ADD-CONTENT — write a routeman-specific spec that adds commitments beyond the protocol (adopted); (ii) REORGANIZE-WITHOUT-ADDING — write only an alias-and-pointer doc (killed — drops `2026-05-23_18-58`'s meta-reasoning recalibration commitment; the inquiry has prior dependencies that REORGANIZE silently abdicates); (iii) DO-NOTHING — point routeman directly at protocol files without rename (killed — fails user-language alignment and drops the recalibration commitment).

**Placement.** Three shapes considered: (i) hybrid by invocation scope (adopted — per-inquiry for inquiry-scoped invocations; central for project-scoped); (ii) pure per-inquiry (dominated — loses cross-inquiry aggregation when project-scope is needed); (iii) pure central (dominated — loses per-inquiry visibility for humans triaging the inquiry folder). Innovation's Inherited Frame Audit explicitly tested the REMOVE direction on the placement rule and confirmed the hybrid is non-removable.

**branch_inquiry adoption.** Two shapes considered: (i) two-tier policy (adopted — sub-route expansion uses child-map convention; route-to-inquiry promotion uses branch_inquiry); (ii) universal branch_inquiry use for all expansions (killed — structurally wrong because `branch_inquiry.md`'s runner-contract requirement forces sub-routes to be inquiries, which they are not).

**Lifecycle.** Two shapes considered: (i) persistent + in-place evolution + append (adopted — protocol's pattern); (ii) rewrite per invocation (killed — loses the recalibration audit trail; contradicts the user's stated function "read all prior `_navig.md` files").

**Question-list shape.** Three shapes considered: (i) cluster-summary opening + flat list of 7 questions (adopted, refined for phrasing); (ii) flat list without opening (refined — merged into the adopted shape with the opening added); (iii) decision-tree from a root question (deferred — preserves falsifiability but departs from user's "list them" wording; insight extracted as the §1a Falsifiability triggers footer).

### How priors constrain the answer

The two most important constraints the priors place on this finding are visible in the "Derivation note" in §2.5: the two-tier policy and the hybrid naming are FORCED MOVES, not free choices. Without `branch_inquiry.md`'s runner-contract requirement, the two-tier policy would not exist (could just use one). Without the LLM-operational-design principle from `2026-05-23_18-58`, protocol-native naming would have been the cleaner default. Recording this in the finding (rather than presenting the policy and naming as local optimizations) prevents future inquiries from treating them as arbitrary preferences open for revision.

The inquiry's Inherited Frame Audit (in Innovation) fired at two commitments — the placement rule and the verdict taxonomy. The placement-rule REMOVE direction confirmed the hybrid is non-removable. The verdict-taxonomy redesign-level question surfaced a candidate fifth verdict ("DERIVED-FROM") that was deferred because the derivation note captures the same insight without expanding the taxonomy.

### What was tested but did not become the verdict

- A DECISION-TREE shape for the question list (P1-C in Innovation). Tested via prosecution + defense; defense was strong on falsifiability but prosecution won on the user's explicit "list them" ask. Insight preserved as §1a.
- A MINIMUM-VIABLE spec shape (P2-C-REORGANIZE). Killed because it drops `2026-05-23_18-58`'s meta-reasoning recalibration commitment.
- A PROTOCOL-NATIVE naming shape (P2-C-DO-NOTHING). Killed because it fails the user-language principle; preserved as a research-frontier seed asking when protocol-native vocabulary IS the right choice.
- A FIFTH verdict label ("DERIVED-FROM") for the re-test taxonomy (C-AUDIT-3). Deferred because the derivation note captures the insight without expanding the taxonomy.

---

## Open Questions

### Refinement Triggers

The five frontier flags in Finding §4 are refinement triggers for this finding. Each is a condition under which a locked decision (or scope-deferred decision) in this finding re-opens:

- **FF-1 (promotion threshold).** Re-opens when the SKILL.md authoring inquiry surfaces the need for an explicit promotion rule; resolution determines when the two-tier boundary fires.
- **FF-2 (schema extensions).** Re-opens when the SKILL.md authoring inquiry needs the concrete schema; the candidates in §2.6 are scope-setting, not commitments.
- **FF-3 (lifecycle alternatives).** Re-opens when the protocol's default lifecycle doesn't meet routeman's auditability need (per the LAYER-2 audit Q4 from `2026-05-23_15-20`).
- **FF-4 (cross-inquiry aggregation).** Re-opens when a project-level Route Map summary needs to aggregate from per-inquiry files.
- **FF-5 (`_navig.md` ↔ `_state.md` relationship).** Re-opens when a use-case forces cross-reference between the two files.

### Research Frontiers

- **FF-strat-pattern.** Generalization of the `_navig.md` per-inquiry persistence pattern to other disciplines (e.g., per-discipline `_critique.md` or `_innovate.md`). Out of scope for this inquiry; investigation begins when 2+ disciplines other than routeman are observed wanting analogous files.

- **User-language vs protocol-native vocabulary.** When is the LLM-operational-design principle's preference for user-aligned naming load-bearing, and when does protocol-vocabulary preservation win? Surfaced by the P2-C-DO-NOTHING KILL; a research-frontier seed for future cases where the trade-off shifts.

### Monitoring

- **Two-vocabulary friction.** The alias note in §2.2 mitigates but does not eliminate the risk that routeman-aligned names + protocol-native names create coordination overhead. Monitor over the next several inquiries for cases where the alias requires explicit translation work in either direction.

---

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
routeman has 2 ways,

1 is generic navigation discovery
2 is towards direction, (what is next in this direction or topic )

do think we need _navig.md like file for persistance memory?

lets think for a sec

MVL loop creates inquiry folders, and after MVL loop if we run routeman to understand what is next , it makes sense that just like state.md we can have navig.md in that inquiry folder?

imagine this,
we have one generic run of routeman in our codebase, which should generate generic directions.

if we have a second generic run of routeman, it should
     0. read all nagiv.md files and use them to
     1. recalibrate already existsant generic directions  (importance, goal, etc ...)
     2. maybe decompose or create new  directions

this makes sense...

and when we are running routeman towards a direction, it goes and find branch routes of that direction and expands it.  and if it is ran a second time, again it reads all nagiv.md files under that route folders and use them to recalibrate already existsant generic directions  (importance, goal, etc ...) and   maybe decompose or create new  directions


so it is important for us to start using cognitive_harness/protocols/branch_inquiry.md logic. because it makes everything tidy. i guess it is okay if not used but using it is a lot better.


Another issue is , what _navig.md includes?? it includes the enumarations? or maybe enumarations of routes are saved in routeman.md and _nagiv is about metadata and status of routeman running? i think this is more consistant. _navig.md can can contain a path to the routeman.md  file easily



check all these questions, and list them in better phrased way.
```

</details>
