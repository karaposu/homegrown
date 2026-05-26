# Sensemaking: Why Sensemaking application missed Memory disambiguation

## User Input

Source: `/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-10_01-21__why_sensemaking_missed_memory_disambiguation/_branch.md`

> **Question:** What was the primary causal mechanism that prevented Sensemaking's load-bearing concept test from firing on Memory in the prior MVL+ run on the metaloop ladder?
>
> **Goal:** A single sharp answer naming the primary cause + ranked secondary causes, evidence-grounded in the prior `docarchive/sensemaking.md`. Use the answer to evaluate whether existing maintenance candidates (M1-M6 from the prior loop_diagnose) close the mechanism.

Exploration converged: PRIMARY = **frame-scope capture** (refined from candidate (a)); CONTRIBUTING = status quo bias (b), anchor dominance (c), procedural-scope manifestation (e); NOT primary = trigger-language abstractness (d).

---

## SV1 — Baseline Understanding

The prior inquiry's Sensemaking didn't apply the proxy-vs-structural sub-test of the load-bearing concept test to Memory. The reason isn't lazy application — the spec's enumeration of load-bearing concepts didn't include Memory. The reason it didn't include Memory is that Memory was framed as an "axis" (a scaffold element of the multi-axial frame) rather than as a "concept being committed." The framing was inherited from prior findings + the inquiry's own _branch.md.

But the deeper question is: even if the test HAD been applied to Memory, would it have produced the right answer? Exploration suggests NO — because the frame's scope had already implicitly equated Memory with meta-loop-memory (`_meta_state.md`), per-inquiry md files were outside the frame's reach.

So the failure isn't really "the test didn't fire." It's "the frame's scope had already settled the term's meaning before the test could fire on it productively."

---

## Phase 1 — Cognitive Anchor Extraction

### Constraints (limits, requirements, boundaries)

- **C1: The Sensemaking spec already names 6 failure modes** (per `homegrown/sense-making/references/sensemaking.md`): Status Quo Bias, Premature Stabilization, Anchor Dominance, Perspective Blindness, Clean Resolution Trap, Self-Reference Blindness. Any new mechanism named in this diagnosis should be checked against these before coining a new label.
- **C2: `homegrown/protocols/loop_diagnose.md` Step 5** explicitly forbids broad fundamentals rewrites from one weak correction chain. Coining a new failure mode would be such a rewrite. Be conservative.
- **C3: Self-reference risk is acute.** This sensemaking diagnoses a sensemaking failure using sensemaking's own framework. Mitigation: anchor every claim in spec-text or prior-output text; do not invent new categories without evidence.
- **C4: The prior loop_diagnose finding stopped at H1 confidence HIGH with explicit "why not stronger: N=1; the precise causal mechanism behind the application gap was not isolated."** This inquiry IS that isolation.

### Key Insights (non-obvious implications)

- **K1: The mechanism is an INTERACTION, not a single cause.** The frame's scope (meta-loop-only) + the inheritance of "Memory" as already-vetted vocabulary + the strength of the multi-axial anchor + the procedural enumeration of load-bearing concepts — these compose. Removing any one would weaken the others.
- **K2: The frame-scope phenomenon may not require a new failure mode.** It can be described as **Perspective Blindness applied to the frame-exit perspective** — the loop checked 7 perspectives but never checked "step out of the meta-loop frame; what does this term mean project-wide?" The Sensemaking spec's Perspective Blindness corrective ("Which perspective would be most uncomfortable to check?") would have required exactly that perspective if explicitly invoked.
- **K3: Status Quo Bias is REAL and structurally clean.** The term "Memory" was inherited from prior findings (the 2026-05-10 finding listed it as one of 8 axes); the inquiry treated it as established vocabulary; this is exactly the spec's definition: *"Defending an established structure, definition, or framework because it's documented and familiar."*
- **K4: Anchor Dominance is REAL and structurally clean.** K1 + K2 in the prior sensemaking introduced the multi-axial frame in the first 5 lines of Phase 1; the frame organized everything afterward. Per the spec: *"One very strong anchor is doing all the work. Every ambiguity resolves toward it."* — Ambiguity #6 resolved AROUND the frame (axis-vs-Navigator), not THROUGH it (what is Memory?).
- **K5: The load-bearing concept test enumeration's IMPLICIT criterion is "what's committed in this inquiry?".** This isn't a bug per se — it's a reasonable default. The bug is that frame-scaffold elements (the 8 axes, including Memory) feel like inputs to the inquiry, not outputs being committed. Once a term is in the scaffold, the test treats it as inherited not committed.
- **K6: At L0 of the meta-loop ladder, the human IS the meta-loop runner with project-wide visibility.** The user's correction came from outside the meta-loop frame because the user IS outside it (operating at L0 means having the meta-cognition above the frame). The AI, inside the frame, lost that visibility. **This points to a structural insight: as the meta-loop ladder advances (L1, L2, …), the project-wide visibility currently held by the human will need to be preserved somehow as roles graduate to system.**
- **K7: "Frame-scope capture" as a coined label is descriptively useful but elevation to a named project-level failure mode requires more evidence than N=1.** Use the label DESCRIPTIVELY in this finding; do not propose adding it to the Sensemaking spec without M4 audit evidence.

### Structural Points (core components, relationships)

- **SP1: The mechanism is a CHAIN.** Inheritance (Memory pre-vetted) → Anchoring (multi-axial frame as dominant anchor) → Categorization (Memory placed AS axis-scaffold) → Frame-scope (frame implicitly defines Memory's meaning as meta-loop-only) → Procedural enumeration (load-bearing concept test scoped to commitments, excludes scaffold) → Test doesn't fire OR if it fired would answer "one." The chain has 5 links; breaking any reduces the failure but the strongest break point is at the FRAME-SCOPE link (link 4).
- **SP2: The Sensemaking spec's failure modes cover 4 of the 5 chain links explicitly:** Status Quo Bias covers link 1 (inheritance); Anchor Dominance covers link 2 (anchoring); Perspective Blindness covers link 4 (the missing frame-exit perspective). Premature Stabilization covers the procedural manifestation at link 5. Only link 3 (categorization) doesn't have a clean spec-name match.
- **SP3: The user's frame-exit move came from being outside the frame.** Project-wide visibility is at L0 a human-only property; as the ladder graduates, this visibility must be transferred somehow.
- **SP4: M1 (the prior diagnostic's pre-CONCLUDE checklist) addresses the procedural manifestation (link 5) but NOT the frame-scope capture (link 4).** A pre-publish scan can flag inconsistent cell values, but it cannot challenge the frame's scope. The frame is set MUCH earlier than CONCLUDE.
- **SP5: M5 (Innovation baseline-row scrutiny) addresses link 5 procedurally + partially addresses link 4 (because requiring mechanism-trace forces some attention to baseline cells, but not to the frame's scope itself).**

### Foundational Principles (assumptions, rules, axioms)

- **P1: External anchoring is mandatory** when self-reference risk is acute. Cite spec text + docarchive lines.
- **P2: Don't coin a new failure mode without evidence.** Even if "frame-scope capture" is descriptively appealing, the existing failure modes (Status Quo Bias + Anchor Dominance + Perspective Blindness) cover the mechanism's components. The label is shorthand, not a structural insight.
- **P3: Causal-chain attribution is valid when each link can be independently named and evidence supports each link's contribution.** This is more honest than single-cause attribution when the actual mechanism is a chain.
- **P4: Maintenance evaluation: a candidate that addresses ANY link of a causal chain has value, but addressing the EARLIEST link (closest to the cause) has more leverage than addressing later links.**

### Meaning-Nodes (central concepts and themes)

- **M1: Causal chain.** The failure mechanism is a 5-link chain: inherit → anchor → categorize → frame-scope → procedural-enumerate.
- **M2: Frame-scope capture.** The middle-of-chain mechanism: the frame defines a term's meaning by scope; the term's meaning becomes "what fits inside the frame's scope" rather than "the term's full inventory."
- **M3: Frame-exit perspective.** The perspective the loop didn't check; the perspective the user used. Project-wide-inventory perspective (what artifacts does the project HAVE, regardless of the meta-loop?).
- **M4: Project-wide visibility transfer.** As autonomy graduates roles from human to system, the project-wide visibility currently held by the human must transfer somehow — otherwise frame-scope capture recurs at higher levels.
- **M5: Existing failure modes suffice (mostly).** Status Quo Bias + Anchor Dominance + Perspective Blindness cover most of the chain. New label is descriptive shorthand, not new structure.

### SV2 — Anchor-Informed Understanding

The causal mechanism is a **5-link chain**:

1. **Inheritance** (Status Quo Bias): "Memory" was inherited from prior findings as already-vetted axis-name.
2. **Anchoring** (Anchor Dominance): the multi-axial frame became the dominant anchor early in Phase 1; everything organized around it.
3. **Categorization** (no clean spec-name; closest is a manifestation of #1+#2): Memory was placed in the "axis" category at the framing moment.
4. **Frame-scope capture** (descriptive label; closest existing failure mode is **Perspective Blindness** — specifically the missing frame-exit perspective): the frame's scope (meta-loop-only) implicitly defined Memory's meaning, excluding per-inquiry artifacts. Even if the load-bearing concept test had fired, it would have answered "one" within the frame.
5. **Procedural enumeration** (Premature Stabilization manifestation; the load-bearing concept test enumerated commitments, not scaffold-elements): Memory wasn't on the test's list because the loop scoped "load-bearing concepts" to commitments-being-made.

The strongest break point is **link 4 (frame-scope capture / missing frame-exit perspective)** — addressing this prevents links 3 and 5 even when 1 and 2 fire. The user's correction succeeded by exiting the frame; closing this catch-point requires the loop to do the same.

---

## Phase 2 — Perspective Checking

### Technical / Logical

- New anchor: **C-T1: The chain attribution is testable.** If Status Quo Bias alone caused the failure, a fresh-context inquiry without inherited terms would not exhibit it. If Anchor Dominance alone, an inquiry with multiple competing anchors would not exhibit it. If Frame-scope capture alone, an inquiry with explicit frame-exit perspective check would not exhibit it. This decomposes empirically (post-hoc).
- New anchor: **C-T2: The strongest break-point analysis is supportable but uncertain.** Whether breaking link 4 (frame-exit perspective) would have closed the failure depends on whether such a perspective check would have surfaced project-wide artifacts. It probably would (the user's correction is evidence of how easy frame-exit makes the gap visible), but only direct testing confirms.

### Human / User

- New anchor: **C-H1: The user's correction is THE evidence for link 4.** The user's mental move (asking "we have md files no?") IS frame-exit. The fact that a human, ten seconds, no specific tooling, caught what 5 disciplines missed strongly suggests the catch-point is "perspective the loop didn't take," not "test the loop didn't run."
- New anchor: **C-H2: The user's intuition about "intolerable" is calibrated.** A simple-but-important mistake feels intolerable BECAUSE the catch was so available — frame-exit costs nothing. The loop's failure to take this perspective is what makes it feel preventable.

### Strategic / Long-term

- New anchor: **C-S1: At higher levels of the meta-loop ladder, frame-exit perspective is harder.** At L0 the human runs the meta-loop and naturally has project-wide visibility. At L1+ Navigator becomes a system role inside an isolated session — that session, by design, has the meta-loop frame, not project-wide visibility. The Sensemaking spec's Perspective Blindness corrective ("which perspective would be most uncomfortable to check?") becomes harder to apply when the loop is structurally inside a frame.
- New anchor: **C-S2: This points to a project-design implication: as autonomy graduates, the project-wide-visibility role currently held by the human (at L0 of the meta-loop ladder) needs explicit transfer.** The 9-axis frame from the prior loop_diagnose finding doesn't include a "project-wide-visibility" axis. Maybe it should — but that's a SEPARATE inquiry, not in this scope.

### Risk / Failure

- New anchor: **C-R1: Over-fitting risk.** Coining "frame-scope capture" as a new failure mode from N=1 evidence is exactly the risk loop_diagnose Step 5 warns against. Resolution: use the label DESCRIPTIVELY, do not propose adding it to the spec.
- New anchor: **C-R2: M1 (pre-CONCLUDE checklist) addresses the wrong link.** It's a good catch-point for the procedural manifestation (link 5) but cannot challenge the frame's scope (link 4). The prior loop_diagnose finding's M1 was the strongest convergent candidate, but this drill-down reveals it's downstream of the primary mechanism. The PRIOR finding's M1 still has value (catches the procedural symptom), but it doesn't close the upstream link.
- New anchor: **C-R3: Self-reference collapse risk.** Calling "frame-scope capture" the primary cause is convenient because "frame" is the loop's vocabulary. An external reviewer might say: "you're inside the same frame; how would you know if you're seeing real causation vs. the most explainable post-hoc story?" Mitigation: reasoning is anchored in spec-text and docarchive lines; the user's correction provides external evidence (the frame-exit move worked, suggesting frame is indeed the binding constraint).

### Resource / Feasibility

- New anchor: **C-F1: Adding a "frame-exit perspective check" to Sensemaking has cost.** Each Sensemaking run would need to ask: "what would this term mean if I stepped out of the inquiry's frame?" Cost: small (one additional perspective in Phase 2). Benefit: catches frame-scope-capture issues. Feasibility: HIGH.
- New anchor: **C-F2: The Sensemaking spec already has 7 perspectives.** Adding an 8th (frame-exit) is incremental, not architectural. But per loop_diagnose Step 5, adding a perspective from N=1 evidence would still be overreach. Defer to M4 audit.

### Definitional / Consistency

- Tested: does "frame-scope capture" contradict existing failure modes (Status Quo Bias, Anchor Dominance, Perspective Blindness)? **Resolved:** No — it COMPOSES from them. Status Quo Bias supplies the inherited term; Anchor Dominance makes the frame the dominant anchor; Perspective Blindness on frame-exit perspective is the proximate mechanism.
- Tested: does the chain attribution contradict the prior loop_diagnose's "primary fault: Sensemaking" claim? **Resolved:** No — Sensemaking is still primary by spec-charter. The chain is WITHIN Sensemaking's failure mode space. The chain refines "primary fault: Sensemaking" with "primary mechanism within Sensemaking: frame-scope capture / Perspective Blindness on frame-exit."
- New anchor: **C-D1: Spec text on Perspective Blindness:** *"The perspectives checked all agree. Nothing produced discomfort or surprise. The model is unchallenged — not because it's robust, but because only friendly perspectives were consulted."* — This describes link 4 of the chain when "friendly perspectives" includes "perspectives within the frame" and excludes "frame-exit perspectives."

### Phase / Calibration-State

- New anchor: **C-P1: Frame-exit perspective is project-stage-dependent.** At early stages (L0 of meta-loop ladder), the human has it naturally. At later stages, it needs explicit transfer or recurs as the same kind of failure at higher abstraction. So the maintenance candidates for frame-scope capture are calibration-stage-appropriate at different levels.
- New anchor: **C-P2: The audit (M4 from prior loop_diagnose) IS the calibration mechanism.** If audit produces ≥3 instances of frame-scope-capture-like patterns across distinct inquiries, that's evidence to elevate the mechanism to a named failure mode AND to add a frame-exit perspective check to Sensemaking. Until then, deferred.

### SV3 — Multi-Perspective Understanding

The causal mechanism stabilizes as a **5-link chain inside Sensemaking**, with the strongest break-point at link 4 (frame-scope capture / missing frame-exit perspective). The chain is fully describable using existing Sensemaking failure modes (Status Quo Bias for link 1, Anchor Dominance for link 2, Perspective Blindness for link 4, Premature Stabilization for link 5). Link 3 (categorization) is a manifestation of links 1+2 combined; no clean spec-name match needed.

The maintenance implication: **M1 (the prior loop_diagnose's pre-CONCLUDE checklist) catches the symptom (link 5 manifestation) but not the upstream cause (link 4). It still has value but isn't sufficient on its own. To close the chain, the loop needs to ALSO take a frame-exit perspective during Sensemaking — but adding this requires more evidence (M4 audit) before being elevated to a spec change.**

The strategic implication: **as the meta-loop ladder advances toward higher autonomy levels, the project-wide-visibility role currently held by the human at L0 needs explicit transfer.** This is a separate inquiry (out of scope here) but worth surfacing as a research frontier.

---

## Phase 3 — Ambiguity Collapse

### Ambiguity #1: Is the primary cause "frame-scope capture" (link 4) or "procedural-scope misinterpretation" (link 5)?

**Strongest counter-interpretation:** The proximate trigger of the test not firing is the procedural enumeration (link 5) — the load-bearing concept test enumerated commitments, not scaffold-elements. Without that procedural-enumeration scope, even if frame-scope capture had set Memory's meaning, the test could have been forced to fire and surface that the frame had collapsed too tightly. So link 5 is the proximate cause; frame-scope capture is upstream contributing.

**Why the counter-interpretation has structural merit AND fails:**
- MERIT: link 5 IS the act that didn't happen (test didn't fire). In a procedural sense, that's where the failure manifests.
- FAILURE: Even if the test HAD fired (per Exploration's analysis), it would likely have answered "one structural distinction" within the frame's scope. The frame's settling of Memory's meaning is what makes the test's answer wrong, regardless of whether it fires. Without the frame-scope capture, the test's enumeration scope wouldn't matter — the term's full type-inventory would be available.

**Confidence:** MEDIUM-HIGH. The counterfactual ("test fires + frame still scopes meaning") is hypothetical; it's plausible the test would have surfaced the scope gap if FORCED to consider the term's project-wide meaning. But that requires the test to bring in frame-exit reasoning, which is itself the missing thing.

**Resolution:** Frame-scope capture (link 4) is the PRIMARY cause; procedural-scope misinterpretation (link 5) is a CONTRIBUTING manifestation that compounds the failure. The chain attribution: link 4 primary; links 1, 2, 5 contributing.

**What is now fixed?** The causal chain ranking: link 4 primary; links 1, 2, 5 contributing.

**What is no longer allowed?** Single-link single-cause attribution claiming "the test didn't fire" without naming WHY (the frame had already settled the meaning).

**What now depends on this choice?** Maintenance candidate evaluation: M1 addresses link 5 (good but not primary); a frame-exit perspective check would address link 4 (primary but DEFERRED pending M4 audit).

**What changed in the conceptual model?** The mechanism is now framed as a chain with link 4 as the leverage point.

---

### Ambiguity #2: Is "frame-scope capture" a NEW failure mode or a manifestation of existing failure modes?

**Strongest counter-interpretation:** "Frame-scope capture" describes a phenomenon not cleanly captured by any single existing failure mode. Status Quo Bias is about INHERITANCE (the frame already exists); Anchor Dominance is about ANCHOR STRENGTH (one anchor doing all the work); Perspective Blindness is about UNCHECKED PERSPECTIVES. None of these specifically names "the frame's scope determines a term's meaning, excluding meanings outside the scope." Coining "frame-scope capture" as a new label captures a real and previously-unnamed pattern.

**Why the counter-interpretation has merit AND fails:**
- MERIT: the specific phenomenon (frame's scope settling term meaning) isn't named in the spec. A new label might be useful.
- FAILURE: per `homegrown/protocols/loop_diagnose.md` Step 5: *"Do not propose broad fundamentals rewrites from one weak correction chain."* Adding a new failure mode IS such a rewrite. Plus: Perspective Blindness's corrective ("Which perspective would be most uncomfortable to check?") would have caught link 4 if applied with frame-exit as the candidate uncomfortable perspective. So Perspective Blindness, properly applied, covers link 4. The corrective just wasn't applied.

**Confidence:** HIGH. The counter (no clean existing match) has merit; the rejoinder (existing match exists if Perspective Blindness is applied with frame-exit candidate) holds; the procedural restraint (don't elevate from N=1) holds.

**Resolution:** Use "frame-scope capture" as a DESCRIPTIVE label in this finding. Do NOT propose elevating it to a named failure mode in the Sensemaking spec until M4 audit produces ≥3 instances. If audit confirms recurrence, then the question of "new failure mode vs sharpened Perspective Blindness corrective" becomes a real maintenance candidate.

**What is now fixed?** Frame-scope capture is descriptive shorthand; existing failure modes (Perspective Blindness primarily, plus Status Quo Bias + Anchor Dominance contributing) cover the mechanism without elevation to a new failure mode.

**What is no longer allowed?** Proposing a new failure mode named "frame-scope capture" from N=1 evidence.

**What now depends on this choice?** Maintenance candidates target the existing Perspective Blindness corrective application, not new failure-mode coining.

---

### Ambiguity #3: Does M1 (prior diagnostic's pre-CONCLUDE checklist) close the primary mechanism?

**Strongest counter-interpretation:** M1 was the highest-convergence candidate from the prior loop_diagnose. It addresses both classes (term-ambiguity + baseline-blindness). Calling it insufficient because it doesn't close link 4 is moving the goalposts after the prior diagnostic accepted M1.

**Why the counter-interpretation fails (structural grounds):** The prior diagnostic accepted M1 with explicit caveats about evaluation gates. This drill-down provides additional information: the primary causal mechanism is upstream of M1's catch-point. M1 catches the symptom AT PUBLICATION (post-hoc); link 4 happens DURING SENSEMAKING (well before publication). They're at different layers.

This isn't moving goalposts — it's refining the maintenance picture with additional evidence. M1 retains its value as a SAFETY NET for the procedural manifestation; addressing link 4 would be a DIFFERENT candidate operating earlier in the pipeline.

**Confidence:** HIGH. The chain attribution is supportable; M1's catch-point is at link 5 (procedural manifestation) per its design (pre-CONCLUDE checklist on finding contents). Link 4 (frame-scope capture during Sensemaking) is upstream.

**Resolution:** M1 stays valuable as a downstream safety-net but does NOT close the primary mechanism. A new candidate addressing link 4 (frame-exit perspective check during Sensemaking) is justified IN PRINCIPLE, but DEFERRED pending M4 audit per Step 5 restraint.

**What is now fixed?** M1's coverage scope is link 5; not link 4. M1 retains value but isn't sufficient.

**What is no longer allowed?** Claiming M1 closes the primary causal mechanism.

**What now depends on this choice?** A new DEFERRED maintenance candidate (call it M7 — frame-exit perspective check) is added to the deferred-candidates list, pending M4 audit.

---

### Ambiguity #4: Does the project-wide-visibility-transfer concern belong in this inquiry's scope?

**Strongest counter-interpretation:** This inquiry is about the SPECIFIC causal mechanism for the Memory failure. Surfacing "as autonomy graduates, project-wide visibility needs transfer" is a strategic implication that belongs in a separate inquiry, not here. Per `_branch.md`'s scope: *"the goal is NOT to produce another full maintenance proposal."*

**Why the counter-interpretation fully holds:** Yes. The strategic implication is interesting and worth surfacing as a research frontier in Open Questions, but expanding scope to address it here would scope-creep.

**Resolution:** Surface in Open Questions / Research Frontiers; do not develop in body.

**What is now fixed?** Scope stays narrow — causal mechanism + maintenance evaluation.

---

### Load-bearing concept tests (mandatory per Phase 3 protocol)

#### Concept: "frame-scope capture" (newly-coined)

- **Test:** user-language alignment + proxy-vs-structural.
- **Counter:** "frame-scope capture" is loop-coined. The user's language was "we have md files no?" — they didn't say "the frame scoped your meaning."
- **Why the counter has merit:** Yes — the term is loop-derived. Per the spec's specific-vs-pattern recognition cue, the term might fit Memory but miss the broader phenomenon.
- **Resolution:** Use as descriptive shorthand; flag PROVISIONAL; revisit per M4 audit.

#### Concept: "causal chain" (newly-applied to this analysis)

- **Test:** proxy-vs-structural. Is the chain a real structural feature of the failure mode, or is it an organizing convenience?
- **Counter:** Multiple plausible chain-orderings might exist; the chosen 5-link order is one of several possible decompositions.
- **Why the counter has merit AND fails:** MERIT — alternative chains could be drawn. FAILURE — the 5 links each correspond to a NAMED point in the prior sensemaking output (inheritance via K2, anchoring via K1+K2 multi-axial frame, categorization via Memory-as-axis labeling, frame-scope via Definitional/Consistency check equating Memory with `_meta_state.md`, procedural enumeration via load-bearing concept test list excluding Memory). Each link has direct evidence.
- **Resolution:** "Causal chain" is structurally supported by the artifact text. Use it.

#### Concept: "primary cause" (used to attribute link 4)

- **Test:** discoverability. Has the determination mechanism for "primary" been specified?
- **Counter:** "Primary" depends on counterfactual reasoning ("if link 4 were closed, would the failure happen?"). Counterfactuals are speculation.
- **Why the counter has merit:** YES, somewhat. The counterfactual claim is supported by the user's frame-exit move succeeding, but that's one data point.
- **Resolution:** Use "primary" with explicit definition: "the causal link whose closure would most likely have prevented the failure, supported by the user's frame-exit success as evidence of frame-scope as binding constraint."

#### Specific-vs-pattern recognition cue

The user pointed at ONE instance (Memory). Per the cue: *"a small set of examples doesn't always tell us about the wider pattern; the concept might fit those examples but miss the broader problem."*

Applied here: the chain attribution and frame-scope-capture label might fit Memory but miss the broader pattern. Resolution: address THIS instance with HIGH confidence; flag the broader-pattern question for M4 audit; don't elevate frame-scope-capture to a project-level failure mode without audit-supported recurrence.

---

### SV4 — Clarified Understanding

The causal mechanism is a **5-link chain inside Sensemaking's failure-mode space**:

1. **Inheritance** (Status Quo Bias).
2. **Anchoring** (Anchor Dominance).
3. **Categorization** (manifestation of 1+2; no clean spec-name).
4. **Frame-scope capture** (Perspective Blindness on the frame-exit perspective). **PRIMARY.**
5. **Procedural enumeration** (Premature Stabilization manifestation; load-bearing concept test scope).

**Primary causal link: link 4 — frame-scope capture / missing frame-exit perspective.** The frame defined Memory's meaning by scope (meta-loop-only); even if the load-bearing concept test had fired, it would have answered "one structural distinction" within that scope. The user's correction succeeded by frame-exit — bringing in evidence (md files) the frame had excluded.

**Maintenance evaluation:**
- **M1** (pre-CONCLUDE checklist) addresses link 5 (procedural). Useful safety-net; not primary catch.
- **M5** (Innovation baseline-row scrutiny) addresses link 5 procedurally + partial link 4 (mechanism-trace forces some attention). Useful; not primary catch.
- **M2/M3/M4/M6** address other aspects.
- **A new (deferred) candidate** would address link 4: a "frame-exit perspective check" added to Sensemaking's Phase 2. DEFERRED per loop_diagnose Step 5 pending M4 audit.

**Strategic implication (out of scope; flagged in Open Questions):** as the meta-loop ladder graduates, project-wide visibility currently held by the human needs explicit transfer.

---

## Phase 4 — Degrees-of-Freedom Reduction

### Variables now FIXED

- **F1: 5-link causal chain** with link 4 (frame-scope capture / Perspective Blindness on frame-exit) as primary.
- **F2: Existing Sensemaking failure modes cover the chain.** Status Quo Bias (link 1), Anchor Dominance (link 2), Perspective Blindness (link 4 primary), Premature Stabilization (link 5). Link 3 is a manifestation, not a clean failure-mode match.
- **F3: M1 (prior diagnostic's pre-CONCLUDE checklist) addresses link 5, not link 4.** It retains value but isn't primary.
- **F4: A new candidate targeting link 4** (frame-exit perspective check during Sensemaking Phase 2) is justified IN PRINCIPLE but DEFERRED pending M4 audit per loop_diagnose Step 5.
- **F5: "Frame-scope capture" is descriptive shorthand** — not a new failure mode for the Sensemaking spec.
- **F6: Strategic implication** (project-wide-visibility transfer at higher meta-loop levels) flagged as Open Question / Research Frontier.

### Variables ELIMINATED

- E1: Single-link single-cause attribution.
- E2: Coining "frame-scope capture" as a new failure mode.
- E3: Treating M1 as closing the primary mechanism.
- E4: Spec rewrites from N=1 evidence (still subject to loop_diagnose Step 5).
- E5: Expanding this inquiry's scope to project-wide-visibility design.

### Variables that remain OPEN

- O1: Whether the M4 audit will produce ≥3 instances of frame-scope-capture-like patterns in other inquiries (would justify elevating link 4 mitigation from DEFERRED to ACTIONABLE).
- O2: Whether the new (deferred) candidate's exact form should be "add a frame-exit perspective" OR "sharpen Perspective Blindness corrective with a frame-exit example."
- O3: Whether project-wide-visibility transfer becomes a load-bearing question at L2+ of the meta-loop ladder (separate inquiry).

### SV5 — Constrained Understanding

The diagnostic answer is reduced to: **a 5-link causal chain with link 4 (frame-scope capture / Perspective Blindness on frame-exit perspective) as the primary mechanism.** Existing failure modes cover the chain. M1 from the prior diagnostic addresses link 5 (procedural symptom) but not link 4 (primary cause). A new candidate targeting link 4 is justified but DEFERRED pending audit. The user's frame-exit move is the evidence that link 4 is the binding constraint.

---

## Phase 5 — Conceptual Stabilization

### SV6 — Stabilized Model

**The primary causal mechanism that prevented Sensemaking's load-bearing concept test from firing on Memory in the prior MVL+ run is "frame-scope capture" — Perspective Blindness applied to the frame-exit perspective. The inquiry's frame ("meta-loop ladder") implicitly defined Memory's meaning by scope (what the meta-loop tracks across runs), excluding per-inquiry artifacts (md files like `_branch.md`/`_state.md`/`finding.md` which `/MVL` and `/MVL+` runners write at every level). Even if the load-bearing concept test had fired on Memory, it would likely have answered "one structural distinction" within the frame's scope. The user's correction ("we have md files no?") succeeded by FRAME-EXIT — stepping outside the meta-loop frame and bringing in evidence the frame had excluded. The mechanism is one link in a 5-link causal chain inside Sensemaking's failure-mode space (Status Quo Bias → Anchor Dominance → Categorization → Frame-scope capture → Procedural enumeration); each link is covered by existing Sensemaking failure modes, so no new failure mode needs to be coined. The prior loop_diagnose's M1 pre-CONCLUDE checklist addresses link 5 (procedural symptom) and retains value as a downstream safety-net, but does NOT close the primary mechanism. A new candidate addressing link 4 (frame-exit perspective check during Sensemaking Phase 2) is justified in principle but DEFERRED pending the M4 audit per `homegrown/protocols/loop_diagnose.md` Step 5 (don't propose broad rewrites from N=1).**

### Difference from SV1

| Dimension | SV1 | SV6 |
|---|---|---|
| Cause structure | Single mechanism implied | 5-link causal chain explicit |
| Primary cause | "test didn't fire" | "frame-scope capture / Perspective Blindness on frame-exit" (link 4) |
| Failure-mode mapping | Implicit | Each link mapped to existing Sensemaking failure mode (or noted as manifestation) |
| New label proposal | Not addressed | "frame-scope capture" used DESCRIPTIVELY; not elevated to spec |
| M1 evaluation | Implicit "M1 is the answer" | M1 closes link 5 not link 4 — useful safety-net not primary catch |
| Strategic implication | Not surfaced | Project-wide-visibility transfer flagged as Open Question |
| Self-reference handling | Risk implicit | External anchoring via spec text + docarchive lines explicit |

The SV1→SV6 delta is real: from "the test didn't fire" to "the frame had already settled the meaning before the test could fire usefully." This shifts the maintenance picture.

---

## Saturation indicators

- **Perspective saturation:** moderate-high. Phase/Calibration-State surfaced C-P1+C-P2 (project-stage dependence, M4 as calibration mechanism). Definitional/Consistency tested 2 internal claims. Risk produced 3 anchors. Coverage adequate.
- **Ambiguity resolution ratio:** 4/4 explicit ambiguities resolved (3 HIGH, 1 MEDIUM-HIGH). Plus 3 load-bearing concept tests passed + specific-vs-pattern check applied.
- **SV delta:** large (single-mechanism → 5-link chain; M1 understanding refined).
- **Anchor diversity:** 9 anchor types across 7 perspectives.

---

## Open items handed to next disciplines

- **Decomposition:** partition the chain into evaluable maintenance-candidate slots; identify whether existing M1-M6 cover specific links.
- **Innovation:** generate a new candidate addressing link 4 (DEFERRED per Step 5) and evaluate whether the existing M1-M6 + the new candidate together provide chain coverage; commit O2.
- **Critique:** test for self-reference collapse; test whether "primary" attribution to link 4 is justified or is over-fitting; verify that proposing the new (deferred) candidate respects loop_diagnose Step 5.
