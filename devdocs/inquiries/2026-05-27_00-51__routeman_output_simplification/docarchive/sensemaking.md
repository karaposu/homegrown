# Sensemaking — routeman_output_simplification

## User Input

```text
/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-27_00-51__routeman_output_simplification/_branch.md

Read in this order: _branch.md, surfacing.md, the territory items already in workspace via surfacing.

Sensemaking purpose: stabilize understanding of (1) what current routeman output logic consists of as a layered structure (separate enumeration-content from persistence-protocol from meta-reasoning), (2) what specific problems and comprehension-friction sources exist, (3) what the simplification space looks like as a stable conceptual model for Decomposition to partition. Layer Commitment: STRUCTURAL. Address 8 frontier flags from surfacing (FF-Su1..FF-Su8).

Save output to sensemaking.md in inquiry folder.
```

---

## SV1 — Baseline Understanding

The user has asked us to examine the current `/routeman` spec, identify what's bad and hard about its output logic, and propose simplification — under explicit constraints (enumeration of routes is preserved; multi-head worker compatibility is preserved). The current spec is presumably bloated from legacy `/navigation` material that was adopted into routeman during its creation. The user has a working hypothesis (`routeman.md` + `_route.md` carrying datetime + calculation stats) but explicitly invites challenge ("but maybe this is missing some vital information?").

---

## Phase 1 — Cognitive Anchor Extraction

### Constraints (limits / requirements / boundaries)

- **C1 — Enumeration must remain full and uncompressed.** User explicit: "we need enumeration of routes for sure." Compression of the set fails the user's framing.
- **C2 — Multi-head worker session compatibility must be preserved.** User explicit: "so still it will work wit multihead worker session etc too."
- **C3 — Layer Commitment is STRUCTURAL only.** Meaning-layer (enumeration as cognitive operation) and process-layer (the 10 Enumeration components, typed-reachability mechanism) are out of scope unless an output-field's removal forces a process step to disappear.
- **C4 — User-voice anchors as constraints:**
  - From `nav_sum_notes.md`: *"warming_summary: ... this is stupid idea."* Any proposed output that re-introduces a warming-summary-shaped section is killed by direct user veto.
  - From `nav_sum_notes.md`: *"source inquiry might be none as well. i should be able to run navigation without source inquiry."* Output spec must NOT require a specific source inquiry to function.
- **C5 — Project conventions are load-bearing.** Underscore-prefix-for-meta-state (`_branch.md`, `_state.md`, `_branches.md`) is canonical. Per-discipline canonical output files at inquiry-folder root is canonical. `docarchive/` is canonical. Simpler shape must align.
- **C6 — Session isolation invariant.** Per `docs/canon/towards_cross_run_cognitive_steering...md`. Navigator runs in fresh isolated session reading only persisted artifacts. Output must be fully disk-readable.
- **C7 — Append-only with status updates is project-canonical.** Per `_state.md`'s History pattern and per `nav_sample_story.md`. New entries appended; past preserved; status fields may be updated.

### Key Insights (non-obvious implications)

- **K1 — The current routeman.md spec is structurally a 4-layer stack but the spec doesn't acknowledge its own layering.** Reading references/routeman.md, four content-type-distinct layers coexist undifferentiated:
  - **α** — Enumeration content (per-route Direction, Goal, Movement Type, Priority, Status, Purpose, WHY, Guidance, Continuation Note).
  - **β** — Persistence-protocol (the 13-field frontier-candidate-record + 10-status status vocabulary + coverage modes + batch_size + expansion_policy + scheduling_policy — adopted from `multi_resolution_navigation.md`).
  - **γ** — Meta-reasoning / audit (`why_this_might_be_important` field + the 4-axis content distinction + LAYER-2 audit substrate).
  - **δ** — Telemetry (~10 metrics: per-Family balance, per-type distribution, etc.).
  The 4-layer separation is provable by two tests: distinct content TYPE per layer and distinct EVOLUTION PATH (α from 14-39; β from 24-00; γ from 18-58; δ from project-canonical anatomy).

- **K2 — Dead inheritance is structurally provable in the β layer.** Routeman's per-route Status field uses 7 values (`open / blocked / deferred / active / done / stale / superseded`). The adopted protocol provides 10 — the 3 unused are `queued`, `scheduled`, `expanded`. These are PROTOCOL-RUN execution states (batch-execution machinery), not per-route states. They never fire in routeman because routeman doesn't run batched expansions. Dead schema. (Addresses FF-Su2.)

- **K3 — Multi-head compatibility was asserted but not exercised in any surfaced artifact.** The 2026-05-25 readiness Route Map is single-worker. The cross-run-steering doc names the Navigator as consumer-across-heads but provides no concrete walkthrough. The current spec's multi-head compatibility is THEORETICAL — relying on the protocol's "sufficient for multi-head" claim rather than tested. (Addresses FF-Su3.)

- **K4 — The user's working hypothesis is structurally aligned with the project's `_state.md` pattern.** `routeman.md` (content) + `_route.md` (metadata/state) mirrors `finding.md` (content) + `_state.md` (metadata) in MVL inquiries. The user is implicitly applying the project's existing convention.

- **K5 — Three distinct 2-file output splits exist in surfaced material, each at a different point on a complexity axis:**
  - **Current routeman spec:** `routeman.md` (content via protocol's `navigation.md`) + `_navig.md` (control ledger via protocol's `_frontier.md`). Heavy machinery: 13-field record, 10-status, coverage modes, batch_size, etc.
  - **`old_nav_logic/nav_sample_story.md`:** `navigation_observer_<N>.md` (sequential per-run canonical, never overwritten) + `_nav.md` (activity ledger: Runs / Selections / Spawned Children / Open Directions / History).
  - **User's hypothesis:** `routeman.md` (content) + `_route.md` (datetime + calculation stats — lightest).
  Three POINTS on the same complexity axis with the same underlying operation (enumerate + persist for re-invocation).

- **K6 — "Enumeration" is conflated with "enumeration plus persistence ledger" in the current spec.** The user said "we need enumeration of routes for sure." Current spec wraps enumeration in protocol persistence machinery. Cleanly separating the layers means simplifying β drastically without touching α.

- **K7 — Multi-head compatibility is a NAVIGATOR-LAYER concern, not a routeman-OUTPUT-LAYER concern.** Per `towards_cross_run_cognitive_steering...md`: "Worker session: solve the current inquiry. Navigator session: read completed artifacts." Each worker produces ONE routeman output; Navigator reads N outputs and aggregates. Aggregation logic lives in the Navigator, not in each Worker's output. Output need only be (a) self-describing on disk, (b) carries worker-identifier (inquiry folder + timestamp inherently), (c) has stable parseable schema.

- **K8 — Current spec heaviness traces to a category mistake at adoption time.** The protocol `multi_resolution_navigation` was designed as a STANDALONE protocol with breadth (coverage modes, batch_size, expansion_policy) for flexibility across consumers. Routeman adopted it verbatim as if it were routeman's own primary. But routeman's identity is "enumerate next moves" — not "multi-resolution expansion as a primary." Verbatim import brought in features routeman doesn't use.

- **K9 — User invites adversarial testing of their own hypothesis.** "but maybe this is missing some vital information? lets think it through." Don't rubber-stamp; test.

- **K10 — User has VETO POWER on specific structural commitments** (warming-summary frame; source-inquiry-required). Any proposed shape that violates a veto fails.

- **K11 — The deliverable should match an open thinking-with stance.** Make explicit what was found AND what tradeoffs remain — not a closed verdict.

- **K12 — Routeman is precedent-setting.** It's the project's only shipped Boundary discipline. Whatever shape is committed becomes the inheritance default for the next Boundary discipline (`/reflect`). Simpler precedent now reduces accidental complexity propagation later. (Addresses FF-Su8.)

- **K13 — Over-simplification risk.** If `_route.md` carries only datetime + calc stats, can the Navigator across heads aggregate effectively? What state is genuinely needed for cross-invocation continuity?

- **K14 — Removing the protocol adoption re-opens questions the adoption settled.** If `_navig.md` (and the protocol's machinery) goes away, what replaces it? The user STILL wants re-run-reads-prior-state semantics, per their original 2026-05-24_00-20 problem framing ("if we have a second generic run of routeman, it should read all navig.md files and recalibrate"). So persistence stays — but with simpler vocabulary.

- **K15 — Simplification has positive feasibility cost-benefit.** A 465-line spec vs a shorter alternative — the shorter saves cognitive cycles per invocation.

- **K16 — Anti-confusion machinery may itself confuse.** Per FF-Su6, the 4-axis content distinction (Purpose / WHY / Continuation Note / why_this_might_be_important) was added as anti-confusion machinery. If readers struggle to keep 4 axes straight, the cure becomes the disease.

- **K17 — Some layers belong to routeman's identity; some are smuggled in.** α IS routeman's identity (enumeration). The adaptive-guidance fields (within Reasoning + Adaptive Guidance per-route groups) ARE routeman's prescriptive-residual character (per 14-39 meaning-layer design). β is smuggled-in via verbatim adoption — NOT part of routeman's identity. δ is project-canonical (every discipline has telemetry per `anatomy_of_disciplines.md`).

### Structural Points (core components / relationships)

- **S1 — Workspace vs Artifact dual output.** Every Boundary discipline produces (a) session-local workspace + (b) persistent artifact. Multi-head Navigator consumes (b). Simplification mostly concerns (b).

- **S2 — Current output structural tree (the heavy version):**
  ```
  routeman invocation produces:
  ├── routeman.md (content; aliased from protocol's navigation.md)
  │   ├── Map Header
  │   ├── Route Index (when count > 10)
  │   ├── Per-Route entries (12 fields organized into 6 purpose-groups)
  │   ├── Excluded Section
  │   └── Telemetry Block (~10 metrics)
  └── _navig.md (frontier ledger; aliased from protocol's _frontier.md)
      ├── Role / Source / Settings (coverage_mode / batch_size / depth / expansion_policy / scheduling_policy)
      ├── Run Summary
      ├── Candidate Ledger (frontier-candidate-record × N, 13 fields each)
      ├── Expanded Children / Pending / Deferred / Blocked / Out-of-Policy / Skipped
      └── Resume Note
  ```

- **S3 — User's hypothesis tree (the lightweight version):**
  ```
  routeman invocation produces:
  ├── routeman.md (enumeration of routes)
  └── _route.md (datetime + calculation stats; updated on re-run)
  ```

- **S4 — `nav_sample_story.md` alternative tree (the historical-trace version):**
  ```
  routeman invocation produces:
  ├── navigation_observer_<N>.md (sequential per-run, never overwritten)
  └── _nav.md (activity ledger)
      ├── Runs (per-run summary entries)
      ├── Selections (downstream selector's decisions tracked here)
      ├── Spawned Children
      ├── Open Directions (status-update area)
      └── History (chronological events)
  ```
  Note: this shape includes downstream-selector tracking. Routeman explicitly does NOT select (per meaning-layer commitment). The sample-story shape is NAVIGATION/NAVIGATOR-shaped, broader than routeman alone.

- **S5 — The 16-type movement taxonomy** lives in §2.2 of routeman.md. Meaning-layer; preserved.

- **S6 — The 6 purpose-groups in per-route schema** (Route Identity / Route State / Route Meaning / Reasoning / Adaptive Guidance / Continuation Memory). Some are load-bearing for enumeration (Identity, State, Reasoning); some for prescriptive guidance (Adaptive Guidance); some for forward-looking memory (Continuation Memory). Per-group simplification candidates exist.

- **S7 — The Telemetry Block has 3 sub-categories.** Content telemetry (route distribution counts) + Control telemetry (cycle execution) + Quality telemetry (failure-mode + verdict). Each could live differently.

- **S8 — Dead inheritance pattern.** The 3 unused statuses (queued, scheduled, expanded) belong to PROTOCOL-RUN flow, not per-route state. Several frontier-candidate-record fields (`candidate_id`, `parent_map`, `expansion_reason`, `eligibility_reason`, `scheduling_reason`, `child_map_path`) carry protocol-internal control data not used by routeman's per-Route entries. Dead schema.

- **S9 — Cross-discipline borrowed concepts in current spec.** From surfacing.md: workspace work-product + thin artifact work-product; LAYER-1/LAYER-2 failure framework; relevance-attribution mechanism. Some borrowings load-bearing (LAYER-1/LAYER-2); some cargo-culted (the workspace concept makes less sense for routeman, which produces routes not territory-items).

### Foundational Principles (assumptions / rules / axioms)

- **F1 — A discipline output should be the simplest shape that preserves required function.** Per `anatomy_of_disciplines.md`: 4 output layers (transform + progression + telemetry + frontier) — no more.

- **F2 — File-system-is-the-thinking-structure.** Per `folder_based.md`. Folder structure IS the thinking structure. Heavy-machinery in-file is friction against this principle.

- **F3 — Append-only with status updates is project-canonical persistence.** Per `_state.md` History + `nav_sample_story.md`.

- **F4 — Session isolation is invariant for cross-run steering.** Output must be readable from disk without session-state assumptions.

- **F5 — "Inherited but unused" is an anti-pattern.** Per regression detection lens; dead schema is regression risk.

- **F6 — LLM-operational-characteristics-as-design-input** (named for routeman in 2026-05-23_18-58). Some complexity IS justified by LLM operational limits. But the principle doesn't blanket-justify all complexity.

- **F7 — Asymmetric-failure principle from surfacing.** Missing a possible move > enumerating an extra one. Applied to enumeration: this constrains how aggressively content can be simplified (the enumeration set must stay complete).

### Meaning-Nodes (central concepts / themes)

- **M1 — "Enumeration" as core meaning-layer commitment.** Preserved by user. Touching enumeration content is out of scope. Touching wrapping schema is in scope.

- **M2 — "Simplification of output STRUCTURE" vs "simplification of enumeration CONTENT".** Critical distinction. The user's constraint "not simplifying enumeration, or compressing it" targets CONTENT compression. STRUCTURE simplification (removing dead wrapper schema; cutting persistence-protocol layers) is in-scope.

- **M3 — "Multi-head consumption" as constraint-node, not content-commitment-node.** Multi-head means N parallel workers each produce ONE output; Navigator reads N outputs and aggregates. Each individual routeman output doesn't need to encode multi-head-specific machinery.

- **M4 — "Poison" as a process-anchor, not a verdict.** Per problem.md: "doesnt mean these are bad, or not feasible. but we should be suspectful." Per-commitment test, not blanket reject.

- **M5 — "Comprehension friction" as a cognitive-load measure.** A reader opening routeman.md should understand the output shape without holding many simultaneous things in mind. Net cognitive cost vs benefit is empirically open per commitment.

### SV2 — Anchor-Informed Understanding

Routeman's current output is a 4-layer stack (α enumeration content + β persistence-protocol + γ meta-reasoning/audit + δ telemetry). Three of the four layers were added INTO routeman by adoption of external designs across the 14-39 / 18-58 / 24-00 inquiry chain. The enumeration content (α) is the meaning-layer commitment the user preserves. The other three layers are candidates for simplification. The user's working hypothesis (`routeman.md + _route.md`) implicitly removes most of β, keeps α, partially restructures δ. Multi-head compatibility is a Navigator-layer concern, not routeman-output-layer concern. User-voice critique of warming-summary actively rejects any structural commitment that re-introduces it.

*Meta-Inspection at SV2.* H4 (concept names): the "navigation" vocabulary + the `_navig.md` / `routeman.md` alias (per FF-Su4) creates the kind of name-confusion H4 calls out. H5 (motivating examples): the user's `routeman.md + _route.md` hypothesis is built on a small set (`_state.md`, `_branches.md`); H5 says test whether these are illustrative or the whole pattern. Both are tested in Phase 3.

---

## Phase 2 — Perspective Checking

### Technical / Logical perspective

Confirmed the dead-inheritance pattern (K2 / S8) by side-by-side spec comparison. Added: cross-discipline borrowing analysis (S9) — some borrowings load-bearing, some cargo-culted.

### Human / User perspective

Strengthened K9 (user invites challenge) and K10 (veto power). Added K11 (open thinking-with stance for deliverable).

### Strategic / Long-term perspective

Added K12 (precedent-setting awareness — routeman is the only shipped Boundary discipline; its shape templates `/reflect`'s future shape). Added C8 (cross-inquiry aggregation is forward-looking; simplification must not foreclose it).

### Risk / Failure perspective

Added K13 (over-simplification risk; `_route.md` might be too thin for genuine cross-invocation needs). Added K14 (removing adoption re-opens questions; persistence requirement persists even if vocabulary simplifies).

### Resource / Feasibility perspective

Added K15 (simplification has positive cost-benefit on author/read/maintain time). Added K16 (anti-confusion machinery may itself confuse — addresses FF-Su6).

### Definitional / Internal Consistency perspective

Tested whether the 4-layer model is internally consistent against routeman's stated identity. Result: α + adaptive-guidance content IS routeman's identity; β is smuggled-in via adoption; γ depends on parent decision; δ is project-canonical. (K17.) Internal consistency holds.

### Definitional / Frame-exit Completeness perspective

Gating fires: inquiry uses "layer" across 4 distinct values (α / β / γ / δ) within its own committed structures; uses "persistence" across multiple values.

**Existence Enumeration on "persistence":**
- (a) Cross-session persistence — output readable from disk across LLM sessions (file-system-based).
- (b) Cross-invocation persistence within one inquiry — re-running routeman; read prior `_route.md` / `_navig.md`.
- (c) Cross-inquiry persistence at project scale — Navigator across N inquiries reads all routeman outputs.
- (d) Protocol-state persistence — the `multi_resolution_navigation` frontier-ledger semantics (queued/scheduled/expanded/...) for batched expansion runs.

**Role Assessment on (d) (excluded from inquiry frame):** The operation's coherence is preserved if (d) is excluded — routeman doesn't run batched expansions; the protocol-state vocabulary never fires.

**Verdict Rigor on the "(d) is excluded" verdict.** Counter: "but the protocol was adopted explicitly; excluding (d) un-adopts the protocol." Structural test: was the protocol adopted FOR (d), or for (a/b/c)? Per inquiry 2026-05-24_00-20's adoption rationale: "the user's stated functions map point-for-point to the protocol's resume mechanism." Resume mechanism is (a) + (b) + (c). (d) was inherited as a side-effect of verbatim adoption, not for its specific functionality. Counter fails structurally. Confidence: HIGH.

### Phase / Calibration-State perspective

Routeman's current spec depends on the project's phase. The project's current phase is "early operation" per surfacing.md §4.6 (bootstrap / early operation / mature operation trajectory). Some current-spec commitments (the 13-field frontier-candidate-record; the 4-axis content distinction; multi-head machinery) are PROSPECTIVELY-CALIBRATED for future-state mature operation. Simplifying to match the current phase does NOT preclude future-state additions but DOES reduce drag from forward-state machinery currently unused.

### SV3 — Multi-Perspective Understanding

The current routeman output spec is a 4-layer stack where one layer (β) was imported verbatim from an external protocol designed for a broader use case. The verbatim import resulted in: dead inheritance (S8 / FF-Su2: 3 of 10 statuses unused; multiple record fields unused); cross-discipline borrowings split between load-bearing and cargo-culted; prospectively-calibrated machinery for future-state multi-head + cross-invocation aggregation that the project hasn't reached.

The user's working hypothesis implicitly removes layers β + parts of δ, keeps α + partially γ. But naïve removal of β creates a different problem: the cross-invocation resume mechanism (which the user themselves originally requested in 2026-05-24_00-20) needs SOME persistence vocabulary. Pure datetime + calc stats might be too thin. Simplification must preserve the resume semantics with a vocabulary that's NOT the protocol's 10-status.

Multi-head compatibility lives at the Navigator-consumer layer. Routeman's output need only be self-describing on disk + carry worker-identifier inherently + have stable schema.

User has VETO POWER on warming-summary and source-inquiry-required commitments.

Routeman is precedent-setting for future Boundary disciplines.

*Meta-Inspection at SV3.* H1 (candidate set): three candidate shapes exist (current, user-hypothesis, old_nav_logic) — they're three POINTS on a complexity axis with the same underlying operation (enumerate routes + persist state for re-invocation). H7 (phase/calibration state): applied above. H8 (self-reference): sensemaking applied to routeman, not to itself — no circularity.

---

## Phase 3 — Ambiguity Collapse

### Ambiguity 1: "Layers" — what counts as a layer in routeman's output spec?

**Strongest counter-interpretation:** The spec doesn't define layers; calling them layers is an external imposition. The spec presents per-route schema + wrapper + telemetry as ONE structure, not 4 layers.

**Why the counter fails (structural grounds):** Each layer has a distinct CONTENT TYPE (enumeration items / persistence records / meta-reasoning text / observational metrics) AND a distinct EVOLUTION PATH (α from 14-39; β from 24-00 adoption; γ from 18-58; δ project-canonical). Distinct content + distinct evolution prove the layers are structurally separable concerns, not arbitrary external imposition.

**Confidence:** HIGH.

**Resolution:** Routeman's current output spec is genuinely a 4-layer stack.

**What is now fixed?** The 4-layer model is the lens for Decomposition.

**What is no longer allowed?** Treating the spec as monolithic; treating one layer's commitments as inseparable from another's.

**What now depends on this choice?** Decomposition can partition by layer; Innovation can propose per-layer simplifications; Critique can test per-layer.

**What changed in the conceptual model?** The current spec is no longer "one heavy thing" — it's four separable things, each with its own simplification space.

---

### Ambiguity 2: "Multi-head compatibility" — what's the actual requirement?

**Strongest counter-interpretation:** Multi-head compatibility requires routeman's output to encode multi-head-specific machinery (worker-id fields; cross-worker aggregation pointers).

**Why the counter fails (structural grounds):** Per `docs/canon/towards_cross_run_cognitive_steering...md`: "Worker session: solve the current inquiry. Navigator session: read completed artifacts." Each Worker produces ONE output; Navigator reads N outputs and aggregates. Aggregation logic lives in the Navigator. Routeman output need only be (a) self-describing on disk, (b) carry worker-identifier (inquiry folder + timestamp inherently provide this), (c) have stable schema.

**Confidence:** HIGH (the cross-run-steering doc explicitly delegates aggregation to the Navigator).

**Resolution:** Multi-head compatibility = (a)+(b)+(c). Current heavy machinery is NOT what gives it multi-head compatibility.

**What is now fixed?** Multi-head is a near-trivially-satisfied constraint, not a justification-for-heaviness.

**What is no longer allowed?** Justifying current spec heaviness via multi-head.

**What now depends on this choice?** Simpler shapes (Path A, B, C) are not disqualified by multi-head; they only need to satisfy (a)+(b)+(c).

**What changed in the conceptual model?** Multi-head moves from "justification for current heaviness" to "near-trivial constraint" — addresses FF-Su3.

---

### Ambiguity 3: "Enumeration" — what specifically is preserved?

**Strongest counter-interpretation:** "Enumeration" means the full current per-route schema (all 17 fields per top-level Route + 18 per sub-Route). Simplifying any field is simplifying enumeration.

**Why the counter fails (structural grounds):** Per the user's verbatim quote: "we need enumeration of routes for sure" — referring to keeping the SET of routes complete. CONTENT of each route (Direction / Goal / Movement Type / Priority / Status / Purpose / WHY / Guidance / Continuation Note) is the enumeration. Per-route SCHEMA WRAPPER fields (`candidate_id` from protocol; `parent_map`; `expansion_reason`; `eligibility_reason`; `child_map_path`; etc.) are NOT enumeration content — they are persistence-layer wrapping.

**Confidence:** HIGH on user intent (verbatim quote). MEDIUM on per-field adjudication (which goes to Decomposition).

**Resolution:** "Enumeration preserved" = (a) every reasonable next-move enumerated + (b) each route carries enough content for downstream selection (Direction/Goal/Type/Priority/Status/Reasoning/Guidance). Per-route schema WRAPPING (protocol persistence fields; multi-head-specific fields) is OUT of "enumeration is preserved." Schema field count can shrink.

**What is now fixed?** A clear boundary between enumeration-CONTENT (preserved) and schema-WRAPPING (simplification-eligible).

**What is no longer allowed?** Justifying full schema retention via "enumeration must be preserved."

**What now depends on this choice?** Decomposition can adjudicate per-field. Innovation can propose minimal-content schemas.

---

### Ambiguity 4: "Persistence" — what cross-invocation state does routeman actually need?

**Strongest counter-interpretation:** The protocol's 10-status status vocabulary + 13-field frontier-candidate-record is the right persistence vocabulary. Anything simpler loses recalibration capability.

**Why the counter fails (structural grounds):** The user's original 2026-05-24_00-20 framing identified THREE concrete cross-invocation operations: "read all navig.md files; recalibrate already-existant directions (importance, goal); decompose or create new directions." Three operations. The 10-status status vocabulary supports a DIFFERENT need (batch-execution control: which candidates were scheduled/expanded/deferred-by-budget). Routeman doesn't run batched expansions; it produces a Route Map. The 13-field record tracks individual candidates through multi-batch expansion. Routeman's per-Route entry already carries Direction/Goal/Type/Priority/Status — the same content the protocol's record carries but in fewer fields. The protocol's machinery scale-exceeds routeman's actual persistence need.

**Confidence:** HIGH.

**Resolution:** Routeman's persistence-layer requirement is bounded to 3 operations (read-prior + recalibrate + add-new). The protocol's 13-field + 10-status machinery is excess.

**What is now fixed?** Persistence requirement is bounded to 3 operations.

**What is no longer allowed?** Justifying `_navig.md` heaviness via "we need it for persistence."

**What now depends on this choice?** Innovation can propose minimal `_route.md` schemas. Critique can test whether minimal schemas preserve the 3 operations.

---

### Ambiguity 5: "Self-describing on disk" — what does Navigator-across-heads actually need to read?

**Strongest counter-interpretation:** The Navigator needs every field in the current routeman.md spec to aggregate properly.

**Why the counter fails (structural grounds):** Per `docs/canon/towards_cross_run_cognitive_steering...md`, the Navigator operates on "movement-space attention" — asking "where can the system move next given what was produced?" It compares heads on movement value. The fields it needs per-route: Direction (what kind of move), Type (movement type for cross-head balance), Priority (which head's routes are higher), Status (open/blocked/done), Reasoning (why this move). These all map to α (enumeration content). β fields (`candidate_id`, `parent_map`, `expansion_reason`) are protocol-internal control data — not cross-head-comparison content.

**Confidence:** MEDIUM-HIGH (the cross-run-steering doc doesn't enumerate per-field; inferred from Navigator's stated role).

**Resolution:** Navigator-across-heads consumes α + worker-identifier + stable format. β fields are NOT what Navigator reads.

**What is now fixed?** Navigator's read-needs scope α + worker-identifier + stable format.

**What is no longer allowed?** Justifying β layer retention via "Navigator needs it" without specific evidence.

**What now depends on this choice?** Critique can adversarially test: "is there any specific β field the Navigator-across-heads provably needs?"

---

### Ambiguity 6: The user's hypothesis (`routeman.md + _route.md`) — is it the answer, or a starting point?

**Strongest counter-interpretation:** The hypothesis IS the answer. Adopt it.

**Why the counter fails (structural grounds):** Per the user: "but maybe this is missing some vital information? lets think it through." Explicit invitation to challenge. Per the specific-vs-pattern check in `_branch.md` Scope Check: treating the hypothesis as the only candidate is premature narrowing. Per K14, the user's prior 24-00 commitment to recalibration semantics — the simpler `_route.md` (datetime + calc stats) might not cover recalibration without additional structure.

**Confidence:** HIGH (user explicitly invites; _branch.md scope check is explicit).

**Resolution:** The hypothesis is the bracket-narrow pole of the simplification space. The current spec is the bracket-broad pole. The right shape is to-be-determined within the bracket — possibly closer to the user's pole but not necessarily identical.

**What is now fixed?** The simplification space exists as a bracket between two poles.

**What is no longer allowed?** Treating the user's hypothesis as the answer; treating the current spec as the floor.

---

### Ambiguity 7: The 4-axis content distinction — anti-confusion machinery that itself confuses?

**Strongest counter-interpretation:** The 4-axis distinction is load-bearing anti-confusion machinery; removing it re-introduces the confusion it prevents.

**Why the counter fails (structural grounds):** Per 2026-05-23_18-58 §4: the 4-axis distinction was added BECAUSE `why_this_might_be_important` was added. The distinction is downstream of the field commitment. If the field stays, the distinction stays. If the field is cut (e.g., due to filler-meta-reasoning LAYER-2 failure-mode the inquiry itself flagged), the distinction goes too.

**Confidence:** MEDIUM (resolution depends on `why_this_might_be_important` field's adjudication in Critique).

**Resolution:** The 4-axis distinction is not independently load-bearing — it's a dependent commitment. Test the parent (`why_this_might_be_important`); the distinction follows.

**What is now fixed?** The 4-axis distinction's status is contingent on a parent decision rather than absolute. (Addresses FF-Su6.)

**What is no longer allowed?** Treating the 4-axis distinction as independently load-bearing.

---

*Refinement note (applied at Phase 3): Specific-vs-pattern recognition cue.* The inquiry's frame commits to a key concept ("the current routeman output is a 4-layer stack"). This concept is built on a small set of specific examples (the current spec; 3 adopted source inquiries; the protocol). Per refinement: are these examples THE WHOLE PROBLEM or a few cases of a wider pattern? Resolution: The 4-layer model is descriptive of the CURRENT spec, not normative for all possible spec shapes. Simpler shapes have fewer layers. The model is the lens for adjudicating the current spec, not a constraint on candidate shapes.

*Refinement note (applied at Phase 3): Load-bearing concept test.* Three load-bearing concepts tested:
- **"Layer"** as terminology. User-language alignment: user uses "logic"; "layer" is project-canonical (autonomy LAYERS, surfacing LAYER 1/2). Confidence MEDIUM — possible rename to "concern" if reader testing surfaces friction.
- **"Persistence-protocol"** as β label. User-language is "memory" + "calculation stats." Possible rename: "cross-invocation memory." Confidence MEDIUM.
- **"Simplification space"** as inquiry output space. User-language aligns with "simplify" verb. Confidence HIGH.

### SV4 — Clarified Understanding

The current routeman output spec is a 4-layer stack:
- **α — Enumeration content.** Meaning-layer commitment; preserved.
- **β — Persistence-protocol** (adopted from `multi_resolution_navigation`). Heaviest layer; most aggressive simplification candidate; dead-inheritance evidenced.
- **γ — Meta-reasoning/audit.** Contingent simplification candidate; downstream of `why_this_might_be_important` field commitment.
- **δ — Telemetry.** Project-canonical; light simplification candidate.

The simplification space is bounded by 7 constraints (enumeration preserved at content-level; 3-operation persistence; multi-head via Navigator-layer; session isolation; append-only pattern; user vetoes; precedent-setting). Within these constraints, viable shapes must satisfy: per-route content (α) preserved; persistence vocabulary supports read-prior + recalibrate + add-new; output self-describing on disk + worker-identifier + stable schema; no warming-summary; no source-inquiry-required; respects project conventions.

Multi-head compatibility is satisfied trivially. Status-vocabulary dead-inheritance is the cleanest β simplification target. Telemetry survives but may restructure. 4-axis distinction is contingent.

Three candidate shapes exist on the complexity axis: current (heavy), user-hypothesis (light), old_nav_logic-shape (medium with Navigator-shaped fields). The right shape is to-be-selected within the bracket — Innovation generates candidates; Critique tests.

---

## Phase 4 — Degrees-of-Freedom Reduction

### What is now fixed
- The 4-layer model (α/β/γ/δ) of the current spec.
- The 3-operation persistence requirement (read-prior, recalibrate, add-new).
- Multi-head is a Navigator-layer concern.
- "Enumeration preserved" = content-fields preserved, not all wrapping fields.
- Simplification space exists as a bracket between two poles.
- The 4-axis content distinction is contingent on the meta-reasoning field commitment.
- User vetoes (warming-summary, source-inquiry-required) are constraints.

### What is eliminated (no longer viable)
- "Multi-head requires the protocol's machinery" argument.
- "Enumeration preservation requires every current schema field" argument.
- The user's hypothesis as the unconditional answer.
- The current spec as the floor.
- The 4-axis distinction as independently load-bearing.
- The protocol's 10-status vocabulary as inherently necessary (3 unused are dead).
- Re-introducing warming-summary structures.
- Requiring a specific source inquiry.

### What paths remain viable (input space for Decomposition + Innovation)

- **Path A** — User's hypothesis adopted directly: `routeman.md` + `_route.md` minimal (datetime + calc stats). Test: does it cover the 3 persistence operations?
- **Path B** — `nav_sample_story`-shape adapted to routeman: `routeman_<N>.md` sequential + `_route.md` activity ledger (Runs / Open Directions / History sections; trim the Selections/Spawned-Children sections that are Navigator/Selector territory).
- **Path C** — Mid-bracket: `routeman.md` content + `_route.md` carrying routeman-specific minimum persistence vocabulary (not the protocol's full machinery; a routeman-specific 4-5-field record schema).
- **Path D** — Current spec lightly trimmed: keep most of current shape but cut dead-inheritance (3 statuses + unused frontier-record fields) + cargo-culted commitments (workspace work-product framing). Drop the protocol-adoption framing but keep protocol-derived field names where they pay rent.
- **Path E** — Refactor by layer: keep α + γ-trimmed + δ-restructured; eliminate β entirely; cross-invocation persistence handled via lightweight pointers (e.g., `prior_invocation_paths` field in routeman.md itself + a thin `_route.md` for just the run metadata).

These 5 paths form the candidate space.

### SV5 — Constrained Understanding

The simplification space is bounded by 7 constraints and contains 5 viable candidate paths along a complexity bracket. The user's hypothesis (Path A) is the narrow pole; the current spec (effectively Path D's untrimmed parent) is the broad pole. Paths B/C/E are intermediate. The dead-inheritance in β is the most structurally obvious simplification target. The 4-axis distinction is the most contingent target. The telemetry layer is the most project-canonical (least room).

---

## Phase 5 — Conceptual Stabilization

*Refinement note (applied at Phase 5): Accommodation trigger check.* Did new perspectives keep producing destabilizing anchors that forced model revision? Reviewing the trace:
- Phase 1 produced anchors fluently across all 5 categories.
- Phase 2 perspectives EXTENDED the model (added dead-inheritance + Navigator-layer-vs-routeman-layer separation) without forcing fundamental revision.
- Phase 3 ambiguity collapses produced 6 HIGH-confidence resolutions + 1 properly-contingent (Ambiguity 7).
- Phase 4 degrees-of-freedom reduction was clean.

The model fit the territory. **Accommodation trigger does NOT fire.**

### SV6 — Stabilized Model

**Routeman's current output is a 4-layer stack — three of the four layers are simplification candidates within explicit constraints.**

The 4 layers:
- **α — Enumeration content** (per-route Direction, Goal, Movement Type, Priority, Status, Purpose, WHY, Guidance, Continuation Note). Meaning-layer commitment; preserved by user; out of simplification scope.
- **β — Persistence-protocol** (adopted from `multi_resolution_navigation`). 13-field frontier-candidate-record + 10-status status vocabulary + coverage modes + batch_size + expansion_policy + scheduling_policy. Dead-inheritance evidenced (3 of 10 statuses unused; multiple record fields unused). MOST AGGRESSIVE simplification candidate.
- **γ — Meta-reasoning/audit** (`why_this_might_be_important` field + 4-axis content distinction + LAYER-2 audit substrate). Added by 2026-05-23_18-58. CONTINGENT simplification candidate (depends on whether `why_this_might_be_important` survives Critique).
- **δ — Telemetry** (~10 metrics: route distribution, Family balance, reachability, guidance allocation, etc.). Project-canonical per `anatomy_of_disciplines.md`. LIGHT simplification candidate (restructure but don't remove).

The simplification space is bounded by 7 constraints:
1. Enumeration preserved at content-level (not field-count level).
2. Persistence supports 3 operations (read-prior, recalibrate, add-new).
3. Multi-head via Navigator-layer (not routeman-output-layer machinery).
4. Session isolation (output disk-readable without session state).
5. Append-only-with-status-updates pattern (project-canonical).
6. User vetoes (no warming-summary; no source-inquiry-required).
7. Precedent-setting awareness (simpler shape sets simpler template for `/reflect`).

Five candidate paths remain viable:
- **A** User-hypothesis-minimal · **B** `nav_sample_story`-shape adapted · **C** routeman-specific-minimum-persistence (mid-bracket) · **D** current-spec-trimmed-of-dead-inheritance · **E** refactor-by-layer (eliminate β, restructure δ, contingent γ).

Multi-head compatibility is satisfied by any output that is self-describing on disk + has a stable schema + carries a worker-identifier (inquiry folder + timestamp inherently provide this). It is NOT a justification for current spec heaviness.

The 7-of-10 status-vocabulary dead-inheritance is the most structurally obvious simplification target. The Telemetry layer is project-canonical and survives but may restructure. The 4-axis content distinction is downstream of the parent field commitment.

The output of the simplification analysis is a SHAPE SELECTED FROM THE BRACKET — concretely, a per-layer decision (preserve α; substantially trim β; contingent on Critique trim γ; light restructure δ) materialized as a specific file/section structure.

**How SV6 differs from SV1:**
- SV1: "The current spec is complicated; we'll see if we can simplify."
- SV6: "The current spec is a 4-layer stack with known dead-inheritance in β. Three layers are simplification candidates under 7 explicit constraints. Five paths remain viable. The deliverable is a per-layer decision selecting a specific point on the complexity bracket — not the user's hypothesis verbatim, not the current spec lightly edited, but a specific per-layer adjudication."

The model is stable. Ambiguity-resolution ratio: 6 HIGH + 1 contingent (acknowledged as proper deferral) = 7/7 explicitly addressed. SV1 → SV6 shows a clear STRUCTURAL SHIFT (from "complicated, simplify maybe" to "4-layer stack, 5 viable paths, 7 constraints, per-layer decision required").

---

## Frontier Flag Resolution Mapping

| Surfacing flag | Resolved in Sensemaking? | Where |
|---|---|---|
| FF-Su1 — layer separation (where does β end and α begin) | **YES** (HIGH) | K1 + Ambiguity 1 — 4-layer model with content-type + evolution-path tests |
| FF-Su2 — 10-status inherited vs 7-status used | **YES** (HIGH) | K2 / S8 — dead inheritance proven structurally |
| FF-Su3 — multi-head consumption shape unexercised | **YES** (HIGH) | K7 + Ambiguity 2 — multi-head is a Navigator-layer concern; routeman output need only satisfy (a)+(b)+(c) |
| FF-Su4 — routeman.md / _navig.md redundancy | **PARTIAL** | K5 surfaced three 2-file splits at different complexity points; Decomposition + Innovation will adjudicate which split is right |
| FF-Su5 — user-voice critique of warming-summary | **YES** (HIGH) | C4 — user veto encoded as constraint |
| FF-Su6 — 4-axis content distinction confusion-vs-anti-confusion | **CONTINGENT** | K16 + Ambiguity 7 — depends on parent field commitment; deferred to Critique |
| FF-Su7 — multi-head + staging interaction (Parent Route ambiguous across heads) | **PARTIAL** | Subsumed by FF-Su3 resolution — staging is a routeman-internal mechanism; cross-head aggregation is Navigator-internal; the `Parent Route` reference is scoped to one worker's output |
| FF-Su8 — reflect-as-paired-Boundary template implication | **YES** (HIGH) | K12 — precedent-setting awareness encoded as constraint C7-adjacent (precedent-setting); simpler routeman shape sets simpler reflect template |

---

## Telemetry / Saturation Indicators

- **Perspective saturation:** 7 perspectives applied; new anchors continued through frame-exit completeness (S8 dead-inheritance); saturation reached at H1-H9 meta-inspection (no new anchors).
- **Ambiguity resolution ratio:** 7/7 explicitly addressed; 6 HIGH-confidence + 1 contingent (Ambiguity 7 acknowledged as proper deferral).
- **SV delta:** SV1 → SV6 shows a clean structural shift (from informal observation to 4-layer stack + 5 viable paths + 7 constraints).
- **Anchor diversity:** Anchors from all 5 types (constraints, insights, structural points, principles, meaning-nodes); insights drawn from 7 perspectives.
- **Failure modes observed:**
  - Status Quo Bias — no (defended structures explicitly challenged via β-adoption critique).
  - Premature Stabilization — no (Phase 5 accommodation trigger does NOT fire; multi-perspective testing was substantive).
  - Anchor Dominance — no (multiple anchors load-bearing across layers and constraints; no single anchor doing all the work).
  - Perspective Blindness — no (uncomfortable perspectives applied — frame-exit completeness fired with structural verdict against the protocol-adoption's verbatim form).
  - Clean Resolution Trap — no (each ambiguity resolution stated strongest counter-interpretation and tested it on structural grounds; not on precedent).
  - Self-Reference Blindness — no (sensemaking applied to routeman, not to sense-making's own discipline structure).

**Overall: PROCEED** — model is stable; 7/7 ambiguities addressed; no failure modes observed; downstream Decomposition has clear partition seams (the 4 layers + the 5 candidate paths + the 7 constraints + the per-layer simplification-target heaviness ordering: β > γ > δ > α).
