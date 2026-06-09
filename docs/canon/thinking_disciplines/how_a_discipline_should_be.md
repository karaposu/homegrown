# How a thinking discipline should be

Many times during discipline creation we have ended up with something mixed up rather than a pure discipline. This doc states what a pure discipline IS and how to recognize when the runtime spec has drifted away from that purity.

## What a thinking discipline is

A thinking discipline is a cognitive operation approximation, written as a skill file. Disciplines are individually usable — each one stands on its own as a coherent operation a human or LLM can run — and chainable — they compose into loops (e.g., MVL, MVLw) or other operational arrangements.

Disciplines live in `cognitive_harness/<discipline>/`, with the entry point at `SKILL.md` and the runtime canonical spec at `references/<discipline>.md`.

## Think of each discipline individually first

Even though we usually create a discipline because some loop or other operational need triggered the creation, the discipline must make sense individually. The meta question "what IS this discipline?" must have an answer that does not depend on naming the loop, the runner, or the other disciplines in the chain.

The existing disciplines pass this test:

- **Sensemaking** defines what sensemaking IS in meta terms — transforming vague, ambiguous situations into stable understanding through anchor extraction, perspective checking, ambiguity collapse, and degrees-of-freedom reduction. The definition holds whether sensemaking is being run standalone, inside MVL, inside MVLw, or anywhere else.
- **Innovation** defines what innovation IS — producing novel content and viable evaluation conditions through seven mechanisms (combination, absence recognition, domain transfer, extrapolation, lens shifting, constraint manipulation, inversion). Again, standalone-coherent.
- **Critique** defines what critique IS — adversarial evaluation of competing candidates across extracted dimensions, producing positional verdicts on a fitness landscape.

If the discipline's own runtime spec cannot describe what the discipline IS without naming the upstream or downstream disciplines that consume its output, it is not yet a pure discipline.

## The three layers we go through when developing a new discipline

When developing a discipline from scratch, we typically go through three layers in sequence:

1. **Meaning layer** — what the discipline IS as a cognitive operation. What concept does it capture. What its essence is. The artifact this produces is typically `devdocs/how_<discipline>_should_be.md`.
2. **Structural layer** — what the spec LOOKS LIKE. What sections, what organization, what artifact shape. The artifact is typically a structural redesign finding that re-organizes the meaning-layer doc.
3. **Process layer** — what STEPS the discipline runs at invocation time. The procedure, the gates, the mechanism. The artifact is typically `devdocs/how_<discipline>_process_should_be.md`.

These three artifacts are **development-history docs**. They are correct as such — they document a discipline that emerged through inquiries, and they preserve the lineage of decisions (which finding settled what, what cascade pressure accumulated, what was deferred). For their purpose, they are valuable.

But they are not the runtime canonical spec.

## Dev-history docs are NOT runtime canonical specs

The runtime canonical spec is a different artifact type — `cognitive_harness/<discipline>/references/<discipline>.md`. It is loaded by `SKILL.md` at Step 0 before the discipline executes.

**Do not integrate dev-history docs into the runtime spec as if they were the same kind of artifact.** Doing so carries project-internal scaffolding into a place where it does not belong — provenance attributions ("per the YYYY-MM-DD finding"), cascade-refinement labels, names of downstream disciplines that happen to consume the output in some specific loop, deferred future-work references, cumulative-cascade-pressure tracking, inheritance maps.

That scaffolding is load-bearing in the dev-history docs (the dev-history docs are documenting the discipline's development within the project's inquiry architecture). It is noise in the runtime spec (the LLM running the discipline does not need to know which 2026-06-XX finding established a concept — it just needs to perform the operation correctly).

## The missing step: distillation

Between the dev-history docs and the runtime canonical spec, there is an explicit **distillation step**. This step is what was missing in our `articulate_simple` creation, and it is the step that the other disciplines (surfacing, sense-making, decompose, innovate, td-critique) clearly went through — their runtime specs read cleanly because the distillation was done.

In distillation:

**Strip:**
- Inquiry-finding provenance ("per the YYYY-MM-DD finding").
- Cascade-era labels ("foundational vs cascade-era", "re-framed at cascade level").
- Names of downstream disciplines that consume the output in some specific loop.
- Names of upstream operations that feed input in some specific loop.
- References to deferred future versions of this discipline.
- Cumulative-cascade-pressure tracking, touch counts, calibration-state sections.
- Inheritance maps tracing concepts back to specific findings.
- "The runner" or other runner-specific language.

**Keep:**
- What the discipline IS (the cognitive operation, in meta terms).
- The operations / mechanisms / phases the discipline runs.
- The runtime shape — entry points, gates, edges, modes.
- The output contract — what the discipline produces, by stable field name. (Not who reads it.)
- The lightweight stance / scope constraints the discipline obeys.
- The failure modes the discipline can recognize.
- Worked examples that demonstrate the operation.

The distillation produces a spec expressed without reference to *how* or *when* concepts were settled, without naming what consumes the output, and without scaffolding from the inquiry/cascade architecture that produced the discipline.

## What "clean" looks like

Read `cognitive_harness/surfacing/references/surfacing.md` or `cognitive_harness/sense-making/references/sensemaking.md` as exemplars. They describe their disciplines as standalone cognitive operations. They do not say "this concept was settled in inquiry X." They do not name other disciplines as consumers. They do not track development history. They just describe what the discipline IS and how to run it.

The runtime canonical spec for any new discipline should match that bar — a discipline anyone could read in isolation, understand what it IS, and run, without needing access to the inquiry history that produced it.

## Where the dev-history docs still belong

After distillation, the dev-history docs at `devdocs/how_<discipline>_should_be.md` and `devdocs/how_<discipline>_process_should_be.md` remain valuable as project-internal documentation — they record how the discipline came to be what it is, what was considered and rejected, what cascade pressure shaped specific decisions, and what remains deferred. Future contributors looking to refine or extend the discipline will read them for context.

But they are not loaded at runtime, and they are not the canonical spec.



ALso also thikning disciplines have output format stated. A .MD file with their name , and output gives explanation about what happened. All of them must have this output logic.  