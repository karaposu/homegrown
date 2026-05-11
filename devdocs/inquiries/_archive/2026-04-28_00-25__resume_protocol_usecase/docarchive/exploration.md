# Exploration: Resume Protocol Usecase

## User Input

`devdocs/inquiries/2026-04-28_00-25__resume_protocol_usecase/_branch.md`

## 1. Mode and Entry Point

- **Mode:** Artifact exploration.
- **Entry point:** Signal-first. The user asked whether the standalone Resume protocol has a real use case, because MVL already appears to have resume behavior inline.

Artifacts scanned:

- `homegrown/protocols/resume.md`
- `homegrown/MVL/SKILL.md`
- `homegrown/MVL+/SKILL.md`
- `devdocs/inquiries/_archive/protocols_relevance_check/finding.md`
- `devdocs/inquiries/_archive/continuous_loop_priorities/finding.md`
- `devdocs/inquiries/_archive/continuous_loop_priorities/docarchive/*`
- `homegrown/innovate/references/innovate.md`
- Current `homegrown/protocols/` inventory.

## 2. Exploration Cycles

### Cycle 1: Compare Inline MVL/MVL+ Resume With Standalone Resume

#### Scan

`homegrown/MVL/SKILL.md` and `homegrown/MVL+/SKILL.md` both contain an inline `If RESUME (input is a folder path)` branch.

MVL inline resume:

- read `_state.md` and `_branch.md`;
- determine where the pipeline left off by checking which files exist;
- continue from the first incomplete discipline.

MVL+ inline resume adds:

- verify `flow-type: extended`;
- then perform the same file/state-based continuation.

`homegrown/protocols/resume.md` is different. It is a telemetry-aware protocol that:

- detects pipeline type;
- reads completed discipline output files;
- searches each file for `**Overall: PROCEED**`, `**Overall: FLAG**`, or `**Overall: RE-RUN**`;
- routes based on the first non-PROCEED verdict;
- waits for user decision on FLAG or RE-RUN;
- updates `_state.md` accordingly.

#### Signals Detected

1. **Inline resume already solves basic cross-session continuation.**
2. **Standalone Resume is not just a copy if telemetry exists.**
3. **Standalone Resume is currently not invoked by MVL or MVL+.**
4. **Standalone Resume conflicts with auto-chain behavior when it waits for user decisions mid-pipeline.**

#### Resolution Decision

Probe whether the telemetry-aware behavior is currently usable.

#### Probe

Searched current Homegrown discipline sources for the literal verdict lines expected by `resume.md`.

Only `homegrown/innovate/references/innovate.md` contains the exact `**Overall: PROCEED** / FLAG / RE-RUN` pattern.

This means Resume's unique behavior is mostly dormant. It cannot reliably route on telemetry until the disciplines consistently emit standardized verdicts.

#### Frontier State

The basic distinction is confirmed:

```text
MVL/MVL+ inline resume = file/state continuation
standalone RESUME = telemetry-aware routing, but not currently wired or fully supported
```

#### Confidence Map Update

- Inline resume sufficiency for current use: confirmed.
- Standalone Resume unique logic: confirmed.
- Standalone Resume current usability: low/partial.

### Cycle 2: Prior Protocol Audit

#### Scan

`protocols_relevance_check` said RESUME was alive and embedded in commands. It specifically corrected a stale claim that RESUME lived only inside `/inquiry`; the audit found it implemented in all loop runners as inline behavior.

This finding treated embedding as validation of the protocol concept, not a reason to delete the concept.

#### Signals Detected

1. **RESUME is a real operational concern.**
2. **It is already implemented inline for ordinary continuation.**
3. **The protocol vocabulary remains useful architecturally.**
4. **The extracted file and the embedded behavior are not the same thing.**

#### Resolution Decision

Check later continuous-loop priority findings, because they may have re-evaluated whether the extracted file should stay.

#### Probe

`continuous_loop_priorities` says:

- CONCLUDE is extracted and actively used.
- RESUME is extracted but not invoked.
- Its recommendation was to delete `homegrown/protocols/resume.md`, unless the user prefers a real wire-up.
- It explicitly killed a cosmetic middle option where MVL+ merely points at the file without loading it.
- It allowed a real-wire-up alternative: rewrite `resume.md` as executable and modify MVL+/MVL to load it.

#### Frontier State

Prior work contains a useful tension:

```text
protocol concept = alive
inline basic implementation = alive
extracted file = orphan
telemetry-aware extension = future-possible but unsupported
```

#### Confidence Map Update

- Resume as architectural concern: confirmed.
- Extracted `resume.md` as currently orphan: confirmed.
- Delete versus real-wire-up remains the live disposition choice.

### Cycle 3: Current Protocol Inventory and Telemetry Support

#### Scan

`homegrown/protocols/` contains:

- `conclude.md`
- `resume.md`
- `unknown.md`

CONCLUDE is actively referenced by Homegrown MVL/MVL+. Resume is not loaded by either runner. Unknown appears old or residual.

The standalone Resume protocol depends on standardized telemetry verdicts. Current source search indicates the exact verdict pattern is not broadly present.

#### Signals Detected

1. **CONCLUDE extraction worked because the runners load it.**
2. **RESUME extraction did not work because the runners do not load it.**
3. **Resume's unique behavior depends on a standard that is not broadly implemented.**
4. **If wired in now, Resume would either degrade to backward-compatible PROCEED or pause auto-chain on FLAG/RE-RUN.**

#### Resolution Decision

Separate current use case from future use case.

#### Probe

Current use case:

- resume an interrupted inquiry after context loss, process interruption, or new session;
- resume after a user interrupts mid-pipeline;
- resume an incomplete inquiry folder by continuing from first missing output.

This is already handled inline.

Future use case:

- quality-aware resume after partial work exists;
- detect a prior discipline's self-assessed FLAG/RE-RUN;
- avoid blindly continuing from an output that exists but declared itself weak;
- become a control point for long-running, autonomous, or multi-session loops.

This is standalone Resume's unique value, but it needs standardized verdict telemetry and a user/autonomy routing policy.

#### Frontier State

The main use case is now clear, but the disposition needs critique: delete, keep dormant, wire in simply, or rewrite and wire in after telemetry standardization.

#### Confidence Map Update

- Resume current use: basic continuation, already inline.
- Resume future use: telemetry-aware quality gate, not currently available.
- Need to decide disposition: open for sensemaking/critique.

### Jump Scan: Meta-Loop and Long-Running Context

#### Scan

`homegrown/meta-loop/SKILL.md` has its own `If RESUME` branch:

- read `_meta_state.md`;
- identify `## Next Action`;
- continue exactly from there.

It also resumes incomplete MVL+ inquiries as active frontiers.

#### Result

Long-running meta-loops will need resume behavior even more than single MVL+ inquiries. But this is cross-run state resume, not the same as discipline telemetry resume.

#### Confidence

Resume as a general protocol family is important. The current `homegrown/protocols/resume.md` is only one possible kind: telemetry-aware inquiry resume.

## 3. Territory Overview

Major regions:

1. **Basic inquiry continuation**
   - Implemented inline in MVL/MVL+.
   - Uses `_state.md`, `_branch.md`, file existence, and pipeline order.
   - Main current use case.

2. **Telemetry-aware resume**
   - Implemented only in `homegrown/protocols/resume.md`.
   - Reads `PROCEED / FLAG / RE-RUN`.
   - Unique logic, but currently unsupported by most disciplines.

3. **Completed inquiry re-entry**
   - Resume protocol can say "already COMPLETE" and point to `finding.md`.
   - Useful, but not enough to justify a separate file.

4. **Long-running meta-loop resume**
   - Meta-loop has separate `_meta_state.md` resume behavior.
   - Related protocol family, but not the same file's core.

5. **Autonomy-ready routing**
   - Future need.
   - Resume could become important when no human is always present and stale/flagged partial work must be handled safely.

## 4. Inventory

### Current Confirmed Behavior

- `/MVL devdocs/inquiries/<folder>/` can resume by reading state and continuing from the first incomplete discipline.
- `/MVL+ devdocs/inquiries/<folder>/` can do the same, with extended-flow verification.
- `homegrown/protocols/resume.md` is not currently loaded by MVL/MVL+.
- The standalone Resume file has unique telemetry-aware routing logic.
- That unique logic depends on standardized discipline verdicts that are not yet broadly present.

### Current Gaps

- No runner loads `homegrown/protocols/resume.md`.
- Most Homegrown discipline specs do not appear to emit the exact verdict lines Resume expects.
- No clear policy for what auto-chained MVL/MVL+ should do when Resume sees FLAG/RE-RUN.
- No defined relationship between inquiry resume and meta-loop resume beyond manual composition.

## 5. Signal Log

| Signal | Source | Probed? | Confidence | Meaning |
|---|---|---:|---:|---|
| MVL/MVL+ already resume incomplete folders | `homegrown/MVL*.md` | Yes | Confirmed | Basic resume does not need standalone protocol. |
| Standalone Resume has telemetry-aware routing | `homegrown/protocols/resume.md` | Yes | Confirmed | There is unique logic beyond inline resume. |
| Standalone Resume is not invoked | MVL/MVL+ source scan | Yes | Confirmed | Extracted file is currently orphan. |
| Verdict telemetry is not standardized broadly | `rg Overall` | Yes | Confirmed enough | Resume's unique behavior is mostly unusable now. |
| Prior audit called RESUME alive in commands | `protocols_relevance_check` | Yes | Confirmed | Protocol concern is valid. |
| Later roadmap recommended delete or real-wire-up | `continuous_loop_priorities` | Yes | Confirmed | Orphan state is the problem, not resume concept. |

## 6. Confidence Map

- **Confirmed:** Inline MVL/MVL+ resume covers the main current need.
- **Confirmed:** Standalone Resume contains unique telemetry-aware routing.
- **Confirmed:** The unique logic is currently blocked by missing standardized verdicts and lack of runner integration.
- **Confirmed:** Keeping an orphan protocol creates two-source-of-truth risk.
- **Scanned:** Long-running meta-loop work will need resume semantics, but probably via `_meta_state.md`.
- **Unknown:** Whether discipline telemetry standardization will remain a priority or be dropped.

## 7. Frontier State

Exploration has converged enough for sensemaking.

The likely answer:

```text
Resume's main use case today = cross-session continuation of incomplete inquiries.
MVL/MVL+ already implement that inline.
Standalone Resume's unique logic = telemetry-aware routing on PROCEED/FLAG/RE-RUN.
That unique logic is not usable yet because telemetry verdicts are not broadly standardized and runners do not load resume.md.
```

## 8. Gaps and Recommendations

Recommendations for Sensemaking:

- Distinguish "Resume as concept" from "`homegrown/protocols/resume.md` as file."
- Distinguish current basic resume from future telemetry-aware resume.
- Clarify that the user is right: they do not use the standalone protocol because MVL/MVL+ already resume enough for current manual workflows.
- Decide whether to delete the file now or keep/rewrite it as future protocol only after telemetry standardization.
