# Branch: Atomic Operations as Reusable Protocols?

## Question

The 21-51 finding identified 4 shared atomic operations across Explore and Navigation (input reading; typed-item production; metadata attachment; structured-map assembly) that are ROLE-EQUIVALENT BUT CONTENT-DIFFERENT in each discipline. The user asks: **would it be useful to define these 4 atomic operations as reusable protocols (or some other shared definition mechanism) and reference them from each discipline, rather than each discipline implicitly defining its own version — both to reduce duplication and to enable a more granular understanding of disciplines?**

## Goal

A verdict on whether extracting the 4 atomic operations into a reusable protocol layer is structurally useful for this project, given current evidence. The verdict should answer:

1. Is the move USEFUL — does it deliver value that justifies the new abstraction layer?
2. Is the move PREMATURE — does the current evidence (~2 confirmed TEM-instances; 1 partial) justify extraction, or is N too small?
3. What's the RIGHT SHAPE if the move is useful — separate protocols per operation? An interface contract? A capability registry? Or stay at pattern-doc-only (current 21-51 finding's recommendation)?
4. What's the GRANULAR-UNDERSTANDING benefit the user mentions — does extraction actually improve discipline-design clarity, or just rearrange where the information lives?
5. What are the COSTS and RISKS — over-abstraction; maintenance burden; forcing role-equivalent-but-content-different operations into a too-rigid shared shape.

The user's exact framing: *"i am thinking if we define all these 4 atomic operations (maybe as protocols or sth else idk) and reuse that definition when relevant, instead of duplicating their logic? do you think this would be something useful for us? this way we might understand our discipines in more granular level too?"*

## Scope Check

Question covers goal: YES. The question asks whether protocols/something would be useful; the goal compiles a verdict + the right shape + costs/risks.

**Specific-vs-pattern check:** the user named 4 specific atomic operations (the TEM cluster). The broader pattern is "whether to extract any cross-discipline shared structure into reusable definitions." Default reading: address the specific 4 operations; note the broader pattern as Research Frontier.

**Be careful** (carried from prior inquiry's user instruction):
- Don't over-recommend abstraction. N=2 (Explore + Navigation) confirmed instances. Premature-extraction risk is real.
- Don't under-recommend either. If protocols genuinely clarify discipline structure, that's a real benefit even at N=2.
- Honor the role-equivalent-but-content-different nature. Any extraction must preserve content-differentiation per discipline.
- The 21-51 finding's pattern-doc recommendation is the current baseline; protocols would be a stronger move.

**Self-reference acuity:** HIGH. This inquiry uses the project's disciplines to analyze whether to refactor the project's discipline structure. External anchoring: the 21-51 finding (atomic decomposition; 4-shared + 18-different); the discipline specs; established protocols in `homegrown/protocols/`; user's prose framing.

## Relationships

- CONTINUES FROM: `devdocs/inquiries/2026-05-11_21-51__explore_navigation_atomic_decomposition/finding.md` — that finding identified the 4 shared atomic operations; this inquiry asks if extraction is useful.
- CONTINUES FROM: `devdocs/inquiries/2026-05-11_13-45__is_explore_and_navigation_one_underlying_operation/finding.md` — proposed pattern-doc (TEM) as the current shared-structure mechanism.
- POTENTIALLY AFFECTS: `homegrown/protocols/` (if extraction becomes "protocols"); `homegrown/explore/references/explore.md`; `homegrown/navigation/references/navigation.md`; `devdocs/patterns/typed-enumeration-mapping.md` (potentially supersedes or augments).
- RELATED: `devdocs/inquiries/2026-05-11_14-00__loop_diagnose__why_disciplines_missed_convergence/finding.md` (Layer 2 deferred discipline-spec edits; if protocols emerge, those edits' shape changes).
