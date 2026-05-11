# Exploration: Loop diagnose — Memory ambiguity in metaloop ladder

## 1. Mode and Entry Point

- **Mode:** Artifact exploration. The territory contains concrete objects to find: 5 archived discipline outputs (`exploration.md`, `sensemaking.md`, `decomposition.md`, `innovation.md`, `critique.md`) plus `_branch.md`, `_state.md`, and the corrected `finding.md` from the prior inquiry at `devdocs/inquiries/2026-05-09_18-23__metaloop_autonomy_ladder_and_open_design_questions/`.
- **Entry point:** Signal-first. The signal is the L0 Memory cell that misclassified — "human (mental)" — when md files were already system-managed at L0.

---

## 2. Territory Overview

The inquiry-evidence terrain has 6 regions, one per artifact + a 7th cross-cutting region (the failure trail itself):

- **R-A: `_branch.md` of prior inquiry** — original question framing.
- **R-B: `docarchive/exploration.md`** — exploration's treatment of Memory as a concept.
- **R-C: `docarchive/sensemaking.md`** — the discipline charged with ambiguity collapse.
- **R-D: `docarchive/decomposition.md`** — the partition that inherited the un-disambiguated term.
- **R-E: `docarchive/innovation.md`** — the discipline that wrote the L0 row.
- **R-F: `docarchive/critique.md`** — the discipline that should have caught the error in adversarial testing.
- **R-G: cross-discipline failure trail** — the path the term "Memory" took across the pipeline.

---

## 3. Inventory (per region)

### R-A: `_branch.md` of prior inquiry

The original question explicitly listed Memory as one of the 8 axes (in Goal section: *"…Worker, Navigator, Selector, Runner, Evaluator, Memory, Multi-head, Goal-formation…"*). The term was carried in WITHOUT disambiguation. The user did NOT name "Memory" as a concept — it was introduced by the loop builder (me, in the inquiry framing) as an extension of the 5-role frame from the 2026-05-10 finding.

**Finding:** "Memory" entered the inquiry pre-disambiguated as "an axis" but un-disambiguated as a concept. The framing-level decision happened before any discipline ran.

### R-B: `docarchive/exploration.md`

Exploration mentioned Memory in 8 places:
- A1 Multi-axis ladder lists Memory as one of 5–6 axes alongside Navigator, Selector, Runner, Multi-head, Goal-formation.
- A3 hybrid frame mentions "Memory first" as a possible role-graduation order.
- CI-5 ("Memory persistence is independent of role autonomy") states: *"Even L1 (manual selector) can have persistent `_meta_state.md` carrying observations from probe to probe. Memory becomes load-bearing at L2+ when System Selector needs to compare to history."*
- CI-6 connects Reflect → memory channel via `navigation_memory.md`.
- G-2 flags "Reflect → memory channel" as a gap.

Exploration treated `_meta_state.md` as the canonical Memory artifact AND mentioned `navigation_memory.md` at L2. Exploration did NOT inventory the per-inquiry md files (`_branch.md`, `_state.md`, `finding.md`, `docarchive/`) as memory at all. The R-S2 surround layer had "state lives in files" but the implication for L0 (md files at every level are system-managed) was not surfaced.

**Finding:** Exploration didn't surface multiple TYPES of memory (per-inquiry vs cross-inquiry/meta-loop). The "what kinds of memory does the project already have?" signal wasn't probed.

### R-C: `docarchive/sensemaking.md`

Sensemaking has the most extensive Memory treatment (29 mentions). The relevant moments:

- **K7 Anchor:** *"Memory is a hidden axis the user did NOT name."* + identifies `_meta_state.md` as the canonical memory artifact + mentions Reflect-feedback and Navigator-memory as load-bearing at L2+.
- **C-T2 Anchor (Technical):** *"Selector at L2 cannot reliably handle context-directed moves (REVISIT/MERGE/CONSOLIDATE) without persistent memory."* — uses "memory" loosely as "what helps Selector reason about past."
- **Definitional/Consistency check:** Tested *"does the proposal's 'Memory as 7th axis' contradict `_meta_state.md` already being the project's memory artifact?"* — Resolved: *"No — `_meta_state.md` is the artifact; the axis is whether the system READS/WRITES it autonomously vs. a human curating it."* This is the closest moment to type-disambiguation, but it focused on read/write *autonomy* of `_meta_state.md` specifically, not on what other types of memory exist.
- **Ambiguity #6 (Phase 3):** *"Is 'Memory' a separate axis or is it implicit in Navigator-graduation?"* — Resolved as separate axis. Counter-interpretation tested: *"The Navigator-axis already includes memory."* Defense: *"Memory has uses BEYOND Navigator. Selector benefits from outcome-memory; Runner benefits from convergence-memory; Reflect-feedback writes to a memory channel."*
- **Load-bearing concept test (Phase 3):** Tested "5 cognitive roles" and "autonomy ladder" — but **Memory itself was NOT explicitly tested** under the proxy-vs-structural sub-test. The Phase 3 protocol says: *"concepts whose use depends on a runtime determination → test proxy-vs-structural: does this categorical label represent a real structural distinction, or is it an incidental input property used as a proxy?"* — Memory's use IS runtime-determined (per level), but no proxy-vs-structural test was applied to it specifically.
- **SV5 table:** L0 row Memory cell shows `n/a` (not applicable). At this point in the pipeline, the L0 cell was already wrong — it claimed Memory was inapplicable at L0, when in fact per-inquiry memory (md files) WAS applicable.

**Finding:** Sensemaking IDENTIFIED Memory as ambiguous and tested ONE axis of ambiguity (scope: axis-vs-Navigator-only) but MISSED the deeper axis (type: per-inquiry-md-files vs cross-inquiry-meta-loop-state vs Navigator-memory). The load-bearing concept test was applied incompletely — proxy-vs-structural was not run on Memory specifically. The L0 cell error originated in the SV5 stabilization where Memory was tagged "n/a" without verifying per-inquiry memory existed.

### R-D: `docarchive/decomposition.md`

Decomposition treated Memory as one column in the role-allocation table (P1 hub). Its verification criterion 4 said *"Memory axis position is explicit (not implicit) at every level"* — forcing naming per cell but not forcing disambiguation. P4 (movement-direction subset) flagged hidden coupling between Memory and Selector at L3 (REVISIT depends on Memory). P5 (gates) didn't include memory schema requirements at this stage (Critique added that later as a caveat on C2).

**Finding:** Decomposition inherited the un-disambiguated Memory term from Sensemaking. Decomposition's role isn't disambiguation; it's partitioning. Within its scope, it operated correctly — but the upstream ambiguity propagated.

### R-E: `docarchive/innovation.md`

Innovation wrote the L0 row in the final table. The Innovation table at line 217-223 in `docarchive/innovation.md` for L0:
```
| **L0** | system (AI runs MVL+) | human | human | human | n/a (single-head) | human (mental) | human reads/uses | n/a | human seeds | Any inquiry; small graphs; user holds full context |
```

The Memory cell value: **"human (mental)"**.

How did Innovation arrive at this value? Innovation 2.2 (ladder × Reflect-channel) and 5.1 (Reflect-feedback level) operated on Memory as a frame — both PROMOTED Reflect-channel out of Memory but didn't go back to disambiguate Memory itself.

The L0 Memory cell wasn't constructed via mechanism application — it was inherited from Sensemaking SV5 (where it was already "n/a") and lightly elaborated to "human (mental)" in Innovation's table. Innovation's job is to generate variations and test them, but the L0 row received minimal mechanism work compared to L4/L5 — the scrutiny was uneven.

**Finding:** Innovation DIDN'T generate the L0 misclassification — it INHERITED and lightly REPHRASED Sensemaking's already-wrong "n/a" cell into "human (mental)." Innovation's failure was insufficient scrutiny on the L0 row (which wasn't where the variations focused — they focused on the new axes and L2+ commitments).

### R-F: `docarchive/critique.md`

Critique evaluated 12 candidates including C1 (9-axis frame) and C2 (Memory advances alongside role).

For C1: Prosecution said *"Reflect-channel is just a use-case of Memory; Memory + Reflect-axis double-counts."* Defense said *"Memory is what the system remembers (read/write of artifacts); Reflect-channel is what the system DOES with reflection observations (consume → adapt). These are separable."* — This separated Memory from Reflect-channel BUT the defense's articulation of Memory as "read/write of artifacts" should have prompted the question: "WHICH artifacts? Per-inquiry or cross-inquiry?" That follow-up wasn't taken.

For C2: Prosecution focused on coordination ("what if schema isn't ready when Selector graduates?"). Defense focused on the alongside-rule's coherence. Verdict: SURVIVE with caveat. Neither prosecution nor defense interrogated WHAT "Memory" means at L0.

D5 (specification operability) was applied across candidates. For the Memory concept specifically, D5 asked "is the determination mechanism specified?" — answered as "yes, system writes file = system-managed" without questioning whether "Memory" itself was operationally singular.

The multi-axis prosecution depth checks include a specification-gap probe: *"for candidates whose runtime behavior depends on load-bearing concepts (e.g., 'skip if X exists'), probe whether the candidate specifies HOW the load-bearing concept's runtime state is determined."* This was applied to gates and heuristics but not to the Memory concept itself — the term wasn't recognized as the load-bearing concept needing the probe.

**Finding:** Critique had the tooling (D5 specification operability + multi-axis prosecution depth) to catch the term-ambiguity but applied the tooling to commitments (gates, heuristics, MERGE protocol) rather than to the underlying terms in the proposal. The L0 row was tested for proposition-level coherence, not for term-level operability.

### R-G: Cross-discipline failure trail

The path the L0 Memory error took:

```
[Framing] Memory introduced as 8th axis (un-disambiguated, inherited from 2026-05-10 finding)
   ↓
[Exploration] Memory mentioned 8 times; treated _meta_state.md and navigation_memory.md as canonical;
              never inventoried per-inquiry md files as memory
   ↓
[Sensemaking] K7 names Memory; Ambiguity #6 disambiguates ONE axis (scope: axis-vs-Navigator) but NOT
              the deeper axis (type: per-inquiry vs cross-inquiry vs navigator-memory).
              Load-bearing concept test not applied with proxy-vs-structural sub-test on Memory.
              SV5 table claims L0 Memory = "n/a".  ← FIRST WRONG VALUE
   ↓
[Decomposition] Inherits un-disambiguated Memory as a column; correctly partitions (no fault here).
   ↓
[Innovation] Inherits "n/a" from SV5; lightly rephrases to "human (mental)" in L0 row.
              Mechanisms applied broadly but L0 row received less scrutiny than L4/L5 commitments.
              ← SECOND WRONG VALUE (visible in finding)
   ↓
[Critique] D5 specification operability + multi-axis prosecution depth probes APPLIED but to
            commitments (gates, heuristics, MERGE), not to underlying terms.
            C1 prosecution articulates Memory as "read/write of artifacts" — the lead was there,
            not pulled.  ← LAST CHANCE TO CATCH IT, MISSED
   ↓
[CONCLUDE] Compiled L0 row from Innovation's table.
   ↓
[finding.md v1] Published with Memory: human (mental) at L0.
   ↓
[Human correction] "why u say memory is human? we have md files no?"
   ↓
[finding.md v2] Disambiguated correctly (per-inquiry vs cross-inquiry/meta-loop).
```

**Finding:** The error had three would-be catch points: (1) Sensemaking's load-bearing concept test (proxy-vs-structural), (2) Innovation's L0-row scrutiny, (3) Critique's specification-gap probe applied to terms. All three failed, but the FIRST catch point is Sensemaking — by design, that's where ambiguity is supposed to be collapsed. Innovation and Critique are downstream safety nets that compound a missed Sensemaking moment.

---

## 4. Signal Log

| ID | Signal | Source / type | Action |
|---|---|---|---|
| S1 | The user explicitly framed this as "intolerable" | User input — high importance | **Probed** — diagnosis must propose maintenance, not just attribute fault |
| S2 | Sensemaking's Ambiguity #6 disambiguated SCOPE not TYPE | Cross-doc evidence — high relevance | **Probed** (R-C) — primary fault location |
| S3 | Sensemaking's load-bearing concept test was applied to "5 cognitive roles" and "autonomy ladder" but NOT to Memory specifically | Absence signal | **Probed** (R-C) — confirms partial-application of the test |
| S4 | C-T2 Anchor used "persistent memory" loosely | Density signal in Sensemaking | **Probed** (R-C) — symptom of un-disambiguated term |
| S5 | Definitional/Consistency check tested only `_meta_state.md`'s read/write autonomy, not memory types | Cross-doc tension | **Probed** (R-C) — narrowed the test prematurely |
| S6 | Innovation lightly rephrased "n/a" to "human (mental)" without scrutiny | Density signal in Innovation | **Probed** (R-E) — secondary fault |
| S7 | Critique C1 defense articulated "read/write of artifacts" — clue not pulled | Tension signal in Critique | **Probed** (R-F) — tertiary fault (missed catch) |
| S8 | Project-specific risk dimensions in Critique (D2 source-fidelity, D5 spec operability, D9 evidence-gate honesty) don't include "term-disambiguation" axis | Absence signal in Critique | **Probed** — proposes maintenance candidate |
| S9 | The 2026-05-10 prior finding used "Memory" loosely too — did this contaminate framing? | Cross-inquiry signal | **Deferred** — flag in gaps |
| S10 | Loop_diagnose protocol exists exactly for this kind of failure analysis | Method-meta signal | **Noted** — protocol is being applied here |
| S11 | The MVL+ orchestration has no inter-discipline "term safety check" | Loop-framing signal | **Probed** — proposes maintenance candidate |
| S12 | Specific-vs-pattern recognition cue: this specific failure illustrates a broader class (term-used-loosely-in-load-bearing-context) | User input + framing | **Probed** — maintenance candidate must address the class, not just the instance |

---

## 5. Confidence Map

| Region | Status | Notes |
|---|---|---|
| R-A (`_branch.md`) | **Confirmed** | Direct read; framing-level decision documented |
| R-B (Exploration) | **Confirmed** | 8 mentions traced; per-inquiry md files absent |
| R-C (Sensemaking) | **Confirmed** | 29 mentions traced; Ambiguity #6 disambiguated wrong axis; SV5 table has wrong L0 cell |
| R-D (Decomposition) | **Confirmed** | Inherited concept; no fault within scope |
| R-E (Innovation) | **Confirmed** | Light rephrasing without scrutiny |
| R-F (Critique) | **Confirmed** | D5 + multi-axis depth checks applied to commitments not terms |
| R-G (failure trail) | **Confirmed** | 3 catch points named; all 3 failed |
| Whether 2026-05-10 finding's "Memory" usage contaminated this inquiry's framing | **Unknown** (S9 deferred) | Flag in gaps |
| Whether the MVL+ runner spec should add an inter-discipline safety check | **Scanned** (S11) | Maintenance candidate territory; deferred to Innovation stage |

No region adjacent to "Confirmed" is "Unknown" — gaps are at the periphery (cross-inquiry contamination; runner spec changes).

---

## 6. Frontier State

**Stable.** Three exploration cycles produced no new sub-regions after Cycle 2. Cycle 3 was a deliberate jump-scan into "are there OTHER concepts that suffered the same un-disambiguation failure?" The scan surfaced one candidate: **"Reflect-channel"** — Innovation 2.2 introduced it as a separate axis without fully disambiguating "what does Reflect-channel DO at L_N?" — Critique flagged this with "operational details deferred to runner spec" caveat, but the same disambiguation pattern is present in weaker form. This is a recurrence signal supporting the claim that the failure is a *class* of mistake, not a one-off.

Discovery rate: declining sharply. Cycle 1 surfaced 6 regions + 8 signals; Cycle 2 surfaced 4 more signals; Cycle 3 surfaced 1 recurrence example.

Bounded gaps: yes. The two "Unknown" items are at the periphery (cross-inquiry contamination; runner spec maintenance) — the latter is the natural Innovation-stage target.

Convergence: **achieved** on all three criteria.

---

## 7. Gaps and Recommendations

### Gaps (within this inquiry)

- **G-1: Cross-inquiry contamination check.** The 2026-05-10 finding inherited "Memory" loosely; this finding inherited from there. Did the prior inquiry have the same un-disambiguation? Worth a follow-up Read of `2026-05-10_01-30__metaloop_navigator_session_relationship/finding.md` for "Memory" treatment.
- **G-2: Reflect-channel may have the same problem in milder form.** Innovation introduced Reflect-channel as 9th axis; Critique flagged operational details as deferred. The same load-bearing-concept-test gap may apply. Sensemaking should evaluate if this is an instance of the same class.

### Recommendations to next disciplines

- **Sensemaking should:**
  1. Stabilize the failure attribution — primary (Sensemaking shallow load-bearing concept test), secondary (Innovation light L0 scrutiny), tertiary (Critique applied probes to commitments not terms).
  2. Disambiguate the *class* of failure: term-used-loosely-in-load-bearing-context.
  3. Test the recurrence claim (Reflect-channel).

- **Decomposition should:**
  1. Partition the failure surface into hypotheses (Sensemaking gap, Innovation gap, Critique gap, framing gap).
  2. Identify maintenance candidates per hypothesis.

- **Innovation should:**
  1. Generate maintenance candidates against the broader pattern (e.g., a "term safety check" between Sensemaking and Decomposition; a richer load-bearing-concept-test in Sensemaking; a term-disambiguation dimension in Critique).
  2. Apply mechanisms (Domain Transfer, Constraint Manipulation) to find the right scope of maintenance.

- **Critique should:**
  1. Test whether each maintenance candidate actually closes the catch-point that failed.
  2. Apply the multi-axis prosecution depth check to maintenance candidates that themselves involve runtime-determination.
  3. Be skeptical of overclaiming attribution to one discipline when three had a chance to catch.

### What was NOT explored (deliberate scope cuts)

- Whether the L1 Memory cell was wrong in the original finding (was the prior `human curates _meta_state.md` correct?). The user only flagged L0; L1 is downstream. Adjacent inquiry.
- Whether other rows (L2–L5) had same-class errors. Out of this inquiry's narrow scope.
- Whether the broader project has other un-disambiguated terms (e.g., "session," "context," "state"). Adjacent inquiry — pattern-level audit.
