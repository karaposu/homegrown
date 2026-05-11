# Trace 7: Claude Remote Install Boundary

## Entry Point

The trace starts when a user runs `install_for_claude.sh`.

## Execution Path

The script sets `REPO_URL` to the GitHub raw base URL and `SKILLS_DIR` to `~/.claude/skills`. It creates the target directory, iterates over skills with references, downloads each `SKILL.md` and reference file with `curl -fsSL`, then iterates over skills without references. For `MVL` and `MVL+`, it streams the downloaded skill through `sed` to rewrite protocol paths before writing the target file. It then downloads shared protocols and prints a summary.

## Resource Management

The script writes directly into the user's Claude skills directory. It does not use a temporary staging directory.

## Error Path

The script uses `set -e`, so a failing `curl`, `mkdir`, `sed`, or write normally aborts the run.

## Performance Characteristics

Install time is network-bound. Every listed artifact is fetched separately from GitHub raw URLs.

## Observable Effects

The user gets a populated `~/.claude/skills` directory with skill folders, references, and protocols.

## Why This Design

Claude install is optimized for one-line remote installation and avoids local source detection because it always pulls from the canonical remote repository.

## What feels incomplete

### The issue explanation
There is no local-install path for Claude even when the repository is already checked out.

### An ELI15
Even if the book is on your desk, the installer goes to the internet to print another copy.

### Impact of it to the codebase and overall logic
Local changes to `homegrown/` cannot be tested through this installer without pushing or changing URLs.

### Robust Fixes / Best Practices
Add a local source mode similar to the Codex installer.

### Architectural Fix if it exists
Unify Codex and Claude installers around a shared source-acquisition function. This is useful and not overkill because the two scripts already duplicate skill manifests.

### Speculative defence
The Claude script may have been intended only as the public install path, not a development tool.

### Is this
This is a developer-experience gap.

## What feels vulnerable

### The issue explanation
The script writes into a user-level assistant configuration directory with no version pinning.

### An ELI15
It changes the assistant's global rulebook using whatever files are online today.

### Impact of it to the codebase and overall logic
Users may unknowingly install behavior that differs from the checked-out repository or from a prior installation.

### Robust Fixes / Best Practices
Support `--ref`, release tags, and a summary file recording the installed commit or version.

### Architectural Fix if it exists
Publish versioned release bundles. This is appropriate for public users but may be heavy for a personal workflow.

### Speculative defence
Raw GitHub install is simple and familiar for early distribution.

### Is this
This is a version-control and supply-chain risk.

## What feels like bad design

### The issue explanation
The skill manifest is duplicated between the Claude and Codex installers.

### An ELI15
Two shopping lists must be kept identical by hand.

### Impact of it to the codebase and overall logic
One installer can easily drift and omit a skill or protocol.

### Robust Fixes / Best Practices
Move the manifest into one shared file and generate both installers from it.

### Architectural Fix if it exists
Use a manifest-driven installer with per-target adapters. This is a strong fit if additional assistant targets are expected.

### Speculative defence
Two shell arrays are easier to understand than a generated installer system.

### Is this
This is a maintainability issue.
