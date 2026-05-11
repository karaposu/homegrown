# Branch: protocol_path_generalization

## Question

How should the path-resolution problem for protocol files (`conclude.md`, `resume.md` — loaded by `MVL`/`MVL+` SKILL.md) be generalized so the SKILL.md works correctly across all install contexts (Claude install at `~/.claude/skills/protocols/`, Codex user install at `~/.codex/skills/protocols/`, Codex repo install at `.codex/skills/protocols/`, in-repo at `homegrown/protocols/`) without requiring runtime iteration through multiple paths and without breaking the project's source-controlled-markdown / no-build-step pattern?

## Goal

A defensible architectural verdict on which approach to use, with concrete migration steps:

1. **Verdict on the approach.** Pick from the candidates: (a) enumerate-and-try-paths in SKILL.md, (b) `..`-relative path, (c) installer-time sed substitution, (d) bundle-protocols-inside-each-skill-folder, (e) revert to inline (no extraction), (f) protocols-as-skills via Skill tool — explicitly rejected by user — or other. Each has trade-offs; the verdict should be defensible against the strongest counter-argument.

2. **Migration plan.** Concrete steps for whichever approach wins: source SKILL.md wording, install script changes, in-repo behavior. Per file. Bounded edit cost.

3. **Reconciliation with prior decisions.** The user previously approved Option A (enumerate-and-try) implicitly when I applied it; then objected to the iteration overhead. This inquiry SUPERSEDES Option A if it picks differently. Also reconcile with the just-completed `telemetry_routing_protocol_classification` finding (which was based on the assumption that resume.md would be loaded from a single canonical location).

## Scope Check

Question covers goal. Answering "how to generalize" requires (a) evaluating each candidate against criteria (determinism, no-iteration-cost, source-clarity, install-script-complexity, in-repo-correctness, future-platform-extensibility), (b) picking the verdict, (c) producing the migration plan. The end-goal trajectory (multi-platform installs proliferating) and the project's source-controlled / no-build-step pattern are constraints any answer must honor.

## Context

- **The current state (problematic):** MVL/MVL+ SKILL.md content references `~/.claude/skills/protocols/conclude.md` AND `homegrown/protocols/conclude.md` as alternatives in flowing prose ("Try the installed path first; fall back to the repo path"). This was Option A applied. The user pushed back: runtime iteration is wasteful for an operation invoked every iteration-complete-yes.

- **The user has rejected explicitly:** Option F (protocols-as-skills via Skill tool) — "protocols are not skills."

- **Source-of-truth pattern:** project keeps markdown source files; install scripts use simple `curl`/`cp` to copy them to install targets. No transformation step (so far). install_for_codex.sh DOES transform (wraps content in YAML frontmatter), so transformation isn't unprecedented but is currently scoped to Codex.

- **End-goal trajectory:** more install platforms may emerge (Cursor's skills format, future agent platforms). The chosen approach should accommodate new platforms without architectural rework.

- **Existing precedent for relative-path handling:** the project's existing skills (sense-making, innovate, td-critique, etc.) reference `references/<file>.md` from their SKILL.md — and this works in both install and in-repo contexts. So Claude Code DOES resolve some relative paths from the skill's folder. The question is whether `..`-relative paths (escaping the skill folder) are also supported.

- **Five candidates to evaluate** (the four enumerated by user + one new):
  - (A) Enumerate-and-try (current state — user rejected on iteration cost)
  - (B) `..`-relative path (`../protocols/conclude.md`) — depends on agent path-resolution
  - (C) Installer-time sed substitution (single deterministic path per install)
  - (D) Bundle protocols inside each skill folder (single deterministic path; source duplication or symlink)
  - (E) Inline the protocol back into SKILL.md (revert extraction; ~107 lines duplicated across MVL/MVL+)

## Relationships

- CONTINUES FROM: `telemetry_routing_protocol_classification` — that finding extracted RESUME as a protocol (CONCLUDE-style) and recommended the install layout. This inquiry refines the path-resolution mechanism for both extracted protocols.
- RELATED: `extract_conclude_to_homegrown` — the original CONCLUDE extraction precedent.
- RELATED: `synthesize_vs_finding_split` — established the protocol-extraction pattern.
- RELATED: `wayfinding_navigation_unification_check` — established the pattern of grounding architectural decisions in shipped doctrine + multi-context realities.
