# Branch: Discipline-spec apparent-bloat reasons

## Question
For each of the three apparent-bloat patterns identified in the homegrown discipline reference files (reference-loading boilerplate triplication; failure-mode triplication; bolted-on sub-rules inside numbered process steps), what is the load-bearing structural reason that justifies the pattern, and which (if any) are genuinely refactorable without losing that load-bearing function?

## Goal
Produce, per pattern, a verdict that either (a) names the load-bearing reason and the failure mode the pattern prevents — making the apparent bloat a defended choice — or (b) identifies a concrete refactor that preserves the load-bearing function while removing the redundancy. The user should be able to decide, per pattern, "keep as-is and document why" or "refactor along this specific path."

## Scope Check
Question covers goal. The question asks both for reasons (which justifies "keep as-is") and for refactorability (which justifies "change as follows"). The goal asks for the same per-pattern verdict.

Specific-vs-pattern check: the inquiry is scoped to the THREE specific patterns named in the prior turn (reference-loading boilerplate, failure-mode triplication, bolted-on sub-rules), not to the broader pattern of "how spec accretion happens in homegrown." This is deliberate per the user's framing ("there are reasons to the most bloat looking things"). If a broader generative pattern surfaces during synthesis, it can be flagged as a frontier question; the primary deliverable stays per-pattern.

## Source Input
The three patterns being investigated were named in the prior assistant turn (this conversation), summarized as:
1. **Reference-loading boilerplate triplication** — `SKILL.md` Step 0 pre-read note + `references/X.md` "Loading note" header + `SKILL.md` "Reference loading during execution" footer all telling the reader to load the reference file in full.
2. **Failure-mode triplication** — each `references/X.md` lists failure modes in the body section, then in the Summary table at the bottom; the corresponding `SKILL.md` adds a third parenthetical reminder.
3. **Bolted-on sub-rules inside numbered process steps** — late-added subsections like Sensemaking's "Load-bearing concept test" and "Specific-vs-pattern recognition cue" (Phase 3); Explore's "Type-Aware Probing" (Probe component); Decompose's "Determination-mechanism piece check" (Step 7); Td-critique's "Project-specific risk dimension check" (Phase 0) and "Multi-axis prosecution depth check" (Phase 2); Innovate's "Output disposition categories" and "Axis coverage check" (Phase 3) — apparent violations of `enes/discipline_rule_placement.md`'s Operation-or-Step-First placement convention.
