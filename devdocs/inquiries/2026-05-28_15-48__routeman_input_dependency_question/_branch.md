# Branch: routeman_input_dependency_question

## Question

- **Subject** — routeman's input contract. Specifically: (a) does routeman strictly REQUIRE explicit input (state + goal) to operate, OR can it operate from ambient context (the conversation, the codebase, the project's current activity) without explicit input? (b) Is routeman dependent on the EXISTENCE of an `inquiries/` folder specifically, or is the inquiry-folder-as-input just ONE possible input shape among many (folder paths, raw text, conversation context, etc.)?
- **Action** — DIAGNOSE + CORRECT. The agent (Claude) previously claimed "without ANY input, routeman has nothing to enumerate from — the current state is undefined; the goal is undefined; the discipline can't operate without those." The user challenges this. The inquiry diagnoses whether the prior claim is accurate against routeman's actual spec + corrects any over-claim.
- **Level** — discipline-level (routeman's input contract specifically).
- **Observation targets** — preserved as separate items per LOOP_DIAGNOSE MC2 (the user's "why?" and "are you saying..." are two distinct sub-questions):
  1. **Input necessity** — does routeman strictly require explicit input to operate, or can it operate from ambient context (conversation, codebase, project state) without an explicit folder-path or raw-text input?
  2. **Inquiries-folder dependency** — is routeman specifically dependent on the existence of `devdocs/inquiries/` (or any inquiry-folder structure)? Or can it accept any folder (project root, codebase, canon docs, etc.) as input?
  3. **Prior agent claim re-examination** — the agent's prior framing said "without ANY input, routeman has nothing to enumerate." Is this accurate per the spec? Was it over-stated? If over-stated, what's the correct framing?
- **Deliverable shape** — a structural verdict per observation target, grounded in routeman's spec (SKILL.md + references/routeman.md). Verdict on whether the prior agent claim was correct, partially-correct, or wrong. Concrete corrected framing the user can use.

**Stated question:** Does routeman strictly need explicit input (state + goal) to operate, AND is it specifically dependent on the existence of an `inquiries/` folder — OR was the agent's prior framing over-claimed because routeman accepts multiple input shapes (folder paths to ANY folder, raw text, conversation context) and can operate at any scope as long as state + goal can be derived?

## Goal

- **Criterion** — a good answer: (a) reads the routeman SKILL.md + references/routeman.md spec directly to verify what the input contract actually says; (b) tests the prior agent claim against the spec (was it accurate?); (c) distinguishes "needs SOMETHING that supplies state + goal" (likely true) from "needs an inquiries folder specifically" (likely false); (d) gives the user a corrected framing they can use going forward.
- **Use case** — the user is questioning the agent's claim and may want to use routeman in non-inquiry contexts (project root, codebase analysis, etc.). The verdict determines whether those uses are spec-supported.
- **Desired outcome** — clarity on what routeman ACTUALLY requires as input + whether the agent's prior framing was correct or over-claimed.
- **What would fail** — an answer that: (i) defends the prior claim without re-reading the spec; (ii) over-corrects in the other direction (e.g., "routeman needs NOTHING" — also false); (iii) conflates the two observation targets (input necessity vs inquiries-folder dependency); (iv) doesn't engage with what routeman's SKILL.md actually says.

## Source Input

Preserved verbatim from the user's `/MVLw` invocation:

```text
/MVLw

routeman typed alone), routeman has nothing to enumerate FROM. The "current state" is undefined; the     
  "goal" is undefined. The discipline can't operate without those.        

why? 


are yousaying routeman is depended of existance of inquiries folder?
```

## Scope Check

Question covers goal: YES.

**Specific-vs-pattern check.** The user named the specific claim ("routeman typed alone has nothing to enumerate"). The broader pattern is "what is routeman's actual input contract?" Per the runner default + the user's clear intent to challenge a specific claim, address the broader pattern with the specific claim as the motivating case.

**Prior context — not synthesis.** This inquiry references the live routeman spec (cognitive_harness/routeman/SKILL.md + references/routeman.md) but does NOT consolidate priors. The Synthesis Trigger does NOT fire — this is a fresh diagnostic question, not a multi-prior synthesis.

**Layer Commitment check.** The question is NOT about redefining routeman; it's about reading routeman's existing spec accurately. No Layer Commitment fires.

## Relationships

- **CONTINUES FROM:** the conversation thread (no prior inquiry; the user's challenge surfaced during user-stories naming work).
- **RELATED:** `cognitive_harness/routeman/SKILL.md` (the runner spec; defines the input contract).
- **RELATED:** `cognitive_harness/routeman/references/routeman.md` (the discipline reference; defines Reception phase + input semantics).
- **RELATED:** `devdocs/routeman_user_stories.md` (the user-stories file where the framing originated; all 10 stories used "the inquiry folder" framing).
