## User Input

`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-06-21_23-26__routelister_routemap_format_and_field_improvements/_branch.md`

(Prior outputs consumed: surfacing.md, sensemaking.md, decomposition.md, innovation.md; the 12 real crowboy route-maps + measured stats in context. Adversarially test, grounded in REAL DATA + the routelister/routelog specs: (1) the two-surface/commit-shape framing; (2) drop grain+kind (steelman keeping kind); (3) Move/Lands/Touches applied LITERALLY to several real Movements; (4) is_done = routelog-owned (steelman "just let routelister write it"); (5) Direction = consistency; (6) info-loss in the rewrite; (7) not-bloat measured net.)

---

# Structural Critique — The Route-Map Redesign

## Phase 0 — Dimension Construction

**Inherited-frame premises (rest on the measured data + routelister/routelog identity):** FP1 "grain always project / kind derivable" — measured (153/153) + logical; holds. FP2 "the map is read-many → reader-optimize" — the user's complaint IS a read-failure; holds. FP3 "routelog owns done-state" — routelog's spec; holds.

| # | Dimension | Weight | Success criterion |
|---|---|---|---|
| D1 | **Framing-validity** | medium | two-surface/commit-shape is a real principle (generalizes + predicts), not re-description |
| D2 | **grain/kind-drop correctness** | critical | safe to drop; kind-loss assessed honestly |
| D3 | **Move/Lands/Touches generalization** (substance) | **critical** | fits ALL route-types in the real corpus; no awkward empties; actually reduces density |
| D4 | **is_done resolution** | critical | routelog-ownership necessary, not bureaucratic; doesn't defeat the user's hand-edit desire |
| D5 | **Direction-rule actionability** | medium | "consistent self-explanatory" is a concrete bar |
| D6 | **Info-preservation** (substance) | **critical** | the rewrite preserves ALL the original's precision |
| D7 | **Not-bloat (measured)** | **critical** | the net size/complexity change is honestly accounted; the user's hard constraint |

---

## Phase 1 — Fitness Landscape

- **Viable:** framing-real ∧ grain/kind-drop-safe ∧ Move/Lands generalizes ∧ is_done-resolved ∧ Direction-actionable ∧ no-info-loss ∧ not-bloat-honest.
- **Dead:** Move/Lands forced on routes where it's awkward/empty (D3); the rewrite quietly dropping precision (D6); claiming "neutral bytes" if false (D7).
- **Boundary:** kind (D2 — the steelman has a point); is_done (D4 — the user's hand-tick desire vs ownership); Touches' inclusion line (D3).
- **Unexplored:** adoption in practice (will authors follow the subfields?) — observable only after use.

---

## Phase 2 — Adversarial Evaluation + Phase 3 Verdicts

### C1 — The two-surface / commit-message framing
**Prosecution:** a cute analogy that just re-describes "split the dense field."
**Defense:** four independent domains converge (git/newspaper/database/recipe) AND it predicts the design (subject/body/files → Direction/Move-Lands/Touches) AND — the real-data clincher — **the best existing Movements already gesture at it**: deferred-role R1 ends "*After this, /auth/me + the UI are role-correct*" — an implicit `Lands`. So the format authors are *already reaching for* Move→Lands; the framing names what good maps already do. **SURVIVE** — caveat: present it as the operative *template*, not just a metaphor.

### C2 — Drop grain + kind
**Prosecution (keep kind):** teleological/epistemic = "advance vs sharpen" — a real triage lens; mapping 9 verbs → 2 kinds is a small cognitive tax a column saves.
**Defense:** grain — drop unconditionally (measured 153/153 dead). kind — the steelman is *real*: advance/sharpen is a legitimate at-a-glance triage. But the kind is derivable and `engagement` is right there, and a whole column to save a trivial 9→2 mapping is the redundant display the lean-index move targets.
**Collision:** grain is a clean KILL-the-column; kind is softer. **REFINE** — drop `grain` hard; **drop the `kind` column by default but make the advance/sharpen split recoverable** (group the index under `Teleological:` / `Epistemic:` sub-headers if the author wants it, or keep `kind` as an optional column). kind earns a softer verdict than grain.

### C3 — Move/Lands/Touches generalization (THE substance test — applied to REAL Movements)
**Substance-prosecution (apply literally across route-types):**
- **TEST** (settlement R6 — *"assert held = Σreleases after random approve/reject/crash sequences"*) → **Move:** assert the conservation identities under random approve/reject/double-click/crash. **Lands:** a test oracle proving exactly-once + no-over-release. **Touches:** *(none — conceptual).* ✓ works; Touches empty.
- **DEVELOP** (deferred-role R1) → **Move:** build the read-side pivot (add `User.role` + the role→cap dict; switch `capabilities_for`). **Lands:** `/auth/me` + the UI are role-correct; the gates still read the old config. **Touches:** `User.role` enum (+Alembic) · `ROLE_CAPABILITIES` · `capabilities_for` swap · `is_operator` fallback kept · backfill. ✓ clean.
- **PURSUE-SEED / decide** (settlement R1 — *"decide the commission model"*) → **Move:** decide off-the-top (configurable rate) vs on-top. **Lands:** a settled commission model the release math reads. **Touches:** *(none).* ✓ works; Lands = "a decision," Touches empty.
- **CONSOLIDATE** (deferred-role R6) → **Move:** reconcile back to the structural-surface finding. **Lands:** the two findings agree (the registry = two composing maps). **Touches:** `ACTION_CAPABILITY` · `ROLE_CAPABILITIES` · the target finding. ✓ works.
**Result:** `Move` + `Lands` generalize cleanly to **every** route-type (`Lands` = a code-state, a decision, a passing oracle, or a reconciliation — always meaningful). `Touches` is **genuinely optional** (present for code-DEVELOP routes, empty for decide/TEST/CONSOLIDATE).
**The real hit:** for **already-short Movements** (the measured min is 91 chars), three mandatory subfields is *over-structuring* — a 1-line route doesn't need 3 labeled lines.
**Collision:** **REFINE** — `Move`/`Lands` are the **shape** (always the gist), `Touches` is **optional** (only when code/artifact refs need quarantining), and for short Movements they may collapse to one line each or stay a single `Movement` line. **The subfields are a CEILING for dense routes, not a FLOOR for all.** (This is the load-bearing refinement — it preserves the win on the dense 27 without taxing the short ones.)

### C4 — is_done = routelog-owned ✓
**Prosecution (the user's "just let routelister write it"):** for a solo user editing by hand, routelog-ownership is bureaucratic — they wanted to *type a ✓ in the table*. Requiring routelog makes it *harder*.
**Defense:** the tension is real, but it dissolves — "ownership" was over-stated. The COLUMN exists; *who may tick it* and *who is authoritative* are different questions. The identity concern is only that **routelister must not AUTHOR done-state at conclude** (and must not duplicate routelog's rich log) — NOT that a human can't tick a box in their own map.
**Collision:** **REFINE** — the `✓` column is **hand-editable AND routelog-writable**; routelog is the **authoritative** writer when engagement is actually logged, but **a solo user ticking by hand is fine** (it's their map). Soften "routelog-owned" → "routelog-authoritative, not exclusive; routelister authors it empty." This honors the user's simple desire *and* the identity (routelister never auto-fills it; rich outcomes still live in routelog's log).

### C5 — Direction = consistency-not-length
**Prosecution:** "consistent self-explanatory phrase" is vague.
**Defense → concrete bar:** Direction = **a noun-phrase naming the concept + (optionally) a short parenthetical gloss of what engaging it does** — e.g. "The proof-verdict console (operator grades the recording)" — readable without opening the record. That's a checkable rule.
**Collision:** **REFINE** — state the concrete bar (noun-phrase + optional gloss). On the restatement: the record header keeps a short `### Rn — <Direction>` for navigation but doesn't re-explain. Minor.

### C6 — Info-preservation (does the rewrite quietly drop precision?)
**Prosecution:** the "readable" rewrite lost detail.
**Substance-check against the original:** `SETTLEMENT_AUTO_RELEASE` default (manual at launch) ✓ kept; caller-branch semantics (auto→settle-inline / manual→defer-mark-VERIFIED) ✓ kept in Touches; **the worklist filter "(VERIFIED jumps with no Settlement)" — DROPPED.** The rewrite's Touches listed `GET /admin/worklist/releases` *without* its load-bearing qualifier.
**Collision:** **the prosecution LANDS** — the rewrite was slightly lossy. **REFINE** — **`Touches` is not a bare name-list; each ref carries its load-bearing qualifier** (e.g., `GET /admin/worklist/releases (VERIFIED jumps lacking a Settlement)`). The corrected rule preserves precision. (Good catch on the innovation's own example.)

### C7 — Not-bloat (the measured net)
**Prosecution:** Move/Lands/Touches + a ✓ column INCREASE per-route size; the user said not-bloat; innovation claimed "neutral bytes."
**Defense (concrete count):** the rewritten example — original ~360 chars/1 line; the Move/Lands/Touches version ≈ 460 chars/3 lines. So the record **grows ~25-30%** — **"neutral bytes" was overstated.** BUT: the **index shrinks** (2 columns dropped), and the record growth is **structured** (scannable subfields, optional Touches, collapse-when-short) not crammed.
**Collision:** **REFINE** — honest accounting: *the index shrinks; the per-route records grow modestly (~25-30% on dense routes, ~0 on short ones via collapse) but become parseable.* The user's "not-bloat" = "don't cram more in"; **structured growth that aids reading is acceptable, but do not claim zero growth.** Worth-it **holds** (readability ≫ modest structured growth) *because* the collapse-when-short + optional-Touches rules bound it.

---

## Phase 3.5 — Assembly Check — the refinements

The redesign survives; the caveats converge on six finding-instructions:
1. **`Move`/`Lands` are the shape (always); `Touches` is optional; collapse to one line / a single `Movement` when the route is already short** — subfields are a *ceiling for dense routes, not a floor for all* [C3, load-bearing].
2. **`Touches` preserves precision** — name + the load-bearing qualifier, not a bare name-list [C6 — corrects the example's quiet loss].
3. **grain DROP hard; kind drop-by-default but the advance/sharpen split recoverable** (group-by-kind sub-headers, or optional column) [C2].
4. **The `✓` column is hand-editable AND routelog-writable** — routelog authoritative-not-exclusive; routelister authors it empty [C4 — honors the user's hand-tick].
5. **Direction bar = noun-phrase + optional gloss** (concrete) [C5].
6. **Honest not-bloat accounting** — index shrinks; records grow modestly-but-structured; not "neutral bytes" [C7].

---

## Phase 4 — Coverage + Convergence

- **(c) Verdicts:** C1 SURVIVE · **C2 REFINE** · **C3 REFINE** · **C4 REFINE** · **C5 REFINE** · **C6 REFINE** · **C7 REFINE** — all survive; six REFINEs, no KILL. The redesign is sound but its *rules* needed the six corrections.
- **(d) Coverage:** all 7 dimensions; the load-bearing axes (D3 generalization, D6 info-loss, D7 not-bloat) got the hardest prosecutions and landed real hits → constructive corrections (including catching the innovation's own lossy rewrite + overstated neutral-bytes).
- **Adversarial strength:** STRONG — C3 (over-structuring short routes), C6 (the dropped worklist filter), C7 (the honest ~30% growth), C4 (the hand-tick desire) all landed genuine hits, defended via real-data application, not hand-wave.
- **Landscape stability:** STABLE (redesign viable with the six refinements; nothing dead).
- **External grounding:** applied Move/Lands/Touches to **four real Movements across four engagement-types** (not just the example); cited the measured stats + the routelog spec. Strongly anchored.
- **Failure modes checked:** Wrong-dimensions (no), Rubber-stamping (no — six REFINEs incl. catching the prior step's own lossy rewrite), Nitpicking (no — hits on load-bearing axes), Dimension-blindness (no — not-bloat measured), Self-Reference-Collapse (guarded — grounded in real data, not taste), External-Grounding-Absence (no — real Movements applied).

### (e) Signal — **TERMINATE with ranked survivors**

1. **C3 (Move/Lands ceiling-not-floor) + C6 (Touches preserves precision)** — the two load-bearing refinements to the record redesign.
2. **The assembled redesign (C1+C2+C5+C7)** — SURVIVE, conditioned on the six finding-instructions.
3. **C4 (is_done hand-editable + routelog-authoritative)** — SURVIVE, the user-honoring softening.

**Constructive output:** the six finding-instructions, led by **Move/Lands-as-ceiling-not-floor** (don't tax short routes), **Touches-preserves-precision** (the corrected, non-lossy rule), and the **honest not-bloat accounting** (index shrinks, records grow modestly-but-structured).

---

## Convergence Telemetry

- **Dimension coverage:** 7/7 (critical axes + 2 substance [generalization, info-loss] + the measured not-bloat axis).
- **Adversarial strength:** **STRONG** (C3 + C6 + C7 + C4 landed genuine hits; C6 caught the prior step's own example dropping the worklist filter).
- **Landscape stability:** **STABLE.**
- **Clean SURVIVE exists:** **YES** (C1; the redesign survives with six REFINEs, no KILL).
- **Failure modes observed:** none uncontrolled.
- **Overall: PROCEED** — the redesign is sound and real-data-validated; the constructive output is the six finding-instructions, with Move/Lands-as-ceiling, Touches-preserves-precision, and the honest not-bloat accounting as the load-bearing corrections.
