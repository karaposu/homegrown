---
status: active
model: claude-opus-4-8[1m]
effort: unknown
---
# Finding: The MVL Family as Build-up Steps Toward Traverse — and Why Traverse Is the One Loop to Maintain

## Question

From `_branch.md` (articulated from the user's request): *"lets increase our understand how MVL, MVLw, aMVLw, aMVLwr were all building steps towards traverse skill. and how it is the only thing that should maintain from now on."*

Some background a fresh reader needs. This project is a **cognitive harness** — a set of "thinking disciplines" (each a Markdown spec an AI executes as a slash command, e.g. `/sense-making`, `/innovate`) plus **worker-loop runners** that chain those disciplines into a fixed pipeline to take one question to one written conclusion (a `finding.md`). `MVL`, `MVLw`, `aMVLw`, and `aMVLwr` are four such runners; `traverse` is a fifth, created recently as a renamed copy of `aMVLwr`. In a just-completed cleanup the user moved the four older runners into a `non-active/` folder and left only `traverse` installed and live.

**Goal:** an explanatory account (candidate canon material) that (a) explains *how* the four runners were incremental build-up stages toward traverse — each adding one cognitive operation — and (b) justifies *why* traverse should be the only worker loop maintained going forward. The account also re-tests two prior records that already touch this question and must reconcile a contradiction between them. Failing if it leans on status-quo bias, overclaims, or smuggles in work the user didn't ask for.

## Finding Summary

- **The four runners are not sibling variants competing for use. They are four snapshots of ONE loop under construction** — each snapshot is the loop with one more cognitive operation added than the last.

- **Each runner's name literally spells how much of the loop had been assembled.** `MVL` is the core three-step kernel (Sensemaking → Innovation → Critique). The added letters are added operations: `w` adds Surfacing + Decomposition; the `a`-prefix adds Articulation; the `r`-suffix adds Routelister. `MVL` + `w` + `a` + `r` = `aMVLwr`, which was renamed `traverse`.

- **The build order and the composition order are the same order.** Each later runner's pipeline *strictly contains* every earlier runner's pipeline (a nested chain, not a branching set of alternatives). `traverse` is that chain's complete top.

- **"Maintain only traverse" is structurally forced — on the dimension that matters most.** Because traverse runs every operation the ancestors run plus more, it can do anything they could on the *cognitive* dimension; retiring them loses no thinking capability. So the keeper-rule is a consequence of the structure, not a preference.

- **One honest exception, stated plainly: speed.** The smallest runner, `MVL`, was also the deliberately *fast* lane for simple questions. The complete loop is slower (it always runs all seven steps). Retiring `MVL` therefore defers a speed affordance — the one thing the complete loop does *not* subsume. The correct home for any future speed need is an optional "quick mode" on traverse, **not** a revived ancestor. This is noted as a possibility, not scheduled as work.

- **The retired runners are honored scaffolding, not mistakes and not deletions.** They were the legitimate construction process; they become redundant only *now* that the complete loop exists. They are preserved as readable history in `non-active/`. Because traverse keeps the same internal identity tag (`flow-type`) as `aMVLwr`, it still resumes any in-flight `aMVLwr` inquiry.

- **Two live canon documents now misdescribe reality and should be updated; the historical findings that mention the old names must NOT be touched.** `worker_loop_logic.md` and `naming_change.md` still present the old runners as current/coexisting; they are canon explainers and should be corrected. By contrast, past `finding.md` files that reference `/aMVLw` etc. are immutable historical records and stay as written.

## Finding

### Why we are even asking this

The project's larger goal is a self-sustaining "loop of loops" called **SUSTRALL** (a sustained traversal across many inquiries), in which a single worker loop is the repeated *unit* of work. For that to be clean, the project needs one well-defined worker-loop unit, not a menu of near-duplicate ones. The user has just consolidated the worker-loop runners down to a single one (`traverse`) and wants the reasoning behind that consolidation made explicit and durable — both to ratify the decision and to leave a legible record of how the project's own thinking tool was built.

### 1. The lineage — one loop, assembled one operation at a time

A worker loop runs a fixed sequence of thinking disciplines. Writing each discipline by its initial, the four runners' pipelines are:

| Runner | Pipeline | Internal identity tag (`flow-type`) | What it adds vs. the previous |
|---|---|---|---|
| `MVL` | S → I → C | `classic` | the core kernel itself |
| `MVLw` | Su → S → D → I → C | `extended-surfacing` | **+ Surfacing (Su)** and **+ Decomposition (D)** |
| `aMVLw` | A → Su → S → D → I → C | `articulated-surfacing` | **+ Articulate-Simple (A)** |
| `aMVLwr` = **`traverse`** | A → Su → S → D → I → C → R | `articulated-surfacing-routed` | **+ Routelister (R)** |

(Legend: A = Articulate-Simple, make the question precise before working it · Su = Surfacing, draw the relevant material into view · S = Sensemaking, turn ambiguity into a stable model · D = Decomposition, cut the problem at its joints · I = Innovation, generate candidate ideas · C = Critique, adversarially test them · R = Routelister, enumerate the onward directions as an exhaust step.)

Two facts make this a *build-up*, not a set of alternatives:

**The names are additive.** Each affix on `MVL` is one more operation: the `w` ("with surfacing"), the `a`-prefix ("articulated"), the `r`-suffix ("routed"). Read left to right, the name `aMVLwr` is a parts list of the assembled loop.

**The pipelines are strictly nested.** `MVL`'s three steps are a subset of `MVLw`'s five, which are a subset of `aMVLw`'s six, which are a subset of `traverse`'s seven. Nothing present in an earlier runner is absent from a later one. (This is what distinguishes the spine from a genuine branch: `MVL+`, an older "explore variant" with pipeline E → S → D → I → C, swaps a different front-end (Exploration) in place of the A+Su front-end. It is therefore *off* the spine — a side-branch, retired earlier — and is not part of this lineage.)

A useful way to see what each step adds: the project's own "kernel" framing (in `the_kernel_bet.md`) maps each discipline to one job of cognitive self-regulation. On that reading, the build-up is **the loop growing one cognitive organ at a time** — first the core reasoning kernel (S-I-C), then the ability to draw in and partition material (Su, D), then the ability to get the question right before starting (A), then the ability to see where to go next (R). Canon already argues each addition is *necessary, not decorative*: `worker_loop_logic.md` states that without surfacing, "sensemaking risks anchoring on superficial features and innovation operates on an unpartitioned whole."

### 2. Why traverse is the one to keep

The keeper-rule rests on three independent grounds — independent in the sense that removing any one still leaves a case:

**Ground 1 — Superset dominance (on cognitive capability).** Because traverse's pipeline contains every ancestor's pipeline, anything an ancestor produces, traverse produces too. Retiring the ancestors loses no *thinking* capability. This is the structural backbone of the keeper-rule.

**Ground 2 — One unit for the loop-of-loops.** SUSTRALL repeats the worker loop as its unit. A single, well-defined unit serves that better than four near-duplicate ones — and maintaining four near-duplicate specs has a real, observable cost (see the canon-staleness we are cleaning up in §4 and Next Actions).

**Ground 3 — Consumer-contract fit.** The project's own standard for "good enough" (`When_Is_the_Worker_Loop_Good_Enough.md`) is *satisficing on the consumer's contract* — the next layer up reads the loop's *artifacts*. The complete loop is the one whose artifacts match what the downstream consumer needs; notably, only the routed loop produces the onward-route index (`_route.md`) the loop-of-loops layer is designed to read.

**The one honest qualification — speed.** Superset dominance holds on *cognitive output*, but not on every axis. The smallest runner, `MVL`, was explicitly positioned as the fast lane ("Use `/MVL` … when speed matters"). Because traverse always runs all seven steps, it is slower; a full run is a real time cost (one canon finding clocks a six-step run at roughly 28 minutes). So retiring `MVL` does defer *something* — speed — even though it defers no thinking capability. The resolution is not to keep a second runner alive: a speed need, if it ever actually arises, is best served by an **optional quick mode on traverse** (run the S-I-C kernel only, with the other stages dormant), which is *less* maintenance surface than a separate `MVL` spec. This is recorded as an available direction, deliberately ungated — not proposed as work to do now.

### 3. The forward rule, and how to regard the retired runners

**The rule, stated descriptively:** maintain exactly one worker-loop runner — `traverse`. Future cognitive operations, if added, *extend that one loop*; they do not spawn new affix-named runners. "Maintain" here means *keep installed and keep improving*; it does not mean "the only one that may exist." (An important boundary: this is an understanding of the maintenance decision, **not** a directive to go re-architect traverse into a parameterized engine. No such build is requested or implied.)

**How to regard the ancestors:** they are *honored scaffolding*. A fitting image is a **bootstrap compiler** — the minimal stage-0 tool you build in order to build the fuller tool, whose source you keep but do not ship. (The civil-engineering term *falsework* — the temporary structure holding an arch up until its keystone is set — captures the "necessary then set aside" idea vividly, with one disanalogy worth stating: unlike struck falsework, these runners are *preserved* as readable history, not discarded.) Crucially, the ancestors were not errors. During construction, having the loop at several lengths *was* the development process; the multiplicity becomes redundant only once the complete loop exists. They now live in `non-active/`, not deleted, so the project's evolution stays traceable.

**Why the retirement is backward-compatible:** a runner's real identity is its `flow-type` tag, not its command name. `traverse` keeps `aMVLwr`'s tag (`articulated-surfacing-routed`), so it resumes any half-finished `aMVLwr` inquiry exactly as before. Inquiries created under the older runners carry their own tags and remain valid historical records.

### 4. A reusable pattern this suggests (observation, not yet a rule)

The four runners instantiate a general method: *build a complex cognitive loop by adding one operation at a time; once the complete loop exists, maintain only it and demote the construction stages to history.* This is a genuinely transferable idea — it would govern any future loop-family the project builds. But it rests on a single instance (this one family). By the project's own standard ("two instances justify a protocol; one is an observation"), it is recorded here as an **observation/frontier**, not canonized as a methodology.

## Inherited Commitments Re-test

`_branch.md` declared a Synthesis Trigger over two prior records this inquiry consumes. Each load-bearing commitment, re-tested:

- **Commitment:** the four runners were "the incremental build-up of one canonical loop," each adding a missing operation; `traverse` supersedes them; `MVL` is the SIC kernel / lightweight mode; existing `articulated-surfacing-routed` inquiries remain resumable by `traverse`.
  - **Source:** `cognitive_harness/non-active/MVL_family_archive_note.md`.
  - **Re-test status:** **RE-TESTED — commitment confirmed.** **Evidence:** the strict nesting of the four pipelines (§1) confirms "incremental build-up of one loop" structurally; the shared `flow-type` confirms resume-compatibility; `minimum_viable_loop.md` and `worker_loop_logic.md` independently confirm `MVL` as the SIC kernel and the fast lane. The archive note's framing is sound and is the backbone of this finding.

- **Commitment:** `/traverse` is the same articulated-surfacing-routed worker loop as `/aMVLwr` (name-only change; pipeline, disciplines, and flow-type unchanged; resumes `aMVLwr` inquiries) — AND the statement that the affix-named members `/MVL`, `/MVLw`, `/aMVLw` are "unchanged and **coexist with** it."
  - **Source:** `docs/canon/naming_change.md`.
  - **Re-test status:** **RE-TESTED — commitment confirmed but frame revised.** **Evidence:** the *name-only-change* and *flow-type-preserved* commitments are confirmed (and load-bearing for §3's backward-compatibility point). But the **"coexist" clause is now stale.** It was written during the rename transition — `naming_change.md`'s own "Transition state" section anticipated that "Retiring the `/aMVLwr` alias is a later cleanup." That cleanup has since happened: the three affix runners are in `non-active/` and the installer ships only `traverse` (verified against the filesystem). So "coexist" as *live peers* is no longer true; the frame shifts from "coexisting variants" to "one canonical loop; the affix-named stages are retired/historical." `naming_change.md` should be updated to match (see Next Actions).

*Pattern note (per the protocol's soft signal): one confirm and one confirm-with-frame-revision — the inheritance was pressed, not absorbed. The frame revision is exactly where this inquiry earned its keep: it caught a live canon document contradicting the project's current filesystem state.*

## Next Actions

No item is a hard MUST — the retirement itself is already done, and this finding's core value (the understanding, and the ratification of the decision) is realized as written. The items below improve canon accuracy and findability.

### COULD

- **What:** Reconcile the two stale **live** canon documents with the consolidated reality.
  **Who:** one editing pass (user approves canon touches). Update `docs/canon/worker_loop_logic.md` (its §3 still says "Two worker loop runners are shipped: `/MVL` … `/MVLw`") and `docs/canon/naming_change.md` (its present-tense "coexist" clause and now-completed "Transition state" section).
  **Gate:** observable — whenever convenient.
  **Why:** these are live canon explainers that now contradict the filesystem; a future AI resuming the project would be misled. **Boundary — do NOT edit immutable findings:** documents like `docs/canon/When_Is_the_Worker_Loop_Good_Enough.md` reference the old runner names *historically* and are immutable records; correcting them would violate the project's preserve-history principle.

- **What:** Promote this finding's lineage-and-maintenance account into canon — either a new `docs/canon/` document or folded into the reframed `naming_change.md`.
  **Who:** one authoring session.
  **Gate:** observable — any next canon-work session.
  **Why:** the user asked for candidate canon; making the account standing (not just a finding) is the durable record of why traverse is the one loop.

- **What:** Consolidate the "a runner's name is a label; its `flow-type` is its identity" principle into one crisp canon line.
  **Who:** one edit (likely lands inside the promoted canon doc above).
  **Gate:** observable.
  **Why:** the principle recurs across `naming_change.md`, the resume mechanism, and this finding; it is what makes the rename + retirement safe.
  **Depends-on:** COULD item "Promote the account into canon." This COULD is GATED — do it as part of, or after, that promotion.

### DEFERRED

- **What:** Add an optional speed "quick mode" to traverse (kernel-only S → I → C, other stages dormant).
  **Gate:** revival trigger — *only if* a concrete speed need actually arises in practice (e.g., a class of simple questions where the full seven-step run is too costly).
  **Why (if revived):** it re-homes the one affordance retirement deferred, without reviving a separate ancestor runner. Until such a need is observed, building it would be speculative.

- **What:** Elevate the "build one operation at a time; keep only the complete loop" pattern into a reusable methodology entry.
  **Gate:** revival trigger — when a **second** loop-family instance appears (the project's "N=2 justifies a protocol" rule).
  **Why (if revived):** one instance is an observation; a second makes it a pattern worth canonizing.

- **What:** Diagnose the status of the `MVL+` explore-variant side-branch (its Exploration front-end vs. the A+Su front-end the spine uses).
  **Gate:** revival trigger — if the Exploration front-end ever becomes relevant to traverse's design.
  **Why (if revived):** it is a named-but-set-aside loose end; low stakes today.

## Reasoning

**Why "the four are one loop's construction stages" beat "the four are sibling variants."** The decisive evidence is structural, not narrative: the pipelines are strictly nested supersets and the names are literally additive. Sibling variants would diverge (as `MVL+` actually does, by swapping its front-end); the spine four only *grow*. This reading was stress-tested by deliberately arguing the opposite ("maybe they were parallel experiments") and the opposite failed on the nesting fact.

**Why the keeper-thesis was refined rather than accepted as stated.** An earlier formulation said retiring the ancestors "loses nothing." Adversarial testing killed that wording: it is false on the *speed* axis, because `MVL` was the documented fast lane and the complete loop is slower. The surviving, honest form splits the claim by plane — retirement is *forced* on the cognitive-capability plane (superset dominance) but a *choice* on the operational/speed plane (justified by maintenance cost and the project's completeness trajectory, not by logical necessity). Keeping the speed point visible, rather than burying it, is what makes the keeper-rule trustworthy.

**Why the rule is stated descriptively, not as a build order.** A candidate framing ("maintain one runner; parameterize the stage-set") was attractive because it cleanly re-homes the speed need. But it risked being read as a directive to re-architect traverse into a parameterized engine — work the user never asked for (the ask was to *understand* and *ratify*). It was refined to a descriptive principle plus an explicitly ungated future option, removing the imperative reading.

**Why the canon-cleanup spares the findings.** A natural over-reach is "update every doc that mentions the old names." Critique caught that this would corrupt the historical record: past `finding.md` files are immutable (a finding that said `/aMVLw` was correct for its time). The cleanup is therefore scoped to *live canon explainers* (`worker_loop_logic.md`, `naming_change.md`) and explicitly excludes the immutable findings.

**Significant rejections.** *"Loses nothing"* — killed (false on speed; replaced by the cognition/speed split). *"Coexist" as current truth* — found stale (the transition it described has completed). *"Delete the ancestors"* — rejected (counter to the preserve-history principle; `non-active/` over deletion was already the user's choice). *Canonizing the construction-method now* — rejected (one instance is an observation, not a protocol). *The "falsework" image as a literal claim* — softened (the ancestors are preserved, not struck; bootstrap-compiler is the more honest analogy).

**A note on self-reference.** This inquiry used the project's own thinking disciplines to evaluate the project's own loop family — a circularity risk. It was guarded by grounding every load-bearing claim in external facts: the literal pipeline definitions, verbatim canon quotes, and the actual filesystem/installer state (which is how the "coexist" staleness was confirmed rather than asserted).

## Open Questions

### Monitoring
- **Does the canon-cleanup happen?** Observable: `worker_loop_logic.md` §3 and `naming_change.md`'s "coexist" clause updated to reflect that only `traverse` is live. Until then, canon contradicts the filesystem.

### Research Frontiers
- **The construction-method at N=2.** What a second loop-family instance would look like, and whether the "keep only the complete loop" pattern survives contact with it.
- **A traverse quick-mode design.** If a speed need arises, what the cleanest dormant-stage mechanism is (a flag on the runner? a stage-skip parameter?) — undesigned today, deliberately.

### Refinement Triggers
- **If an 8th cognitive operation is ever added to the loop** → the construction-method re-applies (add the operation to traverse; do not spawn a new affix-runner), and this finding's keeper-rule should be re-read in that light.
- **If a concrete, recurring speed need is observed** → the DEFERRED quick-mode item revives, and the cognition/speed split in §2 becomes an active design question rather than a noted caveat.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
lets increase our understand how MVL,MVLw,aMVLw,aMVLwr were all buidling steps towards traverse skill. and how it is the only thing that should maintain from now on
```

</details>
