# Innovation: Artifact Materialization Lifecycle Subprotocols

## User Input

`devdocs/inquiries/2026-05-02_12-55__artifact_materialization_lifecycle_subprotocols/_branch.md`

## Seed

The user noticed that code artifacts should use the proven task-desc -> task-plan -> dynamic critic -> plan repair -> implementation lifecycle, while simpler Markdown artifacts need a lighter planning flow. The user also asked whether create, edit, rewrite, and refactor need subprotocols.

## Mechanism 1 - Lens Shifting

### Generic

Evaluate by file type.

Output: code uses full lifecycle; Markdown uses compact lifecycle.

Weakness: file type alone misses high-risk Markdown protocol rewrites and low-risk code examples.

### Focused

Evaluate by risk and behavior impact.

Output: lifecycle depth follows risk, not file extension. Code usually escalates, but loaded Markdown protocols/skills can also escalate.

### Contrarian

Evaluate by operation intent.

Output: create/edit/rewrite/refactor should drive different checks, because a rewrite of a Markdown protocol can be more dangerous than creating a new standalone code stub.

## Mechanism 2 - Combination

### Generic

Combine the three axes:

```text
artifact type + operation intent + risk facts -> lifecycle mode
```

### Focused

Combine content planning with implementation planning:

```text
Markdown/content artifact:
  purpose -> must contain -> must not contain -> relationships -> tiny plan -> review -> trace

Code/behavior artifact:
  desc -> implementation plan -> dynamic critic -> repair -> implement -> validate -> trace
```

### Contrarian

Combine operation profiles with future extraction gates:

```text
operation profiles live inside the controller now
but any profile can become a subprotocol after repeated traces prove it needs independent treatment
```

## Mechanism 3 - Inversion

### Generic

Invert "Markdown is easy."

Output: Markdown can be behavior-affecting when it is a loaded protocol, skill, contract, or runner instruction.

### Focused

Invert "subprotocols increase rigor."

Output: too many subprotocols can reduce rigor by making agents choose between them incorrectly and duplicating shared invariants.

### Contrarian

Invert "dynamic critic is for code."

Output: dynamic critic may be necessary for a protocol rewrite even if no code changes, because the critic should catch conceptual regression, lost constraints, and downstream reader confusion.

## Mechanism 4 - Constraint Manipulation

### Generic

Add constraint: one file only for v1.

Output: `artifact_materialization.md` must contain sections for universal contract, modes, operation profiles, escalation, validation, and extraction gates.

### Focused

Add constraint: no heavy process for trivial artifacts.

Output: Compact mode must be a one-file trace with inline content plan and risk scan.

### Contrarian

Add constraint: no separate dynamic critic in Compact mode.

Output: Compact mode can still have a risk scan, but must escalate to Standard if it touches loaded behavior, existing protocols/skills, unclear validation, or rewrite/refactor of load-bearing content.

## Mechanism 5 - Absence Recognition

### Generic

Missing axis: operation intent.

Output: `artifact_materialization.md` should explicitly ask whether the operation is create, edit, rewrite, refactor, extend, extract, or delete/deprecate.

### Focused

Missing check: meaning preservation.

Output: rewrite/refactor profiles need preservation checks:

- what must remain true;
- what content/behavior is being preserved;
- what is intentionally changed;
- what was removed and why.

### Contrarian

Missing path: documentation validation.

Output: Markdown validation should not pretend to be tests. It should use contract review, relationship checks, source-authority check, contradiction scan, and outcome-review gate.

## Mechanism 6 - Domain Transfer

### Generic

Transfer from software change control:

```text
change type -> risk class -> approval depth -> validation -> change log
```

Output: operation intent is a normal part of change control and should be in the protocol.

### Focused

Transfer from database migrations:

```text
create table, alter table, rename, drop, data migration
```

Each operation has different risk even though all are "schema work."

Output: create/edit/rewrite/refactor should be operation profiles under one migration/materialization controller.

### Contrarian

Transfer from editorial workflows:

```text
new article -> copy edit -> rewrite -> structural edit -> archival deletion
```

Output: Markdown/protocol work needs editorial-style preservation and relationship checks, not only implementation planning.

## Mechanism 7 - Extrapolation

### Generic

If one lifecycle applies to all artifacts:

```text
small docs become expensive -> user bypasses protocol
or risky edits become under-reviewed -> regressions happen
```

### Focused

If many subprotocols are created now:

```text
protocol family grows before use -> duplicated invariants -> stale drift -> wrong protocol selection
```

### Contrarian

If operation profiles are used first:

```text
real traces reveal which profiles are heavy -> only proven profiles become subprotocols
```

## Candidate Designs

### Candidate A - File-Type Split

Code gets full lifecycle; Markdown gets compact lifecycle.

Test:

- **Novelty:** Low.
- **Scrutiny survival:** Weak. Markdown protocols can be high risk.
- **Fertility:** Medium.
- **Actionability:** High but unsafe.
- **Mechanism independence:** Low.

Verdict before critique: KILL or heavily refine.

### Candidate B - Risk-Only Modes

Keep only Compact/Standard/Full. Do not add operation profiles.

Test:

- **Novelty:** Low-to-medium.
- **Scrutiny survival:** Medium. It preserves prior mode finding but misses create/edit/rewrite/refactor risks.
- **Fertility:** Medium.
- **Actionability:** High.
- **Mechanism independence:** Medium.

Verdict before critique: REFINE.

### Candidate C - Controller Protocol With Operation Profiles

One `artifact_materialization.md` contains shared invariants, classification, Compact/Standard/Full modes, operation profiles, artifact-type guidance, escalation rules, and extraction gates.

Test:

- **Novelty:** Medium.
- **Scrutiny survival:** Strong.
- **Fertility:** High.
- **Actionability:** High.
- **Mechanism independence:** High. Combination, constraint manipulation, absence recognition, domain transfer, and extrapolation converge here.

Verdict before critique: SURVIVE.

### Candidate D - Separate Subprotocol Files Now

Create separate `artifact_create.md`, `artifact_edit.md`, `artifact_rewrite.md`, and `artifact_refactor.md`.

Test:

- **Novelty:** Medium.
- **Scrutiny survival:** Weak for v1. It fragments the system before traces justify it.
- **Fertility:** High later.
- **Actionability:** Medium.
- **Mechanism independence:** Medium.

Verdict before critique: KILL now, preserve as future extraction seed.

### Candidate E - Content Contract For Markdown

For Markdown/protocol docs, compact materialization uses:

```text
source authority
purpose / reason for existence
must contain
must not contain
relationships
target path/write-set
operation intent
tiny plan
review/validation
trace
```

Test:

- **Novelty:** Medium.
- **Scrutiny survival:** Strong.
- **Fertility:** High.
- **Actionability:** High.
- **Mechanism independence:** High.

Verdict before critique: SURVIVE.

### Candidate F - Dynamic Critic Escalation For Conceptual Changes

Dynamic critic is required not only for code, but also for protocol/skill rewrites, loaded instruction edits, and any Markdown change that can alter future behavior.

Test:

- **Novelty:** Medium.
- **Scrutiny survival:** Strong.
- **Fertility:** High.
- **Actionability:** High.
- **Mechanism independence:** Medium-to-high.

Verdict before critique: SURVIVE.

## Assembly Check

The strongest architecture is:

```text
artifact_materialization.md
  - universal contract
  - classification:
      artifact_type
      operation_intent
      write_set
      behavior/instruction impact
      validation clarity
  - mode selection:
      Compact
      Standard
      Full
  - compact content path:
      content contract + tiny plan + risk scan + review + trace
  - standard/full implementation path:
      desc + plan + dynamic critic + repair + implement + validate + trace
  - operation profiles:
      create
      edit
      rewrite
      refactor
      extend
      extract
      delete/deprecate
  - escalation rules
  - future extraction gates
```

Emergent value: this assembly keeps v1 as one protocol while still representing the user's correct intuition that different artifact operations need different treatment.

## Recommended Innovation Output

Build `homegrown/protocols/artifact_materialization.md` as a **single controller protocol with operation profiles**.

Do not create separate subprotocol files yet.

Use this rule:

```text
Subprotocols are extracted later only when repeated materialization traces show one operation profile has stable, large, independent procedure that clutters the controller.
```

## Telemetry

- **Generators applied:** 4 / 4
- **Framers applied:** 3 / 3
- **Convergence:** YES. Five mechanisms converge on controller + operation profiles + risk modes.
- **Survivors tested:** 6 / 6
- **Failure modes observed:** None.
- **Overall:** PROCEED

## Verification Gap

`tools/structural_check.sh` is absent, so automated structural validation could not be run.
