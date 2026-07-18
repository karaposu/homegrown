---
inquiry: articulate_warm — its operation-set and its warm-only mechanisms
date: 2026-07-09
model: claude-opus-4-8
effort: high
layer: PROCESS (+ additive Meaning)
continues: devdocs/inquiries/2026-07-09_09-05__articulate_warm_structure_layer/finding.md
consumes:
  - docs/how_articulate_warm_should_be.md (§4 re-run split / §5 commitment / §9 cost)
  - cognitive_harness/articulate_simple/references/articulate_simple.md (the 5 operations, the 5 verdicts, the cold "never-asks" stance)
  - cognitive_harness/traverse/SKILL.md (step 8: FLAG → surfaced-to-user)
verdict: both items STAND (gate-clean, independent, amendments folded in)
---

# What's inside articulate_warm — its operation-set and its warm-only mechanisms

## The one-line answer

> **The cold/warm difference is *context*, and warm's whole operation-set falls out of one symmetry: cold's three limits — identification-only, no-commitment, never-asks — are consequences of having no context, and warm, having context, inverts each. *Commit* was already in the doc. This dive adds the other two: (A) re-run the context-sensitive inherited operations (trigger-gated — more than just MQ2, not all five), and (B) add one warm-only operation, conflict-detection, that flags request-vs-reality conflicts the runner can act on. It reads as "warm should do more," but it's really a *principled tightening*: warm does exactly what context licenses — no more, no less.**

Both items stand **independently** (you can take A and leave B) and were driven by your two prompts: "just MQ2 is thin" exposed A; the conflict-scenario exposed B.

## The unifying frame — the context symmetry

| Cold limit | Why (it's a no-context consequence) | Warm inversion | Item |
|---|---|---|---|
| identification-only (never commits) | nothing to commit *against* | **commit** the anchor | done (doc §5) |
| doesn't re-run context-things | nothing new to react to | **re-run** the context-sensitive ops | **A** |
| never-asks / no-halt (`:117`,`:133`) | nothing to ask *against* | **identify conflicts & flag** (runner asks) | **B** |

`warm's operation-set = {context-sensitive inherited ops, re-run [A]} ∪ {context-enabled new ops, warm-only [B]}`. The frame is an *organizing lens*, not a load-bearing claim — the work is in A and B.

## Item A — which inherited operations warm re-runs

**"Just MQ2" is genuinely thin. The fix is a principle, not a longer list:** re-run the **context-sensitive** operations, carry the **context-invariant** ones — and re-run an op **only if a single context-delta scan shows context actually moved it** (that scan, mirroring the spec's one-pass self-check at `:122`, is the §9 cost-guard).

| Operation | Context-sensitivity | Warm behavior |
|---|---|---|
| Itemize `:52` / Deconstruct deliverable-shape `:64` / MultiDepth literal `:67` | invariant (statement-facts / task-identity) | **carry through** |
| MQ2 (anchor) `:56` · Rephrase (already reads warm substrate) `:74` | high / by-design | **re-run always** |
| **MQ4 (boundary/exclusions)** `:58` | high — context reveals exclusions cold couldn't know | **re-run usually** ★promoted |
| MQ1 (kind) `:55` · MQ3 (endpoint) `:57` · MultiDepth WHY `:68` | medium | **re-run on-trigger** |
| MQA `:62` | derived | re-run iff ≥2 re-ran |

**This corrects the canon doc §4**, which currently reads "required: MQ2 + Rephrase; optional: MQ1/MQ3/MQ4/MultiDepth." Two changes: **promote MQ4** out of "optional" (it's a strong re-run), and **replace the flat "optional"** with the trigger-gated principle. Landing: **more than just MQ2, not all five** — the trigger is what keeps it a fraction of a pass, not two passes.

## Item B — the one warm-only mechanism: conflict-detection

Cold identifies **ambiguities *within* the request**; warm, having context, can also identify **conflicts *between* the request's premise and surfaced reality** — the *same* 2-shape identify move (`:132`), context-enabled. Verified **unowned**: surfacing checks only internal tag-consistency (`:288`), and sensemaking runs later and is biased to *reconcile* a frame, not to gate it.

**The mechanism (detect + escalate):**
```
  conflict-detection (warm-only): identify incompatibilities between the
    re-anchored request premise and the surfaced material (2-shape; don't adjudicate)
  →  none                          → HIGH-PROCEED
     resolvable by re-anchor       → re-anchor + MED-FLAG (conflict noted)
     severe: premise contradicted,
       unresolvable, pipeline-wasting → HIGH-FLAG + a clarifying-question payload
```

**Why this doesn't violate the cold "never-asks" canon:** the discipline never pauses, asks, or halts — it **emits** (an identified conflict + a flag + a formulated question); the **runner** surfaces / asks / blocks (traverse step 8). The asking lives at the runner, exactly as re-surfacing does (09-05). Five amendments from the gate keep it honest:

1. **Flag TYPE-discriminator** — the conflict-flag must be tagged `content-conflict` (vs the operational flags), or `HIGH-FLAG` gets overloaded and the runner can't tell a content-conflict from a self-check issue.
2. **Grade ≠ adjudicate** — warm *grades* the conflict's severity (like its own verdict); it never *decides* request-vs-reality.
3. **Warm formulates / runner poses** — warm writes the clarifying question as payload; the runner asks it.
4. **Ownership** — it's warm's because the premise *is warm's own output* (checking its product against reality), not a downstream consumer's.
5. **Autonomy-degrade** — block-and-ask needs an operator; under autonomy it degrades to flag-and-best-effort (HIGH-FLAG + record + proceed). Block-and-ask is an operator-present-only *runner* policy.

**Sizing (honest):** conflict-detection is a **low-frequency, cheap safety-net** — premise-conflicts are rare, but a missed one wastes the whole pipeline on a confidently-wrong answer. Worth adding because it's *cheap* (rides the identify-move + the FLAG) and *fail-fast*, not because conflicts are common. Reused: the FLAG action + runner-path. New: the content-conflict condition + the question payload + a runner block-policy.

## The Meaning (additive)

If B lands, warm becomes **two-faced**: the re-anchor→re-surface **loop-controller** (settled) **+ the pipeline's first request-vs-reality conflict-gate** (fail-fast). This *extends* the identify-move; it does not re-open the settled core.

## Why this is a tightening, not scope-creep

Every "expansion" carries a restriction: Item A's trigger-gate **restricts** re-runs to what-actually-moved (the maximal "re-run all five" is explicitly killed by §9); Item B stays **inside** the identify-DNA (doesn't adjudicate), **defers** asking to the runner (doesn't pause), and **degrades** under autonomy (doesn't deadlock). Warm ends up doing *exactly what context licenses* — a sharper boundary, not just a bigger one.

## Inherited Commitments Re-test

| Prior | Commitment | Re-test |
|---|---|---|
| canon doc §4 | warm re-runs MQ2+Rephrase; others "optional" | **CORRECTED** — MQ4 promoted; "optional" → the trigger-gated principle (the one place this dive refines a prior rather than just honoring it). |
| canon doc §9 | cost = a fraction of a pass, not two | **HONORED** — the one-scan trigger keeps it bounded. |
| articulate_simple stance | never-ask (`:133`) / no-halt (`:117`) / don't-adjudicate (`:132`) | **HONORED** — B is emit-only (runner asks); grade ≠ adjudicate. |
| 09-05 structure | thin-wrapper inherits operations unchanged | **HONORED + extended** — A re-runs inherited ops (unchanged); B adds *one* new warm-only op the wrapper's warm-section must house. |
| traverse step 8 | FLAG → surfaced-to-user, proceeds by default | **HONORED + a dependency** — B rides it; the severe-rung block is a new *optional* runner policy. |

No conflict; one deliberate correction (§4).

## Next actions (typed + build-priority ordered — nothing built this dive)

★**Build-priority is A ≫ B** — A improves *every* warm pass; B is a *rare* safety-net.

**User-gated, in order:**
1. **R2 — correct doc §4** (Item A; HIGH, do first): promote MQ4 + "optional" → the trigger-gated principle. Low blast-radius, every-pass value.
2. **R3 — add conflict-detection→gated-flag** to the warm-behavior spec (Item B; after A): the operation + ladder + emit/runner division + grade≠adjudicate + warm-formulates/runner-poses.
3. **R4 — the flag TYPE-discriminator** (part of B): a `content-conflict` flag-type in the verdict system.
4. **R5 — the runner block-policy** (deferred, runner-spec): selective block-on-severe-content-conflict; operator-present-only. Depends on R4.
5. **R6 — structural housing** (09-05 downstream): house A's expanded re-run + B's new op in the thin-wrapper's warm section.

**Monitor:**
- **R7 — the context-symmetry lens** ("sort by context-sensitivity; add what context enables") — reusable for any cold/warm pass; sized modest. Candidate seed *if* a second cold/warm-pass design appears.

## Reasoning (the honest core)

The dive's value split cleanly: **Item A is a principled tidy** of an existing hedge (low novelty, high frequency — it fires every warm pass); **Item B is a genuine blind-spot fill** (a whole warm-only capability the design never named — higher novelty, low frequency). Your two prompts found both gaps; the contribution is a *principle* (context-sensitivity) that fills them and *bounds* the fill. The gate did real work — it caught that Item B's flag would overload the verdict system (needs a type-discriminator) and that A and B are not co-equal for building (A ≫ B by frequency). Nothing is built — this is a design, and the honest recommendation is: if you build anything, do A first.

## Open questions

- **Empirical frequency of premise-conflicts** — assumed rare (drives B's *value*, not its cost); unverified until warm runs on real tasks.
- **Flag-type vs new verdict** (R4) — a `content-conflict` tag on the existing FLAG, or a genuinely new verdict? A build-time call.
- **Whether the block-policy (R5) is wanted at all** — the non-blocking FLAG→surface path already works; blocking is an extra.

## Source input

```
u know in articulate simple we have [articulate_cold: Itemize · MQ1–MQ4 + MQA · Deconstruct · MultiDepth · Rephrase] … but articulate_warm just uses mq2 again, maybe it should have more concepts inside as well?
also … surfacing showed conflicts with surfaced material and user request > articulate warm > how should it proceed if something big is wrong? maybe clarifying questions in certain cases … such mechanisms are possible with articulate warm (not cold) bc it uses surfaced context.
```
