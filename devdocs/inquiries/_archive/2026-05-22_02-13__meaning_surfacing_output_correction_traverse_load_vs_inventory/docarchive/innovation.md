# Innovation: Surfacing — Output Correction (Traverse + Load vs Content-Bearing Inventory)

## User Input

(/MVL+ branch file + 13 RDs from Sensemaking + 7-piece Q-tree from Decomposition)

`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-22_02-13__meaning_surfacing_output_correction_traverse_load_vs_inventory/_branch.md`

Plus additional instructions: per-piece Seed → Generate → Test in dependency order PHASE A → E. 2 CONTRARIAN-RETHINK Inversions at P1 + P6. Verdict: PROCEED to Critique.

---

## PHASE A: P1 — Dual output: workspace + thin artifact

### Seed (P1)

The dual output commitment + workspace operational definition + "thin" criterion. User's correction is the central evidence.

### Generate (P1)

**Mechanism — Inversion (CONTRARIAN-RETHINK):**

Inversion-candidate: "What if there is NO artifact at all; the LLM workspace IS the only output?"

Level 1: "Surfacing produces only the workspace; no persistent artifact is needed; downstream operates on whatever's in the LLM session."

Level 2: "Cross-session resume is therefore impossible; the inquiry is single-session-bound."

**Test of the inversion-candidate:**

- Novelty: not novel (some prior-discipline outputs already have ephemeral workspace-only states in practice — but those disciplines also produce artifacts).
- Scrutiny survival: FAILS. Cross-session resume is structurally required by the project's `_state.md`-based folder architecture (per `docs/runtime_environment/folder_based.md`). Without a persistent artifact, a new LLM session resuming the inquiry has no input from surfacing; downstream operations cannot proceed; the inquiry is broken on session-end.
- Fertility: would force every inquiry to complete in one session; incompatible with the project's flow-type architecture.
- Actionability: the project's runner (e.g., /MVL+) explicitly supports cross-session resume; the inversion would invalidate the runner's contract.
- Mechanism independence: Domain Transfer (importing from operating-system process trace patterns — every process produces a persistent trace, not just runtime state) confirms the artifact is necessary.

**Inversion-candidate REJECTED on cross-session-resume + runner-contract + Domain-Transfer-convergence grounds.**

**Mechanism — Combination:**

Combine: dual output (workspace + thin artifact) + workspace operational definition (LLM in-context content + explicit scope tags per Working Memory HYBRID delegation) + "thin" criterion (no item content; content-type criterion). What emerges: a complete commitment for what surfacing's output IS at MEANING-layer level.

### Test (P1)

**Final P1 content:**

Surfacing's output is dual:

**(a) The workspace work-product** — the LLM session's in-context content (read items from the bounded territory) plus explicit scope tags (per-item relevance verdicts emitted by the relevance-attribution mechanism during traversal). The substrate is the Working Memory primitive's HYBRID delegation per `docs/thinking_space_dynamics.md` (the Thinking-Space Dynamics reference): "LLM context native + explicit scope tagging." The workspace is observable via LLM introspection: a same-session reviewer can query the LLM about what was read and how it was tagged. The artifact's traversal trace serves as an external corroboration record for the introspection.

**(b) The thin artifact work-product** — a persistent record saved to the inquiry folder per the project's artifact convention. The artifact is "thin" in the operational sense of containing NO ITEM CONTENT. The item content lives in the workspace; the artifact contains METADATA about how the traversal happened, what was discovered, and what coverage was achieved. Size is a CONSEQUENCE of this rule, not the criterion itself — a 200-region artifact with 500 concept-names is thin (no item content); a 5-region artifact with item content would be fat (violates the criterion).

**Why the dual structure.** The user's correction is grounded in operational efficiency: "by no means we expect output to be fully relevant content. thats crazy and weird and inefficient." Duplicating workspace content into the artifact would (a) waste storage; (b) violate the principle that the LLM has just read the content (it doesn't need to re-encode it externally); (c) couple the artifact to the LLM session's specific reading (different sessions may render content differently). The dual structure separates the SUBSTANTIVE product (workspace; rich; session-local) from the NAVIGATION/HANDOFF product (artifact; thin; cross-session-sufficient).

**LBT1 verdict** (workspace work-product defensible): PASSES at MEDIUM-HIGH confidence. The workspace is operationally defined; the observability is via LLM introspection (imperfect but sufficient at the project's current state per HYBRID delegation).

**LBT2 verdict** ("thin" defensible): PASSES at HIGH confidence. "Thin" is operationally grounded in the no-item-content criterion; size is consequence.

**Tests:** Novelty HIGH (the dual-output framing is structurally novel for cognitive disciplines whose work-product was previously conflated). Scrutiny survival HIGH (CONTRARIAN-RETHINK rejected on cross-session-resume grounds + Domain-Transfer-convergence). Fertility HIGH (enables P2-P7's content). Actionability HIGH (downstream disciplines + the runner can integrate the dual structure). Mechanism independence HIGH (the dual structure arrives via the user's correction + Combination + Inversion-rejection).

**Disposition: ACTIONABLE.**

---

## PHASE B: P2 — Artifact internal structure (parallel with P3)

### Seed (P2)

The artifact's two sub-sections + tag granularities + concept-names list structure.

### Generate (P2)

**Mechanism — Combination:**

Combine: Traversal Trace (PRIMARY) + State Summary (DERIVED) + per-trace-entry tags + per-region aggregate tags + flat concept-names list with metadata. What emerges: a complete artifact internal specification.

**Mechanism — Constraint Manipulation:**

Constraint: "the artifact must support cross-session resume." Effect: the Traversal Trace must include item identifiers at sufficient resolution; the concept-names list must include provenance; the coverage map must accurately represent coverage confidence.

Counter-constraint: "the artifact is THIN — no item content." Effect: identifiers + metadata only; no content.

The combination of these two constraints produces the precise field-set.

### Test (P2)

**Final P2 content:**

The thin artifact has two top-level sub-sections:

**(I) Traversal Trace** — chronological record of the discipline's traversal:

| Field | Content per entry |
|---|---|
| Sequence ordinal | Position in the traversal (1, 2, 3, ...) |
| Region (or sub-region) visited | Identifier of the territory region operated on at this step |
| Item identifier(s) enumerated | The identifiers (file paths / function names / candidate names) the discipline enumerated or generated at this step — NOT content |
| Relevance verdict per item | Tag at the 4-level vocabulary (core / sub / side / umbrella) per item enumerated |
| Relevance confidence | HIGH / MEDIUM / LOW per item |
| Step note (optional brief) | Any one-line note the discipline emits during the step (e.g., "high signal density"; "boundary edge reached") |

The Traversal Trace is the PRIMARY granularity for cross-session resume. A new LLM session reading the trace can re-construct what was traversed, in what order, with what verdicts.

**(II) State Summary** — aggregate view, mechanically derived from the trace:

| Field | Content |
|---|---|
| Territory-specification echo | The bounded territory the discipline operated on |
| Purpose-specification echo | The inquiry's purpose biasing relevance-attribution |
| Coverage map | Per-region aggregate: each region tagged with one of confirmed / scanned-but-shallow / inferred / unknown; aggregate relevance verdict per region (DERIVED from per-trace-entry tags in that region) |
| Confirmed-absent regions | Regions traversed where no relevant items were found |
| Concept-names list | Flat list; per-entry: `{name: <string>, type: <vocabulary \| structural-reference \| coined-term>, provenance: <trace-entry-id where discovered>, gloss: <optional one-line>}` |
| Frontier flags | Self-signaled requests for re-invocation; suggested refined-sub-purposes |
| Workspace-populated status | `{populated: true, populated-at: <timestamp>, extent: <coverage-summary>}` initialized by the discipline at Assembly |
| Re-invocation parameters (optional) | If the discipline self-signals re-invocation, suggested parameters |

**Tag granularities.** The 4-level relevance vocabulary applies at three granularities:

1. **Per-item (workspace)** — the LLM holds per-item tags via explicit scope tagging during reading. Not in the artifact.
2. **Per-trace-entry (artifact Traversal Trace)** — PRIMARY artifact granularity; the trace records the verdict per item at the moment of tagging.
3. **Per-region aggregate (artifact State Summary coverage map)** — DERIVED from the trace; computed by aggregating per-trace-entry tags within each region.

**Tests:** Novelty MEDIUM (the two-sub-section + three-granularity structure is structurally novel; individual elements are standard). Scrutiny survival HIGH (cross-session resume sufficiency check passes; "thin" criterion respected). Fertility HIGH (enables P3 runtime + P4 failure modes + P5 calibration to reference specific fields). Actionability HIGH (downstream consumers can read the schema; spec authors can map directly). Mechanism independence HIGH (Combination + Constraint Manipulation converge on the same field-set).

**Disposition: ACTIONABLE.**

---

## PHASE B: P3 — Runtime / session dynamics (parallel with P2)

### Seed (P3)

Re-invocation parameter rename + workspace overload mitigation + workspace-populated field ownership.

### Generate (P3)

**Mechanism — Lens Shifting:**

Lens 1 (single-session lens): "The discipline operates in one session; workspace persists for downstream." Under this lens, the artifact is a handoff record only; the workspace is the primary product.

Lens 2 (cross-session lens): "The discipline's output must survive session end; the artifact is the primary product; the workspace is auxiliary." Under this lens, the artifact must be self-sufficient.

Lens 3 (hybrid lens): "Both cases occur; the discipline must serve both." Under this lens, the artifact is always the cross-session-sufficient record; the workspace is the in-session enhancement.

The hybrid lens (lens 3) is the correct framing: the discipline doesn't know in advance which session-lifetime applies; it must serve both.

**Mechanism — Constraint Manipulation:**

Constraint: "the discipline cannot reliably detect session continuity." Effect: the discipline cannot make session-aware decisions; the runner must.

Counter-constraint: "the discipline must populate the workspace AND signal that population." Effect: the discipline INITIALIZES the workspace-populated field; the runner UPDATES it based on session-continuity observation.

### Test (P3)

**Final P3 content:**

**Re-invocation parameter rename.** Per the prior finding's D11, re-invocation was a parameterized variation with optional `prior-inventory` and `refined-sub-purpose` inputs. Under the new output, the `prior-inventory` parameter is renamed and split:

- **`prior-artifact`** — always available (persisted to disk from prior invocation). The thin artifact's Traversal Trace + State Summary serve as the re-invocation's reference.
- **`prior-workspace`** (optional) — set by the runner when the same LLM session continues from prior invocation. If absent, the discipline operates from `prior-artifact` alone (or from scratch if no prior).
- **`refined-sub-purpose`** (unchanged from D11) — a refined purpose for re-invocation.

**Re-invocation behavior:**

- Reception incorporates `prior-artifact` ALWAYS + `prior-workspace` IF AVAILABLE.
- Traversal can skip items in the prior-artifact's Traversal Trace using the trace as an exclusion filter — UNLESS the refined-sub-purpose changes the relevance assessment for previously-traversed items.
- Assembly merges new traversal results with prior-artifact (extending the trace + State Summary) and updates the workspace.

**Runner authority for session continuity.** The discipline cannot reliably detect whether the same LLM session persists from a prior invocation. This is the RUNNER's domain (the runner — e.g., /MVL+ — manages session lifecycle). The discipline's interface accepts `prior-workspace` when supplied; it does NOT try to detect session continuity itself.

**Workspace overload mitigation:**

| Mitigation | Status | When applied |
|---|---|---|
| **Self-signal frontier-for-re-invocation** | PRIMARY | When the territory is large and the discipline approaches workspace capacity (LLM context budget pressure), the discipline traverses what it can within reasonable budget, tags items at the appropriate relevance level, and emits a frontier flag saying "this sub-region is incomplete; re-invoke to cover it." Downstream knows the gap exists and can choose to re-invoke. |
| **Self-throttle via sampling** | SECONDARY (future PROCESS-layer addition) | When the territory is genuinely huge AND the inquiry's purpose explicitly permits sampling — a parameter the discipline does NOT support by default. This is a future PROCESS-layer addition; not at MEANING-layer commitment. |

**Why frontier-signal is primary.** Sampling silently drops items; downstream cannot recover what was sampled out. The asymmetric-failure principle (preserved from prior finding's D8) says: under uncertainty about whether an item is relevant, INCLUDE it. Sampling is incompatible with this. Frontier-signal preserves the asymmetric-failure principle by completing the budget-allowed work + flagging the incomplete region.

**workspace-populated field ownership.**

| Owner | When | Action |
|---|---|---|
| **Discipline** | At Assembly (end of invocation) | INITIALIZES the field: `{populated: true, populated-at: <timestamp>, extent: <coverage-summary>}` |
| **Runner** | Over time (session lifecycle events) | MAINTAINS the field: updates `populated` to `false` when the session ends or the workspace is otherwise invalidated; updates the `extent` if other disciplines further populate the workspace within the same session |

This split ownership reflects the operational reality: the discipline KNOWS the workspace was populated at the moment of Assembly; the runner KNOWS whether the population still holds at later moments.

**Tests:** Novelty MEDIUM (the parameter rename + frontier-signal mitigation + dual ownership are structurally novel for the project; individual elements draw on existing patterns). Scrutiny survival HIGH (frontier-signal preserves asymmetric-failure principle; runner authority preserves session-continuity separation; dual ownership operationally feasible). Fertility HIGH (enables P4 failure modes to ground in runtime). Actionability HIGH (each commitment is operationally precise). Mechanism independence HIGH (Lens Shifting + Constraint Manipulation converge).

**Disposition: ACTIONABLE.**

---

## PHASE C: P4 — Failure framework extension (parallel with P5)

### Seed (P4)

3 new LAYER 1 failure modes specific to the artifact-vs-workspace split.

### Generate (P4)

**Mechanism — Absence Recognition:**

What failures are MISSING from the prior finding's LAYER 1 set under the new output? Surface:

- The workspace can fill up (context budget pressure) — failure: workspace overload
- The artifact can be too thin for cross-session resume — failure: artifact under-specification
- The artifact's tags can diverge from the workspace's tags — failure: workspace-artifact desync

Each is a NEW failure mode introduced by the split. The prior finding's 4 LAYER 1 modes (missed-relevance, surfaced-irrelevance, over-coverage, territory-mis-binding) remain.

**Mechanism — Inversion:**

Inversion: "What if these new failures are actually LAYER 2 (identity) failures?" Test:
- Workspace overload: when this fires, is the discipline's IDENTITY eroded? No — the discipline can recover via frontier-signal + re-invocation. This is operational, not identity-eroding. LAYER 1.
- Artifact under-specification: when this fires, is identity eroded? No — the discipline can recover by tightening Output-shaping. LAYER 1.
- Workspace-artifact desync: when this fires, is identity eroded? No — the discipline can recover by capture-at-moment-of-tagging during Output-shaping. LAYER 1.

All 3 are LAYER 1 (operational, recoverable).

### Test (P4)

**Final P4 content:**

The prior finding's LAYER 1 / LAYER 2 framework (D9) is extended with 3 new LAYER 1 failure modes. LAYER 2 (identity) failures are unchanged.

**New LAYER 1 failure modes:**

| Failure mode | Recognition | Mitigation |
|---|---|---|
| **Workspace overload** | The LLM session reads so much content during traversal that the context window saturates; later cognitive operations within the same session have degraded performance (the LLM cannot hold all of the content + the inquiry's earlier reasoning simultaneously) | PRIMARY: self-signal frontier-for-re-invocation (the discipline traverses what it can within budget, tags items, emits frontier flags for uncovered regions); SECONDARY: sampling (future PROCESS-layer addition) |
| **Artifact under-specification** | The artifact is too thin for cross-session resume; a new LLM session reading the artifact cannot determine what to re-read (item identifiers missing; concept-names provenance missing; coverage map absent or unclear) | Required minimum fields enforced at Assembly's Output-shaping component: every Traversal Trace entry must have item identifiers; every concept-name must have provenance; the coverage map must be complete for traversed regions |
| **Workspace-artifact desync** | The artifact claims item X was tagged core, but the workspace LLM lost track due to context drift over time; the artifact and workspace disagree on tags | Mitigation: the Output-shaping component captures per-item tags AT THE MOMENT of tagging during traversal, not retrospectively. The artifact is the authoritative record of what tags were emitted; if the workspace later diverges, the artifact remains the canonical record |

**Total LAYER 1 modes:** 4 prior + 3 new = 7.

**LAYER 2 (identity) failures unchanged:** interpretive-overstep, purpose-loss, self-coupling-to-downstream (3 modes from prior finding's D9).

**Tests:** Novelty MEDIUM (the modes are structural consequences of the artifact-vs-workspace split). Scrutiny survival HIGH (each mode is recognizable + recoverable; Inversion test confirms LAYER 1 placement). Fertility HIGH (enables P5 calibration to detect these failures). Actionability HIGH (each mitigation is operationally feasible). Mechanism independence HIGH (Absence Recognition surfaces them; Inversion confirms layer placement).

**Disposition: ACTIONABLE.**

---

## PHASE C: P5 — Calibration adjustment (parallel with P4)

### Seed (P5)

Calibration trajectory preservation + signal split between workspace-level and artifact-level.

### Generate (P5)

**Mechanism — Lens Shifting:**

Lens 1: "Calibration operates on the artifact only." Under this lens, signals that need workspace data (PS1, PS4) cannot operate.

Lens 2: "Calibration operates on the workspace only." Under this lens, cross-session calibration fails (workspace is session-local).

Lens 3: "Calibration operates at BOTH layers, with each signal at its natural layer." Under this lens, PS1+PS4 at workspace; PS2+PS3+PS5 at artifact.

The hybrid lens (lens 3) preserves the trajectory while accommodating the dual output.

**Mechanism — Combination:**

Combine: trajectory (bootstrap → early → mature) + signal-to-layer mapping + observation method per signal.

### Test (P5)

**Final P5 content:**

**The calibration trajectory is PRESERVED unchanged.** The 3-stage trajectory (bootstrap → early operation → mature operation) committed in the prior finding's D10 survives the output refinement. The trajectory describes WHEN signals become trustworthy; the signal SPLIT describes WHERE each signal operates. These are orthogonal.

**The signal split:**

| Signal | Operates at | Observation method under new output |
|---|---|---|
| **PS1** (Coverage of obvious items) | WORKSPACE | LLM introspection: query the discipline's session — "did you load the obvious items for this purpose-type?" The session can recall what was read. Cross-session proxy: the artifact's concept-names list — did the obvious items' concept-names appear during traversal? |
| **PS2** (Coverage of confirmed-absent regions) | ARTIFACT | The artifact's State Summary explicitly lists confirmed-absent regions; re-examination verifies accuracy. Unchanged by output refinement. |
| **PS3** (Internal consistency of relevance tags) | ARTIFACT | The artifact's Traversal Trace tags + per-region aggregate tags in State Summary can be checked for internal consistency: no item tagged core in trace but in side-relevant region; no contradictory annotations. |
| **PS4** (Coverage of obvious-misses given purpose) | WORKSPACE + ARTIFACT (hybrid) | Downstream-naive reviewer asks the discipline's LLM session about content (workspace channel) AND reads the artifact's concept-names list (artifact channel); checks for obvious associations. The artifact's concept-names list is the downstream-naive reviewer's primary surface; the workspace provides depth on demand. |
| **PS5** (Coverage of edge items via sub/side-to-core ratio) | ARTIFACT | Count Traversal Trace entries tagged sub-relevant + side-relevant vs core-relevant; observe ratio. The artifact has the tags. |

**Net effect:** PS1 and PS4 use workspace as primary (with artifact as proxy for cross-session); PS2, PS3, PS5 use artifact directly. The calibration trajectory (bootstrap → early → mature) is preserved.

**Phase-state-awareness commitment:** the project is at Stage 1 (Bootstrap) now. All 5 primary signals are operationally feasible at bootstrap, even split across workspace and artifact:
- PS1: LLM introspection feasible NOW (the LLM can recall what it read).
- PS2: artifact's confirmed-absent regions feasible NOW.
- PS3: artifact's tag consistency check feasible NOW.
- PS4: downstream-naive reviewer test feasible NOW (human reviewer; project Level 0 autonomy).
- PS5: artifact's tag ratio feasible NOW.

**Self-containment preserved.** Primary signals (PS1-PS5) do not require downstream verdicts. Secondary signals (SS1, SS2 from prior finding's D10) require downstream observation; they remain self-contained-augmentation only.

**Tests:** Novelty MEDIUM (the split mechanism is structurally novel; trajectory itself is unchanged). Scrutiny survival HIGH (all 5 signals operational at bootstrap; trajectory preserved). Fertility HIGH (enables future calibration buildout). Actionability HIGH (each signal has a named observation method). Mechanism independence HIGH (Lens Shifting + Combination converge).

**Disposition: ACTIONABLE.**

---

## PHASE D: P6 — Inherited Commitments Re-test pre-classification

### Seed (P6)

The 16 prior commitments + which are RE-TESTED vs INHERITED-WITHOUT-RE-TEST under the refinement.

### Generate (P6)

**Mechanism — Inversion (CONTRARIAN-RETHINK):**

Inversion-candidate: "What if ALL 16 prior commitments should be RE-TESTED rather than 8?"

Level 1: "Every prior commitment is potentially affected by the output refinement; re-testing all is conservative."

Level 2: "Re-testing all ensures no hidden coupling between the output and any prior commitment is missed."

**Test of the inversion-candidate:**

- Novelty: not novel; conservative re-testing is a common safe default.
- Scrutiny survival: FAILS. Re-testing unrelated commitments is wasteful and produces a finding that artificially re-derives commitments already settled by the prior inquiry. The 8 INHERITED-WITHOUT-RE-TEST commitments (D1 discipline name, D2 mechanism name, D4 3-phase shape, D7 purposive character, D13 Core taxonomy placement, D14 NOT-list, D15 LBT1, D16 LBT2) are STRUCTURALLY UNTOUCHED by the output refinement — there is no mechanism by which a refinement to the output could affect e.g., the discipline's name or the 8-item NOT-list. Re-testing them artificially expands the inquiry's scope.
- Fertility: re-testing all would produce a finding that conflates "refinement" with "redo from scratch" — confusing for future readers + redundant with the prior inquiry.
- Actionability: the CONCLUDE protocol's `## Inherited Commitments Re-test` section ENFORCES the pre-classification's intentional friction (`INHERITED-WITHOUT-RE-TEST` with reason). The friction is for commitments where the refinement leaves the commitment alone; using the friction for all 16 defeats its purpose (the friction is supposed to highlight which commitments require explicit re-justification).
- Mechanism independence: Constraint Manipulation (removing the constraint "re-test only commitments touched by the refinement") shows the alternative produces an artificially scoped inquiry.

**Inversion-candidate REJECTED on wasteful-scope-expansion + friction-misuse + scope-confusion grounds.**

**Mechanism — Combination:**

Combine: 16 commitments + refinement scope + per-commitment classification.

### Test (P6)

**Final P6 content:**

The prior finding (`devdocs/inquiries/2026-05-22_01-25__meaning_surfacing_pure_discipline_clean_design/finding.md`) committed 16 structural decisions D1-D16 (per its Sensemaking phase). Under the output refinement, each commitment is pre-classified as RE-TESTED or INHERITED-WITHOUT-RE-TEST:

| # | Prior commitment | Re-test status | Reason / Evidence |
|---|---|---|---|
| D1 | Discipline name "surfacing" | INHERITED-WITHOUT-RE-TEST | The output refinement does not affect the discipline's name; the name is identity-substantive, not output-substantive. No mechanism by which the refinement could change D1. |
| D2 | Mechanism name "relevance-attribution" | INHERITED-WITHOUT-RE-TEST | The mechanism's per-item operation is preserved unchanged. The output refinement changes WHERE per-item tags are persisted (workspace + artifact at per-trace-entry granularity), not the mechanism's name or operation. |
| D3 | 4-level relevance vocabulary | RE-TESTED | The vocabulary now applies at THREE granularities under the new output: per-item (workspace), per-trace-entry (artifact PRIMARY), per-region aggregate (artifact DERIVED). **Test result:** vocabulary's structural defensibility holds at each granularity; the multi-granularity application is a refinement, not a re-definition. PASS. |
| D4 | 3-phase structural shape | INHERITED-WITHOUT-RE-TEST | The 3-phase shape (Reception → Relevance-attributed Traversal → Assembly) plus optional Boundary-discovery sub-phase is preserved unchanged. Only Assembly's PRODUCT refines (lighter); the phase count + shape is unchanged. |
| D5 | 6 Traversal components | RE-TESTED | The Output-shaping component within Traversal now shapes the THIN ARTIFACT (not the inventory). The other 5 components (Scope-determination, Item-enumeration/generation, Relevance-attribution, Coverage-tracking, Absence-detection) operate as before. **Test result:** 6 components preserved; Output-shaping's product refines. PASS. |
| D6 | 8 load-bearing primitives | RE-TESTED | The primitive composition (Attention-pointer, Working Memory, Salience, Intuition-similarity, Context-framing, Inhibition, Metacognition, Focus-deep) is preserved. **Working Memory primitive's role is now MORE EXPLICITLY load-bearing** under the new output — the workspace IS the substantive product, and Working Memory's HYBRID delegation (LLM context native + explicit scope tagging) is the workspace substrate. **Test result:** primitives preserved; Working Memory's emphasis refined. PASS. |
| D7 | Purposive character | INHERITED-WITHOUT-RE-TEST | The discipline is intrinsically purposive (the inquiry's purpose is the relevance-bias source). The output refinement does not affect purposive character. |
| D8 | Asymmetric-failure principle (operational form) | RE-TESTED | The principle (territory-bounded + uncertainty-includes) is preserved. **Operational form now applies primarily at workspace level** — the workspace must include relevant content under uncertainty (workspace overload mitigation = self-signal frontier-for-re-invocation, NOT sampling, preserves the principle). **Test result:** principle preserved + operationalized at workspace layer. PASS. |
| D9 | LAYER 1 / LAYER 2 failure framework | RE-TESTED + EXTENDED | The framework is preserved. **3 new LAYER 1 failure modes added:** workspace overload, artifact under-specification, workspace-artifact desync (per P4 of this inquiry). LAYER 2 (identity) failures unchanged: interpretive-overstep, purpose-loss, self-coupling-to-downstream. **Test result:** framework preserved + extended. PASS. |
| D10 | Calibration trajectory + 5 primary + 2 secondary signals | RE-TESTED | The trajectory (bootstrap → early → mature) is preserved. **Signals split between workspace-level (PS1, PS4) and artifact-level (PS2, PS3, PS5)** (per P5 of this inquiry). Secondary signals (SS1, SS2) unchanged. **Test result:** trajectory preserved; signal observation methods refined. PASS. |
| D11 | Re-invocation as parameterized variation | RE-TESTED | Re-invocation is still a parameterized variation. **Parameter renamed:** prior-inventory → prior-artifact (always available) + optional prior-workspace (set when runner determines session persists). Runner is the session-continuity authority. **Test result:** re-invocation semantics preserved; parameter renamed + split. PASS. |
| D12 | Output specification (the relevance-tagged inventory) | RE-TESTED + CENTRALLY REFINED | **This IS the refinement target.** The prior commitment to a content-bearing inventory is REPLACED by the dual output (workspace + thin artifact). The relevance-tagged-inventory framing is replaced by the workspace-load + thin-artifact framing. **Test result:** central refinement; the output specification is the inquiry's primary deliverable. NEW COMMITMENT supersedes prior D12 on the output specification. |
| D13 | Core taxonomy placement | INHERITED-WITHOUT-RE-TEST | The discipline operates pipeline-sequentially at the upstream loop step. The output refinement does not change the placement. |
| D14 | 8-item intrinsic NOT-list | INHERITED-WITHOUT-RE-TEST | The NOT-list items (does not produce stable conceptual structure; does not adjudicate next action; etc.) are all output-independent. Each item grounds in intrinsic features of the operation; the output refinement does not touch any of them. |
| D15 | LBT1 ("relevance" defensible) | INHERITED-WITHOUT-RE-TEST | The relevance concept's defensibility at the inquiry-purpose level is unaffected by the output refinement. |
| D16 | LBT2 ("sensemaking-LIKE-but-NOT-sensemaking" defensible) | INHERITED-WITHOUT-RE-TEST | The 8 structural properties distinguishing the relevance-attribution mechanism from sensemaking-proper are unaffected by the output refinement. |

**Counts:**
- **RE-TESTED:** 8 commitments (D3, D5, D6, D8, D9, D10, D11, D12). All test results: PASS (the refinement either preserves or extends the prior commitment).
- **INHERITED-WITHOUT-RE-TEST:** 8 commitments (D1, D2, D4, D7, D13, D14, D15, D16). All flagged with explicit reason (structurally untouched by the refinement).

**Tests:** Novelty MEDIUM (the pre-classification is methodologically standard for refinement findings; the specific split is novel). Scrutiny survival HIGH (CONTRARIAN-RETHINK rejected on wasteful-scope-expansion grounds; each classification per-commitment justified). Fertility HIGH (enables CONCLUDE's `## Inherited Commitments Re-test` section). Actionability HIGH (CONCLUDE can directly compile from this pre-classification). Mechanism independence HIGH (Inversion-rejection + Combination converge on the same split).

**Disposition: ACTIONABLE.**

---

## PHASE E: P7 — Compliance scope

### Seed (P7)

What's committed in this refinement-finding + what's deferred + the CONCLUDE-not-in-spec preservation.

### Generate (P7)

**Mechanism — Combination:**

Combine: in-scope elements from P1-P6 + deferred elements (STRUCTURAL / PROCESS / user-discretion / research-frontier) + CONCLUDE-NOT-in-spec preservation.

**Mechanism — Absence Recognition:**

What's CORRECTLY MISSING from this refinement-finding? Surface:
- The spec section organization for the new output (STRUCTURAL)
- The session-continuity protocol details (PROCESS)
- The sampling parameter (PROCESS, future)
- The rename / migration timeline (user-discretion)
- The broader pattern of artifact-vs-workspace design principle (research frontier)
- The CONCLUDE consumption protocol (downstream of surfacing's commitment scope)

Each is properly deferred.

### Test (P7)

**Final P7 content:**

**IN-SCOPE (committed by THIS refinement-finding):**

| Element | Source piece |
|---|---|
| Dual output (workspace + thin artifact) | P1 |
| Workspace operational definition (LLM in-context + explicit scope tags; HYBRID substrate) | P1 |
| "Thin" criterion (NO ITEM CONTENT; content-type criterion) | P1 |
| LBT1 verdict (workspace defensible MEDIUM-HIGH) | P1 |
| LBT2 verdict ("thin" defensible HIGH) | P1 |
| Artifact's two sub-sections (Traversal Trace PRIMARY + State Summary DERIVED) | P2 |
| Per-trace-entry tag granularity PRIMARY + per-region aggregate DERIVED | P2 |
| Concept-names list FLAT with per-entry metadata | P2 |
| Re-invocation parameter rename (prior-artifact + optional prior-workspace) | P3 |
| Runner authority for session continuity | P3 |
| Workspace overload mitigation PRIMARY: self-signal frontier-for-re-invocation | P3 |
| workspace-populated field ownership (discipline initializes + runner maintains) | P3 |
| 3 new LAYER 1 failure modes (workspace overload, artifact under-specification, workspace-artifact desync) | P4 |
| LAYER 2 failures unchanged (preserved from prior finding) | P4 |
| Calibration trajectory preserved + signal split (workspace-level vs artifact-level) | P5 |
| Phase-state-awareness preserved (current bootstrap stage) | P5 |
| Inherited Commitments Re-test pre-classification (8 RE-TESTED + 8 INHERITED-WITHOUT-RE-TEST) | P6 |

**DEFERRED to downstream STRUCTURAL inquiry:**

- The spec section organization for the new output schema (where Traversal Trace + State Summary live in the spec file; how the fields are formatted)
- The new failure modes' integration with the spec's failure-modes section
- The calibration signal observation methods' precise documentation

**DEFERRED to downstream PROCESS inquiry:**

- The sampling parameter (when sampling is enabled; how thresholds are set)
- The session-continuity protocol details (how the runner detects session continuity; how it supplies prior-workspace to the discipline)
- The exact iteration counts for workspace overload detection (when to self-signal frontier-for-re-invocation vs continue)
- The workspace-populated field's lifecycle management (when the runner marks `populated: false`)

**DEFERRED to user-discretion decisions:**

- The rename of current `/explore` to `/surfacing` (unchanged by this refinement; same decision as in prior finding)
- The materialization timeline (per `docs/materialization_lifecycle.md`)
- The migration plan from current `/explore`'s confidence-tagged-map output to surfacing's thin-trace output

**DEFERRED to research frontier:**

- The broader pattern: the artifact-vs-workspace design principle for cognitive disciplines whose work-product lives partly in the LLM session. Does every read-into-workspace discipline produce a dual output? A future inquiry could test this.

**NOT IN THE SPEC (disciplines-self-contained principle preserved):**

- CONCLUDE consumption protocol. The surfacing spec does NOT name CONCLUDE. CONCLUDE's consumption of the artifact + workspace is CONCLUDE's concern, handled by `cognitive_harness/protocols/conclude.md`.
- Other sibling disciplines' consumption patterns. The surfacing spec commits the artifact + workspace shapes; downstream disciplines consume per their own specs.

**Tests:** Novelty MEDIUM (the compliance-scope split is a recognized pattern; the specific list is novel). Scrutiny survival HIGH (each item correctly placed). Fertility HIGH (enables future inquiries to pick up deferred items). Actionability HIGH (downstream paths are explicit). Mechanism independence HIGH (Combination + Absence Recognition converge).

**Disposition: ACTIONABLE.**

---

## Final Assembly — Refinement-Finding Content

### The Answer

The prior finding's Section 3 (Vocabulary + Output) committed surfacing's output as a "relevance-tagged inventory" with items carrying full labeling content (identifier + functional one-line + surface form + optional adjacency facts). The user's correction reframes this: surfacing's WORK is traverse + read + LLM-load; the WORK-PRODUCT is DUAL — (a) the LLM workspace (rich; session-local; the substantive product) + (b) a thin artifact (persistent; no item content; the navigation/handoff record).

The refinement preserves the discipline's identity, mechanism, structural shape, primitives, taxonomy placement, NOT-list, and LBT verdicts. It refines: the output specification (centrally), the relevance vocabulary's granularity application (three granularities), the primitive emphasis (Working Memory more explicit), the asymmetric-failure principle's operational layer (workspace level), the LAYER 1 failure framework (3 new modes added), the calibration signal split, the re-invocation parameter rename.

### CONTRARIAN-RETHINK Inversions

2 CONTRARIAN-RETHINK Inversion-candidates were generated + rejected on structural grounds:

1. **P1: "There is NO artifact at all; the LLM workspace IS the only output."** REJECTED on cross-session-resume + runner-contract + Domain-Transfer-convergence grounds.

2. **P6: "ALL 16 prior commitments should be RE-TESTED."** REJECTED on wasteful-scope-expansion + friction-misuse + scope-confusion grounds.

### Assembly Check

The 7 pieces' content together form a coherent MEANING-layer refinement-finding artifact:

- **Identity refinement:** P1 commits the dual output (workspace + thin artifact); P2-P3 operationalize the artifact + runtime semantics.
- **Framework extension:** P4 extends LAYER 1 with 3 new modes; P5 adjusts calibration signals to operate at the right layer.
- **Inheritance handling:** P6 pre-classifies 16 prior commitments; CONCLUDE will incorporate this as the `## Inherited Commitments Re-test` section.
- **Boundary:** P7 commits the compliance scope (in-scope + deferred + NOT in spec).

The 7 HCRs from Decomposition are satisfied. The Reassembly test PASSES.

### Axis Coverage Check

The candidate set varies along multiple orthogonal axes:

- **Output structure axis:** content-bearing inventory vs dual (workspace + thin artifact) — dual chosen.
- **Workspace observability axis:** unobservable / LLM-introspection / external monitoring — LLM-introspection chosen with corroboration via artifact.
- **Artifact form axis:** trace-only / summary-only / two-sub-sections / integrated — two-sub-sections chosen.
- **Tag granularity axis:** per-item-only / per-region-only / multi-granularity — multi-granularity chosen.
- **Re-invocation parameter axis:** unchanged / renamed / split — renamed + split (prior-artifact + optional prior-workspace) chosen.
- **Workspace overload mitigation axis:** sampling-primary / frontier-signal-primary / both-equal — frontier-signal-primary chosen.
- **workspace-populated ownership axis:** discipline-only / runner-only / dual — dual chosen.
- **Calibration trajectory axis:** preserved / refined / replaced — preserved chosen.
- **Inherited Commitments re-test axis:** none / partial / all — partial (8/16) chosen.

Each axis has at least one variant tested.

---

## Mechanism Coverage (Telemetry)

- **Generators applied:** Combination, Absence Recognition, Domain Transfer — 3/4 (Extrapolation NOT applied in this inquiry; the refinement's scope is current-state-focused, not future-trend-focused)
- **Framers applied:** Lens Shifting, Constraint Manipulation, Inversion — 3/3
- **Total mechanism coverage:** 6/7 (Extrapolation gap noted; the refinement does not need to extrapolate trends — it operationalizes a user correction)
- **Convergence signal:** MULTIPLE mechanisms converge on each piece (Combination + Constraint Manipulation at P2; Lens Shifting + Constraint Manipulation at P3; Absence Recognition + Inversion at P4; Lens Shifting + Combination at P5; Inversion + Combination at P6; Combination + Absence Recognition at P7).
- **Survivors tested:** 7/7 (all pieces tested for novelty, scrutiny survival, fertility, actionability, mechanism independence)
- **Failure modes observed:** NONE
  - Premature evaluation: NOT observed
  - Single-mechanism trap: NOT observed (every piece has ≥2 mechanisms)
  - Early frame lock: NOT observed
  - Innovation without grounding: NOT observed
  - Mechanism exhaustion: NOT observed (full Framer coverage; 3/4 Generator coverage; sufficient for refinement scope)
  - Survival bias: NOT observed (2 CONTRARIAN-RETHINK Inversions explicitly engaged + rejected on structural grounds)

- **Property (v) firing forecast:** confirmed NOT firing at all 7 pieces.

- **CONTRARIAN-RETHINK Inversions:** 2/2 applied (P1, P6); both rejected on structural grounds.

---

## Self-Assessment Verdict

**PROCEED to Critique.**

The MEANING-layer refinement content per piece is finding-ready. The 7 pieces' content together form a coherent refinement of the prior finding's Section 3 output specification, with the dual-output commitment + artifact internals + runtime semantics + failure framework extension + calibration adjustment + Inherited Commitments Re-test pre-classification + compliance scope.

Critique will adversarially test the refinement for structural defensibility + alignment with the user's correction + compatibility with the prior finding's preserved commitments + appropriate scope of the Inherited Commitments Re-test pre-classification.
