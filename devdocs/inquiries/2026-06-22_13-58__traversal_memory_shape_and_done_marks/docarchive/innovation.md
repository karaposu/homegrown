## User Input

`_branch.md` + `surfacing.md` + `sensemaking.md` + `decomposition.md` (this inquiry). Intent: the crystallizing NAME + the decompose-by-where-it-lives framing made vivid + concrete TEMPLATES (the selection-ledger shape; the four-organ map; the mark) + the prior re-test. Inversion MANDATORY — steelman the opposites ("the user is wrong, a fat standing record IS needed because reconstruction is fragile/expensive"; "even the thin ledger is unnecessary"; "drop the mark after all"). Ground in the canon + the real specs.

---

# Structural Innovation — Traversal-Memory Shape & Route Done-Marks

## Seed + Methodology-Mode

**Seed (reframe of a prior):** decompose traversal memory by where each component lives → only selection+rationale is homeless → a thin durable selection-ledger + session-reconstruction-by-warming; a separate cheap mark; the prior finding's fat-log + drop-✓ corrected. **Inherited mode:** Standard default + **Inversion strongly weighted** (MANDATORY; corrects a prior). **Decision: default** — the reconciliation survived canon-grounded sensemaking; the Inversion runs as a strong in-mode steelman. Meta-decision run → Piece-Level Inversion applied.

---

## Phase 2 — Generate

### Inversion (Framer — MANDATORY) 🔑

**Central assumption:** "store only the homeless selection-rationale + reconstruct the rest; keep the cheap mark; the user is right."

**L1 — "The user is wrong; a FAT standing record (visits+selections+rationales+outcomes all written) IS needed — reconstruction-by-warming is fragile (pointers rot, artifacts get archived) and expensive (re-reading dozens of artifacts each session)."**
- *Steelman:* warming = reading many artifacts each session is costly and breaks when links rot; a denormalized standing record is one fast read and survives churn.
- *Why it fails (canon + structural):* (a) the canon EXPLICITLY chose artifact-first warming AND warned against over-mapping — "the warmed context should not be tried to be mapped — it is a context and time waste"; it prescribes **3-stage warming**, not read-everything, so the cost is bounded; (b) a denormalized record **duplicates and rots** — when an artifact changes, the logbook copy goes stale (cache-invalidation / update-anomaly); (c) it reduces code-meaning to lossy NL (the user's point). So the fat record trades a *bounded* reconstruction cost for an *unbounded* staleness cost. → REJECTED, with a refinement: **the ledger's pointers must be STABLE identifiers** (inquiry-id + route-id, not fragile file paths) so reconstruction is cheap and robust, and warming stays **staged**.

**L2 — system-level: "Even the thin selection-ledger may be unnecessary — the SELECTION is already implied by the inquiry chain (inquiry B continues-from inquiry A's route R3), and the RATIONALE could live in the child inquiry's `_branch.md` (which already records why it was framed) / the relationship-links."** 🔑
- *System reframe:* don't build a new central ledger — record the homeless sliver as **enriched relationship-links in the EXISTING artifacts** (the child's `_branch.md` "CONTINUES FROM" + a one-line rationale; the parent's `_route.md`).
- *Why it's fertile (and mostly right):* this takes the user's "use existing traceable artifacts" to its logical end — the durable footprint approaches **zero new files**. The selection+rationale becomes a stable link + a rationale-line in artifacts that already exist. **But** a caveat keeps it from fully replacing a ledger: not every selection spawns a child inquiry (some routes are executed directly, like spec edits; some are deferred), and a *central* view still helps the orchestrator see the whole selection-history in one read. → so L2 **strengthens the user's direction** and becomes the **leanest deferred option**: prefer enriching existing links; add a central thin index only if the one-read view is needed. (This is the gated design choice — flag it.)

**L3 — "Drop the mark after all (my prior was right)."**
- *Why it fails:* the user's operational reason holds (dozens of async pieces; glance-ability), and on a STATIC concluded piece the mark is durable + one bit (non-duplicative). The prior over-killed it. Keep the mark.

### Absence Recognition (both levels)
- **Patch:** missing a durable record of selection+rationale (the homeless sliver).
- **Redesign (from scratch):** a SUSTRALL-native system would capture selection+rationale at the **moment of dispatch**; its absence is because dispatch is a human act today with no recording hook.
- **Redesign (already-present):** the relationship-links + `_branch.md` "CONTINUES FROM" **already partially capture selection** — enrich them with the rationale rather than build new (the L2 direction).

### Domain Transfer (native + different) 🔑
- **Native (databases): NORMALIZATION.** Don't store derivable/duplicable data; store the source-of-truth once and **reference** it. Outcomes are the source-of-truth (artifacts); the ledger stores only the non-derivable **selection-rationale + foreign keys (pointers)**. The fat log is a denormalization anti-pattern — its update-anomaly is **staleness**.
- **Native (version control): the COMMIT LOG.** git stores **diffs + commit *messages* (the rationale)**, never a re-description of the whole tree each commit; the tree is **reconstructed** (checked out). The selection-ledger is a **commit log of route choices**: the rationale is the commit *message*, the outcome is the *SHA you can check out* — **you never paste the code into the message.**
- **Different (cognition): episodic memory.** Humans don't store full replays — they store **pointers + gist** and **reconstruct on recall**. Session warming = reconstructive recall (ties to the north-star's "discontinuity awareness").

### Combination
- normalization + the git-commit-log → the ledger is a **commit log of route choices** (rationale = message, pointer = SHA, state reconstructed).
- the mark + routelog → the mark **IS** routelog's `list`, projected onto the static piece.

### Constraint Manipulation (both directions)
- **ADD** "zero new files" → the homeless sliver records as **enriched relationship-links in existing artifacts** (the L2 direction) → near-zero durable footprint.
- **REMOVE** "the ledger must be central" → distribute it into the inquiry graph; add a central index only if the one-read view is needed.

### Lens Shifting
- **DB-normalization lens:** store the non-derivable, reference the rest.
- **git lens:** log the rationale, reconstruct the state.
- Both → the same thin-record + reconstruct architecture → robust.

### Extrapolation
- At multihead/parallel scale, the selection record (links or a thin index) becomes the **cross-head coordination record** the orchestrator reads — exactly the navigational-vs-orchestrator-memory question the user deferred.

### Inherited Frame Audit
Central assumption challenged by L1 (fat record) + L2 (even the ledger unnecessary). Audit does **not fire**.

---

## Phase 3 — Test (5-test cycle)

| Survivor | Novelty | Scrutiny | Fertility | Actionable | Mech-indep |
|---|---|---|---|---|---|
| "normalize the memory: store what's not derivable, point at the rest, reconstruct the state" | new framing | L1 (fat record) refuted (staleness > bounded reconstruction); canon over-mapping warning | the L2 enrich-existing-links option | the templates | Inversion + Domain-Transfer (DB + git + cognition) converge |
| the selection-ledger as a "commit log of route choices" | new | L2 (even ledger unnecessary) → push to existing links (fertile, kept as leanest option) | scales to multihead coordination | template (b) | normalization + git |
| keep the cheap per-piece mark | (re-confirmed) | L3 refuted (operational + static-piece durable) | routelog `list` projection | template (d) | user-reason + routelog |

**Disposition:** ACTIONABLE (multi-mechanism convergent). L1 rejected-with-refinement (stable pointers + staged warming); L2 fertile (enrich-existing-links = leanest deferred option); L3 re-confirmed. Compliance satisfied.

**Assembly check (emergent):** the survivors assemble into **the normalized cross-run memory** — store only the homeless selection-rationale (a commit-log of choices, ideally as enriched links in existing artifacts), point at outcomes, reconstruct the rich state by staged warming; a cheap mark (routelog) on the static piece; routelister untouched. Emergent value: the durable footprint is near-zero, nothing rots, and it still satisfies the turn-invariant.

**Axis coverage:** the orthogonal axes — *what to store* (rationale vs outcome) and *where* (new ledger vs existing links) — both got variants (the normalization split; the L2 push). The *mark* axis is separate and covered. Covered.

---

## Crystallizing Output

### The NAME: **Normalize the memory — log your *choices*, not the *territory***

> The prior framing said "keep a travel log." The correction: **you don't log the territory — you log your *choices*.** Outcomes (the code, the findings) are the territory — they already exist and are traceable; re-describing them in a logbook is a **denormalization anti-pattern** (it duplicates and goes stale). What has no home is **which route you chose and why.** So store *that* — and *point* at the territory.

The git analogy makes it concrete:

> Cross-run memory is a **commit log of route choices.** The **rationale** is the commit *message*; the **outcome** is the *SHA you can check out* (a pointer to the resulting artifact). **You never paste the code into the commit message** — and you never paste the outcome into the memory. The rich state ("where am I, what's done") is **reconstructed** (checked out / warmed), not stored.

### (a) Decompose traversal memory by where each component already lives

> | component | where it already lives | what to do |
> |---|---|---|
> | **visits** (which inquiries ran) | the inquiry folders | nothing — they exist |
> | **outcomes** (what each produced) | `finding.md`, code, spec edits | **point**, don't re-describe |
> | **selections** (which route, among the options) | *nowhere* | **record** (stable id) |
> | **rationales** (why that route) | *nowhere* | **record** (one line) |

### (b) The selection-ledger entry (a commit-log of choices — NOT an outcome re-description)

```
chose:    2026-06-22_00-20 / R1   (essentiality → spec)
because:  unblocks the whole feature; lowest-risk first move
led-to:   2026-06-22_00-20/finding.md  +  the routelister spec edit   ← pointers, not prose
```

(Leanest form, per the Inversion's L2: this may live as an **enriched relationship-link in the existing artifacts** — the child inquiry's `_branch.md` "CONTINUES FROM" + a rationale line — rather than a new central file. Defer the central-vs-distributed choice; prefer existing-artifact enrichment.)

### (c) The four organs (each function lives exactly once)

> | organ | function | mutability |
> |---|---|---|
> | **routelister** | enumerate the routes (the map-piece) | regenerated per run; authors marks **empty**, never reads them |
> | **routelog** | the **done/explored mark** | append-only; projects onto the static piece |
> | **selection-ledger** *(thin; maybe just enriched links)* | record **choice + rationale + pointers** | append-only; one line per turn |
> | **orchestrator session** | **reconstruct** the rich state by warming | ephemeral; rebuilt each session |

### (d) The mark (the user's operational ask, kept)

A cheap binary **done/explored** mark per route on the **static concluded** map-piece — `routelister` authors it empty and never reads it; **routelog** fills it (it already owns done/parked) or you hand-tick it. One bit; duplicates nothing; glance-able across dozens of async pieces.

### Prior-finding re-test (Changes from Prior)

> | from `2026-06-22_10-37` | status | why |
> |---|---|---|
> | routelister stays a pure enumerator; never authors tracking | **survives** | canon: "one enumerator, two controllers" |
> | the need (cross-run memory) is real / the keystone | **survives** | SUSTRALL Tier-1 |
> | "travel log = route-id · why · **outcome**" | **corrected** | re-describes traceable outcomes — denormalization; record **pointers**, not prose |
> | "**drop the ✓**" | **corrected** | over-killed the cheap mark; on a static piece it's durable + one bit |

---

## Telemetry
- **Generators:** 4/4 (Combination, Absence, Domain-Transfer, Extrapolation). **Framers:** 3/3 (Inversion, Constraint-Manip, Lens-Shift). Full coverage.
- **Convergence:** YES — Inversion(reject-fat-record + L2-push-to-existing-links) + Domain-Transfer(DB-normalization + git-commit-log + episodic-memory) + Absence(enrich-existing-links) + Combination(commit-log-of-choices) converge on the normalized cross-run memory. 4+ mechanisms.
- **Survivors tested:** 3/3.
- **Failure modes observed:** none. (Survival-Bias: the fat-record + drop-the-ledger alternatives were generated and tested — L1/L2.)
- **Piece-level Inversion compliance:** satisfied (central commitment inverted to system-level depth — L1 rejected-with-refinement, L2 fertile-refinement).
- **Overall: PROCEED.**
