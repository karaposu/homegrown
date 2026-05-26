---
status: active
model: claude-opus-4-7[1m]
effort: max
---

# Finding: Biggest Next Gain Toward Breakthrough

## Question

The Homegrown project (a cognitive harness installed inside Claude Code or Codex, restructuring how the underlying LLM thinks via typed cognitive disciplines + a graduated 9-axis autonomy ladder + three temporal layers of quality awareness) has matured to **Level 0 reality**: 11 disciplines, 9 protocols, and 1 shared-vocabulary contract are shipped, ~30 findings exist in the corpus, and the human is the meta-loop. The user invoked `/MVL+` (the project's Extended Cognitive Loop — Exploration → Sensemaking → Decomposition → Innovation → Critique) on this question, plus left a note-to-self in `cognitive_harness/next_question_to_ask.md` saying: *"what is next load bearing development for our endgoal that once established my job as developer will be relaxed and easier."*

The question this inquiry answers, in one sentence: **what single buildable next move — startable immediately — would produce the largest gain in capability, autonomy, or human-burden-reduction per unit of effort, toward this project's next breakthrough?**

The goal of the answer: a ranked verdict naming the highest-leverage move plus ≥2 close alternatives, actionable enough that the user can start now — not "explore X" but "build/wire/ship X" with a concrete first step named.

## Finding Summary

- **The recommended move is a sequenced three-step plan**: (1) add a Prediction section to the project's inquiry template, then (2) wire an isolated Navigator subagent after each `/MVL+` run, then (3) ship an outcome-tracking ledger that records what each finding's downstream effect turned out to be. The first step is a single-line template edit and can ship in a 15-minute session. The second is a half-day wiring change. The third is an hours-long schema design plus a write hook in the existing inquiry-conclusion protocol.

- **The first step (Prediction-section edit) is the smallest and most universally applicable**: it costs 1–2 sentences per future inquiry (the user writes their pre-loop hunch on the question's answer), and starts producing calibration data — finding-versus-prediction comparisons — from the very next inquiry forward. This is the minimum viable Predictive RC (the Predictive Regression Checker — the real-time hunch layer that, in the project's named Baldwin self-improvement cycle, predicts at write-time what the Retrospective RC will later confirm or contradict). The Predictive RC is currently fully specified at `docs/intuit.md` but not shipped as a slash command; manual-prediction-via-template is its smallest possible standalone substitute.

- **The second and third steps (Navigator L1 + outcome ledger) together advance the project from Level 0 to Level 1 on its autonomy ladder** *(per `docs/autonomy_ladder.md`'s 9-axis 6-level meta-loop ladder — L0 = human plays every meta-role; L1 = an isolated Navigator subagent enumerates next directions after each inquiry, but the human still selects and runs)*. Together they shrink the developer's orchestration burden AND lay the data substrate the Retrospective RC layer of the Baldwin cycle needs to eventually close.

- **`/intuit` Phase A — the largest-effort candidate evaluated, the one that ships the Predictive RC discipline at full depth — was killed for this iteration with a revival trigger**: when the outcome-ledger entries accumulate to roughly 10–20 per discipline (calibration-ready), `/intuit` becomes the right move. At current `/MVL+` cadence (~6 inquiries per day; ~30 corpus findings total), the calibration gate is reachable in 3–6 months if the recommended ledger ships now. Building `/intuit` Phase A today, before the ledger exists, produces a discipline whose calibration substrate doesn't yet exist — months of effort with payoff far beyond the user's attention window.

- **A conditional fourth move is offered**: apply Homegrown to a genuinely hard external problem (a real software architecture decision, an open research question, a complex life choice). This is the only candidate that addresses the project's load-bearing Self-Reference Blindness risk — the project today evaluates its own design via its own disciplines, so the verdict landscape is closed-loop. External testing grounds the project's self-improvement claims empirically. This move is conditional on the user naming a specific external problem; the verdict defers to user choice on whether to add this parallel track.

- **The verdict is a three-tier choice keyed to the user's effort budget**: the smallest tier is "just the Prediction-section edit" (15 minutes, immediate calibration-data production, no autonomy advancement); the default tier adds Navigator wiring and the outcome ledger (a week's work, multi-dimensional gain); the largest tier adds the external-problem test as a parallel track (the same internal week's work plus external execution). The user picks the tier; the finding does not unilaterally commit.

## Finding

### Why this question matters now

Past breakthroughs in the project have come from inquiry chains that progressively refined a conceptual frame — the autonomy-ladder elaboration, the typed-primitive-substrate audit, the project-identity-and-milestone-ordering reframe. Each was a conceptual move produced by running `/MVL+` (or its precursors) on a question. The recent inquiry burst of May 15–16 (six inquiries in two days on safety substrate, self-improvement-rate measurability, the structural-check-tool decision, safety-substrate measurement-aware design, the sensemaking-spec workshop promotion, and now this one) is consolidation work — the project is wrapping up several frames that surfaced earlier in May. The question "what's the biggest next gain toward another breakthrough" arrives right as that consolidation completes.

The framing has two stacked readings the inquiry had to reconcile. The first reading is the historical-pattern one: past breakthroughs were conceptual reframes, so the next one will be too, and the biggest gain is whatever inquiry-chain move produces the next reframe. The second reading is the user's own framing in the note-to-self: "developer's job relaxed and easier" — i.e., moves that reduce the human-in-the-loop burden. These two readings can diverge sharply on what candidate they favor; the inquiry's first job was to reconcile them.

### How the verdict was reached

Exploration mapped the candidate space: 17 candidates across 7 regions (safety substrate; discipline architecture; the unshipped Predictive RC discipline; autonomy-ladder advancement; calibration via more inquiries; conceptual reframes; meta-governance) plus 3 hybrid moves. Two user-articulated breakthrough hypotheses surfaced from `docs/possible_breakthroughs/` that were NOT in the project's road map — a *Stage-2 dynamic loop* (a meta-decision discipline at the end of `/MVL+` that decides whether and how to run a second pass with rearranged structure) and a *discipline-ordering refinement* (e.g., adding `/comprehend` between `/explore` and `/sense-making`, or moving `/decompose` before `/sense-making` to partition the input first). Both are conceptually novel relative to the road map and merit inquiry-chain follow-up.

Sensemaking reconciled the two breakthrough framings. The conclusion: "breakthrough" is multi-typed — conceptual reframes are ONE type (the historical pattern), but autonomy-step advancements, cycle-closing infrastructure builds, and discipline-architecture restructures are equally valid types per the project's own definition of itself in `docs/desc.md`. "Biggest gain" is multi-dimensional leverage: capability gain plus autonomy advancement plus burden reduction plus downstream-unlock, divided by effort. The project's phase is late-consolidation possibly transitioning to pre-breakthrough; the right verdict respects both modes simultaneously.

Decomposition partitioned the verdict-formation work into five pieces: per-candidate profiles (small, parallel), dependency topology, hybrid generation, sequencing, and concrete-action specification. The Q-tree's preconditions surfaced four shared assumptions (the candidate set defined by Sensemaking; leverage as a formula; user-decision factors as time horizon plus risk tolerance plus effort budget plus phase preference; and the late-consolidation phase claim).

Innovation expanded the candidate set via all seven mechanisms. Strong convergence emerged on three distinct moves:

- Five mechanisms converged on the *Navigator-L1-plus-outcome-ledger paired hybrid* (Sensemaking's default plus the Absence-Recognition gap-focus plus the Lean Minimum-Viable-Capability transfer plus the Operations-Research bottleneck-attack transfer plus the WSJF cost-of-delay-divided-by-job-duration scoring).
- Three mechanisms converged on the *Prediction-section template edit* (the Pre-registration domain transfer from research, the Lean Minimum-Viable-Baldwin-cycle transfer, and the Operations-Research bottleneck-attack transfer).
- Three mechanisms converged on a bundled three-step bottleneck attack (outcome ledger plus predictions plus cross-finding comparison).

Critique then evaluated all 12 candidates (the original five from Sensemaking plus four new from Innovation plus three emergent assemblies) against a nine-dimensional fitness landscape that included a project-specific Self-Reference-Blindness-mitigation axis. The clean SURVIVE emerged as the *Prediction-section edit plus Navigator L1 plus outcome ledger*, sequenced — formally an assembly of the three smallest-effort calibration-enabling moves.

### Why this specific sequence is right

The three steps are arranged smallest-first by design. Each is independently valuable; later steps amplify earlier ones.

The Prediction-section edit is the smallest because it is one line of template change plus one short comparison step in the inquiry-conclusion protocol. It produces NEW calibration data — finding-versus-prediction comparisons — from the very next inquiry forward. The user's intuition about what a `/MVL+` run will produce gets externalized into a checkable form. Wrong predictions are NOT bad; they are the data signal — they reveal where the user's intuition mis-fires, which is exactly the kind of pattern a future Predictive RC discipline will need to calibrate against. Critique's prosecution challenged this move ("1–2 lines of overhead per inquiry; the user might write wrong predictions"); the defense inverted the prosecution: wrong predictions ARE the data, so the prosecution actually supports the proposal.

The Navigator-L1 wiring is the medium-effort step because the spec already exists at `cognitive_harness/navigation/SKILL.md` and the warming-context files exist at `cognitive_harness/navigation/warmup/`. What's missing is the invocation: after each `/MVL+` ITERATION-COMPLETE-YES, an isolated Navigator subagent should read the just-completed inquiry's finding (plus warming context) and write a `navigation_observer.md` enumerating typed next directions. The human stays Selector and Runner; the Navigator role is automated. This is the project's named L0-to-L1 transition per `docs/autonomy_ladder.md`. The transition's gate to L2 ("≥10 navigation maps with explicit selection rationale captured at L1") is reachable in 1–2 months at current cadence — calibration data builds while the user uses the system normally.

The outcome ledger is the medium-effort step because it requires a schema decision and a write integration. Recommended initial schema: a single append-only file at `devdocs/outcome_ledger.md` with fields per finding (path, expected_effect, observed_effect_at_T+N initially empty, calibration_note); the inquiry-conclusion protocol appends a stub entry at finding compilation; a future inquiry on outcome review appends the observed_effect when downstream consequences play out. This is the Retrospective RC layer's foundation — not the full discipline, but the data substrate any Retrospective RC discipline will need. Without this ledger, the Baldwin self-improvement cycle cannot close even when the Predictive RC discipline ships.

### Why the largest candidate was killed

`/intuit` Phase A — the proposal to ship the Predictive RC at full depth as a slash command with eight primitive cards, a corpus-audit admission gate, structured relational abstractions, and multi-sample consensus — has the strongest structural argument of any candidate. It is the project's named load-bearing substrate for the Baldwin cycle per `docs/desc.md`. The reason it was killed for THIS iteration is timing, not architecture. The discipline's Phase D maturity requires N≥30 per discipline in the calibration corpus; today the corpus is ~30 findings total, distributed across all eleven disciplines, so per-discipline calibration is near zero. Shipping `/intuit` Phase A now means a multi-month build to produce a discipline whose calibration data won't accumulate to maturity for roughly a year at current cadence. The discipline would sit, useful in principle, calibrating slowly in practice.

The revival trigger is empirical: when the outcome-ledger entries (the second medium-effort step above) reach ~10–20 per discipline, calibration is ready and `/intuit` Phase A's build cost matches an arrived-at-payoff window. The path from now to that gate IS the recommended sequence — the prediction-capture step plus the ledger build start the data accumulation that justifies `/intuit`'s eventual build.

### Why an external-problem test is a real but conditional fourth move

The project today evaluates its own design via its own disciplines. This is Self-Reference Blindness in Sensemaking's named failure-mode catalog: the evaluation tool and the thing being evaluated share conceptual framework. Today's inquiry is itself an instance — `/MVL+` was used to evaluate which `/MVL+`-related moves to make next. The verdict survives self-reference because external grounding was applied (multi-mechanism convergence; the corpus state as independent observable; the user's separately-authored note-to-self as independent framing), but the deeper mitigation is empirical: apply Homegrown to a genuinely hard EXTERNAL problem and see whether the disciplines produce useful output.

This is the integrated test ladder's bottom rung per `docs/desc.md` — autonomously handle a well-defined hard external problem. Until that rung is reached, the project's self-improvement claims lack empirical anchor. The move is conditional on the user naming a specific external problem (a real software architecture decision they need to make; an open research question they're investigating; a complex life or career choice). With a problem named, this move runs in parallel with the internal three-step sequence and addresses the only orthogonal axis no other candidate covers.

If no external problem is naturally available, this move defers cleanly with a revival trigger ("when a genuinely hard external problem arises in the user's other work, run `/MVL+` on it"). The deferral does not block the internal sequence.

## Next Actions

### MUST

- **What:** Add a `## Prediction` section to the `_branch.md` template in the `/MVL+` runner (`cognitive_harness/MVL+/SKILL.md`) and a matching `## Prediction vs Finding` comparison step in the inquiry-conclusion protocol (`cognitive_harness/protocols/conclude.md`).
  **Who:** User (single-session edit; ~15 minutes).
  **Gate:** Observable — the next `/MVL+` inquiry produces a `_branch.md` with a populated `## Prediction` section, and its eventual `finding.md` contains a populated `## Prediction vs Finding` section.
  **Why:** This is the minimum viable Predictive RC. Every future inquiry from this point forward produces a finding-versus-prediction calibration data point. The data accumulates by structure, with no extra ongoing effort. This is the single highest-leverage-per-effort move in the candidate set evaluated; multiple mechanisms (research-domain pre-registration, Lean Minimum-Viable-Capability, Operations-Research bottleneck attack) converged on it.

### COULD

- **What:** Wire an isolated Navigator subagent invocation into `/MVL+`'s ITERATION-COMPLETE-YES branch — after CONCLUDE produces the finding, invoke the existing Navigator skill (`cognitive_harness/navigation/SKILL.md`) on the just-completed inquiry's folder. Procedure-first version: the user manually invokes the Navigator skill after each `/MVL+` completes; an automated version (auto-invocation as the next step in the runner) can ship later.
  **Who:** User (manual-procedure version is immediate; the auto-invocation version is a runner edit).
  **Gate:** Observable — three consecutive `/MVL+` inquiries finish with a `navigation_observer.md` written in their inquiry folder enumerating typed next directions, AND a `_meta_state.md` artifact accumulating each selection with a one-sentence rationale per the L1-to-L2 graduation gate in `docs/autonomy_ladder.md`.
  **Why:** Advances the project from autonomy Level 0 to Level 1 — the human stops navigating manually after each inquiry and starts selecting from an enumerated next-direction list. The selection-rationale capture builds the calibration data the L1-to-L2 graduation requires.

- **What:** Define an outcome-tracking ledger schema at `devdocs/outcome_ledger.md` (single append-only file, recommended fields: `finding_path`, `expected_effect`, `observed_effect_at_T+N` initially empty, `calibration_note`) AND update `cognitive_harness/protocols/conclude.md` to append a stub entry on finding compilation.
  **Who:** User (schema-design then small wiring edit; ~1–2 hours).
  **Gate:** Observable — three consecutive `/MVL+` inquiries complete with a corresponding outcome-ledger stub entry created at CONCLUDE time.
  **Why:** Lays the data substrate the Retrospective RC layer of the Baldwin self-improvement cycle needs. Without this ledger, the cycle cannot close even when the Predictive RC discipline eventually ships. Pairing this with the Navigator-L1 step is the project's named consolidation push toward Level 1 autonomy with calibration infrastructure in place.

- **What:** Apply Homegrown to a hard external problem — run `/MVL+` on a genuinely hard non-project question (a real software architecture decision, an open research question, a complex life choice) that the user has independently.
  **Who:** User (selects the external problem; runs `/MVL+` on it as a normal inquiry; observes whether the disciplines produce useful output).
  **Gate:** Condition-bound — the user names a specific external problem within the next two weeks. If no problem arises naturally, this action defers; if one does, run `/MVL+` on it as a parallel track alongside the MUST and the other COULDs.
  **Why:** Addresses the project's load-bearing Self-Reference Blindness risk — the only candidate evaluated that grounds the project's claims with empirical anchor outside its own self-design loop. The integrated test ladder's bottom rung per `docs/desc.md` is autonomous handling of a well-defined hard external problem; this move starts that rung.

### DEFERRED

- **What:** Ship `/intuit` Phase A — the full Predictive RC discipline with eight primitive cards, corpus-audit admission gate, structured relational abstractions, and multi-sample consensus per the spec at `docs/intuit.md`.
  **Gate:** Condition-bound — when outcome-ledger entries (from the COULD above) reach approximately 10–20 per discipline, calibration data is ready and the build's payoff window matches its effort cost. At current `/MVL+` cadence, this gate is reachable in 3–6 months.
  **Why (if revived):** Closes the Predictive RC half of the Baldwin self-improvement cycle, which is the project's named substrate for autonomous spec refinement. This is the deepest single capability gain in the candidate set; its timing is the only reason it was killed for this iteration. Revival is structurally inevitable; the deferral controls WHEN.

- **What:** Wire `cognitive_harness/protocols/artifact_materialization.md` as a default post-CONCLUDE invocation in `/MVL+` so that findings prescribing changes get executed via the 8-phase materialization lifecycle.
  **Gate:** Condition-bound — when three or more consecutive `/MVL+`-equipped inquiries reveal a felt-need for materialization (a finding's prescriptions don't propagate; the user has to manually translate prescriptions into file changes), materialization becomes a felt-need rather than a speculative one.
  **Why (if revived):** Closes the "decide-to-change" loop architecturally. Today findings prescribe changes; materialization actually executes them with traceability. Defer until W3 (the Navigator + outcome ledger combination) ships and the project observes whether the decide-to-change gap is felt.

- **What:** Run `/MVL+` on the user-articulated breakthrough hypotheses in `docs/possible_breakthroughs/` — specifically, the Stage-2-dynamic-loop hypothesis (a meta-decision discipline at the end of `/MVL+` that decides whether and how to run a second pass with rearranged structure) and the discipline-ordering refinement (whether `/comprehend` should sit between `/explore` and `/sense-making`, or whether `/decompose` should move before `/sense-making`).
  **Gate:** Condition-bound — when the MUST and the first two COULDs above have shipped and the user has accumulated ~10 inquiries' worth of Prediction-vs-Finding data, the conceptual-reframe inquiries can run with grounded intuition about how the loop performs in practice.
  **Why (if revived):** Both user-articulated hypotheses are conceptually novel relative to the road map and converged on five mechanisms during Innovation. They are the strongest candidates for "next conceptual breakthrough" if the project's historical pattern holds. Running them now would lack grounded intuition; running them after the calibration infrastructure ships would give them empirical material.

## Reasoning

### Why the multi-step sequence beats any single move

Critique's adversarial evaluation surfaced a structural insight that Sensemaking had touched but not fully crystallized: the 5-candidate verdict frontier from Sensemaking was actually a 3-tier choice along the effort axis once mechanisms expanded the candidate set. Tier 1 is the Prediction-section edit alone — the smallest possible commitment that still produces compounding value. Tier 2 adds Navigator L1 and the outcome ledger — the default tier with multi-dimensional gain. Tier 3 adds the external-problem test as a parallel track — the conditional tier that addresses orthogonal axis coverage no other candidate touches.

The user's actual decision is which tier to commit to. Six mechanisms converged on Tier 2 as the default: Sensemaking's structural argument, the Absence-Recognition gap analysis (the project lacks calibration infrastructure), the Lean Minimum-Viable-Capability transfer (ship the smallest learning-producing version of the Baldwin cycle), the Operations-Research bottleneck-attack framing (the project's bottleneck is calibration data accumulation; this hits it directly), the Weighted-Shortest-Job-First scoring (the outcome ledger has the highest cost-of-delay-divided-by-duration in the candidate set), and the pre-registration research-domain transfer (capturing predictions before runs is standard practice in calibration-aware fields).

### Why the largest candidate lost

The `/intuit` Phase A killing was the most contested verdict. The candidate has the strongest structural argument — it ships the Predictive RC discipline at full depth, which is the project's named load-bearing substrate for the Baldwin self-improvement cycle. The kill was on timing grounds, not architecture. The discipline's Phase D maturity requires N≥30 per discipline in the calibration corpus, which today is per-discipline near-zero. Building Phase A now without the calibration data substrate produces a discipline whose calibration won't catch up to its build for roughly a year. The revival trigger is operational and empirical — when the outcome-ledger entries reach N=10–20 per discipline (achievable in 3–6 months if the recommended ledger ships), the calibration data substrate matches Phase A's calibration-feeding needs, and the build's payoff window matches its effort cost. The kill is reversible by design; the timing is what's being controlled.

### Why the conditional external move matters

The Self-Reference Blindness risk was flagged twice in this inquiry — once in Sensemaking's failure-mode self-check, once in Critique's same check. The project today evaluates its own design via its own disciplines. The mitigation is multi-layered: dimension D8 in Critique (external grounding) was added as a project-specific risk axis; the external-problem candidate (Innovation's IV-Contrarian inversion) was the only candidate to score on this dimension; multi-mechanism convergence was used to anchor verdicts that survive the closed-loop critique. But the deeper mitigation is empirical — apply the project's disciplines to problems outside the project's own self-design loop and observe whether the outputs are useful. This is the integrated test ladder's bottom rung per `docs/desc.md`. The move is offered as a conditional COULD because it requires a specific problem to act on, which only the user can name.

### Why some plausible candidates were refined or killed before deep evaluation

Several candidates surfaced during Innovation but did not survive to the final ranking:

- *Stop building and just accumulate more inquiries via existing infrastructure* (the System-Level Inversion of "more capability is the way to advance") — killed pre-test for lacking actionability. "Run more inquiries" is what the user is already doing daily; the candidate added no specifiable action.

- *Formalize the user's note-to-self at `cognitive_harness/next_question_to_ask.md` into a project-level `next_question.md` schema and pipeline* (the Absence-Recognition redesign move) — killed pre-test for under-justified leverage. The note-to-self is informal and that's fine; formalizing it adds governance overhead without a felt-need.

- *Three-build push combining Navigator L1, outcome ledger, AND materialization wiring* (the Combination Generic move) — refined to strip out the materialization wiring per its own deferred verdict. The bundle was structurally over-scoped given materialization's own timing problems.

- *Bottleneck-attack bundle of outcome ledger plus predictions plus cross-finding comparison artifact* (the Operations-Research domain transfer's full version) — refined to split into sequential moves rather than ship as a bundle. The cross-finding comparison artifact is genuinely novel but lacks a felt-need today; it becomes the right move when a user-question gets re-asked and a comparison would be useful.

### How this verdict relates to past project breakthroughs

Past breakthroughs in this project — the project-identity-and-milestone-ordering reframe from 2026-05-15, the typed-primitive-substrate audit, the autonomy-ladder elaboration — were all conceptual reframes produced by inquiry chains that consolidated earlier work. The pattern is "inquiry chains over time produce conceptual reframes that move the project to a new frame." This verdict respects the pattern: it does NOT promise a breakthrough; it ships calibration infrastructure that lets the next inquiry chain produce a better reframe. The user-articulated breakthrough hypotheses in `docs/possible_breakthroughs/` (Stage-2 dynamic loop; discipline-ordering refinement) are likely candidates for the next conceptual reframe, and they're explicitly deferred in this verdict because running inquiries on them now would lack the grounded intuition that the recommended calibration infrastructure produces.

## Open Questions

### Monitoring

- After the Prediction-section edit ships, watch the first three inquiries: are the user's predictions matching, partially matching, or contradicting the findings? An unusually high match rate suggests the user's intuition is well-calibrated to `/MVL+`'s output, which is good. An unusually high contradiction rate suggests the loop is producing outputs the user's intuition does not anticipate, which surfaces calibration-data signal.
- After Navigator L1 wiring ships, watch whether the per-inquiry selection-rationale (the one-sentence per-selection capture required for L1-to-L2 graduation) feels useful or like procedural overhead. If overhead-only, the rationale-capture step needs refining.
- After the outcome ledger ships, watch whether the user actually returns to populate the `observed_effect_at_T+N` field on past findings. If the field stays empty for >2 weeks after findings ship, the outcome-review process needs an explicit trigger (probably a separate inquiry or scheduled review).

### Blocked

- The `/intuit` Phase A revival depends on outcome-ledger maturity — N=10–20 entries per discipline. At current `/MVL+` cadence, this is 3–6 months away. The blocked status is timing, not architecture.
- The materialization wiring revival depends on the user observing a felt-need from three or more Navigator-L1-equipped inquiries. The blocked status is empirical — the need has to be felt, not predicted.
- The Stage-2-dynamic-loop inquiry and the discipline-ordering refinement inquiry are blocked on the calibration infrastructure shipping first. They need grounded intuition about how the existing loop performs in practice; that intuition needs the Prediction-vs-Finding data the MUST step produces.

### Research Frontiers

- **The Self-Reference Blindness mitigation question**: even after the recommended sequence ships AND the external-problem test runs, the project's verdict-formation is still mostly closed-loop. A deeper question, beyond this inquiry's scope: at what point does the project trust its own evaluations sufficiently to act on them without external grounding? This is a meta-calibration question that probably becomes pressing at autonomy Level 2 or higher.

- **The discipline-ordering refinement question**: the user's `docs/possible_breakthroughs/2.md` raises whether `/explore` overreaches into sense-making territory, whether `/comprehend` should sit between explore and sense-making, or whether `/decompose` should move before `/sense-making`. None of the existing inquiries have addressed this directly. It's a strong candidate for the next conceptual reframe; it's deferred here pending calibration infrastructure.

- **The Stage-2-dynamic-loop question**: the user's `docs/possible_breakthroughs/1.md` raises whether `/MVL+` should be able to dynamically generate a stage-2 structure (e.g., "five innovation chains" or "three explorations") based on what stage 1 revealed. This is an L2-or-L3 capability per the autonomy ladder; conceptually novel. Deferred for the same reason as the discipline-ordering refinement — needs grounded intuition first.

### Refinement Triggers

- **If the Prediction-section edit produces no useful comparisons after five inquiries** (i.e., the predictions are too vague or too specific to compare meaningfully to findings), the prediction-format schema in the MUST step's recommended starting design needs refining. The verdict's actionable value depends on the format being usable; failure here re-opens the format question.

- **If the Navigator-L1 wiring produces `navigation_observer.md` files that the user consistently ignores rather than acts on**, the warming context for the Navigator subagent (`cognitive_harness/navigation/warmup/`) may need updating. The L1-to-L2 graduation depends on selection rationales being captured; if selections aren't happening because navigations aren't useful, the warming is wrong.

- **If the outcome ledger stays empty 2+ weeks after the schema ships**, the `observed_effect` field's trigger needs an explicit mechanism — probably a scheduled review process or a separate inquiry whose job is to observe and append.

- **If `/intuit` Phase A's revival trigger fires (N=10–20 per discipline) but the user no longer has the attention budget for a multi-month build**, the deferral becomes a problem and a smaller-scope Predictive RC (e.g., the CB-Contrarian "embed /intuit's core operation INSIDE `/MVL+`'s CONCLUDE step as a hunch sub-step" from Innovation) becomes the right alternative. That alternative was not promoted to a primary candidate here because the calibration data wasn't yet flowing, but it sits in the candidate space ready for revival.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
what is biggest gain right now for this project to come towards another breakthrough?
```

Plus the user's prior note-to-self that this question was framed against, at `cognitive_harness/next_question_to_ask.md`:

```text
what is next load bearing development for our endgoal that once established my job as developer will be relaxed and easier.
```

</details>
