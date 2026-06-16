## User Input

`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-06-16_17-45__container_choice_field_vs_guidance_text/_branch.md`

(Prior outputs consumed: surfacing.md, sensemaking.md. Whole = the SV6 container recommendation. Decompose into finding-shaped pieces (recommendation / grounds / convention format / trigger-keyed rule / dominated alternatives); surface that the convention format mitigates the field's only real advantage (consistency), and the trigger is what makes the recommendation a RULE not a one-time pick. Save to decomposition.md.)

---

# Structural Decomposition — The Container Recommendation

**The whole (one paragraph, premature-decomposition guard):** The finding must recommend a container for the meaning-gaps content and justify it. Sensemaking stabilized the answer: **store it as a labeled convention block inside the existing Guidance field (not a dedicated schema field) now, and promote to a typed field only when a deterministic/non-LLM consumer needs to parse it.** The answer is a *recommendation* with *grounds*, a concrete *format*, a *trigger-keyed rule* that turns the one-time pick into a standing rule, and a *contrast* (why not the alternatives). Two couplings are load-bearing: the convention **format** is what neutralizes the dedicated field's only real advantage (consistency), and the **trigger** is what makes the recommendation a rule (text now / field iff) rather than a coin-flip.

---

## 1. Coupling Map

| Pair | Coupling | Why |
|---|---|---|
| grounds (P2) → recommendation (P1) | **strong (justifies)** | the grounds ARE why text-in-Guidance is correct; change the grounds → the recommendation is unsupported |
| format (P3) → recommendation (P1) | **strong (instantiates)** | the convention block is the concrete *how* of "structured Guidance text"; without it, P1 is an abstraction |
| format (P3) → grounds (P2) | **moderate** | one ground is "consistency is cheaply handled" — and the *thing* that handles it IS the convention; P2's consistency-ground depends on P3 existing |
| format (P3) → alternatives (P5) | **moderate** | the inline `[vitality]` tag *dominates* the hybrid; the convention *defeats* the dedicated field's consistency edge — both kills in P5 lean on P3 |
| rule/trigger (P4) → recommendation (P1) | **strong (extends)** | the trigger turns "pick text" into "text now / field iff a non-LLM consumer appears" — it makes P1 a *rule* |
| rule/trigger (P4) → alternatives (P5) | **strong** | the trigger resolves BOTH kills: text-forever dies (trigger keeps the door open), field-now dies (trigger hasn't fired) |
| alternatives (P5) ← P1,P3,P4 | **derived (contrast)** | the negative space — defeated using the format (P3) + the trigger (P4) |

**Topology:** a **root claim** (text now) supported by **grounds**, instantiated by a **format**, extended into a **rule** by the **trigger**, and contrasted against **dominated alternatives** — where the format and the trigger are the two load-bearing pieces the contrast (and one ground) lean on.

---

## 2. Boundaries (Top-Down)

Five pieces:
- **P1 — The recommendation** (text-in-Guidance now, not a dedicated field).
- **P2 — The grounds** (why text: fit, precedent, sparseness, reversibility, parsimony).
- **P3 — The convention format** (the labeled block + inline vitality tag).
- **P4 — The trigger-keyed upgrade rule** (when, if ever, to promote to a field; the sharpened trigger).
- **P5 — The dominated alternatives** (field-now, text-forever, hybrid — why each loses).

**The load-bearing cuts** are at two articulation points: (a) **recommendation vs grounds vs format** (the *what* / *why* / *how* of the positive claim), and (b) **the trigger as its own piece** (it is what converts a pick into a rule — it deserves to be visible, not buried in P1).

**Rejected boundary (recorded):** folding the trigger (P4) into the recommendation (P1). Rejected — the trigger is the single most load-bearing and most easily-missed part (it's what the user's "until a machine reads it" gestured at, and the inquiry's real contribution is *sharpening* it). Burying it in P1 would hide the contribution.

---

## 3. Boundaries (Bottom-Up Validation)

| Atom | Groups into |
|---|---|
| "store as a labeled convention block in Guidance, NOT a field" | P1 |
| "Guidance already fits"; "text-form precedent (depth-signal/Frontier)"; "sparse-field smell"; "reversible (text→field cheap later)"; "parsimony/YAGNI" | P2 |
| "`Meaning-gaps:` block"; "`- <gap> — [vitality] — <why>` lines"; "inline tag = human-readable AND regex-parseable" | P3 |
| "promote only when the trigger fires"; "trigger = a deterministic/non-LLM consumer must parse without an LLM"; "may never fire in an LLM project" | P4 |
| "field-now killed (parsimony+consistency+YAGNI)"; "text-forever-absolute killed (over-commit)"; "hybrid dominated by the inline tag" | P5 |

**Agreement:** atoms cluster cleanly into the five pieces. The atom that *spans* pieces — "consistency" — is correctly handled at an interface: it's the dedicated field's advantage (named in P5), neutralized by the convention (P3), which is why it appears as a *ground* (P2). Surfaced in §5, not a split atom. **Confidence:** HIGH.

---

## 4. Question Tree (Pieces as Questions + Verification)

**P1 — The recommendation**
> *Where should the meaning-gaps content live — a dedicated field or Guidance text?*
- [ ] States: a **labeled convention block inside the existing Guidance field**, not a dedicated schema field, for now.
- [ ] Frames it as the *lightest sufficient container*, not "text is nicer."

**P2 — The grounds**
> *Why text-in-Guidance rather than a dedicated field?*
- [ ] **Guidance already fits** — it is Pointers-each-with-WHY; a gap is an item-with-a-why plus one tag.
- [ ] **Text-form precedent** — routelister's other soft signals (depth-signal, Frontier) are all text/annotation; a typed field here would be the first typed field for soft content.
- [ ] **Sparse-field smell** — a dedicated field is null on most route-types (only DEVELOP+CONSOLIDATE carry it).
- [ ] **Reversibility + parsimony** — text→field later is a cheap migration, so default to the lighter option (YAGNI).

**P3 — The convention format**
> *Concretely, what does the structured Guidance text look like?*
- [ ] A labeled block, e.g. `Meaning-gaps:` followed by `- <gap> — [vitality] — <why>` lines.
- [ ] The **inline `[vitality]` tag** is both human-readable AND trivially parseable (a regex finds `[high]`).
- [ ] Structured enough to be consistent across routes; light enough to need no schema change.

**P4 — The trigger-keyed upgrade rule**
> *When, if ever, should this become a dedicated typed field?*
- [ ] Promote **only when the trigger fires** — the recommendation is a *rule* (text now / field iff), not a one-time pick.
- [ ] The trigger, **sharpened**: not "a machine reads it" but **"a deterministic / non-LLM consumer must parse the content without an LLM"** (e.g. a metrics dashboard).
- [ ] Note: an LLM-based meta-loop reads structured prose fine, so in an LLM-centric project the trigger **may never fire** — text may be permanent.

**P5 — The dominated alternatives**
> *Why not a field now, or text forever, or a typed vitality marker?*
- [ ] **Dedicated field now** — killed on parsimony + sparseness + YAGNI; its one advantage (consistency) is handled by the convention (P3).
- [ ] **Text forever (absolute)** — killed as over-commitment; the trigger (P4) keeps the field option open for a real future non-LLM consumer.
- [ ] **Hybrid (separately-typed vitality marker)** — dominated; the inline tag (P3) delivers parseable vitality without schema growth.

---

## 5. Interface Map

| Source → Target | What flows | Direction | Notes / hidden coupling |
|---|---|---|---|
| P2 → P1 | the justification | one-way | grounds support the claim |
| P3 → P1 | the concrete instantiation | one-way | the convention makes "Guidance text" real |
| P3 → P2 | the **consistency-mitigation** | one-way | P2's "consistency is cheaply handled" ground **assumes** the convention (P3) exists |
| P3 → P5 | the inline tag + the convention | one-way | P5's hybrid-domination + field-consistency-defeat **assume** P3 |
| P4 → P1 | the trigger that makes it a rule | one-way | P1 becomes "text now / field iff" only with P4 |
| P4 → P5 | the trigger that resolves both kills | one-way | text-forever and field-now both die *via* the trigger |
| P1,P3,P4 → P5 | the positive claim, format, and rule | one-way | the alternatives are the negative space, defeated with these |

No circular interfaces. The two cross-cutting load-bearers (the format P3, the trigger P4) are explicit.

---

## 6. Dependency Order

```
P1 (recommendation) → P2 (grounds) → P3 (format) → P4 (rule/trigger) → P5 (alternatives)
```

- **P1 stated first, finalized after** — it's the thesis; P2/P3/P4 support it (written/confirmed after them, presented first).
- **P3 before P5** — the hybrid-domination and the field-consistency-defeat need the convention.
- **P4 before P5** — the trigger resolves both of P5's kills.
- **P5 last** — the contrast, built on P1+P3+P4.

No circular dependencies.

---

## 7. Self-Evaluation

| Dimension | Verdict | Evidence |
|---|---|---|
| **Independence** | **PASS** | each piece answerable through its interface; P5 needs only P3's format + P4's trigger |
| **Completeness** | **PASS** | all SV6 content mapped (recommendation, grounds, format, rule/trigger, alternatives); the forward item (exact format detail) sits in P3 |
| **Reassembly** | **PASS** | P1+P2+P3+P4+P5 = the recommendation finding (what + why + how + when + why-not) |
| **Interface clarity** | **PASS** | the two cross-cutting load-bearers (format P3 → P2/P5; trigger P4 → P5) surfaced with stated assumptions |
| **Balance** | **PASS** | P2 (grounds) & P5 (alternatives) heaviest = the reasoning; P1/P3/P4 medium-light; no single 80% piece |
| **Confidence** | **HIGH** | clean topology — a recommendation with grounds, a concrete format, a rule, and a contrast |

**Determination-mechanism check:** the recommendation's runtime determination is "has the trigger fired (should we upgrade to a field)?" — addressed by **P4**, which defines the trigger (a non-LLM/deterministic consumer appears). No missing determination-mechanism piece. **PASS.**

**Failure modes checked:** Premature-decomposition (no — sensemaking clarified first); Wrong-boundaries (cut at what/why/how/when/why-not articulation points; the trigger split out deliberately); Hidden-coupling (the format→consistency and trigger→kills couplings surfaced as named interfaces); Missing-pieces (determination = the trigger, in P4; completeness run); Over-decomposition (5 pieces = a recommendation finding's natural sections); Ignoring-dependencies (linear order given); Imbalanced (balance check passed).

**Decomposition verdict: COMPLETE — DV1 sufficient.** Five pieces; the format and the trigger are the two load-bearing pieces the contrast leans on; ready for Innovation to crystallize the convention format + the trigger framing.
