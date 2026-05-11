# Decomposition: telemetry_routing_protocol_classification

## User Input

Decompose the migration plan from sensemaking (Candidate A — doctrine-aligned full extraction of RESUME protocol) into independently-answerable pieces with interfaces and dependency order.

---

## Step 1 — Coupling Topology

### Atoms identified

**Discipline-update atoms (5):**
- D1: sense-making telemetry section adds explicit `Overall: PROCEED / FLAG / RE-RUN`
- D2: td-critique telemetry section adds explicit `Overall: PROCEED / FLAG / RE-RUN`
- D3: explore Convergence Criteria area adds PROCEED/FLAG/RE-RUN
- D4: decompose Self-Evaluate area adds PROCEED/FLAG/RE-RUN
- D5: comprehend Convergence Criteria area adds PROCEED/FLAG/RE-RUN

**Reflect decision atom (1):**
- D6: decide reflect's self-assessment shape (advisory, not PROCEED/FLAG/RE-RUN routing)

**Protocol creation atom (1):**
- P1: create `homegrown/protocols/resume.md` (CONCLUDE pattern)

**Runner integration atoms (2):**
- R1: replace `/MVL.md` RESUME branch with load+execute resume.md
- R2: replace `/MVL+.md` RESUME branch with load+execute resume.md

**Map update atom (1):**
- M1: update `thinking_disciplines/protocols/desc.md` — extend RESUME description (line 104), move RESUME to alive-extracted, update Current State counts

**Coordination atom (1):**
- C1: coordinate with `/inquiry` deletion plan (prior sensemaking) — the deletion verdict stands; this inquiry supersedes the inline-migration target

### Coupling map

| Atom | Depends on | Coupling | Reason |
|---|---|---|---|
| D1-D5 | (none — independent of each other) | NONE | Each updates its own discipline files |
| D1-D5 | innovate's pattern | WEAK | Template; not file-coupled |
| D6 | (none) | NONE | Decision; affects whether reflect appears in Pieces 1-5 |
| P1 | D1-D5 | STRONG | resume.md needs to know each discipline's verdict format; standardized first |
| P1 | CONCLUDE precedent | WEAK | Template; not file-coupled |
| R1, R2 | P1 | STRONG | Runners load+execute resume.md; needs resume.md to exist |
| M1 | P1 | MODERATE | protocols/desc.md describes RESUME's actual scope; updates after extraction |
| M1 | C1 | MODERATE | If coordinated with /inquiry deletion's protocols/desc.md updates, single editing pass |
| C1 | (this inquiry's verdict) | WEAK | This inquiry SUPERSEDES the inline-migration target; the deletion still happens |

### Major clusters

- **CLUSTER D (Discipline standardization):** D1, D2, D3, D4, D5 + D6 decision. Independent within cluster (each discipline self-contained). Prerequisite for protocol extraction.
- **CLUSTER P (Protocol extraction):** P1 + R1 + R2 + M1. Sequential within cluster (P1 → R1, R2; P1 → M1). Depends on Cluster D.
- **COORDINATION (C1):** standalone; integrates with prior /inquiry-deletion plan.

---

## Step 2 — Boundaries

- **Boundary 1 (Disciplines / Protocol):** Cluster D updates discipline files; Cluster P creates and integrates the protocol. Boundary between "judging in disciplines" (D) and "routing in protocol" (P) — the doctrine-correct split itself.
- **Boundary 2 (Within Cluster D):** each discipline is its own piece. Independent — no cross-discipline shared state.
- **Boundary 3 (Within Cluster P):** P1 (creation) precedes R1, R2 (integration) precedes M1 (map update).
- **Boundary 4 (D6 / Cluster D):** D6 is a decision, not an edit. It determines whether reflect joins Cluster D's discipline-update workflow or stays exempt.
- **Boundary 5 (Coordination / Migration):** C1 is a coordination concern with the prior /inquiry-deletion plan; it doesn't touch new files but updates the relationship between findings.

---

## Step 3 — Boundary Validation (Bottom-Up)

Atoms map cleanly to clusters:
- 5 discipline updates → Cluster D ✓
- 1 reflect decision → D6 (in Cluster D as a decision-atom) ✓
- 1 protocol creation → P1 (Cluster P) ✓
- 2 runner integrations → R1, R2 (Cluster P, post-P1) ✓
- 1 map update → M1 (Cluster P, post-P1) ✓
- 1 coordination → C1 (Coordination cluster) ✓

No atoms split across clusters; no cluster groups atoms that don't belong together. **HIGH confidence on boundaries.**

---

## Step 4 — Question Tree

### Piece 1: Standardize sense-making's telemetry section

**Question:** What explicit `Overall: PROCEED / FLAG / RE-RUN` line should be added to sense-making's telemetry section, and what threshold logic produces each verdict?

**Verification:**
- [ ] `homegrown/sense-making/references/sensemaking.md` Saturation Indicators section gains an explicit `Overall: PROCEED / FLAG / RE-RUN` line at the end.
- [ ] `commands/sense-making.md` parallel update applied.
- [ ] Threshold logic articulated (e.g., PROCEED if ≥3 perspectives produced new types of anchors AND SV delta is structural AND ambiguity-resolution-ratio ≥70%; FLAG if any one of these is below threshold; RE-RUN if multiple critical thresholds missed).
- [ ] Wording integrates with existing "indicators, not gates" framing OR explicitly supersedes it.

**Cluster:** D. **Atom:** D1.

### Piece 2: Standardize td-critique's telemetry section

**Question:** Does td-critique's existing Convergence Telemetry section need a new `Overall: PROCEED / FLAG / RE-RUN` line or does its existing format already produce a verdict?

**Verification:**
- [ ] Inspect td-critique's existing Convergence Telemetry section in both `homegrown/td-critique/references/td-critique.md` and `commands/td-critique.md`.
- [ ] If existing section produces verdict — preserve as-is; mark conformant.
- [ ] If not — add explicit `Overall: PROCEED / FLAG / RE-RUN` line with threshold logic (e.g., PROCEED if all critical-weight dimensions evaluated AND adversarial strength STRONG AND clean SURVIVE exists; FLAG if weak prosecution OR caveats on critical dimensions; RE-RUN if failure mode detected OR no candidates evaluated).

**Cluster:** D. **Atom:** D2.

### Piece 3: Standardize explore's telemetry section

**Question:** What explicit `Overall: PROCEED / FLAG / RE-RUN` line should be added to explore's Convergence Criteria area?

**Verification:**
- [ ] `homegrown/explore/references/explore.md` and `commands/explore.md` updated.
- [ ] Threshold logic: PROCEED if all 3 convergence criteria met (frontier stability + declining discovery rate + bounded gaps); FLAG if 2 of 3 met; RE-RUN if 0-1 met OR jump scan revealed surprises.

**Cluster:** D. **Atom:** D3.

### Piece 4: Standardize decompose's telemetry section

**Question:** What explicit `Overall: PROCEED / FLAG / RE-RUN` line should be added to decompose's Self-Evaluate / Coverage Strategy area?

**Verification:**
- [ ] `homegrown/decompose/references/decompose.md` and `commands/decompose.md` updated.
- [ ] Threshold logic: PROCEED if minimum 3 dimensions pass (independence, completeness, reassembly); FLAG if 2 of 3 OR any 4-7 dimension failures noted; RE-RUN if independence or completeness fails (critical-weight failures).

**Cluster:** D. **Atom:** D4.

### Piece 5: Standardize comprehend's telemetry section

**Question:** What explicit `Overall: PROCEED / FLAG / RE-RUN` line should be added to comprehend's Convergence Criteria area?

**Verification:**
- [ ] `homegrown/comprehend/references/comprehend.md` and `commands/comprehend.md` updated.
- [ ] Threshold logic: PROCEED if depth test passes at target CV level AND prediction accuracy meets threshold AND adversarial stability holds; FLAG if borderline; RE-RUN if depth test fails OR adversarial breaks model.

**Cluster:** D. **Atom:** D5.

### Piece 6: Decide reflect's self-assessment shape

**Question:** Does reflect get PROCEED/FLAG/RE-RUN parity with the other 6 disciplines, or does it have a different self-assessment shape (advisory, not routing)?

**Verification:**
- [ ] Decision recorded in this finding's Next Actions.
- [ ] If exempt (sensemaking's recommendation): reflect's self-assessment is shaped advisory ("did this reflection notice actionable patterns?"); resume.md treats reflect specially OR doesn't read reflect's verdict at all.
- [ ] If parity (defensible variant): apply the same PROCEED/FLAG/RE-RUN pattern to reflect; sensemaking's exemption argument is reversed.
- [ ] Open Question: whether reflect's observations may produce DIAGNOSE-like signals affecting routing.

**Cluster:** D. **Atom:** D6 (decision).

### Piece 7: Create homegrown/protocols/resume.md

**Question:** What does `homegrown/protocols/resume.md` contain — what's the Loading note, the pipeline-detection logic, the read-each-completed-verdict step, the routing logic, the failure modes?

**Verification:**
- [ ] File created at `homegrown/protocols/resume.md`.
- [ ] Loading note matches CONCLUDE's pattern.
- [ ] Step 1: pipeline detection (classic / extended / other — read from `_state.md`).
- [ ] Step 2: for each completed discipline output file, read its `Overall: PROCEED / FLAG / RE-RUN` verdict.
- [ ] Step 3: route based on verdict (PROCEED → set Next Discipline to next in pipeline; FLAG → present shortfall to user with options, wait; RE-RUN → recommend re-running with feedback).
- [ ] Step 4: handle reflect appropriately (per Piece 6's decision).
- [ ] Step 5: update `_state.md` with Next Discipline.
- [ ] Failure modes: missing telemetry section (backward-compat treat as PROCEED); pipeline detection failure; reflect's special handling.

**Cluster:** P. **Atom:** P1. **Depends on:** Pieces 1-6.

### Piece 8: Update /MVL.md to load+execute resume.md

**Question:** What's the specific edit to `/MVL.md` RESUME branch (currently lines 72-77) to invoke resume.md?

**Verification:**
- [ ] `/MVL.md` RESUME branch replaced with: "Load `homegrown/protocols/resume.md` in full and execute the **RESUME** protocol on this inquiry's folder. RESUME reads `_state.md`, reads each completed discipline's telemetry verdict, and routes the loop accordingly (PROCEED to next discipline / FLAG with shortfall to user / RE-RUN with feedback)."
- [ ] Cross-Session Resume section preserved (currently exists in /MVL.md).

**Cluster:** P. **Atom:** R1. **Depends on:** P1.

### Piece 9: Update /MVL+.md to load+execute resume.md

**Question:** Same as Piece 8 but for `/MVL+.md`'s RESUME branch (lines 76-82).

**Verification:**
- [ ] `/MVL+.md` RESUME branch replaced with same load+execute pattern as Piece 8.
- [ ] Extended-pipeline awareness preserved (resume.md's Step 1 detects extended pipeline from `_state.md`'s flow-type field).

**Cluster:** P. **Atom:** R2. **Depends on:** P1.

### Piece 10: Update protocols/desc.md

**Question:** What changes does `thinking_disciplines/protocols/desc.md` need to reflect RESUME's actual scope (telemetry-aware routing, not just file-based state continuation) and its alive-extracted status?

**Verification:**
- [ ] RESUME description (line 104) updated to: "Pick up a saved inquiry across sessions OR between disciplines. Read `_state.md`, read each completed discipline's telemetry verdict (PROCEED/FLAG/RE-RUN), route the loop accordingly. Implemented as `homegrown/protocols/resume.md`; loaded by `/MVL`, `/MVL+`, and any future runner."
- [ ] Current State table (line 138-142): RESUME's count placement updated. If currently in "Exists and functional" group, stays there but with updated note ("alive-extracted" rather than "Currently lives inside `/inquiry`"). Counts adjusted.
- [ ] Coordination with synthesize_vs_finding_split's pending Configuration β (split SYNTHESIZE entry) noted if applicable.

**Cluster:** P. **Atom:** M1. **Depends on:** P1.

### Piece 11: Coordinate with /inquiry-deletion plan

**Question:** How does this inquiry's verdict reconcile with the prior `inquiry_md_post_navigation_update_value_check` sensemaking's recommendation (which proposed Candidate B inline migration)?

**Verification:**
- [ ] This finding's frontmatter expresses the supersession of the prior sensemaking on the migration-target question.
- [ ] /inquiry deletion verdict from prior sensemaking STANDS (not affected by this inquiry).
- [ ] Migration target updates: extract resume.md (this inquiry) instead of inline migration into /MVL/MVL+ (prior sensemaking).
- [ ] If applying both punch lists in one editing session: order is (1) discipline updates, (2) create resume.md, (3) /MVL/MVL+ updates including BOTH RESUME extraction AND CONCLUDE invocation already in place, (4) /inquiry deletion (after Piece 7-9 lands so /MVL/MVL+ have working RESUME), (5) protocols/desc.md updates.

**Cluster:** Coordination. **Atom:** C1.

---

## Step 5 — Interface Map

| From | To | What flows | Direction |
|---|---|---|---|
| Pieces 1-5 | Piece 7 (resume.md) | Each discipline's PROCEED/FLAG/RE-RUN verdict format | One-way (D → P) |
| Piece 6 (reflect decision) | Piece 7 (resume.md) | Reflect's self-assessment shape (handles specially or read like others) | One-way |
| Piece 6 (reflect decision) | (potentially) Cluster D | If parity chosen: reflect joins Pieces 1-5 as Piece 5.5 | Conditional |
| Piece 7 (resume.md) | Pieces 8, 9 (R1, R2) | resume.md exists, load+execute pattern reference | One-way (P1 → R1, R2) |
| Piece 7 (resume.md) | Piece 10 (M1) | RESUME's actual scope post-extraction | One-way |
| Piece 11 (C1) | Pieces 8, 9, 10 | Coordination order with /inquiry-deletion | Soft constraint |

No circular dependencies.

---

## Step 6 — Dependency Order

### Phase 0: Decisions

- **Piece 6 (reflect decision):** decision-atom; resolves before edits begin. ~5 min.

### Phase 1: Discipline updates (parallel)

- **Pieces 1, 2, 3, 4, 5** can proceed in parallel. Each updates ~2 files (homegrown reference + commands file). ~10 min each.

### Phase 2: Protocol creation

- **Piece 7 (resume.md):** sequential after Phase 1 (needs the verdict format from each discipline). ~30 min.

### Phase 3: Integration (parallel after Piece 7)

- **Pieces 8, 9 (MVL/MVL+ updates):** parallel-feasible. ~5 min each.
- **Piece 10 (protocols/desc.md):** parallel-feasible with Pieces 8, 9. ~5 min.

### Phase 4: Coordination

- **Piece 11 (coordination with /inquiry deletion):** can be drafted alongside Phase 0; applied as part of finalization. ~5 min.

### Total ordering

```
Phase 0 (decision):
  └── Piece 6 (reflect)  ~5 min

Phase 1 (disciplines, parallel):
  ├── Piece 1 (sense-making)       ~10 min
  ├── Piece 2 (td-critique)        ~10 min
  ├── Piece 3 (explore)            ~10 min
  ├── Piece 4 (decompose)          ~10 min
  └── Piece 5 (comprehend)         ~10 min

Phase 2 (protocol):
  └── Piece 7 (resume.md)          ~30 min

Phase 3 (integration, parallel):
  ├── Piece 8 (/MVL.md)            ~5 min
  ├── Piece 9 (/MVL+.md)           ~5 min
  └── Piece 10 (protocols/desc.md) ~5 min

Phase 4 (coordination):
  └── Piece 11 (with /inquiry-deletion) ~5 min
```

**Total estimated time:** ~1.5-2.5 hours focused editing.

---

## Step 7 — Self-Evaluation

### Minimum 3-dimension check

| Dimension | Pass/Fail | Reasoning |
|---|---|---|
| **Independence** | ✓ PASS | Pieces 1-5 are genuinely independent; Piece 6 is a decision-atom; Pieces 7-10 have explicit interface dependencies handled by phasing. |
| **Completeness** | ✓ PASS | The 11 pieces cover the full Candidate A migration plan from sensemaking. Reassembly check: given all answered → telemetry-routing extracted as RESUME protocol; doctrine alignment achieved. |
| **Reassembly** | ✓ PASS | Phases 1 → 2 → 3 → 4 produce working RESUME extraction with disciplines self-assessing, /MVL/MVL+ invoking resume.md, protocols/desc.md updated, and coordination with /inquiry deletion clear. |

### Full 7-dimension check

| Dimension | Score | Reasoning |
|---|---|---|
| Independence | ✓ HIGH | Pieces 1-5 independent; phases ordered; interfaces explicit. |
| Completeness | ✓ HIGH | Sensemaking's full migration plan covered. |
| Reassembly | ✓ HIGH | Phasing produces the architectural endpoint. |
| Tractability | ✓ HIGH | Each piece is 5-30 min focused work. |
| Interface clarity | ✓ HIGH | Cross-piece flows mapped in Step 5. |
| Balance | ✓ ACCEPTABLE | Piece 7 (resume.md, 30 min) is heaviest; Pieces 1-5 each ~10 min; integration pieces ~5 min each. Proportional. |
| Confidence | ✓ HIGH | Top-down + bottom-up agree on all boundaries. |

### Failure mode self-check

- Premature decomposition? No — sensemaking concluded Candidate A with HIGH confidence.
- Wrong boundaries? No — boundaries cut at low-coupling regions (per-discipline; protocol-creation vs runner-integration).
- Hidden coupling? Captured: Piece 7 depends on Pieces 1-5 explicitly; Pieces 8, 9 depend on Piece 7.
- Missing pieces? No — reassembly check passes.
- Over-decomposition? 11 pieces for ~13 file edits is reasonable density.
- Imbalanced? Piece 7 is heaviest but proportional to substantive editing.
- Ignoring dependencies? No — phasing explicit.

---

## Final Deliverable

### Question Tree (11 pieces)

1. Standardize sense-making's telemetry to PROCEED/FLAG/RE-RUN
2. Standardize td-critique's telemetry to PROCEED/FLAG/RE-RUN
3. Standardize explore's Convergence Criteria to PROCEED/FLAG/RE-RUN
4. Standardize decompose's Self-Evaluate to PROCEED/FLAG/RE-RUN
5. Standardize comprehend's Convergence Criteria to PROCEED/FLAG/RE-RUN
6. Decide reflect's self-assessment shape (advisory vs parity)
7. Create homegrown/protocols/resume.md (CONCLUDE pattern)
8. Update /MVL.md RESUME branch to load+execute resume.md
9. Update /MVL+.md RESUME branch to load+execute resume.md
10. Update thinking_disciplines/protocols/desc.md (RESUME description + status)
11. Coordinate with /inquiry-deletion plan (supersedes inline-migration target)

### Dependency Order

Phase 0 (decision): Piece 6.
Phase 1 (disciplines, parallel): Pieces 1, 2, 3, 4, 5.
Phase 2 (protocol): Piece 7.
Phase 3 (integration, parallel): Pieces 8, 9, 10.
Phase 4 (coordination): Piece 11.

### Self-Evaluation: PASS on all 7 dimensions.

**Decomposition committed. Innovation will propose concrete designs per piece; critique will evaluate.**
