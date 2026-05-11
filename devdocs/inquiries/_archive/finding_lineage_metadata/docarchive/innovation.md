# Innovation: Finding Lineage Metadata

## User Input

`devdocs/inquiries/finding_lineage_metadata/_branch.md`

Question: Should Homegrown avoid building `loop-diagnose` for now and instead expand the standard `finding.md` format with prior-path and raw-input metadata so future MVL runs have enough lineage data to diagnose correction chains?

## Seed

The user noticed that `Changes from Prior` already carries much of the correction-chain structure. Instead of a new diagnostic protocol, expand the finding format so later MVL analysis has the evidence it needs.

## Mechanism 1: Lens Shifting

### Generic Variation

Shift from "diagnose now" to "preserve evidence now." Diagnosis is expensive; evidence capture is cheap.

### Focused Variation

Shift from external protocol to internal finding lineage. The finding itself becomes the correction-chain record.

### Contrarian Variation

Shift from "raw input is clutter" to "raw input is provenance." It is clutter only if placed in the main reading path.

## Mechanism 2: Combination

### Generic Variation

Combine frontmatter + Changes from Prior + appendix:

- frontmatter for machine-readable paths;
- Changes section for human-readable lineage;
- appendix for raw source input.

### Focused Variation

Combine `refines` + `Prior path`:

`refines` stays canonical for tooling, while `Prior path` helps a human reading the finding understand the revision chain.

### Contrarian Variation

Combine raw input + collapsible details:

Use Markdown `<details>` for raw input so the finding remains readable in most viewers.

## Mechanism 3: Inversion

### Generic Variation

Invert "a bad finding needs diagnosis" into "a bad finding needs a clean pointer to what corrected it."

### Focused Variation

Invert "source input should be hidden in branch files" into "source input should be available from the final artifact."

### Contrarian Variation

Invert "more protocol creates more intelligence" into "less protocol preserves more signal."

## Mechanism 4: Constraint Manipulation

### Generic Variation

Add the constraint: every corrective/refinement finding must name the prior path.

### Focused Variation

Add the constraint: every corrective/refinement finding must include raw user input or an omission/redaction reason.

### Contrarian Variation

Remove the constraint that the system must identify exact failure causes during the same run.

## Mechanism 5: Absence Recognition

### Generic Variation

The missing field is `Prior path`.

### Focused Variation

The missing appendix is `Source Input`.

### Contrarian Variation

The missing convention is "diagnosis deferred." A finding should be allowed to preserve correction evidence without claiming to know which discipline failed.

## Mechanism 6: Domain Transfer

### Generic Variation

From academic papers:

Use citations and appendices. The main argument stays readable; source material sits at the end.

### Focused Variation

From git commits:

Use parent pointers and commit messages. A corrected finding should know its parent and why it exists.

### Contrarian Variation

From legal records:

Separate ruling from evidence. The finding is the ruling; raw input is evidence.

## Mechanism 7: Extrapolation

### Generic Variation

If lineage fields are added, future MVL can analyze correction chains without a new protocol.

### Focused Variation

If raw input is not captured now, later self-maintenance will lack the original correction signal.

### Contrarian Variation

If `loop-diagnose` is built first, it may force premature failure categories and miss simpler format-level fix.

## Candidate Set

### Candidate A: Minimal Lineage Fields

Add only:

- `Prior path`
- `Revision trigger`
- bottom `Source Input` appendix

### Candidate B: Full Lineage Frontmatter

Add frontmatter fields:

- `refines`
- `prior_inquiry`
- `revision_kind`
- `source_input: embedded | redacted | omitted`

### Candidate C: Source Input Appendix

Add a final `## Source Input` section using `<details>`.

### Candidate D: Separate Raw Input File

Store raw input in `source_input.md` beside the finding.

### Candidate E: Keep `loop-diagnose`

Keep the prior recommendation as-is and build a protocol.

### Candidate F: MVL-On-Demand Diagnosis

Do not build `loop-diagnose`; when diagnosis is needed, run MVL+ over linked findings and source input.

## Test Phase

### Candidate A: Minimal Lineage Fields

- **Novelty:** Low.
- **Scrutiny survival:** Strong. It solves the immediate gap.
- **Fertility:** Strong. It creates lineage data.
- **Actionability:** Very strong.
- **Mechanism independence:** Strong. Absence recognition, constraint manipulation, and domain transfer support it.
- **Verdict:** Survivor.

### Candidate B: Full Lineage Frontmatter

- **Novelty:** Low to moderate.
- **Scrutiny survival:** Mixed. Useful for tooling, but too many fields too early could create metadata friction.
- **Fertility:** Medium.
- **Actionability:** Medium.
- **Mechanism independence:** Moderate.
- **Verdict:** Refine. Keep `refines`; consider `revision_kind`; defer more fields until tooling needs them.

### Candidate C: Source Input Appendix

- **Novelty:** Low.
- **Scrutiny survival:** Strong. It preserves raw correction without polluting the main finding.
- **Fertility:** Strong.
- **Actionability:** Strong.
- **Mechanism independence:** Strong.
- **Verdict:** Survivor.

### Candidate D: Separate Raw Input File

- **Novelty:** Low.
- **Scrutiny survival:** Weak to medium. Keeps finding clean but weakens "read only finding.md" and creates more file chasing.
- **Fertility:** Medium.
- **Actionability:** Medium.
- **Mechanism independence:** Low.
- **Verdict:** Kill for default; allow only for huge/sensitive input.

### Candidate E: Keep `loop-diagnose`

- **Novelty:** Already proposed.
- **Scrutiny survival:** Weak as next build. Failure attribution is advanced analysis and can be run by MVL later.
- **Fertility:** Strong later.
- **Actionability:** Medium.
- **Mechanism independence:** Mixed.
- **Verdict:** Refine. Defer, do not build now.

### Candidate F: MVL-On-Demand Diagnosis

- **Novelty:** Moderate.
- **Scrutiny survival:** Strong. It uses the system's current atomic operation instead of creating a new protocol prematurely.
- **Fertility:** Strong.
- **Actionability:** Strong once lineage exists.
- **Mechanism independence:** Strong.
- **Verdict:** Survivor.

## Assembly Check

Best assembly:

1. Add minimal lineage fields to corrected/revised findings.
2. Preserve raw user input at the end under `Source Input`.
3. Keep `refines` frontmatter.
4. Add `Prior path` and `Revision trigger` to `Changes from Prior`.
5. Add optional `revision_kind` later if useful.
6. Defer `loop-diagnose`.
7. Use MVL+ on-demand to diagnose correction chains when enough linked findings exist.

## Proposed Finding Template Patch

```markdown
---
status: active
refines: devdocs/inquiries/prior/finding.md
---

## Changes from Prior

**Prior path:** devdocs/inquiries/prior/finding.md
**Revision trigger:** User correction / new evidence / scope change / stronger framing
**What's preserved:** ...
**What's changed:** ...
**What's new:** ...
**Migration:** ...

...

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
[raw prompt or correction text]
```

</details>
```

If raw input is omitted:

```markdown
## Source Input

Raw input omitted: [sensitive / too long / not correction-driven / unavailable].
```

## Mechanism Coverage Telemetry

- **Generators applied:** 4 / 4
  - Combination
  - Absence Recognition
  - Domain Transfer
  - Extrapolation
- **Framers applied:** 3 / 3
  - Lens Shifting
  - Constraint Manipulation
  - Inversion
- **Convergence:** YES. Multiple mechanisms converge on lineage capture before diagnosis.
- **Survivors tested:** 6 / 6
- **Failure modes observed:** none materially. The design explicitly avoids premature failure attribution.
- **Overall: PROCEED**
