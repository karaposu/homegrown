## User Input

`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-06-16_17-45__container_choice_field_vs_guidance_text/_branch.md`

(Prior outputs consumed: surfacing.md, sensemaking.md, decomposition.md. Intent: crystallizing framings for (a) the CONVENTION FORMAT (`Meaning-gaps:` block, `- <gap> — [vitality] — <why>`, inline tag human+regex readable), (b) the TRIGGER framing (promote text→field only when a deterministic/non-LLM consumer must parse it), and (c) a crisp NAME for the principle. Inversion MANDATORY — steelman "a lightweight field from the start is cleaner / the trigger will fire soon / a convention will rot." Keep scope to the container; respect compactness; stay a rule keyed to the sharpened trigger. Save to innovation.md.)

---

# Structural Innovation — Crystallizing the Container Recommendation

## Phase 1 — Seed

**Seed (type: signal + dissatisfaction):** the recommendation (text-in-Guidance now, field-on-trigger) is correct but under-crystallized — it needs a concrete *format*, a memorable *trigger* statement, and a *name*, and it must survive a hard challenge that "a field is just cleaner."

**Methodology-mode consideration (required):**
- **Inherited mode:** *Standard default* (crystallize the recommendation → format + trigger + name) **with a mandated Inversion**.
- **Alternative named:** *Contrarian-rethink (Framer-weighted)* — run the whole as a challenge to "text not field."
- **What follows under the alternative:** would foreground "should it be a field after all?" and under-deliver the format/name.
- **Decision:** **default (inherited).** Standard-default + the mandated Inversion delivers both. (Not Production-task mode; the Inherited Frame Audit on the central assumption still runs.)

---

## Phase 2 — Generate (4 Generators + 3 Framers)

### Framer — Lens Shifting
- **Generic:** stop seeing "field vs text" (a storage choice); see "when does a convention earn promotion to a schema" (a *lifecycle*). The answer is a promotion lifecycle, not a binary.
- **Focused (reader's lens):** who reads this? A human or an LLM reads prose; only a deterministic parser needs a typed field. The container should **match the reader**.
- **Contrarian (schema-purist lens):** "structure belongs in the schema, not in conventions; conventions rot" → a field looks cleaner (the inversion steelman; addressed below).

### Generator — Combination
- **convention + "promotion":** the database move — a JSON blob becomes a typed column *when you start querying it*. The meaning-gaps content is a blob-in-Guidance, promoted to a field only when a deterministic consumer queries it.
- **+ routelister's depth-signal:** the meaning-gaps block is just a *richer depth-signal* — it lives where depth-signals live (text).
- **+ inline tag + regex:** the `[vitality]` tag is a **machine-affordance hidden inside human text** — dual-readable (a hashtag).

### Framer — Inversion (MANDATORY; depth- + multi-axis-iterated)
Central assumption: *"structured Guidance text now (not a dedicated field) is the right container."*
- **L1 (component) — "a lightweight field from the start is cleaner; sparse/consistency worries are overblown":** steelman — optional null-on-most-records fields are normal; a field is self-documenting (its name says what it is). **Result:** real-in-general, neutralized-here — routelister specifically values a *compact* map and stores *all* its soft signals as text, so a sparse typed field is inconsistent with *this* schema's economy; and "self-documenting" is matched by the labeled block (`Meaning-gaps:` is as self-documenting as a field name). Refines, doesn't kill.
- **L2 (system) — "the trigger WILL fire soon; build the field now":** steelman — automation is coming, so pay schema cost now and skip the migration. **Result (decisive sharpening):** the project's automation is *LLM-based* (the disciplines are LLM specs) — an automated meta-loop *here* is an LLM that reads prose. The trigger is gated on a *deterministic/non-LLM* consumer (a dashboard, a metrics counter) — a different, non-core artifact that may never be built. So the trigger's firing depends on the **reader's NATURE (LLM vs deterministic), not on "automation happening."** "Automation is coming" does *not* fire it.
- **Existence-axis — "ZERO container: don't store the gaps, recompute each run":** steelman — routelister re-runs and re-perceives. **Result:** the field is part of the route *record*, persisted across runs (§3.5 enrich-not-dump, the `_route.md` index) — zero-storage contradicts cross-run persistence. Not viable, but it clarifies *why* a container is needed: cross-run persistence.
- **Identity-axis — "what is the container fundamentally?":** invert "a storage slot" → "**a read/write CONTRACT between the writer (routelister) and the reader (the meta-loop)**." A field is a *strict* contract (typed, enforced); a text-convention is a *loose* contract (conventional, LLM-tolerant). The crystallizing frame: **match the container's strictness to the reader's strictness** — loose reader (human/LLM) → loose contract (convention); strict reader (deterministic parser) → strict contract (field).

### Framer — Constraint Manipulation (both directions)
- **ADD "the writer is always an LLM (routelister)":** an LLM writes a labeled block trivially and consistently → **defeats the "conventions rot" worry** (rot comes from many uncoordinated human hands; here the sole writer is one disciplined LLM following a spec'd convention).
- **ADD "the map must stay compact":** forces opt-in text over an always-present field → confirms text.
- **REMOVE "must reuse Guidance":** even if a fresh field were free, the sparse-on-most-routes + soft-content-is-text-here reasons still hold → the field isn't justified by the *content*, only by a *strict reader*.
- **REMOVE "must respect compactness":** if compactness didn't matter, a field would be fine → **compactness is the load-bearing constraint that tips it** (name it).

### Generator — Absence Recognition (both levels; bidirectional)
- **Patch-level (missing):** the convention needs to be **stated in the spec** (else it rots). Supplying a *documented* convention IS the anti-rot mechanism — a written convention is as durable as a field.
- **Patch-level (already-present):** routelister already has conventions (Guidance "Pointers, each with WHY"; the depth-signal phrasing) → a meaning-gaps convention is consistent with existing practice, not novel risk.
- **Redesign-level (from scratch):** designed today, given routelister's compact-map identity, soft signals would be text/annotation — which is what it already does → the convention is the from-scratch-correct choice too.
- **Redesign-level (missing):** what a field would *force* — a consistent location + a parseable shape — is replicated by a **documented convention + the inline tag**; the field's forcing-function is reproduced without the schema.

### Generator — Domain Transfer (native + deliberately-different)
- **Native (databases):** **schema-on-read vs schema-on-write** — store flexible text now (the reader imposes structure); migrate to a typed column only when a strict consumer queries it. Exactly the recommendation.
- **Native (software):** **YAGNI / premature-abstraction** — don't build the field until a consumer needs it.
- **Different (editing):** a **style-guide convention** ("mark queries with [Q]") until a tool needs a form field; the convention is human-durable *if documented*.
- **Different (folksonomy):** **inline hashtags** (`#high`) — human-readable, machine-parseable, no schema. The inline `[vitality]` tag *is* a hashtag-style affordance.
- **Convergence:** schema-on-read, YAGNI, style-convention, inline-hashtag all say — keep it a *documented text convention with an inline machine-affordance*, promote to schema only when a strict consumer arrives.

### Generator — Extrapolation
- If the project automates, the automated meta-loop is an LLM → reads prose → the field is never needed. The trigger's **non-firing is the expected trajectory**, not a corner case.
- If conventions accumulate (depth-signal, Frontier, meaning-gaps), routelister grows a small "annotation language" inside Guidance → a tiny frontier; **resist** (scope-expansion), note only.

---

## Inherited Frame Audit

**Central assumption (seed-level, Belief):** "structured Guidance text now (not a dedicated field) is the right container."

**Challenge scan:** the candidate set explicitly challenges it — Inversion produced *field-now* (L1), *trigger-fires-soon* (L2), *zero-storage* (existence), and the *contract reframe* (identity), each tested. L1 and L2 **materially refined** the frame (field-advantages-neutralized-here; trigger-gated-on-reader-nature). **Audit does NOT fire** (challenged from four directions; no override). Survival-bias guard satisfied — kill-directions generated and survived as refinements.

---

## Phase 3 — Test (5-test cycle on survivors)

**A — Container = a read/write CONTRACT; match strictness to the reader.** Novelty: high (reframes field-vs-text as contract-strictness). Scrutiny: "isn't all storage a contract?" → survives: yes — and naming it makes the strictness-matching *obvious* (loose reader → loose contract). Fertility: high (generates the trigger framing + the name). Actionability: high. Mechanism-independence: Inversion-identity + Domain-Transfer (schema-on-read) → **robust.** → **ACTIONABLE.**

**B — "Schema-on-read now, schema-on-write on demand."** Novelty: MED (known DB pattern, applied here). Scrutiny: survives (exact fit). Fertility: high (the lifecycle framing). Actionability: high. Mechanism-independence: Combination + Domain-Transfer + Lens → **robust.** → **ACTIONABLE.**

**C — The inline `[vitality]` tag is a hashtag (dual-readable, no schema).** Novelty: MED-high. Scrutiny: "tags can be malformed" → survives: a documented convention + a single LLM writer keeps them well-formed, and a regex tolerates the common case. Fertility: MED-high (crystallizes the format; defeats the hybrid). Actionability: high (the concrete format). Mechanism-independence: Combination + Domain-Transfer (folksonomy) → **robust.** → **ACTIONABLE.**

**D — A documented convention written by one disciplined LLM doesn't rot.** Novelty: MED. Scrutiny: directly answers the strongest inversion ("conventions rot") → survives: rot comes from many uncoordinated authors; here the sole writer is routelister (an LLM following a spec'd convention), and the spec documents the format. Fertility: MED (defends the recommendation). Actionability: high (a finding instruction: *document the convention in the spec*). Mechanism-independence: Constraint-ADD + Absence → **robust.** → **ACTIONABLE.**

**E — The trigger is gated on the reader's NATURE (LLM vs deterministic), not on "automation happening."** Novelty: high (sharpens the trigger decisively). Scrutiny: "automation could include non-LLM parts" → survives: yes — and IF such a part needs the gaps, the trigger fires; that IS the rule. The point is *automation alone* doesn't fire it; the reader's nature does. Fertility: high (the trigger framing). Actionability: high. Mechanism-independence: Inversion-L2 + Extrapolation → **robust.** → **ACTIONABLE.**

**F — routelister's text-annotations as a mini-language (Extrapolation).** → **RESEARCH FRONTIER**, resisted (scope-expansion); one-line note only.

---

## Assembly Check — the emergent crystallization

Combining A+B+C+D+E:

> **The container is a read/write contract between routelister (writer) and the meta-loop (reader). Match its strictness to the reader.** Today's reader — and the project's likely automation — is a human or an LLM, which needs only a **loose contract**: a *documented text convention* inside Guidance, with an inline `[vitality]` **hashtag-style tag** as a free machine-affordance. This is **"schema-on-read now, schema-on-write on demand."** Promote to a **strict contract (a typed field) only when a strict reader appears** — a deterministic/non-LLM consumer that can't read prose (a metrics dashboard, an aggregator). The convention **doesn't rot** because it's *written into the spec* and *authored by a single disciplined LLM*, not many hands — which reproduces the field's two forcing-functions (consistent location + parseable shape) without the schema cost.

**Crystallized format:**
```
Guidance:
  · <existing pointers...>
  Meaning-gaps:
    - <gap description> — [low|mid|high] — <why it matters>
```
The `[low|mid|high]` inline tag is the hashtag: a human reads it; a regex finds it.

**Name recommendation (ranked):** ① **"Convention before schema"** (promote on demand) — crispest; ② **"Match the container's strictness to the reader's strictness"** — the deepest (the contract frame); ③ **"Schema-on-read now, schema-on-write when a strict reader arrives"** — the database frame. **Trigger one-liner:** *"a field is for a reader that can't read prose"* (i.e., a deterministic/non-LLM consumer) — until then, the inline tag already serves anything that can run a regex.

---

## Telemetry

- **Generators applied:** 4/4 (Combination, Absence, Domain Transfer, Extrapolation)
- **Framers applied:** 3/3 (Lens Shifting, Constraint Manipulation, Inversion — depth- + multi-axis-iterated)
- **Convergence:** YES — Lens + Combination + Inversion + Domain Transfer (4 domains) + Absence converge on **schema-on-read / contract-strictness-matching / inline-hashtag-tag**. High confidence.
- **Survivors tested:** 6/6 (A–E ACTIONABLE; F FRONTIER-resisted).
- **Inherited Frame Audit:** did not fire (central assumption challenged 4 ways; L1+L2 materially refined; no override).
- **Failure modes observed:** none. (Survival-bias guarded — kill-directions generated + survived as refinements; Early-frame-lock guarded — ran all 7 + assembly, didn't stop at the first name.)
- **Overall: PROCEED** — strong convergence, all survivors tested, mandatory Inversion delivered and fertile (it produced the reader-nature trigger sharpening and the contract-strictness frame).
