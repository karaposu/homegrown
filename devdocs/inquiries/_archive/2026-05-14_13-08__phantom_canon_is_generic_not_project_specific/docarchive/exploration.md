# Exploration — Phantom Canon is Generic (Redo with Generalized L1)

## Step 0 Declarations

| Field | Value |
|---|---|
| cognitive-commitment-mode | open |
| territory-type-mode | artifact (previous LOOP_DIAGNOSE finding + user correction) + small possibility (generic L1 trigger candidates) |
| entry-point | signal-first (user's correction = trigger over-specified) |
| expected | ~8-12 candidates |
| depth-level | D2 with D3 probes on generic-trigger formulation + recursive-demonstration framing |

Referenced artifacts and canon-status declared (applying the proposed L1 to this inquiry):

- `devdocs/inquiries/2026-05-14_12-45__loop_diagnose__existing_artifact_as_canonical_reference/finding.md` — **under-test** for L1 spec correctness; **canon** for verdict + Phantom Canon name + family positioning (those parts preserved)
- `devdocs/inquiries/2026-05-13_12-45__prior_mapping_understanding_was_wrong_redo/finding.md` — **canon** (strengthened diagnostic + lesson-introduces-its-own-trap pattern)
- `devdocs/inquiries/2026-05-14_00-26__verify_findingpaths_general_is_configured_explore/finding.md` — **canon** (framing-load-bearing pattern; sister meta-condition)
- `homegrown/protocols/loop_diagnose.md` — **canon** (the protocol format)
- `~/.claude/skills/explore/references/explore.md` — **canon** (previous finding's diff-check confirmed no divergence from `homegrown/explore/references/explore.md`)

---

## Territory Overview

Three layers:

**Layer A — The over-specification in the previous LOOP_DIAGNOSE finding's L1.** Where exactly did the project-specific framing leak in? What did it implicitly assume?

**Layer B — The generic formulation.** What's the project-agnostic trigger criterion? How do illustrative examples diversify without losing concreteness?

**Layer C — The recursive demonstration.** The previous LOOP_DIAGNOSE finding ITSELF exhibited Phantom Canon. Is this a NEW failure mode or a concrete instance of lesson-introduces-its-own-trap? What does it teach about applying lessons to themselves rigorously?

---

## Inventory

### Layer A — Where the over-specification leaked

| ID | Location in previous finding | Over-specified content | Why over-specified |
|---|---|---|---|
| **A1** | L1's trigger description | *"file paths under `homegrown/`, discipline names like `/navigation` or `/explore`, prior inquiry IDs like `2026-05-12_11-40`"* | The examples treat THIS project's artifact namespace (homegrown/; project-specific discipline names; this-project's inquiry-ID format) as the canonical enumeration of "what counts as a project artifact" |
| **A2** | L1's category illustrative examples | *"an existing `/navigation` discipline spec that was an earlier attempt"* (for `non-canon`); *"a recently-shipped finding cited as established background"* (for `canon`) | All examples drawn from this-project's artifact pool; no other-project or external-reference examples to demonstrate the generic applicability |
| **A3** | L1's "Which file is affected" line | *"canonical at `homegrown/protocols/` if a canonical version exists"* | Assumes canonical-vs-installed pattern is this-project-specific; in another project the canonical-vs-installed distinction might be entirely different |
| **A4** | The recursive demonstration paragraph itself (P4 self-reference) | The `diff homegrown/explore/references/explore.md ~/.claude/skills/explore/references/explore.md` check was applied to this-project artifacts only | Within the same project; didn't demonstrate the check on artifacts from other projects |

**Synthesis:** A1 is the load-bearing over-specification (it's the trigger criterion definition). A2 and A4 are downstream of A1. A3 is supporting. The generalization target is A1; A2/A3/A4 update consequentially.

### Layer B — The generic formulation

| ID | Component | Generic formulation |
|---|---|---|
| **B1** | **Generic trigger criterion** | The pre-step fires when the inquiry's question or goal explicitly references ANY artifact whose canon-status could be ambiguous — regardless of which project the artifact belongs to. "Artifact" includes: file paths in any project tree; named entities (disciplines, methods, frameworks, libraries); identifiers (prior inquiry IDs, document references, version tags); prior work products from any context; external references treated as authoritative (papers, standards, conventions). |
| **B2** | **Ambiguity threshold (operational refinement)** | The pre-step fires when canon-status COULD be ambiguous, not on every artifact reference. Recognition signal: *"if you can't easily say whether the artifact represents the user's current intent for the question being asked, the pre-step fires."* An artifact whose canon-status is OBVIOUSLY canon (e.g., the standard language specification when asking about that language's syntax) doesn't trigger the pre-step. An artifact whose status is non-obvious DOES. |
| **B3** | **Generic category examples** (one per category, diversified across contexts) | **`canon` example:** the W3C HTML spec when an inquiry asks about HTML element semantics. **`non-canon` example:** a prior `/navigation` discipline spec in this project that was an earlier attempt but doesn't reflect the user's current intent. **`under-test` example:** a hypothesis being evaluated by the current inquiry. **`historical` example:** an iter-1 design document superseded by iter-2 in any project. **`unknown` example:** a third-party library's documented behavior when the user hasn't verified the library version matches the docs. |
| **B4** | **Project-agnostic file-affected phrasing** | Replace *"canonical at `homegrown/protocols/`"* with project-agnostic phrasing: *"the canonical location of `/MVL+`'s skill spec in your project. In this project, that's `homegrown/protocols/` or `~/.claude/skills/MVL+/SKILL.md`. In another project, the canonical location follows the project's own discipline-spec convention."* |

### Layer C — The recursive demonstration

| ID | Aspect | Probe result |
|---|---|---|
| **C1** | Is the recursive demonstration a NEW failure mode? | NO. It is a concrete INSTANCE of `lesson-introduces-its-own-trap` (from `2026-05-13_12-45`) firing at meta-meta-level. The lesson (Phantom Canon) became a vector for the failure it names (treating accumulated artifacts as canonical context). No new failure-mode name needed; the existing pattern covers it. |
| **C2** | What's the meta-meta-level mechanism? | The strengthened diagnostic from `2026-05-13_12-45` is supposed to prevent lesson-introduces-its-own-trap. The diagnostic was applied to the in-conversation claim and to the prior finding's CORRECTS. But the diagnostic was NOT applied to the L1 spec's TRIGGER CRITERIA. The trigger was written using this-project examples without asking "is this trigger criteria itself project-agnostic?" |
| **C3** | Does this strengthen or weaken the previous finding? | Strengthens it — the recursive demonstration is concrete evidence that Phantom Canon is real (it happens even when you're explicitly trying to prevent it). The fix is to apply the lesson's check at one level higher: not just to artifacts referenced in the inquiry, but to the trigger criteria themselves. |
| **C4** | What does this mean for the corrected L1? | Add a meta-check to the corrected L1: when defining the trigger criteria for the pre-step, ALSO check whether the trigger criteria are project-agnostic. This is recursive but bounded (one level of meta-check). |

### Layer D — Preserve vs Correct

**Preserved from previous LOOP_DIAGNOSE finding (2026-05-14_12-45):**

| ID | Preserved element |
|---|---|
| D1 | Diagnostic verdict ACTIONABLE |
| D2 | H1 HIGH framing-time implicit canonicalization hypothesis |
| D3 | H2 MEDIUM upstream-commitment cascade hypothesis |
| D4 | H3 MEDIUM assistant in-conversation pre-bias hypothesis |
| D5 | Phantom Canon failure-mode name + "half-tried artifacts" lay alias + Implicit Canon Assumption descriptive alternative |
| D6 | Pattern-family positioning (third in meta-conditions-on-verification family with calibration) |
| D7 | Self-reference acknowledgment structure (applied-lesson via diff-check on /explore canonical vs installed) |
| D8 | Honest cost-naming pattern (extended to 5 MVL+ in succession) |

**Corrected from previous LOOP_DIAGNOSE finding:**

| ID | Corrected element |
|---|---|
| E1 | L1's trigger criteria — generalized to project-agnostic formulation |
| E2 | L1's category illustrative examples — diversified across project/context contexts |
| E3 | L1's "which file is affected" phrasing — project-agnostic |
| E4 | A new meta-check added to L1: when defining the trigger criteria for the pre-step, also ask "is this trigger criteria project-agnostic?" |
| E5 | The self-reference acknowledgment in the new finding includes a SECOND-LEVEL acknowledgment: "the previous finding's L1 itself exhibited Phantom Canon; the corrected L1 includes a meta-check to prevent this recursion" |

### Layer E — Risks

| ID | Risk | Mitigation |
|---|---|---|
| **R1** | **Over-generalization** — the generic trigger fires on every artifact reference. | The "canon-status could be ambiguous" threshold (B2) limits firing to non-obvious cases. |
| **R2** | **The generic formulation itself contains hidden assumptions.** Could be over-specified in a different way. | Calibration: the new finding is honest about being one iteration; future cases may reveal further generalizations. |
| **R3** | **Pattern fatigue (5 MVL+ in succession on related topics).** | Honest cost-naming + emphasis on the recursive demonstration's concrete value. |
| **R4** | **The user's correction implies more generalizations might apply elsewhere.** E.g., is the "framing-clarification pre-step" from `2026-05-14_00-26` also over-specified? | Out of scope for this inquiry; flag for future inquiry. |

### Layer F — Project-frame-level Phantom Canon

| ID | Probe | Result |
|---|---|---|
| **F1** | Is "homegrown/ as the project boundary" itself a Phantom Canon assumption? | Partially. The user's memory notes "project protocols live at `homegrown/protocols/`, not `~/.claude/skills/protocols/`." This treats homegrown/ as the project boundary. For THIS project, that's correct (it's how the project is structured). For other projects, the boundary would be different. The previous finding's L1 implicitly carried "homegrown/ = project boundary" assumption. Generic L1 should ask the user to identify the project boundary, not assume it. |
| **F2** | Should the corrected L1 include a project-boundary check? | YES — soft. The corrected L1's prompt can include "for THIS project, the project boundary is [identify]" — making the boundary explicit rather than implicit. |

---

## Signal Log

### Probed signals (D3 depth)

| Signal | Probe result |
|---|---|
| **Is the recursive demonstration a new failure mode or concrete instance of existing pattern?** | Concrete instance of lesson-introduces-its-own-trap. No new failure-mode name needed. The recursive demonstration STRENGTHENS Phantom Canon's evidence (it can happen even in diagnostics about it). |
| **Generic trigger criterion: what's the operational threshold?** | "Canon-status could be ambiguous" (B2). Not every artifact reference; only those where status-for-this-question is non-obvious. |
| **Should the corrected L1 include a meta-check on its own trigger criteria?** | YES — soft. When the runner defines or interprets the trigger criteria for a new inquiry, ask "are these criteria project-agnostic?" This is one level of recursion, bounded. Without this meta-check, future findings risk repeating the same over-specification. |
| **Is "homegrown/ as project boundary" itself a Phantom Canon assumption in the previous finding?** | YES, mildly. The corrected L1 should make the project-boundary explicit (let the user declare it for their project) rather than assume it. |
| **Pattern-fatigue check: is this 5th MVL+ valuable enough?** | Probed via cost-vs-value: the recursive demonstration produces a concrete strengthening of Phantom Canon's evidence + a generalization that makes L1 actually deployable across projects. Value > cost for this iteration. But escalation watch: if a 6th MVL+ on the same topic chain emerges, the project should question whether the loop is the right tool. |

### Deferred signals

| Signal | Why deferred |
|---|---|
| Whether `2026-05-14_00-26`'s framing-clarification pre-step Research Frontier item also needs project-agnostic generalization. | Out of scope; could be a follow-up inquiry. Flag in this finding's Open Questions. |
| Whether the meta-conditions-on-verification family needs explicit recursion-depth tracking (lesson; meta-lesson; meta-meta-lesson). | Out of scope; calibration concern. |
| Full retrospective audit of the user's "many before mvl inquiries" mention — to identify other Phantom Canon cases including possibly cross-project ones. | Out of scope; deferred per previous LOOP_DIAGNOSE finding. |

### Jump-scan

| Direction | Surface |
|---|---|
| What if the project's discipline-spec architecture itself is the source of over-specification — i.e., the disciplines have implicit project-context assumptions built in? | Possible but out of scope. A separate inquiry could probe whether `/MVL+`'s structure assumes a project-context.|
| Could there be a domain (e.g., a non-software project) where the canon-status check looks different? | Yes — e.g., scientific research with cited papers; legal practice with case precedent; engineering with standards bodies. Each has its own canon-status semantics. The generic formulation must accommodate. The B3 examples now span these. |
| Does the user's pushback itself contain a hidden assumption? | The user said "ghost canon could happen with any other artifact from any other project too." This frames Phantom Canon as fundamentally cross-project. That framing seems honest; no hidden assumption surfaces. |

Jump-scan result: no new top-level regions. Frontier stable.

---

## Confidence Map

| Region | Confidence |
|---|---|
| A1-A4 — over-specification locations | confirmed (linguistic analysis of previous finding) |
| B1 — generic trigger criterion | confirmed (logical generalization + cross-project applicability) |
| B2 — ambiguity threshold | scanned with high inference (operational refinement; needs calibration) |
| B3 — generic category examples | scanned (one homegrown + one cross-project + one external should suffice) |
| B4 — project-agnostic phrasing | confirmed |
| C1-C4 — recursive demonstration as instance not new mode | confirmed |
| D1-D8 — preserved from previous finding | confirmed |
| E1-E5 — corrections | confirmed |
| F1-F2 — project-frame-level Phantom Canon (project-boundary) | scanned (soft inclusion in corrected L1) |
| R1-R4 — risks | scanned with mitigations |

**Confirmed-absent:**
- A new failure-mode name beyond Phantom Canon — confirmed absent (the recursive case fits lesson-introduces-its-own-trap).
- A reason to discard the previous finding's verdict entirely — confirmed absent (D1-D8 preserved).

---

## Frontier State

**STABLE.** Three convergence criteria met:

1. Frontier stability — three cycles + jump-scan; no new top-level regions.
2. Declining discovery rate — jump-scan surfaced cross-domain examples (scientific, legal, engineering) which fit B3; no new operations.
3. Bounded gaps — remaining deferred items (other-pre-step over-specifications, meta-condition family depth) are interpolable; deferred to future inquiries.

---

## Gaps and Recommendations

### Gaps

- The corrected L1's deployment across different project types (software, research, legal, engineering) is untested. Calibration over time.
- Whether `2026-05-14_00-26`'s framing-clarification pre-step also needs generalization — deferred.

### Recommendations for downstream disciplines

- **Sensemaking** adjudicates: (a) whether the recursive demonstration deserves a separate top-level piece OR fits within the self-reference acknowledgment; (b) whether the corrected L1 should include the project-boundary check; (c) the exact relationship label (CORRECTS for the L1 over-specification; PRESERVES the rest).
- **Decomposition** partitions: the corrected LOOP_DIAGNOSE finding into pieces matching Step 4 format + the corrections to L1 + the recursive-demonstration acknowledgment.
- **Innovation** generates: concrete generic L1 spec-edit text + generic category examples + the meta-check formulation.
- **Critique** evaluates: whether the genericization is sufficient (or over-generalizes elsewhere); whether the meta-check prevents further recursion.

---

## Telemetry

- Mode: artifact + small possibility
- Entry: signal-first
- Cycles: 3 + jump-scan
- Candidates: ~25 across regions A-F
- Probed at D3: 5 signals
- Frontier: stable
- Discovery rate: declining
- Convergence: 3/3 criteria met
- Failure modes checked: all 11; none firing

**Self-assessment: PROCEED.**

The exploration confirms the generalization target (L1's trigger criteria + category examples + project-boundary), preserves most of the previous LOOP_DIAGNOSE diagnostic, names the recursive demonstration as a concrete instance of lesson-introduces-its-own-trap (no new failure-mode name), and applies the canon-status check to this inquiry's own referenced artifacts. Initial verdict-direction: CORRECTS the previous finding's L1; preserves the rest; adds meta-check to prevent recursion.
