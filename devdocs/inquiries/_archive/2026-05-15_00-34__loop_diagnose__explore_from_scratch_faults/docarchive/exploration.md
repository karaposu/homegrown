# Exploration: Faults of the May 12 iter-1 explore-from-scratch finding — possibility map

## User Input

`devdocs/inquiries/2026-05-15_00-34__loop_diagnose__explore_from_scratch_faults/_branch.md` (signal-first, possibility mode). Three evidence sources are loaded in session: iter-1 finding (the diagnostic target); iter-2 finding (same inquiry's later iteration with a "Changes from Prior" enumerating 5 documented faults); May 14 supplementary diagnostic (12 change categories A1–A12 with A1+A2+A3 named as project-coupling and A4–A12 as protocol-overhead, plus the user's inline note "WHY explore should know about other disciplines at all???? it doesnt make sense....").

## Step 0 — Declarations

| Field | Value |
|---|---|
| `cognitive-commitment-mode` | `open` |
| `territory-type-mode` | `possibility` |
| `entry-point` | `signal-first` (user's "multiple points" framing) |
| `expected` | ~20 items |
| `depth-level` | `D2` |
| Boundary | Explicit; no boundary-discovery sub-phase |

## Territory Overview

The territory is **the design space of fault hypotheses for the May 12 iter-1 explore-from-scratch finding**, given three converging evidence sources. The diagnostic is bounded by: (a) only iter-1 is the named target; (b) iter-2 and May 14 are comparative evidence, not ground truth; (c) "multiple points" framing demands enumeration breadth, not single-point depth.

Six regions:

| Region | What varies in this region |
|---|---|
| **Surround layer (S)** | Existing protocols, contracts, and artifacts the diagnostic operates within |
| **Region A: Iter-2-documented faults** | The 5 faults explicitly named in iter-2's "Changes from Prior" section — closest authoritative source |
| **Region B: May-14-supplementary faults** | The 12 change categories A1–A12 between bf4ae1f baseline and current rewrite, with origin attribution to iter-1 evaluated per category |
| **Region C: User-inline objection** | The deepest fault candidate — questioning even iter-2's preserved-from-iter-1 NOT-list framing |
| **Region D: Process / orchestration faults** | Faults in HOW iter-1 ran (self-reference, pipeline-elaboration bias, framing ambiguity, premature commitment, critique-dimension blindness) |
| **Region E: Inherited assumptions** | Faults in what iter-1 ASSUMED about the project context, not what it explicitly wrote |
| **Region F: Confirmed-absent** | Paradigms enumerated and found inapplicable |

Coarse-scan first surfaced the surround layer (per layered-territory rule) before scanning inquiry-specific candidates.

---

## Inventory

### Surround layer (S) — context the diagnostic operates within

| ID | Item | Confidence |
|---|---|---|
| S1 | `homegrown/protocols/loop_diagnose.md` — frames a correction-chain (weak prior + human correction + later improved result) as an MVL+ inquiry; produces failure hypotheses with confidence | confirmed |
| S2 | `homegrown/contracts/alignment_control.md` — L0–L6 alignment-layer vocabulary used to attribute failure stages | confirmed |
| S3 | `thinking_disciplines/anatomy_of_disciplines.md` — the universal discipline-spec anatomy (Definition / Components / Process / Failure Modes / Coverage Strategy + Transform / Progression / Telemetry / Frontier) that iter-1 organized its skeleton around | confirmed |
| S4 | Current `homegrown/explore/SKILL.md` and `homegrown/explore/references/explore.md` — the rewritten artifacts that grew from iter-1 + iter-2 (the rewrite is intermediate evidence, not iter-1's direct responsibility) | confirmed |
| S5 | `enes/stability_preservation_via_git.md` — the snapshot infrastructure that preserved bf4ae1f as comparison baseline | confirmed |
| S6 | `homegrown/protocols/conclude.md` — the protocol that produced both the iter-1 and iter-2 findings via CONCLUDE | confirmed |
| S7 | `archived_skills/bf4ae1f-hg/bf4ae1f-explore/references/explore.md` — the pre-rewrite simpler version (~20kB vs ~43kB) used by May 14 as comparison baseline | confirmed |

### Region A — Iter-2-documented faults (5 faults explicitly identified by iter-2's "Changes from Prior")

| ID | Item | Confidence |
|---|---|---|
| A1 | **Skipped the meaning-layer** — iter-1 jumped to a structural skeleton ("the upstream existence-claim discipline") without first defining what "to explore" MEANS as a cognitive verb. Per iter-2: this was the load-bearing iter-1 fault that the user explicitly flagged. | confirmed |
| A2 | **Wrong load-bearing user-confirmation question** — iter-1 made F-weak vs F-strong reading of "relevance understanding" the MUST-confirm caveat. Iter-2: that was a downstream symptom of the meaning-layer skip; once meaning is grounded, the F-weak/F-strong distinction dissolves. | confirmed |
| A3 | **Relevance treated as an annotation layer addition** — iter-1 proposed relevance as a post-scan tag (one of 5 annotation layers). Iter-2: relevance was already a signal type in the existing framework; iter-1's annotation-layer addition was a redundant double-role that needed removal. | confirmed |
| A4 | **"Existence claim" as user-facing unit** — iter-1 used "existence claim" at the user-facing level. Iter-2: "surfaced item" is the user-facing term; "existence claim" belongs at the typed-record schema level when that deferred addition activates. | confirmed |
| A5 | **"Strong-reading drift" failure-mode label** — iter-1 named a failure mode "strong-reading drift." Iter-2 renamed to "open→closed drift" because the iter-1 label conflated with multiple project-internal "mode" senses (cognitive-commitment-mode, territory-type-mode, pipeline-mode, invocation-mode). | confirmed |

### Region B — May-14-supplementary faults with origin attribution to iter-1

| ID | Item | Confidence |
|---|---|---|
| B1 | **A1 origin (Sources subsection)** — May 14's A1 (4 specific project finding paths embedded in the Loading note). Iter-1 did NOT recommend this — the Sources subsection materialized at rewrite-time, listing iter-1's own finding among the 4 sources. Origin attribution: rewrite-time, NOT iter-1. Iter-1 is implicated only in being a source-finding the rewrite cited; not in proposing the embedding. | scanned |
| B2 | **A2 origin (Neighbor disciplines table embedding 5 paths)** — May 14's A2 (Neighbor disciplines table includes "Spec path" column with 5 canonical paths). Iter-1's NOT-list specifically named the 5 neighbors as a cross-discipline boundary statement. Iter-1 made the framework (5-entry NOT-list); rewrite-time added the path column. Iter-1's contribution: the 5-entry framing the table organized around. | scanned |
| B3 | **A3 origin (Specialization pattern coupling /explore to /navigation)** — May 14's A3 (§1.5 hardcodes /navigation as the only specialization). Iter-1 did NOT recommend a Specialization pattern at all (this came from the May-12-11-40 navigation-factoring-question finding cited in the rewrite's Sources). Origin attribution: rewrite-time absorption of a different finding; NOT iter-1. | scanned |
| B4 | **A4–A12 origin (protocol-overhead via deferred-with-revival activation)** — May 14's A4–A12 are 9 categories of protocol overhead (numbered sections, Step 0 declarations, D0–D4 depth, 5 annotation layers, 11 named failure modes, refinement notes, Cross-Inquiry Merge Contract, calibration-state subsection, Vocabulary table). Iter-1 enumerated MOST as DEFERRED items in the "tiered evolution path" with revival triggers. Rewrite-time apparently activated them WITHOUT verifying the revival triggers fired. Iter-1's contribution: the menu existed; the deferral mechanism was not binding enough to prevent rewrite-time activation. | scanned |

### Region C — User-inline objection (deepest fault candidate)

| ID | Item | Confidence |
|---|---|---|
| C1 | **NOT-list framing itself questioned** — User's inline note in May 14's A2 REPAIR section: "WHY explore should know about other disciplines at all???? it doesnt make sense...." Iter-1 made the 5-entry NOT-list against neighbor disciplines a CORE structural commitment of the spec. Iter-2 PRESERVED it. The user is now questioning even this preserved structural commitment. If the objection is valid, the NOT-list is itself the same kind of project-coupling May 14 named for A1+A2+A3 — embedding project-taxonomy concerns inside a discipline's runtime spec. The discipline's identity-as-cognitive-operation should not depend on which other disciplines happen to exist in the project. | scanned |

### Region D — Process / orchestration faults (faults in HOW iter-1 was conducted)

| ID | Item | Confidence |
|---|---|---|
| D1 | **Self-reference unflagged in iter-1** — Iter-1 ran the SIC pipeline on a META-question (what should /explore be) using the THEN-EXISTING /explore spec to do its own exploration phase. The discipline being redefined was the same discipline used to do the redefinition. Iter-2's `_branch.md` says "self-reference is acknowledged" — that acknowledgment is in iter-2, not iter-1. Iter-1 did not flag the self-reference risk. | scanned |
| D2 | **Pipeline-elaboration bias on a meta-question** — Iter-1 used /MVL+'s extended pipeline (E→S→D→I→C) on a question whose answer is a DISCIPLINE SPEC. Each discipline phase produced more elaboration; the cumulative pipeline output was a heavily-structured skeleton. Possible failure: the loop's structural-elaboration tendency may have inflated the spec beyond what the cognitive operation requires (the bf4ae1f baseline was ~20kB; iter-1+iter-2+rewrite cumulative is ~43kB). Iter-1 did not include a "spec-parsimony" check. | scanned |
| D3 | **Framing ambiguity not surfaced** — Iter-1's user-stated framing ("from scratch reunderstanding") was ambiguous between meaning-layer-reunderstanding and wholesale-restructure. Iter-1 picked the structural-skeleton reading without flagging the meaning-layer alternative. Iter-2 surfaced this ambiguity AS the iter-2 caveat ("meaning-layer reading vs wholesale reading"). Iter-1's sensemaking did not produce this ambiguity-collapse pair. | scanned |
| D4 | **Premature commitment via CONCLUDE before MUST resolved** — Iter-1's CONCLUDE produced a Next-Actions section with COULD-replace presented as adoptable, even though the MUST-confirm-weak-reading was unresolved. The COULD logically depends on the MUST; iter-1's CONCLUDE did not gate against this dependency. The user's subsequent action (proceeding toward the rewrite) suggests the MUST gate was effectively bypassed. | scanned |
| D5 | **Critique dimension blindness inherited from sensemaking frame (jump-scan-discovered)** — Iter-1's Phase 0 critique dimensions were extracted from iter-1's own sensemaking output, which had committed to the structural-skeleton frame. The critique therefore could not see the meaning-layer absence — its evaluation framework was pre-committed. This is the Wrong Dimensions failure mode (per `homegrown/td-critique/references/td-critique.md` failure mode #1) at a meta-level: critique inherits sensemaking's frame. | inferred |

### Region E — Inherited assumptions (what iter-1 took for granted)

| ID | Item | Confidence |
|---|---|---|
| E1 | **Assumed spec-anatomy structure was the right shape** — Iter-1 organized the standard skeleton around the universal spec-anatomy (Identity / Components / Process / Quality / Output) per `thinking_disciplines/anatomy_of_disciplines.md`. This is the Status Quo Bias failure mode at the meta-spec level: defending an established structure because it's documented and consistent with sibling disciplines, not because the evidence demanded this shape for /explore specifically. Iter-2 partially corrected (added leading Verb Meaning + Comparator + Scenarios) but kept the spec anatomy below; the wholesale-restructure variant remains in iter-2's research frontier. | scanned |
| E2 | **Treated user's working hypothesis as substantive load-bearing claim** — Iter-1 treated "mapping with relevance understanding" as a substantive structural claim worth adjudicating (F-weak vs F-strong). The user later said it was a downstream symptom, not the load-bearing question. Iter-1's mistake: not testing whether the user's hypothesis was the RIGHT QUESTION before answering it. | scanned |
| E3 | **Deferred-with-revival is sufficient governance** — Iter-1 enumerated tiered-evolution additions with revival triggers. Iter-1 assumed the deferral mechanism was sufficient to prevent premature activation. Rewrite-time apparently bypassed all the revival triggers (B4). Iter-1's mechanism was not binding enough; it lacked an enforcement mechanism for the deferral. | scanned |
| E4 | **NOT-list = identity-by-negation is acceptable** — Iter-1 chose to define /explore in part by what it deliberately excludes (the 5-entry NOT-list against neighbors). This identity-by-negation framing was assumed acceptable. C1's objection challenges this assumption: identity should be defined by what /explore IS, not by what it isn't. Iter-1 did not test this assumption. | inferred |

### Region F — Confirmed-absent (paradigms enumerated but inapplicable)

| ID | Item | Confidence |
|---|---|---|
| F1 | **Statistical regression evidence** — only one snapshot (bf4ae1f) exists; no statistical sampling possible to attribute fault magnitude. | confirmed-absent |
| F2 | **Direct attribution from iter-1 to current spec** — the path from iter-1 → iter-2 → intermediate edits → current rewrite has multiple steps. Direct attribution of any specific current-spec text to iter-1 alone requires intermediate-step evidence not available. Iter-1 is one source of the cumulative changes; not the only one. | confirmed-absent |
| F3 | **User-intent recovery beyond what the user wrote** — we cannot reconstruct what the user "really meant" beyond their explicit framings. Confirmed absent as evidence source. | confirmed-absent |
| F4 | **Inquiry-time intent of the rewrite author** — the spec-author at rewrite-time (whoever materialized the current `homegrown/explore/references/explore.md`) made decisions that activated iter-1's deferred items. Their reasoning is not in the artifact. Confirmed absent. | confirmed-absent |

---

## Signal Log

| # | Signal type | Source | Action |
|---|---|---|---|
| 1 | **Density** | Region D (5 process candidates), Region B (4 May-14-attributed) | Probed A1 (Region A, the most authoritative documented fault) and C1 (Region C, the deepest fault candidate); deferred per-D-item probing to sensemaking |
| 2 | **Novelty** | D1 (self-reference unflagged), C1 (NOT-list questioned), B4 (deferred-activation governance gap), D5 (critique-dimension blindness inherited from sensemaking, jump-scan-discovered) | Surfaced; deferred deep treatment to sensemaking + critique |
| 3 | **Relevance** (purpose-biased) | A1 (skipped meaning-layer) is THE most fundamental documented fault per iter-2; C1 (NOT-list framing) is the deepest because it challenges what iter-2 PRESERVED | Probed both (probes 1 + 2) |
| 4 | **Tension** | Iter-2 says iter-1 was right about structural skeleton (it's what iter-2 inherited); user-inline says even the NOT-list (a structural-skeleton commitment) might be wrong → iter-2 verdict vs C1 verdict are in tension | Surfaced for sensemaking to adjudicate |
| 5 | **Absence** | (a) No candidate addresses HOW the rewrite happened between iter-2 and current spec — intermediate steps are undocumented; (b) no candidate addresses WHY the user accepted COULD-replace before MUST-confirm resolved (D4); (c) no candidate addresses META-question of whether "from-scratch redefinition" of stable disciplines is itself a problematic operation | Flagged as frontier questions for downstream disciplines |

### Probes

**Probe 1 (A1 — skipped meaning-layer; the documented load-bearing iter-1 fault):**
Iter-1 framed the question as "what should /explore look like as a discipline spec" rather than "what does to-explore mean as a cognitive operation." This is a layer-mismatch: the question that the cognitive operation needs answered (its meaning) is below the question iter-1 answered (its spec shape). The downstream consequences cascade — the F-weak/F-strong question (A2) is a structural-handling question that emerged from operating at the wrong layer; the "existence claim" unit (A4) is a unit-name choice fitted to the structural skeleton, not derived from the cognitive operation; the "strong-reading drift" failure mode (A5) is named in structural-handling terms (drift across reading-modes) rather than cognitive-operation terms (drift across cognitive commitments). A1 is the ROOT fault; A2/A4/A5 are downstream symptoms.

**Probe 2 (C1 — NOT-list framing itself questioned):**
Iter-1's 5-entry NOT-list was framed as the discipline's boundary against neighbor disciplines. The structural rationale: "the discipline's NOT-list is enforced operationally through failure modes." The user's inline objection has three plausible interpretations:
- *Bias-induction reading.* The discipline spec is read at runtime by an LLM doing exploration; if the spec mentions neighbor disciplines (sense-making, comprehend, decompose, innovate, navigation), the LLM's working memory carries those neighbor concepts during the operation. This primes the LLM to think about what it's NOT doing, rather than just doing the operation. The NOT-list is bias-inducing.
- *Identity-by-negation reading.* A discipline's identity should be defined by what it IS, not by what it isn't. The NOT-list is a negative-space framing that distracts from positive identity articulation.
- *Project-coupling reading.* The NOT-list is a project-internal boundary statement; it has value to the project's discipline taxonomy but no value to the cognitive operation itself. Embedding project-taxonomy concerns inside a discipline's runtime spec is the same kind of project-coupling May 14 identified for A1+A2+A3. The NOT-list is A2-prefiguration: iter-1 made the framework that May 14's A2 then operationalized as the embedded paths column.

All three interpretations point at the same root: defining /explore by reference to neighbor disciplines couples the spec to the project's discipline taxonomy and biases the LLM at runtime. If valid, this critique reaches deeper than iter-2 went.

**Probe 3 (B4 — deferred-with-revival activation governance gap, jump-scan-derived from comparing iter-1's deferred items list against May 14's A4–A12):**
Iter-1 enumerated a "tiered evolution path" of deferred additions, each with a revival trigger:
- Typed Input Contract → revival: project introduces a typed `_branch.md` schema (NOT YET FIRED — `_branch.md` is still informal prose)
- Typed Existence-Claim Schema → revival: automation consumer downstream (NOT YET FIRED — no machine-readable consumer exists)
- Drift-as-Escalation → revival: 3+ runs observe drift (UNCERTAIN — not tracked)
- Legend output section → revival: 2+ downstream confusion reports (NOT FIRED — no reports observed)
- Controlled Vocabulary for claim types → revival: 2+ ambiguity instances (NOT FIRED)
- Discovery-vs-Revisit telemetry → revival: cross-invocation re-explore becomes common (NOT FIRED)
- Cross-Inquiry Merge Contract → revival: meta-loop sibling-territory overlap (NOT FIRED)

The current `homegrown/explore/references/explore.md` apparently contains MOST of these as ACTIVE features (A4–A12 in May 14's catalogue). The revival triggers were not honored at rewrite-time. Iter-1's responsibility: the deferral mechanism was not binding enough to survive a rewrite. There is no spec-level enforcement that prevents activating deferred items without trigger-firing.

---

## Confidence Map

| Region | Confidence level | Notes |
|---|---|---|
| Surround layer (S) | confirmed | Read directly from existing project artifacts |
| Region A (iter-2-documented) | confirmed | Iter-2's "Changes from Prior" enumerates all 5 explicitly |
| Region B (May-14-attributed) | scanned | Origin attribution to iter-1 evaluated per category; B1 and B3 are NOT iter-1's fault; B2 partially attributable; B4 attributable via deferred-activation governance gap |
| Region C (user-inline objection) | scanned | Probed in detail (probe 2); three interpretations identified, all converging on project-coupling root |
| Region D (process/orchestration) | scanned + 1 inferred | D5 is jump-scan-derived from comparing iter-1's critique behavior against the meta-failure-mode list in `td-critique/references/td-critique.md`; the others are direct observations of iter-1's documented run |
| Region E (inherited assumptions) | scanned + 1 inferred | E4 is inferred from C1's underlying logic |
| Region F (confirmed-absent) | confirmed-absent | Four paradigms confirmed inapplicable |

Confirmed-absent regions are productive output, not gaps — they prevent downstream disciplines from treating "fault diagnosis" as a statistical problem (F1), as direct iter-1-to-current-spec attribution (F2), or as user-intent reconstruction (F3).

---

## Frontier State

**Stable.** After cycle 1 (coarse scan + signal detection + 3 probes + jump-scan in the critique-dimension-blindness direction), new scans produce variants of existing candidates rather than new structural features. The major fault dimensions are mapped (iter-2-documented + May-14-attributed + user-inline-objection + process + inherited assumptions). The jump-scan added D5 (critique-dimension-blindness inherited from sensemaking frame) which is significant but doesn't open a new region — it falls within Region D (process/orchestration faults).

---

## Gaps and Recommendations (frontier questions for downstream)

### Frontier questions handed to sensemaking

- **Hierarchy of faults:** A1 (skipped meaning-layer) is presented as the iter-1 ROOT documented fault by iter-2. C1 (NOT-list framing questioned) is the deepest user-stated fault. D5 (critique-dimension blindness inherited from sensemaking frame) is a meta-level process fault. Are these three the same fault at three layers (meaning-layer skip → wrong load-bearing question → wrong critique dimensions → preserved-NOT-list framing)? Or are they distinct faults at the same level (meaning, framing, process, identity-design)? Sensemaking needs to collapse this.
- **Origin attribution thresholds:** B1 (rewrite-time Sources subsection), B3 (rewrite-time /navigation hardcoding) are NOT iter-1's responsibility. B2 (NOT-list framework) and B4 (deferred-activation governance gap) are partially attributable. Should the diagnostic distinguish "iter-1 fault" from "iter-1-attributable contributing factor" from "downstream amplification of iter-1 framework"?
- **Iter-2 partial-correction sufficiency:** Iter-2 corrected 5 documented faults but PRESERVED the structural skeleton (including the NOT-list framing C1 questions). Is iter-2's partial correction itself a fault (it stopped short of going deep enough)?

### Frontier questions handed to decompose

- **The fault space has at least three sub-pieces** (iter-1-internal faults documented by iter-2; iter-1-attributable contributing factors via deferred-activation governance gap; structural-commitment faults preserved through iter-2 into the rewrite). Decompose should partition these as independent question-tree pieces with explicit interfaces.

### Frontier questions handed to innovate

- **Maintenance candidates worth deepening:** the user's inline objection points at an absence — there is no current mechanism to test whether a discipline's spec is "project-coupled vs operation-pure." Innovate could generate candidates for a project-coupling check that runs at spec-write time.
- **Deferral-mechanism strengthening:** B4 reveals iter-1's deferred-with-revival is not binding. Innovate could generate candidates for stronger deferral mechanisms (e.g., a `deferred:` frontmatter section that conclude.md / spec-edit-protocols check before allowing activation).

### Frontier questions handed to critique

- **Evaluation dimensions for the fault hypotheses:** evidence strength (direct documentation vs inferred); attribution strength (iter-1 explicitly responsible vs iter-1-framework-then-amplified vs iter-1-not-responsible); actionability (does identifying the fault suggest a concrete maintenance candidate); load-bearing-ness (does the fault meaningfully contribute to subsequent problematic MVL+ runs the user experienced).

### Unbounded gaps (not interpolable from the current map)

None. All gaps are bounded by enumerated dimensions; the inquiry's diagnostic boundary holds.

---

## Telemetry

| Metric | Value |
|---|---|
| Mode | possibility |
| Entry point | signal-first (probed user's "multiple points" framing) |
| Cycles run | 1 (coarse scan + signal detection + 3 probes + jump-scan; convergence reached) |
| Candidates generated | 26 (7 surround-layer + 5 iter-2-documented + 4 May-14-attributed + 1 user-inline + 5 process + 4 inherited-assumptions + 4 confirmed-absent — overlaps allowed across regions) |
| Signals detected | 5 (density, novelty, relevance, tension, absence) |
| Probes performed | 3 (A1 documented load-bearing fault; C1 user-inline objection; B4 deferred-activation governance gap) |
| Probes deferred | Per-D-item probing to sensemaking; Region E individual assumption-testing to decompose |
| Resolution progression | Coarse scan (regions enumerated) → signal-first probes on relevance/density signals → jump-scan in critique-dimension direction (added D5) |
| Frontier state | Stable |
| Discovery rate | High in cycle 1 (26 items); jump-scan added 1 marginal item (D5) — diminishing |
| Convergence criteria status | (a) Frontier stability: TRUE. (b) Declining discovery rate: TRUE. (c) Bounded gaps: TRUE. |
| Jump-scan performed | TRUE (jump-scanned in critique-dimension-blindness direction; surfaced D5) |
| Failure modes checked | Premature depth (no — coarse scan first), surface-only scanning (no — 3 probes), false confidence (no — jump-scan performed), premature termination (no — convergence criteria explicitly checked), re-exploration (no — frontier tracked), completeness bias in possibility mode (no — obvious documented faults A1–A5 included before novel C1/D5/B4), open→closed drift (no — labels kept at functional-one-line level), silent boundary-discovery (no — boundary explicit), negative-space silent drop (no — Region F explicit), staging-boundary regression (n/a — single invocation), inadequate per-item depth (no — D2 maintained throughout) |

**Overall: PROCEED** — sufficient candidate breadth across the three documented evidence sources (iter-2, May 14, user-inline) plus process and inherited-assumptions regions; key tension surfaced (iter-2 verdict vs C1 verdict on NOT-list framing); convergence verified by jump-scan.
