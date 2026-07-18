## User Input

devdocs/inquiries/2026-07-09_13-19__articulate_warm_reference_file_design/_branch.md — (Structural: crystallize the stabilized blueprint [SV5] into a CONCRETE, buildable section-by-section outline of `references/articulate_warm.md` — the actual headers, the IN/POINTED/OUT manifest, the conflict-detection spec sketch, the division-of-labor. No re-open. Anti-sycophancy both ways. Grounded in the template + priors.)

---

# Innovation — the reference-file blueprint, crystallized

Generative pass. The Meaning/Process are inherited; this pass makes the STRUCTURAL design concrete and build-ready.

## (1) THE CONCRETE SECTION OUTLINE (buildable — the actual file skeleton)

```
  references/articulate_warm.md  (target ~180-260 lines — smaller than cold's 462: it POINTS for the shared bulk)

  # Warm (Post-Context) Articulation — A Thinking Discipline

  ## 1. Identity
     1.1  What warm is        — re-invocation of cold + ONE context-enabled application;
                                loop-controller + first request-vs-reality conflict-gate
     1.2  The context symmetry — cold's 3 limits (identify-only/no-commit/never-ask) →
                                warm inverts each (commit / re-run / identify-conflicts-&-flag)
     1.3  ★ Inheritance declaration — the INHERITED-by-pointer vs OWNED-here manifest (§ below)
     1.4  NOT-list            — inherited (never-ask/no-halt/don't-adjudicate → POINT cold) +
                                warm-specific (never-fetch · emit-not-ask)
     1.5  Vocabulary          — re-anchor · re-surface · context-need · material-change ·
                                conflict · content-conflict · the trigger

  ## 2. Components
     2.1  The three operation-classes — (a) carried (b) re-run (c) warm-only-new
     2.2  ★ Operational cheat-sheet   — one imperative line per op (carry / re-run / trigger),
                                        NO canonical authority; DEFINITIONS → POINT cold §Five-Operations
     2.3  The trigger-gated re-run principle — did-it-actually-move; the §9 cost-guard
     2.4  ★ Conflict-detection (FULL canonical spec) — the one warm-only operation (§4 below)

  ## 3. Process Model
     3.1  The per-item warm sequence — re-fire MQ2 → trigger re-runs → conflict-detection →
                                       Rephrase → carry
     3.2  The re-anchor→re-surface loop + termination RULE (fixpoint / cap=2 / oscillation);
          rationale → POINT design-doc §8
     3.3  Substrate — receives-never-fetches

  ## 4. Quality
     4.1  Inherited failure modes — POINT cold §Failure-Modes (LAYER 1 / LAYER 2)
     4.2  ★ Conflict-detection's own failure modes — the four (below)

  ## 5. Output Contract
     5.1  The warm bundle schema — re-anchored MQ2 · on-trigger re-runs · conflict-flag+payload ·
                                   Rephrase · carried ops · verdict
     5.2  Verdict + content-conflict flag-type → POINT cold §Verdict-Assignment

  ## 6. Execute the Warm Process
     the runnable steps — canonicalized from the SKILL's current 9 steps
```

## (2) THE IN / POINTED / OUT MANIFEST (the concept inventory — build-ready)

| Placement | Concepts |
|---|---|
| **IN (owned, canonical here)** | identity · the context-symmetry · **the inheritance declaration** · the NOT-list warm-specifics · vocabulary · the 3-operation-class taxonomy · **the operational cheat-sheet** · the trigger-gated re-run principle · **conflict-detection (full spec)** · the per-item sequence · the loop+termination *rule* · substrate · the warm bundle schema · **conflict-detection's 4 failure modes** |
| **POINTED (inherited, → `articulate_simple` reference)** | the 5 operation definitions · the 2-shape principle · the verdict system · the content-conflict flag-type (R2c) · cold's LAYER 1/2 failure modes |
| **POINTED (→ design doc)** | the WHY / rationale (ordering problem · the decoupling argument · why cap=2) |
| **OUT — never** | the 5 operation definitions restated in full (the hard inherit-not-duplicate line) |

## (3) CONFLICT-DETECTION — the full spec that lives here (the file's primary reason)

The one operation with **no cold home** → canonical *here or nowhere*:
```
  conflict-detection  (warm-only; operation-class (c))
    input      the re-anchored premise + the surfaced material
    procedure  identify incompatibilities between what the request ASSUMES
               and what the project REALITY shows.  2-shape (list | explicit-empty).
               grade SEVERITY.  DON'T adjudicate (name the mismatch; don't rule).
    ladder     none → HIGH-PROCEED
               resolvable-by-re-anchor → re-anchor + MED-FLAG (content-conflict)
               severe → HIGH-FLAG + content-conflict + a formulated clarifying-question payload
    division   discipline EMITS (flag + payload); RUNNER surfaces/asks/blocks
    autonomy   block-and-ask = operator-present-only; autonomy → flag-and-best-effort
    flag-type  content-conflict  → POINT cold §Verdict-Assignment (defined-shared, used-warm-only)
```

## (4) CONFLICT-DETECTION'S FOUR FAILURE MODES (Quality §4.2 — the resolved open question)

| Mode | What it is |
|---|---|
| **False-positive conflict** | flagging a non-conflict (mistaking a *gap* the re-anchor should fill for a *contradiction*) |
| **Crying-wolf over-flag** | severity inflation — routine gaps escalated to HIGH-FLAG → the runner stops trusting flags |
| **Adjudicate-instead-of-identify** | deciding which side is *right* (request vs reality) — a NOT-list violation (`:132`) |
| **Ignore-the-trigger** | re-running every op / over-detecting → breaks the §9 cost bound |

Tied to conflict-detection's actual spec (not warm-wide invented modes). **Refines design-doc §13's "no new failure modes"** — a pre-conflict-detection blanket, updated exactly as "no new operations" → "no new operation-type" (fold-reopen: new evidence postdates §13). Structural documentation, not a Process re-open.

## (5) THE DIVISION OF LABOR (build-ready)

```
  SKILL.md          thin invocation wrapper  → Step-0 pre-reads cold-reference (shared defs)
                    + warm-own reference (the delta); ★SLIMS (the 9 steps move to §6 Execute)
  references/
   articulate_warm  ★ canonical operational spec  ← THIS FILE
  docs/how_..._be   rationale / provisional (the WHY)  ← POINTED, kept
  articulate_simple
   /references/…     shared ops · 2-shape · verdicts · flag-type · failure modes  ← POINTED
```
**Consolidate-not-scatter:** the SKILL's steps **move** into §6 (not a copy); conflict-detection gets **one** home (not split across design-doc + SKILL). Executing the SKILL-slim is a **separate build**, named here.

## (a) MECHANISM LEDGER

| Mechanism | Produced |
|---|---|
| **Domain transfer** (gen) | the 6-section skeleton — transferred from the fixed discipline-reference template (cold/surfacing). |
| **Absence recognition** (gen) | the inheritance-declaration (no template slot exists for "what I delegate") + conflict-detection's homelessness. |
| **Constraint manipulation** (framer) | holding *operationally-self-contained* against *inherit-not-duplicate* → the operational/canonical split. |
| **Combination** (gen) | the IN/POINTED/OUT manifest — composing the concept inventory across the split + the inter-file division. |
| **Inversion** (framer) | fewer-sources-not-more (below). |

## (b) ASSEMBLY EMERGENT

Composing the design, a **reusable template** emerges: **for any discipline that inherits and extends another, its reference = the standard skeleton + two additions — an inheritance-declaration (the delegate/own manifest) and the operational/canonical split (inline the shape, point the definition).** The inheritance-declaration + the split are the two structural features an *inheriting* discipline reference needs that an *original* one doesn't.

**★Sized honestly:** a useful **template for the (currently N=1) inheriting-discipline case** — warm is the only inherit-and-extend discipline in the harness today. It's grounded in this one case; **not a validated pattern** until a second inheriting discipline exists. Modest, derived-from-this-case; do not inflate into a general law.

## (c) THE REQUIRED INVERSION — fewer sources, not more

- **Reading 1 (more scatter):** "warm is already described across SKILL + design-doc + shared-ref; adding a *fourth* file (the reference) makes the scatter worse."
- **The inversion:** it **reduces** effective sources of truth. Today conflict-detection is split across the design doc *and* the SKILL (two half-homes); the reference gives it **one** canonical home. The SKILL's 9 steps *move* in (not copy) — the SKILL *shrinks*. The manifest makes inherit-vs-own **explicit** instead of implicit. So a fourth *file* with a consolidation discipline = **fewer** places the same fact lives, not more. And the user's runtime-self-containment concern is honored (operationally runnable inline) *without* the drift (canonical pointed).
- ★Anti-sycophancy — the honest core: **the user's two questions drove this.** "Maybe it should have its own reference file?" surfaced the homelessness; the runtime-cost pushback ("referencing is costly in terms of thinking") forced the operational/canonical split that makes the file runnable-yet-non-duplicating. The design is the *consequence* of both questions, not a synthesis I originated. **Land: consolidation-not-scatter, user-driven.**

## (d) INHERITED FRAME AUDIT — challenged? YES

- **The operational/canonical split:** is the inlined cheat-sheet genuinely authority-free, or does it *become* a second source (drift) the moment it's inlined? → **Critique.**
- **The inheritance-declaration:** a real structural need, or documentation ceremony that no one maintains? → **Critique.**
- **Naming conflict-detection's failure modes:** refinement of §13, or scope-creep / invented modes? → **Critique.**
- **The SKILL-slim:** in-scope (division-of-labor), or leakage beyond "design the reference"? → **Critique.**

Four live prosecutions to the gate.

## Tests

- **Novelty:** the skeleton = low (template-transfer, a virtue); the inheritance-declaration + the operational/canonical split = **moderate** (the genuinely new structural features); conflict-detection-IN = the load-bearing placement.
- **Actionability:** HIGH — the section outline (1) + the manifest (2) + the conflict-detection spec (3) + the failure modes (4) + the division (5) are directly buildable into the file.
- **Scrutiny survival:** the four most-attackable claims routed to the gate.
- **Mechanism-independence:** the split, the inheritance-declaration, the failure-modes, and the SKILL-slim are independently grounded (each on the template / the priors / the guardrails) — not one idea in four hats.

**Signal:** PROCEED to Critique. Crystallized: the concrete 6-section outline + the IN/POINTED/OUT manifest + the conflict-detection spec + the four failure modes + the division-of-labor; the fewer-sources-not-more inversion (user-driven); four prosecutions to the gate.
