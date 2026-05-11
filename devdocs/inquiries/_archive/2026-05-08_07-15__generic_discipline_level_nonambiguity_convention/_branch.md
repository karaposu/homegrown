# Branch: Generic Discipline-Level Non-Ambiguity Convention

## Question

The prior `devdocs/inquiries/2026-05-08_06-30__lightweight_discipline_level_disambiguation/finding.md` proposed a lightweight discipline-level convention to reduce internally-referential shorthand at source. But that finding scoped the convention too narrowly — it triggered ONLY on cross-spec references (terms defined in another Homegrown discipline reference spec). The actual non-ambiguity problem is generic: discipline outputs and final finding outputs can be internally-referential because of inquiry-coined terms (concepts named within the current inquiry but never defined for an outside reader), project-specific references (`/MVL+`, `enes/`, protocol names, runner identifiers), abbreviations (`SV6`, `M6`, `TP3`, `P11`), file paths used bare, within-discipline references, AND cross-spec references. A convention that targets only the last category is the right idea but the wrong scope.

This inquiry produces: (a) confirmation that the prior `2026-05-07_22-10` finding's Component A (4 expanded examples in the non-ambiguity principle's example list at `homegrown/protocols/conclude.md`) is the right destination-side fix and should be applied if not already; (b) a GENERIC discipline-level convention covering all types of internally-referential shorthand at source, while remaining lightweight (one short sentence per discipline; no scan, no checklist, no audit step).

## Goal

A good answer should: (a) verify whether Component A from the prior `2026-05-07_22-10` finding (the 4 expanded examples) is currently in `homegrown/protocols/conclude.md`; if not, propose its addition; (b) propose a GENERIC discipline-level convention that covers all shapes of internally-referential shorthand (cross-spec references, inquiry-coined terms, project-specific references, abbreviations, file paths, within-discipline references) — not just cross-spec; (c) keep the convention lightweight (one short sentence per discipline; no per-output scan or checklist); (d) verify the convention catches the 10+ observed failures from `2026-05-07_20-35`'s finding AND would catch other shapes the prior narrow convention missed (e.g., bare `/MVL+` references; bare `SV6` abbreviations); (e) preserve composition with Component A (source-side prevention + destination-side translation = lightweight cascade); (f) explicitly reject Component B from the prior `2026-05-07_22-10` finding (heavy regex scan); (g) explicitly retire the prior `2026-05-08_06-30` finding's narrow cross-spec-only scope and replace it with the broader generic convention.

## Scope Check

Question covers goal. The question asks for the broader generic version of the discipline-level convention plus confirmation of Component A's status; the goal asks for verification + the generic convention's wording + lightweight criterion + composition + rejection of speculative additions. All addressable from the prior findings + the disciplines' current state + the failure evidence in `2026-05-07_20-35`.

## Required Reads

- `devdocs/inquiries/2026-05-08_06-30__lightweight_discipline_level_disambiguation/finding.md` — the prior finding being broadened.
- `devdocs/inquiries/2026-05-07_22-10__finding_internal_reference_ambiguity_failure/finding.md` — the original problem statement; Component A still applies; Component B still rejected.
- `devdocs/inquiries/2026-05-07_20-35__explore_discipline_definite_gaps_from_corpus_evidence/finding.md` — the failure evidence.
- `homegrown/protocols/conclude.md` — verify Component A status; canonical home for destination-side translation.
- The five discipline reference specs' SOLID INSTRUCTIONS sections — canonical home for the generic convention.

## Diagnostic Constraints

- **Lightweight non-negotiable.** No per-output checklist; no scan; no audit. Maximum: one short sentence per discipline (~30-40 words).
- **Generic scope required.** The convention must cover all shapes of internally-referential shorthand observed in practice, not just cross-spec references.
- **Apply the placement convention** from `enes/discipline_rule_placement.md`. ONE canonical home + one-line cross-references at non-canonical surfaces (here: only canonical home; no cross-references needed for this small intervention).
- **Don't embed the placement convention** in spec content.
- **Reject Component B** explicitly with structural reasoning (already documented in prior `2026-05-08_06-30` finding; carry forward).
- **Component A stays.** Its 4 expanded examples in the non-ambiguity principle's example list at `conclude.md` are lightweight and complementary. Verify status; apply if not yet applied.
- **Replace the prior `2026-05-08_06-30` finding's narrow scope.** This finding supersedes it.

## Relationships

- SUPERSEDES: 2026-05-08_06-30 (which used a too-narrow cross-spec-only scope)
- REFINES: 2026-05-07_22-10 (preserves Component A; rejects Component B; adds source-side generic convention)
- ANALYZES: the 5 discipline reference specs + conclude.md
- ANALYZES: 2026-05-07_20-35 (failure evidence)
- RELATED: 2026-05-07_22-54 (placement convention), 2026-05-07_23-27 (don't-embed decision)
