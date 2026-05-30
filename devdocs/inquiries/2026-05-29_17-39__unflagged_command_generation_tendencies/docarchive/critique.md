# Critique — Unflagged routine-command generation tendencies

## User Input

`devdocs/inquiries/2026-05-29_17-39__unflagged_command_generation_tendencies/_branch.md`

Candidates (from Innovation assembly): **S1** root principle · **S2** default-to-no-shell · **S3** no-new-allowlist-entry test · **S4** cancel-batching-instinct · **S5** list-is-a-routing-table · **ASM** the assembled whole.

---

## (a) Dimensions + Weights

| Dim | Asks | Extracted from | Weight |
|---|---|---|---|
| **D1 Closure/generalization** | Does it close the offender set *by construction* (catch unseen idioms), not enumerate tokens? | Sensemaking A4, KI3; Decomposition central risk | **CRITICAL** |
| **D2 Compose-time actionability** | Applicable *while composing*, no tooling, as a reflex? | C1, MN1 | **CRITICAL** |
| **D3 Correctness** | Does it actually yield auto-approvable commands (matches the flag mechanism)? | KI2 (AND-over-parts), R1 | **CRITICAL** |
| **D4 Coherence** | Fits harness Bash-tool guidance + MVLw + doesn't contradict existing rules? | KI4, C5 | HIGH |
| **D5 Non-over-restriction** | Doesn't forbid legitimate large-data shell work — and doesn't discourage good plain `mkdir`/`ls`/`mv`? | C4; **user's explicit "i want mkdir ls to be used"** | HIGH |
| **D6 Parsimony** | Short enough to hold as a tendency; not over-engineered? | Elegance principle; user wants "a list" | MEDIUM |
| **D7 Install-fit** (project-specific risk) | Lands cleanly as a spec rule; fits project's strict-rule culture; no bloat | Project artifact/operation involvement | MEDIUM |

Stakes: spec rule → reversible, moderate scope → *innocent until proven guilty*, EXCEPT D1 (the user's explicit "more robust" demand raises the burden on closure).

## (b) Fitness Landscape

- **Viable region:** principle that closes-by-construction + compose-time reflex + short routing-table list + bounded anti-batching clause. High on D1/D2/D3.
- **Dead region:** token blocklist (fails D1); allowlisting-as-cure (fails D1, D3 — symptom-trail per KI5); "be careful with commands" (fails D2, D3).
- **Boundary region:** list-only without the closing principle (satisfies user's "list" + D2, weak on D1); "default-to-no-shell" wording (strong on D1 intent, but trips D5 — risks discouraging the mkdir/ls the user wants).
- **Unexplored:** mechanical enforcement (hook) — out-of-scope (execution-time lever, not a tendency); exact placement (global vs MVLw) — a deployment choice, not a viability gap.

## (c) Candidate Verdicts (prosecution → defense → collision)

### S1 — Root principle ("shell = hands for the filesystem; cognition stays in the agent")
- **Prosecution:** too abstract to act on in the moment; a principle doesn't tell the model what to *do* with the `echo` it's about to write. *User-perspective objection:* user asked for a strict **list**, not a philosophy. *Spec-gap probe:* how is "is this a filesystem action?" determined at runtime?
- **Defense:** it is the **closure mechanism** (D1, critical) — the only thing that generalizes to unseen idioms; grounded in the harness's own Bash-tool directive (D4).
- **Collision:** necessary but insufficient alone — needs the reflex (S3) + table (S5) to become actionable. **Verdict: SURVIVE** (as the foundation; caveat: not actionable in isolation — must ship with the reflex+table that operationalize it).

### S2 — "Default to no-shell; the shell is the last resort"
- **Prosecution:** **lands a real hit.** "Default to no-shell / last resort" over-corrects and collides head-on with the user's explicit wish — *"i want mkdir ls to be used."* *Failure-case scenario:* the agent needs a quick `ls` and instead avoids the shell or routes awkwardly; D5 violated. The flagging was never caused by `mkdir`/`ls` (those auto-approve) — it was `echo`/`$()`/`awk`/chains.
- **Defense:** the existence-axis insight is real — the `echo + mkdir + $(date)` line would never form if Write were reached for first.
- **Collision:** prosecution wins on **wording**. The defensible content is "*when a dedicated tool fits the job, prefer it (Write makes dirs → often no `mkdir`+`echo` dance); otherwise a plain shell verb is exactly right*" — NOT "avoid the shell." **Verdict: REFINE** → restate so it (i) blesses `mkdir`/`ls`/`mv`/`date` as good shell uses, (ii) targets only the *non-filesystem* reach. Direction folded into ASM.

### S3 — No-new-allowlist-entry test
- **Prosecution:** requires knowing the allowlist; the model can't always read `settings.json`. *Spec-gap:* how does it know an entry would be needed? Also borders on a post-hoc *check* vs a compose-time *tendency* (C1).
- **Defense:** the most concrete self-check; turns the symptom (the prompt) into a felt compose-time signal; needs no settings access if phrased as a **shape** heuristic.
- **Collision:** prosecution's "needs allowlist access" is answered by reframing as a **shape test** — *"one plain verb on literal args, no `$()`/pipe/chain?"* — which the model can evaluate directly. Survives reframed. **Verdict: SURVIVE** (caveat: phrase as a shape-test, not a literal allowlist lookup).

### S4 — Cancel-the-batching-instinct
- **Prosecution:** contradicts the general good practice that batching reduces round-trips; risk of absurd over-splitting; it's a negative ("don't").
- **Defense:** names the **root cause** — the user's own diagnosis ("low-duration reasoning tendency"). Without it the other rules treat only symptoms. The asymmetry (a HIL interrupt ≫ a saved round-trip; FP3) justifies the inversion of normal batching advice *in this context*.
- **Collision:** survives — load-bearing as the causal layer; asymmetry is sound. **Verdict: SURVIVE** (caveat: scope to "don't *fuse* multiple jobs / non-filesystem work into one command" — NOT "never use `&&`"; e.g. `mkdir -p a/b/c` is one job and fine).

### S5 — The "list" is a routing table, not a blocklist
- **Prosecution:** a 4-row table reading "don't put echo… don't put awk…" *looks* exactly like a blocklist; does it truly close by construction, or just enumerate the same offenders the user rejected?
- **Defense:** the left column is *illustrative*; closure comes from S1 (the principle) plus the organizing question "is this a filesystem action?"; the load-bearing column is the **substitute** (where the work goes).
- **Collision:** prosecution exposes a genuine condition — the table closes by construction **only if** explicitly tied to S1 and framed as "examples of non-filesystem work, all of which route out," with an explicit closure line. **Verdict: SURVIVE** (conditional: must be presented as derived-from-S1 with the "anything-not-filesystem → routed out" line; never as a standalone banned-token list).

## (d) Phase 3.5 — Assembly Check (ASM evaluated as a candidate)

ASM = S1 principle + S2(refined) tool-preference + S3 shape-test + S4 bounded anti-batching + S5 routing-table + large-data exception.
- **Prosecution:** is it too long to be a "tendency"? User wanted a *strict list*, ideally short (D6).
- **Defense:** complete + closes-by-construction (D1) + actionable (D2) + blesses good shell use (D5) + names the cause (S4) + delivers the list the user asked for (S5).
- **Collision:** strong on all three CRITICAL dims (D1/D2/D3) and on D4/D5; the D6 parsimony concern is real but **manageable by compression** — S2/S3/S4 fold to one line each under the principle. **Verdict: SURVIVE — ranked #1 (terminating answer).** Caveat: ship the compressed form (principle + reflex + short table + one-line anti-batching + exception), not the full essay.

## (e) Coverage Map + Signal

- **Covered:** D1–D7 across all candidates; the frame-challenge (list-vs-principle, prose-vs-hook) was raised and resolved in Innovation; dead regions (blocklist, allowlist-as-cure) confirmed dead.
- **Unexplored (non-blocking):** exact placement (global `CLAUDE.md` vs MVLw step 2 vs both) — a deployment decision, deferred to the user; precise final wording/compression.
- **Signal: TERMINATE** with a clean ranked survivor (ASM, with S2 refined and folded). Convergence criteria met: a SURVIVE with no *critical*-dimension caveats exists (ASM passes D1/D2/D3 cleanly post-fold); landscape stable; no viable unexplored region (hook is a different lever, not a better answer to *this* question).

**Ranked survivors:**
1. **ASM** (compressed) — the full disposition. SURVIVE.
2. **S1** — root principle (the closure engine inside ASM). SURVIVE, foundational.
3. **S5, S3, S4** — SURVIVE as components of ASM (with their caveats).
4. **S2** — REFINE → folded into ASM as "prefer the dedicated tool *when one fits*; plain shell verbs are good."

---

## Convergence Telemetry

- **Dimension coverage:** 7 dimensions (6 default-derived + 1 project-specific risk: D7 install-fit). All discriminated (each produced at least one differentiating verdict).
- **Adversarial strength:** **STRONG** — prosecution landed a real hit (S2 REFINE, driven by the user's explicit "i want mkdir ls used"), and conditioned S5 on fusion-with-S1. Not rubber-stamping (a REFINE + conditional SURVIVEs, not all-SURVIVE).
- **Landscape stability:** STABLE (no new regions emerged during evaluation).
- **Clean SURVIVE exists:** YES (ASM, compressed, post-S2-fold).
- **Failure modes observed:** none. Self-reference collapse (#7) actively mitigated — verdicts grounded in external referents (harness directive, allowlist-bloat, the user's stated wish), not the rule's self-assertion. Rubber-stamping (#2) avoided via the S2 REFINE. Nitpicking (#3) avoided — S2's flaw is critical (D5 + user contradiction), not cosmetic.
- **Output: PROCEED** — the question is answered; a clean terminating survivor exists.
