# HomeGrown Thinking Disciplines

Thinking Disciplines are natural cognitive operations — borrowed from how humans actually think — formalized into repeatable structures with defined components, processes, and failure modes. They are domain-agnostic: each one works for coding, business, design, research, or any field where that type of thinking is needed.

They are not frameworks (too generic), not tools (too mechanical), not tips (too shallow). They are practiced methodologies for specific cognitive tasks. You study them, use them, and get better at them over time.

Each thinking discipline has: a philosophy/definition, structural components, a process, failure modes, and a self-quality strategy. Each one transforms a specific cognitive state into another.

---

## Worker-Cycle Disciplines

These five operate WITHIN one inquiry to take a question to an answer.

### 1. Structural Surfacing

**Transform:** Bounded territory → Relevance-tagged items drawn into present attention

**What it is:** The cognitive operation of drawing items from a bounded territory into the inquiry's present attention, each tagged with relevance to the inquiry's purpose. Works for codebases, literature, corpora, solution spaces, design candidates, or any bounded territory. Two work-products: a workspace (items with full content) and a thin artifact (traversal trace + state summary, no item content).

**Components:** Two operations (traversal + relevance attribution), the six Traversal components (entry-point selection, territory scan, signal detection, candidate drawing, relevance tagging, convergence check), Boundary-discovery sub-phase (when the territory is unbounded), four relevance levels (core / sub / side / umbrella), eight load-bearing primitives, asymmetric-failure-toward-enumeration principle, LAYER 1 / LAYER 2 failure-mode framework.

**Command:** `/surfacing`
**Spec:** `cognitive_harness/surfacing/SKILL.md`

---

### 2. Structural Sensemaking

**Transform:** Ambiguity → Stable understanding

**What it is:** A systematic process for constructing stable meaning from vague, ambiguous, or complex input. Works by organizing cognitive anchors into constrained conceptual structures through perspective integration, ambiguity collapse, and degrees-of-freedom reduction.

**Components:** Cognitive anchors (constraints, insights, structural points, principles, meaning-nodes), boundary construction operations (perspective checking, ambiguity collapse, degrees-of-freedom reduction), six progressive Sense Versions (SV1–SV6), six failure modes.

**Command:** `/sense-making`
**Spec:** `cognitive_harness/sense-making/SKILL.md`

---

### 3. Structural Decomposition

**Transform:** Complex-but-understood whole → Independently coherent pieces with explicit interfaces and dependency ordering

**What it is:** The cognitive operation of perceiving internal coupling topology in complexity — seeing where things are tightly connected (keep together) vs loosely connected (natural boundary) — and partitioning at natural boundaries. Not dividing (the action) but perceiving structure (the seeing that makes the cutting obvious). The scale operator that enables problems of any size by partitioning into worker-cycle-sized pieces. Prerequisite: sensemaking (must understand before decomposing).

**Components:** Coupling perception (core operation — propagation topology between elements), coupling map (high-cohesion clusters + low-coupling valleys), 7-step sequential process (perceive → detect → validate → express → map → order → evaluate), question tree output, dual-direction validation (top-down + bottom-up), self-evaluation (3 minimum / 7 full dimensions), 4 stopping criteria for recursive decomposition, 7 failure modes.

**Command:** `/decompose`
**Spec:** `cognitive_harness/decompose/SKILL.md`

---

### 4. Structural Innovation

**Transform:** Seed → Novel viable candidates

**What it is:** A framework for producing novelty through systematic mechanism application. Seven mechanisms (4 Generators + 3 Framers) cover the innovation space. Intuition provides direction, mechanisms provide coverage, testing catches blind spots of both.

**Components:** Intuition (context, valuation, motivation), seeds, seven mechanisms (Combination, Absence Recognition, Domain Transfer, Extrapolation, Lens Shifting, Constraint Manipulation, Inversion), Generator/Framer split, five testing criteria (novelty, scrutiny survival, fertility, actionability, mechanism independence), assembly check, six failure modes.

**Command:** `/innovate`
**Spec:** `cognitive_harness/innovate/SKILL.md`

---

### 5. Structural Critique

**Transform:** Candidates + evaluation context → Fitness landscape with positioned candidates, coverage map, and convergence signal

**What it is:** A framework for evaluating ideas, plans, or outputs by constructing multi-dimensional fitness landscapes, positioning candidates through adversarial testing, and tracking coverage until convergence. The contraction force in the cycle — sensemaking expands understanding, innovation expands the idea space, critique contracts by selecting survivors. Not nitpicking or checklist evaluation — landscape construction with adversarial prosecution/defense and persistent memory across iterations.

**Components:** Two operations (extraction + evaluation), evaluation dimensions (default + problem-specific), fitness landscape (viable / dead / boundary / unexplored regions), adversarial structure (prosecution + defense + collision), three verdict types (SURVIVE / REFINE / KILL with constructive output), accumulator (persistent memory across iterations), assembly check, coverage + convergence assessment, seven failure modes.

**Command:** `/td-critique`
**Spec:** `cognitive_harness/td-critique/SKILL.md`

---

## Boundary Discipline

### 6. Structural Routeman

**Transform:** Current state + goal → Route Map of typed possible next moves with reachability and per-route guidance

**What it is:** The route-enumeration discipline — operates at the EDGE between one inquiry (or cycle) and the next. Enumerates all possible next moves from the current state toward the goal, types each by movement category, evaluates reachability, prioritizes, and attaches per-route prescriptive guidance — without selecting which move to take. Downstream selection picks from the Route Map; Routeman never selects.

**Components:** Two operations (enumeration + adaptive guidance), 16-type movement taxonomy in three Families (Progression / Re-orientation / Coordination), typed-reachability assignment, four guidance modes, ten Enumeration components, six purpose-group per-route schema, Route Map wrapper, asymmetric-failure-toward-enumeration principle, LAYER 1 / LAYER 2 failure-mode framework.

**Command:** `/routeman`
**Spec:** `cognitive_harness/routeman/SKILL.md`

---

## How They Compose

Disciplines compose through runner loops. A runner orchestrates which worker-cycle disciplines run, in what order, against a given inquiry; Routeman runs between inquiries to steer the next one.

**`/mvl` (classic):** S → I → C

The minimal cycle. Sensemaking, Innovation, Critique on one question. Used when the territory is already understood and the question is "what should we do about it?"

**`/MVLw` (extended-surfacing):** Su → S → D → I → C

The full cycle. Surfacing first to gather the territory's items into attention; then Sensemaking to structure them; Decomposition to partition the problem; Innovation to generate candidates per piece; Critique to evaluate. Used when the territory needs enumeration or the problem is large.

The cycle can iterate (narrow and re-run) until the question is answered. Between inquiries, Routeman enumerates the next-move space — what to investigate next, which directions are open, which are blocked.

Each discipline is standalone and domain-agnostic. The runners turn them from a list into a system.
