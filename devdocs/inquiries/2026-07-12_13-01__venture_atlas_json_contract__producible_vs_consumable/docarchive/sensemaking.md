# Sensemaking — stabilizing the JSON contract's fact-base

## User Input

devdocs/inquiries/2026-07-12_13-01__venture_atlas_json_contract__producible_vs_consumable/_branch.md — with surfacing.md + articulate_warm.md read fully; warm settled round 0, explicit no-conflict. Stabilize: A1 producible field-catalog · A2 requirements-vs-reference line · A3 bridge-decision set D1–D6 · A4 guess-validation; collapse the 3 musts (scope layering; demo-shape bindingness; one-schema-vs-two). Leave open all D-picks + field names. Lean SV1–SV6.

---

## SV1 — Baseline

Two JSON questions meet in the middle: what folders can emit, what the component can eat. The probes already showed the two sides are close — the work is drawing the line where they differ and naming the decisions that close the gap.

## Phase 1 — Anchors

**Constraints:** every rendered word must have a real author (the map's trust property); grouping optional — no schema field may hard-require a parent (standing correction); the schema must not need a breaking change when v2 adds concept-kinds; the component is editable, but gratuitous component surgery is cost.

**Key insights:**
1. **The producible side is demonstrated, not speculative** — two real folders parsed end-to-end into node JSON; every field has a working regex and measured coverage.
2. **The mismatches are all bridgeable by named transforms or additive component edits** — nothing on either side is structurally incompatible: ISO↔ms is a one-line conversion; containment is derivable from flat edges+groups; pos can be generated where the demo generated it.
3. **The body-delivery axis was a false constraint** — fetch of relative static paths works wherever the component runs at all, so inline vs path vs both is a size/atomicity choice (8 MB atomic vs sub-MB lazy), not a doctrine question.
4. **The edge reality is richer than the plan assumed** — six native types with prose-target and file-target edges and rich annotations; the data-truthful schema keeps them (typed, with a target duality), rather than flattening to three folder-only types.
5. **The probe-catches are contract clauses in embryo** — the midnight clamp, the two stamp formats, the include-filter for non-standard dirs: each becomes a MUST-behave line in the adapter's parse rules.

**Structural points:** the contract has FOUR natural parts — envelope (meta/counts/version) · nodes · edges · optional groups; the producible catalog and the consumable requirements are its two justifying inventories; the transforms sit between.

**Foundational principles:** parse-only v1 (no maintained service / no LLM / no upkeep — surviving bounds after warm closed the false one); data-truthful over demo-convenient (emit what the record says; let views derive what they need).

**Meaning-nodes:** "contract" = ONE interface object both sides commit to; "requirement vs reference" = what any input must have vs what this demo happens to do; "the v1 slice" = the schema now, inside a catalogued larger space.

### SV2 — Anchor-informed

The question resolves into: one four-part schema + a transforms list + six explicit decisions (D1–D6) + a layered space answer. The user's four guessed fields all have landing spots. Nothing discovered blocks anything — the dive's job is precision, not rescue.

## Phase 2 — Perspectives

- **Technical/Logical:** all parse rules verified on both eras; the clamp handles the one ordering bug found; the include-filter (`^20\d\d-\d\d-\d\d_\d\d-\d\d__`) cleanly excludes `_archive/`/`diagnostics*`; JSON size arithmetic honest (7.12 MB md + escaping ≈ 8 MB; nodes+edges alone ≈ 200–400 KB). New anchor: **ISO-8601 strings in the JSON with loader-side ms conversion keeps the data file human-readable and diff-able** — a real property, since the file regenerates by re-running the parse (diffs show what changed).
- **Human/User:** the user reads this JSON too (debugging, curiosity) — readable ISO stamps, real slugs, full edge notes serve that; the "full finding.md path" guess is partly a *provenance* desire (jump from map to file) independent of delivery mode — honor it as its own field, not only as a loading mechanism.
- **Strategic/Long-term:** at ~1,300 folders/year-out, inline-all grows toward ~40 MB — the schema should make delivery mode SWAPPABLE (same node shape whether body is inline, path, or both) so v1's pick isn't a migration later. New anchor: **delivery-mode-agnostic node shape** (body object with optional `text` and always `path`).
- **Risk/Failure:** silent parse misses are the trust killer — the envelope should carry counts INCLUDING skip/anomaly counts (e.g., `unparsedHistoryLines`, `unresolvedEdgeTargets`) so the map can say what it dropped rather than lie by omission (kin to the project's no-silent-caps norm). New anchor: **honesty counters in the envelope.**
- **Resource/Feasibility:** the adapter stays ~100 lines with all of this — every rule is a regex + a dict; the two-era parse already ran in a 60-line probe.
- **Definitional/Internal consistency:** "one folder = one traverse's record" (canon) — the node IS the record's card; SIX edge types match what runners actually write (no invented types; no dropped ones); groups = venture-shaped chains, optional (correction honored). No canon contradiction. Frame-exit: "JSON kinds" enumerated (envelope/node/edge/group + delivery mode) — no excluded referent found; recursion terminates.
- **Phase/Calibration:** none phase-dependent beyond v2-extensibility, carried as open enums. Not further engaged.

### SV3 — Multi-perspective

Three perspectives produced NEW anchors (diff-able ISO; delivery-agnostic body shape; honesty counters) — the contract is now not just "what fields" but "what properties the file must keep": readable, regenerable, honest about drops, swappable delivery.

## Phase 3 — Ambiguity Collapse

#### C1: What does "what kind of JSON CAN be produced" cover?
**Counter-interpretation:** only the v1 slice matters; cataloguing the wider space (routes, identities, seeds, frontmatter) is scope creep.
**Why the counter fails:** the user's own words — "more fundamental understanding" — explicitly ask for the space, not just the slice; and the layered answer costs one section (name-only catalog) while making v2 additive-by-design. **Confidence:** HIGH. **Resolution:** LAYERED — the producible space catalogued name-only; the v1 slice specified fully; v2 = additions, never migrations. **Fixed:** the finding's answer structure. **Excluded:** a schema that would need renaming/reshaping at v2.

#### C2: Does the demo's shape (nested `childIds` containment; `root|module|sub` kinds; ms numbers; `pos` in data) bind the schema?
**Counter-interpretation:** emit exactly what the demo eats — zero component changes, fastest first light.
**Why the counter fails (structural):** the demo's shape encodes its DUMMY DATA's convenience, not the record's truth: containment would hard-code one grouping (violating the standing correction), ms numbers make the file unreadable and undiffable, and baked `pos` freezes layout into data. The correction says the component is example code to be edited — bending the DATA to avoid editing EXAMPLE CODE inverts the actual authority order. And the counter's real value (fast first light) is preserved anyway: a ~20-line loader shim can derive the demo's exact shape from the truthful schema.
**Confidence:** HIGH. **Resolution:** the schema is **flat nodes + typed edges + optional groups**, data-truthful; the demo's needs stay DERIVABLE (containment from group ids; counts from arrays; ms from ISO). **Fixed:** the shape family. **No longer allowed:** required `parentId`; ms-only stamps; `pos` as required data. **Depends on this:** D3/D4's option sets narrow accordingly.

#### C3: One schema or two?
**Counter-interpretation:** keep two artifacts — a "what folders can emit" schema and a "what the component wants" schema — since the sides evolve independently.
**Why the counter fails:** a contract that exists as two documents is exactly how producer/consumer drift happens (each side conforms to its own copy); the two INVENTORIES are real but they are evidence FOR one interface object, not separate interfaces. The component-side wants live as loader-shim expectations derived from the one schema.
**Confidence:** HIGH. **Resolution:** ONE schema at the interface + two justifying inventories. **Fixed:** the deliverable's shape.

#### C4 (load-bearing test on insight 3): Is the body-delivery unblocking a real property or an assumption?
**Counter:** some deployment exists where the JSON loads but fetch of a sibling path fails.
**Why the counter fails:** the component is JSX — it cannot run from file:// at all; it requires a bundler/dev-server or static hosting, and in every such environment relative static fetch works by the same mechanism that served the app and the JSON itself. The only genuinely different case is embedding bodies INTO the bundle at build time — which is the inline option, already in the set. **Confidence:** HIGH (bounded: if some future embedding target — e.g., a sandboxed webview forbidding all fetch — is chosen, inline remains the fallback; the delivery-agnostic node shape makes that a regeneration, not a migration).

### SV4 — Clarified

Fixed: the four-part contract (envelope/nodes/edges/groups-optional); flat+typed+derivable shape; layered space answer; one interface object; delivery-mode-agnostic body; honesty counters; readable ISO at the boundary (as the leading candidate under C2's no-longer-alloweds — final pick stays with D3). No longer viable: demo-shape mimicry; required containment; two-document contracts. Open (deliberately): the D1–D6 picks and exact field names.

## Phase 4 — Degrees-of-Freedom Reduction

**Fixed:** the parse rules incl. clamp + both stamp formats + include-filter; the six-type edge enum + target duality + full notes; groups optional; the four-part structure; extensibility via open enums + version field.
**Eliminated:** required parentId; ms-only stamps; baked pos; two-document contracts; any v1 needing a maintained service or LLM.
**Remaining variables (Innovation's field):** D1 delivery (inline/path/both) · D2 layout (single/sidecar/per-node) · D3 boundary timestamp form (ISO+convert vs ms) · D4 group shape (node-carried id / groups array / both) · D5 envelope contents (version, generatedAt, counts, honesty counters, source-commit?) · D6 subnode info (edges-only vs + child summaries) · field naming.

### SV5 — Constrained

The solution space is one schema family with six bounded decision slots. Every slot has 2–3 live options, each with a stated constraint trail; no slot threatens another.

## Phase 5 — Conceptual Stabilization (SV6)

**The stabilized model:** The contract is ONE interface object with four parts — a versioned, honest envelope; flat data-truthful nodes; six-type annotated edges with a folder/raw target duality; optional venture-chain groups — plus a small named transform set (clamp, both-stamp-formats, prettify, ISO↔ms, union-find) and six explicit bridge decisions. Both of the user's sides are answered by the same object: "what folders can produce" = the catalogued space with the v1 slice fully specified and demonstrated on real folders; "what the visualizer can take" = the requirements line (id/title/dates/body/edges) that any input must meet, with everything demo-specific made derivable by a thin loader shim rather than baked into the data. All four of the user's guessed fields land (counts in the envelope; titles on nodes; finding-paths as always-present provenance; subnode info via edges ± summaries).

**Delta from SV1:** SV1 saw two schemas meeting in the middle; SV6 knows it's one schema with two inventories, that the file must carry PROPERTIES (readable, diff-able, honest, delivery-swappable) not just fields, that the demo's shape is explicitly non-binding (C2 — the authority order runs record → schema → shim → component), and that the open work is exactly six named decisions, not an open sea.

---

## Saturation telemetry

Perspective saturation: reached (last two confirmed). Ambiguity resolution: 4/4 collapsed, counters stated structurally. SV delta: substantial (two-schemas → one-interface-with-properties; false constraint removed). Anchor diversity: all five types. Failure modes: status-quo (C2 rejected demo-shape deference — the established code did NOT win by being established); premature stabilization (three perspectives added new anchors first); anchor dominance (removing the delivery fact still leaves C2/C3 standing — multi-pillar); clean-resolution (C4's counter tested on the component's own tech constraints); self-reference (external grounding = live probes + the demo's actual code). **PROCEED.**
