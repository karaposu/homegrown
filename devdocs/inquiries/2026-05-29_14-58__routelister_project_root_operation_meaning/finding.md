---
status: active
model: claude-opus-4-8[1m]
effort: max
---
# Finding: Routelister at the Project Root — and How It Flips the 19-00 Verdict

## Question

(from `_branch.md`) Re-run the earlier inquiry on a discipline's operation at the project root (`devdocs/inquiries/2026-05-28_19-00__routeman_project_root_operation_meaning/finding.md`) — but **for routelister, with the current understanding** (the consolidated concept-identity-as-route definition + the two-axis traversal). When routelister is invoked at the project root (project content as the territory, a project-level — possibly fuzzy — goal, no inquiry folder): what IS its operation (OT1); does it give "a list of concepts, features, project directions" (the exact output the user wanted in 19-00) (OT2); and does its concept-identity unit change 19-00's verdict, which (for routeman) was "wrong tool — that's `/comprehend`; use Shape H" (OT3)?

**Goal:** the routelister-at-project-root verdict — what it does there, whether it's the right tool, and the status of `/comprehend` / Shape H — grounded in the consolidated routelister definition and a per-commitment re-test of 19-00.

## Finding Summary

- **Routelister at the project root is the right tool — and the 19-00 "wrong-tool" verdict flips for it, using 19-00's own test.** 19-00 ruled routeman the wrong tool at the project root because of **operation-shape fit** (its "Axis 3"): routeman's unit was the next-**move**, and "concepts/features/directions" are not moves. Routelister's unit is the **concept-identity**, so that output fits its operation natively. Applying 19-00's *own* Axis-3 test to the new unit returns FIT — so **19-00 was right for routeman; the discipline changed, not 19-00's reasoning.**

- **What routelister does at the project root (OT1):** it runs its **project-space (breadth) traversal** — it enumerates the project's **concept-identities** (features, components, ideas, design-directions) and frames each as a **typed, prescriptive route toward the (possibly fuzzy) project-level goal.** (If you then want the detail of one concept — its manifestations, e.g. README-vs-implementation — that is a **concept-space (depth) drill** on that identity, one step away.)

- **Does it give "a list of concepts, features, project directions" (OT2)? Yes — that IS its project-space output.** The user's original 19-00 intuition was correct all along; it needed the right discipline (routelister, whose unit is the concept-identity) and the right framing (concepts-as-routes, prescriptive). Concept-identities are the "concepts/features"; the route-framing is the "directions."

- **It runs standalone — for the enumeration.** Routelister perceives the project's concept-identities **by enumerating them** (drawing them into attention with relevance, the way `/surfacing` draws items from a codebase) — it needs no `/comprehend` pass to *list* them. **Important scope:** this does **not** claim routelister deeply *models* each concept. Listing the identities-as-routes (breadth) is standalone; deeply understanding how each concept works (depth) is where **Shape H (`/comprehend → routelister`) is the optional enrichment** — run `/comprehend` first only if you want a tested model of a concept before routing it. So Shape H moves from 19-00's *required* to *optional*.

- **It stays distinct from `/comprehend` (the not-model-builder guard holds).** Routelister emits prescriptive **routes** (directions toward a goal — "develop / refine / investigate concept X"); `/comprehend` emits a descriptive **model** ("how the project works"). Different question, different output-type — **complementary, not competing.** The user's word was "directions" (prescriptive), so the need is routelister's, not `/comprehend`'s.

- **The closure of the thread:** 19-00 faced a real gap — the user wanted "concepts as directions" at the project root, but the only tools then were routeman (moves — wrong shape) and `/comprehend` (a descriptive model — wrong mode), so 19-00 routed to `/comprehend` as the least-bad fit. Routelister's concepts-as-routes is a genuine **third output-type** that fills that gap natively. **The same project-root question that "failed" routeman passes routelister, because the session's arc fixed the unit (move → concept-identity) that 19-00's Axis-3 test was failing on.**

- **Nuances handled:** a **fuzzy project-goal** is fine — often the best case — because routelister's epistemic axis surfaces goal-refining routes ("clarify the project's priority") alongside goal-advancing ones; **overload** is bounded because the project-space run lists *identities* (breadth), goal-biased, not every manifestation.

## Finding

### Why we are even discussing this

Early in the session, an inquiry asked what a discipline's cognitive operation IS when invoked at the project root, motivated by the user's wish to "point the tool at the whole project and get a list of concepts, features, project directions." That inquiry (about routeman) concluded it was the wrong tool — the right tool was `/comprehend` (artifact-modeling), composed as Shape H (`/comprehend → routeman`). The whole subsequent arc then re-designed the discipline: it became routelister, whose unit is the concept-identity and whose operation is "identify concepts in a territory and list them as prescriptive routes." The user now asks the natural question: re-run that project-root inquiry for routelister. Does the redesign change the answer?

### 1. The verdict flips — by 19-00's own test

The load-bearing reason 19-00 ruled routeman the wrong tool was operation-shape fit (it called this "Axis 3"): a discipline is the right tool only when its operation produces the kind of output you want, and routeman's operation produced typed next-*moves*, while "concepts/features/directions" are not moves. That reasoning was correct for routeman.

Routelister's operation produces **concept-identities framed as routes**. So "concepts/features/directions" is precisely its native output. Apply 19-00's own Axis-3 test to routelister's unit and it returns FIT, not mismatch. The wrong-tool verdict therefore flips — and it flips *because of 19-00's own criterion applied to the changed unit*, which is why this is not a contradiction of 19-00 but a continuation of it: **19-00 was right for routeman; the unit changed.** (19-00's other anchors — its loop-bound identity reading, its move-taxonomy meanings — were routeman-specific and don't transfer to routelister's intrinsic, concept-as-route identity.)

### 2. What routelister actually does at the project root

The project root is, to a standalone domain-agnostic discipline, just a *territory*. Routelister runs its project-space (breadth) traversal over it: it draws the project's concept-identities into attention and frames each as a typed prescriptive route toward the goal. That output — the project's concepts/features as directions you could take — is exactly what the user wanted in 19-00. If a particular concept warrants closer look, the concept-space (depth) run drills into that one identity's manifestations (and flags divergences, like a README that disagrees with the implementation, as their own routes).

### 3. Standalone — but be precise about what that means

It is tempting to overclaim "standalone." The honest scope: routelister can **enumerate the project's concept-identities as routes without a `/comprehend` pass**, because enumerating is perception-by-drawing (the same way `/surfacing` lists a codebase's relevant items without building a predictive model of each). You can name "the auth concept, the messaging adapter, the routeman discipline" as routes without first modeling how each works. What routelister does *not* do is deeply model each concept — and that is exactly where `/comprehend` optionally helps: if you want a tested understanding of a concept before you route it, run `/comprehend` on it first (Shape H). So Shape H is real but optional — an enrichment for depth, not a prerequisite for the breadth enumeration.

### 4. Not `/comprehend`, and why the gap was real

Routelister at the project root is not a relabeled `/comprehend`. `/comprehend` answers "how does this work?" and delivers a descriptive model; routelister answers "what could you do next, across this project's concepts, toward your goal?" and delivers prescriptive routes. The user's own word — "directions" — is prescriptive. So 19-00's instinct to route the *descriptive-inventory* reading to `/comprehend` was reasonable given the tools that existed then; what it lacked was the third tool — a discipline that turns concepts into directions. The arc built it. This is the precise sense in which the routelister design *closes* the thread 19-00 opened: the same question, asked of the redesigned discipline, passes.

## Inherited Commitments Re-test

This inquiry re-runs 19-00 and synthesizes the routelister chain; per CONCLUDE, each inherited commitment is re-tested.

| Commitment (source) | Re-test status | Evidence |
|---|---|---|
| **Wrong-tool at the project root** (19-00, for routeman) | **OVERTURNED for routelister** | Routelister's concept-identity unit fits the concepts-output (Axis-3 FIT); the flip uses 19-00's own test. Honors "right for routeman" (the move-unit genuinely didn't fit). |
| **Right tool = `/comprehend`** (19-00) | **RECHARACTERIZED** | `/comprehend` serves a descriptive-model need (and, in Shape H, optionally deepens per-concept understanding before routing); routelister serves the concepts-as-directions need. Complementary, not the same need. |
| **Shape H (`/comprehend → routeman`) is the composition** (19-00) | **RECHARACTERIZED** | Required → **optional enrichment** (for depth). Routelister is standalone for the breadth enumeration (perceive-by-enumerate). |
| **"Axis 3 — operation-shape fit"** (19-00) | **PRESERVED + APPLIED** | The lens that produces the flip: it shows routeman's move-unit didn't fit and routelister's concept-identity unit does. The concept survives and is load-bearing. |
| **Six identity anchors converge on wrong-tool** (19-00) | **SUPERSEDED for routelister** | Those anchors were routeman-specific (loop-bound identity, move-taxonomy); routelister's identity is intrinsic + concept-as-route, so they don't apply. |
| **Routelister consolidated definition** (`…12-44…`) — concept-identity unit; two axes; standalone; not-model-builder | **APPLIED + RE-CONFIRMED** | This finding is an application of that identity to the project-root territory; the project-root case is an instance of it, not an exception. |
| **Standalone (`…20-35…`) + fuzzy-goal (`…09-53…`)** | **CARRIED** | Standalone grounds project-root invocation; the fuzzy-goal handling grounds the (common) fuzzy project-level goal. |

## Next Actions

### MUST

(none — meaning-layer verdict; no action forced.)

### COULD

- **COULD-1 — Record the project-root run as a primary use case in routelister's spec.**
  - **What:** when authoring routelister's spec, include "invoked at the project root → project-space breadth run → the project's concept-identities as routes" as a canonical use case, with the standalone/Shape-H-optional and not-model-builder points stated.
  - **Who:** the structural authoring inquiry.
  - **Gate:** condition-bound — during the spec authoring.
  - **Why:** this is a keystone navigation use case; documenting it prevents the 19-00 confusion from recurring against routelister.

- **COULD-2 — (optional) continue re-evaluating other past runs** with the current understanding, per the user's broader "reevaluate our past runs" framing.
  - **Gate:** the user's call.
  - **Why:** the routeman-era findings (15-48 input-dependency, 17-30 read-policy) could be re-confirmed for routelister; likely low marginal value (each was already consistent with the routelister direction), flagged for completeness.

### DEFERRED

(none.)

## Reasoning

- **SURVIVED (the verdict):** routelister is the right tool at the project root; it runs the project-space breadth traversal → the project's concept-identities as prescriptive routes; the 19-00 wrong-tool verdict flips via 19-00's own Axis-3 test; standalone for enumeration, Shape H optional for depth; distinct from `/comprehend`. One refinement was applied: "standalone" is scoped to the enumerate-identities-as-routes (breadth) operation — it does not claim to deeply model each concept (that is Shape H's optional value).

- **KILLED — "19-00 still applies / wrong tool":** rested on routeman's move-unit; routelister's concept-identity unit resolves the Axis-3 mismatch. Tested on 19-00's own criterion (not on preference), to guard against a sycophantic flip toward the recent arc.

- **KILLED — "routelister-at-root = `/comprehend`":** output-type distinction (prescriptive routes vs descriptive model; different question). Complementary.

- **KILLED — "Shape H still required":** perceive-by-enumerate makes routelister standalone for the breadth run; Shape H is optional depth-enrichment.

A note on rigor: the flip favors the session's recent routelister work, so the real risk was a sycophantic reversal of 19-00. The flip was therefore grounded in 19-00's *own* operation-shape-fit test applied to the changed unit (not in a new criterion), and the "standalone" claim was caught overclaiming and scoped to breadth-enumeration — both anchored in external references (19-00's Axis-3 wording; the `/surfacing`-vs-`/comprehend` output-type distinction).

## Open Questions

### Refinement Triggers

- **If, when routelister actually runs at a real project root, the breadth enumeration proves to require a `/comprehend`-style understanding pass to even identify the concepts** (i.e., enumeration can't be cleanly separated from modeling for some projects), the "standalone for breadth" scope needs tightening — and Shape H may become recommended rather than optional for such cases.
- **If the project-space run overloads in practice** on large projects despite the goal-bias, an explicit scoping mechanism (sub-territory selection) may be needed (process-layer).

### Research Frontiers

- The identity-individuation mechanism (carried from the ontology finding) is especially live at project scale — deciding which artifacts are manifestations of the same project concept is harder across a whole codebase than within one inquiry. (Process-layer; flagged.)

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
now lets do this devdocs/inquiries/2026-05-28_19-00__routeman_project_root_operation_meaning but for routelister and with our current understanding.
```

</details>
