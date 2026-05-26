# Decomposition — /explore Bloat REPAIR (Option ii RELOCATE-NOT-DELETE)

## Input recap

Sensemaking committed Option (ii) RELOCATE-NOT-DELETE as primary REPAIR shape. The work to decompose:

- Create new file `homegrown/explore/_design_history.md` (institutional memory destination)
- Edit `homegrown/explore/references/explore.md` to (a) delete bloat blocks, (b) repair specific elements within kept sections, (c) add a cross-reference pointer to the new design-history file
- Produce iteration #10 finding artifact at CONCLUDE, including the pattern-level research-frontier observation

The decomposition partitions the REPAIR work, not the catalogue of bloat (exploration already catalogued the elements; decomposition organizes the edit operations).

---

## Step 1 — Perceive Coupling Topology

### Elements (atoms)

Spec edits in `references/explore.md`:

- a1a: DELETE Loading-note Sources subsection
- a1b: DELETE Loading-note Anatomy reference
- a2: REPAIR §1.3 NOT-list — drop "Belongs to" project-paths column (keep rows)
- a3: DELETE §1.5 /navigation-specific paragraph
- a4: REPAIR §2.3 — trim/remove default-coupling table (resolution × depth-level)
- a5: DELETE §3.1 Step 0 declarations table
- a6: DELETE §3.6 Staged execution subsection
- a7: DELETE §3.7 Resolution progression subsection (duplicate of §3.4)
- a8: REPAIR §4.1 — demote failure mode #10 (staging-boundary regression) as speculative-runner-detected or remove
- a9: DELETE §5.5 Cross-Inquiry Merge Contract subsection
- a10: DELETE §6.1 Runner taxonomy table
- a11: DELETE §6.2 Neighbor-disciplines table (in full, not just project-paths column)
- a12: DELETE §6.3 Universal anatomy subsection
- a13: DELETE §6.4 Source findings list
- a14: DELETE §7 (Calibration-state-flagged items + Deferred additions + Research-frontier items — all three subsections)
- a15: DELETE §8 Summary table
- c1: ADD one-line cross-reference in Loading note → `homegrown/explore/_design_history.md`

New file creation:

- b1: CREATE `homegrown/explore/_design_history.md` with frontmatter/header
- b2: POPULATE _design_history.md with Sources content (from a1a)
- b3: POPULATE _design_history.md with §7 content (from a14)
- b4: POPULATE _design_history.md with §6.4 Source findings content (from a13)

Finding artifact:

- d1: WRITE finding.md at iteration root
- e1: INCLUDE pattern-level research-frontier observation in finding.md (from-scratch frame as generalizable BLOAT audit for other disciplines)

### Coupling perception

**Strong coupling clusters:**

- **Cluster R (Relocate flow):** {a1a, a13, a14} ↔ {b2, b3, b4}. Content moves from source (spec) to destination (new file). The source-deletion and destination-population are tightly coupled in semantics — losing one without the other defeats the relocate pattern.
- **Cluster D (Delete-only flow):** {a1b, a3, a5, a6, a7, a9, a10, a11, a12, a15}. Pure deletions; content discarded, not relocated.
- **Cluster S (Surgical repair within kept sections):** {a2, a4, a8}. Edits within sections that survive; require precision to avoid touching NECESSARY/HELPFUL content.
- **Cluster F (File creation + intra-file metadata):** {b1, c1}. New file creation + the one-line cross-reference in spec.
- **Cluster A (Artifact):** {d1, e1}. The finding output.

**Same-file coupling (line-number propagation):** All of a1a–a15 + c1 edit `references/explore.md`. Edits early in the file shift line numbers for later edits. This is **operational hidden coupling** mitigated by content-addressed edits (Edit tool with unique `old_string` context) rather than line-number addressing.

**Moderate coupling:**

- Cluster R ↔ Cluster F: the cross-reference in `c1` only makes sense after `b1` creates the destination file. One-way dependency.
- All clusters → Cluster A: the finding summarizes the work. Dependency: all clusters complete before A.

**Weak / no coupling:**

- Cluster D pieces are mutually independent in content (each deletion stands alone) but share same-file line-number coupling.
- Cluster S pieces are mutually independent in content.

---

## Step 2 — Detect Boundaries (Top-Down)

The natural clusters give 5 candidate pieces, balancing parsimony (10-MVL+ tight) against verification value (per-piece review).

### Specific decomposition-question answers

**(a) Should `_design_history.md` creation be one piece, or split "create skeleton" + "populate"?** ONE piece. The skeleton is trivial (a few headers); splitting produces a sub-piece (the skeleton) that can't exist meaningfully without the populate work. Over-decomposition risk.

**(b) Should mid-spec deletions be one piece or multiple?** ONE piece for the bloat-block deletions, GROUPED by operation (all DELETEs in mid-spec). Splitting per-section would produce 10+ trivial sub-pieces with shared same-file coupling — over-decomposition. The work is one editing pass: open the file, locate each bloat block, delete it. Per-block verification happens via the piece's verification criteria (checklist of bloat blocks removed).

**(c) Should targeted-edits within kept sections be one piece or grouped with related deletions?** SEPARATE piece (Cluster S). Surgical edits within kept sections require different precision than block deletions — the editor must avoid touching the NECESSARY/HELPFUL content surrounding the bloat. The risk profile differs from block deletion (which removes whole subsections). Separation gives per-edit verification value at low decomposition cost.

### Top-down pieces (5)

- **P1 — Create design-history destination.** New file `homegrown/explore/_design_history.md` with relocated content (Sources, §7, §6.4).
- **P2 — Loading-note edits.** Remove Sources subsection + Anatomy reference; add one-line cross-reference to `_design_history.md`.
- **P3 — Spec body bloat-block deletions.** Delete the large bloat blocks in mid-spec (§1.5 /nav paragraph; §3.1, §3.6, §3.7, §5.5, §6.1, §6.2, §6.3, §6.4, §7, §8).
- **P4 — Spec surgical edits within kept sections.** §1.3 column drop; §2.3 default-coupling table trim; §4.1 mode #10 demotion.
- **P5 — Iteration #10 finding artifact** (CONCLUDE phase). Includes the pattern-level research-frontier observation as Open Questions content.

---

## Step 3 — Validate Boundaries (Bottom-Up)

### Atom grouping

| Atom | Piece | Rationale |
|---|---|---|
| a1a (DELETE Sources subsection) | P2 | Loading-note locality; relocate-source |
| a1b (DELETE Anatomy reference) | P2 | Loading-note locality; pure delete |
| c1 (ADD cross-reference line) | P2 | Loading-note locality; supports relocate pattern |
| b1, b2, b3, b4 (CREATE + POPULATE _design_history.md) | P1 | New file; coherent unit |
| a2 (§1.3 column drop) | P4 | Surgical within kept §1.3 |
| a4 (§2.3 default-coupling table trim) | P4 | Surgical within kept §2.3 |
| a8 (§4.1 mode #10 demotion) | P4 | Surgical within kept §4.1 |
| a3, a5, a6, a7, a9, a10, a11, a12, a13, a14, a15 (11 body deletions) | P3 | Mid-spec bloat blocks; same operation type |
| d1, e1 (finding artifact + pattern frontier) | P5 | CONCLUDE artifact |

**Confidence:** HIGH. Top-down and bottom-up agree. The 5-piece structure aligns with both clustering perspectives.

---

## Step 4 — Express as Question Tree

### P1 — How is `homegrown/explore/_design_history.md` created and populated?

**Verification:**
- [ ] File created at `homegrown/explore/_design_history.md`
- [ ] Header makes clear this is design history / institutional memory (NOT runtime spec)
- [ ] Header notes the runtime spec lives at `homegrown/explore/references/explore.md`
- [ ] Contains the Sources subsection content (4 project-finding bullets, each with one-line annotation) preserved verbatim from current Loading-note Sources subsection
- [ ] Contains §7 content (Calibration-state-flagged items + Deferred additions + Research-frontier items) preserved verbatim from current spec
- [ ] Contains §6.4 Source findings list preserved verbatim
- [ ] No content fabricated; all content is relocated from the current spec
- [ ] No project-execution-impacting content (this file is read by humans for spec-authoring context, not by the LLM at /explore runtime)

### P2 — What edits are made to the Loading note of `references/explore.md`?

**Verification:**
- [ ] Sources subsection (the 4-bullet block) entirely removed
- [ ] Anatomy reference paragraph (the "spec follows the anatomy laid out in `thinking_disciplines/anatomy_of_disciplines.md`..." paragraph) removed
- [ ] The "This file is the canonical reference for the `/explore` discipline. It is loaded by `homegrown/explore/SKILL.md` at Step 0 and is intended to be read in full before the discipline executes." sentence preserved (NECESSARY runtime instruction)
- [ ] One-line pointer added: e.g., "Design history (sources, calibration-state notes, deferred additions, research frontiers) is preserved at `homegrown/explore/_design_history.md` and not duplicated here."

### P3 — What body-level bloat blocks are deleted from `references/explore.md`?

**Verification:**
- [ ] §1.5 — the /navigation-specific paragraph (the second half describing 16-type labeling vocabulary, per-route adaptive guidance, cognitive selection step) removed; abstract specialization-pattern intro KEPT if it remains substantive, OR §1.5 removed in full if Innovation determines the abstract part is bloat too
- [ ] §3.1 Step 0 declarations table — entire subsection removed (5-field table + orthogonality note + default-coupling table integrated here)
- [ ] §3.6 Staged execution (runner-orchestrated) subsection — entire subsection removed
- [ ] §3.7 Resolution progression subsection — entire subsection removed (duplicates §3.4 canonical cycle)
- [ ] §5.5 Cross-Inquiry Merge Contract subsection — entire subsection removed
- [ ] §6.1 Runner taxonomy (current state) subsection — entire subsection removed
- [ ] §6.2 Neighbor-disciplines table — entire subsection removed (not just the paths column; the whole table is BLOAT per exploration)
- [ ] §6.3 Universal anatomy subsection — entire subsection removed
- [ ] §6.4 Source findings list — entire subsection removed (content relocated via P1)
- [ ] §7 Calibration-state-flagged items + Deferred additions + Research-frontier items — all three subsections removed (content relocated via P1)
- [ ] §8 Summary table — entire section removed
- [ ] Surrounding KEPT content (§1.4, §2.x kept content, §3.2–§3.5, §3.8, §4.x, §5.1–§5.4) untouched
- [ ] Section numbering: either renumbered after deletions for consistency OR left with gaps; Innovation decides which is operationally cleaner

### P4 — What surgical edits are made within kept sections?

**Verification:**
- [ ] §1.3 NOT-list table — "Belongs to" column dropped; rows kept (the 5 NOT-list entries are NECESSARY); resulting table has 2 columns (Excluded | Why)
- [ ] §2.3 default-coupling table (resolution × depth-level) — table removed; the surrounding D0–D4 vocabulary KEPT; the "Default coupling (recommended, NOT enforced)" introductory paragraph removed along with the table
- [ ] §4.1 failure mode #10 (staging-boundary regression) — either (a) removed entirely from the 11-mode list (becomes a 10-mode list), or (b) demoted to a parenthetical note saying "(speculative; detection placement is runner-level, not discipline-level)". Innovation decides which is operationally cleaner
- [ ] No collateral edits to NECESSARY/HELPFUL content within §1.3, §2.3, §4.1

### P5 — What does the iteration #10 finding say?

**Verification:**
- [ ] finding.md exists at `devdocs/inquiries/2026-05-14_17-30__explore_what_does_it_actually_need__bloat_reframe/finding.md`
- [ ] Frontmatter: `continues-from` → 2026-05-14_17-00 (iteration #9 of chain); `related` chain (16-00, 16-41, 15-00, 14-00, 13-08, 12-45, 13-12-45); no `corrects:` or `supersedes:` (this iteration extends the chain by reframing the question, not correcting prior findings)
- [ ] Records the iteration #10 verdict: REPAIR Option (ii) RELOCATE-NOT-DELETE chosen; Option (iii) reset-toward-OLD reserved as escalation
- [ ] Records the central finding: chain was under-counting (~12–16 BLOAT items vs E2's 3); user's "full bloat" signal correct on structural grounds (cost-asymmetry reasoning for runtime-read specs)
- [ ] Records the BLOAT-confirmed Level-1.5 calibration (structurally stronger than form-confirmed; weaker than substance-empirical)
- [ ] Records the one-axis underlying force (template-driven design culture + minor local additions)
- [ ] Records the pattern-level research-frontier observation: from-scratch frame is generalizable BLOAT-audit operation applicable to /innovate, /sense-making, /comprehend, /decompose, /navigation
- [ ] Records the honest 10-MVL+ cost: Exploration + Sensemaking carried the load-bearing work; D + I + C produced supporting artifacts. Iteration-#11 threshold further elevated.
- [ ] Records what was KILLED: Option (i) in-place wider as primary; the chain's "no harm → keep" default for /explore's runtime-read spec context; upgrade of iteration #9's substance-inferred (Level 2 remains inferred, not upgraded)
- [ ] Style: lean form per the inquiry's own findings (don't reproduce the bloat patterns the inquiry is correcting)

---

## Step 5 — Interface Map

| Source | Target | What flows | Direction |
|---|---|---|---|
| P3 (delete Loading-note Sources subsection) [a1a] | P1 (populate `_design_history.md` with Sources content) [b2] | Sources content (text) | one-way (source → destination); content transfer |
| P3 (delete §6.4 Source findings) [a13] | P1 (populate `_design_history.md` with Source findings) [b4] | Source findings list (text) | one-way; content transfer |
| P3 (delete §7) [a14] | P1 (populate `_design_history.md` with §7 content) [b3] | §7 content (text) | one-way; content transfer |
| P1 (`_design_history.md` exists) | P2 (cross-reference points to `_design_history.md`) | path existence | one-way (P1's existence required for P2's reference to be valid) |
| P1, P2, P3, P4 (work completed) | P5 (finding summarizes) | summary signal | one-way (work → reporting) |

### Hidden coupling check (Assumptions-not-data)

**Same-file coupling.** P2, P3, P4 all edit `references/explore.md`. Line numbers shift as edits propagate. **Mitigation: use Edit tool with content-addressed `old_string` (unique surrounding context); do not address by line numbers.** This is an execution-time discipline, not a structural redesign — flagged explicitly so the implementing agent doesn't get bitten.

**Assumption coupling.** P5 (finding) assumes the REPAIR was applied / will be applied. If Innovation does not apply the edits, the finding's verdict claims become "recommended action" not "completed action." Make sure P5's verification criteria match what actually happened: if the pipeline applies the edits, finding records as done; if pipeline only generates the edit texts, finding records as Next Action MUST.

**Cross-reference assumption.** P2's cross-reference line says "Design history at `homegrown/explore/_design_history.md`." If P1 chooses a different filename or path, P2 must be updated. Mitigation: Innovation specifies the exact path; P1 and P2 reference the same string.

No unmitigated hidden coupling.

---

## Step 6 — Dependency Order

**Phase 1 (foundational; can run first):**

- P1 — create `_design_history.md` with relocated content. (Reads content from current spec; writes to new file. Doesn't yet delete from spec.)

**Phase 2 (depends on P1; spec edits):**

- P2 — Loading-note edits (uses P1's path in the cross-reference)
- P3 — mid-spec body deletions (now that content is preserved in P1, deletion is safe)
- P4 — surgical edits within kept sections

P2, P3, P4 can run in any order within Phase 2 IF content-addressed editing is used (no line-number coupling). They edit different parts of the same file; sequencing matters only at the editing-tool level, not at the decomposition level.

**Phase 3 (depends on Phases 1–2):**

- P5 — finding artifact (CONCLUDE; depends on knowing what the edits were)

**No circular dependencies.**

---

## Step 7 — Self-Evaluate

### Minimum 3 dimensions

| Dimension | Check | Verdict |
|---|---|---|
| **Independence** | Each piece's question is answerable without reading sibling pieces (except via defined interfaces) | PASS — P1 specifies the new file content (independent); P2/P3/P4 specify specific edits (each can be reviewed alone); P5 summarizes (interface to all upstream) |
| **Completeness** | Pieces cover all 12+ BLOAT items + new file + finding | PASS — atom grouping (Step 3) maps every atom to a piece; no atom unassigned |
| **Reassembly** | Pieces + interfaces reconstruct the whole work | PASS — applying P1 + P2 + P3 + P4 produces (a) cleaned `references/explore.md` (b) new `_design_history.md` (c) cross-reference between them; P5 records the operation |

### Full 7 dimensions

| Dimension | Verdict |
|---|---|
| Independence | PASS |
| Completeness | PASS |
| Reassembly | PASS |
| Tractability | PASS — each piece is small (P3 has the most operations at 11 deletions but each is bounded; P5 is a single document) |
| Interface clarity | PASS (with same-file line-number coupling mitigated by content-addressed editing) |
| Balance | PARTIAL — P3 is the largest piece by operation count (11 deletions); P2 + P4 are smaller (~2–3 operations each); P1 + P5 are documents. Not dramatic imbalance — the deletions are all the same operation type so volume doesn't translate to complexity. |
| Confidence | HIGH — top-down and bottom-up agree |

### Failure mode check

- **Premature decomposition?** No — sensemaking adjudicated the REPAIR shape clearly.
- **Wrong boundaries?** No — pieces cut at operation-type boundaries (relocate / delete / surgical / artifact) with same-file coupling mitigated.
- **Hidden coupling?** Addressed — same-file line-number coupling flagged; mitigation specified.
- **Missing pieces?** No — completeness check passes.
- **Over-decomposition?** No — 5 pieces; each has multiple atoms; none is trivial.
- **Ignoring dependencies?** No — dependency order specified.
- **Imbalanced decomposition?** Partial — P3 larger but same-operation-type, not high-complexity.

**No failure modes fire.**

### Project-specific risk dimensions check

| Dimension | Verdict |
|---|---|
| **duplicate-derivable-state** | PASS — decomposition partitions the WORK; exploration's per-element BLOAT catalogue is referenced not restated |
| **operation-parsimony** | PASS — 5 pieces; appropriate given the work has both new-file-creation and multi-edit components |
| **phase-fit** | PASS — decomposition partitions REPAIR; doesn't re-adjudicate (that was sensemaking's job) |
| **explicit-culture-fit** | PASS — RELOCATE-NOT-DELETE is novel to the chain; decomposition makes it concrete and operational |

### Determination-mechanism check

Not applicable — this decomposition's pieces are concrete edits, not load-bearing concepts whose use depends on runtime determination.

---

## Final Summary

**5 top-level pieces; 19 atoms covered.** Confirmation Report shape NOT used (this iteration produces actual REPAIR work, not a Confirmation Report). Standard LOOP_DIAGNOSE Step 4 finding shape NOT fully needed (no new failure-mode naming or hypothesis structure — the structural finding is from the from-scratch frame, not from a diagnostic).

**Output: PROCEED to Innovation.** Innovation will produce concrete final text for each piece — the `_design_history.md` content, the specific Edit-tool operations (`old_string`/`new_string` pairs) for each spec edit, and the finding.md content.
