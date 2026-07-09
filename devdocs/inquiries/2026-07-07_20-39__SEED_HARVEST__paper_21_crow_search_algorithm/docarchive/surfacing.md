## User Input

devdocs/inquiries/2026-07-07_20-39__SEED_HARVEST__paper_21_crow_search_algorithm/_branch.md — Surfacing step (the GROUNDING pass per the seed_harvester protocol §6: bring BOTH crossing-inputs into view — the source's claims + the project anchor-space; no crossings generated, nothing gated). Commit the post-grounding MAGNITUDE BAND at the end (two-stage forecast; fresh territory; yield-inflation guard armed). (Full region list in the invocation.)

---

# Surfacing — paper 21 (Crow Search Algorithm), the grounding pass

Mode: artifact · signal-first. Territory: `devdocs/paper_seed/21.md` (1096 lines; §1–4 + pseudo-code + conclusion read in full; §5 benchmarks scanned-but-shallow) + the project anchor-space (in-context canon + the seed machinery authored this session).

## Region A — the source's claim-inventory (crossing input-1; source-support raw material) [core]

All verbatim-anchored to the paper:

- **A1. The mechanism** (core, HIGH — `:120-174`, pseudo-code `:283-305`): N crows in d-dimensional space; **each crow memorizes m_i — "the best position that crow i has obtained so far"** (`:136-139`); to move, crow i picks a **random** flock-member j and follows it toward m_j (Eq 1: `x_i + r·fl·(m_j − x_i)`); **with awareness probability AP the followed crow notices and the follower is thrown to "a random position"** (Eq 2, `:166-171`); **flight length fl** scales the step — `fl<1` lands between x and m_j (local); `fl>1` "may exceed m_j" (`:155-162` — the step can overshoot PAST the target).
- **A2. The intensification/diversification claim** (core, HIGH — `:175-186`): "intensification and diversification are mainly controlled by the parameter of awareness probability… small values of AP increases intensification… large values of AP increases diversification."
- **A3. The TWO-TRACK update** (core, HIGH — the paper's subtlest structure): **position update is NON-greedy** — "CSA is not a greedy algorithm since if a crow generates a new position which is not better than its current position, it will move to the new position. Non-greedy algorithms can increase the diversity of generated solutions" (`:348-351`); **memory update IS greedy** — Eq 5 (`:314-323`): memory updates only if the new position is better. Plainly: **the crow wanders freely; its memory keeps only the best.** (Feasibility caveat: an infeasible new position is rejected — the crow stays, `:307-310`.)
- **A4. Peer-following, not global-best** (core, HIGH — `:358-362`): each crow follows "randomly one of the flock crows (it may be itself)" toward THAT crow's best — unlike PSO, no global-best broadcast; the guidance is decentralized and randomized.
- **A5. Parameter parsimony** (sub, HIGH — `:339-347`): CSA tunes 2 parameters (fl, AP) vs PSO 4, HS 3, GA 6 — "easier to implement."
- **A6. Problem-structure-dependent tuning** (sub, HIGH — `:1063-1074`): "for unimodal functions, small values of AP lead to better results while for multimodal functions, it is better to use larger values for AP to escape local optima"; "fine-tuning of CSA is a problem dependent issue which should be done by trial."
- **A7. Honest performance claims** (side, HIGH — abstract `:17-20`, conclusion `:1087-1094`, NFL `:364-367`): "may lead to finding promising results… competitive results"; the no-free-lunch theorem acknowledged ("no single search algorithm is the best on average for all problems"). Benchmarks: six engineering problems, competitive (scanned-shallow — application results, not method claims).
- **A8. The crow-behavior frame itself** (sub, HIGH — `:85-99, 111-117`): crows hide excess food, "retrieve the stored food when it is needed," recall caches "up to several months later"; they follow other crows to steal caches; having been a thief, a crow "moves hiding places" and uses its own thieving experience to predict pilferers.

## Region B — the project anchor-space (crossing input-2 candidates) [tagged, un-crossed]

- **B1. The seed machinery itself** (core, HIGH): the `_seed.md` index, maturation-triggers, nascent watching, the harvest lifecycle "harvested now, planted later." **Mirror-candidate flagged** (not graded): A8's cache-and-retrieve-across-seasons IS the seed lifecycle reflected in corvid behavior; crows following other crows to caches rhymes with a future dive consuming another dive's recorded seed. Guard standing: mirror-sharpness ≠ grade.
- **B2. The innovate discipline + the crossing's generate-then-gate** (core, HIGH): divergence-then-convergence is deeply owned (innovate's Generate→Test; the harvest's GENERATE→GATE; "generate freely, gate after"). A2 lands mostly on owned ground. The un-owned corner to probe at Innovation: our pipelines have **no deliberate randomization** — divergence is prompted, not stochastic.
- **B3. The harvest's own history as evidence** (core, HIGH): the papers-5–14 stretch where one frame absorbed everything ("grasp absorbs everything" — topic-driven streak, broken only by deliberate territory shifts) is a REAL, recorded premature-convergence-like phenomenon in our own search; A2/A6 (diversification against local optima) speaks directly to it. Strong anchor for a possible crossing.
- **B4. The selection frame** (core, HIGH): "the harness improves by evolutionary SELECTION, not steering; critique verdicts are the selection pressure." Metaheuristics are population+selection search — family-level CONFIRMING territory (the paper-16 precedent: reinforcement/optimization papers landed as mirrors/confirming against this frame).
- **B5. The routelister / route-field + seed-index consumption** (sub, MED): which recorded seed/route gets developed next — currently priority/essentiality-guided (attributive), selection left to the human. A4's random-PEER-following (not global-best) is a candidate cross-target: diversity-preserving development order.
- **B6. The quality-awareness component (un-built)** (sub, MED): the perennial anchor. A3's greedy memory (keep-best-so-far) rhymes with keep-the-good/regression thinking, but thinly — probably confirming-grade material.
- **B7. Memory design** (sub, MED): the user's standing interest (memory files, grasp). Crow memory = one best-position slot per crow, greedily updated — an extremely minimal memory design; contrast with our rich append memories. Possible contrast-material (mirror or thin cross).
- **B8. The moves vocabulary** (sub, HIGH): fl>1 "may exceed m_j" = stepping PAST the followed target — a numeric cousin of our **extrapolate** move (push past what the source gives); fl<1 = staying between = **transfer**-nearby. A neat rhyme supporting the move-space; likely confirming, worth one crossing probe.
- **B9. Anti-proliferation / parsimony values** (side, HIGH): A5's two-parameter design rhymes with our minimal-machinery discipline. Confirming-flavored.

## Region C — calibration pressures (surfaced so Sensemaking/Critique hold them) [umbrella]

- **C1. Fresh territory** (HIGH): metaheuristics after six psychology papers — the paper-10 lesson applies: post-grounding magnitude still leans high on fresh ground; the band + forced NO-case are load-bearing.
- **C2. First-run demonstration pressure** (HIGH): the protocol's first run "wants" a yield (yield-inflation, protocol failure mode #6). Counter-commitment: an explicit-empty `## Seeds` is a valid, even valuable, first-run outcome (it would prove the gate holds).
- **C3. Mirror-glamour** (MED): A8's cache-retrieve mirror is unusually cute (the paper's central metaphor reflects our newest machinery). The guard: structural-centrality-of-a-mirror ≠ grade (the paper-20 precedent — defeated exactly this pull at full strength).

## Post-grounding MAGNITUDE BAND (committed now, per the two-stage forecast)

**What the priors already own** (deflates): divergence-then-convergence (B2), selection-based population search (B4), territory-diversification tactics (B3's lesson already recorded as "weight toward un-harvested territories"), parsimony values (B9). **What looks genuinely un-owned** (the honest live corners): deliberate STOCHASTICITY as a mechanism (B2 — we prompt divergence, we never randomize; A2/A4's randomness is load-bearing in CSA); the TWO-TRACK wander-freely/remember-selectively structure (A3) as a stated principle; random-PEER-following for development order (A4×B5).

- **Ladder-verdict band: CONFIRMING to CONFIRMING-PLUS, with a sharp MIRROR (A8). NO import expected** — nothing surfaced NAMES an un-named harness practice or RESOLVES an open confusion; the owned frames absorb the family-level content. (NO-case forced and live: if the three un-owned corners fold into "innovate's coverage strategy already provides diversity" at the gate, the dive lands plain-confirming, zero seeds.)
- **Seed-yield band: 0–3 gated seeds, centered on 1–2 NASCENT** (the stochasticity/peer-following candidates are real but their changes-a-future-decision status is uncertain → likely nascent-with-triggers if they pass at all). LIVE seeds would surprise; treat any LIVE grading with extra prosecution.

## Traversal Trace

| # | Region | Items | Verdict | Conf | Note |
|---|---|---|---|---|---|
| 1 | paper §1–2 (`:1-186`) | A1, A2, A8 | core | HIGH | mechanism + AP claim + behavior frame, verbatim |
| 2 | paper §3–4 (`:187-362`) | A1, A3, A4, A5 | core | HIGH | pseudo-code, two-track update, peer-following, parsimony |
| 3 | paper §5 head + NFL (`:363-399`) | A7 | side | HIGH | benchmarks scanned-shallow (application results) |
| 4 | paper §5.4 + conclusion (`:1040-1095`) | A6, A7 | sub | HIGH | AP-tuning heuristic + honest claims |
| 5 | anchor-space (in-context: seed machinery, innovate, selection frame, harvest history, routelister, quality component, memory) | B1–B9 | core/sub | HIGH/MED | tagged, un-crossed |
| 6 | calibration memories (fresh-territory, first-run, mirror precedents) | C1–C3 | umbrella | HIGH | pressures armed |

## State Summary

- **Territory:** paper 21 + the anchor-space. **Purpose:** both crossing-inputs into view for the Innovation pass; source-support raw material captured for the gate.
- **Coverage:** paper method CONFIRMED (§1–4 + pseudo-code + §5.4 + conclusion, verbatim anchors); benchmarks scanned-but-shallow (deliberate — application detail, not method claims); anchor-space CONFIRMED at candidate resolution (9 anchors tagged).
- **Confirmed-absent:** an import-shaped claim (nothing in the paper names/resolves harness-side unknowns); adaptive/self-tuning parameters (the paper's AP/fl are fixed by trial — no self-adaptation claimed).
- **Concept-names:** m_i best-so-far memory · awareness probability (AP) · flight length (fl) · two-track update (non-greedy position / greedy memory) · peer-following (no global best) · intensification/diversification · the cache-retrieve mirror.
- **Frontier flags:** none blocking (benchmark detail available on demand).
- **Workspace-populated:** yes; extent per trace.

## Telemetry

Mode artifact · signal-first · cycles 3 (paper core → paper tail → anchors+calibration) · items: 8 source-claims + 9 anchors + 3 pressures · core 12, sub 6, side 2, umbrella 3 · sub-phase not fired · convergence met (no uncertain item filtered) · overload not fired · failure modes checked: missed-relevance (benchmarks deliberately shallow — flagged, recoverable), surfaced-irrelevance (bounded), purpose-loss (no), interpretive-overstep (no crossings generated — held for Innovation per the protocol's phase separation).

**Self-assessment: PROCEED.**
