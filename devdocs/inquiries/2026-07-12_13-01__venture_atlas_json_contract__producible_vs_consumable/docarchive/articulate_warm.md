# Articulate-Warm — the JSON contract (post-surfacing re-anchor)

## User Input

_branch.md + surfacing.md + articulate_simple.md of `devdocs/inquiries/2026-07-12_13-01__venture_atlas_json_contract__producible_vs_consumable/` (WARM PASS — run inline by the /traverse runner; `Skill(articulate_warm)` not registered, standing workaround; both reference specs read in full earlier this session).

---

## Item 1 — warm bundle

### Re-anchored MQ2 (COMMITTED context-need)

The contract question bears on four facets, all now filled:

1. **The producible side, DEMONSTRATED:** two full prototype-parses (a 2026-07 routed folder and a 2026-05 extended-surfacing folder) extracted id/slug/title/status/flowType/createdAt/lastWorkedAt/event-count/body{file,path,bytes}/edges{type,target,targetRaw,note} by regex — with three probe-catches that the schema must absorb: (a) stamp variance is real and bounded (1,325 date+time vs 372 date-only lines) with the **midnight-truncation clamp** required (`lastWorkedAt = max(createdAt, max(stamps))`); (b) the edge enum has **six native types**, not three; (c) edge targets need the **folder-id vs raw-text duality** (file- and prose-targets are data, not errors; exactly 1 renamed-folder miss).
2. **The consumable side, as reference-not-constraint:** the demo's node contract with **epoch-ms number timestamps** (ISO→ms is a named transform), the `effLast` roll-up over `childIds`, the DetailView/map field reads — plus its NOT-consumed extension points (status, typed edges, groups, provenance, events, flowType), free to use since the component is editable (standing correction).
3. **The body-delivery axis, UNBLOCKED:** the component is JSX/React — bundler dev-server or static hosting in every deployment — so `fetch()` of relative static paths works wherever the component runs at all; "no server" = no backend/maintained service. The user's "full finding.md path" guess is legal; inline (7.12 MB total, ≈8 MB JSON) vs path (sub-MB + lazy) vs BOTH is a size/atomicity design choice, not a doctrine question.
4. **The extensibility stance:** open kind enum (`inquiry` now; `group`/`canon`/`seed` later), open edge-type enum (probe-forced), versioned envelope with generatedAt, groups optional (nodes must not REQUIRE a parent — the correction).

**Material-change judgment:** the committed need names exactly the territory the first surface fetched — same target, filled. **FIXPOINT at round 0. No re-surface.**

### On-trigger re-runs

- **MQ4 (boundary — re-run, moved):**
  - `v1-constraints-standing?` RESOLVED by the body-delivery fact: the standing bounds reduce to **no maintained service · no LLM · no upkeep** — none of which constrains inline-vs-path; the path option is legal. The ambiguity closes without user input.
  - `build-not-yet` RESOLVED in halves: the read-only prototype-parse was surfacing's own enumeration (in-scope-as-evidence, already done); the ADAPTER — a kept, named script artifact — remains out of this dive's scope.
  - `modules-not-required` CARRIED unchanged: group data optional; no schema field may hard-require a tier.
- **MQ1 (skip — not moved):** the four ask-kinds stand; surfacing gave them content, not different identities.
- **MQ3 (skip — not moved):** the three endpoints stand.
- **MultiDepth-WHY (skip — not moved):** the four motivations stand; `de-risking` already partially CASHED (three probe-catches found pre-code).
- **MQA (not re-run):** only MQ4 re-ran (< 2).

### Conflict-detection (warm-only)

**explicit no-conflict** — two tensions were checked and both resolve as in-scope design choices rather than premise failures: (1) the user's "full finding.md path" vs the demo's inline-`md` string — NOT a conflict; they can coexist (body for render + path for provenance), and the delivery fact makes path-only legal too; (2) the quoted v1 paragraph's "one static JSON" vs a lazy multi-file variant — the quoted paragraph is the PRE-correction sketch, not a commitment; single-vs-multi-file is precisely one of the bridge decisions this dive exists to settle. No premise contradicts surfaced reality.

### Refreshed Rephrase (considered articulations, project vocabulary)

1. "Produce the field-by-field mapping table — every parseable folder field (with the probe values) against every component-consumed field — with the six-type edge enum, the target duality, and the named transforms (ISO→ms, prettify, clamp) as the bridge rows."
2. "Draft the concrete v1 schema — versioned envelope + node records + typed edge records + OPTIONAL group records — and instantiate it with the two already-parsed real folders as example instances."
3. "Validate the four guesses formally: number-of-nodes → envelope counts; titles → node.title (+ raw slug); full finding.md path → node.body.path (legal per the delivery fact); subnode-relevant info → typed edges + derivable child summaries."
4. "Mark the fundamental producible SPACE (including routes, route-identities, seeds, frontmatter, event series — beyond v1) and the v1 slice inside it, so v2 extension is an addition, not a migration."
5. "Settle the five bridge decisions with constraint trails: body delivery (inline ≈8 MB / path sub-MB / both), single-vs-multi-file, ms-vs-ISO at the boundary, the optional-group shape, and the open-enum + version envelope."

### Carried unchanged

Itemize (count = 1) · Deconstruct tuple (understanding → concrete contract: inventories + schema draft + real examples + bridge decisions; NOT the adapter build) · MultiDepth literal-statement.

---

## Loop telemetry + verdict

- **Rounds:** 0 re-surfaces (fixpoint round 0) · anchor same-target-filled · no oscillation.
- **content-conflict:** none (explicit no-conflict; two tensions resolved as in-scope design choices).
- **Self-assessment: HIGH-PROCEED** (zero LAYER 1 fires; low friction; one boundary ambiguity closed by evidence rather than by assumption).
