# Innovation — routeman_docarchive_read_policy_question

## User Input

/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-28_17-30__routeman_docarchive_read_policy_question/_branch.md

Read in this order: _branch.md → surfacing.md → sensemaking.md → decomposition.md. Innovation purpose: produce concrete content for Q1-Q8 per verification criteria in confirmation-shape (verdict settled).

---

## Seed / Preamble

### Seed

The 8-piece Q-tree from Decomposition (Q1-Q8), each with verification criteria. Deliverable: two-layer corrective (Story 1 fix + spec amendment recommendation) with joint justification, pattern-attribution tone, frontier-update, and finding assembly.

### Methodology-Mode Consideration

- **Inherited mode:** Standard default (4G + 3F balanced; elaborate the committed direction; produce ship-ready output). Inherited from instructions.
- **Alternative mode:** Minimum-mechanism (1G + 1F only). What would follow: terser per-piece text; would under-cover Q3 (which needs TWO candidate shapes drafted per Decomposition FF-D1) and Q4 (which needs a precise spec sub-section text). Minimum is wrong for this seed.
- **Decision:** Default — Standard. Reason: Q3 has explicit two-candidate requirement (FF-D1); Q4 needs full spec amendment text. Minimum would under-cover.

### Meta-decision piece classification

| Piece | Properties firing | Classification |
|---|---|---|
| Q1 (implicit-policy table) | (b) framing-semantic — the table is the load-bearing structural claim downstream pieces operate under | meta-decision |
| Q2 (per-OT verdict) | (c) lesson-vocabulary ("over-claim"; "cost-as-load-bearing"); (d) evaluation-criterion (the verdict frame) | meta-decision |
| Q3 (Story 1 corrective) | (v) intervention-shape commitment — drop (REMOVE) vs re-tier (REPAIR); load-bearing for documentation behavior | meta-decision with property (v) |
| Q4 (spec amendment) | (v) intervention-shape commitment — ADD-CONTENT spec sub-section; load-bearing for runtime read-policy | meta-decision with property (v) |
| Q5 (joint justification) | none | content-production |
| Q6 (pattern-attribution tone) | none | content-production |
| Q7 (frontier-update text) | none | content-production |
| Q8 (finding assembly) | none | content-production |

Four meta-decision pieces. Q3 + Q4 fire property (v) — intervention-shape-axis Inversion required.

---

## Per-Piece Generation

### Q1 — Implicit-policy table

**Verification criteria:** 4-row table; tier per 14-49 vocabulary; source-of-rule cited; load-bearing role explicit.

**Mechanisms applied:**
- **Generator: Combination** — combine "spec silence" + "CONCLUDE quality test" + "canon doc reader workflow" → the table.
- **Generator: Absence Recognition** — what's MISSING from the live spec? An explicit generic-mode read-policy table; the 14-49 finding's named open gap.
- **Framer: Lens Shifting** — under what lens does spec-silence become a tier? Under the "lightest-default consistent with project design intent" lens, silence collapses to MAY (for opt-in files) and MANDATORY-WHEN-AVAILABLE (for canonical-consumed files).
- **Piece-level Inversion (meta-decision):** "what if the implicit policy is the OPPOSITE — finding.md is MAY and docarchive is MANDATORY-WHEN-AVAILABLE?" Test: CONCLUDE's quality test asserts finding.md self-sufficiency precisely so consumers DON'T need docarchive. Canon doc explicitly frames docarchive as opt-in. Both contradict the inverted policy. Inversion FAILS structurally; principal candidate survives.

**Principal candidate (text):**

> **Implicit policy for routeman's generic-mode read on a concluded `/MVLw` inquiry folder** (derived from spec silence + CONCLUDE design intent + canon doc reader workflow):
>
> | File | Tier | Source of the implicit rule |
> |---|---|---|
> | `_branch.md` | **SHOULD** | Provides the question + goal context; CONCLUDE Step 2 reads it; routeman benefits from the parallel context. |
> | `finding.md` | **MANDATORY-WHEN-AVAILABLE** | CONCLUDE's quality test (`/Users/ns/.claude/skills/protocols/conclude.md` line 297): *"Can someone read ONLY `finding.md`..."* — finding.md is designed to be self-sufficient. Canon doc (`docs/canon/runtime_environment/folder_based.md` line 250-251): *"Answer → Read `finding.md`."* Required-when-the-folder-is-concluded; absent on fresh inquiries (then no read). |
> | `_route.md` | **SHOULD** | The 14-49 directional-mode rule extends to generic mode: `_route.md` records routeman's own prior invocations; mode-independent. |
> | `docarchive/` (any file inside) | **MAY** | Canon doc line 328: *"If they want the reasoning trail, they read `docarchive/` files."* Caller-supplied opt-in; routeman does NOT autonomously seek docarchive content. |
>
> The table grounds Q2's per-OT verdicts, Q3's Story 1 corrective, and Q4's spec amendment.

**5-test cycle:**
- Novelty: descriptive of what's already implicit. PASS-by-fit.
- Scrutiny survival: counter — "the spec doesn't say 'four tiers for these four files'." Response: the spec uses the 4-tier vocabulary; the implicit policy applies that vocabulary to the previously-unaddressed generic-mode case. Naming what's implicit is descriptive labeling, not invention. SURVIVES.
- Fertility: the table is reusable as both the diagnosis frame and the spec amendment's content. PASS.
- Actionability: directly usable. PASS.
- Mechanism independence: Combination + Absence Recognition + Lens Shifting + failed Inversion all converge. PASS.

Disposition: **ACTIONABLE**.

---

### Q2 — Per-OT verdict

**Verification criteria:** 4 verdicts with spec citations; reference Q1.

**Mechanisms applied:**
- **Generator: Absence Recognition** — what's missing from Story 1's claim? Spec authorization. The verdict names the absence.
- **Framer: Constraint Manipulation (ADD)** — add "claim must be spec-cited at the policy level." Under this constraint Story 1's claim fails (no citation; flat enumeration).
- **Framer: Constraint Manipulation (REMOVE)** — remove "spec silence = permission." Once removed, the implicit-policy reading is the natural default.
- **Piece-level Inversion (meta-decision):** "what if the cost dimension is NOT load-bearing — what if reading docarchive is cheap enough that the cost is negligible?" Test: discipline outputs are typically 200-500 lines; 5 × 3 workers = ~6000 lines per nav session. This is not negligible at scale. Cost IS load-bearing. Inversion FAILS.

**Principal candidate (text):**

> | OT | Verdict | Spec citation |
> |---|---|---|
> | **OT1 — Spec accuracy of Story 1's docarchive claim** | **OVER-CLAIMED.** Story 1's flat enumeration treats `docarchive/` as default-read; the spec is silent on docarchive in input-contract terms; CONCLUDE + canon establish the implicit policy that docarchive is opt-in audit, not default. | `cognitive_harness/routeman/references/routeman.md` §3.2 read-policy section addresses only directional-mode `routeman.md` + `_route.md`. Grep across the spec returns no input-contract mention of finding.md or docarchive. CONCLUDE protocol line 297 (`conclude.md`): the "ONLY finding.md" quality test. Canon `folder_based.md` lines 250-251 + 328: docarchive = opt-in reasoning trail. |
> | **OT2 — Cost-of-bloat in navigation-session context** | **REAL + LOAD-BEARING.** A navigation session reading docarchive across 3 workers (Story 5 pattern) consumes ~15 additional files / ~6000+ lines of context. This invokes the Workspace-overload failure mode (LAYER 1 mode #5 in surfacing spec). | `cognitive_harness/surfacing/references/surfacing.md` line 241 (Workspace overload failure mode). Story 5 pattern in `devdocs/routeman_user_stories.md` lines 102-128 (3-worker aggregation). |
> | **OT3 — Alternative-policy ("routeman only should read finding.md")** | **SPEC-ALIGNED with a small refinement.** The proposal matches the implicit policy for the default case; the refinement is to mark docarchive as MAY (caller-supplied opt-in) rather than forbidding — this preserves the on-demand audit path. | Per Q1's implicit-policy table: finding.md MANDATORY-WHEN-AVAILABLE (the canonical consumed artifact); docarchive MAY (preserves the audit path). |
> | **OT4 — Structural rationale for reading docarchive by default** | **WEAK.** Three independent sources (spec text + CONCLUDE + canon) converge against default-read. The only conceivable rationale — "finding.md might be incomplete" — directly contradicts CONCLUDE's quality test which exists precisely to prevent that case. | CONCLUDE protocol's "ONLY finding.md" quality test (`conclude.md` line 297): if a consumer needs to consult docarchive to understand the verdict, finding.md failed CONCLUDE's quality test. |

**5-test cycle:**
- Scrutiny survival: counter — "OT1 calling it OVER-CLAIMED is too strong; it could be just 'imprecise.'" Response: the flat enumeration STRUCTURALLY claims default-read (per Sensemaking Ambiguity #1). "Imprecise" understates the spec contradiction; OVER-CLAIMED is precise. SURVIVES.
- Mechanism independence: Absence + Constraint Manipulation (both directions) + Inversion converge. PASS.

Disposition: **ACTIONABLE**.

---

### Q3 — Story 1 corrective text (TWO candidates required per FF-D1)

**Verification criteria:** Two candidate shapes; each respects Q1; light-touch; exact replacement text; recommendation.

**Mechanisms applied (meta-decision; property (v) — intervention-shape-axis Inversion required):**

**Principal shape #1: REMOVE** — drop the docarchive line entirely from Story 1's input list. Lightest possible touch; the over-claim disappears.

**Principal shape #2: REPAIR** — re-tier Story 1's input list: mark _branch.md + finding.md as default-read; explicitly mark docarchive as on-demand-only.

**Intervention-shape-axis Inversion (required for property v):**
- Shape X committed (per principal): both REMOVE and REPAIR generated; intervention-shape Inversion already covered by enumerating both.
- Alternative shape Y considered: **REORGANIZE-WITHOUT-ADDING** — group Story 1's inputs under a heading "Default reads" without explicit docarchive line; same as REMOVE in effect; rejected as redundant.
- Alternative shape Z considered: **ADD-CONTENT** — keep the docarchive line + add a clarifying note that docarchive is not default-read. Rejected: keeps the misleading flat enumeration; the note doesn't fix the structural shape.
- What follows under each: REMOVE leaves Story 1 unchanged except deletion; REPAIR re-tiers the list and is structurally explicit; REORGANIZE-WITHOUT-ADDING is REMOVE-equivalent; ADD-CONTENT keeps the over-claim with a footnote.
- **Verdict:** Pick between REMOVE and REPAIR. REORGANIZE + ADD-CONTENT rejected.

**Generator: Combination** — combine the implicit-policy table + Story 1's existing input list → both candidates.
**Framer: Constraint Manipulation (ADD)** — add "the corrective must preserve Story 1's overall structure (prehistory + invocation + input + output)." Both candidates respect this.
**Framer: Constraint Manipulation (REMOVE)** — remove "the input list must enumerate all touched files." Then docarchive can either drop or re-tier without violating any rule.

**Principal candidate A — REMOVE (drop the docarchive line):**

Replace Story 1's existing input list (lines 15-20 in `devdocs/routeman_user_stories.md`):

```
**Input routeman reads:**
- `_branch.md` — the question + goal that framed the inquiry.
- `finding.md` — the settled understanding + the 5 open questions + the 3 failure cases + the 2 open decisions + the Next Actions.
- The 5 archived discipline outputs in `docarchive/` — supplementary cycle content.
```

With:

```
**Input routeman reads:**
- `_branch.md` — the question + goal that framed the inquiry.
- `finding.md` — the settled understanding + the 5 open questions + the 3 failure cases + the 2 open decisions + the Next Actions. CONCLUDE's quality test means this single file is sufficient to reconstruct the inquiry's verdict — routeman doesn't read `docarchive/` by default.
```

**Principal candidate B — REPAIR (re-tier the input list):**

Replace the same lines with:

```
**Input routeman reads:**

*Default reads (the canonical input set per `references/routeman.md` §3.2 + CONCLUDE's finding.md self-sufficiency design):*
- `_branch.md` — the question + goal that framed the inquiry.
- `finding.md` — the settled understanding + the 5 open questions + the 3 failure cases + the 2 open decisions + the Next Actions.

*Available on-demand (not read by default; caller can supply explicitly if audit-trail content is needed):*
- `docarchive/` — the 5 archived discipline outputs (surfacing / sensemaking / decomposition / innovation / critique). These supply the reasoning trail CONCLUDE distilled into `finding.md`. Routeman reads them only if the caller explicitly references docarchive content as part of the input.
```

**Recommendation:** **Candidate B (REPAIR).** Reasoning: REMOVE is lightest-touch but discards information a reader might find useful (knowing docarchive exists; knowing the on-demand path is supported). REPAIR re-tiers the list to be STRUCTURALLY EXPLICIT about the policy distinction — this both fixes the over-claim AND teaches the reader the implicit-policy frame. The marginal cost of REPAIR (4 extra lines) buys structural clarity that REMOVE doesn't provide. REPAIR is preferred unless the user wants strict lightest-touch.

**5-test cycle (both candidates):**
- Scrutiny survival: both candidates pass the over-claim test. REPAIR's additional structure exposes more surface area but doesn't introduce new claims beyond Q1's implicit policy. SURVIVES.
- Actionability: both drop-in ready. PASS.
- Mechanism independence: Combination + both Constraint Manipulation directions + intervention-shape Inversion across REMOVE / REPAIR / REORGANIZE / ADD-CONTENT all converge on REMOVE-or-REPAIR. PASS.

Disposition: **ACTIONABLE** for both; recommendation B (REPAIR).

**Intervention-shape compliance:** Principal shapes REMOVE + REPAIR explicitly named per Vocabulary; alternative shapes REORGANIZE-WITHOUT-ADDING + ADD-CONTENT named explicitly + rejected with reasoning; what-follows stated for each; tested via 5-test cycle. Property-(v) Inversion compliance: **satisfied**.

---

### Q4 — Spec amendment recommendation

**Verification criteria:** New sub-section; 4 file-rows; cross-references to 14-49 + CONCLUDE + canon; SHOULD not MUST.

**Mechanisms applied (meta-decision; property (v) — intervention-shape-axis Inversion required):**

**Principal shape committed: ADD-CONTENT** (a new §3.2 sub-section adding the generic-mode read-policy).

**Intervention-shape-axis Inversion:**
- Alternative shape Y: **REPAIR** — modify the existing §3.2 prologue to mention the generic-mode policy inline. What follows: the prologue grows; the structural distinction between directional and generic policies blurs; readers may not notice the new content. REPAIR is structurally weaker than ADD-CONTENT.
- Alternative shape Z: **ADD-DIMENSION** — frame the new content as a new evaluation axis (e.g., "Read-policy by mode dimension"). What follows: heavier conceptual addition; over-engineers a simple per-file-per-mode table. Rejected as over-engineering.
- Alternative shape W: **REORGANIZE-WITHOUT-ADDING** — restructure the existing §3.2 sub-sections to expose the implicit policy without adding new content. What follows: nothing actually closes the gap; the implicit policy stays implicit. Rejected as insufficient.
- **Verdict:** ADD-CONTENT committed; REPAIR + ADD-DIMENSION + REORGANIZE rejected on dilution / over-engineering / insufficiency grounds.

**Generator: Combination** — combine "14-49 sub-section pattern" + "Q1 implicit-policy table" + "the 4-tier vocabulary" → the amendment text.
**Generator: Domain Transfer** — the 14-49 finding's sub-section structure (Reading prior X — Policy: TIER — failure handling per state) is the template; transfer to generic mode.
**Framer: Lens Shifting** — under the "explicit-spec-policy" lens, the implicit policy from Q1 becomes a §3.2.6 sub-section with per-file rules.

**Principal candidate (text):**

> **Recommended amendment to `cognitive_harness/routeman/references/routeman.md` §3.2 (Reception)** — adds a new sub-section closing the generic-mode read-policy gap that the 14-49 finding (`devdocs/inquiries/2026-05-27_14-49__routeman_directional_input_read_policy/finding.md`) explicitly left open.
>
> **Insert after the existing §3.2.5 "Reading prior `_route.md` in directional mode" sub-section:**
>
> ---
>
> #### Reading discipline outputs in generic mode
>
> When `/routeman` is invoked in generic mode (stage-1 whole-territory enumeration) on a concluded inquiry folder produced by `/MVLw` (or `/MVL+` or `/MVL`), the input contract's `current state + goal/subgoal` is reconstructable from the inquiry's CONCLUDE-produced artifacts. The per-file read-policy:
>
> - **`_branch.md`** — Policy: **SHOULD**. Provides the question + goal context preserved by the runner; reading it grounds Reception's goal-framing.
> - **`finding.md`** — Policy: **MANDATORY-WHEN-AVAILABLE**. CONCLUDE designs `finding.md` to be a single argumentative artifact carrying the inquiry's settled understanding, open questions, failure cases, decisions, and Next Actions (per `/Users/ns/.claude/skills/protocols/conclude.md` Step 2 + the "ONLY finding.md" quality test at line 297). Failure handling per state:
>   - **Absent** (first directional invocation on an inquiry that hasn't CONCLUDEd; or input is a non-inquiry folder): FLAG `MissingFindingFile` in telemetry. Operate from `_branch.md` + raw text + other available files per SKILL.md Step 1.
>   - **Present-but-malformed AND state reconstruction depends on it:** HALT with `MalformedRequiredInput`.
>   - **Present-but-malformed but state can be reconstructed from other sources:** FLAG and proceed.
> - **`_route.md`** — Policy: **SHOULD** (mode-independent; same rule as §3.2.5). Provides cross-invocation history if any prior routeman invocations exist on the same folder.
> - **`docarchive/`** (any file inside) — Policy: **MAY**. Routeman does NOT autonomously seek docarchive content. The caller may explicitly reference a specific docarchive file as an input parameter if audit-trail content is needed for a particular enumeration; in that case the explicitly-supplied file is read per the SKILL.md Step 1 read-policy. Default behavior reads only `finding.md` + `_branch.md` + `_route.md`.
>
> **Rationale for the `docarchive/` MAY tier.** CONCLUDE's quality test exists precisely so downstream consumers (including routeman) can rely on `finding.md` alone. Reading docarchive by default would (a) bypass CONCLUDE's design contract and (b) bloat consumption — particularly costly in navigation-session contexts (`docs/canon/towards_cross_run_cognitive_steering_with_isolated_navigation_session.md`) where reading docarchive across multiple worker folders multiplies context consumption. The MAY tier preserves the caller-supplied opt-in path for legitimate audit cases without defaulting to systematic over-read.
>
> ---
>
> **Where in §3.2 to land it:** after §3.2.5 ("Reading prior `_route.md` in directional mode"), as §3.2.6. The 4-tier read-policy vocabulary (`Read-Policy Vocabulary` sub-section earlier in §3.2) is referenced; no duplication.
>
> **Status:** SHOULD (user-decidable). Closes the 14-49 finding's named open refinement trigger ("If generic-mode read policy proves to require a different vocabulary..."). The user picks whether to apply this amendment alongside the Story 1 corrective.

**5-test cycle:**
- Scrutiny survival: counter — "the spec doesn't NEED this amendment; the implicit policy is already discoverable." Response: this conversation IS evidence that the implicit policy isn't reliably discoverable; the agent in this session made the over-claim. Closing the gap explicitly prevents future agents from making the same mistake. SURVIVES.
- Actionability: drop-in spec edit ready. PASS.
- Mechanism independence: Combination + Domain Transfer + Lens Shifting + Inversion rejecting REPAIR + ADD-DIMENSION + REORGANIZE all converge on ADD-CONTENT. PASS.

Disposition: **ACTIONABLE**.

**Intervention-shape compliance:** Principal shape ADD-CONTENT named per Vocabulary; alternative shapes REPAIR + ADD-DIMENSION + REORGANIZE-WITHOUT-ADDING named explicitly + rejected; what-follows stated; tested. Property-(v) Inversion compliance: **satisfied**.

---

### Q5 — Joint justification (integrated prose)

**Verification criteria:** Spec accuracy + cost integrated as single prose; CONCLUDE self-sufficiency linkage explicit.

**Mechanisms applied:**
- **Generator: Combination** — combine spec-accuracy + cost + CONCLUDE design intent → linked prose.
- **Framer: Lens Shifting** — under the "design-intent" lens, spec accuracy and cost are not separate axes; they're two facets of the same underlying constraint (CONCLUDE compiles once so consumers consume once).

**Principal candidate (text):**

> **Why the corrective is warranted.** The reason `finding.md` is designed to be self-sufficient is the reason routeman shouldn't read `docarchive/` by default. CONCLUDE's quality test — *"Can someone read ONLY `finding.md`, at normal reading speed without backtracking, and understand the complete decision?"* (`/Users/ns/.claude/skills/protocols/conclude.md` line 297) — exists precisely because the cost of asking downstream consumers to re-read raw discipline outputs is unbounded. Compile once, consume once; that's the design contract. Story 1's flat enumeration of `docarchive/` as input violates the contract by asserting a default-read that the implicit policy doesn't authorize. The same constraint shows up at scale: a navigation session aggregating 3+ workers would read 15+ discipline outputs / ~6000+ lines of context per invocation if docarchive were default-read, triggering the Workspace-overload failure mode (`cognitive_harness/surfacing/references/surfacing.md` LAYER 1 mode #5). Spec accuracy (the implicit policy from CONCLUDE + canon) and operational cost (Workspace-overload risk) are not two separate reasons — they're the same constraint observed at two layers: the contract layer and the resource layer.

**5-test cycle:**
- Scrutiny survival: counter — "this conflates the design contract with the operational cost." Response: the conflation is the point — the design contract EXISTS to bound the cost. They are linked, not separate. SURVIVES.
- Actionability: drop-in prose for the finding's Reasoning section. PASS.

Disposition: **ACTIONABLE**.

---

### Q6 — Pattern-attribution tone

**Verification criteria:** Substantive; 2-3 sentences; connects to 15-48 Q7; not sycophantic.

**Mechanisms applied (light piece):**
- **Framer: Inversion** — what if the corrective DIDN'T acknowledge origin? Would suppress evidence; would lose the pattern-attribution signal. Acknowledgment is mechanism-necessary, not stylistic-flourish.

**Principal candidate (text):**

> Story 1 was written by this agent in this session as part of the COULD-1 amendment work — the over-claim is a recent artifact, not an inherited commitment. The same systematic narrowing pattern flagged in the 15-48 finding's Q7 frontier (`devdocs/inquiries/2026-05-28_15-48__routeman_input_dependency_question/finding.md` Research Frontiers section) has now produced a second observed instance, this time inside the very documentation amendment that was meant to correct the first. The corrective both fixes the specific case and supplies additional evidence for the wider pattern's verdict — without committing to that verdict, which remains the Q7 frontier's standing question.

**5-test cycle:**
- Scrutiny survival: counter — "this still reads as self-conscious." Response: the acknowledgment is structurally necessary (preserves evidence); the substance is the pattern-attribution + Q7 linkage, not apology. SURVIVES.
- Actionability: drop-in. PASS.

Disposition: **ACTIONABLE**.

---

### Q7 — Frontier-update text

**Verification criteria:** Records second instance; scope-disclaimer firm; cross-references 15-48 Q7.

**Mechanisms applied (light piece):**
- **Framer: Lens Shifting** — under the "future-inquiry-input" lens, the frontier-update is supporting evidence for a STANDING question, not a partial answer.

**Principal candidate (text):**

> **Frontier observation supporting the 15-48 Q7 standing question** (cross-reference: `devdocs/inquiries/2026-05-28_15-48__routeman_input_dependency_question/finding.md` → Open Questions / Research Frontiers).
>
> *Wider standing question (unchanged):* does the agent's mental model SYSTEMATICALLY narrow routeman to inquiry-folder contexts beyond the specific cases observed?
>
> *Second observed instance (added by this inquiry):* Story 1 of `devdocs/routeman_user_stories.md` claimed routeman reads the 5 archived discipline outputs in `docarchive/`. The claim was authored by this session's agent and was not spec-authorized. The 15-48 finding's first observed instance was the agent's "routeman has nothing to enumerate from" framing in a prior turn of that conversation. The recurrence of the same narrowing pattern across two distinct cases — written several hours apart, in different documentation contexts — strengthens the supporting evidence for the wider verdict.
>
> *Scope disclaimer (preserved firm):* this inquiry diagnoses the second specific case and recommends a specific corrective. The wider question is NOT resolved here. A future inquiry, given a third independent instance OR sufficient cross-evidence, could promote the verdict from "flagged with two observed instances" to "diagnosed systematic." This finding does NOT pre-commit to that promotion.

**5-test cycle:**
- Scrutiny survival: counter — "still reads like creeping diagnosis." Response: the scope disclaimer is firm; the observation is evidence-not-verdict; the promotion criterion (third instance OR cross-evidence) is explicit. SURVIVES.
- Actionability: drop-in for the finding's Research Frontiers. PASS.

Disposition: **ACTIONABLE**.

---

### Q8 — Finding assembly outline

**Verification criteria:** CONCLUDE template; no Inherited Commitments Re-test; preserves Q1 + Q3 + Q4 + Q5 + Q6 + Q7.

**Mechanisms applied (light piece):**
- **Framer: Lens Shifting** — under CONCLUDE-template lens, the finding's sections map to deliverable categories.

**Principal candidate (outline):**

> **Finding sections** (per CONCLUDE template; no Synthesis Trigger → no Inherited Commitments Re-test):
>
> 1. **Frontmatter** — status: active; model: claude-opus-4-7[1m]; effort: max; no refines/supersedes/corrects (the 15-48 Q7 update is supporting evidence, not a refinement of the 15-48 verdict; no inheritance).
> 2. **Title** — Finding: routeman_docarchive_read_policy_question
> 3. **Question** — From _branch.md; cite Story 1's verbatim docarchive claim as the motivating instance.
> 4. **Finding Summary (bullets)** —
>    - Verdict: Story 1 OVER-CLAIMED (default-read claim contradicts implicit policy).
>    - Implicit policy table (Q1 abbreviated): finding.md MANDATORY-WHEN-AVAILABLE; docarchive MAY; supporting context files SHOULD.
>    - Per-OT verdicts (Q2 abbreviated).
>    - Corrective is two-layer (Story 1 MUST; spec amendment SHOULD).
>    - Joint justification: spec accuracy + cost are the same constraint at two layers.
>    - Frontier update: second observed instance of 15-48 Q7 pattern; not pre-committed.
> 5. **Finding body** — Q1 implicit-policy table in full; Q2 per-OT verdict in full; Q5 joint justification prose; Q6 pattern-attribution tone integrated.
> 6. **Next Actions** —
>    - **MUST** — apply Q3's Story 1 corrective (Candidate B preferred); Who: user; Gate: observable (next user_stories edit); Why: prevent the over-claim from propagating + close the immediate confusion source.
>    - **COULD** — apply Q4's spec amendment to `references/routeman.md` §3.2.6; Who: user; Gate: condition-bound (when next addressing routeman spec edits); Why: close the 14-49 named open gap + prevent future agents from making the same over-claim.
> 7. **Reasoning** — alternatives considered + KILLed (REORGANIZE-WITHOUT-ADDING, ADD-CONTENT for Story 1; REPAIR, ADD-DIMENSION, REORGANIZE for spec).
> 8. **Open Questions** —
>    - **Research Frontiers:** Q7 frontier-update text (second-instance observation; scope disclaimer firm).
> 9. **Source Input** — user's verbatim MVLw invocation.

**5-test cycle:**
- Scrutiny survival: counter — "frontmatter should declare refines: 15-48 for the Q7 evidence link." Response: the Q7 frontier remains the 15-48 finding's standing question; this inquiry adds supporting evidence but does NOT refine the verdict (no verdict to refine — Q7 is unresolved by design). No `refines:` linkage; Q7 evidence linkage is in the Frontier Update prose. SURVIVES.
- Actionability: CONCLUDE-ready outline. PASS.

Disposition: **ACTIONABLE**.

---

## Inherited Frame Audit

**Step (i) — Seed-level central assumption.** Sensemaking's SV6 committed: routeman's implicit generic-mode read-policy is finding.md MANDATORY-WHEN-AVAILABLE + docarchive MAY; Story 1 is over-claimed.

**Step (ii) — Piece-level commitments.**
- Q1 commits the implicit-policy table.
- Q2 commits the over-claim verdict + cost-as-load-bearing lesson.
- Q3 commits intervention shape (REPAIR preferred).
- Q4 commits intervention shape (ADD-CONTENT).

**Step (iii) — Challenge scan.**
- Q1's table: Piece-level Inversion at Q1 challenged it ("what if reverse policy?"); rejected on CONCLUDE + canon grounds.
- Q2's over-claim verdict: Piece-level Inversion at Q2 challenged it ("what if cost negligible?"); rejected on scale evidence.
- Q3's REPAIR shape: Intervention-shape-axis Inversion at Q3 challenged via REMOVE + REORGANIZE + ADD-CONTENT alternatives; REPAIR survived comparison; REMOVE preserved as acceptable lighter-touch.
- Q4's ADD-CONTENT shape: Intervention-shape-axis Inversion at Q4 challenged via REPAIR + ADD-DIMENSION + REORGANIZE-WITHOUT-ADDING alternatives; ADD-CONTENT survived.
- Seed-level central assumption: challenged via Q1's + Q2's Inversions; both contradicted by spec evidence.

**Step (iv) — Firing condition.** Audit does NOT fire. All commitments have explicit challenges; all challenges rejected on structural grounds.

---

## Assembly Check

Examining survivors together: Q1 + Q2 + Q3 (B preferred; A acceptable) + Q4 + Q5 + Q6 + Q7 + Q8 form the complete corrective deliverable. Emergent structure: the deliverable both fixes the specific case (Story 1) AND closes the spec gap (14-49 generic-mode) AND advances the wider pattern observation (15-48 Q7) WITHOUT pre-committing to the wider verdict. The combination produces three distinct work-products (Story 1 edit; spec amendment; finding artifact with Q7 evidence) that downstream consumers can act on independently.

### Axis coverage check

Orthogonal axes the candidate set should vary along:
- **Documentation-layer vs spec-layer corrective** — covered by Q3 vs Q4 (two work-products). ✓
- **MUST vs COULD priority** — covered by Q3 (MUST) vs Q4 (COULD). ✓
- **Spec-accuracy vs cost justification** — covered by Q5 (joint, integrated). ✓
- **Specific-case vs wider-pattern observation** — covered by Q2 vs Q7. ✓
- **REMOVE vs REPAIR intervention shape** — covered by Q3 candidates A + B. ✓
- **Default-read vs on-demand-only file treatment** — covered by Q1 (the implicit-policy table's four tiers). ✓

No missing axis variant. Axis coverage: complete.

### Per-row mechanism-trace check

For Q1's 4-row policy table:
- _branch.md row: mechanism trace — Combination + Lens Shifting. ✓
- finding.md row: mechanism trace — Combination (CONCLUDE quality test + canon) + Absence Recognition (the implicit constraint becoming explicit). ✓
- _route.md row: mechanism trace — Domain Transfer (14-49 directional rule → generic mode). ✓
- docarchive row: mechanism trace — Combination (canon doc + cost) + Inversion (rejecting MANDATORY-WHEN-AVAILABLE alternative). ✓

For Q2's 4-row OT verdict table:
- OT1 row: Absence Recognition + Constraint Manipulation. ✓
- OT2 row: Constraint Manipulation + Inversion (rejecting cost-negligible). ✓
- OT3 row: Combination (alternative-policy + spec). ✓
- OT4 row: Absence Recognition (no rationale for default-read). ✓

All rows received active mechanism work.

---

## Mechanism Coverage (Telemetry)

- **Generators applied:** Combination ×7 (Q1, Q2, Q3, Q4, Q5; mostly central) + Absence Recognition ×3 (Q1, Q2 OT1/OT4) + Domain Transfer ×1 (Q4 from 14-49 pattern) = 11 Generator-invocations across 3 distinct Generators.
- **Framers applied:** Lens Shifting ×5 (Q1, Q4, Q5, Q7, Q8) + Constraint Manipulation ×4 (Q2 ADD + REMOVE; Q3 ADD + REMOVE) + Inversion ×6 (Q1, Q2, Q3 intervention-shape, Q4 intervention-shape, Q6) = 15 Framer-invocations across 3 distinct Framers.
- **Generators distinct:** 3 / 4 (missing Extrapolation — not relevant for confirmation-shape diagnostic).
- **Framers distinct:** 3 / 3 (full Framer coverage).
- **Convergence:** YES — multiple mechanisms converge on the over-claim verdict (Q2: Absence + Constraint Manipulation + Inversion rejecting cost-negligible); the implicit-policy table (Q1: Combination + Absence + Lens Shifting + failed Inversion); the REPAIR shape for Story 1 (Q3: Combination + Constraint Manipulation + Inversion rejecting REMOVE / REORGANIZE / ADD-CONTENT); the ADD-CONTENT shape for spec (Q4: Combination + Domain Transfer + Lens Shifting + Inversion rejecting REPAIR / ADD-DIMENSION / REORGANIZE).
- **Survivors tested:** 8 / 8 — all principal candidates passed 5-test cycle (Q3 has two candidates both passing).
- **Failure modes observed:** None.

### Production-task additional telemetry

| Piece | Mechanisms applied | Classification | Property-(v) Inversion compliance |
|---|---|---|---|
| Q1 | Combination, Absence Recognition, Lens Shifting, Inversion (content-axis) | meta-decision (property b) | n/a (not v); content-axis Inversion satisfies Piece-Level Inversion |
| Q2 | Absence Recognition, Constraint Manipulation (ADD+REMOVE), Inversion (content-axis) | meta-decision (properties c+d) | n/a (not v); content-axis Inversion satisfies |
| Q3 | Combination, Constraint Manipulation (ADD+REMOVE), Inversion:intervention-shape | meta-decision (property v) | **satisfied** — REMOVE + REPAIR + REORGANIZE + ADD-CONTENT named per Vocabulary; what-follows stated; tested |
| Q4 | Combination, Domain Transfer, Lens Shifting, Inversion:intervention-shape | meta-decision (property v) | **satisfied** — ADD-CONTENT + REPAIR + ADD-DIMENSION + REORGANIZE-WITHOUT-ADDING named; what-follows stated; tested |
| Q5 | Combination, Lens Shifting | content-production | n/a |
| Q6 | Inversion | content-production | n/a |
| Q7 | Lens Shifting | content-production | n/a |
| Q8 | Lens Shifting | content-production | n/a |

- **Meta-decision pieces:** 4 (Q1, Q2, Q3, Q4).
- **Piece-level Inversion compliance:** all 4 satisfied.
- **Property-(v) intervention-shape-axis Inversion compliance:** Q3 + Q4 both satisfied.
- **No violations.**

**Overall: PROCEED.**

---

## Structural check (manual)

- Required components present: ✓ Seed/Preamble with methodology-mode consideration; ✓ Per-piece principal candidates with 5-test cycles; ✓ Meta-decision-piece compliance; ✓ Inherited Frame Audit; ✓ Assembly check; ✓ Axis coverage check; ✓ Per-row mechanism-trace; ✓ Telemetry with production-task additional reporting
- All 8 pieces ACTIONABLE
- All 4 meta-decision pieces have piece-level Inversion compliance: satisfied
- Q3 + Q4 property-(v) intervention-shape Inversion: satisfied
- No `[FAIL]` lines

PROCEED to Critique.
