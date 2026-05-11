# Branch: Lightweight Discipline-Level Disambiguation

## Question

The prior finding at `devdocs/inquiries/2026-05-07_22-10__finding_internal_reference_ambiguity_failure/finding.md` proposed a fix to prevent internally-referential shorthand in `finding.md` outputs. Its Component A (expanded examples in the existing non-ambiguity principle's example list, at `homegrown/protocols/conclude.md`) is logical and lightweight. But its Component B (a new "Non-ambiguity check (mechanical)" sub-section with regex patterns + first-use checklist + remediation steps, at the same protocol) overloads CONCLUDE with check work the AI runner has to perform on every finding compilation. The user's pushback: this is too heavy; AI compute is finite and shouldn't be spent on regex-style scans when a lighter intervention at the source (the discipline outputs themselves, since they propagate the ambiguous vocabulary into CONCLUDE) might prevent the failure with less load. But disciplines are also already at compute limit, so any discipline-level fix must be genuinely lightweight (not "every output goes through a vocabulary translation pass"). What is the smallest, lightest discipline-level fix that reduces internally-referential vocabulary at source AND keeps the prior finding's Component A at CONCLUDE — without rebuilding Component B's heavy mechanical check?

## Goal

A good answer should: (a) confirm Component A stays at CONCLUDE (already validated in prior finding); (b) replace Component B with a lightweight discipline-level intervention that prevents the most common ambiguity at source; (c) specify exactly what each discipline spec adds — measured in lines and runtime cognitive load (the smaller the better; one-line additions preferred); (d) verify the intervention catches the same observed failures the regex check would have caught (the 10+ references in `2026-05-07_20-35__explore_discipline_definite_gaps_from_corpus_evidence/finding.md`); (e) preserve discipline-spec purity (no embedded placement convention; no maintenance-time meta-content); (f) explicitly reject heavy mechanical alternatives (regex scans, translation passes, full vocabulary glossaries per discipline).

## Scope Check

Question covers goal. The question asks for a lightweight discipline-level alternative to Component B that complements Component A; the goal asks for evidence that the alternative catches the observed failures with minimal load. Both addressable from the prior finding + the docarchive evidence + the four sister analyses' precedents (which all kept rule additions to one-paragraph extensions of existing process steps).

## Required Reads

- `devdocs/inquiries/2026-05-07_22-10__finding_internal_reference_ambiguity_failure/finding.md` — the prior finding being refined.
- `devdocs/inquiries/2026-05-07_20-35__explore_discipline_definite_gaps_from_corpus_evidence/finding.md` — the finding whose 10+ ambiguous references triggered the prior diagnosis.
- `devdocs/inquiries/2026-05-07_20-35__explore_discipline_definite_gaps_from_corpus_evidence/docarchive/` — the working documents (exploration.md, sensemaking.md, decomposition.md, innovation.md, critique.md) that propagated the ambiguous vocabulary into the finding.
- `homegrown/protocols/conclude.md` — currently has Component A applied or applicable; Component B is the proposed-but-rejected heavy fix.
- The five discipline reference specs (`homegrown/explore/references/explore.md`, `homegrown/sense-making/references/sensemaking.md`, `homegrown/decompose/references/decompose.md`, `homegrown/innovate/references/innovate.md`, `homegrown/td-critique/references/td-critique.md`) — the surfaces where the lightweight fix would land.

## Diagnostic Constraints

- **Lightweight is non-negotiable.** Disciplines are already at compute limit; a fix that adds cognitive load comparable to Component B's regex scan defeats the purpose. The fix must be measurable: ideally one short line per discipline; no per-output checklist; no per-term audit.
- **Generic / meta-discipline framing**: rules must be domain-agnostic.
- **Apply the placement convention** from `enes/discipline_rule_placement.md`.
- **Don't embed the placement convention** in spec content.
- **Reject heavy alternatives explicitly**: regex scans, translation passes, full vocabulary glossaries.
- **Component A stays.** It's already lightweight (4 examples in the existing principle paragraph at CONCLUDE).
- **Discipline outputs are working documents**, not public artifacts. Cold-readability is wrong success criterion for them. The fix isn't "make discipline outputs cold-readable"; it's "reduce the most common ambiguity shape that propagates into CONCLUDE."

## Relationships

- REFINES: devdocs/inquiries/2026-05-07_22-10__finding_internal_reference_ambiguity_failure/finding.md (replaces Component B with a lightweight discipline-level alternative; preserves Component A)
- ANALYZES: the 5 discipline reference specs + conclude.md
- ANALYZES: 2026-05-07_20-35 inquiry's finding + docarchive (the failure evidence)
- RELATED: 2026-05-07_22-54 (placement convention), 2026-05-07_23-27 (don't-embed decision)
