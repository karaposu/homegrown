# Critique: Finding Lineage Metadata

## User Input

`devdocs/inquiries/finding_lineage_metadata/_branch.md`

Question: Should Homegrown avoid building `loop-diagnose` for now and instead expand the standard `finding.md` format with prior-path and raw-input metadata so future MVL runs have enough lineage data to diagnose correction chains?

## Phase 0: Dimensions With Weights

| Dimension | Weight | Success Criteria |
|---|---:|---|
| Simplicity | Critical | Solves the immediate problem with the smallest mechanism. |
| Data preservation | Critical | Captures prior path and raw correction input reliably. |
| Readability | High | Keeps the main finding readable. |
| Future diagnosis support | High | Leaves enough material for later MVL analysis. |
| Avoids premature analysis | Critical | Does not require exact failure attribution now. |
| Template compatibility | High | Fits existing CONCLUDE/finding structure. |
| Privacy/clutter control | Medium | Allows omission or redaction for sensitive/long input. |

## Phase 1: Fitness Landscape

### Viable Region

The viable region is a finding-template extension:

- keep `refines`;
- add body-level `Prior path`;
- add `Revision trigger`;
- preserve raw input at the end;
- defer `loop-diagnose`;
- use MVL diagnosis later when needed.

### Boundary Region

Full frontmatter expansion is a boundary option. Useful later for tooling, but too much now.

### Dead Region

Dead options:

- build `loop-diagnose` before preserving lineage;
- require exact failure attribution in every revision;
- store raw input only in archives;
- place raw input near the top of findings.

## Phase 2 and 3: Candidate Verdicts

### Candidate A: Minimal Lineage Fields

**Prosecution:** Duplicates `refines` and adds a little template friction.

**Defense:** `refines` is machine-readable, but a human-readable `Prior path` and `Revision trigger` make correction chains explicit. The friction is small.

**Collision:** Defense wins.

**Verdict:** SURVIVE.

**Constructive output:** Add `Prior path` and `Revision trigger` to `Changes from Prior`.

### Candidate B: Full Lineage Frontmatter

**Prosecution:** Too much metadata before tooling exists. Agents may fill fields inconsistently.

**Defense:** Machine-readable lineage will matter later.

**Collision:** Prosecution wins for now. Defense survives as a future path.

**Verdict:** REFINE.

**Constructive output:** Keep `refines`; consider extra frontmatter only after several lineage-linked findings exist.

### Candidate C: Source Input Appendix

**Prosecution:** Raw input may clutter `finding.md`.

**Defense:** Put it at the end, optionally collapsible, and label it as source input. This keeps the main finding clean while preserving evidence.

**Collision:** Defense wins.

**Verdict:** SURVIVE.

**Constructive output:** Add end-of-file `Source Input` section for corrective/refinement findings.

### Candidate D: Separate Raw Input File

**Prosecution:** Makes future analysis chase files and weakens the "finding is self-contained" property.

**Defense:** Keeps the finding shorter and can handle huge/sensitive text.

**Collision:** Prosecution wins for default; defense survives for exceptional cases.

**Verdict:** REFINE.

**Constructive output:** Default to embedded appendix. Use separate file only when raw input is too long or sensitive, and point to it from `Source Input`.

### Candidate E: Keep `loop-diagnose` As Next Build

**Prosecution:** Exact failure attribution is advanced analysis. Building the protocol now risks premature categories and unnecessary machinery.

**Defense:** A dedicated protocol would produce cleaner self-maintenance data.

**Collision:** Prosecution wins for the immediate next step. Defense may win later after lineage data exists.

**Verdict:** KILL as next build; DEFER as future option.

**Seed extracted:** Revisit after 5-10 lineage-linked correction chains.

### Candidate F: MVL-On-Demand Diagnosis

**Prosecution:** Running MVL later is less standardized than a protocol.

**Defense:** That is acceptable now because MVL is the atomic operation and can perform advanced diagnosis when enough evidence exists. Standardization can follow repeated use.

**Collision:** Defense wins.

**Verdict:** SURVIVE.

**Constructive output:** Future diagnosis should be done by MVL/MVL+ over linked findings before creating a protocol.

## Phase 3.5: Assembly Check

### Assembly Candidate: Lineage-First Finding Format

The best assembly:

1. Keep `refines` frontmatter.
2. Add `Prior path` and `Revision trigger` to `Changes from Prior`.
3. Add `Source Input` at the end for raw correction/prompt.
4. Allow omission/redaction with reason.
5. Defer `loop-diagnose`.
6. Use MVL+ on linked findings when diagnosis is needed.

**Prosecution:** This does not itself explain what went wrong.

**Defense:** Correct. That is the point. It captures evidence first and leaves diagnosis to MVL when needed.

**Collision:** Defense wins decisively.

**Verdict:** SURVIVE.

## Phase 4: Coverage Map

### Covered

- Whether to build `loop-diagnose` now.
- Which fields to add.
- Where raw input should go.
- How to preserve readability.
- How future diagnosis still happens.

### Deferred

- Exact CONCLUDE patch.
- Extra frontmatter fields beyond `refines`.
- Automated analysis of correction chains.
- Dedicated `loop-diagnose` protocol.

### Convergence

The answer is stable: lineage first, diagnosis later.

## Signal

TERMINATE with ranked survivors:

1. **Lineage-First Finding Format**: master answer.
2. **Source Input Appendix**: raw evidence capture.
3. **MVL-On-Demand Diagnosis**: future analysis path.
4. **Minimal Lineage Fields**: implementation core.
5. **Separate raw input file**: exceptional fallback.

## Convergence Telemetry

- **Dimension coverage:** Full for the user's question.
- **Adversarial strength:** STRONG. `loop-diagnose` was tested and demoted.
- **Landscape stability:** STABLE.
- **Clean SURVIVE exists:** YES. Lineage-First Finding Format.
- **Failure modes observed:** No premature analysis. No overbuilt protocol. Risk remains that agents may omit raw input unless CONCLUDE explicitly requires or explains omission.
- **Overall: PROCEED**
