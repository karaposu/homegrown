# Trace 4: Codex Skill Packaging Transformation

## Entry Point

This trace starts inside `install_for_codex.sh` when `install_skill_md` is called for a source `SKILL.md`.

## Execution Path

The function reads the first two lines of the source skill. If they look like `name:` and `description:`, it treats them as existing metadata. It then writes a Codex-compatible file with `---` YAML frontmatter, a normalized `name`, a description, a blank line, and the body of the source skill. For `MVL` and `MVL+`, it also rewrites `homegrown/protocols/` references to point at the target's installed `protocols/` directory.

## Resource Management

The transformation writes directly to `<target>/<skill>/SKILL.md`. References are copied separately by the caller.

## Error Path

If the source metadata is missing or the description is empty, the function tries to derive a description from the first Markdown heading. If that fails, it uses `<skill_name> skill`.

## Performance Characteristics

This is a streaming text transformation using shell builtins, `head`, `sed`, `awk`, `grep`, and `cat`. It is cheap for the current file sizes.

## Observable Effects

The installed Codex skill has strict YAML frontmatter even if the homegrown source file used unfenced metadata. Protocol paths inside loop runners point at the installed location.

## Why This Design

The homegrown source format and Codex's expected skill format differ. The installer acts as an adapter so source files can stay in one layout while Codex receives valid skill files.

## What feels incomplete

### The issue explanation
Metadata parsing is line-based and only understands a narrow shape.

### An ELI15
The packer only reads labels if they are on the first two lines and written exactly as expected.

### Impact of it to the codebase and overall logic
A harmless metadata format change can silently produce fallback descriptions or malformed installed skills.

### Robust Fixes / Best Practices
Use a small YAML parser or enforce a single canonical source format before install.

### Architectural Fix if it exists
Adopt one skill manifest schema and generate both Codex and Claude outputs from it. This is robust, but may be overkill while only two installers exist.

### Speculative defence
The current source files are simple, so shell parsing was likely enough at the time.

### Is this
This is a maintainability risk.

## What feels vulnerable

### The issue explanation
Descriptions are emitted into YAML without quoting or escaping.

### An ELI15
If a description contains special punctuation, the label printer may produce a label Codex cannot read.

### Impact of it to the codebase and overall logic
A future description containing YAML-sensitive characters could break installed skill metadata.

### Robust Fixes / Best Practices
Quote YAML strings safely or generate frontmatter with a real YAML emitter.

### Architectural Fix if it exists
Use a build step with schema validation and generated artifacts. This is a solid release architecture, but heavier than the current shell-based install.

### Speculative defence
Most descriptions are plain enough that this has probably not failed in practice.

### Is this
This is a data-escaping vulnerability.

## What feels like bad design

### The issue explanation
The transformation mixes format normalization and protocol path rewriting in one function.

### An ELI15
The label printer is also changing addresses inside the manual.

### Impact of it to the codebase and overall logic
Future packaging changes can accidentally affect runtime protocol resolution.

### Robust Fixes / Best Practices
Split frontmatter generation from content rewriting and test both independently.

### Architectural Fix if it exists
Use a two-stage build: normalize skill metadata, then resolve environment-specific paths. This is not overkill if more targets are added.

### Speculative defence
Only loop runners need path rewriting, so folding it into one install function reduced script size.

### Is this
This is a separation-of-concerns issue.
