# Innovation: Comparative MVL Loop Diagnosis

## User Input

`devdocs/inquiries/comparative_mvl_loop_diagnosis/_branch.md`

Question: Should Homegrown's next self-maintenance step be a comparative diagnostic protocol that analyzes failed and improved MVL inquiry runs, rather than trying to build advanced autonomous self-maintenance directly?

## Seed

The user's actual improvement loop is: run MVL, dislike the finding, give correction, rerun MVL, get a better finding. That sequence contains high-value evidence about what the first loop missed. Homegrown needs a way to mine it.

## Mechanism 1: Lens Shifting

### Generic Variation

View failed MVL runs as training examples. The bad run is not waste; it is labeled data for improving the loop.

### Focused Variation

View the user correction as the label. The user is saying, "this is the missing dimension, wrong assumption, weak critique, or bad framing."

### Contrarian Variation

View the improved run as a diagnostic instrument. The later finding reveals which content or structure was absent in the first finding.

## Mechanism 2: Combination

### Generic Variation

Combine git diff + postmortem + reflection:

`loop-diagnose` compares inquiry artifacts like a diff, but explains process causes like a postmortem.

### Focused Variation

Combine comparative diagnosis + self-maintenance ledger:

The output should be maintenance candidates, ready to become entries in `devdocs/self_maintenance.md`.

### Contrarian Variation

Combine benchmark data + user coaching:

Each correction chain becomes one supervised training example for future orchestration and discipline improvement.

## Mechanism 3: Inversion

### Generic Variation

Invert "Reflection should inspect each run" into "Reflection should inspect failed-to-fixed chains."

This exposes a stronger evidence source than a single run self-reporting.

### Focused Variation

Invert "build self-maintenance logic" into "build the data source that reveals what self-maintenance should fix."

This prevents premature architecture.

### Contrarian Variation

Invert "the better run is the goal" into "the better run is evidence about the bad run."

The loop's learning value comes after the better finding exists.

## Mechanism 4: Constraint Manipulation

### Generic Variation

Add the constraint: no system-level improvement claim without a comparative diagnosis or repeated reflection evidence.

### Focused Variation

Add the constraint: no attribution without evidence from at least two of three sources:

- bad run,
- user correction,
- improved run.

### Contrarian Variation

Remove the constraint that this must be a full discipline.

It can start as a protocol or template. If it proves useful, it can become a discipline.

## Mechanism 5: Absence Recognition

### Generic Variation

The missing artifact is a **correction-chain diagnosis**.

### Focused Variation

The missing input type is **multiple inquiry folders plus user feedback**.

### Contrarian Variation

The missing output is not a better answer. It is a **system failure attribution** that explains why the first loop did not get there.

## Mechanism 6: Domain Transfer

### Generic Variation

From incident postmortems:

Treat a bad finding as an incident. The later correction is the recovery. The postmortem asks what process allowed the incident.

### Focused Variation

From machine learning:

Treat the bad finding and improved finding as a labeled pair. The protocol extracts features of failure and builds a dataset.

### Contrarian Variation

From code review:

Treat the user's correction as review comments. The protocol asks whether the original "author" should have caught each issue during Sensemaking, Innovation, Critique, or CONCLUDE.

## Mechanism 7: Extrapolation

### Generic Variation

If this is not built, valuable correction data will remain trapped in chats and forgotten.

### Focused Variation

If this is built, Homegrown can rapidly accumulate evidence about which discipline specs are weak.

### Contrarian Variation

If advanced self-maintenance is built first, it will lack the data needed to know what to maintain.

## Candidate Set

### Candidate A: Extend Reflection Into Multi-Run Mode

Modify Reflection so it can accept multiple inquiry folders and compare them.

### Candidate B: New Protocol `loop-diagnose`

Create a distinct protocol that reads bad/improved inquiry chains and writes a diagnosis artifact.

### Candidate C: New Full Discipline `comparative-diagnosis`

Create a full discipline with references, failure modes, and telemetry.

### Candidate D: Self-Maintenance Ledger First

Create `devdocs/self_maintenance.md` before any diagnostic protocol.

### Candidate E: Manual Template Only

Create a simple Markdown template for humans to fill out when they rerun MVL.

### Candidate F: Direct Fundamental Patch

Let the diagnostic immediately edit Sensemaking, Innovation, Critique, or MVL specs.

## Test Phase

### Candidate A: Extend Reflection Into Multi-Run Mode

- **Novelty:** Low.
- **Scrutiny survival:** Mixed. It reuses an existing concept but risks bloating Reflection and blurring input shapes.
- **Fertility:** Medium.
- **Actionability:** Medium.
- **Mechanism independence:** Moderate.
- **Verdict:** Refine. Keep Reflection separate for now; maybe let it consume diagnosis outputs later.

### Candidate B: New Protocol `loop-diagnose`

- **Novelty:** Moderate.
- **Scrutiny survival:** Strong. It directly matches the new input shape and avoids overloading Reflection.
- **Fertility:** Strong. It creates self-maintenance data.
- **Actionability:** Strong. Can start as Markdown-native.
- **Mechanism independence:** Strong. Absence recognition, domain transfer, and inversion converge on it.
- **Verdict:** Survivor.

### Candidate C: New Full Discipline `comparative-diagnosis`

- **Novelty:** Moderate.
- **Scrutiny survival:** Strong in the long term, but may be too much for the first implementation.
- **Fertility:** Strong.
- **Actionability:** Medium.
- **Mechanism independence:** Strong.
- **Verdict:** Refine. Start as protocol; promote to discipline after enough examples.

### Candidate D: Self-Maintenance Ledger First

- **Novelty:** Low because prior finding already proposed it.
- **Scrutiny survival:** Strong but incomplete. A ledger without diagnosis still lacks good entries.
- **Fertility:** Strong if paired with `loop-diagnose`.
- **Actionability:** Strong.
- **Mechanism independence:** Strong.
- **Verdict:** Survivor as paired component, not standalone replacement.

### Candidate E: Manual Template Only

- **Novelty:** Low.
- **Scrutiny survival:** Weak to medium. It is cheap but too dependent on human discipline and will not standardize enough.
- **Fertility:** Medium.
- **Actionability:** Strong.
- **Mechanism independence:** Low.
- **Verdict:** Refine. Use a template inside `loop-diagnose`, not as the whole system.

### Candidate F: Direct Fundamental Patch

- **Novelty:** Low.
- **Scrutiny survival:** Weak. It skips evidence accumulation, confidence, and retain/revert.
- **Fertility:** Risky.
- **Actionability:** Medium.
- **Mechanism independence:** Weak.
- **Verdict:** Kill.

## Assembly Check

The strongest assembly is:

1. Build `loop-diagnose` as a lightweight protocol.
2. It accepts multiple inquiry folders and user feedback.
3. It writes `diagnosis.md` in a diagnosis folder.
4. It produces maintenance candidates, not direct spec edits.
5. It can optionally create or propose entries for `devdocs/self_maintenance.md`.
6. Existing Reflection stays separate and may later reflect on accumulated diagnosis folders.
7. If `loop-diagnose` proves useful across 5-10 cases, promote it to a full discipline with references and telemetry.

## Proposed `loop-diagnose` Output Shape

```markdown
# Loop Diagnosis: [topic]

## Inputs
- Bad inquiry:
- User correction:
- Improved inquiry:
- Additional context:

## Finding Delta
[What changed between the bad and improved findings.]

## User Correction Signals
[What the user said was missing, wrong, shallow, or badly framed.]

## Failure Attributions
### [Failure name]
**Likely source:** Sensemaking / Innovation / Critique / CONCLUDE / Framing / Orchestration
**Evidence from bad run:**
**Evidence from correction:**
**Evidence from improved run:**
**Why this source:**
**Confidence:** HIGH / MEDIUM / LOW
**Maintenance candidate:**

## Maintenance Candidates
[Candidate entries for self-maintenance ledger.]

## Data Value
[What this example teaches the system.]
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
- **Convergence:** YES. Multiple mechanisms converge on a lightweight comparative diagnostic protocol before advanced self-maintenance.
- **Survivors tested:** 6 / 6
- **Failure modes observed:** none materially. The run explicitly avoided premature autonomy and early frame lock.
- **Overall: PROCEED**
