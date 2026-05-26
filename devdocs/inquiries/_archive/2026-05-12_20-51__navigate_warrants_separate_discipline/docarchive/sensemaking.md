# Sensemaking: Does /navigate warrant being a separate discipline?

## User Input

`devdocs/inquiries/2026-05-12_20-51__navigate_warrants_separate_discipline/_branch.md`

Operating on: `_branch.md` + `exploration.md`. Exploration enumerated 4 viable options (H1 KEEP / H2 FOLD / H3 REFINE-lean / H4 REFINE-runner) with structural-grounds analysis per option and a provisional H3 recommendation. Canonical specs for both /explore and /navigate were loaded per LOOP_DIAGNOSE Candidate A.

---

## SV1 — Baseline Understanding

The user asks whether `/navigate` warrants being maintained as a separate discipline given that iteration 2 of the 19-43 inquiry found only 2 structural differences from `/explore`. Exploration provisionally recommended H3 (REFINE as lean extension document) over H1 (status quo KEEP), H2 (FOLD into /explore), and H4 (REFINE as runner pattern). Sensemaking must rigorously verify the recommendation — testing for clean-resolution-trap (does H3 feel elegant because it's correct, or because it's elegant?), correctly weighting user-preference inference, and ensuring the recommendation respects the LOOP_DIAGNOSE Candidate-A canonical-spec-loading commitment.

---

## Phase 1 — Cognitive Anchor Extraction

### Constraints

- **C1 — `/navigate` canonical spec is authoritative.** Per `homegrown/navigation/references/navigation.md` lines 27-29: "Navigation has one structural operation: Enumeration." This is unambiguous.
- **C2 — `/explore` is territory-agnostic.** Per `homegrown/explore/references/explore.md` §1.5. /explore can be parameterized over arbitrary territories.
- **C3 — Workspace invariant + transclusion-at-spec-time holds.** Project-wide constraint.
- **C4 — 2 structural differences between /navigate and /explore** (per iter-2 of 19-43): destination-bias + prescriptive annotation content type.
- **C5 — Prescriptive annotation IS categorically distinct from /explore's identity.** Per exploration cycle 1. /explore's verb-meaning ("purposive open-mode surfacing") is descriptive; prescription would be an identity expansion.
- **C6 — Destination-bias is parameter-foldable into Step 0** (technically) but pulls in preference-annotation issues. Per exploration cycle 2.
- **C7 — `/staged-explore` is documented as a RUNNER**, not a discipline. Per `homegrown/runners/staged_explore.md`. Project precedent for runner-over-discipline pattern.
- **C8 — LOOP_DIAGNOSE Candidate A (canonical-spec-loading)** is a forthcoming protocol commitment. Any restructure of /navigate's canonical-spec status (FOLD or runner-reclassification) cascades into this protocol step.

### Key Insights

- **K1 — The /navigate-specific content is SUBSTANTIAL, not just structural boilerplate.** Re-examining /navigate's spec: the 16-type taxonomy (~50 lines), the route-card structure (~80 lines), the Adaptive guidance section with WHY pointers (~30 lines), specialized failure modes (~50 lines), Process Model Steps 1-6 (~70 lines), Auto-Derivable vs Human-Judgment Types (~30 lines) — these are genuinely /navigate-specific. The full spec is ~490 lines; substantial-specific content is ~310 lines; redundant-with-/explore content (the structural anatomy boilerplate) is ~180 lines. **Leanness benefit of H3 is real but more modest than initial estimate** — saves ~180-200 lines, not 380.

- **K2 — H1 vs H3 trade-off: status-quo migration cost vs leanness benefit.** H1 = zero migration; ~490-line spec preserved. H3 = bounded migration (one spec rewrite); ~280-300-line spec resulting. The leanness benefit (~200 lines saved + clearer structure) outweighs the migration cost for a project that values parsimony.

- **K3 — User's "deserve" language is ambiguous.** The user wrote "if navigate even deserves to be seperate discipline?" — this could mean (a) "is the separateness justified" (structural-legitimacy question) or (b) "is the spec over-engineered" (parsimony question). H2/H4 address (a); H3 addresses (b); H1 addresses neither. Without further clarification, both readings are viable; the loop should present options and recommend.

- **K4 — H3 preserves /navigate's canonical-spec status** (just with leaner content). H2 and H4 eliminate /navigate's canonical-spec status. This matters for the LOOP_DIAGNOSE Candidate A canonical-spec-loading protocol — H3 keeps the protocol's reference target intact; H2/H4 require the protocol to handle migration.

- **K5 — Pedagogical clarity favors H3 over H2.** The /navigate-specific content (16-type taxonomy + route-card + prescriptive Guide) is conceptually distinct enough to warrant its own doc. H2 would bloat /explore with this content; H3 keeps it in a /navigate-specific doc.

- **K6 — H4 (runner pattern) is genuinely awkward.** Guide is prescriptive content, not pure orchestration. A runner that generates new content (vs orchestrating existing operations) is a hybrid — neither a clean runner nor a clean discipline. /staged-explore doesn't have this problem because it only orchestrates /explore invocations; it doesn't add new content.

- **K7 — The 2-structural-differences picture from iter-2 of 19-43 is not necessarily definitive.** A future inquiry could find a 3rd structural difference, or could collapse one of the 2 into a parameter. The verdict here is calibration-state-dependent on the current 2-difference picture. If the picture changes, the verdict might need revision.

- **K8 — The recommendation should be HUMBLE.** Multiple options have merit. The loop has been wrong multiple times in this session. The recommendation is a strong recommendation, not a final verdict; the user has final say.

### Structural Points

- **S1 — Four options with structural pros/cons:** H1 KEEP (status quo; weak affirmative justification but zero cost); H2 FOLD (aggressive; /explore identity-creep + spec bloat + migration); H3 REFINE-lean (parsimonious; preserves boundary; lowest migration cost); H4 REFINE-runner (structurally awkward — hybrid orchestrator+content-generator).

- **S2 — H3 IS the structurally cleanest option among the four.** Confirmed via:
  - Preserves /navigate's canonical-spec status (compatible with LOOP_DIAGNOSE Candidate A).
  - Reduces spec redundancy with /explore.
  - Doesn't expand /explore's identity (descriptive-only stays clean).
  - Bounded migration cost (one spec rewrite).
  - Pedagogical clarity preserved (separate doc for separate concept).

- **S3 — The substantial /navigate-specific content** justifies a separate spec: 16-type taxonomy + route-card + prescriptive Guide + specialized failure modes + "When to Navigate" + Relationship to Other Disciplines + Auto-Derivable Types.

- **S4 — Migration scope for H3:** rewrite `homegrown/navigation/references/navigation.md` as ~280-300 lines (down from ~490). No cross-reference updates needed (path unchanged). The lean spec transcludes /explore's mechanics for the parts that are not /navigate-specific.

- **S5 — Migration scope for H2 (rejected):** edit `homegrown/explore/references/explore.md` to expand (~500→~800 lines); delete `homegrown/navigation/references/navigation.md`; update ~5 prior findings' cross-references; touch LOOP_DIAGNOSE Candidate A's protocol text. High migration cost.

- **S6 — Migration scope for H4 (rejected):** move /navigate content to `homegrown/runners/navigation.md`; update ~5 prior findings; touch LOOP_DIAGNOSE Candidate A; resolve the hybrid-orchestrator/content-generator issue. High migration cost + structural awkwardness.

### Foundational Principles

- **F1 — Parsimony is preferred when migration cost is bounded and structural cleanliness is gained.** H3 satisfies both.
- **F2 — Canonical specs are authoritative.** Changes to a discipline's canonical-spec status are high-impact; should require strong justification.
- **F3 — Pedagogical clarity matters when content is substantial and structurally distinct.** /navigate's specific content warrants its own doc.
- **F4 — Discipline-runner separation is structural.** A runner orchestrates without adding new operations; if it adds content, it's a hybrid. H4 violates this.
- **F5 — The loop should be humble on user-decision-tier questions.** Discipline-taxonomy decisions are user-tier; the loop recommends but doesn't unilaterally decide.

### Meaning-Nodes

- **M1 — "Discipline status"** — full canonical-spec presence in the project's discipline taxonomy.
- **M2 — "Separate discipline"** — has its own canonical-spec file at `homegrown/<discipline>/references/<discipline>.md` + appears in the 7-discipline taxonomy.
- **M3 — "Lean extension document"** — a canonical-spec file that explicitly transcludes another discipline's mechanics + adds the specialization-specific content; shorter than a full standalone spec.
- **M4 — "Runner pattern"** — orchestrates discipline invocations without adding new operations (per /staged-explore precedent).
- **M5 — "Substantial /navigate-specific content"** — 16-type taxonomy + route-card + prescriptive Guide + specialized failure modes + When-to-Navigate + Auto-Derivable types.

---

## SV2 — Anchor-Informed Understanding

H3 (REFINE as lean extension) is the structurally cleanest of the 4 viable options. It preserves /navigate's canonical-spec status (compatible with LOOP_DIAGNOSE Candidate A), reduces spec redundancy with /explore, doesn't expand /explore's identity, has the lowest migration cost among non-trivial options, and preserves pedagogical clarity. The /navigate-specific content (16-type taxonomy + route-card + prescriptive Guide) is substantial enough to warrant its own doc, just shorter than the current 490-line spec. The recommendation is moderate-strong; the user's question's ambiguity ("does it deserve" — legitimacy vs parsimony) should be acknowledged.

---

## Phase 2 — Perspective Checking

### Technical / Logical

H3's structural analysis holds up:
- The 2 structural differences (destination-bias + prescriptive annotation) are real but parameter-foldable EXCEPT prescriptive annotation has identity-creep cost on /explore.
- /navigate-specific content (~310 lines) is substantial and structurally distinct from /explore's content; warrants its own doc.
- H3's lean spec at ~280-300 lines is achievable without losing content; it removes structural boilerplate (Identity / Components / Process / Quality / Output anatomy sections that are common to all disciplines) in favor of transclusion references.

**Surprise:** the leanness benefit of H3 is more modest than exploration's initial estimate (saves ~200 lines, not ~380). But the structural cleanliness benefit is preserved — the rewrite makes the discipline's identity-as-specialization explicit rather than implicit.

### Human / User

The user's question is ambiguous between two readings:
- Reading A: "is /navigate's separateness STRUCTURALLY justified?" → H2 (FOLD) or H4 (runner) responsive.
- Reading B: "is /navigate's CURRENT spec over-engineered given it's mostly /explore-with-additions?" → H3 (lean extension) responsive.

Without further user clarification, both readings are viable. The loop's pattern of being corrected toward leaner structures supports reading B; the loop's pattern of being corrected toward structural-legitimacy questions (16-59 over-engineering retraction; iter-1 over-engineering retraction) supports reading A.

**Conservative path:** present both readings; recommend H3 (which addresses reading B AND partially addresses reading A by making the specialization-relationship explicit); note that H2/H4 are viable for users who want full FOLD.

**Surprise:** the user has been consistently leaner-preferring in this session. H3 aligns with that pattern. H2/H4 would be more aggressive than the loop has been correctly recommending so far.

### Strategic / Long-term

- **L0–L1 (current):** all 4 options work. Discipline taxonomy is consumed by human readers + the loop itself.
- **L3+ (autonomous selection):** the autonomous selector consumes canonical specs. A leaner /navigate spec (H3) is easier for the selector to consume than a 490-line spec or an 800-line expanded /explore (H2). H3 is forward-compatible.
- **Project-wide trend:** the project has been adding disciplines (started smaller; now 7); this inquiry suggests reviewing whether the count is justified. H3 doesn't change the count; H2/H4 reduce it. The leaner-trend value supports H2/H4 conceptually but the migration cost favors H3.

**Surprise:** H3 is strategically the best balance — preserves taxonomy benefits + reduces spec verbosity + low migration cost.

### Risk / Failure

- **Risk if H1 adopted:** /navigate spec stays verbose; pedagogical clarity for "what's /navigate-specific vs inherited" stays opaque; future inquiries might continue propagating misunderstandings (per iter-1 of 19-43's error pattern).
- **Risk if H2 adopted:** /explore identity-creeps; /explore spec balloons; LOOP_DIAGNOSE Candidate A protocol-text needs migration; the discipline taxonomy loses a useful pedagogical handle.
- **Risk if H3 adopted:** the rewrite might inadvertently remove content that turns out to be load-bearing in some edge case. Mitigation: keep the current spec as `navigation_v1.md` historical reference for ~3 months while the lean spec is in use.
- **Risk if H4 adopted:** the hybrid runner+content-generator status is conceptually confusing; future loop iterations might mis-classify.

**Surprise:** H3's main risk (content-loss during rewrite) is mitigable via versioned-history. Other options' risks are larger.

### Resource / Feasibility

- H1: zero work.
- H2: ~4-6 hours of focused editing (spec rewrite + cross-reference updates).
- H3: ~2-3 hours of focused editing (single spec rewrite; no cross-reference updates).
- H4: ~4-6 hours (move + cross-reference updates + resolve hybrid status).

H3 has the best work/benefit ratio.

### Definitional / Internal Consistency

- Is H3 consistent with the specialization-plus-additions framing from iter-2 of 19-43? YES — H3 makes the specialization-plus-additions structure EXPLICIT in the lean spec.
- Is H3 consistent with the LOOP_DIAGNOSE Candidate A canonical-spec-loading? YES — /navigate stays a canonical-spec; the loading protocol's reference target is unchanged.
- Is H3 consistent with the workspace invariant + transclusion-at-spec-time? YES — transclusion-at-spec-time is exactly what H3 makes explicit.

### Definitional / Frame-exit Completeness

Gating: does the inquiry's commitments include terms inherited from prior findings used across ≥2 distinct values? YES — "discipline," "operation," "annotation," "specialization."

**Existence Enumeration:**
- TYPE axis: "discipline" can mean canonical-spec-discipline vs runner vs sub-phase. The 4 options cover the relevant types.
- LAYER axis: discipline-level vs runner-level vs spec-content-level. All addressed.
- AGENT axis: human reader vs LLM-loop reader vs autonomous selector. H3 serves all three.

**Role Assessment:** out-of-scope referents (other disciplines' status) are reference points; not load-bearing.

**Verdict Rigor:** H3 verdict tested against H1, H2, H4. Strongest counter to H3: "H1 has zero migration cost; H3's leanness benefit might not be worth even the bounded migration." Tested: leanness benefit + structural cleanliness gain + alignment with user-preference pattern outweigh ~2-3 hours of editing. **DEFENSE HOLDS.**

**Residual / Coverage:** no major residual.

### Phase / Calibration-State

- Current calibration: 7-discipline taxonomy; canonical specs loaded ad hoc; LOOP_DIAGNOSE Candidate A not yet applied. H3 is calibration-state-compatible.
- Future calibration: if Candidate A is adopted and the canonical-spec-loading becomes systematic, H3 preserves /navigate's canonical-spec status, so the future protocol works seamlessly.

---

## SV3 — Multi-Perspective Understanding

All perspectives support H3 with bounded reservations:
- **Technical:** structurally cleanest; preserves canonical-spec status; aligns with specialization-plus-additions framing.
- **Human/User:** user's question is ambiguous between legitimacy (favors H2/H4) and parsimony (favors H3) readings; H3 addresses parsimony AND partially addresses legitimacy by making specialization explicit.
- **Strategic:** forward-compatible across autonomy levels; balances taxonomy benefits with verbosity reduction.
- **Risk:** main risk (content-loss during rewrite) is mitigable via versioned-history.
- **Resource:** ~2-3 hours; lowest work-to-benefit ratio.
- **Definitional:** consistent with specialization-plus-additions + LOOP_DIAGNOSE Candidate A + workspace invariant.
- **Frame-exit:** clean.
- **Phase/Calibration:** forward-compatible.

The recommendation is H3 with these caveats:
1. The user's question's ambiguity should be acknowledged in the finding — both legitimacy and parsimony readings exist.
2. H2 and H4 should be flagged as viable for users who prefer those framings.
3. H1 (status quo) is the do-nothing fallback.

---

## Phase 3 — Ambiguity Collapse

### Ambiguity 1: Which option to recommend (H1 vs H2 vs H3 vs H4)?

**Strongest counter to H3:** H1 has zero migration cost. The leanness benefit of H3 might be cosmetic — the user can read the current spec and skip the boilerplate. Maybe H1 is "good enough."

**Why the counter fails (structural grounds):** Cosmetic leanness wouldn't be worth the rewrite, but H3's benefit is more than cosmetic:
- The lean spec makes the specialization-plus-additions framing EXPLICIT. The current spec's full-discipline framing makes the specialization-of-/explore relationship implicit; iter-1 of 19-43 demonstrated this implicitness can lead to the loop misunderstanding the structural relationship.
- The lean spec REDUCES the surface area where context-elicitation gaps can occur. Less spec text → less chance of the loop missing identity-defining content (the LOOP_DIAGNOSE lesson).
- The lean spec is forward-compatible with the LOOP_DIAGNOSE Candidate A canonical-spec-loading — a leaner spec is more practical to load into working context.

**Confidence:** HIGH on structural grounds.

**Resolution:** RECOMMEND H3. Acknowledge H1 as do-nothing fallback; H2 and H4 as viable for users with different framings.

**What is now fixed:** the recommendation is H3.

**What is no longer allowed:** treating H3 as cosmetic-only (it has structural benefits).

**What now depends on this choice:** decomposition + innovation produce the lean-spec sketch; critique stress-tests.

---

### Ambiguity 2: How to handle the user's "deserve" ambiguity?

**Counter:** present BOTH readings explicitly; let the user decide. Don't commit the loop to either reading without user input.

**Why the counter holds:** the loop has been wrong multiple times in this session by over-committing to specific framings. The user explicitly asked "does it deserve" — a question, not a commitment.

**Resolution:** the finding explicitly states both readings (legitimacy = H2/H4; parsimony = H3); the recommendation is H3 with reasoning; the user has final say with H1/H2/H4 as alternatives presented.

**Confidence:** HIGH.

---

### Ambiguity 3: How modest should the leanness benefit be claimed?

**Counter:** exploration claimed "leanness benefit is real but more modest than initial estimate" (~200 lines saved, not 380). Is this enough to justify a rewrite?

**Why the counter PARTIALLY HOLDS:** 200 lines is meaningful but not dramatic. The justification rests on:
- Saving 200 lines of boilerplate per /navigate spec read.
- Making specialization-relationship explicit (reduces context-elicitation risk).
- Aligning with LOOP_DIAGNOSE Candidate A.
- The user's leaner-preference pattern.

Together these justify the rewrite, but each alone might not. Honest framing.

**Resolution:** the finding states the leanness benefit honestly (~200 lines + explicitness gain + LOOP_DIAGNOSE compatibility), not exaggeratedly.

**Confidence:** HIGH.

---

### Ambiguity 4 (Load-bearing concept test): "Deserves separate discipline"

What does it mean for a discipline to "deserve" separate status?

**Counter:** the term is informal; project doesn't have a formal "deserve-separate" criterion.

**Resolution:** operationalize "deserves separate discipline" as: (a) has substantial canonical-specific content (not 90%+ overlap with another discipline); (b) is referenced as a discrete cognitive operation in project structure (e.g., named in MVL+ pipeline or in the 7-discipline taxonomy); (c) provides pedagogical clarity above the noise of just-a-parameterization.

/navigate meets all three:
- Substantial content: 16-type taxonomy + route-card + prescriptive Guide + specialized failure modes.
- Discrete reference: appears in /MVL+'s implicit downstream + in meta-loop's job + in the 7-discipline taxonomy.
- Pedagogical clarity: "/navigate" is a clearer mental model than "/explore in next-move mode with destination-bias + prescriptive annotation."

So /navigate DOES deserve separate discipline status — under H3 (lean extension), the spec makes the deserveness explicit.

**Confidence:** HIGH.

---

### Ambiguity 5 (Load-bearing concept test): "Lean extension"

What's "lean"? Risk: the term is loop-coined.

**Counter:** "lean" is not a project-native term.

**Resolution:** "Lean extension" operationally means a canonical-spec file that (a) transcludes another discipline's mechanics by reference rather than restatement; (b) adds the specialization's specific content (16-type, route-card, prescriptive Guide, failure modes); (c) is roughly 50-60% the size of the original full spec (so for /navigate: 280-300 lines, down from 490).

Project-native equivalent: specialization-with-transclusion (per iter-2 of 19-43). The lean extension IS the specialization-with-transclusion made explicit at the spec-file level.

**Confidence:** HIGH.

---

### Specific-vs-pattern recognition cue

The user's specific question is about /navigate. The wider pattern: are OTHER disciplines also over-spec'd (canonical-spec files larger than the discipline's content justifies)?

**Pattern check:** without analyzing other discipline specs, can't say. The /explore-thread inquiries focused on /explore + /navigate; other disciplines (/sense-making, /comprehend, /decompose, /innovate, /td-critique) weren't reviewed for spec-size.

**Effect on this inquiry:** the wider pattern is research-frontier. This inquiry addresses /navigate specifically; flag the wider pattern as a future-inquiry candidate.

---

## SV4 — Clarified Understanding

**The verdict: H3 (REFINE as lean extension document) is the structurally cleanest recommendation among 4 viable options.** /navigate IS justified as a separate discipline (substantial canonical-specific content + pedagogical clarity + discrete reference in the project structure) — the user's "deserve" question answers YES at the discipline-LEGITIMACY level. But the current spec is over-engineered relative to the actual /navigate-specific content; the structurally clean answer is to rewrite as a lean extension document (~280-300 lines, down from ~490) that makes the specialization-with-transclusion pattern explicit and aligns with the LOOP_DIAGNOSE Candidate A canonical-spec-loading.

**The recommendation is moderate-strong, not absolute.** H1 (status quo) has zero migration cost and remains the do-nothing fallback. H2 (FOLD) is viable for users who reject /navigate's discipline status entirely. H4 (runner pattern) is awkward and not recommended.

**The user's "deserve" question is acknowledged as ambiguous** — it could mean structural-legitimacy (favors H2/H4) or parsimony (favors H3). The recommendation addresses the parsimony reading; H2/H4 remain available for users with the legitimacy reading.

---

## Phase 4 — Degrees-of-Freedom Reduction

### What variables are now fixed

- **F1** — Recommendation = H3 (REFINE as lean extension document).
- **F2** — /navigate IS justified as a separate discipline (substantial content + pedagogical clarity).
- **F3** — User-question ambiguity acknowledged (legitimacy vs parsimony readings).
- **F4** — Leanness benefit honestly framed (~200 lines saved + explicitness gain + LOOP_DIAGNOSE compatibility, not dramatic).
- **F5** — H1 (status quo) is do-nothing fallback; H2 and H4 are alternatives for users with different framings.
- **F6** — Migration scope for H3: rewrite `homegrown/navigation/references/navigation.md` from ~490 to ~280-300 lines; no cross-reference updates needed.
- **F7** — Content-loss risk mitigated via keeping current spec as historical reference for ~3 months.

### What options are eliminated

- **E1** — Treating H3 as cosmetic-only.
- **E2** — Adopting H2 or H4 without explicit user signal toward legitimacy reading.
- **E3** — Adopting H1 silently (without acknowledging the parsimony cost).
- **E4** — Skipping the lean-spec sketch (innovation must produce one).

### What paths remain viable

- **P1 (Decomposition)** — Partition the H3 adoption package: lean-spec content; finding sections; migration steps; H1/H2/H4-as-alternatives presentation.
- **P2 (Innovation)** — Sketch the lean spec in 2-3 variants (min/std/rich).
- **P3 (Critique)** — Adversarially test H3 against H1/H2/H4 + the rewrite-content-loss risk + user-question reading.

---

## SV5 — Constrained Understanding

The finding will:
1. Present 4 options with structural pros/cons.
2. Recommend H3 with reasoning.
3. Sketch the lean spec structure.
4. Acknowledge user-question ambiguity (legitimacy vs parsimony).
5. Provide migration steps + content-loss-risk mitigation.
6. Present H1/H2/H4 as alternatives.
7. Apply LOOP_DIAGNOSE Candidate A explicitly (canonical specs of /explore + /navigate loaded; verified in the finding's Reasoning).

---

## Phase 5 — Conceptual Stabilization

### Accommodation trigger check

Did new perspectives produce destabilizing anchors? No — all perspectives converged on H3 as the recommended option. The user-question-ambiguity insight came from cycle 8 of exploration + this sensemaking's Human/User perspective; it doesn't destabilize the H3 recommendation but ADDS to it (the recommendation includes presenting alternatives).

### Self-reference check

This sensemaking is evaluating a discipline-taxonomy question for the same project that uses /sense-making as a discipline. External grounding via:
- The canonical specs of /explore and /navigate (loaded per LOOP_DIAGNOSE Candidate A).
- The /staged-explore runner precedent.
- The /wayfinding deletion precedent.
- The discipline-runner separation principle.

Self-reference is not collapsing the analysis.

---

## SV6 — Stabilized Model

### The stabilized verdict

**/navigate DOES warrant being maintained as a separate discipline** — its substantial canonical-specific content (16-type taxonomy + route-card + prescriptive Guide + specialized failure modes), discrete reference in project structure, and pedagogical clarity justify separate-discipline status.

**HOWEVER**, the current spec is over-engineered relative to the actual /navigate-specific content. The recommendation is:

### H3 — REFINE as lean extension document

Rewrite `homegrown/navigation/references/navigation.md` from ~490 lines to ~280-300 lines as a **lean extension document** that:
1. Explicitly states /navigate is a specialization of /explore over the next-move-space with destination-bias + prescriptive Guide annotation layer.
2. Transcludes /explore's mechanics (scan-signal-probe; Step 0 declarations; annotation layers; failure modes that apply to /navigate too) by reference rather than restatement.
3. Retains the /navigate-specific content fully: 16-type taxonomy; route-card structure with ~12 per-route fields; Adaptive guidance section; specialized failure modes; "When to Navigate" section; Auto-Derivable vs Human-Judgment Types.
4. Aligns with the LOOP_DIAGNOSE Candidate A canonical-spec-loading (the lean spec is easier to load into working context; the spec's identity-defining content becomes more prominent).

### Why H3 over the alternatives

- **vs H1 (status quo KEEP):** H1 preserves the over-engineered spec. The leanness gain (~200 lines + explicitness gain + LOOP_DIAGNOSE-compatibility) outweighs the ~2-3 hour migration cost.
- **vs H2 (FOLD into /explore):** H2 expands /explore's identity to include prescriptive annotation (identity-creep) and balloons /explore's spec (~500→~800 lines). Migration cost is high. /navigate's substantial /navigate-specific content doesn't fit cleanly inside /explore.
- **vs H4 (REFINE as runner):** H4 makes /navigate a hybrid orchestrator+content-generator, which is structurally awkward. /staged-explore is a pure orchestrator (just loops /explore); /navigate-as-runner would add content (Guide pointers, route-card output), violating the discipline-runner separation principle.

### User-question ambiguity acknowledged

The user asked "if navigate even deserves to be seperate discipline." This is ambiguous between:
- **Legitimacy reading:** "Is /navigate's separateness STRUCTURALLY justified?" → answer YES; /navigate has substantial /navigate-specific content + pedagogical clarity + discrete project-structure reference. H2/H4 are options for users who answer NO to this reading.
- **Parsimony reading:** "Is /navigate's CURRENT spec over-engineered?" → answer YES partially; the spec has ~200 lines of structural boilerplate that could be replaced with transclusion. H3 addresses this reading.

The recommendation (H3) addresses parsimony while preserving structural legitimacy. If the user's intent was the legitimacy reading, H2 or H4 remain available — they should be adopted only with explicit user signal.

### Migration scope

- **File edited:** `homegrown/navigation/references/navigation.md` only.
- **No cross-reference updates needed** (path unchanged; canonical-spec status preserved).
- **No /explore spec changes.**
- **No /meta-loop or /MVL+ cascade.**
- **Content-loss risk mitigated:** keep current spec as `navigation_v1.md` historical reference for ~3 months during the lean spec's adoption.

### LOOP_DIAGNOSE Candidate A compatibility (verified)

Both canonical specs were loaded for this inquiry per Candidate A:
- `homegrown/explore/references/explore.md` — referenced sections §2.2 (annotation layers; descriptive vs prescriptive); §1.1 (verb-meaning); Step 0 declarations; §6.1 (runner taxonomy).
- `homegrown/navigation/references/navigation.md` — referenced lines 27-29 (ONE structural operation); Adaptive guidance section (~75-104); route-card structure; 16-type taxonomy.

This inquiry's structural claims rest on the canonical content. The rewrite (H3) preserves canonical-spec status, so future Candidate-A-compliant loading continues to work.

### How SV6 differs from SV1

| | SV1 | SV6 |
|---|---|---|
| Recommendation | Unclear among 4 | H3 with structural reasoning |
| User-question framing | One reading assumed | Both readings (legitimacy + parsimony) acknowledged |
| /navigate's separateness | Open | YES (justified by substantial content + pedagogical clarity) |
| Leanness benefit | Possibly large | Honestly modest (~200 lines + explicitness gain) |
| LOOP_DIAGNOSE Candidate A compatibility | Implicit | Explicit (preserved under H3) |

### Failure modes checked

- **Status quo bias** — tested. Would I reach H1 if /navigate's current spec were undocumented? No — I'd reach H3 (lean extension) because the substantial content + transclusion pattern is the natural form.
- **Premature stabilization** — tested. Multiple perspectives produced refinements (the leanness-benefit-is-modest insight from K1; the user-question-ambiguity insight from K3).
- **Anchor dominance** — tested. No single anchor; H3 rests on multiple grounds (parsimony + LOOP_DIAGNOSE-compatibility + pedagogical clarity + low migration cost).
- **Perspective blindness** — tested. The uncomfortable perspective (Risk surfacing content-loss-during-rewrite risk) was checked; mitigation provided.
- **Clean resolution trap** — tested. H3 feels elegant; I tested against counter-interpretations (cosmetic-only); the counter failed on structural grounds.
- **Self-reference blindness** — tested. External grounding via canonical specs + project precedents (/staged-explore, /wayfinding).

---

## Saturation Indicators

- **Perspective saturation** — last 2 perspectives confirmed existing anchors; the last new anchor (the K1 leanness-benefit-is-modest insight) emerged in Technical. APPROACHING SATURATION.
- **Ambiguity resolution ratio** — 5 ambiguities + specific-vs-pattern; 5/5 resolved (all HIGH confidence). 100%.
- **SV delta** — SV1 to SV6 is substantial (verdict committed; user-question ambiguity acknowledged; leanness honestly framed; LOOP_DIAGNOSE compatibility verified). CLEAR DELTA.
- **Anchor diversity** — anchors span all 5 types (8 Constraints, 8 Insights, 6 Structural, 5 Principles, 5 Meaning-Nodes) and 7 perspectives. DIVERSE.

**Verdict: PROCEED to Decomposition.**
