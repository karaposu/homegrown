## User Input

```
devdocs/inquiries/2026-05-10_06-00__conclude_anchored_refs_rule_gap/_branch.md

[Generate concrete content per piece — Fix-A rule rewrite + Fix-B compile-step text + diagnosis + reasoning + closing. Apply 7 mechanisms; pick best assembly. Anti-bloat HARD constraint.]
```

---

# Innovation: CONCLUDE Anchored-References Rule Gap

## Intuition + Direction

**Context:** the user wants a self-enforcing fix; not a style preference. The fix has to actually fire on the next CONCLUDE run.

**Valuation:** the fix is high-value if (a) it would have caught the navigation-audit's D2/E1/E7 leak, (b) it doesn't kill useful within-finding cross-references, (c) it's editable to conclude.md in <5 minutes.

**Direction:** every piece optimizes for **drop-in applicability** — the user copies text, pastes into conclude.md, done.

---

## P2 — Fix-A: Rule-text rewrite (variants)

### Variant P2-A — Surgical (F1-style: add a second example)

```
**Anchored references.** When referring to a numbered item, named concept,
or earlier decision, always include the short descriptive name on first use
in each section AND on every subsequent reference, not just the label.
"Item 3" alone is a defect; "Item 3 (the continuous-loop runner)" is correct.

The rule covers two label shapes:

(a) **Positional labels** in a structure the reader can see in the same
section (e.g., "Item 3" of a numbered list). Pair with the descriptive name.

(b) **Workspace scaffolding labels** that index into a system the reader
has NOT been introduced to (e.g., category-letter IDs from exploration like
"D2", piece labels from decomposition like "P1", sense-version labels like
"SV6", variant labels like "P2-A"). Either drop the label entirely (use only
the descriptive name) or introduce the system explicitly in the same section.
Default: drop. The descriptive name reads cleaner; the label was workspace
convenience.
```

Pros: preserves the original rule shape; adds the missing case explicitly; the example tier-grouping makes the distinction visible.
Cons: longer than original.

### Variant P2-B — Generalized (F6-style: rewrite the rule)

```
**Anchored references.** Every label or ID used in the finding must be either:

(a) a positional reference inside a structure the reader can see in the same
section (e.g., "Item 3" of a visible numbered list — pair with "Item 3
(the continuous-loop runner)"), OR

(b) the descriptive name itself, with no label kept (workspace scaffolding
IDs — category letters from exploration, piece labels from decomposition,
sense-version labels, variant labels — must NOT appear in the finding;
their underlying systems are not introduced to the reader).

The non-ambiguity principle (above) requires the reader to decode references
without scrolling up; labels indexing into uninstalled systems fail that test.
"Item 3" alone is a defect; "Item 3 (the continuous-loop runner)" is correct;
"D2" is a defect even when paired with "12 required fields" because the
D-category was never introduced.
```

Pros: covers both cases in a single rule structure; explicit pointer to the principle; concrete example shows D2-style failure.
Cons: longer; more complex grammar.

### Test cycle for Fix-A variants

| Variant | Novelty | Survival | Fertility | Actionability | Mech.indep. |
|---|---|---|---|---|---|
| P2-A | LOW (additive) | YES | YES | HIGH (drop-in) | YES |
| P2-B | MEDIUM (restructured) | YES | YES | HIGH | YES |

**Recommended: P2-A** — surgical addition preserves the existing rule shape, easier to apply (smaller diff), and the (a)/(b) tier-grouping makes the distinction visible without restructuring the prose. P2-B is a runner-up if the user prefers a single coherent statement.

---

## P3 — Fix-B: Compile-step text (variants)

### Variant P3-A — New explicit step in CONCLUDE Step 2 (F2-style)

```
### Step 2.5 — Strip workspace scaffolding-IDs

Before saving `finding.md`, scan its content for workspace scaffolding-IDs
that may have been carried forward from discipline outputs. Patterns to
detect:

- single uppercase letter + digit (e.g., `D2`, `E1`, `I2`, `O2`)
- `P` + digit (e.g., `P1`, `P5`) — decomposition piece labels
- `P` + digit + `-` + uppercase letter (e.g., `P2-A`, `P3-B`) — innovation
  variant labels
- `SV` + digit (e.g., `SV1`, `SV6`) — sense-version labels
- letter + digit ranges (e.g., `A1-A3`, `J1-J8`) — exploration sub-ranges

For each match: replace the ID with its descriptive name (the words paired
with it in the same paragraph), or — if the descriptive name alone reads
awkwardly — restructure the sentence to drop the reference. Do not "introduce"
the workspace system in the finding; the discipline workspaces are archived
to `docarchive/` precisely because they are workspace conventions, not
reader-facing.

Exception: positional labels inside a numbered list visible in the same
section of the finding (e.g., "MUST item 3") may keep their label, paired
with the descriptive name per the Anchored references rule.

If any matches remain after this scan, the finding fails the non-ambiguity
principle (Step 2 above) and must be revised before saving.
```

Pros: self-enforcing (numbered step in the protocol); concrete pattern list; explicit exception for legitimate labels.
Cons: ~150 words — longer than ideal but covers what's needed.

### Variant P3-B — Tighten existing quality test (F3-style)

```
### Quality test (modified)

After writing the finding, ask: *"Can someone read ONLY `finding.md`,
at normal reading speed without backtracking, and understand the
complete decision?"* If no — if the reader needs to re-read paragraphs,
scroll up to decode references, or consult other files to understand
the verdict — the finding has failed the test. Revise.

**Specific check before declaring the test passed:** scan the finding for
workspace scaffolding-IDs (single-uppercase-letter+digit like `D2`/`E1`;
`P` + digit; `SV` + digit; variant labels like `P2-A`; letter+digit ranges
like `A1-A3`). These are discipline-workspace conventions and the reader has
NOT been introduced to them. Each match is a non-ambiguity-principle defect:
either replace with the descriptive name or restructure to drop the reference.
Positional labels inside a numbered list visible in the same finding section
(e.g., "MUST item 3") may keep their label, paired with the descriptive name.
```

Pros: keeps the existing quality-test framing; integrates the check naturally; one fewer step in the protocol.
Cons: still depends on the writer running the quality test (which arguably depends on the same vigilance the existing rule assumes).

### Test cycle for Fix-B variants

| Variant | Novelty | Survival | Fertility | Actionability | Mech.indep. |
|---|---|---|---|---|---|
| P3-A | MEDIUM (new explicit step) | YES | HIGH (self-enforcing) | HIGH | YES |
| P3-B | LOW (tightening existing) | YES | MEDIUM (still vigilance-dependent) | MEDIUM-HIGH | YES |

**Recommended: P3-A** — explicit step is more self-enforcing than tightening a quality test that the writer might or might not run. The user's framing ("rule didn't fire") is exactly what P3-A addresses: a numbered step gets done; a tighter quality-test still depends on the writer running it.

### Self-application: does P3-A's pattern list actually work?

Walk through the navigation-audit finding to verify the patterns catch all leaks:

| Line in finding.md | Token | Pattern matched | Caught? |
|---|---|---|---|
| L14 | "D2", "E1", "E7", "I2", "O2" | uppercase+digit | YES |
| L51, 54, 57, 60, 63 | "D2", "E1", "E7", "I2", "O2" headings | uppercase+digit | YES |
| L160 | "D2, E1, I2" | uppercase+digit | YES |
| L174 | "I2", "D2", "E1" | uppercase+digit | YES |
| L198 | "D2, E1, E7, I2, or O2" | uppercase+digit | YES |
| L110 | "I2's element-count" | uppercase+digit (with possessive) | YES |
| L17 | "D2", "E1", "I2" + arrow notation | uppercase+digit | YES |

All instances caught. **P3-A's pattern list is sufficient for the actual failure case.**

Edge cases tested for false-positives:
- Section labels like "MUST", "COULD", "DEFERRED" — not matched (no digit).
- Code-style identifiers like `_state.md` — not matched (lowercase + special chars).
- Acronyms in body text like "MVL" or "SIC" — not matched (no digit).
- Date-strings like "2026-05-10" — not matched (digit-leading).
- Section numbers like "## 2" — would match if treated as workspace-ID; mitigation: scope the scan to inline tokens, not section markers (markdown # headings).

**Pattern list is robust to false-positives in this finding's actual structure.**

---

## P1 — Diagnostic framing (single phrasing)

```
The Anchored references rule (conclude.md L222-223) failed for two reasons,
both flowing from the same blind spot we'll call the **introduction-gap** —
labels indexing into a system the reader has not been introduced to.

**Failure 1 — rule scope.** The rule's only example covers positional labels
inside a structure the reader can see ("Item 3" of a numbered list). It does
not cover labels that index into a workspace scaffolding system from a
discipline output (Categories A through Q from exploration.md, piece labels
P1-P5 from decomposition, sense-versions SV1-SV6 from sensemaking, and so
on). Even when the rule fires syntactically — pairing "D2" with "12 required
fields per route" — the reader still doesn't know what "D" means or why
there's a category-letter system. The decode is local; the system is unknown.

**Failure 2 — rule application drift.** Even where the existing rule's
scope DOES cover the case (subsequent references to a label after first use),
it wasn't applied consistently. The navigation-audit finding has bare
"D2", "E1", "I2" tokens on lines 160, 174, and 198 — no descriptive name
attached. The rule depends on writer vigilance during compilation, and on
busy passes the vigilance fails.

The non-ambiguity principle (conclude.md L64-67) is sound. The gap is in
its operationalization.
```

Length: ~180 words. Within budget.

**Test:** Novelty MEDIUM (the introduction-gap framing is new); Survival YES; Fertility HIGH (the diagnosis structures the fix); Actionability HIGH; Mech.indep. YES.

---

## P4 — Reasoning (single phrasing)

```
We considered six fix locations during exploration:

- **F1 (surgical example-add to the rule)** — alone, doesn't address Failure 2.
- **F2 (new explicit CONCLUDE step)** — chosen for Fix-B; self-enforcing.
- **F3 (tighten the existing quality test)** — close runner-up to F2;
  rejected because the quality test still depends on the writer running it.
- **F4 (change discipline-output specs to ban IDs at source)** — rejected
  because the IDs serve real purpose during the discipline runs (cross-reference
  within workspace); the right separation is "useful in workspace, stripped
  at finding boundary."
- **F5 (strict prohibition of all IDs in finding)** — rejected as
  overcorrecting; useful intra-finding cross-references (numbered MUST lists
  where each item is referenced later) would die.
- **F6 (generalized rule rewrite)** — runner-up to F1 for Fix-A; chosen
  the surgical version because the diff is smaller and the existing rule
  shape works once the second case is added.

Final pair: F1-style example-add for the rule-text fix + F2-style explicit
compile-step for the application fix. The rule-text fix gives the writer
the right model when they look at the rule; the compile-step fix enforces
it even when the writer doesn't.
```

Length: ~210 words. Slightly over P4 budget (~200) but acceptable.

**Test:** all 5 tests PASS.

---

## P5 — Closing (single phrasing)

```
The fix is two text edits to `/Users/ns/.claude/skills/protocols/conclude.md`:
replace the Anchored references rule (L222-223) with the rewrite in Fix-A,
and add Step 2.5 (Strip workspace scaffolding-IDs) between Steps 2 and 3.
Verify by re-running CONCLUDE on a new inquiry and grepping the resulting
finding for `[A-Z][0-9]`, `P[0-9]`, `SV[0-9]`, and `P[0-9]-[A-Z]` — there
should be zero matches except for legitimate positional labels inside
visible numbered lists.
```

Length: ~85 words. Tight.

**Test:** Novelty LOW; Survival YES; Fertility LOW (it's the last sentence); Actionability HIGH (concrete grep verification); Mech.indep. YES.

---

## 7-Mechanism Application Trace

| Mechanism | Used in | What it produced |
|---|---|---|
| **Combination** | P2-A, P3-A, P1, P4, P5 | Standard structures combining diagnosis + fix-text |
| **Constraint Manipulation** | P3-A (add the constraint "step gets done as numbered step, not vigilance") | The self-enforcing step structure |
| **Inversion** | P2-A's (b) clause ("default: drop the label") and P3-A's exception clause | Inverts default — workspace IDs are dropped unless legitimate |
| **Lens Shifting** | P3-B vs P3-A (re-evaluate the SAME fix under different conditions: "does the writer always run the quality test?") | Surfaced the vigilance-dependence problem |
| **Domain Transfer** | P3-A's pattern-match list borrows from linter / regex-style enforcement | "Patterns to detect" framing from code-quality tools |
| **Absence Recognition** | The whole inquiry: "what's missing from the rule" produced the introduction-gap | Diagnosis name |
| **Extrapolation** | P5's grep verification extends the fix into a verifiable end-state | Concrete proof condition |

**Coverage: 4G + 3F = 7/7. Full coverage achieved.**

---

## Convergence Check

Three-or-more mechanisms point to the same core innovation? **YES** — the convergence signal is **self-enforcement over vigilance**:
- Constraint Manipulation (numbered step, not soft rule)
- Lens Shifting (P3-A vs P3-B reveals vigilance dependence)
- Domain Transfer (linter pattern-match)

All three converge on: **the fix must fire automatically; rule-text alone is insufficient**. High confidence in P3-A.

---

## Assembly Check

**Recommended assembly:** P1 + P2-A + P3-A + P4 + P5.

**Emergent value:** the assembly produces a verdict where:
- P1 names the gap and separates the two failures.
- P2-A provides drop-in rule text.
- P3-A provides drop-in compile-step text with verified pattern coverage.
- P4 explains why this pair over alternatives.
- P5 gives concrete verification (grep command).

**Emergent property:** the user can apply both fixes in <5 minutes. The grep verification at the end provides closure — the user can confirm the fix worked without re-reading the rule.

### Axis coverage check

Orthogonal axes the candidate set should vary along:
1. **Rule-text shape (surgical vs generalized rewrite):** P2-A vs P2-B. PASS.
2. **Fix mechanism (explicit step vs quality-test tighten):** P3-A vs P3-B. PASS.
3. **Self-enforcement vs writer vigilance:** P3-A vs P3-B. PASS.
4. **Pattern coverage (broad vs narrow):** P3-A includes broad pattern list (uppercase+digit, P+digit, SV+digit, variant labels, ranges). PASS.

All axes covered. Axis coverage: PASS.

---

## Self-Application: would the fix have caught D2/E1/E7 in the navigation-audit finding?

**P2-A (rule):** Yes, the second example explicitly names "D2" as a defect.

**P3-A (compile-step):** Yes, the pattern list catches `D2`, `E1`, `E7`, `I2`, `O2` (uppercase+digit). The check would flag every line containing these tokens.

**Action on flag:** the writer either (a) replaces "D2 — 12 required fields per route" with "12 required fields per route" (drop the label entirely), or (b) restructures to use a different reference structure (e.g., a numbered MUST list visible in the section).

**Resulting finding:** zero scaffolding-ID leaks. The user's complaint is resolved.

---

## Mechanism Coverage Telemetry

- Generators applied: **4 / 4** (Combination, Absence Recognition, Domain Transfer, Extrapolation)
- Framers applied: **3 / 3** (Lens Shifting, Constraint Manipulation, Inversion)
- Convergence: **YES** (3 mechanisms converge on self-enforcement)
- Survivors tested: **5 recommended pieces** all tested; all pass
- Failure modes observed:
  - Premature evaluation: **NO**
  - Single-mechanism trap: **NO** (7 mechanisms applied)
  - Early frame lock: **NO** (multiple variants per piece)
  - Innovation without grounding: **NO** (all variants tested + self-applied to actual failure case)
  - Mechanism exhaustion: **NO**
  - Survival bias: **NO** (P3-A — the most aggressive — survived; not killed for being uncomfortable)

**Overall: PROCEED**

---

## Anti-Bloat Self-Check

This innovation.md is the artifact most likely to bloat in this MVL+ run. Mitigations:
- Variants per piece: 2 each (minimum, not maximum).
- Per-variant test: compact 5-cell table, not prose.
- Mechanism trace: tabular, not prose.
- Self-application: short verification table.

Total: ~360 lines including frontmatter and headers. The OUTPUT (the assembly recommendation) is the actionable subset:
- P1 ~180 words.
- P2-A ~150 words.
- P3-A ~180 words (verified pattern coverage).
- P4 ~210 words.
- P5 ~85 words.

**Total verdict size estimate:** ~120-140 lines for the finding's content body. Within anti-bloat target. Scan test passable.

---

## Honest Value Tag

**MEDIUM-HIGH.** Innovation generated concrete, drop-in-applicable text for both fixes (Fix-A and Fix-B), with self-application verification confirming the patterns actually catch the navigation-audit's specific leaks. Without the pattern-coverage walkthrough, the fix would have been theoretical; with it, the fix is verified.

What innovation did NOT need to do:
- Re-derive the diagnosis (sensemaking did).
- Re-partition the verdict (decomposition did).
- Test alternative locations (sensemaking + exploration narrowed to conclude.md).

Innovation's load-bearing contribution: the **drop-in text** + the **pattern-coverage verification** + the **convergence on self-enforcement** as the load-bearing design principle. Critique should test whether the patterns are robust against future workspace conventions and whether the rule rewrite is consistent with conclude.md's existing prose style.
