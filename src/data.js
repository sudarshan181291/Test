export const NAV_ITEMS = [
  { id: 'dashboard', label: 'Dashboard', icon: '▤' },
  { id: 'servers', label: 'Servers', icon: '▣' },
  { id: 'domains', label: 'Domains', icon: '◎' },
  { id: 'billing', label: 'Billing', icon: '▤' },
  { id: 'support', label: 'Support', icon: '☎' },
  { id: 'settings', label: 'Settings', icon: '⚙' },
]

const REGIONS = ['us-east-1', 'us-west-2', 'eu-central-1', 'ap-south-1']
const PLANS = ['Nano', 'Standard', 'Pro', 'Metal']

let seq = 5

export function initialServers() {
  return [
    { id: 'web-01', region: 'us-east-1', plan: 'Pro', cpu: 42, status: 'online' },
    { id: 'db-primary', region: 'us-east-1', plan: 'Metal', cpu: 67, status: 'online' },
    { id: 'cache-02', region: 'eu-central-1', plan: 'Standard', cpu: 23, status: 'online' },
    { id: 'worker-07', region: 'ap-south-1', plan: 'Nano', cpu: 88, status: 'offline' },
  ]
}

export function provisionServer() {
  seq += 1
  const region = REGIONS[Math.floor(Math.random() * REGIONS.length)]
  const plan = PLANS[Math.floor(Math.random() * PLANS.length)]
  return {
    id: `node-${String(seq).padStart(2, '0')}`,
    region,
    plan,
    cpu: Math.floor(Math.random() * 30) + 5,
    status: 'provisioning',
  }
}

// Compute KPIs derived from the current server fleet.
export function computeKpis(servers) {
  const total = servers.length
  const online = servers.filter((s) => s.status === 'online').length
  const avgCpu = total
    ? Math.round(servers.reduce((sum, s) => sum + s.cpu, 0) / total)
    : 0
  const uptime = total ? (98 + (online / total) * 2).toFixed(2) : '100.00'
  const bandwidth = (total * 1.8 + Math.random() * 2).toFixed(1)

  return [
    { id: 'servers', label: 'Active Servers', value: `${online}/${total}`, icon: '▣', delta: +4.2 },
    { id: 'cpu', label: 'Avg CPU Load', value: `${avgCpu}%`, icon: '◐', delta: avgCpu > 60 ? +6.1 : -3.4 },
    { id: 'bandwidth', label: 'Bandwidth (TB/mo)', value: bandwidth, icon: '⇅', delta: +2.8 },
    { id: 'uptime', label: 'Fleet Uptime', value: `${uptime}%`, icon: '✓', delta: +0.1 },
  ]
}

export const ACTIVITY = [
  { text: 'Server web-01 auto-scaled to 4 vCPU', time: '2 min ago' },
  { text: 'TLS certificate renewed for acme.io', time: '18 min ago' },
  { text: 'Backup snapshot completed (db-primary)', time: '1 hour ago' },
  { text: 'New invoice #10442 generated', time: '3 hours ago' },
  { text: 'Firewall rule updated on cache-02', time: '5 hours ago' },
]
