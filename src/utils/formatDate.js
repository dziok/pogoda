export const formatHour = (dt) => new Date(dt).toLocaleString('pl-PL', { hour: 'numeric', minute: 'numeric' })
