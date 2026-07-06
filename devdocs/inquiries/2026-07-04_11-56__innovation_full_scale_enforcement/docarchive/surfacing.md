# Surfacing — Innovation Full-Scale Enforcement: the Leak-Map

## User Input

```text
/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-07-04_11-56__innovation_full_scale_enforcement/_branch.md

(Territory = (1) the target spec at the letter; (2) the checker; (3) the invocation-layer leak verified; (4) the enforcement precedents; (5) the cost reality. Purpose = the leak-map with quotes; the precedents' wording; the price; the task-shape distinction. Artifact case; reads run. Save to surfacing.md.)
```

**Mode:** artifact. **Entry:** signal-first. **Territory:** the innovate skill (SKILL.md + reference) + the checker + this week's invocations + the precedents.

---

## Traversal Trace

| # | Region | Item(s) — quoted at the letter | Relevance | Conf | Note |
|---|---|---|---|---|---|
| T1 | **THE THREE-TEXTS DISAGREEMENT (the load-bearing leak)** | Three different coverage standards coexist: **SKILL.md instruction 2** commands the grid AND softens it in the same paragraph — *"producing variations across all seven mechanisms. For each mechanism produce three variations: one generic, one focused, one contrarian. Apply minimum coverage (at least one Generator + one Framer) at minimum; aim for full coverage (all seven)."* **The reference (L308–310)** never mentions the grid; its own rule: *"Minimum coverage: at least one Generator and one Framer… Systematic coverage: For HIGH-STAKES innovation, apply all seven."* **The grid (3-variations) has ZERO hits in the reference** — it is command-layer-only. | **core** | HIGH | A spec that states three standards enforces none. Any fix must first make the texts agree on ONE definition of full-scale. |
| T2 | Production-task mode is SPEC-LEGITIMATE — and does NOT license the floor | The mode exists in the reference (4 mentions) with real machinery: per-piece Inversion compliance (*"MUST additionally apply Inversion at piece-level"*), override-recording (*"the override-recording overhead is intentional friction, not a loophole"*), additional telemetry, and a FLAG condition. And crucially, L393: *"This rule does NOT replace the Coverage Strategy's per-seed minimum"* — the mode ADDS per-piece requirements; it never says coverage may drop to the floor. | **core** | HIGH | Corrects my earlier admission: the mode was legitimate; what the invocations did was SELECT THE FLOOR under the mode's cover — which the aim-language permitted. |
| T3 | **The invocation-layer leak, verified with an example** | This week's runner-composed args redefined the deliverable: *"Production-task mode: the seed is the 5-piece plan; generate the finding-ready content: (a)…(e). Inversion is MANDATORY at meta-decision pieces…"* — a narrower brief than SKILL.md's own instruction 2, naming ONE mandated mechanism. The spec has no line forbidding invocation-args from narrowing coverage. | **core** | HIGH | The second leak: args can quietly redefine the run. The fix needs a seed-narrows-never-coverage rule. |
| T4 | **The checker does not exist** | `tools/` is absent from the repo entirely; `structural_check.sh` exists nowhere. Every "structural check" this session (and presumably before) was manual self-attestation — the traverse spec's step 4 fallback. | **core** | HIGH | The third leak: no mechanical gate anywhere. Any output-structure requirement is only as strong as self-attestation UNLESS the checker gets built (routable, cheap: a grep-based script). |
| T5 | The enforcement precedents, at the letter | **CONCLUDE's template-required section** (the strongest: the finding TEMPLATE contains `## Inherited Commitments Re-test` — structure forces content; absence is visible at a glance); **spec-constant thresholds** (*"set at build, changed by the user, never adjusted by a watcher about itself"* — the no-self-relaxation pattern); **the terminal line** (*"the sweep session ENDS at note-writing"* — foreclosing-in-words); **the override-with-recorded-reason** pattern (Production-task's own *"intentional friction, not a loophole"* — ALREADY the right pattern, inside this very spec). | **core** | HIGH | The fix can be assembled almost entirely from patterns this house (and this spec!) already uses. |
| T6 | The cost reality, priced | The reference's own 7-mechanism example is ~10 lines (one line per mechanism — the spread illustration). One honest VARIATION ≈ 3–8 lines (a candidate + its test disposition). Full-scale options priced: **7×1 (all mechanisms, ≥1 tested variation each) ≈ 150–220-line innovation.md** (June's 144 was near this); **the full 7×3 grid (21 variations) ≈ 300–450 lines**. | **core** | HIGH | Full-scale is heavy-but-bounded; the enforcement should say which price the house is buying. |
| T7 | The task-shape distinction the reference already draws | *"For HIGH-STAKES innovation, apply all seven"* — the reference conditions systematic coverage on stakes; Production-task mode distinguishes piece-list seeds. So the spec ALREADY has a task-shape vocabulary — the user's "always" collides with the reference's own conditional, and the fix must either delete the conditional or define "always" as the default with user-only relaxation. | **core** | HIGH | The adjudication sensemaking must make: always-unconditional vs default-full-with-user-relaxation (the house's valve pattern favors the latter — never self-relaxable). |
| T8 | Where the grid could bind in Production-task mode | In piece-mode the seed is a piece-LIST; a literal per-piece 7×3 grid would be 21 variations PER PIECE (explosive). The coherent full-scale reading for piece-mode: every mechanism FIRED at least once across the run (mapped to pieces via the existing per-piece mechanism log — the telemetry already has the format: `<piece-id>: [<mechanism>, …]`), with the grid's 3-variation depth applied at the run's meta-decision pieces. | **core** | HIGH | The reference's own telemetry format is the natural ledger substrate — the enforcement can reuse it rather than invent. |

## State Summary

- **Territory echo:** three texts quoted; the mode's legitimacy + its non-license verified; the invocation example quoted; the checker's absence confirmed; precedents at the letter; the price computed; the task-shape vocabulary found.
- **Purpose echo:** the leak-map is complete and QUAD, not single: (L1) three-texts disagreement · (L2) invocation-narrowing unforbidden · (L3) no mechanical gate · (L4) the aim/conditional softness inside each text.

**Coverage map:** the spec (read at the letter, both files) · the checker (absent — verified) · the invocations (example quoted) · precedents (four, quoted) · cost (two options priced) · task-shapes (the reference's own conditional found). All core.

**Confirmed-absent:** the 3-variations grid in the reference (zero hits); `tools/structural_check.sh` (nowhere); any seed-narrows-never-coverage rule; any coverage-forcing output section.

**Concept-names list:**
- `the three-texts disagreement` (T1) — SKILL commands the grid + softens it; the reference conditions on stakes; nothing agrees.
- `floor-selection under mode-cover` (T2/T3) — the honest name for this week's under-runs.
- `the missing gate` (T4) — no checker exists at all.
- `override-with-recorded-reason` (T5) — the spec's own anti-loophole pattern, ready to reuse.
- `7×1 vs 7×3 pricing` (T6) — ~200 vs ~400 lines.
- `the piece-mode ledger substrate` (T8) — the existing per-piece mechanism log.

**Frontier flags:** whether "always" should override the reference's high-stakes conditional (sensemaking's adjudication, with the valve pattern available).

**Workspace-populated:** `{populated: true, populated-at: 2026-07-04 (this run), extent: both spec files read at the letter + checker search + invocation comparison}`

## Telemetry

- Mode: artifact | entry: signal-first | Cycles: 4 | items: 8 trace entries | tags: core 8
- Convergence: the leak-map closed (a fifth pass found no new leak); every claim quote-backed
- Failure modes checked: Missed-relevance (the mode's OWN anti-loophole pattern hunted and found — it flips the design from invention to reuse), Territory-mis-binding (all quotes line-anchored), Recency (June's runs checked earlier — the softness predates this week)
- **Self-assessment: PROCEED**
