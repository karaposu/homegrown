# Innovation: Navigation Auto Freshness Preflight

## Seed

Refreshing and syncing should be something the Navigation session checks automatically before running Navigation.

## Mechanism Outputs

### Lens Shifting

Generic: Treat Navigation as a consumer that must validate its input freshness before use.

Focused: Navigation should have an input-safety preflight, like checking route-card fields after output.

Contrarian: The important automatic behavior is not "refresh"; it is "refuse to pretend stale context is fresh."

### Combination

Generic: Combine Navigation invocation with a freshness gate.

Focused: `homegrown/navigation/SKILL.md` can call out to `homegrown/navigation/warmup/navigator-refresh.md` when its preflight detects bounded staleness.

Contrarian: Combine the check with telemetry only: even if the user forces a thin run, Navigation records that freshness was not satisfied.

### Inversion

Generic: Instead of asking users to remember refresh, make Navigation prove it is fresh enough.

Focused: "Run Navigation" should mean "check freshness, refresh if needed, then map routes."

Contrarian: If Navigation cannot establish freshness, the default should be not to run a normal map.

### Constraint Manipulation

Generic: Add the constraint "Navigation must not silently mutate context."

Focused: Preflight may route to refresh, but the sync brief must be explicit before the map is produced.

Contrarian: Add the constraint "local inquiry Navigation should not pay project-refresh cost." This creates a cheap `fresh_local` outcome.

### Absence Recognition

Generic: The missing thing is a preflight outcome vocabulary.

Focused: `fresh_local`, `fresh_project`, `refresh_needed`, `full_warmup_needed`, and `thin_allowed` give Navigation a practical control surface.

Contrarian: The missing trace is "why Navigation believed context was fresh." Add freshness outcome to Navigation telemetry.

### Domain Transfer

Generic: Borrow from compilers/build tools: check whether inputs are stale before running the expensive operation.

Focused: Navigation should treat its warmed context as a cache with invalidation signals.

Contrarian: Borrow from database transactions: stale reads should be marked, not silently committed as current route truth.

### Extrapolation

Generic: As Homegrown uses multiple sessions, stale Navigation maps will become more common.

Focused: Without automatic preflight, multi-head Navigation will produce divergent maps because each head sees a different context vintage.

Contrarian: Over-automatic refresh can also become a burden if every Navigation call reads too much. The preflight must be cheap.

## Assembly Candidate

Add a `Freshness Preflight` section to `homegrown/navigation/SKILL.md` before the ordinary Navigation process.

The section should:

- always run;
- classify source scope and freshness;
- proceed immediately for local/fresh cases;
- route bounded stale cases to `navigator-refresh.md`;
- require full warm-up for missing/global stale anchors;
- record the freshness outcome in Navigation telemetry.

## Innovation Telemetry

Generators applied: 4/4.

Framers applied: 3/3.

Convergence: YES. All mechanisms point to automatic preflight with delegated refresh.

Survivors tested: 1/1.

Failure modes observed: none significant. Main risk is hidden refresh, controlled by sync brief requirement.

Overall: PROCEED.

