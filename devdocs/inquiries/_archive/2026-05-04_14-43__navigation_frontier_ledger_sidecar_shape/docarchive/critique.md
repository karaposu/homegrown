# Critique: Navigation Frontier Ledger Sidecar Shape

## User Input

```text
Should multi-resolution Navigation use a ledger/control sidecar similar to `_state.md` and `_branch.md`—possibly `_navigate.md`—and should parent Navigation runs create child direction folders and update the parent ledger, or is there a lighter better shape?
```

## Phase 0: Dimensions With Weights

| Dimension | Weight | Success Criteria |
|---|---:|---|
| Resumeability | Critical | Future runs can continue pending candidates without reconstructing context. |
| Readability | High | Human-visible maps stay scan-friendly. |
| Low Overhead | High | The design avoids empty folders and premature multi-file control structure. |
| Parent-Child Lineage | High | Parent can reliably link candidates to child maps. |
| Naming Clarity | Medium | File names say what state they own. |
| Runner Compatibility | Medium | Future automation can use the file shape without parsing unstable prose. |
| Recursive Scalability | Medium | The shape can support deeper child maps later. |

## Phase 1: Fitness Landscape

### Viable Region

Designs that:

- keep route maps human-readable;
- use an underscore sidecar as control state;
- preserve every candidate without creating empty folders;
- create child folders only when child maps exist;
- keep parent-child paths in a stable ledger;
- can recurse by giving expanded child maps their own ledger only when needed.

### Dead Region

Designs that:

- use `navigation.md` as the only ledger;
- create empty child folders for every pending candidate;
- infer state from filesystem presence alone;
- use ambiguous command-like naming for the control file.

### Boundary Region

Designs that:

- use visible `frontier.md` only;
- split into `_navigation_state.md` plus `_frontier.md`;
- create a navigation index or map-of-maps before multiple runs exist.

### Unexplored Region

Exact `_frontier.md` table/schema details remain lightly specified. This does not block the file-shape decision.

## Phase 2: Candidate Verdicts

### Candidate A: `frontier.md` Visible Ledger Only

**Prosecution:** Visible-only ledger does not clearly signal source-of-truth control state. Future runner behavior may treat it like prose documentation.

**Defense:** It is simpler and readable.

**Collision:** Simplicity is real, but the role ambiguity matters because this file governs budgeted resume. It should be refined into an underscore sidecar.

**Verdict:** REFINE.

**Refinement:** Use `_frontier.md`.

### Candidate B: `_navigate.md`

**Prosecution:** The name is a verb and sounds like a command. It does not name the controlled state.

**Defense:** It is short and visibly related to Navigation.

**Collision:** Being short is not enough. The ledger controls the frontier, not "navigate" as an action.

**Verdict:** KILL.

**Kill seed:** Use a noun that names the state being controlled.

### Candidate C: `_frontier.md`

**Prosecution:** "Frontier" may be less obvious to a new reader than "navigation state."

**Defense:** The protocol already centers the expansion frontier as the thing that must be preserved. The file name directly names that controlled object.

**Collision:** The defense wins. The loading context and file content can explain "frontier"; the name remains precise.

**Verdict:** SURVIVE.

**Caveat:** The top of `_frontier.md` should include a short loading note or role statement.

### Candidate D: `_navigation_state.md`

**Prosecution:** It is broad and risks becoming a dumping ground for all Navigation state.

**Defense:** It is readable and familiar because of `_state.md`.

**Collision:** Useful later, but not v1. The frontier ledger can carry current needs.

**Verdict:** REFINE / DEFER.

**Refinement:** Reconsider only if `_frontier.md` grows into multiple independent responsibilities after repeated use.

### Candidate E: Child Folders For Every Candidate

**Prosecution:** This creates filesystem structure for possibilities that have not been materialized. It makes Navigation heavier before producing child-map knowledge.

**Defense:** Every candidate gets a stable path immediately.

**Collision:** A ledger row can provide stable identity without filesystem sprawl. Empty folders do not add knowledge.

**Verdict:** KILL as default.

**Kill seed:** Use candidate ids in `_frontier.md`; create folders only when maps exist.

### Candidate F: Lazy Child Folders Only When Expanded

**Prosecution:** Pending candidates do not have physical paths until later.

**Defense:** Candidate ids in `_frontier.md` are enough for pending identity. Paths are only needed when a child map exists.

**Collision:** Defense wins. This keeps output proportional to actual work.

**Verdict:** SURVIVE.

### Candidate G: Single Sidecar In V1, Split Later If Needed

**Prosecution:** One sidecar can grow dense if it carries settings, candidate records, statuses, and resume.

**Defense:** V1 has no repeated use evidence justifying multiple state files. A single sidecar is easier to adopt and patch into the protocol.

**Collision:** Defense wins for v1. Split only with evidence.

**Verdict:** SURVIVE.

## Phase 3.5: Assembly Check

Surviving assembly:

```text
devdocs/navigation/<run-id>/
  navigation.md
  _frontier.md
  composition.md
  run_trace.md
  children/
    <candidate-id>/
      navigation.md
```

### Assembly Prosecution

This adds another underscore control artifact to Homegrown and could increase cognitive overhead. It also requires the protocol to be patched, and the current `homegrown/protocols/multi_resolution_navigation.md` already names `frontier.md`.

### Assembly Defense

The added artifact replaces worse complexity: overstuffed `navigation.md`, empty child folders, or lost pending routes. One sidecar is smaller than the alternatives.

### Assembly Collision

The assembly survives. It is the lightest structure that preserves resumability and parent-child lineage.

**Assembly Verdict:** SURVIVE.

## Coverage Map

| Concern | Covered? | Notes |
|---|---|---|
| Sidecar analogy | Yes | Use `_frontier.md`, similar in spirit to `_state.md`. |
| `_navigate.md` naming | Yes | Killed as ambiguous command-like name. |
| Parent update behavior | Yes | Parent updates `_frontier.md`, not `navigation.md` as source of truth. |
| Child folders | Yes | Lazy creation only when expanded. |
| Overhead | Yes | Pending candidates remain rows. |
| Recursive depth | Yes | Child folders can later have their own `_frontier.md` when expanded. |
| Exact schema | Partially | Enough for decision; detailed schema can be protocol patch/materialization. |

## Signal

TERMINATE.

The question is answered. The clean survivor is `_frontier.md` as a v1 control sidecar, with child folders created only for expanded candidates.

## Convergence Telemetry

Dimension coverage: strong.

Adversarial strength: strong. The strongest objection to `_frontier.md` is new control-file overhead; it is weaker than the alternatives' failure modes.

Landscape stability: stable.

Clean SURVIVE exists: yes.

Failure modes observed: none.

Overall: PROCEED.
