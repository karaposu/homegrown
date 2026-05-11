# Decomposition: Inquiry Storage Policy Correction

## User Input

`devdocs/inquiries/inquiry_storage_policy_correction/_branch.md`

## 1. Coupling Map

### Cluster A: Canonical Fundamentals

Elements:

- `homegrown/` skills;
- `homegrown/*/references/*.md`;
- `homegrown/protocols/*.md`;
- installer path rewriting;
- active runner behavior.

Coupling is high and path stability matters strongly. This is the canonical implementation layer.

### Cluster B: Inquiry Persistence Corpus

Elements:

- `devdocs/inquiries/<folder>/`;
- `_branch.md`;
- `_state.md`;
- discipline outputs;
- `finding.md`;
- `docarchive/`.

Coupling is moderate. These artifacts preserve process and provenance. They can move if active resumption and important references are handled.

### Cluster C: Active Surface

Elements:

- currently active inquiry folders;
- recently completed findings;
- folders likely to be resumed;
- user's daily scanning workflow;
- AI's broad folder scan.

Coupling is high with naming and archive policy. The active surface should be small and recency-readable.

### Cluster D: Cold Archive

Elements:

- completed old inquiries;
- superseded inquiries;
- bad findings kept for diagnosis;
- abandoned or incomplete old inquiry starts;
- archived internal folder structure.

Coupling is low with daily work. Movement into `_archive/` is acceptable if provenance is preserved.

### Cluster E: Reference Maintenance

Elements:

- `refines` / `corrects` frontmatter;
- body paths to findings;
- `_state.md` relationships;
- external docs pointing to findings;
- stale/bad references.

Coupling varies by importance. Some references should be updated; some can become historical debt.

### Cluster F: Tooling / Runner Creation

Elements:

- MVL/MVL+ folder creation convention;
- date-prefixed slug generation;
- resume behavior for archive paths;
- conclude behavior.

Coupling is high with future consistency. If new inquiries should be date-prefixed, runners must encode it.

## 2. Boundary Detection

Natural boundaries:

1. **Naming policy:** `YYYY-MM-DD_slug` or topic-only slug.
2. **Archive policy:** which inquiries move to `_archive/`.
3. **Migration policy:** whether existing folders migrate and how far.
4. **Reference policy:** which references are rewritten.
5. **Runner policy:** how future inquiry folders are created.
6. **README policy:** delete, demote, or generate later.

The key boundary is between **active/resumable** and **cold/provenance**. Active items deserve path care; cold items can move.

## 3. Bottom-Up Validation

Atomic observations:

- A new inquiry folder name is chosen once at creation.
- A date-prefixed folder carries recency without reading internal files.
- Moving a folder to `_archive/` preserves its internal structure.
- Active resume can still work if the user points `/MVL+` at an archive path, but default discovery is cleaner if active folders remain in root.
- Old finding references are useful but not all mission-critical.
- A manual README can drift and does not improve raw folder scan.

These atoms validate a lifecycle split: active root, archived cold storage.

## 4. Question Tree

### Q1: What is the canonical layer?

Verification criteria:

- [ ] Identifies `homegrown/` fundamentals/protocols as canonical.
- [ ] Identifies inquiries as persistence/provenance.
- [ ] Explains why this changes the storage decision.

### Q2: What should new inquiry folders be named?

Verification criteria:

- [ ] Provides recency visible from folder name.
- [ ] Keeps topic readable.
- [ ] Is easy for MVL/MVL+ runners to produce.

### Q3: What should be archived physically?

Verification criteria:

- [ ] Reduces active root clutter.
- [ ] Preserves history by moving, not deleting.
- [ ] Protects active/resumable folders.

### Q4: What should happen to existing folders?

Verification criteria:

- [ ] Provides a safe migration path.
- [ ] Does not require perfect reference rewriting.
- [ ] Allows staged adoption.

### Q5: How should references be handled?

Verification criteria:

- [ ] Updates high-value references.
- [ ] Allows low-value archived references to degrade.
- [ ] Records that migration happened.

### Q6: What should happen to README?

Verification criteria:

- [ ] Avoids ongoing manual maintenance.
- [ ] Does not pretend to solve storage clutter.
- [ ] Preserves any useful note if needed.

## 5. Interface Map

| Source Piece | Target Piece | Flow |
|---|---|---|
| Canonical layer decision | Migration policy | Determines how much path breakage is acceptable. |
| Naming policy | Runner policy | MVL/MVL+ must create date-prefixed folders if policy changes. |
| Archive policy | Reference policy | Moving folders determines which references may need rewrite. |
| Active/cold boundary | Archive policy | Only cold folders should move initially. |
| Reference policy | Migration policy | Migration effort depends on reference tier selected. |
| README policy | Archive/naming policy | README can be removed if storage carries the navigation signal. |

## 6. Dependency Order

1. Correct the conceptual model: inquiries are provenance, not canonical fundamentals.
2. Choose folder naming for new inquiries: `YYYY-MM-DD_slug`.
3. Choose archive shape: `devdocs/inquiries/_archive/`.
4. Define active/cold movement rules.
5. Define reference rewrite tiers.
6. Decide whether to perform retroactive migration now.
7. Update MVL/MVL+ runner specs if adopting date-prefixed names.
8. Delete or demote manual README.

## 7. Self-Evaluation

| Dimension | Result | Reason |
|---|---|---|
| Independence | PASS | Naming, archiving, references, runner changes, and README can be changed in stages. |
| Completeness | PASS | Covers user concerns and prior-finding corrections. |
| Reassembly | PASS | Pieces combine into a full storage lifecycle policy. |
| Tractability | PASS | Implementation can be staged: policy finding first, runner change next, migration later. |
| Interface clarity | PASS | Main interfaces are active/cold boundary and reference rewrite tiers. |
| Balance | PASS | No piece hides the whole complexity; migration is explicitly separated. |
| Confidence | HIGH | Evidence and user correction both support the revised boundary. |

## Decomposition Output

The corrected solution should be assembled as:

1. Admit the prior canonicity mistake.
2. Adopt `YYYY-MM-DD_slug` for new inquiry folders.
3. Add `devdocs/inquiries/_archive/`.
4. Move cold completed/superseded/bad inquiries there in deliberate batches.
5. Update important references only.
6. Do not rely on a manual README.
7. Update runner specs only after the user approves the policy.
