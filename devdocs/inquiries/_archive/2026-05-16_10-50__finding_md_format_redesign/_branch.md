# Branch: finding.md Format Redesign

## Question
What should the structure of `finding.md` be — i.e., what new template (sections, schema, content-type variants, style rules) would address the failure patterns the user has observed across the existing ~50+ findings: not suitable for materialization-type content; missing exact-line edit specifics; misleading "what to edit" instructions; persistent ambiguity in the prose; and a single bullet-point Finding section despite content varying widely in shape, length, and complexity?

## Goal
A new `finding.md` template specification — concrete enough that the next inquiry can update the CONCLUDE protocol (`/Users/ns/.claude/skills/protocols/conclude.md`) to adopt it. The deliverable should include:
- The new section list, with adaptive variants when content-type warrants (e.g., materialization findings vs. taxonomy-decision findings vs. rename-style findings may need different shape).
- A schema or contract for the load-bearing sections, especially Next Actions / edits / changes — including what counts as a complete "edit instruction" (file path + scope + before/after or exact-content) so future findings stop being ambiguous about what gets edited.
- Style rules that reduce ambiguity (concrete-edit form requirements, gate-specificity rules, etc.) — extending or replacing the existing style rules in CONCLUDE.
- Honest classification of when the template adapts vs. stays uniform — so a future agent can pick the right variant without guessing.

Operational test: after adoption, a finding produced by the new template should let the user execute the recommended actions without re-reading prior discipline outputs and without ambiguity about WHERE the edit goes or WHAT exactly to change.

## Scope Check

Question covers goal: YES — the question targets the template structure (the load-bearing layer); the goal pins down what success looks like (executable findings without ambiguity).

Specific-vs-pattern: the user named 5 specific failure classes (materialization-unsuited; missing exact edits; misleading edit instructions; ambiguity; bullet-only Finding section). The inquiry addresses the **PATTERN** — the structural design issues those failures reveal — using the corpus of ~50+ existing findings as evidence. Specific failure modes inform the pattern but the template redesign aims to prevent the class, not patch individual instances.

The 20+ finding.md corpus that exploration will read is the EVIDENCE BASE, not a set of prior outputs whose commitments are inherited. The inquiry analyzes them to extract common features + failure modes; it does NOT consolidate their content into a new artifact. The Synthesis Trigger does NOT fire on this basis (priors are corpus, not commitments).

## Layer Commitment

**Primary layer: structural.**

The question is explicitly about the FORMAT and STRUCTURE of the finding.md artifact — what sections, what schema, what shape. The user has identified that the current single-shape template doesn't fit the variety of findings being produced (materialization-style vs. taxonomy-decision vs. rename-style vs. process-design have different content shapes). The structural layer adjudicates: what should the template look like?

Out-of-scope for this run:
- **Meaning** — what a finding IS (the verdict-compilation artifact at the end of a SIC/ESDIC loop) is settled and not in question. The user accepts what a finding is; they want its structure improved.
- **Process** — the CONCLUDE protocol's procedural steps (pipeline detection, template application, archival, state update). The procedure is separable; once the new structure is defined, a follow-up process inquiry would update CONCLUDE's procedure to use the new template. Some style rules straddle structural and process; this inquiry surfaces structural style rules but the procedure-update is deferred.

Sequential plan: this inquiry commits the structural design (sections + schema + variants + style rules at the artifact-shape level). The follow-up process inquiry would update `~/.claude/skills/protocols/conclude.md` to use the new template, including any procedural changes needed (e.g., new gates, new compile-time checks).

The primary layer is unambiguously **structural** because the user asked specifically about the FORMAT of finding.md — that's the shape of the artifact, not its essence or its procedure.
