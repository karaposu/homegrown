---
status: active
related: devdocs/inquiries/2026-05-12_00-40__explore_discipline_from_scratch/finding.md
related: devdocs/inquiries/2026-05-12_10-06__explore_project_end_goal_design/finding.md
related: devdocs/inquiries/2026-05-12_11-14__explore_surfacing_mechanism_depth/finding.md
---
# Finding: /navigation — factoring decision (B-refined)

## Question

From `_branch.md`: *is /navigation's iter-1 definition wrongly factored — bundling what is structurally /explore-in-possibility-mode-over-the-route-space with a "perception-only, no selection" exclusion — and should /navigation be redefined as /explore + selection-with-movement?*

The user's intuition: iter-1 /navigation has been confusing its /explore-of-routes part with something else; it is just /explore + select.

## Finding Summary

- **The user's cognitive-operation insight is correct.** The enumerate-half of iter-1 /navigation IS structurally /explore in possibility mode over the next-move-space. The 16-type taxonomy is /navigation's specialized labeling vocabulary for that territory.

- **A jump-scan finding refined the user's framing.** /navigation has a unique contribution — **adaptive guidance per route** (per-route guidance + continuation notes) — that "explore + select" alone does not capture. The B-refined /navigation has FOUR components, not two: **Enumerate + Label + Guide + Select.**

- **Movement (actuation) is the runner's job, not /navigation's.** The user's "select-with-movement" conflated two operations. Selection (cognitive picking) stays in /navigation; movement (executing the chosen route) stays with the runner (/MVL+, /meta-loop). This preserves the discipline-runner separation that's structural across the project.

- **B-refined is the recommended factoring.** /navigation is a **specialization of /explore** over the next-move-space, extended with the 16-type labeling vocabulary, adaptive per-route guidance, and a cognitive selection step (human-mediated at v1; autonomous at L3+ on the autonomy ladder). The minimum-change alternative (status quo + vocabulary note) is preserved as a user-preference fallback.

- **/meta-loop's spec gets a small 2-3 sentence update.** Its phase list collapses "see (Navigation) + select-explicitly" into one phase ("navigate, with select"). The design philosophy — human-mediated selection at v1, path to autonomous at L3+ — is preserved. Movement-actuation remains meta-loop's job.

- **Adoption is bounded.** Three coordinated edits: rewrite /navigation's spec (5 sections; concrete drafts in this inquiry's `innovation.md` with 4 critique refinements in `critique.md`); update /meta-loop's spec (2-3 sentences); preserve iter-1 /navigation as historical reference. Vocabulary alignment with everyday meaning of "navigation" is a positive side-effect.

- **This is the second cleanest convergence in the /explore-thread chain** (after the depth inquiry) — no critical-weight user-confirmation caveat carries forward. Adoption is scope-only.

## Finding

### Context: how /navigation fits in the /explore-thread chain

The /explore-thread of inquiries — original from-scratch (iter-1+2), end-goal-aware design, surfacing-mechanism depth — established `/explore`'s meaning, attributes, runner support (`/staged-explore`), and per-item content depth. This inquiry shifts to a sibling discipline that has been bundling /explore work under its own name: `/navigation`.

The user pointed at a direct quote from `finding_iter1.md` describing /navigation: "perception only — /navigation lists where you could go next; it does not surface what's in a territory." Then asked: *but the enumerate-routes part of /navigation IS surfacing — that's /explore work over the move-space. /navigation has been confusing this with something else. Isn't /navigation just /explore + select?*

This inquiry tests the structural claim. The answer is: yes at the cognitive-operation level, and refined at the discipline-boundary level (which adds adaptive guidance and clarifies where movement lives).

### The cognitive-operation level: user's claim confirmed

Comparing /navigation's enumerate-half (iter-1 spec) against /explore in possibility mode (iter-2 + later commitments):

- /navigation's enumerate produces candidate next-moves with typed labels and per-route fields.
- /explore in possibility mode produces candidate items in a conceptual territory with confidence levels and optional annotations.

These are the same cognitive operation. The differences:

- /navigation's *territory* is specialized — always the next-move-space.
- /navigation's *labeling vocabulary* is specialized — the 16-type taxonomy (content-directed / process-directed / context-directed).
- /navigation's *per-item content* is richer than /explore's default — extensive per-route fields (Direction, Goal, Type, Priority, Status, etc.).

The user's insight at the cognitive-operation level holds. /navigation has been doing /explore work over a specialized territory with a specialized vocabulary.

### The jump-scan finding: adaptive guidance is /navigation's unique contribution

Exploration's jump scan surfaced a third structural component that "/explore + select" does not capture: **adaptive guidance per route**. /navigation's iter-1 spec includes per-route guidance modes (compact / full / expand-on-selection) plus continuation notes (what happens after this route is taken). This is **guidance generation**, not just labeling.

Guidance generation is /navigation's unique contribution beyond /explore-of-routes + select. It's what makes the discipline genuinely useful for *navigating*, not just enumerating-and-choosing. The B-refined /navigation has FOUR components reflecting this:

1. **Enumerate** — /explore-of-routes (possibility mode over the next-move-space)
2. **Label** — apply 16-type taxonomy
3. **Guide** — generate adaptive guidance per route
4. **Select** — cognitive selection from labeled-and-guided map (human-mediated at v1)

### Movement stays with the runner

The user's "select-with-movement" framing conflated two operations:

- **Select** — the cognitive step of picking a candidate from a list. Belongs to /navigation in B-refined.
- **Movement** — the actuation of the chosen route (transitioning state, invoking the next discipline). Belongs to the **runner** (/MVL+, /meta-loop), not /navigation.

This separation is structural across the project. Disciplines describe and decide; runners actuate. /navigation's NOT-list explicitly excludes movement-actuation as the first entry.

### Specialization-of-/explore framing (with transclusion-not-invocation)

/navigation is framed as a **specialization** of /explore. The Identity section names this; the Components section's Enumerate component **transcludes** /explore's mechanics (scan-signal-probe cycle; resolution-level and depth-level Step 0 fields; per-item content depth D0–D4) with cross-reference to `/explore/references/explore.md`.

This is **transclusion at spec-time**, not **runtime cross-discipline invocation**. The /navigation spec includes the inherited mechanics in its own text (briefly; with cross-reference for fuller treatment), so the LLM running /navigation doesn't need to load /explore's spec mid-execution. This preserves the workspace invariant.

The pattern is project-wide: when one discipline specializes another, the inherited mechanics are transcluded into the specializing spec at spec-time. This is how /staged-explore's runner pattern transcludes /explore's for-loop semantics.

### The 4 critique refinements (applied to the recommended drafts)

Critique stress-tested the recommended assembly and produced four constructive refinements:

1. **Specialization-as-transclusion clarification** — make the inheritance pattern explicit in /navigation's Components section. The Enumerate component transcludes /explore's mechanics; no runtime cross-discipline invocation. Cross-reference /explore's spec by absolute path.

2. **"No selection" downstream consumption note** — /navigation's Output section specifies what happens when the user declines to select. The route map is returned without a chosen route; /meta-loop's assess phase treats this as "no traversal move taken this round" and either re-invokes /navigation or pauses the loop. Re-invocation re-enumerates (per /explore's idempotency-within-invocation).

3. **/meta-loop update extended to 2-3 sentences** — the phase merge is the primary change, but /meta-loop's existing sentence "Selection presents HIGH/MEDIUM options, user picks" also needs updating (selection is now /navigation's concern). The full update is 2-3 sentences, not 1.

4. **Vocabulary alignment note** — B-refined aligns with the **selection-sense** of "navigation" (enumerate-and-choose), not the **movement-sense** (drive-toward-destination). Movement-actuation stays with the runner per the NOT-list. The Changes-from-Prior section clarifies this so users don't expect /navigation to actuate routes.

### /meta-loop's spec update

Before:
> "Phases per step: (1) Probe with MVL+ on active frontier → (2) See with Navigation on latest inquiry → (3) Select Explicitly (present HIGH/MEDIUM options, user picks) → (4) Assess Traversal Signals."

After:
> "Phases per step: (1) Probe with MVL+ on active frontier → (2) **Navigate** (the restructured /navigation includes select as Component 4; selection is human-mediated at v1) → (3) Assess Traversal Signals."

Plus a 1-2 sentence supporting note clarifying that the design philosophy is preserved — selection is still explicit, still human at v1, with a clear path to autonomous selection at L3+ — and that movement (actuating the chosen route) remains meta-loop's job after /navigation produces a selection.

### Concrete drafts (ready for adoption)

This inquiry's archived `innovation.md` contains the full draft for /navigation's restructured spec (Identity / Components / Process / Quality / Output sections). The archived `critique.md` contains the 4 refinements. Together, they constitute the adoption package.

Section-by-section summary:

- **Identity** — verb-meaning (specialization of /explore + 4-component composition); 5-entry NOT-list (movement-actuation; meaning-extraction; mechanism-modeling; partition; novelty-generation); upstream-precondition (depends on known state input); vocabulary alignment note.
- **Components** — Enumerate (transcludes /explore-of-routes); Label (16-type taxonomy); Guide (adaptive per-route guidance + continuation notes; the unique contribution); Select (human-mediated cognitive step; "no selection" valid output).
- **Process** — Step 0 declarations (cognitive-commitment-mode: open; territory-type: next-move-space; state-source; entry-point; resolution-level; depth-level; selection-mode); Steps 1-4 execute components in order; Step 5 outputs `navigation.md`.
- **Quality** — 5 named failure modes (selection-without-options-shown; movement-bleed; guide-as-meaning; premature-narrowing; inherited /explore failure modes including open→closed drift); coverage criteria; self-assessment output (PROCEED / FLAG / RE-RUN).
- **Output** — Route-card map structure (per-route fields); Selection result (chosen-route-ID or "no selection"); Telemetry; Frontier (deferred + excluded routes with reasoning).

## Next Actions

### MUST

- *None.* No critical-weight user-confirmation gate. The design is structurally complete.

### COULD

- **What:** Adopt B-refined — rewrite /navigation's spec per the drafts; update /meta-loop's spec (2-3 sentences); preserve iter-1 /navigation as historical reference.
  - **Who:** user (or maintainer authorized to edit `homegrown/`).
  - **Gate:** none (adoption-ready).
  - **Why:** addresses the structural overlap with /explore-of-routes; honors the user's intuition; aligns vocabulary with everyday meaning; preserves adaptive guidance as /navigation's unique contribution; provides a clear path to autonomous selection at L3+.

- **What:** Preserve as design documentation; do not edit canonical files yet.
  - **Who:** user.
  - **Gate:** none.
  - **Why:** allows further deliberation; iter-1 /navigation remains the canonical state.

- **What:** Adopt the minimum-change fallback (A+D).
  - **Who:** user.
  - **Gate:** user prefers low migration cost.
  - **Why:** A+D keeps iter-1 /navigation as-is + adds a vocabulary clarification note at the top of /navigation's spec. Doesn't address the structural overlap with /explore-of-routes; doesn't honor the user's intuition; doesn't preserve adaptive guidance as a uniquely-/navigation contribution. Structurally weaker; available if migration cost is the decisive factor.

- **What:** Adopt B-refined with shape variations.
  - **Who:** user (specifies variations).
  - **Gate:** user prefers specific shapes.
  - **Why:** ALTERNATE shapes available — α-MIN (shorter spec sections); β-1LINE (single sentence /meta-loop change without supporting paragraph).

### DEFERRED

- **What:** Promote the deferred shapes from this inquiry (α-RICH: multi-domain examples; γ-RICH: long Changes section + cross-reference table).
  - **Gate:** multi-domain /navigation use cases accumulate OR migration confusion observed.
  - **Why (if revived):** richer examples support broader adoption.

- *All prior inquiries' deferred items remain active.*

## Reasoning

The user's structural intuition — that /navigation's enumerate-half IS /explore over the route-space — is correct at the cognitive-operation level. Exploration verified this directly: the operations match; only the territory and labeling vocabulary specialize.

The user's full proposal — "/navigation = /explore + select-with-movement" — required two refinements:

- **Movement is the runner's job, not /navigation's.** The discipline-runner separation is structural; absorbing movement-actuation into /navigation would conflate two layers. The user's "with movement" was likely a conflation; /navigation gets select (cognitive step) but not movement (actuation).
- **Adaptive guidance is /navigation's unique contribution.** Exploration's jump scan found this. /navigation has THREE structural additions beyond /explore-of-routes (label + guide + select), not just one (select).

The minimum-change alternative (A+D: status quo + vocabulary note) was preserved as user-preference fallback. The structural argument for B-refined is stronger: it addresses the /explore-of-routes overlap that the user named; it aligns vocabulary with everyday meaning of navigation; it preserves the adaptive-guidance contribution; it sets up a smoother autonomy-path (selection is already in the discipline at v1; autonomy increases the role at L3+ without requiring restructure).

/meta-loop's cascade is bounded: 2-3 sentences in the phase-list + selection-mechanism note. The design philosophy (human-mediated selection at v1; explicit-not-implicit; path to autonomous) is preserved. Movement-actuation remains meta-loop's job after /navigation produces a selection.

Killed candidates (during critique and innovation): no-spec-rewrite (commits to status quo without addressing the structural issue); section-inversion of /navigation's Components (must enumerate before selecting); cross-discipline runtime invocation (would break workspace invariant); two-discipline split (/enumerate-routes + /select-move — over-decomposes; loses adaptive guidance as a unified contribution); absorbing /navigation into /explore (loses adaptive guidance entirely).

Survival-bias re-check on the structural-grounds kills: all verified structural; none on discomfort grounds.

## Open Questions

### Monitoring

- *Does the adaptive-guidance failure mode (guide-as-meaning) actually fire?* Recognition signal: per-route guidance describes conceptual role instead of operational continuation. After three or more /navigation runs, check whether guidance crosses this line.

- *Is the vocabulary alignment achieved?* If users continue to expect /navigation to actuate routes (movement-bleed expectation), the vocabulary alignment is partial. Refinement trigger: 2+ users report this expectation; consider stronger framing in /navigation's spec.

### Refinement Triggers

- *Multi-domain /navigation use cases accumulate.* Activates α-RICH.
- *Migration confusion observed.* Activates γ-RICH (long Changes section + cross-reference table).
- *Autonomous mode-selection ships at L3+.* /navigation's select component activates its autonomous-selection path; spec is forward-compatible already.

### Research Frontiers

- *All prior /explore-thread research frontiers carry forward:* persistent-state /explore variant; /parallel-loops runner; full discipline-spec restructure; cognitive-operation taxonomy across all 7 disciplines.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
/MVL+
u said


The /explore vs /navigation boundary, and the nav_north_star.md vocabulary issue
/navigation's iter-1 definition is: enumerate next-move routes from a completed cycle's state, producing a typed-route map across the 16-type taxonomy. This is perception-only — /navigation lists where you could go next; it does not surface what's in a territory.

/explore's iter-2 definition is: purposive open-mode surfacing of a territory's contents, producing a confidence-tagged map of surfaced items. This is map-building — /explore brings into view what's there, not what's-next-to-do.

The boundary is clean and operational: surfacing-what-exists is /explore; enumerating-next-moves-from-known-state is /navigation. They serve different cognitive purposes at different points in an inquiry's lifecycle.


i feel like this is a sign navigation is wrongly defined? navigation can be defined as

exploring concepts +  MVL+  of what concept should be next focus , and with what movement


does this makes better sense? i think all this time with navigation we were confusing it's explore part with sth. but it is just explore .. and select..
```

</details>
