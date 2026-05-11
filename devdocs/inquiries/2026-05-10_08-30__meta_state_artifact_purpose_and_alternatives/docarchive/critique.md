## User Input

```
devdocs/inquiries/2026-05-10_08-30__meta_state_artifact_purpose_and_alternatives/_branch.md

[Run critique at full depth. Test spec-compatibility, function-coverage, anti-spinning, L4 deferral, inline-vs-separate-section, user-perspective, self-application, hidden coupling. Multi-axis prosecution + project-specific risks.]
```

---

# Critique: Meta-state Artifact Purpose and Alternatives

## Phase 0 — Dimension Construction

### Extracted from sensemaking

Success criteria:
1. **Spec-fidelity** — diagnosis matches meta-loop spec without overclaiming.
2. **Function-coverage at L1** — chosen alternative actually covers what the artifact would have served.
3. **Decision clarity** — user can apply the verdict today without ambiguity.
4. **Robustness to L4 evolution** — L1 choice doesn't lock in a shape that breaks at L4.
5. **Self-application** — finding follows the just-fixed CONCLUDE rule.
6. **Anti-bloat** — verdict stays tight.

### Dimensions with weights

| Dimension | Weight | Definition |
|---|---|---|
| **Spec-fidelity** | CRITICAL | Diagnosis represents the meta-loop spec without stretching it |
| **Function-coverage** | CRITICAL | Selection subsection actually covers selection-rationale + calibration-data accumulation |
| **Decision clarity** | CRITICAL | User can build L1 with the recommendation today |
| **L4 evolution robustness** | HIGH | L1 choice doesn't pre-commit a shape that breaks at L4 |
| **Self-application (descriptive names)** | HIGH | Finding follows new CONCLUDE rule |
| **Anti-bloat** | HIGH | Verdict stays tight |
| **Inline-vs-separate honesty** | MEDIUM | Variant choice is justified, not ceremonial |
| **Hidden coupling** | MEDIUM | Verdict doesn't introduce surprising dependencies |

### Project-specific risk dimension check

Candidate set involves project artifacts (`_branch.md`, the meta-loop spec) and project operations (the meta-loop runner). Risks:

- **Spec-stretching** → covered under Spec-fidelity.
- **Premature-deferral (L4 design)** → covered under L4 evolution robustness.
- **Self-reference** (questioning meta-loop design from inside MVL+) → addressed once at assembly level.
- **Bloat-replication** → covered under Anti-bloat.

Phase 0 complete.

---

## Phase 1 — Landscape Construction

### Viable region

A candidate is viable if:
- Spec-fidelity PASSES (diagnosis preserves the spec's abstract concept).
- Function-coverage PASSES (selection-rationale + calibration recorded somewhere).
- Decision clarity PASSES (user knows exactly what to add).
- L4 evolution robustness PASSES (L1 shape doesn't preclude L4 alternatives).

### Dead region

- Spec-fidelity FAILS catastrophically (overclaims spec allows something it doesn't).
- Function-coverage FAILS (recording-required functions silently dropped).

### Boundary region

- Inline-vs-separate-section choice — both work; choosing one needs justification, not just preference.

---

## Phase 2 — Adversarial Evaluation

### Test 1 — Spec-compatibility honesty

**Walkthrough of spec text on "meta-state":**

| Line | Text | Is "meta-state" abstract or specific file? |
|---|---|---|
| L11 | "meta-loop is a stateful traversal process" | abstract |
| L13 | "meta-state is its memory" | abstract concept (lowercase, no .md) |
| L45 | "updates meta-state until..." | abstract |
| L53 | "Meta-state gives it memory" | abstract |
| L121 | "create/update `_meta_state.md`" (in v1 flow) | SPECIFIC FILE |
| L126 | "update `_meta_state.md`" (in v1 flow) | SPECIFIC FILE |
| L155 | "Design `_meta_state.md` v1" (COULD action) | SPECIFIC FILE |
| L158 | "durable cross-run memory" (reasoning) | abstract |
| L203 | "_meta_state.md needs a branch graph or visited-path list" (Open Question) | SPECIFIC FILE |

**Key observation:** the spec uses BOTH the abstract concept ("meta-state is memory") AND a specific file name (`_meta_state.md`). The abstract concept is repeated; the specific file is named in the v1 flow as one buildable implementation. **Crucially, the v1 flow at L117 says "Meta-loop v1 CAN BE: ..." — "can be" signals one sufficient implementation, not the only one.** The COULD-tag on "Design `_meta_state.md` v1" (L155) further signals the file's necessity at v1 was uncertain.

So the diagnosis IS spec-compatible: it preserves the abstract concept ("meta-state is memory of the path") while implementing that memory using corpus + per-inquiry rationale rather than a discrete file. The spec doesn't preclude this; the v1 flow's "can be" framing leaves it open.

**Refinement candidate:** the finding's reasoning should EXPLICITLY name this distinction (abstract concept preserved; specific implementation is one of several allowed by the spec). Innovation's reasoning piece does this partially — but should be sharpened to call out "the spec uses 'meta-state' as a concept consistently; the specific file `_meta_state.md` appears only in the v1 flow's 'can be' implementation and the COULD-tagged design action."

**Verdict on Test 1:** PASS WITH SHARPENING. Spec-compatibility holds; finding text needs to explicitly draw the abstract-vs-implementation distinction.

### Test 2 — Function-coverage at L1

**Recording-required functions (from sensemaking):**

| Function | Where covered by Variant B (Selection subsection) | Pass? |
|---|---|---|
| Selection rationale (why this direction over others) | "Rationale" line in Selection subsection | YES — direct |
| Calibration data (later automated selectors need recorded examples) | Accumulates in corpus as Selection subsections populate; future selector reads them | YES — automatic accumulation |
| Selection direction itself (which Navigation type was picked) | "Direction" line | YES |
| Parent inquiry path (where the meta-loop came from) | "Parent" line | YES |

**All recording-required functions covered.**

**Corpus-derivable functions (from sensemaking):**

| Function | Derivation | Pass? |
|---|---|---|
| Path memory | Walk finding.md frontmatter `refines:`/`supersedes:`/`corrects:` chains + `_branch.md` Relationships | YES — already exists |
| Durable cross-run memory | Each finding.md persists; corpus IS durable | YES |
| Stateful traversal evidence | Derivable from chain | YES |
| Stop/continue support | Read finding.md statuses across the chain | YES (lossy — would be cleaner with a status summary, but works) |
| Anti-double-visitation | Check if `finding.md` exists at the candidate inquiry's path | YES |

**All corpus-derivable functions covered, with one caveat: stop/continue is "lossy" — derivable but ad-hoc. At L2-L3 the optional INDEX view would clean this up.**

**Verdict on Test 2:** PASS.

### Test 3 — Anti-spinning at L1

**Counter-construction:** at L1, the human Selector picks each move. Doesn't the human spin too? What if the human keeps DEEPENING into the same area without realizing it?

**Defense:** The L1 spec position is that humans hold cross-run context naturally for small graphs. The user's L0-vs-L1 row explicitly says "human reads/uses" the meta-state at L0/L1. If the human is doing the selecting, they ARE the spin-detector. Machine spin-detection becomes necessary at L4 when selection is autonomous.

**Concrete failure case:** a user runs 5 sequential meta-loop chains of "DEEPEN on navigation" without realizing they're spinning on the same micro-area. Without `_meta_state.md`, the spin isn't visible structurally.

**But:** with `_meta_state.md`, the spin still requires a HUMAN to read the path and notice spinning. The artifact doesn't prevent spinning; it just makes it visible. Walking the corpus chain at L1 produces the same visibility (5 inquiries with similar titles + similar rationales = visible spin).

So the question reduces to: at L1, does walking the corpus give equivalent spin-visibility to reading `_meta_state.md`? **Mostly yes.** The corpus has datetime prefixes, descriptive folder names, finding titles. A human reviewing the last 5 inquiries in `devdocs/inquiries/` sees the spin pattern.

**Verdict on Test 3:** PASS at L1 (human handles it via corpus walk). Innovation's text is correct that anti-spinning at L4 may need a system function — that's the L4 deferred decision.

### Test 4 — L4 deferral robustness

**Counter:** what if L4 needs branch-set membership state and the L1 `_branch.md` Selection subsection can't carry that information?

**Defense:** the L1 Selection subsection is per-inquiry (parent + direction + rationale). At L4, multi-head adds: which BRANCH SET was this inquiry part of? Which other heads were running concurrently? The L1 schema doesn't capture branch-set membership.

But: the L4 design can ADD a "BranchSet" line to the Selection subsection at that point (e.g., "**BranchSet:** ml-2026-05-15_session-A" identifying which multi-head session). Or build an L4-specific cross-head state file that COMPLEMENTS the L1 `_branch.md` field rather than replacing it. The L1 choice doesn't pre-commit anything that breaks at L4.

The meta-loop spec's own Open Question — "does it need a branch graph from the beginning or is visited-path enough?" — is exactly this question. The spec author already flagged the uncertainty; deferring is consistent.

**Concrete failure case:** at L4 we discover that branch-set membership requires bidirectional links (head A points to merge point B; B points back to all heads). The L1 `_branch.md` field is one-way (child → parent). Bidirectional links would need either: (a) update parent's `_branch.md` retroactively (mutates older artifacts), or (b) maintain a separate forward-edge file at L4. Either is doable; neither is precluded by the L1 choice.

**Verdict on Test 4:** PASS. L4 deferral is principled, not punting. Multiple L4 evolution paths remain open.

### Test 5 — Inline-vs-separate-section choice (Variant A vs Variant B)

**Innovation chose Variant B** (separate "Selection" subsection) because "meta-loop traversal records are structurally distinct from inquiry-author Relationships."

**Counter:** Variant A (SELECTED-FROM as another typed relationship in the existing Relationships section) is simpler. The Relationships section already has typed labels (BUILDS-ON, RELATED, REFINES, SUPERSEDED BY, CORRECTS). Adding SELECTED-FROM as another typed label fits the existing pattern. The "structurally distinct" argument could be expressed as "SELECTED-FROM is a process-relationship while BUILDS-ON is a content-relationship" — but BUILDS-ON's contents already bleed into process (the inquiry was triggered BY building on something). The distinction is ceremonial.

**Defense for Variant B:** keeping meta-loop traversal records in their own subsection signals "this inquiry was meta-loop-spawned" at a glance; the section is omitted for user-seeded inquiries. Variant A would have SELECTED-FROM appear among other relationships, requiring readers to decode whether it's present.

**Collision verdict:** **REFINE.** Both variants work. Variant A is simpler (single section; existing pattern); Variant B is more explicit. The finding should present BOTH as options with tradeoffs and let the user choose, DEFAULTING to Variant A (simpler) and noting Variant B as the alternative for stronger structural separation.

The original innovation text overclaimed Variant B's superiority — the structural distinction is real but mild. A user could equally well prefer Variant A.

**Verdict on Test 5:** REFINE. Present both variants; default to A; note B as alternative.

### Test 6 — User-perspective

The user said: "i would like to dive deeper on meta state thing. i am not sure it is necessary, maybe it is ... but lets see what is it for, what's the use case, and maybe something better alternative exists?"

The verdict (drop at L1; use Selection subsection) directly answers all three:
- What is it for: function list with 3-group split.
- Use case: by level (L0 nothing / L1 Selection subsection / L2-3 optional INDEX / L4 deferred).
- Better alternative: per-use rationale on `_branch.md`.

The user's instinct ("maybe not necessary") is validated with structural reasoning, not just deferred-to. The verdict gives them a buildable L1 today.

**Counter:** would the user push back on "drop the artifact"? Possible objection: "but the spec NAMED it; I was about to design it." Defense: the spec's COULD-tag was already signaling uncertainty; this verdict resolves that uncertainty.

**Verdict on Test 6:** PASS. User's question fully addressed.

### Test 7 — Self-application (descriptive names)

The just-fixed CONCLUDE rule requires descriptive names, not workspace IDs (D2/E1/A1-style). Does the finding follow this?

Walk-through: the finding will use phrases like "selection rationale function" instead of "A5"; "path memory function" instead of "A1"; etc. Innovation's reasoning piece uses descriptive names ("path memory, durable cross-run memory, stateful traversal evidence...") — PASSES.

But: the finding will reference the meta-loop spec's L0/L1/L2/L3/L4 levels. These are workspace identifiers in a sense, but they're INTRODUCED by the spec being discussed (not an unintroduced workspace system). The level labels appear in the meta-loop spec itself, the navigator spec's level progression, and the user's quoted question. The system IS introduced via the surrounding prose. Per CONCLUDE rule clause (b), this is the legitimate case.

**Verdict on Test 7:** PASS. Finding uses descriptive names; level labels (L0/L1/L4) are introduced in the surrounding prose, satisfying the new rule.

### Test 8 — Hidden coupling

**Question:** does the verdict create surprising dependencies?

**Couplings introduced:**
- Meta-loop runner depends on `_branch.md` Selection subsection schema (when populating).
- L2-3 optional INDEX script depends on Selection subsection text patterns (when reading).
- Future L4 cross-head state design depends on whether L1 chose Variant A or B.

**Hidden?** No. These are visible coupling between a runner and the artifacts it produces — natural, not surprising. The finding should NAME these couplings explicitly so future work doesn't break them silently.

**Refinement:** the finding's Reasoning section should add one sentence: "The meta-loop runner reads/writes the Selection subsection in `_branch.md`; if MVL+'s `_branch.md` template changes incompatibly, both must update together."

**Verdict on Test 8:** PASS WITH MINOR REFINEMENT (naming the coupling).

---

## Phase 3 — Verdict + Constructive Output

### Per-piece verdicts

| Piece | Verdict | Constructive output |
|---|---|---|
| **Verdict + function-split** | SURVIVE | No change |
| **L1 Implementation (Variant B chosen)** | REFINE | Present both Variant A (inline as new typed Relationship) and Variant B (separate Selection subsection); default to A as simpler; note B as alternative for stronger structural separation |
| **Level-aware roadmap** | SURVIVE | No change |
| **Reasoning** | REFINE | (1) Sharpen spec-compatibility argument: explicitly distinguish abstract concept ("meta-state is memory") from specific file (`_meta_state.md`); cite the v1 flow's "can be" framing and the COULD-tag. (2) Name the runner ↔ `_branch.md` coupling explicitly (one sentence) |

### Refinement directives

**Implementation Refinement — present both variants:**

> Two ways to add the rationale to next inquiry's `_branch.md`:
>
> **Option A (simpler, default):** add SELECTED-FROM as another typed entry in the existing Relationships section, alongside BUILDS-ON / RELATED / REFINES.
> ```
> ## Relationships
> - SELECTED-FROM: devdocs/inquiries/<parent>/finding.md (direction: <X>) — <one-line rationale>
> - BUILDS-ON: ...
> ```
> Pro: leverages existing typed-Relationships pattern. Con: meta-loop traversal records sit alongside content-relationships; a glance doesn't tell which kind a relationship is.
>
> **Option B (stronger separation):** a small dedicated "Selection" subsection before Relationships, omitted for non-meta-loop inquiries.
> ```
> ## Selection (when produced by meta-loop traversal)
> - **Parent:** ...
> - **Direction:** ...
> - **Rationale:** ...
> ```
> Pro: signals "this inquiry was meta-loop-spawned" at a glance. Con: extra section.
>
> Default: A. Switch to B if cross-head/branch-set fields multiply (likely at L4 when more meta-loop-specific data accumulates).

**Reasoning Refinement #1 — sharpen spec-compatibility:**

> The meta-loop spec uses "meta-state" consistently as an ABSTRACT concept ("meta-state is its memory" — lines 13, 45, 53, 158). The specific file `_meta_state.md` appears only in the v1 flow (lines 121, 126), which is introduced as "Meta-loop v1 CAN BE..." — explicitly one sufficient implementation, not a mandate. The COULD-tag on "Design `_meta_state.md` v1" (line 155) signaled the spec author's own uncertainty about whether the file was necessary at the buildable level. So this verdict preserves the abstract concept (memory of the path) while choosing a different implementation (corpus + per-inquiry rationale).

**Reasoning Refinement #2 — name the coupling:**

> Adding SELECTED-FROM (or the Selection subsection) creates a documented coupling between the meta-loop runner (which writes the field) and MVL+'s `_branch.md` template (which defines the schema). If either changes incompatibly, both must update together. This is normal runner ↔ artifact coupling; named here so it's visible.

---

## Phase 3.5 — Assembly Check

**Recommended assembly after refinements:** Verdict piece + Implementation (both options A & B with default A) + Roadmap + Reasoning (sharpened spec-compatibility + coupling note).

### Emergent value

The refined assembly produces:
- A clear verdict (drop at L1) with structural backing.
- Two implementation options letting the user choose simplicity (A) or explicitness (B).
- A spec-compatibility argument that survives prosecution.
- Named coupling so future work doesn't break silently.

**Assembly verdict: SURVIVE** (after refinements).

---

## Phase 4 — Coverage + Convergence Assessment

### Telemetry

- **Dimension coverage:** 8 dimensions; all applied.
- **Adversarial strength:** STRONG. Specific failure-cases constructed (5-DEEPEN spinning scenario; L4 branch-set bidirectional links). Spec text walked line-by-line. Variant A/B prosecution and defense balanced.
- **Landscape stability:** STABLE-WITH-REFINEMENTS. No structural changes; text-level sharpenings.
- **Clean SURVIVE:** YES (after refinements).
- **Failure modes observed:**
  - Wrong dimensions: NO.
  - Rubber-stamping: NO (REFINEs surfaced).
  - Nitpicking: NO (refinements are substantive — spec-stretching prevention; user-choice presentation).
  - Dimension blindness: NO.
  - False convergence: NO.
  - Evaluation drift: N/A.
  - Self-reference collapse: NO. Diagnosis grounds in spec text + per-inquiry artifact set.

**Overall: PROCEED**

---

## Final Deliverable

### Dimensions with weights

| Dimension | Weight | Outcome |
|---|---|---|
| Spec-fidelity | CRITICAL | REFINE → SURVIVE (sharpen abstract-vs-file distinction) |
| Function-coverage | CRITICAL | PASS |
| Decision clarity | CRITICAL | REFINE → SURVIVE (present both Variant A & B) |
| L4 evolution robustness | HIGH | PASS |
| Self-application (descriptive names) | HIGH | PASS |
| Anti-bloat | HIGH | PASS |
| Inline-vs-separate honesty | MEDIUM | REFINE (don't claim Variant B's superiority; both work) |
| Hidden coupling | MEDIUM | REFINE → SURVIVE (name the runner ↔ _branch.md coupling) |

### Fitness Landscape

**Viable:** refined assembly (Verdict + Implementation A&B with default A + Roadmap + Reasoning sharpened).
**Dead:** building `_meta_state.md` now (premature commitment); inline-only without acknowledging Variant B (overclaims simplicity); separate-section-only with strong "structurally distinct" claim (overclaims distinction).
**Boundary:** the original innovation Variant-B-only choice; refinements pull into viable.
**Unexplored:** completely different verdict shape (e.g., embed selection rationale in the seed prompt that triggers MVL+ rather than in `_branch.md`) — out of scope.

### Candidate Verdicts

| Candidate | Verdict | Direction |
|---|---|---|
| Verdict + function-split | SURVIVE | No change |
| Implementation (single Variant B) | REFINE → SURVIVE | Present both; default A |
| Roadmap | SURVIVE | No change |
| Reasoning | REFINE → SURVIVE | Sharpen spec-fidelity + name coupling |
| **Recommended assembly (refined)** | **SURVIVE** | **Proceed to CONCLUDE** |

### Coverage Map

All critical + high dimensions evaluated. Multi-axis prosecution applied. Spec text verified line-by-line. Variant comparison balanced.

### Signal

**TERMINATE** — clean SURVIVE achieved (after refinements); coverage sufficient. Proceed to CONCLUDE.

---

## Honest Value Tag

**MEDIUM-HIGH.** Critique surfaced two substantive refinements:

1. **Spec-fidelity sharpening:** Innovation's spec-compatibility claim was correct in substance but glossed over the abstract-vs-specific distinction. Without the sharpening, a careful reader of the meta-loop spec might prosecute the diagnosis as "the spec literally names `_meta_state.md`; you're hand-waving past it." The refinement preserves the verdict while explicitly drawing the distinction.

2. **Variant choice presentation:** Innovation's "Variant B is structurally distinct" claim was overstated. Both variants work; the choice is mild. Presenting both with tradeoffs (default to simpler A; alternative B for stronger separation) gives the user agency rather than imposing a marginal preference.

Plus minor refinement on naming the runner ↔ `_branch.md` coupling.

These are not nitpicks — the spec-stretching prosecution is the strongest objection a careful reader would raise; the refinement defuses it. The Variant choice presentation matches user-agency over loop-preference.

This MEDIUM-HIGH is honest. The refinements are surgical text-level patches. The verdict's shape is correct.

**PROCEED to CONCLUDE.**
