---
status: active
model: claude-opus-4-8[1m]
effort: max
corrects: devdocs/inquiries/2026-07-04_18-12__fork_recall_between_loops_innovation_heavy_pass/finding.md
---
# Finding: Come-Back-When — Match Parked Directions by Their Topic, Don't Give Route-Lister a New Field

## Changes from Prior

**Prior path:** devdocs/inquiries/2026-07-04_18-12__fork_recall_between_loops_innovation_heavy_pass/finding.md

**Revision trigger:** User correction. Two objections to the prior finding's "File" step: (1) wouldn't it be easier to add "come-back-when" as a subfield on each route-lister route? (2) the prior finding assumed you know, when you park a direction, the condition under which to revisit it — but usually you don't; and for the rare times you do, isn't that already the `blocked by` subfield?

**What's preserved:** The prior finding's core object — the project already writes down promising directions it sets aside and then never looks at them again; the fix is to *harvest what's already written*, not to compute fresh similarity over the whole corpus.

**What's changed:** The *matching mechanism*. The prior finding matched a parked direction by "firing its come-back-when condition." This finding replaces that: match by the direction's own short **topic label** (which the route-lister already writes), because most parked directions carry no condition at all. It also relocates the prior finding's "spent marker" (the note that a parked direction has been picked up) out of the loop and into the separate tracking layer where such state belongs.

**What's new:** A grounded answer to both objections — *don't* add the subfield (two independent reasons), *do* match by topic; plus the recognition that the real missing piece is a shared **index** of these topic labels across traverses, not a new field on any route.

**Migration:** Apply this correction to the prior finding (see Next Actions → MUST). The route-lister spec itself needs no change — it is already correct as-is.

---

## Question

This inquiry sits inside a longer line of work on **traversal memory** — how a project made of many separate thinking-sessions (each one a "traverse" through a problem) can carry useful directions forward from one session to the next, instead of re-discovering them every time.

The immediate context: a prior finding (the "innovation-heavy pass," inquiry 18-12) proposed a small end-of-session step it called **File**. Its idea was that when a traverse finishes, it has already written down the promising directions it decided *not* to pursue right now — each supposedly tagged with a "come-back-when" note saying under what condition to revisit it. The File step would just collect these into one shared list, tagged so they can be found later.

The user raised two objections to that step:

1. **The easier-design objection.** Wouldn't it be simpler to add "come-back-when" directly to the route-lister's spec, so every route it produces carries a `come-back-when` subfield — structure recorded at the source, rather than extracted from prose afterward?

2. **The wrong-assumption objection.** The File step assumes you *know* the come-back-when condition at the moment you park a direction. But usually you don't — "for most of the time" you have no idea when the right moment to return will be. And for the rare times you *do* know, isn't that condition already captured by a subfield called `blocked by`?

*(Vocabulary, defined once. **Route-lister** is the discipline that runs at the end of each traverse and lists the directions the work could go next — each as a "route" with a short **Direction** label, e.g. "spec the shared index." A **parked direction** is a promising route that was written down but set aside for later. The **come-back-when** note is the supposed condition for revisiting it. The **controller layer** is a separate, human-owned tracking file — a "travel-log" — that records which directions were actually picked up and acted on.)*

**Goal:** A grounded correction — decide the subfield question, deliver a verdict on the "you always know the condition" assumption, settle the `blocked by` fact, and give the corrected matching mechanism — with a clear account of what changes versus the prior finding.

---

## Finding Summary

- **The constructive answer first: match a parked direction by its topic, not by a condition.** The route-lister already writes a short, self-explanatory **Direction** label for every route (e.g. "spec the shared index of directions"). To find parked directions relevant to where a new traverse is heading, match the new direction against those existing labels *by topic*. No condition required. This is what "come-back-when" should have been all along — not a trigger to fire, but a **topic to match**.

- **The real missing piece is a shared index, not a new field.** The route-lister writes these Direction labels *per traverse*, and nothing gathers them across traverses so a later session can look them up. The thing worth building is that cross-traverse **index of Direction labels** — which is the prior finding's "File" step, corrected: gather the topic labels, drop the condition-extraction.

- **You were right: usually there is no come-back-when condition.** The normal parked direction is simply *open* — a promising topic set aside, with no known trigger. Two independent facts confirm this. First, the *old* route discipline that did have a condition field defaulted it to "none" — most routes carried no condition even when the field existed. Second, the current route-lister carries no condition field at all. So the prior finding's assumption (every parked direction has a come-back-when) was wrong for the majority.

- **So: don't add a `come-back-when` subfield to the route-lister — and the reason is not just "conditions are rare."** Two independent reasons forbid it: (a) the route-lister is *defined* not to carry this kind of thing (it lists topic-directions; it deliberately excludes dependencies, gates, and "do-this-later" decisions); and (b) the project already decided this exact shape of question once before and said no (keep the route-lister a pure list; put tracking state in the separate travel-log).

- **On `blocked by`: your memory is real, but it points at the *old* discipline.** `blocked by` was a field in **routeman/navigation** — the predecessor disciplines that the current route-lister *replaced*. The route-lister dropped it on purpose. So it is not a current subfield to reuse. But the instinct behind the memory is sound — it points at exactly where a genuine condition *should* live: the controller layer.

- **Your "record it at the source" instinct is also right — and already satisfied.** For the rare direction that *does* have a real condition, that condition is already recorded at the source: in a finding's "Next Actions → DEFERRED" items, each of which carries a `Gate:` line naming its revival trigger. That is the structured-at-source home for genuine conditions — it is just in the tracking/disposition layer, not on the route-lister.

- **Your efficiency goal still holds.** The point of the prior work was to do this while the session is still "warm" so the separate navigation session stays simple. That survives: the loop can publish its Direction labels to the shared index and note pick-ups in the travel-log while warm. "Which session does the work" is a different question from "which file holds the state" — the work can stay in the loop without any of the state landing on the route-lister.

- **What actually changes is the prior finding, not the route-lister.** The route-lister is already correct. The prior finding's matching mechanism is what gets corrected.

---

## Finding

### Why this came up

The longer goal is to stop the project from throwing away good ideas. Across many past traverses, the project has written down hundreds of promising directions it chose not to pursue in the moment — and then never looked at them again. The prior finding (inquiry 18-12) correctly identified this as the real gap: these parked directions are *written but never read*. Its proposed fix, the **File** step, was meant to make them findable later.

The trouble was in *how* it made them findable. It assumed each parked direction came with a "come-back-when" note — a condition telling you when to revisit — and that matching a parked direction to a new situation meant checking whether that condition had fired. The user's two objections land on exactly this assumption. Working through them, grounded in the actual specifications, produces a cleaner design than the one being corrected.

### 1. The constructive answer: match by topic

Start with what the route-lister actually produces, because the answer falls out of it. Every route the route-lister writes has a **Direction** — a short noun-phrase title, written to be understood on its own without opening the full record. Examples from this very inquiry's route-list: *"spec the cross-traverse index of Directions,"* *"test Direction-matching at scale."*

That Direction label is the thing to match on. When a new traverse begins and is heading somewhere, you find relevant parked directions by comparing where you're heading against those existing Direction labels — **by topic, by relevance**. Does this parked direction relate to what I'm now working on? That is a judgment a warm session can already make by reading the labels; it needs no condition, no trigger, no foreknowledge.

This is the correction to the prior finding in one line: a parked direction is **a topic to match, not a condition to fire.**

It's worth being precise about what this is *not*, because it can look like a step backward. An even-earlier finding in this chain (inquiry 17-45) proposed matching by "similarity," and the prior finding (18-12) deliberately moved away from that. This finding does *not* simply revert to it. The 17-45 idea computed similarity freshly over the *whole* body of past work. What's proposed here matches against the *already-written Direction labels of parked routes* — which is the prior finding's own object (harvest what's already written). So this is the prior finding's object plus topic-matching — a combination of the two, not a return to the old approach. The prior finding's real win (harvest the already-written directions) is kept intact; only its matching mechanism changes.

### 2. The real missing piece is an index, not a field

If matching is by topic label, what actually needs building? Not a field. An **index**.

Here is the gap, stated plainly: the route-lister writes Direction labels one traverse at a time, and nothing collects them across traverses. So a new session has no place to look them up. The missing piece is a shared, cross-traverse **index of Direction labels** — a list that gathers every parked direction's topic label from every traverse, so a later session can scan it and match against it.

That index is precisely the prior finding's "File" step — *corrected*. The prior File step was "collect the parked directions and turn each come-back-when note into a searchable tag." Remove the come-back-when part (there usually isn't one), and what remains is "collect the parked directions so their topic labels are findable." That's the index. It's a smaller, more honest version of the same step.

### 3. Why not just add the subfield (the first objection)

The first objection — wouldn't a `come-back-when` subfield on each route be easier? — is reasonable on its face. Recording structure at the source usually beats extracting it from prose later. But here it's the wrong move, for two reasons that are independent of each other (either one is sufficient).

**Reason one: the route-lister is defined not to carry this.** The route-lister's own specification explicitly excludes two things that a come-back-when condition *is*. It excludes recording dependencies between concepts ("this direction depends on that one"), and it excludes "do-this-later" decisions (its spec states plainly that "the decision to act, defer, or drop is not the route-lister's"). A come-back-when condition is exactly a *defer-this-until-X* decision resting on a *dependency-on-X* — both of the things the discipline is built to keep out. (One might ask: couldn't it be a neutral property of the route, like its priority? No. Priority describes how important a route is without telling you to do anything; a come-back-when tells you when to *act*. It is a decision, not a description.)

**Reason two: the project already answered this.** An earlier inquiry (2026-06-22, "route-lister todo.md third output") asked nearly the same question in a different guise — should the route-lister emit an extra, editable file to track state? It decided no: keep the route-lister a pure list of directions; anything that tracks, gates, or marks-as-done belongs in a separate controller file, never on the list itself. (That inquiry went as far as removing a "done" checkmark column from the route-lister for the same reason.) Adding a come-back-when subfield is the same move that inquiry already rejected — the list quietly taking on tracking state.

There is also a concrete hazard worth naming, though it's a supporting point rather than a third independent reason. The route-lister *replaced* an older, heavier discipline (called routeman / navigation) that carried a whole apparatus of `Status`, `Blocked By`, and `Unlocks` fields. It was deliberately slimmed down to a pure list. Adding a come-back-when subfield re-introduces the first plank of the specific schema that was just removed — it walks back a decision the project already made on purpose.

### 4. On `blocked by` (the second objection's factual half)

The user asked: for the rare cases where you *do* know the condition, isn't that already the `blocked by` subfield?

The honest answer is that `blocked by` is a real field, but it belongs to the *old* discipline, not the current one. The predecessor disciplines (routeman and its ancestor navigation, now retired) had a route schema that included `Status` and a `Blocked By` field — described in their spec as "the gate, missing evidence, missing artifact, or condition; **none when unblocked**." When the route-lister replaced them, it dropped that field along with the rest of the tracking apparatus.

So the memory is accurate — it's pointing at something that genuinely existed — but it's pointing at the predecessor. `blocked by` is not a current subfield to reuse; it's a field the project consciously removed.

Two things follow. First, that old field's default — **"none when unblocked"** — is itself evidence for the user's *other* objection: even back when the field existed, most routes carried no condition. That's the empirical confirmation that come-back-when conditions are the exception. Second, the instinct behind the memory is sound: it correctly points at *where* a genuine condition should live — the controller/tracking layer, which is exactly where that old routeman-era state used to sit, and where the current design puts it too.

### 5. Where genuine conditions and tracking actually live

Three homes, cleanly separated. This is the part that answers "if not on the route-lister, then where?"

- **The route-lister stays pure.** It writes Direction labels and nothing else. No conditions, no status, no done-marks.

- **A shared index** collects those Direction labels across traverses, so a new session can look them up and match by topic. This is a *projection* built from the route-lister's output — it reads the labels; it does not add anything to the route-lister's own records.

- **The controller layer (the travel-log)** holds the state that actually is tracking: which directions were picked up and acted on (the prior finding's "spent marker" belongs here, not in the loop), plus any genuine come-back-when condition for the rare gated direction. Those genuine conditions already have a structured home today — the `Gate:` line on each "DEFERRED" item in a finding's Next Actions. That is the "record it at the source" the user's first objection was reaching for; it's just in the tracking layer, not on the route-lister.

For the rare direction that truly is blocked on a specific thing, the mechanism is a small secondary check in this controller layer — "did the blocker clear?" — reading that `Gate:` line. It is the exception, not the main mechanism, and it must not be allowed to creep back onto the route-lister as a field.

### 6. Your efficiency goal survives intact

One reasonable worry: the whole point of this line of work was to move effort *into* the loop, so the separate navigation session stays simple. Doesn't putting tracking in a separate controller layer undo that?

No — because two different questions were being run together. "Which *session* does the work" is not the same as "which *file* holds the state." The efficiency goal is about the first: do the harvesting while the session is still warm and has its context loaded. The purity rule is about the second: don't let tracking state land on the route-lister's list. Both hold at once. While warm, the loop can publish its Direction labels into the shared index and note any pick-ups in the travel-log. None of that touches the route-lister's own records. The work stays in the loop; only the *state* is kept off the pure list.

### 7. One honest limit

The topic-matching mechanism is a judgment made by reading Direction labels — feasible today, and essentially what a warm session already does informally. What isn't yet tested is how it behaves *at scale*: when the index holds hundreds of parked directions, plain label-reading may need help (grouping, tags, or some coarser first cut). This is flagged, not solved — see Open Questions → Monitoring. It parallels a frontier the prior finding already carried about its own index growing unbounded.

---

## Inherited Commitments Re-test

This finding corrects a prior finding (18-12) and synthesizes across it, the route-lister spec, and an earlier chain finding (17-45). The load-bearing commitments it inherits:

- **Commitment:** The real gap is that promising parked directions are *written but never read*; the fix is to harvest what's already written rather than compute fresh similarity.
  - **Source:** devdocs/inquiries/2026-07-04_18-12__fork_recall_between_loops_innovation_heavy_pass/finding.md (its central object).
  - **Re-test status:** RE-TESTED — commitment confirmed. This finding keeps the object intact; the correction is downstream of it (how you match, not what you harvest).
  - **Evidence:** The whole corrected design still rests on harvesting the already-written Direction labels; nothing here re-opens the "harvest vs. recompute" decision.

- **Commitment:** Each parked direction carries a "come-back-when" condition, and matching means firing that condition.
  - **Source:** 18-12 (its "File" step and matching mechanism).
  - **Re-test status:** RE-TESTED — commitment found INVALID. Grounded in two facts: the old `Blocked By` field defaulted to "none," and the current route-lister carries no condition field at all. Most parked directions carry no condition, so condition-firing cannot be the matching mechanism.
  - **Evidence:** routeman spec (`Blocked By ... none when unblocked`); route-lister spec §5.2 (route record schema — no condition field). This finding's content reflects the dropped commitment: matching is by topic label, with condition-checking demoted to a rare secondary path.

- **Commitment:** The "spent marker" (that a parked direction was picked up) is state held loop-side.
  - **Source:** 18-12.
  - **Re-test status:** RE-TESTED — commitment confirmed but frame revised. The spent marker is real and needed, but it is tracking state, so it belongs in the controller-owned travel-log, not held in the loop.
  - **Evidence:** The 2026-06-22 "todo.md third output" finding established that tracking/done state belongs to the controller layer, never on the list.

- **Commitment:** Matching by "similarity" is the wrong approach (18-12 demoted the earlier 17-45 similarity idea).
  - **Source:** devdocs/inquiries/2026-07-04_17-45__between_loops_fork_recall_surfacing_placement/finding.md (its similarity-matching), as demoted by 18-12.
  - **Re-test status:** RE-TESTED — commitment confirmed but frame revised. Relevance/topic matching returns as the *primary* mechanism — but over the already-written Direction labels, not as a fresh computation over the whole corpus. So 17-45's instinct is partly rehabilitated without reverting to its actual method.
  - **Evidence:** The distinction between "match against already-written labels" (this finding) and "recompute similarity over the corpus" (17-45) is what keeps this from being a straight reversal; see Finding §1.

- **Commitment:** The route-lister is a pure list that excludes dependency, gate, and disposition structure.
  - **Source:** route-lister spec §1.3; reinforced by the 2026-06-22 "todo.md third output" finding.
  - **Re-test status:** RE-TESTED — commitment confirmed. It is the direct, load-bearing reason a come-back-when subfield is refused.
  - **Evidence:** route-lister spec §1.3 (excludes inter-concept dependency graphs and act/defer/drop decisions).

---

## Next Actions

### MUST

- **What:** Apply this correction to the prior finding (18-12) — replace its come-back-when matching with topic-label matching; note that most parked directions carry no condition; relocate the "spent marker" to the controller-owned travel-log; correct the `blocked by` fact (it's the old routeman field).
  - **Who:** A follow-up edit to 18-12's finding.md, recorded as `refines`/`corrects` from this inquiry (19-10).
  - **Gate:** Observable — the next time the 18-12 finding is opened for revision.
  - **Why:** This finding's verdict is "what changes is the prior finding, not the route-lister." Until the correction lands on 18-12, the two findings disagree in the record and the correction is inert.

### COULD

- **What:** Spec the cross-traverse **index of Direction labels** (v1) — the shared list that gathers parked directions' topic labels across traverses, plus the topic-match against it at a new traverse's start.
  - **Who:** A design inquiry (route-lister stays untouched; this is a new, separate artifact).
  - **Gate:** Condition-bound — when the correction to 18-12 (the MUST) has landed, so the index is specced against the corrected mechanism.
  - **Why:** This is the actual buildable mechanism that closes the write-only gap — the corrected "File" step.
  - **Depends-on:** MUST item "apply the correction to 18-12." This COULD is GATED — spec the index against the corrected mechanism, not the superseded one.

- **What:** Reconcile the three fork-recall passes (17-45, 18-12, this one) into one settled statement of the matching mechanism.
  - **Who:** A short consolidation inquiry.
  - **Gate:** Observable — when a reader next needs the chain's matching story in one place.
  - **Why:** The chain now has three passes with shifting matching claims (similarity → condition-firing → topic-label); one coherent statement prevents future confusion.

### DEFERRED

- **What:** Build the "did the blocker clear?" secondary check in the controller layer, reading each DEFERRED item's `Gate:` line, for the rare genuinely-gated direction.
  - **Gate:** Condition-bound — revive once the index (the COULD) exists and real gated directions have accumulated in it.
  - **Why (if revived):** Covers the minority path (directions that truly do have a knowable condition) without ever putting that condition back on the route-lister.

- **What:** Measure the real ratio of conditional vs. unconditional parked directions by sampling actual findings' DEFERRED items and route-lists.
  - **Gate:** Condition-bound — revive when the index has accumulated a meaningful sample (or alongside the reconciliation COULD).
  - **Why (if revived):** Turns "most parked directions are unconditional" from a grounded inference (the old "none" default + no current field) into a measured fact. The prior finding's ~391-direction count was a rough pattern-match, not a verified count.

---

## Reasoning

**Why this answer over the alternatives:**

- **"Add a `come-back-when` subfield to the route-lister" (rejected — the first objection's literal proposal).** It looks easier, but it fails on two independent grounds: the route-lister's spec explicitly excludes dependency and defer-until decisions (§1.3), and the project already decided (in the 2026-06-22 todo.md inquiry) to keep the list pure and put tracking state in a separate layer. It also walks back the specific schema (`Status`/`Blocked By`/`Unlocks`) that the route-lister was slimmed down from. Either ground alone is decisive; together with the "there's usually no condition anyway" point, the case is overdetermined.

- **"Condition-firing as the primary matching mechanism" (rejected — the prior finding's method).** This is the corrected commitment. It only works for parked directions that carry a knowable condition, and grounding shows those are the exception, not the rule (the old field defaulted to "none"; the current field doesn't exist). Condition-firing survives only as a small secondary check for the rare gated minority.

- **"The come-back-when framing itself" (rejected as a framing).** The deepest correction: the framing treated a *topic* (a direction) as a *trigger* (a condition). Once you see that a parked direction is a topic to match, the entire "note the condition, wait for it to fire" machinery dissolves. This is why the fix isn't a better condition field — it's dropping the condition frame.

- **"Just revert to similarity matching (17-45)" (rejected as a description of this finding).** Topic-label matching can look like the old similarity idea, but it isn't: it matches against the already-written Direction labels (the prior finding's object), not a fresh computation over the whole corpus. The distinction is what keeps the prior finding's real win intact while restoring relevance as the primary mechanism.

**What survived:**

- The prior finding's **object** — harvest the already-written parked directions — held under re-test; only its matching mechanism was corrected.
- The user's **wrong-assumption objection** — come-back-when is usually unknowable — held, on two independent grounds (the old field's "none" default; no current field).
- The user's **record-at-the-source instinct** — held, and turned out to be already satisfied: genuine conditions live structured in a finding's `Gate:` lines, in the tracking layer.
- The user's **efficiency goal** — held: the loop can still do the work while warm; only the state is kept off the pure list.

**A note on non-sycophancy, both directions.** The user was right on the big thing (conditions are usually unknown) and this finding says so plainly. The user's first proposal (add the subfield) is declined — but the user's own second objection had already started dismantling it. The `blocked by` recollection was factually off (it's the retired discipline's field), but it pointed at the correct architecture. And the finding being corrected is one I produced earlier in this same chain; its matching mechanism was wrong and is corrected here, not defended.

---

## Open Questions

### Monitoring

- **Does topic-label matching hold at scale?** The mechanism is a judgment made by reading Direction labels. With hundreds of parked directions in the index, plain reading may degrade and need grouping or a coarser first cut. Watch this as the index grows; revisit if matching quality visibly drops. (Parallels the prior finding's own frontier about its index growing unbounded.)

### Blocked

- **The full travel-log (controller layer) schema.** This finding routes the "spent marker" and genuine conditions to the controller-owned travel-log — but that travel-log is only seeded, not fully designed. The 2026-06-22 todo.md inquiry deliberately gated its full schema until at least three real traversal-turns have been recorded. So the controller layer is partly still a plan; this finding routes to it without assuming it is fully built.

### Refinement Triggers

- **If a measured sample contradicts the majority-unconditional claim.** This finding rests on "most parked directions carry no condition," grounded by inference (the old "none" default plus no current field). If the DEFERRED-item sample (Next Actions → DEFERRED) comes back showing conditions are actually common, the balance between the primary topic-match and the secondary condition-check re-opens.

---

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
File (end of the loop, small step). When a traverse finishes, it has already
written its parked directions — the finding's "deferred" items and the route-list's
set-aside routes, each with a come-back-when note. This step just saves them into
one shared list, tagged by direction so they can be found later. Its only real work
beyond copying is turning each come-back-when note into a searchable tag. It makes
no decision about where the project should go next.

u said this, but wouldnt be easier for us if this is added to the routelister spec
so each route has comeback-when subfield?

but also the assumption of comeback when being obvious is wrong. we dont always know
this, actually for most of the time. And for the times we know, we already have
subfield regarding this called blocked by in routelister no ?
```

</details>
