# Trace 8: Codex Install Target Boundary

## Entry Point

The trace starts in `install_for_codex.sh` when the script decides between `--repo`, `--user`, or default mode.

## Execution Path

If no explicit mode is provided, the script installs to `--repo` when running from a local checkout and `--user` when running remotely. `--user` maps to `~/.codex/skills`. `--repo` maps to `.codex/skills` in the script directory for local runs, or the current working directory for remote runs.

Once `TARGET` is set, all skill and protocol writes flow into that tree.

## Resource Management

The target directory is created with `mkdir -p`. Existing files with the same paths are overwritten by shell redirection or copied over.

## Error Path

An unknown mode prints usage and exits with status 1. Write failures abort under `set -euo pipefail`.

## Performance Characteristics

Target selection is constant-time. The only performance concern is filesystem write latency and permissions for user-level directories.

## Observable Effects

The user sees skills available either only in the current repo or globally across Codex sessions, depending on target.

## Why This Design

The script supports both project-scoped development installs and global user installs. The default changes between local and remote execution to avoid surprising remote users by writing into an arbitrary repo unless requested.

## What feels incomplete

### The issue explanation
There is no dry-run mode showing which paths would be written.

### An ELI15
The installer starts putting files away before showing you the full destination list.

### Impact of it to the codebase and overall logic
Users may overwrite existing local skill files without seeing the exact write plan first.

### Robust Fixes / Best Practices
Add `--dry-run` and print source-to-target mappings.

### Architectural Fix if it exists
Use an install plan object that is built, validated, displayed, and then applied. This is clean but somewhat heavy for a simple shell script.

### Speculative defence
The script prints enough summary for normal use and likely assumes the target belongs to this skill pack.

### Is this
This is an operator-safety gap.

## What feels vulnerable

### The issue explanation
Repo mode writes into `.codex/skills`, which may already contain project-specific customizations.

### An ELI15
It can put a new tool into a shared project drawer and replace an older tool with the same name.

### Impact of it to the codebase and overall logic
Local team-specific skill edits can be overwritten.

### Robust Fixes / Best Practices
Detect existing files and require `--force` to overwrite, or back up overwritten files.

### Architectural Fix if it exists
Use content-addressed install versions and a symlink/current pointer. This is overkill for most local skill installs.

### Speculative defence
The target names are owned by this project, so overwriting may be expected.

### Is this
This is a local data-loss risk.

## What feels like bad design

### The issue explanation
Default target selection depends on whether `homegrown/` exists beside the script.

### An ELI15
The destination changes based on where the installer found its supplies.

### Impact of it to the codebase and overall logic
Users may not predict default behavior when running copied scripts or unusual checkout layouts.

### Robust Fixes / Best Practices
Require explicit target mode for all non-interactive installs or print the target before writing and ask in interactive mode.

### Architectural Fix if it exists
Separate source mode from target mode completely. This is a clearer installer model and not overkill.

### Speculative defence
The default is pragmatic: local work usually wants repo install, remote one-liners usually want user install.

### Is this
This is a clarity tradeoff.
