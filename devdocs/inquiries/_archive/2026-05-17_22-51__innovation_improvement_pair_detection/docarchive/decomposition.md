# Decomposition — Pair-List Production Work

## User Input

`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-17_22-51__innovation_improvement_pair_detection/_branch.md`

Context: Decomposition phase. Read `_branch.md`, `exploration.md`, `sensemaking.md`. The deliverable is a curated list of ≥10 pair-records each carrying (Prior path, Follow-up path, primary T-tag, optional secondary + sub-type, tier, one-line characterization). 21 Exploration candidates → Sensemaking's 3-clause predicate → ~16 records after Pair-19 sweep-collapse → ≥10 expected to survive. Decompose remaining work into natural pieces.

---

## Step 1 — Perceive Coupling Topology

### Elements within the remaining work

| ID | Element | Description |
|---|---|---|
| E1 | Clause 1 check | Attribution visibility — does Follow-up carry an attribution trace? |
| E2 | Clause 2 check | User-originating content — does the trace contain user-source content? |
| E3 | Clause 3 check | Structural non-derivability — would Prior's loop have produced this without user input? |
| E4 | Primary T-tag assignment | One of T1-T4 per pair |
| E5 | Sub-type + secondary T-tag | Optional sub-type from 12; optional secondary T-tag when notable |
| E6 | Evidence-tier assignment | STRONG / MEDIUM / WEAK per Sensemaking criteria |
| E7 | Pair-19 sweep representation | Collapse 6 instances to 1 primary + 5 component records |
| E8 | Final list assembly | Produce ≥10 records in publishable shape |

### Pairwise coupling

| Pair | Coupling | Why |
|---|---|---|
| E1 ↔ E2 | **STRONG** | Both attribution checks; if E1 fails, E2 is moot. They're effectively one operation: attribution-trace-content-check. |
| E1/E2 ↔ E3 | **MODERATE** | Clauses 1+2 provide inputs to clause 3 (the trace evidence informs the "would the loop have produced this?" judgment) but clause 3 is a separate cognitive operation requiring Prior's finding.md to be re-read. |
| E4 ↔ E5 | **STRONG** | Same taxonomy operation at different granularity (primary tag → sub-type / secondary). |
| E4/E5 ↔ E6 | **WEAK** | Taxonomy and tier are independent dimensions (a T1 pair can be STRONG or WEAK; orthogonal). |
| E6 ↔ E1/E2 | **STRONG** | Tier is directly derived from which attribution traces are present (E1/E2's findings). |
| E6 ↔ E3 | **WEAK** | Tier doesn't depend on clause-3 judgment outcome. |
| E7 ↔ {others} | **WEAK-orthogonal** | Sweep representation is structurally independent of per-record tagging. |
| E8 ↔ E4/E5/E6/E7 | **STRONG** | Final list IS the assembly of tags + tiers + sweep representation. |

### Coupling peaks (clusters)

Three coupling peaks plus an orthogonal layer:

```
                ┌───────────────────────────────────────┐
                │ Peak 1 — PREDICATE TEST               │
                │ E1 + E2 + E3                          │
                │ "Does the candidate pass all 3        │
                │  clauses of the pair criterion?"      │
                └────────────────┬──────────────────────┘
                                 │ (pass-list + evidence — Boundary B1)
                                 ▼
                ┌───────────────────────────────────────┐
                │ Peak 2 — TAG & TIER ASSIGNMENT         │
                │ E4 + E5 + E6                          │
                │ "For each passing candidate, what     │
                │  T-tag and tier does it carry?"       │
                └────────────────┬──────────────────────┘
                                 │ (tagged + tiered records — Boundary B2)
                                 ▼
                ┌───────────────────────────────────────┐
                │ Peak 3 — FINAL LIST ASSEMBLY          │
                │ E8                                    │
                │ "Final publishable consolidated list" │
                └───────────────────────────────────────┘

   ──────  Peak 4 (orthogonal) — SWEEP REPRESENTATION (E7) ──────
         handles Pair 19's 6-instance collapse; feeds Peak 3
```

### Boundaries (low-coupling valleys)

- **B1** between Peak 1 (Predicate Test) and Peak 2 (Tag & Tier): single-point boundary at the *pass-list with attribution evidence*. Once per candidate, P1 emits "passes" or "fails" plus the cited evidence; P2 consumes only passing candidates.
- **B2** between Peak 2 (Tag & Tier) and Peak 3 (Final List): single-point at the *tagged + tiered record set*. Peak 3 assembles; no further decisions.
- **B3** between Peak 4 (Sweep) and Peak 3 (Final List): single-point at the *sweep-representation rule + component listing*. Independent of tag/tier decisions.

---

## Step 2 — Detect Boundaries (Top-Down)

Four pieces emerge:

- **P1 — Per-Candidate Predicate Test** (E1, E2, E3): apply the 3-clause Boolean to each of 21 candidates.
- **P2 — Per-Passing-Candidate Tag & Tier Assignment** (E4, E5, E6): assign primary T-tag + sub-type + tier.
- **P3 — Sweep Representation** (E7): handle Pair 19's 6-instance collapse.
- **P4 — Final Consolidated List** (E8): assemble the publishable dataset.

---

## Step 3 — Validate Boundaries (Bottom-Up Check)

Atoms (clearly indivisible elements) and their natural clusters:

| Atom | Description | Should belong to |
|---|---|---|
| A1 | "Candidate X has frontmatter `corrects:` pointing to Y" | P1 (clause 1) ✓ |
| A2 | "Candidate X's Source Input contains verbatim quote saying [...]" | P1 (clause 2) + supports P2 (tier) ✓ |
| A3 | "Prior X's `Next Actions` did NOT prescribe Y's direction" | P1 (clause 3) ✓ |
| A4 | "Pair X's user contribution is mechanism objection" | P2 (T1-mechanism-objection assignment) ✓ |
| A5 | "Pair X has verbatim quote — STRONG tier" | P2 (tier assignment) ✓ |
| A6 | "Pair 19 represents 6 instances of the same sweep correction" | P3 ✓ |
| A7 | "Final list ordering: by tier then by T-category" | P4 ✓ |

All atoms group cleanly with their top-down piece. **HIGH CONFIDENCE.**

---

## Step 4 — Express as Question Tree

### Q1 (Piece P1 — Per-Candidate Predicate Test)

> **Which of the 21 Exploration candidates pass all three clauses of Sensemaking's pair criterion?**

Verification criteria:
- [ ] For each of 21 candidates, clause 1 (attribution visibility) verdict assigned with cited evidence (which trace: Source Input quote / frontmatter pointer / Changes-from-Prior trigger / slug marking).
- [ ] For each of 21 candidates, clause 2 (user-originating content) verdict assigned with cited content snippet (verbatim if available; paraphrase otherwise).
- [ ] For each of 21 candidates, clause 3 (structural non-derivability) verdict assigned with reasoning citing Prior's frontier questions / Next Actions (does Prior predict the Follow-up's direction?).
- [ ] Pass-list produced: candidates with ALL THREE clauses = pass.
- [ ] Fail-list produced: candidates failing one or more clauses, with the failing clause named.

### Q2 (Piece P2 — Tag & Tier Assignment)

> **For each passing candidate, what primary T-tag (and optional sub-type / secondary T-tag) and what evidence-tier does it carry?**

Verification criteria:
- [ ] Each passing candidate has primary T-tag assigned from {T1, T2, T3, T4}.
- [ ] Each candidate's sub-type assigned from 12 named sub-types when applicable (omit when no clear match).
- [ ] Secondary T-tag assigned when notable cross-category bleed exists.
- [ ] Each candidate has evidence-tier assigned per Sensemaking's operational criteria (STRONG/MEDIUM/WEAK).
- [ ] One-line characterization produced per pair summarizing the human contribution.

### Q3 (Piece P3 — Sweep Representation)

> **How does the Pair 19 sweep representation appear in the final list?**

Verification criteria:
- [ ] Pair 19 primary record produced (sweep-aggregate; T4 methodology directive; sub-type pattern-extension; STRONG-by-aggregate tier).
- [ ] 6 instance-records listed as evidence-reinforcement (showing each (Prior, Follow-up) pair within the sweep).
- [ ] Sweep counts as 1 toward the ≥10 target (explicitly noted in final-list metadata).

### Q4 (Piece P4 — Final Consolidated List)

> **What is the final consolidated pair-record list in publishable form?**

Verification criteria:
- [ ] At least 10 distinct pair-records present (after P1 fails and P3 sweep-collapse).
- [ ] Each record carries 5 fields: Prior path, Follow-up path, primary T-tag (+ optional sub-type / secondary), evidence-tier, one-line characterization.
- [ ] Records ordered for downstream usability (proposed default: by tier STRONG → MEDIUM → WEAK; within tier by T-category T1 → T4; within category by chronology).
- [ ] Pair-19 sweep represented as 1 primary + 6 component sub-records (per P3).
- [ ] Metadata: total pair count; tier distribution; T-category distribution; sparse-category leverage note.

---

## Step 5 — Map Interfaces

### Interface I1: P1 → P2

| Field | Value |
|---|---|
| **What flows** | Pass-list (subset of 21 candidates with all 3 clauses passing) + per-candidate evidence citations (which traces were found at clauses 1 and 2). |
| **Direction** | One-way (P1 produces, P2 consumes). |
| **Type** | Data + dependency. |
| **Assumptions P2 makes about P1** | (a) The pass-list is complete (no candidate omitted); (b) the evidence citations from clauses 1 and 2 are rich enough to derive tier without re-reading sources; (c) the fail-list is preserved separately for traceability. |
| **Hidden-coupling risk** | If P1's per-candidate evidence-citation is sparse (just "clause 1: pass" without quoting the trace), P2 has to re-derive evidence for tier assignment, duplicating work. Mitigation: P1 must produce *rich-evidence pass-records* — every passing candidate includes the evidence excerpt that justifies the pass. |

### Interface I2: P1 → P3

| Field | Value |
|---|---|
| **What flows** | Pair 19's overall pass/fail verdict (applied at the sweep level — does the sweep have a single user contribution origin that passes all 3 clauses?). |
| **Direction** | One-way. |
| **Type** | Data. |
| **Assumptions P3 makes about P1** | (a) Pair 19's verdict is treated as one event, not 6; (b) if Pair 19 fails any clause, P3 produces no primary sweep record. |

### Interface I3: P2 → P4

| Field | Value |
|---|---|
| **What flows** | Tagged + tiered passing-candidate records (each with 5 fields). |
| **Direction** | One-way. |
| **Type** | Data + dependency. |
| **Assumptions** | (a) Each passing record is complete (all 5 fields filled); (b) tags and tiers are consistent with Sensemaking's commitments. |

### Interface I4: P3 → P4

| Field | Value |
|---|---|
| **What flows** | Sweep representation (1 primary + 6 components); sweep metadata (counts as 1 toward target). |
| **Direction** | One-way. |
| **Type** | Data + structural-rule. |
| **Assumptions** | (a) P4 inserts the sweep at the right position in the ordered list; (b) component sub-records render as evidence-reinforcement, not as 6 separate top-level entries. |

### Interface I5 (external): Sensemaking → P1

| Field | Value |
|---|---|
| **What flows** | The 3-clause Boolean predicate (committed verbatim in Sensemaking's SV6); the 21-candidate list from Exploration. |
| **Direction** | One-way. |
| **Type** | Dependency (the predicate is the input contract). |
| **Hidden-coupling risk** | Clause 3 ("would Prior's loop have produced this?") requires reading Prior's `frontier questions` and `Next Actions` from Prior's `finding.md`. The candidate records in Exploration do NOT include Prior's frontier+next-actions. P1 must do additional reads. NAMED. |

### Interface I6 (external): Sensemaking → P2

| Field | Value |
|---|---|
| **What flows** | The 4-category taxonomy (T1-T4), 12 sub-types, 3-tier definitions. |
| **Direction** | One-way. |
| **Type** | Dependency (input contracts). |

---

## Step 6 — Order by Dependency

**Linear chain (with one parallel branch):**

```
[Sensemaking: predicate + taxonomy + tiers]
       │ (input contracts)
       ▼
   P1 ───┬──────► P2 ──────► P4
         │
         └──────► P3 ──────►  (joins P4)
```

**Dependency order:**

1. **P1 — Per-Candidate Predicate Test** — must run first. Without P1's pass-list, P2 has no candidates to tag/tier.
2. **P2 — Tag & Tier Assignment** — runs after P1. Depends on P1's pass-list + evidence citations.
3. **P3 — Sweep Representation** — runs after P1's Pair-19 verdict is in; can run in parallel with P2 because it doesn't depend on P2's tag/tier outputs.
4. **P4 — Final Consolidated List** — runs last. Depends on P2's tagged records + P3's sweep representation.

**No circular dependencies.**

**Parallelism:** P2 and P3 can run concurrently after P1 (in this sequential conversation, they'd just be adjacent sections of the Innovation output, not actual parallel execution).

---

## Step 7 — Self-Evaluation

### Minimum 3 dimensions

| Dimension | Check | Verdict |
|---|---|---|
| **Independence** | Each piece workable without the others? | **PASS** — P1 reads Sensemaking + Exploration only; P2 reads P1's output only; P3 reads P1's Pair-19 verdict only; P4 reads P2 + P3. |
| **Completeness** | Pieces cover the whole? | **PASS** — predicate test + tag/tier + sweep + final-list-assembly covers the entire remaining deliverable. |
| **Reassembly** | Pieces + interfaces = whole? | **PASS** — P1's pass-list + P2's tags + P3's sweep + P4's assembly = the curated dataset specified in `_branch.md`. |

### Full 7 dimensions

| Dimension | Check | Verdict |
|---|---|---|
| Independence | (as above) | PASS |
| Completeness | (as above) | PASS |
| Reassembly | (as above) | PASS |
| **Tractability** | Each piece in one focused pass? | **PASS** — P1 is ~21 candidates × 3 clauses (mechanical with judgment on clause 3); P2 is ~16 passing-candidate × T-tag+tier (mechanical with taxonomy reference); P3 is trivial (one sweep record + 6 components); P4 is trivial assembly. |
| **Interface clarity** | All flows explicit, no hidden dependencies? | **PASS** — 6 interfaces fully specified; 2 hidden-coupling risks named (rich-evidence-from-P1-to-P2; Prior-finding.md-read-needed-for-clause-3). |
| **Balance** | Complexity proportional? | **PARTIAL** — P1 carries ~70% of the cognitive work (the predicate test is where the load-bearing judgment lives). P2-P4 are lighter. Acceptable because P1 IS where the cognitive work belongs; forcing balance would obscure where effort applies. |
| **Confidence** | Top-down + bottom-up agree? | **PASS** — atoms grouped cleanly with the top-down clusters. No misplaced atoms. |

### Determination-mechanism piece check (Step 7 refinement)

The Q-tree includes "clause 3 verdict" as a load-bearing concept whose application requires a runtime determination — for each candidate, "did Prior's loop predict the Follow-up's direction?" The mechanism for that determination is: read Prior's `## Frontier Questions` / `## Next Actions` / `## Open Questions` sections and check whether they mention the Follow-up's user-driven direction. Q1 includes this as a verification criterion. **PASS.**

### Failure-mode checks

- **Premature decomposition?** Sensemaking committed predicate + taxonomy + tiers; the whole was understood before decomposing. ✓ Avoided.
- **Wrong boundaries?** Interfaces single-point (I1, I3, I4) or single-input contracts (I5, I6). Low-traffic boundaries. ✓ Avoided.
- **Hidden coupling?** Two risks named (rich evidence from P1; Prior's finding.md read for clause-3). FLAGGED, not avoided — surfacing IS the corrective.
- **Missing pieces?** Completeness passes; determination-mechanism piece check passes. ✓ Avoided.
- **Over-decomposition?** Four pieces for a focused deliverable. Lighter than this would conflate predicate-test with tagging. ✓ Avoided.
- **Ignoring dependencies?** P1 → P2/P3 → P4 explicit. ✓ Avoided.
- **Imbalanced decomposition?** P1 is heaviest, acknowledged. The deliverable's load-bearing work IS the predicate test; balance would be wrong here. ✓ Acknowledged, not avoided.

---

## Answer to the user-question-shaped subquestion

The remaining work has a clean linear decomposition: predicate-test → tag/tier → sweep-handling → final-assembly. The cognitive lever sits in P1's clause-3 judgment ("would Prior's loop have produced this?"). P2-P4 are mechanical assembly given P1's output.

Innovation will execute P1 → P2 + P3 → P4 (the work is structured enough that Innovation can produce the final list directly; Critique then adversarially tests the clause-3 judgments and may drop weak-tier pairs).

---

## Open hand-offs to Innovation and Critique

**For Innovation:**

- Execute P1 → P2 + P3 → P4 producing the curated ≥10-pair list with all 5 fields per record.
- Pay particular attention to clause-3 judgments: for each candidate, briefly cite Prior's frontier questions / Next Actions / Open Questions and indicate whether they predicted the Follow-up's direction.
- Order the final list by tier (STRONG → MEDIUM → WEAK), then within tier by T-category (T1 → T4), then by chronology. State the chosen order at the head of the list.
- Include metadata: total count, tier distribution, T-category distribution, sparse-category leverage note.

**For Critique:**

- Adversarially test P1's clause-3 judgments for the borderline candidates. Specifically: where a pair was admitted on a paraphrased rather than verbatim quote, test whether Prior would have produced the Follow-up's direction without user input. Use the strongest counter-argument per pair.
- Decide whether any WEAK-tier pairs should be dropped from the final dataset (vs. kept with explicit tier-tag for downstream weighting).
- Validate Pair 21's inclusion: the assistant-utterance-as-Prior shape is novel; confirm the predicate still holds.
- Validate Pair 19's sweep-count-as-1 rule against the structural argument; surface the trade-off if the user might want the alternative count.
- Coverage assessment: do the final ≥10 pairs span all 4 T-categories? If a category has 0 pairs, that's itself a signal worth flagging for the downstream `/innovate` gap analysis.
