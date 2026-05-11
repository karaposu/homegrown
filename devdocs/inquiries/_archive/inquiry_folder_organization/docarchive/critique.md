# Critique: inquiry_folder_organization

## User Input

`devdocs/inquiries/inquiry_folder_organization/`

Read all files in the folder. Construct evaluation dimensions. Innovation produced 19 candidates across 6 pieces + 4 cross-piece Assemblies. Run prosecution + defense + collision on the high-leverage candidates; lighter-touch on the rest; assembly check across the 4 Assemblies; produce a concrete final punch list. Save as `critique.md`.

---

## Phase 0 — Dimension Construction

### Extracted dimensions

| # | Dimension | What it asks | Weight |
|---|---|---|---|
| D1 | **Structural correctness** | Honors sensemaking SV6 (no renames; status-not-location archive; persistent INDEX + helper)? | **Critical** |
| D2 | **Actionability** | User can build from this spec without further design? | **Critical** |
| D3 | **Effort honesty** | Matches sensemaking's ~45-60 min total estimate (within ±50%)? | High |
| D4 | **Future-readiness** | Scales to N=500 inquiries? | Medium |
| D5 | **Coupling cleanliness** | Honors shared data-model contract between INDEX.md and helper (one renderer, not two)? | High |
| D6 | **Sustainability** | Doesn't bloat CONCLUDE; doesn't require permanent shell config? | High |
| D7 | **Reversibility** | Easy to revise if N grows or user needs shift? | Medium |

### Burden of proof

- **Low stakes** (locally reversible): P1.c sort default, P1.d filter default, P6 filename, helper command name. Innocent until proven guilty.
- **Higher stakes** (downstream effects): Assembly choice, P2 trigger (CONCLUDE hook bloat risk), P5 ARCHIVED policy. Defense must demonstrate clear viability.

---

## Phase 1 — Fitness Landscape

```
                            HIGH structural correctness (honors SV6)
                                        │
              ┌─────────────────────────┼─────────────────────────┐
              │                         │                         │
              │   VIABLE                │      BOUNDARY            │
              │   (Assembly 1,          │   (Assembly 4 minimal,   │
              │    P5.a Generic,        │    P5.a Focused,         │
              │    P3 Focused,          │    P2 Focused CONCLUDE   │
              │    P4 Generic,          │    hook,                 │
              │    P6 Generic)          │    P1.b Focused          │
              │                         │    sectioned)            │
LOW novelty ──┼─────────────────────────┼─────────────────────────┼── HIGH novelty
              │                         │                         │
              │   DEAD                  │   UNEXPLORED            │
              │   (no folder            │   (Assembly 2 —         │
              │    rename — pre-killed  │    helper-only,         │
              │    by sensemaking;      │    challenges SV6 —     │
              │    P3.b Markdown-to-    │    needs deeper probe)  │
              │    terminal as DEFAULT) │                         │
              │                         │                         │
              └─────────────────────────┼─────────────────────────┘
                                        │
                            LOW structural correctness
```

---

## Phase 2 — Adversarial Evaluation

### Candidate A — Assembly 1 ("One renderer, two outputs")

**Components:** P3.b Contrarian (Markdown to stdout, same renderer) + P2 Generic (manual + freshness check) + P3.a Focused (script + alias) + P3.c Generic (full flag set).

**Landscape position:** VIABLE/BOUNDARY — high coupling cleanliness; minor concern on terminal Markdown rendering.

**Prosecution:**

> *Markdown tables in a terminal look ugly.* If the helper prints raw Markdown to stdout by default, the user gets `| name | status | mtime |` ASCII pipes — visually noisier than terminal-aligned columns. The "one renderer" elegance is bought at the cost of daily ergonomics.

**Defense:**

> *Markdown tables ARE terminal-aligned columns when the column widths are calculated*. The renderer can produce content that's both valid Markdown AND visually-clean in a terminal — a column-padded line is identical whether stdout or `> INDEX.md`. Modern Markdown table syntax happens to be ASCII-compatible. Plus: if the user wants stripped output, `--plain` flag removes the pipes. The unification is structural; the cosmetic concern is a flag away from solved.

**Collision:**

The defense holds *if* the renderer is implemented carefully (column widths calculated from data; pipes optional via `--plain` for terminal). The prosecution is real if the renderer is naive. **The Markdown-to-stdout idea survives, but with a refinement:** the default terminal output is *column-padded plain text* (same data, no pipes); the `--regen` flag wraps it with Markdown table syntax for the file output. The "one renderer" stays but with two output modes (terminal-plain, markdown-table) instead of one literal output.

**Verdict: SURVIVE with REFINE.**

- Keep: unified rendering function consuming the shared data model.
- Refine: two output modes (terminal-plain default, markdown-table via `--regen`). One renderer; two formatters; same data.
- Effort: ~30-45 min.

### Candidate B — Assembly 2 ("Helper-only, no INDEX.md")

**Components:** P2 Contrarian + P3.b Generic terminal columns. No persistent INDEX.md.

**Landscape position:** UNEXPLORED — explicitly contradicts sensemaking SV6 ("auto-generated `INDEX.md` is the primary visibility mechanism").

**Prosecution:**

> *Sensemaking SV6 explicitly chose persistent INDEX.md for ambient visibility — "open it in any editor, on GitHub, or in a terminal pager — visibility from anywhere." Removing the persistent file removes this affordance entirely. The user must invoke a tool to see anything. GitHub viewers see no index. Editor file-tree drill-in goes back to "55 unsorted folders." This loses the strongest argument for persistent visibility.*

**Defense:**

> *The user mentioned `ls`-visible recency in their question framing. They didn't actually mention "open in editor" or "view on GitHub." Maybe sensemaking inferred a need that isn't there. If the user lives in terminal, "always live, no freshness problem" wins on simplicity.*

**Collision:**

The prosecution wins on a structural ground: sensemaking explicitly evaluated this trade-off and ruled in favor of persistent visibility. Re-litigating it in critique is post-hoc; the dimensional choice was made upstream. Additionally, the practical cost is asymmetric: a persistent INDEX.md that's occasionally stale is recoverable (run `--regen`); no INDEX.md at all is a permanent loss of editor/GitHub visibility.

**Verdict: KILL.**

- **Constructive output:** the "always-live" intuition is preserved by Assembly 1's freshness-check warning (the helper warns when INDEX.md is older than recent activity). User gets near-live behavior without losing persistent visibility.

### Candidate C — Assembly 3 ("Maximalist data + sectioned format")

**Components:** P1.a Focused (8 fields) + P1.b Focused (hybrid sectioned with collapsibles) + P5.a Focused (auto-archive 30d) + P4 Generic (per-folder hygiene).

**Landscape position:** BOUNDARY — high information density; medium effort cost.

**Prosecution:**

> *Maximalist schemas accumulate maintenance debt. 8 fields means the generator script reads 8 things per inquiry; if any field's source format changes (e.g., `_state.md` History format evolves), the generator breaks. Auto-archive at 30 days creates surprise transitions — user sees "wait, why is this ARCHIVED, I'm still using it?" Hybrid sectioned with collapsibles works in GitHub but is awkward in plain Markdown editors and breaks in `cat`.*

**Defense:**

> *More fields means more diagnostic value. 8 fields is still a single line per inquiry; not maximalist by reasonable standards. The auto-archive surprise risk is mitigated by displaying "ARCHIVED 2026-MM-DD" with a date — user can tell when. Collapsibles degrade gracefully (show as raw `<details>` text in non-renderers, still readable).*

**Collision:**

The prosecution's specific point about 8 fields is weaker than its specific point about auto-archive. 8 fields are tractable. Auto-archive surprises are real and structurally-bad — they violate the "no surprise transitions" principle that "never-auto" honors. Mixed verdict.

**Verdict: REFINE.**

- Keep: 8-field schema (Focused P1.a) — diagnostic value justifies it.
- Keep: hybrid sectioned format (Focused P1.b) — degrades gracefully.
- **Drop: auto-archive at 30 days.** Use P5.a Generic (never-auto) instead.
- Keep: per-folder hygiene (P4 Generic).

### Candidate D — Assembly 4 ("Minimal-everything")

**Components:** P1.a Generic 5 fields + P1.b Generic single table + P5.a Generic never-auto + P3.b Focused 3 columns default + P2 Generic + P6 Generic.

**Landscape position:** VIABLE — minimum viable; ~30-45 min total.

**Prosecution:**

> *5 fields and a single table is fine at N=55 but doesn't help at N=200+ where active inquiries get drowned in 100+ COMPLETE rows. Doesn't scale. The user said today's project is high-density; in 3 months N could be 200.*

**Defense:**

> *Build for today's N=55, not for hypothetical N=200. If/when N grows past comfort, refine the index then. Premature optimization for scale that may not arrive is a real cost.*

**Collision:**

Both arguments have weight. The deciding factor is **reversibility (D7)**: can a single-table format be upgraded to a sectioned format later cheaply? Yes — the data model is fixed; only the renderer changes. Switching renderers is ~15 min. **Build minimal now; upgrade later if scale demands.**

**Verdict: SURVIVE for the minimal data + format pieces; the assembly itself is one viable path.**

- Default to single-table format if user wants minimum effort.
- Reserve hybrid-sectioned for v2 if N grows.

### Candidate E — P5.a Generic vs Focused (never-auto vs age-threshold)

**Generic (never-auto):** user manually edits Status to ARCHIVED.
**Focused (age-threshold 30d):** auto-transition COMPLETE → ARCHIVED at mtime > 30 days.

**Prosecution against Focused:**

> *Surprise transitions. User sees an inquiry as ARCHIVED that they consider still-active reference material. The 30-day threshold is arbitrary; "stale" varies by inquiry type (a foundational architecture finding stays relevant >30 days; a build-pieces inquiry may go stale faster).*

**Prosecution against Generic:**

> *Manual everything = will be neglected. User is busy. ARCHIVED status accumulates manual debt; in 6 months, COMPLETE inquiries that should be archived are mixed with active reference material.*

**Defense of Focused:**

> *Surprise is mitigated by displaying ARCHIVED-DATE; user can revert by setting Status back. The 30-day threshold is configurable.*

**Defense of Generic:**

> *Sensemaking's principle: status changes should be deliberate. Manual ARCHIVED matches the deliberate-transition principle that already governs SUPERSEDED.*

**Collision:**

Sensemaking's principle ("status changes should be deliberate") is a structural anchor. Auto-transition violates it. The neglect concern is real but addressable: **add an ARCHIVE candidates query** to the helper (`tools/inq --archive-candidates` lists COMPLETE older than 30 days; user reviews and bulk-marks). User-decision retained; neglect mitigated.

**Verdict: SURVIVE for Generic; KILL for Focused.**

- Refinement: add `--archive-candidates` query flag to helper. ~5 min addition.

### Candidate F — P2 Focused (CONCLUDE-time hook)

**Prosecution:**

> *Sensemaking explicitly flagged "doesn't bloat CONCLUDE" as a sustainability constraint (D6). Adding index-regen to CONCLUDE bloats CONCLUDE with a concern (file-system view) that's orthogonal to its purpose (compile finding.md from SIC outputs). Couples concerns; future CONCLUDE edits have to remember the side-effect; first-principles wrong.*

**Defense:**

> *CONCLUDE already updates `_state.md` (Step 4). Adding "regenerate INDEX.md" is a one-line addition logically equivalent to a state update. Not really bloat.*

**Collision:**

The prosecution's structural argument wins: CONCLUDE updates `_state.md` for the inquiry it's concluding (single inquiry, single state file). Regenerating INDEX.md is a project-wide operation (reads all 55 inquiries). Different scope; different responsibility. The two operations are not equivalent. CONCLUDE-bloat is real.

**Verdict: KILL Focused.**

- Use P2 Generic instead (manual + freshness-check warning).
- Optional: a git pre-commit hook that runs `tools/inq --regen` and stages INDEX.md if it changed. Lower bloat than CONCLUDE-hook because it's at the git layer, not the protocol layer.

### Candidate G — P1.b Generic (single table) vs Focused (hybrid sectioned)

**Prosecution against Generic (single table):**

> *Doesn't scale beyond ~80-100 rows. At N=55 today it's fine; at N=200+ in months, the table is unscannable.*

**Prosecution against Focused (hybrid sectioned):**

> *More complex generator. Requires "Recently Completed" cutoff (14 days arbitrary). Collapsibles render in GitHub but are awkward in some Markdown viewers (e.g., terminal `cat`).*

**Defense of Generic:**

> *Build for today's scale. Reversible later.*

**Defense of Focused:**

> *Active section pinned to top is the user's primary need; sectioned format makes it visible without scrolling. Worth the implementation cost.*

**Collision:**

The user's primary need (per branch.md goal) is "what's recent and what's stale" — sectioned format addresses this directly with "Active" pinned. Single-table requires the user to mentally filter. **Sectioned wins on the dimension that matters most.** Effort delta is small (~10-15 min difference).

**Verdict: SURVIVE Focused (hybrid sectioned).**

- Use Focused format with Active pinned, Recently Completed visible, Older Completed/Superseded/Archived collapsed.

### Candidate H — P6 Focused (README.md) vs Contrarian (_index.md)

**Prosecution against Focused (README.md):**

> *Clobbers convention. README.md typically describes a folder's contents; in this case it's a generated index. Mixing "generated artifact" with "human-written documentation" creates ambiguity. Future contributor sees `devdocs/inquiries/README.md` and wonders if it's safe to edit (no, it gets regenerated).*

**Prosecution against Contrarian (_index.md):**

> *Underscore-prefix is unusual for a top-level folder index. README.md is more discoverable to anyone arriving at the folder cold.*

**Defense of Focused:**

> *GitHub auto-renders README.md on the folder page — built-in visibility. The "generated" concern is mitigated by a header line: "Auto-generated. Do not edit. Run `tools/inq --regen`."*

**Defense of Contrarian:**

> *Project convention has `_branch.md`, `_state.md` — underscore-prefix files are the meta/state files. `_index.md` extends this convention naturally. Discoverability via tab-completion (`_<TAB>`).*

**Collision:**

The "GitHub auto-render" benefit of README.md is real and concrete. The "convention extension" benefit of `_index.md` is consistent but weaker (the project's underscore-prefix files are *per-inquiry* state, not project-level). The "do not edit" header mitigates the README.md concern.

**Verdict: SURVIVE Focused (README.md).**

- Generated INDEX file is `devdocs/inquiries/README.md`.
- First line of the file: `> Auto-generated by tools/inq --regen. Do not edit manually; edits will be overwritten.`

---

## Phase 2 (continued) — Lower-leverage sub-decisions (light-touch)

| Sub-decision | Surviving choice | Reason |
|---|---|---|
| P5.a retroactive ARCHIVED? | Generic (don't retroactively) | Conservative; matches "no surprise transitions" |
| P1.a data model | Focused (8 fields) | Diagnostic value > minimalism; one line per inquiry regardless |
| P1.c sort default | Focused (status group → mtime desc) | Matches Active-pinned section structure |
| P1.d filter default | Generic (exclude ARCHIVED only) | Show SUPERSEDED — they're useful as cross-references |
| P3.a command name | Focused (script + alias) | Best of both: discoverable script + short alias |
| P3.b output format | Refined Assembly 1 (one renderer, two modes: terminal-plain + markdown-table) | See Candidate A verdict |
| P3.c flags | Generic (full flag set) | `--active` etc. + `--regen` + `--archive-candidates` |
| P4 hygiene approach | Generic (rule + per-folder application) | Concrete commitments already made in innovation |
| P4 per-folder Status | All 6 → SUPERSEDED with specific reasons (per innovation) | Ratify innovation's reasoning |
| P6 filename | Focused (README.md with "do-not-edit" header) | GitHub visibility |

---

## Phase 3.5 — Assembly Check

Re-evaluate the 4 Assemblies against the 7 dimensions.

| Assembly | D1 | D2 | D3 | D4 | D5 | D6 | D7 | Overall |
|---|---|---|---|---|---|---|---|---|
| Assembly 1 (one renderer) — REFINED | PASS | PASS | PASS | PASS | **STRONG PASS** | PASS | PASS | **VIABLE — survives** |
| Assembly 2 (helper-only) | **FAIL D1** (contradicts SV6) | PASS | PASS | PASS | PASS | PASS | PASS | DEAD — KILL |
| Assembly 3 (maximalist) — REFINED | PASS | PASS | MILD-FAIL D3 (1.5h vs 60min target) | PASS | PASS | PASS | PASS | BOUNDARY — viable but heavier |
| Assembly 4 (minimal) | PASS | PASS | STRONG PASS | **WEAK D4** (doesn't scale to N=200+) | PASS | PASS | PASS (reversible) | VIABLE — fastest, scale-limited |

### Synthesis: Assembly 5 ("Recommended")

The surviving choices combine into:

- **Architecture:** persistent `README.md` at `devdocs/inquiries/` (auto-generated) + `tools/inq` script with optional `inq` shell alias.
- **Renderer:** one function consuming shared data model; two output modes (terminal-plain default, markdown-table via `--regen`).
- **Data model:** 8 fields per inquiry (name, status, mtime, has_finding, flow, created, next_disc, relationships).
- **Format:** hybrid sectioned (Active pinned, Recently Completed last 14d, collapsibles for older / superseded / archived).
- **Sort:** status group → mtime desc.
- **Filter default:** exclude ARCHIVED only.
- **Flags:** `--active`, `--complete`, `--superseded`, `--archived`, `--all`, `--regen`, `--archive-candidates`, `--sort=...`, `--plain`.
- **Trigger:** manual via `--regen` + freshness-check warning on every invocation + optional git pre-commit hook (user-installable).
- **ARCHIVED policy:** never-auto; `--archive-candidates` query supports manual review.
- **Hygiene pass:** all 6 missing-Status folders → SUPERSEDED with specific reasons (per innovation P4 commitments).

**Total effort estimate:** ~60-90 min (slightly over sensemaking's 45-60 estimate; the 8-field schema + hybrid sectioned + `--archive-candidates` add modest cost).

**Verdict for Assembly 5: SURVIVE — primary recommendation.**

---

## Phase 4 — Coverage + Convergence

### Accumulator update

- All 7 critical-weight dimensions evaluated against the 4 Assemblies + 8 high-leverage candidates.
- Light-touch evaluation on 10 lower-leverage sub-decisions.
- 1 KILL (Assembly 2 — helper-only contradicts SV6).
- 1 KILL (P5.a Focused — auto-archive at 30d violates deliberate-transition principle).
- 1 KILL (P2 Focused — CONCLUDE-hook bloats CONCLUDE).
- 2 REFINEs producing structural improvements (Assembly 1's two-output-modes; Assembly 3's auto-archive replaced by Generic).
- 1 KILL of suboptimal middle option in P6 (left INDEX.md as Generic; Focused README.md wins).

### Coverage map

- VIABLE region: well-covered (Assembly 1, Assembly 4, refined components).
- BOUNDARY region: thoroughly probed (Assembly 3, Assembly 1's terminal-rendering concern, P5 auto-vs-manual, P6 README-vs-underscore).
- DEAD region: identified (Assembly 2; cosmetic/middle options).
- UNEXPLORED: minor — extreme alternatives (e.g., a database-backed inquiry-index) deliberately not probed; out of scope.

### Convergence signal

**TERMINATE.** Assembly 5 (the refined synthesis) is a clean SURVIVE with all dimensions passing. The user can implement immediately.

---

## Final Punch List (the user's actionable spec)

### Setup tasks (in dependency order)

**1. Hygiene pass (P4 + P5 baseline)** — ~15 min

Mark 6 missing-Status folders as SUPERSEDED with specific reasons (each gets `## Status: SUPERSEDED` + `**Reason:**` + `**Supersedor:**` (where applicable) + History entry):

| Folder | Status | Reason | Supersedor |
|---|---|---|---|
| `adapter_pattern_for_scalable_loop` | SUPERSEDED | Architecture-era inquiry; full SIC outputs but no finding.md; superseded by later sensemakings about scalable loops. | (no specific supersedor; abandoned mid-architecture-era) |
| `breakthrough_for_consciousness` | SUPERSEDED | Partial SIC (no critique); abandoned. | `autonomous_consciousness_goal` (COMPLETE 04-22) |
| `discipline_relevance_audit` | SUPERSEDED | Scaffold; only `_branch.md` present; never started. | `protocols_relevance_check` (COMPLETE 04-25) |
| `extract_conclude_to_homegrown` | SUPERSEDED | Only sensemaking; the actual extraction was performed directly without completing the inquiry. | (work done outside the inquiry; no formal supersedor finding) |
| `skill_folder_restructure_check` | SUPERSEDED | Only sensemaking; restructure was applied directly. | (work done outside the inquiry; no formal supersedor finding) |
| `synthesize_protocol_check` | SUPERSEDED | Only sensemaking. | `synthesize_vs_finding_split` (COMPLETE 04-26) |

Also: add `ARCHIVED` to the Status enum vocabulary (no schema file to update; this is convention).

**2. Build the renderer (P1 + P3 + P5 + P6) — ~45-60 min**

Single Bash script at `tools/inq` (or equivalent):

- Reads each `devdocs/inquiries/*/` folder.
- For each: extracts 8 fields (name, status, mtime, has_finding, flow, created, next_disc, relationships).
- Default invocation: prints terminal-plain columns, sorted status-group → mtime-desc, ARCHIVED excluded.
- `--regen`: writes Markdown-table output (with hybrid sectioned format) to `devdocs/inquiries/README.md` with the "Auto-generated; do not edit" header.
- Flags: `--active`, `--complete`, `--superseded`, `--archived`, `--all`, `--archive-candidates` (lists COMPLETE older than 30 days for review), `--sort=mtime|created|name|status`, `--plain` (strip Markdown pipes from terminal output).
- Freshness check on every invocation: if `README.md` mtime < most recent inquiry-folder mtime, print "WARNING: README.md may be stale; run `tools/inq --regen`."

**3. Optional shell alias** (~5 min)

Add to project `tools/aliases.sh` (or equivalent):
```bash
alias inq='./tools/inq'
```

User can `source tools/aliases.sh` if they want short invocation.

**4. Optional git pre-commit hook** (~5 min)

If user wants automatic regen-on-commit: add a `.git/hooks/pre-commit` that runs `tools/inq --regen` and stages `devdocs/inquiries/README.md` if it changed. NOT installed by default; user-opt-in.

**5. First regen** (~1 min)

`tools/inq --regen` produces the initial `README.md`. Verify it looks right; commit.

### Total effort: ~70-90 minutes

Slightly over sensemaking's 45-60 min target due to 8-field schema + hybrid sectioned format + `--archive-candidates`. Trade-off: more upfront work for richer index that scales to N=200+.

If user wants strict 45-60 min target: drop to Assembly 4 (5-field schema + single table) — same architecture, ~30-40 min less work, scale-limited.

### Architecture summary (one-line)

**Build `tools/inq`: one Bash renderer that reads each inquiry's `_state.md` + mtime + finding.md presence, prints terminal-plain by default, `--regen` writes the same data as Markdown to `devdocs/inquiries/README.md` with hybrid sectioned format (Active pinned, collapsibles for older). Status enum is `ACTIVE | COMPLETE | SUPERSEDED | ARCHIVED`; ARCHIVED is never-auto. Mark the 6 missing-Status folders SUPERSEDED with specific reasons. No folder renames; no subfolder reorganization; cross-references stable.**

### Open questions

1. **What's the exact `relationships` field format in the data model?** Innovation said "compact summary" but didn't commit. Candidates: list `REFINES X, RELATED Y` parsed from `_state.md` Relationships section; or just count of relationships; or empty string. **Recommendation: parse the first 1-2 relationships from `_state.md` and display compactly; truncate if longer.** Decide during implementation.

2. **What's the exact "Recently Completed" cutoff?** Innovation said "last 14 days." 14 vs 30 vs 7 is a tunable. **Recommendation: 14 days for now; revisit if it feels wrong after a few weeks of use.**

3. **Bash script vs Python?** Bash is consistent with existing `tools/install_for_*.sh`; Python would be cleaner for parsing Markdown. **Recommendation: Bash for consistency.** If parsing gets gnarly, switch to Python in v2.

4. **Should the helper handle inquiries with malformed `_state.md`?** What if a folder has no `## Status` field after the hygiene pass? **Recommendation: render as "(no status)" with a one-line warning at the top of output — surfaces hygiene problems without crashing.**

5. **Should ARCHIVED inquiries get an `archived: <date>` line in `_state.md`?** Useful for the eventual auto-archive review but adds another field. **Recommendation: add `archived: YYYY-MM-DD` only when status transitions to ARCHIVED; not retroactive.**

These are tunable details, not blockers.

---

## Convergence Telemetry

- **Dimensions evaluated:** 7/7, all critical covered: YES.
- **Adversarial strength:** STRONG — prosecution arguments would give defenders pause (Assembly 1's terminal-rendering concern, Assembly 2's SV6-contradiction, P5 Focused's surprise-transition risk, P2 Focused's CONCLUDE-bloat).
- **Landscape stability:** CHANGED — new synthesis Assembly 5 emerged; Assembly 1 refined to two-output-modes; cosmetic-Assembly-2 killed.
- **Clean SURVIVE:** YES — Assembly 5 (synthesis) survives all 7 dimensions.
- **Failure modes observed:**
  - Wrong dimensions? No.
  - Rubber-stamping? No.
  - Nitpicking? No — focused on high-leverage candidates.
  - Dimension blindness? No — D5 (coupling cleanliness) explicitly applied to Assembly 1's renderer unification.
  - False convergence? Mitigated — Assembly 5 emerged from refinement, not rubber-stamp of any single innovation candidate.
  - Evaluation drift? No — dimensions held throughout.
  - Self-reference collapse? Acknowledged — this critique evaluates the project's organizational scheme; mitigation is concrete data (specific folder counts, specific cross-reference examples) grounding the analysis.
- **Overall: PROCEED** (dimensions covered + adversarial strong + clean SURVIVE + no failure modes).

## Signal: TERMINATE

**Ranked survivors:**

1. **Assembly 5** (the refined synthesis) — primary recommendation.
2. Assembly 4 (minimal-everything, ~30-40 min) — viable if user wants strict 45-60 min target.
3. Assembly 3 (maximalist with auto-archive dropped) — only if user wants pre-emptive scale-readiness.
4. Custom — user can mix-and-match per-piece commitments.

**Next step:** write `finding.md` synthesizing this into a concrete spec.
