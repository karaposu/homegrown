# Branch: MultiDepth — Output Count: Fixed-2 vs Fixed-3 vs Variable-N vs Bounded-Variable

## Question

- **Subject:** MultiDepth operation's output count (how many depth-level outputs the operation emits per invocation). MultiDepth is the renamed MultiScope per `devdocs/inquiries/2026-06-05_22-44__multiscope_depth_of_meaning_correction/finding.md` (the corrected essence: depth-of-meaning rendering, same task at multiple meaning-depths bound by INCLUDES-with-accuracy rule).
- **Action:** decide / compare across 4 candidate output-count schemas and produce a defensible structural choice.
- **Level:** discipline (articulate_simple's MultiDepth operation; structural layer).
- **Observation targets:**
  1. **Fixed-2 schema:** emit exactly 2 outputs per invocation (literal + purpose-wrapped). Current implicit choice from prior worked example.
  2. **Fixed-3 schema:** emit exactly 3 outputs per invocation (literal + proximate-purpose + ultimate-purpose).
  3. **Variable-N schema:** emit 1 literal + N purpose-wraps where N is LLM-judged per invocation based on perceivability of the purpose chain.
  4. **Bounded-variable schema:** emit between 2-to-4 outputs with LLM judgment within bound (compromise between Fixed-3's articulability and Variable-N's flexibility).
  5. **Test against worked example** ("fix the token validation bug discussed" → "to enable login" → "so we can test other features"): which schema renders this best?
  6. **Lightness preservation:** does the schema add cost without proportional benefit?
  7. **INCLUDES-with-accuracy preservation:** does each candidate honor the load-bearing rule from the just-prior finding (big always contains small faithfully; chain levels always contain prior levels)?
  8. **Downstream reception complexity:** how many candidates does downstream consumption (Rephrase + loop disciplines + user + runner) handle?
  9. **Padding-risk:** Fixed-3 specifically — does it force LLM to invent purpose levels when the chain is shallow ("rename the variable")?
  10. **Variable-N stability risk:** does it lose the structural anchor (downstream doesn't know how many outputs to expect)?
- **Deliverable shape:** decision with reasoning + per-option tradeoff analysis + recommendation + worked-example renderings for each candidate.

**Question statement:** Given the just-committed corrected essence (depth-of-meaning rendering with variable purpose-chain depth bounded by relevance + perceivability), how many outputs should MultiDepth emit per invocation — Fixed-2 (current), Fixed-3 (literal + proximate + ultimate), Variable-N (LLM-judged per invocation), or Bounded-variable (2-to-4 with LLM judgment) — when measured against the user's worked example, the lightness-as-feature commitment, the INCLUDES-with-accuracy rule, padding-risk in shallow chains, downstream reception complexity, and structural stability?

## Goal

- **Criterion:** A defensible structural decision that (a) preserves the just-committed corrected essence (depth-of-meaning + INCLUDES rule), (b) keeps the operation light (no padding when chain is shallow; no machinery explosion), (c) handles the worked example without instability, (d) works under both warm and cold context, (e) produces a stable enough schema for downstream consumers to operate predictably.
- **Use case:** Encode in `devdocs/how_articulate_simple_should_be.md` §2.4 FULL REVISION (the soft-MUST from `devdocs/inquiries/2026-06-05_22-44__multiscope_depth_of_meaning_correction/finding.md`).
- **Desired outcome:** A structurally-stable output schema for MultiDepth that handles both shallow-chain tasks (cold-context "rename the variable") and deep-chain tasks (warm-context "fix the token validation bug → enable login → test other features") without instability or padding, and that downstream consumers can predict.
- **What would fail:** (a) A choice that adds lightness cost without clear benefit (e.g., Fixed-3 when most chains are 1-deep); (b) a choice that's ambiguous in execution (e.g., Variable-N with no bound or judgment criteria); (c) a choice that re-introduces scale-of-ambition framing through schema structure; (d) a recommendation that doesn't explicitly test against the user's worked example.

## Source Input

```text
Want me to test the worked example against 
  fixed-3, variable-N, and bounded-variable to see which one keeps the operation light?

lets try to find which option is better, or just 2 fixed is better?
```

## Scope Check

Question covers goal. The question targets the structural decision (output count); the goal asks for a defensible decision that satisfies essence-preservation + lightness + worked-example handling + cold/warm + downstream-stability — all of which are observation targets in the question. Specific-vs-pattern check: the user's "worked example" reference points at the specific example from the prior inquiry, but the structural decision must hold across the broader pattern of MultiDepth invocations (shallow + deep, cold + warm); the inquiry addresses the broader pattern using the specific example as a test case, not as the only target.

## Layer Commitment

**Primary layer: STRUCTURAL.** The question targets MultiDepth's output schema — how many outputs the operation emits per invocation. This is an artifact-shape question (the operation's output contract), not a what-is-MultiDepth question (already settled by `devdocs/inquiries/2026-06-05_22-44__multiscope_depth_of_meaning_correction/finding.md`) and not a how-does-LLM-execute-MultiDepth question (downstream of structural choice).

**Out of scope:**
- **Meaning** (depth-of-meaning rendering essence + INCLUDES rule + render-as-composition operation type already settled by 2026-06-05_22-44; this inquiry inherits and applies, does not re-litigate)
- **Process** (when LLM judges depth, what triggers depth selection, runtime mechanism — all downstream of structural choice; can only be specified after schema is locked)

The inquiry intends to address ONLY the structural layer in this run. If process-layer questions emerge (e.g., "how does the LLM decide N?"), they are noted as next-inquiry follow-ups, not addressed here.

## Synthesis Trigger

This inquiry does NOT consolidate / synthesize / roll up multiple priors. It REFINES one prior (`devdocs/inquiries/2026-06-05_22-44__multiscope_depth_of_meaning_correction/finding.md`) at the structural layer — specifically operationalizing the variable-depth commitment (SV6-6) into a concrete output schema. Synthesis Trigger does not fire by letter (only 1 prior, not 2+).

However, the inquiry INHERITS commitments from that one prior and the finding will declare `refines:` of it. The inherited commitments below must be re-tested in the finding via `## Inherited Commitments Re-test` per CONCLUDE's enforcement (N≥3 commitments inherited):

- `devdocs/inquiries/2026-06-05_22-44__multiscope_depth_of_meaning_correction/finding.md` — commits to: (1) corrected essence = depth-of-meaning rendering [must hold under chosen schema]; (2) INCLUDES-with-accuracy load-bearing rule [must hold across all output levels]; (3) MQ3 = endpoint, MultiDepth = path distinction [chosen schema must not re-blur this]; (4) render-as-composition cognitive operation type [chosen schema must preserve composition shape]; (5) variable purpose-chain depth bounded by relevance + perceivability [chosen schema must operationalize this faithfully]; (6) substrate-compliance PRESERVED [chosen schema must use task statement + general knowledge / warm context, not fetch]; (7) lightness PRESERVED [chosen schema must not add machinery beyond render-as-composition].
