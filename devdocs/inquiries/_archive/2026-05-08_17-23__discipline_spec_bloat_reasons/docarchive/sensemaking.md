# Sensemaking — Discipline-spec apparent-bloat reasons

## User Input

```
Read the inquiry's _branch.md and exploration.md (in the same folder) as primary input.
The exploration produced a structural map with both pro-bloat and anti-bloat readings per
pattern; sense-making's job is to collapse those readings into a stable understanding per
pattern.

Specific anchors to test during ambiguity collapse:
- Is "audience-separation" a load-bearing principle in homegrown, or post-hoc?
- Does "execution-hugging" actually reduce LLM miss-rate?
- Is the placement convention's silence on formatting a gap or deliberate?
- Are the three patterns three different problems, or instances of one underlying pattern?

Apply the load-bearing concept test from Phase 3.
```

---

## SV1 — Baseline Understanding

The exploration mapped three regions, each with a pro-bloat and anti-bloat reading. Initial reading: patterns 1+2 are audience-separation patterns (defended by audience differences); pattern 3 is placement-convention compliance (defended by execution-hugging). Per-pattern verdicts likely diverge. Some apparent bloat is defensible; some compression is available.

---

## Phase 1 — Cognitive Anchor Extraction

### Constraints

- The placement convention (`enes/discipline_rule_placement.md`) is an active project rule. Verdicts must respect it or explicitly propose reopening it.
- LLM behavior is the actual execution context; arguments must hold for LLM-as-runner, not just human-as-reader.
- The corpus has no measured drift data and no measured miss-rates. Arguments are structural.
- Refactor proposals must preserve canonical-home semantics from the placement convention.
- The user has framed the inquiry as "there are reasons to the most bloat looking things" — the inquiry leans toward defending where defenses hold, then surfacing the remainder.

### Key Insights

- Patterns 1 and 2 share a structure: canonical content + audience-targeted re-pointers. Pattern 3 has different structure: canonical content placed at point-of-firing.
- The "drift risk" critique of B2 (summary tables) is the only critique that holds without questioning audience-separation.
- "Execution-hugging" is the load-bearing claim for pattern 3 and is structurally defensible but empirically unverified.
- Critiques of A3/B3 (the mid-exec footers) are length critiques, not presence critiques. The audience exists; its pointer is currently overweight.

### Structural Points

- Each `SKILL.md` has three loading-related touch points: Step 0 pre-read; in-process step references; footer reminder.
- Each `references/X.md` has two failure-mode touch points: body section; summary table.
- Bolted-on subsections live inside numbered process steps in `references/X.md`, not in `SKILL.md`.
- Two layers of defense exist: runner-layer ("Skill tool with Read fallback; never execute from memory") and skill-layer ("Step 0 pre-read"). They are complementary, not redundant.

### Foundational Principles

- Placement convention's central rule: ONE canonical home per rule, scope-determined.
- Audience-separation principle: different audiences/runtime-moments have different state and different failure modes; addressing each is not the same as duplicating.
- Execution-hugging principle: rules fire at the point of use; placing them elsewhere reduces firing rate under attention load.

### Meaning-Nodes

- **Audience-separation** — the proposed principle that justifies patterns 1 and 2.
- **Execution-hugging** — the proposed principle that justifies pattern 3.
- **Convenience layer** — the candidate name for B2 and possibly A3/B3 (mid-exec footers).
- **Canonical content** — what B1 and the bolted-on subsection bodies represent.
- **Runtime moment** — the proposed operationalization of "audience" (skill-load time, file-read time, mid-exec recognition time).

---

## SV2 — Anchor-Informed Understanding

The question splits along two axes:

1. Does the pattern have a load-bearing function?
2. Is the current implementation the most compact form that preserves that function?

- **Patterns 1 and 2:** YES on (1); mixed on (2). The convenience layers (A3, B3, possibly B2) are likely overweight relative to the function they serve.
- **Pattern 3:** YES on (1) for placement (convention-compliant); YES on (1) for execution-hugging (defended but unverified); open question on (2) — typographic demotion may improve readability without violating either.

The inquiry's verdicts hinge on three concept tests: is audience-separation real? is execution-hugging real? is the formatting gap real?

---

## Phase 2 — Perspective Checking

### Technical / Logical

The placement convention is logically consistent. Audience-separation is structurally distinct from execution-hugging. Patterns 1+2 reduce to "same content for different audiences"; pattern 3 reduces to "rule lives where it fires." These are not the same problem.

**New anchor (counter-pull):** at higher abstraction, both reduce to "use-case-driven placement." Verdict-relevant distinctions persist (different defenses, different refactor candidates) but the unifying principle is real.

### Human / User

The user — a developer maintaining homegrown — encounters specs that look bloated on first read. The bloat impression is a real cost (slows comprehension) even if the patterns are defensible. The user has already signaled belief that defenses exist; the inquiry's job is to surface them, not refight.

### Strategic / Long-term

The spec corpus's growth pattern is "specs accrete refinements over time." The placement convention is the structural answer to that growth. If the convention is sound, future accretion will continue producing bolted-on subsections at hot-spot steps. Long-term sustainability depends on whether hot-spots eventually require step-level refactoring.

**New anchor:** hot-spot saturation as a separate concern from per-subsection placement. Out of scope here, but real.

### Risk / Failure

- Removing A3/B3 entirely: mid-exec LLM may not consult references at recognition time. Real risk if context has compressed.
- Removing B2: drift backstop disappears; novice readers lose the "did I see all of them?" check. Small risk.
- Hoisting pattern-3 subsections to sidebars: LLM may de-prioritize during execution. Real risk under execution-hugging.
- NOT refactoring: ongoing bloat impression; corpus appears unmaintained; new contributors face friction.

### Resource / Feasibility

Refactors are cheap if scoped (compress A3/B3 to one-liners; drop B2 or compress to anchor list; pattern-3 typographic demotion). Mechanically easy.

The execution-hugging claim is testable (compare LLM output with refinements demoted vs. inline). Test cost is real but bounded; not run here.

### Definitional / Consistency

The placement convention says "one canonical home." Patterns 1 and 2 violate this *if* the placements are read as the same content; they satisfy it *if* read as three different rules (one per audience).

This is the central ambiguity. The convention's "scope of application" test resolves it: if "audience" counts as scope-distinction, audience-separation is legitimate. If not, it's loophole abuse.

The convention's intent is to avoid drift, single-source content, and multi-surface maintenance. Audience-separation passes the intent test only if each placement actually fires under different conditions and prevents different failures. The exploration's audit shows this holds for A1/A2/A3 and B1/B3; weakly for B2.

### Phase / Calibration-State

The homegrown codebase is at early calibration. Specs are still being refined; failure-mode catalogs are still incomplete. In this state, losing a defensive layer (e.g., dropping B2 or compressing A3 too aggressively) costs more than at maturity. Defensive redundancy is calibrated to early-stage uncertainty.

**New anchor:** phase-fit. The verdict should explicitly note "revisit when calibration matures" rather than treating the patterns as permanent.

---

## SV3 — Multi-Perspective Understanding

After perspectives:

- Audience-separation is legitimate IF the convention's intent test passes. The exploration's audit shows it does for most placements. Audience is best operationalized as "runtime moment with distinct context-state and distinct failure prevention," not "human role."
- Execution-hugging is structurally defensible (rules fire at point of use under attention load) but currently unverified. The conservative default — keep canonical-step placement — costs nothing if execution-hugging is wrong (rule still fires) but helps if it's right.
- Phase-fit matters: at early calibration, defensive redundancy is appropriate. Verdicts should be conservative.
- The three patterns are operationally distinct (different defenses, different refactor candidates) but converge on a unified principle at higher abstraction (use-case-driven placement).

---

## Phase 3 — Ambiguity Collapse

### Ambiguity 1: "Audience-separation" — load-bearing principle or post-hoc justification?

**Strongest counter-interpretation:** audience-separation is rhetoric. The actual reason for redundancy is "the original author wrote it three times because they were uncertain it would land once." Granting "different audiences" as scope-distinction is convenient — it lets any redundancy be re-described as legitimate scope, draining the placement convention of its compression force.

**Why the counter fails (structural grounds):** the SKILL.md / references/X.md / SKILL.md-footer triad addresses three distinct system states — Skill-tool invocation moment (A1), file-read moment (A2), mid-execution recognition moment (A3). These are not "the same audience at three times"; they are three different runtime moments with different available context. The skill-loader has just loaded SKILL.md and may not know the references file is canonical (A1 prevents). The contributor may have opened references/X.md without reading SKILL.md (A2 prevents). The mid-execution LLM has likely de-prioritized loaded content as context fills (A3 prevents). Each placement prevents a distinct failure under distinct conditions. Under the convention's "scope of application" test, these are different rules.

The counter is not entirely wrong: the convention's text doesn't explicitly endorse "runtime moment" as scope, and granting it admits a subtle abuse vector. But the alternative reading — collapsing the three placements as one rule — would force the codebase to lose at least one defended firing condition. Collapsing is the more aggressive move; the conservative reading respects the convention's intent (avoid drift) without straining its letter.

**Confidence:** HIGH — the runtime-moment distinction is structurally observable in the file content (different positions, different surrounding context, different triggers). The counter fails because collapsing the placements would lose distinct failure prevention.

**Resolution:** Audience-separation is a load-bearing principle in homegrown, with the qualifier that "audience" is operationalized as "system runtime moment with distinct context-state and distinct failure prevention." A1/A2/A3 (and B1/B3) each prevent a distinct failure at a distinct moment.

**What is now fixed:** the audience-separation principle is the operative justification for patterns 1 and 2. Per-pattern verdicts must respect it.

**What is no longer allowed:** dismissing A1/A2/A3 (or B1/B2/B3) as "all the same content" without identifying which firing moment each addresses.

**What now depends on this choice:** the per-pattern verdicts in critique. Default for pattern 1 and 2 is "load-bearing" unless a specific placement can be shown not to need its runtime moment.

**What changed in the conceptual model:** from "three placements look the same" to "three placements address three runtime moments with distinct failure-prevention roles."

---

### Ambiguity 2: "Execution-hugging" — does it actually reduce LLM miss-rate?

**Strongest counter-interpretation:** execution-hugging is a plausible-sounding claim with no empirical grounding. LLMs read the whole spec at execution time anyway; whether a refinement is at the canonical step or in a "Refinement notes" sidebar doesn't matter — the LLM has both in context. The argument confuses "where the rule lives in the document" with "whether the LLM applies it."

**Why the counter fails (structural grounds):** the counter is correct that LLMs in current implementations load the whole spec into context. But the failure mode at issue is *attention/de-prioritization* under load, not absence-from-context. When an LLM is mid-Phase-3 of a 5-discipline pipeline, it is making local decisions and consulting local content. A refinement at the canonical step is encountered when the trigger condition fires; a refinement in a sidebar requires an active "did I check the sidebar?" step that may or may not happen. The execution-hugging claim is about attention allocation under context-load, not about absence-from-context.

But this is unverified. "More likely to be applied" is a directional claim, not a measured one. The strongest defense is conservative-default reasoning: place rules where they fire; this costs nothing if LLMs always check sidebars (the rule still fires) but helps if they don't.

**Confidence:** LOW — the structural argument is plausible but the empirical grounding is absent. The conservative-default reasoning is defensible but not air-tight. *Citing the conservative default is precedent-style argument, not structural evidence.* Per the sense-making spec, this means the resolution is LOW CONFIDENCE.

**Resolution:** treat execution-hugging as a working assumption at current calibration. Bolted-on placements stay at canonical-step placement. Refactor candidates are typographic-only (italic prefix, indented block, smaller heading), not relocational. Flag execution-hugging as a testable claim for a future inquiry once telemetry exists.

**What is now fixed:** the bolted-on subsections stay at canonical-step placement. Refactor candidates are typography-preserving canonical placement.

**What is no longer allowed:** hoisting refinements to sidebars or appendices on visual-cleanup grounds.

**What now depends on this choice:** the pattern-3 verdict is constrained to typographic improvements.

**What changed in the conceptual model:** execution-hugging is a working assumption, not proven. The verdict cannot rest on disproving it; the conservative default is to respect it.

---

### Ambiguity 3: Is the placement convention's silence on formatting a gap or deliberate?

**Strongest counter-interpretation:** the convention is silent on formatting because formatting is deliberately out of scope; the convention only governs structural placement, and visual-weight critiques are out-of-scope.

**Why the counter PARTIALLY succeeds:** the convention does focus on placement, and formatting is plausibly out-of-scope. But the consequence of strict placement-following — visual accretion at hot spots — is foreseeable. A complete convention would either (a) acknowledge the formatting gap and provide a typographic protocol, or (b) explicitly state formatting is not its concern and direct readers elsewhere. The current convention does neither. Silence is plausibly oversight, plausibly deliberate.

Without strong structural evidence for "deliberate," the conservative reading is "gap." The gap doesn't make the convention wrong; it makes it incomplete on a question the homegrown corpus hasn't yet faced systematically.

**Confidence:** LOW — could be either reading; the convention's text doesn't disambiguate.

**Resolution:** treat as a real gap. Future inquiry could propose a formatting protocol that complements canonical-home placement (e.g., "step-level refinements use heading level N+1 and italicized 'Refinement note:' prefix"). The current inquiry's verdict can recommend typographic improvements without claiming the convention is broken.

**What is now fixed:** visual-weight is a real concern that the placement convention does not currently address.

**What is no longer allowed:** blaming the bolted-on subsections for following the convention. They are correctly placed.

**What now depends on this choice:** refactor proposals can include typographic improvements without re-opening the placement convention itself.

**What changed in the conceptual model:** the convention is correct on placement, silent on formatting; that silence is a real gap that explains the residual readability problem.

---

### Ambiguity 4: Are the three patterns three different problems, or instances of one underlying pattern?

**Strongest counter-interpretation:** all three are instances of one pattern: "homegrown adds redundant placements when audiences/use-cases differ." Patterns 1+2 are runtime-moment-driven; pattern 3 is point-of-firing-driven. These are both "use-case-driven placement" — same underlying principle.

**Why the counter PARTIALLY succeeds:** at high enough abstraction, they ARE the same — homegrown values redundancy when each placement has a distinct cognitive use. But the abstraction collapses the verdict-relevant distinctions. Each pattern has a different *strongest defense* (audience-separation for 1+2, execution-hugging for 3) and a different *refactor candidate* (compression for 1+2, typographic demotion for 3). These distinctions persist at the verdict level even if the high-abstraction unification is true.

**Confidence:** HIGH that verdicts differ at the spec-edit level; HIGH that the unifying principle exists at higher abstraction.

**Resolution:** keep the per-pattern verdicts. Flag the unifying principle ("use-case-driven placement") as a generative observation worth promoting to the discipline taxonomy or rule-placement convention. Spec-edit verdicts are per-pattern; the unifying principle is a frontier observation.

**What is now fixed:** per-pattern verdicts are the deliverable.

**What is no longer allowed:** collapsing the three patterns into one verdict at spec-edit level.

**What now depends on this choice:** critique evaluates per-pattern; navigation/reflect notes the unifying principle.

**What changed in the conceptual model:** the three patterns are operationally distinct (different defenses, different refactor candidates) but conceptually unified (one underlying principle).

---

### Ambiguity 5 (load-bearing concept test on "summary table"): Is B2 a maintenance backstop or pure restatement?

**Strongest counter-interpretation:** B2 is purely cosmetic; the "maintenance backstop" claim is rationalization.

**Why the counter PARTIALLY succeeds:** most of B2's content is restatement of B1's headings. The "backstop" function (forcing the author to update the count when adding a failure mode) is real but weak — there is no automation enforcing the count, and a careful author updating B1 would also update B2 voluntarily. The backstop is pragmatic, not structural.

But B2 also serves the "did I see all of them?" skim function for a reader who doesn't want to read B1's full descriptions. That's a genuine reader-state different from B1's audience.

**Confidence:** HIGH that B2 is the weakest-defended placement in the inquiry; the audience-separation defense is real but pragmatic, not structural.

**Resolution:** B2 has weak audience-separation defense (skim audience). It is the cleanest refactor candidate in pattern 2. Refactor options: drop entirely, replace with anchor list (names + links to body), or keep with reduced footprint.

**What is now fixed:** B2 is the candidate for compression or removal.

**What is no longer allowed:** treating B2 as fully load-bearing under audience-separation.

**What now depends on this choice:** innovation generates refactor options for B2; critique tests them.

**What changed in the conceptual model:** B2 is the pattern's weakest link; pattern 2 verdict is "B1 + B3 load-bearing; B2 refactorable."

---

### Ambiguity 6 (specific-vs-pattern recognition cue): Are these three specific patterns the whole problem, or examples of a wider problem?

Per the sense-making spec's specific-vs-pattern cue: when committing to "what the problem IS" from a small set of specific examples, ask whether they are the whole problem or just cases of a wider pattern.

**Counter-interpretation:** the three patterns came from one pass over the corpus by one reader. They likely miss other accretion-pattern instances:
- The negative-rule format in MVL+ workspace invariant (8-bullet "Invalid compact execution patterns")
- "What X IS / IS NOT" sections (audience-separation case at a different layer)
- MVL/MVL+ runner duplication (audience-separation at runner layer)

**Why the counter is acknowledged but doesn't change the verdict:** these were noted as "honourable mentions" in the prior conversation but didn't enter the inquiry's primary scope. The inquiry is bounded to three named patterns; the wider phenomenon is real and would be a separate inquiry.

**Confidence:** HIGH that the wider pattern exists; HIGH that the inquiry stays scoped per the user's framing.

**Resolution:** the three patterns are a representative sample of a wider phenomenon. Verdicts apply to the three; the unifying principle (if confirmed) generalizes; navigation/reflect should flag follow-up inquiries on the wider pattern.

**What is now fixed:** the inquiry stays per-pattern; the unifying observation is a frontier seed.

**What is no longer allowed:** generalizing per-pattern verdicts to a corpus-wide claim without further inquiry.

---

## SV4 — Clarified Understanding

After ambiguity collapse:

- **Audience-separation** is load-bearing in homegrown when "audience" = "runtime moment with distinct context-state and distinct failure prevention." A1/A2/A3 and B1/B3 satisfy this; B2 satisfies it weakly (skim-state vs. deep-read state).
- **Execution-hugging** is a working assumption at current calibration (LOW confidence). Refactors of pattern 3 must preserve canonical-step placement.
- The placement convention is **silent on formatting**. This is a real gap. Bolted-on subsections are correctly placed; the residual issue is typographic.
- The three patterns are **operationally distinct** (different defenses, different refactor candidates) but **conceptually unified** at the higher abstraction "use-case-driven placement."
- **B2 (summary tables)** is the weakest-defended placement; the cleanest refactor candidate in the inquiry.

---

## Phase 4 — Degrees-of-Freedom Reduction

### Variables now fixed

- Audience-separation is a legitimate scope distinction under the placement convention (HIGH confidence).
- Execution-hugging is the working defense for pattern-3 placement; not to be overridden without evidence (LOW confidence on the claim itself; HIGH confidence on the conservative-default reasoning).
- The placement convention is correct on placement, silent on formatting.
- Per-pattern verdicts are the deliverable; unifying principle is a frontier observation.

### Variables eliminated

- "All three patterns are the same problem at spec-edit level" — eliminated (operationally distinct).
- "Refactor pattern 3 by hoisting subsections to sidebars" — eliminated (violates execution-hugging working assumption).
- "Drop A1, A2, A3 entirely as redundant" — eliminated (each addresses a distinct runtime moment).
- "All B2 summary tables should be deleted blanket-style across the corpus" — restricted to "B2 is the cleanest refactor candidate; verdict is per-instance, not blanket."

### Variables still open (innovation generates options)

- Compression form for A3/B3: one-line vs. paragraph.
- B2 disposition: drop, replace with anchor list, or keep with note.
- Pattern-3 typographic conventions: heading level demotion, italic prefix, "Refinement note:" tag, indented block.
- Whether to propose a placement-convention update for formatting — meta-refactor; out of primary scope but flagged.

---

## SV5 — Constrained Understanding

The solution space is now bounded:

- **Pattern 1 verdict path:** load-bearing; A3 mildly compressible (one-line refactor).
- **Pattern 2 verdict path:** load-bearing on B1+B3; B2 is the refactor target (drop, anchor list, or compressed).
- **Pattern 3 verdict path:** correctly placed; refactor candidates are typographic-only, preserving canonical step placement.

Innovation's job: generate concrete refactor proposals within these bounds. Critique's job: evaluate each proposal against the audience-separation, execution-hugging, and phase-fit principles confirmed here.

---

## Phase 5 — Conceptual Stabilization

The apparent bloat in homegrown discipline references is a deliberate cost of three principles operating together:

1. The **placement convention's** "one canonical home per rule, scope-determined."
2. **Audience-separation** as a legitimate scope distinction (where audience = runtime moment with distinct context-state and distinct failure prevention).
3. **Execution-hugging** as a working assumption that rules placed at the point of firing are more likely to be applied under context load.

Under these three, most of the apparent bloat is defended. The remaining refactor candidates are:

- **Pattern 1:** compress A3 to one line (preserves audience function with reduced length).
- **Pattern 2:** B2 (summary tables) is the weakest placement; compress to anchor list or drop.
- **Pattern 3:** typographic demotion of bolted-on subsections (italic prefix, smaller heading, indented block) preserving canonical step placement.

The unifying principle — "use-case-driven placement, audience operationalized as runtime moment" — generalizes upward to other apparent-bloat patterns in the codebase (`/MVL` vs `/MVL+` duplication; "What X IS / IS NOT" sections; etc.). That generalization is a frontier observation, not a primary deliverable.

**Phase-fit caveat:** at current early-calibration state, conservative defense is appropriate. Verdicts should explicitly note "revisit when calibration matures and telemetry exists" — particularly for the execution-hugging claim, which is currently unverified.

---

## SV6 — Stabilized Model

The final framing has three parts:

### 1. Per-pattern verdicts

| Pattern | Verdict | Refactor candidate |
|---|---|---|
| 1: Reference-loading boilerplate triplication | Load-bearing on A1+A2; A3 mildly compressible | Compress A3 to one line |
| 2: Failure-mode triplication | Load-bearing on B1+B3; B2 weakest | Compress B2 to anchor list or drop |
| 3: Bolted-on sub-rules in numbered steps | Correctly placed per convention; residual issue is typographic | Visual demotion preserving canonical placement |

### 2. Three principles that defend the patterns

- Placement convention's one-canonical-home rule.
- Audience-separation (audience = runtime moment, not human role).
- Execution-hugging (rules fire at point of use; conservative default until tested).

### 3. Phase-fit and frontier

- Verdicts are calibrated to early-stage uncertainty; revisit at maturity.
- Unifying principle "use-case-driven placement" generalizes upward as a frontier observation.

### Difference from SV1

SV1 said "patterns 1+2 are audience-separation; pattern 3 is placement-convention." SV6 confirms that frame and adds three precisions:

1. "Audience" is operationalized as **runtime moment with distinct context-state and distinct failure prevention**, not human role. This is the test that distinguishes legitimate scope-by-audience from loophole abuse.
2. **Execution-hugging is a working assumption** (LOW confidence on the claim, HIGH confidence on the conservative default), not a proven principle. Refactor proposals must respect it without resting on it.
3. The placement convention has a **real gap on formatting**. Pattern-3 refactor candidates exist within that gap — typography, not placement.

Critique's job is now bounded: evaluate refactor proposals (which innovation will generate) against these three principles + phase-fit + the per-pattern verdict targets. The principles ARE the dimensions; convergence on a clean SURVIVE verdict per pattern requires a refactor that passes all three.
