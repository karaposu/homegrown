# Decomposition: Semantic indexing — discipline, runner, artifact, or unnecessary?

## User Input

`devdocs/inquiries/2026-05-13_00-35__semantic_indexing_as_discipline/_branch.md`

Operating on: exploration + sensemaking. Verdict: 3-phase evolutionary path + H1 rejection + claim-test.

---

## The Whole

The adoption package for the verdict — primarily a research-frontier-with-phases recommendation; minimal immediate adoption (only a research-frontier flag with explicit activation triggers).

---

## Step 1-3 — Coupling, clusters, atoms

### Elements

- E1. Phase A NOW: no new mechanism. Existing 22-25 fix suffices.
- E2. Phase B MID-TERM: lightweight project-wide artifact; activation triggers.
- E3. Phase C LONG-TERM: dedicated /staged-index runner; activation triggers.
- E4. H1 rejection: /index as discipline → Operation-Status Drift.
- E5. Claim test: lookup-class helps, reasoning-class doesn't.
- E6. Alignment with nav_north_star.md.
- E7. Cross-references to 22-25 finding + 22-05 finding (Family A).
- E8. Finding-doc scaffolding.

### Clusters

- A: Three-phase evolutionary path (E1 + E2 + E3) — the main verdict structure.
- B: H1 rejection + claim test (E4 + E5) — what's rejected + what's overreach.
- C: Alignment + cross-references (E6 + E7).
- D: Scaffolding (E8).

### Pieces

- **P-α (Cluster A):** Three-phase evolutionary path with activation triggers per phase.
- **P-β (Cluster B):** H1 rejection + lookup-vs-reasoning claim test.
- **P-γ (Cluster C):** nav_north_star alignment + cross-references to 22-05 and 22-25.
- **P-δ (Cluster D):** Scaffolding.

4 pieces.

---

## Step 4 — Q-tree

### P-α: Three-phase evolutionary path

**Q-α:** What are the three phases (NOW / MID-TERM / LONG-TERM) with their activation triggers?

**Verification:**
- [ ] Phase A (NOW; L0–L1): no new mechanism. Justification: 22-25's 3-layer fix + /staged-explore on-demand cover the observed use cases.
- [ ] Phase B (MID-TERM): lightweight project-wide artifact maintained by ad-hoc /MVL+ inquiries. Activation trigger: 3+ inquiries observe whole-codebase lookup need beyond 22-25's coverage OR explicit user request.
- [ ] Phase C (LONG-TERM): dedicated /staged-index runner (analogous to /staged-explore) producing + maintaining the index. Activation triggers: Phase B's manual maintenance becomes a bottleneck (5+ refresh cycles/month) OR autonomy reaches L3+.

### P-β: H1 rejection + claim test

**Q-β:** Why is H1 rejected, and what's the test result on the "solve all confusions" claim?

**Verification:**
- [ ] H1 rejection: /index as a new discipline would be /explore over the concept-territory; no structurally-distinct operation. Adopting it commits Operation-Status Drift (22-05's Family A). Self-referential failure.
- [ ] Claim test: lookup-class failures helped (canonical-anchor-loading; project-wide navigation; L3+ autonomy). Reasoning-class failures NOT helped (Family A drift; Family B inheritance; specific-vs-pattern; clean resolution trap). User's "solve all confusions" framing is OVERREACH for the broad version.

### P-γ: nav_north_star alignment + cross-references

**Q-γ:** How does the proposal align with existing nav_north_star.md vision, and what are the cross-references?

**Verification:**
- [ ] nav_north_star.md alignment: existing vision describes whole-codebase navigation as staged for-loop iterations, manual v1, automated later. Semantic indexing is the artifact form of this vision; Phase B + C realize it.
- [ ] Cross-reference: 22-25 finding (3-layer fix) is Phase A's implementation.
- [ ] Cross-reference: 22-05 finding (Family A "Operation-Status Drift") is the basis for H1 rejection.

### P-δ: Scaffolding

**Q-δ:** Finding-doc structure + frontmatter.

**Verification:**
- [ ] Frontmatter: continues_from 22-25; related to 22-05 + /explore-thread.
- [ ] Sections per CONCLUDE template.

---

## Step 5 — Interfaces

| From | To | Direction |
|---|---|---|
| P-α | P-γ | phases → cross-references | one-way |
| P-β | P-γ | H1 rejection → 22-05 cross-reference | one-way |
| P-α | P-δ | phases → body | one-way |
| P-β | P-δ | rejection + claim test → body + Reasoning | one-way |
| P-γ | P-δ | alignment → Reasoning + Open Questions | one-way |

---

## Step 6 — Dependency Order

```
Phase 1 (parallel): P-α ‖ P-β ‖ P-γ ‖ P-δ
Phase 2:            integration into P-δ
```

All 4 pieces are independently workable; minimal cross-piece dependencies.

---

## Step 7 — Self-Evaluate

| Dimension | Status |
|---|---|
| Independence | PASS |
| Completeness | PASS |
| Reassembly | PASS |
| Tractability | PASS |
| Interface clarity | PASS |
| Balance | PASS |
| Confidence | PASS |

7/7 PASS.

**Verdict: PROCEED to Innovation.**
