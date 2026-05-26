---
status: active
model: claude-opus-4-7[1m]
effort: max
---

# Finding: Sensemaking Spec Capability Comparison

## Question

The `/sense-making` discipline (one of Homegrown's eleven thinking-disciplines, the one that turns vague/ambiguous input into stable understanding) has **two reference files** sitting side-by-side in `homegrown/sense-making/references/`:

- `sensemaking.md` (409 lines) — the *live* spec; the file that the discipline's entry-point script (`homegrown/sense-making/SKILL.md`) actually reads at Step 0 when `/sense-making` runs.
- `sensemaking_problem.md` (473 lines) — a *workshop* draft; despite a loading note that claims to be loaded, the entry-point script never references it.

The question this inquiry answers: **Is the workshop draft more capable than the live spec — i.e., would loading the draft instead enable the discipline to DO more, structurally or operationally?**

The goal of the answer: be actionable enough that the user can decide what to do with the workshop — promote it over the live, archive it, or merge it selectively.

## Finding Summary

- **The workshop draft is more capable than the live spec.** It wins on three of six capability dimensions (operational explicitness, mis-application resistance, evolvability), ties on two (cognitive operations enabled, failure modes catchable), and loses only on one — cost (the workshop is 16% longer). No dimension shows a regression.
- **The dominant capability gain is operational explicitness.** The workshop adds a runtime firing schedule (a new subsection titled "How the meta-question fires at runtime") that converts the spec's Meta-Inspection pattern from descriptive ("here's a pattern") to prescriptive ("after Sense-Version 2, fire these specific structural-check hooks; after Sense-Version 3, fire these other hooks; etc."). The live spec contains the same meta-question and the same hooks, but is silent on when to apply them during a run.
- **The recommended action has three immediate steps and two deferred follow-ups.** Immediate: (1) snapshot the live spec into the project's existing `archived_skills/<sha>-hg/` safety-substrate folder before any change; (2) replace the live spec's content with the workshop's content and delete the workshop file; (3) add a `status: live` YAML frontmatter line to the new live spec so future readers cannot confuse a future workshop draft for the live spec. Deferred: (4) revisit "codify the workshop pattern as a project-wide spec-evolution protocol" when a second discipline acquires its own workshop variant; (5) revisit "build a canary regression test for spec changes" when canary infrastructure ships for the project's safety-substrate track.
- **Two alternatives are kept as conditional fall-backs.** A cost-prioritized variant merges only the workshop's three runtime-substantive additions (firing schedule, the Pattern A/B/C taxonomy that distinguishes meta-inspection from failure modes and lateral perspectives, and six per-phase cross-references) and leaves the four spec-meta additions (Scope clause, Self-applicability, Step 5 conformance note, Hooks extensibility procedure) in the workshop file. A keep-workshop variant takes no action — defensible only if the user has an explicit reason to defer (tight context budget, evidence-gathering wait, etc.).
- **One alternative is killed.** Feature-flagging the firing schedule (an opt-in / gradual rollout pattern from software engineering) was killed for this inquiry because it requires SKILL.md/runner infrastructure the project does not have today. It is preserved as a research-frontier item for a future inquiry on discipline configurability.

## Finding

### Why we're even discussing this

Earlier in this session the user asked about the relationship between `sensemaking_problem.md` and `sensemaking.md`. Git history revealed the two files were created in the same initial commit on 2026-04-25 — so they started as siblings — but the live spec has been frozen since the initial commit while the workshop draft has accumulated four follow-up edits (most recently 2026-05-11). That history made the workshop look alive and the live look stable. The user asked the natural next question: capability-wise, is the workshop better? That's what this inquiry answers.

### What "more capable" actually means

The first move was disambiguating the word "capability." A naïve reading equates capability with cognitive primitives (the operations the discipline performs) — under that reading, the workshop and the live are equal, since they name the same meta-question, the same nine inspection hooks, and the same six failure modes. The workshop would just be a wordier version of the live.

The disambiguating move was recognizing that capability for a reference spec is multi-dimensional. A spec enables runtime capability not only by naming operations but by being explicit about when, where, and under what conditions the operations apply. The full vector:

1. **Cognitive operations enabled** — what the discipline can perform (e.g., extract anchors, check perspectives, collapse ambiguities). Both files are equal here.
2. **Failure modes catchable** — what predictable mistakes the discipline can recognize and correct (the six named modes). Both files are equal.
3. **Operational explicitness** — how prescriptively the spec states when to perform each operation during a run. The workshop wins decisively here.
4. **Mis-application resistance** — how well the spec prevents practitioners (LLMs running the discipline) from confusing one mechanism for another. The workshop wins (the Pattern A/B/C taxonomy distinguishes Meta-Inspection, failure modes, and lateral perspectives explicitly).
5. **Evolvability** — how predictably the spec accommodates future additions. The workshop wins (it ships an explicit hooks-list-extensibility procedure with a sub-linear-growth claim).
6. **Cost** — context lines, cognitive load on the LLM loading the spec. The live wins by 16% (~64 lines).

### What the workshop adds, concretely

A line-level comparison between the two files shows divergence concentrated in two regions; everything else is byte-identical. The two regions are:

**The Meta-Inspection section.** The live spec has it as a single short section (~25 lines): one statement of the meta-question ("What am I treating as FIXED that might not be?"), a nine-row hooks table, two one-line tails on extensibility and self-applicability. The workshop expands the same section into seven explicit subsections totaling ~80 lines. The seven, ranked by what they add to runtime discipline operation:

1. **The firing schedule** (subsection titled "How the meta-question fires at runtime"). Maps each Sense-Version (the staged outputs Sensemaking produces — SV2 through SV6) to the specific hooks a practitioner should check at that phase. Three firing modes: phase-end (systematic), practitioner-triggered (intuition-driven), end-of-sensemaking (safety net). This is the runtime cognitive instruction the live spec lacks.

2. **The Pattern A/B/C taxonomy** (opens the Meta-Inspection section). Explicitly distinguishes three coexisting check patterns in the spec: Pattern A (hook-specific structural Meta-Inspection — this section); Pattern B (process-level failure-mode correctives — the six failure modes); Pattern C (lateral viewpoint diversity — the Phase 2 perspectives). Reduces a real practitioner risk: confusing one mechanism for another.

3. **Six per-phase cross-references**, inserted in the Execute-the-Following-Process portion of the spec. After each Sense-Version's close, an italic note names which Meta-Inspection hooks apply. The live spec contains the underlying refinement notes (Load-bearing concept test, Specific-vs-pattern recognition cue, Accommodation trigger) but does not announce them as Meta-Inspection instances; the workshop's cross-references make the connection bidirectional and findable.

4. **Scope clause** — limits Meta-Inspection's applicability to within Sensemaking; flags cross-discipline analogues as a Research Frontier.

5. **Self-applicability subsection** — formalizes that the meta-question applies to Sensemaking itself, with the concrete claim that this very section was generated by applying the meta-question to its own hooks H1 and H4.

6. **Step 5 conformance note** — a governance note explaining why the workshop's behavioral additions (the firing schedule's runtime instruction) bypass the project's normal spec-change gate at N=1, citing a reversibility precedent from the inquiry chain.

7. **Hooks list extensibility procedure** — a three-step decision rule for adding a new check at a hook (sub-aspect vs. new top-level hook), plus a quantitative claim that this keeps spec growth sub-linear.

The first three are runtime-substantive (operations a practitioner actually performs differ when the workshop is loaded). The last four are spec-meta — they document the spec's structure, governance, and evolution path rather than the practitioner's runtime behavior.

**Phase-section additions** in the Execute portion. The workshop adds: a parenthetical "frontier flag" on the Accommodation trigger (a refinement note in Phase 5) marking it for possible promotion to a top-level failure mode if it fires at N≥2 across the corpus; one example-domain swap (a Phase 2 Frame-exit Completeness example reframes from "system-design ladder" to "metaloop-ladder" — same structural shape, project-internal example); and a trivial wording tweak in the Phase 3 Specific-vs-pattern cue.

### Why the recommended action is the way it is

The action — full file replacement plus archival snapshot plus a live-vs-workshop indicator, with two deferred follow-ups — emerged from putting all the verdict candidates through adversarial testing on the six-dimensional capability landscape plus two project-specific axes (regression-detection alignment; discipline self-containment). The detailed comparisons are in the Reasoning section below, but the short story is:

- **Full file replacement** is preferred over selective section-merging because the cost saved by the merge (~32 lines) is small relative to the cost of merge atomicity (the workshop's substantive additions cross-reference each other, so a partial merge risks dangling references) and the cost of leaving evolvability behind (the Hooks extensibility procedure is in the spec-meta cluster the merge would skip; the project is actively pursuing spec evolution as a Family II/III milestone, so shipping the extensibility procedure now has higher long-term value than 32 lines of context).

- **Archival before the replacement** addresses a specification gap the standalone replacement has: the project already runs an `archived_skills/<sha>-hg/` snapshot convention as part of its safety substrate (named in `README2.md` and the user's auto-memory), but the standalone replacement does not invoke it. Adding the snapshot step makes the replacement reversible even if git history is later rewritten and aligns the action with the project's existing safety convention.

- **The `status: live` indicator** addresses a concrete current ambiguity: both `sensemaking.md` and `sensemaking_problem.md` carry loading notes claiming "loaded by SKILL.md at Step 0," but only one of them actually is. A practitioner reading the workshop today could believe it is live. A `status: live` (vs. `status: workshop`) frontmatter line on each future spec file fixes this without adding outbound dependencies between disciplines (it respects the "disciplines are individuals" principle recorded as project feedback memory earlier in this session).

- **Deferring "codify the workshop pattern as a spec-evolution protocol"** is principled because the value of codification rises sharply once a second discipline acquires its own workshop variant. Today, the workshop pair is N=1 — codifying from a single example would over-generalize. The convergent signal from Innovation (five mechanisms pointed at codification) makes this the strongest *latent* verdict in the candidate set, but its right moment is later, not now. The revival trigger is observable: a second discipline's `<discipline>_problem.md` file, or the user explicitly initiating a spec-evolution-protocol inquiry.

- **Deferring "build a canary regression test before promoting"** is principled because the project's auto-memory names "no automated regression detection" as a Family II priority — canary infrastructure is already on the project's road map. Conditioning this promotion on canary tests would block indefinitely (since the infrastructure does not exist yet), so the right move is to make the regression-detection concern visible (the deferral itself) without using it as a blocker for a structurally-additive change. The revival trigger is observable: canary infrastructure shipping.

### What gets ranked second and third

The recommendation has two conditional fall-backs:

**Rank 2 — keep-workshop-with-indicator.** Take no replacement action; add only the `status: live` / `status: workshop` indicator to each file. Defensible only if the user names an explicit deferral condition (tight context budget, infrastructure-readiness wait, etc.). Absent such a condition, this rank loses on capability gain.

**Rank 3 — cost-prioritized partial merge.** Merge only the workshop's three runtime-substantive additions (the firing schedule, the Pattern A/B/C taxonomy, and the six per-phase cross-references) into the live spec; leave the four spec-meta additions (Scope, Self-applicability, Step 5 conformance, Hooks extensibility) in the workshop file; add the archival snapshot and the live/workshop indicator. Saves ~32 lines of context. Requires an atomic merge to preserve internal cross-references and requires the user to explicitly accept the governance gap (the Step 5 conformance note specifically argues for the firing schedule's bypass-at-N=1 justification — without it, the firing schedule ships without its in-spec governance rationale).

## Next Actions

### MUST

- **What:** Snapshot the current live spec.
  **Who:** User (via shell command), saving to `archived_skills/<short-sha-of-current-HEAD>-hg/sense-making/references/sensemaking.md`.
  **Gate:** Observable — `archived_skills/<sha>-hg/sense-making/references/sensemaking.md` exists with the byte-identical current live content before any replacement action is taken.
  **Why:** Aligns the replacement with the project's existing safety-substrate snapshot convention; preserves reversibility even if git history is later rewritten.

- **What:** Replace the live spec's content with the workshop's content; delete the workshop file.
  **Who:** User (file replace + delete + git commit).
  **Gate:** Observable — `homegrown/sense-making/references/sensemaking.md` byte-matches the prior `sensemaking_problem.md` content (minus the loading-note line that claimed to be loaded, which is preserved from the live file's identical version); `sensemaking_problem.md` no longer exists.
  **Why:** Delivers the dominant capability gain (operational explicitness via the firing schedule, mis-application resistance via the Pattern A/B/C taxonomy, evolvability via the Hooks extensibility procedure) in one atomic action that is reversible via `git revert` or `git checkout <archived-sha>`.

- **What:** Add a `status: live` YAML frontmatter line at the top of the new live spec.
  **Who:** User (single-line edit + git commit, can be the same commit as the replacement).
  **Gate:** Observable — `homegrown/sense-making/references/sensemaking.md` begins with `---\nstatus: live\n---` (or equivalent) before its loading note.
  **Why:** Eliminates the live-vs-workshop ambiguity that the prior pair created (both files had loading notes claiming to be loaded; only one was). Sets a convention for any future workshop file: it carries `status: workshop` so practitioners reading it cannot mistake it for live.

### COULD

- **What:** Update the saved auto-memory entry `project_discipline_design_history_location.md` if its path becomes stale after this action.
  **Who:** Future Claude session, on next reference.
  **Gate:** Condition-bound — when the user next initiates work that touches `enes/discipline_design_history/` (or whatever folder replaces it after the broader `enes/` → `docs/` rename the user was considering earlier in the session).
  **Why:** Keeps cross-session memory accurate; not load-bearing for this specific finding.

### DEFERRED

- **What:** Codify the workshop pattern as a project-wide spec-evolution protocol (define lifecycle states — workshop → live → archive — with explicit promotion gates; specify when a discipline acquires a workshop variant and when one is retired).
  **Gate:** Condition-bound — when a second discipline acquires a workshop variant (i.e., a `homegrown/<other-discipline>/references/<other-discipline>_problem.md` exists), OR when the user explicitly initiates a spec-evolution-protocol inquiry.
  **Why (if revived):** Five Innovation mechanisms converged on this as the strongest latent verdict in the candidate set; codification's value rises sharply once N≥2 workshop pairs exist. Codifying from N=1 over-generalizes; codifying after N=2 has empirical grounding.

- **What:** Build a canary regression test for `/sense-making` (a saved-good input plus a saved-good output, re-run on each spec change to detect drift), and gate future promotion behavior changes on a canary check.
  **Gate:** Condition-bound — when canary regression infrastructure ships for any reason on the project's safety-substrate track (the project's auto-memory names "no automated regression detection" as a Family II priority).
  **Why (if revived):** This promotion was made without canary coverage because canary infrastructure does not exist project-wide today. Once it exists, the precedent should be revised so future runtime-cognition-level spec changes carry canary checks rather than relying on structural-additivity reasoning alone.

## Reasoning

### Why full replacement beats selective merging

Selective merging (Rank 3) trades ~32 lines of context savings for three real costs: (a) the merge must be atomic to preserve internal cross-references in the workshop's three runtime-substantive additions, (b) the four spec-meta additions left in the workshop include the Hooks extensibility procedure that supports the project's stated Family II/III spec-evolution work, and (c) the merge ships the firing schedule without its in-spec governance justification (the Step 5 conformance note specifically argues for the firing schedule's bypass-at-N=1 — leaving the note in the workshop creates an explanation gap). Selective merging survives only under a specific user-context where context budget tightness dominates these three costs, which the user did not signal.

### Why "keep workshop" loses under default conditions

The keep-workshop option (Rank 2) delivers zero immediate capability gain. The user explicitly invoked `/MVL+` to get a verdict, signaling they want a decision rather than a deferral. The user-perspective objection to keep-workshop is direct: "you've established the workshop is more capable; what reason is there not to act?" Defense for keep-workshop only succeeds under explicit conditions the user did not state (tight context budget, infrastructure-readiness wait, etc.). Absent those conditions, the structural-additive nature of the change (no regressions on a diff basis) and the existence of `git revert` as a fallback make the act-now move the default.

### Why configurability was killed for this inquiry

Three Innovation mechanisms (Domain Transfer from software feature-flagging, Domain Transfer from compiler experimental flags, and Absence Recognition of a `discipline.json` config layer) converged on feature-flagging the firing schedule as opt-in. That is a real long-term direction, but it fails this inquiry's actionability dimension: the project does not have a flag-loading mechanism in `homegrown/sense-making/SKILL.md` or in the loop runners (`/MVL`, `/MVL+`); building one is non-trivial. A flag that defaults off means the capability gain never materializes for a single user; a flag that defaults on means the underlying decision (promote-or-not) is being made anyway, just with extra plumbing. The configurability candidate is preserved as a Research Frontier — it should be revisited when the loop runner adds config-loading capability, likely on the project's Family III timeline.

### Why "codify the pattern" was deferred, not killed

Five Innovation mechanisms converged on codifying the workshop pattern as a spec-evolution protocol — the strongest convergent signal of the run. Defense was strong: the workshop pattern will likely proliferate (the live spec and the workshop are the *first* such pair; once a second emerges, the project will face the codification question whether it wants to or not). But prosecution's actionability objection survived: codifying from N=1 (a single workshop pair) risks over-generalizing — the right shape of the protocol depends on the variations that show up at N=2 and beyond. The principled move is to defer with an observable revival trigger (when a second `*_problem.md` file appears) rather than codify prematurely or kill the proposal.

### Why a project-specific risk dimension was added during evaluation

The Critique phase's Phase-0 refinement note requires that, when candidates involve project artifacts/operations/state, the dimension list include at least one project-specific risk axis. Two were added beyond the six default dimensions: regression-detection alignment (capturing the project's documented Family II priority on closing the no-automated-regression gap) and discipline self-containment (capturing the principle recorded in feedback memory earlier this session — disciplines are individuals; their reference files should not point outward to other folders). Both axes mattered: the regression-detection axis drove the deferred canary-test recommendation; the self-containment axis confirmed the `status: live` indicator was a clean fit (it lives inside the discipline, adding no outbound pointer).

### Self-reference risk acknowledged

This inquiry uses `/sense-making` to evaluate a `/sense-making` reference spec — the evaluation tool and the evaluation target share conceptual framework. Sensemaking's Self-Reference Blindness failure mode (number six in the spec's failure-mode list) was flagged and partially addressed via four external grounding sources: git activity (independent of the spec's claims), line-level diff (mechanical comparison, not conceptual interpretation), the user's auto-memory (independent project context), and explicit per-dimension verdicts (positional and structured, not narrative). The grounding is partial, not complete; a fully external check — having `/comprehend` independently model what each spec enables — was deferred as a frontier question in Sensemaking. If the recommended action produces unexpected behavior in real runs, that frontier check becomes immediately revival-eligible.

## Open Questions

### Monitoring

- After the replacement ships, watch the first three `/sense-making` runs for whether the firing schedule's per-phase hook map actually fires as documented (after Sense-Version 2 → hook H4 and H5; after SV3 → H1/H2/H3/H7; after SV4 → H4 sub-aspects + H5; after SV6 → H6; throughout → H8 and H9). If a hook documented as firing at a phase does not fire in practice, the firing schedule has a calibration error and the spec needs amendment.
- Watch for the over-rigidification failure mode the firing schedule introduces: a practitioner mechanically checking the documented hooks at the documented phases without invoking the practitioner-triggered or end-of-Sensemaking firing modes. The three firing modes were named precisely to prevent this; if over-rigidification appears anyway, the spec needs amendment to lower the systematic-firing emphasis.

### Blocked

- Whether the workshop pattern should become a project-wide spec-evolution protocol cannot be answered confidently from N=1. The deferred follow-up names the revival trigger explicitly.
- Whether a canary regression check would have changed this verdict cannot be tested until canary infrastructure exists. The deferred follow-up names the revival trigger.

### Research Frontiers

- **Discipline configurability via feature flags.** Two Domain-Transfer mechanisms plus Absence Recognition converged on this. It requires a config-loading layer in SKILL.md or the loop runner that does not exist today; building it is a separate inquiry on the project's Family III track.
- **External Self-Reference grounding for the `/sense-making` evaluation pipeline.** The Self-Reference Blindness flag in this inquiry was addressed via four external grounding sources, but a fully independent model (built by `/comprehend` operating on the spec without using `/sense-making`'s vocabulary) would be a stronger check. This is open if `/comprehend` becomes available for cross-discipline use.

### Refinement Triggers

- **If the firing schedule mis-fires in real runs** (a hook documented to fire at a phase does not fire, or fires at an unintended phase), this finding's recommendation re-opens at the per-phase hook map.
- **If over-rigidification is observed** in the first three runs (the practitioner-triggered or end-of-Sensemaking firing modes are never invoked), the spec needs to lower the systematic-firing emphasis or strengthen the secondary firing modes.
- **If a second discipline acquires a workshop variant** before the deferred codification work is revived, the codification revival trigger fires automatically.
- **If canary infrastructure ships** while this finding is still operationally fresh, the canary-test deferral becomes immediately revival-eligible — the next runtime-cognition-level spec change should carry a canary check.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
is /Users/ns/Desktop/projects/native/homegrown/sense-making/references/sensemaking_problem.md better than homegrown/sense-making/references/sensemaking.md ?

in terms of what they shoudld do,
capability wise
```

</details>
