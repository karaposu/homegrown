# Critique — Sensemaking Spec Capability Comparison

## User Input

```
/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-16_00-35__sensemaking_spec_capability_comparison/_branch.md
```

## Phase 0 — Dimension Construction

### Extracted from sensemaking & exploration

- **Constraints:** live is what SKILL.md loads (C1); draft is structurally additive (C2); 1.16× file-size ratio (C3); verdict must be actionable (C5); inter-LLM reproducibility is a hidden constraint (C6); cost-budget-dependent (C7).
- **Foundational principles:** only loaded capability counts as runtime capability (FP1); additions can be true gains or net regressions (FP2).
- **Meaning-nodes:** operational explicitness, scope-boundedness, evolvability — all named as capability.
- **Project-specific risk axes** (per Phase 0 refinement note + user auto-memory): regression-detection gap (Family II priority); discipline self-containment principle (recent feedback memory).

### Dimensions with weights

| # | Dimension | What it asks | Weight | Extracted from |
|---|---|---|---|---|
| **D1** | Capability gain | Does the user gain runtime capability they don't have today? | **HIGH** | KI1, KI2, MN1–MN4 |
| **D2** | Cost | Is context/maintenance cost proportional to gain? | MEDIUM | C3, C7 |
| **D3** | Reversibility | Can this be undone cheaply if regression appears? | **HIGH** | FP2, project safety substrate |
| **D4** | Actionability | Can the user execute this with current means? | **HIGH** | C5 |
| **D5** | Coherence with project trajectory | Does this fit Family II/III milestones and auto-memory? | MEDIUM | Auto-memory, README2.md |
| **D6** | Mis-application resistance | Does the verdict prevent future practitioner confusion? | MEDIUM | KI3, AR-Gap-Focused |
| **D7** | **Regression-detection alignment** *(project-specific)* | Does this verdict respect or address the regression-detection gap? | MEDIUM-HIGH | Family II priority |
| **D8** | **Discipline self-containment** *(project-specific)* | Does the verdict respect "disciplines are individuals — no outbound pointers"? | LOW-MEDIUM | Feedback memory saved this session |

**Dimension validation:** If a candidate passed all 8 perfectly, would it solve the problem? It would deliver capability (D1) at proportional cost (D2), reversibly (D3), actionably (D4), coherently with project direction (D5), preventing confusion (D6), respecting the regression-detection gap (D7), and the self-containment principle (D8). Yes — these are the right axes.

**Project-specific dimension check (refinement note):** D7 covers the regression-detection axis; D8 covers the self-containment principle. Both are project-specific risk dimensions per the auto-memory. PASS.

---

## Phase 1 — Landscape Construction

### Viable region

HIGH on D1, D3, D4; acceptable on D2, D5, D6, D7, D8. A candidate that delivers capability, is reversible, and is actionable — without prohibitive cost, project-trajectory conflict, or regression-detection neglect — lands here.

### Dead regions

- **Low D1 + no principled reason** → dead. Deferring without an explicit user-context condition is not principled.
- **Low D4** → dead. Verdicts that require infrastructure not built today are unactionable for THIS inquiry.
- **Low D3 with non-trivial change** → dead. Irreversibility on a non-trivial spec change is unsafe given the project's stated regression-detection gap.

### Boundary regions

- **HIGH D1 + uncertain D7** → boundary. Verdicts that deliver capability without explicit regression check. Refinement direction: add archival/canary/indicator modifiers.
- **HIGH D1 + LOW D4** → boundary. Verdicts that promise capability but need infrastructure first. Refinement direction: condition on infrastructure readiness OR scope down to current-means.
- **Low D1 + principled deferral condition** → boundary. V3/V5 type — survives only if the user signals tight budget or high-stake risk.

### Unexplored regions

- "Reset entirely — discard both files, write spec from scratch." Out of scope per `_branch.md`.
- "Promote partial + write canary tests in same step." Hybrid V1+V5; not in candidate set; would land in boundary.

---

## Phase 2 — Adversarial Evaluation (per candidate)

### V1 — Full promote (file swap)

**Prosecution:**
- *D7 (regression-detection alignment):* the project has no automated regression detection (auto-memory). V1 swaps the spec with no canary check. If the firing schedule biases practitioner output in subtle ways (e.g., over-rigidifies into mechanical hook-checking), V1 has no detection mechanism. Severity: MEDIUM-HIGH on D7.
- *D6 (mis-application precedent):* V1 sets a wholesale-swap precedent for future live/workshop pairs without explicit policy.
- *D2 (cost):* 16% context growth per spec load.
- *Specification-gap probe:* V1 doesn't include archival (snapshot live before swap). The project's `archived_skills/<sha>-hg/` convention is named but not invoked. **Gap.**
- *User-perspective objection (from _branch.md goal):* the user wanted an actionable verdict — V1 satisfies this. **Pro-V1.**

**Defense:**
- *D1 (capability gain):* maximal, including evolvability.
- *D4 (actionability):* one git operation.
- *D3 (reversibility):* high — `git revert` restores. Improved further if combined with V6.
- *D5 (coherence):* the firing schedule operationalizes Meta-Inspection, aligning with Family II operationalization milestones.

**Collision:** Prosecution's D7 concern applies symmetrically to ALL current spec changes (the regression infrastructure doesn't exist). Defense's reversibility provides the safety net. The archival specification-gap is fixable via V6 modifier.

**Position:** Viable region with a specific specification gap (archival missing).

**Verdict: REFINE → V1 + V6**

*Constructive output:* Promote V1 alongside V6 (archival step) to address the specification gap. V1 standalone is incomplete.

---

### V2 — Selective promote (3 substantive elements)

**Prosecution:**
- *D2 (cost):* wins — half the line cost of V1.
- *D4 (actionability):* multi-section merge is harder than file swap; the merge must be atomic to preserve internal cross-references.
- *D1 (capability gain):* excludes the 4 spec-meta subsections — evolvability (Hooks extensibility procedure) is left in workshop.
- *Specific failure-case scenario:* if the merge is non-atomic, the firing schedule could reference the Hooks Extensibility section that isn't merged, leaving a dangling reference. *Mitigation: atomic merge is straightforward to enforce; not a fatal flaw.*
- *Specification-gap probe (subtler):* the Step 5 conformance note specifically argues the bypass-at-N=1 governance for shipping the firing schedule. V2 excludes the conformance note, so V2 ships the firing schedule *without* its in-spec governance justification. Governance gap.
- *Specification-gap probe (archival):* same as V1 — V6 fixes it.

**Defense:**
- *D2:* half the cost.
- *D6 (mis-application):* the 4 spec-meta subsections were flagged in Sensemaking as borderline; leaving them in workshop preserves experimental status.
- *D5:* aligns with iteration discipline — promote what's load-bearing; defer the rest.

**Collision:** V2's cost savings (32 lines) are real but small. Merge atomicity is enforceable. The governance gap (no Step 5 conformance note) is a real but recoverable weakness — the user could add a one-line "this section bypasses Step 5 at N=1 per [external doc]" if they want governance transparency.

**Position:** Boundary region. Weaker than V1 on capability and governance; stronger on cost.

**Verdict: REFINE → V2 + V6 + governance acknowledgment**

*Constructive output:* If V2 is selected, the merge must be atomic AND the user must explicitly accept the governance gap (or add a one-line conformance note inline with the firing schedule).

---

### V3 — Keep workshop (no action)

**Prosecution:**
- *D1 (capability gain):* zero immediate gain. The verdict that the draft is more capable doesn't translate into runtime capability.
- *D4 (actionability):* "no action" is technically actionable but defers the question.
- *User-perspective objection:* the user invoked /MVL+ for a verdict. V3 delivers "we decided not to decide." Misses the user's framing.
- *D5 (coherence):* the project's Family II priorities lean toward operationalization; deferring is misaligned absent explicit cause.
- *Specific failure-case scenario:* per EX-1Y (Innovation), if the draft accumulates more edits without promotion, the live-vs-workshop divergence widens, making future promotion harder.

**Defense:**
- *D3 (reversibility):* zero risk; nothing changes.
- *D2 (cost):* zero spec growth.
- *Conditional principle:* IF context budget is tight OR evidence of regression risk is insufficient, deferring is principled.

**Collision:** Defense's "no risk" survives only if there's a principled reason to wait. Prosecution's "you decided draft is more capable; why not act?" wins under default conditions. V3 survives only conditionally.

**Position:** Dead region for the "act now" framing; boundary region if explicit deferral condition applies.

**Verdict: REFINE → V3 requires explicit user-context deferral condition**

*Constructive output:* V3 is principled only if the user names a specific blocking condition (tight context budget, insufficient regression evidence, etc.). Absent that, V3 loses to V1+V6.

---

### V4 — Codify workshop pattern as spec-evolution protocol

**Prosecution:**
- *D4 (actionability):* not actionable for THIS inquiry. Addresses a meta-question the user didn't explicitly ask.
- *User-perspective objection:* the user scoped to two specific files. V4 reframes to project-wide; going meta without consent.
- *D1 (capability gain for the current question):* zero immediate gain on the two-file question.
- *Specification-gap probe:* V4 says "codify the pattern" but doesn't specify the protocol's phases, evidence gates, or lifecycle states.
- *Specific failure-case scenario:* V4 ships as an empty container — "let's codify" without protocol design — leaving the current question unanswered.

**Defense:**
- *Convergence signal:* V4 had 5-mechanism convergence in Innovation — the strongest signal in this run.
- *D5 (coherence):* aligns with Family III–IV milestones (self-maintenance, meta-loop architecture).
- *Long-term value (D1 on meta-question):* high — the workshop pattern will likely proliferate (per EX-5Y); early codification is cheaper than late.

**Collision:** V4's meta-reframe is principled and aligns with project trajectory, but doesn't answer the user's THIS question. Defense wins on the meta-axis; prosecution wins on this-inquiry actionability.

**Position:** Boundary region — high value on a different axis than V1/V2/V3 occupy.

**Verdict: REFINE → V4 deferred with explicit revival trigger**

*Constructive output:* V4 ships as a DEFERRED disposition with revival trigger: *"when a second discipline acquires a workshop variant, OR when the user explicitly initiates a spec-evolution-protocol inquiry."* This preserves the convergent-mechanism signal while respecting this inquiry's scope.

---

### V5 — Block promotion until canary tests exist

**Prosecution:**
- *D4 (actionability):* blocks today.
- *Specific failure-case scenario:* canary tests don't exist; "build canaries first" is itself a large project (Family II priority but unbuilt). V5 effectively defers indefinitely without explicit timeline.
- *D2 (cost):* high — requires building canary infrastructure.
- *Specification-gap probe:* V5 says "block until canaries exist" but doesn't specify what canary tests would catch (what regression signal exactly?). Without that spec, V5 is incomplete.
- *User-perspective objection:* the user wanted a verdict, not a precondition.

**Defense:**
- *D7 (regression-detection alignment):* wins decisively — sequences spec capability against safety substrate.
- *D3 (reversibility):* wins — no change happens without infrastructure.
- *D5 (coherence):* aligns with Family II priority on regression detection.

**Collision:** Defense wins on D7/D5 strongly. Prosecution wins on actionability and specification-gap. The decisive axis is stake level — if the firing schedule's runtime-cognition-level risk is high, V5 wins; if it's structurally additive (which Sensemaking established), V5 is excessive caution for this case.

**Position:** Boundary region; verdict depends on stake assessment.

**Verdict: REFINE → V5 deferred with explicit revival trigger; stake assessment overrides**

*Constructive output:* V5 ships as DEFERRED with revival trigger: *"if canary infrastructure ships for safety-substrate independent reasons, revisit promotion gates."* For THIS inquiry's stake level (structurally-additive change, no regressions on diff basis), V5 is excessive caution. V1+V6 acts now; V5-deferred preserves the regression-detection concern visibly.

---

### V6 — Promote with archival step (snapshot live before swap)

**Prosecution:**
- *D1 (capability gain):* zero standalone; V6 is a modifier.
- *Actionability as standalone:* confused — V6 alone doesn't say what to promote.
- *Specification-gap probe:* where does the snapshot go? `archived_skills/<sha>-hg/sense-making/references/sensemaking.md`? V6 should specify explicitly.

**Defense:**
- *D3 (reversibility):* improves V1's reversibility — even if git history is later rewritten, archive copy remains.
- *D7 (regression-detection alignment):* partial — archival is half of regression detection (snapshot exists; comparison logic missing, would need V5 for that).
- *D5 (coherence):* aligns with the project's existing `archived_skills/<sha>-hg/` convention (README2.md and auto-memory).
- *D2 (cost):* trivial (one `cp` + git commit).

**Collision:** V6 is uncontroversially good as a modifier; the only question is what it modifies. Specification-gap is small (any reasonable archival path suffices).

**Position:** Viable as modifier; not standalone.

**Verdict: SURVIVE (as modifier to V1 or V2)**

*Caveats:* none on critical dimensions when used as modifier.

---

### V7 — Feature-flag / discipline configurability

**Prosecution:**
- *D4 (actionability):* low — requires non-trivial SKILL.md or runner changes that don't exist.
- *D2 (cost):* high — introduces configurability layer the project lacks.
- *Specification-gap probe:* V7 names "feature flag" without specifying flag name, location, default state, telemetry mechanism.
- *Specific failure-case scenario:* flag-default-OFF means firing-schedule capability doesn't apply until flip; the user is one user, so evidence collection for flip is slow. Capability gain materializes never or after multi-month delay.
- *User-perspective objection:* the user asked for comparison and verdict, not infrastructure design.

**Defense:**
- *D1 (meta-question capability gain):* high — opens discipline configurability as a category.
- *D5 (coherence):* the project's Family III milestones (/intuit Phases A–D) involve gated rollout; configurability aligns long-term.
- *Convergence:* 3-mechanism (DT-Software + DT-Compilers + AR-Redesign).

**Collision:** Prosecution wins decisively on actionability and specification gaps. Defense is principled but unactionable for this inquiry.

**Position:** Dead region for this inquiry's actionable scope.

**Verdict: KILL (for this inquiry); RESEARCH FRONTIER disposition**

*Constructive seed:* "Configurability is valuable but requires SKILL.md/runner infrastructure first. Revisit when the runner adds config-loading capability (likely Family III timeframe)."

---

### V8 — LIVE/WORKSHOP indicator on spec files

**Prosecution:**
- *D1 (runtime discipline gain):* low — V8 helps readers, not the discipline at runtime.
- *Specification-gap probe:* V8 doesn't specify exact indicator format ("// LIVE" vs YAML frontmatter vs filename suffix vs `discipline.json`). Any reasonable choice suffices.
- *User-perspective objection:* small; addresses a real ambiguity (both files claim "loaded by SKILL.md").

**Defense:**
- *D6 (mis-application):* wins decisively. Both files currently have identical loading notes; a practitioner reading the draft could believe it's live. V8 fixes this.
- *D2 (cost):* trivial (one header line).
- *D5 (coherence):* aligns with documentation discipline.
- *D8 (discipline self-containment):* indicator stays inside the discipline; doesn't add outbound pointer (respects the principle).

**Collision:** V8 is a small but uncontroversially good parallel improvement.

**Position:** Viable as parallel small improvement, independent of V1–V7.

**Verdict: SURVIVE (as parallel improvement)**

*Caveats:* pick a concrete indicator format before shipping; recommend YAML frontmatter line (`status: live` vs `status: workshop`) for machine-parsability.

---

## Phase 3.5 — Assembly Check

Two emergent assemblies surface from the survivors and refinements:

### Assembly A — V1 + V6 + V8 + V4-deferred + V5-deferred

**Prosecution:**
- *Kitchen-sink concern:* is this genuine emergent value, or just stuffing every survivor into the answer?
- *Maintenance complexity:* 3 immediate actions + 2 deferrals adds operational burden over a clean "V1, done."
- *Specification-gap probe:* the V4-deferred and V5-deferred revival triggers need to be monitorable. V4 ("when a second workshop appears") requires watching the codebase; V5 ("when canary infrastructure ships") requires watching the safety-substrate work. The user must commit to these triggers or they'll be forgotten.

**Defense:**
- *Genuine emergence:* each component addresses a distinct dimension:
  - V1 → D1 (capability gain)
  - V6 → D3 (reversibility) + D7 (partial)
  - V8 → D6 (mis-application)
  - V4-deferred → D5 (long-term coherence; preserves convergent-mechanism signal)
  - V5-deferred → D7 (regression-detection visibility)
- *Multi-dimensional completeness:* V1 alone misses D6 and the explicit D7 visibility. The assembly is multi-dimensionally complete, not just larger.
- *Modularity:* V6 and V8 are independent of V1; the assembly is composable, not entangled.

**Collision:** Kitchen-sink concern doesn't survive — each component is dimensionally distinct. Maintenance complexity is acknowledged but small (V6 is one snapshot operation; V8 is one header line; V4/V5 deferrals are notes, not actions).

**Position:** Viable region; high fitness across most dimensions.

**Verdict: SURVIVE — Assembly A is the top-ranked survivor**

---

### Assembly B — V3 + V8 (defer-with-clarity)

**Prosecution:**
- *D1:* zero capability gain (still V3's weakness).
- *D4:* low actionability for capability terms.
- *User-perspective objection:* the user invoked /MVL+ to get a verdict; B delivers deferral + indicator.
- *Failure-case scenario:* if user-context conditions change (capacity opens, budget tightens), B doesn't trigger re-evaluation automatically.

**Defense:**
- *D3:* zero risk.
- *D6:* gains V8's mis-application fix.
- *D7:* maximal alignment (no spec change at all).
- *Principled-deferral story:* B answers "what if the user has explicit reason to defer?" cleanly — defer AND eliminate the live/workshop ambiguity that prompted the inquiry.

**Collision:** Defense wins only conditionally on explicit deferral. Prosecution wins under default conditions.

**Position:** Boundary region; conditional on explicit user signal.

**Verdict: REFINE — Assembly B requires explicit user deferral signal**

*Constructive output:* B is the right answer ONLY if the user names a deferral condition (tight budget, infrastructure-readiness wait, etc.). Default is Assembly A.

---

## Coverage Map

| Region | Status | Candidates |
|---|---|---|
| Viable (HIGH D1+D3+D4, acceptable D2+D5+D6+D7+D8) | Mapped, populated | Assembly A (top survivor); V6, V8 (modifiers); V1+V6 (V1 refinement); V2+V6+governance-note |
| Boundary — HIGH D1, uncertain D7 | Mapped, populated | V1 alone (REFINEd to V1+V6); V2 alone (REFINEd to V2+V6+governance) |
| Boundary — HIGH D1, LOW D4 | Mapped, populated | V5 (REFINEd to deferred); V7 (KILLed for this inquiry, RESEARCH FRONTIER) |
| Boundary — LOW D1, principled deferral | Mapped, conditionally populated | V3 (REFINEd to needs-condition); Assembly B (REFINEd similarly) |
| Dead — LOW D4, no principled reason | Confirmed empty | (no clean candidate lands here) |
| Dead — irreversible non-trivial change | Confirmed empty | (no candidate proposes this) |
| Unexplored | "Reset from scratch" — out of scope per `_branch.md`; "Hybrid V1+inline-canary" — not in candidate set, would land in boundary | n/a |

---

## Phase 4 — Coverage + Convergence Assessment

### Accumulator state (this iteration)

- **Candidates evaluated:** 10 (V1–V8 + Assembly A + Assembly B)
- **Verdicts:** 1 KILL (V7), 5 REFINE (V1→V1+V6, V2→V2+V6+governance, V3→needs-condition, V4→deferred, V5→deferred, Assembly B→needs-condition), 2 SURVIVE-as-modifier (V6, V8), 1 SURVIVE-clean (Assembly A)
- **Coverage map:** viable region populated; dead regions confirmed empty; boundary regions populated and refined; unexplored regions are out-of-scope or hybrid corner cases

### Convergence criteria

| Criterion | Met? |
|---|---|
| ≥1 SURVIVE with no caveats on critical dimensions | ✓ — Assembly A |
| Landscape stable (no new region surfacing late) | ✓ — all candidates land in already-mapped regions |
| No likely-viable unexplored regions | ✓ — unexplored regions are out-of-scope by branch design |
| Decreasing rate of new information | ✓ — Phase 3.5 produced one new assembly (Assembly A as composition) but no new region |

**All convergence criteria met.**

### Failure-mode check

| Failure mode | Observed? |
|---|---|
| Wrong dimensions | No — dimensions extracted from Sensemaking + project-specific D7/D8 included per refinement |
| Rubber-stamping | No — V7 KILLed; V3/V5 REFINEd with substantive critique |
| Nitpicking | No — verdicts use weighted dimensions; KILLs require critical-dimension failure |
| Dimension blindness | No — D7 and D8 surfaced as project-specific axes; cross-referenced against Sensemaking perspectives |
| False convergence | No — Assembly A has clean SURVIVE with no critical-dimension caveats |
| Evaluation drift | No — dimensions held constant across all 10 candidates |
| Self-reference collapse | **FLAG** — this is critique of a Sensemaking spec using Sensemaking-derived critique dimensions. External grounding: (i) git activity (independent); (ii) line-level diff (mechanical); (iii) project's auto-memory (independent); (iv) explicit positional verdicts (not narrative). Verdict survives. |

---

## Signal — TERMINATE

The inquiry has converged. Ranked survivors:

### Rank 1 — Assembly A (recommended)

**V1 (full promote) + V6 (archival step) + V8 (LIVE/WORKSHOP indicator) + V4 (deferred with revival trigger) + V5 (deferred with revival trigger)**

*Operationally:*
1. Snapshot the current `homegrown/sense-making/references/sensemaking.md` to `archived_skills/<sha>-hg/sense-making/references/sensemaking.md` (V6).
2. Replace `sensemaking.md`'s content with `sensemaking_problem.md`'s content; delete `sensemaking_problem.md` (V1).
3. Add a `status: live` YAML frontmatter line to the new `sensemaking.md`; (or add `status: workshop` to any future draft) (V8).
4. Record in the project's design-history or a deferrals log: *"V4 deferred — revisit when a second discipline acquires a workshop variant OR when the user initiates a spec-evolution-protocol inquiry"* (V4-deferred).
5. Record: *"V5 deferred — revisit when canary regression infrastructure ships"* (V5-deferred).

### Rank 2 — Assembly B (only under explicit deferral signal)

**V3 (keep workshop) + V8 (LIVE/WORKSHOP indicator)**

Use only if the user explicitly signals tight context budget, infrastructure-readiness wait, or other principled deferral cause.

### Rank 3 — V2+V6+V8+governance-note (cost-prioritized variant)

If cost (~32 lines) dominates user concern, V2 substitutes for V1. Adds: atomic merge of the 3 substantive elements + V6 (archival) + V8 (indicator) + a one-line governance acknowledgment inline with the firing schedule (filling the Step 5 conformance gap).

### Killed / deferred to research frontier

- **V7 (configurability)** — KILLed for this inquiry; RESEARCH FRONTIER disposition. Revisit when SKILL.md/runner adds config-loading capability.

---

## Convergence Telemetry

- **Dimensions:** 8 / 8 applied; project-specific D7 and D8 included per refinement
- **Adversarial strength:** **STRONG** — prosecution found killer objections (V7's actionability, V3's no-gain, V4's actionability), specification-gap probes fired on V1/V2/V5/V7/V8, multi-axis prosecution applied per refinement
- **Landscape stability:** **STABLE** — no new regions surfaced in Phase 3.5; assembly composition added value but stayed within mapped regions
- **Clean SURVIVE:** **YES** — Assembly A
- **Failure modes:** None observed; Self-Reference Collapse flagged with external grounding applied
- **Overall:** **PROCEED**
