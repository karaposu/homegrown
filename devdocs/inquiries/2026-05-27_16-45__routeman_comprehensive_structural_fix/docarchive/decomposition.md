# Decomposition — routeman_comprehensive_structural_fix

## User Input

/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-27_16-45__routeman_comprehensive_structural_fix/_branch.md

Read in this order:
1. _branch.md (STRUCTURAL Layer Commitment; 2 observation targets)
2. surfacing.md (41 items; 10 frontier flags; live spec older than priors; β-layer absent; 4-axis table absent)
3. sensemaking.md (SV6 stabilized: section-keyed flat delta-list with 4 row-types — ACTIVE/NO-OP CONFIRM/RESIDUE/SUPERSEDED-NO-OP — and 3-pass landing-order CUT→ADD→REPAIR; ~22-25 rows; provenance column)

Decomposition purpose: partition the production of the consolidated amendment plan deliverable into pieces Innovation can operate on. Synthesis-shape inquiry — partition-for-confirmation, not partition-for-option-evaluation. The 8 candidate pieces were already named by Sensemaking. Decomposition's job is to verify their coupling topology + boundaries + interfaces + dependency order + self-evaluation.

Out of scope: re-litigating Sensemaking's adjudications; designing bounded-follow-up inquiries; authoring institutional memory file.

---

## Step 1 — Perceive Coupling Topology

The complex whole being decomposed: **the production of one consolidated amendment plan deliverable for the live routeman.md spec**.

### Elements in the whole

1. **Row-type vocabulary** (ACTIVE / NO-OP CONFIRM / RESIDUE / SUPERSEDED-NO-OP) — used by every row.
2. **Landing-order definition** (CUT → ADD → REPAIR — 3 passes) — used by every ACTIVE + RESIDUE row.
3. **Delta-table schema** (columns: # / Spec section / Action / Status / Provenance / Edit description / Cross-section dependency / Landing-pass) — used by every row.
4. **ACTIVE rows** (~12-15 rows: 13-23 cuts + 00-51 telemetry + 00-51 §5.8 + 00-51 γ-field REPAIR + 14-49 read-policy additions + 14-49 stage-2 note + 14-49 §3.5 cross-reference).
5. **NO-OP CONFIRM rows** (~3-5 rows: 00-51 alias drop + 00-51 7-status + 00-51 §5.5 wrapper + 13-23 REVISED-1 Movement + 13-23 REVISED-2 Unlocks).
6. **SUPERSEDED-NO-OP row** (1 row: 13-23 NEW-5 4-axis-to-2-axis reduction — no table to reduce).
7. **RESIDUE rows** (~6 rows: §1.4 vocab cleanup, §2.4 prose cleanup, §3.4 Assembly bullet cleanup, §4.2 failure-mode field-list cleanup, §5 prologue framing, NOW SOLID INSTRUCTIONS mirror).
8. **Coverage map** — audit table mapping each prior's delta-rows to consolidated-delta rows; ensures no drops.
9. **Open Questions / Gaps** — institutional memory; cross-discipline naming-pattern; session-context poison; bounded follow-ups; cross-discipline read-policy vocabulary unification.
10. **Finding deliverable shape spec** — the CONCLUDE-template-compliant deliverable structure (Question + Finding Summary + Finding + Inherited Commitments Re-test + Next Actions + Reasoning + Open Questions + Source Input).

### Pairwise coupling analysis

| Pair | Coupling strength | Reasoning |
|---|---|---|
| Vocab + Landing-order + Schema | STRONG (cluster) | All three define the substrate every downstream piece uses. Change one (e.g., add a 5th row-type) → must change others. Cluster these into one piece. |
| ACTIVE rows + NO-OP CONFIRM rows | WEAK | Both consume substrate; the rows' content is independent (one's text doesn't determine the other's). They share schema but not content. |
| ACTIVE + SUPERSEDED-NO-OP | WEAK | Same reasoning. |
| ACTIVE + RESIDUE | WEAK | Independent content; RESIDUE rows reference fields that ACTIVE rows cut, but that's an APPLICATION-time dependency (the landing-pass order resolves it), not a PRODUCTION-time coupling. |
| NO-OP CONFIRM + SUPERSEDED-NO-OP | WEAK | Both are audit-trail row-types; their content is independent. |
| Row-production pieces + Coverage map | MODERATE | Coverage map audits the produced rows against priors' delta-lists. Must come after rows are produced. Interface: "list of produced rows + provenance per row." |
| Open Questions + Row-production | WEAK | Open Questions content depends on what's IN scope vs OUT of scope (a Sensemaking decision), not on specific row text. Largely independent. |
| Finding deliverable shape + Row-production + Coverage map + Open Questions | MODERATE | The finding integrates all upstream outputs. Must come last. Interface: "consolidated delta + coverage map + open questions + reasoning narrative." |
| Substrate + Row-production | STRONG | Every row uses substrate vocabulary + schema. Substrate is precondition. |

### Coarse coupling map

```
                         P1 Substrate
                  (vocab + landing-order + schema)
                   /     |       |       |       \
                  /      |       |       |        \
                 v       v       v       v         v
              P2        P3      P4      P5        P7
            ACTIVE    NO-OP   SUPER-  RESIDUE   Open Q's
             rows    CONFIRM    NO-OP   rows    + Gaps
              \        |        |       /         /
               \       |        |      /         /
                v      v        v     v         v
                       P6 Coverage map
                              |
                              v
                         P8 Finding
                       integration
```

### Major clusters and boundaries

- **Cluster 1 (substrate):** Vocabulary + landing-order + delta-table schema. Internal coupling STRONG; external coupling MODERATE (everyone consumes it).
- **Cluster 2 (row production, parallel):** P2 + P3 + P4 + P5. Each is internally cohesive; pairwise externally INDEPENDENT (different content; shared substrate only).
- **Cluster 3 (audit + scope-framing):** P6 + P7. Both depend on Cluster 2 outputs; weakly coupled to each other (Open Questions sometimes reference coverage-map findings, but largely independent).
- **Cluster 4 (integration):** P8. Depends on all upstream.

The major boundaries are at the Cluster transitions:
- Cluster 1 → Cluster 2 (substrate-then-rows)
- Cluster 2 → Cluster 3 (rows-then-audit)
- Cluster 3 → Cluster 4 (audit-then-finding)

---

## Step 2 — Detect Boundaries (Top-Down)

From the coupling map, natural cut points are the cluster transitions identified above:

**Boundary B1:** Between P1 (substrate) and {P2/P3/P4/P5/P7} (parallel row-production + scope-framing). Low crossing traffic: substrate provides vocabulary + schema; downstream consumes. One-way flow.

**Boundary B2 (multi-way):** Between {P2/P3/P4/P5} (rows) and P6 (coverage map). P6 must wait for rows to exist. One-way flow.

**Boundary B3:** Between {P2/P3/P4/P5/P6/P7} (rows + coverage + gaps) and P8 (finding). P8 integrates upstream. Multi-way flow into P8.

**Boundary B4 (parallel-set boundary):** Among P2/P3/P4/P5 — each is independent piece-production. No boundary BETWEEN them; they ARE the parallel set under boundary B1.

**Initial boundary set (8 pieces):** P1 | P2 | P3 | P4 | P5 | P6 | P7 | P8.

---

## Step 3 — Validate Boundaries (Bottom-Up Check)

Identify the obvious irreducible atoms and check if they group consistently with Step 2's clusters.

### Atoms

1. **Atom: 4-row-type vocabulary** — irreducible; can't define 1 row-type without the others (the type-set is mutually-defining).
2. **Atom: 3-pass landing-order** — irreducible; defining only CUT or only ADD doesn't make sense without the other.
3. **Atom: 8-column schema** — irreducible; the schema is one table-shape.
4. **Atom: each individual row content** — each row is a discrete unit (a section identifier + an edit description + provenance + status + landing-pass).
5. **Atom: coverage-map row** — each row maps one prior's delta-row → consolidated row(s).
6. **Atom: each Open Question entry** — discrete.
7. **Atom: finding section** — discrete by CONCLUDE template.

### Grouping check

- Atoms 1-3 (substrate atoms) cluster naturally → P1. ✓
- Atom 4 atoms split into 4 sub-groups by row-type → P2 + P3 + P4 + P5. ✓
- Atom 5 atoms cluster naturally → P6. ✓
- Atom 6 atoms cluster naturally → P7. ✓
- Atom 7 atoms cluster naturally → P8. ✓

### Atom-split check

Are there atoms Step 2's boundaries split apart? No — all atoms map cleanly into a single piece.

Are there atoms Step 2 grouped together but that are actually independent? No — within each piece, atoms share content axis (substrate atoms share definitional role; row-production atoms within a row-type share content axis).

**Confidence:** HIGH on all 8 boundaries (top-down + bottom-up agree).

---

## Step 4 — Express as Question Tree

Each piece as a question with verification criteria.

### P1 — Substrate
**Question:** What is the consolidated delta's row-type vocabulary, landing-order, and table schema?

**Verification criteria:**
- [ ] 4 row-types defined (ACTIVE / NO-OP CONFIRM / RESIDUE / SUPERSEDED-NO-OP), each with operational meaning + audit role.
- [ ] 3-pass landing-order defined (CUT / ADD / REPAIR), each with rule for which row-type-and-action-combos belong to that pass.
- [ ] Delta-table schema's 8 columns named (# / Spec section / Action / Status / Provenance / Edit description / Cross-section dependency / Landing-pass) with semantics per column.
- [ ] Substrate is project-coined vocabulary, surfaced as Open Question for cross-discipline unification (per 14-49 finding's analogous flag).

### P2 — ACTIVE rows
**Question:** What are the consolidated delta's ACTIVE rows (rows that change the live spec)?

**Verification criteria:**
- [ ] Each row has: # / Spec section / Action (ADD-CONTENT / REMOVE / REPAIR / REPLACE) / Status=ACTIVE / Provenance / Edit description / Landing-pass (1 / 2 / 3).
- [ ] All 13-23 active subset rows present (CUT Purpose / CUT Continuation Note / CUT Continuation Memory group-header / Update "5 purpose-groups" prose).
- [ ] All 00-51 active subset rows present (§3.1 diagram parameter cleanup / §3.2 parameter cleanup / §3.5 parameter cleanup / §2.4 chain reference update / §5.6 telemetry trim / §5.8 _route.md ADD / γ-field REPAIR rule).
- [ ] All 14-49 active subset rows present (§3.2 read-policy vocab / §3.2 graceful-degrade / §3.2 routeman.md MWA rule / §3.2 _route.md SHOULD rule / §3.3 stage-2 note / §3.5 cross-reference).
- [ ] Each row's Edit description is concrete-enough-to-apply (not just "edit §X" but specific content: "Add prose: ...").
- [ ] Landing-pass assignment correct: CUTs in pass 1; ADDs in pass 2; REPAIRs in pass 3.

### P3 — NO-OP CONFIRM rows
**Question:** What are the consolidated delta's NO-OP CONFIRM rows (rows where the prior's commitment is already satisfied in the live spec)?

**Verification criteria:**
- [ ] Each row has the standard 8-column schema with Status=NO-OP CONFIRM.
- [ ] Each row identifies WHICH specific live-spec content satisfies the prior's commitment (evidence-cited).
- [ ] All 4 expected NO-OPs present: 00-51 7-status enum (live §1.4 line 55); 00-51 alias drop (no _navig.md/_frontier.md references via grep); 00-51 §5.5 wrapper REPAIR (live §5.5 already matches); 13-23 REVISED-1 Movement (live §5.4 has Movement); 13-23 REVISED-2 Unlocks (live §5.4 has Unlocks).

### P4 — SUPERSEDED-NO-OP rows
**Question:** What are the consolidated delta's SUPERSEDED-NO-OP rows (rows where the prior's commitment targets an artifact never present in the live spec)?

**Verification criteria:**
- [ ] Each row has the standard schema with Status=SUPERSEDED-NO-OP.
- [ ] Each row explains why the target artifact is absent (provenance trace).
- [ ] The expected 1 row present: 13-23 NEW-5 4-axis → 2-axis reduction (target 4-axis table from 18-58 §4 never landed in live spec).

### P5 — RESIDUE rows
**Question:** What are the consolidated delta's RESIDUE rows (rows fixing inter-section coherence ripples not in any prior's delta list)?

**Verification criteria:**
- [ ] Each row has the standard schema with Status=RESIDUE.
- [ ] Each row has a Cross-section dependency annotation explaining WHICH cross-section dependency triggers the residue.
- [ ] All 6 expected residue rows present:
  - §1.4 vocab cut "continuation note" entry (dep: §5.4 cut Continuation Note).
  - §2.4 prose drop "+ Continuation Note" reference at Guidance Mode `none` (dep: §5.4 cut Continuation Note).
  - §3.4 Assembly bullet drop "+ Continuation Memory" (dep: §5.4 cut Continuation Memory group-header).
  - §4.2 failure mode #5 field-list drop "or Continuation Note" (dep: §5.4 cut Continuation Note).
  - §5 prologue dual-file framing update (dep: §5.8 ADD `_route.md` description).
  - NOW SOLID INSTRUCTIONS section mirror updates for `prior route map` parameter (dep: §3.2 + §3.5 parameter cleanup).
- [ ] Each residue row is landing-pass-assigned: CUT-ripples in pass 1; ADD-ripples in pass 2; REPAIR-mirrors in pass 3.

### P6 — Coverage map
**Question:** Are ALL of the 4 priors' delta-rows mapped to consolidated-delta rows, with NONE dropped?

**Verification criteria:**
- [ ] Each prior's delta-row count vs consolidated-mapping count, per prior:
  - 00-51 had 9 MUST rows → all 9 mapped to consolidated rows (ACTIVE or NO-OP CONFIRM, not dropped).
  - 13-23 had 7 amendment rows → all 7 mapped to consolidated rows (ACTIVE or NO-OP CONFIRM or SUPERSEDED-NO-OP).
  - 14-03 had 0 amendment rows (compatibility verdict) → 0 mapped.
  - 14-49 had 6 MUST rows → all 6 mapped to consolidated rows (ACTIVE).
- [ ] Coverage table renders: prior-name + prior-row-id + consolidated-delta-row(s)-it-maps-to + status per mapping.
- [ ] Net coverage: 22 prior rows → ≥22 consolidated rows (with some 1-prior-row → many-consolidated-rows where amendments fan out). No drops.

### P7 — Open Questions / Gaps
**Question:** What gaps + Open Questions + Refinement Triggers should the finding flag?

**Verification criteria:**
- [ ] Institutional memory authoring (`docs/discipline_design_history/for_routeman.md`) flagged as COULD action; out of MUST.
- [ ] Bounded follow-up scopes from 14-03 preserved (nav-session aggregation; meta-loop runtime).
- [ ] Cross-discipline read-policy vocabulary unification flag (from 14-49) preserved.
- [ ] Session-context poison out-of-scope flag (per Sensemaking A7 reframing) preserved.
- [ ] Naming-collision monitoring flag preserved.
- [ ] Post-application live-spec audit checkpoint (manual: re-read the spec end-to-end after application; verify internal consistency) flagged.

### P8 — Finding deliverable shape spec
**Question:** What sections, order, and content-shape does the finding take per CONCLUDE template + Synthesis Trigger's Inherited Commitments Re-test enforcement?

**Verification criteria:**
- [ ] Sections present in order: # Title / ## Question / ## Finding Summary / ## Finding (with substantive prose) / ## Inherited Commitments Re-test / ## Next Actions (MUST / COULD / DEFERRED) / ## Reasoning / ## Open Questions / ## Source Input.
- [ ] Finding Summary: 6-10 bullet points naming the consolidated-delta's shape + the 4 row-type categories + the 3-pass landing-order + honest context-poison reframing + the 6 residue rows + the bounded out-of-scope items.
- [ ] Finding: substantive prose includes (a) the consolidated delta TABLE itself; (b) per-section landing details; (c) the coverage map; (d) the honest context-poison reframing prose; (e) cross-amendment-overlap merge-coherence explanation for §3.2 + §3.5.
- [ ] Inherited Commitments Re-test: per-prior re-test status for all 4 priors' commitments + reference docs consulted.
- [ ] Next Actions MUST: apply the consolidated delta to the live spec (gated on user materialization decision); the row-by-row delta is concrete-enough-to-apply.
- [ ] Next Actions COULD: institutional memory authoring; LAYER-2 audit protocol (00-51-deferred); etc.
- [ ] Next Actions DEFERRED: bounded follow-ups (nav-session, meta-loop); γ-field cut revival; cross-discipline unification.
- [ ] Reasoning: explicitly addresses why section-keyed flat list beats grouped-by-provenance; why NO-OP rows included; why RESIDUE rows are coherence-load-bearing; why context-poison reframes honestly.
- [ ] Open Questions / Monitoring + Blocked + Research Frontiers + Refinement Triggers populated.
- [ ] Source Input: user's verbatim invocation preserved.

---

## Step 5 — Map Interfaces

### Per-pair interface map

| Source piece | Target piece | What flows | Direction | Type |
|---|---|---|---|---|
| P1 → P2 | P2 ACTIVE rows | Row-type vocabulary + schema + landing-pass rules | one-way | dependency |
| P1 → P3 | P3 NO-OP CONFIRM rows | Row-type vocabulary + schema + audit-row semantics | one-way | dependency |
| P1 → P4 | P4 SUPERSEDED-NO-OP rows | Row-type vocabulary + schema + provenance-trace semantics | one-way | dependency |
| P1 → P5 | P5 RESIDUE rows | Row-type vocabulary + schema + cross-section-dependency-annotation semantics + landing-pass rules | one-way | dependency |
| P1 → P6 | P6 Coverage map | Row-type vocabulary (for the coverage table's status column) | one-way | dependency |
| P1 → P7 | P7 Open Questions | (none — P7 is content-shaped by Sensemaking's A5/A7, not by substrate) | none | n/a |
| P1 → P8 | P8 Finding | Substrate vocabulary names used in finding prose (Finding Summary + Reasoning sections) | one-way | dependency |
| P2 → P6 | P6 Coverage map | List of produced ACTIVE rows + provenance per row | one-way | data |
| P3 → P6 | P6 Coverage map | List of produced NO-OP CONFIRM rows + provenance per row | one-way | data |
| P4 → P6 | P6 Coverage map | The 1 SUPERSEDED-NO-OP row + provenance | one-way | data |
| P5 → P6 | P6 Coverage map | List of RESIDUE rows + their cross-section dependencies (note: P6 audits PRIORS' coverage; RESIDUE rows are inquiry-distinctive and not in priors' rosters, so they enter the coverage map as "this-inquiry-residue" entries, not as audited mappings) | one-way | data |
| P2/P3/P4/P5 → P8 | P8 Finding | The consolidated delta TABLE itself (rendered as a markdown table in the finding's Finding section) | one-way | data |
| P6 → P8 | P8 Finding | The coverage map (rendered as a separate audit table in the finding) | one-way | data |
| P7 → P8 | P8 Finding | Open Questions content for the finding's Open Questions section | one-way | data |
| Sensemaking SV6 → P8 | P8 Finding | Reasoning content (cross-amendment merge-coherence explanation; honest context-poison reframing prose; row-type rationale) | one-way | data |
| P5 → P7 | P7 Open Questions | RESIDUE rows may surface new Open Question candidates (e.g., the cross-section-coherence checking pattern as a project pattern) | one-way (weak) | information |

### Assumptions-not-data check (per Step 5 refinement)

For each piece, what assumptions does it make about what others provide?

- **P2 assumes** P1's row-type vocabulary is finalized BEFORE row-text production (otherwise rows might use stale vocabulary). Hidden coupling risk: if P1 is revised mid-execution, P2 rows must be revised. **Mitigation:** P1 lands first; P2 starts after P1 is committed.
- **P5 assumes** the priors' active rows have already cut/added the cross-section-coherence-trigger fields. RESIDUE rows are reactive to ACTIVE rows. Hidden coupling: if ACTIVE rows don't actually cut Continuation Note (per 13-23), then the §1.4 vocab-entry residue row is moot. **Mitigation:** P5 production depends on P2 production's row-list being available; P5 cross-section dependencies cite specific P2 rows.
- **P6 assumes** the priors' delta-row inventories (00-51 had 9 rows; 13-23 had 7 rows; 14-03 had 0; 14-49 had 6) are stable; if any of those are mis-counted, P6's coverage audit is wrong. **Mitigation:** P6's first sub-step is re-counting priors' rows from the source finding.md files.
- **P8 assumes** all upstream pieces produce well-formed outputs by the time P8 integrates. **Mitigation:** P8 runs last; if any upstream piece is incomplete, P8 flags rather than fabricates.

No hidden coupling not addressed. PASS.

---

## Step 6 — Order by Dependency

### Dependency order (tiers)

**Tier 0 (precondition, must be first):**
- **P1 Substrate** — produces vocabulary + schema + landing-pass rules. All downstream depends on P1.

**Tier 1 (parallel, can run concurrently after P1):**
- **P2 ACTIVE rows** — produces the active-edit rows. Consumes P1.
- **P3 NO-OP CONFIRM rows** — produces the audit-no-op rows. Consumes P1.
- **P4 SUPERSEDED-NO-OP rows** — produces the 1 superseded-no-op row. Consumes P1.
- **P5 RESIDUE rows** — produces the 6 cross-section-coherence residue rows. Consumes P1 + P2 (P5 cross-section dependencies cite P2's specific cut rows).

  Note: P5 is technically Tier 1.5 (depends on P1 AND P2's row-list-being-defined). But P2's row-list is known a priori from Sensemaking SV6; P5 doesn't need P2's full produced text, just the row-list. So P5 can run in parallel with P2 production after P1 lands. Treat as Tier 1 with weak dependency on P2's row-IDs.

- **P7 Open Questions** — produces Open Questions content. Largely independent; consumes Sensemaking's A5/A7 + the bounded-follow-up scopes from 14-03. Weak dependency on P5 (RESIDUE rows may surface new Open Question candidates).

**Tier 2 (depends on Tier 1):**
- **P6 Coverage map** — audits the produced rows against priors' delta inventories. Consumes P2 + P3 + P4 + P5 outputs.

**Tier 3 (integration, must be last):**
- **P8 Finding deliverable** — integrates all upstream into the CONCLUDE-template-compliant finding. Consumes P1 + P2 + P3 + P4 + P5 + P6 + P7.

### Critical path

P1 → P2 → P5 → P6 → P8.

Parallelizable: P3, P4, P7 (all start after P1; finish before P6).

No circular dependencies. PASS.

---

## Step 7 — Self-Evaluate

### Minimum 3-dimension evaluation

| Dimension | Check | Status |
|---|---|---|
| **Independence** | Can each piece be worked on without the others existing? | **PASS.** Each piece's question is answerable using only the inputs declared in its interface map. P2 produces its rows using only P1's schema + the priors' active-subset specs (already in Sensemaking output). P3 produces its rows using only P1's schema + priors' satisfied commitments. Etc. Interface map is complete; no piece needs to read another's full output beyond its declared interface. |
| **Completeness** | Do the pieces cover the whole? | **PASS.** The deliverable is the consolidated amendment plan finding. Components: substrate (P1) + rows of all 4 types (P2-P5) + coverage audit (P6) + open questions (P7) + finding integration (P8). Every component of the deliverable maps to a piece. No aspect of the consolidated plan falls through gaps. |
| **Reassembly** | Can the pieces + interfaces reconstruct the whole? | **PASS.** Given P1's substrate + P2/P3/P4/P5's complete row sets + P6's coverage audit + P7's open-questions content + P8's integration into CONCLUDE-template, the consolidated amendment plan is fully reconstructed. |

### Full 7-dimension evaluation (high-stakes; consolidated finding feeds CONCLUDE which is binding)

| Dimension | Check | Status |
|---|---|---|
| **Independence** | (per above) | PASS |
| **Completeness** | (per above) | PASS |
| **Reassembly** | (per above) | PASS |
| **Tractability** | Is each piece small enough for a single focused Innovation pass? | **PASS.** P1 is 3 sub-substrates (vocab + landing-order + schema) — small. P2 is ~12-15 rows of structured content — moderate but tractable in one pass. P3 is ~4 audit rows — small. P4 is 1 row — trivial. P5 is 6 residue rows — small. P6 is one audit table — small. P7 is ~5 Open Question items — small. P8 is the finding template integration — largest piece, but it's mostly stitching upstream outputs together, not new content production. |
| **Interface clarity** | Are all cross-piece flows explicit? No hidden dependencies? | **PASS.** Interface map (Step 5) names every flow + direction. Assumptions-not-data check (Step 5 refinement) verified no hidden assumptions remain. Dependency order (Step 6) makes the flow direction explicit. |
| **Balance** | Is complexity roughly proportional across pieces? | **PASS-WITH-NOTE.** P2 (ACTIVE rows, ~12-15 rows) is the largest piece by row count; P4 (SUPERSEDED-NO-OP, 1 row) is the smallest. Imbalance is 12:1 by row count BUT each row is structurally similar (8-column entry) — production effort scales linearly with row count, not non-linearly. P8 (finding integration) is the second-largest piece but is mostly stitching, not new content. **Note:** the imbalance is by row-count, not by cognitive-decomposition-effort. P2's rows are independent-content sub-rows; if P2 production becomes unwieldy, it can be sub-decomposed into per-row sub-pieces, but at current scope this isn't necessary. |
| **Confidence** | Do top-down and bottom-up agree on boundaries? | **PASS.** Step 3's bottom-up atom-grouping check confirmed all 8 piece-boundaries match top-down clusters. HIGH confidence on all boundaries. |

### Determination-mechanism piece check (per Step 7 refinement)

Does the Q-tree include a load-bearing concept whose use depends on a runtime determination? Examine each piece:

- **P1 Substrate:** the 4 row-types are RUNTIME-DETERMINED at row-production time (Innovation must decide per row: is this ACTIVE / NO-OP CONFIRM / RESIDUE / SUPERSEDED-NO-OP?). The determination mechanism: each row's classification is decided by comparing the prior's delta-row commitment to the LIVE-SPEC TEXT (via grep / direct read). Is this determination mechanism specified somewhere? **YES — in P2/P3/P4/P5's verification criteria, which name WHICH specific prior-row each consolidated-row maps to, and the surfacing output already provides the live-spec-text-evidence for each NO-OP classification.** Determination mechanism is captured.

- **P5 RESIDUE rows:** the "cross-section dependency" annotation is RUNTIME-DETERMINED at residue-row identification time. The determination mechanism: identify a cross-section coherence ripple by finding a spec section that REFERENCES a field being CUT (or vice versa). Is this determination mechanism specified? **YES — in P5's verification criteria, each residue row names its cross-section dependency. The surfacing output already identified the 6 specific ripples.** Determination mechanism is captured.

- **P6 Coverage map:** each prior's delta-row → consolidated-row mapping is RUNTIME-DETERMINED. The determination mechanism: read each prior's MUST/amendment list; locate the corresponding consolidated row(s) by section + content match. Is this mechanism specified? **YES — in P6's verification criteria, the per-prior row count is named (00-51: 9, 13-23: 7, 14-03: 0, 14-49: 6), and the mapping requires matching by section + content.** Determination mechanism is captured.

No determination-mechanism piece is missing. PASS.

### Failure-mode check

- **#1 Premature Decomposition:** No — Sensemaking was complete before Decomposition; the whole is well-understood. PASS.
- **#2 Wrong Boundaries:** No — boundaries cut at LOW coupling (cluster transitions); STRONG coupling is preserved within pieces (substrate atoms together; row-production atoms within row-type pieces). PASS.
- **#3 Hidden Coupling:** No — assumptions-not-data check (Step 5 refinement) ran explicitly. Identified 4 dependencies; all addressed via dependency-order or piece-internal mitigation. PASS.
- **#4 Missing Pieces:** No — completeness check + determination-mechanism check both PASS. Every concept needing production has a piece. PASS.
- **#5 Over-Decomposition:** No — 8 pieces is balanced for a deliverable with this many distinct concerns (substrate + 4 row-types + coverage + open-questions + finding). Each piece is a coherent sub-problem, not a fragment. PASS.
- **#6 Ignoring Dependencies:** No — dependency order (Step 6) explicit: P1 → {P2,P3,P4,P5,P7 parallel} → P6 → P8. No circular dependencies. PASS.
- **#7 Imbalanced Decomposition:** No — P2 is largest by row count (12-15 rows) but each row is structurally similar; production effort is linear. P4 is smallest (1 row) but it's a structurally-distinct row-type warranting its own piece for audit-trail clarity. PASS.

All 7 failure modes addressed. PASS.

### Self-assessment verdict

**PROCEED.** Decomposition self-evaluation PASSes 7/7 dimensions + 7/7 failure-mode checks + determination-mechanism piece check.

Next: Innovation. The 8 pieces are ready for per-piece production.

---

## Final Deliverable

### 1. Coupling Map

```
Cluster 1 (substrate):              P1 (vocab + landing-order + schema)
                                            |
                                    +-------+-------+-------+-------+-------+
                                    |       |       |       |       |       |
Cluster 2 (parallel row-prod):     P2      P3      P4      P5     P7      (Sensemaking)
                                  ACTIVE  NO-OP   SUPER-  RESIDUE  Open Q's
                                  rows  CONFIRM   NO-OP   rows    + Gaps
                                    \       |       |       /       /
                                     +------+-------+------+       /
                                            |                     /
Cluster 3 (audit):                          P6 Coverage map ←----+
                                            |
Cluster 4 (integration):                   P8 Finding integration
```

### 2. Question Tree

8 pieces with verification criteria (as documented in Step 4 above).

### 3. Interface Map

15 explicit interface edges (as documented in Step 5 above). All one-way; no circular.

### 4. Dependency Order

- **Tier 0:** P1 (substrate)
- **Tier 1 (parallel):** P2, P3, P4, P5, P7 (with P5 weakly dependent on P2's row-IDs)
- **Tier 2:** P6 (coverage audit)
- **Tier 3:** P8 (finding integration)

### 5. Self-Evaluation

- Minimum 3-dimension: 3/3 PASS.
- Full 7-dimension: 7/7 PASS.
- Failure-mode check: 7/7 PASS.
- Determination-mechanism piece check: PASS.
- Verdict: PROCEED to Innovation.
