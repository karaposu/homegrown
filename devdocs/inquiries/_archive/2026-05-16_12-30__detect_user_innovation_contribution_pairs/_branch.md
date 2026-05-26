# Branch: Detect User-Innovation-Contribution Pairs

## Question
Which 10+ sequential pairs of inquiry folders in `devdocs/inquiries/` (and `devdocs/inquiries/_archive/`) exhibit the pattern: (a) first inquiry runs and produces a finding; (b) the user reads the finding and contributes their own innovation, correction, or shortcoming-identification; (c) a second, sequentially-related inquiry runs incorporating the user's contribution as its seed?

## Goal
A documented list of at least 10 such pairs, each with:
- Both inquiry paths (Prior + Follow-up).
- Evidence of the human innovation contribution (quoted from the second inquiry's Source Input, Changes from Prior section, or visible correction trigger).
- One-line characterization of what the user contributed (the kind of innovation: reframing / shortcoming-identification / counter-example / scope correction / mechanism objection / etc.).

The list serves as the evidence base for a FUTURE inquiry that analyzes "what is missing from the current `/innovate` discipline" by examining where humans had to step in with innovation that the discipline didn't generate on its own.

Operational test: a future agent reading this finding can pick any pair from the list, read both inquiries, see what kind of innovation the human brought, and start the analysis of why `/innovate` didn't surface that kind of innovation natively.

## Scope Check

Question covers goal: YES — the question targets pair-detection; the goal pins down the deliverable format.

Specific-vs-pattern: the user explicitly said "we should detect at least 10 such pairs. this is our job, just detect such pairs." The job is DETECTION (specific pair list), not the downstream analysis. The pattern (what kinds of human innovation surface) is a FOLLOW-UP inquiry's territory.

The detection uses both the main folder (`devdocs/inquiries/`) and the archive (`devdocs/inquiries/_archive/`). Strong signals of pair existence:
- Frontmatter keys: `refines:` / `corrects:` / `supersedes:` / `diagnoses:` pointing to a prior inquiry.
- `loop_diagnose__` prefix in inquiry IDs — these are explicitly user-correction-triggered diagnostic inquiries.
- `## Changes from Prior` sections containing "Revision trigger" with quoted user correction.
- `## Source Input` excerpts that reference a prior finding the user was reading.
- Sequential inquiry IDs (close timestamps) on related topics.

The pair-detection does NOT redefine `/innovate` — it produces evidence for a follow-up. No Layer Commitment trigger fires.

The pair-detection does NOT synthesize prior findings — the pairs are CITED as data, not CONSOLIDATED as commitments. No Synthesis Trigger fires.

The disciplines run lighter than usual:
- Exploration: heavy lift (grep, read, pattern-match across 57 + archive folders).
- Sensemaking: commits "what counts as a human-innovation-contribution pair" (criteria for the list).
- Decomposition: light — partition the pair-validation work.
- Innovation: produces the concrete pair list with evidence.
- Critique: adversarially validates each pair (is it really a human-innovation-contribution pair, or just a refinement chain without human-specific innovation?).
