# Sensemaking — Unflagged routine-command generation tendencies

## User Input

`devdocs/inquiries/2026-05-29_17-39__unflagged_command_generation_tendencies/_branch.md` — what strict, meta-level list of tendencies should an LLM have *during routine command creation* (`mkdir`/`cd`/`ls`/…) so its commands come out auto-approvable rather than flagged, framed generally enough to outlast the specific offenders already seen.

---

## SV1 — Baseline Understanding

The model keeps emitting compound shell commands containing `echo`, `$(…)`, `awk`, `cd`-chains that trip human-approval prompts. We want a list of rules that makes it write clean commands instead.

---

## Phase 1 — Cognitive Anchor Extraction

**Constraints**
- **C1** — The deliverable is a *tendency applied at command-creation time* (a generative disposition while composing), NOT a post-hoc audit checklist. (User: "tendency **during** command creation".)
- **C2** — Must be META / principled: generalize beyond the known offenders (`echo`, `$()`) to catch `awk`/`sort`/`cd`/pipes and future idioms.
- **C3** — Must be a LIST, framed as strict rules.
- **C4** — Must NOT forbid legitimate shell data-processing on genuinely large inputs (negative spec from Goal).
- **C5** — The permission system is exogenous and fixed; we cannot change *how* it flags, only *what the agent generates*.

**Key Insights**
- **KI1** — `echo`/`$()` are not "dangerous"; they are *symptoms*. The disease is the agent compressing **read → reason → act** into one shell incantation (the user's "low-duration reasoning tendency").
- **KI2** — Compound-command approval is **AND over parts** ⇒ a compound's safety is the **MIN** over its parts, not the average. Bundling a safe `ls` with an unsafe `awk`/`echo`/`$()` poisons the *whole* line. Corollary: **fewer things per command ⇒ monotonically safer.**
- **KI3** — The three misuse categories — presentation (`echo`), sequencing (`&&`/`;`/`cd`), compute (`awk`/`sort`/`$()`) — all reduce to ONE error: asking the shell to do something that is not a filesystem mutation/inspection.
- **KI4** — The harness ALREADY states this principle: the Bash-tool description says "Avoid … `cat`, `head`, `tail`, `sed`, `awk`, or `echo` … use the appropriate dedicated tool" and "prefer absolute paths — `cd` in a compound command can trigger a permission prompt." The fix makes a latent directive **salient and strict**, it doesn't invent one. *(External grounding — counters self-reference blindness.)*
- **KI5** — Allowlisting-as-you-go is a symptom-trail, not a cure: `settings.local.json` holds ~50 hyper-specific one-off rules (`echo "exit code: $?"`, `awk '$0 >= "2026-05-28_20-35"'`) that essentially never re-match; only the plain-verb wildcards (`git *`, `bash *`, `mkdir -p …`, `mv …`) generalize.
- **KI6** — A pure prohibition fails: the model has a real underlying need (to label, to sequence, to filter). The rule must pair each prohibition with a **positive substitute**, or the model routes around it with the next idiom.

**Structural Points**
- **SP1** — Two-layer deliverable: (a) ONE root principle; (b) a short ordered set of strict generative rules, each with its positive substitute.
- **SP2** — Rule set maps onto the misuse taxonomy: presentation→reply text; sequencing→separate calls + absolute paths; compute→plain read then reason (or dedicated tool); dynamic value→standalone command, reuse literal.
- **SP3** — A compose-time **reach check**: before composing a shell command ask "is this purely a filesystem action?" If any fragment isn't, that fragment belongs elsewhere.

**Foundational Principles**
- **FP1** — Shell = the agent's *hands/eyes for the filesystem*; the agent's *cognition* (saying, deciding, sequencing, computing) stays in the agent.
- **FP2** — Prefer the dedicated tool over its shell equivalent: Read>`cat`, Glob>`find -name`, Grep>`grep`, Write>`echo >file`/`mkdir`.
- **FP3** — Asymmetry: cost of a flagged command (interrupt human, break flow) ≫ cost saved by batching. Optimize for auto-approvability, NOT for fewest tool calls.

**Meaning-Nodes**
- **MN1** — "command-creation tendency": disposition applied *while composing*, not a lint pass after.
- **MN2** — "auto-approvable": matches an allowlist prefix as a single plain verb on literal args.
- **MN3** — "low-duration reasoning" (user's term): fusing steps to skip intermediate reasoning turns.

*Meta-inspection (post-SV2): H4 (concept names) — "tendency," "misuse categories," "P-root" each name a real structural distinction (compose-time vs audit; the three approval-breakers; shell-vs-cognition), not decoration. H5 (motivating examples) — the three flagged commands are EXAMPLES of a wider pattern, not the whole problem (addressed in A4).*

### SV2 — Anchor-Informed Understanding

The problem is not "bad commands"; it is a generative disposition that fuses say+sequence+compute+act into shell one-liners and asks the shell to do non-filesystem work. The fix is a root principle + per-misuse positive substitutes, applied at compose time — and it amplifies a directive the harness already states.

---

## Phase 2 — Perspective Checking

- **Technical/Logical** — The matcher works on command prefixes; `$()`, pipes into Turing-complete tools (`awk`/`sed`/`perl`), and any unlisted verb each *independently* break auto-approval; compound = AND. ⇒ the technically-minimal auto-approvable command is **one allowlisted verb on literal args**. Confirms KI2.
- **Human/User** — Pain is twofold: the interrupt (flow break) AND the deeper worry that the model under-reasons. Wants a *tendency*, as a short strict list, meta enough to generalize; explicitly rejects a token blocklist.
- **Strategic/Long-term** — A principle outlasts offenders and model versions; a blocklist rots. Placement matters: the habit is cross-cutting (it appeared in spontaneous repo inspection, not just MVLw steps), so a **global** rule has more leverage than an MVLw-only rule. *(frontier)*
- **Risk/Failure** — (i) Too absolute ⇒ forbids legitimate large-data shell work → need the large-data exception (C4). (ii) Too vague ("be careful") ⇒ changes nothing → must be concrete. (iii) Installed in MVLw only ⇒ under-covers the global habit.
- **Resource/Feasibility** — Must be applicable at compose-time with zero extra tooling. Feasible as a 4-question reflex: "filesystem action? one verb? literal args (no `$()`)? does a dedicated tool exist?"
- **Definitional/Internal consistency** — Contradicts the harness's own guidance? No — amplifies it. Contradicts MVLw rule 8 (run skills as cannon, consume context)? No — orthogonal. Consistent.
- **Definitional/Frame-exit completeness** — Gating predicate: does the inquiry's own committed structure inherit multi-value terms used across ≥2 distinct propositions? No — this is a fresh design inquiry with no inherited taxonomy used across multiple levels. **Gating does NOT fire; perspective skipped** (justified, not omitted).
- **Phase/Calibration-State** — Does any rule depend on project calibration? Only the large-data exception leans on a judgment of "small enough to read+reason." Early-stage default: bias to plain-read+reason for anything plausibly eyeball-able (tens of items); reserve shell filtering for genuinely large output. Not contingent on an unreached phase.

*Self-reference (H8): subject = the agent's own behavior. Mitigated by grounding in three external referents — the harness Bash-tool directive, the empirical allowlist-bloat in `settings.local.json`, and the three concrete flagged commands — rather than introspection.*

### SV3 — Multi-Perspective Understanding

The answer is: a root principle + a short strict rule list with positive substitutes + an explicit large-data exception + a placement note (global ≥ MVLw-only). The technically-minimal auto-approvable unit is one allowlisted verb on literal args; optimize for that, not for batching.

---

## Phase 3 — Ambiguity Collapse

#### Ambiguity A1 — Does "routine commands like mkdir/cd/ls" scope the rule to housekeeping verbs only, or to all shell use?
**Strongest counter-interpretation:** The user only wants housekeeping verbs cleaned, leaving data-processing alone.
**Why it fails (structural):** The flagged set includes `ls | sort | awk` (data-processing), which the user called "silly," and the request is explicitly for the "correct way to approach routine command creation" at a META level. "like mkdir/cd/ls" uses "like" = illustrative, not bounding. The misuse pattern (compute-in-shell) appears in the very command flagged.
**Confidence:** HIGH.
**Resolution:** Scope = ALL routine shell-command generation; mkdir/cd/ls are examples. **Fixed:** scope. **No longer allowed:** scoping to housekeeping verbs only.

#### Ambiguity A2 — Is "tendency" the right concept, vs a "checklist"? (load-bearing concept test, user-language)
**Counter:** A post-hoc audit checklist is what's wanted.
**Why it fails (structural):** User said "tendency **during** command creation" — generative, compose-time. A post-hoc checklist catches the malformed command *after* composing (costs a redo + still a prompt if executed); a compose-time tendency prevents it from being formed. The phrasing fixes this.
**Confidence:** HIGH.
**Resolution:** Deliverable is a compose-time disposition, phrased as generative defaults ("reach for X first"), not audit gates ("check that…"). **Fixed:** generative framing.

#### Ambiguity A3 — Is "shell = filesystem actions only" (P-root) the project's real principle or an arbitrary external import? (load-bearing concept test, domain-property-vs-external-default)
**Counter:** The shell is legitimately a general compute tool; restricting it to filesystem actions is an arbitrary imported rule.
**Why it fails (structural):** Grounded in the harness's OWN Bash-tool directive (avoid `cat/sed/awk/echo`, use the dedicated tool; prefer absolute paths; `cd`-in-compound prompts) and in the *existence* of dedicated tools (Read/Glob/Grep/Write) built precisely to absorb non-mutation uses. The tool surface is designed around this split; the principle is the design intent, not an import.
**Confidence:** HIGH *(externally grounded — direct counter to self-reference blindness).*
**Resolution:** P-root is legitimate and load-bearing. **Fixed:** root principle stands.

#### Ambiguity A4 — Are the three flagged commands the whole problem, or examples of a wider pattern? (specific-vs-pattern)
**Counter:** Fixing exactly `echo` + `$()` + `awk`-chains suffices.
**Why it fails (structural):** The user explicitly asked for a "more robust solution" and rejected the narrow draft. A token blocklist is routed around by the next idiom (`python -c`, `find -exec`, process substitution `<()`, `xargs`). The wider invariant — "non-filesystem work / fused steps in the shell" — is the only thing that catches an unbounded offender set.
**Confidence:** HIGH.
**Resolution:** Target the PATTERN; examples illustrate. **Fixed:** principle-first deliverable. **No longer allowed:** token-blocklist as the solution.

#### Ambiguity A5 — Does "auto-approvable" mean zero prompts, or fewer-and-meaningful prompts?
**Counter:** Zero prompts (allowlist everything / always "don't ask again").
**Why it fails (structural):** That path produced the bloated, non-generalizing allowlist (KI5) and defeats the gate's safety purpose. Prompts exist to gate the statically-unprovable; the fix is to make routine commands *provably-simple-shaped* so they pass intrinsically, while genuinely consequential commands still surface.
**Confidence:** HIGH.
**Resolution:** Goal = routine commands are intrinsically auto-approvable via shape; allowlisting is NOT the mechanism. **Fixed:** command-shape, not suppression, is the lever.

### SV4 — Clarified Understanding

Clear: the deliverable is a principle-first, compose-time disposition spanning all shell use, grounded in harness design, with a positive substitute per misuse and one large-data exception. No longer viable: token blocklist, allowlisting-as-cure, post-hoc-checklist framing, absolute ban on shell compute.

---

## Phase 4 — Degrees-of-Freedom Reduction

**Fixed variables**
- Deliverable form: 1 root principle + short ordered list of strict generative rules, each with a positive substitute.
- Scope: all routine shell-command generation.
- Grounding: harness Bash-tool directive + allowlist-bloat evidence.
- Exception: genuinely large data → shell filtering legitimate; then allowlist the specific tool.

**Eliminated**
- Token blocklist as *the* solution; allowlisting-as-fix; post-hoc-checklist framing; absolute prohibition on shell compute.

**Remaining viable (for Decomposition → Innovation → Critique)**
- Exact number, wording, and ordering of the rules.
- The precise compose-time reflex (the reach-check question[s]).
- Placement: global `CLAUDE.md` vs MVLw rule vs both (semi-separable sub-question).
- Where the large-data threshold sits.

### SV5 — Constrained Understanding

Solution space is now: produce the specific rule list + the compose-time reflex within the fixed structure (principle → rules+substitutes → exception → placement note). Innovation works inside this frame, not on the frame.

---

## Phase 5 — Conceptual Stabilization

*Accommodation-trigger check: perspectives converged (technical minimal-unit, risk large-data exception, strategic placement all reinforced one principle); the model settled rather than requiring repeated patching ⇒ not premature, not model-misfit. Stable.*

### SV6 — Stabilized Model

The problem is **not** "the model emits a few dangerous tokens." It is a **generative disposition** in which the agent fuses *say + sequence + compute + act* into a single shell incantation and asks the shell to do work that is not filesystem mutation/inspection. Because the permission system approves a compound command only when *every* part is independently allowlisted (**safety = MIN over parts**), any non-filesystem fragment — an `echo` label, a `$()` value, an `awk` filter, a `cd` hop — drags an otherwise-trivial line into human approval.

The robust fix is therefore a single **root principle** —

> **The shell is the agent's hands for touching the filesystem. Everything the agent wants to *say*, *decide*, *sequence*, or *compute* stays in the agent: in reply text, in separate reasoning, or in a dedicated tool.**

— operationalized as a **compose-time reflex** plus a short list of **strict generative rules, each pairing a prohibition with its positive substitute**, plus **one explicit exception** for genuinely large data (where shell filtering is legitimate and the specific tool should be allowlisted). This generalizes to unseen offenders, is grounded in the harness's own tool guidance (not an arbitrary import), and treats allowlisting-as-you-go as a symptom-trail rather than a cure.

**Difference from SV1:** SV1 = "stop emitting `echo`/`$()`." SV6 = "install a generative disposition, derived from one root principle, that keeps all non-filesystem work out of the shell and pairs every prohibition with where the work goes instead."

---

## Saturation Telemetry
- **Perspective saturation:** reached — last perspectives (definitional, phase/calibration) confirmed rather than introduced new anchor types.
- **Ambiguity resolution ratio:** 5/5 resolved at HIGH confidence; 0 open (placement + large-data-threshold deferred to Decomposition/Critique as *design choices*, not unresolved ambiguities).
- **SV delta:** large — SV1 (token-fix) → SV6 (generative disposition from a root principle).
- **Anchor diversity:** 5 constraints, 6 insights, 3 structural points, 3 principles, 3 meaning-nodes across 8 perspectives. Multi-type, multi-perspective.
