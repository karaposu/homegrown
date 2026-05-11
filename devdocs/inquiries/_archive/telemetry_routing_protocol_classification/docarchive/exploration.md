# Exploration: telemetry_routing_protocol_classification

## User Input

`devdocs/inquiries/telemetry_routing_protocol_classification/_branch.md`

Read _branch.md and _state.md. Question: is telemetry-routing (in commands/inquiry.md lines 100-149) structurally a protocol that should be extracted to homegrown/protocols/, OR is it correctly classified per protocols/desc.md doctrine (judging = discipline component; routing = RESUME protocol)?

---

## Mode + Entry Point

- **Mode:** hybrid (artifact + possibility). The doctrine in `thinking_disciplines/protocols/desc.md` is the strong prior; reality (each discipline's actual self-assessment format in `homegrown/`) is the artifact territory to map.
- **Entry point:** signal-first. The protocols/desc.md doctrine gives a precise hypothesis ("disciplines judge; protocols route"). This exploration probes whether the disciplines actually do what the doctrine says.

---

## Cycle 1 — Probe the doctrine vs reality

### What was scanned

- `commands/inquiry.md` lines 100-149 (the telemetry-routing block) — full read.
- `thinking_disciplines/protocols/desc.md` (full doctrine) — already in context.
- Each discipline's reference spec in `homegrown/<discipline>/references/<discipline>.md` — checked for telemetry-section format and PROCEED/FLAG/RE-RUN presence.

### What was found — the asymmetry

**Per the doctrine (protocols/desc.md line 115):**

> *"Discipline telemetry, depth tests, and convergence checks are discipline components — they live INSIDE each discipline's spec and command, not between disciplines. They are how disciplines judge their own output quality (PROCEED / FLAG / RE-RUN)."*

**Per actual reality** (grep over `homegrown/<discipline>/references/<discipline>.md`):

| Discipline | Has telemetry section? | Produces explicit `Overall: PROCEED / FLAG / RE-RUN`? | Format |
|---|---|---|---|
| **innovate** | ✓ Yes (Mechanism Coverage (Telemetry), line 405) | ✓ **YES** (line 420: "Overall: PROCEED ... / FLAG ... / RE-RUN ...") | Doctrine-aligned |
| sense-making | ✓ Yes (Saturation Indicators (Telemetry), line 98) | ✗ No — lists 4 indicators ("indicators, not gates") | Not doctrine-aligned |
| td-critique | Partial (Phase 4 — Coverage + Convergence Assessment, line 226) | ✗ No explicit verdict format | Not doctrine-aligned |
| explore | ✓ Yes (Coverage Strategy + Convergence Criteria, line 182/186) | ✗ No — three criteria stated | Not doctrine-aligned |
| decompose | ✓ Yes (Self-Evaluate, line 165 + Coverage Strategy line 227) | ✗ No — pass/fail per dimension, no overall verdict | Not doctrine-aligned |
| comprehend | ✓ Yes (Coverage Strategy + Convergence Criteria, line 329/333) | ✗ No — convergence criteria but no PROCEED format | Not doctrine-aligned |
| reflect | ✗ No telemetry section visible | ✗ No | Not doctrine-aligned |

**The reality:** of 7 disciplines checked, **only 1 (innovate) actually produces the PROCEED/FLAG/RE-RUN verdict** the doctrine specifies. The other 6 have telemetry-shaped sections but don't standardize the verdict.

### What's in `/inquiry.md` lines 100-149 (the telemetry-routing block)

Two operations conflated:

1. **Step 3b: Read each completed discipline's telemetry section** (operational — find the data)
2. **Step 3c: A CENTRALIZED THRESHOLD TABLE** that /inquiry uses to evaluate the discipline's measurements:

   | Discipline | Key thresholds |
   |---|---|
   | Sensemaking | Perspectives ≥ 3. Ambiguity resolution ratio ≥ 70%. SV delta shows structural change. |
   | Innovation | Generators ≥ 1. Framers ≥ 1. At least one survivor tested. |
   | Critique | All critical-weight dimensions evaluated. Adversarial strength not "weak." |
   | ... | ... |

3. **Step 3d: Route based on the evaluation** (PROCEED / FLAG / RE-RUN with output template)

**Steps 3b and 3d are routing operations** (operational; protocol-shaped). **Step 3c is JUDGMENT** (cognitive evaluation: applying thresholds to raw measurements; producing a verdict). Per doctrine, Step 3c belongs in the disciplines' own self-assessments. /inquiry's centralized threshold table is **a doctrine-violating workaround** for the disciplines not all having explicit PROCEED/FLAG/RE-RUN verdicts.

### Signals detected

- **High-priority signal:** the doctrine and reality don't match. Doctrine says disciplines self-assess and produce PROCEED/FLAG/RE-RUN; reality is only innovate does. /inquiry's threshold table compensates.
- **High-priority signal:** the routing IS a protocol (RESUME, already named in protocols/desc.md line 104) and should be extracted. The judging belongs in disciplines.
- **Medium-priority signal:** the existing reality has TWO architectural fixes possible: (a) update each discipline's telemetry to produce PROCEED/FLAG/RE-RUN, then extract a thin RESUME protocol that just reads the verdict; (b) extract a thicker RESUME protocol that carries the threshold table centrally (less doctrine-correct but less invasive).

### Resolution decision

Zoom in on the precedent (CONCLUDE extraction) and on RESUME's existing definition before scanning further.

---

## Cycle 2 — Probe the CONCLUDE extraction precedent

### What was scanned

`homegrown/protocols/conclude.md` (already in context) and the structural pattern of how `/MVL` and `/MVL+` invoke it.

### What was found

CONCLUDE's pattern:

- **Loading note** at top (file is loaded by /MVL and /MVL+ at iteration-complete-yes; do not summarize).
- **Step 1: Pipeline detection** — detects classic vs extended vs other pipelines from `_state.md`. The protocol adapts to which runner invoked it.
- **Steps 2-6: Compile finding, archive outputs, update state, print summary, print relationships.**
- **Failure modes** at the end.
- **/MVL invocation** (lines 138-148): "Load `homegrown/protocols/conclude.md` in full and execute the **CONCLUDE** protocol on this inquiry's folder." Same in /MVL+ with extended-pipeline framing.

### What this means for telemetry-routing

The CONCLUDE pattern is exactly what RESUME-with-routing should look like:

- **Loading note**: file is loaded by /MVL, /MVL+, and any future runner when invoked with a folder path.
- **Step 1: Pipeline detection** — same as CONCLUDE, detects which pipeline.
- **Step 2: For each completed discipline output, read its telemetry verdict** — assumes disciplines self-assess.
- **Step 3: Route based on verdict** — PROCEED to next discipline / FLAG to user / RE-RUN with feedback.
- **Step 4: Set Next Discipline in `_state.md`.**
- **Failure modes** (e.g., missing telemetry section → backward-compat treat as PROCEED).

The pattern is structurally mature; extraction is straightforward.

### Frontier check

Three things needed for extraction to work cleanly:

1. **Each discipline must produce PROCEED/FLAG/RE-RUN in its telemetry section.** Currently only innovate does. The other 6 need updating.
2. **The RESUME protocol file** itself (~50-100 lines) — pipeline detection + per-discipline verdict-read + routing logic.
3. **/MVL and /MVL+ updated** to load+execute resume.md (replace their current minimal RESUME branches).

Item 1 is the prerequisite. Item 2 and 3 are mechanical.

---

## Cycle 3 — Possibility scan: candidate verdicts

Four candidates for the central question:

### Candidate A: Doctrine-aligned full extraction

- **Step A.1:** Update each discipline's telemetry section to explicitly produce `Overall: PROCEED / FLAG / RE-RUN` (matching innovate's pattern).
- **Step A.2:** Extract `homegrown/protocols/resume.md` containing pipeline detection + per-discipline verdict-read + routing logic.
- **Step A.3:** /MVL and /MVL+ load+execute resume.md when invoked with a folder path. Replaces current RESUME branches.
- **Step A.4:** Update `protocols/desc.md` to mark RESUME as alive-extracted (was alive-embedded in /inquiry).
- **Cost:** Discipline updates (~5-15 lines each × 6 disciplines = ~30-90 lines added) + resume.md (~80-120 lines new) + /MVL/MVL+ load+execute (~5 lines × 2). Substantial but bounded.
- **Doctrine-correctness:** HIGH (judging in disciplines per doctrine; routing as protocol per doctrine).

### Candidate B: Inline migration into /MVL/MVL+ (the prior sensemaking's recommendation)

- Inline the threshold table + routing logic into both /MVL.md and /MVL+.md RESUME branches.
- No new protocol file.
- **Cost:** ~30-50 lines × 2 runners = ~60-100 lines duplicated.
- **Doctrine-correctness:** LOW (centralized threshold table violates "disciplines judge" doctrine; same pattern that motivated CONCLUDE extraction would motivate RESUME extraction).

### Candidate C: Hybrid — extract thin RESUME with centralized threshold table

- Extract resume.md but keep the centralized threshold table inside it (rather than requiring discipline updates).
- /MVL and /MVL+ load+execute.
- **Cost:** resume.md (~80-120 lines) + /MVL/MVL+ load+execute (~5 lines × 2). No discipline updates needed.
- **Doctrine-correctness:** MEDIUM (extraction is correct; centralized threshold table is a temporary workaround for incomplete discipline self-assessment).

### Candidate D: Loose — only check "telemetry section exists?"

- /MVL and /MVL+'s RESUME just check whether each completed discipline's output has a telemetry section. If yes → PROCEED. If no → recommend re-run with telemetry.
- No threshold table; no FLAG branch.
- **Cost:** Trivial (~5-10 lines per runner).
- **Doctrine-correctness:** MEDIUM (matches doctrine on judging-vs-routing split, but loses the FLAG-with-shortfall-guidance feature).

### Candidate E: Skip RESUME-with-telemetry entirely

- Accept the loss. /MVL/MVL+ RESUME just checks file existence (current behavior). No telemetry-routing.
- **Cost:** Zero.
- **Doctrine-correctness:** N/A (this is "don't do telemetry-routing at all," which loses the feature).

### Density check

Density highest around Candidates A and C (both honor extraction; differ on whether disciplines get updated now or later). B is the prior-sensemaking recommendation, which the user is challenging. D is a defensible minimum. E is feature-loss.

---

## Cycle 4 — Probe RESUME's existing definition + name conflict

### What was scanned

`thinking_disciplines/protocols/desc.md` lines 100-110 (Transfer Protocols section).

### What was found

**RESUME** is currently classified in protocols/desc.md as a Transfer protocol (line 104):

> *"RESUME — Pick up a saved inquiry across sessions. Read `_state.md`, determine what's been done, figure out the next step. Currently lives inside `/inquiry`."*

The current RESUME definition is **just session-resume** (cross-session continuation). It doesn't include the per-discipline telemetry-routing. The telemetry-routing is /inquiry's RESUME-with-extra (RESUME-the-name + threshold-routing-the-extra).

**Two interpretations:**

1. **The threshold-routing IS part of RESUME's full job.** "Determine what's been done" includes "and was it done well?" That requires reading telemetry. RESUME-with-threshold-routing is RESUME's full implementation; the current line-104 description is incomplete.

2. **The threshold-routing is a SEPARATE protocol.** RESUME is just file-based state continuation; the telemetry-routing is a different operation (call it VERIFY or QUALITY-ROUTE or similar) that happens TO BE invoked at RESUME points.

### Which interpretation is right?

Looking at /inquiry's actual RESUME procedure (lines 100-149):

1. Read `_state.md` (file-based state continuation) — this IS RESUME core.
2. Read `_branch.md` for context — this is RESUME core.
3. Check pipeline-step quality via telemetry — this is the EXTRA (could be separate protocol).
4. Determine next action — this is RESUME core.

The threshold-routing is **part of the resume operation** (you can't determine "what's the next step" without checking whether the previous step was actually done well). So Interpretation 1 is structurally correct: telemetry-routing IS part of RESUME's full job; the current line-104 description in protocols/desc.md is incomplete.

### Implication

When extracted, the protocol is named **RESUME** (consistent with existing naming). It absorbs both file-based state continuation AND telemetry-aware routing. The protocols/desc.md description gets updated.

Naming alternatives considered and rejected:
- **VERIFY** — implies quality evaluation, which is judging (doctrine-violating).
- **QUALITY-ROUTE** — same issue.
- **TELEMETRY-CHECK** — same issue.
- **ROUTE** — too generic.

RESUME is the right name. The extraction extends RESUME's scope (in protocols/desc.md description) to include telemetry-aware routing.

---

## Cycle 5 — Jump scan + frontier check

### Jump scan: deliberate search in unrelated direction

Searched for any other current protocol that might overlap with telemetry-routing:

- **STEER** (line 86 of protocols/desc.md): "Run a wayfinding checkpoint between iterations." → wayfinding has been deleted (per `wayfinding_navigation_unification_check`); STEER's substance now lives in /navigation. STEER as a separate Pipeline protocol may need re-classification too. Out of scope for this inquiry.
- **TERMINATE** (line 88): "Assess whether convergence criteria are met. Decide to stop the loop." → currently implicit in wayfinding's TERMINATE move. With wayfinding gone, TERMINATE's substance lives in /navigation's TERMINATE type and in CONCLUDE's invocation (the loop runner decides YES/NO; CONCLUDE compiles). No overlap with telemetry-routing.
- **CONFIGURE** (line 84): "Classify a problem, select disciplines, sequence them." → with /inquiry slated for deletion (per `inquiry_md_post_navigation_update_value_check` sensemaking), CONFIGURE becomes a named slot. No overlap with telemetry-routing.
- **freshness checks** (line 96): "Before starting analysis, verify that context is current." → precondition check; runs before pipeline starts, not between disciplines. No overlap.

No other existing protocol overlaps with telemetry-routing. RESUME is the canonical home.

### Frontier state

- The judging-vs-routing factoring is mapped clearly.
- The discipline self-assessment reality (only innovate has explicit PROCEED/FLAG/RE-RUN) is mapped.
- The CONCLUDE precedent for protocol extraction is mapped.
- RESUME's existing definition (incomplete) and the right scope after extension are mapped.
- Candidate verdicts (A through E) are enumerated.

### Convergence check

- ✓ Frontier stability: major regions mapped at sensemaking-ready resolution.
- ✓ Declining discovery rate: cycles 4-5 produced fewer new anchors than cycles 1-3.
- ✓ Bounded gaps: the unmapped region (whether each discipline can be cleanly updated to produce PROCEED/FLAG/RE-RUN; sensemaking can reason about this).

**Convergence reached.** Exploration done.

---

## Final Deliverable — The Structural Map

### 1. Territory Overview

The territory has four major regions:

- **The doctrine** (`protocols/desc.md` line 9, 36, 78, 115, 118): protocols route, disciplines judge.
- **The reality** (homegrown/<discipline>/references/<discipline>.md): only innovate has explicit PROCEED/FLAG/RE-RUN; the other 6 disciplines have telemetry-shaped sections in different formats.
- **The conflated implementation** (commands/inquiry.md lines 100-149): mixes judging (centralized threshold table — Step 3c) and routing (Steps 3b and 3d). Step 3c is doctrine-violating workaround.
- **The CONCLUDE precedent** (homegrown/protocols/conclude.md): clean protocol-extraction pattern with pipeline-detection + procedural steps + failure modes; invoked by /MVL and /MVL+ via load+execute.

### 2. Inventory

**Doctrine inventory:**
- Protocols route; disciplines judge (line 36, 118).
- Quality evaluation is NOT a protocol category (line 78).
- Discipline telemetry is a discipline component (line 115).
- RESUME is named as Transfer protocol "Currently lives inside /inquiry" (line 104).

**Discipline reality inventory:**
- innovate: PROCEED/FLAG/RE-RUN explicit ✓
- sense-making: 4 indicators, "not gates" ✗
- td-critique: Coverage + Convergence Assessment, no verdict ✗
- explore: Convergence Criteria, no verdict ✗
- decompose: Self-Evaluate pass/fail per dimension, no overall ✗
- comprehend: Convergence Criteria, no verdict ✗
- reflect: no telemetry section ✗

**Conflated /inquiry implementation inventory:**
- Step 3b: read telemetry (routing operation)
- Step 3c: centralized threshold table (judgment — doctrine-violating)
- Step 3d: PROCEED/FLAG/RE-RUN routing (routing operation)

**CONCLUDE precedent inventory:**
- Loading note (~3 lines)
- Step 1 pipeline detection (~10 lines)
- Steps 2-6 procedural (~150 lines total)
- Failure modes (~10 lines)
- /MVL and /MVL+ invocation (~5 lines per runner)

**Candidate verdicts inventory:**
- A: doctrine-aligned full extraction (update disciplines + extract RESUME)
- B: inline migration into /MVL/MVL+ (prior sensemaking's recommendation; doctrine-violating)
- C: hybrid — extract thin RESUME with centralized threshold table (doctrine-temporary-workaround)
- D: loose — telemetry-section-exists check only (doctrine-aligned but feature-light)
- E: skip telemetry-routing entirely (feature-loss)

### 3. Signal Log

| Signal | Where detected | Probed? | Status |
|---|---|---|---|
| Doctrine vs reality asymmetry | protocols/desc.md vs each discipline's reference file | ✓ | High-priority. The doctrine claims disciplines self-assess; reality is only innovate does. |
| /inquiry's centralized threshold table is doctrine-violating workaround | /inquiry.md lines 100-149 + protocols/desc.md doctrine | ✓ | High-priority. Step 3c is the conflation point. |
| RESUME is the existing canonical name for the routing protocol | protocols/desc.md line 104 | ✓ | High-priority. No new naming needed. |
| CONCLUDE precedent is the extraction template | homegrown/protocols/conclude.md | ✓ | High-priority. Pattern is mature; extraction is mechanical given pre-requisite (discipline updates). |
| 6 of 7 disciplines need telemetry-section update for clean extraction | direct grep over homegrown/<discipline>/references/<discipline>.md | ✓ | High-priority. This is the prerequisite for Candidate A. |
| No other protocol overlaps with telemetry-routing | jump scan over STEER / TERMINATE / CONFIGURE / freshness | ✓ | Medium-priority. Confirms RESUME is the right home. |
| /MVL and /MVL+ current RESUME logic is minimal | their RESUME branches | ✓ | Medium-priority. Replacement is straightforward. |

### 4. Confidence Map

| Region | Confidence | Reasoning |
|---|---|---|
| The doctrine's judging-vs-routing split | **Confirmed** | Direct quotes from protocols/desc.md. |
| Each discipline's actual telemetry format | **Confirmed** | Direct grep over homegrown/<discipline>/references/<discipline>.md. |
| /inquiry's lines 100-149 conflating judging+routing | **Confirmed** | Read in full; Step 3c is the conflation. |
| CONCLUDE extraction precedent | **Confirmed** | Read homegrown/protocols/conclude.md in full. |
| RESUME as the right name | **Confirmed** | protocols/desc.md line 104 names it explicitly. |
| Whether each discipline can be cleanly updated to produce PROCEED/FLAG/RE-RUN | **Inferred** | innovate's pattern is the template; mechanical to apply to others. Sensemaking can confirm. |
| Whether the user prefers Candidate A (full doctrine alignment) vs C (extract-with-workaround) | **Unknown** | Sensemaking + critique will decide based on cost/benefit. |
| Whether reflect (which has no telemetry section) needs one at all | **Unknown** | Reflect is a backward-looking discipline; may not need PROCEED/FLAG/RE-RUN since its output isn't a pipeline-blocking quality gate. |

### 5. Frontier State

**STABLE.** All major regions mapped. The bounded unknown (which Candidate the user prefers, and whether reflect needs telemetry parity) is a sensemaking-resolvable question.

### 6. Constraints any answer must honor

- **Doctrine:** protocols route; disciplines judge. The judging cannot live in a routing protocol; it belongs in disciplines.
- **Naming:** RESUME is the existing name; extension preserves it.
- **CONCLUDE precedent:** load+execute pattern via Skill tool / file Read; pipeline detection in Step 1.
- **Backward compatibility:** the current "no telemetry section → treat as PROCEED" rule must be preserved (older outputs and standalone discipline runs may not have telemetry).
- **Bounded edit cost:** prefer extraction approach that minimizes total edits across the project.
- **Reachability:** if Candidate A is chosen, the prerequisite (update disciplines to produce PROCEED/FLAG/RE-RUN) must be feasible — the innovate pattern shows it is.

### 7. Frontier Questions for Sensemaking

1. **Is telemetry-routing a protocol?** Yes — the routing portion is RESUME (existing name). The judging portion is a discipline component (doctrine-correct location). The conflation in /inquiry's lines 100-149 is the workaround for disciplines not all having explicit PROCEED/FLAG/RE-RUN.

2. **Where should it live post /inquiry deletion?** Extract RESUME to `homegrown/protocols/resume.md` following the CONCLUDE pattern. /MVL and /MVL+ load+execute.

3. **Does Candidate A (full doctrine alignment with discipline updates) win over Candidate C (extract-with-centralized-threshold-table)?** Trade-off: A is more invasive (~30-90 line additions across 6 discipline reference files; their commands/<discipline>.md files too) but fully doctrine-aligned. C is less invasive (no discipline changes) but carries a doctrine-violating threshold table inside the protocol.

4. **Does reflect need a PROCEED/FLAG/RE-RUN telemetry section?** Reflect is backward-looking (process observations); its output is not a pipeline-blocking quality gate. Maybe reflect is exempt — its self-assessment is "did the reflection notice patterns?" but no PROCEED/FLAG/RE-RUN routing applies because reflect isn't between disciplines in the same way.

5. **Should the protocol be named RESUME or something more descriptive (like RESUME-WITH-VERIFY)?** RESUME is the canonical name; the extension to include telemetry-aware routing is part of RESUME's full job. Renaming would create coordination cost. Keep RESUME.

6. **What about the existing /inquiry-deletion plan from the prior sensemaking?** The prior sensemaking recommended inline migration into /MVL/MVL+ (Candidate B). This inquiry's verdict will SUPERSEDE that recommendation if it converges on Candidate A or C (extraction).

7. **Will the discipline updates trigger a cascade?** Updating each discipline's telemetry to produce PROCEED/FLAG/RE-RUN may surface other doctrine-misalignments (e.g., reflect's backward-looking framing). Worth flagging as a follow-up audit.

### 8. Recommendations for Sensemaking

Sensemaking should ground its analysis in:
- The doctrine (protocols/desc.md is canonical text on this question — no interpretation needed).
- The discipline reality (only innovate aligns; the other 6 need updating for full doctrine compliance).
- The CONCLUDE extraction precedent (proven pattern; mechanical to apply).
- The cost-benefit of Candidate A (doctrine-aligned, more edits) vs Candidate C (extraction-only, doctrine-tempo­rary-workaround).

Sensemaking should produce a verdict on the central question (telemetry-routing IS a protocol — RESUME — that should be extracted) and on the discipline-update question (Candidate A vs C). Decomposition will then break the migration plan into independent pieces; innovation will design specific wordings; critique will evaluate.

---

## Cross-Run Tracking (Telemetry)

* **Mode:** hybrid (artifact + possibility)
* **Cycles run:** 5
* **Convergence criteria:** all three met (frontier stable, declining discovery rate, bounded gaps).
* **Failure modes observed:** None.
  - Premature depth? No — broad scan in cycle 1 before probes in cycles 2-4.
  - Surface-only scanning? No — probed at depth on three high-priority signals.
  - False confidence? Mitigated via jump scan in cycle 5.
  - Premature termination? No — convergence criteria explicitly checked.
  - Re-exploration? No — frontier-tracked across cycles.
  - Completeness bias? Tested — included Candidates B (the prior sensemaking's recommendation; doctrine-violating) and E (skip entirely; feature-loss) explicitly even though the territory disfavors them.
* **Coverage assessment:** Doctrine fully mapped; reality across all 7 disciplines mapped; CONCLUDE precedent mapped; RESUME definition mapped; candidate verdicts enumerated. The unknown region (user's Candidate A vs C preference; reflect's exemption status) is bounded and sensemaking-resolvable.
* **Discovery rate trend:** high in cycles 1-2 (the doctrine-vs-reality asymmetry; CONCLUDE precedent), declining in cycles 3-5 (jump scan and possibility scan produced fewer new anchors).
* **Overall: PROCEED to sensemaking.**
