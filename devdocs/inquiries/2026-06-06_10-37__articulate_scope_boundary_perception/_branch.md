# Branch: articulate_simple — Scope-Boundary Perception (Does It Have One? Should It?)

## Question

- **Subject:** articulate_simple's perception (or absence) of explicit scope-boundary declarations — the user's *"X is in scope; Y is explicitly NOT in scope"* signal that articulate's operations should honor when framing a task. Specifically: when a user states *"focus on articulate_simple; we abandoned task-define.md"*, does articulate_simple's current operation-set capture that exclusion, and if not, what meaning-layer commitment SHOULD it carry?

- **Action:** examine + decide. (a) Audit the doc `devdocs/how_articulate_simple_should_be.md` and the 5 operations (Itemize, Meta-question with MQ1/MQ2/MQ3/MQ-aggregate-resolution, Deconstruct, MultiDepth, Rephrase) for whether a scope-boundary perception mechanism exists. (b) If absent or insufficient, decide what the meaning-layer commitment should be — what cognitive operation perceives explicit scope boundaries, where it lives, and what its essence is.

- **Level:** discipline (articulate_simple); cognitive-operation granularity (what perceptions the discipline makes about the task).

- **Observation targets:**
  1. **The triggering failure case** — the prior inquiry `2026-06-06_09-58__articulate_simple_doc_structural_layer_deepdive` produced MUSTs M4-M7 to sync `cognitive_harness/task-define/references/task-define.md` content. The user has now declared that file out of scope (*"we are not caring about task-define.md anymore... we started from scratch and focusing only articulate simple"*). The inquiry mis-scoped because articulate's framing didn't carry the user's explicit-exclusion commitment.
  2. **Audit the current operation set:** does any of {Itemize / MQ1 / MQ2 / MQ3 / MQ-aggregate-resolution / MQ-extension / Deconstruct / MultiDepth / Rephrase} perceive explicit scope-boundary declarations?
  3. **MQ1 (Structural/scope)** perceives scope-AXIS (time-horizon / conceptual / feature / cross-cutting) — is this the same as scope-boundary? Or is "what dimension things vary along" different from "where do they end"?
  4. **MQ2 (Relational/context-need)** perceives positive — what KINDS of external context are load-bearing. Does it also perceive negative — what kinds are EXPLICITLY NOT load-bearing? Or is its perception asymmetric (positive-only)?
  5. **MQ3 (Interpretive/intent)** perceives positive intent — what user wants. Does it perceive negative intent — what user explicitly does NOT want? (The §13 Example C "redo from scratch" case treats existing implementation as anti-pattern; is this MQ3's perception or MQ-aggregate-resolution's?)
  6. **MQ-aggregate-resolution** handles cross-MQ contradictions (Example C is the canonical "fresh-start" case). Does it perceive user-declared exclusions, or only contradictions among MQ-perceptions?
  7. **Intrinsic-vs-extrinsic scope-boundary distinction** — "redo from scratch" (Example C) is INTRINSIC scope-boundary (the task statement itself signals exclusion via "from scratch"). User's task-define.md exclusion is EXTRINSIC scope-boundary (project-level decision the task statement doesn't carry). Does articulate_simple's current frame distinguish these? Should it?
  8. **Bounded-extensibility rule (§2.2.4)** allows MQ-extensions if (a) about task structure/framing, (b) constrain downstream, (c) one sentence. Could a scope-boundary MQ-extension be authored within this rule, or does it require its own base MQ?
  9. **Cognitive operation type for scope-boundary perception** — if added, is it perception (like MQ1-MQ3) or render (like Deconstruct, MultiDepth) or aggregation (like MQ-aggregate-resolution)?
  10. **Where in the bundle does scope-boundary live** — if it's an MQ4, it sits alongside MQ1-MQ3; if it's an MQ2 extension, it sits inside MQ2's substrate as a 4th element (NOT to be confused with expression-mode); if it's a new operation, it sits parallel to MQ-aggregate-resolution.
  11. **Lightness preservation** — articulate is lightweight by design; any new operation or extension must not violate §5's criteria (no sub-machinery beyond a paragraph; every output element load-bearing for at least one downstream actor's decision).
  12. **Downstream consumer for scope-boundary perception** — what downstream operation/runner consumes the explicit-exclusion signal? Does it constrain Rephrase (don't drift into excluded areas)? Inform /surfacing (don't traverse into excluded regions of project state)? Inform loop disciplines (don't include excluded items in their territory)?
  13. **Substrate-compliance** — articulate is substrate-bounded (task statement + LLM general knowledge only). Scope-boundary perception must respect this — it perceives boundaries from the task statement and inquiry framing, NOT by fetching project state to determine what's-actually-excluded.

- **Deliverable shape:** meaning-layer decision: (a) yes/no on whether the current operation-set already covers scope-boundary perception; (b) if no, decision on what cognitive operation should perceive it + its essence + where it lives in the operation-set + its load-bearing downstream consumers; (c) if yes-but-insufficient, decision on what's missing and how to extend.

**Question statement:** Examining `devdocs/how_articulate_simple_should_be.md` and the 5 articulate_simple operations, does articulate_simple currently have a cognitive-operation mechanism for perceiving explicit user-declared scope-boundaries (what's IN vs what's OUT of scope), distinct from the intrinsic-to-the-task-statement scope perception that MQ1/MQ2/MQ3/MQ-aggregate-resolution already provide; and if not (or if insufficient), what meaning-layer commitment SHOULD it carry — what operation perceives it, what its essence is, where it lives, and what downstream consumers it constrains?

## Goal

- **Criterion:** Defensible meaning-layer decision grounded in: (a) the doc's current commitments + the 5 operations' essence; (b) the triggering failure case (task-define.md mis-scoped); (c) the intrinsic-vs-extrinsic scope-boundary distinction; (d) lightness preservation; (e) substrate-compliance; (f) clean downstream-consumer story.
- **Use case:** Inform the meaning-layer doc `devdocs/how_articulate_simple_should_be.md` with either (a) clarification that scope-boundary perception exists in current operations (with citation of where), or (b) addition of a new cognitive operation (or MQ-extension or enhancement) that perceives scope-boundaries.
- **Desired outcome:** Clear meaning-layer commitment on whether articulate_simple includes explicit scope-boundary perception as a cognitive operation, and if so what its essence is. The decision should prevent the next /MVLw inquiry on articulate_simple's structural-layer (or any other axis) from mis-scoping the way the prior one did.
- **What would fail:** (a) Concluding "current operations cover it" without naming WHICH operation perceives explicit-exclusion and how; (b) proposing a new operation that violates lightness or substrate-bounded principles; (c) confusing intrinsic-scope-boundary (MQ3's perception in Example C) with extrinsic-scope-boundary (user's task-define exclusion); (d) drifting to structural-layer (where the operation's spec field-names live) when the layer commitment is meaning; (e) failing to specify the downstream consumer of scope-boundary perception.

## Source Input

```text
u said for M4-m7 


⏺ /Users/ns/Desktop/projects/native/cognitive_harness/task-define/references/task-define.md

  That's the downstream spec the doc points to at §6 (line 454) and §9 (line 519). 464 lines. The folder name (task-define/)
  stays unchanged per the Bootstrap-lock-simplest deferral — only the file's content gets updated to match the current
  operation framing:

  - "Task-Define" → "Articulate" (operation name + verb-meaning)
  - "MultiScope" → "MultiDepth" + depth-of-meaning rendering + Fixed-2 schema (literal + purpose-wrapped) +
  INCLUDES-with-accuracy rule
  - "/Exploration" → "/surfacing" (upstream-discipline reference)
  - Scale-of-ambition rendering language → depth-of-meaning rendering vocabulary


but we are not caring about task-define.md anymore... we started from scratch and focusing only artituclate simple...


this error situtaion is what articulate simple should handle as well...


i guess what we care about and not care about should be stated somehow by articulate simple when we create a query.. do you understand me? lets check if we current devdocs/how_articulate_simple_should_be.md has such mechanism or not. and if we want to have how it should be (meaning layer)
```

## Scope Check

Question covers goal. The question targets (a) audit of current operations for scope-boundary perception, (b) decision on whether to add/enhance, (c) meaning-layer commitment if adding. Goal asks for grounded decision + use-case + desired outcome + negative-spec failure modes. Aligned.

Specific-vs-pattern check: the triggering failure case (task-define.md mis-scoped) is ONE concrete instance. The inquiry addresses the BROADER PATTERN — explicit-exclusion perception generally — which the task-define.md case illustrates. The meaning-layer decision applies to any explicit-exclusion case, not just task-define.md.

## Layer Commitment

**Primary layer: MEANING.** The user explicitly committed the layer at the end of the source input: *"if we want to have how it should be (meaning layer)"*. The question targets what articulate_simple IS as a cognitive operation — specifically whether its operation-set INCLUDES explicit scope-boundary perception as part of its essence, and what cognitive-operation type that perception is (perception / render / aggregation).

**Out of scope:**
- **Structural** (exact field names; spec section ordering; per-bundle output schema for scope-boundary — the artifact-shape concerns. If the meaning-layer decision adds an operation, structural-layer follows as a downstream inquiry).
- **Process** (when the LLM runs the new operation; runtime gates; how the LLM judges what's user-declared-excluded vs intrinsic-excluded — all process-layer; downstream of meaning commitment).

If meaning-layer decision is "add new operation" or "extend MQ2/MQ3", structural-layer and process-layer follow as separate inquiries.

## Synthesis Trigger

This inquiry does NOT consolidate / synthesize / roll up two or more prior outputs. It is a fresh meaning-layer inquiry on articulate_simple's operation-set. The doc `how_articulate_simple_should_be.md` is the artifact analyzed (single source). The triggering case from the prior inquiry `2026-06-06_09-58__articulate_simple_doc_structural_layer_deepdive` is referenced as motivation but not as a synthesis source. Synthesis Trigger does NOT fire.
