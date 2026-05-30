---
status: active
model: claude-opus-4-8[1m]
effort: max
---
# Finding: MVLw Run Thoroughness on Opus 4.8 — the "shorter runs" concern

## Question

The user noticed that MVLw runs (MVLw is this project's five-step "thinking loop" — Surfacing → Sensemaking → Decomposition → Innovation → Critique, run one discipline at a time) finish in about **15 minutes of elapsed wall-clock time** on the new model (Claude Opus 4.8), versus about **40 minutes** on the prior model (Opus 4.7) — both at the same "max effort" setting and the same 1M-context model. The user is concerned this reflects a "low-duration reasoning tendency" — i.e., that the new model reasons *less thoroughly* — and asks: **is there anything we can do to prevent it?**

The inquiry kept three things separate:
1. **Is the concern valid** — is the new model actually reasoning less thoroughly, or producing comparable thoroughness *faster*?
2. **If there is a real drop, where is it** — which disciplines, and what kind of coverage?
3. **What can we do** — concrete mitigations to keep runs thorough, without literally just making them take longer.

**Goal:** an honest, evidence-grounded verdict (neither defensive nor self-flagellating) plus concrete, checkable mitigations the user can act on or decide about.

## Finding Summary

- **The concern is partly valid — but the instrument is wrong.** Wall-clock time is a poor measure of reasoning thoroughness: it mixes together *the model being faster* (benign), *the recent tasks being lighter* (benign), and *the model exploring less* (the real concern). You cannot tell them apart from the clock. The right measure is **coverage** — how many idea-generating mechanisms were applied, how many ambiguities resolved, how many perspectives checked — which is directly countable from the run's own files.

- **Measured by coverage, there IS a real reduction — and it survives the obvious confounds.** Across runs, the new model produces ~2.6× less written content per run. On *the same question re-run* (controlling for task difficulty), the new runs are still ~2.5–3.2× thinner. And in one matched pair, the Innovation step's mechanism-applications fell from **47 to 9** — a genuine drop in *exploration breadth*, not just terser writing — and it happened *at max effort*, so "max effort already prevents this" is false.

- **But the loss is localized and the model is not getting worse.** Core analytical work held up: the same number of ambiguities resolved, all reasoning stages present, all structural checks passed; the core analytical discipline (Sensemaking) thinned the least. The thinning concentrated in the *generative / breadth* disciplines (Innovation most). The honest name for this is **convergence efficiency**: the new model reaches a good-enough answer faster and stops, rather than exhaustively sweeping the space. That is a different explore-vs-exploit balance, not a loss of capability.

- **It's a tendency, not a hard floor — so it's fixable.** Within the new model itself, the runs that read the full discipline references and deliberately forced full coverage were ~2.5× fuller than the quick ones. The model *can* go deep; it just defaults to brief. Execution discipline closes the gap.

- **The fix is to measure and enforce coverage — never to target duration.** Making runs "take longer" would just induce padding (filler that inflates time without adding thoroughness) — worse than the problem. Instead:
  - **Now, no tooling needed:** watch *coverage* (the telemetry each discipline already reports), not the clock; and keep the existing "read the full discipline reference each run" rule (it demonstrably helps).
  - **Light change:** have the runner surface each discipline's coverage telemetry at its checkpoint and flag when it's below par.
  - **Proposals (need spec/tooling work):** promote the disciplines' soft coverage *aims* (e.g., Innovation's "aim for all seven mechanisms") into enforced, *counted* floors; apply those floors **selectively** — on divergent / high-stakes questions where breadth is the value, not on convergent ones where forcing more would just pad.

- **One caution carried throughout:** "more coverage" is not universally better. Forcing a wide sweep on a question with a clear answer is waste. The enforcement must be selective, or it recreates the padding problem under a new label.

## Finding

### Why this came up, and the trap in the framing

The user is watching a real signal — the new model's MVLw runs finish in roughly a third of the wall-clock time the old model took — and reasonably worries it means shallower reasoning. The first thing to get right is that **elapsed time is a confounded instrument.** A run's duration is, roughly, the amount of work divided by how fast the model works, plus how big the task was. Three different things move it:

- The new model is simply **faster** (more tokens per second, more efficient reasoning) — this lowers time with zero change in thoroughness.
- The recent runs were mostly **lighter tasks** — re-evaluations of questions whose prior answers were already in context, so genuinely less new ground to cover.
- The model **explores less breadth** — the actual concern.

Only the third is a problem, and the clock cannot separate it from the first two. Worse, time is gameable in the wrong direction: a padded, shallow run can take longer than a tight, thorough one. So a duration drop neither proves nor measures a thoroughness loss. To answer the user's question honestly, we have to measure the thing they actually care about — thoroughness — directly.

### Measuring it properly: coverage, and what it shows

The directly-measurable stand-in for thoroughness is **coverage**: how many of the idea-generating mechanisms a step applied, how many ambiguities it resolved, how many perspectives it checked. These are countable from the run's own saved files, and each discipline already reports them in its own telemetry.

Measured this way, the evidence (gathered by directly counting the artifacts of every relevant run) says the concern is **partly real**:

- Across the runs, the new model produces about **2.6× less written content** per run (≈8.7k discipline-words vs ≈23k for the old model), and this holds across a dozen runs — not a fluke.
- On **the same question re-run** — which controls for task difficulty — the new runs are still **~2.5–3.2× thinner**. So it is not *only* that the recent tasks were lighter.
- The sharpest single signal: in one matched pair, the **Innovation step's mechanism-applications dropped from 47 to 9**. That is a coverage measure, not a volume measure — a re-run does not mechanically reduce how many idea-generating mechanisms you apply — and it happened *at max effort*. So the reduction is real and is not something "max effort" already prevents.

### Where the loss is — and where it isn't

The reduction is **localized to exploration breadth**, and the core held:

- **Core analytical work was preserved.** On the matched question, the new run resolved the *same* number of ambiguities, kept all of its reasoning stages, and passed all structural checks. The core analytical discipline (Sensemaking) thinned the least.
- **Generative breadth thinned most.** The Innovation step (whose whole job is to sweep a wide space of ideas) showed the biggest drop, including the 47→9 mechanism count.

The honest name for this pattern is **convergence efficiency**: the new model reaches a sufficient answer faster and stops, instead of exhaustively enumerating the space. This is not "laziness" and not a loss of capability — it is a shift in the explore-vs-exploit balance toward stopping once an answer is good enough. On a question with a clear answer, that is fine (even desirable). On a genuinely open question — a wide option space, an adversarial-completeness check, real innovation — it costs you the breadth of the sweep, and you can't tell from inside the run what you missed.

### It's a tendency, not a hard limit

Crucially, the briefer behavior is a **default posture, not a ceiling.** Within the new model itself, the runs that read the full discipline reference files and deliberately forced full coverage ran about **2.5× fuller** than the quick ones. The capability to go deep is intact; the model just doesn't reach for it by default. That is exactly why the concern is *fixable* — the fix is to make the loop reach for depth where depth matters.

### What to do — measure and enforce coverage, never duration

The remedy follows directly from the diagnosis: **target coverage, never time.** Making runs take longer would only invite padding — filler that runs up the clock without adding thoroughness — which is strictly worse than the original problem. The actionable shape, tiered by how much work it takes:

**Now, with no tooling:**
- **Watch coverage, not the clock.** Judge a run by the coverage telemetry the disciplines already emit (mechanisms applied, ambiguities resolved, perspectives checked), not by elapsed minutes. This is also future-proof: the next model will be faster still, so any wall-clock yardstick will only get more misleading, while a coverage count is the same at any speed.
- **Keep "read the full discipline reference each run" mandatory.** The runner already says never to execute a discipline from memory; the evidence shows runs that actually did read the references were markedly fuller. Reinforce it.

**A light runner change:**
- **Surface coverage telemetry at each checkpoint and flag when it's below par.** The data already exists in each discipline's output; the runner just isn't acting on it. Showing "Generators applied: 2/4, Framers: 1/3" at the checkpoint — and flagging it — turns the existing telemetry into a live signal, with no new tooling.

**Proposals (need spec or tooling work):**
- **Promote soft coverage aims into enforced, counted floors.** Today the Innovation discipline says "aim for full coverage (all seven mechanisms)" — a soft aim. The new model satisfied the structural check (the section was present) while applying only one or two mechanisms, because the check only confirms sections *exist*, not that coverage was *met*. A coverage-counting check would fail a run that falls below the floor. (This needs the project's structural-check script — currently absent — to exist and count, *or* the runner to read the disciplines' self-reported counts.)
- **Make the floor count substance, not mentions, and apply it selectively.** Two guards keep this from recreating the padding problem: (1) count *substantive* applications — the Innovation spec's existing "marked-inapplicable: `<specific reason>`" pattern already requires a real reason and flags empty/generic ones as defects; reuse it. (2) Apply floors **only where breadth is the value** — divergent or high-stakes questions (wide option spaces, adversarial completeness, genuine design) — and let convergence efficiency stand on convergent questions with a clear answer. The signal for "is this question divergent/high-stakes" can come from the inquiry's own framing (its Goal and Layer-Commitment in `_branch.md`); the precise rule is left to a later spec pass.

### The honest bottom line

The new model is not reasoning worse — it is reasoning *more efficiently*, and on most questions that is genuinely fine. But on questions where the value is in the *breadth of the sweep*, its default brevity does cost real coverage, and that cost is invisible on the clock. So: stop trusting the clock, start watching coverage, keep the reference-reading rule, and — for the questions that warrant it — enforce coverage floors that count substance, not time. (This very inquiry was run at deliberately full coverage as a demonstration: a thorough run and a fast run are not opposites — the goal is completeness, which a fast model can hit without padding.)

## Next Actions

### MUST

- **What:** adopt **coverage telemetry as the quality signal for MVLw runs, and stop treating wall-clock duration as the thoroughness bar.** Concretely: when judging whether a run was thorough, read the disciplines' reported coverage (mechanisms applied, ambiguities resolved, perspectives checked), not the elapsed time.
  - **Who:** the user (monitoring practice) + any future MVLw-runner spec update.
  - **Gate:** immediate — applies to the next MVLw run.
  - **Why:** duration is confounded (speed + task + breadth) and gameable by padding; coverage directly measures the thing at risk and is stable across model generations.

- **What:** keep the existing "read the full discipline reference each run; never execute a discipline from memory" rule, and treat it as load-bearing for thoroughness.
  - **Who:** the MVLw runner (already a rule) + the operator.
  - **Gate:** immediate / ongoing.
  - **Why:** the new model's fuller runs were exactly the ones that read full references; it is the cheapest lever that demonstrably raises coverage.

### COULD

- **What:** have the runner surface each discipline's coverage telemetry at its checkpoint and flag when it is below the discipline's stated aim (e.g., "Innovation: 2/7 mechanisms — below the full-coverage aim").
  - **Who:** a light MVLw-runner change.
  - **Gate:** when the runner spec is next edited.
  - **Why:** turns telemetry the loop already produces into a live, visible signal — no new tooling.

- **What:** promote the disciplines' soft coverage aims into enforced, *counted* floors, applied **selectively** to divergent / high-stakes questions, counting substantive applications (reusing the existing "marked-inapplicable: `<reason>`" pattern) rather than mentions.
  - **Who:** a discipline-spec + structural-check authoring pass.
  - **Gate:** when the coverage-counting structural check is built (see DEFERRED) — and condition-bound on first deciding the "divergent/high-stakes" signal.
  - **Why:** makes thoroughness enforceable where it matters, without padding convergent runs.
  - **Depends-on:** DEFERRED item "coverage-counting structural check." This COULD is GATED — do not act until the check exists (or the runner reads self-reported counts instead).

### DEFERRED

- **What:** build (or revive) `tools/structural_check.sh` so it *counts coverage* (mechanisms / perspectives / ambiguities) and fails a run below the floor — not just confirms sections are present.
  - **Gate:** when the project next invests in loop tooling; observable trigger — when a coverage floor is adopted and needs automated enforcement.
  - **Why (if revived):** the current checks are manual and section-presence-only, which is exactly how under-coverage passed unnoticed. A counting check makes the floor real. (A no-tooling interim exists: the runner can read the disciplines' self-reported counts.)

- **What:** define the precise rule for classifying a question as "divergent / high-stakes" (floors enforced) vs "convergent" (efficiency allowed), based on the inquiry's framing.
  - **Gate:** when the selective-enforcement COULD is taken up.
  - **Why (if revived):** selectivity is what prevents the floors from padding convergent runs; it needs a concrete signal, sketched here (the inquiry's Goal + Layer Commitment) but not finalized.

## Reasoning

The verdict was reached by stating a diagnosis-and-remedy candidate, generating the strongest counter-arguments against it, and testing each. The field considered:

- **"Do nothing — max effort + 1M context already maximize thoroughness."** Rejected, and this was the load-bearing rejection. The measured drop (Innovation mechanism-applications 47→9) happened *at max effort, on the same question re-run*. Max effort was held constant and the task was matched, so neither "it's just max effort working" nor "it's just task difference" explains the drop. Max effort caps the *budget*; it does not govern how much of the budget goes to exploration breadth. A real, max-effort-resistant reduction exists, so some action is warranted.

- **"It's all the re-walk confound — the model is fine."** Rejected as the *whole* story but credited as *part* of it. The recent runs genuinely were lighter (priors in context), which explains some of the volume drop. But the matched-question pairs and the mechanism-count drop are residuals the confound cannot explain. So the verdict is "partly valid," not "fully alarming."

- **"Just make the runs take longer."** Rejected. Targeting duration induces padding — filler that inflates time without thoroughness — degrading signal and wasting tokens. The remedy must target coverage and be explicitly duration-blind.

- **"Enforce full coverage on every run."** Rejected as stated. Blanket floors pad convergent questions (where a clear answer exists and a wide sweep is waste), recreating the very problem under a coverage label. Enforcement must be selective — only where breadth is the value.

- **"Coverage is just another flawed proxy — count isn't quality."** Partially accepted, and it refined the claim. Mechanism *count* does not measure mechanism *quality*; a run can apply seven mechanisms shallowly. So coverage is framed as a **necessary floor, not a quality guarantee** — it ensures the space is swept; the adversarial disciplines (Critique especially) ensure it is swept well. Coverage is still strictly better than duration: it is not moved by the speed/task confounds, and it directly measures what dropped.

- **The surviving package** — measure coverage not time, keep reference-reading, surface telemetry, and selectively enforce substance-counted floors — held under all of these, with the immediate (no-tooling) parts carrying the highest confidence and the spec/tooling parts tiered as proposals.

A note on method, since this inquiry is the new model evaluating its own thoroughness: every load-bearing claim rests on **measured facts about the files** — word counts, the 47→9 mechanism count, the matched-pair ratios, all produced by counting the artifacts directly — not on the model introspecting about whether it "feels thorough." The evidence is adversarial to the evaluating model's own comfort (it documents that this model under-covers), which is the guard against a self-serving self-assessment.

## Open Questions

### Monitoring

- **Whether the convergence-efficiency tendency widens or narrows over more runs.** Track coverage telemetry (mechanism count, ambiguities, perspectives) across the next ~10–20 MVLw runs; if coverage on divergent questions keeps falling, the selective-enforcement proposals move from COULD to MUST.

### Blocked

- Automated coverage enforcement is blocked until a coverage-counting structural check exists (the script is currently absent). An interim, un-blocked path is the runner reading the disciplines' self-reported counts.

### Refinement Triggers

- If a future run shows the *core* analytical disciplines (Sensemaking, Critique) thinning — not just the generative ones — the diagnosis ("localized to exploration breadth; correctness spared") re-opens; the convergence-efficiency framing would no longer be benign.
- If coverage floors, once adopted, produce runs that hit the mechanism count but stay shallow, the "count substance, not mentions" guard has failed and the floor design re-opens.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
if  you look at last 3 MVLw runs in /Users/ns/Desktop/projects/native/devdocs/inquiries and also if you look at the ones before from devdocs/inquiries/2026-05-28_20-35__routeman_identity_standalone_discipline_redo 

new ones uses opus 4.8 and old ones uses 4.7, both max effort and 1m context model. 

There is one huge difference in terms of MVLw elapsed time. old ones were mostly around 40mins and new ones are aroudn 15min 


i am concerned about this. is there anything we cna do to prevent this low duration reasoning tendency of this new model?
```

</details>
