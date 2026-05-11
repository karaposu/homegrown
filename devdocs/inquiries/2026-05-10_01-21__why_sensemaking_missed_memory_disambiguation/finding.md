---
status: active
diagnoses: devdocs/inquiries/2026-05-09_18-23__metaloop_autonomy_ladder_and_open_design_questions/finding.md
refines: devdocs/inquiries/2026-05-09_21-15__loop_diagnose__memory_ambiguity_in_metaloop_ladder/finding.md
---
# Finding: Why Sensemaking application missed Memory disambiguation

## Changes from Prior

**Prior path:** `devdocs/inquiries/2026-05-09_21-15__loop_diagnose__memory_ambiguity_in_metaloop_ladder/finding.md`

**Revision trigger:** the user asked a follow-up — drilling into the prior diagnostic's H1 hypothesis (Sensemaking primary fault) at the level of "why did the application miss the test?" The prior loop_diagnose explicitly stopped at H1 with "why not stronger: N=1; the precise causal mechanism behind the application gap was not isolated." This drill-down is that isolation.

**What's preserved:** the prior loop_diagnose finding's ranked-multi-fault attribution (Sensemaking primary, Innovation secondary, Critique tertiary, MVL+ runner contributing) and all 6 maintenance candidates (M1, M2, M3, M4, M5, M6).

**What's changed:** the prior H1 said "load-bearing concept test applied incompletely; proxy-vs-structural sub-test not run on Memory specifically." This finding refines the WHY: the test wasn't applied because the inquiry's frame had already settled Memory's meaning by scope, excluding per-inquiry artifacts. Even if the test had fired, it would likely have answered "one structural distinction" within that scope. The user's correction succeeded by **frame-exit** — stepping outside the inquiry's frame to bring in evidence the frame had excluded.

**What's new:** a **5-link causal chain** decomposition of how the failure happened (each link mapped to existing Sensemaking failure modes); identification of **link 4 (frame-scope capture / Perspective Blindness on frame-exit perspective) as PRIMARY**; a new (DEFERRED) maintenance candidate **M7** addressing the primary link; a **research frontier** on project-wide-visibility transfer at higher meta-loop levels.

**Migration:** future findings discussing the Memory failure should reference the 5-link chain attribution and M7 by name. Prior loop_diagnose's M1-M6 are unchanged but their per-link coverage is now explicit.

## Question

> Given that the prior loop_diagnose finding identified Sensemaking's load-bearing concept test in `homegrown/sense-making/references/sensemaking.md` Phase 3 contains the proxy-vs-structural sub-test designed exactly for "is this label one structural distinction or several lumped?" — and given that the test was applied to other concepts (5 cognitive roles, autonomy ladder, movement direction, loop count) but NOT applied to Memory in the prior MVL+ run on the metaloop ladder — what was the **primary causal mechanism** that prevented the test from firing on Memory?

## Goal

A single sharp answer naming the primary causal mechanism, evidence-grounded in the prior `docarchive/sensemaking.md` text, plus the contributing causes ranked. The user must be able to: (a) read one paragraph and understand WHY the test didn't fire (causal mechanism, not just description); (b) see whether existing maintenance candidates (M1-M6 from the prior loop_diagnose) close the mechanism; (c) decide whether the new candidate (M7) is justified.

---

## Finding Summary

- **PRIMARY: Sensemaking checked every perspective EXCEPT the one the user used.** The seven perspectives Sensemaking ran in Phase 2 (Technical / Logical, Human / User, Strategic / Long-term, Risk / Failure, Resource / Feasibility, Definitional / Consistency, Phase / Calibration-State) all operate WITHIN the inquiry's frame ("the meta-loop ladder"). The frame implicitly scoped "Memory" to mean what the meta-loop tracks across runs — the `_meta_state.md` and `navigation_memory.md` artifacts. Per-inquiry md files (`_branch.md`, `_state.md`, `finding.md` — written by `/MVL` and `/MVL+` runners at every level, project-wide) were OUTSIDE the frame's reach. The user's correction succeeded by **frame-exit** — stepping outside the inquiry's frame and asking "what does Memory mean PROJECT-WIDE?". This is **Perspective Blindness applied to the frame-exit perspective** (failure mode #4 in `homegrown/sense-making/references/sensemaking.md`).

- **Even if the load-bearing concept test had fired on Memory, it would likely have answered "one structural distinction" within the frame's scope.** The test asks "does this label represent ONE structural distinction or several lumped?" — but the frame had already pre-defined what counts as a distinction. The test's result depends on the frame's openness, and the frame was scoped narrowly.

- **The primary mechanism is link 4 of a 5-link causal chain inside Sensemaking's failure-mode space.** Each link is covered by an existing failure mode in the Sensemaking spec (no new failure mode needs coining): link 1 Status Quo Bias (term inherited from prior findings), link 2 Anchor Dominance (multi-axial frame as the dominant Phase-1 anchor), link 3 categorization (manifestation of links 1+2 — Memory placed AS axis-name), link 4 frame-scope capture / Perspective Blindness on frame-exit (PRIMARY), link 5 Premature Stabilization manifestation (the procedural enumeration of which concepts to test excluded Memory because Memory was treated as frame-scaffold not commitment).

- **M1 (the prior diagnostic's pre-CONCLUDE term-ambiguity checklist) addresses link 5 — the procedural symptom — NOT link 4 — the primary cause.** M1 retains value as a **downstream safety-net** at the publication boundary; it catches inconsistent cell values in finished findings even when frame-scope capture happened during Sensemaking. But M1 cannot challenge the frame's scope because the frame is set well upstream of CONCLUDE.

- **A new candidate M7 (DEFERRED) addresses link 4 directly.** M7 = add a "frame-exit perspective" to the Sensemaking spec's Phase 2 perspective list. The candidate is **DEFERRED per `homegrown/protocols/loop_diagnose.md` Step 5** (do not propose broad fundamentals rewrites from one weak correction chain). **Revival trigger:** M4 audit (from the prior loop_diagnose) produces ≥3 instances of frame-scope-capture-like patterns across distinct inquiries.

- **Confidence on link-4 PRIMARY attribution: MEDIUM-HIGH.** The chain is well-anchored in spec-text and docarchive lines + the user's frame-exit success provides direct external evidence (the frame-exit move worked, suggesting the frame is the binding constraint). N=1 limits confidence to MEDIUM-HIGH, not HIGH.

- **Strategic implication (Research Frontier — not actionable):** at L0 of the meta-loop ladder, the human IS the meta-loop runner with project-wide visibility. As the ladder graduates roles to system, this project-wide-visibility role needs explicit transfer — otherwise frame-scope capture recurs at every level where the system operates inside a frame without a project-wide perspective. The 9-axis frame from the prior loop_diagnose finding doesn't include a "project-wide-visibility" axis. Whether it should is a separate inquiry.

---

## Finding

### Surrounding context

This finding is the third in a sequence:

1. `devdocs/inquiries/2026-05-09_18-23__metaloop_autonomy_ladder_and_open_design_questions/finding.md` — the original metaloop-ladder design that contained the L0 Memory misclassification (the failure surface).
2. `devdocs/inquiries/2026-05-09_21-15__loop_diagnose__memory_ambiguity_in_metaloop_ladder/finding.md` — the LOOP_DIAGNOSE-protocol-driven first-pass diagnostic, which identified WHERE the failure happened (cascading application-level failure across 3 disciplines + 1 runner gap; Sensemaking primary by spec-charter).
3. **This finding** — the drill-down into WHY the application missed.

The prior diagnostic explicitly noted at H1: *"Why not stronger: N=1 — only one correction chain. The 'Sensemaking applies its tests shallowly to terms-not-named-in-explicit-Ambiguity-numbering' claim is plausible but only weakly evidenced."* This finding addresses that note by isolating the causal mechanism more precisely.

The reasoning engine remains MVL+ (E → S → D → I → C). The drill-down's narrow scope allowed minimum mechanism coverage in Innovation per Decomposition's note.

### 1. The 5-link causal chain

| Link | Description | Failure-mode mapping (existing spec) | Evidence anchor | Rank |
|---|---|---|---|---|
| **1. Inheritance** | "Memory" was inherited from prior findings (specifically, the 2026-05-10 finding listed it as one of the architectural axes); the inquiry treated it as established vocabulary, not a new concept needing fresh disambiguation. | **Status Quo Bias** — failure mode #1 in `homegrown/sense-making/references/sensemaking.md`: *"Defending an established structure, definition, or framework because it's documented and familiar — not because the evidence supports it."* | The original metaloop-ladder inquiry's `_branch.md` Goal section listed Memory as one of 8 axes; prior `docarchive/sensemaking.md` line 38 (anchor K2) inherits the term. | Contributing |
| **2. Anchoring** | The multi-axial frame became the dominant anchor in Phase 1. K1 + K2 introduce the frame in the first 5 lines of Phase 1; the frame organized all subsequent reasoning. | **Anchor Dominance** — failure mode #3: *"One very strong anchor — a constraint, a principle, a key insight — is doing all the work. Every ambiguity resolves toward it."* | Prior `docarchive/sensemaking.md` lines 37-38 (K1 + K2). The frame appears 9+ times throughout the prior sensemaking; Ambiguity #6 (lines 266-282) resolved AROUND the frame (axis-vs-Navigator), not THROUGH it (what is Memory?). | Contributing |
| **3. Categorization** | Memory was placed into the "axis" category at the framing moment. Once categorized as an axis-name, the questions Sensemaking asked about Memory were category-questions ("is this axis a separate dimension?"), not concept-questions ("what does this term mean across its uses?"). | Manifestation of links 1+2 combined; no clean spec-name match. | K7 (line 43) explicitly labels: *"Memory is a hidden axis the user did NOT name."* | Contributing |
| **4. Frame-scope capture** ★ | The frame ("meta-loop ladder") implicitly defined Memory's meaning by SCOPE — what the meta-loop tracks across runs. Per-inquiry artifacts (md files like `_branch.md` / `_state.md` / `finding.md`, which `/MVL` and `/MVL+` runners write at every level project-wide) were OUTSIDE the frame's scope and never entered consideration. Even if the load-bearing concept test had fired on Memory, it would likely have answered "one structural distinction" within the frame's scope. | **Perspective Blindness** — failure mode #4: *"The perspectives checked all agree. Nothing produced discomfort or surprise. The model is unchallenged — not because it's robust, but because only friendly perspectives were consulted."* — applied specifically to the FRAME-EXIT perspective (the perspective that asks "what does this term mean OUTSIDE this inquiry's frame?"). The 7 perspectives Sensemaking actually checked all operate within the meta-loop frame. | Definitional/Consistency check (line 115 of prior `docarchive/sensemaking.md`) equates Memory with `_meta_state.md` only — never considers per-inquiry md files. | **PRIMARY** |
| **5. Procedural enumeration** | The load-bearing concept test enumerated 4 concepts to test: "5 cognitive roles," "Autonomy ladder," "Movement direction," "Loop count + chaining." Memory was NOT on this list. The implicit criterion for "what's a load-bearing concept worth testing" was: terms being committed/coined/fidelity-checked at this phase. Memory was treated as a frame-scaffold element, not a commitment, so it didn't make the list. | **Premature Stabilization manifestation** — failure mode #2: load-bearing concept test sub-aspects weren't applied to all applicable concepts. | Prior `docarchive/sensemaking.md` lines 286-323 enumerate the 4 tested concepts; Memory is absent. | Contributing |

★ **Why link 4 is PRIMARY:** the user's correction succeeded by FRAME-EXIT (asking *"we have md files no?"* — bringing in evidence the frame had excluded). This is direct external evidence that frame-scope is the binding constraint. Breaking link 4 alone would have caught the failure even if links 1, 2, 5 still fired (the frame-exit check would have surfaced project-wide artifacts regardless of inheritance, anchoring, or test enumeration scope). Confidence: MEDIUM-HIGH (chain anchored externally + user's frame-exit success as direct evidence; N=1 limits to MEDIUM-HIGH not HIGH).

### 2. Why the test "didn't fire" is the wrong framing

The natural way to describe the failure is "the proxy-vs-structural sub-test wasn't applied to Memory." But this drill-down reveals the framing is misleading. The test's enumeration excluded Memory (link 5 — procedural symptom). But even if the loop had been forced to apply the test to Memory, the test would likely have answered "one structural distinction" — because the frame had already settled what Memory refers to (meta-loop memory, specifically `_meta_state.md`).

The test's effectiveness depends on having a frame-independent view of the term. The loop didn't have one. The user did. The user's mental model wasn't bound by the inquiry's frame because the user was OUTSIDE the inquiry — operating at L0 of the meta-loop ladder, holding project-wide visibility.

So the deeper failure isn't "the test didn't run"; it's "the frame had pre-defined the answer the test would give." Fixing the test's enumeration scope (link 5) without fixing the frame's scope (link 4) would close the procedural gap but leave the substantive gap.

### 3. Maintenance evaluation — what closes which link?

The prior loop_diagnose finding committed 6 maintenance candidates (M1 ACTIONABLE; M2-M3 DEFERRED with revival; M4-M6 ACTIONABLE). This drill-down's chain analysis evaluates which links each candidate covers:

| Candidate | Description (from prior diagnostic) | Link covered |
|---|---|---|
| M1 | Pre-CONCLUDE term-ambiguity checklist with operational trigger criteria | **Link 5** — pre-publish scan catches the procedural manifestation |
| M2 | Sensemaking spec clarification (DEFERRED; failure-mode framing needs reconsideration when revived) | Link 5 — clarifies test application |
| M3 | Critique spec extension to probe terms (DEFERRED) | Link 5 — would catch term-ambiguity if Critique probes terms |
| M4 | Recurrence audit | Diagnostic — informs revival of M2/M3 + this finding's M7 |
| M5 | Innovation baseline-row scrutiny rule | **Partial link 5 + partial link 4** — mechanism-trace requirement forces some baseline attention |
| M6 | Project glossary | **Link 1** — helps with term-inheritance disambiguation |

**Gap surfaced:**
- **Link 2 (Anchor Dominance)** — no specific candidate. Covered by general Sensemaking spec corrective.
- **Link 4 (PRIMARY)** — uncovered by existing M1-M6. M5's partial coverage via mechanism-trace doesn't address the frame-scope phenomenon directly.

### 4. The new candidate M7 (DEFERRED)

**M7 — Frame-exit perspective check.**

- **What changes:** add a perspective entry to `homegrown/sense-making/references/sensemaking.md` Phase 2 perspective list. Wording (committed shape):

  > **Frame-exit** — what would this term/concept mean if you stepped out of the inquiry's frame? Specifically, for any term inherited from prior findings or framing-level commitments, ask: *"what does this term refer to project-wide, regardless of this inquiry's frame? Does the project have artifacts the frame's scope excludes?"* Failing to apply this perspective when the inquiry's frame might pre-define inherited-term meanings is an instance of Perspective Blindness applied to the frame-exit axis.

- **Caveat from Critique:** M7's reliability depends on the loop recognizing "inherited terms" — a recognition step that is itself fallible. M7's evaluation gate must monitor whether the recognition step fires reliably in practice.

- **Risk class:** LOW-MEDIUM. Additive perspective (consistent with the Sensemaking spec's existing pattern of perspective descriptions). Risk: bloat / noise across all Sensemaking applications if the perspective fires on terms that don't need it.

- **Expected benefit:** catches frame-scope capture (link 4) — the primary causal mechanism. The user's frame-exit move would become routine in Sensemaking.

- **Evaluation gate:** observable — over the next 5 Sensemaking outputs after M7 ships, does the frame-exit perspective produce useful new anchors? Calibration: 0/5 → too narrow; 1-3/5 → working; 5/5 on noise → too broad.

- **Branch experiment:** NO — small spec edit if revived.

- **Status: DEFERRED** per `homegrown/protocols/loop_diagnose.md` Step 5 ("do not propose broad fundamentals rewrites from one weak correction chain").

- **Revival trigger:** condition-bound — M4 audit (from prior loop_diagnose) produces ≥3 instances of frame-scope-capture-like patterns across distinct inquiries. Specifically: instances where a Sensemaking inquiry inherited a term from a prior finding, the term had multiple project-wide meanings, and the inquiry's frame settled the term's meaning to one without testing the others.

- **Addresses:** **link 4 PRIMARY**.

- **Coexists with:** M1 (downstream symptom catch); M2/M3 (procedural test improvements); M5 (procedural mechanism-trace); M6 (term inheritance via glossary).

### 5. Layered maintenance picture (with M7 if revived)

```
Sensemaking Phase 2  →  M7 frame-exit perspective       (catches link 4 — PRIMARY)
                         |
Sensemaking Phase 3  →  M2 spec clarification           (catches link 5)
                         |
Innovation Phase 3  →  M5 baseline-row scrutiny         (partial link 4 + link 5)
                         |
Critique Phase 2  →  M3 spec extension                  (catches link 5 from a different angle)
                         |
CONCLUDE Step 2  →  M1 pre-publish checklist            (downstream safety-net; catches link 5 manifestation)
```

Each layer catches what slipped through the prior. M7 + M1 are the highest-leverage points (M7 upstream at the primary link; M1 downstream as last-chance catch).

### 6. Sharp answer (the user-facing one paragraph)

**Why did the application miss the test? PRIMARY REASON: Sensemaking checked every perspective EXCEPT the one the user used.** Sensemaking's Phase 2 ran 7 perspectives (Technical, Human, Strategic, Risk, Resource, Definitional, Phase/Calibration-State) — all operating WITHIN the meta-loop frame. The frame implicitly scoped "Memory" to mean what the meta-loop tracks (specifically the `_meta_state.md` artifact), excluding per-inquiry md files (`_branch.md`/`_state.md`/`finding.md`, which are project-wide artifacts independent of the meta-loop). The user's correction came from **frame-exit** — stepping outside the meta-loop and asking *"what does Memory mean PROJECT-WIDE? we have md files no?"* The Sensemaking spec's Perspective Blindness corrective (*"Which perspective would be most uncomfortable to check?"*) is exactly the move that would have caught this — frame-exit is uncomfortable because it requires temporarily abandoning the inquiry's organizing frame. The corrective wasn't applied with frame-exit as the candidate. The other 4 chain links (Status Quo Bias from inheriting "Memory" as already-vetted; Anchor Dominance from the multi-axial frame; categorization-into-axis; the load-bearing concept test enumerating commitments-not-scaffold-elements) all contributed but are downstream of link 4. M1 (the prior diagnostic's pre-CONCLUDE checklist) catches the symptom at publication; it does NOT close the primary cause. A new candidate M7 — add a frame-exit perspective to Sensemaking Phase 2 — addresses the primary cause but is DEFERRED pending M4 audit confirmation.

---

## Next Actions

### MUST

- **What:** When applying the prior loop_diagnose's M1 (pre-CONCLUDE checklist), document explicitly that M1 closes the procedural symptom (link 5) and is a downstream safety-net — it does not close the primary mechanism (link 4).
  **Who:** future small inquiry that ships M1 to `homegrown/protocols/conclude.md`.
  **Gate:** observable — when M1 ships, the conclude.md commit message references this finding and notes "M1 is a downstream safety-net for procedural symptoms; primary mechanism (frame-scope capture) addressed by deferred M7 pending audit."
  **Why:** prevents the loop from claiming M1 closes the primary cause; preserves the deferred maintenance picture.

### COULD

- **What:** Add the M7 candidate's full operational detail (committed shape above) to the maintenance candidates index that the prior loop_diagnose finding maintains.
  **Who:** future small inquiry or direct edit to the prior loop_diagnose finding's Next Actions / DEFERRED list.
  **Gate:** condition-bound — whenever the user revisits the prior loop_diagnose's deferred candidates list.
  **Why:** keeps M7 visible alongside M2 + M3 in the deferred pool with a shared revival trigger (M4 audit ≥3 instances).

### DEFERRED

- **What:** M7 — add the frame-exit perspective to `homegrown/sense-making/references/sensemaking.md` Phase 2.
  **Gate:** revival — M4 audit produces ≥3 instances of frame-scope-capture-like patterns across distinct inquiries. Specifically: instances where a Sensemaking inquiry inherited a term from a prior finding, the term had multiple project-wide meanings, and the inquiry's frame settled the term's meaning to one without testing the others.
  **Why if revived:** addresses link 4 (PRIMARY) of the causal chain; closes the catch-point that the user's frame-exit move filled in for.

### Research Frontier

- **What:** Project-wide-visibility transfer at higher meta-loop levels.
  **Why surface now:** at L0 of the meta-loop ladder, the human is the meta-loop runner with project-wide visibility. The user caught the L0 Memory failure because their view was structurally outside the inquiry's frame. As the meta-loop ladder graduates roles (Navigator → Selector → Runner → Multi-head + Evaluator → Goal-formation per the prior 9-axis frame), the project-wide-visibility role currently held by the human at L0 needs explicit transfer — otherwise frame-scope capture recurs at every level where the system operates inside a frame without a project-wide perspective. Whether the 9-axis frame should grow a 10th "project-wide-visibility" axis is a separate inquiry, not committed here.
  **Next step if pursued:** a new MVL+ inquiry framing the question as "should the meta-loop ladder include a project-wide-visibility axis?", drawing on this finding's chain attribution and the prior loop_diagnose's 9-axis frame.

---

## Diagnostic Verdict

**Overall: ACTIONABLE in diagnosis; DEFERRED in primary maintenance per Step 5.**

- **Best-supported diagnosis:** primary causal mechanism is link 4 of a 5-link chain inside Sensemaking — frame-scope capture / Perspective Blindness on frame-exit perspective. The frame ("meta-loop ladder") implicitly settled Memory's meaning by scope (meta-loop-only), excluding per-inquiry md files. Even if the load-bearing concept test had fired on Memory, it would likely have answered "one structural distinction" within the frame's scope. The user's correction succeeded by frame-exit. **Confidence: MEDIUM-HIGH** (chain is well-anchored in spec-text + docarchive lines + the user's frame-exit success provides direct external evidence; N=1 limits to MEDIUM-HIGH not HIGH).

- **Strongest maintenance candidate:** M7 (new) — addresses primary; DEFERRED. From existing M1-M6: M1 retains value as downstream safety-net but does NOT close the primary mechanism.

- **Main uncertainty:** whether the chain decomposition (5 links) is the right granularity or whether alternatives (3-link or 7-link) better describe the mechanism. Resolved by M4 audit.

- **Recommended next step:** (a) launch the M4 audit (already an action from the prior loop_diagnose) — this is the gating dependency for elevating M2 + M3 + M7 to ACTIONABLE; (b) keep M7 in the deferred pool alongside M2 + M3 with the same audit revival trigger; (c) preserve M1 + M5 as the actionable safety-net layers; (d) flag the strategic implication (project-wide-visibility transfer) as a research frontier.

---

## Reasoning

### Why the chain attribution rather than single-cause

The first instinct (per the prior loop_diagnose's H1 hypothesis) was: *"Sensemaking applied its load-bearing concept test shallowly to Memory."* This is correct but underspecifies the WHY. A drill-down reveals it's NOT a single act of shallow application; it's a 5-link chain where each link contributes and the primary link is upstream of where the test would have run.

Single-cause attribution would say: "the test wasn't applied; fix the test's application." But fixing the application without fixing the frame's scope (link 4) leaves the substantive gap — the test, even if applied, would likely answer wrong within the frame.

The chain attribution honors the actual mechanism's structure. Each link is independently named (with existing failure-mode references) and independently evidenced. Primary attribution to link 4 is justified by direct external evidence (the user's frame-exit success).

### Why no new failure mode is coined

"Frame-scope capture" is descriptively useful as shorthand. But promoting it to a new failure mode in the Sensemaking spec from N=1 evidence violates `homegrown/protocols/loop_diagnose.md` Step 5: *"Do not propose broad fundamentals rewrites from one weak correction chain."* The existing Perspective Blindness failure mode covers link 4 when applied with frame-exit as the candidate uncomfortable perspective. The corrective ("which perspective would be most uncomfortable to check?") is sufficient if applied.

If M4 audit produces ≥3 instances and the broader pattern holds, then promoting "frame-scope capture" to a named failure mode (or sharpening Perspective Blindness's corrective with explicit frame-exit examples) becomes a real maintenance candidate. Until then, "frame-scope capture" stays descriptive shorthand.

### Why M1 (the prior diagnostic's strongest candidate) doesn't close the primary cause

M1 is a pre-CONCLUDE checklist. It runs at publication time. The primary cause (link 4 — frame-scope capture) happens during Sensemaking — well before publication. M1 catches the SYMPTOM (inconsistent cell values across rows of a table); it cannot challenge the FRAME'S SCOPE that produced those values.

This is not a knock on M1 — it's a layered-maintenance observation. M1's catch-point is correct for what it does (downstream safety-net). M7's catch-point is correct for what it does (upstream primary catch). They are complementary, not competing.

### Why the strategic implication is a Research Frontier not an Action

The implication ("project-wide-visibility needs explicit transfer as the meta-loop ladder graduates") is plausible from this finding's analysis but speculative as a project-wide architectural claim. It requires:
- Empirical observation of frame-scope capture at higher levels (currently at L0 of the meta-loop ladder; no L2+ data exists yet).
- A separate inquiry framing the question and resolving whether the 9-axis frame needs a 10th axis.

Surfacing it as a Research Frontier respects the scope of this drill-down (causal mechanism for the SPECIFIC Memory failure) while preserving the insight for future investigation. Per loop_diagnose Step 5: do not commit broad architectural claims from N=1.

### Self-reference handling

This drill-down is a Sensemaking analysis (this finding's S phase) of a Sensemaking analysis (the prior loop_diagnose's S phase) of a Sensemaking analysis (the original metaloop-ladder's S phase). Three meta-levels deep. Self-reference collapse risk is acute.

Mitigation:
- **External anchoring:** every chain link cites either spec text from `homegrown/sense-making/references/sensemaking.md` (external to the inquiry chain) or specific docarchive line numbers (concrete artifact text, not derived from this drill-down's reasoning).
- **User's frame-exit success as direct evidence:** the user's correction is OUTSIDE the loop's reasoning. The fact that frame-exit worked is observable evidence the frame is the binding constraint.
- **Confidence downgrade:** primary attribution starts at HIGH (per Sensemaking) but Critique downgraded to MEDIUM-HIGH reflecting N=1 limit. Refused trivial clean SURVIVE.
- **Step 5 restraint:** M7 is DEFERRED, not committed.

Self-reference collapse: not observed.

---

## Open Questions

### Monitoring

- **Will the chain attribution stand up to a second instance?** Observable when M4 audit (from prior loop_diagnose) finds another inquiry with similar pattern. If the second instance fits the 5-link structure cleanly, confidence on link 4 PRIMARY can rise from MEDIUM-HIGH toward HIGH. If the second instance has a different mechanism, the chain attribution may need refining.

- **Will M1's checklist usefully catch frame-scope-capture symptoms (link 5 manifestations)?** Observable over the next 5 CONCLUDE invocations after M1 ships. If 0/5 fire, M1's trigger criteria are too narrow; if M1 fires but missed something the user catches post-publication, that's evidence that link 4 is uncovered and M7 revival is more urgent.

### Blocked

- **M7 elevation from DEFERRED to ACTIONABLE.** Cannot ship until M4 audit produces ≥3 instances.

- **Whether the chain decomposition is the right granularity.** Cannot decide without N>1 evidence; same audit dependency.

### Research Frontiers

- **Project-wide-visibility transfer at higher meta-loop levels.** Surfaced in Section 4. Out of scope for this drill-down; requires a separate inquiry.

- **Whether the recognition step in M7 ("for any term inherited from prior findings") is itself reliably operational.** M7 depends on the loop recognizing inherited terms; this recognition can fail. Whether the recognition needs its own catch-point is a frontier question if M7 ships.

### Refinement Triggers

- **Confidence label on link 4 PRIMARY** re-opens after the M4 audit completes. ≥3 instances of similar pattern → upgrade to HIGH; <3 instances → keep at MEDIUM-HIGH or downgrade.

- **The 5-link chain structure** re-opens if a second instance shows a different chain shape (different number of links, different ordering, different failure-mode mappings).

- **Whether to elevate "frame-scope capture" to a named failure mode** re-opens after audit. Currently descriptive shorthand only.

---

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
u said 

  Sensemaking, primarily. The discipline whose explicit charter is ambiguity collapse failed to disambiguate "Memory" beyond its     
  scope (axis-vs-Navigator-only). The proxy-vs-structural sub-test that exists in homegrown/sense-making/references/sensemaking.md
  Phase 3 — the test designed exactly for "is this label one structural distinction or several lumped?" — was not applied to Memory  
  specifically. The spec contains the right test; the application missed it.

why application missed it ? what was primary reason ?
```

</details>
