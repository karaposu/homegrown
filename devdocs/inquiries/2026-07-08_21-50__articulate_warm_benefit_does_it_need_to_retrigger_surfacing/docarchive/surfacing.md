## User Input

devdocs/inquiries/2026-07-08_21-50__articulate_warm_benefit_does_it_need_to_retrigger_surfacing/_branch.md — (DESIGN dive, Surfacing = settle whether articulate_warm earns its place and whether re-triggering surfacing should be CORE; read the built surfacing + articulate_simple specs + the warm-pass canon doc; candidate-generate HA-HE; guard both ways. Full spec in _branch / the instruction.)

---

# Surfacing — workspace + thin artifact

**Mode:** artifact (the specs + canon doc are concrete) + possibility (the HA–HE design threads). **Entry:** signal-first. **Territory:** explicit-bounded (the two built specs + the canon doc + the design-thread space). Boundary-discovery: not fired (territory given).

## ★ The decisive find (up front)

**The re-surface mechanism the user proposes ALREADY EXISTS in the surfacing spec — it is idle, not absent.** Surfacing is spec'd as re-invocable with a `refined-sub-purpose`, the runner owns cross-invocation re-invocation, and incremental (non-redo) re-surface is already defined. So "articulate_warm re-triggers surfacing" is **not new machinery** — it is the runner re-invoking surfacing with the warm pass's revised context-need, exactly as it already does for the cold pass. What is genuinely *missing* is the **loop-termination criterion** (when to stop re-surfacing) — no spec defines it. That gap is the real design contribution.

---

## Workspace (substantive findings)

### R1 — Surfacing is spec'd re-invocable, runner-controlled, with a refined-purpose parameter (DECISIVE for HC)
- §1.1: *"It is **re-invocable across invocations** as a parameterized variation of the same operation."*
- §3.6 (Re-invocation as parameterized variation): *"Re-invocation is the same 3-phase operation with optional input parameters"* — `prior-artifact`, `prior-workspace`, and **`refined-sub-purpose`** = *"a refined purpose narrowing the bias scope for this re-invocation."*
- §3.7: *"The discipline does NOT loop over multiple invocations within itself; **cross-invocation re-invocation is the runner's responsibility.**"*
- **Reading:** the mechanism for "articulate_warm re-triggers surfacing" is already here. The runner re-invokes surfacing with a `refined-sub-purpose` = the warm MQ2's revised context-need. This is the **same** shape as cold-MQ2→surfacing-1 (runner reads a context-need, invokes surfacing). **HC confirmed at the spec level — it is a reuse, not an addition.**

### R2 — Incremental (non-redo) re-surface already exists; per-invocation cost is bounded (HD)
- §3.6: *"Traversal can skip items already in the prior Trace using the Trace as an exclusion filter (UNLESS the refined-sub-purpose changes the relevance assessment for previously-traversed items)."*
- §4.5 workspace-overload trigger: when adding more would exceed context budget, *"the discipline emits a frontier flag for the remaining uncovered region rather than continuing to read."*
- **Reading:** re-surface can be **targeted/incremental** — fetch just what the new sub-purpose newly makes relevant, skip the already-surfaced. HD's "fetch just T2, not a full redo" is an existing capability. Per-invocation cost is self-bounded (frontier flag, not budget-blow). **HD's cost/incrementality half is spec-supported.**

### R3 — Surfacing draws from a GIVEN territory; the workspace is SESSION-LOCAL (DECISIVE for HA)
- §1.1: *"surfacing does not generate items beyond what is present … in the territory"* — draw-from-given.
- §2.2: boundary-discovery fires only when territory is `unbounded`/`discover`; default `explicit-bounded` draws from the given territory (so a *new* territory must be *handed in* — which the runner does via `refined-sub-purpose`/territory on re-invoke).
- §5.2 persistence: the workspace is *"session-local. The workspace exists only within the LLM session that produced it; **session-end loses the workspace.** Cross-session downstream consumers must operate from the artifact alone or re-read items."*
- **Reading (HA, both ways):** the surfaced material lives in the **session-local workspace** — so *within one warm session the LLM does already hold it implicitly* (the user's premise has real force). BUT the spec itself says the workspace is **lost at session-end** and cross-session consumers get only the thin artifact (no item content). So the value of an **explicit committed re-articulation scales exactly with session-loss / fragmentation / autonomy** — the strong support for HE's "commit-value is real but autonomy-scaled."

### R4 — The articulate_simple MQ2 interface + its verdict axis = the convergence signal (HC/HD)
- articulate_simple ref §"Meta-question": *"MQ2 (context-need axis): what context does the response need that isn't in the statement?"*
- articulate_simple ref, Mode 5: MQ2's answer must carry three element-axes — **verdict / kinds / stance**. The **verdict** sub-axis is yes / no / uncertain.
- **Reading:** BOTH passes end by emitting MQ2 (a context-need). Cold MQ2 → surfacing-1; warm MQ2 → surfacing-2 is the **same MQ2→runner→surfacing interface reused**. And MQ2's **verdict=no ("no further context needed")** is an **already-existing field** — it is the natural convergence signal for the loop: iterate articulate↔surface until warm MQ2's verdict stabilizes at "no." **HD's termination criterion rides on an existing MQ2 element** — nothing new to invent at the field level.

### R5 — The warm-pass canon doc: what it commits, and how far it already goes (the pressed commitment)
From `docs/how_articulate_via_context_should_be.md` (authored this session):
- §4: the warm pass re-runs **MQ2 (re-anchor) + Rephrase**; Itemize/Deconstruct/MultiDepth carry through. The intro lists the third part as *"[c] optional staged re-surface."*
- §7 ("What the second pass depends on — its ceiling"): *"A second surfacing round is the fuller form … The single-surfacing form (no second round) suffices when the first surfacing already reached the right material; **the staged form is the general case**, for when re-anchoring changes what is relevant."*
- **Reading (partly-already-answered):** the doc is **internally split**. Its §4/intro calls re-surface *optional* ([c]); its §7 calls the staged (re-surface) form **"the general case."** The user's press (promote re-surface to core) is thus **already half-made by the doc's own §7** — the design move is to resolve the §4-vs-§7 tension **toward §7**, lift "general case" into the core definition, and add the termination criterion §7 doesn't yet give.

### R6 — HA thread: implicit in-context understanding vs an explicit committed artifact
- **Implicit (in-session):** post-surfacing, the LLM re-reads the cold considered-articulations *through* the surfaced material — diffuse, uncommitted, but present (R3 workspace-is-in-context). So a warm **re-Rephrase that only restates this is genuinely marginal** in a single warm session — the user is right.
- **Explicit (committed):** an artifact downstream disciplines inherit **identically**. The two-pass design's own rationale for centralizing framing is that otherwise *each downstream discipline re-derives the frame and they drift*; the commit pins it. Value scales with (# downstream consumers · context-fragmentation · session-loss · autonomy) — R3's "workspace lost at session-end" is the mechanism. **HA resolves to: the pure-rephrase commit is weak-but-real, and autonomy-scaled — not zero.**

### R7 — HB thread: THE DECOUPLING (candidate spine)
articulate_warm has two products, and they decouple:
- **(i) re-Rephrase** — only *possible* when the right material is already in context; and when it is, it is **marginal** per HA/R6.
- **(ii) re-anchor via MQ2** — valuable exactly when the cold pass fetched the **wrong** territory T1. But then the LLM holds **T1 material**, so re-anchoring *names* the right territory T2 yet **cannot use it** — re-anchoring is **inert without a re-surface** to actually fetch T2 (R3: surfacing draws from a *given* territory; T2 must be handed in and fetched).
- **Reading:** the **load-bearing** product (re-anchor) **requires** re-surface to be actionable; the product that *doesn't* need re-surface (re-rephrase) is the **weak** one. So re-surface is precisely what makes the strong half work. **HB is the spine, and it directly implies re-surface should be core.**

### R8 — HC thread: the uniform mechanism (confirmed by R1/R4)
Given R1 (surfacing re-invocable with refined-sub-purpose; runner owns it) + R4 (both passes emit MQ2): "articulate_warm re-triggers surfacing" = **runner re-invokes surfacing with warm-MQ2's refined context-need**. Same interface, applied again. And it yields **convergence for free**: iterate articulate↔surface until warm MQ2's context-need **stabilizes** (verdict=no). The better rephrasing is the **byproduct** emitted once the anchor stops moving. **HC confirmed — a reuse, and it hands us the loop shape.**

### R9 — HD thread: termination + cost (half-existing, half-gap)
- **Convergence criterion:** warm MQ2 verdict=no / context-need unchanged from prior round = stop (R4 — existing field). **Round cap** as a backstop (bound the worst case).
- **Cost:** incremental re-surface (R2) + per-invocation self-bounding (R2, §4.5) → each round is cheap; the loop is short because MQ2 stabilizes fast (typically 0–1 re-surfaces: no anchor drift → verdict=no immediately → no re-surface).
- **THE GAP:** the surfacing spec §3.7 says cross-invocation looping is *"the runner's responsibility"* — but **no spec defines the runner's loop-termination rule**. This is the genuinely-missing piece. **HD: the mechanism and the convergence *signal* exist; the loop-termination *criterion* must be specified — that is the design contribution.**

### R10 — HE thread: honest-both-ways + the self-reference datum
- **User largely right:** re-surface should be promoted from optional-[c] to core (R5 §7 already calls it "the general case"; R7 shows it makes the load-bearing half work).
- **But the strong claim overshoots:** "articulate_warm is useless without re-surface" is too strong — the explicit-commit value (R6) is real, just weaker and autonomy-scaled (R3). Re-size, don't cave, don't deflate.
- **★ Self-reference datum (live):** *this very dive* ran `articulate_simple` **cold on the bare question** while the operator (me) held **warm design-context** (the two-pass design, the canon doc). The bundle's own `Edge 1` note flagged the substrate as **warm** and named it "a datum for the inquiry: the operator's warm context is doing framing work." That is the exact phenomenon under study — the warm context re-anchored the framing, which cold-alone could not. Evidence that the warm re-anchor is real, and that operator-priming masks the need (echoing the ordering-problem finding's severity-scales-with-autonomy).

### R11 — Prior art (self-contained)
- The project's own two-pass design already flagged **iterative surfacing rounds / a possible "pass-3"** as *"the natural next direction, not yet committed."* → promoting re-surface to core **extends an already-anticipated direction**, not a novelty.
- The canon doc §7 already **sketches the staged form** `articulate_simple → surfacing → warm → surfacing → downstream`. The design move formalizes what is already drawn.

## KEY CITATIONS (load-bearing)
- surfacing spec §1.1 "re-invocable across invocations"; §3.6 `refined-sub-purpose` + Trace-as-exclusion-filter (incremental); §3.7 "cross-invocation re-invocation is the runner's responsibility"; §4.5 workspace-overload→frontier-flag; §5.2 "workspace … session-local … session-end loses the workspace."
- articulate_simple spec: MQ2 = context-need axis; Mode 5 = MQ2 carries verdict/kinds/stance (verdict = yes/no/uncertain = the convergence signal).
- `docs/how_articulate_via_context_should_be.md` §4 "[c] optional staged re-surface" vs §7 "the staged form is the general case" (the internal §4-vs-§7 tension the user's press resolves).

## Hypothesis map (for Sensemaking)
- **HA (already-in-context):** RESOLVED both ways — re-rephrase-only is marginal in a warm session (user's premise has force), BUT explicit-commit value is real and autonomy/session-loss-scaled (§5.2). Not zero.
- **HB (the decoupling):** the SPINE — re-anchor (load-bearing) requires re-surface to be actionable; re-rephrase (needs no re-surface) is the weak half. ⇒ re-surface makes the strong half work.
- **HC (uniform mechanism):** CONFIRMED by spec — re-invocation with `refined-sub-purpose` exists; runner owns it; both passes emit MQ2. "Re-trigger surfacing" = reuse, not new machinery.
- **HD (termination/cost):** mechanism + convergence-SIGNAL exist (incremental re-surface; MQ2 verdict=no); the loop-TERMINATION criterion is the genuine GAP to specify (+ round cap).
- **HE (honest verdict):** user largely right (promote to core; §7 already agrees); "useless without re-surface" overshoots (commit-value real, autonomy-scaled). Self-reference datum live (this dive's cold-articulate + warm-operator).
- **Partly-already-answered:** the canon doc's §7 already calls staged the "general case" — the press resolves an internal §4-vs-§7 tension, it doesn't fight the doc.

## Thin artifact (trace + state summary)
- **Trace:** R1 surfacing-reinvocation-spec [core/HIGH] · R2 incremental-resurface+cost [core/HIGH] · R3 draw-from-given+session-local-workspace [core/HIGH] · R4 MQ2-interface+verdict-axis [core/HIGH] · R5 canon-doc §4-vs-§7 [core/HIGH] · R6 HA implicit-vs-explicit [core/HIGH] · R7 HB decoupling [core/HIGH] · R8 HC uniform-mechanism [core/HIGH] · R9 HD termination-gap [core/HIGH] · R10 HE honest+self-ref [sub/HIGH] · R11 prior-art [sub/MED].
- **Coverage map:** surfacing spec = confirmed (re-invocation contract fully surfaced); articulate_simple MQ2 = confirmed; canon doc §4/§7 = confirmed; design threads HA-HE = candidate-generated + spec-grounded.
- **Confirmed-absent:** no spec defines a cross-invocation LOOP-TERMINATION criterion (the gap).
- **Concept-names:** refined-sub-purpose · runner-owns-reinvocation · incremental-resurface · MQ2-verdict-axis-as-convergence-signal · workspace-session-local · §4-vs-§7-tension · the-decoupling · uniform-mechanism.
- **Frontier:** the loop-termination criterion (→ Innovation/Critique); does re-anchoring at the warm pass risk an over-eager re-surface loop (→ Critique)?

## Telemetry + verdict
Mode artifact+possibility; entry signal-first; 11 regions; tags core-dominant; boundary-discovery not fired; workspace-overload not triggered; failure modes checked (no territory-mis-binding; draw-from-given respected). **The guard bit BOTH ways:** HC/HD *strengthened* by the spec (mechanism exists) — anti-deflation; the strong "useless without re-surface" *resized* down and the §7-already-agrees found — anti-inflation of the user's press. **Verdict: PROCEED** → Sensemaking (stabilize HB as the spine + the uniform-mechanism + the termination-criterion gap + the honest §4→§7 promotion).
