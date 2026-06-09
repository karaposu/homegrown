# Surfacing — MQ-Aggregate-Resolution

## User Input

`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-06-05_12-00__mq_aggregate_contradiction_resolution/_branch.md`

## Mode & Entry Point

- **Territory-type-mode:** possibility (conceptual design space; items must be candidate-generated)
- **Entry-point:** signal-first (specific purpose: decide-IF + design-essence-IF-YES)
- **Territory specification:** abstract-bounded (territory edges given by 3-type taxonomy from 2026-06-05_10-03 + existing MQ shapes from 21-12/14-14/21-58 + bounded-extensibility rule from §2.3 + variant-(a) from 2026-06-05_00-11)
- **Boundary-discovery sub-phase:** SKIPPED (abstract-bounded territory does not require it)

## Purpose echo

Decide whether MQ-aggregate-resolution belongs as a cognitive operation in task-define. If YES, design essence (cognitive operation + what it perceives + what it produces + taxonomy fit + downstream contract + pass-2 implication). Meaning-layer only.

## Territory echo

The conceptual territory comprises 13 regions partitioned by structural axis:
1. **CON** — contradiction classes
2. **MECH** — resolution mechanism candidates
3. **ESS** — essence candidates for the merge operation
4. **DC** — downstream consumer contract
5. **TF** — taxonomy fit (under 2026-06-05_10-03)
6. **P2** — pass-2 implication (under variant-(a))
7. **DET** — contradiction-detection mechanism
8. **BR** — bounded-extensibility rule (b) fit
9. **AL** — alternatives to needing merge
10. **IH** — inherited commitment compatibility
11. **NM** — name candidates
12. **OUT** — output shape of merge
13. **AUX** — auxiliary considerations (scope, burden, conceptual relations, Bootstrap state)

---

## Traversal Trace

| # | Region | Item | Tag | Conf | Note | Recency |
|---|---|---|---|---|---|---|
| 1 | CON | CON1: Interpretive→Relational contradiction (from-scratch case; MQ3 excludes what MQ2 includes by default) | core | HIGH | The seed example; primary contradiction class observed | {source: none, value: null} |
| 2 | CON | CON2: Interpretive→Structural contradiction (intent reveals task is smaller/larger than MQ1's scope-axis classification suggests; e.g., "add a button" surface but intent = "redesign the navigation paradigm") | core | HIGH | Second contradiction class; intent inferences can invalidate scope perceptions | {source: none, value: null} |
| 3 | CON | CON3: Structural→Relational contradiction (MQ1 says "narrow feature scope, low complexity-class" but MQ2 says "yes need context, kinds=[full architecture, prior versions]" because the feature-class is heavily context-dependent) | sub | MED | Less common; usually scope and context-need are loosely correlated but can diverge | {source: none, value: null} |
| 4 | CON | CON4: Within-Relational contradiction (MQ2 kinds-list contains kinds that internally conflict; e.g., kinds=[prior implementations AND specification-from-zero]; same task can't need both) | sub | MED | Single-MQ-internal; suggests MQ2's substance has its own coherence issue | {source: none, value: null} |
| 5 | CON | CON5: Confidence-asymmetry-without-contradiction (3 MQs don't contradict but emit at very different confidences; e.g., MQ1 HIGH, MQ2 LOW, MQ3 MED) | sub | MED | Not a contradiction class per se but a coordination case | {source: none, value: null} |
| 6 | CON | CON6: Tacit-agreement-no-contradiction case (all 3 MQs align; no merge work needed) | sub | HIGH | The most common case at Bootstrap (probably); merge's behavior here matters | {source: none, value: null} |
| 7 | CON | CON7: Three-way contradiction (MQ1+MQ2+MQ3 all disagree with each other; rare but possible) | side | MED | Edge case; merge would have multiple things to reconcile | {source: none, value: null} |
| 8 | CON | CON8: Latent contradiction (3 MQs SEEM to agree but downstream Rephrase reveals incompatibility) | umbrella | LOW | Detection challenge; suggests merge has limited insight pre-Rephrase | {source: none, value: null} |
| 9 | CON | CON9: Self-contradicting-MQ (single MQ's output is internally inconsistent; meta-contradiction case) | side | LOW | Boundary case for what merge would operate on | {source: none, value: null} |
| 10 | MECH | MECH1: New explicit merge field as 4th element after MQ1+MQ2+MQ3 (user's proposal) | core | HIGH | The primary candidate the inquiry is testing | {source: none, value: null} |
| 11 | MECH | MECH2: Runner-smart-aggregation — runner reads all 3 MQs together and resolves implicitly when formulating /surfacing's input | core | HIGH | Named in conversation as resolution mechanism 1 | {source: none, value: null} |
| 12 | MECH | MECH3: MQ2-becomes-intent-aware — extend MQ2's substance with a 3rd element "excluded-kinds" populated by Interpretive signal | core | HIGH | Named in conversation as resolution mechanism 2 | {source: none, value: null} |
| 13 | MECH | MECH4: Per-pair-conditioning rules (formal rules: when MQ3=X and MQ2=Y, override Y with Z) | sub | MED | More mechanical; expensive to author rule-set; brittle | {source: none, value: null} |
| 14 | MECH | MECH5: Existing Rephrase machinery handles it — MQ-constrains-Rephrase already does multi-input synthesis; merge is already implicit in Rephrase | core | HIGH | The strongest "do nothing" candidate; tests whether merge is needed at all | {source: none, value: null} |
| 15 | MECH | MECH6: Sequential MQ ordering — fire MQ3 first; MQ2 reads MQ3's output and conditions on it; MQ1 reads both | sub | MED | Changes the parallel-perception model from 2026-06-05_10-03 taxonomy | {source: none, value: null} |
| 16 | MECH | MECH7: Explicit contradiction-detection-flag-with-defer — detect contradictions, flag for human/runner, don't auto-resolve | sub | MED | Conservative; respects user-position; but defers the work | {source: none, value: null} |
| 17 | MECH | MECH8: Post-context Validate/Refine handles it — cell 6 (Interpretive/post-context Refine) does the reconciliation after /surfacing | sub | MED-HIGH | Connects to 2026-06-05_10-03 cell 6; would need to revise variant (a) | {source: none, value: null} |
| 18 | MECH | MECH9: Universal verdict-sum operation as 4th element (named-generally; resolves any contradiction class, not just Interpretive→Relational) | core | HIGH | The fully-general form of MECH1 | {source: none, value: null} |
| 19 | MECH | MECH10: Conditional-merge — fire merge ONLY when contradiction detected; otherwise pass MQs through unchanged | sub | MED-HIGH | Combines MECH1 + DET2; performance/cost-aware | {source: none, value: null} |
| 20 | MECH | MECH11: Domain-transfer — analogous to /sense-making's anchor-extraction (cross-item structure built from per-item observations) | side | MED | Frames merge as anchor-extraction-but-cross-MQ-not-cross-item | {source: none, value: null} |
| 21 | MECH | MECH12: Per-MQ-self-checks — each MQ checks against the others before emitting; no separate merge | sub | LOW-MED | Distributes contradiction-detection burden to MQs themselves | {source: none, value: null} |
| 22 | ESS | ESS1: Reconcile — perceive contradiction and resolve to one coherent answer (operation: arbitration; output: verdict) | core | HIGH | Matches user's "resolves the contradiction" framing | {source: none, value: null} |
| 23 | ESS | ESS2: Synthesize — merge multiple perceptions into unified content (operation: composition; output: positive content) | core | HIGH | Matches user's "merges into one coherent one" framing | {source: none, value: null} |
| 24 | ESS | ESS3: Arbitrate — pick a winner among conflicting MQs (operation: selection; output: verdict + reason) | sub | MED | Simpler than reconcile; might lose information | {source: none, value: null} |
| 25 | ESS | ESS4: Annotate — add resolution metadata without modifying MQs (operation: metadata-emission; output: side-note on MQ-set) | sub | MED | Preserves raw MQ answers; merge produces commentary not replacement | {source: none, value: null} |
| 26 | ESS | ESS5: Re-frame — rewrite all 3 MQ answers in light of contradiction (operation: holistic re-perception; output: 3 revised MQs) | sub | LOW-MED | Most invasive; loses fidelity to original MQ outputs | {source: none, value: null} |
| 27 | ESS | ESS6: Meta-perceive — perceive the MQ-set itself as input; produce a perception about the perception-set (operation: meta-cognition; output: structural diagnosis) | core | HIGH | Distinct cognitive operation; the merge IS a perception OF MQ-set | {source: none, value: null} |
| 28 | ESS | ESS7: Coherence-check — verify the 3 MQs together form a coherent task-definition; output: coherence-status + any unresolvable contradictions | sub | MED-HIGH | Tighter scope than reconcile; doesn't always produce positive content | {source: none, value: null} |
| 29 | ESS | ESS8: Tension-surface — make contradictions explicit without resolving (defer resolution to downstream) | sub | MED | Honest-assessment approach; preserves contradiction-as-data | {source: none, value: null} |
| 30 | ESS | ESS9: Hybrid: reconcile-OR-surface — reconcile when confidence allows; surface tension otherwise | core | MED-HIGH | Likely needed in practice; merges ESS1 and ESS8 | {source: none, value: null} |
| 31 | DC | DC1: Rephrase reads merged-MQ-resolution INSTEAD of 3 raw answers | sub | MED | Cleanest interface; but loses raw signal | {source: none, value: null} |
| 32 | DC | DC2: Rephrase reads BOTH raw + merged | core | HIGH | More information for Rephrase to use; matches typical augmentation pattern | {source: none, value: null} |
| 33 | DC | DC3: Runner formulating /surfacing reads merged | core | HIGH | Critical — runner needs the merged version to formulate /surfacing correctly | {source: none, value: null} |
| 34 | DC | DC4: Runner reads raw MQ2's preparation substrate (per 21-58 spec) PLUS merged-resolution; runner reconciles at /surfacing-formulation-time | sub | MED-HIGH | Compatible with 21-58 commitment | {source: none, value: null} |
| 35 | DC | DC5: Each downstream consumer reads what's relevant to its operation (Rephrase reads merge; runner reads MQ2-prep-substrate+merge; etc.) | core | HIGH | Most flexible; respects consumer-specific needs | {source: none, value: null} |
| 36 | DC | DC6: Merge is consumed only by runner-formulating-/surfacing (not by Rephrase); Rephrase still reads raw MQs | side | LOW-MED | Scopes merge to a single consumer | {source: none, value: null} |
| 37 | DC | DC7: Downstream consumers (post-pass-2) read pass-1-merge + pass-2-merge if pass-2 re-runs merge | sub | MED | Pass-2 implication | {source: none, value: null} |
| 38 | TF | TF1: 4th primary type on axis A (target-of-perception = MQ-answer-set itself; meta-perceives) | core | HIGH | Significant taxonomy revision; would add a 4th type | {source: none, value: null} |
| 39 | TF | TF2: Cross-cutting operation orthogonal to the 3 types (not on axis A; a layer above) | core | HIGH | Doesn't revise the taxonomy; positions merge above the type-space | {source: none, value: null} |
| 40 | TF | TF3: Part of Meta-question operation's internal structure (Meta-question runs MQ1+MQ2+MQ3+merge as one operation; merge is the 4th internal step) | core | HIGH | Preserves "Meta-question" as one cognitive operation; merge is its internal aggregator | {source: none, value: null} |
| 41 | TF | TF4: Separate cognitive operation (6th operation in task-define alongside Itemize/Meta-question/Deconstruct/MultiScope/Rephrase) | sub | MED | Promotes merge to peer-operation status; significant spec change | {source: none, value: null} |
| 42 | TF | TF5: Post-MQ refinement (similar to Validate/Refine but pre-context); a sub-mode of Meta-question | sub | MED-HIGH | Connects merge to the 2026-06-05_10-03 post-context cells but at pre-context level | {source: none, value: null} |
| 43 | TF | TF6: Inversion — merge happens BEFORE the 3 MQs (as a "pre-perception" or "framing" step) — pre-rejected, but logged for completeness | side | LOW | Would invert the perception-then-merge structure | {source: none, value: null} |
| 44 | P2 | P2-1: Merge re-runs in pass-2 (post-context MQ perceptions may need new reconciliation) | core | HIGH | Connects to 2026-06-05_10-03 cell 6 (Refine) | {source: none, value: null} |
| 45 | P2 | P2-2: Pass-1's merge result is permanent (carries through unchanged to pass-2) | sub | MED | Aligns with variant (a) commitment to "only Rephrase re-runs" | {source: none, value: null} |
| 46 | P2 | P2-3: Pass-2 doesn't run merge; pass-2's Rephrase re-uses pass-1's merge | sub | MED-HIGH | Strictest variant (a) compatibility | {source: none, value: null} |
| 47 | P2 | P2-4: Merge IS the post-context Refine operation (cell 6) — resolves pre-context perceptions using surfaced material | core | HIGH | Powerful unifying frame; merge happens ONLY in pass-2 | {source: none, value: null} |
| 48 | P2 | P2-5: Merge runs in BOTH passes (pass-1 for pre-context merge; pass-2 for post-context refinement) | core | HIGH | Maximum coverage; revises variant (a) substantially | {source: none, value: null} |
| 49 | P2 | P2-6: Merge introduces a "merge-validation" sub-operation in pass-2 (similar to cell 4-5-6 Validate) | sub | LOW-MED | Granular but proliferates operations | {source: none, value: null} |
| 50 | DET | DET1: Always run merge (no detection; 4th sub-operation fires unconditionally) | core | HIGH | Default behavior; simplest spec | {source: none, value: null} |
| 51 | DET | DET2: Detect-then-merge (run merge only if structural contradiction observed) | sub | MED-HIGH | Performance-aware but adds detection cost | {source: none, value: null} |
| 52 | DET | DET3: Inference-based detection (LLM running merge perceives contradiction inferentially) | sub | MED | Less explicit; relies on LLM judgment | {source: none, value: null} |
| 53 | DET | DET4: Kinds-overlap structural check (MQ2's kinds-list vs MQ3's intent-excluded-kinds; check overlap explicitly) | sub | MED-HIGH | Specific to Interpretive→Relational class | {source: none, value: null} |
| 54 | DET | DET5: Confidence-based detection (low-confidence MQ outputs trigger merge; high-confidence alignment skips) | sub | LOW-MED | Uses confidence as proxy for merge-need | {source: none, value: null} |
| 55 | BR | BR1: Merge constrains Rephrase (extends MQ-constrains-Rephrase to merged output) | core | HIGH | Most direct rule-(b) fit | {source: none, value: null} |
| 56 | BR | BR2: Merge constrains runner→/surfacing (preparation substrate = the merged version) | core | HIGH | Connects to 21-58 commitment | {source: none, value: null} |
| 57 | BR | BR3: Merge constrains BOTH Rephrase and runner→/surfacing | core | HIGH | Multi-consumer constraint; most likely correct | {source: none, value: null} |
| 58 | BR | BR4: Merge is a new operation category that establishes its OWN downstream (e.g., merge constrains a new "coherent-task-statement" output) | side | LOW-MED | Adds new artifact; complicates spec | {source: none, value: null} |
| 59 | BR | BR5: Merge bypasses rule (b) — merge has no downstream consumer beyond Rephrase's existing MQ-consumption | side | LOW | Would defeat the purpose of merge | {source: none, value: null} |
| 60 | AL | AL1: Treat MQ2 + MQ3 as truly independent; downstream consumers handle conflicts ad-hoc | sub | MED | Argues against merge; pushes burden downstream | {source: none, value: null} |
| 61 | AL | AL2: Pre-context MQ outputs are inherently uncertain; merge would create false certainty; defer to post-context | core | HIGH | Strongest "wait until post-context" argument; ties to variant (a) | {source: none, value: null} |
| 62 | AL | AL3: Rephrase already merges (its job is to produce coherent rephrasing constrained by all 3 MQs); explicit merge is redundant | core | HIGH | The strongest "merge is implicit" argument | {source: none, value: null} |
| 63 | AL | AL4: Runner is smart enough to aggregate at /surfacing-formulation-time; merge would duplicate runner's job | sub | MED-HIGH | Aligns with MECH2 | {source: none, value: null} |
| 64 | AL | AL5: Make MQ3 fire first; MQ2 sees MQ3's answer; no merge needed (sequential cascade) | sub | MED | Aligns with MECH6 | {source: none, value: null} |
| 65 | AL | AL6: MQ2's substance is already the merger-point (kinds-list aggregates; verdict is the resolution); no separate merge | sub | LOW-MED | Stretches MQ2's role | {source: none, value: null} |
| 66 | AL | AL7: The user (operator) is the merger; system surfaces contradiction; user decides | sub | MED | Conservative; respects user-position; defers automation | {source: none, value: null} |
| 67 | IH | IH1: 21-12 MQ2 three-element substance (verdict + kinds + stance + hypothetical-relational mode) — merge must preserve or extend this | core | HIGH | Re-test commitment from inherited finding | {source: none, value: null} |
| 68 | IH | IH2: 21-58 preparation substrate concept + always-invoke premise — merge interacts with what runner reads | core | HIGH | Re-test commitment | {source: none, value: null} |
| 69 | IH | IH3: 14-14 MQ2 verdict + kind specifier shape — merge interacts with this shape | core | HIGH | Re-test commitment | {source: none, value: null} |
| 70 | IH | IH4: 2026-06-05_10-03 3-type taxonomy + 6-cell grid + per-type rule (b) — merge's fit must respect this | core | HIGH | Re-test commitment; closest prior to this inquiry | {source: none, value: null} |
| 71 | IH | IH5: 2026-06-05_00-11 variant (a) Rephrase-only-in-pass-2 — merge's pass-2 implication tests this | core | HIGH | Re-test commitment; surface tension if merge needs pass-2 re-run | {source: none, value: null} |
| 72 | IH | IH6: §2.3 bounded-extensibility rules (a)(b)(c) — merge's adoption is rule-(b)-fit-or-revision | core | HIGH | Re-test commitment | {source: none, value: null} |
| 73 | IH | IH7: 2026-06-04_07-48 process-layer MQ-constrains-Rephrase load-bearing safety mechanism — merge interacts with this mechanism | sub | MED-HIGH | Process-layer commitment; merge may augment or replace | {source: none, value: null} |
| 74 | NM | NM1: "verdict-sum" — user's proposed term; emphasizes aggregation; verdict-shaped | sub | MED | User's term; preserve unless better name emerges | {source: none, value: null} |
| 75 | NM | NM2: "MQ-merge" — direct; emphasizes the merger operation | sub | MED-HIGH | Functional, clear | {source: none, value: null} |
| 76 | NM | NM3: "MQ-resolution" — emphasizes contradiction-resolution | sub | MED-HIGH | Resolution-framed; might over-emphasize resolution-vs-synthesis | {source: none, value: null} |
| 77 | NM | NM4: "MQ-synthesis" — emphasizes synthesis aspect (positive content) | sub | MED | Synthesis-framed; might over-emphasize creation-vs-preservation | {source: none, value: null} |
| 78 | NM | NM5: "MQ-aggregate" — neutral; aggregation as the basic operation | sub | MED-HIGH | Neutral framing | {source: none, value: null} |
| 79 | NM | NM6: "MQ-coherence-pass" — emphasizes coherence-checking | sub | MED | Coherence-framed | {source: none, value: null} |
| 80 | NM | NM7: "MQ4" or "MQΣ" — positional name; signals it's the 4th MQ | side | LOW | Misleading: it's a meta-operation, not a 4th MQ-of-the-same-kind | {source: none, value: null} |
| 81 | NM | NM8: "perception-consolidation" — generic; less MQ-specific | side | LOW | Too abstract | {source: none, value: null} |
| 82 | NM | NM9: "MQ-arbiter" — emphasizes arbitration | side | LOW-MED | Conflict-emphasis | {source: none, value: null} |
| 83 | OUT | OUT1: One unified narrative replacing 3 MQ answers (consolidation output) | sub | MED | Loses raw MQ signal | {source: none, value: null} |
| 84 | OUT | OUT2: Verdict on each MQ + resolution note (verdict-per-MQ + reconciliation commentary) | core | HIGH | Preserves raw + adds resolution | {source: none, value: null} |
| 85 | OUT | OUT3: Conditional-rephrasing-guide (when X then Y) — output is a decision-tree for Rephrase | sub | MED | Useful but complex; might over-engineer | {source: none, value: null} |
| 86 | OUT | OUT4: Structured 4-element block (MQ1+MQ2+MQ3+merge-resolution) added to per-item bundle | core | HIGH | Cleanest addition to existing per-item structure | {source: none, value: null} |
| 87 | OUT | OUT5: Modified-in-place MQ answers (merge rewrites the originals) | side | LOW | Loses provenance; bad for auditability | {source: none, value: null} |
| 88 | OUT | OUT6: A typed coherence-report (e.g., {aligned: bool, conflicts: [...], resolution: ...}) | sub | MED-HIGH | Structured; clear schema | {source: none, value: null} |
| 89 | AUX | AUX1 (scope): Per-item merge — each task item has its own MQ-merge block | core | HIGH | Aligns with existing per-item MQ structure from §2.3 | {source: none, value: null} |
| 90 | AUX | AUX2 (scope): Whole-task merge — one merge across all items | side | LOW | Loses per-item granularity | {source: none, value: null} |
| 91 | AUX | AUX3 (burden): Merge bears full burden (3 MQs emit naively; merge does all reconciliation) | core | HIGH | Simplest distribution; preserves MQ independence | {source: none, value: null} |
| 92 | AUX | AUX4 (burden): Each MQ bears partial burden (MQs check for contradiction with each other) | sub | MED | Distributes contradiction-detection; complicates MQ contracts | {source: none, value: null} |
| 93 | AUX | AUX5 (relation): Analogous to MultiScope's narrow-vs-wide reconciliation (paired interpretations of same task) | sub | MED-HIGH | Conceptual parallel; both reconcile across perceptions | {source: none, value: null} |
| 94 | AUX | AUX6 (relation): Analogous to sense-making's anchor-extraction (cross-perception structure) | sub | MED | Parallel: sense-making extracts cross-item anchors; merge extracts cross-MQ structure | {source: none, value: null} |
| 95 | AUX | AUX7 (relation): Analogous to runner-mediated alignment (21-12) — runner reconciles MQ2 with /surfacing; analogously merge reconciles MQs internally | sub | MED-HIGH | Same shape: a reconciler operates between perceiving and acting | {source: none, value: null} |
| 96 | AUX | AUX8 (Bootstrap state): No empirical data yet on MQ contradiction frequency at Bootstrap | core | HIGH | Honest-assessment marker; affects merge-adoption decision | {source: none, value: null} |
| 97 | AUX | AUX9 (Bootstrap state): Cannot validate merge-necessity-empirically without Early Operation evidence | core | HIGH | Calibration trajectory implication | {source: none, value: null} |
| 98 | AUX | AUX10 (cost): Adding merge adds cognitive cost to every Meta-question invocation; opportunity cost matters | sub | MED-HIGH | Pragmatic concern; weighs against universal-merge | {source: none, value: null} |
| 99 | AUX | AUX11 (failure mode): Merge can over-resolve (force coherence on irreconcilable perceptions); false-resolution risk | sub | MED-HIGH | Quality risk; aligns with honest-assessment principle | {source: none, value: null} |
| 100 | AUX | AUX12 (failure mode): Merge can under-resolve (miss subtle contradictions; emit "coherent" when not) | sub | MED-HIGH | Quality risk in opposite direction | {source: none, value: null} |
| 101 | AUX | AUX13 (process-layer hint): Merge would slot into the per-item Meta-question block; pass-2 placement is process-layer (OOS but flagged) | sub | MED | Out-of-scope but flag for follow-up | {source: none, value: null} |

---

## State Summary

### Territory-specification echo

Conceptual design space for MQ-aggregate-resolution operation in task-define, abstract-bounded by 5 inherited finding commitments + §2.3 spec + 3-type taxonomy from 2026-06-05_10-03 + bounded-extensibility rule.

### Purpose-specification echo

Decide whether MQ-aggregate-resolution belongs as a cognitive operation in task-define; if YES, design its essence (cognitive operation + perception target + output shape + taxonomy fit + downstream contract + pass-2 implication) at meaning-layer.

### Coverage map

| Region | Coverage | Aggregate relevance | Notes |
|---|---|---|---|
| CON | confirmed (9 items: 4 core, 4 sub, 1 side) | mostly-core | Contradiction classes enumerated; CON1, CON2 are seed examples; CON3-9 sweep alternative classes |
| MECH | confirmed (12 items: 6 core, 5 sub, 1 side) | mostly-core | Mechanism candidates exhaustively traversed including "do-nothing" variants (MECH5) and inversions |
| ESS | confirmed (9 items: 4 core, 4 sub, 1 side) | mostly-core | Essence candidates span reconciliation/synthesis/arbitration/annotation/meta-perception |
| DC | confirmed (7 items: 3 core, 3 sub, 1 side) | core+sub | Downstream contract candidates cover Rephrase, runner-/surfacing, and pass-2 consumer combinations |
| TF | confirmed (6 items: 3 core, 2 sub, 1 side) | mostly-core | Taxonomy fit candidates include 4th-type, cross-cutting, internal-to-MQ, separate-operation, post-MQ-refinement, inversion |
| P2 | confirmed (6 items: 3 core, 3 sub) | core+sub | Pass-2 implication candidates span re-run/permanent/post-context-only/both-passes |
| DET | confirmed (5 items: 1 core, 4 sub) | mixed | Detection mechanism candidates; default = always-run; alternatives = various detection schemes |
| BR | confirmed (5 items: 3 core, 2 side) | mostly-core | Bounded-extensibility rule (b) fit candidates |
| AL | confirmed (7 items: 2 core, 5 sub) | core+sub | Alternatives to needing merge; includes strong "do-nothing" candidates (AL2, AL3) |
| IH | confirmed (7 items: 6 core, 1 sub) | mostly-core | All 6 inherited commitments mapped; IH7 (process-layer) adds one more |
| NM | confirmed (9 items: 5 sub, 4 side) | mostly-sub | Name candidates; verdict-sum, MQ-merge, MQ-aggregate strongest |
| OUT | confirmed (6 items: 2 core, 4 sub-side) | core+sub | Output shape candidates |
| AUX | confirmed (13 items: 4 core, 9 sub-side) | core+sub | Auxiliary considerations including Bootstrap state, scope, burden, failure modes, conceptual relations |

### Confirmed-absent regions

None. All identified regions had at least one item surfaced. (No region was traversed and found empty.)

### Concept-names list

| Name | Type | Provenance | Gloss |
|---|---|---|---|
| MQ-aggregate-resolution | coined-term | inquiry seed | The general name for the operation being investigated |
| verdict-sum | coined-term (user-supplied) | source-input | User's proposed name; emphasizes aggregation + verdict-shape |
| contradiction class | coined-term | CON region | A class of MQ1+MQ2+MQ3 inter-perception conflict |
| Interpretive→Relational contradiction | coined-term | CON1 | Specific class observed in "from scratch" case |
| Interpretive→Structural contradiction | coined-term | CON2 | Intent invalidates scope perception |
| Structural→Relational contradiction | coined-term | CON3 | Scope-classification suggests low context but task's project-relation says high |
| within-Relational contradiction | coined-term | CON4 | MQ2's internal kinds-list inconsistency |
| three-way contradiction | coined-term | CON7 | All 3 MQs disagree |
| latent contradiction | coined-term | CON8 | Apparent agreement but downstream-revealed conflict |
| tacit-agreement-no-contradiction | coined-term | CON6 | Common case where 3 MQs align |
| runner-smart-aggregation | coined-term | MECH2 | Mechanism where runner resolves implicitly |
| MQ2-intent-aware-extension | coined-term | MECH3 | Mechanism where MQ2 gets a 3rd substance element |
| per-pair-conditioning rules | coined-term | MECH4 | Formal rule-set for pair-resolution |
| Rephrase-already-merges | coined-term | MECH5 / AL3 | The "do nothing" candidate |
| sequential MQ ordering | coined-term | MECH6 | Cascade firing instead of parallel |
| contradiction-detection-flag-with-defer | coined-term | MECH7 | Detection without auto-resolution |
| post-context-Validate/Refine-handles-it | coined-term | MECH8 / P2-4 | Cell 6 handles merge after /surfacing |
| universal verdict-sum | coined-term | MECH9 | Fully-general form of merge |
| conditional-merge | coined-term | MECH10 | Merge fires only on detection |
| per-MQ-self-checks | coined-term | MECH12 | Distributed contradiction-detection |
| reconcile | vocabulary | ESS1 | Resolve contradiction to one answer |
| synthesize | vocabulary | ESS2 | Merge into unified content |
| arbitrate | vocabulary | ESS3 | Pick a winner |
| annotate | vocabulary | ESS4 | Metadata-emission without modification |
| re-frame | vocabulary | ESS5 | Rewrite MQ answers holistically |
| meta-perceive | coined-term | ESS6 | Perceive the perception-set |
| coherence-check | coined-term | ESS7 | Verify MQ-set coherence |
| tension-surface | coined-term | ESS8 | Make contradictions explicit |
| reconcile-OR-surface | coined-term | ESS9 | Hybrid essence |
| meta-cognition | vocabulary | ESS6 | The cognitive class merge belongs to |
| 4th primary type | coined-term | TF1 | Adding a 4th type to taxonomy axis A |
| cross-cutting operation | coined-term | TF2 | Orthogonal to taxonomy types |
| Meta-question's internal aggregator | coined-term | TF3 | Merge as 4th internal step in Meta-question operation |
| separate cognitive operation | coined-term | TF4 | Merge as 6th task-define operation |
| post-MQ refinement | coined-term | TF5 | Sub-mode of Meta-question |
| pre-perception/framing inversion | coined-term | TF6 | Merge before MQs (rejected) |
| merge re-runs in pass-2 | coined-term | P2-1 | Merge fires in both passes |
| pass-1-merge-permanent | coined-term | P2-2 | Merge runs only pass-1 |
| pass-2-no-merge | coined-term | P2-3 | Strict variant (a) compatibility |
| merge-IS-Refine | coined-term | P2-4 | Merge IS cell 6 Refine |
| both-passes-merge | coined-term | P2-5 | Maximum coverage |
| merge-validation-sub-op | coined-term | P2-6 | Granular pass-2 sub-operation |
| always-run-merge | coined-term | DET1 | Default behavior |
| detect-then-merge | coined-term | DET2 | Detection-gated execution |
| kinds-overlap structural check | coined-term | DET4 | Specific detection mechanism |
| confidence-based detection | coined-term | DET5 | Confidence as merge-trigger |
| merge-constrains-Rephrase | coined-term | BR1 | Rule (b) fit |
| merge-constrains-runner-/surfacing | coined-term | BR2 | Preparation substrate replacement |
| Bootstrap state (no empirical merge data) | structural-reference | AUX8 | Honest-assessment marker |
| over-resolve / under-resolve failure modes | coined-term | AUX11+12 | Merge quality risks |

### Recency distribution

| Region | newest | oldest | no-mtime-count | total-items |
|---|---|---|---|---|
| CON | n/a | n/a | 9 | 9 |
| MECH | n/a | n/a | 12 | 12 |
| ESS | n/a | n/a | 9 | 9 |
| DC | n/a | n/a | 7 | 7 |
| TF | n/a | n/a | 6 | 6 |
| P2 | n/a | n/a | 6 | 6 |
| DET | n/a | n/a | 5 | 5 |
| BR | n/a | n/a | 5 | 5 |
| AL | n/a | n/a | 7 | 7 |
| IH | n/a | n/a | 7 | 7 |
| NM | n/a | n/a | 9 | 9 |
| OUT | n/a | n/a | 6 | 6 |
| AUX | n/a | n/a | 13 | 13 |

All items are possibility-mode candidates (no filesystem backing). All `recency annotation` = `{source: none, value: null}`. `items_with_mtime` = 0; `items_without_mtime` = 101.

### Frontier flags

- **F1** (region MECH): Are MECH1 (new merge field), MECH5 (Rephrase-already-merges), and MECH8 (post-context Validate/Refine) actually distinct, or do they collapse under structural analysis? Sensemaking should test this.
- **F2** (region TF): Does the choice between TF1 (4th primary type) and TF3 (internal to Meta-question) vs TF4 (separate operation) substantively differ at meaning-layer, or is it a structural-layer distinction? Test in sensemaking.
- **F3** (region P2): The pass-2 implication (P2-1 vs P2-3 vs P2-4 vs P2-5) directly engages the variant-(a) tension from 2026-06-05_10-03. Sensemaking must surface this.
- **F4** (region AL): AL2 (pre-context MQs inherently uncertain) and AL3 (Rephrase already merges) are the strongest "no-merge-needed" arguments. Critique should adversarially test these.
- **F5** (region ESS): The essence question (reconcile vs synthesize vs meta-perceive vs hybrid ESS9) is the meaning-layer core. Sensemaking must adjudicate.
- **F6** (region DET): The always-run-vs-conditional decision affects whether merge is a defined-operation or a sometimes-fires operation. Test in sensemaking.
- **F7** (region IH): The 6 inherited commitments must each be re-tested against any merge-adoption decision. Synthesis Trigger fires; sensemaking must plan re-testing.
- **F8** (region AUX): Bootstrap state (AUX8, AUX9) means merge-necessity cannot be empirically validated; decision must be principled-from-structure. Critique must respect this.
- **F9** (region CON): Contradiction class enumeration (9 items) may be incomplete; some classes may surface only under Early Operation. Open frontier.

### Workspace-populated status

`{populated: true, populated-at: 2026-06-05_12-XX, extent: 13 regions × ~101 items, possibility mode, abstract-bounded territory}`

### Re-invocation parameters

None suggested — the territory is comprehensively traversed; convergence achieved on first invocation.

---

## Telemetry

- **Mode:** possibility
- **Entry point:** signal-first
- **Boundary-discovery sub-phase fired:** NO (territory was abstract-bounded)
- **Cycles run:** ~13 (one per region)
- **Items enumerated:** 101
- **Items tagged at each relevance level:**
  - core: 38
  - sub: 49
  - side: 14
  - umbrella: 0
- **Convergence criteria status:** MET (territory exhaustively traversed at current resolution; lean-toward-inclusion applied; no uncertain-relevance items filtered)
- **Workspace-overload trigger:** NOT FIRED
- **Failure modes checked:**
  - LAYER 1 #1 Missed-relevance: not raised (coverage confirmed across 13 regions)
  - LAYER 1 #2 Surfaced-irrelevance: bounded-cost — downstream will filter
  - LAYER 1 #3 Over-coverage: borderline (101 items) but acceptable for first-pass; sensemaking can refine
  - LAYER 1 #4 Territory-mis-binding: not raised (abstract-bounded territory respected)
  - LAYER 1 #5 Workspace overload: not raised
  - LAYER 1 #6 Artifact under-specification: addressed (full schema populated)
  - LAYER 1 #7 Workspace-artifact desync: capture-at-moment applied
  - LAYER 1 #8 Recency-Equates-Idleness: N/A (no mtime data; possibility mode)
  - LAYER 1 #9 Recency-Bias-Filter: N/A
  - LAYER 2 #1 Interpretive-overstep: monitored — items are tagged, not interpreted; relational structuring is left for sensemaking
  - LAYER 2 #2 Purpose-loss: not raised (purpose is clearly meaning-layer merge-or-not + essence-if-yes)
  - LAYER 2 #3 Self-coupling-to-downstream: not raised
- **`items_with_mtime`:** 0
- **`items_without_mtime`:** 101
- **Self-assessment verdict:** **PROCEED**

Frontier flags F1-F9 emitted for sensemaking attention; territory comprehensively traversed at first-pass resolution; no LAYER 1 actionable failures observed.
