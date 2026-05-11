# Exploration: Meta-Loop & Isolated Navigator Session Relationship

## Mode + Entry Point

- **Mode:** Artifact (both source documents stable + concrete) + Possibility (the cross-aspect mapping is conceptual structuring).
- **Entry:** Signal-first. The user enumerated aspects; map each.

---

## Source Documents (already in context)

- `enes/loop_desing_ideas/meta_loop.md` — meta-loop concept; "stateful traversal engine for thinking space"; uses Navigation as eyes; MVL+ as probe; meta-state as memory; selection as valuation; meaningful traversal as anti-spinning judgment.
- `enes/towards_cross_run_cognitive_steering_with_isolated_navigator_session.md` — operationalizes the Navigator role with explicit session-isolation; defines Level 0 → Level 4 ladder; introduces Navigator Warming; explicitly enables multi-head MVL+.

The two documents are not alternatives — they're **complementary layers**. Meta-loop is the orchestration concept; isolated-Navigator is the operational refinement of how the Navigator role is actually executed (with session-isolation as the load-bearing addition).

---

## Per-Aspect Mapping

### Aspect 1 — Cognitive role separation

| Component | Job | "Asks" |
|---|---|---|
| **Worker (MVL+ session)** | Solve the local inquiry; produce best possible local artifact (`finding.md`) | "How do we answer THIS question?" |
| **Isolated Navigator** | Read completed artifacts; map movement-space; recommend next moves | "Given what's been produced, where should the system move next?" |
| **Selector** | Commit one (or more) recommended moves | "Which next move do we actually take?" |
| **Meta-loop runner** | Execute the committed move; update meta-state | "Run the chosen probe; persist what happened" |
| **Evaluator** (Level 4+) | Compare branch outcomes | "Which branch produced better movement?" |

The meta-loop document said earlier: "Navigation is the meta-loop's eyes, not its will." The isolated-Navigator document operationalizes this: the Navigator IS the eyes, and the eyes need their own session to avoid being trapped in the worker's local context.

**Key insight:** the meta-loop is the WHOLE orchestration cycle (orchestrate + perceive + select + execute + evaluate). The isolated Navigator is ONE COMPONENT of that cycle (perception, with explicit session-isolation).

---

### Aspect 2 — Session boundaries

The isolated-Navigator document is explicit about three distinct session roles:

```
┌────────────────────────────────────────────────────────────────┐
│  WORKER SESSION(S) — runs /MVL+; full local inquiry context    │
│   reads: _branch.md + prior discipline outputs                  │
│   writes: exploration.md, sensemaking.md, ..., finding.md       │
└────────────────────────────────────────────────────────────────┘
                            │
                            ▼ (artifacts persist to filesystem)
┌────────────────────────────────────────────────────────────────┐
│  NAVIGATOR SESSION — ISOLATED; fresh context; warmed separately │
│   reads: completed worker artifacts + warmed-context files      │
│   writes: navigation_observer.md                                │
│   does NOT solve worker's local problem                         │
└────────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌────────────────────────────────────────────────────────────────┐
│  META-LOOP RUNNER — orchestrator; manages _meta_state.md        │
│   reads: navigation_observer.md + _meta_state.md                │
│   writes: _meta_state.md updates                                │
│   dispatches next worker probe + Navigator invocation           │
└────────────────────────────────────────────────────────────────┘
```

The session-isolation between Worker and Navigator is the **load-bearing architectural commitment** of the isolated-Navigator document. The runner's session-arrangement is more flexible (could be same as user's session or its own).

---

### Aspect 3 — Context and state architecture

| Component | Context shape | State persistence |
|---|---|---|
| **Worker** | Full local inquiry — branch, all 5 discipline outputs in working memory | Files in inquiry folder |
| **Navigator** | Warmed: codebase + fundamentals + recent inquiries + target inquiry | `navigation_observer.md` (per run) + optional `navigation_memory.md` (Level 2+) |
| **Meta-loop runner** | Just enough to dispatch — meta-state + last navigation_observer | `_meta_state.md` (durable across probes) |

**The context shapes are deliberately different.** Worker has dense local context (helps solve local problem). Navigator has structured global context (helps see movement-space without local-detail bloat). Runner has minimal context (just orchestration state).

The isolated-Navigator document calls out this distinction explicitly: "the worker's context is full of local details. Those details help the current answer, but they can distort Navigation. The Navigator should not be bloated by every side path of the worker."

---

### Aspect 4 — Multi-head architecture implications

This is where the isolated Navigator becomes load-bearing.

**Without isolated Navigator (parallel duplication):**

```
Head A worker --→ finding A
Head B worker --→ finding B            (no coordination layer)
Head C worker --→ finding C
```

Each head solves its local question, but no single component sees across heads. Heads are independent probes; outputs accumulate as scattered artifacts; the user mentally synthesizes.

**With isolated Navigator (coordinated probes):**

```
Head A worker --→ artifacts ─┐
Head B worker --→ artifacts ─┼──→ Navigator --→ navigation_observer.md
Head C worker --→ artifacts ─┘                  (cross-head movement comparison)
                                  │
                                  ▼
                              Selector --→ "deepen A; stop B; merge B+C; redirect"
                                  │
                                  ▼
                              Meta-loop runner executes
```

The Navigator can ask cross-head questions:
- Which head produced genuinely new movement?
- Which is repeating known material?
- Which heads should merge?
- Which should be stopped because it's spinning?

**The isolated Navigator IS the architecture that makes multi-head tractable.** Without it, you have parallel work; with it, you have coordinated exploration.

---

### Aspect 5 — Level progression (Levels 0 → 4)

Per the isolated-Navigator document's level ladder:

| Level | Worker session | Navigator session | Key change |
|---|---|---|---|
| 0 (current) | yes (one MVL+ at a time) | none — human is implicit Navigator | informal; no Navigation artifact |
| 1 | yes | manually invoked fresh isolated session per run | first Navigator artifact (`navigation_observer.md`); session-isolation tested |
| 1.5 | yes | manually invoked; auto-discovers source inquiry | reduces friction; same session-isolation |
| 2 | yes | persistent or semi-persistent | continuity across runs; can maintain navigation_memory |
| 3 | yes | graph-native | inquiry topology reasoning |
| 4 | possibly multi-head | persistent + bounded autonomous | bounded autonomous selector + runner |

**At every level (1+), Navigator is ISOLATED.** The level differences are about Navigator's persistence and capability, NOT about session-isolation. Session-isolation is the load-bearing invariant from Level 1 onward.

---

### Aspect 6 — Read-write boundaries

| Component | Reads | Writes |
|---|---|---|
| **Worker** | `_branch.md` + prior discipline outputs in this inquiry; (in future) `_meta_state.md` for context; (in future) related-prior-inquiry findings via R12 retrieval | E/S/D/I/C outputs + `finding.md` (the inquiry's canonical artifacts) |
| **Navigator** | Completed worker artifacts (`_branch.md`, `_state.md`, `finding.md`, `docarchive/`) + warmed context (codebase, fundamentals, recent inquiries) + (Level 2+) `navigation_memory.md` | `navigation_observer.md` (per run); (Level 2+) `navigation_memory.md` updates |
| **Meta-loop runner** | `_meta_state.md`, `navigation_observer.md`, selector decision | `_meta_state.md` updates; dispatches next probe |
| **Selector** (separate role at L4+) | `navigation_observer.md` + policy/budget/risk-class | selection decision (commit) |

**Artifacts are the synchronization substrate.** No component shares process memory; everything coordinates through files. This is consistent with the project's "state lives in files" principle.

---

### Aspect 7 — Failure modes

| Component | Failure mode | Mitigation |
|---|---|---|
| **Worker** | PASS-stamping; perfunctory machinery (per recent audits); local-context bloat | Discipline-spec failure modes + audit-equivalent inquiries |
| **Navigator** | *Cold Navigation* (Navigator reads target finding but doesn't understand the project terrain) | Mandatory warming (codebase + fundamentals + trajectory + target) |
| **Navigator** | *Bloated Navigator* (re-solves worker's problem; mixes roles) | Strict role boundary: artifact-first reads; movement-space reasoning only |
| **Meta-loop** | *Spinning* (probes go nowhere; no termination) | Meaningful-traversal substrate (per `enes/what_is_meaningful_traversal.md`); coverage + convergence + productivity + directedness + depth signals |
| **Multi-head** | *Branch-explosion* (heads multiply; outputs unconsolidated) | Selector policy; explicit budget; merge logic at runner level |
| **Cross-component** | *Context bleed* (worker context leaking into Navigator session via shared session) | Session-isolation invariant — Navigator must be a separate session |

The **session-isolation between Worker and Navigator is itself a failure-mode countermeasure.** It's not just architectural elegance; it's specifically there to prevent worker's local-detail bloat from distorting Navigation.

---

### Aspect 8 — Session-execution architecture mapping

This is the user's second question. Mapping concretely:

#### Sequential meta-loop v1 (single-head)

Per `meta_loop.md` §6 "First Buildable Form":

```
seed + context
→ create/update _meta_state.md
→ run /MVL+ (probe 1)            ◄── WORKER SESSION 1
→ run Navigation Observer        ◄── NAVIGATOR SESSION 1 (isolated, fresh)
→ human selects one next move
→ run /MVL+ (probe 2)            ◄── WORKER SESSION 2 (could be fresh per probe OR continuation of 1; design choice)
→ run Navigation Observer        ◄── NAVIGATOR SESSION 2 (isolated, fresh; OR persistent at Level 2)
→ ... continue or stop
```

**Two design choices for sequential meta-loop:**
- *Option A — same worker session across probes:* worker session continues; context accumulates across probes. Simpler; but worker context grows with each probe (potential bloat).
- *Option B — fresh worker session per probe:* each probe is its own MVL+ run starting from prior probe's saved artifacts. Cleaner context per probe; matches "state lives in files" principle.

The user's intuition: "meta loop can run MVL loops in same session yes?" — **technically yes for Option A**, but Option B is cleaner architecturally because it matches the "artifacts are the synchronization substrate" principle and avoids worker context-bloat across probes.

**Navigator is ALWAYS isolated** even for sequential meta-loop, even at Level 1. That's the load-bearing rule.

#### Multi-head meta-loop

```
seed + context
→ create/update _meta_state.md
→ Navigator surveys movement-space; identifies candidate parallel directions
→ runner DISPATCHES N parallel probes:

   ┌──── Head A: WORKER SESSION (isolated context) → finding A
   │
   ├──── Head B: WORKER SESSION (isolated context) → finding B    (parallel)
   │
   └──── Head N: WORKER SESSION (isolated context) → finding N

→ All heads complete (or are stopped)
→ NAVIGATOR SESSION (one, isolated, sees all N findings) → cross-head movement comparison
→ Selector commits move(s): deepen, merge, stop, redirect
→ Runner executes; updates meta_state
→ Loop or terminate
```

**The user's second intuition: "for multihead loops we might needs more than one worker sessions" — CORRECT.** Each head needs its own worker session because:
1. Parallel execution requires separate contexts (literally; you can't run two MVL+ pipelines in one stream of execution simultaneously).
2. Each head's worker context shouldn't bleed into others (would defeat the point of "different on purpose, not accidentally duplicate").

**Session count for multi-head:**
- N worker sessions (one per head; parallel)
- 1 Navigator session (isolated; reads all N artifacts after they complete)
- 1 runner session (orchestrates dispatch + merge)
- (At Level 4) 1 evaluator role — could be its own session or be the Navigator's secondary function

**Total: ~N+2 sessions for multi-head with N heads.** For N=10, that's ~12 sessions concurrent or staged.

---

### Aspect 9 — What's NOT yet specified in the source documents

Honest gaps the source documents leave:

- **Worker session continuation vs fresh-per-probe** for sequential meta-loop is not explicitly resolved. The meta_loop document sketches §6 "First Buildable Form" but doesn't specify which option.
- **Navigator persistence boundary** at Level 2 is described but the exact invocation pattern (when does Navigator session start; when does it stop; what's its lifetime) is not fully specified.
- **Runner session arrangement** — is the runner the user's session, a separate orchestrator process, or just a protocol the user follows? The documents don't fully resolve this.
- **Cross-session artifact race conditions** at multi-head — what if Head A's finding writes while Navigator is reading? Implicit assumption: heads complete before Navigator runs; but this needs explicit spec.
- **Meaningful-traversal substrate** — `enes/what_is_meaningful_traversal.md` describes the concept but the operational definition is deferred per its own framing ("the failure modes are clearer than the success metric").

These gaps don't affect the user's question (the relationship is clear at the level the user asked) but should be flagged so the verdict is honest about what's specified vs interpretive.

---

## Cross-Aspect Synthesis

### One-paragraph summary of the relationship

**The meta-loop is the WHOLE orchestration cycle (perceive → select → execute across many probes); the isolated Navigator is the PERCEPTION COMPONENT of that cycle, operationalized with strict session-isolation. The meta-loop without isolated Navigator is undefined (no eyes); the isolated Navigator without meta-loop is a one-shot Navigator artifact (no execution loop). Both are needed for the project's stated end-goal of multi-head MVL+ in parallel.**

### Session-architecture summary

```
                   Meta-Loop (orchestration cycle)
                ┌──────────────────────────────────────┐
                │                                      │
                │   Worker session(s) ─┐               │
                │     [N parallel for  │  artifacts   │
                │      multi-head;     │ ─ via FS ──┐ │
                │      1 for sequential] │            │ │
                │                      │            ▼ │
                │                      │   Navigator session (ISOLATED) ──┐
                │                      │   [reads worker artifacts]      │ │
                │                      │   [writes navigation_observer]  │ │
                │                      │                                 │ │
                │                      ▼                                 ▼ │
                │              Runner session (orchestrator)               │
                │              [reads navigation + meta_state]             │
                │              [dispatches next probe(s)]                  │
                │              [updates _meta_state.md]                    │
                │                                                          │
                └──────────────────────────────────────────────────────────┘
```

### Direct answers to user's two questions

**Q1: Relationship between meta-loop and isolated Navigator session?**
Meta-loop is the orchestration cycle; isolated Navigator is its perception component, with session-isolation as the load-bearing architectural commitment. Navigator gives meta-loop "eyes that are not trapped inside the worker's local context." They're complementary layers, not alternatives.

**Q2: "Meta-loop can run MVL loops in same session yes? for multihead loops we might need more than one worker sessions."**
Approximately correct, with nuances:
- *Sequential meta-loop:* single-worker-session is one valid option (Option A above), but fresh-worker-session-per-probe (Option B) is cleaner architecturally. Navigator is ALWAYS its own isolated session even in sequential.
- *Multi-head meta-loop:* yes, you need multiple worker sessions (one per head; parallel by definition). Plus one Navigator session (isolated; reads across heads). Plus one runner session (orchestrates).

**Total session counts:**
- Sequential meta-loop: 1 worker (or 1-per-probe) + 1 Navigator + 1 runner ≈ 3 sessions max.
- Multi-head meta-loop with N heads: N workers + 1 Navigator + 1 runner ≈ N+2 sessions.

---

## Confidence Map

| Region | Confidence |
|---|---|
| Cognitive role separation (worker / Navigator / runner) | **CONFIRMED** via direct citations from both docs |
| Session-isolation between Worker and Navigator | **CONFIRMED** as load-bearing invariant per isolated-Navigator doc |
| Multi-head needs multiple worker sessions | **CONFIRMED** structurally; parallel by definition |
| Sequential meta-loop session-arrangement (Option A vs B) | **SCANNED** — documents don't fully resolve; surfaced as design choice |
| Navigator session persistence at Level 2 | **SCANNED** — concept described but invocation pattern not fully spec'd |
| Runner session arrangement | **SCANNED** — flexible across levels |
| Failure mode taxonomy | **CONFIRMED** per source docs + project history |
| Read-write boundaries | **CONFIRMED** per source docs |
| Multi-head needs Navigator for tractability | **CONFIRMED** per isolated-Navigator doc explicitly |

---

## Frontier State

**Stable.** All 9 aspects mapped at sufficient resolution. Cross-aspect synthesis produced. User's two questions directly answered with nuances surfaced. Honest gaps flagged.

### Jump scan

Scanned: "Is there an aspect the user might want that I missed?"

- **Cost / latency comparison:** sequential meta-loop is cheaper per cycle; multi-head amortizes Navigator overhead across N heads. Mention briefly.
- **State synchronization across heads:** how do heads share meta-state during execution? Implicit assumption: heads READ initial state but don't write to shared meta-state until completion. Worth flagging.
- **Failure of one head in multi-head:** if Head 5 fails, does the Navigator still proceed with the remaining N-1? Per the isolated-Navigator doc's role-separation: yes, Navigator reads what's available; Selector can still commit.

These minor additions worth surfacing in sensemaking but don't displace the main 9 aspects.

---

## Gaps and Recommendations

### Bounded gaps

- Worker-session continuation-vs-fresh per probe in sequential meta-loop — design choice not specified.
- Navigator persistence pattern at Level 2 — concept clear; invocation pattern not.
- Runner session arrangement — flexible per level.
- These don't affect the user's question; they're future spec work.

### Recommendations for next disciplines

- **Sensemaking:** collapse the small ambiguities (Option A vs B for sequential; minor scope clarification). Stabilize the cross-aspect map.
- **Decomposition:** light partition; the structure is mostly aspect-by-aspect.
- **Innovation:** generate concrete phrasings for the user-facing artifact.
- **Critique:** evaluate honesty (did I represent the source docs accurately? Are nuances surfaced where they exist?).

---

## Convergence Check

- **Frontier stability:** YES — all named aspects mapped.
- **Declining discovery rate:** YES — jump scan produced minor additions, not new regions.
- **Bounded gaps:** YES — gaps are spec-work, not analytical voids.

**Convergence: ACHIEVED.** Hand off to Sensemaking.
