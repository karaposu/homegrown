---
status: active
corrects:
  - devdocs/inquiries/2026-05-13_12-15__what_is_mapping_meta_paradigms/finding.md
  - devdocs/inquiries/2026-05-13_07-16__is_mapping_required_core_of_explore/finding.md
related:
  - devdocs/inquiries/2026-05-13_11-54__explore_relevance_selection_mechanism/finding.md
  - devdocs/inquiries/2026-05-13_06-30__explore_canonical_coverage_via_staged_iteration/finding.md
---

# Finding: Meta-Paradigm Framework for Mapping (v2 — CORRECTS edition)

## Vocabulary stack

To avoid conflating levels of abstraction, this finding uses a precise terminology hierarchy:

- **Definition** (Layer 1) — the minimum-core statement of what mapping IS, applicable to every paradigm.
- **Axis** (Layer 2) — a generative dimension along which paradigms vary. 4 primary axes and 8 secondary axes.
- **Paradigm** (Layer 3) — a categorically-distinct type of mapping, identified by which structural feature it preserves. 12 paradigms enumerated, with explicit revisability.
- **Kind** — a discipline-scoped instance of one or more paradigms (the prior identity-refresh finding's level). `/explore` produces 7 observable kinds that correspond to 6 of the 12 paradigms.
- **Instance** — a specific observed mapping (a particular `exploration.md` file, a particular code dependency graph, a particular subway map).

"Paradigm" here means *categorically-distinct type of mapping*, not the Kuhnian sense (exemplar that organizes a field) or the ecosystem sense (technological framework).

## Surrounding context (why this redo matters)

The just-completed paradigm finding (`2026-05-13_12-15`) declared its relationship to the prior 7-kinds finding (`2026-05-13_07-16`) as REFINES — with the framing that the 7-kinds was "preserved at its level" as a `/explore`-scoped projection of meta-paradigms. The user corrected this directly: *"i ddisagree, you shouldnt have preserve the prior understanding just for the sake of preserving it, it tried to understand mapping but it was wrong. redo this."*

The user's correction reveals a structural error. The prior 7-kinds was not right-at-its-level but wrong-at-its-level — it claimed to be a typology of mapping kinds, but the enumeration was based on `/explore` observation, not structural grounding. Preserving it under a "layer-shift" treatment was the failure mode named in the just-completed finding's OWN meta-lesson — and committed within the same artifact that introduced the lesson.

This finding redoes the relationship-declaration as CORRECTS. It also strengthens the meta-lesson with an obligatory diagnostic that would have caught the failure before it committed, names the underlying bias (**preservation-for-preservation's-sake**), and names the meta-pattern by which the failure happened (**lesson-introduces-its-own-trap**: a new vocabulary in a meta-lesson becomes a vector for the failure mode it names). The framework content of the just-completed finding is preserved unchanged; the correction is surgical — only the relationship-declaration, the meta-lesson framing, and a few framing sentences in the body are revised.

---

## Finding Summary

- **This finding CORRECTS two priors.** First, the original identity-refresh finding at `devdocs/inquiries/2026-05-13_07-16__is_mapping_required_core_of_explore/finding.md`, which claimed that 7 observed kinds of mapping (layout, concept, status, coverage/confidence, frontier, possibility, partly-excluded relational) constituted a typology of mapping kinds. That typology claim was wrong — it was an enumeration of `/explore` observations, not a structurally-grounded typology. The 7 observations themselves are preserved as data; the typology claim is corrected.
- **Second, the just-completed meta-paradigm finding** at `devdocs/inquiries/2026-05-13_12-15__what_is_mapping_meta_paradigms/finding.md`, which framed its relationship to the original 7-kinds as REFINES (with "layer-shift" semantics that preserved the prior "at its level"). That relationship-declaration was wrong — the prior 7-kinds was not right-at-its-level but wrong-at-its-level. The framework content of the just-completed finding (the minimum-core definition, axes, 12 paradigms, classification, revisability) is preserved unchanged; the relationship-declaration and meta-lesson framing are corrected.
- **The framework content remains the answer to "what is mapping."** Mapping is a purposive structure-preserving correspondence from a source to a target, specified by 4 primary axes (what-preserved, encoding-type, operational-act, purpose) and 8 secondary axes. 12 crystallized paradigms (Cartographic, Taxonomic, Relational, Functional, Embedding, Process/Behavioral, Constraint, Possibility, Navigational, Coverage, Reflexive, Analogical) are clusters in that axis space. `/explore` produces 6 of the 12.
- **The strengthened meta-lesson on CORRECTS vs REFINES vs SUPERSEDES** adds an OBLIGATORY DIAGNOSTIC (a 3-question structural check) that the just-completed finding's REFINES choice would not have survived. It names the bias **"preservation-for-preservation's-sake"** (which the user identified by name), and names the meta-pattern **"lesson-introduces-its-own-trap"** — a new vocabulary in a meta-lesson becomes a vector for the failure mode the lesson names.
- **The just-completed paradigm finding serves as the worked example** of the failure being named. Within a single artifact, it introduced the layer-shift lesson AND committed the failure named in that lesson. The strengthened diagnostic, applied to its REFINES choice, yields three NOs → CORRECTS.
- **Self-reference acknowledgment.** This finding applies the strengthened diagnostic to its own choice of CORRECTS for both priors; the diagnostic yields three YESes → CORRECTS is structurally appropriate. The lesson is demonstrated working on the case that motivated it; the regress is bounded by external signals (user adjudication, structural argument).

---

## Changes from Prior — for the original identity-refresh finding

**Prior path:** `devdocs/inquiries/2026-05-13_07-16__is_mapping_required_core_of_explore/finding.md` — the Identity Refresh v1 finding, which established that mapping is core to `/explore` and enumerated 7 observed kinds of mapping (layout, concept, status, coverage/confidence, frontier, possibility, partly-excluded relational).

**Revision trigger:** User correction. The user explicitly stated *"it tried to understand mapping but it was wrong"* — the 7-kinds typology claim was not a useful answer to "what is mapping" or "what kinds of mapping exist." The enumeration was empirical (observations of `/explore` output) presented as if it were a structurally-grounded typology; the gap was the structural grounding.

**What's preserved.** Two distinct things, both unaffected by the correction:

1. **Claim P — Mapping IS core to `/explore`.** The core claim that mapping is the upstream cognitive operation `/explore` performs remains correct and unchanged. The paradigm-framework in this finding's `## Finding` section explicitly preserves this claim.
2. **The 7 observations as DATA.** The phenomena enumerated by the prior (layout, concept, status, coverage/confidence, frontier, possibility, partly-excluded relational) are real `/explore`-observed phenomena. They remain valid as observations. The projection table in `## Finding` shows what meta-paradigms each observation corresponds to.

**What's corrected.** Two claims, both replaced:

1. **Claim Q — The 7-kinds IS the typology of mapping kinds.** This claim is wrong. A typology requires structural grounding — axes that generate it; criteria for membership. The 7-kinds had neither. The meta-paradigm framework in `## Finding` replaces this claim with a structurally-grounded enumeration of 12 paradigms in a 4-primary-axis space.
2. **The implicit generalization from `/explore` observations to mapping-in-general.** The prior implicitly treated `/explore` observations as covering the space of mapping; in reality, `/explore` produces 6 of the 12 paradigms; the other 6 belong to other disciplines (per the NOT-list in `/explore` §1.3).

**No migration required.** Citations of the prior that reference Claim P or specific observations continue to work. Citations of the prior that reference Claim Q (the typology claim) should be updated to reference the paradigm framework in this finding.

---

## Changes from Prior — for the just-completed paradigm finding

**Prior path:** `devdocs/inquiries/2026-05-13_12-15__what_is_mapping_meta_paradigms/finding.md` — the meta-paradigm finding, which produced the framework (minimum-core definition + 4+8 axes + 12 crystallized paradigms + classification + revisability) AND declared its relationship to the original 7-kinds as REFINES (with "layer-shift" semantics).

**Revision trigger:** User correction. The user identified that the relationship-declaration was wrong: the prior 7-kinds was not right-at-its-level but wrong-at-its-level. The just-completed finding's own meta-lesson on layer-shift semantics named the failure mode of "treating a correction situation as a layer-shift situation" — and then committed exactly that failure within the same artifact. This finding redoes the relationship-declaration as CORRECTS and strengthens the meta-lesson with an obligatory diagnostic.

**What's preserved unchanged from the just-completed finding** (its framework content survives this correction intact):

- The minimum-core definition of mapping
- The 4 primary axes (what-preserved, encoding-type, operational-act, purpose)
- The 8 secondary axes (scope, reference-frame, meta-level, origin, output-form, temporality, fidelity, viewpoint)
- The 12 crystallized paradigms with their literature grounding (Cartographic, Taxonomic, Relational, Functional, Embedding, Process/Behavioral, Constraint, Possibility, Navigational, Coverage, Reflexive, Analogical)
- The classification guidance with disagreement-handling and compositionality
- The revisability clause with explicit gate triggers
- The `/explore` §1.7 addition (optional secondary deliverable)
- The vocabulary stack (definition / axis / paradigm / kind / instance)
- The Open Questions, Research Frontiers, and Refinement Triggers

**What's corrected** (the framing around the framework, not its content):

- **Relationship-declaration.** The just-completed finding's `refines:` is corrected to `corrects:` in this finding's frontmatter. The relationship to the prior 7-kinds is CORRECTS, not REFINES.
- **Meta-lesson framing.** The just-completed finding's layer-shift meta-lesson is strengthened — see "The strengthened meta-lesson on CORRECTS vs REFINES vs SUPERSEDES" below.
- **Kind-to-paradigm mapping framing.** The just-completed finding's projection table was framed as "how the prior 7 kinds project onto the 12 meta-paradigms" (implying the typology is preserved). It is re-framed here as "what the 7 prior observations correspond to in the meta-paradigm framework" — preserving observations as data; the typology claim is corrected, not projected.
- **Finding Summary framing.** The just-completed finding's summary led with the 3-layer model and treated the relationship as a clean layer-shift. The summary here leads with CORRECTS and names the doubled correction explicitly.

### The strengthened meta-lesson on CORRECTS vs REFINES vs SUPERSEDES

#### Obligatory diagnostic (the load-bearing addition)

Before declaring REFINES for any finding's relationship to a prior, the runner MUST run the following 3-question check:

1. **Claim-truth test.** Is the prior's claim TRUE at its claimed level? Test structurally, not by precedent. "The prior is documented" is not evidence; the test is "would the prior's claim hold up under independent scrutiny by a reader unfamiliar with the project?"
   - *YES example:* a prior claiming "this method runs in O(n) time" that empirically does run in O(n) — structural verification confirms.
   - *NO example:* the prior 7-kinds claiming to be a typology of mapping kinds when no axes generate it — a typology requires structural grounding; the prior had none.

2. **Level-coherence test.** Is the prior's level a coherent and useful level for the question? A claim can be locally consistent yet straddle levels; a typology claim made from observation-only evidence is straddling. A claim at "the wrong level for its question" fails this test even if the local claim is internally consistent.
   - *YES example:* a finding claiming "this code has O(n²) complexity" — algorithmic-complexity is a well-defined level.
   - *NO example:* the prior 7-kinds straddled "observation-of-`/explore`-output" level and "typology-of-mapping" level; neither cleanly applied to the question being answered.

3. **External-citation test.** Would the prior's claim survive citation by a different reader in a different context, without this finding's framing? If the prior's claim only makes sense given this finding's surround, the prior was not right at its claimed level — it was right-given-our-current-thinking, which is not what REFINES preserves.
   - *YES example:* a finding's empirical observation that "library X has function Y" — observation survives independent verification.
   - *NO example:* the typology claim of the 7-kinds — under independent reading without the just-completed finding's framing, the typology lacks structural grounding.

**Decision rule:**
- **Any explicit NO answer → CORRECTS** (regardless of any level-distinction between this finding and the prior).
- **Any UNCLEAR answer also → CORRECTS** (the default-to-CORRECTS rule applies; UNCLEAR is uncertainty, and uncertainty defaults to CORRECTS to keep the burden of proof on REFINES).
- **Three explicit YES answers → REFINES** is structurally appropriate.

**Default to CORRECTS under uncertainty.** The burden of proof rests on the REFINES choice: REFINES requires positive demonstration that the prior is right at its level.

**Behavioral pointer.** If you find yourself about to declare REFINES because the prior is at a different level, STOP and run the 3-question check before declaring. The check takes 1-2 minutes; the failure takes much longer to undo. The MUST in this obligatory diagnostic applies to actions, not just reading.

**Why obligatory.** Without the diagnostic, the path of least resistance is to apply REFINES (with "preserved at its level" framing) whenever there is a plausible level-distinction. The just-completed paradigm finding did exactly this — and committed the failure mode named in its own meta-lesson. The obligatory diagnostic is the prevention mechanism.

#### Failure mode named: "preservation-for-preservation's-sake"

A bias toward keeping prior work intact, motivated by reluctance to invalidate previous effort, that leads reasoners to apply REFINES (with "preserved at its level" framing) when the prior's claim was actually wrong at its level. The bias paper-overs the wrong claim with the language of preservation; the result is that wrong claims survive under a relabeling.

**Recognition signal.** When the reasoner finds themselves justifying REFINES with phrases like *"the prior is preserved at its level"* or *"the prior's contribution stands at the kinds-of-X level"* WITHOUT having applied the obligatory diagnostic, this bias is operating. The diagnostic forces the question the bias avoids: *"is the prior's claim actually right at its claimed level?"*

**Source.** The bias was identified and named by the user's correction: *"you shouldnt have preserve the prior understanding just for the sake of preserving it."* The user named the bias before the discipline did; this naming carries forward the user's recognition as a structural failure mode worth catching.

#### Meta-pattern named: "lesson-introduces-its-own-trap"

When a discipline introduces a new vocabulary in a meta-lesson, that vocabulary can itself become a vector for the failure mode the lesson names. The mechanism:

1. The lesson identifies a failure mode (e.g., "wrong claim survives because the prior is preserved at its level").
2. The lesson introduces vocabulary to discuss the failure (e.g., "layer-shift semantics," "preserved at its level").
3. The vocabulary is appealing because it neatly resolves the tension (preservation + addition feels clean).
4. The lesson includes a warning (don't use this when the prior's claim is actually wrong).
5. The warning requires a diagnostic check that is HARDER than just applying the new vocabulary.
6. Path of least resistance: apply the vocabulary without the check.
7. Result: the failure mode is COMMITTED using the vocabulary that was supposed to prevent it — within the same artifact, sometimes within paragraphs of the lesson's text.

**Why this is recognizable as a pattern.** The vocabulary's appeal makes the warning easy to skip. The check requires self-suspicion that the vocabulary's own framing discourages. The pattern occurs within a single artifact (the lesson and the failure share the same finding), making it especially insidious.

**Prevention.** Pair every new vocabulary in a meta-lesson with an obligatory diagnostic check before the vocabulary's first application. Make the diagnostic CONCRETE (a multi-question structural check with explicit decision rule, not a vague "consider carefully"). Include a worked example of the failure case in the lesson itself, so the path of least resistance includes seeing the failure mode in action.

**Acknowledged scope.** The pattern applies broadly to vocabulary introduction in meta-lessons. The strengthened meta-lesson here is itself an instance of new vocabulary (the obligatory diagnostic; the named failure modes); this finding pairs the vocabulary with its concrete worked example (next subsection) and applies it to its own choice of CORRECTS (the self-reference acknowledgment after the example).

**Not-a-trump-card warning.** The strengthened lesson's vocabulary (named failure modes; obligatory diagnostic; default-to-CORRECTS) is NOT a trump card. Invoking any of these terms in a future inquiry requires running the obligatory diagnostic on the specific case at hand. The vocabulary is a tool for surfacing the question, not a verdict that bypasses the question. Otherwise the vocabulary becomes itself a vector for the failure mode it names — the meta-pattern recurs at one level higher.

#### Supporting clarifications

Three supporting points reinforce the strengthened lesson:

**(a) Separator between "right at wrong level" and "wrong at claimed level."** These are different cases:

- **Right at wrong level:** the prior's claim is TRUE at level X, but X is not the right level for the question (e.g., "this method runs in O(n)" is true at the algorithmic level but the question was about user-perceived latency). The claim is preserved at its level; REFINES with explicit acknowledgment of level-mismatch may be appropriate.
- **Wrong at claimed level:** the prior's claim is FALSE at its claimed level (e.g., "the 7-kinds IS the typology" when the typology lacks structural grounding). The claim is corrected; CORRECTS applies regardless of level-distinction.

The just-completed paradigm finding's REFINES choice treated the 7-kinds as the first case. The user's correction reveals it was actually the second case — the typology claim was wrong even at the kinds-typology level it inhabited.

**(b) Counter-test via different-context citation.** If the prior's claim only makes sense given this finding's framing, the prior was not right at its level — it was right-given-our-current-thinking. Test: cite the prior in a different context (e.g., to a reader unfamiliar with this project, or in a six-months-later self-review). If the claim doesn't survive without this finding's framing, choose CORRECTS.

**(c) Inversion framing — "when to choose CORRECTS."** The lesson is also readable as a positive rule: choose CORRECTS when (i) the prior's claim is wrong at its level; OR (ii) the prior straddled levels and the claim doesn't hold at the level it actually inhabited; OR (iii) the user (or other external signal) indicates the prior was a wrong attempt. The inverse framing makes the discipline's burden-of-proof direction explicit: REFINES requires positive demonstration; CORRECTS is the default under uncertainty.

#### Worked example: the just-completed paradigm finding

The just-completed paradigm finding (`2026-05-13_12-15`) is itself the concrete worked example of the failure mode being named. Within a single artifact, it:

1. **Introduced the layer-shift meta-lesson** (in its Changes-from-Prior section), naming the failure mode of *"treating a correction situation as a layer-shift situation; the wrong claim survives because 'the prior is preserved at its level.'"*
2. **Committed that exact failure** by declaring REFINES with layer-shift framing on the prior 7-kinds — without applying the diagnostic that the obligatory-diagnostic rule (now added to this strengthened lesson) would have required.
3. **Used the lesson's own vocabulary** to legitimate the failure. Phrases like *"the prior is preserved at its level"* and *"the prior's 7 kinds is a `/explore`-scoped projection of the meta-paradigms"* papered over the fact that the prior's typology claim was structurally wrong, not just narrowly-scoped.

**Applying the strengthened diagnostic to the just-completed finding's REFINES choice:**

1. **Claim-truth test on the prior 7-kinds typology claim.** Was the typology claim TRUE at its claimed level (the level of "what kinds of mapping exist")? **NO.** The enumeration was based on `/explore` observation, not on structural grounding. A typology requires axes that generate it and criteria for membership; the 7-kinds had neither.
2. **Level-coherence test.** Was the typology level a coherent and useful level for the question (what is mapping)? **NO.** The 7-kinds straddled "observation-of-`/explore`-output" level and "typology-of-mapping" level; neither cleanly applied.
3. **External-citation test.** Would *"the 7-kinds is the typology of mapping kinds"* survive in a different context, without the prior finding's framing? **NO.** Cited to a reader unfamiliar with the project, the claim would be challenged for lack of structural grounding.

All three answers are NO → CORRECTS (not REFINES). The user's correction was the external signal that confirmed what the diagnostic would have caught.

**The lesson the worked example demonstrates.** The just-completed finding's failure was not a one-off oversight; it was the structurally predictable outcome of introducing new vocabulary (the layer-shift framing) without an obligatory diagnostic. Future inquiries that introduce new vocabulary in meta-lessons should anticipate the same pattern and pair the vocabulary with its diagnostic from the outset.

#### Self-reference acknowledgment: applying the strengthened diagnostic to this finding

This finding declares CORRECTS to both the original 7-kinds finding and the just-completed paradigm finding. The strengthened diagnostic must apply to THIS finding's own choice too, or the lesson is hollow. Applying it:

1. **Claim-truth test on this finding's claim ("the just-completed finding's REFINES was wrong; CORRECTS applies").** Is this claim TRUE at its claimed level (the relationship-declaration level)? **YES.** The user's correction is the independent external signal; the diagnostic applied to the just-completed finding's REFINES choice yields three NOs (in the worked example above); the structural grounding for CORRECTS is positive.
2. **Level-coherence test.** Is the relationship-declaration level a coherent and useful level for this finding's claim? **YES.** Relationship labels (REFINES, CORRECTS, SUPERSEDES) are structural commitments with operational consequences (what gets preserved, what gets corrected); the level is well-defined and recurrently relevant.
3. **External-citation test.** Would this finding's CORRECTS claim survive in a different context? **YES.** The user's correction is independent external signal; the diagnostic, applied to the just-completed finding, yields the same verdict regardless of context.

All three answers are YES → CORRECTS is structurally appropriate. The strengthened diagnostic, applied to this finding's own choice, passes. The lesson is demonstrated working on the case that motivated it.

**Partial-tautology acknowledgment.** The diagnostic was developed in light of this case, so its passing here is informative but not fully independent grounding. Stronger grounding comes from the user's external correction (already cited) and from future cases where the diagnostic is applied to inquiries not yet seen; if the diagnostic produces robust verdicts on those, it earns confidence beyond this self-application.

**What a self-reference-blind version would look like.** Without this acknowledgment, this finding would declare CORRECTS without testing whether CORRECTS itself meets the strengthened diagnostic. A reader could legitimately ask: *"You introduced an obligatory diagnostic — did you apply it to your own choice?"* Self-reference-blind findings produce circular legitimacy: the lesson endorses itself without external check. The acknowledgment here closes the loop with external grounding (the user's correction + the structural test applied transparently + the partial-tautology note).

**Bounded regress.** Could a future inquiry CORRECTS this finding's CORRECTS? In principle yes, if (a) a future user signals this finding was wrong; OR (b) the diagnostic applied to this finding's CORRECTS yields a NO under independent scrutiny; OR (c) new evidence emerges. The chain is bounded by external signals; it is not unbounded recursion.

---

## Question

What is "mapping" at a meta-theoretical level, and what categorically distinct mapping paradigms exist — independent of any specific discipline like `/explore` and independent of any specific observed kind — such that the set of paradigms is exhaustive (or close to it) and structurally grounded rather than enumerated from examples?

**Goal.** A meta-level definition of mapping plus an enumeration of mapping paradigms (the categorical types, not the concrete kinds), grounded in first principles rather than discipline-bound observation.

---

## Finding

### Layer 1 — The minimum-core definition

**Mapping is a purposive structure-preserving correspondence from a source to a target, specified by which structural feature of the source is preserved, what target medium encodes it, what operation produces it, and what purpose it serves.**

This single sentence is the meta-definition. It applies universally — to a city street map, to a function signature, to a process diagram, to a database schema, to the inventory section of an `/explore` output. The sentence compositionally specifies four primary axes; reading the sentence already introduces them.

**Stability.** This layer is stable across paradigm revisions. The definition specifies what mapping IS; the primary axes specify the dimensions any specific mapping varies along. Both hold across additions to or restructurings of Layer 3's paradigm enumeration.

### Layer 2 — The 4 primary axes (and 8 secondary)

Any specific mapping is characterized by its values along the four primary axes:

**1. What structural feature of the source is preserved.** The mapping's core commitment: spatial relations, type membership, connection structure, transformation rules, similarity relationships, causal trajectories, boundary structure, generative rules, route structure, continuous values over a domain, the mapping operation itself, or cross-domain structural correspondence. This axis generates the paradigm taxonomy in Layer 3.

**2. What target medium encodes the source.** The representational form the map uses: iconic resemblance (visual/spatial), symbolic labels (discrete tags), indexical references (pointers/links), continuous embeddings (geometric space), discrete combinatorial structures (graphs, trees, lattices), or sequential ordering.

**3. What operation produces the map.** The act: recording (observing/transcribing), constructive inference (building from indirect evidence), compression (lossy summarization), projection (high-dimensional → low-dimensional with chosen perspective), generation (a generator function whose outputs are the map), or prediction (anticipating future or inferred states).

**4. What purpose the map serves.** The use: navigation, communication, prediction, decision-support, reasoning-substrate (the map IS the thinking medium), memory/archival, or coordination across actors.

Eight secondary axes refine within primary-axis cells:

- **Scope / grain** — what the map's unit is: element / structure / behavior / constraint / possibility / aggregate.
- **Reference frame** — what the map is anchored to: absolute coordinates, relative to a chosen object, functional (relative to purpose), or egocentric (relative to the mapper).
- **Meta-level** — whether the map operates at the object level (mapping a territory) or at the meta level (mapping the act of mapping, the mapper's trajectory, or the map's own coverage edges).
- **Origin** — whether the map is derived a priori (from logical or structural principles), a posteriori (from observation), or via generative-rule application.
- **Output form** — the map's shape as an artifact: catalog/list, graph/network, field/continuous surface, hierarchy/tree, manifold/topological space, trajectory/sequence, or matrix/table.
- **Temporality** — static snapshot, dynamic capture of change, counterfactual (what could be), historical (what was), or predictive (what will be).
- **Fidelity** — lossless (bijective, reversible), lossy (selected preservation), lossy-with-error-bound (quantified loss), or pathological (deliberate distortion for emphasis, like a subway map).
- **Viewpoint** — allocentric (god's-eye), egocentric (first-person), mechanistic (causal), categorical (classification), or analogical (cross-domain).

**Relationship between primary and secondary axes.** Secondary axes refine within the cells of the primary axes — they do not generate the paradigm space, but they distinguish near-neighbor paradigms that share primary values. For example, Cartographic and Navigational paradigms both preserve spatial structure (primary axis 1), but differ on viewpoint (Cartographic is allocentric; Navigational is egocentric). The boundary between primary and secondary is empirical; an axis could be promoted or demoted under finer structural analysis. **This layer is stable-ish.**

### Layer 3 — The 12 crystallized paradigms

Each paradigm is a coherent cluster of axis values that historically appears together as a recognizable way of mapping, with established literature in some domain:

| # | Paradigm | What it preserves | Grounded in |
|---|---|---|---|
| 1 | **Cartographic / Spatial** | Spatial relations and topology of physical or abstract space | Cartography; geographic information systems |
| 2 | **Taxonomic / Categorical** | Type membership and containment relations between categories | Biological taxonomy; ontology engineering; library classification |
| 3 | **Relational / Graph** | Connection structure between items; "is-related-to" links | Graph theory; relational databases; knowledge graphs |
| 4 | **Functional / Algorithmic** | The transformation rule — what input becomes what output | Function theory; type theory; algorithm specification |
| 5 | **Embedding / Continuous** | Similarity relationships as geometric proximity in a continuous space | Manifold learning; vector embeddings; latent-space methods |
| 6 | **Process / Behavioral** | Causation and trajectory over time; how things evolve | System dynamics; process modeling; state-machine specification |
| 7 | **Constraint / Boundary** | What cannot happen; the edges of the feasible region | Constraint satisfaction; feasibility analysis; type-bounded spaces |
| 8 | **Possibility / Generative** | The generative rule for what could exist; the design space | Possibility theory; generative grammars; design-space enumeration |
| 9 | **Navigational / Routing** | Route structure from a viewpoint; how to get from here to there | Navigation systems; route planning; planning trees |
| 10 | **Coverage / Field** | Continuous values defined over a domain; values-at-locations | Field theory; coverage analysis; heatmaps |
| 11 | **Reflexive / Self / Meta** | The mapping operation itself; the map describes or refers to itself | Reflexivity studies; self-describing systems; provenance graphs |
| 12 | **Analogical / Cross-domain** | Structural correspondence across domains; same shape, different content | Analogical reasoning; conceptual blending; cross-disciplinary transfer |

### Classification — how to place a specific mapping into the framework

To classify a mapping into one or more paradigms, ask the four primary-axis questions in order:

1. **What does this mapping preserve?** The answer locates one or more candidate paradigms.
2. **What target medium encodes it?** The answer narrows the candidates by representational form.
3. **What operation produced it?** The answer narrows further by act.
4. **What is the map's purpose?** The answer narrows by use.

**Disagreement-handling.** If the four axes point to the same paradigm, the mapping is a single-paradigm instance. If two or more axes point to different paradigms, this signals **compositionality, not confusion**: the mapping is the composition of the paradigms identified by the divergent axes. Record all paradigms identified. **Single-paradigm membership applies only when all four axes converge on the same paradigm.**

**Compositionality is the rule, not the exception.** Most real-world mappings compose multiple paradigms. A process diagram is Process + Relational. A state-space heatmap is Coverage + Possibility. A semantic embedding visualization is Embedding + Cartographic.

### Revisability and stability layering

The 12-paradigm enumeration is empirical, not exhaustive.

**Revisions are triggered when any of the following observable conditions hold:**
- **(a)** Three or more inquiries surface mappings that don't fit any of the 12 paradigms cleanly; OR
- **(b)** Two or more pairs of paradigms repeatedly merge in observation; OR
- **(c)** A paradigm's literature-grounding is contested by structural argument.

Until one of these triggers fires, the 12-paradigm enumeration is the working set.

**Stability layering.** The minimum-core definition (Layer 1) is stable. The 4 primary axes (Layer 2-primary) are stable-ish. The 12 paradigms (Layer 3) are explicitly revisable. The 8 secondary axes (Layer 2-secondary) are intermediate.

### Correspondence of the prior 7 observations to the meta-paradigms

The prior identity-refresh finding's 7 observations of mapping that `/explore` produces correspond to meta-paradigms as follows. **Note the framing:** these are observations corresponding to paradigms, not a preserved typology being projected. The typology claim of the prior is corrected (per the Changes-from-Prior section above); the observations are preserved as data.

| Prior `/explore` observation | Meta-paradigm(s) it corresponds to | Why |
|---|---|---|
| **layout** | Cartographic (primary); Relational (when only topology is recorded) | Layout preserves spatial relations between items in a territory; when only neighbor-of links are recorded without metric distance, it becomes Relational. |
| **concept** | Taxonomic (when class-membership); Relational (when concept-relations) | Concept mapping spans both: classifying items into concepts is Taxonomic; mapping how concepts relate is Relational. |
| **status** | Coverage/Field (continuous); Taxonomic (categorical state) | Status varies: a confidence gradient is Coverage; a discrete state like "scanned/unscanned" is Taxonomic. |
| **coverage / confidence** | Coverage/Field (primary) | Confidence is a continuous value over the territory; canonical Coverage paradigm. |
| **frontier** | Constraint/Boundary (primary) | The frontier IS the boundary between mapped and unmapped territory; canonical Constraint paradigm. |
| **possibility** | Possibility/Generative (primary) | Possibility-mode `/explore` enumerates what could exist; canonical Possibility paradigm. |
| **partly-excluded relational** | Relational (partly-excluded by `/explore`'s NOT-list) | Co-location adjacency is preserved; full relational meaning is excluded and belongs to `/sense-making`. |

**Coverage check.** The 7 prior observations correspond to 6 of the 12 meta-paradigms (Cartographic, Taxonomic, Relational, Coverage, Constraint, Possibility). The other 6 paradigms — Functional, Embedding, Process/Behavioral, Navigational, Reflexive, Analogical — are NOT produced by `/explore`. They are scoped out by `/explore`'s NOT-list (§1.3) and belong to other project disciplines: Functional and Process/Behavioral to `/comprehend`; Embedding to `/intuit`; Navigational to the `/navigation` specialization; Reflexive to self-describing systems and meta-inquiries; Analogical to `/innovate` and `/sense-making`.

### Why the meta-paradigm framing matters

The framework's value lies in three places. First, it provides a discipline-independent foundation for the project's most universal cognitive operation. Multiple disciplines produce mappings; the meta-paradigm framework explains what they all share (the minimum-core definition) and how they differ (which paradigms each produces). Second, it enables future discipline-design to be paradigm-aware — a new discipline can be specified by its paradigm-coverage subset, and unoccupied paradigm slots become visible. Third, it adds reusable vocabulary for diagnosing finding-to-finding relationships, now strengthened with the obligatory diagnostic from this finding's strengthened meta-lesson.

---

## Next Actions

### MUST

There are no MUST actions required for this finding to ship. The framework is doc-only and self-contained.

### COULD

- **What:** Add the `/explore` §1.7 position-paragraph to `homegrown/explore/references/explore.md` (drop-in spec text below).
  - **Who:** human author.
  - **Gate:** condition-bound — when the `/explore` spec is being updated.
  - **Why:** makes the meta-paradigm framework concrete for `/explore`'s identity.

- **What:** Sync canonical (homegrown/) and installed (~/.claude/skills/) copies of the `/explore` spec.
  - **Who:** human author.
  - **Gate:** at spec-edit time.
  - **Why:** keeps runtime consistent with canonical.

### DEFERRED

- **What:** Extract the strengthened meta-lesson on CORRECTS vs REFINES vs SUPERSEDES to a project-vocabulary document.
  - **Gate:** condition-bound — revive when 2 or more future inquiries cite the strengthened lesson; at that point, extraction reduces duplication.
  - **Why (if revived):** the lesson is reusable project vocabulary; a dedicated home reduces per-finding duplication.

- **What:** Discipline-paradigm mapping for all 7 project disciplines (`/sense-making`, `/decompose`, `/innovate`, `/comprehend`, `/navigation`, `/intuit`, plus `/explore`).
  - **Gate:** condition-bound — revive when any non-`/explore` discipline's spec is undergoing update.
  - **Why (if revived):** unifies the discipline taxonomy under the meta-paradigm framework.

- **What:** Introduce additional relationship labels (RESTRUCTURES, GROUNDS, ABSORBS, SUPERSEDES-PARTIAL) considered in exploration but deferred.
  - **Gate:** observable — revive when 3 or more inquiries struggle to choose among the existing three labels (CORRECTS, REFINES, SUPERSEDES) and require finer-grained categorization.
  - **Why (if revived):** finer-grained relationship semantics may reduce per-finding ambiguity.

- **What:** Operationalize the obligatory diagnostic as a CONCLUDE checkpoint that every CONCLUDE runs before declaring REFINES/CORRECTS/SUPERSEDES.
  - **Gate:** condition-bound — when CONCLUDE protocol is being revised.
  - **Why (if revived):** moves the diagnostic from discipline-level rule to process-level enforcement.

- **What:** Empirical refinement of the 12-paradigm enumeration based on observed inquiry data.
  - **Gate:** observable — revive when any of the three triggers in the Revisability subsection fire.
  - **Why (if revived):** keeps the paradigm enumeration calibrated.

- **What:** Operationalize the 4-axis classification procedure as a `/classify-mapping` skill.
  - **Gate:** observable — revive when 3+ inquiries need manual classification within a short window.
  - **Why (if revived):** automates the classification rule.

### Optional `/explore` §1.7 addition (drop-in spec text for the COULD action above)

> **§1.7 Position in the mapping-paradigm framework.** `/explore` is one specialization of the broader mapping operation defined at the meta level (see `devdocs/inquiries/2026-05-13_12-45__prior_mapping_understanding_was_wrong_redo/finding.md`). Of the named mapping paradigms enumerated there, `/explore` produces a six-paradigm subset: **Cartographic** (spatial-layout mapping of a territory), **Taxonomic** (concept-class mapping when concepts are surfaced), **Relational** (co-location adjacency, partly-excluded per §1.3 — full relational meaning belongs to sense-making), **Coverage** (confidence and density fields over the mapped region), **Constraint** (frontier and confirmed-absent regions), and **Possibility** (candidate enumeration when in possibility-mode per §3.2). The remaining paradigms — Functional, Embedding, Process/Behavioral, Navigational, Reflexive, and Analogical — are scoped out by the NOT-list in §1.3. Their structural form belongs to other disciplines: Functional and Process/Behavioral to `/comprehend`; Embedding to `/intuit`; Navigational to the `/navigation` specialization (per §1.5); Reflexive to self-describing system inquiries; Analogical to `/innovate` and `/sense-making`. This positioning is descriptive (it characterizes what `/explore` produces), not prescriptive (it does not forbid downstream consumers from running other paradigms on `/explore`'s output). When a `/explore` run surfaces material that fits a paradigm outside the six-paradigm subset, the runner records it as a frontier signal and defers the deeper paradigm-specific work to the appropriate downstream discipline.

---

## Reasoning

### Why CORRECTS rather than REFINES — applied to both priors

For the original 7-kinds finding (`2026-05-13_07-16`): the strengthened diagnostic yields three NOs (the typology claim was not true at its claimed level; the level straddled observation and typology; the claim did not survive independent citation). User signal: explicit verdict of "wrong attempt." CORRECTS preserves the observations as data and Claim P ("mapping IS core to /explore"); corrects Claim Q (the typology claim).

For the just-completed paradigm finding (`2026-05-13_12-15`): the relationship-declaration of REFINES was wrong; the framework content was right. CORRECTS the relationship-declaration; preserves the framework content unchanged.

### Why the strengthened meta-lesson over alternatives

Alternatives considered and rejected:

- **DIFF form** (in-place patch of the just-completed finding). KILLED: the just-completed finding has been archived; modifying it post-archive violates the workspace invariant. RE-ISSUE is the project's proper way to record corrections.
- **SUPERSEDES** for the 7-kinds. KILLED: the user did not say throw out everything; the 7 observations remain valid as data; SUPERSEDES would discard them unnecessarily.
- **Introduce new relationship labels** (RESTRUCTURES, GROUNDS, etc.). KILLED for this inquiry: the three existing labels are sufficient when the diagnostic distinguishes them. New labels would proliferate vocabulary without clear necessity; deferred to a separate inquiry.
- **Layer-shift framing** for this case. KILLED: applying it here would commit the failure mode being corrected.
- **Self-congratulatory self-reference** without diagnostic application. KILLED: the acknowledgment must genuinely apply the test and could have failed.

### What survived and why

The strengthened meta-lesson + worked example + self-reference acknowledgment survived critique with five small textual refinements applied above (behavioral pointer; illustrative examples per diagnostic question; explicit UNCLEAR→CORRECTS in decision rule; partial-tautology acknowledgment; not-a-trump-card warning). Critique's adversarial testing across 17 dimensions found:

- All HIGH-weight content dimensions pass: correctness, coherence, user-correction-faithfulness, self-reference-genuineness (post-partial-tautology acknowledgment), recursion-resistance (post-not-a-trump-card warning).
- All HIGH-weight project-specific risk dimensions pass: duplicate-derivable-state, operation-parsimony.
- Five prosecution wins surfaced via multi-axis depth check (rhetorical-only enforcement; operational clarity; UNCLEAR handling; partial tautology; trump-card recursion) — all five closed by the refinements baked into the finding's body text.

### Contradictions reconciled across the pipeline

- **Exploration vs sensemaking on lesson location.** Exploration surfaced both options (own piece vs embedded in CFP). Sensemaking chose embedded (consistent with just-completed finding's structure; lesson naturally lives where it's being corrected).
- **Decomposition vs innovation on framework content fidelity.** Decomposition asked whether framework content needs full re-presentation; sensemaking and decomposition both confirmed YES (RE-ISSUE form; readers don't flip to docarchive).
- **Critique vs innovation on the diagnostic's enforcement.** Critique surfaced that enforcement is rhetorical, not mechanical; the response (R1 behavioral pointer + R2 illustrative examples + R3 explicit UNCLEAR handling) raises the rhetorical threshold without claiming mechanical enforcement.

---

## Open Questions

### Monitoring

- **Calibration of the obligatory diagnostic across inquiries.** After 5+ future inquiries declare REFINES or CORRECTS using the strengthened diagnostic, observe whether the diagnostic's verdicts are consistent across reasoners and whether the failure mode (preservation-for-preservation) recurs.

- **Whether the named meta-pattern (lesson-introduces-its-own-trap) recurs elsewhere.** Future inquiries that introduce new vocabulary in meta-lessons should anticipate the pattern; observe whether other lessons fall into the same trap.

### Blocked

- **Operationalizing the obligatory diagnostic as a CONCLUDE checkpoint.** Cannot proceed until the CONCLUDE protocol is being revised.

- **Discipline-paradigm mapping for non-`/explore` disciplines.** Cannot proceed until each discipline's spec is being updated.

### Research Frontiers

- **Other lessons-with-their-own-traps in the project's vocabulary.** The pattern likely appears elsewhere; a survey of project meta-lessons could surface other cases. Beyond per-inquiry scope.

- **Whether the burden-of-proof asymmetry (default-to-CORRECTS) is the right default in all cases.** A future case might surface where the default produces unnecessary corrections. Open question; preserved as research frontier.

- **Composition algebra for paradigms.** When two paradigms compose (e.g., Process + Relational), what are the rules for the composite's properties? Beyond per-inquiry scope.

- **The reductionist question.** Can the 12 paradigms be reduced to a smaller set by treating some as compositions of others? Beyond per-inquiry scope.

### Refinement Triggers

- **If 3 or more inquiries surface mappings not fitting the 12 paradigms cleanly** — revive empirical refinement of the paradigm enumeration.
- **If 2 or more paradigm-pairs repeatedly merge in observation** — same revival.
- **If a paradigm's literature-grounding is contested by structural argument** — same revival.
- **If 2 or more future inquiries cite the strengthened meta-lesson** — revive the deferred extraction to a project-vocabulary document.
- **If 3 or more inquiries struggle to choose among CORRECTS/REFINES/SUPERSEDES** — revive the deferred introduction of additional relationship labels.

---

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
layer shift (go one level deeper or broader in abstraction) rather than a lateral revision. Layer shifts preserve the prior at its level and add a new level above or below; lateral revisions correct a wrong claim at the same level. Distinguishing the two prevents two failure modes: (1) unnecessary invalidation of prior work (treating a layer-shift situation as a correction situation; the prior gets thrown out when it should be preserved); (2) staying at the wrong abstraction level (treating a correction situation as a layer-shift situation; the wrong claim survives because "the prior is preserved at its level," 


i ddisagree, you shouldnt have preserve the prior understanding just for the sake of preserving it, it tried to understand mapping but it was wrong. 

redo this
```

</details>
