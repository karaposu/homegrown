## User Input

devdocs/inquiries/2026-07-07_23-42__SEED_HARVEST__paper_21_crow_search_full_read_pass/_branch.md — Surfacing step: the COMPLETING READ (lines ~400–1040, previously scanned-shallow) + delta-tagging against the 20-39 baseline + the delta magnitude committed. (Full instructions in the invocation.)

---

# Surfacing — the completing read of paper 21

Mode: artifact · signal-first. Territory: `devdocs/paper_seed/21.md` lines 400–1040 (read in full this pass; lines 1–400 + 1040–1096 were verbatim-anchored in the baseline dive) + the baseline's claim-set A1–A8 and anchor-set B1–B9 (in context). **The whole file is now covered.**

## Region D — the delta items (tagged against the baseline)

- **D1. THE AP=0 ABLATION — NEW, evidence-grade** (core, HIGH — `:965-970`, completing the sentence whose tail the baseline saw at `:1056-1057`): *"the effect of different parameter setting of CSA is investigated… From Table 18, it is seen that **AP = 0 leads to weak performance of CSA since the diversification ability of** [continues :1056] **the algorithm has been eliminated.**"* This is an **empirical ablation**: remove the randomization entirely → the algorithm measurably weakens (Table 18: AP=0 sphere best 125.28 vs 2.9e-16 at AP=0.05 — orders of magnitude). The baseline dive recorded the diversification claim as *design intent* (:175-186); the ablation upgrades it to *demonstrated load-bearing-ness*. **Read-boundary note (the honest miss):** the sentence STRADDLED the baseline's read boundary — its head sat inside the unread 400–1040 gap, so the baseline registered the AP-tuning tables without the ablation's significance. The shallow scan missed one evidence-grade line.
- **D2. Fixed two-parameter setting across all six problems — texture on A5** (sub, HIGH — Table 1 `:446-454` + `:376-378` baseline): fl=2 and AP=0.1 for ALL six engineering problems (only N and itermax vary), with "no attempt… to optimize the parameter setting." Strengthens the parsimony claim with practice: one setting, six diverse problems, competitive everywhere.
- **D3. Results texture — confirms A7 (honest-competitive, not dominant)** (sub, HIGH): pressure vessel — CSA outperformed by HPSO, (μ+λ)-ES, TLBO on best; mean/Std mid-pack (`:499-504`, Table 5). Gear train — ABC beats CSA on mean (`:729-732`). Griewank — PSO beats CSA on mean (Table 17). Three-bar truss / spring / welded beam / Belleville — CSA equal-best with top robustness (Tables 3/7/9/14). The paper's modest "competitive" framing is accurate in detail.
- **D4. Discrete variables handled with NO stated mechanism — an absence, application-detail** (side, MED): pressure vessel's x1/x2 (integer multiples of 0.0625) and gear train's all-integer teeth come out exactly feasible (Table 4: "0.812500 (13 × 0.0625)"), yet §3 describes no rounding/repair step. A method under-specification in the paper; nothing project-relevant to cross (our search isn't numeric).
- **D5. §5.2 benchmark functions — texture** (side, HIGH — `:885-964`): five 10-D functions, equal-NFE comparison (40,000) vs PSO/GA; CSA wins all best-indices AND runs faster (cheaper update rule). Fair-comparison methodology; performance texture only.
- **D6. Computational cost — application detail** (side, HIGH — Table 15 `:970-978`): all problems solved in under ~1s average.

## Region E — anchor-space re-confirmation

The baseline's B1–B9 re-confirmed unchanged; **no new anchors activated** by the delta material except one strengthening: D1 (the ablation) bears directly on B2/B3 — it is the paper's own evidence that a zero-randomization configuration (which is structurally OUR current state: judgment-only selection) underperforms *in CSA's domain*. This strengthens p21-S1's SOURCE side; it adds no new project-side anchor.

## The delta magnitude (committed)

- **Leading outcome:** NO new seeds (nothing in D1–D6 offers a new project-directed candidate the baseline's crossing didn't already generate). **p21-S1 ENRICHED** — D1 belongs in its source-support (the ablation is exactly the evidence-grade the record's "randomization is load-bearing" line wants). **Ladder unchanged** (D2/D3/D5 are confirming texture on already-recorded claims).
- **The read-depth policy question answers itself with evidence:** the shallow scan was MOSTLY safe (no seed was missed; no verdict changes) AND it demonstrably missed one evidence-grade line whose sentence straddled the read boundary — the user's "fully" instinct was right in kind, small in consequence this time. Policy-note material for the finding.
- Empty-delta case: retired (D1 is real). New-seed case: not expected — Innovation probes D1×p21-S1 (enrichment, not a new record) + one honest sweep of D2–D6 for anything crossable.

## Traversal Trace

| # | Region | Items | Verdict | Conf | Note |
|---|---|---|---|---|---|
| 1 | :400-720 (truss, vessel, spring, welded beam, Table 1) | D2, D3, D4 | sub/side | HIGH | objectives/constraints/tables read in full |
| 2 | :720-1040 (gear train, Belleville, §5.2, cost, AP-study head) | D1, D3, D5, D6 | core/sub/side | HIGH | the ablation head found at :965-970 |
| 3 | baseline artifacts (claim-set, anchors, p21-S1 record) | E | core | HIGH | re-confirmed; D1→B2/B3 strengthening |

## State Summary

- **Coverage:** the paper is now read IN FULL across the two passes (1–400, 1040–1096 baseline; 400–1040 this pass). Confirmed-absent in the delta range: new mechanism claims; any per-problem parameter tweaking (D2 shows the opposite); any stated discrete-variable mechanism (D4's absence).
- **Concept-names:** the AP=0 ablation · read-boundary straddle · fixed-setting-across-problems · honest-competitive texture.
- **Frontier flags:** none — the territory is exhausted.
- **Workspace-populated:** yes.

## Telemetry

Mode artifact · signal-first · cycles 2 (the two read chunks) + 1 (baseline re-confirm) · items 6 delta-tagged (1 NEW-evidence-grade / 2 texture / 3 application-detail) · convergence met (full coverage; no uncertain item filtered) · overload not fired · failure modes checked: missed-relevance (none remaining — full read), yield-manufacturing guard (the leading outcome is NO-new-seeds, held), anti-deflation (D1 surfaced as genuinely NEW rather than folded into "texture").

**Self-assessment: PROCEED.**
