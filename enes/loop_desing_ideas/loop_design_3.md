# Loop-Runner Design — Notes 3: The Current `/MVL+` Loop

This document walks through the current `/MVL+` loop design as it exists today. It is paired with `loop_design_1.md` (the cross-runner taxonomy) and `loop_design_2.md` (the deep walkthrough of `/MVL`). Read those first if you haven't — `/MVL+` shares much of `/MVL`'s machinery, and this document focuses on what's different.

The canonical spec is `commands/MVL+.md`. This document is design-rationale, not spec — it explains the WHY behind `/MVL+`'s extensions, the lifecycle in narrative form, and the design tension `/MVL+` carries with `/MVL`.

---

## The Claim

`/MVL+` makes a different claim from `/MVL`. Where `/MVL`'s spec asserts that "S→I→C is the only primitive — every cognitive task is a SIC loop applied to a different question," `/MVL+`'s spec (line 8) takes the opposite position:

> **Use `/mvl+` as the default for new inquiries; use `/mvl` classic for simple well-defined problems when speed matters.**

That single line reverses the architectural relationship. Under `/MVL`'s claim, `/MVL` is the primitive and `/MVL+` is an extension. Under `/MVL+`'s claim, `/MVL+` is the default and `/MVL` is the special case for simple well-defined problems.

This is a real design tension in the codebase, and it has practical consequences for which command users reach for first. The two claims can't both be true. The project ships both, the user picks based on context, and the two claims coexist as documented orientations rather than reconciled architecture. (See "The Tension with /MVL" section below for more.)

`/MVL+`'s deeper claim — the one that justifies its existence — is structural:

> **The first phase of any non-trivial inquiry needs richer scaffolding than sensemaking alone provides. You need to map the territory (Exploration) before you can anchor meaning in it (Sensemaking), and you need to partition complexity (Decomposition) before you can innovate against the whole.**

If that's true, then S→I→C alone under-prepares the problem for innovation and critique. Innovation operates on whatever sensemaking handed it; if sensemaking anchored on superficial features (because the territory wasn't mapped) or on a problem that contains hidden sub-problems (because it wasn't decomposed), the innovation candidates are misaligned with the actual problem shape.

`/MVL+` adds E (before S) and D (after S) to address that.

---

## What `/MVL+` Is

**`/MVL+` is an auto-chained, fixed-pipeline loop runner that always runs Exploration → Sensemaking → Decomposition → Innovation → Critique on a question, iterates with refined focus until the question is answered, and produces a `finding.md`.**

Same shape as `/MVL`, but with two more disciplines and a richer first phase. Three things still hold:
- **Auto-chained** — no human typing between disciplines.
- **Fixed pipeline** — E → S → D → I → C, always. Never variable.
- **Iterates** — narrow focus and run again if not answered.

What changes:
- The pipeline is 5 disciplines, not 3.
- The first phase (E → S → D) is now an explicit territory-anchor-partition sequence rather than just an anchor step.
- The state file gains a `flow-type: extended` field that distinguishes `/MVL+` inquiries from classic `/MVL` ones.

---

## The Pipeline

```
E (exploration) → S (sensemaking) → D (decomposition) → I (innovation) → C (critique)
```

### What each new discipline contributes

**Exploration (E).** Surveys the territory the inquiry sits in. Produces: a map of what's known, what's unknown, what the relevant prior art is, what dimensions or actors are in play. Output saved as `exploration.md`.

The case for E: sensemaking assumes you have *something* to anchor on. If the territory is genuinely unfamiliar — a new domain, an unscoped problem, an inquiry into something the user hasn't worked with before — sensemaking without prior exploration risks anchoring on whatever surface features happen to be visible, which is often the wrong things. Exploration produces the field that sensemaking then reduces.

**Decomposition (D).** Partitions the now-stable problem into independently coherent pieces with explicit interfaces. Produces: a coupling map, boundary set, question-tree of sub-problems, dependency order. Output saved as `decomposition.md`.

The case for D: sensemaking produces a stable model of the whole. If the whole has internal structure (sub-problems with low coupling between them), innovation operating on the whole is doing strictly more work than necessary, and critique evaluating the whole against the whole's criteria can miss sub-problem-specific failures. Decomposition surfaces the structure so innovation can operate on tractable pieces.

### Why this order: E → S → D → I → C

The ordering is not arbitrary. Each step prepares the input for the next:

- **E before S** — exploration produces the field; sensemaking reduces it. Reverse the order and sensemaking has nothing to reduce *from* (or worse, reduces from a hallucinated field).
- **S before D** — decomposition needs a stable problem model to partition. Decomposing an ambiguous whole produces arbitrary boundaries.
- **D before I** — innovation works better on tractable pieces than on the unpartitioned whole. If decomposition reveals 3 sub-problems, innovation can apply mechanisms to each.
- **I before C** — same as `/MVL`. You can't critique what doesn't exist.

The first three (E → S → D) form what `/MVL+`'s rules call "the first phase" — strict sequence, no shortcuts. The last two (I → C) operate on the prepared problem.

### What `/MVL+` does NOT include

Even with E and D added, `/MVL+` still doesn't include:

- **Wayfinding** — iteration steering is still implicit narrowing, same as `/MVL`. No move taxonomy.
- **Synthesis as a separate discipline** — the `finding.md` writer is still `/MVL+` itself, just reading from 6 source files instead of 4.
- **Variable pipeline by classification** — every inquiry runs all 5 disciplines, regardless of problem type. That's `/inquiry`'s domain.
- **Per-branch sub-pipelines** — even though decomposition produces sub-problems, `/MVL+` does not run separate pipelines per sub-problem. It runs one I and one C against the decomposed view of the whole. Per-branch pipelines are also `/inquiry`'s domain.

These omissions matter. `/MVL+` adds territory-mapping and partitioning, but it stops there. The richer orchestration features (variable pipelines, wayfinding moves, per-branch coordination, project-deliverable synthesis) are reserved for `/inquiry`. This keeps `/MVL+` in the auto-chained-fixed-pipeline family — closer to `/MVL` than to `/inquiry`.

---

## Three Lifecycles

`/MVL+` recognizes the same three lifecycle states as `/MVL`, with one structural addition.

### 1. NEW — input is a question

When invoked with a question rather than a folder path, `/MVL+` does what `/MVL` does, with two differences:

- The pipeline written into `_state.md` is `E → S → D → I → C` (not `S → I → C`).
- A new field is written into `_state.md`: `flow-type: extended`. This marks the inquiry as belonging to `/MVL+`, not to `/MVL`.

The scope check in `_branch.md` is identical to `/MVL`'s — quiet quality gate that confirms the question covers the goal before any discipline runs.

### 2. RESUME — input is a folder path

When invoked on an existing inquiry folder, `/MVL+` does an extra check that `/MVL` doesn't:

1. Read `_state.md` and `_branch.md`.
2. **Verify `flow-type: extended` in `_state.md`.** If the field is `classic` or absent, this inquiry belongs to `/MVL`, not `/MVL+`. Flag to the user and stop.
3. Determine where the pipeline left off by checking which files exist.
4. Begin from the first incomplete discipline.

The flow-type verification is a deliberate guardrail. It means a user can't accidentally resume a `/MVL` inquiry with `/MVL+` (which would try to run E and D on a folder that has only S/I/C outputs and a `S → I → C` pipeline declaration). This protects the inquiry's integrity: each inquiry stays bound to the runner that started it.

The opposite is also true: `/MVL` should not resume an `extended`-flow inquiry. (`/MVL`'s spec doesn't currently enforce this explicitly — a small gap.)

### 3. ITERATION COMPLETE — all five discipline files exist

When all five of `exploration.md`, `sensemaking.md`, `decomposition.md`, `innovation.md`, `critique.md` exist for the current iteration, `/MVL+` evaluates whether the question is answered:

- **YES**: write `finding.md` (reading from 6 files: `_branch.md` + 5 disciplines), archive the discipline outputs to `docarchive/`, set status to COMPLETE.
- **NO**: increment iteration, reset all 5 progress checkboxes, narrow the focus, run another E → S → D → I → C pass on the refined question.

Note the "all 5 progress checkboxes" reset. A new iteration re-runs the entire pipeline including E and D, not just S/I/C. This is a real cost — exploration and decomposition are not cheap — but it's the consequence of the iterating-with-narrowed-focus pattern: a narrower question may have a different relevant territory and a different decomposition, so re-running E and D under the new focus is correct, not wasteful.

---

## The Discipline Transition Protocol

Identical to `/MVL`'s, with the discipline list extended:

```
1. Display checkpoint (telemetry from previous discipline + structural check result)
2. Load the next discipline's spec via Skill tool
   ├─ Skill succeeds → execute the loaded spec
   ├─ Skill fails → fall back to Read on the discipline's command file
   └─ Read also fails → HALT and tell the user how to run manually
3. Execute the spec at full depth; discipline saves output to inquiry folder
4. Run structural check on the saved output
   └─ If FAIL → fix the missing sections, re-save, re-run check
5. Update _state.md (check off discipline, set next)
6. Continue immediately to next discipline
```

The Skill-to-command mapping is extended with the two new disciplines:

| Discipline | Skill name | Output file |
|---|---|---|
| Exploration | `explore` | `exploration.md` |
| Sensemaking | `sense-making` | `sensemaking.md` |
| Decomposition | `decompose` | `decomposition.md` |
| Innovation | `innovate` | `innovation.md` |
| Critique | `td-critique` | `critique.md` |

The same robustness properties apply: never execute a discipline from memory alone, always load fresh, fall back to Read if Skill fails, halt with a manual-run hint if both fail. The structural check still gates each transition.

---

## The Iteration Pattern

Identical to `/MVL`'s pattern (implicit narrowing only; no rich move taxonomy), but with one practical implication.

When iteration N+1 begins after iteration N didn't fully answer the question:
- All 5 progress checkboxes reset.
- Next discipline is set to **Exploration**.
- The narrowed question becomes the new seed.

A narrower question often has a *narrower territory* and a *different decomposition*. Iteration N's exploration mapped the territory of question Q; iteration N+1's exploration maps the territory of refined-question Q' — which may be a sub-region of Q's territory, or may overlap differently. So the E re-run isn't redundant; it's re-anchoring to the narrower frame.

This is why `/MVL+` is more expensive per iteration than `/MVL`. Each iteration runs 5 disciplines instead of 3. If your inquiry converges in one iteration, the cost is 5 vs 3 — modest. If it takes 3 iterations, the cost is 15 vs 9 — substantial. Choosing `/MVL+` over `/MVL` is choosing to invest in territory-mapping and partitioning per iteration; choosing `/MVL` is choosing to skip those for problems where they don't pay off.

The terminate decision is the same as `/MVL`'s: implicit, made by the answer-quality check at ITERATION-COMPLETE. No max-iteration cap, no convergence telemetry across iterations.

---

## The Finding

When the question is answered, `/MVL+` writes `finding.md` directly — same as `/MVL`, but reading from **6 source files** (`_branch.md`, `exploration.md`, `sensemaking.md`, `decomposition.md`, `innovation.md`, `critique.md`) instead of 4.

### Structure (current spec)

The finding template is identical to `/MVL`'s — same frontmatter, same Question / Finding Summary / Finding / Next Actions / Reasoning / Open Questions sections, same three style rules (hedging specificity, cross-reference format, gate specificity).

### What changes for `/MVL+`'s finding

The Finding section is enriched with input from the two extra disciplines:

> Base on critique's "The Answer" or assembly verdict. Enrich with innovation's Assembly design, sensemaking's SV6 understanding, **exploration's territorial map**, **decomposition's coupling structure**.

And the Reasoning section explicitly handles cross-discipline contradictions:

> Include: Every KILL from critique with prosecution reasoning; Every KILL from innovation with rejection reasoning; Every SURVIVE with why it held; **Contradictions reconciled across exploration/sensemaking/decomposition (and how they were resolved).**

The "contradictions reconciled" line is the structural addition. With 5 disciplines instead of 3, contradictions across disciplines become more likely — exploration may surface a constraint that sensemaking later relaxes; decomposition may partition along boundaries that innovation later challenges. The finding has to surface these and explain how they were resolved, not paper over them.

### After the finding

Same as `/MVL`:
- Move all 5 discipline files to `docarchive/`.
- Update `_state.md`: status → COMPLETE, append to History.
- Print brief summary in conversation.
- Check `_state.md` for relationships and print pointers.

One small additional rule: when printing CONTINUES-FROM pointers, `/MVL+` checks the parent's flow-type and uses `/MVL+` or `/MVL` accordingly when telling the user how to resume the parent. This honors the per-inquiry runner binding.

---

## Cross-Session Resume

`/MVL+ <folder-path>` reads `_state.md`, **verifies flow-type: extended**, sees where the pipeline stopped, loads the next discipline's spec via Skill tool, and continues. The flow-type check is the only structural difference from `/MVL`'s resume.

The same three pieces make this work:
1. `_state.md` as source of truth.
2. File-existence cross-check.
3. Skill-tool spec loading for the discipline.

The same principle applies: state lives in files, not in conversation context.

---

## The Improvement-Observation Mechanism

Identical to `/MVL`'s. After ITERATION-COMPLETE, optional prompt for an observation; if provided, appended to `devdocs/improvement_observations.md` with date and context. The same self-improvement loop applies — when patterns emerge, run `/MVL+ "review improvement observations and propose spec changes"`. The runner improves itself using the same primitive it runs.

---

## Design Choices `/MVL+` Embeds

Restated from `loop_design_1.md`'s dimensions, here are the choices `/MVL+` makes:

| Dimension | `/MVL+`'s choice | Difference from `/MVL` |
|---|---|---|
| Drive mode | Auto-chained | Same |
| State tracking | Structured `_state.md` + file-existence cross-check + flow-type field | Adds `flow-type: extended` |
| Steering | Implicit narrowing only | Same |
| Iteration files | Overwrite during iteration; archive on terminate (5 files instead of 3) | More files archived |
| Pipeline flexibility | Fixed (E → S → D → I → C) | Different fixed pipeline |
| Branch parallelism | Decompose discipline runs but applies same pipeline to whole | Adds D; doesn't add per-branch pipelines |
| Synthesis | Folder-local `finding.md` written by the runner from 6 source files | More inputs, same template |
| Cross-inquiry learning | None (improvement-observations is the precursor) | Same |

The structural changes are concentrated in pipeline composition (3 → 5 disciplines) and in the flow-type field that prevents cross-runner accidents. Everything else carries over from `/MVL` unchanged.

---

## What `/MVL+`'s Spec Is Strict About

`/MVL+`'s rules section has 7 rules, mostly inherited from `/MVL`:

- **Always E → S → D → I → C.** Strict sequence in the first phase (E, then S, then D) before I and C. — This is the operational form of "non-trivial inquiries need richer first-phase scaffolding."
- **Each step saves to the inquiry folder** with the discipline's canonical filename. — Same as `/MVL`.
- **`_state.md` is the source of truth** — including the flow-type field. — Same plus flow-type.
- **If the question isn't answered, loop again.** — Same as `/MVL`.
- **The human can redirect at any point.** — Same as `/MVL`.
- **Failures are data.** — Same as `/MVL`.
- **Classic `/mvl` is UNCHANGED. This command (`/mvl+`) is separate and coexists with classic.** — This is the new rule. Existing classic inquiries resume with `/mvl`, not `/mvl+`. The `flow-type` field distinguishes them.

The last rule is operationally important: it prevents `/MVL+` from being treated as a replacement for `/MVL`. The two coexist; users pick per inquiry; the runner each inquiry started with stays bound to it via the flow-type field.

---

## The Tension with `/MVL`

Both spec files make claims about which is the default, and they disagree.

- `/MVL`'s spec, line 8: "This is the only primitive. Every cognitive task is a SIC loop applied to a different question."
- `/MVL+`'s spec, line 8: "Use `/mvl+` as the default for new inquiries; use `/mvl` classic for simple well-defined problems when speed matters."

Under `/MVL`'s claim, `/MVL+` is a special case for problems that need extra scaffolding; the primitive is SIC, and E + D are optional additions. Under `/MVL+`'s claim, `/MVL+` is the default and `/MVL` is the special case for simple problems.

This isn't reconcilable as written. One of them is the architectural primitive, and the other is a derivation from it. The current state ships both with their conflicting orientations and lets the user resolve the tension situationally.

The deeper question is which framing serves the project better:

- **`/MVL`-as-primitive framing:** strong claim that compresses the cognitive loop to its essential shape (anchor meaning → generate → evaluate). E and D are scaffolding that helps when the problem is unfamiliar or partitionable, but they're additions to a primitive, not the primitive itself. `/MVL+` is "SIC plus."
- **`/MVL+`-as-default framing:** observation that most non-trivial inquiries benefit from territory-mapping and partitioning. SIC alone underprepares the problem. `/MVL` is the optimization for cases where you already have the territory and the problem is already tractable.

Both have evidence in their favor. `/MVL`'s primitive claim is theoretically clean and connects to the project's "S→I→C is the only primitive" mission. `/MVL+`'s default claim matches observed behavior on harder problems where SIC alone tends to produce thin sensemaking and undifferentiated innovation candidates.

A future `loop_design_4.md` could attempt to reconcile this. Possible reconciliations:
- Keep `/MVL` as the primitive, demote `/MVL+`'s "default" claim to "default for non-trivial new domains."
- Keep `/MVL+` as the default, demote `/MVL`'s "only primitive" claim to "the inner loop within `/MVL+`'s outer framing."
- Reframe E and D as opt-in **prefixes** to the SIC primitive: `/MVL` runs SIC; `/MVL --explore --decompose` runs ESDIC; the primitive is still SIC, and E/D are prefix transformations that prepare the problem.

Today, neither runner's spec makes any of these moves. The tension is documented but unresolved.

---

## What's Not Yet in `/MVL+`

Things `/MVL+` doesn't currently do that future revisions might add:

- **Per-branch pipelines.** Decomposition surfaces sub-problems, but `/MVL+` runs one I and one C against the whole decomposed view, not per-branch SIC passes. Adding per-branch sub-pipelines would absorb one of `/inquiry`'s distinct features.
- **Wayfinding as a separate discipline.** Same as `/MVL`'s gap. Externalizing iteration-narrowing logic would benefit both runners.
- **Cross-iteration file separation.** Same as `/MVL`'s gap, with even higher cost since `/MVL+` overwrites 5 files per iteration instead of 3.
- **Cross-inquiry learning.** Same as `/MVL`'s gap.
- **A proper synthesis discipline.** Same as `/MVL`'s gap; the finding template handles synthesis, but a dedicated `/synthesize` discipline would improve quality.
- **Convergence telemetry across iterations.** Same as `/MVL`'s gap.
- **Reconciliation with `/MVL`'s primitive claim.** This is `/MVL+`-specific — the structural tension between "SIC is the primitive" and "/MVL+ is the default" is unresolved.

Most of these are shared gaps with `/MVL`, which is unsurprising — `/MVL+` extends `/MVL`'s pipeline but inherits its operational machinery.

---

## Why "Notes 3"

`loop_design_1.md` is the cross-runner taxonomy. `loop_design_2.md` is `/MVL`'s deep walkthrough. `loop_design_3.md` (this file) is `/MVL+`'s deep walkthrough. The trio progresses from comparative (1) to specific (2 and 3). A future `loop_design_4.md` could be `/inquiry`'s deep walkthrough; `loop_design_5.md` could propose a unification that respects what 2 and 3 documented as load-bearing.

The motivation for separate per-runner walkthrough docs (rather than one combined doc) is that the runners have meaningfully different identities, and a combined doc tends to either compress them into a least-common-denominator description or balloon into a sprawling comparison that nobody reads end-to-end. Separate docs that share structure (so the reader can compare section-by-section across files) preserve the specifics while making comparison cheap.
