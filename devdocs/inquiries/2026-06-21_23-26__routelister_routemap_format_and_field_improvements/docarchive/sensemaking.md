## User Input

`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-06-21_23-26__routelister_routemap_format_and_field_improvements/_branch.md`

(Prior outputs consumed: surfacing.md, articulate_simple.md; the 12 real crowboy route-maps in context. Whole = the verdict + redesign for the route-map format. Adjudicate on structural grounds: (a) is_done own-vs-display vs routelog; (b) Movement subfields that fit state-routes AND build/test routes; (c) "lengthen Direction" vs consistency. Self-reference case — ground in real maps + the spec. Layer = Structural. Save to sensemaking.md.)

---

# Structural Sensemaking — The Route-Map Format Redesign

## SV1 — Baseline Understanding

The user listed six fixes to the route-map; apply them — drop `grain`, lengthen `Direction`, reconsider `kind`, add `is_done`, give `Movement` from→to subfields, improve `Guidance`.

## Phase 1 — Cognitive Anchor Extraction

**Constraints:** not-bloat (explicit); routelister identity (compact index; enumerate-don't-decide; no-process-coupling; **routelog owns engagement state**); real-data-grounded; Structural layer.

**Key Insights (measured):**
- `grain` is **DEAD** in breadth maps (153/153 "project") — but the *field* distinguishes breadth vs depth runs.
- `kind` is **derivable from `engagement`** (each of the 9 verbs maps to teleological or epistemic).
- `Direction` is **inconsistent + restated** verbatim in each record header — not merely short.
- `is_done` **duplicates routelog** (which owns done/parked in an append-only log + `↗` into `_route.md`).
- `Movement` is **measured-dense** (median 224 / max 483, single-line "+"-dumps) AND is an **action, not a transition**, for most routes.
- `Guidance` is **already** Mode + Pointers-with-`(bc)` — a consistency gap, not an absence.

**Structural Points:** the map has **two surfaces** — the **summary table** (a scannable INDEX) and the **per-route records** (the RICHNESS). The six fixes split cleanly across them.

**Foundational Principles:** a table column earns its slot only if it **varies and informs** (grain fails both; kind is derivable); **richness belongs in records, not the index** (the index stays compact); **single-source-of-truth** (done-state has one owner).

**Meaning-Node:** *"the route-map has two surfaces; lean the index and clarify the records, with done-state owned by routelog and merely displayed."*

### SV2 — Anchor-Informed Understanding

The six proposals are not six independent fixes — they are instances of **two surface-specific moves** plus **one ownership question**: (A) **lean the summary** (drop `grain` + `kind`), (B) **clarify the records** (subfield `Movement`; formalize `Guidance`), and (C) **where does done-state live** (`is_done` vs routelog). "Lengthen Direction" is really "make Direction consistent." So the redesign is coherent, not a grab-bag.

*Meta-inspection (H4/H5): the concept names (two-surface split, reflow-not-inflate, display-not-own, Move/Lands) are grounded in the measured corpus + the spec, not coined. The motivating data is the full 12-map corpus, not a thin sample.*

## Phase 2 — Perspective Checking

- **Technical / logical:** a column that is 100% constant (grain) is *definitionally* zero-information; dropping it is strictly correct. `kind = f(engagement)` is a derivable function → redundant display. Airtight from the data.
- **Human / user (the reader):** a reader scans the index to triage, then reads a record for detail. A long `Direction` breaks the scan; a dense `Movement` breaks the detail-read. → short clear Direction + subfielded Movement. Matches the two-surface split.
- **Strategic / long-term:** the route-map format is routelister's output contract; the `is_done` decision especially carries long-term coupling (two-sources-of-truth risk with routelog).
- **Risk / failure (the uncomfortable one — BLOAT):** does subfielding `Movement` inflate the map? **No** — it *reflows the same content* into 2-3 short labeled lines and quarantines the code-noise; same bytes, parseable. **Bloat = unstructured cramming, not content.** And dropping grain+kind makes the index *leaner*. So the redesign *lowers* bloat while raising readability. This is the key dissolution of the user's central tension.
- **Definitional / internal-consistency (identity check, per change):**
  - Drop `grain` *column*: the grain *field* (project/concept-space) is load-bearing in the §2.1 type-signature (breadth vs depth) — dropping the **column** ≠ dropping the **field**; show it only when a map mixes grains (depth runs). Identity preserved.
  - Drop `kind` *column*: kind is part of the 3-axis signature but derivable; drop the **display**, keep the **field**. Identity preserved.
  - `is_done`: routelog owns engagement state; the route-MAP is the inquiry's *written-once onward field*. routelister authoring done-state would be process-coupling. → routelister must not author it.
  - `Movement` subfields: still a prescriptive direction, just clearer — no identity issue; from→to specifically would mis-frame action-routes.
- **Self-reference (H8):** redesigning routelister's own format — grounded in the 12 real maps + the spec, not taste. Done.

### SV3 — Multi-Perspective Understanding

The redesign is **two coherent moves** (lean the index / clarify the records) + a **single-source-of-truth resolution** for `is_done` (routelog owns; map displays). The bloat fear dissolves: subfields reflow the same content. Each change passes the identity check (fields kept in the type-signature; columns conditional; done-state stays routelog's).

## Phase 3 — Ambiguity Collapse

### Ambiguity 1 — `is_done`: own vs display vs routelog
**Counter (just add is_done to the map):** one table, edit in place, no new artifact — the user's convenience appeal.
**Why it fails (structural):** (i) routelog already tracks done/parked with an **append-only engagement history** (start→done→park + artifact pointer + outcome) — a boolean `is_done` is *strictly less*, and two trackers drift; (ii) the route-MAP is the inquiry's **written-once onward field** (a snapshot of "what could be done next"); making it a mutable done-tracker **conflates the map with the log** — a category mix; (iii) routelister's identity is **enumerate-don't-decide / no-process-coupling** — authoring done-state IS process-state.
**But the user's convenience goal is legitimate and achievable** — by routelog, not routelister: routelog already stamps `↗` into `_route.md`; extend it to also stamp a `✓` into the map's table. **Confidence: HIGH.**
**Resolution:** add a narrow **`✓` (done) column** to the summary table, **default empty** — but it is **routelog-owned and routelog-written**; routelister authors it empty and never fills it. Rich done-notes (artifact, outcome) stay in routelog's log (don't duplicate that as a wide summary column). The user gets "see done in the same table"; single-source-of-truth is preserved (routelog is the authority).

### Ambiguity 2 — `Movement`: from→to vs a generalization
**Counter (the user's from-state / to-state):** fits state-machine routes ("auto_release: from manual-at-launch → auto-after-timeout").
**Why it's too narrow (structural):** measured — most Movements are **actions/builds** ("build the release engine"; "add a helper"; "decide the commission model"). A build route has **no from-state**; forcing from→to mis-frames it.
**The generalization:** every movement describes a *change the route effects*, which has two plain parts — **what you DO** and **what's TRUE after**. For a state-route that *is* from→to (the from is the precondition, the to is the result); for a build-route it's "do X" → "X now exists/works." So the subfields are **`Move:`** (what the route does, plainly) + **`Lands:`** (the resulting state — what's true/exists after). The **code-identifier density** (the real bloat source — `auto_release`, `rule_jump`, endpoints) goes to an optional **`Touches:`** line, keeping Move/Lands plain-language. **Confidence: HIGH.**
**Resolution:** `Movement` → **`Move` + `Lands`** (+ optional **`Touches`** for code/artifact refs). from→to is the natural reading of Move→Lands for state-routes, without being forced on build/test/decide routes; the dense identifiers are quarantined out of the prose.

### Ambiguity 3 — `Direction`: lengthen vs make-consistent
**Counter (lengthen it):** the user's literal ask.
**Why it's partially right but mis-targeted (structural):** the data shows some Directions are already clear ("The proof-verdict console (operator grades the recording)") and some terse ("Funding / escrow-hold"). The problem is **inconsistency** + the **verbatim restatement** in each record header — not uniform shortness. And a too-LONG table cell hurts the index's scannability. **Confidence: HIGH.**
**Resolution:** `Direction` = a **consistent, self-explanatory noun-phrase** (clear without opening the record) — which lengthens the terse ones and leaves the clear ones alone — and **stop restating it** verbatim in the record header. The rule is *consistency*, not *length*.

### SV4 — Clarified Understanding

The per-proposal verdict is settled: **drop `grain` column** (field kept for depth runs) · **drop `kind` column** (derivable; kept in the signature) · **`Direction` = consistent self-explanatory phrase + no restatement** · **`is_done` = a narrow routelog-written `✓` column, default empty, never authored by routelister** · **`Movement` → `Move`/`Lands`(+`Touches`)** generalizing from→to · **`Guidance` = formalize the existing Mode+Pointers-with-reason**. The holistic format: **lean summary** (`# · Direction · engagement · Priority · ✓`) + **rich records** (Move/Lands/Touches · WHY · Guidance · Meaning-gaps). Bloat dissolved (reflow, not inflate).

## Phase 4 — Degrees-of-Freedom Reduction

- **Fixed:** drop grain column; drop kind column; Direction = consistency + no restatement; is_done = a routelog-written ✓ column (notes stay in routelog's log); Movement → Move/Lands(+Touches); Guidance formalized; lean index / rich records; bloat dissolved via reflow.
- **Eliminated:** keeping grain/kind columns; routelister authoring is_done; from→to as the universal Movement frame; "just lengthen Direction"; a wide note column in the summary.
- **Viable:** the redesign above. **Open (forward):** exact column-header words; the Touches↔Guidance boundary (where code-refs vs build-pointers each go).

### SV5 — Constrained Understanding

Collapses to: **two moves** (lean the index: drop grain+kind; clarify the records: Move/Lands/Touches + Guidance consistency) + **one ownership** (`is_done` = routelog's ✓) + **Direction = consistency**. Readability up, bloat down.

## Phase 5 — Conceptual Stabilization

*Accommodation check (H6): no patching — each perspective added a compatible anchor (two-surface split, derivability, single-source-of-truth, reflow-not-inflate, Move/Lands). Settled on the first stabilization. Earned.*

### SV6 — Stabilized Model

The route-map's shortcomings are real and measured, and they resolve into ONE coherent redesign organized by the map's **two surfaces** with opposite needs.

**① The summary table (the INDEX) should get LEANER:**
- **Drop `grain`** — 100% constant ("project") in every real map; a never-varying column carries zero information. (The grain *field* survives in the type-signature for depth/concept-space runs; show the column only in a map that actually mixes grains.)
- **Drop `kind`** — derivable from `engagement` (the 9 verbs each imply teleological/epistemic), so it restates what `engagement` already says. Keep `kind` in the signature; don't display it.
- **`Direction` = consistent + self-explanatory** (a clear noun-phrase understandable without the record) — not "uniformly longer"; and **stop restating it** in the record header.
- Net: `# · Direction · grain · kind · engagement · Priority` → `# · Direction · engagement · Priority` — fewer columns, more scannable.

**② The per-route records (the RICHNESS) should get CLEARER, not denser:**
- **`Movement` → `Move:` + `Lands:`** (+ optional **`Touches:`**). `Move` = what the route does (plain); `Lands` = the resulting state (what's true/exists after); `Touches` = the dense code/artifact identifiers quarantined out of the prose. This **generalizes the user's from→to** (a state-route's Move→Lands *is* from→to; a build/test/decide route gets action→result, no false transition) and is **not bloat** — it reflows the *same* content (the measured 224-char one-liner) into 2-3 short scannable lines.
- **`Guidance` = formalize the existing shape** (Mode + Pointers-each-with-a-`(bc …)` reason; optionally type the pointer: reuse-X / avoid-Y / sequence-after-Z). It's already decent — the fix is *consistency*, not a new structure.

**③ `is_done` — yes, but owned by routelog:**
- Add a narrow **`✓` column** to the summary, **default empty** — meeting the user's "edit the same table, no new artifact." But **routelog writes it, not routelister** (routelister authoring done-state would violate enumerate-don't-decide / no-process-coupling, and the map is a written-once onward field). routelog already stamps `↗` into `_route.md`; it simply also stamps the map's `✓`. Rich done-notes stay in routelog's append-only log (strictly richer than a boolean — don't duplicate it as a wide column).

**④ The unifying principle (resolves readability-vs-bloat):** the map's two surfaces have opposite needs — the **index** wants to be *lean and scannable* (drop dead/redundant columns), the **records** want to be *clear* (reflow dense fields into labeled subfields). **Bloat is unstructured cramming, not content** — so subfielding `Movement` raises readability at roughly neutral length, and leaning the index actively reduces width. The user's "not so compact but not bloat" is achieved by *moving* richness to where detail belongs and *removing* what never informs.

**Distance from SV1:** SV1 = "apply the six fixes." SV6 = "the six are instances of two surface-specific moves (lean the index / clarify the records) + one ownership resolution (`is_done` is routelog's); from→to generalizes to `Move`/`Lands`; 'lengthen Direction' is really 'make it consistent'; and the bloat fear dissolves because subfields reflow rather than inflate."

---

## Saturation / Telemetry

- **Perspective saturation:** 6 perspectives; saturated after Risk (the bloat perspective produced reflow-not-inflate) + Definitional (the per-change identity checks).
- **Ambiguity resolution ratio:** 3/3 hard adjudications resolved (is_done = routelog-owned ✓; Movement = Move/Lands/Touches; Direction = consistency); remaining are forward wording items.
- **SV delta:** moderate-high (six-fixes-grab-bag → two-surface redesign + ownership resolution).
- **Anchor diversity:** 5 types across 6 perspectives; multiple independent grounds (two-surface split · derivability · single-source-of-truth · reflow-not-inflate · action-vs-transition) — not one pillar.
- **Failure modes checked:** Status-Quo-Bias (the data drove dropping columns, not protecting the format), Premature-Stabilization (ran the 3 hard adjudications), Anchor-Dominance (multiple anchors), Perspective-Blindness (the uncomfortable bloat perspective produced reflow-not-inflate + the Touches quarantine), Clean-Resolution-Trap (the "just add is_done" and "from→to" clean resolutions tested structurally against routelog-duplication and action-vs-transition, and refined), Self-Reference-Blindness (grounded in the 12 real maps + the spec).
- **Verdict:** STABLE — high-confidence; lean the index (drop grain+kind), clarify the records (Move/Lands/Touches + Guidance consistency), Direction=consistency, is_done=routelog-owned-✓; bloat dissolved via reflow.
