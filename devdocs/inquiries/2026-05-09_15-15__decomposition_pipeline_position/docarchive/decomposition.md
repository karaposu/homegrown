# Decomposition: Decomposition Pipeline Position

## User Input

devdocs/inquiries/2026-05-09_15-15__decomposition_pipeline_position/_branch.md

```
Maybe decomposition shouldnt the after sensemaking? maybe decomposition should be done at the very beginnign in order to decompose the input query into pieces? so each piece can have their own loop?

Or maybe it shuld run after critique to produce subpaths of what can be run next with MVL ?

My point is this , we included decomposition to mvl+ but maybe that was wrong decision? and it belongs to somewhere else or different kind of logic?

Or this is wrong? and actually decomposition helped a lot of inquiries samples to be better?
```

The post-Sensemaking actionable space (named in SV6) has THREE sub-questions because "decomposition" names three distinct cognitive operations. Within MVL+, only KEEP-CURRENT and D-CONDITIONAL remain viable. D-FIRST is multi-head meta-loop (deferred direction; AFFIRM in finding). D-AFTER-C is /navigation (existing; ACKNOWLEDGE in finding). A meta-action option (separate inquiry on Core admission rule) is also named.

---

## Step 1 — Coupling Topology

### Elements in the actionable space

- **e1**: Intra-MVL+ choice — KEEP-CURRENT vs D-CONDITIONAL (the load-bearing decision)
- **e2**: If D-CONDITIONAL, runtime trigger design (what signal fires the skip; where does it fire; what happens on skip)
- **e3**: If D-CONDITIONAL, spec change shape (Form 1 standalone refinement / Form 2 scattered / Form 3 absorbed into existing step) — per `enes/step_refinement.md`
- **e4**: D-FIRST direction affirmation — what the finding says about multi-head meta-loop being the project's deferred end-goal direction
- **e5**: /navigation acknowledgment — what the finding says about D-AFTER-C ≈ /navigation
- **e6**: Meta-action option — would a separate inquiry on the discipline taxonomy's "pipeline-sequential" reading (strict vs flexible) help? When? What's the seed?
- **e7**: Verdict communication artifact — what does the user read to decide? What's the artifact shape?

### Coupling matrix (sketch)

| | e1 | e2 | e3 | e4 | e5 | e6 | e7 |
|---|---|---|---|---|---|---|---|
| e1 | — | high (gated) | high (gated) | weak | weak | mod (alt) | mod (synthesis) |
| e2 | | — | high | weak | weak | weak | weak |
| e3 | | | — | weak | weak | weak | weak |
| e4 | | | | — | mod (similar shape) | weak | mod (synthesis) |
| e5 | | | | | — | weak | mod (synthesis) |
| e6 | | | | | | — | mod (synthesis) |
| e7 | | | | | | | — |

**Reading the matrix:**
- {e1, e2, e3} have high internal coupling — e2 and e3 only matter if D-CONDITIONAL (e1's choice), and e2/e3 co-design (trigger and spec form move together).
- {e4, e5} have moderate coupling — both are short documentation-only architectural acknowledgments; similar shape; could share artifact treatment.
- e6 is a meta-alternative to e1 — if user chooses e6, e1 is paused (deferred to the separate inquiry).
- e7 is the synthesis sink — every other element flows into it.

### Clusters

- **Cluster A**: {e1, e2, e3} — intra-MVL+ design (with internal sub-structure when D-CONDITIONAL is the surviving option).
- **Cluster B**: {e4, e5} — architectural acknowledgments (D-FIRST direction + /navigation mapping).
- **Cluster C**: {e6} — meta-action option.
- **Cluster D**: {e7} — verdict communication artifact (synthesis sink).

---

## Step 2 — Boundaries (Top-Down)

Cut at four cluster boundaries. Major clusters:
- A {intra-MVL+ design}
- B {architectural acknowledgments}
- C {meta-action option}
- D {verdict artifact, synthesis sink}

Within Cluster A, two natural sub-pieces:
- A.1: KEEP-CURRENT variants (design space if KEEP-CURRENT is chosen)
- A.2: D-CONDITIONAL design (with internal sub-axes: trigger / spec form / maintenance side)

Cluster A is therefore Layer-1 (has nested sub-structure). Clusters B, C, D are Layer-0 (single-question pieces).

---

## Step 3 — Validate Boundaries (Bottom-Up Check)

### Atoms

Within Cluster A:
- "Pure KEEP-CURRENT (zero spec change)" → atom; A.1
- "KEEP-CURRENT + ride on prior audit's Assembly A (Q1.1-f honest value tag etc.)" → atom; A.1
- "D-CONDITIONAL with explicit skip-trigger" → atom; A.2
- "Skip-trigger: signal-based on coupling-density" → atom; A.2 (trigger sub-axis)
- "Skip-trigger: signal-based on S's SV6 already-named partition" → atom; A.2 (trigger sub-axis)
- "Skip-trigger: value-tag based (post-hoc D rates own value LOW means future similar inquiries skip)" → atom; A.2 (trigger sub-axis)
- "Spec form: Form 1 standalone refinement note at Step 1" → atom; A.2 (spec form sub-axis)
- "Spec form: Form 3 absorbed into Step 0 (Pre-flight)" → atom; A.2 (spec form sub-axis)

Within Cluster B:
- "Affirm D-FIRST as deferred direction in finding" → atom; B (acknowledgment 1)
- "Acknowledge /navigation as the D-AFTER-C answer in finding" → atom; B (acknowledgment 2)

Within Cluster C:
- "Open separate inquiry on Core admission rule's 'pipeline-sequential' reading" → atom; C
- "What's that inquiry's seed input from this audit + this inquiry" → atom; C
- "What's the trigger for opening it" → atom; C

Within Cluster D:
- "Artifact shape (single doc / table / paragraph)" → atom; D
- "Decision-action mapping" → atom; D

### Cross-check

Atoms cluster cleanly with Step 2 boundaries. No atom forced across; no atoms grouped that should be separated.

### Confidence

**HIGH** — top-down and bottom-up agree. Q1 has two sub-pieces with internal sub-axes inside Q1.2; Q2/Q3/Q4 are Layer-0.

---

## Step 4 — Question Tree

### Q1 — Intra-MVL+ design proposal

**Question:** What's the proposed shape for /decompose's role inside the MVL+ pipeline — KEEP-CURRENT (with optional refinements) or D-CONDITIONAL (with runtime skip trigger + spec change shape)?

**Sub-pieces:**

#### Q1.1 — KEEP-CURRENT variants

**Question:** If KEEP-CURRENT survives, what variants are worth proposing — pure status quo (zero spec change) or status-quo-plus-audit-Assembly-A (the prior audit's recommended within-D-spec refinements)?

**Verification:**
- [ ] At least 2 KEEP-CURRENT variants named (pure status quo + at least one refinement variant)
- [ ] Each variant has a one-sentence cost statement (zero / low)
- [ ] Each variant has phase-fit tag (`desc-machinery` / `desc-protocol` / `decision`)

#### Q1.2 — D-CONDITIONAL design

**Question:** If D-CONDITIONAL is the surviving option, what's the runtime trigger design, the spec change shape (per `enes/step_refinement.md`'s Three Forms), and the maintenance-side hooks?

**Sub-axes:**

- *Trigger axis:* What signal determines whether D should run on a given inquiry? Candidates include coupling-density-pre-perception (does S's SV6 already name distinct meaning-nodes that could be coupling-perceived? if not, skip); Layer-0-only signal (carry over from prior audit's Q1.2-a); honest-value-tag-history (if last N similar-shape inquiries scored LOW, skip); user-override (always-runnable manual flag).
- *Spec-form axis:* Form 1 (standalone refinement note at Step 1 of /decompose, "skip if X"), Form 2 (scattered guidance across Steps 1, 2, 7), Form 3 (absorbed into a Pre-flight step), or a new Step 0 entirely.
- *Maintenance-side axis:* where does the trigger fire — at /MVL+ runner level (skip the discipline call entirely) or at /decompose's Step 1 (run discipline but produce a "skipped, with reason" output)?

**Verification:**
- [ ] At least 2 trigger options named, each concrete enough for innovation to compare
- [ ] At least 2 spec-form options named, each tied to the Three Forms framework
- [ ] At least 2 maintenance-side options named (runner-level vs Step-1-level)
- [ ] Coupling between sub-axes flagged (e.g., "Form 3 only makes sense with runner-level trigger")
- [ ] Each option phase-fit-tagged

**Top-level Q1 verification:**
- [ ] Q1.1 and Q1.2 each produce ≥2 viable proposals
- [ ] Q1's chosen proposals can be compared on cost, phase-fit, audit-evidence-respect

### Q2 — Architectural-acknowledgment language

**Question:** What does the finding say about (a) D-FIRST as the project's deferred end-goal direction (multi-head meta-loop) and (b) /navigation already covering D-AFTER-C — such that the user reads a clear, non-redundant statement that doesn't propose new architectural moves but corrects the framing?

**Verification:**
- [ ] One concise statement for (a) D-FIRST as deferred direction, naming the existing prerequisite (`enes/loop_desing_ideas/meta_loop.md`'s sequential-meta-loop maturity gate)
- [ ] One concise statement for (b) /navigation as the operation behind D-AFTER-C, naming the existing spec (`/Users/ns/.claude/skills/navigation/references/navigation.md`)
- [ ] Statements do NOT propose new architectural changes (acknowledgment-only; corrective-only)
- [ ] Statements respect that this inquiry's verdict scope is meta-design corpus + caveat (don't overreach into "all inquiries")

### Q3 — Meta-action option (separate inquiry seed)

**Question:** If the user wants to defer the Q1 choice (KEEP-CURRENT vs D-CONDITIONAL) by opening a broader inquiry on the discipline taxonomy's "pipeline-sequential" reading (strict vs flexible — does it mean "always runs" or "runs sequentially when it runs"?), what's that inquiry's question, goal, seed input, and trigger?

**Verification:**
- [ ] One-sentence question for the proposed inquiry
- [ ] Stated goal (what answer would let the user decide)
- [ ] Seed input named (this inquiry's findings + the prior audit's findings + `enes/discipline_taxonomy.md` Core admission rule)
- [ ] Trigger condition stated (open now / after audit-again / never until other Cores show similar pattern)
- [ ] Why this is meta-action (it's about the rule that gates Q1's choice, not a Q1 alternative)

### Q4 — Verdict communication artifact

**Question:** What's the shape of the artifact the user reads to decide between the three options (Option 1 = KEEP-CURRENT bundle, Option 2 = D-CONDITIONAL bundle, Option 3 = meta-action), preserving the three-sub-question structure (intra-MVL+ + D-FIRST direction + /navigation acknowledgment), the graded audit-evidence shape, the phase-tag, and the legitimate "do nothing" baseline?

**Verification:**
- [ ] One artifact shape named (finding.md alone / table-embedded / paragraph-only / etc.)
- [ ] Three-sub-question structure preserved (the answer says clearly "three sub-questions, here are the three answers")
- [ ] Graded audit-evidence shape preserved (formalization-yes / validation-unknown / discovery-no / inquiry-shape-suggestive)
- [ ] Phase-tag preserved (this verdict is calibrated for current project phase)
- [ ] "Do nothing now" presented as legitimate option, not just strawman
- [ ] Decision-action mapping explicit (what the user decides based on what)

---

## Step 5 — Interfaces

### Cross-piece flows

| Source | Target | What flows | Direction |
|---|---|---|---|
| Q1 | Q4 | Intra-MVL+ proposal candidates (Q1.1 KEEP-CURRENT variants and Q1.2 D-CONDITIONAL design candidates) | one-way |
| Q2 | Q4 | Acknowledgment language for D-FIRST + /navigation | one-way |
| Q3 | Q4 | Meta-action seed (or a "no, don't open it" outcome) | one-way |
| Q1 | Q3 | (weak) Q1's surviving proposals are evidence informing whether Q3 is needed (if Q1 produces a clean survivor, Q3 is less urgent) | weak one-way |

### Within-Q1 flows

| Source | Target | What flows | Direction |
|---|---|---|---|
| Q1.1 | Q1.2 | (weak) KEEP-CURRENT variants establish baseline against which D-CONDITIONAL must demonstrate marginal benefit | weak one-way |

### Hidden coupling check

- Assumption shared across pieces: that the user wants a verdict, not just exploration. Q4's "do nothing" decision-action mapping preserves the "no verdict" choice, so this isn't hidden — it's explicit.
- Assumption: the prior audit's recommended Assembly A is independent of this inquiry's verdict (Assembly A's edits help D wherever D sits). Verified — Assembly A is `desc-machinery` refinements that survive any of Q1's choices.

No hidden coupling.

---

## Step 6 — Dependency Order

```
{Q1 (with Q1.1 ∥ Q1.2 sub-pieces), Q2, Q3} ∥ parallel
                          ↓
                          Q4 synthesis
```

Within Q1: Q1.1 and Q1.2 can be worked on in parallel; weak coupling (Q1.1 is the baseline against which Q1.2's marginal benefit is judged, but each can produce proposals independently).

Q2, Q3 are independent of Q1 and of each other.

Q4 depends on Q1, Q2, Q3 (synthesis sink).

No circular dependencies.

---

## Step 7 — Self-Evaluation

### Minimum (3 dimensions)

| Dimension | Check | Result |
|---|---|---|
| **Independence** | Can each piece be addressed without reading siblings (except via interfaces)? | **PASS** — Q1, Q2, Q3 are fully independent; Q4 is by-design synthesis (declared interfaces, not hidden). Q1.1 and Q1.2 have weak coupling that's flagged. |
| **Completeness** | Do pieces cover the whole? | **PASS** — All three sensemaking-named options + acknowledgment language + verdict artifact + meta-action are covered. |
| **Reassembly** | Pieces + interfaces = whole? | **PASS** — Q1 produces intra-MVL+ proposal set; Q2 produces acknowledgment language; Q3 produces meta-action candidate (or a "no"); Q4 compiles them into the user-facing artifact with decision-action mapping. The user has what they need to decide. |

### Determination-mechanism piece check

Load-bearing concepts in the question tree whose use depends on a runtime determination:

- **"D-CONDITIONAL trigger" (Q1.2 trigger sub-axis):** runtime determination = "does the trigger fire on this inquiry?" Determination mechanism is *part of Q1.2's question* (the trigger sub-axis itself defines the mechanism). **Included.**
- **"Layer-0-only signal" (carryover from prior audit's Q1.2-a):** runtime determination = "is this inquiry Layer-0-only?" Determination is *part of the trigger design* (Q1.2 sub-axis). **Included by reference.**
- **"Honest value tag" (synergizes with prior audit's Assembly A):** runtime determination = "what value tag did similar past inquiries earn?" Determination mechanism is in the prior audit's Assembly A spec (Q1.1-f) — the trigger sub-axis can build on it. **Included by reference.**
- **"Pipeline-sequential reading" (Q3 meta-action):** runtime determination = "does the rule mean strict-always or flexible-when-runs?" Q3 explicitly addresses the determination — that's its purpose. **Included.**

**Determination-mechanism check: PASS.**

### Full (additional 4 dimensions)

| Dimension | Check | Result |
|---|---|---|
| **Tractability** | Each piece small enough for one focused pass? | **PASS** — Q1 has sub-pieces but each sub-piece is single-focused. Q2/Q3/Q4 are single-pass. Innovation can target each piece's verification criteria directly. |
| **Interface clarity** | All cross-piece flows explicit; no hidden dependencies? | **PASS** — Interfaces declared; one weak Q1↔Q3 coupling flagged. |
| **Balance** | Complexity roughly proportional? Or 80/20? | **PASS-with-caveat** — Q1 (especially Q1.2) is the largest piece because the D-CONDITIONAL design has three sub-axes (trigger / spec form / maintenance). Q2/Q3 are smaller (acknowledgment language; meta-action seed). Q4 is synthesis. Not 80/20 imbalanced; Q1 is ~50% of weight, justified by being the load-bearing decision. |
| **Confidence** | Top-down + bottom-up agree? | **HIGH** — atoms cluster cleanly. |

### HONEST self-assessment — the audit framework's value tag

Per the audit's framework (HIGH/MEDIUM/LOW), what value is THIS decomposition producing beyond what Sensemaking already named?

**What Sensemaking SV6 already named:**
- Three options (Option 1, Option 2, Option 3).
- Three sub-questions (intra-MVL+ + D-FIRST direction + /navigation acknowledgment).
- The graded audit-evidence reading.
- The phase-tag.

**What this decomposition adds beyond SV6:**

1. **Q1.2's three sub-axes (trigger / spec form / maintenance side).** SV6 named D-CONDITIONAL as a single option; this D split it into three independently-targetable design axes. Innovation can now generate per-axis proposals (≥2 trigger options + ≥2 spec-form options + ≥2 maintenance options); critique can evaluate per axis. **This is genuine partitioning value.**

2. **Q1.1 split from Q1.2.** SV6 had "KEEP-CURRENT" and "D-CONDITIONAL" as two options but didn't separate "what variants of KEEP-CURRENT exist" (pure status quo vs status-quo-plus-Assembly-A). **Modest formalization value.**

3. **Q2 separated from Q4.** SV6 grouped "acknowledgment language for D-FIRST and /navigation" loosely. Pulling them into their own piece (Q2) means innovation can generate concise phrasings without the artifact-shape decision crowding them out. **Modest formalization value.**

4. **Q3 framed as full-inquiry seed.** SV6 named "meta-action: open separate inquiry" but didn't structure the seeding (question, goal, seed input, trigger). Q3 partitions this into the four standard inquiry-seeding components. **Modest formalization value.**

**Honest verdict on this D's value:**

- Q1.2's sub-axis split is genuine partitioning (would not have been obvious from SV6 alone). Score: **MEDIUM-leaning-HIGH** in isolation.
- Q1.1 / Q2 / Q3 / Q4 are mostly formalization. Score: **LOW-MEDIUM** in isolation.

**Overall this D scores MEDIUM** — consistent with the corpus-typical D value, the prior audit's median, and the prior audit-on-D's own self-evaluation. The Q1.2 sub-axis surfacing is the actual value-add.

### Self-application check (per inquiry's instructions)

The instructions said:
> "If THIS decomposition's value tag is going to be MEDIUM or LOW, that's actually evidence FOR D-CONDITIONAL (since it would mean D ran ceremonially even on the meta-question that should warrant rich partitioning). If it's HIGH, that's evidence the non-meta-design inquiry-shape variance is real."

This D scores MEDIUM. The Q1.2 sub-axis partitioning is genuine work, but Q1.1, Q2, Q3, Q4 are mostly formalization. So this is a mixed signal:
- **Evidence for D-CONDITIONAL:** Even on a meta-architectural question (which should be D's strongest case), only one piece (Q1.2) earned genuine partitioning value; the rest formalized SV6's already-named structure. If D were in a Layer-0-only inquiry shape (the audit's 8/10 corpus), even the Q1.2 partitioning would not exist (no D-CONDITIONAL design to elaborate). So D's expected value on Layer-0-only inquiries is LOW; D-CONDITIONAL's skip-trigger would correctly skip those cases.
- **Evidence against D-CONDITIONAL (weak):** D didn't score NEGATIVE here. The 0-NEGATIVE evidence holds. Keeping D as Core is defensible; D-CONDITIONAL is an optimization, not a correction.

The honest reading: D's MEDIUM-typical value is real and persistent, including on architectural meta-questions. D-CONDITIONAL is the more evidence-respecting choice; KEEP-CURRENT is the more conservative choice. Both defensible.

### Self-reference notes

This decomposition is an instance of D in the corpus this inquiry is auditing-the-auditor of. It will be subject to the same audit framework if D is audited again. Honest reading: this D scores MEDIUM, the corpus-typical value. The audit's findings hold under self-application; the verdict scope is preserved as corpus-internal.

The PASS-stamping risk acknowledged. Counter-evidence:
- Per-piece value tagging in this self-eval is mixed (Q1.2 MEDIUM-leaning-HIGH; others LOW-MEDIUM), not uniform.
- The Balance dimension was tagged "PASS-with-caveat," not bare PASS.
- The honest assessment names what sensemaking already covered vs what this D added — concrete, not blanket.

---

## Final Deliverable

### 1. Coupling Map

Four clusters: A {intra-MVL+ design with Q1.1 KEEP-CURRENT variants + Q1.2 D-CONDITIONAL design}, B {architectural acknowledgments for D-FIRST + /navigation}, C {meta-action option}, D {verdict artifact, synthesis sink}. Weak inter-cluster coupling; D is synthesis sink. Within Cluster A, Q1.2 has three sub-axes (trigger / spec form / maintenance).

### 2. Question Tree

- **Q1** — Intra-MVL+ design proposal
  - Q1.1 — KEEP-CURRENT variants
  - Q1.2 — D-CONDITIONAL design (with sub-axes: trigger / spec form / maintenance side)
- **Q2** — Architectural-acknowledgment language (D-FIRST as deferred direction; /navigation covers D-AFTER-C)
- **Q3** — Meta-action option (separate inquiry on Core admission rule's "pipeline-sequential" reading)
- **Q4** — Verdict communication artifact

### 3. Interface Map

- Q1 → Q4 (proposal candidates flow into artifact)
- Q2 → Q4 (acknowledgment language flows into artifact)
- Q3 → Q4 (meta-action seed flows into artifact)
- Q1 → Q3 (weak; Q1's surviving proposals inform whether Q3 is needed)

### 4. Dependency Order

```
{Q1 (with Q1.1 ∥ Q1.2 parallel sub-pieces), Q2, Q3} ∥ parallel
                          ↓
                          Q4 synthesis
```

### 5. Self-Evaluation

**Minimum (3 dim):** Independence PASS / Completeness PASS / Reassembly PASS.
**Determination-mechanism check:** PASS.
**Full (4 additional dim):** Tractability PASS / Interface clarity PASS / Balance PASS-with-caveat / Confidence HIGH.

**Honest value tag (per audit framework):** **MEDIUM** — Q1.2's three-sub-axis partitioning is genuine partitioning; Q1.1/Q2/Q3/Q4 are mostly formalization. Consistent with corpus-typical D value. Self-application check provides mixed-signal evidence FOR D-CONDITIONAL (D's MEDIUM-typical value persists even on architectural meta-questions; Layer-0-only inquiries would earn even less).

**Self-reference:** This D scores MEDIUM, exemplifying the audit's verdict it's downstream of. Verdict scope remains corpus-internal.
