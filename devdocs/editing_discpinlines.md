# Editing Thinking Disciplines — Self-Assessment Standardization

**Goal:** Each routing-relevant discipline produces an explicit `**Overall: PROCEED** / **FLAG** / **RE-RUN**` line in its self-assessment section. `homegrown/protocols/resume.md` reads these via line-pattern matching to route the loop. Currently only `/innovate` complies; backward-compat treats missing verdicts as PROCEED (works, but loses FLAG/RE-RUN signals).

**Pattern (from `homegrown/innovate/references/innovate.md` line ~420):**
```
* **Overall: PROCEED** (sufficient coverage + convergence + tested survivors)
  / **FLAG** (coverage gaps or untested survivors)
  / **RE-RUN** (minimum coverage not met or failure mode detected)
```

**Apply to BOTH** `homegrown/<discipline>/references/<discipline>.md` AND `commands/<discipline>.md` for each discipline below.

---

| Discipline | Status | Anchor | Verdict criteria |
|---|---|---|---|
| **innovate** | ✓ DONE | — | — |
| **sense-making** | OPEN — user reverted; "indicators, not gates" framing is deliberate. Decide before applying. | After "These are indicators, not gates" (homegrown ~line 108) | If applied: PROCEED if perspectives ≥3 with new anchors + ambiguity-resolution-ratio ≥70% + SV delta STRUCTURAL/INCREMENTAL + anchors from ≥3 types. FLAG if one critical indicator below threshold. RE-RUN if SV delta FLAT or multiple critical thresholds missed. |
| **td-critique** | VERIFY — `commands/td-critique.md` line 86 already has the format; `homegrown/td-critique/references/td-critique.md` does NOT | Copy `### Convergence Telemetry` block from `commands/td-critique.md` lines ~70-86 into homegrown reference at end of "Phase 4 — Coverage + Convergence Assessment" section | Use existing wording: PROCEED if all critical-weight dimensions evaluated + adversarial STRONG + clean SURVIVE exists. FLAG if weak prosecution or missing dimensions. RE-RUN if failure mode or no candidates. |
| **explore** | TODO | After "### When to stop" in "## Coverage Strategy" (homegrown ~line 205) | PROCEED if all 3 convergence criteria hold + jump scan without surprises. FLAG if 2/3 criteria or jump scan revealed minor surprises. RE-RUN if frontier still advancing or gaps unbounded or jump scan revealed major surprises or failure mode detected. |
| **decompose** | TODO | After 7-dimension table in "### Step 7 — Self-Evaluate" (homegrown ~line 180+) | PROCEED if 3-dimension check 3/3 + (if 7-dimension performed) ≥6/7 with no critical failures. FLAG if 3-dimension 2/3 or 7-dimension 4-5/7 or balance dimension fails. RE-RUN if 3-dimension ≤1/3 or independence/completeness/reassembly fails. |
| **comprehend** | TODO | After "### When to Stop" in "## Coverage Strategy" (homegrown ~line 345) | PROCEED if prediction accuracy meets threshold for target CV + adversarial stability HOLDS + all major components at target depth. FLAG if borderline. RE-RUN if prediction fails threshold or adversarial breaks model or major coverage gaps. |
| **reflect** | EXEMPT | — | Reflect is backward-looking; doesn't gate next iteration. Per `protocols/desc.md` doctrine, only routing-relevant disciplines produce verdicts. RESUME does NOT read reflect's output. Optional: add explicit "no routing verdict — advisory only" note. |

---

## Insertion template (adapt the criteria per discipline)

```markdown
### Self-assessment

Apply [the criteria above] to the just-completed [discipline] output. Report:

* [metric 1]: [format]
* [metric 2]: [format]
* Failure modes observed: [none / list]
* **Overall: PROCEED** (PROCEED criteria) / **FLAG** (FLAG criteria) / **RE-RUN** (RE-RUN criteria)
```

## Notes

- Each discipline edit: ~10-15 lines × 2 files. Total ~80-150 lines if 4-5 disciplines applied.
- Order: each discipline is independent; can be applied in any order or in parallel.
- After edits, RESUME starts producing FLAG/RE-RUN signals beyond `/innovate`.
- Reflect stays exempt regardless.
- Sensemaking decision pending user judgment.

## References

- Verdict reader: `homegrown/protocols/resume.md` Step 2 (line-pattern matching for `**Overall: PROCEED**` / `**Overall: FLAG**` / `**Overall: RE-RUN**`).
- Doctrine: `thinking_disciplines/protocols/desc.md` lines 9, 36, 78, 115, 118 (protocols route, disciplines judge).
- Existing reference: `homegrown/innovate/references/innovate.md` line ~420.
- Inquiry: `devdocs/inquiries/telemetry_routing_protocol_classification/finding.md`.
