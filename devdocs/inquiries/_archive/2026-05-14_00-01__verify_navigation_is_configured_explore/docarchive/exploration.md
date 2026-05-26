# Exploration — Verify: Is /navigation Just /explore with Different Mapping Configuration?

## Step 0 Declarations

| Field | Value |
|---|---|
| cognitive-commitment-mode | open |
| territory-type-mode | artifact (the `/navigation` and `/explore` specs exist as concrete files; the residuals test compares them) |
| entry-point | signal-first (the user's hypothesis is the specific signal: "navigation might be same with explore after all. only thing different is how mapping is configured") |
| expected | ~10-15 candidate residuals; ~4-6 will be probed at D3 |
| depth-level | D2 with D3 probes on each residual whose reduction-to-configuration is contested |

Anti-confirmation-bias commitment per `_branch.md`: default-to-residuals-are-real under uncertainty. The unification claim must positively demonstrate that each residual reduces to configuration; not the reverse.

Boundary: the design space of operations, modes, and commitments that distinguish `/navigation` from `/explore`, with each tested against the meta-paradigm framework's 4 primary axes + 8 secondary axes + per-paradigm labeling/annotation extensions to see whether it reduces to configuration or remains a genuine residual.

---

## Territory Overview

The territory has three nested layers:

**Layer 0 — Spec history.** Three distinct framings of `/navigation` exist in the project:

1. **iter-1 framing** (predates 2026-05-12_11-40 inquiry) — `/navigation` was "perception-only: list where you could go next; does not surface what's in a territory." Selection-without-options-shown was excluded.
2. **B-refined framing** (the 2026-05-12_11-40 finding) — `/navigation` has FOUR components: Enumerate (`/explore` of routes) + Label (16-type taxonomy) + Guide (adaptive guidance per route) + Select (cognitive selection from labeled-and-guided map).
3. **Current framing** (in `homegrown/navigation/references/navigation.md` as it stands today) — `/navigation` has ONE structural operation: Enumeration. The Select component has been MOVED OUT — "Choosing which to pursue is a separate operation" (line 22-24 of the current spec). `/wayfinding`'s substance was absorbed into navigation as a separate evolution: DIAGNOSE type, reachability/gates check in Step 1, REVISIT sub-actions.

This three-stage history matters because the user's hypothesis was probably written without re-reading the current spec — the unification test must be against the CURRENT framing, not the iter-1 or B-refined framings.

**Layer 1 — `/navigation`'s operations and commitments as currently specified.** Enumeration (single declared structural operation); the 16-type taxonomy; the route-card record format (12 required fields per route); adaptive guidance per route (4 guidance modes + per-pointer WHY + continuation notes); the reachability/gates check in Step 1; the freshness preflight (5 outcomes including `full_warmup_needed`); priority/confidence assignment; REVISIT sub-actions (RESURRECT / INVALIDATE / REVERT) with threshold-aware confidence; auto-derivable vs human-judgment type split.

**Layer 2 — Mapping each operation against `/explore`'s identity.** Each operation tested via: does it fit `/explore`'s verb-meaning ("purposive open-mode surfacing of a territory")? Is it on `/explore`'s NOT-list? Does it reduce to paradigm-axes configuration + paradigm-specific labeling/annotation extension? Or is it a residual `/explore` cannot accommodate?

---

## Inventory

### The reductions that hold (cases FOR the hypothesis)

| ID | Operation | Reduction to /explore configuration |
|---|---|---|
| **R1** | **Enumerate (the core scan-signal-probe over the next-move-space)** | REDUCES cleanly. This is `/explore` in possibility-mode (per §3.2), with the territory = next-move-space (a possibility-territory derived from current state). Per the prior 2026-05-12_11-40 finding, this is structurally identical to `/explore`'s enumerate operation, just with a specialized territory. The meta-paradigm framework places this as: paradigm = Navigational; viewpoint = egocentric; purpose = routing/decision; territory-type = possibility. All four are values within `/explore`'s declarations. |
| **R2** | **16-type taxonomy as item labeling** | REDUCES cleanly. The 16-type taxonomy is a per-paradigm labeling extension — each route gets a `Type` field from the taxonomy. Labeling at D2-D3 with a specialized vocabulary is exactly what `/explore`'s §2.3 (per-item content depth) anticipates. The taxonomy is the Navigational-paradigm encoding-axis instantiation. |
| **R3** | **The four-category enumeration completeness (content / process / context + the 16 types within them)** | REDUCES cleanly. Possibility-mode `/explore` has a completeness-before-novelty rule (§3.2 — scan obvious candidates first). The 16-type taxonomy + 3-category structure is the project-specific obvious-candidates enumeration for the next-move territory. Same operation; specialized territory; specialized completeness checklist. |
| **R4** | **Priority and confidence per route (HIGH / MEDIUM / LOW)** | REDUCES cleanly. `/explore` has confidence-mapping as a core component (§2.1) with five confidence levels. `/navigation`'s 3-level priority + status (open/blocked/deferred/active/done/stale/superseded) is the Navigational-paradigm specialization of that confidence-mapping. |
| **R5** | **Route-card record format (Direction, Goal, Type, Priority, Status, Blocked by, Purpose, Movement, Unlocks, Why, Guidance mode, Continuation note)** | PARTIALLY REDUCES. Direction/Goal/Type/Priority/Status are labeling extensions of `/explore`'s annotation layers. Purpose/Movement/Unlocks/Why are reasoning-content that could be paradigm-specific D3+ content. Blocked by + Guidance mode + Continuation note are the disputed ones (probed below). |

### The residuals (cases AGAINST the hypothesis)

| ID | Operation | Why it does NOT reduce to /explore configuration |
|---|---|---|
| **F1** | **Adaptive guidance generation (per-route prescriptive pointers + continuation notes)** | RESIDUAL — does not reduce. `/explore`'s annotation layers (existence, confidence, relevance, adjacency, confirmed-absent) are DESCRIPTIVE — they label what's there. Adaptive guidance pointers are PRESCRIPTIVE — they say "if you take this route, focus on X because Y." Example from the navigation.md spec (line 124-127): *"Check against actual SIC/MVL runs → bc real usage is the only valid test of completeness."* This is a recommendation, not a label. /explore surfaces; /navigation also prescribes. This is a closed-mode operation: deciding what someone SHOULD do (closed) vs what IS THERE (open). Note: this is the residual the B-refined finding called out as `/navigation`'s "unique contribution beyond /explore-of-routes." |
| **F2** | **Reachability / gates check in Step 1** | RESIDUAL — does not reduce. /navigation's Step 1 includes: "Before assigning types, identify which directions are accessible from current state and which are gated behind prerequisites. A gate has three parts: blocked region, condition, current state." This is a state-aware operation — `/explore` operates on territories, not on state-transitions. The reachability check is closer to causal-model evaluation (comprehend's territory) than to surfacing-what's-there. `/explore`'s `Blocked by`-like concept does not exist in `/explore`'s annotation layers. |
| **F3** | **Freshness preflight (5 outcomes: fresh_local / fresh_project / refresh_needed / full_warmup_needed / thin_allowed)** | PARTIAL RESIDUAL — `/explore` has Step 0 declarations but no equivalent of the freshness preflight. The freshness preflight is closer to a runner-level concern (orchestration) than a discipline-level concern (cognitive operation). May be /staged-explore-or-similar runner work that got absorbed into /navigation's spec rather than a genuine navigation residual. Reductive interpretation: this is runner-level scaffolding around the discipline, not a residual of the cognitive operation itself. |
| **F4** | **REVISIT sub-actions (RESURRECT / INVALIDATE / REVERT) with threshold-aware confidence** | RESIDUAL — does not reduce. RESURRECT moves a killed-elsewhere idea into the active set (state-aware); INVALIDATE moves a surviving idea into the dead set (cross-cycle awareness); REVERT moves a refined idea back to an earlier version (versioning awareness). These are operations on PRIOR cycles' OUTPUTS, not on items in a territory. /explore has no concept of "prior cycles' outputs" — its territory is presented at Step 0, not evolved across cycles. This is cross-cycle integration work, not surfacing. |
| **F5** | **DIAGNOSE as a 16th type with stall-signal triggers** | PARTIAL RESIDUAL — DIAGNOSE fires on "sensemaking-stall signals: oscillation, velocity negative for 2+ iterations, layer-conflict." This requires cross-iteration awareness AND the ability to recognize meta-failures in the SIC loop's process. /explore has no cross-iteration awareness; this looks like a residual. But: it could be reduced to a Navigational-paradigm labeling extension if cross-iteration awareness is provided by the runner as context. Uncertain. |
| **F6** | **Auto-derivable vs human-judgment type split** | RESIDUAL — does not reduce. /navigation distinguishes 12 auto-derivable types (from C output + telemetry + scope check) from 4 human-judgment types (REFRAME, REVISIT, DIFFERENT APPROACH, CONSOLIDATE). This is graduated-autonomy positioning — the discipline declares which work the human must do vs which the discipline can do automatically. /explore has no such graduated-autonomy split in its spec. This is governance-level metadata about the discipline's autonomy, not a cognitive operation reducible to configuration. |
| **F7** | **The Excluded section with structural-applicability reasoning** | PARTIALLY REDUCES. /explore has confirmed-absent as a mandatory annotation layer (§2.2) — items deliberately surfaced as not-present. The Excluded section is /navigation's specialization of confirmed-absent for entire types from the taxonomy (vs items). Same pattern, different grain. Reduces, but the grain-shift (item-level → type-level) is worth noting. |
| **F8** | **The boundary commitment ("Navigation is a BOUNDARY discipline — operates BETWEEN cycles, not within them")** | RESIDUAL — does not reduce. /explore operates within an inquiry; /navigation operates across inquiries (reads SIC output, produces inputs for next cycle). The temporal positioning is different. This isn't about what the operation does — it's about WHEN the operation runs. Reductive interpretation: this is meta-loop positioning, not a discipline-level residual; the runner decides when each discipline fires. Could be reduced if "between" is a runner concern. Uncertain. |

### Cross-cutting observations

- **CX1 — The B-refined finding's "Select" residual is no longer in `/navigation`**. The current spec explicitly says "Decision-making (navigation ENUMERATES possibilities. Choosing which to pursue is a separate operation)" — line 22-24. Select has been moved OUT of navigation. The user's hypothesis (made in conversation) didn't account for this evolution.
- **CX2 — The CURRENT `/navigation` self-describes as having ONE structural operation: Enumeration**. This SUPPORTS the unification hypothesis on the surface. But the spec also contains 5+ operations (reachability check, guidance generation, REVISIT sub-actions, freshness preflight, type assignment) that are subsumed under "Enumeration" without their own component naming. The self-description claim ("one operation") may itself be premature unification.
- **CX3 — The meta-paradigm framework's 4 primary axes DO capture the territory/labeling/encoding configuration that distinguishes `/navigation` from default `/explore` use**. R1 + R2 + R3 + R4 confirm. But the framework's axes do NOT capture: prescription (F1), state-awareness (F2, F4), graduated-autonomy meta-commitments (F6).

---

## Signal Log

### Probed signals (D3 depth)

| Signal | Where | Why probed | Resolution |
|---|---|---|---|
| **Is adaptive guidance generation REALLY prescriptive, or is it just rich labeling that the meta-paradigm framework's annotation extensions could capture?** | F1 | This is the load-bearing residual; if it reduces, the unification mostly holds. | Probed: looked at concrete examples in `navigation.md`. Each guidance pointer has format "[advice] → bc [reason]." The advice is action-prescriptive ("focus on X", "check Y", "look for Z"). The reason is structural justification. This is NOT a labeling claim about the item; it's a recommendation about how to engage with the item if the route is taken. **/explore's annotation layers do not include prescription.** Adding prescription to /explore's annotation layers would change /explore's commitment from open-mode surfacing to mixed-mode (surface + prescribe). This is a real residual, not a labeling-extension. |
| **Could `/explore`'s purpose-axis = "decision-support" enable prescription as a natural output?** | F1 follow-up | The meta-paradigm framework includes "decision-support" as a primary axis 4 value. | Probed: even with purpose=decision-support, /explore's verb-meaning ("purposive open-mode surfacing") commits to OPEN mode. Decision-support as a purpose doesn't authorize prescription — it just biases the surfacing toward decision-relevant items. Prescription itself remains outside /explore's identity. The purpose-axis configures what /explore surfaces, not what /explore outputs as prescription. |
| **Is the reachability/gates check a state-aware operation, or could it be expressed as territory-feature labeling?** | F2 | If reachability is just "blocked vs unblocked" as an annotation, it might reduce. | Probed: looked at the Step 1 reachability check. It evaluates "what becomes reachable when the gate opens" + "what must be true" + "current state of the gate." These are state-evaluation operations — checking whether a gate is currently open or closed. /explore's annotation layers do not include state-evaluation; they label item existence. **Reachability is a real residual at the operational level.** Reductive interpretation: state-awareness could come from the territory itself (the next-move-space includes gate-state as territory content). But this stretches the definition of territory considerably. |
| **Are REVISIT sub-actions cross-cycle awareness, or could they be expressed as a special territory (the "what we've already done" territory)?** | F4 | A liberal interpretation might admit REVISIT as a configured operation. | Probed: RESURRECT requires reading prior C-verdicts (the kill record) and comparing against current state to see if the kill condition still holds. This is cross-inquiry integration work. /explore has no cross-invocation memory (per §3.5 — "idempotency within invocation; cross-invocation delegated to runner"). REVISIT is therefore either (a) a runner-level operation that navigation's spec calls out OR (b) a real residual. Either reading still means the unification hypothesis fails: if REVISIT is runner-level, then navigation isn't quite "/explore configured" — it's "/explore configured + runner integration." Real residual or attribution-shift, both kill the simple hypothesis. |
| **Could "navigation has ONE structural operation" be a true claim, with all probed residuals subsumed under Enumeration?** | CX2 | The current spec's self-description supports the hypothesis on the surface. | Probed: the spec lists 6 process steps (Step 1: Read; Step 2: Assign Types; Step 3: Allocate Guidance; Step 4: Assess Priority; Step 5: Check Excluded; Step 6: Format the Map). Plus the freshness preflight as Step 0. Plus the reachability check as part of Step 1. These are multiple operations, even if the spec labels them collectively as "Enumeration." The "one structural operation" claim is descriptive packaging, not structural truth. The probed residuals (F1, F2, F4) remain real even under the "one operation" packaging. |

### Deferred signals (frontier for downstream disciplines)

| Signal | Why deferred |
|---|---|
| Could /explore itself be revised to include a paradigm-conditioned prescription operation, eliminating F1 as a residual? | A spec-revision question; out of scope. Would require its own inquiry on whether /explore's open-mode commitment can be configured (vs being identity-fixed). |
| Could the freshness preflight + REVISIT sub-actions be moved out of /navigation entirely (to a runner like /staged-explore or /MVL+), making navigation cleaner? | A spec-restructure question; out of scope. Worth tracking; might be a follow-up inquiry that improves both /navigation and /explore. |
| What does "/navigation has one structural operation" actually mean if the spec lists 6 process steps? | A spec-clarity question; the current spec's framing may be itself inviting confusion. Deferred. |

### Jump-scan

Deliberately scanning regions not yet probed:

| Direction | Surface |
|---|---|
| **What if `/explore`'s annotation layers were expanded to include "prescription"?** | This would dissolve F1 but at the cost of /explore's open-mode identity. /explore's "purposive open-mode surfacing" would become "purposive open-or-closed-mode surfacing-or-prescribing." The verb-meaning would weaken. Not a free lunch. |
| **What about /wayfinding's absorbed substance (DIAGNOSE, reachability, REVISIT)?** | All three appear in the residuals list (F2, F4, F5). Absorbed-from-wayfinding doesn't make them reduce; they remain residuals regardless of which discipline they originally came from. |
| **What other "specializations" might face the same pattern?** | /staged-explore is called a "runner." /comprehend is paired with /explore as open-closed mode counterparts but is NOT called a specialization. /navigation is the only thing called a specialization of /explore. Pattern-level surface: the specialization framing is reserved for /navigation specifically. Reductive interpretation: the specialization-of-/explore framing in /explore §1.5 might itself be sub-precise; the relationship is "shares mechanics" not "is configuration." |
| **The /explore §1.5 transclusion-not-invocation pattern** | "/navigation 'transcludes /explore's mechanics at spec-time; it does not invoke /explore at runtime.'" This is interesting: at spec-time, /navigation's spec INCLUDES /explore's mechanics inline. At runtime, /navigation runs independently. This means: any unification-via-configuration would require ALSO transcluding the configuration knobs — paradigm/viewpoint/purpose declarations in /navigation's own Step 0. The transclusion pattern is compatible with the partial-unification verdict, not with the full-unification hypothesis. |
| **The prior 2026-05-12_11-40 finding's verdict** | The prior B-refined verdict was "/navigation has 4 components (Enumerate + Label + Guide + Select)." The current spec has 3 (Select moved out). The B-refined verdict identified Guide as a unique contribution beyond /explore-of-routes — this matches F1 in my exploration. The prior finding ALREADY ADJUDICATED that Guide is a residual; my verification confirms the prior finding. The user's new hypothesis ("only thing different is how mapping is configured") would over-unify; it contradicts the prior finding's adjudication. |

Jump-scan result: one new region surfaced (the spec-restructure follow-up — moving freshness + REVISIT out of /navigation to runners). Otherwise the inventory is stable. No new top-level operations surfaced.

---

## Confidence Map

| Region | Confidence |
|---|---|
| **R1-R4 — Enumerate, Label, Categories, Priority/Confidence as configuration** | **confirmed** — these clearly reduce. The meta-paradigm framework's axes + per-paradigm extensions handle them cleanly. |
| **R5 — Route-card record format** | **scanned** — partially reduces. Most fields are labeling extensions; some (Blocked by, Guidance mode, Continuation note) are entangled with the residual operations and don't reduce independently. |
| **F1 — Adaptive guidance generation (the Guide component)** | **confirmed as residual** — prescriptive operation; not in /explore's annotation layers; would require changing /explore's identity to absorb. |
| **F2 — Reachability / gates check** | **confirmed as residual** — state-evaluation operation; not in /explore's annotation layers. Could be reframed but not reduced. |
| **F3 — Freshness preflight** | **inferred** — likely a runner-level concern absorbed into /navigation's spec. Reducible by moving out of /navigation, not by configuration. |
| **F4 — REVISIT sub-actions** | **confirmed as residual** — cross-cycle integration; outside /explore's idempotency-within-invocation contract. Either residual or attribution to runner; either way contradicts the unification hypothesis. |
| **F5 — DIAGNOSE with stall-signal triggers** | **inferred residual** — cross-iteration awareness needed; either residual or runner-level. |
| **F6 — Auto-derivable vs human-judgment split** | **confirmed as residual** — graduated-autonomy meta-commitment; not a cognitive operation; not in /explore's spec. |
| **F7 — Excluded section** | **scanned** — partially reduces to confirmed-absent annotation with grain-shift. |
| **F8 — Boundary discipline positioning** | **inferred** — runner-level concern (when each discipline fires); could be reduced if WHEN is a runner attribute. |
| **The unification hypothesis as stated by the user** | **confirmed as PARTIALLY FALSE** — at least Guide (F1), Reachability (F2), and the auto-derivable/human-judgment split (F6) are real residuals that don't reduce to configuration. The hypothesis as stated ("only thing different is how mapping is configured") fails the residuals test. |

**Confirmed-absent regions:**

- **A full unification verdict (the hypothesis as stated)** — confirmed absent. Multiple residuals fail to reduce.
- **A genuine "select" component in current `/navigation`** — confirmed absent. The current spec moved select out (line 22-24). The prior B-refined finding's 4th component no longer applies.
- **A residual that would force `/navigation` to be a completely separate discipline with no /explore overlap** — confirmed absent. R1-R4 are real reductions; substantial overlap with /explore is real.

---

## Frontier State

**STABLE.** Three convergence criteria met:

1. **Frontier stability** — three cycles plus jump-scan produced overlapping candidates without pushing the boundary outward. No new top-level operations surfaced after cycle 2.
2. **Declining discovery rate** — the jump-scan surfaced reframing options (spec-restructure to move residuals out) rather than new operations. Reductive interpretations confirmed but didn't change the verdict.
3. **Bounded gaps** — remaining unknowns (spec-revision possibilities; runner-vs-discipline attribution) are interpolable from neighbors; they sit between explored regions, not beyond them.

Jump-scan rule satisfied (one jump-scan; no new top-level surfaces).

---

## Gaps and Recommendations

### Gaps in the residuals analysis

- **The runner-vs-discipline attribution boundary for F3, F4, F5, F8 is uncertain.** Some of the "residuals" might be runner-level concerns mis-attributed to /navigation. A clean attribution-pass would tighten the verdict.
- **The /explore identity question** — whether /explore's open-mode commitment is identity-fixed or configurable — is implicitly assumed but not interrogated. If identity-fixed (as the current spec strongly suggests), F1 cannot reduce.
- **The prior 2026-05-12_11-40 finding's "transclusion-not-invocation" pattern is partially compatible with the partial-unification verdict but adds complexity** — it would warrant clarification in any /navigation spec revision.

### Recommendations for downstream disciplines

- **Sensemaking** should adjudicate:
  1. The verdict's exact shape: PARTIAL unification (R1-R4 reduce; F1-F6 are residuals) vs CLEAR rejection (the hypothesis as stated is wrong).
  2. The runner-vs-discipline attribution for F3, F4, F5, F8.
  3. Whether the spec-restructure option (move freshness + REVISIT to runners) is in-scope or a follow-up.
  4. The relationship-declaration semantics: does this finding CORRECT, REFINE, or CONFIRM the prior 2026-05-12_11-40 finding? Apply the strengthened diagnostic from `2026-05-13_12-45`.
  5. The implication for the user's earlier conversation argument (which I made): the unification hypothesis was wrong; how should the finding name this without preservation-for-preservation's-sake?

- **Decomposition** should partition:
  1. The verdict (partial-unification structure: 4 reductions + 4-6 residuals).
  2. The applied implications (what changes to `/explore` and `/navigation` specs, if any).
  3. The relationship-declarations.
  4. The lesson (the meta-lesson about my earlier confirmation bias).

- **Innovation** should generate:
  1. Concrete text articulating the partial-unification verdict.
  2. Optional spec-edit text if the user wants to act on the implications (e.g., explicitly note in `/explore`'s §1.5 that the specialization includes Guide + Reachability residuals).
  3. The relationship-declaration text.

---

## Telemetry

**Base metrics:**
- Mode: artifact (concrete `/navigation` and `/explore` specs examined)
- Entry point: signal-first (user's hypothesis as signal)
- Cycles run: 3 (artifact-consumption + residual probing + jump-scan)
- Candidates generated: 5 reductions (R1-R5) + 8 residuals or partial-residuals (F1-F8) + 3 cross-cutting observations + 5 D3 probes + 5 jump-scan directions
- Signals detected: 5 probed at D3 (load-bearing residuals); 3 deferred (spec-restructure follow-ups)
- Resolution progression: D2 across most candidates; D3 on F1, F2, F4, CX2, and one jump-scan thread
- Frontier state: stable
- Discovery rate: declining (jump-scan surfaced reframings, not new operations)
- Convergence criteria status: frontier-stability YES, declining-discovery-rate YES, bounded-gaps YES
- Jump-scan performed: YES (no new top-level operations surfaced)
- Failure modes checked: premature depth (avoided — coarse scan of all 8 residuals before D3 probing); surface-only scanning (avoided — D3 probes on load-bearing residuals); false confidence (jump-scan completed); premature termination (all 3 criteria checked); re-exploration (frontier tracking applied); completeness bias in possibility mode (N/A — artifact mode); open→closed drift (no relational meaning-claims made about operations beyond labeling); inadequate per-item content depth (D2 upheld; D3 where needed); negative-space silent drop (Confirmed-absent regions explicitly named).

**Self-assessment: PROCEED.**

The exploration confirms that the unification hypothesis as stated ("only thing different is how mapping is configured") is **PARTIALLY FALSE**. R1-R4 reduce cleanly (the enumerate + label + category + priority/confidence operations); F1, F2, F4, F6 are clear residuals that don't reduce to configuration; F3, F5, F7, F8 are partial-residuals or runner-attribution candidates. The prior 2026-05-12_11-40 finding's identification of Guide as a unique contribution is confirmed; my earlier in-conversation argument FOR the unification hypothesis was wrong and would have produced incorrect spec edits. Sensemaking should adjudicate the verdict's shape (PARTIAL unification vs CLEAR rejection of the hypothesis) and apply the strengthened CORRECTS-vs-REFINES diagnostic to determine the finding's relationship to my earlier claim.
