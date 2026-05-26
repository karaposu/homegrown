# Exploration — /explore: What Does It Actually Need? (From-Scratch Frame)

## Step 0 Declarations

| Field | Value |
|---|---|
| `cognitive-commitment-mode` | open |
| `territory-type-mode` | artifact |
| `entry-point` | signal-first (user probe: "why Neighbor-disciplines anyway?" + meta-signal: "you are not understanding the full bloat") |
| `expected` | ~25 items across 13 enumerated regions (A–M) |
| `depth-level` | D3 with D4 probes on regions F (Neighbor-disciplines), G (Step 0 declarations / D0–D4), M (minimum-viable /explore) |

**Self-referential note.** This exploration is itself executing under the CURRENT `/explore` spec (the territory under examination). The output's form will exhibit the same protocol scaffolding the inquiry is evaluating. This is appropriate transparency rather than a problem to suppress — running the discipline honestly under the spec it's about gives the user one more data point on whether the spec serves the operation or burdens it.

**Boundary-discovery sub-phase:** not fired. Territory is well-bounded — two specific spec files plus 13 enumerated regions in `_branch.md`. Explicit `boundary: well-bounded` declaration.

---

## 1. Territory Overview

**Regions explored (mapped to from-scratch verdicts NECESSARY / HELPFUL / BLOAT):**

The territory is the CURRENT `/explore` spec at `homegrown/explore/references/explore.md` (~43 KB; numbered §1.1–§8 structure). Contrast artifact: the OLD `/explore` spec at `archived_skills/bf4ae1f-hg/bf4ae1f-explore/references/explore.md` (~21 KB; narrative prose). Both read in full into context.

**Three layers of the territory:**

- **Layer 1 — Section-level content** of the CURRENT spec (§1.1 through §8). Per-element verdict on what each section / subsection contributes to `/explore` execution.
- **Layer 2 — Form-vs-substance overlay.** Each BLOAT candidate gets classified as form bloat (e.g., a table that exists for spec-completeness but doesn't fire at runtime), substance bloat (content that doesn't contribute to the operation), or both.
- **Layer 3 — From-scratch minimum-viable /explore** (REGION M). What would `/explore` need at minimum to support its actual cognitive operation? The gap between minimum-viable and the current spec is the bloat candidate set.

---

## 2. Inventory — Per-Region Surfaced Items with Verdicts

### REGION A — Loading note (top of file)

- **A.1** "This file is the canonical reference... loaded by `homegrown/explore/SKILL.md` at Step 0... read in full before the discipline executes." — **NECESSARY** at D3. Tells the runtime where the file lives in the load chain. ~1 sentence is enough; the loading note's current ~2 sentences are fine.

- **A.2** "Sources." subsection — 4 bullets pointing at project finding paths (the chain's A1). — **BLOAT** at D4. Provenance documentation; does not affect runtime execution. Pure project-coupling — every bullet is an internal project path. Confidence: confirmed-bloat.

- **A.3** Anatomy reference (`thinking_disciplines/anatomy_of_disciplines.md`) — **BLOAT** at D3. Meta-template reference. The anatomy is for spec-authoring (how to structure a discipline reference file); not for spec-execution (how to run the discipline). Confidence: confirmed-bloat.

### REGION B — §1 Framework section

- **B.1** §1.1 Verb-meaning ("To explore is to perform purposive open-mode surfacing of a territory.") — **NECESSARY** at D3. The operation definition.

- **B.2** §1.2 Upstream-precondition relationship — **BLOAT-PARTIAL** at D4. The core insight ("/explore produces what others presuppose") is HELPFUL conceptually but the framing inserts a project-relational position (upstream relative to sense-making/comprehend/decompose/etc.) that depends on multi-discipline knowledge to interpret. The two paragraphs could be one sentence: "/explore precedes other disciplines logically because every other discipline operates on already-surfaced items." Confidence: bloat-partial (form bloat).

- **B.3** §1.3 NOT-list — **MIXED**. The NOT-list itself (5 conceptual contrasts) is **NECESSARY**. The "Belongs to" column with project paths is **BLOAT** (chain's A2 partial; the path content is project-coupling that doesn't fire at runtime). The OLD spec's 4-entry conceptual contrast was NOT-list without paths — same scope-anchoring value, no project-coupling. Confidence: confirmed-bloat (the paths column specifically).

- **B.4** §1.4 Clarification on "meaning" — **HELPFUL** at D3. Real edge-case clarification (labels vs concept-meaning). Could be one sentence in §1.3, but the value is real.

- **B.5** §1.5 Specialization pattern and /navigation boundary — **MIXED**. The specialization concept generally is HELPFUL. The /navigation-specific paragraph (the chain's A3 target) is **BLOAT** — couples /explore to a specific other discipline (/navigation) that may not exist or may have changed in any given project state. The §1.5 should describe the pattern abstractly without anchoring to /navigation specifically.

- **B.6** §1.6 Vocabulary table (labeling vs anchor) — **HELPFUL** at D3. The labeling-vs-anchor distinction is load-bearing for §2.2 (annotation layers) and §4.4 (boundary heuristic). Could be inline prose rather than a 4-row table, but the content is real.

### REGION C — NOT-list (addressed in B.3 above)

### REGION D — §2 Components section

- **D.1** §2.1 Six core components (scan, signal detection, probe, resolution management, frontier tracking, confidence mapping) — **NECESSARY** at D3. The operation's actual mechanics.

- **D.2** §2.2 Annotation layers (5 layers in a table) — **MIXED**. The content (items have existence, confidence, optionally relevance + adjacency, mandatorily confirmed-absent) is **NECESSARY**. The "5-layer table" form is **BLOAT-PARTIAL** — could be inline prose ("Each surfaced item asserts existence at a confidence level. Optional low-commitment annotations: relevance, adjacency. Confirmed-absent regions are productive output, mandatory."). The form bloat shows up in the LLM mid-execution when forced to enumerate the layers as a numbered list. Confidence: bloat-partial (form bloat).

- **D.3** §2.3 Per-item content depth (D0–D4) — **MIXED**. The vocabulary (D0–D4 levels + D2 default + D0 not acceptable + D5+ excluded) is **HELPFUL** — downstream disciplines benefit from a shared depth language. The default-coupling table (resolution × depth-level) and the per-invocation-uniformity paragraph and the typed-schema-deferred note are **BLOAT** — they expand spec verbosity without adding execution value. Most users don't consult a coupling table mid-execution; the LLM doesn't either. Confidence: split (vocabulary helpful; surrounding apparatus bloat).

### REGION E — §3 Process

- **E.1** §3.1 Step 0 declarations table (5 fields in a table) — **BLOAT** at D4. The 5 fields:
  - `cognitive-commitment-mode` — always `open`. Why declare a constant? **Pure protocol ritual.**
  - `territory-type-mode` — binary, usually inferable from context.
  - `entry-point` — binary, usually inferable from context.
  - `expected` — actually useful at large breadths.
  - `depth-level` — useful but D2 is a reasonable default that doesn't require explicit declaration.
  - **3 of 5 fields are mostly ritual; 2 of 5 are useful.** The TABLE form forces the LLM to dump a full declarations block at the top of every exploration output, eating context for ritual value. Strong bloat. The OLD spec had no Step 0 declarations table and the discipline ran fine. Confidence: confirmed-bloat (form + substance partial).

- **E.2** §3.2 Two operational modes (artifact / possibility) — **NECESSARY** at D3. The two modes are real and load-bearing.

- **E.3** §3.3 Boundary-discovery sub-phase — **HELPFUL** at D3. Catches a real preliminary case (territory boundary unknown).

- **E.4** §3.4 Canonical cycle (7 steps) — **NECESSARY** at D3. The actual operation.

- **E.5** §3.5 Idempotency within invocation — **HELPFUL** at D3. Clarifies behavior at the discipline/runner boundary.

- **E.6** §3.6 Staged execution (runner-orchestrated; references `/staged-explore`) — **BLOAT** at D3. This is the runner's concern, not /explore's. Referencing a separate runner spec inside /explore's spec is project-coupling and reverse-direction (the runner consumes /explore; /explore shouldn't consume the runner). Confidence: confirmed-bloat.

- **E.7** §3.7 Resolution progression (5-step progression within a single invocation) — **BLOAT-PARTIAL** at D3. Substantially duplicates §3.4 canonical cycle with different framing. Possibly useful for narrative motivation but the duplication is bookkeeping. Confidence: bloat-partial (form bloat via duplication).

- **E.8** §3.8 Type-aware probing — **HELPFUL** at D3. A specific operational constraint (empirical probes for load-bearing quantifiable claims). Real value.

### REGION F — §6.2 Neighbor disciplines (THE USER'S PRIMARY PROBE)

- **F.1** §6.2 The Neighbor-disciplines table (5 rows × 3 columns: Discipline | Spec path | What /explore does NOT do) — **BLOAT** at D4. **This is the user's primary probe and the verdict matters most here.**

  **From-scratch question: WHY does /explore need this table?**

  **Three sub-claims tested:**

  *(F.1.a)* The "What /explore does NOT do" column duplicates §1.3 NOT-list with rephrasing. The NOT-list at §1.3 has 5 entries; §6.2 has 5 rows. The information is the same; the framing differs (§1.3: "/explore deliberately excludes..." from /explore's perspective; §6.2: "the neighbor discipline does X that /explore does NOT do" from each neighbor's perspective). Duplication. The reader doesn't need both.

  *(F.1.b)* The "Spec path" column lists `homegrown/{sense-making,comprehend,decompose,innovate,navigation}/...` paths. This is project-coupling — assumes (i) the project has those specific other disciplines and (ii) the reader needs runtime access to their paths. **Neither assumption is true for /explore's execution.** Pure project-coupling without execution value.

  *(F.1.c)* The "Neighbor disciplines" framing itself presupposes a multi-discipline project context. /explore's spec is positioned as "one of several siblings"; the table exists to assert that positioning. **The framing is project-coupling at the framing level**, beyond just the path-column level. From-scratch /explore doesn't need to assert its position relative to siblings to do its job — it does its job by mapping a territory.

  **Verdict: BLOAT in full** — not "BLOAT in the project-path column with a HELPFUL residual table" (which is what the chain's A2 selective REPAIR would produce). The whole table is BLOAT. The reader (LLM or human) does not consult §6.2 at any point during /explore's execution. The whole table can go. Confidence: confirmed-bloat at D4.

  **This is materially different from the chain's E2 verdict on A2,** which proposed dropping the "Spec path" column and keeping the table. The from-scratch frame says the table itself is the bloat.

### REGION G — Step 0 declarations + D0–D4 (addressed in E.1 and D.3 above)

- **G summary:** Step 0 declarations table is BLOAT (E.1). D0–D4 vocabulary is HELPFUL (D.3); the surrounding apparatus (default-coupling table + per-invocation-uniformity sub-rules) is BLOAT-PARTIAL.

### REGION H — Failure modes (11 modes in §4.1)

- **H.1** Failure mode #1 Premature depth — **NECESSARY** at D3. In OLD spec.
- **H.2** Failure mode #2 Surface-only scanning — **NECESSARY** at D3. In OLD spec.
- **H.3** Failure mode #3 False confidence — **NECESSARY** at D3. In OLD spec.
- **H.4** Failure mode #4 Premature termination — **NECESSARY** at D3. In OLD spec.
- **H.5** Failure mode #5 Re-exploration — **NECESSARY** at D3. In OLD spec.
- **H.6** Failure mode #6 Completeness bias in possibility mode — **NECESSARY** at D3. In OLD spec.
- **H.7** Failure mode #7 Open→closed drift — **HELPFUL** at D3. Real failure mode; calibration-state honestly flagged. New since OLD.
- **H.8** Failure mode #8 Silent boundary-discovery — **HELPFUL** at D3. Catches a real spec-misuse. New since OLD.
- **H.9** Failure mode #9 Negative-space silent drop — **HELPFUL** at D3. Prevents losing productive output. New since OLD.
- **H.10** Failure mode #10 Staging-boundary regression — **BLOAT-CANDIDATE** at D3. The spec ITSELF flags this as speculative + calibration-state-dependent + detection-belongs-to-runner. A speculative failure mode with explicitly out-of-discipline detection is a strong demote candidate. New since OLD.
- **H.11** Failure mode #11 Inadequate per-item content depth — **HELPFUL** at D3. Paired with the D2 default rule. New since OLD.

**H summary:** 6 of 11 modes were in OLD; 5 are new. Of the 5 new: 4 are HELPFUL real failures, 1 is BLOAT-candidate (speculative, runner-detected). The "11 named modes" count itself approaches enumeration-bloat — 10 named modes would be cleaner.

### REGION I — Refinement notes embedded in process steps

- **I.1** Looking at the CURRENT spec text: refinement notes ARE NOT separately flagged as "refinement notes" — sections §3.7 (Resolution progression with layered-territories rule) and §3.8 (Type-aware probing) read as integral process content. The chain's A10 framing ("refinement notes embedded as historical residue") doesn't quite match the current text — the rules read as integral, not as add-ons. Either A10 was a misreading by the chain, or the spec was cleaned up since iteration #8 catalogued it. Verdict: **NOT BLOAT** as currently presented (HELPFUL).

### REGION J — Vocabulary table (addressed in B.6 above)

### REGION K — Inline cross-references to discipline paths

- **K.1** §1.3 NOT-list "Belongs to" column: `homegrown/sense-making/`, `homegrown/comprehend/`, etc. — **BLOAT** (same as B.3).
- **K.2** §1.5 /navigation specific paragraph — **BLOAT** (same as B.5).
- **K.3** §6.1 Runner taxonomy table (4 runners + scopes + purposes) — **BLOAT** at D3. The runners are project context — /explore doesn't need to know about /MVL, /MVL+, /meta-loop, /staged-explore to do its job. Listing them in /explore's spec is project-coupling.
- **K.4** §6.3 Universal anatomy subsection ("This spec follows `thinking_disciplines/anatomy_of_disciplines.md`") — **BLOAT** at D3. Meta-template reference; same kind as A.3.
- **K.5** §6.4 Source findings list (4 paths to project findings) — **BLOAT** at D3. Provenance lookups; project-coupling.

### REGION L — What's missing from CURRENT that OLD had?

- **L.1** Nothing material appears LOST in the rewrite. OLD's content (6 components, 2 modes, 6 failure modes, iterative cycle, surprise-based coverage) is all present in CURRENT (and elaborated). The CURRENT spec is strictly additive over OLD.
- **L.2** **Tone/voice shift detected.** OLD reads as narrative ("To explore is to..."); CURRENT reads as protocol ("§3.1 Step 0 declarations | Field | Values | Role |"). The shift from narrative to protocol is not strictly BLOAT (it's a stylistic choice) but it correlates with the bloat pattern — protocol-form invites tables, enumerations, and declarations, which invite ritual content. **Soft observation, not a bloat item.**

### REGION M — From-scratch minimum-viable /explore

**M.1** Minimum-viable /explore (under the from-scratch frame) — what does the discipline need to do its job?

A minimum spec covers:

1. **Definition.** "Exploration is purposive open-mode surfacing of a territory." (~1 paragraph)
2. **NOT-list.** 4–5 conceptual contrasts with neighbor operations (not paths). (~short list)
3. **Two modes.** Artifact (concrete pre-existing objects) vs possibility (conceptual; candidates generated). (~2 paragraphs)
4. **Core operation.** Six components named with one-line each. (~table or paragraph)
5. **The cycle.** Scan → detect signals → probe → update frontier → repeat until convergence. (~paragraph)
6. **Convergence.** Three criteria + jump scan. (~paragraph)
7. **Labeling-vs-meaning boundary heuristic.** The naive-scanner thought-experiment. (~paragraph)
8. **Failure modes.** ~7–9 named modes with one-line prevention each. (~half page)
9. **Output shape.** Confidence-tagged map with regions, items, frontier state, gaps. (~paragraph)

**Estimated size:** ~6–8 pages dense or ~10–12 pages with examples. Compare to CURRENT spec: ~15–20 pages. **Gap: ~7–12 pages of BLOAT content** under the strict from-scratch frame.

**M.2** What's in the gap?
- Loading note's Sources + Anatomy reference (~1 page)
- §1.2 Upstream-precondition framing as currently written (~0.5 page; could be 1 sentence)
- "Belongs to" column + /navigation-specific paragraph (~0.5 page)
- Step 0 declarations table (~1 page)
- §2.3 default-coupling table + per-invocation-uniformity apparatus (~1 page)
- §3.6 Staged execution subsection (~0.5 page)
- §3.7 Resolution progression duplicating §3.4 (~0.5 page)
- §5.5 Cross-Inquiry Merge Contract subsection (~1.5 pages — substantial)
- §6.1 Runner taxonomy + §6.2 Neighbor disciplines + §6.3 Universal anatomy + §6.4 Source findings (~1.5 pages)
- §7 Calibration-state-flagged items + Deferred additions + Research-frontier items (~3 pages — very substantial)
- §8 Summary table (~0.5 page; recap)
- A few enumeration overheads (5-layer table form, 11-mode count vs 10, etc.)

**Total bloat estimate: ~10–12 pages** of content that doesn't fire at runtime.

### Jump scan (per the spec's §4.2 jump-scan rule)

**M.3** Jump-scan direction: what if these "BLOAT" elements are not bloat from /explore's perspective but ARE load-bearing for *some other consumer* — a human spec-author, a future contributor, an autonomous orchestrator at higher autonomy levels?

Testing this counter:
- The Loading note's Sources + Anatomy reference + §6.4 Source findings + §7 Calibration-state items have value as **institutional memory** for a future spec-author who wants to know "why is this spec structured this way?" → genuine value, **but not for runtime execution.**
- The §6.1 Runner taxonomy + §6.2 Neighbor disciplines table have value as **project-orientation reference** for a new contributor reading /explore's spec to understand its place in the project → genuine value, **but again not for runtime execution.**
- The §5.5 Cross-Inquiry Merge Contract has value as **forward-tied spec for future code** → genuine value, **but for /staged-explore's future implementation, not for /explore's current execution.**

**Jump-scan finding:** the "BLOAT" elements are not value-less — many have institutional-memory or project-orientation value. They are bloat **specifically in their current location** (embedded in the runtime spec), not in their existence. The corrective is NOT necessarily delete; it could be **relocate** to a separate institutional-memory or design-history file.

This is a structural finding the chain did not surface: **the question is not just "which elements to keep / remove" but "which elements belong in the runtime spec vs in a separate institutional-memory artifact."**

---

## 3. Signal Log

| Signal | Detected at | Probed (D3/D4) | Verdict |
|---|---|---|---|
| Neighbor-disciplines table (§6.2) duplicates §1.3 + adds project paths | REGION F | D4 | BLOAT in full (not just paths column) |
| Step 0 declarations table (§3.1) has 3-of-5 ritual fields | REGION E | D4 | BLOAT (form + substance partial) |
| §3.7 Resolution progression duplicates §3.4 Canonical cycle | REGION E | D3 | BLOAT-partial (form bloat via duplication) |
| §7 Calibration-state + Deferred + Research-frontier ~3 pages of project history | REGION M | D3 | BLOAT for runtime; institutional-memory value exists elsewhere |
| §5.5 Cross-Inquiry Merge Contract ~1.5 pages of deferred-implementation spec | REGION M | D3 | BLOAT for /explore runtime; belongs in /staged-explore context |
| §6.1 + §6.3 + §6.4 reference machinery (~1.5 pages) | REGION K + M | D3 | BLOAT for runtime; project-orientation value exists elsewhere |
| 11-mode failure list with #10 explicitly speculative + runner-detected | REGION H | D3 | 1 mode BLOAT-candidate; 10 modes valid |
| OLD spec ran fine without Step 0 declarations, layered enumerations, project paths | contrast | D3 | Empirical: the bloat is genuinely not load-bearing |
| Tone shift from narrative (OLD) to protocol (CURRENT) correlates with bloat | REGION L | D3 | Soft observation; not a per-element bloat item |
| Jump scan: bloat has institutional value, but not for runtime | REGION M jump | D4 | Relocate-not-delete option emerges |

---

## 4. Confidence Map

### Confirmed (high-confidence verdicts)

- **§6.2 Neighbor-disciplines table — BLOAT IN FULL.** The user's primary probe. Confirmed beyond the chain's "drop the paths column" verdict.
- **Loading note Sources subsection — BLOAT.** Pure provenance; no runtime value. Chain's A1; from-scratch frame agrees.
- **§1.5 /navigation-specific paragraph — BLOAT.** Couples to a specific external discipline. Chain's A3 partial; from-scratch frame agrees.
- **§3.1 Step 0 declarations table — BLOAT.** 3 of 5 fields are ritual constants or inferable. OLD spec demonstrates the discipline runs fine without it. New from-scratch finding (not in chain's E2).
- **§3.6 Staged execution subsection — BLOAT.** Runner's concern, not /explore's. New from-scratch finding.
- **§3.7 Resolution progression — BLOAT-PARTIAL (form bloat via duplication of §3.4).** New from-scratch finding.
- **§5.5 Cross-Inquiry Merge Contract — BLOAT for /explore runtime.** Belongs in /staged-explore context, not /explore's runtime spec. New from-scratch finding.
- **§6.1 Runner taxonomy + §6.3 Universal anatomy + §6.4 Source findings — BLOAT (~1.5 pages).** Project-orientation + meta-template + provenance. New from-scratch findings.
- **§7 Calibration-state-flagged items + Deferred additions + Research-frontier items — BLOAT for runtime (~3 pages).** Institutional-memory content. New from-scratch finding.
- **§8 Summary table — BLOAT (~0.5 page).** Recap of content already present. Minor but real form bloat.
- **§2.3 default-coupling table (resolution × depth-level) — BLOAT.** Doesn't fire at runtime. Already noted by the chain (A6 territory; KEPT/flagged in E2; from-scratch frame says BLOAT clearly).

### Confirmed-absent (verdicts against bloat-suspicion)

- **§1.1 Verb-meaning — NECESSARY.** The operation definition.
- **§1.3 NOT-list (the 5-entry conceptual contrast, minus the project-paths "Belongs to" column) — NECESSARY.**
- **§2.1 Six core components — NECESSARY.**
- **§2.2 Annotation layers content — NECESSARY** (form could be lighter but content is load-bearing).
- **§3.2 Two operational modes — NECESSARY.**
- **§3.3 Boundary-discovery sub-phase — HELPFUL.**
- **§3.4 Canonical cycle — NECESSARY.**
- **§3.5 Idempotency clarification — HELPFUL.**
- **§3.8 Type-aware probing — HELPFUL.**
- **§4.1 Failure modes #1–#9 + #11 — NECESSARY or HELPFUL** (10 of 11 modes valid). #10 BLOAT-candidate.
- **§4.2 Coverage criteria — NECESSARY.**
- **§4.4 Labeling-vs-meaning heuristic — HELPFUL.**
- **§4.5 Self-assessment output — HELPFUL.**
- **§5.1 Transform — NECESSARY.**
- **§5.2 Progression — HELPFUL.**
- **§5.3 Telemetry — HELPFUL** (content; the staging-aware fields could be deferred to /staged-explore's spec).
- **§5.4 Frontier — NECESSARY.**
- **§1.4 NOT-list clarification, §1.6 Vocabulary, §4.3 Per-invocation-vs-per-staging — HELPFUL.**

### Inferred (medium-confidence)

- **§1.2 Upstream-precondition relationship — BLOAT-PARTIAL** (form bloat; the core insight is HELPFUL but currently takes 2 paragraphs where 1 sentence would do).
- **§2.3 D0–D4 vocabulary — HELPFUL** but the surrounding apparatus (per-invocation-uniformity sub-rules, typed-schema deferred note, etc.) is BLOAT.
- **5-layer annotation table form** — could be inline prose without loss; form bloat.

### Scanned (lower-confidence verdicts)

- The relationship between bloat and form (tables/enumerations) vs bloat and substance (project-coupling content) — these are partly orthogonal; the spec has both kinds.
- The institutional-memory question (relocate vs delete) — newly surfaced by jump scan; needs sensemaking adjudication.

### Unknown / Unbounded gaps

- **Whether the user wants the BLOAT material deleted entirely or relocated.** The from-scratch frame surfaces both options; only the user can decide.
- **Whether the LLM mid-execution actually behaves differently with a leaner spec.** This is what iteration #9's A/B test established at the form level; substance and mistake-prevention remain out of scope per that finding.

---

## 5. Frontier State

**Stable.** The from-scratch frame produces consistent per-element verdicts across the 13 regions. Cycles 1–3 (region-by-region scan) produced refinements; jump scan (Cycle 3, M.3) produced one substantive new direction (relocate-not-delete option) but no new top-level regions of bloat. The frontier between BLOAT and NECESSARY/HELPFUL has clear topology.

**The chain's E2 vs the from-scratch frame:**

| | Chain's E2 | From-scratch frame |
|---|---|---|
| BLOAT items identified | 3 (A1, A2 partial, A3 partial) | ~12–16 (depending on grouping) |
| Estimated content removable | ~1 page | ~7–10 pages |
| Treatment for A4–A12 | KEEP/flagged research frontier | Most are BLOAT under from-scratch frame |
| Underlying calibration | Conservative; per-element evidence required | From-scratch necessity; bookkeeping defaults to BLOAT |

**The chain was under-counting.** The user's "you are not understanding the full bloat for some reason" signal is empirically supported by the from-scratch frame.

---

## 6. Gaps and Recommendations

### Gaps (frontier questions for downstream disciplines)

- **For sensemaking (next step):** Should the BLOAT verdict translate to (a) wider REPAIR than E2 (12–16 elements removed from CURRENT in place), (b) relocation to a separate institutional-memory file (homegrown/explore/_design_history.md or similar), or (c) full reset toward OLD with selective additions of the genuinely HELPFUL new content (the user's earlier "switch to old + edit there" framing — which now has evidence-grounded support beyond pure preference)?

- **For sensemaking:** Is "form bloat" (tables, enumerations, declarations) and "substance bloat" (project-coupling, provenance) one axis or two? The chain treated them as one (E2 targeted three substance-bloat elements). The from-scratch frame surfaces both. Should they be handled with one repair pattern or two?

- **For sensemaking:** Is the BLOAT a property of CURRENT specifically, or a property of how disciplines tend to grow under iteration? If the latter, a per-discipline BLOAT-audit (using the from-scratch frame as the tool) is implied as a generalizable operation. Iteration #7's sibling REPAIR on /innovate suggests /innovate has similar bloat patterns; other disciplines may too.

- **For sensemaking:** The chain's three-level claim calibration (form / substance / mistake-prevention) is one axis. The from-scratch frame surfaces a different axis (necessary / helpful / bloat). Are these axes related? Specifically: does form-confirmed (chain) correspond to bloat-confirmed (from-scratch), and is substance-inferred (chain) actually under-claiming what bloat-confirmed entails?

### Recommendations (for the user, via downstream disciplines)

- **Don't simply expand E2.** The chain's E2 was selective revert in place. The from-scratch frame's ~12–16 BLOAT items would, applied as in-place selective revert, leave a spec that's still numbered-section / table-heavy in form. The structural recommendation is more likely "lean down to minimum-viable" (closer to OLD's narrative form with the genuinely new HELPFUL additions kept) than "delete N more sections from CURRENT."

- **Consider the relocate-not-delete option.** The institutional-memory content (Sources subsection, Calibration-state items, Deferred additions, Research-frontier items, Source findings) has real value — but for spec-authoring and project-history, not for runtime execution. A separate file (e.g., `homegrown/explore/_design_history.md`) could preserve it without burdening the runtime spec.

- **Use the 16-41 A/B-test inquiry protocol** (per its finding) to test the leaner version reversibly before committing. The from-scratch frame produces evidence for substantial bloat; the A/B-test infrastructure would let the user upgrade calibration from inferred-substantive to empirical at low cost (two pipeline runs vs an irreversible spec rewrite).

---

## Self-Assessment: PROCEED

All three convergence criteria met:

- **Frontier stability:** The from-scratch frame produces consistent verdicts across 13 regions. Frontier between BLOAT and NECESSARY/HELPFUL is clearly mapped.
- **Declining discovery rate:** Cycles 1–3 produced refinements rather than new top-level regions. Jump scan produced one substantive direction (relocate-not-delete) but no new bloat regions.
- **Bounded gaps:** Residual gaps are sensemaking-adjudication questions (repair-shape choice, axis-relationship between chain's calibration and from-scratch frame), not unmapped bloat territory.

Jump-scan performed (REGION M.3); produced the relocate-vs-delete distinction; no surprises.

### Meta-observation on this output

This exploration is itself an instance of the territory it explored. The output exhibits Step 0 declarations, a Confidence Map with 5 levels, a Signal Log table, a 6-section structural map, and a Self-Assessment line — all per the CURRENT spec's protocol. Notice the form-bloat the output carries: ~30% of the content is protocol scaffolding (Step 0 + section headers + telemetry framing) and ~70% is the substantive per-region verdicts. Under a leaner spec, this exploration's output would be ~half the length with the same substantive content. That ratio IS the user's "lots of bloat" claim, observable in the discipline's own runtime artifact.

### Telemetry (per §5.3)

- Mode: artifact
- Entry point: signal-first
- Cycles run: 3 + jump scan
- Candidates surfaced: 25 across regions A–M
- Signals detected: 10; probed: 9; deferred: 1 (institutional-memory location question — handed to sensemaking)
- Resolution progression: D3 baseline with D4 probes on F, G, M as planned
- Frontier state: stable
- Discovery rate: declined Cycle 1 → Cycle 3
- Convergence criteria status: [true, true, true]
- Jump-scan performed: true; produced relocate-not-delete direction
- Failure modes checked: 11 (all from §4.1)
- Failure modes observed in THIS exploration's own execution:
  - Premature depth? No.
  - Surface-only scanning? No — every region probed.
  - False confidence? Jump scan performed; produced 1 substantive direction shift.
  - Premature termination? No — three criteria checked.
  - Re-exploration? No — frontier tracking maintained.
  - Open→closed drift? Watched for; output stays at labeling level (NECESSARY/HELPFUL/BLOAT labels are categorical labeling, not relational meaning).
  - Silent boundary-discovery? No — territory bounded by branch.md.
  - Negative-space silent drop? No — confirmed-absent verdicts explicit (the things that AREN'T bloat are listed in §4 Confidence Map → Confirmed-absent).
  - Inadequate per-item content depth? No — D3 baseline maintained with D4 probes as planned.

**PROCEED to Sensemaking** — the from-scratch frame produced substantive evidence that the chain's E2 was under-counting the bloat, surfaced a new structural option (relocate vs delete), and left clearly-defined adjudication questions for sensemaking.
