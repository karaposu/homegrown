# Decomposition: Why Sensemaking application missed Memory disambiguation

## Step 1 — Perceive Coupling Topology

### Elements in the whole

From Sensemaking SV6 + Exploration's structural map:

1. **5-link causal chain** with each link's description.
2. **Per-link failure-mode mapping** — which existing Sensemaking failure mode covers each link.
3. **Per-link evidence citation** — spec-text lines + docarchive lines anchoring each link.
4. **Primary vs contributing ranking** within the chain (link 4 primary).
5. **Maintenance candidates → link coverage map** — which prior M1-M6 candidates close which links.
6. **New (DEFERRED) candidate proposal for link 4** — frame-exit perspective check during Sensemaking Phase 2.
7. **Sharp answer paragraph** — the user-facing one-paragraph response answering the specific question.
8. **Strategic implication** — project-wide-visibility transfer at higher meta-loop levels (research frontier).
9. **Diagnostic verdict** — ACTIONABLE/PARTIAL/INCONCLUSIVE summary applied to this drill-down.

### Pairwise coupling

| A | B | Coupling | Reason |
|---|---|---|---|
| 5-link chain (#1) | Failure-mode mapping (#2) | **Strong** | Each link references a specific failure mode; integral relation |
| 5-link chain (#1) | Per-link evidence (#3) | **Strong** | Each link has spec-text or docarchive evidence; integral |
| 5-link chain (#1) | Primary/contributing ranking (#4) | **Strong** | Ranking is internal to the chain |
| Chain (#1-#4 fused) | Maintenance map (#5) | **Strong** | Map reads "which chain link does each candidate cover?" |
| Chain (#1-#4) | New candidate (#6) | **Strong** | New candidate exists because link 4 is uncovered by existing M1-M6 |
| Maintenance map (#5) | New candidate (#6) | **Strong** | Map shows the gap; new candidate fills it |
| Sharp answer (#7) | Chain (#1-#4) | **Moderate** | Sharp answer references primary link but is summary-shaped |
| Strategic implication (#8) | Chain (#1-#4) | **Weak** | Implication arises from chain analysis but is future-facing |
| Diagnostic verdict (#9) | Sharp answer (#7) + Maintenance map (#5) + New candidate (#6) | **Moderate** | Verdict synthesizes these |

### Coupling map

```
                        ┌─────────────────────────────────────────────────────┐
                        │ P1: 5-link causal chain (HUB)                       │
                        │   - Each link: description + failure-mode mapping   │
                        │   - Per-link evidence (spec + docarchive)           │
                        │   - Primary (link 4) / contributing ranking         │
                        └────────────────┬────────────────────────────────────┘
                                         │
              ┌──────────────────────────┼──────────────────────────────────┐
              │                          │                                  │
              ▼                          ▼                                  ▼
      ┌───────────────┐         ┌────────────────┐               ┌────────────────────┐
      │ P2: Maint.    │         │ P3: Sharp      │               │ P4: Strategic      │
      │   evaluation  │         │   answer       │               │   implication      │
      │   (link cov.  │         │   paragraph    │               │   (research        │
      │   + new       │         │                │               │   frontier)        │
      │   candidate)  │         │                │               │                    │
      └───────┬───────┘         └───────┬────────┘               └────────────────────┘
              │                         │
              └──────────┬──────────────┘
                         │
                         ▼
                ┌────────────────────┐
                │ P5: Diagnostic     │
                │     verdict        │
                └────────────────────┘
```

**Cluster identification:**
- **Hub:** P1 — 5-link chain with integrated failure-mode mapping, evidence, and ranking.
- **Spoke A:** P2 — maintenance evaluation reading P1.
- **Spoke B:** P3 — sharp answer reading P1.
- **Independent:** P4 — strategic implication reads P1's analysis but produces a future-facing item not a current commitment.
- **Synthesis:** P5 — verdict reading P2, P3.

### Why fuse #1+#2+#3+#4 into P1

These elements are tightly internally coupled — each link has a description (#1), a failure-mode mapping (#2), evidence (#3), and a ranking position (#4). Splitting them across pieces would create high-bandwidth interfaces where now there's a clean self-contained chain. Integration is structurally cleaner.

---

## Step 2 — Detect Boundaries (Top-Down)

Cuts at low coupling:

- **B-1: Between P1 and P2.** Crossing traffic: P2 reads chain links to evaluate maintenance candidates. One read per candidate-link pair. Low.
- **B-2: Between P1 and P3.** Crossing traffic: P3 references the primary link. Low.
- **B-3: Between P1 and P4.** Crossing traffic: P4 references the strategic insight surfaced from chain analysis. Very low (one-time read).
- **B-4: Between P2/P3/P4 and P5.** Crossing traffic: verdict synthesizes upstream. Low.

All boundaries are clean.

---

## Step 3 — Validate Boundaries (Bottom-Up)

### Atoms (irreducible elements)

- A1–A5: each individual chain link (5 atoms).
- A6: the chain's overall ranking (link 4 primary).
- A7: maintenance-candidate × link-coverage matrix (≈4-5 entries: M1, M5 currently cover link 5; new candidate covers link 4).
- A8: the new candidate's description (DEFERRED candidate proposal).
- A9: sharp answer paragraph.
- A10: strategic implication paragraph.
- A11: verdict's 4 fields.

### Atom-to-piece grouping

| Atoms | Piece |
|---|---|
| A1–A5 (chain links) + A6 (ranking) | P1 |
| A7 (coverage matrix) + A8 (new candidate) | P2 |
| A9 (sharp answer) | P3 |
| A10 (strategic implication) | P4 |
| A11 (verdict) | P5 |

### Boundary checks

- **A1-A5 (chain links) coupling:** the 5 links form a chain — order matters; each link's evidence is independent within the link but the chain ordering itself is structural. Splitting links across pieces would split the structure. Group all in P1.
- **A8 (new candidate) and A6 (ranking link 4 primary):** the new candidate exists BECAUSE link 4 is primary. The DEFERRED candidate logically lives with maintenance evaluation (P2), not with the chain (P1) — it's a maintenance proposal, not a structural element of the chain. Place in P2.
- **A9 (sharp answer):** the user's question asked for a single sharp paragraph. P3 owns this and references P1's primary link. Independent from P2's maintenance evaluation.
- **A10 (strategic implication):** future-facing; doesn't bear on the SHARP ANSWER. Independent piece for clarity.

### Top-down vs bottom-up

| Boundary | Top-down location | Bottom-up confirms? |
|---|---|---|
| P1 ↔ P2 | chain (with failure-mode mapping) vs maintenance | ✓ |
| P1 ↔ P3 | chain vs sharp answer | ✓ |
| P1 ↔ P4 | chain vs strategic implication | ✓ |
| P5 reads P2+P3 | synthesis verdict | ✓ |

All confirmed. **Confidence: HIGH.**

---

## Step 4 — Express as Question Tree

### P1 — 5-link causal chain (HUB)

**Question:** What are the 5 causal links in the chain that prevented Sensemaking's load-bearing concept test from firing usefully on Memory in the prior MVL+ run, with each link's description, the existing Sensemaking failure mode that covers it (or a note that the link is a manifestation of others), per-link evidence citations from spec-text and docarchive lines, and the primary/contributing ranking?

**Verification criteria:**
- [ ] All 5 chain links populated: Inheritance / Anchoring / Categorization / Frame-scope capture / Procedural enumeration.
- [ ] Each link mapped to existing Sensemaking failure mode where possible: Status Quo Bias (link 1), Anchor Dominance (link 2), Categorization (link 3, manifestation), Perspective Blindness on frame-exit perspective (link 4 PRIMARY), Premature Stabilization (link 5).
- [ ] Each link has at least one evidence citation: spec text line OR docarchive line from the prior `2026-05-09_18-23__metaloop_autonomy_ladder_and_open_design_questions/docarchive/sensemaking.md`.
- [ ] Primary/contributing ranking explicit.
- [ ] Link 4 explicitly named as primary with the reasoning: even if the test had fired, the frame's scope had already settled Memory's meaning to meta-loop-only.
- [ ] No link claims a NEW failure mode beyond existing Sensemaking spec; "frame-scope capture" used DESCRIPTIVELY only.

### P2 — Maintenance evaluation

**Question:** Given the 5-link chain (P1), which prior loop_diagnose maintenance candidates (M1-M6) cover which chain links, where are the gaps, and what new (DEFERRED) candidate addresses the primary uncovered link?

**Verification criteria:**
- [ ] Per-link coverage table: for each chain link, list which of M1-M6 (or none) addresses it.
- [ ] Gaps explicit: the primary uncovered link (link 4) is named.
- [ ] New (DEFERRED) candidate proposed: a "frame-exit perspective check" added to Sensemaking Phase 2 perspective list.
- [ ] DEFERRAL justified per `homegrown/protocols/loop_diagnose.md` Step 5 (don't propose broad rewrites from N=1).
- [ ] Revival trigger specified: M4 audit produces ≥3 instances of frame-scope-capture-like patterns across distinct inquiries.
- [ ] M1's role re-evaluated: closes link 5 (procedural symptom); does NOT close link 4 (primary cause). Retains value as downstream safety-net.

### P3 — Sharp answer paragraph

**Question:** What is the one-paragraph user-facing answer that names the primary causal mechanism, references the chain context for honesty, and tells the user what to make of the prior diagnostic's M1?

**Verification criteria:**
- [ ] One paragraph, ≤200 words.
- [ ] Names the primary mechanism explicitly: frame-scope capture (Perspective Blindness on frame-exit perspective).
- [ ] References the chain (5-link) for honesty without re-explaining each link.
- [ ] States M1's relationship to the primary: addresses symptom, not cause.
- [ ] States the maintenance posture: existing M1-M6 retain value; new candidate for primary link is DEFERRED.

### P4 — Strategic implication (research frontier)

**Question:** What strategic implication does this drill-down surface about how project-wide visibility transfers as the meta-loop ladder graduates roles from human to system, and why is this a research frontier rather than an actionable maintenance candidate?

**Verification criteria:**
- [ ] One paragraph naming the implication.
- [ ] Why research frontier (not actionable): out of scope for THIS inquiry; project-stage-dependent; would require a separate inquiry.
- [ ] References to specific levels (L0 has it human-only; L1+ requires explicit transfer).
- [ ] Connection to existing 9-axis frame from the prior loop_diagnose finding (does the 9-axis frame need a 10th "project-wide-visibility" axis?).
- [ ] Explicit "do not commit" note — flag as Open Question / Research Frontier in the finding, not as a Next Action.

### P5 — Diagnostic verdict

**Question:** What is the diagnostic verdict (ACTIONABLE / PARTIAL / INCONCLUSIVE) for this drill-down, and what is the recommended next step?

**Verification criteria:**
- [ ] Verdict assigned with criteria.
- [ ] Best-supported diagnosis: link 4 (frame-scope capture / Perspective Blindness on frame-exit) primary; chain attribution for the rest.
- [ ] Strongest maintenance candidate: from existing M1-M6, M1 still has value but doesn't close link 4. Strongest NEW candidate: DEFERRED frame-exit perspective check.
- [ ] Main uncertainty: whether link 4 is over-fit from N=1; resolved by M4 audit.
- [ ] Recommended next step: (a) launch M4 audit (already an action from prior loop_diagnose); (b) keep this drill-down's link 4 candidate in the deferred pool with audit revival; (c) preserve M1 as downstream safety-net.

---

## Step 5 — Map Interfaces

| From | To | What flows | Direction | Type |
|---|---|---|---|---|
| P1 | P2 | Chain links + ranking; link 4 named as primary | one-way | Read |
| P1 | P3 | Primary link's identity (link 4); chain reference for honesty | one-way | Read |
| P1 | P4 | Chain analysis surfaced the L0-only project-wide-visibility property | one-way | Read |
| P2 | P5 | Maintenance landscape (existing coverage + DEFERRED new candidate) | one-way | Read |
| P3 | P5 | Sharp answer's framing | one-way | Read |
| P4 | P5 | Strategic implication for "main uncertainty" or "recommended next step" if relevant | one-way | Read |

All flows one-way Reads. No bidirectional, no shared state, no circular.

### Hidden coupling check

- **Q: Does P3 hide-couple with P2?** P3 says "M1 closes symptom not cause" — that's a fact ESTABLISHED in P2's coverage matrix. P3 reads P2 indirectly via P1's primary-link finding. Make explicit: P3's verification criterion 4 says "states M1's relationship to the primary" — this requires reading P2's evaluation. Rephrase: P3 reads P1+P2.
- **Q: Does P5 require P4?** Verdict's main-uncertainty field is satisfied by the audit-pending claim (already in P2). P4 (strategic implication) is independent. P5 doesn't require P4.

Updated interface: P3 reads P1 + P2 (not just P1).

---

## Step 6 — Order by Dependency

```
Step 1: P1 (HUB — chain)                              ─────────── core
Step 2: P2 (maintenance) reads P1                     ───┐
Step 3: P3 (sharp answer) reads P1 + P2               ───┤── parallel after P2
        P4 (strategic implication) reads P1           ───┘
Step 4: P5 (verdict) reads P1 + P2 + P3 (+ optional P4)
```

### Reasoning

- **P1 first:** the hub. Every other piece reads from it.
- **P2 next:** maintenance evaluation depends on chain links + ranking.
- **P3 + P4 in parallel after P2:** P3 reads P1+P2 (needs maintenance map for "M1 closes symptom not cause"); P4 reads P1 only.
- **P5 last:** synthesizes upstream.

### Critical path

P1 → P2 → P3. P5 depends on P3.

### No circular dependencies

Verified.

---

## Step 7 — Self-Evaluate

### Minimum 3-dimension evaluation

| Dimension | Check | Verdict | Notes |
|---|---|---|---|
| **Independence** | Each piece's question answerable without sibling pieces? | **PASS** | P2/P4 read P1 only; P3 reads P1+P2; P5 reads upstream. No piece needs another's interior content. |
| **Completeness** | Pieces cover the whole? | **PASS** | The deliverable elements (causal mechanism, chain, maintenance evaluation, sharp answer, strategic implication, verdict) are all covered. |
| **Reassembly** | Pieces + interfaces = whole? | **PASS** | P1 chain + P2 maintenance + P3 sharp answer + P4 implication + P5 verdict → complete diagnostic deliverable answering the user's "why" + "primary mechanism" + "what to do." |

### Determination-mechanism check

- **Determination at runtime:** "Should the new (DEFERRED) candidate be revived to ACTIONABLE?" — depends on M4 audit results.
- **Piece addressing how the check is performed:** P2 explicitly owns this. P2's verification criterion 5 specifies the revival trigger as "M4 audit produces ≥3 instances of frame-scope-capture-like patterns across distinct inquiries." Pass.

### Full 7-dimension evaluation

| Dimension | Verdict | Notes |
|---|---|---|
| Independence | PASS | (above) |
| Completeness | PASS | (above) |
| Reassembly | PASS | (above) |
| Tractability | PASS | P1 has 5 links (each ≈100 words); P2 has coverage matrix + 1 new candidate; P3 is one paragraph; P4 is one paragraph; P5 is verdict block. All small. |
| Interface clarity | PASS | All flows tabulated; one-way Reads; hidden coupling surfaced (P3 reads P1+P2). |
| Balance | **PASS** | More balanced than prior decompositions — P1 hub is largest but P2 + P3 + P4 are similar in size. |
| Confidence | PASS | Top-down ↔ bottom-up agreed. |

### Failure-mode self-check

- **Premature decomposition?** No — Sensemaking provided clear chain structure before decomposition.
- **Wrong boundaries?** No — boundaries cut at low-coupling regions; chain links stay together (high internal coupling within hub).
- **Hidden coupling?** Surfaced (P3 reads P2 indirectly via P1's primary-link finding); made explicit.
- **Missing pieces?** No — determination-mechanism check passed; all deliverable elements covered.
- **Over-decomposition?** Borderline — 5 pieces for a focused drill-down. P5 (verdict) might fold into P3 (sharp answer) if simpler is desired. Decision: keep separate because the loop_diagnose output template includes a verdict separate from a finding summary. Acceptable.
- **Ignoring dependencies?** No — Step 6 explicit.
- **Imbalanced?** No — all pieces are similar in size/complexity.

---

## Final Deliverable

### Coupling Map

One hub (P1: 5-link chain with failure-mode mapping + evidence + ranking), three spokes (P2: maintenance evaluation reading P1; P3: sharp answer reading P1+P2; P4: strategic implication reading P1), one synthesis (P5: verdict reading upstream).

### Question Tree

- **P1 — 5-link causal chain** (hub): Status Quo Bias → Anchor Dominance → Categorization (manifestation) → Frame-scope capture / Perspective Blindness on frame-exit (PRIMARY) → Premature Stabilization (procedural).
- **P2 — Maintenance evaluation** (spoke): which M1-M6 cover which links + new DEFERRED candidate for link 4.
- **P3 — Sharp answer** (spoke): one paragraph naming primary mechanism + chain reference + M1 status.
- **P4 — Strategic implication** (spoke): research frontier on project-wide-visibility transfer at higher meta-loop levels.
- **P5 — Diagnostic verdict** (synthesis): ACTIONABLE/PARTIAL/INCONCLUSIVE + best diagnosis + strongest candidate + main uncertainty + next step.

### Interface Map

| From | To | Flow | Type |
|---|---|---|---|
| P1 | P2 | Chain + ranking | Read |
| P1 | P3 | Primary link identity | Read |
| P1 | P4 | Chain insight surfacing strategic implication | Read |
| P2 | P3 | M1 coverage status | Read |
| P2 | P5 | Maintenance landscape | Read |
| P3 | P5 | Sharp answer framing | Read |
| P4 | P5 | (optional) — main-uncertainty source | Read |

### Dependency Order

```
Step 1: P1 (hub)
Step 2: P2 (reads P1)
Step 3: P3 (reads P1+P2) + P4 (reads P1) — parallel
Step 4: P5 (reads P1+P2+P3, optional P4)
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
1. Commit P1 — write the 5-link chain with each link's description, failure-mode mapping, evidence (spec-text + docarchive lines), primary/contributing tag.
2. Commit P2 — produce coverage matrix; commit the new (DEFERRED) "frame-exit perspective check" candidate with full operational detail (what changes, file affected, risk class, expected benefit, evaluation gate, branch-experiment flag, revival trigger).
3. Commit P3 — write the sharp one-paragraph answer.
4. Commit P4 — write the strategic implication paragraph; flag as Research Frontier.
5. Commit P5 — diagnostic verdict.
6. Apply few mechanism variations on P2's new candidate (Inversion, Domain Transfer) to confirm it's the right form. Do NOT generate 21 variations — this is a drill-down; minimum coverage suffices.

**Critique should:**
1. Test P1's chain attribution for over-fitting from N=1.
2. Test whether "primary" attribution to link 4 holds against the alternative (link 5 procedural-scope as primary).
3. Test whether the new (DEFERRED) candidate's revival trigger is sharp enough.
4. Test for self-reference collapse (sensemaking diagnosing sensemaking).
5. Verify no broad fundamentals rewrites are being proposed from N=1 evidence.
