# Decomposition — surfacing file-metadata awareness design

## The whole being decomposed

The stabilized design from sensemaking SV6: add to surfacing's spec a new per-item annotation named `last-edit-time`, captured at §2.1 Item-enumeration in artifact case, persisted in §5.4 Traversal Trace, with explicit non-filtering reaffirmation at §2.1 and NOT-list clarification at §1.3; named category "observable-fact metadata annotations" with `last-edit-time` as first instance; plus a path-selection question (M1 minimal / M2 + confidence tier / M3 + region aggregation).

---

## Step 1 — Coupling Topology

### Elements

| Id | Element |
|---|---|
| E1 | §2.1 Item-enumeration extension text (the mechanism description) |
| E2 | §5.4 Traversal Trace schema extension (the per-entry field addition) |
| E3 | §1.3 NOT-list clarification (the disambiguation note) |
| E4 | Explicit non-filtering reaffirmation (sentence at §2.1) |
| E5 | Named-category framing ("observable-fact metadata annotations") |
| E6 | Scope declaration (artifact-case-only) |
| E7 | Concept-name commitment (`last-edit-time`) |
| E8 | M1 / M2 / M3 path-selection meta-decision |
| E9 | Downstream-consumer rule(s) — possibly out of scope |
| E10 | Possibility-case handling text (declaring scope absence) |

### Pairwise coupling

| Pair | Coupling | Reason |
|---|---|---|
| E1 ↔ E2 | HIGH | Mechanism → schema instantiation; change in capture mechanism propagates to schema |
| E1 ↔ E4 | HIGH | E4 IS a sub-element of E1 (lives within the §2.1 extension by location) |
| E1 ↔ E6 | HIGH | E6 IS a sub-element of E1 (scope declaration within §2.1 prose) |
| E1 ↔ E7 | HIGH | Concept name appears in §2.1 prose |
| E1 ↔ E10 | HIGH | E10 IS the scope-absence text within E1 |
| E1 ↔ E3 | MODERATE | Framing alignment: §2.1 introduces the addition, §1.3 anchors its NOT-quality-not-meaning identity |
| E1 ↔ E5 | MODERATE | Named-category language flows from §2.1 introduction into the spec |
| E2 ↔ E7 | HIGH | Field name in §5.4 IS the concept name `last-edit-time` |
| E2 ↔ E6 | MODERATE | Scope predicate (artifact-only) shapes how the field is populated, not its existence |
| E2 ↔ E5 | LOW | Schema is structural; category is framing |
| E3 ↔ E5 | MODERATE | NOT-list clarification names the category |
| E3 ↔ E4 | LOW | Different axes: quality-vs-fact (E3) vs filter-vs-non-filter (E4) |
| E5 ↔ E6 | LOW | Category framing is forward-extension; scope is applicability domain |
| E5 ↔ E7 | MODERATE | Concept name is the first instance of the category |
| E8 ↔ {E1, E2} | HIGH (meta) | Path selection determines which elements expand or contract in E1/E2 |
| E9 ↔ {E1, E2} | LOW (if out-of-scope) / MODERATE (if in-scope) | Downstream-consumer rules live in adjacent specs, not in surfacing |

### Clusters (peaks of high coupling)

| Cluster | Members | Why grouped |
|---|---|---|
| **C-CORE** | E1, E4, E6, E10 | All live at the §2.1 spec location; together they describe the runtime mechanism |
| **C-SCHEMA** | E2, E7 | The §5.4 schema field + its name; tightly coupled to C-CORE via mechanism→schema dependency |
| **C-IDENTITY** | E3, E5 | Discipline-identity-layer commitments (what the addition is NOT + the named category) |
| **C-PATH** | E8 | Meta-decision: which path (M1/M2/M3) is materialized |
| **C-CONSUMER** | E9 | Scope question: are downstream-consumer rules in this inquiry's frame |

### Valleys (low coupling between clusters)

- C-CORE ↔ C-SCHEMA: bounded by shared atoms (`last-edit-time`, artifact-only scope); otherwise content-independent.
- C-CORE ↔ C-IDENTITY: bounded by shared category name + boundary commitment; otherwise content-independent.
- C-CORE ↔ C-PATH: meta-boundary — C-PATH's verdict determines C-CORE's content scope.
- C-CORE ↔ C-CONSUMER: bounded by scope-decision; if C-CONSUMER is out-of-scope, almost no coupling.
- C-IDENTITY ↔ C-SCHEMA: nearly independent — different spec sections (§1.3 vs §5.4), no shared mechanism text.

---

## Step 2 — Boundaries (Top-Down)

The natural cut points, in order of confidence:

1. **C-CORE / C-SCHEMA boundary** — between mechanism-spec (§2.1) and schema-spec (§5.4). What crosses: the field name + scope predicate. Clean.
2. **C-CORE / C-IDENTITY boundary** — between process-spec (§2.1) and identity-spec (§1.3 NOT-list). What crosses: the category name + boundary commitment ("not quality, not interpretive meaning"). Clean.
3. **C-PATH / C-CORE boundary** — meta-question (which path) precedes content-question (what does §2.1 say). The selection from C-PATH is a *prerequisite input* to C-CORE; the boundary is temporal-causal, not content-distinctive. Clear but ordering-sensitive.
4. **C-CORE / C-CONSUMER boundary** — between this inquiry's frame (surfacing's spec) and adjacent disciplines' specs (sensemaking, decomposition, innovation, critique). Clean as long as the in/out-of-scope verdict is explicit.
5. **C-IDENTITY / C-SCHEMA boundary** — almost no traffic; the boundary is incidental (different spec sections).

---

## Step 3 — Bottom-Up Validation

### Atoms (irreducible elements)

| Atom | What it is | Appears in |
|---|---|---|
| A1 | The string `last-edit-time` (the concept name) | C-CORE (E1, E4), C-SCHEMA (E2, E7) |
| A2 | The predicate "artifact case" (scope) | C-CORE (E6, E10), C-SCHEMA (E2 via field-absent-in-possibility) |
| A3 | The phrase "non-filtering" (the reaffirmation) | C-CORE only (E4) |
| A4 | The phrase "observable-fact metadata annotation" (the category name) | C-CORE (E1, E5), C-IDENTITY (E3, E5) |
| A5 | The M1/M2/M3 selection (the path verdict) | C-PATH only (E8); affects C-CORE, C-SCHEMA contents |

### Atom-cluster alignment check

- A1 and A2 appear in BOTH C-CORE and C-SCHEMA — but this is **shared identifier across an interface**, not boundary error. Interface I2 (Q2 ↔ Q3) carries these atoms.
- A3 is atomic to C-CORE — correctly grouped.
- A4 appears in BOTH C-CORE and C-IDENTITY — shared identifier; interfaces I3 and I4 carry it.
- A5 is atomic to C-PATH — but determines content of C-CORE and C-SCHEMA. Interface I1 carries the verdict.

**Are any atoms incorrectly split by boundaries?** No — shared atoms propagate via well-defined interfaces (consistent across spec sections).

**Are atoms incorrectly grouped?** Within C-CORE: E1, E4, E6, E10 are sub-aspects of one §2.1 extension. Splitting them into 4 separate pieces would be over-decomposition (each sub-aspect is a sentence, not a coherent sub-problem). Keep them combined as one piece.

**Bottom-up + top-down agreement:** HIGH confidence on all major boundaries.

---

## Step 4 — Question Tree

The decomposition produces 7 pieces:

### Q1 — Path selection (C-PATH)

**Question:** Which of M1 (minimal: raw `last-edit-time` annotation only), M2 (M1 + per-item freshness-confidence tier), or M3 (M1 + per-region edit-time-distribution aggregation in §5.5) does the spec edit include?

**Verification criteria:**
- [ ] One of M1/M2/M3 selected with explicit reasoning.
- [ ] If M2: the freshness-confidence tier's mechanism, naming, and capture step are defined.
- [ ] If M3: the per-region aggregation's location (§5.5) and derivation rule are defined.
- [ ] If M1: the spec edit scope is bounded to raw-timestamp annotation only.
- [ ] Selection rationale references evidence (e.g., complexity-vs-marginal-value trade-offs; exploration's R4 absence-of-precedent).

### Q2 — §2.1 Item-enumeration extension text (C-CORE)

**Question:** What is the exact text added to surfacing's §2.1 Item-enumeration component to describe observable-fact metadata capture in artifact case?

**Verification criteria:**
- [ ] Names the new mechanism (observable-fact metadata capture) and the first instance (`last-edit-time`).
- [ ] Specifies capture timing (at Item-enumeration, alongside identifier reading; single fstat-equivalent operation).
- [ ] Includes explicit non-filtering reaffirmation (one sentence stating the annotation does NOT participate in Inhibition's high-confidence-rejection or in surfacing's inclusion gate).
- [ ] Includes scope declaration (artifact-case-only; in possibility case the annotation is absent / N/A).
- [ ] References the named category ("observable-fact metadata annotations") and notes future kinds may extend the category.
- [ ] Is integration-ready (extends existing §2.1 component description; does not rewrite the section).

### Q3 — §5.4 Traversal Trace schema extension (C-SCHEMA)

**Question:** What is the exact extension to §5.4 Traversal Trace per-entry table?

**Verification criteria:**
- [ ] The per-entry table gains one row: `last-edit-time` — content description.
- [ ] The row specifies type (e.g., ISO 8601 timestamp string or POSIX seconds).
- [ ] The row specifies that the field is artifact-case-only (absent or N/A in possibility case).
- [ ] The row contains no quality / judgment language (consistent with §1.3 NOT-list clarification in Q4).

### Q4 — §1.3 NOT-list clarification text (C-IDENTITY part 1)

**Question:** What clarification text is added at or adjacent to surfacing's §1.3 NOT-list to anchor the identity boundary?

**Verification criteria:**
- [ ] A one-line note added at or near §1.3 NOT-list table.
- [ ] States that observable-fact metadata annotations (e.g., `last-edit-time`) are NOT instances of quality / correctness evaluation (entry 5) and NOT instances of interpretive meaning (entry 6).
- [ ] Names the category ("observable-fact metadata annotations") consistent with Q5.

### Q5 — Category framing (C-IDENTITY part 2)

**Question:** Where and how is the named category ("observable-fact metadata annotations") formally introduced, and what does the introductory text say?

**Verification criteria:**
- [ ] The category name is introduced at ONE canonical location (within Q2's body recommended; cross-reference from Q4 if needed) — hidden-coupling guard HC1.
- [ ] Description: per-item observable-fact annotations captured at Item-enumeration in artifact case, non-filtering, downstream-consumable.
- [ ] At least one future-extension example is stated or implied (e.g., "future metadata kinds may extend the category"); specific examples (file-size, line-count, etc.) are deferred frontier.
- [ ] Category framing is consistent with Q4 (NOT-list clarification).

### Q6 — Downstream-consumer scope (C-CONSUMER)

**Question:** Are downstream-consumer rules (how sensemaking / decomposition / innovation / critique should consume the new annotation) in scope for THIS inquiry, or are they deferred to follow-up inquiries?

**Verification criteria:**
- [ ] An explicit in-scope / out-of-scope verdict is recorded with reasoning.
- [ ] If out-of-scope (sensemaking SV6 leaning): the question is preserved as a frontier flag for future inquiries.
- [ ] If in-scope: the downstream-consumer rules are specified (which disciplines; what each should do).

### Q7 — Path-selection determination mechanism (Determination-mechanism piece check refinement note)

**Question:** By what criteria is the M1/M2/M3 selection in Q1 made? What evidence and reasoning produce the verdict?

**Verification criteria:**
- [ ] Selection criteria are explicit (complexity-vs-marginal-value; project-phase considerations; load-bearing-quantifiable-claim avoidance per /explore §3.5).
- [ ] Evidence is cited (exploration's R4 — no precedent for confidence tier; sensemaking's H1 collapse of P1+P5+P6 into M1; user's explicit ask scoped to last-edit-time; minimal-MVP principle).
- [ ] The verdict is defensible — not arbitrary pick — and explicitly states what would change the verdict (refinement trigger).

---

## Step 5 — Interface Map

### Assumptions-not-data check (Step 5 refinement note)

Beyond data flows, what assumptions does each piece make about the others?

- **Q2 → assumes** the surfacing spec's current §2.1 component text exists and accepts extension. Verified.
- **Q3 → assumes** §5.4's per-entry table accepts a new row. Verified.
- **Q4 → assumes** the §1.3 NOT-list area accepts an adjacent clarification note (before §1.4 vocabulary). Verified.
- **Q5 → assumes** a single canonical home for the category framing. **Hidden coupling risk HC1**: if the category framing floats between Q2's body and a near-Q4 footer, prose may duplicate or contradict. **Resolution at design time**: write Q5's text once, in Q2's body; if needed, Q4 references it via a one-line pointer.
- **Q7 → assumes** innovation produces the verdict. **Hidden coupling risk HC2**: if innovation defers selection, Q1 is incomplete and Q2-Q5 cannot finalize. **Resolution at design time**: Q7 IS the selection's criteria; Q1 IS the verdict; together they form the determination-mechanism piece (per the Step 7 refinement note).
- **Q6 → assumes** the user's question is bounded to surfacing's spec. The user's question explicitly named the surfacing discipline and its path; out-of-scope verdict for downstream-consumer rules is supportable by the question's framing.

### Interfaces

| # | Source → Target | What flows | Direction | Type |
|---|---|---|---|---|
| **I1** | Q7 → Q1 | Selection criteria + evidence → verdict | one-way | prerequisite (Q7's criteria determine Q1's verdict) |
| **I2** | Q1 → {Q2, Q3, Q5} | M-selection verdict | one-way | dependency (Q2/Q3/Q5 content varies by path) |
| **I3** | Q2 ⇄ Q3 | Shared atoms `last-edit-time`, "artifact case" | bidirectional | contract (name + scope predicate consistent across §2.1 and §5.4) |
| **I4** | Q2 ⇄ Q4 | Shared category name + boundary commitment | bidirectional | contract (category framing in §1.3 matches §2.1 introduction) |
| **I5** | Q2 ⇄ Q5 | Category framing prose | bidirectional via canonical home | contract (Q5's text lives within Q2's body; Q4 references) |
| **I6** | Q6 → {Q2, Q3} | Scope verdict shapes whether downstream-consumer text appears in Q2/Q3 | one-way | informational (Q6's out-of-scope verdict means Q2/Q3 omit consumer rules) |

---

## Step 6 — Dependency Order

```
       ┌────────────────────────┐                  ┌──────────────────┐
       │ Q7 — selection         │                  │ Q6 — consumer    │
       │   determination mech   │                  │   scope verdict  │
       └────────────┬───────────┘                  └────────┬─────────┘
                    │                                       │
                    ↓ I1                                    ↓ I6
       ┌────────────────────────┐                           │
       │ Q1 — M-selection       │                           │
       │   verdict (M1/M2/M3)   │                           │
       └────────────┬───────────┘                           │
                    │                                       │
                    ↓ I2                                    │
       ┌────────────────────────┐                           │
       │ Q5 — category framing  │                           │
       │   (lives in Q2's body) │                           │
       └────────────┬───────────┘                           │
                    │                                       │
                    ↓ I4, I5                                │
       ┌────────────────────────┐  I3   ┌────────────────────────┐
       │ Q2 — §2.1 extension    │ <───→ │ Q3 — §5.4 schema       │ ←──── I6 ─────┘
       │   text                 │       │   extension            │
       └────────────┬───────────┘       └────────────────────────┘
                    │
                    ↓ I4
       ┌────────────────────────┐
       │ Q4 — §1.3 NOT-list     │
       │   clarification        │
       └────────────────────────┘
```

**Dependency order (linear-ish with parallel branches):**

1. **First (parallel):** Q7 (selection criteria) and Q6 (consumer scope verdict). Independent of each other.
2. **Second:** Q1 (M-selection verdict). Depends on Q7's criteria.
3. **Third:** Q5 (category framing). Depends on Q1's verdict.
4. **Fourth (parallel pair with contract):** Q2 (§2.1 extension) ⇄ Q3 (§5.4 schema). Depend on Q5 (for category framing in Q2) and Q1; Q2 and Q3 share an atom contract.
5. **Fifth:** Q4 (§1.3 NOT-list clarification). Depends on Q5's category name and Q2's introduction text (so Q4 doesn't duplicate or contradict).

No circular dependencies. The graph is a DAG.

---

## Step 7 — Self-Evaluation

### Minimum 3 dimensions

| Dimension | Check | Pass? |
|---|---|---|
| **Independence** | Each piece answerable without others existing? | Each Qi can be worked on after its upstream dependencies settle. Q6 is fully independent of Q1-Q5, Q7. Q2/Q3 require Q1 + Q5; the contract (I3) constrains them to consistent answers. PASS. |
| **Completeness** | Pieces cover the whole? | Q1-Q7 cover every design surface named in sensemaking SV6: which path (Q1, Q7); scope of consumer rules (Q6); §2.1 text (Q2, Q5); §5.4 schema (Q3); §1.3 NOT-list (Q4). No surface uncovered. PASS. |
| **Reassembly** | Pieces + interfaces reconstruct the whole? | Q7 produces criteria → Q1 produces verdict → Q5 anchors category framing → Q2/Q3 implement mechanism + schema with shared-atom contract → Q4 anchors at NOT-list. Q6's verdict determines whether downstream-consumer rules appear (recommended out-of-scope per SV6 leaning). The reassembled output is a complete spec-edit specification. PASS. |

### Determination-mechanism piece check (Step 7 refinement note)

Does the Q-tree include a load-bearing concept whose use depends on a runtime determination? YES — the M1/M2/M3 selection is referenced in Q2, Q3, Q5 but its applicability is determined at design time by the selection criteria. Does the Q-tree include a piece addressing HOW the determination is made? YES — **Q7** is explicitly the determination-mechanism piece. PASS.

### Full 7 dimensions

| Dimension | Check | Pass? |
|---|---|---|
| Independence | (as above) | PASS |
| Completeness | (as above) | PASS |
| Reassembly | (as above) | PASS |
| **Tractability** | Each piece small enough for one focused pass? | Q1: paragraph-scale adjudication. Q2: paragraph-scale spec extension. Q3: one-row schema addition. Q4: one-line note. Q5: paragraph-scale category framing. Q6: paragraph-scale scope verdict. Q7: paragraph-scale criteria. All tractable. PASS. |
| **Interface clarity** | All cross-piece flows explicit; no hidden coupling? | I1-I6 mapped. HC1 (Q5 canonical home) and HC2 (Q7 mechanism required) identified and resolved at decomposition time. PASS. |
| **Balance** | Complexity roughly proportional across pieces? | Q2 is the heaviest (canonical home; carries reaffirmation + scope + category intro + capture description). Q3, Q4 are lighter. Q1, Q5, Q6, Q7 are medium. Q2 imbalance is expected (canonical-home pieces are heavier by design). ACCEPTABLE — not extreme; no one piece is 80% of the work. |
| **Confidence** | Top-down + bottom-up agree on boundaries? | HIGH confidence: Step 3 confirmed atom grouping matches top-down clusters; shared atoms route via interfaces. PASS. |

**7/7 dimensions PASS.**

### Failure-mode check

| Mode | Observed? | Reason |
|---|---|---|
| Premature decomposition | NO | Sensemaking SV6 already stabilized the design before decomposition |
| Wrong boundaries | NO | Cluster boundaries align with both spec sections (§1.3 / §2.1 / §5.4) and conceptual axes (identity / mechanism / schema) |
| Hidden coupling | TWO IDENTIFIED, RESOLVED | HC1 (Q5 canonical home) and HC2 (Q7 mechanism required) surfaced and resolved at design time via interface specifications |
| Missing pieces | NO | Q7 included to address determination mechanism for Q1; all design surfaces covered |
| Over-decomposition | NO | Sub-aspects of §2.1 (E1, E4, E6, E10) kept combined as Q2; not artificially split |
| Ignoring dependencies | NO | DAG order Q7→Q1→Q5→Q2⇄Q3→Q4 (Q6 parallel) explicit |
| Imbalanced decomposition | SLIGHT, acceptable | Q2 heaviest (canonical home is expected to carry more); not extreme |

### Self-Assessment Verdict

**PROCEED.**

- Coupling topology perceived; clusters identified; boundaries validated bottom-up with high confidence.
- Question tree has 7 pieces (Q1-Q7) with explicit verification criteria.
- Interface map has 6 interfaces (I1-I6) with explicit data + direction + type.
- Dependency order is a DAG; no circular dependencies.
- Self-evaluation passes 7/7 dimensions.
- Two hidden-coupling risks (HC1, HC2) surfaced and resolved at decomposition time.
- Determination-mechanism piece (Q7) included per the Step 7 refinement note.

**Hand to innovation.** Innovation will generate concrete content for each piece (especially Q1's verdict + Q7's criteria + Q2/Q3/Q4/Q5's spec text). Critique will adjudicate the generated content against the verification criteria.
