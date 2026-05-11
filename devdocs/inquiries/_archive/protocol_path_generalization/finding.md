---
status: active
refines: devdocs/inquiries/telemetry_routing_protocol_classification/finding.md
---
# Finding: protocol_path_generalization

## Changes from Prior

REFINES `devdocs/inquiries/telemetry_routing_protocol_classification/finding.md`. The prior finding extracted RESUME as a protocol (CONCLUDE-style) and recommended its install layout under `~/.claude/skills/protocols/`. This inquiry refines the **loading mechanism** — how MVL/MVL+ SKILL.md tell the agent where to find the protocol file across install contexts (Claude install, Codex user install, Codex repo install, in-repo homegrown).

**What's preserved:**
- The prior finding's central verdict (CONCLUDE and RESUME as extracted protocols at `homegrown/protocols/`) STANDS.
- The install layout (skills as siblings of a `protocols/` folder) STANDS in all 4 install contexts.
- The 11-piece punch list of the prior `telemetry_routing_protocol_classification` finding for RESUME extraction is unaffected.
- The user's rejection of "protocols-as-skills" (Option F) is preserved.

**What's changed:**
- The **loading-mechanism wording in MVL/MVL+ SKILL.md** changes from "enumerate-and-try multiple install paths" (current state — Option A from this inquiry's exploration) to **"single literal in-repo path, with install scripts performing sed substitution at install time"** (Option C). This eliminates runtime path-iteration and produces a deterministic single path per install context.
- `install_for_claude.sh` gains a one-line sed pipe in its skills_no_refs loop (only for MVL and MVL+; other skills don't reference protocols).
- `install_for_codex.sh`'s `install_skill_md` function is extended with an optional third argument that opts in MVL and MVL+ to mode-aware sed substitution.

**What's new:**
- This inquiry establishes the **install-time path-substitution pattern** for shared protocol files. Any future protocol added to `homegrown/protocols/` and referenced by SKILL.md will use the same pattern.
- The pattern is explicit about what's in the SKILL.md source (the in-repo path) versus what's in each installed copy (the install-target path). Source-of-truth integrity is preserved: there is one canonical `homegrown/protocols/conclude.md` (and `resume.md`) in source.
- The pattern uses `${HOME}` rather than literal `~` in the substitution, so the installed SKILL.md contains absolute paths that don't depend on tilde expansion at agent read-time.

**Migration:** Apply the 7-piece punch list in this finding's Next Actions. ~16 lines edited across 6 files. ~25-40 min focused editing + verification.

## Question

From `_branch.md`:

> How should the path-resolution problem for protocol files (`conclude.md`, `resume.md` — loaded by `MVL`/`MVL+` SKILL.md) be generalized so the SKILL.md works correctly across all install contexts (Claude install at `~/.claude/skills/protocols/`, Codex user install at `~/.codex/skills/protocols/`, Codex repo install at `.codex/skills/protocols/`, in-repo at `homegrown/protocols/`) without requiring runtime iteration through multiple paths and without breaking the project's source-controlled-markdown / no-build-step pattern?

**Goal:** A defensible architectural verdict on which approach to use, with concrete migration steps: (1) verdict on the approach (one of: enumerate-and-try, `..`-relative, sed substitution, bundle in skill folder, inline); (2) migration plan; (3) reconciliation with prior decisions (the just-completed `telemetry_routing_protocol_classification` finding's RESUME extraction).

## Finding Summary

- **Verdict: Option C (installer-time sed substitution).** Source `MVL`/`MVL+` SKILL.md uses a single literal in-repo path: `homegrown/protocols/conclude.md`. Each install script (`install_for_claude.sh`, `install_for_codex.sh`) runs a sed substitution during file copy that rewrites this path to the install-target's protocols path. The result: each installed SKILL.md contains a single literal absolute path correct for that install context. No runtime iteration, no agent path-resolution magic, no source-level duplication.

- **The 4 install contexts produce isomorphic filesystem structure.** Claude install (`~/.claude/skills/`), Codex user install (`~/.codex/skills/`), Codex repo install (`.codex/skills/`), and in-repo execution (`homegrown/`) all place skill folders as siblings of a `protocols/` folder. The relative path from any installed `MVL/SKILL.md` to its corresponding `protocols/conclude.md` is identical across all 4 contexts: `../protocols/conclude.md`. This isomorphism is what makes a uniform substitution pattern possible.

- **Option B (`..`-relative path) is rejected on risk grounds.** A single path `../protocols/conclude.md` would work in all 4 contexts IF the agent's path-resolution supports `..` (escaping the skill folder). However, the existing references/<file>.md pattern across all 8 homegrown skills uses ONLY inside-folder relative paths — none use `..`. So `..`-resolution is unvalidated. The failure mode is hard (file-not-found = full CONCLUDE/RESUME failure on every invocation). When a reliable alternative (Option C) exists, accepting binary risk for marginal cleanliness benefit is bad architecture.

- **Option D (bundle protocols inside each skill folder) is rejected on architectural-principle grounds.** Bundling per-skill produces N copies of each protocol (one per runner: MVL, MVL+, future runners), which contradicts the deduplication principle that motivated protocol extraction in the first place. The protocols/desc.md doctrine explicitly extracted these protocols specifically TO have a single canonical home. D matches the path STRUCTURE of references/<file>.md but violates the deeper deduplication PRINCIPLE. The principle is more load-bearing.

- **Options A and E are user-rejected.** A (enumerate-and-try) was the current state pre-this-inquiry; user rejected it on iteration cost. E (revert protocol extraction by inlining the protocol into MVL/MVL+ SKILL.md) regresses three prior findings (`extract_conclude_to_homegrown`, `synthesize_vs_finding_split`, `telemetry_routing_protocol_classification`) and adds ~544 lines of duplication.

- **Option C with a critical correctness REFINE: use `${HOME}` not literal `~`.** The naive sed `s|homegrown/protocols/|~/.claude/skills/protocols/|g` would embed a literal `~` character in the installed SKILL.md, which the agent's Read tool may or may not expand. The reliable form uses `${HOME}` expansion at install time: `sed "s|homegrown/protocols/|${HOME}/.claude/skills/protocols/|g"` (note: double quotes around the sed expression to allow `${HOME}` substitution). The result is a literal absolute path like `/Users/ns/.claude/skills/protocols/conclude.md` in the installed SKILL.md. For Codex installs, `$TARGET` is already mode-aware and includes expanded `$HOME`, so `${proto_target}/` works directly.

- **Migration is bounded: ~16 lines edited across 6 files in ~25-40 min.** 7-piece punch list across 4 phases: (Phase 1) revert MVL/MVL+ SKILL.md path wording to single in-repo path + re-sync homegrown from commands; (Phase 2) add sed substitution to both install scripts; (Phase 3) verify via dry-run; (Auxiliary) update the failure-mode message in resume.md to drop redundant path enumeration. The prior `telemetry_routing_protocol_classification` finding's RESUME-extraction punch list is unaffected; this finding is purely a refinement of the loading-mechanism wording and install-script logic.

## Finding

### 1. The path-resolution problem and why it has 5 candidate solutions

When `/MVL` or `/MVL+` is invoked and reaches its iteration-complete-yes branch, the SKILL.md content tells the agent to "load the CONCLUDE protocol file and execute it." For this instruction to work, the agent needs a concrete file path. The complication: the protocol file lives at different absolute paths depending on how the project was installed.

The 4 install contexts produce these layouts (per exploration Cycle 1):

| Context | SKILL.md path | Protocol path |
|---|---|---|
| Claude install | `~/.claude/skills/MVL/SKILL.md` | `~/.claude/skills/protocols/conclude.md` |
| Codex user | `~/.codex/skills/MVL/SKILL.md` | `~/.codex/skills/protocols/conclude.md` |
| Codex repo | `<repo>/.codex/skills/MVL/SKILL.md` | `<repo>/.codex/skills/protocols/conclude.md` |
| In-repo | `homegrown/MVL/SKILL.md` | `homegrown/protocols/conclude.md` |

The structures are **isomorphic** — skills always live as siblings of the `protocols/` folder. So the relative path from SKILL.md to protocol is `../protocols/conclude.md` in every case.

The 5 candidate solutions to the path-resolution problem (per exploration Cycle 4):

- **Option A — Enumerate-and-try:** SKILL.md lists multiple paths in flowing prose; agent iterates through them until one resolves. The current state of MVL/MVL+ SKILL.md prior to this finding. **User rejected on iteration cost.**

- **Option B — `..`-relative path:** SKILL.md uses a single path `../protocols/conclude.md`. The path is identical across all 4 contexts (per the isomorphism). Works IF the agent's path-resolution allows `..` (escape from the skill folder). **Unvalidated by existing pattern.**

- **Option C — Installer-time sed substitution:** Source SKILL.md uses a literal in-repo path `homegrown/protocols/conclude.md`; install scripts substitute with the install-target path during file copy. Each installed SKILL.md contains a single literal absolute path for its context. **Proposed verdict.**

- **Option D — Bundle protocols inside each skill folder:** install scripts copy the protocol into each runner's skill folder; SKILL.md uses an inside-folder relative path `protocols/conclude.md`. Matches the path structure of `references/<file>.md` (which is proven). **Rejected on deduplication grounds.**

- **Option E — Revert the extraction:** inline the full protocol text back into MVL/MVL+ SKILL.md. ~544 lines duplicated across 4 files. **Regressive.**

### 2. Why Option C wins

The decision converges on Option C through a structural elimination:

**Option A is user-rejected.** The user explicitly stated runtime iteration is "not really cool" — the system invokes CONCLUDE at every iteration-complete-yes; iterating through dead paths is wasted work.

**Option E is regressive.** Three prior findings (`extract_conclude_to_homegrown`, `synthesize_vs_finding_split`, `telemetry_routing_protocol_classification`) established the protocol-extraction architecture. Reverting it would invalidate those decisions and add ~544 lines of duplication across MVL.md / MVL+.md / homegrown/MVL/SKILL.md / homegrown/MVL+/SKILL.md. The benefit (zero path-resolution complexity) doesn't justify the architectural regression.

**Option B is rejected on risk-vs-benefit grounds.** The exploration's Cycle 2 finding is decisive: across all 8 existing homegrown skills (sense-making, innovate, td-critique, explore, decompose, comprehend, reflect, navigation), the references/<file>.md pattern uses ONLY inside-folder relative paths. None use `..`. So `..`-escape paths are genuinely unvalidated by the project's own pattern. The agent's tool support for `..` is undocumented and could vary across platforms (Claude Code vs Codex vs future runners). The failure mode is hard: file-not-found → CONCLUDE/RESUME completely fails on every invocation. When Option C is a reliable alternative with comparable cost, accepting binary risk for marginal cleanliness benefit is bad architecture.

**Option D contradicts deduplication.** This is the subtle one. Bundling protocols inside each skill folder mirrors the path structure of `references/<file>.md` (which IS proven), so the surface argument is "matches the existing pattern." But the deeper analysis: references/<file>.md content is **per-skill content** (each skill's references file is unique to that skill — sense-making's framework, innovate's mechanisms, etc.). Protocols are **shared content** (the same CONCLUDE protocol is invoked by both MVL and MVL+ and any future runner). The protocols/desc.md doctrine extracted CONCLUDE and RESUME specifically to have **a single canonical home** that multiple consumers reference. Bundling per-skill produces N copies (one per runner), undoing the extraction's deduplication purpose. D matches surface structure but violates the principle the structure was designed to serve.

**Option C wins** because it preserves all relevant principles:
- **Source-of-truth integrity:** a single canonical `homegrown/protocols/conclude.md` and `homegrown/protocols/resume.md`.
- **Deterministic post-install path:** each installed SKILL.md contains a literal absolute path for its install context. No runtime iteration. No agent-resolution dependency.
- **In-repo correctness:** the source SKILL.md uses the in-repo path which works as-is when read directly from the homegrown source.
- **Cross-platform simplicity:** sed via stdin/stdout (no `-i` flag) handles macOS BSD sed and Linux GNU sed without issue.
- **Future-platform extensibility:** adding a new install platform = adding ~1 sed rule to that platform's installer.

The only "complexity" cost is one sed line per install script (~3 lines added to install_for_claude.sh; ~6 lines added to install_for_codex.sh's `install_skill_md` function). This is install-time transformation — consistent with the pattern install_for_codex.sh already uses (it wraps SKILL.md content in YAML frontmatter during install). The "no-build-step" project pattern is preserved; users still run `curl ... | bash`.

### 3. The `${HOME}` correctness REFINE (critical from critique)

The naive sed pattern `sed 's|homegrown/protocols/|~/.claude/skills/protocols/|g'` (with single quotes) embeds a literal `~` character in the installed SKILL.md. The agent's tool that later reads this path may or may not expand the tilde:

- **Bash command substitution at parse time:** expands `~` to home dir. ✓
- **`Read` tool with `file_path` argument:** behavior depends on implementation. Some tools expand `~`; some treat it as a literal directory name. **Not universally guaranteed.**

The reliable form uses `${HOME}` expansion at INSTALL TIME (so the substitution writes a literal absolute path into the installed SKILL.md, no later expansion needed):

```bash
sed "s|homegrown/protocols/|${HOME}/.claude/skills/protocols/|g"
```

(Note: double quotes around the sed expression. `${HOME}` expands to the literal absolute home dir at install time, so the resulting installed SKILL.md contains e.g. `/Users/ns/.claude/skills/protocols/conclude.md` — no tilde, no later expansion needed.)

For Codex installs, the script's `$TARGET` variable is already computed with `$HOME` expanded (`$HOME/.codex/skills` for `--user`; `$(pwd)/.codex/skills` for `--repo`). So `${TARGET}/protocols` is already an absolute path; the sed using `${proto_target}` (where `proto_target="$TARGET/protocols"`) is correct as-is.

This REFINE is critical: without it, a literal `~` could end up in the installed SKILL.md and produce a broken path at agent read-time. With `${HOME}` expansion at install-time, the path is literal absolute and reliable across all tools.

### 4. The 4 install contexts and their resulting installed SKILL.md path

Post-migration, each install context produces a SKILL.md with a single literal correct path:

| Install context | sed substitution applied | Resulting path in installed SKILL.md |
|---|---|---|
| Claude install (`install_for_claude.sh`) | `s\|homegrown/protocols/\|${HOME}/.claude/skills/protocols/\|g` | `/Users/<name>/.claude/skills/protocols/conclude.md` (literal absolute) |
| Codex user (`install_for_codex.sh --user`) | `s\|homegrown/protocols/\|${HOME}/.codex/skills/protocols/\|g` (via `${proto_target}`) | `/Users/<name>/.codex/skills/protocols/conclude.md` (literal absolute) |
| Codex repo (`install_for_codex.sh --repo`) | `s\|homegrown/protocols/\|<pwd>/.codex/skills/protocols/\|g` | `/path/to/project/.codex/skills/protocols/conclude.md` (literal absolute) |
| In-repo (no install) | (no substitution; source path is correct) | `homegrown/protocols/conclude.md` (literal repo-relative; resolves from project root) |

In all four cases, the agent reads the SKILL.md and sees ONE concrete path. No iteration. No fallback. No `..` traversal. No tilde expansion at read-time.

### 5. Reconciliation with the prior `telemetry_routing_protocol_classification` finding

That finding (which extracted RESUME as a protocol following the CONCLUDE precedent) recommended the install layout under `~/.claude/skills/protocols/` and produced an 11-piece punch list for the RESUME extraction itself. Its central verdict (RESUME-as-extracted-protocol) STANDS.

What this finding refines: the LOADING MECHANISM. The prior finding implicitly assumed the resume.md (and conclude.md) would be referenced from MVL/MVL+ SKILL.md via a specific path. The mechanism for that reference is what this finding addresses.

Specifically:
- **Before this finding:** MVL/MVL+ SKILL.md wording was Option A (enumerate-and-try multiple install paths in prose). User rejected.
- **After this finding:** MVL/MVL+ SKILL.md wording is single in-repo path; install scripts substitute. Option C.

The prior finding's punch list is unaffected. Specifically:
- Phase 1 of the prior finding (5 disciplines + reflect get standardized telemetry) is independent of this inquiry.
- Phase 2 of the prior finding (create `homegrown/protocols/resume.md`) was already done — the file exists at ~164 lines.
- Phase 3 of the prior finding (`/MVL` and `/MVL+` load+execute resume.md) was reverted earlier in the session — `/MVL`/`/MVL+` don't currently invoke RESUME because their auto-chain pattern doesn't gate on FLAG/RE-RUN. If/when that changes, this finding's path-substitution mechanism applies.

For CONCLUDE: this finding's path-substitution mechanism applies NOW. The current MVL/MVL+ SKILL.md content references CONCLUDE. The Phase 1 of this finding's punch list reverts the wording to a single literal in-repo path; Phase 2 adds the sed substitution to install scripts.

### 6. The migration plan summary

Phase-by-phase, with dependencies:

**Phase 1 — Source SKILL.md (sequential waves):**
- Wave 1 parallel (Pieces 1a, 1b): edit `commands/MVL.md` and `commands/MVL+.md` to replace the dual-path enumeration with a single literal in-repo path.
- Wave 2 parallel (Pieces 2a, 2b): `cp commands/MVL.md homegrown/MVL/SKILL.md` and `cp commands/MVL+.md homegrown/MVL+/SKILL.md` to mirror Wave 1.

**Phase 2 — Install scripts (parallel after Phase 1):**
- Piece 3: extend `install_for_claude.sh`'s skills_no_refs loop with sed pipe (only for MVL and MVL+).
- Piece 4: extend `install_for_codex.sh`'s `install_skill_md` function with a third optional argument that opts in MVL and MVL+ to mode-aware sed substitution.

**Phase 3 — Verification (parallel after Phase 2):**
- Piece 5: dry-run `install_for_claude.sh`; verify literal absolute path in installed SKILL.md.
- Piece 6: dry-run `install_for_codex.sh --repo`; verify literal absolute path in installed SKILL.md.

**Auxiliary (anytime):**
- Piece 7: update `homegrown/protocols/resume.md` line 160 failure-mode message to drop redundant path enumeration.

**Total: ~16 lines edited across 6 files. ~25-40 min.** Specific proposed wording for each piece is in `innovation.md` (in the docarchive after this finding is written) and in this finding's Next Actions section below.

### 7. Resulting architecture post-migration

**Source layout (unchanged):**
- `homegrown/protocols/conclude.md` — single canonical CONCLUDE protocol (~223 lines).
- `homegrown/protocols/resume.md` — single canonical RESUME protocol (~164 lines).
- `commands/MVL.md` and `homegrown/MVL/SKILL.md` — same content (218 lines), reference `homegrown/protocols/conclude.md`.
- `commands/MVL+.md` and `homegrown/MVL+/SKILL.md` — same content (227 lines), reference `homegrown/protocols/conclude.md`.

**Install behavior (refined):**
- `install_for_claude.sh`: copies skills as before; for MVL and MVL+ specifically, pipes downloaded SKILL.md content through `sed "s|homegrown/protocols/|${HOME}/.claude/skills/protocols/|g"` before writing.
- `install_for_codex.sh`: same pattern, mode-aware (uses `$TARGET/protocols` which is already mode-correct).

**Runtime behavior:**
- User invokes `/MVL` or `/MVL+` → agent loads SKILL.md → sees single literal path → reads protocol file → executes.
- No iteration, no fallback, no path-resolution magic.

**Doctrine alignment:**
- protocols/desc.md doctrine: protocols are extracted (single canonical home). ✓
- Source-of-truth principle: one canonical protocol file per protocol. ✓
- No-build-step principle: install transformation is install-time only; no separate user-facing build phase. ✓
- Existing references/ pattern: untouched (unrelated to protocols). ✓

## Next Actions

### MUST

- **What:** Apply Phase 1 — revert MVL/MVL+ SKILL.md path wording to single literal in-repo path, then re-sync homegrown SKILL.md from commands. Specific proposed wording in `innovation.md` Piece 1.
  - **Who:** User (manual editing). 4 files: commands/MVL.md, commands/MVL+.md, homegrown/MVL/SKILL.md, homegrown/MVL+/SKILL.md.
  - **Gate:** Whenever the user is ready to apply the migration.
  - **Why:** Prerequisite for Phase 2. Install scripts substitute the literal `homegrown/protocols/` string; that string must exist in source SKILL.md for substitution to find it.

- **What:** Apply Phase 2 — add sed substitution to `install_for_claude.sh` and `install_for_codex.sh`. Use `${HOME}` (not literal `~`) for proper absolute-path expansion at install time. Specific proposed code in `innovation.md` Pieces 3 and 4 (with the `${HOME}` REFINE from `critique.md`).
  - **Who:** User.
  - **Gate:** After Phase 1 lands.
  - **Why:** Substitution at install time produces a deterministic single literal path per install context. Eliminates runtime iteration.

- **What:** Apply Phase 3 — verify both install scripts via dry-run. Confirm the substituted paths appear in installed SKILL.md and no `homegrown/protocols/` references remain. Specific verification commands in `innovation.md` Pieces 5 and 6.
  - **Who:** User.
  - **Gate:** After Phase 2 lands.
  - **Why:** Catches any issues with the sed pattern (e.g., wrong delimiter, missing quote) before the installer is published.

- **What:** Apply Auxiliary Piece 7 — update `homegrown/protocols/resume.md` line 160 failure-mode message to drop redundant path enumeration. Specific proposed wording in `innovation.md` Piece 7.
  - **Who:** User.
  - **Gate:** Anytime; independent of other phases.
  - **Why:** Consistency. The substitution model means each install context has ONE path being tried; listing alternatives in user-facing error messages is misleading.

### COULD

- **What:** End-to-end test of `install_for_claude.sh` against the published GitHub repo URLs (not just local dry-run).
  - **Who:** User.
  - **Gate:** Once before publishing the installer to users (one-time test).
  - **Why (if applied):** Catches any issues with `curl` URL resolution, network behavior, or repo layout that the local dry-run can't verify. The sed substitution itself is verified by dry-run; the network behavior is the orthogonal concern.

- **What:** Add a test or assertion in the install scripts that VERIFIES the substitution actually happened (e.g., grep for the in-repo string after substitution; if found, the substitution didn't run, error out).
  - **Who:** User judgment call.
  - **Gate:** If user values defense-in-depth against silent install failures.
  - **Why (if applied):** Adds ~3 lines per install script. Catches regressions if the sed pattern ever stops matching due to source SKILL.md wording changes.

### DEFERRED

- **What:** Apply the same path-substitution pattern to RESUME if/when `/MVL`/`/MVL+` start invoking RESUME.
  - **Gate:** When the auto-chain runners' "no waits between disciplines" rule changes to allow FLAG/RE-RUN gating (per the prior `telemetry_routing_protocol_classification` finding's open question about per-discipline self-assessment + protocol-loaded routing).
  - **Why (if revived):** RESUME's path-resolution problem is the same as CONCLUDE's. The same Option C pattern applies. Mechanical extension.

- **What:** Migrate the path-substitution pattern to a shared helper if a third install platform is added.
  - **Gate:** When a third install platform (e.g., Cursor's skills format) is added.
  - **Why (if revived):** Currently the sed substitution is duplicated in two install scripts. With three or more, factoring into a helper script (e.g., `lib/substitute_protocol_paths.sh`) reduces duplication. Not worth it for two installers.

## Reasoning

### Why Option C wins over D specifically

The temptation with Option D is "matches the existing pattern" — references/<file>.md uses inside-folder relative paths, and bundling protocols per-skill mirrors that path structure. Surface-level pattern consistency is appealing.

But the existing references/ pattern serves a different purpose. Each skill's `references/<discipline>.md` is **unique content** (sense-making's references file is the structural-sensemaking framework; innovate's is the structural-innovation framework; they are not the same content). The references/ pattern handles per-skill content.

Protocols are **shared content**. CONCLUDE is the same operational procedure regardless of which runner invokes it. The protocols/desc.md doctrine extracted CONCLUDE specifically TO have one canonical implementation that multiple runners (MVL, MVL+, future runners) can reference. Bundling CONCLUDE per-runner produces N copies of the same procedure — exactly what extraction was designed to prevent.

Option D's "matches the existing pattern" benefit is therefore surface-level mimicry that violates the deeper principle the existing pattern serves.

Option C's "diverges from the path structure" cost is also superficial. Source SKILL.md uses the in-repo path (`homegrown/protocols/conclude.md`); install scripts substitute. The substitution is install-time transformation, which is the same kind of operation install_for_codex.sh already performs (YAML frontmatter wrapping). C is consistent with the project's transformation pattern; it just doesn't try to hide the transformation behind a relative-path trick.

### Why Option B is rejected despite the isomorphism

Option B's appeal is real: the install context isomorphism (Cycle 1 finding) means a single path `../protocols/conclude.md` works in all 4 contexts AT THE FILESYSTEM LEVEL. If filesystem semantics were the binding constraint, B would win.

The binding constraint is the agent's tool. The agent reads the SKILL.md content; when SKILL.md says "load `../protocols/conclude.md`", the agent invokes its Read tool with that path string. Whether the Read tool resolves `..` (escaping the skill's folder) is platform-specific behavior:

- **Claude Code's Read tool with absolute paths:** definitely works.
- **Claude Code's Read tool with relative paths:** the resolution base is undocumented (probably the cwd, possibly the skill folder).
- **Tools that resolve relative-to-skill-folder:** may or may not allow `..` to escape the folder (sandboxing concern).
- **Tools that resolve relative-to-cwd:** would fail because the cwd is the user's project root, not the skill folder.

Without testing or external docs, the `..` semantics are genuinely unknown. The existing references/ pattern doesn't validate them (Cycle 2 finding: all 8 skills use INSIDE-folder paths only).

The risk profile:
- Probability `..` works: high (filesystem semantics universally support it).
- Failure mode if it doesn't: hard (file-not-found = full CONCLUDE/RESUME failure on every invocation).
- Reliable alternative: yes (Option C, comparable cost).

Accepting binary risk for marginal benefit when a reliable alternative exists is bad architecture. **Reject B.**

### KILLs from innovation/critique

- **Naive `~` literal in sed pattern:** Innovation's first draft used single-quoted sed with literal `~`. Critique caught: literal `~` in installed SKILL.md may not expand at agent read-time. **REFINEd to use `${HOME}`** (double-quoted sed expression for shell expansion at install time, producing literal absolute path).

This is the only meaningful KILL/REFINE — every other piece survived adversarial testing without major changes. Innovation here was mostly mechanical (concrete proposed wording for an architecturally-decided approach); the REFINE catches a substantive correctness issue that would have produced broken installs if missed.

### REFINEs

Piece 3's REFINE (use `${HOME}` not `~`) is critical. The naive single-quoted sed would have shipped broken installs.

### Reconciliation with the audit chain

This finding is part of an ongoing convergence on doctrine-aligned simplification:
- `extract_conclude_to_homegrown`: CONCLUDE extracted as single canonical protocol.
- `synthesize_vs_finding_split`: split CONCLUDE/SYNTHESIZE conceptually.
- `wayfinding_navigation_unification_check`: /wayfinding deleted with substance migration to /navigation.
- `inquiry_md_remaining_value_audit` → `inquiry_md_post_navigation_update_value_check`: /inquiry verdict trajectory.
- `telemetry_routing_protocol_classification`: RESUME extracted; install layout standardized.
- **THIS FINDING:** path-resolution mechanism for shared protocols across install contexts.

The trajectory: protocols are extracted (single canonical home), referenced by runners via consistent loading mechanism. This finding completes the loading-mechanism specification.

## Open Questions

### Monitoring

- **Does the substituted path actually work at agent read-time?** First post-migration `/MVL` invocation will test this. If the literal absolute path produced by `${HOME}` expansion resolves correctly via the agent's Read tool, the migration is fully validated.
- **Does the same pattern work for Cursor (or future install platforms)?** When/if a third install platform is added, applying the same sed substitution pattern should work; verify on first integration.

### Refinement Triggers

- **`/MVL`/`/MVL+` start invoking RESUME** (per the prior `telemetry_routing_protocol_classification` finding's open question). At that point, RESUME also gets the path-substitution treatment. Same pattern; mechanical extension.
- **A third install platform is added.** Apply the same sed substitution pattern to its install script.
- **Source SKILL.md wording changes affect the `homegrown/protocols/` literal string.** If a future edit replaces this string with a different placeholder, the install scripts must be updated to substitute the new placeholder.

### Research Frontiers

- **Does the agent's Read tool support `..` in path resolution?** This was the Option B question; we deferred answering it because Option C avoids the question entirely. If a future refinement wants to revisit Option B (single relative path; no install-time substitution), this is the frontier question that would need to be answered.
- **Should the install-time transformation be factored into a shared helper script?** Currently the substitution lives in two install scripts. With more platforms, factoring may be worthwhile. Out of scope for current 2-installer reality.
