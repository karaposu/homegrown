# Exploration: CONCLUDE Anchored-References Rule Gap

## Mode + Entry Point

- **Mode:** Artifact (the rule and failure case are concrete files) + light Possibility (categorize candidate fix-locations).
- **Entry:** Signal-first (failure identified; question is why + how to fix).

---

## Tag Legend

- **Strength:** CONFIRMED (direct citation) / SCANNED (interpreted) / DEFERRED (acknowledged but unspecified in source)
- **Why-it-matters:** 1-line; informs the diagnosis or the fix

---

## Category A — The rule as written

| # | Item | Source | Strength | Why it matters |
|---|---|---|---|---|
| A1 | Non-ambiguity principle: "Each sentence must be understandable to a reader with no prior exposure to this inquiry." Failure mode named: "internally-referential shorthand." | conclude.md L64-67 | CONFIRMED | The OUTER principle covers the failure — but is stated at sentence level, not at convention/system level |
| A2 | Anchored references rule (style rule #5): "When referring to a numbered item, named concept, or earlier decision, always include the short descriptive name on first use in each section not just the label. 'Item 3' alone is a defect; 'Item 3 (the continuous-loop runner)' is correct." | conclude.md L222-223 | CONFIRMED | The SPECIFIC rule meant to operationalize A1 for labels |
| A3 | Examples in conclude.md cover: "the current Probe section", "Surface-Only Scanning failure mode", "Coarse Scan", "Item 3" — all positional/named labels indexed into known structures (a spec, a list, a discipline) | conclude.md L75-89 | CONFIRMED | NONE of the examples cover an internal letter+number ID system from a discipline workspace |
| A4 | Style rule applies "throughout the finding"; the principle applies "to every sentence" | conclude.md L65, L216 | CONFIRMED | Scope is broad; gap is not scope but coverage of failure shape |

---

## Category B — The failure case (D2/E1/E7 in the navigation-audit finding)

| # | Item | Source | Strength | Why it matters |
|---|---|---|---|---|
| B1 | Tier-1 challenge candidates appear as bold headings: "**D2 — 12 required fields per route**" (and similar for E1/E7/I2/O2) | finding.md L51, 54, 57, 60, 63 | CONFIRMED | At THIS line shape, the rule fires syntactically (ID + descriptive name paired) |
| B2 | Foreground summary uses parenthetical decode: "D2 (12 required route fields), E1 (16-type taxonomy), E7 (auto-derivable vs human-judgment partition)..." | finding.md L14 | CONFIRMED | Same as B1 — pair attached |
| B3 | But also bare-ID usages: "those are the strongest restructuring candidates" with "(iterated) markers on D2, E1, I2" | finding.md L160 | CONFIRMED | Bare IDs without descriptive name on subsequent reference — even the syntactic rule fails here |
| B4 | "matches I2; route-expansion-fields → D2; recursive/multi-resolution → E1" — bare IDs in prose | finding.md L174 | CONFIRMED | Same as B3 |
| B5 | "If the user accepts a Tier-1 challenge candidate (D2, E1, E7, I2, or O2)" — bare ID list | finding.md L198 | CONFIRMED | Same as B3 |
| B6 | Footnote-style aside in background: "*(I2's element-count is foreground)*" | finding.md L110 | CONFIRMED | Bare ID; no decode |
| B7 | The category-letter system itself (A through Q) is NEVER introduced in finding.md | finding.md (whole file) | CONFIRMED | The reader sees "D2" with no idea what "D" indexes into |

---

## Category C — The gap (rule's coverage vs failure shape)

| # | Item | Source | Strength | Why it matters |
|---|---|---|---|---|
| C1 | The rule's example covers a label INDEXED INTO A KNOWN STRUCTURE ("Item 3" of a numbered list the reader can see) | conclude.md L222-223 | CONFIRMED | The label there is positional within a context the reader already perceives |
| C2 | The failure case has labels INDEXED INTO AN UNINTRODUCED SCAFFOLDING SYSTEM (Categories A-Q from exploration.md, never explained in finding.md) | B7 + A3 | CONFIRMED | The SHAPE of the failure differs from the shape the rule's example covers |
| C3 | The syntactic application of the rule (pair label with descriptive name) doesn't address the semantic problem (the system the label indexes into is unintroduced) | A2 + B1 + B7 | CONFIRMED | This is the "syntactic-vs-semantic gap" — rule fires per-line but fails per-document |
| C4 | The non-ambiguity principle (A1) WOULD cover this if applied at convention/system level — "the reader doesn't know what D-category is" — but the principle's stated check is sentence-level | conclude.md L66 + B7 | SCANNED | The outer principle has the answer; the operationalization (style rule + examples) doesn't extend it |
| C5 | The rule also failed at simple syntactic level on lines 160, 174, 198 — bare IDs without descriptive names on subsequent reference | B3 + B4 + B5 | CONFIRMED | This is a separate, simpler failure — even the rule-as-written wasn't applied consistently |

---

## Category D — Origin of internal IDs

| # | Item | Source | Strength | Why it matters |
|---|---|---|---|---|
| D1 | Exploration produced a tabular enumeration with categories A-Q and items 1-N within each category (D1 = Category D Item 1 = "Output = navigation map") | docarchive/exploration.md L25-219 | CONFIRMED | Direct origin |
| D2 | The category-letter + item-number convention is exploration's internal cross-reference scheme | docarchive/exploration.md (whole file) | CONFIRMED | It's a workspace convention, not a finding-level naming system |
| D3 | The convention served real purpose during the discipline runs — sensemaking referenced "D2 (12 required fields)" to test claims; critique used the IDs to track per-item refinements | docarchive/sensemaking.md, critique.md (referenced earlier) | SCANNED | The IDs are useful WITHIN the discipline workspace |
| D4 | Other disciplines may produce similar scaffolding: decomposition's piece labels (P1-P5), sensemaking's sense-version labels (SV1-SV6), innovation's variant labels (P1-A, P2-B etc.) | discipline outputs in same docarchive | CONFIRMED | Pattern is generic across discipline outputs |
| D5 | Discipline output specs (`/explore/`, `/decompose/`, `/sense-making/`) DO NOT prohibit internal IDs and DO NOT mark them as workspace-only | greps for "scaffolding|workspace|internal ID" returned 0 results in those specs | CONFIRMED | No upstream guidance to keep them out of finding |

---

## Category E — Adjacent rule landscape

| # | Item | Source | Strength | Why it matters |
|---|---|---|---|---|
| E1 | MVL+ workspace invariant prohibits "writing all discipline outputs and `finding.md` in one edit"; says discipline workspaces and finding-compilation are separate stages | MVL+ SKILL.md L33-40 | CONFIRMED | The separation IS enforced — but the invariant addresses ORDER, not CONTENT-CLEANUP |
| E2 | No spec contains "strip internal IDs," "scaffolding cleanup," "decode workspace labels" guidance | grep results across all 5 specs | CONFIRMED | Confirmed absent — the guidance simply doesn't exist |
| E3 | conclude.md's quality test asks "Can someone read ONLY `finding.md` ... at normal reading speed without backtracking?" | conclude.md L237-241 | CONFIRMED | The quality test WOULD catch this — but is positioned as a check after writing, not a constraint during writing. And it didn't catch this in our case (CONCLUDE proceeded without explicitly running it) |
| E4 | conclude.md plain-language preference: "Use the simplest accurate phrasing" | conclude.md L91, L128 | CONFIRMED | Internal IDs are not "simplest accurate phrasing" — they're maximally ambiguous to the reader |

---

## Category F — Candidate fix-locations

| # | Candidate fix | Where it lives | Pros | Cons |
|---|---|---|---|---|
| F1 | **Strengthen the rule's example.** Add a second example covering internal-ID-from-discipline-workspace shape: "D2" alone is a defect; "D2 (12 required fields per route — Item 2 from exploration's category-letter enumeration)" is one fix; preferable: drop the ID entirely and use only the descriptive name. | conclude.md L222-223 | Minimal change; surgical | Same rule shape; may still miss future variants |
| F2 | **Add an explicit CONCLUDE step.** "Step 2.5 — Strip workspace scaffolding. Before saving finding.md, scan for category-letter+number IDs (D2, E7), piece labels (P1, P2-B), sense-version labels (SV3, SV6), or other discipline-workspace scaffolding. Replace with descriptive names; if descriptive names alone read awkwardly, drop the references entirely. The finding's reader has not seen the discipline outputs." | conclude.md, new step between 2 and 3 | Explicit; covers the pattern, not just the example | Adds a step; if not enforced, drift |
| F3 | **Tighten the existing quality test.** Change "Can someone read ONLY finding.md ... without backtracking" to specifically require: "Each label, ID, or reference is decoded WITHIN the finding using its descriptive name; no IDs index into systems the reader hasn't been introduced to." | conclude.md L237-241 | Operationalizes the existing quality test | Still post-hoc; relies on the test being run |
| F4 | **Discipline-output convention change.** Add to each discipline's spec: "Internal IDs (category letters, item numbers, piece labels) are workspace conventions; they MUST NOT appear in finding.md. CONCLUDE strips them." | each discipline spec or shared convention doc | Clear ownership; addresses the source | Multiple files to change; coordination cost |
| F5 | **Prohibit IDs in finding.md outright.** Add to conclude.md: "Finding.md must not contain internal IDs from discipline workspaces (D2, E7, P1-B, SV3, etc.). Use descriptive names only." | conclude.md, new style rule | Strong, simple rule | Throws baby out with bathwater — IDs sometimes useful for cross-reference within the finding (e.g., a list with numbered items where each is referenced later) |
| F6 | **Generalize the existing rule.** Reword "Anchored references" to: "Every label or ID must be paired with its descriptive name on first use, AND must be either (a) a positional label inside a numbered list visible in the same section, OR (b) explicitly introduced as a system the reader is now using. Internal IDs from discipline workspaces fail (b) by default — strip them or introduce the system." | conclude.md L222-223 | Covers both syntactic and semantic gap | Long; rules with two clauses harder to enforce |

---

## Cross-Category Synthesis

### The gap shape (what the rule misses)

The rule's example covers **positional labels inside an introduced structure** (Item 3 of a list the reader sees). The actual failure case is **labels indexing into an UNINTRODUCED scaffolding system** (Categories A-Q from a workspace file the reader doesn't see). The rule fires syntactically (descriptive name paired) without addressing the semantic problem (the system itself is unexplained).

### Compounding factor

The rule ALSO failed at simple syntactic level on multiple lines (160, 174, 198 — bare IDs without descriptive names attached on subsequent reference). So there are TWO problems: (1) inconsistent application of the rule-as-written; (2) the rule-as-written wouldn't have caught the deeper case anyway.

### Fix-space topology

- **Surgical fixes** (F1, F3): tighten existing wording / add an example. Low cost; may miss future variants.
- **Stage-level fixes** (F2): add an explicit CONCLUDE step that strips workspace scaffolding. Moderate cost; covers the pattern.
- **Convention-level fixes** (F4): change discipline-output guidance to mark IDs as workspace-only. Higher coordination cost; addresses the upstream source.
- **Strict prohibition** (F5): ban IDs in finding entirely. Strong but blunt.
- **Generalized rule** (F6): rewrite the rule to cover both syntactic and semantic dimensions. Cleaner; longer.

### Convergence area

F2 (CONCLUDE step) + F1 (rule example refinement) together would close both gaps. F6 alone might suffice but has the longest wording. F4 alone misses the case where discipline-output IDs are useful internally.

---

## Frontier Stability + Convergence Check

- **Frontier stability:** YES. Rule text + failure case + adjacent specs scanned. No further territory unexplored that would change the diagnosis.
- **Declining discovery rate:** YES. Additional grep / spec-reading would re-confirm what's already mapped (no IDs guidance anywhere).
- **Bounded gaps:** YES. Remaining unknowns are about which fix is best (sensemaking + critique territory), not about more failure shapes.
- **Jump scan:** Tested — checked whether discipline specs OR runner spec OR adjacent commands have any "scaffolding cleanup" guidance. None do (E2). Frontier confirmed stable.

**Convergence: ACHIEVED.**

---

## Recommendations for next disciplines

- **Sensemaking:** stabilize the gap shape (syntactic-vs-semantic distinction); confirm the compounding factor (inconsistent application of rule-as-written); decide whether the fix should be surgical or stage-level.
- **Decomposition:** likely small — the fix space partitions into (a) rule text, (b) CONCLUDE step, (c) discipline convention. Pick which one(s) to commit to.
- **Innovation:** generate the actual fix text for the chosen location(s).
- **Critique:** test that the fix doesn't replace one gap with another (e.g., F5's blunt prohibition kills useful cross-references; F6's generality may be too long).
