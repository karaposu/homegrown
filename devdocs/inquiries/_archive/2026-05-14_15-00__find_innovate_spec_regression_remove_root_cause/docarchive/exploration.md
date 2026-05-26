# Exploration — The `/innovate` Spec Regression Investigation

## Step 0 Declarations

| Field | Value |
|---|---|
| cognitive-commitment-mode | open |
| territory-type-mode | artifact (file diff + spec-text causal analysis) |
| entry-point | signal-first (verify user's regression hypothesis via concrete diff) |
| expected | ~5-10 candidates (variable; diff result determines) |
| depth-level | D3 with D4 probes on bias-inducing spec text |

Boundary: explicit (the two innovate.md files + the prior over-specified output). No boundary-discovery fires.

---

## Territory Overview

Two layers to map:

**Layer A — The actual diff** (mechanical change set between older and current versions of `/innovate`'s references).

**Layer B — The spec content that produces available-examples bias** (regardless of whether it changed recently or has been longstanding). The user's directive is REMOVE/REPAIR; the target is the spec text that causes the bias.

---

## Inventory

### Layer A — The actual diff (SURPRISING result)

**Diff command output:**

```
@@ -148,6 +148,8 @@ (Inversion mechanism section)
+*Refinement note (applies at Inversion mechanism):*
+

@@ -284,6 +286,8 @@ (Phase 3 Test section)
+*Refinement note (applies at Phase 3 Test):*
+

@@ -295,6 +299,8 @@ (Phase 3 Test → before Axis coverage check)
+*Refinement note (applies at Phase 3 Test):*
+
```

**The ONLY changes between the older and current versions are THREE cosmetic "Refinement note" header labels.** Six lines total. The body content of the spec is IDENTICAL between versions.

| ID | Change | Type | Semantic content change? |
|---|---|---|---|
| A1 | Line 151-152: added `*Refinement note (applies at Inversion mechanism):*` + blank line | Cosmetic label addition before "Depth check" in Inversion mechanism | NO — Depth check content existed in both versions |
| A2 | Line 289-290: added `*Refinement note (applies at Phase 3 Test):*` + blank line | Cosmetic label addition before "Output disposition categories" in Phase 3 Test | NO — categories content existed in both versions |
| A3 | Line 302-303: added `*Refinement note (applies at Phase 3 Test):*` + blank line | Cosmetic label addition before "Axis coverage check" in Phase 3 Test | NO — Axis coverage check content existed in both versions |

**Synthesis on Layer A: the "regression" hypothesis FAILS.** The user's hypothesis was that a recent change to `/innovate` introduced the available-examples bias. The diff shows no semantic content changed. Only retroactive labeling of existing content as "Refinement notes" was added. The bias was NOT introduced by a recent change.

### Layer B — The spec content that produces available-examples bias (longstanding, in BOTH versions)

Even though no regression occurred, the spec content itself DOES contain multiple instructions that explicitly direct innovate to draw from available/project context. These are longstanding spec features, not recent additions. The user's broader directive (find and remove the bad parts of the spec) is satisfiable by targeting these longstanding elements.

| ID | Location | Spec text | Bias-inducing role |
|---|---|---|---|
| **B1** | Line 50 (Intuition section, Context component) | *"Context — what concepts are cognitively proximate. Determined by what you're working on, thinking about, and exposed to. A developer working on AI methodologies has 'methodology,' 'AI,' and 'developer experience' in proximity — not because they chose to, but because daily work loaded those concepts."* | EXPLICIT instruction: context = "daily work" / "what you're working on, thinking about, exposed to." When daily work = a specific project, the framing of context-as-available pulls project-specific content. **High causal load.** |
| **B2** | Line 73 (Intuition Practical Implication) | *"Context can be supported through deliberate loading (workspace knowledge, recent work, domain themes)."* | EXPLICIT instruction: "workspace knowledge, recent work, domain themes" as the way to load context for innovation. When the workspace IS a project, context-loading pulls project-specifics. **Medium causal load.** |
| **B3** | Line 126 (Combination mechanism → "Sources" subsection, first source) | *"**What's already nearby** — concepts in the current context (conversation, project, problem space) that haven't been connected to the seed yet. Most combinations come from things already in proximity through intuition or daily work."* | EXPLICIT instruction: project listed as a source for "second concepts to connect with." This is THE smoking gun — Combination is the mechanism that built the L1 over-specification in 2026-05-14_12-45's `innovation.md`. The instruction directly tells the mechanism to pull from "project, problem space." **Highest causal load.** |
| **B4** | Line 129 (Combination mechanism → "Sources" subsection, fourth source) | *"**What the user/audience is already thinking about** — the innovator's own concerns, projects, and interests are a rich source of second concepts."* | EXPLICIT instruction: "projects, interests" as a "rich source of second concepts." Same pattern as B3, reinforced. **High causal load.** |
| **B5** | Line 133 (Combination mechanism → Example) | *"In a discussion about AI's future, three concepts were in proximity through the speaker's daily work and concerns... The concepts were available for combination because intuition had already placed them in proximity."* | REWARDING framing: the example treats "intuition had already placed them in proximity" as a POSITIVE feature, not as a bias risk. Reinforces B3/B4. **Medium causal load (example-level).** |
| **B6** | Line 192 (Absence Recognition mechanism, "How to apply" first item) | *"Survey the landscape around the seed"* | Context-bound surveying — "around the seed" implies adjacent-to-current-context. If the seed is project-internal, the landscape surveyed will be project-internal. **Lower causal load** (less explicit than B3/B4). |

### Layer C — Other observations

| ID | Observation | Causal role |
|---|---|---|
| **C1** | The 6 enumerated failure modes (§ Failure Modes, line 353+) do NOT include "available-examples bias" or "scope narrowing" as a recognized failure mode. | The spec doesn't internally warn about this failure pattern. |
| **C2** | The 5-test cycle in Phase 3 (line 280-286) does NOT include scope-fidelity-to-framing. | No testing-stage catch within /innovate's existing checks. |
| **C3** | The Axis coverage check (line 304) addresses a RELATED but distinct concern: "Single-axis candidate sets often arise from a frame inherited from upstream pipeline stages; the axis-coverage check counters that bias." | Closest existing protection but operates on axis-diversification, not on scope-fidelity-to-framing. |
| **C4** | The Domain Transfer mechanism (line 207+) explicitly COUNTERS available-examples bias by requiring import from "deliberately different fields (different industries, different disciplines, different eras)." | The spec already HAS one mechanism that counters the bias; the bias-inducing parts (B1-B5) coexist with the bias-countering Domain Transfer. The spec is internally inconsistent. |

### Layer D — Causal generative path (from spec text to L1 over-specification)

Concrete trace from the bias-inducing spec text to the specific bad output (`homegrown/`, `/navigation`, `/explore`, `2026-05-12_11-40` in the L1 trigger criteria):

1. The 2026-05-14_12-45 inquiry's innovation step was tasked with generating concrete spec-edit text for L1's trigger criteria.
2. Innovation cited "Constraint Manipulation + Combination" as mechanisms (per the archived `innovation.md`'s mechanism citations).
3. Combination's instruction at line 126: *"concepts in the current context (conversation, project, problem space)"* directs the mechanism to use the project as a source.
4. The inquiry was running INSIDE the Homegrown project. The project's "current context" includes: `homegrown/` directory; discipline names `/navigation`, `/explore`; inquiry-ID format `YYYY-MM-DD_HH-MM__name`.
5. Combination produced the trigger criteria using these project-context-available examples: *"file paths under `homegrown/`, discipline names like `/navigation` or `/explore`, prior inquiry IDs like `2026-05-12_11-40`."*
6. No scope-fidelity check fired (no failure-mode entry; no test-cycle item; Axis coverage check addresses a different axis).
7. The over-specified text exited Phase 3 ACTIONABLE and entered the finding.

**The causal path runs through B3 (line 126).** B3 is the load-bearing spec-text element that produced the bad output.

---

## Signal Log

### Probed signals (D3 with D4 on load-bearing)

| Signal | Probe result |
|---|---|
| **Is the diff a regression?** | NO. The diff shows only 3 cosmetic label additions. No semantic content changed. The user's regression hypothesis is structurally invalidated by the diff. |
| **Does the current spec contain bias-inducing instructions, even if not recently added?** | YES. Multiple instructions in Intuition (B1, B2) and Combination (B3, B4, B5) explicitly direct the mechanism to use available/project context. Absence Recognition (B6) has lower-load similar framing. |
| **Which instruction is the load-bearing cause of the L1 over-specification?** | B3 (Combination mechanism, line 126, "What's already nearby" source listing "project, problem space"). The L1 was generated via Combination + Constraint Manipulation; Combination's "Sources" subsection directly produced the project-internal candidate concepts. |
| **Is the user's directive (REMOVE/REPAIR the bad part) satisfiable given the diff result?** | YES, but with a reframing. The user's hypothesis was "find a recent regression-causing change." The actual finding is "find longstanding spec text that causes the bias." The directive shape (REMOVE/REPAIR) holds; the target (bias-inducing spec elements B1-B5) is identified; the spec edit is concrete. |
| **Does the spec already have a bias-countering mechanism?** | YES. Domain Transfer (C4) explicitly requires importing from "deliberately different fields." The spec is internally inconsistent: B1-B5 pull toward available-examples bias; Domain Transfer counters. The REPAIR could harmonize the inconsistency by adding scope-fidelity awareness to B1-B5 to match Domain Transfer's framing. |

### Deferred signals

| Signal | Why deferred |
|---|---|
| Whether the same bias-inducing instructions exist in older /innovate versions before bf4ae1f (e.g., the original from `devdocs/inquiries/2026-05-12_00-40__explore_discipline_from_scratch/finding_iter1.md`) | Out of scope; the user's comparison was specifically bf4ae1f vs current. Deeper historical archaeology is research frontier. |
| Whether other disciplines' specs (e.g., `/sense-making`, `/decompose`) have analogous bias-inducing instructions | Out of scope; cross-discipline survey is research frontier. |
| Whether the spec's bias-inducing instructions are intentional design or unintentional drift | Design-intent question; the user's prior critique implies they're not intentional. Sensemaking can adjudicate. |

### Jump-scan

Deliberately scanning previously-unscanned directions:

| Direction | Surface |
|---|---|
| **Could the bias be NOT in the spec, but in how the LLM applies the spec?** | Plausible — the LLM running /innovate has project context loaded into its working memory (recent commits, project memory, files read in the conversation). The spec's instructions are an upper-bound on what the LLM CAN do, but the LLM might pull project-specifics even WITHOUT explicit instructions. However, the spec's B1-B5 EXPLICITLY encourage this behavior, so even granting LLM-level effects, the spec is at least an enabling condition. REMOVE/REPAIR of B1-B5 removes the explicit encouragement; LLM behavior may still pull project-specifics, but the spec stops enabling it. |
| **Should "available-examples bias" be added as a Failure Mode #7?** | Possibly, but the user critiqued ADD-NEW-CHECK approaches. Adding a failure mode is a soft "warning" rather than an active check, so it's less invasive than M1 was. But the user's stronger directive is REMOVE/REPAIR the bias-inducing text. Failure-mode addition could SUPPLEMENT but not replace REMOVE/REPAIR. |
| **Is the Axis coverage check (C3) usable as a partial fix by extension?** | The Axis coverage check counters single-axis bias from upstream framing. Extending it to include scope-fidelity-to-framing would be a REPAIR of an existing check rather than a NEW check. This is partially what M1 was trying to do, but as a separate test rather than as a repair. The cleaner approach is to repair B1-B5 directly. |

Jump-scan refined the maintenance-candidate space. No new top-level regions surfaced. Frontier STABLE.

---

## Confidence Map

| Region | Confidence |
|---|---|
| **A1-A3 (diff is essentially nil at semantic-content level)** | **confirmed** — direct diff command output |
| **B3 (Combination's "What's already nearby" source listing "project, problem space") is the load-bearing cause** | **confirmed** — direct linguistic match to the bad output's project-specifics |
| **B1, B2, B4, B5 are supporting contributors** | **scanned with HIGH inference** — structural reasoning from the spec text |
| **B6 (Absence Recognition's "around the seed") is lower-load** | **scanned** — less explicit instruction than B3 |
| **C1 (no failure-mode entry for the bias)** | **confirmed** — direct read of Failure Modes section |
| **C2 (no scope-fidelity in 5-test cycle)** | **confirmed** — direct read of Phase 3 Test |
| **C3 (Axis coverage check is the closest existing protection but addresses different axis)** | **confirmed** — direct read of Axis coverage check |
| **C4 (Domain Transfer counters the bias)** | **confirmed** — direct read of Domain Transfer mechanism |
| **The regression hypothesis is structurally invalidated** | **HIGH inference from A1-A3** |
| **The longstanding-bias finding is the right frame** | **HIGH inference from B1-B6 + C1-C4** |
| **The right intervention is REMOVE/REPAIR B3 (primary) + B1/B2/B4/B5 (supporting)** | **scanned** — sensemaking adjudicates the specific edit |

**Confirmed-absent:**

- **A regression-causing change to /innovate between bf4ae1f and current.** Confirmed absent via direct diff.
- **An existing failure-mode entry for available-examples bias / scope-narrowing in /innovate's enumerated failure modes.** Confirmed absent.
- **A scope-fidelity test in /innovate's 5-test cycle.** Confirmed absent.

---

## Frontier State

**STABLE.** Three convergence criteria met:

1. Frontier stability — the diff was performed; the bias-inducing spec elements were identified; no new top-level regions surfaced in jump-scan.
2. Declining discovery rate — jump-scan surfaced refinements (LLM-behavior consideration; failure-mode-addition as supplement; Axis coverage check extensibility) but no new operations.
3. Bounded gaps — remaining unknowns (deeper historical archaeology; cross-discipline survey; design-intent question) are research-frontier; not load-bearing for the current REMOVE/REPAIR proposal.

Jump-scan rule satisfied.

---

## Gaps and Recommendations

### Gaps

- **The user's regression hypothesis is not confirmed by the diff.** The exploration must report this honestly. The user's broader directive (find and remove the bad part) is still satisfiable, but the target is longstanding spec text, not a recent regression.

- **The bias may have multiple contributing spec elements (B1-B5), not a single mono-cause.** Sensemaking must adjudicate whether the REMOVE/REPAIR targets B3 alone (highest causal load) or B1-B5 together (multi-element repair).

- **The relationship between the spec's bias-inducing parts (B1-B5) and the spec's bias-countering part (C4 Domain Transfer) suggests internal inconsistency.** A clean REPAIR could harmonize the spec — but harmonization is a larger edit than minimal removal.

### Recommendations for downstream disciplines

- **Sensemaking** adjudicates: (a) the verdict shape on the prior finding (`2026-05-14_14-00`) — does this CORRECTS the M1 maintenance candidate's shape only, OR also the failure-mode naming, OR also the family-positioning? (b) the REMOVE/REPAIR scope — B3 alone (minimal, mono-cause) vs B1-B5 (multi-element harmonization) vs B1-B6 (full)? (c) the relationship between this REPAIR and the prior M1 — does M1 die entirely OR does some version of it stand as defense-in-depth? (d) honest cost-naming for 7 MVL+ in succession.

- **Decomposition** partitions: (a) the diff finding (regression hypothesis fails); (b) the load-bearing causal element (B3); (c) the supporting contributors (B1, B2, B4, B5); (d) the REMOVE/REPAIR text; (e) the CORRECTS framing on prior finding's M1 shape.

- **Innovation** generates concrete REMOVE/REPAIR spec edit text. Specifically: the proposed new text for B3 (and other targeted elements) that removes the bias-inducing instruction WITHOUT removing the mechanism's core function (finding "second concepts to connect with").

- **Critique** evaluates: (a) does the REMOVE/REPAIR successfully eliminate the bias-inducing instruction without breaking the mechanism? (b) does the REPAIR scope match the diagnosed cause's scope (don't over-edit)? (c) is the CORRECTS on the prior finding's M1 shape rigorous? (d) honest cost-benefit at iteration #7.

---

## Telemetry

**Base metrics:**

- Mode: artifact (direct file diff + spec-text analysis)
- Entry point: signal-first (specific user hypothesis to verify via diff)
- Cycles run: 2 (diff cycle + spec-text causal analysis cycle) + 1 jump-scan
- Candidates generated: 3 diff entries (A1-A3) + 6 bias-inducing spec elements (B1-B6) + 4 other observations (C1-C4) + 1 causal generative path (Layer D) = 14 candidates
- Signals detected: 5 probed at D3-D4; 3 deferred
- Resolution progression: D2 baseline; D3 on bias-inducing spec elements; D4 on B3 (the load-bearing causal element)
- Frontier state: stable
- Discovery rate: declining
- Convergence criteria status: frontier-stability YES, declining-discovery-rate YES, bounded-gaps YES
- Jump-scan performed: YES
- Failure modes checked: premature depth (avoided — broad diff first); surface-only scanning (avoided — D4 probe on causal path); false confidence (jump-scan done); premature termination (3 criteria met); re-exploration (frontier tracking); completeness bias (multi-element B1-B6 enumeration before commitment to B3 as primary).

**Self-assessment: PROCEED.**

The exploration delivers a SURPRISING but well-grounded finding: the user's regression hypothesis is structurally invalidated by the diff, but the user's broader directive (find and remove bad parts of the spec) is satisfiable by targeting longstanding bias-inducing spec elements. B3 (Combination mechanism's "What's already nearby" source listing "project, problem space") is the load-bearing causal element for the L1 over-specification.

**Initial verdict-direction (to be adjudicated by sensemaking):**

- The diff is essentially nil at semantic-content level. The regression hypothesis fails.
- B3 is the load-bearing causal spec-text element. REMOVE or REPAIR target.
- B1, B2, B4, B5 are supporting contributors. May be repaired in the same edit or deferred.
- B6 is lower-load; defer.
- C1-C2 (absent failure-mode entry, absent scope-fidelity test) confirm there's no internal guardrail; REMOVE/REPAIR of B3 reduces the bias-enabling explicit instruction.
- The prior finding's M1 (ADD-TEST at Phase 3) is the wrong shape; this finding's REMOVE/REPAIR of B3 is the right shape.
- The prior finding's failure-mode naming ("loop-stage scope-leakage") MAY stand as a descriptive label for the failure-mode CLASS, even though the specific instance is caused by B3 rather than by an emergent regression. Sensemaking adjudicates.
- The prior finding's family-positioning (fourth member) MAY need re-evaluation — if the failure is "B3 in the spec produces project-specific outputs," it's bug-level, not pattern-level. Sensemaking adjudicates.
- Honest cost: 7 MVL+ in succession; the diff was specific and yielded a structural finding that overturns part of the prior diagnostic. Cost justified by the structural-correction value.

**Note for downstream disciplines.** The user's directive is REMOVE/REPAIR, not ADD-TEST. Maintenance candidates must be spec-text edits to B1-B5, not new tests or checks. If sensemaking determines that adding a failure-mode entry to /innovate's enumerated failure modes is also warranted (as documentation), it should be SECONDARY to the REMOVE/REPAIR of B3; it is not the primary fix.
