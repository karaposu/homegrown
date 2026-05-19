# Stability Preservation via Git

## The problem

This project iterates on its disciplines. Spec edits are routine — adding a refinement note, restructuring a section, clarifying a failure mode, introducing a new perspective. Most edits help. Some quietly regress.

Regression is detectable in principle (the discipline produces worse output than it used to) but hard to confirm in practice, because there is no fixed past version to compare against once the spec has moved on. The previous answer exists only as memory or as a stale finding artifact. The previous discipline that produced it no longer exists in any runnable form.

What we need is the ability to **invoke a past version of a discipline against current input**, side-by-side with the current version, and compare both outputs against the same problem.

## Why git history alone isn't enough

Git already preserves every prior state of every file. But disciplines are runtime artifacts: they live in `~/.claude/skills/<name>/` and are dispatched by slash command. Reading `git show bf4ae1f:cognitive_harness/sense-making/SKILL.md` shows you the file but does not give you a callable `/sense-making@bf4ae1f`. The slash command always resolves to whatever is currently installed.

A naïve `git checkout bf4ae1f -- cognitive_harness/` would replace current `cognitive_harness/`, eliminating the comparison rather than enabling it. Branch switching has the same problem — only one version is live at a time, and the install step has to re-run on each switch.

Git preserves the *content*. The capability we need is preserving the *invocation* — making a past version reachable as a distinct slash command that coexists with current.

## The pattern

For any commit `<sha>` whose discipline state is worth preserving:

1. **Snapshot.** Extract that commit's `cognitive_harness/` into `archived_skills/<sha>-hg/` (the project's convention for preserved skill states; create `archived_skills/` if it doesn't exist). Use `git archive`, not `git checkout`, so current `cognitive_harness/` is never touched:

   ```bash
   mkdir -p archived_skills/<sha>-hg
   git archive <sha> homegrown | tar -x --strip-components=1 -C archived_skills/<sha>-hg
   ```

2. **Rename the slash commands.** Inside the snapshot, prefix every skill's identity with `<sha>-`. This means three coordinated edits per skill:
   - Rename the skill subfolder (`sense-making/` → `<sha>-sense-making/`).
   - Update the `name:` field in `SKILL.md`'s frontmatter.
   - Update internal cross-references — anywhere `MVL/SKILL.md` calls `Skill(skill: "sense-making", ...)`, the snapshot's `<sha>-MVL/SKILL.md` must call `Skill(skill: "<sha>-sense-making", ...)`. Otherwise `<sha>-MVL` would dispatch into *current* sense-making, not its own.

3. **Isolate supporting files.** Protocols (branch_inquiry, conclude, resume, etc.) are loaded by path, not by name. Install the snapshot's protocols to a separate location (`~/.claude/skills/<sha>-protocols/`) and rewrite the protocol path references inside the snapshot's SKILL.mds at install time, so they resolve to the snapshot's protocols rather than current ones.

4. **Side-by-side install.** Provide an install script (`archived_skills/install_<sha>_for_claude.sh`, alongside the snapshot folder) that mirrors the original but points at the snapshot folder and uses the prefixed names. Both sets coexist in `~/.claude/skills/`.

After this, you can run the same input through `/MVL` and `/<sha>-MVL` and compare the outputs.

## The three layers of isolation

A renamed skill is properly isolated only when all three layers are aligned:

| Layer | What it controls | Failure if missed |
|---|---|---|
| Folder name | Where the skill installs in `~/.claude/skills/` | Two versions clobber each other |
| Frontmatter `name:` field | What slash command Claude Code registers | Slash command wrong or duplicated |
| Internal cross-references | Which siblings the skill calls and which protocols it loads | The "snapshot" silently delegates to current code, defeating the comparison |

Layer three is the easiest to forget and the most damaging. A snapshot whose runner secretly calls current disciplines tells you nothing about whether the snapshot version was better — it tests current.

## Snapshot hygiene

- **Snapshots are read-only conceptually.** Editing a snapshot to "fix" a problem defeats the comparison; the snapshot exists to represent a past state faithfully. If you find a problem in the snapshot, that is data about the past state, not a bug to patch.
- **Snapshots don't share state with current.** No symlinks, no shared `references/`, no shared `protocols/`. Symlinking the protocols folder, for instance, would mean current protocol regressions silently affect the snapshot.
- **Snapshot tags should be stable identifiers**, not date-based. A short commit SHA is fine; a milestone tag (`pre-frontier-rework`) is better when one exists. Avoid date-based tags because they don't pin the actual content.
- **Multiple snapshots can coexist.** `bf4ae1f-hg/`, `cd44648-hg/`, `pre-X-hg/` all live under `archived_skills/`, alongside their respective install scripts (`install_<sha>_for_claude.sh`). The active `cognitive_harness/` stays at the project root, separate from the archive. Disk is cheap; clarity is not.

## When to snapshot

- **Before a controversial restructuring.** If a refactor might regress, snapshot the pre-refactor state first.
- **After an established stable state.** When a discipline produces consistently good output, mark that state — even if no edit is imminent — so future regressions have something to test against.
- **When a regression is suspected.** Snapshot the suspected-good past state immediately, before more edits make recovery harder.
- **Not for every commit.** A snapshot is a runtime artifact requiring rename and install machinery. Reserve them for states worth A/B testing against, not as routine versioning.

## Operational recipe

Substitute `<sha>` (or chosen tag) throughout. Run from project root. macOS `sed -i ''` shown — Linux uses `sed -i` (no quoted empty arg). All snapshot artifacts live under `archived_skills/`.

### 1. Snapshot

```bash
mkdir -p archived_skills/<sha>-hg
git archive <sha> homegrown | tar -x --strip-components=1 -C archived_skills/<sha>-hg
```

### 2. Rename the 11 skill folders

```bash
cd archived_skills/<sha>-hg
for s in sense-making innovate td-critique explore decompose comprehend reflect navigation MVL "MVL+" meta-loop; do
  mv "$s" "<sha>-$s"
done
```

`protocols/`, `contracts/`, `_archive/` stay as-is.

Steps 3–5 below run from inside `archived_skills/<sha>-hg/`.

### 3. Update each SKILL.md's `name:` field

```bash
for d in <sha>-*/; do
  base=$(basename "$d"); orig="${base#<sha>-}"
  sed -i '' "s|^name: ${orig}\$|name: <sha>-${orig}|" "$d/SKILL.md"
done
```

Works for both frontmatter styles (with or without `---` delimiters); MVL/MVL+ use a bare `name:` first line, the other 9 use `---`-wrapped frontmatter.

### 4. Rewrite cross-references in the 3 runner SKILLs

```bash
for f in <sha>-MVL/SKILL.md "<sha>-MVL+/SKILL.md" <sha>-meta-loop/SKILL.md; do
  sed -i '' \
    -e 's|/sense-making|/<sha>-sense-making|g' \
    -e 's|/td-critique|/<sha>-td-critique|g' \
    -e 's|/comprehend|/<sha>-comprehend|g' \
    -e 's|/decompose|/<sha>-decompose|g' \
    -e 's|/meta-loop|/<sha>-meta-loop|g' \
    -e 's|/navigation|/<sha>-navigation|g' \
    -e 's|/navigate|/<sha>-navigate|g' \
    -e 's|/innovate|/<sha>-innovate|g' \
    -e 's|/explore|/<sha>-explore|g' \
    -e 's|/reflect|/<sha>-reflect|g' \
    -e 's|/MVL|/<sha>-MVL|g' \
    -e 's|/mvl|/<sha>-mvl|g' \
    -e 's|`sense-making`|`<sha>-sense-making`|g' \
    -e 's|`innovate`|`<sha>-innovate`|g' \
    -e 's|`td-critique`|`<sha>-td-critique`|g' \
    -e 's|`explore`|`<sha>-explore`|g' \
    -e 's|`decompose`|`<sha>-decompose`|g' \
    -e 's|cognitive_harness/MVL+/|cognitive_harness/<sha>-MVL+/|g' \
    -e 's|cognitive_harness/navigation/|cognitive_harness/<sha>-navigation/|g' \
    "$f"
done
```

### 5. Rewrite the warmup path in navigation SKILL

```bash
sed -i '' 's|cognitive_harness/navigation/warmup/|cognitive_harness/<sha>-navigation/warmup/|g' <sha>-navigation/SKILL.md
```

### 6. Write the install script

Use `archived_skills/install_bf4ae1f_for_claude.sh` as the template. Replace every literal `bf4ae1f` with `<sha>`. Place it at `archived_skills/install_<sha>_for_claude.sh` (alongside the snapshot folder, NOT at project root). The script's `SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"` line then resolves `SOURCE_DIR` to the sibling `archived_skills/<sha>-hg/` automatically — no path edits needed.

The script does two install-time `sed` rewrites that resolve placeholder paths to absolute install paths:

- `cognitive_harness/protocols/` → `${HOME}/.claude/skills/<sha>-protocols/`
- `cognitive_harness/<sha>-` → `${HOME}/.claude/skills/<sha>-`

The script must apply this `sed` to ALL `SKILL.md` files (not just runners) so navigation's warmup path resolves. It must also explicitly `cp` the warmup files (they live under `<sha>-navigation/warmup/`, separate from any `references/` folder).

Mirror the original install script's protocol set: only `branch_inquiry.md`, `conclude.md`, `resume.md` install (the other 5 protocol files exist in the snapshot for reading but aren't part of install).

### 7. Verify before installing

Run from project root:

```bash
# (a) current homegrown untouched
git status --short -- cognitive_harness/                                            # expect empty

# (b) all SKILL.md frontmatters prefixed
grep -h '^name:' archived_skills/<sha>-hg/<sha>-*/SKILL.md | sort           # expect 11 lines, all <sha>-prefixed

# (c) no unprefixed slash refs survived in runners
grep -rnE '/(MVL|sense-making|innovate|td-critique|explore|decompose|comprehend|reflect|navigation|navigate|meta-loop)' \
  archived_skills/<sha>-hg/<sha>-MVL/SKILL.md \
  "archived_skills/<sha>-hg/<sha>-MVL+/SKILL.md" \
  archived_skills/<sha>-hg/<sha>-meta-loop/SKILL.md \
  | grep -v '<sha>-'                                                         # expect no output

# (d) dry-run install-time sed on a runner
sed -e "s|cognitive_harness/protocols/|${HOME}/.claude/skills/<sha>-protocols/|g; s|cognitive_harness/<sha>-|${HOME}/.claude/skills/<sha>-|g" \
  archived_skills/<sha>-hg/<sha>-MVL/SKILL.md | grep -nE 'homegrown|<sha>-protocols' | head
                                                                             # expect: only absolute install paths, no bare cognitive_harness/
```

Then:

```bash
bash archived_skills/install_<sha>_for_claude.sh
```

### 8. Uninstall

```bash
rm -rf ~/.claude/skills/<sha>-* ~/.claude/skills/<sha>-protocols
```

## Cross-reference inventory (what the rewrites must cover)

| Where | Pattern | Why it matters |
|---|---|---|
| Every SKILL.md frontmatter | `name: X` | Slash-command identity Claude Code registers |
| MVL/MVL+ skill table | `` `<discipline>` `` (backticked) | The runners read these to dispatch via Skill tool |
| Runner instruction prose | `/X` slash invocations | Self-references and recommendations to the user |
| meta-loop SKILL | `cognitive_harness/MVL+/SKILL.md`, `cognitive_harness/navigation/SKILL.md` | meta-loop loads these by path |
| navigation SKILL (~line 42) | `cognitive_harness/navigation/warmup/navigator-refresh.md` | navigation loads this by path on `refresh_needed` |
| All runner SKILLs (rewritten at install time) | `cognitive_harness/protocols/*` | Resolves to the renamed protocols install dir |
| All SKILLs (rewritten at install time) | `cognitive_harness/<sha>-*` | Resolves cross-skill paths to absolute install dirs |

What does NOT need rewriting (and why):

- **Protocol files' `cognitive_harness/...` references** — these are documentation prose (failure-mode descriptions, examples, cross-discipline pointers like `outcome_review.md`'s mention of `cognitive_harness/contracts/alignment_control.md`). They're not load-at-runtime paths. The original install script doesn't rewrite them either.
- **`references/<file>.md` cross-discipline references** — same: prose, not loads.
- **In-section warmup file basenames** in navigation SKILL line ~43 (`navigator-warmup1.md` etc.) — these are user-facing instructions ("tell the user to run X"), not paths the agent loads. The basenames don't change.

## Gotchas captured from the bf4ae1f run

- **Two frontmatter styles coexist.** MVL and MVL+ have a bare `name:` as the literal first line of `SKILL.md`. The other 9 disciplines use proper `---`-delimited YAML frontmatter. The same `^name: <orig>$` sed line-anchor handles both.
- **`/MVL` vs `/MVL+` substitution order is safe in either direction.** After `/MVL` → `/<sha>-MVL`, the `/` is no longer adjacent to `MVL+`, so a subsequent `/MVL+` substitution finds nothing. No double-prefix risk. The bash sed in step 4 takes advantage: only `/MVL` is listed; `/MVL+` is handled implicitly. Same logic for `/mvl`.
- **`+` in `MVL+` is regex-literal in BSD sed.** Don't use `-E`/extended-regex unless you escape it. Default basic-regex (no `-E`) is correct here.
- **The install script must apply its sed to with-refs skills too**, not just runners. Navigation has an executable `cognitive_harness/...` path on line ~42 that needs the install-time rewrite. The original homegrown install script only sed-rewrites runners, but that's because the original disciplines don't reference `cognitive_harness/...` paths — bf4ae1f's navigation does.
- **Warmup files are a separate copy step.** They live under `<skill>/warmup/` (not `<skill>/references/`), so the disciplines-with-refs loop doesn't pick them up. Add an explicit `cp` line in the install script for `<sha>-navigation/warmup/*.md`.
- **Snapshot fidelity > polish.** bf4ae1f's source had `/navigate` (typo for `/navigation`) at the iteration-complete prompt in MVL/MVL+. Carried forward as `/<sha>-navigate` (still dangling). Don't fix typos in the snapshot — fixing them changes what you're testing against.
- **Mirror the original install script's protocol set exactly.** The current installer ships only 3 protocols (`branch_inquiry`, `conclude`, `resume`); the other 5 are in source but not installed. The snapshot installer should match — installing more protocols than bf4ae1f originally exposed would be adding behavior the snapshot didn't have.
- **The `git archive | tar` extraction strips one path component** (`--strip-components=1`) so the snapshot folder's contents are `<sha>-hg/MVL/...` not `<sha>-hg/cognitive_harness/MVL/...`. This matches the structure the rest of the recipe assumes.

## Future automation

This recipe is currently a runbook of manual steps. A natural next step is a single script `snapshot_for_claude.sh <sha>` that performs steps 1–6 in one call and writes the install script. Defer until a third snapshot proves the recipe is stable.

## Promoting a snapshot back to current

If A/B comparison shows the snapshot's discipline is the better state — i.e., the regression hypothesis is confirmed — that is a separate operation. Don't conflate "preserved snapshot for comparison" with "rolled back to that state." Rollback means choosing to discard intermediate edits, which is a content decision, not an isolation mechanism. Do it explicitly, with the regression evidence in the commit message.

## Why this is load-bearing for the project

The thinking-engine bet (per `docs/desc.md`) is that disciplines improve over iterations and eventually self-improve. That trajectory presupposes the ability to **measure whether iteration N is actually better than iteration N-1**. Without a way to invoke past disciplines side-by-side, "better" is asserted, not demonstrated. Stability preservation via git is the operational substrate that makes regression-vs-progress distinguishable. Without it, the project can drift confidently in a wrong direction with no signal until the cumulative damage is large enough to notice through other means.
