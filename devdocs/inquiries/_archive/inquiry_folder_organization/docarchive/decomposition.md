# Decomposition: inquiry_folder_organization

## User Input

`devdocs/inquiries/inquiry_folder_organization/_branch.md`

Read `_branch.md`, `exploration.md`, and `sensemaking.md`. SV6 stabilized: auto-generated `INDEX.md` + `tools/inq` CLI helper + `ARCHIVED` status (not location) + one-time hygiene pass for 6 missing-Status folders. Six open design questions remain. Decompose into independently-answerable pieces with verification criteria, interfaces, and dependency order.

---

## The Whole

The "whole" being decomposed is **the set of concrete design commitments needed to build the chosen organizational scheme**. Sensemaking already settled the architecture (no renames; auto-INDEX + helper + status-not-location archive + hygiene). What's left is choosing specific designs for: the data displayed, the file format, the trigger that regenerates the file, the CLI helper interface, the policy for when COMPLETE becomes ARCHIVED, the approach to the one-time hygiene pass, and the filename for the index.

This is **not** a decomposition of the visibility problem (sensemaking did that). It's a decomposition of the design surface for executing the chosen solution.

---

## Step 1 — Perceive Coupling Topology

### Elements (concrete decisions yet to be made)

E1. What columns/fields the index shows per inquiry (data model)
E2. INDEX.md format — table vs sectioned vs hybrid; sort default; filter default
E3. Regeneration trigger — manual / CONCLUDE-hook / git pre-commit / on-demand only
E4. CLI helper command name (`tools/inq`, `inq`, `tools/inquiries`...)
E5. CLI helper output format (terminal-table-like? same data as INDEX.md?)
E6. CLI helper filter/sort flags (`--active`, `--all`, etc.)
E7. Hygiene-pass approach for 6 missing-Status folders (programmatic rule vs case-by-case)
E8. ARCHIVED criterion — when COMPLETE → ARCHIVED (auto-by-age, manual, never-auto)
E9. Index filename — `INDEX.md` / `_INDEX.md` / `00_INDEX.md` / `README.md`
E10. Where the hygiene-pass touches files (just `_state.md`? add a one-line History entry?)

### Coupling matrix

| Pair | Coupled? | Why |
|---|---|---|
| E1 ↔ E2 | Strong | Format renders the data model; can't pick format without knowing fields |
| E1 ↔ E5 | Strong | Helper displays the same data; shared data model |
| E2 ↔ E5 | Moderate | Output formats differ (Markdown vs terminal) but render the same data |
| E1 ↔ E8 | Moderate | Data model includes Status; ARCHIVED affects what's shown |
| E2 ↔ E8 | Moderate | Default filter likely excludes ARCHIVED |
| E5 ↔ E8 | Moderate | Same — default filter |
| E5 ↔ E6 | Strong | Output and filter flags share the helper's CLI surface |
| E3 ↔ E1 | Moderate | Trigger regenerates the file; needs to know what to invoke (the script) |
| E3 ↔ E2 | Weak | Trigger doesn't care about format internals; just runs the generator |
| E4 ↔ E5/E6 | Weak | Name is independent of behavior |
| E7 ↔ E10 | Strong | Hygiene approach decides what files get touched |
| E7 ↔ E8 | Weak | Hygiene assigns Status; ARCHIVED is a possible value but the assignment rule for the 6 missing folders is mostly choosing among {ACTIVE, COMPLETE, SUPERSEDED, ARCHIVED} based on file contents |
| E9 ↔ everything | None | Filename is a cosmetic alphabet decision |

### Clusters detected

- **Cluster I — Shared data model + display surfaces:** E1, E2, E5, E6. Strongly coupled internally (all about "what to show and how").
- **Cluster II — Regen trigger:** E3. Depends on Cluster I being defined (knows what to invoke).
- **Cluster III — Hygiene pass:** E7, E10. One-time; internally coupled (approach + scope of file edits).
- **Cluster IV — ARCHIVED policy:** E8. Decoupled from mechanism; affects Cluster I's defaults moderately.
- **Cluster V — Filename pinning:** E9. Cosmetic; isolated.

---

## Step 2 — Detect Boundaries (Top-Down)

The five clusters become five candidate pieces. Boundaries are at cluster boundaries (low cross-coupling verified above).

**One refinement:** Cluster I contains both schema (E1, E2) and helper interface (E5, E6). They share the data model but render to different surfaces (Markdown file vs terminal). Splitting Cluster I into two sub-pieces with a shared **data-model contract** makes the coupling explicit instead of hidden. So Cluster I → P1 (data model + INDEX.md format) and P3 (CLI helper) — with the data-model fields defined in P1 as the contract P3 must consume.

**Final pieces (6):**

| Piece | Cluster | Maps to user question |
|---|---|---|
| P1 | I (data model + INDEX.md format) | Q1 |
| P2 | II (regen trigger) | Q2 |
| P3 | I (CLI helper interface, consuming P1's data model) | Q3 |
| P4 | III (hygiene pass approach) | Q4 |
| P5 | IV (ARCHIVED criterion) | Q5 |
| P6 | V (filename) | Q6 |

---

## Step 3 — Validate Boundaries (Bottom-Up Check)

### Atoms

- "Pick a column" (per column).
- "Pick a sort default" (single choice).
- "Pick a filter default" (single choice).
- "Pick a regen trigger" (single choice among 3-4 options).
- "Pick a helper command name" (single choice).
- "Pick a helper output format" (single choice).
- "Pick a Status value for one missing folder" (per folder; 6 atoms).
- "Pick an ARCHIVED-transition policy" (single choice).
- "Pick a filename" (single choice).

### Atom-to-piece mapping

- Column / sort / filter / format → P1.
- Regen trigger → P2.
- Helper name / output / flags → P3.
- Per-folder Status assignments → P4.
- ARCHIVED policy → P5.
- Filename → P6.

**No atoms split across pieces.** **No atoms grouped that should be separate.** Top-down + bottom-up agree at HIGH confidence on all 6 boundaries.

---

## Step 4 — Express as Question Tree

### P1 — INDEX.md schema (data model + format)

**Question:** What fields are displayed per inquiry, in what format, with what sort default and filter default, in `INDEX.md`?

**Verification criteria:**
- [ ] Data model committed: list of fields per inquiry (e.g., name, mtime, status, has-finding, iteration count, relationships?).
- [ ] Format committed: Markdown table OR sectioned-by-status OR hybrid.
- [ ] Sort default committed (mtime descending is the obvious candidate).
- [ ] Filter default committed (likely "exclude ARCHIVED").
- [ ] Sample INDEX.md fragment showing the format applied to ~5 real inquiries.
- [ ] Estimated effort to write the generator: ~30-45 min.

### P2 — Regeneration trigger

**Question:** What triggers regeneration of `INDEX.md`?

**Verification criteria:**
- [ ] Trigger committed: manual (e.g., `tools/inq --regen`) / CONCLUDE-time hook (regen after each finding) / git pre-commit / on-demand only / combination.
- [ ] If hook: the integration point in CONCLUDE or git is specified.
- [ ] Failure mode: what happens if trigger doesn't fire? (INDEX.md goes stale silently.) Mitigation specified.
- [ ] Estimated effort: ~15-30 min depending on trigger choice.

### P3 — CLI helper interface

**Question:** What is the CLI helper's command surface — name, output format, filter/sort flags — given the shared data model from P1?

**Verification criteria:**
- [ ] Command name committed (`tools/inq`, `inq` shell alias, both?).
- [ ] Output format committed (terminal-aligned columns? same fields as P1?).
- [ ] Flag set committed: `--active` / `--complete` / `--superseded` / `--archived` / `--all`; sort flags if any.
- [ ] Sample invocation + output shown.
- [ ] Effort: ~30 min.

### P4 — Hygiene pass approach

**Question:** What approach assigns Status to the 6 folders currently missing it?

**Verification criteria:**
- [ ] Approach committed: case-by-case manual (read each folder, assign by inspection) OR programmatic rule (e.g., "no finding.md + mtime >7d → SUPERSEDED; else ACTIVE") OR hybrid (rule + manual override).
- [ ] If programmatic rule: rule explicitly stated; sanity-checked against a sample.
- [ ] Per-folder assignment outcome documented (the 6 folders' final Status values).
- [ ] Whether a History entry is added per folder noting "Status added 2026-04-27 by hygiene pass."
- [ ] Effort: ~15-30 min.

### P5 — ARCHIVED criterion

**Question:** When does a COMPLETE inquiry transition to ARCHIVED? Auto by age, manually, or never auto?

**Verification criteria:**
- [ ] Policy committed: never-auto (manual only) / age-threshold (e.g., COMPLETE for >30 days → ARCHIVED) / hybrid (age suggests, user confirms).
- [ ] If age-threshold: specific N days committed.
- [ ] How transition happens (edit `_state.md` Status field manually, or auto-script).
- [ ] Whether the existing 28 COMPLETE inquiries get ARCHIVED retroactively or stay COMPLETE until the policy first applies.
- [ ] Effort: ~10 min (policy decision; no code).

### P6 — Filename

**Question:** What is the index file's filename?

**Verification criteria:**
- [ ] Filename committed (one of: `INDEX.md`, `_INDEX.md`, `00_INDEX.md`, `README.md`, other).
- [ ] Reasoning: alphabet pinning to top? Visibility from GitHub? Prior convention?
- [ ] Effort: ~5 min.

---

## Step 5 — Map Interfaces

| From | To | What flows | Direction | Type |
|---|---|---|---|---|
| P5 (ARCHIVED policy) | P1 (schema) | Definition of "ARCHIVED" — used in default filter | One-way | Policy input |
| P5 | P3 (helper) | Same — used in default filter | One-way | Policy input |
| P1 (data model) | P3 (helper) | Shared list of fields per inquiry (the contract) | One-way | Spec input |
| P1 (generator script) | P2 (trigger) | What to invoke when the trigger fires | One-way | Reference |
| P4 (hygiene) | (existing data) | New Status values land in 6 `_state.md` files | One-way | Data write |
| P6 (filename) | P1 (schema) | Where INDEX.md lives — affects nothing about content | One-way | Trivial |
| P3 ↔ P1 | (no reverse) | One-way only | — | — |

### Hidden coupling check

- **P1 ↔ P3 shared data model:** if P1's schema adds a field but P3's helper doesn't display it, the user sees inconsistent views. **Resolution:** P1 explicitly defines the data model as a contract; P3 must consume the same fields. Captured.
- **P2 vs P1 file-path:** P2 trigger needs to know the path to invoke. **Resolution:** P1 commits to the generator's location (`tools/index_inquiries.sh` or similar); P2 references it. Captured.
- **P5 vs hygiene (P4):** the 6 missing-Status folders might end up with `ARCHIVED` as a value during hygiene, which means P4 needs P5's ARCHIVED definition. Mild coupling; P4 should run after P5 commits. Captured.

No remaining hidden coupling.

---

## Step 6 — Order by Dependency

```
                          ┌─────────────────┐
                          │ P5 — ARCHIVED   │   (policy first; defines a value used downstream)
                          │ criterion       │
                          └────────┬────────┘
                                   │ "ARCHIVED" semantics
                ┌──────────────────┼──────────────────┐
                ▼                  │                  ▼
         ┌─────────────┐           │           ┌─────────────┐
         │ P1 — Schema │ ◄── shared data model contract ──►  │ P3 — CLI    │
         │ (data + fmt)│           │                  │ helper      │
         └──────┬──────┘           │                  └─────────────┘
                │ what to invoke   │
                ▼                  │
         ┌─────────────┐           │
         │ P2 — Regen  │           │
         │ trigger     │           │
         └─────────────┘           │
                                   ▼
                          ┌─────────────────┐
                          │ P4 — Hygiene    │   (uses P5's ARCHIVED definition;
                          │ pass            │    independent of P1/P3)
                          └─────────────────┘

                          ┌─────────────────┐
                          │ P6 — Filename   │   (independent; cosmetic)
                          └─────────────────┘
```

### Order summary

1. **P5** — ARCHIVED policy committed first (defines a value downstream pieces use).
2. **P1 || P3** — schema and helper designed in parallel, with the shared data model treated as a contract surfaced explicitly during innovation.
3. **P2** — regen trigger after P1 (needs the generator's path).
4. **P4** — hygiene pass after P5 (so ARCHIVED is available as an assignment option).
5. **P6** — filename anytime; trivial.

No circular dependencies.

---

## Step 7 — Self-Evaluate

### Minimum 3 dimensions

| Dimension | Check | Result |
|---|---|---|
| **Independence** | Each piece's question answerable without reading siblings (except via interfaces)? | **PASS.** P5 standalone (policy choice). P1 standalone given P5. P3 standalone given P5 + P1's contract. P2 standalone given P1's path. P4 standalone given P5. P6 fully standalone. |
| **Completeness** | Pieces cover the whole? | **PASS.** All 6 user-questions mapped. The orthogonal data hygiene + ARCHIVED policy split out cleanly. |
| **Reassembly** | Pieces + interfaces → executable scheme? | **PASS.** P5 → P1+P3 → P2 → user has generator + trigger + helper + filename + clean data. The visibility problem is solved. |

### Full 7 dimensions

| Dimension | Check | Result |
|---|---|---|
| Independence | (above) | PASS |
| Completeness | (above) | PASS |
| Reassembly | (above) | PASS |
| **Tractability** | Each piece small enough for one focused pass? | PASS. Largest pieces (P1, P3) are ~30 min each. P5 (policy) is ~10 min. P6 (filename) is ~5 min. All tractable. |
| **Interface clarity** | All flows explicit? | PASS. Three interfaces (P5→P1, P5→P3, P1→P3 shared contract) explicit. No hidden coupling. |
| **Balance** | Roughly proportional complexity? | MILD imbalance — P1 and P3 dominate effort; P6 is trivial. Acceptable: trivial pieces shouldn't be inflated. |
| **Confidence** | Top-down + bottom-up agree? | PASS at HIGH confidence on all 6 boundaries. |

### Failure-mode self-check

- **Premature decomposition?** No — sensemaking's SV6 was stable; this decomposition operates inside its committed architecture.
- **Wrong boundaries?** No — coupling matrix confirmed cluster cohesion > cross-cluster.
- **Hidden coupling?** Three coupling points flagged in Step 5 and resolved as explicit interfaces (data-model contract, generator-path reference, ARCHIVED-as-value).
- **Missing pieces?** No — all 6 user-questions mapped; orthogonal sub-decisions (filter default, trigger mitigation) folded into their parent piece's verification criteria.
- **Over-decomposition?** No — 6 pieces for 6 questions; one-to-one alignment.
- **Ignoring dependencies?** No — explicit dependency order with no circulars.
- **Imbalanced decomposition?** Mild (P6 trivial; P1/P3 heaviest). Acceptable; P6's triviality is real, not artificial.

---

## Final Deliverable

### 1. Coupling Map

5 clusters; cross-cluster coupling minimal except for the P5 → (P1 || P3) → P2 → P4 dependency chain (which IS the natural order, not a coupling problem).

### 2. Question Tree

| # | Piece | Question |
|---|---|---|
| P1 | Schema (data + format) | What fields are displayed per inquiry, in what format, with what sort + filter defaults, in `INDEX.md`? |
| P2 | Regen trigger | What triggers regeneration of `INDEX.md`? |
| P3 | CLI helper interface | What is the CLI helper's command surface (name, output format, flags) given the shared data model from P1? |
| P4 | Hygiene pass approach | What approach assigns Status to the 6 folders currently missing it? |
| P5 | ARCHIVED criterion | When does a COMPLETE inquiry transition to ARCHIVED — auto by age, manual, or never auto? |
| P6 | Filename | What is the index file's filename? |

Verification criteria per piece: detailed in Step 4.

### 3. Interface Map

(From Step 5; summary:) P5 → P1, P3 (ARCHIVED definition); P1 → P3 (shared data-model contract); P1 → P2 (generator path); P5 → P4 (ARCHIVED as possible Status value); P6 isolated.

### 4. Dependency Order

```
P5 → (P1 || P3) → P2 → P4 → done
P6 anytime
```

### 5. Self-Evaluation

| Dimension | Result |
|---|---|
| Independence | PASS |
| Completeness | PASS |
| Reassembly | PASS |
| Tractability | PASS |
| Interface clarity | PASS |
| Balance | MILD imbalance (acceptable) |
| Confidence | PASS at HIGH |

**Decomposition is sound. Proceed to Innovation.**

### Notes for Innovation phase

- **P1 and P3 should be designed together** despite being separate pieces — the shared data-model contract must be explicit. Innovation should produce one coherent data model that both surfaces consume.
- **P5 is a policy with implications for default-filter behavior** in P1 and P3. Worth innovating 2-3 candidates (never-auto, age-threshold, hybrid) before committing.
- **P4 has 6 specific folders to assign;** innovation can either propose a programmatic rule or list per-folder assignments based on quick file inspection. Lighter touch.
- **P6 is genuinely trivial** — 3 candidates, pick one. Don't over-innovate.
- **P2 has 3-4 reasonable triggers**; innovation should check which is simplest while still keeping INDEX.md fresh. Failure mode: trigger doesn't fire = stale INDEX.
