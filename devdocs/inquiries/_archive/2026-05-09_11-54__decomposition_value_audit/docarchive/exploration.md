# Exploration — Decomposition value audit

## User Input

```
For each of the last 10 inquiries: tag decomposition's value (HIGH / MEDIUM /
LOW / NEGATIVE) with criteria. Don't pre-judge the verdict — that's
sense-making's job.
```

## Mode and Entry

- **Mode:** artifact (10 concrete decomposition.md files; 4 sampled sensemaking + innovation files for ground truth) + possibility (the value-tag criteria space).
- **Entry point:** signal-first; 10 named inquiries; targeted reads.

---

## 1. Territory Overview

The territory is 10 `decomposition.md` files across `devdocs/inquiries/2026-05-08_00-50__decompose_definite_gaps_from_corpus_evidence/` through `devdocs/inquiries/2026-05-08_19-53__discipline_corpus_tidying_application/`. I read all 10 decompositions in full plus 1 sensemaking and 3 innovations as ground-truth checks against the "did innovation consume the partition?" and "was the partition implicit in sensemaking?" questions.

**Up-front structural observation:** every decomposition I read followed the *same 7-step procedural shape* (Coupling Topology → Boundaries → Bottom-Up Validation → Question Tree → Interfaces → Dependency Order → Self-Evaluate) and produced a similar artifact: 3-6 pieces, a coupling map, an atom-to-piece mapping, an interface table, a dependency-order block, and a 7-dimension self-evaluation table. **All 10 inquiries produced "all 7 dimensions PASS, HIGH confidence" verdicts in the self-evaluation step.** This near-uniform PASS-rate is itself a signal worth examining.

**Second structural observation:** the recent inquiries this conversation produced (`17-23`, `18-56`, `19-53`) have decompositions whose pieces map *directly* to sense-making's stable model (SV5/SV6 already named the pieces). Innovation files I sampled (`00-50`, `06-30`, `19-53`) have components labeled to match decomposition's pieces 1:1 — so innovation IS consuming the partition; the question is whether decomposition produced the partition or merely formalized what sensemaking implied.

---

## 2. Value Criteria (defined; applied per-inquiry below)

For each decomposition output:

- **(a) Partition originality** — did D produce pieces that weren't in S's SV5/SV6 stable model? Or was the partition already implicit?
- **(b) Innovation consumption** — did I map its components 1:1 to D's pieces? Or did I produce coherent components regardless of whether D ran?
- **(c) Interface/dependency value** — was the interface map or dependency order load-bearing for innovation's structure? Or were pieces independent (Layer 0 only) and the interface map a formality?
- **(d) Self-evaluation as gate** — did the 7-dimension self-evaluation flag a problem that got addressed? Or perfunctory PASS-stamping?
- **(e) Determination-mechanism piece check (the bolted-on rule from `2026-05-08_00-50`)** — did it ever fire? Or is the check always "PASS, no piece needed"?

**Value tags:**

- **HIGH** — D produced original partition (a) AND I consumed it (b) AND interface/order was load-bearing (c). Substantial value.
- **MEDIUM** — D formalized a partition implicit in S (a-partial) AND I consumed it cleanly (b) AND/OR interface/order added structure (c). Real but redundant-with-S value.
- **LOW** — D restated S's partition (a-no) AND I would have produced the same components without D (b-yes-but-trivial). Ceremony value only.
- **NEGATIVE** — D introduced ceremony that slowed the loop OR misled innovation. None observed.

---

## 3. Per-Inquiry Value Tags

### 3.1 `2026-05-08_00-50__decompose_definite_gaps_from_corpus_evidence`

- **D pieces:** 4 (R-1 rule + xref / F-1 filter / C-1 caveat / V-1 verification)
- **(a)** S's SV6 already named: rule, placement, cross-reference text, caveat handling, verification approach, rejection rationale. SV5's "Constrained Understanding" explicitly said *"Innovation's job: generate concrete wording for the rule + the cross-reference. Critique's job: verify against for-sure criterion..."* — that's the partition stated by S. **Original partition: NO. Implicit in SV6: YES.**
- **(b)** Innovation has Component R-1a, R-1b, F-1, C-1, V-1 — direct 1:1 mapping. Consumed cleanly.
- **(c)** Interfaces are read-only flows from existing decompose.md structure + corpus chain findings. Pieces are at Layer 0 (R-1, F-1, C-1 independent) and Layer 1 (V-1 synthesizes). Dependency order was light-touch.
- **(d)** All 7 self-eval dimensions PASS. No problems flagged.
- **(e)** Determination-mechanism check: PASS (no piece needed). Doesn't fire.
- **Value tag: LOW-MEDIUM.** D formalized S's already-implicit partition; innovation could have consumed S's SV6 directly. The 4-piece R/F/C/V shape is the corpus's dominant rule-extraction template.

### 3.2 `2026-05-08_03-00__innovate_definite_gaps_from_corpus_evidence`

- **D pieces:** 5 (A-1 Rule A / B-1 Rule B / F-1 filter / V-1 verification / U-1 user-hypothesis address)
- **(a)** S likely produced rule structures + filter + verification implicitly. **U-1** (direct address of user's two hypotheses) is structurally interesting — it's a piece that surfaces from D's task-shape, not from S's content. Marginal partition originality.
- **(b)** Innovation likely consumed pieces directly (similar to 00-50 pattern).
- **(c)** Interfaces show U-1 as Layer-1 synthesis — that ordering is mildly load-bearing.
- **(d)** PASS across all 7.
- **(e)** Determination-mechanism check: PASS.
- **Value tag: MEDIUM.** U-1 piece adds marginal structure beyond S; otherwise template.

### 3.3 `2026-05-08_05-00__td_critique_definite_gaps_from_corpus_evidence`

- **D pieces:** 5 (A-1 / B-1 / F-1 / V-1 / SR-1 Self-Reference Collapse defense)
- **(a)** SR-1 is interesting — it's a methodology-level piece (the self-reference defense). Probably surfaced in S's perspectives but D explicitly partitioned it. Marginal originality.
- **(b)** Likely consumed.
- **(c)** SR-1 → All flow noted in interfaces — a methodology defense that applies across pieces. That's structurally useful.
- **(d)** PASS across all 7.
- **(e)** PASS.
- **Value tag: MEDIUM.** SR-1 piece earns its place; otherwise template.

### 3.4 `2026-05-08_06-30__lightweight_discipline_level_disambiguation`

- **D pieces:** 4 (C-1 convention / A-1 Component A preservation / B-1 Component B rejection / V-1 verification)
- **(a)** I read this innovation. Innovation's candidate names (C-1, A-1, B-1, V-1) match D's pieces exactly. Looking at the content — the convention wording, Component A preservation, Component B rejection rationale, and verification table — these were ALL implicit in any sensible read of the inquiry's question + prior finding. **Original partition: NO.**
- **(b)** Innovation directly consumed; mapping is identity.
- **(c)** Interfaces are read-only flows from prior 22-10 finding. Pieces all at Layer 0 except V-1 synthesizing. Light-touch.
- **(d)** PASS.
- **(e)** PASS.
- **Value tag: LOW.** Small inquiry; partition obvious from question + prior finding; D was ceremony.

### 3.5 `2026-05-08_07-15__generic_discipline_level_nonambiguity_convention`

- **D pieces:** 5 (E1 Edit 1 / E2 Edit 2 / S-1 SUPERSEDES update / C-1 composition+verification / B-1 Component B rejection)
- **(a)** This is a refinement of 06-30. Pieces (Edit 1 / Edit 2 / SUPERSEDES / composition / B rejection) are obvious from the inquiry's task. **Original partition: NO.**
- **(b)** Likely consumed.
- **(c)** Interface table shows E2 → E1 (cross-reference dependency); S-1 is procedural. Mild structure.
- **(d)** PASS.
- **(e)** PASS.
- **Value tag: LOW.** Same shape as 06-30; partition obvious.

### 3.6 `2026-05-08_08-15__loop_diagnose__narrow_scope_in_disambiguation_finding`

- **D pieces:** 5 (H-1 hypotheses / W-1 maintenance candidates W1+W2+WX / W-2 procedural items W7+W8 / CL-1 CONCLUDE non-implication / CC-1 cross-chain pattern observations)
- **(a)** This is a LOOP_DIAGNOSE inquiry — its shape includes a hypothesis cascade (A→C→B→D, with E as parallel reinforcement) that D made explicit. The cascade structure was implicit in S's hypothesis enumeration. CC-1 (cross-chain pattern observations) is a piece that wouldn't necessarily be in a non-LOOP_DIAGNOSE S — but for LOOP_DIAGNOSE inquiries, this kind of piece is expected. **Marginal partition originality.**
- **(b)** Likely consumed (Innovation likely produced W1 / W2 / WX / W7 / W8 outputs matching D's pieces).
- **(c)** Dependency order is structurally meaningful: H-1 → W-1 → W-2. Cascade ordering.
- **(d)** PASS.
- **(e)** PASS.
- **Value tag: MEDIUM.** Hypothesis cascade + cross-chain piece are real structural additions. LOOP_DIAGNOSE inquiry shape likely benefits more from D than methodological inquiries.

### 3.7 `2026-05-08_09-00__branch_framing_vs_sensemaking_corrective_surface`

- **D pieces:** 5 (E1 Edit 1 / E2 Edit 2 reaffirmation / C-1 composition rationale / D-1 prior-finding disposition update / P-1 /MVL propagation)
- **(a)** Mixed: E1 + E2 are content; D-1 is procedural (REFINES not SUPERSEDES); P-1 is procedural (propagation question). The procedural pieces (D-1, P-1) are interesting — they're partition pieces that DO add structure beyond what S would have stated as content. **Marginal originality on procedural pieces.**
- **(b)** Likely consumed.
- **(c)** Light-touch interfaces.
- **(d)** PASS.
- **(e)** PASS.
- **Value tag: MEDIUM.** D-1 + P-1 procedural pieces earn marginal value.

### 3.8 `2026-05-08_17-23__discipline_spec_bloat_reasons`

- **D pieces:** 3 (Q1 Pattern 1 / Q2 Pattern 2 / Q3 Pattern 3 — per-pattern verdicts)
- **(a)** S's SV6 stabilized model named exactly three patterns with per-pattern verdicts. D's partition is identity-with-S. **Original partition: NO.**
- **(b)** Innovation consumed Q1, Q2, Q3 directly.
- **(c)** Interfaces are read-only (sensemaking principles → all 3 pieces). All pieces at Layer 0 (parallel-independent). Dependency order was a non-event.
- **(d)** PASS.
- **(e)** PASS.
- **Value tag: LOW.** Partition was S's verdict. D's role was reformat-and-validate.

### 3.9 `2026-05-08_18-56__discipline_corpus_emerging_pattern`

- **D pieces:** 3 (Q1 Step Refinement primitive / Q2 Discipline Output Contract / Q3 Verdict-line rollout)
- **(a)** S's SV6 named three deliverables: spec addendum, output contract, REFINES amendment. D collapsed REFINES amendment into CONCLUDE (not a piece) and produced 3. The collapse was D's contribution, otherwise the partition is from S. **Marginal originality (one piece-collapse decision).**
- **(b)** Innovation consumed Q1, Q2, Q3 directly.
- **(c)** Q2→Q3 strong flow (Q3 rollout depends on Q2 contract spec). That's actual dependency that D made explicit.
- **(d)** PASS.
- **(e)** PASS.
- **Value tag: LOW-MEDIUM.** Q2→Q3 dependency observation is real; otherwise template.

### 3.10 `2026-05-08_19-53__discipline_corpus_tidying_application`

- **D pieces:** 6 (Q1 spec addendum / Q2-Q6 per-discipline plans)
- **(a)** S's SV6 named three deliverables (spec addendum / per-discipline plans / REFINES amendment). D collapsed Q7 (REFINES amendment) into CONCLUDE and split per-discipline plans into 5 separate pieces. The 5-way split is D's contribution — explicit per-discipline visibility. **Marginal originality.**
- **(b)** Innovation directly consumed: Q1, Q2 (`/explore`), Q3 (`/sense-making`), Q4 (`/decompose`), Q5 (`/innovate`), Q6 (`/td-critique`) — clean 1:1.
- **(c)** Q1 → Q2-Q6 read-only terminology flow named. The 5 per-discipline plans are mutually parallel. Innovation's per-discipline visibility (each plan got a separate verdict in critique) is the realized payoff of the 5-way split.
- **(d)** PASS.
- **(e)** PASS.
- **Value tag: MEDIUM.** The 5-way per-discipline split + Q1→Q2-Q6 terminology flow earn structural value beyond S's SV6.

---

## 4. Cross-Inquiry Pattern Observations

### Pattern 1 — The R/F/C/V template dominates rule-extraction inquiries

5 of 10 inquiries (00-50, 03-00, 05-00, 06-30, 07-15) follow a near-identical "rule core + filter rejections + caveat + verification" 4-5-piece template. The template is the corpus's natural shape for "find for-sure-missing rules in a discipline spec from chain evidence" inquiries. **Decomposition is template-fitting, not discovery.**

### Pattern 2 — Self-evaluation is universal PASS-stamping

10 of 10 inquiries report "all 7 dimensions PASS, HIGH confidence." **The self-evaluation has never flagged a problem in this 10-inquiry sample.** This means one of:
- The decompositions are genuinely high-quality (possible)
- The self-evaluation is perfunctory and biased toward PASS (likely)
- The dimensions are too coarse to flag real problems (likely)

### Pattern 3 — Determination-mechanism piece check fires 0 / 10

The check (added to `decompose.md` after the `2026-05-08_00-50` inquiry) reports "PASS, no piece needed" in all 10 outputs since. Either:
- The rule is preventing the failure successfully (good, but invisible)
- The rule is over-narrow and rarely applies to typical inquiries (more likely given how rare runtime-determined load-bearing concepts are in inquiry partitions)

### Pattern 4 — Interface maps and dependency orders are mostly perfunctory

In 8 of 10 inquiries, the dependency order is "Layer 0: most pieces (parallel-independent), Layer 1: synthesis piece." The interfaces are read-only flows from sensemaking + prior findings. **The interface/order machinery rarely captures genuine cross-piece coupling** — most pieces are independent.

The two exceptions (08-15 hypothesis cascade; 19-53 Q1→Q2-Q6 flow) demonstrate where the machinery DOES earn value. But they're the minority.

### Pattern 5 — Innovation consumption is clean (1:1 mapping)

In all 3 sampled innovation files, components map 1:1 to D's pieces (R-1a / R-1b / F-1 / C-1 / V-1; or C-1 / A-1 / B-1 / V-1; or Q1 / Q2-Q6). **Innovation IS consuming D's partition.** But the partition was usually already in S's SV6 stable model — so what innovation consumed could equivalently have been read directly from S.

### Pattern 6 — Sensemaking SV5/SV6 increasingly produces explicit partitions

The recent inquiries this conversation produced have S's SV5 or SV6 sections explicitly naming pieces (e.g., 18-56 SV6: "**1. Step Refinement**... **2. Discipline Output Contract**..."). When S already names pieces, D's partitioning step is reformatting + validation, not discovery.

### Pattern 7 — Sample bias

8 of 10 inquiries are about thinking-discipline meta-design or methodology. The shape is unusually homogeneous. The 2 LOOP_DIAGNOSE-shaped inquiries (08-15) and the application inquiry (19-53) deviate from the template — and both score MEDIUM. **For non-meta-design inquiries, D might add more value.** But this can't be confirmed from the current sample.

### Pattern 8 — Recent decompose-spec tidying (visual marker; lift) hasn't fired in outputs yet

The application work in `2026-05-08_19-53` (and just-applied edits to `homegrown/decompose/references/decompose.md`) added the visual marker on the Determination-mechanism piece check + lifted the Assumptions-not-data check. The 10 audited decompositions were produced BEFORE the recent application. So the audit doesn't speak to whether the tidied spec produces different outputs. That requires future inquiries.

---

## 5. Distribution of Value Tags

| Tag | Count | Inquiries |
|---|---|---|
| HIGH | **0** | (none) |
| MEDIUM | 5 | 03-00, 05-00, 08-15, 09-00, 19-53 |
| LOW-MEDIUM | 2 | 00-50, 18-56 |
| LOW | 3 | 06-30, 07-15, 17-23 |
| NEGATIVE | 0 | (none) |

**No inquiry scored HIGH.** The best D produces in this sample is MEDIUM — formalization that earns marginal structure (cascade ordering; methodology-level piece; per-discipline split). The most common case is LOW-to-MEDIUM — D formalizes what S already named.

---

## 6. Honest Signals

### 6.1 Pro-decomposition arguments (where D earns its place)

- **Forcing function for explicit articulation.** Even when partitions are in S, D's 7-step process forces explicit coupling pairs, atom-to-piece mapping, interfaces, dependency order, self-evaluation. Sometimes catches sloppiness.
- **Standardized output shape.** Innovation can mechanically consume D's pieces. Without D, innovation would each time reconstruct.
- **Interface/dependency map IS load-bearing for some inquiry shapes.** 19-53's Q1→Q2-Q6 flow and 08-15's hypothesis cascade demonstrate genuine value.
- **Determination-mechanism piece check is preventive.** Even if it fires 0/10, the check might be preventing the failure that gave rise to it.
- **Pattern recognition.** The R/F/C/V template is itself a corpus contribution — D made it visible.

### 6.2 Anti-decomposition arguments (where D is ceremony)

- **Partition redundancy with S.** In 9/10 inquiries, the partition was in S's SV6. D reformats; doesn't discover.
- **Self-eval PASS-stamping.** 10/10 PASS rate means the self-eval is not a real gate.
- **Layer-0 / Layer-1 only orderings.** In 8/10 inquiries, dependency order is a non-event.
- **Interface map mostly read-only flows.** Real cross-piece coupling is rare.
- **Cost (~150-300 lines per inquiry).** The 7-step procedural ceremony is a substantial line-cost relative to its discovery value.
- **Determination-mechanism check fires 0/10.** Either rare-event-prevention (invisible value) or over-narrow rule.

### 6.3 The most honest reading

D's value is **formalization, not discovery**. For meta-design inquiries (the dominant shape in this corpus), the partition is in S already; D reformats it. For some inquiry shapes (LOOP_DIAGNOSE cascades; multi-piece application work with cross-piece dependencies), D adds structure that S wouldn't reach. For others (small refinement inquiries), D is ceremony.

Whether this is "earned" depends on what you weigh:
- Ceremony with audit value → keep D as a forcing function
- Ceremony without audit value (PASS-stamping) → D's role is suspect
- Standardization for innovation consumption → keep D as a glue layer
- Cost-of-redundancy with S → consider conditional D

---

## 7. Confidence Map

| Region | What's known | Confidence |
|---|---|---|
| 10 decompositions audited with per-inquiry value tags | Direct read | HIGH |
| Innovation consumes D's pieces 1:1 in sampled cases | 3 innovation files sampled | HIGH (for sample); MEDIUM (extrapolated to all 10) |
| S's SV6 typically produces partition implicit in pieces | 1 sensemaking sampled + 2 from this conversation | HIGH (for sample); MEDIUM (extrapolated) |
| All 10 self-evals PASS | Direct count | HIGH |
| Determination-mechanism check fires 0/10 | Direct count | HIGH |
| 4-piece R/F/C/V template dominates rule-extraction | 5/5 rule-extraction inquiries follow it | HIGH |
| Interface/dependency map is mostly perfunctory | 8/10 are Layer-0-only with read-only flows | HIGH |
| Decomposition's value is "formalization not discovery" | Pattern across the 10 | HIGH |
| Sample bias (mostly meta-design inquiries) | 8/10 are meta-design | HIGH |
| Verdict on D's pipeline place | NOT THIS PHASE'S JOB | DEFERRED to sensemaking |

---

## 8. Frontier State

**Stable.** Per-inquiry value tags are concrete; cross-inquiry patterns identified; honest signals on both sides articulated; sample bias acknowledged.

**Discovery rate:** declining. Late cycles confirmed earlier patterns (R/F/C/V template; PASS-stamping; Layer-0/1-only). No new structural surprises.

**Bounded gaps:** the verdict on whether to change D's pipeline place is DEFERRED to sensemaking. The audit produced data; the verdict is judgment.

---

## 9. Gaps and Recommendations for Sensemaking

### Five primary handoff seeds

1. **Acknowledge the formalization-not-discovery framing.** D's value in this corpus is mostly formalization of S's implicit partition. Sensemaking should test this against the strongest counter-reading.

2. **The PASS-stamping problem is real.** 10/10 self-evals PASS. Either decompositions are genuinely well-shaped, or the self-evaluation is a non-gate. Sensemaking should test whether the self-eval would catch a hypothetical bad partition.

3. **Inquiry-shape variance matters.** LOOP_DIAGNOSE cascades and multi-piece application inquiries score higher. Meta-design rule-extraction scores lower. Sensemaking should consider whether D should be conditional on inquiry shape.

4. **The interface map and dependency order are mostly perfunctory.** Sensemaking should consider whether these sub-steps earn their cost (they're ~30-50 lines per output).

5. **The R/F/C/V template is the corpus's natural rule-extraction shape.** If this template is universal, the corpus could ship a "rule-extraction protocol" that S consumes directly, possibly bypassing D's per-inquiry reformatting.

### Frontier observations (out of primary scope)

- **Sample bias to meta-design inquiries.** A future audit on a more diverse inquiry set (application, design, debugging, decision) would test whether D's value depends on inquiry shape.
- **The just-applied tidying of decompose.md** (visual marker; lift of Assumptions-not-data check) hasn't yet produced any decompositions to audit. A 30-day-out follow-up audit would show whether the tidied spec produces visibly different outputs.
- **Self-reference risk:** this inquiry's own decomposition step will be subject to the same audit later. If THIS inquiry's D adds substantial value, the verdict softens; if not, the verdict strengthens. (See sensemaking.)

### Honest limits

- N=10 is small. Pattern observations are "based on the last 10 inquiries," not "always."
- Sample bias to meta-design inquiries skews toward "partition in S already."
- Innovation consumption was sampled (3 of 10), not exhaustive. The 1:1 mapping might not hold for all 10.
- Sensemaking samples (1 of 10) is even thinner. The "S already names pieces in SV6" claim is an extrapolation from a subset.

---

## Final Note

The exploration's most important findings:

1. **No inquiry in the sample scored HIGH on decomposition value.** The best D produces is MEDIUM (formalization that adds marginal structure).
2. **D's role in this corpus is formalization, not discovery.** Partitions are usually in S already.
3. **Self-evaluation is universal PASS-stamping.** Not a real gate.
4. **The R/F/C/V template dominates rule-extraction inquiries.** The corpus could ship a protocol for this shape.
5. **Some inquiry shapes (LOOP_DIAGNOSE cascades; multi-piece application) earn more from D than others.** Conditional D might match value to shape.

Sensemaking's job: collapse these observations into a stable model of what D actually contributes. Decomposition's: partition the formalization-vs-discovery distinction (ironically using the discipline being audited). Innovation's: propose what to do — keep / refine / make conditional / fold-into-S. Critique's: evaluate proposals against phase-fit and the user's "is this earning its place?" framing.
