# Surfacing — Thin Artifact

## User Input

devdocs/inquiries/2026-06-10_18-50__deferred_vs_gated_route_state_vocabulary/_branch.md

## Mode + Entry Point

- **Mode:** DUAL — artifact case (the corpus's existing state-words, ground-truthed by grep this run; the exact DEFERRED occurrences in the challenged drafts) + possibility case (the candidate tags; the taxonomy options).
- **Entry point:** signal-first (purpose: distinction + tag + propagation + taxonomy).
- **Territory:** explicit-bounded. Boundary-discovery: not fired.

## Traversal Trace

| # | Region | Item identifiers | Relevance | Conf | Note |
|---|---|---|---|---|---|
| 1 | R1: the corpus's existing state-words (ground-truthed this run) | **DEFERRED** (finding template, Next Actions §): *"Items deliberately postponed"* with *revival triggers* — a CHOSEN disposition: someone weighed the item and decided "not now"; revival often needs a judgment ("its second occurrence"; "when multihead becomes real") · **GATED** (the template's COULD-pattern, quoted): *"Depends-on: MUST item X. This COULD is GATED — do not act until the MUST resolves"* — a DEPENDENCY state: nobody decided against the item; it is simply not eligible until a named condition resolves, and becomes actionable the moment it does · **BLOCKED** (Open Questions §): *"Cannot be answered until X ships"* — same dependency shape, applied to QUESTIONS rather than actions · **PARKED** (the Expedition's ledger verb, 8 usages): the ACTION of recording an entry in the ledger with its trigger — orthogonal to WHY it sits there | core | HIGH | The user's instinct is corpus-confirmed: DEFERRED and dependency-unmet are ALREADY two different words here — the meaning-first drafts used the wrong one of an existing pair |
| 2 | R2: the exact occurrences in the challenged drafts (grepped) | All UNAPPLIED (pre-application fix): **(a)** the Summary's Gate-1 line ("is DEFERRED — parked in the ledger…") · **(b)** the guarantee's NAME ("deferred ≠ lost") · **(c)** the principle's body (Gate 1 "Action: DEFER — park…") · **(d)** the name-section's "lazy deferral on decoupled clocks" + scattered "deferral queue" phrasings · **(e)** the canon draft's materialization-gate bullet ("is DEFERRED — parked with the trigger…") + its guarantee bullet ("Deferred ≠ lost") · also the goal-line "deferred routes never lost." NOT challenged and correctly used: the finding's own Next Actions DEFERRED section (those ARE deliberate postponements); "lazy descent"; the kills' "defer until stable" phrasings (mixed — some describe the gate, some the principle generally) | core | HIGH | The fix is word-level across ~6 spots in one unapplied finding + its embedded canon draft; the guarantee's name itself is one of the occurrences |
| 3 | R3: the semantic distinction (the user's unnamed intuition, made precise) | **Agency:** DEFERRED = somebody DECIDED "not now" (a disposition, with a revival judgment usually pending); the gate's state = NOBODY decided against it — its PRECONDITION is unmet (meaning not yet stable), and eligibility returns AUTOMATICALLY when the trigger fires · **Trigger nature:** deferred items carry revival TRIGGERS-as-judgment-invitations ("revisit when X" — a human/Selector re-decides); gated items carry RELEASE CONDITIONS ("meaning-Confidence reads HIGH" — checkable, self-releasing at the see-phase's ledger-read) · **Ledger consequence:** a ledger that says "deferred" about gate-held routes LIES ABOUT AGENCY — readers infer a choice was made when none was · **Hygiene bonus:** "deferred" smells like a decision (disposition — the NOT-list's excluded category); "gated-on: [condition]" is a checkable dependency DESCRIPTION — the rename strengthens describe-vs-decide | core | HIGH | The distinction in one line: deferred = chosen "not now" awaiting re-decision; gated = ineligible-until-condition, self-releasing |
| 4 | R4: the candidate tags (possibility) | **GATED-on(condition)** — the corpus's own word for exactly this state (the COULD-pattern, verbatim); the meaning-first finding even calls its rules "the gates" — a route held by the materialization GATE being "GATED" is self-describing; collision check: "gated" also appears as inquiry-status slang ("the schema inquiry stays gated") — same meaning (condition-unmet), so the overload is harmonious, not colliding · **WAITING-ON(condition)** — plain, accurate; no corpus pedigree; adds a synonym where one exists · **BLOCKED-on** — the template uses it for questions/external dependencies; using it for in-system condition-waits would stretch it toward externality it doesn't have · **PENDING** — vague (pending what?); fails the condition-naming requirement · **HELD** — neutral but new | core | HIGH (adjudication to sensemaking) | GATED-on leads: zero new vocabulary, self-describing against the gates, the corpus's own established usage for precondition-unmet |
| 5 | R5: the taxonomy options (possibility) | **The four-word map (leading):** **DEFERRED** = deliberately postponed by a chooser; revival = a judgment invitation · **GATED-on(condition)** = precondition-unmet; release = automatic when the named condition fires · **BLOCKED-on(external)** = waiting on something outside the system's control (ships/data/decision-by-user) · **PARKED** = the ledger ACTION recording ANY of the above (an entry is parked AS deferred / AS gated-on(X) / AS blocked-on(Y)) · Alternative: collapse BLOCKED into GATED (both dependency-states; differ only in internality) — but the template already uses both with distinct flavors, and external-vs-internal matters for choosing (a gated route may be actionable by DOING the dive; a blocked one cannot be hurried) | core | HIGH | The four-word map preserves all existing template meanings and gives the ledger a two-part entry shape: parked-as-STATE with its condition |
| 6 | R6: propagation shape + guarantee rename | The fix = pre-application word edits in the meaning-first finding (+ its embedded drafts): Gate-1 lines → "is **GATED** — parked in the ledger as `gated-on: meaning-stability(concept)`"; the guarantee's name → **"gated ≠ lost"**? — careful: the guarantee covers gate-held routes specifically; "parked ≠ lost" may be the better umbrella (covers deferred AND gated entries) — candidates: "gated ≠ lost" (precise to the gates) vs "parked ≠ lost" (ledger-wide) · "the deferral queue" → "the parking ledger"/"the gate queue" · "lazy deferral on decoupled clocks" (the name-section's SEMANTIC description) — here "deferral" is the plain-English word for laziness, not the corpus tag; may stand with one clarifying parenthetical, or re-word to "lazy postponement"/"lazy holding" — naming-collision judgment for sensemaking · The finding's actual DEFERRED section (Next Actions) stays — those are genuine deliberate postponements | core | HIGH | One honest wrinkle: plain-English "defer/deferral" (the lazy-evaluation semantics) vs corpus-tag DEFERRED — the fix should rename the TAG usages and may keep ONE clearly-marked plain-English use, or purge for safety |
| 7 | R7: collision sweep for GATED | Existing usages: the COULD-pattern ("This COULD is GATED") ✓ same meaning; "the schema inquiry stays gated (≥3 turns)" ✓ same; the Turn Architecture's "gates" (autonomy gates) — the LADDER's gates are evidence-thresholds for trust-graduation: also condition-unmet-until-met ✓ harmonious; the meaning-first finding's own "the two gates" (the rules) — a route held by a gate being GATED is the natural passive ✓ · No usage of GATED meaning anything else found | core | HIGH | The anti-regrowth test passes: GATED maps to exactly one kind (condition-held) everywhere it appears |

## State Summary

**Territory echo:** the corpus's state-words (ground-truthed) + the challenged drafts' occurrences + the candidate/taxonomy spaces.

**Purpose echo:** the distinction + the tag + the propagation edits + the taxonomy.

**Coverage map:**
| Region | Coverage | Aggregate relevance |
|---|---|---|
| R1 existing state-words | grepped + quoted | core |
| R2 the occurrences (~6 spots, all unapplied) | grepped | core |
| R3 the distinction made precise | derived | core |
| R4 candidate tags | enumerated w/ leader | core |
| R5 taxonomy options | enumerated w/ leader | core |
| R6 propagation + the guarantee-name and plain-English wrinkles | mapped | core |
| R7 GATED collision sweep | swept clean | core |

**Confirmed-absent:** no corpus usage of GATED with a non-condition meaning (the collision sweep is clean); no applied artifact carries the wrong word (everything challenged is in unapplied drafts — no corrigendum needed, a pre-application edit suffices).

**Concept-names list (provenance = region):** the agency distinction (chosen-not-now vs ineligible-until) (R3) · trigger-as-judgment-invitation vs release-condition (R3) · the ledger-lies-about-agency harm (R3) · **GATED-on(condition)** as the leading tag (R4) · the four-word map: DEFERRED / GATED / BLOCKED / PARKED (R5) · parked-as-STATE entry shape (R5) · the guarantee-rename question (gated≠lost vs parked≠lost) (R6) · the plain-English-deferral wrinkle (R6) · the clean collision sweep (R7).

**Frontier flags:**
1. The guarantee's new name (gated≠lost vs parked≠lost) — sensemaking adjudicates.
2. The plain-English "lazy deferral" in the name-section — keep-with-parenthetical vs re-word — sensemaking adjudicates.

**Workspace-populated:** `{populated: true, populated-at: 2026-06-10_18-56, extent: R1-R7 + grep outputs in context}`

## Telemetry

- Mode: dual | entry: signal-first | Boundary-discovery: not fired
- Cycles: 2 (ground-truth greps; candidate/taxonomy generation)
- Items: ~22 (artifact 13 · possibility 9); tags: core 22
- Workspace-overload: not triggered
- Failure modes checked: Missed-relevance (the guarantee's NAME being itself an occurrence, and the plain-English-vs-tag wrinkle, were the non-obvious sweeps); Surfaced-irrelevance (bounded); Territory-mis-binding (ground truth grepped, not recalled); LAYER 2 Interpretive-overstep (leaders marked, adjudication left)

## Self-Assessment

**PROCEED** — the user's instinct is corpus-confirmed (the distinction already exists in the template's own vocabulary; the drafts used the wrong word of an existing pair); the leading tag (GATED-on) passes a clean collision sweep and is self-describing against the gates; the propagation is small and entirely pre-application; two genuine wrinkles (the guarantee's name; plain-English deferral) are flagged for adjudication.
