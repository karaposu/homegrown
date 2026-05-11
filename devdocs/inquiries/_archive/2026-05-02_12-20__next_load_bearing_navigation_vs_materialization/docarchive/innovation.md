# Innovation: Next Load-Bearing Navigation vs Materialization

## User Input

`devdocs/inquiries/2026-05-02_12-20__next_load_bearing_navigation_vs_materialization/_branch.md`

## Seed

The user feels Navigation may be the next load-bearing development because choosing where to move in thinking space is increasingly hard, but materialization lifecycle is also unfinished and may be required before Homegrown can safely build itself.

Valuation signal: the next step should reduce the user's ongoing developer burden, not just add a concept.

## Mechanism 1 - Lens Shifting

### Generic

Evaluate "next" under the lens of **user relief**.

Output: Navigation should be next, because the user's active pain is choosing which inquiry, branch, or protocol move matters.

### Focused

Evaluate "next" under the lens of **system self-building capacity**.

Output: Artifact materialization should be next, because Homegrown cannot reliably turn selected decisions into files without a governed implementation lifecycle.

### Contrarian

Evaluate "next" under the lens of **evidence production**.

Output: The next move is neither Navigation nor materialization alone; it is a small loop that produces evidence about whether Navigation + materialization actually reduces burden.

## Mechanism 2 - Combination

### Generic

Combine Navigation and materialization into a single development chain:

```text
Navigation selects the next artifact target.
Materialization creates the artifact.
Outcome review checks whether it helped.
```

### Focused

Combine current branch capability with Navigation:

```text
Navigation maps candidate child inquiries.
Branch protocol creates only the selected branch.
Materialization creates artifacts only after a selected branch/finding authorizes them.
```

### Contrarian

Combine materialization trace with Navigation memory:

```text
Every materialization trace becomes a future Navigation input.
Navigation stops being only "what did this finding say?"
It becomes "what work produced value after implementation?"
```

## Mechanism 3 - Inversion

### Generic

Invert "build what the user most feels missing."

Output: Build what the system most structurally lacks, even if the user feels a different pain. That points to materialization.

### Focused

Invert "Navigation should become stronger."

Output: Navigation should become **lighter immediately** but better fed by evidence. The improvement is not bigger Navigation first; it is better Navigation inputs from materialization/outcome records.

### Contrarian

Invert "materialization should precede Navigation."

Output: A Navigation session should precede materialization to prevent materializing the wrong thing. But this is a use-order inversion, not a build-order inversion.

## Mechanism 4 - Constraint Manipulation

### Generic

Add constraint: no large new runtime or persistent observer.

Output: Build a protocol artifact, not a live Navigation Observer session.

### Focused

Add constraint: the next artifact must be dogfoodable immediately.

Output: `homegrown/protocols/artifact_materialization.md` survives because it can be used on the next Navigation-relief artifact right away.

### Contrarian

Add constraint: zero protocol edits allowed.

Output: The only viable next move is to run an existing Navigation session and use manual discipline. This relieves immediate burden but does not improve system carrying capacity. The constraint reveals why protocol materialization is necessary.

## Mechanism 5 - Absence Recognition

### Generic

Missing artifact: `homegrown/protocols/artifact_materialization.md`.

Output: This absence is concrete and blocking. The theory exists; the operational protocol does not.

### Focused

Missing bridge: Navigation output does not yet have a controlled path into artifact creation.

Output: The true missing capability is not "Navigation" or "materialization" separately, but **Navigation-to-materialization handoff**.

### Contrarian

Missing proof: there is not yet evidence that any Navigation improvement reduces the user's burden.

Output: The first Navigation artifact should have an outcome-review gate: did it actually make next-move choice easier?

## Mechanism 6 - Domain Transfer

### Generic

Transfer from software delivery pipelines:

```text
triage -> ticket -> plan -> review -> implementation -> validation -> retrospective
```

Output: Homegrown needs the same separation: Navigation triages, materialization implements, outcome review retrospects.

### Focused

Transfer from compiler architecture:

```text
parse -> plan/IR -> optimization/checking -> codegen -> runtime feedback
```

Output: MVL findings and Navigation maps are not final code. Materialization is the codegen stage that needs contracts and validation.

### Contrarian

Transfer from research labs:

```text
literature map -> experiment selection -> protocol -> run -> result -> lab notebook
```

Output: Navigation is the literature/experiment map. Materialization is the experimental protocol. Outcome review is the lab notebook. The next load-bearing move is to connect all three.

## Mechanism 7 - Extrapolation

### Generic

If current growth continues without materialization:

```text
more findings -> more possible moves -> more user burden -> more ad hoc edits
```

Output: Navigation alone may increase option load if the implementation bridge is missing.

### Focused

If current growth continues with materialization but without Navigation:

```text
safer artifact creation -> but target choice still depends on user memory
```

Output: Materialization alone improves safety but not strategic relief.

### Contrarian

If current growth continues with Navigation + materialization + outcome review:

```text
map options -> build selected artifact -> review actual usefulness -> feed future maps
```

Output: This is the first credible small self-building loop.

## Candidate Survivors

### Candidate A - Navigation Session First, Then Materialization Artifact

Run a separate Navigation session now over current project state to pick/confirm the first concrete materialization target. Then bootstrap `homegrown/protocols/artifact_materialization.md`.

Tests:

- **Novelty:** Medium. It reframes "Navigation vs materialization" as session-order vs artifact-order.
- **Scrutiny survival:** Strong. It respects the user's felt burden without letting Navigation architecture bypass materialization.
- **Fertility:** High. Produces a repeatable pattern for later strategic decisions.
- **Actionability:** High. Can be done immediately.
- **Mechanism independence:** High. Lens shifting, inversion, and constraint manipulation converge here.

### Candidate B - Materialization Protocol First, Dogfood On Navigation Observer

Create `homegrown/protocols/artifact_materialization.md` next, then use it to materialize a `navigation_observer.md` protocol/report contract as the first dogfood artifact.

Tests:

- **Novelty:** Medium. The dogfood target makes the materialization protocol immediately useful.
- **Scrutiny survival:** Strong. It fills a concrete absence and connects to user burden.
- **Fertility:** High. Creates a pattern for future protocol/artifact edits.
- **Actionability:** High. Concrete target paths exist.
- **Mechanism independence:** High. Combination, absence recognition, and domain transfer converge here.

### Candidate C - Navigation-to-Materialization Handoff Contract

Instead of only creating `artifact_materialization.md`, explicitly define how a Navigation item becomes a materialization request.

Tests:

- **Novelty:** High. It names the missing seam between two capabilities.
- **Scrutiny survival:** Medium. It may be too early if `artifact_materialization.md` does not exist yet.
- **Fertility:** High. Later supports meta-loop, branch sets, and navigation memory.
- **Actionability:** Medium. Needs either inclusion in artifact materialization or a later protocol.
- **Mechanism independence:** High. Absence recognition, combination, and domain transfer converge here.

### Candidate D - Lightweight Navigation Memory From Traces

Make materialization traces and outcome reviews readable by Navigation so future maps use evidence about what worked.

Tests:

- **Novelty:** Medium.
- **Scrutiny survival:** Medium. Useful but premature until traces and outcome reviews exist.
- **Fertility:** High. Later supports state comprehension and selector calibration.
- **Actionability:** Low-to-medium now. Needs records first.
- **Mechanism independence:** Medium.

### Candidate E - Build Separate Persistent Navigation Observer Now

Create a separate role/session that watches MVL runs and manages Navigation.

Tests:

- **Novelty:** High.
- **Scrutiny survival:** Weak for immediate next step. It adds runtime/role complexity before report format, outcome memory, and selector boundaries are validated.
- **Fertility:** High later.
- **Actionability:** Medium, but risky.
- **Mechanism independence:** Low-to-medium.

Verdict before critique: refine/defer.

### Candidate F - Multihead Branch Brute Force

Use branch protocol to run several Navigation-derived MVL+ branches and compare them later.

Tests:

- **Novelty:** Medium.
- **Scrutiny survival:** Weak now. Comparison, merge, and outcome records are not mature enough.
- **Fertility:** High later.
- **Actionability:** Medium, but likely increases digestion burden.
- **Mechanism independence:** Medium.

Verdict before critique: defer.

## Assembly Check

The strongest assembly is:

```text
1. Navigation session/report now
   -> reduces immediate choice burden and selects target.

2. Bootstrap artifact_materialization.md
   -> gives Homegrown a safe decision-to-files protocol.

3. Dogfood artifact_materialization.md on Navigation Observer/report protocol
   -> makes the first materialization directly target user's Navigation burden.

4. Use outcome_review after the Navigation-relief artifact is used
   -> records whether it actually helped.
```

This assembly is stronger than any individual candidate:

- Navigation alone helps choose but does not build.
- Materialization alone builds safely but may not choose the right thing.
- Outcome review alone learns after use but needs an artifact to review.
- The assembly creates a closed micro-loop.

## Recommended Innovation Output

The next load-bearing development should be:

```text
materialization-backed Navigation relief
```

Operational sequence:

1. Run/use Navigation now if the user needs immediate next-move relief.
2. Create `homegrown/protocols/artifact_materialization.md` as the next artifact.
3. Use it immediately on a Navigation-relief artifact, preferably a protocol-first `navigation_observer.md` report contract or navigation-memory report convention.
4. Add an outcome review gate after that artifact is used.

## Explicit Deferrals

- Persistent Navigation Observer session: defer until protocol-first reports prove useful.
- Autonomous selector: defer until outcome records calibrate route quality.
- Multihead branch execution: defer until comparison/merge/outcome policy exists.
- State comprehension controller: defer until there are enough records to comprehend.
- ARC harness: materialize later under Full mode; do not use it as the general next substrate.

## Telemetry

- **Generators applied:** 4 / 4
- **Framers applied:** 3 / 3
- **Convergence:** YES. Five mechanisms converge on Navigation + materialization + outcome review as one sequence.
- **Survivors tested:** 6 / 6
- **Failure modes observed:** None. The output avoids single-mechanism trap and avoids premature evaluation.
- **Overall:** PROCEED

## Verification Gap

`tools/structural_check.sh` is absent, so automated structural validation could not be run.
