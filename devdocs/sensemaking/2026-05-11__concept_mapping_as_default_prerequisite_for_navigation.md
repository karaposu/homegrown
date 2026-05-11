# Sensemaking: Is concept-mapping the DEFAULT prerequisite for /navigation?

## User Input

```text
u said 

nav_should_be describes a NEW capability (currently absent from the project). Operation: concept-mapping (territory discovery + categorization at progressive resolution). Unit: concepts (topics in the thinking-space). Input: codebase OR a local direction (raw territory). Output: hierarchical concept tree at progressive resolution. Scaling: potentially huge → staged execution required.


but this is what needs to be done as default i think. if there is no mapping then how couuld navigation would work in the first place?
```

The user is challenging the recent finding's framing that concept-mapping is a "new capability." They're claiming it's actually **foundational** — without a map, navigation has no ground to stand on. The challenge implies two things: (a) concept-mapping is a PREREQUISITE not an addition, and (b) it should be the DEFAULT first step.

---

## SV1 — Baseline Understanding

The user's challenge is structurally sharp. The recent finding treated concept-mapping as "additional new capability"; the user is saying "no, it's foundational — navigation depends on it." On first reading, the user is right in spirit (something map-like must exist for navigation to know what's there). But on inspection, the project already HAS a concept-map-like layer (the static warming files at `homegrown/navigation/warmup/`). So the question becomes: is the user demanding that the static layer be replaced with a dynamic concept-mapping operation? Or are they pointing out that the recent finding underweighted the existing layer?

---

## Phase 1 — Cognitive Anchor Extraction

### Constraints (limits, requirements, boundaries)

- **C1: `homegrown/navigation/warmup/` already exists** — three files (`navigator-warmup1.md`, `warmup2.md`, `warmup3.md`) PLUS `navigator-prior-map-overlay.md` and `navigator-refresh.md`. These are read by every Navigator session as part of the warming protocol (per the audit's M1 + Category I).
- **C2: The audit at `devdocs/inquiries/2026-05-10_03-50__navigation_established_audit/finding.md` Category I** says: *"I1: warming is precondition for Navigation [CANONICAL]."* — warming IS NAMED as a precondition. The user's claim "navigation can't work without mapping" rhymes with this canonical position.
- **C3: `/navigation` charter (CANONICAL per audit A1-A3)** = enumeration of typed next-directions; runs after a SIC cycle. The 16-type taxonomy fields (e.g., `Goal`) require some understanding of the inquiry's surrounding context — which comes from the warming reads.
- **C4: The recent finding's "new capability"** label was based on the unit-of-enumeration distinction (concepts vs typed routes). It didn't account for the existing warming files which ARE concept-map-like.
- **C5: Frame-exit applicability.** The recent finding's frame was bounded to per-inquiry navigation organization; it excluded the warming layer from comparison. Per the recently-proposed Sensemaking refactor candidate's Frame-exit Completeness perspective: the inquiry's frame's scope excluded a project-wide referent ("the warming files ARE concept-mapping inputs"). The user's challenge is essentially performing frame-exit on the recent finding.

### Key Insights (non-obvious implications)

- **K1: The warming files ARE concept-mapping outputs — just static / hand-written / not multi-stage.** Read them and you find: codebase orientation, fundamentals, long-run trajectory. That's a concept-map in narrative form. The recent finding called concept-mapping "a NEW capability the project doesn't have" — this was inaccurate. The project HAS a concept-map; it's just static and not generated dynamically.

- **K2: The user's "prerequisite" claim is structurally correct, but the prerequisite is ALREADY MET (by the warming files).** Navigation can't work without SOME map of the territory (the audit's I1 makes this canonical). The current map is the hand-curated warming files. nav_should_be proposes a DYNAMIC, MULTI-STAGE, GENERATED version of the same layer.

- **K3: "Default" reads two ways.** (a) Default first-step in the project workflow — "run concept-mapping before any inquiry." (b) Default mode for /navigation — "when /navigation runs, re-generate the concept map dynamically rather than relying on static warming files." Both readings have merit; they're different operational implications.

- **K4: The recent finding's "NEW capability" framing was a category error caused by frame-scope capture.** The recent finding's frame was per-inquiry navigation; the warming layer was outside that frame's scope. Within the inquiry's frame, concept-mapping looked new. Outside the frame, the project already had a concept-map-shaped layer. This is exactly the frame-exit failure the project has been flagging (memory failure → frame-scope capture → refactor proposal at `devdocs/inquiries/2026-05-10_03-07__refactor_sensemaking_perspective_for_frame_exit/finding.md`). The user just demonstrated it again, on the recent comparison finding.

- **K5: nav_should_be is better framed as "UPGRADE of an existing capability" not "NEW capability."** The existing capability is the warming layer (static, hand-written, single-stage). The upgrade is: dynamic generation, multi-stage progressive resolution, both codebase-wide and local scope, more comprehensive than static curation can be.

- **K6: The user's strong claim ("prerequisite") + the existing partial fulfillment (warming files) → the design question is: should the warming layer be REPLACED with concept-mapping, or AUGMENTED?** Replacing requires concept-mapping to subsume warming entirely. Augmenting adds concept-mapping ALONGSIDE warming (and they can complement). The recent finding's analysis didn't address this choice because it didn't see warming as concept-mapping-relevant.

- **K7: Per loop_diagnose Step 5: still N=1 evidence.** Even with the refined framing, shipping a new protocol from one user note is overreach. The DEFERRED commitment in the recent finding is still appropriate.

### Structural Points (core components, relationships)

- **SP1: Three-layer view of navigation-input information:**
  - **Layer A (existing):** static warming files — hand-curated, narrative-style concept-map. Read at every Navigator session start.
  - **Layer B (proposed):** dynamic concept-mapping — generated, multi-stage, codebase-wide or local. The user's nav_should_be vision.
  - **Layer C (per-run):** the inquiry's own artifacts (`_branch.md` / `_state.md` / `finding.md` / `docarchive/`) — read alongside Layer A by `/navigation`.

- **SP2: The recent finding compared Layer C-organization (recent discussion) vs Layer B (nav_should_be), missing that Layer A already partially does what Layer B proposes.** That's the comparison gap.

- **SP3: Honest re-framing:** concept-mapping is not "new" — it's "Layer A done dynamically and at higher resolution." The user is right that something map-shaped is foundational; they're correctly pointing at Layer A's existence (implicitly).

- **SP4: The "default" question splits into two questions:**
  - **Question D1 — Should Layer A (warming files) be replaced by Layer B (dynamic concept-mapping)?** Implication: every Navigator session would invoke concept-mapping first.
  - **Question D2 — Should Layer B run as a project-default at codebase-discovery time (independent of any /navigation invocation)?** Implication: the project would have a once-or-occasionally-regenerated concept map that all navigation reads.

- **SP5: D2 is the more defensible "default" framing.** D1 (regenerate concept-map every navigation run) is expensive and probably unnecessary — the warming files don't go stale that fast. D2 (have a maintained concept-map artifact the project regenerates episodically) preserves the cost discipline while adding the user's missing dynamism.

### Foundational Principles (assumptions, rules, axioms)

- **P1: External anchoring is mandatory** — cite spec/protocol/audit text. The audit's I1 ("warming is precondition") is the canonical anchor for the user's claim.
- **P2: Frame-exit is a real cognitive operation** (per the user's own recent refactor proposal). The user just applied frame-exit on the recent finding and found that finding's scope excluded the warming layer. This validates the refactor candidate empirically.
- **P3: Step 5 caution still applies** — even with the refined framing, N=1 evidence doesn't justify shipping a new protocol; defer until a manual concept-mapping run produces evidence.
- **P4: Honest re-framing beats sticking with a wrong claim.** The recent finding's "new capability" framing was wrong; the right framing is "upgrade of an existing capability." Acknowledge and revise.

### Meaning-Nodes (central concepts and themes)

- **M1: The warming layer IS a concept-map.** Just static and narrative-form. Naming it explicitly is part of the answer.
- **M2: Concept-mapping is an upgrade-of-existing, not new-capability.** Re-framing the recent finding.
- **M3: Frame-scope capture struck the recent finding.** The user's challenge is the externally-validated catch the prior refactor proposal predicted.
- **M4: "Default" question splits into two operational implications** (regenerate-per-navigation vs project-maintained-artifact).
- **M5: Step 5 caution still applies** — defer protocol-writing pending evidence.

### SV2 — Anchor-Informed Understanding

The user's challenge is structurally sharp and CORRECT IN SPIRIT, but slightly OVERSTATED LITERALLY. Specifically:

- The user is RIGHT that some map of the territory is foundational for navigation. The audit canonically confirms this (I1: warming is precondition).
- The user is RIGHT that the recent finding underweighted this — the recent finding called concept-mapping "new capability" when the project already has a concept-map-like layer (the warming files).
- The user is OVERSTATED literally on "without mapping how could navigation work" — `/navigation` currently works (using static warming files); it would work BETTER with dynamic concept-mapping but isn't blocked on its absence.

The right refinement of the recent finding: **concept-mapping is an UPGRADE of an existing capability (warming files), not a NEW capability.** The user's "default" claim points at this real foundational role.

This is exactly the kind of error the prior refactor proposal (Frame-exit Completeness perspective at `devdocs/inquiries/2026-05-10_03-07__refactor_sensemaking_perspective_for_frame_exit/finding.md`) was designed to catch — and the user just caught it manually. Validates the refactor candidate empirically (a second instance of frame-scope capture in a recent finding).

---

## Phase 2 — Perspective Checking

### Technical / Logical

- **C-T1: The warming files' content IS concept-map-shaped.** Read `homegrown/navigation/warmup/navigator-warmup1.md`: it orients you to the codebase. `warmup2.md`: fundamentals. `warmup3.md`: long-run trajectory. These are concept-cluster narratives. Not as structured as nav_should_be's vision, but the same INFORMATION TYPE.
- **C-T2: nav_should_be's vision is a higher-resolution / dynamic version of the same information type.** Where warming files give 3 narrative-style maps, nav_should_be proposes ~200 nodes at progressive stages. Same information type, different shape and freshness.

### Human / User

- **C-H1: The user just performed frame-exit on the recent finding.** They saw that the recent finding's scope excluded an obvious project-wide referent (warming files). The user is OUTSIDE the recent finding's frame and brought in evidence the frame excluded. Same pattern as their original Memory correction.
- **C-H2: The user's "default" framing has operational weight — they're asking how this fits into the project's workflow.** The right answer makes the workflow concrete.

### Strategic / Long-term

- **C-S1: Re-framing concept-mapping as "upgrade-of-warming" creates a clean evolution path.** Phase 1: static warming files (today). Phase 2: lightweight concept-mapping protocol that regenerates a richer map; warming files cite or include it. Phase 3: full multi-stage concept-mapping with progressive resolution.
- **C-S2: At higher meta-loop levels (per `devdocs/inquiries/2026-05-09_18-23__metaloop_autonomy_ladder_and_open_design_questions/finding.md`), automated Navigator needs a richer map than static warming.** Concept-mapping becomes load-bearing at L2+. Today's static layer is L0/L1 adequate; L2+ needs dynamic.

### Risk / Failure

- **C-R1: If concept-mapping runs as default at every /navigation invocation (Question D1 framing), cost is unaffordable.** Each /navigation invocation already costs a fresh isolated session; adding concept-mapping regeneration would double the cost. Reject D1.
- **C-R2: If concept-mapping runs once per project (or episodically), produces a maintained artifact, and the warming files reference it (Question D2 framing), cost is amortized.** This is the right default.
- **C-R3: The Frame-scope-capture failure that the user caught (recent finding said "new capability"; actually was "upgrade") is the SECOND instance of the same failure pattern in recent project work (after the Memory failure).** This is N=2 evidence supporting the refactor candidate. Step 5 audit-revival threshold approaching.

### Resource / Feasibility

- **C-F1: Static warming files are cheap; dynamic concept-mapping is expensive.** The cost asymmetry argues for D2 (occasional generation, maintained artifact, warming files reference it) not D1 (regenerate every navigation).
- **C-F2: A lightweight manual concept-mapping run is cheap.** The user can do one on the codebase as evidence; takes one focused session.

### Definitional / Internal Consistency

- Tested: does claiming "warming files ARE concept-map" contradict the recent finding's "NEW capability" framing? **YES** — and this contradiction is the user's correction. The recent finding was wrong; the right framing is upgrade-of-existing.
- Tested: does the refined framing (upgrade vs new) change the recommendation to ship the new protocol? **No** — Step 5 caution still applies. Refined framing changes the LABEL and the EVOLUTION-PATH framing; doesn't change the immediate action (still defer protocol-writing pending evidence).
- New anchor: **C-D1:** the recent finding's "new capability" claim was a frame-scope-capture instance. The refined framing acknowledges this and corrects it.

### Definitional / Frame-exit Completeness *(applying the recently-proposed Sensemaking refactor candidate)*

This is the second instance of frame-scope capture in recent work. Gating predicate fires (inherited multi-value terms — "navigation," "concept," "warming," "mapping" — across organizing structures).

Frame-exit check: does the project have artifacts that the recent finding's frame excluded?

- **`homegrown/navigation/warmup/*` — YES, excluded.** The recent finding compared concept-mapping (nav_should_be) vs per-inquiry navigation (recent discussion). It did NOT inventory whether the project already had concept-map-like artifacts elsewhere. Warming files were OUTSIDE the comparison frame; they are inside the project's actual map-shaped inventory.
- **`homegrown/protocols/navigation_context_intake.md` — may also have map-like content.** Need to verify (but Sensemaking shouldn't burn budget on this; flag for follow-up).
- **`homegrown/protocols/multi_resolution_navigation.md`'s `_frontier.md` — also map-like.** Already discussed in the prior finding.

So the frame-exit check confirms: the recent finding had a frame-scope-capture failure. The user's challenge is the externally-validated catch.

### Phase / Calibration-State

- **C-P1: At L0/L1 of meta-loop ladder (current), static warming + lightweight upgrade suffices.** Don't ship dynamic concept-mapping infrastructure prematurely.
- **C-P2: At L2+, dynamic concept-mapping becomes load-bearing.** Build now (lightweight); scale later (full protocol).

### SV3 — Multi-Perspective Understanding

The user's challenge is a **second-instance frame-scope-capture catch**, validating both the original Memory correction AND the proposed Frame-exit Completeness refactor candidate. The user manually performed the frame-exit perspective on the recent finding and surfaced an artifact (warming files) the recent finding's frame had excluded.

The right re-framing:

1. **Concept-mapping is an UPGRADE of an existing capability (warming layer), not a NEW capability.** The recent finding said "new"; correction: "upgrade."

2. **The user's "prerequisite" intuition is canonically supported** — the audit's I1 says "warming is precondition for Navigation." The user is essentially saying "and the warming should be richer / dynamic / multi-stage." That's the same statement at higher resolution.

3. **"Default" splits operationally into two questions:**
   - D1: Should /navigation regenerate concept-map on every invocation? **No** — too expensive.
   - D2: Should the project maintain a richer concept-map artifact (regenerated episodically), and have warming files reference it? **Yes** — this is the right default.

4. **Step 5 caution still applies** — defer protocol-writing pending one manual concept-mapping run as evidence.

5. **This is N=2 evidence for the Frame-exit Completeness refactor candidate.** Memory failure was instance 1; this comparison-finding's "new capability" mis-framing is instance 2. The audit threshold (≥3 instances) is closer.

---

## Phase 3 — Ambiguity Collapse

### Ambiguity #1: Is concept-mapping a STRICT PREREQUISITE for /navigation (without it, navigation doesn't work at all) or an INPUT-ENHANCER (without it, navigation works but worse)?

**Strongest counter-interpretation:** strict prerequisite. The user's words "if there is no mapping then how could navigation would work in the first place" reads as "navigation IS impossible without mapping." Without ANY map, the Navigator has nothing to reference; routes have no Goals; the 12 fields are unfillable.

**Why the counter has merit AND fails:**
- MERIT: structurally, the audit's I1 says warming is precondition. Some map IS needed.
- FAILURE: "no mapping" is hyperbolic. The project today HAS mapping (static warming files); /navigation works. Without ANY map (warming files deleted, no inquiry artifacts read), /navigation can't operate — but that's not the project's current state.

**Confidence:** HIGH on the refined claim: **some map is canonically prerequisite (per I1); the project already has a map (warming layer); dynamic concept-mapping would upgrade map quality.**

**Resolution:** the user's claim is right in spirit (some map is foundational; canonically confirmed by I1) but the literal "navigation can't work in the first place" is overstated — navigation works today on static warming. The right refinement: navigation works but COULD work better with richer / dynamic mapping. So concept-mapping is an UPGRADE-PATH for the prerequisite, not a NEWLY-INTRODUCED prerequisite.

**What is now fixed?** Concept-mapping is upgrade-of-existing (warming layer), not new-capability.

**What is no longer allowed?** Recommending concept-mapping as if the project doesn't currently have a map-shaped artifact.

**What now depends on this choice?** The recent finding's recommendation should be refined to acknowledge warming as the existing concept-map layer; concept-mapping is the dynamic / multi-stage upgrade.

---

### Ambiguity #2: Does the recent finding's "new capability" framing need REVISION, or just CONTEXTUAL ADDITION?

**Strongest counter-interpretation:** contextual addition is enough. The recent finding's verdict (COMPLEMENT not CONFLICT; keep Recent as-is; defer concept-mapping protocol-writing) is structurally correct. The "new capability" label is just a phrasing issue; adding a note saying "actually it's an upgrade of warming, not entirely new" suffices.

**Why the counter has merit:** the verdict / recommendation doesn't actually change. The change is in the FRAMING. Whether to call it "new" vs "upgrade" doesn't change Step 5 caution or the deferral.

**Why the counter partially fails:** the framing affects the user's mental model AND affects future inquiries' baseline understanding. If future readers take the recent finding at face value, they'll think concept-mapping is unprecedented in the project, when in fact warming files already do part of the job. That's a propagating mistake.

**Confidence:** MEDIUM-HIGH (counter has merit; failure is propagation-risk).

**Resolution:** the recent finding should be REVISED (not just contextually added-to). The revision is small but important — replace "new capability" with "upgrade of existing capability (the warming layer)" with explicit citation of the warming files. This is a refining-edit, not a re-decision.

**What is now fixed?** The recent finding's framing needs a small revision.

**What is no longer allowed?** Leaving the "new capability" claim un-corrected in the recent finding.

---

### Ambiguity #3: What is the right operational interpretation of "default"?

**Strongest counter-interpretation:** the user means D1 — regenerate concept-map on every /navigation invocation. That's the strongest reading of "default" — "the default first-step every time."

**Why the counter has merit AND fails:**
- MERIT: literal "default" usage in software often means "on every invocation."
- FAILURE: at the cost level, D1 is unaffordable (every navigation invocation would now also do concept-mapping; doubles or triples cost). The user has elsewhere expressed cost discipline. D2 (project-maintained artifact regenerated episodically) is cheaper and achieves the same map-availability goal.

**Confidence:** MEDIUM-HIGH on D2 being right; need user confirmation.

**Resolution:** present both D1 and D2 in the answer; recommend D2 (project-maintained concept-map artifact; warming references it; regenerated episodically) but defer to user if D1 is what they meant.

---

### Ambiguity #4: Is this the second instance of frame-scope capture in recent work, validating the refactor candidate?

**Strongest counter-interpretation:** the recent finding's "new capability" mis-framing might not be a frame-scope-capture failure; it could be a simple oversight or incomplete-inventory failure.

**Why the counter has merit AND fails:**
- MERIT: not every framing error is frame-scope capture. Sometimes it's just sloppiness.
- FAILURE: the specific pattern matches — the recent finding's frame was "per-inquiry navigation"; an artifact OUTSIDE that frame (warming files) was excluded; the user (operating outside the frame) brought it in. Same structural pattern as the Memory failure. Pattern-fit is HIGH.

**Confidence:** HIGH.

**Resolution:** this IS the second instance of frame-scope capture. The audit threshold (≥3 instances) is one step closer to being met. Recommend: when the user does the concept-mapping audit, ALSO note this as instance 2 of the frame-scope-capture pattern.

---

### Load-bearing concept tests (mandatory per Phase 3 protocol)

#### Concept: "warming files are concept-map" (load-bearing claim)

- **Test:** proxy-vs-structural.
- **Counter:** "concept-map" might be a stretched label for narrative orientation files. They're not structured trees; they're prose.
- **Why the counter has merit AND fails:** MERIT — the structure is different (prose vs tree). FAILURE — the INFORMATION TYPE is the same (codebase orientation; fundamentals; trajectory). Whether information is tree-structured or prose-structured doesn't change whether it's concept-map-like content.
- **Resolution:** warming files are concept-map-like in CONTENT but not in STRUCTURE. Use this nuanced framing: "the project has concept-map-content in narrative form via warming; nav_should_be proposes the same content in tree-structured + dynamic form."

#### Concept: "upgrade of existing capability" (refined framing)

- **Test:** user-language alignment.
- **Counter:** the user said "default needs to be done in the first place" — not "upgrade."
- **Why the counter has merit AND fails:** MERIT — terminology different. FAILURE — the substantive claim matches: user says "this is foundational, needs to be done first"; refined framing says "this is foundational (canonically, via I1), and the project already partially does it (warming), and the user is proposing a richer/dynamic version of the same role." Same load-bearing claim, different label.
- **Resolution:** use "upgrade of existing capability" with the user's wording as the trigger ("the user said this needs to be done as default — the canonical 'warming is precondition' principle agrees, and warming today is the partial fulfillment; concept-mapping is the dynamic / multi-stage upgrade").

#### Specific-vs-pattern recognition cue

The user pointed at one specific finding's "new capability" framing. The pattern claim: frame-scope capture struck the recent finding (second instance after Memory). Address both — correct THIS specific framing AND note the pattern (toward the audit threshold).

---

### SV4 — Clarified Understanding

The user's challenge stabilizes as:

1. **The user is correct in spirit, slightly overstated literally.** Some map IS canonically prerequisite for /navigation (audit's I1). The project HAS map-like content (warming files in narrative form). The literal "navigation can't work in the first place without mapping" is overstated; the substantive claim — "mapping is foundational; the project should have richer mapping; concept-mapping isn't add-on, it's upgrade" — is correct.

2. **The recent finding's "new capability" framing was wrong** and was caused by **frame-scope capture** (the recent finding's frame excluded the warming layer; the user performed frame-exit and caught it). This is the SECOND instance of frame-scope capture in recent project work (after the Memory failure). N=2 toward the audit threshold (≥3).

3. **The right re-framing:** concept-mapping is an **UPGRADE** of the existing warming layer. The warming layer is concept-map-content in narrative form; concept-mapping is concept-map-content in dynamic / multi-stage / tree-structured form. Same information type, different shape and freshness.

4. **"Default" operationally splits into D1 (regenerate every navigation) vs D2 (project-maintained artifact, warming references it).** Recommend D2 — cost-affordable; preserves user's intuition; works at L0/L1; scales for L2+.

5. **Step 5 caution still applies.** The recommendation to defer concept-mapping protocol-writing pending one manual run as evidence is unchanged. The framing-correction doesn't reduce the evidence threshold.

6. **The recent finding should be revised** with a small refinement: replace "new capability" with "upgrade of existing warming layer"; explicitly cite warming files; note this as instance 2 of frame-scope capture.

---

## Phase 4 — Degrees-of-Freedom Reduction

### Variables now FIXED

- **F1:** Warming files at `homegrown/navigation/warmup/` ARE concept-map content (in narrative form). The project has a partial map today.
- **F2:** Concept-mapping is an UPGRADE of an existing capability, not a NEW capability. Refined framing.
- **F3:** The user's "prerequisite" claim is canonically supported by audit I1 ("warming is precondition for Navigation").
- **F4:** "Default" operationally = D2 (project-maintained artifact, episodically regenerated, referenced by warming).
- **F5:** This is the SECOND frame-scope-capture instance in recent work; validates the refactor candidate; brings audit threshold closer to ≥3.
- **F6:** The recent finding should be small-revised to correct the "new capability" framing.
- **F7:** Step 5 caution unchanged — defer protocol-writing pending one manual concept-mapping run.

### Variables ELIMINATED

- E1: "Concept-mapping is entirely new to the project" — wrong; warming partially does it.
- E2: "Concept-mapping should regenerate per /navigation invocation" — too expensive.
- E3: Leaving the recent finding's framing un-corrected.
- E4: Treating this as merely a phrasing issue (the propagation risk makes the framing-correction load-bearing).

### Variables that remain OPEN

- **O1:** What's in `homegrown/protocols/navigation_context_intake.md` — may have other map-like content. Worth a follow-up read.
- **O2:** Exact relationship between warming files and the proposed concept-mapping output — does concept-mapping output BECOME a warming file (or part of one), or are they separate artifacts?
- **O3:** Whether to ship the small-revision to the recent finding NOW or defer to a follow-up edit.
- **O4:** Whether to explicitly count this as instance 2 of frame-scope capture in the audit framework (per the prior refactor proposal's M4 audit candidate).

### SV5 — Constrained Understanding

The user's challenge re-frames the recent finding (concept-mapping = upgrade-of-warming, not new-capability) without changing the recommendation tier (still DEFERRED per Step 5). The challenge validates the frame-exit perspective refactor candidate (instance 2 in N≥3 audit). Operationally, "default" = D2 (project-maintained concept-map artifact; warming references it). Small revision to the recent finding is warranted.

---

## Phase 5 — Conceptual Stabilization

### SV6 — Stabilized Model

**The user's challenge is structurally correct: some map of the territory IS canonically prerequisite for /navigation (per the audit's I1 "warming is precondition for Navigation"). The recent finding's "new capability" framing was wrong, caused by frame-scope capture — the recent finding's frame was bounded to per-inquiry navigation organization; it excluded the warming layer at `homegrown/navigation/warmup/` which IS concept-map content in narrative form. The right re-framing: concept-mapping is an UPGRADE of an existing capability (the warming layer), providing dynamic / multi-stage / tree-structured concept-map content where today there's static / single-stage / narrative content. The user's "default" claim splits operationally: D1 (regenerate concept-map per /navigation invocation) is too expensive and rejected; D2 (project-maintained concept-map artifact, regenerated episodically, referenced by warming) is cost-affordable and is the right default. Step 5 caution still applies — concept-mapping protocol-writing stays DEFERRED pending one manual concept-mapping run as evidence. This is the SECOND instance of frame-scope capture in recent project work (after the L0 Memory failure), bringing the audit threshold (per the Sensemaking refactor candidate at `devdocs/inquiries/2026-05-10_03-07__refactor_sensemaking_perspective_for_frame_exit/finding.md`) closer to ≥3. The recent finding's comparison should be small-revised to (a) replace "new capability" with "upgrade of existing warming layer," (b) explicitly cite the warming files, (c) note this as frame-scope-capture instance 2, (d) clarify the D2 operational interpretation.**

### Difference from SV1

| Dimension | SV1 | SV6 |
|---|---|---|
| User's claim status | "Right in spirit, overstated literally" | Canonically supported (audit I1); refined framing required |
| Recent finding's "new capability" | Possibly wrong | Definitely wrong — frame-scope-capture instance 2 |
| Warming layer | Not connected to discussion | EXPLICIT — warming IS concept-map content in narrative form; concept-mapping is the upgrade |
| "Default" | Open / ambiguous | Operationally split into D1 (rejected) vs D2 (recommended) |
| Refactor candidate evidence | Implicit | N=2 explicit; audit threshold approaching |
| Action on recent finding | Unclear | Small revision warranted |

The SV1→SV6 delta is substantial: from "user has a point" to "user has identified a real failure pattern in a recent finding; small revision corrects it; bigger pattern (frame-scope capture) gets N=2 evidence."

---

## Saturation indicators

- **Perspective saturation:** moderate-high. Frame-exit Completeness perspective surfaced the load-bearing finding (recent's frame-scope-capture). Phase/Calibration-State distinguished L0/L1 vs L2+ needs. Risk produced 3 anchors (cost; pattern recurrence).
- **Ambiguity resolution ratio:** 4/4 explicit ambiguities resolved (3 HIGH, 1 MEDIUM-HIGH); 3 load-bearing concept tests; specific-vs-pattern check.
- **SV delta:** large.
- **Anchor diversity:** 9 anchor types across 8 perspectives (Frame-exit Completeness added as 8th).

---

## Direct answer for the user (one paragraph)

**You're correct that mapping is foundational** — the audit canonically says *"warming is precondition for Navigation"* (`devdocs/inquiries/2026-05-10_03-50__navigation_established_audit/finding.md`, I1). The recent finding was WRONG to call concept-mapping a "new capability"; the project already HAS concept-map content in narrative form (the warming files at `homegrown/navigation/warmup/`). What nav_should_be describes is an UPGRADE of that existing layer — same information type, but dynamic / multi-stage / tree-structured rather than static / single-stage / narrative. The "default" reading splits two ways: D1 = regenerate concept-map every /navigation invocation (rejected — too expensive); D2 = project-maintained concept-map artifact regenerated episodically, with warming files referencing it (recommended — cost-affordable, preserves your intuition, works at L0/L1, scales at L2+). The recommendation to defer the protocol stays (Step 5 — one manual concept-mapping run as evidence first), but the framing should be revised: "upgrade of warming layer" not "new capability." **Bonus structural finding:** this is the SECOND instance of frame-scope capture in recent project work (the recent finding's scope excluded the warming layer; you operated outside that scope and caught it). Memory was instance 1; this is instance 2. The proposed Sensemaking refactor (`devdocs/inquiries/2026-05-10_03-07__refactor_sensemaking_perspective_for_frame_exit/finding.md`) has a revival trigger of ≥3 instances; one more catch and it should ship.

---

## Open items handed forward

- **Open question O1:** what's in `homegrown/protocols/navigation_context_intake.md`? May have additional map-like content worth surfacing. Worth a brief read.
- **Open question O2:** does concept-mapping output BECOME a warming file (or a richer-warming layer), or are they separate artifacts? Operational question for when the protocol is written.
- **Recommended next action:** small revision to the recent comparison finding — replace "new capability" framing with "upgrade of warming layer"; cite warming files explicitly; note frame-scope-capture instance 2.
