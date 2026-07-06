## User Input

`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-06-21_23-26__routelister_routemap_format_and_field_improvements/_branch.md`

(Prior outputs consumed: surfacing.md, sensemaking.md, decomposition.md. Intent: a crystallizing NAME for the redesign + concrete TEMPLATES (lean summary header; the Movement `Move/Lands/Touches` template shown by REWRITING the user's bad example; the is_done = routelog-✓ mechanism). Inversion MANDATORY — steelman "drop nothing / Move-Lands is over-structuring / just let routelister write is_done." Ground in the measured data; respect not-bloat + identity. Save to innovation.md.)

---

# Structural Innovation — Crystallizing the Route-Map Redesign

## Phase 1 — Seed

**Seed (signal + dissatisfaction):** the redesign (lean index / clarify records / routelog-owned is_done) is correct but needs a memorable name + concrete, copyable templates — and it must survive "you're over-structuring / dropping useful columns."

**Methodology-mode:** *Standard default* (crystallize → name + templates) **+ mandated Inversion**. Alternative *Contrarian-rethink* named but not chosen (would foreground "is the redesign even right?" and under-deliver the templates). Not Production-task; the Inherited Frame Audit still runs.

---

## Phase 2 — Generate (4 Generators + 3 Framers)

### Framer — Lens Shifting
- **Generic:** stop seeing the route-map as one document; see it as a **newspaper** — headline (`Direction`) + standfirst (`Move`/`Lands`) + body & footnotes (`Touches`/`Guidance`). Different densities for different read-depths.
- **Focused (read-depth lens):** a reader reads at **3 depths** — *scan* (the index row), *gist* (Move/Lands), *detail* (Touches/Guidance/Meaning-gaps). The current format collapses gist+detail into one dense `Movement` line.
- **Contrarian (author lens):** the dense one-liner is fast for the *author* who wrote it (the inversion steelman; addressed below).

### Generator — Combination
- `Movement` + state-machine "transition" + build "action" → the unifying **`Move`→`Lands`** (do → result) that subsumes both.
- + code-review's "files changed" footer → **`Touches`**: quarantine the code identifiers out of the prose, like a commit's files-changed list.
- the lean table + the `✓` column → a **checklist view** the index becomes (routelog ticks it).

### Framer — Inversion (MANDATORY; depth- + multi-axis-iterated)
Central assumption: *"lean the index + subfield the records + is_done-is-routelog's is the right redesign."*
- **L1 (component) — "drop nothing; grain/kind are cheap insurance":** steelman — a column costs little; keeping grain/kind shows the type at a glance. **Result:** grain is **100% constant** (measured) → it shows *nothing* at a glance (every cell identical); kind is **derivable from engagement** (already a column) → no info lost. "Cheap insurance" insures nothing (grain) / is already covered (kind). **Refines, not kills:** keep the FIELDS (the type-signature is intact), drop only the non-informative DISPLAY.
- **L2 (system) — "Move/Lands/Touches over-structures; denser-is-better":** steelman — structure has overhead; an expert prefers density. **Result (the crystallizing reframe):** the route-map is a **write-once-read-many** artifact — written once at conclude, **read many times across future sessions** by the meta-loop and by a cold human (the user *is* that cold reader, and the complaint is the data). "Denser-is-better" optimizes the one *write* over the many *reads*. Optimize for the reader. AND the structure is **not more bytes** (it reflows), so the "overhead" objection is empty — there is no overhead, only labels. → structure-for-the-reader, at neutral length.
- **Existence-axis — "zero redesign; the maps are fine":** steelman — nitpicking. **Result:** the actual consumer measurably struggles (the complaint), and grain is provably dead. Not viable.
- **Identity-axis — "what IS a route-map?":** invert "a document" → "a **write-once-read-many INDEX + RECORDS** — a tiny database with a scannable index and detail rows." That framing *is* the two-surface principle.

### Framer — Constraint Manipulation (both directions)
- **ADD "the reader is a COLD future session, not the author":** forces reader-optimized structure → licenses Move/Lands.
- **ADD "neutral byte budget (no net length increase)":** forces reflow-not-add → Move/Lands/Touches is the same content relabeled; **kills the bloat objection**.
- **REMOVE "routelister owns the map's mutations":** if the map were freely mutable, is_done could go in directly — but then it's a mutable tracker, conflating map+log. Keeping the map **write-once** is exactly what assigns is_done to routelog.
- **REMOVE "compactness":** if it didn't matter, keep all columns + the dense Movement — but compactness is routelister's identity + the user's not-bloat. The constraint *selects* the lean index.

### Generator — Absence Recognition (both levels)
- **Patch (missing):** a consistent `Movement` structure → supply Move/Lands/Touches; a done-view → the routelog-`✓` column.
- **Patch (already-present):** the records already have labeled sub-entries (`Meaning-gaps`, `Guidance`-with-`(bc)`) → Movement subfields **extend an existing pattern**, not a new paradigm.
- **Redesign (already-present-in-different-form):** `Touches` content is *already in* the Movement — just inline; `Touches` is a **relocation**, not new content (literally reflow).
- **Redesign (missing):** designed fresh, a route-record would separate *what/result* (prose) from *where* (code refs) — like a good commit (subject/body/files). The current format never made that cut.

### Generator — Domain Transfer (native + deliberately-different)
- **Native (git commits):** **subject** (`Direction`) + **body** (`Move`/`Lands`) + **files-changed** (`Touches`). The commit convention IS the layered-density answer.
- **Native (code review):** title + description + diff — read at the depth you need.
- **Different (newspaper):** headline + standfirst + body.
- **Different (database):** a lean scannable **index** + detailed **rows** — the two-surface principle exactly.
- **Different (recipe card):** ingredients (`Touches`) separated from method (`Move`/`Lands`) — you don't inline quantities into the prose.
- **Convergence:** git-commit, newspaper, database, recipe ALL separate a scannable/headline layer from a detail layer AND quarantine the reference data (files/ingredients) out of the prose → strong convergence on **layered-density + reference-quarantine**.

### Generator — Extrapolation
- If route-maps proliferate (every inquiry makes one; routelog ticks them), the lean index + `✓` extrapolates to a **project-wide progress board** — which routelog's `list` already derives. Reinforces lean-index + routelog-✓. (Note; don't expand — routelog already owns it.)

---

## Inherited Frame Audit

**Central assumption (Belief):** "lean index + subfield records + is_done-is-routelog's is the right redesign." **Challenge scan:** challenged four ways — drop-nothing (L1), over-structuring (L2), zero-redesign (existence), document-vs-database (identity); all tested; L1 + L2 **materially refined** (keep-fields-drop-columns; write-once-read-many). **Audit does NOT fire** (no override). Survival-bias guarded — the kill-directions survived as refinements.

---

## Phase 3 — Test (5-test cycle on survivors)

**A — Two surfaces / "lean index + layered records."** Novelty MED; Scrutiny survives (index-vs-records is real + measured); Fertility high; Actionability high; Mech-independence: Lens + Domain-Transfer(database) + Inversion-identity → robust. → **ACTIONABLE.**

**B — "The commit-message shape" (Direction=subject / Move·Lands=body / Touches=files).** Novelty high (maps the redesign onto a universally-known convention); Scrutiny "commits≠directions" → survives (the LAYERING transfers, not git semantics); Fertility high; Actionability **very high** (it's the template + the rewrite); Mech-independence: Domain-Transfer(native) + Combination → robust. → **ACTIONABLE (the lead framing).**

**C — "Write-once-read-many → optimize for the reader."** Novelty high (answers the denser-is-better inversion); Scrutiny survives (the map IS read across sessions; the user is the cold reader); Fertility high; Actionability high. → **ACTIONABLE.**

**D — "Reflow, don't inflate" (neutral bytes).** Novelty MED; Scrutiny survives — *proven by the rewrite below* (same content, more readable, ~same length); Fertility high (kills the bloat fear); Actionability high. → **ACTIONABLE.**

**E — "Keep fields, drop columns" (grain/kind).** Novelty MED; Scrutiny survives (field ≠ column display; the type-signature stays intact); Actionability high. → **ACTIONABLE.**

**F — "Index → project-wide dashboard" (Extrapolation).** → **DEFERRED** (routelog's `list` already derives cross-inquiry; note, don't expand).

---

## Assembly Check — the emergent crystallization + the templates

**The crystallization:** the route-map is a **write-once-read-many** artifact with **two surfaces** — a lean scannable **index** and rich detail **records** — and the fix follows the **commit-message shape**: a `Direction` (subject), `Move`/`Lands` (body: *what it does* → *what it lands*), and `Touches` (files-changed: code refs quarantined out of the prose). **Lean the index, layer the records. Bloat is unstructured cramming; the fix reflows, it does not inflate.**

**Template 1 — the lean summary header:**
```
| # | Direction | engagement | Priority | ✓ |
```
(`grain` + `kind` dropped from the display; `✓` is routelog-written, default empty.)

**Template 2 — the Movement subfields, shown on the user's OWN bad example (the readability win, at ~neutral length):**

*Before (the flagged 1-liner, ~360 chars, one dense line):*
> **Movement:** Task.auto_release (stamped at funding from global SETTLEMENT_AUTO_RELEASE = manual at launch) + rule_jump caller-branch (auto→settle inline, manual→defer-mark-VERIFIED) + release_jump action + GET /admin/worklist/releases (VERIFIED jumps with no Settlement) + a release endpoint.

*After (Move / Lands / Touches):*
> **Move:** add a per-task auto-vs-manual release switch and the manual-release path — stamp each task's release mode at funding from the global default (manual at launch); branch settlement on it; and give operators a worklist + action to release the held jumps.
> **Lands:** a verified jump either settles automatically or waits in an operator worklist for a manual release click — with **manual** as the launch default.
> **Touches:** `Task.auto_release` (← `SETTLEMENT_AUTO_RELEASE`) · `rule_jump` caller-branch (auto→settle-inline / manual→defer-mark-VERIFIED) · `release_jump` action · `GET /admin/worklist/releases` · a release endpoint.

A cold reader now gets the whole route from **Move + Lands** (two plain lines) and can drop into **Touches** for the code. Same content; the density is *quarantined*, not crammed. (`Move`/`Lands` are the general form; for a state-machine route they read literally as from→to.)

**Template 3 — is_done = routelog-`✓`:** the summary's `✓` column is default-empty; **routelog** stamps it (alongside its existing `↗` into `_route.md`) when a route is run/parked; the rich outcome (artifact + note) stays in routelog's append-only log. routelister authors the column empty and never fills it.

**Name recommendation:** lead with **"the commit-message shape"** (Direction=subject · Move/Lands=body · Touches=files) — concrete and universally legible; back it with **"write-once-read-many → optimize for the reader"** (the principle) and **"reflow, don't inflate"** (the bloat dissolution).

---

## Telemetry

- **Generators:** 4/4 (Combination, Absence, Domain Transfer, Extrapolation) · **Framers:** 3/3 (Lens, Constraint, Inversion — depth+multi-axis).
- **Convergence:** YES — Lens + Combination + Domain Transfer (4 domains: git/newspaper/database/recipe) + Inversion converge on **layered-density + reference-quarantine / the commit-message shape**. High confidence.
- **Survivors tested:** 6/6 (A–E ACTIONABLE; F DEFERRED).
- **Inherited Frame Audit:** did not fire (challenged 4 ways; L1+L2 refined).
- **Failure modes:** none. (Survival-bias guarded — kill-directions survived as refinements; Early-frame-lock guarded — ran all 7 + assembly + the concrete rewrite.)
- **Overall: PROCEED** — strong convergence; the mandatory Inversion produced the write-once-read-many reframe and the keep-fields-drop-columns refinement; the rewritten example concretely proves reflow-not-inflate.
