---
status: active
model: claude-opus-4-8[1m]
effort: max
---
# Finding: Route-Map Format — Real-Data Verdict + Redesign (Lean the Index, Layer the Records)

## Question

The ask was: read the 12 real route-maps from the crowboy project (`2026-06-20_01-32` … `2026-06-21_21-40`), find the route-map's shortcomings in *meaning* and *formatting*, give a **verdict grounded in the real data** on six specific proposals, and say what else makes sense. The discipline under assessment is **routelister** (the route-map generator) — specifically its **summary table** (the Route Index) and its **per-route records** (the `Movement`, `Guidance`, etc. fields). The hard constraint throughout: improve readability **without bloat**.

## Finding Summary (the per-proposal verdict)

Every proposal was checked against the measured corpus. Verdicts:

| Your proposal | Verdict | The real-data reason |
|---|---|---|
| **`grain` column is useless** | ✅ **Yes — drop the column** | Measured: **153/153 routes = "project", 0 "concept"** across all 12 maps. A column that never varies shows nothing. (Keep the *field* in the type-signature for depth runs; just drop the *display*.) |
| **`Direction` too short** | ◑ **Modified — make it *consistent*, not just longer** | Some Directions are already clear ("The proof-verdict console (operator grades the recording)"), some are cryptic ("Funding / escrow-hold"). The fix is a *consistent* self-explanatory phrase + a short gloss — and **stop restating it verbatim** in each record header. |
| **`kind` tells me nothing** | ◑ **Mostly yes — drop the column, keep the lens recoverable** | `kind` (teleological/epistemic) is **derivable from `engagement`** (the 9 verbs each map to one kind), so the column restates what `engagement` already says. Drop it; if you ever want the "advance vs sharpen" split, recover it by grouping the index — don't pay a permanent column. |
| **`is_done` + `is_done_note` columns** | ◑ **Modified — a `✓` column, yes; but owned by routelog** | **routelog already owns done-tracking** (an append-only log + a `↗` stamp). Add a narrow `✓` column to the table (default empty) — you can tick it by hand *or* routelog stamps it — but the *rich* notes stay in routelog's log, not a wide summary column. routelister never auto-fills it. |
| **`Movement` from→to subfields** | ✅ **Yes — generalized to `Move` / `Lands` / `Touches`** | Measured: Movement is the worst field — **median 224, max 483 chars**, single-line code-dumps. But from→to only fits *state-machine* routes; most routes are *actions*. So generalize to **`Move`** (what it does) / **`Lands`** (the result) / optional **`Touches`** (the code refs) — applied as a *ceiling for dense routes, not a floor for all*. |
| **`Guidance` needs better subfields** | ◑ **Modified — formalize the shape it already has** | In the better maps `Guidance` is already `Mode` + `Pointers`-each-with-a-`(bc …)`-reason. The fix is *consistency* (always that shape), not a missing structure. |

**The one organizing principle:** the route-map is a **write-once-read-many** artifact with **two surfaces that have opposite needs** — the **index** (summary table) should be *lean and scannable*, and the **records** should be *clear*. So: **lean the index** (drop the dead/redundant columns) and **layer the records** (reflow the dense fields into subfields). **Bloat is unstructured *cramming*, not content** — splitting `Movement` into labeled lines raises readability at roughly neutral length; it does not inflate.

## Finding

### Where this sits + the framing

You read 12 real maps and felt the maps were hard to parse. That instinct is right, and it's measurable. The clean way to think about the fix: a route-map is like a **commit message** — a **subject** (`Direction`), a **body** (what it does and what it lands), and a **files-changed** list (the code refs). Good maps already reach for this: the deferred-role R1 Movement literally ends *"After this, /auth/me + the UI are role-correct"* — that's a `Lands` line waiting to be named. The redesign just makes the shape consistent.

The reason this resolves your "not bloat" worry: the map is **read many more times than it's written** (the meta-loop and a cold human read it across later sessions — you were that cold reader). So we optimize for the reader, and we do it by **reflowing** content into scannable subfields, not by adding content.

### ① Lean the index (the summary table)

- **Drop `grain`** — 100% constant in every real map; a never-varying column is pure noise. The grain *field* (project- vs concept-space) stays in the type-signature for depth runs; only the column goes. (If a future map actually mixes grains, show the column then.)
- **Drop `kind`** — derivable from `engagement`; keep it in the signature, not the display. If the "advance vs sharpen" triage is ever wanted, recover it by grouping the index under `Teleological:` / `Epistemic:` sub-headers (or keep `kind` as an *optional* column) — but not as a permanent default.
- **`Direction`** = a consistent, self-explanatory noun-phrase + optional one-clause gloss (readable without the record), and **don't restate it** verbatim in the record header.
- Net: `# · Direction · grain · kind · engagement · Priority` → **`# · Direction · engagement · Priority · ✓`**.

### ② Layer the records (the per-route fields)

Replace the single dense `Movement` with **`Move` / `Lands` / `Touches`**:

- **`Move:`** — what the route does, in plain language.
- **`Lands:`** — the resulting state (what's true or exists after).
- **`Touches:`** *(optional)* — the code/artifact identifiers, **each with its load-bearing qualifier** (not a bare name-list).

**Your flagged example, rewritten** (the readability win — and note: the earlier draft of this rewrite quietly dropped the worklist's filter; the corrected `Touches` keeps it):

> *Before (~360 chars, one dense line):*
> **Movement:** Task.auto_release (stamped at funding from global SETTLEMENT_AUTO_RELEASE = manual at launch) + rule_jump caller-branch (auto→settle inline, manual→defer-mark-VERIFIED) + release_jump action + GET /admin/worklist/releases (VERIFIED jumps with no Settlement) + a release endpoint.
>
> *After:*
> **Move:** add a per-task auto-vs-manual release switch and the manual-release path — stamp each task's mode at funding from the global default, branch settlement on it, and give operators a worklist + action to release the held jumps.
> **Lands:** a verified jump either settles automatically or waits in an operator worklist for a manual release click — with **manual** as the launch default.
> **Touches:** `Task.auto_release` (← `SETTLEMENT_AUTO_RELEASE`, manual at launch) · `rule_jump` caller-branch (auto → settle-inline / manual → defer-mark-VERIFIED) · `release_jump` action · `GET /admin/worklist/releases` (VERIFIED jumps lacking a Settlement) · a release endpoint.

A cold reader gets the whole route from **Move + Lands** (two plain sentences) and drops into **Touches** for the code. The density is *quarantined*, not crammed.

**The critical rule (so this doesn't itself become bloat): `Move`/`Lands` are the shape, `Touches` is optional, and for *already-short* routes they collapse to one line each — or stay a single `Movement` line.** The subfields are a **ceiling for the dense routes** (the measured 27 over 350 chars), **not a floor forced on every route** (the short ones, down to 91 chars, don't need three labeled lines). Applied across the real corpus this generalizes cleanly — `Lands` is always meaningful (a code-state for a DEVELOP route, a settled decision for a PURSUE-SEED route, a passing oracle for a TEST route, an agreement for a CONSOLIDATE route), and `Touches` is naturally empty for the non-code routes.

**`Guidance`** stays as it is in the good maps — `Mode` + `Pointers`-each-with-a-`(bc …)`-reason — just made *consistent* (always that shape; optionally type the pointer: reuse-X / avoid-Y / sequence-after-Z).

### ③ `is_done` — yes, but routelog owns it

Add a narrow **`✓`** column to the summary, **default empty** — this meets your "edit the same table, no new artifact" goal. The nuance: **routelister must not author done-state** (the map is the inquiry's *written-once onward field*, and authoring engagement-state would break its enumerate-don't-decide identity). Instead, **routelog** — which already owns done/parked tracking and stamps `↗` into `_route.md` — also stamps the `✓`. You can still tick it by hand (it's your map); routelog is the *authoritative* writer, not the *exclusive* one. The **rich** done-notes (artifact pointer, outcome) stay in routelog's append-only log — a boolean column shouldn't try to duplicate that.

### The honest "not bloat" accounting

To be straight with you (the earlier framing overclaimed "neutral bytes"): the **index shrinks** (two columns gone), and the **per-route records grow modestly** — roughly **+25-30% on the *dense* routes**, and **~0% on the short ones** (they collapse). That growth is *structured* (scannable subfields, optional Touches), not crammed. So the net is: a leaner index + somewhat larger but *parseable* records. That satisfies "not bloat" in the sense that matters — nothing is crammed, and the one growth is bounded by the collapse-when-short rule — but it is not zero growth, and it shouldn't be sold as such. The readability gain is well worth the bounded growth.

### What else makes sense (beyond your six)

- **Stop restating `Direction`** in record headers (a small redundancy across every map).
- The `✓` column, once routelog writes it, makes routelog's existing project-wide `list` view a clean **cross-inquiry progress board** for free — worth knowing it falls out, not worth building separately.
- Leave the **`Map Header`** and the **`Excluded`** section alone — they're working well in the real maps (the Header's count + high-priority + the-one-gate is genuinely useful triage).
- The **`Meaning-gaps`** entries are already in active, healthy use in the real maps — no change needed (the feature works).

## Next Actions

### MUST
- **What:** Write the redesign into the routelister spec — §5.1 (drop `grain`+`kind` columns, `Direction` rule, the `✓` column) + §5.2 (`Movement` → `Move`/`Lands`/`Touches` with the ceiling-not-floor + Touches-precision rules; formalize `Guidance`).
  **Who:** a routelister-spec edit (`cognitive_harness/routelister/references/routelister.md`).
  **Gate:** observable — next route-system edit.
  **Why:** the verdict only changes future maps once the spec says so.

### COULD
- **What:** Extend routelog to stamp the route-map's `✓` (alongside its `↗`) on `done`/`park`.
  **Who:** a routelog-spec edit. **Gate:** condition-bound — after the `✓` column exists. **Why:** completes `is_done` without routelister authoring it.
  **Depends-on:** the MUST (the `✓` column must exist first). GATED.
- **What:** Document the optional advance/sharpen recovery (group-by-kind) for when an author wants the lens.
  **Who:** a small spec note. **Gate:** condition-bound — if the split proves wanted. **Why:** answers the one real steelman for keeping `kind`.

## Open Questions

### Monitoring
- **Will authors actually keep `Move`/`Lands` short and use `Touches` as the quarantine?** Observable across the first several maps written under the new format — if `Move`/`Lands` themselves drift dense, tighten the spec's example; if short routes get over-structured, lean on the collapse rule.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
i want u to read routelister.md files from different project [crowboy 2026-06-20_01-32 … 2026-06-21_21-40] and understand what are shortcomings, in meaning and in formatting. [proposals: grain column useless; Direction too short; kind column uninformative; add is_done + is_done_note columns editable by routelog; Movement fields too compact — want from-state/to-state subfields (bad example: the Task.auto_release Movement); Guidance needs better subfields]. inspect all; tell me your verdict based on real data and what else makes sense.
```

</details>
