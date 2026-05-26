# Branch: Structural Check Tool — Remove or Keep

## Question
Should the `tools/structural_check.sh` mechanism (referenced by `homegrown/MVL+/SKILL.md` and `homegrown/MVL/SKILL.md` in the Discipline Transition Protocol step 4, but never built and absent from the repo on disk) be **removed entirely** from the harness — with the LLM-performed structural check (currently the documented fallback when the script is unavailable) elevated to canonical status — or **kept and built** as the automated arm of the Primitive RC quality-awareness layer?

## Goal
A reasoned, committed decision (REMOVE / KEEP-AND-BUILD / HYBRID) with:
- An explicit understanding of what each option commits to operationally — what is gained, what is lost, what becomes a maintenance burden.
- Surfacing of any unexamined assumptions in the user's "remove it" prior. The user's reasoning is: (a) "we havent had structural_check.sh from the beginning" (factual: never built); (b) "LLM was doing itself the check" (observation: manual fallback has been working); (c) "structure is ever-changing" (meaning-level claim); (d) "if we dont [remove it] then we have to constantly edit it" (maintenance-cost claim). Each of these is a load-bearing premise that the inquiry must test, not just accept.
- An explicit edit plan if the decision is REMOVE: which specs reference `tools/structural_check.sh` and need the references updated.
- An explicit build plan if the decision is KEEP-AND-BUILD: what the script should check (which discipline outputs' required sections), how its check overlaps with or differs from the regression catalog's Type 5 spec-symptoms (per `enes/regression/desc.md`), and the minimum-complexity form that would justify the build.
- A clear framing of how the decision interacts with the just-completed self-improvement-rate inquiry's Q4c (per-edit spec-symptom check) — whether the two mechanisms are redundant, complementary, or one supersedes the other.

A good answer enables: an immediate follow-up materialization run that either (a) edits the specs to remove the reference (REMOVE decision) OR (b) builds the script + wires it into the runners (KEEP decision), with no re-deliberation required.

## Scope Check
**Question covers goal.** Both halves are present (decision + reasoning + edit/build plan + Q4c interaction).

**Specific-vs-pattern check.** The user named a specific component (`tools/structural_check.sh`). The question is THE SPECIFIC COMPONENT — not the broader pattern of "what other never-built references exist in specs and should similar reasoning apply to them?" Sensemaking should note the broader pattern as a side observation but the inquiry's commitment is to the specific component. If the meaning-level conclusion (structural-check should be LLM-performed) has broader applicability, that's noted; downstream inquiries can pick up the broader cleanup if warranted.

## Layer Commitment

**Primary layer: MEANING.**

The user is questioning what *structural check* IS as a cognitive operation. Their core claim — "structure is ever-changing" — is a meaning-level claim about whether the operation can be operationalized as a static script at all, or whether it is intrinsically a contextual judgment that only an LLM (with full inquiry context) can perform reliably. Once the meaning is settled (script-as-check vs LLM-as-check), the structural choices (which specs to edit, how) and process choices (what the LLM-self-check's procedure should be) follow downstream.

**Other-layer alternatives considered + explicitly out of scope for THIS run:**
- *Structural:* which specific specs reference `tools/structural_check.sh` and need editing, in what order, with what diff. Out of scope here — deferred to a follow-up materialization inquiry once the meaning decision lands.
- *Process:* what the LLM-self-check's exact procedure should be (frequency, granularity, output format, integration with `_state.md` history records). Out of scope here — once we commit that LLM-self-check is canonical, the procedure design is its own piece of work.

**Sequential multi-layer plan:** meaning first (this inquiry). If REMOVE: a follow-up materialization run handles the structural edits (Family II Low-Risk materialization per `enes/materialization_lifecycle.md`). If KEEP-AND-BUILD: a follow-up build-spec inquiry handles the process design (what the script checks; what the LLM-self-check fallback is; how they interact).

## Source Territory

- `homegrown/MVL/SKILL.md` and `homegrown/MVL+/SKILL.md` — the two runner specs that reference `tools/structural_check.sh` in the Discipline Transition Protocol step 4. The Discipline Workspace Invariant section also references "structural check" + provides the fallback rule: *"If `tools/structural_check.sh` is unavailable, manually check the discipline's required structure and record the result in `_state.md`."*
- `enes/evolving_quality_assetment_component.md` — defines the three-layer quality-awareness architecture; Primitive RC is the layer the structural-check tool would inhabit ("Things that are broken. Format violations, missing sections, removed safeguards, internal contradictions, deleted failure modes ... Signal type: Binary — something is structurally wrong or it isn't. No judgment needed.").
- `enes/regression/desc.md` — the regression-symptom catalog. Type 5 (spec symptoms — Shorter-than-before, Missing sections, Weakened language, Removed safeguards) directly overlaps with what `structural_check.sh` would check. The two are either redundant, complementary, or one subsumes the other.
- `devdocs/inquiries/2026-05-15_10-59__project_identity_and_milestone_ordering/finding.md` — the parent. Lists "Primitive RC structural-check tool" as a COULD next-action: *"Ship a `tools/structural_check.sh` tool that the `/MVL+` runner can call after each discipline output to verify required sections are present."*
- `devdocs/inquiries/2026-05-16_00-07__self_improvement_rate_measurable_questions/finding.md` — the sibling. Q4c (per-edit spec-symptom check) is currently Tier 1 today via manual inspection, with a note: *"could be automated when `tools/structural_check.sh` ships."* The decision in this inquiry directly affects Q4c's calibration-state and its operational form.
- Each discipline's spec file (`homegrown/sense-making/SKILL.md`, `homegrown/innovate/SKILL.md`, `homegrown/td-critique/SKILL.md`, `homegrown/explore/SKILL.md`, `homegrown/decompose/SKILL.md`, `homegrown/comprehend/SKILL.md`, `homegrown/reflect/SKILL.md`, `homegrown/navigation/SKILL.md`) and their reference files — the disciplines whose outputs would be the structural-check's target.
- The actual operational history: the manual structural-check fallback has been used in every MVL+ pipeline run in this conversation. Five inquiries × five disciplines per extended pipeline = ~25 manual checks. Were they consistent? Were they discriminating? This is empirical evidence about whether the fallback works in practice.

## Relationship to prior inquiries

This inquiry continues from the parent project-identity inquiry (`devdocs/inquiries/2026-05-15_10-59__project_identity_and_milestone_ordering/finding.md`), specifically its safety substrate framing in Section 5 and its Next Actions COULD item proposing to ship `tools/structural_check.sh`. It also intersects with the sibling self-improvement-rate inquiry (`devdocs/inquiries/2026-05-16_00-07__self_improvement_rate_measurable_questions/finding.md`), specifically Q4c.

## User-given prior (to be tested, not accepted)

The user's stated position:
> "we havent had structural_check.sh from the beginning. and so far LLM was doing itself the check. which makes more sense in my understanding becasue structure is ever changing. and I am thinking removing tools/structural_check.sh logic completely, it is a bloat at this point. and if we dnt then we have to constantly edit it"

This prior is opinionated. The MVL+ pipeline must run honestly — Sensemaking and Critique must construct the strongest counter to "remove it" and test the prior against it. Specifically:
- Is structure ever-changing for *all* discipline outputs, or only some? The MVL+ spec lists explicit required sections per discipline (e.g., explore's "Territory Overview, Inventory, Signal Log, Confidence Map, Frontier State, Gaps and Recommendations" + Telemetry + Self-Assessment). A static check for those sections IS feasible and stable.
- Is the LLM-self-check actually consistent? Different sessions / different LLMs may check differently. The user's claim "LLM was doing itself the check" needs empirical confirmation — was the fallback consistent in the five inquiries already run, or did it drift?
- Is the maintenance-cost claim correct? The script might be small (~50-100 lines) and edited only when discipline specs add/remove required sections — a low-frequency event.
- Does removing the reference now lose the optionality of building it later when LLM-self-check proves unreliable (or proves expensive in context budget)?

These counter-arguments must surface in Sensemaking and survive Critique's adversarial test before the REMOVE decision can be committed.
