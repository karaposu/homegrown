# Sensemaking — docs/ folder per-file heterogeneity structural tidying

## User Input

```
/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-26_19-30__docs_folder_per_file_heterogeneity_tidying_structure/_branch.md
+
surfacing.md (60 items across R-DOCS patterns/files, R-CONCERNS, R-EXTERNAL general+AI, R-INHERITED)
Task: Build a stable problem model — what the design problem IS — for Decomposition + Innovation to consume.
Special attention: Layer Commitment = structural; Load-bearing concept test on inherited 5×11 taxonomy; constraints C-4 (unevaluable) and C-5 (no batch rewrite) are hardest; the user wants INNOVATIVE approach (no obvious moves).
```

---

## SV1 — Baseline Understanding

The user wants `docs/` to be less confusing for AI sessions without deleting historical material. The previously-proposed 5-status × 11-subject taxonomy was useful for whole-file sorting but treats files as atomic units when they aren't — files contain mixtures. We need either within-file annotation, or a reader-protocol mechanism, or both. Some files like `consciousness.md` cannot be truth-evaluated at all, ruling out classification-based sorting. No batch rewriting is allowed. The answer probably involves marking content rather than moving or rewriting it.

*Meta-Inspection (H4 — concept names + H5 — motivating examples): pre-noted; will fire at Phase 3.*

---

## Phase 1 — Cognitive Anchor Extraction

### Constraints (must-haves; inviolable)

- **C1.** No LLM batch-rewrite of files (Constraint C-5 from `_branch.md`).
- **C2.** Legacy / sketch / half-correct material must be preserved as future-usable seeds — no destructive cleaning (C-2).
- **C3.** Must work for files that cannot be truth-evaluated (consciousness.md as canonical example — C-4).
- **C4.** New AI sessions must be protected from absorbing stale paragraphs as current truth (C-1).
- **C5.** Must handle per-file fractions — a single file containing canon + legacy + seed simultaneously (C-3).
- **C6.** Must extend or replace the inherited 5-status × 11-subject taxonomy, not silently discard it (C-6).
- **C7.** Layer commitment: STRUCTURAL only. No drift into redefining what `docs/` means as a project concept or designing the curation workflow over time.
- **C8.** Sustainable at the project's current Level 0 autonomy — design must work without operational maturity the project hasn't reached (e.g., no dependence on a reliable auto-classifier that doesn't yet exist).

### Key Insights (non-obvious implications)

- **K1. The user said "tidy" but the operative concern is READER-PROTECTION, not housekeeping.** Context-poison framing makes this explicit: the mess can stay messy if the *reader* is taught what to read and what to skip. The verb to design against is "protect-reader-from-poison," not "make-folder-look-clean."
- **K2. Context-poison is an LLM-specific failure mode.** Human readers don't suffer from it the same way (they skim and ignore stale paragraphs cheaply). The design's primary consumer is the AI reader, with humans as a secondary consumer who may or may not benefit from the same annotations.
- **K3. Truth-evaluation fails as a sorting criterion across the entire seed/sketch/aspiration class** (not just consciousness.md). Many files contain content that was never truth-claimed in the first place — it was thinking-out-loud, sketches, possibilities. The inherited active/draft/archived frame still implicitly assumes evaluability.
- **K4. Heterogeneity is not the bad thing — *silent* heterogeneity is.** A file that openly says "this section is canon, that section is historical context, this paragraph is a seed I'm preserving" is FINE. The problem is that the reader cannot distinguish without external annotation.
- **K5. The project already has partial native solutions** — self-labeled fuzziness (HP-5), `status: active` frontmatter, an archive folder, a design_history folder, the `_archive_note.md` pattern in `cognitive_harness/deprecated_navigation/`. These work but are inconsistent, file-level only, and applied unevenly.
- **K6. mtime is unreliable as a freshness signal** (the 16 files sharing 2026-05-16T08:32:58Z from a batch git op). Any design that leans on filesystem timestamps for status will mis-classify those 16.
- **K7. Right-time intervention matters.** Adding annotation at WRITE-MOMENT (when content is being added/changed) or at FIRST-TOUCH (when an author next opens an old file for any reason) is feasible. A batch labeling pass over the existing 49 files violates C1.
- **K8. The inherited 5×11 taxonomy and any within-file mechanism serve DIFFERENT OPERATIONS.** Whole-file taxonomy answers "where do I LOOK for X?" (inter-file navigation). Within-file annotation answers "what should I TRUST in this file I'm reading?" (intra-file reader-protection). They're complementary, not competing.

### Structural Points (core components + relationships)

- **S1. docs/ corpus** as a whole — the bounded territory.
- **S2. The file** as one structural unit (whole-file granularity).
- **S3. The section / paragraph** as a finer structural unit (within-file granularity) — the new unit the inquiry's question forces.
- **S4. The annotation layer** — markers on units (file, section, paragraph) that declare reader-relevant status.
- **S5. The folder layer** — directories that group files by reader-intent (canon/ vs theory/ vs ideas/ vs archive/ etc.).
- **S6. The reader-protocol layer** — a manifest / README / LLMS.txt file that teaches readers (AI especially) how to consume the annotations and folders.
- **S7. The author** — the human who declares annotations.
- **S8. The reader** — the AI session (or human) that consumes the annotations.
- Relationships: author → annotations → reader. Folders → readers (via reader-protocol). Annotations cross-cut folders (a CURRENT-TRUTH paragraph can sit inside an otherwise-HISTORICAL file).

### Foundational Principles (axioms; if you don't accept these, the rest doesn't follow)

- **P1. Self-labeling is cheaper than rewriting** — adding one marker line to an existing section costs O(1) per touch vs O(N) for a rewrite. Asymmetric: the design should exploit this.
- **P2. Reader-side filtering can replace writer-side cleaning** — if the reader knows to skip flagged-stale paragraphs, the writer doesn't need to delete them. Asymmetric in the opposite direction: lower writer cost, slightly higher reader cost, but the reader cost is paid per-read (LLM-fast) rather than per-write (human-slow).
- **P3. Default-trust must be safe-by-default for AI readers** — unmarked content is the failure case; default behavior should err toward "treat-as-uncertain unless marked CURRENT" rather than "treat-as-current unless marked STALE." (This is the opposite of how the corpus currently works.)
- **P4. Memory / history preservation is non-negotiable** — derived directly from project values per `desc.md` and the user's C-2.
- **P5. Annotation must be markdown-native** to avoid requiring tooling for write-side adoption. If you need a special parser to add or read an annotation, the design fails P1.

### Meaning-Nodes (central concepts that the design will commit to)

- **M1. Canon** — content the project currently believes is true and current.
- **M2. Historical-trace** — content that WAS canon, was superseded, but is preserved for reasoning trail / context / not-yet-deleted reasons.
- **M3. Future-seed** — content that could become canon someday but isn't asserted as true now; might be a sketch, an open possibility, an aspirational design.
- **M4. Unevaluable** — content that has no truth value to assign; thinking-out-loud, philosophical seeds, intuitions, voice transcripts (the consciousness.md class).
- **M5. Context-poison** — the failure mode where an AI session mistakes non-canon content for canon.
- **M6. Reader-protocol** — the external file/convention that tells readers how to interpret the corpus.
- **M7. Annotation** — a marker on a unit (file/section/paragraph) declaring its reader-status.
- **M8. Quarantine** — a structural area where default-trust is "do not trust until reviewed."
- **M9. Per-file fraction** — the within-file mixture of M1/M2/M3/M4 content.
- **M10. Sentinel marker** — invisible-to-human (HTML comment) but readable-by-AI marker.
- **M11. First-touch labeling** — the moment an author opens an old file for any reason is the cheap moment to label what they see in it.

---

## SV2 — Anchor-Informed Understanding

The problem is reader-protection at within-file granularity, NOT housekeeping at whole-file granularity. Files in `docs/` contain four operationally-distinct content kinds (Canon / Historical-trace / Future-seed / Unevaluable) silently interleaved. The design must teach readers — especially AI readers, because the failure mode is LLM-specific — to distinguish these without requiring per-paragraph truth evaluation (impossible for the unevaluable class) and without batch-rewriting files (ruled out by cost). Self-labeling at write-time and first-touch is the affordable mechanism; the inherited 5×11 taxonomy can stay as the inter-file navigation layer while a new within-file annotation layer is added beneath it.

Difference from SV1: the four-content-kind partition is named, the two-layer architecture is named (inter-file inherited + intra-file new), and the operative verb is reframed from "tidy" to "expose-status-to-reader."

---

## Phase 2 — Perspective Checking

*Meta-Inspection cross-reference: after SV3 below, apply meta-question to H1 (candidate set), H2 (frame scope — already triggered by Frame-exit Completeness below), H3 (question framing), H7 (phase/calibration-state — triggered below).*

### Technical / Logical

- Markdown supports two native annotation mechanisms cheaply: YAML frontmatter (file-level) and callout blocks `> [!NOTE]` (section-level, GitHub-Flavored-Markdown). HTML comments `<!-- ... -->` work as invisible-to-human, readable-by-AI sentinels.
- All three above require zero new tooling. The design can use any combination without infra cost.
- A reader-protocol file (`docs/README.md` or `docs/LLMS.txt`) is trivial to create; its effectiveness depends on AI sessions reading it before reading other files. CLAUDE.md is already loaded by Claude Code by convention — the project leverages this for memory.
- Folder reorganization is one-time-cost but irreversible-default; the existing partial structure (archive/, alignment_perspective/, possible_breakthroughs/, etc.) suggests the user is already using folders as soft annotation.
- Anchor produced: **A-tech-1.** The annotation mechanism doesn't need new tooling; the design's cost is in convention-establishment + first-touch adoption, not in software.

### Human / User

- The user already self-labels sometimes (the "fuzzy note" pattern in `what_is_meaningful_traversal.md`). The convention exists in seed form.
- Asking the user to add ONE marker line to a section when they touch it for any reason is feasible. Asking them to add 10 lines or rewrite is not.
- The user values preservation explicitly (C-2). Any candidate that risks deletion will be rejected.
- The user wants "innovative" — they're dissatisfied with the obvious moves (clean it all / leave it all / status-folder it all). Sensemaking flags this: Innovation must produce candidates beyond the obvious.
- Anchor produced: **A-user-1.** The author-declared at first-touch is the affordable cost; this is a stable anchor.

### Strategic / Long-term

- This is foundational for the autonomy ladder per `desc.md`. As autonomy increases, AI sessions read `docs/` more often without human supervision; the design's value compounds over time.
- The project is growing (49 files now; likely 100+ in 6 months). A design that fails to scale linearly fails strategically.
- The design composes with existing partial patterns (frontmatter, archive folder, design_history, _archive_note.md). Strategic alignment: don't invent a new system where extending an existing convention works.
- Anchor produced: **A-strat-1.** Continuity with existing partial patterns has higher long-term value than greenfield design.

### Risk / Failure

- **R1.** Designs requiring ongoing per-paragraph discipline will rot — humans don't sustain that level of annotation.
- **R2.** Designs requiring LLM batch passes violate C-5 and accumulate per-pass cost.
- **R3.** Designs that delete material violate C-2 and forfeit user trust.
- **R4.** Designs that depend on truth-evaluation fail on consciousness.md and the entire unevaluable class.
- **R5.** Designs that depend on mtime fail on the 16-file batch-op signature surfaced in Surfacing.
- **R6.** Over-engineering risk — heavy infrastructure for a small corpus signals the design isn't right.
- **R7.** Reader-non-compliance risk — the design can't FORCE AI sessions to honor annotations. Mitigable but residual.
- Anchor produced: **A-risk-1.** Reader-non-compliance is the irreducible residual; the design should make annotations as syntactically conspicuous as possible and provide a project-root protocol pointer (CLAUDE.md / LLMS.txt) for compliance reinforcement.

### Resource / Feasibility

- Manual annotation by author at write-time / first-touch: feasible.
- One-time pass to add annotations to existing 49 files: BORDERLINE — feasible if minimal (e.g., add frontmatter line per file), infeasible if extensive (e.g., annotate every section).
- Tooling build (auto-derived current-state index, etc.): feasible but adds maintenance.
- Anchor produced: **A-res-1.** One-time minimal pass (file-level frontmatter additions) is feasible; one-time section-level pass is borderline; one-time paragraph-level pass is infeasible.

### Ethical / Systemic

- Not load-bearing for this design.

### Definitional / Internal Consistency

- "Canon" in the inherited 5-status taxonomy means whole-file canonical status. The user's question forces it to mean within-file canonical status as well. The term gets overloaded.
- "Legacy" combines "historically correct but superseded" with "wasn't quite right when written" — these may need to split.
- The inherited THEORY status implies "explanatory companion not load-bearing" — but some THEORY-tagged files contain canonical definitions (e.g., the alignment-theory file). Overloaded.
- Anchor produced: **A-def-1.** Terms from the inherited taxonomy need disambiguation when ported to within-file granularity.

### Definitional / Frame-exit Completeness

*Gating predicate: fires when inherited terms appear across ≥2 distinct values in the inquiry's committed structures.*

Gating fires: the inquiry inherits "status" (5 values: CANON/THEORY/DESIGN/SKETCH/ARCHIVE) and "subject" (11 values) from the prior taxonomy.

**Existence Enumeration** for the inherited term "status":
- **TYPE axis** — status as file-level (the inherited taxonomy) vs **status as section-level / paragraph-level** (the user's new question — this referent is OUTSIDE the inherited frame). Also: status as project-process state (e.g., "in proposal"), status as evidence-tier (claim vs example vs counter-example).
- **LAYER axis** — status as author-declared vs system-derived (e.g., auto-classified) vs reader-derived vs implicit-default. Inherited frame assumed author-declared. Reader-derived is a real alternative outside the frame.
- **PHASE axis** — status valid at write-time (a snapshot, frozen) vs status that decays over time (validity-window). Frozen-status is the inherited frame; decay-status is a real referent the inherited frame excludes.
- **AGENT axis** — status declared by author / reviewer / AI summarizer / external tool. Inherited frame implicitly assumed single-author-declared.
- **TIME HORIZON axis** — status for "right now" vs status archived as "what was true at time T."
- **STRUCTURAL ROLE axis** — status as a sort-into-folder signal vs status as a reader-warning vs status as an editor-cue vs status as a tooling-input.

**Role Assessment** for each excluded referent:
- **Section/paragraph-level status** — IS the load-bearing referent the inquiry exists to handle. Cannot be excluded. Re-locate from the inherited frame's whole-file scope to a new within-file layer.
- **Reader-derived status** (e.g., AI reads a paragraph and tags it itself) — partially relevant but violates C-5 (requires reader compute per read). Keep as a possible future capability, not a current design requirement.
- **Decay-over-time status** — partially relevant; addresses K6 (mtime unreliability) but isn't a primary mechanism. Defer.
- **Multi-agent status declarations** — defer; current Level 0 is single-author.

**Verdict Rigor** check: any "out of scope" verdict tested on structural grounds?
- "Reader-derived status is out of scope" — strongest counter: "but AI auto-classification at read-time bypasses the author-discipline problem." Counter fails on structural grounds because per-read LLM classification has accuracy / cost / variance problems that the design can't currently calibrate (Phase/Calibration-State perspective below confirms). LOW confidence verdict; could revive if calibration matures.
- "Multi-agent declarations is out of scope" — counter: "what if a code-tool can derive 'this file references unbuilt artifacts' (HP-8)?" Counter has structural merit — auto-derivation of *some* status signals (e.g., dead-link detection, references-non-existent-file detection) is feasible WITHOUT calibration risk. Note this as a Refinement Trigger for Innovation.

**Residual / Coverage Justification** — any frame-exit concern not captured by the four meta-categories?
- Yes: **status declared by file location** — the act of moving a file from `docs/` to `docs/archive/` IS a status declaration via folder. This is in the inherited frame implicitly. It's structurally important enough to call out: the folder layer IS one declaration channel; the annotation layer is another. The within-file annotation handles what the folder layer can't (within-file fractions).

Anchor produced: **A-frame-1.** The inherited frame's "status" referent must expand from file-level-author-declared-frozen-single-agent to ALSO INCLUDE within-file-author-declared-frozen-single-agent, with refinement-triggered future expansion paths (reader-derived, decay-over-time, multi-agent, auto-derived-by-tool).

### Phase / Calibration-State

Refinement check: does any candidate rule depend on calibration the project has?

- If any candidate proposes LLM auto-classification of per-paragraph status: requires calibration data (per-discipline N≥30 per `intuit.md`'s gates) which the project does NOT have at Level 0. RULE OUT or DEFER auto-classification candidates.
- If any candidate proposes user-author labeling: requires only labeling-discipline, which is the project's existing capability (the user already does partial labeling). FEASIBLE at Level 0.
- If any candidate proposes a reader-protocol that AI sessions must honor: requires AI compliance, which is partially calibrated (CLAUDE.md is loaded; LLMS.txt convention is emerging). FEASIBLE with explicit reinforcement.
- If any candidate proposes auto-derived consumer files (e.g., docs/CURRENT.md generated from canon-tagged sections): requires only deterministic parsing (no calibration). FEASIBLE if the annotation syntax is parser-friendly.

Anchor produced: **A-phase-1.** Phase-appropriate defaults: human-author-declared + deterministic-tool-derived. Anything requiring auto-classification calibration is deferred.

---

## SV3 — Multi-Perspective Understanding

The problem clarifies on three dimensions:

**Dimension 1 (Operative verb):** Not "tidy" but "expose-status-to-reader." The corpus can stay messy if the reader is taught what's what. Reader-protection, not housekeeping.

**Dimension 2 (Architecture):** Two layers, not one. The inherited 5-status × 11-subject whole-file taxonomy stays as Layer 1 (inter-file navigation: "where do I look?"). A new within-file annotation layer is added as Layer 2 (intra-file reader-protection: "what do I trust in this file?"). They're complementary: Layer 1 handles "what's in the corpus"; Layer 2 handles "what's in this specific file I just opened."

**Dimension 3 (Cost surface):** Only mechanisms with author-declared OR deterministic-tool-derived status are phase-appropriate. Anything requiring LLM-auto-classification calibration is deferred. Mechanisms must be markdown-native (no tooling to add an annotation). Adoption is gradual via first-touch labeling — no batch pass.

The four content kinds (Canon / Historical-trace / Future-seed / Unevaluable) survive Phase 2 — they are operationally distinct and each is binding-load-bearing.

*Meta-Inspection cross-reference: H1 (candidate set), H3 (question framing) — informally checked; H2 (Frame-exit) and H7 (Phase/Calibration-State) explicitly applied above. No additional check fires here.*

---

## Phase 3 — Ambiguity Collapse

### Ambiguity #1: Are the four content kinds (Canon / Historical-trace / Future-seed / Unevaluable) the right load-bearing concept names?

*Load-bearing concept test (Phase 3 refinement note): this is a Phase 5 / Conceptual Stabilization output — the four-way partition will be committed unless ambiguity-collapse here resolves against it. Apply proxy-vs-structural, discoverability, user-language alignment sub-aspects.*

**Strongest counter-interpretation:**
- Could be FIVE kinds — split UNEVALUABLE into philosophical-seed (consciousness.md) vs untriaged-question (possible_breakthroughs/2.md).
- Could be THREE kinds — merge UNEVALUABLE into FUTURE-SEED (both are non-canon and not currently load-bearing).
- Could be a different framing entirely: not "kinds of content" but "kinds of reader-promise" (this paragraph IS true / WAS true / MIGHT-BE-TRUE-AGAIN / DOES-NOT-CLAIM-TRUTH). Reader-promise framing is functionally similar but phrased differently.

**Why the counter fails (structural grounds):**
- FIVE-way split: extra granularity doesn't earn its keep at current 49-file corpus size. The philosophical-seed vs untriaged-question distinction is a sub-property within UNEVALUABLE, not a peer.
- THREE-way merge: collapses constraint C-4. The user explicitly named consciousness.md as the class where truth-evaluation fails. Merging UNEVALUABLE into FUTURE-SEED implies "we'll eventually evaluate this" — but consciousness.md is *structurally* unevaluable (it's a philosophical seed, not an unfinished claim). The collapse fails the user's named constraint.
- Reader-promise reframing: functionally similar but the four-content-kind framing aligns better with the user's vocabulary (canon / legacy / sketch / seed appears in the prior conversation). User-language alignment sub-aspect: keep the user's vocabulary.
- Proxy-vs-structural sub-aspect: are the four kinds structural distinctions or proxies? They ARE structural — each implies a different reader-behavior (Canon: trust as current; Historical-trace: read as context, don't act on; Future-seed: consider if relevant to current question; Unevaluable: read as inspiration, never as truth). The structural distinctions are real.
- Discoverability sub-aspect: can the author determine which kind a section is? For most sections, yes (HP-1 through HP-15 patterns surfaced confirm this). For genuinely ambiguous sections, the author should be allowed to either pick the closest kind or label UNEVALUABLE as the safe default. The discoverability holds.

**Confidence:** MEDIUM-HIGH (the four-way commits unless Innovation produces evidence for splitting or merging).

**Resolution:** commit to four content kinds — **Canon / Historical-trace / Future-seed / Unevaluable** — as the load-bearing within-file annotation vocabulary.

**What is now fixed:** the four-way partition.
**What is no longer allowed:** collapsing UNEVALUABLE into FUTURE-SEED (loses C-4); collapsing HISTORICAL-TRACE into legacy-pile-folder (loses within-file fraction handling per C-3).
**What now depends on this choice:** the annotation mechanism (Innovation candidates) must support the four-way; the reader-protocol must explain all four; the inter-file taxonomy (Layer 1) must align with these.
**What changed in the conceptual model:** the within-file design has a definite vocabulary, not a TBD.

### Ambiguity #2: What does "tidy" mean in the user's question?

**Strongest counter-interpretation:** "tidy" could mean (a) aesthetic cleanup, (b) ease of human reading, (c) ease of retrieval, (d) reduce AI context-poison.

**Why the counter fails (structural grounds):** the user's explicit framing ("everytime a new session reads these docs folder, it will have some context poison") makes (d) the operative meaning. Other interpretations are either downstream effects or unrelated.

**Confidence:** HIGH.

**Resolution:** "tidy" = "expose-status-to-reader-to-reduce-context-poison." Aesthetic / retrieval / human-reading benefits are secondary.

**What is now fixed:** success metric = AI reader can distinguish CURRENT from HISTORICAL/SEED/UNEVALUABLE without external help.
**What is no longer allowed:** pure-aesthetic reorganization that doesn't reduce reader-poison; designs optimized for human folder-browsing at the cost of AI clarity.
**What depends:** Innovation candidates evaluated by reader-protection benefit, not by aesthetic appeal.
**Conceptual model change:** the discipline of evaluation shifts — Critique should adversarially test "can a new AI session, given this design, avoid context-poison?" not "does this look organized?"

### Ambiguity #3: Does the inherited 5-status × 11-subject taxonomy survive, get extended, or get replaced?

**Strongest counter-interpretation:** replace it wholesale with a new per-paragraph annotation scheme; the within-file design subsumes the file-level taxonomy.

**Why the counter fails (structural grounds):** the two taxonomies serve DIFFERENT operations. Whole-file taxonomy answers "where do I look for X?" (inter-file navigation). Within-file annotation answers "what do I trust in the file I just opened?" (intra-file reader-protection). Wholesale replacement loses inter-file navigation utility. The two can co-exist without conflict.

**Confidence:** HIGH that they're complementary, not competing.

**Resolution:** TWO-LAYER architecture — keep the whole-file 5×11 as **Layer 1 (inter-file navigation)**; ADD within-file four-way annotation as **Layer 2 (intra-file reader-protection)**.

**What is now fixed:** two-layer architecture.
**What is no longer allowed:** designs that discard the whole-file taxonomy; designs that try to handle within-file fractions at folder-granularity only (folders can't subdivide a file).
**What depends:** Layer 1 → Layer 2 alignment table (how do the four content kinds relate to the 5 statuses?); the reader-protocol must explain both layers.

### Ambiguity #4: What is the unit of within-file annotation? Paragraph? Section? Block? Sentence?

**Strongest counter-interpretation:** sentence-level (most precise) OR paragraph-level (markdown-natural) OR section-level (cheapest).

**Why the counter (partially) succeeds and fails:**
- Sentence-level: too granular; effectively requires rewriting every file; violates C1.
- Paragraph-level: markdown-natural (paragraphs are blank-line-bounded); moderate cost; some HP-1 cases need this granularity (a paragraph contains both current claim and superseded reference).
- Section-level: markdown-header-bounded; cheapest; most patterns observed in Surfacing (HP-1 through HP-15) are section-level distinctions, not paragraph-level.

**Confidence:** MEDIUM. Two-tier resolution: section-level DEFAULT (header-bounded; cheapest; covers ~80% of observed patterns); paragraph-level OPT-IN for files where finer granularity is needed.

**Resolution:** annotation unit is **section-level by default, paragraph-level by opt-in**. Section-level is the standard tier; paragraph-level is for files where the author judges finer granularity is needed.

**What is now fixed:** section-level annotation as standard.
**What is no longer allowed:** sentence-level mandate; whole-file-only annotation (would not handle per-file fractions per C-3).
**What depends:** Innovation candidates for syntax must be writable at section-level cheaply (e.g., header suffix tag, callout block at section top, frontmatter listing sections); paragraph-level syntax can be optional.

### Ambiguity #5: Who declares the annotation — author, AI, or reader?

**Strongest counter-interpretation:** AI auto-classification at read-time is cheapest (no human discipline required) and scales.

**Why the counter fails (structural grounds):** per-read LLM classification has cost (every read pays the classification cost), accuracy/variance (different sessions classify same content differently), and calibration risk (Phase/Calibration-State check above rules this out). Author-declared at write-time has higher per-touch cost but is paid once per author-touch and has stable accuracy. The asymmetric cost favors author-declared at the project's current scale.

**Confidence:** HIGH that human-author-declared is operative for the current design.

**Resolution:** **human-author-declared, at write-time for new content and at first-touch for legacy content.** Deterministic tool-derivation (e.g., flagging files with broken references — HP-8) is permitted as a supplementary mechanism; LLM-auto-classification is deferred.

**What is now fixed:** declarer = human author; trigger = write-time / first-touch.
**What is no longer allowed:** designs that require a one-time LLM batch pass (violates C1); designs that require continuous LLM background classification (violates Phase/Calibration-State).
**What depends:** annotation syntax must be cheap for authors to add (one-line or one-block, not multi-step); the reader-protocol must mention that unmarked content is *uncertain*, not *current* (this changes the default safe assumption per P3).

### Ambiguity #6: How does the AI reader honor the annotations? (Compliance residual)

**Strongest counter-interpretation:** the design can't force compliance, so any annotation is non-binding theater.

**Why the counter (partially) succeeds:** non-compliance is a real residual. Design CANNOT enforce that an AI session honors annotations. But the design can:
- Make annotations syntactically conspicuous (callout blocks render visually; HTML comments are explicit AI-directives).
- Provide a project-root reader-protocol pointer (CLAUDE.md / LLMS.txt / docs/README.md) that AI sessions are likely to read.
- Use the convention CLAUDE.md already established (this project's CLAUDE.md is loaded automatically).

**Confidence:** MEDIUM (compliance is mitigable but residual).

**Resolution:** treat compliance as a **mitigable residual.** Design must:
1. Make annotations syntactically conspicuous (Innovation candidates evaluated by visibility).
2. Pair every layer with a reader-protocol — a single explicit "how to read docs/" file at a discoverable location (e.g., `docs/README.md` and/or a CLAUDE.md note).
3. The reader-protocol's existence is part of the design, not optional.

**What is now fixed:** annotation + reader-protocol are paired; both are required design components.
**What is no longer allowed:** annotation-only designs that have no reader-protocol file.
**What depends:** reader-protocol content must explain Layer 1 + Layer 2 + the four content kinds + the safe-default (unmarked = uncertain) + any folder-level conventions.

---

## SV4 — Clarified Understanding

The design problem stabilizes:

1. **Architecture:** TWO LAYERS — inherited 5-status × 11-subject whole-file (Layer 1, inter-file navigation) + new within-file annotation (Layer 2, intra-file reader-protection).
2. **Content vocabulary (Layer 2):** four kinds — **Canon / Historical-trace / Future-seed / Unevaluable**.
3. **Unit (Layer 2):** **section-level default**, paragraph-level opt-in.
4. **Declarer:** **human author**, at write-time or first-touch.
5. **Mechanism:** **markdown-native** (frontmatter / callout / HTML comment); deterministic tool-derivation permitted as supplement; LLM-auto-classification deferred.
6. **Reader-protocol:** REQUIRED paired component (e.g., `docs/README.md` + CLAUDE.md pointer). Explains both layers and the four content kinds. States the safe-default: unmarked content is uncertain.
7. **Adoption:** gradual via first-touch labeling, no batch pass.
8. **Compliance:** mitigable residual; design maximizes annotation conspicuousness and provides project-root protocol pointer.

---

## Phase 4 — Degrees-of-Freedom Reduction

### Fixed (commitments the design must honor)

| # | Fixed | Justification anchor |
|---|---|---|
| F1 | Four content kinds: Canon / Historical-trace / Future-seed / Unevaluable | Ambiguity #1 resolution |
| F2 | Section-level annotation default; paragraph-level opt-in | Ambiguity #4 resolution |
| F3 | Human-author-declared; write-time + first-touch | Ambiguity #5 resolution; A-phase-1 |
| F4 | Two-layer architecture: Layer 1 (inherited whole-file) + Layer 2 (new within-file) | Ambiguity #3 resolution; K8 |
| F5 | Markdown-native syntax (no tooling required to add annotation) | P5; C8 |
| F6 | Reader-protocol file is REQUIRED, paired with the annotation layer | Ambiguity #6 resolution; A-risk-1 |
| F7 | Safe-default: unmarked content = uncertain (not current) | P3 |
| F8 | Gradual adoption via first-touch labeling; no batch rewrite | C1; K7 |
| F9 | Memory / seed preservation — no destructive deletion | C2; P4 |
| F10 | The inherited whole-file 5×11 taxonomy is preserved as Layer 1 | Ambiguity #3 resolution |

### Eliminated (off the table)

| # | Eliminated | Reason |
|---|---|---|
| E1 | LLM batch classification pass | C1 + Phase/Calibration-State |
| E2 | Per-paragraph mandatory annotation | A-res-1 (infeasible) |
| E3 | Deletion of legacy material | C2 |
| E4 | Truth-evaluation as sorting criterion | C3; K3 |
| E5 | mtime-based decay alone | K6 |
| E6 | Whole-file-only annotation (no within-file mechanism) | C5 |
| E7 | Folder-hierarchy-only solution | HP-3, HP-4 show within-file is binding |
| E8 | Sentence-level annotation | Ambiguity #4 |
| E9 | Reader-derived (per-read AI classification) status as primary mechanism | Phase/Calibration-State |
| E10 | Designs requiring new tooling to write annotations | P5 |

### Remaining viable design space (what Innovation explores)

| Open choice | Available options | What constrains the choice |
|---|---|---|
| **D-1. Annotation syntax for sections** | (a) header suffix tag: `## Title [CANON]`; (b) callout block: `> [!CANON]` at section top; (c) HTML comment sentinel: `<!--STATUS:CANON-->`; (d) frontmatter section-list: `sections: {title: status}` in YAML; (e) combination | F2, F3, F5; must be cheap to write, conspicuous to AI reader |
| **D-2. Annotation syntax for whole-file (in addition to existing 5×11)** | (a) extend existing `status:` frontmatter to mention dominant content kind; (b) add new `default_section_status:` field; (c) leave whole-file annotation as the inherited 5×11 only | F4, F10; should align with Layer 1 |
| **D-3. Reader-protocol location and shape** | (a) `docs/README.md`; (b) `docs/LLMS.txt`; (c) `CLAUDE.md` block; (d) all three; (e) `docs/_HOW_TO_READ.md` | F6; AI session discovery |
| **D-4. Folder reorganization (Layer 1 changes)** | (a) status-first top-level (canon/ theory/ design/ ideas/ archive/ — the prior conversation's proposal); (b) subject-first; (c) hybrid; (d) leave current folder structure mostly alone, just add Layer 2 | F4, F10; should not interfere with Layer 2 |
| **D-5. Quarantine mechanism for unevaluable / silent-alternative-framing files** | (a) dedicated quarantine subfolder; (b) tag-only, no folder move; (c) tombstone-and-redirect for moved files; (d) hybrid | F8, F9; safe-default behavior |
| **D-6. Tool-derived supplementary signals** | (a) dead-link / broken-reference detection (HP-8); (b) duplicate-content detection (HP-6); (c) snapshot-file flagging (HP-12); (d) none in v1 | F3 permits deterministic tool-derivation; optional |
| **D-7. Auto-derived consumer views** | (a) generate `docs/CURRENT.md` index of Canon-tagged sections; (b) generate `docs/_INDEX.md` of all files with their dominant content kind; (c) none in v1 | F3 permits; depends on D-1 choice (parser-friendly syntax required) |
| **D-8. Layer 1 ↔ Layer 2 alignment table** | (a) explicit mapping table in the reader-protocol; (b) implicit (status field implies dominant content kind); (c) status field declares dominant content kind explicitly | F4, F10; clarity requirement |
| **D-9. Handling of HP-7 (archived folder)** | (a) require `_archive_note.md` in any archive folder (extend the deprecated_navigation precedent); (b) prefix archived files with `_`; (c) frontmatter status: archived on every file in archive folders | F6, F8 |
| **D-10. Handling of HP-11 (silent alternative framings like alignment_perspective/alignment.md)** | (a) frontmatter `framing: alternative` field; (b) move to a dedicated `alternative_framings/` folder per the prior conversation's proposal; (c) callout at top of file declaring "this is a sibling framing, not canonical"; (d) hybrid | F6, F7 |

---

## SV5 — Constrained Understanding

The solution space is dramatically narrowed. The design Innovation must produce will:

1. Use a **markdown-native annotation syntax** at section level (Open choice D-1 picks one or a combo of header-suffix / callout block / HTML comment / frontmatter section-list).
2. Express the **four content kinds** (Canon / Historical-trace / Future-seed / Unevaluable) in reader-visible form.
3. Be **paired with a reader-protocol file** (D-3) explaining the convention and the safe-default.
4. **Preserve and align with** the inherited 5-status × 11-subject whole-file taxonomy as Layer 1.
5. Be **applied gradually** via first-touch labeling (no batch pass).
6. **Optionally** add quarantine, tool-derived signals, and auto-derived consumer views (D-5, D-6, D-7) — Innovation can include or defer.
7. **Handle three named per-file-fraction patterns**: HP-1 (supersession-trail-in-active-file), HP-7 (archived folder without internal markers), HP-11 (silent alternative framing).

The remaining innovation space is real and substantive — 10 named open design choices (D-1 through D-10) — but each is constrained to a small set of viable options. Innovation should produce candidate designs that resolve D-1 through D-10 coherently and survive Critique.

---

## Phase 5 — Conceptual Stabilization

*Accommodation trigger check (Phase 5 refinement note): does the model keep needing revisions? NO. Each perspective produced refinements that stabilized the model further (anchors A-tech-1, A-user-1, A-strat-1, A-risk-1, A-res-1, A-def-1, A-frame-1, A-phase-1 all integrated into the four-fixed-content-kinds + two-layer-architecture model). Trigger does not fire.*

*Meta-Inspection cross-reference: H6 (model fit) — Accommodation trigger above is THE meta-question at H6. No additional new check.*

The stable model:

- **What the design problem IS:** a reader-protection problem at within-file granularity, requiring exposure of within-file status to AI readers without requiring per-paragraph truth-evaluation, without batch-rewriting, and without losing the inherited whole-file taxonomy.
- **What the design must produce:** a TWO-LAYER architecture — Layer 1 (inherited whole-file 5-status × 11-subject) for inter-file navigation + Layer 2 (NEW within-file four-way annotation: Canon / Historical-trace / Future-seed / Unevaluable, at section-level default / paragraph-level opt-in, human-author-declared at write-time / first-touch) for intra-file reader-protection — paired with a reader-protocol file that teaches AI sessions how to interpret both layers and declares the safe-default (unmarked = uncertain).
- **What's fixed:** F1–F10 above.
- **What's eliminated:** E1–E10 above.
- **What Innovation will choose:** D-1 through D-10 — concrete syntax and locations.
- **The success metric:** a new AI session, opening any file in `docs/`, can distinguish CURRENT-TRUTH from HISTORICAL-TRACE / FUTURE-SEED / UNEVALUABLE within that file, without truth-evaluating each paragraph, by reading the annotation markers and consulting the reader-protocol.

---

## SV6 — Stabilized Model

The `docs/` tidying problem is a **READER-PROTECTION problem at WITHIN-FILE granularity**, solvable by a **TWO-LAYER architecture**:

**Layer 1 — Inter-file Navigation (inherited).** The 5-status × 11-subject whole-file taxonomy + any folder reorganization. Answers "where do I look for X?" Unchanged by this inquiry (continues from prior conversation).

**Layer 2 — Intra-file Reader-Protection (new).** Section-level (default) or paragraph-level (opt-in) annotation declaring one of four content kinds:
- **Canon** — current-truth; trust as the project's current believed state
- **Historical-trace** — was-canon, was-superseded, preserved for context / reasoning trail
- **Future-seed** — not-currently-asserted-as-truth, but a possibility worth preserving
- **Unevaluable** — has no truth-value (philosophical seed, voice transcript, intuition); read as inspiration, never as truth

Annotation is **human-author-declared** at write-time (for new content) and at first-touch (for legacy files). Mechanism is **markdown-native** (frontmatter / callout block / HTML comment; specific syntax = Innovation choice). Adoption is **gradual** (no batch rewrite). The default for unmarked content is **"uncertain"** (not "current").

Layer 2 is **paired with a reader-protocol file** at a discoverable location (`docs/README.md` / `CLAUDE.md` block / `LLMS.txt` — specific = Innovation choice) that teaches AI sessions to read both layers, interpret the four content kinds, and apply the safe-default.

**The success metric:** a new AI session can distinguish Canon from non-Canon in any file it opens, without truth-evaluating paragraphs.

**The architecture survives all six user-stated constraints (C-1 through C-6):**
- C-1 (context-poison protection) → Layer 2 + reader-protocol
- C-2 (seed preservation) → Future-seed / Historical-trace / Unevaluable are all preserved
- C-3 (per-file fractions) → section-level annotation handles within-file mixtures
- C-4 (unevaluable files) → Unevaluable IS one of the four content kinds; no truth-evaluation required
- C-5 (no batch rewrite) → gradual first-touch labeling; markdown-native (no tooling cost)
- C-6 (extends inherited taxonomy) → Layer 1 IS the inherited taxonomy; Layer 2 supplements it

**How this differs from SV1:**

| SV1 (baseline) | SV6 (stabilized) |
|---|---|
| "annotation or reader-protocol — maybe both" | TWO LAYERS — both are required components, named with vocabulary and unit-of-annotation committed |
| "four content kinds, probably" | FOUR CONTENT KINDS named explicitly; ambiguity-tested; commitment with confidence levels |
| Implicit assumption that any annotation approach would do | Annotation syntax constrained to D-1 viable options (markdown-native, section-level, author-declared) |
| Reader-protocol mentioned but not specified | Reader-protocol REQUIRED as paired component; safe-default named |
| Architecture single-layer | Two-layer with explicit alignment requirement (D-8) |
| Implementation cost ambiguous | First-touch labeling; no batch; deterministic-tool-derivation permitted; LLM auto-classification deferred |
| "Tidy" as the verb | "Expose-status-to-reader" — reader-protection as the operative meaning |

---

## Telemetry

- **Perspectives applied:** 8 (Technical, Human, Strategic, Risk, Resource, Definitional/Internal, Definitional/Frame-exit Completeness — gating fired, Phase/Calibration-State — refinement check fired)
- **New anchor types per perspective:** 8 named anchors (A-tech-1, A-user-1, A-strat-1, A-risk-1, A-res-1, A-def-1, A-frame-1, A-phase-1)
- **Ambiguity resolution ratio:** 6/6 (100%; all six ambiguities resolved with explicit confidence levels — HIGH on 3, MEDIUM-HIGH on 1, MEDIUM on 2)
- **SV delta:** SIGNIFICANT — SV1 was generic (annotation or protocol, maybe four kinds); SV6 has TWO-LAYER architecture, FOUR named content kinds, SECTION-LEVEL default, HUMAN-AUTHOR-DECLARED, FIRST-TOUCH adoption, MARKDOWN-NATIVE, PAIRED-WITH-PROTOCOL, SAFE-DEFAULT-UNCERTAIN, 10 named open design choices (D-1..D-10). Substantial structural shift.
- **Anchor diversity:** 7 constraints + 8 key insights + 8 structural points + 5 principles + 11 meaning-nodes = 39 anchors across all 5 anchor types. All five types represented.
- **Failure modes observed:**
  - Status Quo Bias: not observed — the inherited 5×11 taxonomy was extended (Layer 1 + Layer 2) rather than defended-because-existing.
  - Premature Stabilization: not observed — six ambiguities surfaced and resolved; counter-interpretations explicitly stated for each.
  - Anchor Dominance: not observed — no single anchor (constraint or insight) does all the work; the design integrates multiple anchors (C1, C2, K1, K7, K8 all load-bearing).
  - Perspective Blindness: not observed — Frame-exit Completeness perspective explicitly fired (gating predicate met) and produced A-frame-1.
  - Clean Resolution Trap: not observed — every ambiguity resolution stated the strongest counter-argument and tested it on structural grounds; Ambiguity #6 (compliance residual) explicitly preserved as residual not falsely resolved.
  - Self-Reference Blindness: PARTIALLY OBSERVED — this sensemaking is producing the design problem-model for an inquiry about the project's own docs/ folder. There IS a slight self-reference (Sensemaking discipline is itself a docs/ file at `docs/thinking_disciplines/archive/sensemaking.md` AND `cognitive_harness/sense-making/references/sensemaking.md`). External grounding applied via the 22 external structural patterns surfaced from neighbor domains (EP-1 through EP-22) and 6 AI-specific patterns (AP-1 through AP-6) — the design framework is informed by patterns the project did not invent, not by docs/ self-evaluation.

**Overall: PROCEED** — sufficient anchor diversity, six ambiguities resolved with structural counter-arguments tested, SV delta significant, no failure-mode flags raised beyond the partial self-reference (mitigated by external grounding via R-EXTERNAL surfacing).
