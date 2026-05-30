# Innovation — Unflagged routine-command generation tendencies

## User Input

`devdocs/inquiries/2026-05-29_17-39__unflagged_command_generation_tendencies/_branch.md`

## Seed + Methodology Mode

**Seed (from Decomposition):** the live design questions — Q1 (does the root principle close the offender set *by construction*?), Q3 (the rule wording), Q2 (the compose-time reflex). Seed type: **Gap** + **Dissatisfaction** ("a token blocklist isn't robust enough").

- **Inherited mode:** Standard default (elaborate the fixed structure: principle + reflex + rules+substitutes + exception + placement).
- **Alternative mode named:** Contrarian-rethink (Framer-weighted).
- **What follows under the alternative:** the candidate space would interrogate whether a *prose list of rules* is the right intervention at all (vs. a single principle, vs. mechanical enforcement via allowlist/hook) and whether "list" invites the very blocklist-thinking we're trying to escape.
- **Decision:** Standard default, with one contrarian frame-challenge injected (forced by the Inherited Frame Audit below). `Methodology-mode: Standard-default + contrarian-injection; reason: user wants a strict list AND the most robust lever — both must be on the table.`

---

## Phase 2 — Generate (7 mechanisms × generic / focused / contrarian)

### Generators

**Combination (G)**
- *generic:* command-creation + Unix philosophy ("do one thing well") → one command = one job.
- *focused:* "shell = hands" + "reply = mouth" + "reasoning = mind" + "dedicated tools = specialized organs" → a **routing model**: each intent goes to its organ; the shell-hand only touches files.
- *contrarian:* allowlist-bloat evidence + command-creation → emit commands shaped like the allowlist's **generalizing** entries (`git *`, `mkdir -p …`, plain verb + literal/`*`), never like its ~50 one-off `echo/awk/$()` entries. *Let the allowlist's own shape teach the target shape.*

**Absence Recognition (G)** *(patch + redesign, bidirectional)*
- *patch:* each prohibition lacks a stated positive substitute (the "where does it go instead?").
- *redesign (missing):* if designed from scratch, the agent would carry an explicit **intent→destination routing table**; that table is absent and treated as tacit.
- *redesign (already-present-in-different-form):* the harness's Bash-tool description ALREADY states this ("avoid cat/sed/awk/echo… use the dedicated tool"; "prefer absolute paths — cd in a compound command can trigger a prompt"). We are treating as absent something present in **narrative** form → the intervention is to make the latent directive **strict + salient**, not to invent.

**Domain Transfer (G)** *(native + different)*
- *native (computing):* **typed effects / principle of least privilege / pure-vs-effectful** — a shell call is an *effect*; keep effects minimal and free of cognition. Separation of concerns.
- *different (surgery):* the scalpel only cuts tissue; the surgeon's *planning and narration* happen in notes/speech, never via the scalpel.
- *contrarian (aviation):* callouts (speech channel) and control inputs (action channel) are deliberately separate channels; mixing them is an error class. → presentation and action are separate channels.

**Extrapolation (G)**
- *generic:* if models trend more "agentic/batch-y," compound one-liners worsen → only a **principle** survives; a per-idiom patch rots immediately.
- *focused:* if "don't ask again" continues, the allowlist bloats unboundedly → confirms allowlisting is not the cure; **shape** is.
- *contrarian:* as dedicated tools proliferate, the shell's *legitimate* surface shrinks → "prefer the dedicated tool" strengthens over time; betting on it is future-safe.

### Framers

**Lens Shifting (F)**
- *generic:* frame command-creation as "writing for the permission matcher as the audience."
- *focused:* frame the shell as a **typed effector whose only type is filesystem-mutation**; a non-filesystem fragment is a *type error* caught at compose time.
- *contrarian:* shift to the matcher's actual question — not "is this safe?" but **"can I PROVE this safe statically?"** `$()` and Turing-complete tools (`awk`) are unprovable *by nature* ⇒ the tendency is "emit only the statically-provable."

**Constraint Manipulation (F)** *(ADD + REMOVE, both mandatory)*
- *ADD:* "every command must auto-approve **without adding a new allowlist entry**" → forces plain-verb + literal-args shape. (A crisp compose-time test.)
- *ADD:* "one command = one verb" → kills `&&`/`;` chaining and `cd`-hops.
- *REMOVE:* drop the self-imposed constraint **"minimize tool calls / round-trips."** Without that pressure, the agent freely splits work into many simple auto-approving commands. *This removal targets the root enabler — the batching urge.*

**Inversion (F)** *(depth-checked, multi-axis)*
- *L1 (component):* "avoid bad commands" → "emit only provably-trivial commands."
- *L2 (system):* "the shell does the work" → **"the shell does NOTHING but touch files; the agent does the work."**
- *existence-axis:* "how many shell ops per task?" could be **ZERO** → **default-to-no-shell**: reach for a dedicated tool first (Write instead of `mkdir`+`echo`); the shell is the *last* resort, not the first reach.

---

## Inherited Frame Audit

**Seed central assumption:** "the fix is a prose **list of strict rules** installed in the spec." Type: Design-choice + Belief.

**Challenge scan:** Does any candidate challenge it? Yes — Inversion (existence-axis) challenges "shell-first"; but the *list-vs-principle* and *prose-vs-mechanical* axes need explicit challenge. Firing → orchestrate:
- **Belief → Inversion (system):** "a *list* is the robust form" → inverted: **"a list invites blocklist-thinking; a single root principle + a reach-reflex closes the offender set by construction, and the 'list' is just the principle's routing table, not an enumeration of banned tokens."** This directly answers Decomposition's central Q3→Q2 coupling risk: the principle (Q1) closes the set; the list (Q3) is derived illustration, not the safety mechanism.
- **Design-choice → Absence redesign:** "prose is the only lever" → **non-prose alternatives exist**: (a) allowlist safe shapes; (b) a hook that blocks/rewrites compound commands. Resolution: prose-tendency is the right lever for a *disposition* (changes generation); mechanical enforcement (hook) is a *complementary, separate* lever (changes execution). Per Sensemaking A5, allowlisting-as-cure is rejected; the hook is recorded as an out-of-scope complementary option, not the primary answer.

Audit no longer fires after augmentation (both the shell-first belief and the list/prose design-choice now have explicit challenges). Proceed to Test.

---

## Phase 3 — Test (5-test cycle on survivors)

**S1 — "Shell does nothing but touch files; cognition stays in the agent" (root principle; from Inversion-L2 + Domain typed-effects + Lens typed-effector)**
- Novelty: reframes from "avoid tokens" to "shell is a typed effector." Genuinely new framing for this project's specs. ✓
- Scrutiny: strongest objection — "sometimes shell compute is necessary." Survives via the large-data exception (bounded, explicit). ✓
- Fertility: generates the routing table, the reflex, the anti-batching clause. ✓
- Actionability: directly installable as a one-line principle. ✓
- Mechanism independence: reached by Inversion, Domain Transfer, AND Lens Shifting independently. **Robust.** ✓ → **ACTIONABLE**

**S2 — "Default to no-shell; the shell is the last resort, reached only for a genuine filesystem mutation" (from Inversion existence-axis)**
- Novelty: inverts the default reach. ✓ Scrutiny: "but mkdir/ls are fine!" — yes; the rule isn't "never shell," it's "don't reach for it *first* for things a tool/reply handles." Survives. ✓ Fertility: pairs with Write-creates-dirs. ✓ Actionability: ✓ Mechanism independence: Inversion + Absence(redesign) + Extrapolation(prefer-tool). ✓ → **ACTIONABLE**

**S3 — "No-new-allowlist-entry test: a command you'd have to click 'don't ask again' for is malformed; reshape it" (from Constraint ADD)**
- Novelty: turns the *symptom* (the prompt) into a **compose-time signal**. ✓ Scrutiny: "what about legitimately new safe commands?" — those are rare for *routine* work and become plain-verb wildcards, not one-offs. Survives. ✓ Fertility: gives the agent a self-check with zero tooling. ✓ Actionability: high — it's a single felt question. ✓ Mechanism independence: Constraint + Combination(allowlist-shape) + Lens(provability). ✓ → **ACTIONABLE**

**S4 — "Cancel the batching/efficiency instinct: more small auto-approving commands beat one compound command; a flagged command costs far more than a saved round-trip" (from Constraint REMOVE + user's 'low-duration reasoning')**
- Novelty: names and *cancels* the root driver explicitly rather than treating symptoms. ✓ Scrutiny: "isn't batching good practice?" — generally yes, but here the asymmetry (FP3) inverts it: an interrupt ≫ a round-trip. Survives on the asymmetry. ✓ Fertility: explains *why* all three misuses happen (one root urge). ✓ Actionability: ✓ Mechanism independence: Constraint-REMOVE + Extrapolation. Mostly two-mechanism → slightly less robust, but load-bearing because it's the **cause**. ✓ → **ACTIONABLE** (flagged: this is the one the user themselves pointed at — "low-duration reasoning").

**S5 — "The 'list' is a routing table (intent → home), not a token blocklist" (from Inherited Frame Audit + Combination routing-model + Absence routing-table)**
- Novelty: reframes the deliverable form. ✓ Scrutiny: "user asked for a list" — satisfied: a routing table *is* a strict list, but one closed by construction (anything-not-filesystem → routed out), so it generalizes to unseen idioms. Survives + satisfies user. ✓ Fertility: each row = a prohibition+substitute pair. ✓ Actionability: ✓ Mechanism independence: Audit-Inversion + Combination + Absence. ✓ → **ACTIONABLE**

**Killed / deferred:**
- "Mechanical enforcement via a hook that rewrites compound commands" → **RESEARCH FRONTIER / out-of-scope** (different lever — execution-time, not generation-time; complementary; the user asked for a *tendency*).
- "Allowlist the safe shapes" → **killed** as the *primary* answer (Sensemaking A5: symptom-trail, non-generalizing). Retained only as the large-data-exception's tail ("then allowlist the specific tool").

---

## Assembly Check

Combining survivors yields emergent architecture none has alone — a **single reach-reflex with a default-to-not-shell**, expressible as the strict list the user asked for:

> **Root principle (S1):** The shell is your hands for touching the filesystem. Everything you want to *say, decide, sequence, or compute* stays in you — your reply, your reasoning, or a dedicated tool.
>
> **The reach-reflex, at command-creation time (S2 + S3):** Before composing a shell command, route the intent: *saying* → reply text; *deciding/computing/filtering* → reason over a plain read, or a dedicated tool; *reading/editing files* → Read/Glob/Grep/Write (Write makes parent dirs — so often no `mkdir`). Only a **genuine filesystem mutation** reaches the shell — as **one plain verb on literal arguments** that needs **no new allowlist entry** (the no-new-entry test).
>
> **The routing table = the strict list (S5)** — each row a prohibition paired with its home:
> | Don't put in the shell | Because it's… | Put it here instead |
> |---|---|---|
> | `echo`/status/labels | presentation | your reply text |
> | `&&` / `;` chains, `cd`-then-act | sequencing | separate tool calls; absolute paths |
> | `awk`/`sort`/`grep`-to-filter, `$(…)` | computation | plain `ls`/read, then reason; or a dedicated tool |
> | `$(date …)` in a path | a value that doesn't exist yet | standalone `date`, reuse the literal |
>
> **Anti-batching clause (S4):** Prefer many small auto-approving commands over one compound line. A flagged command (interrupting the human) costs far more than a saved round-trip. *(This cancels the root urge.)*
>
> **Exception:** genuinely large data that you cannot read-and-reason over → shell filtering (`awk`/`sort`) is legitimate; then allowlist that specific tool.

The assembly closes Decomposition's hidden-coupling risk: the **principle closes the offender set by construction** (anything-not-a-filesystem-mutation is routed out *before* it reaches the shell), so the table needn't enumerate every future idiom (`python -c`, `find -exec`, `<()`) — they're all caught by "is this a filesystem mutation? no → it has a home elsewhere."

---

## Mechanism Coverage (Telemetry)

- Generators applied: **4/4** (Combination, Absence, Domain Transfer, Extrapolation)
- Framers applied: **3/3** (Lens Shifting, Constraint Manipulation, Inversion)
- Convergence: **YES** — ≥5 mechanisms (Inversion, Domain, Lens, Constraint, Combination) converge on one core: *shell = minimal filesystem effector; default-to-not-shell; cognition routed elsewhere.* High confidence.
- Survivors tested: 5/5 via 5-test cycle; 2 candidates killed/deferred with reasons.
- Inherited Frame Audit: **fired** (seed assumed "prose list"); orchestrated Inversion + Absence-redesign; both frame-axes now challenged; resolved (list = routing table closed by construction; hook = out-of-scope complementary lever).
- Failure modes observed: none (generation/testing separated; 7 mechanisms; frame-lock avoided via audit; survival-bias countered — the uncomfortable "default-to-no-shell" and "cancel batching" candidates were generated and survived).
- **Overall: PROCEED.**
