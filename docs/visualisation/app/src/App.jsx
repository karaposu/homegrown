// The app shell: the loading -> ready | error state machine, the map/detail
// view switch, and the wiring between organs. Never a blank canvas.

import React, { useEffect, useState } from 'react'
import { loadAtlas, AtlasError, SCHEMA } from './data.js'
import Scene from './scene.jsx'
import Detail from './detail.jsx'
import Hud from './hud.jsx'

export default function App() {
  const [state, setState] = useState({ phase: 'loading' })
  const [view, setView] = useState('map')
  const [detailId, setDetailId] = useState(null)
  const [focusId, setFocusId] = useState(null)
  const [lens, setLens] = useState('road')
  const [filters, setFilters] = useState({})
  const [flyRequest, setFlyRequest] = useState(null)
  const [roadApi, setRoadApi] = useState(null)

  useEffect(() => {
    loadAtlas()
      .then((atlas) => setState({ phase: 'ready', atlas }))
      .catch((err) => setState({ phase: 'error', err }))
  }, [])

  if (state.phase === 'loading') {
    return (
      <div className="nm-root center">
        <div className="loading-chip">loading the atlas… (a few MB, one moment)</div>
      </div>
    )
  }

  if (state.phase === 'error') {
    const raw = state.err instanceof AtlasError ? state.err.raw : null
    return (
      <div className="nm-root center">
        <div className="error-card">
          <h2>the atlas could not load</h2>
          <p>{String(state.err.message || state.err)}</p>
          {raw?.schema && <p>found schema: <code>{raw.schema}</code> · expected: <code>{SCHEMA}</code></p>}
          {raw?.counts && <p>the file reports {raw.counts.nodes} nodes / {raw.counts.edges} edges.</p>}
          <p className="regen">
            regenerate the snapshot:<br />
            <code>python3 docs/visualisation/inquiries2visualisationsJSONmaker.py --out docs/visualisation/app/public/data.json</code>
          </p>
        </div>
      </div>
    )
  }

  const { atlas } = state
  const openDetail = (id) => {
    setDetailId(id === '__root__' ? '__root__' : id)
    setView('detail')
  }
  const fly = (id) => {
    setView('map')
    setFocusId(id)
    setFlyRequest({ id, t: Date.now() })
  }

  return (
    <div className="nm-root">
      <Scene
        atlas={atlas}
        lens={lens}
        filters={filters}
        focusId={focusId}
        onFocus={setFocusId}
        onOpen={openDetail}
        flyRequest={flyRequest}
        onRoadApi={setRoadApi}
      />
      <Hud
        atlas={atlas}
        lens={lens}
        setLens={setLens}
        filters={filters}
        setFilters={setFilters}
        onFly={fly}
        onOpen={openDetail}
        roadApi={lens === 'road' ? roadApi : null}
      />
      {view === 'detail' && (
        <Detail
          atlas={atlas}
          id={detailId}
          onBack={() => setView('map')}
          onOpen={openDetail}
          onFly={fly}
          roadApi={lens === 'road' ? roadApi : null}
        />
      )}
    </div>
  )
}
