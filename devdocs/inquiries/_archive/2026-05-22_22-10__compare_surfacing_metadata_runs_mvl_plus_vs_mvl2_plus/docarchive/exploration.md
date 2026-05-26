# Exploration — compare surfacing metadata runs (MVL+ vs MVL2+)

## User Input

`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-22_22-10__compare_surfacing_metadata_runs_mvl_plus_vs_mvl2_plus/_branch.md`

The inquiry asks: which of two completed inquiries (A = 16-00 via `/MVL2+`; B = 20-35 via `/MVL+`) that consumed the identical verbatim user input about adding mtime metadata-awareness to the surfacing discipline did a better job, and why?

## Territory Overview

**Mode:** possibility-with-artifact-anchors. The territory is conceptual (the space of comparison dimensions for evaluating two inquiry outputs) but anchored in concrete artifacts (the two findings, _branch.md files, and prior discipline outputs in `docarchive/` of each inquiry).

**Entry point:** frontier-first.

**Boundary:** explicit-bounded by `_branch.md` to the specific pair of inquiries. No boundary-discovery sub-phase fired.

**Regions identified:**

- **R1 — Load-bearing commitments of each inquiry.**
- **R2 — Comparison dimensions** (the candidate dimensions for evaluating "better job").
- **R3 — Adjacent precedents in the project** for cross-inquiry comparison.
- **R4 — The runner-difference confound** (`/MVL2+` uses `/surfacing` as upstream; `/MVL+` uses `/explore` as upstream).
- **R5 — The substantive differences** between the two findings.
- **R6 — The user's actual question** (the exact words, to identify what they most wanted).

## Inventory

### R1 — Load-bearing commitments of each inquiry

(Inquiry A = `devdocs/inquiries/2026-05-22_16-00__surfacing_metadata_recency_signal/` ran with `/MVL2+`; Inquiry B = `devdocs/inquiries/2026-05-22_20-35__surfacing_file_metadata_awareness_design/` ran with `/MVL+`.)

| Commitment surface | Inquiry A (16-00 via `/MVL2+`) | Inquiry B (20-35 via `/MVL+`) |
|---|---|---|
| **Spec edit surfaces in `surfacing.md`** | 7 surfaces: §1.3 NOT-list (9th row); §1.4 vocabulary (8th term `recency annotation`); §2.1 Step Refinement with metadata-as-signal-not-verdict principle; §4.2 LAYER 1 failure modes FM #8 + FM #9; §5.4 schema field; §5.5 derived per-region recency distribution; §5.6 telemetry counts. | 3 surfaces: §1.3 NOT-list note; §2.1 paragraph extension (canonical home with non-filtering reaffirmation + named-category framing); §5.4 schema row + one-line note after table. |
| **Field name** | `recency annotation` (signal-level name) | `last-edit-time` (observable-fact-level name) |
| **Field value shape** | `{source: filesystem \| none, value: ISO8601 \| null}` — `source: none` first-class for possibility-mode items | ISO 8601 timestamp string; format-flexible (per-inquiry consistent); field absent or N/A in possibility-mode records |
| **Anti-regression mechanism** | Two new LAYER 1 failure modes at §4.2 (FM #8 Recency-Equates-Idleness; FM #9 Recency-Bias-Filter), both anchored to existing §4.4 asymmetric-failure principle | Explicit non-filtering reaffirmation at §2.1, cross-referenced with existing §4.4; NO new failure-mode rows added |
| **Future-extension framing** | "Layered metadata-signal pattern" preserved as Research Frontier (template for other channels like file-size, git-blame) — NOT committed at spec time | Named category "observable-fact metadata annotations" with `last-edit-time` as first instance — COMMITTED at spec time inside the §2.1 extension body |
| **Layer Commitment in `_branch.md`** | Declared: process (with explicit out-of-scope reasoning for meaning + structural) | Omitted (treated as ordinary problem-solving) |
| **Killed alternatives in Reasoning** | 7 KILLs documented (numeric bands; `mtime annotation` name; combining failure modes; REPAIR of §2.3; ADD-DIMENSION on tags; REORGANIZE inline; outbound design-history pointers) | 0 KILLs; all candidates SURVIVE; 2 REFINEs (Q3 schema-row restructure; Q6 Research-Frontier trigger refinement) |
| **Deferred items** | 2 (numeric recency bands; LAYER 2 identity-eroding failure-mode variants) | 2 (M2 per-item freshness-confidence tier; M3 per-region edit-time-distribution aggregation) — plus a downstream-consumer rules item as RESEARCH FRONTIER |
| **Source Input preservation** | Verbatim in `_branch.md` | Verbatim in `_branch.md` |

### R2 — Comparison dimensions (candidate dimensions for evaluating "better job")

This is a possibility-mode candidate set — dimensions exist; the verdict will weight them.

| Dimension | What it asks |
|---|---|
| **D1 — User-question fidelity** | How closely does the inquiry's output match the user's literal question? |
| **D2 — Completeness of the spec edit** | Does the edit cover all surfaces the spec should touch (vocabulary, schema, failure modes, telemetry, etc.)? |
| **D3 — Parsimony / minimal-MVP** | Does the edit avoid over-engineering, over-committing, premature specification? |
| **D4 — Anti-regression strength** | How structurally robust is the non-regression guarantee — does it have defense-in-depth across surfaces? |
| **D5 — User-language alignment** | Does the inquiry's naming and framing match the user's own vocabulary? |
| **D6 — Structural rigor** | Does the inquiry follow the project's placement conventions, primitive-set rigor, NOT-list discipline? |
| **D7 — Ship-readiness** | Can the user copy-paste the spec edit text and apply it without further design work? |
| **D8 — Future-extension framing** | Does the inquiry leave room for future additions (e.g., other metadata kinds) without restructuring? |
| **D9 — Confound-acknowledgment** | Does the inquiry honestly name what its single run cannot tell us? |
| **D10 — Frame preservation** | Does the inquiry preserve the user's stated framing (e.g., the "old ≠ idle" guard)? |
| **D11 — Adversarial test rigor** | How strong was the critique pass — were uncomfortable alternatives genuinely tested? |
| **D12 — Inquiry-template compliance** | Did the inquiry properly apply MVL+ template features (Layer Commitment, Synthesis Trigger, transcription-audit fail-safe)? |

### R3 — Adjacent precedents in the project for cross-inquiry comparison

Project HAS comparison precedents (probed with `ls devdocs/inquiries/ | grep -E "compar|vs|ab_test|matched|side.by.side"`):

| Precedent | Type | Relevance to this inquiry |
|---|---|---|
| `2026-05-14_16-41__ab_test_inquiry_protocol` | Defines the project's A/B test protocol (current-vs-snapshot of same discipline) | RELATED but DIFFERENT: that protocol compares **two versions of the same discipline** (current vs git-archived snapshot) on the same input. THIS inquiry compares **two different runner variants** (`/MVL+` with `/explore` vs `/MVL2+` with `/surfacing`) at the same time. Structurally different but verdict-shape vocabulary transfers. |
| `2026-05-14_17-00__ab_test_rerun_under_old_explore_spec` | An applied A/B comparison | Demonstrates the verdict format (delta type ∈ {confirmation, mismatch, regression, drift, uncertainty}). |
| `2026-05-10_22-46__nav_should_be_vs_recent_discussion_comparison` | A "should-be vs recent discussion" comparison | Different shape — compares aspirational vs observed; not directly applicable. |
| `2026-05-16_00-35__sensemaking_spec_capability_comparison` | A capability comparison of sensemaking spec versions | Closer to A/B in structure; verdict-format precedent. |
| `2026-05-09_21-15__loop_diagnose__memory_ambiguity_in_metaloop_ladder` and many `loop_diagnose__*` findings | Loop-diagnosis findings (correction-chain diagnosis) | Different operation: diagnosis of where a single run went wrong, not comparison of two runs. Not directly applicable. |

**Precedent verdict:** the project has rich precedent for current-vs-snapshot A/B comparison but NOT for the runner-vs-runner comparison this inquiry performs. The verdict-shape vocabulary (delta types) transfers; the comparison's underlying mechanism (which dimensions to weight, how to handle the runner-difference confound) is new ground.

### R4 — The runner-difference confound

The two runners differ in their upstream discipline:

| Property | `/MVL+` (used by Inquiry B) | `/MVL2+` (used by Inquiry A) |
|---|---|---|
| Upstream discipline | `/explore` | `/surfacing` |
| Pipeline | E → S → D → I → C | Su → S → D → I → C |
| Flow-type | `extended` | `extended-surfacing` |
| Upstream operation | Map unknown territory; confidence-tagged map of items | Draw items from bounded territory with relevance tags |

**Why the confound matters:** for THIS specific question (which targets the surfacing discipline itself), `/MVL2+`'s use of `/surfacing` as upstream creates a **self-reference dynamic** — the upstream discipline being run is the same discipline being modified. This is structurally important:

- Self-reference can produce richer engagement: the surfacing operation, applied to surfacing's own spec design space, may make the discipline's NOT-list, primitives, asymmetric-failure principle more visible to the downstream stages.
- Self-reference can also produce frame-lock: the upstream discipline's existing identity may bias the downstream stages toward minor refinements rather than structural questioning.

`/MVL+`'s use of `/explore` (a different discipline) is arms-length — explores the territory of the question without the self-reference. This may produce more abstract reasoning but less anchored treatment.

**The confound is not a quality difference; it's a different cognitive operation.** Any verdict must acknowledge that part of the substantive difference between A's 7-surface edit and B's 3-surface edit may be attributable to the runner difference, not to the inquiry's own decision-making.

**Other confounds:**

- LLM-run randomness: both ran on Opus 4.7 1M context; same model. Run-to-run output variance is unobserved. The A/B precedent at `devdocs/inquiries/2026-05-14_16-41__ab_test_inquiry_protocol/` explicitly names "sample-size-of-1" as a failure mode and "ab_stability_test" as a deferred protocol for measuring run-to-run variance. Without that data, the per-run randomness contribution to the divergence is unknown.
- Time-of-day: 16-00 ran at 4 PM; 20-35 ran at 8:35 PM same day. Not a structural confound.
- Discipline-spec freshness: both ran against the same currently-installed discipline specs at the time of running. Spec drift is not a factor.

### R5 — The substantive differences between the two findings

Beyond surface counts, the two findings make structurally different choices:

| Choice | Inquiry A (16-00) | Inquiry B (20-35) |
|---|---|---|
| **Anti-regression strategy** | Add new failure-mode rows (FM #8, FM #9) at §4.2 with concrete Correctives anchored to §4.4 | Reaffirm non-filtering at §2.1; trust existing §4.4 to handle the failure-mode case |
| **Vocabulary maintenance** | Add `recency annotation` to §1.4 vocabulary table | Skip vocabulary table update |
| **State Summary** | Add per-region recency distribution derivation at §5.5 | Skip State Summary update (or implicit — covered by Trace + State Summary's general schema) |
| **Telemetry** | Add raw-count bullet at §5.6 | Skip telemetry update |
| **Failure-mode-as-anchoring** | Failure modes are the ANCHOR for the non-regression principle (the failure mode names give the principle a callable name from elsewhere) | Non-regression principle is anchored in §2.1's reaffirmation text; no callable failure-mode names |
| **Possibility-mode treatment** | First-class `source: none, value: null` annotation per item | Field absent or N/A per item |
| **Naming target** | Signal-level (`recency annotation` — forward-compatible with non-mtime recency sources) | Observable-fact-level (`last-edit-time` — explicit anti-judgment-drift framing; user-language-aligned) |
| **Future-extension** | Research Frontier preserved; no commitment | Named category committed at spec time; future kinds extend by category |

### R6 — The user's actual question (re-read carefully)

The user's exact words, parsed for what they most wanted:

| Phrase | What it signals |
|---|---|
| "should surfacing discipline also explicitly use metadata (last datetime of edit) of files too?" | A SHOULD question — is this a good idea at all? |
| "this can prevent errors caused by idle artifacts in the codebase" | Names Failure mode A (positive value of the addition) |
| "without metadata judgment, they will be considered as refined as recent files , which might not be the case" | Restates Failure mode A |
| "But just bc a file is old it doesnt mean it is idle as well" | The "but" guard — Failure mode B (the non-regression promise) |
| "but having this extra data piece is good" | Affirms value despite Failure mode B risk |
| "and maybe surfacing discipline should have some section regarding this?" | Asks about PLACEMENT — does this warrant a section? |
| "this metadata is good for looking at recently edited files and what is the active task , but it shouldnt mean completely ignore rest of the files" | Restates Failure mode B (don't drop old files) |
| **"So, what kind of thing we can add to surfacing discipline to enable this power without limiting it or regressing it?"** | **The actual question.** Asks for "what kind of thing" — singular phrasing, not "what comprehensive package of additions." |

**Critical observation:** the user's question phrasing is **"what kind of thing we can add"** — singular, modest, asking for the right kind of addition. The user did NOT ask:
- For a comprehensive multi-surface spec rewrite.
- For vocabulary updates.
- For telemetry additions.
- For new failure-mode rows.

The user DID explicitly ask about a "section" — but as an open question ("maybe surfacing discipline should have some section regarding this?"), not as a demand.

Both inquiries answered the "section" question correctly: NO, a dedicated new section isn't structurally appropriate per the placement convention; multi-surface placement with §2.1 as canonical home is better.

## Signal Log

| Signal | Type | Cycle | Probed? | Outcome |
|---|---|---|---|---|
| Surface-count divergence: 7 vs 3 spec edits | Density | 1 | YES | Substantive difference; central to comparison |
| User's "what kind of thing" framing | Relevance | 1 | YES | Critical — favors parsimony reading; B more directly matches |
| Self-reference dynamic in `/MVL2+` (upstream = same discipline being modified) | Tension | 1 | YES | Genuine confound; not a quality difference |
| A/B precedent vocabulary transfers but structural mechanism differs | Novelty | 1 | YES | This is the project's first runner-vs-runner comparison documented as an inquiry |
| Two anti-regression strategies (failure-mode-rows vs reaffirmation-only) | Tension | 1 | YES | Both structurally defensible; different design philosophies |
| Field-name divergence: `recency annotation` vs `last-edit-time` | Tension | 1 | YES | A is signal-level (forward-compatible); B is observable-fact-level (user-language-aligned) |
| 0 KILLs (B) vs 7 KILLs (A) in critique | Novelty | 1 | YES | A's critique was more adversarial; B's candidates converged with fewer prosecution-survivable alternatives |
| Future-extension: committed-at-spec-time (B) vs research-frontier (A) | Tension | 1 | YES | B's named category is forward-extension-ready; A's research frontier is more conservative |
| LLM-run randomness as silent confound | Absence | 1 | YES (acknowledged) | The A/B precedent's "ab_stability_test" deferral applies here too — variance is unobserved |

## Confidence Map

| Region | Confidence | Reasoning |
|---|---|---|
| R1 — Load-bearing commitments | **confirmed** | Both findings read in full; commitments enumerated and tabulated |
| R2 — Comparison dimensions | **scanned** | 12 candidate dimensions enumerated; further dimensions possible but unlikely to overturn the major axes |
| R3 — Adjacent precedents | **confirmed** | Project's `devdocs/inquiries/` searched; A/B precedent located; verdict-shape vocabulary identified; this inquiry's runner-vs-runner shape confirmed as new ground |
| R4 — Runner-difference confound | **confirmed** | The structural difference between `/MVL+` (Explore-upstream) and `/MVL2+` (Surfacing-upstream) is documented; self-reference dynamic named |
| R5 — Substantive differences | **confirmed** | Per-choice tabulation completed |
| R6 — User's actual question | **confirmed** | User's exact words parsed; "what kind of thing" framing identified as load-bearing for the verdict |

## Frontier State

**Stable.** Three convergence criteria checked:

- **Frontier stability** — additional scans did not reveal new regions. The six regions exhaust the comparison territory at the granularity needed for the verdict.
- **Declining discovery rate** — cycles 1 and 2 produced substantive structural insight; jump-scan (alternative comparison frames considered) produced no surprise.
- **Bounded gaps** — remaining unknowns (LLM-run randomness; whether the verdict generalizes beyond this single comparison) are out-of-scope for THIS inquiry and explicitly named as such.

Frontier state: **closed for /explore's purposes**; handoff to sensemaking.

## Gaps and Recommendations

### Frontier questions handed to downstream

For **sensemaking** (next discipline):

- **What does "better job" mean for the user's question?** Multiple defensible readings exist:
  - Reading 1: "better job" = more directly matches the user's question phrasing → favors parsimony reading → B better on D1, D3, D5, D10.
  - Reading 2: "better job" = more comprehensive spec edit → favors completeness reading → A better on D2, D6, D11.
  - Reading 3: "better job" = stronger structural rigor against regression → favors defense-in-depth reading → A's failure-mode rows are more rigorous on D4, D11; B's category framing is more rigorous on D8.
  - Sensemaking must commit to one primary reading or explicitly adjudicate among them.

- **What is the load-bearing meaning of the user's "what kind of thing we can add" phrasing?** Is this asking for ONE kind of thing (singular addition), a small SET of coordinated additions, or a comprehensive package? The verbal phrasing leans singular; the inquiry's deliverable shape may be a small coordinated set. Sensemaking must commit to a reading.

- **How should the runner-difference confound enter the verdict?** As a co-equal reason (the verdict acknowledges the comparison is muddled), as a side-note (the verdict proceeds and notes the confound at the end), or as a structural disqualifier (the verdict refuses to declare a winner because the confound is too strong)? Sensemaking must locate the confound in the verdict's reasoning structure.

For **decomposition**:

- The comparison has natural pieces: (i) the per-dimension comparison (D1-D12); (ii) the verdict itself; (iii) the confound treatment; (iv) the limitations of the verdict. Each is a separately-coherent piece.

For **innovation**:

- The verdict candidates are: (a) "A better"; (b) "B better"; (c) "TIED"; (d) "different-strengths-different-jobs"; (e) "verdict-impossible-due-to-confounds." Each is a candidate to test.

For **critique**:

- Adversarial test the verdict's evidence base — does it cite the specific findings? Does it weight dimensions in a defensible way? Does it acknowledge the confound honestly without using the confound as an escape hatch?
- Multi-axis prosecution depth check applies here: user-perspective objection (would the user accept this verdict's reasoning?); specific failure-case scenario (what if the user re-ran both and got different outputs?).

### Recommendations

- **Sensemaking should commit to a primary reading of "better job"** — likely Reading 1 (matching user's question phrasing) given the user's "what kind of thing" framing, but the commit must be explicit.
- **The verdict should be declared at the dimension level**, not just the overall level — per-dimension positioning of each inquiry, then an overall weighting.
- **The runner-difference confound must be in the verdict, not in a footnote.** The verdict is a comparison of TWO COGNITIVE OPERATIONS, not just two output qualities; structuring the verdict this way preserves the comparison's honesty.

## Telemetry

- **Mode:** possibility-with-artifact-anchors. The dominant production is possibility-mode candidate enumeration (R2, R6) anchored in artifact-mode reads (R1, R3, R5).
- **Entry point:** frontier-first.
- **Cycles run:** 2 (initial scan + signal-probe; jump-scan integrated).
- **Candidates generated (possibility mode):** 12 comparison dimensions (D1-D12) in R2; 5 verdict candidates in Recommendations.
- **Signals detected:** 9. Probed: 9. Deferred: 0 (all signals probed during cycle 1).
- **Resolution progression:** R1/R3/R4/R5/R6 at coarse-to-confirmed; R2 at scanned (further dimensions possible).
- **Frontier state:** stable.
- **Discovery rate:** declining; cycle 2 confirmed cycle 1's regions.
- **Convergence criteria status:** Frontier stability ✓ — Declining discovery rate ✓ — Bounded gaps ✓.
- **Jump scan performed:** YES (cycle 2 tested alternative comparison frames — surface-count alone, runner-quality alone, LLM-randomness alone; none produced new regions; the multi-dimensional comparison frame survived as the right shape).
- **Failure modes checked (from /explore §4.1):**
  - Premature depth — avoided; surround-layer-first scan read both findings + the A/B precedent.
  - Surface-only scanning — probed key signals (user's exact framing; runner-difference confound; substantive differences).
  - False confidence — jump-scan performed; alternative comparison frames considered; no surprises.
  - Premature termination — three criteria all met.
  - Re-exploration — frontier tracking explicit per region.
  - Completeness bias in possibility mode — included "boring" comparison frames (surface count) before generating richer ones.
  - Open→closed drift — annotations stayed at labeling level (descriptions of differences, not interpretations of which is "right").
  - Silent boundary-discovery — N/A (boundary explicit-bounded).
  - Negative-space silent drop — R3 confirmed-present (precedents exist but don't directly apply).
  - Inadequate per-item content depth — D3 minimum maintained (each commitment has structural-adjacency content).

## Self-Assessment Verdict

**PROCEED.**

- All convergence criteria met.
- No LAYER 1 failure modes (`/explore`'s §4.1) raised.
- The structural map is sufficient for sensemaking to anchor on.
- The central frontier question for sensemaking is: what is the primary reading of "better job" for the user's stated question? The exploration leans toward Reading 1 (user-question-fidelity) but defers the commit to sensemaking's adjudication.
