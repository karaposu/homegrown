# Critique: Explore Discipline - Definite Gaps From Corpus Evidence

## User Input

Innovation produced TWO for-sure-missing rules: R1 (Type-Aware Probe Rule, extending Surface-Only Scanning prevention) and R2 (Contextual Surround Pre-Scan Rule, extending Premature Depth prevention). Cross-cutting requirements (for-sure criterion + generic framing + extension principle) bound both. Speculative additions (provenance tracking, operation-shape stability, vocabulary tracking) explicitly rejected. Critique evaluates each.

## Phase 0 — Dimensions With Weights

### 1. Evidence Strength - 30%

Pass: HIGH multi-source corpus evidence per rule. **Critical dimension.** The user's "for-sure" criterion is satisfied only when the rule has demonstrable before/after contrast in the chain findings.

- R1: chain 1 M2 verbatim (primary cause; HIGH) + chain 6 Cycle 4 reinforcement (cross-chain support). Cross-chain count: 2.
- R2: chain 2 N1 verbatim (primary cause; HIGH) + explicit before/after contrast in prior + corrected exploration outputs. Cross-chain count: 1 (but with explicit before/after contrast).

### 2. Generic / Meta-Discipline Framing - 20%

Pass: rule wording uses structural-exploration vocabulary; no project-specific terms. **Critical dimension** per user's explicit instruction ("changes should be generic and meta defined bc this is a thinking discipine").

- R1: scan, probe, candidate, quantifiable claim, stabilized candidate set, Surface-Only Scanning. All generic.
- R2: territory, contextual surround layer, coarse scan, inquiry-specific objects, Premature Depth. All generic.

### 3. Extension-Not-Replacement Principle - 15%

Pass: rule extends existing failure-mode prevention without contradicting or replacing. Critical for compatibility with existing explore.md structure.

- R1: extends Surface-Only Scanning's "probe at least one signal" with "probe quantifiable claims specifically." Does not replace.
- R2: extends Premature Depth's "complete at least one coarse scan before probing" with "the coarse scan must include the surround layer when present." Does not replace.

### 4. Recognition-Trigger Specificity - 15%

Pass: rule has observable trigger that prevents over-firing. **Critical dimension** per Innovation's mitigation discussion.

- R1: "carries a LOAD-BEARING quantifiable claim" — load-bearing qualifier mitigates over-firing. Observable in candidate text.
- R2: "territory has an IDENTIFIABLE contextual surround layer" — identifiable qualifier mitigates over-firing. Observable when scanning the territory.

### 5. Implementation Cost / Reversibility - 10%

Pass: one-paragraph extensions; trivially reversible.

- R1: one paragraph in Probe section + one paragraph in Surface-Only Scanning prevention.
- R2: one paragraph in Scan section + one paragraph in Premature Depth prevention + one note in Resolution Progression's Coarse Scan step.

### 6. Composition With Existing Structure - 10%

Pass: rule composes cleanly with existing components / failure modes / process steps.

- R1: composes with Probe component, Surface-Only Scanning failure mode, Possibility Mode + Artifact Mode.
- R2: composes with Scan component, Premature Depth failure mode, Resolution Progression.

**Critical dimensions:** Evidence Strength, Generic / Meta-Discipline Framing, Recognition-Trigger Specificity.

### Dimension Validation

These dimensions match the user's explicit goal: (a) for-sure missing per evidence (Evidence Strength); (b) generic / meta-defined (Generic Framing); (c) addition that makes runs measurably more robust (Recognition-Trigger Specificity, Implementation Cost, Composition). The dimensions cover the user's full ask.

Cross-reference against Sensemaking perspectives: technical/logical (Evidence Strength), human/user (Generic Framing — the user explicitly asked), strategic/long-term (Composition + Implementation Cost), risk/failure (Recognition-Trigger Specificity), resource/feasibility (Implementation Cost), definitional/consistency (Extension-Not-Replacement). All 6 Sensemaking perspectives have a corresponding Critique dimension. No dimension blindness.

## Phase 1 — Fitness Landscape

### Viable Region

Rules that:
- Have multi-source corpus evidence (cross-chain reinforcement OR explicit before/after contrast).
- Use generic / meta-discipline vocabulary.
- Extend existing structures without replacing.
- Have observable recognition triggers with load-bearing / identifiable qualifiers.
- Are one-paragraph in size.
- Compose with existing components / failure modes.

### Dead Region

Rules that:
- Are speculative ("might improve" rather than "definitely missing per evidence").
- Use project-specific vocabulary (navigation, route memory, codebase paths).
- Replace existing structures or introduce new failure modes without strong evidence.
- Have judgment-only triggers without load-bearing / identifiable qualifiers.
- Are multi-section restructurings rather than one-paragraph extensions.
- Conflict with existing components / failure modes.

### Boundary Region

Rules that:
- Have HIGH primary-cause evidence at single chain (no cross-chain reinforcement). R2 sits here — single-chain evidence with strong before/after contrast.
- Are extensions but might be re-readable as replacements (linguistic ambiguity). Both R1 and R2 sit here at small risk.
- Have triggers that need disambiguation (what counts as "load-bearing"? what counts as "identifiable"?).

### Unexplored Region

- Provenance tracking, operation-shape stability, vocabulary tracking — all REJECTED in Innovation; not in this evaluation.
- New SIC-shaped components (e.g., a TERRITORY-MODEL component separate from Scan/Probe) — possible long-horizon refactor; not in scope.
- New failure modes (e.g., Layer-Blindness as a 7th failure mode) — REJECTED in Sensemaking Ambiguity 2; not in this evaluation.

## Phase 2 — Candidate Evaluation

### Candidate R1 — Type-Aware Probe Rule

**Prosecution:**

R1 introduces a NEW concept (type-aware probing) that didn't exist in current explore.md. The cognitive load on the runner grows — they have to identify whether a candidate carries a quantifiable claim AND whether the claim is load-bearing. The "load-bearing" qualifier is judgment-dependent ("whose answer determines whether the candidate stabilizes" — what counts as "determines"?).

Cross-chain evidence is at 2 chains (chain 1 + chain 6). Two chains is meaningful but not many; future chains might surface refinements.

The rule covers BOTH artifact and possibility modes — generalization beyond chain 1's primary evidence (which was possibility mode). Even though chain 6 reinforces in artifact mode, the artifact-mode case is reinforcement, not primary cause.

The rule says "at least one empirical probe" — minimum threshold; could be over-fired if the runner probes trivially (one quick check rather than a thorough probe).

**Defense:**

The "load-bearing" qualifier is grounded in chain 1's evidence: chain 1's M2 specifically named "discovery cost every run" as a quantifiable claim that, if probed, would have determined whether Candidate E stabilized. This was THE load-bearing claim, not a trivial one. The qualifier captures the chain-1 pattern correctly.

Both modes are evidenced: chain 1 (possibility mode) + chain 6 (artifact mode). The pattern is observably mode-agnostic. Restricting to one mode would leave the same pattern uncatchable in the other mode.

The rule extends Surface-Only Scanning prevention — does not replace it. The general "probe at least one signal" rule still applies; R1 strengthens it for quantifiable claims specifically. Compatibility is preserved.

The rule's recognition trigger is observable: a candidate's text either contains a quantifiable claim or it doesn't. The runner can mechanically check.

The cost is trivial: one paragraph in Probe section + one paragraph in Surface-Only Scanning prevention. Implementation is straightforward.

The rule is domain-agnostic: no project-specific terms; uses only structural-exploration vocabulary.

**Collision:**

The prosecution's "cognitive load" objection is real but bounded. The load-bearing qualifier is observable in the same way "is there a quantifiable claim?" is observable. The runner doesn't have to make subjective judgments — they check whether the claim's answer would determine stabilization (an observable property of the candidate's role in the inventory).

The prosecution's "two chains is not many" is real but not dispositive. Two chains × cross-mode pattern (possibility + artifact) is stronger than one-chain-only. The rule's evidence base satisfies the for-sure criterion (multi-source convergence with clear before/after contrast).

The prosecution's "over-firing risk" is real but mitigated by the load-bearing qualifier.

**Dimensions:**

- Evidence Strength: HIGH (chain 1 primary + chain 6 cross-mode reinforcement).
- Generic / Meta-Discipline Framing: HIGH (no project-specific terms; uses structural-exploration vocabulary).
- Extension-Not-Replacement Principle: HIGH (extends Surface-Only Scanning; does not replace).
- Recognition-Trigger Specificity: HIGH (load-bearing qualifier + observable claim type).
- Implementation Cost: LOW (one paragraph at each surface).
- Composition: HIGH (composes with Probe + Surface-Only Scanning + both modes).

**Verdict: SURVIVE.**

Constructive output:

ADD to `homegrown/explore/references/explore.md` as a one-paragraph extension at TWO surfaces: (1) Probe section, after the existing "A good probe:" bullets; (2) Surface-Only Scanning failure mode, after the existing "How to prevent" sentence. Risk class: low. Evaluation gate: in next 3 MVL+ runs producing candidates with load-bearing quantifiable claims, the rule fires (an empirical probe of the quantifiable claim is run before the candidate stabilizes).

### Candidate R2 — Contextual Surround Pre-Scan Rule

**Prosecution:**

R2 introduces a NEW concept (territory layers — surround vs inquiry-specific) that didn't exist in current explore.md. The cognitive load on the runner grows — they have to identify whether a territory has a contextual surround layer.

Single-chain evidence (chain 2 N1 only). Future chains might not show the same pattern in different territory types. The N1 wording was project-specific (named Homegrown's specific cultural-norm files); generalizing to "any contextual surround layer" extends the scope beyond the primary evidence.

The "identifiable" qualifier is judgment-dependent — what makes a surround "identifiable"? The runner has to decide.

The rule's domain examples (codebases / solution spaces / any territory) are illustrative but might not match all territories cleanly.

**Defense:**

Single-chain primary-cause evidence with explicit before/after contrast meets the for-sure criterion, per Sensemaking Ambiguity 1's resolution. The criterion does not require cross-chain count when a single chain shows clear before/after contrast in a structurally observable way.

The N1 wording's project-specificity (naming Homegrown's specific files) is an artifact of the chain-2 finding; the underlying pattern (coarse scan omitted contextual surround layer) is mode-agnostic and territory-agnostic. The generic reframing captures the underlying pattern correctly.

The "identifiable" qualifier mitigates over-firing. If the runner cannot identify a contextual surround layer in the territory, the rule doesn't fire. This is observable: either the territory has an obvious surround (e.g., codebase has documented protocols / contracts; solution space has constraint frame) or it doesn't.

The domain examples (codebases, solution spaces, any territory) are illustrative; they show the rule's range without claiming exhaustive coverage. Future territory types can be accommodated by the generic predicate.

The rule extends Premature Depth prevention — does not replace it. The general "complete one coarse scan before probing" rule still applies; R2 specifies what BREADTH means when there's a surround.

The cost is trivial: one paragraph in Scan section + one paragraph in Premature Depth prevention + one note in Resolution Progression. Implementation is straightforward.

The rule is domain-agnostic in framing (the trigger is "territory has a surround layer," not "territory is a codebase").

**Collision:**

The prosecution's "single-chain evidence" is real but mitigated by the for-sure criterion's resolution: explicit before/after contrast at a single chain satisfies the criterion. Sensemaking Ambiguity 1 resolved this explicitly.

The prosecution's "judgment-dependent identifiable" is real but bounded. The runner can mechanically check: "does this territory have a layer that ESTABLISHES MEANING for the inquiry-specific objects within it?" If yes, the rule fires. The mechanism is observable.

The prosecution's "domain examples might not match all territories" is real but not dispositive. The illustrative examples cover the most common cases; the generic predicate handles edge cases.

**Dimensions:**

- Evidence Strength: HIGH (single-chain primary cause with explicit before/after contrast in prior + corrected exploration outputs; meets for-sure criterion per Sensemaking Ambiguity 1's resolution).
- Generic / Meta-Discipline Framing: HIGH (territory + contextual surround layer + coarse scan + inquiry-specific objects + Premature Depth — all generic vocabulary).
- Extension-Not-Replacement Principle: HIGH (extends Premature Depth; does not replace).
- Recognition-Trigger Specificity: MEDIUM-HIGH (identifiable qualifier observable but slightly more judgment-dependent than R1's load-bearing qualifier).
- Implementation Cost: LOW (one paragraph at each of three surfaces — Scan, Premature Depth, Resolution Progression).
- Composition: HIGH (composes with Scan + Premature Depth + Resolution Progression's Coarse Scan).

**Verdict: SURVIVE.**

Constructive output:

ADD to `homegrown/explore/references/explore.md` as a one-paragraph extension at THREE surfaces: (1) Scan section, after the existing "A good scan:" bullets; (2) Premature Depth failure mode, after the existing "How to prevent" sentence; (3) Resolution Progression's Coarse Scan step, as a clarifying note. Risk class: low-medium. Evaluation gate: in next 3 MVL+ runs scanning territories with an identifiable contextual surround layer, the rule fires (the coarse scan includes items from the surround layer before going deep on inquiry-specific objects).

### Candidate REJECTED-1 — Provenance Tracking (Filtered)

**Prosecution:** No primary-cause evidence in the corpus; speculative.

**Defense:** None constructed.

**Verdict: REJECT (filtered).** Documented in F (filtered speculative additions).

### Candidate REJECTED-2 — Operation-Shape Stability Check (Filtered)

**Prosecution:** Chain 7 deferred this candidate (U9) explicitly with operational-shape evidence revival trigger; chain 7's evidence was one cycle of jump-scan reasoning, not multi-loop direct observation. Insufficient evidence.

**Defense:** None constructed.

**Verdict: REJECT (filtered).** Documented in F.

### Candidate REJECTED-3 — Vocabulary Tracking (Filtered)

**Prosecution:** Sensemaking-side concern (chain 7 U1), not Exploration-side. Does not apply to explore.md.

**Defense:** None constructed.

**Verdict: REJECT (filtered).** Documented in F.

## Phase 3.5 — Assembly Check

The strongest assembly:

```text
RULE 1 (Type-Aware Probe Rule, Surface-Only Scanning extension)
  + RULE 2 (Contextual Surround Pre-Scan Rule, Premature Depth extension)
  + Cross-cutting requirements (for-sure criterion + generic framing + extension principle)
  + Filtered speculative additions documented as REJECTED
```

Emergent value:

- **R1 + R2 are orthogonal extensions** at different surfaces (Probe vs Scan; Surface-Only Scanning vs Premature Depth). Together they patch two distinct gaps in the existing failure-mode prevention rules.
- **Both rules use generic / meta-discipline vocabulary** — domain-agnostic, fit for a thinking discipline that works across codebases, solution spaces, business landscapes, etc.
- **Both rules are extensions** — preserve existing structure; do not introduce new failure modes; do not replace existing rules.
- **The for-sure criterion's filtering effect** — three speculative additions are explicitly rejected; the user gets exactly what they asked for: minimal high-leverage gaps, not a long speculative list.
- **Cost is minimal** — two rules × ~one paragraph each = two paragraphs of explore.md change.

The assembly's milestone: this is the first inquiry to apply LOOP_DIAGNOSE-style cross-chain pattern observation to a thinking-discipline spec at the for-sure-criterion level. The methodology is replicable for sensemaking, decompose, innovate, td-critique specs.

Assembly verdict: SURVIVE.

Refinements required before implementation:

- R1 must explicitly cite chain 1 M2 verbatim + chain 6 Cycle 4 reinforcement.
- R2 must explicitly cite chain 2 N1 verbatim + before/after contrast.
- Both rules must specify exact placement in explore.md's existing structure.
- Both rules must include the load-bearing / identifiable qualifier.
- Filtered speculative additions must be documented in F section of finding.

## Phase 3 — Ranked Verdicts

1. **SURVIVE: R1 — Type-Aware Probe Rule.** HIGH evidence (cross-chain support across chains 1+6); HIGH generic framing; HIGH extension principle; HIGH recognition trigger; LOW cost; HIGH composition. Strongest candidate.

2. **SURVIVE: R2 — Contextual Surround Pre-Scan Rule.** HIGH evidence (single-chain primary cause with explicit before/after contrast); HIGH generic framing; HIGH extension principle; MEDIUM-HIGH recognition trigger; LOW cost; HIGH composition. Slightly weaker than R1 on cross-chain count but meets for-sure criterion.

3. **REJECT: Provenance tracking.** No primary-cause evidence; speculative.

4. **REJECT: Operation-shape stability check.** Chain 7 deferred this; jump-scan single-cycle evidence insufficient.

5. **REJECT: Vocabulary tracking.** Sensemaking-side, not Exploration-side; does not apply.

## Coverage Map

Evaluated:
- R1, R2 (the two for-sure-missing rules from Innovation).
- 3 rejected speculative additions (filtered).
- Assembly check confirming orthogonality + emergent value.

Unexplored but not blocking:
- New SIC-shaped components (TERRITORY-MODEL component, etc.) — long-horizon refactor; out of scope.
- New failure modes (e.g., Layer-Blindness) — Sensemaking Ambiguity 2 resolved against this; out of scope.
- Refinement of existing failure modes (e.g., Premature Depth definition itself) — out of scope.
- Cross-discipline rules (rules that apply at multiple thinking-discipline specs) — out of scope.

Coverage judgment:

Sufficient. Two clean SURVIVORS; three explicit REJECTIONS with reasoning; assembly check confirms emergent value; for-sure criterion applied throughout. No coverage gaps adjacent to viable regions.

## Signal

TERMINATE with ranked survivors:

1. **SURVIVE: R1** — Type-Aware Probe Rule (Surface-Only Scanning extension).
2. **SURVIVE: R2** — Contextual Surround Pre-Scan Rule (Premature Depth extension).

3-5: REJECTED additions documented in F.

The user's question is answered: TWO for-sure-missing pieces from explore.md are identified, evidenced by the corpus, expressed in generic / meta-discipline language, with specific placement in explore.md's existing structure, with concrete evaluation gates. Speculative additions are explicitly rejected.

## Convergence Telemetry

Dimension coverage: complete. All three critical dimensions (Evidence Strength, Generic / Meta-Discipline Framing, Recognition-Trigger Specificity) evaluated for every candidate.

Adversarial strength: STRONG. Strongest objections constructed for each candidate (cognitive load + over-firing for R1; single-chain evidence + judgment-dependent identifiable qualifier for R2; no defense for the rejected candidates because they failed prosecution at the for-sure criterion level).

Landscape stability: STABLE. The viable region is consistent: multi-source corpus evidence + generic framing + extension principle + observable trigger + low cost + composition with existing structure. Both surviving rules are clearly inside the viable region.

Clean SURVIVE exists: yes; both R1 and R2.

Failure modes observed: none.
- Wrong dimensions avoided (Evidence Strength + Generic Framing + Recognition-Trigger Specificity match user's explicit ask).
- Rubber-stamping avoided (R1 and R2 each survive STRONG prosecution; rejected candidates explicitly rejected with reasoning).
- Nitpicking avoided (multiple SURVIVORS; concrete actionable verdicts).
- Dimension blindness avoided (6 dimensions cover the user's "for-sure," "generic," "definitely missing" criteria).
- False convergence avoided (assembly check confirmed orthogonality; the two rules are not redundant).
- Evaluation drift avoided (dimensions held constant; weights constant).
- Self-reference collapse avoided (external reference points: corpus chain findings, current explore.md text, user's explicit instruction).

Overall: PROCEED.
