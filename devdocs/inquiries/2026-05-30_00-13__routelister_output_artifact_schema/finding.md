---
status: active
model: claude-opus-4-8[1m]
effort: max
---
# Finding: Routelister's Output-Artifact Schema — the Authored Form

## Question

Author the *form* of routelister's output — the piece the prior audit marked PARTIAL ("clear in kind [a compact list of the project's concept-identities as typed routes]; the form — record fields, saved-file format — isn't authored"). Three pieces: (OT1) the **route-record schema** (what fields one route carries); (OT2) the **saved-file** (`routelister.md`) wrapper; (OT3) how the **identity-set / cross-run index** is recorded. And (OT0) whether the FORM is then defined.

Background for an outside reader:
- **routelister** lists the concepts in a body of material as **typed prescriptive routes** (directions toward a goal). A *root* run lists the project's concept-*identities*; a *concept-targeted* run lists one identity's *manifestations*.
- **routeman** (its predecessor) already has a per-route record schema (its spec §5.4), a route-map wrapper (§5.5), and a cross-run state file (§5.8). But a prior finding established that routeman's machinery is *partly loop-contaminated* — parts of it presuppose the cognitive loop routelister doesn't run inside — so it must be carried **per-component through a loop-bound test**, not copied wholesale.
- A route's **type** was settled earlier as a three-part signature: **grain** (project-space / concept-space) × **kind** (teleological / epistemic) × **engagement-type** (a 9-verb subset). This run lands that signature as fields.

**Goal:** a concrete, authored schema — an actual field list + wrapper + state-file — with every routeman field explicitly classified *carry / re-derive / drop*, not a vague "it has fields."

## Finding Summary

- **The output is two artifacts, mirroring routeman's two:** a human-facing **`routelister.md` Route-Map** (the routes from one run) and an **identity-set / index state-file** (the cross-run memory) — the same split as routeman's `routeman.md` + `_route.md`, with the same two roles (per-run output vs cross-run continuity).

- **The route-record schema (one record = one concept-identity):**

  | Group | Field | Values | Provenance |
  |---|---|---|---|
  | **Route Identity** | Direction | the concept-identity, named as a direction | carry (re-derived) |
  | | Goal | what engaging it achieves | carry |
  | | grain | project-space / concept-space | new (the signature) |
  | | kind | teleological / epistemic | new (the signature) |
  | | engagement-type | the 9-verb subset (DEEPEN/DEVELOP/PURSUE-SEED/INVESTIGATE-FRONTIER / REFINE/REFRAME/DIAGNOSE/TEST/CONSOLIDATE) | **replaces** routeman's single Movement-Type |
  | **Route Meaning** | Movement | what engaging this concept does (territory-relative) | re-derived |
  | **Route Reasoning** | WHY | territory-evidence it's a goal-relevant route | carry |
  | | why-this-might-be-important | 1-sentence cap; territory-anchored; omitted if no anchor | carry |
  | **Route Attribution** | Priority / Confidence | HIGH / MED / LOW — **attributive** (not selection) | carry |
  | **Route Guidance** | Guidance Mode | none / compact / full / expand-on-drill | carry (re-derived from expand-on-selection) |
  | | Guidance Pointers | 0 / 1-2 / 3-5, each with its WHY | carry |
  | **Route Depth-link** | depth-pointer + depth-signal | a **within-concept** pointer to this identity's own depth run + a compact signal | new (cross-run) |
  | | (optional) reachability | engageable (default) / referenced-but-absent | re-derived (minimal) |

- **Three fields are DROPPED as loop-contaminated:** routeman's **Status** cycle-values (done / stale / superseded / active — relative to a cycle having run), **Blocked-By** (route-gates), and **Unlocks** (the downstream-routes a route enables — which is precisely the *inter-concept dependency graph* routelister's identity forbids). The *legitimate* residual of Status is not lost, just relocated: "has this identity been drilled?" lives in the **depth-link**, and "superseded by a re-individuation" lives in the state-file's **individuation-provenance**.

- **The boundary that keeps the schema inside routelister's identity:** *no field's value is a different concept-identity.* The depth-pointer targets the same identity's own depth run; the individuation-provenance lists the same identity's own merged items. The schema stores no edge between two concepts — that is what dropping Unlocks enforces.

- **The `routelister.md` Route-Map wrapper:** Map Header (identity-count + HIGH-priority count) + Route Index (an identity-table) + the per-route records + an **Excluded section** (the *notable* candidate-concepts that were considered and rejected, with reasoning — preserving "visible-with-reason, never silently filtered") + Telemetry (distributions per grain / kind / engagement-type; individuation stats; convergence; frontier-flags).

- **The identity-set / index state-file** (re-derived from routeman's `_route.md`, within-concept): the registry `{identity → {own-depth pointer, depth-signal, individuation-provenance (which items merged in + confidence), first-seen / last-touched}}` + an invocation log. It strips routeman's loop machinery (REVISIT, cross-cycle, per-route Status).

- **One data structure, three roles.** The identity-set/index state-file is simultaneously this run's OT3 deliverable, the *cross-run model*'s core artifact, and the *listing mechanism*'s running identity-set — i.e., the project's **persistent concept-map** (structurally a library "authority file": a registry of Works, each linking to its own Manifestations). Resolving the form here unifies three inquiries around one object.

- **The form is now DEFINED** (PARTIAL → DEFINED). Every field is traced to routeman's §5.4/§5.5/§5.8 via the loop-bound test; the schema is organized around the type-signature; the within-concept depth-link replaces the forbidden Unlocks.

## Finding

### Orientation

The prior audit found routelister's root-run output clear *in kind* (a compact list of concept-identities as typed routes) but not *in form* — the record fields and saved-file format weren't authored. This is the structural pass that authors them. The method is a per-field re-derivation of routeman's existing output spec (§5.4 record, §5.5 wrapper, §5.8 state-file) through the loop-bound test established earlier: keep what is concept-relative, drop or re-derive what is loop-relative.

### The route-record, field by field

The record (the summary table above) is routeman's five-group structure re-derived. Most fields carry: **Direction** (the concept-identity, named as a direction), **Goal**, **Movement**, **WHY**, **why-this-might-be-important**, **Guidance Mode** and **Pointers**. **Priority** and **Confidence** carry too — and crucially they carry as *attributive* tags (each route's importance and certainty), not as selection: routeman's own spec permits per-route attribution while forbidding a which-route-wins ranking, and routelister, which enumerates all routes without choosing, inherits exactly that line.

One field is *replaced*: routeman's single **Movement-Type** (one of its 16) becomes routelister's three-field **type-signature** — grain, kind, engagement-type. The record is, in effect, organized around that signature, with the carried routeman fields as the surrounding attribution.

One field is *added*: the **depth-link** — a pointer to this identity's own depth run, if it has been drilled, plus a compact **depth-signal** ("unresolved README-vs-implementation divergence → epistemic route available"). This is the cross-run enrichment from the earlier cross-run finding, and it is strictly within-concept (an identity pointing to *its own* depth), not a link to another concept.

### What is dropped, and why nothing is lost

Three of routeman's fields are dropped because their meaning presupposes the cognitive loop routelister doesn't run inside:

- **Status** (done / stale / superseded / active) — these are *cycle-relative* (a route is "done" because a cycle executed it, "stale/superseded" because the cycle evolved). routelister lists what *could* be engaged, not what *has been*; the lifecycle is a selector/cross-run concern.
- **Blocked-By** — presupposes inter-route gates, which exist only in a route-graph routelister doesn't build.
- **Unlocks** (the downstream routes a route enables) — this is the sharpest. "Engaging A unlocks B" is literally an edge between two concepts, which is the inter-concept dependency graph routelister's identity explicitly excludes. It must go.

Dropping Status does not lose the parts worth keeping; it *relocates* them. "Has this identity been drilled?" is answered by the depth-link. "Has it been superseded by a re-individuation (merged or split)?" is answered by the state-file's individuation-provenance. A minimal optional *reachability* flag is kept only for the edge case where the goal references a concept not actually in the territory (engageable-by-default vs referenced-but-absent). So the route-state information routelister genuinely needs survives; only the loop-relative bookkeeping is gone.

### The boundary

The single rule that keeps the whole schema inside routelister's identity: **no field's value is a different concept-identity.** The depth-pointer points to the same identity's own depth run; the individuation-provenance lists the same identity's own merged items; nothing records "concept A relates to concept B." This is what makes the depth-link categorically different from the dropped Unlocks (within-concept vs inter-concept), and it is the structural guarantee that routelister does not drift into building the forbidden dependency graph.

### The saved file and the state-file

The **`routelister.md` Route-Map** wraps the records: a Map Header (counts), a Route Index (an identity-table for quick scanning), the per-route records, an **Excluded section**, and Telemetry. The Excluded section is re-derived from routeman's "inapplicable movement-types" into routelister's **notable admission-rejected candidate-concepts** — concepts that were plausibly relevant but didn't qualify, recorded with reasoning rather than silently dropped (the "visible-with-reason" discipline that the asymmetric-failure principle demands). It is bounded to *notable near-misses*, not every irrelevant thing in the territory.

The **identity-set / index state-file** (re-derived from routeman's `_route.md`) is the cross-run memory: each identity mapped to its own-depth pointer, its depth-signal, its individuation-provenance, and timestamps, plus an invocation log. It strips routeman's loop machinery (REVISIT, cross-cycle reading, per-route Status). This file *is* the running identity-set the listing mechanism builds and *is* the cross-run index the cross-run model reads — one structure, the project's persistent concept-map. Structurally it is a library authority file: a registry of Works (identities), each linked to its own Manifestations (depth), which is reassuring evidence the design is a known, workable shape rather than a novelty.

### The form is defined

With the record, the wrapper, and the state-file authored — every field classified carry / re-derive / drop against routeman's spec, the type-signature landed as fields, and the within-concept depth-link replacing the forbidden Unlocks — the root-run output's form moves from PARTIAL to **DEFINED**. The remaining detail (exact markdown rendering, field-name bikeshed) is spec-authoring polish, not a design gap.

## Inherited Commitments Re-test

This inquiry re-derives routeman's output spec + consumes the chain; each commitment is re-tested.

- **Commitment:** routeman's per-route 5-group schema (§5.4).
  - **Source:** `cognitive_harness/routeman/references/routeman.md` §5.4
  - **Re-test status:** **RE-TESTED per-field → carry / re-derive / drop.**
  - **Evidence:** carry Direction/Goal/Movement(re-derived)/WHY/why-important/Priority/Confidence/Guidance; replace Movement-Type → {grain, kind, engagement-type}; drop Status-cycle-values + Blocked-By + Unlocks (loop-contaminated; Unlocks = the inter-concept graph). Status's legitimate residual relocated (drilled → depth-link; superseded → individuation-provenance).

- **Commitment:** routeman's Route-Map wrapper (§5.5).
  - **Source:** same, §5.5
  - **Re-test status:** **RE-TESTED → re-derived.**
  - **Evidence:** Header + identity-Index + Excluded (re-purposed to *notable admission-rejected concepts*) + Telemetry (per grain/kind/engagement-type + individuation stats).

- **Commitment:** routeman's `_route.md` state-file (§5.8).
  - **Source:** same, §5.8
  - **Re-test status:** **RE-TESTED → re-derived within-concept.**
  - **Evidence:** the identity-set/index (identity → own-depth + signal + provenance + log); strips REVISIT / cross-cycle / per-route Status.

- **Commitment:** the route-type signature (grain × kind × engagement-type); the NOT-list excludes inter-concept dependency graphs.
  - **Source:** `devdocs/inquiries/2026-05-29_18-17__routelister_route_type_schema_reconciliation/finding.md`
  - **Re-test status:** **RE-TESTED → the signature is the Route-Identity fields; the NOT-list is the boundary** (Unlocks dropped; no field's value is a different identity).

- **Commitment:** the running identity-set (`22-40`) = the cross-run index (`21-01`, within-concept).
  - **Source:** `devdocs/inquiries/2026-05-29_22-40__routelister_concept_listing_mechanism/finding.md` + `devdocs/inquiries/2026-05-29_21-01__routelister_output_and_cross_run_behavior/finding.md`
  - **Re-test status:** **RE-TESTED → CONFIRMED + UNIFIED.** The state-file IS that identity-set/index — one structure serving listing, cross-run, and output.

- **Commitment:** breadth-compactness (`11-43`).
  - **Source:** `devdocs/inquiries/2026-05-29_11-43__routelister_concept_ontology_traversal/finding.md`
  - **Re-test status:** **RE-TESTED → one record = one identity** (not per-manifestation).

## Next Actions

### MUST

- **What:** in routelister's structural spec, author the output section as the **two artifacts** — the `routelister.md` Route-Map (Header + Route Index + per-route records [Direction, Goal, grain/kind/engagement-type, Movement, WHY, why-important, Priority/Confidence, Guidance, within-concept depth-link, optional reachability] + admission-rejected Excluded + Telemetry) + the identity-set/index state-file — with the three dropped fields (Status-cycle-values, Blocked-By, Unlocks) explicitly excluded and the Status residual relocated.
  - **Who:** the routelister structural-spec authoring pass.
  - **Gate:** condition-bound — when the spec's output section is written.
  - **Why:** this is the authored form; it completes routelister's output half and supplies the artifact the cross-run model reads/writes.

- **What:** encode the within-concept boundary as an explicit spec invariant: *no route-record or state-file field's value is a different concept-identity* (the depth-pointer targets the same identity's own depth; the provenance lists the same identity's own items).
  - **Who:** the structural-spec authoring pass.
  - **Gate:** condition-bound — alongside the output section.
  - **Why:** it is the structural guarantee that the schema does not drift into the forbidden inter-concept dependency graph.

### COULD

- **What:** treat the identity-set/index state-file as the single shared artifact across the listing mechanism, the cross-run model, and the output — i.e., one persistent concept-map, not three parallel stores.
  - **Who:** the structural-spec authoring pass.
  - **Gate:** condition-bound — when the state-file is specified.
  - **Why:** the unification surfaced here; avoids divergent identity stores.
  - **Depends-on:** MUST item "author the output section" (which defines the state-file's contents).

### DEFERRED

- **What:** the cross-run model's read/integrate/persist operations *on* these artifacts.
  - **Gate:** condition-bound — the cross-run model design pass (now unblocked: it has a defined artifact to operate on).
  - **Why (if revived):** this run authored the artifact; the operations that read/write it across runs are the remaining DAG item.

## Reasoning

The schema was reached by re-deriving routeman's output spec field-by-field and testing the strongest objections:

- **"Carry routeman's §5.4 wholesale."** Rejected — it would re-import the loop-contaminated fields (Status-values, Blocked-By, Unlocks) the loop-bound test removes.
- **"Dropping Status is too aggressive — routelister needs route-state."** Partially conceded, and it sharpened the design. The cycle-relative Status values genuinely don't apply; but the legitimate residual is *relocated*, not lost — "drilled?" → the depth-link, "superseded?" → the individuation-provenance — plus a minimal reachability for the referenced-but-absent edge. "Dropped" means "relocated."
- **"The depth-link / provenance smuggles the inter-concept graph back in."** Rejected. Both are strictly within-concept (an identity's own depth, an identity's own merged items); no field's value is a different identity. The boundary is explicit and is what dropping Unlocks enforces.
- **"The Excluded section is unbounded."** Conceded and bounded — record only *notable* admission-rejected near-misses, not every irrelevant thing.
- **"One artifact is simpler than two."** Rejected — the route-map (per-run output) and the state-file (cross-run memory) serve different roles, exactly as routeman splits `routeman.md` from `_route.md`.
- **"It's a relabel of routeman's schema."** Rejected — it drops three fields, replaces one with the three-field signature, adds the depth-link, and re-purposes the Excluded section. Structural change, driven by the loop-bound test.

A note on method, since this re-derives the project's own predecessor spec: every field decision is anchored on routeman's *literal* §5.4/§5.5/§5.8 fields plus the loop-bound test and the NOT-list, and the re-derivation *drops* parts of routeman's mature schema (adversarial to wholesale-carry) — with the two-artifact and within-concept-link patterns independently grounded in library authority-record practice.

## Open Questions

### Blocked

- The cross-run model's read/integrate/persist operations are still to be designed — but they are now unblocked, because this run supplies the artifact they operate on (the identity-set/index state-file).

### Refinement Triggers

- If, in spec authoring, a route genuinely needs a lifecycle state beyond "drilled?" and "superseded?" (e.g., an operator-facing "dismissed" mark), the minimal-reachability field re-opens — but as an operator/cross-run annotation, never as a loop-cycle Status.
- If a real use surfaces a need to record a relation *between* two concept-identities, the within-concept boundary is under pressure — and the correct response is to re-confirm the NOT-list (that need belongs to a different discipline), not to add an inter-concept field.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
now lets dive into

Is the root-run output clear?

PARTIAL. Clear in kind (a compact list of the project's concept-identities as typed routes); the form (record fields, saved-file format) isn't authored.
```

</details>
