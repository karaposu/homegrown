# Innovation — LOOP_DIAGNOSE-Format Diagnostic Execution

## User Input

`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-18_09-20__loop_diagnose__innovate_missed_breadth_inversion/_branch.md`

Context: Innovation phase, execution-mode. Produce LOOP_DIAGNOSE Step 4 format: Correction Chain Summary + 5 Failure Hypotheses + Attribution Table + 7 Maintenance Candidates + Diagnostic Verdict. Apply 1G + 1F as light tools.

---

## Phase 1 — Seed

The seed is Sensemaking's 5 committed decisions + LOOP_DIAGNOSE Step 4's fixed-format requirements. Execution mode; cognitive content carries forward from Sensemaking.

Direction (intuition): the diagnosis is honest, sharply scoped, grounded in spec quotes. Innovation here is execution, not generation.

---

## P1 — Correction Chain Summary

- **Prior path:** `devdocs/inquiries/_archive/2026-05-04_07-27__multi_resolution_navigation_runner_depth_param/`
- **Corrected path:** `devdocs/inquiries/_archive/2026-05-04_14-22__multi_resolution_navigation_budget_vs_coverage/`
- **Human correction (verbatim from corrected inquiry's Source Input):**

  > *"lets reconsider it, i dont get why it is a problem that depth will uncover many directions?? it is okay and this is what we want... if you limit it with these other params then we are limiting the navigation no? i can accept max_expansions, which would mean AI would pick top N paths and follow them. but how it is designed should allow running unrun ones too..."*

- **What changed from prior result to corrected result:**

  The prior produced a budgeted-traversal runner contract (`/multi-navigation --depth 2 --max-expansions 4 --policy expansion-needed`) on the framing that "breadth is the risk to be bounded." The user's correction inverted that frame: breadth IS the purpose of Navigation; the risk is untracked execution, not breadth itself. The corrected inquiry produced a frontier-ledger + coverage-mode + scheduling-policy architecture where every candidate is recorded, batches control execution timing rather than discovery scope, and unrun paths remain visible as `pending` status. The corrected inquiry's invariant: *"Every discovered expansion candidate must be recorded. Budget changes execution timing, not existence."*

---

## P2 — Five Failure Hypotheses + Attribution Summary

### Hypothesis H1: Inversion depth-check skipped — stopped at component-level instead of system-level

**Affected stage:** Innovation (`/innovate` Inversion mechanism, per-mechanism depth-check refinement).

**Shortcoming type:** Sub-mode shallowness — Inversion's depth-check refinement (which mandates inverting until system-level) was either not applied or applied with no terminal check that system-level was reached.

**Evidence from prior inquiry** (`docarchive/innovation.md` lines 28-32):

> *Generic: "Instead of 'runner decides what to expand,' require routes to prove they deserve expansion."*
>
> *Focused: "Default Expansion: no; expansion happens only when policy or user selection changes it."*
>
> *Contrarian: "The runner should be allowed to stop early and say 'coverage is enough at this resolution.'"*

All three are about WHO/WHEN decides expansion within the existing frame — i.e., component-level inversions. None reach a system-level statement about whether expansion itself is the right thing to limit.

**Evidence from human correction:** the correction is exactly the system-level inversion the prior missed: *"i dont get why it is a problem that depth will uncover many directions?? it is okay and this is what we want."* This is "the assumption (expansion-must-be-limited) is wrong" — a SYSTEM-LEVEL statement.

**Evidence from corrected inquiry** (`docarchive/innovation.md` lines 80-83):

> *Generic: "Invert 'limit expansions to avoid too many directions.' → 'record all directions first; limit only materialization.'"*

This is the system-level inversion verbatim. The corrected /innovate produced it because the seed already carried the inversion; the prior should have generated this inversion ITSELF via depth-check application.

**`/innovate` spec quote grounding** (refinement note on Inversion mechanism):

> *"Depth check: After each inversion, ask 'Can I invert AGAIN?' The first inversion often produces an incremental improvement. The second often reveals a structural change. Keep inverting until you reach a statement about the SYSTEM, not about a COMPONENT.* (...) *Component-level inversions find workarounds. System-level inversions find architectural solutions."*

The spec explicitly mandates iterating until system-level. The prior did not.

**Confidence:** HIGH.

**Why not stronger:** The diagnosis assumes the prior's discipline-execution applied Inversion with a single pass and stopped at level 1. It's possible the discipline applied multiple inversions internally and the recorded outputs reflect only the final state. Even so, the recorded outputs are component-level — so even if multiple inversions ran, none reached system-level.

**Maintenance candidate:** B1 (Inversion depth-check stopping criterion).

**Evaluation gate:** Re-run a structurally similar inquiry (a seed that carries an inherited "X must be limited/avoided" assumption) under the maintenance-candidate-modified spec and verify that the Inversion output reaches a system-level statement explicitly tagged or self-identified.

---

### Hypothesis H2: Constraint Manipulation single-direction trap — only ADD direction applied, REMOVE direction skipped

**Affected stage:** Innovation (`/innovate` Constraint Manipulation mechanism, both-direction sub-mode coverage).

**Shortcoming type:** Sub-mode Single-Trap — the spec names both directions (`What if I removed this?` AND `What if I added a new constraint?`) but the prior applied only ADD.

**Evidence from prior inquiry** (`docarchive/innovation.md` lines 34-37):

> *Generic: "Add a budget: depth, max_expansions, max_routes_per_map, and max_output_size."*
>
> *Focused: "Add a policy: expansion-needed-only, high-priority-only, blocked-and-high, user-selected, or all-within-budget."*
>
> *Contrarian: "Forbid parallelism in v1 even if the runner structure could support it."*

All three are ADD-direction constraints (add budget; add policy; add forbiddance). Zero outputs apply the REMOVE direction.

**Evidence from human correction:** the correction questions the inherited constraint: *"if you limit it with these other params then we are limiting the navigation no?"* This is "remove the constraint" framed as a question — exactly what the REMOVE direction would have surfaced.

**Evidence from corrected inquiry** (`docarchive/innovation.md` lines 121-124):

> *Contrarian: "Remove the budget constraint entirely. Result: explicit exhaustive mode."*

The corrected /innovate applied the REMOVE direction explicitly as the Contrarian variation. The prior's Contrarian was "Forbid parallelism" (yet another ADD-direction). Same mechanism slot; different sub-mode applied.

**`/innovate` spec quote grounding** (Constraint Manipulation mechanism, "How to apply"):

> *"For each constraint, ask: 'What if I removed this?' and 'What if I added a new constraint?' Explore what becomes possible under the modified constraint set."*

The spec explicitly names both directions with an `AND`.

**Confidence:** HIGH.

**Why not stronger:** The prior may have internally considered the REMOVE direction and judged it not productive, then not recorded it. Even so, /innovate's discipline output should record what was considered (per the spec's mechanism-coverage telemetry requirement). The absence of REMOVE output IS the evidence.

**Maintenance candidate:** B2 (Constraint Manipulation both-direction requirement).

**Evaluation gate:** Re-run a structurally similar inquiry and verify each Constraint Manipulation invocation records at least one ADD and at least one REMOVE output, or explicitly flags "REMOVE direction yields no candidate" with reasoning.

---

### Hypothesis H3: Absence Recognition redesign-level question skipped — only patch-level absences surfaced

**Affected stage:** Innovation (`/innovate` Absence Recognition mechanism, patch-vs-redesign level question set).

**Shortcoming type:** Sub-mode shallowness — the spec names two levels (patch-level + redesign-level); the prior applied only patch-level.

**Evidence from prior inquiry** (`docarchive/innovation.md` lines 39-42):

> *Generic: "Missing artifact: homegrown/protocols/multi_resolution_navigation.md."*
>
> *Focused: "Missing route fields: Expansion, Expansion reason, Child maps."*
>
> *Contrarian: "Missing product surface: a composed route atlas may matter more than the runner command itself."*

All three are patch-level absences (missing file; missing fields; missing surface within the existing design). None ask the redesign-level question.

**Evidence from human correction:** the correction implies a redesign-level absence: the design conflated EXPANSION-RECORDING with EXPANSION-EXECUTION. If the system were designed from scratch with the user's correction in mind, a frontier ledger separating discovery from execution would exist as a first-class artifact.

**Evidence from corrected inquiry** (`docarchive/innovation.md` lines 132-135):

> *Generic: "Absent artifact: a frontier ledger."*

The corrected /innovate produced this artifact-level absence with a different shape (frontier ledger, not protocol file) — but the deeper move is that the redesign-level question would have surfaced this. The corrected inquiry's seed already carried the redesign-level frame.

**`/innovate` spec quote grounding** (Absence Recognition mechanism, "How to apply"):

> *"Ask: 'What would exist if this were designed from scratch today? What data, interface, or contract SHOULD exist between these components but was never created — because the system evolved incrementally?' The first three questions find gaps in the current design (a missing field, a missing validation, a missing handler). The last question finds things the current design never considered — structural absences that only become visible when you step outside the incremental mindset. The first finds patches. The last finds redesigns. Both are valid."*

The spec explicitly names two levels and says "Both are valid." The prior used only the patch level.

**Confidence:** HIGH.

**Why not stronger:** The prior's Contrarian ("missing product surface") gestures at a redesign-level concern but stays within the runner-command framing. It's redesign-adjacent but not redesign-level.

**Maintenance candidate:** B3 (Absence Recognition redesign-level requirement).

**Evaluation gate:** Re-run a structurally similar inquiry and verify Absence Recognition records at least one patch-level AND at least one redesign-level absence output, or explicitly flags "redesign-level question yielded no novel absence" with reasoning.

---

### Hypothesis H4: Assembly-phase axis-coverage check skipped — candidate set varied along single axis only

**Affected stage:** Innovation (`/innovate` Phase 3 Test → Assembly Check → Axis Coverage Check refinement).

**Shortcoming type:** Refinement skipped — the spec's axis-coverage check (which is explicitly designed to counter inherited-frame bias) was not applied at the Assembly Phase.

**Evidence from prior inquiry** (`docarchive/innovation.md` lines 214-231, the Assembly Check section):

> *"The strongest assembly is:* *1. Patch Navigation route cards with expansion fields. 2. Create homegrown/protocols/multi_resolution_navigation.md. 3. Use protocol in sequential mode first... 4. Produce a composed map-of-maps..."*

The Assembly section lists 7 implementation steps for the assembled protocol but does NOT identify the axes along which the candidate set varies. All 7 prior candidates (A-G) vary along one axis only: budget magnitude / form (Depth-Only / Budgeted / Protocol-with-budget / Multi-flag / Separate-loop / Selector-first / Atlas-Graph). The orthogonal axis (discovery-vs-execution split; track-vs-bound) is absent.

**Evidence from human correction:** the correction surfaced exactly the missing orthogonal axis: track-everything-but-bound-execution. If the axis-coverage check had been applied, this missing axis would have been flagged.

**Evidence from corrected inquiry:** the corrected /innovate's candidate set varies along TWO axes (budget control + coverage preservation), with explicit candidates for both (Candidate C exhaustive mode; Candidate G frontier ledger).

**`/innovate` spec quote grounding** (Phase 3 Test, Assembly Check refinement):

> *"Axis coverage check. Before producing the assembly verdict, examine the candidate set for the orthogonal axes it varies along.* (...) *each axis should have at least one candidate variant. A candidate set that varies along only one axis when multiple orthogonal axes are relevant is incomplete; the assembly check must explicitly identify the candidate-space axes and flag any axis with no variant.* **Single-axis candidate sets often arise from a frame inherited from upstream pipeline stages; the axis-coverage check counters that bias.**"

The bolded sentence is the spec's explicit counter to the failure pattern. It was not applied.

**Confidence:** HIGH.

**Why not stronger:** The prior's Assembly section does state the assembled protocol IS the answer, but the spec's axis-coverage check requires explicit axis identification BEFORE the assembly verdict. The check was not run.

**Maintenance candidate:** B4 (axis-coverage check explicit invocation requirement).

**Evaluation gate:** Re-run a structurally similar inquiry; before the Assembly section produces its verdict, the axis-coverage check output must explicitly enumerate the axes along which the candidate set varies and name any axis with no variant.

---

### Hypothesis H5: Inherited Frame Audit absent from `/innovate` spec — no meta-trigger orchestrates the four frame-escape features against inherited assumptions

**Affected stage:** Innovation (`/innovate` spec — meta-trigger level, between mechanisms application and Assembly Phase).

**Shortcoming type:** Spec-coverage gap (subtle, secondary to the execution gaps above). The spec has 4 named frame-escape features (Inversion depth-check; Constraint Manipulation both-direction; Absence Recognition redesign-level; Assembly axis-coverage). But it lacks an explicit meta-trigger that says: "if your candidate set shares an assumption inherited from the seed, force-apply these four features against that assumption." Without the trigger, the features fire ad-hoc and the inherited-frame case is not surfaced as the explicit "now use these" condition.

**Evidence from prior inquiry:** the prior applied all 7 mechanisms (per its own telemetry) and reported *"Convergence: YES. Five mechanisms converge on protocol-backed budgeted traversal."* The discipline's existing convergence signal treated within-frame convergence as a SUCCESS signal — without checking whether the convergence was on a genuinely surfaced insight or on a frame-inherited assumption. No meta-check fired.

**Evidence from human correction:** the correction is precisely what an Inherited Frame Audit would have surfaced — the seed's "unbounded recursion is risk" assumption was inherited from upstream and propagated through all mechanisms without challenge. The user had to deliver the audit manually.

**Evidence from corrected inquiry:** the corrected /innovate's seed carried the breadth-is-feature inversion as input — it didn't have to discover it. This confirms the diagnosis: with the inverted frame, /innovate's existing mechanisms produced the correct architecture. The failure was in the DISCOVERY of the inversion, not in /innovate's ability to operationalize it.

**`/innovate` spec quote grounding:** there is NO spec passage establishing an Inherited Frame Audit meta-trigger. The closest existing features are:
- Failure mode #3 Early Frame Lock: *"The first successful reframe is adopted permanently. No further mechanisms are applied."* — but the prior applied all 7 mechanisms; the lock wasn't at first-reframe, it was at inherited-frame. The spec's Early Frame Lock does not cover this variant.
- Failure mode #6 Survival Bias: *"Everything that survives testing is incremental. Nothing challenges fundamental assumptions."* — this is the CONSEQUENCE recognition signal but not a meta-trigger preventing it during generation.

**Confidence:** MEDIUM-HIGH.

**Why not stronger:** This is a more interpretive claim than H1-H4 (which point to spec features that exist and weren't used). H5 claims a spec feature should exist that doesn't. The interpretation could be wrong — maybe the existing features, applied at full depth (per H1-H4 maintenance candidates), are sufficient and no meta-trigger is needed. The single correction-pair doesn't isolate which is true.

**Maintenance candidate:** A1 (Inherited Frame Audit meta-trigger addition).

**Evaluation gate:** After implementing the H1-H4 maintenance candidates without A1, re-run on a structurally similar inquiry; if the per-mechanism reinforcement language alone catches inherited-frame propagation, A1 is unnecessary. If propagation still occurs, A1 is justified.

---

### Failure Attribution Summary

| Affected stage | Shortcoming type | Evidence strength | Confidence | Candidate action |
|---|---|---|---|---|
| Innovation (Inversion mechanism) | Sub-mode shallowness (depth-check stopped at component-level) | STRONG (prior outputs + spec quote + corrected divergence) | HIGH | B1 — depth-check stopping criterion |
| Innovation (Constraint Manipulation) | Sub-mode Single-Trap (only ADD direction) | STRONG (prior outputs + spec quote + corrected divergence) | HIGH | B2 — both-direction requirement |
| Innovation (Absence Recognition) | Sub-mode shallowness (only patch-level) | STRONG (prior outputs + spec quote + corrected divergence) | HIGH | B3 — redesign-level requirement |
| Innovation (Assembly Phase) | Refinement skipped (axis-coverage check not invoked) | STRONG (prior Assembly section + spec quote naming the inherited-frame counter) | HIGH | B4 — axis-coverage explicit invocation |
| Innovation (spec-coverage layer) | Missing meta-trigger (Inherited Frame Audit) | MEDIUM (interpretive; single correction-pair) | MEDIUM-HIGH | A1 — Inherited Frame Audit |

---

## P3 — Seven Maintenance Candidates

Each candidate targets `/innovate` spec only (per user scope). References its parent failure hypothesis by ID.

### A1 — Inherited Frame Audit meta-trigger (addresses H5)

- **What should change:** Add a new sub-section to `/innovate` spec titled "Inherited Frame Audit" between Phase 2 Generate and Phase 3 Test. The sub-section reads approximately: *"Before testing, examine your candidate set. Do most candidates share an assumption inherited from the seed without any mechanism's output challenging it? If yes, the inherited frame is locked. Force-apply: (a) Inversion at SYSTEM-LEVEL depth against the seed's framing; (b) Lens Shifting with the seed's success-criterion as the lens being shifted; (c) Constraint Manipulation REMOVE-direction on the seed's central constraint; (d) Absence Recognition redesign-level question against the seed's design. Then return to Phase 2 Generate with these four additional outputs."*
- **Which file or protocol:** `cognitive_harness/innovate/references/innovate.md` — addition between Phase 2 (line ~252) and Phase 3 (line ~280).
- **Risk class:** MEDIUM. Adds a new meta-step that may increase /innovate's run-length and complexity. Worth testing on multiple inquiries before committing.
- **Expected benefit:** /innovate becomes self-aware of inherited-frame propagation. When the seed carries an assumption upstream-given, the discipline forces a frame-questioning pass before testing. Would catch the prior's pattern automatically.
- **Evaluation gate:** Re-run a structurally similar inquiry (seed with an upstream-inherited "X must be limited/avoided/bounded" assumption). If the modified /innovate detects the inherited frame and produces frame-questioning outputs without human correction, A1 is validated.
- **Should this become a branch experiment?** YES. The candidate's value depends on whether the per-mechanism reinforcements (B1-B4) alone suffice. A branch experiment that compares /innovate-with-B1-B4-only vs /innovate-with-B1-B4-and-A1 across 3-5 inquiries would isolate A1's marginal value.

### B1 — Inversion depth-check stopping criterion (addresses H1)

- **What should change:** Add to Inversion mechanism's How-to-apply sub-section (after the existing depth-check refinement): *"Stopping criterion: You MUST reach a SYSTEM-LEVEL statement before recording your final Inversion output. If your most recent inversion is about WHO/WHEN/HOW within the existing frame (a component-level statement), you have NOT reached system-level — invert again. Record your terminal output's level explicitly as one of: component-level, system-level, root-cause-level. Component-level is NOT an acceptable terminal output."*
- **Which file or protocol:** `cognitive_harness/innovate/references/innovate.md` — Inversion section (lines ~143-168), append to depth-check refinement.
- **Risk class:** LOW. The spec already mandates depth-check; this adds an explicit stopping criterion that's structurally consistent with the existing language.
- **Expected benefit:** Inversion outputs become more rigorously system-level. Reduces the rate at which component-level inversions are recorded as terminal.
- **Evaluation gate:** Future /innovate Inversion outputs include explicit level tagging (component / system / root-cause); spot-check that terminal outputs are system-level or root-cause-level, not component-level.
- **Should this become a branch experiment?** NO. Low-risk text addition; can land in main spec.

### B2 — Constraint Manipulation both-direction requirement (addresses H2)

- **What should change:** Add to Constraint Manipulation's How-to-apply sub-section: *"Both directions are mandatory, not optional. For each constraint, apply BOTH 'What if I removed this?' AND 'What if I added a new constraint?' Record at least one ADD output AND at least one REMOVE output per Constraint Manipulation invocation. If the REMOVE-direction yields no productive candidate, explicitly record 'REMOVE-direction explored; no candidate' with reasoning. Do not omit silently."*
- **Which file or protocol:** `cognitive_harness/innovate/references/innovate.md` — Constraint Manipulation section (lines ~172-185), append to How-to-apply.
- **Risk class:** LOW. The spec already names both directions; this enforces parity in output recording.
- **Expected benefit:** Constraint Manipulation outputs become symmetric. The REMOVE-direction stops being silently skipped.
- **Evaluation gate:** Future Constraint Manipulation outputs include at least one ADD and at least one REMOVE entry. Audit a sample for compliance.
- **Should this become a branch experiment?** NO. Low-risk text addition.

### B3 — Absence Recognition redesign-level requirement (addresses H3)

- **What should change:** Add to Absence Recognition's How-to-apply sub-section: *"Both levels are mandatory. After surfacing patch-level absences (missing field / missing validation / missing handler / missing artifact within the current design), apply the redesign-level question: 'What would exist if this were designed from scratch today? What data, interface, or contract SHOULD exist between these components but was never created — because the system evolved incrementally?' Record at least one patch-level AND at least one redesign-level absence per Absence Recognition invocation, or explicitly flag 'redesign-level question yielded no novel absence' with reasoning."*
- **Which file or protocol:** `cognitive_harness/innovate/references/innovate.md` — Absence Recognition section (lines ~189-206), append to How-to-apply.
- **Risk class:** LOW. The spec already names both levels and says "Both are valid"; this enforces parity in output recording.
- **Expected benefit:** Absence Recognition outputs systematically include redesign-level absences. The frame-questioning value of the redesign-level question becomes accessible at every /innovate run.
- **Evaluation gate:** Future Absence Recognition outputs include at least one patch-level AND at least one redesign-level entry.
- **Should this become a branch experiment?** NO. Low-risk text addition.

### B4 — Axis-coverage check explicit invocation requirement (addresses H4)

- **What should change:** Add to Phase 3 Test → Axis Coverage Check refinement (already in spec): *"The axis-coverage check is mandatory, not optional. Before producing the Assembly Check verdict, you MUST: (1) explicitly identify the axes along which your candidate set varies (by name); (2) explicitly identify any orthogonal axes RELEVANT to the problem but absent from your candidate set; (3) for each absent axis, either produce at least one candidate variant on that axis OR explicitly flag 'axis identified but no candidate variant produced' with reasoning. Do not produce the Assembly verdict without recording the axis-identification step."*
- **Which file or protocol:** `cognitive_harness/innovate/references/innovate.md` — Phase 3 Test section (lines ~306-309), append to existing Axis Coverage Check refinement.
- **Risk class:** LOW. The spec already includes the axis-coverage check and explicitly names it as a counter to inherited-frame bias; this enforces invocation.
- **Expected benefit:** Single-axis candidate sets get caught at Assembly Phase. Inherited-frame propagation that survives mechanism-level depth-checks gets caught at the meta-level.
- **Evaluation gate:** Future /innovate Assembly Check sections include explicit axis identification + absent-axis flagging. Audit.
- **Should this become a branch experiment?** NO. Low-risk text addition.

### C1 — Add "Inherited Frame Lock" as failure mode (optional; partial-address of H5)

- **What should change:** Either (a) extend /innovate's existing Failure Mode #3 Early Frame Lock definition to include the inherited-frame variant: *"This failure mode also occurs when the upstream-given seed carries a frame that propagates through all mechanisms without being challenged. Recognition signal: every mechanism's output is consistent with the seed's central assumption. Corrective: run the Inherited Frame Audit (Phase 2.5)."* Or (b) add a new 7th failure mode "Inherited Frame Lock" with similar definition.
- **Which file or protocol:** `cognitive_harness/innovate/references/innovate.md` — Failure Modes section (lines ~377-384), either extend FM3 or insert FM7.
- **Risk class:** LOW. The change is documentation of a failure pattern already evidenced.
- **Expected benefit:** Failure-mode-self-check at end of /innovate run gains a specific recognition signal for the inherited-frame case. The prior's "Failure modes observed: none" would have been caught.
- **Evaluation gate:** Future /innovate runs that propagate an inherited frame self-report the failure mode rather than reporting "none."
- **Should this become a branch experiment?** NO. Documentation addition. Optional because it might be redundant if A1 fires reliably.

### C2 — Add "Sub-mode Single-Trap" as failure mode (optional; partial-address of H2)

- **What should change:** Either (a) extend /innovate's existing Failure Mode #2 Single-Mechanism Trap definition to include the sub-mode variant: *"This failure mode also occurs at the sub-mode level WITHIN a mechanism — when a mechanism has multiple named directions/depths/levels and only one is applied. Recognition signal: a mechanism's output set covers only one of its named sub-modes (e.g., only ADD-direction of Constraint Manipulation, only component-level depth of Inversion, only patch-level of Absence Recognition). Corrective: enforce both-direction / full-depth output requirement per mechanism."* Or (b) add a new failure mode "Sub-mode Single-Trap" with similar definition.
- **Which file or protocol:** `cognitive_harness/innovate/references/innovate.md` — Failure Modes section, either extend FM2 or insert.
- **Risk class:** LOW. Documentation addition.
- **Expected benefit:** Failure-mode-self-check gains coverage for sub-mode-level traps. The prior's missed REMOVE direction would have been caught.
- **Evaluation gate:** Future /innovate runs that omit a named sub-mode self-report the failure mode.
- **Should this become a branch experiment?** NO. Documentation addition. Optional because it might be redundant if B1-B3 enforce coverage directly.

---

## P4 — Diagnostic Verdict

**Overall:** ACTIONABLE.

- **Best-supported diagnosis:** The prior `/innovate` run failed to escape an inherited "expansion-must-be-limited" frame because four named frame-escape features (Inversion depth-check; Constraint Manipulation both-direction; Absence Recognition redesign-level; Assembly axis-coverage) were not applied at full depth, and there is no meta-trigger in the current `/innovate` spec that would have orchestrated those features against the inherited assumption. This is primarily a spec-execution gap (the spec supports the move) with a secondary subtle spec-coverage gap (the spec lacks the explicit meta-trigger).

- **Strongest maintenance candidate:** B4 (Axis-coverage check explicit invocation requirement) — it directly counters inherited-frame propagation per the spec's own existing language; its risk class is LOW; its evaluation gate is mechanical; it would have caught the prior's failure with a single-line spec edit. The most disruptive candidate (A1 Inherited Frame Audit meta-trigger) is medium-risk and should be tested as a branch experiment first.

- **Main uncertainty:** Whether the per-mechanism reinforcements (B1-B4) alone suffice, or whether A1 is also needed. A single correction-pair does not isolate this. Multiple correction-pairs with the same inherited-frame pattern would clarify.

- **Recommended next step:** Implement B1-B4 in `/innovate` spec immediately (LOW risk; high-confidence diagnosis; concrete text additions). Treat A1 as a branch experiment running on the next 3 /innovate inquiries that exhibit potential inherited-frame seeds; if B1-B4 alone catch propagation reliably, A1 stays deferred. C1 and C2 are documentation refinements with low cost; land them alongside B1-B4.

---

## Light-Tool Checks (per minimum coverage)

### Absence Recognition (Generator)

**Check: is any diagnostic category missing from the 5 failure hypotheses?**

The 5 hypotheses cover: 3 per-mechanism execution gaps (Inversion / CM / AR) + 1 assembly-phase execution gap (axis-coverage) + 1 spec-coverage gap (meta-trigger). Other potential categories:

- Lens Shifting depth gap — partially diagnosed in Exploration but downstream-dependent on Inversion (if Inversion had reached system-level, Lens Shifting's success-criterion shift would have followed via cross-mechanism convergence). Not separately needed; folded into H1's downstream effect.
- Domain Transfer common-cause domain selection — diagnosed in Exploration but identified as "generic-application failure mode not specific to a named spec feature." Not addressed by any per-mechanism reinforcement; would require new spec language about domain-diversity. Out of scope for the current 5-hypothesis set; flagged as Open Question.
- /td-critique survivor-non-assumption-challenge — out of user scope.

**Coverage verdict:** the 5 hypotheses cover the named execution gaps + the named spec-coverage gap. The Domain Transfer common-cause point is an Open Question; the Lens Shifting effect is downstream of H1. No additional hypotheses needed.

### Constraint Manipulation (Framer)

**Check: would tightening the diagnostic scope change verdicts?**

Tighten to "only HIGH-confidence hypotheses": H1-H4 stay; H5 drops (MEDIUM-HIGH). Verdict would become PARTIAL (the per-mechanism execution gaps are solid; the meta-trigger claim is more interpretive). Innovation made the trade-off to include H5 for completeness, with explicit lower confidence.

Tighten to "only spec-edit-targeting hypotheses": all 5 stay; this is the default scope.

Loosen to "include /sensemaking / /td-critique pointers": user scope prohibits.

**Constraint check verdict:** the diagnostic scope is appropriately tight; verdicts hold under tightening.

---

## Failure Modes Observed

- **Premature evaluation:** AVOIDED — diagnostic claims are grounded in direct quotes from prior + spec.
- **Single-mechanism trap:** N/A — execution mode; 1G + 1F applied as light tools.
- **Early frame lock:** AVOIDED — Sensemaking's frame is followed; not re-litigated.
- **Innovation without grounding:** AVOIDED — every claim has spec-quote anchor.
- **Mechanism exhaustion:** N/A.
- **Survival bias:** PARTIAL FLAG — the diagnosis emphasizes execution-gap (the comfortable diagnosis: spec is fine, run was bad) over spec-coverage-gap (the more disruptive diagnosis: spec itself needs new feature). Mitigation: H5 explicitly preserved with MEDIUM-HIGH confidence; A1 candidate explicitly proposed; verdict names A1 as "most disruptive — branch experiment first." The bias is acknowledged.

---

## Innovation Telemetry

| Field | Value |
|---|---|
| Mode | EXECUTION (LOOP_DIAGNOSE format) |
| Generators applied (light tools) | 1/4 (Absence Recognition — coverage check on hypothesis categories) |
| Framers applied (light tools) | 1/3 (Constraint Manipulation — tightening test on verdict) |
| Failure hypotheses produced | 5 (H1-H5) — 4 HIGH-confidence + 1 MEDIUM-HIGH |
| Maintenance candidates produced | 7 (A1 + B1-B4 + C1-C2) — 1 MEDIUM-risk + 4 LOW-risk + 2 LOW-risk optional |
| Attribution table | 5 rows (one per hypothesis) |
| Diagnostic verdict | ACTIONABLE |
| Spec quote grounding | Every hypothesis cites /innovate spec directly + prior output directly |
| User-scope respected | YES — all candidates target /innovate only; /sensemaking and /td-critique pointers flagged in Reasoning (separate from candidates) |
| Failure modes observed | Survival bias partially flagged and mitigated; others avoided |

**Overall: PROCEED to Critique.**

---

## Hand-off to Critique

Critique should:

1. **Adversarially test each Failure Hypothesis (H1-H5).** For each, construct the strongest counter-argument that the prior's `/innovate` output could have arisen from CORRECT depth-check application with a defensible different verdict (not from depth-check skip). Strongest test on H5 (which has lower confidence): is there evidence the prior's pattern would be solved by H1-H4 alone, making A1 unnecessary?

2. **Test each Maintenance Candidate (A1, B1-B4, C1-C2).** For each, validate (a) the spec-text change is concrete enough to be implementable; (b) the evaluation gate actually tests the candidate's claim; (c) the risk class is honestly assessed.

3. **Execute per-commitment re-tests** per Sensemaking's plan (3 priors, 14 commitments). Record outcomes for CONCLUDE's `## Inherited Commitments Re-test`.

4. **Test the diagnostic verdict ACTIONABLE designation.** Is the evidence really strong enough? Or should the verdict be PARTIAL (concrete candidates but single-correction-pair evidence)?

5. **Survival-bias second check.** The B1-B4 candidates are LOW-risk text additions; A1 is MEDIUM-risk and recommended for branch experiment. Did Innovation under-survive A1 by treating it as "branch experiment first" when the evidence may justify direct landing? Or is the cautious framing honest?

6. **The user-scope flag.** Confirm that evidence pointing to /sensemaking and /td-critique is appropriately noted in Reasoning but not pushed into candidates. The user's scope must be respected.
