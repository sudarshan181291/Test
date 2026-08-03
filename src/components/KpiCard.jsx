export default function KpiCard({ label, value, icon, delta }) {
  const up = delta >= 0
  return (
    <div className="kpi">
      <div className="kpi__top">
        <div className="kpi__icon">{icon}</div>
        <span className={`kpi__delta ${up ? 'up' : 'down'}`}>
          {up ? '▲' : '▼'} {Math.abs(delta)}%
        </span>
      </div>
      <div className="kpi__value">{value}</div>
      <div className="kpi__label">{label}</div>
    </div>
  )
}
