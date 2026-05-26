# Branch: CONCLUDE Anchored-References Rule Gap

## Question

Why did `/Users/ns/.claude/skills/protocols/conclude.md`'s non-ambiguity principle and anchored-references style rule fail to prevent internal category-IDs (D2, E1, E7, I2, O2, etc.) from leaking into the recently-completed `devdocs/inquiries/2026-05-10_03-50__navigation_established_audit/finding.md` — even though the rule explicitly addresses the failure mode it was meant to prevent — and what is the structural fix to `conclude.md` (or to discipline-output convention, or to CONCLUDE's compile step) that would close this gap without introducing new gaps?

## Goal

A precise diagnosis of WHY the rule failed (syntactic-vs-semantic gap; rule's example covers a different shape than the actual failure case) plus a concrete, ready-to-apply fix to `conclude.md` (or to the relevant adjacent spec). The user should be able to: (1) understand the gap in 30 seconds; (2) apply the fix immediately if they accept it; (3) trust the fix doesn't replace one gap with another.

The user's observed defect is: the finding contains text like "**D2 — 12 required fields per route**" — the descriptive name is paired with the label (so the rule fires syntactically), but the reader still doesn't know what the D-category is, why a letter+number ID exists at all, or where the system comes from. The rule's example ("Item 3 (the continuous-loop runner)" → "Item 3" alone is a defect; the parenthetical-decoded version is correct) covers a positional label inside a clearly-introduced numbered list. It does NOT cover a label that indexes into an internal category-system the reader has never seen.

## Scope Check

Question covers goal. The question asks for both diagnosis and fix; the goal extends to making the fix immediately applicable without introducing new gaps.

**Specific-vs-pattern check:** This is about the SPECIFIC rule in `conclude.md` and the SPECIFIC failure case in the navigation-audit finding. But the underlying pattern — internal scaffolding-IDs leaking from discipline workspaces into reader-facing artifacts — is a general one and may apply to other discipline outputs (exploration tables with letter+number IDs, decomposition's piece labels P1-P5, sensemaking's SV1-SV6, etc.). The pattern reading is the more useful one. **Default: address the broader pattern (internal scaffolding leaks generally, with the D2/E1/E7 case as the concrete instance).** If the user prefers narrower scope, they can redirect.

**Anti-bloat constraint:** this is a small protocol-fix question. The finding should be tight — diagnosis in <1 paragraph, fix in <10 lines, reasoning in <1 paragraph. The user just-completed a navigation audit explicitly framed as anti-bloat; replicating bloat here would be ironic and self-defeating.

**Self-reference notes:** This inquiry runs inside MVL+. It evaluates a CONCLUDE protocol that compiles MVL+'s own output. The rule's own author (the CONCLUDE protocol writer) likely had a specific failure-mode in mind that didn't anticipate the internal-IDs-from-discipline-workspaces case. Surface honestly any cases where the diagnosis depends on the loop's own framework.

## Relationships

- CORRECTS: `devdocs/inquiries/2026-05-10_03-50__navigation_established_audit/finding.md` (the finding whose D2/E1/E7 IDs triggered this question; correction will likely require either re-issuing that finding without IDs or adding a category-system explainer)
- RELATED: `/Users/ns/.claude/skills/protocols/conclude.md` (the spec being diagnosed)
- RELATED: discipline-output conventions in `/Users/ns/.claude/skills/explore/`, `/Users/ns/.claude/skills/decompose/`, `/Users/ns/.claude/skills/sense-making/` (which produce the scaffolding IDs that leak)

## Source Input

```
/MVL+

[user pasted the foreground tier-1 from finding.md]

what are D2 E1 E7 like values i dont understand , where they are coming from ?

we had a rule for such ambigious phrases no? why it did not worked can u check it ?
```
