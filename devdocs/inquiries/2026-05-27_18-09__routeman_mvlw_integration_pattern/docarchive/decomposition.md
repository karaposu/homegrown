# Decomposition — routeman_mvlw_integration_pattern

## User Input

/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-27_18-09__routeman_mvlw_integration_pattern/_branch.md

Read in this order:
1. _branch.md (4 observation targets)
2. surfacing.md (33 items; 7 candidate composition shapes A-G; 5 heaviness sub-axes; zero empirical precedent)
3. sensemaking.md (SV6 stabilized: 3 primary shapes + 1 negative anchor; no heavy-mode spec needed; staged-rerunnability validated; design-grounded answer; Boundary-discipline architectural framing)

Decomposition purpose: partition the production of the integration-pattern recommendation deliverable into pieces Innovation can operate on. Synthesis-shape inquiry (confirmation-shape) — partition-for-confirmation, not partition-for-option-evaluation. Sensemaking adjudicated the answer SHAPE.

9 candidate pieces seeded by the runner: P1-P3 (shapes A/B/C), P4 (job-boundary), P5 (heaviness), P6 (staged-rerunnability), P7 (architectural framing), P8 (open questions), P9 (finding shape spec).

Out of scope: re-litigating Sensemaking; designing spec changes; pipeline-merging routeman as discipline; bounded follow-ups (nav-session, meta-loop, multi-head concurrency).

---

## Step 1 — Perceive Coupling Topology

The complex whole being decomposed: **the production of one integration-pattern recommendation deliverable for /routeman + /MVLw composition**.

### Elements in the whole (the candidate piece-list, expanded)

1. **Foundational frame** — Boundary-discipline architecture; /routeman as forward-Boundary; /MVLw as cognitive-cycle runner; the architectural slot for composition.
2. **Job-boundary verdict** — reasoning is /MVLw's job; enumeration is /routeman's job; per-route reasoning inside routeman; cross-route reasoning via composition.
3. **Shape A recommendation** — /MVLw → /routeman; folder-path contract; continuation pattern with directional-mode re-run.
4. **Shape B recommendation** — /routeman → /MVLw; enumerate-then-deep-reason on selected route.
5. **Shape C recommendation** — /MVLw → /routeman → /MVLw; sandwich for highest-stakes inquiries.
6. **Shape F (negative anchor)** — no composition; verification that A is doing work.
7. **Depth mechanisms in routeman** — internal Enumeration iteration (§3.4 + §4.5); generic + directional modes; re-invocation as parameterized variation; self-assessment RE-RUN signal.
8. **Heaviness adjudication** — 5 sub-axes (internal iteration / adversarial-on-routes / guidance depth / multi-discipline ops / staged-rerunnability); per-axis verdict (exists / supplied-by-composition / gap / etc.); no-heavy-mode-spec-needed conclusion.
9. **Staged-rerunnability mechanism** — re-invocation as parameterized variation; directional mode as depth-on-parent; meaningful re-run vs naive idempotent re-run; user's hypothesis validation.
10. **Design-grounded honesty** — zero empirical precedent; analogous to 14-03's design-vs-runtime distinction.
11. **Open Questions** — empirical precedent gap; first-use monitoring; refinement triggers; cross-discipline pattern observations.
12. **Finding deliverable shape** — section structure per CONCLUDE template; no Inherited Commitments Re-test needed (no Synthesis Trigger); user-facing prose shape.

### Pairwise coupling analysis

| Pair | Coupling strength | Reasoning |
|---|---|---|
| 1 (frame) + 2 (job-boundary) | STRONG | Job-boundary IS a consequence of the Boundary-discipline architecture. The two cannot be explained independently of each other. Cluster. |
| 7 (depth mechanisms) + 8 (heaviness) + 9 (staged-rerunnability) | STRONG | Heaviness verdict depends on depth-mechanism inventory. Staged-rerunnability is one heaviness sub-axis + uses depth mechanisms (re-invocation + directional mode). The three concepts are tightly entangled. Cluster. |
| 3 (Shape A) + 4 (Shape B) + 5 (Shape C) + 6 (Shape F) | WEAK | The four shapes share substrate (folder-path mechanism, both invocation contracts, job-boundary frame) but each shape is a distinct recommendation with different content (cost, use-case, when-to-apply, worked example). Independent content; shared frame. Boundary at "one shape per piece." |
| 1+2 (frame) ↔ 3+4+5+6 (shapes) | MODERATE | Shape recommendations DEPEND on the frame (they reference the Boundary-discipline architecture + job-boundary verdict). Frame is precondition. One-way dependency. |
| 7+8+9 (depth/heaviness/staged) ↔ 3 (Shape A continuation pattern) | MODERATE | Shape A's continuation pattern references directional mode + re-invocation (which live in the depth-mechanisms piece). Cross-coupling at the continuation-pattern interface. |
| 10 (design-grounded honesty) | LOW coupling to others | Standalone honesty section; doesn't depend on shape-specific or heaviness-specific content. |
| 11 (Open Questions) | MODERATE | Depends on shapes + heaviness + design-grounded honesty (the questions come from the gaps these surface). |
| 12 (finding shape spec) | STRONG to all upstream | Integration piece; consumes all upstream outputs. |

### Coarse coupling map

```
                        [Cluster 1: Frame + Job-boundary]
                                       ↓
                  ┌────────────────────┼────────────────────┐
                  ↓                    ↓                    ↓
              [Shape A]            [Shape B]            [Shape C + F-anchor]
                  │                    │                    │
                  ↓ continuation       │                    │
                  ↓                    │                    │
           [Cluster 2: Depth/Heaviness/Staged]              │
                  │                    │                    │
                  └────────────────────┼────────────────────┘
                                       ↓
                            [Design-grounded honesty]
                                       ↓
                              [Open Questions]
                                       ↓
                            [Finding deliverable shape]
```

### Major clusters

- **Cluster A (frame):** elements 1 + 2 → P1 "Architectural framing + job-boundary verdict."
- **Cluster B (shapes):** elements 3, 4, 5, 6 → P2 "Shape A primary," P3 "Shape B secondary," P4 "Shape C maximal," with F as a brief negative anchor inside one of these (probably P2's prose to verify that A is doing work).
- **Cluster C (depth):** elements 7 + 8 + 9 → P5 "Depth mechanisms + heaviness adjudication + staged-rerunnability verdict" (combined into one piece because they are mutually-explaining).
- **Cluster D (honesty):** element 10 → P6 "Design-grounded honesty."
- **Cluster E (forward):** element 11 → P7 "Open Questions."
- **Cluster F (integration):** element 12 → P8 "Finding deliverable shape spec."

After clustering, the piece-list contracts from 9-12 raw elements to **8 pieces**.

---

## Step 2 — Detect Boundaries (Top-Down)

From the coupling map, natural cut points are at cluster transitions:

- **B1.** Between Cluster A (frame) and Cluster B (shapes). Frame supplies the WHY; shapes supply the HOW. Low crossing traffic (frame doesn't change per shape; shapes reference frame as precondition).
- **B2.** Among Cluster B's shapes (A vs B vs C). Each shape has distinct content; boundary is "one shape per piece" with shared substrate referenced not duplicated.
- **B3.** Between Cluster B (shapes) and Cluster C (depth). Shape A's continuation pattern references Cluster C's content. One cross-cluster reference point; otherwise independent.
- **B4.** Between Cluster C (depth) and Cluster D (honesty). Honesty applies to the whole deliverable; not depth-specific. Clean boundary.
- **B5.** Between Cluster D (honesty) and Cluster E (open questions). Open Questions inherit the honesty framing but add forward-looking content. Clean boundary.
- **B6.** Between Cluster E (open questions) and Cluster F (integration). Finding integration consumes all upstream. Clean boundary.

**Initial boundary set (8 pieces):**
- P1 — Architectural framing + job-boundary
- P2 — Shape A primary (with F negative anchor reference)
- P3 — Shape B secondary
- P4 — Shape C maximal
- P5 — Depth mechanisms + heaviness + staged-rerunnability
- P6 — Design-grounded honesty
- P7 — Open Questions
- P8 — Finding deliverable shape spec

---

## Step 3 — Validate Boundaries (Bottom-Up Check)

Identify obvious irreducible atoms; check if they group consistently with Step 2's clusters.

### Atoms

1. **Atom: Boundary-discipline taxonomy entry** — irreducible; routeman is one Boundary discipline among the taxonomy's category.
2. **Atom: routeman's invocation contract** — Step 1 of routeman SKILL.md accepts folder path.
3. **Atom: /MVLw's CONCLUDE output** — finding.md + supporting artifacts in inquiry folder.
4. **Atom: routeman's per-Route schema** — WHY field + γ-field + 16-type movement taxonomy + 7-status reachability.
5. **Atom: routeman's directional mode** — stage-2 sub-route expansion under a parent route per 18-58.
6. **Atom: routeman's re-invocation as parameterized variation** — §3.5 of references/routeman.md.
7. **Atom: routeman's self-assessment RE-RUN signal** — §4.7.
8. **Atom: /MVLw's iteration model** — ITERATION COMPLETE branch; refine focus and re-run.
9. **Atom: each heaviness sub-axis** — five atomic verdicts (a/b/c/d/e).
10. **Atom: each composition shape** — A, B, C as three distinct shape entries; F as one negative anchor.
11. **Atom: each Open Question** — discrete forward-looking items.
12. **Atom: each section of the finding template** — Question / Finding Summary / Finding / Next Actions / Reasoning / Open Questions / Source Input.

### Grouping check

- Atoms 1 + (parts of 2-8) cluster into P1 (foundational frame). ✓
- Atom 10 splits into P2 (Shape A), P3 (Shape B), P4 (Shape C). The "F" negative anchor lives as a brief reference inside P2's prose (it's content about WHY A is the natural shape; doesn't deserve its own piece). ✓
- Atoms 4 + 5 + 6 + 7 + 9 cluster into P5 (depth mechanisms + heaviness + staged-rerunnability). All five atoms are about routeman's depth behavior. ✓
- Atom 11 clusters into P7 (Open Questions). ✓
- Atom 12 cluster into P8 (Finding deliverable shape spec). ✓
- (Atom "design-grounded honesty" doesn't have a specific atomic representative in the list above because it's a meta-level framing — but it lives in P6 cleanly.) ✓

### Atom-split check

Are there atoms Step 2 boundaries split? Atom 4 (routeman's per-Route schema) is mentioned in both P1 (the job-boundary verdict references per-route reasoning) AND P5 (depth mechanisms reference per-route fields). This is REFERENCE, not split — the schema is canonical content in routeman's spec; both pieces reference it without owning it. Acceptable cross-reference, not boundary violation.

**Confidence:** HIGH on all 8 boundaries (top-down + bottom-up agree).

---

## Step 4 — Express as Question Tree

### P1 — Architectural framing + job-boundary verdict
**Question:** Why does /routeman + /MVLw compose at all, and what is each skill's job within the composition?

**Verification criteria:**
- [ ] Boundary-discipline architectural framing explained: routeman is a forward-Boundary discipline; /MVLw is a cognitive-cycle runner; the composition is the architecture's prescribed slot.
- [ ] Job-boundary stated: reasoning is /MVLw's job; enumeration is /routeman's job.
- [ ] Two-tier reasoning distinction stated: per-route reasoning lives inside /routeman (WHY + γ-field per route, with the 13-23 + 00-51 commitments + 16-45 REPAIR rule); cross-route reasoning lives in /MVLw composition.
- [ ] Cognitive-operation orthogonality explained: /MVLw asks "what should we understand and decide" + /routeman asks "given understanding, what moves are available."
- [ ] No re-litigation of routeman priors; takes 16-45 consolidated shape + the 4 priors as given context.

### P2 — Shape A primary recommendation (/MVLw → /routeman)
**Question:** What is the primary composition pattern, when does it apply, and how does it work concretely?

**Verification criteria:**
- [ ] Shape A described: /MVLw runs on a question → produces inquiry folder with finding.md + supporting outputs → user invokes /routeman pointed at the folder → /routeman reads folder as state input and enumerates next moves.
- [ ] Folder-path contract explicitly named: routeman SKILL.md Step 1 accepts folder path; "If the input is a folder path, read the relevant files to reconstruct the current state."
- [ ] Continuation pattern explained: when routeman output is structurally suspect (LOW confidence on type-assignment; §4.7 RE-RUN self-signal; specific routes need depth), re-invoke routeman with refined parameters (directional mode + refined-sub-goal targeting the most-uncertain parent route).
- [ ] Cost: 1 /MVLw run + 1 /routeman invocation + (optional) N additional /routeman re-invocations.
- [ ] Use case: standard high-stakes inquiry — reason first, then enumerate next moves.
- [ ] Shape F (no composition) referenced briefly: verifies A is doing work — used when the inquiry's question is fully answered by /MVLw alone OR fully answered by /routeman alone.
- [ ] Concrete worked example: a hypothetical inquiry walked through Shape A.

### P3 — Shape B secondary recommendation (/routeman → /MVLw)
**Question:** When and how should the inverse composition (enumerate first, then deep-reason on selected route) be used?

**Verification criteria:**
- [ ] Shape B described: /routeman runs on a current-state to enumerate options → user selects one route → /MVLw runs on the selected route as a refined question.
- [ ] Use case: when the question is "what are our options for X" and one option needs deep follow-through.
- [ ] Caveat: running enumeration BEFORE the state is stabilized risks routeman's LAYER 1 failure modes (Premature Filtering, Action Bias). Recommend Shape B only when the state IS stabilized (not when the question is open-ended).
- [ ] Cost: 1 /routeman invocation + 1 /MVLw run.
- [ ] Concrete worked example: a hypothetical inquiry walked through Shape B.

### P4 — Shape C maximal recommendation (/MVLw → /routeman → /MVLw)
**Question:** When and how should the maximal sandwich composition be used?

**Verification criteria:**
- [ ] Shape C described: /MVLw on the upstream question → /routeman on the resulting state to enumerate next-move options → user selects one route → /MVLw on the selected route for deep follow-through.
- [ ] Use case: highest-stakes inquiries where BOTH the upstream question AND the selected route are complex enough to warrant full cognitive cycles.
- [ ] Cost: 2 /MVLw runs + 1 /routeman invocation (+ continuation re-runs if needed). High.
- [ ] Caveat: this is not the default. Use when stakes justify the cost.
- [ ] Concrete worked example: brief.

### P5 — Depth mechanisms + heaviness adjudication + staged-rerunnability
**Question:** What depth mechanisms does /routeman already have, why is no new heavy-mode spec needed, and how does the user's staged-rerunnability hypothesis fit?

**Verification criteria:**
- [ ] Four depth mechanisms enumerated: (1) internal Enumeration loop iterates until coverage convergence per §4.5; (2) staged 2-stage mapping (generic mode + directional mode per 18-58); (3) re-invocation as parameterized variation per §3.5 (REVISIT sub-actions, status carry-forward); (4) self-assessment RE-RUN signal per §4.7.
- [ ] Five heaviness sub-axes enumerated with verdict per axis:
  - (a) internal iteration — EXISTS;
  - (b) adversarial testing on routes — gap in routeman, supplied by /MVLw composition;
  - (c) guidance depth — EXISTS via 4 guidance modes (none / compact / full / expand-on-selection);
  - (d) multi-discipline cognitive operations — IS the /MVLw composition pattern;
  - (e) staged-rerunnability — EXISTS via re-invocation + directional mode.
- [ ] No-heavy-mode-spec-needed conclusion stated: heaviness is supplied by composition + existing depth mechanisms; spec-addition would be redundant.
- [ ] Staged-rerunnability hypothesis explained: meaningful re-run requires CHANGE between runs (state-evolution via /MVLw composition OR parameter-refinement via directional mode + refined-sub-goal). Naive identical-parameter re-run is idempotent (same input → same Route Map) and wasted.
- [ ] The user's hypothesis is structurally validated: the 18-58 staged-mapping + 14-49 read-policy + 16-45 consolidation IS the staged-rerunnability mechanism the user proposed; the architecture already implements their idea.

### P6 — Design-grounded honesty
**Question:** What is the confidence level of this recommendation, given empirical-precedent gap?

**Verification criteria:**
- [ ] Zero-empirical-precedent fact stated: `find devdocs/inquiries -name routeman.md` returns empty; /routeman has never been invoked on any inquiry.
- [ ] Confidence framing: the recommendation is design-grounded (against routeman + /MVLw specs); operational validation pending the first real uses.
- [ ] Analogous-flag-reference: same posture as the 14-03 finding (design-vs-runtime distinction).
- [ ] Honest reservation: recommendation may need adjustment if operational issues surface; the design-grounded answer is the best-available, not certainty.

### P7 — Open Questions
**Question:** What forward-looking questions remain after this inquiry?

**Verification criteria:**
- [ ] Empirical-precedent monitoring: when /routeman is first invoked on a real inquiry post-this-finding, monitor whether Shape A works as designed.
- [ ] Heaviness composition test: does /MVLw composing around /routeman genuinely cover the adversarial-on-routes gap? Monitor on first use.
- [ ] Staged-rerunnability operational test: when re-running /routeman with refined parameters, does the second invocation produce structurally distinct content from the first? Monitor.
- [ ] Per-route reasoning sufficiency: does the WHY + γ-field per route provide enough reasoning embedded in enumeration, or do operators feel the need for cross-route reasoning more often than not?
- [ ] Cross-discipline composition pattern: this inquiry surfaces a generalizable pattern (Boundary discipline + cognitive cycle composition). When /reflect is revived (the backward-Boundary discipline), does the same pattern apply?
- [ ] Spec-modifying shapes (D + E from surfacing) flagged as Refinement Triggers if composition proves insufficient.

### P8 — Finding deliverable shape spec
**Question:** What does the finding.md look like per the CONCLUDE template?

**Verification criteria:**
- [ ] Section order per CONCLUDE: # Title / ## Question / ## Finding Summary / ## Finding / ## Next Actions / ## Reasoning / ## Open Questions / ## Source Input.
- [ ] NO Inherited Commitments Re-test section (no Synthesis Trigger declared in _branch.md; priors are CONTEXT-not-INPUTS).
- [ ] Finding Summary: 5-8 bullet points covering: integration pattern is workflow-layer sequential composition / 3 primary shapes (A with continuation, B, C) + F negative anchor / job-boundary verdict / no heavy-mode spec needed / staged-rerunnability hypothesis validated / design-grounded honesty flag.
- [ ] Finding body: substantive prose covering architectural framing + the 3 shapes with concrete worked examples + depth-mechanism inventory + heaviness verdict + staged-rerunnability mechanism + honest design-grounded reservation.
- [ ] Next Actions:
  - MUST: none required for the finding's value (the finding is a recommendation; the user applies the workflow at their discretion).
  - COULD: try Shape A on a real high-stakes inquiry (operational validation); when /routeman is invoked, observe whether the patterns surface as predicted.
  - DEFERRED: spec-modifying shapes D + E (gated on operational evidence that composition is insufficient); revive /reflect as the backward-Boundary discipline (gated on user decision); bounded follow-ups (nav-session aggregation, meta-loop runtime, multi-head concurrency).
- [ ] Reasoning: addresses Sensemaking's 5 ambiguities; addresses Critique's caveats (when Critique runs).
- [ ] Open Questions: 4 typed categories (Monitoring + Blocked + Research Frontiers + Refinement Triggers).
- [ ] Source Input: user's verbatim invocation + clarification.

---

## Step 5 — Map Interfaces

### Per-pair interface map

| Source | Target | What flows | Direction | Type |
|---|---|---|---|---|
| P1 → P2 | Shape A piece | Job-boundary verdict + Boundary-discipline framing (Shape A's WHY) | one-way | dependency |
| P1 → P3 | Shape B piece | Same frame | one-way | dependency |
| P1 → P4 | Shape C piece | Same frame | one-way | dependency |
| P1 → P5 | Depth piece | Boundary-discipline framing references depth mechanisms | one-way | dependency |
| P5 → P2 | Shape A continuation pattern | Directional mode + re-invocation mechanism (depth-piece content) | one-way | data (content reference) |
| P5 → P3 | Shape B continuation possibility | Same | one-way | data (content reference) |
| P5 → P4 | Shape C deeper iterations | Same | one-way | data (content reference) |
| P6 → P7 | Open Questions | Design-grounded honesty framing → forward-looking question shape | one-way | framing |
| P1+P2+P3+P4+P5+P6+P7 → P8 | Finding integration | All upstream content + section-order spec | many-to-one | data |

### Assumptions-not-data check

For each piece, what assumptions does it make about others?

- **P2 (Shape A) assumes** P1 has explained Boundary-discipline + job-boundary BEFORE Shape A is described. If P1 is unclear, Shape A's WHY isn't grounded. **Mitigation:** P1 lands before P2-P4 in dependency order.
- **P5 (depth) assumes** P1 has framed routeman as Boundary discipline. Depth mechanisms make more sense after the framing. **Mitigation:** P1 before P5.
- **P2 (Shape A continuation pattern) assumes** P5's depth-mechanism content exists. Continuation pattern uses directional mode + re-invocation; both are explained in P5. **Mitigation:** P5 produced before P2 OR P2 references P5 by section name (forward-reference allowed if section order makes it readable).
- **P7 (Open Questions) assumes** the design-grounded honesty (P6) has framed the recommendation's reservations. Open Questions inherit the framing. **Mitigation:** P6 before P7.
- **P8 (Finding) assumes** all upstream pieces have produced content. **Mitigation:** P8 runs last.

No hidden coupling. PASS.

---

## Step 6 — Order by Dependency

### Dependency order (tiers)

**Tier 0 (precondition):**
- **P1 — Architectural framing + job-boundary verdict.** All shape recommendations depend on this frame.

**Tier 1 (depth substrate, also Tier 0-adjacent):**
- **P5 — Depth mechanisms + heaviness adjudication + staged-rerunnability verdict.** Tightly coupled to P1 (Boundary-discipline framing) but produces content P2-P4 reference. Treat as Tier 0.5 — produced after P1 to use the framing, before P2-P4 to supply content they reference.

**Tier 2 (parallel — the three composition shapes):**
- **P2 — Shape A primary.**
- **P3 — Shape B secondary.**
- **P4 — Shape C maximal.**

These three are pairwise independent in content (each describes a distinct shape); they all reference P1 + P5. Can run in any order or in parallel.

**Tier 3 (honesty framing):**
- **P6 — Design-grounded honesty.** Independent of shape content; frames the deliverable's confidence claims.

**Tier 4 (forward questions):**
- **P7 — Open Questions.** Consumes P6's framing + the surfaces P1-P5 named.

**Tier 5 (integration):**
- **P8 — Finding deliverable shape spec.** Consumes everything upstream.

### Critical path

P1 → P5 → P2 → P8 (or any of P2/P3/P4 in place of P2; the critical path runs through the longest dependency chain).

Parallelizable: P2/P3/P4 (after P1 + P5). P6 + P7 can run in parallel with P2/P3/P4 if needed; design-grounded honesty doesn't depend on shape-specific content.

No circular dependencies. PASS.

---

## Step 7 — Self-Evaluate

### Minimum 3-dimension evaluation

| Dimension | Check | Status |
|---|---|---|
| **Independence** | Can each piece be worked on without the others existing? | **PASS.** P1 stands alone (architectural framing + job-boundary). P5 stands alone (depth + heaviness verdict; references routeman spec, not other pieces). P2/P3/P4 each stand alone with explicit interface to P1 + P5 (the frame + the depth substrate they reference). P6 stands alone (honesty framing). P7 stands alone (forward questions). P8 is the integration piece — depends on all upstream but produces independent integration content. |
| **Completeness** | Do the pieces cover the whole? | **PASS.** The deliverable's components: architectural framing + 3 composition shapes + negative anchor (inside P2) + depth/heaviness verdict + staged-rerunnability + honesty + open questions + finding integration. All covered by P1-P8. |
| **Reassembly** | Can the pieces + interfaces reconstruct the whole? | **PASS.** Given P1 (frame) + P2/P3/P4 (shapes) + P5 (depth) + P6 (honesty) + P7 (open questions) + P8 (integration), the integration-pattern recommendation deliverable is fully reconstructed. |

### Full 7-dimension evaluation

| Dimension | Check | Status |
|---|---|---|
| Independence | (per above) | PASS |
| Completeness | (per above) | PASS |
| Reassembly | (per above) | PASS |
| **Tractability** | Is each piece small enough for a single focused pass? | **PASS.** P1 ~3-4 paragraphs of prose. P2/P3/P4 each ~5-6 paragraphs (shape description + cost + use case + worked example + caveats). P5 ~6-8 paragraphs (mechanisms inventory + per-axis verdict + staged-rerunnability explanation). P6 ~2 paragraphs. P7 ~5-8 forward questions across 4 categories. P8 ~1-2 paragraphs of section-order spec. All tractable in one pass. |
| **Interface clarity** | Are all cross-piece flows explicit? | **PASS.** Interface map (Step 5) names every flow + direction. Assumptions-not-data check verified no hidden assumptions. |
| **Balance** | Is complexity roughly proportional across pieces? | **PASS-WITH-NOTE.** P5 (depth + heaviness + staged-rerunnability) is the largest piece by content count (3 sub-topics). The other pieces are simpler. The imbalance is justified — P5 addresses 3 of the 4 user observation targets (heaviness, staged-rerunnability, plus depth-mechanism context for Shape A's continuation pattern). Could be split into P5a (depth + heaviness) + P5b (staged-rerunnability) but the three sub-topics are mutually-explaining; splitting would force forward-references and reduce coherence. Keep as one piece. |
| **Confidence** | Do top-down and bottom-up agree on boundaries? | **PASS.** Step 3's bottom-up atom-grouping check confirmed all 8 piece-boundaries match top-down clusters. HIGH confidence on all boundaries. |

### Determination-mechanism piece check

Does the Q-tree include a load-bearing concept whose use depends on a runtime determination?

- **P2 (Shape A) continuation pattern:** the runtime determination "when does the continuation pattern fire?" is specified — when /routeman's output is structurally suspect (LOW confidence on type-assignment; §4.7 RE-RUN signal; specific routes need depth). The determination criteria are concrete (live in routeman's spec). **PASS — determination mechanism is captured.**
- **P3 (Shape B) caveat firing:** the caveat "Shape B risks Premature Filtering / Action Bias when state isn't stabilized" requires the user to determine "is the state stabilized?" This determination is user-judgment. **Is it captured?** Yes — P3 explicitly says "recommend Shape B only when the state IS stabilized (not when the question is open-ended)." Determination criteria are stated. **PASS.**
- **P5 (heaviness verdict):** the runtime determination "is the composition genuinely covering heaviness?" is itself an Open Question (P7). Determination mechanism is captured at P7 (operational monitoring). **PASS.**

No missing determination-mechanism piece. PASS.

### Failure-mode check

- **#1 Premature Decomposition:** No — Sensemaking complete before Decomposition; the whole is well-understood. PASS.
- **#2 Wrong Boundaries:** No — boundaries cut at LOW coupling (cluster transitions); STRONG coupling preserved within pieces. PASS.
- **#3 Hidden Coupling:** No — assumptions-not-data check (Step 5 refinement) ran explicitly; mitigations identified. PASS.
- **#4 Missing Pieces:** No — completeness + determination-mechanism check both PASS. PASS.
- **#5 Over-Decomposition:** No — 8 pieces is balanced; each is a coherent sub-problem. The earlier 9-piece seed-list was correctly contracted via clustering. PASS.
- **#6 Ignoring Dependencies:** No — dependency order (Step 6) explicit: P1 → P5 → {P2/P3/P4 parallel} → P6 → P7 → P8. No circular. PASS.
- **#7 Imbalanced Decomposition:** No — P5 is largest piece but the imbalance is content-justified (3 mutually-explaining sub-topics). PASS-WITH-NOTE.

All 7 failure modes addressed. PASS.

### Self-assessment verdict

**PROCEED.** Decomposition self-evaluation PASSes 7/7 dimensions + 7/7 failure-mode checks + determination-mechanism piece check.

Next: Innovation. The 8 pieces are ready for per-piece production.

---

## Final Deliverable

### 1. Coupling Map

```
Cluster A (frame):              P1 [Architectural framing + job-boundary]
                                       ↓
Cluster C (depth substrate):    P5 [Depth + heaviness + staged-rerunnability]
                                       ↓
                       ┌───────────────┼───────────────┐
                       ↓               ↓               ↓
Cluster B (shapes):  P2 [A]         P3 [B]         P4 [C]
                       │               │               │
                       └───────────────┼───────────────┘
                                       ↓
Cluster D (honesty):           P6 [Design-grounded honesty]
                                       ↓
Cluster E (forward):           P7 [Open Questions]
                                       ↓
Cluster F (integration):       P8 [Finding deliverable shape spec]
```

### 2. Question Tree

8 pieces with verification criteria (as documented in Step 4 above).

### 3. Interface Map

9 explicit interface edges (as documented in Step 5). All one-way; no circular.

### 4. Dependency Order

- **Tier 0:** P1 (frame)
- **Tier 0.5:** P5 (depth substrate)
- **Tier 1 (parallel):** P2 (Shape A), P3 (Shape B), P4 (Shape C); plus P6 (honesty) and P7 (Open Questions) can run in parallel if needed
- **Tier 2:** P8 (Finding integration)

### 5. Self-Evaluation

- Minimum 3-dimension: 3/3 PASS.
- Full 7-dimension: 7/7 PASS (P5 imbalance noted but justified).
- Failure-mode check: 7/7 PASS.
- Determination-mechanism piece check: PASS.
- Verdict: PROCEED to Innovation.
