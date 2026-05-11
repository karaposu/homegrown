# Branch: Loop Diagnose - Narrow Scope in Disambiguation Finding

## Question

Given the weak prior inquiry at `devdocs/inquiries/2026-05-08_06-30__lightweight_discipline_level_disambiguation/finding.md` (which proposed a discipline-level non-ambiguity convention scoped narrowly to cross-spec references only), the human correction (which named the scope as "incredibly narrow scoped and wrong goal" and pointed out that the non-ambiguity problem is generic, covering inquiry-coined terms, project-specific references, abbreviations, file paths, etc.), and the later corrected inquiry at `devdocs/inquiries/2026-05-08_07-15__generic_discipline_level_nonambiguity_convention/finding.md` (which broadened the convention to a generic first-use principle covering all 6 observed shorthand types), what did the prior loop likely miss, why did it miss it, and what maintenance candidates follow?

## Goal

A good answer should identify evidence-backed failure hypotheses with confidence levels, name affected discipline / runner / framing stages, classify shortcoming types, and produce maintenance candidates with explicit evaluation gates. It should specifically address: WHY did the prior MVL+ loop, despite having access to the same corpus evidence (10+ observed failures from `2026-05-07_20-35`'s finding showing diverse shorthand types), narrow its scope to cross-spec references only? What process-level shortcoming explains the wrongly-narrow scope? Avoid pretending to know exact root cause when evidence is weak.

## Scope Check

Question covers goal. The question asks for comparative diagnosis of a correction chain, and the goal requires failure hypotheses, evidence, confidence, and maintenance candidates. The chain is well-defined with explicit prior_path, corrected_path, and human_correction.

## Correction Chain

- **Prior path:** `devdocs/inquiries/2026-05-08_06-30__lightweight_discipline_level_disambiguation/`
- **Corrected path:** `devdocs/inquiries/2026-05-08_07-15__generic_discipline_level_nonambiguity_convention/`
- **Human correction (verbatim, abridged):**
  ```text
  in devdocs/inquiries/2026-05-08_06-30__lightweight_discipline_level_disambiguation/finding.md
  
  the original question/query was [the original 2026-05-07_22-10 finding's example pairs]
  
  ... and it is discussing clearly about how to make this non ambiguity edit better, however
  
  devdocs/inquiries/2026-05-08_06-30__lightweight_discipline_level_disambiguation/finding.md
  
  is talking about small edits to disciplines and only regarding referring to other discipline
  text references, which is incredibley narrow scoped and wrong goal. Our nonambiguity problem
  is generic and not only relevant to referring other discipline text,
  
  so do another loop
  
  it should acknowledge [Component A's 4 examples] is good solution and should be added.
  And then it should talk about what can be done in individual discipline texts to prevent
  ambiguity from their end..
  ```
- **Optional context:**
  ```text
  This is a refinement-of-refinement chain. The original 2026-05-07_22-10 finding diagnosed
  the non-ambiguity failure mode in finding.md outputs and proposed Component A (4 expanded
  examples at conclude.md, lightweight) + Component B (regex-heavy mechanical check). The
  user accepted Component A but rejected Component B. The 2026-05-08_06-30 prior loop attempted
  to replace Component B with a discipline-level intervention, but narrow-scoped that intervention
  to cross-spec references only. The 2026-05-08_07-15 corrected loop broadened to all 6
  shorthand types observed in practice (cross-spec, within-discipline, inquiry-coined,
  project-specific, abbreviations, bare file paths).
  ```
- **Diagnostic goal:** identify evidence-backed failure hypotheses with confidence levels; name affected stage(s); produce maintenance candidates with evaluation gates. Specifically explain WHY the prior loop narrow-scoped despite the corpus evidence supporting a broader scope.

## Required Reads

For both inquiry folders, read `_branch.md`, `_state.md`, `finding.md`, root discipline outputs if present, and `docarchive/` discipline outputs if present.

The prior `2026-05-08_06-30/` folder has docarchive/exploration.md, sensemaking.md, decomposition.md, innovation.md, critique.md (5 files) plus _branch.md, _state.md, finding.md. The corrected `2026-05-08_07-15/` folder has the same structure.

## Diagnostic Constraints

- Treat the human correction as evidence, not noise.
- Treat the corrected inquiry as comparative evidence, not ground truth.
- Prefer evidence-backed hypotheses over exact root-cause claims.
- Allow mixed or unknown attribution when evidence does not isolate one discipline.
- Produce maintenance candidates only when the diagnosis gives enough evidence to justify them.

## Relationships

- DIAGNOSES: 2026-05-08_06-30 (weak prior inquiry — narrow cross-spec-only scope)
- COMPARES WITH: 2026-05-08_07-15 (later corrected inquiry — generic 6-type scope)
- RELATED: 2026-05-07_22-10 (the original finding both inquiries refer to; Component A and Component B were proposed there)
- RELATED: 2026-05-07_20-35 (the corpus's 10+ observed failures that informed both inquiries)
- RELATED: chain 1-7 LOOP_DIAGNOSE corpus (sister diagnostic runs); cross-cutting M6 promotion (M1+N2+O1+R1+T1 = name-and-test load-bearing concepts at Sensemaking)
