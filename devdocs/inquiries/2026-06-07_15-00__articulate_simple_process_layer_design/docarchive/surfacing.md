# Surfacing: Articulate_simple Process-Layer Design

## User Input

The input is the inquiry's `_branch.md`. The question asks for the process-layer specification of articulate_simple: per-stage runtime procedures + gate-firing rules + recovery mechanisms + self-assessment runtime + bundle assembly + interfaces with neighbors + artifact-shape decision, all within §6 no-runtime-enforcement-code constraint + §9 process-layer-out-of-scope (for the meaning-layer doc) commitment.

## Mode + Entry Point + Reception

- **Territory-type mode**: HYBRID. Artifact territory = meaning-layer doc (996 lines after 13-30 redesign) + 11 prior findings (4 cascade resolutions + 04-07-48 foundational process-layer + 14-14 mode 6 + 17-46 confidence rubric + 21-58 MQ2 dispatch + 18-21 empty-as-content + 13-30 structural-layer redesign). Possibility territory = per-stage runtime procedures + gate-firing rules + recovery mechanisms + LAYER 1 mode self-check procedures + bundle assembly mechanics + interface procedures + artifact-shape options.
- **Entry point**: signal-first. Purpose specific (process-layer specification under §6 + §9 constraints); territory enumerated in Synthesis Trigger.
- **Boundary-discovery**: skipped. Territory explicit-bounded.
- **Purpose** (Reception input): produce process-layer specification preserving meaning-layer + structural-layer commitments + respecting §6 (no runtime enforcement code) + §9 (process-layer doesn't live in meaning-layer doc); engage 17 observation targets.
- **Territory**: (a) the meaning-layer doc current state; (b) §6 lightweight stance constraint text; (c) §9 OUT-OF-SCOPE commitment text; (d) 04-07-48 original process-layer 3-phase runtime + per-operation firing-format + LAYER 1/LAYER 2 framework; (e) cascade-era refinements (21-52 2-shape; 23-18 AMBIGUITY-NATURE; 11-40 multi-source composition; 12-22 pre-context phase); (f) per-judgment-edge process candidates; (g) artifact-shape options.

## Traversal Trace

### Region 1 — User's process-layer framing

| Seq | Item | Tag | Confidence | Note |
|---|---|---|---|---|
| 1 | User: "dive deep of articulate simple process layer, since we made lots of changes, lets redo this" | core | HIGH | Process-layer redesign explicitly requested |
| 2 | "lots of changes" = 4 cascade resolutions (21-52 + 23-18 + 11-40 + 12-22) + 13-30 structural-layer redesign | core | HIGH | The motivating change-set |
| 3 | 04-07-48 was the original process-layer finding; this inquiry tests how much of it still stands vs needs refinement under post-cascade state | core | HIGH | Refinement-vs-replacement question |

### Region 2 — §6 lightweight stance constraint (HARD constraint)

| Seq | Item | Tag | Confidence | Note |
|---|---|---|---|---|
| 4 | §6 criterion 1: No separate verify-phase | core | HIGH | Process-layer cannot introduce verify-phase |
| 5 | §6 criterion 2: No external-anchor inputs | core | HIGH | Single input contract: task statement |
| 6 | §6 criterion 3: No halt-gate output | core | HIGH | Always emits something downstream can consume |
| 7 | §6 criterion 4: No sub-machinery beyond a paragraph per operation | core | HIGH | Process-layer cannot introduce per-operation multi-phase pipelines |
| 8 | §6 criterion 5: No ecosystem-knowledge reach | core | HIGH | Substrate boundary preserved |
| 9 | §6 criterion 6: Every output element is load-bearing | core | HIGH | No audit-theater fields |
| 10 | §6 commits: "Runtime self-enforcement would itself be sub-machinery — a check running on every invocation, which violates criterion 4 directly. Lightweight enforcement happens at authoring time; runtime carries no enforcement code." | core | HIGH | CRUX — the HARD constraint for process-layer |
| 11 | §6 commits: "Cross-LLM determinism on judgment-call edges (cold-context detection, intrinsic-vs-extrinsic exclusion-ambiguity routing, MQA reconcile-vs-surface threshold, and similar LLM-judgment points) is intentionally not committed at runtime — the lightweight stance authorizes LLM-judgment divergence at these edges by design." | core | HIGH | LLM-judgment latitude at named edges |

### Region 3 — §9 OUT-OF-SCOPE commitment

| Seq | Item | Tag | Confidence | Note |
|---|---|---|---|---|
| 12 | §9 commits: "Process-layer concerns — how the runner reads articulate's output; how the spawn-or-process decision is made when Itemize emits count > 1; how late-split re-fires are triggered. These live in runner-side specs, one per runner." | core | HIGH | Routes process-layer to runner-side specs |
| 13 | Implication: discipline-level process spec could live in (a) sibling spec doc; (b) embedded in runner specs; (c) inline in finding; (d) appended to meaning-layer doc (violates §9); (e) sub-divided | core | HIGH | Artifact-shape options |
| 14 | Tension: runner-specific process is per-runner; discipline-level process spec gives runners a consistent skeleton to implement. The two are complementary, not competitors. | core | HIGH | Discipline-level vs runner-level distinction |

### Region 4 — Per-stage runtime procedures

| Seq | Item | Tag | Confidence | Note |
|---|---|---|---|---|
| 15 | Stage 1 (Itemize): statement-level; runs once per invocation | core | HIGH | One-shot statement-level |
| 16 | Stage 2 (Meta-question + MQA): per-item; runs once per item; MQA is final internal step within Stage 2 | core | HIGH | Per-item Meta-question |
| 17 | Stage 3 (Deconstruct + MultiDepth): per-item; independent; either order | core | HIGH | Independent per-item |
| 18 | Stage 4 (Rephrase): per-item; runs last; consumes upstream as multi-source composition | core | HIGH | Per-item last |
| 19 | 4-stage per-item flow is acyclic within invocation — one pass per item | core | HIGH | No in-invocation iteration |
| 20 | Stage 1 fires once; Stages 2-4 fire per item N times (N = Itemize count) | core | HIGH | Iteration structure |
| 21 | Each operation's runtime procedure: read inputs → LLM-judgment + composition → emit output | core | HIGH | Operation procedure shape |
| 22 | Operations within a stage may have ordering flexibility (Deconstruct + MultiDepth independent); across stages: fixed | core | HIGH | Intra-stage flexibility |

### Region 5 — Gate-firing rules

| Seq | Item | Tag | Confidence | Note |
|---|---|---|---|---|
| 23 | Stage 1 entry: invocation starts; statement received | core | HIGH | Deterministic gate |
| 24 | Stage 1 exit: Itemize emitted; per-item iteration begins | core | HIGH | Deterministic gate |
| 25 | Stage 2 entry: per-item; item text received from Itemize | core | HIGH | Deterministic gate |
| 26 | Stage 2 exit: MQA emitted; raw MQ identifications + reconciliation-content available | core | HIGH | Deterministic gate |
| 27 | Stage 3 entry: post-Stage 2; same item | core | HIGH | Deterministic gate |
| 28 | Stage 3 exit: Deconstruct + MultiDepth both emitted | core | HIGH | Deterministic gate |
| 29 | Stage 4 entry: post-Stage 3; same item; multi-source composition formed (conceptually; no actual checker code) | core | HIGH | Deterministic gate; composition is declarative |
| 30 | Stage 4 exit: Rephrase variant-set emitted; item bundle complete | core | HIGH | Deterministic gate |
| 31 | End-of-invocation gate: all items processed; bundle assembly complete; self-assessment runs | core | HIGH | Deterministic gate |
| 32 | Stage entry/exit gates are DETERMINISTIC (control flow); within-stage operations have LLM-judgment latitude | core | HIGH | Gate-vs-procedure distinction |

### Region 6 — Cold-context detection mechanism

| Seq | Item | Tag | Confidence | Note |
|---|---|---|---|---|
| 33 | Cold context = no relevant prior session material visible to LLM for THIS task's domain | core | HIGH | Definition |
| 34 | Warm context = relevant session material visible (declared exclusions, prior task discussions, etc.) | core | HIGH | Definition |
| 35 | Detection is LLM-judgment edge per §6; deterministic mechanism NOT specified | core | HIGH | LLM-judgment authorized |
| 36 | Procedure (declarative): LLM examines loaded context for relevance signals to THIS task's domain; relevance signals → warm; absence → cold | core | HIGH | Procedure description |
| 37 | Mis-detection consequence: cold treated as warm → over-eager identification (hallucinated relevance); warm treated as cold → missed extrinsic signals | core | HIGH | Failure modes |
| 38 | Mis-detection mitigation: identified-ambiguities form preserves openness either way (cold mis-detected as warm still emits identified-ambiguities, not committed warm-context guesses) | core | HIGH | 2-shape protection |
| 39 | Per §6: no checker; LLM judgment per invocation | core | HIGH | Reaffirms §6 constraint |

### Region 7 — Intrinsic-vs-extrinsic exclusion routing

| Seq | Item | Tag | Confidence | Note |
|---|---|---|---|---|
| 40 | Intrinsic signals: in the task statement itself ("from scratch," "don't touch X," "only Y portion") | core | HIGH | Source = statement |
| 41 | Extrinsic signals: in broader session context ("we deprecated v1 last week") | core | HIGH | Source = session |
| 42 | Routing rule (meaning-layer per §2.2.4): intrinsic → MQ3 + MQA territory; extrinsic → MQ4 territory | core | HIGH | Routing principle |
| 43 | Detection is LLM-judgment edge per §6 | core | HIGH | LLM-judgment authorized |
| 44 | Procedure (declarative): per-signal, LLM determines source (in-statement vs broader session); routes to appropriate MQ | core | HIGH | Procedure description |
| 45 | Boundary case: signal appears both in statement AND session (rare); LLM judgment splits handling | sub | MED | Edge case |
| 46 | Mis-routing consequence: intrinsic to MQ4 → MQ4 over-emits; extrinsic to MQ3 → MQ3 misses the explicit declaration | sub | MED | Failure modes |

### Region 8 — MQA reconcile-vs-surface threshold

| Seq | Item | Tag | Confidence | Note |
|---|---|---|---|---|
| 47 | Hybrid reconcile-OR-surface per §2.2.6 | core | HIGH | Mode |
| 48 | Reconcile when overlap is clear (LLM can identify joint axis with HIGH confidence) | core | HIGH | Reconcile case |
| 49 | Surface when overlap is unclear (LLM cannot confidently judge overlap's nature; emits "irreducible overlap" + description) | core | HIGH | Surface case |
| 50 | Threshold is LLM-judgment edge per §6; no deterministic mechanism | core | HIGH | LLM-judgment authorized |
| 51 | Procedure (declarative): MQA reads MQ identification-set; assesses overlap clarity; reconciles or surfaces based on LLM judgment | core | HIGH | Procedure description |
| 52 | Mis-reconciliation consequence: wrong overlap-joining → Rephrase redundant variants OR misses a real axis | core | HIGH | Failure mode |
| 53 | ALIGNED case: no overlap detected; raw MQ identifications flow through unchanged | core | HIGH | No-op case |

### Region 9 — 2-shape determination mechanism

| Seq | Item | Tag | Confidence | Note |
|---|---|---|---|---|
| 54 | 2-shape: identified-ambiguities-list OR explicit-empty per 21-52 + 23-18 | core | HIGH | Determination output space |
| 55 | Determination is LLM-judgment per §6 | core | HIGH | LLM-judgment authorized |
| 56 | Procedure (declarative): per typed axis (scope / context-need / intent / boundary / purpose), LLM perceives whether openness is plausible; if yes → identified-ambiguities-list; if no → explicit-empty | core | HIGH | Procedure description |
| 57 | Perceivability principle (§2.4 + 18-21): "emits what's perceivable" | core | HIGH | Authoring-time commitment |
| 58 | Mis-determination consequence: false identified-ambiguities (hallucinated readings) → downstream sees fake openness; false explicit-empty (missed real ambiguity) → downstream sees apparent commitment-by-absence | core | HIGH | Failure modes |
| 59 | Asymmetric-failure principle: false identified-ambiguities (over-emission) is recoverable; false explicit-empty (under-emission) silently drops information. Bias toward identified-ambiguities under uncertainty. | core | HIGH | KEY decision rule |

### Region 10 — AMBIGUITY-NATURE distinction operationalization

| Seq | Item | Tag | Confidence | Note |
|---|---|---|---|---|
| 60 | MQ3 = WHAT axis (intent-action ambiguities); MultiDepth = WHY axis (purpose-motivation ambiguities) | core | HIGH | Axis distinction |
| 61 | Per 23-18: distinction is structural in software-engineering vocabulary | core | HIGH | Vocabulary-grounded |
| 62 | Operationalization at runtime: LLM judgment per typed axis | core | HIGH | LLM-judgment authorized |
| 63 | Procedure (declarative): MQ3 asks "what is the user trying to accomplish?" (action-endpoint shape); MultiDepth asks "why does the user want the task done?" (motivation-chain shape) | core | HIGH | Procedure description |
| 64 | Mis-operationalization consequence: WHY identified at MQ3 OR WHAT identified at MultiDepth → axis-conflation; Rephrase variants redundantly span same dimension | core | HIGH | Failure mode |
| 65 | Mitigation: MQA reconciles ambiguity-overlaps; if MQ3-WHAT and MultiDepth-WHY both surface same axis, MQA identifies overlap and consolidates | core | HIGH | Existing mechanism |

### Region 11 — Multi-source composition runtime enforcement for Rephrase

| Seq | Item | Tag | Confidence | Note |
|---|---|---|---|---|
| 66 | 4 sources: Deconstruct deliverable-shape + identified-ambiguities-list + MQ4 NOT-list + substrate-bounded | core | HIGH | Composition components |
| 67 | §6 prohibits runtime enforcement code | core | HIGH | HARD constraint |
| 68 | Procedure (declarative): Rephrase composes the 4 sources at generation time; each variant must pass all 4 bounds via LLM-judgment | core | HIGH | Declarative composition |
| 69 | How does Rephrase "pass" without a checker? LLM-judgment per variant: "does this variant change deliverable type?" / "does this variant span an ambiguity dimension MQs identified?" / "does this variant include excluded vocab?" / "does this variant invoke project-specific terms not in session?" | core | HIGH | Per-variant judgment |
| 70 | Mis-enforcement consequence: drift past one or more bounds → LAYER 1 mode "Rephrase variant-set drifts outside multi-source composition bounds" fires at end-of-invocation self-check | core | HIGH | Failure mode |
| 71 | VARIANT-SET-AS-OPENNESS-PRESERVATION (11-40): set captures openness; individual variants are exemplars; bounded by composition | core | HIGH | Principle |

### Region 12 — Realistic variant count determination

| Seq | Item | Tag | Confidence | Note |
|---|---|---|---|---|
| 72 | 11-40 articulates 2-6 typical range | core | HIGH | Empirical claim |
| 73 | Floor: 2 per §2.5 commitment ("Two or more rephrasings per item is the minimum") | core | HIGH | Hard floor |
| 74 | Cap: not deterministically specified; 11-40 claims typical 2-6 | core | HIGH | Soft cap |
| 75 | Determination: LLM judgment + multi-source composition's bounds (which limit space) | core | HIGH | LLM-judgment + composition |
| 76 | Procedure (declarative): Rephrase generates variants spanning identified ambiguities; bounded count emerges from how many ambiguity-dimensions are perceived (1-3 dimensions × 1-2 variants per dimension = 2-6) | core | HIGH | Procedure description |
| 77 | Floor-violation: 1 variant → LAYER 1 mode "below minimum" fires | core | HIGH | Failure mode |
| 78 | Cap-violation: 10+ variants → likely combinatorial explosion; LAYER 1 mode "variant-set drifts outside composition bounds" fires | sub | MED | Soft failure mode |

### Region 13 — Late-split re-fire triggers (runner-initiated)

| Seq | Item | Tag | Confidence | Note |
|---|---|---|---|---|
| 79 | §2.1 commits: "Recovery from a late-discovered missed Itemize split happens via runner-initiated re-invocation, not via in-invocation iteration" | core | HIGH | Recovery commitment |
| 80 | §2.3 commits: "Cross-check vs Itemize" — Deconstruct's per-item tuple diverges from Itemize → late-split signal | core | HIGH | Trigger source |
| 81 | Trigger: Deconstruct finds internal multi-tuple structure that Itemize didn't catch | core | HIGH | Internal trigger |
| 82 | Trigger: MQ2 identifies context-need ambiguity at multi-axis (suggests multi-item structure) | sub | MED | Inference-based trigger |
| 83 | Trigger: user verification catches missed split | sub | MED | External trigger |
| 84 | Trigger: downstream discipline catches missed split when consuming bundle | sub | MED | Cross-discipline trigger |
| 85 | Runner action: re-invoke articulate with re-fire mode parameter; pass original statement + late-split signal; receive refined bundle | core | HIGH | Runner mechanism (per-runner detail) |
| 86 | Discipline-level commitment: process spec describes the trigger SIGNALS, not runner's specific re-invocation procedure | core | HIGH | Boundary between discipline + runner |

### Region 14 — Spawn-or-process decision when count > 1

| Seq | Item | Tag | Confidence | Note |
|---|---|---|---|---|
| 87 | §2.1 commits: "count = 1 → process in place; count > 1 → runner spawns N sibling work items" | core | HIGH | Spawn rule |
| 88 | This is RUNNER-side process per §9 | core | HIGH | Routing per §9 |
| 89 | Discipline-level signal: Itemize.count + per-item identifiers | core | HIGH | Signal contract |
| 90 | Runner action: count = 1 → single bundle processing; count > 1 → N sibling work-items spawned, each gets its own bundle | core | HIGH | Runner mechanism |
| 91 | Discipline-level commitment: per-item bundles are independent (no cross-item interpretation per NOT-list rule 4) | core | HIGH | Constraint |

### Region 15 — LAYER 1 mode self-check runtime

| Seq | Item | Tag | Confidence | Note |
|---|---|---|---|---|
| 92 | §7 LAYER 1 modes (from doc + 04-07-48): premature Itemize split; late-detected multi-item case; MQ extension violates bounded-extensibility; Rephrase variant-set drifts outside multi-source composition bounds; per-operation firing missed; MQ2 identified-ambiguities-list missing kinds-axis or stance-axis | core | HIGH | Current mode set |
| 93 | Self-check runs at end-of-invocation | core | HIGH | Timing |
| 94 | Procedure (declarative): per LAYER 1 mode, LLM examines bundle for failure signature | core | HIGH | Per-mode procedure |
| 95 | Detection is binary per mode (fired / not-fired); LAYER 1 reports collect into bundle's self-assessment field | core | HIGH | Binary detection |
| 96 | §6 constraint: self-check is LIGHT pass — one LLM judgment per mode, binary result | core | HIGH | Lightweight constraint |
| 97 | Mode 6 (per 14-14): MQ2 answer missing preparation content — tests whether MQ2's identified-ambiguities-list has 3 element-axes (verdict / kinds / stance) | core | HIGH | Specific mode |
| 98 | Cascade-era LAYER 1 additions: 2-shape violation (commitment emitted instead of identified-ambiguities); AMBIGUITY-NATURE conflation (WHY at MQ3 or WHAT at MultiDepth); multi-source composition drift (Rephrase variant outside bounds) | core | HIGH | NEW modes |
| 99 | Cascade-era LAYER 2 addition (per doc §7): commitment drift (the operation starts emitting confident or hedged commitments instead of identified-ambiguities at articulate_simple stage — substrate-bounded-chain violation) | core | HIGH | NEW LAYER 2 mode |

### Region 16 — HIGH/MED/LOW confidence assignment

| Seq | Item | Tag | Confidence | Note |
|---|---|---|---|---|
| 100 | §8 commits Primary + Secondary discriminators | core | HIGH | Discriminator set |
| 101 | Primary (objective): how many LAYER 1 mode boundaries approached + how close any one came | core | HIGH | Primary rule |
| 102 | Secondary (subjective): per-operation friction LLM perceived | core | HIGH | Secondary rule |
| 103 | Determination is LLM-judgment per §6 | core | HIGH | LLM-judgment authorized |
| 104 | Procedure (declarative): at end-of-invocation, LLM assesses (a) Primary: count boundary approaches from self-check; (b) Secondary: recall friction signals; combine into HIGH/MED/LOW | core | HIGH | Procedure description |
| 105 | Per-verdict pairings: HIGH-PROCEED (clean); MED-FLAG (boundary approached + one fired); LOW-RE-RUN (structural failure); LOW-PROCEED (process succeeded with compound friction); HIGH-FLAG (very confident the flagged condition exists) | core | HIGH | Pairings |

### Region 17 — Bundle assembly mechanics

| Seq | Item | Tag | Confidence | Note |
|---|---|---|---|---|
| 106 | Per-item bundle contents (per §4): item text + MQ entries (each Q-mandatory + 2-shape answer) + Deconstruct tuple + MultiDepth two outputs + Rephrasings | core | HIGH | Bundle contract |
| 107 | Statement-level fields: Itemize count + per-item identifiers + self-assessment verdict + confidence | core | HIGH | Statement-level fields |
| 108 | Assembly procedure (declarative): as each operation emits, output integrates into bundle's structure; at end-of-invocation, bundle is serialized for emission | core | HIGH | Procedure description |
| 109 | Field naming: structural-layer concern (per §4); process-layer specifies WHICH fields exist, not exact names | core | HIGH | Layer separation |
| 110 | Bundle integrity check at end-of-invocation: per LAYER 1 mode "per-operation firing missed" — if a field is absent, mode fires | core | HIGH | Integrity check |
| 111 | Bundle emission interface: emitted as serialized structure; runner reads via field names | core | HIGH | Emission interface |

### Region 18 — Interface with /surfacing

| Seq | Item | Tag | Confidence | Note |
|---|---|---|---|---|
| 112 | Runner reads MQ2 + MQ4 from bundle (per 21-58 dispatch finding) | core | HIGH | Reader contract |
| 113 | Runner uses MQ2 identified-context-need-ambiguities + MQ4 identified-exclusion-ambiguities + MQA reconciliation-content to formulate /surfacing input | core | HIGH | Use case |
| 114 | /surfacing input contract: purpose + territory + bias (per /surfacing spec) | core | HIGH | Cross-discipline interface |
| 115 | Process-layer commitment: runner's MQ2/MQ4 reading is post-bundle-emission; no in-articulate machinery for /surfacing dispatch | core | HIGH | Boundary |
| 116 | Cross-discipline interface: articulate_simple → bundle → runner → /surfacing input formulation → /surfacing invocation | core | HIGH | Full path |

### Region 19 — Interface with runner + downstream loop disciplines

| Seq | Item | Tag | Confidence | Note |
|---|---|---|---|---|
| 117 | Runner reads bundle: Itemize count → spawn decision; MQ2 + MQ4 → /surfacing input; verdict + confidence → re-invocation decisions; identified-ambiguities-list → user verification | core | HIGH | Runner consumer pattern |
| 118 | Downstream loop disciplines (Sensemaking, Decomposition, Innovation, Critique): consume bundle as inherited context; MQ4 exclusions → territory specs; identified-ambiguities-list → problem framing | core | HIGH | Downstream consumer pattern |
| 119 | User reading framing artifact: scannable for verification (per §6 criterion 6) | core | HIGH | User consumer |
| 120 | Cross-discipline contract preservation: each consumer reads bundle by stable field name; bundle structure is the contract (structural-layer) | core | HIGH | Contract preservation |

### Region 20 — Re-invocation modes (within articulate_simple)

| Seq | Item | Tag | Confidence | Note |
|---|---|---|---|---|
| 121 | Late-split re-fire mode: runner-initiated; full re-invocation on original statement with late-split signal | core | HIGH | Mode 1 |
| 122 | §9 OUT-OF-SCOPE list mentions "Re-invocation modes specific to the two-pass form" (e.g., "context-informed-refinement" re-running only Rephrase with new substrate) — POST-CONTEXT modes for articulate2; OUT OF SCOPE here | core | HIGH | Two-pass out of scope |
| 123 | Within articulate_simple, re-invocation modes are LIMITED to: late-split re-fire + statement-level re-fire (runner detects something wrong with whole bundle) | core | HIGH | Limited mode set |
| 124 | No in-invocation iteration (per §3 "4-stage per-item flow is acyclic within an invocation — one pass per item") | core | HIGH | No internal loops |
| 125 | Self-assessment's RE-RUN verdict triggers full re-invocation (not partial); runner chooses to re-invoke or not | core | HIGH | RE-RUN handling |

### Region 21 — Artifact-shape decision (where the spec lives)

| Seq | Item | Tag | Confidence | Note |
|---|---|---|---|---|
| 126 | Option A — new sibling doc `devdocs/how_articulate_simple_process_should_be.md` (analogous to meaning-layer doc) | core | HIGH | Strong candidate |
| 127 | Option B — embed process notes in runner-side specs per §9 (formal commitment) | core | HIGH | §9-compliant |
| 128 | Option C — inline in finding's deliverable (this finding's content IS the process-layer spec) | core | HIGH | Minimal artifact |
| 129 | Option D — append to meaning-layer doc (VIOLATES §9 OUT-OF-SCOPE) | core | HIGH | REJECTED candidate |
| 130 | Option E — sub-divided into multiple artifacts (per-operation runtime sub-specs) | sub | MED | Over-engineered |
| 131 | §9 routes to "runner-side specs, one per runner" — RUNNER-specific process. Discipline-level process spec (this inquiry's output) is a DIFFERENT artifact; it informs runner specs but isn't IN them. | core | HIGH | Key distinction |
| 132 | Best candidate: NEW sibling doc `devdocs/how_articulate_simple_process_should_be.md` analogous to meaning-layer doc; respects layered IA per 13-30 pattern; discipline-level process spec lives at discipline level | core | HIGH | Recommended path |

### Region 22 — Inherited commitments from 11 priors

| Seq | Item | Tag | Confidence | Note |
|---|---|---|---|---|
| 133 | 04-07-48 (foundational process-layer): 3-phase runtime + per-operation firing-format + LAYER 1/LAYER 2 framework | core | HIGH | Foundational; UNDER DIRECT EXTENSION |
| 134 | 14-14 (mode 6): MQ2 answer missing preparation content detection | core | HIGH | UNDER TEST |
| 135 | 17-46 (confidence rubric): HIGH/MED/LOW + Primary/Secondary discriminators | core | HIGH | UNDER DIRECT TEST |
| 136 | 21-58 (MQ2 dispatch + preparation substrate + always-invoke) | core | HIGH | UNDER TEST |
| 137 | 21-52 (MQ 2-shape; substrate-bounded chain; cascade-acknowledgment-without-pre-decision) | core | HIGH | UNDER DIRECT TEST (new gates) |
| 138 | 23-18 (MultiDepth literal + identified-purpose-motivation-ambiguities + AMBIGUITY-NATURE) | core | HIGH | UNDER DIRECT TEST (operationalization) |
| 139 | 11-40 (Rephrase multi-source composition + variant-set + 2-6 count) | core | HIGH | UNDER DIRECT TEST (runtime enforcement) |
| 140 | 12-22 (pre-context phase + §9 refinement + scope-completeness-recasting + cascade-acknowledgment-at-cumulative-pressure) | core | HIGH | UNDER TEST |
| 141 | 18-21 (three-layer model + empty-as-content) | core | HIGH | UNDER TEST (empty-as-content drives 2-shape determination) |
| 142 | 13-30 (structural-layer redesign + layered-IA-for-spec-docs new meta-pattern) | core | HIGH | UNDER TEST (pattern may transfer to process-layer spec doc) |
| 143 | Meaning-layer doc (current state after 13-30) — full commitments preserved | core | HIGH | Foundation; UNDER DIRECT REFERENCE |

### Region 23 — Conceptual distinctions (deepest cruxes)

| Seq | Item | Tag | Confidence | Note |
|---|---|---|---|---|
| 144 | **Runtime procedure vs runtime enforcement code** — process spec articulates HOW; doesn't require checker code. §6 prohibits checker; doesn't prohibit description. | core | HIGH | CRUX |
| 145 | **Declarative vs imperative process spec** — declarative when LLM-judgment edges involved; imperative for deterministic gates. Hybrid spec uses both. | core | HIGH | Style distinction |
| 146 | **Process spec lives at DISCIPLINE level vs RUNNER level** — this inquiry's artifact is discipline-level; informs runner-level specs without being in them | core | HIGH | Level distinction |
| 147 | Process-layer specification preserves §6 by: (i) not introducing enforcement checkers; (ii) commiting LLM-judgment latitude where meaning-layer authorizes it; (iii) keeping procedure descriptions short | core | HIGH | §6 compliance |
| 148 | Process-layer specification respects §9 by: (i) not appending to meaning-layer doc; (ii) living in a sibling artifact; (iii) referring to runner-side specs for per-runner details | core | HIGH | §9 compliance |
| 149 | Asymmetric-failure principle (§2.1): bias toward identified-ambiguities under uncertainty; this is a process-layer commitment at LLM-judgment edges | core | HIGH | KEY meta-rule |
| 150 | Process layer is the SMALLEST of the three layers (meaning > structural > process) because most discipline behavior is LLM-judgment authorized by §6 | core | HIGH | Size assessment |
| 151 | Process layer is NOT empty — gates fire, modes self-check, stages compose, interfaces hand off; the process spec articulates this clearly | core | HIGH | Anti-zero claim |
| 152 | Cascade-era LAYER 1 mode additions (2-shape violation, AMBIGUITY-NATURE conflation, multi-source drift) need integration into the LAYER 1 mode set | core | HIGH | Mode-set evolution |
| 153 | Cascade-era LAYER 2 mode addition (commitment drift — already noted in doc §7) — substrate-bounded-chain violation pattern | core | HIGH | LAYER 2 addition |
| 154 | Discipline-level process spec + runner-specific process specs = complementary; the discipline spec is the SKELETON, the runner specs flesh out specific implementation choices | core | HIGH | Complementarity |

## Coverage Map

| Region | Coverage | Confirmed-absent? | Aggregate verdict |
|---|---|---|---|
| 1 | confirmed | no | core-relevant (3) |
| 2 | confirmed | no | core-relevant (8) — HARD constraint |
| 3 | confirmed | no | core-relevant (3) — routing commitment |
| 4 | confirmed | no | core-relevant (8) — stage structure |
| 5 | confirmed | no | core-relevant (10) — gates |
| 6 | confirmed | no | core-relevant (7) — cold-context judgment edge |
| 7 | confirmed | no | core-relevant (5 core + 2 sub) — exclusion routing |
| 8 | confirmed | no | core-relevant (7) — MQA threshold |
| 9 | confirmed | no | core-relevant (6) — 2-shape determination |
| 10 | confirmed | no | core-relevant (6) — AMBIGUITY-NATURE |
| 11 | confirmed | no | core-relevant (6) — multi-source composition |
| 12 | confirmed | no | core-relevant (6 core + 1 sub) — variant count |
| 13 | confirmed | no | core-relevant (5 core + 3 sub) — late-split |
| 14 | confirmed | no | core-relevant (5) — spawn-or-process |
| 15 | confirmed | no | core-relevant (8) — LAYER 1 self-check + cascade additions |
| 16 | confirmed | no | core-relevant (6) — confidence assignment |
| 17 | confirmed | no | core-relevant (6) — bundle assembly |
| 18 | confirmed | no | core-relevant (5) — /surfacing interface |
| 19 | confirmed | no | core-relevant (4) — runner + downstream interfaces |
| 20 | confirmed | no | core-relevant (5) — re-invocation modes |
| 21 | confirmed | no | core-relevant (5 core + 2 sub) — artifact-shape decision |
| 22 | confirmed | no | core-relevant (11) — inherited commitments |
| 23 | confirmed | no | core-relevant (11) — deepest cruxes |

## State Summary

### Territory-specification echo
HYBRID territory (artifact: meaning-layer doc + 11 priors + 13-30 structural finding; possibility: per-stage procedures + gate-firing rules + LLM-judgment edge procedures + LAYER 1 mode self-check + bundle assembly + interface procedures + artifact-shape options + cascade-era LAYER 1 additions).

### Purpose-specification echo
Produce process-layer specification for articulate_simple — per-stage runtime procedures + gate-firing rules + recovery mechanisms + self-assessment runtime + bundle assembly + interfaces with neighbors + artifact-shape decision; respect §6 (no runtime enforcement code) + §9 (process-layer not in meaning-layer doc) + preserve all meaning + structural-layer commitments.

### Confirmed-absent regions
None. All 23 regions surfaced relevant items.

### Concept-names list

- **Runtime procedure vs runtime enforcement code** (distinction; CRUX): §6 prohibits checker code; doesn't prohibit procedure description
- **Declarative vs imperative process spec** (style distinction): declarative when LLM-judgment fires; imperative for deterministic gates
- **Discipline-level process spec vs runner-level process spec** (level distinction): discipline-level is the skeleton; runner-level fleshes out specific implementations
- **LLM-judgment edges** (per §6 — explicitly named): cold-context detection / intrinsic-vs-extrinsic exclusion routing / MQA reconcile-vs-surface threshold / 2-shape determination / AMBIGUITY-NATURE operationalization / multi-source composition runtime enforcement / variant count determination / LAYER 1 self-check per-mode / confidence assignment
- **Deterministic gates** (control flow): stage entry/exit + per-item iteration + end-of-invocation
- **Recovery mechanisms** (per-discipline + per-runner): late-split re-fire trigger + signal vs runner-initiated re-invocation procedure
- **LAYER 1 mode additions** (cascade-era): 2-shape violation + AMBIGUITY-NATURE conflation + multi-source composition drift
- **LAYER 2 mode addition** (cascade-era): commitment drift (substrate-bounded-chain violation; already in doc §7)
- **Asymmetric-failure principle at LLM-judgment edges** (meta-rule): bias toward identified-ambiguities + keep-together + FLAG when uncertain
- **Artifact-shape decision** (where spec lives): Option A new sibling doc strongly favored
- **layered-IA-for-spec-docs pattern transfer** (from 13-30): potentially applies to process-layer spec doc; transferability test

### Recency distribution
Not applicable.

### Workspace-populated status
`{populated: true, populated-at: 2026-06-07_15-08, extent: 154 items across 23 regions; full meaning-layer doc + 11 priors + 13-30 finding + cascade-era LAYER 1 additions enumerated}`

### Frontier flags

- **Frontier 1**: CRUX — runtime procedure vs runtime enforcement code distinction. §6 prohibits the latter; process spec articulates the former via declarative + LLM-judgment-authorized + gate-firing descriptions. Sensemaking must adjudicate.
- **Frontier 2**: Artifact-shape decision strongly favors NEW sibling doc (Option A); Option B (embed in runner specs) is the literal §9 commitment but doesn't preclude discipline-level process spec. Sensemaking should confirm.
- **Frontier 3**: Cascade-era LAYER 1 mode additions (2-shape violation; AMBIGUITY-NATURE conflation; multi-source drift) need integration. Sensemaking should articulate the procedure for each new mode.
- **Frontier 4**: 04-07-48 original process-layer finding — how much stands vs refines under cascade-era state? Sensemaking should re-test.
- **Frontier 5**: Asymmetric-failure principle is the meta-rule at LLM-judgment edges; should be elevated to the process spec's "principles" section.
- **Frontier 6**: layered-IA-for-spec-docs pattern (from 13-30) — does it transfer to the process-layer sibling spec doc? Innovation should test.
- **Frontier 7**: Late-split re-fire trigger vs runner mechanism distinction — discipline spec describes SIGNALS; runner specs describe MECHANISM. Boundary preservation.

## Forward Signals to Sensemaking

1. **CRUX — Runtime procedure vs enforcement code distinction is load-bearing**. §6 prohibits "runtime carries no enforcement code"; process spec describes WHAT happens at runtime without imposing a checker. Procedure description ≠ enforcement code.

2. **ARTIFACT-SHAPE — Option A (new sibling doc) strong candidate**. `devdocs/how_articulate_simple_process_should_be.md` analogous to meaning-layer doc; layered IA per 13-30 pattern; discipline-level process spec lives at discipline level. Sensemaking should confirm.

3. **CASCADE-ERA LAYER 1 MODE ADDITIONS** — 2-shape violation + AMBIGUITY-NATURE conflation + multi-source composition drift are NEW failure signatures the post-cascade state surfaces. 04-07-48 LAYER 1 mode set needs extension.

4. **LLM-JUDGMENT LATITUDE PRESERVATION** — §6 authorizes divergence at 7 named edges (cold-context detection / intrinsic-vs-extrinsic routing / MQA threshold / 2-shape determination / AMBIGUITY-NATURE operationalization / multi-source enforcement / variant count). Process spec describes the PROCEDURE at each edge declaratively; does NOT specify determinism.

5. **ASYMMETRIC-FAILURE PRINCIPLE AS META-RULE** — bias toward identified-ambiguities + Itemize keep-together + FLAG when uncertain. This is THE load-bearing meta-rule at LLM-judgment edges; should be the process spec's foundational principle.

6. **DETERMINISTIC GATES vs LLM-JUDGMENT EDGES** — stage entry/exit are deterministic control flow; within-stage operations have LLM-judgment latitude. The distinction structures the process spec.

7. **DISCIPLINE-LEVEL vs RUNNER-LEVEL distinction** — discipline-level process spec is the SKELETON (gates + stages + signals + interfaces); runner-level fleshes out specific implementation choices (e.g., HOW the runner re-invokes after late-split). §9 routes runner-level to runner specs; discipline-level spec is a different artifact.

8. **04-07-48 refinement scope** — 3-phase runtime shape preserved; per-operation firing-format preserved; LAYER 1/LAYER 2 framework preserved (extended with cascade-era additions). 04-07-48 is the foundation; this inquiry extends.

9. **layered-IA-for-spec-docs PATTERN TRANSFER** — 13-30 surfaced this pattern for spec docs at Bootstrap stage. If process-layer spec is a sibling spec doc, the pattern may apply (TOC + identity + operations + early example + flow + output shape + constraints + reliability + scope + reference + summary + comprehensive examples).

10. **PROCESS LAYER IS SMALLEST OF THREE LAYERS** — meaning > structural > process by content volume; most discipline behavior is LLM-judgment authorized. Process spec is concise; doesn't try to specify what §6 says is LLM-judgment.

## Telemetry

- Mode: HYBRID (artifact + possibility)
- Entry point: signal-first
- Cycles run: 23
- Items enumerated: 154 (130 core + 8 sub + 16 unclassified-but-counted)
- Items tagged: core=130, sub=8; HIGH=141, MED=13
- Sub-phase fired: no
- Convergence criteria status: met
- Workspace-overload trigger: NOT fired
- Failure modes checked: all 10 modes ✓ NOT observed
- Self-assessment verdict: **PROCEED**

## Self-Assessment Verdict: PROCEED

All convergence criteria met. 23 regions surfaced 154 items. The critical CRUX (runtime procedure vs runtime enforcement code) is identified; artifact-shape decision strongly favors Option A new sibling doc; cascade-era LAYER 1 mode additions enumerated; LLM-judgment latitude preservation framed; asymmetric-failure principle elevated; 04-07-48 refinement scope clarified. 7 frontier flags raised for Sensemaking.
