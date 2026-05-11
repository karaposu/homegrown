# Decomposition: Is Explore-and-Navigation One Underlying Operation?

## User Input

Source: `/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-11_13-45__is_explore_and_navigation_one_underlying_operation/_branch.md`

The whole to decompose (from Sensemaking SV6): produce the deliverable — verdict statement (partial unification; Candidate B); TEM operation definition + 3 instance characterizations; U2 spec-edit drafts for `explore.md` and `navigation.md`; U3 project-pattern document; supersession framing for the prior 13-30 finding; Research Frontier observations.

---

## Step 1 — Perceive Coupling Topology

### Elements in the whole

1. **E1 — Verdict statement.** Candidate B (partial unification): shared TEM core + non-shared implementation add-ons.
2. **E2 — TEM operation definition.** Typed Enumeration Mapping: producing typed concept-with-metadata enumerations by consuming content. Distinguishes Explore+Navigation from sister disciplines.
3. **E3 — Instance characterizations.** How each of Explore, R2, R3 is a TEM instance + what add-ons each has.
4. **E4 — U2 spec-edit draft for `explore.md`.** Add a section explicitly stating Explore instantiates TEM; cross-reference to the project-pattern doc and to `/navigation` as a sibling instance.
5. **E5 — U2 spec-edit draft for `navigation.md`.** Same shape: add a section stating Navigation instantiates TEM; cross-reference.
6. **E6 — U3 project-pattern document.** A new file (e.g., `devdocs/patterns/typed-enumeration-mapping.md`) documenting TEM and its instances.
7. **E7 — Supersession framing.** Frontmatter `supersedes: devdocs/inquiries/2026-05-11_13-30__explore_vs_navigation_overlap/finding.md` + brief explanation of the framing error and what's preserved.
8. **E8 — Research Frontier: broader pattern.** Other discipline pairs may have hidden operation-level unity (Sensemaking vs Reflect; Innovate vs Critique; etc.).
9. **E9 — Research Frontier: 4th instance of discipline-mandate-boundary inquiry.** Pattern is well-established; broader codification may merit work.
10. **E10 — Operational recommendation.** Soft recommendation: U2 + U3 combined. U1 (consolidate) rejected as premature. U4 (refactor) rejected as too invasive.
11. **E11 — TEM naming caveat.** Loop-coined; user may rename.

### Coupling perception

If **E1** (verdict) changes:
- E7 (supersession) — verdict triggers supersession of prior finding
- E10 (recommendation) — recommendation acts on the verdict
- → E1 strongly couples with E7, E10

If **E2** (TEM definition) changes:
- E3 (instance characterizations) — instances apply to operation definition
- E4, E5 (U2 spec edits) — reference TEM
- E6 (U3 project-pattern) — defines TEM
- → E2 strongly couples with E3, E4, E5, E6

If **E3** (instance characterizations) changes:
- E4, E5, E6 (all reference instances)
- → E3 strongly couples with E4, E5, E6

If **E4, E5** (spec edits) change:
- Each other (they're paired drafts in the same recommendation U2)
- E10 (recommendation references them)
- → E4 ↔ E5 paired; both couple with E10

E6 (project-pattern doc) — standalone artifact; references E2/E3.

E7 (supersession) — links to E1 (verdict) and to prior 13-30 finding (external reference).

E8, E9 (Research Frontier) — paired observations; standalone.

E11 (TEM naming caveat) — applies wherever TEM is mentioned; cross-cutting.

### Coupling clusters

- **Cluster A — Diagnostic core:** {E1, E2, E3, E11}. The verdict + TEM definition + instances + naming caveat. High internal coupling.
- **Cluster B — U2 implementation:** {E4, E5}. Paired spec edits.
- **Cluster C — U3 implementation:** {E6}. Standalone project-pattern document.
- **Cluster D — Operational meta:** {E10, E7}. Recommendation + supersession framing.
- **Cluster E — Research Frontier:** {E8, E9}. Standalone notes.

### Low-coupling valleys

- Between Cluster A and B: B reads A (spec edits reference TEM definition).
- Between Cluster A and C: same; C reads A.
- Between Cluster A and D: D reads A (recommendation acts on verdict).
- Cluster B and C are independent (different files).
- Cluster D's E7 references A's E1; E10 references all (A, B, C).
- Cluster E is standalone.

---

## Step 2 — Detect Boundaries (Top-Down)

Six pieces per Sensemaking's hand-off:

- **Piece P1 — Verdict statement** (E1 + E11).
- **Piece P2 — TEM operation definition + instance characterizations** (E2 + E3).
- **Piece P3 — U2 spec-edit drafts** (E4 + E5).
- **Piece P4 — U3 project-pattern document** (E6).
- **Piece P5 — Supersession framing for prior 13-30 finding** (E7).
- **Piece P6 — Research Frontier observations** (E8 + E9 + E10 [partial — recommendation framing for context]).

Wait — let me reconsider E10 (recommendation). It's not strictly Research Frontier; it's operational reasoning that supports U2 + U3. Better placement: include in P3 (the spec-edit drafts) and P4 (the project-pattern doc) as the reasoning for why those paths are chosen. Or as a separate piece.

Actually, the recommendation reasoning is the "why" for paths U2 + U3 specifically. It naturally lives at the assembly level (the user reads the recommendation alongside the implementations). Let me put E10 as a sub-piece of P3 + P4's framing (the spec edits and the project-pattern doc are the WHAT; E10 is the WHY).

Revised pieces:
- **Piece P1 — Verdict + supersession framing + recommendation reasoning** (E1 + E7 + E10 + E11). The diagnostic core + meta-framing.
- **Piece P2 — TEM operation definition + instance characterizations** (E2 + E3).
- **Piece P3 — U2 spec-edit drafts** (E4 + E5).
- **Piece P4 — U3 project-pattern document** (E6).
- **Piece P5 — Research Frontier observations** (E8 + E9).

Five pieces. Tighter than 6 but covers everything Sensemaking handed off.

Actually let me look at Sensemaking's hand-off again: it listed 6 pieces explicitly. I should follow it for consistency:

- P1: verdict statement
- P2: TEM operation definition + instance characterization
- P3: U2 spec-edit drafts
- P4: U3 project-pattern document
- P5: supersession framing for the prior 13-30 finding
- P6: Research Frontier observations

OK going with 6 pieces:

- **Piece P1 — Verdict statement** (E1 + E11 naming caveat + E10 recommendation embedded as reasoning).
- **Piece P2 — TEM operation definition + 3 instance characterizations** (E2 + E3).
- **Piece P3 — U2 spec-edit drafts** for both `explore.md` and `navigation.md` (E4 + E5).
- **Piece P4 — U3 project-pattern document** (E6).
- **Piece P5 — Supersession framing for prior 13-30 finding** (E7).
- **Piece P6 — Research Frontier observations** (E8 + E9).

### Boundary qualities

- P1 ↔ P2: P1's verdict references TEM (defined in P2); P2 underpins P1. One-way Read (P1 → P2).
- P1 ↔ P3, P1 ↔ P4: spec edits and project-pattern doc act on the verdict.
- P2 ↔ P3, P2 ↔ P4: both spec edits and project-pattern doc reference TEM definition.
- P5 ↔ P1: supersession triggered by verdict.
- P6 ↔ P1: Research Frontier observations generalize from the diagnosis.

All one-way Reads.

---

## Step 3 — Validate Boundaries (Bottom-Up)

Irreducible atoms:

| Atom | Description |
|---|---|
| A1 | "Candidate B (partial unification)" verdict label |
| A2 | "Shared TEM core" claim |
| A3 | "Non-shared implementation add-ons" claim |
| A4 | TEM expansion: "Typed Enumeration Mapping" |
| A5 | TEM operational definition (what it does) |
| A6 | TEM distinguishing criterion (vs Sensemaking, Decomposition, Critique) |
| A7 | Explore as TEM instance + add-ons (modes; confidence levels; failure modes) |
| A8 | R2 as TEM instance + add-ons (16-type taxonomy; 12 route fields; Freshness; BOUNDARY framing) |
| A9 | R3 as TEM instance + add-ons (whole-codebase + directional; assess overlay) |
| A10 | U2 spec-edit text for `explore.md` |
| A11 | U2 spec-edit text for `navigation.md` |
| A12 | U3 project-pattern document text |
| A13 | Supersession frontmatter (`supersedes:` field) |
| A14 | Supersession brief explanation (what's preserved; what's changed; framing error named) |
| A15 | Research Frontier 1: broader pattern (other discipline pairs) |
| A16 | Research Frontier 2: 4th-instance pattern-emergence note |
| A17 | Recommendation reasoning (U2 + U3 over U1/U4) |
| A18 | TEM naming caveat (loop-coined; user may rename) |

### Atom grouping vs Step-2 boundaries

| Atom | Assigned to | Step-2 boundary correct? |
|---|---|---|
| A1, A2, A3, A17, A18 (verdict + recommendation + naming) | P1 | ✓ |
| A4, A5, A6 (TEM definition) | P2 | ✓ |
| A7, A8, A9 (instance characterizations) | P2 | ✓ |
| A10, A11 (U2 spec edits) | P3 | ✓ |
| A12 (U3 project-pattern document) | P4 | ✓ |
| A13, A14 (supersession framing) | P5 | ✓ |
| A15, A16 (Research Frontier) | P6 | ✓ |

All atoms group cleanly. **Confidence: HIGH.**

---

## Step 4 — Express as Question Tree

### Piece P1 — Verdict statement + recommendation + naming caveat

**Question:** What is the structural verdict on whether Explore and Navigation are one underlying operation, and what's the soft operational recommendation?

**Verification criteria:**
- [ ] Verdict: Candidate B (partial unification) stated explicitly
- [ ] Shared TEM core claim made
- [ ] Non-shared implementation add-ons acknowledged as structurally meaningful
- [ ] User's correction points (#1 R2 input flexibility; #2 route-cards = concept-nodes; #3 unification claim) honored
- [ ] Recommendation: U2 + U3 (recognize-in-spec + project-pattern document) — soft
- [ ] Alternative paths (U1 consolidate; U4 refactor) acknowledged but not recommended
- [ ] TEM naming caveat (loop-coined; user may rename) included

### Piece P2 — TEM operation definition + 3 instance characterizations

**Question:** What is TEM (Typed Enumeration Mapping) as an operation, and how do Explore, R2, R3 each instantiate it?

**Verification criteria:**
- [ ] TEM defined operationally: produces typed concept-with-metadata enumerations by consuming content
- [ ] TEM's distinguishing criterion: it ENUMERATES without committing (vs Sensemaking commits; Decomposition partitions; Critique evaluates)
- [ ] Explore as TEM instance: modes + confidence levels + failure modes characterized
- [ ] R2 as TEM instance: 16-type taxonomy + 12 route fields + Freshness Preflight + BOUNDARY-between-cycles characterized; "or current project state" input flexibility acknowledged
- [ ] R3 as TEM instance: whole-codebase + directional sub-cases + assess overlay characterized
- [ ] All three instances share TEM core; differ in implementation

### Piece P3 — U2 spec-edit drafts

**Question:** What are the exact spec-edit drafts for `homegrown/explore/references/explore.md` and `homegrown/navigation/references/navigation.md` to recognize TEM explicitly?

**Verification criteria:**
- [ ] `explore.md` edit drafted: ~50-100 words; cross-reference to the project-pattern document and to `/navigation` as a sibling TEM instance
- [ ] `navigation.md` edit drafted: ~50-100 words; cross-reference to the project-pattern document and to `/explore` as a sibling TEM instance
- [ ] Both edits placed at a natural location (likely in each spec's "What X Is" section)
- [ ] Step-5 conformance: this is a clarification (explicit naming of an existing operation), not behavior-change
- [ ] User can apply both edits in one commit if path U2 chosen

### Piece P4 — U3 project-pattern document

**Question:** What does a new project-pattern document at `devdocs/patterns/typed-enumeration-mapping.md` (or similar) look like — defining TEM and pointing at its instances?

**Verification criteria:**
- [ ] File path proposed (e.g., `devdocs/patterns/typed-enumeration-mapping.md`)
- [ ] TEM defined in detail (operational definition; distinguishing criterion; how to recognize)
- [ ] Three instances listed: Explore, /navigation (R2), nav_north_star.md vision (R3)
- [ ] Cross-references to discipline specs
- [ ] Document framing: "This is a project-pattern observation; not a discipline spec; documents the shared operation across discipline instances."

### Piece P5 — Supersession framing for prior 13-30 finding

**Question:** How does this finding mark the prior `2026-05-11_13-30` finding as superseded, and what's the explanation of the framing error?

**Verification criteria:**
- [ ] Frontmatter `supersedes: devdocs/inquiries/2026-05-11_13-30__explore_vs_navigation_overlap/finding.md`
- [ ] Brief explanation of what was preserved (the structural observation that there are distinct add-ons across the three TEM instances)
- [ ] Brief explanation of what was changed (the framing of "separate but mechanism-sharing" for R2 vs Explore was wrong — they share the OPERATION, not just mechanism)
- [ ] Brief explanation of what's new (TEM as the unified operation name; partial-unification verdict; U2+U3 operational recommendation)
- [ ] Migration note: future references should cite this finding, not 13-30

### Piece P6 — Research Frontier observations

**Question:** What broader patterns surface in this inquiry that warrant Research Frontier acknowledgment?

**Verification criteria:**
- [ ] Broader pattern: other discipline pairs may have hidden operation-level unity (Sensemaking vs Reflect; Innovate vs Critique; etc.) — separate inquiries warranted
- [ ] Pattern-emergence: 4th instance of discipline-mandate-boundary inquiry (after 12-30 sensemaking; 13-00 exploration-overreach; 13-30 explore-vs-navigation; this 13-45) — broader codification may merit a meta-protocol
- [ ] Both out-of-scope for THIS inquiry's verdict; not in Next Actions

---

## Step 5 — Map Interfaces

### Interface table

| # | Source | Target | What flows | Direction | Type |
|---|---|---|---|---|---|
| I1 | P2 (TEM + instances) | P1 (verdict) | TEM definition (the verdict relies on it) | One-way | Read |
| I2 | P2 | P3 (U2 spec edits) | TEM definition + instance details | One-way | Read |
| I3 | P2 | P4 (U3 project-pattern) | TEM definition + instance details | One-way | Read |
| I4 | P1 | P5 (supersession) | Verdict triggers supersession | One-way | Read |
| I5 | P1 | P6 (Research Frontier) | Verdict frames broader-pattern generalizations | One-way | Read |
| I6 | (External — prior 13-30 finding) | P5 | What's preserved / changed / new in supersession | One-way | Read (external) |
| I7 | (External — Sensemaking SV6) | P1, P2 | Diagnostic conclusion + TEM framing | One-way | Read (Sensemaking) |
| I8 | (External — explore.md + navigation.md specs) | P3 | Current spec structure (where to insert U2 edits) | One-way | Read (specs) |
| I9 | (External — prior 12-30, 13-00, 13-30 findings) | P6 | Pattern-emergence precedents (4th instance) | One-way | Read (prior findings) |

All one-way Reads.

---

## Step 6 — Order by Dependency

```
P2 (TEM + instances; FOUNDATION)
  │
  ├─→ P1 (verdict; needs P2)
  │     │
  │     ├─→ P5 (supersession; needs P1)
  │     │
  │     └─→ P6 (Research Frontier; needs P1)
  │
  ├─→ P3 (U2 spec edits; needs P2)
  │
  └─→ P4 (U3 project-pattern; needs P2)
```

**Concrete order:**

1. **P2 first** (TEM + instances; the foundation)
2. **P1 second** (verdict built on P2)
3. **P3, P4, P5, P6 in parallel** (all read P1 + P2; independent of each other)

---

## Step 7 — Self-Evaluate (5-dimension)

| # | Dimension | Check | Result |
|---|---|---|---|
| 1 | **Independence** | Each piece workable alone? | **PASS.** P2 is the foundation. P1 references P2 but is otherwise standalone. P3, P4, P5, P6 each handle separate concerns. |
| 2 | **Completeness** | Pieces cover the whole? | **PASS.** P1 (verdict) + P2 (TEM definition) + P3 (U2 specs) + P4 (U3 doc) + P5 (supersession) + P6 (Research Frontier) covers Sensemaking SV6's hand-off. |
| 3 | **Reassembly** | Pieces + interfaces = whole? | **PASS.** The six pieces compose into a complete supersession-finding-with-operational-paths deliverable. |
| 4 | **Tractability** | Each piece small enough for single focused pass? | **PASS.** P1 ~150-200 words. P2 ~400 words. P3 ~150-200 words (two short edits). P4 ~300-400 words. P5 ~150 words. P6 ~100-150 words. All tractable. |
| 5 | **Balance** | Complexity proportional? | **PASS with note.** P2 (~400 words) and P4 (~300-400 words) carry the most weight (TEM definition + project-pattern document) — they're foundational. P3 (specs) and P1 (verdict) are moderate. P5 and P6 are short. Acceptable distribution. |

### Determination-mechanism piece check

Load-bearing concepts with runtime determination:
- *TEM applicability* — the AI applying any discipline at runtime needs to determine whether the discipline is doing TEM. P2's instance characterizations + P4's project-pattern document provide the determination test (does the discipline produce typed concept-with-metadata enumerations by consuming content?). **PASS.**
- *Supersession recognition* — anyone reading the prior 13-30 finding needs to know it's superseded. P5's frontmatter (`supersedes:`) is the determination mechanism. **PASS.**

### Self-evaluation summary: 5/5 PASS

All dimensions PASS. Decomposition ready for Innovation.

---

## Final Deliverable Summary

### Coupling Map (summary)

- **Cluster A (P1 + P2 — diagnostic core):** verdict + TEM definition + instances; high internal coupling
- **Cluster B (P3 — U2 spec edits):** paired drafts for two spec files
- **Cluster C (P4 — U3 project-pattern doc):** standalone artifact
- **Cluster D (P5 — supersession):** triggered by verdict
- **Cluster E (P6 — Research Frontier):** standalone observations

### Question Tree (summary)

| # | Question | Tractable? |
|---|---|---|
| P1 | What is the structural verdict + recommendation? | Yes — verdict statement |
| P2 | What is TEM + how do Explore, R2, R3 instantiate it? | Yes — operation definition + 3 instance characterizations |
| P3 | What are the U2 spec-edit drafts? | Yes — two short spec edits |
| P4 | What does the U3 project-pattern document look like? | Yes — short document draft |
| P5 | How is the prior 13-30 finding marked superseded? | Yes — frontmatter + brief explanation |
| P6 | What broader patterns warrant Research Frontier? | Yes — two short notes |

### Interface Map (summary)

- 5 internal one-way Reads (P2→P1; P2→P3; P2→P4; P1→P5; P1→P6)
- 4 external one-way Reads (prior 13-30 finding; Sensemaking SV6; explore.md + navigation.md specs; prior 12-30 + 13-00 + 13-30 findings)
- Zero bidirectional flows

### Dependency Order

1. **P2 first** (foundation — TEM definition + instances)
2. **P1 second** (verdict built on P2)
3. **P3, P4, P5, P6 in parallel** (all depend on P1 + P2; independent of each other)

### Self-Evaluation (5/5 PASS)

| Dimension | Result |
|---|---|
| Independence | PASS |
| Completeness | PASS |
| Reassembly | PASS |
| Tractability | PASS |
| Balance | PASS (with note that P2 and P4 carry the most weight as foundational) |

Determination-mechanism check: PASS (TEM applicability via P2 + P4; supersession recognition via P5).

**Decomposition ready for Innovation.**
