# Decomposition — adaptive guidance generation mechanism

## User Input

`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-24_01-00__adaptive_guidance_generation_mechanism/_branch.md`

---

## Step 1 — Coupling Topology

### Elements of the whole

Sensemaking's SV6 stabilized model produces these elements:

- **E1** — Stage 1 of M6 (deterministic per-movement-type anchor identification).
- **E2** — Stage 2 of M6 (LLM-judgment pointer-text + WHY-text refinement).
- **E3** — Multi-source per-movement-type priority (the source selection rule).
- **E4** — D1 per-movement-type input-to-pointer mapping (which sources for which types).
- **E5** — Audit substrate A1 (file-path-in-WHY-text format).
- **E6** — Audit substrate A3 (drop-with-reason enforcement at Stage 1).
- **E7** — Mode selection MS1 (design memo's convention verbatim).
- **E8** — Mode selection MS5 (per-mode override on multi-recalibration).
- **E9** — Graceful fallback chain W1 → W2 → W5 → `none` mode (with rationale).
- **E10** — LAYER-2 detectability statement (one substrate covers Prescriptive-Without-Cycle-Context + Rename-Renders-Itself-Cosmetic + filler-meta-reasoning).
- **E11** — Pointer style + per-mode budgets (inherited from design memo).
- **E12-E15** — 4 new FFs (Stage 1 parsing rules; Stage 2 LLM template; A2 structured-substructure elevation; MS3 autonomy-axis mode-selection).
- **E16-E17** — 2 deferred FFs (FF-7 /intuit M4 projection; FF-8 /reflect W4 integration shape).
- **E18** — Inherited commitments re-test (per Synthesis Trigger: 7 priors + canonical /navigation).
- **E19** — Cross-document impact notes (CONCLUDE-handled; out of scope).

### Pairwise coupling

| Pair | Coupling | Reason |
|---|---|---|
| E1 ↔ E2 | **STRONG** | Two stages of one mechanism; Stage 1's output IS Stage 2's input. |
| E1 ↔ E3 | **STRONG** | Stage 1 implements multi-source priority logic. |
| E1 ↔ E4 | **STRONG** | Stage 1 implements per-movement-type mapping. |
| E1 ↔ E9 | **STRONG** | Fallback chain logic is part of Stage 1's procedure. |
| E1 ↔ E5+E6 | **STRONG** | Audit substrate is ENFORCED at Stage 1 (drop-with-reason fires there). |
| E2 ↔ E5 | **STRONG** | Stage 2's WHY-text output must contain the A1 citation. |
| E2 ↔ E11 | **STRONG** | Stage 2 generates text respecting style + per-mode budget. |
| E7 ↔ E8 | **STRONG** | Mode-selection rules paired (convention + override). |
| E7+E8 ↔ E2 | **MODERATE** | Stage 2's pointer-count budget depends on mode. |
| E7+E8 ↔ E1 | **MODERATE** | Mode (esp. `none`) may signal Stage 1 to skip anchor identification. |
| E10 ↔ E5+E6 | **STRONG** | LAYER-2 detectability IS the implication of A1+A3 design; restating it makes the audit-design link explicit. |
| E12-E17 (FFs) ↔ (E1-E11) | **WEAK** | FFs are open follow-ups; informational. |
| E18 (re-test) ↔ (E1-E11) | **STRONG** | Re-test validates all commitments against priors. |
| E19 ↔ everything | **WEAK** | CONCLUDE-handled; out of scope. |

### Cluster identification

- **Cluster A1 — STAGE 1 (deterministic anchor identification):** E1 + E3 + E4 + E9. Tightly coupled around Stage 1's procedural specification.
- **Cluster A2 — STAGE 2 (LLM-judgment refinement):** E2 + E11. Stage 2's procedural specification + inherited style+budget.
- **Cluster A3 — AUDIT SUBSTRATE:** E5 + E6 + E10. A1 format + A3 enforcement + LAYER-2 detectability.
- **Cluster B — MODE-SELECTION:** E7 + E8. MS1+MS5 rules.
- **Satellite — FF LIST:** E12-E17. 4 new + 2 deferred.
- **Satellite — RE-TEST:** E18. Synthesis-trigger obligation.
- **Out-of-scope:** E19 (CONCLUDE).

### Coupling-map summary

```
                 [Cluster A1: STAGE 1]
                 E1 ─ E3 ─ E4 ─ E9
                      │
                      │ (STRONG: anchors flow to Stage 2)
                      v
                 [Cluster A2: STAGE 2]
                 E2 ─ E11

       [Cluster A3: AUDIT SUBSTRATE]
              E5 ─ E6 ─ E10
              │       │
              │       │ (STRONG: constrains Stage 1 + Stage 2)
              v       v
            A1   A1+A3
             enforced
       [Cluster B: MODE-SELECTION]
              E7 ─ E8
              │
              │ (MODERATE: feeds Stage 2 budget + Stage 1 effort)
              v
        [Stage 1 + Stage 2]

       [Satellite: RE-TEST]
              E18 (validates Cluster A1+A2+A3+B against priors)

       [Satellite: FF LIST]
              E12-E17 (open follow-ups)

       [Out-of-scope]
              E19 (CONCLUDE)
```

---

## Step 2 — Detect Boundaries (Top-Down)

Five natural boundaries emerge:

- **B1** — Between Cluster A1 (Stage 1) and Cluster A2 (Stage 2). Low-crossing: Stage 1's output (candidate WHY-anchors per Route + selected mode) flows to Stage 2 as a single interface.
- **B2** — Between Cluster A3 (audit substrate) and Cluster A1+A2 (the mechanism). The audit substrate CONSTRAINS the mechanism; the interface is "A1 format must appear in WHY text + A3 drop-with-reason must fire in Stage 1."
- **B3** — Between Cluster B (mode-selection) and Cluster A1+A2 (the mechanism). Mode-selection produces a mode value per Route; the mode flows to Stage 1 (effort allocation) + Stage 2 (budget).
- **B4** — Between (A1+A2+A3+B) and the FF LIST satellite. FFs are downstream consumers; not part of the mechanism's design.
- **B5** — Between everything and RE-TEST satellite + CONCLUDE out-of-scope.

Each boundary creates internally cohesive, externally sparse pieces.

---

## Step 3 — Validate Boundaries (Bottom-Up)

Irreducible atoms:

- **Atom-a** — A single per-movement-type rule (e.g., "DEEPEN ← W1 SURVIVE + W2 Key-Insights").
- **Atom-b** — A single Stage 2 generation step (e.g., "compose pointer text from anchor's key claim").
- **Atom-c** — A single audit rule (e.g., "WHY field must contain path-and-section reference").
- **Atom-d** — A single mode-selection rule (e.g., "HIGH-priority route → compact").
- **Atom-e** — A single FF entry.
- **Atom-f** — A single prior-commitment verdict.

Clustering check:
- Atoms-a → Cluster A1. ✓
- Atoms-b → Cluster A2. ✓
- Atoms-c → Cluster A3. ✓
- Atoms-d → Cluster B. ✓
- Atoms-e → FF LIST. ✓
- Atoms-f → RE-TEST. ✓

**No atoms split across boundaries; no atoms forcibly grouped. Boundaries CONFIRMED.**

**Confidence:** HIGH — top-down + bottom-up agree.

---

## Step 4 — Question Tree

### P1 — STAGE 1 MECHANISM SPEC (deterministic anchor identification)

**Question:** "What are the procedural steps of routeman's Stage 1 — including per-movement-type mapping (D1), multi-source priority chain, graceful fallback (W1→W2→W5→`none`), and the output schema (candidate WHY-anchors per Route)?"

**Verification criteria:**
- [ ] Stage 1 procedural steps named in order: receive Route + selected mode → look up per-movement-type rule → iterate sources in priority order → if anchor found, emit (anchor, source-path, source-section); if no anchor found at any priority level, drop-with-reason-and-emit-`none`-mode.
- [ ] Per-movement-type mapping table covers DEEPEN, REFINE, PURSUE-SEED, INVESTIGATE-FRONTIER, REVISIT (RESURRECT/INVALIDATE/REVERT), and a default rule for other types (WIDEN, DEVELOP, DIFFERENT-APPROACH, DIAGNOSE, etc.).
- [ ] Multi-source priority chain explicit per type (primary + fallback sources).
- [ ] Graceful fallback chain explicit: W1 (critique.md) → W2 (sensemaking.md) → W5 (meta-reasoning field on the Route) → `none` mode with rationale logged.
- [ ] Output schema specified: list of `{movement_type, anchor_text_excerpt, source_path, source_section}` records per Route, plus Route's selected mode.
- [ ] Drop-with-reason enforcement: if all priority sources fail, log drop-reason + emit `none` mode for the Route.

### P2 — STAGE 2 MECHANISM SPEC (LLM-judgment refinement)

**Question:** "What are the procedural steps of routeman's Stage 2 — including pointer-text generation from anchors, WHY-text generation (preserving A1 citation), style enforcement (design-memo tone), and budget enforcement (per-mode pointer counts)?"

**Verification criteria:**
- [ ] Stage 2 procedural steps named: receive Stage 1's anchors + mode → for each anchor (up to mode's budget), compose pointer text (short imperative) + WHY text (conjunctive form containing A1 citation) → emit as Guidance Pointer.
- [ ] LLM template structure described (high-level shape; concrete prompt deferred to NEW-FF-2): "For each anchor, generate a 1-line pointer in style 'Check/Try/Watch [object]' + WHY in style 'bc [reason] per [source-path] §[section]'."
- [ ] Style enforcement: short imperative pointer (1 sentence); conjunctive WHY ("bc..." shorthand) per design memo.
- [ ] Per-mode budget enforced: `none`=0; `compact`=1-2; `full`=3-5; `expand-on-selection`=1 statement of what-would-be-expanded.
- [ ] Output schema: Guidance Pointer record `{pointer_text, why_text_with_citation}` per Route, in count respecting mode budget.
- [ ] Drop-with-reason at Stage 2: if Stage 1 emitted N>budget anchors, Stage 2 drops surplus and logs which were dropped + why (e.g., "lowest priority"; "duplicate anchor").

### P3 — AUDIT SUBSTRATE SPEC (A1 + A3 + LAYER-2 detectability)

**Question:** "What is the audit substrate specification — A1 (file-path-in-WHY-text format), A3 (drop-with-reason enforcement at Stage 1), and the explicit LAYER-2 detectability statement covering Prescriptive-Without-Cycle-Context + Rename-Renders-Itself-Cosmetic + filler-meta-reasoning all with one substrate?"

**Verification criteria:**
- [ ] A1 format specified: WHY text must contain a parseable file-path-and-section reference (e.g., `bc per devdocs/inquiries/X/critique.md §Phase 3 Q5 SURVIVE verdict, real-usage testing is the bottleneck`).
- [ ] A3 enforcement specified: Stage 1 drops Route's pointers with reason when no resolvable anchor found in any priority source; Stage 2 drops surplus anchors when budget exceeded with reason; both drops logged to routeman's telemetry block.
- [ ] LAYER-2 detectability statement: one audit (A1+A3) covers all three modes:
  - **Prescriptive-Without-Cycle-Context** detected when WHY fails to contain parseable file-path reference OR reference doesn't resolve.
  - **Rename-Renders-Itself-Cosmetic** detected when ≥50% of Routes have empty Guidance Pointers OR all WHYs lack A1 citations.
  - **filler-meta-reasoning** detected when meta-reasoning field content fails to anchor downstream guidance (no W5 anchors successfully feed Stage 1 across multiple invocations).
- [ ] A2 (structured substructure) elevation deferred to NEW-FF-3 (SKILL.md authoring decision).
- [ ] A4 (type-coherence check) elevation deferred to NEW-FF-3.

### P4 — MODE-SELECTION SPEC (MS1 + MS5)

**Question:** "What is the mode-selection specification — design memo's MS1 convention verbatim + MS5 per-mode override on multi-recalibration?"

**Verification criteria:**
- [ ] MS1 convention cited verbatim from design memo: HIGH-priority / risky / blocked / near-action → `compact` or `full`; MEDIUM open/deferred → `compact`; LOW or deferred-for-memory → `none` or `compact`; selected route → `full` or `expand-on-selection`.
- [ ] MS5 override rule: when a Route's `meta_reasoning_revision_history` shows multi-recalibration (≥2 prior recalibrations per the persistence inquiry's schema), override the MS1-selected mode to `expand-on-selection` (defer detailed guidance to selection moment).
- [ ] MS2 (complexity-of-derivation axis) deferred-elevation noted as NEW-FF-4 candidate.
- [ ] MS3 (autonomy-level axis) deferred-elevation noted as NEW-FF-4 candidate.
- [ ] MS4 (selection-probability axis) deferred-elevation noted as NEW-FF-4 candidate.
- [ ] Mode-selection output: selected mode value per Route, flows to Stage 1 (effort allocation) + Stage 2 (budget).

### P5 — RESIDUAL OPEN QUESTIONS (FF LIST)

**Question:** "Which 4 new FFs + 2 deferred FFs remain, and what is each FF's scope + downstream consumer + revival trigger?"

**Verification criteria:**
- [ ] NEW-FF-1 (Stage 1 parsing rules): downstream consumer = SKILL.md authoring; revival trigger = when SKILL.md is written.
- [ ] NEW-FF-2 (Stage 2 LLM template): downstream consumer = SKILL.md authoring; revival trigger = same.
- [ ] NEW-FF-3 (A2 structured substructure elevation; A4 type-coherence check elevation): research-frontier-adjacent; revival trigger = when audit infrastructure needs machine-parseable input OR pointer-type/anchor-type misalignment becomes observable in practice.
- [ ] NEW-FF-4 (MS3 autonomy-axis mode-selection; MS2 complexity-axis; MS4 selection-probability): revival trigger = when mode-selection extension becomes load-bearing.
- [ ] FF-7 (/intuit M4 projection): revival = when /intuit Phase β ships.
- [ ] FF-8 (/reflect W4 integration shape): revival = when /reflect coupling spec lands.

### P6 — INHERITED COMMITMENTS RE-TEST

**Question:** "Does each commitment from the 7 priors + canonical /navigation survive this inquiry's adoption of M6 two-stage + multi-source + A1+A3 + MS1+MS5 + graceful-fallback?"

**Verification criteria:**
- [ ] Each prior enumerated with its load-bearing commitments.
- [ ] Each commitment marked PRESERVED / EXTENDED / RESOLVED-WITH-DESIGN / INHERITED-WITHOUT-RE-TEST with reason.
- [ ] Design memo's adaptive-guidance feature + LAYER-2 mode + mode-allocation convention all PRESERVED (mechanism implements rather than redefines).
- [ ] Frontier-questions finding's Q3 marked RESOLVED-WITH-DESIGN.
- [ ] 16-31's file-scanning architecture PRESERVED (mechanism is file-scan-bound).
- [ ] 18-58's meta-reasoning field + LLM-operational-design principle PRESERVED + APPLIED (M3 absorbed into W5; design uses user-language alignment).
- [ ] 24-00's hybrid placement + 24-40's autonomy register PRESERVED + INTEGRATED (no new sidecar; mechanism reads existing files).
- [ ] No prior commitment silently dropped.

### Stopping criteria check

- P1: tractable (procedural steps + mapping table + fallback + output schema).
- P2: tractable (procedural steps + LLM template shape + style/budget + output schema).
- P3: tractable (A1 + A3 + LAYER-2 detectability + deferred-elevation notes).
- P4: tractable (MS1 verbatim + MS5 override + deferred-elevation notes).
- P5: tractable (6 FFs × short entry).
- P6: tractable (7 priors + 1 spec × verdicts).

No piece requires sub-decomposition. **TRACTABLE for all six.**

---

## Step 5 — Interfaces

| From | To | What flows | Direction | Notes |
|---|---|---|---|---|
| P4 (mode-selection) | P1 (Stage 1) | Selected mode per Route → Stage 1's effort allocation | one-way | Stage 1 reads mode; for `none` mode, Stage 1 may skip anchor identification entirely. |
| P4 (mode-selection) | P2 (Stage 2) | Selected mode per Route → Stage 2's pointer-count budget | one-way | Budget per mode is the constraint. |
| P3 (audit substrate) | P1 (Stage 1) | A3 enforcement rule constrains Stage 1's drop-with-reason behavior | one-way (constraint) | Stage 1 must apply A3. |
| P3 (audit substrate) | P2 (Stage 2) | A1 format rule constrains Stage 2's WHY-text generation | one-way (constraint) | Every WHY must contain A1 citation. |
| P1 (Stage 1) | P2 (Stage 2) | Stage 1's output (candidate anchors per Route + selected mode) flows to Stage 2 | one-way | The mechanism's internal stage transition. |
| P6 (re-test) | P1+P2+P3+P4+P5 | Validation against priors | one-way (read-only) | Re-test reads all commitments + priors. |
| Sensemaking SV6 | All pieces | Stabilized model | one-way | All pieces build on SV6. |

### Assumptions-not-data check

- **P1 → P2 interface:** P1's output schema (anchor records) assumed stable. Hidden coupling: if P1's schema shifts, P2 must update. Mitigation: name fields explicitly in P1's verification criteria.
- **P3 → P1 + P2 interfaces:** A1 format assumed parseable. Hidden coupling: if WHY text style drifts (e.g., LLM uses different conjunctive form), A1 parsing fails. Mitigation: P2's style enforcement (short imperative + conjunctive WHY) keeps text consistent.
- **P4 → P1 + P2 interfaces:** mode value assumed enum-bounded (one of `none`/`compact`/`full`/`expand-on-selection`). Mitigation: enum specified in design memo + inherited.
- **P5 (FF LIST) → priors:** FFs assume the priors' commitments are stable. Mitigation: P6 re-test verifies.

---

## Step 6 — Dependency Order

```
┌─────────────────────────────────────────┐
│  Sensemaking SV6 (input to all pieces)  │
└─────────────────┬───────────────────────┘
                  │
       ┌──────────┼──────────┐
       v          v          v
┌──────────┐ ┌──────────┐ ┌──────────┐
│ P3 (AUDIT│ │ P4 (MODE-│ │ P1 (STAGE│  ← P3, P4, P1 drafted in parallel
│ SUBSTRATE│ │ SELECTION│ │   1)     │     P3 constrains P1; P4 feeds P1
│  A1+A3 + │ │   MS1+   │ │  (uses P3│
│ LAYER-2  │ │   MS5)   │ │  + P4)   │
│ detect.) │ │          │ │          │
└────┬─────┘ └────┬─────┘ └────┬─────┘
     │            │            │
     │            │            │ (Stage 1's output flows to Stage 2)
     │            │            v
     │            │       ┌──────────┐
     │            │       │ P2 (STAGE│  ← P2 last; consumes P1's output
     │            │       │   2)     │     + P3 constraint + P4 budget
     │            │       │  (LLM    │
     │            │       │ refine.) │
     │            │       └──────────┘
     │            │            
     └────────────┴────────────┐
                               │
                               v
                       ┌─────────────────┐
                       │ P6 (RE-TEST)    │  ← Validates all
                       └─────────────────┘

       ┌──────────┐
       │ P5 (FF   │  ← Independent throughout
       │  LIST)   │
       └──────────┘
```

- **P3 + P4:** can be drafted CONCURRENTLY. P3 specifies the audit substrate (constraints); P4 specifies the mode-selection (inputs to Stage 1 and Stage 2).
- **P1 (Stage 1):** drafted after P3 + P4 (uses their outputs as inputs).
- **P2 (Stage 2):** drafted after P1 (consumes P1's output).
- **P6 (re-test):** LAST. Validates all pieces against priors.
- **P5 (FF LIST):** INDEPENDENT throughout.

---

## Step 7 — Self-Evaluation

### Minimum (3 dimensions)

| Dimension | Check | Verdict |
|---|---|---|
| **Independence** | Can each piece be worked on without the others existing? | PASS-WITH-NOTE — P1 references P3 + P4 (defined interfaces); P2 references P1 + P3 + P4 (defined interfaces); citations are interfaces, not hidden coupling. |
| **Completeness** | Do the pieces cover the inquiry's whole? | PASS — 8 Sensemaking commitments covered: E1→P1; E2→P2; E3+E4+E9→P1; E5+E6+E10→P3; E7+E8→P4; E11→P2 style. 6 FFs covered (P5). Re-test (P6). Cross-doc impact (E19) explicitly CONCLUDE-handled. |
| **Reassembly** | Pieces + interfaces = whole? | PASS — given P1-P6 + the defined interfaces, the finding assembles: P3+P4 commitments → P1 procedural steps → P2 refinement → mechanism complete; P5 + P6 provide follow-ups + validation. |

### Determination-mechanism piece check (refinement)

The Q-tree includes load-bearing concepts whose use depends on runtime determination:

1. **Fallback chain (W1→W2→W5→`none`)** — Stage 1 determines at runtime which W is available per Route. Addressed in P1's procedural steps + drop-with-reason rule.
2. **MS5 override** — Stage 1 (or mode-selection step) checks `meta_reasoning_revision_history` per Route at runtime. Addressed in P4's MS5 rule.
3. **A3 drop-with-reason** — Stage 1 determines at runtime whether anchor resolves. Addressed in P3's A3 enforcement.

All runtime determinations are addressed in the relevant pieces. **PASS.**

### Full (additional 4 dimensions)

| Dimension | Check | Verdict |
|---|---|---|
| **Tractability** | Each piece small enough for single focused pass? | PASS — All six pieces tractable; no sub-decomposition needed. |
| **Interface clarity** | All cross-piece flows explicit? Hidden dependencies absent? | PASS — 7 interfaces explicit; assumptions-not-data check applied at 4 internal interfaces. |
| **Balance** | Complexity roughly proportional? | PASS-WITH-NOTE — P1 (Stage 1) is the largest (4 sub-elements: steps + mapping + fallback + schema); P3 + P4 are medium; P5 + P2 + P6 are smaller. Distribution is appropriate; P1's size matches its role as the mechanism's central piece. |
| **Confidence** | Top-down + bottom-up agree? | HIGH — both passes identified the same five boundaries; no atoms split or forcibly grouped. |

### Failure-modes review

- **Premature decomposition:** No — Sensemaking SV6 is stable.
- **Wrong boundaries:** No — boundaries cut at moderate-or-weak coupling.
- **Hidden coupling:** Checked via assumptions-not-data; 4 identified + mitigated.
- **Missing pieces:** Determination-mechanism check PASS (fallback + MS5 + A3 all addressed).
- **Over-decomposition:** No — 6 pieces appropriate for 8 commitments + 6 FFs + re-test.
- **Ignoring dependencies:** No — dependency order specified (P3+P4+P1 parallel → P2 → P6; P5 independent).
- **Imbalanced decomposition:** No — balance check passed.

---

## Handoff to Innovation

Innovation's task: generate candidate variations for each piece's deliverable shape.

For **P1 (STAGE 1 MECHANISM SPEC):**
- Vary the per-movement-type mapping table's granularity (one rule per type vs sub-rules per type+priority).
- Vary the fallback chain's stopping condition (silent fallback vs annotated fallback).
- Vary Stage 1's output schema (minimal vs rich; with metadata for Stage 2 vs without).

For **P2 (STAGE 2 MECHANISM SPEC):**
- Vary the LLM template's shape (single-prompt-per-Route vs per-anchor; with examples vs without).
- Vary the style enforcement strictness (strict template vs guideline).
- Vary the drop-surplus rule (lowest-priority-first vs duplicate-detection-first).

For **P3 (AUDIT SUBSTRATE SPEC):**
- Vary the A1 format (file:line vs file:section vs both).
- Vary the A3 drop-reason granularity (compact vs detailed).
- Vary the LAYER-2 detectability statement's specificity per mode.

For **P4 (MODE-SELECTION SPEC):**
- Vary the MS5 override threshold (≥2 recalibrations vs ≥3).
- Vary how mode-selection presents in routeman's flow (separate pre-Stage 1 step vs integrated).

For **P5 (FF LIST):** mostly compositional; vary grouping.

For **P6 (RE-TEST):** vary verdict taxonomy granularity.

Innovation should aim for at least one variation per piece across (generic / focused / contrarian) and run Assembly Check across surviving candidates.
