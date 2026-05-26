---
status: active
continues_from: devdocs/inquiries/2026-05-12_19-43__navigate_is_explore_with_destination_test/finding.md
continues_from: devdocs/inquiries/2026-05-12_20-31__loop_diagnose__navigate_4_operations_error/finding.md
related: devdocs/inquiries/2026-05-12_11-40__navigation_factoring_question/finding.md
related: devdocs/inquiries/2026-05-12_00-40__explore_discipline_from_scratch/finding.md
related: devdocs/inquiries/2026-05-12_10-06__explore_project_end_goal_design/finding.md
related: devdocs/inquiries/2026-05-12_11-14__explore_surfacing_mechanism_depth/finding.md
related: devdocs/inquiries/2026-05-12_12-30__explore_reference_old_vs_new/finding.md
---

# Finding: /navigate IS justified as a separate discipline, but its current spec is over-engineered — recommend REFINE as lean extension document

## Question

From `_branch.md`: *Given that iteration 2 of the 2026-05-12_19-43 inquiry found `/navigate` differs from `/explore` on only TWO structural axes — destination-bias and prescriptive annotation content type — does `/navigate` warrant being maintained as a separate discipline in the project's discipline taxonomy, or should it be folded into `/explore`?*

The user phrased the underlying intuition as: *"so now i am thinking, if navigate even deserves to be seperate discipline?"*

Goal: a structurally-grounded verdict with reasoning, alternatives, and migration steps.

---

## Finding Summary

- **`/navigate` IS justified as a separate discipline.** Its `/navigate`-specific content — the 16-type taxonomy, the route-card structure (~12 per-route fields), the prescriptive Guide annotation layer with WHY pointers, the specialized failure modes, the When-to-Navigate / Auto-Derivable-Types sections — is substantial (approximately 60% of the current spec) and structurally distinct from anything in `/explore`. Plus pedagogical clarity: "`/navigate`" is a clearer mental model for project users than "`/explore` in next-move mode with destination-bias and prescriptive annotation."

- **BUT the current `/navigate` canonical spec at `homegrown/navigation/references/navigation.md` is over-engineered.** It is approximately 490 lines, of which ~180 are structural-anatomy boilerplate (Identity / Components / Process / Quality / Output sections that are common to all discipline specs and largely redundant with `/explore` for the parts /navigate inherits). The structurally clean answer is to rewrite as a lean extension document — approximately 280-330 lines — that transcludes `/explore`'s mechanics by reference rather than restating them, while retaining the substantial /navigate-specific content fully.

- **Recommendation: REFINE the spec as a lean extension document.** Open the spec with the specialization-plus-additions framing made explicit ("`/navigate` is `/explore`-specialization-over-the-next-move-space with destination-bias and prescriptive Guide annotation layer"). Transclude `/explore`'s scan-signal-probe mechanics, Step 0 declarations, descriptive annotation layers, and shared failure modes by reference. Retain in full: the 16-type taxonomy section; the route-card structure with all 12 per-route fields; the Adaptive Guidance section (describing prescriptive content); the /navigate-specific failure modes; the When-to-Navigate and Auto-Derivable Types sections.

- **The user's question is ambiguous between two readings, and the recommendation addresses both.** "Does /navigate deserve to be a separate discipline?" reads either as a LEGITIMACY question ("is the separateness STRUCTURALLY justified?" — answer: YES) or as a PARSIMONY question ("is the CURRENT spec over-engineered?" — answer: YES partially, fixable via lean rewrite). The recommendation answers both: legitimacy preserved + parsimony addressed via H3 (REFINE-lean).

- **Three alternatives are presented for users who reach a different verdict.** H1 (KEEP at current state — zero migration cost; preserves over-engineered spec). H2 (FOLD into `/explore` — eliminates /navigate as a separate spec; expands /explore's identity to include prescriptive annotation; ballooning /explore's spec from ~500 to ~800 lines; migration touches ~5 prior findings). H4 (REFINE as runner pattern analogous to `/staged-explore` — structurally awkward because `/navigate`'s prescriptive Guide content goes beyond pure orchestration). H1 is the do-nothing fallback; H2 is appropriate if the user rejects /navigate's discipline status entirely; H4 is generally not recommended due to the orchestrator-vs-content-generator hybrid awkwardness.

- **The recommendation applies the LOOP_DIAGNOSE Candidate A canonical-spec-loading pattern.** Both canonical specs (`/explore` at `homegrown/explore/references/explore.md` and `/navigate` at `homegrown/navigation/references/navigation.md`) were loaded for this inquiry. The lean rewrite preserves /navigate's canonical-spec status (path unchanged; the lean spec replaces the verbose one at the same location), so the forthcoming LOOP_DIAGNOSE Candidate A protocol step (which would auto-load canonical specs of analyzed disciplines) works seamlessly.

- **Migration scope is bounded.** Rewrite one file (`homegrown/navigation/references/navigation.md`); no cross-reference updates needed across the inquiry archive (path unchanged); no `/explore` spec changes; no `/meta-loop` or `/MVL+` cascade. Estimated work: approximately 2-5 hours for a careful rewrite. Content-loss risk is mitigated by keeping the current spec available as `navigation_v1.md` (historical reference) for approximately 3 months post-adoption.

- **This finding might be wrong.** The loop has been corrected multiple times in this session. If a future user observation reveals that the lean rewrite loses needed content, or that H1/H2/H4 is actually preferred, iteration 3 should follow the same self-correction pattern this finding's thread has been applying — explicit retraction with structural reasoning, preservation of carry-forward, named-pattern documentation.

---

## Finding

### Surrounding context

The Homegrown project builds formalized thinking disciplines (`/explore`, `/sense-making`, `/comprehend`, `/decompose`, `/innovate`, `/td-critique`, `/navigate`). Each has a canonical spec at `homegrown/<discipline>/references/<discipline>.md`. Across the recent inquiry thread, the project's understanding of `/navigate` has been refined through 4 iterations (the 16-59 holistic-understanding finding; the 19-43 inquiry's two iterations testing `/navigate = /explore + destination`; the 20-31 LOOP_DIAGNOSE that diagnosed the iter-1 failure). Iteration 2 of the 19-43 inquiry established that `/navigate` differs from `/explore` on only TWO structural axes: (1) destination-bias (route preference toward end-state), and (2) prescriptive annotation content type (the Guide layer's prescriptive per-route pointers, categorically different from `/explore`'s purely-descriptive annotation layers). This raised the present question: with only 2 structural differences, does `/navigate` warrant being maintained as a separate discipline?

### 1. The verdict: /navigate IS justified as a separate discipline, on three structural grounds

**Ground 1 — Substantial /navigate-specific content.** The current `/navigate` spec contains substantial content that has no analog in `/explore`'s spec:
- The 16-type taxonomy (~50 lines) — categorical annotation vocabulary for next-move-space.
- The route-card structure with ~12 per-route fields (~80 lines) — `/navigate`-specific output format.
- The Adaptive Guidance section (~30 lines) — describes prescriptive Guide content with mode declarations and per-pointer WHYs.
- Specialized failure modes (~30 lines) — drift modes specific to `/navigate`'s annotation content.
- When-to-Navigate section (~20 lines) — usage patterns.
- Auto-Derivable vs Human-Judgment Types section (~30 lines) — graduated autonomy boundary specific to `/navigate`.

Together this is approximately 240 lines of `/navigate`-specific content — roughly 50% of the current 490-line spec. Folding this content into `/explore` (option H2) would balloon `/explore`'s spec from ~500 to ~800 lines and would force `/explore`'s identity to expand to include prescriptive annotation, which categorically distorts `/explore`'s "purposive open-mode surfacing" verb-meaning.

**Ground 2 — Pedagogical clarity.** "/navigate" is a clearer mental model for project users than "`/explore` in next-move mode with destination-bias and prescriptive annotation." When a future inquiry needs to enumerate next-move routes, the user reaches for `/navigate` — a discrete, named operation. The mental model "use `/explore` with these 6 parameter settings" is harder to teach and remember.

**Ground 3 — Discrete reference in project structure.** `/navigate` appears as a discrete cognitive operation in the project's runner taxonomy and in `/meta-loop`'s phase structure. Folding `/navigate` into `/explore` would require updating these references and would lose the discrete-named-operation property.

These three grounds together justify separate-discipline status. None of them requires the FULL canonical spec at its current size — they justify a discipline, not a verbose spec.

### 2. The over-engineering problem

The current `/navigate` spec at `homegrown/navigation/references/navigation.md` is approximately 490 lines. Approximately 180 of those lines are structural-anatomy boilerplate (Identity / Components / Process / Quality / Output sections common to all discipline specs) that largely restates content also present in `/explore`'s spec for the parts `/navigate` inherits. The remaining ~310 lines are `/navigate`-specific (the substantial content listed in Section 1 above, plus headers and connective text).

This over-engineering has costs:
- **Reader cognitive load.** Project users reading the `/navigate` spec must wade through inherited content that's also in `/explore`'s spec.
- **Spec-loading cost.** When LOOP_DIAGNOSE Candidate A (the canonical-spec-loading protocol step) is adopted, longer specs cost more context budget. A leaner spec is more practical.
- **Implicit specialization relationship.** The current spec doesn't make the specialization-plus-additions relationship with `/explore` explicit. Iteration 1 of the 19-43 inquiry demonstrated that this implicitness can mislead the loop (the loop missed that Movement, Guide, and Continuation are annotation layers within `/navigate`'s single enumeration operation, not separate operations).

### 3. The recommendation: REFINE as lean extension document

**Rewrite** `homegrown/navigation/references/navigation.md` as a lean extension document of approximately 280-330 lines. The rewrite preserves the canonical-spec status (same file path; same authoritative role) and the `/navigate`-specific content; it removes the structural-anatomy boilerplate in favor of transclusion references.

**Lean spec structure (approximate target):**

- **Identity** (~30 lines). Opening paragraph states: "`/navigate` is a specialization of `/explore` over the next-move-space, with two structural additions: (1) destination-bias (route preference toward end-state at the navigation-invocation level), and (2) the prescriptive Guide annotation layer (per-route pointers with WHY that recommend next-cycle actions; categorically different from `/explore`'s purely-descriptive annotation layers). `/explore`'s scan-signal-probe mechanics, Step 0 declarations, the 5 descriptive annotation layers, and the shared failure modes are inherited by transclusion from `homegrown/explore/references/explore.md`. The following sections describe `/navigate`-specific additions."

- **The 16-Type Taxonomy** (~50 lines, retained from current spec). The categorical annotation vocabulary for next-move-space routes.

- **Navigation Item Structure / Route-card** (~80 lines, retained). All ~12 per-route fields: Direction, Goal, Type, Priority, Status, Blocked-by, Purpose, Movement, Unlocks, WHY, Guidance, Continuation note.

- **Adaptive Guidance section** (~30 lines, retained). Describes the prescriptive Guide annotation layer with mode declarations (none / compact / full / expand-on-selection) and per-pointer WHYs.

- **Process Model** (~30 lines, lean). References `/explore`'s process by transclusion; states the `/navigate`-specific Step 1 (Read the Cycle's Output) and the reachability check; lists Steps 2-6 as light additions.

- **Failure Modes** (~30 lines). `/navigate`-specific failure modes only; `/explore`'s 11 failure modes referenced rather than restated.

- **Telemetry** (~20 lines).

- **When to Navigate + Auto-Derivable vs Human-Judgment Types** (~30 lines, retained).

Estimated total: approximately 280-330 lines (with some flexibility — actual line count may land 300-350 depending on transition phrases and cross-references).

**The line-count target is approximate, not a hard constraint.** What matters structurally is: (a) the specialization-plus-additions framing is made explicit in the opening section; (b) transclusion references replace restatement of `/explore`'s mechanics; (c) `/navigate`-specific content is preserved fully; (d) the spec is loadable in a single read by `/MVL+` inquiries.

### 4. Acknowledging the user-question ambiguity

The user wrote "if navigate even deserves to be seperate discipline?" This is structurally ambiguous between two readings:

- **Legitimacy reading:** "is /navigate's separateness STRUCTURALLY justified?" If this is the user's reading, H2 (FOLD) or H4 (runner pattern) might be more responsive. The recommendation's answer to legitimacy is YES (Section 1 above gives three structural grounds).

- **Parsimony reading:** "is /navigate's CURRENT spec over-engineered given that most of its operations are inherited from /explore?" If this is the user's reading, H3 (REFINE-lean) is directly responsive. The recommendation's answer is YES partially (Section 2 above quantifies the over-engineering at approximately 180 lines of boilerplate).

The recommendation (H3) addresses parsimony while preserving structural legitimacy. If the user's intent was the legitimacy reading and they reject /navigate's discipline status entirely, H2 or H4 remain available as alternatives — see Section 5.

### 5. Alternatives

For users who prefer a different verdict:

**H1 — KEEP at current state.** Do nothing. Zero migration cost. The over-engineered spec remains; readers continue to wade through inherited content. Choose H1 if the migration cost is the decisive factor.

**H2 — FOLD into /explore.** Delete `/navigate`'s spec file; expand `/explore`'s spec to include destination-bias as a Step 0 declaration, prescriptive Guide as a new annotation layer type, the 16-type taxonomy as a /navigate-mode annotation vocabulary, and the route-card as a /navigate-mode output template. Costs: `/explore`'s identity expands from "purposive open-mode surfacing" to include prescription; `/explore` spec balloons from ~500 to ~800 lines; ~5 prior findings need cross-reference updates. Choose H2 if you reject /navigate's discipline status entirely.

**H4 — REFINE as runner pattern.** Move `/navigate`'s content to `homegrown/runners/navigation.md`, analogous to `/staged-explore`. Costs: `/navigate`-as-runner becomes a hybrid orchestrator + content-generator (Guide pointers are prescriptive content, not pure orchestration of `/explore` invocations), which is structurally awkward — `/staged-explore` doesn't have this problem because it only loops `/explore` without adding new content. Migration touches ~5 prior findings. Not recommended.

### 6. Migration steps for H3 (recommended)

1. **Backup current spec.** Copy `homegrown/navigation/references/navigation.md` to `homegrown/navigation/references/navigation_v1.md` as historical reference. Keep this file for approximately 3 months post-adoption.

2. **Rewrite the canonical-path spec.** Replace `homegrown/navigation/references/navigation.md` with the lean extension document per the structure sketched in Section 3.

3. **No other files change.** No cross-reference updates needed (path unchanged); no `/explore` spec changes; no `/meta-loop` or `/MVL+` cascade.

4. **Estimated work:** approximately 2-5 hours for a careful rewrite with reference checks. The rewrite is bounded to one file.

5. **Validation:** after the rewrite, the lean spec should be loadable in a single read by `/MVL+` inquiries, and the specialization-plus-additions framing should be explicit in the opening Identity section.

### 7. LOOP_DIAGNOSE Candidate A compatibility

This inquiry applied the LOOP_DIAGNOSE Candidate A canonical-spec-loading pattern: both `/explore`'s canonical spec at `homegrown/explore/references/explore.md` and `/navigate`'s canonical spec at `homegrown/navigation/references/navigation.md` were explicitly loaded into the working context before any discipline ran. The structural claims in this finding rest on the canonical content.

H3's lean rewrite preserves `/navigate`'s canonical-spec status (same path; same authoritative role). When Candidate A is adopted as a formal `/MVL+` protocol step (per the 20-31 LOOP_DIAGNOSE finding's recommendation), future inquiries analyzing `/navigate` will load the lean spec — which is easier to load fully than the verbose current spec.

### 8. This finding might be wrong

The same `/MVL+` loop that produced multiple corrected commitments earlier in this session is producing this finding. The structural reasoning rests on canonical specs and bounded migration analysis, but the loop's track record is mixed.

If a future user observation reveals an error in this finding's claims — for instance, that the lean rewrite loses needed content, or that H2 or H4 is actually preferred — iteration 3 should follow the same self-correction pattern this inquiry's thread has been applying: explicit retraction with structural reasoning; preservation of carry-forward; named-pattern documentation; process recommendation for the loop.

Specifically watch for: whether the lean spec's transclusion references are sufficient for readers to understand `/navigate` without consulting `/explore` separately; whether the line-count target proves realistic when actual rewriting begins; whether the user's structural intuition aligns with H3 or whether they preferred H2/H4 all along.

---

## Next Actions

### MUST

- **What:** Adopt H3 — rewrite `homegrown/navigation/references/navigation.md` as a lean extension document of approximately 280-330 lines per the structure sketched in Section 3. Preserve the current spec as `navigation_v1.md` for approximately 3 months as historical reference.
  - **Who:** user (or maintainer authorized to edit `homegrown/`).
  - **Gate:** none — adoption-ready; user has decision authority on whether to proceed with H3 or pick H1/H2/H4.
  - **Why:** the leanness benefit (approximately 200 lines of boilerplate replaced with transclusion + explicit specialization-plus-additions framing + LOOP_DIAGNOSE Candidate A compatibility) outweighs the bounded migration cost (~2-5 hours; one file edit; no cascade).

### COULD

- **What:** Apply the lean-extension-document refactoring pattern to other disciplines that are specializations (if/when other specializations are identified).
  - **Who:** future inquiry authors.
  - **Gate:** when a similar over-engineering pattern is observed in another discipline's spec.
  - **Why:** the H3 template here may transfer.

### DEFERRED

- **What:** A project-wide review of all 7 discipline specs for similar over-engineering patterns (do `/sense-making`, `/comprehend`, `/decompose`, `/innovate`, `/td-critique` also have boilerplate-heavy specs that could be leaner?).
  - **Gate:** activate after `/navigate`'s lean rewrite stabilizes (approximately 3 months post-adoption) AND the lean-spec pattern proves successful in practice.
  - **Why (if revived):** a project-wide review could reduce cognitive load and improve canonical-spec loading efficiency for all disciplines.

- **All prior /explore-thread deferred items** remain active.

---

## Reasoning

### Why H3 over H1 (status quo)

H1's affirmative argument is "zero migration cost." This is real but bounded by the leanness gain.

H3 was tested against H1 specifically (not chosen by elimination):
- **Test 1 — Specialization-explicitness.** Iteration 1 of the 19-43 inquiry demonstrated that the implicit specialization relationship in /navigate's spec allowed the loop to mis-attribute /navigate's operations. A lean spec that makes specialization-plus-additions EXPLICIT reduces this risk. H3 wins on this test; H1 fails.
- **Test 2 — Context elicitation gap reduction.** The 20-31 LOOP_DIAGNOSE diagnosed the iter-1 failure as a context elicitation gap (canonical content not loaded). A leaner /navigate spec reduces the surface area where this gap can occur. H3 wins; H1 fails.
- **Test 3 — Forward-compatibility with LOOP_DIAGNOSE Candidate A.** When Candidate A is adopted as a protocol step, a leaner spec is more practical to load into working context. H3 wins; H1 is neutral.

The structural reasoning is independent of the loop's leaner-preference pattern from prior corrections. The recommendation rests on tests 1-3, not on bias.

### Why H3 over H2 (FOLD)

H2 eliminates /navigate as a separate spec; expands /explore's identity to include prescriptive annotation.

- /explore's spec balloons (~500 → ~800 lines). The leanness goal is undermined.
- /explore's verb-meaning expands from "purposive open-mode surfacing" to include prescription. This is identity-creep.
- The 16-type taxonomy and route-card structure are /navigate-specific; placing them inside /explore's spec makes /explore territory-specialized in places.
- Migration touches ~5 prior findings (cross-reference updates).

H2 is viable if the user rejects /navigate's discipline status entirely. Otherwise, H3 wins on parsimony + identity-preservation + migration cost.

### Why H3 over H4 (REFINE as runner)

H4 re-classifies /navigate as a runner pattern analogous to /staged-explore.

- /staged-explore is a pure orchestrator (it loops /explore invocations without adding new content).
- /navigate's Guide layer produces prescriptive content that goes beyond pure orchestration. /navigate-as-runner becomes a hybrid orchestrator + content-generator.
- The hybrid status is structurally awkward — neither a clean runner nor a clean discipline.

H4 is not recommended due to the hybrid awkwardness.

### Killed candidates (from innovation)

| Candidate | Reasoning |
|---|---|
| No-rewrite (re-affirm H1) | H1 was tested vs H3 on structural grounds; H3 won |
| Hybrid H2+H3 | Over-extends; /explore's identity shouldn't expand if /navigate stays separate |
| Eliminate canonical-spec-status constraint | Sensemaking committed H3 which preserves canonical-spec status |
| Dramatic rewrite from scratch | Loses prior accumulated content |

### Contradictions reconciled

- **Exploration's provisional H3 vs sensemaking's verdict committal.** Both converged on H3; sensemaking added the user-question-ambiguity acknowledgment.
- **The leanness benefit was framed as "substantial" early but refined to "modest" in sensemaking.** Resolution: ~200 lines saved + explicitness gain + LOOP_DIAGNOSE compatibility is meaningful but not dramatic; honest framing.

---

## Open Questions

### Monitoring

- **Does the lean spec preserve all needed content after adoption?** Watch for cases where /navigate runs after adoption produce confused outputs that suggest needed content was trimmed. *Observable after:* 3 or more /navigate runs adopting the lean spec.

- **Does the line-count target (~280-330) prove realistic?** The estimate may be optimistic. *Observable after:* the rewrite is attempted; if actual lands above 350, the lean-spec hypothesis may need refinement.

- **Does the user object to H3?** Watch for user signals that they preferred H2 or H4 (the legitimacy reading of "deserve"). *Observable after:* user response to this finding.

### Refinement Triggers

- **Activate the project-wide discipline-spec review** if /navigate's lean rewrite proves successful (3+ months post-adoption with no major content-loss issues) AND user expresses interest in applying the pattern to other disciplines.

- **Revert to H1 (status quo)** if the rewrite reveals that the boilerplate content is actually load-bearing for readers (e.g., if naive readers can't follow the transclusion references).

- **Pivot to H2 or H4** if user explicit signal indicates the legitimacy reading of "deserve" was their intent.

### Research Frontiers

- **Project-wide discipline-spec review pattern.** When /navigate's lean rewrite stabilizes, consider whether other disciplines (`/sense-making`, `/comprehend`, `/decompose`, `/innovate`, `/td-critique`) have similar over-engineering patterns. *Path:* requires per-discipline analysis; may be a long-term project-maintenance effort.

- **Discipline taxonomy formal review.** Is the 7-discipline taxonomy optimal? Are there gaps or redundancies beyond /navigate? *Path:* separate inquiry on the taxonomy structure.

- **Iteration-3 self-correction pattern.** If the user objects to this finding (as they have to prior findings in this session), iteration 3 follows the same self-correction pattern documented across this thread.

### Blocked

- *None.* No identified blocker prevents adoption today.

---

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
/MVL+


u said 

 navigate differs from explore on two structural axes: (1) destination-bias (route preference toward end-state — the user's H1); (2) prescriptive annotation content type (Guide layer's prescriptive pointers, categorically different from explore's purely-descriptive annotation layers 

so now i am thinking, if navigate even deserves to be seperate discipline?
```

</details>
