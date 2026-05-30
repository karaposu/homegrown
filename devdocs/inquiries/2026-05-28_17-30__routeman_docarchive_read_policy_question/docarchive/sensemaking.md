# Sensemaking — routeman_docarchive_read_policy_question

## User Input

/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-28_17-30__routeman_docarchive_read_policy_question/_branch.md

Read in this order:
1. _branch.md (4 observation targets)
2. surfacing.md (21 items; 5 frontier flags; KEY findings: spec is SILENT on finding.md/docarchive in read-policy; CONCLUDE asserts finding.md self-sufficiency; canon doc frames docarchive as opt-in audit; 14-49 left generic-mode read policy as named open gap; Story 1's docarchive claim is OVER-CLAIMED)

Sensemaking purpose: stabilize the verdict + articulate the corrective. Apply the 5 frontier flags from Surfacing.

---

## SV1 — Baseline Understanding

The user challenges Story 1's claim that routeman reads `docarchive/`. Surfacing revealed that the routeman spec doesn't actually say this; CONCLUDE's design positions `finding.md` as self-sufficient; and the canon doc treats `docarchive/` as an audit trail consulted on-demand. The Story 1 claim looks like an illustrative-but-spec-unauthorized extension — the same systematic narrowing the prior inquiry's Q7 frontier flagged. Initial impression: the user is right; the corrective is two-fold (fix Story 1; consider closing the 14-49 spec gap). The harder question is the corrective's scope — Story 1 only vs Story 1 + spec amendment.

---

## Phase 1 — Cognitive Anchor Extraction

### Constraints

- **C1** — `cognitive_harness/routeman/references/routeman.md` §3.2 names ONLY two file-specific policies (both directional-mode): `routeman.md` MANDATORY-WHEN-AVAILABLE; `_route.md` SHOULD. Generic-mode discipline-output reads (finding.md, docarchive contents) are not policied.
- **C2** — `/Users/ns/.claude/skills/protocols/conclude.md` line 297 quality test: *"Can someone read ONLY `finding.md`, at normal reading speed without backtracking, and understand the complete decision?"* — finding.md self-sufficiency is a CONCLUDE design constraint, not just an aspiration.
- **C3** — `docs/canon/runtime_environment/folder_based.md` line 250-251 + 328: canonical reader workflow is `_branch.md → finding.md`; docarchive consulted only when the reader wants the reasoning trail. This is the project-level design intent for the artifact roles.
- **C4** — `devdocs/inquiries/2026-05-27_14-49__routeman_directional_input_read_policy/finding.md` line 263 (Refinement Triggers): explicitly names generic-mode read policy as an unresolved open question. The 14-49 finding's scope was directional mode; generic was left for future work.
- **C5** — `devdocs/inquiries/2026-05-27_16-45__routeman_comprehensive_structural_fix/finding.md` 30-row amendment plan did not address generic-mode read policy. The open gap from 14-49 is preserved in the live spec.
- **C6** — Navigation-session cost dimension: 3 workers × 5 discipline outputs each = 15 additional files / ~6000+ lines of context if docarchive is systematically read. This invokes the `Workspace overload` failure mode pattern (LAYER 1 mode #5 in the surfacing spec).
- **C7** — Story 1 was written in THIS session, not in a prior commitment. The over-claim is a recent agent artifact.

### Key Insights

- **KI1** — The spec's silence on finding.md / docarchive in generic mode + CONCLUDE's design intent + canon doc's audit-trail framing all point to the SAME implicit policy: finding.md is the canonical consumed artifact; docarchive is opt-in audit. The implicit policy is consistent across three independent sources.
- **KI2** — Story 1's docarchive line is structurally INCONSISTENT with this implicit policy. The claim asserts a default-read that the design intent does not support. This is the same illustrative-narrowing pattern the 15-48 finding's Q7 frontier flagged.
- **KI3** — The corrective has TWO LAYERS: (a) Story 1 must be corrected (the immediate cause of the user's confusion); (b) the spec gap could be closed (would prevent future agents from making the same over-claim). Layer (a) is the MUST; layer (b) is a SHOULD/COULD.
- **KI4** — The cost dimension (navigation-session bloat) is LOAD-BEARING justification, not a side observation. The end-goal architecture (per project memory: multi-head loops + merging loops) makes navigation sessions a primary use case; an inefficient docarchive-read policy would compound at scale.
- **KI5** — The agent's over-claim has a recognizable pattern source: Story 1 was the BASELINE STORY in the 10-story set; the agent likely included docarchive to demonstrate "exhaustive input reading" as a sign of thoroughness — without checking the spec for what's actually required. This is the systematic narrowing pattern the 15-48 finding's Q7 frontier flagged, now caught in its second instance.

### Structural Points

- **SP1** — Two-layer corrective structure: Story 1 (documentation-layer) vs spec amendment (runtime-layer). The corrective can land at one layer, both, or neither.
- **SP2** — Cost-as-justification vs spec-accuracy-as-justification: two distinct framings of WHY the corrective is warranted. They aren't mutually exclusive; both support the corrective. But naming them explicitly aids the verdict's defensibility.
- **SP3** — Implicit-policy vs explicit-policy: the design intent is consistent across spec + CONCLUDE + canon, but it's IMPLICIT (silence + quality test + canon framing) rather than EXPLICIT (no spec-text section saying "for generic mode, finding.md is MANDATORY-WHEN-AVAILABLE; docarchive is MAY"). Closing the gap = making the implicit policy explicit.
- **SP4** — The 4-tier read-policy vocabulary (MANDATORY / MANDATORY-WHEN-AVAILABLE / SHOULD / MAY) from 14-49 is ready-made for closing the gap; the vocabulary applies; only the per-file assignments need adding.

### Foundational Principles

- **FP1** — Spec text is authoritative for runtime behavior; user_stories is illustrative. When the two diverge, the spec is the truth; user_stories needs correction.
- **FP2** — Lightest-touch principle: prefer the corrective that fixes the immediate harm without over-engineering. Story 1 edit alone may suffice; spec amendment is heavier and should be justified.
- **FP3** — User-autonomy preservation: present the spec amendment as a recommendation (the user can decline) rather than as a mandate. The amendment is a SHOULD-CONSIDER, not a MUST.
- **FP4** — Asymmetric-failure-toward-inclusion (from surfacing spec §4.4) does NOT apply here, because reading more files isn't structurally safer — it has the OPPOSITE failure mode (Workspace overload). Default-inclusion is wrong for this case; default-exclusion-then-opt-in is right.

### Meaning-Nodes

- **MN1** — **Generic-mode read-policy gap** — the 14-49 finding's named open question; the spec position that this inquiry's corrective directly addresses.
- **MN2** — **finding.md as canonical consumed artifact** — the consequence of CONCLUDE's self-sufficiency design + canon doc's reader workflow. The default consumer (routeman in generic mode) defaults to finding.md.
- **MN3** — **docarchive as opt-in audit trail** — the consequence of the canon doc's design intent + CONCLUDE's archive operation. Not default-read; reader-on-demand.
- **MN4** — **Story 1 over-claim as second instance of systematic narrowing** — the agent's framing pattern repeating; the Q7 frontier's "is it systematic?" question gets stronger evidence.
- **MN5** — **Two-layer corrective** — documentation correction (Story 1) + optional spec amendment (close 14-49 gap).

### Meta-Inspection cross-reference after SV2

- H4 (concept names): names being committed are "generic-mode read-policy gap," "finding.md as canonical consumed artifact," "docarchive as opt-in audit trail," "two-layer corrective." All grounded in spec / CONCLUDE / canon text. No invented framing; structural labeling of what exists.
- H5 (motivating examples): the specific case is Story 1's docarchive claim + the user's challenge. Wider pattern: the agent's systematic narrowing flagged in the 15-48 Q7 frontier. The specific case is one instance of the wider pattern.

---

### SV2 — Anchor-Informed Understanding

The dispute crystallizes into a precise structural picture. Three independent sources (spec silence; CONCLUDE design; canon doc) converge on the SAME implicit policy: routeman defaults to `finding.md` when invoked on a concluded inquiry folder; `docarchive/` is opt-in audit trail consulted on-demand. Story 1's claim violates this implicit policy. The corrective has two layers — fix Story 1 (MUST) and consider closing the 14-49 spec gap by amending §3.2 with explicit generic-mode read-policy entries (SHOULD/COULD). The cost dimension (navigation-session bloat) is load-bearing justification, not a side observation. The over-claim is a recent agent artifact in the same systematic-narrowing pattern the 15-48 Q7 frontier flagged.

---

## Phase 2 — Perspective Checking

### Technical / Logical

The spec evidence is unambiguous when read carefully. §3.2 names only directional-mode rules for routeman.md + _route.md. Generic-mode discipline-output reads are unmentioned. CONCLUDE's quality test explicitly asserts finding.md self-sufficiency. Canon doc explicitly frames docarchive as audit-trail. Three independent sources converge. The technical perspective confirms: the user's challenge is well-founded; the implicit policy is consistent; Story 1's claim is the outlier.

### Human / User

The user noticed something off and pushed back. The pushback was substantively correct per the spec evidence + design intent. Defending Story 1's claim would be Status Quo Bias (failure mode #1) protecting an established phrasing — except the phrasing isn't even established; it's a fresh artifact from this session. The user-perspective survival check passes strongly.

### Strategic / Long-term

The end-goal architecture (per project memory: multi-head loops + merging loops) makes navigation sessions a primary use case. An inefficient docarchive-read policy compounds at scale — at 5+ workers, the bloat is multiplicative. The strategic value of the corrective is HIGH; the strategic value of the spec amendment (closing the 14-49 gap explicitly) is also high because it prevents future agents from making the same over-claim when authoring new docs.

### Risk / Failure

What if the spec amendment OVER-CORRECTS? Risk: making docarchive MAY (caller-supplied opt-in) might be too restrictive — there could be legitimate use cases where routeman DOES need a discipline output that finding.md didn't promote.

Counter-risk: leaving docarchive as MAY (opt-in) doesn't FORBID it; it just makes the default reading bounded to finding.md. The caller can still explicitly supply a docarchive path if needed. MAY is the safety net, not the restriction.

What if the spec amendment UNDER-CORRECTS (leaves docarchive unmentioned)? Then the systematic narrowing pattern keeps producing over-claims like Story 1 in future authoring contexts. The 14-49 finding explicitly flagged this gap; ignoring it makes the same problem recurrent.

### Resource / Feasibility

Story 1 edit: trivial (1-2 line change). Spec amendment: moderate (1 new sub-section in §3.2; ~10-15 lines following the 14-49 pattern). Both are low-cost. The expensive thing would be NOT correcting — letting the over-claim propagate into future agent reasoning chains.

### Definitional / Internal Consistency

Does the spec contradict itself? No. The §3.2 Required field names state + goal at the cognitive level (the 15-48 two-axis frame's Axis 1); the source shape is left to "read relevant files" + the discipline's judgment (Axis 2). Silence on which files specifically is consistent with the source-flexibility frame.

Does the spec contradict CONCLUDE / canon? No. CONCLUDE and canon both establish finding.md as the canonical consumed artifact + docarchive as the audit trail. The spec's silence is consistent with letting that design intent serve as the implicit policy.

Does Story 1 contradict the spec? Yes — Story 1's docarchive claim asserts a default-read the spec doesn't authorize. This is the contradiction the user spotted.

### Definitional / Frame-exit Completeness

**Gating predicate check.** Does this inquiry's frame have inherited multi-value terms used across ≥2 distinct values within its own committed structures?

The inquiry's primary terms are **"input"** (multi-value across the 15-48 two-axis frame) and **"read"** (potentially multi-value: parse-as-context vs consult-on-demand vs available-but-not-loaded). The "input" axis is settled by the 15-48 frame; "read" is the load-bearing multi-value term here.

Existence Enumeration on "read": the term could mean (a) parse + load into context (the default reading); (b) consult on-demand when a specific question requires; (c) available to grep / search without loading; (d) referenced by file path without content read. Story 1 implies meaning (a); the spec's silence + CONCLUDE design + canon framing point to meaning (a) for finding.md and meaning (b) for docarchive.

Role Assessment: the (a) vs (b) distinction is load-bearing for the corrective. The corrective should NOT say "routeman never touches docarchive" — that's over-restrictive. The corrective should say "routeman defaults to (a) for finding.md and (b) for docarchive" — leaving the on-demand path available without bloating default context.

Verdict Rigor: the "MAY for docarchive" verdict survives structural scrutiny — MAY explicitly means caller-supplied opt-in, not forbidden. The 4-tier vocabulary handles the distinction precisely.

Residual / Coverage Justification: any other axis the inquiry might be missing? Considered: "what counts as a `concluded inquiry folder` input" — does the read-policy apply only to /MVLw outputs or also to /MVL (classic) outputs? Both produce docarchive per CONCLUDE; both should follow the same policy. Considered: "what about /routeman re-invocations on the same folder?" — the routeman.md + _route.md policies from 14-49 cover this; the discipline-output policies cover the first invocation only. No further frame-exit concerns. Termination: covered.

### Phase / Calibration-State

Is the recommendation phase-dependent? The project does not yet have empirical evidence of finding.md insufficiency cases (no inquiry has documented "we needed docarchive content X that wasn't in finding.md"). Without that calibration, the recommendation is: amend the spec to MAY for docarchive (safety net for hypothetical future cases) without committing to MANDATORY-WHEN-AVAILABLE for any docarchive file. If future evidence shows finding.md insufficiency, the spec can be re-amended; the current amendment doesn't preclude that.

### Meta-Inspection cross-reference after SV3

- H1 (candidate set): the candidates for the corrective are (i) Story 1 edit only; (ii) Story 1 + spec amendment; (iii) spec amendment only; (iv) no corrective. (iv) is dismissed (user evidence + design intent + spec silence). (iii) is dismissed (Story 1 caused this conversation; needs fixing). The viable candidates are (i) and (ii); their trade-off is light-touch vs systematic-fix.
- H2 (frame scope): is the inquiry's frame the right size? Yes — the frame is "what does the spec say about reading docarchive + what should Story 1 say + what's the cost?" Wider framings (e.g., "the whole spec's input contract") would re-litigate 15-48. Narrower framings (e.g., "just fix Story 1") would miss the spec gap.
- H3 (question framing): the 4 OTs are distinct and each maps to a different aspect of the corrective.
- H7 (phase/calibration state): no phase-dependent rule; covered above.

### SV3 — Multi-Perspective Understanding

All perspectives converge: the user's challenge is well-founded; the spec evidence is unambiguous; the implicit policy is consistent across three sources; Story 1 is the outlier and needs correction; the spec gap from 14-49 should be closed but only with a MAY tier for docarchive (preserving the on-demand path); the cost dimension is load-bearing; the systematic-narrowing pattern from 15-48 Q7 frontier has its second observed instance here. No perspective produced destabilizing anchors. The viable corrective candidates collapse to (i) Story 1 edit only vs (ii) Story 1 + spec amendment.

---

## Phase 3 — Ambiguity Collapse

### Ambiguity #1 — "Reads docarchive" — what does "reads" mean?

Story 1 says routeman reads docarchive. The verb is under-specified: does it mean default-load-into-context, consult-on-demand, or merely-available?

**Strongest counter-interpretation:** "Reads" means the operationally permissive "available for use as needed" — Story 1 is just listing what's in scope, not claiming default load.

**Why the counter-interpretation fails (structural grounds):** Story 1's structural shape lists "what routeman reads" as a flat enumeration alongside _branch.md and finding.md. _branch.md and finding.md ARE default-loaded (they're how routeman reconstructs state + goal). The flat enumeration implies parallel treatment — all listed items are default-loaded. If Story 1 meant "available for use as needed," the structural shape would tier the list (e.g., "Default reads: _branch.md, finding.md. On-demand: docarchive."). It doesn't. The flat list is a default-read claim per the enumeration's shape.

**Confidence:** HIGH (structural shape of the enumeration is the mechanism; not a precedent citation).

**Resolution:** Story 1's docarchive line claims default-read. Per the spec evidence + design intent, this default-read is unauthorized. The corrective must either drop the line or explicitly tier it as on-demand.

**What is now fixed?** "Reads" in default-load sense for finding.md; "reads" in opt-in/on-demand sense for docarchive.

**What is no longer allowed?** Flat enumeration that treats docarchive as default-read.

**What now depends on this choice?** The Story 1 correction's precise shape (drop the line vs tier the list); the spec amendment's MAY tier for docarchive.

**What changed in the conceptual model?** The "read" axis is now multi-value; the corrective must respect the distinction.

---

### Ambiguity #2 — Spec-silent: free behavior or default-to-lightest?

The spec doesn't say anything about finding.md or docarchive in generic mode. Is silence permissive (the discipline can do anything) or restrictive (default to lightest behavior)?

**Strongest counter-interpretation:** Silence is permissive. The discipline can read whatever it considers "relevant files" per SKILL.md Step 1. If the agent considers docarchive relevant, reading it is spec-compliant.

**Why the counter-interpretation fails (structural grounds):** The permissive reading conflicts with TWO independent design constraints:
- CONCLUDE's quality test (`conclude.md` line 297): finding.md must be self-sufficient. If routeman needs docarchive to complete its work, that's evidence finding.md is incomplete — which contradicts CONCLUDE's quality constraint. The implicit contract between CONCLUDE and downstream consumers is: finding.md is the consumed artifact; consumers don't need more.
- Canon doc's reader workflow (`folder_based.md` line 250-251, 328): docarchive is for readers who want the reasoning trail. The canonical consumer path does not include docarchive. Routeman, as a default consumer, fits the canonical path.

Both constraints exist independently of routeman; they're project-level design intent. The permissive reading would override these constraints without justification.

**Confidence:** HIGH (two independent design constraints; mechanism citations, not precedent).

**Resolution:** Silence defaults to the lightest behavior consistent with project design intent. For generic-mode read policy on a concluded inquiry folder: finding.md MANDATORY-WHEN-AVAILABLE (it's how state + goal are reconstructed); docarchive MAY (caller-supplied opt-in for audit contexts).

**What is now fixed?** The implicit policy from CONCLUDE + canon is now explicit: finding.md default-load; docarchive caller-supplied opt-in.

**What is no longer allowed?** Treating silence as permission to default-read docarchive.

**What now depends on this choice?** The spec amendment's per-file tier assignments.

**What changed in the conceptual model?** Spec silence has a default-resolution rule grounded in CONCLUDE + canon; it's not a free-behavior zone.

---

### Ambiguity #3 — Single-layer vs both-layer corrective

The user's intent ("routeman only should read finding.md imo") implies a policy claim about routeman's behavior, not just a Story 1 edit. But amending the spec is heavier than just fixing Story 1.

**Strongest counter-interpretation:** Single-layer (Story 1 only) is sufficient. The spec gap is academic; in practice the agent reading the spec + CONCLUDE + canon will infer the right policy. No spec amendment needed.

**Why the counter-interpretation fails (structural grounds):** The agent in THIS session — who has read all those sources — STILL made the over-claim in Story 1. The empirical evidence is the over-claim itself: implicit policy isn't sufficient to prevent the systematic narrowing. The 15-48 Q7 frontier flagged this exact concern; this inquiry is its second instance. Future authoring contexts will likely reproduce the same over-claim. Making the policy explicit in the spec breaks the pattern.

**Confidence:** MEDIUM-HIGH. The structural argument is strong (empirical evidence supports the systematic-narrowing pattern); the MEDIUM hedge is because "future agents will repeat the error" is a prediction, not a verified mechanism. The recommendation is a SHOULD (the spec amendment), not a MUST.

**Resolution:** Both-layer corrective is the recommended path. Story 1 fix is MUST; spec amendment is SHOULD (preferable but user-decidable).

**What is now fixed?** The corrective's scope: at minimum Story 1 must be corrected; at preference the spec should be amended to close the 14-49 gap.

**What is no longer allowed?** Treating the over-claim as a Story-1-only problem — it has a systematic-narrowing pattern source.

**What now depends on this choice?** The Decomposition + Innovation work on the precise text of both corrections.

**What changed in the conceptual model?** The corrective is two-layer; the SHOULD-layer is user-decidable.

---

### Ambiguity #4 — Cost as load-bearing justification or side observation?

Is the navigation-session bloat the load-bearing reason for the corrective, or is spec accuracy alone sufficient?

**Strongest counter-interpretation:** Spec accuracy is sufficient as justification. The corrective is "Story 1 must match the spec" — done. Cost is a downstream consequence, not the primary reason.

**Why the counter-interpretation fails (structural grounds):** Spec accuracy alone doesn't explain WHY the spec's implicit policy is finding.md-only. The "why" is precisely the cost-of-bloat — finding.md is designed to be self-sufficient PRECISELY SO downstream consumers don't have to re-read the discipline outputs. CONCLUDE's quality test exists because the design intent is "compile once; consume once" — and the reason is cost. The cost is load-bearing for the design constraint; it's not a side observation.

**Confidence:** HIGH (the design constraint exists because of the cost; this is mechanism-citation, not interpretation).

**Resolution:** Cost is LOAD-BEARING justification. The corrective should cite both spec accuracy AND cost — the latter explains why the spec's implicit policy is what it is.

**What is now fixed?** The corrective's justification has two parts: spec accuracy (Story 1 contradicts the implicit policy) + cost rationale (the implicit policy exists because reading docarchive bloats downstream context).

**What is no longer allowed?** Framing the corrective as purely a spec-accuracy fix.

**What now depends on this choice?** The corrective's prose includes the cost rationale as a load-bearing argument.

**What changed in the conceptual model?** Cost and design intent are linked; they aren't separate axes.

---

### Ambiguity #5 — Tone: how should the corrective acknowledge the over-claim's origin?

Story 1 was written by the agent in THIS session. The over-claim is recent + agent-authored. How does the corrective acknowledge this without over-apologizing?

**Strongest counter-interpretation:** Don't acknowledge the origin at all. Just fix Story 1 and the spec. Mention of "this agent's prior over-claim" is self-conscious noise.

**Why the counter-interpretation fails (structural grounds):** The over-claim is EVIDENCE for the 15-48 Q7 frontier's systematic-narrowing pattern. Suppressing the origin attribution would suppress evidence that's load-bearing for future Q7-pattern verdicts. The acknowledgment is meta-honest, not self-conscious — it preserves the evidence trail.

But: substance over tone. The acknowledgment should NAME the pattern (systematic narrowing flagged in 15-48 Q7) rather than apologize. "The over-claim is a second observed instance of the pattern, supporting the wider verdict" is better than "I was wrong and I'm sorry."

**Confidence:** HIGH (evidence preservation is a structural argument; the substance-over-tone resolution applies the lesson from the prior inquiry's Q5).

**Resolution:** Acknowledge the over-claim's origin as evidence for the wider pattern, not as a tonal apology. The corrective should preserve the attribution + connect it to the 15-48 Q7 frontier.

**What is now fixed?** The corrective's tone is substantive, not apologetic. It names the pattern source.

**What is no longer allowed?** Suppressing the attribution (loses evidence); over-apologizing (erodes substance).

**What now depends on this choice?** The Innovation work on Q5 tonal calibration uses this resolution.

**What changed in the conceptual model?** Over-claim attribution is evidence, not noise.

---

### Load-bearing concept test

Three load-bearing concepts have stabilized:

- **"Spec-silent means default-to-lightest"** (KI1, SP3, Ambiguity #2 resolution). Domain-property test: is this the project's actual policy or an external default? CHECK — the silence-defaults-to-lightest rule is GROUNDED in CONCLUDE's quality test + canon doc's reader workflow (two independent project-internal sources). Not an external default. PASS.

- **"Story 1 over-claim is a second instance of systematic narrowing"** (KI5, MN4). Domain-terminology test: is "systematic narrowing" project vocabulary? CHECK — yes; the 15-48 finding's Q7 frontier introduced this term explicitly. This inquiry uses it consistently. PASS.

- **"Two-layer corrective"** (KI3, SP1, Ambiguity #3 resolution). User-language alignment test: does this match the user's language? Partial check — the user said "routeman only should read finding.md imo" which is a policy claim (corresponds to the spec layer); they also asked "lets discuss this further" implying openness to the Story 1 fix too. The two-layer framing aligns with the user's combined intent. PASS.

### Specific-vs-pattern recognition cue

The motivating example is Story 1's docarchive claim. The wider pattern is the agent's systematic narrowing of routeman to inquiry-folder contexts (flagged in the 15-48 Q7 frontier). The diagnosis applies to both: the specific case (Story 1) needs the immediate corrective; the wider pattern is now better-evidenced (second observed instance) but still not fully diagnosed (the verdict on "systematic" still requires future evidence). The corrective addresses the specific case; the wider pattern remains a frontier flag.

---

### SV4 — Clarified Understanding

All five ambiguities resolve cleanly with HIGH confidence on the directional verdicts (one MEDIUM-HIGH on the both-layer corrective scope due to the "future agents will repeat" prediction). The corrective shape is two-layer: Story 1 fix (MUST — drops or re-tiers the docarchive line) + spec amendment recommendation (SHOULD — close the 14-49 gap with explicit generic-mode read-policy entries for finding.md MANDATORY-WHEN-AVAILABLE and docarchive MAY). Cost is load-bearing justification; tone is substantive with pattern-attribution; the over-claim is preserved as evidence for the wider 15-48 Q7 pattern verdict. The "reads" axis is multi-value (default-load vs opt-in); the corrective respects this distinction.

---

## Phase 4 — Degrees-of-Freedom Reduction

### Fixed variables

- **F1** — OT1 (spec accuracy of Story 1's claim): Story 1 is OVER-CLAIMED. The spec is silent; CONCLUDE + canon establish the implicit policy of finding.md-only-by-default; Story 1's flat enumeration violates this.
- **F2** — OT2 (cost-of-bloat): cost is REAL and LOAD-BEARING. Navigation-session multiplier (~5x per worker; ~6000+ lines extra at 3+ workers) invokes Workspace-overload risk; the cost is also the implicit reason CONCLUDE's quality test exists.
- **F3** — OT3 (alternative-policy recommendation): "finding.md only" is SPEC-ALIGNED for the default case; docarchive MAY (caller-supplied opt-in) preserves the safety net without bloating default context.
- **F4** — OT4 (structural rationale for/against): the rationale FOR reading docarchive by default is weak (no spec authorization; contradicts CONCLUDE's self-sufficiency design; invokes Workspace-overload risk); the rationale AGAINST is strong (three independent sources; cost evidence; pattern observation).
- **F5** — Corrective scope: TWO-LAYER. Story 1 MUST be corrected; spec SHOULD be amended.
- **F6** — Story 1 correction shape: re-tier the input list to mark docarchive as on-demand (preferred) OR drop the docarchive line (acceptable lighter touch). Innovation will refine.
- **F7** — Spec amendment shape: ADD-CONTENT — a new sub-section in §3.2 naming the generic-mode read-policy entries: `_branch.md` (SHOULD); `finding.md` (MANDATORY-WHEN-AVAILABLE); `_route.md` (SHOULD — same as directional; the file exists or not regardless of mode); docarchive (MAY).
- **F8** — Cost framing: cost is LOAD-BEARING justification alongside spec accuracy.
- **F9** — Tone of acknowledgment: substantive pattern-attribution, not apology.

### Eliminated options

- **E1** — "Routeman reads docarchive by default" — eliminated; no spec authorization; contradicts CONCLUDE + canon.
- **E2** — "Story 1 is correct as written" — eliminated; flat enumeration violates implicit policy; caused this conversation's confusion.
- **E3** — "No corrective needed" — eliminated; the over-claim is a live artifact propagating systematic narrowing.
- **E4** — "Spec amendment only" — eliminated; Story 1 needs immediate correction; spec amendment is separate and slower.
- **E5** — "Forbid docarchive reads entirely" — eliminated; MAY preserves the on-demand path for legitimate use cases.
- **E6** — "Cost is just a side observation" — eliminated; cost is the implicit reason CONCLUDE's self-sufficiency design exists.

### Viable paths remaining

- **V1** — Story 1 correction (drop the line OR re-tier as on-demand). Innovation refines the precise shape.
- **V2** — Spec amendment recommendation (close the 14-49 generic-mode gap). User-decidable.
- **V3** — Cost rationale + spec accuracy as joint justification in the corrective's prose.
- **V4** — Pattern-attribution acknowledgment connecting to 15-48 Q7 frontier.
- **V5** — Frontier flag (second instance of systematic narrowing now observed; the Q7 pattern verdict strengthened but not fully resolved).

---

### SV5 — Constrained Understanding

The solution space has collapsed to a clear two-layer corrective with refined sub-decisions for Innovation. Story 1's input list must be corrected (V1) with Innovation refining "drop line vs re-tier as on-demand." The spec amendment recommendation (V2) follows the 4-tier vocabulary from 14-49: finding.md MANDATORY-WHEN-AVAILABLE; docarchive MAY; _branch.md and _route.md SHOULD. Justification is joint spec-accuracy + cost (V3). Tone is substantive pattern-attribution (V4). The 15-48 Q7 frontier gains a second instance as supporting evidence (V5). All four observation targets resolved with HIGH confidence.

---

## Phase 5 — Conceptual Stabilization

### The stabilized model

**Routeman's read-policy on a concluded `/MVLw` inquiry folder (generic mode) is implicit in the spec but explicit in CONCLUDE + canon doc design intent. The implicit policy is:**

| File | Implicit policy tier | Source of the implicit rule |
|---|---|---|
| `_branch.md` | SHOULD (provides question + goal context) | CONCLUDE Step 2 reads _branch.md; routeman by parallel benefits |
| `finding.md` | MANDATORY-WHEN-AVAILABLE | CONCLUDE quality test (`conclude.md` line 297); canon doc reader workflow (`folder_based.md` line 250-251, 328) |
| `_route.md` | SHOULD (when present; existing rule from 14-49 carries to generic mode) | `references/routeman.md` §3.2.5; rule is mode-independent for routeman's own invocation history |
| `docarchive/` (any file inside) | MAY (caller-supplied opt-in) | Canon doc explicitly frames docarchive as opt-in audit trail; CONCLUDE archives outputs *because* finding.md should be self-sufficient |

**Story 1's docarchive claim is the outlier.** It asserts a default-read the implicit policy does not authorize; it bloats navigation-session context; it is a recent agent-authored artifact in the same systematic-narrowing pattern flagged in the 15-48 Q7 frontier (second observed instance).

**The corrective is two-layer:**

| Layer | Status | Action |
|---|---|---|
| **Story 1 (documentation)** | MUST | Correct the over-claim — preferred: re-tier the input list to mark docarchive as on-demand; acceptable: drop the docarchive line entirely. Innovation refines. |
| **Spec (`references/routeman.md` §3.2)** | SHOULD (user-decidable) | Add a sub-section explicitly naming the generic-mode read-policy entries for finding.md (MANDATORY-WHEN-AVAILABLE), docarchive (MAY), and the supporting context files. This closes the 14-49 finding's named open gap. |

**Justification is joint: spec accuracy (Story 1 contradicts the implicit policy from three independent sources) + cost (navigation-session bloat invokes Workspace-overload risk; CONCLUDE's self-sufficiency design exists precisely to bound this cost).**

**Tone is substantive pattern-attribution.** Acknowledge the over-claim's origin (agent-authored in this session) as evidence supporting the 15-48 Q7 frontier's systematic-narrowing verdict. Do not over-apologize.

### Senses in which the user's intuition was correct

- **"i am suspicious"** — justified because Story 1's flat enumeration treated docarchive as default-read, which contradicts the implicit policy from CONCLUDE + canon. The user's suspicion mapped onto a real structural gap.
- **"this will bloat the navigation session context"** — justified because the cost is real (~5x multiplier per worker) AND because the cost is the implicit reason CONCLUDE's self-sufficiency design exists. The user's cost concern named a load-bearing constraint, not just a side observation.
- **"routeman only should read finding.md imo"** — justified at the default-case layer (per the implicit policy + cost) with the MAY caveat for opt-in audit contexts. The user's recommendation is spec-aligned with a small refinement (caller-supplied opt-in path preserved).

### Accommodation trigger check

Did new perspectives destabilize the model? No — all perspectives + meta-inspection hooks converged on the two-layer corrective + the implicit-policy explicit-corrective frame. No revisions forced; the model settled cleanly. Accommodation trigger does NOT fire.

### Frontier flags routed to Decomposition

- **FF-S1** — The deliverable shape: Story 1 correction (precise text) + spec amendment recommendation (precise content) + corrective framing (joint justification + pattern-attribution tone). Decomposition partitions these into pieces Innovation can refine.
- **FF-S2** — Story 1 correction has two viable shapes (drop line vs re-tier as on-demand). Innovation should generate both and select per fitness.
- **FF-S3** — Spec amendment shape is 4 file-rows in a new §3.2.6 (or similar). Innovation drafts the precise text following the 14-49 sub-section pattern.
- **FF-S4** — The cost justification needs precise framing — quantitative (5x multiplier; ~6000+ lines) vs qualitative (Workspace-overload risk; CONCLUDE design intent) vs both. Innovation calibrates.
- **FF-S5** — The 15-48 Q7 frontier connection: how should the finding record the second-instance observation without re-litigating the Q7 verdict? Innovation drafts the precise frontier-flag-update language.

---

### SV6 — Stabilized Model

**Routeman's generic-mode read-policy on a concluded `/MVLw` inquiry folder is implicit in the spec but explicit in CONCLUDE + canon doc design intent: finding.md is the canonical consumed artifact (MANDATORY-WHEN-AVAILABLE); docarchive is the opt-in audit trail (MAY); _branch.md and _route.md provide supporting context (SHOULD).** Story 1's docarchive claim is structurally OVER-CLAIMED (it asserted default-read where the implicit policy does not authorize one) and is a second observed instance of the systematic-narrowing pattern flagged in the 15-48 Q7 frontier. The corrective is two-layer: Story 1 MUST be corrected (drop or re-tier the docarchive line); the spec SHOULD be amended to close the 14-49 generic-mode read-policy gap by adding explicit per-file tier assignments. Justification is joint — spec accuracy plus the cost rationale (navigation-session bloat invokes Workspace-overload risk; the cost is the implicit reason CONCLUDE's self-sufficiency design exists). Tone is substantive pattern-attribution; the over-claim's agent-authored origin is preserved as evidence, not as apology. The wider systematic-narrowing pattern verdict from 15-48 Q7 strengthens with this second instance but is not fully resolved by this inquiry.

### Difference from SV1

SV1 had a clear directional read: "the user is right; the corrective is two-fold." SV6 hardens this into a precise structural picture with the implicit-policy table, the over-claim diagnosis, the two-layer corrective with per-layer status, the joint justification, the tonal calibration, and the connection to the 15-48 Q7 frontier as supporting evidence. SV1 was directional; SV6 is committed and defensible across all four observation targets.

---

## Saturation Indicators

- **Perspective saturation:** All six standard perspectives + Frame-exit Completeness + Phase/Calibration-State applied. No new anchor types emerged after the Resource/Feasibility perspective. Saturation reached.
- **Ambiguity resolution ratio:** 5/5 ambiguities resolved with HIGH or MEDIUM-HIGH confidence; 0 unresolved.
- **SV delta:** SV1 ("user is right; two-fold corrective") to SV6 (precise implicit-policy table; two-layer corrective with per-layer status; joint justification; tonal calibration; frontier connection). Healthy structural shift.
- **Anchor diversity:** Anchors span all five types — Constraints (C1-C7), Key Insights (KI1-KI5), Structural Points (SP1-SP4), Foundational Principles (FP1-FP4), Meaning-Nodes (MN1-MN5). Multi-anchored model.

---

## Failure Modes Check

- **Status Quo Bias:** Was I tempted to defend Story 1's claim because it was "already written"? No — the spec evidence + design intent clearly support correction. The user's challenge is honored. PASS.
- **Premature Stabilization:** Did the model click into place too quickly? The five ambiguities each required independent resolution; the Frame-exit perspective added the "reads" multi-value axis that wasn't initially named; the two-layer corrective emerged through working through ambiguity #3, not from the initial framing. PASS.
- **Anchor Dominance:** Is one anchor doing all the work? The model rests on at least three independent anchors — spec silence; CONCLUDE quality test; canon doc reader workflow. Removing any one, the others still support the verdict. Multi-pillar. PASS.
- **Perspective Blindness:** Were uncomfortable perspectives checked? The "Risk / Failure" perspective surfaced the over-correction risk (forbidding docarchive entirely) and resolved it via the MAY tier. The Strategic perspective surfaced that the end-goal architecture makes this gap matter. The most uncomfortable perspective — "did I, the agent, get this wrong AGAIN?" — was checked and answered affirmatively (yes, second instance of systematic narrowing). PASS.
- **Clean Resolution Trap:** Each ambiguity's counter-interpretation was articulated + refuted on structural grounds (not precedent). The counter-tests are visible in the artifact. PASS.
- **Self-Reference Blindness:** Is the evaluation tool sharing assumptions with the target? Partial risk — Sensemaking is a discipline; routeman is a discipline. Mitigated by: (a) external grounding in spec text + CONCLUDE + canon doc; (b) the user's challenge as external reference; (c) the 15-48 inquiry's cross-discipline grounding. PASS with note.

---

## Structural check (manual)

- Required sections present: ✓ SV1, ✓ Phase 1 + SV2, ✓ Phase 2 + SV3, ✓ Phase 3 + SV4, ✓ Phase 4 + SV5, ✓ Phase 5 + SV6.
- Saturation indicators reported: ✓.
- Failure modes checked: ✓ all 6.
- Meta-inspection hooks fired at phase ends: ✓ H4/H5 after SV2; H1/H2/H3/H7 after SV3; refinement notes name H4/H5 at SV4; Accommodation trigger checked at SV6.
- Ambiguity entries include strongest-counter + structural-refutation: ✓ all 5 ambiguities.
- Load-bearing concept test applied: ✓.
- Specific-vs-pattern recognition cue applied: ✓.

No `[FAIL]` lines.

PROCEED to Decomposition.
