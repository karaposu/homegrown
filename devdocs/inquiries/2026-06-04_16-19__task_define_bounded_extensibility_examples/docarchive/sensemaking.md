## User Input

devdocs/inquiries/2026-06-04_16-19__task_define_bounded_extensibility_examples/_branch.md

(Structural refinement of Task-Define's runtime spec at §2.3 — bounded-extensibility rule (b) "must constrain Rephrase" operationalization. Surfacing produced 42 items + 7 frontier flags F1-F7 + 22 design candidates across 7 axes. Layer = structural; meaning + process inherited as settled.)

---

# Sensemaking — Task-Define Rule (b) Operationalization

## SV1 — Baseline Understanding

The refinement is a §2.3 amendment that adds worked examples (qualifying + non-qualifying) operationalizing rule (b) "must constrain Rephrase." The examples + (possibly) sharpened rule wording must make the constrains-Rephrase relation testable at Stage 2 (Meta-question time) without requiring forward simulation of Rephrase at Stage 4. The current rule wording ("materially shapes how Rephrase produces alternative formulations") is qualitative; the refinement makes it operational while preserving the qualitative anchor.

---

## Phase 1 — Cognitive Anchor Extraction

### Constraints

- **C1.** Worked examples must be concrete — real-feeling task statement + real-feeling extension question + observable Rephrase implication. Not hand-waved.
- **C2.** Non-qualifying example must be a **clean (b)-only failure** — passes rules (a) and (c) so the LLM cannot dismiss it on independent grounds; only fails (b).
- **C3.** Operational test must be applicable at Stage 2 without running Rephrase forward. The LLM judges the constrains-Rephrase relation by mental simulation or axis recognition, not by waiting until Stage 4.
- **C4.** Rule (b)'s qualitative anchor ("materially shapes") should be preserved (per the mode 6 inquiry's ADD-CONTENT pattern — append operational layer while keeping the meaning-layer-inherited qualitative phrasing).
- **C5.** Examples + wording amendment must respect the lightweight spirit (criterion iv applies to operation paragraphs at §2.1, not directly to §2.3, but compactness is still preferred).
- **C6.** Self-containment: no inquiry-folder references in any committed text (per user's reinforced reading earlier in conversation).
- **C7.** Mode 3 coherence: §4.2 mode 3 (MQ-extension-violates-bounded-rule) should inherit the operational test from §2.3 without requiring a separate amendment (parallel to the mode 6 inquiry where the corrective stayed unchanged).
- **C8.** Borderline cases (when constrains-Rephrase relation is genuinely ambiguous) should be handled per the asymmetric-failure principle at §4.4 — lean toward FIRE the extension (false-positive bounded-cost; false-negative information-loss-in-the-dark).
- **C9.** Process-layer alternatives (moving rule (b)'s check from Stage 2 to Stage 4 retrospective) are explicitly out of scope per Layer Commitment. If they surface, flag as frontier; do not redesign in-flight.

### Key Insights

- **I1.** The **operational test is the bridge** between rule (b)'s qualitative wording ("materially shapes") and the worked examples. Picking the test form fixes how the examples illustrate the rule.
- **I2.** Surfacing produced three operational test candidates (T1 mental-simulation; T2 axis-commitment; T3 variant-divergence). T1 and T3 are nearly equivalent at the operational level — both ask "would the variant set differ?" T2 is at a more abstract level — "does the answer commit to an axis Rephrase's variants will differ along?"
- **I3.** The **combined form** of the operational test is stronger than any one candidate: "the answer must commit information that would cause Rephrase to produce a different set of alternative formulations than it would produce without the answer" — this is T1+T3 framed at the variant-set level; the "would cause" implicitly invokes T2's axis-commitment mechanism. The combined form names both the test (variant divergence) and the mechanism (axis commitment) in one sentence.
- **I4.** Same-item contrast (qualifying extension + non-qualifying extension on the SAME task statement) is the **cleanest test design**. Different-item contrasts introduce confounding variables (the LLM might attribute the judgment to the domain rather than to rule (b)). Q1 ("refactor auth" + "unit of refactoring") + N1 ("refactor auth" + "deadline") is the cleanest pair from surfacing.
- **I5.** The **ADD-CONTENT-appending pattern** from the mode 6 inquiry applies directly: keep rule (b)'s qualitative anchor; add the operational test inline (W2); add the worked-examples sub-block below (P1). REPAIR-in-place (W3) would lose the qualitative anchor.
- **I6.** **Mode 3 inherits the operational test** via the existing "three bounded-extensibility conditions" phrasing in its recognition column — no separate mode 3 amendment needed (M3a). This mirrors the mode 6 inquiry where the corrective column stayed unchanged because the recognition column carried the operational test.
- **I7.** **Borderline cases** are project-rooted via the asymmetric-failure principle at §4.4. EC1 (lean to fire) is the direct application: false-positive extension is bounded-cost (Rephrase may ignore non-constraining content; mode 4 at Stage 4 may flag drift); false-negative skipped extension is information-loss-in-the-dark.

### Structural Points

- **S1.** Operational test = variant-set divergence (T1+T3 combined), framed at the content level (not syntactic).
- **S2.** Example pair = Q1 ("refactor auth" + "unit of refactoring" qualifies) + N1 ("refactor auth" + "deadline" doesn't). Same-item contrast.
- **S3.** Placement = P1 — worked-examples sub-block immediately after the (a/b/c) bullets, before the closing open-with-extension paragraph.
- **S4.** Wording = W2 — inline the operational test within rule (b)'s parenthetical, keeping "materially shapes" as the qualitative phrasing.
- **S5.** Mode 3 coherence = M3a — recognition column unchanged; inherits the operational test via existing "three bounded-extensibility conditions" wording.
- **S6.** Edge cases = EC1 — lean to fire on borderline cases per asymmetric-failure.
- **S7.** Out-of-scope frontier explicit = process-layer Stage 4 retrospective check (EC2); rule (a) pattern propagation (F7).

### Foundational Principles

- **P1.** Operationalize via examples + inline test, not by overwriting the qualitative anchor.
- **P2.** Preserve rule (b)'s "materially shapes" wording as the inherited qualitative anchor; add operational layer beneath.
- **P3.** Lean to fire on borderline cases per the asymmetric-failure principle at §4.4 — runtime spec consistency.
- **P4.** Single source of truth for shape; mode 3 inherits via existing phrasing.
- **P5.** Self-contained spec; no design-history leaks; examples use project-agnostic task statements.

### Meaning-Nodes

- **M1.** **Variant-set divergence test** — operational form of constrains-Rephrase: would Rephrase's variant set differ across plausible extension-answer values?
- **M2.** **Axis commitment** — what the extension's answer does that makes Rephrase's variants differ: it commits a position on an axis Rephrase's variants will instantiate.
- **M3.** **Clean (b)-only failure** — non-qualifying example that passes rules (a) and (c); only fails (b); the LLM cannot dismiss it on independent grounds.
- **M4.** **Same-item contrast** — qualifying + non-qualifying on the same task statement; isolates rule (b)'s effect.
- **M5.** **Inherited qualitative anchor** — rule (b)'s "materially shapes" wording stays; the operational test is added beneath without replacing it.
- **M6.** **Mode 3 inheritance** — mode 3 detects rule (b) failures via the existing "three bounded-extensibility conditions" phrasing without separate amendment.

*Meta-Inspection after SV2: H4 (concept names) — every coined concept (M1-M6) is defined inline against project vocabulary or sister-discipline precedent. MC1-honoring satisfied. H5 (motivating examples) — the 7 frontier flags F1-F7 are specific; each becomes an ambiguity-collapse pair (A1-A6 below). Pattern: operationalization of rule (b) is one instance of "structural refinement of foresight-dependent rules via worked-examples + inline test." Pattern flagged for rule (a) per F7.*

### SV2 — Anchor-Informed Understanding

The refinement is a two-part §2.3 amendment: (1) inline the operational test in rule (b)'s parenthetical (W2; keeps "materially shapes" qualitative anchor); (2) append a worked-examples sub-block with same-item contrast (Q1+N1 on "refactor auth"). Mode 3 inherits; borderline cases lean to fire; self-containment + lightweight + perception/action split all preserved.

---

## Phase 2 — Perspective Checking

### Technical / Logical

The operational test is logically applicable at Stage 2. The LLM mentally generates 2-3 plausible Rephrase variants for the item, then asks: "would these variants change if the extension's answer were different?" If yes — extension qualifies. If the same variant set would emerge regardless of the answer — extension doesn't qualify. Logically self-contained.

**New anchor I8:** The test's evaluator-judgment dependency means application quality scales with LLM capability + the example pair's clarity. For a Bootstrap-state discipline, examples carry most of the operational weight; the inline test in rule (b) provides the abstract reference.

### Human / User

The user explicitly asked for "a 2-3 line worked example in §2.3 showing a qualifying extension + a non-qualifying one, with the constrains-Rephrase relation made explicit." The Q1+N1 same-item contrast pair fits in roughly 4-6 lines total (line per example component). Slightly more than 2-3 lines per example, but the contrast is the load-bearing structure. PASS.

The user's "lets dive deep into this one" framing invites also addressing the rule (b) wording — W2 inline-test responds to that. PASS.

### Strategic / Long-term

The pattern (inline operational test + same-item-contrast examples) is **reusable for rule (a)**'s analogous foresight gap ("about task structure or framing" requires judgment). F7 from surfacing flagged this; explicitly out of scope here but the structural pattern is documented for future application.

**New anchor I9:** The pattern is reusable for ANY discipline-spec rule whose evaluation requires forward-looking judgment. Mode 6 inquiry established the structural-refinement pattern for failure-mode detection; this inquiry extends it to bounded-rule operationalization. Both are instances of "structural refinement of foresight-dependent rules via §X commits operational content + adjacent rule/detector inherits." Pattern-propagation candidate.

### Risk / Failure

- **R1:** Examples too refactoring-specific — may not generalize. Mitigation: the same-item contrast Q1+N1 isolates the rule mechanic; the structural pattern is what generalizes, not the domain. (Innovation could surface domain-diverse alternative examples; current pair is the cleanest test of rule (b)'s mechanic.)
- **R2:** Operational test ambiguous when the LLM can't mentally simulate Rephrase clearly. Mitigation: EC1 lean-to-fire as the asymmetric-failure-aligned default.
- **R3:** Mode 3 recognition column might not inherit cleanly. Mitigation: §2.3's operational test references the same "three bounded-extensibility conditions" mode 3 names; inheritance is structural (via shared concept name) not via cross-reference. If empirical testing reveals mode 3 doesn't fire when it should, M3b amendment is the refinement target.
- **R4:** W2 wording risk — the inline operational test expands rule (b)'s parenthetical from a one-clause "i.e." to a two-clause "i.e., ... — concretely, ..." form. Acceptable for §2.3's multi-paragraph section (criterion iv applies to §2.1 operation paragraphs); risk is readability if the expansion bloats. Mitigation: keep the operational test concise (~1 sentence).
- **R5:** Same-item contrast might bias the LLM toward thinking ALL extensions about "refactor auth" should be evaluated by the unit-of-refactoring vs deadline axis. Mitigation: the rule itself isn't domain-specific; the examples ILLUSTRATE the rule's mechanic, not its full scope.

### Resource / Feasibility

Authoring: one bullet text update (rule (b)) + one worked-examples sub-block (≈ 4-6 lines). Total spec change: ~6-8 sentences across one §-section. Highly feasible.

### Ethical / Systemic

Not directly applicable.

### Definitional / Internal Consistency

Test against existing runtime spec commitments:

| Spec section | Existing commitment | Refinement | Consistent? |
|---|---|---|---|
| §2.3 rule (a) | "about task structure or framing" | Non-qualifier N1 (deadline) passes rule (a) — deadline is task-framing-adjacent | YES |
| §2.3 rule (c) | "one sentence" | Both Q1 and N1 extensions are one-sentence | YES |
| §2.3 closing paragraph | open-with-extension rationale | Refinement doesn't contradict; sub-block sits between bullets and closing | YES |
| §2.1 Meta-question | "constrain the per-item Rephrase operation in Stage 4" | Operational test makes the constrain relation explicit at Stage 2 | YES |
| §2.1 Rephrase | "constrained by the Meta-question answers" | Examples illustrate the constrain direction concretely | YES |
| §4.2 mode 3 | "fails one of the three bounded-extensibility conditions" | M3a leaves mode 3 unchanged; inherits §2.3's operational test via existing wording | YES |
| §4.2 mode 4 | "Rephrase-drifted-without-MQ-constraint" | Distinct from mode 3; not impacted | YES |
| §4.4 asymmetric-failure | "lean toward fire at MQ extensions when bounded-rule is met" | EC1 (lean to fire on borderline) is direct application | YES |
| 15-39 §4 meaning layer | "the synthesis preserves the lightweight stance ... while respecting that real tasks vary" | Refinement operationalizes without growing the canonical set | YES |
| Self-containment §11 | "no outbound pointers" | Examples use generic task statements; no inquiry-folder references | YES |

**10/10 internal consistency tests PASS.**

Reverse check: does the existing §2.3 contradict itself in a way the refinement exposes? §2.3 says rule (b) is "must constrain Rephrase" — the parenthetical clarifies "materially shapes." Adding the operational test as a concrete clause within the parenthetical doesn't contradict; it operationalizes. No self-contradiction surfaced.

### Definitional / Frame-exit Completeness (gating fires on "layer")

Gating: "layer" appears across meaning/structural/process in `_branch.md` Layer Commitment. Same pattern as prior inquiries. Fires.

1. **Existence Enumeration:** 3 layers (meaning / structural / process). Frame includes structural. Excludes meaning (settled at 15-39 §4) + process (Stage 2 timing settled at runtime spec §3.3).
2. **Role Assessment:** meaning excluded — settled; intentional. Process excluded — Stage 2 timing settled; intentional. Operation coherence preserved.
3. **Verdict Rigor:** counter — "designing the operational test might force re-litigation of WHEN rule (b) fires." Test: EC2 (Stage 4 retrospective) is the alternative timing; explicitly flagged as process-layer + out of scope per Layer Commitment; flagged as frontier. Doesn't force re-litigation. PASS.
4. **Residual:** "layer" appears in spec section names (§2.1, §2.3, §4.2) but those are sections, not multi-value commitments. No new finding. Termination.

### Phase / Calibration-State

Required — Task-Define is in Bootstrap state. Refinement doesn't depend on calibration data. Relies on:
- Internal consistency (10/10 PASS).
- Sister-discipline + sister-inquiry precedent (mode 6 inquiry's ADD-CONTENT pattern; 15-39 §4 bullet-(a)-tightening as parallel precedent for rule operationalization).
- Asymmetric-failure principle at §4.4 (lean to fire).

Calibration trajectory: rule (b) firing rate observable post-amendment; Early Operation (~10-20 invocations) refinement candidates: if examples produce false-positive extensions (LLM applies too liberally), tighten wording; if false-negative skipped extensions, relax. Per-mode-3 firing rate also observable.

*Meta-Inspection after SV3: H1 (candidate set) — 22 design candidates from surfacing collapse to a single design via 6 ambiguity-collapse adjudications below. No convergence-recognition issue. H7 (phase/calibration) — applied (Bootstrap).*

### SV3 — Multi-Perspective Understanding

The refinement is operationalizing rule (b) via: (1) W2 inline operational test in rule (b)'s parenthetical (preserves "materially shapes" qualitative anchor); (2) Q1+N1 same-item contrast worked-examples sub-block placed at P1 (after a/b/c bullets, before closing paragraph); (3) M3a mode 3 unchanged (inherits via existing wording); (4) EC1 lean to fire on borderline (asymmetric-failure-aligned). 10/10 internal consistencies PASS. Frame-exit + Phase/Calibration applied. Bootstrap-compatible. Mode 6 inquiry pattern reused.

---

## Phase 3 — Ambiguity Collapse

### A1 — Operational test selection (= F1)

**Ambiguity:** pick T1 (mental-simulation) or T2 (axis-commitment) or T3 (variant-divergence) as the operational test.

**Strongest counter-interpretation:** T2 (axis-commitment) — more abstract test, asks whether the answer commits to an axis Rephrase varies along.

**Why counter fails (structural grounds):** T2's abstraction power is real but it doesn't replace T1/T3 — it underlies them. An LLM applying T2 still needs to know what "axis Rephrase varies along" looks like, which is what T1/T3's "would variant set differ?" frames concretely. The combined form ("commits information that would cause Rephrase to produce a different set of variants than it would produce without the answer") encodes BOTH the test (variant divergence; T1+T3) AND the mechanism (axis commitment; T2) in one sentence. Picking only T2 loses applicability; picking only T1/T3 loses explanatory power.

**Confidence:** HIGH.

**Resolution:** Operational test wording: *"the answer must commit information that would cause Rephrase to produce a different set of alternative formulations for this item than it would produce without the answer."* This is the combined form. The LLM applies it by mental-simulating Rephrase variants with and without the candidate extension's answer; if the sets differ, the extension qualifies.

### A2 — Wording sharpening (= F2)

**Ambiguity:** pick W1 (keep current text; add examples below) or W2 (inline operational test in rule (b) parenthetical) or W3 (replace "materially shapes" with operational test).

**Strongest counter-interpretation:** W3 — replace the qualitative phrasing with the operational test entirely; cleanest single-statement rule.

**Why counter fails (structural grounds):** W3 loses the qualitative anchor that was inherited from meaning layer 15-39 §4. The qualitative "materially shapes" phrasing carries the rule's INTENT (the higher-level commitment); the operational test is the IMPLEMENTATION. Replacing intent with implementation flattens the two-layer structure (intent → operational test) the way it flattened it in the mode 6 inquiry's REPAIR-in-place alternative (rejected there for the same reason).

W1 (keep + add examples below) is also weaker — the bullet still reads "materially shapes" without operational guidance; a reader scanning the bullet must scroll to the examples to find the test. W2 puts the operational test in the bullet itself, where the rule is stated.

**Confidence:** HIGH.

**Resolution:** W2 — inline the operational test within rule (b)'s parenthetical. The text becomes:

> *(b) Must **constrain Rephrase** (i.e., the answer materially shapes how Rephrase produces alternative formulations for this item — concretely, the answer must commit information that would cause Rephrase to produce a different set of alternative formulations than it would produce without the answer; worked examples below illustrate qualifying and non-qualifying cases). A meta-question whose answer doesn't constrain Rephrase is free-floating and excluded.*

The "materially shapes" qualitative anchor stays as the first clause of the parenthetical; the operational test is appended as a "concretely, ..." clause; the worked-examples pointer is added; the original closing sentence ("free-floating and excluded") stays.

### A3 — Cleanest example pair (= F6)

**Ambiguity:** which qualifying/non-qualifying pair from the surfacing region E's 4+4 candidates produces the cleanest contrast?

**Strongest counter-interpretation:** different-domain pair (e.g., Q3 rendering bug + N1 refactor deadline) — broader coverage.

**Why counter fails (structural grounds):** different-domain pairs introduce confounding variables. The LLM reading the examples might attribute the qualifying judgment to the DOMAIN (refactoring vs rendering) rather than to the RULE's mechanic (unit-of-refactoring axis affects Rephrase; deadline doesn't). Same-item contrast — Q1 + N1 on the same task statement — isolates the rule mechanic; the only variable is the extension itself.

**Confidence:** HIGH.

**Resolution:** Q1 + N1 on the same item *"refactor the authentication module."* Two extensions: *"What's the unit of refactoring — function-level, class-level, module-level, or cross-module?"* (qualifies; commits granularity axis; Rephrase variants differ accordingly) vs *"What's the deadline for completion?"* (does not qualify; commits scheduling that doesn't shape variant set).

### A4 — Placement of worked-examples sub-block (= F5)

**Ambiguity:** P1 (after a/b/c bullets, before closing paragraph) or P2 (after closing paragraph) or P3 (inline into rule (b) bullet).

**Strongest counter-interpretation:** P3 — inline the examples into rule (b)'s bullet text, keeping rule and examples co-located.

**Why counter fails (structural grounds):** P3 bloats rule (b)'s bullet. §2.3's bullet structure (a/b/c) becomes asymmetric — one bullet with multi-paragraph content, two bullets with one-paragraph content. The visual hierarchy breaks; the reader can no longer scan the three rules quickly.

P2 (after closing paragraph) is also weaker — examples are separated from the rule by the closing paragraph (which is a meta-discussion of why open-with-extension exists). Adjacency to the rule is lost.

P1 keeps the bullet structure intact (rules first), examples adjacent (immediately below), closing paragraph still closes (meta-discussion stays last).

**Confidence:** HIGH.

**Resolution:** P1 — worked-examples sub-block immediately after the (a/b/c) bullets, before §2.3's closing paragraph about open-with-extension rationale.

### A5 — Edge-case treatment for borderline extensions (= F3)

**Ambiguity:** EC1 (lean to fire when constrains-Rephrase is ambiguous, asymmetric-failure-aligned) or EC2 (defer to Stage 4 retrospective check via mode 4) or EC3 (split rule into hard test + soft test).

**Strongest counter-interpretation:** EC2 — fire the extension at Stage 2; if it turns out non-constraining at Stage 4, mode 4 catches drift and the extension is retroactively flagged. This converts a foresight problem to a hindsight problem; the LLM doesn't need to predict perfectly.

**Why counter fails (structural grounds):** EC2 is a PROCESS-LAYER change (moving the check timing from Stage 2 to Stage 4). The Layer Commitment in `_branch.md` explicitly placed process layer out of scope; EC2 must be flagged as frontier, not adopted in this inquiry.

EC3 (split rule into hard/soft test) introduces sub-machinery — the rule grows from one bullet to multi-clause logic. Violates lightweight spirit.

EC1 is the asymmetric-failure-aligned default: §4.4 commits "lean toward fire at MQ extensions when bounded-rule is met"; borderline cases extend this — when rules (a) and (c) clearly pass and rule (b) is ambiguous, lean to fire. The rationale: false-positive extension is bounded-cost (Rephrase may ignore non-constraining content; mode 4 at Stage 4 catches drift if any); false-negative skipped extension is information-loss-in-the-dark.

**Confidence:** HIGH.

**Resolution:** EC1 — borderline extensions (constrains-Rephrase ambiguous but rules (a) + (c) clearly pass) FIRE the extension. The §2.3 closing paragraph (or rule (b)'s text itself) acknowledges this asymmetric default. EC2 flagged as frontier (process-layer change for a future inquiry); EC3 rejected as over-complicated.

### A6 — Mode 3 coherence (= F4)

**Ambiguity:** M3a (leave §4.2 mode 3 recognition column unchanged; inherit via existing "three bounded-extensibility conditions" phrasing) or M3b (amend mode 3 to explicitly reference §2.3's operational test or examples).

**Strongest counter-interpretation:** M3b — make the inheritance explicit so a future reader can trace the operational test from mode 3 to §2.3 directly.

**Why counter fails (structural grounds):** mode 6 inquiry's precedent: when the recognition column inherits the operational test naturally via existing phrasing, no separate amendment. Mode 3's recognition column says "fails one of the three bounded-extensibility conditions (about task structure / constrains Rephrase / one sentence)." The phrase "three bounded-extensibility conditions" already references §2.3 implicitly — that's where the three conditions live. Adding an explicit "see §2.3 examples" cross-reference is redundant + bloats mode 3's row.

M3a is the lighter choice consistent with the mode 6 inquiry's pattern. If empirical testing reveals mode 3 doesn't fire when it should (because the LLM running the self-check doesn't navigate from mode 3 to §2.3 reliably), M3b becomes a Refinement Trigger.

**Confidence:** HIGH.

**Resolution:** M3a — leave §4.2 mode 3 unchanged. Mode 3 inherits §2.3's operational test via the existing "three bounded-extensibility conditions" phrasing. The §2.3 amendment is the single source of truth.

### Load-bearing concept test (Phase 3 refinement note)

Load-bearing concepts stabilized:
- **"variant-set divergence"** — coined; defined inline at I3 + A1.
- **"axis commitment"** — coined; defined inline at I2 + M2.
- **"clean (b)-only failure"** — coined; defined inline at C2 + M3.
- **"same-item contrast"** — coined; defined inline at I4 + M4.
- **"inherited qualitative anchor"** — coined; defined inline at C4 + M5.
- **"mode 3 inheritance"** — coined; defined inline at I6 + M6 + A6.

Sub-aspect test (per the integrated 02-30 structural MC1 sub-aspect): each concept is project-vocabulary-aligned (derives from §2.3 + §2.1 + §4.4 + asymmetric-failure principle) or explicitly defined inline. No LLM-auto-completed meanings. PASS.

### Specific-vs-pattern recognition cue

The 7 frontier flags F1-F7 are specific. The recurring pattern: "operationalizing a foresight-dependent rule via inline operational test + same-item-contrast worked examples." Each F is an instance of this pattern's sub-decision (test form; wording; placement; etc.). The pattern itself is reusable for rule (a) (per F7) and for any similar rule in this discipline family — explicitly flagged as future work.

### SV4 — Clarified Understanding

The refinement is fully specified:

1. **§2.3 rule (b) text amended** to inline the operational test (W2). New text:
   > *(b) Must **constrain Rephrase** (i.e., the answer materially shapes how Rephrase produces alternative formulations for this item — concretely, the answer must commit information that would cause Rephrase to produce a different set of alternative formulations than it would produce without the answer; worked examples below illustrate qualifying and non-qualifying cases). A meta-question whose answer doesn't constrain Rephrase is free-floating and excluded.*

2. **§2.3 worked-examples sub-block ADDED** immediately after the (a/b/c) bullets, before the closing paragraph (P1). The block:
   > *Worked examples illustrating rule (b):*
   >
   > - *Qualifying.* Item: "Refactor the authentication module." Extension: "What's the unit of refactoring — function-level, class-level, module-level, or cross-module restructure?" The answer commits a granularity axis along which Rephrase's variants differ — the small-scope variant becomes something like "rename and restructure auth's internal functions"; the big-scope variant becomes something like "redesign auth's public interface for the rest of the system." Without the answer, these specific variants would not have been the natural alternatives.
   >
   > - *Non-qualifying.* Item: "Refactor the authentication module." Extension: "What's the deadline for completion?" The answer commits a scheduling value, but Rephrase's variants for "refactor auth" are about HOW to refactor, not WHEN. The variant set would be identical regardless of the deadline; the extension is free-floating and excluded at Stage 2.
   >
   > *Borderline cases — when the constrains-Rephrase relation is genuinely ambiguous but rules (a) and (c) clearly pass — fire the extension. The asymmetric-failure principle at §4.4 favors over-coverage at Stage 2 over information-loss-in-the-dark at Stage 4.*

3. **§4.2 mode 3 recognition column unchanged.** Mode 3 inherits §2.3's operational test via the existing "three bounded-extensibility conditions" phrasing.

4. **No other section changes required.** §2.1, §4.2 modes 4 / 5 / 6, §4.7, §3.3 — all unchanged.

---

## Phase 4 — Degrees-of-Freedom Reduction

### Now fixed (committed by Phase 3 ambiguity collapse)

1. **Operational test form:** variant-set divergence framed at content level (combined T1+T3+T2 form).
2. **Wording sharpening:** W2 — inline operational test in rule (b)'s parenthetical.
3. **Example pair:** Q1 + N1 same-item contrast on "refactor the authentication module."
4. **Placement:** P1 — sub-block after (a/b/c) bullets, before closing paragraph.
5. **Mode 3 coherence:** M3a — unchanged; inherits via existing phrasing.
6. **Edge-case treatment:** EC1 — lean to fire on borderline cases per asymmetric-failure principle.
7. **Qualitative anchor preserved:** "materially shapes" wording stays as the parenthetical's first clause.
8. **Self-containment + lightweight preserved:** no inquiry-folder mentions; compact amendments.

### Now eliminated

- Structured-shape commitments on extension answers (parallel to mode 6 inquiry's content-not-syntax decision).
- Stage 4 retrospective check (EC2; process-layer; out of scope; frontier).
- Split-rule hard/soft test (EC3; sub-machinery violation).
- Different-domain example pair (loses contrast clarity).
- P3 inline-into-bullet placement (bloats bullet; breaks visual hierarchy).
- P2 after-closing-paragraph placement (loses adjacency).
- M3b separate mode 3 amendment (redundant; bloats mode 3 row).
- W3 wording replacement (loses qualitative anchor).
- W1 keep-only-add-examples-below (operational test not visible at bullet).

### Now variable (R1-authoring-time stylistic refinements OK)

- Exact wording of rule (b)'s amended parenthetical (the SV4 text is concrete; minor style tweaks acceptable).
- Exact wording of the worked-examples sub-block (Q1+N1 phrasing concrete; Rephrase implication wording adjustable).
- Whether to bold the "Qualifying" / "Non-qualifying" labels or use different punctuation.

### SV5 — Constrained Understanding

The refinement's solution space is fully bounded: **8 fixed commitments + 9 eliminations + 3 stylistic variables**. Drop-in authorable; next step is two coordinated edits to §2.3 of `cognitive_harness/task-define/references/task-define.md`.

---

## Phase 5 — Conceptual Stabilization

### Synthesis

**The §2.3 amendment for bounded-extensibility rule (b) is a coordinated two-part refinement.** Rule (b)'s text is amended to inline the operational test within its parenthetical — keeping "materially shapes" as the qualitative anchor inherited from meaning layer + adding "concretely, the answer must commit information that would cause Rephrase to produce a different set of alternative formulations than it would produce without the answer" as the operational test. A worked-examples sub-block is added immediately after the (a/b/c) bullets (before the closing paragraph) with same-item contrast on "refactor the authentication module": the extension "What's the unit of refactoring?" qualifies (commits granularity axis; Rephrase variants differ); the extension "What's the deadline for completion?" does not qualify (commits scheduling that doesn't shape variant set). A short note covers borderline cases — fire the extension when constrains-Rephrase is ambiguous but rules (a) and (c) clearly pass (asymmetric-failure-aligned). §4.2 mode 3 recognition column stays unchanged (inherits §2.3's operational test via existing phrasing).

### Accommodation trigger check

Did stabilization require multiple revisions?

- SV1 → SV2: additive (anchors extracted).
- SV2 → SV3: additive across 5 lateral + Definitional-Internal + Frame-exit + Phase/Calibration; no destabilizing revisions.
- SV3 → SV4: additive across 6 ambiguity-collapse pairs (A1-A6); each pair stabilized a commitment without forcing earlier commitments to be revised.
- SV4 → SV5: clean degrees-of-freedom reduction.
- SV5 → SV6: synthesis without revision.

**Accommodation trigger DID NOT fire.** Pattern was refinement-and-addition, not patching-after-destabilization.

### Meta-Inspection after SV6

- **H6 (model fit):** refinement pattern. PASS.
- **H8 (self-reference):** sensemaking analyzing a §2.3 refinement; sister-discipline precedent (mode 6 inquiry's ADD-CONTENT pattern) + 15-39 §4 reasoning + 15-39 §4 bullet-(a)-tightening as direct parallel precedent. Three external project-rooted grounds. Self-reference acknowledged + grounded.
- **H9 (user language alignment):** "constrain Rephrase," "materially shapes" — inherited from meaning layer 15-39 §4. "Variant-set divergence," "axis commitment," "same-item contrast" — coined here with inline definitions; project-pattern-aligned. PASS.

### SV6 — Stabilized Model

> **The bounded-extensibility rule (b) refinement amends §2.3 of `cognitive_harness/task-define/references/task-define.md` in two coordinated ways: (1) rule (b)'s parenthetical is expanded to inline the operational test — keeping "materially shapes" as the qualitative anchor + adding "concretely, the answer must commit information that would cause Rephrase to produce a different set of alternative formulations than it would produce without the answer" + a pointer to the worked examples below. (2) A worked-examples sub-block is added immediately after the (a/b/c) bullets (before the closing paragraph) with same-item contrast on "refactor the authentication module" — extension "What's the unit of refactoring?" qualifies (commits granularity axis; Rephrase variants differ); extension "What's the deadline for completion?" does not qualify (commits scheduling that doesn't shape variant set). A short borderline-case clause notes that ambiguous (b)-cases with (a) and (c) clearly passing FIRE the extension per the asymmetric-failure principle at §4.4. §4.2 mode 3 recognition column is unchanged — inherits §2.3's operational test via the existing "three bounded-extensibility conditions" phrasing. 8 fixed commitments + 9 eliminations + 3 stylistic variables. Self-containment (no inquiry-folder mentions in committed text), lightweight (compact additions; criterion iv respected at §2.3's multi-paragraph section level), and perception/action split (operational test is content-level, not syntactic; runner-side handling of extensions unaffected) all preserved. 10/10 internal-consistency tests PASS; Frame-exit Completeness PASS; Bootstrap-calibration-compatible; mode 6 inquiry pattern reused; rule (a) pattern propagation flagged as F7 future work.**

### How SV6 differs from SV1

- **SV1:** "The refinement is a §2.3 amendment that adds worked examples operationalizing rule (b)" — concept only.
- **SV6:** exact spec amendment text for rule (b)'s wording + exact worked-examples sub-block content + placement + borderline-case clause + mode 3 coherence verdict + compliance verdicts + 8 fixed commitments + 9 eliminations.

---

## Saturation Indicators Telemetry

- **Perspective saturation:** Phase 2 ran 5 lateral + Definitional-Internal-Consistency + Frame-exit Completeness + Phase/Calibration; the last 3 produced new anchors consistent with earlier perspectives (no destabilization). HIGH.
- **Ambiguity resolution ratio:** 6/6 frontier flags resolved (F1-F6 directly via A1-A6; F7 explicitly flagged as future work). 100% in-scope resolution.
- **SV delta:** SV1 was a concept; SV6 has 8 commitments + 9 eliminations + 3 variables + exact text. Substantial.
- **Anchor diversity:** anchors come from 5 types (Constraints C1-C9; Insights I1-I9; Structural Points S1-S7; Foundational Principles P1-P5; Meaning-Nodes M1-M6) and 8 perspectives. HIGH.

## Failure Modes Self-Check

- **Status Quo Bias** — am I protecting rule (b)'s current qualitative wording because it exists? Test: W2 actively expands the wording with an operational test; W3 was tested and rejected on a structural ground (qualitative anchor preservation), not on a status-quo reflex. NOT OBSERVED.
- **Premature Stabilization** — did clarity arrive too quickly? Test: 6 ambiguity-collapse pairs with strongest counter-interpretations + structural-grounds reasoning; sister-discipline precedent (mode 6 inquiry) + meaning-layer precedent (15-39 §4 bullet-(a)-tightening) cited as parallel cases. NOT OBSERVED.
- **Anchor Dominance** — does one anchor do all the work? Test: removing the "asymmetric-failure principle" anchor (EC1 driver) wouldn't collapse the design — A1 (operational test), A2 (wording), A3 (examples), A4 (placement), A6 (mode 3) all stand on independent structural grounds. Multi-anchor. NOT OBSERVED.
- **Perspective Blindness** — do all perspectives agree? Test: Risk surfaced 5 specific risks (R1-R5) with mitigations; Strategic surfaced the F7 pattern-propagation insight; Frame-exit Completeness applied. Real cross-perspective challenge. NOT OBSERVED.
- **Clean Resolution Trap** — did any ambiguity resolve elegantly without structural counter-test? Test: each A1-A6 has counter + structural reasoning. NOT OBSERVED.
- **Self-Reference Blindness** — using sensemaking to design a Task-Define refinement. External grounding via three independent project precedents (mode 6 inquiry pattern + 15-39 §4 bullet-(a)-tightening + asymmetric-failure principle at §4.4). NOT OBSERVED as blindness.

## Frontier (for Decomposition)

- The 8 SV6 commitments decompose into 2-3 authorable pieces (rule (b) wording amendment + worked-examples sub-block + the borderline-case clause as a possibly-separate piece or sub-element).
- The Q1+N1 same-item contrast on "refactor auth" is committed; alternative example pairs (Q2/N2 on caching; Q3/N4 on rendering bug) are available as ALTERNATIVES but not selected — innovation discipline may consider them if a stronger contrast surfaces.
- F7 (pattern propagation to rule (a)) flagged as future work; decomposition does NOT include it.
- F4 mode 3 coherence verdict (M3a) committed; if empirical testing later reveals mode 3 doesn't fire when it should, M3b becomes a future refinement trigger (not part of this inquiry's piece-list).

## Manual Structural Check (since tools/structural_check.sh unavailable)

- ✓ SV1 — Baseline
- ✓ Phase 1 — Cognitive Anchor Extraction (5 anchor types: Constraints C1-C9, Insights I1-I9, Structural Points S1-S7, Principles P1-P5, Meaning-Nodes M1-M6)
- ✓ SV2 — Anchor-Informed Understanding
- ✓ Phase 2 — Perspective Checking (5 lateral perspectives + Definitional-Internal-Consistency 10/10 PASS + Frame-exit Completeness (gating FIRED + PASSED) + Phase/Calibration (REQUIRED, applied: Bootstrap state))
- ✓ SV3 — Multi-Perspective Understanding
- ✓ Phase 3 — Ambiguity Collapse (6 pairs A1-A6 with strongest counter + structural-grounds reasoning + confidence)
- ✓ Load-bearing concept test refinement applied (6 concepts, all defined inline)
- ✓ Specific-vs-pattern cue refinement applied
- ✓ SV4 — Clarified Understanding (with exact amendment text)
- ✓ Phase 4 — Degrees-of-Freedom Reduction (8 fixed / 9 eliminated / 3 variable)
- ✓ SV5 — Constrained Understanding
- ✓ Phase 5 — Conceptual Stabilization (synthesis + Accommodation trigger check)
- ✓ SV6 — Stabilized Model
- ✓ Saturation Indicators Telemetry
- ✓ Failure Modes Self-Check (all 6 modes audited)
- ✓ Frontier (handoff to Decomposition)
- ✓ Meta-Inspection at SV2 / SV3 / SV4 / SV6 hooks fired

**Manual structural check: PASS (17/17 required structural elements present + 6/6 failure modes audited + 6/6 ambiguity-collapse pairs adjudicated on structural grounds + Frame-exit Completeness gating fired-and-passed + Phase/Calibration applied as required.)**
