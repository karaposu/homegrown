# Decomposition — Task-Define Mode 6 Detection Rule Refinement

## Input

`devdocs/inquiries/2026-06-04_14-14__task_define_mode6_detection_rule/_branch.md` + `sensemaking.md`'s 10 SV6 commitments + 9 eliminations + 3 stylistic variables + exact text amendments A5 (§4.2 mode 6 recognition column) + A6 (§2.4 third paragraph appended).

The whole to decompose: a coordinated two-section structural amendment to the Task-Define runtime spec at `cognitive_harness/task-define/references/task-define.md`.

---

## Step 1 — Perceive Coupling Topology

### Element inventory

10 SV6 commitments + 1 cross-cutting:

| ID | Element |
|---|---|
| C1 | §2.4 source-of-truth placement |
| C2 | §4.2 predicate references §2.4 |
| C3 | Two-part content presence: verdict {yes / no / uncertain} + conditional kind specifier |
| C4 | Content-not-syntax (free-text-evaluable) |
| C5 | Per-item granularity |
| C6 | Application gate handling count = 0 |
| C7 | Uncertain-as-valid runner-actionable verdict (not mode 6) |
| C8 | Binary detection with FLAG confidence per §4.7's general rubric |
| C9 | §4.2 corrective column unchanged |
| C10 | Self-containment preserved (cross-cutting; no inquiry-folder mentions, no design-history pointers) |
| Cross-cutting | Lightweight stance + perception/action split preserved (cross-cutting; applied within both amendments) |

### Pairwise coupling assessment

| Pair | Coupling | Reason |
|---|---|---|
| C1 ↔ C2 | TIGHT | Placement decision determines the reference direction; same architectural-decision artifact |
| C3 ↔ C4 ↔ C5 ↔ C7 | TIGHT | All shape-commitment content elements that live in §2.4's appended paragraph |
| C6 (application gate) ↔ C3 | MODERATE | Application gate qualifies WHEN the shape constraint applies; closely related but lives in §4.2 (predicate) not §2.4 (shape commitment) |
| C8 ↔ C2 | MODERATE | Binary detection's semantics live in §4.2's predicate text; references §4.7's confidence rubric externally |
| C9 ↔ C2 | WEAK | Corrective is a separate column in §4.2; unchanged commitment is more "negative space" than positive content |
| C10 ↔ all | CROSS-CUTTING | Self-containment applies uniformly to both amendments; not a separate piece |

### Coupling map (clusters + boundaries)

**Two high-coupling clusters:**

- **Cluster A — SHAPE COMMITMENT (§2.4 amendment):** C1 (placement) + C3 (two-part content) + C4 (content-not-syntax) + C5 (per-item granularity) + C7 (uncertain-as-valid). All live in §2.4's appended paragraph.
- **Cluster B — DETECTION PREDICATE (§4.2 amendment):** C2 (predicate references §2.4) + C6 (application gate) + C8 (binary detection + FLAG confidence routing) + C9 (corrective unchanged). All live in §4.2's mode 6 row.

**Cross-cutting:** C10 (self-containment) + lightweight + perception/action split apply to both amendments uniformly.

**Boundaries:**
- Boundary A↔B: MODERATE (A's shape commitment is referenced by B's predicate via interface I1; cut is allowed with explicit reference).
- Cross-cutting constraints don't create a separate piece; they are verification commitments applied within each piece.

---

## Step 2 — Detect Boundaries (Top-Down)

2 pieces:
- **P1** = Cluster A (Shape Commitment in §2.4)
- **P2** = Cluster B (Detection Predicate in §4.2 mode 6 row, including the corrective-unchanged commitment)

2 pieces is the minimum-tractable decomposition for a 2-section amendment. Below this (1 piece) would conflate content authoring (P1) with detection-rule structure (P2) — the kind of conflation that makes the refinement harder to author cleanly. Above this (3+ pieces) would split atoms that belong together (e.g., breaking P1 into "verdict-set" + "kind specifier" + "uncertain-as-valid" sub-pieces would over-decompose what is one paragraph of spec text).

---

## Step 3 — Validate Boundaries (Bottom-Up)

### Atom inventory

- §2.4 third-paragraph-appended text (A6 from sensemaking) — atomic to P1.
- Verdict set {yes, no, uncertain} — atomic to P1.
- Kind specifier (one-sentence description, required when verdict = yes) — atomic to P1.
- Content-not-syntax explicitness — atomic to P1.
- Per-item granularity statement — atomic to P1.
- Uncertain-as-runner-actionable note (with asymmetric-failure principle reference) — atomic to P1.
- §4.2 mode 6 recognition column replacement text (A5 from sensemaking) — atomic to P2.
- Per-item check at end-of-invocation phrase — atomic to P2.
- Verdict-absence detection clause — atomic to P2.
- When-verdict-yes kind-absence detection clause — atomic to P2.
- Application gate "applies when MQ2 has fired" — atomic to P2.
- Count = 0 routing to FLAG (f) at §4.7 — atomic to P2.
- Binary detection statement + confidence-per-§4.7-general-rubric — atomic to P2.
- §4.2 mode 6 corrective column unchanged (intentional non-change) — atomic to P2.

### Atom-cluster fit check

| Atom group | Cluster assignment | Bottom-up agrees? |
|---|---|---|
| §2.4 third-paragraph text + verdict set + kind specifier + content-not-syntax + per-item + uncertain-valid | P1 (Shape Commitment) | YES — all are content of §2.4 amendment |
| §4.2 recognition column text + per-item check + verdict-absence + kind-absence-when-yes + application gate + count=0 routing + binary detection + corrective-unchanged | P2 (Detection Predicate) | YES — all are content of §4.2 amendment |

No atoms split wrongly. No atoms grouped wrongly.

### Confidence scoring

Top-down 2 clusters ↔ Bottom-up 2 atom groups → **AGREE**. **HIGH CONFIDENCE** on both boundaries.

---

## Step 4 — Express as Question Tree

### P1 — Shape Commitment (§2.4 third paragraph appended)

**Q1:** *How does §2.4's third paragraph become the operational shape commitment — what is the appended text, what content elements does it commit, and what edge-case handling does it specify?*

**Verification criteria:**
- [ ] §2.4 third paragraph APPENDED (not replaced); the existing necessary-information-content commitment remains as the paragraph's first part.
- [ ] Verdict set committed as {yes, no, uncertain} explicitly (or natural-language equivalents an LLM would recognize as one of these three states).
- [ ] Kind specifier committed as a one-sentence description, required only when verdict = yes.
- [ ] Content-not-syntax made explicit (a free-text answer carrying both elements satisfies the commitment as fully as a structured answer would).
- [ ] Per-item granularity stated (each item's MQ2 answer is evaluated independently).
- [ ] Uncertain explicitly named as a valid runner-actionable verdict per the asymmetric-failure principle at §4.4.
- [ ] Self-containment respected (text contains no inquiry-folder names, no `devdocs/inquiries/...` references, no design-history pointers).
- [ ] One paragraph length; fits the §2.4 section's existing structure without expanding into sub-machinery (criterion iv compliance).
- [ ] Exact text from sensemaking A6 is the starting point; minor stylistic refinements at authoring time are acceptable.

### P2 — Detection Predicate (§4.2 mode 6 recognition column replacement)

**Q2:** *How does §4.2 mode 6's recognition column become the operational detection predicate — what is the replacement text, how does it reference §2.4's shape commitment, what is the application gate, and what stays unchanged?*

**Verification criteria:**
- [ ] §4.2 mode 6 recognition column REPLACED (not appended); the current failure-description text does not remain.
- [ ] Predicate references §2.4 by section pointer ("the content required by §2.4") — the cross-reference is internal to the spec.
- [ ] Per-item check at end-of-invocation explicitly stated.
- [ ] Verdict-absence detection clause: "the answer does not state a context-need verdict (one of {yes, no, uncertain})."
- [ ] When-verdict-yes kind-absence detection clause: "OR — when the verdict is yes — the answer does not state a kind specifier."
- [ ] Application gate stated: "applies when MQ2 has fired for at least one item."
- [ ] Count = 0 routing to §4.7 FLAG condition (f) explicitly stated ("does not apply in the count = 0 case; handled separately by FLAG condition (f) at §4.7").
- [ ] Binary detection statement: "Detection is binary (mode fires or does not)."
- [ ] FLAG confidence routing: "Confidence on the resulting FLAG verdict is determined per §4.7's general rubric."
- [ ] §4.2 mode 6 CORRECTIVE column unchanged (the existing "Re-fire MQ2 for the affected items, explicitly demanding the necessary information content" text is operationally complete with the refined recognition column).
- [ ] Compact — fits within the mode 6 row's existing structure; no sub-machinery (criterion iv compliance).
- [ ] Self-containment respected (no inquiry-folder names; §4.7 + §2.4 + §4.4 references are internal-to-spec).
- [ ] Exact text from sensemaking A5 is the starting point; minor stylistic refinements at authoring time are acceptable.

### Question-tree validity check

Each Q is purposeful and standalone-meaningful:
- Q1 ("how does §2.4's paragraph become the shape commitment") is answerable without reading Q2 — the shape commitment is internally complete.
- Q2 ("how does §4.2's recognition column become the predicate") REFERENCES Q1's output via interface I1, but the question itself ("what predicate text + reference style") is standalone.

PASS.

---

## Step 5 — Map Interfaces

### Cross-piece flows

| ID | Source piece | Target piece | What flows | Direction | Flow type |
|---|---|---|---|---|---|
| **I1** | P1 (§2.4 shape commitment) | P2 (§4.2 predicate) | The shape commitment's content elements (verdict set + kind specifier + per-item granularity) ARE the target P2's predicate tests for. P2's text reads "missing the content required by §2.4." | one-way | structural cross-reference (internal to spec) |
| **I2** | external (existing §4.4 asymmetric-failure principle) | P1 | P1's "uncertain as runner-actionable verdict" references §4.4's principle as justification | one-way | read-only inheritance |
| **I3** | external (existing §2.3 MQ2 verbatim question template) | P1 | P1's two-part shape commitment matches §2.3's MQ2 question structure (binary + conditional kind) | one-way | read-only inheritance |
| **I4** | P2 | external (existing §4.7 FLAG condition (d)) | When mode 6 fires, the discipline's self-assessment routes to FLAG (d) "any LAYER 1 mode self-recognized" | one-way | outbound routing (uses existing handler) |
| **I5** | P2 | external (existing §4.7 FLAG condition (f)) | Count = 0 case routes to FLAG (f) "Itemize emitted count = 0" instead of mode 6 | one-way | outbound routing (uses existing handler) |
| **I6** | P2 | external (existing §4.7 general confidence rubric) | FLAG verdict's HIGH/MED/LOW determination uses §4.7's general rubric | one-way | outbound delegation |

### Assumptions-not-data check (per Step 5 refinement note)

| Assumption | Risk | Mitigation |
|---|---|---|
| **A1** | §4.7's general confidence rubric will eventually become operational (currently under-specified — separate gap from refinement #6 of the prior critique) | If the rubric never becomes operational, mode 6's FLAG confidence is unstable | Out of scope for THIS refinement; the gap is acknowledged separately; mode 6's binary detection is correct regardless of how confidence ends up being rubricated |
| **A2** | LLM judgment can reliably map free-text MQ2 answers to {yes / no / uncertain} | If LLMs struggle with edge cases (e.g., hedged language, multi-sentence answers), the binary detection produces false positives/negatives | The asymmetric-failure principle's "uncertain" valid-verdict provides a relief valve — LLMs default to uncertain when judgment is hard; the runner's asymmetric handling then errs toward Exploration |
| **A3** | §2.3's MQ2 verbatim template ("Is this task self-contained, or does it require external context to make sense and be done right? If external, what kind?") will continue to elicit answers compatible with P1's shape commitment | If §2.3 is later refined (template changes), P1's shape commitment may need to follow | Future-state concern; current refinement is consistent with current §2.3; supersession-anchor convention handles the future-state case at project level |
| **A4** | The §2.4 third paragraph's current necessary-information-content commitment text remains as the appended paragraph's first part | If a future inquiry rewrites §2.4 from scratch, the appended text may need re-anchoring | Decomposition's reassembly check assumes the §2.4 paragraph structure persists; future-rewrite case is out of scope |

All 4 assumptions identified and mitigated. Hidden coupling check PASS.

---

## Step 6 — Order by Dependency

### Dependency DAG

```
                     P1 (§2.4 Shape Commitment)
                              │
                              ▼
                     P2 (§4.2 Detection Predicate)
                              │
                              ▼
                  R1 amendment compile (both edits applied to spec file)
```

### Layer ordering

- **Layer 1 (foundation):** P1 — defines the shape; P2 reads from it. No dependencies on P2.
- **Layer 2 (consumer):** P2 — depends on P1 (via I1). Must be authored after P1 so the cross-reference is valid.
- **Layer 3 (R1 amendment compile):** apply both edits to `cognitive_harness/task-define/references/task-define.md`.

### Circular-dependency check

No circular dependencies. P2's predicate text references "§2.4" by section pointer; the actual prose of §2.4's amendment must exist (or be queued) for the reference to resolve. In practice: write P1's amendment first, then P2's amendment, then compile both edits to the spec file in either order (the file's section ordering preserves P1 before P2 because §2.4 < §4.2 in the spec).

### Parallelism opportunity

P1 and P2 cannot be authored in parallel because P2 references P1's content. But the two AMENDMENTS to the spec file (two separate edits) can be applied in any order once authored — the file's section structure makes the ordering self-consistent at read time.

---

## Step 7 — Self-Evaluate

### Minimum 3 dimensions (always run)

| Dimension | Check | Pass/Fail | Reason |
|---|---|---|---|
| **Independence** | Can each piece be worked on without the other existing? | **PASS** | P1 is internally complete (§2.4's paragraph stands on its own). P2 depends on P1 via interface I1 but the interface is a section-pointer cross-reference, not a content dependency — P2 can be drafted with the cross-reference placeholder before P1's exact text is finalized. |
| **Completeness** | Do the pieces cover the whole (10 SV6 commitments + cross-cutting)? | **PASS** | C1+C3+C4+C5+C7 in P1; C2+C6+C8+C9 in P2; C10 (self-containment) verified within both pieces. 10/10 + cross-cutting all accounted for. |
| **Reassembly** | Can the pieces + interfaces reconstruct the whole? | **PASS** | Given P1 + P2 both authored + I1 cross-reference correct + I2-I6 external routings to existing sections valid → the runtime spec is amended at two sections; the refinement is complete; a new reader sees an operational predicate referenced to an operational shape commitment. |

### Determination-mechanism piece check (Step 7 refinement note)

Are there load-bearing concepts whose use depends on a runtime determination?

- **"context-need verdict"** — runtime-determined by the LLM during Stage 2 (Meta-question per item). Mechanism piece: §2.3 MQ2 verbatim template + §2.4 shape commitment (P1) together specify what the LLM is asked and what answer content is required. PASS — both are spec-resident; the runtime determination has a mechanism piece (P1 strengthens it).
- **"mode 6 fires or doesn't"** — runtime-determined by the LLM during end-of-invocation self-check. Mechanism piece: §4.2 mode 6 recognition column (P2). PASS.
- **"uncertain" vs "verdict-absent"** — runtime determination of whether a free-text answer represents an uncertain verdict or no verdict at all. Mechanism piece: P1's wording explicitly enumerates uncertain as a valid state; LLM judgment maps free-text accordingly. PASS — the determination mechanism is built into P1's shape commitment ("one of {yes, no, uncertain} (or natural-language equivalents that an LLM judging the answer would recognize)").

All runtime-determined load-bearing concepts have a piece addressing HOW the determination is made. **PASS.**

### Full evaluation (4 additional dimensions for completeness)

| Dimension | Check | Pass/Fail | Reason |
|---|---|---|---|
| **Tractability** | Is each piece small enough to be worked on in a single focused pass? | **PASS** | P1: one paragraph appended to §2.4. P2: one cell of one row replaced in §4.2. Both well within single-focused-pass capacity. |
| **Interface clarity** | Are all cross-piece flows explicit? No hidden dependencies? | **PASS** | 6 interfaces (I1-I6) explicit (1 internal P1→P2; 5 external read/route); 4 assumptions (A1-A4) surfaced and mitigated. |
| **Balance** | Is complexity roughly proportional? Or is one piece 80%+? | **PASS** | P1 and P2 are roughly equivalent: each is a small amendment (paragraph vs cell-replacement) with ~9 verification criteria. Symmetric. |
| **Confidence** | Do top-down and bottom-up agree? | **PASS — HIGH** | Top-down 2 clusters ↔ bottom-up atoms group into the same 2 pieces → AGREE. |

**All 7 dimensions PASS.**

---

## Final Deliverable

### 1. Coupling Map

2 high-coupling clusters with one MODERATE cross-cluster coupling (interface I1: P2 references P1):
- **A = SHAPE COMMITMENT** (C1 + C3 + C4 + C5 + C7) — lives in §2.4's appended paragraph
- **B = DETECTION PREDICATE** (C2 + C6 + C8 + C9) — lives in §4.2 mode 6 row's recognition column

Cross-cutting C10 (self-containment) applied within both.

### 2. Question Tree

2 pieces:
- **P1 — Q1:** How does §2.4's third paragraph become the operational shape commitment?
- **P2 — Q2:** How does §4.2's mode 6 recognition column become the operational detection predicate?

Each piece carries 8-13 verification criteria. Total: 21 verification criteria across the 2 pieces.

### 3. Interface Map

6 cross-piece flows (I1-I6) — see Step 5 table. 1 internal (I1, P1→P2) + 5 external (I2-I3 read from existing spec; I4-I6 route to existing spec).

### 4. Dependency Order

Layer 1 (foundation): P1 (§2.4 shape commitment).
Layer 2 (consumer): P2 (§4.2 predicate references P1).
Layer 3 (compile): apply both edits to `cognitive_harness/task-define/references/task-define.md`.

No circular dependencies.

### 5. Self-Evaluation

3/3 minimum dimensions PASS. 4/4 full-evaluation dimensions PASS. Determination-mechanism check applied to 3 runtime-determined concepts — all PASS. Confidence: HIGH (top-down ↔ bottom-up AGREE on both boundaries).

**Decomposition verdict: COMPLETE and SOUND. Ready for Innovation phase.**

## Manual Structural Check (since tools/structural_check.sh unavailable)

- ✓ Step 1 — Perceive Coupling Topology (element inventory + pairwise coupling assessment + coupling map with 2 clusters + cross-cutting)
- ✓ Step 2 — Detect Boundaries (Top-Down) (2 boundaries identified; minimum-tractable decomposition argued)
- ✓ Step 3 — Validate Boundaries (Bottom-Up) (atom inventory + atom-cluster fit check + confidence scoring HIGH)
- ✓ Step 4 — Express as Question Tree (2 pieces, 2 questions, 21 verification criteria, validity check PASS)
- ✓ Step 5 — Map Interfaces (6 interfaces I1-I6 + Assumptions-not-data refinement check applied; 4 assumptions surfaced and mitigated)
- ✓ Step 6 — Order by Dependency (DAG + layer ordering + circular-dependency check + parallelism note)
- ✓ Step 7 — Self-Evaluate (3 minimum dimensions PASS + Determination-mechanism refinement check PASS for 3 runtime-determined concepts + 4 full-evaluation dimensions PASS)
- ✓ Final Deliverable (5 sections: Coupling Map + Question Tree + Interface Map + Dependency Order + Self-Evaluation)

**Manual structural check: PASS (8/8 required structural elements present + both refinement notes applied + decomposition verdict COMPLETE and SOUND).**
