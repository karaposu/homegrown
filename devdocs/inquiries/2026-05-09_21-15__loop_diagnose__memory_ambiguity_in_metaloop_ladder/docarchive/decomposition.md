# Decomposition: Loop diagnose — Memory ambiguity in metaloop ladder

## Step 1 — Perceive Coupling Topology

### Elements in the whole

The diagnostic deliverable (per `loop_diagnose.md` Step 4) plus Sensemaking's stabilized model contain these elements:

1. **Per-hypothesis evidence + attribution** — one entry per failure point (Sensemaking, Innovation, Critique, MVL+ runner). Each in the loop_diagnose template (affected stage, shortcoming type, evidence triplet [prior / human correction / corrected], confidence, why-not-stronger, maintenance candidate, evaluation gate).
2. **Failure attribution summary table** — compact table compressing the 4 hypotheses by stage / type / evidence-strength / confidence / candidate-action.
3. **Maintenance candidates with operational detail** — what changes, which file/protocol affected, risk class, expected benefit, evaluation gate, branch-experiment status.
4. **Diagnostic verdict** — ACTIONABLE / PARTIAL / INCONCLUSIVE summary.
5. **Failure class context** — explanation of the two orthogonal failure classes (term-ambiguity, baseline-blindness) and how they interacted in this case.
6. **Recurrence monitoring** — Reflect-channel recurrence claim + audit scope.

### Pairwise coupling

| A | B | Coupling | Reason |
|---|---|---|---|
| Per-hypothesis (#1) | Failure summary (#2) | **Strong** | #2 is a tabular compression of #1; change attribution → table changes |
| Per-hypothesis (#1) | Maintenance candidates (#3) | **Strong** | Each hypothesis names a maintenance candidate; detailed expansion lives in #3 |
| Per-hypothesis (#1) | Diagnostic verdict (#4) | **Moderate** | Verdict summarizes strongest hypothesis + maintenance candidate; reads from #1 |
| Failure summary (#2) | Diagnostic verdict (#4) | **Moderate** | Verdict reads "best-supported diagnosis" from the summary table |
| Maintenance candidates (#3) | Diagnostic verdict (#4) | **Moderate** | Verdict names "strongest maintenance candidate" |
| Failure class context (#5) | Per-hypothesis (#1) | **Strong** | Each hypothesis is positioned within one or both classes; #5 frames #1 |
| Recurrence (#6) | Failure class context (#5) | **Weak** | Recurrence is an extension of class #5 (term-ambiguity); separate concern |
| Recurrence (#6) | Maintenance candidates (#3) | **Weak** | One specific maintenance candidate (audit) addresses recurrence; otherwise independent |

### Coupling map

```
                   ┌─────────────────────────────────────────────────────┐
                   │            P5: Failure class context                │
                   │   (term-ambiguity + baseline-blindness, interact)   │
                   └────────────────────────┬────────────────────────────┘
                                            │ frames
                                            ▼
        ┌────────────────────────────────────────────────────────────────┐
        │  P1: Per-failure-point hypotheses (4 hypotheses, hub)           │
        │  - H1 Sensemaking (primary)                                     │
        │  - H2 Innovation (secondary)                                    │
        │  - H3 Critique (tertiary)                                       │
        │  - H4 MVL+ runner (contributing)                                │
        └─────────────┬──────────────┬───────────────┬───────────────────┘
                      │              │               │
                      │ summary      │ details       │ verdict input
                      ▼              ▼               ▼
              ┌──────────────┐  ┌─────────────┐  ┌────────────────┐
              │  P2: Attrib. │  │ P3: Maint.  │  │ P4: Diagnostic │
              │  summary     │  │ candidates  │  │ verdict        │
              │  table       │  │ (per layer) │  │                │
              └──────────────┘  └─────────────┘  └────────────────┘
                                       ▲
                                       │ recurrence audit candidate
                                       │
                                ┌──────┴───────┐
                                │ P6: Recur.   │
                                │ monitoring   │
                                │ (Reflect-ch.)│
                                └──────────────┘
```

**Cluster identification:**
- **Hub:** P1 (hypotheses) — every other piece reads from it.
- **Spokes:** P2 (summary), P3 (maintenance candidates) — both read P1.
- **Frame:** P5 (failure-class context) — frames P1 from above; frames the introduction.
- **Verdict:** P4 (diagnostic verdict) — reads from P1, P2, P3 to synthesize.
- **Side-extension:** P6 (recurrence monitoring) — feeds one candidate into P3 and is referenced in P4's main-uncertainty field.

---

## Step 2 — Detect Boundaries (Top-Down)

Cuts at low coupling:

- **B-1: Between P1 and P2.** Crossing traffic: 1 row of summary per hypothesis. Low.
- **B-2: Between P1 and P3.** Crossing traffic: each hypothesis names one maintenance candidate; P3 expands each. One name reference per hypothesis. Low-Medium.
- **B-3: Between P2 and P4.** Crossing traffic: P4 reads "strongest" from the summary table. Low.
- **B-4: Between P3 and P4.** Crossing traffic: P4 names the "strongest maintenance candidate." Low.
- **B-5: Between P5 and P1.** Crossing traffic: P5 frames; P1 references the classes. Low.
- **B-6: Between P6 and P3.** Crossing traffic: one P3 candidate (audit) is fed by P6. Low.

All boundaries are clean low-coupling cuts. No high-coupling region is being severed.

---

## Step 3 — Validate Boundaries (Bottom-Up)

### Atoms (irreducible elements)

- A1–A4: each individual hypothesis (Sensemaking / Innovation / Critique / runner).
- A5: the attribution table row format.
- A6–A10: each individual maintenance candidate (5 candidates anticipated: runner safety check / Sensemaking application improvement / Critique application improvement / baseline-blindness mitigation / recurrence audit).
- A11: the diagnostic verdict's 4 fields (Overall, best-supported diagnosis, strongest maintenance candidate, main uncertainty, recommended next step).
- A12–A13: failure class definitions (term-ambiguity, baseline-blindness).
- A14: recurrence-claim Reflect-channel detail.

### Atom-to-piece grouping

| Atoms | Piece |
|---|---|
| A1–A4 (hypotheses) | P1 |
| A5 (table format) | P2 |
| A6–A10 (maintenance candidates) | P3 |
| A11 (verdict fields) | P4 |
| A12–A13 (class definitions) | P5 |
| A14 (Reflect-channel detail) | P6 |

### Boundary checks

- **A6 (runner safety check) / A7 (Sensemaking application improvement) / A8 (Critique application improvement)** are independent maintenance candidates, each addressing one of the failure layers. No splitting issues.
- **A9 (baseline-blindness mitigation)** could attach to multiple disciplines (Innovation has it, but the runner could also enforce L0 scrutiny). Place in P3 with cross-reference to H2.
- **A10 (recurrence audit)** is the bridge atom between P3 and P6. It physically lives in P3 (as one maintenance candidate) but its rationale lives in P6 (recurrence monitoring).
- **The hypotheses (A1–A4) each have an embedded "maintenance candidate" field** per loop_diagnose template. This duplicates atoms A6–A10. The boundary needs care: the EMBEDDED maintenance candidate field in P1 is a brief one-line pointer; the FULL detail (risk class, evaluation gate, branch-experiment status) lives in P3. No atom is split — the brief is in P1, the full operational detail is in P3.

### Top-down vs bottom-up

| Boundary | Top-down location | Bottom-up confirms? |
|---|---|---|
| P1 ↔ P2 | hypothesis detail vs summary | ✓ |
| P1 ↔ P3 | hypothesis detail vs maintenance detail | ✓ (with the embedded-vs-full convention) |
| P3 ↔ P6 | maintenance candidates vs recurrence detail | ✓ (audit candidate in P3; rationale in P6) |
| P5 ↔ P1 | class context vs hypotheses | ✓ |
| P4 reads from P1+P2+P3 | verdict reads upstream | ✓ |

All confirmed. **Confidence: HIGH.**

---

## Step 4 — Express as Question Tree

### P1 — Per-failure-point hypotheses (HUB)

**Question:** For each failure point in the metaloop-ladder inquiry's pipeline (H1 Sensemaking, H2 Innovation, H3 Critique, H4 MVL+ runner), what is the affected stage, shortcoming type, evidence triplet (prior inquiry / human correction / corrected inquiry), confidence level, why-not-stronger explanation, brief maintenance candidate, and evaluation gate — written in the loop_diagnose template format?

**Verification criteria:**
- [ ] H1 (Sensemaking) populated: stage = Sensemaking; shortcoming = load-bearing concept test applied shallowly (proxy-vs-structural sub-test not run on Memory); evidence from each of 3 sources; confidence; brief candidate.
- [ ] H2 (Innovation) populated: stage = Innovation; shortcoming = baseline-blindness (L0 row inherited without scrutiny); evidence; confidence; brief candidate.
- [ ] H3 (Critique) populated: stage = Critique; shortcoming = specification-gap probe applied to commitments not terms; evidence; confidence; brief candidate.
- [ ] H4 (MVL+ runner) populated: stage = orchestration / loop-framing; shortcoming = no inter-discipline term safety check; evidence; confidence; brief candidate.
- [ ] Each hypothesis cites specific spec-text or specific docarchive lines as evidence.
- [ ] Confidence levels assigned (HIGH / MEDIUM / LOW per loop_diagnose template).
- [ ] None claims exact root-cause when evidence is mixed.

### P2 — Failure attribution summary table

**Question:** What is the compact tabular summary of the 4 hypotheses across stage / shortcoming type / evidence strength / confidence / candidate action?

**Verification criteria:**
- [ ] One row per hypothesis (4 rows).
- [ ] Columns match loop_diagnose template: Affected stage, Shortcoming type, Evidence strength, Confidence, Candidate action.
- [ ] Evidence-strength column uses weak / medium / strong (not just confidence — strength is about how much evidence supports the hypothesis vs. confidence is about how decisively the evidence isolates it).

### P3 — Maintenance candidates (per layer)

**Question:** For each maintenance opportunity (runner-level cheap term safety check; Sensemaking application reliability improvement; Critique application term-operability sub-check; baseline-blindness mitigation for Innovation/runner; recurrence audit), what should change, which file/protocol is affected, what is the risk class (low/medium/high), expected benefit, evaluation gate, and whether it should become a branch experiment?

**Verification criteria:**
- [ ] ≥3 candidates committed (one per primary layer: runner, Sensemaking app, Critique app), with the option to commit additional candidates for baseline-blindness and recurrence audit.
- [ ] Each candidate names: what changes, which file/protocol, risk class, expected benefit, evaluation gate, branch-experiment flag.
- [ ] Risk class assigned (low / medium / high) with rationale.
- [ ] Evaluation gate is time-bound, condition-bound, or observable (no vague "eventually").
- [ ] Each candidate cross-references the failure hypothesis it addresses (e.g., "addresses H1").
- [ ] Per `loop_diagnose.md` Step 5: source edits proposed only when evidence is strong; otherwise propose monitoring / further diagnostic.
- [ ] Per `loop_diagnose.md` Step 5: don't propose broad spec rewrites from one correction chain.

### P4 — Diagnostic verdict

**Question:** What is the overall diagnostic verdict (ACTIONABLE / PARTIAL / INCONCLUSIVE), the best-supported diagnosis, the strongest maintenance candidate, the main uncertainty, and the recommended next step?

**Verification criteria:**
- [ ] Overall verdict assigned with explicit criteria (e.g., "ACTIONABLE because at least one maintenance candidate has strong evidence + concrete evaluation gate").
- [ ] Best-supported diagnosis names the primary failure point + class.
- [ ] Strongest maintenance candidate names which P3 entry has best evidence-vs-cost.
- [ ] Main uncertainty names what evidence is missing or what could change the verdict.
- [ ] Recommended next step is specific (e.g., "ship runner safety check; monitor for recurrence; defer Sensemaking spec changes pending audit").

### P5 — Failure class context

**Question:** What are the two orthogonal failure classes (term-ambiguity, baseline-blindness), how did they interact in this case, and how should the diagnosis differentiate fixes per class?

**Verification criteria:**
- [ ] Both classes defined with one-sentence descriptions.
- [ ] Interaction described: term-ambiguity (proximate) + baseline-blindness (distal) compounded; either class alone would have been less likely to ship.
- [ ] Per-class fixes mapped: term-ambiguity ↔ load-bearing concept test reliability + term safety check; baseline-blindness ↔ L0/baseline-row scrutiny.
- [ ] "Baseline-blindness" flagged as PROVISIONAL (loop-coined; user-language alignment partial).

### P6 — Recurrence monitoring

**Question:** What is the recurrence claim about Reflect-channel, what audit scope would confirm or reject it, and what is the revival trigger that would promote audit-related maintenance candidates from MONITORING to ACTIONABLE?

**Verification criteria:**
- [ ] Reflect-channel recurrence stated with evidence (Critique's "operational details deferred" caveat from prior inquiry).
- [ ] Audit scope specified: which inquiries to scan; which terms to check (`enes/` sources, recent inquiries, recurring vocabulary like "session", "context", "state").
- [ ] Revival trigger time-bound or observable (e.g., "if audit produces ≥3 instances of un-disambiguated load-bearing terms in different inquiries").
- [ ] Connection to P3 audit candidate explicit.

---

## Step 5 — Map Interfaces

| From | To | What flows | Direction | Type |
|---|---|---|---|---|
| P5 | P1 | Class definitions (term-ambiguity, baseline-blindness) used to position each hypothesis | one-way | Read |
| P1 | P2 | Hypothesis essentials (stage / type / evidence-strength / confidence / candidate name) | one-way | Read |
| P1 | P3 | Brief maintenance candidate names (referenced by H_N, expanded to full operational detail in P3) | one-way | Read |
| P1 | P4 | Best-supported diagnosis (which hypothesis is strongest) | one-way | Read |
| P2 | P4 | Summary table provides compact view for verdict synthesis | one-way | Read |
| P3 | P4 | Strongest maintenance candidate identification | one-way | Read |
| P6 | P3 | Recurrence audit candidate's rationale; audit scope; revival trigger | one-way | Read |
| P6 | P4 | Recurrence as main-uncertainty source for verdict | one-way | Read |

All flows one-way Reads. No bidirectional, no shared state, no circular dependencies.

### Hidden coupling check

- **Q: Does P3 (maintenance candidates) hide-couple with P5 (failure class context)?** Each candidate addresses one or both classes. The cross-reference is explicit (each candidate says "addresses term-ambiguity" or "addresses baseline-blindness"). Made explicit via P3 verification criterion 5.
- **Q: Does P4 (verdict) hide-couple with P6 (recurrence)?** Yes — P4's main-uncertainty field references recurrence. Made explicit via P4 verification criterion 4 and the P6→P4 interface.
- **Q: Are there any maintenance candidates whose risk class depends on multiple hypotheses?** The runner safety check addresses both H1 and H2 (term-ambiguity catches at runner level can mitigate Sensemaking AND Innovation gaps). Not hidden — explicit in the candidate's "addresses" field.

No hidden coupling remains.

---

## Step 6 — Order by Dependency

```
Step 1: P5 (failure class context) ──────────────── frames the rest
Step 2: P1 (hypotheses, hub) ─────────────────── core deliverable
Step 3: P2 (attribution summary) + P3 (maintenance candidates) + P6 (recurrence) ── parallel
Step 4: P4 (diagnostic verdict) ──────────────── reads P1, P2, P3, P6
```

### Reasoning

- **P5 first:** the class context frames the hypotheses' positioning. Writing P1 without P5 would be possible but would require backtracking once classes are named.
- **P1 next:** the hub. Every other piece reads from it.
- **P2, P3, P6 in parallel:** each reads P1 independently.
- **P4 last:** synthesizes upstream into the verdict.

### Critical path

P5 → P1 is the critical path. P4 is downstream. P2/P3/P6 are spokes that complete in parallel.

### No circular dependencies

Verified. All flows are one-way.

---

## Step 7 — Self-Evaluate

### Minimum 3-dimension evaluation

| Dimension | Check | Verdict | Notes |
|---|---|---|---|
| **Independence** | Each piece's question answerable without sibling pieces? | **PASS** | P2/P3/P6 read P1 only; P4 reads upstream only; P5 is independent of P1's content. |
| **Completeness** | Pieces cover the whole? | **PASS** | All loop_diagnose Step 4 required elements covered: per-hypothesis (P1), summary (P2), candidates (P3), verdict (P4). Plus P5 (class context for understanding) and P6 (recurrence for monitoring). |
| **Reassembly** | Pieces + interfaces = whole? | **PASS** | P5 + P1 + P2 + P3 + P6 + P4 → complete diagnostic finding per loop_diagnose template + Sensemaking-derived class context + recurrence monitoring. |

### Determination-mechanism check

- **Determination at runtime:** "Should a maintenance candidate be ACTIONABLE or DEFERRED?" — this depends on evidence strength.
- **Piece addressing how the check is performed:** P3 explicitly owns this. P3's verification criterion 6 says: "Per `loop_diagnose.md` Step 5: source edits proposed only when evidence is strong; otherwise propose monitoring." The determination mechanism is "compare evidence to threshold (strong vs weak)." Pass.

- **Determination at runtime:** "Should the recurrence audit reveal more instances?" — this depends on audit results.
- **Piece addressing how the check is performed:** P6 explicitly owns this. P6's verification criterion 3 specifies the revival trigger as "audit produces ≥3 instances." Pass.

### Full 7-dimension evaluation

| Dimension | Verdict | Notes |
|---|---|---|
| Independence | PASS | (above) |
| Completeness | PASS | (above) |
| Reassembly | PASS | (above) |
| Tractability | PASS | Each piece is small enough for one focused pass: P1 has 4 hypotheses (each ≈200 words); P2 is one table; P3 has 3-5 candidates (each ≈100 words); P4 is one verdict block; P5 is two paragraphs; P6 is one paragraph + scope. |
| Interface clarity | PASS | All flows tabulated in Step 5; all are one-way Reads; hidden coupling checked and surfaced. |
| Balance | **WARN (acceptable)** | P1 is heaviest (4 hypotheses with full template). P2 is lightest (one table). P3 is medium-heavy (3-5 candidates). P4 / P5 / P6 are light. The hub-and-spoke balance is intentional (matches loop_diagnose template). Acceptable. |
| Confidence | PASS | Top-down ↔ bottom-up agreed on all boundaries. |

### Failure-mode self-check

- **Premature decomposition?** No — Sensemaking provided clear conceptual structure (4 ranked failure points, 2 classes, 3 maintenance layers) before this decomposition.
- **Wrong boundaries?** No — boundaries cut at low-coupling regions; each piece is internally cohesive.
- **Hidden coupling?** Surfaced and made explicit (3 checks above).
- **Missing pieces?** No — determination-mechanism check passed (P3 owns evidence-vs-threshold; P6 owns audit-trigger).
- **Over-decomposition?** No — 6 pieces for a structured diagnostic deliverable matches the loop_diagnose template's complexity.
- **Ignoring dependencies?** No — Step 6 made explicit (P5 → P1 → parallel(P2,P3,P6) → P4).
- **Imbalanced?** P1 is heavier as the hub; this is intentional matching the template.

---

## Final Deliverable

### Coupling Map

One frame (P5: failure class context), one hub (P1: 4 hypotheses), three spokes (P2: summary table; P3: maintenance candidates; P6: recurrence monitoring), one verdict node (P4: diagnostic verdict). Strong coupling within hypotheses; one-way Read coupling from hub to spokes; verdict synthesizes upstream.

### Question Tree

- **P5 — Failure class context** (frame): how do term-ambiguity and baseline-blindness interact, and how do per-class fixes differ?
- **P1 — Per-failure-point hypotheses** (hub): 4 hypotheses (Sensemaking primary, Innovation secondary, Critique tertiary, MVL+ runner contributing) in loop_diagnose template format.
- **P2 — Attribution summary table** (spoke): tabular compression of P1.
- **P3 — Maintenance candidates** (spoke): 3-5 candidates with full operational detail (file affected, risk class, evaluation gate, branch-experiment flag).
- **P6 — Recurrence monitoring** (spoke): Reflect-channel recurrence + audit scope + revival trigger.
- **P4 — Diagnostic verdict** (verdict): ACTIONABLE/PARTIAL/INCONCLUSIVE + best diagnosis + strongest candidate + main uncertainty + recommended next step.

### Interface Map

| From | To | Flow | Type |
|---|---|---|---|
| P5 | P1 | Class definitions positioning each hypothesis | Read |
| P1 | P2 | Hypothesis essentials | Read |
| P1 | P3 | Maintenance candidate names | Read |
| P1 | P4 | Best-supported diagnosis | Read |
| P2 | P4 | Compact summary | Read |
| P3 | P4 | Strongest candidate | Read |
| P6 | P3 | Audit candidate rationale | Read |
| P6 | P4 | Main-uncertainty source | Read |

### Dependency Order

```
Step 1: P5 (frame)
Step 2: P1 (hub)
Step 3: P2 + P3 + P6 (parallel spokes)
Step 4: P4 (verdict)
```

### Self-Evaluation

| Dimension | Verdict |
|---|---|
| Independence | PASS |
| Completeness | PASS |
| Reassembly | PASS |
| Tractability | PASS |
| Interface clarity | PASS |
| Balance | WARN (intentional hub-spoke; acceptable) |
| Confidence | PASS |
| Determination-mechanism check | PASS |

**6/7 PASS, 1/7 WARN (acceptable).** Decomposition committed; proceed to Innovation.

---

## Notes for next discipline

**Innovation should:**
1. Commit P1 in full — write 4 hypotheses with all loop_diagnose template fields populated. Cite specific spec text and docarchive lines.
2. Commit P3 with ≥3 maintenance candidates (one per layer at minimum). Use mechanisms (Domain Transfer especially: how do other diagnostic systems handle term-ambiguity catches?) to generate candidates.
3. Commit P5 (failure class context) and P6 (recurrence monitoring) — these are smaller pieces but inform the verdict.
4. Watch for maintenance overreach (per `loop_diagnose.md` Step 5): single correction chain ≠ basis for spec rewrites. Bias toward MONITORING + DEFERRED with revival triggers when evidence is N=1.
5. P2 (summary table) and P4 (verdict) are mechanical compositions of P1+P3+P6 — small mechanism work needed.

**Critique should:**
1. Test each maintenance candidate against evidence-vs-cost: is the proposed change justified by ≥1 strong-evidence hypothesis?
2. Test for self-reference collapse: this critique evaluates a critique-of-critique. Flag if the analysis becomes circular (claiming Critique passes its own evaluation trivially).
3. Test for premature stabilization on the "primary fault: Sensemaking" claim. The critique should consider whether equal-distribution attribution is more honest given that 3 disciplines failed.
4. Verify the diagnostic verdict isn't ACTIONABLE when evidence supports only PARTIAL.
