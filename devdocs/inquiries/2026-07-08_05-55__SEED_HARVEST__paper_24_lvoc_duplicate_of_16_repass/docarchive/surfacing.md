## User Input

devdocs/inquiries/2026-07-08_05-55__SEED_HARVEST__paper_24_lvoc_duplicate_of_16_repass/_branch.md — Surfacing step (harvest n=4, the duplicate-aware re-pass): full read + baseline recap + the new-anchor scan + the post-grounding band. (Full instructions in the invocation.)

---

# Surfacing — paper 24 = paper 16 (LVOC), the re-pass grounding

Mode: artifact · signal-first. Territory: `devdocs/paper_seed/24.md` — **read in full** (:1-30 at identification; :30-360, :360-700, :700-1032; no mid-section cuts) + the baseline finding (read in full) + the new anchors (in context).

## Identity verification (closed)

**24.md = 16.md**, now confirmed from inside the full read: same title/authors/journal (PLOS Comp Bio 2018), same abstract, same five experiments (Lin visual search; Krebs Stroop-reward; Braem Flanker-reward; Bugg 2008 feature-predicts-incongruence; Bugg 2011 category transfer), same models (LVOC vs Rescorla-Wagner vs Win-Stay-Lose-Shift), same conclusions. The 28-line delta is extraction variance (24.md carries the author-contributions block :1017-1032). **Delta-of-source: ZERO. All further delta is delta-of-anchors.**

## Baseline recap (the paper-16 finding, verified against its actual text)

The memory's summary is ACCURATE to the finding: verdict NO-import; **high-confirming-plus + a sharp mirror + quarantine; below paper 15**. The learning axis reduced: (1) CONFIRMING — "control improves with experience" owned by selection-not-steering (canon-verified in the baseline); (2) MIRROR — LVOC improves control by reinforcement learning (one agent, online, from reward); the harness improves by evolutionary selection (generate-test-keep-inherit) — different paradigms, clarifying by contrast; (3) QUARANTINE — the formal machinery (value-approximation, Bayesian updates, Thompson sampling, drift-diffusion, neural costs) does not transfer because **"the harness has no numeric utility or reward signal to approximate"** (finding §3). Paper 15's open question (value-within-a-step vs selection-across-steps) stays open. **The baseline's own Refinement Trigger:** *"If a future dive shows the harness has, or gains, a runtime-learned or variable control policy, the 'absent by design' premise re-opens, and LVOC's learning axis would need re-grading as a possible import."*

## Region L — the full-read claim-inventory, delta-relevant items [core]

- **L1. The LVOC mechanism, precisely** (core, HIGH — :269-317): EVOC approximated as a weighted sum — features + control-signal intensities + feature×intensity interactions − cost (Eq 6); weights updated by **Bayesian linear regression** on experience tuples (state, signal, reward, time, next-state) (:295-304); exploration by **Thompson-sampling-like** posterior draws (:307-317); continuous signals selected by **gradient ascent starting from the previous trial's signal** (:513-525).
- **L2. Model-comparison strength** (sub, HIGH — :700-703, :744-761, :791-802): LVOC ≫ associative learning ≫ WSLS (e.g., BIC 1817.8 vs 9763.2 vs 3449.9 on Lin; predicted Lin's curve with NO free parameters fitted to it :704-705).
- **L3. Feature-based TRANSFER** (core, HIGH — :834-852): learning binds to FEATURES, so effects transfer to novel stimuli sharing them — positive AND negative transfer demonstrated (Bugg 2011 categories).
- **L4. THE MALADAPTIVE PREDICTION** (core, HIGH — :921-943): *"in situations where the internal model's assumptions are violated, for instance because the value of control is not additive and linear in the features, then the control system's plasticity mechanisms may become maladaptive"* — confirmed by the BOTH-trials mal-transfer experiment; *"people sometimes overexert cognitive control even when it hurts their performance."*
- **L5. Control-intensity inertia / anchoring** (sub, HIGH — :519-525, :944-953): control starts from the previous setting and adjusts gradually; time pressure → less adjustment → less flexibility. (A control-level lock-shape — rhymes with paper 23's Einstellung at the solution level.)
- **L6. Learned self-control failure** (side, MED — :990-992, abstract): the same learning can produce learned LOW control (effort avoidance as rational resource-preservation gone wrong).
- **L7. Monitoring as a meta-level MDP** (side, MED — :965-971): a future-direction sketch, not a result.

## Region N — the NEW-anchor scan (what didn't exist at baseline) [core]

- **N1. p21-S1's ADAPTIVE form × LVOC** (core, MED-HIGH — THE live corner): p21-S1's design space includes an adaptive variant (adjust the diversification rate by staleness — rule-based). LVOC is a worked model of exactly the alternative: **LEARN the value of a control setting from features + outcomes instead of hand-setting a rule** (L1) — with transfer (L3) and an honest self-caution (L4: learned predictors mal-transfer when value isn't linear in features). **The site-distinction from the baseline's fold:** the baseline folded the learning axis for THE HARNESS'S OWN CONTROL POLICY (no reward signal, fixed pipeline — both still true; the Refinement Trigger does NOT fire). The new candidate targets **the harvest's own meta-parameters** (the lever's jump-rate; possibly forecast bands) — a site where a quantitative outcome-stream NOW EXISTS (the seed index + dive telemetry + calibration records accumulated since the baseline: yields, staleness streaks, in-band/out-of-band outcomes). The quarantine's stated premise ("no numeric reward signal to approximate") is FALSE at this specific site, though the signal is SPARSE (n≈4 protocol dives + ~20 graded papers). Crossing candidate for Innovation; premature-development risk flagged (is this developing p21-S1 rather than seeding? — the gate adjudicates; note the p21+p23 pairing precedent: same design space, distinct hypotheses, separate records).
- **N2. p23-S1 × LVOC's control-economics** (sub, LOW-MED): when to spend mechanized-prosecution effort = a value-of-checking question — but the checking-economy was paper 15's territory (folded there) and the audit's design already carries the weighting intuition. One probe; fold expected.
- **N3. L5 inertia × paper 23's finding** (side, MED): control-level anchoring is another lock-shape — confirming texture for the p23 finding's family; no new practice.
- **N4. The protocol/gate as control-signal selection** (side, LOW): mirror-grade rhyme; note only, per the baseline's paradigm-mirror.

## Post-grounding band (committed)

- **Baseline: RE-CONFIRMED expected** — nothing in the full read contradicts the baseline's three-part fold FOR ITS SITE (the harness's own control policy; no reward signal there; pipeline still fixed; the mirror and quarantine stand). The full read ADDS depth the baseline didn't cite (L4 the maladaptive prediction; L5 inertia) — delta-of-depth, texture-grade.
- **New-anchor yield: 0–1.** N1 is the only genuinely live corner — expected landing NASCENT-if-passes (the outcome-stream is real but sparse; a learned meta-parameter predictor is not actionable at n≈4 — the trigger would be data-accumulation or p21-S1's own trigger firing); the gate must prosecute (i) premature-development, (ii) the quarantine-premise change (is the telemetry-as-signal claim honest or a stretch?), (iii) the baseline's fold (does it absorb this site after all?). N2 folds expected. **Empty-delta still live** — if N1 dies, the honest output is explicit-empty with N1 as strongest-failed, and the dive's value = the duplicate documentation + baseline re-confirmation.
- **Ladder: NOT RE-ISSUED** (no double-grading) — the finding re-confirms paper 16's grade and notes the depth-texture.
- **Guards:** yield-manufacturing + **the re-pass-justification pressure named**: a re-pass that finds nothing feels wasteful; an honest empty-delta is VALID and itself validates the duplicate-check. The class-population guard is idle this dive (no provocation candidate in view); the p23-S1 second-instance watch stays open honestly (N1 is inspiration-shaped, not provocation-shaped).

## Traversal Trace

| # | Region | Items | Verdict | Conf |
|---|---|---|---|---|
| 1 | :1-360 (abstract, intro, models — LVOC mechanism) | L1 | core | HIGH |
| 2 | :360-700 (alternative models, five simulations' methods) | L2 partial, L5 | sub | HIGH |
| 3 | :700-1032 (results, discussion, predictions, conclusion) | L2-L7 | core/sub/side | HIGH |
| 4 | baseline finding (full) | recap + trigger | core | HIGH |
| 5 | new anchors (in context) | N1-N4 | core/sub | MED-HIGH |

## State summary

Coverage total (both files full). Concept-names: delta-of-anchors vs delta-of-source · the site-distinction (harness control policy vs harvest meta-parameters) · the telemetry-as-signal question · the maladaptive prediction · control-inertia. Frontier flags: none.

## Telemetry

Artifact · signal-first · 5 cycles · 7 source-claims + 4 anchor-scans · convergence met · guards armed (re-pass-justification named). **PROCEED.**
