## User Input

```
devdocs/inquiries/2026-05-10_03-50__navigation_established_audit/_branch.md

Save the output to devdocs/inquiries/2026-05-10_03-50__navigation_established_audit/innovation.md

Read _branch.md, exploration.md, sensemaking.md, AND decomposition.md.

Context primer: Decomposition produced 5 pieces (P1 Framing+Convention / P2 Foreground / P3 Background / P4 DEFERRED / P5 Closing). Sensemaking SV6 named the classification axes. Anti-bloat is HARD constraint. Innovation generates concrete content proposals per piece, applies 7 mechanisms, tests, assembly-checks.
```

---

# Innovation: Navigation — What's Established So Far

## Intuition + Direction

**Context:** the audit serves the user's planned navigation restructuring. Anti-bloat is named-as-failure-mode by the user. The bloat-corpus (~25 inquiries) is empirical evidence.

**Valuation:** the user wants to PICK challenge candidates fast — not learn the spec. The verdict's value is in what it lets the user DO downstream, not in completeness.

**Motivation:** the verdict is instrumental — its purpose is fulfilled if the user, in 2 minutes of reading, identifies 3-5 items to challenge.

**Direction:** every piece should be optimized for **scan-pick-stop** rather than **read-through-completely**.

---

## P1 — Framing + Convention (Variants)

### Variant P1-A — Compressed paragraph + sub-legend (combination + constraint manipulation)

```
This is a list of what's established about navigation in this project — pulled
from the canonical sources only (`/navigation` spec, isolated-Navigator doc,
meta_loop.md, discipline_taxonomy.md). Items are tagged for challenge-readiness:
foreground = likely worth challenging; background = foundational reference;
deferred = named-but-unspecified roadmap.

Strength sub-tag (within CONFIRMED):
  CANONICAL = directly cited and presented with derivation.
  INTERPRETIVE = directly cited but loop synthesized across sources.
  HEURISTIC = directly cited but a number/list/threshold without derivation.
SCANNED = inferred. DEFERRED = source flags it as future work.
Vulnerability: HIGH = HEURISTIC + likely bloat-source. MEDIUM = INTERPRETIVE
or lightweight HEURISTIC. LOW = CANONICAL with derivation.
Flags: (iterated) = bloat-corpus topic-overlap; (project-internal) = depends
on project's own taxonomy.
```

### Variant P1-B — Bulleted intro + inline legend (lens shifting)

```
**What this is.** The list of "established" navigation items in this project,
each tagged so you can decide what to challenge during restructuring.

**How to read.**
- Foreground = likely worth challenging.
- Background = foundational; challenging cascades.
- Deferred = roadmap items, not commitments.

**Tags.** Strength: CANONICAL (derived) / INTERPRETIVE (synthesized) /
HEURISTIC (default-without-derivation) / SCANNED / DEFERRED.
Vulnerability: HIGH / MEDIUM / LOW.
Flags: (iterated) for bloat-corpus topic-overlap; (project-internal) for
items dependent on project's own framework.
```

### Variant P1-C — Two-paragraph (framing then convention) (extrapolation)

```
[Para 1 — framing] You said prior navigation work bloated quickly. This audit
respects that: it pulls only from canonical sources, separates challenge
candidates from foundational items, and aims for the user-pick test (you can
identify 3-5 items to challenge in <2 min reading). If it fails that test, it
has failed.

[Para 2 — convention] Strength: CANONICAL/INTERPRETIVE/HEURISTIC/SCANNED/DEFERRED
(within CONFIRMED, the sub-tag matters: HEURISTIC = "a number chosen as default,
not derived"). Vulnerability: HIGH (HEURISTIC + bloat-source) / MEDIUM (mixed) /
LOW (foundational). Flags: (iterated) and (project-internal).
```

### Test cycle for P1 variants

| Variant | Novelty | Survival | Fertility | Actionability | Mech.indep. |
|---|---|---|---|---|---|
| P1-A | LOW (standard) | YES | YES | HIGH (compact, full info) | YES |
| P1-B | MEDIUM (bullet structure aids scan) | YES | YES | HIGH (skim-friendly) | YES |
| P1-C | LOW | YES | MEDIUM (longer) | MEDIUM (more reading required) | YES |

**Recommended:** **P1-B** (bulleted intro + inline legend). Best scan-pick-stop fit. P1-A is close runner-up if user prefers prose.

---

## P2 — Foreground: Challenge Candidates (Variants)

### Variant P2-A — Wide table with all columns (combination)

```
| ID | Item | Strength | Vuln | Why challenge | Flag |
|---|---|---|---|---|---|
| D2 | 12 required fields per route | HEURISTIC | HIGH | Heaviest per-route overhead; spec lists 12 with no derivation; could collapse or split required/optional | (iterated) |
| E1 | 16-type taxonomy | HEURISTIC | HIGH | First-pass enumeration; spec itself flags DEEPEN-vs-RE-RUN-DEEPER overlap; 16 emerged, not derived | (iterated) |
| ... |
```

Pros: one-table scan. Cons: column count (6) crowds readability on narrow displays.

### Variant P2-B — Tier-grouped, compact 2-line per row (constraint manipulation: add scan-test constraint)

```
### Tier 1 — HIGH (HEURISTIC × bloat-source)

**D2 — 12 required fields per route** (iterated)
   Heaviest per-route overhead. Spec lists 12 fields with no derivation;
   could collapse, or split required/optional.

**E1 — 16-type taxonomy** (iterated)
   First-pass enumeration. Spec flags DEEPEN-vs-RE-RUN-DEEPER overlap.
   The "16" is emergent, not derived.

**E7 — Auto-derivable (12) vs human-judgment (4) split**
   Heuristic boundary. The 12/4 split was named, not first-principles-derived.

**I2 — 7 warming elements per Navigator session** (iterated)
   Heavy per-Navigator-session cost. Spec lists 7 elements; "warmup variants"
   inquiries in the bloat corpus iterated this heavily.

**O2 — Guidance allocation rules**
   Heuristic table mapping Vulnerability → guidance mode. May be over-engineered.

### Tier 2 — MEDIUM-HIGH (HEURISTIC + lightweight, or INTERPRETIVE with named alternatives)

**E2-E5 — Specific taxonomy boundaries** Spec itself names overlaps (DEEPEN
vs RE-RUN-DEEPER, REFRAME vs DIFFERENT APPROACH).

**E5/E6 — REVISIT sub-modes (RESURRECT/INVALIDATE/REVERT) + threshold
self-adjust rule** Added during wayfinding absorption; could be revisited.

**N1 — 10/16 type-coverage threshold** Heuristic floor.

**O1 — 4 guidance modes (none/compact/full/expand-on-selection)** Mode count
is heuristic; could be 3 or 5.
```

Pros: tier-grouping highlights priority; per-row 2-line shape is scannable; (iterated) marker is visible. Cons: more vertical space than P2-A.

### Variant P2-C — Inversion: "what SHOULDN'T you challenge" (inversion)

```
[Foundational items NOT to challenge unless redesigning more than navigation —
listed in Background.]
[Top challenge candidates — see below.]
[Note: these are the heuristic items; if you challenge a CANONICAL item, the
challenge cascades through multiple disciplines.]

[Same content as P2-B but framed inversely.]
```

Doesn't actually change content; just adds a framing sentence. **Not adopted as primary structure** but the framing sentence is useful and migrates to P5.

### Test cycle for P2 variants

| Variant | Novelty | Survival | Fertility | Actionability | Mech.indep. |
|---|---|---|---|---|---|
| P2-A | LOW | YES | MEDIUM | HIGH (compact) | YES |
| P2-B | MEDIUM (tier-grouping is a pick-fast aid) | YES | HIGH (each item independently actionable) | HIGH | YES |
| P2-C | LOW (mostly framing) | YES | LOW | MEDIUM | NO (frame-only) |

**Recommended:** **P2-B** (tier-grouped, 2-line per row). Best scan-pick-stop. The (iterated) marker is preserved on the rows where corpus topic-overlap was confirmed (D2, E1, I2).

### Sharpened reasoning per item (the actual content)

**Tier 1 — HIGH:**
- **D2 (12 fields):** spec lists Direction/Goal/Type/Priority/Status/Blocked-by/Purpose/Movement/Unlocks/Why-this-route-exists/Guidance-mode/Continuation-note as ALL required. No derivation provided. Likely the heaviest per-route overhead; map of 8 routes = 96 required fields. Possible challenges: required/optional split; collapse correlated fields (e.g., Goal+Purpose, Status+Blocked-by); make Continuation-note conditional. (iterated)
- **E1 (16 types):** the 16-count emerged through multiple inquiries (corpus has DIAGNOSE added when wayfinding absorbed; REVISIT sub-modes added etc.). Spec's own examples flag DEEPEN-vs-RE-RUN-DEEPER overlap. The framing as 3 categories × ~5 types each is a pleasant-but-undefended structure. Possible challenges: drop the 16 number as canonical; allow open-typed enumeration; collapse overlap pairs. (iterated)
- **E7 (12/4 split):** the auto-derivable vs human-judgment partition was articulated as "this split IS the graduated autonomy boundary." But which types fall on which side is heuristic. Possible challenges: the split is per-context, not universal; some types (CONSOLIDATE) might be auto-derivable in some setups.
- **I2 (7 warming elements):** spec lists codebase orientation / fundamentals / long-run trajectory / recent trajectory / last-2-days / target inquiry read / warm-context output. 7 elements per Navigator session is heavy. The "warmup variants" inquiries in the corpus suggest this was iterated unsuccessfully. Possible challenges: tiered warming (lightweight by default, full only when needed); fewer elements; declarative warm-context that doesn't require multi-step build. (iterated)
- **O2 (guidance allocation):** the rule maps "HIGH/risky/blocked/near-action → compact or full; MEDIUM open/deferred → compact; LOW → none or compact; selected → full or expand-on-selection." It's a defensible default but is a heuristic table, not a derivation. Possible challenges: drop the matrix; make Guidance-mode purely route-author's call; or derive from a single principle (e.g., "guidance scales with selection-likelihood").

**Tier 2 — MEDIUM-HIGH:**
- **E2-E5 (taxonomy overlaps):** spec itself names DEEPEN-vs-RE-RUN-DEEPER and REFRAME-vs-DIFFERENT-APPROACH overlaps as concerns. These aren't structural commitments — they're acknowledgments-of-ambiguity in the spec.
- **E5/E6 (REVISIT sub-modes + threshold-self-adjust):** added when wayfinding was absorbed into Navigation. "Threshold self-adjusts based on loop state" is a heuristic.
- **N1 (10/16 type-coverage threshold):** spec says "fewer than 10 of 16 types considered = shallow." The 10 number is a heuristic floor.
- **O1 (4 guidance modes):** mode-count chosen, not derived. Could be 3 or 5.

---

## P3 — Background: Foundational Reference (Variants)

### Variant P3-A — Categorized 1-line list under category headers (combination + absence recognition)

```
**Category A — What /navigation IS**
- A1: enumeration of typed next directions [CANONICAL]
- A2: ONE structural operation (enumeration) [CANONICAL]
- A3: enumeration is COMPLETE and TYPED [CANONICAL]

**Category B — What /navigation IS NOT**
- B1: not decision-making [CANONICAL]
- B2: not planning [CANONICAL]
- B3: not wayfinding (absorbed) [CANONICAL]
- B4: not reflection [CANONICAL]
- B5: not routing [CANONICAL]

**Category C — Discipline taxonomy** (project-internal)
- C1: Boundary discipline [CANONICAL] (project-internal)
- C2: Boundary "complete at 2" [CANONICAL] (project-internal)
- C3: third-Boundary on rejected list [CANONICAL] (project-internal)

**Category F — Session architecture**
- F1: Navigator session ISOLATED [CANONICAL]
- F2: isolation invariant L1+ [CANONICAL]
- F3: different context shapes (worker vs Navigator) [CANONICAL]
- F4: multi-head = N+2 sessions [CANONICAL]

**Category H — Inputs**
- H1: artifact-first read set [CANONICAL]
- H2: SIC verdicts + frontiers + telemetry [CANONICAL]

**Category I — Warming**
- I1: warming is precondition [CANONICAL]

**Category J — Failure modes**
- J1-J4, J6: premature filtering / recency bias / action bias / enumeration-without-reasoning / scope fixation [CANONICAL]
- J7: cold Navigation [CANONICAL]
- J8: bloated Navigator [CANONICAL]

**Category K — Meta-loop relationship**
- K1: Navigation = meta-loop's eyes [CANONICAL]
- K3: multi-head needs Navigator [CANONICAL]
- K4: meta-loop ↔ isolated Navigator complementary layers [INTERPRETIVE]

**Category M — When to navigate**
- M1: after a SIC cycle (primary) [CANONICAL]

**Category N — Telemetry**
- N2-N5: category balance / route coverage / guidance allocation / cross-run patterns [CANONICAL]

**Category O — Guidance**
- O3: each guideline has its own WHY [CANONICAL]
```

### Variant P3-B — Collapsed master table (constraint manipulation)

A single big table with ID, summary, sub-tag, flag. Pros: maximum density. Cons: hard to scan by category.

### Variant P3-C — Hidden-by-default with summary count (inversion: don't show details unless asked)

```
**Background — Foundational items (~30, NOT recommended for challenge in this restructuring).**

Category A — Definition (3 items, all CANONICAL).
Category B — Distinguishing features (5 items, all CANONICAL).
Category C — Discipline taxonomy (3 items, all CANONICAL, project-internal).
Category F — Session architecture (4 items, all CANONICAL).
Category H — Inputs (2 items, CANONICAL).
Category I — Warming (1 item, CANONICAL).
Category J — Failure modes (7 items, CANONICAL).
Category K — Meta-loop (3 items: 2 CANONICAL + 1 INTERPRETIVE).
Category M — When to navigate (1 item, CANONICAL).
Category N — Telemetry (4 items, CANONICAL).
Category O — Guidance (1 item, CANONICAL).

[Total: ~31 foundational items. Full per-item details available in
exploration.md if the user wants to drill in.]
```

### Test cycle for P3 variants

| Variant | Novelty | Survival | Fertility | Actionability | Mech.indep. |
|---|---|---|---|---|---|
| P3-A | LOW | YES | MEDIUM | MEDIUM (still ~20+ rows) | YES |
| P3-B | LOW | YES | LOW | LOW (dense) | YES |
| P3-C | MEDIUM (counts-only) | YES | LOW | HIGH (almost nothing to read) | NO (relies on inversion) |

**Recommended:** **P3-C** (hidden-by-default with summary counts) IS the right anti-bloat choice IF the user agrees that foundational items don't need per-item visibility in this finding. Risk: user may feel things are hidden and want them visible.

**Compromise: P3-A-trimmed.** Keep category headers + 1-line items but compress to bare minimum (item ID + 3-5 word summary + tag). Skip exhaustive prose. This is what's actually used in the assembly verdict.

---

## P4 — DEFERRED Items (Variants)

### Variant P4-A — 1-line bulleted list (combination)

```
- **P1** — Selection step in meta-loop (DEFERRED — meta_loop.md; operationalized in `enes/possible_breakthroughs/1.md`)
- **P2** — Multi-head meta-loop (DEFERRED — gate: 3 useful sequential chains)
- **P3** — Automated selector for navigation map (DEFERRED — after 10 maps with selections + outcomes)
- **P4** — Where `navigation_observer.md` should live (DEFERRED — open design question)
- **P5** — Minimal Level-3 graph schema (DEFERRED — "without becoming heavy")
- **P6** — Movement quality metrics that don't self-confirm (DEFERRED — connected to meaningful-traversal)
- **P7** — Lightweight navigation memory file shape (DEFERRED)
- **P8** — Which moves are low-risk for Level-4 automation (DEFERRED — bounded-sandbox membership)
- **P9** — When Navigator asks human vs infers from artifacts (DEFERRED — boundary undefined)
```

### Variant P4-B — Compact table (combination)

```
| ID | Deferred item | Source / gate |
|---|---|---|
| P1 | Selection step | meta_loop.md |
| P2 | Multi-head meta-loop | gate: 3 sequential chains |
| P3 | Automated map selector | gate: 10 selections + outcomes |
| ... |
```

### Test cycle for P4 variants

| Variant | Novelty | Survival | Fertility | Actionability | Mech.indep. |
|---|---|---|---|---|---|
| P4-A | LOW | YES | MEDIUM | HIGH | YES |
| P4-B | LOW | YES | LOW | MEDIUM (table overhead for 9 items) | YES |

**Recommended:** **P4-A** (1-line bulleted list). 9 items don't justify a table; bullets read faster. Items are roadmap-aware, not bloat-source — making this clear in framing prevents the user from confusing them with challenge candidates.

---

## P5 — Closing Note (Variants)

### Variant P5-A — Combined self-reference + use-guidance (combination)

```
This audit runs inside MVL+, which loads /navigation as a discipline; some
items in Category C are project-internal (their "established-ness" depends on
the project's discipline taxonomy holding up). To use this finding: pick from
the foreground (Tier 1 first), assume the background is foundational unless
you're redesigning more than navigation, treat the deferred list as roadmap
not commitments.
```

### Variant P5-B — Two short paragraphs (lens shifting)

```
**Self-reference.** The audit runs inside MVL+, which uses /navigation as a
discipline. Items in Category C (Boundary classification, complete-at-2,
rejected-third) are project-internal — their established-ness is conditional
on the taxonomy.

**How to use.** Pick from the foreground; the background is foundational
unless you redesign more than navigation; the deferred list is roadmap.
```

### Variant P5-C — Inversion: state what NOT to do (inversion)

```
Don't challenge background items unless you're prepared to cascade through
multiple disciplines. Don't treat the deferred list as bloat — those are
acknowledged-as-incomplete in source. Foreground is where this audit's
challenge surface actually is. (Self-reference: items in Category C have a
project-internal dependency on the discipline taxonomy.)
```

### Test cycle for P5 variants

| Variant | Novelty | Survival | Fertility | Actionability | Mech.indep. |
|---|---|---|---|---|---|
| P5-A | LOW | YES | MEDIUM | HIGH (compact, action-clear) | YES |
| P5-B | MEDIUM (paragraph split clarifies) | YES | MEDIUM | HIGH | YES |
| P5-C | MEDIUM (inversion useful) | YES | MEDIUM | MEDIUM (negative framing reads slower) | NO (frame-only) |

**Recommended:** **P5-B** (two short paragraphs). Self-reference deserves its own paragraph for clarity; use-guidance also stands alone. P5-A is a close runner-up.

---

## 7-Mechanism Application Trace

| Mechanism | Used in | What it produced |
|---|---|---|
| **Combination** | P1-A, P2-A, P3-A, P4-A, P5-A | Standard structures combining established convention + content |
| **Constraint Manipulation** | P2-B (add scan-test constraint), P3-B (compress constraint) | Tier-grouping; collapsed-table option |
| **Inversion** | P2-C (don't-challenge framing), P3-C (hidden-by-default), P5-C (state what NOT to do) | Flip from "show items" to "don't show / don't challenge"; useful for foundational-as-resistance framing |
| **Lens Shifting** | P1-B (bulleted), P5-B (two paragraphs) | Re-frame from prose-paragraph to scan-friendly structure |
| **Domain Transfer** | P3-C (executive-summary pattern from business communication) | "Counts-only" pattern from exec-summary domain |
| **Absence Recognition** | P3-A categorical structure (recognizes absence of category headers as friction) | Category-grouped structure to surface scan affordance |
| **Extrapolation** | P1-C (extends "the user said X" frame into the audit's success criterion) | Anti-bloat constraint stated explicitly as part of the framing |

**Coverage: 4G + 3F = 7/7. Full coverage achieved.**

---

## Convergence Check

Three-or-more mechanisms point to the same core innovation? **YES** — the convergence signal is **scan-pick-stop optimization**:
- Constraint Manipulation (add scan-test constraint)
- Inversion (hide foundational; show only challenge surface)
- Lens Shifting (bulleted/sectioned structure for skim)
- Domain Transfer (exec-summary "counts-only" pattern)

All four converge on: **prioritize the user's pick action; suppress everything that doesn't directly serve it**. High confidence in the recommended assembly.

---

## Assembly Check

**Recommended assembly:** P1-B + P2-B + P3-A-trimmed (with P3-C-style category-only collapse for items the user can drill into via exploration.md) + P4-A + P5-B.

**Does the assembly produce emergent value beyond the pieces?**

YES — the assembly produces a verdict where:
- **P1-B** orients in <30 seconds.
- **P2-B** lets the user pick in <90 seconds (tier-grouped + 2-line + (iterated) markers).
- **P3-A-trimmed** provides foundational scaffold without competing for attention.
- **P4-A** prevents user from confusing roadmap with bloat.
- **P5-B** closes with self-reference + use guidance.

**Emergent property:** the user can stop reading after P2 with a usable challenge list. P3/P4/P5 are reference layers, not required reading. This satisfies the success criterion (user picks 3-5 items in <2 min).

### Axis coverage check

The candidate space has these orthogonal axes:
1. **Compression vs elaboration** — P3-A elaborates per category; P3-C compresses to counts. Both surface in candidates.
2. **Tabular vs prose** — P2-A is tabular; P2-B is prose-with-structure. Both surface.
3. **Show-everything vs hide-foundational** — P3-A shows; P3-C hides. Both surface.
4. **Combine vs separate sections** — P5-A combines; P5-B separates. Both surface.
5. **Flag-bit visibility** — all variants use (iterated) and (project-internal) consistently; no axis-coverage issue here.

All orthogonal axes have at least one candidate. **Axis coverage: PASS.**

---

## Self-Application: Robustness if user challenges the classification axes

**What if the user says "I don't accept HEURISTIC sub-tag — that's the loop's invention"?**

The verdict shape is robust. The Strength sub-tag is presented as a CONVENTION, declared in P1 — not as a fact about reality. If the user rejects the sub-tag, they can re-read with their own classification; the per-item content (item ID, summary, source citation, suggested challenges) is independent of the tag.

**What if the user says "I don't accept the foreground/background partition"?**

Less robust. The partition is the verdict's primary structure. If rejected, the user has to reconstruct from raw items. Mitigation: include enough item-content in P3 so the user can re-partition if needed.

**What if the user says "the bloat-corpus topic-overlap evidence is weak"?**

The (iterated) marker is presented as a confirmatory marker, not primary signal. If rejected, the rest of the verdict (foreground/background partition) is unaffected. Robust.

**Surface honestly:** the verdict's robustness is high to tag-level challenges and lower to partition-level challenges. The user is more likely to challenge tags than the partition (the partition has direct intuitive support: "what's most likely heuristic"). Acceptable tradeoff.

---

## Output Disposition

All recommended variants pass the 5-test cycle. Disposition:
- **P1-B + P2-B + P3-A-trimmed + P4-A + P5-B** → **ACTIONABLE** (multi-mechanism convergent; all 5 tests pass; assembly produces emergent value).
- Non-recommended variants → DEFERRED (revival trigger: if user finds the recommended assembly fails the scan test, regenerate with P1-A + P2-A or P3-C swap).

---

## Mechanism Coverage Telemetry

- Generators applied: **4 / 4** (Combination, Absence Recognition, Domain Transfer, Extrapolation)
- Framers applied: **3 / 3** (Lens Shifting, Constraint Manipulation, Inversion)
- Convergence: **YES** (4 mechanisms converge on scan-pick-stop optimization)
- Survivors tested: **5 recommended variants** all tested; all pass
- Failure modes observed:
  - Premature evaluation: **NO** (variants generated before testing)
  - Single-mechanism trap: **NO** (7 mechanisms applied)
  - Early frame lock: **NO** (multiple variants per piece; recommended after compare)
  - Innovation without grounding: **NO** (all variants tested)
  - Mechanism exhaustion: **NO** (productive outputs from all 7)
  - Survival bias: **NO** (P3-C — the most aggressive anti-bloat variant — survived; not killed for being uncomfortable)

**Overall: PROCEED** (sufficient coverage + convergence + tested survivors + assembly check passed).

---

## Anti-Bloat Self-Check

This innovation.md is longer than P-pieces will be — that's expected (innovation explores variants). But the OUTPUT (the assembly recommendation) is tight:

- P1-B ≈ 100 words.
- P2-B ≈ 12 rows × 2 lines ≈ 24 lines.
- P3-A-trimmed ≈ ~30 1-line items grouped under ~11 category headers ≈ ~40 lines.
- P4-A ≈ 9 1-line bullets.
- P5-B ≈ 4 lines.

**Total verdict size estimate:** ~80-100 lines for the finding's content body. Within anti-bloat target. Scan test passable.

---

## Honest Value Tag

**MEDIUM.** Innovation generated concrete content per piece, applied 7 mechanisms, identified the convergence signal (scan-pick-stop optimization), and produced an assembly recommendation that emergent-value-tests positive. The variant generation was non-trivial — multiple genuinely different formats per piece (esp. P3-A vs P3-C). The mechanism trace shows all 7 mechanisms produced something useful, not just ceremonial coverage.

What innovation did NOT need to do:
- Re-derive the partition (decomposition's job).
- Re-classify items (sensemaking's job).
- Re-enumerate items (exploration's job).

Innovation's load-bearing contribution: the **assembly recommendation** (P1-B + P2-B + P3-A-trimmed + P4-A + P5-B) and the **sharpened reasoning per Tier-1 challenge candidate** (concrete possible-challenges per item, not generic "heuristic" labels). Critique should test whether the sharpened reasoning actually serves user-challenge or is just longer-form labeling.
