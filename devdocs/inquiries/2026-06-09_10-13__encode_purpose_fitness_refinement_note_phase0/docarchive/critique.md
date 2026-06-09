# Critique — encode_purpose_fitness_refinement_note_phase0

## User Input

```text
/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-06-09_10-13__encode_purpose_fitness_refinement_note_phase0/_branch.md

Adjudicate Innovation's assembled refinement-note draft + Ancillary A + B + folding decisions + COULD ancillaries against the 9 inherited commitments from prior inquiry, the structural specification from sensemaking, and 3 frame-premise prosecutions.
```

---

## Phase 0 — Dimension Construction

### Burden of proof determination

Medium-high stakes. The text will be applied to the canonical /td-critique spec; reversible but visible. Default to **guilty until proven innocent** on CRITICAL dimensions; defense must demonstrate viability per dimension.

### Refinement notes applied at Phase 0

- **Project-specific risk dimension check.** Candidate set is spec-edit text. Project-specific risks: discipline-individual coupling; tone-mismatch with peer refinement notes; commitment mis-encoding; cross-reference targets non-existent. Operationalized via D2, D4, D5, D10.
- **Frame-premise test.** Inquiry inherits the IFP 4a template + 9 prior commitments + single-locus structural decision. Three premises named for what-if-wrong prosecution (operationalized as D8).
- **Purpose-fitness test (NEW, applied self-referentially).** For each candidate, ask: "Does this candidate do what it's supposed to do?" Operationalized via D1.

### Dimensions

| # | Dimension | Weight | What it asks |
|---|---|---|---|
| **D1** | Commitment-encoding completeness | CRITICAL | Are all 8 in-scope inherited commitments encoded in the text? (#7 explicitly out-of-scope per decomposition.) |
| **D2** | Spec-coherence with `td-critique.md` | CRITICAL | Do cross-references resolve? Does insertion compose with existing Phase 0 structure? |
| **D3** | Practitioner-readability at first read | CRITICAL | Does a practitioner who has never seen this principle understand it from the text alone? |
| **D4** | Discipline-individual compliance | CRITICAL | Per `docs/discipline_edit_tiers.md`: no runner artifacts; no protocol-template fields; no sister-discipline-internal section names. |
| **D5** | Tone-match with peer refinement notes | HIGH | Does the voice match IFP 4a (Frame-premise test) and Project-specific risk dimension check? |
| **D6** | Length appropriate for Phase 0 density | HIGH | ~24 lines comparable to IFP 4a (~22 line-equivalents); section density acceptable with three refinement notes? |
| **D7** | Folding decisions preserve content fidelity | CRITICAL | Block 3 → Block 2: REFINE/KILL boundary still articulated? Closing cross-refs → Block 4: cross-references resolve from the unification paragraph? |
| **D8** | Frame-premise robustness | CRITICAL | Do the 3 inherited-frame premises survive what-if-wrong prosecution? |
| **D9** | Self-reference mitigation via external precedents | HIGH | Are structural decisions anchored to existing spec patterns (IFP 4a; Project-specific risk; #2/#3 entries) — not invented? |
| **D10** | Cross-reference firmness | CRITICAL | Do all cross-references point to text that exists in the current spec? |

### Frame-premise prosecutions (D8 operationalization)

**Premise (a):** "The 9 prior commitments are correctly encodable as text in a refinement note."
- *What-if-wrong:* a commitment is mis-encoded.
- *Evidence:* Per-commitment verification (see candidate evaluation below) shows all 8 in-scope commitments are encoded with content fidelity to the prior finding. Commitment #7 (confidence orthogonal / INTERIM deferred) is explicitly OUT-OF-SCOPE in decomposition and the text correctly makes no claims about confidence.
- *Result:* PASS.

**Premise (b):** "IFP 4a template is the right precedent."
- *What-if-wrong:* Project-specific risk dimension check (the terser style — one long sentence) would produce a better-composed note.
- *Evidence:* The purpose-fitness content has 4 distinct aspects (semantics + test + unification + fallback). A single-sentence terse style would either omit aspects or produce a run-on. IFP 4a's multi-paragraph style with optional sub-clauses fits the content shape; Project-specific risk's style doesn't.
- *Result:* PASS.

**Premise (c):** "Single-locus encoding at Phase 0 is sufficient."
- *What-if-wrong:* a practitioner reading Phase 3 (Verdict + Constructive Output) doesn't see the structural connection back to purpose-fitness.
- *Evidence:* Phase 3's existing constructive-output refinement note (lines 140-142) currently says *"A KILL must extract a seed — what can be learned from the failure that informs the next iteration?"* — operational requirement, no structural framing. Without Ancillary D (back-reference to the new Phase 0 note), practitioners reading Phase 3 cold only see the requirement; they don't see that the seed-extraction IS the structural test of severity. This is a real integration gap.
- *Result:* **PARTIAL.** Single-locus is sufficient IF Ancillary D is adopted alongside the main edit. PROSECUTION-DEFENSE COLLISION REQUIRES PROMOTING D FROM COULD TO RECOMMENDED.

**Frame-premise prosecution aggregate:** 2 PASS + 1 PARTIAL (with concrete remediation via promoting Ancillary D).

---

## Phase 1 — Fitness Landscape

### Viable region

Candidates passing CRITICAL dimensions D1, D2, D3, D4, D7, D8, D10 with STRONG/MEDIUM and HIGH dimensions D5, D6, D9 with at least MEDIUM. The integrated refinement-note draft + Ancillary A + B fall here.

### Dead region

A candidate whose text mis-encodes a commitment (D1 FAIL), violates discipline-individual language (D4 FAIL), or has dangling cross-references (D10 FAIL).

### Boundary region

- **Ancillary D status.** The draft puts D in DEFERRED/COULD. Frame-premise prosecution premise (c) PARTIAL suggests D should be promoted. Boundary verdict.
- **Length at upper-end of target.** D6 PARTIAL — ~24 lines is acceptable but at the top of the target. Boundary verdict.

### Unexplored region

- Whether a practitioner using the encoded note on a real candidate would converge on the same verdict as a practitioner not using it. Empirical validation question, out of scope for this critique pass.

---

## Phase 2 — Adversarial Evaluation per Candidate

### Candidate A — The assembled refinement-note text (~24 lines)

**Prosecution:**

- *Dimension-level:* Block 4 (unification + constructive-output cross-ref) is dense. Three commitments (#6 + #8 + Phase 3 cross-ref) compressed into one paragraph. A practitioner reading this fast may lose either the unification or the constructive-output structural framing.
- *User-perspective objection:* The user asked for the principle to be encoded "more smart" — does the draft deliver clarity or compressed-density? The text has a discipline-individual style that requires careful reading.
- *Specific failure-case:* A practitioner reads the note, applies the 1-question test, identifies a kill-worthy defect, and can't extract a seed. Does the note tell them what to do? Block 4 says *"Inability to extract a seed signals the KILL is unsupported — re-examine before rendering."* GOOD — there's an operational fallback.
- *Specification-gap probe:* Does the text specify HOW to identify the candidate's purpose? It does not. Purpose is implicitly assumed from candidate framing. This is consistent with the prior finding's scoping (purpose-clarity is /sense-making's job; defer-with-direction handles ambiguous cases).

**Defense:**

- *Structural strength:* The text encodes 8 of 9 commitments faithfully; #7 is explicitly out-of-scope. Each paragraph has a clear role (semantics / test / unification / fallback).
- *Readability:* Each paragraph reads as one focused idea. The 1-question test (Block 2) is verbatim what the prior finding committed.
- *External grounding:* The cross-references to #2, #3, and Verdicts → Constructive requirement anchor the text in the existing spec. The structure follows IFP 4a's precedent.

**Collision:**

The prosecution's dim-level "dense Block 4" concern is REAL but addressable: not by lengthening (which would push over the length target) but by ACCEPTING the density given Block 4 is doing structural integration work and practitioners reading Phase 0 in order will have absorbed Blocks 1-2 before reaching Block 4. The compression is appropriate to the content. The specification-gap on purpose-identification is correctly scoped (defer-with-direction handles it).

**Dimension scores:**

| Dim | Score | Note |
|---|---|---|
| D1 Commitment-encoding completeness | PASS | All 8 in-scope encoded; #7 correctly excluded. |
| D2 Spec-coherence | PASS | Cross-refs to #2, #3, Verdicts → Constructive requirement resolve. Insertion composes with existing Phase 0. |
| D3 Practitioner-readability | PASS | Each paragraph has one focused role; the 1-question test is the operational core. |
| D4 Discipline-individual compliance | PASS | Only `/sense-making` named (allowed); no runner artifacts; no protocol-template fields; no sister-discipline-internal sections. |
| D5 Tone-match | PASS | Matches IFP 4a's voice: technical but accessible; structural commitments rendered as practitioner-readable prose. |
| D6 Length | PARTIAL | ~24 lines at upper-end of ~15-20 target; content-density justifies it; IFP 4a is ~22 line-equivalents. Acceptable but at the top. |
| D7 Folding fidelity | PASS | Block 3 fold preserves REFINE/KILL boundary in Block 2's final sentence; closing-cross-refs fold preserves all cross-references inline. |
| D8 Frame-premise robustness | PARTIAL | Premises (a) and (b) PASS; premise (c) PARTIAL — single-locus is sufficient IF Ancillary D is promoted from COULD. |
| D9 Self-reference mitigation | PASS | Structural decisions anchored to IFP 4a; Project-specific risk; #2/#3 entries; existing constructive-output note. |
| D10 Cross-reference firmness | PASS | All cross-references point to text that exists in current spec (verified): §4 #2 Rubber-Stamping (lines 324-330); §4 #3 Nitpicking (lines 332-338); Verdicts → Constructive requirement (lines 140-142). |

**Verdict:** **SURVIVE with REFINE on D8(c).** Promote Ancillary D from COULD to RECOMMENDED so the structural integration is complete at adoption time.

**Constructive output:** the practitioner-applicable form of the principle is operationally encoded; the structural framing is complete IFF Ancillary D is also adopted.

---

### Candidate B — Ancillary A (back-reference at §4 #2 Rubber-Stamping)

**Prosecution:** Text is slightly long ("For the underlying severity-calibration that makes prosecution-strength meaningful, see Phase 0 / Dimension Construction → Purpose-fitness test refinement note (Rubber-Stamping is the opposite-direction violation of #3 Nitpicking under the same principle).") — but length matches existing cross-reference style at line 330.

**Defense:** The "opposite-direction violation of #3" framing is the structural addition. It surfaces the unification at the §4 entry too, not just at Phase 0. Cross-references to existing entries (#3) resolve.

**Collision:** Length is consistent with existing precedent (Multi-axis prosecution depth check cross-reference at line 330). The structural framing is the load-bearing addition.

**Dimension scores:** All PASS (D1 — encodes commitment #8 + cross-ref; D2, D3, D4, D5, D7, D8, D10 PASS; D6 N/A for ancillary; D9 PASS).

**Verdict: SURVIVE.**

---

### Candidate C — Ancillary B (back-reference at §4 #3 Nitpicking)

**Prosecution:** "Nitpicking-creep at construction time" phrase — is this too informal? Does it borrow user-conversational language inappropriately?

**Defense:** The phrase "nitpicking-creep" is the original concern that motivated the whole work (it's in the inquiry's source input). Naming it in the spec creates a connection to the practical concern; it's not informal noise. Length parallel to Ancillary A.

**Collision:** Acceptable use of conversational-traceable terminology; the phrase has structural meaning ("creep" = scope-expansion of the over-killing failure mode).

**Dimension scores:** All PASS.

**Verdict: SURVIVE.**

---

### Candidate D — Folding decision: Block 3 → Block 2

**Prosecution:** Folding REFINE/KILL boundary into the final sentence of the 1-question test paragraph reduces visibility. Practitioners scanning the note may not register the boundary distinction.

**Defense:** The folded form ("Within kill-worthy, REFINE when the candidate's existing frame can absorb the fix; KILL when the fix requires replacing the candidate's frame entirely.") is one clear sentence at the END of Block 2. The boundary is preserved AT THE MOMENT IT'S NEEDED — right after the practitioner concludes "kill-worthy" from the YES/NO test. The structural placement is operationally appropriate.

**Collision:** Folding is structurally cleaner; no fidelity loss.

**Verdict: SURVIVE.**

---

### Candidate E — Folding decision: Closing cross-refs → Block 4

**Prosecution:** Block 4 now does triple duty (unification + structural-test framing + cross-refs to 3 entries). Dense.

**Defense:** The three contents are mutually reinforcing: the unification IS prevented by the same test that constructive-output verifies, both apply to #2 and #3. The dense paragraph reads as a structural integration paragraph, not as a list of disconnected commitments.

**Collision:** Acceptable density given content-cohesion.

**Verdict: SURVIVE with mild caveat** — if the dense paragraph proves operationally unreadable after adoption, split into two paragraphs (one for unification, one for constructive-output cross-ref). Monitor.

---

### Candidate F — Ancillary C (COULD): Adversarial structure cross-reference

**Prosecution:** Adds a cross-reference to an existing sentence; redundant given the unification is already encoded in Block 4 and back-referenced from #2/#3.

**Defense:** Surfaces unity inline at the Adversarial structure paragraph, where practitioners reading the Adversarial structure overview would otherwise miss the unification.

**Collision:** Soft improvement; not load-bearing. Acceptable as COULD.

**Verdict: SURVIVE as DEFERRED COULD.**

---

### Candidate G — Ancillary D (COULD → RECOMMENDED per frame-premise prosecution): Phase 3 constructive-output back-reference

**Prosecution:** Adds spec lines; reader can navigate from Phase 0 to Phase 3 even without the back-reference.

**Defense:** Per the frame-premise prosecution premise (c) PARTIAL, this back-reference closes a real integration gap. Practitioners reading Phase 3 cold need to see that the constructive-output is the structural test of severity at Phase 0. WITHOUT D, practitioners may treat constructive-output as an isolated requirement.

**Collision:** D is structurally more than nice-to-have; promoting it from COULD to RECOMMENDED-MUST closes the only PARTIAL on the frame-premise prosecution.

**Verdict: SURVIVE with REFINE — promote from COULD to RECOMMENDED.**

**Constructive output:** the finding should present D as RECOMMENDED rather than purely COULD, with the rationale that single-locus structural integration is incomplete without it.

---

### Candidate H — Innovation's discipline-individual audit (PASS)

**Prosecution:** Innovation's audit was conducted by Innovation; critique should re-test. Specifically: is `/sense-making` naming structurally acceptable?

**Defense:** Per `docs/discipline_edit_tiers.md`: *"a refinement note added to `/td-critique` should not name `_branch.md` (a runner artifact), `## Synthesis Trigger` (a runner-template feature), `refines:`/`corrects:`/`supersedes:` (CONCLUDE-template frontmatter), or `Frame-exit Completeness perspective` (a `/sense-making` spec-internal name). Express the trigger condition generically..."* The examples of forbidden coupling are INTERNAL ARTIFACTS, not discipline names. The principle's "Where coupling IS appropriate" note also confirms: "Coupling is a defect only when it appears in a single-spec proposal that didn't need it." The defer-with-direction operationally NEEDS to point at a discipline; the generic alternative ("upstream purpose-stabilization") loses operational clarity. The example phrasing in the draft (`e.g., /sense-making in the runner being used`) is BOTH operationally concrete AND honest about runner-variability.

**Collision:** `/sense-making` naming PASSES the discipline-individual principle.

**Verdict: SURVIVE.**

---

## Phase 3 — Verdicts with Constructive Output

| Candidate | Verdict | Strength | Constructive Output |
|---|---|---|---|
| A Assembled refinement-note | **SURVIVE with REFINE on D8(c)** | STRONG | Promote Ancillary D from COULD to RECOMMENDED for complete structural integration. |
| B Ancillary A (#2 back-reference) | SURVIVE | STRONG | Apply as drafted. |
| C Ancillary B (#3 back-reference) | SURVIVE | STRONG | Apply as drafted. |
| D Folding Block 3 → Block 2 | SURVIVE | STRONG | Folded form preserved fidelity. |
| E Folding closing-cross-refs → Block 4 | SURVIVE with mild caveat | STRONG | Monitor practitioner reception; split if operationally unreadable. |
| F Ancillary C (COULD) | SURVIVE as DEFERRED COULD | MEDIUM | User-discretion; structurally optional. |
| G Ancillary D (COULD → RECOMMENDED) | **SURVIVE with REFINE** | STRONG | Promote from COULD to RECOMMENDED per frame-premise premise (c) PARTIAL. |
| H Discipline-individual audit (`/sense-making` naming) | SURVIVE | STRONG | `/sense-making` naming is structurally acceptable. |

**Summary:** 6 SURVIVE clean + 2 SURVIVE with REFINE; 0 KILL.

### #3 Nitpicking self-check

Did this critique threaten any KILL on issues that don't actually block the candidates from doing their job? **NO.** The two REFINEs are on integration completeness (Ancillary D promotion) and operational monitoring (folded Block 4 readability), not on purpose-fitness failures.

### #8 Axis Absence self-check

Did the dimension list miss any axis where actual failure would ride?
- (i) Upstream-inheritance: sensemaking's structural specification mapped to dimensions. ✓
- (ii) Narrowest-reading: discipline-individual principle interpreted via the example list of FORBIDDEN coupling (not via overgeneralization to "no naming of any kind"). ✓
- (iii) Self-defeating-wording: D3 (readability) doesn't require performing what it tests. ✓

**No axis absence.**

---

## Phase 3.5 — Assembly Check

The 6 clean-SURVIVE candidates + 2 REFINEs compose into the **final structural design:**

1. **Apply** the assembled refinement-note text (Tier 3 from Innovation) at Phase 0 step 4 of `td-critique.md`, inserted after the IFP 4a Frame-premise test refinement note and before the Phase 0 closing paragraphs.
2. **Apply** Ancillary A (back-reference at §4 #2 Rubber-Stamping).
3. **Apply** Ancillary B (back-reference at §4 #3 Nitpicking).
4. **Apply** Ancillary D (back-reference at Phase 3 constructive-output refinement note) — **PROMOTED from COULD to RECOMMENDED** per frame-premise prosecution premise (c).
5. **Optional** Ancillary C (Adversarial structure cross-reference) — DEFERRED as user-discretion COULD.
6. **No edit** to §6 Summary table (verified).
7. **No edit** to `SKILL.md` (verified).

**Assembly verdict: SURVIVE.** The refined assembly resolves the one PARTIAL on the frame-premise prosecution.

---

## Phase 4 — Coverage + Convergence Assessment

### Coverage map

| Region | Coverage | Notes |
|---|---|---|
| Viable | EXPLORED | 6 SURVIVE clean + 2 SURVIVE with REFINE (Ancillary D promotion + Block 4 monitoring). |
| Dead | EXPLORED (empirically empty) | No candidate fell into dead region. |
| Boundary | EXPLORED + RESOLVED | Ancillary D status resolved (PROMOTE); length at upper-end (acceptable). |
| Unexplored | NAMED (out of scope) | Empirical validation post-adoption — flagged for future inquiry. |

### Convergence criteria

- Clean SURVIVE exists: **YES** — 6 candidates SURVIVE on all critical dimensions.
- Two consecutive iterations have not produced candidates in new regions: **N/A** — iteration 1; convergence on iteration 1 is acceptable for structural-layer encoding.
- No unexplored regions remain that are topologically likely to contain viable candidates: **YES** — the assembly check covers the structural integration.
- Accumulator shows decreasing rate of new information: **YES** — all candidates evaluated; no new ones generated mid-critique.

### Signal: **TERMINATE with ranked survivors**

The structural-layer question converges. The deliverable is the refined assembly (refinement-note text + Ancillary A + B + Ancillary D promoted to RECOMMENDED + optional C).

---

## Convergence Telemetry

- **Dimension coverage:** 10/10 applied; 6 CRITICAL + 3 HIGH + 1 (D6) at HIGH.
- **Adversarial strength:** STRONG — multi-axis prosecution per candidate; frame-premise prosecution on 3 inherited-frame premises.
- **Landscape stability:** CHANGED — the Ancillary D promotion from COULD to RECOMMENDED resolves the only PARTIAL.
- **Clean SURVIVE exists:** YES.
- **Failure modes observed:**
  - #1 Wrong Dimensions: NO.
  - #2 Rubber-Stamping: NO (REFINEs produced for real structural concerns).
  - #3 Nitpicking: NO (no KILL on non-purpose-blocking defects).
  - #4 Dimension Blindness: NO.
  - #5 False Convergence: NO.
  - #6 Evaluation Drift: NO.
  - #7 Self-Reference Collapse: NO — mitigated via external precedents (IFP 4a; Project-specific risk; `docs/discipline_edit_tiers.md`).
  - #8 Axis Absence: NO (self-check passed).

### Overall: **PROCEED**

The refined assembly is ready to apply with one MUST item (Ancillary D promotion) added.
