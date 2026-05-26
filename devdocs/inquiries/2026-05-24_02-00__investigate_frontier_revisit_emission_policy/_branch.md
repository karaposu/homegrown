# Branch: investigate_frontier_revisit_emission_policy

## Question

**Subject** — routeman's emission policy for the **INVESTIGATE FRONTIER** and **REVISIT** movement-types BEFORE the project reaches Baldwin-cycle calibration maturity (N≥30 inquiries per discipline). The two movement-types are seed-candidates for the Baldwin cycle's seed-generation mechanism (per `docs/desc.md`); pre-maturity, the project hasn't accumulated enough calibration data for the Baldwin mechanism to consume seeds, but routeman may still emit these route types as next-move enumerations for humans (or for future Baldwin consumption when activated).

**Action** — design (the emission policy) + enumerate options exhaustively + analyze pros/cons per option + recommend with structural reasoning. The user explicitly asked: "lets dive deep into this one...and list what are our options and what are pluses and minuses of them."

**Level** — discipline-level (routeman's runtime emission decision per route). Interacts with downstream consumers (Baldwin cycle when activated; /intuit Phase β+ when activated; human selector at L0-L1).

**Observation targets** — preserve as separate items because the question presents multiple distinct concerns joined by "and"/"or":

1. **INVESTIGATE FRONTIER emission policy** — what routeman does with this type pre-maturity.
2. **REVISIT emission policy** — what routeman does with this type pre-maturity. (REVISIT has sub-actions RESURRECT/INVALIDATE/REVERT; each may have different pollution profile.)
3. **The pollution-vs-gating tradeoff** — emitting risks polluting Baldwin's eventual seed pool; gating loses useful next-move enumeration pre-maturity.
4. **The confidence-labeling mechanism** — design memo's existing per-route confidence field can carry maturity-aware confidence values; how does this interact with the emission decision.
5. **Per-discipline vs project-wide maturity** — N≥30 per discipline implies per-discipline tracking; routeman emits at project level; the bridge between is unspecified.
6. **Routeman's "enumerate all" core commitment** — gating any movement type violates the design memo's commitment that routeman enumerates the full next-move-space; this is a structural constraint on the policy.
7. **Downstream consumer awareness** — Baldwin cycle (not yet shipped), /intuit Phase β+ (not yet shipped), and human selector (current) all consume routes; the policy's metadata must be interpretable by all three.
8. **Pre-maturity routeman invocations** are themselves uncalibrated — routeman's own taste for what constitutes an INVESTIGATE FRONTIER or REVISIT route is not yet validated; the policy must accommodate routeman's own uncertainty.

**Deliverable shape** — a design memo with: (a) the policy committed (or explicitly deferred with a default ship-policy + revival trigger); (b) an EXHAUSTIVE OPTIONS TABLE listing all considered policies with per-option pros/cons; (c) the chosen option's structural reasoning; (d) the per-route-type breakdown (INVESTIGATE FRONTIER policy may differ from REVISIT policy); (e) the confidence-labeling scheme if confidence-graduated emission is chosen; (f) interaction notes with Baldwin cycle + /intuit + autonomy register + adaptive guidance mechanism; (g) the SKILL.md authoring-time commit + downstream-consumer interpretation guidance; (h) explicit deferred sub-decisions.

**Stated question:** What is routeman's emission policy for INVESTIGATE FRONTIER and REVISIT movement-types before the Baldwin-cycle calibration maturity threshold (N≥30 per discipline) is reached — covering: (1) which policy shape (always-emit / gate-until-maturity / confidence-graduated / hybrid / adaptive-rate / per-discipline-aware / etc.); (2) per-route-type policy (whether INVESTIGATE FRONTIER and REVISIT use the same or different policies; how REVISIT's sub-actions are handled); (3) confidence-labeling scheme (if applicable); (4) downstream-consumer-awareness commitments (how Baldwin / /intuit / human-selector interpret pre-maturity emissions); (5) how the policy preserves routeman's "enumerate all possible next moves" core commitment; (6) revival trigger for re-evaluation when calibration maturity is approached?

## Goal

- **Criterion** — a good answer (i) ENUMERATES all credible policy options (the user explicitly asked for an options list; default-of-3-options-from-the-source-question is insufficient); (ii) gives pros/cons per option with structural reasoning (not surface-level pros); (iii) commits to ONE option as recommended OR explicitly deferred-with-default-ship-policy + revival trigger; (iv) addresses the per-route-type breakdown (INVESTIGATE FRONTIER may differ from REVISIT); (v) preserves routeman's "enumerate all" core commitment (gating any type without strong reason violates routeman's identity); (vi) integrates with the per-route confidence attribute that routeman's design memo already commits; (vii) provides downstream-consumer-interpretation guidance for Baldwin (when shipped), /intuit Phase β+ (when shipped), and human selectors (current); (viii) acknowledges that routeman's OWN taste pre-maturity is uncalibrated — the policy must handle the meta-uncertainty.

- **Use case** — the SKILL.md authoring inquiry inherits the policy + per-route-type breakdown + confidence-labeling scheme; future Baldwin-activation inquiry inherits the downstream-consumer-interpretation guidance.

- **Desired outcome** — Q10 in the frontier-questions finding becomes RESOLVED-WITH-DESIGN (or DEFERRED-WITH-DEFAULT if the inquiry concludes a specific commitment is premature); routeman has a clear SKILL.md-author-able policy for these two types pre-maturity; the Baldwin-routeman interaction is unblocked-when-Baldwin-ships.

- **What would fail** — (i) committing the user's "confidence-LOW pre-maturity" suggestion without testing alternatives (the source-question's "acceptable alternative" was a starting point, not a commitment); (ii) gating INVESTIGATE FRONTIER or REVISIT without strong reason (violates routeman's enumerate-all commitment); (iii) producing a policy that requires Baldwin or /intuit to be shipped (chicken-and-egg; policy must work in the current pre-shipping state); (iv) collapsing INVESTIGATE FRONTIER + REVISIT into one undifferentiated policy without testing whether they have different pollution profiles; (v) ignoring per-discipline calibration tracking (N≥30 PER DISCIPLINE implies per-discipline metadata, which routeman must obtain); (vi) producing options without true pros/cons (the user explicitly asked for pluses AND minuses); (vii) over-committing system-side downstream behavior (Baldwin's filtering policy is Baldwin's spec, not routeman's).

## Source Input

```text
Question 10 — What is the emission policy for INVESTIGATE FRONTIER and REVISIT movement-types before Baldwin-cycle calibration maturity?

The Baldwin-cycle's seed-generation maturity gate is documented in `docs/desc.md`: seed-generation activates after the project reaches calibration maturity (N≥30 inquiries per discipline). Routeman's INVESTIGATE FRONTIER and REVISIT movement-types are seed-candidates — they generate next-move proposals that can become Baldwin-cycle seeds. The intersection of these two endgame mechanisms is unspecified: does routeman emit these types pre-maturity (polluting the Baldwin cycle's seed quality), gate them at N≥30 (losing useful next-move types until maturity arrives), or emit them with appropriate confidence labels at low maturity?

**Why this is a frontier.** No current answer: the intersection between Baldwin maturity and routeman's enumeration is not articulated. Gating: per the accommodation rule, the SKILL.md must commit to a policy that works both pre-maturity and post-maturity; a silent default would either over-emit or under-emit. Net-new: the design memo did not articulate this intersection.

**What it gates.** The SKILL.md's behavior for INVESTIGATE FRONTIER and REVISIT types. Tier 2 because the SKILL.md can ship with a default policy (always emit with confidence-LOW pre-maturity; promote to confidence-MED or HIGH as maturity advances) and a note documenting the policy for later review.

**Hardness.** Breadth medium (affects 2 of 16 movement types). Depth medium (a policy choice plus a threshold). Articulation high (the intersection between Baldwin maturity and routeman's enumeration was not articulated).

**Candidate resolution path.** Track in the SKILL.md as policy documentation. Revival trigger: when the project's inquiry count approaches N=30 per discipline (calibration maturity threshold), re-evaluate the policy. An acceptable alternative: settle the policy at SKILL.md authoring time with a default that ships and is auditable.

lets dive deep into this one...and list what are our options and what are pluses and minuses of them,   make sure you run the full loop at full capacity for this question
```

## Scope Check

**Question covers goal: YES** with one widening consideration + one specific-vs-pattern note.

**Widening consideration:** the source-question named 3 options (always-emit / gate / confidence-graduated). The user's "lets dive deep" + "list what are our options" framing invites EXHAUSTIVE option enumeration beyond these 3. The inquiry should consider: per-route-type-split policies (different policy for INVESTIGATE FRONTIER vs REVISIT); adaptive-rate emission (gradient from 0 → max as N approaches 30); per-discipline-aware policies (routeman reads per-discipline N from somewhere); snapshot-and-replay (emit and quarantine; review at maturity); human-triage-required pre-maturity; downstream-decides-via-confidence-label; hybrid combinations.

**Specific-vs-pattern check:** the question is about TWO specific movement types (INVESTIGATE FRONTIER + REVISIT) — not the broader pattern of "all calibration-sensitive movement types." Wider pattern (e.g., other Coordination Moves like TEST or CONSOLIDATE may also be calibration-sensitive) is out of scope unless surfacing finds structural reason to widen.

## Layer Commitment

**Primary layer: PROCESS.** The question is about routeman's RUNTIME EMISSION DECISION — what steps routeman runs when deciding whether (and how) to emit an INVESTIGATE FRONTIER or REVISIT route. The mechanism is a procedure (read current maturity → consult per-type policy → emit-with-label OR gate). Structural layer concerns (the per-route confidence-attribute schema; the per-discipline-N metadata source) are downstream of the procedural commitment. Meaning layer is settled (the two types' definitions are inherited from canonical /navigation and confirmed by the design memo + 24-01-30 categorization).

**Other-layer alternatives considered and explicitly out of scope for THIS run:**

- **Meaning** — would mean re-defining what INVESTIGATE FRONTIER or REVISIT IS as a movement type. Out of scope: types' meanings are settled.
- **Structural** — would mean designing the per-route confidence-attribute schema or per-discipline-N metadata file. Out of scope: schema exists (per design memo's "Assess priority and confidence per move" feature); per-discipline-N metadata source is a sub-decision within the process commitment, addressed if/when the chosen policy requires it.

**Sequential multi-layer plan (declared, not executed in this run):**

1. THIS run — PROCESS: emission-policy decision per route-type + downstream-consumer-interpretation guidance.
2. Follow-up (SKILL.md authoring) — STRUCTURAL: integrate the policy into routeman SKILL.md; specify the confidence-label values + per-discipline-N source format.
3. Follow-up (Baldwin-activation inquiry, when N approaches 30) — PROCESS: specify Baldwin's filtering policy that consumes routeman's emissions with their confidence labels.

## Synthesis Trigger

This inquiry consumes prior inquiry outputs as inputs and inherits commitments from them. The finding MUST include an `## Inherited Commitments Re-test` section per CONCLUDE's enforcement.

**Prior outputs synthesized:**

- `devdocs/inquiries/2026-05-23_14-39__routeman_discipline_design/finding.md` — the routeman design memo. Commits to: routeman's "enumerate all possible next moves" identity; the 10 features including "Assess priority and confidence per move" (the confidence field that's relevant to confidence-graduated emission); INVESTIGATE FRONTIER + REVISIT as 2 of the 16 movement types; F-revisit feature (cross-cycle RESURRECT/INVALIDATE/REVERT); the 12-auto/4-judgment partition (REVISIT may be in the 4-judgment set per canonical).

- `devdocs/inquiries/2026-05-23_15-20__routeman_implementation_frontier_questions/finding.md` — the frontier-questions finding (Q10 is the source of this inquiry). Commits to: Q10's Tier-2 status; the candidate resolution path (default policy + revival trigger).

- `devdocs/inquiries/2026-05-24_00-40__autonomy_register_and_discipline_read_protocol/finding.md` — the autonomy register. Commits to: the register provides current meta-loop autonomy level. Adjacent: autonomy level may correlate with calibration maturity but is a DIFFERENT axis (autonomy = role allocation; calibration maturity = inquiry-count per discipline). The policy may use either or both.

- `devdocs/inquiries/2026-05-24_01-00__adaptive_guidance_generation_mechanism/finding.md` — the adaptive-guidance mechanism. Commits to: per-movement-type Stage 1 mapping; INVESTIGATE FRONTIER ← sensemaking Constraints + finding Open-Questions; REVISIT ← prior-cycle critique + cross-cycle meta-reasoning. The emission-policy decision interacts with this (the policy decides WHETHER to emit; the mechanism decides HOW to emit when emission is permitted).

- `devdocs/inquiries/2026-05-24_01-30__route_taxonomy_categorization/finding.md` — the route taxonomy categorization. Commits to: INVESTIGATE FRONTIER in Progression Moves family; REVISIT in Coordination Moves family with `has_sub_actions: true` (RESURRECT/INVALIDATE/REVERT). The two route-types are in DIFFERENT families per the categorization — supports the per-route-type-split policy hypothesis.

- `devdocs/inquiries/2026-05-24_00-20__routeman_persistence_and_invocation_modes/finding.md` — the persistence model. Commits to: `_navig.md` ledger tracks per-Route status across invocations; recalibration semantics. The emission policy's "revival when N approaches 30" trigger uses similar maturity-aware logic.

- `docs/desc.md` — the consciousness-gradient / Baldwin-cycle endpoint document. Commits to: Baldwin-cycle seed-generation activates at N≥30 per discipline (calibration maturity gate); /intuit Phase β+ as the Predictive RC substrate that produces Baldwin seeds. The maturity gate IS the constraint this inquiry must accommodate.

- `cognitive_harness/navigation/references/navigation.md` — canonical /navigation. Commits to: INVESTIGATE FRONTIER + REVISIT as movement types; route-card schema with confidence field; the 12-auto/4-judgment partition's source.

**Each commitment will be re-tested in CONCLUDE's `## Inherited Commitments Re-test` section.**
