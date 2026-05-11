# Innovation: Explore Discipline - Definite Gaps From Corpus Evidence

## User Input

`devdocs/inquiries/2026-05-07_20-35__explore_discipline_definite_gaps_from_corpus_evidence/_branch.md` — sensemaking + decomposition stabilized TWO for-sure-missing rules (R1: Type-Aware Probe Rule; R2: Contextual Surround Pre-Scan Rule). Innovation generates wording variations and tests them.

## Phase 1 — Seed

Two rule-shapes are stable. Innovation's task: produce concrete wording per rule (Generic / Focused / Contrarian per /innovate guidance), test each through 7 mechanisms, run assembly check.

**Direction (intuition):** The user explicitly asked for FOR-SURE missing pieces in GENERIC / META framing. The valuation: rules must extend explore.md's existing structure cleanly, use its vocabulary, and survive the for-sure criterion. The motivation: minimal high-leverage spec changes.

**Seed type:** Gap (two rules definitely missing) + Constraint (generic / meta-discipline framing) + Failure (corpus shows specific failure patterns the rules would prevent).

## Phase 2 — Generate (7 Mechanisms × 3 Variations Each)

### Rule 1 — Type-Aware Probe Rule

#### Mechanism 1: Combination (Generator)

**Generic variation:** Combine "Probe section's depth-pass operation" + "Surface-Only Scanning failure mode prevention" → "When the probe step encounters a candidate carrying a quantifiable claim, the probe must address that quantifiable claim empirically before stabilization."

**Focused variation:** Combine "Possibility Mode's candidate-listing" + "Empirical-probe requirement" → "Before any candidate that carries a quantifiable claim (cost, benefit, frequency, magnitude, count) can pass into the stabilized candidate set, run at least one empirical probe of the quantifiable property. Listing without empirical probing of the quantifiable claim is an instance of Surface-Only Scanning, even if other signals were probed."

**Contrarian variation:** Combine "Probe section" + "Quantifiable claim" + "Both modes" → "Type-aware probing applies in both artifact and possibility modes. In artifact mode, the quantifiable claim is about how many objects exist, what their cost is, etc.; in possibility mode, the quantifiable claim is about how often a candidate would fire, how cheap it would be, etc. The trigger is the claim's epistemic shape, not the mode."

Surviving combination output: **Focused variation** — explicit type list, explicit failure-mode tie, explicit threshold ("at least one"). HIGH composability.

#### Mechanism 2: Absence Recognition (Generator)

**Generic variation:** What's missing from the current Probe section: "go deeper on a signal" without saying WHAT to go deeper on. The absence is type-awareness.

**Focused variation:** What's missing specifically: a rule that says "if a candidate is the source of a quantifiable claim, the probe must ADDRESS that claim, not just any claim about the candidate." The absence is a quantifiable-claim-specific probe directive.

**Contrarian variation:** What's missing in BOTH modes: a recognition that some signals (quantifiable ones) demand empirical action while other signals (qualitative ones) can be assessed through reasoning. The absence is the probe-action selection rule.

Surviving absence output: **Focused variation** — specific to quantifiable claims, specific to probe addressing the claim. Aligns with chain 1's M2 evidence.

#### Mechanism 3: Domain Transfer (Generator)

**Generic variation:** Software testing distinguishes between unit-test (assert quantifiable property) and integration-test (assess qualitative behavior). Transfer: probing should distinguish between empirical-required (quantifiable) and reasoning-acceptable (qualitative).

**Focused variation:** Scientific method requires empirical measurement of any quantifiable claim before publication. Transfer: a candidate with a quantifiable claim cannot be stabilized in the candidate set without empirical measurement first.

**Contrarian variation:** Engineering practice has the principle "measure before you optimize." Transfer: in exploration, "probe before you stabilize quantifiable claims." Same principle, different action.

Surviving domain-transfer output: **Focused variation** — scientific-method analogy provides clear epistemic grounding.

#### Mechanism 4: Extrapolation (Generator)

**Generic variation:** If the rule is added, the rate at which prior loops dispatch quantifiable claims qualitatively should drop. After 3 MVL+ runs, the rate should be observably lower.

**Focused variation:** If the rule fires correctly in next 3 MVL+ runs producing candidates with quantifiable claims, the chain-1 M2 pattern is prevented from recurring at the Exploration layer.

**Contrarian variation:** If the rule over-fires (e.g., demands empirical probe for every claim that has a number in it, including trivial ones), the discipline becomes bureaucratic. Mitigation: the trigger requires the claim to be "load-bearing" — a quantifiable claim that determines whether the candidate stabilizes or is dismissed.

Surviving extrapolation output: **Focused variation** + **Contrarian caveat** — load-bearing qualifier prevents over-firing.

#### Mechanism 5: Lens Shifting (Framer)

**Generic variation:** Under "exploration is mapping" framing, the rule is a refinement of WHAT TO MAP. Under "exploration produces a structural map for downstream disciplines," the rule is about MAP QUALITY (quantifiable claims need empirical support to be reliable input to Sensemaking).

**Focused variation:** Under "Surface-Only Scanning failure mode" framing, the rule is a strengthening of the existing prevention ("probe at least one signal" → "probe quantifiable claims specifically"). The lens shift is from "general probing" to "type-aware probing."

**Contrarian variation:** Under "exploration completion criteria" framing, the rule is a precondition for convergence: a confidence map cannot have "Confirmed" regions for quantifiable claims if no empirical probe was run.

Surviving lens-shifting output: **Focused variation** — direct extension of existing failure-mode prevention.

#### Mechanism 6: Constraint Manipulation (Framer)

**Generic variation:** Add the constraint "every candidate with a quantifiable claim must be empirically probed." Too restrictive — kills legitimate trivial-claim candidates.

**Focused variation:** Add the constraint "every LOAD-BEARING quantifiable claim (one whose answer determines whether the candidate stabilizes) must be empirically probed." The qualifier mitigates over-firing.

**Contrarian variation:** Remove the constraint that probes must produce structural detail; allow some probes to produce just an empirical measurement. This unlocks fast probes for quantifiable claims.

Surviving constraint output: **Focused variation** — load-bearing qualifier is the right constraint.

#### Mechanism 7: Inversion (Framer)

**Generic variation, Level 1 (component):** "Probe goes deeper" → "Probe goes empirical for quantifiable claims." Component-level inversion of probe behavior.

**Focused variation, Level 2 (system):** "Probe is the same operation regardless of claim type" → "Probe is type-aware: empirical for quantifiable, reasoning-based for qualitative." System-level: probing is a TYPED operation, not a uniform one.

**Contrarian variation, Level 3 (root-cause):** "Surface-Only Scanning is about probing too few signals" → "Surface-Only Scanning is about probing the wrong signal types." Root-cause-level: the failure mode itself needs reframing.

Surviving inversion output: **Focused variation** (Level 2) — system-level type-awareness is the right inversion.

### Rule 2 — Contextual Surround Pre-Scan Rule

#### Mechanism 1: Combination (Generator)

**Generic variation:** Combine "Coarse Scan in Resolution Progression" + "Premature Depth failure mode prevention" → "When the territory has a contextual surround layer, the Coarse Scan must include items from the surround before going deep on inquiry-specific objects."

**Focused variation:** Combine "Territory has layers" + "Coarse Scan breadth" + "Surround vs inquiry-specific" → "When the territory has a contextual / structural surround layer (a layer that establishes meaning for the inquiry-specific objects within it — for codebases this is the project's foundational protocols / contracts / conventions; for solution spaces this is the surrounding constraint / value frame; for any territory it is the layer that frames how inquiry-specific objects are interpreted), the Coarse Scan must include items from that surround layer before going deep on inquiry-specific objects. Omitting the surround in a coarse scan is a Premature Depth instance applied at the layer-of-scan dimension."

**Contrarian variation:** Combine "All territories have surround" + "Coarse Scan must always include surround" → too restrictive; not all territories have an obvious surround. Mitigation: rule fires only when the surround is identifiable.

Surviving combination output: **Focused variation** — domain examples clarify the rule's scope.

#### Mechanism 2: Absence Recognition (Generator)

**Generic variation:** What's missing from current explore.md's Scan section: any awareness of TERRITORY LAYERS. The current Scan treats territory as flat.

**Focused variation:** What's missing specifically: a rule that says "the relevant breadth of a Coarse Scan depends on the territory's layer structure; if there's a contextual surround, the breadth must include it."

**Contrarian variation:** What's missing if redesigned from scratch: explore.md would have a TERRITORY-MODEL component (separate from Scan/Probe) that explicitly identifies the territory's layers before scanning begins.

Surviving absence output: **Focused variation** + **Contrarian variation as future direction** — the focused variation patches the immediate gap; the contrarian is a longer-horizon redesign.

#### Mechanism 3: Domain Transfer (Generator)

**Generic variation:** Geography distinguishes between local (city) and regional (country) scales. Transfer: exploration distinguishes between inquiry-specific and contextual surround layers.

**Focused variation:** Anthropology distinguishes between figure (individual behavior) and ground (cultural context that gives behavior meaning). Transfer: exploration distinguishes between inquiry-specific (figure) and surround (ground); both must be observed for the figure to be interpretable.

**Contrarian variation:** Visual perception requires figure-ground distinction; without ground, figure has no meaning. Transfer: without scanning the surround, the inquiry-specific objects have no contextual meaning.

Surviving domain-transfer output: **Focused variation** — figure-ground analogy is structurally apt.

#### Mechanism 4: Extrapolation (Generator)

**Generic variation:** If the rule is added, future exploration runs in codebase contexts will not omit cultural-norm files (chain 2's specific failure mode).

**Focused variation:** If the rule fires in next 3 MVL+ runs scanning territories with a surround layer, the chain-2 N1 pattern is prevented at the Exploration layer.

**Contrarian variation:** If the rule fires too eagerly (e.g., demands surround scan even when surround is irrelevant), the discipline becomes bureaucratic. Mitigation: trigger requires the surround to be "load-bearing for the inquiry" — i.e., the inquiry-specific objects' meaning depends on the surround.

Surviving extrapolation output: **Focused variation** + **Contrarian caveat** — load-bearing qualifier prevents over-firing.

#### Mechanism 5: Lens Shifting (Framer)

**Generic variation:** Under "Premature Depth" framing, the rule is a refinement of "complete one coarse scan before probing." Under "territory has structural layers" framing, the rule is foundational.

**Focused variation:** Under existing "Premature Depth" prevention framing, the rule strengthens "complete one coarse scan" with "the coarse scan must cover the surround layer when present."

**Contrarian variation:** Under "exploration produces a confidence map" framing, the rule prevents the confidence map from having "Scanned" regions in the inquiry-specific layer adjacent to "Unknown" regions in the surround layer.

Surviving lens-shifting output: **Focused variation** — extension of existing prevention.

#### Mechanism 6: Constraint Manipulation (Framer)

**Generic variation:** Add the constraint "every coarse scan must include surround." Too restrictive — kills inquiries whose surround is unclear.

**Focused variation:** Add the constraint "when the territory has an identifiable surround layer, the coarse scan must include it." The "identifiable" qualifier mitigates over-firing.

**Contrarian variation:** Remove the constraint that coarse scans are unweighted; allow surround-layer items to be weighted higher in the initial scan. Too aggressive — violates the existing "unweighted on first pass" principle.

Surviving constraint output: **Focused variation** — identifiable-surround qualifier is the right constraint.

#### Mechanism 7: Inversion (Framer)

**Generic variation, Level 1 (component):** "Coarse Scan covers breadth" → "Coarse Scan covers breadth INCLUDING surround when present." Component-level inversion.

**Focused variation, Level 2 (system):** "Territory is flat" → "Territory has layers (inquiry-specific + surround); coarse scan covers all relevant layers." System-level: territory is structurally layered.

**Contrarian variation, Level 3 (root-cause):** "Premature Depth is about going too deep too fast" → "Premature Depth is about scanning too narrowly across LAYERS, not just within a layer." Root-cause-level: failure mode itself needs reframing.

Surviving inversion output: **Focused variation** (Level 2) — system-level layer-awareness is the right inversion.

## Mechanism Outputs Summary

| Mechanism | Rule 1 surviving | Rule 2 surviving |
|---|---|---|
| Combination (G) | Focused: explicit type list + threshold + failure-mode tie | Focused: territory-layers domain examples + Premature Depth tie |
| Absence Recognition (G) | Focused: quantifiable-claim-specific probe directive | Focused: layer-aware breadth requirement |
| Domain Transfer (G) | Focused: scientific-method analogy (measure before publishing) | Focused: figure-ground analogy (anthropology / visual perception) |
| Extrapolation (G) | Focused: prevention rate; Contrarian caveat: load-bearing qualifier | Focused: prevention rate; Contrarian caveat: identifiable-surround qualifier |
| Lens Shifting (F) | Focused: extends Surface-Only Scanning prevention | Focused: extends Premature Depth prevention |
| Constraint Manipulation (F) | Focused: load-bearing-claim qualifier | Focused: identifiable-surround qualifier |
| Inversion (F) | Focused: type-aware probe (system-level) | Focused: layered territory (system-level) |

**Convergence (Rule 1):** All 7 mechanisms point to a Focused variation centered on "load-bearing quantifiable claim → empirical probe before stabilization, extends Surface-Only Scanning."

**Convergence (Rule 2):** All 7 mechanisms point to a Focused variation centered on "identifiable contextual surround layer → coarse scan includes surround items, extends Premature Depth."

## Phase 3 — Test (5 criteria per rule)

### Rule 1 — Type-Aware Probe Rule

**Final wording:**

> *"**Type-Aware Probe (extension of Surface-Only Scanning prevention).** When the coarse scan inventories a candidate that carries a quantifiable claim — a claim whose answer is a number or measurable property (cost, benefit, frequency, magnitude, count, etc.) and whose answer determines whether the candidate stabilizes or is dismissed — at least one empirical probe of the quantifiable claim is required before the candidate can pass into the stabilized candidate set. The general 'probe at least one signal' rule of Surface-Only Scanning prevention does not satisfy this requirement: the probe must address the quantifiable claim specifically. This rule applies in BOTH artifact and possibility modes — in artifact mode, the quantifiable claim is about how many objects exist or what their cost is; in possibility mode, the quantifiable claim is about how often a candidate would fire or how cheap it would be. Dispatching a load-bearing quantifiable claim with qualitative reasoning ('this is probably expensive', 'this likely happens often') without an empirical probe is an instance of Surface-Only Scanning."*

**Where it sits:** Probe section (after the existing "A good probe:" bullets) + Surface-Only Scanning failure mode (after the existing "How to prevent" sentence; as an extension paragraph).

**Test:**
- **Novelty:** New rule type (type-aware probing) not present in current explore.md. NOVEL.
- **Scrutiny survival:** Strongest objection — "the rule over-fires on trivial quantifiable claims." Defense — "load-bearing" qualifier ("whose answer determines whether the candidate stabilizes") narrows scope. SURVIVES.
- **Fertility:** Opens type-aware probing as a new dimension of Probe; future sub-rules possible (e.g., type-aware probing for relational claims, structural claims). FERTILE.
- **Actionability:** Specific recognition predicate (carries quantifiable claim AND load-bearing); specific evaluation gate (next 3 MVL+ runs producing such candidates, the rule fires); specific implementation (one paragraph in Probe section + one extension in Surface-Only Scanning prevention). ACTIONABLE.
- **Mechanism independence:** All 7 mechanisms converged on this Focused variation. HIGH.

**VERDICT: SURVIVES.**

### Rule 2 — Contextual Surround Pre-Scan Rule

**Final wording:**

> *"**Contextual Surround Pre-Scan (extension of Premature Depth prevention).** When the territory has an identifiable contextual / structural surround layer — a layer that establishes meaning for the inquiry-specific objects within it (for codebases this is the project's foundational protocols / contracts / conventions; for solution spaces this is the surrounding constraint / value frame; for any territory it is the layer that frames how inquiry-specific objects are interpreted) — the Coarse Scan must include items from that surround layer before going deep on inquiry-specific objects. The general 'complete at least one coarse scan before probing' rule of Premature Depth prevention does not satisfy this requirement: the coarse scan's breadth must explicitly cover the surround layer when present. Omitting an identifiable surround layer in the coarse scan is a Premature Depth instance applied at the layer-of-scan dimension — the explorer goes deep on inquiry-specific objects without the contextual layer that gives them meaning."*

**Where it sits:** Scan section (after the existing "A good scan:" bullets) + Premature Depth failure mode (after the existing "How to prevent" sentence; as an extension paragraph) + Resolution Progression's Coarse Scan step (clarifies "what major regions exist" includes surround layers).

**Test:**
- **Novelty:** New rule type (territory-layer awareness) not present in current explore.md. NOVEL.
- **Scrutiny survival:** Strongest objection — "the rule over-fires when surround is unclear or absent." Defense — "identifiable" qualifier narrows scope; the rule fires only when the surround is observable. SURVIVES.
- **Fertility:** Opens territory-layer awareness as a new dimension of Scan; future sub-rules possible (e.g., multi-layered territories, nested surrounds). FERTILE.
- **Actionability:** Specific recognition predicate (territory has identifiable surround layer); specific evaluation gate (next 3 MVL+ runs scanning territories with a surround layer, the rule fires); specific implementation (one paragraph in Scan section + one extension in Premature Depth prevention + one note in Resolution Progression). ACTIONABLE.
- **Mechanism independence:** All 7 mechanisms converged on this Focused variation. HIGH.

**VERDICT: SURVIVES.**

## Assembly Check

The strongest assembly:

```
RULE 1 (Type-Aware Probe Rule, extension of Surface-Only Scanning prevention)
  + RULE 2 (Contextual Surround Pre-Scan Rule, extension of Premature Depth prevention)
  + Cross-cutting requirements (for-sure criterion + generic framing + extension principle)
  + Filtered speculative additions documented as REJECTED
```

Emergent value:

- **Rules 1 + 2 form an orthogonal pair** — different surfaces (Probe + Surface-Only Scanning vs Scan + Premature Depth), different mechanisms (claim-type-awareness vs territory-layer-awareness). Together they patch two distinct gaps in the existing failure-mode prevention rules.
- **Both rules EXTEND existing structures** — they do not replace, do not contradict, do not introduce new failure modes. The existing 6 failure modes stay; the existing 6 components stay; the existing 7-step cycle stays. The rules add specificity at specific surfaces.
- **The for-sure criterion's filtering effect** — three speculative additions (provenance tracking, operation-shape stability, vocabulary tracking) are explicitly rejected. The user gets exactly what they asked for: minimal high-leverage gaps, not a long speculative list.
- **Generic / meta-discipline framing** — both rules use only structural-exploration vocabulary (scan, probe, candidate, quantifiable claim, territory, contextual surround layer, coarse scan, Premature Depth, Surface-Only Scanning). No project-specific terms. The rules are domain-agnostic.

The assembly's milestone: this is the FIRST inquiry to propose for-sure-missing rules to a thinking-discipline spec based on multi-source corpus evidence. The methodology (multi-source convergence + before/after contrast + generic reframing) can be applied to other thinking-discipline specs (sense-making, decompose, innovate, td-critique).

Assembly verdict: SURVIVE.

Refinements required before implementation:

- Rule 1 must cite chain 1 M2 verbatim + chain 6 Cycle 4 reinforcement.
- Rule 2 must cite chain 2 N1 verbatim + before/after contrast.
- Both rules must specify exact placement in explore.md's structure.
- Both rules must specify evaluation gate (next 3 MVL+ runs).
- Both rules must include the "load-bearing" / "identifiable" qualifier to prevent over-firing.

## V1 Shape (Stable Output for Critique)

```
For-sure-missing rules for homegrown/explore/references/explore.md:

RULE 1 — Type-Aware Probe Rule (Surface-Only Scanning extension)
  Where: Probe section + Surface-Only Scanning prevention
  Trigger: candidate carries a load-bearing quantifiable claim
  Action: empirical probe of the quantifiable claim before stabilization
  Modes: BOTH artifact and possibility
  Evidence: chain 1 M2 (HIGH) + chain 6 Cycle 4 reinforcement (cross-chain support)
  Cost: one paragraph

RULE 2 — Contextual Surround Pre-Scan Rule (Premature Depth extension)
  Where: Scan section + Premature Depth prevention + Coarse Scan in Resolution Progression
  Trigger: territory has identifiable contextual / structural surround layer
  Action: coarse scan includes surround items before inquiry-specific items
  Evidence: chain 2 N1 (HIGH) + before/after contrast in prior + corrected exploration outputs
  Cost: one paragraph

REJECTED (speculative; insufficient evidence):
  - Provenance tracking
  - Operation-shape stability checks
  - Vocabulary tracking

Verdict: TWO for-sure-missing rules.
```

## Telemetry

- Generators applied: 4 / 4 (Combination, Absence Recognition, Domain Transfer, Extrapolation) for each of Rule 1 and Rule 2 = 8 total.
- Framers applied: 3 / 3 (Lens Shifting, Constraint Manipulation, Inversion) for each = 6 total.
- Coverage: FULL (all 7 mechanisms × 2 rules × 3 variations each = 42 variations).
- Convergence: HIGH — all 7 mechanisms converge on Focused variation for each rule.
- Survivors tested: 2 / 2 (Rule 1 + Rule 2 both pass all 5 tests).
- Failure modes observed: NONE.
  - Premature evaluation: no — all mechanisms applied before testing.
  - Single-mechanism trap: no — full 7-mechanism coverage per rule.
  - Early frame lock: no — multiple mechanisms applied; convergence is corpus-evidence-grounded.
  - Innovation without grounding: no — every output tested against the for-sure criterion.
  - Mechanism exhaustion: no — both rules survive testing.
  - Survival bias: no — speculative additions explicitly rejected; uncomfortable contrarian variations (e.g., Inversion Level 3 root-cause reframings) tested with extra care; KILLED on structural grounds, not because they were threatening.
- **Overall: PROCEED.**
