# Critique: continuous_loop_priorities

## User Input

`devdocs/inquiries/continuous_loop_priorities/`

Read all files in the folder (`_branch.md`, `_state.md`, `exploration.md`, `sensemaking.md`, `decomposition.md`, `innovation.md`). Construct evaluation dimensions from sensemaking + decomposition. Innovation produced 60+ candidates across 7 pieces (P1-P7) plus 4 cross-piece Assemblies. Run prosecution+defense+collision on high-leverage candidates; lighter-touch on others; assembly check across the 4 Assemblies; produce a concrete final punch list. Save as `devdocs/inquiries/continuous_loop_priorities/critique.md`.

---

## Phase 0 — Dimension Construction

### Extracted dimensions (from sensemaking + decomposition)

| # | Dimension | What it asks | Weight |
|---|---|---|---|
| D1 | **Structural correctness** | Does this honor sensemaking's resolved decisions (conditional /navigate, sequential v1, mechanics-only Item 5, dual-mode selection, time-box-with-fallback, Item 1 prerequisite)? | **Critical** |
| D2 | **Actionability** | Can the user execute this without needing further design? | Critical |
| D3 | **Effort honesty** | Does this match sensemaking's effort estimates (4-6h, 1-2h, 4-6h, 8-15h, 2-4h)? | High |
| D4 | **Reassembly** | Does this slot cleanly into adjacent pieces' interfaces? Does the assembly produce the original goal (a self-tested loop ready for external validation)? | Critical |
| D5 | **Future-readiness** | Does this preserve hooks for v2 parallel multi-head + Level 2-3+ autonomy per `enes/desc.md`? | Medium |
| D6 | **Self-reference safety** | Does the choice avoid amplifying self-reference blindness (per the prior sensemaking's flagged risk)? | High |
| D7 | **Sustainability cost** | How does this affect user fatigue / project completion probability? Per prior sensemaking's meta-constraint. | High |

### Burden of proof (stakes-aware)

- **High stakes** (hard to reverse, large blast radius): P1.b (RESUME wire-up vs delete), P3.* (criteria + heuristic that govern continuous-loop runtime), P6.a (frontmatter vocabulary commitment that propagates). For these: **guilty until proven innocent** — defense must demonstrate clear viability.
- **Low stakes** (locally reversible): P1.d test list, P2.a N value, P4.a folder name, P5.d bug-fix budget, P7.a session schedule. For these: **innocent until proven guilty** — prosecution must demonstrate a clear problem.

### Success criteria per dimension

- **D1 Pass:** does not contradict any sensemaking-resolved verdict.
- **D2 Pass:** the user can act on it tomorrow with no additional design step.
- **D3 Pass:** within ±50% of sensemaking's estimate band.
- **D4 Pass:** interfaces with adjacent pieces are explicit and matching.
- **D5 Pass:** doesn't preclude v2 parallel extension or Level 2-3+ autonomy.
- **D6 Pass:** introduces external grounding OR doesn't worsen the self-validation problem.
- **D7 Pass:** doesn't compress >12h into a single session; doesn't extend past 4 weeks.

---

## Phase 1 — Fitness Landscape

```
                            HIGH structural correctness
                                       │
              ┌────────────────────────┼────────────────────────┐
              │                        │                        │
              │  VIABLE                │       BOUNDARY         │
              │  (P1.a Generic,        │  (Assembly 1 — self-    │
              │   P1.b Generic,        │   validating;           │
              │   P3.a Generic,        │   Assembly 2 —          │
              │   P3.f Generic|Focused,│   lightweight;          │
              │   P5.a 4th,            │   P3.e Contrarian;      │
              │   P6.a Generic,        │   P3.b Contrarian;      │
              │   P7.a Generic)        │   P5.a Generic)         │
LOW novelty ──┼────────────────────────┼────────────────────────┼── HIGH novelty
              │                        │                        │
              │  DEAD                  │  UNEXPLORED            │
              │  (P1.a Contrarian,     │  (Assembly 4 —          │
              │   P5.b Contrarian      │   bypass Item 1;        │
              │   in pure form,        │   P3.d Contrarian —     │
              │   P5.c Contrarian)     │   no termination)       │
              │                        │                        │
              └────────────────────────┼────────────────────────┘
                                       │
                            LOW structural correctness
```

### Region analysis

- **VIABLE:** Generic candidates that survive prosecution easily. Low-novelty but structurally sound.
- **BOUNDARY:** Higher-novelty candidates that survive prosecution on at least one strong dimension but have caveats. Most innovation effort lives here.
- **DEAD:** Candidates that violate D1 (sensemaking's resolved decisions). Cannot be salvaged without changing sensemaking.
- **UNEXPLORED:** Candidates the prosecution has not yet tested rigorously — inherently uncertain.

---

## Phase 2 — Adversarial Evaluation (high-leverage candidates)

### Candidate A — Assembly 1 ("Self-validating roadmap")

**Components:** P3.a Generic + P3.b Contrarian + P3.c Contrarian + P5.a 4th (re-run wayfinding-merger) + P5.b Contrarian (negative pass criteria).

**Landscape position preview:** BOUNDARY — high novelty, high fertility, but tension with D6 (self-reference safety).

**Prosecution (strongest case AGAINST):**

> *This assembly amplifies self-reference blindness, which the prior sensemaking explicitly flagged as the project's biggest structural risk.* The signals are derived from the project's own /navigate taxonomy and anchor types; the test problem is the project's own historical inquiry; the pass criteria are the project's own failure modes. Every diagnostic surface is internal. If the loop produces a finding consistent with the historical verdict, you cannot tell whether it's because the loop works or because the loop replays the historical reasoning that produced the verdict in the first place. **The "self-validation" is structurally identical to grading your own homework using the answer key you wrote.**
>
> Additionally, P5.b Contrarian (negative pass criteria) makes diagnosis fuzzy — "no infinite loop" doesn't tell you the loop is *right*, only that it didn't fail catastrophically. Combined with P3.b Contrarian (directedness, not convergence), there's no positive convergence target — just absence of failure plus topical drift detection. The pass conditions are weak.

**Defense (strongest case FOR):**

> *Assembly 1 is the project's first chance to triangulate against any non-self produced reference point — its own past.* The project has refined entirely against doctrine; running the loop on a historical inquiry whose verdict was reached *before* the loop existed is the closest thing to external validation available without spending days on a foreign problem. If the loop reaches a similar verdict via a different path (different selection sequence, different signal trajectory), that's evidence of robustness; if it reaches a different verdict, that's diagnostic information about which component diverged.
>
> The signals being derived from /navigate's taxonomy is *required* — that's how the loop sees its own state. Anything else would be a signal that doesn't measure what the loop is doing.
>
> The negative pass criteria address mechanics-only validation; positive convergence targets are out-of-scope for Item 5 (utility validation is the post-roadmap step).

**Collision:**

The prosecution's strongest point — *grading your own homework with your own answer key* — is real but partially mitigated. The historical verdict was produced by a different process (the user reading the original /MVL/MVL+ outputs and writing finding.md manually). The continuous loop traverses differently (with /navigate invocation, with autonomous selection). The processes are not identical; the historical finding is not the loop's "answer key" because the loop didn't exist when it was written.

However, the prosecution's secondary point — weak pass conditions from negative criteria + non-convergence signal — survives. The combination produces a test that's diagnostic of "did the loop run cleanly" but not of "is the loop producing useful structure." That's actually OK for Item 5's mechanics-only scope, but Assembly 1 oversells itself as "self-validating" when it's really "mechanics-validating with one historical comparison datapoint."

**Verdict: REFINE.**

- **What to keep:** P3.a Generic (16-type coverage), P5.a 4th candidate (re-run wayfinding-merger as test problem). Both strong on their own.
- **What to drop:** P5.b Contrarian alone — replace with P5.b Generic (full 8-item checklist) which gives positive pass conditions for mechanics. Negative criteria can be ADDED to the positive checklist, not replace it.
- **What to refine:** Frame Assembly 1's "self-validation" honestly as "one historical-comparison datapoint" rather than a self-validation claim. The historical-comparison is one signal among the mechanics checks, not the test's main purpose.

### Candidate B — Assembly 2 ("Lightweight v1")

**Components:** All Focused candidates assembled into a sprint version (~12-18h, 4 sessions, 1.5 weeks).

**Landscape position preview:** BOUNDARY — high actionability but tension with D6, D7.

**Prosecution (strongest case AGAINST):**

> *Assembly 2 compresses Item 3 into one session (~6-8h), but Item 3 is sensemaking's load-bearing item with explicit time-box at 8-15h.* The Focused-everything assembly assumes Item 3 fits in the lower half of its band; if it doesn't, the entire 4-session schedule cascades. The fallback fires earlier (good), but the user has invested 3 prior sessions of work into a roadmap that was implicitly betting Item 3 would be tractable.
>
> Additionally, P5.b Focused (4-item checklist) trades thoroughness for speed. The continuous loop is the project's load-bearing artifact; the synthetic test is its only mechanics-validation gate before external validation. Skimping here means external validation could surface mechanics bugs that should have been caught earlier — wasting external-validation time, which is more expensive.
>
> Per D7 (sustainability), aggressive 4-session pacing with 6-8h sessions risks fatigue, and the prior sensemaking *explicitly* flagged sustainability as the meta-constraint. This assembly bets against that constraint.

**Defense (strongest case FOR):**

> *Velocity has independent value.* A 1.5-week roadmap that delivers a buildable loop is structurally different from a 3-week roadmap that delivers the same loop — the user's energy peaks early in this kind of work; spreading it diffuses focus. The Focused candidates are not corner-cuts; they're tightenings: N=2 instead of 3 (1 fewer wasted iteration); minimum-viable regression check (covers 90% of breakage cheaper); 4-item Item 5 checklist (mechanics-only, no over-validation).
>
> The fallback fires earlier in Assembly 2 — that's a *feature*. If Item 3 is structurally unbuildable, finding out 1 week earlier saves a week.
>
> Per D7, sustainability is multi-dimensional. A roadmap that drags on for 4 weeks risks the user losing momentum and abandoning the project; a roadmap that completes in 1.5 weeks risks fatigue but delivers. The trade-off depends on the user's actual capacity, which sensemaking flagged as MEDIUM-confidence ("depends on user's own assessment").

**Collision:**

Both arguments have merit. The deciding factor: **Item 3's effort estimate is the bottleneck.** Sensemaking's 8-15h band reflects the spread between (best case: read `enes/loop_desing_ideas/`, design /MVL+ converges quickly, implementation is straightforward) and (worst case: design /MVL+ doesn't converge in 4h, implementation hits unforeseen issues). Assuming Item 3 = 8h is optimistic, not safe.

If Item 3 takes 12h (mid-band), Assembly 2's 4-session plan stretches to 5 sessions; if it takes 15h, it stretches to 6 sessions. So Assembly 2's "4 sessions" is really "4-6 sessions, optimistic 4." Same as Generic (5-6 sessions). The compression is mostly in the *other* items, where the tightenings are real.

**Verdict: REFINE.**

- **What to keep:** Most Focused candidates' tightenings (P2.a Focused N=2 is borderline — see below; P1.d Focused minimum-viable regression check; P5.b Focused as a baseline). P4.b Focused (2h design timebox) is good — fail-fast on design.
- **What to relax:** P7.a Aggressive (4 sessions) is unrealistic given Item 3's range. Use 5-6 sessions as the realistic plan with Item 3 spanning 2 sessions if needed.
- **What to drop:** P5.d Focused (1h bug-fix budget) is too tight; bugs at this gate are diagnostic of mechanics issues that may take >1h to root-cause. Use 2h.

### Candidate C — P3.b Generic vs Contrarian (convergence vs directedness)

**Generic:** Convergence = open-question count delta; positive = converging.
**Contrarian:** Directedness = topical-overlap of new questions vs original question.

**Prosecution against Generic:**

> *Convergence as "open-question count decreases" assumes the goal is to settle. For a continuous loop traversing thinking space (the user's stated end-goal), opening new questions is sometimes the right move — discovering frontier areas worth exploring. A convergence-only signal would terminate the loop precisely when it's productive.*

**Prosecution against Contrarian:**

> *Directedness measured by keyword-overlap is a proxy that doesn't track semantic relevance. "What is X?" and "Why does X matter?" have low keyword overlap but high semantic continuity. Keyword-based directedness produces noise; embedding-based would require infrastructure not present.*

**Defense of Generic:**

> *The user's question is a specific question; convergence on it IS the goal. Multi-head v2 explores frontiers; v1 sequential converges. Use the right metric for v1's scope.*

**Defense of Contrarian:**

> *V1 sequential is still meant to traverse thinking space, not just answer-and-stop. Without directedness, the loop has no signal that distinguishes "exploring related territory" from "drifting off topic" — the latter is failure.*

**Collision:**

The two metrics measure different things. Generic measures *progress toward the goal*; Contrarian measures *topical fidelity*. A loop can be high-convergence + low-directedness (settling on the wrong answer) or low-convergence + high-directedness (exploring related territory productively). Neither alone is sufficient.

**Resolution: combine.** Use Generic (convergence on open-questions count) AS the primary termination signal AND Contrarian (directedness as a sanity check) AS a SECONDARY guardrail that fires if convergence happens with topical drift. If the loop converges but has drifted topically, the convergence is suspect.

**Verdict: REFINE both into a combined signal.**

- Convergence (Generic): primary termination input; measured per-iteration.
- Directedness (Contrarian, but using sensemaking-anchor-overlap not keyword-overlap): secondary guardrail; fires alarm if convergence happens with low directedness.

### Candidate D — P3.e Generic vs Contrarian (highest-confidence vs random selection)

**Generic:** Highest-confidence option from /navigate.
**Contrarian:** Weighted random.

**Prosecution against Generic:**

> *"Highest confidence" assumes /navigate emits confidences; if not, falls back to "first listed," which is order-dependent and meaningless. Even if confidences exist, picking highest-confidence each time produces a deterministic, predictable trajectory — the loop becomes a one-trick pony.*

**Prosecution against Contrarian:**

> *Random selection at v1 contaminates Item 5's mechanics-validation. If the test reveals "the loop's output diverged from historical verdict," is that because mechanics broke, or because random selection chose a different path? Item 5's purpose is mechanics-only; randomness adds confounding variables.*

**Defense of Generic:**

> *Determinism is a feature for v1. Item 5 must produce reproducible mechanics-validation. Highest-confidence is the simplest deterministic choice that aligns with /navigate's design.*

**Defense of Contrarian:**

> *Random with weight is honest about v1's lack-of-judgment. If the heuristic is wrong (likely for v1), determinism amplifies the error — the loop fails the same way every time. Randomness produces variance; if the loop succeeds despite random selection, that's stronger evidence of robustness than determinism.*

**Collision:**

Item 5's mechanics-validation purpose is decisive. Mechanics-validation requires reproducibility — the same input should produce the same output, otherwise diagnostic signals are confounded. Random selection breaks this. Determinism is required at v1 even if "highest-confidence" turns out to be a poor heuristic; the heuristic can be replaced in v2 once mechanics are validated.

**Verdict: SURVIVE for Generic; KILL for Contrarian (at v1).**

- **Constructive output for Contrarian KILL:** Random selection is a viable v2 idea once mechanics are validated. Add it to v2's candidate set, not v1's.
- **Refinement for Generic:** explicitly state the fallback rule ("if /navigate doesn't emit confidences, pick the first listed type with a logged warning"). Don't leave the fallback ambiguous.

### Candidate E — P6.a Generic vs Focused (REFINES vs new label)

**Generic:** REFINES (existing label).
**Focused:** New label `nests-as-fallback`.

**Prosecution against Generic:**

> *REFINES doesn't capture the "if my plan stalls, fall back to that one" semantics. Frontmatter parsers and future readers will treat this as a normal refinement, missing the conditional-supersession semantics. The mismatch creates a slow-decay risk: years from now, someone reading just the frontmatter will not know the prior sensemaking is a fallback.*

**Prosecution against Focused:**

> *Vocabulary creep is a real cost. The project already has REFINES, SUPERSEDES, CORRECTS, IMPACTED_BY in finding-frontmatter convention. Adding a new label means: parsers have to handle it; future findings might use it inconsistently; readers have to learn it. For a single conditional-relation case, that's a high overhead.*

**Defense of Generic:**

> *REFINES is good enough. The conditional semantics are captured in the body text (the reconciliation paragraph). Frontmatter is a lightweight pointer; the body carries the nuance. This is how natural-language documentation always works — the structured part is approximate, the prose is precise.*

**Defense of Focused:**

> *Structural honesty matters more than convention preservation. The conditional-supersession semantics IS the relation; using REFINES is misleading. A new label is a small cost for accurate semantics.*

**Collision:**

The "vocabulary creep is real cost" prosecution is structural; the "structural honesty" defense is also structural. They're competing values, not one beating the other.

The deciding factor: **how often does this kind of conditional relation occur?** If this is a one-off, REFINES + body-text disclosure is sufficient (the cost-per-occurrence of vocabulary creep is too high for one case). If it's likely to recur (other inquiries with conditional fallbacks), the new label is justified.

Looking at the project's inquiry patterns — most relations are unconditional REFINES or SUPERSEDES. Conditional fallbacks are rare. **One-off case.**

**Verdict: SURVIVE for Generic with REFINEMENT; KILL for Focused.**

- Use REFINES in frontmatter.
- The "Changes from Prior" section in finding.md must explicitly state the conditional-fallback semantics in body text.
- If a *second* inquiry produces a similar conditional relation, revisit this decision and consider the new label (refinement-trigger).

### Candidate F — P1.b Generic vs Contrarian (wire RESUME vs delete)

**Generic:** Wire RESUME up to /MVL+'s existing resume branch; rename inline section.
**Contrarian:** Delete resume.md.

**Prosecution against Generic:**

> *Wiring up adds nothing — the /MVL+ resume branch already does what RESUME describes. The "wire-up" is purely cosmetic (rename a section, point at a file). It preserves a redundant artifact and creates two-source-of-truth risk: if /MVL+'s logic evolves, resume.md may drift.*

**Prosecution against Contrarian:**

> *Deleting RESUME removes a named protocol from the project's vocabulary. The protocols dimension is small (CONCLUDE + SYNTHESIZE + RESUME); deleting one shrinks it. Future doc that references RESUME (by name) breaks. And if RESUME is needed later (Level 1+ autonomy needs explicit resume semantics), re-extracting it is more work than keeping the existing extraction.*

**Defense of Generic:**

> *Named protocols make the system more self-describing. Even if the wire-up is cosmetic, having a named "RESUME" that points at the actual logic is a documentation win. CONCLUDE works the same way — the inline /MVL+ logic IS the protocol; the protocols/conclude.md file is a named reference.*

**Defense of Contrarian:**

> *Empirical evidence: RESUME has been orphan since extraction. The earlier wire-up attempt was reverted (it conflicted with /MVL+'s no-waits rule). Twice extracted, twice not used — that's evidence of un-need. Per protocols/desc.md doctrine, "empirical low-utilization is not structural supersession" — but it IS evidence of structural non-fit. Continuing to keep an unused file is path-dependence, not principle.*

**Collision:**

The Generic defense's analogy to CONCLUDE is structurally sound: CONCLUDE is also "inline logic + named reference." The asymmetry is that CONCLUDE is *invoked* (the /MVL+ pipeline reads conclude.md and executes it), whereas Generic's RESUME wire-up would NOT actually load resume.md — the resume branch in /MVL+ is inline.

So Generic is "rename a section + point at a file" without actually loading the file. CONCLUDE's pattern is "section says 'load this file', actually loads it." That's a real architectural difference.

If we wire RESUME to actually be LOADED by /MVL+'s resume branch (load `homegrown/protocols/resume.md` then execute), it parallels CONCLUDE. But that requires resume.md to be in a loadable, executable form (not just descriptive). Looking at the file (~164 lines, descriptive): it would need rewriting.

**Decision tree:**
- Wire RESUME to actually load (parallels CONCLUDE) → ~1-2h work to rewrite resume.md as an executable protocol; preserves protocol's status; future-ready.
- Wire RESUME nominally (rename section, point but don't load) → ~15min work; cosmetic; two-source-of-truth risk.
- Delete RESUME → ~10min work; removes orphan; loses protocol slot.

The middle option (cosmetic wire-up) is the worst — it has the cost of preserving the file without the value of actually using it.

**Verdict: KILL for cosmetic-Generic; SURVIVE for either DELETE (Contrarian) OR REAL-WIRE-UP (a refined Generic).**

The user faces a binary: real wire-up (do it properly, ~1-2h) or delete (be honest, ~10min). The cosmetic middle is dead.

**Recommendation given roadmap context:** **DELETE** is the right v1 call because:
1. Item 1's scope is consolidation, not new construction. Real wire-up is new construction (rewrite resume.md).
2. The /MVL+ resume branch already works inline; nothing breaks.
3. If RESUME is needed later (Level 1+ autonomy), re-extract from the then-current /MVL+ logic.
4. Per protocols/desc.md: "empirical low-utilization" is evidence of misfit; deletion is honest.

If the user prefers preserving the protocol slot, REAL-WIRE-UP is the alternative and the additional ~1-2h is acceptable scope-creep for Item 1.

### Candidate G — P5.a (which test problem)

Four candidates: re-run protocol_path_generalization (Generic), known-answer math problem (Focused), broken-input test (Contrarian), re-run wayfinding-merger inquiry (4th).

**Light-touch evaluation:**

| Candidate | Pros | Cons | Verdict |
|---|---|---|---|
| Generic (re-run protocol_path_generalization) | Recent inquiry; complete finding; clear ground truth | Single-iteration test; doesn't exercise multi-iteration mechanics | REFINE — usable as one of two test problems |
| Focused (known-answer math) | Trivially verifiable; mechanics-only; fast | Doesn't exercise inquiry-folder semantics; too synthetic to validate continuous-loop machinery realistically | KILL — too synthetic; doesn't test what matters |
| Contrarian (broken-input) | Tests failure path | Single-purpose; doesn't validate happy path | REFINE — keep as ADDITIONAL test (alongside happy-path), not as primary |
| 4th (re-run wayfinding-merger) | Multi-iteration history; complex; closer to real workload | Larger; takes longer to run; risk of self-reference (prosecution above) | SURVIVE — primary test problem |

**Verdict: SURVIVE for 4th + Contrarian as supplementary; REFINE Generic to "optional second test if time permits"; KILL Focused.**

The primary Item 5 test problem is **re-run wayfinding-merger inquiry** in autonomous mode. Add a quick **broken-input test** as a supplementary failure-path check. Generic (protocol_path_generalization re-run) becomes optional.

---

## Phase 2 (continued) — Lower-leverage sub-decisions (light-touch)

| Sub-decision | Surviving choice | One-line reasoning |
|---|---|---|
| P1.a apply order | Generic (dependency: protocol_path_generalization → inquiry_md → telemetry_routing) | Lowest-risk-first within the dependency constraint; user can pause before destructive steps |
| P1.c stalled SUPERSEDED | Focused (mark all 5 + add back-reference in supersedor) | Bidirectional traceability is cheap and pays off long-term |
| P1.d regression check | Generic (full 6-test checklist) — or Focused as fallback if time-pressed | Full checklist is sustainable for Item 1's 4-6h budget |
| P2.a N value | Generic (N=3) | Sensemaking's recommendation; matches typical SIC convergence patterns |
| P2.b trigger location | Generic (new section in /MVL+ EXECUTE PIPELINE) | Cheaper than extracting a new protocol; aligns with current architecture |
| P2.c manual/auto routing | Generic (`## Mode:` field in `_state.md`) | Simple, inspectable, follows /MVL/MVL+ convention |
| P2.d /MVL also? | Generic (only /MVL+) | Don't bloat /MVL with multi-discipline orchestration |
| P3.a coverage signal | Generic (16-type ratio from /navigate) | Reuses existing instrumentation; high mechanism convergence (Comb+DT) |
| P3.b convergence signal | Generic + Contrarian COMBINED (per Candidate C verdict above) | Convergence as primary; directedness as guardrail |
| P3.c productivity signal | Generic (anchor/idea/verdict count delta) | Operational and uses existing telemetry |
| P3.d termination | Generic (conjunctive 3-iter thresholds) + a safety cap (max 20 meta-iterations) | Conjunctive avoids early termination; safety cap prevents runaway |
| P3.e selection heuristic | Generic (highest-confidence) | Required for reproducible mechanics-validation per Candidate D verdict |
| P3.f spec location | Focused (`devdocs/spec/meaningful_traversal.md`) | Spec is decomposition input, not runtime protocol — devdocs is right |
| P4.a folder name | Generic (`continuous_loop_runner_v1`) | Descriptive + version-explicit; aligns with multi-version trajectory |
| P4.b time-box | Focused (2h design + 11h impl = 13h total) | Fail-fast on design phase; aligns with sensemaking's 8-15h band |
| P4.c fallback | Generic (halt → external validation per prior sensemaking → retry) | Aligns with sensemaking's nested-fallback resolution |
| P5.b pass criteria | Generic (8-item checklist) + add Contrarian's negative criteria as supplement | Positive checklist for mechanics; negative as additional safety net |
| P5.c manual mode | Generic (yes, brief 30min) | Worth verifying both paths work |
| P5.d bug-fix budget | Refined (2h soft cap; if exceeded, log + assess) | Generic was 2h; Focused 1h too tight; Contrarian no-budget too loose |
| P6.b frontmatter format | Generic (path-only) | Standard format; comment in body text carries semantics |
| P6.c back-reference | Focused (no — don't edit prior sensemaking) | One-way reference is sufficient; back-edits conflate contexts |
| P6.d reconciliation text | Generic (full paragraph) | Explicit conditional-fallback semantics in prose |
| P7.a session schedule | Refined Generic (5-6 sessions, 2-2.5 weeks; Item 3 may span 2 sessions) | Honors Item 3's range realistically; sustainable |
| P7.b break-points | Focused (artifact-based: each session ends with a verifiable artifact) | Concrete and inspectable |

---

## Phase 3.5 — Assembly Check

Now that individual candidates have verdicts, evaluate the four innovation Assemblies as wholes against the same dimensions.

| Assembly | D1 | D2 | D3 | D4 | D5 | D6 | D7 | Overall |
|---|---|---|---|---|---|---|---|---|
| Assembly 1 (self-validating) | PASS | PASS | PASS | PASS | PASS | **MIXED** (mitigated, not solved) | PASS | BOUNDARY — REFINE |
| Assembly 2 (lightweight v1) | PASS | PASS | **WEAK** (optimistic on Item 3) | PASS | PASS | PASS | **WEAK** (compresses) | BOUNDARY — REFINE |
| Assembly 3 (sustainability-first) | PASS | PASS | PASS (overshoots) | PASS | PASS | PASS | PASS | VIABLE — but slow |
| Assembly 4 (bypass Item 1) | **FAIL** (violates Item 1 prerequisite) | PASS | PASS (saves time) | **FAIL** (Item 3 inherits inconsistent state) | PASS | **FAIL** (no consolidation gate) | PASS | DEAD — KILL |

### Synthesis: a refined Assembly 5 ("Realistic")

Combine the surviving elements:
- **Pacing:** 5-6 sessions over ~2.5 weeks (between Generic and Focused).
- **Item 1 strategy:** dependency-order apply; full 6-test regression check; **DELETE** RESUME (Candidate F verdict).
- **Item 2 strategy:** N=3; new section in /MVL+ for trigger logic; mode field in `_state.md`.
- **Item 3 strategy:** own /MVL+ at `continuous_loop_runner_v1`; 2h design timebox + 11h impl; halt→external-validation fallback.
- **Item 4 strategy:** 16-type coverage + open-question convergence + anchor-overlap directedness guardrail + count-delta productivity; conjunctive 3-iter termination + 20-iter safety cap; highest-confidence heuristic; spec at `devdocs/spec/meaningful_traversal.md`.
- **Item 5 strategy:** primary test = re-run wayfinding-merger inquiry in autonomous mode; supplementary = broken-input test; 8-item positive checklist + negative-criteria supplement; brief 30min manual mode test; 2h bug-fix budget.
- **P6 strategy:** REFINES frontmatter; explicit conditional-fallback paragraph in body; no back-reference in prior sensemaking.

**Verdict for Assembly 5: SURVIVE — primary recommendation.**

This is the answer to the inquiry's question. The other Assemblies become boundary alternatives the user can pick if they prefer different trade-offs (Assembly 2 for speed, Assembly 3 for sustainability), but Assembly 5 is the structurally-balanced default.

---

## Phase 4 — Coverage + Convergence

### Accumulator update

- All 7 critical-weight dimensions evaluated against high-leverage candidates.
- All 4 innovation Assemblies evaluated.
- All ~25 sub-decisions have surviving choices.
- 1 KILL (Assembly 4); 1 conditional KILL (P3.e Contrarian for v1, viable for v2); 1 KILL (P5.a Focused — too synthetic); 1 KILL (cosmetic-RESUME middle option); 1 KILL (P6.a Focused new label).
- Multiple REFINEs producing combined choices (Candidate C signals; Candidate F decision tree; Candidate A reframing).

### Coverage map

- VIABLE region: covered (Generic candidates).
- BOUNDARY region: thoroughly probed (Assemblies 1, 2; high-leverage P3, P5, P6, P1.b candidates).
- DEAD region: identified (Assembly 4; cosmetic-RESUME; P5.a Focused).
- UNEXPLORED: minor — P3.d Contrarian (no termination) was probed lightly and rejected at light-touch level.

### Convergence signal

**TERMINATE.** Convergence reached. Surviving Assembly 5 + per-piece sub-decisions form a complete, executable roadmap. No critical regions remain unexplored.

---

## Final Punch List (the user's actionable roadmap)

### Item 1 — Consolidation + regression check (4-6h, Sessions 1-2)

**Sub-task 1.1 — Apply punch lists in dependency order:**
1. Verify `protocol_path_generalization` is fully applied (~15min). Fix any remaining gaps.
2. Apply `inquiry_md_post_navigation_update_value_check` — formal /inquiry deletion + stalled-inquiry SUPERSEDED markers (~1.5h).
3. Apply `telemetry_routing_protocol_classification` Phase 1 — 5 disciplines get PROCEED/FLAG/RE-RUN sections (~1.5h). OR explicitly drop with documented reason (15min).

**Sub-task 1.2 — Mark stalled inquiries SUPERSEDED:**
- `wayfinding_fundamental_fix`, `sic_as_wayfinder`, `navigation_placement` (partial), `sic_navigation_integration` (partial), `search_equals_navigation_plus_x` (partial). All 5 marked, each with `## Status: SUPERSEDED` + reason + pointer to `wayfinding_navigation_unification_check`.
- Add bidirectional back-reference: `wayfinding_navigation_unification_check`'s finding lists the 5 superseded inquiries.

**Sub-task 1.3 — DELETE `homegrown/protocols/resume.md`:**
- The protocol is orphan; the /MVL+ resume branch is inline and works; deletion is honest.
- Update `homegrown/protocols/desc.md` to remove the RESUME entry (or mark it as "extracted, then removed — reason: empirical non-fit; /MVL+'s inline resume branch is sufficient").
- If user prefers preserving the protocol slot: REAL-WIRE-UP (rewrite resume.md as executable, modify /MVL+ to load it) — adds ~1-2h.

**Sub-task 1.4 — Regression check (6-test checklist):**
1. Each of 10 disciplines invoked on a small test input → non-empty, well-formed output.
2. `/MVL` runs end-to-end on a small test question → produces `finding.md`.
3. `/MVL+` runs end-to-end on a small test question → produces `finding.md`.
4. CONCLUDE-produced `finding.md` matches the template.
5. `install_for_claude.sh` runs cleanly via curl into a temp dir.
6. `install_for_codex.sh` runs cleanly into a temp dir.

### Item 2 — Conditional /navigate invocation (1-2h, Session 3)

- **Trigger conditions** (3):
  1. MVL produces a finding flagged as partial/open (open questions, unresolved frontier).
  2. MVL fails to converge after **N=3** iterations of the NO branch.
  3. User explicit invocation.
- **Implementation:** new section in `homegrown/MVL+/SKILL.md` (and the references file) labeled "Conditional /navigate invocation" inserted into EXECUTE PIPELINE after the iteration-complete check. Logic: if any trigger fires → load `homegrown/navigation/SKILL.md` and invoke; pass output to selection mechanism per mode.
- **Mode field:** `_state.md` gets `## Mode: manual | autonomous` (default: manual).
- **/MVL changes:** none. Only /MVL+ gets the trigger.
- **Test:** run a small inquiry that hits each trigger; verify /navigate fires correctly.

### Item 4 — Meaningful-traversal criteria + selection (4-6h, Session 3)

- **Spec location:** `devdocs/spec/meaningful_traversal.md`.
- **Coverage signal:** ratio of distinct /navigate-types invoked across iterations / 16. New iteration "adds coverage" if it visits an unvisited type.
- **Convergence signal (primary):** (open-question count at N-1 minus N) / count at N-1. Positive = converging.
- **Directedness signal (guardrail):** sensemaking-anchor-overlap between iteration N's anchors and the original question's anchors. Low directedness fires alarm even if convergence is high (suspicious convergence).
- **Productivity signal:** (count of new anchors + ideas + verdicts in N) / (count in N-1). Greater than 1 = productive.
- **Termination rule:** terminate when ALL of: no new types visited for 3 consecutive iterations AND convergence ratio < 0.1 for 3 consecutive iterations AND productivity ratio < 1.0 for 3 consecutive iterations. **Plus safety cap: max 20 meta-iterations regardless of signals.**
- **v1 autonomous-selection heuristic:** highest-confidence option from /navigate's output. Fallback rule: if /navigate doesn't emit confidences, pick first listed type AND log a warning.

### Item 3 — Continuous-loop runner v1 (8-15h, Sessions 4-5)

- **Execution mode:** own /MVL+ inquiry at `devdocs/inquiries/continuous_loop_runner_v1/`.
- **Inputs (handoff package):**
  - `enes/loop_desing_ideas/` (~803 lines) — load-bearing input.
  - `enes/thinking_space_dynamics.md`, `enes/desc.md`, `enes/discipline_taxonomy.md`.
  - Item 2's output: trigger logic spec.
  - Item 4's output: criteria + heuristic spec at `devdocs/spec/meaningful_traversal.md`.
- **Time-box:**
  - Design phase /MVL+ time-boxed at **2h**. If sensemaking + decomposition haven't produced a converged structure within 2h, fire fallback.
  - Implementation phase time-boxed at **11h**. If exceeded, fire fallback.
  - Total: ~13h target; 15h hard ceiling.
- **Fallback (if time-box fires):**
  1. Halt Item 3.
  2. Execute prior sensemaking's recommendation: external validation on disciplines individually (1-3 days, foreign problem).
  3. After validation, retry Item 3's /MVL+ with validation findings as new input.
- **Deliverable:** new top-level skill (e.g., `/continuous` or similar — name decision part of Item 3's design /MVL+); `_meta_state.md` schema; integrates Item 2 + Item 4; `SKILL.md` + `references/` documented; v2 parallel-multi-head extension hooks noted in design.

### Item 5 — Synthetic test (2-4h, Session 6)

- **Primary test problem:** re-run `wayfinding_navigation_unification_check`'s question through the continuous loop in **autonomous mode**. Ground truth = the existing finding's verdict (DELETE wayfinding).
- **Supplementary test:** broken-input test (empty question OR contradictory constraints) — verify the loop fails gracefully (terminates, doesn't infinite-loop, doesn't crash).
- **Optional second test (if time permits):** re-run `protocol_path_generalization`'s question.
- **Pass criteria checklist (8 positive items + 4 negative supplements):**

  Positive:
  1. Loop runs without errors.
  2. `_meta_state.md` is created and updated each iteration.
  3. /navigate fires at correct trigger conditions per Item 2.
  4. Selection executes (autonomous mode using Item 4's heuristic).
  5. Coverage signal computed and logged each iteration.
  6. Convergence signal + directedness guardrail computed each iteration.
  7. Productivity signal computed and logged each iteration.
  8. Termination triggers when expected (per Item 4's rule OR safety cap).

  Negative (must NOT occur):
  - No infinite loop.
  - No state corruption (resume from `_meta_state.md` works).
  - No exception escapes the runner.
  - No /navigate invocation outside trigger conditions.

- **Manual mode test:** brief 30min — run primary problem in manual mode; verify path works.
- **Bug-fix budget:** 2h soft cap. If exceeded, log as known-issue and assess whether to proceed or extend.

### P6 — Reconciliation handling

- **Frontmatter:** `refines: devdocs/sensemaking/what_this_project_needs_most.md`
- **No back-reference** added to prior sensemaking.
- **"Changes from Prior" section in finding.md** body explicitly states the conditional-fallback semantics:

  > *Refines `devdocs/sensemaking/what_this_project_needs_most.md` for the focused scope "what's needed before real-application external validation, given the orchestrated continuous loop is the artifact under test." The two findings answer different questions and are co-valid for their respective scopes. The prior sensemaking is **nested as a fallback**: if Item 3 (the continuous-loop runner) stalls or proves unbuildable within its time-box, halt this roadmap and execute the prior sensemaking's recommendation (external validation of disciplines individually, then revisit the runner with validation findings as input).*

### P7 — Pacing (5-6 sessions, ~2.5 weeks)

| Session | Items | Duration | End-state (break-point) |
|---|---|---|---|
| 1 | Item 1 sub-tasks 1.1 (parts 1-2) + 1.2 + 1.3 | ~3h | Punch lists 1-2 applied; stalled SUPERSEDED; RESUME deleted. Git tree clean. |
| 2 | Item 1 sub-tasks 1.1 (part 3) + 1.4 (regression) | ~2-3h | All Item 1 done; regression passes. |
| 3 | Item 2 + Item 4 (parallel small commitments) | ~5-7h | /MVL+ has trigger logic; spec at `devdocs/spec/meaningful_traversal.md` written. |
| 4 | Item 3 design /MVL+ + start implementation | ~5-6h | `continuous_loop_runner_v1` finding.md exists OR fallback fired. |
| 5 | Item 3 implementation completion + integration | ~5-7h | Runner skill installed and runnable. (Skip if Session 4 completed Item 3.) |
| 6 | Item 5 (primary + supplementary tests + finding.md write) | ~3-4h | Mechanics-validation passed; this inquiry's finding.md written; project ready for external validation. |

Sustainability constraints: max ~7h per session; rest at least 24h between sessions; total span 2-2.5 weeks.

### Open Questions (deferred)

These came up during sensemaking/critique but explicitly NOT part of the top 5:

1. **`/diagnose` discipline.** Currently a placeholder. Revisit after Item 5 if synthetic-test surfaces broken-problem cases.
2. **Multi-head parallel runner (v2 of Item 3).** End-goal per `enes/desc.md`. v2 work after v1 sequential is externally validated.
3. **BRANCH / MERGE / HANDOFF / BRIEF / VERSION end-goal capabilities.** Defer until external validation indicates which are actually needed.
4. **What happens to `enes/loop_desing_ideas/` after Item 3 consumes it?** Defer to Item 3's /MVL+; possible reorganization into runner skill's `references/`.
5. **REAL-WIRE-UP of RESUME (alternative to deletion):** if user prefers preserving the protocol slot, ~1-2h additional Item 1 work; trigger = user preference at decision point in Item 1.
6. **Random-selection heuristic (P3.e Contrarian) for v2:** killed for v1 due to mechanics-validation reproducibility need; viable v2 idea once v1 mechanics validated.

---

## Convergence Telemetry

- **Dimensions evaluated:** 7/7, all critical covered: YES.
- **Adversarial strength:** STRONG — prosecution arguments would give defenders pause (Assembly 1's self-reference critique, Assembly 2's Item 3 optimism, P1.b's middle-option deadness, P6.a's vocabulary creep).
- **Landscape stability:** CHANGED — discovery: middle-option-RESUME is dead (vs. innovation's 3 candidates); Assembly 1 misframed itself; new "Assembly 5" emerged.
- **Clean SURVIVE:** YES — Assembly 5 (refined-realistic combination) survives all 7 dimensions.
- **Failure modes observed:**
  - Wrong dimensions? No — D1-D7 all extracted from sensemaking + decomposition.
  - Rubber-stamping? No — multiple KILLs and REFINEs produced.
  - Nitpicking? No — focused on high-leverage candidates, light-touch on the rest.
  - Dimension blindness? No — D6 (self-reference safety) explicitly applied to Assembly 1.
  - False convergence? Mitigated — Assembly 5 emerged from the combination; not a single innovation candidate accepted whole.
  - Evaluation drift? No — dimensions held across all candidates.
  - Self-reference collapse? **Acknowledged** — this critique is the project critiquing its own roadmap; mitigation is the explicit fallback to external validation in Assembly 5 (which is the cure for self-reference per prior sensemaking).
- **Overall: PROCEED** (dimensions covered + adversarial strong + clean SURVIVE + no failure modes).

---

## Signal: TERMINATE

The inquiry has produced a defensible top-5 prioritized roadmap with concrete commitments per item. The user can act on this immediately.

**Ranked survivors:**
1. **Assembly 5** (the refined-realistic combination above) — primary recommendation.
2. Assembly 2 (lightweight v1) — viable if user prefers speed and accepts compression risk.
3. Assembly 3 (sustainability-first) — viable if user prefers margin and accepts schedule extension.
4. Custom — user can mix-and-match per-piece commitments based on their own constraints; the per-sub-decision verdicts are the building blocks.

**Next step:** Write `finding.md` synthesizing this roadmap into a self-contained document a fresh reader can follow.
