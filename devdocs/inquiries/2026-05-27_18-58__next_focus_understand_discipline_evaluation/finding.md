---
status: active
model: claude-opus-4-7[1m]
effort: max
---
# Finding: Next focus after routeman amendment edits — the user's "understand" candidate IS the existing /comprehend discipline (revival decision with multi-tier ranking + two paths + seven negative conditions); Shape H (/comprehend → /routeman) joins the composition inventory upon revival

## Question

(from `_branch.md`)

**Stated question:** What is the most valuable next focus for the project after the routeman amendment edits are implemented, and does the user's proposed "understand" discipline candidate make sense as that next focus — specifically, does it describe a structurally distinct cognitive operation, and do its proposed placements (in `/MVLw` before sensemaking AND before `/routeman`) hold up against the existing discipline taxonomy + composition patterns — OR is some other candidate the better next focus?

Six observation targets, preserved as distinct adjudications per LOOP_DIAGNOSE MC2:

1. **Strategic next-focus** — what candidates compete for the next-focus slot?
2. **"Understand" candidate cognitive-distinctness evaluation** — does it describe a structurally distinct operation?
3. **Placement in `/MVLw` before sensemaking** — does it hold structurally?
4. **Placement before `/routeman`** — does it hold structurally?
5. **Validity check** — under what conditions WOULD the candidate not make sense?
6. **Alternatives ranking** — what other candidates compete?

Goal: a strategic recommendation with candidate evaluation + ranking + actionable next step for the user.

## Finding Summary

- **THE STRUCTURAL FINDING:** the user's proposed "understand" candidate already exists as the **/comprehend discipline**, currently at `cognitive_harness/non-active/comprehend/`. The discipline has a 55-line SKILL.md and a 435-line `references/comprehend.md`; it survived its 2026-05-23 design critique with refinements applied; the spec is the post-refinement design. The user may not know /comprehend exists. The candidate-evaluation reframes from "design a new understand discipline" to "should we revive /comprehend, and if so when." User-autonomy is preserved: the user owns the choice between Option 1 (treat as revival) and Option 2 (design something distinct from /comprehend).

- **/comprehend's cognitive-distinctness is already adjudicated in its own NOT-list.** The spec explicitly distinguishes /comprehend from /sensemaking ("sensemaking resolves ambiguity — choosing among competing interpretations; comprehension builds models of things that aren't ambiguous, just opaque") and from /exploration ("exploration maps what exists; comprehension builds models of how the mapped things work"). The user's cognitive-distinctness concern is structurally answered.

- **The multi-tier next-focus recommendation** (10 candidates ranked by 5 criteria — blocking status, precondition-closing, evidence-supplying, cost-to-execute, strategic-importance):
  - **Tier 0 (precondition):** Candidate A — apply the 16-45 consolidated amendment delta to the live routeman spec. Strict precondition for the user's "after routeman edits" framing; mostly mechanical work.
  - **Tier 1 (immediate operational):** Candidate B — try Shape A (`/MVLw → /routeman`) on a real high-stakes inquiry. Closes the zero-empirical-precedent gap from the 18-09 finding.
  - **Tier 2 (strategic upstream):** Candidate D — non-active archival audit per the 14-39 finding's flagged Refinement Trigger. Documents WHY /comprehend (and /reflect and others) were moved to non-active; supplies the revival-decision evidence.
  - **Tier 3 (conditional revival):** Candidate C — revive /comprehend. Two paths: **Path 1 (audit-first; default)** when no near-term artifact-modeling task exists; **Path 2 (operational-as-audit)** when a concrete artifact-modeling task arises. Also Candidate E (revive /reflect) at lower priority.
  - **Tier 4 (independent COULDs):** F (institutional memory `for_routeman.md`), G (LAYER-2 audit protocol).
  - **Out of scope:** H (bounded follow-ups: nav-session, meta-loop, multi-head concurrency), I (cross-discipline pattern formalizations).
  - **Honest baseline:** J — defer the decision; ship A; observe ≥1 real inquiry first.

- **Shape H — a new composition shape (`/comprehend → /routeman`).** Workflow-composition layer; uses existing folder-path contracts; no spec change required. Use case: artifact-modeling-before-enumeration (e.g., understand-this-codebase-before-deciding-how-to-modify-it). Structurally distinct from the 18-09 finding's Shape A (`/MVLw → /routeman`), which is for candidate-adjudication-before-enumeration. Shape H ACTIVATES upon /comprehend revival.

- **Before-sensemaking placement is DEFERRED, not REJECTED.** Two structural problems: (1) modifying `/MVLw`'s STRICT-SEQUENCE rule is high-cost spec work; (2) the user's described mechanism ("branch md file will have different phrasings with different attentions") may not even be /comprehend — it could be a lighter-weight question-framing pre-step (Interpretation B). If Interpretation B emerges as a real need, a fresh inquiry on the lightweight mechanism can revisit; this current recommendation does not endorse adding /comprehend before /sensemaking.

- **Seven negative conditions** under which /comprehend revival would NOT make sense (each with a detection mechanism):
  - (a) Audit finds structural deprecation reason still applies (e.g., empirical overlap with /sensemaking).
  - (b) No near-term use case; revival is speculative.
  - (c) Operational testing reveals `/MVLw` via Shape A covers the artifact-modeling need.
  - (d) User's actual proposal is the lighter question-framing pre-step (Interpretation B).
  - (e) **Spec-staleness condition.** /comprehend's spec is from 2026-05-23 or earlier; the project has evolved since (00-51 + 16-45 + 18-09 patterns post-date it). A spec-freshness audit may be a precondition for operational use.
  - (f) **Maintenance-burden condition.** Each active discipline carries ongoing maintenance cost; revival reconsidered if user bandwidth doesn't accommodate.
  - (g) **Wrong-revival risk.** If user later confirms Interpretation B was the actual need AFTER /comprehend has been revived, revival was wrong-direction.

- **Design-grounded honesty.** The recommendation is design-grounded (against the existing /comprehend spec + the inherited priors); operational validation pending. Inherited posture from 14-03 + 16-45 + 18-09's design-vs-runtime distinction. Currently at N=3 instances of this confidence-framing pattern, approaching the N=5 gate for project-canonical formalization.

- **The recommended order (the practical workflow):** apply A → try B on a real inquiry → run D (audit) → revive C via Path 1 or Path 2 based on user situation → independent COULDs (F, G) → DEFERRED items (E, H, I); J remains a legitimate baseline.

## Finding

### Where the user is coming from

The user has just completed a sequence of inquiries about the /routeman discipline — design (14-39), staged-mapping + meta-reasoning (18-58), persistence-and-invocation-modes (24-00), output-simplification (00-51), per-route schema refinement (13-23), end-goal compatibility (14-03), directional read policy (14-49), the consolidated amendment plan (16-45), and the /routeman + /MVLw integration pattern (18-09). The 16-45 finding produced a 30-row amendment-delta to apply to the live routeman spec; the 18-09 finding established the composition pattern between /routeman and /MVLw.

The user now asks: once those routeman edits are finished and implemented, what should the project focus on next? They propose ONE candidate — an "understand" skill — with two placement ideas (in /MVLw before sensemaking; before /routeman). They invite refutation ("or maybe it doesn't make sense?") and explicitly ask for depth ("lets discuss this deeply").

This finding takes the question as strategic-planning + candidate-evaluation: strategically rank candidate next-focus items, and adjudicate the specific candidate the user proposed.

### The structural finding — /comprehend already exists

The user's described candidate maps directly to an existing project discipline: **/comprehend**. The discipline lives at `cognitive_harness/non-active/comprehend/` with a 55-line `SKILL.md` and a 435-line `references/comprehend.md`. Its verb-meaning per the spec:

> "Structural Comprehension is the process of transforming an observable-but-opaque artifact into an internal working model with predictive power — through progressive construction, causal tracing, perturbation testing, and adversarial self-verification — producing understanding that is testable, transferable, and depth-aware."

The structural match between what the user described and what /comprehend does is high:

- **The user's stated purpose** ("preventing future misunderstandings such as deriving wrong assumption from codebase") maps to /comprehend's adversarial-self-challenge mechanism — "deliberately seeking the case that would BREAK the current model... the component that prevents false comprehension — the most dangerous cognitive state."
- **The user's stated benefit** ("enhances the overall understanding of the task and also a concept") maps to /comprehend's two primary aspects — Mechanistic ("how does this work?") and Intent ("why was this built this way?") — which are precisely task-understanding and concept-understanding.
- **The user's "different phrasings with different attentions"** maps partially to /comprehend's aspect-multiplicity (invoking with Mechanistic vs Intent vs both produces structurally distinct framings).

**/comprehend's distinctness from /sensemaking and /exploration is already adjudicated in its own NOT-list:**

> "Comprehension is NOT Sensemaking. Sensemaking resolves ambiguity — choosing among competing interpretations. Comprehension builds models of things that aren't ambiguous, just opaque. A complex algorithm isn't ambiguous — it does exactly one thing. You just can't see what."

> "Comprehension is NOT Exploration. Exploration maps what exists — an inventory of territory. Comprehension builds models of how the mapped things work."

The cognitive-distinctness test the user invited is structurally answered by /comprehend's own design.

**/comprehend survived its 2026-05-23 design critique** (archived at `devdocs/archive/critique/comprehend_discipline_critique.md`) with refinements applied: aspect model became 2-primary (Mechanistic + Intent) + 2-extended (Contextual + Temporal); depth hierarchy renamed (Surface → Descriptive; Mechanistic → Causal to avoid aspect-name collision). The current non-active spec reflects these refinements.

**/comprehend remains INSTALLED at `~/.claude/skills/comprehend/`.** The `~/.claude/skills/` mirror is not auto-pruned when `cognitive_harness/` archives a discipline; you could invoke `/comprehend` today.

**User-autonomy preservation.** The structural match doesn't impose a verdict. The user owns the decision:

- **Option 1 — treat as /comprehend revival.** Recognize the existing design; revive it; benefit from already-survived critique. The recommendation across the rest of this finding assumes Option 1 on structural grounds + cost considerations.
- **Option 2 — design a new "understand" discipline from scratch.** Treat /comprehend's existence as historical context but not a constraint. Higher cost; risk of duplicating already-validated design work. Possible if the user has a vision distinct from /comprehend's.

The user can override at any point.

### The cognitive-operation orthogonality and the architectural slot

`/comprehend` is a **Core discipline** per the discipline taxonomy at `docs/canon/thinking_disciplines/anatomy/discipline_taxonomy.md`. It operates at artifact-granularity — building a model of an observable-but-opaque artifact. This is structurally orthogonal to the other Core disciplines:

- `/surfacing` draws items from a bounded territory.
- `/sensemaking` resolves ambiguity in input.
- `/innovate` generates novel candidates.
- `/td-critique` adversarially tests candidates.
- `/comprehend` builds predictive models of artifacts.

Each addresses a different cognitive task. /comprehend's slot in this taxonomy is distinct; it doesn't compete with /sensemaking (different operation — opacity vs ambiguity) or /surfacing (different output — model vs item-inventory).

### The multi-tier next-focus recommendation

Five criteria distinguish the candidates: (1) blocking status; (2) precondition-closing; (3) evidence-supplying; (4) cost-to-execute; (5) strategic-importance. Per-candidate scoring + tier assignment:

| Candidate | Description | Tier |
|---|---|---|
| **A** | Apply 16-45 consolidated amendment delta to live routeman spec | **Tier 0 — Precondition** |
| **B** | Try Shape A on a real high-stakes inquiry (operational validation of `/MVLw → /routeman`) | **Tier 1 — Immediate operational** |
| **D** | Non-active archival audit per 14-39 Refinement Trigger | **Tier 2 — Strategic upstream** |
| **C** | Revive /comprehend (the user's "understand" candidate) | **Tier 3 — Conditional revival** |
| **E** | Revive /reflect (backward-Boundary pair) | **Tier 3 — Conditional revival (lower priority)** |
| **F** | Author institutional memory `for_routeman.md` | **Tier 4 — Independent COULD** |
| **G** | Author LAYER-2 audit protocol | **Tier 4 — Independent COULD (gated)** |
| **H** | Bounded follow-ups (nav-session, meta-loop, multi-head concurrency) | **Out of scope** |
| **I** | Cross-discipline pattern formalizations | **Out of scope** |
| **J** | Defer the decision; ship A; observe ≥1 real inquiry before deciding | **Honest baseline** |

The recommended order (practical workflow):

1. **First — Candidate A.** Apply the 16-45 delta to live routeman spec. This is a strict precondition: the user's "after routeman edits" framing presupposes the delta has been applied. Verification step: re-read the 16-45 finding's MUST section; if the 30-row delta has not been applied to `cognitive_harness/routeman/references/routeman.md`, Candidate A fires.

2. **Second — Candidate B.** Try Shape A (`/MVLw → /routeman`) on a real high-stakes inquiry to close the zero-empirical-precedent gap. **"Real high-stakes inquiry" criterion** (per Critique REFINE direction #1): an inquiry where the deliverable shapes durable artifacts — spec amendments, design decisions, multi-step implementation plans — rather than ephemeral tasks. The 16-45 inquiry itself (post-delta-application) is a candidate. The operational signal closes the empirical-precedent gap from 18-09.

3. **Third — Candidate D.** Conduct the non-active archival audit. **Audit scope** (per Critique REFINE direction #1): a separate `/MVLw` inquiry whose deliverable enumerates per-non-active-item: (i) deprecation reason; (ii) does the reason still apply structurally?; (iii) revival recommendation (revive / revive-with-refinements / keep-deprecated); (iv) structural evidence. Priority order: /comprehend first (user pull), /reflect second (Boundary-discipline pair completion), other non-active items as discoverable.

4. **Fourth — Candidate C.** Revive /comprehend, via Path 1 OR Path 2 (see below).

5. **Independent (anytime) — Candidates F + G.** Institutional memory authoring is independent of the strategic ranking. LAYER-2 audit protocol is gated on ≥5 post-application invocations.

6. **Conditional — Candidate E.** Revive /reflect — downstream of D's findings; lower priority than C because not user-named.

7. **Out of scope — H + I.** Bounded follow-ups + pattern formalizations remain DEFERRED per the priors' bounded-follow-up flags.

8. **Honest baseline — Candidate J.** If the user wants to wait, ship A and observe. Valid stance; not a failure.

### Shape H — a new composition shape (`/comprehend → /routeman`)

Sequential composition: /comprehend runs on an observable-but-opaque artifact (codebase, system, document, design) → produces a Comprehension model with predictive power → user invokes /routeman pointed at the inquiry folder containing the model → /routeman enumerates next moves on the modeled artifact.

Why Shape H is a new composition shape complementary to the 18-09 finding's Shape A: the 18-09 finding established three primary composition shapes (A: `/MVLw → /routeman`; B: `/routeman → /MVLw`; C: sandwich). Each uses /MVLw as the cognitive-cycle skill. Shape H uses /comprehend as the upstream skill instead. The cognitive operations differ:

- **Shape A** asks "what should we understand and decide about X?" Output: a finding with verdicts. Use case: candidate-adjudication-before-enumeration.
- **Shape H** asks "how does artifact X work?" Output: a Comprehension model with predictive power. Use case: artifact-modeling-before-enumeration.

When the inquiry's task is "understand this codebase before enumerating moves on it," Shape A's `/MVLw` pipeline is OVER-ELABORATE — `/MVLw` is designed for adjudicating among candidates, not for modeling an artifact. Shape H supplies what the task actually needs.

**Folder-path contract.** /comprehend (per its SKILL.md Step 1: "input can be raw text, a folder path with md files, code files, or image path") and /routeman both accept folder-path input. The inquiry folder serves as shared state — same mechanism as 18-09 Shape A.

**Cost.** One /comprehend invocation + one /routeman invocation. Lower than Shape A when the task is artifact-modeling.

**Concrete worked example.** Suppose the user encounters a complex algorithm in the codebase they need to understand before deciding how to modify. They:

1. Invoke `/comprehend` pointed at the algorithm's file (or an inquiry folder containing notes about it). /comprehend runs through CV1 (Structural mapping) → CV2 (Behavioral tracing) → CV3 (Causal discovery) → CV4 (Hardened via perturbation testing) → optionally CV5 (Generative, deriving from principles). At each depth level, /comprehend tests its model with explicit predictions; failed predictions trigger model revision; the discipline self-signals depth reached.

2. /comprehend's output: a Comprehension document with the model + prediction scorecard + confidence map + remaining unknowns.

3. User invokes `/routeman` pointed at the inquiry folder. /routeman reads the Comprehension document as state input.

4. /routeman enumerates routes such as: "Refactor X to address LOW-confidence area Y" (REFINE); "Investigate the unknown Z before changing anything else" (INVESTIGATE-FRONTIER); "The Generative-depth principle implies architectural change W" (DEVELOP); etc.

**Shape H ACTIVATES on /comprehend revival.** As of this finding, /comprehend is at non-active; Shape H is a designed-but-pending pattern. When /comprehend revives (per Candidate C), Shape H joins the 18-09 composition inventory operationally.

### Before-sensemaking placement DEFERRED

The user's "in MVL loop, before sensemaking" placement proposal is NOT recommended at this time, for two structural reasons:

**Problem 1 — runner-spec modification cost.** `/MVLw`'s SKILL.md line 341 explicitly states: "Always Su → S → D → I → C. Every question gets the full loop. No shortcuts. No variable pipelines." Adding /comprehend (or any other discipline) before /sensemaking would require either modifying `/MVLw` to permit variable pipelines, or creating a new runner variant. Both are high-cost spec changes. The project's principle (inherited from 18-09's FP5): prefer workflow-layer composition over spec modification when both achieve the same goal.

**Problem 2 — possible Interpretation B (lighter mechanism, not /comprehend).** The user's described mechanism ("branch md file will have different phrasings with different attentions") is at the branch.md layer. Two structurally distinct interpretations:

- **Interpretation A — full /comprehend invocation before /sensemaking.** The user wants /comprehend's complete 5-CV process to run before `/MVLw`'s /sensemaking. Heavy version + requires runner-spec modification.
- **Interpretation B — lightweight question-framing pre-step.** The user wants a NEW, smaller mechanism at `/MVLw`'s branch.md creation step: "produce multiple phrasings of the question with different attentional emphases." NOT /comprehend; a separate lightweight mechanism that could sit at the runner level.

**Verdict:** DEFERRED. The honest position: at this time the recommendation does not endorse adding /comprehend (or a lighter pre-step) before /sensemaking. If Interpretation B emerges as a real need post-application (per Refinement Trigger in Open Questions), a fresh inquiry can revisit. The user's underlying concern (preventing wrong-assumption-from-codebase) IS rational; the mechanism for addressing it is Shape H (/comprehend → /routeman) for artifact-modeling tasks.

### Two-path revival decision

When the user is ready to revive /comprehend (per Candidate C), two paths exist:

**Path 1 — Audit-first.** Run Candidate D (the non-active archival audit) BEFORE revival. The audit produces structural evidence for WHY /comprehend was originally moved to non-active. Audit findings inform whether revival should proceed. **Default** when the user has no near-term concrete artifact-modeling task driving the revival.

**Path 2 — Operational-as-audit.** If the user has a CONCRETE upcoming artifact-modeling task (e.g., "I need to understand codebase X before I can decide how to refactor it"), invoke /comprehend operationally on that task BEFORE running the audit. The operational experience itself surfaces:
- Whether /comprehend's adversarial-self-challenge mechanism actually catches wrong-assumption-from-codebase failures (the user's stated pain point) in practice.
- Whether the discipline's CV1-CV5 depth hierarchy is operationally usable.
- Whether the model output integrates cleanly with downstream /routeman invocations (Shape H).
- Whether the deprecation reason still applies (empirically) or has been overcome by the project's evolution since the deprecation.

**Determination criterion.** The user chooses Path 1 vs Path 2 based on:

> "Do I have a concrete, near-term artifact-modeling task that I want to use /comprehend for?"

If **YES** → Path 2 (operational-as-audit). The task is the audit's empirical anchor.

If **NO** → Path 1 (audit-first). Don't revive speculatively.

**For borderline cases** (per Critique REFINE direction #3): if the task could plausibly be artifact-modeling OR candidate-adjudication, prefer Path 2 + monitor for whether /comprehend produces value beyond what `/MVLw` would have. If Path 2 produces ambiguous signal, fall back to Path 1.

**Empirical-evidence-gated revival principle.** Both paths embody the project's pattern (per 00-51's empirical-evidence-gated γ-field revival + 16-45's design-grounded honest framing + 18-09's design-vs-runtime distinction). Revival decisions follow evidence, not speculation.

### Spec-staleness warning

**Important — spec freshness check before operational use.** /comprehend's spec at `cognitive_harness/non-active/comprehend/` is from 2026-05-23 or earlier. The project has evolved since:

- The 13-23 finding established the "structural-convergence-without-empirical-test" project pattern (post-dates /comprehend's spec).
- The 16-45 finding established the consolidated-amendment-plan pattern (post-dates).
- The 18-09 finding established the workflow-composition + Boundary-discipline architectural slot framing (post-dates).
- The user-memory rules `Disciplines self-contained` + `Discipline design-history location` may not be reflected in /comprehend's spec.

Before reviving operationally — whether via Path 1 or Path 2 — perform a spec-freshness check: does /comprehend's spec align with the project's current patterns? If misaligned, a spec-freshness audit becomes a precondition for operational use. (This precondition is itself a small inquiry — read the spec; check against current canonical patterns; update or flag for update.)

### Validity check — seven conditions under which revival would NOT make sense

The user explicitly invited refutation ("or maybe it doesn't make sense?"). Seven specific conditions, each with detection mechanism:

**(a) Audit surfaces structural deprecation reason that still applies.** Candidate D's audit may discover /comprehend was moved to non-active for a STRUCTURAL reason that REMAINS VALID — e.g., empirically real overlap with /sensemaking; operational complexity not worth the value; successor disciplines absorbed the role. Detection: audit findings include "structural deprecation reasoning" per item; if reasoning still holds when re-tested, condition fires.

**(b) No near-term use case exists; revival is speculative.** The pattern that may have led to the original deprecation was creation-without-use; reviving without a pulling task repeats the pattern. Detection: the user genuinely cannot name an upcoming task that would benefit from /comprehend. Soft-fire — revival can wait, not killed.

**(c) `/MVLw` via Shape A demonstrably covers the artifact-modeling need.** Operational use of Shape A on artifact-modeling tasks shows that `/MVLw`'s 5-discipline pipeline produces adequate artifact understanding without needing /comprehend. Detection: Candidate B's operational results include cases where the inquiry's task was effectively artifact-modeling; if `/MVLw` output adequately covered the modeling need, condition fires.

**(d) User's actual proposal is the lighter question-framing pre-step (Interpretation B).** Detection: the user reads this finding and clarifies "I meant the lighter mechanism, not /comprehend's full process."

**(e) Spec-staleness condition.** /comprehend's spec is from 2026-05-23 or earlier; the project has evolved. If a spec-freshness check reveals misalignment with current patterns and the user lacks bandwidth for spec updates, revival is delayed. Detection: spec-freshness check identifies misalignments AND user doesn't want to update.

**(f) Maintenance-burden condition.** Each active discipline carries ongoing maintenance cost (spec amendments when context shifts; integration with other disciplines). Revival reconsidered if the user's bandwidth doesn't accommodate /comprehend's maintenance. Detection: user-reported bandwidth constraint.

**(g) Wrong-revival risk.** If the user later confirms Interpretation B was the actual need AFTER /comprehend has been revived, revival was wrong-direction. Mitigation: confirm interpretation BEFORE acting on Candidate C. Detection: post-revival user-experience surfaces that Interpretation B was the underlying need.

**Honest engagement.** Each condition is empirically-testable. The recommendation is condition-dependent: revival is the DEFAULT recommendation IF none of (a)-(g) fires; the user should monitor as they execute Candidates A → B → D.

### Design-grounded honesty

This finding's recommendation is **design-grounded**, not runtime-grounded. The empirical-precedent gap: /comprehend has never been invoked on a real inquiry; /routeman has never been invoked on a real inquiry (per the 18-09 finding's same posture). Shape H is a designed-but-pending pattern.

The recommendation's claims are calibrated:

- "/comprehend's identity maps to the user's candidate" — structurally well-supported by the spec.
- "Shape H is structurally distinct from Shape A" — structurally well-supported by cognitive-operation orthogonality.
- "Revival makes sense conditional on the 7 negative conditions not firing" — appropriately hedged.

Operational validation awaits the first real uses. The recommendation may need adjustment when operational issues surface. Inherited posture from 14-03 + 16-45 + 18-09. Currently at N=3 instances of this design-vs-runtime confidence-framing pattern; approaching the N=5 gate for project-canonical formalization (see Open Questions).

## Next Actions

### MUST

None required. The finding is a strategic recommendation; the user applies the workflow patterns at their discretion. Without applying any specific candidate, the finding's value is the framework for thinking about the post-routeman-edits trajectory + the structural finding that /comprehend exists + the multi-tier ranking.

### COULD

- **Candidate A — Apply the 16-45 consolidated amendment delta** to `cognitive_harness/routeman/references/routeman.md`.
  - **Who:** the user (or a follow-up materialization task).
  - **Gate:** condition-bound — when the user wants the routeman spec to reflect the design decisions made through 2026-05-27.
  - **Why:** strict precondition for the user's "after routeman edits" framing. Without A, subsequent candidates operate against a spec that doesn't reflect the priors' commitments.
  - **Verification:** read the 16-45 finding's MUST section; if the 30-row delta has not been applied, A fires.

- **Candidate B — Try Shape A on a real high-stakes inquiry.**
  - **Who:** the user.
  - **Gate:** condition-bound — after Candidate A; when a high-stakes inquiry arises.
  - **Why:** closes the zero-empirical-precedent gap from the 18-09 finding; provides first operational signal for the integration pattern + this finding's monitoring items.
  - **"High-stakes" criterion:** an inquiry whose deliverable shapes durable artifacts (spec amendments, design decisions, multi-step implementation plans) rather than ephemeral tasks. The 16-45 inquiry (post-delta-application) is a candidate.

- **Candidate D — Conduct the non-active archival audit** per the 14-39 finding's flagged Refinement Trigger.
  - **Who:** any inquiry runner.
  - **Gate:** condition-bound — when the user wants confident revival decisions for non-active items OR is ready to make those decisions strategically.
  - **Why:** documents WHY /comprehend (and /reflect and other non-active items) were moved to non-active; supplies the revival-decision evidence. Currently the only finding-level documentation of deprecation reasoning is absent. The audit closes this knowledge gap.
  - **Audit scope:** a separate `/MVLw` inquiry whose deliverable enumerates per-non-active-item: deprecation reason + does the reason still apply structurally? + revival recommendation + structural evidence. Priority order: /comprehend first (user pull), /reflect second (Boundary-discipline pair completion), other items (artifact_materialization, spec_governance, outcome_review, etc.) as discoverable.

- **Candidate C — Revive /comprehend** via Path 1 (audit-first; default) OR Path 2 (operational-as-audit; if concrete near-term task arises).
  - **Who:** the user.
  - **Gate:** condition-bound — Path 1 after D; Path 2 when a concrete near-term artifact-modeling task arises before D runs.
  - **Why:** delivers the artifact-modeling capability the user's "understand" candidate sought; activates Shape H composition (`/comprehend → /routeman`). Spec-freshness check is a precondition for operational use (warning above).
  - **Depends-on:** Candidate D (Path 1) OR concrete near-term task (Path 2). This COULD is GATED — do not act on naive revival without the path-determination.

- **Candidate F — Author the institutional memory file** `docs/discipline_design_history/for_routeman.md`.
  - **Who:** any inquiry runner.
  - **Gate:** condition-bound — user decision to author institutional memory.
  - **Why:** carry-over COULD from 16-45 + 18-09 findings; routeman is the project's only shipped Boundary discipline; institutional memory aids future Boundary disciplines. INDEPENDENT of strategic ranking; could fire at any time.

### DEFERRED

- **Candidate E — Revive /reflect** (the backward-Boundary discipline pair to /routeman).
  - **Gate:** condition-bound — downstream of Candidate D's audit findings; user decision; lower priority than Candidate C because not user-named.
  - **Why (if revived):** completes the Boundary-discipline pair; enables the composition pattern `/MVLw → /reflect + /routeman` (backward + forward Boundary disciplines around a cognitive cycle); becomes N=2 evidence point for the 18-09 finding's cross-discipline Boundary-discipline composition pattern (OQ9 in 18-09's Open Questions).

- **Candidate G — Author the LAYER-2 audit protocol** for routeman's filler-meta-reasoning failure mode.
  - **Gate:** observable — when ≥5 post-application routeman invocations accumulate (per 00-51 deferred Q4 + 16-45 COULD).
  - **Why (if revived):** enables the empirical-evidence-gated revival path for the 00-51 γ-field cut alternative.

- **Before-sensemaking placement** (P4's verdict — deferred unless Interpretation B emerges).
  - **Gate:** observable — Interpretation B emerges as a real need (per Refinement Trigger in Open Questions).
  - **Why (if revived):** if the user encounters cases where `/MVLw`'s existing branch.md framing missed an important interpretation, the lightweight question-framing mechanism becomes a real candidate.

- **Candidate H — Bounded follow-ups** (nav-session aggregation output design; meta-loop runtime design; multi-head concurrency on directional invocation).
  - **Gate:** observable — L2+ readiness per priors' bounded-follow-up flags.
  - **Why (if revived):** preserved per 14-03 + 14-49 finding's deferral patterns.

- **Candidate I — Cross-discipline pattern formalizations** (read-policy vocabulary; structural-convergence-without-empirical-test; consolidated-amendment-plan; design-vs-runtime confidence; Boundary-discipline composition).
  - **Gate:** observable — N≥2 or N≥3 instances per pattern. Currently most at N=1; the design-vs-runtime confidence pattern is at N=3 (14-03, 16-45, 18-09 + this finding makes it N=4) approaching the N=5 gate.
  - **Why (if revived):** project-canonical formalization once patterns ripen.

- **Candidate J — Defer the next-focus decision; ship A; observe ≥1 real inquiry before deciding.**
  - **Gate:** none — always available as honest baseline.
  - **Why:** honest no-op; legitimate stance if the user wants more operational evidence before committing.

## Reasoning

### Why /comprehend revival is the recommended interpretation over fresh design

The structural mapping is high: cognitive operation (artifact modeling) + signature mechanism (adversarial self-challenge for preventing wrong assumptions) + aspect-multiplicity (Mechanistic + Intent producing different framings) all align. Designing a new "understand" discipline that duplicates this work is structurally wasteful when the existing design survived critique. User-autonomy is preserved via Option 1/Option 2 alternatives; the recommendation is structural + cost-based, not imposed.

### Why audit-or-operational two paths instead of strict audit-first

Sensemaking Ambiguity 2 tested whether the non-active archival audit (Candidate D) is a STRICT precondition for revival. The verdict: BOTH paths work. Path 1 (audit-first) is the default when no near-term task exists. Path 2 (operational-as-audit) substitutes when a concrete task drives the revival — the operational experience itself surfaces the deprecation reason. The two-path framework respects user-situation variance.

### Why before-sensemaking placement is DEFERRED, not REJECTED

Sensemaking Ambiguity 5 preserved at MEDIUM confidence: the user's "different phrasings with different attentions" could be /comprehend's aspect-multiplicity OR a lighter-weight question-framing pre-step (Interpretation B). The "before sensemaking in /MVLw" placement requires runner-spec modification (high cost) AND may not even be /comprehend. Both reasons together push toward deferral, not rejection. If Interpretation B emerges as a real need, a fresh inquiry can address it.

### Why Shape H is distinct from Shape A

Sensemaking Ambiguity 4 tested cognitive-operation orthogonality: `/MVLw` is candidate-adjudication (output: verdicts); /comprehend is artifact-modeling (output: predictive model). Different cognitive operations produce different outputs; they compose differently with /routeman. Shape A handles candidate-adjudication-before-enumeration; Shape H handles artifact-modeling-before-enumeration. The architectural-slot reasoning (inherited from 18-09) supports both as Core-discipline-feeding-Boundary-discipline shapes.

### Why seven negative conditions instead of four

Critique's REFINE direction #2 identified three additional negative conditions beyond the four Sensemaking initially produced: spec-staleness (e), maintenance-burden (f), and wrong-revival risk (g). The seven together give the user a complete validity-check inventory — explicit conditions to monitor as they execute the recommended order.

### Strongest prosecution against the recommendation

The strongest counter-argument: "The user proposed something — engaging it deeply via revival of an existing-but-deprecated discipline imposes a project-historical frame the user didn't invoke. Their proposal might genuinely be new; reframing as /comprehend revival is paternalistic."

The defense: user-autonomy is structurally preserved via Option 1/Option 2 alternatives. The recommendation presents the structural match transparently and lets the user choose. The cost considerations (Option 2 = duplicate design work; Option 1 = revival of surveyed-and-critiqued design) are factual, not manipulative. The user can override at any point; the recommendation is informational + cost-based + respects user-judgment.

A second counter: "Reviving /comprehend without knowing why it was deprecated is structurally unsound." The defense: the recommendation REQUIRES either Path 1 (audit-first) or Path 2 (operational-as-audit). Revival without evidence is explicitly disallowed; the two-path framework ensures revival follows evidence.

### Critique's 5 REFINE caveats — how each was resolved

The Critique discipline tested the Innovation output across 15 dimensions with multi-axis prosecution. It found 5 REFINE-level caveats:

1. **REFINE direction #1 (D3 + D14):** Tighten Candidate B + Candidate D specifications. **Resolved** in this finding's Next Actions sections — Candidate B's "high-stakes" criterion + Candidate D's audit scope (priority order + deliverable shape) are explicit.

2. **REFINE direction #2 (D4):** Add 3 more negative conditions to P6 (becoming 7 total). **Resolved** in this finding's "Validity check — seven conditions" section — (e) spec-staleness, (f) maintenance-burden, (g) wrong-revival risk are added with detection mechanisms.

3. **REFINE direction #3 (D5):** Add operational support text. **Resolved** in: Candidate A verification step ("read 16-45 finding's MUST section; if delta not applied, A fires"); Two-path borderline cases ("if task could be artifact-modeling OR candidate-adjudication, prefer Path 2 + monitor"); re-adjudication path ("revisit recommendation under audit's new evidence; specifically P6 conditions").

4. **REFINE direction #4 (D13 — substantiated):** Explicit spec-staleness warning. **Resolved** in this finding's "Spec-staleness warning" section + condition (e) in the validity check.

5. **REFINE direction #5 (D9 — flag near-ripe pattern):** Flag design-vs-runtime confidence pattern at N=3 as near-ripe. **Resolved** in this finding's "Design-grounded honesty" section (notes N=3 approaching N=5 gate) + Open Questions OQ10.

## Open Questions

### Monitoring

- **OQ1 — Shape A operational validation.** When Candidate B's first run completes, observe whether the operational signal validates the 18-09 finding's design-grounded recommendations OR surfaces issues the design analysis didn't anticipate.

- **OQ2 — Did the inquiry whose folder /routeman is invoked on contain artifact-modeling content?** If the inquiry's question was artifact-modeling rather than candidate-adjudication, Shape A might have produced /comprehend-like output indirectly. This data informs condition (c) in the validity check.

- **OQ3 — Does Candidate D's audit produce structural reasons for deprecation that still apply?** Observable when the audit runs. Determines whether /comprehend revival proceeds via Path 1.

- **OQ4 — Does Path 2 (operational-as-audit) successfully substitute for the formal audit for the /comprehend-specific case?** Observable when Path 2 fires. If operational experience surfaces deprecation reasons that the user would have missed in a formal audit, both paths produce evidence; if not, Path 1 may need to fire eventually anyway for other non-active items.

- **OQ5 — Does /comprehend's NOT-list distinction (opacity vs ambiguity) hold operationally?** Observable when /comprehend revives via either path. The distinctness from /sensemaking is theoretical; operational invocation tests it. Important for condition (a) in validity check.

- **OQ6 — Does Interpretation B (lighter question-framing pre-step) emerge as a real need?** Observable over several `/MVLw` inquiries post-application. If users encounter cases where `/MVLw`'s existing branch.md framing missed an important interpretation, Interpretation B becomes a real candidate. Important for the deferred placement.

- **OQ7 — Is /comprehend's spec stale relative to current project patterns?** Observable when the spec-freshness check fires. If misalignment is severe, spec update becomes a precondition.

### Blocked

- **OQ8 — /reflect revival decision.** Blocked on Candidate D's audit findings.

- **OQ9 — Bounded follow-ups (nav-session aggregation; meta-loop runtime; multi-head concurrency).** Blocked on L2+ readiness per 14-03 + 18-09.

- **OQ10 — Other non-active items audit findings.** Blocked on Candidate D's expansion to /wayfinding, /MVL+, /MVL2+ (deprecated runners), artifact_materialization, spec_governance, outcome_review, etc.

- **OQ11 — LAYER-2 audit protocol authoring for routeman γ-field.** Blocked on ≥5 post-application routeman invocations per 00-51 + 16-45.

### Research Frontiers

- **OQ12 — Non-active archival reasoning as a project pattern.** When Candidate D runs, it documents not just /comprehend's deprecation reason but the audit METHODOLOGY for non-active item evaluation. This methodology can apply across the corpus. The audit-as-methodology pattern may become a project-canonical capability.

- **OQ13 — Revival-vs-new-design pattern.** This inquiry surfaced the pattern: "user proposes a new discipline → check non-active for existing match → revival vs new-design adjudication." Currently N=1 (the /comprehend case). At N=2+ instances, this becomes a project-canonical inquiry pattern with formal triggers + templates.

- **OQ14 — Cross-discipline Boundary-discipline composition pattern.** When /reflect revives, additional composition shapes emerge. The 18-09 finding's OQ9 names this as a future research frontier; this finding's Shape H is the first additional shape; when /reflect joins, the pattern reaches N=2.

- **OQ15 — Design-vs-runtime confidence pattern formalization.** Currently N=4 (14-03, 16-45, 18-09, this finding). The N=5 gate is close. When the next inquiry adopts this pattern, formalization becomes ripe for a project-canonical principle.

### Refinement Triggers

- **OQ16 — If condition (a) in validity check fires** (audit finds structural deprecation reason still applies), the /comprehend revival recommendation re-opens. The user may decide to scope /comprehend down rather than full-revive, or to refine the discipline before reviving.

- **OQ17 — If condition (c) in validity check fires** (Shape A demonstrably covers artifact-modeling), /comprehend's distinctness from `/MVLw` needs structural re-test. The opacity-vs-ambiguity distinction may be theoretical-only.

- **OQ18 — If Interpretation B emerges as a real need** (condition (d) or via independent observation), a fresh inquiry on the lightweight question-framing pre-step opens. This would carry Layer Commitment: meaning (new mechanism design) and likely produce a new discipline OR a `/MVLw` spec amendment.

- **OQ19 — If the user surfaces a concrete near-term artifact-modeling task BEFORE Candidate D runs**, Path 2 (operational-as-audit) fires. The audit (D) becomes a follow-up rather than a precondition for /comprehend specifically.

- **OQ20 — If /comprehend's spec is found stale beyond easy repair** (condition (e) severe), revival is delayed until spec-freshness audit completes.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
Use this skill to 

Analyze what is next focus after routeman edits are finished and implemented? 

I am thinking "understand"  skill which can be used for

In MVL loop, before sensemaking so branch md file will have different phrasings with different attentions , this will prevent future misunderstandings such as deriving wrong assumption from codebase 

And also it can be used prior to routeman skill, understand discipline enhances the overall understanding of the task and also a concept. So maybe it makes sense to run it before routeman? Or maybe it doesnt makes sense? 

Lets discuss this deeply.
```

</details>
