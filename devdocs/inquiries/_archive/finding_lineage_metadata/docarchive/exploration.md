# Exploration: Finding Lineage Metadata

## Mode and Entry Point

- **Mode:** Artifact exploration plus possibility exploration.
- **Entry point:** Signal-first.
- **Signal:** The previous `loop-diagnose` proposal may be too advanced because exact failure attribution is itself an MVL-level analysis.

## Cycle 1: Scan Existing Finding Infrastructure

### Scanned

The current CONCLUDE/finding system already has several lineage hooks:

1. **Frontmatter**
   - Supports `refines: devdocs/inquiries/X/finding.md`.
   - Could support more fields if the convention is extended.

2. **Changes from Prior**
   - Already has `What's preserved`, `What's changed`, `What's new`, and `Migration`.
   - This section can explain how a new finding relates to a prior one.

3. **Question**
   - Records the stabilized question and goal.
   - Does not necessarily preserve the raw user prompt.

4. **Reasoning**
   - Explains what survived and what was rejected.
   - Usually does not preserve the correction input verbatim.

5. **Open Questions**
   - Carries future triggers, but not correction-chain data.

6. **Discipline outputs**
   - Sensemaking and Innovation often record user input at the top.
   - After conclusion, these outputs move to `docarchive/`.
   - A reader of only `finding.md` may not see the raw input.

### Signals Detected

- **Strong signal:** Much of the needed correction-chain structure already belongs in `finding.md`.
- **Gap signal:** `Prior path` exists indirectly through `refines`, but not in the human-readable Changes section.
- **Gap signal:** Raw user input or correction text is not preserved in the final finding itself.
- **Risk signal:** Asking a protocol to attribute "Sensemaking failure" vs "Critique failure" is complex and may require its own MVL.

### Resolution Decision

Zoom in on a smaller first step: add lineage and raw-input capture to findings.

### Probe

If every revised finding had:

- prior finding path,
- reason for revision,
- raw user correction/input,
- relationship type,
- short delta from prior,

then later analysis could compare chains without needing a dedicated `loop-diagnose` protocol yet.

### Frontier State

The territory suggests `loop-diagnose` should be deferred. The first missing artifact is better finding lineage.

### Confidence Map Update

- Existing finding format as good base: **confirmed**.
- Need for raw input capture: **high confidence**.
- Need for immediate failure attribution protocol: **low to medium confidence**.

## Cycle 2: Scan Metadata Placement Options

### Scanned

Possible places for correction-chain metadata:

1. **Frontmatter only**
   - Pros: machine-readable, compact.
   - Cons: poor for long raw input.

2. **Expanded Changes from Prior**
   - Pros: readable, close to the revision explanation.
   - Cons: raw input could clutter the finding.

3. **End-of-file Raw Input appendix**
   - Pros: preserved in finding, out of the main reading path.
   - Cons: longer file.

4. **Separate raw input file**
   - Pros: keeps finding clean.
   - Cons: more files, weaker "read only finding.md" property.

5. **`_branch.md` only**
   - Pros: already exists.
   - Cons: CONCLUDE archives no raw user prompt into finding; finding is less self-contained.

### Signals Detected

- **Strong signal:** Use frontmatter for short machine-readable lineage.
- **Strong signal:** Use Changes from Prior for human-readable revision summary.
- **Strong signal:** Put raw input at the end, probably under a collapsible or appendix section.
- **Risk signal:** Very long raw input can make `finding.md` unwieldy.

### Resolution Decision

Use a hybrid:

- frontmatter for stable fields;
- Changes from Prior for readable lineage;
- end appendix for raw input.

### Probe

Possible field set:

```yaml
---
status: active
refines: devdocs/inquiries/prior/finding.md
prior_inquiry: devdocs/inquiries/prior/
revision_kind: correction | refinement | supersession | continuation
---
```

Possible Changes section:

```markdown
## Changes from Prior
**Prior path:** devdocs/inquiries/prior/finding.md
**Revision trigger:** User correction / new evidence / scope change / stronger framing
**What's preserved:** ...
**What's changed:** ...
**What's new:** ...
**Migration:** ...
```

Possible end appendix:

```markdown
## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
...
```

</details>
```

## Cycle 3: Probe Whether This Replaces `loop-diagnose`

### Scanned

`loop-diagnose` was intended to compare bad/improved findings and attribute failures. The user now points out that exact failure attribution may itself be advanced analysis.

### Signals Detected

- **Strong signal:** We can capture enough lineage now without diagnosing causes now.
- **Strong signal:** Future MVL can run on the captured chain when needed.
- **Risk signal:** Prematurely building `loop-diagnose` may duplicate what a better finding format already provides.

### Resolution Decision

Refine prior recommendation:

- Do not build `loop-diagnose` yet.
- First expand `finding.md` lineage metadata.
- Later, if many lineage-linked findings accumulate, run MVL on them or build a protocol.

### Probe

The new flow:

```
Bad finding exists.
User gives correction.
New MVL run produces corrected finding.
CONCLUDE writes finding with prior path + revision trigger + raw correction input.
Later MVL can analyze chains using those fields.
```

This is simpler and creates data with almost no new conceptual machinery.

## Jump Scan: Failure Modes

### Scanned

Potential failure modes:

- Raw input clutters final findings.
- Sensitive or irrelevant user text gets preserved forever.
- Metadata becomes inconsistent.
- Prior path and `refines` duplicate each other.
- Future readers mistake raw input for the final finding's conclusion.

### Signals Detected

- Raw input should be at the end, not near summary.
- Long raw input should be collapsible or clearly appendix-only.
- `Prior path` may be human-readable duplication of frontmatter; acceptable if useful.
- The raw input section should be omitted or redacted when inappropriate.

### Resolution Decision

Make raw input optional but recommended for corrective/refinement runs. Put it at the end under "Source Input" and clearly mark it as historical input, not endorsed content.

## Convergence Assessment

- **Frontier stability:** The answer is stable: capture lineage first, diagnose later.
- **Declining discovery rate:** Later scans refined placement rather than changing direction.
- **Bounded gaps:** Exact CONCLUDE patch remains future work, but the format is clear.

Exploration is sufficient for sensemaking.

## Structural Map

### Territory Overview

The project does not yet need a separate `loop-diagnose` protocol. It needs better lineage capture in the normal finding lifecycle.

### Inventory

- **Present:** `refines` frontmatter, Changes from Prior, question/goal, archived discipline outputs.
- **Missing:** explicit prior path in Changes from Prior, revision trigger, raw user correction/input in final finding.
- **Deferred:** failure attribution protocol.

### Signal Log

- Failure attribution is advanced.
- Raw correction input is high-value evidence.
- Finding-level metadata is the cheapest place to capture it.

### Confidence Map

- **Confirmed:** Finding format can carry lineage.
- **High confidence:** Raw input should be at end of finding.
- **Medium confidence:** Future MVL analysis may be enough instead of a dedicated protocol.

### Frontier State

The next discipline should stabilize the format and decide how it refines `loop-diagnose`.

### Gaps and Recommendations

Sensemaking should answer whether this is a replacement for `loop-diagnose` or a prerequisite that may make `loop-diagnose` unnecessary.
