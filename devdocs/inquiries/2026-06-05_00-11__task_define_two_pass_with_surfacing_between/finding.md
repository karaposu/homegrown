---
status: active
model: claude-opus-4-7[1m]
effort: max
---
# Finding: Task-Define — Two-Pass-With-Surfacing-Between Pipeline Redesign Test

## Question

From `_branch.md`:

**Question:** The user proposed a two-pass-Task-Define-with-/surfacing-between pipeline redesign — Task-Define runs once, /surfacing runs, Task-Define runs again with the surfaced context. The user's stated motivation: (a) rephrasings are limited without surfacing context; post-/surfacing, they can be refined; (b) "this might be the best optimized way" and "dismisses the load-bearing effect of meta questions and trying to predict the future with them." The inquiry was asked to inspect whether this redesign is structurally better, worse, or mixed against the current single-pass-pre-pipeline architecture (committed across 6 prior task-define findings: 15-39 / 14-14 / 17-02 / 07-48 / 21-12 / 21-58).

**Goal:** a structurally-grounded verdict (adopt / reject / variant / mixed) with (a) the user's premise tested rigorously (not accepted on intuition, not dismissed on status-quo bias), (b) the concrete pipeline shape specified (which operations run in pass-1 vs pass-2; how /surfacing's input is formulated; how /surfacing's output is consumed), (c) each of 15 inherited commitments from the 6 priors statused under the proposed redesign (PRESERVED / REFINED / SUPERSEDED / DISSOLVED), (d) positive and negative consequences both enumerated honestly, (e) a clear recommendation with concrete next-step guidance.

**Layer Commitment:** process-layer only. Meaning-layer consequences and structural-layer spec amendments are downstream of settling the process question; out of scope for this inquiry but identified as next-step work.

---

## Finding Summary

- **Verdict: VARIANT (a)** — a minimal constrained two-pass that re-runs **ONLY Rephrase in pass-2** with `/surfacing`-context, preserving MQ-from-pass-1 as constraint and adding /surfacing-output as information. Pass-1 runs full Task-Define from task-statement alone (producing the preparation substrate at MQ2 per 21-58); the runner formulates /surfacing's input from pass-1's substrate; /surfacing always-invokes; pass-2 re-runs only Rephrase informed by /surfacing-output AND still constrained by pass-1's MQ answers; downstream loop disciplines operate on the pass-2-refined bundle.

- **The user's premise is PARTIALLY CORRECT.** The claim "rephrasings are limited without surfacing context" has real basis — concrete vocabulary improvement via surfaced material IS possible. But the framing miscalibrates Rephrase's job: per task-define spec §2.1 + the 2026-06-04_07-48 process-layer finding, Rephrase's role is **alternative-generation constrained by MQ**, not optimization toward best formulation. Adding /surfacing context can improve concrete vocabulary BUT can also **over-determine** rephrasings by anchoring them to specific surfaced items, defeating alternative-generation. Variant (a)'s preservation of MQ-constraint while adding /surfacing-information addresses the over-determination risk while still capturing the concrete-vocabulary gain. The user's claim "this might be the best optimized way" is overconfident — it's *incrementally* better via constrained variant; unconditionally-better is not supported at Bootstrap.

- **The user's "dismisses meta-questions' future-prediction" framing is honestly assessed as a separate desire that conflicts with their own prior commitments.** The user's framing maps most directly to variant (c) — dismissing MQ2 entirely. But variant (c) is rejected on five structural grounds: (1) internal contradiction with user's prior selectivity commitments in 21-12 + 21-58 ("AI shouldn't blindly load everything; should be selective; multi-layer relevance" — without MQ2's preparation, /surfacing operates from task-statement alone and loses selectivity bias); (2) over-determination risk; (3) substrate-state ambiguity; (4) preparation substrate concept dissolution; (5) mode 6 obsolescence. The inquiry surfaces this contradiction explicitly so the user can choose which position to keep. The recommendation is variant (a) as the path that resolves the contradiction by addressing the principal motivation (improved rephrasings) without breaking prior commitments. **If the user genuinely wants variant (c), they must explicitly retract the prior selectivity commitments.**

- **All 15 inherited commitments from the 6 priors are PRESERVED or REFINED under variant (a)** — none DISSOLVED, none SUPERSEDED. Specifically: 11 PRESERVED + 4 REFINED. Refinements: pre-pipeline position (pass-1 pre-pipeline; pass-2 inside-pipeline; framing-producer at pass-2); substrate-fidelity (FETCH-prohibition preserved; input-scope expanded for pass-2 via the FETCH-vs-RECEIVE distinction); single-input contract (pass-1 single-input; pass-2 multi-input under new "context-informed-refinement" re-invocation mode); lightweight-stance (preserved per invocation; SYSTEM cost ~1.2x — only one extra Rephrase re-run, not 2x full Task-Define).

- **Three supporting distinctions** are introduced to make the verdict coherent:
  - **Constraint vs Information** — MQ answers are CONSTRAINTS (negative; rule out vocabularies that would lock meaning in the wrong space); /surfacing context is INFORMATION (positive; provides specific items). Different architectural roles; both needed for Rephrase under variant (a).
  - **FETCH vs RECEIVE** — FETCH = Task-Define directly reads project state (substrate violation; still excluded under variant a). RECEIVE = runner hands processed project state (e.g., /surfacing-output) to Task-Define as input (input-scope expansion, not substrate violation).
  - **Context-informed-refinement re-invocation mode** — new mode alongside the existing late-split-recovery mode at §3.5. Triggered by /surfacing completion (vs downstream-missed-split); input parameters: prior-bundles + /surfacing-output.

- **Variants (b) and (d)** — full both-pass designs — are rejected on doubled-cost without quality evidence at Bootstrap. Variant (a)'s ~1.2x cost is bounded and quality-justifiable; variants (b)/(d)'s ~2x cost lacks empirical justification at Bootstrap.

- **Adoption is PROVISIONAL at Bootstrap.** Task-Define is in BOOTSTRAP calibration state per §4.6 — no empirical data exists yet on rephrasing quality under variant (a) vs single-pass baseline. The structural verdict is sound (all 15 commitments PRESERVED or REFINED); the empirical verdict is deferred to Early Operation (~10-20 invocations). Four evaluation criteria graduate the adoption from PROVISIONAL to STABLE: (a) pass-2 Rephrase produces materially better alternative formulations than pass-1 baseline — better = more concrete vocabulary AND preserved alternative-generation (not over-determined); (b) cost overhead (~1.2x) is acceptable in observed runtime; (c) mode 6 detection rule continues to fire correctly; (d) no new LAYER 1/LAYER 2 failure modes surface.

- **Structural-followup work** — drafting spec amendments + meaning-layer clarifications + explanatory-doc rewrites + operational evidence-gathering — is OUT OF SCOPE for this process-layer inquiry per Layer Commitment. 10 followup targets are enumerated as MUSTs and COULDs for the user to schedule.

---

## Finding

### Small surrounding context

This inquiry continues the development arc on Task-Define — a cognitive discipline at `cognitive_harness/task-define/references/task-define.md` that takes a compact task statement and expands it into a defined task via five operations (Itemize, Meta-question, Deconstruct, MultiScope, Rephrase) in a fixed 4-stage flow.

Across earlier inquiries in this arc, the project has settled:

- The meaning-layer of Task-Define (2026-06-03_15-39): pre-pipeline position; perception/action split; substrate restricted to task-statement + LLM internal cognition; dispatch substrate concept (later renamed).
- The process-layer (2026-06-04_07-48): 3-runtime-phase shape; 4-stage acyclic-within-invocation flow; MQ-constrains-Rephrase load-bearing safety mechanism; single-input contract at §3.3.
- The mode 6 detection rule (2026-06-04_14-14): MQ2's answer must carry verdict + kind specifier; mode 6 detects missing required content.
- The MQ2 reframe (2026-06-04_21-12): MQ2's substance is verdict + kinds + stance + hypothetical-relational expression mode; runner-mediated alignment with /surfacing.
- The dispatch-vs-preparation correction (2026-06-04_21-58): "dispatch substrate" concept renamed to "preparation substrate" because /surfacing is always invoked (no dispatch decision); function-name-independence principle articulated.

After all of this, the user proposed a new redesign: re-invoke Task-Define after /surfacing has run, so rephrasings can be refined with actual surfaced context. The user claimed this would "dismiss the load-bearing effect of meta questions" — and asked whether such a design is "a lot better."

This inquiry inspects that proposal at the process-layer: which variant of two-pass design (if any) is structurally defensible; what happens to the 15 inherited commitments from the 6 prior findings; what the trade-offs honestly are. The verdict is variant (a) — a minimal constrained two-pass that adds value without breaking prior commitments — with an honest surfacing of an internal contradiction in the user's positions, and an explicit provisional caveat at Bootstrap.

### 1. What variant (a) IS

Under variant (a), the pipeline shape is:

```
PASS 1 — Task-Define (full)
   Reception → per-item Traversal (5 ops: Itemize → MQ → Deconstruct + MultiScope → Rephrase) → Assembly
   Substrate: task-statement + LLM internal cognition only (per §1.5)
   Output: per-item bundle list + preparation substrate at MQ2 (verdict + kinds + stance, hypothetical-relational mode)
                            │
                            ▼
RUNNER — formulates /surfacing input
   Reads pass-1's MQ2 preparation substrate
   Formulates: purpose (from kinds) + bias (from kinds) + territory (from stance) + framing (from stance)
                            │
                            ▼
/SURFACING — always-invoked
   Per the 21-58 always-invoke premise
   Returns: relevance-tagged items from the project's bounded territory
                            │
                            ▼
PASS 2 — Task-Define (Rephrase only)
   Re-invokes Task-Define under new "context-informed-refinement" re-invocation mode
   Inputs: task-statement + pass-1 prior-bundles + /surfacing-output
   Re-runs: ONLY Rephrase, for each item from pass-1
   Constraint preserved: pass-1 MQ answers still constrain pass-2 Rephrase
   Information added: /surfacing-output provides specific items, concrete vocabulary
   Output: refined per-item bundle list with updated rephrasings
                            │
                            ▼
DOWNSTREAM LOOP — operates on pass-2-refined bundle
   (framing-producer role moves to pass-2)
```

This is a **minimal constrained two-pass**. The minimality is load-bearing: only Rephrase re-runs in pass-2 (not all 5 ops); the system cost is ~1.2x single-pass (not 2x). The constraint is load-bearing: pass-1 MQ answers continue to constrain pass-2 Rephrase, preventing over-determination by surfaced specifics.

### 2. Why variant (a) — the 5 grounds

**Ground 1: The premise is PARTIALLY CORRECT.** The user's claim "rephrasings are limited without surfacing context" has real basis. Pre-/surfacing Rephrase produces alternative formulations based on the LLM's general knowledge + the MQ-answer constraint; post-/surfacing, Rephrase could additionally use actual surfaced material (specific concept names, specific terminology from prior project artifacts). Concrete vocabulary improvement is real.

But the user's framing **miscalibrates Rephrase's job**. Per task-define spec §2.1: *"produce alternative formulations of the item — different vocabularies, different emphases, implicit-rendered-explicit — constrained by the Meta-question answers so the rephrasings do not drift to a vocabulary that locks meaning in the wrong space."* Rephrase's role is **alternative-generation constrained by MQ**, not optimization toward "best" formulation. Optimization framing risks **over-determination**: rephrasings anchored to specific surfaced items can lose the alternative-generation purpose (all rephrasings end up converging on the surfaced items' framing). Variant (a) addresses this by keeping MQ as constraint (preventing over-determination) while adding /surfacing as information (enabling concrete vocabulary).

**Ground 2: The user's "dismisses meta-questions' future-prediction" framing maps to variant (c), which fails on 5 structural grounds.**

Variant (c) interpretation: dismiss MQ2's preparation substrate; /surfacing operates from task-statement alone; MQ2 either reframed retrospectively or dropped.

Why variant (c) fails:
- **(c-i) Internal contradiction with user's prior commitments.** The 21-12 + 21-58 findings (this user's own prior inquiries) committed: "AI shouldn't blindly load everything to context; should be selective; multi-layer relevance." Without MQ2's preparation, /surfacing operates from task-statement alone and loses selectivity bias — the exact thing the user previously argued against. **This is the user's own position contradicting their current proposal.**
- **(c-ii) Over-determination risk.** Without MQ-constraint, Rephrase is informed-only; specific surfaced items over-determine rephrasings.
- **(c-iii) Substrate-state ambiguity.** Variant (c) doesn't address how /surfacing operates without preparation.
- **(c-iv) Preparation substrate concept dissolution.** 21-58's commitment dissolved without replacement.
- **(c-v) Mode 6 obsolescence.** 14-14's commitment dissolved without replacement.

**Ground 3: The user's internal contradiction is surfaced for user choice.** The user has two desires that partly conflict: (a) improved rephrasings (compatible with variant a), (b) dismissed MQ2 (compatible with variant c). Their prior selectivity commitments align with (a) but conflict with (b). Variant (a) resolves the contradiction by addressing the principal motivation without breaking prior commitments. If the user genuinely wants variant (c) — dismiss MQ2 — they must explicitly retract the prior selectivity commitments. **The inquiry recommends variant (a) and flags the contradiction; the user retains the choice.**

**Ground 4: Variants (b) and (d) rejected on doubled-cost without quality evidence at Bootstrap.** Variant (b) splits Task-Define into two sub-passes (Itemize+MQ2 in pass-1; rest in pass-2). Variant (d) re-runs all 5 ops in both passes. Both incur ~2x cost. Task-Define is in Bootstrap calibration state per §4.6; no empirical data exists to justify 2x cost over single-pass. Variant (a)'s ~1.2x cost (one extra Rephrase re-run) is much closer to single-pass while capturing the principal benefit.

**Ground 5: Variant (a) preserves ALL 6 prior commitments.** All 15 status entries from the 6 priors are PRESERVED or REFINED under variant (a); none DISSOLVED, none SUPERSEDED. See §3 below for the full status table.

### 3. The 15-status commitment table

| # | Commitment | Source | Status | Reasoning |
|---|---|---|---|---|
| 1 | Pre-pipeline position | 15-39 + §1.3 | **REFINED** | Pass-1 pre-pipeline; pass-2 inside-pipeline. Framing-producer role moves to pass-2 (downstream loop operates on pass-2-refined bundle). |
| 2 | Perception/action split | 15-39 + 14-14 + 21-58 | **PRESERVED** | Both passes perceive; runner acts (now orchestrates two invocations + the formulation step between them). |
| 3 | Substrate (task-statement + LLM cognition only) | 15-39 + §1.5 | **REFINED** | FETCH-prohibition preserved (Task-Define still doesn't reach for project state). Input-scope expanded for pass-2 (receives /surfacing-output as runner-handed input). The FETCH-vs-RECEIVE distinction resolves the substrate-status question. |
| 4 | 3-phase shape | 07-48 + §3.1 | **PRESERVED per invocation** | Each pass internally 3-phase (Reception → per-item Traversal → Assembly). |
| 5 | 4-stage acyclic-within-invocation | 07-48 + §3.3 | **PRESERVED per invocation** | Each pass's 4-stage flow is acyclic. SYSTEM is two-invocation, but acyclicity holds per invocation. |
| 6 | MQ-constrains-Rephrase safety mechanism | 07-48 | **PRESERVED via constraint+information** | Pass-1 Rephrase still constrained by MQ. Pass-2 Rephrase additionally informed by /surfacing-output. Constraint (negative; rules out vocabularies) and Information (positive; provides specific items) are different architectural roles — both available under variant (a). |
| 7 | Single-input contract (§3.3) | 07-48 + §3.3 | **REFINED** | Pass-1 single-input (task-statement only). Pass-2 multi-input (task-statement + /surfacing-output + prior-bundles) under new "context-informed-refinement" re-invocation mode. |
| 8 | MQ2 answer-content shape (verdict + kind) | 14-14 | **PRESERVED** | Pass-1 MQ2 carries the same content shape. |
| 9 | Mode 6 covers MQ2 shape | 17-02 | **PRESERVED** | Mode 6's detection rule still applies to pass-1 MQ2 output. |
| 10 | Three-element substance (verdict + kinds + stance + hypothetical-relational) | 21-12 | **PRESERVED** | Pass-1 MQ2 carries this substance. Pass-2 leaves pass-1 MQ answers intact (only Rephrase re-runs). |
| 11 | Runner-mediated alignment with /surfacing | 21-12 | **PRESERVED** | Runner formulates /surfacing input from pass-1 substrate. |
| 12 | Always-invoke premise | 21-58 | **PRESERVED** | /surfacing still always-invoked between pass-1 and pass-2. |
| 13 | Preparation substrate concept | 21-58 | **PRESERVED** | Pass-1 MQ2 IS the preparation substrate. |
| 14 | Function-name-independence principle | 21-58 | **PRESERVED** | Substance is name-independent; variant (a) doesn't touch the principle. |
| 15 | Lightweight-stance | authoring tradition | **PRESERVED per invocation; SYSTEM cost ~1.2x** | Each pass remains lightweight (paragraph per operation). System cost ~1.2x (one extra Rephrase re-run, not 2x full Task-Define). Acceptable under bounded lightweight principle. |

**Net status:** 11 PRESERVED + 4 REFINED + 0 DISSOLVED + 0 SUPERSEDED.

### 4. Three supporting distinctions

Variant (a) introduces three loop-coined distinctions that make the verdict coherent:

**(a) Constraint vs Information** — architectural primitive. MQ answers are CONSTRAINTS — negative; they rule out certain vocabularies that would lock meaning in the wrong space. /Surfacing context is INFORMATION — positive; it provides specific items to incorporate. Different roles; both needed for Rephrase under variant (a). This distinction is what makes variant (a)'s "preserve MQ constraint + add /surfacing information" coherent — without it, the status of MQ-constrains-Rephrase under variant (a) would be ambiguous (does /surfacing context replace MQ constraint? No — they're orthogonal roles).

**(b) FETCH vs RECEIVE** — substrate distinction. FETCH = Task-Define directly reads project state (substrate violation per NOT-list 2+5; still excluded under variant a). RECEIVE = runner hands processed project state (e.g., /surfacing-output) to Task-Define as input (input-scope expansion, not substrate violation). The distinction resolves the substrate-status under pass-2 — variant (a)'s pass-2 RECEIVES /surfacing-output but does not FETCH project state. The discipline's FETCH-prohibition is preserved; the input-scope is expanded for pass-2 only, under the new context-informed-refinement re-invocation mode.

**(c) Context-informed-refinement re-invocation mode** — new mode named. The existing re-invocation mode at §3.5 is **late-split-recovery** (runner re-invokes Task-Define with prior-bundles when downstream signals a missed multi-item split). The new mode under variant (a) is **context-informed-refinement** (runner re-invokes Task-Define[pass-2] with prior-bundles + /surfacing-output to refine Rephrase). Both modes use the same re-invocation envelope at §3.5; they differ in trigger (downstream-missed-split vs surfacing-completion) and in input parameters (prior-bundles vs prior-bundles + /surfacing-output).

### 5. Provisional adoption at Bootstrap

Task-Define is in **BOOTSTRAP** calibration state per §4.6 — no empirical data exists yet on rephrasing quality under variant (a) vs single-pass baseline. The structural verdict is sound (all 15 commitments PRESERVED or REFINED; variant (c) rejected on 5 structural grounds; variants b/d rejected on cost without quality evidence). The empirical verdict is deferred to **Early Operation** (~10-20 invocations under variant a).

At Early Operation, the criterion for confirming the adoption (graduating from PROVISIONAL to STABLE):

- **(a) Quality criterion.** Pass-2 Rephrase produces materially better alternative formulations than pass-1 baseline. "Better" = more concrete vocabulary AND preserved alternative-generation (NOT over-determined by surfaced specifics; alternatives still span the defensible interpretation space). If pass-2 Rephrase looks systematically more concrete but alternatives are noticeably narrower than pass-1, the over-determination failure mode has materialized — variant (a) should be revisited.
- **(b) Cost criterion.** Cost overhead (~1.2x per task statement) is acceptable in observed runtime. If runtime cost exceeds bounded expectations, the lightweight-stance status (currently PRESERVED per invocation with SYSTEM ~1.2x) needs revisiting.
- **(c) Mode 6 criterion.** Mode 6 detection rule continues to fire correctly on pass-1 MQ2 output (no spurious firings; no missed firings).
- **(d) Failure-mode criterion.** No new LAYER 1 or LAYER 2 failure modes surface that variant (a) introduces.

If (a)–(d) all hold at Early Operation, the adoption graduates from PROVISIONAL to STABLE. If any fails, the variant (a) verdict is revisited — possibly reverting to single-pass or exploring different variants under different assumptions.

### 6. Honest answer to "is it a lot better?"

The user asked: "lets inspect if such design is a lot better? and it might result in some positive interesting results or not?"

**Honest answer:**

- **"A lot better"** — not unconditionally supported. The user's framing was overconfident ("best optimized way"). Variant (a) is *incrementally* better at the cost of ~1.2x runtime + architectural extension (new re-invocation mode + three loop-coined distinctions).
- **"Positive interesting results"** — yes. Pass-2 Rephrase can incorporate concrete vocabulary from surfaced material, addressing the principal motivation. The FETCH-vs-RECEIVE distinction is a portable substrate-refinement primitive. The constraint-vs-information distinction is a portable architectural primitive for other discipline-pair coordinations. The context-informed-refinement re-invocation mode is a reusable pattern.
- **"Not better"** — also not supported. The premise has real basis (concrete vocabulary improvement is real); rejecting outright would ignore the partial-correctness.
- **Verdict shape: VARIANT.** Adopt variant (a) provisionally at Bootstrap; revisit at Early Operation with empirical evidence.

The user's stated motivation — improved rephrasings — is satisfied by variant (a). The user's stated subsidiary motivation — dismissing meta-questions' future-prediction — would require variant (c), which conflicts with their own prior commitments. **If the user wants variant (c), they must retract the prior selectivity commitments.**

---

## Inherited Commitments Re-test

This inquiry's `_branch.md` declares a Synthesis Trigger listing 6 prior outputs whose commitments are inherited and must be re-tested under the proposed redesign. The CONCLUDE protocol mandates this `## Inherited Commitments Re-test` section.

### Commitments from `devdocs/inquiries/2026-06-03_15-39__task_define_discipline_meaning_layer/finding.md` (original meaning-layer)

- **Commitment:** Task-Define runs PRE-pipeline; its output IS the framing the loop disciplines operate on.
  - **Re-test status:** **RE-TESTED** (and **REFINED** under variant a)
  - **Evidence:** sensemaking Ambiguity 7 + PP region analysis verified: under variant (a), pass-1 runs pre-pipeline; pass-2 runs INSIDE-pipeline (between /surfacing and downstream loop). The framing-producer role moves to pass-2 (downstream loop operates on pass-2-refined bundle). Pre-pipeline commitment is preserved-and-refined (Task-Define is BOTH pre-pipeline AND inside-pipeline), not dissolved.

- **Commitment:** Perception/action split — Task-Define perceives, runner acts.
  - **Re-test status:** **RE-TESTED** (and **PRESERVED**)
  - **Evidence:** sensemaking Phase 2 / Risk perspective verified: under variant (a), both passes perceive; runner acts (orchestrates pass-1 → /surfacing input formulation → /surfacing → pass-2 invocation). Split survives the doubled invocation count.

- **Commitment:** Substrate = task-statement + LLM internal cognition only (NOT-list 2 + 5: no external-context fetching; no ecosystem-knowledge use).
  - **Re-test status:** **RE-TESTED** (and **REFINED**)
  - **Evidence:** sensemaking Ambiguity 4 introduced the FETCH-vs-RECEIVE distinction. FETCH-prohibition preserved (Task-Define still doesn't reach for project state). Input-scope expanded for pass-2 (receives /surfacing-output as runner-handed input). The distinction is loop-coined for this inquiry; resolves substrate-status cleanly.

### Commitments from `devdocs/inquiries/2026-06-04_07-48__task_define_process_layer/finding.md` (process-layer)

- **Commitment:** 3-runtime-phase shape (Reception → per-item Traversal → Assembly).
  - **Re-test status:** **RE-TESTED** (and **PRESERVED per invocation**)
  - **Evidence:** sensemaking AC region analysis verified: each pass is internally 3-phase. System is two-invocation, but per-invocation 3-phase shape is preserved.

- **Commitment:** 4-stage acyclic-within-invocation flow.
  - **Re-test status:** **RE-TESTED** (and **PRESERVED per invocation**)
  - **Evidence:** same as above — each pass's 4-stage flow is acyclic. The acyclic commitment is per-invocation; preserved.

- **Commitment:** MQ-constrains-Rephrase safety mechanism (load-bearing).
  - **Re-test status:** **RE-TESTED** (and **PRESERVED via constraint+information**)
  - **Evidence:** sensemaking Ambiguity 5 + RS region analysis verified: under variant (a), pass-1 Rephrase still constrained by MQ; pass-2 Rephrase additionally informed by /surfacing-output. The constraint-vs-information distinction (loop-coined) resolves how both can coexist. Safety mechanism survives the extension; over-determination risk under variant (c) was the structural ground for rejecting variant (c).

- **Commitment:** Single-input contract (§3.3) — load-bearing for I/O surface lightness.
  - **Re-test status:** **RE-TESTED** (and **REFINED**)
  - **Evidence:** sensemaking Ambiguity 3 + SU region analysis verified: pass-1 single-input (task-statement only); pass-2 multi-input (task-statement + /surfacing-output + prior-bundles) under new context-informed-refinement re-invocation mode. The contract is preserved per-pass-1; refined for pass-2 with explicit mode definition.

### Commitments from `devdocs/inquiries/2026-06-04_14-14__task_define_mode6_detection_rule/finding.md` (mode 6)

- **Commitment:** MQ2's answer must carry verdict ∈ {yes, no, uncertain} + (when verdict=yes/uncertain) kind specifier.
  - **Re-test status:** **RE-TESTED** (and **PRESERVED**)
  - **Evidence:** sensemaking commitment-status analysis verified: pass-1 MQ2 carries the same content shape under variant (a). Pass-2 doesn't touch MQ answers; only re-runs Rephrase.

- **Commitment:** Mode 6 detection rule at §4.2 (MQ2-answer-missing-preparation-info; corrected per 21-58).
  - **Re-test status:** **RE-TESTED** (and **PRESERVED**)
  - **Evidence:** rule still applies to pass-1 MQ2 output under variant (a). No change to detection mechanism.

### Commitments from `devdocs/inquiries/2026-06-04_17-02__task_define_mq2_shape_thoroughness_check/finding.md` (MQ2 verification)

- **Commitment:** Mode 6 covers MQ2 shape concerns (verification verdict).
  - **Re-test status:** **INHERITED-WITHOUT-RE-TEST**
  - **Reason:** verification verdict is about coverage of mode 6 over MQ2 shape requirements; concept-name-independent. Under variant (a), mode 6 + MQ2 shape are both preserved unchanged. Re-testing would re-litigate already-settled coverage.

### Commitments from `devdocs/inquiries/2026-06-04_21-12__task_define_mq2_surfacing_alignment_reframe/finding.md` (MQ2 reframe)

- **Commitment:** MQ2's three-element substance (verdict + kinds + stance + hypothetical-relational mode).
  - **Re-test status:** **RE-TESTED** (and **PRESERVED**)
  - **Evidence:** sensemaking Ambiguity 2 verified: pass-1 MQ2 carries the three-element substance unchanged under variant (a). Pass-2 leaves MQ answers intact (only Rephrase re-runs).

- **Commitment:** Runner-mediated alignment with /surfacing (kinds → purpose+bias; stance → territory).
  - **Re-test status:** **RE-TESTED** (and **PRESERVED**)
  - **Evidence:** runner formulates /surfacing input from pass-1 preparation substrate under variant (a). Alignment mechanism is unchanged.

### Commitments from `devdocs/inquiries/2026-06-04_21-58__task_define_dispatch_vs_preparation_substrate/finding.md` (preparation substrate)

- **Commitment:** Always-invoke premise — /surfacing is always invoked in the standard runner architecture.
  - **Re-test status:** **RE-TESTED** (and **PRESERVED**)
  - **Evidence:** under variant (a), /surfacing still always-invoked (between pass-1 and pass-2). Always-invoke premise is the architectural ground variant (a) builds on.

- **Commitment:** Preparation substrate concept (MQ2's answer prepares /surfacing input).
  - **Re-test status:** **RE-TESTED** (and **PRESERVED**)
  - **Evidence:** pass-1 MQ2 IS the preparation substrate under variant (a). Variant (c) would have dissolved this; variant (a) preserves it.

- **Commitment:** Function-name-independence principle (substance survives function-name corrections).
  - **Re-test status:** **INHERITED-WITHOUT-RE-TEST**
  - **Reason:** principle is meta-architectural; variant (a) doesn't touch the principle. Re-testing would not change the outcome.

### Inherited from authoring tradition (not from a specific finding)

- **Commitment:** Lightweight-stance — paragraph per operation; no sub-machinery.
  - **Re-test status:** **RE-TESTED** (and **PRESERVED per invocation; SYSTEM ~1.2x**)
  - **Evidence:** sensemaking Ambiguity 6 verified: each pass remains paragraph-per-operation. System cost ~1.2x (one extra Rephrase re-run; not 2x full Task-Define). Lightweight-stance is bounded principle, accommodates the modest cost addition.

---

## Next Actions

### MUST (if user adopts variant a)

- **What:** Author meaning-layer follow-up inquiry (or extension to this one) to settle the meaning-layer consequences of variant (a) before authoring structural amendments. Specifically: confirm pass-2 doesn't re-fire MQ answers (variant a says no, but the meaning is worth explicit confirmation); commit the constraint-vs-information distinction as a meaning-layer principle; commit the FETCH-vs-RECEIVE distinction as a meaning-layer principle.
  - **Who:** user-scheduled meaning-layer follow-up inquiry author.
  - **Gate:** condition-bound — schedule after user confirms variant (a) adoption.
  - **Why:** structural amendments downstream depend on meaning-layer settlement; settling structural first would commit on text with underdetermined meaning.

- **What:** Apply 8 structural amendments to `cognitive_harness/task-define/references/task-define.md`:
  - F1: §1.3 pre-pipeline → REFINED (pass-1 pre-pipeline; pass-2 inside-pipeline; framing-producer at pass-2)
  - F2: §2.4 preparation substrate → reference pass-1 specifically
  - F3: §3.1 phase shape → acknowledge two-invocation system architecture
  - F4: §3.3 single-input contract → introduce pass-2 multi-input refinement under context-informed-refinement re-invocation mode
  - F5: §3.5 re-invocation → add "context-informed-refinement" as second mode alongside late-split-recovery
  - F6: §3.7 pipeline position → reflect REFINED placement
  - F7: §1.4 NOT-list → clarify FETCH-vs-RECEIVE substrate distinction
  - F8: §2.1 Rephrase → add "constrained by Stage 2 MQ answers AND (under context-informed-refinement re-invocation mode) informed by /surfacing-output" wording
  - **Who:** structural-layer follow-up inquiry author (after meaning-layer settled).
  - **Gate:** condition-bound — apply when meaning-layer is settled.
  - **Why:** structural amendments encode variant (a) in the canonical spec.

- **What:** Update explanatory doc `devdocs/what_is_task_define.md` to reflect variant (a) shape + pass-2 refinement + constraint-vs-information distinction.
  - **Who:** explanatory-doc maintainer.
  - **Gate:** condition-bound — apply when spec amendments are settled.
  - **Why:** the doc currently reflects single-pass architecture; readers should see the variant (a) shape if adopted.

### COULD

- **What:** Operational evidence-gathering plan for Early Operation evaluation — instrumentation to compare pass-2 Rephrase quality vs pass-1 baseline across ~10-20 invocations.
  - **Who:** runner / calibration infrastructure maintainer.
  - **Gate:** observable — when ~10-20 Task-Define invocations have run under variant (a).
  - **Why:** without this evidence-gathering, the PROVISIONAL caveat never resolves; variant (a) remains structurally adopted but empirically unconfirmed. **Critique sub-finding: encourage F10 scheduling as part of variant (a) adoption.** Effectively a soft MUST.
  - **Depends-on:** MUST item "Apply 8 structural amendments." This COULD is GATED — empirical evidence-gathering presumes the structural amendments have been applied so that runs are using variant (a).

- **What:** Per-task-type variant exploration — consider whether variant (a) should apply unconditionally or only for context-heavy task types (with single-pass retained for self-contained tasks like "explain pure functions").
  - **Who:** future user / discipline architect.
  - **Gate:** observable — when Early Operation evidence (under F10) suggests systematic differences across task types.
  - **Why:** per-task-type variants were surfaced as research frontier in Critique; not viable at Bootstrap but could be adopted at Mature Operation with empirical evidence.

### DEFERRED

- **What:** Empirical confirmation that variant (a) graduates from PROVISIONAL to STABLE per the 4-criterion Early Operation evaluation (quality / cost / mode 6 firing / no-new-failure-modes).
  - **Gate:** observable — after F10 evidence-gathering completes; ~10-20 invocations under variant (a).
  - **Why (if revived):** would convert the PROVISIONAL caveat to STABLE adoption; would lock in variant (a) as the canonical pipeline pattern; would unblock other disciplines that might want to adopt similar context-informed-refinement patterns.

---

## Reasoning

The verdict was reached by:

1. **Testing the user's premise on structural grounds** — neither accepting it on intuition nor dismissing it on status-quo bias. Premise verdict (PARTIALLY CORRECT) is anchored in Rephrase's stated job (§2.1 + 07-48: alternative-generation, not optimization) + the over-determination failure mode (specific surfaced items anchoring rephrasings → alternative-generation defeated).

2. **Enumerating 5 design-space variants** (a/b/c/d/e) and adjudicating each on structural grounds:
   - Variant (c) — dismiss MQ2 — rejected on 5 structural mechanisms (internal contradiction + over-determination + substrate ambiguity + concept dissolution + mode 6 obsolescence)
   - Variants (b) and (d) — full both-pass — rejected on doubled-cost without quality evidence at Bootstrap
   - Variants (a) and (e) — minimal — collapse; variant (a) selected

3. **Statusing all 15 inherited commitments from 6 priors** under variant (a). All PRESERVED or REFINED; none DISSOLVED. The four REFINEDs (pre-pipeline position; substrate; single-input contract; lightweight-stance) are each grounded in a specific structural ground (variant (a) extends rather than breaks).

4. **Introducing three supporting distinctions** (constraint-vs-information; FETCH-vs-RECEIVE; context-informed-refinement re-invocation mode) that make the verdict coherent. Each is loop-coined for this inquiry but structurally motivated.

5. **Surfacing the user's internal contradiction** between their current proposal (variant c interpretation) and their prior selectivity commitments (21-12 + 21-58). The inquiry recommends variant (a) as the path that resolves the contradiction; the user retains the choice to overturn prior commitments if they genuinely want variant (c).

6. **Caveating the adoption as PROVISIONAL at Bootstrap** with a 4-criterion Early Operation evaluation rubric. The structural verdict is sound; the empirical verdict requires evidence.

7. **Bounding structural-followup as OOS** per Layer Commitment; enumerating 10 followup targets with severity tags for the user to schedule.

### Why each variant was rejected (detail)

**Variant (c) (dismiss MQ2 entirely):**
- Tested at sensemaking Ambiguity 1 against the strongest counter-interpretation ("user's words 'dismisses load-bearing effect of meta questions' literally map to variant c").
- Failed on internal contradiction: 21-12 + 21-58 committed selectivity; variant (c) would have /surfacing operate from task-statement alone, losing selectivity bias.
- Failed on over-determination risk: without MQ-constraint, Rephrase becomes informed-only; over-determined by surfaced specifics; alternative-generation purpose lost.
- Failed on substrate-state ambiguity: how does /surfacing operate without preparation? Variant (c) doesn't address.
- Failed on preparation substrate concept dissolution: 21-58's commitment dissolved without replacement.
- Failed on mode 6 obsolescence: 14-14's commitment dissolved without replacement.

**Variants (b) and (d) (full both-pass):**
- Tested at sensemaking Ambiguity 7 against the strongest counter ("full both-pass captures maximum quality gain").
- Failed on doubled cost (~2x runtime).
- Failed on empirical evidence at Bootstrap (no calibration data exists to justify 2x cost).
- Failed on lightweight-stance preservation (system cost exceeds the bounded principle's typical envelope).

**ADOPT-UNCONDITIONAL alternative (instead of variant a's CONSTRAINED form):**
- Tested at innovation Intervention-Shape-Axis Inversion.
- Failed on premise correctness — premise is PARTIALLY CORRECT, not fully correct; unconditional adoption ignores the partial-correctness.

**REJECT alternative (no change; keep single-pass):**
- Tested at innovation Intervention-Shape-Axis Inversion.
- Failed on ignoring the partial-correctness of the premise.

**DEFER alternative (no verdict; wait for evidence):**
- Tested at innovation Intervention-Shape-Axis Inversion.
- Failed because the inquiry's deliverable obligation is to render verdict, not defer.

### Critique's sub-finding contributions

Critique's adversarial evaluation produced 5 sub-findings now incorporated:

- **(1)** Explicit answer to "is it a lot better" question in §6 above ("incrementally better via constrained variant; unconditionally better not supported at Bootstrap").
- **(2)** Tone-care on contradiction-surfacing — "two desires conflict" not "you're contradicting yourself"; honest assessment, not patronization.
- **(3)** Constraint-information conflation risk note for runner-implementers (when both constraint and information are present, implementers should preserve them as distinct architectural roles, not conflate).
- **(4)** Pass-2 cost monitoring at Early Operation if /surfacing-output is large (criterion (b) under §5 above).
- **(5)** F10 (Early Operation evidence-gathering operational plan) scheduling encouragement — effectively a soft MUST. Without F10, the PROVISIONAL caveat never resolves.

---

## Open Questions

### Monitoring

- After ~10-20 Task-Define invocations under variant (a) (per F10), monitor the 4-criterion Early Operation evaluation: (a) pass-2 Rephrase quality vs pass-1 baseline; (b) cost overhead acceptability; (c) mode 6 firing correctness; (d) any new failure modes surfacing.
- If pass-2 cost grows non-linearly with /surfacing-output size, revisit lightweight-stance status (currently PRESERVED per invocation).

### Refinement Triggers

- If Early Operation evidence shows pass-2 Rephrase systematically over-determines (alternatives narrower than pass-1; specific surfaced items dominating rephrasing space), the constraint-information distinction implementation needs sharpening — or variant (a) needs to be revisited.
- If per-task-type empirical observations suggest variant (a) helps for context-heavy tasks but hurts (or adds unnecessary cost) for self-contained tasks, consider per-task-type variant (COULD #2 in Next Actions).
- If a runner implementation appears that doesn't have always-invoke as the default /surfacing pattern, the always-invoke premise from 21-58 needs revisiting — and variant (a)'s dependence on it needs to be re-evaluated.

### Research Frontiers

- The constraint-vs-information distinction may be portable to other discipline-pair coordinations (other disciplines that consume both static constraints and dynamic information). Whether the principle generalizes is open.
- The FETCH-vs-RECEIVE substrate distinction may apply to other substrate-rule clarifications across the cognitive harness. Whether the distinction generalizes is open.
- The context-informed-refinement re-invocation mode may be applicable to other disciplines that have a single-pass architecture but might benefit from post-context refinement. Whether the pattern generalizes is open.

---

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
i have this idea

what if after surfacing, we do task-define again ?  because without surfacing our rephrasing's are limited due to lack of context.. but after doing surfacing we can refine them. 

this might be the best optimized way to be honest. and it dismisses the load bearing effect of meta questions and trying to predict the future with them...

lets inspect if such design is a lot better?  and it might result in some positive interesting results or not ?
```

</details>
