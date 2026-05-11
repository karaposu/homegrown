# Branch: Discipline-corpus emerging pattern

## Question

Across the cumulative bolted-on rules, addendums, and cross-cutting checks added to the homegrown discipline specs over time, what unnamed pattern (or set of patterns) is emerging — and is there a corpus primitive, paradigm, or protocol hiding in plain sight that, once named and tidied, would make the corpus cleaner, easier to extend, and easier to maintain?

## Goal

Produce a finding that:
1. Names the strongest 1–3 emerging patterns (not yet named in the corpus) by examining how the disciplines have actually accreted refinements over time.
2. For each named pattern, proposes a concrete tidying artifact — a new corpus primitive, a new shared protocol, a placement-convention addendum, or a structural shape — that the user could choose to adopt or reject.
3. Distinguishes patterns that are "load-bearing and ready to formalize" from patterns that are "real but premature to formalize" (per the phase-fit caveat from `devdocs/inquiries/2026-05-08_17-23__discipline_spec_bloat_reasons/finding.md`).

The user should be able to read the finding and decide, per named pattern: *"yes, formalize it — here's the artifact I'll commission"* or *"interesting but not yet — defer with this revival trigger."*

## Scope Check

Question covers goal. Scope is the broader pattern (not the specific bolted-on rules), per the specific-vs-pattern check in the MVL+ scope rule. The user explicitly asked for "common pattern, before-undiscovered dimension, paradigm, protocol" — broader-pattern framing confirmed.

The inquiry covers all MVL+ relevant disciplines: explore, sense-making, decompose, innovate, td-critique, and (by extension) reflect / navigation as boundary disciplines, plus comprehend as the situational discipline that shares the pattern. The runners (MVL, MVL+) and protocols (CONCLUDE, RESUME, branch_inquiry, etc.) are read as supporting context, not as primary subjects.

The inquiry does NOT propose to ship any artifact in this run — the deliverable is named patterns + concrete proposals; commissioning artifacts is a follow-up materialization step under `homegrown/protocols/artifact_materialization.md`.

## Relationships

- RELATED: devdocs/inquiries/2026-05-08_17-23__discipline_spec_bloat_reasons/ (the prior inquiry that surfaced bolted-on rules as a phenomenon and proposed a deferred compression-discipline addendum; this inquiry asks the broader question that prior inquiry's frontier observations pointed at)

## Source Input

```
we made many tiny additions to thinking disciplines, these additions were to prevent
certain failures. So maybe you can compare original versions of disciplines and how
they were changed and tell me if there is common pattern, a before undiscovered
dimension, paradigm, protocol regarding them?

one thing i can think of is, just like conclude protocol help creating finding.md,
maybe we need per discipline output protocol?

but this is just one idea, probably there are more solid ideas

in my understanding in development we need constant cleaning and refactors, like
brushing your teeth every morning. And this is what i want you to do. Inspect all
MVL+ relevant disciplines and tell me if our current structure is pregnant to
something new? or something new is already there but it is not named or it is not
tidied..
```
