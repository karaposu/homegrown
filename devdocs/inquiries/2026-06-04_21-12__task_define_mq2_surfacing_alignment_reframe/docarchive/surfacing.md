# Surfacing: Task-Define MQ2 — Reframe Toward Surfacing-Directive Alignment

## User Input

`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-06-04_21-12__task_define_mq2_surfacing_alignment_reframe/_branch.md`

Raw source (preserved verbatim in branch's Source Input):

> A n implicit need for external context — does the LLM need to know the project to do this right, or is the statement self-contained?
>
> this is a bit weird, it should be like
>
> does LLM need to surface specific information from the project base? something like "this task already worked on before, it has these artifacts and the current task is fresh start of it, " this is important because AI shouldnt blindly load everything to context, it should be selective and understand the relevance in multiple layers. Thsi is why task-define's job  is to see correct meta questions which can turn into full alignment in surfacing's side...

---

## Mode + Entry Point + Reception

**Mode:** `possibility` primary + `artifact` sub. Most items are candidate-generated (candidate substances for MQ2's meaning; candidate answer-shapes; candidate compatibility relations). A minority are artifact-mode (existing mode 6 commitment, existing spec text at §2.3 / §2.4, /surfacing spec text, user's verbatim phrasing).

**Entry point:** `signal-first`. Purpose is specific: settle MQ2's meaning in light of user's reframe proposal.

**Purpose** (the bias source for relevance-attribution): items bear on the inquiry's purpose if they help adjudicate (a) what cognitive question MQ2 IS, (b) what its answer-shape should be, (c) the mechanism of downstream /surfacing alignment, (d) substrate-fidelity, (e) compatibility with mode 6's prior §2.4 commitment, (f) MQ2-specific-vs-pattern scope, or (g) asymmetric-failure trade-offs for MQ2 specifically.

**Territory:** abstract-bounded; edges given by branch.md's nine observation targets. Sub-regions:

- **M** — Meaning-layer of MQ2 (the core territory: what MQ2 IS, candidate substances)
- **C** — Compatibility with prior commitments (mode 6 §2.4; MQ2 verification finding)
- **D** — Downstream coupling to /surfacing (alignment mechanism)
- **S** — Substrate-fidelity (does the reframe stay within task-statement + LLM internal cognition?)
- **A** — Asymmetric-failure principle applicability to MQ2 specifically
- **P** — Pattern (does the reframe apply to MQ1 + MQ3?)
- **R** — Runtime examples (concrete tasks where MQ2 fires)
- **E** — Edge cases (continuation tasks, fresh-start-of-prior, hybrids, uncertain)
- **U** — User-domain (load-bearing user terms surfaced verbatim)
- **G** — Gaps (what the user did not name but is load-bearing for the inquiry)

**Boundary-discovery sub-phase:** **NOT FIRED.** Territory is abstract-bounded; the nine observation targets in `_branch.md` give the edges.

---

## Traversal Trace

Chronological per-region. Per-entry: region · item identifier · relevance tag (core / sub / side / umbrella) · confidence (HIGH / MED / LOW) · brief note. No item content (per §5.3 thin-criterion); identifiers + tags only. Recency annotation = `{source: none, value: null}` for all possibility-mode items; spec/finding-file items are filesystem-backed but mtimes are not load-bearing here (current-session work).

### Region M — Meaning-layer of MQ2 (the core territory)

| # | Item | Tag | Conf | Note |
|---|---|---|---|---|
| 1 | M1 — Current canonical wording at §2.3: "Is this task self-contained, or does it require external context to make sense and be done right? If external, what kind?" | core | HIGH | The baseline being challenged. |
| 2 | M2 — User's proposed reframing: "Does LLM need to surface specific information from the project base?" | core | HIGH | The substantive substitute proposed. |
| 3 | M3 — User's example answer-shape: "this task already worked on before, it has these artifacts and the current task is fresh start of it" | core | HIGH | Concrete answer-shape exemplar; load-bearing. |
| 4 | M4 — Mode 6 §2.4 commitment shape: verdict ∈ {yes, no, uncertain} + (when yes) kind specifier (one-sentence description of what kind of external context is needed) | core | HIGH | The most recent prior commitment that must be reconciled. |
| 5 | M5 — Candidate substance: hybrid — verdict + (when yes) richer kind specifier expanded with what-to-surface guidance + relational stance | core | HIGH | One synthesis candidate. |
| 6 | M6 — Candidate substance: pure surfacing-directive — MQ2's answer IS the surfacing-frame; absence-of-frame == "no surfacing needed" | core | MED | Alternative; eliminates separate verdict. |
| 7 | M7 — Candidate substance: layered — verdict (yes/no/uncertain) + (when yes) layered kinds (e.g., layer-1 = direct artifacts, layer-2 = adjacent context, layer-3 = ecosystem) | sub | MED | Picks up user's "multi-layer" term. |
| 8 | M8 — The cognitive operation question: is MQ2 asking the LLM to judge "sufficiency-of-statement" or "perceive what kinds of external info are load-bearing"? | core | HIGH | Verb-of-perception is the substance question. |
| 9 | M9 — Distinction: KIND specifier (what type of info) vs RELATIONAL STANCE (fresh-start / continuation / reference-to / etc.) | core | HIGH | Two orthogonal axes the answer might carry. |
| 10 | M10 — Distinction: PERCEIVING surfacing-need (in-substrate; from task statement + LLM general knowledge) vs PERFORMING surfacing (out-of-substrate; requires project access) | core | HIGH | The substrate-fidelity check pivot. |
| 11 | M11 — Current wording's structure: question targets ("self-contained" vs "external") + sub-question on kind. Answer-form is verdict + optional kind. | sub | HIGH | Baseline answer-form. |
| 12 | M12 — User's wording's structure: question targets ("surface specific information from project base"). Answer-form is richer than verdict — closer to a directive or frame. | sub | HIGH | Reframe's answer-form. |
| 13 | M13 — Possible answer-shape: structured triple `(verdict, kinds-of-info, relational-stance)` where kinds and stance are populated when verdict is yes/uncertain | sub | MED | Operational candidate. |

### Region C — Compatibility with prior commitments

| # | Item | Tag | Conf | Note |
|---|---|---|---|---|
| 14 | C1 — Mode 6 inquiry (2026-06-04_14-14) §2.4 amendment: MQ2 answer carries verdict ∈ {yes, no, uncertain}; when yes, kind specifier | core | HIGH | Hard constraint to reconcile. |
| 15 | C2 — Mode 6 inquiry's "content-not-syntax" decision: shape is what answer carries, not how it's serialized | sub | HIGH | Compatible with richer answer if content is the discriminator. |
| 16 | C3 — Mode 6 inquiry's "uncertain verdict is runner-actionable" commitment: runner errs toward /surfacing on uncertain per asymmetric-failure | sub | HIGH | Already establishes runner-mediation. |
| 17 | C4 — MQ2 verification inquiry (2026-06-04_17-02) verdict: mode 6's amendment fully covers refinement #4 on substance; optional U1 supplement (worked examples) was offered as user-decision | sub | HIGH | The verification said COMPLETE on substance; this inquiry might surface that "substance" was framed narrowly. |
| 18 | C5 — Compatibility candidate: REFINING — the reframe sharpens the kind specifier into a richer form (kinds + relational stance) while preserving the verdict | core | HIGH | Least-disruption path. |
| 19 | C6 — Compatibility candidate: EXTENDING — the reframe adds a new mandatory sub-field (relational stance) alongside verdict + kind | core | MED | Middle-disruption path. |
| 20 | C7 — Compatibility candidate: SUPERSEDING — the reframe replaces verdict+kind with surfacing-directive entirely; the {yes/no/uncertain} verdict becomes implicit in presence/absence of directive | sub | MED | High-disruption path. |
| 21 | C8 — Compatibility candidate: ORTHOGONAL — the reframe is interpreted as a stylistic re-wording of the existing question; substance unchanged from mode 6's shape | umbrella | LOW | Conservative null-hypothesis option. |
| 22 | C9 — The bounded-extensibility rule (b) at §2.3 requires extensions to "constrain Rephrase" — extends to MQ2's reframe by parallel logic? MQ2's richer answer might constrain Rephrase more (e.g., a "fresh-start-of-X" stance constrains rephrasings to acknowledge X) | sub | MED | Possible side-effect of reframe. |
| 23 | C10 — The dispatch substrate at §2.4 (runner extracts dispatch from MQ2) holds regardless of shape — substrate is the answer, just with richer content | sub | HIGH | Architectural invariant. |

### Region D — Downstream coupling to /surfacing

| # | Item | Tag | Conf | Note |
|---|---|---|---|---|
| 24 | D1 — /Surfacing's input contract per §3.3 Reception: required `purpose` (bias source) + required `territory` specification; optional prior-artifact / prior-workspace / refined-sub-purpose | core | HIGH | Defines what "alignment" would mean concretely. |
| 25 | D2 — /Surfacing's purpose is exogenous (§1.1, §1.3 NOT-list item 8) — received as input, not generated. So MQ2's answer (or part) could BE the seed for /surfacing's purpose. | core | HIGH | Direct alignment vector. |
| 26 | D3 — /Surfacing's territory: explicit-bounded / abstract-bounded / unbounded / discover (§3.2 gating predicate). MQ2's answer could pre-specify territory ("the project's auth-related code"; "prior X artifacts at /docs/Y") | sub | HIGH | Alignment vector for territory. |
| 27 | D4 — "Full alignment" mechanism candidate (A): MQ2's answer maps DIRECTLY to /surfacing's purpose + territory (the runner does a thin pass-through, no formulation needed) | core | MED | Most coupled. |
| 28 | D5 — "Full alignment" mechanism candidate (B): MQ2's answer carries WHAT and WHERE; runner converts to /surfacing's territory + purpose + bias inputs | core | HIGH | Mid-coupled; preserves perception/action split. |
| 29 | D6 — "Full alignment" mechanism candidate (C): MQ2's answer carries content sufficient for runner to choose /surfacing OR another discipline (loose alignment) | sub | LOW | Least coupled; weakens the reframe. |
| 30 | D7 — Perception/action split (committed in mode 6 inquiry §2.4 finding): Task-Define perceives; runner acts. Reframe must preserve. | core | HIGH | Architectural invariant — any reframe must not pre-empt action. |
| 31 | D8 — Boundary concern: if MQ2 over-specifies the surfacing-frame, Task-Define is doing /surfacing's job (per-item relevance). This violates per-discipline boundary (Task-Define is per-item-bundle granularity; /surfacing is per-territory granularity). | core | HIGH | Hard boundary — reframe must respect. |
| 32 | D9 — Resolution candidate: MQ2 perceives KINDS of info needed + RELATIONAL STANCE; /surfacing perceives actual relevant items within those kinds | core | HIGH | Reconciles D2-D5-D7-D8. |

### Region S — Substrate-fidelity

| # | Item | Tag | Conf | Note |
|---|---|---|---|---|
| 33 | S1 — Task-Define's substrate per §1.5: task statement + LLM internal cognition only. No project_goal, recent_context, external_anchors. | core | HIGH | Hard constraint. |
| 34 | S2 — NOT-list category 2 (§1.4): external-context fetching excluded — reaching for project state, loading recent-context files, querying ecosystem state | core | HIGH | Excludes any reframe that REQUIRES project-state to answer. |
| 35 | S3 — NOT-list category 5 (§1.4): ecosystem-knowledge use excluded — deprecated-spec awareness, currency-of-references, project-history awareness | sub | HIGH | Reinforces S2. |
| 36 | S4 — Critical distinction: PERCEIVING that surfacing-likely-needed and what KIND (from task-statement + LLM general knowledge about task-types) vs ACTUALLY KNOWING the project's state (requires reading) | core | HIGH | Pivot for substrate-compliance verdict. |
| 37 | S5 — Substrate-compliant version of user's example: "this kind of task (e.g., refactoring auth) typically has prior-state artifacts (existing flows, security audit notes) that bear on it; surface these before doing" | sub | HIGH | Hypothetical structure — generic. |
| 38 | S6 — Substrate-violating version: "task X was already done in commit abc123, see /src/auth/v2" — requires reading project | sub | HIGH | Anti-pattern. |
| 39 | S7 — The substrate guard for MQ2: answer must be expressible from (task-statement + LLM general knowledge) alone; specific project-references would violate | core | HIGH | Compliance test. |
| 40 | S8 — Refined version of user's example, substrate-compliant: "this kind of task is typically a continuation of prior work — if so, the prior artifacts (kinds: [past memos / prior versions / incident records]) bear on this; alternatively, this may be a fresh start, in which case only the task-statement is load-bearing" | sub | HIGH | The user's example reworked to respect substrate (hypothetical-relational-stance rather than asserted-project-state). |
| 41 | S9 — Distinction: MQ2 can perceive RELATIONAL STANCE (hypothetical: "this is the kind of task that's typically a continuation") without asserting fact ("this specific task IS a continuation of commit abc123") | core | HIGH | Substrate-fidelity vehicle. |

### Region A — Asymmetric-failure principle for MQ2

| # | Item | Tag | Conf | Note |
|---|---|---|---|---|
| 42 | A1 — §4.4 commits: lean to fire at MQ extensions; lean to keep-together at Itemize | sub | HIGH | Existing principle. |
| 43 | A2 — MQ2-specific asymmetric question: under-specified MQ2 (vague verdict) vs over-specified MQ2 (premature surfacing-frame pre-empting /surfacing) | core | HIGH | The trade-off this inquiry must adjudicate. |
| 44 | A3 — Cost of under-specified MQ2: runner can't formulate /surfacing input; either skips /surfacing (false-negative on context-need) or invokes /surfacing with weak purpose (over-loads) | core | HIGH | First failure mode. |
| 45 | A4 — Cost of over-specified MQ2: pre-empts /surfacing's selectivity; runner over-commits to MQ2-named targets; loses /surfacing's purpose-conditioning | core | HIGH | Second failure mode. |
| 46 | A5 — Recoverability analysis: under-specified is recoverable (runner can re-invoke MQ2 with refinement, or invoke /surfacing with broader purpose); over-specified is structurally-irrecoverable (the wrong frame propagates) | core | HIGH | Asymmetry tilts toward LESS over-specification. |
| 47 | A6 — Operational form (candidate): MQ2 should err toward MORE detail in the kind specifier and RELATIONAL STANCE, but STOP at PRE-SURFACING (name kinds and stance, not surfacing items) | core | HIGH | Synthesis with substrate principle. |
| 48 | A7 — Compatibility with §4.4's existing "lean to fire" stance for MQ extensions: lean to richer-specification is consistent | sub | MED | No conflict with existing principle. |

### Region P — Pattern (does the reframe apply to MQ1 + MQ3?)

| # | Item | Tag | Conf | Note |
|---|---|---|---|---|
| 49 | P1 — MQ1 (scope) at §2.3: "What scope does this task refer to?" — downstream coupling to MultiScope (within Task-Define) | sub | HIGH | Intra-discipline coupling, not cross-discipline. |
| 50 | P2 — MQ3 (intent) at §2.3: "What is the underlying intent (vs the surface ask)?" — downstream coupling less obvious; might inform /innovate or /surfacing's purpose | sub | MED | Coupling unclear. |
| 51 | P3 — The pattern question: should every MQ be defined by its downstream-alignment role? | sub | MED | Pattern-vs-specific adjudication. |
| 52 | P4 — Counter to general pattern: MQs are currently structurally-distinct questions about task itself (scope, context-need, intent). Defining all by downstream coupling might collapse this distinction. | core | HIGH | Argument against propagation. |
| 53 | P5 — Resolution candidate (specific): MQ2 is uniquely the dispatch-substrate carrier (signals to /surfacing branch); MQ1 + MQ3 inform within-Task-Define operations (MultiScope, Rephrase). So MQ2 is structurally different — reframe is MQ2-specific. | core | HIGH | Likely conclusion; scopes the inquiry. |
| 54 | P6 — Implication: this inquiry can scope strictly to MQ2; MQ1/MQ3 reframe is FUTURE WORK if the user wants to revisit later | core | HIGH | Operational decision for the inquiry. |
| 55 | P7 — Counter-counter: MQ3 (intent) might inform /innovate or other downstream disciplines if Task-Define ever feeds them. Worth noting as frontier flag. | side | LOW | Frontier flag for later. |

### Region R — Runtime examples (concrete tasks where MQ2 fires)

| # | Item | Tag | Conf | Note |
|---|---|---|---|---|
| 56 | R1 — Task: "Write a memo about the Q3 outage." MQ2 reframe-style answer: verdict=yes; kinds=(incident postmortem artifacts, prior memos for tonal comparison); relational stance=fresh-start-with-reference | sub | HIGH | Demonstrates relational-stance term. |
| 57 | R2 — Task: "Refactor the authentication module." MQ2 reframe-style: verdict=yes; kinds=(current auth implementation, prior refactor decisions, security constraints, downstream dependents); stance=continuation | sub | HIGH | High-context-need example. |
| 58 | R3 — Task: "Quick estimate for 2-week timeline of feature X." MQ2 reframe-style: verdict=yes; kinds=(X's spec, team velocity, blockers); stance=continuation | side | MED | Medium-context-need example. |
| 59 | R4 — Task: "Explain pure functions in JavaScript." MQ2 reframe-style: verdict=no; self-contained | sub | HIGH | No-context-need case; reframe still produces clean answer. |
| 60 | R5 — Task: "Help me think through whether to add a metric." MQ2 reframe-style: verdict=uncertain; kinds-likely=(metric purpose context, existing instrumentation, downstream consumers); stance=exploratory | side | MED | Uncertain case. |
| 61 | R6 — Pattern across R1-R5: answer carries (verdict, kinds-of-info, relational-stance). Compatible with mode 6's shape — kind expanded to kinds-plural and stance is new. | core | HIGH | Synthesis observation. |

### Region E — Edge cases

| # | Item | Tag | Conf | Note |
|---|---|---|---|---|
| 62 | E1 — Simple self-contained task → verdict=no; no kind/stance needed (mode 6's current minimal shape) | sub | HIGH | Minimal-answer case. |
| 63 | E2 — Multi-kind context-need task → verdict=yes; kinds-list with multiple entries (current one-sentence kind specifier might be too narrow) | sub | MED | Possible spec implication. |
| 64 | E3 — Uncertain → verdict=uncertain; runner errs toward /surfacing per asymmetric-failure (already committed) | sub | HIGH | Inherited from mode 6. |
| 65 | E4 — Continuation task (user's example) → verdict=yes; stance=continuation; runner needs to know prior-state artifacts exist | core | HIGH | Reframe's principal new affordance. |
| 66 | E5 — Fresh-start-of-prior task (user's example) → verdict=yes; stance=fresh-start-of-X; runner might surface X's artifacts as REFERENCE not DIRECT-OPERATE | core | HIGH | Reframe's nuanced affordance. |
| 67 | E6 — Hybrid task (some parts continuation, some fresh) → per-aspect granularity needed? Or single dominant stance? | side | LOW | Frontier — needs adjudication. |
| 68 | E7 — Task whose context-need CANNOT be determined from statement alone (e.g., "do the thing we discussed") → verdict=uncertain; kind specifier might be "depends on referent — surface recent conversation" | side | MED | Frontier flag. |
| 69 | E8 — Task that's a meta-task about prior task (e.g., "review the refactor we did") → verdict=yes; stance=reference-to-prior; specific stance subtype | side | MED | Possible new stance subtype. |

### Region U — User-domain (load-bearing user terms surfaced verbatim)

| # | Item | Tag | Conf | Note |
|---|---|---|---|---|
| 70 | U1 — "Surface specific information from the project base" — surface (verb from /surfacing); project base (territory term) | core | HIGH | Cross-discipline vocabulary borrowed deliberately. |
| 71 | U2 — "Multi-layer relevance" — user explicitly invokes layering; suggests not just yes/no but graduated kinds at different layers | core | HIGH | Possible mapping to /surfacing's 4 relevance levels (core/sub/side/umbrella). |
| 72 | U3 — "Selective and understand the relevance" — emphasizes pre-discrimination (before /surfacing); MQ2 perceives pre-shape of relevance | core | HIGH | MQ2 as relevance-pre-shaper. |
| 73 | U4 — "Full alignment in surfacing's side" — alignment as goal; MQ2's answer should make /surfacing's invocation downstream straightforward | core | HIGH | Goal-criterion. |
| 74 | U5 — "Shouldn't blindly load everything to context" — negative case MQ2 prevents | core | HIGH | Operational anti-pattern. |
| 75 | U6 — "This task already worked on before" — relational stance: continuation | core | HIGH | Concrete stance subtype. |
| 76 | U7 — "Current task is fresh start of it" — relational stance: fresh-start-of-prior (nuanced; not pure continuation, not pure fresh) | core | HIGH | Concrete stance subtype. |
| 77 | U8 — "Multiple layers" — layers of relevance (overlap with /surfacing's 4 levels?) | sub | MED | Possible direct mapping. |
| 78 | U9 — "Project base" — informal term; maps to /surfacing's `territory` concept (the bounded scope) | sub | HIGH | Terminology bridge. |

### Region G — Gaps (what the user did not name but is load-bearing)

| # | Item | Tag | Conf | Note |
|---|---|---|---|---|
| 79 | G1 — The runner's role in MQ2 → /surfacing translation (user implicitly assumes; not stated). Perception/action split must hold. | core | HIGH | Architectural assumption to make explicit. |
| 80 | G2 — Relationship between MQ2's kinds-specification and /surfacing's purpose vs territory inputs (kind ≈ purpose? ≈ territory? ≈ bias?) | core | HIGH | Needs adjudication during sensemaking. |
| 81 | G3 — Interaction with MQ3 (intent) — sometimes intent informs context-need (intent might require historical context that surface-asking-task doesn't) | sub | MED | Cross-MQ interaction; possible new constraint. |
| 82 | G4 — Interaction with MQ1 (scope) — scope might inform what kinds of context (cross-cutting scope → wider context-need) | sub | MED | Cross-MQ interaction. |
| 83 | G5 — Granularity of "kind" specification — verb-noun pair? topic name? relational-stance-only? all of above? | core | HIGH | Answer-shape granularity question. |
| 84 | G6 — How MQ2 handles 0-context-need tasks (verdict=no): is kind specifier omitted entirely? Mode 6 says yes (kind only when verdict=yes). | sub | HIGH | Inherited from mode 6. |
| 85 | G7 — Relationship between reframed MQ2 and /surfacing's PURPOSE concept (exogenous; received as input). MQ2's answer might BE the seed for /surfacing's purpose. | core | HIGH | Possibly the cleanest formal alignment. |
| 86 | G8 — What happens if MQ2's reframe materially refines mode 6's commitment? Does this inquiry CHANGE mode 6's amendment, or just SUPPLEMENT it? Spec-implication question for the user. | core | HIGH | Frontier flag for user-decision. |
| 87 | G9 — Does this inquiry need to author the spec amendment for §2.3 / §2.4, or is meaning-only settlement the deliverable? (Layer Commitment says: meaning is in-scope; structural is out-of-scope.) | core | HIGH | Already committed: meaning-only. Frontier flag for follow-up structural inquiry. |
| 88 | G10 — Does the explanatory doc `devdocs/what_is_task_define.md` need MQ2 paraphrase correction once meaning is settled? Yes — but this is downstream of meaning settlement. | core | HIGH | Action item for the deliverable. |

---

## State Summary

### Territory specification echo
Abstract-bounded territory; edges given by `_branch.md`'s nine observation targets. Sub-regions: M / C / D / S / A / P / R / E / U / G.

### Purpose specification echo
Settle MQ2's meaning given user's reframe proposal — specifically: what cognitive question MQ2 IS, answer-shape, downstream /surfacing alignment mechanism, substrate-fidelity, mode 6 compatibility, MQ2-specific-vs-pattern scope, asymmetric-failure trade-offs.

### Coverage map

| Region | Coverage | Aggregate verdict |
|---|---|---|
| M — Meaning-layer of MQ2 | confirmed-thorough | core-rich (8 core, 5 sub); the substance question (M8) and the kind/stance distinction (M9) emerge as load-bearing |
| C — Compatibility with prior commitments | confirmed-thorough | core-rich (4 core, 6 sub); mode 6 commitment (C1) + compatibility candidates (C5/C6/C7) are the adjudication axis |
| D — Downstream coupling to /surfacing | confirmed-thorough | core-rich (5 core, 1 sub, 1 side); alignment candidate D5 + D9 emerge as load-bearing synthesis |
| S — Substrate-fidelity | confirmed-thorough | core-rich (5 core, 4 sub); S4 (perceive vs perform) + S9 (relational stance as hypothetical, not asserted) are the substrate-compliance vehicle |
| A — Asymmetric-failure for MQ2 | confirmed | core-rich (4 core, 3 sub); A6 (lean richer-specification but stop at pre-surfacing) is the synthesis |
| P — Pattern (MQ1/MQ3?) | confirmed | core-rich (3 core, 3 sub, 1 side); P5 (MQ2 is structurally different — reframe is MQ2-specific) is the likely conclusion |
| R — Runtime examples | confirmed | sub/side-tagged with one core synthesis (R6 = compatible-with-mode-6 + kinds-plural + new stance) |
| E — Edge cases | confirmed | core-tagged for principal new affordances (E4 continuation, E5 fresh-start-of-prior); frontier flags for E6 hybrid + E7 referent-uncertain + E8 meta-task |
| U — User-domain | confirmed-thorough | core-rich (7 core); user terms ("surface" / "multi-layer" / "selective" / "full alignment" / "blindly load" / continuation / fresh-start-of) are load-bearing and must survive into Sensemaking |
| G — Gaps | confirmed | core-rich (6 core, 2 sub); G2 (kind-to-/surfacing-input mapping) + G7 (MQ2 as seed for /surfacing's purpose) + G8 (spec-implication: refine vs supplement mode 6?) are the principal Sensemaking inputs |

### Confirmed-absent regions
None. All 10 regions returned at least 5 items at sub or higher relevance.

### Concept-names list (vocabulary surfaced + traversal-discovered terms)

| Name | Type | Provenance | Gloss |
|---|---|---|---|
| MQ2 reframe | coined-term | branch.md | the inquiry's question subject |
| surfacing-directive | coined-term | M6 | candidate answer-shape: MQ2's answer IS the surfacing-frame |
| kind specifier | vocabulary | C1 (from mode 6) | mode 6's term for the description of external-context kind |
| relational stance | coined-term | M9 | candidate new answer sub-field: fresh-start / continuation / reference-to / etc. |
| perception/action split | structural-reference | D7 (from mode 6 finding) | architectural invariant: Task-Define perceives, runner acts |
| substrate-fidelity | vocabulary | S1 (from task-define spec §1.5) | constraint that Task-Define uses only task-statement + LLM internal cognition |
| dispatch substrate | vocabulary | C10 (from task-define spec §2.4) | per-item MQ answers carrying runner-extractable info |
| multi-layer relevance | user-term | U2 | user's term for graduated kinds at different layers |
| full alignment | user-term | U4 | user's term for MQ2's downstream coupling goal |
| project base | user-term | U1 / U9 | user's informal term; maps to /surfacing's `territory` concept |
| continuation | coined-term (relational-stance subtype) | U6 / E4 | stance for tasks continuing prior work |
| fresh-start-of-prior | coined-term (relational-stance subtype) | U7 / E5 | stance for tasks fresh-starting from prior X |
| pre-surfacing | coined-term | A6 | the cut-off point: name kinds and stance, not surfacing items |
| in-substrate vs out-of-substrate | coined-term | S4 / S9 | distinction: perceiving need + kind (in) vs knowing project state (out) |
| MQ2-specific-vs-pattern | branch-vocabulary | P3 | the inquiry's scope question about MQ1/MQ3 |

### Frontier flags (self-signaled for downstream Sensemaking)

| # | Flag | Where it sits | Sensemaking guidance |
|---|---|---|---|
| **F1** | **Adjudicate the compatibility relation with mode 6.** REFINING / EXTENDING / SUPERSEDING / ORTHOGONAL — pick one based on the substance commitment. C5-C8 are the candidates. | Region C | This is the primary Sensemaking call. Hinges on M-region substance choice. |
| **F2** | **Adjudicate the substance of MQ2.** Among M4 (mode 6 baseline) / M5 (hybrid) / M6 (pure directive) / M7 (layered) / M13 (structured triple verdict+kinds+stance) — settle on one. | Region M | Primary substance call; everything downstream follows. |
| **F3** | **Adjudicate the downstream-alignment mechanism.** Among D4 (direct map) / D5 (runner-formulated) / D6 (loose) / D9 (kinds+stance perception, /surfacing handles items) — settle on one. | Region D | Hinges on M-region substance choice and the perception/action split (D7). |
| **F4** | **Confirm substrate-compliance for the chosen substance.** Apply S4/S7/S9 test: can the chosen answer-shape be produced from task-statement + LLM internal cognition alone, without project-state access? | Region S | Must pass for any chosen substance. |
| **F5** | **Scope the pattern question.** MQ2-specific (P5 / P6) or pattern-applicable (P3 with later inquiries for MQ1/MQ3)? Default per branch.md's specific-vs-pattern check = MQ2-specific. | Region P | Operational decision; default = MQ2-specific. |
| **F6** | **Adjudicate the asymmetric-failure operational form.** A6 (lean richer-specification, stop at pre-surfacing) is the synthesis candidate; sensemaking should test against A3 (under-specified cost) and A4 (over-specified cost). | Region A | Operational lean. |
| **F7** | **Surface the spec-implication for the user.** G8 — does this inquiry's outcome CHANGE mode 6's §2.4 commitment, REFINE it, or just SUPPLEMENT? User-decision flag. | Region G | Frontier for finding's Next Actions section. |
| **F8** | **Surface the relational-stance taxonomy.** What stance values are load-bearing? U6 (continuation) + U7 (fresh-start-of-prior) + E5/E8 (reference-to) + E7 (referent-uncertain). Is this a closed set, an open set, or bounded-extensible? | Regions U/E | Sub-decision once substance is settled. |
| **F9** | **Surface the kind/territory/purpose mapping question.** G2 / G7 — does MQ2's "kind" map to /surfacing's `purpose` field, `territory` field, or both? | Region G/D | Sub-decision once alignment mechanism is settled. |

### Recency distribution

Per §5.5 schema. All 88 items are possibility-mode candidates (substances, candidate compatibility relations, candidate answer-shapes) or artifact-references whose mtimes are not load-bearing for this meaning-layer inquiry. All items therefore have `recency annotation: {source: none, value: null}`. Per-region aggregation is uniform:

| Region | newest | oldest | no-mtime-count | total-items |
|---|---|---|---|---|
| M | null | null | 13 | 13 |
| C | null | null | 10 | 10 |
| D | null | null | 9 | 9 |
| S | null | null | 9 | 9 |
| A | null | null | 7 | 7 |
| P | null | null | 7 | 7 |
| R | null | null | 6 | 6 |
| E | null | null | 8 | 8 |
| U | null | null | 9 | 9 |
| G | null | null | 10 | 10 |

The vacuous-uniform distribution is the spec-compliant treatment for an all-possibility-mode inquiry; the field is populated for schema completeness and to confirm no recency-based filtering or weighting occurred (which would have triggered LAYER 1 modes 8/9).

### Workspace-populated status
`{populated: true, populated-at: 2026-06-04_21-12, extent: 88 items across 10 regions (M/C/D/S/A/P/R/E/U/G); all 9 frontier flags surfaced for Sensemaking}`

---

## Telemetry

- **Mode:** possibility (primary) + artifact (sub: existing spec text, mode 6 finding, /surfacing spec)
- **Entry point:** signal-first
- **Cycles run:** 10 (one per region; default operational ordering applied per cycle)
- **Items enumerated/generated:** 88 total
  - **core:** 41
  - **sub:** 36
  - **side:** 7
  - **umbrella:** 1 (C8 — Orthogonal-no-change candidate; included per asymmetric-failure principle even though confidence is LOW)
- **Sub-phase fired:** no (territory was abstract-bounded; edges given by branch.md)
- **Boundary-discovery output:** N/A
- **Convergence criteria status:** MET — territory exhaustively traversed at current resolution; no items filtered at uncertain-relevance level; only items rejected on HIGH-confidence rejection (none qualified for HIGH rejection)
- **Workspace-overload trigger:** not fired (88 items, well within context budget; tag-only, no item content)
- **Failure modes checked:**
  - LAYER 1 #1 (Missed-relevance): clean — all 9 branch observation targets surfaced + a Gaps region G covering unnamed but load-bearing items
  - LAYER 1 #2 (Surfaced-irrelevance): clean — items tagged sub/side/umbrella where appropriate; not core-inflated
  - LAYER 1 #3 (Over-coverage): clean — sub/side ratio is healthy (43 of 88 are sub/side/umbrella; not noise-dominant)
  - LAYER 1 #4 (Territory-mis-binding): clean — all items within the abstract-bounded scope from branch.md
  - LAYER 1 #5 (Workspace overload): not fired
  - LAYER 1 #6 (Artifact under-specification): clean — Traversal Trace has identifiers + tags + confidence per item; concept-names list populated with provenance; coverage map complete
  - LAYER 1 #7 (Workspace-artifact desync): clean — capture-at-moment-of-tagging applied
  - LAYER 1 #8 (Recency-Equates-Idleness): not applicable — possibility-mode; all items have `source: none`
  - LAYER 1 #9 (Recency-Bias-Filter): not applicable — same as above
  - LAYER 2 #1 (Interpretive-overstep): clean — items tagged for relevance, not interpreted with cross-item relational claims. Note: M9/M10 distinctions are item-level identification, not cross-item interpretive claims.
  - LAYER 2 #2 (Purpose-loss): clean — purpose specific (settle MQ2's meaning); all items tagged against this purpose
  - LAYER 2 #3 (Self-coupling-to-downstream): clean — calibration is internal (vs branch.md observation targets); not downstream-output-dependent
- **items_with_mtime:** 0 (possibility-mode; some artifact-mode items reference filesystem files but mtimes are not load-bearing for this inquiry)
- **items_without_mtime:** 88

---

## Self-Assessment Verdict

**PROCEED.** 

All 10 regions surfaced thoroughly (88 items; 41 core; coverage map complete; all 9 branch observation targets covered + Gaps region G added). 9 frontier flags self-signaled to direct Sensemaking. No LAYER 1 or LAYER 2 failure modes observed. Substantive product (workspace) populated; thin artifact (this file) authoritative.

**Frontier-priority for Sensemaking:** F2 (substance of MQ2) is primary — it gates F1 (compatibility), F3 (alignment mechanism), F4 (substrate-compliance check), F6 (asymmetric-failure form), F7 (spec-implication), F8 (stance taxonomy), F9 (kind-to-input mapping). F5 (pattern scope) is independent and defaults to MQ2-specific per branch's specific-vs-pattern check.

**Next discipline:** Sensemaking.
