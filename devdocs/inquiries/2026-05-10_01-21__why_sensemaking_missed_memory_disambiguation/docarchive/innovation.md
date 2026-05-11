# Innovation: Why Sensemaking application missed Memory disambiguation

## User Input

Source: `/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-10_01-21__why_sensemaking_missed_memory_disambiguation/_branch.md`

> **Question:** What primary causal mechanism prevented Sensemaking's load-bearing concept test from firing on Memory in the prior MVL+ run?
>
> **Goal:** Sharp answer + chain attribution + maintenance evaluation + diagnostic verdict.

This is a drill-down inquiry. Decomposition committed: P1 (5-link chain hub), P2 (maintenance evaluation), P3 (sharp answer), P4 (strategic implication), P5 (diagnostic verdict). Per Decomposition's note: minimum mechanism coverage suffices on the new (DEFERRED) candidate; main work is committing the pieces.

---

## Seed and Direction

**Seed type: Question / Failure.** Why did the test miss? + the prior run's L0 Memory failure.

**Intuition direction:**
- *Context:* a 5-link causal chain has been stabilized; the primary link is link 4 (frame-scope capture / Perspective Blindness on frame-exit). The new candidate addresses link 4. Maintenance restraint applies (per loop_diagnose Step 5).
- *Valuation:* sharpness over breadth. The user's question deserves a one-paragraph answer; the supporting analysis serves the answer, not the other way around.
- *Motivation:* close the catch-point (provisionally, via deferred candidate) without overreaching.

---

## Phase 2 — Generate (focused mechanism work on new-candidate-form)

The decomposition said minimum coverage suffices. I apply 2 mechanisms (1 framer + 1 generator) to test whether the new (DEFERRED) candidate's form — "add a frame-exit perspective check to Sensemaking Phase 2" — is the right shape.

### Mechanism 1 — Inversion (Framer): what if we DON'T add a perspective?

**Inversion 1.1 — component:** instead of adding a frame-exit perspective, REMOVE the framing-anchor that's too strong. If K1+K2 ("multi-axial frame") were not introduced as the dominant anchor in Phase 1, would link 4 still fire? Counter: removing strong anchors weakens Sensemaking generally; the multi-axial frame was load-bearing for the inquiry. Removing it would harm more than help.

**Inversion 1.2 — system:** instead of adding within-Sensemaking, add an OUTSIDE-of-Sensemaking check (run Sensemaking once frame-internally, once frame-externally, compare). Counter: doubles the cost; the user's correction shows that ONE frame-exit perspective inside Sensemaking would have caught it.

**Inversion 1.3 — root:** the issue isn't in Sensemaking at all — it's that the inquiry's _branch.md (which the loop builder writes) baked in the 8-axis frame from start. Maintenance: have the runner (MVL+) generate _branch.md by querying the user about TERMS, not just QUESTION. Counter: this changes _branch.md construction substantially; ARTSY but adds friction. Out of scope per Step 5.

**Inversion result:** The "add frame-exit perspective" form survives. The component-level invert (remove frame anchor) and root-level invert (rewrite _branch.md) both have higher cost without corresponding benefit. Frame-exit perspective at Sensemaking Phase 2 is the cheapest viable form.

### Mechanism 2 — Domain Transfer (Generator): how do other diagnostic systems handle frame-scope?

**Transfer 2.1 — generic: software design reviews.** Code reviewers read code AND the system's CONTEXT (the surrounding system, calling code, etc.). The reviewer's job isn't just "is this function correct?" but "is this function correct in the broader system?" Transfer to Sensemaking: a frame-exit perspective is the "step out of the inquiry to check the surrounding project state" perspective. Confirms the candidate's form.

**Transfer 2.2 — focused: medical differential diagnosis.** Doctors don't lock onto one diagnosis; they keep alternatives open until evidence rules them out. Transfer: Sensemaking should keep "what could this term ALSO mean?" open until evidence settles. Frame-exit perspective is one such alternative-keeping move. Confirms.

**Transfer 2.3 — contrarian: scientific peer review (blind reviewer).** A blind reviewer doesn't know the paper's frame; their fresh perspective catches what the authors missed. Transfer: Sensemaking could simulate a "blind reviewer" perspective — what would someone unfamiliar with this inquiry's frame ask? Confirms framing of the new candidate.

**Domain Transfer result:** All 3 transfers confirm "frame-exit perspective" is the right form, anchored in well-established diagnostic patterns.

---

## Phase 3 — Test (5-test cycle on the new candidate)

| Test | Result |
|---|---|
| **Novelty** | Partial — frame-exit perspective is a recognizable pattern; the novelty is its explicit addition to Sensemaking's Phase 2. |
| **Scrutiny survival** | Strong — survives inversion (removing the frame-anchor is worse) and survives domain-transfer confirmation from 3 fields. |
| **Fertility** | Strong — opens the question of whether a frame-exit perspective should be domain-tagged or general. |
| **Actionability** | Strong — concrete addition to one file (`homegrown/sense-making/references/sensemaking.md` Phase 2 perspective list). |
| **Mechanism independence** | Strong — Inversion + Domain Transfer both produce the same candidate form. |

**Disposition: ACTIONABLE in form; DEFERRED in commitment** per loop_diagnose Step 5. Revival trigger: M4 audit produces ≥3 instances of frame-scope-capture-like patterns.

---

## P1 — 5-link causal chain (committed)

| Link | Description | Failure-mode mapping | Evidence | Rank |
|---|---|---|---|---|
| **1. Inheritance** | "Memory" was inherited from prior findings (the 2026-05-10 finding listed it as one of the architectural axes); the inquiry treated it as established vocabulary. | **Status Quo Bias** (per `homegrown/sense-making/references/sensemaking.md` failure mode #1: *"Defending an established structure, definition, or framework because it's documented and familiar — not because the evidence supports it"*). | `_branch.md` Goal section listed Memory as one of 8 axes; prior `docarchive/sensemaking.md` line 38 (K2) inherits the term. | Contributing |
| **2. Anchoring** | The multi-axial frame became the dominant anchor in Phase 1, organizing all subsequent reasoning. K1 + K2 (in the prior sensemaking) introduce the frame in the first 5 lines. | **Anchor Dominance** (failure mode #3: *"One very strong anchor — a constraint, a principle, a key insight — is doing all the work. Every ambiguity resolves toward it"*). | Prior `docarchive/sensemaking.md` lines 37-38 (K1 + K2). The frame appears 9+ times throughout the prior sensemaking; Ambiguity #6 (lines 266-282) resolved AROUND the frame. | Contributing |
| **3. Categorization** | Memory was placed into the "axis" category at the framing moment. Once categorized as an axis-name, the questions Sensemaking asked about Memory were category-questions ("is this axis a separate dimension?"), not concept-questions ("what does this term mean across its uses?"). | Manifestation of links 1+2; no clean spec-name match. | K7 (line 43) explicitly labels: *"Memory is a hidden axis the user did NOT name."* | Contributing |
| **4. Frame-scope capture** ★ | The frame ("meta-loop ladder") implicitly defined Memory's meaning by SCOPE — what the meta-loop tracks across runs. Per-inquiry artifacts (md files like `_branch.md`/`_state.md`/`finding.md` which `/MVL` and `/MVL+` write at every level) were OUTSIDE the frame's scope and never entered consideration. Even if the load-bearing concept test had fired on Memory, it would likely have answered "one structural distinction" within the frame's scope. | **Perspective Blindness** (failure mode #4: *"The perspectives checked all agree. Nothing produced discomfort or surprise. The model is unchallenged — not because it's robust, but because only friendly perspectives were consulted"*) — applied specifically to the FRAME-EXIT perspective (the perspective that asks "what does this term mean OUTSIDE this inquiry's frame?"). | Definitional/Consistency check (line 115) equates Memory with `_meta_state.md` only — never considers per-inquiry md files. The 7 perspectives checked in Phase 2 (Technical, Human, Strategic, Risk, Resource, Definitional, Phase/Calibration-State) all operate WITHIN the meta-loop frame. The frame-exit perspective wasn't checked. | **PRIMARY** |
| **5. Procedural enumeration** | The load-bearing concept test enumerated 4 concepts to test: "5 cognitive roles," "Autonomy ladder," "Movement direction," "Loop count + chaining." Memory was NOT on this list. The implicit criterion for "what's a load-bearing concept worth testing" was: terms being committed/coined/fidelity-checked at this phase. Memory was treated as a frame-scaffold element, not a commitment. | **Premature Stabilization manifestation** (failure mode #2): the load-bearing concept test sub-aspects weren't applied to all applicable concepts; Memory's exclusion from the test list is the procedural symptom. | Prior `docarchive/sensemaking.md` lines 286-323 enumerate the 4 tested concepts; Memory is absent from the list. | Contributing |

**★ Link 4 is PRIMARY** because: (a) the user's correction succeeded by FRAME-EXIT (asking "we have md files no?" — bringing in evidence the frame had excluded), providing direct evidence that frame-scope is the binding constraint; (b) breaking link 4 alone would have caught the failure even if links 1, 2, 5 still fired (the frame-exit check would have surfaced project-wide artifacts regardless of inheritance, anchoring, or test enumeration scope).

---

## P2 — Maintenance evaluation (committed)

### Coverage matrix: existing M1-M6 vs chain links

| Candidate | Description (from prior loop_diagnose finding) | Link covered |
|---|---|---|
| M1 | Pre-CONCLUDE term-ambiguity checklist with operational trigger criteria | **Link 5** (procedural symptom — pre-publish scan catches the manifestation) |
| M2 | Sensemaking spec clarification (DEFERRED) | Link 5 (clarifies application of test) |
| M3 | Critique spec extension (DEFERRED) | Link 5 (would catch if Critique probes terms) |
| M4 | Recurrence audit | **Diagnostic, not link-cover** — informs revival of M2/M3 + this inquiry's deferred candidate (M7) |
| M5 | Innovation baseline-row scrutiny rule | **Partial link 5** + partial link 4 (mechanism-trace forces some baseline attention) |
| M6 | Project glossary | **Link 1** (helps with term-inheritance disambiguation) |

**Gaps:**
- **Link 2 (Anchor Dominance)** — no specific candidate; covered by general Sensemaking spec corrective.
- **Link 4 (PRIMARY)** — UNCOVERED by existing M1-M6. M5 partially helps via mechanism-trace requirement but doesn't address the frame-scope phenomenon directly.

### New candidate (DEFERRED): M7 — Frame-exit perspective check

- **What changes:** add a perspective entry to `homegrown/sense-making/references/sensemaking.md` Phase 2 perspective list. Wording: *"Frame-exit — what would this term/concept mean if you stepped out of the inquiry's frame? Specifically, for any term inherited from prior findings or framing-level commitments, ask: 'what does this term refer to project-wide, regardless of this inquiry's frame? Does the project have artifacts the frame's scope excludes?' Failing to apply this perspective when the inquiry's frame might pre-define inherited-term meanings is an instance of Perspective Blindness applied to the frame-exit axis."*
- **File affected:** `homegrown/sense-making/references/sensemaking.md` Phase 2.
- **Risk class:** LOW-MEDIUM (additive perspective; risk is bloat / noise across all Sensemaking applications).
- **Expected benefit:** catches frame-scope capture (link 4) — the primary causal mechanism. The user's frame-exit move would become routine in Sensemaking.
- **Evaluation gate:** observable — over next 5 Sensemaking outputs, does the frame-exit perspective produce useful new anchors? Calibration: 0/5 → too narrow; 1-3/5 → working; 5/5 on noise → too broad.
- **Branch experiment:** NO — small spec edit if revived.
- **Status: DEFERRED** per `homegrown/protocols/loop_diagnose.md` Step 5 (don't propose broad fundamentals rewrites from N=1).
- **Revival trigger:** condition-bound — M4 audit (from prior loop_diagnose) produces ≥3 instances of frame-scope-capture-like patterns across distinct inquiries. Specifically: instances where a Sensemaking inquiry inherited a term from a prior finding, the term had multiple project-wide meanings, and the inquiry's frame settled the term's meaning to one without testing the others.
- **Addresses:** **link 4 PRIMARY**.
- **Coexists with:** M1 (downstream symptom catch); M2/M3 (procedural test improvements); M5 (procedural mechanism-trace); M6 (term inheritance via glossary).

### Re-evaluation of M1's role

M1 (pre-CONCLUDE checklist) was the highest-convergence candidate from the prior loop_diagnose with 8+ mechanism support. This drill-down's chain analysis reveals M1 closes link 5 (procedural symptom) NOT link 4 (primary). M1 retains value as a **downstream safety-net** — if frame-scope capture happens during Sensemaking and isn't caught by future M7, M1 may still catch the resulting cell-value inconsistency at publication time. The two candidates are complementary, operating at different chain links.

### Layered maintenance picture (with M7 revived if audit confirms)

```
Sensemaking Phase 2  →  M7 frame-exit perspective (catches link 4 primary)
                         |
Sensemaking Phase 3  →  M2 spec clarification (catches link 5)
                         |
Innovation Phase 3  →  M5 baseline-row scrutiny (partial link 4 + link 5)
                         |
Critique Phase 2  →  M3 spec extension (catches link 5 from a different angle)
                         |
CONCLUDE Step 2  →  M1 pre-publish checklist (downstream safety-net; catches link 5 manifestation)
```

Each layer catches what slipped through the prior. M7 + M1 are the two highest-leverage points (M7 upstream at the primary; M1 downstream as last-chance catch).

---

## P3 — Sharp answer paragraph (committed)

> **Why did the application miss it? PRIMARY REASON: Sensemaking checked every perspective EXCEPT the one the user used.** Sensemaking's Phase 2 ran 7 perspectives (Technical, Human, Strategic, Risk, Resource, Definitional, Phase/Calibration-State) — all of them WITHIN the meta-loop frame. The frame implicitly scoped "Memory" to mean what the meta-loop tracks (the `_meta_state.md` artifact), excluding per-inquiry md files. The user's correction came from **frame-exit** — stepping outside the meta-loop and asking "what does Memory mean PROJECT-WIDE? we have md files no?" The Sensemaking spec's Perspective Blindness corrective (*"Which perspective would be most uncomfortable to check?"*) is exactly the move that would have caught this — frame-exit is uncomfortable because it requires temporarily abandoning the inquiry's organizing frame. The corrective wasn't applied with frame-exit as the candidate. The other 4 chain links (Status Quo Bias from inheriting "Memory" as already-vetted; Anchor Dominance from the multi-axial frame; categorization-into-axis; the load-bearing concept test enumerating commitments-not-scaffold-elements) all contributed but are downstream of link 4. M1 (the prior diagnostic's pre-CONCLUDE checklist) catches the symptom at publication; it does NOT close the primary cause. A new candidate (M7 — add frame-exit perspective to Sensemaking Phase 2) addresses the primary cause but is DEFERRED pending M4 audit confirmation, per `homegrown/protocols/loop_diagnose.md` Step 5.

---

## P4 — Strategic implication / Research Frontier (committed)

**Project-wide visibility transfer at higher meta-loop levels.** At L0 of the meta-loop ladder, the human IS the meta-loop runner with project-wide visibility. The user caught the frame-scope capture because they have a view that's structurally OUTSIDE the meta-loop frame (they see the project, not just this inquiry). The AI inside the frame lost that visibility. As the meta-loop ladder graduates roles (Navigator → Selector → Runner → … per the prior 9-axis frame), the project-wide-visibility role currently held by the human at L0 needs explicit transfer — otherwise frame-scope capture recurs at every level where the system operates inside a frame without a project-wide perspective. The 9-axis frame from the prior loop_diagnose finding doesn't include a "project-wide-visibility" axis. Whether it should is a separate inquiry; not committed here. **Research Frontier — surfaced for future investigation.**

---

## P5 — Diagnostic verdict (committed)

**Overall: ACTIONABLE in diagnosis; DEFERRED in primary maintenance per Step 5.**

- **Best-supported diagnosis:** primary causal mechanism is link 4 of a 5-link chain inside Sensemaking — frame-scope capture / Perspective Blindness on frame-exit perspective. The frame ("meta-loop ladder") implicitly settled Memory's meaning by scope (meta-loop-only), excluding per-inquiry md files. Even if the load-bearing concept test had fired on Memory, it would likely have answered "one structural distinction" within the frame's scope. The user's correction succeeded by frame-exit. Confidence: HIGH within Sensemaking failure-mode space; MEDIUM-HIGH on the chain-attribution as the right decomposition.
- **Strongest maintenance candidate:** M7 (new) — DEFERRED. M1 (existing) — ACTIONABLE as downstream safety-net; does NOT close primary cause. M5 (existing) — ACTIONABLE; partial link 4 coverage via mechanism-trace.
- **Main uncertainty:** whether link 4 attribution is over-fit from N=1; whether the chain decomposition (5 links) is the right granularity vs alternatives (3 links: inheritance / frame / procedural; 7 links with finer manifestation steps). Resolved by M4 audit.
- **Recommended next step:** (a) launch M4 audit (already an action from prior loop_diagnose) — this is the gating dependency; (b) keep M7 in the deferred pool with audit revival; (c) preserve M1 + M5 as the actionable safety-net layers; (d) flag the strategic implication (project-wide-visibility transfer) as a research frontier for separate investigation.

---

## Mechanism Coverage Telemetry

- **Generators applied:** 1/4 (Domain Transfer with 3 sub-variations). Exploration covered other generators implicitly via signal-first probing.
- **Framers applied:** 1/3 (Inversion with 3 sub-variations). The decomposition's note allowed minimum coverage on the new-candidate-form; the rest of the work is committing pieces.
- **Convergence:** YES — Inversion 1.1-1.3 and Domain Transfer 2.1-2.3 all confirm the new candidate form (frame-exit perspective in Sensemaking Phase 2).
- **Survivors tested:** 1/1 (the new M7 candidate).
- **Failure modes observed:**
  - Premature evaluation: avoided.
  - Single-mechanism trap: avoided (2 mechanisms applied with internal sub-variations).
  - Early frame lock: avoided.
  - Innovation without grounding: avoided (every output tested + chain-anchored).
  - Mechanism exhaustion: avoided (the candidate survived testing).
  - Survival bias: checked — Inversion 1.3 (root-level) was uncomfortable but tested fairly; survived as DEFERRED-too-disruptive.

**Overall: PROCEED.** Minimum coverage met (per Decomposition's note); all 5 pieces (P1-P5) committed; new candidate M7 form-validated and DEFERRED per Step 5.
