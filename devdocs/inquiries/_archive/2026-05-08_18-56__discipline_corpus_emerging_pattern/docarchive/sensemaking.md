# Sensemaking — Discipline-corpus emerging pattern

## User Input

```
Collapse the exploration's 8 candidate patterns into 1–3 named patterns with stable
definitions. Test the host-primitive claim. Find the right name. Determine the
formalization level given phase-fit. Test whether user's #2 candidate collapses.
```

---

## SV1 — Baseline Understanding

The exploration found two emergent patterns ready to name: a host primitive subsuming patterns #1+#4+#5 (bolted-on rules), and pattern #3 (discipline output contract) as independent. Initial reading: the host primitive needs a load-bearing name; the contract closes a real gap with `homegrown/protocols/resume.md`. User's candidate #2 (per-discipline output protocol) appears partly redundant with existing runner machinery.

---

## Phase 1 — Cognitive Anchor Extraction

### Constraints

- **Phase-fit:** early calibration; premature codification is the documented failure mode (per `devdocs/inquiries/2026-05-08_17-23__discipline_spec_bloat_reasons/finding.md`'s phase-fit caveat).
- **The bolted-on rules emerged organically.** Whatever is named must respect that organic emergence — not retroactively force a schema on the existing instances.
- **Placement convention is active.** `enes/discipline_rule_placement.md` should not be reopened; this inquiry's outputs supplement it.
- **resume.md aspires to verdict-line discipline contract.** The "fall back to PROCEED" backward-compat is the workaround for an open contract; closing the contract is currently load-bearing.
- **Names matter.** "Step Rule" vs. "Refinement Rule" vs. "Failure-Anchored Rule" carry different semantic weight; the chosen name is load-bearing for innovation's artifact proposals.

### Key Insights

- Every catalogued bolted-on rule has a 4-element shape (name + trigger + action + linkage). 8 of 10 instances have an explicit failure-mode link; the 2 innovate outliers (Output disposition categories; Axis coverage check) link to structural completeness concerns instead.
- The 2 outliers are not "different objects" — they share the 4-element shape. The 4th element (linkage) just has two possible target types: a named failure mode, or a structural completeness concern.
- The discipline output contract maps to TWO orthogonal things: (a) a verdict line for resume.md consumption; (b) standardized structural sections for audit. Both belong to one contract.
- The user's per-discipline output protocol candidate has ALREADY been mostly extracted to the MVL+ Workspace Invariant section. Residual gap: the discipline-specific compilation logic — but that logic is genuinely discipline-specific (sensemaking's SV-progression ≠ td-critique's fitness landscape) and can't be unified.
- The prior inquiry's C3.4 (italic `*Refinement note (applies at Step N):*` prefix) is the visual marker for these rules. Naming the primitive consistent with that visual marker reinforces the connection.

### Structural Points

- 8 disciplines audited (explore, sense-making, decompose, innovate, td-critique, comprehend, reflect, navigation).
- 10 catalogued bolted-on rules; 8 with explicit failure-mode link; 2 with structural-completeness link.
- 6 of 8 disciplines have a B2 summary table; sense-making and navigation are exceptions (their final-section shapes differ).
- 3 of 8 disciplines have explicit verdict lines; 5 either have qualitative self-assessment or none.
- Hot-spot steps: sense-making Phase 3 has 3 bolted-on rules; td-critique Phase 0 + Phase 2 each have one; innovate Phase 3 has 2.

### Foundational Principles

- The placement convention's "one canonical home per rule, scope-determined" governs WHERE rules live. The host primitive doesn't reopen this; it formalizes the SHAPE of rules at canonical homes.
- The resume.md protocol's existing aspiration (verdict-line discipline contract with fallback) is descriptive evidence that a contract is being approximated.
- Phase-fit conservatism: name what's observably emergent (descriptive); defer prescriptive enforcement (linting, validation).

### Meaning-Nodes

- **"Bolted-on rule"** — the empirical observation; informal corpus vocabulary
- **"Step Refinement"** — a candidate name emphasizing canonical-home + accretion-pattern
- **"Failure-Anchored Rule"** — a candidate emphasizing the dominant subtype
- **"Anchor Rule"** — a candidate emphasizing dual-anchoring; risks collision with sensemaking's "cognitive anchors"
- **"Discipline Output Contract"** — the candidate name for pattern #3
- **"Verdict line"** — a specific component of the contract
- **"Structural sections"** — another component of the contract
- **"Refinement note"** — the prior inquiry's visual-marker name (C3.4 italic prefix)

---

## SV2 — Anchor-Informed Understanding

The host-primitive question splits into two sub-questions: (1) is there really one primitive, or are the 10 instances actually a mixture of types? (2) If one primitive, what name captures all instances? Pattern #3 (output contract) is independent at the artifact level (different surface, different consumer) but shares a deeper meta-pattern with pattern #1 (discipline specs accrete uniform shapes for emergent needs). The user's #2 candidate is correctly tracking real territory but is partly redundant with existing runner machinery.

---

## Phase 2 — Perspective Checking

### Technical / Logical

The 4-element shape is observably consistent across 10 instances. The 4th element's target varies (failure mode in 8 instances; structural completeness in 2). Treating these as one primitive with a typed link is more parsimonious than treating them as two separate primitives.

**New anchor:** the linkage is itself the typed primitive — "anchor-link" with two recognized subtypes (failure-anchored, coverage-anchored).

### Human / User

The user wants tidiness and discoverability ("brushing teeth every morning" framing). Naming the host primitive lets them grep / audit / extend. The user's intuition (#2 per-discipline output protocol) was tracking a real meta-pattern even though the specific artifact they imagined collapses into existing structures.

### Strategic / Long-term

As the corpus grows, more bolted-on rules will accrete (sensemaking Phase 3 already shows hot-spot accumulation). Without a uniform shape, future maintainers face the same readability cost the prior inquiry surfaced. The output contract enables resume.md's telemetry-aware iteration AND opens the path to autonomous variants.

### Risk / Failure

- **Risk of naming the host primitive too tightly:** locking the schema before edge cases emerge (e.g., MVL+ Workspace Invariant's 8-bullet "Invalid compact execution patterns" is bolted-on at the runner level, not discipline level — different scope). Mitigation: schema acknowledges scope variants.
- **Risk of forcing verdict lines on qualitative-self-assessment disciplines:** sense-making explicitly says "saturation indicators are not gates." Mitigation: verdict lines can carry hedging.
- **Risk of NOT naming:** continued accretion without uniform shape; the corpus drifts; the prior inquiry's frontier observations remain unresolved.

### Resource / Feasibility

- Naming the host primitive is cheap (glossary entry + addendum to placement convention).
- Closing the output contract requires touching 5 disciplines (those without verdict lines). Small but real.
- User's #2 (new protocol file) would require lifting from runner + per-discipline templates. Larger work for less marginal value.

### Definitional / Consistency

- The placement convention says "rules have one canonical home." The host primitive doesn't violate this; it formalizes the shape of rules at canonical homes.
- The convention is silent on shape-of-rule. Adding a shape-spec is consistent with the convention's intent.
- The output contract aligns with resume.md's existing aspiration — closes a gap rather than creating new structure.

### Phase / Calibration-State

- 10 catalogued instances of the host primitive is enough for descriptive naming.
- 8 disciplines worth of output structures is enough for descriptive contract specification.
- NOT enough for prescriptive enforcement (linters, validators). Conservative path: descriptive only; existing instances align as they're touched.

---

## SV3 — Multi-Perspective Understanding

After perspectives:

- The host primitive is real with one variant (failure-anchored vs. coverage-anchored). Acknowledge the variant; don't suppress it.
- Naming converges on **"Step Refinement"** — connects to the prior inquiry's C3.4 visual marker (`*Refinement note:*`); doesn't collide with sensemaking's "cognitive anchors"; emphasizes both canonical-home placement (step) and the accretion-pattern semantics (refinement).
- Pattern #3 is genuinely independent at the artifact level. They share a deeper meta-pattern but the artifacts are separate.
- User's #2 fully collapses into Workspace Invariant + #3 + per-discipline references files. No new protocol file warranted.
- Formalization level: descriptive only at this stage.

---

## Phase 3 — Ambiguity Collapse

### Ambiguity 1: Do patterns #1, #4, #5 really collapse into one host primitive?

**Strongest counter-interpretation:** the 10 catalogued instances are not all the same kind of object. The 8 failure-anchored ones (with explicit "instance of [failure mode]" links) are one type; the 2 outliers in innovate are coverage-check rules, structurally different (no single failure mode). Treating them as one primitive forces a Procrustean fit.

**Why the counter PARTIALLY succeeds:** the outliers ARE structurally different in *what they link to* — a structural completeness concern rather than a named failure mode.

**Why the counter ultimately fails (structural grounds):** the 4-element shape (name / trigger / action / linkage) is preserved in all 10 instances. The 4th element ("linkage") is more general than just "failure mode link" — it can be a failure mode link (8 instances) OR a structural completeness link (2 instances). The shape unifies; the link target varies. Treating them as separate primitives would multiply the corpus's vocabulary without adding analytic power.

**Confidence:** HIGH — evidence demands the unifying shape; the variant is a refinement, not a contradiction.

**Resolution:** ONE host primitive with TWO link-target subtypes — "failure-anchored" (dominant; 8 of 10 instances) and "coverage-anchored" (minority; 2 of 10).

**What is now fixed:** the host primitive exists; it has a 4-element shape; the linkage element has two recognized subtypes.

**What is no longer allowed:** dismissing the innovate outliers as "different things"; conflating shape with link-target.

**What now depends:** the primitive's name, decomposition's partitioning, innovation's artifact proposals.

**What changed in the model:** from "8 bolted-on rules + 2 mystery items" to "10 instances of one host primitive with two link-target subtypes."

---

### Ambiguity 2: What's the right name for the host primitive? (Load-bearing concept test)

**Counter-options tested:**

| Candidate | Strength | Weakness |
|---|---|---|
| "Step Rule" | Generic; matches placement convention vocabulary | Too generic; doesn't signal the failure-anchoring or refinement-accretion semantics |
| "Refinement Rule" | Emphasizes accretion (true) | Loses the "lives at canonical step" specificity |
| "Failure-Anchored Rule" | Emphasizes the dominant subtype | Excludes the 2 outliers (coverage-anchored) |
| "Anchor Rule" | Captures dual-anchoring concisely | Collides with sensemaking's "cognitive anchors" — name conflict |
| **"Step Refinement"** | Two-word; combines step placement + refinement-accretion semantics | None significant; no name conflict |

**Why "Step Refinement" wins (structural grounds):**

1. Connects to the prior inquiry's C3.4 visual marker (`*Refinement note (applies at Step N):*`) — the corpus is already moving toward "Refinement" as the visual vocabulary. Aligning the primitive name with the visual marker reinforces the connection.
2. Doesn't collide with sensemaking's "cognitive anchors" (the term "anchor" is already taken in the corpus).
3. "Step" emphasizes canonical-home placement (consistent with placement convention).
4. "Refinement" emphasizes the accretion-pattern semantics (rules added over time to refine the existing process).
5. Two-word name is distinctive and memorable.

**Why the alternatives fail (load-bearing concept test):**

The load-bearing concept test asks whether the chosen name is a project property or an external default. "Step Rule" is too generic — it's an external default name that doesn't carry project-specific meaning. "Failure-Anchored Rule" excludes the minority subtype, which is a project-specific reality. "Step Refinement" is project-specific because it connects to the visual marker the corpus has already begun adopting.

**Confidence:** HIGH — "Step Refinement" has structural support, doesn't collide, connects to the existing visual-marker work.

**Resolution:** the primitive is **"Step Refinement"**, defined as: a step-anchored rule with a 4-element shape (name / trigger / action / typed anchor-link), where anchor-link is one of {failure-anchored, coverage-anchored}.

**What is now fixed:** the primitive's name is "Step Refinement"; the structure is 4-element with typed anchor.

**What is no longer allowed:** ad-hoc bolted-on additions without the 4-element shape; rules without anchor-link.

**What now depends:** innovation's artifact proposals (glossary entry; placement-convention addendum; failure-mode prevention map).

---

### Ambiguity 3: Is pattern #3 (Discipline Output Contract) independent of Step Refinement, or are they two faces of one deeper pattern?

**Strongest counter-interpretation:** a deeper pattern called something like "Discipline Spec Contract" covers BOTH the rule shape (Step Refinements) AND the output shape (verdict line + structural sections). One contract; two domains. Naming both separately fragments what is structurally one thing.

**Why the counter PARTIALLY succeeds:** at high abstraction, both ARE about how disciplines structure their content. They share a meta-shape (discipline specs accrete uniform shapes for organic emergent needs).

**Why the counter doesn't fully succeed (structural grounds):** at the artifact level, they're separate. A Step Refinement is a rule INSIDE a discipline spec; an output contract is about what the discipline PRODUCES. Different surfaces (the rule lives in `references/X.md`; the output lives in the saved discipline file like `sensemaking.md`). Different consumers (the LLM running the discipline reads Step Refinements during execution; the runner / future LLM reads outputs after). Forcing them under one umbrella obscures the artifact distinction and creates a vague concept that's harder to apply.

**Confidence:** HIGH — artifact independence is observable; different surfaces; different consumers.

**Resolution:** keep them as TWO separate named patterns. Acknowledge they share a meta-shape ("discipline specs accrete uniform shapes") but treat as independent at the artifact level. The inquiry produces TWO verdicts, not one.

**What is now fixed:** Step Refinement and Discipline Output Contract are two independent named patterns.

**What is no longer allowed:** collapsing both into one umbrella that obscures the artifact distinction.

**What now depends:** decomposition (two pieces; two sets of artifact proposals).

---

### Ambiguity 4: What's the right level of formalization given phase-fit?

**Strongest counter-interpretation:** any naming is premature. The corpus is small; let it grow organically; formalize when N is larger.

**Why the counter PARTIALLY succeeds:** phase-fit conservatism is real; premature codification is a documented failure mode.

**Why the counter ultimately fails (structural grounds):** the corpus has 10 instances of Step Refinements and 8 disciplines worth of output structures. That's enough evidence for the SHAPE to be observable. What's NOT enough evidence for is **enforcement** — automated lint, blocking validators, mechanical schema validation. The right formalization level is **descriptive** (name the shape; document its elements; establish it as the going-forward expectation; existing instances align organically), not **prescriptive** (enforce mechanically; reject non-conforming inputs; require schema validation).

**Confidence:** HIGH — evidence supports descriptive; conservative-default supports against prescriptive.

**Resolution:** descriptive formalization only. Artifact proposals from innovation should be specs, glossary entries, placement-convention addenda — not linters, validators, or enforced templates. Existing instances align organically as they're touched.

**What is now fixed:** artifact proposals are descriptive (specs, addenda) not prescriptive (mechanical enforcement).

**What is no longer allowed:** artifact proposals that block non-conforming inputs or enforce mechanically.

---

### Ambiguity 5: Does the user's candidate (#2 per-discipline output protocol) collapse into Workspace Invariant + #3 contract?

**Strongest counter-interpretation:** even if Workspace Invariant + #3 covers most of what the user proposed, there's a residual gap — discipline-specific compilation logic (e.g., how to assemble an output for a discipline) — that warrants its own protocol file.

**Why the counter PARTIALLY succeeds:** each discipline does have output-compilation logic in its `references/X.md` "Execute the X Process" section. That logic is per-discipline.

**Why the counter ultimately fails (structural grounds):** the per-discipline logic is genuinely discipline-specific. Sense-making's SV-progression logic isn't unifiable with td-critique's fitness-landscape logic without either (a) deep abstraction that loses meaning, or (b) per-discipline templates that re-state what the references files already say. The PROTOCOL part — "record user input + save to canonical filename + run telemetry + update state" — is what's general, and that's already at the runner level (MVL+ Workspace Invariant). The DISCIPLINE-SPECIFIC part stays in references files. There's no third file warranted.

**Confidence:** MEDIUM-HIGH — the collapse argument is structural but rests on a judgment about whether the residual gap warrants a separate file. Reasonable people could disagree.

**Resolution:** user's #2 fully collapses. Workspace Invariant covers runner-level framing; #3 contract covers the verdict + structural-sections expectation; per-discipline references files cover discipline-specific compilation. No new protocol file needed. The user's intuition was tracking real territory (the meta-pattern of "discipline specs accrete uniform shapes"); the inquiry's response is to NAME that meta-pattern via Step Refinement + Discipline Output Contract rather than create a redundant protocol.

**What is now fixed:** user's #2 candidate is honored (the intuition is correct) but redirected (the right artifact is descriptive naming + addendum, not a new protocol file).

**What is no longer allowed:** shipping a new protocol file titled "per-discipline output protocol" duplicating Workspace Invariant + #3.

---

### Ambiguity 6 (load-bearing concept test on "anchor-link"): Is "anchor-link" load-bearing or just convenient?

**Counter:** "anchor-link" is a synthetic term invented for this inquiry; it doesn't appear in the existing corpus and adds vocabulary without adding meaning.

**Why the counter PARTIALLY succeeds:** the term is new. It does add vocabulary.

**Why the counter doesn't succeed (structural grounds):** "anchor-link" names a real structural component — the 4th element of the Step Refinement shape that connects the rule to either a failure mode or a structural completeness concern. Without naming this element, the typology (failure-anchored vs. coverage-anchored) has no surface to live on. The term IS load-bearing because it's the surface where the typology applies.

**Confidence:** HIGH — necessary new vocabulary, justified by the typed-subtype structure.

**Resolution:** "anchor-link" is admitted as new corpus vocabulary, defined as: "the 4th element of a Step Refinement; the link from the rule to what it prevents (a failure mode or a structural completeness concern)."

---

## SV4 — Clarified Understanding

After ambiguity collapse:

- Two named patterns ready to formalize: **Step Refinement** (rule shape) and **Discipline Output Contract** (output shape). Independent at the artifact level.
- Step Refinement: 4-element shape (name / trigger / action / anchor-link); anchor-link typed as failure-anchored (dominant; 8 of 10 catalogued instances) or coverage-anchored (minority; 2 of 10).
- Discipline Output Contract: every discipline output exposes a verdict line (`PROCEED / FLAG / RE-RUN` or equivalent, possibly hedged) + standardized structural sections. Currently a 5-of-8-disciplines gap.
- Formalization level: descriptive only. No mechanical enforcement at this calibration state.
- User's #2 collapses; no new protocol file needed.
- "Anchor-link" admitted as new corpus vocabulary.

---

## Phase 4 — Degrees-of-Freedom Reduction

### Variables now fixed

- Two named patterns (not one, not three).
- Names: "Step Refinement" and "Discipline Output Contract."
- Step Refinement has two anchor-link subtypes: failure-anchored, coverage-anchored.
- Formalization is descriptive (specs, glossary, placement-convention addendum).
- Pattern #2 collapses into existing structures.
- "Anchor-link" is a corpus-vocabulary term.

### Variables eliminated

- "Single umbrella pattern covering both rules AND outputs" — eliminated (artifact independence).
- "Prescriptive enforcement (linters, validators)" — eliminated (premature for phase-fit).
- "New per-discipline output protocol file" — eliminated (redundant with Workspace Invariant + #3).
- "Treating the 2 innovate outliers as separate primitives" — eliminated (4-element shape unifies them).
- "Calling the primitive 'Anchor Rule'" — eliminated (collides with sensemaking's "cognitive anchors").

### Variables still open (innovation's job)

- Concrete artifact form for Step Refinement: glossary entry in `enes/`, placement-convention addendum, both, or new file.
- Concrete artifact form for Discipline Output Contract: which file hosts it (a new `enes/discipline_output_contract.md`? An addendum to existing files? A section in `homegrown/protocols/resume.md`?).
- Whether to retroactively add explicit failure-mode links to the 2 innovate outliers, or accept them as coverage-anchored examples.
- Whether to propose a "Refinement Note" visual-marker convention as part of the Step Refinement spec (closing the loop with the prior inquiry's C3.4).
- Whether to propose closing the verdict-line gap in 5 disciplines as part of this inquiry's MUST list, or defer.

---

## SV5 — Constrained Understanding

The solution space is now bounded:

- **Step Refinement verdict path:** descriptive name + 4-element shape spec + two anchor-link subtypes + glossary entry / placement-convention addendum + visual-marker convention from prior inquiry (C3.4).
- **Discipline Output Contract verdict path:** verdict line specification (with allowance for hedging) + standardized structural sections + plan for 5-discipline gap closure (touching disciplines as they're worked on, not blanket retroactive edit).
- **User's #2 verdict path:** acknowledge the intuition; redirect to Step Refinement + Discipline Output Contract; no new protocol file.

Innovation's job: generate concrete artifact proposals within these bounds. Critique's job: evaluate proposals against load-bearing concept test, phase-fit, placement convention compliance, resume.md alignment, and corpus coherence.

---

## Phase 5 — Conceptual Stabilization

The homegrown discipline corpus has accreted two emergent shapes that are now mature enough to name descriptively:

1. **Step Refinement** — a step-anchored rule with a 4-element shape (name / trigger / action / typed anchor-link). The anchor-link points to either a named failure mode (failure-anchored subtype, 8 of 10 catalogued instances) or a structural completeness concern (coverage-anchored subtype, 2 of 10). Step Refinements live at their canonical step per the placement convention; their accumulation at hot-spot steps is a known phenomenon. Visual marker = the prior inquiry's C3.4 italic prefix.

2. **Discipline Output Contract** — every discipline output should expose a verdict line (`PROCEED / FLAG / RE-RUN` or equivalent, possibly hedged for qualitative disciplines) and standardized structural sections. Currently observed in 3 of 8 disciplines; resume.md's "fall back to PROCEED" backward-compat is the workaround for the gap.

Both are descriptive formalizations: name the shape, document the elements, establish the going-forward expectation. Existing instances align organically as touched. No mechanical enforcement until tooling matures.

The user's per-discipline output protocol intuition was tracking the right meta-pattern but the right artifact is **naming + addendum**, not a new protocol file. Workspace Invariant covers runner-level framing; the new contract covers verdict + sections; per-discipline references files cover discipline-specific compilation logic. The user's intuition is honored by naming what they sensed, not by creating a redundant protocol.

---

## SV6 — Stabilized Model

Two named patterns are ready for descriptive formalization:

### 1. Step Refinement

**Definition:** a step-anchored rule with a 4-element shape (name / trigger / action / typed anchor-link) that lives at its canonical step per the placement convention.

**Anchor-link subtypes:**
- **Failure-anchored** (dominant; 8 of 10 catalogued instances): anchor-link points to a named failure mode in the discipline's failure-mode catalog. Example: sensemaking's "Load-bearing concept test" → "instance of Premature Stabilization."
- **Coverage-anchored** (minority; 2 of 10 catalogued instances): anchor-link points to a structural completeness concern. Example: innovate's "Axis coverage check" → ensures candidate set varies along orthogonal axes.

**Visual marker:** italic prefix `*Refinement note (applies at [Step / Phase / Component]):*` per the prior inquiry's C3.4 actionable.

**Formalization level:** descriptive. Glossary entry + placement-convention addendum naming the primitive and its shape. No mechanical enforcement.

### 2. Discipline Output Contract

**Definition:** every discipline output (saved as `<discipline>.md` in an inquiry folder) exposes:

- A **verdict line** (`PROCEED / FLAG / RE-RUN` or equivalent), which may carry hedging for disciplines whose self-assessment is genuinely qualitative (e.g., sense-making's saturation indicators).
- Standardized **structural sections** appropriate to the discipline (the existing per-discipline output structures already approximate this).

**Current state:** 3 of 8 disciplines have explicit verdict lines (innovate, td-critique, navigation). 5 have qualitative self-assessment or none (sense-making, explore, decompose, comprehend, reflect). The resume.md protocol's backward-compat "treat as PROCEED" is the workaround for the gap.

**Formalization level:** descriptive. New `enes/discipline_output_contract.md` (or section in `homegrown/protocols/resume.md`) specifying the verdict-line expectation. Disciplines without verdict lines update as they're touched, not blanket retroactive.

### Difference from SV1

SV1 said "one host primitive + one independent contract." SV6 confirms with three precisions:

1. The host primitive has TWO subtypes (failure-anchored + coverage-anchored), not one undifferentiated shape. The 2 innovate outliers are accommodated, not dismissed.
2. The name is **"Step Refinement"** — connects to the prior inquiry's C3.4 visual marker; doesn't collide with sensemaking's "cognitive anchors"; emphasizes both step placement and refinement-accretion semantics.
3. Formalization is descriptive only at this calibration stage. Glossary + addendum are the artifacts; linting / validation / mechanical enforcement are deferred.

The user's per-discipline output protocol intuition collapses into existing Workspace Invariant + the new Discipline Output Contract — no new protocol file. The user's instinct that "something is there" is correct; what was there is the two named patterns.

Critique's job is bounded: evaluate innovation's artifact proposals (glossary entry forms, addendum forms, contract-spec forms) against load-bearing concept test, phase-fit conservatism, placement convention compliance, resume.md alignment, corpus coherence, and the user's framing ("brushing teeth — descriptive maintenance, not heavy machinery").
