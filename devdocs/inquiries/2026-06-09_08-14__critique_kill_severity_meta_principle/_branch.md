# Branch: critique_kill_severity_meta_principle

## Question

- **Subject** — `/td-critique`'s severity-calibration: what structurally distinguishes a "kill-worthy" issue (warranting a KILL verdict) from a "minor" issue (a defect to mention but not kill on); how this calibration relates to the existing #2 Rubber-Stamping (too little killing) and #3 Nitpicking (too much killing) failure modes.
- **Action** — understand + theorize: build a meta-framework that explains WHAT structurally varies between kill-worthy and minor, in a way that holds across all evaluation domains (not "for this specific task").
- **Level** — discipline (specifically `/td-critique` and its KILL-judgment criteria; not loop-level, not runner-level).
- **Observation targets**:
  1. **What structural properties make an issue kill-worthy.** What is the underlying meta-principle that distinguishes severity-of-issue in a structurally meaningful (not content-specific) way? This is the core "have a better understanding" target.
  2. **What structural properties make an issue minor / a nitpick.** The inverse of (1). What makes something a defect-worth-mentioning vs a defect-worth-killing-on, in structural terms?
  3. **Meta-validity / task-agnostic articulation.** The framework must be expressible without referencing per-task content (no "for this task, X is kill-worthy because Y"). The principle must operate at a layer above task-specific calibration. This is the "meta and task agnostic case agnostic way" target.
  4. **Relationship to existing #2 Rubber-Stamping and #3 Nitpicking failure modes.** These two modes name the failures-at-the-extremes (too little killing / too much killing). What lives between them as the correct calibration? Where does the current `td-critique.md` spec articulate this calibration (or fail to)?
- **Deliverable shape** — a conceptual framework: meta-principle(s) for severity-distinction + the structural axes those principles operate on + implications for what `/td-critique`'s current spec says/doesn't say about severity calibration. NOT per-task examples without a meta-principle; NOT vague heuristics.

**The question.** What is the meta-principle that distinguishes a kill-worthy issue from a minor / nitpick issue in `/td-critique`, expressible in a task-agnostic structural way that explains both #2 Rubber-Stamping and #3 Nitpicking as failures-at-the-extremes of the same calibration axis — and what does this imply for how `/td-critique`'s spec articulates (or should articulate) severity?

## Goal

- **Criterion** — meta-validity: the framework holds across diverse evaluation domains (a software design critique, a research-hypothesis critique, a business-strategy critique, a spec-edit critique). NOT per-domain heuristics dressed up as a principle.
- **Use case** — equip `/td-critique` (and its practitioners) to apply consistent severity judgment without per-task calibration tuning; let a practitioner notice when they've slipped into either Rubber-Stamping or Nitpicking by checking against a structural rule, not a feeling.
- **Desired outcome** — a structurally-articulated understanding of severity that makes the existing #2/#3 dial concrete; possibly identifies that the current spec under-articulates the calibration and would benefit from additional structure; possibly identifies that severity is decomposable into axes that have been silently entangled until now.
- **What would fail** — per-task examples without a meta-principle; vague heuristics ("use judgment", "depends on stakes"); collapsing the question to "depends on stake-level" without saying WHAT structurally varies by stake-level; collapsing to "it's intuition" / "it depends on the candidate"; or proposing a spec edit before understanding what the underlying principle is. Premature structural commitment is the primary failure mode.

## Source Input

```text
u said

It's named "nitpicking-creep" specifically because the failure mode #3 already in td-critique.md §4 — Nitpicking ("every
  candidate gets killed on minor issues") — is the existing critique failure that the new check could inadvertently feed if
  it grows too eager.

but then we should be more smart and have a better understanding of what gets to be killed , what counts as a small ...
but in a meta and task agnostic case agnostic way?

lets dive deep into this
```

## Scope Check

Question covers goal. The question targets the underlying meta-principle for severity calibration; the goal is a conceptual framework + the framework's implications for the spec. The question's framing ("meta and task agnostic case agnostic way") matches the goal's criterion (meta-validity across domains).

**Specific-vs-pattern check.** The question explicitly asks for "a meta and task agnostic case agnostic way" — the pattern-level framing is the user's explicit scope. The conversational trigger (the nitpicking-creep observation from the prior turn) is the seed, not the scope; the inquiry addresses the broader pattern (severity calibration in general), not just the one prior observation.

## Layer Commitment

**Primary layer: MEANING.**

The question is fundamentally "what IS severity in this critique-judgment context — as a cognitive operation — such that it's task-agnostic?" That is a meaning-layer question: what concept does "kill-worthy vs minor" capture? The user explicitly says "be more smart and have a better understanding" — that signals concept-level work, not spec-shape work.

Other layers considered and out of scope for this run:

- **Structural** — how the `td-critique.md` spec should encode the principle (sections, refinement-notes, new failure-mode entry, hook-table sub-aspect, etc.). Sequential follow-up: once the meaning is settled, a structural inquiry can ask how to encode it. Premature here.
- **Process** — what discipline steps a practitioner runs to apply the calibration during a real critique invocation (when to check severity, how to escalate, when to switch into burden-of-proof escalation mode). Sequential follow-up after both meaning AND structural have been settled.

**Sequential plan.** Meaning first (this inquiry). If a structural commitment emerges as worth making, a STRUCTURAL inquiry follows. Process layer comes after both — runtime behavior depends on what the spec ends up saying.

If during the discipline work the meaning collapses into "this is purely a structural question" (e.g., the meta-principle turns out to be one-line and the real work is spec encoding), that's a signal worth flagging to the user — but the prior is that this is genuinely a meaning-layer question because the user's phrasing centers on understanding.
