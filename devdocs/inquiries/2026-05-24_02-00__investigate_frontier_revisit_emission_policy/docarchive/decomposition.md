# Decomposition — investigate_frontier_revisit emission policy

## User Input

`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-24_02-00__investigate_frontier_revisit_emission_policy/_branch.md`

---

## Step 1 — Coupling Topology

### Elements of the whole

Sensemaking's SV6 stabilized model + the user's explicit "list options + pros/cons" ask produce these elements:

- **E1** — Option 13 mechanism shape (hybrid: confidence-graduated + per-route-type-split).
- **E2** — INVESTIGATE FRONTIER per-type rule (always-emit + per-discipline-graduated confidence label).
- **E3** — REVISIT per-type rule (≥3 prior cycles natural-availability filter + per-discipline-graduated confidence label when emitted).
- **E4** — D1 confidence scheme (LOW / MED / HIGH; thresholds N=20 and N=30 per-discipline).
- **E5** — E5 per-discipline-N source deferral with LOW-default fallback (deferred to SKILL.md authoring).
- **E6** — Pollution-framing-test finding (currently overstated per desc.md; defensive labeling preserved as future-proof insurance).
- **E7** — Enumerate-all identity preservation statement.
- **E8** — Natural-availability filter distinction (REVISIT's ≥3-cycle filter is mechanism-honesty, NOT identity-violating gating).
- **E9** — Downstream-consumer-interprets-metadata pattern (Baldwin / /intuit / human Selector / system Selector decide their own filtering policies).
- **E10** — 15-option pros/cons table (the user's explicit deliverable ask).
- **E11** — 6 follow-up FFs (FF-A through FF-F).
- **E12** — Inherited Commitments Re-test (per Synthesis Trigger: 6 priors + canonical /navigation + docs/desc.md).
- **E13** — Cross-document impact notes (CONCLUDE-handled; out of scope).

### Pairwise coupling

| Pair | Coupling | Reason |
|---|---|---|
| E1 ↔ E2 | **STRONG** | Mechanism IS the per-type rules combined; FRONTIER rule is half of Option 13. |
| E1 ↔ E3 | **STRONG** | Same — REVISIT rule is the other half. |
| E2 ↔ E4 | **STRONG** | FRONTIER's emission carries D1 confidence value. |
| E3 ↔ E4 | **STRONG** | REVISIT's emission (when natural-availability filter passes) carries D1 confidence value. |
| E3 ↔ E8 | **STRONG** | Natural-availability filter IS REVISIT's rule's mechanism-honesty distinction from gating. |
| E4 ↔ E5 | **STRONG** | Confidence scheme requires per-discipline-N source; deferral has LOW-fallback. |
| E6 ↔ E2+E3 | **MODERATE** | Defensive labeling is FRONTIER + REVISIT both; pollution-test finding justifies it. |
| E7 ↔ E2+E3+E8 | **STRONG** | Identity-preservation is the constraint that shaped per-type rules AND natural-availability filter distinction. |
| E9 ↔ E4 | **MODERATE** | Downstream-decides assumes metadata labeling exists (D1 confidence). |
| E10 ↔ E1-E9 | **WEAK** | 15-option table is informational; cross-references all options but doesn't constrain. |
| E11 ↔ E1-E9 | **WEAK** | FFs informational. |
| E12 ↔ E1-E9 | **STRONG** | Re-test validates all commitments. |
| E13 ↔ everything | **WEAK** | CONCLUDE-handled; out of scope. |

### Cluster identification

- **Cluster A — POLICY MECHANISM:** E1 + E2 + E3 + E7 + E8. Tightly coupled (mechanism + per-type rules + identity preservation + natural-availability filter distinction).
- **Cluster B — CONFIDENCE LABELING:** E4 + E5. Tightly coupled (scheme + source deferral with fallback).
- **Cluster C — POLLUTION-TEST + DOWNSTREAM-AWARENESS:** E6 + E9. Loosely coupled (pollution-test finding + downstream-pattern; both speak to consumer-interaction).
- **Satellite — 15-OPTION PROS/CONS TABLE:** E10. User's explicit deliverable.
- **Satellite — FF LIST:** E11.
- **Satellite — RE-TEST:** E12.
- **Out-of-scope:** E13 (CONCLUDE-handled).

### Coupling-map summary

```
       [Cluster A: POLICY MECHANISM]
       E1 (Option 13)
        │
        ├── E2 (FRONTIER rule)
        ├── E3 (REVISIT rule) ─── E8 (natural-availability filter distinction)
        └── E7 (identity preservation)
                │
                │ (per-type rules cite confidence scheme)
                v
       [Cluster B: CONFIDENCE LABELING]
       E4 (D1 scheme) ─── E5 (source deferred; LOW-fallback)
                │
                │ (metadata enables downstream filtering)
                v
       [Cluster C: POLLUTION-TEST + DOWNSTREAM]
       E6 (pollution-test) ─── E9 (downstream-interprets)
       
       [Satellite: 15-OPTION TABLE]
       E10 (informational; cross-references all)
       
       [Satellite: FF LIST]
       E11 (6 FFs)
       
       [Satellite: RE-TEST]
       E12 (validates all)
```

---

## Step 2 — Detect Boundaries (Top-Down)

Five natural boundaries emerge:

- **B1** — Between Cluster A (Policy Mechanism) and Cluster B (Confidence Labeling). Low-crossing: per-type rules cite the confidence scheme values; one-way reference.
- **B2** — Between Cluster B (Confidence Labeling) and Cluster C (Pollution-test + Downstream). Low-crossing: D1 labels are the substrate downstream consumers interpret.
- **B3** — Between Cluster A+B+C and the 15-OPTION TABLE satellite. Low-crossing: the table cross-references all 3 clusters' commitments + the 11 rejected/deferred options.
- **B4** — Between everything and the FF LIST + RE-TEST satellites. Standard satellite boundaries.

---

## Step 3 — Validate Boundaries (Bottom-Up)

Irreducible atoms:

- **Atom-a** — A single per-type rule (e.g., "FRONTIER always-emit with confidence label").
- **Atom-b** — A single confidence-scheme value or threshold (e.g., "LOW for N<20").
- **Atom-c** — A single downstream-consumer-interpretation statement (e.g., "Baldwin's filtering policy is Baldwin's spec, not routeman's").
- **Atom-d** — A single option row in the pros/cons table (e.g., "Option 2 — Gate-until-maturity — KILL — violates enumerate-all identity").
- **Atom-e** — A single FF entry.
- **Atom-f** — A single prior-commitment verdict.

Clustering check:
- Atoms-a → Cluster A. ✓
- Atoms-b → Cluster B. ✓
- Atoms-c → Cluster C. ✓
- Atoms-d → 15-OPTION TABLE satellite. ✓
- Atoms-e → FF LIST satellite. ✓
- Atoms-f → RE-TEST satellite. ✓

**No atoms split across boundaries. Boundaries CONFIRMED.**

**Confidence:** HIGH — top-down + bottom-up agree.

---

## Step 4 — Question Tree

### P1 — POLICY MECHANISM SPEC (Option 13 hybrid + per-type rules + identity preservation + natural-availability filter)

**Question:** "What is the policy mechanism (Option 13 hybrid: confidence-graduated + per-route-type-split), the per-type rules for INVESTIGATE FRONTIER (always-emit) and REVISIT (≥3 prior cycles natural-availability filter), the enumerate-all identity preservation statement, and the natural-availability-filter vs identity-violating-gating distinction?"

**Verification criteria:**
- [ ] Mechanism shape committed: **Option 13 hybrid** (confidence-graduated emission + per-route-type-split).
- [ ] **INVESTIGATE FRONTIER per-type rule:** emit ALWAYS; per-route confidence label per maturity (cite D1 scheme from P2).
- [ ] **REVISIT per-type rule:** emit only when ≥3 prior cycles exist (natural-availability filter); when emitted, per-route confidence label per maturity (cite D1).
- [ ] **Natural-availability filter distinction:** REVISIT's ≥3-cycle filter is mechanism-honesty (REVISIT is structurally meaningless without prior cycles), NOT identity-violating gating. This distinction is load-bearing for the enumerate-all identity preservation.
- [ ] **Enumerate-all identity preservation:** routeman emits both types whenever they're meaningful; no type-level gating; identity preserved.
- [ ] **REVISIT sub-action treatment (uniform):** all 3 sub-actions (RESURRECT / INVALIDATE / REVERT) inherit REVISIT's policy uniformly at first ship; per-sub-action split deferred (FF-C).
- [ ] **Determination mechanism:** REVISIT's "≥3 prior cycles" requires routeman to count prior cycles at runtime; source = persistence model's per-Route status (per 24-00) OR inquiry-folder scan count (heuristic). Concrete count source deferred to SKILL.md authoring.

### P2 — CONFIDENCE LABELING SPEC (D1 scheme + per-discipline-N source deferred + LOW-fallback)

**Question:** "What is the confidence-labeling scheme (D1: 3-level LOW/MED/HIGH; thresholds N=20 and N=30 per-discipline) and the per-discipline-N source plan (E5 deferred to SKILL.md authoring; first-ship fallback = LOW-default for all FRONTIER/REVISIT emissions until source decided)?"

**Verification criteria:**
- [ ] **D1 confidence scheme:** 3-level enum `confidence ∈ {LOW, MED, HIGH}`.
- [ ] **Threshold values:** LOW when per-discipline N < 20; MED when 20 ≤ N < 30; HIGH when N ≥ 30.
- [ ] **Thresholds calibratable** at SKILL.md authoring (the 20/30 values are first-ship defaults).
- [ ] **Per-discipline-N source:** DEFERRED to SKILL.md authoring (E5). Candidates from Surfacing for the SKILL.md authoring inquiry to choose: E1 `_meta_state.md` extension; E2 new `docs/discipline_calibration.md` sidecar; E3 inquiry-folder count heuristic.
- [ ] **First-ship fallback (until source decided):** confidence = LOW for all FRONTIER/REVISIT emissions. Graceful degradation (policy operates conservatively while source is unspecified).
- [ ] **Confidence field location:** uses the per-route `confidence` field already in routeman's schema per the design memo's "Assess priority and confidence per move" feature — no new schema field needed.
- [ ] **Routeman-self-N as second axis:** SINGLE-AXIS at first ship; routeman-self-N is deferred (FF-D) pending LAYER-2 audit infrastructure (Q4).

### P3 — POLLUTION-TEST + DOWNSTREAM-AWARENESS (pollution-framing test result + defensive labeling rationale + downstream-consumer-interprets-metadata pattern)

**Question:** "What is the pollution-framing-test result (currently overstated per `docs/desc.md`'s actual specification of Baldwin's seed source as /intuit hunches + Retrospective RC delta, NOT routeman emissions), the defensive-labeling rationale (future-proofing if Baldwin's spec when shipped changes), and the downstream-consumer-interprets-metadata pattern (each consumer decides its own filtering policy)?"

**Verification criteria:**
- [ ] **Pollution-framing test result:** Q10's framing "polluting the Baldwin cycle's seed quality" is CURRENTLY OVERSTATED. Per direct read of `docs/desc.md`, Baldwin's seed source is "hunch-pattern seeds" from /intuit Phase β+ calibrated against Retrospective RC delta — NOT routeman emissions. Routeman emissions are consumed by inquiry runners (E→S→D→I→C cycle) + the Selector (human at L0-L1; system at L2+); whether Baldwin directly consumes routeman emissions is unspecified by desc.md.
- [ ] **Defensive-labeling rationale:** confidence-labeling future-proofs the policy against the possibility that Baldwin's spec when shipped commits routeman-consumption. The labeling costs nothing (the confidence field already exists per the design memo); if pollution risk materializes, the labels are already there.
- [ ] **Downstream-consumer-interprets-metadata pattern:** routeman emits with metadata (D1 confidence label per route); each downstream consumer decides its own filtering policy. Specifically:
  - **Human Selector (L0-L1; current state)** — reads confidence + filters by judgment.
  - **Baldwin cycle (post-N≥30; not yet shipped)** — IF it consumes routeman emissions, its filtering policy is Baldwin's spec, NOT routeman's.
  - **/intuit Phase β+ (when shipped)** — interpretation per /intuit's spec; not routeman's concern.
  - **System Selector at L2+ (per autonomy_ladder.md; not yet active)** — its filtering policy is the system-Selector spec.
- [ ] **Routeman doesn't gate based on Baldwin assumptions:** the pollution-prevention responsibility is downstream (Baldwin's own filter when shipped); routeman's job is to emit with metadata, not pre-filter for downstream consumers that haven't shipped.

### P4 — 15-OPTION PROS/CONS TABLE (the user's explicit deliverable ask)

**Question:** "What is the comprehensive 15-option pros/cons table with per-option pros, cons, and verdict (ADOPTED / KILLED / DEFERRED / REJECTED) plus the structural reasoning per verdict?"

**Verification criteria:**
- [ ] All 15 options from Surfacing listed:
  - Option 1: Always-emit (no labels)
  - Option 2: Gate-until-maturity
  - Option 3: Confidence-graduated emission
  - Option 4: Per-route-type-split
  - Option 5: Per-sub-action split for REVISIT
  - Option 6: Adaptive emission rate
  - Option 7: Per-discipline-aware policy
  - Option 8: Snapshot-and-replay
  - Option 9: Human-triage-required pre-maturity
  - Option 10: Downstream-decides via metadata
  - Option 11: No-special-treatment + downstream-discovers
  - Option 12: Defer entirely
  - Option 13: Hybrid (Option 3 + Option 4) [ADOPTED]
  - Option 14: Hybrid (Option 3 + Option 10)
  - Option 15: Hybrid (Option 4 + Option 7 + Option 10)
- [ ] Each option has at least 1 PRO and 1 CON (no empty entries).
- [ ] Each option has a VERDICT: ADOPTED (Option 13) / KILLED (with reason citing structural constraint) / DEFERRED (with revival trigger) / REJECTED (with reason).
- [ ] Option 13 (ADOPTED) has explicit JUSTIFICATION citing the 4 Sensemaking insights (per-route-type asymmetry + enumerate-all identity + confidence field exists + pollution-framing test).

### P5 — RESIDUAL OPEN QUESTIONS (FF LIST)

**Question:** "What are the 6 follow-up FFs with scope + downstream consumer + revival trigger?"

**Verification criteria:**
- [ ] **FF-A — Per-discipline-N source decision** (E1/E2/E3 candidates). Consumer: SKILL.md authoring inquiry. Revival: when SKILL.md authoring begins.
- [ ] **FF-B — Baldwin spec coordination.** Consumer: Baldwin-spec inquiry (when scheduled). Revival: when Baldwin's spec is being written (N≥30 approaching for the project's most-mature discipline).
- [ ] **FF-C — Per-sub-action REVISIT split** (RESURRECT / INVALIDATE / REVERT differentiated policies). Consumer: follow-up routeman inquiry. Revival: observable — when practice surfaces asymmetric pollution profile per sub-action.
- [ ] **FF-D — Routeman-self-N as second confidence axis.** Consumer: follow-up routeman inquiry. Revival: when LAYER-2 audit infrastructure (Q4 from frontier-questions finding) ships.
- [ ] **FF-E — REVISIT threshold (≥3 prior cycles) calibration.** Consumer: SKILL.md authoring. Revival: when practice surfaces over- or under-emission of REVISIT routes.
- [ ] **FF-F — Generalization to other calibration-sensitive types** (e.g., TEST, CONSOLIDATE). Research frontier. Revival: observable — when practice surfaces calibration-sensitivity for other types beyond FRONTIER + REVISIT.

### P6 — INHERITED COMMITMENTS RE-TEST

**Question:** "Does each commitment from the 6 priors + canonical /navigation + `docs/desc.md` survive Option 13's adoption?"

**Verification criteria:**
- [ ] Each prior + spec enumerated with its load-bearing commitments.
- [ ] Each commitment marked PRESERVED / EXTENDED / TESTED-AND-OVERSTATED / INHERITED-WITHOUT-RE-TEST with reason.
- [ ] **Routeman design memo (14-39):** enumerate-all identity PRESERVED; per-route confidence field USED; 12-auto/4-judgment partition's REVISIT-in-4-judgment PRESERVED.
- [ ] **Frontier-questions finding (15-20):** Q10 marked PARTIALLY-RESOLVED-WITH-DESIGN (or RESOLVED-WITH-DESIGN if the policy commitments fully address the question; sensemaking's view was the latter; finding decides).
- [ ] **Adaptive-guidance inquiry (24-01):** per-movement-type Stage 1 mapping PRESERVED + COMPATIBLE (this inquiry doesn't change the mapping; it adds emission-policy + confidence labeling).
- [ ] **Taxonomy categorization (24-01-30):** FRONTIER in Progression / REVISIT in Coordination categorization PRESERVED + USED (the per-route-type-split honors the family-level distinction).
- [ ] **Autonomy register (24-40):** autonomy register PRESERVED + DISTINGUISHED (autonomy level is DIFFERENT axis from calibration maturity; the policy uses per-discipline-N, not autonomy level).
- [ ] **Persistence model (24-00):** per-Route status PRESERVED + USED (REVISIT's prior-cycle count can come from persistence model's per-Route history).
- [ ] **Canonical /navigation:** INVESTIGATE FRONTIER + REVISIT as 16-type taxonomy members PRESERVED VERBATIM.
- [ ] **`docs/desc.md`:** Baldwin's seed source (/intuit hunches + Retrospective RC delta) PRESERVED + TESTED. The pollution framing is TESTED-AND-FOUND-OVERSTATED per direct read.

### Stopping criteria check

- P1: tractable (mechanism + 2 per-type rules + identity preservation + filter distinction + sub-action note).
- P2: tractable (D1 scheme + thresholds + source deferral + fallback).
- P3: tractable (pollution-test + defensive-labeling + downstream-pattern).
- P4: tractable (15 rows × pros/cons/verdict — largest piece but routine).
- P5: tractable (6 FFs).
- P6: tractable (7 priors × verdicts).

No piece requires sub-decomposition. **TRACTABLE for all six.**

---

## Step 5 — Interfaces

| From | To | What flows | Direction | Notes |
|---|---|---|---|---|
| P2 (Confidence Labeling) | P1 (Mechanism) | D1 scheme values flow to per-type rules' confidence-label spec | one-way | P1's per-type rules cite P2's enum. |
| P1 (Mechanism) | P2 (Labeling) | Per-type-emission events trigger the labeling | one-way | P2 specifies the label per event. |
| P3 (Pollution-test + Downstream) | P1 + P2 | Pollution-test result motivates the defensive-labeling decision in P2; downstream-pattern motivates the labels-are-for-consumers framing | one-way | P3 is the rationale; P1+P2 are the spec. |
| P4 (15-option table) | P1+P2+P3 | Cross-references — table cites the ADOPTED option (13) details from P1+P2+P3 | one-way (read-only) | Table is informational. |
| P6 (Re-test) | P1+P2+P3+P4+P5 | Validation against priors | one-way (read-only) | Re-test reads all. |
| Sensemaking SV6 | All pieces | Stabilized model | one-way | All pieces build on SV6. |

### Assumptions-not-data check

- **P1 → P2 interface:** per-type rules assume D1's 3-level enum is stable. Hidden coupling: if P2 changes the scheme (e.g., to 5-level), P1's per-type rules must update. Mitigation: D1 commitment is explicit in P2's verification criteria.
- **P3 → P1+P2 interface:** the defensive-labeling decision assumes confidence labeling is mechanism-cheap. Hidden coupling: if P2's source-deferral fallback proves unworkable in practice, the defensive labeling may need revisiting. Mitigation: E5 with LOW-fallback IS graceful; no infrastructure dependency at first ship.
- **P1's REVISIT rule** assumes a prior-cycle-count source exists. Hidden coupling: if the persistence model's per-Route history (per 24-00) doesn't provide this granularity, REVISIT's ≥3-cycle filter can't be implemented. Mitigation: SKILL.md authoring resolves the count source (FF-E adjacent).
- **P4 → all interfaces:** the 15-option table cites verdicts that depend on P1+P2+P3 commitments. If P1+P2+P3 shift, P4's rows shift. Mitigation: table is generated AFTER P1+P2+P3 are stable.

---

## Step 6 — Dependency Order

```
┌─────────────────────────────────────────┐
│  Sensemaking SV6 (input to all pieces)  │
└─────────────────┬───────────────────────┘
                  │
        ┌─────────┼─────────┐
        v         v         v
┌──────────┐  ┌──────────┐  ┌────────────────────┐
│ P1       │  │ P2       │  │ P3 (POLLUTION-     │  ← P1, P2, P3 drafted
│ (POLICY  │  │ (CONFI-  │  │  TEST + DOWN-      │     in parallel; each
│  MECHA-  │  │  DENCE   │  │  STREAM)           │     addresses a different
│  NISM)   │  │  LABEL.) │  │                    │     cluster
└──────┬───┘  └────┬─────┘  └──────────┬─────────┘
       │           │                   │
       │ (per-type │ (D1 scheme        │ (pollution-test
       │  rules    │  values feed      │  + downstream-
       │  cite     │  P1 per-type      │  pattern inform
       │  P2)      │  emission)        │  P1+P2 framing)
       │           │                   │
       └─────────────────────┬─────────┘
                             v
                  ┌────────────────────┐
                  │ P4 (15-OPTION      │   ← P4 after P1+P2+P3
                  │  PROS/CONS TABLE)  │     (synthesizes ADOPTED
                  └─────────────────────┘     option's commitments +
                                              KILLs/DEFERs/REJECTs)
                                   
                  ┌────────────────────┐
                  │ P5 (FF LIST)       │  ← Independent throughout
                  └────────────────────┘
                                   
                  After P1+P2+P3+P4+P5 committed:
                                   
                  ┌────────────────────┐
                  │ P6 (RE-TEST)       │  ← Last; validates all
                  └────────────────────┘
```

- **P1, P2, P3** drafted in **PARALLEL**. Each addresses a different cluster.
- **P4 (15-option table)** drafted AFTER P1+P2+P3 (table cites ADOPTED option's commitments + KILL/DEFER/REJECT reasons that depend on the other pieces being stable).
- **P5 (FF LIST)** INDEPENDENT throughout.
- **P6 (RE-TEST)** LAST. Validates all.

---

## Step 7 — Self-Evaluation

### Minimum (3 dimensions)

| Dimension | Check | Verdict |
|---|---|---|
| **Independence** | Can each piece be worked on without the others existing? | PASS-WITH-NOTE — P1 cites P2 (defined interface); P3 cites P1+P2 (defined interfaces); P4 cites all; citations are interfaces, not hidden coupling. |
| **Completeness** | Do the pieces cover the inquiry's whole? | PASS — Sensemaking's 10 commitments covered: E1+E2+E3+E7+E8 → P1; E4+E5 → P2; E6+E9 → P3. User's explicit 15-option-table ask → P4. 6 FFs → P5. Re-test → P6. Cross-doc impact (E13) explicitly CONCLUDE-handled. |
| **Reassembly** | Pieces + interfaces = whole? | PASS — P1+P2+P3 → policy spec; P4 → user's explicit deliverable; P5+P6 → follow-ups + validation. Finding assembles. |

### Determination-mechanism piece check (refinement)

The Q-tree includes load-bearing concepts whose use depends on runtime determination:

1. **REVISIT's "≥3 prior cycles" filter** — routeman counts prior cycles at runtime. The DETERMINATION mechanism (where does the count come from?) is addressed in P1's verification criteria: "source = persistence model's per-Route status (per 24-00) OR inquiry-folder scan count (heuristic). Concrete count source deferred to SKILL.md authoring." Determination mechanism is acknowledged + deferred-explicitly. **PASS.**

2. **Confidence-label assignment (D1)** — routeman reads per-discipline N at runtime, maps to D1 enum. The DETERMINATION mechanism (per-discipline-N source) is addressed in P2 as E5 deferral with LOW-fallback. Determination acknowledged + deferred-with-fallback. **PASS.**

3. **Defensive-labeling vs reactive-labeling** — the defensive-labeling decision is a DESIGN-TIME commitment (not runtime), addressed in P3. No runtime determination. **PASS.**

All runtime determinations are addressed.

### Full (additional 4 dimensions)

| Dimension | Check | Verdict |
|---|---|---|
| **Tractability** | Each piece small enough for single focused pass? | PASS — All 6 pieces tractable. P4 (15-row table) is largest but routine. |
| **Interface clarity** | All cross-piece flows explicit? Hidden dependencies absent? | PASS — 6 interfaces explicit; assumptions-not-data check applied at 4 internal interfaces. |
| **Balance** | Complexity roughly proportional? | PASS-WITH-NOTE — P4 (15-option table) is largest by volume; P1, P2, P3 are medium; P5, P6 smaller. The size of P4 is appropriate (the user's explicit ask). |
| **Confidence** | Top-down + bottom-up agree? | HIGH — both passes identified the same five boundaries. |

### Failure-modes review

- **Premature decomposition:** No — Sensemaking SV6 is stable.
- **Wrong boundaries:** No — boundaries cut at moderate-or-weak coupling regions.
- **Hidden coupling:** Checked via assumptions-not-data; 4 identified + mitigated.
- **Missing pieces:** Determination-mechanism check PASS for all 3 runtime determinations.
- **Over-decomposition:** No — 6 pieces appropriate.
- **Ignoring dependencies:** No — dependency order specified (P1 || P2 || P3 → P4 → P6; P5 independent).
- **Imbalanced decomposition:** P4 largest by volume but role-appropriate.

---

## Handoff to Innovation

Innovation's task: generate candidate variations for each piece's deliverable shape.

For **P1 (POLICY MECHANISM SPEC):**
- Vary the REVISIT threshold (≥3 vs ≥5 prior cycles; calibratable note shape).
- Vary the natural-availability-filter wording (does the filter language sufficiently distinguish from gating to readers?).
- Vary REVISIT sub-action documentation placement (inline note vs separate sub-section).

For **P2 (CONFIDENCE LABELING SPEC):**
- Vary the D1 threshold values (20/30 vs 15/30 vs 25/30).
- Vary the per-discipline-N source candidate list (which candidates to surface for SKILL.md authoring).
- Vary how LOW-fallback is documented (single sentence vs section).

For **P3 (POLLUTION-TEST + DOWNSTREAM-AWARENESS):**
- Vary how the pollution-test finding is presented (compact paragraph vs detailed reasoning).
- Vary the downstream-consumer enumeration (4 consumers named explicitly vs general "downstream consumers").

For **P4 (15-OPTION TABLE):**
- Vary the table layout (single 15-row table vs grouped by verdict — Adopted / Killed / Deferred / Rejected).
- Vary the per-option pros/cons depth (terse 1-line vs detailed multi-sentence).

For **P5 (FF LIST):** mostly compositional.

For **P6 (RE-TEST):** vary verdict taxonomy granularity.

Innovation should aim for at least one variation per piece across (generic / focused / contrarian) + Inversion at meta-decision pieces.
