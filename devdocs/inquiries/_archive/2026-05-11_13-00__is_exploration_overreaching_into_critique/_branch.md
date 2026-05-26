# Branch: Is Exploration Overreaching Into Critique?

## Question

In the most recent two /MVL+ runs (the 09-20 design inquiry and the 12-30 one-or-multiple-disciplines inquiry), the Exploration phase produced outputs that included **"Rejected: B, C, D, E, G with reasons"** — listing candidates and rejecting them with cost-benefit, project-convention, and structural arguments. **Is this Exploration doing more than it should — specifically, performing Critique-style rejection-with-verdict-reasoning that belongs to the Critique discipline rather than to Exploration's mapping mandate? If so, is the cause a SPEC issue (the explore.md spec doesn't strongly enough prevent this) or an EXECUTION issue (the AI did it wrong but the spec is fine)? Or is the rejection behavior actually appropriate for Exploration's "Confidence Map" component (which includes a "Confirmed absent" level)?**

## Goal

A clear diagnosis with operational consequence:

1. **Identify the spec-defined scope of Exploration.** What is Exploration's mandate (mapping, confidence-marking, frontier-tracking) and what is it explicitly NOT (evaluation, ranking, rejection-with-verdict-reasoning)?
2. **Examine the recent two Exploration outputs as evidence.** Specifically: the 09-20 inquiry's exploration.md and the 12-30 inquiry's exploration.md, both of which contain "Rejected: X with reason" verdicts. Classify each rejection by whether it falls within Exploration's mandate ("Confirmed absent" — the candidate doesn't exist as a viable region in the territory) or crosses into Critique's mandate (the candidate exists but is rejected on dimension criteria).
3. **Locate the boundary.** Where does Exploration's "Confirmed absent" end and Critique's "KILL with reasoning" begin? What's the structural test that distinguishes them?
4. **Determine the cause.** Spec-level (explore.md lacks an explicit anti-rejection guardrail) vs execution-level (the AI applied Exploration outside its mandate but the spec doesn't permit it). Or both. Or null (rejection within Exploration is structurally fine).
5. **Propose the fix.** If spec-level, what guardrail text should be added to explore.md (and where)? If execution-level, what's the application-time discipline reminder? If null, why does the appearance of overreach look misleading but actually conform?

The user must be able to act on the verdict — leave Exploration as is, add a spec guardrail, or apply an execution-time discipline reminder for future Exploration runs.

## Scope Check

Question covers goal: YES. The question asks whether Exploration is overreaching; the goal compiles the structural diagnosis plus the cause analysis plus the fix proposal.

**Specific-vs-pattern check:** the question cites TWO specific recent Exploration outputs (09-20 and 12-30) as evidence. The broader pattern is "is Exploration's possibility-mode behavior naturally drifting into evaluation?" Default reading: address the broader pattern with the two specifics as evidence. Exploration's possibility mode is the focus (artifact mode doesn't have the same risk because artifact mode finds existing things; rejection of an existing artifact is unnatural).

**Self-reference acuity:** this inquiry's Exploration phase will be running while the question is "is Exploration overreaching?" — a perfect meta-application opportunity. The Exploration phase MUST stay within mandate (mapping, confidence-marking; no rejection-with-verdict-reasoning). If this inquiry's Exploration phase itself produces rejection verdicts, that's strong evidence the issue is structural / spec-level rather than just historical.

## Required reads

- `homegrown/explore/references/explore.md` (the discipline spec; the canonical mandate definition).
- `homegrown/td-critique/references/td-critique.md` (the canonical Critique mandate for comparison — what's the boundary?).
- `devdocs/inquiries/2026-05-11_09-20__design_sensemaking_frame_exit_meta_categories/docarchive/exploration.md` (the 09-20 exploration output; contains 5 rejection verdicts).
- `devdocs/inquiries/2026-05-11_12-30__is_sensemaking_one_or_multiple_disciplines/docarchive/exploration.md` (the 12-30 exploration output; contains rejections B, C, D, E, G).

## Design constraints

- **The diagnostic must work despite self-reference.** This inquiry's Exploration phase will be analyzed by its own Critique phase. Mitigation: external anchoring at every load-bearing claim; the Exploration phase MUST stay strictly within mandate (test by checking that no candidate in this inquiry's Exploration gets a rejection verdict — only "in scope" or "confirmed absent" or "frontier" classifications).
- **Anti-confirmation-bias.** The user's framing ("maybe explore has premature actions") could prime confirmation. The diagnostic must be honest about the null hypothesis (rejection might actually be appropriate; "Confirmed absent" is a legitimate Exploration confidence level).
- **Honor the spec's existing structure.** Any proposed fix to `homegrown/explore/references/explore.md` should match its existing patterns (failure-mode-style notes; refinement notes; component descriptions).
- **Compare with Critique's mandate carefully.** The boundary between Exploration's "Confirmed absent" and Critique's "KILL" is the load-bearing distinction. Get it right.

## Relationships

- RELATED: `devdocs/inquiries/2026-05-11_09-20__design_sensemaking_frame_exit_meta_categories/finding.md` (one of the inquiries whose Exploration phase is being examined).
- RELATED: `devdocs/inquiries/2026-05-11_12-30__is_sensemaking_one_or_multiple_disciplines/finding.md` (the other inquiry whose Exploration phase is being examined).
- AFFECTS SPEC (potentially): `homegrown/explore/references/explore.md` — if a spec-level fix is warranted.
- AFFECTS PRACTICE (potentially): future Exploration runs' application-time discipline.
