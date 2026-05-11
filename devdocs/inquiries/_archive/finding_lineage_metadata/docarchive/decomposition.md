# Decomposition: Finding Lineage Metadata

## 1. Coupling Map

### Major Clusters

1. **Lineage metadata**
   - `refines`
   - `prior_inquiry`
   - `revision_kind`
   - Prior path in the body

2. **Human-readable revision explanation**
   - Prior path
   - Revision trigger
   - What's preserved
   - What's changed
   - What's new
   - Migration

3. **Raw source input capture**
   - Raw user correction
   - Raw prompt
   - Omission/redaction rule
   - End-of-file placement

4. **Readability controls**
   - Source input at the end
   - Optional collapsible section
   - Clear "historical input, not conclusion" label

5. **Future diagnosis path**
   - Later MVL analysis on linked findings
   - Deferred `loop-diagnose`
   - Maintenance ledger integration

### Natural Boundaries

- **Boundary A:** Metadata vs main argument.
- **Boundary B:** Capturing raw evidence vs analyzing cause.
- **Boundary C:** Machine-readable lineage vs human-readable lineage.
- **Boundary D:** Required lineage fields vs optional raw input.

### Bottom-Up Validation

The user's proposal naturally decomposes into:

- previous path,
- user's correction/direction,
- new finding,
- raw input placement.

These map cleanly to lineage, revision explanation, and source appendix.

## 2. Question Tree

### Q1: What fields should be added to finding frontmatter?

Verification criteria:

- [ ] Identifies machine-readable fields.
- [ ] Avoids long raw text in frontmatter.
- [ ] Keeps compatibility with existing `refines`.

### Q2: What fields should be added to Changes from Prior?

Verification criteria:

- [ ] Adds prior path.
- [ ] Adds revision trigger.
- [ ] Preserves existing useful fields.
- [ ] Keeps section readable.

### Q3: Where should raw user input live?

Verification criteria:

- [ ] Preserves raw correction/prompt.
- [ ] Keeps main finding readable.
- [ ] Supports omission/redaction.
- [ ] Makes later MVL diagnosis possible.

### Q4: What happens to `loop-diagnose`?

Verification criteria:

- [ ] Decides whether it is replaced, deferred, or kept.
- [ ] Defines the trigger for reconsidering it.
- [ ] Avoids premature failure attribution.

### Q5: What CONCLUDE changes are implied?

Verification criteria:

- [ ] Defines template changes.
- [ ] Defines when raw input is required.
- [ ] Defines whether source input is optional.
- [ ] Does not require implementing a new protocol first.

### Q6: How does this support Level 1 self-maintenance?

Verification criteria:

- [ ] Explains how lineage creates data.
- [ ] Connects to future maintenance entries.
- [ ] Keeps analysis separate from data capture.

## 3. Interface Map

### Q1 -> Q2

- **Flow:** Frontmatter establishes machine lineage; body makes it readable.
- **Direction:** One-way.
- **Interface:** The same prior finding path can appear in both places for different users.

### Q2 -> Q3

- **Flow:** Revision trigger explains why raw input matters.
- **Direction:** One-way.
- **Interface:** Raw input should support the revision trigger without crowding the Changes section.

### Q3 -> Q4

- **Flow:** If raw input is preserved, immediate `loop-diagnose` is less necessary.
- **Direction:** One-way.
- **Interface:** Captured inputs let MVL diagnose later.

### Q4 -> Q5

- **Flow:** Deferring `loop-diagnose` means CONCLUDE carries the next implementation.
- **Direction:** One-way.
- **Interface:** Template change is the practical next step.

### Q5 -> Q6

- **Flow:** CONCLUDE output becomes Level 1 self-maintenance evidence.
- **Direction:** One-way.
- **Interface:** Finding lineage can later feed `devdocs/self_maintenance.md`.

## 4. Dependency Order

1. **Q4: loop-diagnose decision** sets the level of ambition.
2. **Q1: frontmatter fields** sets machine-readable lineage.
3. **Q2: Changes fields** sets human-readable lineage.
4. **Q3: raw input appendix** preserves correction evidence.
5. **Q5: CONCLUDE changes** packages the implementation.
6. **Q6: self-maintenance integration** explains the value.

## 5. Self-Evaluation

### Independence

**Pass.** Each field group can be specified independently.

### Completeness

**Pass.** The decomposition covers lineage fields, raw input placement, loop-diagnose deferral, and CONCLUDE implications.

### Reassembly

**Pass.** The pieces reassemble into a concrete finding-template change.

### Tractability

**Pass.** This can be implemented as a documentation/template change before code or new protocols.

### Interface Clarity

**Pass.** The key interface is raw input -> future MVL diagnosis. It is explicit that raw input does not itself diagnose failures.

### Balance

**Pass.** More detail goes to the fields because they are the buildable output.

### Confidence

**High.** The decomposition matches the user's correction and the existing CONCLUDE template.
