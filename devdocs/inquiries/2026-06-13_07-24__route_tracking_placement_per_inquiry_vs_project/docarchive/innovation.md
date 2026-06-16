# Structural Innovation — route_tracking_placement_per_inquiry_vs_project

## User Input

devdocs/inquiries/2026-06-13_07-24__route_tracking_placement_per_inquiry_vs_project/_branch.md

---

## Phase 1 — Seed (+ Methodology-Mode Consideration)

**Seed:** the five-piece deliverable (the conceptual core / the plus-minus table / the `_runs.md` shape / the prior-finding re-test+corrigendum / what-ships-now) needing final, decision-usable texts. Seed type: **Signal** (a resolved placement design wanting its sharpest, most honest form).

**Methodology-Mode Consideration:** (a) inherited: **Production-task, Standard default**. (b) Alternative: Framer-weighted (the user asked to "weigh correctly" — clarity of the trade-off and the both-sides-credit matter). (c) Under it: the table's framing + the dissolving-move's vividness. (d) **Decision: Standard with Framer emphasis**, Inversion at the meta-decisions (the source-vs-derived flip; the object-A/B split; the corrigendum), one adversary pass on whether the two-objects split is over-engineering.

**Meta-decision classification:** the source-vs-derived reframe — meta. The two-objects split — meta. The amend-vs-leave prior finding — meta. The table / `_runs.md` sketch / scoping — content-production.

---

## Phase 2 — Generate (7 mechanisms × 3, compact)

### 1. Lens Shifting (Framer)

- **1G — the database-normalization lens (adopted as the technical frame).** Per-inquiry `_runs.md` files = the normalized tables (the source of truth, local, no duplication); the project overview = a materialized view (derived, droppable, rebuilt by a query). Every DBA knows: you don't answer a row-lookup by scanning a denormalized report; you keep truth normalized and build views on top. The user re-invented normalization-vs-materialized-view from filesystem pain. One precise framing.
- **1F — the git lens (adopted, vivid).** `_runs.md` per inquiry = a commit log local to each repo-subdir; "what's done across the project" = `git log --all` (assembled on read, never a maintained second file). And the prior finding's central file = a single global changelog everyone edits — the merge-conflict, scan-the-world antipattern. The user's "regex to find all... folder tells you the inquiry" IS `git log` over distributed logs.
- **1C — the "you split one file into three, that's worse" deflater (contrarian).** "One file was simpler; now there are three." Answer: only ONE new file exists now (`_runs.md`); object-B is the existing (deferred) selections design; the overview is a command, not a file. The COUNT didn't go up — the conflation went DOWN: the one file was secretly doing three jobs and doing the local one badly. Naming the three roles is clarity, not proliferation. Adopted as a one-line aside.

### 2. Combination (Generator)

- **2G — `_runs.md` × the `_route.md` sibling pattern = zero new conventions (adopted).** `_route.md` already establishes "a living, never-archived, underscore state file at the inquiry root, machine-discoverable by name." `_runs.md` is the SAME pattern for a different concern — so it inherits the discoverability (regex `_runs.md` across folders), the location rule, and the don't-archive rule for free. The user's whole "regex-find-all + folder-tells-you-the-inquiry" plan already WORKS because `_route.md` proved it. One grounding line.
- **2F — the overview × `rlu list` = the project view is already specified (adopted).** The prior finding gave rlu a `list` command. Re-aim it: `rlu list` (no path) = scan all `_runs.md` across the project and print the assembled view; `rlu list <inquiry>` = just that folder's. So the "derived project overview" needs no new artifact — it's `rlu list`'s default mode. The derived view was already designed; it just reads the per-inquiry truth instead of a central file.
- **2C — the run-log × the turn-record = the same row, the local home (adopted, the deep tie).** The prior finding noted each rlu row IS a recorded turn (choice+why+outcome). That holds here — but now the turn-records live PER-INQUIRY (`_runs.md`), and "the ~10-turn gate" / "what has the project decided" is the DERIVED assembly. So the SUSTRALL turn-ledger is itself distributed-truth + derived-view: the launch checklist's "selections file" becomes per-inquiry `_runs.md` + an assembled view. This RE-OPENS a checklist commitment (flag for the re-test: was "Turn 1 = the central selections file" actually "Turn 1 = the per-inquiry run-log + the assembled view"?).

### 3. Inversion (Framer; at the meta-decisions)

- **3G — invert the source-vs-derived flip: when is the central file the right source of truth?** Only when the PRIMARY question is the project-wide one AND the local question is rare. For run-state, the local question ("what's left in THIS field?") is the COMMON one (you ask it every time you sit in an inquiry); the project question ("what's done overall?") is occasional. So truth belongs where the common question is asked — per-inquiry. The inversion confirms the flip by frequency. Adopted.
- **3F — invert the object split: what if run-log and queue ARE one object?** They'd share a file only if their access patterns matched. They don't: the run-log is appended-to and read-locally-backward; the queue is reordered/groomed and read-globally-forward. Forcing one file means every local read pages through global forward-intent and every queue groom rewrites inert done-rows. The inversion shows the fusion has a concrete cost (the user's lookup) — confirming the split. Adopted.
- **3C — invert the corrigendum: should the prior finding just be superseded wholesale?** No — most of it survives intact (rlu the mechanism, the two moments, the NOT-list, the window guard, informal-run coverage). ONLY the write-TARGET (central → per-inquiry) and the central-file's role (source-of-truth → deferred-queue + derived-overview) change. A wholesale supersede would discard the 90% that's right. A surgical corrigendum (impacted_by: + a banner naming the two changed things) is correct. Adopted.

### 4. Constraint Manipulation (Framer; both directions)

- **4-ADD (generic, adopted).** The plus/minus table gets a **"who asks this / how often"** column — because the verdict turns on access-frequency (the local question is common), not on abstract elegance.
- **4-ADD (focused, adopted).** `_runs.md` gets a **one-line header convention** mirroring `_route.md`'s ("run-log for THIS inquiry's routes; append-only; rlu-owned; not the source of decisions, the source of done-records") — so the file self-documents its role and a future reader doesn't re-conflate it with the queue.
- **4-REMOVE (generic).** Drop the derived overview entirely (per-inquiry only)? → loses the legitimate project-wide question the user himself granted ("compile into a what's-going-on logic"); keep it — as a command, costing nothing maintained.
- **4-REMOVE (contrarian).** Drop the `_route.md` ↗ breadcrumb now that `_runs.md` exists? → the breadcrumb is the INDEX's legal way to say "this concept got taken up, see `_runs.md`/the artifact"; it's cheap and keeps the concept-map navigable. Keep, but demote it to optional (the run-log is the record; the ↗ is a courtesy pointer).

### 5. Absence Recognition (Generator; both levels, bidirectional)

- **Patch-level:** (i) **the migration**: crowboy already hand-wrote run-state into its three `_route.md` files — under THIS verdict the migration target changes from "a central selections.md" (prior finding) to "each inquiry's own `_runs.md`" (even more local, even simpler — the status lines move DOWN into the same folder, not OUT to a project file). The verdict makes the migration smaller. (ii) **the cross-inquiry route's pointer-pair**: a route from inquiry X run as inquiry Y → X's `_runs.md` row says "done → produced inquiry Y at path P"; Y's own `_route.md`/`_runs.md` stand alone. The "where did this route's work go" and "what produced this inquiry" are both answerable by pointer, no central join. (iii) **the no-`_runs.md`-yet case**: rlu creates it on first use in an inquiry (like the selections file before) — but now there's no window-guard worry at the INQUIRY level (the pre-registration window is a PROJECT-first-record concern; per-inquiry run-logs in a non-native project are unconstrained — though the FIRST `_runs.md` in the NATIVE project is still the first traversal record, so the graded guard still applies at the project's first run-log). Adopted: the guard re-attaches to "the project's first run-log anywhere," not "the central file's creation."
- **Redesign-level:** none — the model holds.
- **Bidirectional (already-present):** the `_route.md` files ALREADY ARE per-inquiry-living-discoverable-state — the verdict adds a sibling for the one thing `_route.md` can't hold (process state). The architecture already pointed here.
- **(Adopted: i migration-is-smaller; ii pointer-pair; iii guard-re-attaches-to-project-first-run-log.)**

### 6. Domain Transfer (Generator; native source included)

- **6-native (adopted).** The corpus's own **field-vs-selections distinction** (Pipeline finding: "could-do" perception vs "decided-about" ledger) transfers: `routelister.md`/`_route.md` = could-do (perception, per-inquiry); `_runs.md` = decided-about-and-done (per-inquiry); the queue = decided-about-and-committed (project). The distinction was right; the prior finding just put the whole "decided-about" layer in one central place. One framing line.
- **6-different (the lab-notebook-per-experiment).** Each experiment folder has its own notebook (local truth); the lab's "what have we run" is a librarian's index assembled from them — never a notebook everyone writes to. REJECTED for the finding — the git + normalization frames already carry it; analogy budget.

### 7. Extrapolation (Generator)

- **7G — distributed-truth scales where central doesn't (adopted).** Extrapolate to 2000 inquiries (the user's number): per-inquiry `_runs.md` each stay ~10 rows (the local question stays O(10) forever); the derived overview's assembly grows O(N-files) but is read-only, cacheable, and never blocks the local question. The central file would be 20,000 rows and the local lookup would degrade with the project's age. The user's scaling instinct is exactly right — and now it's load-bearing for SUSTRALL's own long-horizon ledger. One line.
- **7F — the Dispatcher reads the assembled view, not a separate truth (adopted).** When object-B (the queue) becomes real, it's fed BY the assembled run-state (what's done informs what to admit next) — the derived view isn't just for humans; it's the Dispatcher's input too. So "derived" doesn't mean "second-class" — it means "always current, never a stale parallel truth." Forward-pointer line.
- **7C — the rot failure, re-located.** If `_runs.md` falls out of use, run-state rots — but now per-inquiry (one stale folder), not project-wide (one rotten central file poisoning the whole view). Distributed rot is more survivable (you can trust the folders that ARE maintained; the derived view simply omits the unmaintained ones). The honest line: the habit still has to happen; but its failure is now localized. Adopted.

---

## Piece-Level Inversions (meta-decision pieces; content-axis)

- **The source-vs-derived flip.** 3G adopted: confirmed by access-FREQUENCY (truth belongs where the common question is asked).
- **The object split.** 3F adopted: confirmed by the concrete cost of fusion (the lookup IS the fused-file symptom).
- **The corrigendum.** 3C adopted: surgical (two changed things), not wholesale — 90% of the prior finding survives.

## Inherited Frame Audit

The two-objects+reframe was attacked by the three-files-is-worse deflater (1C — answered: count flat, conflation down), the central-as-truth inversion (3G — confirmed the flip by frequency), the one-object inversion (3F — confirmed the split by cost), and the wholesale-supersede inversion (3C — surgical wins). The over-engineering worry is routed to critique. Sensemaking's six collapses held. **Audit does not fire** — but 2C flagged a real re-test (the launch checklist's "Turn 1 = the central selections file" may itself need restating as per-inquiry `_runs.md` + assembled view) for the re-test section.

---

## Phase 3 — Test (5-test cycle) + dispositions

| K | Candidate (piece) | Novelty | Scrutiny | Fertility | Actionability | Mech-independence | Disposition |
|---|---|---|---|---|---|---|---|
| K1 | **The conceptual core** (P1) — two objects (RUN-LOG local / QUEUE project) + a derived overview; the **source-of-truth/derived-view** reframe framed as **normalization + materialized-view** (1G) and **git-log-over-distributed-logs** (1F); the inquiry/project = object/scope/run-mode cleavage; confirmed by access-FREQUENCY (3G) and by the cost-of-fusion (3F) | High | Survives (the DB/git frames make the reframe a known-correct pattern, not a novelty; both inversions confirm rather than threaten) | High | High | YES (1G+1F+3G+3F) | **ACTIONABLE** |
| K2 | **The plus/minus table** (P2) — 7 axes + the **"who asks / how often"** column (4-ADD: the verdict turns on frequency) + the **take-both-columns punchline** (the reframe captures per-inquiry locality AND the derived project view); residual costs named (overview-assembly = cacheable scan; cross-inquiry homing) | High | Survives (the frequency column is the honest decider the user asked for; residuals not hidden) | High | High | YES (4-ADD + the reframe) | **ACTIONABLE** |
| K3 | **The `_runs.md` shape** (P3) — root-level underscore file, **inherits `_route.md`'s sibling pattern** (2G: discoverability + don't-archive for free); append-only; the **self-documenting header** (4-ADD-focused); contents sketch (gated); the **cross-inquiry pointer-pair** (5-ii); rlu creates on first use; the **graded guard re-attaches to "the project's first run-log"** (5-iii) | High | Survives (zero new conventions — it's the proven `_route.md` pattern; the guard re-attachment is precise) | High | High | YES (2G + 5-patches) | **ACTIONABLE** |
| K4 | **The prior-finding re-test + corrigendum** (P4) — Correction-1 PARTIALLY-right/PARTIALLY-over-reached (central as source-of-truth for the local done-log; the ↗ pointer keyed-to-concepts/bare-breadcrumb); the **surgical corrigendum** (3C: only the write-target + the central role change; 90% survives); `impacted_by:` + banner; **+ the launch-checklist re-test flag** (2C: "Turn 1 = central selections" → per-inquiry `_runs.md` + assembled view?) | High | Survives (honest both-ways; surgical not wholesale; surfaces a real downstream re-test rather than burying it) | High | High | YES (3C + 2C + the access-pattern argument) | **ACTIONABLE** |
| K5 | **What-ships-now + the migration** (P5) — only object-A (`_runs.md`) new now; object-B deferred (Dispatcher gate); overview = **`rlu list`'s default mode** (2F: scan all `_runs.md`); rlu v1 write-target → `_runs.md`; **the migration is SMALLER** (5-i: crowboy's status lines move DOWN into each folder's `_runs.md`, not OUT to a central file); **distributed-truth scales** (7G: O(10) local forever at 2000 inquiries); the **localized-rot** honesty (7C) | High | Survives (the scoping is the user's lightweight ask; the migration shrinks; the scaling vindicates the user's 2000-entry instinct) | High | High | YES (2F + 5-i + 7G + 7C) | **ACTIONABLE** |
| — | A maintained central done-file alongside per-inquiry | — | a second source of truth that drifts; the overview should be DERIVED, not maintained | — | — | — | **KILL** |
| — | A fourth metaphor (lab notebook) | — | git + normalization suffice | — | — | — | **KILL** |
| — | Wholesale-supersede the prior finding | — | discards the 90% that's right (3C) | — | — | — | **KILL** |

**Artifact-grounding (fired):** `_route.md` verified as the existing per-inquiry-living-discoverable-state pattern `_runs.md` inherits; the prior finding's `rlu list` verified as the overview's natural home; the prior finding's surviving 90% (mechanism/moments/NOT-list/guard) verified intact; crowboy's hand-annotations verified as migrating DOWN (into folders) not OUT; the Pipeline finding's field-vs-selections distinction verified as the could-do/decided-about frame.

**Axis coverage check:** core-axis (K1), table-axis (K2), file-axis (K3), re-test-axis (K4), ships-now-axis (K5), plus the three-files-deflater (1C), the frequency-inversion (3G), the cost-of-fusion-inversion (3F), the wholesale-supersede-inversion (3C). No piece single-variant where a second was plausible.

**Mechanism-independence shared-input check:** the core rests on the access-pattern split + the DB/git frames; the table on the frequency argument; the file on the `_route.md` pattern; the re-test on the surgical-vs-wholesale logic; the scoping on the scaling + migration facts; three inversions cut against. INDEPENDENT.

---

## Assembly Check

The candidates assemble into **the distributed-truth run-state architecture (per-inquiry `_runs.md` + a derived view)**:

```
K1 the core (two objects + a derived view; normalization/git; confirmed by frequency + cost-of-fusion)
 ├─ K2 the table (7 axes + "who-asks/how-often"; take-both-columns)
 ├─ K3 the file (`_runs.md` = the `_route.md` pattern reused; self-documenting; cross-inquiry pointer-pair; guard re-attached)
 ├─ K4 the re-test + surgical corrigendum (partially-right; 90% survives; + the checklist re-test flag)
 └─ K5 ships-now (only A; overview = `rlu list`; migration smaller; scales; localized rot)
```

**Emergent value:** (1) **the user re-invented database normalization** (per-inquiry truth + a materialized view) and **git-log-over-distributed-logs** — naming the patterns shows both his objections are textbook consequences of denormalizing truth, not quirks; (2) **the count didn't go up, the conflation went down** — "three roles" is clarity, one file is new; (3) **the migration SHRANK** — crowboy's status lines move DOWN into each folder, not OUT to a central file (the verdict makes the prior finding's migration smaller and more local); (4) **distributed-truth is what scales to 2000** — the user's scaling instinct is load-bearing for SUSTRALL's own long-horizon ledger; (5) **the corrigendum is surgical** — only the write-target and the central role flip; 90% of the day-old finding stands.

---

## Mechanism Coverage (Telemetry)

- Generators applied: **4 / 4** · Framers applied: **3 / 3** (Constraint Manipulation both directions; Inversion ×3 at the meta-decisions — all adopted)
- Variations: 21 mechanism-variations + 3 piece-level inversions (all adopted)
- Convergence: **YES — 5 independent grounds**, three adversarial (shared-input check passed)
- Survivors: 5/5 ACTIONABLE; 3 KILLs with reasons kept
- Failure modes observed: none (the three-files-is-worse adversary ran first and shaped 1C; 2C surfaced a real downstream re-test rather than letting the reframe quietly contradict the checklist)
- **Production-task telemetry:** per-piece log — K1 `[1G(normalization), 1F(git), 3G(frequency), 3F(cost-of-fusion)]` · K2 `[4-ADD(who-asks/how-often), the take-both-columns]` · K3 `[2G(_route.md pattern), 4-ADD(self-doc header), 5-ii(pointer-pair), 5-iii(guard re-attach)]` · K4 `[3C(surgical), 2C(checklist re-test flag)]` · K5 `[2F(rlu list), 5-i(smaller migration), 7G(scales), 7F(Dispatcher reads the view), 7C(localized rot)]`. Meta-decisions: **Inversion compliance satisfied ×3, violated ×0, overridden ×0**.
- **Overall: PROCEED**

**Next discipline input:** Critique receives five ACTIONABLE candidates + the assembly, three kills — with special attention invited to: (a) **the over-engineering worry** (is "two objects + a derived view" genuinely simpler-in-effect than one file, or is it the corpus elaborating?); (b) **the checklist re-test flag** (does re-pointing the launch checklist's "Turn 1 = the central selections file" to per-inquiry `_runs.md` + assembled view actually hold, or break the SUSTRALL gate logic?); (c) **the guard re-attachment** ("the project's first run-log anywhere" — is that detectable/enforceable across distributed `_runs.md` files, or does distributing the truth weaken the irreversible-window guard?).
