# Branch: Inquiry Elaboration — Structural Design

## Question

- **Subject** — the **structure** of the Inquiry Elaboration (IE) discipline: what its spec file looks like (sections / organization / schema) and what its output artifact looks like.
- **Action** — DESIGN (structural-layer): produce the spec skeleton + the output schema, given the already-settled meaning (it IS a discipline; its scope = achieve/cover/not-cover via the request-vs-problem + perceive-vs-act decision rule).
- **Level** — discipline (spec + output artifact).
- **Observation targets** (distinct clauses preserved separately):
  1. The **spec section set** — which sections IE's spec file has (Identity / Components / Process Model / Quality / Output, per the discipline-anatomy convention) and each section's content shape.
  2. The **output artifact shape** — what IE emits (the "elaborated-inquiry spec" / perception bundle: framing content + request-structure verdict + fidelity verdict) and its schema.
  3. How the **settled scope lands in the structure** — where the 4-phase arc, the three verify axes, the object/mode decision rule, the upper bound (tailored phases), and the four refinements R1–R4 from the scope finding live in the spec.
  4. The **branch.md migration mapping** — which current `_branch.md`/runner sections become IE spec-or-output elements vs stay runner-side (the exact-list resolution the scope finding deferred to structural, F4).
- **Deliverable shape** — a structural design: the spec skeleton (named sections with content shape) + the output schema + the migration table + trade-offs/alternatives where the shape isn't forced.

**Question (one sentence):** Given IE's settled meaning (a discipline; scope = comprehend/perceive-structure/verify on the request, perceive-not-act), what should its **spec structure** be (section set + each section's shape), what should its **output artifact** look like (the elaborated-inquiry schema), how do the arc/verify-axes/decision-rule/upper-bound/R1–R4 land in those sections, and which branch.md elements migrate in vs stay runner-side?

## Goal

- **Criterion** — concreteness (a spec author could write the file from this), consistency with the discipline-anatomy convention and the sibling specs' shape (surfacing / routelister / routeman), faithful carry of the settled scope (no re-litigating meaning), and self-containment (the spec must stand alone).
- **Use case** — the user (or a follow-up inquiry) will use this to author `cognitive_harness/<inquiry-elaboration>/references/<name>.md` (+ the SKILL.md wrapper), and to thin `branch.md` accordingly.
- **Desired outcome** — a settled structural design ready to be written as the actual spec file; the only thing left after = the process layer (pipeline wiring / spawn mechanics / runtime gates).
- **What would fail** — (i) re-opening the meaning (is it a discipline / what's its scope) — settled, out; (ii) drifting into the process layer (where it runs in MVLw, how the runner spawns, runtime gating) — that's the *next* layer, out; (iii) a spec shape that violates the upper bound (sections that make it a mini-runner by wrapping `/decompose`+`/td-critique`); (iv) a spec with outbound pointers to design-history/theory (violates self-containment); (v) vagueness that a spec author couldn't act on.

## Source Input

```text
lets discuss how it shold be structually since we already understood it as meaning layer
```

## Scope Check

Question covers goal: **YES** — the four observation targets (spec sections / output schema / where the scope lands / migration mapping) are exactly the structural-layer deliverables, and the Goal's "what would fail" fences off the meaning layer (settled) and the process layer (next).

Specific-vs-pattern: the question is about IE's own structure (a specific discipline's spec), correctly specific — not a general "how should any discipline be structured." The discipline-anatomy convention is the *template* applied, not the subject.

## Layer Commitment

**Primary layer: STRUCTURAL** — "how should it be structurally" = the spec's sections / organization / schema + the output artifact shape. (The user named it explicitly: "structurally … since we already understood it as meaning layer.")

Out of scope for THIS run:
- **Meaning** — that IE is a discipline (settled `2026-05-31_22-30`) and its scope/remit (settled `2026-06-01_01-17`). Re-arguing either is out.
- **Process** — where IE runs in the MVLw pipeline, how the runner spawns parallel/sequential sub-inquiries from its output, the runtime gates, and the exact line-by-line rewrite of the runner. Reason: process needs the spec shape (this run) settled first; designing runtime wiring before the spec shape is the inverted-layer mistake.

Sequencing note: meaning → **structural (this run)** → process (next). The structural run may *name* process hooks (e.g., "the output is consumed by the runner's spawn") without designing the process.

## Synthesis Trigger

This inquiry consumes and inherits commitments from the IE arc + the discipline-anatomy convention; each must be re-tested, not absorbed (CONCLUDE will enforce `## Inherited Commitments Re-test`):

- `devdocs/inquiries/2026-06-01_01-17__inquiry_elaboration_scope_and_coverage/finding.md` — **controlling prior.** Commits: ACHIEVE (loop-ready fidelity-verified framing); COVER = 3 coupled tailored phases (comprehend+articulate / perceive-request-structure / verify-fidelity 3 axes); NOT-COVER 7 borders; object/mode decision rule; upper bound (tailored phases); migration principle; refinements R1 (comprehend depth/stop-rule), R2 (perceive-structure request-signal-based), R3 (verify fixed-criteria gate), R4 (source-input inside fidelity axis).
- `devdocs/inquiries/2026-05-31_22-30__inquiry_elaboration_discipline_or_not/finding.md` — Commits: it IS a discipline; the 4-phase arc; spawn = runner-action; *tailored-phases* residual (the structural make-or-break).
- `devdocs/inquiries/2026-05-31_20-08__understanding_stage_identity/finding.md` + `…13-31…/finding.md` — Commits (context): job→operation mapping; understanding-operation = Comprehending; position ≠ identity. (Lighter; re-test as inherited context.)
- `docs/canon/thinking_disciplines/anatomy_of_disciplines.md` — Commits: the spec anatomy (definition / components / process model / failure modes / coverage) + the output anatomy (transform / progression / telemetry / frontier). This is the **section template** the structural design instantiates.
- Sibling specs as structural templates: `cognitive_harness/surfacing/references/surfacing.md`, `cognitive_harness/routelister/references/routelister.md`, `cognitive_harness/routeman/references/routeman.md` — Commit: the concrete shape (Identity w/ verb-meaning + NOT-list + vocabulary; Components; Process Model; LAYER 1 / LAYER 2 failure-mode framework; Output dual-product; Telemetry; self-assessment PROCEED/FLAG/RE-RUN). IE's spec should match this family.

Additional self-containment constraint (project memory): the IE spec must be **self-contained** — no outbound pointers to design-history/theory folders; it stands as its own individual. The structural design must produce a shape that obeys this.
