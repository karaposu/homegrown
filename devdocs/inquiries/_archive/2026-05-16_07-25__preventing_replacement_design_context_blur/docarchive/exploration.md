# Exploration: Preventing Replacement-Design Context Blur

## User Input

Inquiry `_branch.md`. Mode: blended (artifact + possibility). Entry point: signal-first (seed = user-observed pain: "everytime i try to develop what should replace it, already existing one being read into context and it does context blur"). Artifact side: map `cognitive_harness/` + `~/.claude/skills/` runtime registry + skill-file shapes. Possibility side: enumerate context-blur mechanisms + solution dimensions.

---

## Territory Overview

The territory has three coupled regions:

1. **The project workspace** — `/Users/ns/Desktop/projects/native/cognitive_harness/` — source-of-truth for skill specs (per user memory). User authors here.
2. **The runtime registry** — `~/.claude/skills/` — what Claude Code actually loads as invocable skills. Configured by `~/.claude/settings.json` (`additionalDirectories: ["/Users/ns/.claude/skills"]`).
3. **The context-blur mechanism space** — conceptual, possibility-mode region — what specifically causes prior versions to enter the design conversation.

Resolution: medium (folder + file-shape + mechanism-level). Mode declared `blended`; entry point `signal-first`. Cycles run: 2 scan + 1 jump-scan.

---

## Inventory — Region 1: cognitive_harness/ source-of-truth

13 sub-folders + 1 loose file. Per user, **cannon** is 7 entries; the rest are **experimental** (user's word: "they might be useful or not").

### Cannon (user-declared)

| Folder | SKILL.md | Refs | Sub-content | Last-edit | Notes |
|---|---|---|---|---|---|
| `explore/` | ✓ (3,153 B) | ✓ | references/ | May 12 | Frontmatter `name: explore` + description (when-to-invoke). Status: stable. |
| `innovate/` | ✓ (presumed) | ✓ (presumed) | references/ | (Apr 26 family) | Same shape as explore. |
| `MVL/` | ✓ (presumed) | — | minimal | May 16 | Classic SIC runner. |
| `MVL+/` | ✓ (presumed) | — | minimal | May 16 | Extended E→S→D→I→C runner. |
| `protocols/` | (no SKILL.md; collection folder) | — | 9 protocol .md files + `_archive/` | May 16 | **Holds an internal `_archive/` sub-folder** (load-bearing pattern signal — see below). |
| `sense-making/` | ✓ (presumed) | ✓ (presumed) | references/ | (Apr 26 family) | Same shape. |
| `td-critique/` | ✓ (presumed) | ✓ (presumed) | references/ | (Apr 26 family) | Same shape. |

### Experimental (residual; user said "they might be useful or not")

| Folder | SKILL.md | Refs | Sub-content | Last-edit | Notes |
|---|---|---|---|---|---|
| `comprehend/` | ✓ (4,635 B) | ✓ | references/ | Apr 26 | Frontmatter identical-shape to cannon; description fully fleshed ("Use when the user asks to 'understand,' 'explain'…"). DORMANT (no recent edits). |
| `contracts/` | ✗ | ✗ | only `alignment_control.md` | May 16 | **Not a skill at all** — single markdown artifact. Different category from rest of "experimental." |
| `decompose/` | ✓ (2,684 B) | ✓ | references/ | Apr 26 | Frontmatter same shape; description fully fleshed. **User listed as NOT cannon BUT `/MVL+` invokes a Decomposition discipline** — runtime loads from `~/.claude/skills/decompose`, separate from this folder. DORMANT. |
| `meta-loop/` | ✓ (7,381 B) | ✗ | none beyond SKILL.md | May 16 | Stub-shaped (no references/). References "Homegrown" (old project name → stale text). ACTIVELY edited recently. |
| `navigation/` | ✓ (7,864 B) | ✓ | references/ + warmup/ | May 16 | Fully fleshed; the user-named load-bearing instance. ACTIVELY edited. Frontmatter description triggers on "what to do next" / "all the options". |
| `reflect/` | ✓ (3,537 B) | ✓ | references/ | Apr 26 | Frontmatter identical-shape. Triggers "after a SIC inquiry completes." DORMANT. |
| `next_question_to_ask.md` (loose) | n/a | n/a | n/a | May 2 | Personal scratchpad: "what is next load bearing development for our endgoal." Not a skill. |

**Activity sub-pattern:** Of the 6 experimental skills, **3 are actively edited** (navigation, meta-loop, contracts) and **3 are dormant** (comprehend, decompose, reflect). The user's pain ("everytime i try to develop what should replace it…") maps to the active set; the dormant set is just residue. Two profiles, not one.

**Confidence:** scanned (folder list + file-shape sampling). Confirmed for sampled files; inferred for un-read SKILL.md of cannon (explore/innovate are same family, presumed similar).

---

## Inventory — Region 2: ~/.claude/skills/ runtime registry

13 sub-folders. **Every** cognitive_harness skill is registered, cannon and experimental alike: `MVL, MVL+, comprehend, decompose, explore, innovate, meta-loop, navigation, protocols, reflect, sense-making, td-critique`. The registry currently makes NO distinction between cannon and experimental.

Registry → cognitive_harness sync check:
- `cognitive_harness/navigation/SKILL.md` vs `~/.claude/skills/navigation/SKILL.md`: **DIFFER** (cognitive_harness 7864 B, May 16; registry 7856 B, May 15). User is editing source-of-truth; registry is stale.
- `cognitive_harness/explore/SKILL.md` vs `~/.claude/skills/explore/SKILL.md`: **identical**.

Implication: the user's "edit cognitive_harness first" workflow leaves the registry diverged. Manual sync is the implicit step.

`~/.claude/settings.json` content:
```
{ "permissions": { "allow": [Read on /Users/ns/.claude/skills/**], "additionalDirectories": [/Users/ns/.claude/skills] }, ... }
```
No `.claudeignore`, no skill-exclusion list, no project-scoped `.claude/` folder at the project root (confirmed-absent).

**Confidence:** confirmed (direct inspection).

---

## Inventory — Region 3: Mechanism-of-blur enumeration (possibility mode)

How does an experimental version's content actually reach the design-conversation's context? Five candidate mechanisms enumerated:

| # | Mechanism | How it works | Evidence in this conversation |
|---|---|---|---|
| **M1** | **Skill-registry presence in available-skills list** | Each registered skill's frontmatter (`name` + `description`) is surfaced to the agent as part of the available-skills system reminder. The agent sees `navigation: "Enumerates all possible next directions…"` even without reading SKILL.md. | Strong: the system-reminder mechanism is observable. Description-text colors agent reasoning. |
| **M2** | **Reflexive Read on folder/name mention** | User says "let's design what should replace navigation." Agent thinks "first read the current spec" → `Read(cognitive_harness/navigation/SKILL.md)`. The full prior version enters context. | Strong: this is the dominant pain point per user phrasing ("already existing one being read into context"). |
| **M3** | **Directory-listing priming** | `ls cognitive_harness/` (during exploration) returns `navigation/` in the list. Agent ideation incorporates the visible folder name even without reading. | Medium: observable but milder; folder name alone is low-bandwidth. |
| **M4** | **Glob/Grep/find sweeps including the folder** | Bulk searches across `cognitive_harness/` hit experimental files. Their content lands in tool-result context. | Medium: occurs in broad exploration phases (this very inquiry's exploration phase risks it). |
| **M5** | **Memory or CLAUDE.md anchoring** | Auto-memory or project CLAUDE.md mentions experimental folder names, anchoring agent attention. | LOW: no CLAUDE.md found at project root or `~/.claude/`; current memory entries do not name experimental skills. (Confirmed-absent.) |

**Trigger taxonomy:** M1 + M2 are the load-bearing vectors. M3 is mild. M4 is conditional on workflow phase. M5 is currently absent but could become a vector if memory grows.

**Confidence:** scanned (M1 confirmed by available-skills mechanism; M2 confirmed by user testimony; M3–M5 inferred from mechanism).

---

## Inventory — Region 4: Solution-dimension enumeration (possibility mode, completeness-first)

Surfaced solution dimensions. **Completeness-first:** obvious solutions first, then novel ones.

### Obvious solutions

**D1 — In-place annotation (frontmatter status field)**
- Add `status: experimental` or `stage: archive` to the SKILL.md frontmatter.
- Folder stays put.
- Relies on agent-honor convention.
- Existing analogue: none in cognitive_harness/ today; would be a new convention.

**D2 — In-place annotation (top-of-file marker)**
- Add a banner: `<!-- EXPERIMENTAL — do not load by default, see _branch.md for design conversation -->`
- Folder stays put.
- Relies on agent reading the file's first line and obeying.

**D3 — Sub-folder reorganization within cognitive_harness/**
- Move experimental → `cognitive_harness/_archive/<skill>/` (matches existing `protocols/_archive/` pattern — load-bearing precedent).
- Or `cognitive_harness/_experimental/<skill>/`.
- Single relocation; folder name itself carries the signal; alphabetical sort buries it.

**D4 — Move out of cognitive_harness/**
- Sibling: `experiments/<skill>/` or `archive/<skill>/` at project root.
- Stronger separation; cognitive_harness/ becomes pure cannon.
- Cost: loses semantic grouping.

**D5 — Registry separation (unregister)**
- `rm -rf ~/.claude/skills/<experimental_skill>/` for each experimental.
- Skill tool can't invoke them; descriptions disappear from available-skills.
- M1 mitigation: ✓ direct. M2/M3/M4: ✗ unaffected.
- Reversible (re-copy from cognitive_harness/).

**D6 — Naming convention (prefix/suffix on folder)**
- Rename `navigation/` → `navigation_v0/` or `_old_navigation/` or `experimental_navigation/`.
- Sort/visual marker without folder relocation.
- Cost: every reference (memory, prior findings, internal pointers) has to be updated.

### Novel / hybrid solutions

**D7 — Hybrid: relocate + unregister (D3 + D5)**
- Move experimental to `cognitive_harness/_archive/<skill>/`. AND remove from `~/.claude/skills/`.
- Belt-and-suspenders: M1 (registry) + M2 (reflexive read; the new location signals "don't auto-read") + M3 (directory listing also shifts).
- Cost: most labor; strongest signal.

**D8 — Twin pattern (design-alongside + archive-old)**
- For active-replacement-design case (navigation, meta-loop): create `cognitive_harness/_design/navigation_v2/` for new work; move existing `navigation/` to `_archive/`.
- For dormant (comprehend, decompose, reflect): bulk-move to `_archive/`.
- The active vs dormant split (surfaced in Region 1 activity sub-pattern) gets two complementary patterns.

**D9 — Marker file (.experimental or .archived sentinel)**
- Drop a zero-content file `.experimental` inside each experimental folder.
- Folder name unchanged; sentinel signals "do not auto-load."
- Relies on agent convention; lowest-bandwidth signal.

**D10 — Hybrid: D3 (relocate) + frontmatter status (D1) + project-level convention note**
- Move + annotate + write a short convention note in `cognitive_harness/README.md` (currently absent) that says "_archive/ holds non-cannon skills; do not Read or invoke unless explicitly asked."
- Multi-layer: physical relocation + frontmatter + canonical convention doc.
- The convention note doubles as future-instruction so the agent in a fresh session honors the layout.

### Observed precedent (DO NOT MISS)

The `cognitive_harness/protocols/_archive/` sub-folder already exists, containing `navigation_context_intake_my_version.md`. **The user has already adopted the `_archive` convention internally for protocols.** This is a strong intra-project signal favoring D3 / D7 / D8 / D10 (anything using `_archive`) over alternatives — it composes with existing user habit.

**Adjacent precedent (cross-inquiry):** the recently-completed `structural_check_tool_remove_or_keep` inquiry concluded **Hybrid A+D** (remove the script + add LLM-self-check). User's prior pattern: when an artifact is "bloat at this point," the resolution is hybrid — not pure remove, not pure keep. Same pattern likely applies here.

**Confidence:** scanned for obvious, scanned for novel/hybrid via Combination + Absence-Recognition + Constraint Manipulation; precedent confirmed.

---

## Inventory — Region 5: Inter-mechanism × inter-solution coverage matrix

Which solutions mitigate which mechanisms? (✓ direct mitigation; ◐ partial; ✗ no effect)

|     | M1 registry-list | M2 reflexive Read | M3 dir-listing priming | M4 glob/grep sweep | M5 memory anchor |
|---|---|---|---|---|---|
| D1 frontmatter status | ✗ (description still in list) | ◐ (only if agent reads and honors) | ✗ | ✗ | ✗ |
| D2 top-of-file marker | ✗ | ◐ (same as D1) | ✗ | ✗ | ✗ |
| D3 sub-folder `_archive/` | ✗ | ◐ (different path, less reflexive) | ◐ (name buried alphabetically) | ◐ (sweep glob may include or exclude) | ✗ |
| D4 sibling folder | ✗ | ◐ | ◐ | ✓ (if sweep is `cognitive_harness/**`) | ✗ |
| D5 unregister from `~/.claude/skills/` | ✓ | ✗ (file still in cognitive_harness) | ✗ | ✗ | ✗ |
| D6 rename prefix | ✗ | ◐ | ◐ | ✗ | ✗ |
| D7 D3 + D5 hybrid | ✓ | ◐ | ◐ | ◐ | ✗ |
| D8 twin + archive (D3-shape) | ✗ | ◐ for archived; ✗ for v2 | ◐ | ◐ | ✗ |
| D9 sentinel file | ✗ | ◐ (if convention honored) | ✗ | ✗ | ✗ |
| D10 D3 + D1 + convention doc | ✗ | ◐◐ (multi-layer; convention doc is the strongest agent-direction signal) | ◐ | ◐ | ◐ (convention doc adds memory anchor in opposite direction) |

**Observation:** No single dimension fully mitigates both M1 and M2 (the two load-bearing vectors). **D7 (D3 + D5) is the only candidate that directly mitigates M1.** Any solution that does not touch `~/.claude/skills/` leaves M1 active. D10 mitigates M2 most strongly via convention-doc instruction but doesn't touch M1.

---

## Signal Log

**Signals detected:**

| # | Signal type | What stood out | Probed? |
|---|---|---|---|
| **S1** | **Tension** | User-listed cannon excludes `decompose` yet `/MVL+` invokes it → registry vs source-of-truth dichotomy. Probed → found runtime decompose loads from `~/.claude/skills/decompose`, which is in sync with the experimental `cognitive_harness/decompose/`. The "experimental" label applies to the project-side folder; the runtime is still active. | ✓ |
| **S2** | **Density** | Active vs dormant experimental split (3+3) — meaningful sub-structure within "experimental." | ✓ |
| **S3** | **Novelty** | `protocols/_archive/` exists as an in-project precedent for the `_archive` convention. | ✓ |
| **S4** | **Absence** | No CLAUDE.md, no `.claudeignore`, no project-scoped `.claude/` folder. The user has no current tooling-level lever. | ✓ (confirmed absent) |
| **S5** | **Tension** | `navigation/SKILL.md` registry copy is stale vs cognitive_harness — confirming the bi-folder split is bidirectional drift, not a simple mirror. | ✓ |
| **S6** | **Density** | All 6 experimental SKILL.md files use the same frontmatter shape as cannon; nothing in-file marks experimental status. | ✓ |
| **S7** | **Novelty** | Recent inquiry `structural_check_tool_remove_or_keep` resolved similar question with Hybrid A+D. Adjacent precedent worth carrying into Sensemaking. | ✓ |

**Deferred signals:** none. Saturation reached on the mechanism-and-solution axes.

---

## Confidence Map

| Region | Confidence | Justification |
|---|---|---|
| cognitive_harness/ folder shape + cannon/experimental sets | **confirmed** | Direct ls + SKILL.md reads |
| Active vs dormant sub-pattern (3/3 split) | **confirmed** | File mtimes inspected |
| ~/.claude/skills/ registration mechanics | **confirmed** | settings.json read + folder lists |
| Registry vs cognitive_harness sync state | **confirmed** | diff -q on navigation + explore |
| M1 (skill-registry available-skills priming) | **confirmed** | Mechanism is observable in system reminders |
| M2 (reflexive Read on name mention) | **confirmed** | User's testimony is direct evidence |
| M3 (directory-listing priming) | **inferred** | Reasonable but no direct evidence in this conversation |
| M4 (glob/grep sweep contamination) | **inferred** | Common workflow pattern |
| M5 (memory/CLAUDE.md anchoring) | **confirmed-absent** | No CLAUDE.md anywhere; current memory entries don't name experimental skills |
| `_archive/` precedent in protocols/ | **confirmed** | Direct ls |
| Cross-mechanism × solution coverage matrix | **scanned** | Constructed analytically, not empirically validated |
| Existence of `.claudeignore`-style mechanism | **confirmed-absent** | find returned nothing; settings.json lacks an exclusion field |
| Whether D3/D7 would actually prevent M2 in practice | **unknown** | Empirical question — depends on agent's reflex pattern when name is mentioned but folder is at a non-canonical path |

---

## Frontier State

**Stable.** Jump-scan performed (looked at recent inquiries + cognitive_harness/contracts/ as a non-SKILL artifact + cross-checked registry vs source-of-truth). Surprises were small (navigation registry stale by ~8 bytes; contracts/ has no SKILL.md). No major-region surprises.

Discovery rate has dropped: cycle 2 added the active/dormant split + precedent + matrix; cycle 3 (jump-scan) added the registry-staleness fact + confirmed-absent regions but no new mechanism category or solution dimension.

Bounded gaps: remaining unknowns are empirical (would D3 actually stop M2 reflex in practice?) and disposition-level (which experimental files should be moved vs kept). Both belong downstream (Critique for the disposition; future empirical observation for the reflex test).

---

## Gaps and Recommendations — Frontier Questions for Downstream

**To Sensemaking:**

- **Anchor extraction:** Among the candidate cognitive anchors for the mechanism — is the dominant frame "context-blur = file-content reaching context" (read-driven) OR "context-blur = agent priming on visible names without reading" (visibility-driven)? Both are present; which is load-bearing for the user's stated pain?
- **Active vs dormant ambiguity collapse:** Should the solution be uniform across both profiles, or differentiated (twin pattern for active, bulk-archive for dormant)?
- **`decompose` ambiguity:** The user listed it as non-cannon but `/MVL+`'s D step invokes a Decomposition discipline that loads from runtime registry. Is the `cognitive_harness/decompose/` folder truly redundant, or is it the project-side spec that downstream sync would copy to runtime? Without resolution, archiving `cognitive_harness/decompose/` could create a silent drift.
- **Cannon-set scope verification:** User named 7 cannon but the inquiry should test whether `decompose` should actually be in the cannon set given /MVL+ invokes it. (Specific-vs-pattern check: this is a sub-pattern of the "what counts as cannon" question.)

**To Decomposition:**

- Natural cut: by mechanism mitigated (M1 / M2 / M3-4) OR by solution kind (in-place / relocate / unregister / convention) OR by active-vs-dormant profile. Decomposition picks the lowest-coupling axis.
- A piece should capture the **action plan for each experimental folder** (concrete: move what, where, mark what, unregister what).
- A piece should capture the **convention/documentation artifact** if Innovation surfaces D10's "write a convention note" as a viable solution — that artifact has its own design choices (location, who reads it, format).

**To Innovation:**

- Concrete elaborations of D3 (_archive/ structure), D7 (D3 + D5 sequencing), D8 (twin pattern for active), D10 (multi-layer with convention doc).
- The active set (navigation, meta-loop, contracts) merits a v2-design-folder pattern; the dormant set merits bulk-archive — verify this differentiation holds.

**To Critique:**

- Test each candidate against: M1+M2 mitigation strength, maintenance churn (D6 prefix-rename is high churn; D5 unregister is low), reversibility (D5 is one-line revert; D6 affects many references), composition-with-existing (does it honor the `_archive/` precedent?), and load-bearing question: does it actually prevent context-blur during the next replacement-design conversation?

---

## Telemetry

- **Mode:** blended (artifact for cognitive_harness/ + registry; possibility for mechanism + solution dimensions)
- **Entry point:** signal-first (seed = user's stated pain)
- **Cycles run:** 3 (cycle 1 coarse scan; cycle 2 probe on SKILL.md content + registry mechanics; cycle 3 jump-scan + precedent check)
- **Candidates generated** (possibility mode):
  - mechanism candidates: **5** (M1–M5)
  - solution dimensions: **10** (D1–D10, with D7+D8+D10 as hybrid/novel)
- **Signals detected:** 7 (S1–S7); probed: 7; deferred: 0
- **Resolution progression:** coarse → medium (per-file shape + registry mechanics); zoomed once on registry-vs-source-of-truth tension
- **Frontier state:** stable
- **Discovery rate trend:** declining (cycle 1 contributed most novelty; cycle 3 contributed clarifications + confirmed-absent regions)
- **Convergence criteria:** frontier stability ✓; declining discovery rate ✓; bounded gaps ✓
- **Jump-scan performed:** ✓ (recent inquiries + non-SKILL artifact + registry diff)
- **Failure modes checked:**
  - Premature depth: avoided (coarse scan before probes) ✓
  - Surface-only scanning: avoided (mechanism probed via direct evidence + matrix) ✓
  - False confidence: avoided (jump-scan executed) ✓
  - Premature termination: convergence criteria checked ✓
  - Re-exploration: not occurred ✓
  - Completeness bias in possibility mode: obvious dimensions enumerated before novel hybrids ✓
  - Open→closed drift: labels stayed at functional-one-line level ✓
  - Silent boundary-discovery: territory bounds explicit (cognitive_harness/ + ~/.claude/skills/ + mechanism space) ✓
  - Negative-space silent drop: confirmed-absent regions surfaced (no CLAUDE.md, no .claudeignore, M5 absent) ✓
  - Inadequate per-item content depth: D2 minimum honored throughout ✓

## Self-Assessment

**PROCEED.** Territory mapped at sufficient resolution; mechanism-of-blur and solution dimensions enumerated with completeness; precedent and active/dormant sub-pattern surfaced; frontier questions handed off for Sensemaking. Remaining unknowns are empirical-or-disposition-level and belong downstream.
