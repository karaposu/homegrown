## User Input

`devdocs/inquiries/2026-05-30_00-13__routelister_output_artifact_schema/_branch.md` (prior output: surfacing.md; workspace — routeman §5.4/§5.5/§5.8 + chain). Author routelister's output FORM: OT1 route-record schema, OT2 saved-file wrapper, OT3 identity-set/index state-file.

---

# Structural Sensemaking — Routelister's Output-Artifact Schema

## SV1 — Baseline Understanding

Initial read: this is a structural re-derivation — walk routeman's §5.4 fields through the loop-bound test (carry / re-derive / drop), replace Movement-Type with the {grain, kind, engagement-type} signature, drop the loop-contaminated trio (Status-values, Blocked-By, Unlocks — Unlocks being the forbidden inter-concept graph), add the within-concept depth-link, then re-derive the §5.5 wrapper and the §5.8 state-file. The output is two artifacts (route-map + identity-set/index), mirroring routeman's routeman.md + _route.md. The trap: blindly carrying §5.4 (re-importing the loop-contamination) or letting a field sneak the inter-concept graph back in.

---

## Phase 1 — Cognitive Anchor Extraction

**Constraints:**
- C1 — Structural layer (the form). Meaning + process settled (inherited); this run gives them a *place to land* (fields), not a re-design.
- C2 — Every routeman field must be explicitly classified (carry / re-derive / drop) via the `18-17` loop-bound test — not blindly carried.
- C3 — No field may encode inter-concept relations (NOT-list); the within-concept depth-link is the only cross-identity-ish field, and it points to the identity's OWN depth.

**Key Insights:**
- K1 — **The route-record, field-by-field (the §5.4 re-derivation):**
  - *Route Identity:* **Direction** CARRIES (re-derived: the concept-identity named as a direction toward the goal); **Goal** CARRIES (what engaging it achieves); **Movement-Type** → REPLACED by the 3-field **type-signature {grain, kind, engagement-type}** (`18-17`).
  - *Route Meaning:* **Movement** RE-DERIVES (what engaging this concept does, territory-relative — drop "current cycle state"); **Unlocks** DROPS (it is the forbidden inter-concept dependency edge — `18-17` NOT-list).
  - *Route Reasoning:* **WHY** CARRIES (territory-evidence the concept is a goal-relevant route); **why-this-might-be-important** CARRIES (capped, territory-anchored).
  - *Route Attribution:* **Priority** + **Confidence** CARRY as *attributive* tags (not selection — enumerate-not-select permits per-route attribution, forbids which-wins ranking).
  - *Route Guidance:* **Guidance Mode** CARRIES (re-derive `expand-on-selection` → `expand-on-drill`, since routelister doesn't select); **Guidance Pointers** CARRY.
  - *Route Depth-link (NEW, cross-run):* a **within-concept** pointer to the identity's OWN depth run (if drilled) + a compact **depth-signal** (enrich-not-dump, `21-01`).
  - *DROPPED (loop-contaminated):* **Status** loop-values (done/stale/superseded/active — cycle-relative), **Blocked-By** (route-gate). (A minimal optional *reachability* is retained only for the referenced-but-absent edge case.)
- K2 — **The contaminated trio + the boundary.** Status-values, Blocked-By, Unlocks all presuppose the loop/route-graph. Unlocks is the sharpest — "this route unlocks route B" is literally the inter-concept dependency edge the NOT-list excludes. It DROPS, and the within-concept depth-link (identity → its OWN depth, never → another identity) is what legitimately replaces the part worth keeping. **The boundary: a route-record may reference its own depth; never another identity.**
- K3 — **The wrapper (the §5.5 re-derivation, OT2):** **Map Header** (identity-count + HIGH-priority count) CARRIES; **Route Index** (a table: ordinal + Direction[identity] + type-signature + Priority + depth-link?) RE-DERIVES to an identity-table; **Excluded Section** RE-DERIVES from "inapplicable movement-types" to **admission-rejected candidate-concepts with reasoning** (preserving "visible-with-reason, never silently filtered" — the asymmetric-failure principle); **Telemetry** RE-DERIVES (per-grain / per-kind / per-engagement-type distributions + individuation stats [identity count, low-confidence individuations, splits] + convergence + frontier-flags + self-assessment).
- K4 — **The state-file (the §5.8 re-derivation, OT3):** routeman's `_route.md` (Last/Prior Invocations + History, REVISIT-built) RE-DERIVES to the **identity-set / cross-run index** — `{identity → {own-depth pointer, depth-signal, individuation-provenance (which items merged + confidence), first-seen / last-touched}}` + an invocation log. WITHIN-concept; strips REVISIT/cross-cycle/per-Route-Status (loop-state). This IS the cross-run index `21-01`/`22-40` established.
- K5 — **Two persisted artifacts, mirroring routeman.** `routelister.md` (the human-facing Route-Map: header + index + per-route records + admission-excluded + telemetry) + the **identity-set/index state-file** (the cross-run memory). Different roles (output vs continuity), exactly as routeman has `routeman.md` + `_route.md`.
- K6 — **The type-signature is the schema's center of gravity.** Where routeman had one Movement-Type field, routelister has three first-class fields (grain, kind, engagement-type) — the route-record is organized around the `18-17` signature, with the carried routeman fields (WHY, Guidance, Priority) as the surrounding attribution.

**Structural Points:**
- S1 — The schema = re-derived §5.4 (drop the trio, add the signature + depth-link) + re-derived §5.5 wrapper + re-derived §5.8 state-file.
- S2 — Two artifacts (route-map + identity-set/index).

**Foundational Principles:**
- P1 — Carry machinery per-component via the loop-bound test (`18-17`); drop the loop-relative parts.
- P2 — Never encode inter-concept relations; within-concept depth-link only (NOT-list).
- P3 — Visible-with-reason, never silently filtered (the Excluded section; asymmetric-failure).

**Meaning-Nodes:**
- M1 — *per-field loop-bound classification*; M2 — *type-signature-as-3-fields*; M3 — *Unlocks-drop / within-concept-depth-link*; M4 — *admission-rejected Excluded section*; M5 — *two artifacts (map + index)*.

### SV2 — Anchor-Informed Understanding

routelister's output FORM = a re-derived route-record schema (Direction + the {grain,kind,engagement-type} signature + Movement + WHY/why-important + attributive Priority/Confidence + Guidance + a within-concept depth-link; DROP Status-loop-values / Blocked-By / Unlocks), inside a re-derived Route-Map wrapper (header + identity-index + admission-rejected Excluded + telemetry), persisted as two artifacts: the human-facing `routelister.md` route-map + the identity-set/cross-run-index state-file (re-derived `_route.md`, within-concept). Every field is classified via the loop-bound test; the Unlocks-drop enforces the no-inter-concept-graph boundary.

*Meta-Inspection (H8 self-reference): re-deriving routeman's schema; anchored on routeman's actual §5.4/§5.5/§5.8 fields + the 18-17 test + the NOT-list; the re-derivation DROPS routeman fields (adversarial to wholesale-carry).*

---

## Phase 2 — Perspective Checking

**Technical / Logical:** the loop-bound test is a clean per-field predicate (does the field's meaning presuppose the cycle/route-graph?). Applied: Status-values YES (drop), Blocked-By YES (drop), Unlocks YES + inter-concept (drop), Movement partially (re-derive), the rest NO (carry). Deterministic for 9/~11 fields; 2 (Movement, Guidance-Mode's expand-on-selection) need a light re-derivation. New anchor → **K7: the classification is decidable per-field, with 2 light re-derivations named.**

**Human / User:** the user wants the FORM authored (the audit's PARTIAL → DEFINED). The deliverable is a concrete field list + wrapper + state-file, with provenance — directly usable for the spec. Not a vague "it has fields."

**Strategic / Long-term:** authoring the schema completes routelister's output half AND supplies the artifact the deferred cross-run model reads/writes (the state-file IS the cross-run index) — so this unblocks the last DAG item.

**Risk / Failure (the wholesale-carry trap + the graph-leak):** the dangerous moves are (a) copying §5.4 intact (re-importing Status/Blocked-By/Unlocks contamination) and (b) letting a field encode inter-concept relations. Guard: explicit per-field classification (a) + the within-concept depth-link boundary (b). Both are made explicit.

**Resource / Feasibility:** cheap — it reuses routeman's structure, dropping 3 fields and adding 2 (signature-as-3 + depth-link); no new framework.

**Definitional / Internal Consistency:** does carrying Priority/Confidence contradict enumerate-not-select? No — routeman's own §1.3 permits per-route attributive priority/confidence while forbidding which-wins ranking; routelister inherits that distinction. Does the depth-link contradict the NOT-list? No — within-concept (identity→own-depth) ≠ inter-concept (identity→other-identity). New anchor → **K8: Priority/Confidence (attributive) + within-concept depth-link are both inside routelister's identity.**

**Definitional / Frame-exit Completeness** (gating: inherited multi-value term in the inquiry's own structure?): the term **"Status/reachability"** is inherited with multiple values (open/blocked/deferred/active/done/stale/superseded). *Existence enumeration:* these values split — *open* (engageable) is goal/territory-relative (keepable as the default), while *done/stale/superseded/active* are cycle-relative (drop), and *blocked/deferred* presuppose gates (drop). *Role assessment:* routelister routes are engageable-by-default (a listed identity is engageable); only the referenced-but-absent edge needs a minimal reachability. → **K9: "Status" is a multi-value field whose values split by the loop-bound test — keep a minimal engageable/absent reachability, drop the cycle-state values.**

**Phase / Calibration-State:** N/A (a schema, not a phase-dependent rule).

**Self-Reference (failure mode #6):** re-deriving routeman's own schema for routelister. External anchors: routeman's *literal* §5.4/§5.5/§5.8 fields (read this session), the `18-17` loop-bound test, the NOT-list. The re-derivation's willingness to DROP routeman fields (Status-values, Blocked-By, Unlocks) — against the comfort of carrying the mature schema — is the guard. Check passed.

### SV3 — Multi-Perspective Understanding

The output FORM is authored: a per-field-classified route-record (carry Direction/Goal/Movement[re-derived]/WHY/why-important/Priority/Confidence/Guidance; replace Movement-Type with the 3-field signature; add the within-concept depth-link; drop Status-loop-values/Blocked-By/Unlocks), inside a re-derived wrapper (header/identity-index/admission-rejected-Excluded/telemetry), persisted as two artifacts (route-map + identity-set/index state-file). The classification is decidable per-field; Priority (attributive) and the within-concept depth-link are inside routelister's identity; the Unlocks-drop enforces the no-inter-concept-graph boundary.

---

## Phase 3 — Ambiguity Collapse

### Ambiguity 1 — Does the "Status" field fully drop, or is a reachability needed? (OT1)

**Counter-interpretation:** "routelister needs Status — a route might be blocked or done, just like routeman's."

**Why it fails (structural grounds):** routeman's Status values are cycle/route-graph-relative — *done* (a cycle executed it), *stale/superseded* (cycle evolution), *active*, *blocked/deferred* (route-gates). routelister is not loop-bound and has no route-gates, so those values have no referent. A listed concept-identity is *engageable by default*. The only residual is the referenced-but-absent edge (the goal mentions a concept not in the territory) → a minimal optional reachability flag. **Confidence:** HIGH. **Resolution:** drop the cycle-state Status values + Blocked-By; keep an optional minimal reachability (engageable-by-default; flag referenced-but-absent).

### Ambiguity 2 — Does Unlocks fully drop, and does the depth-link reintroduce the forbidden graph? (OT1 + F4, the boundary)

**Strongest counter-interpretation:** "Unlocks is useful navigation info (which routes this one enables); dropping it loses value. And the depth-link is just Unlocks renamed — both are cross-route pointers, so you've kept the forbidden graph."

**Why the counter fails (structural grounds):** Unlocks encodes an edge from this concept to *another* concept/route ("engaging A unlocks B") — that is precisely the inter-concept dependency graph `18-17`'s NOT-list excludes; keeping it would violate routelister's identity. The depth-link is categorically different: it points from an identity to its OWN depth run (the manifestations of *the same* identity) — the within-concept identity↔manifestation containment routelister explicitly permits. *Within-concept* (A → A's own depth) ≠ *inter-concept* (A → B). So the depth-link is not Unlocks renamed; it is the legitimate within-concept residual, and the boundary is explicit: a route-record may reference its own depth, never another identity. **Confidence:** HIGH. **Resolution:** Unlocks DROPS (inter-concept graph); the within-concept depth-link is its legitimate, identity-preserving replacement.

### Ambiguity 3 — Does carrying Priority/Confidence contradict enumerate-not-select? (OT1)

**Counter-interpretation:** "Priority ranks routes → that's selection, which routelister forbids."

**Why it fails:** routeman's own §1.3 NOT-list draws the line: per-route *attributive* priority/confidence (tagging each route's importance) is permitted; a *ranked verdict of which-route-wins* is forbidden. Priority is attribution, not commitment. routelister enumerates all routes, each carrying an attributive importance tag, without selecting one. **Confidence:** HIGH. **Resolution:** Priority + Confidence CARRY as attributive tags (not selection).

### Ambiguity 4 — One artifact or two? (OT2 + OT3)

**Counter-interpretation:** "Fold the identity-set/index into the route-map — one file is simpler."

**Why it fails:** the route-map and the identity-set serve different roles. The route-map (`routelister.md`) is the human-facing output of *one run* (the routes, for reading/acting). The identity-set/index is *cross-run memory* (the accumulating identity registry the cross-run model reads). Conflating them would either bloat the per-run output with cross-run bookkeeping or lose the cross-run continuity — exactly the routeman split (`routeman.md` content vs `_route.md` invocation-state). Two artifacts, two roles. **Confidence:** HIGH. **Resolution:** two artifacts — the `routelister.md` route-map + the identity-set/index state-file (re-derived `_route.md`, within-concept).

### Ambiguity 5 — Self-reference / load-bearing: is the re-derivation genuine or a relabel of routeman's schema?

**Counter:** "you've just renamed routeman's schema."

**Why it fails:** the re-derivation DROPS three routeman fields (Status-values, Blocked-By, Unlocks), REPLACES one (Movement-Type → 3-field signature), ADDS one (within-concept depth-link), and RE-PURPOSES the Excluded section (inapplicable-types → admission-rejected-concepts). That is structural change driven by the loop-bound test, not a relabel — and it is adversarial to routeman (it discards parts of routeman's mature schema). **Confidence:** HIGH. **Resolution:** genuine per-field re-derivation, anchored on routeman's literal fields + the loop-bound test.

---

### SV4 — Disambiguated Understanding

All five ambiguities resolve at HIGH confidence. The route-record drops the cycle-state Status values + Blocked-By + Unlocks (the inter-concept graph), keeps an optional minimal reachability, replaces Movement-Type with the {grain,kind,engagement-type} signature, carries WHY/why-important/Guidance + attributive Priority/Confidence, and adds a within-concept depth-link (identity→own-depth, never inter-concept). The wrapper re-derives header/identity-index/admission-rejected-Excluded/telemetry. The output is two artifacts (route-map + identity-set/index state-file). The re-derivation is genuine (drops + replaces + adds), not a relabel.

---

## Phase 4 — Degrees-of-Freedom Reduction

**Fixed:**
- Route-record schema: Direction + type-signature{grain,kind,engagement-type} + Movement(re-derived) + WHY + why-important + Priority + Confidence + Guidance(Mode[expand-on-drill]+Pointers) + within-concept depth-link(pointer + depth-signal) + optional minimal reachability. DROP: Status-cycle-values, Blocked-By, Unlocks.
- Wrapper: Map Header + Route Index(identity-table) + Excluded(admission-rejected + reason) + Telemetry(per-grain/kind/engagement-type + individuation stats + convergence + frontier-flags).
- Two artifacts: `routelister.md` (route-map) + the identity-set/index state-file (within-concept, re-derived §5.8).
- OT0: the root-run output FORM is now DEFINED (PARTIAL → DEFINED).

**Eliminated:**
- "Carry §5.4 wholesale" — KILLED (drops the contaminated trio).
- "Keep Unlocks / depth-link = Unlocks" — KILLED (Unlocks = forbidden inter-concept graph; depth-link is within-concept).
- "Priority = selection" — KILLED (attributive, allowed).
- "One artifact" — KILLED (route-map vs cross-run index = two roles).
- "It's a relabel" — KILLED (drops+replaces+adds+re-purposes).

**Remaining viable (downstream; out of scope):**
- The exact markdown rendering / field names (bikeshed; spec-authoring detail).
- The cross-run model's read/integrate/persist operations on these artifacts (process; `21-01`).
- The minimal-reachability's exact values (edge-case detail).

### SV5 — Constrained Understanding

routelister's output FORM is authored as two artifacts. The **route-record** = Direction + the {grain, kind, engagement-type} signature + Movement(re-derived) + WHY + why-important + attributive Priority/Confidence + Guidance + a within-concept depth-link, with the loop-contaminated trio (Status-cycle-values, Blocked-By, Unlocks-the-inter-concept-graph) dropped. The **`routelister.md` Route-Map wrapper** = header + identity-index + an admission-rejected Excluded section + telemetry. The **identity-set/index state-file** (re-derived `_route.md`, within-concept) is the cross-run memory. Every field is classified via the loop-bound test; the Unlocks-drop enforces the no-inter-concept-graph boundary.

---

## Phase 5 — Conceptual Stabilization

*Accommodation check: the perspectives converged on the per-field classification + the two-artifact design; none destabilized. Stable.*

### SV6 — Stabilized Model — Routelister's Output-Artifact Schema

**The root-run output's FORM is now authored — two artifacts, every field traced to routeman's schema through the loop-bound test.**

**(OT1) The route-record schema** (one record = one concept-identity, per `11-43` compactness):
- **Route Identity:** *Direction* (the concept-identity, named as a direction toward the goal); the **type-signature** — *grain* (project-space / concept-space), *kind* (teleological / epistemic), *engagement-type* (the 9-verb subset) — replacing routeman's single Movement-Type field with the `18-17` three-field signature.
- **Route Meaning:** *Movement* (what engaging this concept does — re-derived to be territory-relative, dropping routeman's "current cycle state" framing). *(Unlocks dropped — see below.)*
- **Route Reasoning:** *WHY* (territory-evidence that this concept is a goal-relevant route); *why-this-might-be-important* (one-sentence cap, territory-anchored).
- **Route Attribution:** *Priority* + *Confidence* — carried as **attributive** tags (per-route importance/certainty), NOT selection (routeman's §1.3 permits attribution, forbids which-wins ranking; routelister enumerates all).
- **Route Guidance:** *Guidance Mode* (none / compact / full / **expand-on-drill** — re-derived from routeman's "expand-on-selection," since routelister doesn't select) + *Guidance Pointers* (each with its WHY).
- **Route Depth-link (new, cross-run):** a **within-concept** pointer to this identity's OWN depth run, if it has been drilled, plus a compact **depth-signal** (e.g., "unresolved README-vs-implementation divergence → epistemic route available") — the enrich-not-dump signal from `21-01`.
- **Dropped (loop-contaminated, per the loop-bound test):** routeman's *Status* cycle-values (done / stale / superseded / active — cycle-relative), *Blocked-By* (route-gates), and *Unlocks* (downstream-routes-this-enables — which is precisely the inter-concept dependency edge the NOT-list excludes). A minimal optional *reachability* is retained only for the referenced-but-absent edge case (a goal mentions a concept not in the territory).

**(OT2) The saved `routelister.md` (the Route-Map wrapper, re-derived §5.5):** *Map Header* (identity-count + HIGH-priority count); *Route Index* (a table: ordinal + Direction[identity] + type-signature + Priority + depth-link?); the per-route records (above); *Excluded Section* — re-derived from routeman's "inapplicable movement-types" to **admission-rejected candidate-concepts with reasoning** (preserving "visible-with-reason, never silently filtered"); *Telemetry* (distributions per grain / kind / engagement-type; individuation stats — identity count, low-confidence individuations, splits; convergence; frontier-flags; self-assessment verdict).

**(OT3) The identity-set / cross-run-index state-file (re-derived §5.8 `_route.md`, within-concept):** the persisted identity registry — `{identity → {own-depth pointer, depth-signal, individuation-provenance (which items were merged in + confidence), first-seen / last-touched}}` + an invocation log. It strips routeman's REVISIT / cross-cycle / per-Route-Status (loop-state). This IS the cross-run index `21-01`/`22-40` established — the running identity-set, persisted.

**Two artifacts, mirroring routeman:** the human-facing `routelister.md` route-map (one run's routes) + the identity-set/index state-file (cross-run memory) — the same split as routeman's `routeman.md` + `_route.md`, with different roles (output vs continuity).

**(OT0) Verdict:** the root-run output FORM is now **DEFINED** (PARTIAL → DEFINED). It is a `routelister.md` Route-Map (header + identity-index + per-record fields above + admission-rejected Excluded + telemetry) plus a within-concept identity-set/index state-file — every field classified carry / re-derive / drop against routeman's §5.4/§5.5/§5.8, organized around the `18-17` type-signature, with the within-concept depth-link replacing the forbidden Unlocks.

**How SV6 differs from SV1:** SV1 expected a re-derivation + drop-the-trio. SV6 delivers the *authored* schema — the exact field list with each field's provenance (carry / re-derive / drop), the wrapper, and the two-artifact design — with the Unlocks-drop / within-concept-depth-link boundary made explicit and the Status-values split resolved.

---

## Saturation / Telemetry

- **Perspective saturation:** saturating (the per-field classification stabilized; no destabilizing anchors).
- **Ambiguity resolution ratio:** 5/5 HIGH; 0 OPEN.
- **SV delta:** moderate-large (SV1 "re-derive + drop trio" → SV6 the authored field-by-field schema + wrapper + state-file + the two-artifact design + the boundary).
- **Anchor diversity:** multi-pillar (the per-field loop-bound classification, the type-signature-as-fields, the Unlocks-drop boundary, the attributive-priority distinction, the two-artifact split, the admission-rejected Excluded).
- **Failure modes checked:** Status Quo Bias (didn't carry §5.4 wholesale — dropped 3 fields); **Self-Reference — guarded (anchored on routeman's literal fields + the 18-17 test + the NOT-list; the re-derivation drops routeman fields)**; Clean Resolution Trap (the "keep Unlocks / one-artifact" easy resolutions tested + rejected); Premature Stabilization (the "depth-link = Unlocks" + "Priority = selection" counters genuinely tested); Perspective Blindness (the uncomfortable "it's a relabel" / "you lost Unlocks's value" readings checked); Frame-exit ("Status" enumerated as multi-value, split by the loop-bound test).

**Handoff to Decomposition:** structure to partition — (1) the route-record schema (per-field carry/re-derive/drop + the signature + depth-link); (2) the wrapper (header/index/admission-Excluded/telemetry); (3) the state-file (identity-set/index, within-concept); (4) the two-artifact design + the Unlocks-drop boundary; (5) OT0 (FORM defined); (6) synthesis + the routeman/chain re-test. Candidate sub-questions for /decompose.
