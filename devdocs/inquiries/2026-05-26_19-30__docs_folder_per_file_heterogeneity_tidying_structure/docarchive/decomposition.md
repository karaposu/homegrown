# Decomposition — docs/ folder per-file heterogeneity structural tidying

## User Input

```
_branch.md + sensemaking.md (SV6: two-layer architecture, 4 content kinds, 10 named open design choices D-1..D-10)
+ surfacing.md (60 items)
Task: Partition the design problem into independently-coherent pieces with explicit interfaces and dependency ordering, so Innovation can generate candidates piece-by-piece.
Constraints F1-F10 from sensemaking are fixed.
```

---

## Step 1 — Coupling Topology

Examined the 10 open design choices (D-1..D-10) from Sensemaking SV5 plus an implicit piece Sensemaking did not name explicitly (adoption workflow).

### Pairwise coupling assessment (informal — "if I change X, does Y need to change?")

| Pair | Coupling | Why |
|---|---|---|
| D-1 (section syntax) ↔ D-2 (whole-file syntax extension) | STRONG | Whole-file extension declares dominant-section status; whole-file syntax choice constrains section syntax choice and vice versa |
| D-1 ↔ D-8 (Layer 1↔2 alignment) | STRONG | Alignment table relates section content-kinds to file statuses; depends on both syntaxes |
| D-1 ↔ D-6 (tool-derived) + D-7 (auto-derived views) | STRONG (one-way) | Tooling REQUIRES parser-friendly syntax; D-6/D-7 depend on D-1's choice |
| D-6 ↔ D-7 | MODERATE | Both consume D-1 syntax; functionally independent (signals vs views) but share the syntax dependency |
| D-4 (folder reorg) ↔ D-5 (quarantine) | STRONG | Quarantine is a folder-mechanism choice — part of folder reorg |
| D-4 ↔ D-9 (archive handling) | STRONG | Archive treatment is folder-level + per-file marker; part of folder reorg |
| D-4 ↔ D-10 (alternative framing) | STRONG | Where alternative-framing files live IS a folder-reorg question |
| D-3 (reader-protocol) ↔ D-1 + D-2 + D-8 | MODERATE (one-way) | Protocol explains the syntax; consumes the syntax decisions |
| D-3 ↔ D-4 + D-5 + D-9 + D-10 | MODERATE (one-way) | Protocol explains folder conventions; consumes the folder decisions |
| D-1/D-2 ↔ D-4/D-5/D-9/D-10 | WEAK | Annotation works regardless of folder organization; folder works regardless of annotation. Loose coupling. (Optional refinement: folder-defaults could supply unmarked-file fallback — opt-in.) |
| **Adoption workflow** (implicit; not in D-1..D-10) | TOUCHES P1+P2+P3 | When/how authors label; depends on syntax + folder + protocol decisions being made first |

### Cluster identification

Four high-coupling clusters emerge cleanly:

- **Cluster A (Annotation Syntax):** D-1, D-2, D-8 — all about how status is syntactically expressed in files
- **Cluster B (Folder & Whole-File-Status Architecture):** D-4, D-5, D-9, D-10 — all about folder structure + whole-file status declarations
- **Cluster C (Reader-Protocol):** D-3 — single design choice; depends on A and B
- **Cluster D (Optional Tooling):** D-6, D-7 — opt-in supplements; depend on A

Plus one missing piece Sensemaking implied but did not name: **Cluster E (Adoption Workflow)** — the human-facing workflow for write-time labeling + first-touch labeling + minimum-viable starting state.

### Coupling map summary

```
[A: Annotation Syntax]──strong──[D: Optional Tooling]
       │   │
       │   strong (alignment table)
       │   │
       └───strong──────────────────────┐
                                       │
       └──weak (folder-default opt-in)─┘
                │
[B: Folder + Whole-File Status]  ←──┐
       │                            │
       └──── moderate (one-way) ────┴── [C: Reader-Protocol]
                                       │
              ┌────────────────────────┘
              │
              └── moderate (one-way) ──── [E: Adoption Workflow]
                                                │
       [A] ──────── moderate (one-way) ─────────┘
       [B] ──────── moderate (one-way) ─────────┘
```

**Major boundaries (low-coupling valleys):**
- Between A and B: weak coupling (annotation works without folder reorg and vice versa) — cut here
- Between {A,B} and C: one-way moderate (C consumes A and B) — cut here, ordering downstream
- Between {A,B,C} and E: one-way moderate (E consumes the others) — cut here, ordering downstream
- Between A and D: one-way strong (D depends on A's syntax) — cut here, ordering downstream; D is optional

---

## Step 2 — Detect Boundaries (Top-Down)

Five natural boundaries identified:

1. **P1 — Annotation Syntax** (Cluster A: D-1, D-2, D-8)
2. **P2 — Folder & Whole-File-Status Architecture** (Cluster B: D-4, D-5, D-9, D-10)
3. **P3 — Reader-Protocol** (Cluster C: D-3)
4. **P4 — Adoption Workflow** (Cluster E: implicit missing piece)
5. **P5 — Supplementary Tooling** (Cluster D: D-6, D-7) — OPTIONAL

Cut points are at the low-coupling valleys identified above.

---

## Step 3 — Validate Boundaries (Bottom-Up Check)

### Atom enumeration

Concrete atoms (smallest indivisible elements of the eventual design):

| Atom | Cluster expected |
|---|---|
| A section-level callout block `> [!CANON]` | A |
| A YAML frontmatter field `status: active` | A |
| An HTML comment sentinel `<!--STATUS:CANON-->` | A |
| A markdown header suffix `## Title [HISTORICAL]` | A |
| A frontmatter field listing per-section statuses | A |
| An alignment-table row mapping Canon → CANON status | A |
| A folder named `canon/` or `archive/` | B |
| A `_quarantine/` subfolder | B |
| An `_archive_note.md` file inside an archive folder | B |
| A frontmatter `framing: alternative` field on a sibling-architecture file | B |
| A tombstone file at an old path pointing to a new path | B |
| A `docs/README.md` file | C |
| A `LLMS.txt` file at project root | C |
| A `CLAUDE.md` paragraph about docs/ reading | C |
| A "label this section when you next touch it" reminder | E |
| A first-touch checklist | E |
| A starting-state recommendation (which files to label first) | E |
| A parser script that finds Canon-tagged sections | D |
| A generated `docs/CURRENT.md` index | D |
| A dead-link / broken-reference checker | D |

### Validation

Each atom naturally clusters into the expected pieces:
- Atoms A1–A6: all annotation syntax → Cluster A ✓
- Atoms B1–B5: all folder/whole-file status → Cluster B ✓
- Atoms C1–C3: all reader-protocol → Cluster C ✓
- Atoms E1–E3: all adoption workflow → Cluster E ✓
- Atoms D1–D3: all tooling → Cluster D ✓

No atom belongs across two pieces. No atom is missing a piece. Top-down and bottom-up AGREE on five pieces.

**Confidence:** HIGH — top-down boundaries match bottom-up atom clustering.

---

## Step 4 — Express as Question Tree

### P1 — How should within-file content kinds be syntactically expressed in markdown?

**Verification criteria:**
- [ ] Section-level annotation requires ≤1 added line per section to apply
- [ ] Paragraph-level opt-in path exists (using a finer-grained variant of the same syntax family)
- [ ] Markdown-native — renders correctly in any markdown viewer; no custom parser required to ADD an annotation
- [ ] Deterministic parse path exists (so P5 tools can derive views even if P5 isn't built initially)
- [ ] Alignment table specifies how the four content kinds (Canon / Historical-trace / Future-seed / Unevaluable) map to the inherited 5 whole-file statuses (CANON / THEORY / DESIGN / SKETCH / ARCHIVE)
- [ ] Whole-file syntax extension specified — how a file declares its dominant content kind in frontmatter (alignment with Layer 1)
- [ ] Conspicuousness — annotation is visually or syntactically obvious enough that an AI reader scanning the file will encounter it before the section's content

**Sub-questions to be answered by P1's candidates:**
- Q1a — Which syntax family (header-suffix / callout-block / HTML-comment / frontmatter-section-list / hybrid)?
- Q1b — Is the syntax purely-human-visible (callout block, header suffix) or purely-AI-visible (HTML comment) or both?
- Q1c — What's the frontmatter field name for whole-file status extension, and what values does it take?
- Q1d — What's the explicit alignment table form (which content kinds map to which inherited statuses, and how to handle the cases where they don't)?
- Q1e — If a section has no annotation, what content kind does it default to, in this Layer? (Sensemaking F7 says "uncertain" globally — Layer-2-specific: an UNCERTAIN content kind? Or "treat as the file's dominant kind"? Or "treat as Unevaluable-by-default"?)

### P2 — What folder architecture supports the design's needs?

**Verification criteria:**
- [ ] Folder structure preserves the inherited 5×11 inter-file navigation utility (or replaces it cleanly)
- [ ] A mechanism exists for whole-file unevaluable / silent-alternative-framing / untriaged content (quarantine subfolder OR equivalent frontmatter mechanism)
- [ ] Every archive folder either contains an `_archive_note.md` OR every file inside carries a frontmatter `status: archived` (eliminate HP-7's silent-archive problem)
- [ ] Alternative framings (HP-11 — `alignment_perspective/alignment.md` class) are no longer silent siblings
- [ ] No destruction — files moved leave tombstones at old paths when other files reference them
- [ ] Gradual application supported — partial folder reorganization doesn't break the corpus

**Sub-questions to be answered by P2's candidates:**
- Q2a — What is the top-level folder shape (status-first / subject-first / hybrid / minimal-change)?
- Q2b — Does a `_quarantine/` subfolder exist? What goes in it?
- Q2c — How is archive content marked? `_archive_note.md` only? Frontmatter? Both?
- Q2d — Where do alternative framings live, and how are they marked?
- Q2e — When a file is moved, what tombstone (if any) is left? (Required for files that other docs/ files or `cognitive_harness/` files reference)
- Q2f — How does folder organization compose with whole-file `status:` frontmatter (P1 output)?

### P3 — What reader-protocol file teaches AI sessions to interpret Layer 1 + Layer 2?

**Verification criteria:**
- [ ] Explains Layer 1 (the inherited 5×11 whole-file taxonomy) and how to navigate it
- [ ] Explains Layer 2 (the four content kinds + section-level annotation syntax from P1 + paragraph-level opt-in)
- [ ] Declares the safe-default — unmarked content = uncertain
- [ ] Explains folder conventions (P2's outputs) including quarantine, archive, alternative-framings, tombstones
- [ ] Discoverable by AI sessions in this project's environment — leveraging CLAUDE.md / LLMS.txt / `docs/README.md` conventions
- [ ] Human-readable too (the protocol serves humans as a docs/ entry-point)
- [ ] Stable — does not require frequent revision as individual files change

**Sub-questions to be answered by P3's candidates:**
- Q3a — Where does the reader-protocol live? (`docs/README.md` / `docs/LLMS.txt` / `CLAUDE.md` block / multiple)
- Q3b — What's the protocol's required content (sections, examples, alignment table reference)?
- Q3c — How does the protocol point AI sessions to itself in cold-start context (CLAUDE.md trigger? convention-based file naming?)
- Q3d — Does the protocol include a reading-order recommendation ("if you want to understand X, read these files in this order")?

### P4 — What is the gradual adoption workflow?

**Verification criteria:**
- [ ] Write-time labeling specified — when adding a new section / new file, what does the author do?
- [ ] First-touch labeling specified — when opening a legacy file for any reason, what minimum labeling is the author expected to add?
- [ ] Minimum-viable starting state defined — which subset of files / folders / protocol elements must exist on day 1 for the system to function at all
- [ ] Safe to apply incrementally — partial adoption (some files labeled, others not) does not produce wrong-behavior; instead produces graceful-degraded behavior (unmarked content treated as uncertain per F7)
- [ ] No batch pass required (F8)
- [ ] Discoverable — the workflow itself is documented somewhere (likely in P3's reader-protocol or a sibling)
- [ ] Reversible — partial annotations can be revised; the design doesn't lock in early choices

**Sub-questions to be answered by P4's candidates:**
- Q4a — What is the minimum-viable v1? (e.g., "create protocol file + add frontmatter to 5 most-cited files + leave the other 44 unmarked = working v1")
- Q4b — What triggers first-touch labeling? (Editing the file? Reading it? Linking to it?)
- Q4c — Who decides when an annotation is wrong? Is there a revision protocol?
- Q4d — How does the workflow handle files that are SHIPPED to users (install scripts, README) vs internal-only? (Maybe different priority)

### P5 — What supplementary tooling (if any) helps? [OPTIONAL — v2]

**Verification criteria:**
- [ ] Depends on P1's syntax being parser-friendly
- [ ] Each tool is opt-in — the design works without it
- [ ] No tool depends on calibration the project lacks (F8 / phase-appropriate per sensemaking)
- [ ] Tools are deterministic (no LLM auto-classification, per Sensemaking E1 / E9)

**Sub-questions:**
- Q5a — Should a dead-link / broken-reference checker exist? (Catches HP-8 deterministically)
- Q5b — Should a generated `docs/CURRENT.md` index exist? (Auto-derived from Canon-tagged sections)
- Q5c — Should a duplicate-content detector exist? (Catches HP-6)
- Q5d — Should an `_INDEX.md` per folder exist, listing files + their dominant content kind?

### Determination-mechanism piece check (refinement note)

Two load-bearing concepts depend on runtime determination:

- **"Safe-default unmarked = uncertain"** — the reader at runtime determines what to do with unmarked content. The MECHANISM (the design's instruction to readers) lives in **P3 (reader-protocol)**. Check passes — P3 specifies how.
- **"First-touch labeling"** — the human author at first-touch determines what kind a section is. The MECHANISM lives in **P4 (adoption workflow)**. Check passes — P4 specifies how.

No missing determination-mechanism pieces. Reassembly will not fail from this axis.

---

## Step 5 — Map Interfaces

### Interface table

| Source piece | Target piece | What flows | Direction | Assumptions (per refinement note) |
|---|---|---|---|---|
| P1 (Annotation Syntax) | P3 (Reader-Protocol) | Section-level annotation syntax spec + whole-file frontmatter spec + four-kind vocabulary + alignment table | one-way | P3 assumes P1's syntax is finalized before P3's protocol text is written |
| P1 | P5 (Tooling) | Parser contract — exact regex / structural pattern tools can rely on | one-way | P5 tools assume parse is deterministic |
| P1 | P4 (Adoption Workflow) | Concrete syntax to instruct authors to apply | one-way | P4 instructs authors using P1's specific syntax |
| P1 | P2 (Folder) | (Optional) frontmatter status format used per-file in folders | one-way (weak) | P2 may use frontmatter to mark whole-file status independent of folder; depends on P1's frontmatter spec |
| P2 (Folder Architecture) | P3 | Folder conventions (quarantine name, archive convention, tombstone format, alternative-framings folder) | one-way | P3 assumes P2's folder decisions are finalized |
| P2 | P4 | Current folder structure + new folder structure + migration instructions | one-way | P4 assumes P2 has defined the target |
| P3 (Reader-Protocol) | P4 | Protocol file path + content — P4 instructs authors to point readers to P3 | one-way | P4 assumes P3 is discoverable |
| P4 (Adoption Workflow) | (humans) | Concrete steps for write-time + first-touch labeling | one-way | external interface; non-pieces |
| P5 (Tooling) | (CLI / docs/CURRENT.md generator) | Parsed corpus + derived views | one-way | external interface |

### Hidden coupling check (Assumptions-not-data refinement)

What ASSUMPTIONS does each piece make about what others provide?

- **P3 assumes** P1 produced a single, stable annotation syntax (no syntax variants) — if P1 produces multiple optional syntaxes, P3 must enumerate them, increasing protocol complexity. Surface this as an explicit constraint on P1's design space: prefer single-default with at most one opt-in variant.
- **P4 assumes** P1's first-touch annotation can be done in <1 minute per file (otherwise adoption rots). Surface this as an explicit constraint on P1.
- **P4 assumes** P2's folder reorganization is small enough that the minimum-viable v1 doesn't require moving most files. Surface this as an explicit constraint on P2.
- **P5 (when built) assumes** P1's syntax has not changed since the parser was written. Implies a versioning convention if the syntax evolves — flag this as a research-frontier for P5, not a blocker for v1.

These assumptions are now explicit. Hidden coupling minimized.

---

## Step 6 — Order by Dependency

### Dependency graph

```
              [P1]              [P2]
                 \             /
                  \           /
                   ────→ [P3] ←────
                          │
                          ▼
                         [P4]
                          │
                          ▼
                    (deployable v1)

              [P1] ────→ [P5]   (OPTIONAL; v2)
```

### Sequencing

1. **P1 and P2 in parallel** (independent of each other; both must complete before P3)
2. **P3 after P1 + P2** (consumes both)
3. **P4 after P1 + P2 + P3** (consumes all three)
4. **P5 OPTIONAL, after P1** (deferred to v2)

### Critical path

P1 → P3 → P4 (or P2 → P3 → P4, whichever is slower)

Innovation can generate candidates for P1 and P2 in parallel (different mechanisms apply differently to each piece — e.g., Domain Transfer might be strong for P1's syntax design while Constraint Manipulation might be strong for P2's folder architecture). Critique evaluates piece-by-piece; the assembly check (Critique's Phase 3.5) tests whether the assembled design (one candidate from each piece) coheres.

### Parallel execution opportunity

P1 and P2 can be designed simultaneously — they share no design content, only weak coupling at the optional folder-default fallback. Innovation can generate candidates for both in one pass.

---

## Step 7 — Self-Evaluate

### Minimum 3 dimensions (mandatory)

| Dimension | Check | Pass? | Evidence |
|---|---|---|---|
| **Independence** | Can each piece be worked on without the others existing? | PASS | P1 can be designed knowing only the 4 content kinds + markdown constraint + F-list. P2 can be designed knowing only inter-file navigation goal + F-list. P3 depends on P1+P2 via defined interfaces (annotation spec + folder conventions). P4 depends on P1+P2+P3 via defined interfaces. P5 depends on P1 via parser contract. Within-piece work doesn't require reading sibling-piece internals. |
| **Completeness** | Do the pieces cover the whole? | PASS | All 10 named D-choices (D-1..D-10) from Sensemaking SV5 mapped: D-1→P1, D-2→P1, D-3→P3, D-4→P2, D-5→P2, D-6→P5, D-7→P5, D-8→P1, D-9→P2, D-10→P2. Plus P4 added for implicit-but-missing adoption workflow. All 6 user concerns C1-C6 covered: C1 by P3+P1; C2 by P2+P4; C3 by P1; C4 by P1 (four-kind partition explicitly includes Unevaluable); C5 by P4+P1 (no batch); C6 by P1+P2 (alignment with inherited). |
| **Reassembly** | Pieces + interfaces = whole? | PASS | Assembled candidate = annotation syntax (P1) + folder architecture (P2) + reader-protocol (P3) + adoption workflow (P4) [+ optional tooling (P5)] = complete docs/ tidying scheme. The 10 interfaces above carry the cross-piece information needed for reassembly. Determination-mechanism check passes for the two load-bearing runtime-determined concepts (safe-default in P3; first-touch in P4). |

### Full 7 dimensions (for this complex/high-stakes design)

| Dimension | Check | Pass? |
|---|---|---|
| Independence | (as above) | PASS |
| Completeness | (as above) | PASS |
| Reassembly | (as above) | PASS |
| **Tractability** | Is each piece small enough for a single focused pass? | PASS — P1 has 5 sub-questions (Q1a-e), P2 has 6 (Q2a-f), P3 has 4, P4 has 4, P5 has 4 sub-questions. Innovation can apply mechanisms per piece. |
| **Interface clarity** | All cross-piece flows explicit? | PASS — 9 named interfaces + 4 hidden-coupling assumptions surfaced explicitly |
| **Balance** | Roughly proportional complexity? | ACCEPTABLE — P1 and P2 are the heavyweight pieces (5-6 sub-Qs each); P3 and P4 are mid-weight (4 each); P5 is light (4, optional). The two heavyweight pieces are parallelizable, so balance for sequential effort is reasonable. |
| **Confidence** | Top-down + bottom-up agree on boundaries? | HIGH — atom-cluster validation (Step 3) confirmed all 5 piece boundaries with no atom-misplacement and no missing pieces |

---

## Final Deliverable

### Coupling Map (summary)

Four high-coupling clusters (A: annotation syntax; B: folder + whole-file-status; C: reader-protocol; D: optional tooling) plus one implicit-but-named piece (E: adoption workflow). Cuts made at the low-coupling valleys: between A and B (weak), between {A,B} and C (one-way), between {A,B,C} and E (one-way), between A and D (one-way, optional).

### Question Tree

```
ROOT: How should docs/ be structurally tidied per SV6?
│
├── P1: How should within-file content kinds be syntactically expressed?
│   ├── Q1a: Which syntax family?
│   ├── Q1b: Human-visible / AI-visible / both?
│   ├── Q1c: Whole-file frontmatter extension?
│   ├── Q1d: Alignment table form?
│   └── Q1e: Unmarked-section default behavior?
│
├── P2: What folder architecture supports the design?
│   ├── Q2a: Top-level folder shape?
│   ├── Q2b: Quarantine mechanism?
│   ├── Q2c: Archive convention?
│   ├── Q2d: Alternative-framing handling?
│   ├── Q2e: Tombstone for moved files?
│   └── Q2f: Folder + frontmatter composition?
│
├── P3: What reader-protocol explains both layers? [depends on P1+P2]
│   ├── Q3a: Location (README / LLMS.txt / CLAUDE.md / multi)?
│   ├── Q3b: Required content (sections + examples)?
│   ├── Q3c: AI cold-start discovery mechanism?
│   └── Q3d: Reading-order recommendation included?
│
├── P4: What is the gradual adoption workflow? [depends on P1+P2+P3]
│   ├── Q4a: Minimum-viable v1?
│   ├── Q4b: First-touch trigger conditions?
│   ├── Q4c: Annotation-revision protocol?
│   └── Q4d: User-shipped vs internal file priority?
│
└── P5: Supplementary tooling? [OPTIONAL — v2; depends on P1]
    ├── Q5a: Dead-link checker?
    ├── Q5b: Auto-derived CURRENT.md index?
    ├── Q5c: Duplicate-content detector?
    └── Q5d: Per-folder _INDEX.md?
```

### Interface Map

| From | To | What flows | Direction |
|---|---|---|---|
| P1 | P3 | Annotation syntax spec + four-kind vocab + alignment table | → |
| P1 | P5 | Parser contract | → |
| P1 | P4 | Concrete syntax for author instructions | → |
| P1 | P2 (weak) | Frontmatter format for per-file status | → |
| P2 | P3 | Folder conventions (names, semantics) | → |
| P2 | P4 | Current → target folder structure + migration steps | → |
| P3 | P4 | Protocol file path + how authors point readers there | → |
| P4 | humans | Concrete steps | → (external) |
| P5 | tools | Parsed corpus + derived views | → (external) |

### Dependency Order

1. **Parallel:** P1, P2
2. **After P1 + P2:** P3
3. **After P1 + P2 + P3:** P4
4. **OPTIONAL (v2):** P5 (after P1)

### Self-Evaluation Summary

| Dimension | Score |
|---|---|
| Independence | PASS |
| Completeness | PASS (all 10 D-choices + 6 C-concerns mapped) |
| Reassembly | PASS (with determination-mechanism check) |
| Tractability | PASS |
| Interface clarity | PASS (9 named + 4 surfaced hidden) |
| Balance | ACCEPTABLE (P1+P2 parallelizable; even sequential load) |
| Confidence | HIGH (top-down + bottom-up agree) |

**Decomposition verdict: PASS** — 5 pieces with explicit interfaces and dependency ordering, ready for Innovation to generate per-piece candidates.

---

## Telemetry

- **Steps completed:** 7 of 7 (Perceive → Detect → Validate → Express → Map → Order → Self-evaluate)
- **Pieces produced:** 5 (P1 mandatory + P2 mandatory + P3 mandatory + P4 mandatory + P5 optional)
- **Sub-questions identified:** 23 (P1: 5; P2: 6; P3: 4; P4: 4; P5: 4)
- **Interfaces specified:** 9 (with 4 hidden-coupling assumptions surfaced)
- **Coupling clusters identified:** 4 (A, B, C, D) + 1 implicit (E)
- **Dependency depth:** 3 (P1‖P2 → P3 → P4); P5 off the critical path
- **Self-evaluation dimensions:** 7 of 7 (full evaluation; all pass or acceptable)
- **Failure modes checked (all 7):**
  - Premature decomposition: NOT observed — Sensemaking's stable SV6 provided the whole to decompose
  - Wrong boundaries: NOT observed — top-down + bottom-up agree (high confidence)
  - Hidden coupling: 4 assumptions surfaced explicitly (P3 expects stable syntax; P4 expects <1-minute labeling cost; P4 expects small folder reorg; P5 expects unchanged syntax versioning) — no longer hidden
  - Missing pieces: 1 originally-missing piece named (P4 adoption workflow) and added; Determination-mechanism piece check passed (P3 owns safe-default mechanism; P4 owns first-touch mechanism)
  - Over-decomposition: NOT observed — 5 pieces (not 20); each piece has multiple sub-questions but unified scope; smaller partition (3 or 4) would force re-merging Cluster A and B or A and C
  - Ignoring dependencies: NOT observed — dependency order explicit; parallel-vs-sequential called out
  - Imbalanced decomposition: ACCEPTABLE imbalance noted — P1+P2 heavier than P3+P4; mitigated by parallelization

**Overall: PROCEED** — decomposition ready for Innovation to consume per-piece.
