import { useEffect, useState, useCallback } from 'react'
import { useAuthUser } from './useAuthUser'

export type LessonType = 'academic' | 'vocational' | 'life' | 'trading' | 'programming'

export type LessonConfig = {
  type: LessonType
  subjectSlug: string
  lessonSlug: string
  title: string
  subjectTitle: string
  url: string
}

export type ProgressItem = {
  key: string
  type: LessonType
  subjectSlug: string
  lessonSlug: string
  title: string
  subjectTitle: string
  url: string
  status: 'in-progress' | 'completed'
  saved: boolean
  lastViewedAt: number
  completedAt: number | null
}

export const STORAGE_KEY = (uid: string) => `mobzy_progress_${uid}`

function readAll(uid: string): ProgressItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY(uid))
    if (!raw) return []
    const arr = JSON.parse(raw)
    return Array.isArray(arr) ? arr.filter((x) => x && typeof x === 'object') : []
  } catch {
    return []
  }
}

function writeAll(uid: string, items: ProgressItem[]) {
  try {
    localStorage.setItem(STORAGE_KEY(uid), JSON.stringify(items))
    window.dispatchEvent(new CustomEvent('mobzy:progress-changed', { detail: { uid } }))
  } catch {}
}

function upsert(uid: string, item: ProgressItem) {
  try {
    const all = readAll(uid)
    const idx = all.findIndex((i) => i.key === item.key)
    if (idx >= 0) all[idx] = { ...all[idx], ...item }
    else all.push(item)
    writeAll(uid, all)
  } catch {}
}

export function useLessonProgress(config: LessonConfig) {
  const { user, loading: authLoading } = useAuthUser()
  const [saved, setSaved] = useState(false)
  const [completed, setCompleted] = useState(false)
  const [loaded, setLoaded] = useState(false)

  const itemKey = `${config.type}__${config.subjectSlug}__${config.lessonSlug}`

  // Load existing state — all guarded
  useEffect(() => {
    if (authLoading) return
    if (!user) { setLoaded(true); return }
    try {
      const all = readAll(user.uid)
      const found = all.find((i) => i.key === itemKey)
      if (found) {
        setSaved(!!found.saved)
        setCompleted(found.status === 'completed')
      } else {
        setSaved(false)
        setCompleted(false)
      }
    } catch {
      setSaved(false)
      setCompleted(false)
    }
    setLoaded(true)
  }, [user, authLoading, itemKey])

  // Auto-track visit — fully guarded
  useEffect(() => {
    if (!user || !loaded) return
    if (!config.title || !config.lessonSlug) return
    try {
      upsert(user.uid, {
        key: itemKey,
        type: config.type,
        subjectSlug: config.subjectSlug,
        lessonSlug: config.lessonSlug,
        title: config.title,
        subjectTitle: config.subjectTitle,
        url: config.url,
        status: completed ? 'completed' : 'in-progress',
        saved,
        lastViewedAt: Date.now(),
        completedAt: completed ? Date.now() : null,
      })
    } catch {}
  }, [user, loaded, completed, saved, itemKey, config.type, config.subjectSlug, config.lessonSlug, config.title, config.subjectTitle, config.url])

  const toggleSave = useCallback(() => {
    if (!user) { alert('Sign in to save lessons'); return }
    try {
      const newSaved = !saved
      setSaved(newSaved)
      upsert(user.uid, {
        key: itemKey,
        type: config.type,
        subjectSlug: config.subjectSlug,
        lessonSlug: config.lessonSlug,
        title: config.title,
        subjectTitle: config.subjectTitle,
        url: config.url,
        status: completed ? 'completed' : 'in-progress',
        saved: newSaved,
        lastViewedAt: Date.now(),
        completedAt: completed ? Date.now() : null,
      })
    } catch (e) {
      console.error('[toggleSave]', e)
    }
  }, [user, saved, completed, itemKey, config])

  const markCompleted = useCallback(() => {
    if (!user) { alert('Sign in to track your progress'); return }
    try {
      const newCompleted = !completed
      setCompleted(newCompleted)
      upsert(user.uid, {
        key: itemKey,
        type: config.type,
        subjectSlug: config.subjectSlug,
        lessonSlug: config.lessonSlug,
        title: config.title,
        subjectTitle: config.subjectTitle,
        url: config.url,
        status: newCompleted ? 'completed' : 'in-progress',
        saved,
        lastViewedAt: Date.now(),
        completedAt: newCompleted ? Date.now() : null,
      })
    } catch (e) {
      console.error('[markCompleted]', e)
    }
  }, [user, saved, completed, itemKey, config])

  return { user, authLoading, saved, completed, loaded, toggleSave, markCompleted }
}
