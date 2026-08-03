import { useMemo, useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar.jsx'
import KpiCard from './components/KpiCard.jsx'
import {
  ACTIVITY,
  computeKpis,
  initialServers,
  provisionServer,
} from './data.js'

const TITLES = {
  dashboard: { h1: 'Dashboard', p: 'Fleet health and key metrics at a glance' },
  servers: { h1: 'Servers', p: 'Manage your provisioned compute fleet' },
  domains: { h1: 'Domains', p: 'DNS zones and TLS certificates' },
  billing: { h1: 'Billing', p: 'Invoices, usage and payment methods' },
  support: { h1: 'Support', p: 'Tickets and incident history' },
  settings: { h1: 'Settings', p: 'Account and console preferences' },
}

export default function App() {
  const [active, setActive] = useState('dashboard')
  const [servers, setServers] = useState(initialServers)

  const kpis = useMemo(() => computeKpis(servers), [servers])
  const title = TITLES[active]

  function handleProvision() {
    setServers((prev) => [provisionServer(), ...prev])
  }

  const showDashboard = active === 'dashboard' || active === 'servers'

  return (
    <div className="app">
      <Sidebar active={active} onNavigate={setActive} />

      <main className="main">
        <header className="topbar">
          <div className="topbar__title">
            <h1>{title.h1}</h1>
            <p>{title.p}</p>
          </div>
          <div className="topbar__actions">
            <button className="btn">⤓ Export</button>
            <button className="btn btn--primary" onClick={handleProvision}>
              + Provision server
            </button>
          </div>
        </header>

        {showDashboard ? (
          <>
            <section className="kpi-grid">
              {kpis.map((kpi) => (
                <KpiCard key={kpi.id} {...kpi} />
              ))}
            </section>

            <section className="panels">
              <div className="panel">
                <div className="panel__head">
                  <h2>Server Fleet</h2>
                  <span style={{ color: 'var(--text-dim)', fontSize: 13 }}>
                    {servers.length} nodes
                  </span>
                </div>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Node</th>
                      <th>Region</th>
                      <th>Plan</th>
                      <th>CPU</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {servers.map((s) => (
                      <tr key={s.id}>
                        <td style={{ fontWeight: 600 }}>{s.id}</td>
                        <td>{s.region}</td>
                        <td>{s.plan}</td>
                        <td>
                          <div className="bar">
                            <span style={{ width: `${s.cpu}%` }} />
                          </div>
                        </td>
                        <td>
                          <span className={`status ${s.status}`}>{s.status}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="panel">
                <div className="panel__head">
                  <h2>Recent Activity</h2>
                </div>
                <ul className="activity">
                  {ACTIVITY.map((a, i) => (
                    <li key={i}>
                      <span className="dot" />
                      <div>
                        <div>{a.text}</div>
                        <div className="time">{a.time}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </>
        ) : (
          <div className="panel">
            <div className="placeholder">
              The <strong>{title.h1}</strong> section is coming soon.
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
