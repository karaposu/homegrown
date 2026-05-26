# Surfacing — autonomy register and discipline-read protocol

## User Input

`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-24_00-40__autonomy_register_and_discipline_read_protocol/_branch.md`

## Mode + Entry Point

- **Territory-type-mode:** `possibility-dominant with artifact component`. Most of the items are CANDIDATE designs (register location; format; schema; lifecycle; read protocol; write protocol; failure-handling) that must be generated. There is also an ARTIFACT component — existing project files that constrain or pre-answer the design (`docs/autonomy_ladder.md`; `docs/desc.md`; the routeman chain; sidecar conventions). Going with **possibility** mode because most items are candidates; artifact items are framed as constraints on the candidate space.
- **Entry point:** `signal-first` (purpose explicit per `_branch.md`).
- **Territory specification:** `explicit-bounded`. Edges: existing autonomy-ladder + desc.md definitions; the routeman chain (6 priors); the sidecar file conventions (`_state.md`, `_branch.md`, `_navig.md`, `_meta_state.md`); the candidate design spaces for location/format/schema/lifecycle/read protocol/write protocol/failure-handling; the project's docs/loop_desing_ideas/meta_loop.md (the L1 spec sketch). Boundary-discovery SKIPPED.
- **Purpose template:** items qualify if they speak to ANY of (a) existing autonomy-ladder definitions that constrain the register; (b) candidate locations; (c) candidate formats; (d) candidate schemas; (e) lifecycle candidates; (f) read protocol candidates; (g) write protocol candidates; (h) interactions with adjacent sidecars; (i) failure-handling candidates; (j) risks; (k) generalization to other disciplines; (l) the "two ladders" definitional question.

## Traversal Trace

### Region A — Existing autonomy-related artifacts (the territory's pre-existing constraints)

| # | Region | Item identifier | Tag | Conf | Step note |
|---|---|---|---|---|---|
| 1 | A | `docs/autonomy_ladder.md` EXISTS and is a comprehensive 6-level meta-loop ladder | core | HIGH | **Major finding.** The ladder defines L0-L5 with a 9-axis role-allocation table (Worker, Navigator, Selector, Runner, Evaluator, Meta-loop Memory, Reflect-channel, Multi-head, Goal-formation). It DEFINES levels but does NOT track current level. |
| 2 | A | `docs/autonomy_ladder.md` Section 1: 5 execution roles + 4 state/generative axes | sub | HIGH | The roles (Worker = MVL+ probe; Navigator = reads completed artifacts; Selector = chooses direction; Runner = orchestrates; Evaluator = cross-head comparison) ground "what advances per level." |
| 3 | A | `docs/autonomy_ladder.md` Section 2: per-level role-allocation table | core | HIGH | Each level says which roles are system-played vs human-played. L0 = current; L1 = buildable today; L5 = boundary. |
| 4 | A | `docs/autonomy_ladder.md` Section 5: per-level system-Selector subset of the 16-type taxonomy | core | HIGH | **Significant for routeman.** L2 = forward-only (DEEPEN/REFINE/DEVELOP/INVESTIGATE FRONTIER/PURSUE SEED); L3 adds REVISIT; L4 adds RE-RUN DEEPER/WIDEN/REFRAME/DIFFERENT APPROACH/DIAGNOSE/MERGE; L5 adds CONSOLIDATE/UNBLOCK/TEST. This IS routeman's auto-vs-judgment partition at the SELECTOR-side. |
| 5 | A | `docs/autonomy_ladder.md` mentions `_meta_state.md` as a planned/needed artifact at L1+ | core | HIGH | The meta-loop's cross-inquiry traversal state file. At L1 it's human-written; at L2-L3 system-managed. The register might LIVE here as a section, or be peer to it. |
| 6 | A | `docs/autonomy_ladder.md` mentions `navigation_memory.md` as L2 artifact | sub | HIGH | Navigator-side memory of past selections + outcomes. Distinct from `_meta_state.md`. Adjacent to the autonomy register's concern. |
| 7 | A | `docs/autonomy_ladder.md` evidence gates: L1→L2 requires ≥10 nav maps with selection rationale + `navigation_memory.md` schema | sub | HIGH | The TRANSITION TRIGGERS. Important for the write protocol — system-set updates would fire when these gates are met. |
| 8 | A | `docs/desc.md` describes Level 0-4+ trajectory of the HUMAN'S ROLE | core | HIGH | **Major finding.** Different ladder from autonomy_ladder.md — this one is about the human's role monotonically decreasing (bootstrap → reviews-all → reviews-uncertain → strategic → observer → past). L0-L4+ (5 levels, not 6). |
| 9 | A | `docs/desc.md` Table: "The Human's Role (time-dependent, monotonically decreasing)" | core | HIGH | Level 0 = bootstrap; Level 1 = reviews all self-modifications; Level 2 = reviews only uncertain; Level 3 = sets strategic direction; Level 4 = observer; past Level 4 = optional. |
| 10 | A | **The "two ladders" definitional question** — autonomy_ladder.md's L0-L5 vs desc.md's Level 0-4+ | core | HIGH | **CRITICAL.** Are they the same scale with different labels? Are they orthogonal? Are they overlapping but with different cutoffs? `desc.md` notes that `autonomy_ladder.md` L5 hands off to the consciousness-gradient framing in `desc.md`, suggesting LAYERED relationship (meta-loop ladder is operational; consciousness ladder is the meta-framing). |
| 11 | A | `docs/autonomy_ladder.md` line 47: "L5 is explicitly a boundary level where the meta-loop ladder hands off to docs/desc.md's consciousness-gradient framing" | core | HIGH | Confirms layered relationship. The 6-level meta-loop ladder is THIS PROJECT'S operational ladder; desc.md is the project's end-goal framing. But desc.md ALSO has a Level 0-4+ trajectory for human's role — separate from the consciousness-gradient framing. |
| 12 | A | `docs/desc.md` is the "Autonomous Consciousness Goal" finding — defines the north star, Baldwin cycles, primitive compositions for indicators | sub | HIGH | The consciousness-gradient indicators (spontaneous attention, intrinsic valuation, etc.) map qualitatively onto autonomy_ladder.md's levels per autonomy_ladder.md Section 8. |
| 13 | A | Routeman design memo's "graduated-autonomy classification" feature — partitions 16-type taxonomy into 12-auto / 4-human-judgment based on autonomy level | core | HIGH | **The specific feature this inquiry resolves.** Routeman uses the autonomy level to decide which types it can emit autonomously vs which need human judgment. This is similar to but DISTINCT from autonomy_ladder.md Section 5's per-level Selector subset (which is about which moves the SELECTOR can reliably pick, not about which moves routeman can ENUMERATE). |
| 14 | A | The routeman design memo's LAYER-2 mode "Auto-vs-Judgment Calibration Drift" | sub | HIGH | Recognition signal: "the 12/4 split is no longer calibrated to the project's autonomy level." Without a register, this mode is undetectable; with a register, the audit reads the current level and compares to the split. |
| 15 | A | `docs/desc.md`'s Baldwin-cycle maturity gate: seed-generation activates at N≥30 inquiries per discipline | sub | HIGH | A specific calibration milestone that could trigger autonomy level advancement (e.g., L0 → L1 when N≥30 is reached for routeman). Adjacent to the write protocol's system-set triggers. |
| 16 | A | `docs/loop_desing_ideas/meta_loop.md` — the L1 spec sketch (referenced by autonomy_ladder.md) | side | MED | Per autonomy_ladder.md, this is "First Buildable Form" of the L1 meta-loop. Worth verifying it doesn't already commit a register file before this inquiry designs one. |

### Region B — Candidate locations for the register file

| # | Region | Item identifier | Tag | Conf | Step note |
|---|---|---|---|---|---|
| 17 | B | **B-1: `docs/autonomy_state.md`** — sibling to `docs/autonomy_ladder.md` (definition file + state file) | core | HIGH | Clean separation: definition vs current state in adjacent files. Discoverable by anyone reading the ladder. |
| 18 | B | **B-2: `_meta_state.md` (existing/planned artifact)** — as a section IN this file | core | HIGH | Co-locates the autonomy level with cross-inquiry traversal state. Both are meta-loop state. Risks: the file may not exist yet at L0; routeman's read depends on `_meta_state.md` being present. |
| 19 | B | **B-3: Section IN `docs/autonomy_ladder.md`** — definition + current state in one file | sub | MED | Violates separation-of-concerns (definition rarely changes; current state changes when graduating). Risks: edits to current state could collide with definition edits. |
| 20 | B | **B-4: `docs/autonomy_level.md`** — singular noun matching user's example | sub | HIGH | The user's hint in the source input (`docs/autonomy_level.md or similar`). Matches user-language alignment principle. |
| 21 | B | **B-5: project root `AUTONOMY_LEVEL`** — bare text file in project root | side | LOW | Minimal; discoverable; but breaks the docs/-convention for project metadata. |
| 22 | B | **B-6: Frontmatter field in `docs/autonomy_ladder.md`** — `status:` extended to carry current level | sub | MED | Compact; co-located with ladder definition. Risks: frontmatter is conventionally for file-status (active/draft) not content-state. Unconventional use. |
| 23 | B | **B-7: `.autonomy_level` (dotfile in project root)** — invisible convention | side | LOW | Common in unix configs (e.g., `.python-version`). Discoverability concern: hidden by default. |
| 24 | B | **B-8: Multiple files (per-ladder)** — `_meta_loop_autonomy_state.md` for operational; `_consciousness_state.md` for desc.md ladder | sub | MED | Honors the "two ladders" distinction (Region A item 10). Risks: ladder proliferation; coordination overhead. |

### Region C — Candidate formats for the register file

| # | Region | Item identifier | Tag | Conf | Step note |
|---|---|---|---|---|---|
| 25 | C | **C-1: Markdown with YAML frontmatter** (carries level + metadata; body has rationale/history) | core | HIGH | Project convention (most docs/ files use this). Readable by both humans and parsers. |
| 26 | C | **C-2: Pure YAML or JSON file** (`autonomy_state.yaml`) | sub | MED | Machine-readable; structured. Risks: less human-readable; out of project's markdown convention. |
| 27 | C | **C-3: Plain markdown (no frontmatter)** with a clearly-labeled "Current Level: L1" line | sub | HIGH | Simpler; human-friendly. Risks: parsing requires regex over markdown rather than YAML parsing. |
| 28 | C | **C-4: Single-line text file** containing just `L1` or `1` | sub | MED | Minimal. Loses the rationale + history affordance. |
| 29 | C | **C-5: Markdown with frontmatter + body schema (rationale, transition history, calibration evidence)** | core | HIGH | Most expressive. Risks: schema complexity. |

### Region D — Candidate contents/schema for the register file

| # | Region | Item identifier | Tag | Conf | Step note |
|---|---|---|---|---|---|
| 30 | D | **D-1: Just the current level** — `current_level: L1` | sub | MED | Minimum-viable. Loses provenance, history, rationale. |
| 31 | D | **D-2: Level + last-update-timestamp + last-updater** — `{current_level: L1, set_at: 2026-05-24, set_by: human}` | sub | HIGH | Minimal audit. |
| 32 | D | **D-3: Level + rationale + transition history** | core | HIGH | Each transition logged: prior level, new level, when, by whom, what evidence/decision triggered it. Aligns with the autonomy_ladder.md's evidence-gates framing. |
| 33 | D | **D-4: Level + per-role overrides** — e.g., "L1 overall, but Selector still human even at L2 because of override" | sub | MED | Honors the 9-axis frame's "axes are independent in principle" point from autonomy_ladder.md Section 8. Risks: complexity; may not be needed until L2+. |
| 34 | D | **D-5: Two separate levels for two ladders** — `{meta_loop_level: L1, consciousness_indicator_level: 0}` | sub | MED | Honors the two-ladders distinction. Risks: most disciplines only need one; may over-specify. |
| 35 | D | **D-6: Level + calibration evidence pointers** — links to the inquiry artifacts that triggered each transition (e.g., "L0 → L1 triggered by completion of devdocs/inquiries/...") | sub | HIGH | Backwards-traceable. Aligns with the project's commitment to file-mediated state. |
| 36 | D | **D-7: Level + projected next gate** — `{current_level: L1, next_gate: "L1→L2 needs ≥10 nav maps with rationale"}` | sub | HIGH | Forward-looking; tells routeman (and humans) what would advance the level. |
| 37 | D | **D-8: Level + scope (project-wide vs per-discipline)** — e.g., routeman might be at L1 while /sense-making is still at L0 | sub | MED | Honors the bidirectional progression note in autonomy_ladder.md (per-axis advancement possible). Complex. Probably defer to later. |
| 38 | D | **D-9: Level + invalidation triggers** — what would cause the current level to be revisited (e.g., a regression detected, calibration data invalidated) | side | MED | Defensive design; may be premature for L0/L1. |

### Region E — Lifecycle candidates

| # | Region | Item identifier | Tag | Conf | Step note |
|---|---|---|---|---|---|
| 39 | E | **E-1: Rewrite on each level change** | sub | HIGH | Simplest. Loses history if not paired with a separate log. |
| 40 | E | **E-2: Append-only-log of transitions** + computed current level (read = last entry) | sub | HIGH | Auditable history. Slightly more complex to read. |
| 41 | E | **E-3: Current-level snapshot + transition history section** in the same file | core | HIGH | Hybrid: human-readable current state at top, transitions accumulating in a history section. Project convention (similar to design-memo's "Subsequent additions notices" pattern). |
| 42 | E | **E-4: Persistent file, never deleted, with revision-history-aware schema** | sub | MED | Long-term auditability. Risks: schema complexity. |
| 43 | E | **E-5: Snapshot at transition + dedicated history file** | side | MED | Two files. Sidecar proliferation risk. |

### Region F — Read protocol candidates

| # | Region | Item identifier | Tag | Conf | Step note |
|---|---|---|---|---|---|
| 44 | F | **F-1: Disciplines read on every invocation as part of file-scan** | core | HIGH | Aligns with 16-31's file-scanning architecture. Each invocation reads the register fresh; no caching. |
| 45 | F | **F-2: Disciplines read once per session with file-mtime invalidation** | side | LOW | Optimization. Routeman runs in isolated sessions; per-session caching gives no real benefit since each session is one invocation. |
| 46 | F | **F-3: Routeman-specific read in routeman SKILL.md only** | sub | MED | Scoped to routeman. Loses generalization to other autonomy-aware disciplines (FF research frontier). |
| 47 | F | **F-4: Cross-discipline read convention** — documented protocol for any discipline that needs the autonomy level | core | HIGH | Generalizable. Aligns with the user's "read convention for discipline specs" framing. |
| 48 | F | **F-5: Read on demand (lazy)** — read only when graduated-autonomy classification is invoked, not at top-of-scan | sub | MED | Optimization. Risks: if routeman is partially complete when register changes mid-invocation, behavior is inconsistent. Probably not worth optimizing. |
| 49 | F | **F-6: Read with explicit version-conflict check** — the discipline reads the register AND its own last-known-version; if they differ, log a transition note | side | MED | Defensive design. May be premature. |
| 50 | F | **F-7: Read-as-input-to-graduated-autonomy-classification-feature ONLY** (other discipline features don't read) | core | HIGH | Per-feature scoping. Avoids over-applying the autonomy-level dependency. |

### Region G — Write protocol candidates

| # | Region | Item identifier | Tag | Conf | Step note |
|---|---|---|---|---|---|
| 51 | G | **G-1: Human-edit-only** (no system writes; user explicitly edits the file to graduate) | core | HIGH | Simplest at L0/L1. Honors the "human anchors L0/L1" framing in autonomy_ladder.md. The system reads, the human writes. |
| 52 | G | **G-2: Human-edit with system-warning** (system can warn "L1→L2 gate is met; consider graduating") but doesn't write | sub | HIGH | Adds proactive signal. Aligns with the evidence-gates table in autonomy_ladder.md. |
| 53 | G | **G-3: System-set on calibration milestone** (system writes when evidence-gate met) | sub | MED | Auto-graduation. Risks: premature graduation; loses human-judgment control. Probably defer to L2+ when system Selector exists. |
| 54 | G | **G-4: Hybrid (human-edit + system-suggested update with explicit human-approval workflow)** | sub | HIGH | Bridges G-1 and G-3. Practical for L1-L2 transition period. |
| 55 | G | **G-5: System-set under explicit user-grant** (per-graduation explicit grant; not blanket) | side | MED | Variant of G-3. |
| 56 | G | **G-6: Multi-write authority** — both humans AND the autonomy_ladder's evidence-gate-checker can write, with conflict resolution rules | side | LOW | Complex. Premature for L0/L1. |

### Region H — Interactions with adjacent sidecars

| # | Region | Item identifier | Tag | Conf | Step note |
|---|---|---|---|---|---|
| 57 | H | **H-1: Relationship with `_navig.md`** (per persistence inquiry 24-00) — `_navig.md` is per-inquiry-or-project-scope; the autonomy register is project-wide-only | core | HIGH | The register is PROJECT-LEVEL, not per-inquiry. Different scope from `_navig.md`. No aggregation needed. |
| 58 | H | **H-2: Relationship with `_state.md`** (inquiry pipeline status) — different scope; `_state.md` is per-inquiry pipeline status | sub | HIGH | No coupling. The register lives in `docs/`; `_state.md` lives in inquiry folders. |
| 59 | H | **H-3: Relationship with `_meta_state.md`** (meta-loop cross-inquiry state) — register could LIVE in `_meta_state.md` as a section, OR be peer | core | HIGH | Significant decision. The autonomy ladder's "Memory" axis specifically refers to `_meta_state.md` content; the autonomy level is metadata ABOUT the meta-loop, so co-location makes sense. But putting the level in `_meta_state.md` couples it to the meta-loop's lifecycle (the file may not exist at L0). |
| 60 | H | **H-4: Sidecar-proliferation risk** (per persistence inquiry's D12 risk dimension) — adding another sidecar increases coordination overhead | sub | HIGH | Mitigation: ensure the register has DISTINCT role from `_navig.md`, `_state.md`, `_meta_state.md`. Distinct: project-wide-not-per-inquiry; project-state-not-pipeline-state. |
| 61 | H | **H-5: Boundary with `navigation_memory.md`** (Navigator-side memory at L2) — they are adjacent but distinct (the register holds level; navigation_memory holds Navigator's selection history) | sub | MED | Different content; no coupling needed. |

### Region I — Failure-handling candidates (absent / malformed / out-of-range / multi-ladder disagreement)

| # | Region | Item identifier | Tag | Conf | Step note |
|---|---|---|---|---|---|
| 62 | I | **I-1: Absent register → default to L0** | core | HIGH | Safe default. Matches "L0 is current" in autonomy_ladder.md. Discipline operates as if at lowest autonomy. |
| 63 | I | **I-2: Absent register → halt + flag** (routeman emits error rather than guessing) | sub | MED | Conservative. Risks: blocks all routeman operation at fresh project install. |
| 64 | I | **I-3: Malformed register → halt + flag** | core | HIGH | Don't silently degrade. The user sees the malformation and fixes. |
| 65 | I | **I-4: Out-of-range value (e.g., "L7") → halt + flag** | sub | HIGH | Same as malformed. The ladder's defined value space (L0-L5 per autonomy_ladder.md) is the validation. |
| 66 | I | **I-5: Multi-ladder disagreement (autonomy_ladder.md L1 vs desc.md Level 2)** → routeman must choose which ladder it reads | core | HIGH | **CRITICAL.** Resolving the "two ladders" question. Routeman's auto-vs-judgment partition is about the META-LOOP'S autonomy (which moves can the Selector reliably pick? — Section 5 of autonomy_ladder.md). So routeman READS the meta-loop ladder's level, NOT desc.md's human-role-trajectory level. |
| 67 | I | **I-6: Register absent but `_meta_state.md` present** — infer level from `_meta_state.md` content (e.g., `_meta_state.md` exists → L1) | sub | MED | Inference. Risks: overreach. The user said "infer from operating context" is a defer-option. |
| 68 | I | **I-7: Register-presence-validation by the discipline** — discipline asserts register exists at file-scan; if not, escalates | sub | HIGH | The discipline takes responsibility for register-presence; the write protocol takes responsibility for register-validity. |

### Region J — Risks and counter-considerations

| # | Region | Item identifier | Tag | Conf | Step note |
|---|---|---|---|---|---|
| 69 | J | **J-1: Two-ladders confusion** — readers may not know which ladder the register tracks | core | HIGH | Mitigation: the register's name + content explicitly states "meta-loop autonomy level per `docs/autonomy_ladder.md`." |
| 70 | J | **J-2: Premature commitment to system-set write triggers** — autonomy_ladder.md says triggers depend on calibration the project hasn't reached | core | HIGH | Mitigation: defer system-set to L2+ when system Selector exists; commit only G-1 (human-edit) + G-2 (human-edit with system-warning) for L0/L1. |
| 71 | J | **J-3: Co-locating register IN `_meta_state.md` couples lifecycle** — the file may not exist at L0; the register would also not exist | sub | HIGH | Mitigation: keep the register SEPARATE from `_meta_state.md`; the register exists at L0 with value L0. |
| 72 | J | **J-4: Sidecar proliferation** (per persistence inquiry's D12) | sub | MED | Each new sidecar increases coordination cost. Mitigation: clear distinct purpose; located in `docs/` (project-wide) not in inquiry folders (per-inquiry); no overlap with `_state.md` / `_navig.md` / `_branch.md`. |
| 73 | J | **J-5: The register's authority** — is the autonomy level project-wide single value, or per-discipline? | sub | MED | Default: project-wide single value. Per-discipline overrides (D-8 above) deferred unless evidence emerges. |
| 74 | J | **J-6: Stale register risk** — if humans forget to update, system uses old level | sub | HIGH | Mitigation: G-2 (system-warning when calibration data suggests advancement). |
| 75 | J | **J-7: Register-vs-actual-behavior drift** — register says L1 but the system actually operates at L0 (or vice versa) | sub | MED | The LAYER-2 calibration-drift mode catches this. The register is the DECLARED level; the audit catches drift between declared and actual. |
| 76 | J | **J-8: Generalization premature** — designing a cross-discipline read convention before a second discipline needs it may over-engineer | sub | MED | Mitigation: design routeman-specifically; document the convention as REUSABLE but not commit other disciplines to adopt now. |

### Region K — Generalization to other autonomy-aware disciplines (research frontier scope)

| # | Region | Item identifier | Tag | Conf | Step note |
|---|---|---|---|---|---|
| 77 | K | **K-1: Other potential autonomy-aware disciplines** — /reflect (may need to know autonomy level to adapt observation style); /intuit (may calibrate prediction confidence to level); /td-critique (may adjust burden-of-proof to level) | sub | MED | Adjacent concerns. Confirms the convention is potentially shared. |
| 78 | K | **K-2: The read convention as documented protocol** — `cognitive_harness/protocols/autonomy_register_read.md` | sub | MED | Sibling to other protocols (branch_inquiry.md; multi_resolution_navigation.md). Reusable. |
| 79 | K | **K-3: Generalization is a research frontier** — design routeman-specifically; flag generalization | umbrella | HIGH | Mirrors persistence inquiry's FF-strat-pattern (the pattern-generalization question). |

### Region L — The "two ladders" definitional question (MAJOR finding)

| # | Region | Item identifier | Tag | Conf | Step note |
|---|---|---|---|---|---|
| 80 | L | **L-1: autonomy_ladder.md L0-L5 (6 levels)** — operational meta-loop ladder; about 9-axis role allocation | core | HIGH | Re-confirmed. |
| 81 | L | **L-2: desc.md Level 0-4+ (5 levels)** — human-role trajectory; about who reviews self-modifications | core | HIGH | Re-confirmed. |
| 82 | L | **L-3: The two ladders are RELATED but DISTINCT** | core | HIGH | autonomy_ladder.md's L5 explicitly hands off to desc.md's consciousness-gradient. desc.md's "Level 0-4+" trajectory is about the HUMAN's role decreasing; autonomy_ladder.md's L0-L5 is about the SYSTEM'S roles increasing. They are complementary views of the same underlying autonomy progression but at different granularity (5 vs 6 levels). |
| 83 | L | **L-4: Routeman's autonomy-aware feature SPECIFICALLY needs the meta-loop level** (autonomy_ladder.md L0-L5) | core | HIGH | Because routeman's graduated-autonomy classification corresponds to autonomy_ladder.md Section 5's per-level Selector subset. The DESC.md ladder is at a different granularity (human-role-review-level) and is less directly applicable. |
| 84 | L | **L-5: But the register MIGHT carry both levels for future use** (D-5 candidate) | sub | MED | If other disciplines (e.g., /reflect tracking human-role-trajectory) need desc.md's level, the register can carry both. Default: routeman uses meta-loop level only. |
| 85 | L | **L-6: Reconciliation between the two ladders is itself a frontier** | umbrella | MED | If the two ladders ever diverge in practice (project is at meta-loop L2 but desc.md Level 1), how is that resolved? Out of scope for this inquiry; flagged as potential research frontier. |

### Region M — What's settled vs needs further inquiry

| # | Region | Item identifier | Tag | Conf | Step note |
|---|---|---|---|---|---|
| 86 | M | Settled: the file-mediated mechanism (per 16-31; in-context-parameter eliminated) | core | HIGH | The design space is bounded to file-read. |
| 87 | M | Settled: the value space (L0-L5 per autonomy_ladder.md; or Level 0-4+ per desc.md — routeman uses the meta-loop's L0-L5) | core | HIGH | Inherited from autonomy_ladder.md. |
| 88 | M | Settled: routeman should be the FIRST consumer of the register; generalization is research frontier | core | HIGH | Per K-3. |
| 89 | M | Needs further inquiry: which write protocol shape ships first (G-1 only? G-1+G-2?) | sub | HIGH | The write protocol's first-shipping shape is the central design decision. |
| 90 | M | Needs further inquiry: location B-1 vs B-2 vs B-4 (separate file vs `_meta_state.md` section vs `docs/autonomy_level.md`) | core | HIGH | Central design decision. |
| 91 | M | Needs further inquiry: schema D-2 vs D-3 vs D-6 (minimal vs rationale+history vs evidence-pointers) | sub | HIGH | Schema decision. |
| 92 | M | Needs further inquiry: failure-handling I-1 vs I-2 (default to L0 vs halt+flag on absent register) | core | HIGH | Design-time choice with operational consequences. |

### Region N — Frontier flags

| # | Region | Item identifier | Tag | Conf | Step note |
|---|---|---|---|---|---|
| 93 | N | **FF-1: When/how does the autonomy level get bumped?** (write protocol's first-shipping shape; G-1 vs G-2 vs G-3) | umbrella | HIGH | Open. |
| 94 | N | **FF-2: Where exactly does the register live?** (B-1 vs B-2 vs B-4) | umbrella | HIGH | Open. |
| 95 | N | **FF-3: What's the minimum schema for first ship?** (D-2 minimum vs D-3 with history) | umbrella | HIGH | Open. |
| 96 | N | **FF-4: What does routeman do when the register is absent?** (I-1 vs I-2; default-L0 vs halt-flag) | umbrella | HIGH | Open. |
| 97 | N | **FF-5: Should the register carry both ladders' levels (D-5)?** | umbrella | MED | Open; default deferred. |
| 98 | N | **FF-6: Generalization to other autonomy-aware disciplines** (research frontier) | umbrella | MED | Open. |
| 99 | N | **FF-7: Reconciliation between the two ladders when they diverge in practice** (research frontier) | umbrella | LOW | Open. |

**Convergence check:** 99 trace entries across 14 regions. The major findings are: (1) `docs/autonomy_ladder.md` ALREADY EXISTS as a 6-level operational ladder; (2) `docs/desc.md` has a separate 5-level human-role trajectory; (3) routeman's autonomy-aware feature specifically needs the META-LOOP'S level (autonomy_ladder.md's L0-L5), not desc.md's; (4) the register's location, schema, write protocol, and failure-handling each have multiple credible candidates that downstream disciplines must adjudicate.

## State Summary

### Territory-specification echo

The bounded scope: `docs/autonomy_ladder.md` (the L0-L5 6-level meta-loop ladder); `docs/desc.md` (the Level 0-4+ human-role trajectory); the routeman chain (6 priors); the sidecar conventions (`_state.md`, `_branch.md`, `_navig.md`, `_meta_state.md`); the candidate design spaces for register file location/format/schema/lifecycle + read/write protocols + failure-handling.

### Purpose-specification echo

Items qualify if they speak to (a) existing autonomy-ladder constraints; (b) candidate locations; (c) candidate formats; (d) candidate schemas; (e) lifecycle candidates; (f) read protocol candidates; (g) write protocol candidates; (h) interactions with adjacent sidecars; (i) failure-handling candidates; (j) risks; (k) generalization; (l) the "two ladders" definitional question.

### Coverage map

| Region | Coverage | Aggregate relevance |
|---|---|---|
| A — Existing autonomy-related artifacts (16 entries) | confirmed | 7 core + 8 sub + 1 side |
| B — Candidate locations (8 entries) | confirmed | 2 core + 4 sub + 2 side |
| C — Candidate formats (5 entries) | confirmed | 2 core + 3 sub |
| D — Candidate schemas (9 entries) | confirmed | 1 core + 7 sub + 1 side |
| E — Lifecycle candidates (5 entries) | confirmed | 1 core + 3 sub + 1 side |
| F — Read protocol candidates (7 entries) | confirmed | 3 core + 3 sub + 1 side |
| G — Write protocol candidates (6 entries) | confirmed | 1 core + 3 sub + 2 side |
| H — Interactions with adjacent sidecars (5 entries) | confirmed | 2 core + 3 sub |
| I — Failure-handling (7 entries) | confirmed | 3 core + 4 sub |
| J — Risks (8 entries) | confirmed | 2 core + 6 sub |
| K — Generalization (3 entries) | confirmed | 0 core + 2 sub + 1 umbrella |
| L — Two-ladders definitional question (6 entries) | confirmed | 4 core + 1 sub + 1 umbrella |
| M — Settled vs needs further (7 entries) | confirmed | 4 core + 3 sub |
| N — Frontier flags (7 entries) | confirmed | 0 core + 0 sub + 7 umbrella |

Total: 99 entries (32 core + 50 sub + 8 side + 9 umbrella).

### Confirmed-absent regions

None — every region traversed yielded items.

### Concept-names list

- `autonomy_ladder.md` — existing-project-file, "the 6-level operational meta-loop ladder with 9-axis role allocation; L0 current; L5 boundary handing off to desc.md."
- `meta-loop` — existing-project-term, "a stateful traversal engine for thinking space; runs many MVL+ loops with Navigator + Selector + Runner + Evaluator roles."
- `9-axis frame` — existing-project-term, "5 execution roles + 4 state/generative axes; the underlying axes the discrete ladder is a summary path through."
- `_meta_state.md` — existing-or-planned-artifact, "cross-inquiry traversal state file; L1+ artifact; carries visited-path list, selection rationales, eventually graph-state."
- `navigation_memory.md` — planned-artifact, "Navigator-side memory at L2; past selections + outcomes."
- `consciousness-gradient framing` — existing-project-term, "docs/desc.md's framing; consciousness indicators + Level 0-4+ human-role trajectory; the boundary autonomy_ladder.md hands off to."
- `auto-vs-judgment split` — existing-project-term, "the routeman design memo's 12-auto / 4-human-judgment partition of the 16-type movement-type taxonomy; the feature this inquiry's register enables."
- `Calibration-Drift mode` — existing-project-term, "the routeman LAYER-2 mode that detects when the 12/4 split is no longer calibrated to current autonomy level."
- `evidence gates` — existing-project-term (autonomy_ladder.md Section 6), "per-level transition triggers; e.g., L1→L2 requires ≥10 nav maps with rationale + navigation_memory.md schema."
- `meta-loop level vs desc.md level` — coined-distinction-this-surfacing, "the two ladders are at different granularity; routeman needs the meta-loop ladder's level."
- `Selector subset` — existing-project-term (autonomy_ladder.md Section 5), "the per-level system-Selector subset of the 16-type taxonomy; analogous to but distinct from routeman's auto-vs-judgment partition."
- `register-vs-actual-behavior drift` — coined-this-surfacing, "the risk that the register declares a level the system doesn't actually achieve; caught by Calibration-Drift mode."

### Frontier flags

- **FF-1** — When/how does the autonomy level get bumped? (write protocol first-ship shape)
- **FF-2** — Where exactly does the register live? (location B-1 vs B-2 vs B-4)
- **FF-3** — What's the minimum schema for first ship? (D-2 minimum vs D-3 history)
- **FF-4** — What does routeman do when the register is absent? (I-1 vs I-2; default-L0 vs halt-flag)
- **FF-5** — Should the register carry both ladders' levels? (D-5)
- **FF-6** — Generalization to other autonomy-aware disciplines (research frontier; mirrors persistence inquiry FF-strat-pattern)
- **FF-7** — Reconciliation between the two ladders when they diverge in practice (research frontier)

### Workspace-populated status

```yaml
populated: true
populated-at: 2026-05-24T00:40
extent:
  in-context-files-fully-loaded:
    - docs/autonomy_ladder.md (just-loaded; full)
    - docs/desc.md (just-loaded; head ~100 lines; full Human-Role table read)
  in-context-files-via-prior-session-loading:
    - devdocs/inquiries/2026-05-23_14-39__routeman_discipline_design/finding.md
    - devdocs/inquiries/2026-05-23_15-20__routeman_implementation_frontier_questions/finding.md
    - devdocs/inquiries/2026-05-23_16-31__routeman_isolated_session_correction/finding.md
    - devdocs/inquiries/2026-05-23_18-58__routeman_staged_mapping_and_reasoning_field/finding.md
    - devdocs/inquiries/2026-05-23_11-30__navigation_surfacing_territory_dependency_recheck/finding.md
    - devdocs/inquiries/2026-05-24_00-20__routeman_persistence_and_invocation_modes/finding.md
  frontier-files-not-loaded:
    - docs/loop_desing_ideas/meta_loop.md (L1 spec sketch; may already commit a register file format)
    - cognitive_harness/protocols/branch_inquiry.md (adjacent; already in-context from 24-00 inquiry)
    - cognitive_harness/protocols/multi_resolution_navigation.md (adjacent; already in-context from 24-00 inquiry)
```

## Telemetry

- **Mode:** `possibility-dominant with artifact component`. **Entry point:** `signal-first`.
- **Cycles run:** 1.
- **Items enumerated:** 99 trace entries across 14 regions.
- **Items tagged at each relevance level:** core = 32; sub = 50; side = 8; umbrella = 9.
- **Sub-phase fired:** no.
- **Convergence criteria status:** territory exhaustively traversed; the two-ladders discovery + the autonomy_ladder.md pre-existence are the central findings; design candidate spaces enumerated with multiple credible options per axis.
- **Workspace-overload trigger:** not fired.
- **Failure modes checked (LAYER 1):** Missed-relevance (mitigated by 14-region sweep + pre-traversal artifact verification); Surfaced-irrelevance (8 side items kept with reasons); Over-coverage (mitigated by core/sub split); Territory-mis-binding (none; the design space is the inquiry's scope); Workspace overload (not fired); Artifact under-specification (per-trace tags captured); Workspace-artifact desync (capture-at-moment applied).
- **Failure modes checked (LAYER 2):** Interpretive-overstep (items are candidates / mappings / risks, not cross-piece interpretive structure); Purpose-loss (purpose explicit); Self-coupling-to-downstream (avoided — surfacing surfaces candidates without pre-recommending; sensemaking adjudicates).
- **Self-assessment verdict:** **PROCEED with FLAG.** 7 frontier flags for downstream + 2 major load-bearing findings (autonomy_ladder.md pre-existence as L0-L5 6-level ladder; the two-ladders definitional split between autonomy_ladder.md and desc.md). Sensemaking must adjudicate the register's location + schema + write protocol + failure-handling + which ladder routeman reads.
