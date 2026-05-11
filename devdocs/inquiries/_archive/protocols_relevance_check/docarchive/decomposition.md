# Decomposition: protocols_relevance_check

## User Input
devdocs/inquiries/protocols_relevance_check/_branch.md

Decompose the actual decisions the user must make about the protocols dimension into independently-answerable sub-questions with explicit interfaces and dependency order.

---

## The Whole Being Decomposed

After sensemaking, the user is left with **four distinct decisions/actions** plus one already-resolved verdict:

- **Already resolved (no decomposition needed):** The dimension (L2) is KEEP — sensemaking concluded the protocols dimension is structurally sound and load-bearing for the project's stated long-term goal. This is a fixed input to the rest of the decomposition, not a separate piece.
- **Outstanding:** What edits to make to `thinking_disciplines/protocols/desc.md`; whether to build VERSION now or defer; whether to add reciprocal cross-references in `loop_design_1/2/3.md`; how to reflect the autonomy-ladder mapping.

---

## Step 1 — Coupling Topology

### Elements (atomic decisions/actions)

| Atom | Description |
|---|---|
| a1 | Fix stale claim about metadata-injection hook (currently says "Exists and functional" — it's gone) |
| a2 | Fix stale claim about `/devdocs-archivist` (currently says "Exists" — gone; archival now embedded in /MVL & /MVL+) |
| a3 | Fix stale claim that RESUME "Currently lives inside /inquiry" (it's in all 3 loop runners) |
| a4 | Fix stale claim about folder convention path (`devdocs/folder_based.md` → `enes/runtime_environment/folder_based.md`) and "not battle-tested" (it is) |
| a5 | Update Current State count table (today says 7/3/6; reality is closer to 5+3 / 0 / 2 / 6) |
| a6 | Annotate the 6 missing protocols with capability-trigger build conditions (VERSION near-term; SCOPE/BRANCH/MERGE/HANDOFF/BRIEF deferred to specific autonomy-ladder rungs) |
| a7 | Decide what to do about the 2 GONE protocols' future (abandoned-permanently vs deferred-replacement) and reflect in the status table |
| a8 | Add cross-reference from `protocols/desc.md` to the loop_design series (`enes/loop_desing_ideas/loop_design_1.md` etc.) |
| a9 | Add an autonomy-ladder mapping section to `protocols/desc.md` showing how the 6 missing protocols correspond to specific Level-3+ capabilities in `enes/desc.md` |
| a10 | Add reciprocal cross-reference from `loop_design_1/2/3.md` back to `protocols/desc.md` |
| a11 | Decide whether to design + build VERSION protocol now, when /intuit Phase A produces iteration-comparable traces, or never |

### Coupling graph

For each pair, the propagation question: "if I change A, does B need to change?"

- **a1, a2, a3, a4, a5, a6, a7** all edit the same artifact (the per-protocol status table inside `protocols/desc.md`). Strong coupling — they share the same lines, same data, same surface area. Touching one without the others creates partial-update inconsistency.
- **a8, a9** add new content to `protocols/desc.md` in different sections. Loose coupling between them; loose coupling to the status-table cluster (different sections of the same file).
- **a10** edits 3 different files in `enes/loop_desing_ideas/`. No coupling to the protocols/desc.md edits.
- **a11** is a build commitment (not a doc edit) potentially producing a new spec file. Decoupled from doc maintenance entirely.

### Coupling map (visual)

```
                    [protocols/desc.md]
                    ─────┬──────┬──────
                         │      │
    ┌─────────────────┐  │  ┌───┴────────────────┐
    │ Status table    │  │  │ Additive content   │
    │ (a1-a7)         │  │  │ (a8, a9)           │
    │ STRONG cluster  │  │  │ MODERATE cluster   │
    └─────────────────┘  │  └────────────────────┘
                         │
                  [loose coupling: same file, different sections]

    ┌─────────────────────────┐    ┌──────────────────────┐
    │ loop_design_1/2/3.md    │    │ NEW protocol spec    │
    │ back-link (a10)         │    │ (VERSION) (a11)      │
    │ DECOUPLED from doc edits│    │ DECOUPLED            │
    └─────────────────────────┘    └──────────────────────┘
```

Two strong clusters in the protocols/desc.md file (status table; additive content), one decoupled file (loop_design back-link), one decoupled artifact (VERSION protocol build).

---

## Step 2 — Boundary Detection (Top-Down)

Natural cut points based on coupling valleys:

- **Boundary 1:** between status-table edits (a1-a7) and additive content (a8, a9). Same file but different sections; the edits don't conflict.
- **Boundary 2:** between protocols/desc.md edits and loop_design back-link (a10). Different files entirely.
- **Boundary 3:** between doc maintenance (a1-a10) and VERSION build commitment (a11). Different artifact, different cost profile, different risk profile.

Initial pieces:

- **P1 — Status table update** (a1, a2, a3, a4, a5, a6, a7)
- **P2 — Doc enrichment** (a8, a9)
- **P3 — Reciprocal loop_design back-link** (a10)
- **P4 — VERSION protocol build decision** (a11)

---

## Step 3 — Boundary Validation (Bottom-Up Sanity Check)

Atoms re-grouped from the bottom up:

- a1, a2, a3, a4 are all "stale entries to correct" — same kind of atom. Group together. ✓ matches P1.
- a5 (count table) is downstream of a1-a4 — also belongs in P1. ✓
- a6 (missing-protocol triggers) edits the same status table as a1-a5. ✓ P1.
- a7 (GONE protocols' future) edits the same status table. ✓ P1.
- a8, a9 are both "add new content to existing doc" — same kind of atom. ✓ matches P2.
- a10 is "different file." Single atom. ✓ matches P3.
- a11 is "build a new artifact." Single atom. ✓ matches P4.

Top-down and bottom-up agree on all 4 pieces. **High confidence on boundaries.**

---

## Step 4 — Question Tree

### P1 — How should `protocols/desc.md`'s status table be updated to reflect current codebase reality and autonomy-ladder-aligned build triggers?

**Verification criteria:**
- [ ] Metadata-injection hook entry: status changed from "Exists and functional" to "Removed (was hooks/devdocs_metadata_appender.sh; hooks/ directory deleted)"
- [ ] `/devdocs-archivist` entry: status changed to "Removed as standalone command; archival embedded in /MVL & /MVL+ termination steps"
- [ ] RESUME entry: location updated from "Currently lives inside /inquiry" to "Implemented in all three loop runners (/MVL, /MVL+, /inquiry)"
- [ ] Folder convention entry: path corrected to `enes/runtime_environment/folder_based.md`; "not battle-tested" removed
- [ ] Current State count table updated to reflect actual breakdown (5 alive-absorbed + 3 alive-partial + 2 gone + 6 missing)
- [ ] 6 missing protocols annotated with their capability-trigger build conditions (VERSION → near-term/Baldwin; SCOPE → Level 2; BRANCH/MERGE → parallel-loops; HANDOFF/BRIEF → Level 3+)
- [ ] 2 GONE protocols' future disposition recorded (abandoned vs deferred-replacement vs unknown)

### P2 — What new sections should be added to `protocols/desc.md` to surface its load-bearing role for the project's stated long-term goal?

**Verification criteria:**
- [ ] Cross-reference to `enes/loop_desing_ideas/loop_design_1.md` (and 2.md, 3.md) added — placed somewhere readers will find it (e.g., near the "Two Dimensions" section or as a "See also" footer)
- [ ] Autonomy-ladder mapping section added showing each of the 6 missing protocols and which Level-3+ capability in `enes/desc.md` it unblocks
- [ ] Decision recorded: do BOTH cross-reference AND autonomy-mapping land in this update, or just one?

### P3 — Should `loop_design_1/2/3.md` cross-reference `protocols/desc.md` back?

**Verification criteria:**
- [ ] Decision: yes / no / partial (e.g., only loop_design_1.md gets the back-link since it's the cross-runner taxonomy)
- [ ] If yes: exact placement identified per file (suggested: in `loop_design_1.md` near the "Design Principles" section; in 2.md and 3.md as a footer pointer)
- [ ] If partial: which subset and why

### P4 — Should the VERSION protocol be designed and built now, deferred until /intuit Phase A produces iteration-comparable traces, or deferred indefinitely?

**Verification criteria:**
- [ ] Decision: build-now / build-when-trigger-X / defer-indefinitely
- [ ] If build-now: scope decided (just-spec / spec-plus-integration-into-/MVL & /MVL+)
- [ ] If build-when-trigger-X: trigger named explicitly (e.g., "when /intuit Phase A produces ≥10 iteration-pair invocations")
- [ ] Failure-mode awareness: explicit acknowledgment that designing speculatively before /intuit Phase A produces concrete needs may produce wrong-shape spec

---

## Step 5 — Interface Map

| Source | Target | What flows | Direction |
|---|---|---|---|
| **P1** | P4 | The "VERSION near-term — when /intuit Phase A produces iteration-comparable traces" annotation in P1's status table feeds the trigger that P4's decision is about. P1 names the condition; P4 decides whether to act on it. | One-way (P1 → P4) |
| **P1** | P2 | P1 establishes corrected status table; P2 may want to reference up-to-date status when adding the autonomy-ladder mapping section ("see corrected status above"). Light dependency. | One-way (P1 → P2), light |
| **P2** | P3 | P2 adds forward cross-reference (protocols → loop_design); P3 adds the back-direction (loop_design → protocols). Conceptual pair, but P3 is OPTIONAL given P2 (one-way reference is acceptable). | Optional bidirectional |
| **P1** | P3 | None | No flow |
| **P2** | P4 | None | No flow |
| **P3** | P4 | None | No flow |

### Hidden coupling check

- Does P1 share unstated assumptions with P2? P1 assumes the status table is the right place to encode missing-protocol triggers; P2 assumes a new section (autonomy-mapping) can supplement that. Compatible — the table gives short triggers; the new section gives the explanation.
- Does P4 share unstated assumptions with P1? P4's decision depends on whether /intuit Phase A is producing iteration data. That's an external state — neither piece controls it. Both pieces should reference it explicitly so the dependency on /intuit's progress is visible.
- No timing-coupling, no shared mutable state across pieces.

---

## Step 6 — Dependency Order

```
   P1 ────────► P2 ────────► P3 (optional)
   │            │
   │            └──► P4 (P1 supplies trigger condition)
   │
   └────► P4
```

- **P1 first.** Cheapest piece; corrects errors before anyone reads them. ~30 lines of doc edits, ≤30 min.
- **P2 next (or in parallel with P1).** Different section of same file; doesn't conflict with P1's status-table edits. ~1 paragraph cross-reference + ~10-line autonomy-mapping section, ≤30 min.
- **P3 optional, after P2.** Adds back-direction cross-references in 3 files. Skip if user wants to keep edits minimal — one-way reference (P2 only) is sufficient for navigability.
- **P4 separate, async.** A decision, not an immediate build. Can be made before or after the doc edits; doesn't block them. Time depends on whether build-now is chosen (decision ≤15 min; build commitment hours-to-days).

### Parallel-able

- P1 and P2 can be done in one editing session on `protocols/desc.md` (they touch different sections; merge the edits at write time).
- P3 is parallel-able with P4 (different artifacts, no coupling).

### Critical path

P1 → P2 → P3 if doing all three. P4 is off the critical path.

If user wants minimum-viable: just P1. Stale-entry fixes alone make the doc accurate. Everything else (P2, P3, P4) is optional enrichment / build commitment.

---

## Step 7 — Self-Evaluation

### Minimum 3 dimensions (always)

| Dimension | Check | Verdict |
|---|---|---|
| **Independence** | Each piece's question answerable without reading sibling pieces (except via defined interfaces) | **PASS.** P1 answerable from exploration + sensemaking. P2 answerable from sensemaking insight. P3 answerable from a yes/no decision plus minor placement choice. P4 answerable from sensemaking + status of /intuit Phase A. |
| **Completeness** | Pieces cover the whole; nothing falls through gaps | **PASS.** L1 doc verdict (UPDATE) is covered by P1+P2. L2 dimension verdict (KEEP) was already resolved (no piece needed). L3 named protocols verdict (per-protocol triage) is covered by P1's status-table updates. VERSION near-term build is covered by P4. Cross-reference work is covered by P2 (one-way) plus optional P3 (bidirectional). |
| **Reassembly** | Pieces + interfaces solve original problem | **PASS.** P1 done → doc reflects reality + autonomy-aligned triggers. P2 done → doc connects to loop_design and autonomy ladder. P3 done (optional) → bidirectional cross-references. P4 done → clear VERSION build decision. Together: original audit question fully answered with actionable next steps. |

### Full 7 dimensions (worth checking — high-stakes architectural maintenance)

| Dimension | Verdict | Notes |
|---|---|---|
| Independence | PASS | (above) |
| Completeness | PASS | (above) |
| Reassembly | PASS | (above) |
| **Tractability** | PASS | P1 ~30 lines edit; P2 ~1 paragraph + 1 section; P3 ~3 small edits; P4 decision-only. Each fits one focused pass. |
| **Interface clarity** | PASS | All flows explicit (table above). Hidden-coupling check ran — found one external dependency (status of /intuit Phase A) and surfaced it. |
| **Balance** | PASS | P1 is largest doc work; P2 medium; P3 small; P4 decision. Roughly proportional. No 80/20 imbalance. |
| **Confidence** | HIGH | Top-down (4 clusters from coupling map) and bottom-up (atoms grouping) agreed on all 4 pieces. |

All 7 dimensions pass.

---

## Final Deliverable

### Coupling Map
2 strong clusters in `protocols/desc.md` (status table; additive content), 1 decoupled file (loop_design back-link), 1 decoupled artifact (VERSION build).

### Question Tree (4 pieces)

| # | Question | Type | Cost |
|---|---|---|---|
| **P1** | How should `protocols/desc.md`'s status table be updated to reflect current codebase reality and autonomy-ladder-aligned build triggers? | Doc maintenance | ~30 min |
| **P2** | What new sections should be added to `protocols/desc.md` to surface its load-bearing role for the long-term goal? | Doc enrichment | ~30 min |
| **P3** | Should `loop_design_1/2/3.md` cross-reference `protocols/desc.md` back? | Reciprocal link decision + small edits | ~15 min if yes; 0 min if no |
| **P4** | Should the VERSION protocol be designed and built now, deferred to a named trigger, or deferred indefinitely? | Build commitment decision | Decision ≤15 min; build hours-to-days |

### Interface Map (only non-trivial flows)

- **P1 → P2**: P1's corrected status feeds P2's autonomy-mapping section. Light, one-way.
- **P1 → P4**: P1's annotation of VERSION's trigger feeds P4's decision. Light, one-way.
- **P2 ↔ P3**: P2 establishes forward link; P3 makes it bidirectional. Optional.

### Dependency Order

1. **P1** (first — cheapest, corrects errors)
2. **P2** (in parallel with P1 or right after)
3. **P3** (optional, after P2)
4. **P4** (separate, async)

### Self-Evaluation

All 7 dimensions PASS. High confidence on the partition.

### Notes for Innovation

- Innovation should propose concrete designs for P1 (specific status-table edits with new wording), P2 (specific autonomy-mapping table content + specific cross-reference placement), and P4 (build-now vs trigger-X vs defer with explicit reasoning per option). P3 is small enough that innovation can collapse it into a single yes-recommendation with placement.
- The 4 pieces are independent enough that innovation can produce designs in parallel; critique can then evaluate each on its own dimensions (cost, accuracy-preservation, navigability for P1+P2; impact on long-term-goal-coherence for P4).
- VERSION (P4) is the only piece where the user might want a deeper SIC pass before deciding — innovation should surface that as an option (e.g., "RUN /MVL on 'when should VERSION be built' as a sub-inquiry" if P4 turns out underspecified after this loop).
