# Sensemaking: Rename td-critique

## User Input

Inquiry `_branch.md`. Input: exploration.md (3-region territory; 8 signals; 20+ candidates across 6 dimensions; "td-" prefix confirmed-undocumented; 5 "critique is NOT" distancings in spec; migration ~20 active files / 266 total references). Job: anchor extraction + ambiguity collapse on (a) dominant frame for cognitive operation, (b) Status Quo Bias on "critique" in both directions, (c) sibling-pattern consistency anchor, (d) load-bearing concept test on "contraction force." Apply 9 perspectives; Frame-exit Completeness gating; Phase/Calibration-State; Status Quo Bias both directions.

---

## SV1 — Baseline Understanding

The user wants to rename `td-critique` to a better name. The current name has two unsatisfactory features: the undocumented "td-" prefix (no rationale anywhere in the project) and possibly the word "critique" itself (the discipline's own spec spends effort distancing itself from 5 common readings of "critique"). Exploration enumerated ~20 candidates across 6 dimensions and surfaced "adjudicate" as a strong-fit candidate via the legal-etymology match with the spec's adversarial structure (prosecution + defense + collision). Sensemaking's job is to commit a conceptual model — what makes a winning name and which 2-3 finalists should advance.

---

## Phase 1 — Cognitive Anchor Extraction

### Constraints

- **C1** The name must encode the actual cognitive operation. Names that mislabel the discipline are disqualifying.
- **C2** Bare-verb form is the modal cannon pattern (`explore`, `innovate`, `decompose` — 3 of 5 cognitive disciplines). Compound forms require sense-making-level justification.
- **C3** No prefix without documented rationale. `td-` lacks one and is the outlier across siblings.
- **C4** No collision with rejected NOT-list items in the spec (`validate`, `review`, `judge`-as-personal-judgment, `nitpick`).
- **C5** No collision with project-internal terms (`evaluation` is the spec's secondary-operation name; `verdict` is the output type — using either as the discipline name conflates levels).
- **C6** Migration cost is bounded (~20 active files); not a load-bearing constraint.

### Key Insights

- **K1** The spec invests effort distancing the discipline from 5 readings of "critique" — *nitpicking, judgment, validation, reviewing, pessimism*. This is structural evidence the word carries baggage that the spec has to do work to overcome. A name doing less of that work would let the spec say more of what the discipline IS.
- **K2** "Adjudicate" matches the spec's adversarial structure (prosecution + defense + collision) verbatim via legal etymology. This isn't accidental — the spec's adversarial-evaluation pattern IS modeled on legal proceedings. The legal connotation is identity alignment, not baggage.
- **K3** "Contraction force" is the spec's internal operational metaphor (the discipline contracts the candidate set after expansion). It's a real structural property but is NOT in the user's vocabulary (user said "td-critique"; didn't propose a new metaphor). A name optimizing for "contraction" (sift, winnow) would track the spec but not the user's mental model.
- **K4** Bare-verb is the dominant sibling pattern; `sense-making` is the SINGLE exception, justified by being a known cognitive-science compound term. A second exception accumulates inconsistency.
- **K5** Dev-phase makes rename cheap: the project is in active iteration; reference counts will multiply as more inquiries accumulate. Renaming now costs ~30 min; renaming later costs more.
- **K6** The "td-" prefix has no documented meaning anywhere in the project (grep + design-history check both null). Whatever the rename, the prefix should go.

### Structural Points

- **SP1** Three coupled regions: identity (what the discipline IS) / sibling-pattern (cannon naming convention) / candidate-space (~20 candidates across 6 dimensions).
- **SP2** Cognitive operation: extraction (build framework from sensemaking) + evaluation (apply to candidates) + adversarial testing (prosecution + defense + collision) + verdict rendering (SURVIVE / REFINE / KILL) + coverage tracking.
- **SP3** Sibling pattern: bare-verb dominant (3/5); hyphenated outlier (`sense-making`); prefixed outlier (`td-critique`).
- **SP4** ~20 candidate names; ~6 finalists after filtering (adjudicate, critique-no-prefix, evaluate, vet, sift, assess).

### Foundational Principles

- **P1** Naming encodes identity. The name carries the discipline's essence to a new user.
- **P2** Cannon coherence has value. Fewer naming conventions to remember = lower cognitive load across the project.
- **P3** User-language alignment matters. A name that's intelligible to the user without re-reading the spec is preferable.
- **P4** Dev-phase rename is well-timed. Migration cost grows over time; renaming now beats renaming later.
- **P5** Substrate-honest. The rename uses only standard operations (folder rename, grep + replace, registry recopy).

### Meaning-Nodes

- **MN1** "Critique" — the contested word; current name; carries the 5 NOT-list baggage.
- **MN2** "Adjudicate" — the high-fit candidate; legal-etymology match with adversarial structure.
- **MN3** "Evaluate" — generic-fit; collides with spec's "Evaluation" secondary-operation name.
- **MN4** "Contraction force" — the spec's internal metaphor; not in user vocabulary.
- **MN5** "td-" prefix — undocumented residue; remove regardless of which verb wins.

---

## SV2 — Anchor-Informed Understanding

The naming problem decomposes into three coupled sub-questions:

1. **Keep "critique" (drop prefix only) OR replace with a different verb?** — Status Quo Bias test.
2. **If replacing, which verb captures the cognitive operation best?** — Operation-fit test on 4-6 finalists.
3. **Should the rename strictly fit the bare-verb cannon pattern, or is deviation allowed?** — Form-constraint test.

Each is informed by anchors above. The dominant criterion is **operation-fit**: the name must encode the adversarial-structure + verdict-rendering + contraction operation. Secondary criterion: **sibling-pattern fit** (bare-verb). Tertiary: **migration cost** (low weight).

---

## Phase 2 — Perspective Checking

### Technical / Logical

The cognitive operation = adversarial reduction of a candidate set with verdict rendering. The name must be a single verb (matching cannon pattern). The verb must evoke the operation directly.

**T1 (new anchor):** The name should be operation-verb-form, evoking the adversarial-evaluation+verdict mechanism rather than its byproducts (contraction is a byproduct; the central operation is adjudication).

### Human / User

The user said "td-critique" in conversation — that's the current term in their working vocabulary. They haven't proposed alternatives; they're asking the inquiry to help. They want a recommendation, not validation of an existing intuition.

**U1:** The new name must pass the "tell a new user in 5 words" test better than `td-critique` does. ("Adjudicate competing candidates with verdicts" — passes. "Critique the candidates" — confusing because of the everyday-English baggage.)

### Strategic / Long-term

The discipline will be referenced for years (the project produces ongoing inquiry artifacts). Migration cost grows proportional to references.

**S1:** Dev-phase favors rename now over later. The 266 file references already represent a few months of accumulation; deferring would 2-3x the future cost.

### Risk / Failure

Worst failure: pick a name MORE confusing than `td-critique`, OR colliding with another concept in the project, OR misleading about the operation.

- "judge" — personal-judgment baggage (the spec rejects this reading).
- "validate" / "verify" — explicitly rejected by spec ("Critique is NOT validation").
- "review" — explicitly rejected by spec ("Critique is NOT reviewing").
- "evaluate" — collides with spec's "Evaluation" secondary-operation.

**R1:** Must NOT collide with rejected NOT-list items or with spec-internal terms.

### Resource / Feasibility

One-time cost: rename folder + registry + ~20 active files. ~30 min total.

**F1:** Low cost; doable in dev phase.

### Definitional / Internal Consistency

The spec rejects 5 readings of "critique": nitpicking, judgment, validation, reviewing, pessimism. If the name has to spend prose distancing from those, the name does extra work. The discipline's identity is constructed around adversarial evaluation with verdict rendering — words evoking that operation directly are more name-fit than words requiring rejection lists.

Test "critique alone" (drop prefix): the 5 distancings remain in the spec; the word still carries baggage. The bare-verb pattern is satisfied at form level but not at semantic level.

Test "adjudicate": the legal etymology brings prosecution+defense alignment (matches the spec verbatim). Brings one new association — "judge as legal officer" — which is supportive, not distancing.

**IC1:** "Critique" baggage persists even with prefix removed. Rename should pick a word with LESS rejection-list overlap.

### Definitional / Frame-exit Completeness

**Gating check:**
- (i) Inherited multi-value terms? — Partial: "critique" is the inherited term being questioned. The discipline's identity is inherited from the spec.
- (ii) Used across ≥2 distinct values/levels in inquiry's committed structures? — YES. Exploration's Dimension A table has multiple candidate verbs at different rows asserting distinct Captures + Tension properties per row.

**Gating fires.** Applying 4 meta-categories:

**1. Existence Enumeration — what does "critique" refer to project-wide?**
- TYPE axis: the discipline-internal construct (adversarial evaluation + verdict) vs everyday-English "critique" (criticism, judgment, nitpicking). The discipline meaning is constructed; the everyday meaning collides with the construction.
- LAYER axis: the spec's identity-section (Structural Critique = the operation) vs the spec's NOT-list (rejecting connotations). Both exist in the same artifact.
- PHASE axis: dev-phase (rename affordable) vs steady-state (rename expensive).
- AGENT axis: user's mental model (treats td-critique as a step) vs agent's mental model (treats it as a discipline). Both work at different levels but neither resolves the baggage.

**2. Role Assessment.**
- Everyday-English "critique" baggage plays a *confusing* role at the user-facing layer. The spec has to spend 5 NOT-list bullets removing connotations. The NOT-list is identity-boundary work; the NAME should not contribute to that workload.
- Legal "adjudicate" connotation plays a *supportive* role — aligns with prosecution + defense + verdict.

**3. Verdict Rigor.**
Counter to "keep critique": dropping just the prefix preserves continuity AND fits the bare-verb pattern.
Counter-counter: the 5 NOT-list items remain; the word still does negative work. Bare-verb pattern is satisfied at form level but the semantic baggage persists. "Keep critique" verdict is **LOW CONFIDENCE**.

**4. Residual / Coverage Justification.**
Frame-exit concern not yet captured: project-internal terminology evolution. If the discipline gets renamed, old inquiries reference the old name; new inquiries reference the new name. Bounded — the migration is one-shot. **FE1:** prefer a rename that's clearly more communicative; small wins don't justify the migration.

### Phase / Calibration-State (required)

The project is in active development. Calibration the project has: active edits across multiple disciplines; reference counts growing; no stable discipline taxonomy yet. Calibration not yet: post-stabilization where renames become expensive.

**PC1:** Dev-phase justifies the rename. The longer it's deferred, the more references accumulate.

### Self-Reference Blindness check

The inquiry uses sense-making (a discipline in the same framework) to evaluate the name of another discipline. External grounding:
- The spec's NOT-list (observable structural evidence — 5 explicit distancings).
- The user's actual language (they said "td-critique"; haven't proposed alternatives — signals receptivity).
- Sibling-pattern empirics (3 of 5 disciplines use bare verbs — observable).
- Legal etymology of "adjudicate" (external linguistic fact).

Multi-source grounding; not pure self-reference. ✓

---

## SV3 — Multi-Perspective Understanding

Major shifts from SV2:

1. **"Keep critique alone" is LOW CONFIDENCE.** The 5 NOT-list items are structural evidence of baggage. Dropping only the prefix doesn't address them.
2. **"Adjudicate" surfaces as the strongest primary candidate** due to legal-etymology match with prosecution + defense + verdict.
3. **Bare-verb form is a HIGH-weight criterion** (3/5 cannon disciplines).
4. **Migration cost is LOW weight** (~30 min; dev-phase appropriate).
5. **"Evaluate" is disqualified** by collision with spec's "Evaluation" secondary-operation name.
6. **User-language alignment** flags adjudicate over contraction-metaphor names (sift, winnow) — adjudicate is more directly intelligible.

---

## Phase 3 — Ambiguity Collapse

### Ambiguity 1: What is the load-bearing word capturing the cognitive operation?

**Strongest counter-interpretation:** "critique" — the current word. Status-quo-preserving; familiar.

**Why counter fails (structural grounds):** The spec's 5 NOT-list items demonstrate the word carries baggage the discipline rejects. Even with the prefix dropped, the word "critique" still does negative semantic work — the spec has to spend prose saying what it doesn't mean. A name that aligns directly with the cognitive operation (adversarial evaluation + verdict rendering) would let the spec spend that prose elsewhere.

**Counter-interpretation B:** "evaluate" — neutral verb; generic evaluation.
**Why it fails:** Collides with the spec's "Evaluation" secondary-operation name (the discipline has TWO operations: Extraction + Evaluation). Using "evaluate" as the discipline name conflates the whole with one of its parts. Structural-level collision, not stylistic.

**Counter-interpretation C:** "sift" / "winnow" — contraction-force metaphor names.
**Why they fail:** Capture only one aspect (contraction) and miss verdict-rendering + adversarial-structure. Partial-fit on operation but not full-fit.

**Counter-interpretation D:** "adjudicate" — legal-etymology match.
**Why it does NOT fail:** Prosecution + defense + collision IS the adversarial structure of the discipline. "Verdict" IS the output type. Legal etymology aligns with the discipline's mechanism verbatim. The one concern — formal/legal tone — is a STYLISTIC tension, not a structural problem. The discipline's actual operation IS legal-procedure-shaped; the name reflects that honestly.

**Confidence:** HIGH on adjudicate fits best; MEDIUM on critique being inferior (defensible but baggage-laden).

**Resolution:** Operation-fit ranks finalists as: **adjudicate (highest)** > **vet / assess (moderate)** > **critique (status-quo with baggage)** > **evaluate / verify / review (disqualified by collision or NOT-list)**.

**What is fixed:** Adjudicate is primary candidate; critique is fallback; evaluate/verify/review excluded.

**What is no longer allowed:** Picking a name purely for continuity (Status Quo Bias).

**What now depends:** Innovation tests adjudicate against all 5 NOT-list items AND against bare-verb pattern AND against sibling collision.

### Ambiguity 2: Should the rename strictly match the bare-verb pattern?

**Strongest counter-interpretation:** Hyphenated compound is fine; sense-making already deviates; one more deviation isn't a problem.

**Why counter fails:** sense-making is a SINGLE exception, justified by being a recognized cognitive-science term. There's no parallel justification for td-critique. Multi-deviation accumulates inconsistency: "two exceptions" is harder to remember than "one known exception."

**Confidence:** HIGH.

**Resolution:** Prefer bare-verb form unless a compound has equivalent justification (e.g., a well-known compound term in a field, like sense-making is in cognitive science). Adjudicate satisfies bare-verb; critique satisfies bare-verb (when prefix dropped).

**What is fixed:** Bare-verb preferred; compounds require strong justification.

### Ambiguity 3: Is "the contraction force" the project's metaphor or loop-coined?

Per the Load-bearing concept test:

**Strongest counter-interpretation:** The phrase is just from the spec text; the user hasn't used it; the discipline could be named without that metaphor.

**Why the counter fails (structural grounds):** The phrase IS in the canonical reference, which is the discipline's source-of-truth. It captures a real structural property (the discipline does reduce the candidate set after expansion). But — **user-language alignment test** — the user said "td-critique," not "contraction." The metaphor is the spec's framing, not the user's spontaneous vocabulary.

**Resolution:** "Contraction force" is a real spec metaphor describing a real property, but it should NOT dominate name choice over more directly communicative options. The user understands the discipline operates as adversarial-evaluation-with-verdicts (their language: "critique"), not specifically as contraction. Names optimizing for contraction (sift, winnow) drop in priority.

**Confidence:** HIGH on "metaphor exists but shouldn't dominate."

**What is fixed:** Contraction is a property, not the operation. Sift/winnow drop unless they ALSO score well on operation-fit.

### Ambiguity 4: Is migration cost a load-bearing constraint?

**Strongest counter-interpretation:** 266 references is significant churn; minimize by keeping "critique" form.

**Why counter fails:** Of 266 references, ~230+ are in frozen inquiry artifacts (historical record; typically not retroactively edited). Active migration is ~20 files: the discipline's own folder + registry + 5 runtime spec references + 10-15 docs/ theory files. ~30 min effort.

**Confidence:** HIGH on "cost is bounded."

**Resolution:** Migration cost is a LOW-weight criterion. The decision should be made on identity-fit, not churn-avoidance.

### Ambiguity 5: Status Quo Bias — keeping "critique" (drop prefix only)?

**Direction 1 test (keep critique):**
- Pro: familiarity; minimal migration; preserves "critique" terminology in 266 frozen artifacts.
- Con: spec's 5 NOT-list items remain in force; the word still does negative semantic work.

**Direction 2 test (replace critique):**
- Pro: adjudicate aligns with adversarial-structure directly; reduces spec's distancing work; clearer for new users.
- Con: 20 files need updating; momentary terminology shift.

**Status Quo Bias check:** Would the choice change if "critique" had no prior history? — Probably yes. The legitimate question is "what's the best name?" not "is the existing name acceptable?" The bias to protect the existing word is itself the failure mode the discipline guards against.

**Confidence:** HIGH on "replace."

**Resolution:** Replace, not retain. The status-quo "critique" remains as the fallback if user prefers minimal churn.

### Ambiguity 6: Specific-vs-pattern recognition cue

**Strongest counter-interpretation:** The user might want a project-wide naming audit ("rename anything inconsistent").

**Why counter fails:** User named "td-critique" specifically. No signal they want a broader audit. Scope-fidelity: address what was asked.

**Adjacent consideration:** The new name must not create new inconsistency, but other disciplines (explore, innovate, decompose, sense-making) are not being renamed.

**Confidence:** HIGH.

**Resolution:** Inquiry-scope = rename td-critique specifically. If patterns emerge load-bearing, surface; don't expand.

---

## SV4 — Clarified Understanding

After 6 ambiguity collapses, the structure stabilizes:

- **Primary candidate:** `adjudicate` — operation-fit highest; legal etymology matches adversarial structure.
- **Secondary candidate:** `critique` (drop prefix only) — status-quo-preserving; baggage persists but defensible.
- **Tertiary candidates:** `vet`, `assess`, `sift` — each captures one aspect; lower priority.
- **Disqualified:** `evaluate` (collision with spec's "Evaluation"), `validate` / `verify` / `review` (NOT-list rejections), `judge` (personal-judgment baggage), `td-X` prefix forms (undocumented).
- **Form constraint:** bare-verb preferred (matches modal cannon pattern).
- **Migration:** ~20 active files; 30 min; LOW weight in decision.
- **Decision: replace, not retain.** Status Quo Bias avoided.

---

## Phase 4 — Degrees-of-Freedom Reduction

### Fixed

- F1: Bare-verb form preferred.
- F2: Operation-fit is the dominant criterion (HIGH weight).
- F3: Migration cost is LOW weight.
- F4: Replace "critique" rather than retain.
- F5: Inquiry-scope = td-critique only (specific, not project-wide).
- F6: Primary candidate for Innovation/Critique = adjudicate.
- F7: Secondary candidate = critique-no-prefix (status-quo fallback).

### Eliminated

- "td-" prefix (no rationale).
- evaluate / validate / verify / review (collisions or rejections).
- judge / appraise (negative or specialized connotation).
- pure-noun forms (verdict, evaluation) (verb-form preferred).
- hyphenated compounds (without sense-making-level justification).

### Remaining viable

- adjudicate (PRIMARY)
- critique-no-prefix (SECONDARY, status-quo fallback)
- vet (TERTIARY — short, active, fitness-testing)
- assess (TERTIARY — neutral)
- sift (TERTIARY — captures contraction only)

5 finalists; reduced from 20+.

---

## Phase 5 — Conceptual Stabilization

### Three Core Commits

- **COMMIT 1 — Operation-fit dominates.** The name must encode (a) adversarial structure, (b) verdict rendering, (c) candidate-set reduction. Adjudicate scores highest on (a) + (b); critique scores moderately on (b) + (c) with baggage on (a); other finalists score on subset.

- **COMMIT 2 — Bare-verb form preferred** (matching `explore` / `innovate` / `decompose`). Compound forms require sense-making-level justification. Adjudicate and critique both satisfy.

- **COMMIT 3 — Replace, not retain.** The spec's 5 NOT-list items against "critique" are structural evidence of baggage. The Status Quo Bias against renaming is the failure mode. Replace.

### Cross-cutting

- **X1 — Operation-fit > sibling-pattern-fit > baggage-avoidance > migration-cost.** Weight order for the criteria. Inversions are possible (e.g., if a candidate beats on operation-fit but fails on sibling-pattern, the verdict depends on the margin). Critique to adjudicate.
- **X2 — Replace within dev-phase**, before reference counts multiply further.
- **X3 — Substrate-honest migration.** Standard text + folder ops; no aspirational tooling.

### Decomposition Handoff

The inquiry partitions naturally into these pieces:

- **P1 — Name criteria specification.** What dimensions a winning name scores on, with weights.
- **P2 — Finalist short-list curation.** The 5 finalists from Phase 4 + any Innovation-emergent additions.
- **P3 — Per-finalist evaluation.** Apply criteria to each. Innovation generates concrete reasoning per candidate; Critique adversarially tests.
- **P4 — Recommendation packet.** User-facing top-3 ranked + reasoning, suitable for the user to adjudicate.
- **P5 — Migration plan.** Concrete file list + procedure for executing the rename.
- **P6 — Optional residual.** Memory-hygiene note (the user's "Discipline design-history location" memory points at `enes/` which is now `docs/`); side-observation, not blocking.

6 pieces; tractable.

---

## SV6 — Stabilized Model

**The committed conceptual model:**

A rename of `td-critique` is justified now (dev-phase makes it cheap; the "td-" prefix has no rationale; the word "critique" carries baggage the spec spends 5 NOT-list bullets distancing from). The dominant criterion is operation-fit: the name must encode the adversarial-evaluation-and-verdict-rendering operation directly. The modal cannon pattern is bare-verb (3 of 5 sibling disciplines).

**Primary recommendation: `adjudicate`.** Its legal etymology matches the spec's adversarial structure (prosecution + defense + collision) verbatim, captures verdict-rendering at its core, bare-verb single word, no prefix, no collision with spec-internal terms. The one stylistic tension (formal/legal connotation) is identity alignment, not baggage.

**Secondary recommendation: `critique` (drop prefix only).** Defensible Status-Quo-preserving fallback; lowest migration cost; but baggage persists (spec's 5 NOT-list items remain).

**Tertiary options: `vet`, `assess`, `sift`.** Each captures one aspect of the operation; lower priority.

**Migration:** ~20 active files (5 runtime specs + 10-15 docs/ theory files + the discipline's own folder + registry directory). ~30 min effort.

### Differences from SV1

| Axis | SV1 | SV6 |
|---|---|---|
| Frame | "rename to what?" — open | Operation-fit-dominant; 3 ranked finalists |
| Status Quo Bias | implicit | Tested both directions; replace verdict |
| Form constraint | unspecified | Bare-verb preferred (HIGH weight) |
| Migration weight | unstated | LOW (~30 min; dev-phase appropriate) |
| Primary candidate | unknown | adjudicate (HIGH-fit on all criteria) |
| Spec NOT-list significance | not surfaced | Structural evidence of "critique" baggage |

---

## Telemetry — Saturation Check

| Indicator | Status |
|---|---|
| Perspective saturation | ✓ — 9 perspectives applied; Frame-exit Completeness produced the largest new-anchor set (TYPE/LAYER/PHASE/AGENT axes of "critique") |
| Ambiguity resolution ratio | 6/6 resolved; 0 OPEN |
| SV delta | SV1 → SV6 shows clear shift (open → 3 ranked finalists with operation-fit anchor + replace verdict + migration plan) |
| Anchor diversity | All 5 anchor types represented; 9 perspectives |

### Failure Mode Self-Check

| Failure mode | Status |
|---|---|
| Status Quo Bias | ✗ avoided — tested in both directions; evidence favors replacement |
| Premature Stabilization | ✗ avoided — multiple perspectives produced new anchors (T1, U1, S1, R1, F1, IC1, FE1, PC1) |
| Anchor Dominance | ✗ avoided — removing any single anchor doesn't collapse the model |
| Perspective Blindness | ✗ avoided — Frame-exit + Internal-Consistency surfaced uncomfortable findings |
| Clean Resolution Trap | ✗ avoided — counter-arguments stated and rebutted on structural grounds |
| Self-Reference Blindness | ✗ avoided — external grounding via spec NOT-list + user-language + sibling empirics + legal etymology |

### Self-Assessment

**PROCEED.** Conceptual model committed; ready for Decomposition. Frame-exit Completeness applied with all 4 meta-categories; Phase/Calibration-State applied as required; Load-bearing concept test on "contraction force" passed. Three core commits + cross-cutting + 6-piece decomposition handoff prepared.
