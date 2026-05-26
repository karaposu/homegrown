# Sensemaking — routeman persistence and invocation modes

## User Input

`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-24_00-20__routeman_persistence_and_invocation_modes/_branch.md`

---

## SV1 — Baseline Understanding (pre-analysis)

The user presents 6 design topics about routeman + a meta-task to rephrase them. Initial reading: "the user has design proposals about persistence and invocation modes; produce a clean rephrased question list with per-question reasoning."

---

## Phase 1 — Cognitive Anchor Extraction

### Constraints

- **C1** — The user explicitly asked "list them in better phrased way." The clean rephrased question list IS the PRIMARY DELIVERABLE; per-question reasoning is secondary.
- **C2** — The inquiry's Layer Commitment is PROCESS-primary; the file-shape (Topic 6) sits downstream of process commitments.
- **C3** — The persistence model must integrate with the corrected file-scanning architecture (isolated routeman session; file-based input only).
- **C4** — The 6 topics are presented as distinct items joined by "and"/"also" — they MUST be preserved as separate questions, not collapsed (per Source Input's transcription-audit fail-safe).
- **C5** — The user's framing presents a STRUCTURAL INTUITION about content-vs-control split (Topic 6); the inquiry must engage it directly (per Goal "what would fail" item vi).
- **C6** — Routeman is the cycle's CONSUMER (settled in 16-31); its persistence lives within the file-scanning architecture, not as in-context state.

### Key Insights

- **KI1** — **Most of what the user proposes is already specified in `cognitive_harness/protocols/multi_resolution_navigation.md`.** The protocol commits to `_frontier.md` (control ledger + readable run summary), `navigation.md` (the map content), parent-map/child-map two-level expansion, resume semantics across runs, and a frontier-candidate-record schema with status vocabulary. This is the load-bearing finding of Surfacing.
- **KI2** — The user's two invocation modes (generic vs directional) MAP EXACTLY to the staged-mapping adoption's stage-1 (Route Map; enumerate parents) and stage-2 (sub-route expansion under a selected parent) from 2026-05-23_18-58. Same scope distinction. Same procedural difference. Already settled.
- **KI3** — Adopting `branch_inquiry.md` UNIVERSALLY for sub-routes is a STRUCTURAL MISMATCH: branch_inquiry's contract requires a `runner` (a discipline pipeline to run on the child inquiry); sub-routes in a route map don't run their own SIC pipeline — they're map entries. Branch_inquiry fits when a route is PROMOTED to a full inquiry, not for every sub-route.
- **KI4** — The user's vocabulary (`_navig.md`, `routeman.md`) and the protocol's vocabulary (`_frontier.md`, `navigation.md`) name THE SAME CONCEPTS. The question is whether to rename, alias, or replace.
- **KI5** — The user's three recalibration sub-steps (0-read; 1-recalibrate importance/goal; 2-decompose-or-create-new) MAP DIRECTLY to the protocol's resume mechanism (read frontier ledger; update candidate records; extend frontier with new candidates).

### Structural Points

- **SP1** — Content vs control IS a real structural axis. The protocol's existing split (`navigation.md` = content; `_frontier.md` = control) confirms the user's intuition.
- **SP2** — Per-inquiry vs central placement is a real placement choice. The user proposed per-inquiry; the protocol uses central (`devdocs/navigation/<run-id>/`). Different placements serve different scopes.
- **SP3** — Routeman becomes STATEFUL/TIME-DEPENDENT when persistence is added. Versioning concern absent from stateless-per-invocation models enters.
- **SP4** — Relationship between `_navig.md` (proposed) and `_state.md` (existing) is unspecified. They sit alongside but track different things.
- **SP5** — Two adjacent expansion conventions exist: `branch_inquiry`'s `[parent]/branches/[id]/` and `multi_resolution_navigation`'s `output_root/children/<route-id>/`. They serve DIFFERENT purposes (full-inquiry vs route-map-entry).

### Foundational Principles

- **FP1** — Don't reinvent the wheel. If a protocol already specifies what's being proposed, adopt/extend rather than redesign.
- **FP2** — User-language alignment matters (per H9 in sensemaking hooks + the LLM-operational-design principle from 18-58).
- **FP3** — Routeman's design must respect the cycle-consumer identity (from 16-31): persistence lives in files routeman scans, not in-context state.

### Meaning-Nodes

- **MN1** — **Persistence-as-cross-invocation-continuity:** the central concept; what `_navig.md` enables.
- **MN2** — **Recalibration:** the operation that uses persistence to update prior outputs across invocations.
- **MN3** — **Mode-as-scope-not-as-procedure:** the two "modes" differ in scope (whole-territory vs parent-scoped), not in fundamental procedure.
- **MN4** — **Content-vs-control split:** the structural axis behind Topic 6.
- **MN5** — **Protocol-vs-renaming-vs-replacing:** the central decision when an existing protocol already specifies what the user proposes.

### Meta-Inspection — H4 (concept names) + H5 (motivating examples)

- **H4 — concept names check.** Load-bearing names: `_navig.md`, `routeman.md`, `recalibration`, `generic/directional mode`, `protocol overlap`, `structural mismatch`. Flag for Phase 3: `_navig.md` + `routeman.md` are user-language nominations competing with `_frontier.md` + `navigation.md` protocol terms. This is a name decision, not a definition decision — same concepts under different labels.
- **H5 — motivating examples check.** The user's examples — "read all navig.md files," "recalibrate already existant generic directions," "decompose or create new directions" — illustrate the protocol's resume mechanism in the user's own words. The mapping is structurally exact.

### SV2 — Anchor-Informed Understanding

The user's 6 proposals largely map to an EXISTING protocol (`multi_resolution_navigation.md`) that the inquiry's framing overlooked. The deliverable shifts from "design persistence" to "adjudicate adoption (verbatim vs renamed vs replaced) + identify residual open questions." The naming decision (`_navig.md` vs `_frontier.md`) is load-bearing and deserves explicit adjudication. The two-modes characterization is settled (= stage-1/stage-2 from the staged-mapping adoption); the cross-invocation continuity is the actual new commitment.

---

## Phase 2 — Perspective Checking

### Technical / Logical

- **P-TECH-1** — Adoption with renaming is technically straightforward; the protocol's mechanism is name-agnostic.
- **P-TECH-2** — Adopting `branch_inquiry.md` for sub-routes requires sub-routes to BE inquiries (running their own SIC pipeline). They aren't, per the design memo's commitments. branch_inquiry fits at the route-to-inquiry promotion threshold, not at every sub-route.
- **P-TECH-3** — Hybrid naming (user-preferred file names + protocol-specified mechanism) is technically supportable: the protocol can document an alias note; routeman SKILL.md uses routeman-aligned names.

### Human / User

- **P-HUMAN-1** — The user did NOT reference `multi_resolution_navigation.md` in their input. They are independently inventing what the protocol already specifies. This is signal: the protocol's existence may be under-surfaced in the project's reachability.
- **P-HUMAN-2** — User-language alignment supports `_navig.md` + `routeman.md` (user's nomination). Protocol-vocabulary preservation supports `_frontier.md` + `navigation.md`. Trade-off: local-routeman-coherence vs cross-protocol-coherence.
- **P-HUMAN-3** — The user asked "list them in better phrased way" — they want CLARITY first, DECISION second. Sensemaking's stabilization should yield a clean rephrased question list as the primary downstream input.

### Strategic / Long-term

- **P-STRAT-1** — The project's trajectory (multi-head loops + merging loops + Baldwin cycle endgame, per user-memory) requires cross-invocation continuity for long-running navigation. Adopting an existing protocol that already supports resume-across-runs aligns with the trajectory; designing parallel persistence would diverge.
- **P-STRAT-2** — If `_navig.md` becomes a precedent, future disciplines might want analogous files (e.g., per-discipline persistence). The pattern question is OUT OF SCOPE for this inquiry; flag for future research-frontier.

### Risk / Failure

- **R1** — Adopting protocol verbatim without considering routeman-specific extensions risks under-specification (e.g., recalibration of the meta-reasoning field from 18-58 may need routeman-specific schema additions).
- **R2** — Renaming protocol files for routeman risks the project growing TWO VOCABULARIES for the same concept. Mitigation: document the alias in the protocol; require the alias note in routeman SKILL.md.
- **R3** — Adopting `branch_inquiry.md` for every sub-route risks forcing the wrong abstraction (sub-routes become child inquiries when they should be route-map entries).
- **R4** — Recalibration introduces statefulness; without explicit revision history, reading old outputs may misrepresent current state. Mitigation: lifecycle policy (FF-3).

### Resource / Feasibility

- **P-RES-1** — The protocol exists, is loaded, is testable. Adoption cost is minimal. Redesign cost would be significant.

### Definitional / Internal Consistency

- The user's claim "`_navig.md` analogous to `_state.md`" — TEST: `_state.md` is the inquiry's pipeline status (which discipline ran; what's next); `_navig.md` is routeman's invocation status + map metadata. They ARE analogous (both are sidecar status files in inquiry folders) but track different things. Analogy holds; they're compatible peers.
- The user's claim "`routeman.md` for enumerations" — TEST: the protocol's `navigation.md` ALSO holds enumerations. Compatible.

### Definitional / Frame-exit Completeness

**Gating predicate check.** Inquiry inherits multi-value terms? YES — "Route" is inherited from staged-mapping adoption + used across multiple values (parent routes; sub-routes; route_type values; route status values). Distinct propositions in distinct cells? YES (the surfacing's tables distinguish parent-vs-sub-route + multiple status values). **Gate fires.**

1. **Existence Enumeration.** What do "Route" / "navigation" / "_navig.md" refer to project-wide?
   - **TYPE axis:** Route as design-memo entity; Route as `multi_resolution_navigation` frontier candidate; Route as `branch_inquiry` child-inquiry-equivalent. Three distinct types.
   - **LAYER axis:** Route at runtime-output level; Route at protocol-schema level; Route at design-memo-concept level.
   - **PHASE axis:** Route at first-invocation (no prior persistence) vs Route at re-invocation (with persistence + recalibration). The persistence proposal INTRODUCES this phase distinction.
   - **AGENT axis:** routeman as protocol-consumer vs other (potential) consumers of `multi_resolution_navigation.md`.

2. **Role Assessment** for each excluded referent:
   - **Other potential consumers of `multi_resolution_navigation.md`:** role = the protocol may serve multiple disciplines, not just routeman. If routeman renames files for itself, other consumers maintain original names. Coherence preserved if (a) commit to routeman-only renames with explicit alias note OR (b) adopt protocol vocabulary verbatim. Re-locate, not exclude: the protocol-level vocabulary remains; the routeman-level alias is a per-discipline overlay.
   - **`_state.md` referent:** role = inquiry's pipeline status. Distinct from routeman's persistence. Coherence preserved; they sit alongside without conflict.
   - **PHASE axis (first-invocation vs re-invocation):** role = the persistence model REQUIRES the phase distinction. Coherence preserved by explicitly committing to re-invocation as a first-class operation (recalibration).

3. **Verdict Rigor.** The verdict "`_navig.md` IS functionally identical to `_frontier.md`" — strongest counter: routeman may have routeman-specific persistence needs the protocol doesn't capture (e.g., meta-reasoning field revision history; mode-switch history; LAYER-2 audit substrate). Test: does the protocol's frontier-candidate-record schema (candidate_id; parent_map; parent_route; route_type; priority; status; expansion_reason; eligibility; eligibility_reason; scheduling_reason; child_map_path; blocked_by; continuation_note) fully express routeman's needs? It captures status + reasoning + continuation but NOT meta-reasoning-revision-history or mode-switch history. Counter has structural merit → verdict refined: "adopt mechanism, extend schema as needed." Verbatim adoption is LOW CONFIDENCE; adopt-with-extensions is HIGH CONFIDENCE.

4. **Residual / Coverage Justification.** Frame-exit concern not yet captured? Per-inquiry vs central placement is a PLACEMENT axis (already in Existence Enumeration's implicit list; capturing here explicitly). Role: per-inquiry ties persistence to the inquiry it operates on; central decouples for cross-inquiry aggregation. Surfaces as Ambiguity 4 below.

### Phase / Calibration-State perspective

- Does this inquiry involve phase-dependent rules? YES — the persistence model assumes (i) the inquiry-folder convention is calibrated (`_state.md`, `_branch.md` precedents exist), (ii) the staged-mapping adoption from 18-58 is in place, (iii) the file-scanning architecture from 16-31 is in place.
- Calibration check: ALL THREE prerequisites are in place. The rule's correctness is not contingent on a phase the project has not yet reached. PASS.

### Meta-Inspection — H1 (candidate set) + H2 (frame scope) + H3 (question framing) + H7 (phase/calibration)

- **H1 — candidate set.** Surfacing enumerated 12 latent questions. Cross-Candidate Unity check: Q-latent-3 (recalibration generic) and Q-latent-4 (recalibration directional) have the SAME recalibration semantics with different scope. Merge candidate: "What's the recalibration mechanism, and how does it scope to the active mode?" Q-latent-1 (do modes exist?) is settled (= staged-mapping adoption); it doesn't need to be asked — it needs to be acknowledged-as-settled. **Will collapse + acknowledge in Phase 3.**
- **H2 — frame scope.** Already addressed by frame-exit completeness above.
- **H3 — question framing.** Q-latent-6 ("Should the file-content split be adopted?") leans toward the user's preference (he stated he prefers the split). Rephrase to separate structural decision from naming: "Is the content-vs-control split the right structural axis, and if so, how should the files be named?"
- **H7 — phase/calibration.** Already addressed above.

### SV3 — Multi-Perspective Understanding

The deliverable shape reframes: instead of adjudicating 6 independent design questions, the inquiry produces:

1. A rephrased question list that EXPOSES the protocol-overlap finding upfront.
2. Per-question reasoning that distinguishes (a) settled-by-prior-inquiry-or-protocol from (b) settled-with-nuance from (c) needs-further-inquiry.
3. Explicit handling of the naming decision as a separate dimension (mechanism is settled; names are a project-style choice).

Major shift from SV2: the inquiry's PRIMARY VALUE is the EXPOSURE of protocol-overlap (which the project may not have been tracking), not the adjudication of the proposals.

---

## Phase 3 — Ambiguity Collapse

### Ambiguity 1: Is `_navig.md` a new mechanism, or the protocol's `_frontier.md` under a new name?

**Strongest counter-interpretation:** the user wants `_navig.md` to be routeman-specific (because the user named it after routeman/navigation), so the protocol shouldn't constrain it.

**Why the counter fails (structural grounds):** the user's STATED FUNCTIONS for `_navig.md` (read all prior files; recalibrate importance/goal; decompose-or-create new directions) ARE the protocol's resume semantics. The user is independently inventing what the protocol already specifies. The counter has only one ground — "the user might prefer routeman-specific" — but the user's functions match the protocol's functions point-for-point. Inventing a parallel mechanism would require ignoring the protocol's pre-existence.

**Confidence:** HIGH.

**Resolution:** `_navig.md` IS the protocol's `_frontier.md` (functionally). The decision is naming + extension, not whether routeman should have a parallel mechanism.

**What is now fixed:** routeman adopts the `multi_resolution_navigation.md` protocol's persistence mechanism (the frontier ledger + resume semantics).

**What is no longer allowed:** designing a parallel persistence model for routeman from scratch.

**What now depends on this choice:** the naming decision (Ambiguity 2); the schema-extension question (FF-2); the placement decision (Ambiguity 4).

**What changed in the conceptual model:** the inquiry's central output shifts from "design persistence for routeman" to "specify how routeman adopts the protocol (naming; extensions; placement)."

---

### Ambiguity 2: Should the files use `_navig.md` + `routeman.md` (user) or `_frontier.md` + `navigation.md` (protocol)?

**Strongest counter-interpretation:** protocol names should win because (a) they're already specified; (b) other consumers may exist (unverified); (c) the project should have ONE vocabulary, not two.

**Why the counter has partial merit:** (a) and (c) are structural reasons — reusing existing names is the lowest-friction path; routeman-renaming creates two vocabularies for the same concept. (b) is unverified.

**Counter-counter (in defense of user nomination):** (i) user-language alignment is a tested principle (H9 + LLM-operational-design from 18-58); (ii) routeman-aligned names align with the discipline's identity (routeman.md echoes routeman; _navig.md echoes navigation); (iii) the project has precedent for renaming concepts when discipline identity shifts (navigation → routeman); (iv) the protocol's name `navigation.md` references an older concept that's been renamed.

**Confidence:** LOW-MEDIUM. Genuinely two reasonable answers.

**Resolution:** HYBRID. **The protocol's MECHANISM is adopted verbatim; the file NAMES adopt user-aligned nominations (`_navig.md` and `routeman.md`) when invoked as routeman.** A documented alias note in the protocol records the mapping (`_navig.md` = `_frontier.md`; `routeman.md` = `navigation.md` when consumed by routeman). The decision can be reversed without structural cost if "two vocabularies" later proves to create more friction than user-language alignment saves.

**What is now fixed:** routeman uses `_navig.md` + `routeman.md` as file names; mechanism is the protocol's; alias documented.

**What is no longer allowed:** silently using `_frontier.md` + `navigation.md` in routeman contexts (without alias) — would split documentation across two vocabularies.

**What now depends on this choice:** routeman SKILL.md authoring; potential protocol-update to document alias.

**What changed in the conceptual model:** ADOPTION (mechanism) and NAMING (file labels) are decoupled decisions. Mechanism is settled-high-confidence; naming is settled-with-defeasibility.

---

### Ambiguity 3: When should routeman use `branch_inquiry.md` vs `multi_resolution_navigation`'s child-map convention?

**Strongest counter-interpretation:** use branch_inquiry universally for all expansions because it's "tidier" (user's stated preference) and gives a single, consistent expansion mechanism.

**Why the counter fails (structural grounds):** branch_inquiry's input contract requires `runner` (a discipline pipeline). Sub-routes in a route map don't run their own SIC pipeline; they're route-map entries (enumerated, not investigated). Forcing branch_inquiry on every sub-route means each sub-route triggers a full child inquiry, which is structurally wrong (sub-routes are enumerations of what's reachable, not active investigations of what's reachable). Structural mismatch at the sub-route level.

**Counter-counter (where branch_inquiry IS appropriate):** when a specific route is PROMOTED to a full inquiry (e.g., the user selects a route for deep investigation; an MVL2+ inquiry is spawned to investigate it), branch_inquiry IS the right mechanism. The user's intuition is right at THIS threshold, not at every sub-route.

**Confidence:** HIGH.

**Resolution:** TWO-TIER POLICY.
- (a) For SUB-ROUTE EXPANSION within a route map (directional mode), use `multi_resolution_navigation`'s child-map convention (`output_root/children/<route-id>/`). Sub-routes are route-map entries.
- (b) For ROUTE-TO-INQUIRY PROMOTION (when a route is selected for deep investigation as its own inquiry), use `branch_inquiry.md` to spawn a child SIC pipeline.

**What is now fixed:** the boundary between route-map expansion and inquiry-spawning.

**What is no longer allowed:** branch_inquiry for every sub-route; multi_resolution_navigation for full inquiry spawning.

**What now depends on this choice:** the routeman SKILL.md must specify both expansion paths + the promotion threshold; FF-1 (precise threshold for promotion) remains an open sub-question.

**What changed in the conceptual model:** two adjacent expansion mechanisms now have CLEAR DIFFERENT USES. They're not in competition.

---

### Ambiguity 4: Should `_navig.md` files live per-inquiry-folder (user) or central (`devdocs/navigation/<run-id>/`, protocol)?

**Strongest counter-interpretation:** central placement (protocol's convention) is better because (a) it decouples persistence from any specific inquiry's lifecycle; (b) it allows cross-inquiry aggregation; (c) it matches the protocol's existing convention.

**Why the counter has merit:** all three reasons are structurally sound. Per-inquiry placement TIES persistence to the inquiry; if the inquiry is renamed/moved/archived, the persistence moves with it.

**Counter-counter (in defense of per-inquiry):** (i) aligns with the user's stated intuition + the `_state.md`/`_branch.md` precedent; (ii) makes persistence VISIBLE in the inquiry folder where humans triage; (iii) for inquiry-scoped routeman invocations (where routeman checks "what's next for THIS inquiry"), per-inquiry is structurally tighter; (iv) for project-wide invocations (no parent inquiry), the central convention applies.

**Confidence:** MEDIUM-HIGH for hybrid; LOW for either-pure.

**Resolution:** HYBRID BY SCOPE.
- (a) When routeman is invoked WITHIN AN INQUIRY (e.g., "what's next for this inquiry's route map"), `_navig.md` + `routeman.md` live in the inquiry folder.
- (b) When routeman is invoked AT PROJECT SCOPE (generating top-level directions across the codebase), the files live at `devdocs/navigation/<run-id>/` per the protocol's central convention.

**What is now fixed:** placement depends on invocation scope.

**What is no longer allowed:** assuming one placement fits all invocations.

**What now depends on this choice:** routeman SKILL.md must specify both placements + the scope-determination mechanism (which is FF-1 from staged-mapping inquiry — the trigger that selects between modes).

**What changed in the conceptual model:** two placements for two invocation scopes. Consistent with the two-modes characterization (modes already differ by scope).

---

### Ambiguity 5: What's `_navig.md`'s lifecycle — rewrite per invocation, append, or revision-history?

**Strongest counter-interpretation:** rewrite per invocation is simplest (no schema complexity for history).

**Why the counter has merit:** simplicity is a real value.

**Counter-counter:** the protocol's frontier-candidate-record already includes status fields that EVOLVE (queued → scheduled → expanded → ...). Appending or maintaining in-place evolution IS the protocol's pattern. Rewriting per invocation would lose the recalibration audit trail. The user's framing ("read all prior `_navig.md` files; recalibrate; decompose") explicitly REQUIRES cross-invocation continuity, not per-invocation rewrite.

**Confidence:** HIGH for adopt-protocol-pattern; LOW for rewrite-per-invocation.

**Resolution:** Adopt the protocol's lifecycle: **persistent across invocations with in-place status evolution + append for new candidates.** Substantive recalibrations (e.g., a route's importance is revised) update the field in place AND log a brief revision note (the protocol's `expansion_reason` + `scheduling_reason` fields may already cover this; if not, a `revision_history` extension field is added — FF-3).

**What is now fixed:** persistence-across-invocations with in-place evolution.

**What is no longer allowed:** rewriting `_navig.md` from scratch per invocation.

**What now depends on this choice:** schema (FF-2) includes status-evolution fields; recalibration semantics are concretized as "update status + log reason + append new candidates."

**What changed in the conceptual model:** `_navig.md` is a DURABLE artifact across invocations, not a per-invocation output.

---

### Ambiguity 6: Are the user's "two modes" NEW MODES or the staged-mapping adoption's stage-1 vs stage-2?

**Strongest counter-interpretation:** they're new modes the user is introducing now.

**Why the counter fails (structural grounds):** the staged-mapping adoption's stage-1 (Route Map; enumerate parents) and stage-2 (sub-route expansion under a selected parent) map exactly to the user's generic-vs-directional framing. Same scope distinction (whole-territory vs parent-scoped). Same procedural difference (broad enumeration vs targeted expansion). The user is rediscovering the staged adoption from a different angle.

**Confidence:** HIGH.

**Resolution:** The user's two modes ARE the staged-mapping adoption's two stages. The NEW commitment the user adds is the PERSISTENCE model that lets the modes be RE-INVOKED across sessions with recalibration. Mode-as-scope is settled; cross-invocation continuity is the addition.

**What is now fixed:** two modes = two stages (settled).

**What is no longer allowed:** treating the two modes as a fresh design question.

**What now depends on this choice:** the rephrased question list acknowledges the modes as settled + focuses open questions on persistence + recalibration.

**What changed in the conceptual model:** the inquiry's central work is PERSISTENCE + RECALIBRATION, not MODE DEFINITION.

---

### Load-bearing concept tests (refinement note)

- **`_navig.md`** — proxy-vs-structural: is it a real structural commitment or an incidental property? Real (the protocol exists; the concept maps). Discoverability: yes, via protocol read. User-language alignment: yes, user-nominated. **PASS.**
- **`protocol overlap`** — surfacing-coined descriptor. Domain-property check: re-reading the protocol confirms the overlap. Counter: am I overclaiming overlap? Test by listing what's NOT overlapping — schema extensions for meta-reasoning, mode-switch history, possibly cross-inquiry aggregation. The overlap is REAL at mechanism + structural-axis level; extensions are routeman-specific. **PASS with extension-list.**
- **`structural mismatch (branch_inquiry vs sub-routes)`** — verified above via the runner-contract mismatch. **PASS.**

### Specific-vs-pattern recognition cue

The user's framing presents 6 specific topics from their own observation. Is "persistence + recalibration" JUST these 6 topics, or part of a wider pattern? Wider pattern: cross-invocation continuity is a project-wide concern (any discipline invoked multiple times on the same inquiry could face this). The current inquiry is appropriately scoped to ROUTEMAN's persistence (per the user's input + scope check). Pattern-generalization is OUT OF SCOPE; **flagged in FF list (FF-strat-pattern).**

### SV4 — Clarified Understanding

The user's 6 proposals collapse into a clearer decision set once protocol-overlap is recognized:

| # | Topic | Status |
|---|---|---|
| 1 | Two invocation modes (generic vs directional) | **Settled** — = staged-mapping stages |
| 2 | `_navig.md` persistence file existence | **Settled** — = protocol's `_frontier.md` |
| 3 | Recalibration semantics (generic mode) | **Settled** — = protocol's resume mechanism, project scope |
| 4 | Recalibration semantics (directional mode) | **Settled** — = protocol's resume mechanism, parent-route scope |
| 5 | `branch_inquiry.md` adoption | **Settled with nuance** — two-tier policy |
| 6 | File-content split (`routeman.md` + `_navig.md`) | **Settled** — = protocol's content/control split, hybrid naming |
| 7 (meta) | Rephrase questions clearly | **Primary deliverable** — produce the list |

Residual open questions (NOT settled by protocol):

- **FF-1** — Precise threshold for "promote a route to its own inquiry" (when to invoke `branch_inquiry`).
- **FF-2** — Routeman-specific schema extensions to the frontier-candidate-record (meta-reasoning field versioning; mode-switch history).
- **FF-3** — Lifecycle policy for `_navig.md` (revision_history field design; reason-logging policy).
- **FF-4** — Cross-inquiry aggregation: does routeman ever read `_navig.md` across multiple inquiries for a project-level summary?
- **FF-5** — Relationship between `_navig.md` and `_state.md` (do they cross-reference?).
- **FF-strat-pattern** (out of scope) — Generalization of `_navig.md` pattern to other disciplines.

---

## Phase 4 — Degrees-of-Freedom Reduction

### Variables now fixed

- **Persistence file existence:** YES.
- **File names:** `_navig.md` + `routeman.md` (user-language-aligned; alias to protocol terms documented).
- **Mechanism:** `multi_resolution_navigation.md` protocol's resume mechanism + frontier-candidate-record schema (with routeman-specific extensions per FF-2).
- **Mode definitions:** two stages, settled (= staged-mapping adoption from 18-58).
- **branch_inquiry use:** only at the route-to-inquiry promotion threshold (NOT for sub-route enumeration).
- **Lifecycle:** persistent across invocations + in-place status evolution + append for new candidates.
- **Placement:** by scope — per-inquiry for inquiry-scoped routeman; central for project-scoped routeman.

### Options eliminated

- Designing routeman-specific persistence from scratch.
- Single-file convention (combining enumerations + status).
- Universal branch_inquiry use for sub-routes.
- Rewriting `_navig.md` per invocation.
- Treating the two modes as fresh design questions.
- Pure-per-inquiry OR pure-central placement (hybrid wins).

### Paths still viable

- Document protocol adoption + naming alias + scope-dependent placement in routeman SKILL.md (next inquiry's structural-layer work).
- Specify routeman-specific schema extensions (FF-2).
- Adjudicate the promotion threshold (FF-1).
- Investigate cross-inquiry aggregation if/when project trajectory requires it (FF-4).
- Define `_navig.md` ↔ `_state.md` cross-reference policy (FF-5).

### SV5 — Constrained Understanding

The problem reduces to TWO concrete deliverable shapes for Decomposition + Innovation:

1. **Rephrased question list** (the user's primary ask) — 7 cleanly-phrased questions, each labeled SETTLED / SETTLED-WITH-NUANCE / OPEN, with reasoning.
2. **Adoption specification candidate** — concrete sketch of how routeman SKILL.md will commit (naming + mechanism + placement + lifecycle + boundary with branch_inquiry).

The 5 residual open questions (FF-1 to FF-5) are FRONTIER items for the SKILL.md authoring inquiry or a follow-up.

---

## Phase 5 — Conceptual Stabilization

### Accommodation trigger check (model-misfit axis)

Did multiple perspectives keep producing destabilizing anchors that required patching the model? Looking back:
- Technical → P-TECH-2 (branch_inquiry mismatch) → resolved cleanly via two-tier policy.
- Frame-exit completeness → placement question → resolved cleanly via hybrid-by-scope.
- Risk → R3 (statefulness) → resolved cleanly via lifecycle policy.

The model didn't require multiple patches; it CLICKED INTO PLACE around the central insight (protocol-overlap). This could SUGGEST Premature Stabilization (early-clarity-arrival axis). Check: did 3+ perspectives produce NEW anchors (not confirmations)? YES — P-TECH-2 (new), Frame-exit placement (new), R3-mitigation lifecycle (new). The clarity is well-tested.

Self-applicability check: I noticed protocol-overlap because Surfacing loaded both protocols deliberately. The discovery is grounded in explicit protocol-reading, not in cleverness or pattern-matching from memory. The grounding is structural, not intuitive.

### Meta-Inspection — H6 (model fit) + H8 (self-reference)

- **H6 — model fit.** Has the model required multiple patches? No — one central insight (protocol-overlap) reframed the entire problem; the 6 user proposals all map cleanly into it. Accommodation: the model accommodates the territory (the protocol's pre-existence IS the territory; the model = "user proposals adopt protocol with hybrid naming + scope-dependent placement + extensions"). PASS.
- **H8 — self-reference.** Am I using sensemaking to evaluate something that shares sensemaking's framework? Routeman and sensemaking are both disciplines; both share the cognitive-loop framework. But this inquiry's TARGET is routeman's persistence design, not sensemaking's design. Sensemaking is the TOOL. Low self-reference risk; no circular evaluation.

### SV6 — Stabilized Model

**The Model.**

Routeman's persistence and invocation modes are NOT a fresh design problem. Two anchoring facts re-frame the inquiry:

1. **The two invocation modes (Topic 1) ARE the staged-mapping adoption's two stages.** Settled in 2026-05-23_18-58. No new mode design needed.
2. **The persistence + recalibration model (Topics 2-4) ARE the `multi_resolution_navigation.md` protocol's existing resume mechanism.** Settled in the protocol. No new persistence design needed.

The inquiry's actual deliverables:

- **D1** — A REPHRASED QUESTION LIST that distinguishes settled-by-prior-work from settled-with-nuance from open-for-follow-up, honoring the user's "list them in better phrased way" ask.
- **D2** — An ADOPTION SPEC SKETCH: routeman adopts `multi_resolution_navigation.md`'s mechanism with (i) user-aligned naming (`_navig.md` + `routeman.md`); (ii) hybrid-by-scope placement (per-inquiry OR central); (iii) two-tier boundary with `branch_inquiry.md` (sub-routes use child-map convention; promoted routes use branch_inquiry); (iv) protocol's lifecycle (persistent + in-place evolution + append).
- **D3** — A RESIDUAL-OPEN-QUESTIONS LIST (FF-1 to FF-5) for SKILL.md authoring or follow-up inquiry.

**How SV6 differs from SV1.**

| Axis | SV1 (pre-analysis) | SV6 (stabilized) |
|---|---|---|
| Problem framing | Design routeman persistence from scratch | Adopt existing protocol; adjudicate naming + placement + extensions |
| Question count | 6 distinct topics + 1 meta-task | 7 questions with mapped statuses; 4 settled + 1 settled-with-nuance + 1 primary-deliverable + 5 open FF flags |
| Mode framing | Two new invocation modes | Two modes = staged-mapping stages (settled) |
| Persistence framing | New `_navig.md` design | Adoption of `_frontier.md` mechanism with rename to `_navig.md` |
| branch_inquiry framing | Universal adoption for tidiness | Two-tier policy (sub-routes vs promoted-to-inquiry) |
| Naming framing | User-preferred names assumed | Decoupled mechanism-vs-naming decision; hybrid resolution |
| Placement framing | Per-inquiry (user) | Hybrid by invocation scope |
| Inquiry's value | Adjudicate 6 design choices | EXPOSE protocol overlap + adjudicate residual naming/placement/boundary + flag 5 open FFs |

---

## Telemetry

- **Perspective saturation:** 7 perspectives applied (Technical, Human, Strategic, Risk, Resource, Definitional, Frame-exit, Phase/Calibration). The last 2 (Phase/Calibration, Frame-exit) produced NEW anchors. Not yet at saturation but converging.
- **Ambiguity resolution ratio:** 6 ambiguities raised; 6 resolved (4 HIGH confidence; 1 LOW-MEDIUM; 1 MEDIUM-HIGH). All resolutions accompanied by structural counter-test.
- **SV delta:** SV1 → SV6 shows MAJOR structural shift (problem framing inverted: from "design persistence" to "expose protocol overlap + adopt + extend + name").
- **Anchor diversity:** 6 anchor types extracted (Constraints; Key Insights; Structural Points; Foundational Principles; Meaning-Nodes; Meta-Inspection findings). 8 perspectives applied. Mixed.
- **Failure modes checked:** Status Quo Bias (verified — protocol is not blindly defended; alias note + extension list flag protocol's gaps); Premature Stabilization (verified via 3+ new-anchor perspectives + self-applicability check); Anchor Dominance (the protocol-overlap insight IS dominant; checked by listing 4 distinct decisions that don't all collapse to it — naming, placement, boundary with branch_inquiry, schema extensions); Perspective Blindness (most uncomfortable perspective = "the user might want routeman-specific design even if a protocol exists" — addressed in Ambiguity 1's counter); Clean Resolution Trap (verbatim-adoption was a clean resolution; structurally tested via schema-coverage check → refined to adopt-with-extensions); Self-Reference Blindness (routeman ≠ sensemaking framework).
- **Convergence verdict:** STABILIZED. Model accommodates territory. Ambiguities resolved with structural grounding. Open questions explicitly flagged as residual.

---

## Output handoff to Decomposition

Decomposition's task: take the 7 rephrased questions + the adoption spec sketch + the 5 FF flags, and produce a clean coupling map + question tree that the Innovation discipline can use to generate candidate question-phrasings and adoption-spec variations. The user's PRIMARY DELIVERABLE shape is the rephrased question list — Decomposition should keep that as the central piece, with the adoption spec sketch as a supporting deliverable.

Key load-bearing concepts handed off:
- `protocol overlap` (Surfacing finding + Sensemaking stabilization).
- `two-tier policy` (sub-routes vs promoted-to-inquiry).
- `hybrid-by-scope placement`.
- `decoupled mechanism vs naming decision`.
- `5 FF residual flags`.
