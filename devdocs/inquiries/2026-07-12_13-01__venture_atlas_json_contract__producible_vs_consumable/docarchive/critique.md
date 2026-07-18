# Critique — settling the JSON contract

## User Input

devdocs/inquiries/2026-07-12_13-01__venture_atlas_json_contract__producible_vs_consumable/innovation.md — read with sensemaking.md + decomposition.md + _branch.md fully. The gate settles D1/D2/D3/D4/D6/O-events (D5 confirm), verifies the ten clauses against the draft, validates the two real instances field-by-field, re-checks the four user guesses, runs the frame-premise test, and renders the finished contract. Save to critique.md.

---

## Phase 0 — Dimensions (weights)

| # | Dimension | Weight |
|---|---|---|
| D-A | Data-truthfulness (record-faithful; no required containment; open enums) | CRITICAL |
| D-B | Honesty (anomaly counters; no silent drops; instances factually true) | CRITICAL |
| D-C | Consumer-fit (demo derivable via thin shim; multi-consumer legible) | CRITICAL |
| D-D | Portability (vite dev / static host / artifact-CSP embed) | HIGH |
| D-E | Future-proofing (v2 additive; ~1,300-folder sizes) | HIGH |
| D-F | Readability/diff-ability (humans read this file) | HIGH |
| D-G | Simplicity (adapter ~100 lines; no gratuitous fields) | MED |

**Frame-premise test** (the C2/C3 frame): (1) the 2026-07-12 correction is user-stated and one day old — firm; (2) the probes ran live today on the actual corpus — external anchors present; (3) component-editability is the correction's own content. All three hold; the frame is prosecutable but sound.

## Phase 1 — Landscape

Viable: the both-capable flat schema family with settled slots. Dead: demo-mimicry (re-killed at innovation on the user-bound ground); envelope-without-anomalies; per-node JSON files; live-parse-no-file. Boundary: slot options within the family (settled below). Unexplored (named, non-blocking): compression (gzip serving — deployment detail); a JSON-Schema/typescript-types artifact for the contract (noted as a cheap COULD).

## Phase 2/3 — Slot verdicts (prosecution ⇄ defense → collision)

**D1 — body delivery default: INLINE default; both-capable shape SETTLED; one REFINE drawn.**
- *Strongest case for path-default:* sub-MB data file; clean diffs; the 40 MB@1,300 future; lazy loads are the web norm.
- *Defense of inline-default:* v1 is LOCAL tooling at 227 folders — 8 MB parses in ~100–200 ms; inline means NO async body path in the component (the demo already renders `md` from a string — zero new loading code); one file = atomic snapshot; and the artifact-CSP deployment (plausible for this user — the component arrived artifact-style) CANNOT fetch at all: inline is its only mode.
- *Collision:* inline wins v1 on simplicity + portability; path's real advantages activate at scale — and the both-capable shape makes the flip a regeneration, not a migration. **Named flip-trigger:** when the emitted file exceeds ~15 MB or the corpus nears ~600 folders, regenerate with `--path`.
- ★*REFINE (blood drawn):* in path mode the component cannot fetch `repoPath` (a repo-relative path outside the app root — vite scopes serving to the app dir). The schema gains **`body.href`** (optional; the fetchable URL, e.g. `bodies/<id>.md`, set in path mode when the adapter copies bodies into the app's public dir). `repoPath` stays ALWAYS — it is provenance (the user's guess #3), not a fetch mechanism. The draft is amended.

**D2 — layout: single `data.json` (inline default); `data.json` + `public/bodies/` copies in path mode.** Pairs with D1; per-node JSON stays dead (227 requests, no benefit). SETTLED.

**D3 — timestamps: ISO-8601 strings; loader converts.** *Strongest ms case:* zero conversion, demo-native. *Defeat:* the shim exists anyway; the conversion is one `Date.parse` line; ms-only fails D-F and the multi-consumer reading (a human debugging the map reads `"2026-05-23T14:39:00"`, not `1779882540000`). *Precision note (kept honest):* stamps carry NO timezone (the folder names never did); document as local wall-clock — `Date.parse` on offset-less ISO parses as local time in browsers, which is the correct behavior here (same machine writes and reads). SETTLED.

**D4 — group shape: BOTH `node.group` (optional) + `groups[]` (optional).** *Strongest array-only case:* single source of truth; duplication invites inconsistency. *Defeat:* both fields are emitted by ONE generator in one pass — consistency by construction (and clause 10 forbids estimated values); node-carried group serves the render loop's per-node lens checks without a client-built index; `groups[]` is the only home for labels/root/members. The purity cost is ~30 duplicated strings; the ergonomic gain is real. When grouping is off: NEITHER appears — no node requires a parent (the standing correction, honored in shape). SETTLED.

**D6 — subnode info: edges/groups + client-side id-lookup. VERIFIED by walking every DetailView need against the draft:** kind badge ← node.kind (shim label) ✓ · title ✓ · Created ← createdAt ✓ · Last-worked + "via" ← max over member/child lastWorkedAt, client-side ✓ · subnode list {title, relDate} ← id-lookup into the in-memory node map ✓ · parent link ← node.group ✓ · md body ← body.text or fetch(body.href) ✓ · slug chip ← body.file ✓ · HUD ← envelope counts ✓. Nested child summaries confirmed REDUNDANT (all nodes ship together). ★One precision the walk surfaced: the demo's root and module tiles are NODE OBJECTS with md bodies — in this schema they are NOT data; **the shim synthesizes root/group display objects with mechanical bodies (member lists, envelope summary) at view time** — view-side synthesis of mechanical rollups, never fabricated prose in data. SETTLED with the synthesis note.

**O-events — full stamp array KEPT.** *Strongest count-case:* nobody renders it yet; unused fields are clutter. *Defeat:* ≤10 tiny strings per node (~15 KB total), honest record data, and the multi-consumer frame gives it users beyond the map (activity queries); count is derivable from the array, not vice versa. Marginal but clear. SETTLED (array; day-grain honesty noted for the May era).

**D5 — envelope CONFIRMED:** schema-version + generatedAt + source{root, commit} + counts + anomalies. The trim-variant stays killed (fails D-B). `source.commit` default-ON (one git call; ties snapshot to repo state; drop silently if not a git checkout — count nothing).

## Verification passes

**The ten P4 clauses vs the draft:** all expressible; two amendments from the slot verdicts — **clause 11 (body delivery):** inline mode sets `body.text`; path mode copies bodies to `public/bodies/<id>.md` and sets `body.href`; `repoPath` always. **Clause 12 (normalization):** status lowercased; timestamps emitted offset-less local ISO; events[] emitted from clause-2's stamp parse. No schema promise is produced by no clause; no clause exceeds the schema.

**Instance validation (field-by-field):** the May-era instance PASSES (clamp correctly shown; day-grain events honest). The 10-46 instance PASSES on all fields except one — ★**`"group": "g:2026-07-10_15-30"` is factually WRONG as parsed**: the 10-46 folder's Relationships carry RELATED lines only (no CONTINUES-FROM), and union-find runs over CONTINUES-FROM alone — as of its parse date the folder is chain-standalone; the illustrative group value was fabricated relative to the record. **Corrected: the field is ABSENT for that instance** (with the forward note that THIS inquiry's CONTINUES-FROM line will chain them once concluded — the map updates on the next regeneration, which is the system working as designed). The gate's own-draft honesty check bit exactly where the project's provenance norms say to look.

**The four user guesses vs the settled contract:** number-of-nodes → `counts.nodes` (+ the HUD reads it) ✓ · titles → `node.title` + raw `slug` ✓ · full finding.md path → `body.repoPath` ALWAYS (provenance) + `body.href` when fetchable ✓ · subnode-relevant info → D6's verified id-lookup + shim synthesis ✓. **All four land, none conflicts, two got sharpened** (path split into provenance-vs-fetch; subnode info revealed as free).

## Phase 3.5 — Assembly: the settled contract

The amended draft (+`body.href`, corrected instance, 12 clauses, shim notes incl. synthetic view-nodes) as ONE candidate. *Prosecution:* "a schema this considered for a 100-line script is over-engineering." *Defense:* every field traces to a probe value, a user guess, or a named consumer; the option-slots collapsed to defaults with named flip-triggers; the adapter remains ~100 lines (12 clauses ≈ 12 regex/dict operations). *Collision:* survives — the consideration went into REMOVING things (nested summaries, ms stamps, required parents, per-node files). **SURVIVE — the answer.**

## Coverage map

All slots settled with both-ways prosecution; the draft verified against instances (one factual catch corrected), clauses (two added), the DetailView walk (one synthesis note), and the guesses (all landed). Unexplored non-blocking: gzip; a generated JSON-Schema/TS-types artifact (COULD).

## Signal — TERMINATE

**The settled contract:** the venture-atlas/1 schema — honest versioned envelope (counts + anomalies + source) · flat data-truthful nodes (ISO stamps; clamped lastWorkedAt; events array; optional group; body{repoPath always, file, bytes, text?|href?}) · six-open-enum edges with target duality and full notes · optional groups — inline default with the both-capable shape, path mode behind a flag with its named flip-trigger, twelve testable producer clauses, and a ~20-line loader shim (ISO→ms; group→containment; synthetic root/group view-objects; counts from envelope).

## Convergence telemetry

Dimensions 7/7 applied; discrimination real (D-B killed the envelope-trim and caught the instance error; D-D decided D1's default; D-F decided D3). Adversarial strength: **STRONG** — the gate drew blood on our OWN draft twice (the missing `body.href`; the fabricated group value on a real instance) and once on the walk (synthetic view-nodes made explicit). Landscape: STABLE. Clean SURVIVE: YES (the settled contract). External anchors: live probe values cited; the demo's own code walked; the user's correction quoted as the D4/D-A ground — **mechanism-independence validated, no quarantine.** Failure modes: none observed (rubber-stamp guard: three catches recorded; nitpick guard: no kill on a non-critical dimension; drift: dimensions fixed this pass). **PROCEED.**
