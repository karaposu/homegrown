---
status: active
model: claude-opus-4-7[1m]
effort: max
---
# Finding: Horizontal Dive + Vertical Refinement + Synthesis (H+V+S) — a Methodology Pattern for Coordinate-Space Problems

## Question

From `_branch.md`:

A development pattern was empirically observed in the `comprehenslate` project's inquiry archive (a sister project at `/Users/ns/Desktop/projects/comprehenslate`). One root inquiry detected the AXES of a translation-configuration problem (8 axes in 4 families) and explicitly deferred per-axis level values. Thirteen child inquiries then fanned out — one per axis or A1 sub-field — each declaring `refines:` of the root in its `finding.md` frontmatter (a homegrown convention where a child finding's frontmatter cites the parent finding's path). A synthesis inquiry rolled all priors into a v1.0 canonical spec. A subsequent diagnostic patched a missing principle revealed by real translation use, producing v1.1.

The user has named this pattern **"horizontal dive and vertical refinement"** (horizontal = the axis-detection inquiry; vertical = each per-axis refinement inquiry). The user is confident it should become a homegrown methodology asset.

**The question.** What is the pattern, in formal articulation suitable for the homegrown project — what mechanism makes it work, why is it useful as a methodology asset, and what does it enable that an ordinary single-inquiry MVL loop (the MVL/MVLw runner that runs one Sensemaking → Innovation → Critique cycle) does not?

**Goal.** A stable conceptual model at the meaning layer (what the pattern IS as a cognitive operation), mechanism-grounded, suitable as input for a subsequent inquiry that will connect the pattern to three canon documents: `docs/canon/thinking_space_dynamics.md`, `docs/canon/what_is_meaningful_traversal.md`, and `docs/canon/project_north_star.md`. The connection inquiry is **explicitly deferred** per user instruction.

## Finding Summary

- **The pattern has three phases, not two.** The user named horizontal and vertical. The empirical evidence shows a third phase — synthesis — with a load-bearing role no single vertical can fulfill: cross-axis interaction resolution. Naming the pattern as **Horizontal Dive + Vertical Refinement + Synthesis (H+V+S)** preserves the user's vocabulary while making the third phase explicit.

- **The pattern is a multi-inquiry methodology pattern, not a discipline.** It composes existing MVL inquiries into a fan-out + fan-in structure (1 horizontal → N verticals → 1 synthesis), with each inquiry a complete MVL loop in its own right. This is structurally distinct from the existing `/decompose` discipline (the homegrown discipline that perceives coupling topology and partitions one complex whole into pieces), which operates within a single MVL loop. H+V+S operates across many MVL loops.

- **What makes it work — three mechanism arguments.** Horizontal-first ordering prevents anchor distortion (premature commitment to values would constrain axis selection). Per-axis isolation decomposes cognitive overload along the coordinate-system seam. Synthesis-as-cross-axis-resolution surfaces architectural patterns invisible within any single axis.

- **Trade-offs — what the pattern costs.** The pattern necessarily introduces coordination overhead across inquiries, lineage-maintenance work, a synthesis bottleneck (one cognizer at a time, even if verticals are parallel), and narrows the "lucky-discovery" path of integrated single inquiries (the synthesis recovers most cross-axis discoveries but at additional cognitive cost). These structural costs are bounded within the applicable problem class.

- **When the pattern applies — four-condition gate.** (1) Multiple approximately-orthogonal dimensions (no axis's value is FORCED by another's; defaults-driving is allowed). (2) Per-dimension specifiability (each axis's values can be characterized without first settling every other axis). (3) Cross-dimension interactions (combinations have implications no single-dimension specification captures). (4) Finite coordinate space (axes countable; values enumerable per axis) — this condition excludes continuous-parameter problems like ML hyperparameter tuning where Bayesian optimization or grid search is appropriate instead. The gate's invocation is the first input-contract step of the horizontal phase, not a separate phase and not an optional pre-step.

- **When the pattern fails — five-way split.** Wrong axes (recoverable partially via within-vertical revision or post-synthesis diagnostic); wrong values per axis (recoverable per-axis); missing inter-axis interaction in synthesis (recoverable by re-synthesis); missing principle revealed only by real use (NOT recoverable by pattern alone; requires reactive diagnostic); synthesis-mediated commitment freezing — once the canonical spec is emitted, downstream consumers may treat it as immutable. Mitigation: the canonical spec carries an explicit "v1.0 = current best given evidence to date; expect revision via diagnostics" stance, and the synthesis output names the diagnostic protocol as a load-bearing follow-up.

- **What the pattern enables — seven output claims.** Coordinate-space artifact production (configurable systems with explicit axes and per-axis values); per-axis architectural-pattern emergence (composite-axis, categorical, asymmetric-ordinal, explicit-zero level, dual-tier default — these emerged across siblings in `comprehenslate`); failure localization (real-use gaps map to specific axes / sub-fields / inter-axis interactions); composable refinement (each axis revisitable independently); progressive completion (a v0.1 horizontal-only framework, v0.5 partially-vertical, v1.0 fully synthesized); cross-session handoff (commitments traceable through `refines:` lineage); and reactive patching with structural awareness (diagnostics fit specific slots).

- **Post-synthesis maintenance lifecycle (named at meaning layer; operational specification deferred).** The canonical spec emitted by synthesis enters a maintenance lifecycle: canonicalize → use → diagnose → revise → re-canonicalize. The pattern's articulation acknowledges this lifecycle exists; the operational specification (when does revision count as a new H+V+S iteration vs. a within-version patch?) is deferred to artifact-form and process inquiries.

- **Confidence calibration.** The MECHANISM (horizontal-first / per-axis isolation / synthesis cross-axis resolution) is HIGH-confidence — grounded in cognitive load arguments + analogs in software engineering (interface-before-implementation), mathematics (coordinate-system selection before solving), and human decision-making (dimension-then-value). The GENERALIZATION is MEDIUM-confidence — homegrown has N=1 empirical instance (`comprehenslate`). Calibration trajectory: bootstrap (current; N=1) → early-operation (N=2-3, with at least one mixed-domain case) → mature (N≥5 with at least 2 structurally distinct domains represented). A "domain" is a problem-type with structurally distinct axes-and-interactions (configuration-design / taxonomy / API / curriculum / decision-framework each have different cross-axis interaction profiles). An application counts as successful calibration evidence when (i) the synthesis inquiry's self-assessment verdict was PROCEED, (ii) downstream use of the canonical spec produced no diagnostic with a structural-level LAYER-1 failure-mode fire (small fixes acceptable; structural restructuring is not), and (iii) at least one architectural pattern was named at synthesis time that couldn't have been seen in a single inquiry.

- **Forward-pointers (deferred per user; subject of next inquiry).** Three canon documents under `docs/canon/` are out of scope for this inquiry by user instruction: `thinking_space_dynamics.md`, `what_is_meaningful_traversal.md`, and `project_north_star.md`. The next inquiry will explicitly connect H+V+S to these.

## Finding

### Why this inquiry, briefly

The `comprehenslate` project (a sister project to homegrown, focused on AI-assisted translation that preserves multi-layer text semantics) recently ran a sequence of 15 inquiries to design its 8-axis translation-configuration framework. The author of both projects noticed a pattern in how those inquiries were structured: one root inquiry detected the configuration's axes and deferred their values; thirteen children each refined one axis (using the homegrown `refines:` frontmatter mechanism to declare lineage); one synthesis rolled the work up into a v1.0 canonical specification; a follow-up diagnostic produced v1.1 after a real translation revealed a missing principle. The author proposed naming this **horizontal dive + vertical refinement** and asked for it to be formalized as a homegrown methodology asset.

This finding produces that formalization at the meaning layer — what the pattern IS as a cognitive operation, why it works, what it enables, and where it doesn't apply. Two adjacent questions are deferred by user instruction: (a) how the pattern connects to homegrown's canonical documents under `docs/canon/`, and (b) what artifact form the pattern should take (a protocol, a runner, a documentation pattern, a Pre-Template Check in `cognitive_harness/MVLw/SKILL.md`, or something else). Both belong to subsequent inquiries.

The finding draws on (i) the `comprehenslate` inquiry archive at `/Users/ns/Desktop/projects/comprehenslate/devdocs/inquiries/` (the empirical case), (ii) the homegrown MVL/MVLw/MVL+ runner specifications and the supporting `branch_inquiry.md` / `conclude.md` protocols (the existing infrastructure the pattern composes), and (iii) the homegrown `/decompose` and `/articulate_simple` discipline references (the neighbor disciplines the pattern is structurally distinguished from).

### 1. Name and identity

**Name: Horizontal Dive + Vertical Refinement + Synthesis (H+V+S).**

The user-coined term ("horizontal dive and vertical refinement") names two of the three phases. The empirical evidence — specifically the structurally distinct role of the synthesis inquiry in `comprehenslate` — establishes synthesis as a third phase, not an instance of the homegrown CONCLUDE step (CONCLUDE compiles a single inquiry's discipline outputs into one finding.md; the H+V+S synthesis is a separate inquiry that resolves cross-axis interactions across the verticals). Naming the three phases explicitly preserves the user's vocabulary while making the synthesis phase's load-bearing role visible.

An alternative name — "Coordinate-System-First Inquiry Pattern" — names the principle (settle the coordinate system before populating values) rather than the shape (horizontal / vertical / synthesis). The alternative is deferred with revival trigger: if the subsequent canon-connection inquiry shows the coordinate-system framing connects more cleanly to `docs/canon/thinking_space_dynamics.md`, the alternative name may promote to primary.

### 2. What the pattern is (the three-phase mechanism)

H+V+S is a **multi-inquiry methodology pattern** for problems with a specific shape: settle the dimensions of a coordinate space, settle each dimension's values, resolve cross-dimension interactions. It composes existing MVL inquiries (full Sensemaking → Innovation → Critique loops, or their MVLw extensions) into a three-phase fan-out + fan-in structure.

#### Phase 1 — Horizontal Dive

One MVL inquiry whose deliverable is the **axes** of the configuration problem. The horizontal inquiry's first input-contract step is to confirm the four-condition applicability gate fires (see Section 4); only then does it proceed to detect axes. Crucially, the horizontal inquiry **defers per-axis values** — typically via a Next Actions MUST item stating that level values are out of scope for this inquiry. The deferral is load-bearing for the next phase: if values are committed during horizontal, axis selection becomes contaminated by premature value commitment.

`comprehenslate`'s root inquiry at `2026-06-05_14-14__translation_config_axes/finding.md` is the canonical instance. It identified 8 axes in 4 families (Reader / Purpose / Strategy / Depth), surfaced architectural decisions used later (the composite-axis pattern for the Reader family's A1 axis; the categorical pattern for A4 Purpose; the 2-tier default principle; the DOMESTICATE-disfavored project policy), and explicitly deferred level values to follow-up inquiries.

#### Phase 2 — Vertical Refinement

N independent MVL inquiries, one per axis. Each vertical declares `refines:` of the horizontal parent in its `finding.md` frontmatter (the homegrown convention where a child finding's frontmatter cites the path of its parent finding). Each vertical's deliverable is that axis's value-enumeration + per-value definitions + cross-axis boundaries to its siblings.

Verticals may propose revisions to the horizontal commitments — but only when justified by cross-axis pattern arguments (patterns visible across multiple verticals that no single vertical could see while the horizontal was being defined). Such revisions are recorded as a `## Changes from Prior` block in the vertical's finding. The structured revision protocol is what allows the pattern to remain rigid in ordering (horizontal completes before verticals; verticals complete before synthesis) while accommodating the practical reality that the horizontal can't always get the axes perfectly right on first try. In `comprehenslate`, the A8 vertical proposed a level-count revision (4 → 5 levels with an explicit `none` level) justified by a cross-axis pattern argument (other ordinal axes had explicit-zero levels); the revision survived synthesis.

Verticals can themselves fan out. `comprehenslate`'s A1 (Reader Level) was a composite axis with 5 sub-fields (vocabulary breadth / syntactic processing capacity / idiom recognition / inference capacity / cultural reference recognition), each refined by its own vertical inquiry. The pattern is recursive in principle, though `comprehenslate` exercised only one level of recursion.

#### Phase 3 — Synthesis

One MVL inquiry that declares `refines:` of **all N+1 priors** (the horizontal and every vertical). The synthesis's deliverables go beyond what any vertical can produce alone:

- A canonical document preserving each axis's full prose.
- **Cross-axis interaction matrices and maps** — `comprehenslate`'s synthesis produced four: a 5×7 per-purpose × per-axis default matrix; a 28-pair orthogonality verification matrix; a 3-channel apparatus separation table; a 4-role action-vocabulary map.
- **Emergent architectural patterns named at synthesis time**, visible only when all verticals are read together — `comprehenslate`'s synthesis named nine: composite-axis, categorical, asymmetric ordinal, explicit-zero level, dual-tier default, content-type-by-level table, action-permission table, harmony report apparatus channel, three-layer multi-meaning treatment.
- An **Inherited Commitments Re-test** section enforced by `cognitive_harness/protocols/conclude.md` (the homegrown CONCLUDE protocol enforces this section when ≥3 commitments are inherited from priors). `comprehenslate`'s synthesis re-tested 23 inherited commitments.
- A **version stamp** (v1.0) and a downstream-unblock list.

The synthesis carries an explicit "v1.0 = current best given evidence to date; expect revision via diagnostics" stance and names the post-synthesis diagnostic protocol as a load-bearing follow-up. This mitigates the failure mode where downstream consumers treat the canonical spec as immutable (see Section 6).

#### Lineage mechanism

The `refines:` frontmatter pointer is the homegrown mechanism that links each child finding to its parent. It is mandatory throughout H+V+S: verticals declare `refines:` of the horizontal; synthesis declares `refines:` of all N+1 priors. The CONCLUDE protocol's Inherited Commitments Re-test enforcement (triggered at ≥3 inherited commitments) is the structural mechanism that prevents silent absorption of prior commitments — the synthesis must either re-test each inherited commitment with cited evidence or explicitly flag it as carried forward without re-test with a reason.

The lineage is preserved within finding.md frontmatter rather than in separate lineage files. This co-location keeps the lineage auditable from the finding itself — anyone reading the synthesis can trace each commitment back through the chain by following the `refines:` pointers.

#### Distinction from `/decompose`

The homegrown `/decompose` discipline at `cognitive_harness/decompose/references/decompose.md` perceives coupling topology within one complex whole and partitions it into pieces with interfaces. `/decompose` operates within a single MVL loop as one of its disciplines. H+V+S operates **across multiple MVL loops** as a methodology pattern. The unit of work differs by an order of magnitude (one loop vs. N+1 loops + a synthesis). The horizontal phase's MVL inquiry could use `/decompose` to identify axes as natural boundaries — the framings are compatible — but the pattern doesn't require it; the horizontal phase can identify axes through ordinary sensemaking + innovation + critique.

### 3. Why the pattern is useful (mechanism arguments + structural-cost trade-offs)

H+V+S solves three failure modes that single-inquiry approaches produce on coordinate-space problems.

**Anchor distortion from premature value-commitment.** Settling axes and values together within one inquiry lets tentative value choices constrain axis selection. The cognizer chooses an axis based partly on what values would fit; values then become anchors that distort which OTHER axes get noticed. The horizontal-first ordering of H+V+S prevents this by structurally separating the two operations.

**Cognitive overload from holding the full coordinate space.** A single inquiry must hold the axes, values, and inter-axis interactions in working memory simultaneously. As axis count grows, the cognitive load becomes prohibitive — and the inquiry either over-simplifies (drops axes or interactions) or fragments (produces partial output). H+V+S decomposes the load along the coordinate-system seam: the horizontal holds only axes; each vertical holds only one axis plus its boundaries; the synthesis holds cross-axis interactions on top of completed verticals. Each MVL loop operates within bounded cognitive scope.

**Pattern invisibility within single inquiries.** Architectural patterns that emerge across multiple axes (the "explicit-zero level" appeared in three of `comprehenslate`'s axes; the "asymmetric ordinal" pattern appeared in one; the "dual-tier default" appeared in another) are not visible while working on any single axis — the pattern is visible only across siblings. H+V+S makes these visible at synthesis time, when all verticals are read together. The Patterns Compendium is a structural feature of synthesis, not an accident.

**Trade-offs: what the pattern costs.** Honesty about the mechanism arguments requires acknowledging the structural costs the pattern necessarily introduces:

- **Coordination overhead** across N+1 inquiries plus the synthesis. Each inquiry has its own `_branch.md`, `_state.md`, discipline outputs, and finding.md. The total artifact count is substantial.
- **Lineage maintenance.** Every child's `refines:` pointer must remain accurate as the chain grows. CONCLUDE's re-test enforcement handles this at the protocol level, but cognizer discipline is required.
- **Synthesis bottleneck.** Even if verticals run in parallel (one human or AI cognizer per axis), the synthesis is single-cognizer — only one mind at a time can resolve cross-axis interactions.
- **Narrowed lucky-discovery.** An integrated single inquiry can spot connections between dimensions during sensemaking that don't survive into separated per-axis verticals because the connection lives in the coupling, not in any single axis. The synthesis recovers most of these via cross-axis matrices, but at additional cognitive cost.

These trade-offs are **bounded within the applicable problem class** (the four-condition gate in Section 4). Outside the class, the gate correctly excludes the pattern; inside the class, the costs are bounded and outweighed by the enablement claims in Section 5.

The structural costs above are different from the application failures in Section 6. The costs are what the pattern necessarily introduces; the failures are what can go wrong when the pattern is applied imperfectly.

### 4. When the pattern applies (four-condition gate)

H+V+S applies when ALL FOUR conditions hold:

**(1) Multiple approximately-orthogonal dimensions.** The problem has dimensions that vary independently. "Approximately orthogonal" is operationalized as: no single axis's value is FORCED by another's value. Defaults-driving (one axis suggests sensible defaults for another) is allowed; forced-determination (one axis's value mechanically determines another's) is not. `comprehenslate`'s A4 (Purpose) drives defaults for the other seven axes — this is defaults-driving, which the condition allows. If A4 mechanically forced A5's value (with no override possible), the dimensions would not be approximately orthogonal.

**(2) Per-dimension specifiability.** Each dimension's values can be characterized without first settling every other dimension's values. A dimension whose values can be specified only after all others are settled doesn't decompose cleanly into a vertical inquiry.

**(3) Cross-dimension interactions.** Combinations of dimension values have implications no single-dimension specification captures. This is the condition that distinguishes problems for which H+V+S is appropriate from problems with truly independent dimensions (where N parallel single-inquiry MVL loops would suffice, without synthesis). The synthesis phase is needed only when cross-dimension interactions exist.

**(4) Finite coordinate space.** Axes are countable; values per axis are enumerable. This condition excludes continuous-parameter problems where per-value enumeration is infeasible. ML hyperparameter tuning is the canonical negative case: 5-10 axes (learning rate, batch size, regularization coefficient, dropout rate, etc.) each with a continuous range. H+V+S would over-decompose; use Bayesian optimization or grid search instead.

**The gate's invocation is the first input-contract step of the horizontal phase.** It is NOT a separate phase (the gate is structurally a routing decision, not a cognitive operation with input contract / deliverable / lineage handoff). It is NOT an optional pre-step (the horizontal phase's verification criterion includes "did you confirm the applicability gate before deferring values?"). The gate is a load-bearing element of the horizontal inquiry's input contract.

Outside the gate, simpler alternatives apply: single-inquiry MVL for ordinary problems; the extended MVL+ or MVLw runner for problems needing surfacing or exploration; iterative MVL+ for problems needing repeated refinement on a single question.

### 5. What the pattern enables (seven output claims)

The seven enablement claims below are each grounded in a phase-mechanism reference; each names a capability single-inquiry approaches don't have, not just more output.

**Coordinate-space artifact production.** The pattern produces configurable system specifications with explicit axes and per-axis values — pydantic schemas, UX preset catalogs, AI prompt-context documents. `comprehenslate`'s v1.0 canonical spec (the synthesized output at `2026-06-07_19-51__layer1_canonical_spec_synthesis/finding.md`) is the concrete instance. The artifact form is enabled by the synthesis phase's consolidation work, not by any vertical alone.

**Per-axis architectural-pattern emergence.** Patterns visible only across siblings — composite-axis, categorical, asymmetric ordinal, explicit-zero level, dual-tier default, content-type-by-level table, action-permission table, harmony report apparatus channel, three-layer multi-meaning treatment — are NAMED at synthesis time. `comprehenslate`'s nine architectural patterns are concrete instances. This emergence is enabled by reading all verticals together, which the synthesis does and no single vertical can.

**Failure localization.** When real use reveals a gap, the diagnostic can pinpoint a specific axis, sub-field, or inter-axis interaction. `comprehenslate`'s post-synthesis diagnostic (target-side accidental polysemy, in the `2026-06-08_01-36` inquiry) targeted the LAYER 2 policies slot specifically and proposed a new policy as the patch. Localization is enabled by the per-axis isolation of the vertical phase — failures map to specific verticals' deliverables.

**Composable refinement.** Each axis can be revisited independently without restarting the whole framework. The lineage mechanism preserves dependencies; a re-run vertical updates only its axis's commitments, and synthesis re-tests inherited commitments. Composability is enabled by the `refines:` lineage + CONCLUDE re-test enforcement.

**Progressive completion.** A Layer 1 framework can be horizontal-only at v0.1 (just the axes; deferred values), partially-vertical at v0.5 (some axes refined, others still deferred), fully synthesized at v1.0. `comprehenslate` followed exactly this trajectory across 2026-06-05 to 2026-06-07. Progression is enabled by the strict horizontal-first ordering — a partially-refined framework remains internally consistent because the axes are settled even if values aren't.

**Cross-session handoff.** Every commitment is traceable through `refines:` lineage. A new cognizer (or AI session) can audit any decision by following the lineage chain back to its anchor. Handoff is enabled by the lineage mechanism + finding.md's persistence in the inquiry folder.

**Reactive patching with structural awareness.** Post-synthesis diagnostics fit specific slots in the canonical spec. `comprehenslate`'s polysemy diagnostic patched four artifacts (notes.md / harmony_layer.md / advanced_principles.md / the canonical spec going v1.0 → v1.1), each at a structurally meaningful location. Structural patching is enabled by the named slots the synthesis creates — diagnostics can target a specific LAYER 2 policy, a specific axis's level, or a specific cross-axis interaction.

### 6. When the pattern fails (five-way failure split + recoverability)

The failure modes below are failures **of the pattern applied correctly per its own protocol**, not failures of application (e.g., "the cognizer didn't follow the rigid-ordering" is application failure, not pattern failure).

| Failure | Recoverable by pattern? | Mechanism |
|---|---|---|
| 1. Wrong axes (the horizontal inquiry missed or mis-orthogonalized an axis) | Partial | Within-vertical revision via `## Changes from Prior` + cross-axis-pattern justification; OR post-synthesis diagnostic; OR full H+V+S re-run |
| 2. Wrong values per axis | Yes | Re-run the affected vertical; synthesis re-tests inherited commitments per CONCLUDE protocol |
| 3. Missing inter-axis interaction in synthesis | Yes | Re-run synthesis with broader matrix coverage; verticals do not need to re-run |
| 4. Missing principle revealed only by real use | NO (by pattern alone) | Reactive diagnostic required; the pattern makes the missing principle LOCALIZABLE (it can be identified as belonging to a specific slot) but does not prevent it. `comprehenslate`'s target-side accidental polysemy diagnostic is the canonical case. |
| 5. Synthesis-mediated commitment freezing | Partial | Pattern-level mitigation: the canonical spec emitted by synthesis carries an explicit "v1.0 = current best given evidence to date; expect revision via diagnostics" stance; the synthesis output names the diagnostic protocol as a load-bearing follow-up. Without this mitigation, downstream consumers treat v1.0 as immutable and resist post-synthesis revision (as `comprehenslate`'s v1.0 → v1.1 transition demonstrated). |

**Prevention vs. failure mode.** The mechanism arguments in Section 3 (horizontal-first ordering, per-axis isolation, synthesis cross-axis resolution) are the **prevention** mechanisms — they prevent the corresponding failure modes when the pattern is applied correctly. The five-way failure split above is what fails when prevention is incomplete or the application is wrong. The two categories sit at different levels of analysis.

### 7. The post-synthesis maintenance lifecycle (named at meaning layer; operational specification deferred)

The canonical spec emitted by the synthesis phase enters a maintenance lifecycle with five phases at the meaning layer:

1. **Canonicalize.** Synthesis emits v1.0 with explicit-revision stance.
2. **Use.** Downstream consumers operate on the canonical spec (in `comprehenslate`, this is the AI translator reading the v1.0 spec to interpret a `TranslationConfig`).
3. **Diagnose.** Real use reveals a gap; a diagnostic inquiry surfaces the missing principle and proposes a patch.
4. **Revise.** The patch is applied to the affected slot (or the affected vertical is re-run, then the synthesis re-runs).
5. **Re-canonicalize.** A new version (v1.1) is emitted.

The operational specification — when does revision count as a new H+V+S iteration versus a within-version patch? what artifact form encodes the lifecycle? what triggers move the canonical spec from one phase to the next? — is **deferred** to artifact-form and process inquiries. At the meaning layer, the pattern's articulation acknowledges this lifecycle exists; the detailed mechanics are out of scope for this finding.

### 8. Confidence calibration

**Mechanism confidence: HIGH.** The three mechanism arguments in Section 3 are grounded in cognitive load theory (decomposition for tractability is the master pattern of complex-system management) plus three independent analogs: software engineering's interface-before-implementation pattern (settle the API surface before implementing methods); mathematics's coordinate-system selection before solving; human decision-making's dimension-then-value pattern (when deciding pricing schemes, lawmakers settle policy axes before drafting per-axis policy, etc.). The convergence of three independent analogs on the same mechanism structure provides HIGH confidence the mechanism arguments hold.

**Generalization confidence: MEDIUM.** Homegrown has N=1 empirical instance — `comprehenslate`. The four-condition applicability gate is structurally clean, but the gate has been validated against only one positive case (translation configuration). Generalization to taxonomy design, API design, curriculum design, decision frameworks, and discipline design within homegrown itself is theoretically sound but empirically untested.

**Calibration trajectory.** Three stages:
- **Bootstrap** (current; N=1). The pattern is named, articulated, and ready for application. Generalization confidence remains MEDIUM.
- **Early operation** (after N=2-3 applications, with at least one in a domain other than configuration design). Generalization confidence becomes MEDIUM-HIGH if applications succeed.
- **Mature** (after N≥5 applications with at least 2 structurally distinct domains represented). Generalization confidence promotes to HIGH.

**Domain definition.** A "domain" is a problem-type with structurally distinct axes-and-interactions. Example domains: configuration design (`comprehenslate`'s case), taxonomy design, API design, curriculum design, decision-framework design. The structural distinctness is determined by whether the cross-axis interaction profile differs — configuration design has defaults-driving across axes; taxonomy design has subsumption hierarchies; API design has dependency graphs. Domains with similar interaction profiles count as the same domain for calibration purposes.

**Success criterion per application.** An application counts as successful calibration evidence when ALL THREE hold:
1. The synthesis inquiry's self-assessment verdict was PROCEED.
2. Downstream use of the canonical spec produced no diagnostic with a structural-level LAYER 1 failure-mode fire. Small fixes (a missing policy; a tweaked level definition) are acceptable; structural restructuring (re-running the synthesis with different matrices; re-deciding the axis set) is not.
3. At least one architectural pattern was named at synthesis time that couldn't have been seen in a single inquiry.

### 9. Forward-pointers (deferred per user)

The user explicitly stipulated that three follow-up directions are out of scope for THIS inquiry:

- **Canon connection.** How H+V+S relates to `docs/canon/thinking_space_dynamics.md` (the coordinate-system framing here may map directly to the "thinking-space" framing in canon), `docs/canon/what_is_meaningful_traversal.md` (H+V+S produces meaningful traversal of a configuration space — coverage, convergence, productivity), and `docs/canon/project_north_star.md` (the self-improving cognitive system may need a self-spec pattern; H+V+S may be it).
- **Artifact form.** Whether H+V+S should be implemented as a protocol (sibling to `branch_inquiry.md` / `conclude.md` / `loop_diagnose.md`), a runner (sibling to MVL / MVLw / MVL+), a documentation pattern, a Pre-Template Check in `cognitive_harness/MVLw/SKILL.md`, or something else.
- **Process specification.** Explicit procedural steps, triggers, gates — the operational specification of when to invoke each phase, how to detect completion of each phase, etc.

These are each their own future inquiry.

## Next Actions

### MUST

No MUST items. The articulation IS the deliverable; nothing additional is required for this finding's value to be realized.

### COULD

- **What:** Run a follow-up inquiry connecting H+V+S to the three canon documents.
- **Who:** Future MVLw inquiry author.
- **Gate:** Observable — when the user invokes the canon-connection inquiry (the user has stated this will be done in a subsequent inquiry).
- **Why:** The canon connection determines whether the pattern is a methodology asset for the broader homegrown program (the self-improving cognitive system) or only an isolated naming convention. The connection is the user's stated next priority.

- **What:** Apply H+V+S to a second problem in a domain other than configuration design, to begin the early-operation calibration phase.
- **Who:** Future inquiry author (likely the same user, on a different project or sub-problem).
- **Gate:** Condition-bound — when a coordinate-space problem in a non-configuration domain arises (e.g., taxonomy design; curriculum design; API design within homegrown itself).
- **Why:** Generalization confidence is MEDIUM at N=1. A second application in a different domain begins the trajectory toward HIGH confidence. The application also stress-tests the four-condition applicability gate.

- **What:** Open an artifact-form inquiry to decide whether H+V+S should be a protocol, a runner, a documentation pattern, or a Pre-Template Check.
- **Who:** Future MVLw inquiry author.
- **Gate:** Condition-bound — when the canon-connection inquiry completes and the artifact form's shape becomes clearer (the canon connection may constrain the artifact form).
- **Why:** Without an artifact form, the pattern remains a documented convention rather than an executable methodology asset. The artifact form is what makes future AI sessions recognize and apply the pattern reliably.
- **Depends-on:** COULD item "Run the canon-connection inquiry." This COULD is GATED — the artifact form should not be decided until the canon connection is settled.

### DEFERRED

- **What:** Re-evaluate the alternative name "Coordinate-System-First Inquiry Pattern" against H+V+S.
- **Gate:** Condition-bound — when the canon-connection inquiry completes. If `docs/canon/thinking_space_dynamics.md`'s coordinate-system framing is load-bearing in the connection, the alternative name promotes to primary; if not, H+V+S stays.
- **Why (if revived):** Naming coherence with canon improves the pattern's discoverability and conceptual fit within the broader homegrown program.

- **What:** Specify the post-synthesis maintenance lifecycle's operational mechanics (when does revision count as a new H+V+S iteration vs. a within-version patch; what artifact form encodes the lifecycle; what triggers move the canonical spec from one phase to the next).
- **Gate:** Condition-bound — when the artifact-form inquiry completes and the H+V+S artifact form is decided.
- **Why (if revived):** The maintenance lifecycle is named at meaning layer in this finding but not operationalized; without operationalization, downstream consumers can't tell whether a given patch is a v1.0 patch or a v1.1 trigger.
- **Depends-on:** COULD item "Open an artifact-form inquiry." This DEFERRED is GATED — operational specification depends on artifact form being decided first.

- **What:** Consider the phenomenological reframe (H+V+S is one continuous operation seen from different angles, not three discrete phases) as a theoretical foundation.
- **Gate:** Research frontier — no known evaluation criteria. Revival depends on whether a future cognitive-science or methodology-theory inquiry surfaces a reason to reframe.
- **Why (if revived):** A continuous-operation framing might bridge to dynamic cognitive-system theories more cleanly than the discrete-phase framing. Currently the discrete-phase framing is operationally tractable; the reframe is preserved as a research direction.

- **What:** Consider gate-as-router redesign (gate becomes a multi-question diagnostic that classifies problem type and recommends pattern, rather than a binary YES/NO test).
- **Gate:** Condition-bound — when at least 3 different methodology patterns coexist in homegrown and the choice among them is non-trivial (currently single-inquiry MVL, MVL+, MVLw, and H+V+S are the main patterns; a 4-way decision is borderline).
- **Why (if revived):** Multi-pattern coexistence eventually requires routing logic; a single-pattern gate doesn't capture the choice space.

- **What:** Consider bidirectional lineage (the horizontal finding declares which verticals refine it, completing the audit loop).
- **Gate:** Observable — when the lineage chain becomes deep enough that child-to-parent traversal alone misses important context (typically when verticals fan out to depth ≥ 2, as `comprehenslate`'s A1 sub-fields did).
- **Why (if revived):** Bidirectional lineage would close the audit loop; currently auditing FROM the horizontal forward requires reading the finding folders manually rather than following pointers.

- **What:** Consider simplifying the seven enablement claims into 3 cluster claims (coordinate-space artifact production / partial updatability / cross-session handoff).
- **Gate:** Condition-bound — when the articulation is being adapted for a more concise downstream audience (e.g., a documentation pass or a Pre-Template Check description).
- **Why (if revived):** Seven claims are appropriately granular for a meaning-layer articulation; three clusters are appropriately concise for a one-line description.

## Reasoning

### Why this articulation over alternatives

**Why three phases, not two.** The user named two phases (horizontal and vertical). The Sensemaking phase's Ambiguity 1 surfaced the question whether synthesis is a separate phase or just an instance of the broader Synthesis Trigger that homegrown's MVLw/MVL+ runners already handle. The structural test: did `comprehenslate`'s synthesis have a load-bearing role no vertical could fulfill? YES — the four cross-axis matrices and the nine emergent architectural patterns require reading all verticals together, which the synthesis does and no single vertical can. The matrices and the Patterns Compendium are structurally distinct outputs from anything a vertical produces. Resolution: synthesis is a third phase; the user's two-phase framing is preserved as the PRIMARY user-facing naming and the synthesis is named as the third phase with its cross-axis role made explicit.

**Why distinct from `/decompose`, sharply.** The Sensemaking phase's Ambiguity 2 surfaced the question whether H+V+S is just `/decompose` applied at scale plus N MVL loops plus CONCLUDE. The structural test: do scope and fan-out distinguish them? YES — `/decompose` operates WITHIN one MVL loop as one discipline (perceiving coupling, partitioning); H+V+S operates ACROSS multiple MVL loops (fan-out then fan-in). The unit of work differs by an order of magnitude. Each vertical IS A FULL MVL LOOP, not a piece of work within a loop. Resolution: H+V+S is a methodology pattern composing MVL inquiries; `/decompose` is a discipline within one MVL inquiry. The horizontal phase's MVL inquiry could use `/decompose` if its cognizer wants — but the pattern doesn't require it.

**Why MEDIUM generalization confidence, not HIGH.** The Sensemaking phase's Ambiguity 3 surfaced the specific-vs-pattern question: is generalization from N=1 premature? Three lines of evidence support generalization (mechanism arguments grounded in cognitive load; software-engineering / math / human-decision-making analogs; the post-synthesis diagnostic's structural localization), but empirical evidence in homegrown remains N=1. Resolution: distinguish mechanism confidence (HIGH, grounded in mechanism arguments + analogs) from generalization confidence (MEDIUM, awaiting N≥3 mixed-domain applications). The trajectory is bootstrap → early → mature with explicit N thresholds.

**Why a four-condition applicability gate, not three.** The Innovation phase generated a candidate (the original three-condition test from sensemaking) and a Constraint-Manipulation variant adding a fourth condition (finite coordinate space). The Critique phase evaluated whether the fourth condition is distinct from the existing three. Concrete distinguishing case: ML hyperparameter tuning has 5-10 axes each with continuous range, would pass the three-condition test (multiple orthogonal dimensions, per-dimension specifiability, cross-dimension interactions), but is structurally inappropriate for H+V+S — Bayesian optimization or grid search is the right tool. The fourth condition (finite coordinate space) excludes this case correctly. Resolution: incorporate the fourth condition.

**Why a five-way failure split, not four.** The Innovation phase surfaced a fifth failure mode (synthesis-mediated commitment freezing) via Inversion at the meta-decision piece. The Critique phase evaluated whether this is a pattern failure or a downstream-consumer behavior. Defense: comprehenslate's v1.0 → v1.1 transition explicitly shows the pattern can mitigate this by emitting the canonical spec with an explicit revision stance. The mitigation is a pattern-level structural choice (how the canonical spec is FRAMED on emission), not a downstream choice. Resolution: incorporate as fifth failure mode with the mitigation specified at the synthesis phase.

### KILLs (and what they teach)

**KILL: "Prevention" as a new category in failure-modes discussion.** The Innovation phase proposed adding Prevention as a third category alongside detection and recovery. The Critique phase showed the proposal is redundant: the mechanism arguments in Section 3 (horizontal-first ordering, per-axis isolation, synthesis cross-axis resolution) ARE the prevention claims. Adding Prevention as a separate category would duplicate Section 3 content. Resolution: KILL the new category; in the articulation, make the relationship between mechanism arguments (= prevention) and failure modes (= what fails when prevention is incomplete) explicit by stating both at the start of Section 6.

**KILL: 4-phase restructure (Gate → Horizontal → Vertical → Synthesis).** The Innovation phase's Assembly Check surfaced this as an emergent cluster combining the gate piece (P6) into the mechanism piece (P2) as a phase-0. The Critique phase showed the gate is structurally a trigger, not a phase — it makes a routing decision rather than performing a cognitive operation with input contract / deliverable / lineage handoff. Treating it as a phase forces phase-shape properties it doesn't have. The same adoption-forcing benefit (the gate can't be skipped) can be achieved by making the gate's invocation the first input-contract step of the horizontal phase, without restructuring the pattern. Resolution: KILL the 4-phase restructure; incorporate the gate-as-first-step refinement into Section 4.

### REFINEs (and what changed)

The Critique phase REFINED five candidates:

- The "lucky discovery" trade-off in Section 3 is narrower than the Innovation phase originally proposed: the synthesis recovers most cross-axis discoveries at additional cognitive cost; what's lost is within-axis discovery of non-axis properties.
- The orthogonality condition in Section 4 is relaxed to approximately orthogonal with the operational test "no axis's value is FORCED by another's," aligning the gate with `comprehenslate`'s practical reality.
- The per-domain calibration trajectory in Section 8 includes an explicit domain definition (structurally distinct axes-and-interactions) to prevent counting within-domain repetition as cross-domain generalization evidence.
- The trade-off framing in Section 3 is incorporated at piece level (P4 structural costs + P5 narrowed lucky-discovery) without replacing the net-benefit framing at model level — within the applicable problem class, the pattern produces net benefit; the trade-offs are bounded costs.
- The post-synthesis maintenance lifecycle in Section 7 is named at meaning layer; operational specification is deferred to a future inquiry.

### SURVIVEs

The clean SURVIVE was the success criterion in Section 8 — three operational tests for what counts as successful calibration evidence. The criterion is operationally precise, doesn't require empirical evidence to commit to (a first-pass criterion can be revised as evidence accumulates), and addresses the underspecification of "N≥5 mature" that the current trajectory carries.

Other SURVIVEs with caveats: the structural-cost trade-off discussion (with the explicit distinction from application failures); the fourth applicability condition (with the worked example); the fifth failure mode (with the pattern-level mitigation specified).

## Open Questions

### Monitoring

- **Applicability gate firing rate.** Observable after N=3-5 new inquiries that could potentially be H+V+S problems. If the gate fires too rarely (cognizers default to single-inquiry MVL even when the four conditions hold), the gate may be under-discoverable. If it fires too often (cognizers default to H+V+S for problems where single-inquiry MVL would suffice), the gate may be over-permissive.
- **Per-domain calibration accumulation.** Observable when each H+V+S application completes. Track domain identity, success criterion fire status, and cumulative N. Promote generalization confidence when N≥5 with ≥2 structurally distinct domains.

### Blocked

None — this finding's deliverables are not blocked by external work.

### Research Frontiers

- **The phenomenological "no phases" reframe.** Is H+V+S more accurately characterized as one continuous cognitive operation seen from different angles, rather than three discrete phases? The discrete-phase framing is operationally tractable; the continuous-operation framing might bridge more cleanly to dynamic cognitive-system theories. The choice between framings depends on theoretical commitments not yet made in homegrown.

- **Gate-as-router redesign.** If homegrown eventually has more than ~4 methodology patterns coexisting, the binary YES/NO applicability gate may need to become a multi-question diagnostic that classifies problem type and recommends a pattern. Currently single-inquiry MVL, MVL+, MVLw, and H+V+S are the main patterns; the 4-way decision is borderline tractable as binary tests. The redesign is a research frontier; it requires deciding what the decision space looks like.

- **Canon connection.** How H+V+S relates to `docs/canon/thinking_space_dynamics.md`, `docs/canon/what_is_meaningful_traversal.md`, and `docs/canon/project_north_star.md`. The connection is the user's stated next priority but is out of scope for THIS finding.

### Refinement Triggers

- **At N=2 successful H+V+S applications with at least one in a non-configuration domain:** re-evaluate generalization confidence (MEDIUM → MEDIUM-HIGH). The trigger is observable per the success criterion in Section 8.

- **At N≥5 applications with ≥2 structurally distinct domains represented:** promote generalization confidence to HIGH. Trigger observable per the same criterion.

- **At any application where the canonical spec is treated as immutable by downstream consumers despite the explicit-revision stance:** re-evaluate the mitigation specified at the fifth failure mode (Section 6). Trigger condition: the diagnostic protocol can't motivate a revision because the v1.0 framing is treated as authoritative. If this fires, the explicit-revision stance needs strengthening (e.g., a v1.0 → v1.1 transition exercise mandated at synthesis-emit time).

- **If a counter-example surfaces — a coordinate-space problem where all four conditions hold but H+V+S clearly produces worse output than single-inquiry MVL:** re-open the applicability gate. Trigger condition: a documented case where the cognizer follows H+V+S correctly per its protocol but the synthesis fails to produce a stable canonical spec, AND a single-inquiry MVL on the same problem produces a better output.

- **If the alternative name "Coordinate-System-First Inquiry Pattern" connects more cleanly to canon than H+V+S:** re-evaluate the naming choice. Trigger condition: the canon-connection inquiry completes and shows the coordinate-system framing is load-bearing in the connection.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
yes , this is a specific pattern in development and it is needed for our homegrown project 100% i am sure.  i would like to call
  it horizantel dive and vertical refinement

  we dived into what are the axises for that particular situation and and then vertically, for each axis we run our MVL loop to
  refine them,


  this mechanism is extermely useful, but lets discuss what this is , why it is useful? what it enables,

  later on we ll discuss how this is relevant to homegrown's  docs/canon/thinking_space_dynamics.md and
  docs/canon/what_is_meaningful_traversal.md and docs/canon/project_north_star.md 
  
  but now our focus is to understand this patter better
```

</details>
