# Decomposition — routeman persistence and invocation modes

## User Input

`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-24_00-20__routeman_persistence_and_invocation_modes/_branch.md`

---

## Step 1 — Coupling Topology

### Elements of the whole

Sensemaking's stabilized model produces this set of elements (the "whole" Decomposition partitions):

- **E1** — Rephrased question list (7 testable questions; status-labeled; the user's PRIMARY deliverable per "list them in better phrased way").
- **E2** — Per-question structural reasoning (settled-by-protocol / settled-by-prior-inquiry / settled-with-nuance / open).
- **E3** — Adoption spec sketch (5 sub-commitments: mechanism + naming + placement + lifecycle + boundary-with-branch_inquiry).
- **E4** — Residual open questions (FF-1 through FF-5).
- **E5** — Inherited commitments re-test (per Synthesis Trigger obligation: re-test commitments from 5 prior outputs + the 2 protocols).
- **E6** — Cross-document impact notes (downstream of finding; CONCLUDE-handled).

### Pairwise coupling

| Pair | Coupling | Reason |
|---|---|---|
| E1 ↔ E2 | **STRONG** | Each rephrased question carries its reasoning; the list IS the question + reasoning bundle. |
| E1 ↔ E4 | **STRONG** | FF-1 to FF-5 ARE the "open" rows of the question list. |
| E2 ↔ E3 | **MODERATE** | Settled-with-nuance questions point TO spec commitments for their answer. |
| E2 ↔ E5 | **STRONG** | Per-question reasoning incorporates re-test verdicts ("commitment from prior X stands / is extended / is challenged"). |
| E3 ↔ E5 | **MODERATE** | Spec defines NEW commitments; re-test verifies OLD commitments against the new ones. |
| E4 ↔ E5 | **WEAK** | FFs are new open questions; inherited commitments are old. Mostly disjoint. |
| E6 ↔ (E1, E2, E3, E4, E5) | **WEAK** | Cross-doc updates are CONCLUDE-side; downstream of the inquiry's primary outputs. |

### Cluster identification

Three high-coupling clusters + one weakly-coupled satellite:

- **Cluster A — Question-List artifact:** E1 + E2 + E4. Tightly coupled. The question list IS the rephrased questions WITH reasoning AND embedded references to open FFs.
- **Cluster B — Adoption-Spec artifact:** E3 (with one moderate edge to E2 for citation). Stands alone as a structural commitment.
- **Cluster C — Re-test artifact:** E5. Stands alone as a synthesis-trigger obligation; cross-references to E2 (cites in reasoning) and to E3 (tests against new commitments).
- **Satellite — Cross-doc updates:** E6. CONCLUDE-handled; not in this decomposition's scope.

### Coupling-map summary

```
       [Cluster A: Question-List]
          E1 — E2 — E4
          STRONG       STRONG
              |
              |  (MODERATE: reasoning cites spec)
              v
       [Cluster B: Adoption-Spec]
              E3
              ^
              |  (MODERATE: spec tested by re-test)
              |
       [Cluster C: Re-test]
              E5  ──> (STRONG: reasoning cites verdicts) ──> [Cluster A]

       [Satellite: Cross-doc updates]
              E6  (CONCLUDE-handled; out of scope)
```

---

## Step 2 — Detect Boundaries (Top-Down)

Three natural boundaries emerge:

- **B1** — Between Cluster A (Question-List) and Cluster B (Adoption-Spec). Low-crossing: a few citation pointers from question reasoning into spec sections.
- **B2** — Between Cluster A (Question-List) and Cluster C (Re-test). Low-crossing: reasoning cites re-test verdicts (one direction).
- **B3** — Between Cluster B (Adoption-Spec) and Cluster C (Re-test). Bidirectional but low-traffic: spec defines new commitments; re-test reads them to verify old commitments.

Each boundary creates internally cohesive, externally sparse pieces.

---

## Step 3 — Validate Boundaries (Bottom-Up)

Irreducible atoms:

- **Atom-a** — A single rephrased question with its status label and reasoning paragraph.
- **Atom-b** — A single adoption commitment (e.g., "naming: `_navig.md` + `routeman.md` with alias").
- **Atom-c** — A single prior commitment's verdict (e.g., "commitment X from prior Y → PRESERVED").

Clustering check:
- Atoms-a (rephrased questions) cluster naturally into Cluster A. ✓
- Atoms-b (adoption commitments) cluster into Cluster B. ✓
- Atoms-c (commitment verdicts) cluster into Cluster C. ✓

**No atoms split across boundaries; no atoms forcibly grouped that should be separate. Boundaries CONFIRMED.**

**Confidence:** HIGH — top-down + bottom-up agree on all three boundaries.

---

## Step 4 — Question Tree

### P1 — Rephrased Question List

**Question:** "How should the user's 6 proposals + meta-task be rephrased as 7 clearly-phrased, testable questions — each labeled by status (SETTLED / SETTLED-WITH-NUANCE / OPEN) with concise structural reasoning that honors the user's 'list them in better phrased way' ask?"

**Verification criteria:**
- [ ] Exactly 7 questions, one per topic + meta-task.
- [ ] Each question is testable (has answers that could fail it on structural grounds).
- [ ] Each question is mutually exclusive from siblings (no two questions ask the same thing).
- [ ] Each question carries a status label (SETTLED / SETTLED-WITH-NUANCE / OPEN).
- [ ] Each question carries a structural reasoning note (1-3 sentences) citing the prior or protocol that settles it OR the FF that keeps it open.
- [ ] User-language preserved where load-bearing (e.g., user's `_navig.md` / `routeman.md` are visible, with the alias-mapping note).
- [ ] The list is navigable in one read (concise; not bloated with adoption-spec content that belongs in P2).

### P2 — Adoption Spec Sketch

**Question:** "What is the concrete sketch of how routeman adopts `multi_resolution_navigation.md` — committing on naming, mechanism, placement, lifecycle, and the boundary with `branch_inquiry.md`?"

**Verification criteria:**
- [ ] **Mechanism commitment:** routeman's persistence = the protocol's frontier ledger + resume semantics + frontier-candidate-record schema.
- [ ] **Naming commitment:** routeman uses `_navig.md` + `routeman.md`; alias note documents `_navig.md` = `_frontier.md` (when consumed by routeman) and `routeman.md` = `navigation.md`.
- [ ] **Placement commitment:** hybrid by invocation scope — per-inquiry-folder when routeman is inquiry-scoped; `devdocs/navigation/<run-id>/` when project-scoped.
- [ ] **Lifecycle commitment:** persistent across invocations + in-place status evolution + append for new candidates + revision-reason logged (FF-3 calibrates the field design).
- [ ] **Boundary-with-branch_inquiry commitment:** two-tier policy — sub-routes use `multi_resolution_navigation`'s child-map (`output_root/children/<route-id>/`); ROUTE-TO-INQUIRY PROMOTION uses `branch_inquiry.md` for a child SIC pipeline.
- [ ] Routeman-specific schema extensions enumerated (meta-reasoning field versioning; mode-switch history) — flagged as FF-2 for SKILL.md authoring.

### P3 — Inherited Commitments Re-test

**Question:** "Does each commitment from the 6 prior outputs (4 routeman-chain inquiries + 1 input-dependency anchor + `branch_inquiry.md` protocol) survive the adoption of `multi_resolution_navigation.md`, and what surgical-correction (if any) is needed where they don't?"

**Verification criteria:**
- [ ] Each prior enumerated with its load-bearing commitments.
- [ ] Each commitment marked PRESERVED / EXTENDED / CORRECTED / FLAGGED-WITHOUT-RE-TEST with reason.
- [ ] No commitment silently dropped.
- [ ] Where corrections are needed, surgical-correction note specifies (a) the level of the correction, (b) which downstream consumers are affected, (c) whether a separate inquiry is required.
- [ ] The protocol-overlap finding itself flagged as a NEW commitment that needs cross-doc impact notes (the inquiry's content) — but the actual impact-note writing is CONCLUDE-side.

### Question-tree stopping criteria check

- P1: tractable (7 questions × short reasoning ≈ one focused pass).
- P2: tractable (5 sub-commitments + extensions list × short paragraph each).
- P3: tractable (6 priors × commitments enumeration × verdict).

No piece needs sub-decomposition. Stopping criteria met: TRACTABLE for all three.

---

## Step 5 — Interfaces

| From | To | What flows | Direction | Notes |
|---|---|---|---|---|
| P1 (question-list) | P2 (adoption-spec) | Citation pointers from settled-with-nuance question reasoning into specific spec sub-commitments | one-way | Each cite is short ("Topic 6 → SETTLED — see P2: naming + placement"). |
| P1 (question-list) | P3 (re-test) | Citation pointers from settled-by-prior question reasoning into specific re-test verdicts | one-way | Each cite is short ("Topic 3 → SETTLED — protocol's resume mechanism; re-test PRESERVED in P3"). |
| P3 (re-test) | P2 (adoption-spec) | Commitment-verification queries: "does the spec contradict prior commitment X?" | one-way (read-only) | Re-test READS the spec to verify; the spec is the test target. |
| P2 (adoption-spec) | P3 (re-test) | New commitments to be tested by re-test | one-way | The spec PROVIDES the new commitment set; re-test consumes it. |
| External: 4 priors + 2 protocols | P3 | Prior commitments to be re-tested | one-way (read-only) | The 6 priors' findings + the 2 protocols' specs are inputs. |
| External: Sensemaking's SV6 | P1 + P2 + P3 | Stabilized model (settled vs nuance vs open) | one-way (consumed) | All three pieces build on Sensemaking's stabilization. |

### Assumptions-not-data check

- **P1 → P2 interface:** P1's pointers ASSUME P2's section labels are stable. Hidden coupling: if P2's structure shifts (e.g., naming commitment is split into two sub-commitments), P1's pointers must update. Mitigation: stable sub-commitment labels in P2 (mechanism / naming / placement / lifecycle / boundary).
- **P3's read of priors:** P3 ASSUMES the priors' commitments have been correctly inventoried. If a commitment is missed in the inventory, the re-test is incomplete. Mitigation: enumerate each prior's commitments explicitly before marking verdicts; rely on Sensemaking's identification of priors' commitments.
- **P2 ↔ P3 interface:** P2 ASSUMES the adoption is an EXTENSION of prior commitments (not a reversal). P3 tests this assumption. If P3 finds the adoption REVERSES a prior commitment, P2 must flag (and Critique must catch).

---

## Step 6 — Dependency Order

```
┌─────────────────────────────────────────┐
│  Sensemaking SV6 (input to all pieces)  │
└────────────────┬────────────────────────┘
                 │
        ┌────────┴────────┐
        │                 │
        v                 v
┌──────────────┐   ┌──────────────┐
│  P2 (spec)   │   │  P3 (re-test) │   ← Can be drafted in parallel
└──────┬───────┘   └──────┬────────┘
       │                  │
       │ (P2 provides     │ (P3 tests
       │  new commit-     │  P2 against
       │  ments to P3)    │  priors)
       │                  │
       └──────┬───────────┘
              v
       ┌──────────────────────┐
       │  P1 (question-list)  │   ← Drafted last; cites P2 + P3
       └──────────────────────┘
```

- **P2 and P3 are PARALLEL.** They cross-check (P3 reads P2) but can be drafted concurrently; if one shifts, the other adjusts at integration.
- **P1 is LAST.** P1's per-question reasoning consumes both P2's commitments and P3's verdicts.

**Note for Innovation:** Innovation can generate candidates for all three pieces in PARALLEL (no strict dependency between candidate-generation rounds). The dependency above applies to FINAL ASSEMBLY of the deliverables, not to candidate ideation.

---

## Step 7 — Self-Evaluation

### Minimum (3 dimensions)

| Dimension | Check | Verdict |
|---|---|---|
| **Independence** | Can each piece be worked on without the others existing? | PASS-WITH-NOTE — P1 cites P2 + P3 (defined interfaces); P3 cites P2 (defined interface); P2 stands alone. The citations are the interfaces, not hidden coupling. |
| **Completeness** | Do the pieces cover the inquiry's whole? | PASS — P1 = the user's primary ask; P2 = the adoption commitments; P3 = the synthesis-trigger obligation. E6 (cross-doc updates) is CONCLUDE-handled and explicitly out-of-scope-for-decomposition (covered at finalization). |
| **Reassembly** | Pieces + interfaces = whole? | PASS — given P1, P2, P3 + the defined citation interfaces, the inquiry's finding can be assembled (the question list IS the user's primary output; the spec is the supporting deliverable; the re-test is the synthesis-trigger section). |

### Determination-mechanism piece check (refinement)

The Q-tree includes a load-bearing concept ("two-tier policy for branch_inquiry vs child-map") whose use depends on a runtime determination ("is this a sub-route OR a promoted-to-inquiry route?"). Where in the Q-tree is the determination mechanism addressed?

- **P2** commits the two-tier boundary (sub-routes use child-map; promoted routes use branch_inquiry).
- **The specific threshold for promotion** is explicitly FLAGGED as **FF-1** (open question) inside P3-handed-off-to-FF-list (and within P2's spec sketch under the boundary commitment).
- The Q-tree DOES include the determination — as an OPEN sub-question (FF-1), not as a hidden assumption. This is acceptable: the inquiry surfaces the gap rather than silently presupposing.

**Reassembly check passes via FF-1 acknowledgment.**

### Full (additional 4 dimensions)

| Dimension | Check | Verdict |
|---|---|---|
| **Tractability** | Each piece small enough for a single focused pass? | PASS — all three pieces are small-to-medium; none requires sub-decomposition. |
| **Interface clarity** | All cross-piece flows explicit? Hidden dependencies absent? | PASS — 6 interfaces explicit (P1↔P2, P1↔P3, P2↔P3, plus 2 external→pieces). Assumptions-not-data check applied (P1's pointer-stability; P3's inventory-completeness; P2-P3 extension-vs-reversal). |
| **Balance** | Complexity roughly proportional? | PASS — P1 (7 questions × short reasoning) and P3 (6 priors × commitment enumeration × verdict) are similar in scope; P2 (5 sub-commitments × explanation) is slightly smaller but substantive. No piece is 80% of the work. |
| **Confidence** | Top-down + bottom-up agree on boundaries? | HIGH — both passes identified the same three boundaries; no atoms split or forcibly grouped. |

### Failure-modes review

- **Premature decomposition:** No — sensemaking has stabilized the whole (SV6); decomposition operates on a clear model.
- **Wrong boundaries:** No — boundaries cut at moderate-or-weak coupling (B1 = moderate; B2 = moderate; B3 = moderate); cluster cores stay tight.
- **Hidden coupling:** Checked via assumptions-not-data — three identified + mitigated.
- **Missing pieces:** Determination-mechanism check passes via FF-1 acknowledgment; E6 (cross-doc updates) explicitly delegated to CONCLUDE.
- **Over-decomposition:** No — 3 pieces for 3 distinct deliverable shapes; sub-pieces of P2/P3 are tractable as listed atoms.
- **Ignoring dependencies:** No — dependency order specified (P2 || P3 → P1).
- **Imbalanced decomposition:** No — balance check passed.

---

## Handoff to Innovation

Innovation's task: generate candidate variations for each piece's deliverable shape.

For **P1 (Rephrased Question List):**
- Vary question phrasings (precision, brevity, user-language alignment).
- Vary status labels (3-bucket SETTLED/NUANCE/OPEN vs finer-grained taxonomy).
- Vary reasoning length (one-liner vs paragraph).
- Vary list organization (chronological-by-user-input vs by-status vs by-topic-cluster).

For **P2 (Adoption Spec Sketch):**
- Vary commitment-strength language (proposes vs commits vs requires).
- Vary alias-note placement (in routeman SKILL.md vs in the protocol vs in both).
- Vary placement-decision presentation (rule-based vs example-based).
- Vary the boundary-with-branch_inquiry's threshold formulation (heuristic vs explicit rule vs deferred-to-FF-1).

For **P3 (Inherited Commitments Re-test):**
- Vary verdict taxonomy (PRESERVED/EXTENDED/CORRECTED/FLAGGED vs simpler/finer).
- Vary depth (1-line verdict vs paragraph reasoning vs paragraph + cited evidence).
- Vary organization (by prior vs by commitment-category vs by-verdict-grouping).

Innovation should aim for at least one VARIATION-per-piece across (generic / focused / contrarian) where applicable, and should run an Assembly Check across surviving candidates to test cross-piece coherence (e.g., does a "minimal" P1 fit with a "detailed" P2?).
