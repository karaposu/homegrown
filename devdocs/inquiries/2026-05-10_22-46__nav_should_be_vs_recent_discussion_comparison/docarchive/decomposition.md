# Decomposition: nav_should_be vs recent discussion — comparison

## Step 1 — Perceive Coupling Topology

### Elements in the whole

From Sensemaking SV6:

1. **Operations distinction** — concept-mapping vs canonical post-cycle next-move enumeration; load-bearing claim about unit-of-enumeration + input + output + scaling + taxonomy.
2. **Per-use-case matrix** — 10 use cases × 2 designs, with per-use-case verdicts.
3. **Verification step** — read `homegrown/protocols/multi_resolution_navigation.md` to check whether it covers nav_should_be Discussion 1's staged enumeration.
4. **Recommendation** — immediate (keep recent as-is); deferred (concept-mapping path TBD by verification result); vocabulary resolution (honor user's broad "navigation" word).
5. **Step 5 caution** — defer full new-discipline-spec until N>1 evidence.
6. **Vocabulary disambiguation note** — `/navigation` (canonical) vs concept-mapping (new); user's "navigation" stays as broad-concept word.

### Pairwise coupling

| A | B | Coupling | Reason |
|---|---|---|---|
| Operations distinction (#1) | Per-use-case matrix (#2) | **Strong** | Matrix verdicts are derived from which operation each use case fits |
| Operations distinction (#1) | Recommendation (#4) | **Strong** | Recommendation hangs on operations being separate |
| Per-use-case matrix (#2) | Recommendation (#4) | **Moderate** | Matrix supplies per-use-case fit; recommendation synthesizes |
| Verification step (#3) | Recommendation (#4) | **Strong** | Recommendation's branch (leverage existing protocol vs introduce new) depends on verification result |
| Step 5 caution (#5) | Recommendation (#4) | **Moderate** | Caution constrains recommendation tier (defer full spec) |
| Vocabulary note (#6) | Recommendation (#4) | **Moderate** | Vocab framing is part of the user-facing recommendation |

### Coupling map

```
                   ┌─────────────────────────────────┐
                   │ P1: Operations distinction       │
                   │   (HUB — concept-mapping vs      │
                   │    canonical /navigation)        │
                   └────────────────┬────────────────┘
                                    │
              ┌─────────────────────┼─────────────────────┐
              │                     │                     │
              ▼                     ▼                     ▼
       ┌──────────────┐     ┌──────────────┐     ┌──────────────────────┐
       │ P2: Per-     │     │ P3:          │     │  (synthesis P4 below)│
       │   use-case   │     │   Verification│     │                      │
       │   matrix     │     │   step (read │     │                      │
       │   (10 cases) │     │   multi-res- │     │                      │
       │              │     │   navigation)│     │                      │
       └──────┬───────┘     └──────┬───────┘     │                      │
              │                    │             │                      │
              └─────────┬──────────┘             │                      │
                        │                        │                      │
                        ▼                        │                      │
              ┌────────────────────────────┐    │                      │
              │ P4: Recommendation +       │◀───┘                      │
              │     vocabulary note +      │                            │
              │     Step 5 caution         │                            │
              └────────────────────────────┘                            │
```

**Cluster identification:**
- **Hub:** P1 (operations distinction).
- **Spokes:** P2 (matrix), P3 (verification).
- **Synthesis:** P4 (recommendation incorporating Step 5 caution + vocabulary note).

---

## Step 2 — Detect Boundaries (Top-Down)

Cuts at low coupling:

- **B-1: P1 ↔ P2.** Crossing traffic: matrix uses operations to assign verdicts. One read. Low.
- **B-2: P1 ↔ P3.** Crossing traffic: verification asks "does multi-resolution-navigation cover concept-mapping" — needs the operation definition. One read. Low.
- **B-3: P2/P3 ↔ P4.** Crossing traffic: recommendation reads matrix + verification result. Low.

All boundaries clean.

---

## Step 3 — Validate Boundaries (Bottom-Up)

### Atoms

- A1: operation #1 (concept-mapping) characterization.
- A2: operation #2 (canonical /navigation) characterization.
- A3: unit-of-enumeration distinction.
- A4–A13: 10 per-use-case verdicts.
- A14: complement-vs-conflict verdict.
- A15: verification question (does multi-resolution-navigation cover Discussion 1?).
- A16: recommendation tiers (immediate / deferred / verification-gated).
- A17: vocabulary disambiguation.
- A18: Step 5 application note.

### Atom-to-piece grouping

| Atoms | Piece |
|---|---|
| A1, A2, A3, A14 | P1 (operations distinction + complement verdict) |
| A4–A13 | P2 (per-use-case matrix) |
| A15 | P3 (verification step) |
| A16, A17, A18 | P4 (recommendation + vocab + Step 5) |

### Top-down vs bottom-up

| Boundary | Top-down location | Bottom-up confirms? |
|---|---|---|
| P1 ↔ P2 | operations vs matrix | ✓ |
| P1 ↔ P3 | operations vs verification | ✓ |
| P2/P3 ↔ P4 | upstream vs synthesis | ✓ |

All confirmed. **Confidence: HIGH.**

---

## Step 4 — Express as Question Tree

### P1 — Operations distinction (HUB)

**Question:** What are the two operations the designs target, and what is the structural distinction (unit-of-enumeration + input + output + scaling + taxonomy) that makes them different — including the complement-vs-conflict verdict?

**Verification criteria:**
- [ ] Operation 1 (canonical /navigation) characterized: input = finished SIC cycle; unit = typed route; output = 16-type-taxonomy routes with 12 fields; bounded scaling.
- [ ] Operation 2 (concept-mapping) characterized: input = codebase OR local direction; unit = concept; output = hierarchical concept tree at progressive resolution; potentially-huge scaling requires staging.
- [ ] Unit-of-enumeration distinction stated explicitly with example (typed route DEEPEN-the-X vs concept "how-to-X").
- [ ] Complement vs conflict verdict: COMPLEMENT (different operations).
- [ ] Reasoning anchored in audit's CANONICAL framing (A1-A3 of `devdocs/inquiries/2026-05-10_03-50__navigation_established_audit/finding.md`).

### P2 — Per-use-case matrix (spoke)

**Question:** For each of the 10 use cases (codebase orientation; per-inquiry next-direction; concept discovery; resolution progression; cross-inquiry traversal; selection memory & decision history; UI / visualization; merging / aggregating maps; bloat prevention; onboarding), which design fits better and why?

**Verification criteria:**
- [ ] All 10 use cases assigned a verdict (nav_should_be / Recent / Tie).
- [ ] Each verdict includes one-line reasoning.
- [ ] Concept-mapping wins the discovery / orientation / resolution / UI / onboarding cases (5).
- [ ] Recent wins per-inquiry / selection-memory / bloat-prevention cases (3).
- [ ] Cross-inquiry traversal + map merging marked TIE (both deferred to similar future infra).

### P3 — Verification step (spoke)

**Question:** Does `homegrown/protocols/multi_resolution_navigation.md` already cover nav_should_be Discussion 1's staged concept-enumeration? (Innovation step performs the read; Decomposition specifies the verification.)

**Verification criteria:**
- [ ] Innovation reads `homegrown/protocols/multi_resolution_navigation.md` in full.
- [ ] Innovation reports yes / partial / no on coverage of staged concept-enumeration.
- [ ] If YES: recommendation branches to "leverage existing protocol."
- [ ] If PARTIAL: recommendation branches to "extend the protocol with concept-mapping."
- [ ] If NO: recommendation branches to "introduce new lightweight protocol/skill" (subject to Step 5 caution).

### P4 — Recommendation + vocabulary note + Step 5 caution (synthesis)

**Question:** Given the operations distinction + per-use-case matrix + verification result, what is the recommendation (immediate vs deferred actions), how is the user's "navigation" vocabulary preserved while disambiguating at discipline level, and how does Step 5 caution constrain the recommendation?

**Verification criteria:**
- [ ] Immediate recommendation: keep recent discussion's design as-is for canonical /navigation organization.
- [ ] Deferred recommendation: concept-mapping path determined by P3 verification result (one of three branches above).
- [ ] Vocabulary note: user's "navigation" stays as broad-concept word; disambiguate only at discipline level (`/navigation` for canonical; concept-mapping for new operation).
- [ ] Step 5 application: defer full new-discipline-spec until N>1 evidence; lightweight protocol acceptable now if needed.
- [ ] User-facing actionable: tells the user what to do next (read multi-resolution-navigation; decide which branch to follow).

---

## Step 5 — Map Interfaces

| From | To | What flows | Direction | Type |
|---|---|---|---|---|
| P1 | P2 | Operation characterization (informs each use-case verdict) | one-way | Read |
| P1 | P3 | Operation characterization (informs verification question) | one-way | Read |
| P1 | P4 | Operations + complement verdict | one-way | Read |
| P2 | P4 | Per-use-case matrix verdicts | one-way | Read |
| P3 | P4 | Verification result (yes/partial/no) | one-way | Read |

All flows one-way Reads.

### Hidden coupling check

- **Q: Does P4's recommendation hide-couple with P2's matrix beyond stated flow?** P4 mentions per-use-case fit in its synthesis. The flow is explicit (P4 reads P2). No hidden coupling.
- **Q: Does P3's verification result feed back into P1?** No — P1 is independent of verification (operations are distinct regardless of whether existing protocol covers it). Verification only affects P4's branch.

No hidden coupling.

---

## Step 6 — Order by Dependency

```
Step 1: P1 (HUB — operations distinction)
Step 2: P2 (matrix) + P3 (verification) — parallel, both read P1
Step 3: P4 (recommendation) — synthesizes P1 + P2 + P3
```

### Reasoning

- P1 first: hub.
- P2 + P3 parallel: independent reads of P1.
- P4 last: synthesis with verification-gated branch.

### Critical path

P1 → P3 → P4 (verification-gated branch is the longest critical path; if multi-resolution-navigation reading is slow, it blocks P4).

### No circular dependencies

Verified.

---

## Step 7 — Self-Evaluate

### Minimum 3-dimension evaluation

| Dimension | Verdict | Notes |
|---|---|---|
| Independence | PASS | P2/P3 each read P1 only; P4 reads upstream. |
| Completeness | PASS | All 6 elements covered; verification step explicit. |
| Reassembly | PASS | P1 + P2 + P3 + P4 → complete comparison answer. |

### Determination-mechanism check

- **Determination at runtime:** "Does multi-resolution-navigation cover concept-mapping?" — depends on reading the protocol.
- **Piece addressing how:** P3 explicitly owns this. P3 verification criterion 1 specifies the read; criteria 3-5 specify the branching by yes/partial/no.

### Full 7-dimension evaluation

| Dimension | Verdict | Notes |
|---|---|---|
| Independence | PASS | (above) |
| Completeness | PASS | (above) |
| Reassembly | PASS | (above) |
| Tractability | PASS | P1 / P2 / P3 / P4 each small; P3 is just "read one file + one-line verdict." |
| Interface clarity | PASS | All flows tabulated; no hidden coupling. |
| Balance | PASS | Roughly proportional. |
| Confidence | PASS | Top-down ↔ bottom-up agreed. |

### Failure-mode self-check

- Premature decomposition? No — Sensemaking provided clear structure.
- Wrong boundaries? No.
- Hidden coupling? Surfaced and dismissed.
- Missing pieces? Determination-mechanism check passed.
- Over-decomposition? No — 4 pieces for a focused comparison.
- Ignoring dependencies? No.
- Imbalanced? No.

---

## Final Deliverable

### Coupling Map

One hub (P1: operations distinction), two spokes (P2: per-use-case matrix; P3: verification step), one synthesis (P4: recommendation + vocab + Step 5).

### Question Tree

- **P1 — Operations distinction** (hub): two operations characterized; complement verdict.
- **P2 — Per-use-case matrix** (spoke): 10 cases × verdicts with reasoning.
- **P3 — Verification step** (spoke): read multi-resolution-navigation; report yes/partial/no.
- **P4 — Recommendation** (synthesis): immediate + deferred + vocab disambiguation + Step 5 application.

### Interface Map

| From | To | Flow | Type |
|---|---|---|---|
| P1 | P2 | Operation characterization | Read |
| P1 | P3 | Operation characterization | Read |
| P1 | P4 | Operations + complement verdict | Read |
| P2 | P4 | Matrix verdicts | Read |
| P3 | P4 | Verification result (branch trigger) | Read |

### Dependency Order

```
Step 1: P1 (hub)
Step 2: P2 + P3 (parallel)
Step 3: P4 (synthesis)
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
1. Commit P1 (operations distinction) with concrete characterization.
2. Commit P2 (matrix) — 10 cases × verdicts.
3. **EXECUTE P3 by reading `homegrown/protocols/multi_resolution_navigation.md` in full** and reporting yes/partial/no.
4. Commit P4 with verification-gated branch.
5. Apply minimum mechanism coverage if needed to validate the recommendation.

**Critique should:**
1. Test the operation distinction's strength (Sensemaking marked it HIGH from N=2 — limited evidence base).
2. Test whether the verification result actually changes the recommendation (or whether the recommendation is robust to verification outcome).
3. Test self-reference resistance (this critique uses /navigation discipline framework to reason about /navigation).
4. Verify Step 5 application is honest (defer-full-spec is correctly applied).
