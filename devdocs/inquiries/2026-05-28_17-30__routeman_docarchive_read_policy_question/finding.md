---
status: active
model: claude-opus-4-7[1m]
effort: max
---
# Finding: routeman_docarchive_read_policy_question

## Question

The user noticed that Story 1 of `devdocs/routeman_user_stories.md` lists `docarchive/` as part of routeman's input read when invoked on a concluded `/MVLw` inquiry folder. Story 1 verbatim: *"The 5 archived discipline outputs in `docarchive/` — supplementary cycle content."* The user pushed back with two substantive concerns: (a) this would bloat the navigation-session context; (b) per their reading of the discipline contracts, routeman should only read `finding.md`.

The inquiry diagnoses whether Story 1's claim matches what `cognitive_harness/routeman/references/routeman.md` §3.2 actually says (or implies), quantifies the cost-of-bloat concern, evaluates the alternative-policy recommendation against the spec, and articulates the structural rationale for or against default docarchive reads.

Four observation targets were carried into the pipeline as distinct items per LOOP_DIAGNOSE MC2:
1. Spec accuracy of Story 1's docarchive claim.
2. Cost-of-bloat in navigation-session context.
3. Alternative-policy recommendation ("routeman only should read finding.md").
4. Structural rationale for OR against reading docarchive by default.

The goal was a structural verdict per OT plus a corrective: at minimum a Story 1 edit; potentially a spec amendment if the spec gap warrants it.

## Finding Summary

- **Verdict on Story 1's claim:** OVER-CLAIMED. The flat enumeration of `docarchive/` alongside `_branch.md` and `finding.md` structurally claims default-read; three independent sources (the spec, CONCLUDE protocol, and the canon doc on folder-based runtime) converge against default-read for docarchive content.

- **Implicit policy for routeman's generic-mode read on a concluded inquiry folder** (the load-bearing structural claim this finding commits to):

| File | Tier | Source of the rule |
|---|---|---|
| `_branch.md` | **SHOULD** | Provides question + goal context preserved by the runner. |
| `finding.md` | **MANDATORY-WHEN-AVAILABLE** | CONCLUDE's quality test at `/Users/ns/.claude/skills/protocols/conclude.md` line 297: *"Can someone read ONLY `finding.md`..."* — finding.md is designed to be self-sufficient. Canon doc `docs/canon/runtime_environment/folder_based.md` line 250-251 names it the compiled answer. |
| `_route.md` | **SHOULD** | Mode-independent rule extending the directional-mode policy from `references/routeman.md` §3.2.5 to generic mode. |
| `docarchive/` (any file inside) | **MAY** | Canon doc line 328: *"If they want the reasoning trail, they read `docarchive/` files."* Caller-supplied opt-in; routeman does NOT autonomously read docarchive content. |

- **The cost concern was right.** A navigation session aggregating 3 worker folders (Story 5 pattern) would read 5 × 3 = 15 additional discipline outputs at ~400 lines each — roughly 6000+ extra lines of context per invocation if docarchive were default-read. This invokes the Workspace-overload failure mode in the surfacing spec (LAYER 1 mode #5). The cost is also the implicit reason CONCLUDE's self-sufficiency design exists in the first place: compile once, consume once.

- **The user's alternative policy ("routeman only should read finding.md") is spec-aligned** with one small refinement — keep `docarchive/` as MAY rather than forbidden, so a caller can explicitly supply a docarchive path when audit-trail content is genuinely needed. This preserves the on-demand path without bloating default behavior.

- **The corrective is two-layer.** A MUST: correct Story 1 in `devdocs/routeman_user_stories.md`. A COULD: amend `references/routeman.md` §3.2 to close the generic-mode read-policy gap the 14-49 finding (`devdocs/inquiries/2026-05-27_14-49__routeman_directional_input_read_policy/finding.md`) explicitly named as an open refinement trigger. The spec amendment is user-decidable; the Story 1 fix is not.

- **The over-claim is the second observed instance of the systematic-narrowing pattern** flagged in the 15-48 finding's Q7 frontier (`devdocs/inquiries/2026-05-28_15-48__routeman_input_dependency_question/finding.md` → Research Frontiers). This finding adds evidence for the wider standing question without resolving it.

## Finding

Story 1 was written by this session's agent yesterday as part of the COULD-1 amendment work in the prior `routeman_input_dependency_question` inquiry. The user re-read Story 1, noticed an input-list line they didn't like, and challenged it. The challenge is well-founded across all three of its substantive clauses, and the spec evidence supports a precise structural picture of what routeman should and shouldn't read when invoked on a concluded inquiry folder.

### 1. Routeman's input contract is silent on finding.md and docarchive — but the implicit policy is consistent across three sources

The routeman spec at `cognitive_harness/routeman/references/routeman.md` §3.2 has a Read-Policy Vocabulary sub-section (the 4-tier MANDATORY / MANDATORY-WHEN-AVAILABLE / SHOULD / MAY vocabulary committed by the 14-49 finding), but the only file-specific policies it commits are for directional mode: prior `routeman.md` MANDATORY-WHEN-AVAILABLE (§3.2.4); prior `_route.md` SHOULD (§3.2.5). A grep across both `references/routeman.md` and `cognitive_harness/routeman/SKILL.md` returns NO mention of `finding.md`, `docarchive/`, or "archived discipline outputs" in input-contract context. The spec is genuinely silent on what routeman reads from a concluded inquiry folder beyond its own prior output files.

That silence isn't permissive. Three independent project-internal sources converge on the same implicit policy:

- **CONCLUDE's quality test.** The protocol at `/Users/ns/.claude/skills/protocols/conclude.md` line 297 asks the author of any finding: *"Can someone read ONLY `finding.md`, at normal reading speed without backtracking, and understand the complete decision? If no — if the reader needs to re-read paragraphs, scroll up to decode references, or consult other files to understand the verdict — the finding has failed the test."* The design intent makes `finding.md` self-sufficient by construction. A downstream consumer (including routeman) that needs to consult `docarchive/` to understand the inquiry's verdict is, by CONCLUDE's own measure, evidence that the finding failed its quality test — not evidence that routeman should default-read docarchive.

- **Canon doc folder_based.md.** At line 250-251 the canon distinguishes the consumer paths explicitly: *"Answer → Read `finding.md` → The compiled verdict"* vs *"Discipline reasoning → Read `docarchive/<discipline>.md` → The discipline's full output that fed into the finding."* At line 328: *"A new reader opens `_branch.md` to learn the question, then `finding.md` to learn the answer. If they want the reasoning trail, they read `docarchive/` files."* Docarchive is positioned as the opt-in audit trail, consulted on-demand. The canonical reader workflow does NOT include docarchive.

- **The 14-49 finding itself.** That finding committed the 4-tier read-policy vocabulary for directional mode and explicitly flagged generic-mode read policy as an unresolved refinement trigger (line 263): *"If generic-mode read policy proves to require a different vocabulary..."* The 16-45 consolidated amendment plan that followed did not close the gap. The live spec preserves the named open question; this inquiry sits at exactly that seam.

When three independent sources converge against default-read of docarchive, and the spec's silence is in a sub-section explicitly designed to be extended by future refinements, the right reading of the silence is "default to the lightest behavior consistent with the converging design intent" — not "the discipline is free to do anything."

The implicit policy table at the top of the Finding Summary above is what those three sources converge on, applied to the four files an inquiry folder typically contains.

### 2. Per observation target

**OT1 — Spec accuracy of Story 1's docarchive claim:** OVER-CLAIMED. Story 1's input list is a flat enumeration:

```
**Input routeman reads:**
- `_branch.md` — the question + goal that framed the inquiry.
- `finding.md` — the settled understanding + the 5 open questions + the 3 failure cases + the 2 open decisions + the Next Actions.
- The 5 archived discipline outputs in `docarchive/` — supplementary cycle content.
```

The flat shape treats all three items in parallel — same enumeration, same depth, no tier marking — which structurally asserts that all three are default-read. `_branch.md` and `finding.md` are default-read per the implicit policy; `docarchive/` is not. The third bullet asserts a contract the spec does not authorize. "OVER-CLAIMED" is the precise diagnostic term: the claim asserts more than the source supports, on a load-bearing axis (default-read vs on-demand).

**OT2 — Cost-of-bloat in navigation-session context:** REAL and LOAD-BEARING. Discipline outputs are typically 200-500 lines each (this inquiry's surfacing.md was around 150; sensemaking went past 300). At five archived outputs per worker, a navigation session aggregating three workers (Story 5's pattern at `devdocs/routeman_user_stories.md` lines 102-128) would read fifteen extra files — roughly six thousand extra lines of context per invocation — on top of three `finding.md` files, three `_route.md` files, and the cross-head state context the session already carries. That's an order-of-magnitude difference. It triggers the surfacing spec's LAYER 1 mode #5 (Workspace overload) at `cognitive_harness/surfacing/references/surfacing.md` line 241. And critically, the cost is not a side observation: CONCLUDE's quality test exists *precisely* because the cost of asking downstream consumers to re-read raw discipline outputs is unbounded. The constraint and the cost are mechanism-linked.

**OT3 — The alternative policy "routeman only should read finding.md":** SPEC-ALIGNED at the default-case layer, with one small refinement. The proposal matches the implicit policy for the default invocation. The refinement is to keep `docarchive/` as MAY (caller-supplied opt-in) rather than forbidden — there are legitimate audit cases where a caller might want routeman to consult a specific docarchive file, and the MAY tier preserves that path without bloating default context. The user's recommendation is essentially correct; the MAY caveat just makes the safety net explicit.

**OT4 — Structural rationale for reading docarchive by default:** WEAK. The only conceivable rationale — "finding.md might be incomplete; routeman should read docarchive in case finding.md missed something" — directly contradicts CONCLUDE's quality test. The right fix for an incomplete finding.md is to improve the finding, not to compensate by having downstream consumers re-read raw outputs. The three converging sources all point away from default-read; no source supports it.

### 3. Why spec accuracy and cost are the same constraint

The reason `finding.md` is designed to be self-sufficient is the reason routeman shouldn't read `docarchive/` by default. CONCLUDE's "ONLY finding.md" quality test exists because the cost of asking downstream consumers to re-read raw discipline outputs is unbounded. The design contract is compile-once, consume-once. Story 1's flat enumeration violates that contract by asserting a default-read the implicit policy doesn't authorize. At scale — navigation sessions reading 15+ discipline outputs per invocation — the same constraint shows up as the Workspace-overload failure mode. Spec accuracy (the implicit policy from CONCLUDE + canon) and operational cost (Workspace-overload risk) aren't two separate justifications for the corrective; they're the same constraint observed at two layers, the contract layer and the resource layer.

### 4. Acknowledgment

Story 1 was written by this session's agent as part of the prior `routeman_input_dependency_question` finding's COULD-1 amendment work; the over-claim is a recent artifact, not an inherited commitment. The same systematic-narrowing pattern flagged in the 15-48 finding's Q7 frontier (`devdocs/inquiries/2026-05-28_15-48__routeman_input_dependency_question/finding.md` → Research Frontiers) has now produced a second observed instance, supplying additional evidence for the wider standing question without resolving it.

## Next Actions

### MUST

- **MUST-1 — Correct Story 1 in `devdocs/routeman_user_stories.md`.**
  - **What:** Replace Story 1's "Input routeman reads" list (lines 15-20 of the current file) with a re-tiered version that uses the formal 4-tier vocabulary explicitly, distinguishing default-read files from caller-supplied opt-in files. The recommended replacement:

    ```
    **Input routeman reads:**

    *Default reads (per `references/routeman.md` §3.2 + CONCLUDE's finding.md self-sufficiency design — tiers: SHOULD for context, MANDATORY-WHEN-AVAILABLE for finding.md):*
    - `_branch.md` — the question + goal that framed the inquiry. (SHOULD)
    - `finding.md` — the settled understanding + the 5 open questions + the 3 failure cases + the 2 open decisions + the Next Actions. (MANDATORY-WHEN-AVAILABLE)

    *Available on-demand (tier: MAY — caller-supplied opt-in; routeman doesn't autonomously read):*
    - `docarchive/` — the 5 archived discipline outputs (surfacing / sensemaking / decomposition / innovation / critique). These supply the reasoning trail CONCLUDE distilled into `finding.md`. Routeman reads them only if the caller explicitly references docarchive content as part of the input.
    ```
  - **Who:** the user, when next editing the user_stories file.
  - **Gate:** observable — when the user next opens the file or asks the agent to apply this corrective.
  - **Why:** the flat enumeration in the current Story 1 structurally claims default-read of `docarchive/` and contradicts the implicit policy; correcting it prevents the same misreading in future reader contexts and supplies the structural frame downstream pieces depend on. A strict lighter-touch alternative — simply dropping the docarchive bullet — is also acceptable; the re-tiered version is preferred because it teaches the policy frame rather than just hiding the violation.

### COULD

- **COULD-1 — Amend `references/routeman.md` §3.2 to close the generic-mode read-policy gap.**
  - **What:** Insert a new sub-section after the existing §3.2.5, following the established §3.2.4/§3.2.5 prose pattern (one sub-section per file, with policy + failure handling per state). Recommended structure:

    ```
    #### Reading inquiry artifacts in generic mode

    When `/routeman` is invoked in generic mode on a concluded inquiry folder
    (produced by `/MVLw`, `/MVL+`, or `/MVL`), the per-file read-policy below
    applies. These rules complement the directional-mode policies in §3.2.4
    and §3.2.5 (which remain unchanged).

    ##### Reading `finding.md` in generic mode

    Policy: **MANDATORY-WHEN-AVAILABLE**. CONCLUDE designs `finding.md` to be
    a single argumentative artifact that consolidates the inquiry's discipline
    outputs (see `/Users/ns/.claude/skills/protocols/conclude.md` Step 2 + the
    "ONLY finding.md" quality test at line 297). Failure handling per state:

    - **Absent** (folder is not a CONCLUDEd inquiry; or input is a non-inquiry
      project folder): FLAG `MissingFindingFile` in telemetry. Operate from
      `_branch.md` + raw text + other available files per SKILL.md Step 1.
    - **Present-but-malformed AND state reconstruction depends on it:** HALT
      with `MalformedRequiredInput`.
    - **Present-but-malformed but state can be reconstructed from other
      sources:** FLAG and proceed.

    ##### Reading `docarchive/` in generic mode

    Policy: **MAY**. Routeman does not autonomously read docarchive content;
    the canon-doc design intent
    (`docs/canon/runtime_environment/folder_based.md` line 250-251, 328)
    frames docarchive as the audit/reasoning trail consulted on-demand. A
    caller may explicitly supply a docarchive file path as an input parameter
    when audit-trail content is needed for the current enumeration; routeman
    then reads only the supplied file per SKILL.md Step 1. Default behavior
    reads only the SHOULD/MANDATORY-WHEN-AVAILABLE files (above + §3.2.4 /
    §3.2.5 as applicable).

    ##### Reading `_branch.md` in generic mode

    Policy: **SHOULD**. Provides the question + goal context preserved by the
    runner. Failure handling: FLAG and proceed-without on absence or
    malformation.

    ##### Reading `_route.md` in generic mode

    Policy: **SHOULD** — same as the directional-mode policy in §3.2.5
    (mode-independent for routeman's own invocation history).
    ```
  - **Who:** the user, when next addressing routeman spec edits.
  - **Gate:** condition-bound — when the user next opens `references/routeman.md` for editing OR when a follow-up inquiry produces evidence the implicit policy continues to mislead future authoring contexts.
  - **Why:** the 14-49 finding's named open refinement trigger ("If generic-mode read policy proves to require a different vocabulary...") is precisely the situation this inquiry surfaces; closing the gap explicitly prevents future agents from making the same over-claim by removing the implicit-policy-discoverability dependency. The amendment is SHOULD (user-decidable) rather than MUST because the MUST corrective at Story 1 already addresses the immediate confusion; the spec amendment is the systematic-prevention layer.
  - **Depends-on:** none — this COULD is independent of MUST-1's resolution.

### DEFERRED

(none.)

## Reasoning

### Why this verdict held

The verdict — Story 1 over-claimed; implicit policy converges from three sources; two-layer corrective — survived adversarial testing across eight dimensions including the project-specific risk axis "meta-fidelity" (the corrective for an over-claim must not itself over-claim).

- **Spec-grounding rigor.** Every load-bearing claim is cited: spec silence on finding.md/docarchive confirmed via grep; CONCLUDE quality test cited verbatim at line 297; canon doc reader workflow cited at lines 250-251 and 328; 14-49 finding's named open refinement trigger cited at line 263.

- **Meta-fidelity.** The corrective's central claim is "the implicit policy" — explicitly hedged. The finding does not claim the spec says "four tiers for four files"; it claims the spec is silent and that three independent sources converge on an implicit policy. The "implicit" framing IS the structural guard against replicating the over-claim error pattern.

- **User-perspective survival.** The most pointed adversarial reading — "the spec doesn't say four tiers for these four files; you're inventing the policy and calling it implicit" — was tested at the implicit-policy-table piece and survived via the three-source convergence + the hedged framing.

### Alternatives considered and killed

- **"Story 1 is roughly right; the verdict 'OVER-CLAIMED' is too strong; 'imprecise' would suffice."** KILLED. Story 1's flat enumeration structurally asserts default-read; default-read of docarchive contradicts the implicit policy. The structural claim is wrong on its load-bearing axis (default-read vs on-demand), not roughly-right-but-fuzzy. "Imprecise" understates the diagnosis.

- **"REMOVE-only corrective for Story 1 (drop the docarchive bullet without re-tiering)."** PRESERVED AS ALTERNATIVE. REMOVE is genuinely lighter-touch and is acceptable for users who prefer strict minimal change. The recommendation is REPAIR because the re-tiered version teaches the policy frame to future readers (a future author of Story 11 or Story 12 who reads the existing list would learn the implicit policy from the structural tiering). REMOVE leaves the policy frame implicit; REPAIR makes it visible.

- **"Forbid docarchive reads entirely (omit the MAY tier)."** KILLED. There are legitimate audit cases where a caller might explicitly supply a docarchive file. The MAY tier preserves the on-demand path without authorizing default-read. Removing MAY would over-correct and forbid legitimate use cases.

- **"Spec amendment is academic; future agents will derive the policy from CONCLUDE + canon."** KILLED. This session's agent, with access to CONCLUDE + canon + the 14-49 finding, made the over-claim in Story 1. The empirical evidence is the over-claim itself. Implicit-policy-reliance failed in the very session where it should have succeeded.

- **"No corrective is needed; the user_stories file is illustrative and the spec is the truth."** KILLED. The 15-48 finding's COULD-1 explicitly amended user_stories to widen the input-shape framing precisely because illustrative narrowing causes downstream confusion. This inquiry produces an analogous corrective at the docarchive-read axis.

- **"REPAIR using plain-language tier labels ('Default reads' / 'Available on-demand')."** REFINED to use formal vocabulary (SHOULD / MAY / MANDATORY-WHEN-AVAILABLE) explicitly per row, with plain-language context, so the corrective aligns with the spec's vocabulary instead of inventing parallel labels.

- **"Spec amendment as a single multi-file sub-section."** REFINED to one sub-section per file, matching the existing §3.2.4 / §3.2.5 prose pattern, so the amendment doesn't break the established structure.

### Refinements applied during Critique

Three light REFINEs surfaced during adversarial testing and were applied to the deliverable before this finding was assembled:

- **Story 1 corrective uses formal tier vocabulary** (SHOULD / MAY / MANDATORY-WHEN-AVAILABLE) inline rather than the agent-coined "Default reads" / "Available on-demand" labels — aligns with spec vocabulary.
- **Spec amendment restructured to one sub-section per file** matching the §3.2.4 / §3.2.5 prose pattern — preserves the established spec structure.
- **Acknowledgment tightened from three sentences to two** — preserves the evidence preservation (over-claim origin + Q7 frontier link) without self-conscious prose.

## Open Questions

### Research Frontiers

- **Does the agent's mental model SYSTEMATICALLY narrow routeman to inquiry-folder contexts?** This question stands as the 15-48 finding's Q7 frontier (`devdocs/inquiries/2026-05-28_15-48__routeman_input_dependency_question/finding.md` → Research Frontiers). This finding adds a second observed instance — Story 1's docarchive over-claim — to the supporting evidence base. The first observed instance was the agent's "routeman has nothing to enumerate from" framing several hours earlier in that conversation. The recurrence across two distinct documentation contexts — written several hours apart, both authored by the agent in the same session-family — strengthens the supporting evidence without resolving the wider verdict. A future inquiry, given a third independent instance OR sufficient cross-evidence, could promote the verdict from "flagged with two observed instances" to "diagnosed systematic." This finding does NOT pre-commit to that promotion; the scope disclaimer is preserved firm.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
/MVLw

in devdocs/routeman_user_stories.md u said 

- The 5 archived discipline outputs in `docarchive/` — supplementary cycle content.
is also read. 

i am suspicious. this will bloat the naviation session context.. routeman only should read finding.md imo

lets discuss this further
```

</details>
