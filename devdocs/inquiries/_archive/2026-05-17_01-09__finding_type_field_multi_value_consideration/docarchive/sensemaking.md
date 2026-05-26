# Sensemaking — Finding Type-Field Multi-Value Consideration

## User Input

```
/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-17_01-09__finding_type_field_multi_value_consideration/_branch.md
```

Branch question (Layer = MEANING primary): does multi-type membership exist as a real phenomenon for findings, or do apparently-multi-type cases collapse to one dominant type at the spec level? Exploration claimed 3 of 3 recent findings are multi-typed (spanning decision + spec-modification, or recommendation + decision + spec-modification). Sensemaking's job: test whether that claim survives a tighter reading of what "type" actually means in the prior finding's variant taxonomy.

---

## SV1 — Baseline Understanding

Exploration's headline — "3 of 3 recent findings are multi-typed" — is strong empirical evidence IF the reading of "type" is body-shape-permissive (i.e., a finding counts as type X if it contains type-X-shaped content anywhere). But the prior finding's `type:` mechanism couples both an intent-declaration AND a body-variant-selection role in one field; that coupling implies a STRICTER reading of "type" where the variant's distinguishing Finding-body sections determine the type, and MUST-section content (universal across all variants) does not change the type. Under the stricter reading, the 3/3 claim may collapse. The verdict depends on which reading is canonical.

---

## Phase 1 — Cognitive Anchor Extraction

### Constraints
- **C1** — Layer commitment is MEANING per branch.
- **C2** — Verdict must be either (a) single-value with collapse argument OR (b) multi-value schema with shape named.
- **C3** — Verdict must produce a concrete refinement diff against the prior finding.
- **C4** — Exploration found 3 of 3 recent findings appear multi-typed under a body-shape-permissive reading.
- **C5** — The four type variants form a partially-ordered set (per exploration's overlap matrix).
- **C6** — The prior finding (`2026-05-16_10-50__finding_md_format_redesign`) does not state a strict definition of what "type" means — specifically, it does not clarify whether MUST-section Edit-Specifications affect a finding's type.

### Key Insights
- **KI1** — "Type" has at least three plausible readings:
  - **(a) Author intent**: what the inquiry was FOR (its primary question's purpose).
  - **(b) Body-section shape**: what variant-distinguishing sections the finding's body contains.
  - **(c) Content-mention**: anywhere in the finding (including MUST) where variant-related content appears.

  Exploration implicitly used reading (c). The prior finding's design (using `type:` to select body variants AND requiring author declaration) blends (a) and (b). Reading (c) is the loosest; it always produces multi-type claims when MUST contains Edit-Specifications, which it almost always does.

- **KI2** — The prior finding has a **universal-base + typed-variant architecture**. The Next Actions section (with MUST/COULD/DEFERRED items and their Edit-Specifications) is in the UNIVERSAL BASE, not in any variant's body. So Edit-Specifications in MUST are body-position-NEUTRAL — they don't carry a variant's distinguishing body-shape.

- **KI3** — The "concrete-edit-form" rule the prior finding introduces ("any 'edit X' action item must reference or include an Edit-Specification sub-form") applies to ALL findings that propose edits, regardless of type. So Edit-Specifications in MUST are a universal pattern, not a spec-modification-variant marker.

- **KI4** — Under reading (b) — body-section shape — the recent findings' true variant assignments are:
  - sensemaking-spec-comparison: decision-variant body (Verdict + Alternatives killed + Alternatives refined) + universal MUST with Edit-Specs. **Type: decision (single).**
  - biggest-next-gain: recommendation-variant body (3-tier ranked plan with conditional reasoning) + universal MUST with Edit-Specs. **Type: recommendation (single).**
  - name-for-navigation: decision-variant body (Verdict + Alternatives) + universal MUST with Edit-Specs. **Type: decision (single).**
  
  Under reading (b), all three findings are SINGLE-TYPED. Exploration's 3/3 multi-type claim collapses.

- **KI5** — The corpus (~50 findings) has not been audited for hybrid-body findings (findings that contain variant-distinguishing body sections from TWO variants — e.g., a decision-variant body AND a per-edit-specs-variant body in the same finding). The prior finding's corpus analysis derived the 4 variants without specifically searching for hybrid-body cases. Absence of evidence is not evidence of absence; the question is whether the prior finding's analysis would have caught hybrid-body findings if any exist.

- **KI6** — The variant-body sections COULD compose in one finding (the universal-base architecture doesn't forbid it). A finding could have a decision-variant Verdict section AND a spec-modification-variant Per-edit-specs section. Whether such a finding exists in the corpus is empirically uncertain.

- **KI7** — The strict reading (b) of "type" requires that variants be clearly distinguished by body sections (not MUST). The prior finding implicitly uses this reading but does not state it. **The gap the user pointed at is real, but its shape is "missing clarification" not "missing schema feature."**

### Structural Points
- **SP1** — The prior finding's `type:` field is overloaded: it selects body variant (structural role) AND declares author intent (semantic role). Under the strict reading, only the body variant matters for the schema's correctness.
- **SP2** — The universal-base architecture cleanly separates "what's always in the finding" (Question, Finding Summary, Finding, Next Actions with universal MUST/COULD/DEFERRED, Reasoning, Open Questions) from "what's variant-specific" (the Finding-body section's typed shape).
- **SP3** — Edit-Specifications are in the universal MUST per the prior finding's "concrete-edit-form" rule. They are NOT a variant-body marker.

### Foundational Principles
- **FP1** — A schema field's meaning must be unambiguous. If "type" has three readings, the spec must pick one explicitly.
- **FP2** — Simplicity beats generality unless evidence demands generality. Single-value beats list-value if the data is single-valued under the right reading.
- **FP3** — A revision to the prior finding should preserve maximum compatibility — clarify what's intended, don't change schema without empirical pressure.

### Meaning-Nodes
- **MN1** — **Finding type** = the body-section shape (reading (b)). The frontmatter `type:` field both declares this and is used to select the Finding-body template.
- **MN2** — **Multi-type membership** = the case where a finding's BODY contains variant-distinguishing sections from two or more variants. Empirically uncertain in the corpus; needs explicit audit.
- **MN3** — **Apparent multi-type** = a finding whose UNIVERSAL MUST/Next-Actions content includes edits or recommendations, but whose Finding-body section is single-variant. Under reading (b), this is single-typed; the appearance comes from reading (c).

### SV2 — Anchor-Informed Understanding

The exploration's "3/3 multi-typed" claim was an artifact of using reading (c) — content-mention. Under the prior finding's design-intent reading (b — body-section shape), the same 3 findings are single-typed; their multi-type appearance comes from Edit-Specifications in MUST, which are universal-base content, not variant-specific. The gap the user pointed at is real, but its real shape is "the prior finding silently uses reading (b) without stating it" — not "the schema is too restrictive."

*Meta-Inspection cross-reference: applying meta-question to H4 (concept names) — am I treating "type" as one fixed concept? No, three readings (KI1). Resolution: commit to reading (b) per the prior finding's design intent. To H5 (motivating examples) — am I treating exploration's 3 examples as THE WHOLE PATTERN of corpus findings? They were the recent-evidence sample, but the wider corpus may contain genuine hybrid-body cases that need an audit before settling.*

---

## Phase 2 — Perspective Checking

### Technical / Logical

The prior finding's `type:` field has two structural roles: variant-body selection (structural) and intent declaration (semantic). Under the strict body-shape reading, only the structural role determines correctness. Edit-Specifications in MUST are universal; they don't carry variant identity. So a single-value `type:` is structurally sufficient AS LONG AS the body-shape reading is canonical.

**Verdict:** single-value is correct under the body-shape reading; the missing piece is making the body-shape reading explicit.

**New anchor — KI8:** the prior finding's gap is meta-linguistic (it doesn't define what `type:` means precisely) rather than structural (the schema isn't actually wrong).

### Human / User (the inquiry's author)

The user invoking `/MVL+` has ONE primary question per inquiry. That question has ONE shape (decision-like, spec-mod-like, recommendation-like, diagnosis-like). The user's intent at invocation time is single-valued.

But the user reading findings cross-corpus may want to filter by "all findings that touch spec edits" — which would include decision-type findings whose MUST has spec edits. Under the strict reading, such filtering requires reading the MUST contents, not just the `type:` field. This is a usability concern for cross-finding navigation.

**Verdict:** user-perspective splits — single-value is fine at inquiry creation; multi-value would help cross-finding filtering. Cross-finding filtering can be addressed via the prior finding's `related` key or via post-hoc analysis, without changing `type:`.

### Strategic / Long-term

As the corpus grows past 50 findings, the question is whether the 4-variant taxonomy holds or whether hybrid-body findings start emerging. If they do, the schema needs to evolve. Today: single-value works; future revisits depend on empirical signal.

**Verdict:** ship single-value with the body-shape reading made explicit; revisit when corpus evidence of hybrid bodies accumulates.

**New anchor — KI9:** schema decisions in the project follow empirical pressure, not pre-emptive flexibility. Premature flexibility (e.g., list-valued `types:` without evidence) is its own cost.

### Risk / Failure

- Risk of single-value with clarification: a future hybrid-body finding could fit poorly and force a workaround.
- Risk of list-valued schema: complexity creep — every finding gets multiple tags whether or not the multiplicity matters; cross-finding filters become harder to interpret.
- Risk of doing nothing: the user's question stays unanswered; the silent assumption persists; future authors hit the same ambiguity.

**Verdict:** clarifying the prior finding's reading is low-risk and addresses the user's question. Adopting a multi-value schema without corpus evidence is premature optimization.

### Resource / Feasibility

Refinement effort:
- Clarifying note (the body-shape reading): small. Add 1 paragraph to the prior finding's Variants section.
- Multi-value schema adoption: medium. Change frontmatter key from `type:` to `types:`; update CONCLUDE; update structural checks; update existing findings.

**Verdict:** clarifying-note refinement is cheap; multi-value is expensive; cost-benefit favors clarification.

### Definitional / Internal Consistency

Does the verdict contradict the prior finding? The prior finding's design intent (per the variant-body architecture) IS the body-shape reading. Stating it explicitly DOESN'T contradict the prior finding; it surfaces what was implicit. Internally consistent.

Does the verdict contradict the user's framing? The user asked whether multi-value should exist; the verdict says "not yet, because the multi-type appearance comes from misreading what `type:` means; the schema is fine, the missing piece is clarification." This answers the question even though the answer is unexpected.

**Verdict:** internally consistent.

### Definitional / Frame-exit Completeness

Gating predicate fires — "type" is multi-readable per MN1.

**Existence enumeration:** what does "type" refer to project-wide?
- Author intent (reading (a))
- Body-section shape (reading (b)) — the prior finding's design intent
- Content-mention (reading (c)) — what exploration used
- Reader's expected cross-finding filter (orthogonal usage layer)

**Role assessment:** all four readings are in-frame. The verdict commits to reading (b) for the schema; readers who want cross-finding filtering by content-mention can use post-hoc analysis or the prior finding's `related` key.

**Verdict rigor:** counter-arguments:
- "What if reading (c) is what users actually want, and the prior finding's design intent should change?" → Possible, but premature without corpus evidence of hybrid-body cases. Wait for evidence.
- "What if hybrid-body findings DO exist in the corpus and the prior finding missed them?" → Triggers an audit; deferred as Open Question.

**Residual:** anything not captured? The DECISION of which reading is canonical is a meaning-layer commitment; the verdict makes this commitment explicit. No frame-exit gap.

### Phase / Calibration-State

Does the verdict depend on calibration? Yes — the verdict assumes "no corpus evidence of hybrid-body findings exists." If a corpus audit surfaces such findings, the verdict re-opens. Today's calibration state: 3/3 recent findings under strict reading are single-typed; broader corpus uncertain.

### SV3 — Multi-Perspective Understanding

Perspectives converge on: the prior finding's single-value `type:` is CORRECT under its own design intent (body-shape reading); the gap the user pointed at is a missing CLARIFYING NOTE, not a missing schema feature. The exploration's 3/3 multi-type claim relied on a looser reading (content-mention); under the strict reading, those findings are single-typed.

*Meta-Inspection cross-reference: applying meta-question to H1 (candidate set) — are the 6 schema candidates (A1-A6) actually instances of one underlying choice? Yes: each encodes a different position on the spectrum "how strictly is `type:` defined?" A1 with collapse rule = strict, single-value; A2 list = loose, multi-value; A6 = no definition. The verdict picks A1-with-clarification (strict, single-value, body-shape reading made explicit).*

---

## Phase 3 — Ambiguity Collapse

### Ambiguity 1: What does "type" actually mean?

**Strongest counter-interpretation:** "Type" might mean content-mention (reading (c)) — a finding is type-X if its content anywhere mentions X-shaped material. Under this reading, the exploration's 3/3 claim stands and multi-type is real.

**Why the counter fails (structural grounds):** The prior finding's `type:` field has a structural role (selects Finding-body variant) that requires unique determination. If `type:` had reading (c), it couldn't select a body variant (which variant would a finding with content-mentions of two variants get?). The structural role forces reading (b) — body-section shape — as the operational meaning. Reading (c) is a usability layer, not the schema's meaning.

**Confidence:** HIGH on structural grounds.

**Resolution:** "Type" = body-section shape (reading (b)). The prior finding's design uses this reading implicitly; the refinement is to state it explicitly. Content-mention (reading (c)) is a cross-finding usability concern, addressed separately via filter logic or the `related` key, not via the `type:` field.

**What is now fixed:** the meaning of `type:` is the body-section shape variant identifier.

**What is no longer allowed:** treating `type:` as multi-value because content-mentions span variants; that's a category error.

**What now depends on this choice:** the verdict's recommendation (single-value `type:` with a clarifying note); the audit deferral (whether hybrid-body findings exist).

**What changed in the conceptual model:** "type" moved from ambiguous-three-readings to definite-one-reading.

### Ambiguity 2: Is multi-type a real phenomenon?

**Strongest counter-interpretation:** Multi-type IS real because hybrid-body findings exist or will exist — findings whose Finding-body contains variant-distinguishing sections from two variants simultaneously (e.g., a decision-variant Verdict section AND a spec-modification-variant Per-edit-specs section in the same finding body).

**Why the counter has merit:** Hybrid-body findings are structurally possible. The universal-base architecture doesn't forbid them. The prior finding's corpus analysis did not specifically search for them.

**Why the counter doesn't fully succeed:** Existence is empirically uncertain. The 3 recent findings examined under reading (b) are single-typed (Edit-Specs in MUST don't make them hybrid-body). The wider corpus has not been audited. The verdict's correctness depends on whether the audit finds hybrid-body cases.

**Confidence:** MEDIUM. Under current evidence, single-value is sufficient; under future evidence of hybrid bodies, multi-value would be needed.

**Resolution:** Multi-type is HYPOTHETICALLY possible (hybrid-body findings could exist) but EMPIRICALLY UNCONFIRMED (no documented cases in the corpus). Adopt single-value now; revisit on evidence.

**What is fixed:** single-value `type:` under the strict body-shape reading.

**What is no longer allowed:** assuming multi-type is common without empirical evidence.

### Ambiguity 3: Was exploration's "3/3 multi-typed" claim correct?

**Strongest counter-interpretation:** Exploration's claim was wrong because it used reading (c), not reading (b). Under reading (b), the same 3 findings are single-typed.

**Why the counter fully succeeds:** The structural analysis in Phase 1 (KI4) confirms this. The 3 findings' Finding-body sections each fit one variant (decision or recommendation); their MUST sections contain Edit-Specifications which are universal-base content, not variant-body markers.

**Resolution:** Exploration's claim was an artifact of reading (c). Under reading (b), the 3 findings are single-typed. The exploration's empirical evidence does NOT support multi-value schema adoption.

**What changed:** the empirical headline from exploration is REVISED. The structural argument prevails.

### Load-bearing concept test

- **"Type"** (multi-readable per MN1, resolved per Ambiguity 1): test domain-property. Project-specific (the project defines `type:` via the prior finding's variant architecture). PASS.
- **"Body-section shape"** (KI4): test domain-terminology. Aligned with the prior finding's variant definitions. PASS.
- **"Universal-base architecture"** (SP2): test discoverability. Defined in the prior finding; reading (b) follows from this architecture. PASS.

### Specific-vs-pattern recognition cue

The 3 exploration examples are specific cases; the variant-vs-MUST distinction is the pattern. The verdict applies to all findings (pattern), not just the 3 examples (specifics).

### SV4 — Clarified Understanding

After disambiguation:
- "Type" = body-section shape variant (reading (b)).
- Multi-type is hypothetically possible (hybrid-body findings) but empirically unconfirmed under reading (b).
- Exploration's 3/3 multi-type claim was an artifact of reading (c); under reading (b), the 3 findings are single-typed.
- The prior finding's single-value `type:` is correct under reading (b); the gap is the missing explicit clarification of which reading is canonical.

The remaining viable verdicts narrow:
- **W1: Add clarifying note to prior finding** — state explicitly that `type:` denotes body-section variant; MUST-section Edit-Specifications are universal and don't multi-type a finding. Keep single-value schema. ADD an Open Question for a future corpus audit for hybrid-body findings.
- **W2: Adopt list-valued schema preemptively** — switch to `types:` to be future-flexible. Costs spec change without empirical evidence.
- **W3: Both** — clarifying note PLUS list-valued schema, with first entry as body-selector. Captures W1's clarity AND W2's flexibility.

---

## Phase 4 — Degrees-of-Freedom Reduction

### Fixed:
- "Type" = body-section shape (reading (b))
- Exploration's 3/3 multi-type claim collapses under reading (b)
- Single-value `type:` is correct under reading (b)
- The prior finding's gap is missing explicit reading-commitment, not missing schema feature
- Hybrid-body findings are hypothetically possible but empirically uncertain

### Eliminated:
- Multi-value schema as a NOW move without empirical evidence (W2 alone)
- Treating MUST-section Edit-Specs as variant-body content (the reading (c) error)
- Premature schema flexibility (FP2: simplicity beats generality without evidence)

### Remaining viable verdicts:
- **W1** (clarifying note; single-value preserved) — minimal change; preserves the prior finding's architecture; addresses the user's question by explaining why multi-value isn't needed under the right reading.
- **W3** (clarifying note + list-valued schema for forward flexibility) — clarifies AND adds flexibility; costs more spec change for future-proofing.

W2 alone is killed (no empirical evidence for multi-value).

### SV5 — Constrained Understanding

Two viable verdicts. User-decision factors:
- If "honor empirical evidence and minimize change" wins: **W1**.
- If "anticipate future hybrid bodies and ship flexibility now" wins: **W3**.

The structural argument (FP2: simplicity beats generality without evidence; FP3: preserve compatibility) favors W1. The forward-flexibility argument favors W3.

---

## Phase 5 — Conceptual Stabilization

*Meta-Inspection cross-reference: applying meta-question to H6 (model fit) — does the 2-verdict model destabilize? No — all anchors absorb cleanly into the reading-(b)-is-canonical frame. No Accommodation trigger fired.*

### SV6 — Stabilized Model

**The recommended verdict is W1: add a clarifying note to the prior finding.** The note states explicitly:

1. `type:` denotes the BODY-SECTION-SHAPE VARIANT, not author intent or content-mention.
2. The four variants (decision, spec-modification, recommendation, loop-diagnose) are distinguished by their Finding-body sections, not by content elsewhere in the finding.
3. Edit-Specifications in the universal MUST section are UNIVERSAL across all variants — they do not make a decision-typed finding into a spec-modification-typed finding. The "concrete-edit-form" rule applies regardless of `type:`.
4. A finding has exactly one `type:` value because its Finding-body section has exactly one variant shape. The schema's single-value form is structurally correct.

**Why this verdict:**

- The user's question ("should `type:` allow multi-value") presupposed that the apparent multi-type cases are real. Under the strict body-shape reading (which the prior finding's design implies but does not state), the apparent cases collapse — they are single-typed findings whose MUST content includes Edit-Specifications, which is universal-base behavior, not variant-marker behavior.
- The exploration's "3/3 multi-typed" claim was an artifact of using a looser reading of `type:` than the prior finding intends. Under the prior finding's design-intent reading, the same 3 findings are single-typed.
- The gap the user correctly identified is therefore META-LINGUISTIC (the prior finding doesn't define what `type:` means precisely) rather than STRUCTURAL (the schema isn't actually wrong). The cheapest, most-preserving fix is to add the clarification.
- The schema-flexibility (W3) move is premature — it would change the schema in anticipation of evidence the corpus has not yet produced. The project's principle (FP2: simplicity beats generality without evidence) disfavors this.

**Caveats and revival triggers:**

- The verdict assumes the corpus contains no hybrid-body findings (findings whose body has variant-distinguishing sections from two variants). This has not been formally audited.
- If a corpus audit identifies hybrid-body findings (e.g., a finding whose body contains both a Verdict section per decision-variant AND a Per-edit-specs section per spec-modification-variant), the verdict re-opens. At that point, the multi-value schema (W2/W3) becomes the right answer.

**The alternative (W3) is offered as a deferred option:**

- Adopt list-valued schema (`types: [primary, secondary]`) IF the audit produces evidence of hybrid bodies OR IF the project decides forward-flexibility is worth the spec cost.
- Trigger: corpus audit identifies ≥1 hybrid-body finding, OR the user explicitly prioritizes forward-flexibility.

**Difference from SV1:** SV1 leaned "exploration's 3/3 evidence is strong; multi-value needed." SV6 says exploration's reading was looser than the prior finding's design intent; under the strict body-shape reading, single-value is correct; the gap is a missing clarification, not a missing feature.

---

## Saturation Indicators

- **Perspective saturation:** 8/8 perspectives produced new anchors (KI8 from Technical, KI9 from Strategic, etc.). Reached.
- **Ambiguity resolution ratio:** 3/3 ambiguities resolved.
- **SV delta:** SV1 leaned multi-value; SV6 = single-value-with-clarification. Substantial structural shift via the body-shape vs content-mention distinction.
- **Anchor diversity:** 6 Constraints + 9 Key Insights + 3 Structural Points + 3 Foundational Principles + 3 Meaning-Nodes. Multi-typed, multi-perspective.

Saturation reached on all four indicators.

---

## Failure Mode Self-Check

- **Status Quo Bias:** Tested. My walkback from exploration's headline to SV6's verdict could be Status Quo Bias defending the prior finding. Counter-test: would the verdict be the same if the prior finding hadn't existed? Yes — from-scratch design with body-shape variants + universal MUST is a clean architecture; the strict-reading discipline holds independent of preserving the prior. **Survives.**
- **Premature Stabilization:** No — went through 3 ambiguities with explicit counter-tests.
- **Anchor Dominance:** The body-shape-vs-content-mention distinction (KI1-KI4) is a strong anchor. Verified by checking: if KI4 is removed (assume reading (c) is canonical), the verdict flips to multi-value. The verdict's dependence on the reading commitment is real, but the commitment itself is justified by the prior finding's structural role of `type:`. Not Dominance.
- **Perspective Blindness:** No — Risk and Resource perspectives produced friction; Frame-exit applied.
- **Clean Resolution Trap:** Flagged but survived. The verdict ("the prior finding's gap is meta-linguistic, not structural") is clean, but the structural argument (Edit-Specs are universal-MUST content, not variant-body content) is genuinely structural, not just elegant.
- **Self-Reference Blindness:** **Flag** — using `/sense-making` to critique a finding-format spec. External grounding: (i) the prior finding's own variant definitions (independent of this inquiry); (ii) the universal-base architecture (a structural feature the prior finding itself names); (iii) the body-shape-vs-content-mention distinction (a meta-linguistic distinction not internal to project jargon); (iv) reference to my own previous claim (which the verdict revises — a willingness to revise is itself anti-bias). **Survives.**
