# Sensemaking: Finding Lineage Metadata

## User Input

`devdocs/inquiries/finding_lineage_metadata/_branch.md`

Question: Should Homegrown avoid building `loop-diagnose` for now and instead expand the standard `finding.md` format with prior-path and raw-input metadata so future MVL runs have enough lineage data to diagnose correction chains?

## SV1: Baseline Understanding

The user is pushing back on premature diagnostic sophistication. They are probably right: identifying exact failures inside Sensemaking, Innovation, Critique, or CONCLUDE is itself advanced analysis. The immediate missing piece is simpler: preserve the correction chain inside the finding format.

## Phase 1: Cognitive Anchor Extraction

### Constraints

- `finding.md` is the durable artifact most likely to be read later.
- CONCLUDE already supports `refines` frontmatter and a `Changes from Prior` section.
- Discipline outputs preserve some user input but are archived and not always read.
- Raw user correction is often where the important missing/bad/lacking signal lives.
- Failure attribution can be deferred and run through MVL later.
- The main finding should remain readable and not be dominated by raw prompt text.

### Key Insights

- The user is separating data capture from analysis.
- We need lineage before diagnosis.
- Prior path plus raw correction input plus new finding may be enough for later MVL diagnosis.
- `loop-diagnose` may have been too eager to analyze causes.
- Expanding the finding format is a lower-level, more durable improvement.

### Structural Points

- Correction chain requires three anchors: previous finding, user's correction input, new finding.
- `refines` frontmatter is machine-readable but not enough for human readers.
- `Changes from Prior` is human-readable but should gain explicit prior path and revision trigger.
- Raw input belongs at the end as source material, not in the main argument.

### Foundational Principles

- Capture evidence before analyzing it.
- Do not add a protocol when a format extension solves the immediate problem.
- Preserve final finding readability.
- Make future analysis possible without forcing present analysis.

### Meaning-Nodes

- Finding lineage
- Prior path
- Raw input
- Correction chain
- Revision trigger
- Deferred diagnosis
- CONCLUDE template
- Source appendix

## SV2: Anchor-Informed Understanding

The better next step is to extend `finding.md` lineage metadata, not build `loop-diagnose` yet. A corrected finding should carry its prior path, revision trigger, and raw correction input so future MVL analysis can reconstruct the chain.

## Phase 2: Perspective Checking

### Technical / Logical

The current format already has the right insertion points. Frontmatter can hold machine-readable lineage. `Changes from Prior` can hold readable lineage. A final appendix can preserve raw input without disrupting the finding.

### Human / User

This matches how the user reads findings. The main argument stays clean. If the user or future agent needs the raw prompt, it is available at the bottom.

### Strategic / Long-Term

This is a better Level 1 step because it creates durable data with less new machinery. If enough lineage-linked findings accumulate, a future MVL run or protocol can analyze them.

### Risk / Failure

Raw input can be long, messy, or sensitive. It should be optional, redacted if needed, and clearly labeled as source input rather than endorsed conclusion.

### Resource / Feasibility

This is much easier than building a new protocol. It only requires updating CONCLUDE/finding conventions.

### Ethical / Systemic

Preserving raw user input creates a privacy and clutter concern. The standard should allow omission or redaction when the raw input is sensitive or irrelevant.

### Definitional / Consistency

This does not eliminate the possibility of `loop-diagnose`. It demotes it from "next build" to "future analysis tool if lineage data proves useful."

## SV3: Multi-Perspective Understanding

The stable model is:

1. First capture lineage in normal findings.
2. Then use MVL to analyze correction chains when needed.
3. Only later build `loop-diagnose` if repeated manual analysis proves a dedicated protocol is needed.

## Phase 3: Ambiguity Collapse

### Ambiguity: Is `loop-diagnose` still needed?

**Strongest counter-interpretation:**
Yes. Without a protocol, raw lineage data will accumulate but never become insight.

**Why the counter-interpretation fails on structural grounds:**
The project already has MVL as the atomic analysis operation. If a correction chain is captured in findings, MVL can analyze it later. A dedicated protocol is only necessary after repeated MVL analyses show a stable recurring shape.

**Confidence:** HIGH for deferring `loop-diagnose`; MEDIUM for never needing it.

**Resolution:**
Do not build `loop-diagnose` now. Capture finding lineage first. Revisit after several correction chains exist.

**What is now fixed?**
Finding lineage is the next implementation target.

**What is no longer allowed?**
Treating failure attribution as a required immediate output of each corrective finding.

**What now depends on this choice?**
The previous comparative diagnosis finding should be refined.

**What changed in the conceptual model?**
Diagnosis becomes downstream analysis, not first-step infrastructure.

### Ambiguity: Where should raw input live?

**Strongest counter-interpretation:**
Raw input should live only in `_branch.md` or archived discipline outputs to keep findings clean.

**Why the counter-interpretation fails on structural grounds:**
The finding is the durable artifact people actually read. If the raw correction is not reachable from it, future analysis has to chase archive files and may miss the correction signal. The concern about clutter is real but solved by placing raw input at the end.

**Confidence:** HIGH

**Resolution:**
Put raw input at the end of `finding.md` under a `Source Input` or `Raw Input` appendix, optionally collapsible.

**What is now fixed?**
Raw input should be preserved in the finding for correction/refinement runs.

**What is no longer allowed?**
Putting raw input near the top where it disrupts the reader.

**What now depends on this choice?**
CONCLUDE should support an optional final source-input section.

**What changed in the conceptual model?**
Finding becomes both verdict and traceable correction artifact.

### Ambiguity: What fields should be added to Changes from Prior?

**Strongest counter-interpretation:**
The existing `refines` frontmatter is enough.

**Why the counter-interpretation fails on structural grounds:**
`refines` gives a path, but it does not explain why the revision exists or what user correction drove it. A human-readable Changes section should expose that without requiring frontmatter interpretation.

**Confidence:** HIGH

**Resolution:**
Add at least `Prior path` and `Revision trigger` to `Changes from Prior`.

**What is now fixed?**
Revised findings should explicitly name the prior path in the body.

**What is no longer allowed?**
Relying only on frontmatter for revision lineage.

**What now depends on this choice?**
The finding template should change.

**What changed in the conceptual model?**
Lineage becomes first-class.

### Ambiguity: Is raw input always required?

**Strongest counter-interpretation:**
Yes. If raw input is optional, agents will omit it and the data gap remains.

**Why the counter-interpretation fails on structural grounds:**
Some raw input may be too long, sensitive, or irrelevant. A strict always-required rule could pollute findings or preserve material that should not be copied. A better rule is "required for correction/refinement runs unless omitted/redacted with reason."

**Confidence:** HIGH

**Resolution:**
For corrective/refinement findings, include raw input or a redaction/omission note.

**What is now fixed?**
Raw input is conditionally required.

**What is no longer allowed?**
Silent omission of the correction prompt in a revised finding.

**What now depends on this choice?**
CONCLUDE style rules need an omission/redaction allowance.

**What changed in the conceptual model?**
Trace completeness is balanced against readability and privacy.

## SV4: Clarified Understanding

The next system improvement should be finding lineage metadata, not `loop-diagnose`. Add explicit prior path and revision trigger to `Changes from Prior`, and add a bottom `Source Input` appendix for raw user correction/input. This captures enough data for future MVL analysis without forcing advanced failure attribution now.

## Phase 4: Degrees-of-Freedom Reduction

### Fixed

- Finding lineage comes before diagnostic protocol.
- `loop-diagnose` is deferred.
- Raw user correction should be preserved in revised findings.
- Raw input belongs at the bottom.
- `Prior path` and `Revision trigger` should be added to `Changes from Prior`.

### Eliminated

- Immediate failure attribution as standard finding output.
- Dedicated `loop-diagnose` as next build.
- Raw input only in archived discipline files.
- Always-visible raw prompt near the top of the finding.

### Viable Paths

- Update CONCLUDE template.
- Use frontmatter plus Changes from Prior plus Source Input appendix.
- Later run MVL on chains when diagnosis is needed.
- Revisit dedicated protocol after several lineage-linked findings exist.

## SV5: Constrained Understanding

The minimal implementation is a finding-format change. It should make correction chains self-contained enough for future analysis while keeping the main finding readable. This is simpler, safer, and closer to Level 1 instrumentation than a separate diagnostic protocol.

## Phase 5: Conceptual Stabilization

## SV6: Stabilized Model

Homegrown should not build `loop-diagnose` yet. The project should first extend `finding.md` so revised findings preserve the correction chain.

The revised finding format should include:

- frontmatter `refines`;
- body-level `Prior path`;
- body-level `Revision trigger`;
- existing `What's preserved`, `What's changed`, `What's new`, and `Migration`;
- optional end-of-file `Source Input` appendix containing the raw user correction or raw prompt.

This gives future MVL runs enough material to diagnose why an earlier loop failed. It avoids premature failure attribution and lets the project gather real correction-chain data before deciding whether a dedicated protocol is necessary.

SV6 differs from SV1 by producing a concrete format-level refinement: lineage capture first, diagnosis later.
