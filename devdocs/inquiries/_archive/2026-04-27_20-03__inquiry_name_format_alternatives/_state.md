# State: Inquiry Name Format Alternatives

## Pipeline
S -> I -> C (always)

## Progress
- [x] Sensemaking
- [x] Innovation
- [x] Critique

## Iteration
1

## Status
COMPLETE

## Next Discipline
—

## Relationships
- CONTINUES FROM: devdocs/sensemaking/inquiry_datetime_prefix_format.md (questions whether the stabilized date-time format has a better alternative)
- RELATED: inquiry_storage_policy_correction (uses the corrected model that inquiries are persistence/provenance records)

## History
- 2026-04-27: Created. Question: compare `YYYY-MM-DD_HH-MM__slug` against compact or non-datetime alternatives that preserve recency/order visibility without reading folder contents.
- 2026-04-27: Sensemaking complete. Strong survivor entering Innovation: `YYYYMMDD-HHMM__slug` as compact ISO-basic datetime; structural check skipped because `tools/structural_check.sh` is missing locally.
- 2026-04-27: Innovation complete. Main survivors: `YYYYMMDD-HHMM__slug` as stateless default and `YYYYMMDD-NN__slug` as runner-owned conditional variant; structural check skipped because `tools/structural_check.sh` is missing locally.
- 2026-04-27: Critique complete. Clean survivor: `YYYYMMDD-HHMM__slug`; readable fallback: `YYYY-MM-DD_HH-MM__slug`; future runner-owned conditional variant: `YYYYMMDD-NN__slug`. Structural check skipped because `tools/structural_check.sh` is missing locally.
- 2026-04-27: Conclude complete. Finding recommends `YYYYMMDD-HHMM__slug` as the preferred compact default, keeps `YYYY-MM-DD_HH-MM__slug` as readable fallback, and defers `YYYYMMDD-NN__slug` until runner-owned sequence allocation is reliable. Structural check skipped because `tools/structural_check.sh` is missing locally. Status COMPLETE.
