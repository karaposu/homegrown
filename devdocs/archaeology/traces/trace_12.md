# Trace 12: Installer Failure and Missing-Source Handling

## Entry Point

The trace starts when an installer encounters a missing file, failed download, unsupported option, or write failure.

## Execution Path

`install_for_codex.sh` uses `set -euo pipefail` and validates mode through a `case` statement. Unknown modes print usage and exit. Remote download failures abort. Local missing skill source files print `MISSING` and continue. The cleanup trap removes a remote temporary source tree if one was created.

`install_for_claude.sh` uses `set -e`, so failed downloads or writes abort. It has no missing-local-source path because it always downloads from GitHub.

## Resource Management

Codex remote mode cleans temporary files on exit. Claude mode writes directly to its target and has no staging cleanup.

## Error Path

Errors are mostly shell-level aborts. There is no rollback for partially copied target files.

## Performance Characteristics

Failure is fast for local validation errors and network-dependent for remote failures.

## Observable Effects

Users may see partial install output before a shell abort. In Codex local mode, they may see `MISSING` lines followed by a final summary.

## Why This Design

Shell strict mode gives simple fail-fast behavior without custom exception handling.

## What feels incomplete

### The issue explanation
There is no post-install validation that the target contains every required skill and protocol.

### An ELI15
After packing the bag, nobody checks the list again before saying the trip is ready.

### Impact of it to the codebase and overall logic
Partial installs can look successful enough for users to try invoking missing skills.

### Robust Fixes / Best Practices
Validate target files after install and exit nonzero if any required artifact is missing.

### Architectural Fix if it exists
Use a manifest-driven install with preflight and postflight validation. This is appropriate for public distribution.

### Speculative defence
The installer prints per-item status, so the author may expect users to notice missing entries.

### Is this
This is a reliability gap.

## What feels vulnerable

### The issue explanation
There is no rollback when writes fail partway through.

### An ELI15
If the installer stops halfway, it leaves half the boxes unpacked.

### Impact of it to the codebase and overall logic
The target skill directory can end up with mixed old and new files.

### Robust Fixes / Best Practices
Install into a staging directory, validate, then atomically swap or copy into place.

### Architectural Fix if it exists
Versioned install directories plus a current symlink provide safer upgrades. This is overkill for small local installs but standard for robust deploys.

### Speculative defence
The artifacts are text files and easy to reinstall, so rollback may not have seemed worth the complexity.

### Is this
This is an upgrade-safety risk.

## What feels like bad design

### The issue explanation
Codex local missing files are nonfatal, while remote missing or failed downloads are fatal.

### An ELI15
If a local shelf is missing a book, the installer shrugs; if the internet shelf is missing it, the installer stops.

### Impact of it to the codebase and overall logic
Error severity depends on source mode rather than artifact importance.

### Robust Fixes / Best Practices
Classify artifacts as required or optional, then apply the same policy in local and remote mode.

### Architectural Fix if it exists
Centralize install policy in a manifest with required flags. This is a good fix and not overkill if optional artifacts are expected.

### Speculative defence
Local mode may be used during migration, where missing files are common and should not block testing.

### Is this
This is inconsistent error policy.
