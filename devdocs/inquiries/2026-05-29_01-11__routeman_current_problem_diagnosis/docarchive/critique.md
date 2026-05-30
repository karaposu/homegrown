## User Input

`devdocs/inquiries/2026-05-29_01-11__routeman_current_problem_diagnosis/_branch.md` (problem context: sensemaking.md; candidates: the 6 root-cause framings in innovation.md; priors + workspace in context). Evaluate which framing(s) survive as THE diagnosis of routeman's current problem.

---

# Structural Critique — Adjudicating Routeman's Root-Cause Diagnosis

## (a) Dimensions (Phase 0)

Extracted from the `_branch.md` goal + sensemaking. The "candidates" are competing diagnoses; the dimensions are what makes a *diagnosis* good.

| # | Dimension | What it asks | Weight | Extracted from |
|---|---|---|---|---|
| D1 | **Evidential grounding** | Grounded in quotable spec text + canon + empirical record, not assertion? | **CRITICAL** | goal: "grounded in actual spec text + design-history evidence" |
| D2 | **Root-depth / explanatory power** | Identifies the ROOT (explains the symptoms AND the persistence), not a surface symptom? | **CRITICAL** | goal: "precise root-cause, not surface symptoms; distinguish THE core problem" |
| D5 | **Coverage of OT2** | Actually explains why routeman "isn't an individual discipline runnable anywhere"? | **CRITICAL** | the user's explicit observation target |
| D3 | **Actionability (aims the fix)** | Sharp enough to aim a follow-on fix? | HIGH | goal: "sharp enough to aim that fix" |
| D4 | **Non-over-reach / parsimony** | Claims only what evidence supports; not over-theorized? | HIGH | goal negative-spec: "many minor nits"; Elegance default dim |
| D7 | **Disciplines-as-individuals fit** *(project-specific risk axis)* | Respects the project's own disciplines-vs-runners separation? | HIGH | `worker_loop_logic.md`; canon line 109; project memory |
| D6 | **Re-test fidelity to 20-35** | Handles the inherited claim correctly (neither parrot nor sycophantic overturn)? | MED-HIGH | Synthesis Trigger; negative-spec "accepting 20-35 uncritically" |

**Stakes:** medium-high (the diagnosis will aim a rewrite of a *core* discipline; a wrong root mis-aims the fix). Burden-of-proof for the framing promoted as THE root = **guilty-until-proven** (defense must show clear viability).

*Dimension-blindness guard:* D5 (OT2) and D7 (project axis) are the dimensions a naive critique would omit; both are included.

## (b) Fitness Landscape (Phase 1)

- **Viable region:** high D1 + D2 + D5, with adequate D3/D4/D7 — a grounded framing that reaches the root, explains OT2, aims a fix, and respects the project's separation principle without over-reaching.
- **Dead region:** fails any CRITICAL — ungrounded (D1), surface-only (D2), or doesn't explain OT2 (D5).
- **Boundary region:** strong core but over-reaches (low D4) OR thin on actionability (low D3) OR is a true-but-shallow sub-claim.

## (c) Candidate Verdicts (Phase 2 → Phase 3)

### F1 — Localized text defect — **REFINE → absorbed as SYMPTOM layer**
- **Prosecution:** Surface symptom, not root (fails D2). Names *which* passages are loop-bound but not *why* they exist or *why* the confusion regenerates — a fix editing only those 3 passages wouldn't prevent recurrence. Partial on D5.
- **Defense:** Strongly grounded (D1 — verbatim §1.2/§1.4/§1.5) and highly actionable (D3). It is *true*.
- **Collision:** TRUE but SHALLOW. Loses on D2 (root-depth) to F2. Survives as a correct sub-claim, not as the root.
- **Verdict: REFINE** — reposition as the surface manifestation of F2. *Constructive:* keep the verbatim passages as the diagnosis's concrete anchor.

### F2 — Identity/composition category error — **SURVIVE (the root)**
- **Prosecution (hardest case against):** (i) *Over-reach* (D4) — "category error / composition-in-identity" may be an imported software-architecture frame foisted on a markdown spec. (ii) *Self-reference* (failure mode #7) — am I inventing a fancy frame using discipline-vocabulary? (iii) "Isn't this just F1 reworded?"
- **Defense:** (i) NOT imported — grounded in the project's OWN canon: `worker_loop_logic.md` ("disciplines do the thinking; the runner does the plumbing… the runner doesn't compress or short-circuit the disciplines") + canon line 109 ("runners turn them from a list into a system"). "Composition belongs to runners, not to discipline identity" is the *project's* principle. (ii) External grounding defeats self-reference: the sense-making CONTRAST is empirical (sense-making's identity sections carry zero loop-role; routeman's §1.2/§1.5 do — anyone can verify), and the §1.1-vs-§1.2 inconsistency is checkable without any discipline vocabulary. (iii) F2 *explains* F1 (why those passages exist), explains the *persistence* (a category error is invisible to reading-level corrections), and explains OT2 (routeman isn't "individual" precisely because its identity is defined by its caller/composition).
- **Collision:** The over-reach objection is the real test — and it fails, because (a) F2 rests on the project's own separation principle, not an external import; (b) F2 makes a falsifiable, scoped claim (these specific passages; this specific contrast); (c) the **F5-residue sharpening** keeps F2 precise — the boundary *role* is legitimate; only encoding it as an identity *precondition* is the defect. With that boundary, F2 does not over-reach. Strong on D1/D2/D5/D7; adequate D3/D4.
- **Verdict: SURVIVE.** *Caveat (must carry):* retain the role-OK / precondition-BAD boundary, or D4 over-reach risk returns.

### F3 — Process / non-propagation defect — **SURVIVE (the persistence layer)**
- **Prosecution:** (i) *Scope* — is this routeman's problem or a project-wide process problem (out of scope)? (ii) Lower actionability (D3 — process change exceeds this diagnostic remit). (iii) "Blaming process" to dodge committing to the spec defect.
- **Defense:** Empirically grounded (D1 — 4 inquiries, spec unchanged, COULD-3 unapplied: documented). It UNIQUELY explains the persistence (why a cheap-to-fix defect survived four inquiries) — neither F1 nor F2 explains that. Different layer, not a competitor.
- **Collision:** Scope objection resolves — F3 is the persistence layer of the SAME problem; for "what is the *current* problem," explaining why it's *still here* is part of the diagnosis. The "dodge" objection fails: F3 complements F2 (the unpropagated thing IS the F2 fix), not replaces it.
- **Verdict: SURVIVE** as the second layer. *Caveat:* frame as "why the F2 defect persists," routeman-as-instance, with the project-wide generalization FLAGGED not asserted (D4 guard).

### F4 — Read-time guard absence — **KILL**
- **Prosecution:** Band-aid — fails D2 (not a root; presupposes the spec stays broken). If F2's fix lands, F4 is moot (D4). Low value/effort.
- **Defense:** A genuine fallback IF the spec is frozen.
- **Collision:** Prosecution wins — a contingency, not a root.
- **Verdict: KILL.** *Seed extracted:* "if the spec genuinely cannot be edited, a read-time canon-cross-check is the fallback mitigation." (Preserved, not lost.)

### F5 — Contrarian: no defect / standalone-reading is the error — **KILL as root; residue absorbed**
- **Prosecution:** Fails D1/D2 on three independent grounds: (i) the §1.1-vs-§1.2 internal inconsistency holds WITHOUT canon, so "canon over-applied" can't rescue the spec; (ii) the empirical 4-inquiry oscillation is evidence of a live problem (no problem → why does it recur under distinct promptings?); (iii) 20-35 adjudicated standalone at HIGH confidence with cross-discipline confirmation, and F5 brings no new evidence to overturn it.
- **Defense (steelman, anti-nitpicking):** The taxonomy DOES place routeman as Boundary; the boundary role is real; the standalone push *could* be over-extended into denying routeman is ever a boundary discipline.
- **Collision:** The valid defense core (boundary role is real) does NOT rescue "there's no defect" — because the defect was never "routeman is a boundary discipline"; it's "encoding that role as an identity precondition." F5's defense CONVERGES into F2's boundary condition.
- **Verdict: KILL as root; residue → F2's boundary** (role-OK/precondition-BAD). *Seed:* "the fix must NOT deny routeman's boundary role — it must relocate the role from identity-precondition to runner-owned context note." (Constrains the eventual fix.)

### F6 — Trajectory liability — **REFINE → reposition as stakes-modifier**
- **Prosecution:** Not a root (D2 — weights significance, doesn't diagnose); extrapolation-only (D1 moderate; speculative).
- **Defense:** Correctly raises stakes (argues against "do nothing"); grounded in the project's documented end-goal (multi-head + standalone reuse).
- **Collision:** Not competing to be the root; survives as a stakes note.
- **Verdict: REFINE** — reposition as a significance/urgency note feeding the finding's framing, not as a diagnosis.

## Phase 3.5 — Assembly Check

Evaluate the **layered assembly** (F2 root + F1 symptom + F3 persistence + F5-residue boundary + F6 stakes) as its own candidate:
- **Prosecution:** Five layers — too complex? Does layering dilute the answer to "what is the problem"?
- **Defense:** It is ONE problem (the category error) described at the right granularities, not five problems. It directly answers OT1 (broad) + OT2 (specific). Leading with the one-sentence root (F2) and presenting F1/F3/F5/F6 as its facets keeps it crisp.
- **Collision:** Survives. The only risk is presentation-complexity, mitigated by leading with the root sentence.
- **Verdict: SURVIVE — the assembly IS the diagnosis** (the clean SURVIVE).

**Inherited-claim re-test confirmation (D6 — Synthesis obligation):**
- **20-35** — AFFIRM "routeman should be standalone/domain-agnostic"; **PARTIALLY OVERTURN** "spec already reads canon-consistent; errors were reader-only." F2 shows the spec carries the defect, so 20-35's reader-only location is *incomplete*. HIGH confidence. (Not sycophantic — affirms the user-favorable half on evidence; overturns the other half on evidence.)
- **15-48** — AFFIRM (two-axis / not-bound-to-`inquiries/`); CONSISTENT with F2, which explains *why* the confusion arose despite 15-48 being correct (the identity sections undercut Axis-2 source-flexibility).
- **17-30** — AFFIRM (read-policy); peripheral; no conflict.
- **19-00** — its wrong-tool verdict stays overturned (by 20-35); F2 RE-EXPLAINS 19-00's error as a downstream symptom of the category error (the agent read the loop-bound identity literally).
- **23-14-39 (founding design)** — RE-TEST RESULT (non-obvious): this is the ORIGIN of the category error — routeman inherited "boundary / cycle-consumer" identity from the `/navigation` rename. Not wrong in its lineage context, but it is where loop-role-as-identity entered the spec.

## (d) Coverage Map (Phase 4)

- **Evaluated:** all 6 framings + the assembly; dimensions span evidential / root-depth / OT2-coverage / actionability / parsimony / disciplines-as-individuals / re-test-fidelity.
- **Viable region populated:** F2 (root) + F3 (persistence) + assembly. **Dead:** F4, F5-as-root. **Boundary→repositioned:** F1 (symptom), F6 (stakes).
- **Unexplored:** none topologically likely to hold a better root — the 7-mechanism innovation + this adversarial pass converge; the contrarian (F5) was generated and killed-with-residue, so the "no-defect" region is mapped, not skipped.

## (e) Signal

**TERMINATE** with a clean SURVIVE. Ranked survivor: **the F2-rooted layered diagnosis.**

> **Routeman's current problem (ranked diagnosis):** Its spec commits a **category error** — it bakes its typical loop-role (composition-layer / caller context) into the **discipline-identity** layer (§1.2 "consumes the artifacts of a completed cognitive cycle / without prior cognitive work… nothing to enumerate"; §1.4 cycle-output-only `current state`; §1.5 "operates between cognitive cycles"), contradicting the project's own disciplines-vs-runners separation and the generic §1.1. The boundary *role* is legitimate; encoding it as an identity *precondition* is the defect (F5-sharpened). This is why routeman "isn't an individual discipline runnable anywhere" (OT2). It **persists** because four inquiries corrected the *reading* but none edited the *spec* (F3). Its **stakes** rise as the project scales to multi-head / standalone reuse (F6). Origin: inherited from the `/navigation` rename (23-14-39).

## (f) Convergence Telemetry

- **Dimension coverage:** 7 dimensions incl. project-specific (D7) + OT2 (D5). No critical dimension missing.
- **Adversarial strength:** STRONG — F4 killed; F5 killed-as-root; F1/F6 refined-not-rubber-stamped; F2/F3 survived genuine prosecution (over-reach + scope objections tested, not waved through).
- **Landscape stability:** STABLE — the assembly matches innovation's convergence (4 mechanisms → F2); critique added the boundary-sharpening + persistence-confirmation without moving the root.
- **Clean SURVIVE exists:** YES — the F2-rooted layered diagnosis, no critical-dimension caveat (D4 over-reach neutralized by the role-OK/precondition-BAD boundary).
- **Failure modes observed:** none. *Self-Reference Collapse explicitly guarded* — F2's grounding is the project's OWN canon + quotable spec text + empirical 4-inquiry record + sense-making contrast, not the critique discipline's vocabulary; the "does it help the user act?" test passes (it aims the fix precisely). Rubber-stamping/nitpicking avoided (mixed verdicts: 1 clean SURVIVE-assembly, 2 SURVIVE-layers, 2 REFINE, 2 KILL).
- **Overall: PROCEED** (→ TERMINATE the loop; the question is answered).
