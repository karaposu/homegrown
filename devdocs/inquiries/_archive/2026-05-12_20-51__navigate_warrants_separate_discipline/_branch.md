# Branch: Does /navigate warrant being a separate discipline?

## Question

Given that iteration 2 of the 19-43 inquiry found `/navigate` differs from `/explore` on only TWO structural axes — (1) destination-bias (route preference toward end-state) and (2) prescriptive annotation content type (the Guide layer's prescriptive pointers, categorically different from `/explore`'s purely-descriptive annotation layers) — does `/navigate` warrant being maintained as a separate discipline in the project's discipline taxonomy, or should it be folded into `/explore` (e.g., as a parameterized invocation pattern or as Step-0 declarations within `/explore`)?

## Goal

A clear, structurally-grounded verdict on `/navigate`'s discipline status:

1. **If KEEP as separate discipline:** what specifically justifies the separateness given only 2 structural differences? Which difference is load-bearing? What would be lost if /navigate were folded?

2. **If FOLD into /explore:** what would the integrated form look like? Step-0 declarations? A specialized invocation mode? Where does the 16-type taxonomy live? Where does the route-card structure live? What migration is required?

3. **If REFINE (third option):** keep /navigate but reframe its role — e.g., as a /runner over /explore (analogous to `/staged-explore`) rather than as a discipline; OR keep as discipline but with a much leaner spec aligned with "one operation: enumeration."

A good answer takes a definite position with structural reasoning on each option, applies the LOOP_DIAGNOSE Candidate-A canonical-spec-loading lesson (canonicals of `/explore` and `/navigate` BOTH loaded), preserves any user concerns from prior inquiries, and provides evaluation gates for whichever option is recommended.

## Scope Check

Question covers goal. The question asks whether /navigate deserves separate status; the goal asks for a verdict among three options (keep / fold / refine).

**Specific-vs-pattern check:** the question is at the specific-discipline level (/navigate vs /explore). The underlying pattern is broader: "what justifies separate discipline status in the project's 7-discipline taxonomy?" Default: address the specific question first; flag the wider pattern as research-frontier if it surfaces during the pipeline.

## Required canonical spec loads (per Candidate A from LOOP_DIAGNOSE)

This inquiry analyzes `/explore` and `/navigate`'s structures. Both canonical specs MUST be loaded into the working context before any discipline runs:

- `/Users/ns/Desktop/projects/native/homegrown/explore/references/explore.md` — `/explore` canonical spec (territory-agnostic open-mode surfacing; 5 annotation layers; D0-D4 depth ladder; 11 failure modes).
- `/Users/ns/Desktop/projects/native/homegrown/navigation/references/navigation.md` — `/navigate` canonical spec (ONE structural operation: Enumeration; 5-entry NOT-list including Decision-making; route-card structure with ~12 per-route fields; 16-type taxonomy; specialized failure modes).

Plus reference points (the recent inquiry findings that established the 2-difference picture):
- `devdocs/inquiries/2026-05-12_19-43__navigate_is_explore_with_destination_test/finding.md` (iter-2 of the 19-43 inquiry; established the 2-structural-differences picture).
- `devdocs/inquiries/2026-05-12_11-40__navigation_factoring_question/finding.md` (the factoring finding; specialization framing).
- `devdocs/inquiries/2026-05-12_20-31__loop_diagnose__navigate_4_operations_error/finding.md` (the LOOP_DIAGNOSE that recommended canonical-spec-loading).

## Operative constraints

1. **The canonical /navigate spec says ONE structural operation: Enumeration.** Per `homegrown/navigation/references/navigation.md` lines 27-29. This is authoritative.

2. **The canonical /explore spec is territory-agnostic.** Per `homegrown/explore/references/explore.md`. /explore accepts any unknown content space as territory; the territory is declared at Step 0.

3. **The project has 7 disciplines currently.** /explore, /sense-making, /comprehend, /decompose, /innovate, /td-critique, /navigate. Each has a canonical spec at `homegrown/<discipline>/references/<discipline>.md`.

4. **/staged-explore is a RUNNER, not a discipline.** Per its docs at `homegrown/runners/staged_explore.md`. It orchestrates multiple /explore invocations at progressive resolutions.

5. **Workspace invariant + transclusion-at-spec-time holds.** Any restructure must preserve these.

6. **Two structural differences established (iter-2 of 19-43):**
   - Destination-bias (route preference toward end-state).
   - Prescriptive annotation content type (Guide layer with prescriptive pointers; categorically different from /explore's purely-descriptive annotation layers).
   Plus parameter specialization (territory = next-move-space; depth = typically D3-D4).

7. **User's prior structural intuitions** (carried forward from inquiry thread):
   - Navigation's job is to LIST (enumerate); not to pick.
   - Selection belongs at the runner level (/meta-loop or human at L0-L1).
   - Movement-articulation, Guide, Continuation memory are annotation layers, not operations.
   - The user has been right multiple times in this session's correction sequence; trust their structural intuitions.

## Working hypotheses (to be tested)

- **H1 — KEEP as separate discipline (current state preserved).** /navigate warrants discipline status because: prescriptive annotation content type is categorically distinct from /explore's purely-descriptive annotations; the 16-type taxonomy is /navigate-specific vocabulary; the route-card output format is /navigate-specific; specialized failure modes exist; project precedent.

- **H2 — FOLD into /explore.** /navigate is /explore-with-destination-bias + prescriptive-annotation-layer + 16-type-taxonomy-as-annotation; all of these could be Step-0 declarations or parameterized invocation modes within /explore. Eliminate /navigate as a separate spec.

- **H3 — REFINE: keep /navigate as a discipline but make its spec much leaner.** Recognize that /navigate IS structurally /explore-specialization with bounded additions; rewrite /navigate's spec to be a single-page extension document referencing /explore's canonical spec rather than a full standalone spec.

- **H4 — REFINE: re-classify /navigate as a runner pattern over /explore (analogous to /staged-explore).** /navigate would become a runner (not a discipline) that invokes /explore with specific Step-0 parameters (territory=next-move-space; destination-bias=yes; annotation-types=descriptive+prescriptive).

- **H5 — Test the categorical-distinctness of prescriptive annotation.** Is prescriptive vs descriptive annotation REALLY categorical, or is it a content-type that /explore could naturally include? If /explore could include prescriptive annotations without losing its identity, the 2nd structural difference dissolves into a parameter.

- **H6 — Project taxonomy considerations.** What's the cost of having 7 disciplines vs 6? Does discipline-bloat have a real cognitive cost for project users? Does the 16-type taxonomy and route-card structure constitute enough specialized content to warrant a separate file/spec?

## Relationships

- CONTINUES FROM: `devdocs/inquiries/2026-05-12_19-43__navigate_is_explore_with_destination_test/finding.md` (iter-2; established the 2-structural-differences picture that triggered this question)
- CONTINUES FROM: `devdocs/inquiries/2026-05-12_20-31__loop_diagnose__navigate_4_operations_error/finding.md` (LOOP_DIAGNOSE; recommended canonical-spec-loading which this inquiry applies)
- RELATED: `devdocs/inquiries/2026-05-12_11-40__navigation_factoring_question/finding.md` (the factoring finding; specialization framing — would be affected by FOLD/REFINE verdict)
- RELATED: the 4 prior /explore-thread findings (background context on /explore's identity)
