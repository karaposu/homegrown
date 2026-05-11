---
status: active
---
# Finding: protocols_relevance_check

## Question

Is the protocols dimension (described in `thinking_disciplines/protocols/desc.md` as a second dimension alongside thinking disciplines, with categories Pipeline / Transfer / Persistence and ~16 named protocols) still relevant given the current architecture, has it been superseded by the existing loop runners (`/MVL`, `/MVL+`, `/inquiry`), or does it identify still-missing pieces required for the project's stated goals?

**Goal.** Three possible verdicts with clear consequences: (a) still relevant — refresh the doc and identify which protocols are alive vs absorbed vs missing-and-needed; (b) superseded — archive the doc; or (c) missing piece — identify what to build first. The user should leave with a concrete delete/keep/update call on `protocols/desc.md` plus a per-protocol status list and a small punch list of next moves.

---

## Finding Summary

- **The protocols dimension is still relevant — and identifies real missing pieces — but is NOT a missing piece itself in any single sense.** The question "is X still relevant?" has three different referents: the file, the architectural concept, and the 16 named individual protocols. Each admits a different verdict on the same evidence. Treating the trichotomy as a single verdict loses information. (Detailed in the Finding section under "Three referents, three verdicts.")

- **The doc (`thinking_disciplines/protocols/desc.md`): UPDATE, do not archive.** The conceptual core is sound; the per-protocol status table is partially stale (4 specific stale claims). Recommendation is **Configuration β** — fix the stale entries, add a cross-reference to `loop_design_1/2/3.md`, and add an autonomy-ladder mapping section that surfaces the load-bearing-for-stated-goal claim. ~1.5–2 hours of doc edits. Configuration α (just fix the stale entries; ~30–45 min) is the acceptable minimum.

- **The architectural concept (protocols-as-a-second-dimension-alongside-disciplines): STILL RELEVANT.** The two-dimensions framing (disciplines × protocols) survives every structural test — internally consistent (the GATE protocol's earlier dissolution proves the frame self-corrects), externally validated (cross-domain check against Agile / Science / Law all show content × procedural dimensions), generative (predicts the shape of missing protocols), and empirically supported (5 named protocols are alive in commands with the structure the framework predicts). The dimension occupies the orchestration space that `enes/discipline_taxonomy.md` explicitly leaves outside the 4-category discipline taxonomy.

- **The 16 named protocols: per-protocol triage.** 5 alive-and-absorbed in commands (CONFIGURE, STEER, TERMINATE, RESUME, SYNTHESIZE — no action needed); 3 alive-partial / generalized (BRANCH-as-rationale, folder convention, archival — accurate location notes needed); 1 alive as discipline component (CV persistence in `/comprehend`); 2 removed (metadata injection hook gone; freshness checks via `CLAUDE.md` which doesn't exist — status table needs correction); 6 missing — and these 6 map 1:1 to specific autonomy-ladder capabilities the project commits to in `enes/desc.md`.

- **The 6 missing protocols are load-bearing for the stated long-term goal, not arbitrary gaps.** VERSION → Baldwin cycle calibration; SCOPE → autonomy-level-aware effort calibration; BRANCH (formal step) → parallel MVL loops; MERGE → combining parallel-branch outputs; HANDOFF → cross-agent context transfer; BRIEF → cold-start for an active-participant agent. Each maps to a specific Level-2-or-higher autonomy capability in `enes/desc.md`.

- **None of the 6 missing protocols should be built right now, except possibly VERSION.** Sequencing per `enes/desc.md` makes `/intuit` Phase A the immediate next step. The other 5 missing protocols are deferred to autonomy-ladder rungs not yet reached. **VERSION is the borderline case** — it enables the Baldwin cycle calibration that `/intuit` Phase A's calibration depends on, so it may need attention sooner than the others. Recommendation: defer VERSION with a named trigger ("when /intuit Phase A produces iteration-comparable invocation traces") rather than build now. Building speculatively risks designing the wrong shape.

- **`thinking_disciplines/protocols/desc.md` and the `enes/loop_desing_ideas/loop_design_N.md` series are complementary, not redundant.** Loop_design is runner-first ("what does THIS runner do across these design dimensions?"); protocols-doc is concept-first ("what operational concerns exist generally, with status across the codebase?"). Different access patterns; both stay; cross-references in both directions.

---

## Finding

### 1. Three referents, three verdicts

The user's question — "still relevant / superseded / missing piece" — is a trichotomy that admits a single verdict only if the question is asked about one specific thing. In practice the question has three plausible referents — the file, the architectural concept, and the 16 named individual protocols — and each admits a different verdict on the same evidence. Treating the question as if it has one referent produces the wrong answer for the other two.

**Referent 1 — the file `thinking_disciplines/protocols/desc.md`.**
Verdict: **UPDATE.** The doc is internally accurate on its conceptual core (the definition; the "disciplines judge / protocols route" boundary; the four-category structure with Quality dissolved; the cross-domain validation). Its per-protocol status table is partially stale in 4 specific places (described below). Updating the stale entries plus adding cross-references and an autonomy-ladder mapping costs ~1.5–2 hours and produces a doc that is both accurate and load-bearing-claim-visible.

Archiving the doc would lose the named-vocabulary infrastructure that makes future architectural conversations possible: "we need a HANDOFF protocol" is a specific, debatable architectural request; "we need some way to transfer context" is a vague wish. The vocabulary itself is architecture.

**Referent 2 — the protocols dimension as architectural concept (protocols-as-a-second-dimension-alongside-disciplines).**
Verdict: **STILL RELEVANT.** The two-dimensions framing (content × procedural; disciplines × protocols) survives:
- Internal consistency check — every named protocol fits the doc's own definition; the doc's framework dissolves its own GATE protocol when GATE is recognized as cognitive work, proving the frame can self-correct.
- Cross-domain validation — Agile (user stories × ceremonies), Science (experiments × peer review/publication), Law (substantive law × procedure) all show the same content-vs-procedural split.
- Generative test — the framework predicts the shape of missing protocols; those predictions match the shapes that `enes/desc.md`'s autonomy-ladder requires.
- Empirical test — 5 named protocols (CONFIGURE, STEER, TERMINATE, RESUME, SYNTHESIZE) are alive in commands with the structure the framework predicts.

The protocols dimension occupies the orchestration space that `enes/discipline_taxonomy.md` explicitly leaves outside its 4-category discipline taxonomy. The dimension is not redundant with the discipline taxonomy; it complements it.

**Referent 3 — the 16 named protocols, individually.**
Verdict: per-protocol triage. The 16 protocols decompose into 5 categories of status:

| Group | Count | Names | Action |
|---|---|---|---|
| Alive — embedded in commands | 5 | CONFIGURE, STEER, TERMINATE, RESUME, SYNTHESIZE | No action |
| Alive — partial / generalized | 3 | BRANCH (rationale-only, in `folder_based.md`), folder convention, archival (runner-embedded) | Status entries need accurate location notes |
| Alive — discipline component | 1 | CV persistence (in `/comprehend`) | No action |
| Removed | 2 | Metadata injection hook (`hooks/devdocs_metadata_appender.sh` deleted), freshness checks (was supposed to live in `CLAUDE.md`, which doesn't exist) | Status table needs correction |
| Missing — needed for stated goals | 6 | SCOPE, BRANCH (formal step), MERGE, HANDOFF, BRIEF, VERSION | Annotate with build triggers (Step 1(f) of punch list) |

The 6 missing protocols are not arbitrary gaps. Each maps 1:1 to a specific autonomy-ladder capability the project commits to in `enes/desc.md`:

| Missing Protocol | Capability It Unblocks | Source in `enes/desc.md` |
|---|---|---|
| **VERSION** | Baldwin cycle calibration — comparing Predictive RC predictions at T0 to Retrospective RC outcomes at T2+ requires iteration history | "The Evolutionary Mechanism — Baldwin Cycles" section |
| **SCOPE** | Autonomy-level-aware effort calibration — Level 2 ("reviews uncertain only") requires distinguishing routine from uncertain | "The Human's Role" table, Level 2 row |
| **BRANCH (formal step)** | Parallel MVL loops with per-branch sub-pipelines | Open Question #4 |
| **MERGE** | Combining results across parallel branches | Open Question #4 (same) |
| **HANDOFF** | Cross-agent or cross-session full-context transfer | Level 3+ row of "The Human's Role" table |
| **BRIEF** | Cold-start for an active-participant agent (continues, doesn't just read) | Same trigger as HANDOFF (different shape) |

### 2. What's stale in the doc, specifically

The status-table claims that need correction:

1. **Metadata injection** — claimed "Implemented as the `devdocs_metadata_appender.sh` hook." Reality: the `hooks/` directory was deleted earlier in this session per user direction. The hook does not exist.
2. **`/devdocs-archivist`** — claimed "Exists as the `/devdocs-archivist` command." Reality: not present in `commands/`. Per-inquiry archival is now embedded in `/MVL` and `/MVL+` ITERATION-COMPLETE step (discipline outputs move to `docarchive/` when the finding is written), but the standalone command is gone. Cross-inquiry stale-detection (the original `/devdocs-archivist` use case) is currently absent.
3. **RESUME** — claimed "Currently lives inside `/inquiry`." Reality: RESUME is implemented in all three loop runners (`commands/MVL.md`, `commands/MVL+.md`, `commands/inquiry.md`), each with the same procedure (read `_state.md` + file-existence cross-check, continue from first incomplete discipline).
4. **Folder convention** — claimed at `devdocs/folder_based.md` and "not yet battle-tested." Reality: the file is at `enes/runtime_environment/folder_based.md`, and the convention is in active daily use (every inquiry under `devdocs/inquiries/` follows it; the inquiry that produced this finding used it).

The doc's "Current State" count table at the end lists "7 functional, 3 underspecified, 6 missing." Actual current state is closer to 5 alive-absorbed + 3 alive-partial + 1 alive-as-discipline-component + 2 removed + 6 missing.

### 3. Why deletion is rejected

Delete-and-archive saves a small file but loses what the doc actually provides: a named-vocabulary index of operational concerns. Without it, conversations about cross-agent transfer, parallel branch coordination, iteration versioning, and effort calibration have to be re-derived from architectural first principles each time. The vocabulary itself is the artifact.

The doc is also empirically validated: 5 of its named protocols are demonstrably alive in commands. Deleting a partly-stale-but-conceptually-sound architectural map to avoid maintaining its status table is wrong cost-benefit.

### 4. Why "build all six missing protocols now" is rejected

`enes/desc.md` is explicit: `/intuit` Phase A is the immediate next buildable step. The 6 missing protocols correspond to capabilities downstream of `/intuit` maturity (Level 2 and above). Building any of them now competes with the project's stated immediate priority and risks designing wrong-shape specs without concrete capability-requirements to anchor the design.

The exception that almost survives is VERSION: the Baldwin cycle (which `/intuit` Phase A produces calibration data for) compares iteration-N predictions to iteration-N+1 outcomes. If `/MVL`/`/MVL+`'s overwriting iteration-N's outputs with iteration-N+1's destroys the comparison surface, calibration fails. This argues for VERSION earlier than the other 5.

But: even VERSION should be deferred until `/intuit` Phase A produces concrete iteration-comparable invocation traces. The risk of designing speculatively is higher than the risk of waiting — `/intuit`'s actual production may reveal that invocation traces themselves carry enough version-history information, OR may reveal needs that current per-iteration-subfolder design doesn't satisfy. Wait for the data, then design.

### 5. Why "unify protocols/desc.md and loop_design_N.md" is rejected

These two doc families cover overlapping ground but with different access patterns:
- **Loop_design_N.md** (runner-first) — "What does `/MVL+` do? What design dimensions did `/MVL` choose?"
- **`protocols/desc.md`** (concept-first) — "What operational concerns exist generally, with status across the codebase? Is there a way to handoff context?"

A reader investigating runner-specific behavior is poorly served by jumping into a concept-first doc. A reader investigating "is there a HANDOFF protocol?" is poorly served by reading 3 runner-specific docs. They are complementary, not redundant. Both stay. Cross-references in both directions (Steps 3 and 5 of the punch list).

### 6. Why over-engineering is reconciled with the project's trajectory

The most uncomfortable angle on the protocols dimension: at current scale (3 loop runners + ~10 disciplines + a few hooks), embedded-in-commands handles all the operational concerns adequately. A separate dimension is bureaucratic overhead.

This is partially true *for current scale*. It is wrong *for the project's stated trajectory*. At Level 3+ autonomy (parallel MVL loops, year-long autonomous tasks, cross-agent handoff), embedded-in-commands cannot scale — the operational concerns become entangled across runners. The protocols dimension is named-but-deferred infrastructure for that transition. The cost of carrying named vocabulary now is low (one doc, periodic updates); the cost of NOT having it when Level 3+ arrives is high (no shared vocabulary for the architectural conversation).

This matches `enes/desc.md`'s general pattern: bootstrap from human; prepare for emancipation. Protocols are operational prep for emancipation.

### 7. The recommended path: Configuration β

Six steps, ~1.5–2 hours of doc edits across two files. No code changes. No build commitments.

(Steps detailed in Next Actions below.)

Configuration α (Steps 1, 3, 6 only) is the acceptable fallback if the user wants minimum-effort intervention. The trade-off: load-bearing-for-stated-goal claim is not visible to readers; the reader must do the cross-doc analysis the audit just performed.

---

## Next Actions

### MUST

- **What:** Apply Step 1 (status table corrections in `thinking_disciplines/protocols/desc.md`).
  - **Who:** User. Concrete edits with proposed wording are in `critique.md` Step 1 (sub-steps a–f).
  - **Gate:** Whenever the user wants the doc to stop misleading readers (any time).
  - **Why:** Eliminates 4 specific stale claims (metadata injection, /devdocs-archivist, RESUME location, folder_convention path + battle-tested status); updates the Current State count table; adds inline build-trigger annotations to all 6 missing protocols. Without this, the doc misleads readers about specific implementations and undersells the audit's per-protocol findings.

- **What:** Apply Step 3 (add "How Protocols Relate to Loop Runners" cross-reference section to `protocols/desc.md`).
  - **Who:** User. Proposed wording in `critique.md` Step 3.
  - **Gate:** Same as Step 1 (do them together).
  - **Why:** Without this, a reader of `protocols/desc.md` does not discover that `enes/loop_desing_ideas/loop_design_1/2/3.md` exist as the runner-first companion view.

- **What:** Apply Step 4 (add "How the Missing Protocols Connect to the Autonomy Ladder" section to `protocols/desc.md`).
  - **Who:** User. Proposed wording in `critique.md` Step 4 (table form).
  - **Gate:** Same as Steps 1 and 3 (do them together).
  - **Why:** This section IS the audit's distilled value. Without it, readers see corrected status entries and a cross-reference to loop_design but don't see the structural argument that the 6 missing protocols are load-bearing for the stated long-term goal. Without surfacing the load-bearing claim, the audit's most important finding doesn't transfer to readers.

### COULD

- **What:** Apply Step 2 (add a "Build trigger / invalidation condition" column to all category tables, applying to ALIVE protocols too — symmetric structure).
  - **Who:** User.
  - **Gate:** Optional. Apply if user values symmetric structure and light prep for Baldwin-cycle maturity (when alive protocols may need a "Last calibrated" column hosted in the same column slot). Skip if user prefers leaner.
  - **Why:** Symmetric treatment of all protocols. Anticipates future structure where alive protocols also carry annotations beyond their status. The high-value content (build triggers for missing protocols) is already captured by Step 1(f) inline annotations; this step's value is structural prep.

- **What:** Apply Step 5 (add `loop_design_1.md` reciprocal back-reference to `protocols/desc.md`).
  - **Who:** User.
  - **Gate:** Apply alongside Steps 3-4 if doing them; defer if running Configuration α.
  - **Why:** Bidirectional cross-references serve readers approaching from either entry point. Targeted to `loop_design_1.md` (the cross-runner taxonomy) rather than all 3 loop_design files reduces maintenance surface to ~3 lines in 1 file.

### DEFERRED

- **What:** Build VERSION protocol (design + integration into /MVL & /MVL+).
  - **Gate:** Revisit when (a) `/intuit` Phase A produces N≥10 iteration-comparable invocation traces, OR (b) iteration-history loss in /MVL/MVL+ runs causes an observable problem. Either trigger is condition-bound, not time-bound.
  - **Why (if revived):** Without VERSION, the Baldwin cycle has no comparison surface for iteration-history-dependent state changes (spec edits, discipline output evolution). Build will require deciding implementation form — per-iteration sub-folders, versioned filenames, or iteration-aware metadata — based on what `/intuit` Phase A reveals about Baldwin's actual needs.

- **What:** Build SCOPE protocol.
  - **Gate:** When autonomy ladder reaches Level 2 ("reviews only uncertain self-modifications" per `enes/desc.md`'s Human's Role table). Condition-bound; not before.
  - **Why (if revived):** Level 2 autonomy requires distinguishing routine from uncertain inquiries; SCOPE encodes that distinction at inquiry-startup time.

- **What:** Build BRANCH (formal step) and MERGE protocols.
  - **Gate:** When parallel-MVL-loops capability begins design (`enes/desc.md` Open Question #4). Condition-bound. MERGE depends on BRANCH; build BRANCH first.
  - **Why (if revived):** Parallel MVL loops with cross-comparison is an explicit Level-3 capability in the project's stated long-term goal. BRANCH creates the parallel branches; MERGE combines their outputs.

- **What:** Build HANDOFF and BRIEF protocols.
  - **Gate:** When autonomy ladder reaches Level 3+. Condition-bound.
  - **Why (if revived):** Level 3+ autonomy includes cross-agent or cross-session work. HANDOFF transfers full context; BRIEF cold-starts an active-participant agent.

- **What:** Restructure `protocols/desc.md` as ADR-style per-protocol mini-sections (Configuration γ's anchor, Configuration P1.C in innovation).
  - **Gate:** Revisit if any of (a) multiple authors begin editing `protocols/desc.md` regularly, OR (b) the doc grows past ~400 lines, OR (c) any 2 of the 6 missing protocols get implemented (making per-protocol pages have real content beyond status).
  - **Why (if revived):** Architecturally clean; matches ADR pattern; scales to multi-author and multi-protocol future. Premature for current scale (single author, low edit rate, missing protocols not yet implemented).

- **What:** Move autonomy-ladder mapping content to `enes/desc.md` (Configuration δ's P2.C).
  - **Gate:** Unlikely revival. Touches a stable doc that has been carefully refined through 5 prior inquiries; destabilization risk outweighs single-source-of-truth benefit. Revisit only if `enes/desc.md` undergoes a major restructure for unrelated reasons and integration becomes free.
  - **Why (if revived):** Avoids ~25 lines of duplication. But duplication is mild and the autonomy-ladder structure is stable.

- **What:** Declare VERSION permanently unnecessary based on `/intuit` invocation traces being sufficient (P4.D).
  - **Gate:** Revisit at `/intuit` Phase A maturity. Re-run the analysis: do invocation traces contain enough version-history information for Baldwin calibration? If yes, VERSION may be unnecessary. If no, VERSION is required.
  - **Why (if revived):** Avoids building unnecessary infrastructure. But the assumption that invocation traces carry enough information is unverified today; declaring VERSION unnecessary now would be over-claiming on weak evidence.

---

## Reasoning

### Why the verdict has three referents (and the trichotomy can't collapse to one)

The user's question "still relevant / superseded / missing piece" has three plausible referents: the file, the dimension-as-concept, and the named protocols. Each referent is structurally distinct:
- The file is an artifact that can be updated, archived, or deleted.
- The dimension is an architectural concept that can be valid or invalid as a framing.
- The named protocols are individuals, each with its own status.

Asking "is X still relevant?" produces different answers for each referent on the same evidence. Conflating them produces single-point answers that are wrong for the unconsidered referents. The audit's job was to recognize this and produce structured verdicts.

### Why `update + cross-reference + autonomy-mapping` (Configuration β) is the recommended action

The audit produced two specific findings worth preserving for readers:
1. The status table has 4 stale entries — readers landing on the doc are misled.
2. The 6 missing protocols are load-bearing for the stated goal — not arbitrary gaps.

Configuration α (Steps 1, 3 only) preserves only the first finding. Configuration β preserves both. The marginal cost of β over α (~30–60 minutes of additional editing for the autonomy-ladder mapping section + symmetric Build-trigger column + reciprocal back-link in `loop_design_1.md`) buys the load-bearing-surfacing dimension entirely. Configuration γ (P1.C ADR restructure + P4.B speculative VERSION spec) is premature; γ was killed in critique.

### What was killed and why (full prosecution map)

- **Pure deletion of `protocols/desc.md`** — KILLED. Loses the named-vocabulary infrastructure; the conceptual core is sound; deletion saves a small file at the cost of a future-load-bearing architectural map.
- **Pure preservation of the doc as-is** — KILLED. 4 specific stale claims accumulate misleading readers over time.
- **P1.C (ADR-style restructure of `protocols/desc.md`)** — KILLED for current scale. Premature for single-author / low-edit-rate / no-implementations state. Revisit at named triggers (multi-author, doc>400 lines, OR 2+ missing protocols implemented).
- **P2.C (move autonomy-ladder mapping into `enes/desc.md`)** — REFINE → P2.B. Destabilization risk on a carefully-stabilized doc outweighs the single-source-of-truth benefit. The mapping lives in `protocols/desc.md` (the operational doc); a one-line cross-reference in `enes/desc.md` is acceptable but not required.
- **P3 skip (no reciprocal back-reference in `loop_design_N.md`)** — REFINE → P3.B. Asymmetric reference (forward only) creates a real navigation gap; targeted back-reference in `loop_design_1.md` is the correct minimum.
- **P4.C (build VERSION now)** — KILLED. Sequencing violation: `enes/desc.md` is explicit that `/intuit` Phase A is the immediate next step. Building VERSION now competes with that priority and risks designing wrong-shape spec without concrete `/intuit` Phase A data to anchor the design.
- **P4.D (declare VERSION permanently unnecessary)** — KILLED. Over-claim on unverified assumption. The skeptical position has merit as a HYPOTHESIS to test at `/intuit` Phase A maturity, but as a permanent disposition it forecloses options without evidence.
- **Configuration γ as compound** — KILLED. Its anchor (P1.C) is killed; if user wants γ-level ambition, replace P1.C with P1.B and γ collapses to enhanced β.
- **Configuration δ as compound** — KILLED. Anchors P2.C (REFINE → P2.B) and P4.D (KILLED) both invalidated.

### What survived and why (full defense map)

- **The doc's verdict: UPDATE (not archive, not delete).** The doc's conceptual core (definition; "disciplines judge / protocols route" boundary; 4-category structure with Quality dissolved; cross-domain validation) survives every structural test. Only the per-protocol status table is stale.
- **The dimension's verdict: STILL RELEVANT.** The dimension survives internal consistency, cross-domain validation, generative test (predicts shapes for missing protocols), empirical test (5 alive protocols match the framework's predictions), and trajectory argument (architectural prep for Level 3+ autonomy). The "over-engineering for current scale" objection is reconciled by recognizing that the dimension is named-but-deferred infrastructure for autonomy-ladder progression.
- **The named protocols' verdict: per-protocol triage.** 5 alive-absorbed (no action); 3 alive-partial (location notes); 1 alive-as-discipline-component (no action); 2 removed (status table corrections); 6 missing-with-build-triggers (annotations).
- **P1.A (status fixes), P2.B (autonomy mapping), P3.B (targeted back-reference), P4.A (defer VERSION with trigger)** all SURVIVED with clean verdicts.
- **P1.B (P1.A + symmetric column)** SURVIVED with a caveat — symmetric column for alive protocols is light maintenance burden for marginal value; P1.A is sufficient if user wants leaner.
- **Configuration β (P1.B + P2.B + P3.B + P4.A)** SURVIVED as the recommended default — the only configuration where every weighted dimension scores HIGH.
- **Configuration α (P1.A + P2.A + skip + P4.A)** SURVIVED as fallback — viable for minimum-effort intervention; trades load-bearing-surfacing for ~1 hour of avoided work.

### Why VERSION is the borderline case among missing protocols

The Baldwin cycle requires comparing Predictive RC predictions at T0 to Retrospective RC outcomes at T2+ (`enes/desc.md` "The Evolutionary Mechanism"). Comparison requires iteration history. If `/MVL` and `/MVL+` overwrite iteration-N's outputs with iteration-N+1's, the comparison surface for Baldwin calibration is destroyed.

This is the only one of the 6 missing protocols whose absence may bite at Level 0–1 — specifically when `/intuit` Phase A produces calibration data and there's nothing to calibrate against because iterations have been overwritten.

But: it's not yet known whether `/intuit` invocation traces themselves carry enough version-history to substitute for VERSION. If they do, VERSION may be unnecessary. If they don't, VERSION is needed. That analysis can only be run when `/intuit` Phase A produces real data.

Recommendation: defer VERSION with a named trigger (P4.A). Don't speculate the spec now (P4.B); don't build now (P4.C); don't declare unnecessary now (P4.D). Wait for the data.

---

## Open Questions

### Refinement Triggers

- **Configuration γ revival (P1.C ADR restructure):** revisit if (a) multiple authors begin editing `protocols/desc.md` regularly, OR (b) the doc grows past ~400 lines, OR (c) any 2 of the 6 missing protocols get implemented.
- **Configuration δ revival (P2.C move autonomy-mapping):** unlikely; touches stable `enes/desc.md`. Revive only if `enes/desc.md` undergoes major restructure for unrelated reasons and integration becomes free.
- **VERSION build (P4.B or P4.C):** revive when `/intuit` Phase A produces N≥10 iteration-comparable invocation traces, OR when iteration-history loss in /MVL/MVL+ causes an observable problem. Either trigger is condition-bound.
- **VERSION declared unnecessary (P4.D):** revive analysis at `/intuit` Phase A maturity; re-run "do invocation traces contain enough version-history?"
- **Other 5 missing protocols (SCOPE, BRANCH, MERGE, HANDOFF, BRIEF):** revive at corresponding autonomy-ladder rungs (Level 2 for SCOPE; parallel-loops design for BRANCH/MERGE; Level 3+ for HANDOFF/BRIEF).

### Monitoring

- After Configuration β is applied, observe whether the autonomy-ladder mapping section in `protocols/desc.md` actually surfaces the load-bearing claim to future readers. If readers continue to ask "is the protocols dimension still relevant?", the surfacing failed and a different framing may be needed.
- Watch whether `/intuit` Phase A produces iteration-history needs that override the "wait and design" stance on VERSION. If concrete needs emerge, P4.A → P4.B → P4.C is the natural progression.

### Blocked

- A definitive answer to whether VERSION is needed at all blocks on `/intuit` Phase A producing real invocation-trace data. Cannot be resolved before that.
- A definitive shape for VERSION (per-iteration sub-folders vs versioned filenames vs iteration-aware metadata) blocks on the same data.
- Sequencing of HANDOFF / BRIEF / SCOPE / BRANCH / MERGE blocks on autonomy-ladder progression evidence (Level 2+ test outcomes).

### Research Frontiers

- Whether the protocols dimension at Level 3+ autonomy will require additional named protocols not yet imagined (the doc's own stated possibility: "Others not yet imagined may prove essential"). No known way to enumerate them in advance; emergence will reveal them.
- Whether the ADR-style per-protocol structure (P1.C, deferred) will dominate over the single-doc structure once any of the missing protocols ships. Empirical question; revisit at first implementation.
