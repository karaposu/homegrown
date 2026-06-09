# Branch: articulate_simple Doc — Structural Re-Audit Post-Applications

## Question

- **Subject:** `devdocs/how_articulate_simple_should_be.md` in its CURRENT state — after this session's two recent rounds of substantive MUST-applications: (a) `2026-06-06_10-37` MQ4 Boundary's 5 MUSTs (new §2.2.4 MQ4 sub-section + typology updates to 4-type + §2.2.4/§2.2.5 → §2.2.5/§2.2.6 renumberings + §2.2.6 MQA scope extension + §6 bundle entry + new Example D), and (b) `2026-06-06_11-16` Substrate-vs-Intra + Overreach + Two-Pass Promotion's 2 of 3 MUSTs (new §2.2.7 Substrate-vs-Intra orthogonal axis sub-section + PERMISSION-not-CONSTRAINT framing in §2.2.2 and §2.2.4; the §9 two-pass status update was DEFERRED per user request).

- **Action:** structural-layer re-audit + identify staleness + recommend bounded-scope corrections. NOT a from-scratch restructure (Bootstrap-lock-simplest still governs per `2026-06-06_09-58` prior structural-layer inquiry).

- **Level:** discipline-explainer artifact (doc itself; structural-layer focus).

- **Observation targets** (user-stated + additional from the prior inquiry's framework):
  1. **Section-weight balance** — §2.2 (Meta-question) grew from 5 sub-sections to **7** (added §2.2.4 MQ4 + §2.2.7 Substrate-vs-Intra; renumbered the prior §2.2.4/§2.2.5). Is §2.2's weight now disproportionate relative to §2.1 (Itemize) / §2.3 (Deconstruct) / §2.4 (MultiDepth) / §2.5 (Rephrase)?
  2. **Cross-reference integrity** — the §2.2.4 → §2.2.5 (bounded-extensibility) and §2.2.5 → §2.2.6 (MQ-aggregate-resolution) renumberings; audit for stale section-number references elsewhere in the doc (we caught one at line 292 earlier; are there more?). Audit for stale MQ-set references (`MQ1/MQ2/MQ3`-style lists that should now be `MQ1/MQ2/MQ3/MQ4`-style).
  3. **Examples-as-implicit-schema consistency** — Example D introduces a new pattern (MQ4 firing on extrinsic exclusion + MQA reconciliation of MQ4-vs-MQ2 contradiction). Does §6 output-shape contract still describe the bundle correctly? Does the closing "What these examples illustrate together" still match the 4-example set?
  4. **Inheritance map (§11) growth** — now at 16 rows after 2 additions; the prior structural-layer inquiry deferred restructure with revival-trigger at ~20 rows OR ~3 supersessions accumulated. Still under both thresholds, but the gap is narrowing — flag if the next finding pushes the threshold close.
  5. **Naming consistency post-applications** — new vocabulary introduced: "Substrate-MQ", "Intra-articulate-MQ", "PERMISSION-not-CONSTRAINT", "Boundary" (4th type), "MQ4", "extrinsic exclusion", "intrinsic exclusion". Audit doc for any stale uses (places where the new terms WOULD apply but don't appear, or places where old terms got missed). Also audit for any "three"/"3" stale references that escaped my edits.
  6. **§9 promotion-deferred consistency** — the §9 two-pass promotion ("separate construction" → "next inquiry") was explicitly DEFERRED per user. Is the doc still internally consistent with §9 saying "separate construction" while §2.2.2 + §2.2.4 + §2.2.7 reference two-pass as the structural resolution of overreach? Or is there now a coherence gap?
  7. **Bootstrap-lock-simplest at doc-level governance still applies?** The prior structural-layer inquiry (`2026-06-06_09-58`) committed Bootstrap-lock-simplest as the governing principle for doc-evolution decisions. Do this audit's findings still respect that principle (favoring narrower fixes over broader restructure)?
  8. **Examples now contain MQ4 entries** — Examples A/B/C have MQ4 as "empty" (cold-context routine cases); Example D has MQ4 firing. Is "empty" rendering consistent across A/B/C? Is the MQ4 entry placement (between MQ3 and MQ-aggregate-resolution) consistent? Does Example C explicitly note the routing rule (intrinsic → MQ3+MQA, NOT MQ4) clearly enough?
  9. **§9 out-of-scope list still accurate?** §9 currently lists "Structural-layer concerns" and "Process-layer concerns" as out-of-scope. With Substrate-vs-Intra + PERMISSION-not-CONSTRAINT now in the doc (both structural-ish concepts), is the layer-split at §9 still accurate?
  10. **Doc-vs-spec dual-truth status (from 09-58 finding)** — the prior structural-layer inquiry committed doc-vs-spec dual-truth as explicit structural commitment. Spec content-sync MUSTs (M4-M7) were deferred per user's task-define.md abandonment. Does the doc still reference the spec at §6 + §9? Should those references stay, get re-flagged, or be addressed?

- **Deliverable shape:** structural audit with concrete findings + bounded-scope recommendations per finding + explicit relationship to Bootstrap-lock-simplest at doc-level (still governing).

**Question statement:** Given the recent applications of MQ4 Boundary + Substrate-vs-Intra orthogonal axis MUSTs to `devdocs/how_articulate_simple_should_be.md`, what structural staleness has accumulated across (a) section-weight balance, (b) cross-reference integrity, (c) examples-as-implicit-schema consistency, (d) inheritance map growth, (e) naming consistency, (f) §9 promotion-deferred coherence, (g) Bootstrap-lock-simplest at doc-level governance, (h) MQ4 entry consistency across examples, (i) §9 layer-split accuracy, and (j) doc-vs-spec dual-truth status; and what bounded-scope corrections are recommended?

## Goal

- **Criterion:** Concrete structural findings grounded in the doc's actual current content (post-applications) + bounded-scope recommendations + explicit honoring of Bootstrap-lock-simplest from prior structural-layer inquiry.
- **Use case:** Apply targeted fixes to keep the doc accurate and consistent before the next reader (or next inquiry) encounters accumulated staleness.
- **Desired outcome:** Audit report identifying each piece of structural staleness + a concrete fix per item + recommendation to apply now vs defer further.
- **What would fail:** (a) superficial sweep that misses concrete staleness; (b) recommending broad restructure when Bootstrap argues for narrow fixes; (c) drifting into meaning-layer (essence) or process-layer (runtime) when the user asked for structural; (d) failing to acknowledge the §9 promotion-deferral the user explicitly imposed; (e) treating the doc's prior structural-layer commitments as up-for-grabs rather than as inherited.

## Source Input

```text
re-run structural now?
  
  Probably worth it. The recent applications touched a lot — new sub-sections, renumbered headers, new orthogonal axis
  documented, new worked example. A fresh structural-layer pass would audit:

  - Section-weight balance — §2.2 grew substantially (now has 7 sub-sections); is the proportion still right?
  - Cross-reference integrity — the §2.2.4 → §2.2.5 and §2.2.5 → §2.2.6 renumberings may have left stale refs elsewhere
  - Examples-as-implicit-schema consistency — Example D adds a new pattern (MQ4 firing on extrinsic); does §6's contract still
  match what §13 shows?
  - Inheritance map growth — now 16 rows; the prior structural inquiry deferred restructure at ~20 rows, so still under
  threshold but closer
  - Naming consistency post-applications — recent edits introduced new terms (Substrate-MQ / Intra-articulate-MQ /
  PERMISSION-not-CONSTRAINT); audit for stale usages


okay lets rerun it
```

## Scope Check

Question covers goal. The 5 user-stated audit dimensions are preserved in observation targets 1-5; additional targets 6-10 surface adjacent concerns the prior structural-layer inquiry's framework suggests. Specific-vs-pattern check: the audit operates on the specific current state of THIS document; the structural-staleness patterns surfaced (renumbering side-effects; example/contract drift; vocabulary-introduction without sweep) may generalize but the scope is bounded to this artifact.

## Layer Commitment

**Primary layer: STRUCTURAL.** User explicitly said "structural-layer pass." This is an audit of section organization, output-shape consistency, cross-reference integrity, examples-as-implicit-schema alignment, naming consistency, inheritance map structure, and layer-split accuracy. All structural-shape concerns. The doc's essence-layer commitments (5 operations + meaning of each) and process-layer commitments (runtime execution + judgment criteria) are NOT in scope.

**Out of scope:**
- **Meaning** (essence + operation semantics — settled across the inquiry chain culminating in this session's two recent findings; no re-litigation)
- **Process** (runtime execution; how the LLM judges intrinsic-vs-extrinsic at runtime; when articulate2 fires — all process-layer; downstream of structural)

## Synthesis Trigger

This inquiry **SYNTHESIZES** commitments from 3 priors and audits whether those commitments are still cleanly reflected in the current doc:

- `devdocs/inquiries/2026-06-06_09-58__articulate_simple_doc_structural_layer_deepdive/finding.md` — commits to: (a) Bootstrap-lock-simplest at doc-level as governing principle; (b) doc-vs-spec dual-truth as explicit structural commitment; (c) stale-spec-pointer as named structural failure mode; (d) 4 meta-patterns (Bootstrap-lock-simplest / content-truth-over-name-truth / explicit-deferral-with-revival-trigger / stale-spec-pointer). This audit re-tests whether Bootstrap-lock-simplest still applies to its own findings.

- `devdocs/inquiries/2026-06-06_10-37__articulate_scope_boundary_perception/finding.md` — commits to MQ4 Boundary essence + cold-empty-valid rule + 5 MUSTs; this audit re-tests whether the applications introduced any structural inconsistency.

- `devdocs/inquiries/2026-06-06_11-16__mqs_as_seed_qa_overreach_two_pass/finding.md` — commits to Substrate-vs-Intra orthogonal axis + PERMISSION-not-CONSTRAINT distinction + 00-11 promotion (deferred at user's request) + 3 MUSTs (2 applied); this audit re-tests whether the partial application introduced any internal-consistency gap.

Each prior carries commitments this audit will inherit. CONCLUDE will require the finding to include `## Inherited Commitments Re-test` section per the protocol.
