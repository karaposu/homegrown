## User Input

`devdocs/inquiries/2026-05-30_00-13__routelister_output_artifact_schema/_branch.md` (problem context: sensemaking.md; candidates: the rendered schema + foils F1–F6 in innovation.md; priors + routeman §5.4/§5.5/§5.8 in context). Adjudicate the field-classification, the within-concept boundary, the two-artifact design, the Excluded re-derivation, mis-classification, self-reference. Structural-layer.

---

# Structural Critique — Routelister's Output-Artifact Schema

**Stakes: HIGH** (the schema feeds the spec + is the artifact the cross-run model consumes) → **burden = guilty-until-proven-innocent**. Weighted risks: **mis-classification** (dropped a needed field / carried a contaminated one) and the **within-concept boundary**.

## Phase 0 — Dimension Construction

| # | Dimension | What it asks | Weight |
|---|---|---|---|
| D1 | **Field-classification soundness** | Are the carry/re-derive/drop decisions right? | **CRITICAL** |
| D2 | **Within-concept boundary** | Does the depth-link / state-file stay within-concept (not the forbidden inter-concept graph)? | **CRITICAL** |
| D3 | **Two-artifact design** | Is the route-map / state-file split right (vs one artifact)? | HIGH |
| D4 | **Excluded re-derivation** | Is admission-rejected-concepts the right re-purposing, and bounded? | MED-HIGH |
| D5 | **Mis-classification sweep** *(weighted)* | Is any dropped field actually needed, or any carried field actually contaminated? | HIGH |
| D6 | **Self-reference + re-derivation genuineness** | Guarded by the loop-bound test + external anchors; not a relabel? | **CRITICAL** |

## Phase 1 — Fitness Landscape

- **Viable:** sound per-field classification + within-concept boundary + justified two-artifact split + bounded Excluded + no mis-classification + genuine re-derivation.
- **Dead:** (a) a wrong drop/carry [D1/D5]; (b) the schema encodes inter-concept relations [D2]; (c) the two-artifact split is gratuitous [D3]; (d) Excluded explodes [D4]; (e) it's a relabel [D6].
- **Boundary:** right but a dropped field's legitimate residual is unaccounted, or the Excluded is unbounded → REFINE.

## Phase 2 — Adversarial Evaluation

### Candidate A — The rendered schema (principal)

**Prosecution:**
- *P-a (D5/D1 — the sharpest, mis-classification):* "Dropping Status entirely is too aggressive. routelister still needs route-state — a route might be 'already taken' (a prior run/operator engaged it) or 'superseded' (a depth run made it obsolete). You lose the route's lifecycle."
- *P-b (D2 — boundary):* "The state-file's individuation-provenance ('which items merged into this identity') plus depth-pointers lets a consumer traverse identity → depth → items → other identities and reconstruct inter-concept relations. You've stored the graph implicitly."
- *P-c (D4):* "Admission-rejected concepts are unbounded — every non-relevant thing in the territory. The Excluded section explodes."
- *P-d (D6):* "It's routeman's schema relabeled."

**Defense:**
- *D-a (vs P-a):* routelister enumerates-all-without-selecting and is not loop-bound, so a route's *lifecycle* (taken/done/active) is a selector/loop concern, not routelister's — routelister lists what *could* be engaged, not what *has been*. AND the legitimate residual is captured elsewhere, not lost: "has this identity been drilled?" → the **depth-link** (depth-pointer present); "superseded by a re-individuation" → the state-file's **individuation-provenance** (the identity was merged/split). So the cycle-relative Status values (done/stale/active) genuinely don't apply, and the parts worth keeping are *relocated* to the depth-link + provenance — "dropped" ≠ "lost." (This must be stated — a REFINE.)
- *D-b (vs P-b):* the provenance is strictly within-concept — it records which *items/manifestations* merged into *this* identity (the identity↔manifestation containment, permitted), not identity→identity edges. The depth-link points to a depth *run of the same identity*, not to another identity. No field's *value* is a different identity. That a determined consumer could *attempt* to infer relations does not make the schema *encode* them — the schema stores no inter-concept edge. The boundary, restated: **no field's value is a different concept-identity** (the depth-pointer targets the same identity's own depth; the provenance targets the identity's own merged items). (Restate the guard — a REFINE.)
- *D-c (vs P-c):* routeman's Excluded was bounded (16 inapplicable types); routelister's must be bounded too — record only **notable near-misses** (concepts plausibly relevant that didn't qualify), not every irrelevant thing. The goal-bias + lean-to-inclusion already bound what's even a candidate; Excluded records the candidates that were considered-and-rejected, not the whole territory. (Bound it — a REFINE.)
- *D-d (vs P-d):* the re-derivation drops 3 fields (Status-values, Blocked-By, Unlocks), replaces 1 (Movement-Type → 3-field signature), adds 1 (depth-link), and re-purposes Excluded (inapplicable-types → admission-rejected). That is structural change driven by the loop-bound test, adversarial to routeman's mature schema — not a relabel.

**Collision:**
- P-a × D-a → **defense wins, REFINE required:** drop the cycle-relative Status values, but explicitly relocate the legitimate residual (drilled? → depth-link; superseded? → individuation-provenance) so "dropped" reads as "relocated, not lost." **D1/D5: PASS as refined.**
- P-b × D-b → **defense wins, REFINE required:** restate the boundary as "no field's value is a different identity" (depth-pointer = same identity's own depth; provenance = same identity's own items). **D2: PASS as refined.**
- P-c × D-c → **defense wins, REFINE required:** bound Excluded to *notable near-misses*. **D4: PASS as refined.**
- P-d → **D6: PASS** (drops+replaces+adds+re-purposes = genuine).
- **D3** (two-artifact): the route-map (per-run output) vs state-file (cross-run memory) split mirrors routeman.md vs _route.md and the catalog record-vs-authority-file pattern; justified. **PASS.**

**Position:** **VIABLE.** Passes all CRITICAL dims (D1 classification, D2 boundary, D6 self-ref/genuineness), plus D3/D4/D5, under the high-stakes burden. Three REFINEs: (i) relocate the legitimate Status residual (drilled→depth-link; superseded→provenance); (ii) restate the within-concept boundary (no field's value is a different identity); (iii) bound Excluded to notable near-misses.

### Candidates B — The foils

| Foil | Verdict | Why |
|---|---|---|
| **F1 (carry §5.4 wholesale)** | **KILL** | re-imports the contaminated trio. |
| **F2 (drop the Excluded section)** | **KILL** | loses visible-with-reason (asymmetric-failure). |
| **F3 (one artifact)** | **KILL** | conflates per-run output with cross-run memory. |
| **F4 (depth-link = Unlocks renamed)** | **KILL** | within-concept (own-depth) ≠ inter-concept (other-identity). |
| **F5 (it's a relabel)** | **KILL** | drops+replaces+adds+re-purposes = structural change. |
| **F6 (Priority = selection)** | **KILL** | attributive priority permitted by §1.3; only which-wins ranking forbidden. |

## Phase 3 — Verdicts

- **Candidate A (the schema): SURVIVE** with three REFINEs (relocate Status residual; restate the boundary; bound Excluded). Passes all CRITICAL dims.
- **F1–F6 KILL** (all; the schema is well-bounded).

## Phase 3.5 — Assembly Check

The schema + the three REFINEs assemble into the **authored, well-bounded output form**: the field table (with the Status residual relocated, not lost), the wrapper (with a bounded Excluded), and the two artifacts (with the explicit "no field's value is a different identity" boundary). **Emergent (confirmed):** the state-file is one data structure serving the listing mechanism (`22-40`), the cross-run model (`21-01`), and this output schema — the project's persistent concept-map / authority file. VIABLE.

## Phase 4 — Coverage + Convergence

- **Coverage:** all six dimensions + the mis-classification + boundary attacks evaluated; foils map the dead regions; no large unexplored region.
- **Convergence:** clean SURVIVE (the REFINEs sharpen, don't change the verdict); stable.
- **Signal: TERMINATE** — the FORM is authored; the question is answered.

---

## Inherited Commitments Re-test (Synthesis-Trigger obligation)

| Prior commitment | Re-test result | Evidence |
|---|---|---|
| routeman `§5.4` per-route 5-group schema | **RE-TESTED per-field → carry/re-derive/DROP.** | Carry Direction/Goal/Movement(re-derived)/WHY/why-important/Priority/Confidence/Guidance; replace Movement-Type → {grain,kind,engagement-type}; DROP Status-cycle-values + Blocked-By + Unlocks (loop-contaminated; Unlocks = inter-concept graph). Legitimate Status residual relocated (drilled→depth-link; superseded→provenance). |
| routeman `§5.5` Route-Map wrapper | **RE-TESTED → re-derived.** | Header + identity-Index + Excluded(admission-rejected, bounded to notable near-misses) + Telemetry(per-grain/kind/engagement-type + individuation stats). |
| routeman `§5.8` `_route.md` state-file | **RE-TESTED → re-derived within-concept.** | The identity-set/index (identity→own-depth + signal + provenance + log); strips REVISIT/cross-cycle/per-Route-Status. |
| `18-17` route-type signature + NOT-list (no inter-concept graph) | **RE-TESTED → the signature IS the Route-Identity fields; the NOT-list = the boundary** (Unlocks dropped; no field's value is a different identity). |
| `22-40` running identity-set + `21-01` cross-run index (within-concept) | **RE-TESTED → CONFIRMED + UNIFIED.** The state-file IS that identity-set/index — one structure serving listing + cross-run + output. |
| `11-43` breadth-compactness | **RE-TESTED → one record = one identity** (not per-manifestation). |

None parroted; routeman's schema is **re-derived per-field (3 drops + 1 replace + 1 add + 1 re-purpose)**, adversarial to wholesale-carry. **D6: PASS.**

## Convergence Telemetry

- **Dimension coverage:** 6 (default + project-specific D2/D5/D6 weighted); all applied.
- **Adversarial strength:** **STRONG** — prosecution constructed the over-aggressive-drop attack (P-a, which forced the Status-residual-relocation REFINE), the implicit-graph attack (P-b, which forced the boundary-restatement), the unbounded-Excluded attack (P-c), and the relabel attack (P-d).
- **Landscape stability:** STABLE (REFINEs sharpen; no verdict-region change).
- **Clean SURVIVE exists:** YES.
- **Failure modes observed:** **none.** Wrong-Dimensions guarded (D2/D5/D6 weighted); Rubber-stamping guarded (6 foil KILLs + the mis-classification + boundary attacks); Nitpicking guarded (defense + 3 REFINEs, clean SURVIVE); Dimension-Blindness guarded (the implicit-graph + over-drop risks explicitly dimensioned); False-Convergence guarded (clean SURVIVE); **Self-Reference-Collapse guarded** — external anchors (routeman's literal §5.4/§5.5/§5.8 fields; the `18-17` loop-bound test + NOT-list; typed-struct + library authority-record patterns), and the re-derivation drops routeman fields (adversarial to wholesale-carry).
- **Overall: PROCEED / TERMINATE** — the output-artifact schema SURVIVES; the FORM is authored.

### Signal to the loop
**TERMINATE.** Ranked survivor: routelister's output FORM — a **`routelister.md` Route-Map** (Header + identity-Index + per-route records {Direction, grain/kind/engagement-type signature, Movement, WHY/why-important, attributive Priority/Confidence, Guidance, within-concept depth-link} + bounded admission-rejected Excluded + Telemetry) + an **identity-set/index state-file** (within-concept; the project's concept-map). The contaminated trio (Status-cycle-values, Blocked-By, Unlocks-the-inter-concept-graph) is dropped, with the legitimate residual relocated to the depth-link + individuation-provenance; the boundary is "no field's value is a different identity." Two artifacts mirror routeman.md + _route.md. The state-file unifies the listing, cross-run, and output inquiries. Ready for CONCLUDE.
