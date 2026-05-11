# Innovation: Inquiry Name Format Alternatives

## User Input

`devdocs/inquiries/2026-04-27_20-03__inquiry_name_format_alternatives/_branch.md`

## Seed

The seed is dissatisfaction with `YYYY-MM-DD_HH-MM__slug`: it is clear and safe, but maybe too long. The goal is to find a naming convention that is compact, visible from a folder listing, chronological, stable, and not cryptic.

Sensemaking's strongest incoming candidate is:

```text
YYYYMMDD-HHMM__slug
```

## Mechanism 1: Lens Shifting

### Generic

Shift from "human-readable timestamp" to "directory scan token."

**Candidate:** `YYYYMMDD-HHMM__slug`

**Test:** Novelty medium; scrutiny survival high; fertility high; actionability high. It keeps visible calendar recency and same-day order while shortening the prefix.

### Focused

Shift from "timestamp as exact creation time" to "timestamp as ordering affordance."

**Candidate:** `YYYYMMDD-NN__slug`, where `NN` is the nth inquiry created that day.

Example:

```text
20260427-03__inquiry_name_format_alternatives
```

**Test:** Novelty medium; scrutiny survival medium; fertility high; actionability medium. It is shorter than minute time and exposes same-day order, but needs a counter.

### Contrarian

Shift from "root folder must show everything" to "path can carry chronology."

**Candidate:** `devdocs/inquiries/2026/04/27/2003__slug/`

**Test:** Novelty low; scrutiny survival low-medium; fertility medium; actionability medium. It reduces prefix repetition but makes broad scanning deeper and changes active-root behavior.

## Mechanism 2: Combination

### Generic

Combine date with semantic slug, but compress date punctuation.

**Candidate:** `YYYYMMDD__slug`

Example:

```text
20260427__inquiry_name_format_alternatives
```

**Test:** Novelty low; scrutiny survival medium; fertility medium; actionability high. Good for date recency, weak for same-day ordering.

### Focused

Combine date, daily sequence, and slug.

**Candidate:** `YYYYMMDD-NN__slug`

**Test:** Novelty medium; scrutiny survival medium-high if runner-controlled; fertility high; actionability medium. This may be the best compact non-time variant.

### Contrarian

Combine compact time with a short stable ID.

**Candidate:** `YYYYMMDD-HHMM-iNN__slug`

Example:

```text
20260427-2003-i42__inquiry_name_format_alternatives
```

**Test:** Novelty medium; scrutiny survival low; fertility medium; actionability low. It solves uniqueness and ordering but becomes too much prefix.

## Mechanism 3: Inversion

### Generic

Invert "folder name should carry time" to "folder placement should carry time."

**Candidate:** monthly buckets: `devdocs/inquiries/2026-04/20260427-2003__slug/`

**Test:** Novelty low; scrutiny survival medium only at high scale; fertility medium; actionability medium. Useful later if root count grows; premature now.

### Focused

Invert "date first, slug second" to "slug first, date suffix."

**Candidate:** `slug__YYYYMMDD-HHMM`

**Test:** Novelty low; scrutiny survival low. Topic scanning improves, chronological sorting breaks in normal folder listings.

### Contrarian

Invert "all inquiries share one convention" to "active and archive can use different conventions."

**Candidate:** active folders use compact timestamp; archived folders may be grouped by month later.

**Test:** Novelty medium; scrutiny survival medium-high; fertility high; actionability medium. This is an lifecycle policy, not the immediate naming default.

## Mechanism 4: Constraint Manipulation

### Generic

Add constraint: no stateful counter.

**Candidate:** `YYYYMMDD-HHMM__slug`

**Test:** Novelty medium; scrutiny survival high; fertility high; actionability high. Statelessness strongly favors timestamp over sequence.

### Focused

Remove constraint: exact wall-clock time must be visible.

**Candidate:** `YYYYMMDD-NN__slug`

**Test:** Novelty medium; scrutiny survival medium; fertility high; actionability medium. Compact and readable, but only if the runner owns inquiry creation.

### Contrarian

Add constraint: shortest possible prefix with human-decodable date.

**Candidate:** `YYMMDD-HHMM__slug`

Example:

```text
260427-2003__inquiry_name_format_alternatives
```

**Test:** Novelty low; scrutiny survival low-medium; fertility low; actionability high. Short, but weak for durable provenance because the year is ambiguous over long horizons.

## Mechanism 5: Absence Recognition

### Generic

What's missing from all formats so far is an explicit convention marker.

**Candidate:** `i20260427-2003__slug`

**Test:** Novelty medium; scrutiny survival low-medium; fertility medium; actionability medium. The `i` marks inquiry, but adds little inside `devdocs/inquiries/`.

### Focused

What's missing is collision handling.

**Candidate:** `YYYYMMDD-HHMM__slug`, with collision suffix only when needed: `__slug_2`.

**Test:** Novelty low; scrutiny survival high; fertility high; actionability high. Keeps default clean while covering same-minute collision.

### Contrarian

What's missing is status visibility, not timestamp compactness.

**Candidate:** `YYYYMMDD-HHMM__active__slug` or `YYYYMMDD-HHMM__diag__slug`

**Test:** Novelty medium; scrutiny survival low. Status in path creates churn when status changes and mixes lifecycle metadata into identity.

## Mechanism 6: Domain Transfer

### Generic

Transfer from log files.

**Candidate:** `YYYYMMDD-HHMM__slug`

**Test:** Novelty low; scrutiny survival high; fertility high; actionability high. Logs commonly use compact sortable timestamps.

### Focused

Transfer from database migrations.

**Candidate:** `YYYYMMDDHHMM_slug`

Example:

```text
202604272003_inquiry_name_format_alternatives
```

**Test:** Novelty low; scrutiny survival medium. Very compact, but the time boundary is harder to see.

### Contrarian

Transfer from ULID/KSUID systems.

**Candidate:** `01JXYZ...__slug` style sortable ID.

**Test:** Novelty medium; scrutiny survival low. Strong for distributed uniqueness, weak for human calendar reading and overbuilt for local devdocs.

## Mechanism 7: Extrapolation

### Generic

If the inquiry corpus reaches hundreds of active/current entries, prefix compactness matters.

**Candidate:** compact timestamp default plus `_archive/` lifecycle:

```text
YYYYMMDD-HHMM__slug
```

**Test:** Novelty medium; scrutiny survival high; fertility high; actionability high.

### Focused

If the runner creates every inquiry, daily sequence becomes easier.

**Candidate:** `YYYYMMDD-NN__slug`

**Test:** Novelty medium; scrutiny survival medium-high in runner-controlled future; fertility high; actionability medium.

### Contrarian

If active root still becomes noisy after archive policy, move to monthly active buckets later.

**Candidate:** `devdocs/inquiries/2026-04/YYYYMMDD-HHMM__slug/`

**Test:** Novelty low; scrutiny survival medium as deferred scaling option; fertility medium; actionability medium.

## Assembly Check

The strongest assembly is a two-tier policy:

1. Default now:

```text
YYYYMMDD-HHMM__slug
```

2. Optional future runner-owned variant:

```text
YYYYMMDD-NN__slug
```

The default should remain stateless and calendar-readable. The daily sequence variant becomes attractive only if inquiry creation is fully handled by a runner that can safely assign the next daily number.

The main reason not to adopt `YYYYMMDD-NN__slug` now is not readability. It is allocation. It turns folder creation from "format current clock time" into "know or compute today's next sequence number."

## Candidate Summary

| Candidate | Verdict Before Critique | Reason |
|---|---|---|
| `YYYY-MM-DD_HH-MM__slug` | Survives as readable baseline | Clear and durable, but verbose. |
| `YYYYMMDD-HHMM__slug` | Strong survivor | Compact, sortable, calendar-readable, stateless. |
| `YYYYMMDD-NN__slug` | Strong conditional survivor | Shorter and clean, but needs runner/counter. |
| `YYYYMMDD__slug` | Weak survivor | Compact date visibility, but weak same-day order. |
| `YYYYMMDDHHMM_slug` | Refine away | Compact, but time boundary is less readable. |
| `YYMMDD-HHMM__slug` | Kill | Too compact for durable provenance. |
| `000142__slug` | Kill as default | Shows order but not calendar recency; needs counter. |
| Epoch/base36/ULID/KSUID | Kill as default | Too opaque and overbuilt. |
| Date bucket folders | Defer | Useful at larger scale, but weakens flat scan surface now. |
| Status in path | Kill | Status changes; identity should not churn. |

## Mechanism Coverage

- **Generators applied:** 4 / 4.
- **Framers applied:** 3 / 3.
- **Convergence:** YES. Five mechanisms converge on compact ISO-basic timestamp as the default.
- **Survivors tested:** 10 / 10.
- **Failure modes observed:** No single-mechanism trap; early frame lock avoided by testing the daily-sequence challenger.
- **Overall:** PROCEED.
