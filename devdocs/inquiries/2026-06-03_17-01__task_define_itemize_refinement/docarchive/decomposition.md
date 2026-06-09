## User Input

`devdocs/inquiries/2026-06-03_17-01__task_define_itemize_refinement/_branch.md` (priors consumed: `surfacing.md`, `sensemaking.md`)

---

# Decomposition — Itemize Refinement

**Whole being decomposed:** the SV6 stabilized refinement of Itemize's meaning-layer definition — a refined §2 Itemize description (replacing the prior 15-39 finding's wording) + a one-line disambiguation appended to NOT-list category 4 + the supporting structural rule + asymmetric-failure inversion explanation + load-bearing single-item case argument + ripple-effects assessment.

**Decomposition scope:** small (a refinement, not a from-scratch design). The deliverable is two spec-edits to the prior 15-39 finding's eventual structural-layer instantiation, plus supporting reasoning that lives in this inquiry's finding body.

## Step 1 — Coupling Map

### Elements in the SV6 model

1. Refined verb-meaning paragraph (the main replacement of §2 Itemize)
2. Specifications-vs-tasks structural rule + worked positive/negative examples
3. Asymmetric-failure direction-inversion explanation (cost structure differs from surfacing's)
4. Load-bearing perception in single-item case (count = 1 IS the signal)
5. Multi-detection vs cross-item interpretation disambiguation (one-line NOT-list category 4 append)
6. Ripple-effects assessment (commentary, not a deliverable artifact)
7. User's reframe verdict (adopted with grounding — reflected in element 1)

### Coupling perception

| Pair | Strength | Why |
|---|---|---|
| Element 1 ↔ Element 2 | **STRONG** | The structural rule (2) IS the bound on the verb-meaning's (1) split-fire condition; inseparable |
| Element 1 ↔ Element 3 | **STRONG** | The asymmetric-failure direction (3) IS the justification for the verb-meaning's (1) "default = ONE item"; together |
| Element 1 ↔ Element 4 | **STRONG** | The load-bearing-in-single-item argument (4) IS what makes the verb-meaning's (1) default-one-item a real perception (not a no-op) |
| Element 5 ↔ Element 1 | **MODERATE** | The NOT-list disambiguation (5) uses the "count-perception" term established by (1); reference dependency |
| Element 6 ↔ everything else | **WEAK** | Ripple-effects is meta-commentary, not a deliverable artifact; loosely coupled |
| Element 7 ↔ Element 1 | **STRONG** | The user's reframe verdict (7) is REFLECTED IN (1) — not a separate piece |

### Clusters → pieces

- **Cluster X (refined Itemize text):** elements 1 + 2 + 3 + 4 + 7 — joint authoring piece. All belong in the refined §2 Itemize description.
- **Cluster Y (NOT-list disambiguation):** element 5 — separate one-line append at a DIFFERENT spec location (§10 category 4).
- **Cluster Z (commentary):** element 6 — lives in the finding's body (Reasoning + Open Questions / Refinement-Trigger sections); not an authoring artifact.

## Step 2 — Detect Boundaries (top-down)

Natural cut points:

1. **Shared anchor (P0)** — the prior 15-39 finding's commitments cited but not re-stated: P0 verb-meaning sentence ("expand a task statement into a defined task — via itemization, ..."); perception/action split principle; lightweight stance + criterion (vi); self-containment principle. Cited, not re-authored.
2. **R1 — Refined §2 Itemize description** — replaces the prior wording. One coherent paragraph containing: verb-meaning + structural rule (specifications-vs-tasks via (subject, action, deliverable-shape) tuples) + asymmetric-failure direction + load-bearing single-item case + worked positive/negative examples.
3. **R2 — NOT-list category 4 one-line append** — appended after the existing category 4 entry. Disambiguates multi-detection from cross-item interpretation.

Two authoring pieces + one shared anchor.

## Step 3 — Validate Boundaries (bottom-up)

Atoms an author needs to write:

- The refined Itemize one-paragraph text (R1's content; including the verb-meaning sentence, the structural rule, the asymmetric-failure rationale, the load-bearing perception statement, the worked positive/negative examples)
- The one-line NOT-list category 4 append text (R2's content; the disambiguation sentence)

Top-down (clusters) and bottom-up (atoms) agree. **Confidence: HIGH.**

Considered merges/splits:
- Merge R1 + R2 (both refining prior spec sections)? Rejected. They target DIFFERENT spec sections (§2 vs §10 category 4); they are different content types (verb-meaning vs NOT-list entry); merging would obscure the location-specific scope of each edit.
- Split R1 into separate sub-pieces (verb-meaning / structural rule / asymmetric-failure / load-bearing)? Rejected. All four are tightly coupled within one paragraph; the prior finding's §2 Itemize is one paragraph, and the refinement replaces it with one paragraph; splitting would force the author to choose paragraph-internal boundaries that don't exist in the spec's section structure.

## Step 4 — Question Tree (pieces as questions + verification criteria)

### P0 — Shared anchor (cited by R1 and R2)

Question: *What commitments from the prior 15-39 finding does this refinement preserve and reference (without re-authoring)?*

Verification:
- [ ] **P0 verb-meaning sentence** from the prior finding referenced verbatim: *"Task-Define is the cognitive operation of expanding a task statement into a defined task — via itemization, meta-questioning, deconstruction, multi-scope rendering, and constrained rephrasing."* "Itemization" still applies; the refinement does not remove Itemize from the verb-meaning.
- [ ] **Perception/action split** principle preserved: Itemize perceives count; the runner acts on it (spawn-set vs process-in-place).
- [ ] **Lightweight stance** preserved (including criterion (vi)); the refined Itemize's items-list output satisfies (vi) via the count being load-bearing.
- [ ] **Self-containment** preserved; the refined description and the NOT-list append contain no neighbor-discipline / prior-arc references.
- [ ] **Intra-discipline ordering** unchanged: Itemize still first; per-item operations operate per item (per-1-item by default).
- [ ] Stated as: "this refinement preserves the rest of the prior 15-39 finding; only §2 Itemize description (R1) and §10 NOT-list category 4 (R2) are touched."

### R1 — Refined §2 Itemize description

Question: *What exact paragraph replaces the prior finding's §2 Itemize description?*

Verification:
- [ ] **Verb-meaning core** — Itemize PERCEIVES whether the statement contains multiple completely-different tasks (default: ONE item; emit N items only on clear positive detection).
- [ ] **Structural rule for "completely different"** — distinct (subject, action, deliverable-shape) tuples. The 3-element tuple is the bound; specifications of one task share the tuple; multiple tasks have N distinct tuples.
- [ ] **Asymmetric-failure direction** — bias toward keep-together. Stated with the cost-structure rationale (premature-split is irrecoverable; late-split is recoverable via downstream Meta-question + user).
- [ ] **Load-bearing single-item case** — the count = 1 verdict is itself the signal to the runner ("process in place; do not spawn"); the operation is not a no-op even when output equals input.
- [ ] **Worked positive example** — "fix the auth bug AND build the billing feature" — distinct subjects + distinct actions + distinct deliverable-shapes; fires positive.
- [ ] **Worked negative example** — single-task-with-specifications case (the prior 15-39 finding's Source Input or a structurally-equivalent example); 1 tuple + N specifications; does not fire.
- [ ] **Output shape** — items list with cardinality ≥ 1; count = 1 by default; count > 1 only on positive multi-detection.
- [ ] **User-language alignment** — "completely different tasks" preserved verbatim from the user's reframe.
- [ ] **No neighbor-discipline references** (self-containment); the description names operations and concepts Task-Define owns.
- [ ] **References P0** for shared vocabulary (perception/action split; "itemization" as part of verb-meaning).

### R2 — NOT-list category 4 one-line append

Question: *What exact sentence is appended to the prior finding's §10 NOT-list category 4 (cross-item interpretation excluded)?*

Verification:
- [ ] **Disambiguation sentence** — names two distinct operations: Itemize's multi-detection (count-perception; intrinsic to itemization) versus cross-item INTERPRETATION (relational meaning across items once separated; excluded by category 4).
- [ ] **Clear preservation of category 4's exclusion** — relational interpretation across items remains excluded; only the disambiguation is added.
- [ ] **References R1's "count-perception" term** for consistency.
- [ ] **One-line append; no restructuring of category 4's existing content.**
- [ ] **No neighbor-discipline references.**
- [ ] **Self-containment preserved.**

## Step 5 — Interface Map

| From → To | What flows | Direction |
|---|---|---|
| P0 → R1 | shared P0 verb-meaning sentence + perception/action split + lightweight criterion (vi) + self-containment principle | one-way (anchor) |
| P0 → R2 | self-containment principle + NOT-list grounding pattern | one-way (anchor) |
| R1 → R2 | the "count-perception" term established by R1 is referenced by R2's disambiguation | one-way |

**Hidden-coupling check (Assumptions-not-data per Step 5 refinement):**

- R1 + R2 both ASSUME the prior 15-39 finding remains the authoritative source-of-truth for all unchanged sections. If the prior finding is later changed independently, R1's "replaces §2" and R2's "appends to §10 cat 4" become operations against a moving target. Mitigated by: this refinement's frontmatter declaring `refines:` against the prior finding's specific version (the finding as it exists at the time this refinement is authored); future edits to the prior finding need to harmonize with R1+R2.
- R1 ASSUMES the structural-layer spec author for Task-Define will treat the refined §2 Itemize description as the canonical text (preferred over the prior finding's). Mitigated by: this refinement's frontmatter declares `refines:` so the inheritance is explicit.
- R2 ASSUMES the structural-layer spec author writes NOT-list category 4 with the disambiguation line appended; if the structural-layer spec writes category 4 without the appended line, the disambiguation is lost. Mitigated by: R2's verification criterion enumerates the disambiguation as a required line.

## Step 6 — Dependency Order

```
P0 (cited shared anchor — references the prior 15-39 finding's commitments)
   │
   ▼
R1 (refined §2 Itemize description — replaces the prior wording)
   │
   ▼
R2 (NOT-list category 4 one-line append — uses R1's "count-perception" term)
```

Strictly sequential — no parallelism. R2 depends on R1 (R2 cites R1's terminology).

## Step 7 — Self-Evaluation

| Dimension | Check | Verdict |
|---|---|---|
| **Independence** | Can each piece be authored given P0 + declared inputs? | **PASS** — P0 is cited (no authoring); R1 has full standalone content; R2 has full content with a single inter-piece reference (the "count-perception" term from R1, an explicit interface). |
| **Completeness** | Do P0 + R1 + R2 cover SV6's deliverable? | **PASS** — verified item-by-item:<br>SV6.1 Refined verb-meaning → R1 ✓<br>SV6.2 Specifications-vs-tasks rule → R1 ✓<br>SV6.3 Asymmetric-failure direction → R1 ✓<br>SV6.4 Load-bearing single-item case → R1 ✓<br>SV6.5 NOT-list disambiguation → R2 ✓<br>SV6.6 Ripple-effects assessment → finding's body (commentary, not a deliverable piece) ✓<br>SV6.7 User's reframe adopted → reflected in R1 ✓ |
| **Reassembly** | Pieces + interfaces = the SV6 model? | **PASS** — applying P0 (cite the unchanged prior commitments) + R1 (replace §2) + R2 (append to §10 cat 4) to the prior 15-39 finding's structural-layer instantiation produces the SV6 refinement. No gaps. |

**Determination-mechanism piece check** (Step 7 refinement):

Load-bearing concept whose use depends on runtime determination: Itemize's "perceive whether multiple completely-different tasks exist." HOW is the determination made? Via the (subject, action, deliverable-shape) tuple test from R1. The structural rule IS the determination mechanism, and it lives in R1. ✓

**Full-evaluation (4 additional dimensions; since this is a discipline-design refinement — higher stakes than ordinary problem-solving):**

| Dimension | Check | Verdict |
|---|---|---|
| **Tractability** | Is each piece small enough for a single focused authoring pass? | **PASS** — R1 is one paragraph + a worked example (a few sentences); R2 is one sentence. Both are minimal. |
| **Interface clarity** | All cross-piece flows explicit? | **PASS** — Step 5 names 3 directional flows + the shared-anchor pattern; the Assumptions-not-data check surfaces 3 hidden assumptions (refines-source moving target; structural-author treating refinement as canonical; structural-author writing NOT-list with the append), all mitigated. |
| **Balance** | Complexity roughly proportional, or is one piece 80%? | **PASS — with note** — R1 is heavier than R2 (~85% vs ~15% of authoring). Expected — R1 IS the load-bearing refinement; R2 is a clarifying append. Acceptable. |
| **Confidence** | Top-down + bottom-up agree on boundaries? | **PASS HIGH** — Step 3's atoms map cleanly onto Step 2's clusters. No mismatches. |

### Failure-mode self-check (per `references/decompose.md` § Failure Modes)

1. **Premature decomposition?** No — sensemaking SV6 settled the refinement first; this decomposition is over an already-settled model.
2. **Wrong boundaries?** Considered merging R1+R2; rejected because they target different spec sections (§2 vs §10 cat 4) and different content types. Considered splitting R1 into sub-pieces; rejected because the prior §2 Itemize is one paragraph and the refinement replaces it with one paragraph; paragraph-internal sub-pieces don't have spec-section structure.
3. **Hidden coupling?** Surfaced (the refines-source moving target; the structural-author treatment; the NOT-list append being lost if not enumerated). All explicit in Step 5.
4. **Missing pieces?** Cross-checked SV6's 7 commitments; all covered. The Determination-mechanism check (the tuple test as the runtime determination mechanism) passes.
5. **Over-decomposition?** 2 authorable pieces for a refinement is the minimum that respects the spec-section structure (one piece per spec location touched). Not over.
6. **Ignoring dependencies?** Explicit P0 → R1 → R2 order; R2 depends on R1's term.
7. **Imbalanced decomposition?** R1 is ~85%; R2 ~15%. Expected — R1 is the substantive refinement; R2 is a clarifying append. Acceptable.

### Frontier for Innovation/Critique

- **Innovation** (this run's next step) will produce concrete authorable text for R1's refined paragraph (incorporating verb-meaning + structural rule + asymmetric-failure + load-bearing single-item + worked examples) and R2's disambiguation sentence. Most of the content is already in SV6 items 1 + 5; innovation formalizes for transcription.
- **Critique** pressure-test targets:
  - (a) Does R1's worked-example pair (positive + negative) genuinely bound the (subject, action, deliverable-shape) tuple test?
  - (b) Does R2's disambiguation sentence avoid neighbor-discipline references while still being clear?
  - (c) Does the refinement's `refines:` against the prior finding's specific version handle future independent edits to the prior finding gracefully? (Or is this a structural-layer concern beyond meaning?)
  - (d) Self-reference: applied to THIS inquiry's Source Input, does refined Itemize fire 1 or N? (Already confirmed in sensemaking — 1 item.)
  - (e) Does the "user-language alignment" verification for R1 actually preserve user-verbatim "completely different tasks" or did the wording drift?
