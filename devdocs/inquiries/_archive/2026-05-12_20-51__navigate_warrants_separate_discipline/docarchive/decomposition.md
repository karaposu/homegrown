# Decomposition: Does /navigate warrant being a separate discipline?

## User Input

`devdocs/inquiries/2026-05-12_20-51__navigate_warrants_separate_discipline/_branch.md`

Operating on: `_branch.md` + `exploration.md` + `sensemaking.md`. Sensemaking committed H3 (REFINE as lean extension) as the recommended verdict. Decomposition partitions the adoption package.

---

## The Whole

**The H3-recommendation finding** — answers "does /navigate warrant separate discipline status" with YES (legitimacy) + lean-spec recommendation (parsimony), acknowledges user-question ambiguity, presents H1/H2/H4 as alternatives, sketches the lean spec, and provides migration steps.

---

## Step 1 — Coupling Topology

### Elements identified

E1. **Verdict statement.** /navigate IS justified as a separate discipline; recommendation = H3 (rewrite as lean extension).
E2. **Structural reasoning for H3 over alternatives.** Per-option pros/cons; why H3 wins.
E3. **User-question ambiguity acknowledgment.** "Deserve" reads as legitimacy OR parsimony; recommendation addresses parsimony; H2/H4 available for legitimacy reading.
E4. **Lean-spec sketch.** Structure of the rewritten ~280-300 line /navigate spec: which sections preserved; which sections transcluded; which sections trimmed.
E5. **Migration steps.** What the rewrite touches; cross-references unaffected; LOOP_DIAGNOSE Candidate A compatibility preserved.
E6. **Content-loss-risk mitigation.** Versioned-history during transition (~3 months).
E7. **H1/H2/H4 as alternatives.** When user might choose each.
E8. **LOOP_DIAGNOSE Candidate A application** (canonical specs loaded; explicit in Reasoning).
E9. **Finding-doc scaffolding.** Frontmatter + section structure.

### Coupling clusters

- **Cluster A (Verdict + reasoning):** E1 + E2 + E3 + E7. The verdict statement, the reasoning, the user-ambiguity acknowledgment, and the alternatives are tightly coupled.
- **Cluster B (Lean-spec sketch + migration):** E4 + E5 + E6. The lean-spec content + migration steps + risk mitigation.
- **Cluster C (LOOP_DIAGNOSE application):** E8. Tied to A as part of reasoning.
- **Cluster D (Scaffolding):** E9.

### Boundaries

- Boundary 1: between Verdict+reasoning (A) and lean-spec sketch (B). A states WHAT and WHY; B states HOW.
- Boundary 2: between content (A/B/C) and scaffolding (D).

---

## Step 2 — Boundaries (Top-Down)

Natural pieces:

- **P-α (Cluster A):** Verdict + structural reasoning + user-question-ambiguity acknowledgment + alternatives presentation.
- **P-β (Cluster B):** Lean-spec sketch + migration steps + content-loss-risk mitigation.
- **P-γ (Cluster C):** LOOP_DIAGNOSE Candidate A application note (compatibility statement).
- **P-δ (Cluster D):** Finding-doc scaffolding.

4 pieces.

---

## Step 3 — Bottom-up validation

### Atoms

- Verdict (H3 recommendation; /navigate is separate-discipline-justified) — atom.
- Per-option reasoning (H1/H2/H3/H4 pros/cons) — 4 atoms.
- User-ambiguity acknowledgment — atom.
- Lean-spec structure (which sections retained; which transcluded) — atom-cluster.
- Migration steps — atom.
- Content-loss-risk mitigation (versioned-history) — atom.
- LOOP_DIAGNOSE Candidate A compatibility statement — atom.
- Frontmatter + section structure — atom.

### Atom-to-piece grouping

- Verdict + 4 per-option atoms + user-ambiguity atom → P-α. ✓
- Lean-spec atom-cluster + migration atom + risk-mitigation atom → P-β. ✓
- Candidate A compatibility atom → P-γ. ✓
- Scaffolding atoms → P-δ. ✓

**Split check:** is the LOOP_DIAGNOSE compatibility (P-γ) really separate from P-α (verdict + reasoning)? Tested: it's a specific sub-claim within the reasoning + serves as a process commitment. Small enough to fold into P-α as a sub-section. **REVISION:** fold P-γ into P-α. Updated piece count: 3 pieces.

Actually, the Candidate A application is small (~10 lines) and is best as a sub-section of P-α's reasoning rather than its own piece. Final piece count: 3.

---

## Step 4 — Question Tree

### P-α — Verdict + reasoning + ambiguity + alternatives + Candidate A compatibility

**Q-α:** What is the verdict on /navigate's discipline status, what reasoning supports H3 over H1/H2/H4, how is the user-question ambiguity handled, what alternatives remain, and how does Candidate A compatibility apply?

**Verification:**
- [ ] Verdict stated: /navigate IS justified as separate discipline (legitimacy); H3 (REFINE as lean extension) is recommended (parsimony).
- [ ] H3 reasoning: structural cleanliness + parsimony + LOOP_DIAGNOSE Candidate A compatibility + bounded migration cost.
- [ ] H1 pros/cons: zero migration cost; preserves over-engineered spec; weak affirmative justification.
- [ ] H2 pros/cons: discipline taxonomy shrinks; /explore identity-creep; /explore spec balloons.
- [ ] H4 pros/cons: aligns with /staged-explore precedent; structurally awkward (hybrid orchestrator+content-generator).
- [ ] User-question ambiguity acknowledged: legitimacy reading favors H2/H4; parsimony reading favors H3.
- [ ] H1/H2/H4 presented as alternatives with usage conditions.
- [ ] LOOP_DIAGNOSE Candidate A: canonical specs of /explore + /navigate were loaded for this inquiry; H3 preserves /navigate's canonical-spec status.

### P-β — Lean-spec sketch + migration + risk mitigation

**Q-β:** What does the rewritten lean /navigate spec look like (sections retained / transcluded / trimmed), what are the migration steps, and how is the content-loss risk mitigated?

**Verification:**
- [ ] Lean-spec structure sketched:
  - Identity section (~30 lines): explicit specialization-plus-additions framing; transclusion reference to /explore.
  - The 16-Type Taxonomy section (~50 lines, retained).
  - Navigation Item Structure / Route-card (~80 lines, retained).
  - Adaptive Guidance section (~30 lines, retained; describes prescriptive content type).
  - Process Model (~30 lines, lean — references /explore's process; adds /navigate-specific Steps).
  - Failure Modes (~30 lines, /navigate-specific only; /explore failure modes referenced not restated).
  - Telemetry (~20 lines).
  - When to Navigate + Auto-Derivable Types (~30 lines, retained).
  - Total: ~280-300 lines (down from ~490).
- [ ] Migration steps: rewrite `homegrown/navigation/references/navigation.md`; no cross-reference updates needed.
- [ ] Content-loss-risk mitigation: keep current spec at `homegrown/navigation/references/navigation_v1.md` for ~3 months historical reference.

### P-δ — Finding-doc scaffolding

**Q-δ:** What is the finding's structure and frontmatter?

**Verification:**
- [ ] Frontmatter: `status: active`; `continues_from:` both prior inquiries from this thread; `related:` /explore-thread findings.
- [ ] Sections per CONCLUDE template: Question; Finding Summary; Finding body; Next Actions (MUST: adopt H3 / COULD: lean-spec variants / DEFERRED: H1/H2/H4 alternatives + future-inquiry triggers); Reasoning; Open Questions; Source Input.

---

## Step 5 — Interface Map

| From | To | What flows | Direction |
|---|---|---|---|
| P-α | P-β | Verdict (H3) → lean-spec sketch + migration | one-way |
| P-β | P-α | Lean-spec sketch → reasoning's "what H3 specifically means" | one-way |
| P-α | P-δ | Verdict + reasoning → body content | one-way |
| P-β | P-δ | Lean-spec + migration → body content + Next Actions | one-way |

No cycles.

---

## Step 6 — Dependency Order

**Phase 1 (parallel):**
- P-α — Verdict + reasoning (uses sensemaking SV6 directly).
- P-δ — Scaffolding (template-based).

**Phase 2:**
- P-β — Lean-spec + migration (depends on P-α's verdict).

**Phase 3:**
- Integration into P-δ.

---

## Step 7 — Self-Evaluate

### Minimum 3 dimensions

**Independence:** PASS.
**Completeness:** PASS (covers verdict + lean-spec + migration + alternatives + scaffolding).
**Reassembly:** PASS.

### Full 7-dimension evaluation

| Dimension | Status |
|---|---|
| Independence | PASS |
| Completeness | PASS |
| Reassembly | PASS |
| Tractability | PASS |
| Interface clarity | PASS |
| Balance | PASS-with-note (P-α and P-β roughly equal; P-δ template-driven) |
| Confidence | PASS |

---

## Final Deliverable

### Coupling Map

3 clusters: A (verdict + reasoning + ambiguity + alternatives + Candidate A); B (lean-spec + migration); D (scaffolding).

### Question Tree

```
Q-Whole: How is the H3 recommendation landed as a complete adoption package?

├── P-α: Verdict + reasoning + ambiguity + alternatives + Candidate A (Q-α)
├── P-β: Lean-spec sketch + migration + risk mitigation (Q-β)
└── P-δ: Scaffolding (Q-δ)
```

### Interface Map

4 directed flows; no cycles.

### Dependency Order

```
Phase 1 (parallel): P-α ‖ P-δ
Phase 2:            P-β  (after P-α)
Phase 3:            integration into P-δ
```

### Self-Evaluation

7/7 PASS.

**Verdict: PROCEED to Innovation.**
