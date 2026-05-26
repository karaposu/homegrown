# Branch: materialization_relationship_to_mvl_loop

## Question

What is the right architectural relationship between the materialization protocol (`cognitive_harness/protocols/artifact_materialization.md`) and the `/MVL+` loop — is materialization a step appended after CONCLUDE (chained into /MVL+'s lifecycle as part of every inquiry that prescribes changes), or is it a separate process the /MVL+ loop can trigger (independently invokable, with /MVL+ as one possible trigger among others — for example Navigation outputs, direct user requests, or other future runners)?

## Goal

A verdict that commits to one architectural relationship — chained-step OR separate-triggerable-process — with structural reasoning. If chained, name the integration point in CONCLUDE and the failure modes of forcing materialization on every finding. If separate, name (a) the trigger contract that /MVL+ uses to hand off to materialization, (b) the alternative triggers (Navigation selections, direct user invocation, etc.), and (c) the visible state at the /MVL+ ↔ materialization boundary (what /MVL+ produces; what materialization consumes).

## Scope Check

Question covers goal — both ask the chained-vs-triggered architectural question with a concrete contract shape.

Specific-vs-pattern check: the question targets the specific materialization protocol's relationship with /MVL+. Principles surfaced (when a protocol should be a chained step vs. a triggerable process) may generalize to other protocol-to-runner architectural questions, but the verdict is example-bounded.

## Layer Commitment

**Primary layer: PROCESS.** The load-bearing question is how the steps arrange themselves — chained inside /MVL+ vs. separate triggerable protocol. This is a procedural-architecture decision.

Sequential plan:
1. **Process layer** (this inquiry): settle whether materialization is a chained-step or a separate-triggerable-process.
2. **Structural layer** (follow-on, conditional on the verdict): if triggered-separate, name the trigger contract shape (what /MVL+ writes; what materialization reads; how invocation happens).
3. **Meaning layer** (out of scope for THIS run): what materialization IS as a cognitive operation is partially settled by the existing `cognitive_harness/protocols/artifact_materialization.md`; not re-opening.

Other layers explicitly out of scope:
- **Meaning** — the existing 8-phase materialization definition (authorized source → normalize → classify → assess risk → select lifecycle mode → execute → validate → trace → outcome-review) is the operational definition; not under revision.
- **Structural** — addressed as a sub-deliverable IF the verdict is triggered-separate.
