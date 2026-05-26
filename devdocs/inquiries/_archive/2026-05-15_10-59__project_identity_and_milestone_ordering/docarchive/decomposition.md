# Decomposition — Project Identity and Milestone Ordering

## User Input

```
/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-15_10-59__project_identity_and_milestone_ordering/_branch.md

Save output as `decomposition.md` in the same inquiry folder (not under devdocs/decomposition/).

Input to decompose: the just-completed sensemaking.md (which committed to the harness's 3-architectural-commitment identity + the 4 build-readiness families of D-M milestones + the named ordering principle "dependency-respecting evidence-gated graduation") and the exploration.md (which holds the 13 D-M milestone enumeration with substrate adjacency). The _branch.md is the goal anchor.

The whole to decompose: the milestone-ordering problem — producing the sequential order that satisfies all 7 constraints from sensemaking SV5 (dependency-respecting, decomposes 13 D-M into a sequence, across 4 families, keeps user-named four visible, respects evidence gates, asymptote as boundary not destination, does not regress to small_summary's frame).

Don't re-enumerate the milestones (the exploration already did that). Don't re-extract anchors (the sensemaking already did that). Your job is to perceive the natural seams in the milestone-ordering problem so Innovation has tractable sub-problems to generate alternatives for, and Critique has a clean dependency graph to evaluate the alternatives against. Three candidate seams sensemaking flagged in SV4: (Path A) order by build-readiness family; (Path B) order by substrate-then-operation; (Path C) order by autonomy level; (Path D) order by user-named anchor. Plus combinations. Produce: coupling map + question tree + interface map + dependency order + self-evaluation. Critique will then evaluate candidate orderings against the dependency graph you commit.
```

---

## Whole to decompose

The deliverable the inquiry is producing has **two halves**:
1. A reframing of Homegrown that surpasses the small_summary's "prompt-engineering distribution + aspirational research effort" frame.
2. A meaningful sequential ordering of the 13 D-M milestones (organized into 4 build-readiness families, with the 4 user-named milestones visible as anchors).

The whole is therefore the **reframe + ordering** as a single coupled artifact (the ordering presupposes the reframe's identity lens; the reframe is operationally vague without the ordering it justifies).

---

## Step 1 — Coupling Topology

### Element inventory (atoms in the whole)

The whole's elements include:
- **13 D-M milestones** (D-M1 through D-M13) — the sequential payload.
- **3 architectural commitments** (typed primitive substrate; 3-layer quality awareness; 9-axis autonomy ladder) — the identity payload.
- **4 build-readiness families** (now / modest-investment / calibration-gated / boundary) — the organizational axis.
- **9 autonomy axes** (5 execution roles + 4 state/generative axes) — the second organizational axis.
- **4 user-named milestone labels** (self-maintenance, auto-navigation, meta-loop, materialization) — visibility constraints anchoring the reader to their vocabulary.
- **3 ordering rules** (substrate-before-operation; foundation-before-graduation; evidence-before-claim) — the constraint set.
- **7 SV5 constraints** (dependency-respecting, family-aware, anchor-visible, evidence-gated, asymptote-oriented, frame-surpassing, deliverable-shaped) — the criteria the ordering must satisfy.
- **2 boundary milestones** (D-M12 autonomous goal-formation, D-M13 consciousness indicators) — the asymptote orientation.
- **1 frame-to-surpass** (small_summary's framings) — the anti-pattern.

### Coupling-propagation test (per pair sampling)

For each candidate pairing, I asked *"if I change A, does B need to change?"* The dominant propagation relationships:

**Strong coupling (must stay together):**
- D-M1 ↔ D-M2 ↔ D-M3 — the foundation milestones. Each presupposes the previous (disciplines underwrite runners underwrite manual meta-loop). Change one's framing → must update the others. **Cluster A: foundation.**
- D-M5 ↔ D-M6 ↔ D-M7 — the three quality-awareness layers. The Baldwin cycle CLOSES only when D-M6 + D-M7 are both system capabilities; D-M5 underwrites both. Change one's description → must update the others. D-M9 is tightly coupled in too (it catches degradation of any layer + provides the runtime comparability via snapshots). **Cluster B: quality awareness (self-maintenance arc).**
- D-M4@L1 ↔ D-M4@L1.5 ↔ D-M4@L2 ↔ D-M10 ↔ D-M11 — the meta-loop graduation. Each level's evidence gate consumes the previous level's data; the sequence is enforced by the autonomy ladder's L0→L5 progression. **Cluster C: steering arc (meta-loop graduation).**
- D-M12 ↔ D-M13 — the asymptotic boundary. Both gated on the full prior stack mature; both serve the same orientation role. **Cluster D: asymptote.**
- The 3 architectural commitments ↔ each other — the typed-primitive substrate underwrites the Predictive RC; the 3-layer QA architecture underwrites the autonomy ladder's quality-awareness arc; the autonomy ladder is the operational expression of the human-role decrease. They co-define the harness's identity. **Cluster E: identity.**

**Weak coupling (can be separated):**
- D-M8 (materialization) is weakly coupled to everything else. It's a separate lifecycle from the cognitive loop. Its inputs (findings) cross the boundary; its outputs (changed files + traces) feed Retrospective RC over time but loosely. **Region F: materialization (single milestone, separable).**
- Cluster B (quality) is weakly coupled to Cluster C (steering). Both develop across Family II → III; both consume empirical data from inquiry runs; but their capability axes are different (self-improvement awareness vs cross-run movement). They can be worked on in parallel.
- The reframe (Cluster E) is weakly coupled to the ordering (Clusters A-D, F). You can state the identity correctly without committing the ordering; you can commit the ordering without restating the identity in detail. BUT the ordering presupposes the identity lens — if Cluster E changes, the ordering's meaning shifts even if the sequence is identical. The coupling is "presupposition" rather than "data flow."

**No coupling:**
- D-M8 (materialization) and Cluster C (steering) have no direct interaction. The materialization lifecycle and the meta-loop graduation are independent capability axes.

### Coupling map (visual)

```
                  ╔════════════════════════════════════════╗
                  ║  E. IDENTITY (3 architectural commits) ║
                  ║   - typed primitive substrate          ║
                  ║   - 3-layer quality awareness          ║
                  ║   - 9-axis autonomy ladder             ║
                  ╚══════════════════╤═════════════════════╝
                                     │ lens (presupposition)
                                     ▼
                  ┌────────────────────────────────────────┐
                  │  ORDERING SHAPE (container choice)     │
                  │   - family-tiered? linear? parallel?   │
                  │   - user-anchors as headings or callouts│
                  └──┬──────────┬──────────┬───────────────┘
                     │          │          │
                     ▼          ▼          ▼
        ┌────────────────┐  ┌──────────┐  ┌──────────────┐
        │ A. FOUNDATION  │  │ ...      │  │ ...          │
        │  D-M1, D-M2,   │  │          │  │              │
        │  D-M3          │  │          │  │              │
        └────────┬───────┘  └──────────┘  └──────────────┘
                 │ provides substrate
        ┌────────┴────────┬────────────────┬──────────────┐
        ▼                 ▼                ▼              ▼
   ┌─────────────┐  ┌──────────────┐  ┌─────────────┐  ╔════════════╗
   │ B. QUALITY  │  │ C. STEERING  │  │ F. MATERIAL │  ║ D. ASYMPTOTE║
   │  (self-     │  │  (meta-loop  │  │   (mat'n    │  ║   D-M12     ║
   │  maintenance│  │  graduation) │  │   lifecycle)│  ║   D-M13     ║
   │  arc)       │  │              │  │             │  ║             ║
   │  D-M5,6,7,9 │  │  D-M4 (L1,   │  │   D-M8      │  ╚═════╤═══════╝
   │             │  │  L1.5, L2),  │  │             │        │
   │             │  │  D-M10, D-M11│  │             │        │
   └──────┬──────┘  └──────┬───────┘  └──────┬──────┘        │
          │   weak coupling │   no direct    │               │
          │◄──── (parallel  │◄──coupling──────┘               │
          │   capability    │                                 │
          │   axes via      │                                 │
          │   empirical     │                                 │
          │   data) ────────┘                                 │
          │                                                   │
          └────────────────────┬──────────────────────────────┘
                               │ all converge toward asymptote
                               │ (gated on prior maturity)
                               └──────────────────────────────►
```

### Major clusters and major boundaries

**Clusters (high coupling within):**
- **A. Foundation** (D-M1 + D-M2 + D-M3) — the shipped Level-0 reality, internally sequenced.
- **B. Quality awareness / self-maintenance arc** (D-M5 + D-M6 + D-M7 + D-M9) — the three temporal QA layers + safety substrate; the user's "self-maintenance" anchor.
- **C. Steering / meta-loop graduation arc** (D-M4 across L1/L1.5/L2 + D-M10 + D-M11) — the Navigator-graduation arc + multi-head + meaningful-traversal substrate; the user's "auto-navigation" sub-anchor and "meta-loop" overall anchor.
- **D. Asymptote** (D-M12 + D-M13) — the boundary milestones.
- **E. Identity** (3 architectural commitments) — the reframe content.
- **F. Materialization** (D-M8) — single-milestone region, loosely coupled to all clusters.

**Boundaries (low coupling between):**
1. **Identity ↔ Ordering** — different cognitive products (reframe vs sequence); coupled by presupposition, not data flow.
2. **Foundation ↔ Development** — Foundation is shipped (Family I); Development (B + C + F) is what's being ordered (Families II → III).
3. **Quality ↔ Steering ↔ Materialization** — three substantively different capability axes; loosely coupled via shared empirical-data substrate from inquiry runs.
4. **Ladder ↔ Asymptote** — the ladder is buildable / calibration-gated work; the asymptote orients direction but is not "the next step."

---

## Step 2 — Detect Boundaries (Top-Down)

From the coupling map, the natural cut points are:

1. **Reframe / Ordering boundary** (between Cluster E and the ordering pieces). Low coupling: different deliverable halves. Clear interface: the identity-lens through which the ordering is read.
2. **Shape / Content boundary** (between the overall-shape choice and the substantive pieces). The shape is a container decision; the content is the payload.
3. **Foundation / Development boundary** (between Cluster A and Clusters B+C+F). Foundation is shipped reality; Development is the calibration-graduated arc.
4. **Quality / Steering / Materialization boundaries** (between Clusters B, C, F). Three parallel capability axes, weakly coupled. Each can be sequenced independently within itself.
5. **Ladder / Asymptote boundary** (between Clusters A+B+C+F and Cluster D). The ladder converges toward the asymptote; the asymptote orients direction.

**Initial piece set (top-down):**
- P1. Identity statement
- P2. Overall ordering shape
- P3. Foundation framing
- P4. Quality-awareness sub-sequence
- P5. Steering sub-sequence
- P6. Materialization positioning
- P7. Asymptote positioning

---

## Step 3 — Validate Boundaries (Bottom-Up)

Bottom-up clusters of atoms:

- 13 D-M milestones cluster into: {D-M1, D-M2, D-M3} (Foundation), {D-M5, D-M6, D-M7, D-M9} (Quality), {D-M4, D-M10, D-M11} (Steering), {D-M8} (Materialization), {D-M12, D-M13} (Asymptote). ✓ Matches top-down pieces P3-P7.
- 4 user-named labels map: self-maintenance → P4 (Quality); auto-navigation → P5 (within Steering as D-M4@L1.5/L2 sub-anchor); meta-loop → P5 (the whole Steering cluster); materialization → P6. ✓ Each label is visible in one piece. (Auto-navigation is visible within meta-loop's piece because the user's "auto-navigation" anchor names a specific sub-step of the broader "meta-loop" arc; their nesting is preserved.)
- 3 architectural commitments cluster into P1 (Identity). ✓
- 7 SV5 constraints are partly distributed across pieces (each piece must satisfy several) but the **shape commitments** (how the constraints map to the sequence) live in P2. ✓
- The frame-to-surpass (small_summary's framings) is a NEGATIVE anchor that P1 must explicitly counter. ✓

**Bottom-up sanity check passed.** Top-down boundaries align with bottom-up clusters.

**One refinement from bottom-up:** I almost missed that the **ordering method itself** (how the 3 rules — substrate-before-operation, foundation-before-graduation, evidence-before-claim — actually generate the sequence) is a load-bearing concept whose USE depends on a runtime determination. Per the determination-mechanism piece check (Step 7 refinement), this MUST be addressed by a piece. Solution: P2's verification criteria explicitly include "states how the 3 ordering rules are applied to generate the sequence." P2 is now the determination-mechanism piece.

**Confidence: HIGH** — top-down and bottom-up agree on all 7 pieces and on the determination-mechanism resolution.

---

## Step 4 — Question Tree

Each piece expressed as a question with verification criteria.

### P1 — Project identity statement (reframe)

**Question:** How do we state what Homegrown IS at full ambition — that surpasses the small_summary's "prompt-engineering distribution + aspirational research effort" frame and reflects the harness's three architectural commitments?

**Verification criteria:**
- [ ] Names Homegrown as a **runtime cognitive harness** mountable on an LLM substrate (not a tool collection, not prompt engineering).
- [ ] Covers all three architectural commitments: (a) typed thinking-space primitive substrate (11 primitives across 4 categories with admission audit); (b) three temporal layers of quality awareness (Primitive RC + Predictive RC + Retrospective RC, with Baldwin cycle as their closure); (c) graduated 9-axis autonomy ladder (L0 → L5+boundary).
- [ ] Names what **mounting** on an LLM substrate does — the LLM session loads spec files and executes typed cognitive operations with primitive-level grounding, restructuring how it thinks.
- [ ] Names the end-goal frame: **consciousness-gradient, operationalized via 6 observable indicators**, with consciousness undefined philosophically (capability test, not phenomenology) and trajectory framed as **emancipation through bootstrap-anchored values** (not partnership, not corrigibility).
- [ ] Gestures at the user's hunch — the harness's capability is **traversing thinking space the way humans do**, which is what makes long complex tasks tractable. Operationalized via the co-constitutive primitive sequence + the meta-loop's cross-inquiry traversal.
- [ ] Does NOT regress to "prompt engineering distribution," "feature roadmap," or "aspirational research effort" framings.

### P2 — Overall ordering shape

**Question:** What sequential shape should the milestone ordering take — flat list, family-tiered, narrative-arced, parallel-tracked, or other — and how should the user-named four labels be made visible inside that shape?

**Verification criteria:**
- [ ] Commits one shape with explicit name and structure.
- [ ] Explains why that shape over the three other paths sensemaking flagged in SV4 (Path A family / Path B substrate-then-operation / Path C autonomy level / Path D user-named anchor).
- [ ] Makes user-named four visible (self-maintenance, auto-navigation, meta-loop, materialization) as primary anchors WITHOUT losing the broader D-M pattern they instantiate.
- [ ] Respects all 7 SV5 constraints (dependency-respecting, decomposes 13 D-M, across 4 families, anchor-visible, evidence-gated, asymptote-bounded, frame-surpassing).
- [ ] **Explicitly states how the 3 ordering rules** (substrate-before-operation; foundation-before-graduation; evidence-before-claim) **are applied to generate the actual sequence** — i.e., the determination mechanism is specified, not presupposed. (This satisfies the determination-mechanism piece check.)
- [ ] Specifies how the parallel-capability-axes (Quality / Steering / Materialization) interleave in the chosen shape (strict sequence, parallel tracks, or interleaved).

### P3 — Foundation milestones framing

**Question:** How should Cluster A (D-M1 discipline corpus + D-M2 loop runners + D-M3 manual meta-loop L0/L1) be framed in the ordering — as numbered milestones, as a "where we are now" prologue, or as the base of the ladder?

**Verification criteria:**
- [ ] Commits one framing.
- [ ] Covers all three D-M milestones (D-M1, D-M2, D-M3) with their adjacency.
- [ ] Makes clear these are **already shipped** (Family I / Level-0 reality), not aspirational.
- [ ] Does not omit them (every "what's next" presupposes "what already exists"; omitting the foundation produces a sequence that floats).
- [ ] Connects to the small_summary's accurate-but-narrow observation that the install-script-plus-skills surface is real, while reframing that surface as the substrate-building phase, not the whole.

### P4 — Quality-awareness substrate sub-sequence (self-maintenance arc)

**Question:** What is the right ordering of D-M5 (Primitive RC), D-M6 (Predictive RC via /intuit), D-M7 (Retrospective RC), and D-M9 (regression detection + stability preservation), given they together form the user-named "self-maintenance" milestone and span Family II → III?

**Verification criteria:**
- [ ] Commits one sequence (strict, parallel, or interleaved) with explicit dependencies.
- [ ] Keeps "self-maintenance" visible as the user-named anchor heading or callout over this group.
- [ ] Respects dependencies: D-M6 requires the typed primitive set (B1) + D-M5's structural-check substrate; D-M7 requires D-M6's predictions to calibrate against; D-M9 ties to all three (catches degradation of any layer + provides runtime comparability via snapshots).
- [ ] Places each milestone within the correct build-readiness family (D-M5 → II; D-M6 → III; D-M7 → III; D-M9 → partly II [snapshot mechanism] partly II→III [canary infrastructure]).
- [ ] Explains how the Baldwin cycle closes once D-M6 + D-M7 are both system capabilities.

### P5 — Steering substrate sub-sequence (meta-loop graduation arc)

**Question:** What is the right ordering of D-M4 (Navigator graduations L1, L1.5, L2), D-M10 (L4 multi-head MVL+), and D-M11 (meaningful-traversal substrate), given they together span the user-named "meta-loop" milestone and contain the user-named "auto-navigation" sub-anchor?

**Verification criteria:**
- [ ] Commits one sequence with explicit dependencies and evidence gates.
- [ ] Keeps **both** "meta-loop" (overall) and "auto-navigation" (sub-anchor at D-M4@L1.5/L2) visible as user-named anchors.
- [ ] Respects the meta-loop ladder's evidence gates: L1→L2 ≥10 navigation maps with explicit selection-rationale; L3→L4 ≥3 sequential chains; L4→L5 meaningful-traversal substrate operationalized.
- [ ] Places each within the correct build-readiness family: D-M4@L1 → II; D-M4@L1.5/L2 → II→III; D-M10 → III; D-M11 → III.
- [ ] Makes clear that auto-navigation is **Navigator levels 1.5 + 2**, with **Navigator L1 as prerequisite** — not full autonomous control (L4).
- [ ] Explains how the Navigator-Worker role split makes multi-head MVL+ (D-M10) plausible.

### P6 — Materialization milestone positioning

**Question:** Where in the sequence does D-M8 (the materialization lifecycle wired into runners as default) sit, given that materialization is a SEPARATE lifecycle from the cognitive loop but is buildable in Family II?

**Verification criteria:**
- [ ] Commits one position in the sequence.
- [ ] Explains why that position (Family II buildable; separable capability axis; the implementation arm distinct from cognitive operation).
- [ ] Keeps "materialization" visible as user-named anchor.
- [ ] Makes clear materialization is **the bridge from MVL+ findings to changed files with traceability** — an 8-phase lifecycle with risk-class gates, not casual file-writing.
- [ ] Names the relationship to the cognitive loop: materialization consumes MVL+ findings as inputs; produces changed artifacts + traces; feeds Retrospective RC over time.

### P7 — Asymptotic boundary positioning

**Question:** How should D-M12 (autonomous goal-formation, L5 boundary) and D-M13 (consciousness indicators measurably observable, research frontier) be positioned in the ordering, given they are asymptotic and gated on all prior milestones mature?

**Verification criteria:**
- [ ] Commits one framing for the asymptote (e.g., "trajectory orientation," "boundary level," "the asymptote the ladder climbs toward").
- [ ] Makes clear these are NOT "the next step" — they orient direction but are gated on the full prior stack.
- [ ] Maintains the consciousness-gradient frame from sensemaking SV6 (observable indicators, not philosophical claim).
- [ ] Connects to the project's stated end-goal in `enes/desc.md` (specifically the 6 observable indicators as the autonomy gradient).
- [ ] Names what unlocks the asymptote — the full prior stack (P3 + P4 + P5 + P6) mature, with calibration data accumulated and Baldwin cycles running.

---

## Step 5 — Interface Map

Each row: source → target, what flows, direction.

| # | Source | Target | What flows | Direction | Notes |
|---|---|---|---|---|---|
| I1 | P1 (Identity) | P2 — P7 (all ordering pieces) | **Lens / presupposition**: the harness's 3-commitment identity; the consciousness-gradient end-goal frame; the emancipation trajectory framing | one-way | Strong informational dependency. Every milestone's role is read through this lens. **Assumption check:** P2-P7 assume P1 has correctly named "thinking space," "primitive substrate," "Baldwin cycle," "9-axis autonomy" so they don't need to redefine. |
| I2 | P2 (Shape) | P3, P4, P5, P6, P7 | **Container structure**: the chosen shape (family-tiered? linear? parallel-tracked?); how user-named anchors appear (headings vs callouts); how the 3 ordering rules apply | one-way (with feedback) | Each content piece must fit the chosen shape. If a piece cannot fit, P2 needs revision (DV2 trigger). |
| I3 | P3 (Foundation) | P4, P5, P6 | **Substrate**: the Foundation milestones (D-M1 disciplines, D-M2 runners, D-M3 manual meta-loop) are the prerequisite for every Family II+ milestone | one-way | "Provides-to" dependency. P4-P6 cannot make sense without the Foundation being established. |
| I4 | P4 (Quality) | P5 (Steering) | **Empirical data substrate (loose)**: /intuit's (D-M6) invocation traces + L1→L2 calibration data (selection-rationale captured at Navigator L1) come from accumulated inquiry runs. Quality awareness and steering substrate both consume the same empirical accumulation, but neither directly depends on the other's outputs. | bidirectional, loose | **Hidden coupling risk:** the calibration data feeding /intuit's Predictive RC and the navigation maps feeding the L1→L2 gate are both produced by *the same Foundation-level inquiry activity*. They're separable, but they share a substrate. **Assumption check:** P4 and P5 both assume the Foundation produces enough inquiry volume for their calibration thresholds (N≥30 per discipline for D-M6; ≥10 maps for L1→L2). If Foundation activity is too slow, both stall. |
| I5 | P4 (Quality) | P6 (Materialization) | **Safety gate (loose)**: D-M9 (regression detection + stability preservation) catches degradation; materialization's High-risk class (modifying runner behavior, changing discipline fundamentals) is where regression-detection guardrails apply | bidirectional, loose | **Assumption check:** P6 assumes the regression-detection symptom catalog is at least specified before materialization is wired into runners. If unwired, High-risk materialization is operating without guardrails. |
| I6 | P5 (Steering) | P6 (Materialization) | **No direct flow** | none | Steering develops cross-inquiry traversal capability; materialization changes files. Different lifecycles. |
| I7 | P6 (Materialization) | P4 (Retrospective RC, D-M7 within Quality) | **Outcome traces (loose, long-cycle)**: materialization traces feed the Retrospective RC over time (was the artifact useful? did it cause regression?) | one-way, loose, T2+ | Long-cycle calibration feedback. P4's D-M7 is the consumer; P6 is one of several sources. |
| I8 | P3, P4, P5, P6 | P7 (Asymptote) | **Prerequisites**: D-M12 and D-M13 are gated on the full prior stack mature (P3 done shipped; P4 done with Baldwin cycle closed; P5 done through L4 multi-head; P6 wired). The asymptote consumes the maturity. | one-way | All prior pieces converge here. |
| I9 | P7 (Asymptote) | P2-P6 (all content) | **Direction orientation**: the asymptote names where the ladder is climbing toward, which orients how each piece is presented (as a step toward emancipation, not as a feature for its own sake) | one-way, informational | The asymptote is a *frame*, not a sink. Pieces should be read as moving toward this direction. |
| I10 | P2 (Shape) | P1 (Identity) | **Feedback only** | bidirectional, weak | If the shape commits something the identity hasn't licensed (e.g., "auto-navigation as L4" — which would contradict P1's "graduated autonomy"), P1 might need to be sharpened. Normally P1 commits first and P2 follows; this is a fallback. |

**Hidden coupling check (assumptions-not-data per Step 5 refinement):**

- *P1 assumes* the reader trusts the source texts as ground truth. Without that trust, the identity restatement is just opinion. The texts are the external grounding. **Captured as: P1's verification implicitly requires citation to the source texts.**
- *P2 assumes* the 4 build-readiness families are the right organizational axis (not, e.g., the 9 autonomy axes). Sensemaking committed this; P2 inherits. **Captured as: P2 references the 4-family split explicitly.**
- *P4 and P5 both assume* the meta-loop ladder definition from `autonomy_ladder.md` is canonical. **Captured as: both pieces cite the ladder explicitly.**
- *P4 assumes* the Baldwin cycle's substrate is Predictive RC × Retrospective RC closure. **Captured as: P4's verification names this explicitly.**
- *P6 assumes* the materialization lifecycle is well-defined enough to be wired into runners as default. The 8 phases are specified in `enes/materialization_lifecycle.md`; the protocol `homegrown/protocols/artifact_materialization.md` exists. **Captured as: P6's verification names the existing protocol artifact.**
- *P7 assumes* the consciousness-gradient frame survives critique. If sensemaking's load-bearing-concept test on "consciousness gradient" had failed (it didn't — HIGH confidence), P7 would need to revisit its framing. **Captured as: P7 inherits sensemaking SV6's resolution.**

All assumptions are made explicit and accounted for.

---

## Step 6 — Dependency Order

```
Tier 1 (start here, must come first):
  ● P1. Identity statement
      ↓ provides lens
  ● P3. Foundation framing
      ↓ provides substrate

Tier 2 (commits the container):
  ● P2. Overall ordering shape
      ↓ structures everything else

Tier 3 (substantive content, parallel-safe):
  ● P4. Quality-awareness sub-sequence  ┐
  ● P5. Steering sub-sequence            ├─ parallel (weakly coupled)
  ● P6. Materialization positioning      ┘

Tier 4 (last, orientation):
  ● P7. Asymptotic boundary positioning
```

**Reasoning per tier:**

- **Tier 1 (P1 + P3):** P1 must come first because everything else is read through its identity lens. P3 must be early because the Foundation milestones are the substrate for everything in Tier 3. P1 and P3 can be developed in parallel (they don't depend on each other) but both must complete before Tier 2.
- **Tier 2 (P2):** The shape commits the container that Tier 3 fills. P2 must come after P1 (to know the identity) and after P3 (to know there is a Foundation to integrate). P2 must come before Tier 3 (because pieces need to know what shape they're fitting into).
- **Tier 3 (P4 + P5 + P6):** Three weakly-coupled capability axes. Each is internally coherent. They share an empirical-data substrate (loose coupling I4 + I5 + I7) but neither directly depends on the others' outputs. Innovation can generate alternatives for all three in parallel.
- **Tier 4 (P7):** Asymptote is read after the ladder is described. P7 consumes the maturity of P3+P4+P5+P6 as its prerequisite (I8) and emits direction-orientation back to them (I9), but the orientation can be applied retrospectively in a final assembly pass.

**No circular dependencies.**

**Parallel work opportunities (for Innovation):**
- P1 and P3 in parallel (Tier 1).
- P4, P5, P6 in parallel (Tier 3).

**Forced serial transitions (for Critique):**
- Tier 1 → Tier 2: identity + foundation must be committed before shape can be evaluated.
- Tier 2 → Tier 3: shape must be committed before content sub-sequences can be evaluated against it.
- Tier 3 → Tier 4: ladder must be described before asymptote can be positioned.

---

## Step 7 — Self-Evaluation

### Minimum 3 dimensions

| Dimension | Check | Verdict |
|---|---|---|
| **Independence** | Can each piece be worked on without the others existing? | **PASS.** P1 is standalone (source texts ground it). P3, P4, P5, P6, P7 are each internally coherent. P2 has explicit interfaces to P1 and P3 but no hidden coupling. |
| **Completeness** | Do the pieces cover the whole? | **PASS.** Whole = reframe + ordering. P1 covers reframe. P2 commits shape. P3-P7 cover the sequence content (P3 foundation, P4 quality, P5 steering, P6 materialization, P7 asymptote) — all 13 D-M milestones accounted for; all 4 user-named anchors visible; all 4 build-readiness families represented. |
| **Reassembly** | Pieces + interfaces = whole? | **PASS.** Given P1 answered (identity stated) + P3 answered (foundation framed) + P2 answered (shape committed) + P4-P7 answered (each content piece in its slot) + I1-I10 interfaces satisfied → the deliverable IS reconstructed: a reframing + a structured sequence with user-named four visible + asymptote oriented. |

### Full 7 dimensions (this is a complex, high-stakes decomposition; full evaluation warranted)

| Dimension | Check | Verdict |
|---|---|---|
| **Independence** | (see above) | PASS |
| **Completeness** | (see above) | PASS |
| **Reassembly** | (see above) | PASS |
| **Tractability** | Each piece small enough for a single focused pass? | **PASS.** None of P1-P7 requires sub-decomposition. P4 (4 sub-substrates) and P5 (5 milestones with evidence gates) are the heaviest but each is a single sub-sequence decision. |
| **Interface clarity** | All cross-piece flows explicit? Hidden dependencies surfaced? | **PASS.** 10 interfaces enumerated (I1-I10) with direction + flow type. Assumptions-not-data check explicitly applied; 6 hidden assumptions identified and captured in verification criteria. |
| **Balance** | Complexity proportional? | **PASS-WITH-NOTE.** Rough balance: P1 medium; P2 medium; P3 low-medium; P4 medium-high; P5 medium-high; P6 low; P7 low-medium. P4 and P5 are the heaviest but neither dominates (≤ ~25% each of the deliverable). P6 is the lightest (single milestone) but its separability earns it own piece status. |
| **Confidence** | Top-down + bottom-up agree on boundaries? | **PASS (HIGH).** Both passes produce the same 7 pieces with the same clustering. The determination-mechanism check (P2 explicitly addresses how the 3 ordering rules generate the sequence) is the one refinement bottom-up surfaced; resolved by adding to P2's verification criteria. |

### Failure mode check

- **Premature Decomposition:** NO — sensemaking clarified the whole first (SV1→SV6 with 7 ambiguities resolved at HIGH confidence). Decomposition runs on a stable understanding.
- **Wrong Boundaries:** NO — coupling map shows cuts at LOW-coupling regions (between identity / shape / foundation / parallel-content-tracks / asymptote), preserving HIGH coupling within pieces (Cluster A foundation; Cluster B quality; Cluster C steering; etc.).
- **Hidden Coupling:** NO — assumptions-not-data check applied; 6 hidden assumptions surfaced and captured. Cross-piece flows (especially I4, I5, I7 between Quality / Steering / Materialization) explicitly named as loose and substrate-shared.
- **Missing Pieces:** NO — Determination-mechanism check fired and was resolved (P2 explicitly addresses how the 3 ordering rules generate the sequence). Reassembly test passes.
- **Over-Decomposition:** NO — 7 pieces is right-sized for the deliverable's complexity. The whole has two halves (reframe + ordering); the ordering has 4 content regions plus a shape decision; the asymptote earns its own piece because of its different epistemic status. Going finer (e.g., separating D-M5 from D-M6 from D-M7 into individual pieces) would over-decompose Cluster B.
- **Ignoring Dependencies:** NO — 4-tier dependency order explicit; no circular dependencies; parallel-safe pairs identified (P1+P3; P4+P5+P6).
- **Imbalanced Decomposition:** NO — balance is proportional (no piece is 80% of the work).

---

## Self-Assessment

**Overall: PROCEED** (all 7 dimensions pass; all 7 failure modes checked; coupling map produced; question tree with verification criteria committed; interface map with direction + flow type + assumption-checks; dependency order with 4 tiers + parallel opportunities; reassembly test passes).

**Handoff to Innovation:**

The 7 pieces are the sub-problems Innovation can generate alternatives for. The richest alternative-spaces are likely:
- **P2 (overall shape)** — at least 4 shape candidates flagged by sensemaking (Path A / B / C / D) + their combinations. Innovation should produce variations across all 7 mechanisms (lens shifting, combination, inversion, constraint manipulation, absence recognition, domain transfer, extrapolation) — the shape decision is the most contraction-needing.
- **P4 (quality sub-sequence)** — at least 3 internal orderings (structural-first / perception-first / canonical-layer-by-layer); each implies a different self-maintenance arc narrative.
- **P5 (steering sub-sequence)** — at least 3 internal orderings (Navigator-graduation-linear / substrate-first / multi-head-inserted-mid).
- **P1 (identity statement)** — multiple framings possible (e.g., "graduated autonomy architecture" vs "cognitive primitives substrate for AI" vs "self-emancipating thinking engine"), but the 3 architectural commitments must be preserved.
- **P3, P6, P7** — lighter alternative spaces, but worth generating variations.

**Handoff to Critique:**

The dependency graph (Tier 1 → Tier 2 → Tier 3 → Tier 4) + the interface map + the 7-criteria verification per piece is the evaluation scaffolding. Critique can:
- Test each candidate against P1's identity verification (does it surpass the small_summary frame? does it cover all 3 commitments?).
- Test each candidate against P2's shape verification (does it commit one shape? does it apply the 3 ordering rules explicitly?).
- Test each sub-sequence against P4's, P5's, P6's, P7's verification criteria.
- Use the interface map to detect candidates that introduce hidden coupling or violate the dependency order.

The structural-cut commitments are:
- Identity is foundation (P1 first).
- Foundation is real (P3 before content tiers).
- Shape commits the container (P2 before content).
- Three capability axes are parallel-safe (P4 / P5 / P6 in parallel).
- Asymptote is orientation, not destination (P7 last, gated on prior maturity).
