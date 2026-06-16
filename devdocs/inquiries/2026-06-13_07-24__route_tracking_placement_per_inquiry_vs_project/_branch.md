# Branch: route_tracking_placement_per_inquiry_vs_project

## Source Input

```text
[Context: the user re-read the prior rlu finding (devdocs/inquiries/2026-06-12_20-48__route_run_tracking_rlu_design/finding.md) in full, then pushed back on its placement decision. Voice-dictated, transcribed roughly.]

I understand this point — we create these inquiry folders, they give us docarchive and the routelister.md file, which are not really files we touch; so far we agreed these files won't be edited (standard). But recall the optimization journey: originally we thought routelister generation should be a separate session per inquiry — not logical, not optimized. We changed it: we added routelister to the END of the big MVL loop (aMVLwr). That eliminated lots of problems (every new inquiry having to go find and run the routelisters). We also said a separate isolated navigational session should still run routelister, but NOT per inquiry — maybe at PROJECT level. The loop, when it finishes, runs routelister toward its focused effort and creates a list of routes possible to take. Big optimization.

What I'm describing now is similar to that optimization: if we can find a way to UPDATE these routelisters, they become really helpful — we don't need to recreate them, we can update them inside their relative inquiry folders, saving lots of trouble. Not sure if possible.

I suggested one way (rlu marking RAN in routelister.md), which makes sense to a degree. But maybe other ways. For example: instead of updating the routelister.md, the rlu skill, used with the path of the routelister, at the end goes and creates a NEW file there — routelister_updates.md — and appends a new line about what happened. So we don't touch the original; in the same folder we'll have routelister.md AND routelister_updates.md showing what's been done about those routes. Still organized, because it's in the same inquiry folder.

The suggestion in the last inquiry talks about a PROJECT-LEVEL list of what's done. I think this is really a bad idea. Because each inquiry can have ~10 routes; we'd just append one project MD file with "this is done, this is done, this is done..." I'm not sure if good or bad. Maybe it's good that we can compile this project route-updates file into a "what's going on" logic. Maybe it's actually a good idea — I just want to make sure you weigh the pluses and minuses correctly. This project-level file can still exist for PROJECT-LEVEL routelisters. But for inquiry-level routelisters, keeping the inquiry folders as a kind of update-book is maybe enough — because then we can use regex to find all routelister.md files, find the update files too (if used), consume them at once, no problem; and once we find an MD file we know which inquiry it belongs to (a good thing). But with a project file for saving inquiry updates, there might be a problem: if we change the inquiry folder name, or move them, the references break. Might not be logical. Or maybe it's even better to have the project file listing all "this is done..."

But then a problem arises: say the project file has 2000 entries, and we want to go back to an inquiry folder and run some un-run route. First we'd have to check this 2000-entry index to find if it's already run or not — which is not plausible; I'd have to read the whole 2000-line file. I think there's something missing there, or maybe I don't understand the last inquiry — maybe it's already fixing this, maybe there's no such issue.
```

## Articulation Reference

- **File:** `devdocs/inquiries/2026-06-13_07-24__route_tracking_placement_per_inquiry_vs_project/articulate_simple.md`
- **Itemize count:** 1
- **Per-item identifiers:** `item-1` (the run-state placement re-decision)
- **Verdict:** HIGH-PROCEED
- **Flagged conditions:** none

## Question

**Item 1 — the run-state placement re-decision.** *(Literal, decoded):* "I want a way to UPDATE the routelisters in place, in their inquiry folders, not recreate or centralize them — like the optimization where routelister moved from a per-inquiry session to the end of the loop. One way: rlu marks RAN in routelister.md. Another: rlu creates a sibling `routelister_updates.md` in the same folder, append-only, never touching the original. The last inquiry suggested a PROJECT-LEVEL done-list, which I think may be a bad idea for inquiry-level routes (though maybe good as a 'what's going on' overview, or for project-level routelisters). Per-inquiry update files are regex-discoverable and folder-membership identifies the inquiry (no broken references on rename/move). But a 2000-entry project file would force me to read the whole thing to check if one inquiry's route is run — implausible. Maybe the last inquiry already fixes this, or maybe there's a gap. Weigh it correctly."
- **MQ1 ambiguities (kind of ask):** re-decide-the-placement (per-inquiry vs project) · **weigh-correctly** (the explicit meta-ask — no rubber-stamp of either side) · re-test-the-prior ("maybe it's already fixing this") · resolve-the-kind-distinction (inquiry-level vs project-level routelisters — same home or different?) · evaluate-the-sibling-file variant (incl. the archiving wrinkle).
- **MQ3 ambiguities (end-state):** the placement verdict (per-inquiry / central / by-kind / source-vs-derived hybrid) with deciding reasons · an explicit plus/minus table the user can check · the honest verdict on whether the prior finding has the 2000-lookup flaw · the kind-split decision · the concrete winning file shape (name, location given archiving, append-vs-mutate, contents) · the source-of-truth-vs-derived-view reframe if it dissolves the objections.

*(MQA SURFACED, carried open: (a) is run-state ONE object (a per-route run-log) or TWO conflated (run-log AND the Selector's cross-inquiry working-queue)? (b) is the project-wide file a SOURCE OF TRUTH or a DERIVED VIEW? (c) one home for both routelister kinds, or two?)*

## Goal

**Deliverable shape (Deconstruct):** a placement re-decision for route run-state — per-inquiry sibling file vs project central file vs by-kind vs source-of-truth/derived-view hybrid — with (i) an explicit, correct pluses/minuses table; (ii) an honest verdict on whether the prior finding has the 2000-entry-lookup flaw; (iii) a resolution of the inquiry-level-vs-project-level routelister distinction; (iv) the concrete winning file shape reconciled with rlu + the archiving fact + the routelister spec; (v) the source-of-truth-vs-derived-view reframe if it dissolves the objections. **Bounds:** never mutate the original artifacts (routelister.md, discipline outputs); rlu-the-mechanism is accepted (this is target-only); the winning design must NOT require a 2000-entry scan to answer the local "is this inquiry's route run?" question, and must NOT break on folder rename/move.

**Motivations a good answer serves (WHY-axis, preserved open):** update-in-place / don't-recreate-or-centralize (the routelister-at-end optimization, generalized) · keep-it-local-and-cheap (the local question answerable where you stand, O(routes-here)) · robustness-by-locality (folder-membership as the identity key; no fragile references) · don't-over-centralize, but a derived overview may be fine · **get-the-weighing-right** (the user distrusts a too-quick answer either direction).

**Context the work needs (MQ2):** the prior rlu finding (`devdocs/inquiries/2026-06-12_20-48__route_run_tracking_rlu_design/finding.md` — Correction-1's central-selections + ↗-pointer placement; the option-map placement axis; the NOT-list — the thing being contested); the Pipeline Architecture finding (`devdocs/inquiries/2026-06-11_12-47__navigational_session_queue_dispatcher_possibilities/finding.md` — the selections file's DESIGNED role as the Selector's cross-inquiry working-queue / decided-about ledger the future Dispatcher fires from, inherently project-level); the routelister spec (`cognitive_harness/routelister/references/routelister.md` — `_route.md` per-territory, at root, EXCLUDES process state; route-maps archived; the TWO run modes root/project-space vs concept-target — the literal basis for "project-level vs inquiry-level routelisters"); the aMVLwr runner spec (archives routelister.md; `_route.md` stays); the optimization history the user cites (per-inquiry-session → end-of-loop exhaust).

**What would fail:** a verdict that rubber-stamps either the user's proposal or the prior finding without the honest weighing; a design requiring a 2000-entry scan for the local question; a design that breaks on folder rename/move; mutating the original perception artifacts; ignoring the inquiry-level-vs-project-level distinction; conflating the per-route run-log with the Selector's working-queue without noticing they have different natural scopes; dismissing the project-wide overview entirely (the user grants it may be valuable as a derived view).

## Considered Articulations

**Item item-1 — the run-state placement re-decision:**
1. *(per-inquiry-as-truth)* "Adopt the per-inquiry sibling update file as the source of truth (a state-class file at the inquiry root, since routelister.md is archived) — append-only, never touching the original; project-wide views regex-assembled on demand; reconcile with the prior finding (which over-centralized)."
2. *(source-vs-derived reframe)* "Reframe: the prior finding's flaw isn't the central file's existence but its being the SOURCE OF TRUTH; make per-inquiry files the truth and the project file a DERIVED, regenerable projection — which dissolves BOTH the 2000-lookup and the reference-fragility objections."
3. *(by-kind split)* "Split by routelister kind: inquiry-level (the aMVLwr exhaust) tracks in-folder; project-level (the Navigator sweep) + the Selector's working-queue track in the project selections file — two homes at their natural scopes (the user's own distinction)."
4. *(defend-the-central, qualified)* "Re-test whether the prior design already answers the lookup objection: it pairs central selections.md with a per-inquiry ↗ pointer in `_route.md`; assess whether that pointer suffices for the local question (likely only partially — a bare 'engaged' breadcrumb keyed to concepts, not full per-route run-state) and decide what to upgrade."
5. *(two-objects distinction)* "Separate two conflated objects: the per-route RUN-LOG (local, per-inquiry) vs the Selector's WORKING-QUEUE / decided-about ledger (project-level); give each its natural home; the prior finding folded them into one central file, which is why the local lookup hurts."

## Scope Check

**IN scope:** the placement verdict + the plus/minus table; the prior-finding re-test (does it have the lookup flaw); the inquiry-level-vs-project-level resolution; the winning file's concrete shape (name/location/append-vs-mutate/contents) reconciled with rlu and the archiving/spec facts; the source-of-truth-vs-derived-view reframe.

**OUT of scope:** re-deciding rlu-the-mechanism (the two moments, informal-run coverage, the NOT-list — accepted from the prior finding); building rlu or the files (this is the placement design; the build is the user's go); redesigning routelister's enumeration; the L2/Dispatcher machinery beyond noting which file the Selector/Dispatcher reads.

Question covers goal — the five articulations span per-inquiry-as-truth, the source/derived reframe, the by-kind split, the prior re-test, and the two-objects distinction.

**Specific-vs-pattern check:** the user names a specific file (`routelister_updates.md`) and a specific objection (2000 entries); the ask is the general placement pattern (where run-state lives, by scope). Address the general pattern with the sibling-file as a first-class candidate and the 2000-entry case as the stress-test. Both layers in scope.

## Layer Commitment

**Primary layer: STRUCTURAL.** The question adjudicates the **file architecture** for run-state tracking — which files exist, where they live (inquiry root vs project), who owns them, append-vs-mutate, and the source-of-truth-vs-derived-view relationship between per-inquiry records and any project overview. The prior finding settled the MEANING (rlu = recorder; run-state = decided-about records) and the PROCESS (the two moments); this inquiry contests the STRUCTURAL placement of where those records sit.

**Other layers, handled:**
- **Meaning** — the one genuine meaning sub-question (is run-state ONE object or two: a per-route run-log vs the Selector's working-queue?) is re-opened only as far as the placement needs it; if it forces a meaning-level re-decision, that is flagged.
- **Process** — rlu's exact write mechanics (append vs mutate; which moment writes where) are settled to the level the placement requires; finer build details follow on the user's go.

*Sequential note:* if the verdict changes the prior finding's Correction-1, the prior finding gets an `impacted_by:` amendment (the corrigendum pattern), and rlu's v1 write-target is updated accordingly — both on the user's go.

## Synthesis Trigger

**Fired** — the inquiry re-opens and reconciles prior commitments:

- `devdocs/inquiries/2026-06-12_20-48__route_run_tracking_rlu_design/finding.md` (the prior rlu finding) — commits: Correction-1's placement (per-PROJECT `selections.md` as the source of truth + a bare ↗ manifestation pointer in each `_route.md`); the option-map's verdict that "what has been run?" is a project-level question; rlu writes the central file. **This placement is exactly what's contested** — it must be re-tested (does it carry the lookup flaw?), and revised if the weighing favors per-inquiry.
- `devdocs/inquiries/2026-06-11_12-47__navigational_session_queue_dispatcher_possibilities/finding.md` (the Pipeline Architecture) — commits: the selections file as the Selector's cross-inquiry working-queue / decided-about ledger the future Dispatcher fires from (inherently project-level); five states; single-writer. Re-test whether the per-route RUN-LOG and the Selector's WORKING-QUEUE are the same object or two — the placement may hinge on this.
- `cognitive_harness/routelister/references/routelister.md` (the routelister spec) — commits: `_route.md` at the inquiry root, never archived, EXCLUDES process state; route-maps archived; the two run modes (root/project-space vs concept-target) = the literal "project-level vs inquiry-level routelister" distinction. The per-inquiry file must respect these (a NEW state-class file, not `_route.md`).

CONCLUDE will require an `## Inherited Commitments Re-test`. Plan Sensemaking and Critique to actually re-test: (a) does the prior finding's central-selections placement have the 2000-entry-lookup flaw for the LOCAL question (honest yes/partial/no)? (b) is run-state one object or two (run-log vs working-queue), and does that split the home by scope? (c) does the source-of-truth-vs-derived-view reframe dissolve the lookup + fragility objections while preserving the project-wide view the Selector/Dispatcher need? (d) does the inquiry-level/project-level routelister distinction map onto the placement split?
