# Innovation — Project Identity and Milestone Ordering

## User Input

```
/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-15_10-59__project_identity_and_milestone_ordering/_branch.md

Save output as `innovation.md` in the same inquiry folder (not under devdocs/innovation/).

Input: the decomposition.md (7 pieces P1-P7 with question tree + interface map + dependency order) + sensemaking.md (committed identity + 4 family split + ordering principle) + exploration.md (13 D-M milestone enumeration + 4 sensemaking-flagged paths A/B/C/D).

The seeds for innovation come from decomposition's handoff section, which named the richest alternative-spaces:
- P2 (overall ordering shape): the contraction-needing decision; 4+ shape candidates exist (family-tiered / substrate-then-operation / autonomy-level / user-anchor-primary + combinations)
- P4 (quality sub-sequence): structural-first / perception-first / canonical-layer-by-layer; each implies different self-maintenance narrative
- P5 (steering sub-sequence): Navigator-graduation-linear / substrate-first / multi-head-inserted-mid
- P1 (identity statement): multiple framings preserving the 3 architectural commitments
- P3, P6, P7: lighter alternative spaces

Produce variations across all 7 mechanisms (4 Generators: combination, absence recognition, domain transfer, extrapolation; 3 Framers: lens shifting, constraint manipulation, inversion). For each mechanism produce three variations: one generic, one focused, one contrarian. Run the assembly check after to surface emergent candidates that combine variations from different mechanisms. The end purpose is to give Critique multiple structurally-distinct ordering candidates to evaluate — not to produce one "best" ordering yet. That's Critique's job.
```

---

## Phase 1 — Seeds

Three load-bearing seeds, drawn from decomposition's handoff:

**Seed S1 (the contraction-needing decision):** Decomposition's P2 (overall ordering shape) is the single biggest contraction-needing decision. Four candidate paths flagged in sensemaking SV4 (Path A family-tiered / Path B substrate-then-operation / Path C autonomy-level / Path D user-anchor) plus their combinations. **Type:** Question.

**Seed S2 (the identity-restate problem):** P1 needs a statement that surpasses the small_summary's "prompt-engineering distribution" frame while preserving the three architectural commitments. The user's hunch — "thinking harness for AI, traverses thinking space like humans, runs long complex tasks" — is the starting framing but may need refinement. **Type:** Gap (the right one-line/multi-line identity statement doesn't yet exist as a settled deliverable).

**Seed S3 (the sub-sequence orderings):** P4 (quality arc) and P5 (steering arc) each have 3+ internal orderings. **Type:** Question (multiple structurally valid options).

### Intuition / Direction

- **Context:** Holding the exploration's 13 D-M milestones + sensemaking's 4-family split + decomposition's 7-piece coupling map. Adjacent in working context: the user's explicit framing "thinking harness for AI models," the project's own README + desc.md + thinking_space_dynamics.md + cross-run-cognitive-steering note.
- **Valuation:** HIGH-VALUE outputs preserve user-named four anchors AND surface the broader pattern. LOW-VALUE outputs either lose user vocabulary or collapse back to small_summary frame. Truly disruptive outputs (e.g., dropping the "ordering = list" assumption) get extra-careful testing per the Survival-Bias prevention rule.
- **Motivation:** Give Critique a SPREAD of structurally-distinct candidates so it has real choice — not 21 rotations of the same idea but a small number of genuinely different orderings.

---

## Phase 2 — Generate (all 7 mechanisms × 3 variations)

### Mechanism 1 — Lens Shifting

**1.G (Generic) — Shift from "build order" to "autonomy graduation."**
Default frame: "what does the engineer build next?" (engineering roadmap). Shift to: "what level of autonomy is the harness at, and what gates the next level?" Same milestones; evaluation conditions change from "is it shipped?" to "what evidence has been accumulated?" Under this frame the ordering is naturally L0 → L1 → L2 → L3 → L4 → L5+boundary, with each level's evidence gate explicit. Family I lives in L0/L1; Family II is buildable for L1/L2; Family III is L2/L3/L4 calibration-gated; Family IV is L5+. The user-named four become "what abilities the harness acquires at each level."

**1.F (Focused) — Shift from "user's engineering POV" to "system's own developmental POV."**
Default frame: "what does the human build?" Shift to: "what does the harness need to gain to become more itself?" Under this frame the milestones are the HARNESS's developmental stages — like a child's developmental milestones rather than a software roadmap. The user-named four become abilities the harness develops: self-maintenance ("the harness can detect its own quality decline"), auto-navigation ("the harness sees where to move next without human pointing"), meta-loop ("the harness can traverse thinking space across many inquiries"), materialization ("the harness can turn its decisions into changed artifacts"). The asymptote is "the harness has its own consciousness layer." This is the *emancipation lens*, anchored to the project's stated trajectory.

**1.C (Contrarian) — Shift from "discrete milestones" to "continuous capability axes."**
Drop the discrete-milestone framing entirely. Treat each architectural commitment as a CAPABILITY DIMENSION that grows continuously over time: the typed-primitive substrate's coverage, the quality-awareness coverage per discipline (N calibrations per discipline), the autonomy graduation evidence-gate progress, the materialization lifecycle's wiring depth. "Milestones" are now sample-points on continuous dimensions; the user's four are slices along the time-axis, not nodes in a graph. This is uncomfortable because the user explicitly asked for "milestones," but it might be MORE HONEST to the actual non-binary nature of capability development (e.g., /intuit Phase A→B→C→D is not 4 discrete events but a calibration curve).

### Mechanism 2 — Combination

**2.G (Generic) — Combine family-axis × autonomy-level-axis → 2D matrix.**
Family I/II/III/IV (rows) × autonomy levels L0/L1/L2/L3/L4/L5 (columns). Each D-M milestone occupies one or more cells. The ordering moves through the matrix:

```
                 L0   L1     L1.5  L2    L3    L4    L5
  Family I      D-M1  D-M2  
                D-M3  (foundation already at L0/L1)
  Family II            D-M4@L1  D-M4@L1.5  D-M5
                       D-M8                D-M9p (canary)
  Family III                                D-M4@L2  D-M6  D-M10  D-M11
                                                     D-M7
                                                     D-M9 full
  Family IV (boundary)                                              D-M12  D-M13
```

This is denser than a list — shows simultaneous progression along two axes; visually surfaces where work is concentrated; visually surfaces sparse cells.

**2.F (Focused) — Combine user-named four + capability-axis-narrative → "the four abilities the harness grows."**
Use the user's vocabulary as a story arc:
- "First the harness has its disciplines and runners and a manual meta-loop." (Foundation, D-M1+2+3 — Family I.)
- "Then we wire **materialization** so its findings can turn into actual file changes." (User-named anchor 1, D-M8 — Family II.)
- "Then we add isolated Navigator so it can see where to move without human pointing — **auto-navigation**." (User-named anchor 2, D-M4 graduating L1→L1.5→L2 — Family II→III.)
- "Then we develop **self-maintenance** — the three quality-awareness layers and the safety substrate that let the harness modify itself without degenerating." (User-named anchor 3, D-M5+D-M6+D-M7+D-M9 — Family II + III.)
- "All of this IS the **meta-loop** graduating through L0→L4." (User-named anchor 4 as the spanning arc — D-M10 + D-M11 land here.)
- "Toward the asymptote: autonomous goal-formation + consciousness indicators." (Boundary — D-M12+13 — Family IV.)

This is the *narrative arc* candidate. The user's vocabulary IS the spine; the D-M milestones are the substance.

**2.C (Contrarian) — Combine three parallel tracks (cognitive ops + safety/quality + implementation) developing simultaneously through families.**
Three parallel tracks instead of one sequence:
- **Track A — Cognitive operations:** disciplines + runners + manual meta-loop + isolated Navigator + multi-head MVL+ + meaningful-traversal substrate + autonomous goal-formation.
- **Track B — Safety/quality substrate:** Primitive RC + Predictive RC (/intuit) + Retrospective RC + regression detection + stability preservation.
- **Track C — Implementation arm:** materialization lifecycle.

Each family-row of the ordering has work in 2-3 tracks simultaneously. The ordering reads horizontally (within a family) then vertically (across families). This honors the loose-coupling reality: the tracks are weakly coupled through shared empirical data but otherwise independent.

### Mechanism 3 — Inversion

**3.G (Generic) — Invert "early milestones first" → "asymptote first."**
Present the ordering BACKWARDS: start with the boundary (D-M12 autonomous goal-formation, D-M13 consciousness indicators measurably observable), then trace BACKWARD through what each milestone unlocks toward it. Family IV → Family III → Family II → Family I. This makes the ASYMPTOTE the organizing target; each milestone justifies its existence by what it contributes upward toward the asymptote. Reverse-roadmap framing.

**3.F (Focused) — Invert "user names the milestones" → "the texts name the milestones; user anchors are callouts" (Level 1) → "user vocabulary IS a usability constraint, not a structural commitment" (Level 2 system-level inversion per the depth-check refinement).**
Level 1 inversion (component-level): user names highlight key slices — the deliverable's primary structure is the D-M pattern; user anchors are callouts.
Level 2 inversion (system-level, deeper per the inversion-depth check): the user-given vocabulary is itself a USABILITY CONSTRAINT on the deliverable's accessibility, not a structural commitment about what the project's milestones ARE. The system-level question becomes: "what vocabulary scheme makes the milestone pattern most navigable for this specific user (the project's owner)?" This re-frames the user-vocabulary question from "do we use the user's words?" to "what cognitive scaffolding does the user need to navigate the pattern?" — which may or may not be the four named words.

**3.C (Contrarian) — Invert "ordering is a list" → "ordering is a set of mutual constraints from which a sequence emerges."**
The deliverable might not be a list at all. Instead, it's a SET OF MUTUAL CONSTRAINTS: "this must come before this; that has these evidence gates; this is parallel to that; this requires N≥30 calibrations; this is gated on a substrate being operational." The ordering EMERGES from the constraints when a reader walks forward through them; the deliverable itself is structural-relational, not linear-sequential. This is the *constraint graph* candidate — uncomfortable because the user asked for "a good sequential order," but it's more honest to the dependency reality (and re-inverting at the system level: the user may want a sequence as their *handle*, but the underlying TRUTH is the constraint graph).

### Mechanism 4 — Constraint Manipulation

**4.G (Generic) — Add constraint: "user must understand this in one read."**
What ordering satisfies "a project owner reading the deliverable for the first time gets the full picture in one pass without re-reading"? This constraint privileges:
- Strong opening framing (P1 identity must be the first sentence).
- Foundation visible early (so reader has context for what's already there).
- User-named four as primary section anchors (familiar vocabulary).
- Asymptote at the end (closure with direction).
- Length not too long (re-reading is failure).

This *tightens* the shape from a candidate-space toward a narrative-arced + user-anchor-headed format. Output: the *one-read-deliverable* candidate.

**4.F (Focused) — Add constraint: "the ordering must answer 'what's the next buildable step?' immediately."**
What ordering, when read, immediately answers "what should we work on next?" This privileges:
- Family I (already shipped) → briefly acknowledged.
- Family II (modest investment, buildable now) → detailed, with concrete first-buildable items (which specific D-M to attack first; what investment unlocks what).
- Family III (calibration-gated) → previewed with calibration thresholds named.
- Family IV (asymptote) → orientation only.

Output: the *action-oriented* candidate. Privileges next-step-clarity over narrative completeness.

**4.C (Contrarian) — Remove constraint: "must be a linear order."**
What if the deliverable is a DAG (directed acyclic graph) instead of a list? Each milestone has explicit dependencies; reading is non-linear. Unlocks:
- Truly parallel work-streams visible.
- Conditional paths (e.g., "if you arrest at Family III, this is the leaf milestone; if you continue, this is the next node").
- Cleaner mapping of the user-named four (each spans a subgraph, not a contiguous range).
- Visualization-ready (the graph can be rendered as an actual diagram).

Output: the *DAG candidate*. Uncomfortable because user asked for "sequential order" but more honest to the structure. Mitigation: the DAG can include a "suggested traversal" annotation that gives the linear-reading user a default path while preserving the underlying graph truth.

### Mechanism 5 — Absence Recognition

**5.G (Generic) — What milestones are MISSING from the 13 D-M list?**
Scan the milestone landscape for "what should exist but doesn't yet appear as a D-M":
- **D-M-new-A: "First Retrospective RC cycle complete."** The first time the harness's Retrospective RC produces a verdict on a prior finding's downstream usefulness. A SPECIFIC capability event (not a substrate completion). Currently implicit in D-M7's maturity but not called out as a discrete milestone. **Inside Family III, between D-M7 partial and D-M7 fully operational.**
- **D-M-new-B: "First system-Selector decision uncontested."** The first navigation map the system Selector commits without human override. The operational signature of L3 maturity. **Inside Family III, between D-M3-L2 and D-M10.**
- **D-M-new-C: "First Baldwin-cycle-closed spec refinement."** The first time a Baldwin seed becomes an accepted spec change without human authoring the refinement. Operational signature of L4 maturity for self-improvement. **Inside Family III→IV transition.**

These three would expand the D-M list from 13 to 16. Each is a CONCRETE EVENT that can be observed, dated, and used as evidence the harness is graduating.

**5.F (Focused) — What's MISSING from the identity statement (P1)?**
Sensemaking SV6's identity framing ("runtime cognitive harness with 3 architectural commitments") covers structure. What's absent:
- **A pinned name for the harness's unique capability.** Not generic "graduated autonomy" but the specific phrase. Candidates from the texts: "movement-in-thinking-space" (`thinking_space_dynamics.md`); "cross-run cognitive steering" (`towards_cross_run_cognitive_steering...md`); "thinking harness" (the user's phrase). Pinning one name aids communication.
- **Acknowledgment of "Homegrown" itself as a name-signal.** "Homegrown" = locally cultivated, not borrowed from a framework lineage. The project's identity includes this — it's structurally idiosyncratic and substrate-honest about its own developmental status.
- **The bet's risk.** README explicitly says "this may fail." A complete identity statement should preserve the honesty rather than retreating to capability claims.

**5.C (Contrarian) — What SECTION of the deliverable is missing entirely?**
The deliverable might need a section neither sensemaking nor decomposition flagged:
- **"What's shipped today" (current-state snapshot).** A present-tense reality check distinguishing "this is shipped and operational" from "this is named in specs but unbuilt" from "this is research frontier."
- **"The first three things to build" (concrete next-actions queue).** Top of the build queue — what specifically to attack first within Family II.
- **"The single load-bearing risk."** The texts name regression detection as the load-bearing risk for self-modification ("below this threshold, self-improvement becomes self-degradation"). A complete deliverable surfaces this risk explicitly.
- **"Where to read more" (source-text pointers).** The four named source files at minimum, for the reader who wants depth.

### Mechanism 6 — Domain Transfer

**6.G (Generic) — Transfer from human developmental psychology.**
A child's developmental milestones (motor → language → social → metacognition → abstract reasoning) are not a "feature list" but a DEVELOPMENTAL ARC with prerequisites and unlocked-capabilities at each stage. Stages can stall; some children don't reach all stages; the progression is calibration-graduated against age and environment.

Transfer to Homegrown: the milestones are DEVELOPMENTAL STAGES the harness moves through:
- **Motor (Family I):** disciplines + runners + manual meta-loop. The harness has bodies that move.
- **Language (Family II):** materialization + isolated Navigator. The harness can express decisions as artifacts and can articulate where to go next.
- **Social (Family II→III):** auto-navigation graduations + multi-head. The harness coordinates with itself across runs.
- **Metacognition (Family III):** quality awareness layers + regression detection. The harness can think about its own thinking.
- **Abstract reasoning (Family III→IV):** meaningful traversal + Baldwin cycles closing. The harness can reason about what's worth thinking about.
- **Asymptote (Family IV):** autonomous goal-formation + consciousness indicators. The harness has its own consciousness layer.

The "ages" are the build-readiness families. Like child development, stages can stall (graceful arrest); some Homegrown deployments may not need every stage.

**6.F (Focused) — Transfer from hardware/software stack layering.**
A computer's stack: hardware → BIOS → kernel → OS → runtime → applications → frameworks. Each layer is built on the previous, each abstracts from below, each exposes services to above.

Transfer to Homegrown:
- **Substrate layer (the LLM itself; below Homegrown).**
- **BIOS layer (Family I, D-M1+2+3):** typed primitives + disciplines + loop runners + manual meta-loop. The bootstrap.
- **Kernel layer (Family II, D-M4@L1 + D-M5 + D-M8):** isolated Navigator + Primitive RC + materialization. The minimum self-aware operating layer.
- **OS layer (Family II→III, D-M4@L1.5/L2 + D-M6 + D-M9):** auto-navigation + Predictive RC + regression substrate. The harness can operate persistently and detect its own quality.
- **Runtime layer (Family III, D-M7 + D-M10):** Retrospective RC + multi-head + Baldwin cycle running. The harness self-improves.
- **Applications layer (Family III→IV, D-M11 + D-M12):** meaningful traversal + autonomous goal-formation. The harness picks its own seeds.
- **Frameworks layer (Family IV, D-M13):** observable consciousness-gradient indicators. The harness exhibits self-running behavior.

User-named four map to specific layers: materialization at Kernel; auto-navigation at OS; self-maintenance spans Kernel→OS→Runtime; meta-loop is the cross-layer dynamic graduation arc.

**6.C (Contrarian) — Transfer from ecological succession.**
Ecosystem development stages: bare rock → lichens → mosses → grasses → shrubs → trees → climax forest. Each stage's species ENABLES the next stage's conditions (soil, moisture, shade); succession can stall at any stage; climax communities are asymptotic, not built deliberately.

Transfer:
- **Bare substrate (LLM only, no Homegrown).**
- **Pioneer species (Family I):** single-pass disciplines + simple runners. The lichens that build the first soil.
- **Community species (Family II):** materialization + isolated Navigator + Primitive RC. The mosses and grasses that make the substrate richer.
- **Soil-building (Family II→III):** auto-navigation + Predictive RC + regression substrate. The harness's environment becomes self-sustaining.
- **Mature canopy (Family III):** Retrospective RC + multi-head + meaningful traversal. Stable ecosystem with feedback loops.
- **Climax (Family IV, asymptote):** autonomous goal-formation + consciousness indicators. The asymptotic mature forest.

Key insight from ecology: **succession arrests are legitimate end states for particular environments.** Some Homegrown deployments will be soil-building deployments; some will be canopy; few will reach climax. This matches `autonomy_ladder.md` §8's "graceful arrest as right-sizing" claim.

### Mechanism 7 — Extrapolation

**7.G (Generic) — Extrapolate "quality-awareness layers completed" 5 years out.**
Today: human is all three QA layers; no /intuit; no canary infrastructure; calibration data sparse.
5-year-out plausible state:
- Primitive RC: shipped, structural_check tool automated, runs at every discipline output.
- Predictive RC: /intuit Phase A operational; per-discipline N ≥ 30 for the most-used disciplines (sense-making, td-critique); other disciplines lag behind.
- Retrospective RC: outcome-review protocol running; Baldwin seeds being generated from miscalibration patterns.
- First Baldwin cycle has closed; first system-proposed spec refinement has been accepted by the user.
- L2 reached; L3 partial; L4 not yet.

**Implication for ordering:** the deliverable should NAME PARTIAL STATES explicitly because uniform completion across all 11 disciplines is unrealistic. "Self-maintenance" is not a single binary milestone — it's "Self-maintenance achieved for sense-making and td-critique; partial for innovate; nascent for the others." This argues for per-discipline-tagged milestones in Family III.

**7.F (Focused) — Extrapolate "meta-loop level calibration" 2 years out.**
Inquiry rate from the inquiry-folder count: looking at the most recent inquiries (2026-05-15, 2026-05-10, 2026-04-28, 2026-04-27...) the rate appears to be roughly 50-100 inquiries/year. Evidence gates:
- L1 → L2: ≥10 navigation maps with explicit selection-rationale. At ~5-10 navigation-eligible inquiries/month, **L2 reachable in ~3-6 months.**
- L2 → L3: ≥5 sequential chains + ≥80% system-Selector-agreement-with-human (PLACEHOLDER per autonomy_ladder.md). At chain-formation rates that aren't yet measured, **L3 reachable in ~1 year if calibration goes well.**
- L3 → L4: ≥3 useful sequential chains + MERGE protocol scaffold. **L4 reachable in ~2 years.**
- L4 → L5: meaningful-traversal substrate operationalized + ≥10 multi-head sessions stable (PLACEHOLDER). **L5 reachable in ~3-5 years if not blocked.**

**Implication:** the deliverable can NAME CALENDAR brackets per family (Family II: now-6 months; Family III: 1-2 years; Family IV: 3-5+ years). This is contingent on calibration going well.

**7.C (Contrarian) — Extrapolate substrate change: what if Claude 5.x / AGI-level substrate arrives mid-roadmap?**
The substrate-takeover scenario in `thinking_space_dynamics.md` §2.4 acknowledges this possibility. If the LLM substrate gains native support for some of the typed primitives (e.g., native intuition-similarity via better retrieval, native metacognition via better self-monitoring), some of the harness's externally-approximated primitives become redundant.

**Implication:** the milestone ordering would need to FORK:
- Pre-substrate-takeover path (current ordering): all 13 D-M milestones with the harness providing the primitives externally.
- Post-substrate-takeover path (if the substrate provides some primitives natively): some D-M milestones collapse or are subsumed by substrate; new D-Ms might emerge ("port to new substrate," "re-calibrate primitives against substrate capability").

The deliverable should ACKNOWLEDGE this fork as a tail-risk variant — not as the main line, but as a hedge against substrate discontinuity. This is uncomfortable because it makes the ordering contingent rather than committed, but it's structurally honest.

---

## Phase 3 — Test

I'll group the 21 variations by emergent ordering-candidate. Some variations are framing variations that map to the same underlying candidate; some are genuinely structurally distinct.

### Emergent ordering candidates (structurally distinct, drawn from multiple variations)

The 21 variations cluster into **9 structurally distinct candidate orderings** (with one fork hedge):

**CANDIDATE α — Linear family-tiered.** Family I → II → III → IV in strict sequence. Each family elaborated in order. The simplest path. *Mechanisms supporting:* baseline (sensemaking SV5 Path A) + 1.G (autonomy graduation as family-respecting) + 4.G (one-read constraint).

**CANDIDATE β — User-anchor narrative arc.** The user's four words ARE the primary headings (Materialization → Auto-navigation → Self-maintenance → Meta-loop graduation), wrapped with prologue (Foundation) and epilogue (Asymptote). Each section names the D-M milestones underneath. *Mechanisms supporting:* 2.F (combination → narrative arc) + 4.G (one-read) + 1.F (system's developmental POV) + the Phase-3-Inversion at Level 1 (user-anchors as primary).

**CANDIDATE γ — D-M primary, user-anchors as callouts.** The 13 D-M milestones are the primary structure; the user-named four appear as callouts ("⚐ THIS IS THE 'SELF-MAINTENANCE' MILESTONE THE USER NAMED"). *Mechanisms supporting:* 3.F Level 1 inversion.

**CANDIDATE δ — Three parallel tracks (cognitive ops / safety+quality / implementation).** Three columns developing simultaneously through families. Honors the loose-coupling reality. *Mechanisms supporting:* 2.C (parallel tracks combination) + 4.C (DAG variant relaxed to tracks).

**CANDIDATE ε — 2D matrix (family × autonomy-level).** Both axes simultaneously visible. *Mechanisms supporting:* 2.G (combination matrix). Single-source contrarian.

**CANDIDATE ζ — Asymptote-first reverse.** D-M12+D-M13 first, then trace backward through what unlocks them. *Mechanisms supporting:* 3.G (inversion generic). Single-source contrarian.

**CANDIDATE η — Developmental-stages (psychology / stack-layers / ecological succession).** Stages with prerequisites and unlocked-capabilities, by domain analogy. *Mechanisms supporting:* 6.G (developmental psych) + 6.F (stack layers) + 6.C (ecological succession). Three Domain Transfers converge.

**CANDIDATE θ — Constraint graph (DAG with suggested traversal).** Non-linear structural graph; reading recommended via a default path annotation. *Mechanisms supporting:* 4.C (constraint manipulation contrarian) + 3.C (inversion list → constraint graph).

**CANDIDATE ι — Per-discipline-tagged Family III milestones.** Acknowledges that Family III (calibration-gated) achievements are per-discipline, not uniform — "self-maintenance achieved for sense-making and td-critique; partial for others." *Mechanisms supporting:* 7.G (extrapolation generic). Single-source but high-signal.

**HEDGE-FORK κ — Pre-/post-substrate-takeover fork.** Acknowledges the substrate-discontinuity scenario; deliverable has a main line + a hedge variant. *Mechanisms supporting:* 7.C (extrapolation contrarian). Single-source contrarian; flagged as RESEARCH FRONTIER.

### 5-test cycle per candidate

| Candidate | Novelty | Scrutiny survival | Fertility | Actionability | Mechanism independence | Disposition |
|---|---|---|---|---|---|---|
| **α Linear family-tiered** | LOW — this is essentially Path A from sensemaking SV4; not novel relative to inputs. | HIGH — survives all 7 SV5 constraints; respects evidence gates; foundation-first. | LOW — opens no new territory; reads as the "obvious" answer. | HIGH — readers can immediately consume. | HIGH (3 mechanisms support). | **ACTIONABLE.** The baseline. Critique uses as the comparator. |
| **β User-anchor narrative arc** | MEDIUM — combines user vocabulary with D-M substance in a way the inputs don't. | HIGH — preserves all 7 constraints; explicitly keeps user-named four visible. | HIGH — the narrative arc opens "what's the next step?" and "where does this lead?" questions naturally. | HIGH — easy to read; user can navigate by familiar vocabulary. | HIGH (4 mechanisms converge). | **ACTIONABLE.** Strong convergence candidate. |
| **γ D-M primary, user-anchors as callouts** | MEDIUM — inverts the natural reading order. | HIGH (survives the constraints) but uncomfortable for the user-as-reader (less navigable by user vocabulary). | MEDIUM — opens "what's the relationship between user vocab and D-M structure?" questions. | MEDIUM — readers need to learn D-M vocabulary first. | LOW (single-mechanism). | **DEFERRED with revival trigger** — promote if Critique determines the user-vocabulary-primary candidate (β) loses too much of the broader pattern. Trigger: "If user vocabulary obscures the D-M structure in user testing." |
| **δ Three parallel tracks** | HIGH — visually distinct from list orderings; honors loose-coupling reality. | HIGH — survives constraints; tracks are dependency-respecting. | HIGH — surfaces parallel-work opportunities and graceful-arrest paths per track. | MEDIUM — harder to read linearly; requires either a diagram or careful per-track narration. | HIGH (2 mechanisms support). | **ACTIONABLE.** Strong fertility; addresses the loose-coupling honestly. |
| **ε 2D matrix** | HIGH — novel visual rendering. | MEDIUM — survives constraints but presupposes the reader can navigate a 2D matrix; user explicitly asked for a "sequential order." | MEDIUM — opens visualization possibilities. | LOW for user requested form; HIGH for a separate visual artifact. | LOW (single-mechanism). | **DEFERRED with revival trigger** — promote if the deliverable includes a diagram artifact, not just prose. Trigger: "If the final form has a rendered diagram component." |
| **ζ Asymptote-first reverse** | HIGH — inverted reading order; uncommon for milestone roadmaps. | LOW-MEDIUM — survives the constraints but counter to natural-reading habit and to the user's "what do we build next?" implicit framing. The asymptote-first reading risks making everything feel asymptotic. | MEDIUM — fertility for re-framing conversations but not for action planning. | LOW — the user's hunch was "what milestones the project is moving THROUGH," implying forward-reading. | LOW (single-mechanism contrarian). | **DEFERRED with revival trigger** — promote if a reader explicitly asks "where does this end up?" or for a re-framing conversation. Trigger: "If a re-framing conversation arises about end-goal-first orientation." |
| **η Developmental-stages (cross-domain framing)** | HIGH — three independent domain transfers (psych + stack + ecology) converge on the same shape, suggesting structural truth. | HIGH — survives constraints; the developmental-stage framing matches the project's own "consciousness-gradient" framing more naturally than feature-roadmap framing. | HIGH — opens "what stage is the harness at?" diagnostic; opens "what's the arrest point?" question. | MEDIUM — useful as a CO-FRAMING (e.g., applied within candidate β or α) but not necessarily as the primary structure. | HIGH (3 Domain Transfer convergent + Lens Shifting). | **ACTIONABLE as co-framing within α or β.** Strongest convergence — three independent domain transfers reaching the same shape is the project's mark of structural insight. |
| **θ Constraint graph (DAG)** | HIGH — rejects the list-shape assumption entirely. | LOW-MEDIUM — survives the SV5 constraints but conflicts with "the user wants a sequential order." Mitigation possible via a "suggested traversal" overlay. | HIGH — opens "what's the actual dependency graph?" question (which is structurally true). | LOW for direct deliverable; HIGH for a future visualization. | LOW (single-mechanism contrarian). | **DEFERRED with revival trigger + RESEARCH FRONTIER for full DAG.** Trigger: "If the project develops a navigation graph UI." For now, capture the dependency-graph insight as supplementary metadata to a linear-ordering candidate. |
| **ι Per-discipline-tagged Family III milestones** | MEDIUM — adds nuance to the existing Family III framing. | HIGH — survives constraints; structurally HONEST about non-uniformity. | HIGH — opens "what's the next discipline to attack for Family III maturity?" question. | HIGH — can be applied as a refinement to any of α/β/η. | LOW (single-mechanism but reinforces a known reality). | **ACTIONABLE as refinement to any candidate.** Promote it to a verification criterion: "Family III milestones must acknowledge per-discipline maturity, not uniform harness-level completion." |
| **κ HEDGE-FORK substrate-takeover** | HIGH — names a discontinuity the texts acknowledge but the ordering ignores. | MEDIUM — survives intellectually but is operationally hard to commit to (when does the fork happen?). | LOW for current ordering; HIGH for future-planning conversations. | LOW for direct ordering; HIGH for risk-acknowledgment. | LOW (single-mechanism, deeply contrarian). | **RESEARCH FRONTIER.** Capture in Open Questions; not part of the main-line ordering. |

### Additional outputs from Absence Recognition (5.G, 5.F, 5.C)

These aren't candidate orderings — they're CONTENT ADDITIONS that any candidate ordering should incorporate. Treating them as ACTIONABLE refinements:

| Absence | Disposition |
|---|---|
| **D-M-new-A through D-M-new-C** (three missing event-milestones from 5.G) | **ACTIONABLE.** Add to Family III ordering as discrete operational signatures of L3/L4 maturity. They sharpen the calibration-gated family's structure. |
| **P1 identity: pinned name + Homegrown signal + bet's risk** (5.F) | **ACTIONABLE.** P1 verification criteria expand to include these elements. |
| **Sections: "what's shipped today" + "first three things to build" + "load-bearing risk" + "where to read more"** (5.C) | **ACTIONABLE.** Add to deliverable structure regardless of which candidate ordering Critique selects. |

---

## Phase 3.5 — Assembly Check

After testing individual outputs, examine survivors for emergent combinations.

**Emergent combination 1: β + η + ι.**
The user-anchor narrative arc (β), framed within the developmental-stages domain analogy (η), with per-discipline-tagged Family III maturity (ι). This produces an ordering that:
- Reads naturally to the user (user vocabulary primary).
- Anchors in a deep cross-domain pattern (developmental stages).
- Honors the per-discipline non-uniformity reality.
- Carries the user-named four as primary anchors AND surfaces the broader pattern in the developmental-stage substrate.

This is THE emergent strong candidate. It combines three independently-supported variations and produces a candidate that none of the three produces alone.

**Emergent combination 2: δ + θ (parallel tracks + DAG with suggested traversal).**
Three parallel tracks (cognitive ops / safety+quality / implementation) rendered as a DAG with a suggested-traversal annotation. Honors both the loose-coupling reality and the user's request for "a good sequential order." The DAG is the underlying truth; the suggested traversal is the user's handle.

This is the *structurally-honest-but-still-readable* emergent candidate. Useful as an ALTERNATIVE to combination 1 for Critique to compare against.

**Emergent combination 3: α + 5.C section additions ("what's shipped today" + "first three buildable" + "load-bearing risk" + "where to read more").**
The baseline (α) augmented with the section additions from 5.C. This produces the *practical action-oriented* candidate that prioritizes "what do we do next" over narrative coherence.

This is the *engineering-roadmap* emergent candidate. Useful as the "minimum-viable-deliverable" benchmark for Critique.

### Assembly verdict

**Three structurally-distinct emergent candidates** for Critique to evaluate:
- **EMERGENT-1 (β+η+ι):** User-anchor narrative arc, developmental-stages framing, per-discipline-tagged Family III.
- **EMERGENT-2 (δ+θ):** Three parallel tracks as DAG with suggested traversal.
- **EMERGENT-3 (α + section additions):** Linear family-tiered with practical sections.

Plus the baseline α (linear family-tiered) as the comparator, plus the singleton-mechanism candidates (γ, ε, ζ, θ-pure, κ) as DEFERRED options for revival.

---

## Phase 3.6 — Axis Coverage Check

**Orthogonal axes the candidate set should vary along:**

| Axis | Description | Variants in candidate set |
|---|---|---|
| **Axis 1 — Organizing principle** | family / autonomy-level / capability-axis / user-anchor / dependency-graph / developmental-stage | family (α), user-anchor (β), capability-axis (1.C), dependency-graph (θ), developmental-stage (η). 5 variants present. ✓ |
| **Axis 2 — Shape** | linear / tiered / matrix / DAG / narrative / parallel-tracks | linear (α), tiered (α, ε), matrix (ε), DAG (θ), narrative (β), parallel-tracks (δ). 6 variants present. ✓ |
| **Axis 3 — Vocabulary primary** | user-named / D-M-named / capability-axis-named / domain-analogy-named | user-named (β), D-M-named (γ), capability-axis-named (1.C), domain-analogy-named (η). 4 variants present. ✓ |
| **Axis 4 — Reading direction** | forward (foundation → asymptote) / reverse (asymptote → foundation) / non-linear (DAG) | forward (α, β, δ, η, etc.), reverse (ζ), non-linear (θ). 3 variants present. ✓ |
| **Axis 5 — Granularity** | uniform per family / per-discipline-tagged in Family III | uniform (most), per-discipline (ι). 2 variants. ✓ |
| **Axis 6 — Hedge for substrate change** | committed / forked | committed (α, β, δ, ε, ζ, η, θ, ι, EMERGENT-1, EMERGENT-2, EMERGENT-3), forked (κ). 2 variants. ✓ |

All 6 axes have at least one variant. **No single-axis coverage gap.** The candidate set varies along all orthogonal axes the problem presents.

**Frame-inheritance bias check (per axis-coverage refinement):**
- The exploration and sensemaking inherited the 4-build-readiness-families framing from the user's request and the source texts. Did this frame the candidate set toward family-based orderings unnaturally?
- Check: candidates α, β, η, δ, ε all use families. But candidates γ, ζ, θ, κ, 1.C, 5.G, 5.F use different frames (D-M list, asymptote, DAG, fork, capability-axis). The candidate set is NOT trapped in family framing.

**Verdict:** axis coverage adequate.

---

## Phase 4 — Mechanism Coverage (Telemetry)

- **Generators applied:** 4 / 4 (Combination 2.G/F/C, Absence Recognition 5.G/F/C, Domain Transfer 6.G/F/C, Extrapolation 7.G/F/C)
- **Framers applied:** 3 / 3 (Lens Shifting 1.G/F/C, Constraint Manipulation 4.G/F/C, Inversion 3.G/F/C with depth-check at 3.F)
- **Convergence:** YES — **EMERGENT-1 (β+η+ι)** is supported by 5 independent mechanisms (Combination focused + 3 Domain Transfers + Extrapolation generic + Lens Shifting focused). **3+ mechanisms convergent on the narrative-arc-with-developmental-framing core.** High confidence.
- **Survivors tested:** 13 / 13 — all candidate orderings and content-addition outputs run through the 5-test cycle with disposition.
- **Failure modes observed:**
  - Premature evaluation: NO (generated all 21 before testing).
  - Single-mechanism trap: NO (applied all 7).
  - Early frame lock: NO (multiple candidates pursued after first viable; assembly check produced emergent combinations).
  - Innovation without grounding: NO (testing performed).
  - Mechanism exhaustion: NO (multiple survivors).
  - Survival bias: PARTIAL-MITIGATED. The contrarian candidates (1.C continuous capability axes, 3.C constraint graph, 4.C DAG, 7.C substrate fork) were deliberately tested with extra care. They are uncomfortable but structurally honest; they survive as DEFERRED / RESEARCH FRONTIER rather than being killed. The mitigation worked but the bias is observable — the ACTIONABLE candidates skew toward the comfortable variants.

**Overall: PROCEED** (sufficient coverage + convergence + tested survivors + emergent combinations identified + axis coverage adequate).

---

## Handoff to Critique

Critique now has these distinct candidates to evaluate:

**ACTIONABLE (multi-mechanism convergent, ready for Critique):**
- α — Linear family-tiered (baseline / comparator)
- β — User-anchor narrative arc (Tier-3 substantive variant)
- δ — Three parallel tracks (cognitive / safety+quality / implementation)
- η — Developmental-stages framing (as co-frame within α or β)
- ι — Per-discipline-tagged Family III (as refinement to any candidate)
- **EMERGENT-1 = β + η + ι** (the strongest assembly-check candidate)
- **EMERGENT-2 = δ + θ** (parallel-tracks DAG with suggested-traversal)
- **EMERGENT-3 = α + 5.C section additions** (practical engineering-roadmap)

**ACTIONABLE content additions (to be incorporated into whichever candidate Critique selects):**
- D-M-new-A through D-M-new-C (three missing operational-event milestones in Family III)
- P1 identity additions (pinned name + Homegrown signal + bet's risk)
- Section additions (what's shipped today / first three buildable / load-bearing risk / where to read more)

**DEFERRED with revival triggers:**
- γ (D-M primary with user callouts) — revive if user-vocabulary-primary loses too much pattern
- ε (2D matrix) — revive for separate visual artifact
- ζ (asymptote-first reverse) — revive for re-framing conversations
- θ pure (constraint-graph DAG) — revive when navigation graph UI exists

**RESEARCH FRONTIER:**
- κ (substrate-takeover fork) — capture in Open Questions

**Critique's contraction task:**
- Decide between EMERGENT-1 (narrative arc + developmental + per-discipline), EMERGENT-2 (parallel tracks DAG), EMERGENT-3 (practical action-oriented), or some refined hybrid.
- Apply Phase 0 dimensions (from td-critique's references) to the candidates — what evaluation dimensions does the milestone-ordering problem actually have?
- Test each survivor with prosecution + defense + collision per td-critique's protocol.
- Render SURVIVE / REFINE / KILL verdicts with constructive output.
