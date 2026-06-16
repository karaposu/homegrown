## User Input

/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-06-16_16-10__meaning_layer_improvements_route_field/_branch.md
(Prior outputs consumed: surfacing.md, sensemaking.md, decomposition.md, innovation.md. Adversarial targets: verdict steelman; the within-concept claim (§5.3); the DoR hard-gate smuggle; the zero-edge maintainability; bootstrapping; worth-it vs the prior's Guidance text. Grounded in spec text.)

---

# Structural Critique — A "Meaning-Layer Improvements" Route Field

## Phase 0 — Dimensions

| # | Dimension | Weight | Success criterion |
|---|---|---|---|
| D1 | **Spec-fidelity / external-grounding** | critical | claims about the route schema / NOT-list quote the actual spec |
| D2 | **Correctness** | critical | the verdict + identity-consistency hold under the strongest counter |
| D3 | **Identity-integrity** | critical (project-specific) | within-concept; perception-not-decision; zero inter-concept edge; the DoR stays SOFT |
| D4 | **Parsimony / worth-it** | critical | the schema growth is justified vs the prior finding's Guidance text |
| D5 | **Usefulness** | critical (project-specific) | the first-pass list helps, isn't noise (bootstrapping) |
| D6 | Completeness | moderate | covers the SV6 deliverable |

### Frame-premise prosecution

- **P-α "the field is within-concept (the target's own sub-concepts)."** *Check (external anchor — the sharp one):* §5.3 — *"no field's value is a different concept-identity. The depth-link points to the SAME identity's own depth; the index never records edges between concepts."* If the field lists **sub-CONCEPTS** (which are, or become, their own concept-identities), its values risk being "a different concept-identity" → toward the forbidden zone. **Holds ONLY under a disciplined framing:** the items must be the target's descriptive meaning-**GAPS / facets** ("the X aspect is underspecified"), NOT named sub-concept-identities-to-route-to. This is the load-bearing refinement (see Candidate 2).
- **P-β "vitality is distinct from Priority/Confidence."** *Check:* Priority/Confidence are per-route ("perceived salience / formed-ness"); vitality is per-gap. **Holds.**
- **P-γ "this overturns the prior (14-57)'s 'not a schema field'."** *Check:* the prior's "not a field" was a *parsimony* call, not an identity rule. But structured Guidance **text** could carry the same gap-list + vitality — so the dedicated field's marginal benefit over structured text is mostly **forward** (machine-readability for the automated meta-loop). **Holds, but softer than "overturns":** it *reconciles* — the prior's text container was right for NOW; the field is the cleaner FUTURE container (see Candidate 6).

## Phase 1 — Fitness Landscape

- **Viable:** the content (a within-concept, vitality-rated meaning-GAP list feeding the meta-loop's soft choice).
- **Dead:** a list of sub-concept-IDENTITIES (§5.3); a HARD Definition-of-Ready gate (enumerate-don't-decide); the field encoding inter-concept edges; an authoritative (high-confidence) list.
- **Boundary:** dedicated-field-vs-structured-Guidance-text (a forward-leaning, soft choice); bootstrapping reliability.

## Phase 2 — Adversarial Evaluation

### Candidate 1 — The verdict (good + identity-consistent) — steelman "bad / over-built / prior was right"
- **Prosecution:** (a) §5.3 "no field's value is a different concept-identity" — a sub-concept list edges toward it. (b) the prior said NOT a schema field (parsimony) — structured Guidance *text* could carry the same content → this is over-built. (c) bootstrapping — a first-pass list of a thing you don't understand is noise.
- **Defense:** the *content* (a vitality-rated meaning-gap list feeding the meta-loop's choice) is genuinely valuable + within-concept IF framed as the target's gaps; precedented by the depth-signal/Frontier.
- **Collision / Verdict: SURVIVE (the content) — REFINE (framing + container).** (i) items = the target's descriptive meaning-GAPS, not sub-concept-identities (Candidate 2); (ii) the field-vs-text container choice is smaller than it looks — mostly forward-looking (Candidate 6). The core idea (a vitality-rated gap list) is good.

### Candidate 2 — Is "a list of sub-concepts to deepen" REALLY within-concept?
- **Prosecution (the §5.3 sharp one):** "no field's value is a different concept-identity." Sub-CONCEPTS are/become identities → the field's values would be different concept-identities → violation; and listing other concepts the route "needs first" is the forbidden inter-concept dependency.
- **Defense:** the items are the target's sub-PARTS/aspects (facets of the ONE concept), like the depth-signal describing the target's internal divergence — within-concept.
- **Collision / Verdict: REFINE (load-bearing).** The field is within-concept ONLY if its items are **descriptive meaning-GAPS / facets** of the target ("the data-model aspect is underspecified — high vitality"), **NOT a list of named sub-concept-identities-to-route-to.** The vitality is on the gaps. This keeps it clear of §5.3 and the inter-concept rule. *This is the single most important correction: the field describes the target's under-understood facets, it does not enumerate sub-concept-identities.*

### Candidate 3 — Survivor B (Definition-of-Ready): smuggles the HARD-gate connotation?
- **Prosecution (the RE-TEST):** "Definition-of-Ready" in agile is usually a HARD gate (work isn't begun until DoR is met). The name risks importing "you MUST close these gaps before developing" = a gate = a decision = violates enumerate-don't-decide.
- **Defense:** the inquiry already flagged it must be a SOFT DoR (a prompt; the meta-loop chooses).
- **Collision / Verdict: REFINE.** Use DoR ONLY as an explanatory analogy with the explicit **SOFT** qualifier (a readiness *checklist* the meta-loop consults, never a gate it must pass) — or prefer a softer name ("meaning-gaps" / "meaning-readiness notes"). The field's spec must not imply a gate. *(Answers the RE-TEST: yes, "DoR" risks the hard-gate connotation — mark it soft.)*

### Candidate 4 — Survivor C (zero inter-concept edges): maintainable or inevitable drift?
- **Prosecution:** as gaps get DEEPENed they become their own routes; the field's items will start referencing those routes → the zero-edge rule erodes.
- **Defense:** the descriptive-gap framing (Candidate 2) prevents this — the field lists the target's GAPS (facets), which don't become routes; when a gap is deepened, the **re-run loop** captures the result (routelog `↗` + re-run) and the gap is marked closed on re-run (enrich-not-dump), never converted to an edge.
- **Collision / Verdict: SURVIVE.** The zero-edge rule IS maintainable, *enforced by* the descriptive-gap framing + the re-run loop carrying cross-route follow-through. The gaps get closed/removed on re-run, never turned into edges.

### Candidate 5 — Bootstrapping: useful or noise?
- **Prosecution:** a first-pass list of the gaps of an under-understood target is likely incomplete/wrong → the meta-loop deepens the wrong things.
- **Defense:** even a rough gap list ("the data model and the auth flow look underspecified — data-model high") beats a bare "meaning-unready" flag — a starting point + vitality to prioritize; refinable by `/decompose`; low confidence is honest.
- **Collision / Verdict: SURVIVE (low-confidence STARTER, not a contract).** Useful as a prompt; the low-confidence framing + "refinable by `/decompose`" keep it honest; vitality focuses on the likely-important gaps. **Caveat:** if the first-pass list is consistently wrong in practice, fall back to the bare flag (the prior's lighter form).

### Candidate 6 — Worth-it: schema growth vs the prior's Guidance text
- **Prosecution (D4):** a dedicated field is schema growth the prior avoided; structured Guidance text could carry the same gap-list + vitality.
- **Defense:** a dedicated field is **machine-readable** (the automated meta-loop parses it) + **consistent** (same place every route); the user wants the structured surface.
- **Collision / Verdict: SURVIVE (the content) — scope the container choice as FORWARD-leaning.** The CONTENT (a vitality-rated gap list) is the value; the dedicated-field's marginal benefit over structured Guidance text is mostly forward (machine-readability for the automated meta-loop). For the manual meta-loop now, structured Guidance text carrying the same list is nearly equivalent and lighter. **This reconciles with the prior finding** rather than flatly overturning it: the prior's "Guidance text" was the right container for NOW; the dedicated field is the cleaner FUTURE container — adopt it when the automated meta-loop needs to parse it.

## Phase 3.5 — Assembly Check

Refined survivors assemble with five corrections: (1) **items = the target's descriptive meaning-GAPS / facets, NOT sub-concept-identities** (the §5.3 / inter-concept refinement — load-bearing); (2) the Definition-of-Ready framing must be explicitly **SOFT** (a prompt, never a gate); (3) the zero-edge rule is maintainable, enforced by the descriptive-gap framing + the re-run loop (gaps closed on re-run, never edges); (4) the first-pass list is a **low-confidence starter** (fall back to the bare flag if consistently wrong); (5) the CONTENT is the value; the **dedicated-field-vs-structured-Guidance-text** is a forward-leaning choice that **reconciles** with the prior finding (its text container was right for now). No new emergent assembly; critique's contribution is these corrections.

## Phase 4 — Coverage + Convergence

- **Coverage:** all 6 candidates on the critical dimensions; the load-bearing axes — within-concept (§5.3), the DoR hard-gate, the zero-edge maintainability, worth-it — each prosecuted (Axis-Absence guarded).
- **External-grounding:** VALIDATED (§5.3 "no field's value is a different concept-identity"; §1.3 inter-concept + control-flow; the depth-signal/Frontier; Priority/Confidence attributive). **Not quarantined.**
- **Convergence:** clean SURVIVE on the core (the vitality-rated gap list is good + within-concept under the descriptive-gap framing); landscape stable; refinements targeted.
- **Failure modes checked:** Wrong-Dimensions (no), Rubber-Stamping (no — 3 REFINEs + caveats), Nitpicking (no — load-bearing), Dimension-Blindness (no — added D3 identity-integrity + D5 usefulness), False-Convergence (no), Evaluation-Drift (single pass), Self-Reference-Collapse (guarded — spec-anchored), Axis-Absence (the §5.3 plane prosecuted), External-Grounding-Absence (no).

## Deliverable Summary

**(a) Dimensions:** D1 Spec-fidelity · D2 Correctness · D3 Identity-integrity · D4 Worth-it · D5 Usefulness *(critical)* · D6 Completeness.

**(b) Landscape:** viable = within-concept vitality-rated gap list, soft, feeding the choice; dead = sub-concept-identities, a hard DoR gate, inter-concept edges, an authoritative list.

**(c) Verdicts:**
1. The verdict — **SURVIVE (content) / REFINE (framing+container)** — good idea; the gap-list is the value.
2. Within-concept claim — **REFINE** (items = descriptive meaning-GAPS/facets, NOT sub-concept-identities — the §5.3 load-bearing fix).
3. DoR framing — **REFINE** (mark SOFT; a checklist, never a gate — RE-TEST answered).
4. Zero-edge rule — **SURVIVE** (maintainable via the gap-framing + the re-run loop).
5. Bootstrapping — **SURVIVE** (low-confidence starter; fall back to bare flag if wrong).
6. Worth-it — **SURVIVE (content); container is forward-leaning** (reconciles with the prior's Guidance-text).

**(d) Coverage map:** verdict ✓ · within-concept (§5.3) ✓ · DoR-gate ✓ · zero-edge ✓ · bootstrapping ✓ · worth-it ✓. No unexplored viable regions.

**(e) Signal: TERMINATE** — refined survivors, clean SURVIVE on the core, zero hard KILL. Ranking: #2 within-concept-gaps-framing (load-bearing) > #1 verdict > #3 soft-DoR > #6 worth-it/container > #4/#5.

## Convergence Telemetry

- Dimension coverage: 6 dims, critical ones tested per candidate.
- Adversarial strength: **STRONG** (the §5.3 "no field's value is a different concept-identity" catch, the DoR hard-gate smuggle, and the field-vs-text worth-it each made the advocate pause).
- Landscape stability: **STABLE** (refinements targeted).
- Clean SURVIVE exists: **YES** (the vitality-rated gap list, under the descriptive-gap framing).
- External-grounding: **VALIDATED**.
- Failure modes observed: **none**.
- **Overall: PROCEED.**
