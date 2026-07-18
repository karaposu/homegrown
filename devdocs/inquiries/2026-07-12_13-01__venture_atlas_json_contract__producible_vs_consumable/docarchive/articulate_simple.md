# Articulate-Simple — the Venture Atlas JSON contract: producible vs consumable

## User Input

```text
v1 — the Venture Atlas base layer (recommended now). Folder-nodes on chain-modules. The adapter is a ~100-line script that reads exactly three sources — folder names, _state.md (Status, Relationships, History stamps), and finding.md/_branch.md bodies — and emits one static JSON the component loads in place of its dummy-data builder. Component changes are additive only: a JSON loader, two extra edge sets (RELATED thin lines, SUPERSEDED dashed), the grouping parameter, slug truncation, and one three.js deprecation fix (outputEncoding/sRGBEncoding were removed in r152+; use outputColorSpace). No server, no LLM, no upkeep: the map regenerates by re-running the parse, and every rendered word has a real author.


i think this is cool idea, 

first thing we should dive deep tho is more fundamental understanding of what kind of JSON can be produced from inquiry folders and what kind of JSON can be input for this visualizer 

this is our base question. I guess this json should include number of nodes, titles, full finding.md path ,  subnode relevant node information so they can be showed. 

lets dive deeper
```

[Session-context note: the quoted "v1" paragraph is the 2026-07-11_10-46 finding's PRE-correction wording ("folder-nodes on chain-modules"); the user's 2026-07-12 correction stands — the demo's module tier is example-code structure, NOT a requirement; grouping is optional; the component will be edited to the project's own needs. The correction bounds this question.]

---

## Itemize

- **count:** 1
- **items:** `[item-1: "Build a fundamental understanding of the JSON contract: what kind of JSON can be produced from inquiry folders, and what kind of JSON can be input for this visualizer — with the user's guessed fields (node count, titles, full finding.md path, subnode-relevant info) as starting hypotheses."]`
- Keep-together holds: the produced-side and the input-side are two halves of ONE contract question — the user names it "our base question," singular.

---

## Item 1 — per-item bundle

### MQ1 (verdict-axis)
**Q:** What is the user asking for?
**A — identified-ambiguities-list:**
- `dual-schema-mapping` — characterize BOTH sides (folder-producible / visualizer-consumable) and the bridge between them.
- `concrete-schema-design` — land an actual JSON schema draft (envelope, node shape, edge shape) the adapter would emit.
- `feasibility-inventory` — enumerate the full space of what IS extractable from folders (wider than any one schema).
- `hypothesis-check` — evaluate the four guessed fields (node count · titles · full finding.md path · subnode-relevant info).

### MQ2 (context-need axis)
**Q:** What context does the response need that isn't in the statement?
**A — identified-ambiguities-list:**
- **verdict sub-axis:** what the component actually CONSUMES field-by-field (recoverable from the preserved demo contract in the 10-46 inquiry: `{id, kind, title, parentId, childIds, pos, createdAt, lastWorkedAt, md}` + `effLast` roll-up + HUD counts + detail-view fields); what folders actually YIELD per field INCLUDING edge cases (the ACTIVE folder without finding.md; SUPERSEDED; the 3 non-standard dirs; May-era stamp variance; the ~24 unresolved CONTINUES-FROM lines) — checkable by parsing real folders; ★whether `md` should be INLINE CONTENT or a PATH — the user's guess says "full finding.md path," the demo inlines a string, and path-based loading implies runtime file-fetch (a server, or fetch()-from-relative-URL constraints) that collides with the quoted "no server" stance — needs surfacing, not assuming.
- **kinds sub-axis:** which JSON kinds are in play — the file ENVELOPE (counts, metadata, generation stamp, version) · NODE records · EDGE records (three native types) · optional GROUP records (grouping is optional per the correction) · the BODY-DELIVERY mode (inline / path / both).
- **stance sub-axis:** static-file-no-server (one JSON, everything self-contained) vs dev-server allowance (lazy per-node md fetch); single-file vs multi-file; forward-extensibility stance (v2 concept-kinds should fit without a breaking change); prototype-parse in-scope-as-evidence vs out-of-scope-as-premature-build.

### MQ3 (intent-axis, WHAT)
**Q:** What is the user trying to accomplish?
**A — identified-ambiguities-list:**
- `spec-then-build` — settle the contract so the adapter build is next and trivial.
- `understand-the-space` — map what's possible "more fundamental[ly]" before committing to fields.
- `validate-guesses` — test the four guessed fields against both sides.

### MQ4 (boundary-axis)
**Q:** What is the user explicitly excluding?
**A — identified-ambiguities-list:**
- `modules-not-required` (extrinsic, from the standing 2026-07-12 correction): the schema must NOT hard-require a module tier — grouping data may be present but optional; the demo's exact consumption is a reference, not a constraint (the component will be edited).
- `build-not-yet` — "first thing we should dive deep" implies the adapter build is NOT this dive's deliverable; ambiguous whether a prototype-parse of a few real folders is IN scope (as grounding evidence for the schema) or OUT (as premature build).
- `v1-constraints-standing?` — the quoted paragraph carries "no server, no LLM, no upkeep"; ambiguous whether these are fixed bounds on the schema (they'd push md-inline) or re-decidable alongside it (a path-based md field would re-open the no-server bound).

### MQA
**reconcile** — three joint axes identified with confidence:
1. **The space-mapping axis:** MQ1's `feasibility-inventory` + MQ3's `understand-the-space` — the same width dimension (fundamental space first, schema as a slice of it).
2. **The guess-validation axis:** MQ1's `hypothesis-check` + MQ3's `validate-guesses` — the same dimension.
3. **The body-delivery axis:** MQ2's inline-vs-path + MQ4's `v1-constraints-standing?` — one joint question: how does md content reach the detail view under the static-file stance? (The user's "full finding.md path" guess sits exactly on this axis.)
Remaining identifications flow through unchanged.

### Deconstruct
**tuple:** (deliverable: a fundamental understanding that LANDS as a concrete JSON contract — both sides characterized (the producible field-space; the consumable needs) plus a recommended schema draft with real example instances; kinds: field-inventory tables + a schema draft + parsed-from-real-folders examples + the bridge decisions with their constraint trails; bounds: the v1 Venture Atlas data layer — inquiry folders as the source, this visualizer (as an editable base) as the consumer; NOT the adapter build itself; NOT the v2 concept-layer schema beyond extensibility hooks).
**Cross-check vs Itemize:** single-tuple (one contract with two faces); no late-split signal.

### MultiDepth
**literal-statement:** "Before anything else, we should dive deep into a more fundamental understanding of what kind of JSON can be produced from the inquiry folders and what kind of JSON can be input for this visualizer — this is our base question. My guess: the JSON should include the number of nodes, titles, the full finding.md path, and subnode-relevant node information so they can be shown. Let's dive deeper."

**purpose-motivation-ambiguities (WHY-axis) — identified-ambiguities-list:**
- `design-foundation` — get the contract right once so the build is trivial and rework-free.
- `comprehension` — understand the record layer's data space itself, beyond this one tool ("more fundamental understanding").
- `de-risking` — find producer/consumer mismatches BEFORE code exists.
- `momentum` — "i think this is cool idea"; keep the build moving with a concrete next artifact.

### Considered articulations
1. "Inventory both sides field-by-field — everything parseable from an inquiry folder vs everything the component's two views consume — and produce the mapping table with gaps and transforms marked." (the space-mapping reading)
2. "Design the concrete v1 JSON schema the adapter should emit — envelope + nodes + edges + optional groups — with a real example instance parsed from actual folders." (the schema-design reading)
3. "Validate the user's four guessed fields (node count · titles · full finding.md path · subnode info) against both sides — including the inline-content-vs-path decision the 'path' guess raises under the no-server stance." (the guess-validation reading)
4. "Characterize the producible SPACE first — all folder-extractable data, including what v1 wouldn't use — as the fundamental layer, then mark the v1 slice the visualizer consumes." (the fundamental-space-first reading)
5. "Settle the bridge decisions the contract hangs on — md inline vs path, single-file vs multi-file, the optional-grouping shape, the extensibility envelope for v2 node-kinds — each with its constraint trail stated." (the bridge-decisions reading)

---

## Self-assessment

LAYER 1 self-check (single LIGHT pass): Modes 1–9 scanned — **zero fires**. (Count=1 clean keep-together; all operations fired; MQ2 carries verdict/kinds/stance; every MQ + MultiDepth answer is an identified-ambiguities-list — no commitments (the body-delivery question is SURFACED, not decided); MQ3 WHAT-endpoints vs MultiDepth WHY-motivations clean; all 5 variants inside the composition bounds on warm substrate.)

Friction: low — a well-posed contract question with the user's own field-hypotheses to anchor validation.

**Verdict: HIGH-PROCEED**
