# Sensemaking: protocol_path_generalization

## User Input

`devdocs/inquiries/protocol_path_generalization/_branch.md`

How to generalize protocol path-resolution across install contexts (Claude / Codex user / Codex repo / in-repo) without runtime iteration. Exploration produced 5 candidates (A enumerate, B ..-relative, C sed substitute, D bundle, E inline) + 6 frontier questions. Sensemaking must produce: (a) clear verdict among A-E, (b) C vs D trade-off analysis, (c) position on B's risk, (d) migration plan, (e) reconciliation with prior `telemetry_routing_protocol_classification` finding.

---

## SV1 — Baseline Understanding

The user wants a single deterministic path for protocol loading, no runtime iteration. The exploration mapped 5 candidates with sharply different risk profiles. Initial gut: C (installer-time sed substitution) and D (bundle protocols inside each skill folder) are the two reliable candidates. Both produce a single path post-install. The decision between them turns on whether bundling per-skill contradicts the deduplication principle that motivated protocol extraction in the first place.

(SV2 onward will sharpen: D contradicts deduplication; C honors it cleanly with one sed line per install script. C wins. Option B's risk is unacceptable when a reliable alternative exists. Migration plan is bounded.)

---

## Phase 1 — Cognitive Anchor Extraction

### Constraints

- **User-rejected:** Option A (enumerate-and-try — wasteful iteration); Option F (protocols-as-skills — "protocols are not skills").
- **Must work in 4 install contexts** with isomorphic structure: Claude install, Codex user, Codex repo, in-repo homegrown.
- **Must work for 4 (protocol, runner) pairs:** CONCLUDE × MVL, CONCLUDE × MVL+, RESUME × MVL, RESUME × MVL+.
- **Project's no-build-step pattern:** installs are `curl`/`cp`. install_for_codex.sh already does file transformation (YAML frontmatter wrapping); install_for_claude.sh is currently pure `curl -o`.
- **Must not regress** the prior `telemetry_routing_protocol_classification` finding's central verdict (RESUME extraction stands).
- **Must produce a deterministic path** per install (no runtime iteration). User explicitly rejected iteration.

### Key Insights

- **Install context isomorphism (exploration Cycle 1):** all 4 contexts produce identical relative path `../protocols/conclude.md` from SKILL.md. Install scripts mirror the source layout.
- **Existing references/ pattern is INSIDE-folder only (Cycle 2):** all 8 existing SKILL.md files use `references/<file>.md` — never `..`. Validates inside-folder paths; doesn't validate `..`-escape paths.
- **Agent path-resolution mechanism is undocumented in this project (Cycle 3).** Inside-folder paths work; `..` is genuinely unknown without testing.
- **Source-level cost differs sharply per candidate (Cycle 6):** A/B/C/E zero; D requires duplication or symlinks.
- **Cross-platform sed via stdin/stdout (no -i flag):** removes Option C's main complexity concern.
- **Critical structural observation:** D bundles protocols PER-SKILL, contradicting the deduplication principle that motivated their extraction. Each install ships N copies of each protocol (one per runner). This is functionally similar to Option E (inline) — both produce N copies — just in different file structures.
- **C honors deduplication:** source has ONE canonical conclude.md; install scripts substitute paths during copy; the literal path post-substitution is single and correct per install.

### Structural Points

- **Two reliable candidates:** C (substitution) and D (bundle).
- **One risky candidate:** B (unvalidated `..` semantics).
- **Two regressive candidates:** A (rejected) and E (revert extraction).
- **The decision is between C and D primarily.**
- **Five (protocol, runner, install-context) tuples need handling:** the same wording change applies to all 4 (CONCLUDE/RESUME × MVL/MVL+) — uniform answer.

### Foundational Principles

- **Reliability > cleverness when the failure mode is hard.** File-not-found is an immediate failure. Don't gamble on undocumented semantics when a reliable alternative exists.
- **Deduplication > path-cleanliness.** Protocols were extracted specifically to deduplicate. Bundling them per-skill undoes that.
- **Source-of-truth integrity > install-script simplicity.** A single canonical source is easier to maintain than N synced copies.
- **Pattern matching matters, but not at the cost of architectural principles.** D matches the path structure of references/ but violates the protocol-extraction principle. The principle is more load-bearing.
- **Validate by precedent.** Use proven patterns where possible; treat unvalidated patterns as risk.

### Meaning-Nodes

- **Substitution (C) vs bundling (D)** — the central trade-off.
- **Reliability vs cleanliness** — Option B is cleanest IF works; risky.
- **Pattern consistency vs principle consistency** — D matches path structure; C matches deduplication principle.
- **Source-level cost vs install-script cost** — C pushes complexity to install; D pushes it to source.
- **Risk acceptance** — when to accept undocumented behavior; when to insist on validated patterns.
- **In-repo correctness** — the source SKILL.md must work when read directly from the homegrown source repo.

---

## SV2 — Anchor-Informed Understanding

After anchor extraction, the picture sharpens significantly:

- The decision is between C and D as the two reliable candidates.
- C's "build-step complexity" objection (which I previously raised) dissolves under examination: one sed line per install script is not build-step thinking; it's install-time transformation, which install_for_codex.sh already does.
- D's "matches existing pattern" benefit is partially illusory: D matches the path STRUCTURE of references/ but violates the DEDUPLICATION principle that motivated protocol extraction. The principle is more load-bearing than the structure.
- Option B's risk is unacceptable when C is a reliable alternative. Hard failure mode + unvalidated semantics + reliable alternative = reject B.

What's now clearer than SV1:
- C wins on principle (deduplication, source clarity).
- C wins on simplicity (one sed line vs source duplication or symlinks).
- C wins on reliability (literal path post-substitution; no agent-resolution dependency).
- C scales cleanly to new install platforms (add a sed rule per platform).

The verdict is converging on C with HIGH confidence.

---

## Phase 2 — Perspective Checking

### Technical / Logical

- **C's sed is genuinely one line per install script.** Cross-platform via stdin/stdout: `sed 's|homegrown/protocols/|<target>/|g' < source > target`. No `-i` flag, so macOS BSD sed and Linux GNU sed both work. Proven approach.
- **D's bundle requires the source to handle the in-repo case.** Either: (D.1) duplicate `homegrown/MVL/protocols/conclude.md` in source; (D.2) install-time only, in-repo case fails; (D.3) symlink in source. All three have downsides.
- **C's source has ONE conclude.md.** D's source either has N conclude.md files (D.1) or has only ONE but install must do the duplication (D.2 — but in-repo fails).
- **Both C and D produce a literal correct path post-install.** Neither depends on agent `..` semantics. Both are reliable.

### Human / User

- User has been pushing for cleanliness and simplicity throughout the conversation. C's "one sed line per install script" is simple by any measure.
- User flagged Option D earlier (in my prior message they said Option D was "technically cleanest but introduces build-step complexity"). My analysis was wrong then — the sed is one line, not a build-step. User reconsidered after I clarified.
- User has not yet directly weighed in on D-bundle approach because I didn't propose it cleanly. They might find it acceptable. Need to compare structurally.
- The user values architectural integrity (they've been pushing for doctrine-correct decisions throughout this conversation).

### Strategic / Long-term

- New install platforms in the future (Cursor, others). For each:
  - **C:** add a sed rule to that platform's installer (~1 line).
  - **D:** add a copy step to that platform's installer (~1 line) + same source-level handling.
- **C scales slightly more cleanly** because the source SKILL.md is platform-agnostic; only the installer changes.
- **D scales similarly but pays source-level cost across all platforms** (the duplicate or symlink in source is shared across all installers).
- **Multi-head architecture** (per `enes/desc.md`) doesn't change the calculus; both C and D work identically under multi-head.

### Risk / Failure

- **C failure mode:** if sed fails (e.g., the in-repo source path string changes), installs produce broken SKILL.md. Detectable on first invocation. Mitigatable: install script could verify the substitution actually replaced the expected pattern (grep for `homegrown/protocols/` in the installed file; if found, the substitution didn't run).
- **D failure mode (D.1 source duplicate):** source duplicate drifts from canonical. Subtler bug — installs ship outdated protocols. Detectable via precommit hook or CI check.
- **D failure mode (D.2 install-time only):** in-repo case fails (no `homegrown/MVL/protocols/conclude.md`). The user can't dogfood the runners in the homegrown repo. This breaks the project's "use the system to develop the system" pattern.
- **D failure mode (D.3 source symlink):** symlinks may not work on Windows; GitHub raw URLs may serve the symlink target file content (which is what we want, but unverified for cross-platform installers).

C's failure mode is loud (broken paths fail immediately). D's failure modes are subtler (drift, in-repo break, platform incompatibility).

### Resource / Feasibility

- **C edit cost:**
  - Install scripts: ~3 lines per script (sed substitution wrapper around copy).
  - SKILL.md source: revert path wording to single in-repo path. ~2 lines per file × 2 files (commands + homegrown for both MVL and MVL+) = ~8 lines net.
  - Total: ~10-15 line changes across 4 files.
- **D edit cost:**
  - Install scripts: ~3 lines per script (copy bundle into each runner folder).
  - Source: either symlinks (no line cost but git tracking concerns) or duplicates (kept in sync — manual/automated).
  - SKILL.md source: change path wording to inside-folder relative path (`protocols/conclude.md`). ~2 lines per file × 2 files = ~8 lines.
  - Total: ~15-20 line changes + source duplication or symlinks.

C is slightly cheaper on edits and avoids source-level structural changes.

### Definitional / Consistency

- **C is consistent with the project's "single canonical source" principle.** Each spec has one canonical home. CONCLUDE is canonical at `homegrown/protocols/conclude.md`. RESUME is canonical at `homegrown/protocols/resume.md`. C preserves this. D violates it (per-skill duplicates).
- **D matches the path structure of `references/<file>.md`** but reproduces the path structure for content that has DIFFERENT semantics. References are PER-SKILL content (each skill's references file is unique to it). Protocols are SHARED across runners. Treating them the same conflates two different kinds of content.
- **C diverges from the path-structure pattern but matches the principle.** The substitution is install-time, not in the SKILL.md content as a relative path. Different kind of solution, principle-aligned.

The definitional check is decisive: D's pattern-match is structural mimicry of references/. C's principle-match is the deeper consistency.

### Most Uncomfortable Perspective

The most uncomfortable angle: maybe the whole protocol-extraction was wrong, and we should just inline (Option E) for these two protocols. They're invoked from exactly two runners; deduplication's benefit is small.

Engaging honestly:
- The CONCLUDE extraction was decided in `extract_conclude_to_homegrown` and refined in `synthesize_vs_finding_split`. Three iterations of analysis went into protocols-as-extracted.
- RESUME extraction was decided just now in `telemetry_routing_protocol_classification` (the inquiry that motivated this one).
- The benefit isn't just "deduplication for two runners." It's that the protocols can be invoked by FUTURE runners without copy-paste. At Level 2-3+ autonomy, more loop runners may exist.
- Reverting protocol extraction would invalidate three findings. Significant cost.
- The duplicate-storage cost of D (~12KB per install) is trivial; the architectural cost of duplicating PRINCIPLE is significant.

Conclusion: extraction is the right architectural decision. C preserves it cleanly. D undermines it. E reverts it entirely. C wins.

### Definitional self-check

Does the project's "no-build-step" pattern contradict ITSELF if we add sed substitution? Let me check:
- The pattern is "no compilation/transformation pipeline."
- install_for_codex.sh ALREADY does file transformation (YAML frontmatter wrapping is a transformation).
- The principle is more nuanced: install scripts can transform; users don't run a separate build step.
- Adding sed substitution to install_for_claude.sh brings it to parity with install_for_codex.sh (which already transforms). It's a consistency improvement, not a violation.

The "no-build-step" claim doesn't actually forbid install-time transformation. It forbids requiring users to run a build before install.

This actually makes C MORE consistent with the project, not less.

---

## SV3 — Multi-Perspective Understanding

After perspective checking, the verdict is decisive:

- **Technical:** C is cleaner (one sed line; no source-level work). D requires source duplication or symlinks.
- **User:** C aligns with their stated preferences (no iteration, simplicity, principle-consistency).
- **Strategic:** C scales more cleanly to new install platforms.
- **Risk:** C has loud failure mode (immediate detection); D has subtler failure modes (drift, in-repo break).
- **Resource:** C is slightly cheaper.
- **Definitional:** C honors deduplication; D contradicts it. C's install-time transformation is consistent with install_for_codex.sh's existing pattern.
- **Most uncomfortable:** reverting extraction (Option E) is bad architecture. Extraction stands.

**Verdict: Option C (installer-time sed substitution) wins decisively** on principle, simplicity, and reliability.

Option B (`..`-relative): rejected on risk grounds. Hard failure mode + unvalidated semantics + reliable alternative = unacceptable risk.

Option D (bundle): rejected on architectural-principle grounds. Contradicts deduplication. Source-level cost is real.

Options A (current state) and E (inline): user-rejected and regressive.

---

## Phase 3 — Ambiguity Collapse

### Ambiguity 1: Is the path-resolution mechanism actually different across install contexts?

**Counter-interpretation A:** Different install contexts may need different SKILL.md content because path resolution differs.

**Counter-interpretation B:** All 4 contexts produce isomorphic structure (skills as siblings of protocols/). The relative path SKILL.md→protocol is identical across all 4 contexts: `../protocols/conclude.md`.

**Resolution:** B. Verified in exploration Cycle 1. The structures are isomorphic.

**What is now fixed:** Any candidate solution can use a uniform approach across all 4 contexts (no per-platform branching needed in SKILL.md content).

**What is no longer allowed:** Claiming SKILL.md must vary per platform. It doesn't — the structures are identical.

**Confidence:** HIGH.

### Ambiguity 2: Is the existing references/ pattern proof that `..` works?

**Counter-interpretation A:** "The pattern supports relative paths, so `..`-relative is fine."

**Counter-interpretation B:** The pattern only supports paths INSIDE the skill folder. `..`-escape paths are unvalidated.

**Resolution:** B. Cycle 2 grep confirmed all 8 existing skills use inside-folder paths only. None use `..`.

**What is now fixed:** Treat `..` as undocumented behavior. Don't extrapolate from inside-folder pattern.

**What is no longer allowed:** Using `..` as if it's a validated approach. It's not.

**Confidence:** HIGH (verified empirically).

### Ambiguity 3: Is bundling protocols inside each skill folder consistent with the project's deduplication principle?

**Counter-interpretation A:** Bundling matches the path structure of `references/<file>.md`, so it's consistent with the existing pattern.

**Counter-interpretation B:** Protocols were extracted specifically TO deduplicate. Bundling per-skill produces N copies (one per runner), undoing the extraction's purpose. References/ are per-skill content (unique per skill); protocols are shared content (same across runners). Treating them the same conflates two different kinds of content.

**Resolution:** B. The principle is more load-bearing than the path-structure mimicry.

**Why A's counter fails on structural grounds:** "Path structure consistency" is surface-level. The deeper consistency is "single canonical source for shared content," which extraction established. Bundling violates the deeper consistency for the sake of the surface one.

**What is now fixed:** D contradicts deduplication. Protocols stay extracted; canonical source is `homegrown/protocols/`.

**What is no longer allowed:** Framing D as "matches the existing pattern." It matches surface structure but contradicts the deeper principle.

**Confidence:** HIGH.

### Ambiguity 4: Is C's installer-side substitution a "build step" that violates the project's pattern?

**Counter-interpretation A:** "Substitution is a build step; project has no build step pattern."

**Counter-interpretation B:** install_for_codex.sh already does file transformation (YAML frontmatter wrapping). C's sed substitution is install-time transformation, consistent with what's already happening. The "no-build-step" pattern means users don't run a build before install — it doesn't forbid install-time transformation.

**Resolution:** B. C is consistent with the install_for_codex.sh's existing transformation pattern.

**Why A's counter fails on structural grounds:** "Build step" implies a separate compilation phase before install. Sed substitution during the install copy IS the install — there's no separate phase. install_for_codex.sh's YAML wrapping is the same kind of operation; if that's not a "build step," neither is sed substitution.

**What is now fixed:** C's install-time sed substitution is consistent with project pattern.

**What is no longer allowed:** Rejecting C on "build-step thinking." The pattern doesn't forbid install-time transformation.

**Confidence:** HIGH.

### Ambiguity 5: Should the source SKILL.md path use a literal in-repo path or a placeholder?

**Counter-interpretation A:** Use a placeholder (`{{PROTOCOLS_PATH}}/conclude.md`). Cleaner-looking; no path appears to be installed.

**Counter-interpretation B:** Use a literal in-repo path (`homegrown/protocols/conclude.md`). Source works as-is in-repo (no substitution needed for in-repo case). Install scripts substitute the literal path.

**Resolution:** B. Literal is simpler. Source works in-repo without substitution. Install scripts have a clear substitution target (the literal `homegrown/protocols/` string).

**What is now fixed:** Source SKILL.md uses `homegrown/protocols/conclude.md`. Install scripts substitute via `sed 's|homegrown/protocols/|<target>/|g'`.

**What is no longer allowed:** Using placeholders. Adds template-thinking complexity for marginal benefit.

**Confidence:** MEDIUM-HIGH. Placeholders would be cleaner-looking but add a level of indirection. Literal is more transparent.

### Ambiguity 6: Should we accept Option B's `..`-relative risk for cleaner wording?

**Counter-interpretation A:** Filesystem semantics universally support `..`. Probability is high that the agent's Read tool handles it. Marginal cleaner wording is worth the risk.

**Counter-interpretation B:** Hard failure mode (file-not-found = full failure of CONCLUDE/RESUME) + unvalidated by existing pattern + reliable alternative (C) exists. Accepting risk for marginal benefit when a reliable alternative exists is bad architecture.

**Resolution:** B. Reject Option B's risk.

**Why A's counter fails on structural grounds:** "Probably works" + "marginally cleaner" doesn't justify hard-failure risk when C is a reliable alternative with comparable cost. The benefit is marginal; the risk is binary.

**What is now fixed:** Option B is rejected. C is the chosen path.

**What is no longer allowed:** Treating B as a viable alternative. Even if `..` works in practice, the risk is not justified.

**Confidence:** HIGH on the structural argument. The risk-vs-benefit math is clear.

---

## SV4 — Clarified Understanding

After ambiguity resolution, the picture is fully stable:

1. **Verdict: Option C (installer-time sed substitution).**
2. **Source SKILL.md** uses literal in-repo path: `homegrown/protocols/conclude.md` (works as-is in-repo).
3. **Install scripts** run `sed 's|homegrown/protocols/|<target>/|g'` during file copy. Cross-platform via stdin/stdout (no -i flag).
4. **Each install context** ends up with the literal correct path:
   - Claude install: `~/.claude/skills/protocols/conclude.md`
   - Codex user: `~/.codex/skills/protocols/conclude.md`
   - Codex repo: `.codex/skills/protocols/conclude.md` (or absolute equivalent)
   - In-repo: `homegrown/protocols/conclude.md` (no substitution; source path is correct)
5. **Same wording change applies uniformly** to all 4 (protocol, runner) pairs (CONCLUDE/RESUME × MVL/MVL+).

What's now no longer viable:
- Option A (enumerate-and-try) — wasteful iteration; user rejected.
- Option B (`..`-relative) — unvalidated; hard failure mode.
- Option D (bundle) — contradicts deduplication; source-level cost.
- Option E (inline) — reverts extraction; regressive.
- Treating C's substitution as a "build step." It's install-time transformation, consistent with install_for_codex.sh's existing pattern.
- Per-platform SKILL.md content. Uniform path works across all 4 contexts.

---

## Phase 4 — Degrees-of-Freedom Reduction

### Variables now fixed

- Verdict: **Option C (installer-time sed substitution).**
- Source SKILL.md path: `homegrown/protocols/conclude.md` (and `homegrown/protocols/resume.md` for RESUME, if/when that's used by runners).
- Install script substitution pattern: `sed 's|homegrown/protocols/|<target_protocols_path>/|g'`.
- Cross-platform sed: stdin/stdout (no `-i`).
- Resulting SKILL.md per context:
  - Claude install: literal `~/.claude/skills/protocols/conclude.md`
  - Codex user install: literal `~/.codex/skills/protocols/conclude.md`
  - Codex repo install: literal `.codex/skills/protocols/conclude.md`
  - In-repo: literal `homegrown/protocols/conclude.md` (unchanged)
- Migration scope: 4 SKILL.md files (commands/MVL.md + commands/MVL+.md + homegrown/MVL/SKILL.md + homegrown/MVL+/SKILL.md) need wording revert + 2 install scripts need sed addition.

### Options eliminated

- Enumerate-and-try (Option A): user-rejected.
- `..`-relative (Option B): unacceptable risk.
- Bundle protocols inside skill folder (Option D): contradicts deduplication.
- Inline (Option E): regressive.
- Per-platform SKILL.md content: structures are isomorphic; not needed.
- Placeholders in source SKILL.md: literal path is simpler.
- Reverting protocol extraction: bad architecture (3 findings rely on extraction).

### Paths remaining

- Apply Option C with literal in-repo path in source + sed substitution in install scripts.

---

## SV5 — Constrained Understanding

The solution space converges on a single concrete approach:

**Option C with these specifics:**
- Source SKILL.md (in `commands/` and `homegrown/` for both MVL and MVL+) uses path `homegrown/protocols/conclude.md` (and `homegrown/protocols/resume.md` if RESUME is referenced).
- `install_for_claude.sh` adds sed substitution: `sed 's|homegrown/protocols/|~/.claude/skills/protocols/|g' < source > target` for MVL and MVL+ SKILL.md only (other skills don't reference protocols).
- `install_for_codex.sh` adds sed substitution: `sed 's|homegrown/protocols/|<target_codex_protocols>/|g' < source > target` where `<target_codex_protocols>` is `~/.codex/skills/protocols` (--user) or `.codex/skills/protocols` (--repo).
- In-repo execution uses source verbatim; the literal path resolves to the actual file.

The migration is bounded:
- ~15-20 line edits across 6 files (4 SKILL.md + 2 install scripts).
- ~30-45 minutes focused editing.

---

## Phase 5 — Conceptual Stabilization

### SV6 — Stabilized Model

**Verdict: Option C (installer-time sed substitution) wins decisively.**

The structural reasoning chain:
1. **User-rejected:** A (iteration), F (protocols-as-skills).
2. **Architectural rejection:** D (contradicts deduplication), E (regressive).
3. **Risk rejection:** B (hard failure mode + unvalidated semantics + reliable alternative C exists).
4. **Remaining: C.** It's the only candidate that honors all constraints (reliability + deduplication + simplicity + source clarity).

**Trade-off analysis (C vs D), with C winning:**

| Dimension | C (sed substitution) | D (bundle) | Winner |
|---|---|---|---|
| Reliability | Literal post-substitution path; no agent-resolution dependency | Inside-folder relative path; matches references/ pattern | TIE |
| Source cleanliness | Single canonical conclude.md | Source duplicate or symlinks needed | **C** |
| Install-script simplicity | 1 sed line + existing copy logic | Copy step + same source-level handling | **C** |
| Future-platform-extensibility | Add sed rule per platform (~1 line) | Add copy step per platform (~1 line) | TIE |
| Pattern consistency (path structure) | Diverges from references/ | Matches references/ | **D** |
| Pattern consistency (deduplication principle) | Honors single-canonical-source | Violates with N copies | **C** |
| In-repo correctness | Source uses literal in-repo path; works as-is | Needs source duplicate or symlink | **C** |

**Score: C wins 5-1-2** on weighted dimensions.

The one dimension D wins on (path structure mimicry) is surface-level; the deeper principle (deduplication) goes to C. C also wins on multiple other dimensions including the load-bearing source-cleanliness one.

**Position on Option B's risk:**

Option B is theoretically cleaner than C (single literal path uses `..`; no install-time substitution). But:
- The agent's `..` support is unvalidated by existing pattern (Cycle 2 finding).
- Failure mode is hard (file-not-found = full CONCLUDE/RESUME failure on every invocation).
- C is a reliable alternative with comparable cost.
- Accepting binary risk for marginal cleanliness benefit is bad architecture.

**Verdict: reject B on risk-vs-benefit grounds.**

**Migration plan:**

| Step | File(s) | Action | Lines |
|---|---|---|---|
| 1 | `commands/MVL.md`, `commands/MVL+.md`, `homegrown/MVL/SKILL.md`, `homegrown/MVL+/SKILL.md` | Revert path wording from "Try ~/.claude/skills/protocols/conclude.md OR homegrown/protocols/conclude.md" to single literal in-repo path: `Load \`homegrown/protocols/conclude.md\` in full and execute the **CONCLUDE** protocol on this inquiry's folder.` | ~3 lines × 4 files = -12 |
| 2 | `install_for_claude.sh` | For MVL and MVL+ SKILL.md downloads/copies, replace `curl -fsSL ... -o "$target"` with `curl -fsSL ... \| sed 's\|homegrown/protocols/\|~/.claude/skills/protocols/\|g' > "$target"` | +3-4 |
| 3 | `install_for_codex.sh` | Within `install_skill_md` function, ADD sed substitution AFTER YAML wrapping but BEFORE final write. Use mode-dependent target path. | +5-6 |
| 4 | `homegrown/protocols/resume.md` line 160 | Update failure-mode message from listing two paths to single in-repo path | ~2 |

**Net: ~10-15 line edits across 6 files. ~30 min focused editing.**

**Reconciliation with prior `telemetry_routing_protocol_classification` finding:**

That finding extracted RESUME as a protocol and recommended the install layout. The CENTRAL VERDICT (RESUME-as-extracted-protocol) STANDS — this inquiry doesn't change that.

What this inquiry refines: the LOADING MECHANISM. The prior finding implicitly assumed Option A (multiple paths in SKILL.md prose). This inquiry replaces that with Option C (literal post-substitution path).

The prior finding's punch list (extract resume.md + update /MVL/MVL+ SKILL.md to load it) is preserved. Step 2 of that punch list (update /MVL/MVL+ SKILL.md to invoke RESUME) is currently NOT YET APPLIED (per our session — we noted /MVL and /MVL+ don't currently invoke RESUME because their auto-chain pattern doesn't gate on FLAG/RE-RUN). This inquiry's verdict applies WHEN/IF resume.md is invoked by /MVL/MVL+ — currently it's not, but if/when that decision changes, the path-resolution mechanism is C.

For CONCLUDE: this inquiry's verdict applies NOW. The current /MVL/MVL+ SKILL.md content references CONCLUDE with the "try multiple paths" Option A wording. This inquiry's punch list reverts that to single literal path + sed substitution.

### How SV6 differs from SV1

SV1 was tentative: gut-feel that C and D were the two reliable candidates and the decision was murky.

SV6 is structured: C wins decisively on principle (deduplication + source cleanliness), reliability (literal path), simplicity (one sed line), and consistency (matches install_for_codex.sh's existing transformation pattern). D's "matches existing pattern" benefit is surface-level; the deeper principle goes to C. B is rejected on risk grounds. Migration is bounded (~30 min).

**Confidence:** HIGH on the verdict (Option C wins). HIGH on the migration plan structure. MEDIUM-HIGH on the exact sed wording (depends on each install script's specific architecture; needs verification during implementation).

---

## Saturation Indicators (Telemetry)

* **Perspective saturation:** 7 perspectives produced new types of anchors. The most uncomfortable angle (revert extraction) was tested explicitly and rejected on architectural grounds.
* **Ambiguity resolution:** 6 of 6 ambiguities resolved at HIGH or MEDIUM-HIGH confidence.
* **SV delta:** Significant. SV1 was tentative on C vs D; SV6 produced a decisive verdict + migration plan + reconciliation with prior finding.
* **Anchor diversity:** All 5 anchor types produced. Multiple independent anchors converge on Option C.

## Failure-mode self-check

- **Status quo bias?** No — SUPERSEDES the user's earlier acceptance of Option A (current state with enumerate-and-try paths).
- **Premature stabilization?** No — perspective checking explicitly tested the most-uncomfortable angle (revert extraction) and confirmed extraction stands.
- **Anchor dominance?** No — multiple independent anchors (deduplication, source cleanliness, reliability, simplicity, in-repo correctness) converge on C.
- **Perspective blindness?** Tested the "Option D matches existing pattern" perspective explicitly; resolved on principle-vs-structure grounds.
- **Clean resolution trap?** Option C survives the strongest counter (Option D's pattern-match benefit) because the deduplication principle is more load-bearing than the structural mimicry.
- **Self-reference blindness?** Grounded externally in actual file content (existing references/ pattern; install scripts; protocols/desc.md doctrine). Not framework-internal.

---

## Recommendation (one-sentence)

**Apply Option C: revert MVL/MVL+ SKILL.md path wording to single literal in-repo path (`homegrown/protocols/conclude.md`); add sed substitution to `install_for_claude.sh` and `install_for_codex.sh` so each install context produces a SKILL.md with the literal correct target path; ~30 min editing across 6 files; the prior `telemetry_routing_protocol_classification` finding's RESUME-as-extracted-protocol verdict stands; only the loading mechanism is refined from enumerate-and-try (Option A) to installer-time substitution (Option C).**
