# Exploration: Innovate Discipline - Definite Gaps From Corpus Evidence

## User Input

devdocs/inquiries/2026-05-08_03-00__innovate_definite_gaps_from_corpus_evidence/_branch.md

## Mode and Entry Point

- **Mode:** Artifact exploration (concrete files exist: the spec, the placement convention, 7 chain `finding.md` files, 7 chain `docarchive/innovation.md` files).
- **Entry point:** Signal-first. The user named two specific hypotheses to probe (paradigm/dimension gap vs. allocated-compute). Probing those signals first organizes the territory faster than a blind frontier scan.

## Territory Overview

Three interrelated regions to map:

- **Region A — The current spec.** `homegrown/innovate/references/innovate.md` (the discipline spec loaded by the `/MVL+` runner during Innovation execution; ~420 lines covering: 7 mechanisms split 4G+3F, 5 tests, 6 failure modes, assembly check, coverage strategy, telemetry).
- **Region B — What Innovation actually produced.** Each chain inquiry has a `docarchive/innovation.md` artifact — the actual Innovation output during that chain's MVL+ execution. Seven such artifacts exist. This is the new evidence layer this analysis adds (sister analyses for explore.md / sensemaking.md / decompose.md did not read docarchive).
- **Region C — What LOOP_DIAGNOSE concluded was the right answer.** Each chain inquiry has a `finding.md` artifact synthesizing the discipline outputs into a verdict. Seven such artifacts. Comparing Region B (what Innovation generated) against Region C (what the chain ultimately concluded) reveals where Innovation succeeded, where it underperformed, and what was missing from its toolkit.

## Inventory

### Region A — What `innovate.md` Currently HAS

| Component | Form |
|---|---|
| Process model | Seed → Generate → Test → Iterate, three phases cyclic |
| Mechanisms | 7 total (4 Generators: Combination, Absence Recognition, Domain Transfer, Extrapolation; 3 Framers: Lens Shifting, Constraint Manipulation, Inversion) |
| Coverage rule | Minimum: 1G + 1F. Full: all 7. Convergence signal: 3+ mechanisms point to the same innovation |
| Tests | 5 criteria per surviving output (novelty, scrutiny survival, fertility, actionability, mechanism independence) |
| Assembly check | After testing individual outputs, examine survivors collectively for emergent value |
| Failure modes | 6: Premature Evaluation, Single-Mechanism Trap, Early Frame Lock, Innovation Without Grounding, Mechanism Exhaustion, Survival Bias |
| Termination | When an output: (a) survives scrutiny, (b) is fertile, (c) is actionable. Or when mechanisms are exhausted (which is itself valid information) |
| Telemetry | Mechanism count, convergence signal, test completion, failure-mode check, overall PROCEED/FLAG/RE-RUN |

### Region B — What Innovation Actually Produced (7 Chains)

The corpus shows striking consistency across all 7 chains:

| Chain | Mechanisms applied | Candidates generated | Output dispositions used |
|---|---|---|---|
| 1 (`2026-05-07_15-01`) | 7/7 (4G+3F) | M1–M9 (9 candidates) | ACTIONABLE, DEFERRED-with-revival-trigger |
| 2 (`2026-05-07_15-35`) | 7/7 | N1–N9 (9 candidates) | ACTIONABLE, DEFERRED |
| 3 (`2026-05-07_16-28`) | 7/7 | O1–O8 + M6 PROMOTION | ACTIONABLE, DEFERRED, **RESEARCH FRONTIER** (Q-RF introduced) |
| 4 (`2026-05-07_16-57`) | 7/7 | R1–R8 + 2 M6 refinements | ACTIONABLE, DEFERRED, RESEARCH FRONTIER |
| 5 (`2026-05-07_18-24`) | 7/7 | S1–S8 + N9 PROMOTION + 1 M6 refinement deferred | ACTIONABLE, DEFERRED, RESEARCH FRONTIER |
| 6 (`2026-05-07_19-08`) | 7/7 | T1–T8 + 2 cross-chain promotions (M6-S2 + TP3) | ACTIONABLE, DEFERRED, RESEARCH FRONTIER, **DOCUMENTARY OBSERVATION** (Two-Layer Failure Framing) |
| 7 (`2026-05-07_20-02`) | 7/7 | U1–U9 + DEFERRED M6-refinement-U + DEFERRED U9 | ACTIONABLE, DEFERRED, PENDING, RESEARCH FRONTIER, DOCUMENTARY OBSERVATION |

Across all 7 chains: full mechanism coverage, multi-variation generation (typically 3 variations per mechanism — generic / focused / contrarian), assembly check, telemetry self-check confirming "Overall: PROCEED."

### Region C — What Chain Findings Promoted

Comparison of what Innovation produced (Region B) vs. what the chain finding ultimately promoted (Region C):

- Chain 1 finding promotes **M1–M3, M7, M8** as ACTIONABLE — exactly Innovation's ACTIONABLE recommendations. Defers M4, M5, M6, M9 — exactly Innovation's deferred candidates.
- Chains 2–7 follow the same pattern: findings track Innovation's output 1:1, including the disposition labels (ACTIONABLE / DEFERRED with revival triggers / RESEARCH FRONTIER / DOCUMENTARY OBSERVATION).

**Observation:** Innovation is not "missing the right answer" — its output IS what the finding ultimately promotes. The finding selects from Innovation's candidate set rather than introducing new content.

But Innovation IS doing things innovate.md doesn't prescribe.

## Signal Log

### Signal 1 — DENSITY at Innovation-targeted axis-coverage rules (4 chains)

Four of seven chains produced an Innovation-targeted candidate that addresses **axis-coverage in the candidate space**:

| Chain | Candidate | Axis pair the rule names |
|---|---|---|
| 2 | **N3** — Innovation candidate-axis decoupling rule | operation-trigger × output-storage |
| 4 | **R3** — Innovation phase-conditional candidate generation | policy-content × phase-conditional |
| 5 | **S3** — Innovation differential-classifier candidate generation | trigger-classifier-type × structural-vs-input |
| 6 | **T3** — Innovation discovery-mechanism candidate generation | operation-policy × discovery-mechanism |

Each rule names a different specific axis. The **meta-pattern** common to all four: when the candidate space has multiple orthogonal axes, the candidate set should vary along each axis. A candidate set that varies along only one axis (when multiple are relevant) is incomplete.

**Probe result:** chain 1's Innovation produced six candidates that varied only along storage-style (full registry, append-only, per-file, hybrid, scan-only, consumed-set) — single-axis. The user later supplied the missing no-storage axis ("simply search the codebase"). Chains 2, 4, 5, 6 each surfaced the same kind of single-axis bias and proposed a fix at the Assembly Check sub-section. The pattern is observable, recurrent, and structurally recognizable.

### Signal 2 — ABSENCE of "DEFERRED with revival trigger" disposition in the spec (7 chains use it)

All 7 chains use DEFERRED-with-revival-trigger as a disposition for candidates that survive testing but have insufficient evidence (single-chain primary cause / low mechanism independence). The spec has only:
- ACTIONABLE: survives all 5 tests + becomes terminating output
- KILLED: fails tests → becomes new seed
- EXHAUSTED: all mechanisms tried, nothing survives

The corpus uses a third disposition extensively: DEFERRED with explicit revival trigger (e.g., *"revive when 3+ chains show the same pattern"*). This preserves valuable observations without overreaching from thin evidence.

**Probe result:** chain 1 finding's Reasoning section explicitly justifies the deferral pattern by citing LOOP_DIAGNOSE Step 5: *"Do not propose broad fundamentals rewrites from one weak correction chain... M4, M5, M6, M9 each have plausible value... Killing them would lose the promotion path; promoting them would overreach. Deferral with concrete revival triggers preserves both options."* The pattern is corpus-aware behavior driven by LOOP_DIAGNOSE's own guardrails — not by innovate.md.

### Signal 3 — NOVELTY: Research Frontier disposition introduced in chain 3, recurs in 5 chains

Chain 3's Innovation introduces **Q-RF (Quality-Awareness Gap)** as a Research Frontier marker — an observation that is real and important but requires multi-phase architectural work (per `enes/desc.md`'s Predictive RC architecture) that exceeds per-inquiry-patch scope. Chain 3's finding states explicitly: *"NOT a maintenance candidate; framed as Research Frontier in the diagnostic finding's Open Questions / Research Frontiers subsection."*

Chains 4, 5, 6, 7 reinforce Q-RF with successive specific instances (calibration-awareness, proxy-vs-structural, operational-discovery-gap, vocabulary-naturalness). 5/7 chains use this disposition.

**Probe result:** Innovation in this corpus was able to recognize system-level observations because the runner cross-referenced the project's stated architecture (`enes/desc.md`). innovate.md does NOT prescribe this — there is no mechanism in the current spec that would direct a runner to (a) recognize when an observation exceeds per-inquiry scope, (b) preserve it as Research Frontier instead of killing it. A fresh runner using only innovate.md would either KILL the observation (lose the signal) or PROMOTE it (overreach beyond inquiry scope).

### Signal 4 — TENSION: spec's binary survives-or-fails framing vs. corpus's multi-disposition reality

The spec's termination logic is binary:
> "The process terminates when a novel output: 1. Survives scrutiny 2. Opens new territory (is fertile) 3. Is actionable... Or when you've exhausted mechanisms and nothing survives — which is itself valuable information"

The corpus's actual termination uses 4 dispositions: ACTIONABLE / DEFERRED-with-revival-trigger / RESEARCH-FRONTIER / DOCUMENTARY-OBSERVATION. The binary framing in the spec is a structural simplification that the corpus's complexity has outgrown.

### Signal 5 — DENSITY: Innovation's outputs in this corpus are very thorough (refutes the "allocated compute" hypothesis)

Average chain `docarchive/innovation.md` size: ~450 lines. Each chain applies all 7 mechanisms with 3 variations each (= 21 variation entries), produces 6–9 candidates with full strength/weakness/test/verdict per candidate, runs assembly check, runs telemetry. No chain shows thin or rushed Innovation output.

**Probe result:** the user's hypothesis "maybe it is about allocated compute" is contradicted by the evidence. Innovation has plenty of compute and uses it thoroughly.

## Confidence Map

| Region | Confidence | Reason |
|---|---|---|
| innovate.md spec contents | **CONFIRMED** | Read in full |
| Placement convention | **CONFIRMED** | Read in full |
| All 7 docarchive innovation.md outputs | **CONFIRMED** | Read in full |
| Chain 1 finding (representative) | **CONFIRMED** | Read in full |
| Chain 3 finding (Q-RF emergence) | **SCANNED** | Read top section establishing Q-RF framing |
| Other chain findings (2, 4, 5, 6, 7) | **INFERRED** | Re-read in prior sister analyses; same context applies; finding-output relationship is consistent across the corpus |
| Allocated-compute hypothesis | **CONFIRMED ABSENT** as the issue | Innovation runs are thorough, not thin |
| Paradigm/dimension gap hypothesis | **CONFIRMED PARTIALLY** | The gap is NOT in mechanism breadth (7 mechanisms cover generation space) but in (a) axis coverage at the candidate-set layer and (b) output disposition vocabulary |
| Whether axis-coverage rule exists in innovate.md | **CONFIRMED ABSENT** | Spec read in full; no axis-coverage check in Assembly Check section |
| Whether DEFERRED disposition exists in innovate.md | **CONFIRMED ABSENT** | Spec uses binary survives/fails |
| Whether RESEARCH FRONTIER exists in innovate.md | **CONFIRMED ABSENT** | Spec has no concept of system-level observations |
| Whether cross-corpus composition (M-N-O-R-S-T-U scheme) is innovate.md's responsibility | **UNKNOWN** | Plausibly LOOP_DIAGNOSE-protocol-specific rather than discipline-spec content |

## Frontier State

**STABLE.** Three coherent observations have crystallized:

1. **Hypothesis on allocated compute is REJECTED by the evidence.** Innovation runs are thorough.
2. **Hypothesis on paradigm/dimension gap is PARTIALLY SUPPORTED.** The gap is not in mechanism breadth — it is at two specific layers:
   - (i) **Axis coverage at the Assembly Check.** Innovation operates within the candidate-space corridor inherited from upstream (Sensemaking + Decomposition); without explicit axis-decoupling, single-axis candidate sets pass through. Multi-chain convergence (4 chains × 4 distinct axes) makes this for-sure missing.
   - (ii) **Output disposition vocabulary.** The spec has binary ACTIONABLE/KILLED; the corpus uses DEFERRED-with-revival-trigger (7 chains) and RESEARCH-FRONTIER (5 chains). Multi-chain convergence makes both for-sure missing, with DEFERRED having the strongest evidence.
3. **Innovation is NOT missing the right answer.** Findings select from Innovation's candidate set 1:1. The for-sure-missing rules are about HOW Innovation generates and dispositions outputs, not WHAT outputs Innovation reaches.

### Jump Scan (deliberate scan in a different direction)

Before declaring convergence, scan for missing **meta-mechanisms** that the corpus uses but the spec doesn't list. Looking at all 7 chains' mechanism applications: each chain applies exactly the 7 mechanisms in innovate.md (Combination, Absence Recognition, Domain Transfer, Extrapolation, Lens Shifting, Constraint Manipulation, Inversion). No chain introduces a new mechanism. The mechanism set itself is complete for the generation operation.

The gaps are downstream of generation: at the Assembly Check (axis coverage) and at termination (disposition vocabulary). Not in the mechanism set itself.

## Gaps and Recommendations

### Two for-sure-missing rules

**Rule A — Axis Coverage Check at Assembly.** When Innovation generates candidates for a problem with multiple orthogonal axes, the Assembly Check must verify that the candidate set varies along each axis. A candidate set that varies along only one axis (despite the problem having multiple orthogonal axes) is incomplete and the Assembly Check should explicitly identify the missing axis or axes.

- Corpus evidence: 4 chains × 4 distinct axes (operation-storage in chain 2's N3; phase-conditional in chain 4's R3; structural-vs-input classifier in chain 5's S3; discovery-mechanism in chain 6's T3) — strong cross-cutting convergence on the meta-pattern.
- Failure-of-absence: chain 1 generated 6 storage-style candidates and missed the no-storage axis the user later supplied. Chain 3 (preflight wording) generated cosmetic-variant candidates without the orthogonal-naming axis. Multi-instance.
- Success-of-presence: corrected loops in each chain produced multi-axis candidate sets; the per-chain Innovation rules (N3/R3/S3/T3) codify the fix at specific axes.
- Canonical home (per the placement convention's step-level scope category): Phase 3 / Test → Assembly Check sub-section.
- Cross-reference: at Phase 2 / Generate, mention that candidates should cover all relevant orthogonal axes (the Assembly Check verifies this).

**Rule B — Output Disposition Categories beyond binary survives/fails.** When an output passes the 5-test cycle, the disposition depends on evidence shape and observation type:
- **ACTIONABLE** if multi-source / multi-mechanism convergent.
- **DEFERRED with explicit revival trigger** if single-source or single-chain (preserve option to refine on more evidence; killing loses the path, promoting overreaches).
- **RESEARCH FRONTIER** if the output requires multi-phase architectural work or otherwise exceeds per-inquiry scope (preserve as observation in the finding's Open Questions / Research Frontiers subsection; do not propose as candidate).
- **DOCUMENTARY OBSERVATION** if the output is corpus-level rather than candidate-level (record in finding's Reasoning section, not as a candidate).

- Corpus evidence: DEFERRED used in 7/7 chains; RESEARCH FRONTIER in 5/7 chains (chains 3–7); DOCUMENTARY OBSERVATION in 2/7 chains (chains 6, 7). DEFERRED is the strongest evidence; RESEARCH FRONTIER passes; DOCUMENTARY OBSERVATION is borderline.
- Failure-of-absence: a fresh runner using only the spec would handle thin-evidence outputs by either KILLING (overreach in pruning, lose information) or PROMOTING (overreach in adoption). Both are wrong outcomes.
- Success-of-presence: chains 1–7 use DEFERRED + revival triggers successfully (preserve option without overreach); chains 3–7 use RESEARCH FRONTIER successfully (preserve system-level observations without forcing per-inquiry implementation).
- Canonical home: Phase 3 / Test, after the 5-test table or in the Termination section. The dispositions are post-test categorizations of survivors.
- Cross-reference: at the iteration / termination paragraph, note the dispositions.

### Speculative additions REJECTED

- **Cross-corpus composition (M-N-O-R-S-T-U scheme + extending previous candidates).** The corpus uses this systematically, but it is LOOP_DIAGNOSE-protocol-specific (the chains are explicitly serial and aware of each other). innovate.md is a generic discipline spec; encoding cross-inquiry serial composition would be project-specific. **REJECT** for innovate.md (could be at LOOP_DIAGNOSE protocol level instead).
- **Cumulative refinement tracking (M6 had 3 refinements through chain 6 with consolidation review trigger).** Same reason: this is corpus-level / protocol-level, not discipline-level.
- **A new generation mechanism (8th mechanism alongside the 7).** The corpus uses exactly the 7 mechanisms in innovate.md; no chain introduces a new mechanism. The mechanism set is complete for the generation operation. **REJECT** — no evidence of mechanism-level gap.
- **Mechanism convergence threshold change.** The spec says 3+ mechanisms = high confidence; the corpus uses this and it works. **REJECT** — no evidence of gap.

### Direct address of the user's two hypotheses

| User hypothesis | Verdict | Evidence |
|---|---|---|
| Innovation isn't meta enough (paradigm/dimension gap) | **PARTIALLY SUPPORTED.** The gap is NOT in mechanism breadth (the 7 mechanisms cover the generation operation). The gap is at: (i) the Assembly Check (axis coverage) and (ii) post-test disposition vocabulary (DEFERRED, RESEARCH FRONTIER) | Multi-chain convergence on both gaps |
| It's about allocated compute | **REJECTED.** Innovation runs in the corpus are thorough — all 7 mechanisms applied, 3 variations each, 6–9 candidates per chain, full assembly check, telemetry. Innovation has plenty of compute and uses it well | All 7 docarchive innovation.md files; ~450 lines per chain |

The corpus shows: Innovation has the right mechanisms and uses them thoroughly. What it lacks is (a) a structural check on candidate-set axis coverage at Assembly, and (b) post-test vocabulary for nuanced output dispositions. These are paradigm/dimension gaps at the Assembly Check and Termination layers, not at the generation layer.

## Convergence Assessment

- **Frontier stability:** stable. Two for-sure-missing rules identified; no further regions advancing.
- **Declining discovery rate:** yes. Reading additional chain findings (3 already read; sister-analysis context applies for 2, 4, 5, 6, 7) is unlikely to surface new structural patterns beyond axis-coverage and output-disposition.
- **Bounded gaps:** yes. Unknowns ("is cross-corpus composition innovate.md's responsibility?") sit between explored areas and are interpolatable from the placement convention (project-specific protocol-level content does NOT belong in generic discipline specs).

All three convergence criteria met. **Exploration converges.**

Sensemaking should: (a) stabilize the answer's structure (one or two for-sure-missing rules; not more), (b) collapse the ambiguity between Rule B's three sub-dispositions (which to encode in spec? all three? just DEFERRED?), (c) determine canonical homes and cross-references per the placement convention.
