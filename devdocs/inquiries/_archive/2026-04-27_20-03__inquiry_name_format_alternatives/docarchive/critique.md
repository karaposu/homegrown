# Critique: Inquiry Name Format Alternatives

## User Input

`devdocs/inquiries/2026-04-27_20-03__inquiry_name_format_alternatives/_branch.md`

## Phase 0: Dimensions With Weights

| Dimension | Weight | Success Criteria |
|---|---:|---|
| Visible calendar recency | Critical | A reader can tell roughly when the inquiry was created from the folder name/path without opening files. |
| Chronological sort/order | Critical | Normal lexicographic sorting gives useful creation order, including same-day order. |
| Human scanability | High | The prefix is readable enough that it does not become private code. |
| AI scanability | High | An AI agent can infer chronology and parse the convention from a raw directory listing. |
| Compactness | High | The prefix does not consume excessive visual width or push the slug out of view. |
| Stateless creation | High | Creating a new folder does not require a global counter, registry, or manual index. |
| Durability | High | The convention remains clear years later and does not rely on two-digit-year context. |
| Implementation simplicity | Medium-high | The format is easy to generate with shell or runner code. |
| Non-overengineering | Medium-high | The format avoids solutions built for distributed uniqueness when local provenance is the real need. |

## Phase 1: Fitness Landscape

### Viable Region

- Full-year datetime prefix.
- Lexicographically sortable.
- Visible calendar date.
- Same-day order signal.
- Clear timestamp/slug delimiter.
- No counter required.

### Boundary Region

- Daily sequence formats that are compact but require allocation.
- Date-only formats that expose recency but not same-day order.
- More readable formats that are longer than necessary.
- Date-bucket topology that may become useful only at larger scale.

### Dead Region

- Two-digit-year formats.
- Opaque encodings that need decoding.
- Pure sequence IDs as the default.
- Status-bearing paths that will churn when status changes.
- Slug-first formats that break chronological sorting.

### Unexplored Region

- Generated views over the inquiry corpus. This is outside the current question because the user wants folder names/paths to carry the signal without reading contents.

## Phase 2: Candidate Verdicts

### Candidate A: `YYYY-MM-DD_HH-MM__slug`

**Prosecution:** It is readable but visually long. In a directory with many entries, the repeated prefix consumes horizontal room and leaves less visible space for the slug.

**Defense:** It is maximally clear, durable, stateless, easy to generate, and easy for humans and AI agents to understand.

**Collision:** Defense wins on correctness, but prosecution wins enough on compactness to prevent this from being the best answer to the user's new question.

**Verdict:** REFINE.

**Constructive output:** Keep as the readable baseline or fallback, but prefer a compact ISO-basic variant if compactness matters.

### Candidate B: `YYYYMMDD-HHMM__slug`

**Prosecution:** It is less immediately readable than the fully separated timestamp. Some non-technical readers may need one exposure to decode `20260427-2003`.

**Defense:** It preserves full-year date, minute-level time, lexicographic ordering, stateless creation, and clear slug boundary. It is compact without becoming opaque. It maps directly to `date +"%Y%m%d-%H%M"`.

**Collision:** Defense wins across all critical dimensions. The readability cost is small and quickly learned. The compactness gain is real in a growing folder list.

**Verdict:** SURVIVE.

**Constructive output:** Use this as the recommended default for new inquiry folders:

```text
YYYYMMDD-HHMM__slug
```

Example:

```text
20260427-2003__inquiry_name_format_alternatives
```

### Candidate C: `YYYYMMDD-NN__slug`

**Prosecution:** It requires a daily counter. That means either a stored registry, a scan of existing names, or manual coordination. It also hides wall-clock time; `03` tells order but not whether the inquiry was created in the morning or evening.

**Defense:** It is shorter than `YYYYMMDD-HHMM`, exposes date and same-day order, avoids meaningless minute precision, and is cleaner when many inquiries are created close together.

**Collision:** This is a strong idea under runner-controlled creation, but weaker as a general convention. The stateful allocation problem is real, and the current system is still stabilizing its inquiry lifecycle.

**Verdict:** REFINE.

**Constructive output:** Keep as a future variant if inquiry creation becomes fully automated by a runner. Do not use it as the default yet.

### Candidate D: `YYYYMMDD__slug`

**Prosecution:** It fails same-day ordering. A correction chain may produce multiple inquiries on one date, and the folder listing will not show sequence.

**Defense:** It is simple, compact, readable, and exposes calendar recency.

**Collision:** Defense is enough for low-throughput projects, but this project has high-throughput inquiry sessions. Same-day order matters.

**Verdict:** REFINE.

**Constructive output:** Use only if the project decides that time precision is visually too noisy. It is not the best current default.

### Candidate E: `YYYYMMDDHHMM_slug`

**Prosecution:** It is too visually dense. The boundary between date and time is harder to see, and a single underscore before the slug is less clear than the established `__` delimiter.

**Defense:** It is the most compact recognizable full datetime format.

**Collision:** Prosecution wins. The small compactness gain over `YYYYMMDD-HHMM__slug` is not worth the readability loss.

**Verdict:** KILL.

**Seed extracted:** The project wants compactness, but not at the cost of losing field boundaries.

### Candidate F: `YYMMDD-HHMM__slug`

**Prosecution:** Two-digit year is weak durable provenance. It assumes the reader knows the century and project era.

**Defense:** It is shorter and still enough for current local work.

**Collision:** Prosecution wins because inquiry folders are durable records. Saving two characters is not worth century ambiguity.

**Verdict:** KILL.

**Seed extracted:** If the project ever needs shorter display names, solve that with a generated view, not by weakening persisted folder identity.

### Candidate G: `000142__slug`

**Prosecution:** It exposes order but not calendar recency. It requires a counter or scan. A user or agent cannot tell whether `000142` is today or months old without more context.

**Defense:** It is very compact, sortable, and stable.

**Collision:** Prosecution wins for the current requirement. The user asked for recency/order without reading contents; this provides order but not recency.

**Verdict:** KILL as default.

**Seed extracted:** Sequence IDs may become useful as secondary IDs, not primary folder prefixes.

### Candidate H: Epoch/Base36/ULID/KSUID-Style Prefix

**Prosecution:** These are opaque to humans and only partially obvious to AI agents without convention context. They solve distributed uniqueness and collision problems that the project does not currently have.

**Defense:** They are compact, sortable, and strong machine IDs.

**Collision:** Prosecution wins. This is over-engineering for a local devdocs provenance corpus.

**Verdict:** KILL.

**Seed extracted:** If distributed multi-agent folder creation becomes a real problem later, revisit ULID-style IDs. Do not adopt them for current readability.

### Candidate I: Date Bucket Folders

**Prosecution:** Nested date folders make the active inquiry root less directly scannable. Broad search has to traverse deeper paths, and active work is hidden behind date topology.

**Defense:** Date buckets reduce root clutter and avoid repeating long prefixes.

**Collision:** Neither side fully kills the idea. It is premature for the active root but plausible later if there are hundreds of active/current entries despite `_archive/`.

**Verdict:** REFINE / DEFER.

**Constructive output:** Keep date buckets as a future scaling option, not the default naming convention.

### Candidate J: Status In Path

**Prosecution:** Status changes. Putting `active`, `complete`, `diag`, or similar labels in the folder name creates path churn and mixes lifecycle metadata into identity.

**Defense:** It gives no-read status visibility.

**Collision:** Prosecution wins. Status belongs in `_state.md`, lifecycle placement such as `_archive/`, or generated views, not in stable folder identity.

**Verdict:** KILL.

**Seed extracted:** Keep no-read lifecycle signals at coarse directory placement level, not inside every folder name.

## Phase 3.5: Assembly Check

### Assembly Candidate: Compact Timestamp Now, Daily Sequence Later

**Prosecution:** A two-tier recommendation may feel less clean than choosing one format forever.

**Defense:** It matches the project's maturity. Today, inquiry creation can be manual or agent-driven, so stateless timestamp creation is safer. Later, if runner-owned creation becomes reliable, a daily sequence can be reconsidered.

**Collision:** Defense wins. The assembly avoids premature commitment to a stateful allocator while preserving the useful daily-sequence idea.

**Verdict:** SURVIVE.

Recommended policy:

```text
Default now:          YYYYMMDD-HHMM__slug
Readable fallback:   YYYY-MM-DD_HH-MM__slug
Future runner-only:  YYYYMMDD-NN__slug
```

## Phase 4: Coverage Map

### Covered

- Readable datetime.
- Compact datetime.
- Date-only.
- Daily sequence.
- Pure sequence.
- Dense timestamp.
- Two-digit-year timestamp.
- Opaque sortable IDs.
- Date bucket topology.
- Status-bearing paths.

### Deferred

- Generated inquiry index/view.
- Date-bucket topology for very large active roots.
- Runner-owned daily sequence allocation.
- Distributed unique IDs for multi-agent simultaneous creation.

### Killed

- Two-digit year as the default.
- Opaque encoded timestamp as the default.
- Pure sequence ID as the default.
- Slug-first suffix timestamp.
- Status in path.

## Signal

TERMINATE with ranked survivors:

1. **`YYYYMMDD-HHMM__slug`** - best default now. Compact, stateless, sortable, full-year, calendar-readable, and AI-scannable.
2. **`YYYY-MM-DD_HH-MM__slug`** - readable fallback if the user values immediate visual clarity over compactness.
3. **`YYYYMMDD-NN__slug`** - future conditional variant if a runner owns all inquiry creation and can assign daily sequence numbers safely.

## Convergence Telemetry

- **Dimension coverage:** Full. The dimensions cover recency, order, compactness, readability, AI scanability, statefulness, durability, and implementation cost.
- **Adversarial strength:** STRONG. The strongest challenger, `YYYYMMDD-NN__slug`, was defended seriously and still did not beat the stateless timestamp as the default.
- **Landscape stability:** STABLE. New candidates mostly fall into known regions: readable timestamp, compact timestamp, stateful sequence, opaque ID, or topology shift.
- **Clean SURVIVE exists:** YES. `YYYYMMDD-HHMM__slug`.
- **Failure modes observed:** No rubber-stamping; no wrong-dimension signal; no false convergence signal.
- **Overall:** PROCEED.
