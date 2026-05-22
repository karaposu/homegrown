# Cognitive Fix Template (loose guide)

**These 7 sections are SUGGESTED, not REQUIRED.** Sections may be merged, split, omitted, or added depending on the specific fix. The trigger-condition section is the only LOAD-BEARING required element — without it, this fix shouldn't be in this folder.

**Deviation is explicitly licensed.** If you're authoring fix #2 or #3 and find the template doesn't fit, deviate. Document the deviation in the fix file's Notes section so future audits can see the variation. At N=3+ across instances, this template will be audited and possibly refactored.

**At N=1, the right schema is unknown** — forcing a strict schema would force-fit future instances to the first one's shape. The loose-guide approach (this template) is intentional.

---

Each fix file should be named `NN__<kind_slug>.md` where NN is the index (01, 02, 03...) and `<kind_slug>` is a snake_case name describing the operation the fix performs (e.g., `vague_instruction_decomposition`).

## Suggested sections

### 1. Trigger condition (LOAD-BEARING; required)

What specific LLM-coverage-failure mode does this fix address? When does the methodology apply? Cite the diagnostic source (e.g., a LOOP_DIAGNOSE finding) that identified the failure.

### 2. Affected artifact(s)

Which file(s), instruction(s), or protocol section(s) does this fix modify? Quote the relevant lines verbatim if specific.

### 3. Methodology applied

Walk through the 7-step pattern for this specific case:

1. **Identify** — the vague instruction (verbatim)
2. **Decompose** — into named meta-categories with rationale per category
3. **Coverage check** — verify the known failure case is caught by at least one named category
4. **Structural fail-safe** — what trigger fires; what verification at trigger-fire; emphasizes STRUCTURE not CONTENT
5. **Meta-recursion residual** — what the enumeration + fail-safe still don't catch; named honestly
6. **Branch experiment** — proposed parallel-spec setup
7. **Evidence gate** — what threshold passes / what action fails

### 4. Coverage analysis

Table form:
- Cases CAUGHT (each case + which mechanism catches it)
- Cases NOT necessarily caught (honest residuals)

### 5. Evaluation gate

Setup + N=? chains + pass/fail thresholds + revert condition + telemetry per chain.

### 6. First-instance-bias acknowledgment

If this fix is being authored by the same agent that authored the methodology or other prior instances, name the bias explicitly. Note any cross-author validation that's been done or that should be done.

### 7. Links

- Source inquiry (the finding that produced this fix)
- Related fixes (other entries in this folder, if applicable)
- LOOP_DIAGNOSE finding (if applicable; many cognitive fixes emerge from LOOP_DIAGNOSE outputs)

## Notes section (optional)

If you deviated from this template's structure, document the deviation here so future audits can see the variation pattern.
