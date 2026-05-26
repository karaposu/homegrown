# Branch: innovate_top5_improvements_from_pairs

## Question
What are the top 5 domain-agnostic improvements to apply to the `/innovate` discipline (`cognitive_harness/innovate/references/innovate.md`) such that the discipline can natively produce the kinds of cognitive moves the user currently has to introduce manually — as evidenced by the 19 sequential human-innovation-contribution pairs catalogued in `devdocs/inquiries/2026-05-17_22-51__innovation_improvement_pair_detection/finding.md`?

## Goal
A concrete proposal-list of ≤ 5 specific improvements to `/innovate`, each:
- **Domain-agnostic** — the improvement should work for any subject matter (not specific to navigation, materialization, or any project artifact).
- **Operationally specified** — named clearly enough that a future spec-edit inquiry can implement it; defines what cognitive move the improvement adds; where it would slot into the existing 7-mechanism + 2-operation + 5-test + 6-failure-mode structure.
- **Evidence-grounded** — each improvement points back to which of the 19 pairs it would have caught; the contribution category (T1 generative-content / T2 frame-reshape / T3 scope-reshape / T4 methodology directive) it addresses; the prior gap (Gap-1 T2 framer-suite under-elaborated / Gap-2 T4 procedural-meta absent) it closes.
- **Top-ranked** — the five chosen are the highest-leverage based on (a) breadth of pairs caught, (b) structural distinctness from existing mechanisms, (c) actionability now.

The user should be able to read the list and decide either: (i) commit to these 5 as the input to a future `/innovate` redesign inquiry; or (ii) reject a specific one with structural counter-argument.

## Scope Check
Question covers goal. The question asks for ≤ 5 specific improvements; the goal pins them to be domain-agnostic, operationally specified, evidence-grounded, and top-ranked.

Specific-vs-pattern check: the user asks about improvements derived from the 19 specific pairs, but the requirement "domain-agnostic" forces the answer onto the PATTERN level. The 19 pairs are evidence; the improvements must generalize. Default: address the broader pattern (what cognitive moves `/innovate` is missing), grounded in the specific examples. Both readings collapse — each improvement must be a domain-agnostic mechanism justified by ≥1 specific pair.

## Layer Commitment

**Primary layer: PROCESS.** The load-bearing question is what STEPS / mechanisms / cognitive moves `/innovate` should run that it currently does not. Adding new mechanisms to the 7-mechanism set or new sub-modes within existing mechanisms is a procedural-architecture change. Spec-text additions are downstream of process commitments.

**Other layers considered, explicitly out of scope for THIS run:**

- **Meaning** — what `/innovate` IS as a cognitive operation. The current spec defines it as "creating something that doesn't exist in the current evaluation frame — a new idea, approach, condition, or combination — and making it viable enough to survive scrutiny." This inquiry treats that definition as committed; the user is not questioning what innovation IS but what mechanisms it should have. If a downstream pass reveals the definition itself is too narrow (e.g., excludes procedural-meta moves entirely), a Meaning-layer inquiry can fire then.
- **Structural** — what the spec's sections/organization look like. Section-level reorganization is downstream of process additions; once we know which new mechanisms / sub-modes to add, the structural placement (in the 7-mechanism list? as a new category? as a new failure-mode entry?) becomes a separate decision. Deferred.

If a proposed improvement turns out to require redefining what `/innovate` IS (Meaning layer) — for example, if covering T4 procedural-meta moves requires saying "innovation is not just creating content; it includes proposing changes to the procedure itself" — that's a sequential follow-up Meaning-layer inquiry. Flag it; do not silently merge it into this Process-layer pass.

## Synthesis Trigger

This inquiry consolidates TWO prior outputs:

- `cognitive_harness/innovate/references/innovate.md` — the canonical current `/innovate` discipline spec. Commits to: (a) the 2-operation structure (Generation + Framing); (b) the 7-mechanism vocabulary (4 Generators: Combination, Absence Recognition, Domain Transfer, Extrapolation; 3 Framers: Lens Shifting, Constraint Manipulation, Inversion); (c) the seed-trigger model (7 seed types); (d) the 3-phase process (Seed → Generate → Test); (e) the 5-test cycle (Novelty / Scrutiny survival / Fertility / Actionability / Mechanism independence); (f) the 6 failure modes (Premature Evaluation / Single-Mechanism Trap / Early Frame Lock / Innovation Without Grounding / Mechanism Exhaustion / Survival Bias); (g) the assembly check + axis coverage check refinements; (h) the disposition categories (ACTIONABLE / DEFERRED with revival trigger / RESEARCH FRONTIER).

- `devdocs/inquiries/2026-05-17_22-51__innovation_improvement_pair_detection/finding.md` — the 19-pair dataset + structural diagnosis. Commits to: (a) the 4-category human-contribution taxonomy (T1 generative-content / T2 frame-reshape / T3 scope-reshape / T4 methodology directive); (b) the 12 observed sub-types; (c) the consolidated two-gap diagnosis (Gap-1: T2 framer-suite under-elaborated, 9 distinct sub-types vs Lens Shifting alone; Gap-2: T4 procedural-meta absent entirely from `/innovate`'s mechanism vocabulary); (d) the evidence-strength tiers; (e) the verdict that downstream `/innovate` redesign should target both gaps; (f) the 19 specific pair-records as the evidence base.

CONCLUDE will require the finding to include an `## Inherited Commitments Re-test` section that addresses each of these commitments — either confirming it survives this inquiry's work, or flagging it as inherited-without-re-test with a reason. Sensemaking + Critique will plan to actually re-test (not just record) the commitments where they materially affect the top-5 selection: specifically the 4-category taxonomy (does any proposed improvement reveal a 5th category?), the two-gap diagnosis (do the top-5 cover both gaps, or does one dominate?), the existing 7-mechanism vocabulary (does any proposed improvement duplicate an existing mechanism rather than extend?).
