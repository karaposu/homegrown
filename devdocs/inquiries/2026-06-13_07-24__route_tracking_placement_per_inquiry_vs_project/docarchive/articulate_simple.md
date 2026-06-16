# Structural Articulation (Simple) — Bundle

## User Input

```text
[Context: the user re-read the prior rlu finding (devdocs/inquiries/2026-06-12_20-48__route_run_tracking_rlu_design/finding.md) in full, then pushed back on its placement decision. Voice-dictated, transcribed roughly.]

I understand this point — we create these inquiry folders, they give us docarchive and the routelister.md file, which are not really files we touch; so far we agreed these files won't be edited (standard). But recall the optimization journey: originally we thought routelister generation should be a separate session per inquiry — not logical, not optimized. We changed it: we added routelister to the END of the big MVL loop (aMVLwr). That eliminated lots of problems (every new inquiry having to go find and run the routelisters). We also said a separate isolated navigational session should still run routelister, but NOT per inquiry — maybe at PROJECT level. The loop, when it finishes, runs routelister toward its focused effort and creates a list of routes possible to take. Big optimization.

What I'm describing now is similar to that optimization: if we can find a way to UPDATE these routelisters, they become really helpful — we don't need to recreate them, we can update them inside their relative inquiry folders, saving lots of trouble. Not sure if possible.

I suggested one way (rlu marking RAN in routelister.md), which makes sense to a degree. But maybe other ways. For example: instead of updating the routelister.md, the rlu skill, used with the path of the routelister, at the end goes and creates a NEW file there — routelister_updates.md — and appends a new line about what happened. So we don't touch the original; in the same folder we'll have routelister.md AND routelister_updates.md showing what's been done about those routes. Still organized, because it's in the same inquiry folder.

The suggestion in the last inquiry talks about a PROJECT-LEVEL list of what's done. I think this is really a bad idea. Because each inquiry can have ~10 routes; we'd just append one project MD file with "this is done, this is done, this is done..." I'm not sure if good or bad. Maybe it's good that we can compile this project route-updates file into a "what's going on" logic. Maybe it's actually a good idea — I just want to make sure you weigh the pluses and minuses correctly. This project-level file can still exist for PROJECT-LEVEL routelisters. But for inquiry-level routelisters, keeping the inquiry folders as a kind of update-book is maybe enough — because then we can use regex to find all routelister.md files, find the update files too (if used), consume them at once, no problem; and once we find an MD file we know which inquiry it belongs to (a good thing). But with a project file for saving inquiry updates, there might be a problem: if we change the inquiry folder name, or move them, the references break. Might not be logical. Or maybe it's even better to have the project file listing all "this is done..."

But then a problem arises: say the project file has 2000 entries, and we want to go back to an inquiry folder and run some un-run route. First we'd have to check this 2000-entry index to find if it's already run or not — which is not plausible; I'd have to read the whole 2000-line file. I think there's something missing there, or maybe I don't understand the last inquiry — maybe it's already fixing this, maybe there's no such issue.
```

**Substrate note (Edge — warm context).** Direct re-opening of the prior rlu finding's **Correction-1 placement decision** (which chose a per-PROJECT `selections.md` as the source of truth + a bare ↗ pointer in each `_route.md`). The user accepts rlu-the-mechanism and the don't-touch-the-original principle; they contest the WRITE-TARGET. Two structural facts the answer must hold: (a) `routelister.md` is ARCHIVED to `docarchive/` at CONCLUDE — so a literal sibling "next to routelister.md" would land in docarchive too; the living per-inquiry file at the inquiry root is `_route.md`; (b) routelister's spec forbids process/control-flow state in `_route.md` — so a per-inquiry run-state record would be a NEW state-class file at root, not `_route.md` itself. The user surfaces a real architectural distinction the prior finding under-drew: **inquiry-level routelisters** (the per-`aMVLwr` exhaust) vs **project-level routelisters** (the future Navigator's project-wide sweep) — possibly different tracking homes per kind. And a concrete scaling objection: the central-file LOOKUP-COST (scan 2000 entries to answer "is this one inquiry's route X run?"), plus reference-fragility (a central file referencing folders breaks on rename/move). The optimization-history analogy (per-inquiry-session routelister → end-of-loop exhaust = "update/keep in place, don't recreate / don't centralize") is the user's precedent. They explicitly ask whether the prior finding already addresses the lookup flaw.

---

## Statement-Level Fields

- **Itemize count:** 1 (one deliverable — a correct plus/minus weighing of WHERE route run-state tracking lives, per-inquiry vs project-level, with the routelister-kind distinction and the user's sibling-file proposal as inputs, re-testing the prior finding's placement. The sub-questions [the sibling-file variant, the lookup objection, the project-vs-inquiry distinction, "does the prior finding already fix this?"] are facets/inputs of that one placement adjudication, not separate work.)
- **Per-item identifiers:** `item-1` (the run-state placement re-decision)

**Itemize reasoning.** Everything in the input converges on one question: *where should route run-state be recorded, and is the answer uniform or kind-dependent?* The sibling-file idea is a candidate placement; the 2000-entry objection is a stress-test of one placement; the project-vs-inquiry distinction is the axis that may split the answer; "does the prior finding already fix this?" is a re-test request on the same decision. One item.

---

## Item 1 — the run-state placement re-decision

**Item text:** Re-decide (weighing pluses/minuses correctly, re-testing the prior finding) WHERE route run-state should be recorded: a per-inquiry sibling update file kept in the inquiry folder (the user's new proposal — append-only, never touching the original) vs a per-project central file (the prior finding's selections.md) — accounting for the inquiry-level-vs-project-level routelister distinction, the lookup-cost and reference-fragility objections to a central file, and the regex-discoverability + folder-membership-as-identity advantages of per-inquiry files.

### MQ1 — verdict-axis (what kind of ask)

**Answer — identified-ambiguities-list:**
- **re-decide-the-placement:** adjudicate per-inquiry vs project-level as the home for run-state (the core ask).
- **weigh-correctly (the explicit meta-ask):** "make sure you weigh the pluses and minuses correctly" — the user wants honest trade-off analysis, not a rubber-stamp of either their proposal or the prior finding.
- **re-test-the-prior:** "maybe it's already fixing this error" — check whether the prior finding's design (central selections.md + per-inquiry ↗ pointer) actually has the lookup flaw the user fears, and report honestly.
- **resolve-the-kind-distinction:** decide whether inquiry-level and project-level routelisters get the SAME tracking home or DIFFERENT ones.
- **evaluate-the-sibling-file variant:** assess the specific `routelister_updates.md`-in-the-folder proposal (incl. the archiving wrinkle).

### MQ2 — context-need axis

**Answer — identified-ambiguities-list:**
- **verdict (which context):** the prior rlu finding (`devdocs/inquiries/2026-06-12_20-48__route_run_tracking_rlu_design/finding.md` — Correction-1's central-selections + ↗-pointer placement; the option-map's placement axis a/b/c/d; the NOT-list); the Pipeline Architecture finding (the selections file's DESIGNED role — not only a run-log but the Selector's cross-inquiry **working queue / decided-about ledger** the future Dispatcher fires from — which is inherently project-level); the routelister spec (`cognitive_harness/routelister/references/routelister.md` — `_route.md` is per-territory, lives at root, EXCLUDES process state; route-maps are archived; the two run modes ROOT/project-space vs concept-target — the literal basis for "project-level vs inquiry-level routelisters"); the aMVLwr runner spec (archives routelister.md; `_route.md` stays); the optimization history the user cites (per-inquiry-session → end-of-loop exhaust).
- **kinds:** a placement re-decision + a correct trade-off weighing + a prior-finding re-test + a kind-distinction resolution + a source-of-truth-vs-derived-view adjudication.
- **stance:** honest adjudicator (the user explicitly fears a mis-weigh — neither their idea nor the prior finding gets deference by default); prior-respecting-but-revisable (the prior finding is one day old; its placement is exactly what's contested); architecturally precise about the archiving + spec facts.

### MQ3 — intent-axis (WHAT; action-endpoint shape)

**Answer — identified-ambiguities-list:**
- **endpoint-the-placement-verdict:** where run-state lives — per-inquiry file / central file / both-by-kind / source-vs-derived hybrid — with the deciding reasons.
- **endpoint-the-plus-minus-table:** an explicit pluses/minuses comparison (locality, lookup-cost, reference-fragility, discoverability, project-wide-view, the Selector-queue role, complexity) the user can check.
- **endpoint-the-prior-finding-verdict:** does the prior design have the 2000-lookup flaw? (honest yes/partially/no, with what specifically).
- **endpoint-the-kind-split-decision:** inquiry-level → ? ; project-level → ? (same or different homes).
- **endpoint-the-sibling-file-shape:** if per-inquiry wins, the concrete file (name, location given archiving, append-only vs mutate, what it records) — reconciled with rlu's design.
- **endpoint-the-source-vs-derived reframe:** possibly the resolution is "per-inquiry is the source of truth; the project view is a DERIVED/assembled projection (regex-scan), not a hand-maintained central truth" — which dissolves both the lookup and the fragility objections.

### MQ4 — boundary-axis (exclusions)

**Answer — identified-ambiguities-list:**
- **Don't touch the original artifacts:** the user reaffirms routelister.md (and the discipline outputs) are not edited; any tracking is a SEPARATE file (append/sibling), never a mutation of the perception snapshot.
- **Don't re-litigate rlu-the-mechanism:** rlu (the recorder) and the two-moment / informal-run coverage are accepted from the prior finding; THIS is about the write-TARGET only.
- **Avoid the implausible-lookup failure:** whatever wins must NOT require reading a 2000-entry file to answer "is this inquiry's route run?" (the user's explicit negative spec).
- **Avoid fragile cross-references:** a design whose correctness breaks on renaming/moving inquiry folders is disfavored (the user's stated concern).
- *(Implicit)* don't over-centralize into a single growing file if that duplicates a natural per-inquiry home; equally, don't fragment so hard that the project-wide "what's going on" view becomes impossible.

### MQA — alignment across MQ1–MQ4

**RECONCILE:** re-decide-placement folds with weigh-correctly (the verdict IS the honest weighing); evaluate-the-sibling-variant folds with the kind-distinction (the sibling fits the inquiry-level case).
**SURFACE — irreducible opennesses (carried):** (a) is run-state ONE thing (a per-route run-log) or TWO conflated things (per-route run-log AND the Selector's cross-inquiry working-queue) — because the prior finding's central file is the latter, and the user's lookup objection is about the former; (b) is the project-wide file a SOURCE OF TRUTH or a DERIVED VIEW — the whole weighing may turn on this; (c) does the inquiry-level/project-level split give two homes or does one home serve both.
Remaining: ALIGNED (the placement-verdict-with-honest-weighing shape governs).

### Deconstruct

**Tuple:** `(deliverable: a placement re-decision for route run-state — per-inquiry sibling file vs project central file vs by-kind vs source-of-truth/derived-view hybrid — with (i) an explicit correct pluses/minuses table, (ii) an honest verdict on whether the prior finding has the 2000-entry-lookup flaw, (iii) a resolution of the inquiry-level-vs-project-level routelister distinction, (iv) the concrete winning file shape reconciled with rlu + the archiving + the routelister spec, and (v) the source-of-truth-vs-derived-view reframe if it dissolves the objections; kinds: placement adjudication + trade-off weighing + prior re-test + kind-split + artifact shape; bounds: never mutate the original artifacts; rlu-mechanism accepted (target-only); the winning design must NOT require a 2000-entry scan for the local question and must NOT break on folder rename/move)`

**Late-split check:** one placement decision with facets. No split.

### MultiDepth

**Literal-statement:** "These inquiry folders give us docarchive and routelister.md, which we agreed not to edit. But like the optimization where we moved routelister generation from a separate per-inquiry session to the end of the MVL loop (and said a separate navigational session would run routelister at project level), I want a way to UPDATE these routelisters in place, in their inquiry folders, instead of recreating them. One way is rlu marking RAN in routelister.md. Another: rlu creates a sibling `routelister_updates.md` in the same folder and appends what happened — not touching the original. The last inquiry suggested a PROJECT-LEVEL done-list, which I think is maybe a bad idea for inquiry-level routes — though maybe good for a 'what's going on' overview or for project-level routelisters. Per-inquiry update files are regex-discoverable and folder-membership tells you the inquiry (no broken references on rename/move). But a 2000-entry project file would force me to read the whole thing just to check if one inquiry's route is already run — implausible. Maybe the last inquiry already fixes this, or maybe there's a gap. Weigh it correctly."

**Identified-purpose-motivation-ambiguities (WHY-axis):**
- **update-in-place, don't-recreate** — the core instinct, carried from the routelister-at-end optimization: artifacts should accrete state in place, not be regenerated or centralized away from where they live.
- **keep-it-local-and-cheap** — the operational question ("what's un-run in THIS inquiry?") should be answerable where you're standing, in O(routes-here), not via a project-wide scan.
- **robustness-by-locality** — folder-membership as the identity key avoids fragile references; moving a folder moves its tracking with it.
- **don't-over-centralize (but maybe a derived overview is fine)** — wary of one growing file as the source of truth, but open to a compiled project view IF it earns its place.
- **get-the-weighing-right** — the user distrusts a too-quick answer (either direction); wants the trade-offs honestly laid so the decision is sound.

### Considered Articulations (Rephrase)

1. *(per-inquiry-as-truth)* "Adopt the per-inquiry sibling update file as the source of truth for run-state (a state-class file at the inquiry root, since routelister.md is archived) — append-only, never touching the original; project-wide views are regex-assembled on demand; reconcile with the prior finding (which over-centralized)."
2. *(source-vs-derived reframe)* "Reframe: the prior finding's flaw isn't the central file's existence but its being the SOURCE OF TRUTH; make per-inquiry files the truth and the project file a DERIVED, regenerable projection (a cache) — which dissolves BOTH the 2000-lookup and the reference-fragility objections at once."
3. *(by-kind split)* "Split by routelister kind: inquiry-level routelisters (the aMVLwr exhaust) track in-folder (per-inquiry file); project-level routelisters (the Navigator sweep) + the Selector's cross-inquiry working-queue track in the project selections file — two homes, each at its natural scope (honoring the user's own distinction)."
4. *(defend-the-central, qualified)* "Test whether the prior finding's design already answers the lookup objection: it pairs the central selections.md with a per-inquiry ↗ pointer in `_route.md`; ask whether that pointer suffices for the local question (probably only partially — it's a bare 'engaged' breadcrumb keyed to concepts, not full per-route run-state), and decide what to upgrade."
5. *(two-objects distinction)* "Separate two conflated objects: the per-route RUN-LOG (was this route engaged? — local, per-inquiry) vs the Selector's WORKING-QUEUE / decided-about ledger (what's my cross-inquiry portfolio of committed work? — project-level); give each its natural home; the prior finding folded them into one central file, which is why the local lookup hurts."
```

---

## Self-Check (LAYER 1 — single LIGHT pass)

| # | Mode | Fire? |
|---|---|---|
| 1 | Premature Itemize split | no (one placement decision; the facets feed it) |
| 2 | Late-detected multi-item | no |
| 3 | MQ extension violates bounded-extensibility | no |
| 4 | Per-operation firing missed | no |
| 5 | MQ2 missing preparation content | no (the prior finding + the selections design's queue-role + the routelister spec's two run modes + the archiving facts all named) |
| 6 | MQ2 missing kinds-axis or stance-axis | no |
| 7 | 2-shape violation | no |
| 8 | AMBIGUITY-NATURE conflation | no (WHAT-opennesses [one-object-or-two; source-vs-derived; one-home-or-two] kept separate from WHY-motives [update-in-place; local-and-cheap; robustness; get-the-weighing-right]) |
| 9 | Considered-articulations drift | no (all five within the placement decision's bounds) |

Zero fires.

## Self-Assessment Verdict

**HIGH-PROCEED** — one placement decision, the explicit "weigh correctly" meta-ask preserved, the archiving + spec facts carried as hard substrate, the prior-finding re-test obligation surfaced, and the deep opennesses (run-log-vs-Selector-queue as two objects; source-of-truth-vs-derived-view; one-home-vs-by-kind) carried for the pipeline to resolve rather than pre-collapsed.
