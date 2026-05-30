# Decomposition — Unflagged routine-command generation tendencies

## User Input

`devdocs/inquiries/2026-05-29_17-39__unflagged_command_generation_tendencies/_branch.md`

**Whole to decompose (from Sensemaking SV6):** a compose-time generative disposition for unflagged routine command creation = one root principle + a compose-time reflex + a strict rule list (prohibition + positive substitute per misuse) + a large-data exception + a placement decision.

---

## Step 1 — Coupling Topology (coupling map)

Elements: **E1** root principle · **E2** compose-time reflex (the runtime "is this a filesystem action?" determination) · **E3** the strict rule list with positive substitutes (covers presentation / sequencing / compute / dynamic-value) · **E4** large-data exception (+ its "is this large?" determination) · **E5** placement (where the ruleset is installed).

Coupling (change-propagation: "if I change A, must B change?"):

```
                 ┌───────────── Cluster A: the disposition (high internal coupling) ──────────────┐
   E1 principle ──derives──▶ E3 rules+substitutes ──routes-to──▶ E2 reflex
        │                          │
        └──derives──▶ E2           └──exception-to──▶ E4 large-data carve-out
                                                                                  
   ───────────────────────────── low-coupling valley ─────────────────────────────
                 ┌───────────── Cluster B: deployment ─────────────┐
                                E5 placement  (consumes finished ruleset; decision logic independent)
```

- **Strong** coupling: E1→E3 and E1→E2 (both derive from the principle); E3→E4 (E4 is an exception that modifies E3's compute rule).
- **Moderate** coupling: E3↔E2 (the reflex routes fragments to E3's substitutes; defining the reflex can reveal a missing rule — coupling lives in an *assumption*, see Step 5).
- **Weak** coupling: {E1–E4}→E5 (placement consumes the *finished* ruleset, but the global-vs-MVLw decision is driven by the cross-cutting-scope finding, not by rule wording). ⇒ natural boundary between content (A) and deployment (B).

## Step 2 — Boundaries (top-down)

Cut at the low-coupling valley → two pieces at the top level: **(A) the disposition's content** {E1,E2,E3,E4} and **(B) deployment** {E5}. Within A, E1 is the source node; E2/E3/E4 are derivations. No cut inside A's derivations beyond the question granularity below (they share the principle — high coupling, keep together as one cluster but distinct questions).

## Step 3 — Validate (bottom-up)

Irreducible atoms: "the one-line principle" (E1), "the routing reflex" (E2), "each rule = prohibition+substitute" (E3), "the exception + its threshold cue" (E4), "install location" (E5). These group into exactly the clusters Step 2 found. Top-down and bottom-up **agree** ⇒ high confidence. No atom is split across a boundary; no independent atoms are wrongly merged.

## Step 4 — Question Tree

- **Q1 (E1) — What is the single root principle, in one line the agent can hold while composing?**
  Verify: [ ] states "shell = filesystem actions"; [ ] states where non-filesystem work goes (reply / reasoning / dedicated tool); [ ] one sentence; [ ] grounded in the harness's own Bash-tool directive (not arbitrary).
- **Q3 (E3) — What is the enumerated strict rule list, each pairing a prohibition with its positive substitute, covering presentation / sequencing / compute / dynamic-value?**
  Verify: [ ] one rule per misuse category (MISUSE-1 presentation, -2 sequencing, -3 compute) + dynamic-value; [ ] each phrased generatively ("reach for X first"), not as an audit gate; [ ] each names the substitute (reply text / separate calls + absolute paths / read-then-reason or dedicated tool / standalone command + reuse literal); [ ] strict wording.
- **Q2 (E2) — What reflex does the agent run *while composing*, and how does it determine "is this a filesystem action?"**
  Verify: [ ] a small fixed question set applicable at compose-time with zero tooling; [ ] routes each non-filesystem fragment to its Q3 substitute; [ ] includes the technically-minimal test (one allowlisted verb · literal args · no `$()` · no chain); [ ] is the determination mechanism for the principle.
- **Q4 (E4) — When is shell data-processing legitimate, and how does the agent decide a case qualifies?**
  Verify: [ ] states the exception (genuinely large / infeasible-to-eyeball data); [ ] gives a determination cue for "large enough" (early-stage default: plain-read+reason for ≤ tens of items); [ ] says to allowlist the specific tool when the exception holds.
- **Q5 (E5) — Where should the ruleset be installed for correct coverage?**
  Verify: [ ] recommendation across global `CLAUDE.md` vs MVLw-step vs both; [ ] rationale tied to the cross-cutting-scope finding (habit appears outside prescribed steps); [ ] distinguishes the prescribed case (MVLw ROOT-NEW step 2) from the spontaneous-inspection case (global).

## Step 5 — Interface Map

| Source | Target | What flows | Direction |
|---|---|---|---|
| Q1 | Q3 | the principle the rules derive from | one-way |
| Q1 | Q2 | the principle the reflex operationalizes | one-way |
| Q3 | Q2 | the substitute-destinations the reflex routes to | one-way (data) |
| Q3 | Q4 | the compute rule (MISUSE-3) that Q4 carves an exception in | one-way |
| Q1–Q4 | Q5 | the assembled ruleset to be placed | one-way |

**Assumptions-not-data check (hidden-coupling guard):** the load-bearing hidden coupling is the Q3→Q2 *assumption* that **the rule list covers every fragment-type the reflex could encounter**. If the reflex (Q2) routes a fragment with no home in Q3 (e.g., a future idiom like `python -c`, `find -exec`, `<()`), Q3 is incomplete. Innovation/Critique must test this: does the principle (Q1) close the set by construction (anything-not-filesystem → out), rather than relying on Q3 enumerating every idiom? If yes, the assumption holds; if Q3 is a finite blocklist, the coupling is unsafe.

## Step 6 — Dependency Order

1. **Q1** (root principle) — first; everything derives from it.
2. **Q3** (rules + substitutes) — after Q1; the substance.
3. **Q2** (reflex) — after Q3 (it routes to Q3's substitutes); co-informs Q3 via the assumption check.
4. **Q4** (exception) — after Q3 (modifies MISUSE-3 rule).
5. **Q5** (placement) — **parallel** to Q1–Q4 (decision logic depends on the scope finding, not rule wording); only the final write-to-file consumes Q1–Q4.

No circular dependencies. Critical path: Q1 → Q3 → {Q2, Q4}.

## Step 7 — Self-Evaluation

| Dimension | Verdict | Note |
|---|---|---|
| **Independence** | PASS | Each Q answerable via defined interfaces; Q5 fully independent. |
| **Completeness** | PASS | Q1=principle, Q2=reflex, Q3=rules+substitutes, Q4=exception, Q5=placement → covers the full SV6 deliverable. |
| **Reassembly** | PASS | Q1+Q2+Q3+Q4 = installable disposition; Q5 = where. **Determination-mechanism check:** the two runtime determinations — "is this a filesystem action?" and "is this data large enough?" — have dedicated pieces (Q2, Q4 respectively). No presupposed-but-unprovided determination. |
| **Interface clarity** | PASS | Interfaces explicit; the one hidden-coupling risk (Q3→Q2 coverage assumption) is surfaced as the central thing for Innovation/Critique to settle. |
| **Balance** | MILD FLAG | Q3 is the largest piece (~40%). Tractable in one pass; if it balloons, sub-decompose by misuse category. Not failing. |
| **Confidence** | HIGH | Top-down/bottom-up agreed (Step 3). |

**Handoff to Innovation:** the live design questions are Q3 (the rule wording), Q2 (the reflex formulation), and — most load-bearing — whether Q1 *closes the offender set by construction* so Q3 needn't enumerate every idiom (the Q3→Q2 assumption). Q4 and Q5 are secondary/semi-separable.
