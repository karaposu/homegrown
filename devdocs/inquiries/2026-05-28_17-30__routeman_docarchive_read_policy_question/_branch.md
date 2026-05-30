# Branch: routeman_docarchive_read_policy_question

## Question

- **Subject** — routeman's input read-policy when invoked on a CONCLUDED `/MVLw` inquiry folder. Specifically: does routeman read the 5 archived discipline outputs in `docarchive/` in addition to `finding.md` + `_branch.md`?
- **Action** — DIAGNOSE + CORRECT. `devdocs/routeman_user_stories.md` Story 1 explicitly lists `docarchive/` as part of routeman's input ("The 5 archived discipline outputs in `docarchive/` — supplementary cycle content"). The user suspects this is inaccurate per the spec's read-policy and that it would unnecessarily bloat navigation-session context. The inquiry checks the claim against `cognitive_harness/routeman/references/routeman.md` §3.2 read-policy and produces a corrective if warranted.
- **Level** — discipline-level (routeman's read-policy details when input is a concluded inquiry folder). Touches user_stories illustration and potentially the spec text itself.
- **Observation targets** — preserved as separate items per LOOP_DIAGNOSE MC2 (the user's input has three distinct semantic clauses — the spec-accuracy question, the cost-of-bloat claim, and the alternative-policy recommendation — all of which must be carried into Question/Goal):
  1. **Spec accuracy of Story 1's claim** — what does the read-policy at `references/routeman.md` §3.2 actually say about `docarchive/`? Is it MANDATORY / MANDATORY-WHEN-AVAILABLE / SHOULD / MAY / unmentioned? Is the Story 1 claim consistent, over-claimed, or under-claimed relative to the spec?
  2. **Cost of reading docarchive (navigation-session bloat)** — what is the context-cost of reading 5 discipline outputs per inquiry in navigation-session contexts (Story 5 aggregates 3 workers; reading 5×3=15 discipline outputs PLUS 3 findings PLUS 3 _route.md PLUS state context)? Is this cost structurally problematic, and at what scale (single inquiry, multi-head, long-running navigation)?
  3. **The alternative-policy recommendation** — is the user's proposal ("routeman only should read finding.md") spec-consistent, spec-violating, or spec-extending? CONCLUDE is supposed to consolidate cycle content into finding.md precisely so downstream consumers don't have to re-read raw discipline outputs; if that's the design intent, the alternative is the right policy and the docarchive read is redundant.
  4. **Structural rationale for OR against reading docarchive** — under what conditions, if any, would reading docarchive supply load-bearing information that finding.md doesn't? E.g., a discipline output that surfaces an item NOT promoted into finding.md but relevant to routeman's enumeration — does such a case exist, and if so is it common enough to justify the cost?
- **Deliverable shape** — a structural verdict per observation target: spec citation for the read-policy on docarchive; verdict on Story 1's claim (accurate / over-claimed / under-claimed); cost-benefit analysis on context bloat; the corrected policy + corrective edits to Story 1 (and the spec if needed).

**Stated question:** Does routeman read the 5 archived discipline outputs in `docarchive/` in addition to `finding.md` when invoked on a concluded `/MVLw` inquiry folder per the spec at `references/routeman.md` §3.2 — and is the Story 1 claim that it does accurate, or is the user's suspicion correct that this bloats navigation-session context unnecessarily because `finding.md` (the consolidated output of CONCLUDE) is sufficient?

## Goal

- **Criterion** — a good answer: (a) cites `references/routeman.md` §3.2 read-policy verbatim on what routeman reads from a concluded inquiry folder; (b) explicitly classifies `docarchive/` under one of the 4 read-policy tiers (MANDATORY / MANDATORY-WHEN-AVAILABLE / SHOULD / MAY) or notes its absence from the policy; (c) reconciles the Story 1 claim with the spec verdict; (d) quantifies (at least qualitatively) the navigation-session bloat cost; (e) produces a concrete corrective for Story 1's input list and identifies whether the spec needs amendment.
- **Use case** — the user wants Story 1 (and any downstream-affected docs) to accurately represent routeman's input contract without over-claiming reads that would bloat context. The verdict determines whether to amend Story 1 only, the spec only, or both.
- **Desired outcome** — a clear, spec-grounded answer about whether routeman reads docarchive; if it doesn't (or shouldn't), a corrected Story 1 input list that drops the docarchive line; if it does (or should), a rationale that addresses the bloat concern explicitly.
- **What would fail** — an answer that: (i) defends Story 1's current claim without re-checking the spec; (ii) generalizes to a sweeping "routeman reads everything" or "routeman reads nothing" without distinguishing the inquiry-folder shape from other shapes; (iii) ignores the navigation-session cost dimension; (iv) over-amends the spec when only Story 1 needs amendment (or vice versa).

## Source Input

Preserved verbatim from the user's `/MVLw` invocation:

```text
in devdocs/routeman_user_stories.md u said 

- The 5 archived discipline outputs in `docarchive/` — supplementary cycle content.
is also read. 

i am suspicious. this will bloat the naviation session context.. routeman only should read finding.md imo

lets discuss this further
```

## Scope Check

Question covers goal: YES. The question asks about the read-policy specifically; the goal asks for a verdict + corrective; the four observation targets cover spec accuracy, cost, alternative-policy, and structural rationale.

**Specific-vs-pattern check.** The question is anchored on a specific claim in Story 1 of user_stories.md, but the BROADER PATTERN is routeman's read-policy on docarchive in any concluded-inquiry-folder invocation. Per the runner default + the user's intent ("routeman only should read finding.md imo" — a general policy claim, not a Story-1-only edit), address the broader pattern. The Story 1 correction is one downstream consequence; the load-bearing question is the policy itself.

**Prior context — not synthesis.** This inquiry uses the routeman spec (`SKILL.md` + `references/routeman.md` §3.2) as live reference but does NOT consolidate priors. The Synthesis Trigger does NOT fire — this is a fresh diagnostic question, not a multi-prior synthesis.

**Layer Commitment check.** The question is NOT about redefining routeman; it asks what the spec already says about a specific input element, and whether the user_stories illustration matches. If the spec is silent or under-specified on docarchive, the inquiry may recommend a small spec amendment — but the inquiry's primary frame is diagnostic (read the spec accurately), not from-scratch redefinition. No Layer Commitment fires.

## Relationships

- **CONTINUES FROM:** the conversation thread following the `routeman_input_dependency_question` inquiry. The Q6 amendment was just applied to `routeman_user_stories.md`; the user is now scrutinizing the existing content of Story 1.
- **RELATED:** `cognitive_harness/routeman/SKILL.md` (the runner spec entry point).
- **RELATED:** `cognitive_harness/routeman/references/routeman.md` §3.2 Reception + Read-Policy Vocabulary (the 14-49 amendment's 4-tier policy: MANDATORY / MANDATORY-WHEN-AVAILABLE / SHOULD / MAY).
- **RELATED:** `devdocs/routeman_user_stories.md` Story 1 (the specific claim being scrutinized).
- **RELATED:** `/Users/ns/.claude/skills/protocols/conclude.md` (the protocol that decides what finding.md should contain and what gets archived to docarchive).
- **RELATED:** `devdocs/inquiries/2026-05-28_15-48__routeman_input_dependency_question/finding.md` (the immediately-prior finding on routeman's input contract — establishes the two-axis frame this inquiry refines a detail of).
