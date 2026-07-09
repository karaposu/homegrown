## User Input

devdocs/inquiries/2026-07-08_21-50__articulate_warm_benefit_does_it_need_to_retrigger_surfacing/_branch.md — (DESIGN dive, Decomposition = organize SV6 into a buildable design finding; WHOLE = articulate_warm reframed as a surfacing-loop controller, re-surface promoted optional→core, the loop-termination criterion specified, HA sized honestly, canon doc §4↔§7 resolved; application user-gated. Pieces P1-P8; load-bearing cut UNDERSTANDING│PRESCRIPTION; hidden-coupling risk = CAVING. Full spec in the instruction.)

---

# Decomposition — the articulate_warm design finding

## Step 1 — Coupling topology (perceived)

The whole is a **design finding**, and its pieces split at one dominant seam: **what is settled by the evidence (understanding)** vs **what we prescribe forward (design)**. Within understanding, the pieces chain tightly (P1 causes P2 causes the P3 framing); within prescription, one piece is the real new content (P4) and the others package it (P5/P6).

```
                 WHOLE: the articulate_warm design finding
                                   │
        ┌──────────── LOAD-BEARING CUT ────────────┐
        │                                          │
  CLUSTER A — UNDERSTANDING              CLUSTER B — PRESCRIPTION
  (settled by spec + the decoupling)    (the forward build)
        │                                          │
  P1 the decoupling ──causes──▶ P2 the real job    P4 termination criterion ★new
        │                          │               ┌────────┴────────┐
        └──────────▶ P3 mechanism-is-reuse         P5 HA sizing   P6 canon-doc edits
                                   │                (honest)       (packaging)
                                   ▼
                          P7 THE GATE (prosecutes A + B)
                                   ▼
                          P8 RECORD (finding)
```

**Coupling strengths.** P1→P2 tight (the real-job *follows from* the decoupling). P1→P3 medium (reuse is independent evidence but framed by the decoupling). P4 loosely coupled to P5/P6 (the criterion is content; sizing + doc-edits are how it lands). P7 couples to everything (the gate). **The cut is where coupling is weakest: understanding is settled by the spec text + the decoupling logic; prescription is a set of forward choices** — you can prosecute the understanding without touching the doc edits.

### ★ Hidden-coupling risk — CAVING-to-the-user
The dominant back-edge: the pull to **over-agree** with the user's "not much help / maybe useless" and either (i) drop the weak-but-real commit-value (P5), or (ii) over-claim the redesign (inflate "promote to core" into "the warm pass was pointless before"). This couples P5/P6 back into a distorted P1-P3. **Triple-controlled:** (i) the P1-P3│P4-P6 cut isolates the settled decoupling from the sizing choice; (ii) **anti-sycophancy-both-ways is an explicit P7 gate item** (prosecute BOTH "cave to not-much-help" AND "deflate the promote-to-core"); (iii) the **self-reference datum** (this dive's cold-articulate + warm-operator) keeps the re-anchor value *evidenced*, not asserted — so the promote-to-core rests on a live fact, not on pleasing the user. Secondary risk — **self-reference** (harness-on-harness): controlled by external grounding (spec text + the live datum), already a P7 item.

## Step 2-4 — Boundaries as a question tree (with verification)

**CLUSTER A — UNDERSTANDING**

- **P1 — The decoupling (causal core).** *Do articulate_warm's two products have different dependencies, such that one is inert without re-surface?*
  - [ ] both products named with their distinct dependencies (re-anchor needs NEW material; re-rephrase rides on PRESENT material)
  - [ ] "re-anchor is inert without re-surface" stated as the load-bearing mechanism (surfacing draws from a *given* territory)
  - [ ] cited to surfacing §1.1 (draw-from-given) + §5.2 (workspace session-local)
- **P2 — The real job.** *Is articulate_warm a surfacing-loop controller, not a re-phraser?*
  - [ ] job restated as loop-control (re-anchor→re-surface→iterate to a fixpoint)
  - [ ] the rephrase = terminal byproduct emitted once the anchor is stable
  - [ ] shown to FOLLOW from P1 (not an independent claim)
- **P3 — Mechanism-is-reuse.** *Is re-triggering surfacing existing machinery, not new?*
  - [ ] reuse stated with exact anchors: surfacing §3.6 (`refined-sub-purpose`, incremental) + §3.7 (runner owns re-invocation) + both passes emit MQ2
  - [ ] warm-MQ2→surfacing-2 shown identical to cold-MQ2→surfacing-1
  - [ ] the ONLY new element flagged = the termination criterion (→ P4)

**CLUSTER B — PRESCRIPTION**

- **P4 — The termination criterion ★ (the genuine new spec content).** *When does the re-anchor→re-surface loop stop?*
  - [ ] stabilization rule: stop when warm MQ2's context-need is unchanged / verdict=no (an EXISTING MQ2 field)
  - [ ] round-cap backstop + oscillation guard named
  - [ ] typical 0–1 re-surfaces stated (no drift → verdict=no immediately)
  - [ ] flagged as the one genuinely-new spec content the design adds
- **P5 — The HA sizing (honest both-ways).** *How big is the terminal rephrase's standalone value?*
  - [ ] weak-in-one-warm-session (LLM holds the workspace) AND real-across-sessions/under-autonomy both stated
  - [ ] autonomy-scaling tied to §5.2 (workspace lost at session-end)
  - [ ] "articulate_warm is useless without re-surface" explicitly rejected as overshoot
- **P6 — The canon-doc resolution (packaging).** *What edits land in `docs/how_articulate_via_context_should_be.md`?*
  - [ ] the §4 "[c] optional" vs §7 "the general case" contradiction named
  - [ ] the promote-to-core edit specified (reframe §4: warm pass = loop controller, re-surface core)
  - [ ] a new termination-criterion section flagged
  - [ ] application user-gated (+ note naming pending articulate_cold/warm)

**GATE + RECORD**

- **P7 — The gate (Critique).** *Which load-bearing claims survive prosecution?*
  - [ ] re-anchor-really-inert-without-re-surface prosecuted (or can the LLM re-anchor on partial/adjacent in-context material?)
  - [ ] mechanism-really-reuse prosecuted (does runner-owned re-invocation hide new orchestration?)
  - [ ] over-eager/oscillating-loop risk prosecuted (does MQ2-stabilization + cap actually terminate?)
  - [ ] promote-to-core-vs-keep-conditional prosecuted (does the weak-but-real commit-value justify conditional?)
  - [ ] anti-sycophancy BOTH ways + self-reference external grounding + second-harvest backstop
- **P8 — Record (CONCLUDE).** *Is the finding self-contained and actionable?*
  - [ ] self-contained (decoupling → real-job → reuse → termination → sizing → doc edits)
  - [ ] Next Actions user-gated (doc edits + termination criterion; naming pending)
  - [ ] Inherited Commitments Re-test present (the §7 "optional re-surface" commitment → resolved to core)
  - [ ] onward pointers + possible seed

## Step 5 — Interface map (what flows piece→piece)

| From → To | Flows |
|---|---|
| P1 → P2 | the different-dependencies fact → "the load-bearing half needs re-surface" → the loop-controller reframe |
| P1 → P3 | "re-anchor needs new material" → "new material enters only via (re-)surface" → the reuse question |
| P3 → P4 | "mechanism exists; only termination is missing" → the termination criterion is the deliverable |
| P4 → P6 | the criterion → a new doc section |
| P5 → P6 | the honest sizing → how §4 is reframed (core, but the commit-value is not oversold) |
| {P1-P6} → P7 | all load-bearing claims → the gate |
| P7 → P8 | survivors + verdicts → the finding |

**Interface integrity:** P2 and P3 both consume P1 but produce different things (a reframe vs a reuse-claim) — no redundancy. P4 is the sole producer of new content; P5/P6 consume and package it. Clean.

## Step 6 — Dependency order

**P1 → P2 → P3 → P4 → {P5 ∥ P6} → P7 → P8.** P5 and P6 are parallel (sizing and doc-edits are independent given P4). P7 waits on all. Matches the pipeline: Sensemaking settled P1-P3; Innovation designs P4-P6; Critique is P7; CONCLUDE is P8.

## Step 7 — Self-evaluation (7 dimensions)

1. **Completeness:** covers the causal core (P1), the reframe (P2), the reuse (P3), the new content (P4), the honesty (P5), the landing (P6), the gate (P7), the record (P8). No orphan concern.
2. **Balance:** P1-P4 are the substance; P5/P6 lighter (sizing + packaging); P7/P8 procedural — proportionate, not imbalanced.
3. **Independence at the cut:** understanding (P1-P3) can be prosecuted without the doc edits (P6); the cut holds.
4. **Coupling honesty:** the CAVING back-edge is named + triple-controlled; the self-reference risk is named + externally grounded.
5. **Interface clarity:** each flow is a specific claim/artifact (table above), not vague "informs."
6. **Determination check:** the pieces are questions with verification checkboxes, not pre-written answers — P7 can still kill P4 (e.g., if the loop doesn't terminate) or downgrade "promote to core."
7. **Right grain:** 8 pieces for a design finding — not over-decomposed (no piece splits further without losing meaning), not under (the decoupling and the termination criterion are correctly separated — they're different kinds of claim: a settled fact vs a new prescription).

**PASS ×3** (boundaries clean · determination preserved · balance/interface sound). The load-bearing cut (UNDERSTANDING│PRESCRIPTION) is where coupling is genuinely weakest; the hidden CAVING coupling is surfaced and triple-controlled. **Proceed to Innovation** (design P4 concretely — the termination criterion + the loop shape; and P6 — the exact canon-doc edits — with anti-sycophancy live).
