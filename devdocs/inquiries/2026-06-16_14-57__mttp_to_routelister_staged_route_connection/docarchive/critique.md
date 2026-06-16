## User Input

/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-06-16_14-57__mttp_to_routelister_staged_route_connection/_branch.md
(Prior outputs consumed: surfacing.md, sensemaking.md, decomposition.md, innovation.md. Adversarial targets: survivor B dodge-check; verdict steelman-option-a; the flag's usefulness given the sub-concept gap; "user is right / MTTP inert"; the prior re-test; worth-it vs pure-c. Grounded in spec text.)

---

# Structural Critique — MTTP→Routelister Connection

## Phase 0 — Dimensions

Candidate set = claims about the route system's own behavior → project-specific risk dimensions + Frame-premise test.

| # | Dimension | Weight | Success criterion |
|---|---|---|---|
| D1 | **Spec-fidelity / external-grounding** | critical | claims about routelister/routelog quote the actual spec |
| D2 | **Correctness** | critical | the verdict holds under the strongest counter |
| D3 | **User-ask-fidelity** | critical (project-specific) | the answer SERVES the user's "the map should tell me," not dodges it |
| D4 | **Design-integrity** | critical | respects routelister's enumerate-don't-decide + NOT-list |
| D5 | **Parsimony / worth-it** | critical | even a one-paragraph change is justified vs pure-c |
| D6 | Completeness | moderate | covers the SV6 deliverable |

### Frame-premise prosecution

- **P-α "routelister can't sequence."** *Check (external anchor):* NOT-list §1.3 excludes "an inter-concept dependency graph" AND "control-flow / process-control moves." **Holds — verbatim.**
- **P-β "the re-run loop re-emits DEVELOP as ready after the meaning route runs."** *Check:* §3.5 — *"idempotency-at-fixpoint: re-running on an **unchanged** territory + goal produces the same map"*; perception governs. So the re-run only changes the output **if the territory changed.** Engaging the DEEPEN route must therefore **produce a meaning artifact** that enters the territory; `routelog done` stamps a `↗` pointer at it; the re-run (index-extending, loads `_route.md`) reads the enriched state and re-individuates the DEVELOP as ready. **Holds — with a precision: it's the produced *meaning artifact* that changes the re-emission; routelog stamps the *pointer*, it does not itself "enrich." Don't overclaim routelog as the enricher.**
- **P-γ "MTTP is not read by routelister."** *Check:* the routelister spec's territory is "a project root / subtree / document set / corpus / finished work's artifacts / a passage" — never the MTTP catalog; the MTTP doc says the **meta-loop consults** the class. **Holds.**

## Phase 1 — Fitness Landscape

- **Viable:** spec-grounded + serves the user's ask + respects identity + minimal.
- **Dead:** option-a-as-schema (NOT-list); "routelog enriches `_route.md`" (it stamps a pointer); "the meta-loop is the wire" *alone* (dodge); a flag that overclaims it knows the sub-concepts.
- **Boundary:** worth-it of the one-paragraph change (vs pure-c floor); E's "a's visibility" (achievable visibility only).

## Phase 2 — Adversarial Evaluation

### Candidate 1 — Survivor B ("the meta-loop IS the wire"): dodge or helpful?
- **Prosecution (D3, the RE-TEST):** "you're the wire" risks being a **dodge** — the user explicitly wants the *map* to help ("routelister routes should tell me… run with MFSD, stage-1 dive deep into X"). Answering "you're the wire, figure it out" tells them nothing new and ignores their actual ask.
- **Defense:** B is paired with the Guidance flag — B *explains why there's no automatic wire* (correct: MTTP isn't read by the map; the meta-loop bridges them); the flag *provides the map-level help* the user asked for.
- **Collision / Verdict: SURVIVE — with binding condition.** B is only honest+helpful **bundled with the flag.** Alone it IS a dodge. The finding must present "the meta-loop is the wire" *and* "here's how the map assists that bridging (the flag)" together — never stop at the first. *(Answers the RE-TEST: yes, B alone dodges; B + flag is the honest answer.)*

### Candidate 2 — The verdict "b + flag, not a" (steelman option-a HARD)
- **Prosecution (steelman a):** the user EXPLICITLY wants stages shown in the map; the re-run loop (b) is **invisible** — you must KNOW to re-run; nothing in the artifact shows the staging. A future automated meta-loop benefits from explicit staging in the artifact, not an implicit re-run habit.
- **Defense (external anchor):** the NOT-list forbids the dependency/control structure an explicit staged-route requires. The *visibility* the steelman correctly wants is deliverable via Guidance text (the flag) WITHOUT the schema — survivor E.
- **Collision / Verdict: SURVIVE (b + flag).** The steelman's valid core — *visibility matters; the re-run loop is too implicit* — is **absorbed into the flag's justification**: the flag is NOT optional polish, it's *what makes the otherwise-invisible staging visible.* Option-a-as-schema stays dead (NOT-list); option-a's-visibility-goal is met by the flag.

### Candidate 3 — The flag's usefulness given the sub-concept gap
- **Prosecution:** the flag can say "this DEVELOP looks meaning-unready — stage it" but NOT "stage-1 = DEEPEN sub-concept X" (routelister doesn't decompose the target). The user's concrete wish was the *specific* sub-stage. A flag that flags-but-can't-name is only the easy half.
- **Defense:** even "stage this" converts a silent trap (a bare DEVELOP that invites charging ahead) into a visible prompt — a real gain. And the sub-concepts are *discoverable*: the flag can name the **method** ("run `/decompose` on this target to surface its sub-concepts, DEEPEN those, then re-run me").
- **Collision / Verdict: REFINE.** The flag's content must name the method, not pretend to know the sub-concepts: *"meaning-unready → stage via MFSD: run `/decompose` on this target, DEEPEN the sub-concepts it surfaces, then re-run me."* Actionable without overclaiming. *(Sharpens the flag from "stage this somehow" to a concrete play.)*

### Candidate 4 — "The user is right; MTTP is inert for the map" (verify)
- **Prosecution/Defense (external anchor):** routelister reads inquiry artifacts, never the MTTP catalog (P-γ); the prior finding specified no routelister-reads-MTTP mechanism. → CONFIRMED.
- **Verdict: SURVIVE (confirmed).** The user's core charge is correct.

### Candidate 5 — The prior-finding re-test
- **Prosecution:** is "route = trigger-site" even right? The route doesn't trigger anything automatically — the **meta-loop** triggers (engages it). "Trigger-site" is slightly off.
- **Defense:** salvageable as "the site where the trigger is *noticed*" (the flag lives on the route).
- **Collision / Verdict: REFINE the prior's language.** "route = trigger-site, pattern = executor" sharpens to a **three-part** split: **signal-site** (the route + its meaning-unready flag) / **actuator** (the meta-loop — notices the flag, engages the staging) / **executor** (the re-run loop). The prior's *classification* (MFSD = a multi-loop pattern, not a verb) STANDS; the *connection* is corrected (Guidance flag + re-run loop; MTTP aids meta-loop recognition, not the map).

### Candidate 6 — Worth-it: a one-paragraph change, or pure-c?
- **Prosecution (D5 anti-bloat):** the staging works with ZERO routelister change (pure-c / survivor F) — the meta-loop just needs to know the play. The user has been cutting spec-bloat.
- **Defense:** the user's explicit ask is "**how will I know?**" — pure-c leaves that unanswered (nothing prompts the meta-loop). The Guidance flag is the cheapest thing that answers it (the map prompts you), and it's forward-compatible (the future automated meta-loop reads the same flag).
- **Collision / Verdict: SURVIVE (the flag is worth it).** It is the minimal thing that answers the user's actual question, which pure-c does not. State the floor: if the convention goes unused, fall back to pure-c (the play as a documented meta-loop habit). *(Consistent with the prior inquiry's "minimal, floor = just-good-practice" stance.)*

### Candidate 7 — Framings A (incremental rebuild) + E (visibility without cost)
- **Prosecution:** E may overclaim "a's visibility" — a flag shows "stage this," a staged route would show the actual stages.
- **Defense:** E claims a's *achievable* visibility (the play becomes visible); the specific sub-stages need `/decompose` regardless of option. A (incremental rebuild) is the spec's own metaphor (§3.5) — honest.
- **Collision / Verdict: SURVIVE — refined.** E = "the flag delivers the *achievable* visibility without a's schema cost; the specific sub-stages need decompose regardless." A stands.

## Phase 3.5 — Assembly Check

Refined survivors assemble with six corrections: (1) **B must bundle with the flag** (else a dodge); (2) the flag names the **method** (`/decompose`→DEEPEN→re-run), not "stage this"; (3) the re-run staging works because the DEEPEN **produces a meaning artifact** (routelog stamps the pointer — don't overclaim routelog enriches); (4) the prior's "trigger-site/executor" → **signal-site / actuator / executor**; (5) the flag is **worth it** (answers "how will I know"), floor = pure-c; (6) option-a's **visibility point is valid** and absorbed into the flag's justification. No new emergent assembly; critique's contribution is these corrections.

## Phase 4 — Coverage + Convergence

- **Coverage:** all 7 candidates on the critical dimensions; the load-bearing axes — dodge-vs-helpful, visibility, sub-concept-gap, worth-it — each explicitly prosecuted (Axis-Absence guarded).
- **External-grounding:** VALIDATED (NOT-list §1.3; cross-run §3.5 idempotency/incremental-build; routelog stamp; MTTP-consulted-by-meta-loop). **Not quarantined.**
- **Convergence:** clean SURVIVE on the core verdict; landscape stable; refinements targeted.
- **Failure modes checked:** Wrong-Dimensions (no), Rubber-Stamping (no — 3 REFINEs + a binding condition), Nitpicking (no — load-bearing), Dimension-Blindness (no — added D3 user-ask-fidelity + D5 worth-it), False-Convergence (no), Evaluation-Drift (single pass), Self-Reference-Collapse (guarded — spec-anchored), Axis-Absence (dodge + visibility + sub-concept-gap prosecuted), External-Grounding-Absence (no).

## Deliverable Summary

**(a) Dimensions:** D1 Spec-fidelity · D2 Correctness · D3 User-ask-fidelity · D4 Design-integrity · D5 Worth-it *(critical)* · D6 Completeness.

**(b) Landscape:** viable = spec-grounded + serves-the-ask + identity-respecting + minimal; dead = option-a-schema, routelog-as-enricher, meta-loop-is-the-wire-alone, flag-that-knows-sub-concepts.

**(c) Verdicts:**
1. Survivor B — **SURVIVE w/ binding condition** (bundle with the flag; alone it's a dodge — RE-TEST answered).
2. Verdict b+flag — **SURVIVE** (option-a-schema dead on the NOT-list; a's visibility-goal absorbed into the flag).
3. Flag usefulness — **REFINE** (name the method `/decompose`→DEEPEN→re-run, not "stage this").
4. User-right/MTTP-inert — **SURVIVE** (confirmed, external-anchored).
5. Prior re-test — **REFINE** (trigger-site/executor → signal-site / actuator / executor; classification stands).
6. Worth-it — **SURVIVE** (the flag answers "how will I know"; floor = pure-c).
7. A/E framings — **SURVIVE/refined** (E = achievable visibility; A = the spec's own metaphor).

**(d) Coverage map:** B-dodge ✓ · verdict (a-steelman) ✓ · flag-usefulness (sub-concept gap) ✓ · MTTP-inert ✓ · prior-re-test ✓ · worth-it ✓ · framings ✓. No unexplored viable regions.

**(e) Signal: TERMINATE** — refined survivors, clean SURVIVE on the core, zero hard KILL. Ranking: #2 verdict + #1 B(+flag) (core) > #3 flag-method > #5 prior-re-test > #6 worth-it > #4/#7.

## Convergence Telemetry

- Dimension coverage: 6 dims, critical ones tested per candidate.
- Adversarial strength: **STRONG** (the dodge-check, the option-a visibility steelman, the sub-concept-gap, and the worth-it/anti-bloat each made the advocate pause).
- Landscape stability: **STABLE** (refinements targeted).
- Clean SURVIVE exists: **YES** (the core verdict).
- External-grounding: **VALIDATED**.
- Failure modes observed: **none**.
- **Overall: PROCEED.**
