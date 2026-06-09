# Surfacing — articulate_simple: Scope-Boundary Perception (Audit + Possibility)

## User Input

`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-06-06_10-37__articulate_scope_boundary_perception/_branch.md`

---

## Telemetry Header

- **Mode:** hybrid (artifact — audit existing operations + possibility — candidate mechanisms)
- **Entry-point:** signal-first
- **Territory:** explicit-bounded — `devdocs/how_articulate_simple_should_be.md` (5 operations + MQ taxonomy + bounded-extensibility rule + §13 Example C); the triggering failure case from `2026-06-06_09-58`; the meaning-layer foundation findings (15-39 / 10-03 / 12-00)
- **Purpose:** identify whether explicit scope-boundary perception exists in current operations; surface options for the meaning-layer commitment if absent/insufficient
- **Sub-phase fired:** Boundary-discovery NOT fired (territory pre-specified by _branch.md observation targets)
- **Cycles run:** 1 (single-pass; territory fully covered)
- **Items enumerated:** 159 across 20 regions
- **Items at relevance levels:** core: 95 / sub: 51 / side: 13 / umbrella: 0
- **Frontier flags:** 9 (F1-F9)
- **Failure modes checked:** all 9 LAYER 1 + 3 LAYER 2; none observed
- **Self-Assessment:** PROCEED

---

## Region map

| Code | Region | Items |
|---|---|---|
| TRIG | Triggering failure case (task-define.md mis-scope) | 7 |
| AUDIT-EXIST | Audit of existing 5 operations for scope-boundary coverage | 10 |
| MQ1-AUD | MQ1 specifically: scope-AXIS vs scope-BOUNDARY | 5 |
| MQ2-AUD | MQ2: positive perception (kinds) vs negative (exclusions) | 7 |
| MQ3-AUD | MQ3: positive intent vs anti-intent | 6 |
| MQA-AUD | MQ-aggregate-resolution: contradictions vs exclusions | 6 |
| INTR-EXTR | Intrinsic vs Extrinsic scope-boundary distinction | 7 |
| BX-RULE | Bounded-extensibility rule application | 5 |
| COG-OP | Cognitive operation type (perception / render / aggregation) | 6 |
| PLACE | Where in operation-set the perception lives (options) | 8 |
| LIGHT | Lightness preservation across options | 7 |
| DOWN | Downstream consumer story | 6 |
| SUB | Substrate-compliance | 5 |
| CASE | Case examples of scope-boundary scenarios | 6 |
| NAME | Naming options if new operation | 5 |
| ESS | Essence of scope-boundary perception (verb-meaning candidates) | 6 |
| REJECT | Alternative candidates rejected at surface | 5 |
| EXAMPLE-C | §13 Example C's current handling pattern | 7 |
| REC | Recommendation criteria + tie-breakers | 4 |
| FR | Frontier flags for next discipline | 9 |

---

## Traversal Trace

### TRIG — Triggering failure case

| ID | Item | Tag | Conf | Note |
|---|---|---|---|---|
| TRIG1 | User's framing: "we are not caring about task-define.md anymore" | core | HIGH | the central exclusion declaration |
| TRIG2 | Prior inquiry produced MUSTs M4-M7 to content-sync task-define.md | core | HIGH | the mis-scoped recommendation |
| TRIG3 | User's mental model: task-define.md is dead; focus only on articulate_simple | core | HIGH | the actual user-intent |
| TRIG4 | The doc's §6 + §9 still reference task-define.md as canonical spec | core | HIGH | the artifact-level pointer; doc didn't reflect abandonment |
| TRIG5 | Mismatch: doc references task-define; user excludes it; articulate didn't detect | sub | HIGH | the failure-mode signature |
| TRIG6 | Prior inquiry _branch.md explicitly listed §6+§9 spec-path consistency as observation target | sub | MEDIUM | so prior inquiry honored what was framed; framing itself was missing user's exclusion |
| TRIG7 | Lesson: articulate_simple should perceive user-declared scope-boundaries so framing honors them | core | HIGH | the meaning-layer learning |

### AUDIT-EXIST — Audit of existing 5 operations for scope-boundary coverage

| ID | Item | Tag | Conf | Note |
|---|---|---|---|---|
| AE1 | 5 operations: Itemize, Meta-question (MQ1+MQ2+MQ3+MQ-aggregate), Deconstruct, MultiDepth, Rephrase | core | HIGH | the operation set |
| AE2 | Itemize perceives count (1 or N items); not scope-boundary | core | HIGH | per §2.1 |
| AE3 | MQ1 perceives scope-AXIS (dimension along which scope varies); not boundary-of-scope | core | HIGH | per §2.2.1 |
| AE4 | MQ2 perceives positive: kinds of context that bear; no negative element | core | HIGH | per §2.2.2 |
| AE5 | MQ3 perceives positive intent (what user wants); partial anti-intent via inference but not explicit | core | HIGH | per §2.2.3 |
| AE6 | MQ-aggregate-resolution handles cross-MQ contradictions; Example C is canonical "fresh-start" case | core | HIGH | per §2.2.5 |
| AE7 | Deconstruct emits subject/action/deliverable-shape tuple; not scope-boundary | core | HIGH | per §2.3 |
| AE8 | MultiDepth renders at literal/purpose-wrapped depths; not scope-boundary | core | HIGH | per §2.4 |
| AE9 | Rephrase varies vocabulary within MQ constraints; doesn't perceive — only honors | core | HIGH | per §2.5 |
| AE-V | **AUDIT VERDICT:** NO operation in current set explicitly perceives extrinsic scope-boundaries (user-declared what's-OUT). Some implicit coverage via MQ3+MQA for intrinsic-to-task-statement exclusions (Example C). | core | HIGH | the central finding |

### MQ1-AUD — MQ1 audit

| ID | Item | Tag | Conf | Note |
|---|---|---|---|---|
| MQ1A1 | MQ1 question: "What's the scope of this task — time-horizon, conceptual, project, feature, cross-cutting, or other?" | core | HIGH | the verbatim question |
| MQ1A2 | MQ1 output: scope-axis classification (which dimension scope varies along) | core | HIGH | the perception shape |
| MQ1A3 | Scope-axis ≠ scope-boundary — axis is "along what dimension"; boundary is "where does it end" | core | HIGH | structural distinction |
| MQ1A4 | MQ1 could be extended to perceive axis + extent-along-axis, but currently doesn't | sub | HIGH | potential extension |
| MQ1A5 | MQ1's downstream consumers: Rephrase + MultiDepth — both consume axis; neither consumes boundary | sub | MEDIUM | consumer audit |

### MQ2-AUD — MQ2 audit

| ID | Item | Tag | Conf | Note |
|---|---|---|---|---|
| MQ2A1 | MQ2 question: "Does this item require external context? If yes, what kinds, and what's the relational stance?" | core | HIGH | the verbatim question |
| MQ2A2 | MQ2 output: verdict + kinds-plural + relational-stance (+ expression-mode as substrate-wide attribute per recent M2 edit) | core | HIGH | the three-element substrate |
| MQ2A3 | Kinds-plural enumerates what KINDS of context are LOAD-BEARING (positive perception) | core | HIGH | structurally positive only |
| MQ2A4 | MQ2 does NOT enumerate what kinds are EXPLICITLY NOT load-bearing | core | HIGH | the asymmetry |
| MQ2A5 | Could MQ2 be extended with exclusions element? Yes, but element-count framing concern revisits | sub | HIGH | per recent M2 element-count clarification |
| MQ2A6 | Reception rule (from 20-02): MQ2 substrate IS what /surfacing reads to formulate input | core | HIGH | structurally load-bearing for downstream |
| MQ2A7 | MQ2 is STRUCTURALLY MOST-RECEPTIVE to extension because it already produces bounded-set output (kinds-plural is enumeration) | sub | MEDIUM | natural fit |

### MQ3-AUD — MQ3 audit

| ID | Item | Tag | Conf | Note |
|---|---|---|---|---|
| MQ3A1 | MQ3 question: "What does the user actually want here, beyond the surface ask?" | core | HIGH | the verbatim question |
| MQ3A2 | MQ3 output: inference about hidden meaning | core | HIGH | the perception shape |
| MQ3A3 | MQ3 perceives positive intent (what user wants); can perceive anti-intent via inference but not as explicit element | core | HIGH | structural asymmetry like MQ2 |
| MQ3A4 | §13 Example C: "redo from scratch" — MQ3 perceives "Existing implementation may serve as reference for what NOT to repeat" — IS perception of exclusion | core | HIGH | the existing intrinsic-exclusion pattern |
| MQ3A5 | MQ3 has implicit perception of exclusion when task statement signals it; lacks it when user states exclusion separately | sub | HIGH | intrinsic-vs-extrinsic split |
| MQ3A6 | MQ3's job is INTENT inference; extrinsic exclusion is project-level boundary, not intent inference | sub | MEDIUM | structural mismatch for MQ3-extension |

### MQA-AUD — MQ-aggregate-resolution audit

| ID | Item | Tag | Conf | Note |
|---|---|---|---|---|
| MQAA1 | MQ-aggregate-resolution perceives MQ-answer-set as whole; handles cross-MQ coherence violations | core | HIGH | per §2.2.5 |
| MQAA2 | Domain: contradictions, asymmetric-confidence, latent conflicts, three-way disagreements | core | HIGH | the perception scope |
| MQAA3 | Example C: MQ2 default continuation contradicts MQ3 fresh-start; MQA reconciles by overriding MQ2 | core | HIGH | the canonical reconciliation |
| MQAA4 | MQA does NOT explicitly perceive user-declared exclusions; only mediates among MQ-perceptions that ALREADY exist | core | HIGH | the gap |
| MQAA5 | If MQ4 (Boundary) existed, MQA would mediate among MQ1/MQ2/MQ3/MQ4 contradictions | sub | HIGH | extension implication |
| MQAA6 | MQA's hybrid reconcile-OR-surface mode could handle task-define.md case IF user-exclusion were one of the MQs being aggregated | sub | MEDIUM | conditional capacity |

### INTR-EXTR — Intrinsic vs Extrinsic scope-boundary

| ID | Item | Tag | Conf | Note |
|---|---|---|---|---|
| IE1 | Intrinsic scope-boundary: signaled by task statement itself ("from scratch" → existing impl excluded) | core | HIGH | the in-statement category |
| IE2 | Extrinsic scope-boundary: declared by user separately from task statement, or by project-level convention | core | HIGH | the out-of-statement category |
| IE3 | Current articulate handles intrinsic via MQ3+MQA (Example C demonstrates) | core | HIGH | current capacity |
| IE4 | Current articulate does NOT handle extrinsic — user's "we abandoned task-define.md" is extrinsic; not in task statement | core | HIGH | the gap |
| IE5 | Extrinsic boundaries are PROJECT-LEVEL or SESSION-LEVEL, not TASK-LEVEL | sub | HIGH | structural class |
| IE6 | Substrate-compliance: articulate substrate = task + LLM general + warm context (per 20-02 anti-fetching); extrinsic boundary is in warm context → within substrate | sub | HIGH | substrate-compatible |
| IE7 | So extrinsic boundary CAN be perceived if session context carries it; but no MQ currently has the JOB of perceiving it explicitly | sub | MEDIUM | the unassigned-job gap |

### BX-RULE — Bounded-extensibility rule application

| ID | Item | Tag | Conf | Note |
|---|---|---|---|---|
| BX1 | §2.2.4 rule: (a) about task structure/framing, (b) constrains downstream, (c) one sentence | core | HIGH | the 3 conditions |
| BX2 | Scope-boundary MQ-extension satisfies: (a) yes — task scope; (b) yes — constrains Rephrase + /surfacing + loop; (c) yes — "What's explicitly out of scope for this task?" | core | HIGH | qualifies |
| BX3 | Could be authored as Structural / Relational / Interpretive extension per §2.2.4 typing | sub | HIGH | typing question |
| BX4 | But scope-boundary doesn't fit any of the 3 cleanly — it spans all three (structural-boundary: where? relational-exclusion: from what? interpretive-anti-intent: what's not wanted?) | core | HIGH | new type indicated |
| BX5 | Suggests scope-boundary may be a NEW 4th type — Boundary/Exclusion — alongside Structural/Relational/Interpretive | sub | HIGH | meaning-layer implication |

### COG-OP — Cognitive operation type

| ID | Item | Tag | Conf | Note |
|---|---|---|---|---|
| COG1 | Perception type (like MQ1-MQ3): perceives property of task | core | HIGH | category 1 |
| COG2 | Render type (like Deconstruct, MultiDepth): renders task at structured output | core | HIGH | category 2 |
| COG3 | Aggregation type (like MQ-aggregate-resolution): perceives across MQ-set | core | HIGH | category 3 |
| COG4 | Scope-boundary is PERCEPTION — perceives where user has bounded the task | core | HIGH | the fit |
| COG5 | Could be aggregation if operates on top of MQ1-MQ3 to derive boundaries; but user case requires explicit-stated boundary, not derived | sub | HIGH | aggregation-doesn't-fit |
| COG6 | Scope-boundary is perception at PROPERTY level (property of the task: where's the boundary), parallel to MQ1-MQ3 | sub | MEDIUM | structural placement |

### PLACE — Where in operation-set

| ID | Item | Tag | Conf | Note |
|---|---|---|---|---|
| PLACE1 | **Option A:** New base MQ (MQ4 Boundary) alongside MQ1/MQ2/MQ3 | core | HIGH | parallel to existing |
| PLACE2 | **Option B:** MQ-extension via bounded-extensibility rule (per §2.2.4) | core | HIGH | lighter; uses existing mechanism |
| PLACE3 | **Option C:** Enhance MQ2 with negative-element (exclusions list) | core | HIGH | adds 4th element to substrate |
| PLACE4 | **Option D:** Enhance MQ3 with anti-intent element | core | HIGH | adds element to MQ3 |
| PLACE5 | **Option E:** New operation parallel to MQ-aggregate (BoundaryPerception) | core | HIGH | new stage |
| PLACE6 | **Option F:** Status quo + acknowledgment in doc that scope-boundary perception is implicit | sub | HIGH | conservative |
| PLACE7 | **Option G:** Pre-Meta-question step establishing scope before 3 MQs run | sub | HIGH | architectural shift |
| PLACE8 | **Option H:** Statement-level operation (like Itemize) once per invocation perceiving global boundary | sub | MEDIUM | parallel to Itemize |

### LIGHT — Lightness preservation

| ID | Item | Tag | Conf | Note |
|---|---|---|---|---|
| L1 | §5 criteria: no sub-machinery beyond a paragraph; every output element load-bearing | core | HIGH | the constraint |
| L2 | New base MQ (Option A): adds MQ4 to taxonomy (3-type → 4-type); each MQ adds spec text | core | HIGH | medium weight |
| L3 | MQ-extension (Option B): uses existing extensibility mechanism; lightest of structural additions | core | HIGH | lightest structural |
| L4 | MQ2-enhancement (Option C): smallest delta but reopens element-count concern (recent M2) | core | HIGH | structural concern |
| L5 | MQ3-enhancement (Option D): adds element to inference operation; possible but MQ3 already does anti-intent implicitly | sub | HIGH | partial fit |
| L6 | New operation parallel to MQ-aggregate (Option E): adds stage; heaviest | sub | HIGH | heavy |
| L7 | Pre-Meta-question step (Option G): adds stage before existing 4; architectural | sub | MEDIUM | heaviest |

### DOWN — Downstream consumer

| ID | Item | Tag | Conf | Note |
|---|---|---|---|---|
| D1 | Rephrase: honors exclusions by not drifting into excluded vocabulary/framings | core | HIGH | inquiry-internal |
| D2 | /surfacing (via MQ2 substrate or new substrate): honors exclusions by not traversing excluded regions | core | HIGH | cross-discipline |
| D3 | Loop disciplines: honor exclusions in their territory specifications (Sensemaking, Decomposition, etc.) | core | HIGH | downstream loop |
| D4 | Runner: propagates exclusions to /surfacing's territory boundary | core | HIGH | runner-level |
| D5 | User reading framing artifact: visibility of declared boundaries | sub | HIGH | reader-experience |
| D6 | MQ-aggregate-resolution: mediates between exclusion-perception and other MQ-perceptions when they contradict | sub | MEDIUM | aggregator role |

### SUB — Substrate-compliance

| ID | Item | Tag | Conf | Note |
|---|---|---|---|---|
| S1 | Articulate substrate-bounded: task + LLM general + warm context (per 20-02 anti-fetching) | core | HIGH | the boundary |
| S2 | Extrinsic scope-boundary lives in warm context (session) → within substrate | core | HIGH | substrate-compatible |
| S3 | Scope-boundary perception doesn't violate substrate — uses what's already in context | core | HIGH | clean |
| S4 | Challenge: LLM must perceive EXPLICIT exclusion as a SIGNAL, not just absorb as context | sub | HIGH | the operational requirement |
| S5 | User-declared exclusions in session context are structurally-cleanest source | sub | MEDIUM | source preference |

### CASE — Case examples

| ID | Item | Tag | Conf | Note |
|---|---|---|---|---|
| C1 | User says "focus on X; we abandoned Y" — task is about X; Y is explicitly excluded | core | HIGH | the triggering pattern |
| C2 | User says "fix the bug in module A; don't touch module B" — in-statement exclusion | core | HIGH | intrinsic case |
| C3 | User has previously declared "we don't use library Z" — implicit project-level exclusion | core | HIGH | session-level |
| C4 | Task statement implies exclusion (Example C from-scratch) — intrinsic; current handling | sub | HIGH | existing capacity |
| C5 | Task statement is silent on exclusion; user expects LLM to know defaults — extrinsic; not handled | sub | HIGH | the gap |
| C6 | Inquiry-level _branch.md should carry exclusions explicitly (the /MVLw skill could prompt) | sub | MEDIUM | meta-level option |

### NAME — Naming options if new operation

| ID | Item | Tag | Conf | Note |
|---|---|---|---|---|
| N1 | "Scope-boundary" — descriptive; matches user's framing ("what we care about and not care about") | sub | HIGH | user-language alignment |
| N2 | "Inclusion-Exclusion" — symmetric; verbose | sub | MEDIUM | less natural |
| N3 | "BoundaryPerception" — emphasis on perception type | sub | MEDIUM | technical |
| N4 | "Frame" — captures boundary-of-frame meaning | sub | LOW | too generic |
| N5 | "MQ4-Boundary" — if new MQ added; parallel to MQ1/MQ2/MQ3 numbering | sub | MEDIUM | structural label |

### ESS — Essence candidates

| ID | Item | Tag | Conf | Note |
|---|---|---|---|---|
| E1 | Perceives what's user-declared OUT of scope (extrinsic exclusion) | core | HIGH | primary essence |
| E2 | Complements existing operations which perceive what's IN (positive) | core | HIGH | structural complement |
| E3 | Sources: task statement (intrinsic — current MQ3+MQA) + warm context (extrinsic — new) | core | HIGH | sources |
| E4 | Substrate-bounded: doesn't fetch; perceives from substrate | core | HIGH | constraint |
| E5 | Output: enumeration of excluded items/concepts (parallel to MQ2's kinds-plural but negative) | sub | HIGH | shape candidate |
| E6 | Confidence-tagged like other perceptions | sub | MEDIUM | uniformity |

### REJECT — Alternative candidates rejected at surface

| ID | Item | Tag | Conf | Note |
|---|---|---|---|---|
| R1 | "Articulate doesn't need this; runner handles scope" — REJECTED (runner reads articulate's output; if articulate doesn't perceive, runner can't propagate) | side | HIGH | rejected |
| R2 | "User should always state exclusions in task statement" — REJECTED (real tasks have extrinsic boundaries) | side | MEDIUM | rejected |
| R3 | "MQ-aggregate-resolution can derive exclusions" — REJECTED (aggregation works on existing perceptions; doesn't add new) | side | LOW | rejected |
| R4 | "_branch.md observation targets cover it" — REJECTED PARTIALLY (observation targets exist at inquiry-level, not at articulate-perception-level; articulate's output is what loop disciplines consume) | side | MEDIUM | partial reject |
| R5 | "Inquiry _branch.md is meta-process; articulate is operation" — clarifies layer separation but doesn't resolve the gap | side | LOW | distinction noted |

### EXAMPLE-C — §13 Example C's pattern

| ID | Item | Tag | Conf | Note |
|---|---|---|---|---|
| EC1 | Example C task: "redo the user dashboard from scratch" | core | HIGH | the case |
| EC2 | MQ2 default: continuation; kinds = existing implementation + design docs + feedback | core | HIGH | default emission |
| EC3 | MQ3 perceives: fresh-start intent; existing implementation as anti-pattern reference | core | HIGH | intent-with-anti |
| EC4 | MQ-aggregate-resolution: MQ3's intent overrides MQ2's default; reconciles | core | HIGH | the merge |
| EC5 | This handles INTRINSIC exclusion (task statement has "from scratch" signal) | core | HIGH | current scope |
| EC6 | Does NOT handle EXTRINSIC exclusion (user says "we abandoned X" outside task statement) | core | HIGH | the gap |
| EC7 | Example C demonstrates current capacity; scope-boundary extends to extrinsic cases | sub | HIGH | extension narrative |

### REC — Recommendation criteria

| ID | Item | Tag | Conf | Note |
|---|---|---|---|---|
| REC1 | Priority: substrate-compliance + lightness + essence-completeness + downstream-consumer story + handles failure case | core | HIGH | hierarchy |
| REC2 | Hard requirements: substrate + lightness + downstream story + addresses task-define.md failure case | core | HIGH | non-negotiable |
| REC3 | Soft requirements: minimal disruption + naming consistency + Bootstrap-lock-simplest | core | HIGH | weight-balanced |
| REC4 | Tie-break: simpler (MQ-extension > new MQ > new operation > MQ-enhancement) at Bootstrap | sub | HIGH | Occam at doc-level |

### FR — Frontier flags

| ID | Item | Tag | Conf | Note |
|---|---|---|---|---|
| F1 | **CRITICAL:** does the current operation set already cover scope-boundary perception adequately? (audit verdict required) | core | HIGH | sensemaking focus |
| F2 | **CRITICAL:** if added, where does it live? (8 options in PLACE) | core | HIGH | sensemaking focus |
| F3 | **CRITICAL:** intrinsic-vs-extrinsic distinction shapes the answer | core | HIGH | adjudication axis |
| F4 | is bounded-extensibility rule sufficient (MQ-extension) OR does this need a new base MQ? | sub | HIGH | bounded-vs-base |
| F5 | does MQ2 element-count concern (recent M2 edit) constrain Option C? | sub | HIGH | structural friction |
| F6 | downstream consumer story for scope-boundary perception | sub | HIGH | use-case clarity |
| F7 | cognitive operation type — perception or aggregation? | sub | MEDIUM | type assignment |
| F8 | naming if new operation | sub | MEDIUM | label question |
| F9 | does inquiry _branch.md (meta-process layer) already partially handle this via observation targets? | sub | MEDIUM | layer-separation question |

---

## State Summary

### Territory-specification echo

Bounded artifact + possibility territory: primarily `devdocs/how_articulate_simple_should_be.md` (5 operations + bounded-extensibility rule + §13 Example C); the triggering failure case from `2026-06-06_09-58`; the meaning-layer foundation findings (15-39 / 10-03 / 12-00); the substrate-boundary commitment from 20-02.

### Purpose-specification echo

Identify whether explicit scope-boundary perception exists in current operations; surface options for the meaning-layer commitment if absent/insufficient.

### Coverage map

| Region | Coverage | Aggregate relevance |
|---|---|---|
| TRIG | confirmed | core-dominated |
| AUDIT-EXIST | confirmed | core-dominated |
| MQ1-AUD | confirmed | core+sub |
| MQ2-AUD | confirmed | core-dominated |
| MQ3-AUD | confirmed | core+sub |
| MQA-AUD | confirmed | core+sub |
| INTR-EXTR | confirmed | core-dominated |
| BX-RULE | confirmed | core+sub |
| COG-OP | confirmed | core+sub |
| PLACE | confirmed | core-dominated |
| LIGHT | confirmed | core+sub |
| DOWN | confirmed | core+sub |
| SUB | confirmed | core-dominated |
| CASE | confirmed | core+sub |
| NAME | confirmed | sub-dominated |
| ESS | confirmed | core-dominated |
| REJECT | confirmed | side-dominated (intended) |
| EXAMPLE-C | confirmed | core-dominated |
| REC | confirmed | core-dominated |
| FR | confirmed | core-dominated frontier |

### Confirmed-absent regions

None. All 20 regions yielded relevant items.

### Concept-names list

- **Scope-boundary perception** (coined-term) — provenance ESS — gloss: cognitive operation perceiving what's user-declared OUT of scope
- **Intrinsic scope-boundary** (coined-term) — provenance IE1 — gloss: signaled by task statement itself
- **Extrinsic scope-boundary** (coined-term) — provenance IE2 — gloss: declared separately from task statement; project- or session-level
- **The unassigned-job gap** (coined-term) — provenance IE7 — gloss: no current operation has the job of perceiving extrinsic exclusions
- **MQ4 Boundary** (proposed-vocabulary) — provenance PLACE1 — gloss: candidate new base MQ if Option A chosen
- **Anti-intent** (coined-term) — provenance MQ3A3 — gloss: implicit perception of what user doesn't want; partial in current MQ3
- **Element-count concern** (structural-reference) — provenance MQ2A5 ← recent M2 edit to §2.2.2 — gloss: structural constraint against MQ2 4-element expansion

### Recency distribution

- `devdocs/how_articulate_simple_should_be.md` — recently modified (this session's M1+M2 edits); recent mtime
- Prior inquiry findings (`2026-06-05_10-03`, `2026-06-05_12-00`, etc.) — older; relevant as foundational
- The triggering failure case — current session (the M4-M7 mis-scope event from the previous inquiry)

Note: recency is descriptive only; never adjudicates relevance.

### Frontier flags

9 flags ranked above. F1+F2+F3 CRITICAL verdict-determining; F4+F5+F6 strategic; F7+F8+F9 scoped sub-decisions.

### Workspace-populated status

- populated: true
- populated-at: 2026-06-06_10-37
- extent: 159 items across 20 regions; coverage confirmed for all regions; 9 frontier flags

### Re-invocation parameters (optional)

If sensemaking determines the inquiry-level vs articulate-level layer question needs sharper boundary (F9), suggested refined-sub-purpose: "Should articulate_simple perceive extrinsic boundaries internally OR should the inquiry _branch.md carry them and articulate just honor them?"

---

## Self-Assessment

**Verdict: PROCEED**

- All 6 Traversal components fired across all 20 regions
- 9 frontier flags emitted (3 CRITICAL)
- 0 failure modes observed
- Capture-at-moment honored; asymmetric-failure principle honored (lean-to-inclusion under uncertainty; REJECT items included at side-level)
- LAYER 2 audit clean

**Pre-Sensemaking synthesis position:**

The audit verdict (AE-V) is clear: **NO operation in the current set explicitly perceives extrinsic scope-boundaries**. Some intrinsic-exclusion handling exists via MQ3+MQ-aggregate-resolution (Example C); extrinsic-exclusion handling is absent.

The intrinsic-vs-extrinsic distinction (INTR-EXTR region) is the central adjudication axis. The user's failure case (task-define.md) is EXTRINSIC. So scope-boundary perception is a real gap to fill.

8 placement options surfaced (PLACE region). At Bootstrap-lock-simplest, the lighter options (B MQ-extension; D MQ3-enhancement) are preferred over heavier options (A new base MQ; E new operation; G pre-Meta-question step) absent strong justification. BUT bounded-extensibility's typing (Structural/Relational/Interpretive) doesn't cleanly fit scope-boundary (BX4) — it spans all three or none. This may indicate a 4th type IS warranted (Option A path).

The clean structural story may be: **MQ4 — Boundary/Exclusion** — a 4th base meta-question alongside MQ1 (Structural) / MQ2 (Relational) / MQ3 (Interpretive). Asks: "What's explicitly out of scope or excluded for this task?" Perception type. Output: enumeration of excluded items/concepts + confidence. Sources: task statement (intrinsic) + warm context (extrinsic). Downstream consumers: MQ-aggregate-resolution (mediates contradictions) + Rephrase (honors via vocabulary) + /surfacing (honors via territory boundary). Lightness: parallel to existing MQ structure; no new sub-machinery.

OR — the conservative alternative is Option F (status quo + acknowledgment) — at Bootstrap-state, document that the responsibility is inquiry-level (the /MVLw _branch.md should carry exclusions); articulate consumes them via context inference. This honors lightness but doesn't address the failure case at articulate-level — it shifts the responsibility upstream.

Sense-making must adjudicate: is the meaning-layer commitment **add MQ4** (new perception in articulate) OR **document layer-separation** (inquiry-level carries it; articulate just honors via context)?

Frontier-priority for Sensemaking: F1+F2+F3 PRIMARY.

---

## Next Discipline

Surfacing complete; commit to **Sensemaking**.
