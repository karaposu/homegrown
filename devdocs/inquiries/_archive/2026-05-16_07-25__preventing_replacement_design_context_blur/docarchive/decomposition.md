# Decomposition: Preventing Replacement-Design Context Blur

## User Input

Inquiry `_branch.md`. Input: sensemaking.md (D11 committed: D3 + D5 + per-profile differentiation + convention doc; 3 core commits — bi-folder action / 3-profile partition / convention doc deliverable; decompose flagged cannon-by-runtime; 6 candidate pieces pre-sketched) + exploration.md (territory + mechanisms + solutions + matrix). Test if Sensemaking's 6 pieces have the lowest coupling, or if a different cut works better. Watch for ordering and decompose-flag-gates-everything.

---

## Step 1 — Coupling Topology

### Elements in the whole

The "convention-and-disposition design" decomposes into work-elements:

| # | Element |
|---|---|
| E1 | Cannon-set verification (resolve decompose-flag; sanity-check the other 7) |
| E2 | Active SKILL disposition (navigation + meta-loop): move + unregister |
| E3 | Dormant SKILL disposition (comprehend + reflect): move + unregister |
| E4 | Non-SKILL artifact disposition (contracts/alignment_control.md + next_question_to_ask.md): per-artifact judgment |
| E5 | Convention doc content (`_archive/README.md`) |
| E6 | Verify + Reverse procedure specs (executable commands) |
| E7 | Bi-folder coordination quality (cognitive_harness/ side + ~/.claude/skills/ side) — this is a property of the operation, not a separate piece |

E7 is a quality, not an element — it's an aspect of E2/E3/E4. The pieces are E1–E6.

### Pairwise coupling (change-propagation test)

| Pair | Coupling | Reasoning |
|---|---|---|
| E1 ↔ E2 | **Strong** | Cannon-set decision gates the active-SKILL list. If user says "actually meta-loop is cannon," E2 list shifts. |
| E1 ↔ E3 | **Strong** | Same — user could shift dormant-SKILL list. |
| E1 ↔ E4 | Weak | Non-SKILL artifacts don't have cannon/experimental status; E4 stands aside from E1. |
| E1 ↔ E5 | Weak | Doc describes the convention; doesn't depend on which specific items are cannon. |
| E1 ↔ E6 | Weak | Procedure spec is generic. |
| E2 ↔ E3 | Weak | Same action shape (move + unregister) but different items; profile-distinct downstream (active has v2 design implications, dormant doesn't). |
| E2 ↔ E4 | Weak | Different mechanism profile (M1 doesn't apply to non-SKILL). |
| E2 ↔ E5 | Moderate | E2 actions must conform to convention; doc constrains. |
| E2 ↔ E6 | Moderate | E2 invokes procedure during execution. |
| E3 ↔ E4 | Weak | Different profiles. |
| E3 ↔ E5 | Moderate | Same as E2 ↔ E5. |
| E3 ↔ E6 | Moderate | Same as E2 ↔ E6. |
| E4 ↔ E5 | Moderate | E4 actions conform to convention (if move chosen). |
| E4 ↔ E6 | Weak | E4 may or may not invoke procedure depending on per-artifact decision. |
| E5 ↔ E6 | **Strong** | Doc CITES procedure. Change procedure → doc cite updates. |

### Coupling Map (clusters and valleys)

```
HIGH-COUPLING CLUSTERS
  Cluster α: {E1} ─ gating role; standalone but gates E2/E3
  Cluster β: {E2}  ─ active SKILL (navigation, meta-loop)
  Cluster γ: {E3}  ─ dormant SKILL (comprehend, reflect)
  Cluster δ: {E4}  ─ non-SKILL artifacts
  Cluster ε: {E5, E6}  ─ doc + procedure (doc cites procedure)

LOW-COUPLING VALLEYS
  α | β,γ,δ          ─ list-verification vs execution
  β | γ              ─ active vs dormant SKILL
  β,γ | δ            ─ SKILL vs non-SKILL
  β,γ,δ | ε          ─ actions vs policy/procedure
```

### Tested alternative cuts

| Alternate cut | Coupling profile | Verdict |
|---|---|---|
| Per-mechanism (P_M1 registry / P_M2 folder / P_doc) | Splits each profile's actions across 2-3 pieces; HIGH within-skill cross-piece flow | REJECTED — increases coupling |
| Per-action (P_move / P_unregister / P_doc / P_verify) | Same as per-mechanism; profiles fragmented | REJECTED — increases coupling |
| Per-skill (one piece per archived skill = 4–5 pieces) | Duplicates procedure description across pieces; doc and verify have no home | REJECTED — poor reassembly |
| Coarse merge (P2+P3 → one P_SKILLS) | Loses sensemaking's 3-profile commitment at piece level | CONSIDERED — but separation justified by distinct downstream elaboration (active has v2 design accommodation; dormant doesn't) |
| Merge P5+P6 (doc + procedure into one piece) | Procedure lives in doc; saves one piece | CONSIDERED — but separated to let Critique evaluate procedure-correctness independently of doc-clarity |

**Chosen cut:** 6 pieces matching Sensemaking's pre-sketch. The profile-axis cut (β/γ/δ) has lowest cross-cluster coupling; the policy-vs-action cut (ε vs rest) has clean coupling.

---

## Step 2 — Boundaries Top-Down

From the coupling map, the natural cuts:

- **B1: E1 | (E2,E3,E4)** — verification gates execution. Very clean (only data flow: confirmed list).
- **B2: E2 | E3** — active vs dormant. Clean (same procedure, different downstream design accommodation).
- **B3: (E2,E3) | E4** — SKILL vs non-SKILL. Clean (different mechanism exposure).
- **B4: (E2,E3,E4) | E5** — execution vs policy. Clean (one-way constraint).
- **B5: E5 | E6** — doc vs procedure. Moderate (doc cites procedure); kept separate for evaluative independence.

Six pieces emerge.

---

## Step 3 — Boundaries Bottom-Up (Validation)

### Atoms (irreducible work-items)

| Atom | Belongs to |
|---|---|
| a1 — move navigation/ → _archive/navigation/ | P2 |
| a2 — rm ~/.claude/skills/navigation/ | P2 |
| a3 — move meta-loop/ → _archive/meta-loop/ | P2 |
| a4 — rm ~/.claude/skills/meta-loop/ | P2 |
| a5 — move comprehend/ → _archive/comprehend/ | P3 |
| a6 — rm ~/.claude/skills/comprehend/ | P3 |
| a7 — move reflect/ → _archive/reflect/ | P3 |
| a8 — rm ~/.claude/skills/reflect/ | P3 |
| a9 — decision for contracts/alignment_control.md | P4 |
| a10 — decision for next_question_to_ask.md | P4 |
| a11 — formulate decompose-flag question to user | P1 |
| a12 — sanity-check the other 7 cannon entries | P1 |
| a13 — verify command spec | P6 |
| a14 — reverse command spec | P6 |
| a15 — convention doc text | P5 |

### Cohesion check

| Piece | Atoms | Internal cohesion |
|---|---|---|
| P1 | a11, a12 | Both about pre-execution list verification |
| P2 | a1–a4 | All active-SKILL moves + unregisters |
| P3 | a5–a8 | All dormant-SKILL moves + unregisters |
| P4 | a9, a10 | Both per-artifact non-SKILL decisions |
| P5 | a15 | Single artifact (the README) |
| P6 | a13, a14 | Both executable procedure specs |

No atom spans pieces; no cross-piece atoms. **Confidence: HIGH** — top-down and bottom-up agree.

---

## Step 4 — Question Tree (Pieces as Questions with Verification Criteria)

### P1 — Cannon-Set Verification

**Question:** How is the proposed archive list verified before execution — specifically, what is decompose's status (cannon-by-runtime vs experimental), and are the other 7 cannon entries free of similar runtime dependencies?

**Verification criteria:**
- [ ] User-facing question wording prepared (clear, decision-form, default recommendation stated)
- [ ] Default recommendation: treat `cognitive_harness/decompose/` as cannon (since `~/.claude/skills/decompose/` is invoked by `/MVL+`'s D step)
- [ ] Override path: if user disagrees, what's the alternate disposition
- [ ] Other cannon set (`explore, innovate, MVL, MVL+, protocols, sense-making, td-critique`) reviewed: confirmed each is either invoked by runtime or actively-used; no silent omission like decompose
- [ ] Final archive list output (5 SKILLs presumed: navigation, meta-loop, comprehend, reflect — wait, that's 4 — plus optionally decompose if user overrides; plus contracts and next_question_to_ask depending on P4)

### P2 — Profile A: Active SKILL Disposition (navigation + meta-loop)

**Question:** What is the concrete move + unregister specification for each active SKILL-shaped experimental item, accommodating that the user may have active replacement design work (slot reuse pattern)?

**Verification criteria:**
- [ ] Source → destination path stated per skill:
  - `cognitive_harness/navigation/` → `cognitive_harness/_archive/navigation/`
  - `cognitive_harness/meta-loop/` → `cognitive_harness/_archive/meta-loop/`
- [ ] Registry-removal command per skill:
  - `rm -rf ~/.claude/skills/navigation/`
  - `rm -rf ~/.claude/skills/meta-loop/`
- [ ] Active-replacement-design accommodation: the freed `cognitive_harness/<name>/` slot is available for v2 work; no special "twin" folder needed
- [ ] meta-loop's stub shape (SKILL.md only, no references/) confirmed as still moving as a whole folder
- [ ] All sub-content moves with the folder (references/, warmup/, etc.) — no partial archive

### P3 — Profile B: Dormant SKILL Disposition (comprehend + reflect)

**Question:** What is the concrete move + unregister specification for each dormant SKILL-shaped experimental item, given there is no replacement design pending?

**Verification criteria:**
- [ ] Source → destination path stated per skill:
  - `cognitive_harness/comprehend/` → `cognitive_harness/_archive/comprehend/`
  - `cognitive_harness/reflect/` → `cognitive_harness/_archive/reflect/`
- [ ] Registry-removal command per skill:
  - `rm -rf ~/.claude/skills/comprehend/`
  - `rm -rf ~/.claude/skills/reflect/`
- [ ] All sub-content moves with the folder

### P4 — Profile C: Non-SKILL Artifact Disposition

**Question:** What disposition does each non-SKILL artifact receive — move to `_archive/_misc/`, leave in place with annotation, or delete?

**Verification criteria:**
- [ ] Decision for `cognitive_harness/contracts/alignment_control.md` (move / leave / delete) with reasoning
- [ ] Decision for `cognitive_harness/next_question_to_ask.md` (loose file) (move / leave / delete) with reasoning
- [ ] If move: source + destination stated
- [ ] If leave: rationale for why no action (e.g., no M1 because not registered)
- [ ] If delete: user-confirmation prompt (defensive default)
- [ ] Note that no registry action is needed for either (not registered)

### P5 — Convention Doc (`cognitive_harness/_archive/README.md`)

**Question:** What does the convention doc say — what defines `_archive/`, how do skills enter and leave, what is the agent-instruction for honoring the convention?

**Verification criteria:**
- [ ] Section: "What goes in `_archive/`" — explicit entry criteria
- [ ] Section: "How to add a skill to `_archive/`" — cites P6's verify+forward procedure
- [ ] Section: "How to promote back to cannon" — cites P6's reverse procedure
- [ ] Section: "Agent instruction" — explicit text: agents should not auto-Read or auto-load anything under `_archive/` unless the user explicitly requests reference to the prior version
- [ ] Forward-looking applicability: covers future experimental skills, not just current
- [ ] Composability noted: relationship to existing `cognitive_harness/protocols/_archive/` convention
- [ ] Convention naming choice (`_archive/` over `_experimental/` etc.) briefly justified

### P6 — Verify + Reverse Procedure

**Question:** What are the executable verify and reverse procedures (specific commands) for an archive operation?

**Verification criteria:**
- [ ] Verify procedure command(s): confirms folder is at `_archive/<skill>/` AND no entry at `~/.claude/skills/<skill>/`
- [ ] Reverse procedure command(s): moves folder back from `_archive/` to top-level AND re-creates the runtime registry entry
- [ ] Idempotency consideration: what happens if verify runs twice; what happens if reverse runs on something not in `_archive/`
- [ ] Failure mode: what if a move partially succeeded (folder moved but registry remove failed, or vice versa)
- [ ] One-liner viable: both procedures simple enough to run from a single command-line invocation

---

## Step 5 — Interface Map

### Interfaces

| From | To | What flows | Direction | Type |
|---|---|---|---|---|
| P1 → P2 | Confirmed active-SKILL list (navigation, meta-loop; possibly + decompose if user overrides) | data | one-way | precondition |
| P1 → P3 | Confirmed dormant-SKILL list (comprehend, reflect; possibly - decompose) | data | one-way | precondition |
| P1 → P4 | Non-SKILL artifact list (contracts/, next_question_to_ask.md) | data | one-way | precondition |
| P1 → P5 | Final cannon vs archive list (for doc context: what counts as cannon) | data | one-way | precondition |
| P6 → P5 | Procedure spec (for doc to cite) | dependency | one-way | doc cites procedure |
| P5 → P2 | Convention constraint (action must conform) | constraint | one-way | actions conform to doc |
| P5 → P3 | Convention constraint | constraint | one-way | actions conform to doc |
| P5 → P4 | Convention constraint (if move chosen) | constraint | one-way | actions conform to doc |
| P6 → P2 (execution) | Verify procedure applied per skill | dependency | one-way | execution-time invocation |
| P6 → P3 (execution) | Verify procedure applied per skill | dependency | one-way | execution-time invocation |
| P6 → P4 (execution) | Verify procedure applied if move chosen | dependency | one-way | execution-time invocation |

### Assumptions-not-data check

| Piece | Assumption it makes | Explicit? |
|---|---|---|
| P2 | Confirmed archive list is final (P1 closed) | ✓ explicit via precondition |
| P3 | Same | ✓ explicit |
| P4 | User-decision authority on per-artifact disposition | ✓ explicit |
| P5 | Procedure (P6) is correct | ✓ explicit via citation |
| P5 | The 3-profile partition is the right level of differentiation (not 1 or 5 profiles) | ✓ explicit (committed in Sensemaking) |
| P6 | Bi-folder model holds (cognitive_harness/ + ~/.claude/skills/) | ✓ explicit |

No hidden assumptions. All interfaces explicit. Hidden Coupling failure-mode avoided.

---

## Step 6 — Dependency Order

### For Innovation phase (elaboration)

All 6 pieces can be elaborated in parallel — Innovation produces specs, not file changes. No execution-blocking dependency.

### For Execution phase (the user's actual to-do list, in finding's Next Actions)

```
1. P1 — Ask user about decompose-flag → receive response → finalize archive list
                              │
                              ▼
2. P6 — Specify verify + reverse procedures (could happen earlier, but doc cites them)
                              │
                              ▼
3. P5 — Write convention doc (cites P6; references list from P1)
                              │
                              ▼ (in parallel)
4a. P2 — Move + unregister navigation, meta-loop, then verify (P6)
4b. P3 — Move + unregister comprehend, reflect, then verify (P6)
4c. P4 — Decide non-SKILL dispositions, execute, then verify if moves chosen
```

P2, P3, P4 are independent in execution (different skills). Verify (P6 procedure) runs after each.

No circular dependencies.

---

## Step 7 — Self-Evaluate (Full 7 Dimensions)

| Dimension | Status | Notes |
|---|---|---|
| **Independence** | PASS | Each piece's question is answerable without reading sibling pieces; only declared-interface flows used |
| **Completeness** | PASS | Decompose-flag (P1), all 4 SKILL profiles (P2+P3), non-SKILL (P4), policy (P5), procedure (P6). Bi-folder action embedded in P2/P3. 3-profile differentiation visible. Forward-looking convention in P5. No aspect of the original problem falls through gaps. |
| **Reassembly** | PASS | All 6 pieces answered → user has complete archive list (P1) + concrete moves per skill (P2+P3+P4) + policy doc (P5) + procedure (P6). Context-blur prevented via bi-folder action; reversibility via P6. |
| **Tractability** | PASS | P1: ~5–10 lines; P2: 4 commands + notes; P3: 4 commands; P4: 2 decisions; P5: ~30–40 lines markdown; P6: ~10 lines bash. Each fits a focused pass. |
| **Interface clarity** | PASS | All interfaces explicit; assumptions-not-data check applied; no hidden coupling |
| **Balance** | PASS | P5 is largest (doc-shaped) but not 80% of work; others roughly proportional. No 80/20 imbalance. |
| **Confidence** | PASS | Top-down boundaries + bottom-up atom-cohesion agree. |

### Determination-Mechanism Check

Load-bearing concept with runtime-determined applicability: **decompose's cannon-vs-experimental status**. Determined at runtime by the user's response to P1's question. **P1 explicitly addresses this determination mechanism.** ✓ — Missing Pieces (failure mode 4) avoided.

### Failure-Mode Self-Check

| Failure mode | Status | Note |
|---|---|---|
| 1. Premature Decomposition | ✗ avoided | Sensemaking fully clarified the whole (3 commits, 7 ambiguities collapsed) before decomposing |
| 2. Wrong Boundaries | ✗ avoided | Cuts at low-coupling valleys; alternatives tested and rejected on coupling grounds |
| 3. Hidden Coupling | ✗ avoided | Assumptions-not-data check applied; all interface assumptions explicit |
| 4. Missing Pieces | ✗ avoided | Determination-mechanism check (P1 covers decompose-flag runtime resolution) |
| 5. Over-Decomposition | ✗ avoided | 6 pieces for a moderately complex design problem; no fragment-pieces; each non-trivial |
| 6. Ignoring Dependencies | ✗ avoided | Execution dependency order specified |
| 7. Imbalanced Decomposition | ✗ avoided | Pieces roughly proportional in elaboration weight |

### Self-Assessment

**PROCEED.** Decomposition produces 6 well-bounded pieces, clean interfaces, dependency order for execution, all 7 self-evaluation dimensions PASS. Ready for Innovation to elaborate concrete per-piece content.
