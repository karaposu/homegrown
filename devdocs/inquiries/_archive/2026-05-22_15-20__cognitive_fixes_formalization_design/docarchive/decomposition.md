# Decomposition: Cognitive Fixes Formalization — Design Decision

## User Input

`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-22_15-20__cognitive_fixes_formalization_design/_branch.md`

The whole to decompose: Innovation's deliverable per 14 SDs.

---

## Step 1 — Perceive Coupling Topology

### Elements

- E1: README.md content (purpose + staging gates + kill conditions + LOOP_DIAGNOSE verbatim quotes; SD6, SD7, SD8, SD9, SD10, SD13(i))
- E2: _template.md content (loose guide, 4-6 sections, including first-instance-bias-ack section per SD13(ii))
- E3: 01__vague_instruction_decomposition.md content (the MVL+ fix as first instance per template; SD3, SD4)
- E4: Operational instructions for user (paste-ready mkdir + Write commands to apply artifacts to disk)
- E5: Caveats / risk acknowledgment in finding (premature-formalization risks; SD14 reversibility commitment)

E4, E5, E6, E7 from earlier exploration absorb into E1+E2 as sub-elements (kill condition + LOOP_DIAGNOSE quotes live in README; first-instance-bias-ack lives in template).

### Coupling

- E1, E2 — weak coupling (different files, different content)
- E2 → E3 — strong coupling (E3 follows E2's template structure)
- E4 — weak coupling (operational; references E1+E2+E3 but doesn't depend on their content)
- E5 — weak coupling (finding-level caveats; independent)

### Coupling diagram

```
PHASE A (parallel): [E1 README] [E2 Template] [E5 Caveats]
                                 ↓
PHASE B: [E3 First instance per template]
                                 ↓
PHASE C: [E4 Operational instructions assembling E1+E2+E3]
```

---

## Step 2 — Detect Boundaries Top-Down

| Piece | Elements | Why this boundary |
|---|---|---|
| **P1** | E1 — README.md content | Single file; integrates purpose + staging + kill + LOOP_DIAGNOSE quotes |
| **P2** | E2 — _template.md content | Single file; loose guide + bias-ack section |
| **P3** | E3 — 01__vague_instruction_decomposition.md content | Single file; depends on P2 template |
| **P4** | E4 — Operational instructions for user | Different domain (instructions vs artifact content) |
| **P5** | E5 — Caveats / risk acknowledgment | Different domain (finding-level meta vs artifact content) |

5 pieces.

---

## Step 3 — Validate Boundaries Bottom-Up

### Atoms

| Atom set | Piece |
|---|---|
| README sections: purpose / staging gates / kill conditions / LOOP_DIAGNOSE quotes / index of fixes | P1 ✓ |
| Template sections: trigger condition / methodology steps / first-instance-bias-ack / verification / evaluation gate | P2 ✓ |
| First-instance content per template: applied to MVL+ fix | P3 ✓ |
| Operational instructions: mkdir + Write commands; sequence | P4 ✓ |
| Caveats: premature-formalization risks + reversibility commitment | P5 ✓ |

All atoms group naturally. Confidence: HIGH for all 5 boundaries.

---

## Step 4 — Express as Question Tree

### P1 — README.md content

**Question:** What paste-ready text fills `cognitive_harness/cognitive_fixes/README.md` to cover (a) folder purpose, (b) staging gates with LOOP_DIAGNOSE Step 5/6 verbatim quotes, (c) kill conditions, (d) index of current fixes?

**Verification:**
- [ ] Purpose paragraph: "This folder accumulates documented applications of the decompose-vague-instructions-with-coverage methodology..."
- [ ] Staging-gates section with LOOP_DIAGNOSE Step 5 verbatim ("5 to 10 ... show stable internal method") for protocol promotion
- [ ] Staging-gates section with LOOP_DIAGNOSE Step 6 verbatim ("at least 10 ... stable trigger language") for runner hook
- [ ] Kill condition (a): "N=5 future inquiries with NO new applicable cases → retire folder"
- [ ] Kill condition (b): "Cross-fix audit at N=3-5 shows no shared structure → merge into spec_governance.md or related protocol; retire folder"
- [ ] Index/table of current fixes (starts with `01__vague_instruction_decomposition.md`)
- [ ] First-instance-bias-ack: "First instance (`01__`) was Claude-authored; future fixes should be cross-author-validated where feasible"
- [ ] Paste-ready

### P2 — _template.md content

**Question:** What paste-ready text fills `cognitive_harness/cognitive_fixes/_template.md` as a loose guide (4-6 sections; no strict schema) for documenting future fixes?

**Verification:**
- [ ] 4-6 sections total
- [ ] Trigger condition section (when does the fix apply? what failure mode?)
- [ ] Methodology section (the 7-step methodology applied; can deviate as needed)
- [ ] Coverage analysis section (what cases are caught; what cases are NOT necessarily caught)
- [ ] Evaluation gate section (how to validate the fix worked — typically branch experiment + threshold)
- [ ] First-instance-bias-ack section (template's own bias-ack reminder for new fix authors)
- [ ] Loose guide tone (not strict required-field schema)
- [ ] Paste-ready

### P3 — 01__vague_instruction_decomposition.md content

**Question:** What paste-ready text fills `cognitive_harness/cognitive_fixes/01__vague_instruction_decomposition.md` as the first instance, documenting the MVL+ Question-field fix per the template?

**Verification:**
- [ ] Follows P2's template sections
- [ ] Trigger condition: "vague LLM instruction producing inconsistent coverage across runs"
- [ ] Methodology applied: 7 steps from the MVL+ finding
- [ ] Coverage analysis: H1 case caught by 3 mechanisms; cases-not-necessarily-caught named
- [ ] Evaluation gate: 5-chain branch experiment; ≥3/5 catches threshold
- [ ] Links to source inquiry `devdocs/inquiries/2026-05-22_14-50__branch_creation_question_field_decomposition/finding.md`
- [ ] Links to the LOOP_DIAGNOSE finding that originally diagnosed H1
- [ ] Paste-ready

### P4 — Operational instructions for user

**Question:** What is the paste-ready sequence of commands (mkdir + Write per file) the user runs (or has the agent run) to create the folder + 3 files on disk?

**Verification:**
- [ ] mkdir for the folder
- [ ] Write command for README.md
- [ ] Write command for _template.md
- [ ] Write command for 01__vague_instruction_decomposition.md
- [ ] Verification command (ls to confirm)
- [ ] Paste-ready

### P5 — Caveats / risk acknowledgment

**Question:** What language captures the premature-formalization risks + reversibility commitment for inclusion in the finding's caveats section?

**Verification:**
- [ ] Premature-formalization risks named (R7 from exploration: false-positive proposals; over-claiming generality; bureaucratic friction; orphaned structure; authorship-bias amplification)
- [ ] Reversibility commitment: folder deletable cleanly; no downstream dependencies until N≥5 protocol promotion
- [ ] Self-reference acknowledgment: I authored both methodology and first instance
- [ ] Honest acknowledgment that N=1 evidence is thin

---

## Step 5 — Map Interfaces

| # | Source | Target | Flow |
|---|---|---|---|
| HCR1 | P2 (template structure) | P3 (first instance follows structure) | one-way |
| HCR2 | P1 (README index) | P3 (first instance is what README points to) | one-way |
| HCR3 | P1, P2, P3 | P4 (operational instructions need file content) | one-way |
| HCR4 | All P1-P5 | CONCLUDE / finding | aggregation |

### Assumptions check

- P3 assumes P2's template structure is final (no late template changes after P3 written): satisfied since P3 is in PHASE B after P2 in PHASE A
- P4 assumes P1+P2+P3 content is committed: satisfied via PHASE C ordering

No hidden coupling.

---

## Step 6 — Order by Dependency

```
PHASE A (parallel): P1 (README), P2 (Template), P5 (Caveats)
                                  ↓
PHASE B: P3 (First instance — uses P2's structure)
                                  ↓
PHASE C: P4 (Operational instructions — needs P1+P2+P3 content)
```

---

## Step 7 — Self-Evaluate

| Dim | Result |
|---|---|
| Independence | PASS (P1, P2, P5 fully independent; P3 needs P2; P4 needs P1+P2+P3) |
| Completeness | PASS (E1-E5 all covered) |
| Reassembly | PASS (artifacts + ops + caveats → finding) |
| Tractability | PASS (5-7 verification criteria per piece) |
| Interface clarity | PASS (4 HCRs explicit) |
| Balance | PASS (P1, P2, P3 medium-weight; P4, P5 lighter) |
| Confidence | PASS |

7 failure modes: all PASS.

**PROCEED to Innovation with 5-piece Q-tree + 4 HCRs.**
