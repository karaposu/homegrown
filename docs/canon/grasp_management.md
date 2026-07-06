# Grasp Management — the reach/grasp constraint and the four levers

## The one idea

A thinking session works over a large external memory — the project's files on disk — but it can only hold a small part of that memory in active context at any moment. Two things must be kept apart:

- **Reach** — everything the session *could* look up: the whole repository, all canon, every past finding.
- **Grasp** — the small part it *actually holds* in context right now, live and shaping the thinking.

Reach is vast; grasp is small. **Grasp management** is the discipline of running that small live fraction well: what to let in, what to keep, what to compress, what to load next. Grasp is the scarce resource of a session, and managing it is *what to keep* — the "keep" half of the project's *precision, not scale* stance.

## Where this sits

Grasp management is a meaning-layer theory of two things the architecture already names:

- **Traversal memory** — the cross-session record of where thinking has been (what was visited, what was selected, why, and how it turned out). Grasp management explains what that record is *for*: it is how a later session rebuilds grasp it did not inherit.
- **Warming** — what a fresh, context-isolated navigation session loads to orient itself before it steers. Warming *is* the act of building initial grasp from reach.

It is not a new component. It is the vocabulary for a constraint the architecture was already working against.

## The memory that grasp manages

Memory here is not one thing. It is a family of kinds moving through a lifecycle.

The **kinds**:
- **Working** — the live context of a single session (this is the grain grasp is measured in).
- **Episodic** — records of what happened: which inquiries ran, what was selected, and why.
- **Semantic** — distilled, gist-level knowledge: canon.
- **Option** — the live set of open directions still worth taking.

The **lifecycle** — the stages a piece of memory moves through:
- **Encode** — take something in.
- **Consolidate** — the offline, between-session pass that turns raw episodic records into distilled semantic gist. (Writing a canon document is consolidation: an episodic inquiry becomes semantic canon.)
- **Retrieve** — load a piece back into working context when it is needed.
- **Reconsolidate** — re-open something already settled to correct it. This is useful and dangerous in the same motion: re-opening a settled finding can corrupt it as easily as improve it.

Grasp is specifically the **working** slice — the loaded fraction of this whole family that is live at once.

## reach ≠ grasp — the availability illusion

Because a session can look anything up, it *feels* as though it already "has" all of canon and memory. It does not. Only the loaded fraction is live and shaping the thinking; the rest is inert on disk until something loads it. The ability to look something up is not the same as holding it.

This is the constraint every lever below works against: treat what is merely reachable as if it were grasped, and the thinking silently runs on far less than it assumes.

## The four levers

Each lever is an application of a primitive the thinking-space vocabulary already names. (The primitives: **Working Memory** is the context buffer itself; **Inhibition** dampens candidate content before it takes up room; **Intuition-similarity** recognizes resemblance, by surface or by structure; **Motivation** allocates how much effort and room a line of thinking gets; **Context-framing** scopes what counts as relevant.)

- **Compress** — *consolidation.* A distilled gist costs less grasp to hold than the raw detail it came from. Turning raw records into canon buys grasp back. Compression is the lever that makes more room without dropping meaning.

- **Keep junk out** — *Inhibition.* Gate polluting or irrelevant content at the point it would enter the buffer, rather than trimming it later. Inhibition is the primitive that dampens a candidate before it costs anything. One caution built into the lever: gate conservatively. An over-aggressive keep-out can exclude something that turns out to be needed — the point is to protect grasp *for good thinking*, not to make sessions cheaper.

- **Diversify / evict overlap** — *Intuition-similarity.* When grasp must be trimmed, drop the items that most overlap what is already held. Interference scales with similarity, not just with count: two near-duplicate items crowd the thinking more than two unrelated ones. Intuition-similarity is how the overlap is spotted.

- **Index for targeted retrieve** — *Intuition-similarity, made stable.* Canon is reach, not grasp, until an index makes the right piece loadable on cue. Organizing memory as cue→content indexes lets a session spend its grasp loading the *right* thing instead of searching for it.

These four are best held as **one explicit budget** rather than four scattered fixes — *Motivation* is the primitive that treats grasp as a single resource to allocate deliberately across a session.

## In the project's own terms

- **grasp** is the live grain of the **Working Memory** primitive (the context buffer); **reach** is the external store that **Context-framing** marks as relevant but that is not loaded.
- The keep-out lever is **Inhibition** at the buffer's intake boundary; diversify-and-index is **Intuition-similarity**; the grasp budget is **Motivation**; compress is the *consolidate* stage of the lifecycle.
- The whole is the meaning-layer theory of **traversal memory** and of a fresh navigation session's **warming** — and it lives in *what to keep*.

## Scope and honest bounds

- **This is vocabulary and a frame, not a build.** The levers name applications of primitives that already exist; building an actual keep-out gate or a retrieval index is separate work, taken up only when it is needed, and — for the keep-out especially — built conservatively.
- **It extends, it does not replace.** Grasp management adds the reach/grasp constraint and the four levers on top of the memory-kinds-and-lifecycle account. It sharpens that account; it does not overturn it.
- **Our memory is external, so retrieval *costs* grasp.** In a human mind a single cue can reinstate a large amount of memory for free. Here, memory sits in files that are inert until loaded, and loading spends grasp. So indexing makes a load *targeted* — it does not make grasp bigger. The reach/grasp gap is real precisely because closing it always costs a load. Any claim that "better retrieval expands what we hold" should be checked against this: it makes retrieval *cheaper to aim*, not *free*.
