# Innovation — Views as Read-Reduction for Navigational Sessions

## User Input

```text
/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-07-03_11-00__views_as_read_reduction_for_navigational_sessions/_branch.md

(Production-task mode: the 6-piece plan → finding-ready content in the plain style: (a) the verdict paragraph; (b) the purpose paragraph; (c) the coverage definitions; (d) the recipe as numbered steps; (e) the guards' three lines. Mandated inversions: the tier's name ("navigational session" undefined); the recipe's step-count (6 too heavy?); the metric's home (digest vs full-tier). Audit on SV6. Respect: no build; shipped commitments; fuzziness. Save to innovation.md.)
```

## Seed & Mode (Phase 1)

**Seed:** the 6 pieces. **Methodology-Mode Consideration:** inherited = **Standard default**; alternative = Contrarian-rethink; decision: **default** — three mandated inversions + critique downstream. *(Named/named/what-follows/decision.)*

---

## Phase 2 — Generate (principal content + mandated inversions)

### (a) The verdict paragraph (the user's question answered first)

> Yes — this is better, and most of it is already ours: your selection rule (views only for stabilized concepts) is exactly what the stabilization ceremony selects, and your "point" — reducing total finding.md reads — is the purpose statement the design was missing. Two things needed fixing, and one of them you spotted yourself. You said concepts entangle and borders aren't clean — correct, and that kills ANY coverage rule phrased at the concept level, including your own "non-view findings." The fix keeps your idea and drops the broken unit: coverage is decided per FINDING, using edges that are clean by construction — a finding leaves the raw-read set when something supersedes or consolidates it (its frontmatter says so), or when a view you just read carries its full excerpt. No borders needed anywhere. And your info-loss worry gets a structural answer rather than a promise: the newest material — everything not yet consolidated — is never read through a view at all; it stays raw.

### (b) The purpose paragraph (built up from the need)

> The corpus grows forever (history is sacred; nothing deletes), and a session's window doesn't. Today a whole-project raw read costs ~34,000 lines even skipping superseded findings — your infeasibility premise, verified. So the corpus must split into two read-layers: a **frontier** (live findings nothing has consolidated yet — read raw, at summary grade) and a **compacted past** (findings whose content has moved downstream into consolidations — read through views). Stabilization ceremonies are what move material from the first layer to the second: one consolidation finding supersedes N priors, and N raw reads become one view-head. That is the views' contribution to traversal memory, stated plainly: **they are the read-path compaction layer that keeps whole-project awareness affordable as the corpus grows.** Priced today: all views + the uncovered frontier at summary grade ≈ 3,500 lines — a tenth of the raw read, and it fits. One honesty note: this is compaction of the READ PATH only — storage never shrinks; the archive keeps everything.

### (c) The coverage definitions (verbatim-ready)

1. **Edge-covered:** the finding is a `refines:`/`supersedes:`/`corrects:` target — its content lives downstream. Safe to meet as a one-liner anywhere. (46 live findings today.)
2. **Soft-covered:** the finding's full excerpt (top-k grain, ~25 lines) appeared in a view read this session. Awareness-sufficient; the pointer carries the depth. **One-liner mentions do NOT cover — an address is not awareness.**
3. **The frontier:** live findings that are not edge-covered (120 today — computable by two greps: list live `finding.md` paths; subtract the corpus's frontmatter targets). Soft-coverage subtracts further at read time.

### (d) The full-read recipe + the step-count inversion

**Inversion (mandated: "6 steps is heavy for a lightweight protocol"):** correct — the recipe compresses to THREE steps with nothing lost (collection folds into the reading step; the subtraction into the computing step; frontier-wins becomes a rule line, not a step):

> **The full-read warm-up (whole-project awareness):**
> 1. **Read all views** (note each header's date; collect the top-k excerpt source paths as you go).
> 2. **Compute the remainder:** the frontier (live findings minus the corpus's supersession targets — two greps) minus the paths collected in step 1.
> 3. **Summary-read the remainder** (the Finding-Summary regex per file).
> **Rule:** on any conflict, the raw frontier summary outranks any view (subordination, applied to warm-up). **The step-2 count prints with the read.**

**Inversion (mandated: "'navigational session' is undefined vocabulary — name tiers by what they read"):** correct — no session taxonomy exists in this house, and naming a tier after an undefined reader imports debt. **The tiers are named by what they read:**
- **digest-read** (default light warm-up): the project digest, 204 lines.
- **full-read** (whole-project awareness — what the user called the non-worker/navigational case): the recipe above, ≈3.5k lines today.
- **topic-read** (working a concept): the topic's view + drilled findings, on-demand, unchanged.

### (e) The guards' three lines + the metric-home inversion

1. *(staleness)* **"Views may be stale between regenerations — by design. The warm-up survives it: whatever moved past a view arrives raw in the same read (the frontier includes everything newer), the frontier outranks views on conflict, and every view prints its date. Regenerating first is always available, never required."**
2. *(the race — with the metric)* **"The full-read stays cheap only while consolidations keep rough pace with new inquiries. The health metric is the frontier count."** **Inversion (mandated: metric home):** the count matters most to full-readers but is SEEN most in the digest — **canonical home: the digest header** (`frontier: 120`); the full-read prints it too as step 2's natural by-product. One number, two surfaces, no bookkeeping (derived per run).
3. *(the valve)* **"Nothing here generates or forces anything: ceremonies remain user-declared; the warm-up reads only the views that exist; a heavy frontier is reported as a number, never converted into pressure."**

---

## Inherited Frame Audit

**Seed central assumption:** SV6's better-as-amended is right. **Challenges present:** three mandated inversions ran; two renamed/restructured real debt (tier names; recipe compression), one settled a placement (metric home). The verdict itself was NOT weakened by any — the audit probed whether the amendments smuggle rejection (they don't; the user's purpose and formula survive intact, amended at the unit and the presentation). **Audit: does not fire.**

## Phase 3 — Test, dispositions, assembly

**Dispositions:** ACTIONABLE (into the finding): a–e; the definitions, recipe, and guard lines land with the protocol's build. DEFERRED: the all-views cap (trigger visible in the printed arithmetic).

**Assembly check:** the pieces compose; one emergent kept: **the two-layer read model (frontier raw / past compacted) is the same shape as the seeds/territories boundary** — the newest layer is always read unmediated, whether generating (seeds) or warming (frontier); compression only ever applies to what history has already judged. A one-line house principle: **"the newest layer is never mediated."** **Axis coverage:** naming (reader↔read), step-count (6↔3), metric-home (digest↔full↔both-one-canonical) — ✓. **Shared-input check:** grounded in live measurements + shipped clauses; residues in their steelmen.

## Telemetry

- Generators: 3/4 (Combination — the two-layer/seeds-boundary emergent; Absence — the missing purpose-half named; Extrapolation — the race's growth path) | Framers: 3/3 (Lens — verdict-first; Constraint — the 3-step compression; Inversion — all three pieces)
- Convergence: YES | Survivors: all five pieces (renamed tiers; compressed recipe; homed metric)
- Per-piece log: a [verdict-first, credit+correction] · b [purpose built-up + honesty note] · c [definitions verbatim] · d [Inv:steps → 3; Inv:names → digest-read/full-read/topic-read] · e [Inv:metric → digest-header canonical; guards as three lines]
- Failure modes observed: none
- **Overall: PROCEED**
