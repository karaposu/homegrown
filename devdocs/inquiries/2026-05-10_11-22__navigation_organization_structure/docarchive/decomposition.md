# Decomposition: Navigation Organization Structure

## Step 1 — Perceive Coupling Topology

### Elements in the whole

From Sensemaking SV6:

1. Per-run artifact spec (`navigation_observer_<N>.md`).
2. `_nav.md` per-folder index (5 sections + split ownership).
3. Action-type vocabulary (6 actions + 2 non-action states + rationale + result-pointer).
4. NOT-include list for `/navigation` discipline (6 exclusions).
5. branch_inquiry protocol coordination (`from_nav_direction:` flag).
6. Frame-exit verification (bounded-scope justification).
7. Open items O1–O4 (operational protocols per non-spawn move; Open-Directions storage; History format; cross-reference style).
8. Implementation guidance (which spec files to edit, in what order).
9. Commitment status + final recommendation.

### Pairwise coupling

| A | B | Coupling | Reason |
|---|---|---|---|
| Per-run artifact (#1) | `_nav.md` Runs section (#2) | **Strong** | Runs section indexes per-run files; integral relation |
| `_nav.md` Selections (#2) | Action-type vocabulary (#3) | **Strong** | Vocabulary IS the schema for Selections entries |
| `_nav.md` Spawned Children (#2) | branch_inquiry coord (#5) | **Strong** | Coordination protocol writes into this section |
| NOT-include list (#4) | Per-run artifact (#1) | **Moderate** | NOT-include list constrains what per-run artifact contains |
| Frame-exit verification (#6) | All design decisions (#1-#5) | **Weak** | Validates scope without changing the design |
| Open items (#7) | Per-section spec | **Moderate** | O2 affects Open-Directions section; O3 affects History format |
| Implementation guidance (#8) | All design (#1-#5) | **Strong** | Reads the entire design to produce edit instructions |
| Commitment (#9) | Implementation (#8) | **Strong** | Commitment determines whether implementation happens |

### Coupling map

```
                  ┌──────────────────────────────────────────────────────┐
                  │ P1: Core artifact specs (HUB)                        │
                  │   - Per-run navigation_observer_<N>.md spec         │
                  │   - _nav.md 5 sections + split ownership            │
                  │   - Action-type vocabulary (embedded in Selections) │
                  │   - Open items O2 (Open-Directions storage)         │
                  │              O3 (History format)                    │
                  │              O4 (cross-reference style)             │
                  └──────────────┬───────────────────────────────────────┘
                                 │
              ┌──────────────────┼──────────────────┐
              │                  │                  │
              ▼                  ▼                  ▼
     ┌────────────────┐  ┌────────────────┐  ┌──────────────────────┐
     │ P2: NOT-       │  │ P3: branch_    │  │ Implementation +     │
     │    include     │  │     inquiry    │  │ Commitment           │
     │    list (6     │  │     coord      │  │  (downstream P4)     │
     │    exclusions) │  │     (flag)     │  │                      │
     └────────┬───────┘  └────────┬───────┘  └──────────────────────┘
              │                   │
              └──────────┬────────┘
                         │
                         ▼
                ┌───────────────────────┐
                │ P4: Implementation    │
                │   guidance +          │
                │   commitment +        │
                │   recommendation      │
                │   (Frame-exit         │
                │   verification        │
                │   embedded as note)   │
                └───────────────────────┘
```

**Cluster identification:**
- **Hub:** P1 — core artifact specs fused (per-run + `_nav.md` + action-type vocabulary). All structural design lives here.
- **Spoke A:** P2 — NOT-include list (discipline-behavior boundary).
- **Spoke B:** P3 — branch_inquiry coord (cross-protocol coordination).
- **Synthesis:** P4 — implementation guidance + commitment, embeds frame-exit verification as scope note.

### Why fuse #1+#2+#3+open-items into P1

The core artifact specs are the structural design. Per-run filename (#1) is meaningless without `_nav.md` Runs section (#2) indexing it; Action-type vocabulary (#3) is the schema for `_nav.md` Selections section (#2). Open items O2-O4 are per-section refinements within `_nav.md`. Splitting these into separate pieces would create high-bandwidth interfaces between artificial boundaries. Integration is structurally clean.

---

## Step 2 — Detect Boundaries (Top-Down)

Cuts at low coupling:

- **B-1: Between P1 and P2.** Crossing traffic: P2 references what /navigation produces (per P1). One read. Low.
- **B-2: Between P1 and P3.** Crossing traffic: P3 references _nav.md Spawned Children section. One read. Low.
- **B-3: Between P2/P3 and P4.** Crossing traffic: P4 synthesizes for implementation. Low.
- **B-4: P1 ↔ Open items O1.** O1 (operational protocols per non-spawn move) is research frontier — flagged in P4 as Open Question, not in P1.

All boundaries clean.

---

## Step 3 — Validate Boundaries (Bottom-Up)

### Atoms (irreducible elements)

- A1: Per-run filename pattern (`navigation_observer_<N>.md`).
- A2: Per-run file contents spec (navigation map + warming-summary + timestamp).
- A3: `_nav.md` 5-section structure.
- A4: Per-section ownership (Navigation discipline / Selector / branch_inquiry / all-via-History).
- A5: Action-type vocabulary (6 actions + 2 non-action states).
- A6: Result-pointer field in Selections.
- A7: NOT-include list (6 exclusions).
- A8: `from_nav_direction:` flag for branch_inquiry.
- A9: Open Items O2 (Open-Directions storage decision).
- A10: Open Items O3 (History format decision).
- A11: Open Items O4 (cross-reference style decision).
- A12: Frame-exit verification.
- A13: Commitment status.
- A14: Implementation file-edit list.
- A15: Final recommendation.

### Atom-to-piece grouping

| Atoms | Piece |
|---|---|
| A1, A2, A3, A4, A5, A6, A9, A10, A11 | P1 (hub) |
| A7 | P2 |
| A8 | P3 |
| A12, A13, A14, A15 | P4 |

### Boundary checks

- **A5 (action-type vocabulary) inside P1?** Yes. It's the schema for `_nav.md` Selections; integral with the section spec.
- **A6 (result-pointer field) inside P1?** Yes. Same — part of Selections schema.
- **A9-A11 (open items) inside P1?** They're per-section refinements within `_nav.md`. P1 owns; Innovation commits.
- **A8 (`from_nav_direction:` flag) inside P3?** Yes. It's the coordination mechanism between branch_inquiry and `_nav.md`.
- **A12 (frame-exit verification) inside P4?** Yes. It's a scope-justification note attached to the recommendation, not a design element.

### Top-down vs bottom-up

| Boundary | Top-down location | Bottom-up confirms? |
|---|---|---|
| P1 ↔ P2 | core artifact specs vs NOT-include | ✓ |
| P1 ↔ P3 | core artifact specs vs branch_inquiry coord | ✓ |
| P2/P3 ↔ P4 | upstream vs synthesis | ✓ |

All confirmed. **Confidence: HIGH.**

---

## Step 4 — Express as Question Tree

### P1 — Core artifact specs (HUB)

**Question:** What is the complete spec for the per-run `navigation_observer_<N>.md` file (location, naming, contents) AND the per-folder `_nav.md` file (5 sections with split ownership, action-type vocabulary in Selections, including commitments for Open-Directions storage approach, History format, and cross-reference style to `_branches.md`)?

**Verification criteria:**
- [ ] Per-run filename pattern named: `navigation_observer_<N>.md`, sequential N starting at 1.
- [ ] Per-run file location named: source-inquiry folder.
- [ ] Per-run file contents specified: navigation map (16-type taxonomy + 12 route fields per the audit's CANONICAL E_T1 + D2 references), session-warming summary (compact pointer to warming inputs, not duplicated content), timestamp.
- [ ] `_nav.md` location named: source-inquiry folder.
- [ ] `_nav.md` is OPTIONAL rule stated.
- [ ] All 5 `_nav.md` sections specified with concrete content schema:
  - Runs (index of `navigation_observer_*.md` with timestamp + run-id + summary).
  - Selections (per-direction: action-type / rationale / result-pointer / actor / timestamp).
  - Spawned Children (per nav-spawned child: child-inquiry-path / source-direction-id / spawn-timestamp).
  - Open Directions (per-still-live direction: direction-id / source-run-id / why-still-open).
  - History (chronological event log: timestamp / actor / event-type / brief-description).
- [ ] Per-section ownership named (Navigation discipline / Selector / branch_inquiry protocol / all-via-History).
- [ ] Action-type vocabulary specified: 6 actions (SPAWN-CHILD, REVISIT, MERGE, CONSOLIDATE, TEST, OTHER) + 2 non-action states (DEFERRED, REJECTED).
- [ ] Result-pointer field semantics specified: free-text linking to whatever artifact resulted from the action.
- [ ] O2 committed: Open-Directions section is **stored explicitly + verified at read-time** (best of both — store for fast scan; verify against Runs ∩ ¬Selections to catch drift).
- [ ] O3 committed: History format is **structured** (timestamp / actor / event-type / brief description) for parsability.
- [ ] O4 committed: cross-references between `_nav.md` and `_branches.md` are **explicit** (each section uses path-form references; nav-spawned children appear in BOTH files with cross-link).

### P2 — NOT-include list for `/navigation` discipline

**Question:** What must the `/navigation` discipline NOT include in its per-run `navigation_observer_<N>.md` artifact, and where do those exclusions properly belong?

**Verification criteria:**
- [ ] All 6 exclusions named:
  1. Selection decisions → belong to Selector / `_nav.md` Selections section.
  2. Implementation steps → belong to Materialization protocol / future runner spec.
  3. Reflection observations on the just-completed cycle → belong to Reflect discipline output.
  4. Cross-inquiry summaries → belong to (future) `_meta_state.md`.
  5. "Right answer" verdict on which direction to take → outside Navigation's enumerate-only charter.
  6. Bulk content from inquiry's discipline outputs → already in `docarchive/`.
- [ ] Each exclusion includes the proper destination (where it belongs instead).
- [ ] The exclusion list is added as a "MUST NOT include" subsection in `homegrown/navigation/SKILL.md` and/or `homegrown/navigation/references/navigation.md`.

### P3 — branch_inquiry protocol coordination

**Question:** How does `homegrown/protocols/branch_inquiry.md` coordinate with `_nav.md` when a child inquiry is spawned from a navigation direction, and what is the optional flag's semantics?

**Verification criteria:**
- [ ] Optional flag added: `from_nav_direction: <direction-id>`.
- [ ] Behavior when flag PRESENT: branch_inquiry creates child as before, AND writes Spawned-Children entry in source inquiry's `_nav.md` (creating `_nav.md` if absent), AND updates child's `_state.md` Relationships section with `SPAWNED FROM nav-direction <direction-id>`.
- [ ] Behavior when flag ABSENT: default behavior unchanged. `_branches.md` updated as today; no `_nav.md` interaction.
- [ ] Direction-id format specified: `<navigation_observer_N>:<route-number>` (referencing the per-run file + the route's number within that file's enumeration).
- [ ] Failure-handling specified: if `_nav.md` exists but Spawned-Children entry already exists for this direction-id, branch_inquiry HALTS with conflict message.

### P4 — Implementation guidance + commitment + recommendation

**Question:** Which spec files need to be edited, in what order, and what is the commitment status (ACTIONABLE / DEFERRED) given the user's bloat concern as N>1 evidence and the proposal's structural-fix shape?

**Verification criteria:**
- [ ] File-edit list specified:
  1. `homegrown/navigation/SKILL.md` — add per-run output filename pattern + NOT-include list.
  2. `homegrown/navigation/references/navigation.md` — add per-run output schema details (location, contents, timestamp); reference `_nav.md` for downstream tracking.
  3. `enes/runtime_environment/folder_based.md` — add `_nav.md` to the Optional Files section (alongside `_branches.md`); add the 5-section structure + ownership rules.
  4. `homegrown/protocols/branch_inquiry.md` — add optional `from_nav_direction:` flag and its coordination behavior.
- [ ] Commitment status named: **ACTIONABLE** (with justification — N>1 evidence: navigation bloat across ~28 prior inquiries; this is an organization-layer addition, not a discipline-spec rewrite; user explicitly requested structure to prevent bloat).
- [ ] Recommendation: ship the 4 file edits; user triggers implementation when ready.
- [ ] Frame-exit verification embedded as scope note: confirms the proposal addresses Navigation organization at the artifact-and-folder layer, not the cognitive-content layer (16-type taxonomy + 12 route fields = CANONICAL, out of scope per audit).
- [ ] Open Question O1 (operational protocols per non-spawn move types: REVISIT / MERGE / CONSOLIDATE / TEST) flagged as Research Frontier — separate inquiries needed.

---

## Step 5 — Map Interfaces

| From | To | What flows | Direction | Type |
|---|---|---|---|---|
| P1 | P2 | What /navigation produces (per-run output spec) — informs what NOT to include | one-way | Read |
| P1 | P3 | _nav.md Spawned-Children section spec — informs branch_inquiry's write target | one-way | Read |
| P1 | P4 | Full design summary — informs implementation file-list | one-way | Read |
| P2 | P4 | NOT-include list — informs SKILL.md edit | one-way | Read |
| P3 | P4 | Coordination flag — informs branch_inquiry.md edit | one-way | Read |

All flows one-way Reads. No bidirectional, no shared state, no circular.

### Hidden coupling check

- **Q: Does P3 (branch_inquiry coord) hide-couple with P2 (NOT-include)?** P2 says /navigation must NOT make selection decisions. P3 says branch_inquiry writes Spawned-Children when `from_nav_direction:` is present. Who triggers branch_inquiry? The Selector (after deciding to spawn). So Selector → branch_inquiry → updates `_nav.md`. /navigation never writes Spawned-Children. Boundary preserved.
- **Q: Does the open-item O2 (Open-Directions storage) hide-couple with P1's Runs/Selections sections?** Yes — Open-Directions is computed from Runs minus Selections. The "stored + verified" approach makes the dependency explicit; no hidden coupling.

No remaining hidden coupling.

---

## Step 6 — Order by Dependency

```
Step 1: P1 (HUB — core artifact specs)
Step 2: P2 (NOT-include) + P3 (branch_inquiry coord) — parallel, both read P1
Step 3: P4 (implementation + commitment) — synthesizes P1 + P2 + P3
```

### Reasoning

- **P1 first:** the hub. Every other piece reads from it.
- **P2 + P3 in parallel:** independent reads of P1.
- **P4 last:** synthesis with file-edit list, commitment, recommendation.

### Critical path

P1 → P4 via P2 + P3.

### No circular dependencies

Verified.

---

## Step 7 — Self-Evaluate

### Minimum 3-dimension evaluation

| Dimension | Check | Verdict | Notes |
|---|---|---|---|
| **Independence** | Each piece's question answerable without sibling pieces? | **PASS** | P2/P3 each read P1 only; P4 reads all upstream. No piece needs another's interior content. |
| **Completeness** | Pieces cover the whole? | **PASS** | All 9 elements (#1-#9 from Step 1) covered. Open-item O1 (operational protocols per non-spawn move) flagged as Research Frontier in P4. |
| **Reassembly** | Pieces + interfaces = whole? | **PASS** | P1 + P2 + P3 + P4 → complete proposal answering "what /navigation creates + what NOT-include + do we need _nav.md + organization structure + how to ship." |

### Determination-mechanism check

- **Determination at runtime:** "Should `_nav.md` be created in this folder?" — depends on whether Navigation has run.
- **Piece addressing how the check is performed:** P1 explicitly owns this. P1 verification criterion 5 (`_nav.md` is OPTIONAL rule) specifies the determination: file exists iff Navigation has run at least once. Pass.

- **Determination at runtime:** "Should branch_inquiry write to `_nav.md`?" — depends on `from_nav_direction:` flag presence.
- **Piece addressing how the check is performed:** P3 explicitly owns this. P3 verification criterion 2-3 specify behavior under flag-present and flag-absent. Pass.

- **Determination at runtime:** "Which N for the next per-run file?" — depends on existing files in the folder.
- **Piece addressing how the check is performed:** P1 implicitly owns; the directory-scan mechanism is trivial enough to leave inline.

### Full 7-dimension evaluation

| Dimension | Verdict | Notes |
|---|---|---|
| Independence | PASS | (above) |
| Completeness | PASS | (above) |
| Reassembly | PASS | (above) |
| Tractability | PASS | P1 hub is the largest (specs for 2 file types + vocabulary + 3 open items committed); P2-P3-P4 are smaller. All small enough for one focused pass. |
| Interface clarity | PASS | All flows tabulated; one-way Reads; hidden coupling checked. |
| Balance | PASS | P1 is heaviest (intentional hub-spoke); spokes proportional. |
| Confidence | PASS | Top-down ↔ bottom-up agreed. |

### Failure-mode self-check

- **Premature decomposition?** No — Sensemaking provided clear chain structure with 9 fixed variables before decomposition.
- **Wrong boundaries?** No — boundaries cut at low-coupling regions; design elements stay together within hub.
- **Hidden coupling?** Surfaced (P2/P3 boundary via Selector role; O2 via Runs/Selections); made explicit.
- **Missing pieces?** No — determination-mechanism check passed; all deliverable elements covered; O1 flagged as Research Frontier (deliberate scope cut).
- **Over-decomposition?** No — 4 pieces for a focused organization-layer proposal. None trivial.
- **Ignoring dependencies?** No — Step 6 explicit.
- **Imbalanced?** No — proportional.

---

## Final Deliverable

### Coupling Map

One hub (P1: core artifact specs with action-type vocabulary embedded), two spokes (P2: NOT-include list; P3: branch_inquiry coordination), one synthesis (P4: implementation + commitment).

### Question Tree

- **P1 — Core artifact specs** (hub): per-run `navigation_observer_<N>.md` + `_nav.md` 5 sections with split ownership + action-type vocabulary + open-item commitments (O2 Open-Directions storage; O3 History format; O4 cross-reference style).
- **P2 — NOT-include list** (spoke): 6 explicit exclusions for `/navigation` discipline output, each with proper destination.
- **P3 — branch_inquiry coordination** (spoke): optional `from_nav_direction:` flag with full behavior specification.
- **P4 — Implementation + commitment** (synthesis): 4-file edit list, ACTIONABLE commitment justification, frame-exit verification embedded as scope note, O1 flagged as Research Frontier.

### Interface Map

| From | To | Flow | Type |
|---|---|---|---|
| P1 | P2 | Per-run output spec | Read |
| P1 | P3 | Spawned-Children section spec | Read |
| P1 | P4 | Full design summary | Read |
| P2 | P4 | NOT-include list | Read |
| P3 | P4 | Coordination flag spec | Read |

### Dependency Order

```
Step 1: P1 (hub)
Step 2: P2 + P3 (parallel, read P1)
Step 3: P4 (synthesis, reads P1+P2+P3)
```

### Self-Evaluation

| Dimension | Verdict |
|---|---|
| Independence | PASS |
| Completeness | PASS |
| Reassembly | PASS |
| Tractability | PASS |
| Interface clarity | PASS |
| Balance | PASS |
| Confidence | PASS |
| Determination-mechanism check | PASS |

**8/8 PASS.** Decomposition committed; proceed to Innovation.

---

## Notes for next discipline

**Innovation should:**
1. Commit P1 — draft actual file templates and section schemas (with example content for clarity); commit O2 (stored + verified), O3 (structured History), O4 (explicit cross-references).
2. Commit P2 — exclusion list with destinations.
3. Commit P3 — flag specification with concrete branch_inquiry edit-points.
4. Commit P4 — 4-file edit list with ordering; ACTIONABLE commitment; frame-exit note; O1 Research Frontier.
5. Apply minimum mechanism coverage (1 generator + 1 framer) to validate the design against alternatives.

**Critique should:**
1. Test bloat-prevention claim — does this proposal actually consolidate or just add files?
2. Test ownership clarity — could the split-ownership pattern fail if multiple writers concurrent?
3. Test the ACTIONABLE commitment — is N>1 evidence (28-folder corpus) really sufficient, or should this be DEFERRED like the prior loop_diagnose candidates?
4. Test self-reference resistance — this proposal designs Navigation organization using disciplines that include /navigation.
5. Verify frame-exit check stays valid.
