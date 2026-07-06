---
status: active
model: claude-opus-4-8[1m]
effort: max
---
# Finding: Route Essentiality Tags — One Attributive Axis ("Can the Goal Land Without This Route?")

## Question

In this project, a "route-map" is the list of next-step suggestions that the **routelister** discipline produces at the end of an inquiry — each entry is a typed "route" (a direction the work could take) carrying a few attributes, notably **Priority** (HIGH/MED/LOW — how much the route matters) and **Confidence** (how well-formed the route is).

The user's problem: a route-map often shows ~10 routes all marked mid or high Priority, and they **can't tell which ones are actually *core* to what they're building versus which are *peripheral*** — nor which are needed *now* versus later. They proposed adding tags — "peripheral / essential-immediate / essential" — and asked two things: **does this make sense, and is there a better categorization?**

The goal: a verdict on the proposal plus the best categorization scheme — lightweight, decided in a glance, domain-agnostic, and consistent with routelister's identity (it *describes* routes, it never *picks* one for you).

## Finding Summary

- **Verdict: YES — the instinct is right, and it's measurably right. But the best form is ONE new attribute, not the user's three fused labels.**

- **The new attribute — `essentiality` ∈ {core / supporting / peripheral}** — answers one glance question: **"Can the goal land without this route?"** (core = no; supporting = yes, but weaker/rougher; peripheral = yes, it's off the critical path — optional or exploratory).

- **Why it's not just Priority (the load-bearing point):** Priority is an *overloaded* number. In the real maps it's pushed up or down by several different things at once — how central a route is, but also how big/risky it is and which project-phase it belongs to. So Priority can't be read as "is this core?". Measured proof below.

- **The one-line way to remember it — "loudness vs load-bearing":** Priority measures how *loud* a route is (how much it stands out); essentiality measures how *load-bearing* it is (how much the goal rests on it). The user was trying to read load-bearing off a loudness number.

- **The user's "immediate" half becomes an optional qualifier, not a second axis:** on a core route you may add `· @<goal-phase>` (e.g., `core · @real-money`) when the route's coreness only switches on in a later phase of the goal. A standalone "now/later" tag was rejected — "do it now" is a *decision*, and routelister must only *describe*.

- **It stays clean on routelister's identity:** it's a description of each route's relation to the goal (like Priority already is), it never selects a route, and it asks about the route-versus-goal relationship only — never "route A depends on route B."

- **It costs almost nothing:** one short token per route. Essentiality is *Priority's twin* — it appears wherever Priority does: a **column in the at-a-glance index, beside Priority**, and on the per-route record's attribution line. Adding the index column returns the index to its original 6-column width, but it swaps two *dead* columns (grain, kind — dropped in the prior lean-index redesign for never varying) for one *live* one — so it's the same width, strictly more informative. The design survived adversarial review applied literally to all 13 routes of a real map, with six refinements and no rejections.

## Finding

### Why we are even discussing this

Every time an inquiry finishes, routelister hands the user a route-map: a short list of "here's where you could go next," each route tagged with Priority and Confidence. Over many inquiries the user noticed a recurring frustration — a map with six HIGH and four MED routes tells them *ten things matter*, but not **which of those ten the build actually depends on**, or **which are needed in the current phase versus a future one**. They proposed route tags ("peripheral / essential-immediate / essential") and asked whether that makes sense and whether there's a better scheme. This finding answers both.

### The core diagnosis: Priority is overloaded

The key realization is that Priority is being asked to carry more than one meaning. We measured this directly against twelve real route-maps from another project (`crowboy`). Taking the map the user was almost certainly looking at — it has exactly six HIGH + four MED = **ten mid/high routes** — we assigned each route an essentiality value (by asking "can the goal land without it?") and compared that to its actual Priority:

- **R4 (the funding/escrow-hold route)** is rated **Priority MED** — yet its own justification says *"no money to settle without it."* It is unquestionably **core** (the goal can't land without it), but it was rated MED because it's a *light, low-risk build*. Here Priority is being dragged down by *effort*, hiding the route's coreness. A user scanning Priority would wrongly read R4 as skippable.

- **R10 (the dispute path)** is **Priority MED** but **core** — rated MED because it *"becomes load-bearing the moment real money flows,"* i.e. it's essential but for a *later phase*. Here Priority is being dragged down by *timing*.

- **R7 (the recording pipe)** and **R11 (the real-money delta)** show the same pattern — core to the eventual product but mid Priority because of phase or gating.

Across the 13 routes, roughly **a third** showed this kind of gap between Priority and coreness. That is not two unlucky outliers — it is a systematic effect. Priority fuses at least three different signals: **coreness** (is the goal load-bearing on this?), **pressingness/effort** (is it big, risky, urgent?), and **phase** (is it for now or later?). Because those signals get blended into one HIGH/MED/LOW number, you cannot recover coreness by reading Priority. That is exactly the user's reported pain.

The clean way to say it: **Priority measures how *loud* a route is; the user wants to know how *load-bearing* it is.** Those are different questions, and the route-maps were only ever showing the first.

### The answer: one attribute, `essentiality`

Add a third descriptive attribute to each route, beside Priority and Confidence:

> **Essentiality — one glance, one question: "Can the goal land without this route?"**
> - **core** — *no.* The goal fails or is incomplete without it. (It is on the critical path to the goal.)
> - **supporting** — *yes, but weaker.* It helps; the goal still lands without it, just rougher. (It has slack.)
> - **peripheral** — *yes.* It is off the critical path — optional, exploratory, or a nice-to-have.

This is the same kind of one-glance, domain-agnostic judgment the project already uses elsewhere (the existing low/mid/high "vitality" rating on understanding-gaps works the same way), so it adds no new analysis step — the author already perceives a route's coreness when writing its justification.

**Why one axis and not the user's three labels.** The user's "peripheral / essential-immediate / essential" actually mixes *two* different questions into one list: coreness (peripheral ↔ essential) and timing (immediate ↔ later). "Essential-immediate" is the fusion point. Splitting them apart is cleaner, and it also recovers a middle value — **supporting** — that the user's near-binary scheme had no room for but the real data needs (one route, the money-state-machine, is genuinely "helps but not core").

The user's labels map onto the new scheme like this:

| User's proposed label | New scheme | Why |
|---|---|---|
| essential immediate | `core` (no qualifier) | essential + this-phase is the default |
| essential | `core · @<later-phase>` | the qualifier marks essential-but-not-now |
| peripheral | `peripheral` | unchanged — off the critical path |
| *(missing)* | `supporting` | the helps-but-not-core middle the data shows |

### The "immediate" half: a qualifier, not a second axis

The user's timing concern is real, but it should not be its own tag. The reason is routelister's identity: it **describes** routes and never **decides** what to do with them. A standalone "do it now" tag is a *decision* (a disposition), which routelister is explicitly forbidden from making.

The fix is to express timing *attributively*. On a **core** route, you may add a phase qualifier — `core · @<goal-phase>` — when the route's coreness only switches on in a later phase of the goal. For example, R10 becomes **`core · @real-money`**: it genuinely is core, but its coreness activates at the real-money phase, not the current pilot phase. This is a *fact about the goal's phases* (which the goal itself defines), not an instruction to defer — a reader is still free to build it now. The qualifier is optional and only appears on core routes (a "peripheral-now" cell is meaningless, which is why the user's own scheme never had one).

### Two concrete examples (in the current route-record format)

The route record already uses a compact "Move / Lands / Touches" shape. Essentiality slots into the attribution line. R4 — the route whose Priority was hiding its coreness — now reads:

```
### R4 — Funding / escrow-hold
- Move:  route the Launcher budget into a reversible ESCROW_HOLD through the settlement spine.
- Lands: money is held and reversible — ready for R3 to release.
- Priority: MED · Confidence: HIGH · Essentiality: core
- Why:   the money loop cannot land without a hold to settle from — a LIGHT build, but load-bearing.
```

`Priority: MED` (it's light, not urgent) now sits beside `Essentiality: core` (the goal needs it) — the two read **independently**, and the "is it essential?" confusion disappears. And the essential-but-later case, R10:

```
### R10 — The dispute path
- Priority: MED · Confidence: MED · Essentiality: core · @real-money
- Why:  absent today; the goal can't land at the real-money phase without it —
        core, but its coreness ACTIVATES at that phase (not the pilot).
```

### Six refinements the design carries (from adversarial review)

The design was stress-tested by applying it literally to all 13 routes of the real map (not just the convenient examples). It survived, but the review surfaced six things the eventual spec wording must get right:

1. **(Load-bearing) Keep it route-versus-goal, not route-versus-route.** "Can the goal land without this route?" must be read as a *direct* glance at the route's relation to the goal — **not** a chain of reasoning like "the goal needs X, X needs this route." The latter would smuggle in a route-to-route dependency map, which routelister is forbidden from building. The judgment is direct and immediate, like Priority.

2. **The phase qualifier describes a goal-phase, not a schedule.** `@<goal-phase>` means "the phase in which this route's coreness activates," explicitly not "when you should do it."

3. **Bound the "supporting" middle.** Its test is "the goal is weaker or rougher without it but still lands." When you're unsure between core and supporting, **lean core** — under-marking a core route is the worse mistake.

4. **"Loudness vs load-bearing" is the *target* state.** Today Priority still fuses loudness and coreness; adding essentiality *lets* Priority shed coreness and become a clean "how loud" signal. Whether to formally re-document Priority that way is a separate, optional decision (see Next Actions).

5. **Honest cost accounting — and where it lives.** Essentiality is *Priority's twin*: it belongs **wherever Priority appears** — a column in the at-a-glance index (beside Priority) *and* on the per-route record's attribution line. This is the one place the original review under-called: the user's triage happens at the *index*, so the index is exactly where coreness must be visible — and essentiality earns the column by the lean-index's own "show only fields that vary and inform" rule (the same rule that evicted grain and kind for being dead). The index returns to its original 6-column width (grain + kind out, essentiality in), same width but every column now informative. Confidence stays off the index (it is route formed-ness, not a triage signal). The honest cost: one token per route + the index column + an optional phase qualifier + a header count — not zero, but a better-spent budget, not bloat.

6. **No collision with routelog.** (`routelog` is the separate tool that records which routes have been *run*.) Unlike a "done" checkmark — which is engagement state that routelog owns — essentiality is an *authored description* produced when the route is written, exactly like Priority. routelog has no claim on it, so there is no ownership conflict.

## Next Actions

### MUST

- **What:** Write the `essentiality` axis into the routelister spec — **as a column in the Route Index, beside Priority** (the index carries the two triage attributes, Priority + Essentiality; Confidence stays record-only) — plus the per-route Route Attribution line (`Priority · Confidence · Essentiality`), a new glance-rubric sub-section mirroring the existing meaning-gaps sub-section, the optional `@<goal-phase>` qualifier, and an essential-count in the Map Header — carrying all six refinements above.
  **Who:** a routelister-spec edit (`cognitive_harness/routelister/references/routelister.md`).
  **Gate:** observable — the next routelister-spec edit.
  **Why:** the verdict only changes future route-maps once the spec says so.

### COULD

- **What:** Decide whether to formally narrow Priority's documented meaning to "pressingness/salience" (loudness) now that essentiality carries coreness — updating the spec's vocabulary and the note that currently says "perceived importance is Priority."
  **Who:** a routelister-spec edit.
  **Gate:** condition-bound — when the essentiality axis is being written (it is the natural moment to clarify Priority).
  **Why:** makes Priority and essentiality crisply orthogonal in the spec's own words, not just in practice.
  **Depends-on:** MUST item "write the essentiality axis." This COULD is GATED — do not act until the MUST resolves (essentiality must exist before Priority can shed coreness to it).

- **What:** Add the Map Header essential-count ("3 core") and note the cross-inquiry "what's core across my maps" view that falls out for free.
  **Who:** a routelister-spec edit.
  **Gate:** condition-bound — alongside or after the MUST.
  **Why:** "3 core" is the number that answers "what can't I skip?"; "6 HIGH" does not.
  **Depends-on:** MUST item "write the essentiality axis." This COULD is GATED — the axis must exist before a count of it can.

## Reasoning

**Why this answer over the alternatives** — the full field that was considered:

- **"Just sharpen Priority to mean coreness" (rejected).** The tempting zero-cost move is to redefine Priority itself rather than add a field. It fails on the measured evidence: Priority is currently carrying *real* signals authors want (effort at R4, phase at R10). Redefining Priority to pure coreness doesn't delete those signals — it evicts them with nowhere to go, so they'd either cram back into Priority (re-creating the overload) or vanish. And 153 existing routes were rated under the current meaning; a silent redefinition reinterprets all of them. So sharpening Priority doesn't remove the need to decompose — it hides it. (This rejection did leave a useful residue: the design must say explicitly what Priority *retains*, which became the "loudness vs load-bearing" framing.)

- **"Honor the user's three labels as one axis" (rejected).** "Peripheral / essential-immediate / essential" fuses two orthogonal questions (coreness and timing) into one ordinal list. It breaks as soon as you need to read coreness and phase separately, and it bakes the disposition-flavored word "immediate" into a value name. Decomposing into one coreness axis plus an optional phase qualifier is cleaner and still lightweight.

- **"Make immediacy its own axis" (rejected).** A standalone "now/later" tag is disposition-adjacent — "do it now" is a decision, which routelister cannot make. Timing survives only in the attributive form (a fact about which goal-phase the coreness activates in), and only as a qualifier on core routes.

- **"Make essentiality drive a selector" (rejected).** Having the tag automatically pick the core routes to run would cross from describing into deciding — that's a downstream meta-loop's job, not routelister's identity.

- **"Replace Priority entirely" (rejected).** Priority retains a genuine, distinct signal (pressingness/loudness) and 153 routes depend on it; essentiality is additive and orthogonal, not a replacement.

- **What survived:** the single `essentiality` axis with the glance-rubric, the optional phase qualifier, and the placement on the existing tags line. It survived adversarial testing applied literally to all 13 real routes — essentiality assigned cleanly to every one (no awkward or empty cases), and it dissociated from Priority on about a third of them, proving it adds information rather than restating Priority. The review was externally grounded (in the real maps and the routelister spec), not in the analysis agreeing with itself.

## Open Questions

### Monitoring
- **Will authors keep essentiality glance-decidable, and keep "supporting" from becoming a dumping ground?** Observable across the first several maps written under the new spec. If "supporting" starts absorbing every uncertain route, tighten its test or lean harder on the "default to core under doubt" rule. (In the one real map measured, only 1 of 13 routes landed in "supporting," which is healthy.)

### Refinement Triggers
- **Promote essentiality from inline text to a formal typed field** only when a non-LLM consumer needs to read it reliably across many maps (e.g., an automated cross-inquiry "what's core" aggregator) — the same promotion rule the project already applies to the vitality rating. Until then, the inline token is sufficient and may be permanent.
- **Re-document Priority as "pressingness/loudness"** if, after essentiality ships, the two attributes are observed being confused in practice — the COULD item becomes a MUST at that point.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
there is also another thing regarding routlister.md routes,  there are many paths but some routes are periphreals and some are core and many times i see 10 routes mids and highs and idk if they are essential to what we are trying to build or not, or essential immediately, so i think we need tags on routes

maybe like , peripheral, essential immediate , essential ,

does this makes sense? maybe u can come up with better categorisation ?
```

</details>
