## User Input

`devdocs/inquiries/2026-06-01_15-28__inquiry_elaboration_process_layer/_branch.md` (prior consumed: `surfacing.md` — 20 items + 8 frontier flags P1–P8)

---

# Sensemaking — IE Process Layer

## SV1 — Baseline understanding
"IE needs a call-site in MVLw (probably Step 0 before existing step 3), input suppliers for its 3 inputs, a spawn primitive that handles N parallel/sequential children, a halt-gate when fidelity FLAGs, branch.md thinning, reference-authority re-homed, and the design must live in runner-specs so IE remains neighbor-free."

## Phase 1 — Cognitive Anchor Extraction

**Constraints**
- **C1 — Layer is PROCESS, meaning + structure settled.** This run instantiates; doesn't re-design IE's identity or §5 schema.
- **C2 — IE self-containment (load-bearing).** The process design lives entirely in **runner-spec + runner-side protocols**, NOT in IE's spec. IE remains neighbor-free; the wiring is one-way: runner-spec → invokes IE; IE-spec doesn't know about runners. This is the load-bearing invariant from 09-54 + 11-46.
- **C3 — Perception/action split (22-30 commitment).** IE perceives + emits verdicts; the runner consumes-and-acts (spawns, encodes, gates). Every interface decision honors this split.
- **C4 — Cross-runner generalization.** Design must work for MVLw immediately AND any other runner (MVL classic, future runners); produce an abstract call-site contract + a concrete MVLw instantiation.
- **C5 — Asymmetric-failure stance.** A passed misframing reaching the loop is worse than over-careful framing; runtime gates bias toward halt-before-loop.
- **C6 — LOOP_DIAGNOSE MCs preserved.** The process design must not silently violate MC-A (surfacing's discipline-target trigger), MC-C (critique's scan-for-neighbor-names), or MC-D (CONCLUDE's broader-reading).

**Key insights**
- **K1 (P1 → call-site).** IE's natural call-site is a NEW **Step 0 — Elaborate the inquiry**, invoked BEFORE existing MVLw step 3 (the `_branch.md` write). This is the position the canon-taxonomy already pre-committed (per 01-37's surfacing item #7: *"Upstream — FIRST, even before surfacing — because it shapes the request that surfacing's purpose comes from"*). After IE runs, step 3 becomes "encode IE's elaborated_inquiry into `_branch.md`" — much thinner.
- **K2 (P2 → input-supply).** Apply routeman's existing **Read-Policy vocabulary** (D2 from surfacing) per input:
  - `original_query` — **MANDATORY** (the user's raw input; no inquiry without it; absence → HALT)
  - `project_goal` — **MANDATORY-WHEN-AVAILABLE** (when a project-goal source exists; absence → FLAG-and-proceed; the long-term anchor's rephrasing replaced by `(anchor not supplied)` per 11-27's graceful-degradation marker)
  - `recent_context` — **SHOULD** (runner attempts to supply; absence → FLAG-and-proceed-without; same graceful-degradation marker)
- **K3 (P3 → spawn mechanics).** **Extend with a runner-side wrapper around the EXISTING branch_inquiry primitive — NOT a new sibling primitive.** branch_inquiry already supports `branch_mode: set-member` + `branch_set_id` (per its §2 Step-1 input contract). The new behavior is a **runner-side `spawn_set` wrapper** that batches branch_inquiry calls from IE's `request-structure verdict`:
  - `single` → no spawn; encode IE's framing into the current `_branch.md`
  - `parallel-set{children}` → call branch_inquiry per child with shared `branch_set_id`
  - `sequential-chain[children, order]` → call branch_inquiry for the first child immediately; subsequent children spawn as predecessors complete (runner-side orchestration)
- **K4 (P4 → runtime gate).** **Halt-with-one-bounce** on fidelity FLAG. This matches 11-27's §3 Process Model commitment ("one verify→comprehend bounce; if it still FLAGs, emit FLAG/RE-RUN rather than loop"), now made operational at the runner-level:
  - `PASS` → proceed (encode + loop runs)
  - `FLAG` (first occurrence) → re-invoke IE ONCE with the flagged-gap surfaced as additional context
  - After the bounce: PASS → proceed; still-FLAG → **halt-before-loop**, surface framing + FLAGs to user
- **K5 (P5 → `_branch.md` rewrite, exact migration).** The template thins; the file gains two new sections:
  - **STAYS runner-side** (in template): Layer Commitment, Synthesis Trigger, Relationships, History
  - **NEW in `_branch.md`** (encoded from IE's output): `## Elaborated Inquiry` (the framing — 5 meta-aspects + Goal + Scope + rephrasings + multi-request list) + `## IE Verdicts` (request-structure verdict + fidelity verdict, for traceability)
  - **MIGRATES INTO IE** (gone from template): Question (5 meta-aspects), Goal, Source Input (preserved by IE's verify axis ii), Scope Check (= IE's verify axis i), Step 3.5 transcription-audit (= IE's verify axis ii), Step 3.6 reference-authority-audit (MOVED OUT — see K6)
- **K6 (P6 → reference-authority's new home).** A NEW small **runner-side pre-flight protocol** at `cognitive_harness/protocols/reference_authority_check.md`, invoked AFTER IE emits the elaborated_inquiry and BEFORE the loop runs. Scans the elaborated_inquiry's cited spec/path/protocol references; runs the 3 sub-checks from the 04-00 audit (Status / Subject-alignment / Disambiguation); FLAGs as appropriate. Lives runner-side because reference-authority needs ecosystem awareness (knows about deprecated paths, the artifact lifecycle) — exactly what IE was forbidden to have. Three candidates considered: (a) runner-side pre-IE pre-flight — fails because the runner doesn't yet know what's a "cited reference" before IE comprehends; (b) runner-side post-IE pre-flight — **chosen**; (c) absorb into surfacing — rejected because it conflates discipline scopes.
- **K7 (P7 → cross-runner abstract contract).** Three interfaces, captured ONCE in a new **adoption-contract protocol** — `cognitive_harness/protocols/inquiry_elaboration_adoption.md` (or similar):
  - **Input interface:** the runner supplies `{project_goal, original_query, recent_context}` per the read-policy
  - **Output interface:** the runner consumes IE's elaborated_inquiry + request-structure verdict + fidelity verdict; encodes the framing into the runner's own artifact
  - **Spawn interface:** the runner consumes the request-structure verdict and calls branch_inquiry per child (or its own equivalent)
  - Any runner adopting IE references this protocol and instantiates the interfaces concretely. The protocol lives OUTSIDE IE's spec; IE remains neighbor-free.
- **K8 (P8 → self-containment-of-the-process-design — the load-bearing invariant).** **Confirmed.** ALL edits this process design proposes land in:
  - `cognitive_harness/MVLw/SKILL.md` (runner-spec — gains a Step 0 + thinned step 3)
  - `cognitive_harness/MVL/SKILL.md` (parallel — analogous edits)
  - new: `cognitive_harness/protocols/reference_authority_check.md` (the re-homed audit)
  - new: `cognitive_harness/protocols/inquiry_elaboration_adoption.md` (the cross-runner contract)
  - **NOTHING in `cognitive_harness/inquiry-elaboration/`** (IE's spec is not touched by this process design). The wiring is one-way; IE remains neighbor-free.

**Structural points**
- IE runs ONCE per MVLw invocation, at Step 0 (pre-pipeline). Once IE's verdicts pass (possibly after one bounce), step 3 onward proceeds normally.
- The runner consumes IE's outputs at three distinct points: framing-content → step 3 encode; request-structure verdict → spawn decision; fidelity verdict → halt-or-proceed gate.
- The cross-runner abstract contract has exactly 3 interfaces (input / output / spawn), each instantiated per runner.

**Foundational principles**
- **P1 — process design lives in runner-spec.** IE's spec stays neighbor-free.
- **P2 — perception/action split governs every interface.** Where IE perceives ends; where runner acts begins; never blur.
- **P3 — asymmetric-failure → halt-by-default.** Bias gates toward halt; offer one cheap bounce as the second-chance.
- **P4 — cross-runner generalization via named interfaces, not specific-runner coupling.**

**Meaning-nodes:** *Step 0 call-site*; *read-policy per input*; *spawn-set runner-side wrapper*; *halt-with-one-bounce*; *reference-authority as post-IE pre-flight*; *adoption-contract protocol*; *self-containment via runner-spec home*.

### SV2 — Anchor-informed understanding
The process layer is a SMALL, surgical set of edits: two runner-specs (MVLw/SKILL.md + MVL/SKILL.md) + two new small protocols (reference_authority_check + inquiry_elaboration_adoption). The call-site is Step 0; input-supply uses routeman's existing read-policy vocabulary; spawn is a runner-side wrapper around the unchanged branch_inquiry; the gate is halt-with-one-bounce; the `_branch.md` template thins per a concrete migration table; reference-authority becomes a post-IE pre-flight protocol; the cross-runner contract has 3 named interfaces in its own protocol. **All edits runner-side. IE's spec is untouched.** That last invariant is the load-bearing process-layer commitment.

## Phase 2 — Perspective Checking

- **Technical/logical** — realizable as small edits to existing runner-specs + 2 new small protocol files. branch_inquiry already has the `branch_mode: set-member` + `branch_set_id` fields needed for spawn_set. New anchor: the spawn_set wrapper is one paragraph in the runner-spec, not a new file (it's the runner's BEHAVIOR on IE's verdict, not a separate primitive).
- **Human/user** — user experience: types a raw query; IE comprehends + (if bundled) signals N inquiries with how they connect; runner spawns / encodes accordingly; user sees FLAG halts immediately when fidelity is questionable. New anchor: the user can override the halt manually (force-proceed despite FLAG) — natural escape hatch.
- **Risk/failure** — three poles: (a) IE's spec gains runner-knowledge → C2 violation. *Mitigated:* P8/K8 invariant. (b) Spawn_set becomes complex (sequential-chain edge cases). *Mitigated:* ship `single` + `parallel-set` first; defer sequential-chain semantics as a structural-layer detail (D4 frontier). (c) FLAG-gate halts too eagerly (false-positives). *Mitigated:* the one-bounce mechanism is the cheap second-chance.
- **Definitional/internal-consistency** — Does Step-0 IE contradict MVLw's "always Su → S → D → I → C"? **No** — Step 0 is pre-pipeline; the disciplines run unchanged inside the loop. Does the new gate (halt-with-one-bounce) contradict the *"MVL+ pipeline continuation"* feedback memory ("don't stop mid-pipeline")? **No** — the bounce is pre-pipeline; the gate is BEFORE Su→S→D→I→C runs; once it passes, the loop runs continuously per the memory.
- **Definitional / Frame-exit Completeness** *(gating fires — 5 multi-referent terms inherited):*
  - **"branch.md"** → {(a) the FILE `_branch.md` in each inquiry folder vs (b) the TEMPLATE inside MVLw step 3 used to WRITE that file}. The template THINS (loses migrated content); the file's content REMAINS (now populated mostly from IE's output instead of the runner's direct writing).
  - **"spawn"** → {(a) IE's `request-structure verdict` = the PERCEPTION ("there are N inquiries") vs (b) the runner's ACTION on that verdict via branch_inquiry}. Different layers; PERCEPTION lives in IE, ACTION in runner. Honors 22-30 perception/action split.
  - **"verify"** → {(a) IE's verify PHASE that emits the fidelity-verdict vs (b) the runner's GATE that acts on the verdict (halt-or-proceed)}. Perception in IE; action in runner. The gate is NOT another verify — it's the runner consuming IE's verify-output.
  - **"reference-authority"** → {(a) the CONCEPT (3 sub-checks from 04-00) vs (b) its HOME (was: IE; now: new runner-side pre-flight protocol)}. The concept survives unchanged; the home moves.
  - **"contract"** → {(a) the ABSTRACT call-site contract (3 interfaces, runner-independent) vs (b) the CONCRETE MVLw instantiation (the specific edits to MVLw/SKILL.md)}. Both produced; the abstract one lives in the adoption-contract protocol; the concrete one in MVLw/SKILL.md.
- **Phase/Calibration-State** — the design is correct regardless of authoring order. If Route 1 (IE spec authoring) is delayed, this process design remains authorable — only the runner's `Skill: inquiry-elaboration` call would fail until IE's spec exists, but that's a sequencing issue, not a design issue.

### SV3 — Multi-perspective understanding
Five frame-exit distinctions (branch.md / spawn / verify / reference-authority / contract) confirm the design is internally consistent without conflating layers. The risk poles are bounded by named mitigations. The self-containment invariant (K8) is load-bearing and confirmed.

## Phase 3 — Ambiguity Collapse

**A1 — Call-site: Step 0 (pre-pipeline) vs in-pipeline Core discipline?**
- *Strongest counter:* IE could be a Core discipline like sense-making — sense-making operates on the problem, IE on the request — symmetric.
- *Why it fails (structural):* IE's output IS the inquiry's framing — what the runner uses to WRITE `_branch.md` and DECIDE spawn. If IE ran inside the pipeline, the pipeline would already be running with some prior framing; IE's output would have nothing to encode into. IE must run BEFORE the framing is written. The canon-taxonomy already independently committed this ("Upstream FIRST, even before surfacing").
- *Confidence:* **HIGH.** *Resolution:* **Step 0 (pre-pipeline)** — a new pipeline-prior stage in MVLw before existing step 3.

**A2 — Input read-policy per input.**
- *Resolution:* `original_query` **MANDATORY**; `project_goal` **MANDATORY-WHEN-AVAILABLE**; `recent_context` **SHOULD**. On absent non-mandatory input, the anchor-grounded rephrasing for that anchor emits the `(anchor not supplied)` marker per 11-27 R-z.
- *Confidence:* **HIGH** (routeman exemplar; vocabulary already in the project).

**A3 — Spawn primitive: extend branch_inquiry OR new sibling primitive?**
- *Strongest counter:* a new `spawn_set` primitive would be cleaner.
- *Why it fails:* branch_inquiry already has `branch_mode: set-member` + `branch_set_id` — the per-child machinery is built. Adding a new primitive duplicates that machinery for no semantic gain. The cleanest move is a **runner-side WRAPPER** that batches branch_inquiry calls; the wrapper is one paragraph in the runner-spec, not a separate file.
- *Confidence:* **HIGH.** *Resolution:* **runner-side spawn_set wrapper around the existing branch_inquiry**.

**A4 — Runtime gate behavior on FLAG.**
- *Resolution:* **halt-with-one-bounce**. PASS → proceed; FLAG → re-invoke IE once with the gap surfaced; if second run PASSes, proceed; if still FLAGs, halt-and-surface to user.
- *Confidence:* **HIGH** (matches 11-27's structural commitment verbatim).

**A5 — `_branch.md` template: exact what-stays-vs-what-moves.**
- *Resolution:* the migration table in K5 (HIGH confidence). Stays: Layer Commitment / Synthesis Trigger / Relationships / History. NEW: `## Elaborated Inquiry` + `## IE Verdicts`. Migrates INTO IE: Question / Goal / Source Input / Scope Check / step 3.5 audit. Moves OUT to its own protocol: step 3.6 reference-authority audit.

**A6 — Reference-authority's new home.**
- *Resolution:* **a new small runner-side pre-flight protocol** at `cognitive_harness/protocols/reference_authority_check.md`, invoked **AFTER IE emits the elaborated_inquiry** (because the cited references are concrete then) **and BEFORE the loop runs** (catch fail before commitment).
- *Confidence:* **MED-HIGH.** Open detail (handed to decomposition): does its FLAG count toward IE's one-bounce limit (shared bounce budget) or have its own gate (separate halt-tier)? D5 frontier.

**A7 — Cross-runner contract location.**
- *Resolution:* a new small adoption-contract protocol at `cognitive_harness/protocols/inquiry_elaboration_adoption.md`, NOT in IE's spec. Captures the 3 interfaces (input / output / spawn).
- *Confidence:* **MED.** Open detail (handed to critique): could the contract live in `docs/canon/` instead of `cognitive_harness/protocols/`? Either works; protocols/ is closer to other runtime contracts.

**A8 — Self-containment of the process design itself.**
- *Resolution:* **CONFIRMED via K8.** All edits land in runner-spec (MVLw + MVL) + the 2 new runner-side protocols. IE's spec is NOT touched.
- *Confidence:* **HIGH.** Invariant: the wiring is one-way; runner-spec names IE; IE-spec doesn't name the runner.

### SV4 — Clarified understanding
Eight ambiguities resolved (6 HIGH, 2 MED). The design is a small, surgical set of runner-side edits + 2 new small protocols; IE's spec stays untouched. The load-bearing invariant (P8/K8) holds across every decision. Open structural details (D1–D5 frontiers) handed to decomposition/innovation.

## Phase 4 — Degrees-of-Freedom Reduction

**Fixed:**
- Call-site = **Step 0** in MVLw (before existing step 3)
- Input read-policy: `original_query` MANDATORY; `project_goal` MANDATORY-WHEN-AVAILABLE; `recent_context` SHOULD
- Spawn = **runner-side spawn_set wrapper around existing branch_inquiry** (no new primitive file)
- Runtime gate = **halt-with-one-bounce** on FLAG
- `_branch.md` migration per the table in K5 (4 stays / 2 new / 5 migrate-into-IE / 1 moves-to-pre-flight-protocol)
- Reference-authority home = **new runner-side pre-flight protocol** at `cognitive_harness/protocols/reference_authority_check.md`, invoked post-IE pre-loop
- Cross-runner contract home = **new adoption protocol** at `cognitive_harness/protocols/inquiry_elaboration_adoption.md`
- **Self-containment-of-the-design = ALL edits runner-side; IE-spec untouched**

**Eliminated:**
- IE-as-Core-discipline (A1) — fails the structural call-site test
- New sibling spawn primitive (A3) — branch_inquiry already supports the per-child machinery
- Auto-proceed on FLAG (A4) — violates asymmetric-failure stance
- Reference-authority remaining in IE (A6) — would violate self-containment again
- Adoption contract inside IE's spec (A7) — would violate self-containment
- Process design lives in IE's spec (A8/K8) — load-bearing violation; would unwind the entire arc's correction work

**Remaining viable (handed to decomposition/innovation):**
- **D1** — exact concrete diff of MVLw/SKILL.md (Step 0 wording + thinned step 3 + new sections in `_branch.md`)
- **D2** — exact content of `reference_authority_check.md` protocol (sub-checks + halt-or-pass + bounce integration)
- **D3** — exact content of `inquiry_elaboration_adoption.md` protocol (3 interfaces + instantiation pattern)
- **D4** — sequential-chain spawn details (deferred per Phase-2 risk-mitigation)
- **D5** — whether reference_authority_check's FLAG counts toward IE's one-bounce or has separate gate

### SV5 — Constrained understanding
The design space is closed to: small-and-surgical runner-side edits. Open variables are all D1–D5 (concrete wording / sub-protocol content) — properly downstream of meaning-layer decisions.

## Phase 5 — Conceptual Stabilization

*Accommodation check:* model stable after Phase 3 ambiguity collapse. Self-reference guard applied: the process design names the disciplines it wires (legitimately, in runner-spec territory); IE's spec remains neighbor-free per the K8 invariant.

### SV6 — Stabilized model

**IE's process layer is a small, surgical set of runner-spec edits + two new small protocols. All edits live runner-side. IE's own spec is NOT touched by this process design.**

- **Call-site:** **new Step 0 — "Elaborate the inquiry"** — invoked in MVLw before existing step 3 (`_branch.md` write). Cross-runner pattern: any adopting runner invokes IE before writing its own framing artifact.

- **Input supply (read-policy per input, routeman vocabulary):**
  - `original_query` — **MANDATORY** (absent → HALT)
  - `project_goal` — **MANDATORY-WHEN-AVAILABLE** (absent → FLAG-and-proceed; the long-term anchor's rephrasing emits `(anchor not supplied)`)
  - `recent_context` — **SHOULD** (absent → FLAG-and-proceed; short-term anchor's rephrasing emits `(anchor not supplied)`)

- **Spawn mechanics:** **runner-side `spawn_set` wrapper around the existing `branch_inquiry` primitive** (which already supports `branch_mode: set-member` + `branch_set_id`). The wrapper consumes IE's `request-structure verdict`:
  - `single` → no spawn; the runner encodes IE's elaborated_inquiry directly into the current `_branch.md`
  - `parallel-set{children}` → call `branch_inquiry` per child with shared `branch_set_id`; each child gets its own `_branch.md` populated from IE's per-child framing
  - `sequential-chain[children, order]` → call `branch_inquiry` for the first child immediately + queue subsequent children with `depends-on` pointers (runner-side orchestration; structural-layer detail D4 deferred)

- **Runtime gate (fidelity-verdict handling):** **halt-with-one-bounce**.
  - `PASS` → proceed to step 3 encode + loop runs
  - `FLAG{axis, note}` (first occurrence) → re-invoke IE ONCE with the flagged-gap surfaced as additional context
  - After bounce: `PASS` → proceed; still-`FLAG` → **halt-before-loop**, surface framing + FLAGs to user (no auto-proceed)
  - Asymmetric-failure stance: bias toward halt; one cheap bounce is the second-chance, not a loop-of-bounces

- **`_branch.md` rewrite (concrete migration table):**

  | branch.md element | Old (current MVLw step 3) | New (post-IE-wiring) |
  |---|---|---|
  | Question (5 meta-aspects) | Runner writes directly | IE produces; runner copies into `## Elaborated Inquiry` |
  | Goal | Runner writes directly | IE produces; runner copies into `## Elaborated Inquiry` |
  | Source Input | Runner preserves raw | IE preserves inside its faithfulness verify-axis; runner does NOT duplicate |
  | Scope Check | Runner writes | IE's verify axis (i); recorded in `## IE Verdicts` |
  | Step 3.5 Transcription-audit | Runner runs | IE's verify axis (ii) |
  | Step 3.6 Reference-authority-audit | Runner runs | **MOVED OUT** — new runner-side pre-flight protocol |
  | Layer Commitment | Runner-meta | **STAYS** runner-side |
  | Synthesis Trigger | Runner-meta | **STAYS** runner-side |
  | Relationships | Runner-orchestration | **STAYS** runner-side |
  | History | Runner state-tracking | **STAYS** runner-side |
  | `## Elaborated Inquiry` *(NEW)* | — | IE's framing-content (Question 5 meta-aspects + Goal + Scope + rephrasings + multi-request list) |
  | `## IE Verdicts` *(NEW)* | — | Request-structure verdict + fidelity verdict (for traceability + downstream) |

- **Reference-authority's new home:** new runner-side pre-flight protocol at `cognitive_harness/protocols/reference_authority_check.md`, invoked **post-IE pre-loop**. Scans the elaborated_inquiry's cited references; runs the 3 sub-checks (Status / Subject-alignment / Disambiguation) per the 04-00 audit; FLAGs as appropriate.

- **Cross-runner generalization:** new adoption protocol at `cognitive_harness/protocols/inquiry_elaboration_adoption.md`, capturing the 3 interfaces (Input / Output / Spawn). Any runner adopting IE references this protocol from its own SKILL.md and instantiates each interface concretely. MVLw's instantiation is one example; future runners' are others.

- **Self-containment invariant (load-bearing):** all edits land in `cognitive_harness/MVLw/SKILL.md` (+ analogous `cognitive_harness/MVL/SKILL.md` for cross-runner parity) + the two new protocols at `cognitive_harness/protocols/{reference_authority_check, inquiry_elaboration_adoption}.md`. **NOTHING in `cognitive_harness/inquiry-elaboration/`** is touched. The wiring is one-way: runner-spec names IE; IE-spec doesn't name the runner. This preserves the entire correction-arc's work (the 09-54 + 11-46 self-containment correction would unwind otherwise).

**How it differs from SV1:** SV1 had instincts (Step 0; halt on FLAG; thin branch.md; use branch_inquiry). SV6 fixes:
- The exact read-policy vocabulary (routeman) per input
- The halt-with-one-bounce semantics (matches 11-27 structural verbatim)
- The spawn_set wrapper (not a new primitive — branch_inquiry already supports per-child)
- The concrete `_branch.md` migration table (4 stay / 2 new / 5 migrate-into-IE / 1 moves-to-protocol)
- Reference-authority's new home as a small runner-side post-IE pre-loop protocol
- The cross-runner abstract contract as its own protocol file (3 interfaces)
- The load-bearing invariant: ALL edits runner-side; IE-spec untouched.

## Saturation Indicators
- Perspective saturation: frame-exit produced the last distinctions (5 multi-referent terms split); subsequent perspectives confirm.
- Ambiguity resolution: 8/8 (6 HIGH, 2 MED — D2/D5 details handed forward).
- SV delta: SV1 (instincts) → SV6 (8 concrete decisions + vocabulary + cross-runner contract + load-bearing invariant).
- Anchor diversity: constraints / insights / structural / principles / meaning-nodes across technical / human / risk / definitional / frame-exit / phase perspectives.

## Frontier (to Decomposition / Innovation / Critique)
- **D1** — exact concrete diff of MVLw/SKILL.md: Step 0 wording + thinned step 3 + new `_branch.md` sections
- **D2** — exact content of `reference_authority_check.md` protocol (sub-checks + integration with the bounce)
- **D3** — exact content of `inquiry_elaboration_adoption.md` protocol (3 interfaces stated abstractly + the MVLw instantiation as an example)
- **D4** — sequential-chain spawn details (deferred to structural-layer detail)
- **D5** — whether reference_authority_check's FLAG counts toward IE's one-bounce or has its own gate (separate halt-tier)
