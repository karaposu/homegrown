# Branch: finding_type_field_multi_value_consideration

## Question

Should the `type:` frontmatter key proposed in `devdocs/inquiries/2026-05-16_10-50__finding_md_format_redesign/finding.md` (currently single-valued with enum `decision | spec-modification | recommendation | loop-diagnose` and a HALT-and-ask rule when missing) handle findings that genuinely span multiple types — and if so, should the schema be multi-valued (list form), primary-plus-secondary, or some other shape?

## Goal

A verdict that either:
- (a) Commits to single-valued `type:` with an explicit structural argument for why the apparently-multi-type cases (e.g., a decision that's also a spec-modification, a recommendation that includes a loop-diagnose component) collapse to one dominant type at the spec level — closing the gap the prior finding left silent.
- (b) Revises the prior finding's `type:` schema to a multi-valued form, with the specific shape named (list, primary+secondary, composition rule), the matching CONCLUDE behavior named (when type is missing; when multi-typed; how Finding-body variants compose), and the prior finding's HALT-and-ask rule revised correspondingly.

The verdict should be concrete enough to either close the question OR produce a precise refinement diff against the prior finding.

## Scope Check

Question covers goal — both ask: (1) does multi-type exist as a real phenomenon for findings, and (2) what should the schema look like.

Specific-vs-pattern check: the question targets the specific schema decision in the prior finding. Principles surfaced (when single-value-with-collapse-rule beats list-value; how taxonomies handle entities that span buckets) may generalize to future schema decisions in the project, but the verdict is example-bounded to this `type:` field.

## Layer Commitment

**Primary layer: MEANING.** The load-bearing question is *what is a finding type-wise* — does a finding inherently have ONE type, or can it genuinely span types? The answer determines whether the multi-valued schema is needed at all. Schema (structural) and CONCLUDE handling (process) follow from the meaning answer.

Sequential plan:
1. **Meaning layer** (this inquiry): settle whether multi-type findings exist as a real phenomenon, or whether the apparently-multi-type cases collapse to one dominant type at the spec level.
2. **Structural layer** (follow-on, depending on meaning verdict): if meaning says multi-type, a follow-on inquiry or this inquiry's Innovation step specifies the schema shape (list `types: [...]`, primary+secondary fields, or composition rule).
3. **Process layer** (deferred): CONCLUDE's HALT-and-ask behavior is re-derived from the meaning+structural verdicts; not redesigned independently here.

Other layers explicitly out of scope for THIS run:

- **Structural** — addressed as a sub-deliverable IF meaning says multi-type; not a standalone goal.
- **Process** — explicitly deferred; CONCLUDE rules follow from meaning+structural.
