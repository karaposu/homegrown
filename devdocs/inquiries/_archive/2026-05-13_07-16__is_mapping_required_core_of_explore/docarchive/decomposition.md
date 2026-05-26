# Decomposition — Is Mapping the Required Core of /explore?

## User Input

`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-13_07-16__is_mapping_required_core_of_explore/_branch.md`

Input: `_branch.md` + `exploration.md` + `sensemaking.md`. Sensemaking resolved the question at two grains (YES at coarse user-language grain; six-component refinement at fine spec grain) and produced four action paths plus a REFINES relationship to the prior canonical-coverage finding. Decompose into a question tree with verification criteria, interfaces, and dependency ordering. Specifically address (a) Path A vs Path D coupling, (b) which paths parallelize, (c) Path B vs Path C interfaces, (d) hidden coupling to the prior finding's deliverables. Apply Determination-mechanism piece check at Phase 7.

---

## Step 1 — Coupling Topology

### Elements in the whole

The work surface implied by sensemaking's four action paths plus the REFINES relationship:

- **E1** — Refine `/explore`'s spec opening to honor user-language ("/explore is the discipline for purposive open-mode mapping of a territory")
- **E2** — The fine-grain six-component refinement paragraph that follows the opening
- **E3** — The granularity note disambiguating noun vs verb senses of "mapping"
- **E4** — The new "kinds of mapping /explore covers" section listing 7 types
- **E5** — The new "colloquial-explore vs disciplinary /explore" section explaining the methodology-gradient boundary
- **E6** — The REFINES frontmatter field in this inquiry's finding
- **E7** — The "Changes from Prior" section content in this inquiry's finding

### Coupling assessment (change-propagation test)

| Pair | Coupling | Why |
|---|---|---|
| E1 ↔ E2 | **Strong** | The fine-grain refinement is the immediate complement to the user-language opening. They live in the same paragraph / adjacent paragraphs of the spec's identity section. Change one → must change the other. |
| E1 ↔ E3 | **Strong** | The granularity note explains the verb/noun disambiguation that E1 introduces. Same section. |
| E2 ↔ E3 | Moderate | The fine-grain refinement IS the operational expression of the granularity concept. Mutually reinforcing. |
| E4 ↔ E5 | Weak | Both extend the spec's identity-section material but at different topics (types of mapping vs. discipline-level vs colloquial). Loosely related. |
| {E1,E2,E3} ↔ E4 | Moderate (sequencing) | The kinds-of-mapping section needs the identity to be clear first so the section knows what it's classifying. Doesn't block parallel drafting but P2's final wording depends on P1's. |
| {E1,E2,E3} ↔ E5 | Weak | Colloquial-vs-disciplinary section can stand independently from the identity rewrite. |
| E6 ↔ E7 | **Strong** | The frontmatter field declares the relationship; the body section explains it. Two sides of the same declaration. |
| {E1-E5} ↔ {E6,E7} | Information | The finding references the spec edits; doesn't determine them. |
| E5 ↔ (canonical-source registry in inquiry-framing) | Optional weak | IF Path C lists methodology-wrapper components in detail, it MAY cross-reference the registry. Not load-bearing. |

### Coupling clusters (peaks)

- **Cluster I — Identity section reform:** {E1, E2, E3} — Path A and Path D collapse here. Three strongly-coupled elements in one section.
- **Cluster II — Kinds-of-mapping section:** {E4} — Path B, standalone.
- **Cluster III — Colloquial-vs-disciplinary section:** {E5} — Path C, standalone.
- **Cluster IV — Finding-level reconciliation:** {E6, E7} — the REFINES frontmatter + the "Changes from Prior" body section, two sides of one declaration.

Four clusters with low inter-cluster coupling and high intra-cluster coupling.

### Answer to user's question (a) — Path A and Path D collapse

Path A's identity-section rewrite and Path D's granularity note belong to **the same piece** (Cluster I). The granularity note is structurally a sub-piece of the identity-section refinement. Treating them as separate paths over-decomposes; treating them as one piece with three sub-elements (E1, E2, E3) is the correct boundary.

---

## Step 2 — Detect Boundaries (Top-Down)

Four major boundaries correspond to the four clusters. Each boundary is **single-point** — low coupling across each.

- **Boundary I-II** (Identity reform | Kinds of mapping): different sections; sequencing dependency only (Path B can be drafted in parallel with Path A, but Path B's final text depends on Path A's final identity wording).
- **Boundary I-III** (Identity reform | Colloquial-vs-disciplinary): completely independent. Both touch the spec's identity-related material but at different sub-topics.
- **Boundary II-III** (Kinds of mapping | Colloquial-vs-disciplinary): completely independent. Different topics; no shared content.
- **Boundary I/II/III ↔ IV** (Spec edits | Finding reconciliation): spec edits happen in `/explore`'s spec files; reconciliation happens in this inquiry's finding. Different artifacts.

---

## Step 3 — Validate Boundaries (Bottom-Up Check)

### Atoms (irreducible elements)

- A1: The new spec opening sentence in user-language
- A2: The fine-grain six-component refinement paragraph
- A3: The granularity note paragraph
- A4: The kinds-of-mapping section header + 7-type list
- A5: The colloquial-vs-disciplinary section header + content
- A6: The `refines:` frontmatter field
- A7: The "Changes from Prior" body section

### Atom-to-cluster mapping

| Atom | Cluster | Match? |
|---|---|---|
| A1, A2, A3 | I (Identity reform) | ✓ |
| A4 | II (Kinds of mapping) | ✓ |
| A5 | III (Colloquial-vs-disciplinary) | ✓ |
| A6, A7 | IV (Reconciliation) | ✓ |

Top-down clusters and bottom-up atoms agree across all four boundaries. **Boundary confidence: HIGH** on all four.

---

## Step 4 — Express as Question Tree

### P1: How is `/explore`'s identity section refined to honor user-language AND preserve fine-grain precision?

**Verification criteria:**
- [ ] The spec's opening (currently §1.1 "To explore is to perform purposive open-mode surfacing of a territory") is rewritten to use "mapping" as the umbrella verb at the user-language grain
- [ ] Immediately after, a fine-grain refinement paragraph names the verb (surfacing), the noun output (confidence-tagged map), and the six components together
- [ ] A granularity note explicitly disambiguates noun vs verb senses of "mapping" and tells the reader how to determine which grain applies in their context
- [ ] The existing four near-neighbor contrasts at §1.1 (Exploration is NOT Sensemaking / Innovation / Research / Browsing) remain coherent under the new framing — adjusted only if necessary to preserve coherence
- [ ] The upstream-precondition statement at §1.2 remains coherent and intact

**Sub-pieces:**
- **P1.1** — What's the new opening sentence in user-language? (Candidate: "Structural Exploration is the discipline for **purposive open-mode mapping of a territory** — surfacing items into view, recording them with annotations, and producing a confidence-tagged map." The user's term "mapping" leads; "surfacing" is recovered as one of the operations.)
- **P1.2** — What's the fine-grain refinement paragraph? (Names the verb-form: "open-mode surfacing"; names the noun-form: "the confidence-tagged map"; names the six components: Scan, Signal Detection, Probe, Resolution Management, Frontier Tracking, Confidence Mapping. Frames them as the mechanism that produces the map.)
- **P1.3** — What's the granularity note, and where does it go in the section? (Candidate placement: as a "Vocabulary note" at the end of §1.1 or in §1.6 Vocabulary. Content: explicitly states that at user-language grain "mapping" = the whole operation; at design grain "mapping" refers to the output type + one component. Reader determines grain from context: user-facing material uses coarse grain; spec-internal precision uses fine grain.)
- **P1.4** — Consistency check across §1.1.1 NOT-contrasts, §1.2 upstream-precondition, §1.3 NOT-list, §1.6 Vocabulary. Each existing paragraph re-read to ensure it remains coherent with the new framing. **This is the hidden-assumption resolution from Step 5.**

---

### P2: How is a "kinds of mapping /explore covers" section added to the spec?

**Verification criteria:**
- [ ] A new section (or labeled subsection) lists the seven types: layout, concept, status, coverage/confidence, frontier, possibility, plus relational (partly-excluded with cross-reference to NOT-list)
- [ ] Each type has a one-line description + a pointer to where in the existing spec it manifests
- [ ] The relational-partly-excluded item explicitly cross-references §1.3 NOT-list (relational MEANING belongs to sense-making; relational ADJACENCY as co-location is acceptable per §2.2)
- [ ] The section frames the typology as **descriptive of what /explore observably covers**, not prescriptive — leaving room for new types to be added as practice surfaces them
- [ ] The section notes that a single `/explore` run typically produces multiple types simultaneously (e.g., a codebase run produces layout + concept + status mapping all at once)

**Sub-pieces:**
- **P2.1** — What are the seven types' final names + one-liners? (Resolves the hidden-assumption "is the typology at the right level of abstraction" by acknowledging the typology is descriptive, not prescriptive.)
- **P2.2** — Where in the spec does the new section live? Candidates: as new §1.7 (after Vocabulary), as new §2.4 (after Annotation Layers and Per-item content depth), or as a standalone §3 sub-section. Recommend §1.7 — closer to identity discussion than process discussion.
- **P2.3** — How does the new section relate to the existing §2.2 Annotation Layers (which mention confidence, relevance, adjacency, confirmed-absent — some overlap with mapping types like coverage and relational)? The relationship: annotation layers are **how each surfaced item is annotated**; kinds of mapping are **what aspects of the territory the map covers at the whole-output level**. Different scopes; complementary. The section should cross-reference §2.2 to make this complementarity clear.

---

### P3: How is a "colloquial-explore vs disciplinary /explore" section added to the spec?

**Verification criteria:**
- [ ] A new section (suggested title: "Discipline vs. colloquial use" or "How /explore graduates an everyday operation") names the methodology-gradient boundary
- [ ] The section lists what colloquial-explore lacks: explicit Step 0 declarations, the NOT-list, telemetry, convergence criteria + jump-scan, frontier states, explicit confidence levels
- [ ] The section explicitly claims the **same cognitive operation** underlies both colloquial-explore (e.g., AI reads codebase) and `/explore`
- [ ] The section frames the boundary as a methodology-rigor **gradient**, not a binary
- [ ] The section is explicit that the methodology-wrapper list is **non-exhaustive** — it names the principal wrapper components but acknowledges the spec's full mechanism may include more (resolves the hidden-assumption from Step 5)

**Sub-pieces:**
- **P3.1** — Section title and one-sentence summary
- **P3.2** — Where does the section live in the spec? Candidate: new §1.8 (after kinds of mapping), or new §6.5 (Cross-references — extending the runner taxonomy with an informal/disciplinary comparison)
- **P3.3** — Does the section list every methodology-wrapper component or just summarize? Recommend: summarize the six principal wrapper components with a "non-exhaustive" caveat. Resolves the hidden-assumption that the list might overclaim completeness.
- **P3.4** — Does the section cross-reference the inquiry-framing discipline or the canonical-source registry from the prior canonical-coverage finding? Optional. If P3 mentions methodology-wrapper components in detail, it MAY note that the canonical-source registry (from the prior finding at `devdocs/inquiries/2026-05-13_06-30__explore_canonical_coverage_via_staged_iteration/finding.md`) is one specific instance of the disciplinary methodology at the inquiry-framing layer. Not load-bearing; choice of detail level.

---

### P4: How is the REFINES relationship to the prior canonical-coverage finding declared and explained?

**Verification criteria:**
- [ ] The finding's frontmatter has `refines: devdocs/inquiries/2026-05-13_06-30__explore_canonical_coverage_via_staged_iteration/finding.md`
- [ ] The finding's body has a "Changes from Prior" section (per the CONCLUDE template's required structure when refines/supersedes/corrects is set)
- [ ] The section identifies what's preserved (prior finding's three-piece architecture — `/staged-explore` runner, canonical-source registry, audit; coverage rules audit; two-layer model)
- [ ] The section identifies what's changed (the spec-language framing — user-language at the opening; granularity note)
- [ ] The section identifies what's new (the granularity reframe; the colloquial-vs-disciplinary distinction; the kinds-of-mapping typology)
- [ ] The section identifies migration (none — prior finding's actions remain valid; this finding adds compatible spec-language refinements)

**Sub-pieces:**
- **P4.1** — Frontmatter field
- **P4.2** — "Changes from Prior" section content

---

## Step 5 — Interface Map

### Inter-piece flows

| From | To | Direction | What flows | Flow type | Notes |
|---|---|---|---|---|---|
| **P1** | **P2** | Sequencing | P1's final identity wording determines what P2's kinds-of-mapping section refers back to | Prerequisite (weak) | Doesn't block parallel drafting; P2's final text depends on P1's final text |
| P1 | P3 | None | Independent topics | None | Drafted in parallel without coupling |
| P2 | P3 | None | Independent | None | Drafted in parallel without coupling |
| {P1, P2, P3} | P4 | Information | P4's "Changes from Prior" summarizes what the spec edits produce | Information | P4 happens last and reflects the others |
| P3 | (canonical-source registry from prior finding) | Optional cross-reference | If P3.3 lists wrapper components in detail, P3.4 may cross-reference the registry | Optional spec cross-ref | Non-binding; can be added or omitted without affecting other pieces |

### Within-piece flows

**Within P1:**
- P1.1 → P1.2 → P1.3: linear (opening sentence → refinement → granularity note, in that order in the spec)
- P1.4 → final: consistency check across surrounding paragraphs (after P1.1-P1.3 are drafted)

**Within P2:**
- P2.1 → P2.2: type list must exist before section placement is decided
- P2.2 → P2.3: placement determines what existing sections to relate to (especially §2.2 cross-reference)

**Within P3:**
- P3.1 → P3.2 → P3.3: linear (title → placement → detail level)
- P3.4 is optional and orthogonal to the others

**Within P4:**
- P4.1 ↔ P4.2: paired declaration; either one without the other is incomplete

### Assumptions-not-data check (Step 5 refinement)

**Three hidden assumptions surfaced**, each converted to explicit sub-piece tasks:

1. **P1's identity rewrite assumes the existing surrounding paragraphs remain coherent under the new framing.** The §1.1.1 NOT-contrasts (e.g., "vs Browsing — browsing is undirected; exploration is purposive") were written when the verb was "surfacing"; under the new "mapping" framing they need re-reading for consistency. The upstream-precondition statement (§1.2) was also written under the old framing. **Resolution:** P1.4 is the explicit consistency-check sub-piece. The hidden assumption is converted to a visible task.

2. **P3 (colloquial-vs-disciplinary section) assumes the methodology wrapper is well-defined and listable.** The exploration named six components (declarations + NOT-list + telemetry + convergence + frontier + confidence). If the section claims these are "the wrapper" and the spec elsewhere mentions other methodology elements not in this list, the claim is over-strong. **Resolution:** P3.3 explicitly asks the question and adopts the "non-exhaustive" framing. Hidden assumption converted to explicit constraint on the section's wording.

3. **P2 (kinds of mapping) assumes the 7 types are at the right level of abstraction.** Are layout + concept + status + coverage + frontier + possibility + relational the right typology, or just one possible carving? **Resolution:** P2.1's verification criteria require the typology be framed as descriptive (of what /explore observably does) rather than prescriptive. Hidden assumption converted to explicit framing constraint.

No other hidden assumptions detected. P4 is reflective; it doesn't introduce new mechanism.

---

## Step 6 — Dependency Order

### Phase 1 — Parallel (no inter-dependencies, can be drafted simultaneously)

- **P1** (identity section reform — Cluster I)
- **P3** (colloquial-vs-disciplinary section — Cluster III)

### Phase 2 — Sequencing-dependent on P1

- **P2** (kinds-of-mapping section — Cluster II) — P2's final wording depends on P1's final identity wording. P2 can be drafted in parallel with P1 but the final pass requires P1's settled text.

### Phase 3 — Reflective; aggregates the others

- **P4** (REFINES relationship — Cluster IV) — happens after P1, P2, P3 are settled; describes what they produced.

### Within-piece ordering

**P1:**
1. P1.1 (opening sentence) — first
2. P1.2 (fine-grain refinement paragraph) — after P1.1
3. P1.3 (granularity note) — after P1.2
4. P1.4 (consistency check across surrounding paragraphs) — after P1.1-P1.3 are drafted

**P2:**
1. P2.1 (type names + one-liners) — first
2. P2.2 (placement decision) — after P2.1
3. P2.3 (cross-reference to §2.2 Annotation Layers) — after P2.2

**P3:**
1. P3.1 (title + summary) — first
2. P3.2 (placement decision) — after P3.1
3. P3.3 (detail level decision) — after P3.2
4. P3.4 (optional cross-reference) — orthogonal; can be added at any point

**P4:**
- P4.1 and P4.2 are paired; done together

No circular dependencies detected at any level.

---

## Step 7 — Self-Evaluate

### Determination-mechanism piece check (refinement applied)

The load-bearing concept whose use depends on a runtime determination is **"granularity"** — the reader must determine "which grain am I operating at?" to know whether "mapping" means the umbrella operation (coarse) or specifically the output type / one component (fine).

Has the Q-tree included a piece addressing HOW the runtime determination is made?

**YES — P1.3 (the granularity note) is the determination mechanism.** It explicitly tells the reader: at user-language grain, mapping = the umbrella operation; at design grain, mapping = the specific narrow sense. The reader determines their own grain from context: user-facing discussion uses coarse grain; spec-internal precision uses fine grain.

Additionally, there's a meta-determination question: WHO decides which grain to use in a given context? Currently the answer is "the reader, based on whether they're encountering user-facing material or spec-internal material." P1.3 makes this explicit; further automation (e.g., the spec auto-detecting reader context) is downstream/future and not in this finding's scope.

**Determination-mechanism check: PASS.** P1.3 is the locus; the Q-tree does not presuppose the determination has been made — P1.3 IS the determination.

### Minimum self-evaluation (3 dimensions)

| Dimension | Verdict | Reasoning |
|---|---|---|
| **Independence** | PASS | P1 and P3 fully independent in Phase 1. P2 depends on P1 (sequencing only). P4 aggregates after. |
| **Completeness** | PASS | All four action paths from sensemaking covered. Path A and Path D correctly collapsed into Cluster I. Reconciliation with prior finding (REFINES relationship) explicit as Cluster IV. |
| **Reassembly** | PASS | Completing P1+P2+P3+P4 produces an updated `/explore` spec (identity rewrite + granularity note + kinds-of-mapping section + colloquial-vs-disciplinary section) plus this inquiry's finding with proper REFINES frontmatter and "Changes from Prior" section. Together these fully address the user's question. Determination-mechanism check: PASS. |

### Full self-evaluation (7 dimensions)

| Dimension | Verdict | Reasoning |
|---|---|---|
| Independence | PASS | (as above) |
| Completeness | PASS | (as above) |
| Reassembly | PASS | (as above) |
| **Tractability** | PASS | Each piece is shippable in 30-60 minutes. P1 is largest (4 sub-pieces, one section of `/explore` spec). P2 ≈ 30 min (one section). P3 ≈ 30 min (one section). P4 ≈ 15 min (frontmatter + brief body section). |
| **Interface clarity** | PASS-with-flags | One sequencing interface (P1 → P2). Three hidden assumptions surfaced and converted to explicit sub-piece tasks. No remaining hidden interfaces. |
| **Balance** | PASS | P1 is largest but justifiably so (it's the load-bearing change). P2 and P3 lighter. P4 lightest. No single piece dominates 80%+. |
| **Confidence** | HIGH | Top-down and bottom-up agree across all 4 boundaries. Path A and Path D correctly collapsed (sensemaking surfaced this; decomposition confirmed via coupling analysis). |

### Failure-mode check

| Mode | Observed? | Notes |
|---|---|---|
| 1. Premature decomposition | NO | Sensemaking explicitly resolved the whole (2 grains; methodology-vs-operation; 4 action paths) before decomposition started. |
| 2. Wrong boundaries | NO | Path A and Path D recognized as one cluster via coupling perception, not as two separate pieces. Bottom-up atom check confirmed. |
| 3. Hidden coupling | THREE FOUND, all addressed | (1) P1's surrounding-paragraph consistency → P1.4 explicit; (2) P3's wrapper-completeness → P3.3 explicit non-exhaustive framing; (3) P2's typology-rightness → P2.1 explicit descriptive framing. |
| 4. Missing pieces | NO | Determination-mechanism check passed (P1.3 is the locus). Reconciliation with prior finding (Cluster IV) explicit. |
| 5. Over-decomposition | NO | Sub-pieces within P1, P2, P3 are tractable and distinct concerns; not trivial. |
| 6. Ignoring dependencies | NO | Explicit dependency order produced (Phase 1 parallel; Phase 2 sequencing-dependent; Phase 3 aggregating). |
| 7. Imbalanced decomposition | NO | Pieces roughly balanced for their scope. |

### Telemetry

- Top-level pieces: 4 (P1-P4) corresponding to 4 clusters
- Sub-pieces: 4 in P1 + 3 in P2 + 4 in P3 + 2 in P4 = 13 total
- Interfaces: 1 inter-piece sequencing (P1 → P2) + 3 information flows (to P4) + 1 optional cross-reference (P3 → prior finding) = 5
- Hidden couplings surfaced: 3 (all converted to explicit sub-piece tasks)
- Hidden couplings unresolved: 0
- Dependency phases: 3 (Phase 1 parallel; Phase 2 sequencing; Phase 3 reflective)
- Circular dependencies: 0

---

## Final Deliverable

### Coupling Map (summary)

Four clusters, low inter-cluster coupling:

```
[Cluster I — Identity reform]                {E1 opening, E2 refinement, E3 granularity note}
        │
        │ sequencing (weak)
        ▼
[Cluster II — Kinds of mapping]              {E4 new section listing 7 types}

[Cluster III — Colloquial-vs-disciplinary]   {E5 new section explaining methodology gradient}
                (independent)

[Cluster IV — Reconciliation]                {E6 refines: frontmatter, E7 Changes from Prior}
        ↑
        │ information flow from all
        │
[Clusters I, II, III]
```

### Question Tree (summary)

- **P1** — How is `/explore`'s identity section refined? (Cluster I; 4 sub-pieces; ≈30-60 min; Path A+D collapsed)
- **P2** — How is the kinds-of-mapping section added? (Cluster II; 3 sub-pieces; ≈30 min)
- **P3** — How is the colloquial-vs-disciplinary section added? (Cluster III; 4 sub-pieces; ≈30 min)
- **P4** — How is the REFINES relationship declared? (Cluster IV; 2 sub-pieces; ≈15 min)

### Interface Map (summary)

- P1 → P2 (sequencing: P2's final text depends on P1's settled identity wording)
- {P1, P2, P3} → P4 (information: reconciliation summarizes the spec edits)
- P3 → prior finding (optional cross-reference: methodology-wrapper components may name the canonical-source registry)
- 13 intra-piece sub-flows
- 3 hidden couplings converted to explicit interface constraints

### Dependency Order (summary)

- **Phase 1 (parallel):** P1, P3
- **Phase 2 (sequencing-dependent):** P2 (depends on P1)
- **Phase 3 (reflective):** P4 (aggregates after others)

### Self-Evaluation (summary)

All 7 dimensions PASS. Determination-mechanism check PASS. No failure modes fired. Three hidden couplings surfaced and converted to explicit constraints.

**Overall: PROCEED.** Decomposition complete; ready for innovation phase to generate concrete spec-edit text for each piece + assembly check across pieces (does the four-piece architecture cohere into a clean updated spec, or do the pieces interact in ways that need a fifth piece — e.g., a section-by-section diff doc?).
