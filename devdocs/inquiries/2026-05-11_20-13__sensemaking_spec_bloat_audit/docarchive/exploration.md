# Exploration: Sensemaking Spec Bloat Audit

## User Input

Source: `/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-11_20-13__sensemaking_spec_bloat_audit/_branch.md`

Question (restated): which lines in `homegrown/sense-making/references/sensemaking.md` (current state, 383 lines) contain project-specific governance bloat that doesn't belong in a pure discipline reference spec?

---

## 1. Mode and Entry Point

**Mode: artifact.** The territory is the existing `sensemaking.md` file — concrete objects (lines) to find.

**Entry point: signal-first.** The user provided two strong signals: (a) the example bloat line they caught in the recent Meta-Inspection edit (referencing "≥3-instance Step 5 threshold or via project iteration"); (b) the underlying criterion — would a generic practitioner using sensemaking on an unrelated project find this text meaningful? Probe the signals, then systematically scan the rest of the spec.

**Discrimination criterion (the universal-discipline test).** A line is BLOAT if it requires knowledge of THIS PROJECT'S specific governance, inquiries, or operational artifacts to be meaningful. A line is UNIVERSAL if it describes how sensemaking works in any context.

---

## 2. Coarse Scan — Bloat categories to watch for

| Category | Signal pattern |
|---|---|
| Project meta-protocol thresholds | "≥N instances," "Step 5," revival triggers, threshold-gated promotion |
| Project-corpus references | "across the corpus," "from the corpus chain," "across our inquiries" |
| Specific-inquiry / specific-finding references | Inquiry IDs (`13-30`, `14-00`); specific finding paths |
| Project-tool references | "/MVL," "/MVL+," "meta-loop," "metaloop-ladder" |
| Project-internal artifacts | "session-architecture finding," "the loop," "the project's vocabulary" |
| Failure-mode-promotion procedures | "consider promoting X to a separate named failure mode" |
| Project-specific terminology | "trigger-classifier rules," "loop-coined neologism," "operation names" |
| "Frontier flag" / governance parentheticals | Inline parentheticals about when to revisit / promote / monitor at project level |

---

## 3. Systematic line-by-line scan

### Section: Header + Framework intro (lines 1-58)

Lines 1-58 describe what Sensemaking IS, two structural operations (Comprehending + Stabilizing), Key Components (Cognitive Anchors; Boundary Construction). All universal. **No bloat.**

### Section: Process Model (lines 88-122)

Lines 88-120 describe the five phases (Signal Detection; Anchor Extraction; Perspective Expansion; Boundary Formation; Conceptual Stabilization). Universal.

Line 122: `The process is iterative and recursive rather than strictly linear. (For the model-misfit case where stabilization is being attempted but the model keeps requiring revision, see the Accommodation trigger refinement at Phase 5 Conceptual Stabilization in the Execute section.)`

**Internal cross-reference; not bloat.** References the spec's own Accommodation trigger refinement (internal structure of the same spec). Universal.

### Section: Saturation Indicators (lines 126-135)

Four indicators: perspective saturation, ambiguity resolution ratio, SV delta, anchor diversity. All universal. **No bloat.**

### Section: Failure Modes (lines 139-191)

Six failure modes with "Feels like" + "Corrective." All universal mechanics of sensemaking. The corrective questions are meta-questions but applicable to any sensemaking situation. **No bloat.**

The Premature Stabilization corrective (line 159) references multiple refinement notes by name + "in the Execute section" — internal cross-references. Not bloat.

### Section: Standard Analysis Protocol (lines 195-204)

Six-step summary. Universal. **No bloat.**

### Section: Execute the Following Process (lines 207 onward)

Phase 1 — Cognitive Anchor Extraction (lines 219-231): five anchor types. Universal. **No bloat.**

Phase 2 — Perspective Checking (lines 235-278): perspective list (Technical/Logical; Human/User; Strategic/Long-term; Risk/Failure; Resource/Feasibility; Ethical/Systemic). All universal.

**Definitional / Internal Consistency** (line 245): mostly universal. **No bloat.**

**Definitional / Frame-exit Completeness** (lines 247-265): the core procedure is universal (four meta-categories: Existence Enumeration, Role Assessment, Verdict Rigor, Residual Coverage Justification). BUT the positive example on line 261 is bloat. See B1 below.

**Phase / Calibration-State perspective requirement refinement** (lines 272-274): universal. No bloat.

Phase 3 — Ambiguity Collapse (lines 282-344):
- Core procedure (lines 282-330): universal.
- **Load-bearing concept test refinement** (lines 334-340): the structural concept is universal but the WORDING uses project-specific terminology ("the loop's verdict," "the project's actual property/principle," "loop-coined neologism," "trigger-classifier rules"). See B3, B4 below.
- **Specific-vs-pattern recognition cue** (line 344): wording is mostly universal but includes "(e.g., observations from one inquiry, instances from one corpus chain)" — mildly project-flavored. See B5.

Phase 4 (lines 352-364): universal. **No bloat.**

Phase 5 — Conceptual Stabilization (lines 368-378):
- Core procedure (lines 368-374): universal.
- **Accommodation trigger refinement** (line 378): mostly universal — the structural concept (model misfit, drop back to Phase 2) is universal. BUT the trailing parenthetical "(Frontier flag: if N≥2 model-misfit instances emerge across the corpus, revisit this anchor decision and consider promoting Accommodation trigger to a separate named failure mode.)" is BLOAT. See B2 below.

---

## 4. Bloat Inventory

### B2 — Accommodation trigger "Frontier flag" parenthetical (line 378, MOST SIMILAR TO USER'S EXAMPLE)

**Literal text:** `(Frontier flag: if N≥2 model-misfit instances emerge across the corpus, revisit this anchor decision and consider promoting Accommodation trigger to a separate named failure mode.)`

**Why bloat:**
- "N≥2 instances" — project meta-protocol concept (instance-threshold-gated promotion is governed by `homegrown/protocols/loop_diagnose.md`).
- "across the corpus" — references THIS PROJECT'S corpus of inquiries.
- "promoting Accommodation trigger to a separate named failure mode" — failure-mode coinage is project meta-protocol governance.

**Structural content to preserve:** none — the Accommodation trigger's structural content (model-misfit detection; drop back to Phase 2) is already universal in the preceding sentences. The Frontier-flag parenthetical adds NO universal content; it's purely project governance.

**Where it should live instead:** in a project-meta-doc (e.g., `homegrown/protocols/loop_diagnose.md` already governs ≥3-instance failure-mode coinage; the Accommodation-trigger promotion threshold could live alongside other project-meta procedures) or in the originating inquiry's finding.

**Confidence: HIGH — same pattern the user already caught in the Meta-Inspection edit.**

### B1 — Frame-exit Completeness positive example (line 261)

**Literal text:** `Example (positive — gating fires): a metaloop-ladder inquiry inherits "Memory" from a prior session-architecture finding and uses it across 6 levels with distinct propositions per row. Existence Enumeration's TYPE-axis prompt surfaces three referent types — human-mental memory; system-written md files (e.g., per-inquiry md files written by /MVL or /MVL+ runners); runtime in-memory state. The meta-loop frame's scope includes only the first; the other two are excluded. Role Assessment finds the md-file referent load-bearing (persistent memory across inquiries). Verdict: re-locate, not exclude.`

**Why bloat:**
- "metaloop-ladder inquiry" — project-specific inquiry type.
- "prior session-architecture finding" — references a specific previous project finding.
- "/MVL or /MVL+ runners" — project-specific tooling.
- "per-inquiry md files written by /MVL or /MVL+ runners" — project-specific operational artifact.
- "the meta-loop frame" — project-specific concept.
- "persistent memory across inquiries" — project-specific operational concept.

A generic practitioner encountering this example would not understand what "/MVL+" or "metaloop-ladder" or "session-architecture finding" means. The example requires project knowledge to parse.

**Structural content to preserve:** the example DEMONSTRATES the four meta-categories (Existence Enumeration → TYPE-axis prompt surfaces multiple referent types; Role Assessment → load-bearing referent found; Verdict → re-locate not exclude). The demonstration is valuable; the project-specific labels are not.

**Where it should live instead:** keep the positive example in the spec, but REPLACE the project-specific labels with generic ones. E.g., "a research-program ladder inquiry inherits 'access' from a prior architecture finding; Existence Enumeration surfaces three access-types (read-access; write-access; permission-grant); ..." Generic terms that demonstrate the same procedure without requiring project knowledge.

**Confidence: HIGH** — the example is clearly project-specific.

### B3 — Load-bearing concept test "the loop" / "the project" wording (lines 334, 336, 337, 338)

**Literal text excerpts:**
- Line 334: "removing it would change the loop's verdict"
- Line 336: "or an external default the loop adopted without testing"
- Line 336: "project axioms (Foundational Principles)"
- Line 337: "Does this term match the project's actual vocabulary and the user's language, or is it a loop-coined neologism that hasn't been validated?"
- Line 338: "or has the loop coined a name without validation"

**Why bloat:**
- "the loop" — project-specific term for the cognitive loop (MVL+/MVL/SIC). A generic practitioner using sensemaking standalone has no "loop"; they have "the analysis" or "the inquiry."
- "the project's actual vocabulary" — flips inquiry-scope vocabulary to project-scope, which conflates levels.
- "loop-coined neologism" — assumes a multi-discipline loop context.
- "project axioms" — assumes a project context.

These are MILD bloat — the structural concept (test whether a load-bearing concept is the analysis's actual property or an external default the analysis adopted) is universal; the phrasings just use project-vocabulary by default.

**Structural content to preserve:** all of the test predicate logic. Only the WORDING needs cleanup.

**Where it should live instead:** stays in the spec, reworded. E.g., "the analysis's verdict" instead of "the loop's verdict"; "an external default the analysis adopted" instead of "an external default the loop adopted"; "the inquiry's actual vocabulary and the user's language" instead of "the project's actual vocabulary"; "an analysis-coined neologism" instead of "loop-coined neologism."

**Confidence: MEDIUM** — borderline; not as severe as B1 or B2 but the wording assumes project context.

### B4 — Load-bearing concept test "trigger-classifier rules" (line 338)

**Literal text:** "Phase 5 / Conceptual Stabilization output — final committed concepts (especially trigger-classifier rules and concepts whose use depends on a runtime determination)"

**Why bloat:** "Trigger-classifier rules" is project-specific terminology (it comes from project inquiries about how rules trigger and classify). A generic practitioner has no "trigger-classifier rules" concept.

**Structural content to preserve:** the broader claim — that concepts whose use depends on a runtime determination need extra testing — is universal. The specific term "trigger-classifier rules" is project-coined.

**Where it should live instead:** stays in the spec, reworded. E.g., "final committed concepts (especially rules whose firing depends on a runtime determination, and concepts whose application depends on a runtime check)" — generalizes "trigger-classifier rules" to "rules that fire on runtime determinations."

**Confidence: MEDIUM** — terminology bloat.

### B5 — Specific-vs-pattern recognition cue "corpus chain" wording (line 344)

**Literal text:** "particularly when that concept appears as a Phase 1 / Key Insight built from a small set of specific examples (e.g., observations from one inquiry, instances from one corpus chain)"

**Why bloat:** "From one inquiry, instances from one corpus chain" — "inquiry" and "corpus chain" are project-specific terms. A generic practitioner has "one analysis" or "one observation set."

**Structural content to preserve:** the structural cue (Key Insight built from few examples → test whether they're the whole story) is universal.

**Where it should live instead:** stays in the spec, reworded. E.g., "(e.g., observations from one analysis session, instances from one investigation chain)" or just "(e.g., from a small set of observations or one chain of related cases)."

**Confidence: LOW-MEDIUM** — minor terminology issue; meaning is preserved either way.

---

## 5. Cycle: Probe — usage of "project-wide" in Frame-exit Completeness

The Frame-exit Completeness perspective uses "project-wide" repeatedly (lines 247, 253):
- "Does the inquiry's frame's anchor-set EXCLUDE referents that exist project-wide..."
- "Ask: 'What does this term refer to project-wide, regardless of the inquiry's frame?'"
- "List each project-wide referent."

**Is this bloat?**

Two readings:
- (universal) "project-wide" = "across the broader scope outside the inquiry's frame." Universal interpretation; just a way of naming the scope outside the frame.
- (project-specific) "project-wide" = "across THIS specific project's corpus." Project-specific reading.

The structural role of the term is universal — it names the broader scope outside the inquiry's frame. But the word "project" implies a project context.

**Verdict:** mild stylistic bloat. The term "scope-wide" or "frame-exterior" would be more universal. Not severe; structural meaning is preserved either way. **Flag as B6 (low priority).**

---

## 6. Cycle: Probe — internal cross-references

The spec has many internal cross-references like "see the Accommodation trigger refinement at Phase 5 Conceptual Stabilization in the Execute section." These are NOT bloat — they reference the spec's own internal structure. Universal.

Internal cross-references → keep.

---

## 7. Cycle: Probe — failure-mode internal numbering ("failure mode #2," "failure mode #4," etc.)

Lines like "instance of Perspective Blindness (failure mode #4) applied to the calibration-state axis" use internal numbering. The numbering is internal to the spec — a generic practitioner can find "failure mode #4" in the same spec. **NOT bloat.**

---

## 8. Frontier State

**Frontier: STABLE.** Three cycles + systematic line scan produced:
- 2 HIGH-confidence bloat instances (B1, B2 — substantial project-specific content)
- 2 MEDIUM-confidence bloat instances (B3, B4 — terminology bloat)
- 1 LOW-MEDIUM bloat instance (B5)
- 1 stylistic flag (B6 — "project-wide")

No additional bloat surfaced in last cycle.

---

## 9. Confidence Map

| Region | Confidence | Note |
|---|---|---|
| B1 Frame-exit positive example (line 261) | HIGH bloat | Project-specific example references /MVL, /MVL+, metaloop-ladder, session-architecture finding |
| B2 Accommodation trigger Frontier-flag parenthetical (line 378) | HIGH bloat | Same pattern user caught — N≥2, "across the corpus," failure-mode coinage |
| B3 Load-bearing concept test "the loop" wording (lines 334, 336, 337, 338) | MEDIUM bloat | Terminology assumes project context; structural content universal |
| B4 "Trigger-classifier rules" (line 338) | MEDIUM bloat | Project-coined term; broader concept universal |
| B5 "From one inquiry, instances from one corpus chain" (line 344) | LOW-MEDIUM bloat | Minor terminology |
| B6 "project-wide" usage in Frame-exit (multiple lines) | STYLISTIC flag | Universal under generous reading; could be "scope-wide" |
| Process Model section (lines 88-122) | UNIVERSAL | No bloat |
| Saturation Indicators (lines 126-135) | UNIVERSAL | No bloat |
| Failure Modes (lines 139-191) | UNIVERSAL | No bloat |
| Standard Analysis Protocol (lines 195-204) | UNIVERSAL | No bloat |
| Phase 1-5 core procedures | UNIVERSAL | No bloat |
| Internal cross-references | UNIVERSAL | Keep |
| Failure-mode numbering | UNIVERSAL | Keep |

---

## 10. Jump scan — challenge the user's framing

**Counter-direction:** is some "bloat" actually load-bearing project-context that practitioners NEED to understand the procedure?

Examples examined:
- B1 (Frame-exit positive example): the procedure is abstract; an example is genuinely useful. The PROJECT-SPECIFIC labels in the example are bloat; the EXAMPLE structure (a ladder inquiry inherits a term used across multiple levels; type-axis surfaces multiple referent types) is valuable for grounding. Fix: generalize the example labels, keep the structure.
- B2 (Accommodation trigger Frontier flag): the structural concept (model misfit detection) is already covered in the preceding sentences. The Frontier flag adds zero universal content. Fix: delete entirely.
- B3-B5 (terminology): the structural content is universal; only the wording is project-flavored. Fix: reword.

**Verdict on counter-direction:** the bloat is real in all 6 cases. None of the bloat is load-bearing for the structural procedure. Fix shapes differ (delete vs reword vs generalize-example).

---

## 11. Gaps and Recommendations

### Known gaps (bounded)

- This audit covered `homegrown/sense-making/references/sensemaking.md` only. The OTHER discipline specs (`homegrown/explore/references/explore.md`; `homegrown/decompose/references/decompose.md`; `homegrown/innovate/references/innovate.md`; `homegrown/td-critique/references/td-critique.md`) may have similar bloat — out of scope here.

### Recommendations for next disciplines

- **Sensemaking** should adjudicate per-bloat-instance fix shape (delete vs reword vs generalize-example) and confidence calibration. Apply the universal-discipline test rigorously.
- **Decomposition** should partition the cleanup into pieces (HIGH-confidence deletions vs MEDIUM-confidence rewordings vs LOW-confidence stylistic flags).
- **Innovation** should draft the cleaned text for each bloat instance.
- **Critique** should verify the cleaned text preserves structural content + remains universally applicable.

---

## 12. Convergence Assessment

- **Frontier stability:** STABLE. Last cycle (jump scan) refined existing regions; did not open new region.
- **Declining discovery rate:** YES.
- **Bounded gaps:** YES. Cross-discipline-spec audits flagged as out-of-scope.

**All three convergence criteria met.**

**Premature Evaluation in Possibility Mode guardrail:** the audit did not pre-reject any candidate bloat instance. Each is flagged with confidence level for Sensemaking to adjudicate. Multiple HIGH/MEDIUM/LOW labels prevent binary "is/isn't bloat" rejection.

**Convergence: PASS.** Hand off to Sensemaking.

---

## 13. Telemetry

- Regions scanned: 8 sections of sensemaking.md + 2 cycles + jump scan
- Signals detected: 6 bloat candidates (2 HIGH; 2 MEDIUM; 1 LOW-MEDIUM; 1 stylistic)
- Probes conducted: 3 (the Frame-exit example; the Accommodation trigger Frontier flag; the Load-bearing concept test wording)
- Frontier state: STABLE
- Failure modes observed: None — Premature Depth avoided (systematic line scan; not just probing user's example); Surface-Only Scanning avoided (3 probes); False Confidence prevented (jump scan tested counter-direction); Premature Termination prevented (convergence criteria explicitly checked).
