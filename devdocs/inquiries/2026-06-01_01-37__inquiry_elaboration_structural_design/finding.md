---
status: active
model: claude-opus-4-8[1m]
effort: max
---
# Finding: Inquiry Elaboration — Structural Design (the spec skeleton, output schema, and branch.md migration)

## Question

From `_branch.md`: the meaning of Inquiry Elaboration (IE) is settled — it is a discipline (`2026-05-31_22-30`), and its scope is fixed (`2026-06-01_01-17`: operate on the *request* not the *problem*; *perceive* not *act*; achieve a loop-ready fidelity-verified framing via three tailored phases). This inquiry settles the **structural layer**: what IE's spec file looks like (its sections and their shape), what its output artifact looks like (the schema), where the settled scope and its four refinements land in the spec, and which `branch.md` elements migrate into IE versus stay with the runner. Process design (pipeline placement, spawn mechanics, the exact runner rewrite, runtime gates) is the *next* layer and is out of scope.

## Finding Summary

- **IE's spec is the same five-section shape every other discipline uses, instantiated with IE's settled content — not a bespoke structure.** Per the discipline-anatomy canon and the sibling specs (surfacing / routelister / routeman): **§1 Identity · §2 Components · §3 Process Model · §4 Quality · §5 Output.** It ships as two files: a `SKILL.md` wrapper (with the Step-0 mandatory pre-read) plus `references/<name>.md` (the framework). The structural work was mostly *instantiation*, which keeps it consistent and low-risk.

- **The one genuinely structural decision — what IE emits — resolved to "substantive + a thin verdict header."** Unlike surfacing (whose output is *thin* because the item content lives in the workspace), IE has no external territory; the **framing content IS its payload.** So §5 Output has two parts: **(a)** a *substantive* elaborated-inquiry spec (the framing) and **(b)** a *thin verdict header* the runner acts on (the request-structure verdict + the fidelity verdict). This is the sensemaking-style substantive transform, not the surfacing-style thin artifact.

- **The settled scope maps cleanly onto the sections** (no orphans): the **decision rule** (object/mode) and the **7-border NOT-list** → §1; the **three tailored phases** → §2 Components; the **phase order + the depth-limit stop-rule + one verify-bounce** → §3; the **failure modes + asymmetric-failure + self-assessment** → §4; the **output schema** → §5. The four refinements from the scope finding each have a home: R1 depth-limit → §2 comprehend + §3 stop-rule; R2 request-signal basis → §2 perceive-structure; R3 fixed-criteria gate → §2 verify; R4 source-input preservation → §2 verify axis (ii) + §5 header.

- **The upper bound (the thing that keeps IE a discipline, not a mini-runner) is encoded so the spec polices itself.** Two placements: each §2 Component is phrased as a *tailored* operation that **"does not invoke the neighbor discipline,"** and §4 names **"wrapper-fusion (becomes a mini-runner)"** as a LAYER-2 identity failure. Honest residual (Critique R7): this guard is *convention-enforced* — author plus review — not mechanical; a spec guides an author, it doesn't compile.

- **The migration table is now exact** (the item the scope finding deferred). Into IE: the question/5-meta-aspects and goal (→ comprehend); Source-Input, Scope-Check, the Step 3.5 transcription audit, and the Step 3.6 reference-authority audit (→ the three verify axes); request-bundling detection (→ perceive-structure). Stays with the runner: the Synthesis-Trigger and the spawn (orchestration), and the Layer-Commitment — with a refinement (R5) that **IE may emit a *layer-hint* as perception while the runner commits the actual Layer-Commitment.** Net effect: `branch.md` thins to *encoding IE's output* + holding *Layer-Commitment* and *Synthesis-Trigger* + performing the *spawn*.

- **A useful through-line (from Innovation's domain transfer, survived Critique):** IE's structure is an **API-gateway spec** — request normalization (comprehend), a routing table (the request-structure verdict), validation rules (verify), an explicit "no business-logic handlers" clause (the NOT-list + the wrapper-fusion guard), and a normalized-request output passed to the service (the substantive output + header). The gateway image makes the section set feel inevitable rather than arbitrary.

- **Status:** the design **survived** adversarial critique as one coherent, *authorable* whole, with **no kills**. The three refinements (R5 layer-hint; R6 the verdict vocabulary is single-source-of-truth in §1; R7 the convention-enforced caveat) are authoring-level, not structural gaps. The immediate next step is an *action* — write the two files from this skeleton — not another inquiry layer. The remaining *layer* is process.

## Finding

### Why this is mostly instantiation, and why that's the right answer

A recurring temptation when specifying a new discipline is to invent a structure that "fits it better." Critique tested that (the Constraint-Manipulation REMOVE direction in Innovation tried a bespoke shape) and rejected it: the discipline-anatomy canon and all three shipped siblings use the same five sections, and a bespoke shape would cost readers and maintainers without buying anything. IE is different from its siblings in *content* (its output is substantive; it keeps no cross-run index), but the anatomy explicitly expects unique content inside a universal section set. So the structural answer is: take the family skeleton and fill it with IE's settled scope. The value of this finding is therefore the concrete fill — the section contents, the output schema, and the migration table — which the discipline's outputs (decomposition → innovation → critique) produced and pressure-tested.

### The one real design choice: what IE emits

Everything else in the structure follows from the settled scope, but one question was genuinely open: is IE's output *thin* (like surfacing's traversal trace) or *substantive* (like sensemaking's SV6)? The resolution turns on a structural fact: surfacing's output can be thin because the heavy content (the items themselves) stays in the workspace; surfacing's artifact only needs to *point* at them. IE has no such external territory — the framing it produces *is* the content, and there is nowhere else for it to live. A thin-only IE output would carry no framing and would defeat the discipline's whole purpose. So §5 Output is substantive (the elaborated-inquiry spec) plus a thin **verdict header** — a small, runner-actionable summary (this is `single` / `parallel-set` / `sequential-chain`; fidelity is PASS or FLAGged) so the runner can act without re-parsing the whole framing. That header is the concrete shape of the perceive→act handoff the scope finding only gestured at.

### How the upper bound becomes structural

The scope finding's load-bearing residual — IE is a discipline only if its phases are tailored, not wrappers over `/decompose` and `/td-critique` — is the thing most likely to be violated at build time. The structural design makes the spec defend that line in two ways. First, each Component is written as a *tailored* operation with the explicit clause "does not invoke the neighbor discipline" — so an author following the spec is told, per phase, not to delegate to the full neighbor. Second, §4 lists **wrapper-fusion** as a named LAYER-2 identity failure (alongside problem-modeling → it becomes sense-making, and acting → it becomes the runner), so the failure has a name a reviewer can check against. Critique's honest caveat (R7) is worth keeping visible: this is the strongest prevention a spec can offer, but it is still convention — enforced by author discipline and review, not by a mechanism. That residual is inherent to prose specs, not a defect of this design.

### The migration table, made exact

The scope finding deferred "which branch.md sections move in" to structural design; here it is resolved. The principle ("comprehension + fidelity in; orchestration out") becomes a per-element verdict. The comprehension elements (the five-meta-aspect question, the goal) and all three fidelity audits (Source-Input/transcription, Scope-Check, reference-authority) move into IE — the audits becoming the three axes of the single verify Component. Request-bundling detection moves in as perceive-structure. The orchestration elements stay: the Synthesis-Trigger (which drives CONCLUDE's enforcement) and the spawn (acting on the split). The one nuance Critique added is the Layer-Commitment: deciding *which cognitive layer* an inquiry targets is a routing decision the runner owns, but IE's comprehension naturally *notices* the signals that bear on it — so IE emits a **layer-hint** (perception) and the runner commits the decision (action). That keeps the perception/action split clean while not pretending IE is blind to something it plainly sees. The net is the outcome the whole arc predicted: branch.md gets thinner, going back to encoding a framing and orchestrating, with the comprehension-and-fidelity work relocated into the discipline that owns it.

## Inherited Commitments Re-test

This inquiry declared a Synthesis Trigger over the scope/meaning priors, the anatomy canon, and the sibling specs; each commitment is re-tested against the structural work, not absorbed.

- **Commitment:** the settled scope — achieve / 3-phase cover / 7-border NOT-list / object-mode decision rule / upper bound / migration principle / refinements R1–R4.
  - **Source:** `devdocs/inquiries/2026-06-01_01-17__inquiry_elaboration_scope_and_coverage/finding.md`.
  - **Re-test status:** RE-TESTED — **ENCODED + CONFIRMED.** Each element has a specific structural home (decision rule + NOT-list → §1; phases → §2; verify-3-axes → §2 verify; upper bound → §2 phrasing + §4 LAYER-2; R1 → §2/§3; R2 → §2; R3 → §2; R4 → §2/§5; migration principle → the exact D6 table). No scope element was orphaned or distorted. Evidence: `decomposition.md` (the piece-to-section map), `innovation.md` (the filled skeleton), `critique.md` (Phase-2 completeness check #5).

- **Commitment:** IE is a discipline; the 4-phase arc; spawn = runner-action; the tailored-phases residual.
  - **Source:** `devdocs/inquiries/2026-05-31_22-30__inquiry_elaboration_discipline_or_not/finding.md`.
  - **Re-test status:** RE-TESTED — **STRUCTURALLY ENCODED.** The arc → §3 order; spawn = runner → §1 NOT-list + the migration table's STAYS-runner verdict; the tailored-phases residual → the §2 "does not invoke the neighbor" phrasing + the §4 wrapper-fusion failure. The residual is now a self-policing structural feature, not just a warning. Evidence: `innovation.md` D2/D4, `critique.md` Phase-2 #3.

- **Commitment:** the spec anatomy (Definition/Components/Process/Failure-modes/Coverage) + the output anatomy (Transform/Progression/Telemetry/Frontier).
  - **Source:** `docs/canon/thinking_disciplines/anatomy_of_disciplines.md`.
  - **Re-test status:** RE-TESTED (artifact-grounded) — **INSTANTIATED.** §1–§5 instantiate the spec anatomy; §5 Output instantiates the output anatomy (substantive transform + light progression + telemetry + frontier). The template fit without forcing empty sections.

- **Commitment:** the concrete family shape — Identity (verb-meaning + NOT-list + vocabulary) / Components (+ primitive profile) / Process / Quality (LAYER-1/LAYER-2 + self-assessment) / Output (+ field schema); self-containment.
  - **Source:** `cognitive_harness/surfacing/references/surfacing.md`, `…/routelister/…`, `…/routeman/…`.
  - **Re-test status:** RE-TESTED — **MATCHED.** IE adopts the family shape; routeman's per-route field-table is the model for §5's schema; routelister's §1.4 self-containment is the model for §1's self-containment statement; the LAYER-1/LAYER-2 framework is reused. Evidence: `surfacing.md` Region C, `innovation.md` D1/D5.

- **Commitment:** job→operation mapping; understanding-operation = Comprehending; position ≠ identity.
  - **Source:** `…20-08…` and `…13-31…` findings.
  - **Re-test status:** RE-TESTED — **APPLIED.** §2's phases are the operations-on-the-request; "position ≠ identity" is why §1's taxonomy placement (Upstream) is a *placement*, not the basis of IE's identity (the object/mode rule is). Evidence: `sensemaking.md` (frame-exit splitting "process"/"phase").

- **Commitment:** a discipline spec must be self-contained (no outbound pointers to design-history/theory).
  - **Source:** project memory `feedback_disciplines_self_contained`.
  - **Re-test status:** RE-TESTED — **OBEYED.** §1 carries an explicit self-containment statement; the skeleton defines its own vocabulary and grounds each NOT-list entry intrinsically (object/mode), with no pointers into the inquiry corpus. (This finding documents the design; the *spec file itself*, when authored, must keep this property.)

All commitments re-tested with cited evidence; none inherited without re-test.

## Next Actions

### MUST
- **What:** Accept or reject this structural design (the five-section skeleton + the substantive-plus-header output schema + the exact migration table + R5/R6/R7).
  - **Who:** user.
  - **Gate:** observable — explicit response.
  - **Why:** it is the blueprint the actual spec file is written from, and the input to the process layer; same-agent/same-session work needs the external check.

### COULD
- **What:** Author the two files — `cognitive_harness/<inquiry-elaboration>/references/<name>.md` (the framework, from §1–§5 above) and `SKILL.md` (the wrapper) — folding in R5 (layer-hint field), R6 (verdict vocabulary defined once in §1), R7 (the convention-enforced caveat in §4), and the G7 primitive-profile atoms (aligned to the taxonomy primitive table). This is an authoring action, not a new inquiry.
  - **Who:** user or a follow-up authoring pass.
  - **Gate:** condition-bound — user accepts this design + go-ahead.
  - **Why:** the design is settled; what remains is writing it.
  - **Depends-on:** MUST "user accepts." GATED.

- **What:** When ready, spawn the **process-layer** inquiry: where IE runs in MVLw, how the runner spawns parallel/sequential sub-inquiries from the request-structure verdict, the exact line-by-line `branch.md` rewrite (thinning), and the runtime gates (e.g., FLAG → halt before the loop).
  - **Who:** future inquiry (Layer Commitment = PROCESS).
  - **Gate:** condition-bound — after the spec is authored (or in parallel, if the user prefers).
  - **Why:** process wiring needs the spec shape (this run) settled.
  - **Depends-on:** the authoring COULD. GATED.

### DEFERRED
- **What:** Resolve G7 (the exact load-bearing primitive atoms per phase) against the taxonomy primitive table, and let the §4 LAYER-1 operational-failure list grow as IE actually runs (operational failures are discovered empirically).
  - **Gate:** condition-bound — at authoring (G7) and after N real IE runs (LAYER-1 growth).
  - **Why (if revived):** G7 is a documentation-consistency detail; the LAYER-1 list is expected to accrete from use, not be complete at birth.

## Reasoning

The structural verdict is "instantiate the family template," and the reasoning is that the alternative (a bespoke shape) lost on every weighted dimension: it breaks family consistency (readers/maintainers), and it buys nothing IE actually needs (the section set already accommodates a substantive output and an empty cross-run-index slot). The one open choice — output shape — was decided not by preference but by a structural fact (IE has no external territory, so its output cannot be thin-only), and that decision was confirmed by inverting it to the system level (a thin-only output starves the loop). The two thinnest borders from the scope finding (verify-vs-critique, perceive-structure-vs-decompose) were re-tested here at the structural level and held: they are encoded as *tailored* Components with explicit non-invocation clauses and a named wrapper-fusion failure, which is the most a prose spec can do. No candidate was killed because, as in the scope run, the dead region (any structure that makes IE model the problem, judge solutions, or spawn) is empty by construction — it's exactly what the NOT-list and the upper bound exclude.

The honest residuals are all authoring-level, not structural: the wrapper-fusion guard is convention-enforced (R7); the verdict vocabulary must be defined once to avoid the header/framing drift the decomposition flagged (R6); and the Layer-Commitment border is kept clean by letting IE emit a hint while the runner decides (R5). On self-reference: this design was produced by the same disciplines it is structuring, so the bound is that every section maps to a checkable prior commitment (the scope finding, the anatomy canon, the sibling specs) and the verdict matches the existing discipline family rather than inventing a flattering new shape; full bounding awaits user acceptance and the spec surviving authoring.

## Open Questions

### Blocked
- The process layer (pipeline placement; spawn mechanics; the exact branch.md rewrite; runtime gates) is blocked on acceptance of this structural design + the spec being authored.

### Research Frontiers
- **G7** — the exact load-bearing primitive atoms per phase, aligned to the taxonomy primitive table.

### Refinement Triggers
- **RT1** — If, at authoring, any of the three verify axes cannot be expressed as a fixed criterion (it needs a fitness landscape), that axis has become `/td-critique` — pull it out (re-tests R3 structurally).
- **RT2** — If perceive-structure cannot emit its verdict from request-level signals without coupling analysis, it has become `/decompose` — pull it out (re-tests R2 structurally).
- **RT3** — If the verdict header and the substantive framing drift in practice (the runner trusts one over the other), collapse them to a single source (re-tests R6).

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
lets discuss how it shold be structually since we already understood it as meaning layer
```

</details>
