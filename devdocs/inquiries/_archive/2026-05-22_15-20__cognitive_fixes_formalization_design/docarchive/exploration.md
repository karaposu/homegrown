# Exploration: Cognitive Fixes Formalization — Design Decision

## User Input

`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-22_15-20__cognitive_fixes_formalization_design/_branch.md`

---

## Territory Overview

**Mode:** ARTIFACT-MODE DOMINANT (existing protocols folder; LOOP_DIAGNOSE precedent; MVL+ Question-field finding) + POSSIBILITY-MODE SUB-PROBE (candidate structural shapes, naming options, staging paths).

**Entry point:** SIGNAL-FIRST. The LOOP_DIAGNOSE Step 5 + Step 6 guardrails provide the load-bearing precedent — any formalization must follow the same staging discipline.

**Resolution:** MEDIUM. Sufficient to commit structural shape + naming + staging.

### Territory regions (12)

| R | What it covers |
|---|---|
| R1 | Existing protocol shapes in `cognitive_harness/protocols/` |
| R2 | User's methodology unpacked into named steps (from MVL+ finding) |
| R3 | 5 candidate structural shapes |
| R4 | 6 naming options |
| R5 | 4 staging paths |
| R6 | LOOP_DIAGNOSE Step 5+6 precedent (verbatim) |
| R7 | Premature-formalization risks at N=1 |
| R8 | Late-formalization risks at N=∞ |
| R9 | Cost analysis of folder+template at N=1 |
| R10 | KIND-name options for the MVL+ fix as first instance |
| R11 | Kill condition design |
| R12 | Self-reference vigilance |

---

## Inventory

### R1 — Existing protocols in `cognitive_harness/protocols/`

Read from disk:

| Protocol | Lines | Purpose |
|---|---|---|
| `branch_inquiry.md` | 669 | Heavy; branch-inquiry creation orchestration |
| `outcome_review.md` | 719 | Outcome review protocol |
| `artifact_materialization.md` | 631 | Artifact materialization |
| `multi_resolution_navigation.md` | 566 | Multi-resolution navigation |
| `conclude.md` | 408 | CONCLUDE — finding compilation |
| `loop_diagnose.md` | 314 | Correction-chain diagnostic framing |
| `spec_governance.md` | 290 | Spec governance |
| `navigation_context_intake.md` | 259 | Lighter; navigation intake |
| `resume.md` | 194 | Lightest; inquiry resume |

Plus `_archive/` containing one superseded version (navigation_context_intake_my_version.md).

**Pattern observed:**
- Protocols range 194–719 lines
- Each addresses ONE specific recurring operational need
- All are operational specs (input contract + steps + failure modes + sometimes future-hook section)
- A `cognitive_fixes.md` protocol would fit this pattern IF the methodology proves stable

**Confidence:** CONFIRMED via direct directory listing.

### R2 — User's methodology unpacked into named steps

From the MVL+ Question-field finding (which applied the methodology):

1. **Trigger condition** — an LLM-driven instruction produces inconsistent coverage across runs (some runs catch all aspects, others drop one)
2. **Identify** the vague instruction (specific lines / phrases / fields)
3. **Decompose** into named meta-categories with full coverage of known failure cases
4. **Verify** the known failure case is caught by at least one named category
5. **Add structural fail-safe** that operates on input STRUCTURE not CONTENT (so it doesn't depend on the enumeration being provably complete)
6. **Acknowledge** the meta-recursion residual honestly (what even the fail-safe can miss)
7. **Branch-experiment evaluation gate** before promotion to permanent change

**Stability assessment:** the 7 steps are derived from one application. They look generic but haven't been tested across cases. Stability at N=1 is **HYPOTHETICAL**.

**Confidence:** CONFIRMED that the steps exist as a named structure; CONFIRMED-LOW that they're generically stable.

### R3 — Candidate structural shapes

Five options surface:

| Shape | What it is | Cost | When appropriate |
|---|---|---|---|
| **(a) Markdown one-pager** | Single file documenting the methodology; no folder | Lowest (~10 min) | If methodology proves single-application; orphans if pattern doesn't recur |
| **(b) Folder + template + index** | Folder with one-pager template + indexed instances | Low (~30 min) | N=1; preserves methodology while accumulating evidence |
| **(c) Full protocol** | Like LOOP_DIAGNOSE: input contract + steps + failure modes + future hook | Medium (~2 hr) | N≥3-5 confirmed; methodology proved stable |
| **(d) Runner hook** | Trigger phrase recognized by MVL+/MVL2+ that loads the protocol | Medium (~1 hr) | N≥5-10 + stable trigger language |
| **(e) Standalone discipline** | New skill at `cognitive_harness/cognitive-fix/` with its own SKILL.md + references | High (~half day) | Very unlikely; methodology is meta not cognitive operation |

**Verdict at N=1:** shape (b) is the right level. (a) loses methodology preservation. (c)/(d)/(e) overreach per LOOP_DIAGNOSE Step 5/6.

### R4 — Naming options

| Name | Pros | Cons |
|---|---|---|
| `cognitive_fixes` | User's proposed name; intuitive; broad enough to house future patterns | Vague — "cognitive fixes" could mean anything |
| `coverage_enforcement` | Precise (names the methodology's load-bearing mechanism) | Narrow — would not house non-coverage-related fixes |
| `instruction_robustness` | Names the target (LLM instructions); semi-precise | Doesn't capture non-instruction applications |
| `prompt_fixes` | Concrete | Suggests prompt engineering vs methodology fixes |
| `loop_repairs` | Aligns with LOOP_DIAGNOSE naming | Confusing — different scope (per-instruction not per-loop) |
| `methodology_fixes` | General | Too broad; could mean fixes to disciplines themselves |

**Verdict:** `cognitive_fixes` is fine for breadth (it can absorb future kinds beyond instruction-decomposition). Each fix should have a KIND-name for specificity.

### R5 — Staging paths

| Path | N=1 | N=3 | N=5-10 | N≥10 |
|---|---|---|---|---|
| **Conservative** (mirrors LOOP_DIAGNOSE Step 5/6) | Folder + template + index of 01 | Audit; refine template | Consider protocol promotion | Consider runner hook |
| **Aggressive** | Skip to protocol now | n/a | Already permanent | Already hook |
| **Lazy** | Do nothing | Document somewhere | Audit memory; maybe formalize | Formalize then |
| **Minimal** | Index 01 in a flat file | Add 02, 03 to flat file | Refactor to folder | Maybe protocol |

**Verdict:** Conservative path is the disciplined choice per LOOP_DIAGNOSE precedent. Aggressive overreach risks creating orphaned protocol; Lazy risks methodology drift; Minimal eventually needs the refactor anyway.

### R6 — LOOP_DIAGNOSE Step 5+6 verbatim precedent

Read fresh from `cognitive_harness/protocols/loop_diagnose.md` lines 258-294:

**Step 5 guardrails (verbatim):**
> "Do not propose broad fundamentals rewrites from one weak correction chain."
> "Do not promote LOOP_DIAGNOSE into a standalone skill or discipline until 5 to 10 diagnostic MVL+ findings show a stable internal method that cannot be explained as ordinary MVL+ on a diagnostic question."

**Step 6 verbatim:**
> "Do not add silent automatic diagnosis-mode inference until at least 10 explicit LOOP_DIAGNOSE runs show stable trigger language with no confusing false positives."

**Application to cognitive_fixes:**
- "5 to 10 [applications] show stable internal method" → protocol promotion threshold: N≥5
- "10 explicit ... runs show stable trigger language" → hook threshold: N≥10
- The N=1 → folder+template stage is precedented by this discipline (LOOP_DIAGNOSE itself was created from one application but lives as protocol — but LOOP_DIAGNOSE is at the diagnostic-framing layer, not the per-fix-pattern layer; different scope).

**Confidence:** CONFIRMED — verbatim quotes from the artifact.

### R7 — Premature-formalization risks at N=1

- **False-positive fix proposals**: future inquiries might force-fit non-applicable cases into "cognitive fix" frame
- **Over-claiming generality**: 7-step methodology might not generalize beyond instruction-decomposition; we don't know yet
- **Bureaucratic friction**: template adds overhead to creating fixes; could discourage informal fixes
- **Orphaned structure**: if pattern doesn't recur, the folder is dead infrastructure to maintain/delete
- **Authorship-bias amplification**: I authored the first instance; making it the template-anchor risks anchoring future fixes to my framing

### R8 — Late-formalization risks at N=∞

- **Methodology drifts in memory**: between applications, key elements forgotten
- **Agents re-invent each time**: not consulting prior instances; redundant work
- **No place to accumulate per-fix evidence**: each fix lives in its own inquiry; cross-fix patterns invisible
- **No promotion path**: never reaches protocol-level even if pattern proves stable

### R9 — Cost analysis of folder+template at N=1

- **Time cost:** ~30 min to create folder + write template + index MVL+ fix as 01
- **Maintenance cost:** ~5 min per new fix (consult template; add 02, 03)
- **Reversibility:** HIGH — folder + files can be deleted; no downstream dependencies created
- **Sunk cost if pattern dies:** low — the template doc itself is useful even orphaned (captures the methodology in writing)

### R10 — KIND-name options for the MVL+ fix as first instance

Candidates for the first-instance's name (the SPECIFIC fix-kind):

| Name | Captures |
|---|---|
| `vague_instruction_decomposition` | What the methodology DOES to the instruction |
| `coverage_enforcement_via_meta_categories` | The mechanism |
| `meta_category_decomposition_with_structural_fail_safe` | The full mechanism + fail-safe |
| `instruction_robustness_v1` | Versioned generic |
| `prompt_coverage_stabilization` | Performance frame |

**Verdict:** `vague_instruction_decomposition` is the cleanest — names the operation; the methodology details belong inside the file.

### R11 — Kill condition design

For honest formalization, an explicit kill condition prevents zombie infrastructure:

- **Kill if N=5 inquiries occur with NO new cognitive-fix candidates**: pattern isn't recurring; methodology can be retired or folded into a different home (e.g., merged into spec_governance.md).
- **Kill if cross-fix audit at N=3-5 shows the methodology is NOT stable** (each fix is bespoke; no shared structure): the folder is documentation but not template; reconsider.
- **Kill if user explicitly retires it**: at any time.

### R12 — Self-reference vigilance

I (Claude) authored the MVL+ Question-field fix that's the proposed first instance. Authorship-bias risk when formalizing a methodology I co-authored:

- The template's shape is anchored to MY one example. Different agents (or me on a different problem) might frame the methodology differently.
- The promotion gates (≥3-5 applications) MUST come from external precedent (LOOP_DIAGNOSE Step 5/6 verbatim), not from my own judgment about what's "stable enough."

**Mitigation:** anchor staging gates to LOOP_DIAGNOSE Step 5/6 verbatim language. Use the user's proposed name (`cognitive_fixes`) rather than my preferred alternatives. Add explicit "first-instance-bias acknowledgment" in the template.

---

## Signal Log

| # | Signal | Type | Status |
|---|---|---|---|
| S1 | LOOP_DIAGNOSE Step 5+6 verbatim provide the staging precedent | Density | PROBED |
| S2 | Existing protocols are 200-700 lines, operational specs | Density | PROBED |
| S3 | User's methodology has 7 named steps (stable structure at N=1) | Density | PROBED |
| S4 | Folder+template at N=1 is low-cost, reversible, methodology-preserving | Density | PROBED |
| S5 | Aggressive formalization (full protocol now) is the LOOP_DIAGNOSE Step 5 overreach pattern | Tension | PROBED |
| S6 | Authorship-bias on me as first-instance author | Tension | PROBED |
| S7 | Kill condition is needed to prevent zombie infrastructure | Absence | PROBED |
| S8 | Naming: `cognitive_fixes` (user's choice) wins on breadth + intuition | Density | PROBED |
| S9 | First-instance KIND-name should be operation-named (`vague_instruction_decomposition`) | Density | PROBED |
| S10 | The N=1 → folder+template stage has clean structural-discipline + reversibility | Density | PROBED |

---

## Confidence Map

| Region | Confidence | Reasoning |
|---|---|---|
| R1 (existing protocols) | CONFIRMED | Direct directory listing |
| R2 (methodology steps) | CONFIRMED on structure; LOW on stability | Steps exist; generalization untested |
| R3 (5 candidate shapes) | CONFIRMED — 5 surfaced; (b) recommended | |
| R4 (naming) | CONFIRMED — cognitive_fixes wins | |
| R5 (staging paths) | CONFIRMED — Conservative recommended | |
| R6 (LOOP_DIAGNOSE precedent) | CONFIRMED | Verbatim quotes |
| R7 (premature risks) | CONFIRMED | Each risk evidenced |
| R8 (late risks) | CONFIRMED | Each risk evidenced |
| R9 (folder+template cost) | CONFIRMED — ~30 min, reversible | |
| R10 (KIND-name) | CONFIRMED — operation-named | |
| R11 (kill condition) | CONFIRMED — N=5-no-additions threshold | |
| R12 (self-reference) | CONFIRMED — mitigated via external precedent anchoring | |

**Confirmed-absent regions:**
- Existing folder-of-fixes pattern in the harness — none exists; this would be the first
- Existing protocols with explicit kill conditions — none found; this would set a precedent
- Aggressive/Lazy/Minimal staging paths — all rejected; Conservative wins

---

## Frontier State

**STABLE.** Convergence:
1. Frontier stability — jump-scan on self-reference vigilance + naming alternatives returned no new regions
2. Declining discovery rate — third-cycle probing yielded refinements within R10 + R11
3. Bounded gaps — remaining unknowns (specific template wording, staging thresholds within range) deferred to Sensemaking/Innovation

**Jump-scan performed:** YES — probed self-reference + naming + LOOP_DIAGNOSE-mirror staging.

---

## Gaps and Recommendations

### Frontier questions for Sensemaking

**FQ1** — Commit structural shape: confirm folder+template+index (shape b) per Conservative staging.

**FQ2** — Commit naming: `cognitive_fixes` for folder + `vague_instruction_decomposition` for first instance KIND-name.

**FQ3** — Commit staging path with explicit gates: N=1 folder+template; N≥3 audit + refine; N≥5 consider protocol; N≥10 consider runner hook.

**FQ4** — Commit kill condition: N=5-no-new-applicable-cases OR cross-fix audit shows no shared structure OR user retires.

**FQ5** — Decide: create folder+template+index NOW, OR wait for MVL+ branch experiment validation first?

**FQ6** — Commit self-reference mitigation: anchor staging gates to LOOP_DIAGNOSE Step 5/6 verbatim; use user's proposed naming; add first-instance-bias acknowledgment to template.

**FQ7** — Decide: does the template need a strict schema (template fields), or a looser one-pager guide?

### Open Questions (handed off)

- Will the methodology generalize beyond instruction-decomposition? (Answered only by accumulated applications.)
- Will the kill condition fire before the promotion gate? (Possible — if no new applications occur in 5 future inquiries, retire.)

### Recommendations

- Sensemaking: commit FQ1-FQ7 with explicit gating language quoted from LOOP_DIAGNOSE.
- Decomposition: partition into folder structure / template text / first-instance entry / promotion gate spec / kill condition / caveats.
- Innovation: produce concrete paste-ready artifacts per piece; CONTRARIAN-RETHINK on whether folder+template is itself overreach at N=1.
- Critique: probe each artifact against premature-formalization risks (R7) + authorship-bias (R12) + LOOP_DIAGNOSE-precedent fidelity.

---

## Telemetry

| Metric | Value |
|---|---|
| Mode | artifact-dominant + possibility sub-probe |
| Entry point | signal-first |
| Cycles run | 2 (initial + jump-scan) |
| Artifact reads (fresh) | 2 (protocols folder listing; LOOP_DIAGNOSE Step 5+6 lines 258-294) |
| Signals detected | 10 |
| Signals probed | 10 |
| Frontier state | stable |
| Convergence criteria | all three PASS |
| Jump-scan performed | YES (self-reference + naming) |
| Failure modes checked | 10 (NONE observed) |

---

## Self-Assessment Verdict

**PROCEED to Sensemaking.** 7 frontier questions + 5 candidate shapes + 6 naming options + 4 staging paths + LOOP_DIAGNOSE precedent + kill condition design + self-reference mitigation all mapped.
