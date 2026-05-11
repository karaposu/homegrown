# Sensemaking: Lightweight Discipline-Level Disambiguation

## User Input

devdocs/inquiries/2026-05-08_06-30__lightweight_discipline_level_disambiguation/_branch.md

## SV1 — Baseline Understanding

Exploration converged on Approach 1/2 (one-line writing-style convention per discipline, in the SOLID INSTRUCTIONS section). This refines the prior `2026-05-07_22-10` finding: Component A (expanded examples at CONCLUDE) stays; Component B (regex sub-section at CONCLUDE) is REJECTED in favor of a lighter discipline-level intervention (one short line per discipline).

This sensemaking stabilizes wording, collapses Approach 1 vs Approach 2 ambiguity, fixes canonical home, and explicitly rejects Component B with structural reasoning.

## Phase 1 — Cognitive Anchor Extraction

### Constraints

1. **Lightweight non-negotiable.** No per-output checklist; no scan; no audit step. Maximum cost: one short line per discipline.
2. **Generic / meta-discipline language.**
3. **Placement convention applied** — canonical home + one-line cross-references at non-canonical surfaces; convention itself NOT embedded.
4. **Component A stays.** It's already lightweight and complementary.
5. **Component B explicitly rejected** with structural reasoning (overload AI; per-output scan inappropriate for compute-limited disciplines).
6. **Disciplines remain working documents**, not public artifacts. The convention is about CROSS-SPEC REFERENCES, not about cold-readability for external readers.

### Key Insights

1. **The right intervention is at write-time, not check-time.** Component B was check-time (post-write scan). The lightweight fix is write-time (a one-line writing-style convention informing the runner before output is generated).

2. **One sentence is enough.** The convention can be expressed in a single sentence: name the source on first use of any spec-internal section/component/failure-mode reference. Subsequent uses can be bare.

3. **Cross-spec references are the load-bearing case.** When Critique discusses an Exploration concept (e.g., "Surface-Only Scanning"), the disambiguation matters most. When a discipline discusses its OWN concepts (e.g., Critique discussing its own "Prosecution"), the discipline's own context implies the source. The convention should target cross-spec references explicitly.

4. **Same wording for all disciplines** is cleaner than per-discipline customization. A shared convention across all five disciplines produces consistent output style.

5. **No per-output check.** The runner reads the convention once at discipline startup; it shapes writing behavior. The runner doesn't pause after writing to verify compliance.

### Structural Points

1. **Canonical home: SOLID INSTRUCTIONS section** of each discipline reference spec (e.g., the section after `---- NOW SOLID INSTRUCTIONS START ----` in `homegrown/explore/references/explore.md`). This is where the runner reads actionable instructions before executing the discipline.

2. **Cross-reference: NONE required.** The convention is small enough to live entirely at canonical home; no cross-references at failure modes or other surfaces.

3. **Wording must be self-contained**: short enough to be skimmed in a second; specific enough to inform writing style; generic enough to apply across all five disciplines.

4. **Aggregate cost: 5 lines** (one per discipline). Smallest intervention in the methodology-library refinement series so far.

5. **Component B replacement preserves the prior finding's intent** (reduce ambiguous vocabulary in finding outputs) but moves the intervention from check-time to write-time and from CONCLUDE to disciplines.

### Foundational Principles

1. **Source-side reduction beats destination-side translation when both are cheap.** The disciplines write the vocabulary; intervening at the discipline is closer to the source.

2. **Write-time conventions don't need check-time enforcement.** A writing-style convention shapes output without requiring post-output audit.

3. **Discipline-spec purity** — the convention is runtime-relevant (informs writing); it doesn't embed maintenance-time content (like the prior finding's regex patterns).

4. **Sister-analysis precedent of one-paragraph extensions.** This refinement is even lighter — one line per discipline.

### Meaning-Nodes

1. **First-use parenthetical** — the writing convention's central artifact: a parenthetical clause naming the source spec/discipline/role at the FIRST occurrence of an internally-referential term.
2. **Cross-spec reference** — the trigger condition: when an output names a section/component/failure-mode defined in another discipline's reference spec.
3. **Source-side prevention** — write-time avoidance of ambiguous vocabulary; complements destination-side translation (Component A at CONCLUDE).
4. **Compute load** — the discipline's cognitive budget per run; the fix must not consume measurable additional compute.

## SV2 — Anchor-Informed Understanding

Anchor extraction confirms: ONE shared convention, one sentence per discipline, total ~5 lines. Component A stays. Component B rejected. Cross-references not required.

The shift from SV1: the convention's load-bearing trigger (cross-spec references) is named explicitly; canonical home is identified; aggregate cost confirmed minimal.

## Phase 2 — Perspective Checking

### Technical / Logical Perspective

The convention is mechanically applicable: when writing output, if the runner introduces a term defined in a Homegrown discipline reference spec, the first occurrence carries a parenthetical naming the source. No check step; the runner integrates this into normal writing.

NEW ANCHOR: write-time vs check-time distinction is load-bearing for the lightweight criterion.

### Human / User Perspective

The user's pushback is honored: no regex, no checklist, no scan. The fix is a writing-style preference, not a validation step.

NEW ANCHOR: the user's hypothesis about discipline-level intervention being possible is confirmed.

### Strategic / Long-term Perspective

Long-term: the convention scales — 5 lines of methodology library text vs ~25-30 lines for Component B. Easier to maintain; easier to read; harder to drift.

### Risk / Failure Perspective

Risks:
- **Convention ignored:** the runner may write output without applying the convention. Mitigation: the convention is in SOLID INSTRUCTIONS — the section the runner is most attentive to before executing the discipline.
- **Cross-spec reference recognition:** the runner has to recognize when a term is "defined in another discipline's reference spec." Mitigation: the convention's wording can list the relevant specs explicitly so the runner can check against a small known set.
- **Subjective recognition risk** (the same risk that doomed the prior finding's principle): one might argue this is also subjective. Defense: the recognition cost is a single test ("is this term defined in a Homegrown discipline reference spec?"), not a multi-pattern scan. Lightweight by design.

NEW ANCHOR: subjective-recognition risk is real but ACCEPTED — the alternative (Component B) was the heavy mechanical fix that the user explicitly rejected. The trade-off is intentional.

### Resource / Feasibility Perspective

Implementation cost: ~5 lines aggregate. Smallest in the methodology-library refinement series. Easy to apply; easy to revert.

### Definitional / Consistency Perspective

Consistency check: the convention extends each discipline's SOLID INSTRUCTIONS without contradicting existing instructions. The convention is a writing-style preference, not a process step; it doesn't change WHAT the discipline does, only HOW it phrases its output.

CHECK: does the convention conflict with existing discipline instructions? No — none of the disciplines currently prescribe writing style for cross-spec references.

CHECK: does it conflict with Component A at CONCLUDE? No — Component A handles destination-side translation (when CONCLUDE compiles the finding); the convention handles source-side reduction (when disciplines write output). They compose.

NEW ANCHOR: convention and Component A compose; both lightweight; both at appropriate surfaces.

## SV3 — Multi-Perspective Understanding

Six perspectives confirm:
- **Logical/Technical:** write-time, no check.
- **Human/User:** honors the lightweight constraint.
- **Strategic:** scales well; minimal maintenance.
- **Risk/Failure:** subjective-recognition risk accepted as the lightweight trade-off.
- **Resource/Feasibility:** smallest cost in series.
- **Definitional/Consistency:** extends without contradiction; composes with Component A.

## Phase 3 — Ambiguity Collapse

### Ambiguity 1: Approach 1 (per-discipline wording, customized) vs Approach 2 (shared wording across all disciplines)?

**Strongest counter-interpretation (Approach 1):** each discipline gets customized wording that names its own specific cross-spec terms (e.g., Critique's wording mentions "Probe / Surface-Only Scanning / Coarse Scan from Exploration"). More precise, more concrete examples per discipline.

**Why the counter fails (structural grounds):** customizing per discipline triples the maintenance cost (each new term added to any spec requires updating other disciplines' wording). The shared wording (Approach 2) is generic enough that all disciplines reference "any Homegrown discipline reference spec" and let the runner identify which terms apply at write-time. Generic wording is easier to maintain and consistent across the methodology library.

**Confidence:** HIGH (maintenance cost differential is structural).

**Resolution:** Approach 2 — shared wording across all five disciplines. Single sentence, identical text in each spec's SOLID INSTRUCTIONS section.

### Ambiguity 2: Should the convention live ONLY at the discipline level, or also at CONCLUDE / runner preamble?

**Strongest counter-interpretation:** redundant placement (discipline + CONCLUDE) ensures the convention fires at multiple surfaces.

**Why the counter fails (structural grounds):** CONCLUDE already has Component A (destination-side translation). The discipline-level convention handles source-side reduction. Adding a third placement (e.g., MVL+ runner preamble) duplicates concerns and violates the placement convention's single-canonical-home principle. The two existing placements (Component A at CONCLUDE; new convention at disciplines) cover write-time and compile-time respectively.

**Confidence:** HIGH (placement convention precedent).

**Resolution:** Convention lives ONLY at the discipline level. Component A stays at CONCLUDE. No third placement.

### Ambiguity 3: What's the EXACT wording of the convention?

**Strongest counter-interpretation:** verbose wording with examples baked in.

**Why the counter fails:** every word adds compute load when the runner reads SOLID INSTRUCTIONS. The fix's lightweight criterion demands minimal wording. Examples can live at CONCLUDE (Component A's example list) and serve all disciplines.

**Resolution (concrete wording for Innovation to refine):**

> *"When this output references a named section, component, step, or failure mode that is defined in another Homegrown discipline's reference spec, name the source on first use (e.g., 'the Probe component in Structural Exploration'). Subsequent references can be bare."*

This is one sentence, ~30 words. No examples beyond the one inline; shapes writing without checks.

**Confidence:** HIGH for the shape (one sentence; cross-spec trigger; first-use parenthetical). Innovation will refine the exact words.

### Ambiguity 4: Should the convention require the runner to scan output before terminating?

**Strongest counter-interpretation:** add a one-liner: *"Before terminating, verify cross-spec references have first-use parenthetical context."*

**Why the counter fails:** this is the regression to Component B's check-time approach. The user explicitly rejected check-time; reintroducing a verification step (even one line) defeats the purpose. The convention's effect comes from informing writing behavior, not from post-write audit.

**Confidence:** HIGH (matches the user's explicit constraint).

**Resolution:** NO post-write check. The convention is read once before execution; it shapes writing; that's the entire mechanism.

### Ambiguity 5: Cross-discipline terms vs WITHIN-discipline terms?

**Strongest counter-interpretation:** apply the convention to all named terms (including Critique referencing Critique's own "Prosecution").

**Why the counter fails:** within-discipline references are unambiguous from context (the discipline's own output uses its own vocabulary). The failure shape in `2026-05-07_20-35` was specifically cross-spec (Critique referencing Exploration's Surface-Only Scanning, etc.). Limiting the convention to cross-spec references reduces unnecessary firings and matches the failure evidence.

**Confidence:** HIGH (failure evidence is specifically cross-spec).

**Resolution:** Convention applies ONLY to cross-spec references — terms defined in ANOTHER Homegrown discipline reference spec. Within-discipline references are not covered (they're contextually clear).

## SV4 — Clarified Understanding

After ambiguity collapse:
- **ONE shared sentence**, identical text in all five discipline SOLID INSTRUCTIONS sections.
- Trigger: cross-spec references (terms defined in another discipline's reference spec).
- Action: name the source on first use; subsequent uses bare.
- NO post-write check.
- Component A stays at CONCLUDE.
- Component B REJECTED with explicit structural reasoning.

## Phase 4 — Degrees-of-Freedom Reduction

### Fixed

1. ONE convention, ONE sentence, FIVE placements (one per discipline).
2. Canonical home: SOLID INSTRUCTIONS section of each discipline reference spec.
3. Trigger: cross-spec references.
4. Action: first-use parenthetical naming the source.
5. NO post-write check.
6. Component A at CONCLUDE: stays.
7. Component B at CONCLUDE: REJECTED.
8. No cross-references at non-canonical surfaces (the rule is small enough to live entirely at canonical home).

### Eliminated

1. Per-discipline customized wording (Approach 1).
2. Verbose wording with examples baked in.
3. Post-write check / verification step.
4. Triple placement (discipline + CONCLUDE + runner).
5. Within-discipline term coverage.
6. The original Component B (heavy mechanical check at CONCLUDE).

### Remaining

1. Concrete final wording for Innovation to lock in.

## SV5 — Constrained Understanding

The constrained answer:

- **Convention** = one-sentence writing-style preference applied to cross-spec references, in each discipline's SOLID INSTRUCTIONS section.
- **Innovation's job:** finalize concrete wording (one sentence, ~30 words).
- **Critique's job:** verify against lightweight criterion + verify the convention catches the observed failures + verify Component B rejection is structurally justified.

## Phase 5 — Conceptual Stabilization

### Stable Model

```
For-sure missing from each Homegrown discipline reference spec:
ONE shared sentence in SOLID INSTRUCTIONS.

CONVENTION — Cross-spec reference disambiguation
  Where: SOLID INSTRUCTIONS section of EACH of the 5 discipline reference
         specs (homegrown/explore/.../explore.md;
         homegrown/sense-making/.../sensemaking.md;
         homegrown/decompose/.../decompose.md;
         homegrown/innovate/.../innovate.md;
         homegrown/td-critique/.../td-critique.md)
  Trigger: writing output that references a named section, component,
           step, or failure mode defined in ANOTHER Homegrown discipline's
           reference spec
  Action: name the source on first use; subsequent uses can be bare
  Cost: 1 sentence per discipline × 5 disciplines = ~5 lines aggregate
  Cross-references: NONE required

PRESERVED FROM PRIOR FINDING (2026-05-07_22-10):
  Component A at homegrown/protocols/conclude.md — expanded examples in
  the existing non-ambiguity principle's example list (4 examples, lines
  in the existing principle paragraph). Already-applicable lightweight
  destination-side translation.

REJECTED FROM PRIOR FINDING:
  Component B at homegrown/protocols/conclude.md — regex sub-section
  with patterns + first-use checklist + remediation. Heavy mechanical
  check at CONCLUDE; overloads AI with check work the convention can
  prevent at source.

CASCADE:
  Source-side prevention (convention at disciplines) reduces ambiguous
  vocabulary in discipline outputs.
  Destination-side translation (Component A at CONCLUDE) catches what
  slips through, with a 4-example pattern teaching list.
  Both lightweight; both composed.
```

### Action Framework

```
Decomposition: partition into pieces (Convention wording + Per-discipline
               placement + Component B rejection rationale + Per-failure
               verification + Composition with Component A).

Innovation: finalize concrete wording for the convention.

Critique: verify lightweight criterion + verify catches observed failures
          + verify Component B rejection is structurally justified +
          verify composition with Component A is clean.
```

## SV6 — Stabilized Model

The prior `2026-05-07_22-10` finding is refined: its Component A (4 expanded examples in the non-ambiguity principle's example list at `homegrown/protocols/conclude.md`) stays as the destination-side translation layer. Its Component B (regex sub-section with patterns + first-use checklist + remediation, also at `conclude.md`) is REJECTED as too heavy — it overloaded the runner with per-output scan work that defeats the AI's compute budget and was incompletely mechanizable (Pattern 2 and Pattern 3 required semantic judgment that pure regex couldn't express).

In Component B's place, the refined fix adds a single shared sentence to the SOLID INSTRUCTIONS section of each of the five discipline reference specs (Structural Exploration, Sensemaking, Decomposition, Innovation, Critique). The sentence prescribes a writing-style convention: when an output references a named section, component, step, or failure mode defined in ANOTHER Homegrown discipline's reference spec, name the source on first use; subsequent uses can be bare. The convention applies ONLY to cross-spec references (within-discipline references are contextually clear).

Cost: ~5 lines aggregate (one sentence per discipline). No post-write check; no scan; no checklist; no audit step. The convention is read once before discipline execution and shapes writing behavior throughout.

Verification: the 10+ observed failures from `2026-05-07_20-35`'s finding (definite-article references to spec-internal sections + bare title-case noun phrases) all involved cross-spec references — Critique referencing Exploration concepts; Sensemaking referencing Critique failure modes; etc. The convention directly addresses these at write-time. Component A at CONCLUDE catches anything that slips through.

Composition: source-side prevention + destination-side translation = lightweight cascade. Total methodology-library cost: 5 lines (discipline-level convention) + 4 examples (Component A at CONCLUDE) ≈ ~10-15 lines aggregate, vs. Component B's ~25-30 lines + per-output scan overhead.

The shift from SV1: convention wording shape decided (shared, one sentence, cross-spec trigger only); placement decided (SOLID INSTRUCTIONS at each discipline; not at CONCLUDE; not at runner); composition with Component A confirmed clean. Total intervention is the smallest in the methodology-library refinement series.
