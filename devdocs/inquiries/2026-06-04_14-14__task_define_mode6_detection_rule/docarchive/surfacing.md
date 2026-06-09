## User Input

devdocs/inquiries/2026-06-04_14-14__task_define_mode6_detection_rule/_branch.md

(Refinement-deep-dive on LAYER 1 mode 6 detection rule for the Task-Define runtime spec; primary layer = structural; meaning + process inherited as settled.)

---

# Surfacing Artifact — Task-Define LAYER 1 Mode 6 Detection Rule

## Mode + Entry Point

- **Mode:** `artifact` primary (territory contains concrete pre-existing items: current Task-Define runtime spec sections, prior findings, sister-discipline failure-mode patterns) + `possibility` for predicate-design candidates.
- **Entry point:** `signal-first` — purpose is explicit.
- **Territory specification:** `abstract-bounded` (boundary given as relevance criterion: "items bearing on designing the LAYER 1 mode 6 detection predicate, the MQ2-answer-shape commitment it requires as target, the coherence with §2.4's existing authoring constraint, edge-case handling, and lightweight + self-containment compliance"). Boundary-discovery sub-phase: NOT FIRED.

## Territory + Purpose Echo

- **Territory:** the Task-Define runtime spec's mode-6-relevant sections (§2.3, §2.4, §4.1-§4.2, §4.7, Execute step 4, §5.2); the meaning-layer dispatch-substrate commitment (15-39 §5); the process-layer cross-discipline interface + mode-6-emergence-history (07-48 §5 + innovation augmentation); sister-discipline detection-rule patterns (surfacing's LAYER 1 recognition columns; sensemaking's failure-mode correctives); the lightweight-stance criteria; the self-containment constraint; the possibility space of predicate forms, MQ2-shape commitments, placement options, and edge-case handlings.
- **Purpose:** design the operational detection predicate for LAYER 1 mode 6 — predicate text for §4.2's mode 6 recognition column + any MQ2 output-shape commitment that the predicate requires as target + coherence with §2.4's existing authoring constraint + confidence dimension + edge-case handling + lightweight/self-containment compliance — concrete enough to drop into the runtime spec.

## Traversal Trace

| # | Region / sub-region | Item identifier | Relevance | Conf | Step note | Recency annotation |
|---|---|---|---|---|---|---|
| 1 | S (spec content) | `cognitive_harness/task-define/references/task-define.md` §4.2 row 6 — current text: *"Meta-question fires but MQ2's answer lacks the information enabling external-context-need determination — the runner cannot extract a dispatch verdict."* This is the SITE of the gap | core | HIGH | Failure description, not a predicate; this is exactly what needs replacement / amendment | `{source: filesystem, value: 2026-06-04T08:46:13Z}` |
| 2 | S | §4.2 row 6 Corrective column current text: *"Re-fire MQ2 for the affected items, explicitly demanding the necessary information content."* — corrective references "necessary information content" but corrective is downstream of detection | sub | HIGH | Corrective presupposes detection has fired; tightening detection clarifies the corrective's trigger | `{source: filesystem, value: 2026-06-04T08:46:13Z}` |
| 3 | S | §2.4 dispatch substrate paragraph: *"MQ2's answer MUST contain enough information for a runner to make the external-context-need determination. ... at minimum, the answer carries a context-need verdict; when external context is needed, the answer carries information about what kind."* — the AUTHORING CONSTRAINT this inquiry must align the detection predicate with | core | HIGH | The closest existing structural commitment on MQ2's answer shape; the detection predicate must be coherent with this | `{source: filesystem, value: 2026-06-04T08:46:13Z}` |
| 4 | S | §2.4 — *"The specific schema of the answer is a per-spec-version detail; the constraint at this layer is sufficiency-for-runner-extraction"* | sub | HIGH | Implicit deferral of schema commitment; this inquiry may need to tighten or explicitly defer this | `{source: filesystem, value: 2026-06-04T08:46:13Z}` |
| 5 | S | §2.4 — *"The runner-side extraction protocol is out of scope. How a specific runner reads MQ2's answer and computes a dispatch verdict ... is a runner-side process concern."* | sub | HIGH | The scope boundary the detection predicate must respect: predicate tests perception's completeness (Task-Define-internal), not extraction correctness (runner-side) | `{source: filesystem, value: 2026-06-04T08:46:13Z}` |
| 6 | S | §2.3 MQ2 verbatim template: *"Is this task self-contained, or does it require external context to make sense and be done right? If external, what kind?"* | core | HIGH | The QUESTION FORM TEMPLATE — the answer's shape should mirror the question's two-part structure (binary + kind). Direct evidence of the intended answer shape | `{source: filesystem, value: 2026-06-04T08:46:13Z}` |
| 7 | S | §2.3 bounded-extensibility rule (a/b/c) — meta-question extensions must be "about task structure or framing, constrain Rephrase, expressible in one sentence" | side | MEDIUM | Less directly relevant; extensions to MQ2 are not what's at issue (the BASE MQ2's answer shape is what matters) | `{source: filesystem, value: 2026-06-04T08:46:13Z}` |
| 8 | S | §4.1 — LAYER 1 modes are "detectable via output observation; the discipline's self-assessment may itself recognize a LAYER 1 mode at end-of-invocation and emit FLAG" | core | HIGH | Establishes the detection LOCUS (end-of-invocation) + MECHANISM (output observation) — settled; predicate must be evaluable against the output bundle | `{source: filesystem, value: 2026-06-04T08:46:13Z}` |
| 9 | S | §4.7 FLAG condition (d): *"any LAYER 1 mode was self-recognized at end-of-invocation (modes 1-6)"* | sub | HIGH | The PROCESS HOOK that mode 6's detection feeds; firing mode 6's detection should set FLAG (d) | `{source: filesystem, value: 2026-06-04T08:46:13Z}` |
| 10 | S | §4.7 verdict shape: *"PROCEED / FLAG / RE-RUN with confidence (HIGH / MED / LOW) and a list of conditions"* | sub | HIGH | Mode 6 detection feeds the FLAG verdict; conditions list carries the mode name; confidence determination is its own gap (refinement #6) but mode-6-specific confidence is in scope here | `{source: filesystem, value: 2026-06-04T08:46:13Z}` |
| 11 | S | Execute step 4 — failure-mode self-check: *"for each of the 6 LAYER 1 modes, ask whether the current invocation's output exhibits the mode's recognition pattern"* | core | HIGH | The pattern-match procedure that consumes the recognition-column content; the predicate must be pattern-match-applicable | `{source: filesystem, value: 2026-06-04T08:46:13Z}` |
| 12 | S | §5.2 Per-item bundle contract — the MQ answers field: *"the set of meta-question answers for this item — the three base (MQ1 scope, MQ2 context-need, MQ3 intent) plus any extensions warranted under the bounded-extensibility rule; MQ2's answer carries the dispatch substrate information"* | core | HIGH | Where MQ2's answer LIVES at output time — in the per-item bundle's MQ_answers field; the detection predicate inspects this field | `{source: filesystem, value: 2026-06-04T08:46:13Z}` |
| 13 | S | LAYER 1 mode 6 — degenerate-case overlap: when count = 0, Meta-question never fires; mode 6 cannot apply (no MQ2 answer exists to inspect). FLAG condition (f) handles count = 0 separately | sub | HIGH | Edge case: predicate must specify it applies WHEN MQ2 fires; the count = 0 path is handled by a different FLAG condition | `{source: filesystem, value: 2026-06-04T08:46:13Z}` |
| 14 | M (meaning layer) | 15-39 §5 commitment: *"the Meta-question answers themselves are the signal. Task-Define does not emit a separate `needs_external_context` boolean or any explicit dispatch directive. The runner reads ... and decides."* | core | HIGH | Meaning-layer settlement: substrate IS MQ answers (no separate field). Predicate must NOT require Task-Define to emit a derivative dispatch field — that would violate the perception/action split | `{source: filesystem, value: 2026-06-04T05:38:03Z}` |
| 15 | M | 15-39 §5 reasoning: *"If Task-Define emitted a separate explicit field saying 'you should invoke Exploration,' it would be deciding rather than perceiving — which would blur the architectural distinction"* | core | HIGH | Direct constraint on the predicate: testing perception's completeness ≠ testing extraction correctness; the predicate must adjudicate the former without committing the latter | `{source: filesystem, value: 2026-06-04T05:38:03Z}` |
| 16 | M | 15-39 §9 criterion (iv): *"No sub-machinery beyond a paragraph. Each operation's spec description is one paragraph"* | core | HIGH | Constraint on the AMENDMENT — adding a multi-line structured-shape commitment to §2.3 or §2.4 risks violating this; refinement must respect the per-operation paragraph cap | `{source: filesystem, value: 2026-06-04T05:38:03Z}` |
| 17 | M | 15-39 §9 criterion (vi): *"Every output element must be load-bearing for at least one downstream actor's decision"* | sub | HIGH | The detection predicate is load-bearing for the runner's dispatch decision; the FLAG condition it feeds is load-bearing for downstream consumers' review decision; both pass criterion (vi) | `{source: filesystem, value: 2026-06-04T05:38:03Z}` |
| 18 | M | 15-39 §11 self-containment commitment: *"runtime reference spec contains no outbound pointers to design history, theory folders, or other disciplines"* | core | HIGH | Constraint: predicate text and any MQ2-shape commitment must not name any inquiry folder, design-history file, or other discipline | `{source: filesystem, value: 2026-06-04T05:38:03Z}` |
| 19 | P (process-layer) | 07-48 §5 (dispatch boundary to Exploration) — the FOUR-PART commitment: substrate = MQ answers; locus = runner; necessary information content constraint; extraction protocol runner-side | core | HIGH | The full process-layer frame this refinement honors. Detection predicate must operationalize "necessary information content" without slipping into runner-side extraction territory | `{source: filesystem, value: 2026-06-04T08:38:57Z}` |
| 20 | P | 07-48 §8 — LAYER 1 mode 6 ORIGIN: *"This mode emerged from the innovation discipline's patch-level absence-recognition during the inquiry; it surfaced from the cross-discipline interface as a runtime failure-mode candidate."* | sub | HIGH | History note: mode 6 was added late (via RE-TEST TRIGGER from P3 to P5 in the innovation discipline); the spec inherited the mode name + corrective but not a detection rule. This inquiry closes that gap | `{source: filesystem, value: 2026-06-04T08:38:57Z}` |
| 21 | P | 07-48 §5 — *"MQ2's answer MUST contain information enabling external-context-need determination — this constrains R1's MQ2 output schema"* — the EARLIEST commitment in the chain that introduced the necessary-info-content constraint | sub | HIGH | The chain: 07-48 process-layer commitment → §2.4 in the runtime spec (authoring constraint) → §4.2 mode 6 (currently no predicate). Closing the chain is this inquiry's job | `{source: filesystem, value: 2026-06-04T08:38:57Z}` |
| 22 | P | 07-48 §9 FLAG / RE-RUN commitments — the verdict shape with confidence; specific FLAG conditions enumerated | side | MEDIUM | Background frame; mode 6's detection plugs into the existing FLAG condition (d) for any LAYER 1 mode self-recognized | `{source: filesystem, value: 2026-06-04T08:38:57Z}` |
| 23 | F (sister-discipline precedents) | Surfacing spec `cognitive_harness/surfacing/references/surfacing.md` §4.2 — LAYER 1 mode recognition column patterns (e.g., mode 8 Recency-Equates-Idleness: *"A consumer of surfacing's output ... treats `recency annotation` values as a proxy for relevance — items with old mtime are inferred to be irrelevant without independent content evidence"*) | core | HIGH | Strongest precedent: surfacing's mode 8 recognition column carries a SPECIFIC BEHAVIORAL PATTERN with concrete content presence/absence wording. Direct template for the kind of predicate Task-Define mode 6 needs | `{source: filesystem, value: 2026-05-23T08:12:56Z}` |
| 24 | F | Surfacing §4.2 mode 9 Recency-Bias-Filter recognition: *"surfacing's output ... shows items filtered or down-weighted by mtime — e.g., older items absent from the workspace, omitted from the Traversal Trace, or systematically tagged at a lower level than content-matching would warrant"* | sub | HIGH | Another precedent: recognition column carries multiple concrete failure-pattern examples ("e.g., older items absent ... omitted ... tagged at a lower level"). Pattern: predicate enumerates observable absences/distortions | `{source: filesystem, value: 2026-05-23T08:12:56Z}` |
| 25 | F | Surfacing §4.2 mode 6 Artifact-under-specification recognition: *"The artifact is too thin for cross-session resume; a new LLM session cannot determine what to re-read"* + corrective: *"Required minimum fields enforced at Output-shaping: every Trace entry has item identifiers; every concept-name has provenance; coverage map is complete"* | core | HIGH | Strongest STRUCTURAL precedent: recognition column describes the failure; CORRECTIVE column enumerates the REQUIRED MINIMUM FIELDS. The "required minimum fields" pattern is exactly the operational shape Task-Define mode 6 needs | `{source: filesystem, value: 2026-05-23T08:12:56Z}` |
| 26 | F | Surfacing §2.1 Recency annotation capture refinement: *"The annotation's value shape is `{source: filesystem \| none, value: ISO8601 \| null}`. ... `source: none, value: null` for items without filesystem backing; this is a first-class value, mandatory per item, never omitted"* | core | HIGH | Direct precedent for a STRUCTURED-SHAPE commitment on an output field within a discipline runtime spec. Shows that committing a shape ("{source, value}" pair) is project-acceptable when the shape is operational | `{source: filesystem, value: 2026-05-23T08:12:56Z}` |
| 27 | F | Surfacing §5.4 Traversal Trace schema — per-trace-entry field table with mandatory fields like "Per-item recency annotation: `{source: filesystem \| none, value: ISO8601 \| null}` per item. Mandatory per item; `source: none, value: null` for items without filesystem backing" | sub | HIGH | Another instance of structured-shape commitment via tabular schema. Project pattern: when an output element's shape needs to be operational, the spec commits the shape explicitly | `{source: filesystem, value: 2026-05-23T08:12:56Z}` |
| 28 | F | Sensemaking spec `cognitive_harness/sense-making/references/sensemaking.md` Phase 3 Ambiguity Collapse template: schema with named fields (Ambiguity / Strongest counter-interpretation / Why counter fails / Confidence / Resolution / What is now fixed / etc.) | side | MEDIUM | Adjacent precedent: a different discipline's structured-shape commitment for its own output. Confirms that structured commitments coexist with the lightweight stance when they're operationally necessary | `{source: filesystem, value: 2026-05-16T00:30:38Z}` |
| 29 | C (self-containment) | User's reinforcement (this conversation, immediately prior turn): *"this is a discipline and it shouldnt mention any particular inquiry folder at all"* — stricter reading of 15-39 §11 that even time-stamp anchors referencing an inquiry are violations | core | HIGH | The user's stricter self-containment rule; the predicate refinement must respect it. Even something like "as of 2026-06-04 per 15-39 §2" leaks design-history into the spec — disallowed | `{source: none, value: null}` |
| 30 | C | The Exploration discipline mentioned by NAME in §2.4 (not by path) is acceptable per the surfacing-spec precedent (surfacing mentions sense-making by name in its property-distinguishing table) | side | MEDIUM | Constraint clarification: discipline names are OK; file paths and inquiry IDs are not | `{source: none, value: null}` |
| 31 | L (lightweight constraints) | The per-operation paragraph cap from criterion (iv) — Meta-question's spec description in §2.1 is ONE PARAGRAPH; an MQ2-shape commitment that adds a multi-paragraph sub-section to §2.3 risks violation | core | HIGH | Concrete constraint on placement: if a structured-shape commitment is added, it must fit within Meta-question's existing paragraph OR live in §2.4 (which is a separate signature internal capability section, not an operation paragraph) | `{source: none, value: null}` |
| 32 | L | The §2.4 dispatch substrate section is currently 4 paragraphs (substrate / locus / necessary content / extraction-out-of-scope); adding a structured-shape commitment as a 5th element fits the section's existing structure | sub | HIGH | Identifies a candidate PLACEMENT: §2.4 can grow by one structured commitment without disturbing operation paragraphs | `{source: none, value: null}` |
| 33 | D (design candidates — possibility) | Candidate predicate form A: BINARY CONTENT-PRESENCE — predicate fires when "MQ2's answer does not contain a context-need verdict (yes/no/uncertain) OR — when verdict = yes — does not contain a kind specifier (a one-sentence description of what kind of external context)" | core | HIGH | Most direct read from §2.4 + the user's refinement proposal; binary check on two-part content presence | `{source: none, value: null}` |
| 34 | D | Candidate predicate form B: STRUCTURED-SHAPE — predicate fires when MQ2's answer does not match the structured shape `{external_context_required: yes \| no \| uncertain, kind: string \| null}` (where kind is required when external_context_required = yes, null when no, optional when uncertain) | sub | HIGH | Tighter than A; requires a typed-schema commitment. Risk: may push toward "Task-Define emits a typed dispatch object" which approaches the separate-field violation (§2.4 explicitly forbids this) — needs careful framing | `{source: none, value: null}` |
| 35 | D | Candidate predicate form C: SEMANTIC-CHECK — predicate fires when "a downstream consumer reading only MQ2's answer cannot determine (i) whether external context is needed and (ii) when needed, what kind of external context to look for" | sub | HIGH | Operational but evaluator-judgment-dependent; semantic check rather than syntactic check. Could be combined with A as a fallback | `{source: none, value: null}` |
| 36 | D | Candidate predicate form D: TWO-TIER — TIER 1 is the binary content-presence check (form A); TIER 2 is the semantic check (form C) as a refinement when TIER 1 passes but the answer seems thin. Confidence dimension carried by which tier fires | sub | MEDIUM | Possibly heavyweight; risks criterion (iv) violation if it expands into multi-paragraph procedure | `{source: none, value: null}` |
| 37 | D | Candidate MQ2-shape commitment α: COMPACT — extend §2.4 with one sentence: *"MQ2's answer MUST contain: (a) a context-need verdict — one of {yes, no, uncertain}; (b) when verdict = yes, a one-sentence specifier of what kind of external context is needed."* | core | HIGH | Drop-in addition to §2.4; lightweight; operational; references the existing necessary-info-content commitment | `{source: none, value: null}` |
| 38 | D | Candidate MQ2-shape commitment β: ANSWER-FORMAT-EXAMPLE — extend §2.3 with a worked answer-template example for MQ2 (e.g., *"Example MQ2 answer: `context-need = yes; kind = project's recent architecture decisions and the team's preferred coding conventions for this feature area`"*) | sub | HIGH | Concrete example aids authoring + makes predicate target visible; placement under §2.3 Meta-question canonical set fits the existing template-with-canonical-3 structure | `{source: none, value: null}` |
| 39 | D | Candidate MQ2-shape commitment γ: BIND-SHAPE-TO-PREDICATE — keep the shape commitment INSIDE the predicate's recognition column rather than amending §2.4 or §2.3 separately. Single source of truth in §4.2 mode 6 row | sub | MEDIUM | Possibly cleaner but conflicts with the principle that authoring constraints live where authoring happens (§2.3/§2.4); detection predicate would carry authoring-constraint content downward | `{source: none, value: null}` |
| 40 | D | Candidate placement α: predicate in §4.2 mode 6 row + MQ2-shape commitment as new paragraph in §2.4. RECOMMENDED by §2.4's existing structure | core | HIGH | Cleanest separation: §2.4 commits authoring constraint with shape; §4.2 commits detection predicate that tests for shape presence | `{source: none, value: null}` |
| 41 | D | Candidate placement β: predicate in §4.2 + MQ2-shape commitment within Meta-question operation paragraph at §2.1 | side | MEDIUM | Risks bloating the Meta-question paragraph past one-paragraph limit; criterion (iv) tension | `{source: none, value: null}` |
| 42 | D | Candidate placement γ: predicate in §4.2 + MQ2-shape commitment in §5.2 (per-item bundle contract) | side | LOW | §5.2 is about bundle field-presence; the MQ2 internal shape is finer-grained than bundle-level; doesn't fit there | `{source: none, value: null}` |
| 43 | D | Candidate confidence dimension: BINARY mode 6 fires → FLAG with confidence determined by §4.7's general confidence rubric (HIGH when most-cases-checked produce clear judgment; MED at boundaries; LOW when judgment was difficult) | sub | HIGH | Reuses existing confidence scaffold rather than inventing mode-6-specific rubric | `{source: none, value: null}` |
| 44 | D | Candidate confidence dimension: GRADED — predicate carries its own per-mode-6 confidence (HIGH = no verdict at all; MED = verdict present but vague; LOW = borderline, e.g., verdict = "maybe") | sub | MEDIUM | Per-mode confidence may be a useful refinement but adds spec content; the general confidence rubric (refinement #6 from the critique) is itself a separate gap not in this inquiry's scope | `{source: none, value: null}` |
| 45 | D | Edge case 1: "uncertain" verdict — does this satisfy or violate the predicate? Two sub-options: (a) uncertain is acceptable (treats uncertainty as a valid verdict the runner can act on); (b) uncertain triggers a separate FLAG condition distinct from mode 6 | sub | HIGH | Important edge case; option (a) aligns with the asymmetric-failure principle (uncertain → runner errs toward Exploration) and is more lightweight | `{source: none, value: null}` |
| 46 | D | Edge case 2: kind specifier when verdict = no — should the predicate explicitly require kind to be absent (positive constraint) or just not require kind (no positive check)? | sub | MEDIUM | Light constraint; predicate's wording can leave kind optional when verdict = no without firing mode 6 | `{source: none, value: null}` |
| 47 | D | Edge case 3: per-item application — predicate fires PER ITEM (because MQ2 fires per item). If count > 1 and one item's MQ2 answer is missing dispatch info while others are complete, FLAG fires with conditions list identifying WHICH items triggered | core | HIGH | Important: predicate granularity matches operation granularity (per-item); FLAG carries item-identifier(s) for triggered cases | `{source: none, value: null}` |
| 48 | D | Edge case 4: count = 0 — Itemize emits no items; Meta-question never fires; mode 6 is INAPPLICABLE (no MQ2 answer to inspect). Predicate must explicitly say "applies when MQ2 has fired"; FLAG condition (f) handles count=0 separately | sub | HIGH | Specifies the predicate's application gate; coverage of FLAG (f) by §4.7 ensures count = 0 still surfaces | `{source: none, value: null}` |
| 49 | D | Edge case 5: MQ2 extension question — if the bounded-extensibility rule fires and adds a new MQ that's also context-need-shaped, does that additional answer also need to satisfy the dispatch-info commitment? | side | MEDIUM | Likely no — extensions don't displace MQ2's role as dispatch substrate; the predicate targets MQ2 specifically, not any context-need-shaped extension. Worth a one-line clarification in the predicate | `{source: none, value: null}` |
| 50 | D | Edge case 6: free-text vs structured answer — if the MQ2 answer is delivered as free-text (a paragraph) rather than a structured fields, does the predicate's content-presence check require parsing? | core | HIGH | Important coherence question; predicate should be evaluable on free-text via LLM judgment (consistent with §4.1's "via output observation") — does NOT require structured parsing. Free-text answer with clear verdict + kind passes; ambiguous free-text without clear verdict fires mode 6 | `{source: none, value: null}` |

## State Summary

### Coverage map (per region)

| Region | Coverage | Aggregate verdict | Notes |
|---|---|---|---|
| S (spec content) | confirmed | mostly core / sub | §2.3 / §2.4 / §4.1 / §4.2 mode 6 / §4.7 / Execute step 4 / §5.2 all enumerated; §2.3 bounded-extensibility marked SIDE (not load-bearing for THIS refinement); §4.2 row 2 corrective marked sub (downstream of detection) |
| M (meaning layer) | confirmed | core | 15-39 §5 dispatch substrate reasoning + perception/action split + criteria (iv) + (vi) + §11 self-containment all core constraints |
| P (process layer) | confirmed | core / sub | 07-48 §5 cross-discipline interface + mode-6-origin-history + necessary-info-content commitment all surfaced |
| F (sister-discipline precedents) | confirmed | core / sub | Surfacing mode 6 "required minimum fields" pattern + mode 8/9 recognition column shapes + recency annotation structured-shape precedent + sensemaking ambiguity-collapse schema precedent all surfaced |
| C (self-containment) | confirmed | core / side | User's reinforcement (this conversation) marked core — load-bearing constraint; precedent of mentioning Exploration by name (not path) marked side |
| L (lightweight constraints) | confirmed | core / sub | Per-operation paragraph cap + §2.4's existing multi-paragraph structure as placement opportunity |
| D (possibility candidates) | confirmed at design-shape level | mostly sub / 4 core | 4 predicate-form candidates (A-D) + 3 MQ2-shape-commitment candidates (α-γ) + 3 placement candidates (α-γ) + 2 confidence-dimension candidates + 6 edge-case handlings = 18 candidates surfaced |

### Confirmed-absent regions

- **Theory-of-typed-schemas territory** — confirmed irrelevant; the lightweight stance forbids importing a generic typed-schema spec language into the runtime spec. Free-text commitment with structural cues is the project's pattern.
- **Runner-side extraction-protocol details** — confirmed out-of-scope (15-39 §5 + 07-48 §5 explicitly deferred to per-runner inquiries); the predicate tests perception's completeness, not extraction correctness.
- **Other LAYER 1 modes' detection-rule gaps** — modes 1-5 are also identified in my earlier critique as having detection-rule gaps of varying severity, but this inquiry's scope is mode 6 specifically. If a pattern emerges from mode 6's refinement that suggests the other modes need similar treatment, flag as frontier; do not address in scope.
- **Meaning-layer re-litigation** — confirmed out-of-scope per Layer Commitment in `_branch.md`.

### Concept-names list (provenance from this surfacing)

| Name | Type | Provenance | Gloss |
|---|---|---|---|
| **necessary-information-content commitment** | structural-reference | trace #3 + #21 | The cross-discipline interface commitment that MQ2's answer must contain enough information for dispatch |
| **two-part content presence** | coined-term | trace #6 + #33 + #37 | The (verdict + kind) shape derivable from MQ2's verbatim question template |
| **sufficient-for-runner-extraction** | vocabulary | trace #4 | §2.4's existing wording for what the answer must satisfy |
| **perception's completeness** | coined-term | inquiry framing + #15 | What the predicate tests (perception's completeness ≠ extraction's correctness) |
| **content-presence rule** | coined-term | inquiry framing + #33 | The class of predicates the refinement designs |
| **required minimum fields pattern** | structural-reference | trace #25 | Surfacing's precedent: corrective enumerates required fields |
| **per-item application** | coined-term | trace #47 | The predicate fires per item, matching MQ2's per-item granularity |
| **application gate** | coined-term | trace #48 | The predicate's "applies when X" qualifier — here "applies when MQ2 has fired" |
| **uncertain verdict** | coined-term | trace #45 | Edge case: what an "uncertain" answer to MQ2 maps to |
| **free-text vs structured answer** | coined-term | trace #50 | Edge case: predicate evaluable on free-text via LLM judgment |
| **structured-shape commitment** | coined-term | trace #26 + #27 + #34 + #37 | Project pattern: committing an output field's shape explicitly when operational |

### Frontier flags

- **F1 (Coherence between §2.4 authoring constraint and the new predicate).** The refinement may need to TIGHTEN §2.4's current qualitative wording ("at minimum a context-need verdict; when external context is needed, information about what kind") into the operational shape α (trace #37). If yes, where is the source of truth — §2.4 carries the binding shape, and §4.2 row 6 tests for it? Suggested refined-sub-purpose: "the source-of-truth placement for MQ2-shape commitment + the predicate's reference style."
- **F2 (Whether to commit a structured shape vs leave it free-text).** Predicate form A (binary content-presence on a two-part check, evaluable on free-text via LLM judgment) is the most lightweight; predicate form B (structured-shape `{external_context_required, kind}`) is tighter but risks approaching the "separate field" violation. The judgment call about which axis to commit is downstream sensemaking.
- **F3 (Uncertain-verdict semantics).** Does "uncertain" as MQ2's verdict satisfy the predicate (treats uncertainty as a valid runner-actionable verdict) or trigger a separate FLAG condition distinct from mode 6? Sensemaking will adjudicate.
- **F4 (Mode 6 confidence dimension).** Should mode 6 carry its own per-mode confidence (graded by how badly the predicate fires) or just feed §4.7's general HIGH/MED/LOW rubric? The general rubric itself has a separate gap (refinement #6 from the critique) outside this inquiry's scope, so committing per-mode confidence may be premature.
- **F5 (Extension question coherence — frontier flag).** If the bounded-extensibility rule fires and adds context-need-shaped MQ extensions, do those answers also need to satisfy the dispatch-info commitment? Out of scope for this inquiry's primary deliverable but worth a one-line clarification.
- **F6 (Pattern-propagation to other modes — frontier flag).** Modes 1-5 also have qualitative recognition columns. If mode 6's refinement establishes a "required-minimum-fields" pattern, that pattern may apply to other modes. Out of scope for this inquiry; surface as future work.

### Workspace-populated status

`{populated: true, populated-at: 2026-06-04_14-14, extent: Task-Define runtime spec relevant sections fully consumed in prior conversation context; 15-39 §5+§9+§11 + 07-48 §5+§8+§9 fully consumed; surfacing reference §2.1+§4.2+§5.4 fully consumed; sensemaking reference Phase 3 schema consumed; 18 possibility-mode candidates surfaced as fresh}`

### Recency distribution (per region)

| Region | Newest | Oldest | no-mtime-count | total-items |
|---|---|---|---|---|
| S | 2026-06-04T08:46:13Z | 2026-06-04T08:46:13Z | 0 | 13 |
| M | 2026-06-04T05:38:03Z | 2026-06-04T05:38:03Z | 0 | 5 |
| P | 2026-06-04T08:38:57Z | 2026-06-04T08:38:57Z | 0 | 4 |
| F | 2026-05-23T08:12:56Z | 2026-05-16T00:30:38Z | 0 | 6 |
| C | n/a | n/a | 2 | 2 |
| L | n/a | n/a | 2 | 2 |
| D | n/a | n/a | 18 | 18 |
| **TOTAL** | **2026-06-04T08:46:13Z** | **2026-05-16T00:30:38Z** | **22** | **50** |

Recency annotations are descriptive only — they do NOT adjudicate the per-region coverage map or per-item relevance tags. The newest items (spec + 07-48) reflect this inquiry's direct inputs; the older sister-discipline precedents (F region, dating to May) remain load-bearing for their architectural patterns.

### Re-invocation parameters (suggested)

If re-invoked: F1 (coherence + source-of-truth placement) or F2 (free-text vs structured commitment axis) would be the most useful refined-sub-purposes.

## Telemetry

- **Mode:** `artifact` primary + `possibility` for candidates (Region D).
- **Entry point:** `signal-first`.
- **Cycles run:** 1 (single Traversal pass; convergence reached at the relevance-criterion-bounded level).
- **Items enumerated:** 50 (13 S / 5 M / 4 P / 6 F / 2 C / 2 L / 18 D).
- **Items tagged at each relevance level:**
  - core: 22
  - sub: 22
  - side: 6
  - umbrella: 0 (no items required uncertain-level inclusion)
- **Sub-phase fired:** NO.
- **Convergence criteria status:**
  - Territory exhaustively traversed at current resolution: YES (all 7 named regions enumerated).
  - No item filtered at uncertain-relevance level: YES.
  - Items rejected only on high-confidence rejection: YES (4 confirmed-absent regions intrinsic-grounded).
- **Workspace-overload trigger:** NOT FIRED.
- **Failure modes checked (LAYER 1):**
  - Missed-relevance: NONE OBSERVED (frontier flags F1-F6 signal what was raised but not yet adjudicated).
  - Surfaced-irrelevance: NOT OBSERVED at surfacing-time.
  - Over-coverage: NOT OBSERVED (signal-to-noise: 44/50 high-signal entries).
  - Territory-mis-binding: NOT OBSERVED.
  - Workspace overload: NOT TRIGGERED.
  - Artifact under-specification: NOT OBSERVED (every entry has identifier + relevance + confidence + recency annotation).
  - Workspace-artifact desync: NOT OBSERVED.
  - Recency-Equates-Idleness: NOT OBSERVED (older F-region items tagged core/sub on architectural-pattern merit, not on mtime).
  - Recency-Bias-Filter: NOT OBSERVED.
- **Failure modes checked (LAYER 2):**
  - Interpretive-overstep: NOT OBSERVED (artifact carries identifiers + tags; no cross-item relational claims emitted as content — relational seeds for downstream sensemaking).
  - Purpose-loss: NOT OBSERVED (every relevance tag assessed against purpose "design the mode 6 detection predicate").
  - Self-coupling-to-downstream: NOT OBSERVED.
- **items_with_mtime:** 28; **items_without_mtime:** 22 (Region C + L + D — possibility-mode and constraint-substrate items have no filesystem backing).

## Self-Assessment Verdict

**PROCEED** — 50 items surfaced; 0 LAYER 1 + 0 LAYER 2 failure flags; 6 frontier flags handed to downstream Sensemaking.

Frontier-priority for Sensemaking: **F1** (source-of-truth placement for MQ2-shape commitment + predicate's reference style) and **F2** (free-text vs structured commitment axis) — these are the two judgment-calls that determine the refinement's exact shape; F3-F6 are smaller edge-case adjudications downstream of F1+F2.
