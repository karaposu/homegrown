# Decomposition: A/B-test inquiry protocol — v1 implementation work

## User Input

`devdocs/inquiries/2026-05-14_16-41__ab_test_inquiry_protocol/_branch.md` plus upstream `exploration.md` (24 candidates / 6 regions) and `sensemaking.md` (5 structural commitments locked; SV5 enumerated 6 candidate pieces P1–P6 as decompose handoff).

The whole to decompose: the v1 implementation of `homegrown/protocols/ab_test_inquiry.md` given sensemaking's 5 commitments (composition over invention; scaffold-and-instruct; structured human verdict; explicit test intent; N=1 paired-snapshot paradigm).

---

## Step 1 — Coupling Map

### Atomic elements identified in the implementation whole

The v1 implementation work consists of the following elements (atoms):

| ID | Atom |
|---|---|
| a1 | Identity statement: what the protocol IS (one-paragraph definition) |
| a2 | NOT-list (4 confirmed-absent RCT paradigms from exploration's Region F) |
| a3 | Failure-mode documentation (confirmation bias, snapshot-rot, schema drift, sample-size-of-1, two-pipeline-cost, hidden state leakage) |
| a4 | Input contract (snapshot identifier, test_intent, shared question, source authority) |
| a5 | Parent folder layout (`devdocs/inquiries/<ts>__ab_<slug>/`) |
| a6 | `_ab.md` schema (test_intent, snapshot_identifier, shared input, who/when, dispatch_status) |
| a7 | Child subfolder layout (`current/` + `snapshot-<sha>/`) |
| a8 | Child `_branch.md` content (identical between children) |
| a9 | Child `_state.md` content (different `runner` field; shared `branch_set_id`; `BRANCH_SET` relationship) |
| a10 | Path policy (how parent + children paths are constructed; collision handling; depth check) |
| a11 | Setup-phase output: dispatch instruction format (what the protocol prints) |
| a12 | Bridge to MVL+ RESUME mode (the printed commands invoke MVL+'s folder-path RESUME) |
| a13 | Mechanism-agnostic launch (B4 supports B1/B2/B3 via dispatch instructions, no enforcement) |
| a14 | Synthesize-phase trigger (when fires: when both children CONCLUDE) |
| a15 | Synthesize-phase trigger MECHANISM (manual user invocation vs. conclude.md auto-detect) |
| a16 | outcome_review record location (parent root) |
| a17 | outcome_review record fields populated (source, expected, observed per `test_intent`, delta type, evidence paths, confidence, route) |
| a18 | Schema-drift handling (snapshot vs current finding.md may have different sections) |
| a19 | Composition with branch_inquiry pattern (`branch_set_id`, set-member semantics) |
| a20 | Composition with conclude.md (relationship printing on child CONCLUDE) |
| a21 | Composition with outcome_review.md (record schema reuse) |
| a22 | Trigger discipline (when to invoke A/B — heuristic guidance, not enforcement) |
| a23 | Snapshot-rot caveat (testing against stale snapshot tests the wrong thing) |
| a24 | Sample-size-of-1 caveat (anecdotal evidence interpretation guidance) |
| a25 | Two-pipeline-cost caveat (compute budget consideration) |

### Coupling assessment (pairwise change-propagation)

For each pair: "if I change A, does B need to change?"

**Strong coupling clusters:**

- **Cluster I (Identity):** a1, a2, a3, a4 — the protocol's "header." Changing one (e.g., adding a 5th NOT-list item) doesn't usually force changes in others, but they share the same change driver (project understanding of A/B testing matures).
- **Cluster II (Setup folder/state):** a5, a6, a7, a8, a9, a10, a19 — the on-disk artifact design. a19 (branch_inquiry composition) drives a9's BRANCH_SET semantics. a10 (path policy) constrains a5/a7. Strong cohesion.
- **Cluster III (Dispatch):** a11, a12, a13 — what the protocol prints to enable launch. Tightly cohesive around the "instruction format" concept.
- **Cluster IV (Synthesize):** a14, a15, a16, a17, a18, a20, a21 — the comparison artifact phase. a20 (conclude.md integration) drives a15's mechanism choice. a21 (outcome_review reuse) drives a16/a17. a18 (schema drift) is a sub-concern of a17.
- **Cluster V (Operational):** a22, a23, a24, a25 — heuristic/caveat documentation. Loose internal cohesion (all are "user advisories"); weak coupling to other clusters.

**Cross-cluster coupling:**

| From → To | Coupling | Why |
|---|---|---|
| I → II | Weak | Identity ("thin scaffold") constrains II's complexity but doesn't determine its content |
| I → III | Weak | Identity ("scaffold-and-instruct") constrains III's existence but not its content |
| I → IV | Moderate | Identity says "structured verdict via outcome_review reuse" — directly drives IV's a21 |
| I → V | Weak | Identity is structural; V is operational |
| II → III | **Strong** | III's dispatch instructions need the child folder paths from II's a7 |
| II → IV | Moderate | IV needs parent root path (II's a5) for outcome_review storage AND child folder paths (II's a7) for evidence pointers |
| II → V | Weak | Operational guidance references on-disk structure but doesn't drive it |
| III → IV | Weak | Dispatch (setup phase) and Synthesize (after children complete) are temporally separate; flow is via the children's own state files, not direct |
| III → V | Weak | Dispatch operates at setup; V is about overall use |
| IV → V | Weak | V's caveats reference IV's verdict mechanism but don't drive it |

### Coupling topology summary

Five clusters with **one strong cross-cluster edge** (II → III) and **two moderate edges** (II → IV, I → IV). The remaining cross-cluster edges are weak. Natural boundary positions: I | II, II | III, II | IV, III | IV, IV | V — five boundaries between five pieces.

The strong II → III edge is a natural one-way data flow (paths produced by II, consumed by III). Cutting at this boundary preserves strong cohesion within each piece while making the interface explicit.

---

## Step 2 — Detect Boundaries (Top-Down)

From the coupling map, the natural cuts:

| Cut | Between | Coupling across cut | Boundary type |
|---|---|---|---|
| B1 | Cluster I (Identity) ↔ Cluster II (Setup folder/state) | weak | clean single-point |
| B2 | Cluster II (Setup folder/state) ↔ Cluster III (Dispatch) | moderate (one-way data: paths) | clean interface (B2 in B → C direction only) |
| B3 | Cluster II (Setup folder/state) ↔ Cluster IV (Synthesize) | moderate (one-way data: paths) | clean interface |
| B4 | Cluster III (Dispatch) ↔ Cluster IV (Synthesize) | weak | clean (temporally separated) |
| B5 | Cluster IV (Synthesize) ↔ Cluster V (Operational) | weak | clean |

Five pieces, five boundaries. No cut goes through a strong-coupling region.

---

## Step 3 — Validate Boundaries (Bottom-Up)

Pick atomic elements and check whether they group naturally into the same clusters Step 2 identified:

- **a4 (input contract):** belongs with a1/a2/a3 (the protocol's "what it is + what it accepts"). Bottom-up agrees: Cluster I. ✓
- **a9 (child `_state.md` BRANCH_SET):** depends on a19 (branch_inquiry composition), which Step 2 placed in Cluster II. Bottom-up agrees: a9 and a19 belong together in Cluster II. ✓
- **a11 (dispatch instruction format):** depends on a12 (MVL+ RESUME mode bridge) and consumes a7 (child paths). Bottom-up agrees: a11/a12/a13 cluster together; a7 is one cluster step away (consumed via interface). ✓
- **a17 (outcome_review fields populated):** depends on a16 (record location) and a21 (schema reuse); also depends on a14 (trigger condition) for WHEN it fires. Bottom-up agrees: all in Cluster IV. ✓
- **a18 (schema drift):** is it really a sub-concern of Cluster IV (Synthesize)? Bottom-up: schema drift becomes visible when the comparison artifact tries to align two finding.md files of different versions. This is a Synthesize-phase concern. ✓
- **a23 (snapshot-rot caveat):** is it really separate from Cluster I's failure modes (a3)? Bottom-up: snapshot-rot is a USE-time caveat ("don't A/B against a 6-month-old snapshot"), not a runtime failure mode of the protocol. Caveat lives in operational guidance (Cluster V); failure modes (a3) are the protocol's own predictable failures. ✓ (though there's slight ambiguity — addressed by the choice to keep a3 as protocol-internal failure modes vs a23/24/25 as user-facing caveats)

**Confidence scoring:** Top-down and bottom-up agree on all five boundaries. **HIGH confidence.**

---

## Step 4 — Question Tree

Five pieces, each a question with verification criteria.

### Piece 1 — Identity & Contract

**Question:** What is the A/B-test inquiry protocol — what does it do, what does it explicitly NOT do, what input does it accept, and what are its predictable failure modes?

**Verification criteria:**

- [ ] Identity statement (1–2 paragraphs): protocol is paired-snapshot regression-testing scaffold; produces parent + two child inquiries; reuses outcome_review for the verdict
- [ ] NOT-list explicitly enumerates the 4 confirmed-absent RCT paradigms (sampling/p-values, blinding, real-time intervention, schema-cross-version-compatibility-as-paradigm)
- [ ] Failure-mode section documents: confirmation bias (verdict reading), schema drift (between versions), sample-size-of-1 (anecdotal-evidence misuse), two-pipeline cost (without trigger discipline), hidden state leakage (snapshot accidentally calling current), snapshot-rot (in failure-mode form complementing the operational caveat in Piece 5)
- [ ] Input contract specifies: snapshot identifier (required, e.g., `bf4ae1f`), test_intent (required, ∈ {regression-check, improvement-check, free-comparison}), shared question (required), source authority (per alignment_control: user_request | finding | branch | …)
- [ ] Cross-references: composes with `branch_inquiry.md`, `outcome_review.md`, `conclude.md`; consumes snapshot infrastructure from `enes/stability_preservation_via_git.md` + `archived_skills/<sha>-hg/`

### Piece 2 — Setup phase: folder + state topology

**Question:** What on-disk structure does the protocol create, what schemas do its files use, and how does it integrate with branch_inquiry's set-member machinery?

**Verification criteria:**

- [ ] Parent folder path convention: `devdocs/inquiries/<YYYY-MM-DD_HH-MM>__ab_<slug>/`; collision/depth/path-length policy stated (mirror branch_inquiry's policy)
- [ ] Parent `_ab.md` schema: required fields (test_intent, snapshot_identifier, shared question, source_authority, branch_set_id, current_runner = MVL+, snapshot_runner = `<sha>-MVL+`, created_at, dispatch_status); optional fields (optional_context)
- [ ] Child subfolder layout: `current/` and `snapshot-<sha>/` — both relative to parent; rationale documented
- [ ] Child `_branch.md`: identical content between both children (same Question, Goal, Scope Check from the user's input); only metadata differs
- [ ] Child `_state.md`: per-child `Pipeline` field (E→S→D→I→C; both children use MVL+ flow-type=extended); per-child `Relationships` includes `BRANCH_SET: <branch_set_id>`, `RELATED: <other_child_path>`, `AB_PARENT: <parent_path>`; runner field set per side
- [ ] Path discipline: parent_path / current_path / snapshot_path constructed at creation, treated as opaque thereafter; no rebuilding from id
- [ ] Composition with branch_inquiry: documents that the protocol writes children directly (bypassing branch_inquiry's runner-validation gap that rejects `<sha>-MVL+`); declares branch_set semantics in `_state.md` for parity with branch_inquiry-created sets

### Piece 3 — Setup phase: dispatch instructions

**Question:** What does the protocol print to the user at the end of setup, and how does it bridge to MVL+ RESUME mode for both children?

**Verification criteria:**

- [ ] Dispatch instruction format includes: parent folder path, both child folder paths, the two slash commands the user runs (one per child), an explicit note that the user can run them in parallel sessions, sequentially in one session, or via a future automated runner
- [ ] Both slash-command lines are exact and runnable (e.g., `/MVL+ devdocs/inquiries/.../ab_<slug>/current/` and `/<sha>-MVL+ devdocs/inquiries/.../ab_<slug>/snapshot-<sha>/`)
- [ ] References MVL+'s RESUME mode contract — "MVL+ accepts an `inquiry_path`; reads `_state.md`; resumes from first incomplete discipline"
- [ ] Mechanism-agnostic: protocol does NOT enforce launch order or session topology; it provides instructions and lets the user dispatch
- [ ] Dispatch instructions include WHAT TO DO AFTER both children complete: pointer to Piece 4 (synthesize phase) and the trigger command

### Piece 4 — Synthesize phase: comparison artifact

**Question:** When does the synthesize phase fire, who triggers it, what record is produced, where is it stored, and how is schema drift between versions handled?

**Verification criteria:**

- [ ] Trigger condition specified: both children's `_state.md` have `Status: COMPLETE` AND `finding.md` exists in both child folders
- [ ] Trigger mechanism for v1: **manual user invocation** (e.g., `/ab-test --synthesize <parent_path>` or re-running the protocol with a synthesize argument). Auto-trigger via conclude.md detection of "all branch_set members complete" is deferred to v2 (revival trigger: ≥3 A/B inquiries used the manual trigger and want automation)
- [ ] outcome_review record location: `<parent_path>/comparison.md` with frontmatter `record_type: outcome_review` and the alignment_control schema fields
- [ ] outcome_review record fields populated:
  - `source.path` = snapshot child's `finding.md`
  - `source.anchor` = snapshot's one-sentence answer
  - `expected` populated per `test_intent` (regression-check: "snapshot-equivalent or current is expected"; improvement-check: "current is expected to be better than snapshot"; free-comparison: "differences expected; no asymmetry")
  - `observed` = both findings' one-sentence answers + key divergences
  - `delta.type` ∈ {confirmation, mismatch, regression, drift, uncertainty} per outcome_review's existing schema
  - `delta.summary` = human-written prose explaining WHY this verdict (with quoted excerpts from both findings as evidence)
  - `evidence` = list with paths to both finding.md files + optionally per-discipline output paths
  - `confidence` = high/medium/low per outcome_review's confidence rules (default LOW for N=1; HIGH only when both runs converge on the same key claims)
  - `route` ∈ {no-op, monitor, navigation, materialize, revise_protocol, loop_diagnose, recover}
- [ ] Schema-drift handling: if the snapshot's `finding.md` lacks a section that current's has (or vice versa), the comparison must (a) note the structural difference explicitly in `delta.summary`, (b) compare on the sections both have, (c) avoid treating "section missing" as "regression" without explicit reasoning
- [ ] Composition with conclude.md: synthesize phase does NOT modify conclude.md in v1; synthesize relies on conclude having already produced both children's finding.md files
- [ ] Composition with outcome_review.md: explicit reference to outcome_review's schema and routing rules; flag the install-set gap (outcome_review.md is not currently in the install script's protocol set — the protocol must either inline the schema OR motivate adding outcome_review to the install set as a prerequisite)

### Piece 5 — Trigger discipline & operational guidance

**Question:** When should the user invoke A/B testing, what cost/value tradeoffs apply, and what caveats need to be visible to the user?

**Verification criteria:**

- [ ] Trigger heuristics documented: invoke A/B when (a) user explicitly suspects regression on a known-good past state, (b) user wants to validate that a recent spec change improved things, (c) user wants to compare two architectural directions on the same problem; do NOT invoke A/B for routine inquiries where regression isn't a concern
- [ ] Snapshot-rot caveat present: A/B against a snapshot older than ~3–6 months may be testing against an irrelevant past state; the verdict's `confidence` should reflect snapshot age
- [ ] Sample-size-of-1 caveat present: one A/B test = anecdotal evidence; consensus across multiple A/B tests on related questions is needed for high-confidence regression conclusions
- [ ] Two-pipeline-cost caveat present: each A/B run = two full MVL+ pipelines (significant compute); this is a non-trivial budget commitment that should be intentional
- [ ] Snapshot identifier conventions: how the user names the snapshot (short SHA, milestone tag) and where the snapshot must be installed (`~/.claude/skills/<sha>-MVL+/` etc., per `enes/stability_preservation_via_git.md`)
- [ ] Pointer to `enes/stability_preservation_via_git.md` for snapshot creation prerequisite (you can't A/B without a snapshot)

---

## Step 5 — Interface Map

| # | Source piece | Target piece | What flows | Direction | Type |
|---|---|---|---|---|---|
| I1 | Piece 1 (Identity) | Pieces 2/3/4/5 | Design constraints (thin scaffold; outcome_review reuse; mechanism-agnostic launch; N=1 paradigm) | One-way | Constraint |
| I2 | Piece 2 (Setup folder) | Piece 3 (Dispatch) | Both child folder paths (current_path, snapshot_path) + parent path | One-way | Data |
| I3 | Piece 2 (Setup folder) | Piece 4 (Synthesize) | Parent root path (for outcome_review storage) + both child folder paths (for evidence references) + branch_set_id (for relationship pointers) | One-way | Data |
| I4 | Piece 3 (Dispatch) | Piece 4 (Synthesize) | NONE (direct flow). Indirect via the children's CONCLUDE producing finding.md files that Piece 4 reads | None / Indirect | (the children are the medium, not the protocol) |
| I5 | Piece 4 (Synthesize) | Piece 5 (Operational) | Verdict semantics (delta types) — Piece 5's caveats reference what verdicts mean | Documentation reference | One-way |
| I6 | Piece 5 (Operational) | Piece 1 (Identity) | Cross-references back to identity for "what this protocol is" — no behavior flow | Documentation cross-ref | One-way |

### Assumptions-not-data check (per Step 5 refinement)

For each interface, what assumptions does the target piece make about the source's output?

- **I2 (Setup → Dispatch):** Dispatch assumes the child folder paths are STABLE (won't be moved/renamed by setup later). Setup must commit paths at creation; Dispatch's printed instructions reference them. Captured in Piece 2's path discipline criterion.
- **I3 (Setup → Synthesize):** Synthesize assumes parent root + child paths are stable (same assumption as I2). Synthesize ALSO assumes both child folders contain a `finding.md` produced by CONCLUDE — this assumption depends on the children having been dispatched AND completed. Trigger condition in Piece 4 captures this.
- **I3 hidden coupling check:** Synthesize assumes outcome_review.md is loadable as a protocol. Currently `outcome_review.md` is in `homegrown/protocols/` but NOT in the current install script's `protocols=( ... )` list. **This is a hidden coupling between the A/B protocol and the install configuration.** Piece 4's verification criteria flag this explicitly: either (a) inline the relevant outcome_review schema into the A/B protocol file, (b) extend the install script's protocol set to include outcome_review.md, or (c) reference outcome_review by source-repo path with the understanding that A/B is a developer-facing protocol run from inside the project repo (not from the installed-skill location alone).
- **I4 (children as medium):** Both children must produce comparable finding.md files. They follow the same MVL+ pipeline contract per `MVL+/SKILL.md`, so the structural assumption holds. The schema-drift concern (different versions producing different finding.md sections) is a real degradation of this assumption — captured in Piece 4's schema-drift criterion.
- **I1 (Identity → others):** Each downstream piece assumes Identity's commitments (e.g., "scaffold-and-instruct, not orchestrate") are held. If Piece 1 changes the identity (e.g., decides to orchestrate), Pieces 3/4 break. Documented; change driver shared.

---

## Step 6 — Dependency Order

```
Piece 1 (Identity & Contract)
   │
   │ (constraints flow downward)
   ▼
Piece 2 (Setup: folder + state)
   │
   │ (paths flow to both)
   ├──────────────────┐
   ▼                  ▼
Piece 3 (Dispatch)   Piece 4 (Synthesize)
                      │
                      │ (verdict semantics referenced)
                      ▼
                  Piece 5 (Operational guidance)
                      │
                      │ (cross-refs back to Piece 1)
                      ▼
                  Piece 1 (already designed; no rework)
```

**Sequential order:**
1. **Piece 1** (Identity) — first; sets constraints for all downstream pieces.
2. **Piece 2** (Setup folder/state) — second; produces the path artifacts that Pieces 3 and 4 depend on.
3. **Pieces 3 and 4** — third; can be designed in parallel (no inter-dependency, both depend only on Piece 2).
4. **Piece 5** (Operational guidance) — fourth; can be drafted earlier but final form references all others.

**No circular dependencies.** Piece 5's reference back to Piece 1 is documentation-level (cross-link), not a structural cycle.

**Parallelization:** Pieces 3 and 4 can be worked on in parallel after Piece 2 completes. This is the only meaningful parallelism in the dependency graph.

---

## Step 7 — Self-Evaluation

### Minimum (3 dimensions)

| Dimension | Result | Notes |
|---|---|---|
| **Independence** | PASS | Each piece is answerable without reading siblings, given the interface specs. P3 needs P2's child paths (interface I2); P4 needs P2's parent+child paths (interface I3). Both interfaces are explicit. |
| **Completeness** | PASS with note | Identity (P1) + Setup machinery (P2 + P3) + Synthesize machinery (P4) + Operational guidance (P5) cover the v1 implementation work for `homegrown/protocols/ab_test_inquiry.md`. **Note:** the cross-protocol concern that `outcome_review.md` is not in the install set is captured as P4's explicit assumption, not as a separate piece — that's a homegrown-install concern, not part of the A/B protocol per se. Flagged for innovate/critique. |
| **Reassembly** | PASS | If all 5 pieces' verification criteria are met + interfaces honored, the resulting markdown file at `homegrown/protocols/ab_test_inquiry.md` IS the v1 protocol. Determination-mechanism check: "both children complete" → P4 specifies trigger condition + mechanism; "schema drift" → P4 specifies handling. Both runtime determinations have explicit pieces. |

### Full evaluation (7 dimensions; this is a high-stakes decomposition because it shapes a load-bearing protocol)

| Dimension | Result | Notes |
|---|---|---|
| Independence | PASS | (above) |
| Completeness | PASS with note | (above) |
| Reassembly | PASS | (above) |
| **Tractability** | PASS | Each piece is sized for one focused pass. P2 is largest (3 file schemas + path policy + composition note) but still tractable. |
| **Interface clarity** | PASS | All cross-piece flows explicit (I1–I6). Hidden-coupling check flagged the outcome_review installability gap — captured, not silent. |
| **Balance** | ACCEPTABLE imbalance | P2 is ~2x size of P1 and ~3x size of P3/P5. Not 80% in one piece; balanced enough not to require further sub-decomposition. |
| **Confidence** | HIGH | Top-down (Step 2) and bottom-up (Step 3) agreed on all 5 boundaries. |

### Failure-mode self-check

| Failure mode | Observed? | Notes |
|---|---|---|
| Premature decomposition | No | Sensemaking SV1→SV6 stabilized 5 commitments before this decomposition began. |
| Wrong boundaries | No | All cuts are at low-coupling regions. The strongest cross-boundary edge (II → III) is one-way data flow, captured as interface I2. |
| Hidden coupling | Caught and named | I3's hidden coupling on outcome_review.md being in the install set is documented in P4's verification criteria. Schema drift is similarly captured. |
| Missing pieces | No | Determination-mechanism check passed (P4 covers "both children complete" and "schema drift"). |
| Over-decomposition | No | 5 pieces matches the natural cluster count; further decomposition (e.g., splitting P2 into P2a folder-layout + P2b file-schemas) would produce sub-pieces that can't exist independently. |
| Ignoring dependencies | No | Dependency order explicit: P1 → P2 → (P3 ‖ P4) → P5. |
| Imbalanced decomposition | No | P2 is largest but not dominant; not 80% of the work. |

**Overall: PROCEED** — decomposition passes minimum 3 dimensions and full 7 dimensions; no failure modes triggered; ready for innovation to generate candidate designs within each piece.
