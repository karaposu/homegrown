# Decomposition — Innovation Missed Contrarian-Rethink Methodology-Mode Consideration

## User Input

`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-18_loop_diagnose__innovation_missed_contrarian_rethink_methodology_mode/_branch.md`

Inputs read: `_branch.md`; `exploration.md`; `sensemaking.md` (SV6 + Strategy C minimum-sufficient resolution); prior 2026-05-18 diagnostics (composition base). The whole is small: sensemaking committed 2 maintenance-candidate paths. Decomposition keeps it compact per the calibration discipline.

**Whole to decompose.** Convert sensemaking's Strategy C (extend §8 vocabulary + add 1 seed-time rule) into a Q-tree composable with the prior 2026-05-18 refinement-set v2 via vertical layering.

**Hard scope constraint:** all pieces operate on `/innovate` reference only.

---

## Step 1 — Coupling Topology

### Elements identified

Three candidate elements at first scan; one collapses on examination:

| Tag | Element | From sensemaking |
|---|---|---|
| α | Vocabulary extension: add methodology-mode entries to existing §8 (from prior 2026-05-18 Gap-2 piece-level diagnostic) | P-Maintenance-A |
| β | New seed-time rule (Q-seed): Innovation must consider at least one alternative methodology mode before running mechanisms | P-Maintenance-B |
| δ | Determination mechanism: HOW does Innovation classify the inherited methodology mode at seed time | Args refinement note (Step 7) |

### Collapse decision

δ collapses into β. The seed-level determination is simpler than the piece-level analog: only one methodology mode per run; the determination reduces to "read the seed-framing text and classify per §8 vocabulary." This is a one-line procedure embedded in β's rule text, not a separate piece. (Contrast: the piece-level case in the prior Pair #7 diagnostic needed a separate Q2-extension piece because property-(v) determination fires per-piece with edge cases. Here, seed-level fires once with a clear textual signal.)

**Revised elements: 2 — α, β.**

### Pairwise coupling

| Pair | Coupling | Reason |
|---|---|---|
| α ↔ β | Strong | β's rule text references methodology-mode names from α's extended vocabulary |

Two pieces; one strong coupling. Coupling map is trivial: α is foundation; β depends on α.

---

## Step 2 — Boundary Detection (Top-Down)

Cut between α and β (extension to existing piece vs new rule). Both pieces fit at `/innovate` reference; α extends an existing sub-section (§8 from prior 2026-05-18 diagnostic), β adds a new sub-section.

Initial partition: 2 pieces.

---

## Step 3 — Bottom-Up Validation

### Atoms

- **At1:** existing §8 sub-section text (currently lists 10 intervention shapes per prior diagnostic; extends with methodology-mode entries).
- **At2:** new seed-time rule text (new sub-section in `/innovate` reference at §"Phase 2 Generate" before piece-level rules, OR a new §9 "Seed-Time Methodology-Mode Consideration").

Bottom-up grouping:
- Group-1: At1 → P1 (α). Single atom; single piece.
- Group-2: At2 → P2 (β). Single atom; single piece.

Top-down and bottom-up agree. **Confidence: HIGH.**

---

## Step 4 — Question Tree (2 pieces)

### Q1 (P1: α vocabulary extension)

**Question:** What text extends the existing §8 Intervention-Shape Vocabulary (from the prior 2026-05-18 Gap-2 piece-level diagnostic) to also enumerate methodology modes at seed level?

**Verification criteria:**
- [ ] §8's existing title and content preserved (intervention-shape entries unchanged).
- [ ] A new sub-section added within §8 (e.g., "§8.B Methodology Modes") OR §8's scope broadened to "Intervention-Shape and Methodology-Mode Vocabulary" with both clearly separated.
- [ ] Methodology modes enumerated (at least 4): **standard default** (balanced 4G+3F per Coverage Strategy); **contrarian-rethink Framer-weighted** (Framers carry the load; Generators light); **Generator-weighted exploration** (Generators heavy for maximum novel-candidate generation); **depth-iteration mode** (one mechanism iterated to system-level per spec's depth-check refinement).
- [ ] Each mode has one-line operational description specifying mechanism-distribution profile + seed-purpose stance.
- [ ] Each mode has a one-line "how to identify this mode in seed-framing text" — the determination clue (e.g., "the seed framing contains phrases like 'Framer-weighted' or 'contrarian rethink'").
- [ ] Vocabulary explicitly distinguishes intervention shapes (per-piece) from methodology modes (per-run) — different scopes, different applicability.
- [ ] Extensibility per the existing §8 pattern; revival trigger named.
- [ ] Cross-references the new Q-seed rule.

### Q2 (P2: β new seed-time rule Q-seed)

**Question:** What is the text for the new seed-time rule (Q-seed) added to `/innovate` reference requiring Innovation, before running mechanisms, to consider at least one alternative methodology mode from §8 to the framing-given mode?

**Verification criteria:**
- [ ] Rule text drafted at the appropriate `/innovate` reference location (recommended: §"Phase 2 Generate" before the existing variations-per-mechanism rule, OR a new §9 "Seed-Time Methodology-Mode Consideration").
- [ ] Rule's procedure specified:
  - (i) Identify the inherited methodology mode (read seed-framing text; classify per §8 vocabulary)
  - (ii) Generate at least one alternative methodology mode from §8
  - (iii) State what follows if the alternative were applied (briefly — what would the candidate space look like under the alternative?)
  - (iv) Decide which mode to run with (default: use inherited mode)
- [ ] Override paths specified:
  - **Mode-switch override:** when Innovation decides to switch to the alternative, record `Seed-time-methodology-mode-switch: <new-mode>; reason: <specific reason>`
  - **Alternative-inapplicable override:** when the inherited mode is unambiguously correct (no plausible alternative), record `Methodology-mode-alternative-marked-inapplicable: <specific reason>`. Empty overrides are defects.
- [ ] Compliance criterion (artifact-observable): the innovation.md output's seed/preamble section contains the inherited-mode identification + alternative-mode generation + decision OR an override entry.
- [ ] Cross-reference to §8 vocabulary (for mode names).
- [ ] Composition with prior piece-level rules made explicit: "this rule fires ONCE at seed time, BEFORE the piece-level Inversion rule (prior 2026-05-18 Gap-1 diagnostic's Q3) and the piece-level intervention-shape rule (prior 2026-05-18 Gap-2 diagnostic's Q3-extension). The three rules form vertical layering: seed-time methodology-mode check → piece-time Inversion → piece-time intervention-shape-axis Inversion at property-v pieces."
- [ ] Methodological caveat (self-application, per prior diagnostics' pattern): when future spec-edits touch this rule, Innovation should self-apply at seed time — generate at least one alternative methodology mode for the spec-edit run itself.

---

## Step 5 — Interface Map

| From | To | Flow type | Data | Assumption |
|---|---|---|---|---|
| Q1 | Q2 | Prerequisite (weak) | Methodology-mode names | Q2 may reference Q1 by location (allowing parallel drafting) |
| Mutual | Field-naming consistency | (none data) | Mode-name terms consistent across Q1 + Q2 + any future telemetry extension |

### Hidden coupling risks

- **Risk-1 — Mode-identifiability fuzziness.** If Q1's modes aren't distinguishable in real seed-framing text (e.g., a seed says "apply Inversion heavily" — is that "Framer-weighted" or "depth-iteration"?), Q2's determination procedure becomes ambiguous. Mitigation: Q1's operational descriptions must include explicit text-signals ("the seed framing contains phrases like X" for each mode).

- **Risk-2 — Compliance vacuity.** Q2's compliance criterion could be satisfied by generating a trivial "alternative" that's barely different from the inherited mode. Mitigation: Q2's text must require the alternative be a different mode from §8's enumeration (not a slight variation of the inherited mode).

These are simpler and fewer than the prior diagnostic's 3 hidden-coupling risks (the smaller decomposition surfaces fewer interaction surfaces).

---

## Step 6 — Dependency Order

```
Phase 1 (parallel via location-reference): Q1, Q2
```

Q2's text can reference Q1 by location ("see §8 for vocabulary"); drafting parallelism works.

**Critical path: 1 phase.**

This is much shorter than the prior diagnostic's 3 phases — reflecting Strategy C's parsimony.

---

## Step 7 — Self-Evaluation

| Dimension | Result |
|---|---|
| Independence | PASS (Q1 + Q2 independently answerable given cross-reference by location) |
| Completeness | PASS (Strategy C's 2 paths covered; determination collapsed into Q2) |
| Reassembly | PASS (Q1 + Q2 + composition with prior set v2 = composed v3 ≈ 7 effective pieces) |
| Tractability | PASS (small) |
| Interface clarity | PASS (with 2 hidden-coupling risks flagged) |
| Balance | PASS (both pieces small; balanced) |
| Confidence | HIGH |
| Determination-mechanism piece check | PASS (collapsed into Q2's rule text; appropriate for seed-level where the determination is one-off) |

### Reassembly check against the motivating case

Mental simulation against `10-50`'s case:
- Q1 vocabulary extended; methodology modes named including "standard default" and "contrarian-rethink Framer-weighted."
- Q2 fires at seed time. The inherited methodology mode in `10-50`'s seed was "elaboration; produce SHIP-READY content per piece" (the standard default per §8). Q2 requires generating at least one alternative — e.g., "contrarian-rethink Framer-weighted." Innovation states what follows under the alternative (8 contrarian designs surfaced, 1 surviving as REFINES per `11-30`'s actual evidence). Innovation decides which mode to run with. If Innovation chooses to run contrarianly, the artifact would surface the 8 contrarian designs at seed time, internalizing the user-correction-equivalent path.
- If Innovation chooses to keep the inherited mode (with an override recorded), the FLAG signal at telemetry-level (downstream) would surface that an alternative was considered and rejected with a specific reason — auditable.

**Reassembly: PASS.** The user-correction-equivalent (the user's explicit Framer-weighted directive in `11-30`) is internalized as Q2's at-seed-time consideration.

Hard scope constraint: all 2 pieces operate on `/innovate` reference only. PASS.

---

## Final Deliverable

### Coupling Map
2 elements (α vocabulary + β rule); 1 strong coupling. Foundation: α; depends on α: β.

### Question Tree (2 pieces)
- **Q1 — Vocabulary extension** of existing §8 to enumerate methodology modes
- **Q2 — Seed-time rule (Q-seed)** requiring methodology-mode-alternative consideration before mechanism execution, with override paths

### Interface Map
Q1 → Q2 (weak prerequisite via location-reference; allows parallel drafting). 2 hidden-coupling risks flagged.

### Dependency Order
Phase 1 (parallel): Q1, Q2. Critical path: 1 phase.

### Self-Evaluation
PASS on all 7 dimensions + determination-mechanism check. HIGH macro confidence.

Hard scope constraint: **PASS** (all pieces within `/innovate` reference).

---

## Notes for Downstream Disciplines

**For Innovation (next):** Generate concrete text for Q1 and Q2. Apply 5-test cycle. Recursive self-application: per Q2's methodological caveat, this Innovation run itself fires Q2 (the seed for Innovation is "elaborate Q1 + Q2 per the prior pattern"); the inherited methodology mode is the standard default; Innovation should generate at least one alternative methodology mode for itself (e.g., "contrarian-rethink" to challenge Strategy C; "depth-iteration" on Inversion to drive deeper) and decide.

**For Critique (after):** the 2 hidden-coupling risks (mode-identifiability fuzziness; compliance vacuity) are critique's adversarial-test focal points. Additional focal points: false-positive risk (does Q2 over-flag on cases where the inherited mode is unambiguously correct?); composition coherence (does Q-seed's seed-time placement conflict with the prior piece-time rules?); recursive self-application robustness (does this inquiry's Innovation generate a legitimate methodology-mode alternative for itself, or a straw-man?).

**For CONCLUDE (final):** 2 pieces should appear under "Maintenance Candidates" — Q1 (vocabulary extension) and Q2 (seed-time rule). The composition pattern with the prior 2026-05-18 refinement-set v2 (vertical layering: seed-time rule above piece-time rules) should be explicitly named. Strategy C calibration (minimum sufficient) should be acknowledged.
