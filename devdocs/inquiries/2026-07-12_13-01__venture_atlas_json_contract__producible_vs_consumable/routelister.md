# Routelister — the JSON contract: onward route-field

## User Input

territory: devdocs/inquiries/2026-07-12_13-01__venture_atlas_json_contract__producible_vs_consumable/ (this inquiry's artifacts). goal: the landed contract serving its consumers — the settled venture-atlas/1 schema (inline-default both-capable shape, 12 producer clauses, the ~20-line shim spec, all four user guesses landed); NOT the adapter build. (TRAVERSE EXHAUST — typed + prescriptive, never choosing. CONCLUDE excluded as process-control; the user's picks excluded as selections. Both files to inquiry ROOT; _route.md fresh, iteration 1.)

## Map Header

- Identities: **8** · High-priority: **2** · **Essential-count: 1** (R1)
- Mode: root / project-space (breadth) · Entry: fresh

## Route Index

| # | Direction | engagement-type | Priority | Essentiality | ✓ |
|---|---|---|---|---|---|
| R1 | the adapter build | DEVELOP | HIGH | core | ✓ 2026-07-12 (user-initiated same day: `docs/visualisation/inquiries2visualisationsJSONmaker.py` — all 12 clauses; validates through the schema at construction; ran on the real corpus: 228 nodes / 744 edges / 34 groups; inline 7.7 MB, --path 0.4 MB + 228 bodies; both modes round-trip-validated) |
| R2 | the component fork + loader shim | DEVELOP | MED-HIGH | supporting | ✓ 2026-07-12 (consumed by the 14-50 design dive + BUILT: `docs/visualisation/app/` — five organs, the shim in src/data.js, marked+DOMPurify reading organ; vite build clean; preview verified) |
| R3 | the fixture + clause-tests | TEST | MED | supporting | |
| R4 | the JSON-Schema / TS-types artifact | DEVELOP | LOW-MED | peripheral | ✓ 2026-07-12 (user-picked the Pydantic form, gate knowingly overridden by direct ask: `docs/visualisation/schema.py` — official venture-atlas/1 models w/ honesty-counter + referential-integrity validators + a validate-CLI) |
| R5 | the flip-trigger watch (inline→path) | TEST | LOW | peripheral | |
| R6 | the memory-mirror | CONSOLIDATE | MED | supporting | |
| R7 | the parent route-map consumption marks | CONSOLIDATE | LOW-MED | supporting | |
| R8 | the shared-record-API frontier | INVESTIGATE-FRONTIER | LOW | peripheral | |

## Route Records

**R1 — the adapter build**
- Goal: the contract's producer exists — real `data.json` from the real corpus. · engagement-type: DEVELOP (teleological)
- Move: write the ~100-line script implementing the 12 clauses (include-filter · both stamp patterns · clamp · six-type edge parse w/ duality · full notes · prettify · optional union-find groups · body fallback · computed counts/anomalies · delivery modes w/ `--inline` default and `--path` copying to `public/bodies/` · normalization) and emit venture-atlas/1.
- Lands: the Venture Atlas's data layer, regenerable by one command.
- Touches: `devdocs/inquiries/*/` (read-only) · the app's `public/data.json` (+ `public/bodies/` in path mode) · git (one `rev-parse` for `source.commit`).
- WHY: the whole dive exists to make this build trivial and rework-free — the contract pays when its producer runs.
- Priority: HIGH · Confidence: HIGH (every clause probe-verified) · Essentiality: **core**
- Guidance (compact): · the schema + clauses in critique.md §Signal and the finding are the spec — implement, don't redesign (bc the slots were settled with trails) · Meaning-gaps: none blocking — naming of the output dir (low; deferable).
- USER-GATED: the build decision is the user's.

**R2 — the component fork + loader shim**
- Goal: the contract's consumer renders it. · engagement-type: DEVELOP (teleological)
- Move: fork the demo; replace the dummy-data builder with the ~20-line shim (fetch data.json · ISO→ms via `Date.parse` · optional group→parent/children derivation · synthetic root/group view-objects with mechanical bodies · counts from envelope · `body.text ?? fetch(body.href)`); apply the additive edits (edge sets for related/superseded · slug truncation · `outputColorSpace`).
- Lands: the map showing real folders — first light.
- WHY: the consumer-side half; with R1's output (or even a 3-node hand fixture) it completes the visible loop the user called a cool idea.
- Priority: MED-HIGH · Confidence: HIGH · Essentiality: supporting (the goal — the CONTRACT — lands without it; the PROJECT's map needs it)
- Guidance: · can start before R1 on a hand-made fixture (bc the shim only needs the schema, not the corpus) · component edits stay additive per the standing correction (the demo is example code — heavier redesign is equally legitimate if the user prefers).

**R3 — the fixture + clause-tests**
- Goal: the 12 clauses executable as checks, not prose. · engagement-type: TEST (epistemic)
- Move: 2–3 synthetic mini-folders (one date-only-stamps · one ACTIVE-no-finding · one with file-target + prose-target edges) + assertions on the emitted JSON (clamp applied · fallback body · duality preserved · counts equal reality).
- Lands: regression safety for every future adapter change; the honesty counters proven honest.
- WHY: the contract's trust claim ("no silent drops") becomes verifiable — cheap now, expensive to retrofit.
- Priority: MED · Confidence: HIGH · Essentiality: supporting

**R4 — the JSON-Schema / TS-types artifact**
- Goal: the contract formally machine-checkable / editor-completable. · engagement-type: DEVELOP (teleological)
- Move: derive `venture-atlas.schema.json` (or a `.d.ts`) from the settled draft; wire it as the adapter's output validation and the app's types.
- Lands: multi-consumer safety (jq users, future views) + IDE support.
- WHY: indirect — the prose contract suffices for v1; formalization pays as consumers multiply (CM-REMOVE's opening).
- Priority: LOW-MED · Confidence: HIGH · Essentiality: peripheral

**R5 — the flip-trigger watch (inline→path)**
- Goal: the D1 default honestly revisited exactly when its condition fires. · engagement-type: TEST (epistemic)
- Move: passive; the trigger is written (critique §D1): emitted file > ~15 MB or corpus ≳ 600 folders → regenerate with `--path` (same schema; no migration).
- Lands: the default never silently outlives its justification.
- WHY: weak by design — a labeled watch dropped silently loses information for free.
- Priority: LOW · Confidence: HIGH · Essentiality: peripheral

**R6 — the memory-mirror**
- Goal: the settled contract recallable across sessions. · engagement-type: CONSOLIDATE (epistemic)
- Move: mirror into auto-memory: the schema shape + the settled slots (inline default w/ flip-trigger; ISO; both-groups; id-lookup subnodes) + the 12 clauses' existence + the probe facts (7.12 MB; two stamp formats; six edge types; the clamp).
- Lands: the next session builds from the landing, not from re-derivation.
- WHY: the contract compounds only if findable warm.
- Priority: MED · Confidence: HIGH · Essentiality: supporting

**R7 — the parent route-map consumption marks**
- Goal: cross-inquiry state honest — the 10-46 map reflects what this dive consumed. · engagement-type: CONSOLIDATE (epistemic)
- Move: as the consumer, tick/annotate on `…10-46…/routelister.md`: R2 (stamp-variance verification) ABSORBED-RESOLVED by this dive's probes (two formats measured; clamp specified; the ~24 unresolved decomposed); R1 marked partially-consumed (the contract half done; the build half open → carried by THIS map's R1/R2).
- Lands: the parent's onward field readable without stale duplication.
- WHY: the ✓ column is consumer-filled by design; leaving it stale costs the next reader a re-derivation.
- Priority: LOW-MED · Confidence: HIGH · Essentiality: supporting

**R8 — the shared-record-API frontier**
- Goal: the file's second life beyond the map, named. · engagement-type: INVESTIGATE-FRONTIER (teleological)
- Move: once data.json exists, try the non-map consumers CM-REMOVE opened (jq one-liners over statuses/edges; a "what's stale?" CLI; other views reading the same file) and see which earn keep.
- Lands: evidence on whether the contract is a map-input or the record layer's read-API.
- WHY: indirect and post-build; kinship named, suspicion-principle governs (candidacies earn by use).
- Priority: LOW · Confidence: MED · Essentiality: peripheral · @data-exists

## Excluded (with reasons)

- **CONCLUDE / the finding compilation** — process-control (established convention).
- **The user's picks** (build-now-or-not; any inline/path preference override) — selections; R1/R2 carry the consuming work.
- **A "rename the schema" bikeshed route** — `venture-atlas/1` is a label; nothing hangs on it; renaming is a find-replace inside R1's spec, not a direction.
- **Gzip/serving-compression** — a deployment detail inside R2's build, not a concept.

## Telemetry

- Mode: root/breadth · Entry: fresh (index created, iteration 1).
- Identities: 8 · teleological 4 (R1 R2 R4 R8) · epistemic 4 (R3 R5 R6 R7) · high-priority 2 (R1 R2) · essential: 1 core / 4 supporting / 3 peripheral (one phase-qualified).
- Individuations: 8; 1 deliberate split held (R1 vs R2 — producer vs consumer artifacts, different buildable halves); 1 deliberate split held (R3 vs R1 — tests are epistemic, the build teleological); 0 uncertain.
- Convergence: sweep cycle 2 yielded no new identities — CONVERGED. Frontier flags: none.
- LAYER 1/2: none observed (no selection-creep — both picks excluded; prescriptive throughout; identity grain held; the parent-map marks framed as THIS consumer's act, not process-control).
- **Self-assessment: PROCEED.**
