# Branch: Context-as-absolute category errors — deep dive

## Question

What is the precise structure of the "context-as-absolute category errors" failure pattern observed in three sibling instances across recent inquiries — is it really ONE family at a single level, or several distinct patterns at different levels? What is its precise detection mechanism that future inquiries can apply? What is its precise corrective mechanism? And how should it relate to existing project failure modes (e.g., `/explore`'s open→closed drift; `/sense-making`'s Status Quo Bias; the LOOP_DIAGNOSE's category-error pattern)?

## Goal

A structurally-grounded understanding of the pattern family, sufficient to:

1. **Name the pattern precisely** — agree on a project-native term (the working name "context-as-absolute" is provisional).
2. **Locate it in the failure-mode taxonomy** — is it a single family, multiple sibling patterns, or a meta-pattern over existing failure modes?
3. **Specify the detection mechanism** — what runtime check fires when the pattern is occurring? What evidence signals it?
4. **Specify the corrective** — what does a loop do when it detects the pattern?
5. **Connect to existing failure modes** — how does the pattern relate to /explore's open→closed drift (failure mode #7), /sense-making's Status Quo Bias / Clean Resolution Trap / Self-Reference Blindness, /td-critique's Wrong Dimensions / Dimension Blindness?
6. **Decide on actionability** — does the pattern warrant elevation to a project-wide named failure-mode catalog entry NOW, or should it remain research-frontier pending more observations?

## Scope Check

Question covers goal. The question asks for the pattern's structure + detection + corrective; the goal asks for precise naming + taxonomy placement + detection mechanism + corrective + cross-reference to existing failure modes + actionability decision.

**Specific-vs-pattern check:** the inquiry is at the META-PATTERN level (analyzing a failure pattern across multiple inquiries). The three sibling instances are specific examples; the pattern is the broader family they illustrate. The inquiry should address the broader family (the wider pattern), with the three specific instances as grounded evidence. Both readings are present and complementary.

## The three sibling instances (from prior findings)

1. **Territory-as-operation** (from `devdocs/inquiries/2026-05-12_16-59__navigation_requires_holistic_understanding/finding.md`):
   - The 16-59 finding wrongly named "Setup sub-phase" as a new operation in /navigate.
   - The "Setup operation" was actually /explore applied to a different territory (the SIC output + project files + authoring docs).
   - Pattern: treating /explore-on-territory-X as if it were a new operation.

2. **Annotation-as-operation** (from `devdocs/inquiries/2026-05-12_19-43__navigate_is_explore_with_destination_test/docarchive/finding_iter1.md`):
   - Iter-1 of 19-43 wrongly named Movement-articulation, Guide, and Continuation memory as "additive operations" in /navigate.
   - These are per-route annotation fields (content within enumeration's output), not separate cognitive operations.
   - Pattern: treating per-item annotation content as if it were a separate operation.

3. **Prior-finding-authority-as-canonical** (from `devdocs/inquiries/2026-05-12_20-31__loop_diagnose__navigate_4_operations_error/finding.md`):
   - The LOOP_DIAGNOSE observed that iter-1 of 19-43 trusted the 11-40 factoring finding's "Select as Component 4" commitment as authoritative without checking against /navigate's canonical spec (which explicitly NOT-listed Decision-making).
   - Pattern: treating an active prior finding's claim as if it were canonical-spec authoritative.

## Required canonical-spec loads (per Candidate A from LOOP_DIAGNOSE)

This inquiry analyzes failure patterns across `/explore`, `/sense-making`, `/td-critique`, and the cross-finding-inheritance layer:

- `/Users/ns/Desktop/projects/native/homegrown/explore/references/explore.md` — `/explore` canonical (especially failure mode #7: open→closed drift; the NOT-list at §1.3; labeling-vs-meaning heuristic at §4.4).
- `/Users/ns/Desktop/projects/native/homegrown/sense-making/references/sensemaking.md` — `/sense-making` canonical (especially Status Quo Bias; Clean Resolution Trap; Self-Reference Blindness; Definitional / Internal Consistency perspective).
- `/Users/ns/Desktop/projects/native/homegrown/td-critique/references/td-critique.md` — `/td-critique` canonical (especially Wrong Dimensions; Dimension Blindness failure modes).
- The three findings cited above (sibling instances).
- The LOOP_DIAGNOSE finding (which introduced the "context-as-absolute" framing).

## Working hypotheses (to be tested)

- **H1 — ONE family, single level.** The three instances belong to one structural family at the "elevating-something-contextual-to-absolute-status" level. Project-wide naming is warranted.

- **H2 — Three distinct patterns at different levels.** The instances are at categorically different levels (territory-vs-operation = within-discipline-spec-analysis level; annotation-vs-operation = within-discipline-analysis level; prior-finding-vs-canonical = cross-finding-inheritance level). Naming them as one family is over-generalization; they should remain distinct.

- **H3 — TWO families.** Instances 1 and 2 are at the "within-discipline-analysis" level (both elevate something inside a discipline to operation status); instance 3 is at the "cross-finding-inheritance" level (treats a prior artifact's claim as authoritative). Two separate patterns.

- **H4 — Meta-pattern over existing failure modes.** The pattern is a meta-failure-mode that re-expresses existing failure modes across disciplines (/explore's open→closed drift; sense-making's Clean Resolution Trap; etc.). Doesn't need a new name; needs a cross-reference table.

- **H5 — Detection mechanism candidates:**
  - **D1** (operation-vs-non-operation check): when a claim adds a new operation/component to a discipline, check whether the proposed item is (a) /explore applied to a different territory, (b) an annotation/content field in an existing operation's output, or (c) a sub-operation of an existing operation. If yes, it's NOT a new operation.
  - **D2** (canonical-spec-contradiction check): when inheriting a structural claim from a prior finding, check whether the claim contradicts the relevant discipline's canonical spec. If yes, the inherited claim is presumptively wrong.

- **H6 — Corrective mechanism candidates:**
  - **C1** (detection→retraction): when the pattern is detected, retract the proposed structural addition; re-classify it as territory/annotation/sub-operation.
  - **C2** (detection→canonical-load): when the inherited-claim variant is detected, load the canonical spec before propagating.

## Relationships

- CONTINUES FROM: `devdocs/inquiries/2026-05-12_20-31__loop_diagnose__navigate_4_operations_error/finding.md` (LOOP_DIAGNOSE; introduced the pattern family framing as research-frontier)
- DIAGNOSES: the family of errors observed across `devdocs/inquiries/2026-05-12_16-59__navigation_requires_holistic_understanding/finding.md` + `devdocs/inquiries/2026-05-12_19-43__navigate_is_explore_with_destination_test/docarchive/finding_iter1.md` + the LOOP_DIAGNOSE finding
- RELATED: all prior /explore-thread findings (background context for the discipline-analysis errors)
