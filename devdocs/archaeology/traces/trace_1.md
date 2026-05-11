# Trace 1: Codex Installer Source Lifecycle

## Entry Point

`install_for_codex.sh` starts when a user runs it locally or through a remote shell pipeline.

## Execution Path

The script computes `SCRIPT_DIR`, then checks whether `homegrown/` exists beside the script. If it exists, that directory becomes the source of truth. If it does not exist, the script creates a temporary directory, downloads every listed skill, reference file, and protocol from GitHub raw URLs, and marks the run as remote.

After source detection, the script selects the install mode, copies or transforms skill files into the target, copies references and protocols, prints a summary, and exits.

## Resource Management

Local mode reuses repository files and writes only to the chosen target. Remote mode creates a temporary directory with `mktemp -d`, records it in `CLEANUP`, and installs a shell `trap` that removes it on exit.

## Error Path

The script runs with `set -euo pipefail`, so failed commands normally abort the run. Missing local skill files are treated differently: the installer prints `MISSING` and continues. Failed remote downloads abort because `curl -fsSL` returns nonzero.

## Performance Characteristics

Local installs are mostly filesystem copies and text transformations. Remote installs make one network request per skill file, reference file, and protocol, so latency scales with the number of listed artifacts.

## Observable Effects

The observable result is an installed skill tree under either `.codex/skills/` or `~/.codex/skills/`, plus console output showing each installed or missing item.

## Why This Design

The installer supports both development usage and one-line remote usage with the same script. The temporary tree lets the rest of the install logic operate on one source layout regardless of whether files came from disk or GitHub.

## What feels incomplete

### The issue explanation
There is no final failure if one or more local source skill files are missing; the script can finish with fewer installed skills.

### An ELI15
It is like packing a toolbox and saying "done" even if one tool was missing, as long as you noticed and printed a warning.

### Impact of it to the codebase and overall logic
Users can end up with a partial Codex skill set while the final summary still presents the command list as if everything is available.

### Robust Fixes / Best Practices
Track missing required files and exit nonzero if any required skill or protocol was not installed.

### Architectural Fix if it exists
Move the skill manifest into one data file and validate the whole manifest before copying. This is not overkill if the installer is treated as release infrastructure; it is probably overkill for a private local script.

### Speculative defence
The current behavior may be intentional for local development, where a partially migrated `homegrown/` tree should not block every install attempt.

### Is this
This is a correctness and release-quality issue, not a core architecture failure.

## What feels vulnerable

### The issue explanation
Remote mode executes downloaded content indirectly by installing it as assistant instructions without checksum or version pinning.

### An ELI15
The script trusts whatever is currently at the remote address, like printing a manual from the internet and immediately using it as the rulebook.

### Impact of it to the codebase and overall logic
Remote changes can alter installed behavior without a local code review step.

### Robust Fixes / Best Practices
Pin to a tag or commit, publish checksums, or support a `--ref` option so users can choose a version.

### Architectural Fix if it exists
Use a release manifest that lists artifact URLs, expected hashes, and version metadata. This is appropriate for public distribution, but heavy for personal installs.

### Speculative defence
The project appears early and Markdown-native, so speed of iteration may have been preferred over release hardening.

### Is this
This is a supply-chain risk.

## What feels like bad design

### The issue explanation
The source detection, remote download, mode selection, transformation, copying, and summary are all in one shell script.

### An ELI15
One person is doing receiving, packing, labeling, shipping, and customer support all in one desk job.

### Impact of it to the codebase and overall logic
Small changes to install behavior can accidentally affect unrelated behavior because the script has no internal module boundaries beyond functions and sections.

### Robust Fixes / Best Practices
Keep the shell script but separate manifest validation, source acquisition, and target writing into small functions.

### Architectural Fix if it exists
Replace shell logic with a small installer program and tested manifest parser. That is overkill unless installs become a major supported product surface.

### Speculative defence
Shell is portable and easy to run through `curl | bash`, which is likely why this shape was chosen.

### Is this
This is acceptable for a lightweight installer, but brittle as the project grows.
