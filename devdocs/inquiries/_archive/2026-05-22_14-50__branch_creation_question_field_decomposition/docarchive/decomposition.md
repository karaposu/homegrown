# Decomposition: Structural Decomposition of MVL+ Branch Creation's Question Field (re-run via Skill tool)

## User Input

`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-22_14-50__branch_creation_question_field_decomposition/_branch.md`

Re-run via Skill-tool invocation; reads `_branch.md` + exploration.md + sensemaking.md (12 SDs) fresh.

The whole to decompose: Innovation's deliverable per SD1-SD12.

---

## Step 1 — Perceive Coupling Topology

### Elements

- **E1** — Question-field replacement text (SD1, SD2: 5 meta-categories with Observation Targets bullet using MC2 VERBATIM language; SD6 graceful degradation)
- **E2** — (folded into E1: the MC2-verbatim Observation Targets bullet is the load-bearing sub-part of E1, not a separate piece)
- **E3** — Goal-field replacement text (SD3: 4 sub-prompts)
- **E4** — Source Input section template (SD4)
- **E5** — FS1 fail-safe instruction (SD5, SD12: structural trigger + semantic verify)
- **E6** — Integrated paste-ready Step-3 block (assembles E1+E3+E4+E5)
- **E7** — Coverage analysis (verifies H1 caught by E1+E5 per SD2)
- **E8** — Branch-experiment gate spec (SD8: ≥3/5 per MC2)
- **E9** — Meta-recursion residual acknowledgment (SD10, SD11)
- **E10** — Scope statement (SD7: ROOT-only this run; BRANCH follow-up)

### Coupling

- E1, E3, E4, E5 — independent text artifacts (different fields/sections); weak coupling
- E6 — depends on E1+E3+E4+E5 for assembly; moderate coupling
- E7 — depends on E1+E5 for verification target; moderate
- E8 — independent (relies on SD8 only)
- E9, E10 — independent (both caveats; relate by being honest acknowledgments)

### Coupling diagram

```
PHASE A (parallel):
  [E1 Question] [E3 Goal] [E4 Source Input] [E5 FS1] [E8 Gate] [E9+E10 Caveats]
       └────────────┴───────────────┴───────────────┘
                            ▼
PHASE B:
  [E6 Integrated paste-ready block]
                            ▼
PHASE C:
  [E7 Coverage analysis] (needs E1+E5+E6 produced first)
```

---

## Step 2 — Detect Boundaries Top-Down

| Piece | Elements | Why this boundary |
|---|---|---|
| **P1** | E1 (with E2 folded in) — Question-field text with MC2-verbatim Observation Targets bullet | Single text artifact; MC2-verbatim language is critical sub-element but operationally one piece |
| **P2** | E3 — Goal-field text | Different field; lightweight 4-sub-prompt |
| **P3** | E4 — Source Input section template | Different section (new section in _branch.md) |
| **P4** | E5 — FS1 fail-safe instruction | Different instruction-step (Step 3.5 after _branch.md is written) |
| **P5** | E6 — Integrated paste-ready Step-3 block | Assembly piece; integrates P1+P2+P3+P4 |
| **P6** | E7 — Coverage analysis | Different work type (analysis over generated text) |
| **P7** | E8 — Branch-experiment gate spec | Different domain (methodology, not content) |
| **P8** | E9 + E10 — Meta-recursion residual + scope statement | Both caveats; reasonable to combine into one piece |

**8 pieces.**

---

## Step 3 — Validate Boundaries Bottom-Up

### Atoms

| Atom set | Count | Piece |
|---|---|---|
| Question-field text: 5 bullets + graceful-degradation paragraph + one-sentence target | ~7 | P1 |
| Goal-field text: 4 sub-bullets + intro line | ~5 | P2 |
| Source Input: section header + framing line + verbatim block | ~3 | P3 |
| FS1: step number + verification paragraph + MC2-verbatim trigger list + action-when-missing | ~4 | P4 |
| Integrated Step-3 block: ~30 lines assembled | 1 unit | P5 |
| Coverage analysis: H1 case + 4-5 plausible-variant cases + not-caught acknowledgment | ~6-8 | P6 |
| Gate: setup + evaluation procedure + ≥3/5 threshold + revert condition + telemetry | ~5 | P7 |
| Caveats: residual statement + scope statement + FS4-deferral statement | ~3 | P8 |

All atoms group naturally.

### Confidence

| Boundary | Confidence |
|---|---|
| P1-P8 | HIGH each |

Top-down + bottom-up agree.

---

## Step 4 — Express as Question Tree

### P1 — Question-field replacement text

**Question:** What paste-ready text replaces the current line 83 of `cognitive_harness/MVL+/SKILL.md` (`[the question, stated clearly in one sentence]`) with 5 meta-categories (Subject / Action / Level / Observation Targets / Deliverable Shape) + graceful-degradation policy + the MC2-VERBATIM language in the Observation Targets bullet?

**Verification criteria:**
- [ ] 5 meta-categories named (Subject / Action / Level / Observation Targets / Deliverable Shape)
- [ ] **Observation Targets bullet uses MC2 VERBATIM language** for conjunctions: "and / AND / both X and Y / in addition to / as well as / plus" + multi-clause commas + multi-sentence framings as logical extensions
- [ ] **PRESERVE ALL** explicit imperative in Observation Targets bullet
- [ ] Graceful-degradation paragraph: "meta-categories are a CHECK, not required sub-fields; one-sentence form acceptable if all 5 covered implicitly"
- [ ] Level bullet includes loop / discipline / runner examples (H1's second axis)
- [ ] Paste-ready (no placeholders)

### P2 — Goal-field replacement text

**Question:** What paste-ready text replaces the current line 85 of `cognitive_harness/MVL+/SKILL.md` (`[what would a good answer look like? what would the user be able to DO with the answer?]`) with 4 sub-prompts (Criterion / Use Case / Desired Outcome / What Would Fail)?

**Verification:**
- [ ] 4 sub-prompts named
- [ ] Each is one short line
- [ ] "What would fail" is the load-bearing addition beyond status quo
- [ ] Paste-ready

### P3 — Source Input section template

**Question:** What is the paste-ready template for the new Source Input section in _branch.md, placed between Goal and Scope Check?

**Verification:**
- [ ] Section header: `## Source Input (raw user request — preserved verbatim for transcription-audit)`
- [ ] Framing line explaining purpose (1 sentence: downstream disciplines can audit at any stage)
- [ ] Triple-backtick block placeholder for raw user input
- [ ] Paste-ready

### P4 — FS1 fail-safe instruction

**Question:** What paste-ready text describes the FS1 transcription-audit fail-safe step (placed as Step 3.5 after _branch.md is written), with STRUCTURAL trigger + SEMANTIC verification, using MC2's verbatim trigger language?

**Verification:**
- [ ] Positioned as Step 3.5 (after Step 3 _branch.md write; before Step 4 _state.md write)
- [ ] Lists MC2 trigger patterns VERBATIM: "and / AND / both X and Y / in addition to / as well as / plus"
- [ ] Adds logical-extension patterns: multi-clause commas, multi-sentence framings
- [ ] Verification rule: each clause's content appears in Question OR Goal (Source Input always covers verbatim)
- [ ] Action when missing: expand Question or Goal before proceeding to Exploration
- [ ] States explicitly: "operates on STRUCTURE (conjunctions, clauses, sentences) not CONTENT — catches dropped clauses regardless of subject matter; the structural fail-safe is the backstop because meta-category enumeration cannot be proved complete"

### P5 — Integrated paste-ready Step-3 block

**Question:** What is the full paste-ready text that the user copies into a parallel `cognitive_harness/MVL+/SKILL.md` variant, integrating P1+P2+P3+P4 into a coherent Step 3 + Step 3.5 replacement?

**Verification:**
- [ ] Integrates P1, P2, P3, P4 into one coherent block
- [ ] Preserves existing Scope Check, Layer Commitment, Synthesis Trigger sub-sections (don't break them)
- [ ] Source Input section appears in template after Goal, before Scope Check
- [ ] FS1 appears as Step 3.5 (numbered, after the _branch.md template)
- [ ] Paste-ready as one block

### P6 — Coverage analysis

**Question:** Does the proposed Step-3 + Step-3.5 replacement catch H1 + plausible variants? Provide case-by-case verification table.

**Verification:**
- [ ] **H1 (dropped conjunction-joined observation target — "accumulation of other disciplines and finding"):** caught by Observation Targets meta-category (MC2-verbatim bullet) + FS1 (clause-preservation diff scanning conjunctions)
- [ ] Loop-vs-discipline-level conflation (H1's other axis): caught by Level meta-category
- [ ] Dropped negative constraint: caught by FS1 if conjunction-joined; otherwise Scope Check
- [ ] Dropped time/phase constraint: caught by FS1 if conjunction-joined
- [ ] Multi-sentence framing with each sentence introducing new aspect: caught by FS1's multi-sentence pattern
- [ ] **Cases NOT necessarily caught:** implicit multi-aspect framings without explicit conjunctions; aspect axis not in 5 meta-categories — explicitly listed; not over-claim of completeness
- [ ] Cites MC2 as the external pattern source (anti-paraphrase / authorship-bias mitigation)

### P7 — Branch-experiment gate spec

**Question:** What is the exact branch-experiment evaluation protocol per LOOP_DIAGNOSE Step 5 guardrail + MC2's verbatim ≥3/5 threshold?

**Verification:**
- [ ] Setup: parallel `MVL+/SKILL.md` variant; current spec unchanged
- [ ] N = 5 NEW inquiries
- [ ] Trigger filter: inquiries where raw input contains multi-part framing (conjunctions, multi-clause, multi-sentence)
- [ ] **Threshold: ≥3 of 5 catches per MC2 verbatim**
- [ ] Pass action: promote to permanent edit
- [ ] Fail action: revert; analyze why (fail-safe too narrow? meta-categories missed axis? user input wasn't conjunction-marked?)
- [ ] Telemetry per chain: raw input + audit-flag-fired + would-current-spec-have-dropped + agent decision

### P8 — Meta-recursion residual + scope statement (caveats)

**Question:** What text explicitly acknowledges (a) the meta-recursion residual (enumeration cannot be proved complete; structural fail-safe load-bearing); (b) the scope (ROOT-only this run; BRANCH inquiry creation is follow-up COULD per MC2); (c) FS4 deferral (user-interactive verification deferred unless evidence insufficient)?

**Verification:**
- [ ] Explicit statement: "5 meta-categories cannot be proved complete"
- [ ] Explicit statement: "FS1 + FS3 are load-bearing precisely because enumeration can't guarantee coverage; FS1 operates STRUCTURE-trigger / SEMANTIC-verify"
- [ ] Explicit statement of remaining residual: implicit multi-aspect framings without conjunctions
- [ ] Scope statement: ROOT-only (_branch.md scoping); BRANCH inquiry creation (per MC2's "optionally") is Next Actions COULD
- [ ] FS4 explicit deferral: user-interactive verification deferred unless 5-chain branch experiment shows FS1+FS3 insufficient

---

## Step 5 — Map Interfaces

| # | Source | Target | Flow | Direction |
|---|---|---|---|---|
| **HCR1** | P1 (Question text) | P5 (integrated block) | text composition | one-way |
| **HCR2** | P2 (Goal text) | P5 | text composition | one-way |
| **HCR3** | P3 (Source Input template) | P5 | text composition | one-way |
| **HCR4** | P4 (FS1 instruction) | P5 | text composition | one-way |
| **HCR5** | P1 (Question text with MC2-verbatim bullet) | P6 (coverage analysis) | verification target | one-way |
| **HCR6** | P4 (FS1 with trigger-list) | P6 | verification target | one-way |
| **HCR7** | All P1-P8 | CONCLUDE / finding | aggregation | one-way |

### Assumptions-not-data check

| Assumption | Captured? |
|---|---|
| MC2's verbatim language is stable and authoritative | YES (read from LOOP_DIAGNOSE finding fresh; quoted verbatim) |
| Source Input section won't conflict with CONCLUDE's finding.md Source Input | YES (timing distinction: _branch.md early vs finding.md late; intentional duplication) |
| FS1's structural trigger doesn't false-positive on legitimate single-clause "and" usages | PARTIAL — verification rule ("each clause's content appears in Question or Goal") catches false-positives by allowing single-clause to satisfy via Question | 
| Branch-experiment 5-chain sample is statistically sufficient | PARTIAL — per LOOP_DIAGNOSE Step 5 monitoring proposal (5-10 chains); 5 is lower bound | 

No hidden coupling identified.

---

## Step 6 — Order by Dependency

```
PHASE A (parallel — 6 pieces independent):
  P1 — Question-field text       (relies on SD1 + SD2 + SD6)
  P2 — Goal-field text           (relies on SD3)
  P3 — Source Input template     (relies on SD4)
  P4 — FS1 instruction           (relies on SD5 + SD12)
  P7 — Branch-experiment gate    (relies on SD8)
  P8 — Caveats                   (relies on SD7 + SD9 + SD10 + SD11)
                                       │
                                       ▼
PHASE B:
  P5 — Integrated paste-ready block    (assembles P1+P2+P3+P4)
                                       │
                                       ▼
PHASE C:
  P6 — Coverage analysis               (verifies P1+P4 against H1 + plausible variants)
```

4-phase order. No circular dependencies. PHASE A largest (6 pieces parallel).

---

## Step 7 — Self-Evaluate

### Minimum 3 dimensions

| Dimension | Result | Evidence |
|---|---|---|
| Independence | PASS | P1-P4 + P7 + P8 independent; P5 assembles after PHASE A; P6 verifies after P5 |
| Completeness | PASS | All 10 elements (E1-E10; E2 folded into E1; E9+E10 grouped as P8) covered by P1-P8 |
| Reassembly | PASS | Pieces + HCRs reconstruct: paste-ready edit + coverage analysis + gate + caveats → finding |

### Determination-mechanism piece check

Load-bearing concepts with runtime determinations:

| Concept | Runtime determination | Piece |
|---|---|---|
| MC2 verbatim usage (vs paraphrase) | "Did the Observation Targets bullet use MC2's exact words?" | P1 verification criteria explicit |
| Coverage of H1 | "Does at least one mechanism catch H1?" | P6 |
| Branch-experiment pass | "Did ≥3 of 5 catches occur?" | P7 |
| Meta-recursion residual handling | "Was the residual acknowledged honestly?" | P8 |
| ROOT-only scope vs BRANCH expansion | "Was scope honored?" | P8 |

All addressed.

**PASS.**

### Full evaluation (7 dimensions)

| Dim | Result |
|---|---|
| Independence | PASS |
| Completeness | PASS |
| Reassembly | PASS |
| Tractability | PASS (4-7 verification criteria per piece) |
| Interface clarity | PASS (7 HCRs explicit) |
| Balance | PASS (P1 + P4 + P5 + P6 are medium-weight; P2 + P3 + P7 + P8 are lighter) |
| Confidence | PASS (top-down + bottom-up agree) |

### Failure modes

| Failure | Status |
|---|---|
| Premature decomposition | NOT OBSERVED (Sensemaking 12 SDs first) |
| Wrong boundaries | NOT OBSERVED (cuts at low-coupling regions) |
| Hidden coupling | NOT OBSERVED (assumptions check; no hidden) |
| Missing pieces | NOT OBSERVED (E1-E10 mapped; determination-mechanism check PASS) |
| Over-decomposition | NOT OBSERVED (E2 folded; 8 pieces) |
| Ignoring dependencies | NOT OBSERVED (4-phase order) |
| Imbalanced | NOT OBSERVED (per balance check) |

All PASS.

---

## Self-Assessment Verdict

**PROCEED to Innovation with 8-piece Q-tree + 7 HCRs.**

Property (v) NOT firing at any piece confirmed. Innovation must:
- Generate paste-ready text per P1-P5 using MC2's VERBATIM trigger language (not paraphrased) in the Observation Targets bullet (P1) and the FS1 trigger list (P4)
- Produce coverage analysis at P6 with explicit "caught" vs "not necessarily caught" cases (no over-claim)
- Produce gate spec at P7 with ≥3/5 threshold per MC2 verbatim
- Produce caveats at P8 with scope + residual + FS4-deferral statements
- Apply CONTRARIAN-RETHINK at assembly: does the integrated edit actually catch H1? Trace the path explicitly.
