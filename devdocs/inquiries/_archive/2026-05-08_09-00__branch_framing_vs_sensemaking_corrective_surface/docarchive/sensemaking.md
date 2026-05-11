# Sensemaking: Branch-Framing vs Sensemaking Corrective Surface

## User Input

devdocs/inquiries/2026-05-08_09-00__branch_framing_vs_sensemaking_corrective_surface/_branch.md

## SV1 — Baseline Understanding

The user's hypothesis is structurally correct: branch.md framing has higher leverage than mid-cascade Sensemaking M6 application because (a) it's upstream of all 5 disciplines, (b) template fill-in is mechanical (harder to skip than judgment-dependent rules), (c) it prevents the wrong frame from forming rather than fighting frame-momentum mid-cascade. But the user's stronger framing ("instead of frame-level change") is partially incorrect — branch.md catch and Sensemaking M6 catch operate on overlapping but non-identical cases. Composition gives defense-in-depth at marginal cost.

This sensemaking stabilizes: (a) the relationship between branch.md and W1 (composed, not exclusive); (b) the exact shape of the Scope Check sub-check; (c) the disposition update relative to the prior 08-15 finding.

## Phase 1 — Cognitive Anchor Extraction

### Constraints

1. **Lightweight non-negotiable.** Both interventions ≤ ~10 lines aggregate.
2. **Generic / meta-discipline framing.** Sample-vs-population is generic; not project-specific.
3. **Honor LOOP_DIAGNOSE Step 5 + 6 guardrails.** Per-chain narrow with monitoring; no broad rewrites.
4. **Single canonical home per intervention** (branch.md template at MVL+/SKILL.md; M6 application paragraph at sensemaking.md).
5. **Don't embed placement convention** in spec content.
6. **Address over-firing risk** structurally — leverage the existing user-presentation flow.
7. **Compose rather than replace** when surfaces have non-overlapping value.

### Key Insights

1. **Frame-formation is structurally upstream of frame-checking.** Branch.md catch happens at inquiry-creation time, before any discipline runs. M6 application catch happens mid-cascade after Exploration has already characterized the failure shape. Prevention beats correction when both are lightweight.

2. **Mechanical fill-in beats judgment-based rule application.** The branch.md template forces the runner to fill in the Scope Check section; the act of filling in surfaces the question. M6 fires when the runner recognizes a load-bearing concept — this recognition is judgment-dependent and failed in 06-30. Mechanical surfaces are more reliable than judgment-based ones.

3. **The two surfaces catch different cases:**
   - **Branch.md catches:** when the Question or Goal explicitly references a finite evidence sample (e.g., "the 10 observed failures from 20-35", "these N instances").
   - **W1 catches:** when a load-bearing concept's stabilization derives from finite evidence regardless of branch framing. Even if the branch is broadly framed, Sensemaking can narrow during Phase 1 anchor extraction (this is what happened in 06-30: branch admitted both readings; Sensemaking interpreted narrowly).

4. **Single canonical home across the methodology library.** The branch.md template lives in `homegrown/MVL+/SKILL.md` (and a copy/parallel in `/MVL`). Editing it once propagates to all future MVL+ root inquiries. This is the highest-leverage edit point — single-line change at the template affects all future inquiries from that point on.

5. **The existing Scope Check section already has user-presentation flow.** When the Scope Check flags a gap, MVL+/SKILL.md line 87 says: *"If the scope check flags a gap, present the proposed wider question to the user before proceeding. The user decides whether to widen or keep the original scope."* The over-firing risk is structurally bounded — the user gets to confirm. Adding a sample-vs-population sub-check inherits the same flow without adding new structure.

6. **Disposition update relative to prior 08-15 finding.** The prior finding listed:
   - W1 (Sensemaking M6 extension) as ACTIONABLE PRIMARY.
   - WX (runner-level branch-framing patch) as DEFERRED.
   This finding REVERSES that relative ordering: WX (now Edit 1) is PROMOTED to PRIMARY; W1 (now Edit 2) STAYS as defense-in-depth. The composition is preserved; only the ranking changes.

7. **The user's framing — "if we improve branch.md phrasing, we won't have such issue" — is partially correct.** A structurally better branch prevents most cascades. But it doesn't catch every case (e.g., when the branch is correctly framed but Sensemaking still narrows during Phase 1 anchor extraction). W1 covers those residual cases. Composition gives full coverage.

### Structural Points

1. **Edit 1 (PRIMARY) — Branch.md template extension at MVL+/SKILL.md:** add a sample-vs-population sub-check to the existing Scope Check section. Wording targets the generic pattern (any finite evidence sample); not project-specific.

2. **Edit 2 (SECONDARY — was W1 in 08-15) — Sensemaking M6 application extension at sensemaking.md:** keep the prior 08-15 finding's W1 candidate. ~70 words; one paragraph; defense-in-depth.

3. **Aggregate cost:** ~5-7 lines (Edit 1) + ~70 words (Edit 2) = ~10-15 lines across 2 files.

4. **The prior 08-15 finding's WX deferral was conservative but suboptimal.** WX was deferred because (a) Sensemaking is the dedicated frame-checking discipline; (b) runner-level patches risk over-firing. This new analysis shows: the over-firing risk is bounded by the existing Scope Check user-presentation flow; and the leverage advantage of branch.md surface is large enough to justify promotion.

### Foundational Principles

1. **Frame-formation > frame-checking when both are lightweight.** The user's hypothesis embodies this principle.

2. **Mechanical fill-in > judgment-based recognition.** Templates surface questions structurally; rules surface them only when applicability is recognized.

3. **Single canonical home per intervention.** Branch.md at MVL+/SKILL.md; M6 at sensemaking.md. Each surface has one canonical home.

4. **Composition gives defense-in-depth at marginal cost when surfaces have non-overlapping value.**

5. **Over-firing risk should be structurally bounded** (via existing user-presentation flow), not eliminated (which requires shutting down the check entirely).

### Meaning-Nodes

1. **Frame formation** — the moment the Question + Goal + Scope Check are filled in at inquiry creation. Branch.md is the surface.
2. **Frame checking** — the discipline-time test of stabilized frames at Sensemaking Phase 3. M6's surface.
3. **Sample-vs-population** — the central concept. The available evidence is a sample; the underlying problem class is the population. Treating sample distribution as bounding population leads to narrow scope.
4. **Mechanical surface** — a structural element (e.g., template section) the runner has to fill in. Forces the question.
5. **Judgment-based surface** — a rule that fires when applicability is recognized. Vulnerable to recognition-cue failure.
6. **Defense-in-depth composition** — multiple non-overlapping catches across upstream + downstream surfaces.

## SV2 — Anchor-Informed Understanding

Anchor extraction confirms: composed approach (Edit 1 + Edit 2) with Edit 1 as PRIMARY (was WX deferred in 08-15). The prior 08-15 disposition is reversed in ranking, not in inclusion. Edit 1's wording targets generic sample-vs-population; uses existing user-presentation flow for over-firing mitigation.

## Phase 2 — Perspective Checking

### Technical / Logical Perspective

Both edits are mechanically applicable:
- **Edit 1:** runner reads the template section when writing branch.md → asks "does Q or G reference a finite sample?" → if yes, states which target (sample or population). If both plausible, presents to user.
- **Edit 2:** runner reads M6's recognition cue when running Sensemaking → if a load-bearing concept names "what the problem IS" derived from finite evidence, generates ambiguity-collapse pair testing sample-vs-population.

NEW ANCHOR: both edits have observable triggers; over-firing risk on Edit 1 mitigated by existing user-presentation flow.

### Human / User Perspective

The user explicitly hypothesized branch.md as the higher-leverage surface. This finding confirms the structural intuition. The user's "instead of" framing is corrected to "primary plus secondary defense-in-depth," respecting the composition principle the user originally established (Component A + W1 composition was the user's-supported pattern in earlier chains).

NEW ANCHOR: user-correction is honored at intent level (branch.md gets promoted) while preserving the composition discipline the user has consistently endorsed.

### Strategic / Long-term Perspective

Long-term: every future MVL+ root inquiry inherits the extended Scope Check. Single edit at MVL+/SKILL.md template propagates indefinitely. This is the highest-leverage edit in the methodology library — comparable to how the placement convention's principle change affects all future rule additions.

NEW ANCHOR: branch.md template edits scale; per-discipline edits scale slower (one discipline at a time).

### Risk / Failure Perspective

Risks:
- **Over-firing on legitimate user-narrow-scope requests.** Mitigation: existing user-presentation flow at MVL+/SKILL.md line 87 — when the Scope Check flags a gap, the user gets to confirm. The sample-vs-population sub-check inherits this flow; over-firing is bounded.
- **Edit 1 doesn't fire when the branch is implicitly sample-bounded** (no explicit reference to a finite sample, but the goal still derives from finite evidence). W1 catches these residual cases at Sensemaking. Composition mitigates.
- **Disposition update from 08-15 may confuse readers.** Mitigation: explicit reasoning in this finding's body about why WX is promoted; clean SUPERSEDES marker on the prior 08-15 finding's W1+WX disposition.

NEW ANCHOR: over-firing structurally bounded; Edit 2 as defense-in-depth handles residual cases.

### Resource / Feasibility Perspective

Implementation cost:
- Edit 1: ~5-7 lines added to existing Scope Check section in MVL+/SKILL.md.
- Edit 2: ~70 words added to existing M6 application paragraph in sensemaking.md.
- Aggregate: ~10-15 lines across 2 files.

Smaller than the original Component B's ~25-30 lines + per-output scan overhead.

NEW ANCHOR: bounded cost; smallest meaningful intervention covering both surfaces.

### Definitional / Consistency Perspective

Consistency:
- Edit 1 extends an existing Scope Check section without changing its structure. No new section added.
- Edit 2 extends an existing M6 application paragraph. No new failure mode introduced.
- Composition with prior chains' interventions is clean: Component A at conclude.md + Generic Convention at 5 disciplines (07-15) + Edit 1 at MVL+/SKILL.md + Edit 2 at sensemaking.md = methodology-library wide non-ambiguity coverage.

NEW ANCHOR: extension-not-replacement at both surfaces.

## SV3 — Multi-Perspective Understanding

Six perspectives confirm:
- Logical/Technical: both edits mechanically applicable.
- Human/User: user-correction honored at intent level via composition.
- Strategic: branch.md scales; highest-leverage edit point.
- Risk/Failure: over-firing structurally bounded; Edit 2 covers residuals.
- Resource/Feasibility: ~10-15 lines aggregate.
- Definitional/Consistency: extension-not-replacement at both surfaces.

## Phase 3 — Ambiguity Collapse

### Ambiguity 1: Should Edit 1 REPLACE W1 (per the user's "instead of" framing) or COMPOSE with W1?

**Strongest counter-interpretation (REPLACE):** branch.md is upstream of all 5 disciplines; if it fires correctly, the cascade can't form; Sensemaking-level intervention is redundant.

**Why the counter fails (structural grounds):** branch.md catches when the Question or Goal EXPLICITLY references a finite evidence sample. But the failure mode also fires when the branch is broadly framed but Sensemaking still narrows during Phase 1 anchor extraction (e.g., when the branch says "fix this discipline" without referencing a sample, but Sensemaking's Insight #3 still derives from the available evidence). W1 catches these residual cases. Replacement loses defense-in-depth.

**Confidence:** HIGH (different cases; correlated but non-identical).

**Resolution:** COMPOSED — Edit 1 PRIMARY + Edit 2 SECONDARY (defense-in-depth).

### Ambiguity 2: Edit 1's wording — should the sample-vs-population sub-check be a separate sub-section under Scope Check, or inline within the existing Scope Check sentence?

**Strongest counter-interpretation (separate sub-section):** clearer; structurally salient; runner can't miss it.

**Why the counter fails (structural grounds):** the existing Scope Check is one paragraph asking *"does Q cover G?"* Adding a separate sub-section (multiple paragraphs) adds template structure. Inline sub-check (additional sentence within the existing Scope Check paragraph) extends the existing structure without adding sections. The placement convention favors single canonical home + minimum structural addition.

**Confidence:** MEDIUM-HIGH (both work; inline is more conservative).

**Resolution:** inline sub-check. Existing Scope Check section gains an additional sentence/clause about sample-vs-population. No new section.

### Ambiguity 3: Edit 1's recognition cue — should it list specific evidence-sample patterns (e.g., "the N observations", "one corpus chain") or use a generic principle?

**Strongest counter-interpretation (generic principle only):** "if the goal references finite evidence" — let the runner judge.

**Why the counter fails (structural grounds):** the prior 06-30 failure shows that pure generic principle doesn't reliably trigger recognition. Concrete examples ground the abstraction. Same logic as the prior 07-15 finding's generic non-ambiguity convention with 5 illustrative type examples.

**Confidence:** HIGH (same precedent as 07-15 + sister analyses).

**Resolution:** Edit 1 wording includes 2-3 illustrative example patterns ("e.g., 'the N observations', 'one corpus chain', 'these specific instances'"). Innovation finalizes exact text.

### Ambiguity 4: Should the prior 08-15 finding's W1+WX disposition be marked SUPERSEDED?

**Strongest counter-interpretation:** the prior 08-15 finding stays ACTIVE; this new finding REFINES it. No SUPERSEDED marker.

**Why the counter holds (structural grounds — counter is correct here):** the 08-15 finding's diagnosis is correct; its W1 candidate is correct; only the ranking (W1 PRIMARY, WX DEFERRED) is updated. The 08-15 finding's substantive content stays. This is a REFINES relationship, not SUPERSEDES.

**Confidence:** HIGH.

**Resolution:** REFINES (not SUPERSEDES). The 08-15 finding's W1 stays ACTIONABLE; WX is promoted from DEFERRED to ACTIONABLE; the relationship is composition.

### Ambiguity 5: Should Edit 1 also propagate to the classic /MVL runner spec (`homegrown/MVL/SKILL.md`)?

**Strongest counter-interpretation (no propagation):** /MVL is classic; out of scope for this finding.

**Why the counter fails (structural grounds):** /MVL also has a `_branch.md` template (or inherits a similar structure). Future classic inquiries would benefit from the same Scope Check extension. Propagating costs one additional ~5-7 line edit.

**Counter-counter:** scope creep. The user explicitly named MVL+ as the surface; classic /MVL is a separate concern.

**Confidence:** LOW-MEDIUM (defensible either way; depends on whether /MVL has the same template structure).

**Resolution:** focus this finding on MVL+/SKILL.md. If /MVL has parallel structure, propagation is a DEFERRED follow-up; if /MVL diverges, the propagation question is for a separate inquiry. Innovation can verify /MVL's template structure as a check.

## SV4 — Clarified Understanding

After ambiguity collapse:
- Edit 1 (Branch.md Scope Check extension) PRIMARY; inline sub-check; 2-3 illustrative example patterns.
- Edit 2 (W1 — Sensemaking M6 extension) SECONDARY (defense-in-depth).
- Composed, not exclusive.
- Prior 08-15 finding REFINED (not SUPERSEDED): W1 stays ACTIONABLE; WX (now Edit 1) PROMOTED.
- /MVL propagation: DEFERRED follow-up; verify Innovation.

## Phase 4 — Degrees-of-Freedom Reduction

### Fixed

1. Edit 1 PRIMARY at MVL+/SKILL.md branch.md template Scope Check section.
2. Edit 2 SECONDARY at sensemaking.md (W1 from prior 08-15 finding).
3. Composition (not replacement).
4. Prior 08-15 REFINED, not SUPERSEDED.
5. Edit 1 placement: inline sub-check within existing Scope Check; not new section.
6. Edit 1 wording: generic principle + 2-3 illustrative example patterns.
7. /MVL propagation: deferred follow-up.
8. Aggregate cost: ~10-15 lines across 2 files.

### Eliminated

1. Edit 1 alone (no W1) — loses defense-in-depth.
2. W1 alone (no Edit 1) — misses upstream catch (prior 08-15's choice; updated here).
3. New Scope Check sub-section.
4. Heavy approaches (Frame-Sensitivity Check, Inheritance Hand-Off section).
5. Pure generic principle without examples.
6. SUPERSEDES marker on prior 08-15 finding (REFINES is the correct relationship).

### Remaining

1. Concrete final wording for Edit 1 (Innovation).
2. Verify /MVL template structure (Innovation; defer follow-up if needed).

## SV5 — Constrained Understanding

The constrained answer:

- **Edit 1 (PRIMARY):** extend Scope Check section in `homegrown/MVL+/SKILL.md` branch.md template with inline sample-vs-population sub-check. Generic principle + illustrative examples. ~5-7 lines.

- **Edit 2 (SECONDARY/defense-in-depth):** apply W1 at `homegrown/sense-making/references/sensemaking.md` per prior 08-15 finding's section 4. ~70 words.

- **Aggregate:** ~10-15 lines across 2 files.

- **Innovation's job:** finalize Edit 1's exact wording; verify /MVL template parallel structure (defer propagation if needed).

- **Critique's job:** verify composition over replacement; verify over-firing risk structurally bounded; verify lightweight criterion; verify REFINES (not SUPERSEDES) for the prior 08-15 finding.

## Phase 5 — Conceptual Stabilization

### Stable Model

```
The user's hypothesis (branch.md framing as the corrective surface) is
structurally correct on leverage but partially incorrect on exclusivity.
Composition gives defense-in-depth at marginal cost.

EDIT 1 (NEW PRIMARY — was WX in prior 2026-05-08_08-15 finding;
        promoted from DEFERRED to ACTIONABLE)
  Where: homegrown/MVL+/SKILL.md, Scope Check section of branch.md template
         (lines 84-87)
  Trigger: Question or Goal references a finite evidence sample
  Action: explicitly state whether inquiry's target is the sample or
          the underlying problem class; if both plausible, present to
          user via existing user-presentation flow
  Wording: inline sub-check; ~5-7 lines added; generic principle +
           2-3 illustrative example patterns
  Cost: ~5-7 lines at 1 file (single canonical home for branch.md template)

EDIT 2 (SECONDARY/defense-in-depth — W1 from prior 2026-05-08_08-15 finding;
        STAYS ACTIONABLE)
  Where: homegrown/sense-making/references/sensemaking.md, M6 application
         paragraph (the rule applied via 2026-05-08_00-20 sister analysis)
  Trigger: load-bearing concept stabilized in Sensemaking output names
           "what the problem IS" derived from finite evidence
  Action: ambiguity-collapse pair testing sample-vs-population
  Wording: ~70 words; one paragraph (per prior 08-15 finding's section 4)
  Cost: ~70 words at 1 file

COMPOSITION:
  Edit 1 catches at frame-formation when the goal explicitly references
  a finite sample.
  Edit 2 catches at Sensemaking when a load-bearing concept's stabilization
  derives from finite evidence regardless of branch framing.
  Different cases; correlated but non-identical; defense-in-depth.

RELATIONSHIP TO PRIOR 2026-05-08_08-15 FINDING:
  REFINES (not SUPERSEDES). W1 stays ACTIONABLE; WX (now Edit 1) promoted
  from DEFERRED to ACTIONABLE. Substantive content of prior finding stays;
  only the ranking is updated.

OVER-FIRING MITIGATION:
  Existing Scope Check user-presentation flow at MVL+/SKILL.md line 87
  bounds over-firing structurally. The runner presents alternative
  framings to the user; user decides. Sample-vs-population sub-check
  inherits this flow.

PRIOR 08-15 W2 + W7 + W8 + WX statuses (original 08-15 finding):
  W2 (Critique scope-adequacy dimension): unchanged from 08-15 — still DEFERRED-conditional.
  W7 (content cleanup for 06-30 SUPERSEDED): unchanged — already addressed by 07-15 finding.
  W8 (monitoring): unchanged — 5 tracks still active.
  WX → Edit 1: PROMOTED to ACTIONABLE (this finding's primary new disposition).
  W1 → Edit 2: STAYS ACTIONABLE.

Aggregate cost across this refinement: ~10-15 lines across 2 files
(MVL+/SKILL.md + sensemaking.md). Smallest possible intervention covering
both surfaces with defense-in-depth.
```

### Action Framework

```
Decomposition: partition into 5 pieces (Edit 1 wording + placement;
               Edit 2 reaffirmation; composition rationale; over-firing
               mitigation; prior 08-15 disposition update).

Innovation: finalize Edit 1's exact wording; verify /MVL template structure
            (defer propagation if needed).

Critique: verify composition over replacement; verify lightweight; verify
          over-firing structurally bounded; verify REFINES not SUPERSEDES.
```

## SV6 — Stabilized Model

The user's intuition that branch.md framing is the higher-leverage corrective surface is structurally correct. Branch.md is upstream of all 5 disciplines; the template is a single canonical home (one edit at `homegrown/MVL+/SKILL.md` propagates to all future MVL+ root inquiries); template fill-in is mechanical (harder to skip than judgment-dependent rules); prevention at frame-formation eliminates the cascade root rather than fighting frame-momentum mid-cascade.

But the user's stronger framing — "instead of frame-level change at Sensemaking" — is partially incorrect. Branch.md catches when the Question or Goal explicitly references a finite evidence sample; Sensemaking's M6 catches when a load-bearing concept's stabilization derives from finite evidence regardless of how the branch was framed. These are different cases; correlated but non-identical. Branch.md fix prevents most cascades from forming; W1 covers residual cases when the branch was correctly framed but Sensemaking still narrows during Phase 1 anchor extraction.

The right answer is **composition with disposition update**:

- **Edit 1 (PRIMARY)** — extend the Scope Check section in the `_branch.md` template at `homegrown/MVL+/SKILL.md` with an inline sample-vs-population sub-check. Generic principle plus 2-3 illustrative example patterns of finite-evidence-sample references. ~5-7 lines added at a single canonical home (the template). Over-firing risk bounded by the existing Scope Check user-presentation flow at MVL+/SKILL.md line 87.

- **Edit 2 (SECONDARY/defense-in-depth)** — apply W1 at `homegrown/sense-making/references/sensemaking.md` per the prior 08-15 finding's section 4. ~70 words; one paragraph appended to M6's application surface.

- **Disposition update relative to prior `2026-05-08_08-15` finding:** WX (runner-level branch-framing patch) is PROMOTED from DEFERRED to ACTIONABLE PRIMARY. W1 (Sensemaking M6 extension) STAYS as ACTIONABLE SECONDARY. The relationship between the two interventions is composition, not exclusivity. The prior finding's substantive content stays; only the ranking is updated. **REFINES**, not SUPERSEDES.

- **Aggregate cost:** ~10-15 lines across 2 files (MVL+/SKILL.md + sensemaking.md). Smallest possible intervention covering both surfaces.

The shift from SV1: composition over replacement; disposition update from prior 08-15 finding (WX promoted, W1 retained); inline sub-check (not new section); generic principle + illustrative examples (not pure principle); /MVL propagation deferred. The user's hypothesis is honored at the intent level (branch.md gets the primary corrective; user's leverage instinct validated), with the composition discipline preserved (defense-in-depth pattern the user has consistently endorsed across earlier chains).
