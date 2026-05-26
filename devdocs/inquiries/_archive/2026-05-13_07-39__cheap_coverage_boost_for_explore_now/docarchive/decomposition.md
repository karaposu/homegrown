# Decomposition — Cheap Coverage Boost for /explore (Ship-Now)

## User Input

`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-13_07-39__cheap_coverage_boost_for_explore_now/_branch.md`

Input: `_branch.md` + `exploration.md` + `sensemaking.md`. Sensemaking resolved A1 (mandatory filesystem listing) as primary actionable; B1 (min-N file reads) as optional adjunct; D1 (telemetry) as bundled with A1; six deferred items. Decompose the work surface into pieces with interfaces and dependency ordering. Apply Determination-mechanism piece check at Phase 7.

---

## Step 1 — Coupling Topology

### Elements in the whole

- **E1** — The A1 mandate sentence (which spec section it's added to)
- **E2** — A1's tool-fallback invocation chain (tree → git ls-files → find → ls -R)
- **E3** — A1's artifact-mode-only trigger condition
- **E4** — A1's `skip-listing: true` opt-out flag
- **E5** — D1 — tool-call telemetry field (bundled with A1)
- **E6** — B1 — minimum-N file reads spec (optional adjunct)
- **E7** — Section-placement decisions (where in `/explore.md` do A1 and B1 each live)
- **E8** — Deferred items list (C1, C5, C6, E1-from-exploration, F1) with revival triggers
- **E9** — Relationship declarations to prior findings (RELATED to both)
- **E10** — Worked example showing A1 + D1 in action

### Coupling assessment

| Pair | Coupling | Why |
|---|---|---|
| E1 ↔ E2 | **Strong** | Mandate without invocation chain is incomplete; chain without mandate is unused |
| E1 ↔ E3 | **Strong** | The trigger is part of the mandate's definition |
| E1 ↔ E4 | **Strong** | Opt-out is part of mandate definition |
| E1 ↔ E5 | Moderate-Strong | Telemetry makes mandate auditable; mandate works without it but auditing is weaker |
| E1 ↔ E10 | **Strong** | Worked example illustrates A1's behavior; without an example the spec is abstract |
| E6 ↔ E1 | Weak | Both fire in artifact mode but address different coverage axes (B1 = depth/concept; A1 = breadth/layout) |
| E6 ↔ E5 | Moderate | B1's read-set benefits from the same telemetry as A1 |
| E7 ↔ {E1, E6} | **Strong** | Placement decision depends on what each piece contains |
| E8 ↔ {E1, E6} | Weak | Deferred items reference the same problem space but don't share content |
| E9 ↔ everything | Weak | Finding-level metadata only; doesn't determine spec content |

### Coupling clusters

- **Cluster I — A1 (the primary mandate, fully specified):** {E1, E2, E3, E4, E5, E10} — strongly coupled, one ship
- **Cluster II — B1 (optional adjunct):** {E6} — standalone
- **Cluster III — Section placement:** {E7} — depends on Cluster I (+ optionally Cluster II)
- **Cluster IV — Deferred items list:** {E8} — finding-level
- **Cluster V — Relationship declarations:** {E9} — finding-level

Five clusters with low inter-cluster coupling. Cluster I is the load-bearing one and internally dense.

---

## Step 2 — Detect Boundaries (Top-Down)

Five clean boundaries:

- **Cluster I | Cluster II** (A1 | B1): different mechanisms, different coverage axes, can ship independently. Single-point boundary.
- **Cluster I/II | Cluster III** (content | placement): placement decision is downstream of content; sequential, not coupled.
- **Cluster I/II | Cluster IV** (spec content | finding-level deferred list): different artifacts.
- **Cluster I/II | Cluster V** (spec content | finding-level relationships): different artifacts.
- **Cluster IV | Cluster V**: both finding-level but distinct concerns (deferred items vs prior-finding relationships).

---

## Step 3 — Validate Boundaries (Bottom-Up Check)

### Atoms

- A1's mandate sentence (the MUST statement)
- The four invocation entries in the fallback chain
- The artifact-mode-only conditional
- The skip-listing flag specification
- The telemetry field definition
- The worked example markdown block
- B1's mandate paragraph
- B1's N-scaling table (vs `expected`)
- The deferred-items section (6 entries)
- The relationship-declarations (frontmatter + body)

### Atom-to-cluster mapping

| Atoms | Cluster |
|---|---|
| A1 mandate + chain + trigger + opt-out + telemetry + example | I (A1 primary) |
| B1 mandate + N-table + read-selection rule | II (B1 adjunct) |
| Placement notes | III (placement) |
| Deferred-items entries | IV (deferred list) |
| Relationship declarations | V (relationships) |

Top-down and bottom-up agree across all five boundaries. **Boundary confidence: HIGH**.

---

## Step 4 — Question Tree

### P1 — How is A1 (mandatory filesystem listing at Step 0 in artifact mode) fully specified in `/explore`'s spec, including the bundled telemetry?

**Verification criteria:**
- [ ] `/explore`'s spec has a new sub-step (or extension to existing section) that mandates the filesystem listing in artifact mode
- [ ] The mandate uses MUST-language, not SHOULD or MAY
- [ ] The tool-fallback chain is explicit (tree → git ls-files → find → ls -R) with the order specified
- [ ] The artifact-mode-only trigger is explicit; possibility mode opts out by default
- [ ] The `skip-listing: true` flag is documented as an opt-out for non-filesystem artifact territories
- [ ] The tool-call telemetry field is added to §5.3 base metrics (which invocation ran + its output size)
- [ ] One worked example shows A1 firing on a real artifact-mode run

**Sub-pieces:**

- **P1.1 — The mandate text and its placement.** What does the MUST-sentence say verbatim? Candidate placements: as a new sub-step in §3.1 Step 0 declarations; as an extension to §3.3 boundary-discovery sub-phase (lifting the conditional); as a new §3.3.1 sub-section. Most natural placement: extend §3.3 since the mandate IS a form of boundary-discovery for filesystem territories.

- **P1.2 — Tool-fallback chain (the determination mechanism for "which tool to use").** Exact invocations in order:
  1. `tree -L 3 .` (depth-limited; concise; preferred when available)
  2. `git ls-files | head -200` (project-tracked-only; clean boundary; preferred for repos)
  3. `find . -type f -not -path '*/\.*' -not -path '*/node_modules/*' -not -path '*/.venv/*' | head -200` (catch-all when no git)
  4. `ls -R` (last resort)
  First successful invocation wins. The runner records which one ran in the telemetry.

- **P1.3 — Artifact-mode-only trigger.** Conditional: fires when `territory-type-mode: artifact` (per §3.1). When `territory-type-mode: possibility`, the mandate does NOT fire (no filesystem to list).

- **P1.4 — `skip-listing: true` opt-out flag.** A new optional field in `_branch.md`'s Step 0 declarations or in the inquiry's Scope Check. When set, the mandate is bypassed with an explicit note in the output ("listing skipped per `skip-listing: true`"). Use case: artifact-mode territories that don't map to a filesystem tree (e.g., log archives, document corpora).

- **P1.5 — Tool-call telemetry (D1 bundled).** A new field in §5.3 base metrics: `boundary_listing_invocation` (one of `tree-L3` / `git-ls-files` / `find` / `ls-R` / `skipped`) and `boundary_listing_items_count` (integer count of files listed). Makes the mandate auditable post-hoc.

- **P1.6 — Worked example.** A short before/after example showing: invocation made, listing output (truncated for spec readability), how the scan-signal-probe cycle consumed it.

---

### P2 — How is B1 (minimum-N file reads optional adjunct) specified?

**Verification criteria (if shipped):**
- [ ] `/explore`'s spec has a refinement note at the Scan component (§2.1 or §3.4 cycle step 1) mandating ≥N file reads in artifact mode
- [ ] N is specified as a scaling table against the `expected` Step 0 declaration
- [ ] The read-selection rule is documented (high-relevance items first; fallback to first-N from the filesystem listing)
- [ ] Telemetry logs the read-set

**Sub-pieces:**

- **P2.1 — Mandate text and placement.** Candidate placement: a refinement note at §2.1 Scan component, or at §3.4 canonical cycle step 1. Most natural: §2.1 (since it's a property of how Scan operates).
- **P2.2 — N-scaling table.** N=5 for `expected: ~10 items`; N=10 for `~50`; N=20+ for finer. The runner picks N from the declared `expected`.
- **P2.3 — Read-selection rule.** If signal detection has fired and flagged high-relevance items, read those first. Otherwise fall back to first-N items from the filesystem listing (P1's output). 

---

### P3 — Where in `/explore.md` does each piece land?

**Verification criteria:**
- [ ] A1 (P1) is placed at §3.3 (extending boundary-discovery sub-phase)
- [ ] B1 (P2) is placed at §2.1 Scan component as a refinement note
- [ ] Telemetry fields (P1.5) live at §5.3 base metrics
- [ ] Cross-references between sections work (the new §3.3 wording references §5.3 telemetry; §2.1 refinement note references §3.3 for the listing)

**Sub-pieces:**
- **P3.1 — A1 section placement.** Recommended: §3.3 extension. Reason: A1 is conceptually a form of boundary-discovery (specifically for filesystem territories), and §3.3 already handles the boundary-discovery sub-phase.
- **P3.2 — B1 section placement.** Recommended: §2.1 Scan component refinement note. Reason: B1 is a property of how Scan operates (forced reading vs inference).
- **P3.3 — Telemetry placement.** Recommended: §5.3 base metrics extension. Two new fields added to the existing telemetry section.

---

### P4 — Deferred items list with revival triggers (finding-level)

**Verification criteria:**
- [ ] The finding has a "DEFERRED" section listing all 6 items
- [ ] Each item has an observable, condition-bound, or time-bound revival trigger (no "eventually")
- [ ] Each item's "Why if revived" is one line

**Sub-pieces (the items themselves):**
- C1 (default boundary-discovery in artifact mode) — revival: A1 ships and proves insufficient for non-filesystem-mappable artifact territories
- C5 (mandatory surround-layer scan with checkable evidence) — revival: post-A1 telemetry shows surround-layer rule still being skipped
- C6 (post-convergence negative-space audit) — revival: category-level miss patterns observed in 2+ inquiries after A1
- E1-from-exploration (D0-prohibition structural check) — revival: D0-level items observed in 2+ recent /explore outputs
- F1 (read past /explore outputs for similar inquiries) — revival: corpus reaches 5+ similar inquiries

---

### P5 — Relationship declarations to prior findings (finding-level)

**Verification criteria:**
- [ ] Finding frontmatter has explicit `related:` or equivalent entries pointing at both prior findings
- [ ] Finding body has a brief "Relationship to prior findings" note explaining each (RELATED, not REFINES/SUPERSEDES/CORRECTS)
- [ ] The note clarifies the side-effect synergy with the canonical-coverage finding (A1 helps canonical-source surfacing without replacing the registry) and the compatibility with the identity-refresh finding (A1 is operational mechanism; identity-refresh is spec-language)

**Sub-pieces:**
- P5.1 — Frontmatter relationship entries
- P5.2 — Brief body explanation of each relationship

---

## Step 5 — Interface Map

### Inter-piece flows

| From | To | Direction | What flows | Flow type | Notes |
|---|---|---|---|---|---|
| P1 | P3 | Sequencing | P3's placement decisions depend on P1's settled content | Prerequisite (weak) | Doesn't block parallel drafting |
| P2 | P3 | Sequencing | Same | Prerequisite (weak) | Only applies if P2 ships |
| P1 ↔ P2 | one-way (weak) | Both fire in artifact mode, share telemetry section | Co-existence | Independent; telemetry shared but not coupled in content |
| P1.5 (telemetry) | within P1 | bundle | Telemetry IS part of A1's specification | Internal | Resolves the question "is D1 separate?" — no, it bundles |
| {P1, P2, P3} | P4 | Information | P4's deferred list contextualizes what was deferred relative to what shipped | Information | Reflective |
| {P1, P2, P3} | P5 | Information | P5's relationships describe how this finding's content relates to prior findings | Information | Reflective |

### Within-piece flows

**Within P1:**
- P1.1 (mandate text) → P1.6 (worked example): example illustrates the mandate
- P1.2 (fallback chain) → P1.5 (telemetry): telemetry records which chain entry ran
- P1.3 (trigger), P1.4 (opt-out) are parallel sub-pieces feeding into P1.1's full sentence

**Within P2:**
- P2.1 (mandate) → P2.2 (N-scaling) → P2.3 (selection rule): linear

### Assumptions-not-data check

**One hidden assumption:** P1's section-placement choice (§3.3 boundary-discovery extension) assumes the existing §3.3 wording remains coherent with the mandatory variant. Currently §3.3 says boundary-discovery is "conditional on `boundary: unknown`"; extending to a mandate in artifact mode means the sub-phase now has TWO trigger paths (the original conditional + the new mandate). The spec must explain both paths clearly without contradiction.

**Resolution:** P1.1's mandate text must explicitly state the relationship: "In artifact mode, the boundary-discovery sub-phase fires by default via a filesystem listing (per below). The conditional path (boundary: unknown) remains the trigger in non-artifact modes and as a manual override." Converts the hidden assumption into explicit spec text.

No other hidden assumptions detected.

---

## Step 6 — Dependency Order

### Phase 1 — Parallel (no inter-dependencies)

- **P1** (A1 fully specified) — load-bearing piece
- **P2** (B1 optional adjunct) — only if user opts to ship it now; otherwise it stays deferred

### Phase 2 — Depends on P1 + (P2 if shipped)

- **P3** (section placement) — needs P1's content settled

### Phase 3 — Reflective; aggregates the others

- **P4** (deferred items list) — finding-level
- **P5** (relationship declarations) — finding-level

### Within-piece ordering

**P1:**
1. P1.1 mandate text (with explicit two-trigger-paths clarification) — first
2. P1.2 fallback chain, P1.3 trigger, P1.4 opt-out, P1.5 telemetry — parallel after P1.1
3. P1.6 worked example — after P1.1-P1.5 settled

**P2:** P2.1 → P2.2 → P2.3 (linear)

No circular dependencies detected.

---

## Step 7 — Self-Evaluate

### Determination-mechanism piece check (refinement applied)

The load-bearing concept whose use depends on a runtime determination is **"which filesystem-listing tool is available?"** — for any given environment, the runner must determine which of tree / git ls-files / find / ls -R actually works.

Has the Q-tree included a piece addressing HOW the runtime determination is made?

**YES — P1.2 (tool-fallback chain) IS the determination mechanism.** The chain itself is the determination: try in order; first one that succeeds wins. The Q-tree does not presuppose the determination; P1.2 IS the determination.

**Determination-mechanism check: PASS.**

### Minimum self-evaluation (3 dimensions)

| Dimension | Verdict | Reasoning |
|---|---|---|
| **Independence** | PASS | P1 and P2 fully independent in Phase 1. P3 depends on both (Phase 2). P4, P5 aggregate (Phase 3). |
| **Completeness** | PASS | A1 fully covered (sub-pieces P1.1-P1.6); B1 fully covered (P2.1-P2.3); placement decisions (P3); deferred items (P4); relationships (P5). All sensemaking outputs reflected. |
| **Reassembly** | PASS | Completing P1 + P3 + P4 + P5 (with P2 optional) produces an updated `/explore` spec + this finding with proper relationship declarations. The determination-mechanism check above is part of this PASS. |

### Full self-evaluation (7 dimensions)

| Dimension | Verdict | Reasoning |
|---|---|---|
| Independence | PASS | (as above) |
| Completeness | PASS | (as above) |
| Reassembly | PASS | (with determination-mechanism check) |
| **Tractability** | PASS | P1 is the largest piece but each sub-piece is small. Whole assembly ships in ≈ 1 focused session (≈ 30-45 min if A1 alone; ≈ 1 hour if A1+B1). |
| **Interface clarity** | PASS (with one explicit constraint) | One hidden assumption surfaced (P1's §3.3 extension must reconcile with existing wording) and converted to an explicit spec-text requirement in P1.1. |
| **Balance** | PASS | P1 is largest (load-bearing primary); P2 is medium (optional); P3, P4, P5 are smaller. Imbalance is justified — A1 IS the load-bearing answer. |
| **Confidence** | HIGH | Top-down clusters and bottom-up atoms agree across all 5 boundaries. |

### Failure-mode check

| Mode | Observed? | Notes |
|---|---|---|
| 1. Premature decomposition | NO | Sensemaking explicitly resolved A1-primary + B1-optional + 6 deferred before this decomposition started. |
| 2. Wrong boundaries | NO | Coupling perception identified A1 + bundled D1 + worked example as one cluster; bottom-up atom check confirmed. |
| 3. Hidden coupling | ONE FOUND, addressed | P1's §3.3-extension must reconcile two trigger paths (mandatory artifact-mode + conditional boundary-unknown). Converted to explicit P1.1 wording requirement. |
| 4. Missing pieces | NO | Determination-mechanism check passed (P1.2 IS the determination). |
| 5. Over-decomposition | NO | P1's six sub-pieces are tractable and distinct; not trivial. |
| 6. Ignoring dependencies | NO | Explicit dependency order produced (Phase 1 parallel; Phase 2 placement; Phase 3 reflective). |
| 7. Imbalanced decomposition | NO | P1 is largest by design (it's the primary actionable); other pieces appropriately smaller. |

### Telemetry

- Top-level pieces: 5 (P1-P5)
- Sub-pieces: 6 in P1 + 3 in P2 + 3 in P3 + 5 in P4 + 2 in P5 = 19 total
- Interfaces: 5 inter-piece + multiple intra-piece flows
- Hidden couplings surfaced: 1 (P1 §3.3-extension reconciliation)
- Hidden couplings unresolved: 0
- Dependency phases: 3
- Circular dependencies: 0

---

## Final Deliverable

### Coupling Map (summary)

```
Cluster I — A1 (the primary mandate, fully specified)
   {mandate text, fallback chain, trigger, opt-out, telemetry, example}
        │
        │ (weak) co-existence
        │
Cluster II — B1 (optional adjunct)
   {minimum-N file reads}
        │
        │ (strong) sequencing for placement
        ▼
Cluster III — Section placement decisions
        │
        │ (information) reflective
        ▼
Cluster IV — Deferred items list (finding-level)
Cluster V — Relationship declarations (finding-level)
```

### Question Tree (summary)

- **P1** — A1 fully specified (6 sub-pieces) — load-bearing piece
- **P2** — B1 specified (3 sub-pieces) — optional adjunct
- **P3** — Section placement (3 sub-pieces)
- **P4** — Deferred items list (5 entries with revival triggers)
- **P5** — Relationship declarations (frontmatter + body explanation)

### Interface Map (summary)

- P1 → P3 (sequencing for placement)
- P2 → P3 (sequencing if P2 ships)
- P1.5 internal to P1 (telemetry bundles)
- P1.1 requires explicit two-trigger-paths reconciliation (hidden coupling converted to explicit constraint)
- {P1, P2, P3} → {P4, P5} information flows for reflective aggregation

### Dependency Order (summary)

- **Phase 1 — Parallel:** P1, (P2 if opt-in)
- **Phase 2 — Sequencing:** P3 (after Phase 1)
- **Phase 3 — Reflective:** P4, P5

### Self-Evaluation (summary)

All 7 dimensions PASS. Determination-mechanism check PASS (P1.2 IS the determination). One hidden coupling surfaced and converted to explicit constraint. No failure modes fired.

**Overall: PROCEED.** Decomposition complete; ready for innovation phase to generate the concrete spec-edit text for each piece.
