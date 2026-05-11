# Trace 17: Protocol Path Rewriting Mechanism

## Entry Point

The mechanism starts during installation for `MVL` and `MVL+`, because those runner skills refer to shared protocol files.

## Execution Path

In the Codex installer, `install_skill_md` receives `apply_protocol_sub=true` for `MVL` and `MVL+`. It streams the skill body through `sed`, replacing `homegrown/protocols/` with the target install path's `protocols/` directory.

In the Claude installer, `MVL` and `MVL+` are downloaded through a pipeline that applies the same kind of `sed` replacement, mapping `homegrown/protocols/` to `${HOME}/.claude/skills/protocols/`.

## Resource Management

The rewritten path is persisted inside the installed `SKILL.md`. The protocol files themselves are copied or downloaded into the corresponding installed `protocols/` directory.

## Error Path

If rewriting fails, shell strict mode should abort the install. If the string is not present or changes in source, the installed runner may keep an unresolved `homegrown/protocols/` path.

## Performance Characteristics

This is a cheap streaming text replacement.

## Observable Effects

Installed `MVL` and `MVL+` refer to installed protocol files rather than repository-relative protocol files.

## Why This Design

The source tree uses repo-relative protocol references, but installed skills need assistant-readable paths outside the repository.

## What feels incomplete

### The issue explanation
The replacement is a raw string substitution rather than a structured path resolution step.

### An ELI15
It replaces every matching phrase in the document, whether that phrase is an address or just an example.

### Impact of it to the codebase and overall logic
Source text examples or documentation snippets containing `homegrown/protocols/` can be rewritten unintentionally.

### Robust Fixes / Best Practices
Use a placeholder token for install-time paths instead of replacing natural text.

### Architectural Fix if it exists
Introduce template variables like `{{PROTOCOLS_DIR}}` and render installed skills from templates. This is not overkill if path rewriting remains necessary.

### Speculative defence
The source currently appears to use the string specifically for protocol references, so raw replacement works.

### Is this
This is a templating fragility.

## What feels vulnerable

### The issue explanation
Installed absolute paths can become stale if skills are moved after installation.

### An ELI15
The manual says the supplies are in one drawer; if someone moves the drawer, the manual still points to the old place.

### Impact of it to the codebase and overall logic
Loop runners may fail to load `conclude.md` or `resume.md` after manual relocation.

### Robust Fixes / Best Practices
Use relative paths inside the installed skill package when the assistant environment supports them.

### Architectural Fix if it exists
Use a runtime protocol resolver that searches known skill roots. This is useful for portability but may be beyond what current assistant skill systems expose.

### Speculative defence
Absolute paths are reliable for assistant read-time because tilde expansion and relative path context can be ambiguous.

### Is this
This is a portability risk.

## What feels like bad design

### The issue explanation
Both installers independently implement protocol path rewriting.

### An ELI15
Two different packers each remember to change the address label by hand.

### Impact of it to the codebase and overall logic
Codex and Claude installs can drift if one rewrite rule changes.

### Robust Fixes / Best Practices
Centralize path rewriting in a shared build step or generate both installers from the same template.

### Architectural Fix if it exists
Create a target adapter layer where each assistant target declares path rules once. This is valuable if more targets are added; for two scripts it may be acceptable duplication.

### Speculative defence
Separate scripts are easy to copy, audit, and run without extra tooling.

### Is this
This is duplicated installer logic.
