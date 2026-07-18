# Innovation — the label fix + semantic identity objects (production-task, LEAN)

## User Input

devdocs/inquiries/2026-07-15_10-10__label_system_fix__semantic_identity_objects/decomposition.md — production-task over P1–P4 with mandated inversions (one-technique; crown-vs-body; no-totem; grade both-ways; the totem-gate), constraints both ways, domain transfer (heraldry · cartographic deconfliction · identicons), absences, extrapolation. (Full directive in the invocation record.)

## Mode consideration (Phase 1)

Inherited: Standard production LEAN. Alternative: Contrarian-rethink — would foreground the no-totem/over-engineering challengers and under-deliver the designs. Default kept; inversions carry the contrarian load.

---

## P1 — LANE 1 FINAL: the label repair, organized by ★THE THREE-TIER LABEL HIERARCHY

**The frame (found by the present-in-different-form check — the hierarchy already exists embryonically):** the scene has three label tiers that should each OWN a band — **FAR: region labels** (the chapter banners — the 30-second layer) · **MID: area labels** (settlement chips) · **NEAR: point labels** (node titles). Semantic zoom is the TIER TRANSITION RULE, not an extra feature.

1. **Banner band-gating:** `farOnly.visible = (band === 'far')` + a radius-driven opacity fade (~radius 55–70 ramp). Banners return to the aerial. *(The one unwired line, wired.)*
2. **Two-line chips + end-fade:** makeChip wraps at ~26 chars × 2 lines; the tail alpha-fades over the last 3 characters instead of "…". Capacity ~52 chars ≈ most slugs whole.
3. **Semantic zoom (the transition rule):** FAR = banners only · MID = settlement chips (2-line) + NO node labels except focus/hover · NEAR = node labels as full wrapped titles (source: slug now; H1/display-name when available). Sprites cached per (node, band).
4. **Priority declutter:** throttled (6 Hz) screen-rect overlap test over visible chips; priority = **focus > hover > settlement-size > recency**; losers fade to 0 over ~200 ms, never pop. ★**The hover-always-wins guarantee** (the absence-patch): the pointed-at thing ALWAYS shows its full name — hover/focus labels are exempt from suppression, ever.
5. **Proximity complement — ADJUDICATED PARTLY REDUNDANT:** with 3's MID rule (no node labels at MID) and 4's declutter, a separate proximity radius adds little; kept only as the NEAR-band cap (label the ~30 nearest points, declutter the rest). *(The one-technique inversion's true half applied in reverse: five techniques → four-and-a-half.)*

**Posture:** presentation-only; no new bindings; no KEY rows; ①a-independent; fix-lane (the ribbon-pass precedent). ★**The one-screenshot acceptance (ADD-constraint):** re-shoot the user's exact camera pose — defect 5 (no mid-word cuts visible), 6 (no overlapping chips), 7 (no banners at MID) must all be checkable in that single image.

**Inversion (one-technique, mandated):** "semantic zoom alone suffices." Tested: it dissolves NEAR truncation and MID noise but leaves settlement-chip collisions at MID and the banner leak untouched. **True half adopted:** zoom = the spine; band-gate + declutter = its complements; proximity demoted to a NEAR cap.

## P2 — LANE 2 FINAL: the body-plan + THE IDENTITY TOTEM

**The zones (the composition law):** below-node = backing slabs (①a) · **body = aboutness silhouette ≤6 (G2, tags-gated — the reserved slot, kept EMPTY until tags)** · **crown = the identity totem (G0, new)** · side = pennants (shipped) · pulse = active (shipped) · size = built-on (①b). Vocabulary namespace: each zone's forms are visually disjoint (nothing crown-like below, nothing slab-like above).

**THE TOTEM, final spec:**
- **Reads the folder-id** (a real, permanent field) through a deterministic hash→form function — the READ-half of the two-halves rule. **Justification (per the adopted justify-clause, and the no-totem inversion's answer):** the composed structural features are LOW-CARDINALITY (a few sizes, heights, flag counts — collisions abundant among 240+ nodes); only the id gives uniqueness; identity needs the dedicated channel.
- **Form:** 2–4 small stacked primitives at the crown (segment count, per-segment proportion, twist angle, cap style drawn from the hash) — a bounded, NON-MIMETIC vocabulary (nothing resembling slabs, pennants, or spheres — the namespace guard). Never hue (staleness owns color; totems render in a neutral warm grey).
- ★**The inter-form-distance constraint (the identicon pitfall, named):** GitHub-style identicons go samey at scale; the hash must map to WIDELY-SPACED parameter combinations (quantize each parameter to few, clearly-distinct steps — e.g., 3 segment-counts × 4 profiles × 4 twists × 3 caps = 144 far-apart forms, collisions rare and visibly different) — perceptual distance beats parameter continuity.
- **Crown-vs-body ADJUDICATED (the mandated inversion):** the whole-node-as-totem variant is killed on two structural grounds — the body is G2's reserved zone (spending it on identity burns the aboutness slot forever), and sphere-uniformity is what makes the staleness ramp read cleanly across the field. The crown preserves both. *(Recorded; the inversion improved confidence, not the design.)*
- **LOD:** NEAR + MID-close (totems are meaningless at FAR — identity isn't the aerial's job). **Stability:** permanent per id. **The KEY row (verbatim):** *"the crown pattern is derived from the folder's id — it identifies; it does not describe."*
- **The learning loop:** the detail view renders the totem LARGE beside the title; search results show a small totem before each name — the association builds where names are read.
- **View-agnostic:** the same body renders in road and lens (the object travels).
- **The exposure expectation (stated honestly):** day one, totems read as ornament; recognition compounds with use — the payoff is re-finding ("the twisted-top one") and cross-view tracking.
- ★**The staged option (the totem-gate adjudication, P4-routed but designed here): TOTEM-IN-DETAIL-FIRST** — stage 1 renders totems ONLY in the detail view + search results (text surrounds them — the pairing teaches what they are; zero scene ambiguity; no KEY needed because the title sits beside every instance); stage 2 (WITH ①a) puts them on the crowns in-scene, the KEY row shipping in the same build. This resolves the cannot-self-label problem without waiting entirely on ①a.

**Heraldry transfer (native-guarded):** coats of arms prove the job is real — recognizing WHICH house without reading, via rule-bound generation over a disjoint vocabulary (field/charge/crest ≈ body/side/crown zones). Imported: the zone discipline + rule-bound generation; NOT imported: heraldic semantics (arms MEAN things; totems must not pretend to).

**The maturity sketch (REMOVE-constraint):** with tags + display-names live — body silhouette says WHAT-KIND (≤6 families), crown says WHICH, slabs say HOW-BACKED, pennants say WHAT'S-OPEN, chip says a 3-word name at MID and the full title NEAR. A node becomes readable as: *"a method-family inquiry, well-backed, twisted-top, three doors open — 'the seed gate revision'."* That sentence is the body-plan's promise.

## P3 — THE STACK + THE GRADE (final verbatims)

**The stack:** TAGS feed the body's G2 silhouettes + hover text — start-empty, arriving gradually after the tag-go. **"REALTIME AI SUMMARIES" is dead at render — by your own law** (no-LLM-at-render); what survives: ★**parse-the-authored** (the finding's H1 + the Finding Summary's first bullet — 100% coverage, zero LLM; feeds semantic zoom's NEAR titles, hover, detail) and the **offline DISPLAY-NAME batch** (3–5-word chip names; one generated, reviewable artifact — the tag_map pattern; every generated name carries the ≈ provenance mark; whether display-names REPLACE slugs on chips or sit beside = decided at that batch's gate). OBJECTS consume both as substrates.

**The grade (final wording, tested against both inversions):**
> *"A big breakthrough?" Honestly sized: the instinct aims at the record's MEASURED weakest channel (identity and aboutness have zero pixels — the 10-03 audit) and lands on the right mechanism (object recognition is parallel and preattentive; reading is serial). What is genuinely NEW here is two things: the IDENTITY CHANNEL (the totem — nothing in any prior design lets you recognize an inquiry without reading), and THE BODY-PLAN itself (the zoning + one-glance composition rules that make five channels read as one object). The rest of the body was already designed — the slabs and sizes are queued (①a/①b), the aboutness silhouette was already reserved (10-03), the semantic half arrives with tags. That is not a deflation: it is why this is BUILDABLE now rather than speculative. Verdict: not a new paradigm — the strongest available move on the identity channel, and the frame that makes the queued semantic layer cohere.

**Inversion (both ways):** rubber-stamp ("call it the breakthrough") dies on the pre-existence of G1/G2; deflation ("the queued layer renamed") dies on G0 + the zoning rules existing nowhere prior (kin-checked: the 10-03 table binds channels separately, no composition law). The wording above survives both.

## P4 — WRAP materials

- **The totem-gate (adjudicated):** the staged path — **detail-first now-ish** (offerable independently; self-teaching via the title pairing) → **in-scene WITH ①a** (the KEY row joins the declarations backlog). The full in-scene-now variant is declined (a totem cannot self-label; the re-traversal chips could).
- **Offers (ordered, gated):** ① LANE-1 FIX-PASS (the four-and-a-half techniques; at his word; one-screenshot acceptance) → ② TOTEM-IN-DETAIL-FIRST (small; at his word) → ③ totems in-scene (rides ①a — another rider on that build) → ④ the display-name batch (its own gate; reviewable artifact) → ⑤ G2 silhouettes (at tags + ~15 tagged folders). **Queue statement:** nothing re-orders ①a/the lens; ①a gains one more rider (the totem KEY row); lane 1 is fix-lane.
- **Commitments drafts:** 10-03 (the zero-pixels fact = this dive's ground; the shape≤6 reserve = G2's slot, untouched-but-framed; R10 held [content stays text]; the KEY gains rows) · 12-32 (two-halves + justify applied — the totem's justification written; the 3-way split governs "semantic"; stability held) · 08-35 (tags = G2's substrate; the LLM-pass pattern reused for display-names) · 21-48 (the authored summaries = semantic zoom's NEAR source) · the audit + rails (all held).
- **The seed gate (honest, kin-checked):** (a) THE BODY-PLAN — this finding's own design content (the zones + gestalt are committed HERE; a seed would re-describe it) → expect kill-as-element; (b) G0-identity-channel — same (the totem is this finding's design) → kill-as-element; (c) ★THE VOCABULARY-NAMESPACE PRINCIPLE ("channels composed on one body need visually disjoint vocabularies — zone them") — GENERALIZES beyond this design (any future multi-channel composition: the lens's stubs+lanes, the supervision card, any glyph system); kin-check: unowned (10-03 binds separately; no prior states a composition law) → a candidate THIN seed with a real deferred consumer (the next multi-channel visual design). The gate decides.
- **Marks/memory plan:** the 10-03 map (the shape-reserve row gains the body-plan frame note); the audit memory section updated (defects 5–7 → this dive; lane-1 offer + body-plan designed); MEMORY.md line touch.

## Assembly check

The pieces compose into one sentence: **fix the words now (three tiers, each band owning its own), and give every inquiry a body so the words stop carrying everything — crowned with an identity no one has to read.** Axis coverage: repair-vs-channel, now-vs-gated, text-vs-form, zone-vs-zone — multi-axis. Shared-input check: the totem's necessity reached from three grounds (the measured gap; the fingerprint-collision argument; the preattentive theory) — independent.

## Inherited Frame Audit

Seed assumption ("the label system needs a better fix") — challenged by the reverse challenger ("labels were fine; density is rare; over-engineering") — KILLED on the screenshot's evidence: the pile-up is the CURRENT state at an ordinary pose; no true half beyond throttling costs (absorbed as the 6 Hz parameter). Piece-level inversions all ran (one-technique half-adopted; crown-vs-body recorded; no-totem answered with the justification; grade both-ways survived; totem-gate staged). Audit clean.

## Telemetry

Mechanisms: Inversion ×5 (mandated; the no-totem one produced the justify-clause text), Constraint both ways (one-screenshot acceptance; the maturity sketch), Domain transfer (heraldry [zones + rule-bound generation, semantics NOT imported] · cartographic deconfliction [the tier hierarchy + priority/suppression] · identicons [the samey-ness pitfall → the inter-form-distance constraint]), Absence both levels (hover-always-wins; the designed-today probe → the maturity sketch), Extrapolation (2x: hash space fine, declutter scales; the lens inherits the body). 5-tests light: all principals pass; dispositions: P1 ACTIONABLE (fix-pass offer) · P2 ACTIONABLE-as-staged-offers · P3 verbatims for the finding · seed candidate (c) → the gate. **PROCEED → Critique.**
