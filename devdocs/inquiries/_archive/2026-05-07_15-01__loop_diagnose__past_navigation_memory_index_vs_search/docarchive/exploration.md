# Exploration: Loop Diagnose - Past Navigation Memory Index Vs Search

## User Input

LOOP_DIAGNOSE on the correction chain:

- Prior: `devdocs/inquiries/2026-05-06_07-06__past_navigation_memory_file_index_feasibility/`
- Corrected: `devdocs/inquiries/2026-05-06_10-21__past_navigation_memory_index_vs_search/`
- Human correction: "but why do we need index if we can simply search the codebase and find all files... we know the file names afterall, at least regex searchable way we know."

Diagnostic concerns to probe specifically: Exploration under-testing the search alternative; Sensemaking overvaluing explicitness-as-artifact; Critique letting a duplicate mutable state source survive.

## Mode and Entry Point

Mode: mixed artifact + possibility exploration.

- Artifact territory: the eleven files of the prior inquiry plus the eleven files of the corrected inquiry — `_branch.md`, `_state.md`, `finding.md`, plus five archived discipline outputs each.
- Possibility territory: the space of failure-stage / shortcoming-type hypotheses that could explain the prior loop's outcome.

Entry point: signal-first. Three named hypotheses are pre-supplied (Exploration under-test, Sensemaking explicitness over-anchor, Critique duplicate-state survival). Probe each against the artifacts. After probing the named signals, jump-scan for unnamed hypotheses (loop framing, decomposition propagation, innovation candidate-set blindness, CONCLUDE compression error, context-elicitation drift, the user's own contribution).

## Exploration Cycles

### Cycle 1 - Scan The Two Goal/Question Frames

Scan:

- Prior `_branch.md` Question: "Should Homegrown keep a record of all Navigation-related file creations as a `PastNavigationMemoryFile` index, and is that easier and feasible?"
- Prior `_branch.md` Goal: "decide whether a `PastNavigationMemoryFile` index is worth adding, what problem it solves, what it must contain, when entries are added, who updates it, whether it is feasible without becoming stale manual bookkeeping, and whether it should replace or merely assist Route Memory Review discovery."
- Corrected `_branch.md` Question: "If Homegrown can find PastNavigationMemoryFile candidates by searching known filenames and patterns, does it still need a maintained PastNavigationMemoryFile index?"

Signals:

- Prior Goal lists seven sub-clauses. Six are design questions about the index (problem solved, contents, addition timing, owner, feasibility against staleness, replace-or-assist). Only one ("worth adding") is the should-it-exist question.
- Prior Question already names "all Navigation-related file creations" as a candidate scope inside the question itself.
- Prior Question's "easier and feasible" pairing has no explicit comparator. "Easier than what?" is unstated.
- Corrected Question explicitly states the comparator (search vs index).

Probe result:

The prior framing pre-encoded "we are designing an index" as the dominant frame. Six-of-seven design clauses tilt every downstream discipline toward design questions about the artifact rather than need questions about the artifact. The "easier" comparator was implicit (presumably "easier than ad hoc rediscovery"), but it was never made explicit, so the loop never tested "easier than a documented search contract."

Confidence: confirmed for the framing observation. Inferred for the causal claim that this biased downstream stages — the inference is weak in isolation but compounds with later cycle evidence.

### Cycle 2 - Probe Hypothesis A: Exploration Under-Tested The Search Alternative

Scan prior `docarchive/exploration.md`:

- Cycle 1 reads existing route-memory rules and confirms detection problem is real.
- Cycle 2 reads current Navigation intake/warm-up files.
- Cycle 3 reads existing index/ledger precedents (`_frontier.md`, `_branches.md`, outcome reviews) — establishes the "index as discovery aid" pattern.
- Cycle 4 scans current artifact population — finds exactly one active candidate file.
- Cycle 5 enumerates six index shapes; one of them is "Generated-on-demand scan report with no durable index." Probe result for that candidate: "A generated-on-demand report avoids stale manual bookkeeping but still has discovery cost every run."

Compare to corrected `docarchive/exploration.md`:

- Cycle 2 actually executes the search with concrete patterns and reports the result: one candidate file (`devdocs/navigation/next_load_bearing_after_navigation_warmup.md`).
- Cycle 3 actually tests search failure modes (loose regex matches `homegrown/navigation/references/navigation.md` as false positive).
- Cycle 4 reads existing protocols and confirms most artifact families are deterministically searchable because output names are protocol-defined.
- Cycle 5 distinguishes what search can know from what it can't, identifying classification (not physical discovery) as the real weak spot.

Signals:

- The prior listed "generated-on-demand scan report" as a candidate but did not run it. The phrase "discovery cost every run" was a qualitative weakness assertion, not an empirical measurement.
- The prior's Cycle 4 already knew the active candidate count was one. That fact is the same fact the corrected Cycle 2 used to refute the maintained-index need. The prior had the data and did not use it that way.
- The prior never tested whether search failure modes are bad enough to justify maintained state.
- The corrected exploration converts "discovery cost every run" from assertion to measurement. The cost at current size is one match across one pattern set on roughly 184 active markdown files. That is not material.

Probe result:

The prior Exploration listed the search candidate at scan resolution but never probed it. The "discovery cost" objection was framed without measurement, so it could not be defeated. The prior had the empirical fact (one active candidate) sitting in Cycle 4 and did not connect it to the search-cost question.

Confidence: confirmed. Multiple artifacts converge: prior's Cycle 5 named-but-did-not-probe; prior's Cycle 4 had the data the probe would have used; corrected Cycle 2 ran the missing probe.

### Cycle 3 - Probe Hypothesis B: Sensemaking Overvalued Explicitness-As-Artifact

Scan prior `docarchive/sensemaking.md`:

- Phase 1 / Constraints includes: "Homegrown values explicit durable Markdown artifacts." (Stated as a constraint, not interrogated.)
- Phase 2 / Human-User Perspective: "The user is frustrated by vague terms like 'source' and wants named, explicit artifacts. The user's preference is not minimal files; it is explicitness that makes the system understandable and robust. The index gives a human-readable place to ask 'what old Navigation memory exists?'"
- Phase 2 / Definitional Perspective: "Existing Homegrown index patterns say indexes are discovery aids, not authority." (Cites the index-as-pattern, not the alternative-to-index pattern.)
- Phase 3 Ambiguity 3 ("Is the index feasible or will it become stale manual bookkeeping?") resolves with safeguards (creation-time updates plus validation) but does not ask "could explicitness be carried by a documented procedure instead of a maintained file?"
- SV6: "Homegrown should keep a `PastNavigationMemoryFile` index if it is introduced as a narrow discovery registry."

Compare to corrected `docarchive/sensemaking.md`:

- SV1 explicitly names the missed reframe: "The question is not 'explicit artifact or no explicit artifact.' The real question is whether explicitness should live in a maintained list or in a documented search contract."
- Phase 1 / Foundational Principles: "Explicitness means the mechanism is inspectable, not necessarily that every derived result has a permanent global file."
- Phase 3 Ambiguity 2 ("Is search less explicit than an index?") explicitly tests the substitution: "The failure is not search itself; the failure is undocumented search. A protocol section named `PastNavigationMemoryFile Discovery Search` with exact patterns, exclusions, and output expectations is explicit."

Signals:

- The prior anchored "explicitness" to a property of artifacts (durable Markdown file) without asking whether the property could be carried by a procedure.
- The prior listed the user's explicitness preference as a Human-Perspective anchor and never tested its strongest counter-interpretation. (Phase 3 has four ambiguity pairs, none of which is "Is the index actually the right mechanism for explicitness?")
- The prior's Foundational Principles include "Indexes are pointers/discovery aids unless explicitly designed as authoritative ledgers" but do not include "Explicitness is a property of mechanisms, not necessarily of files."
- The prior treated Homegrown's Markdown habit as a constraint that fixes the form of the answer, rather than as a value that has alternative mechanisms.

Probe result:

The prior Sensemaking conflated explicitness-as-property with maintained-artifact-as-mechanism. The Definitional Perspective cited Homegrown's index pattern but did not cite the alternative pattern (documented protocol procedure with optional generated artifacts). When Ambiguity 3 raised the staleness concern, the resolution added safeguards rather than reopening the form of the answer. SV4-SV6 then ratified "narrow discovery registry" without ever testing "documented search procedure."

Confidence: confirmed. Multiple artifacts converge: the missing reframe is named in the corrected SV1 word-for-word, and the prior never tested it.

### Cycle 4 - Probe Hypothesis C: Critique Let A Duplicate Mutable State Source Survive

Scan prior `docarchive/critique.md`:

- Six dimensions with weights: Scope Correctness 20, Authority Separation 25, Discovery Usefulness 15, Feasibility And Update Ownership 20, Robustness Against Staleness 15, Rollout Coherence 5.
- Critical dimensions: Authority Separation, Feasibility And Update Ownership, Robustness Against Staleness.
- Authority Separation is operationalized as "the candidate cannot be mistaken for current route truth" — about field content (route disposition), not about mechanism redundancy.
- Robustness Against Staleness is operationalized as "stale or missing index entries can be detected, repaired, or safely bypassed" — about repair, not about avoiding duplicate state.
- Candidate B prosecution: "A global index can become false authority. If it says nothing about a file, a runner may infer no file exists." (Names false-absence risk but routes it back to authority, not to mechanism redundancy.)
- Candidate A prosecution ("No Index, Scan Each Time"): "Recreates the discovery friction. Requires each runner to remember all active patterns." (Treats search as informal-by-default; does not consider documented search.)
- Candidate E (the survivor) collision: "The prosecution is answered by narrow scope, anti-authority wording, update-failure behavior, and scan/backfill."

Compare to corrected `docarchive/critique.md`:

- Five dimensions: Discovery Correctness 25, Explicitness 20, Stale-State Resistance 25, Operational Feasibility 15, Route Memory Boundary 15.
- Critical dimensions: Discovery Correctness, Stale-State Resistance, Route Memory Boundary.
- Stale-State Resistance is operationalized as "does not create a second mutable truth source that can silently drift" — explicitly about mechanism redundancy.
- Candidate A (Maintained Global Index) prosecution: "duplicates a result that can be derived from known filenames and paths."

Signals:

- The prior dimension Authority Separation (highest weight at 25%) covered field-level authority but not mechanism-level redundancy. The corrected dimension Stale-State Resistance (also 25%) explicitly named mechanism-level redundancy as the core risk.
- The prior's Robustness Against Staleness was framed as a remedial property (can detect/repair stale entries) rather than as a preventive property (avoid creating state that can become stale). The framing assumed staleness is acceptable if it is fixable; the corrected framing treats avoidable duplicate state as the design boundary.
- The "scan/backfill required for safety" was treated by the prior as a strength of Candidate E. In the corrected loop, the same observation flips polarity: if scan is required for safety, the maintained index is supplemental rather than primary, so the index itself is the redundancy.
- The prior never generated a "documented search contract" candidate, so the Critique was deciding among Candidates A through F where A was "ad hoc scan" and the documented-search alternative was structurally absent. The Critique's coverage map looks complete relative to its candidate set, but the candidate set was incomplete.

Probe result:

The prior Critique's dimensions did not include "minimum-state preservation" or "duplicate-derivable-state risk" as a primary risk axis. Authority Separation handled content but not mechanism. Robustness Against Staleness handled repair but not prevention. The "scan/backfill required" property hid rather than exposed the design flaw — when a fallback is required for safety, the artifact relying on it is supplemental.

But the Critique's verdict is partly downstream of Innovation. The Critique can only weigh candidates Innovation generates. The "documented search contract" was missing from the prior's candidate set, so this is mixed attribution: dimensions were under-articulated AND the candidate set lacked the synthesis.

Confidence: confirmed for the dimension-level shortcoming. Mixed attribution between Critique (dimension articulation) and Innovation (missing candidate). The dimension shortcoming is independently verifiable; the Critique would have flagged the synthesis gap if its dimensions had named duplicate-derivable-state.

### Cycle 5 - Jump Scan: Probe Decomposition For Question-Tree Lock-In

Scan prior `docarchive/decomposition.md`:

- Question Tree Q1: "What Counts As A PastNavigationMemoryFile Index Entry?"
- Q2: "What Should The Index Store?"
- Q3: "Where Should The Index Live?"
- Q4: "Who Updates The Index, And When?"
- Q5: "How Does Route Memory Review Consume The Index?"
- Q6: "How Is The Index Validated Or Backfilled?"
- Q7: "When Should Homegrown Add This?"

All seven questions presuppose "the index is the answer." The decomposition does not include "Should the index exist at all?" or "Is the index the right object for this discovery problem?"

Compare corrected `docarchive/decomposition.md` Question Tree: search-scope, false-positive control, what to record, review consumption, when an index becomes justified, where the protocol patch lands. Q5 explicitly is "When Would A Maintained Index Become Justified?" — the should-it-exist question is preserved and answered as deferred.

Signals:

- The prior Decomposition's question tree entrenched the artifact in every sub-question. By Q1 the index was a given.
- This is downstream from Sensemaking's anchor (durable Markdown is the form), not an independent failure. Decomposition propagated the anchor into a coupling map that assumed the artifact existed.
- Boundary Validation in the prior decomposition reports "the wrong decomposition 'one generic Navigation file-creation index' because scope and review authority would be tangled" — it tested one wrong decomposition and missed the more salient wrong decomposition (treating "design the index" as the problem rather than "decide the discovery mechanism").

Probe result:

Decomposition is implicated as a propagator, not an originator. Once the Sensemaking anchor was set, the question tree could not interrogate the form of the answer because every sub-question had the form pre-supplied. This is not a separate failure — it is a downstream amplifier of Hypothesis B.

Confidence: confirmed as a downstream amplification effect. Standalone Decomposition culpability is medium because Decomposition's job is to partition the problem as understood by Sensemaking; if Sensemaking hands it the wrong frame, the partition will be wrong.

### Cycle 6 - Jump Scan: Probe Innovation For Candidate-Set Blindness

Scan prior `docarchive/innovation.md`:

Six candidate designs:

- A: No Index, Scan Each Time (killed as default; preserved as fallback).
- B: Global PastNavigationMemoryFile Index (refined to non-authoritative version).
- C: Append-Only Creation Event Log (deferred).
- D: Per-File Metadata Only (refined into validation support).
- E: Hybrid Registry Plus Scan Refresh (survivor).
- F: Route Memory Review Consumed-Set Only (preserve as review output requirement).

Mechanisms applied: 4/4 generators, 3/3 framers. All converged on the hybrid.

Compare corrected `docarchive/innovation.md`:

- Candidate C: "PastNavigationMemoryFile Discovery Search Contract" — survives.
- Candidate D: "Discovery Search Plus Run-Local Candidate Report" — survives as output mode.
- The corrected loop's Inversion mechanism produced: "Instead of 'create an index so we do not search,' search so we do not create an index."
- The corrected loop's Lens Shifting produced: "Treat the filesystem as the source of truth and the search pattern as the explicit artifact."

Signals:

- The prior's Candidate A is "No Index, Scan Each Time" (informal scan). The prior did not have a Candidate A* "No Index, Documented Search Contract." Six candidates listed; the structurally critical seventh was absent.
- The prior's Inversion mechanism produced: "Instead of 'find old Navigation memory before review,' make every Navigation memory artifact declare itself" — front-matter markers, not search. The inversion went one step (from index to file metadata) but not two (from index to search-as-contract).
- All seven mechanisms in the prior converged on the hybrid because the candidate space they were converging within already excluded the documented-search alternative. Convergence was real but on a truncated possibility space.

Probe result:

Innovation generated a candidate space that lacked the synthesis the user later supplied. The mechanism mix worked correctly within that space; the space itself was bounded by the Sensemaking anchor (durable artifact) and the Decomposition frame (design the index). This is downstream from Hypothesis B but is a separate observable failure: the candidate set is what Critique evaluated.

Confidence: confirmed. The missing candidate is named in the corrected innovation.md and structurally absent from the prior's six.

### Cycle 7 - Jump Scan: Probe CONCLUDE And Loop Framing

Scan prior `finding.md`:

- Frontmatter says `refines:` two prior findings; `impacts:` four protocol files.
- Finding Summary leads with "Yes, Homegrown should add a `PastNavigationMemoryFile Index`, but it should not index every Navigation-related file."
- Section 1 ("The index should exist, but it should be narrow") locks in the artifact framing.
- The Reasoning section reads: "The user's easier-index instinct survived. A known registry is easier than repeatedly rediscovering route-memory files..." — this resolves "easier than" as "easier than ad hoc rediscovery," confirming the unstated comparator chosen by the loop.
- Open Questions / Refinement Triggers are about index scope, not about whether to use an index at all.

Signals:

- CONCLUDE compiled the discipline outputs faithfully. The verdict matched what Critique signaled. The finding's structure is correct as a synthesis of what the loop produced.
- The framing-level shortcoming sits earlier (in `_branch.md`'s Goal and in Sensemaking's anchor); CONCLUDE inherited the frame rather than introducing it. The "easier than ad hoc rediscovery" resolution in Reasoning is the explicit reading of the comparator the loop never made testable.

Probe result:

CONCLUDE is not the failure surface. The framing failure is upstream of CONCLUDE. The `_branch.md` Goal pre-encoded six design clauses for one need clause; that frame propagated through every discipline. Loop framing is therefore a real but secondary attribution: it shaped the corridor inside which Sensemaking anchored.

Confidence: confirmed. The framing gradient is observable in `_branch.md` (six-of-seven clauses) and in the explicit Reasoning resolution.

### Cycle 8 - Possibility Scan: Unlisted Failure Hypotheses

Scan possibility space for hypotheses not in the diagnostic_goal:

- H-Loop-Framing: Goal pre-encoded design questions. Confirmed via Cycle 1 + Cycle 7.
- H-Decomposition-Propagation: Question tree presupposed the artifact. Confirmed via Cycle 5.
- H-Innovation-Set-Blindness: Candidate set missing documented-search synthesis. Confirmed via Cycle 6.
- H-CONCLUDE-Compression: Considered. Rejected — Cycle 7 shows CONCLUDE was faithful.
- H-Context-Elicitation: The user's original prompt asked "easier" without naming a comparator. The loop did not surface "easier than what?" as a clarification before proceeding. This is a runner-level shortcoming (MVL+ does not have a clarification-question step before scope check). Confirmed at low specificity to this discipline; routes to MVL+ runner / context-elicitation, not a single discipline.
- H-Same-Day Cross-Inquiry: The two inquiries were created roughly three hours apart. The corrected one is plausibly the user's second attempt with the search comparator made explicit. This is not a failure of the prior loop per se; it is the human correction signal arriving after the loop ran. Treat as the trigger event, not a hypothesis.
- H-MVL+-Loop-Boundary: The prior MVL+ ran one iteration to convergence. With the dimensions and candidate set it had, the convergence was internally consistent. Adding a second iteration without new context would have produced the same result. The corrective lever is at the framing/anchor level, not at the iteration count.

Probe result:

Three additional hypotheses survive: loop framing (H4), decomposition propagation (downstream of H2 but observable), innovation candidate-set blindness (downstream of H2 but observable). One additional hypothesis at low specificity: context-elicitation (the runner did not ask "easier than what?" before scope check).

Confidence: jump scan complete; no surprise outside the stated three concerns plus framing/runner-level signals.

## Convergence Check

Frontier stability: stable. New scans repeat the same boundaries: the prior loop's anchor was set early (framing + Sensemaking) and propagated through Decomposition and Innovation; Critique's dimensions did not include the structural risk that would have flagged the redundancy.

Declining discovery rate: yes. Cycles 5-8 confirmed propagation effects but did not introduce new failure types.

Bounded gaps: mostly bounded. Open question: how strongly each downstream stage failed independently versus by inheritance. Sensemaking's anchor sits upstream of Decomposition, Innovation, and Critique; there is partial independence (Critique's dimension list could have flagged the redundancy independently), but the dominant path is upstream-to-downstream cascade.

## Territory Overview

The territory has three regions:

1. **Pre-discipline framing.** `_branch.md` Goal clause distribution, the user's prompt phrasing, runner-level context-elicitation behavior. Pre-encodes the search corridor.
2. **Stage-level shortcomings.** Exploration probe gap, Sensemaking anchor, Decomposition tree lock-in, Innovation candidate-set blindness, Critique dimension articulation. Each is observable in its discipline output.
3. **Loop boundary.** CONCLUDE is faithful. Iteration count is one. Cross-inquiry comparison is the corrective evidence, not part of the original loop.

The corrective lever sits in Region 1 (framing) and the upstream end of Region 2 (Sensemaking anchor). Downstream stage shortcomings are partly inherited.

## Inventory

Confirmed shortcomings (multiple-artifact convergence):

- Exploration: search candidate listed but not probed (Cycle 5 of prior); empirical data sat in Cycle 4 unconnected.
- Sensemaking: explicitness anchored to durable-artifact form rather than mechanism property; no ambiguity collapse interrogated the form of the answer.
- Critique: dimension list lacked duplicate-derivable-state as primary risk; "scan required for safety" interpreted as strength rather than evidence of redundancy.
- Loop framing: `_branch.md` Goal six-of-seven design clauses bias the corridor.

Probable shortcomings (downstream amplification):

- Decomposition: question tree presupposed the artifact (propagated from Sensemaking).
- Innovation: candidate set missing documented-search synthesis (propagated from Sensemaking + Decomposition).

Considered and not supported:

- CONCLUDE compression error: not supported. CONCLUDE was faithful.
- Iteration count: not supported. One iteration with the same frame would not have changed the result.

Lower-specificity:

- Context-elicitation: the runner did not surface "easier than what?" before scope check. Routes to MVL+ runner behavior; not isolated to a discipline.

## Signal Log

- Strong: prior Exploration Cycle 5 named the search candidate; Cycle 4 had the data; the connection was not made.
- Strong: prior Sensemaking SV1-SV6 never reframed explicitness from artifact-form to mechanism-property.
- Strong: prior Critique dimensions did not name mechanism-level redundancy.
- Strong: prior Decomposition Q1 presupposed the artifact.
- Strong: prior Innovation candidate set lacked documented-search-as-explicit-mechanism.
- Strong: corrected SV1 names the missed reframe word-for-word.
- Strong: corrected Critique dimension Stale-State Resistance names duplicate mutable truth source as the core risk.
- Medium: prior `_branch.md` Goal clause distribution biased the corridor.
- Medium: corrected loop's Inversion mechanism produced the documented-search synthesis; prior loop's Inversion went only as far as front-matter markers.
- Weak: context-elicitation gap (runner could have asked "easier than what?").

## Confidence Map

Confirmed:

- Hypothesis A (Exploration under-probe): named-but-not-probed pattern is documented in prior Cycle 5 and absent in corrected Cycle 2.
- Hypothesis B (Sensemaking explicitness anchor): durable-artifact constraint stated in Phase 1 and propagated through SV1-SV6 without interrogation; corrected SV1 names the missed reframe.
- Hypothesis C (Critique duplicate-state survival via dimension blindness): dimension list does not include mechanism-level redundancy; corrected dimension list does.
- Hypothesis D (Loop framing): Goal clause distribution observable; explicit "easier than ad hoc rediscovery" reading appears in prior Reasoning section.

Scanned:

- Decomposition propagation effect.
- Innovation candidate-set blindness.

Inferred:

- Cascade structure: Hypothesis B is upstream; Decomposition and Innovation are amplifications; Critique is partly independent (its dimension list could have flagged the redundancy regardless of candidate set, but only if mechanism-redundancy were a named dimension).
- The framing-level shortcoming (Hypothesis D) is the most upstream, but it is also the one most easily defended as "the user's question was specific" rather than "the loop pre-encoded the answer."

Unknown:

- Whether the corrected loop's success generalizes to other correction chains. One correction chain is not enough to warrant fundamentals rewrites (per LOOP_DIAGNOSE guardrails).
- Whether the user's phrasing "easier" is reliably parseable as a comparator-elicitation trigger across future inquiries.

Confirmed absent:

- CONCLUDE compression error.
- Independent Decomposition or Innovation failure not reducible to upstream propagation.

## Frontier State

Closed enough:

- Four confirmed-and-named hypotheses (A, B, C, D).
- Two amplification effects (Decomposition, Innovation).
- One lower-specificity routing (context-elicitation).

Open:

- Exact partition of confidence between independent Critique failure and inherited candidate-set effect.
- Whether maintenance candidates should target framing (Goal-clause discipline), Sensemaking (explicitness reframe), Critique (dimension list audit), or all three.

## Gaps and Recommendations

Pass to Sensemaking:

- The hypothesis space partitions into upstream causes (framing, Sensemaking anchor) and downstream amplifications (Decomposition, Innovation, Critique-without-dimension).
- Confidence is HIGH for A, B, C; MEDIUM-HIGH for D; MEDIUM for Decomposition/Innovation amplifications.
- Maintenance candidates should be narrow: a goal-clause-discipline rule, an explicitness-reframe prompt, a critique-dimension audit. Avoid proposing fundamentals rewrites from one correction chain.

Preliminary diagnostic shape:

```text
upstream: framing (D) + Sensemaking anchor (B)
        |
midstream: Decomposition Q-tree lock-in
        |
downstream: Innovation candidate-set blindness + Critique dimension blindness (C)
        |
trigger: human correction
        |
correction: corrected loop produces documented-search synthesis
```

The exact root cause is not isolated to one discipline. The dominant path is Sensemaking-anchor-then-cascade. The most surgical maintenance lever is at the Sensemaking-anchor or framing layer, not at downstream stages.
