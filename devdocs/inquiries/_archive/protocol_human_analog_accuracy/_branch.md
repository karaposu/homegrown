# Branch: protocol_human_analog_accuracy

## Question
Of the four human-mind analogs proposed for "protocols" in the prior conversation — external cognition (notebooks, calendars, bookmarks), sleep/memory consolidation, metacognitive inner speech, and conversation patterns — which one is the *most fundamental* analog given that the project's stated end-goal (`enes/desc.md`) is autonomous cognitive consciousness, and what does the answer imply about how protocols should be designed in the project's trajectory?

## Goal
A clear verdict on which analog (or which subset) is the most fundamental, with reasoning grounded in the project's stated end-goal of autonomous consciousness. The user should leave with: (a) a defensible answer to "which analog is most accurate?" — not just "all four are partially right"; (b) the implication for protocol design — does protocols-as-external imply the project permanently uses externalized machinery (files, state) and the consciousness layer never fully emerges, or does protocols-as-internal imply the externalized machinery is bootstrap-only and gets absorbed into the system's own consciousness layer over time?

## Scope Check
Question covers most of the goal. The "implications for protocol design" half of the goal is slightly wider than the literal question ("which is more accurate?"), but the implications follow naturally from the verdict — once you know which analog is fundamental, the design trajectory follows. I'll treat the implication as a near-extension of the verdict, not a separate scope item. If during execution the implication turns out to require its own SIC pass, I'll surface that as an iteration trigger rather than widen the scope now.

## Context
- The user's prior turn articulated an intuition: "notebooks etc are external and not fundamental — since we are trying to mimic human consciousness." This intuition is the seed; the inquiry's job is to test whether it survives rigorous analysis.
- The project's end-goal (`enes/desc.md`): autonomous cognitive consciousness reached via Baldwin cycles; the human's role MONOTONICALLY DECREASES from bootstrap (Level 0) toward full emancipation (Level 4+). This is a critical anchor — if protocols are modeled on external scaffolding, the system never fully emancipates from external machinery.
- The protocols dimension currently uses extensive externalization: filesystem-as-state, `_state.md`-as-source-of-truth, folder-as-thinking-structure. This is consistent with bootstrapping but creates an architectural commitment — once the system is built around external state, internalizing is a refactor, not a free transition.
- The four analogs from prior conversation:
  - **External cognition** — notebooks, calendars, bookmarks. Tools humans externalize because biological working memory is unreliable.
  - **Sleep / memory consolidation** — autonomic between-operations machinery; biology's internal scaffolding for the same need.
  - **Metacognitive inner speech** — "I'll come back to this," "let me focus on X first." Internal operational moves the cognitive layer makes about its own state.
  - **Conversation patterns** — turn-taking, "where were we?", HANDOFF/RESUME at the social/inter-mind level.
- The previous summary line said "protocols are to disciplines what your notebook, your calendar, and your sleep are to your thinking" — conflating internal and external. The user's pushback says this conflation is a defect.
- This inquiry should produce a non-binary answer if warranted (e.g., "internal is fundamental; external is bootstrap"), not just pick one of four.
