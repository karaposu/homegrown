---
status: active
---
# Finding: CONCLUDE Anchored-References Rule Gap

## Question

**From `_branch.md`:** Why did `/Users/ns/.claude/skills/protocols/conclude.md`'s non-ambiguity principle and anchored-references style rule fail to prevent internal category-IDs (D2, E1, E7, I2, O2, etc.) from leaking into `devdocs/inquiries/2026-05-10_03-50__navigation_established_audit/finding.md` — even though the rule explicitly addresses anchored references and non-ambiguity — and what is the structural fix to `conclude.md` that closes this gap without introducing new gaps?

**Goal:** a precise diagnosis plus a concrete, ready-to-apply text edit. The reader should understand the gap in 30 seconds, apply the fix in under 5 minutes, and trust the fix doesn't replace one gap with another.

## Finding Summary

- **The diagnosis is the introduction-gap** — labels indexing into a system the reader has not been introduced to. The rule's example covers labels indexed into structures the reader can SEE in the same section ("Item 3" of a numbered list); it does not cover labels indexed into a workspace scaffolding system the reader has never seen (Categories A through Q from exploration's tabular enumeration; piece labels P1 through P5 from decomposition; sense-version labels SV1 through SV6 from sensemaking; variant labels like P2-A from innovation).
- **There are two distinct failures, with two distinct upstream causes.** Failure-1 is rule scope: the rule's example doesn't cover scaffolding-IDs at all, so even perfect application would have missed the leak. Failure-2 is rule application drift: bare scaffolding-IDs appeared on subsequent references in the navigation-audit finding (its lines 160, 174, 198), where the rule's existing scope DID cover the case but the writer didn't apply it consistently.
- **The fix is two text edits to `conclude.md`.** The rule rewrite (replacing the existing Anchored references rule at lines 222-223) extends the rule's scope to cover scaffolding-IDs; the compile-step addition (inside Step 2, before saving the finding) introduces a self-enforcing scan that catches scaffolding-ID patterns automatically.
- **Self-enforcement is the load-bearing design choice.** The user's framing — "we had a rule for such ambigious phrases no? why it did not worked" — is exactly the failure mode this fix addresses. A rule that depends on the writer remembering it during compilation fails on busy passes; a numbered step that gets done as part of the protocol is self-enforcing.
- **The non-ambiguity principle (lines 64-67 of `conclude.md`) is sound and preserved.** The gap is at the operational level — the principle promises more than its operationalizing style rule and example deliver. The fix aligns the operational rule with the principle.

## Finding

This finding answers why a rule meant to prevent ambiguous label references didn't prevent the navigation-audit finding's leaked workspace identifiers, and proposes the concrete text changes that close the gap.

### Why the rule failed

The Anchored references style rule (`/Users/ns/.claude/skills/protocols/conclude.md` lines 222-223) is operationalizing the non-ambiguity principle (same file, lines 64-67). The principle says each sentence in the finding must be understandable to a reader with no prior exposure to the inquiry. The style rule says: when referring to a numbered item, named concept, or earlier decision, always include the short descriptive name on first use — "Item 3" alone is a defect; "Item 3 (the continuous-loop runner)" is correct.

That rule has two structural blind spots that together produced the leak.

The first blind spot is the **introduction-gap**: the rule's example assumes the label is positional inside a structure the reader can see in the same section. "Item 3" makes sense because "Item 3" indexes into a numbered list the reader is currently looking at; the parenthetical "(the continuous-loop runner)" decodes which item. But "D2 — 12 required fields per route" is not positional inside a visible structure. "D2" indexes into the category-letter convention from `exploration.md`, which has been archived to `docarchive/` and is invisible to the reader. Even though "12 required fields per route" decodes the label syntactically, the reader has no idea why a category letter exists at all, or what other categories there are. The rule fires (label paired with descriptive name) but the failure mode it was meant to prevent (reader can't decode references cold) still occurs.

The second blind spot is **rule-application drift**. The navigation-audit finding contains bare workspace identifiers without descriptive names attached on three subsequent references — `D2, E1, I2` on its line 160, `I2` and `D2` and `E1` on line 174, and the bare list `D2, E1, E7, I2, or O2` on line 198. At those lines, even the rule-as-written should have caught the defect. It didn't, because the rule's enforcement depends on writer vigilance during compilation. On busy passes the vigilance fails.

Both failures flow from the same blind spot — the rule-as-written doesn't eliminate the introduction-gap by construction; it relies on the writer to apply it correctly each time. A check that scans the finding before saving would close both gaps automatically.

### Fix A — Rule rewrite for `conclude.md` lines 222-223

Replace the existing Anchored references rule with:

```
**Anchored references.** When referring to a numbered item, named concept,
or earlier decision, always include the short descriptive name on first use
in each section AND on every subsequent reference, not just the label.
"Item 3" alone is a defect; "Item 3 (the continuous-loop runner)" is correct.

The rule covers two label shapes:

(a) **Positional labels** in a structure the reader can see in the same
section (e.g., "Item 3" of a numbered list). Pair with the descriptive name.

(b) **Workspace scaffolding labels** that index into a system the reader
has NOT been introduced to (e.g., category-letter IDs from exploration like
"D2", piece labels from decomposition like "P1", sense-version labels like
"SV6", variant labels like "P2-A"). Either drop the label entirely (use only
the descriptive name) or introduce the system explicitly in the same section.
Default: drop. The descriptive name reads cleaner; the label was workspace
convenience.
```

This preserves the original rule shape, adds the missing case explicitly, and the (a)/(b) tier-grouping makes the distinction visible without restructuring the surrounding prose.

### Fix B — Compile-step addition inside Step 2 of `conclude.md`

Inside Step 2 ("Compile the finding"), as a final paragraph before the existing quality test, add:

```
**Strip workspace scaffolding-IDs before saving.** Scan the finding for
discipline-workspace identifiers carried forward from the discipline
outputs. The patterns to look for:

- two-letter uppercase prefix + digit (e.g., `SV` + digit for sense-versions,
  `KI` + digit for sensemaking key-insights, `DV` + digit for decomposition
  versions, future similar conventions)
- `P` + digit (e.g., `P1`, `P5`) — decomposition piece labels
- `P` + digit + `-` + uppercase letter (e.g., `P2-A`, `P3-B`) — innovation
  variant labels
- single uppercase letter (A through K, M, N through Z — excluding L which
  is conventionally used for line-numbers in source-file references) + digit
  (e.g., `D2`, `E1`, `I2`, `O2`, `Q3`)
- letter+digit ranges (e.g., `A1-A3`, `J1-J8`, `P1-P9`)

Tokens matching `L\d+` (e.g., `L51`, `L121`, `L222`) are line-number
references to external files, not workspace scaffolding. Do NOT treat
them as defects.

For each match: replace the identifier with its descriptive name (the words
paired with it in the same paragraph), or — if the descriptive name alone
reads awkwardly — restructure the sentence to drop the reference. Do not
"introduce" the workspace system in the finding; the discipline workspaces
are archived to `docarchive/` precisely because they are workspace
conventions, not reader-facing.

Exception: positional labels inside a numbered list visible in the same
section of the finding (e.g., "Item 3" of a MUST list) may keep their
label, paired with the descriptive name per the Anchored references rule.

If matches remain after this scan, the finding fails the non-ambiguity
principle (above) and must be revised before saving.
```

### How to verify

After applying both edits, re-running CONCLUDE on a future inquiry should produce a finding that contains no leaked workspace identifiers. To verify on any finding:

```bash
grep -nE '\b(P[0-9]+(-[A-Z])?|SV[0-9]+|KI[0-9]+|DV[0-9]+|[A-KMN-Z][0-9]+)\b' \
  path/to/finding.md | grep -vE '\bitem [0-9]+\b'
```

The first grep captures workspace-scaffolding patterns while explicitly excluding `L\d+` (line numbers) by enumerating allowed first-letters as `[A-KMN-Z]`. The second grep removes legitimate "item N" positional references that are paired with descriptive names. There should be zero matches in a clean finding.

A finding that itself discusses workspace identifiers as its subject — the way this finding does — will produce grep matches because the identifiers are mentioned (as the topic) rather than used (as references to an unintroduced system). Those are legitimate per clause (b) of the rule rewrite, which permits identifiers when the system is introduced explicitly in the same section. The writer judges each match: is the identifier being USED as a reference to something the reader hasn't seen, or MENTIONED as the topic being discussed?

## Next Actions

### MUST

- **What:** apply Fix A — replace the Anchored references rule at lines 222-223 of `/Users/ns/.claude/skills/protocols/conclude.md` with the rewrite above.
  - **Who:** user (text edit; ~30 seconds with copy-paste).
  - **Gate:** before the next CONCLUDE run.
  - **Why:** without this, the next finding will leak scaffolding identifiers the same way.

- **What:** apply Fix B — add the strip-workspace-scaffolding paragraph inside Step 2 of `conclude.md`, before the existing quality test.
  - **Who:** user (text edit; ~1 minute).
  - **Gate:** before the next CONCLUDE run.
  - **Why:** Fix A gives the writer the right model; Fix B enforces it automatically. Without Fix B, the rule still depends on writer vigilance during compilation.

### DEFERRED

- **What:** decide whether to re-issue (correct) the navigation-audit finding at `devdocs/inquiries/2026-05-10_03-50__navigation_established_audit/finding.md` to strip its leaked workspace identifiers, or leave it as-is as historical record.
  - **Gate:** user decision; either path is reasonable.
  - **Why (if revived):** re-issuing produces a clean finding that matches the new convention; leaving as-is keeps the historical artifact intact and notes the leak in this finding's reasoning.

## Reasoning

Six fix-locations were considered during exploration:

- **Surgical example-add to the rule** — alone, addresses Failure-1 (rule scope) but not Failure-2 (application drift). Combined with the compile-step, it works. This is the chosen Fix-A shape.
- **Generalized rule rewrite** — runner-up to the surgical version for Fix-A. Rejected because the diff is larger and the existing rule shape works once the scaffolding-ID case is added.
- **New explicit CONCLUDE step** — chosen for Fix-B because it is self-enforcing. A numbered step in a protocol gets done as part of the protocol; a soft style rule depends on writer vigilance.
- **Tighten the existing quality test instead of adding a step** — close runner-up to the explicit step. Rejected because the quality test is itself dependent on the writer running it; tightening its wording doesn't change whether it fires.
- **Change discipline-output specs to ban workspace identifiers at source** — rejected because the identifiers serve real purpose during the discipline runs (cross-reference within workspace; sensemaking references "12 required fields" through its workspace label; critique tracks per-item refinements). The right separation is "useful in workspace, stripped at finding boundary," and the boundary lives at `conclude.md`, not at the discipline specs.
- **Strict prohibition of all identifiers in the finding** — rejected as overcorrecting. Useful intra-finding cross-references (numbered MUST lists where each item is referenced later, with the descriptive name attached) would die under a blanket ban.

The chosen pair — surgical rule rewrite plus explicit compile-step — is the smallest set of changes that closes both failures without introducing new gaps.

Two refinements were applied during critique. First, the strip-step's pattern list initially used the broader `[A-Z][0-9]+` pattern, which would have falsely flagged legitimate line-number references like `L121` in source-file citations (the navigation-audit finding contains exactly such a citation at its line 55). The fix excludes `L` explicitly by enumerating allowed first-letters as `A through K, M, N through Z`. Second, the pattern list initially missed two-letter prefixes like sensemaking's `KI` (key-insight) labels and decomposition's potential `DV` (decomposition-version) labels; the fix adds two-letter+digit coverage. Both refinements were verified by direct grep on the navigation-audit finding and on this inquiry's discipline outputs.

## Open Questions

### Refinement Triggers

- **If a future discipline introduces a multi-letter identifier convention** (e.g., a new discipline using `XYZ1` style labels), the strip-step's pattern list will need an addition. Trigger: a new discipline ships and produces identifiers that don't match the current pattern list.
- **If the false-positive exclusion list grows beyond `L`** (e.g., a future convention uses `K\d+` for line-numbers or some other source-file reference), the exclusion needs to expand. Trigger: a new external-reference convention is adopted.
- **If the strip-step proves vigilance-dependent in practice** (i.e., the writer skips it during CONCLUDE), the step may need to migrate into a tooling check (a script run automatically) rather than a procedural step. Trigger: a finding ships with leaks despite the step existing.

### Research Frontiers

- **Tooling-level enforcement.** The compile-step is a procedural enforcement; it can fail if the writer skips it. A scripted check (e.g., a `tools/conclude_lint.sh` that the user runs before declaring a finding complete) would be more robust. Out of scope for this fix; named for future consideration.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
/MVL+

Foreground — Challenge Candidates
Tier 1 — HIGH (HEURISTIC × bloat-source)
D2 — 12 required fields per route (iterated) [...]
E1 — 16-type taxonomy (iterated) [...]
E7 — Auto-derivable (12) vs human-judgment (4) partition [...]

what are D2 E1 E7 like values i dont understand , where they are coming from ?

we had a rule for such ambigious phrases no? why it did not worked can u check it ?
```

</details>
