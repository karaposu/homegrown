# Decomposition — Loop Diagnose 20-29

## User Input

`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-06-06_22-38__loop_diagnose_20-29_dangerous_example/_branch.md`

---

## Whole being decomposed

The diagnostic finding.md per LOOP_DIAGNOSE Step 4 requirements + standard CONCLUDE template.

## Step 1-3 — Coupling + Boundaries

Per LOOP_DIAGNOSE Step 4, the finding must include:
- Correction Chain Summary
- Failure Hypotheses (per-hypothesis structure with affected stage / shortcoming / evidence / confidence / maintenance candidate / evaluation gate)
- Failure Attribution Summary (compact table)
- Maintenance Candidates (per-candidate structure with what changes / file / risk / benefit / gate / branch-experiment status)
- Diagnostic Verdict (ACTIONABLE / PARTIAL / INCONCLUSIVE)

## Step 4 — Question Tree

```
Q1 (root): What does the diagnostic finding need to contain?

├── Q1.1 — Correction Chain Summary (prior path + corrected path + human correction + what changed)
├── Q1.2 — Failure Hypotheses (5 hypotheses H1-H5; H6 mixed-attribution is summary not separate)
│   ├── H1: Branch-framing miss (Affected stage: branch-framing)
│   ├── H2: Sensemaking anchor-extraction miss (Affected stage: Sensemaking — Phase 1)
│   ├── H3: Sensemaking perspective-blindness (Affected stage: Sensemaking — Phase 2)
│   ├── H4: Innovation Inherited Frame Audit miss (Affected stage: Innovation)
│   └── H5: Critique dimension-blindness (Affected stage: Critique)
├── Q1.3 — Failure Attribution Summary (compact table)
├── Q1.4 — Maintenance Candidates (3 candidates with evaluation gates)
├── Q1.5 — Diagnostic Verdict (ACTIONABLE)
└── Q1.6 — Standard Open Questions section
```

## Step 5 — Interfaces

Standard one-way: sensemaking → Q1.1-Q1.5; LOOP_DIAGNOSE protocol → Q1.6.

## Step 6 — Dependency Order

PHASE 1 (parallel): Q1.1-Q1.5
PHASE 2: Q1.6

## Step 7 — Self-eval

All 7 dimensions PASS. All 7 failure modes AVOIDED. Determination-mechanism check PASS (each hypothesis specifies affected stage with confidence calibration).

**Decomposition ready.**
