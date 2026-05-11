# Decomposition: protocol_path_generalization

## User Input

Decompose the migration plan from sensemaking (Option C — installer-time sed substitution) into independently-answerable pieces with interfaces and dependency order.

---

## Step 1 — Coupling Topology

### Atoms identified

**SKILL.md edits (4 files):**
- A1: revert `commands/MVL.md` CONCLUDE-load wording to single literal in-repo path
- A2: revert `commands/MVL+.md` CONCLUDE-load wording to single literal in-repo path
- A3: re-sync `homegrown/MVL/SKILL.md` from `commands/MVL.md`
- A4: re-sync `homegrown/MVL+/SKILL.md` from `commands/MVL+.md`

**Install script edits (2 files):**
- B1: add sed substitution to `install_for_claude.sh` (only for MVL and MVL+ SKILL.md downloads)
- B2: add sed substitution to `install_for_codex.sh` `install_skill_md` function (mode-dependent target path)

**Auxiliary edits (1 file):**
- C1: update `homegrown/protocols/resume.md` line 160 failure-mode message — single in-repo path (the message text was previously updated to mention dual paths; revert to single in-repo path for consistency)

**Verification atoms:**
- V1: dry-run install_for_claude.sh locally; verify resulting SKILL.md has the literal target path
- V2: dry-run install_for_codex.sh --user locally; verify resulting SKILL.md has the literal target path

### Coupling map

| From | To | Coupling | Reason |
|---|---|---|---|
| A1, A2 | A3, A4 | STRONG (sequential) | A3, A4 are re-sync from commands/ — must come after commands/ edits |
| A1, A2 | B1, B2 | MODERATE | Install scripts substitute the literal `homegrown/protocols/` string; that string must exist in source SKILL.md (post-A1, A2 revert) |
| A1, A2, A3, A4 | V1, V2 | STRONG | Verification depends on edits being complete |
| B1 | V1 | STRONG | V1 verifies B1 |
| B2 | V2 | STRONG | V2 verifies B2 |
| C1 | (none) | NONE | Independent message-text update |
| A1 ↔ A2 | (parallel) | NONE | Each file independent |
| A3 ↔ A4 | (parallel) | NONE | Each file independent |
| B1 ↔ B2 | (parallel) | NONE | Each install script independent |
| V1 ↔ V2 | (parallel) | NONE | Each verification independent |

### Major clusters

- **Cluster S (Source SKILL.md edits):** A1, A2, A3, A4 — the 4 SKILL.md files. Within-cluster: A1∥A2 then A3∥A4 (sequential wave structure: edit commands/, then re-sync homegrown/).
- **Cluster I (Install script edits):** B1, B2 — independent, parallel.
- **Cluster V (Verification):** V1, V2 — depend on Clusters S and I.
- **Independent atom:** C1 — auxiliary message text in resume.md.

---

## Step 2 — Boundaries

- **Boundary 1: Source SKILL.md / Install scripts.** Cluster S is content authoring; Cluster I is install logic. Edge between them: the literal string `homegrown/protocols/` must exist in source for install scripts to substitute.
- **Boundary 2: Within Cluster S — Wave 1 (commands/) / Wave 2 (homegrown/ re-sync).** A1, A2 first (commands/ is canonical editing target); A3, A4 are mechanical `cp` after.
- **Boundary 3: Edits / Verification.** V1 and V2 must come after their corresponding edits.
- **Boundary 4: Auxiliary message (C1) / everything else.** Independent.

---

## Step 3 — Boundary Validation (Bottom-Up)

Atoms map cleanly:
- 4 SKILL.md files → Cluster S ✓
- 2 install scripts → Cluster I ✓
- 1 auxiliary message → C1 (independent) ✓
- 2 verifications → Cluster V ✓

No atoms split across clusters; no cluster groups atoms that don't belong.

**Confidence: HIGH on boundaries.**

---

## Step 4 — Question Tree

### Piece 1: Revert MVL/MVL+ SKILL.md path wording

**Question:** What's the proposed wording that replaces the current "Try ~/.claude/skills/protocols/conclude.md OR homegrown/protocols/conclude.md" prose with a single literal in-repo path?

**Verification:**
- [ ] Both `commands/MVL.md` and `commands/MVL+.md` contain `Load \`homegrown/protocols/conclude.md\` in full and execute the **CONCLUDE** protocol on this inquiry's folder.` (and corresponding "Do not execute CONCLUDE from memory; always load `homegrown/protocols/conclude.md` before invoking.")
- [ ] No remaining mentions of `~/.claude/skills/protocols/conclude.md` in source SKILL.md content (those paths are install-time substitutions, not source content).
- [ ] Wording is symmetric across MVL and MVL+ (same pattern; just MVL+ has extended-pipeline framing).

**Cluster:** S (Wave 1). **Atoms:** A1, A2.

### Piece 2: Re-sync homegrown SKILL.md from commands

**Question:** Run `cp commands/MVL.md homegrown/MVL/SKILL.md` and `cp commands/MVL+.md homegrown/MVL+/SKILL.md` to mirror the Wave 1 edits.

**Verification:**
- [ ] `diff commands/MVL.md homegrown/MVL/SKILL.md` returns empty.
- [ ] `diff commands/MVL+.md homegrown/MVL+/SKILL.md` returns empty.

**Cluster:** S (Wave 2). **Atoms:** A3, A4. **Depends on:** Piece 1 (Wave 1).

### Piece 3: Add sed substitution to install_for_claude.sh

**Question:** What's the specific edit to `install_for_claude.sh` that pipes downloaded MVL and MVL+ SKILL.md content through `sed 's|homegrown/protocols/|~/.claude/skills/protocols/|g'`?

**Verification:**
- [ ] `install_for_claude.sh`'s loop over `skills_no_refs` (MVL, MVL+) wraps the `curl -fsSL ... -o "$target"` with sed: `curl -fsSL ... | sed 's|homegrown/protocols/|~/.claude/skills/protocols/|g' > "$target"`.
- [ ] Other skills (sense-making, innovate, etc.) retain their unchanged `curl -o` (only MVL and MVL+ reference protocols).
- [ ] sed pattern uses `|` as delimiter (not `/`) to avoid escaping the slashes in paths.
- [ ] No `-i` flag (cross-platform via stdin/stdout).

**Cluster:** I. **Atom:** B1.

### Piece 4: Add sed substitution to install_for_codex.sh

**Question:** What's the specific edit to `install_for_codex.sh`'s `install_skill_md` function that adds mode-dependent sed substitution for MVL and MVL+ skills?

**Sub-questions:**
- 4a: Which skills get the substitution? (Answer: MVL and MVL+ only — others don't reference protocols.)
- 4b: How is the target path computed? (`PROTO_TARGET="$TARGET/protocols"` since `$TARGET` is already mode-aware — `~/.codex/skills` for --user, `.codex/skills` for --repo.)
- 4c: Where in `install_skill_md` does the substitution go? (After the YAML-frontmatter wrapping, before the final write — so the substitution runs on the full final content.)

**Verification:**
- [ ] `install_skill_md` accepts a third optional argument: `apply_protocol_sub` (true/false), defaulting to false.
- [ ] When `apply_protocol_sub=true`, the awk-stripped content is piped through `sed 's|homegrown/protocols/|'"$PROTO_TARGET"'/|g'` before final write.
- [ ] The two callers for MVL and MVL+ pass `apply_protocol_sub=true`.
- [ ] Other callers omit the argument (default false).
- [ ] `PROTO_TARGET="$TARGET/protocols"` is computed once at the top of the install loop.

**Cluster:** I. **Atom:** B2.

### Piece 5: Verify install_for_claude.sh result

**Question:** Run `bash install_for_claude.sh` (or equivalent dry-run with cp instead of curl) and verify that resulting `~/.claude/skills/MVL/SKILL.md` contains the literal `~/.claude/skills/protocols/conclude.md` path and NO `homegrown/protocols/` references.

**Verification:**
- [ ] `grep "~/.claude/skills/protocols/conclude.md" ~/.claude/skills/MVL/SKILL.md` returns the line.
- [ ] `grep "homegrown/protocols/" ~/.claude/skills/MVL/SKILL.md` returns empty.
- [ ] Same for MVL+.
- [ ] Other skills (sense-making, etc.) installed normally (no path issues introduced).

**Cluster:** V. **Atom:** V1. **Depends on:** Pieces 1, 2, 3.

### Piece 6: Verify install_for_codex.sh result

**Question:** Run `bash install_for_codex.sh --repo` (local) and verify `.codex/skills/MVL/SKILL.md` contains `.codex/skills/protocols/conclude.md` (or equivalent for --user mode at `~/.codex/skills/protocols/conclude.md`).

**Verification:**
- [ ] For --repo mode: `grep ".codex/skills/protocols/conclude.md" .codex/skills/MVL/SKILL.md` returns the line.
- [ ] For --user mode: `grep "~/.codex/skills/protocols/conclude.md" ~/.codex/skills/MVL/SKILL.md` returns the line.
- [ ] No `homegrown/protocols/` references in the installed files.
- [ ] YAML frontmatter still wrapped correctly.

**Cluster:** V. **Atom:** V2. **Depends on:** Pieces 1, 2, 4.

### Piece 7 (Auxiliary): Update homegrown/protocols/resume.md failure-mode message

**Question:** What's the new wording for `homegrown/protocols/resume.md` line 160 that uses single in-repo path instead of listing dual paths?

**Verification:**
- [ ] Line 160 (or wherever the failure-mode message is) says: "Could not load `homegrown/protocols/resume.md`. Run RESUME manually..." (or equivalent single-path wording).
- [ ] No mention of `~/.claude/skills/protocols/resume.md` in the failure-mode message.

**Cluster:** Auxiliary. **Atom:** C1. **Depends on:** none (independent).

---

## Step 5 — Interface Map

| From | To | What flows | Direction |
|---|---|---|---|
| Piece 1 (commands/MVL.md, commands/MVL+.md edits) | Piece 2 (homegrown re-sync) | Updated SKILL.md content | One-way (Wave 1 → Wave 2) |
| Piece 1 | Pieces 3, 4 (install scripts) | The literal string `homegrown/protocols/` (substitution target) must exist in source SKILL.md | One-way (data dependency) |
| Pieces 1, 2, 3 | Piece 5 (verify Claude) | All edits must be applied before verification | Sequential gate |
| Pieces 1, 2, 4 | Piece 6 (verify Codex) | All edits must be applied before verification | Sequential gate |
| Piece 7 (auxiliary) | (none) | Independent | n/a |

No circular dependencies.

---

## Step 6 — Dependency Order

### Phase 0 (Decisions): no separate decision atoms — sensemaking already produced the verdict.

### Phase 1 (Source SKILL.md, sequential within):

- **Wave 1: Pieces 1 (parallel within: A1 + A2)** — edit commands/MVL.md and commands/MVL+.md.
- **Wave 2: Piece 2 (parallel within: A3 + A4)** — re-sync homegrown/MVL/SKILL.md and homegrown/MVL+/SKILL.md from commands/.

### Phase 2 (Install scripts, parallel after Phase 1):

- **Pieces 3, 4 in parallel:** B1 (install_for_claude.sh) + B2 (install_for_codex.sh).

### Phase 3 (Verification, parallel after Phase 2):

- **Pieces 5, 6 in parallel:** V1 (dry-run Claude) + V2 (dry-run Codex).

### Auxiliary (anytime):

- **Piece 7:** independent. Can run alongside any phase.

### Total ordering

```
Phase 1 — Source (~5-10 min):
  Wave 1 (parallel):
    ├── Piece 1a (commands/MVL.md)
    └── Piece 1b (commands/MVL+.md)
  Wave 2 (parallel after Wave 1):
    ├── Piece 2a (cp → homegrown/MVL/SKILL.md)
    └── Piece 2b (cp → homegrown/MVL+/SKILL.md)

Phase 2 — Install scripts (parallel after Phase 1, ~10-15 min):
  ├── Piece 3 (install_for_claude.sh sed substitution)
  └── Piece 4 (install_for_codex.sh sed substitution)

Phase 3 — Verification (parallel after Phase 2, ~5-10 min):
  ├── Piece 5 (dry-run Claude install)
  └── Piece 6 (dry-run Codex install)

Auxiliary (anytime, ~2 min):
  └── Piece 7 (resume.md failure message)
```

**Total estimated time:** ~25-40 min focused editing + verification.

---

## Step 7 — Self-Evaluation

### Minimum 3-dimension check

| Dimension | Pass/Fail | Reasoning |
|---|---|---|
| **Independence** | ✓ PASS | Each piece is answerable independently within its phase. Pieces 1a/1b parallel; 2a/2b parallel; 3/4 parallel; 5/6 parallel; 7 fully independent. |
| **Completeness** | ✓ PASS | The 7 pieces cover the full Option C migration plan from sensemaking. Reassembly: given all 7 done → SKILL.md content has single literal path; install scripts produce literal target paths; verification confirms; auxiliary message updated. |
| **Reassembly** | ✓ PASS | Phases 1 → 2 → 3 produce working migration. Verification confirms via dry-runs. |

### Full 7-dimension check

| Dimension | Score | Reasoning |
|---|---|---|
| Independence | ✓ HIGH | Each piece well-scoped; parallelism explicit. |
| Completeness | ✓ HIGH | Full migration covered. |
| Reassembly | ✓ HIGH | Phases produce working state. |
| Tractability | ✓ HIGH | Each piece is 2-15 min focused work. |
| Interface clarity | ✓ HIGH | Cross-piece dependencies explicit (data + sequential). |
| Balance | ✓ HIGH | Pieces 3 and 4 are heaviest (install script edits, ~10-15 min each); Pieces 1-2 and 5-7 are lighter. Proportional. |
| Confidence | ✓ HIGH | Top-down + bottom-up agree. |

### Failure mode self-check

- Premature decomposition? No — sensemaking concluded with HIGH confidence.
- Wrong boundaries? No — boundaries cut at low-coupling regions (source vs install vs verification).
- Hidden coupling? Captured: install scripts depend on the `homegrown/protocols/` literal string in source.
- Missing pieces? No — reassembly check passes.
- Over-decomposition? 7 pieces for ~10-15 line edits across 6 files is reasonable density.
- Imbalanced? Pieces 3-4 are heaviest but proportional to substantive work.
- Ignoring dependencies? No — phasing explicit.

---

## Final Deliverable

### Question Tree (7 pieces)

1. Revert MVL/MVL+ SKILL.md path wording (commands/) — Wave 1
2. Re-sync homegrown SKILL.md from commands — Wave 2
3. Add sed substitution to install_for_claude.sh
4. Add sed substitution to install_for_codex.sh's install_skill_md
5. Verify install_for_claude.sh dry-run
6. Verify install_for_codex.sh dry-run
7. Update homegrown/protocols/resume.md failure-mode message (auxiliary)

### Dependency Order

Phase 1 (source, sequential waves): 1 → 2.
Phase 2 (install scripts, parallel after Phase 1): 3, 4.
Phase 3 (verification, parallel after Phase 2): 5, 6.
Auxiliary (anytime): 7.

### Self-Evaluation: PASS on all 7 dimensions.

**Decomposition committed. Innovation will propose concrete designs (sed wording, exact insertion points); critique will evaluate.**
