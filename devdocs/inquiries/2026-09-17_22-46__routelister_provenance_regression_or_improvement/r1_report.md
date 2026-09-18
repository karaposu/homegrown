# Report — the RouteLister source-provenance change (the brief's §8 report)

Written 2026-09-18 for the author of `rl.md` and for anyone judging the change from outside this repo. Companion to `finding.md` (the assessment) in this folder.

## 1. What changed

Two canonical files, sixteen edits, and their installed copies.

**`cognitive_harness/routelister/references/routelister.md`** (the discipline reference), thirteen edits:

| Section | Edit |
|---|---|
| §1.5 Vocabulary | one new term, **basis** — what a route was perceived *from*; distinct from *engagement* (what was later done with a route), which routelisting never records |
| §3.1 Sweep | a refinement note: a route's basis is a manifestation, so inventing its location or its words is inventing a manifestation; never invent a link, identifier, timestamp, transcript location, quotation, or inspection claim; precision beyond a bare path and any quotation require the source in view during the run; conversation material is citable only as an excerpt or as *not recovered*; when precision and honesty conflict, honesty wins |
| §4.2 LAYER 1 table | mode 7, **Basis-unrecoverable**: a material reliance with neither a usable pointer nor a preserved excerpt — keep the route, mark *not recovered* with the reason, count it, raise FLAG; never close the gap by invention |
| §4.5 Self-assessment | the FLAG line names mode 7 |
| §5 Output preamble | one paragraph: the map is written for a reader who did not see the run; every route must be recoverable from the artifact plus its accessible sources — a property of the artifact, not a reference to any consumer |
| §5.1 Route-Map contents | an optional map-level **Sources** list with per-map labels, for sources two or more routes rely on |
| §5.2 record schema | the Route Meaning row gains **Basis**; the worked example gains one `Basis:` line |
| **§5.2.3 The Basis entry** (new) | when an entry is required (material reliance; none when the basis is a file already in Touches); its shape (one entry per reliance, up to three lines — a ceiling, not a floor; after Touches; never leading the record); its parts — source as pointer or excerpt, exactly one of three marks (quotation · `paraphrase:` · `not recovered —` + reason), a verb-led role clause, `as-of` only for state claims; source-said is not source-true and the mark never adjusts Confidence; honesty governs precision; reuse via per-map labels, entries run route → source only; forward-only with consumer backfill of references; text-convention container under the Meaning-gaps promotion rule; four worked entries |
| §5.3 `_route.md` | one paragraph: the index holds no source content by default; a manifestation row MAY carry a *found-in* reference (a location, never a label, excerpt, or registry entry) and MUST carry one when the identity's basis is no longer reachable through a map named in the invocation log; unresolvable references are flagged stale, not deleted; the two existing boundaries hold |
| §5.4 Telemetry | one line: basis entries by kind, and routes needing none |
| Execute §3 Frame | the Basis entry named in the framing step |
| Execute §4 PERSIST | the optional Sources list in the map order |
| closing paragraph | Basis-unrecoverable added to the LAYER 1 list |

**`cognitive_harness/routelister/SKILL.md`** (the entry file), three edits: the Step 0 concept list names the Basis entry and its honesty rule; step 3's framing clause names it; the closing LAYER 1 list names mode 7. Step 5 (`## User Input` recorded verbatim at the top of every map) is unchanged — the pointer-into-User-Input form relies on it.

**Installed copies:** `~/.claude/skills/routelister/SKILL.md` and `~/.claude/skills/routelister/references/routelister.md` are byte-identical to the canonical files after the edit (verified with `diff -q`). Backups of the pre-edit canonical files sit beside them with a `.bak-20260918-123641` suffix.

**Not changed:** Priority, Confidence, and Essentiality keep their meanings (Confidence stays perceived formed-ness; the spec now says so again at §5.2.3). The route-type system, the concept-identity unit, sweep → individuate → frame, and the two-file contract are untouched. No third output file. No runner, protocol, or consumer is named anywhere in the new text. Existing maps are not rewritten.

## 2. Where the requirement lives

- The *principle* lives in the §5 preamble (the reader who did not see the run).
- The *rule* lives in §5.2.3 (the Basis entry), which every other edit points at.
- The *honesty floor* lives in the §3.1 refinement note, which §5.2.3 declares itself subordinate to.
- The *quality check* lives in §4.2 mode 7, §4.5's FLAG line, and §5.4's count.
- The *cross-run behaviour* lives in §5.3's reachability paragraph.
- The *term* lives in §1.5.

A reader who opens only §5.2.3 gets the whole convention; a reader who opens only §3.1 gets the constraint that governs it.

## 3. How a future output differs

The brief's own example could not be used: the map it cites lives on another machine, and reconstructing its missing message is forbidden by the brief itself. The difference is shown instead on this repo's own routes, where the only copy of a user's words is the map.

**Before** (a real record line from the 2026-07-08 spider-web harvest map, route R5):

```
WHY: the user named seed-generation failure a "big big problem" (wasted sources, missed breakthroughs); …
```

A later reader learns that the user said something like this, and nothing about where, in what words exactly, or what part is the author's gloss. The phrase appears in no other file of that inquiry.

**After** (the same reliance under §5.2.3):

```
Basis: user, in conversation — "big big problem" (establishes the goal's stakes; the turn exists in no
       project file — this excerpt is the only copy)
```

The reader now knows the source kind, that the two words are verbatim, that nothing more of the turn survives, and what the route uses them for. The WHY line keeps its reasoning and may say "per Basis 1" instead of restating the evidence.

**Where the basis is already on disk** (the 2026-07-03 traversal-memory map cites the user's "before anything"; the phrase is in that inquiry's `_branch.md`):

```
Basis: _branch.md § Source Input — "before anything" (establishes ordering)
```

A pointer, one line, no copying.

**Where nothing survives** (the shape the brief's MEOS-014 case would take, without inventing its content):

```
Basis: not recovered — the correction was given in conversation and not preserved; what is available
       is `## User Input ¶2`, which names the channel (supports the audience only)
```

The route stays; the map's verdict is FLAG; the count in Telemetry shows one not-recovered basis.

**Where nothing changes at all:** any route whose basis is a file path already in its Touches — the majority of routes on an artifact-fed map — carries no Basis entry. On this repo's 128 maps, every map already cites file paths, so most records would be unchanged.

## 4. How the behaviour was checked, and how the boundaries were preserved

**A dry-run map was written under the convention before the spec was worded**, on the most conversation-fed territory available (the material the change rests on, including the user's correction turns of 2026-09-18 that exist in no file): `devdocs/routelister/2026-09-18__provenance_convention_dry_run/routelister.md`, with its own `_route.md`. Nineteen Basis entries across nine routes: sixteen pointers, one excerpt (the only copy of a user turn), one paraphrase (a memory file), one not-recovered (the brief's own example map). The three-line ceiling was reached once and never exceeded. The verb-led role clause fit every entry. Per-map labels removed eleven repetitions of long paths. No entry needed to name another route. The map's verdict is FLAG, as the rule requires when a not-recovered basis exists. The wording of §5.2.3 was taken from what held there.

**The brief's seven validation scenarios**, each walked against a local analogue:

| # | Scenario (from `rl.md` §7) | Local analogue | Outcome under the new rule |
|---|---|---|---|
| 1 | a precisely identifiable document passage | any map's Touches path with a section (72 of 128 maps carry section-level anchors) | pointer, one line; no excerpt; no change to the record if the path is already in Touches |
| 2 | the exact User Input already saved in the artifact | the 2026-07-03 map's "before anything", present in `_branch.md` | a pointer into `_branch.md § Source Input` or `## User Input ¶n`; never re-copied |
| 3 | a user correction available only in the originating conversation | the 2026-07-08 harvest map's "big big problem"; the 2026-07-08 warm-pass map's "dont make changes yet"; this session's "up to 3 lines" correction (dry-run R2) | excerpt with speaker, quotation mark, role clause, and the only-copy note, within three lines |
| 4 | several routes relying on the same correction | the dry-run's `[S1]` (the brief) cited by eight routes | one Sources entry, eight `[S1]` citations; each entry still runs route → source; no route names another |
| 5 | a historical claim whose source document may later change | the 2026-07-08 harvest map's R4 cites `docs/canon/thinking_space_traversal_analogies.md` (edited 2026-07-13) and `devdocs/seeds/_seed.md` (edited 2026-07-19) — after the map | an `as-of` mark on the entry because the route's claim is about the document's state; no version tracking elsewhere |
| 6 | only an assistant paraphrase survives | the 2026-06-14 MVL-family map's "(bc the user asked to understand + ratify, not to build)" — a gloss, not a quotation | `paraphrase:` mark; never presented as the user's words; the role clause says what it supports |
| 7 | a later run updating the map while retaining source references | the dry-run's `_route.md`: no source content, the invocation log names the run and the map; a found-in reference would be required only if the identity were split or the map re-authored | reachability guaranteed through the log; no registry; stale-flag on unresolvable references |

**The acceptance question** — "Can a later reader recover the relevant source material, understand what it supports, and distinguish it from the route author's interpretation without remembering the original conversation?" — is answered yes for scenarios 1, 2, 4, 5, 7; yes for 3 and 6 to the extent the excerpt or paraphrase carries the material, with the mark making that extent explicit; and honestly no for the not-recovered case, which the rule makes visible rather than silent.

**No inflation of simple routes:** the rule adds nothing to a route whose basis is a file already in Touches. On the dry-run map every route needed an entry because the territory was a spec-drafting brief; on an artifact-fed map the count of routes needing none is expected to dominate, and §5.4 reports it.

**Boundaries preserved**, checked row by row against §1.3 and §6 of the brief: no selection or ranking (Basis is attributive text; nothing chooses); no execution sequencing (no entry may name another route; the Sources list is a compactness device); no inter-concept dependency graph (entries run route → source only; `_route.md` holds no source registry and a found-in reference is a fact about the identity's own manifestation); no action readiness or execution tracking (basis is what a route was perceived from, never what was done with it — the vocabulary row draws the line); no orchestration control-flow and no consumer named (every new sentence was checked for runner, protocol, process, and consumer nouns — the only occurrences are the prohibitions themselves); Priority, Confidence, and Essentiality unchanged in meaning (Confidence's formed-ness meaning is restated at §5.2.3; the limitation is carried by the mark and the FLAG, never by a rating).

## 5. The limitation that remains

When the original passage is gone — a conversation turn that was never preserved — the most a map can do is say so, state what *is* available, and carry the FLAG. Maps written before this rule keep their labels; a reader may backfill a reference by hand, but nobody may reconstruct what was said. The brief names this limitation itself, and the alternative — filling the gap by invention — is the outcome the §3.1 note exists to prevent.

## 6. Two corrections to the brief, for the record

- The brief asks to "strengthen the existing source-pointer mechanism" and to integrate with "that existing mechanism" for Guidance reasons. The spec had no source-reference vocabulary of any kind; Guidance pointers justify advice, not evidence. The change is an addition (a new kind of record content) that restores a role the first schema had (WHY as "territory-evidence", removed in a June rewrite). It is formally a refinement — one entry-type under the spec's existing text-convention rule, plus marks, one sentence, one failure mode — but it is not a strengthening of something that existed.
- The brief's example outputs are not on this machine. The diagnosis was confirmed on this repo's own maps instead: 14 of 128 maps attribute a route's content to something the user said, and in at least two the map is the only copy. The gap is modest on an artifact-fed corpus like this one and large wherever RouteLister runs on conversation.

## 7. Not done, by choice

- The pending four-part touch-up from the July-2 route-map audit targets the same file and is not bundled; it stays on the user's go.
- The "user-gated / at his word" marks (163 lines in 50 maps) are a separate question and were not touched.
- No existing map was edited.
