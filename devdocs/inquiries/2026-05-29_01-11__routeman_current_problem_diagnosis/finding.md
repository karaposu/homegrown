---
status: active
model: claude-opus-4-8[1m]
effort: max
---
# Finding: Routeman's Current Problem — A Diagnosis

## Question

(from `_branch.md`) Diagnose the current problem with **routeman** — the thinking discipline that enumerates possible next moves from a state toward a goal (invoked as the slash-command `/routeman`; its spec lives at `cognitive_harness/routeman/`). The question has a broad half — *what is the current problem?* — and a specific half flagged by the most recent prior inquiry: *why does routeman fail to be an individual discipline that can be run anywhere, in any context?*

**Goal:** a precise root-cause (not a list of surface symptoms), grounded in the actual spec text and the project's own canon, sharp enough to aim a follow-on fix, and contrasted against a matured discipline (sense-making) to show the gap. The diagnosis must re-test — not simply inherit — the conclusion of the most recent prior inquiry rather than parrot it.

## Finding Summary

- **The root problem is a category error in routeman's spec: it bakes routeman's *typical loop-role* into routeman's *identity definition*, as a hard precondition for the operation to run at all.** A "category error" here means putting one kind of content (where-and-when the discipline is usually called — which belongs to the loop/runner) into the wrong place (the section that defines what the discipline fundamentally *is*).

- **Three identity passages carry the defect**, all in the spec's reference file `cognitive_harness/routeman/references/routeman.md`:
  - §1.2: *"Routeman is the boundary cognitive operation that consumes the artifacts of a completed cognitive cycle… Without prior cognitive work producing a state worth enumerating from, routeman has nothing to enumerate."* (a necessity claim — "without X, nothing to do")
  - §1.4: the `current state` it works on is defined only by examples that are outputs of the project's core thinking loop ("settled understanding, generated candidates, critique verdicts, telemetry").
  - §1.5: *"Routeman… operates between cognitive cycles."*

- **This directly answers the specific half of the question.** Routeman reads as "not an individual discipline runnable anywhere" because its own spec says it *requires a completed cognitive cycle to have anything to enumerate from.* A reader (human or AI) who takes the identity sections at face value concludes routeman needs a loop to run.

- **The boundary role itself is legitimate; only its *encoding* is the defect.** Routeman genuinely is the project's "boundary discipline" (the one run at the edges between cycles to decide what's next) per the project's discipline taxonomy. The problem is not that the spec *mentions* this role — it's that the spec states it as an *identity precondition* ("without a prior cycle, nothing to enumerate") instead of as a "where this is most often called" context note owned by the runner. Assigning a role is fine; converting that role into a precondition for the operation to exist is the error.

- **The spec is internally inconsistent, provable without appealing to any other document.** Its own opening verb-meaning (§1.1) is generic and standalone-compatible — *"enumerate possible next moves from a current state toward a goal or subgoal"* — with no loop required. Sections §1.2/§1.4/§1.5 then contradict it by binding the same operation to a completed cycle. One spec says two different things about what routeman needs to run.

- **The contrast with the matured discipline (sense-making) names the gap precisely: routeman is *identity-relational*; sense-making is *identity-intrinsic*.** Sense-making's spec (`cognitive_harness/sense-making/references/sensemaking.md`) defines it purely by the cognitive operation ("constructing stable meaning from vague, ambiguous situations") — with no statement about where it sits in a loop or what feeds it. Routeman defines itself by its position ("between cognitive cycles") and its input source ("consumes the artifacts of a completed cognitive cycle"). A matured discipline says what it *is*; routeman says what it *sits next to*. (Note: routeman is otherwise structurally mature — its components, process, quality, and output machinery are well-developed, arguably more than sense-making's. The immaturity is specifically in the identity definition.)

- **A second layer explains why the problem is still here: corrections never reached the spec.** Four inquiries over the prior week circled this exact spot — input-dependency (`devdocs/inquiries/2026-05-28_15-48__routeman_input_dependency_question/finding.md`), docarchive read-policy (`…17-30…`), project-root wrong-tool (`…19-00…`), and standalone-identity redo (`…20-35…`). Each produced a finding that corrected how the spec should be *read*; none edited the spec itself. The most recent one even recommended a spec amendment but left it as an optional, unapplied action. So the spec keeps regenerating the loop-bound reading, and the confusion recurs. **A spec that has to be rescued by an external document to be read correctly — repeatedly — is itself the defect.**

- **Re-test of the most recent prior inquiry (the standalone-identity redo, `…20-35…`):** it concluded two things — (1) routeman *should* be a standalone, domain-agnostic discipline, and (2) the spec already reads correctly when cross-checked against canon; the earlier errors were *reading* errors. This diagnosis **affirms (1)** and **partially overturns (2)**: the spec does *not* read correctly on its own — it carries a genuine internal contradiction, and the repeated stumbling is evidence the artifact (not just past readers) is the unstable element. The prior inquiry located the problem in readers; this diagnosis relocates it to the spec.

- **Origin:** routeman inherited the loop-bound identity when it was created as a rename/replacement of an older discipline called `/navigation`, which occupied the "forward-boundary" slot (the design memo is at `devdocs/inquiries/2026-05-23_14-39__routeman_discipline_design/finding.md`). The boundary framing was carried into the identity sections at birth and never separated out.

- **Stakes:** the cost compounds. As the project moves toward its stated end-goal (parallel "multi-head" loops and reusing disciplines standalone), an identity welded to a single-loop boundary role shifts from a recurring confusion into an active blocker. "Do nothing" is not cost-free.

## Finding

### Why we are even discussing this

Routeman is one of the project's *thinking disciplines* — reusable cognitive operations, each invoked as a slash-command, that the project composes into reasoning loops. Routeman's specific job is to look at a current state and a goal and **enumerate all the possible next moves**, each tagged with a movement type and a reachability status, without choosing among them. Its spec is split across a short dispatch file (`cognitive_harness/routeman/SKILL.md`) and a long reference file (`cognitive_harness/routeman/references/routeman.md`) that defines the discipline in five numbered identity subsections (§1.1–§1.5) plus components, process, quality, and output.

Over the prior week, the user and the agent had four separate conversations that all snagged on the same thing: whether routeman can be run *outside* a loop — for example, pointed at a whole project at its root, rather than at a just-finished reasoning cycle. The most recent of those (the standalone-identity redo) concluded routeman *should* be runnable anywhere. The user then asked the question this inquiry answers: given all that, **what is the current problem with routeman** — and specifically, why does it still feel like it "isn't an individual discipline that can be run anywhere, in any context"? The user also asked for routeman to be compared against sense-making, a discipline they consider matured, to surface the gap.

### 1. The root: a category error in the identity definition

A thinking discipline's spec has (at least) two distinct kinds of content that should live in distinct places:

- **What the operation *is*** — the cognitive act itself, independent of any particular caller. This belongs in the identity definition.
- **Where the operation is *typically called*** — its role in the project's loops, what usually feeds it. This is a *composition* fact, and in this project composition is explicitly the job of the *runners* (the loop drivers like `/MVL` and `/MVLw`), not of the disciplines themselves. The project states this directly in its own canon: `docs/canon/worker_loop_logic.md` says "disciplines do the thinking; the runner does the plumbing," and `docs/canon/thinking_disciplines/list_of_disciplines.md` (line 109) says "Each discipline is standalone and domain-agnostic. The runners turn them from a list into a system."

Routeman's spec violates this separation. It takes a composition fact — "routeman is usually run at the boundary between cycles, consuming what the cycle produced" — and writes it into the identity definition as a *precondition for the operation to run at all*. That is the category error, and it is the root of everything else this diagnosis describes.

The defect is concentrated in three passages of `cognitive_harness/routeman/references/routeman.md`:

- **§1.2 (titled "Upstream-precondition relationship")** states: *"Routeman is the boundary cognitive operation that consumes the artifacts of a completed cognitive cycle and produces the typed map of possible next moves. Without prior cognitive work producing a state worth enumerating from, routeman has nothing to enumerate."* The last sentence is a **necessity claim** — it says routeman *cannot operate* without a prior cycle. That is what makes it an identity precondition rather than a context note.
- **§1.4 (the vocabulary entry for `current state`)** defines the thing routeman works on as *"the result of prior cognitive work… settled understanding, generated candidates, critique verdicts, telemetry, and unresolved openings."* Every example is an output of the project's core reasoning loop. A reader concludes the input must be loop-output.
- **§1.5 (titled "Boundary placement")** states routeman *"operates between cognitive cycles."*

### 2. Why this directly answers "not an individual discipline runnable anywhere"

The user's specific observation — routeman doesn't feel like something you can run in any context — is not a misunderstanding. It is the spec's identity sections being read exactly as written. If the definition says routeman "consumes the artifacts of a completed cognitive cycle" and "without prior cognitive work… has nothing to enumerate," then a reader correctly infers: *I need a completed cycle before I can run this.* That is precisely the inference behind the project-root wrong-tool episode (the 19-00 inquiry), where the agent concluded routeman couldn't usefully run at a project root. The spec produced that reading.

### 3. The boundary role is real; only the encoding is wrong

It would be an over-correction to claim routeman has nothing to do with cycle boundaries. The project's discipline taxonomy genuinely classifies routeman as the *boundary discipline* — the one you run at the edges between reasoning cycles to decide where to go next (`docs/canon/thinking_disciplines/what_are_they.md` describes it as operating "at the EDGE between one inquiry and the next").

The resolution is that "standalone" and "boundary" describe **different axes** and do not conflict:

- *Standalone* means invocation-independence plus domain-agnosticism — you can invoke routeman on its own, on any subject matter, without another discipline having run first as a hard precondition.
- *Boundary* means its *typical role* in the loop architecture.

A discipline can be both. The defect is that routeman's spec collapses the two axes — it turns "typically run at boundaries" into "cannot run without a completed cycle." The fix direction (out of scope to design here, but named to make the diagnosis actionable) is to move the boundary-role description out of the identity sections and into a clearly-marked "where this is typically called" note — the same way the critique discipline's spec keeps a generic identity and notes its usual loop-source separately, rather than building the loop-source into what critique *is*.

### 4. The spec contradicts itself, regardless of canon

The diagnosis does not depend on the canon documents to hold. Routeman's *own* opening verb-meaning (§1.1) is generic and standalone-compatible: *"To route is to enumerate possible next moves from a current state toward a goal or subgoal… without selecting which move to take."* Nothing in §1.1 requires a loop. Then §1.2/§1.4/§1.5 bind the same operation to a completed cycle. A single spec asserting both "operates on any current state" and "cannot operate without a completed cognitive cycle" is internally inconsistent. The canon (line 109) corroborates which side is correct, but the inconsistency is visible from the spec alone.

This is why the "the spec is actually fine, only past readings were wrong" position does not hold: a necessity sentence like "without prior cognitive work… nothing to enumerate" cannot be read away by cross-checking another document — it has to be *edited*. And the fact that getting routeman right has *required* importing an external canon line to override the spec's plain reading is itself evidence the spec doesn't carry its intended meaning on its own.

### 5. The maturity gap, named (the sense-making contrast)

The user asked for the comparison against sense-making, and it pinpoints the gap. Sense-making's spec defines the discipline purely by its cognitive operation — "constructing stable meaning by organizing cognitive anchors… from vague, ambiguous situations" — and says nothing in its identity about where it runs in a loop or what feeds it. It is **identity-intrinsic**: it says what it *is*.

Routeman is **identity-relational**: it defines itself by its position (between cycles) and its input source (a completed cycle's artifacts). This is the specific sense in which routeman is less "matured" than sense-making — not in its machinery (routeman's components, failure modes, telemetry, and output schema are fully developed, if anything more elaborate than sense-making's) but in its *identity*. A matured discipline's identity survives being lifted out of the loop; routeman's, as written, does not.

### 6. Why the problem persists (the second layer)

There is a reason a small, cheap-to-fix textual defect has survived four inquiries. None of those four inquiries edited the spec. Each corrected how the spec should be *read* and recorded that correction in a finding; the spec text stayed the same. The most recent inquiry (the standalone-identity redo) even named the recurring mistake — it called it "loop-compatibility-bias" — and recommended a spec amendment, but recorded that amendment as an optional, user-decidable action that was never applied.

The consequence is a loop: the spec regenerates the loop-bound reading → a reader stumbles → an inquiry corrects the reading → the spec stays unchanged → the next reader stumbles again. This persistence layer is part of the diagnosis because the question asked what the *current* problem is, and "why it is still here after four inquiries" is part of that answer. The fix for the structural defect (§1.2/§1.4/§1.5) and the fix for the persistence (a step that propagates a settled finding into the spec) are different actions; the diagnosis names both, while noting the persistence pattern may be project-wide rather than unique to routeman.

### 7. Origin and stakes

Routeman did not invent its loop-bound identity; it inherited it. Routeman was created as a structural rename of an older discipline, `/navigation`, which filled the "forward-boundary" slot in the project's taxonomy (the design memo is `devdocs/inquiries/2026-05-23_14-39__routeman_discipline_design/finding.md`). The "boundary / consumes-a-completed-cycle" framing came in at birth and was never separated from the identity.

The stakes rise over time. The project's stated end-goal includes running parallel reasoning loops ("multi-head") and reusing disciplines standalone. Under those conditions, an identity welded to a single completed-cycle precondition stops being a mere recurring confusion and becomes a structural blocker to reuse. That makes "leave it as-is" an actively accumulating cost, not a neutral choice.

## Inherited Commitments Re-test

This inquiry declared a Synthesis Trigger consuming five prior outputs. Each inherited commitment is re-tested below.

| Commitment (and source) | Re-test status | Evidence |
|---|---|---|
| **Routeman should be a standalone, domain-agnostic discipline** — from the standalone-identity redo (`devdocs/inquiries/2026-05-28_20-35__routeman_identity_standalone_discipline_redo/finding.md`) | **RE-TESTED → AFFIRMED** | Canon line 109 + routeman's own generic §1.1 verb-meaning + the cross-discipline pattern (sense-making, critique, etc. all define themselves generically) all confirm routeman should be standalone. This diagnosis builds on it. |
| **The spec already reads canon-consistent; the prior errors were *reading* errors, not spec errors** — same source | **RE-TESTED → PARTIALLY OVERTURNED** | The spec carries a genuine internal contradiction (§1.1 generic vs §1.2/§1.4/§1.5 loop-bound) and a necessity sentence that no reading can dissolve. The repeated stumbling across four inquiries is evidence the *artifact* is unstable, not only past readers. The prior located the defect in readers; this diagnosis relocates it to the spec. (The prior's standalone *verdict* stands; its "spec is already fine" sub-claim does not.) |
| **Two-axis input contract: state+goal required as concepts (Axis 1); source is flexible — any folder or raw text, not bound to the `inquiries/` folder (Axis 2)** — from the input-dependency inquiry (`devdocs/inquiries/2026-05-28_15-48__routeman_input_dependency_question/finding.md`) | **RE-TESTED → AFFIRMED + EXPLAINED** | Consistent with this diagnosis and unaffected by it. This diagnosis additionally explains *why* the confusion arose despite that finding being correct: the identity sections (§1.2/§1.4/§1.5) undercut the source-flexibility the input contract grants. |
| **Read-policy: routeman default-reads `finding.md` (not `docarchive/`)** — from the docarchive read-policy inquiry (`devdocs/inquiries/2026-05-28_17-30__routeman_docarchive_read_policy_question/finding.md`) | **INHERITED-WITHOUT-RE-TEST** | Peripheral to the identity defect; no conflict with this diagnosis. Reason for not re-testing: outside the diagnosis's scope (it concerns *which files* routeman reads, not *whether routeman needs a loop*). |
| **Routeman is the wrong tool at a project root (the original "wrong-tool" verdict)** — from the project-root inquiry (`devdocs/inquiries/2026-05-28_19-00__routeman_project_root_operation_meaning/finding.md`) | **RE-TESTED → STAYS OVERTURNED, RE-EXPLAINED** | Already overturned by the standalone-identity redo. This diagnosis re-explains that episode as a downstream *symptom* of the category error: the agent read the loop-bound identity sections literally and concluded routeman needed a cycle. |
| **The founding "cycle-consumer / boundary" identity for routeman** — from the founding design memo (`devdocs/inquiries/2026-05-23_14-39__routeman_discipline_design/finding.md`) | **RE-TESTED → IDENTIFIED AS THE ORIGIN** | Not wrong in its own lineage context (routeman replaced `/navigation`, a boundary discipline), but this is where loop-role-as-identity entered the spec. The founding framing is the source of the present defect. |

## Next Actions

### MUST

(none — this is a diagnostic inquiry; the diagnosis is the deliverable. No spec change is forced by a diagnosis alone. The fix is a separate, user-decided inquiry, scoped below.)

### COULD

- **COULD-1 — Open a structural-layer fix inquiry to relocate routeman's loop-role out of its identity.**
  - **What:** a `/MVLw` inquiry that rewrites `cognitive_harness/routeman/references/routeman.md` §1.2/§1.4/§1.5 so the identity is the generic operation (per §1.1) and the boundary/cycle role moves into an explicit "where this is typically called" context note (the pattern the critique discipline's spec already uses).
  - **Who:** the user.
  - **Gate:** condition-bound — when the user wants to stop the recurring confusion at its source.
  - **Why:** this removes the regenerating cause; reading-level corrections have not stopped it across four inquiries.

- **COULD-2 — Open an inquiry on a finding→spec propagation step (the persistence layer).**
  - **What:** a `/MVLw` inquiry on whether the project needs an explicit mechanism so that a settled meaning-layer finding triggers the corresponding spec edit, rather than leaving it as an optional action.
  - **Who:** the user.
  - **Gate:** condition-bound — when the user wants to address why corrections don't reach specs (not just for routeman).
  - **Why:** the four-inquiry regeneration is evidence that findings accumulate without propagating; this may be a project-wide gap, with routeman as the visible instance.
  - **Depends-on:** none. This is independent of COULD-1; either can proceed alone.

### DEFERRED

- **What:** a read-time canon-cross-check guard (have an agent cross-check routeman's identity against canon line 109 before committing identity verdicts).
  - **Gate:** revival trigger — only if COULD-1 is rejected and the spec is deliberately frozen as-is.
  - **Why (if revived):** a fallback mitigation when the root cannot be fixed. Deferred because it is a band-aid that the COULD-1 fix would make unnecessary.

## Reasoning

The diagnosis emerged from generating six competing framings of "what the current problem is" and adversarially testing each. The full field, and why the winner held:

- **SURVIVED (the answer): the category-error framing.** It was reached independently by four different generation mechanisms (removing the constraint that a discipline must state its loop-role; the software analogy of a module hardcoding its caller instead of taking inputs as parameters; recognizing a missing "context note" slot; and synthesis), which is why confidence is high. It survived the strongest objection — that "category error" might be a fancy software frame imported onto a markdown spec — because the separation it appeals to is the *project's own* stated principle (runners compose; disciplines don't), and because the supporting contrast with sense-making is empirically checkable rather than a matter of vocabulary.

- **SURVIVED as a second layer: the persistence framing.** It uniquely explains why a cheap defect outlived four inquiries (the corrections never touched the spec). It was challenged as possibly out-of-scope ("is this routeman's problem or the project's?") and kept, scoped, because explaining why the problem is *still here* is part of answering what the *current* problem is.

- **REPOSITIONED, not promoted: the localized-text framing.** "The problem is the specific loop-binding sentences" is true but shallow — it names the symptom without explaining why those sentences exist or why the confusion regenerates. It is retained as the concrete textual anchor of the root, not as the root itself.

- **KILLED: the no-defect / contrarian framing** ("routeman genuinely is a boundary discipline; the standalone push over-applies canon"). It failed on three independent grounds: the spec's internal contradiction holds without canon; the four-inquiry recurrence is evidence of a live problem; and the standalone verdict was already established at high confidence with cross-discipline confirmation. Its one valid point — that the boundary role is real — was *kept*, and it is exactly what sharpens the diagnosis to "the role is legitimate; encoding it as a precondition is the defect." (Generating and seriously testing this uncomfortable framing was a deliberate guard against only keeping comfortable conclusions.)

- **KILLED: the read-time-guard framing.** A canon-cross-check at read time is a band-aid that presupposes the spec stays broken; if the root is fixed, it is unnecessary. Kept only as a deferred fallback.

- **REPOSITIONED: the trajectory-liability framing.** Not a root cause but a stakes statement; it correctly argues "do nothing" has rising cost as the project scales to multi-head and standalone reuse, so it informs urgency rather than diagnosis.

A note on rigor: because this inquiry used thinking disciplines to evaluate a thinking discipline, the diagnosis was deliberately anchored in external, checkable evidence — quotable spec passages, the project's own canon, the empirical record of four inquiries, and the sense-making contrast — rather than in the disciplines' shared vocabulary, to avoid a self-confirming evaluation.

## Open Questions

### Research Frontiers

- **Is the loop-role-as-identity-precondition pattern present in other disciplines too?** Routeman is the discovered instance because it was a rename of a boundary discipline. Whether other discipline specs fold composition/role into identity is unexamined here and worth a sweep — particularly any other discipline with a strong loop position.

- **Is the "corrections don't reach the spec" pattern project-wide?** The four-inquiry regeneration suggests the gap may not be specific to routeman. Diagnosing that would require looking across other discipline/spec correction chains, not just routeman's.

### Refinement Triggers

- **If a fifth routeman-context inquiry opens before the spec is edited,** that confirms the persistence diagnosis empirically and raises the priority of COULD-1 (the structural fix).

- **If the structural fix (COULD-1) is made and a later inquiry *still* reads routeman as loop-bound,** then the diagnosis is incomplete — the cause would lie somewhere beyond the three identity passages, and this finding's root-localization would need revisiting.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
i want you to inspect routeman fully  in /Users/ns/Desktop/projects/native/cognitive_harness/routeman files
and also read /Users/ns/Desktop/projects/native/cognitive_harness/sense-making for reference of matured discipline sample 
and then read the last 4  devdocs/inquiries folder\s finding.md files and you can also read other routeman related files in devdocs/inquiries such as devdocs/inquiries/2026-05-23_14-39__routeman_discipline_design , which are more older


and then i want you to tell me what is current problem with routeman? (last inquiry was about this and about routeman not being an individual discipline that cna be run in anywhere and in any context)
```

</details>
