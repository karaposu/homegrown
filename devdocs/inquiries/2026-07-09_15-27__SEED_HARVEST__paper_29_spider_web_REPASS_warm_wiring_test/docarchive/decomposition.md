## User Input

devdocs/inquiries/2026-07-09_15-27__SEED_HARVEST__paper_29_spider_web_REPASS_warm_wiring_test/_branch.md

(SEED_HARVEST dive — Decomposition = GRANULARITY-RESOLUTION within GENERATE. Resolve MERGES vs DISTINCT-RECORDS among the 4 candidates C1-C4 (distinct-anchor⇒distinct-record; merges justified). Small candidate set → proportionate. Full framing in the invocation. SAVE TO: …/decomposition.md)

---

# Decomposition — SEED_HARVEST paper 29 (spider-web) RE-PASS

Prerequisite check (§Step-1): Sensemaking clarified the whole — 4 candidates (C1 genuine, C2/C3/C4 kill-leaning), each with a stated crossing + dedup-status. Proceed.

## 1. Coupling Map

The "whole" = the 4 generated candidates. Coupling question per pair: *if I change one, does the other need to change?*

| Pair | Coupled? | Reason |
|---|---|---|
| C1 (record-repair) × C2 (real-vs-noise discrimination) | **NO** | repair acts on the record's STRUCTURAL integrity (broken cross-refs/links); discrimination acts on the traversal's PROGRESS signal (real-vs-noise). Different layers, no shared mutable state. |
| C1 × C3 (continuous re-localization) | NO | distinct anchors (maintenance-layer vs the warm pass). |
| C1 × C4 (hub-centrality) | NO | distinct anchors (maintenance-layer vs _route topology). |
| C2 × C3 × C4 | NO (pairwise) | three distinct anchors: termq-detection / built-W / _route-topology. |

**Coupling topology: FLAT — four independent candidates, each on a distinct anchor. No high-coupling clusters → no merges.**

★The one coupling to test (from the framing): does C1 (repair) + C2 (discrimination) form ONE "record-health" subsystem? **NO** — repair = restore broken structure (integrity); discrimination = tell genuine progress from noise (signal quality). These are different operations on different objects (the record vs the traversal-step). Merging them would be over-merge (collapsing two distinct-anchored germs into a mush). C1 stands alone.

## 2. Question Tree (each piece = a distinct record)

- **C1 — "Should the traversal-record have an active INTEGRITY-REPAIR pass, distinct from p1-S3's demote-pass?"**
  - Verification: [ ] repair-trigger defined (breakage, not staleness); [ ] repair-action defined (restore broken cross-refs/drifted-canon/dangling-links); [ ] distinctness from p1-S3 (demote) + grasp levers held; [ ] source-support (web-repair mechanic) cited.
- **C2 — "Is real-vs-noise discrimination a NEW answer to termq-S1's detection facet, or a re-vocabulary of the owned meaningful-traversal core?"**
  - Verification: [ ] distinctness vs the meaningful-traversal core question tested; [ ] distinctness vs p29-S5 (border-confidence) tested. (Gate expects: folds to mirror.)
- **C3 — "Does the spider's continuous re-localization ADD anything to the built warm pass, or is it decorative resemblance / a rejected alternative?"**
  - Verification: [ ] does it propose a mechanic W lacks? [ ] does 'continuous' contradict W's deliberate round-cap-2? (Gate expects: decorative + rejected-alternative → kill.)
- **C4 — "Does hub-centrality add a distinct _route mechanic past p29-S1's link-graph?"**
  - Verification: [ ] distinct action beyond p29-S1? (Gate expects: thin fold to p29-S1.)

## 3. Interface Map
No interfaces between candidates (flat coupling — each is an independent hypothesis). The only shared context is the dedup-baseline (p29-S1..S8 + termq-S1 + p1-cluster), which all four are tested against — but that's a shared REFERENCE, not an inter-piece flow.

## 4. Dependency Order (for Innovation)
- **C1 first** — the genuine candidate; develop FULLY (hypothesis + source-support + distinctness vs p1-S3 + type/grade-hunch + trigger).
- **C2, C3, C4 — parallel, SIZED (not fully developed)** — develop each just enough to let the gate fold it on its specific grounds (C2=mirror-of-core; C3=decorative+rejected-alt; C4=thin-fold). Do NOT inflate a kill-leaning candidate with borrowed development.
- No circular dependencies; no piece blocks another.

## 5. Self-Evaluation (3 dims)

| Dimension | Check | Verdict |
|---|---|---|
| **Independence** | each candidate answerable without the others? | PASS — 4 distinct anchors, flat coupling |
| **Completeness** | do the 4 cover the generated field? | PASS — the 4 attempts from sensemaking; the 5 mirror-mechanics are dedup-skips (correctly excluded, not candidates) |
| **Reassembly** | 4 candidates + 5 mirror-skips = the full 8-mechanic coverage table? | PASS |

**Granularity resolution:** 4 distinct records, ZERO merges (all distinct-anchored; the one tempting merge — C1+C2 as "record-health" — correctly rejected as over-merge). Anti-fragmentation held (C1 kept whole, not split into detect+repair). Anti-over-merge held (C2/C3/C4 kept distinct for individual gate-folding).

**The clean distinct-hypothesis set for Innovation:** C1 (develop fully) · C2, C3, C4 (size for the gate). Expected gate landing: 0-1 KEEP (C1 if it survives). PROCEED to Innovation.
