# Sensemaking — routelister provenance: regression or improvement?

## User Input

/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-09-17_22-46__routelister_provenance_regression_or_improvement/_branch.md

(Inputs consumed: `_branch.md` · `articulate_simple.md` · `surfacing.md` (81 items) · `articulate_warm.md` (committed anchor: spec record + boundaries · design rationale · canon consumer model · this repo's practice · sibling precedents; stance letter → spirit → practice; content-conflict resolvable). Codebase grounding: the RouteLister spec, `rl.md`, the design-history findings, the canon consumer passages, and the 128-map corpus, all as surfaced.)

---

## SV1 — Baseline Understanding

The brief asks for a bookkeeping upgrade: RouteLister's saved maps should cite their sources well enough that a later reader can check them. On first impression this is a modest, mostly harmless improvement — better citations — with one nagging worry: "recording where things came from" sounds like a recorder's job, and RouteLister's whole design history is a fight to keep it an enumerator and not a recorder (the routeman defect). So the baseline read is: probably an improvement, possibly a small regression toward record-keeping, with bloat and index-clutter as the practical risks. The user's three-clause question (requirements / existence / verdict) reads as one evaluation with a binary-ish answer expected.

---

## Phase 1 — Cognitive Anchor Extraction

### Constraints

- **C1 — the NOT-list (§1.3).** No selection, no execution, no descriptive model, no relevance-only tags, no goal-setting, no control-flow moves, no disposition decisions, no inter-concept dependency graph, no loop position.
- **C2 — self-containment (§1.4; re-fusion guard 05-30_09-07).** The spec references only its own inputs, unit, output, mechanism; never a runner, protocol, or process. Any new rule must be phrased in territory / source vocabulary.
- **C3 — `_route.md` bounds (§5.3; 05-30_11-23).** Within-identity only ("no field's value is a different concept-identity"); no process or control-flow state; routelisting reads and writes only its own file.
- **C4 — the two-file contract; no third file** (§5; 06-22_10-37 settled; rl.md §5B restates).
- **C5 — Confidence = perceived formed-ness (§1.5)**; rl.md §6 forbids repurposing it as a verification score.
- **C6 — perceive-by-enumerating; never invent (§3.1, §3.5 "perception governs").**
- **C7 — rl.md §5F never-invent list:** links/IDs, timestamps, transcript locations, exact quotations, inspection claims.
- **C8 — lightweight / ceiling-not-floor (06-21_23-26); simple routes not inflated (rl.md §7).**
- **C9 — route identity is unstable across runs** (§3.2 lean-to-split + re-individuation; 06-22_10-37 "route identity isn't stable across runs").
- **C10 — the traverse contract is fixed** (territory = inquiry artifacts; goal quoted from `_branch.md`; both files stay in root); the proposal does not touch it.
- **C11 — the brief's evidence is out of reach** (CA1); practice claims rest on this repo's corpus.
- **C12 — forward-only repair** (rl.md §7: do not invent missing messages to make old output look repaired).

### Key Insights

- **KI1 — every field in the route record points forward; none points back.** Direction/Goal/type (what and toward what), Move/Lands/Touches (what engaging does and touches), WHY (what the goal gains), P/C/E (how the route rates), Guidance (what to do), Depth-link (where its own depth is). The spec contains no source-reference vocabulary at all (surfacing A3). The brief's "existing source-pointer mechanism" does not exist under that description: Guidance pointers are prescriptive, and their `(bc …)` reasons justify advice, not evidence. The proposal therefore adds a **backward-facing content class** — the route's *basis* — to a record that has only forward-facing ones.
- **KI2 — but the record once had an evidence slot, and design history removed it.** The output-schema finding (05-30_00-13) defined WHY as "territory-evidence it's a goal-relevant route"; the June-22 WHY reframe turned it into a line of sight to the goal. The proposal partly **restores a displaced role** rather than inventing one.
- **KI3 — cross-session readability is already the designed use.** Canon: the enumerator is run by "a fresh, context-isolated session" (the eyes); "the meta-layer reads the loop's artifacts, not its cognitive internals"; the map is "consumed after the inquiry concludes"; the June-21 format finding designed the record for "a cold human [who] read it across later sessions — you were that cold reader." The brief's desired outcome is native to RouteLister's purpose, not foreign to it.
- **KI4 — the gap is real here, and practice is already halfway.** 27 of 128 maps carry conversation-style labels (65 lines). Four shapes: interpretive attributions ("the user asked to understand + ratify, not to build"), gating quotes ("PENDING — the user said 'dont make changes yet'", "at his word" ×9), user valuations ("'big big problem'"), and finding-internal labels ("11-27's SV6", "critique C2"). Authors already quote short user phrases verbatim — but without speaker-type, location, or paraphrase marking. The rule would regularize an existing habit more than introduce a new behaviour.
- **KI5 — the problem is territory-kind-dependent.** Sources enter three ways: as *files* in the territory (recoverable by path — every map already cites paths; 72 with section anchors), as *passages* ("a passage describing a space", §2.3; the surrounding conversation) which have no durable home, and as *external documents* that may change. The traceability gap bites hardest on conversation-fed and standalone runs and on **mid-pipeline user turns** — corrections given after `_branch.md` captured the original ask (the exact shape of the brief's MEOS-014 case: "the saved User Input already names #ai-operations… the missing provenance concerns the earlier correction").
- **KI6 — the harness already holds two opposite provenance postures plus one cross-run rule.** Surfacing's artifact is content-free (identifiers only; the reader re-reads the territory); the disciplines' `## User Input` copies the raw statement verbatim "so the artifact can be re-read against its source"; and traversal memory records "choices, not the territory — pointers, never copies (copies rot)". The proposal's A (pointer when one exists) sits with the first; B (excerpt when no pointer exists) sits with the second; and B does **not** violate the third, because the copies-rot argument presumes a durable original — a conversation turn has none, so the copy is the source's only persistence.
- **KI7 — the index was explicitly modelled on a library authority file** (05-30_00-13: "structurally a library 'authority file': a registry of Works, each linking to its own Manifestations"). Authority records natively carry **"sources consulted" citations per heading** (the cataloguing convention of recording the source in which the information for a heading was found). Provenance attached to an identity's own row is inside the model the design chose — an external reference point, not a self-referential one.
- **KI8 — honesty already has a native home on the perception side and needs one on the record side.** §3.1 forbids inventing items; a pointer or a quotation *is* a manifestation's location or text; inventing one is inventing a manifestation. rl.md §5F is the record-side twin of §3.1. The fabrication pressure is real for an LLM author told to "cite precisely" — so the never-invent clause has to dominate the precision clause, not follow it.
- **KI9 — "the source said X" and "X is true" are different facts, and only the first is RouteLister's.** The discipline perceives and prescribes; it does not verify. rl.md §5D's sentence is a restatement of enumerate-not-decide at the source level.
- **KI10 — the identity line is basis vs engagement.** Where a route was perceived *from* (its basis) is produced at perception time by the only component present — the enumerator — exactly the argument that gave RouteLister its own state file (05-30_11-23). What was *done* with a route (engagement, choice, outcome) belongs to routelog and traversal memory. A provenance rule that stays on the basis side sharpens the enumerator; one that drifts to who-did-what-when turns it into a recorder.
- **KI11 — the map has no cross-run label problem; the index does.** `routelister.md` is per-run: static once the territory concludes, re-authored on active ones — a per-map reference list regenerates with it. `_route.md` accumulates across runs where identities split and merge (C9); a *bare label* stored there can dangle. The house pattern for the index is stale-flag-not-delete with perception governing; a stored reference must be the reference itself (or a run-stamped pointer into a specific map), never a label alone.
- **KI12 — the proposal's cost has a measured precedent.** The last record change grew dense routes by roughly a quarter and short ones not at all (06-21's honest accounting), under the ceiling-not-floor rule. A source line per *material* reliance, shared by label within a map, and "no redundant capture" (rl.md §5A) keep this change in the same band.

### Structural Points

- **SP1 — record field classes:** Identity · Meaning · Reasoning · Attribution · Guidance · Depth-link — all forward-facing; the proposal adds a Basis class (or a Basis sub-line inside existing fields).
- **SP2 — the two files' roles:** map = per-run, regenerated, static after conclusion, consumer-annotated (✓, and the audit's proposed Appears-also-on); index = cumulative, within-identity, no process state, routelog stamps ↗ manifestation pointers into it.
- **SP3 — source kinds (project-wide, per the frame-exit enumeration below):** territory artifacts (paths) · the invocation's `## User Input` · conversation turns (user / assistant / third party; before or after `_branch.md`) · external documents (URLs; versioned) · prior run artifacts (findings; critique labels) · the loaded index's own prior rows (a re-confirmed identity's "source" is last run) · session memory.
- **SP4 — the three layers and the one-way dependency:** discipline (spec) ← usage (the runner calls it) ← orchestration (protocols). The provenance rule lives in the discipline and may name source *kinds*, never a caller.
- **SP5 — the consumer chain:** routelister writes → the eyes / meta-layer / a human reads later → routelog records engagement → traversal memory records choices with pointers → a future Selector weighs routes. Provenance sits at the write end.
- **SP6 — the quality frame:** LAYER 1 (operational, re-run-recoverable) is where a "basis unrecoverable" mode fits; LAYER 2 (identity-eroding) is where a "record-creep" risk fits; the verdict set already has FLAG.

### Foundational Principles

- **FP1** — enumerate; never select, execute, describe, or track ("one enumerator, two controllers").
- **FP2** — perception governs; draw from the territory; invent nothing (§3.1, §3.5).
- **FP3** — write-once-read-many; optimize the record for the cold reader (06-21).
- **FP4** — log choices, not territory; pointers, not copies — *where a durable original exists* (06-22_13-58).
- **FP5** — stand-alone artifacts: a reader picks up from the artifact alone (folder_based 287; conclude's read-ONLY test; the canon-self-containment memory).
- **FP6** — small fixed vocabulary over an open field; add record content as a text convention first, promote to a typed field only when a consumer needs structured extraction (Meaning-gaps promotion rule).
- **FP7** — asymmetric failure: information-loss-in-the-dark is the worse failure (§4.4). A route whose basis is gone is such a loss.

### Meaning-Nodes

- **MN1 — basis vs engagement** (provenance of perception vs record of action).
- **MN2 — pointer vs copy** (decided by whether a durable original exists).
- **MN3 — source-said vs source-true.**
- **MN4 — refinement vs addition vs restoration** (the brief says refinement; the record says addition; the design history says restoration; the corpus says regularization).
- **MN5 — regression** = trips an identity boundary (C1–C3, LAYER 2) or breaks a design guarantee (compactness, idempotency, ceiling-not-floor, consumer-filled ✓) or induces dishonesty (fabrication pressure); **improvement** = serves the designed cold reader without doing any of those.

### Meta-inspection after SV2 (H4 concept names, H5 motivating examples)

- H4: "basis" is the brief's own word (§4 "the material basis of a route") — user-language aligned. "Source register" and "Provenance-loss" are this analysis's coinages; treated as *options*, not commitments (naming belongs to the Structural layer).
- H5: the motivating example (MEOS-014) is one case; the corpus shows four shapes plus changing-document cases — the pattern is wider than the example (tested again at Phase 3, A7).

### SV2 — Anchor-Informed Understanding

The proposal is not a citation tidy-up. It adds a **backward-facing** class to a record that only points forward — while restoring a role the record once had (WHY as territory-evidence) and regularizing a habit the corpus already shows. Its purpose (a reader who never saw the conversation) is the reader RouteLister was designed for. The existential question sharpens from "is recording a recorder's job?" to "**which** recording": recording the *basis* of perception is the enumerator's (only it can); recording *engagement* is a controller's. The practical risks narrow to three: excerpt bloat, fabrication under a precision demand, and dangling labels in the cumulative index.

---

## Phase 2 — Perspective Checking

**Technical / Logical.** Where each behaviour lands: A → a shared per-map reference list plus a one-line citation per material reliance (pointer forms: path + section; URL + section; a pointer into `## User Input` / `_branch.md`); B → an excerpt entry in that list (speaker or source type + the quoted sentence + one line of context); C → a role clause per citation in the Touches-qualifier shape ("(establishes the audience)", "(corrects the earlier reading)"); D → a quote-vs-paraphrase mark and an explicit "original not recovered" mark; E → an "as-of" date/version only when the route's claim is about the source's *state*; F → a never-invent clause beside §3.1, one LAYER 1 mode ("basis unrecoverable" — a route materially relies on a source with neither a usable pointer nor a preserved excerpt) that yields FLAG, and one telemetry count; G → labels reused within the map; the index row carries the reference itself on the manifestation, never a bare label. *New anchor:* the change is six local edits plus one wrapper section — the same size class as the Essentiality change.

**Human / User.** Today's reader meets "at his word" and cannot recover the word; nine such gating routes exist in this repo. After: the gate is quoted, attributed, and typed. Cost to the author: one line per *material* source; zero for routes whose basis is already a path in Touches. *New anchor:* the user is both the author's principal and the map's cold reader months later — the June-21 finding recorded exactly that experience.

**Strategic / Long-term.** The cumulative concept-map is "the navigation substrate"; the SUSTRALL plan has an isolated session reading maps and a Selector "calibrated against recorded human rationales". A Selector that cannot see a route's basis cannot weigh it; the atlas converter already parses maps with honesty counters. *New anchor:* provenance is upstream of the era-goal's instruments — and the promotion rule (text first) keeps the door open for a parseable field later.

**Risk / Failure.** (1) *Record-creep:* the rule drifts from "where perceived" to "who said what, when, and what happened" — a controller's organ; guard: basis only, never engagement. (2) *Bloat:* excerpt dumping; guard: proportionate + shared label + no redundant capture. (3) *Fabrication:* an LLM author asked for precise IDs invents them — the best-known citation failure; guard: only pointer forms the author actually holds; else excerpt; else "not recovered" + FLAG; the never-invent clause outranks the precision clause. (4) *Index drift:* labels reassigned across runs; guard: references not labels in `_route.md`. (5) *Confidence contamination:* a "verification score" leaks into formed-ness; guard: separate mark. (6) *Retroactive repair:* the temptation to "fix" old maps by inventing what was said; guard: forward-only, consumer backfill at most (as with ✓). *New anchor:* risk (3) is the only one that gets *worse* with a naive version of the fix — precision without a dominant honesty clause is a regression.

**Resource / Feasibility.** Spec edits in ~6 places of one reference file plus one line in the entry file; the installed copy is a byte copy; no runner, protocol, or conclude change; other projects inherit at their next run; no existing map is touched. The seven validation scenarios all have local analogues in the corpus (a path-based route; a User-Input-named goal; an "at his word" gate; several routes gated on one correction; routes citing canon files that changed after the map — e.g. maps from June cite canon edited in July; a paraphrase-only attribution; an active-territory re-run). *New anchor:* validation can be run against this repo's own cases without the brief's example.

**Ethical / Systemic.** The never-invent rule is the harness's standing honesty guard (the verify-before-assert memory; seed_harvester's REQUIRED source-support) applied to citations; "source-said ≠ source-true" protects against laundering an interpretation as an instruction. Systemically the change aligns RouteLister with the harvester's provenance floor. *New anchor:* consistency across the harness is itself a reason — RouteLister is currently the only artifact-writing discipline with no provenance rule of any kind.

**Definitional / Internal Consistency.** Against the NOT-list, row by row: selection (no); execution (no); descriptive model (a basis line says where a route was perceived from, not how the territory works — no); relevance-only tags (no); goal (no); control-flow (no); disposition (no); **inter-concept graph** — a shared source cited by several routes is a fact about sources, not an edge between routes, and it is no more a dependency than two routes today Touching the same file (no — provided citations run route → source and never route → route); loop position (no). Self-containment: source *kinds* (path, URL, passage, message) are territory vocabulary; the `## User Input` section is RouteLister's own artifact; nothing names a caller (holds). **The reverse check — does the definition contradict itself?** Two internal gaps: (i) §3.1 says routes are *perceived* from the territory and §1.2 calls a manifestation "an artifact-level appearance", yet the record may carry routes whose appearance is unrecoverable — a claim of perception with no perceivable object; (ii) §5's record is designed for the cold reader (FP3) yet permits content only the writer can decode. The proposal closes both gaps. *New anchor:* the strongest case for the change is internal to the spec, not imported from the brief.

**Definitional / Frame-exit Completeness** — gating fires: "source" is inherited from the brief and used across ≥2 values in this inquiry's own structures (document / conversation / User Input / external / paraphrase).
1. *Existence enumeration* (TYPE / LAYER / AGENT / TIME): territory artifacts · the invocation's `## User Input` · conversation turns by the user, the assistant, or a third party, before or after `_branch.md` · external documents that change · prior artifacts and their internal labels (finding sections, critique items) · **the loaded index's own prior rows** (LAYER: a re-confirmed identity's basis is partly "last run") · **session memory** (AGENT/LAYER: a route can rest on a memory-recalled fact).
2. *Role assessment:* the loaded-index case is in frame (G covers it: a re-confirmed route's basis is its prior manifestation, already a within-identity pointer). Session memory is out of the brief's frame but is a genuine source kind here — **re-locate**, not exclude: it is another "passage" source (speaker/source type = memory file; pointer = the memory file path). Mid-pipeline user turns are the load-bearing excluded referent: in traverse runs the *original* ask is on disk (`_branch.md` Source Input) but later corrections are not — this is where B is operative even inside the runner.
3. *Verdict rigor* on "the traverse contract is unchanged": strongest counter — the runner could capture mid-pipeline turns itself, making B unnecessary. It fails structurally: the runner is absent on standalone runs (the standalone-owns-its-state argument), and the discipline cannot rely on a caller it may not have (§1.4). The contract stays unchanged; B stays in the discipline.
4. *Residual:* is there a frame-exit concern the categories missed? The assistant's *own prior turns* as a source (an orchestrator refinement) — captured under conversation turns by the assistant, with D's paraphrase marking doing the work. Recursion terminates.

**Phase / Calibration-State** (required: the rule's value is phase-dependent). Does the rule depend on calibration the project has? No — it is behaviour, not a threshold. Its *value* is phase-dependent: today the readers are the user and the same model family; when the eyes and a Selector exist it becomes load-bearing. Early-stage default: adopt as a text convention (cheap, reversible), measure adoption in the next audit, promote to a typed field only on a consumer's need (FP6). The audit's epistemic ceiling applies: the same model family would author and check the first maps under the rule — the daily-reader verdict is the external check.

**Meta-inspection after SV3** — H1 (candidate set): the candidates are the six behaviours plus the fix-shape; they are not "the same thing" — A/B are capture, C/D are marking, E is state, F is honesty, G is reuse; no convergence to merge. H2 (frame scope): handled above. H3 (question framing): the user's "regressions or improvements" presumes a grading rule — supplied as MN5. H7: handled above.

### SV3 — Multi-Perspective Understanding

Three shifts. First, the case for the change is **internal to the spec** — perceive-by-enumerating without a recoverable basis, and a cold-reader record with writer-only content, are gaps the spec already has; the brief merely names them from outside. Second, the **one behaviour that can regress RouteLister is the honesty clause's ordering**: precision demanded without a dominant never-invent rule makes an LLM author fabricate; the fix must lead with F. Third, the **operative case inside this harness is the mid-pipeline correction** (and the standalone conversation-fed run), not the original ask — which is already on disk. The existential reading has stabilized to *basis vs engagement*; the "recorder" worry is real only on the engagement side, which the proposal does not touch.

---

## Phase 3 — Ambiguity Collapse

#### Ambiguity A1: Is recording provenance within RouteLister's identity, or a controller's job?
**Strongest counter-interpretation:** Recording is recording. The house already has routelog and (planned) traversal memory for records; "one enumerator, two controllers" says the enumerator never tracks. Give provenance to the recorders and keep the map pure.
**Why the counter fails (structural grounds):** routelog records what was *done* with a route after enumeration; it has no access to what the enumerator *perceived a route from* — only the perceiving run holds that, at perception time, and on standalone runs nothing else is present (the same mechanism that forced RouteLister to own its state file). Provenance is a property of the perception act, not of the engagement; no downstream component can produce it.
**Confidence:** HIGH.
**Resolution:** the basis of a route (where it was perceived from) is inside the enumerator's identity; the engagement of a route (what was chosen/done/found) stays outside.
**What is now fixed?** the identity line: *basis in, engagement out*.
**What is no longer allowed?** any provenance rule that records who acted, when, or with what outcome; any wording that names the runner or a log.
**What now depends on this choice?** the reading of every behaviour A–G (each must be a basis statement); the LAYER 2 guard (record-creep = crossing to engagement).
**What changed in the conceptual model?** "recorder vs enumerator" became "which side of perception".

#### Ambiguity A2: Is the proposal a refinement of an existing mechanism, or an addition?
**Strongest counter-interpretation:** It is just tightening the Guidance reasons — a `(bc the user said X)` already appears in the corpus; make it precise and you are done.
**Why the counter fails (structural grounds):** the spec has no source vocabulary at all (grep-verified); Guidance reasons justify *advice*, not evidence, and are absent on routes without pointers; a reason clause cannot carry the five reader-determinables (what source, which passage, what it says, what it supports, which part is interpretation) without becoming a citation. The mechanism the brief describes must be created.
**Confidence:** HIGH.
**Resolution:** at record level an **addition** (a backward-facing basis class); at design-history level a **restoration** (WHY's displaced territory-evidence role); at practice level a **regularization** (the short-quote habit).
**What is now fixed?** "requires" = introduce a source-reference convention where none exists.
**What is no longer allowed?** describing the change as "strengthening the existing source-pointer mechanism" — there is none; nor as a mere reason-clause edit.
**What now depends on this choice?** the size estimate (a wrapper section + record line + quality mode, not a wording tweak); the report's "what changed" section.
**What changed in the conceptual model?** the brief's own mechanism claim is corrected; its diagnosis stands.

#### Ambiguity A3: Does preserving excerpts (B) violate "log your choices, not the territory"?
**Strongest counter-interpretation:** Copies rot; the original conversation is the territory; point at the transcript instead of copying the sentence.
**Why the counter fails (structural grounds):** the copies-rot argument presumes a durable original the pointer can resolve to. A conversation turn in this harness has no accessible location in the project record (session logs are tool-local, not project artifacts; the brief itself admits transcript pointers only "with an accessible location"). Where no original persists, the copy is not a denormalized duplicate — it is the only instance. Where an accessible original *does* exist (a message permalink), A already prefers the pointer.
**Confidence:** HIGH.
**Resolution:** B is the boundary case FP4 did not cover — copy only what has no durable home; pointer everything else.
**What is now fixed?** pointer-vs-copy is decided by durability of the original, not by taste.
**What is no longer allowed?** copying passages that are already recoverable by path (rl.md §5A "no redundant capture" is the same rule from the other side); treating B as a licence to paste conversation.
**What now depends on this choice?** proportionality (one sentence + speaker + context); the validation scenarios 3, 4, 6.
**What changed in the conceptual model?** the house doctrines are reconciled rather than in conflict.

#### Ambiguity A4: Is a shared source, cited by several routes, an inter-concept edge?
**Strongest counter-interpretation:** If R3, R7 and R9 all cite correction X, a reader can derive that they stand or fall together — the register builds the dependency graph by the back door.
**Why the counter fails (structural grounds):** what the enumerator records is route → source; a route → route relation is never a stored value. Derivability by a consumer is not recording by the discipline — exactly as two routes today Touching the same file lets a reader infer coupling without the map recording an edge. The prohibition is on stored edges, and none is stored.
**Confidence:** HIGH.
**Resolution:** shared references are legal; citations must stay route → source.
**What is now fixed?** the direction of every citation.
**What is no longer allowed?** any "also relied on by R7" back-reference on a route; any ordering or gating text derived from shared sources.
**What now depends on this choice?** G's reuse mechanism; the LAYER 2 check wording.
**What changed in the conceptual model?** reuse is a compactness device, not a structure.

#### Ambiguity A5: Should a provenance limitation lower Confidence?
**Strongest counter-interpretation:** A route whose basis cannot be shown is less formed; folding the limitation into Confidence keeps the record lean.
**Why the counter fails (structural grounds):** Confidence rates the *concept's* formed-ness (how well the target is understood — its reasoning is the Meaning-gaps list); recoverability rates the *record's* traceability. They vary independently: a canonical, well-understood concept can be cited from memory with no pointer (high Confidence, low recoverability); a half-formed concept can be perfectly sourced. Fusing them destroys information the index and the Route Index rely on.
**Confidence:** HIGH.
**Resolution:** a separate, scoped mark (route-level "basis: not recovered" and the map-level FLAG), never a Confidence adjustment.
**What is now fixed?** the P/C/E vocabulary is untouched.
**What is no longer allowed?** any verification score; any Confidence text mentioning sources.
**What now depends on this choice?** the LAYER 1 mode's corrective (re-run or mark, not re-rate).
**What changed in the conceptual model?** two orthogonal axes made explicit.

#### Ambiguity A6: Where do reusable references live across runs (G)?
**Strongest counter-interpretation:** Put a global source registry in `_route.md` so every run can reuse it and labels never diverge.
**Why the counter fails (structural grounds):** `_route.md` would then hold a second registry beside identities — a registry of sources, keyed by label, that identity rows point *into* — which (i) makes an identity row's value something other than its own manifestation, brushing "no field's value is a different concept-identity" in spirit, (ii) becomes a growing database with no stale-flag mechanism of its own, and (iii) is exactly the side-door through which shared-source coupling would be *stored*. Labels are also unnecessary in the index: a manifestation row can carry the reference itself.
**Confidence:** MED-HIGH (the counter has some merit for very large projects; the house pattern still argues against a second registry until a consumer needs it — FP6).
**Resolution:** labels are per-map (regenerated with the map); the index stores the reference itself on the identity's manifestation (a pointer, or a run-stamped pointer into a specific map's list), never a bare label; stale-flag-not-delete applies to references whose target no longer resolves.
**What is now fixed?** two homes with different lifetimes.
**What is no longer allowed?** a label-only citation in `_route.md`; a source registry as a third structure.
**What now depends on this choice?** validation scenario 7; the fix-shape's sixth edit (re-worded from "labels inside manifestations" to "references inside manifestations").
**What changed in the conceptual model?** the "dangling label" problem dissolves by construction rather than by a merge step.

#### Ambiguity A7 (specific-vs-pattern): Is MEOS-014 the whole problem?
**Strongest counter-interpretation:** The brief is about one map in one project; fix that map's failure shape (an unattributed correction) and stop.
**Why the counter fails (structural grounds):** the corpus here shows four label shapes — interpretive attributions, gating quotes, user valuations, finding-internal labels — plus the changing-document case; the finding-internal-label shape ("critique C2", "11-27's SV6") is a *pointer-precision* problem, not an excerpt problem, and would be untouched by a correction-only fix. The brief's own seven scenarios span the wider pattern.
**Confidence:** HIGH.
**Resolution:** the object is the pattern (all source kinds in SP3), not the example.
**What is now fixed?** the fix must cover pointer precision *and* excerpt preservation *and* marking.
**What is no longer allowed?** a rule scoped to "user corrections".
**What now depends on this choice?** the validation set; project-agnosticism (rl.md §8).
**What changed in the conceptual model?** the example became one shape among five.

#### Ambiguity A8: What makes a change a regression rather than an improvement here?
**Strongest counter-interpretation:** Any added content is a regression against the lean identity ("bloat"); only removals improve RouteLister.
**Why the counter fails (structural grounds):** the June-21 audit measured that structured content (Move/Lands/Touches) *raised* readability at bounded cost, and the July-2 audit found the added fields "earning their keep" by variance and use; leanness is a property of the *index*, and clarity of the *records*. Growth per se is not the regression test.
**Confidence:** HIGH.
**Resolution (the grading rule, MN5):** regression iff it trips an identity boundary (C1–C3; LAYER 2 Selection-creep / Process-coupling / Manifestation-dump; a new "record-creep") **or** breaks a design guarantee (compactness of the index; idempotency-at-fixpoint; ceiling-not-floor; consumer-filled ✓) **or** induces dishonesty (fabrication pressure). Improvement iff it serves the designed cold reader without doing any of those.
**What is now fixed?** the yardstick.
**What is no longer allowed?** grading by size or by the brief's own claims.
**What now depends on this choice?** the per-behaviour verdicts (SV5).
**What changed in the conceptual model?** the verdict has a checkable rule.

#### Ambiguity A9 (load-bearing concept test — "basis vs engagement"): Is this the project's distinction or an external default?
**Strongest counter-interpretation:** The pair is a coinage of this analysis; the project's own vocabulary is "enumerate vs decide" and "map vs log" — a third pair is a neologism.
**Why the counter fails (structural grounds):** the pair is the *same* line the project already draws, applied at the record: "map vs log" (06-22_10-37) separates the field of routes from the journey; "log your choices, not the territory" (06-22_13-58) puts *outcomes and choices* in the log and *the territory* in artifacts. A route's basis is territory-side (what was perceived); its engagement is log-side. The user's word "basis" comes from the brief; "engagement" is routelog's own term ("route-engagement recorder"). No new vocabulary is introduced.
**Confidence:** HIGH.
**Resolution:** keep the pair, phrased in the project's words (basis = territory-side; engagement = routelog's term).
**What is now fixed?** the existence answer's vocabulary.
**What is no longer allowed?** inventing a new term for the line.
**What now depends on this choice?** the finding's plain-language statement.
**What changed in the conceptual model?** nothing structural; the naming is grounded.

#### Ambiguity A10 (hidden assumption): Does the spec change repair existing maps?
**Strongest counter-interpretation:** A re-run on a concluded territory could regenerate old maps under the new rule.
**Why the counter fails (structural grounds):** the missing material (the conversation turns) is gone; a re-run can only re-perceive the *files*, so the regenerated map would carry the same "not recovered" limitation — or, worse, invite invention (rl.md §7's explicit ban). The map over a concluded territory is a static piece by design; consumers may annotate it, the enumerator does not rewrite it.
**Confidence:** HIGH.
**Resolution:** forward-only; old maps keep their labels; a consumer may backfill a reference by hand as it ticks ✓.
**What is now fixed?** the rule's temporal scope.
**What is no longer allowed?** "repairing" old maps with reconstructed quotes.
**What now depends on this choice?** the remaining-limitation statement in the report.
**What changed in the conceptual model?** the change is a guarantee about *future* maps.

#### Ambiguity A11 (hidden assumption): In this harness, are conversation sources recoverable by pointer?
**Strongest counter-interpretation:** Every Claude Code session writes a transcript; point at it.
**Why the counter fails (structural grounds):** the transcript is a tool-local file outside the project record, unversioned, per-machine, and not readable by the canon's consumers (the eyes read `finding.md` and the concept-map, not tool logs); the brief admits transcript pointers only with an accessible location, which this project does not maintain. Pointer-form therefore covers files, `## User Input`, `_branch.md`, and URLs; conversation turns fall to B.
**Confidence:** HIGH.
**Resolution:** in this harness B is the operative clause for standalone/conversation-fed runs and for mid-pipeline turns; A covers the rest.
**What is now fixed?** which clause fires where.
**What is no longer allowed?** citing a session log path as if it were a project artifact.
**What now depends on this choice?** validation scenarios 3, 4, 6.
**What changed in the conceptual model?** the "pointer into User Input" form is the common case in traverse runs; the excerpt form is the common case in standalone runs.

**Load-bearing concept tests, remaining:** "regression" (A8 — project property, not external default: the yardstick is built from the spec's own boundaries and the audits' own measures); "cold reader" (domain terminology from 06-21, user-language aligned — the user is the reader); "Provenance-loss / basis unrecoverable" (a coined mode name — left open for the Structural layer; the *behaviour* is fixed, the *label* is not).

### SV4 — Clarified Understanding

What is now clear: the change asks RouteLister to show the **basis** of each route — a backward-facing addition to a forward-facing record, restoring a role the record once had and regularizing a habit the corpus already shows. It is inside the enumerator's identity because only the perceiving run can produce it; it stays inside as long as it never crosses into engagement. Pointers go where a durable original exists; excerpts go where none does; every citation runs route → source; the limitation mark is separate from Confidence; per-map labels are regenerated with the map, and the index keeps references on manifestations. The grading yardstick is the spec's own boundaries plus the audits' guarantees plus honesty. What is no longer viable: reading the change as a Guidance-reason tweak; giving provenance to routelog; a source registry in `_route.md`; a verification score; repairing old maps; scoping the rule to user corrections; grading by size.

---

## Phase 4 — Degrees-of-Freedom Reduction

**Fixed variables**
- Object of the assessment: the pattern (five source kinds), not the example.
- Identity line: basis in / engagement out.
- Capture rule: pointer where a durable original exists; proportionate excerpt where none does; no redundant capture.
- Citation direction: route → source only.
- Limitation mark: separate from P/C/E; FLAG-scoped.
- Two homes: per-map labels (regenerated); index references on manifestations (no label-only, no second registry).
- Temporal scope: forward-only.
- Honesty precedence: never-invent outranks precision.
- Yardstick: MN5.
- Contract: traverse, conclude, routelog untouched; installed copy = byte copy.

**Eliminated options**
- "Strengthen the existing source-pointer mechanism" as a literal plan (none exists).
- Provenance in routelog / traversal memory.
- A third output file; a source registry inside `_route.md`.
- Confidence as a verification score.
- Transcript-path citations in this harness.
- Reconstructing old maps.
- Version tracking as a general requirement (E stays a criterion: as-of only when the claim is about the source's state).

**Viable paths (the Structural layer's choices — not decided here)**
- Container: a per-map "Sources" list with labels + one citation line per record, **or** inline citations only (labels only when a source is cited ≥2 times). Both satisfy A–G; the list is the audit-friendly form; text convention first (FP6).
- Role clause: Touches-qualifier shape "(establishes …)" — fixed in shape, free in wording.
- Mode name and telemetry line: free.
- Whether the same convention should be offered to the other artifact-writing disciplines: a harness-level route, out of this object's scope.

### SV5 — Constrained Understanding

The solution space is one-dimensional in the places that matter and free only in naming and container. Per behaviour, against the yardstick:

| Behaviour | Verdict | Condition that keeps it an improvement |
|---|---|---|
| A specific references | improvement | pointer forms limited to what the author holds; no redundant capture |
| B excerpt when no pointer | improvement | only-copy case; one sentence + speaker/source type + one line of context |
| C role of the source | improvement (native shape) | Touches-qualifier form; never a route → route statement |
| D source-said vs interpretation | improvement | quote / paraphrase / not-recovered marks; no truth claim |
| E changing sources | improvement **as a criterion** | as-of only when the claim is about the source's state; regression if it becomes tracking |
| F honesty + scoped flag | improvement, **and the load-bearing one** | must outrank A's precision; one LAYER 1 mode → FLAG; routes kept |
| G reuse across map and index | improvement in the map; **regression risk in the index** | per-map labels; index carries references on manifestations; no second registry |

Aggregate: an improvement with three guarded risks (B proportionality, F ordering, G index shape) and one correction to the brief's self-description (addition, not refinement). The fix-shape's six edits survive with one re-wording (edit six: references, not labels, inside manifestations) and one re-ordering (the honesty clause first).

---

## Phase 5 — Conceptual Stabilization

**Interpretation.** The brief asks RouteLister to make each route's *basis* recoverable by a reader who was not in the room. That reader is the one RouteLister was built for (the context-isolated eyes; the meta-layer that reads artifacts; the cold human of the June-21 finding). The spec never said how a route's basis is shown, and the design history had moved the one evidence-shaped field (WHY) to a goal line-of-sight — so the record points only forward, and authors improvised: paths (good), short quotes (half-good), attributions and "at his word" (unrecoverable). The change closes an internal gap of the spec: perceive-by-enumerating now gets its record-side counterpart — show what you perceived it from.

**Problem structure.** Five source kinds × two capture modes (pointer / excerpt) × three marks (quote / paraphrase / not recovered) × one role clause × one limitation flag, with two homes of different lifetime (map, index) and one identity line (basis, not engagement). The grading rule is the spec's own boundaries plus the audits' guarantees plus honesty.

**Existence.** RouteLister's identity is *sharpened*, not changed: still the enumerator, now one whose routes carry their basis. The only way the change could erode it is by drifting to engagement (who acted, when, with what outcome) or by storing a second registry; both are avoidable by wording. The authority-file model the index was built on already carries "sources consulted" per heading — the change is inside the model the design chose.

**Action framework (for the downstream disciplines, not an implementation).** Decompose the requirement into: (1) the honesty clause and mode (first); (2) pointer forms and the no-redundancy rule; (3) the excerpt form and proportionality; (4) marks and the role clause; (5) the state criterion; (6) the two homes and the index rule; (7) validation against local analogues of the seven scenarios; (8) the report items.

**Accommodation trigger:** not fired — the frame-exit and calibration perspectives *extended* the model (mid-pipeline turns; memory as source; text-first adoption) without forcing revisions to its structure.

### SV6 — Stabilized Model

**What the proposal requires.** Introduce, in the RouteLister spec, a source-reference convention that does not yet exist: a backward-facing *basis* for each route that materially relies on an instruction, correction, observation, definition, or premise — as a pointer when a durable original exists (path + section; URL + section; a location inside the artifact's own `## User Input` / the inquiry's `_branch.md`), as a proportionate excerpt with speaker or source type when none does; each citation carrying its role in the Touches-qualifier shape and marked as quotation, paraphrase, or not-recovered; an as-of mark only when the route's claim is about a source's state; a never-invent clause beside §3.1 that outranks the precision demand, with one LAYER 1 mode yielding FLAG and one telemetry count; per-map labels for reuse, and in the index the reference itself on the identity's manifestation, never a bare label and never a second registry. At run level: one line per material reliance, nothing for routes whose basis is already a path in Touches. At ecosystem level: a byte copy to the installed skill; the runner, conclude, routelog untouched; old maps untouched.

**What it means for RouteLister's existence.** Nothing about what RouteLister *is* changes; what it *shows* does. The identity line is basis (in) versus engagement (out): only the perceiving run can say where a route was perceived from, so recording that is the enumerator's own act — the same logic that gave it its own state file — while what was chosen or done stays with the logs. The change closes two gaps internal to the spec (a claim of perception with no perceivable object; a cold-reader record with writer-only content) and returns to the record a role its first schema had. The one existential risk is wording that drifts to who-did-what-when, or an index that grows a source database.

**Regressions or improvements.** Improvement — aggregate and per behaviour — under three guards: proportionate, only-copy excerpts (B); the honesty clause dominant over precision (F), because a precision demand without it is the one version of the fix that would make RouteLister *worse* (fabricated pointers); references-not-labels in the index (G). One correction to the brief: it is an addition that restores a displaced role, not a strengthening of an existing mechanism. One limitation the change cannot remove: past maps stay as they are, and a route whose original passage is gone can only say so.

**How SV6 differs from SV1.** SV1 saw a citation tidy-up with a vague "recorder" worry and bloat as the main risk. SV6 sees an identity-sharpening addition whose strongest justification is internal to the spec, whose only real regression path is the ordering of honesty and precision, whose operative case in this harness is the mid-pipeline correction and the standalone run rather than the original ask, and whose existence question resolves on a line the project already draws (map vs log), now applied at the record.

**OPEN (explicitly not resolved here):** the container (a per-map list vs inline-only citations) and the mode's name — Structural-layer choices; whether the same convention should be offered to the other artifact-writing disciplines — a harness-level route; whether this project should ever maintain an accessible transcript location — out of scope.

---

## Saturation Telemetry

- **Perspective saturation:** 9 perspectives; 7 produced new anchor *types* (Technical: placement; Human: the user-as-cold-reader; Strategic: the Selector; Risk: fabrication as the one worsening path; Definitional-internal: the spec's own gaps; Frame-exit: mid-pipeline turns, memory, the loaded index; Calibration: text-first adoption; Self-reference/external: the authority-file precedent); Ethical and Resource mostly confirmed. Saturation reached at the last two.
- **Ambiguity resolution ratio:** 11 identified; 10 resolved HIGH, 1 MED-HIGH (A6); 3 items left OPEN by design (container, naming, harness-wide adoption).
- **SV delta:** large — the model moved from "citation tidy-up + recorder worry" to "identity-sharpening addition with an internal justification, one ordered regression path, and a resolved existence line".
- **Anchor diversity:** 12 constraints, 12 insights, 6 structural points, 7 principles, 5 meaning-nodes; sourced from spec, design findings, canon, corpus, sibling specs, and one external convention (authority-file source citations).

## Failure-mode notices

- **Status quo bias:** checked both ways — the spec was not protected (two internal gaps named); the brief was not deferred to (its mechanism claim corrected).
- **Premature stabilization:** ≥3 perspectives produced surprises (Risk, Definitional-internal, Frame-exit); no clarity arrived before Phase 2.
- **Anchor dominance:** removing "one enumerator, two controllers" leaves the model standing on the cold-reader design premise, the no-invent rule, the spec's internal gaps, and the authority-file model.
- **Perspective blindness:** the uncomfortable perspectives were checked — "Trojan-horse recorder" (Risk), "the brief's author mis-read the spec so its diagnosis may be wrong" (independent corpus evidence), "the only reader remembers anyway" (nine unrecoverable gates in this repo).
- **Clean resolution trap:** A3's only-copy resolution was tested against the transcript counter on structural grounds; A6 carries MED-HIGH honestly.
- **Self-reference blindness (H8):** the evaluation and its object share the thinking-discipline vocabulary; external grounding used: the corpus counts, the brief's independent diagnosis on another project, the known LLM citation-fabrication failure, and the library authority-file convention the index was modelled on.
- **Meta-inspection H6 (model fit):** refinements, not patches — no accommodation trigger.
