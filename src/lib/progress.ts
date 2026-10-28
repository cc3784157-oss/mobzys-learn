// Simple exercise tracking — no locks, no gating. Just remembers what user solved.
export function isExercisePassed(exerciseId: string): boolean {
  try {
    const raw = localStorage.getItem('mobzy_ex_' + exerciseId)
    if (!raw) return false
    return JSON.parse(raw).passed === true
  } catch {
    return false
  }
}

export function markExercisePassed(exerciseId: string) {
  try {
    const raw = localStorage.getItem('mobzy_ex_' + exerciseId)
    const data = raw ? JSON.parse(raw) : { count: 0, lastAt: 0 }
    data.passed = true
    data.passedAt = Date.now()
    localStorage.setItem('mobzy_ex_' + exerciseId, JSON.stringify(data))
  } catch {}
}