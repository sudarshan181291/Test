import { NAV_ITEMS } from '../data.js'

export default function Sidebar({ active, onNavigate }) {
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand__logo">N</div>
        <div>
          <div className="brand__name">NimbusHost</div>
          <div className="brand__sub">Provider Console</div>
        </div>
      </div>

      <div className="nav__label">Overview</div>
      <nav>
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            className={`nav__item ${active === item.id ? 'active' : ''}`}
            onClick={() => onNavigate(item.id)}
            aria-current={active === item.id ? 'page' : undefined}
          >
            <span className="nav__icon">{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="nav__spacer" />

      <div className="nav__user">
        <div className="avatar">AO</div>
        <div>
          <div style={{ fontSize: 13, fontWeight: 600 }}>Ava Operator</div>
          <div style={{ fontSize: 11, color: 'var(--text-dim)' }}>admin@nimbus.io</div>
        </div>
      </div>
    </aside>
  )
}
