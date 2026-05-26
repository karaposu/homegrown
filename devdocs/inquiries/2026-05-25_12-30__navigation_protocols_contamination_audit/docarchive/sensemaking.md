# Sensemaking — Navigation-protocols contamination audit on routeman design

## User Input

`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-25_12-30__navigation_protocols_contamination_audit/_branch.md`

## Initial Sense Version (SV1 — Baseline Understanding)

The user identified two protocols (`multi_resolution_navigation.md` + `navigation_context_intake.md`) as potential context-poisoning sources for the routeman discipline generation process. Both predate the 16-31 architecture correction and the routeman rename — designed for the deprecated `/navigation`. Surfacing confirmed the concern is real with 4 vector types (Navigation vocabulary; budget-framing; tree-expansion / parent-child framing; warmup-routing). The 24-00 adoption brought wholesale schema commitments without semantic re-test. The 11-00 structural-layer inquiry restated mrn content. But the just-shipped routeman.md is mostly clean post-user-correction. The audit's job is to crystallize WHERE contamination lives (per-artifact intensity) + WHAT corrective is needed (per-scope recommendations).

---

## Phase 1 — Cognitive Anchor Extraction

### Constraints

- **C1: Routeman's corrected identity** = singleton main navigator + file-mediated + isolated session + enumerate-all + observe-only (16-31 + Q5 + 14-39). The audit measures contamination AGAINST this identity.
- **C2: Asymmetric-failure principle** = missing a possible move is worse than enumerating an inapplicable one; never silently filter. Budget-framing in mrn potentially violates this.
- **C3: Routeman's identity is settled.** This audit operates on INHERITANCE, not on identity. No re-litigation of 14-39 design memo's commitments.
- **C4: Project conventions exist** (5-Core discipline pattern; protocol file pattern at `cognitive_harness/protocols/`) and constrain corrective scope.
- **C5: User's recent correction** (routeman.md must be pure thinking discipline; no project-coupling) is binding. The audit verifies the correction's effectiveness + recommends following through at integration-layer document (route 8 from readiness Route Map).
- **C6: Existing project state** — mrn + nci are REAL files; mrn was ADOPTED by 24-00; both PREDATE 16-31; both PREDATE the routeman rename.
- **C7: 14-39's settled schema** — the route-card schema named status values `open / blocked / deferred / active / done / stale / superseded`. These predate 24-00's adoption of mrn. (Verifiable; relevant to A2 ambiguity.)
- **C8: Verified orphan status** — empirical grep confirms BOTH protocols are effectively orphaned in the active codebase. mrn is referenced only by deprecated_navigation/ self-references + archived_skills folders + design-history findings. nci is referenced only by deprecated_navigation/. NO active runner / discipline / SKILL.md / runtime artifact references either protocol.

### Key Insights

- **KI1: Contamination has FOUR distinct vector types.** (a) Capital-N "Navigation" vocabulary (search/replace fix); (b) budget-framing (`coverage_mode` / `batch_size` / `expansion_policy` / `scheduling_policy` / status values like `deferred_by_budget`); (c) tree-expansion / parent-child framing (`parent_map` / `child_map_path` / Step 7 Create Child Maps); (d) warmup-routing pattern (5 routing decisions → 5 deprecated warmup files). Each type maps to a different corrective tactic.

- **KI2: Contamination INTENSITY varies dramatically by artifact.**
  - mrn: HEAVILY contaminated (all 4 vector types present strongly).
  - nci: HEAVILY contaminated + architecturally obsolete (warmup gone per 16-31; nothing reusable remains beyond a few generic safety rules).
  - 24-00 adoption: PARTIALLY contaminated (inherited budget-framed schema fields wholesale; "surgical" framing meant filename-level only; semantic re-test deferred and never performed).
  - 11-00 structural-layer Persistence Model section: PARTIALLY contaminated (restated mrn content; user-corrected to move out of routeman.md → into the integration-layer document, route 8).
  - Integration-layer document (route 8, not yet authored): INHERITS RISK at authoring time.
  - routeman.md (just-shipped): MOSTLY CLEAN — cold-read showed 2 acceptable local-sense uses + 1 status-value-overlap to verify.
  - routeman SKILL.md: CLEAN (40-line procedural orchestrator; no contamination surface).

- **KI3: Corrective SCOPE follows contamination INTENSITY.** Heavily-contaminated artifacts need bigger correctives. Clean artifacts need none. The "blanket fix" anti-pattern is over-broad; "no action" anti-pattern is under-broad.

- **KI4: Preservation value is real.** mrn contains genuinely-useful content that aligns with routeman's identity: Breadth Invariant ("a large route frontier is not a defect by itself"); Frontier Ledger integrity ("prevents budgeted traversal from erasing coverage"); "Unrun does not mean rejected. Out-of-policy does not mean nonexistent."; selection-boundary commitment. Throwing the protocols away without extracting this value is a loss.

- **KI5: The META-MECHANISM of context-poisoning is "surgical adoption without semantic re-test".** 24-00 self-described the adoption as "surgical" — they were aware the adoption was narrow. The gap: semantic re-test was deferred and never performed. Filename-level aliasing (`_frontier.md` → `_navig.md`; `navigation.md` → `routeman.md`) succeeded; semantic-content re-test (does this protocol's framings match routeman's corrected identity?) was implicit and never explicit.

- **KI6: The orphan status (C8) cleans up the corrective space.** If mrn + nci are not actively referenced by any runner / discipline / SKILL.md (verified), deprecation has zero active-disruption downside. This shifts the corrective recommendation: SOURCE-LEVEL corrective (deprecate + selectively preserve into a new thin spec) becomes feasible + cheap, rather than research-frontier.

- **KI7: The integration-layer document (route 8) is the catch point.** Cleaner to filter contamination at PRE-AUTHORING than to remove post-facto. Recommend authoring-guidance ships BEFORE the integration-layer document author begins.

### Structural Points

- **SP1: Contamination flow chart** —
  ```
  /navigation discipline (deprecated)
    ↓ designed protocols for itself (pre-16-31; pre-rename)
  multi_resolution_navigation.md (566 lines)
  navigation_context_intake.md (259 lines)
    ↓ adoption without semantic re-test ("surgical" pattern)
  24-00 finding's adoption commitments (13 schema fields inherited wholesale)
    ↓ restatement in structural inquiry (RESTATE-WITH-CROSS-REFERENCE)
  11-00 inquiry's Persistence Model section
    ↓ user correction — content moves OUT of routeman.md
  Integration-layer document (route 8, not yet authored; INHERITS RISK)
  
  ⊥ (just-shipped routeman.md cleanly bypasses via user correction)
  routeman.md (post-correction; mostly clean)
  ```

- **SP2: Corrective scope tree (revised after C8 orphan verification):**
  - **Layer 1 — SOURCE-LEVEL** (now feasible thanks to orphan status):
    - Deprecate `navigation_context_intake.md` entirely (architecturally obsolete + orphaned + no reusable value).
    - Extract preservation-worthy content from `multi_resolution_navigation.md` into a NEW thin routeman-specific persistence spec.
    - Deprecate `multi_resolution_navigation.md` once the extraction is complete + the integration-layer document references the new spec.
  - **Layer 2 — PREVENTIVE** (cheapest long-term):
    - Author guidance for integration-layer document (route 8) ships BEFORE the author begins; specifies what content to RESTATE (preservation-worthy) vs STRIP (4 contamination vectors).
  - **Layer 3 — AMENDMENT** (becomes lightweight after Layer 1):
    - 24-00 adoption gets a deprecation note documenting that the mrn protocol it adopted has been replaced with the new thin spec; the inherited commitments survive via the new spec.
  - **NOT-NEEDED**: routeman.md / routeman SKILL.md correctives (cold-read confirms cleanliness).

- **SP3: 4 contamination vector types → 4 corrective tactics:**
  - **Capital-N Navigation vocabulary** → search/replace to "route" terminology (mechanical).
  - **Budget-framing** → semantic reframe; identify which schema fields are budget-coupled vs structural; strip the budget-coupled ones from the new thin spec.
  - **Tree-expansion / parent-child** → restructure for routeman's flat enumeration with optional sub-route hierarchy from 18-58 staged-mapping (structural — but note: the staged-mapping IS hierarchical, so the new thin spec keeps a constrained sub-route concept).
  - **Warmup-routing** → DEPRECATE entirely (no replacement needed; obsolete under 16-31).

- **SP4: Routeman.md cold-read scorecard:**
  - 2 acceptable local-sense uses (line 149 "budget" in pointer-count; line 343 "navigation" lowercase as generic word).
  - 1 to-verify item: `stale + superseded` status values — RESOLVED in Phase 3 as INDEPENDENTLY GROUNDED in 14-39 (predates 24-00 adoption); FALSE-POSITIVE cleared.
  - Conclusion: routeman.md needs NO corrective.

- **SP5: 24-00's "surgical" framing was self-aware.** The 24-00 finding used the word "surgical" 3+ times referring to the adoption. The framing acknowledged narrowness. The gap is between awareness ("we're being narrow") and follow-through ("we'll come back for semantic re-test later — but never did").

- **SP6: Orphan status verification (C8):**
  ```
  multi_resolution_navigation referenced by:
    - README.md (project root catalog)
    - cognitive_harness/deprecated_navigation/warmup/ (deprecated self-refs)
    - archived_skills/bf4ae1f-hg/bf4ae1f-navigation/warmup/ (archived old version)
    - (design-history findings — not active code)
  
  navigation_context_intake referenced by:
    - cognitive_harness/deprecated_navigation/warmup/navigator-refresh.md (deprecated self-ref)
    - cognitive_harness/protocols/_archive/navigation_context_intake_my_version.md (already archived)
  
  Active runners / disciplines / SKILL.md files referencing either: ZERO.
  Active routeman runtime files referencing either: ZERO.
  ```

- **SP7: Other 7 project protocols + routeman:** routeman runtime files (SKILL.md + references/routeman.md) reference NONE of the other 7 project protocols (artifact_materialization / branch_inquiry / conclude / loop_diagnose / outcome_review / resume / spec_governance). Branch_inquiry was mentioned in 24-00's two-tier boundary commitment but didn't propagate into the just-shipped runtime spec. No additional contamination vectors beyond the user-named two.

### Foundational Principles

- **FP1: Contamination ≠ throwing away the source artifacts.** Preservation value (KI4) exists; corrective must preserve.
- **FP2: Corrective scope follows contamination intensity per artifact.** (KI3)
- **FP3: Pre-authoring prevention is cheaper than post-authoring remediation.** Integration-layer document (route 8) is the catch point.
- **FP4: Surgical adoption + semantic re-test is the safe adoption pattern.** Surgical alone (24-00's pattern) is the contamination mechanism.
- **FP5: User's correction (routeman.md = pure thinking discipline) already removed the largest contamination risk.** Audit's job is follow-through, not redo.
- **FP6: Orphan status enables aggressive correctives.** When a target is orphaned, deprecation has zero active-disruption downside.

### Meaning-Nodes

- **MN1: Context-poisoning** — legacy-protocol-contamination of new-discipline-design via inherited commitments without semantic re-test (user-coined framing; audit-validated).
- **MN2: Surgical adoption (without semantic re-test)** — the META-mechanism of context-poisoning at the adoption layer (24-00 self-described methodology + the gap that produced contamination).
- **MN3: Contamination intensity** — per-artifact measure of how much legacy framing is inherited (varies dramatically by artifact).
- **MN4: Corrective scope** — the level at which a corrective acts (source / preventive / amendment / design — and the now-NOT-NEEDED routeman-runtime level).
- **MN5: Preservation value** — useful content in contaminated source that must survive any corrective (Breadth Invariant + Frontier Ledger integrity + selection-boundary + "unrun does not mean rejected").
- **MN6: Pre-authoring filtering** — strategy of intercepting contamination at the integration-layer document authoring step (cheapest corrective).
- **MN7: Orphan status** — verified empirical state of mrn + nci (not actively referenced beyond deprecated/archived/design-history); enables aggressive correctives.

### Phase 1 Meta-Inspection (H4 + H5)

- **H4 concept names** flagged for Phase 3 Load-bearing concept test: `context-poisoning`, `surgical-adoption-without-semantic-retest`, `contamination intensity`, `selective preservation`, `pre-authoring filtering`, `orphan status`. All novel coined-terms; load-bearing for the audit's conclusions.
- **H5 motivating examples**: 2 specific protocols + 5 design-history findings + 2 runtime artifacts. Specific-vs-pattern check: routeman/navigation is SPECIFIC; generalization to other discipline-renames is FF-S6 frontier flag. Acceptable specific-case handling.

### Sense Version 2 (SV2 — Anchor-Informed Understanding)

The contamination concern is structurally validated. Vector types are 4. Intensity varies dramatically per artifact (sources heavy; adoption partial; structural inquiry partial; routeman.md mostly clean; SKILL.md clean; integration-layer document at-risk). Critically, the orphan status (C8) — verified via grep — shifts the corrective space: SOURCE-LEVEL deprecation + selective preservation into a new thin spec becomes feasible and cheap because the source protocols aren't actively used. The META-mechanism of context-poisoning is "surgical adoption without semantic re-test" — 24-00's filename-level aliasing without follow-through. Routeman.md needs no corrective; the user's earlier correction already removed the largest risk.

---

## Phase 2 — Perspective Checking

### Technical / Logical

- **Tech-1:** 4 contamination vectors → 4 corrective tactics (mechanical search/replace for vocabulary; semantic reframe for budget; structural restructure for tree-expansion; deprecation for warmup-routing). The mapping is clean.
- **Tech-2:** Orphan-status verification was empirical (grep across active codebase). Result: zero active references beyond deprecated/archived/design-history. This is a SOLID empirical anchor for the corrective architecture.
- **Tech-3:** Surgical adoption pattern (24-00) is reusable as a methodology IF paired with semantic re-test step. Without re-test, it's the contamination mechanism. The reform is "surgical + semantic-re-test", not abandonment of surgical adoption.
- **Tech-4:** Routeman.md cold-read score (2 acceptable + 1 false-positive cleared) confirms the user's correction was effective.

### Human / User

- **Hum-1:** The user's question "what do you think?" wanted BOTH confirmation (yes, real concern) + scoping (where exactly + what corrective). The audit must deliver both at the finding stage.
- **Hum-2:** The user has invested significant work in routeman already (multiple /MVLw inquiries). Corrective recommendations should preserve that investment. The just-shipped runtime files needing NO corrective respects this investment.
- **Hum-3:** The user's intuition that the protocols "might have good value" matches preservation-value principle (KI4). The audit confirms.

### Strategic / Long-term

- **Strat-1:** If contamination is unaddressed, the integration-layer document (route 8) inherits at authoring time AND propagates to runtime when the integration document is loaded by routeman. Catching at authoring time is the cheapest long-term corrective.
- **Strat-2:** The META-pattern (legacy-protocol-contaminates-new-discipline) may recur. FF-S6 frontier flag captures this. If a second discipline is renamed (per 14-39's COULD-deferred "second rename" trigger), the same pattern fires. A project-wide protocol-rename-coordination methodology (mandatory semantic re-test step in any adoption inquiry) pays off cross-discipline.
- **Strat-3:** Deprecating mrn + nci REDUCES project surface area. The project's 9-protocol set becomes 7-protocol after deprecation; the deprecated protocols are documented as deprecated rather than lurking as active references.

### Risk / Failure

- **Risk-1: Over-broad corrective.** Rewriting both protocols + revising routeman.md + redoing 24-00 + authoring integration-layer document is over-broad. Mitigation: per-artifact scoped recommendations (SP2 corrective tree).
- **Risk-2: Under-broad corrective.** If only routeman.md is audited and "looks clean → no action" is concluded, the integration-layer document inherits at authoring time. Mitigation: PRE-authoring guidance (FP3 + KI7 + Layer 2 corrective).
- **Risk-3: Loss of preservation value.** Mitigation: I-R10-05 selective preservation tactic; explicit list of preservation-worthy content (KI4).
- **Risk-4: Recursive contamination.** If correctives use the contaminated protocols as reference, contamination self-inherits. Mitigation: corrective references PURE routeman.md (mostly clean post-correction) as source-of-truth, not the contaminated protocols.

### Resource / Feasibility

- **Res-1:** Smallest corrective (Layer 2 PREVENTIVE) = author authoring-guidance document (~50-100 lines). Hours of effort.
- **Res-2:** Medium corrective (Layer 3 AMENDMENT) = supplement 24-00 with semantic re-test addendum (~100-200 lines). Hours of effort.
- **Res-3:** Largest corrective (Layer 1 SOURCE-LEVEL) = extract preservation-worthy content + author new thin routeman-specific persistence spec + deprecate mrn + deprecate nci (~200-400 lines for new spec; deprecation notes are small). Day-or-two of effort.
- **Res-4:** ALL THREE LAYERS together = ~1-3 days. Bounded.

### Definitional / Internal Consistency

- **Def-1:** "Context-poisoning" matches the user's metaphor (insidious + propagating + not always visible). Acceptable.
- **Def-2:** "Contamination intensity" matches the per-artifact measurement. Acceptable.
- **Def-3:** Internal consistency: 4 vector types + per-artifact intensity + per-scope correctives + preservation pattern + meta-mechanism naming all compose coherently.

### Definitional / Frame-exit Completeness — GATING CHECK

**Gating predicate (i):** inquiry's commitments include terms inherited from prior findings — YES (9 priors).

**Gating predicate (ii):** those inherited terms used across ≥2 distinct values/levels — YES.
- "contamination" — vector type (4 values) + intensity per-artifact (varies) + scope per-corrective (4 layers) = THREE structural roles.
- "corrective" — scope level (4 layers) + tactic per vector type (4) + acceptance vs revision binary + preservation pattern + pre-authoring filter = MULTIPLE.
- "adoption" — 24-00 specific historical + surgical-adoption methodology pattern + adoption-level scope = THREE.

**Gating fires. Apply 4 meta-categories:**

**1. Existence Enumeration:**
- "Contamination" project-wide referents: source (the 2 protocols); vector (4 types); intensity (per-artifact); corrective (recommended fixes); propagation (chain from source to runtime). All in-frame.
- "Corrective" referents: per-vector tactic; per-scope level; per-artifact recommendation; trade-off binary; preservation pattern; pre-authoring filter. Multiple in-frame.
- "Adoption" referents: 24-00 specific; surgical methodology; adoption-level scope; future-adoption pattern (if other disciplines adopt). FOUR referents.

**2. Role Assessment:**
- Out-of-frame referent: future-adoption pattern by other disciplines. ROLE: cross-discipline impact. Coherence of routeman audit preserved? YES — routeman audit operates on routeman's specific adoption; cross-discipline pattern is FF-S6 research-frontier flag.
- Out-of-frame referent: meta-corrective at project-canonical-protocol-rename methodology. ROLE: project-wide pattern. Coherence preserved? YES — meta-pattern is research-frontier; audit focus is routeman-specific.

**3. Verdict Rigor:**
- Clean-boundary verdict: "Routeman.md cold-read is mostly clean." Strongest counter: cold-read missed conceptual contamination that grep doesn't catch. Test on structural grounds: routeman.md identity statement uses "enumerate all possible next moves... typed... reachability-tagged" — enumerate-flat, not tree-expand; 10 components don't include tree-expansion as a step; reachability values verified (Phase 3 A2) as independently grounded. Cold-read holds. ✓
- Clean-boundary verdict: "Surgical adoption is the META-mechanism." Strongest counter: surgical adoption is appropriate WHEN source is fully aligned; contamination is specific to mrn-routeman misalignment not surgical-adoption-in-general. Test on structural grounds: 24-00's "surgical" framing was self-aware. The gap was that semantic re-test wasn't done THEN — not that surgical adoption is wrong in general. Refinement: name the META-mechanism precisely as "surgical adoption WITHOUT semantic re-test." ✓
- Clean-boundary verdict: "Orphan status enables aggressive correctives." Strongest counter: protocols may be referenced by hidden code paths the grep missed. Test on structural grounds: grep is empirical; covered project-root + cognitive_harness/ + docs/. The remaining reference paths (active runners; SKILL.md files; active disciplines) all surface in grep results. Orphan status holds. ✓

**4. Residual / Coverage Justification:**
- Frame-exit concern: are there OTHER project protocols/conventions that may have contaminated routeman beyond the two named? Apply Existence Enumeration: 9 protocol files in `cognitive_harness/protocols/`. SP7 verified routeman runtime files reference NONE of the other 7. branch_inquiry mentioned in 24-00 commitment but didn't propagate. No additional contamination vectors. Terminate recursion.

### Phase / Calibration-State (REQUIRED — phase-dependent rules)

Routeman is at L0 (pre-operational; spec authored; protocols pending). Contamination audit results may differ at L1+ (runtime evidence). At L0, this is design-time / spec-level audit. Phase-dependent: PREVENTIVE corrective (integration-layer authoring filter) is L0-appropriate; runtime-detection corrective would be L1+ scope.

### Phase 2 Meta-Inspection (H1 + H3)

- **H1:** 68 surfacing items contain some duplicate granularity (e.g., I-R1-01 budget-coverage-mode and I-R1-06 Step 5 "Select Coverage Mode" — same thing at different granularity). Pruning doesn't change verdict.
- **H3:** question framing IS biased toward "contamination is real" — user phrased as concern. Acceptable: surfacing confirmed the bias is structurally grounded; the audit's job is depth + scope, not bias-rebuttal.

### Sense Version 3 (SV3 — Multi-Perspective Understanding)

The audit crystallizes around 5 layered commitments:
- **COMMIT-1:** Contamination IS REAL with 4 distinct vector types per artifact.
- **COMMIT-2:** Contamination INTENSITY varies dramatically by artifact (sources heavy; adoption partial; just-shipped runtime clean post-user-correction; integration-layer document at-risk).
- **COMMIT-3:** Corrective SCOPE follows intensity (per-artifact recommendation).
- **COMMIT-4:** Preservation VALUE in mrn must survive any corrective.
- **COMMIT-5:** The META-MECHANISM of context-poisoning is "surgical adoption without semantic re-test"; future adoptions need explicit semantic re-test step.

**Plus the orphan-status discovery (C8) shifts the corrective architecture: deprecation + new thin spec becomes feasible at Layer 1; PREVENTIVE at Layer 2 remains cheapest; AMENDMENT at Layer 3 becomes lightweight.** Routeman.md / SKILL.md need NO corrective.

---

## Phase 3 — Ambiguity Collapse

### Ambiguity A1 — Is the contamination ACTIONABLE or just descriptive?

**Description:** the audit identifies contamination. Does that mean we MUST do something, or is it just observation?

**Strongest counter-interpretation:** routeman.md is clean; protocols are lazy-loaded per Q5 missing-protocol-degraded-functionality pattern; if mrn is never actually loaded by routeman at runtime, the contamination never affects behavior.

**Why the counter fails (structural grounds):** the integration-layer document (route 8) is the catch point. The integration-layer document author will RESTATE mrn content per the RESTATE-WITH-CROSS-REFERENCE pattern (R2 from 11-00 critique). The RESTATED content carries forward contamination. Then routeman at runtime loads the integration-layer document (NOT the protocols directly — lazy-load missing-file applies to PROTOCOLS, not to the integration-layer document which is always present). So contamination DOES propagate to runtime via the integration-layer document path.

**Confidence:** HIGH.

**Resolution:** contamination IS actionable. Specifically: catch at integration-layer document authoring time (Layer 2 PREVENTIVE corrective) is primary. Other correctives are secondary support.

**What is fixed:** corrective is required, not optional. Layer 2 PREVENTIVE is primary.
**What is no longer allowed:** "contamination is real but doesn't matter" framing.
**What now depends:** the corrective architecture's Layer 2 is the primary action.
**What changed:** confirms the audit's actionability + names the catch point.

### Ambiguity A2 — Is the routeman.md `stale + superseded` status-value overlap CONTAMINATION or independently natural?

**Description:** routeman.md uses reachability values `open / blocked / deferred / active / done / stale / superseded`. The `stale + superseded` overlap with multi_resolution_navigation status set. Inherited contamination or independently grounded?

**Strongest counter-interpretation:** these values were named in 14-39's original schema design and are independently grounded.

**Why the counter fails (or holds):** verifiable. 14-39 design memo (read in earlier session) included `Status: open / blocked / deferred / active / done / stale / superseded` in the route-card schema's "Route State" purpose-group. 14-39 was written 2026-05-23; mrn adoption was 2026-05-24 (00-20). 14-39 PREDATES mrn adoption. Therefore the status values are independently named in 14-39, not inherited from mrn.

**Confidence:** HIGH (verifiable via 14-39 reading + chronological ordering).

**Resolution:** status-value overlap is INDEPENDENT; NOT contamination. FALSE-POSITIVE cleared.

**What is fixed:** routeman.md cold-read shows no contamination beyond 2 acceptable local-sense uses.
**What is no longer allowed:** treating `stale + superseded` as contamination evidence.
**What now depends:** routeman.md remains the post-correction CLEAN artifact; no routeman-design corrective needed.
**What changed:** false-positive cleared; cold-read confirms cleanliness.

### Ambiguity A3 — What corrective applies to the contamination-source protocols themselves?

**Description:** 5 corrective options for source protocols (rewrite / new-protocol replacement / selective preservation / acceptance / deprecation). Which?

**Strongest counter-interpretation:** acceptance (I-R10-06) — protocols may have unknown active uses; living with contamination is cheaper than fixing.

**Why the counter fails (structural grounds):** orphan-status verification (C8) showed BOTH protocols are not actively referenced beyond deprecated/archived/design-history paths. Acceptance preserves un-needed risk for zero benefit (no active uses to protect). Deprecation has zero active-disruption downside.

**Confidence:** HIGH (empirical grep verification anchors the conclusion).

**Resolution:** SOURCE-LEVEL corrective = deprecate both protocols + extract preservation-worthy content from mrn into a NEW thin routeman-specific persistence spec. The new spec preserves: Breadth Invariant + Frontier Ledger integrity + selection-boundary + "unrun does not mean rejected" + structural schema fields (`candidate_id` / `status` / `blocked_by` / `continuation_note`) + Resume Note pattern. The new spec strips: budget-framing + tree-expansion / parent-child + Navigation vocabulary + warmup-routing.

**What is fixed:** Layer 1 SOURCE-LEVEL corrective = deprecate + extract.
**What is no longer allowed:** keeping both contaminated protocols indefinitely; restating mrn content in integration-layer document without filtering.
**What now depends:** the new thin spec's authoring is a Layer 1 sub-task; the integration-layer document references the new spec instead of mrn.
**What changed:** orphan status converts the SOURCE-LEVEL corrective from research-frontier to feasible + cheap.

### Ambiguity A4 — Is the integration-layer document (route 8) corrective PREVENTIVE or REMEDIAL?

**Description:** integration-layer document hasn't been authored yet. Does the corrective fire BEFORE / DURING / AFTER authoring?

**Strongest counter-interpretation:** corrective fires at any phase equally.

**Why the counter fails (structural grounds):** PRE-authoring is cheapest. Once authored, removing contamination is harder than not introducing it. PRE-authoring catches at the source of inheritance.

**Confidence:** HIGH.

**Resolution:** PREVENTIVE — ship guidance documented BEFORE the integration-layer document author starts. Specifically: explicit instructions on which mrn content can be RESTATED (preservation-worthy from KI4) vs which content must be STRIPPED (4 contamination vectors per SP3). The guidance is the Layer 2 corrective artifact.

**What is fixed:** Layer 2 corrective fires PRE-authoring.
**What is no longer allowed:** waiting until integration-layer document is authored to identify contamination.
**What now depends:** the authoring guidance document is the Layer 2 artifact.
**What changed:** corrective timing is explicit: PRE-authoring.

### Ambiguity A5 — Should the 24-00 adoption be RE-DONE or AMENDED?

**Description:** 24-00 adopted mrn surgically without semantic re-test. Options: full re-do vs amendment.

**Strongest counter-interpretation:** full re-do — cleaner; ambiguity from amendment-vs-original may persist.

**Why the counter fails (structural grounds):** 24-00 covered MORE than just mrn adoption (hybrid placement; multiple proposal evaluations; etc.). Full re-do is over-broad. Amendment scope is precisely-targeted. Also: with Layer 1 corrective (deprecate mrn), the 24-00 commitments need a deprecation note (the protocol you adopted has been replaced by the new thin spec; commitments survive via the new spec) rather than a re-do.

**Confidence:** HIGH.

**Resolution:** AMEND 24-00 (Layer 3 corrective). Specifically: append a deprecation note documenting that mrn has been replaced by the new thin spec; the inherited 24-00 commitments (lifecycle + hybrid placement + structural fields) survive via the new spec; the contaminated commitments (budget-framed fields + tree-expansion schema) are STRIPPED.

**What is fixed:** Layer 3 corrective = AMENDMENT (not re-do).
**What is no longer allowed:** full re-do of 24-00.
**What now depends:** the deprecation note ships when mrn is deprecated.
**What changed:** Layer 3 becomes lightweight (a note, not an inquiry).

### Sense Version 4 (SV4 — Clarified Understanding)

5 ambiguities resolve coherently:
- Contamination IS actionable (A1 HIGH) — Layer 2 PREVENTIVE catches at integration-layer authoring.
- `stale + superseded` NOT contamination (A2 HIGH) — false-positive cleared via 14-39 chronological priority.
- Source protocol corrective = DEPRECATE + EXTRACT into new thin spec (A3 HIGH) — orphan status enables.
- Integration-layer corrective = PREVENTIVE (A4 HIGH) — PRE-authoring guidance ships first.
- 24-00 corrective = AMENDMENT (A5 HIGH) — lightweight deprecation note.

---

## Phase 4 — Degrees-of-Freedom Reduction

### Fixed

- 4 contamination vector types (Vocabulary / Budget-framing / Tree-expansion / Warmup-routing).
- Per-artifact intensity (sources HEAVY; adoption PARTIAL; structural-inquiry PARTIAL; routeman runtime CLEAN; integration-layer-doc AT-RISK).
- Corrective architecture = 3 layers (Layer 1 SOURCE / Layer 2 PREVENTIVE / Layer 3 AMENDMENT) + NOT-NEEDED at routeman-runtime level.
- Layer 1 = deprecate mrn + nci + extract preservation-worthy content from mrn into new thin spec.
- Layer 2 = author PRE-authoring guidance for integration-layer document.
- Layer 3 = append deprecation note to 24-00 finding.
- Selective preservation pattern applies across correctives.
- `stale + superseded` reachability values are independently grounded; FALSE-POSITIVE cleared.
- Routeman.md needs NO corrective.
- SKILL.md needs NO corrective.
- Orphan status (C8) enables Layer 1 aggressive correctives.
- "Surgical adoption WITHOUT semantic re-test" is the META-mechanism of context-poisoning.

### Eliminated

- Full re-do of 24-00 (A5).
- Routeman-design-level corrective (A2 false-positive cleared).
- Acceptance-without-action (A1).
- Wholesale rewrite of source protocols WITHOUT deprecation (A3 — deprecation + new spec is cleaner).
- Post-authoring remediation of integration-layer document (A4 — preventive is cheaper).

### Viable Paths Remaining

- The 3-layer scoped corrective architecture.
- Selective preservation pattern application.
- Research-frontier flag: pattern generalization to other discipline-renames (FF-S6) → future project-wide protocol-rename-coordination methodology.
- Research-frontier flag: the universally-applicable "surgical + semantic-re-test" adoption methodology refinement.

### Sense Version 5 (SV5 — Constrained Understanding)

The corrective architecture is constrained to 3 layers with explicit per-artifact scope. Layer 1 (SOURCE-LEVEL) is feasible thanks to orphan status verification — deprecate mrn + nci, extract preservation-worthy content into new thin spec. Layer 2 (PREVENTIVE) is primary — author integration-layer document guidance BEFORE the author begins. Layer 3 (AMENDMENT) is lightweight — append deprecation note to 24-00. Routeman.md + SKILL.md untouched. The META-mechanism (surgical adoption without semantic re-test) becomes a research-frontier for project-wide methodology refinement.

---

## Phase 5 — Conceptual Stabilization

### Phase 5 Meta-Inspection (H6 model fit)

**Accommodation trigger check:** did the model require patching across 5 ambiguities? A1, A4, A5 resolved HIGH on first attempt. A2 had an interesting RESOLUTION (false-positive cleared via 14-39 chronological priority) — clean cleanup, not patching. A3 had a SHIFT (from research-frontier to feasible-and-cheap) driven by orphan-status discovery — that's an INSIGHT, not a patch. Model fit sound; Accommodation trigger does NOT fire.

### Final Sense Version (SV6 — Stabilized Model)

**The user's concern about context-poisoning is structurally validated and actionable.** Contamination IS real with 4 vector types (Navigation vocabulary; budget-framing; tree-expansion / parent-child framing; warmup-routing). Contamination INTENSITY varies dramatically by artifact:

- Sources (multi_resolution_navigation.md + navigation_context_intake.md): HEAVILY contaminated.
- 24-00 adoption: PARTIALLY contaminated (surgical-at-filename-without-semantic-re-test).
- 11-00 structural-layer Persistence Model section: PARTIALLY contaminated.
- Integration-layer document (route 8 from readiness Route Map; not yet authored): AT-RISK.
- routeman.md (just-shipped): MOSTLY CLEAN — cold-read score 2 acceptable + 1 FALSE-POSITIVE cleared (`stale + superseded` status values are independently named in 14-39, chronologically prior to mrn adoption).
- routeman SKILL.md: CLEAN.

**The META-MECHANISM of context-poisoning is "surgical adoption without semantic re-test"** — 24-00 self-described as "surgical"; filename-level aliasing succeeded; semantic-content re-test was deferred and never performed. Future adoptions need an explicit semantic re-test step in the adoption methodology.

**Orphan-status verification (C8)** is critical: empirical grep confirms BOTH source protocols are not actively referenced by any runner / discipline / SKILL.md / routeman runtime file. Active references are limited to deprecated_navigation/ self-references + archived_skills/ + design-history findings + README catalog. Orphan status enables aggressive Layer 1 correctives without active-disruption downside.

**Corrective recommendation: 3-layer scoped architecture:**

- **Layer 1 — SOURCE-LEVEL** (feasible thanks to orphan status): Deprecate `navigation_context_intake.md` entirely (architecturally obsolete + no reusable value). Extract preservation-worthy content from `multi_resolution_navigation.md` (Breadth Invariant + Frontier Ledger integrity + selection-boundary + "unrun does not mean rejected" + structural schema fields + Resume Note pattern) into a NEW thin routeman-specific persistence spec. Deprecate `multi_resolution_navigation.md` once extraction completes.

- **Layer 2 — PREVENTIVE** (cheapest long-term + PRIMARY corrective): Author guidance for integration-layer document (route 8) BEFORE the author begins. Guidance specifies what to RESTATE (preservation-worthy content from KI4) vs what to STRIP (4 contamination vectors per SP3).

- **Layer 3 — AMENDMENT** (lightweight after Layer 1): Append a deprecation note to 24-00 finding documenting that `multi_resolution_navigation.md` has been replaced by the new thin spec; the inherited 24-00 commitments (lifecycle + hybrid placement + structural fields) survive via the new spec; the contaminated commitments (budget-framed fields + tree-expansion schema) are STRIPPED.

- **NOT-NEEDED:** routeman.md corrective. SKILL.md corrective. (Cold-read confirms cleanliness post-user-correction.)

**Routeman.md needs NO corrective.** The user's earlier correction (routeman.md must be pure thinking discipline) already removed the largest contamination risk. Cold-read scorecard: 1 false-positive cleared (`stale + superseded`); 2 acceptable local-sense uses (line 149 "budget" in pointer-count; line 343 "navigation" lowercase generic word).

**Research frontier (FF-S6):** the legacy-protocols-contaminate-new-disciplines pattern may recur. Investing in a project-wide protocol-rename-coordination methodology (mandatory semantic re-test step in any adoption inquiry) pays off cross-discipline. The "surgical + semantic-re-test" pattern (refining 24-00's "surgical" without follow-through) is the candidate methodology.

### Difference from SV1

SV1 was open ("the concern is real"). SV6 commits to specific 4-vector-type-per-intensity-per-artifact diagnostic + 3-layer scoped corrective architecture + meta-mechanism naming + 1 false-positive cleared + routeman.md needs no corrective + orphan-status enables aggressive Layer 1 + research-frontier pattern for cross-discipline methodology. Diagnosis + scoping + recommendation all delivered with empirical grounding (cold-read + grep + chronological priority).

8 frontier flags from Surfacing addressed:
- **FF-S1** (`stale + superseded` overlap): FALSE-POSITIVE CLEARED via 14-39 chronological priority (A2).
- **FF-S2** (tree-expansion fit with enumerate-all): STRIPPED in Layer 1 (the new thin spec doesn't carry tree-expansion semantics).
- **FF-S3** (RESTATE-WITH-CROSS-REFERENCE propagation): RESOLVED — Layer 2 PREVENTIVE guidance specifies what to restate (preservation-worthy) vs strip (contamination) at integration-layer authoring.
- **FF-S4** (nci actual usage): VERIFIED ORPHAN — only deprecated/archived/design-history references; Layer 1 deprecation has zero active-disruption.
- **FF-S5** (mrn usage beyond routeman): VERIFIED ORPHAN — same status; Layer 1 deprecation feasible.
- **FF-S6** (pattern generalization): PRESERVED as research-frontier; "surgical + semantic-re-test" candidate methodology named.
- **FF-S7** (preservation-worthy refactor): RESOLVED — Layer 1 extracts into new thin spec (this IS the refactor pattern).
- **FF-S8** (integration-layer document content-source): RESOLVED — Layer 2 PREVENTIVE specifies what content gets restated.

## Telemetry

- **Phases run:** 5 (full SV1→SV6 progression).
- **Anchor types extracted:** 5 (Constraints / Key Insights / Structural Points / Foundational Principles / Meaning-Nodes).
- **Anchor counts:** 8 Constraints + 7 Key Insights + 7 Structural Points + 6 Foundational Principles + 7 Meaning-Nodes = 35 anchors.
- **Perspectives applied:** 9 (Technical/Logical / Human/User / Strategic/Long-term / Risk/Failure / Resource/Feasibility / Definitional/Internal Consistency / Definitional/Frame-exit Completeness [gated and fired with 4 meta-categories] / Phase/Calibration-State [required and applied] / Phase-2-Meta H1+H3).
- **Ambiguities collapsed:** 5 (A1 actionable HIGH; A2 false-positive cleared HIGH; A3 source corrective HIGH; A4 preventive HIGH; A5 amendment HIGH). 1 frontier flag DISSOLVED (FF-S1 false-positive cleared).
- **Frontier flags addressed:** 8/8 from Surfacing — 1 false-positive cleared; 5 directly resolved; 2 preserved as research-frontier in defined scope.
- **Empirical verifications performed:** 14-39 chronological priority (A2); orphan-status grep (C8 + FF-S4 + FF-S5); other-7-protocols routeman cross-ref grep (SP7).
- **Meta-inspection hooks fired:** H4 + H5 in Phase 1 (novel coined-terms flagged); H1 + H2 + H3 + H7 in Phase 2; H4 sub-aspects in Phase 3 Load-bearing tests; H6 in Phase 5 (Accommodation trigger did NOT fire).
- **Failure modes checked:** Status Quo Bias / Premature Stabilization / Anchor Dominance / Perspective Blindness / Clean Resolution Trap / Self-Reference Blindness — none triggered. Frame-exit Completeness + Phase/Calibration-State perspectives applied per refinements.
- **Saturation indicators:** Perspective saturation = met. Ambiguity resolution = 5/5 HIGH. SV delta = substantial. Anchor diversity = 5 types × 9 perspectives = high.

**Overall: PROCEED**
