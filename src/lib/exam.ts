import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore'
import { db } from './firebase'
import { generateCertId } from './certificate'

export type ExamResult = {
  score: number
  total: number
  passed: boolean
  completedAt: number
  certId?: string
}

export async function saveExamResult(
  uid: string,
  courseSlug: string,
  score: number,
  total: number,
  passed: boolean
): Promise<string | undefined> {
  const ref = doc(db, 'users', uid, 'exams', courseSlug)
  let certId: string | undefined
  if (passed) {
    certId = generateCertId()
  }
  await setDoc(ref, {
    score,
    total,
    passed,
    completedAt: Date.now(),
    serverTimestamp: serverTimestamp(),
    ...(certId ? { certId } : {}),
  }, { merge: true })
  return certId
}

export async function getExamResult(
  uid: string,
  courseSlug: string
): Promise<ExamResult | null> {
  try {
    const ref = doc(db, 'users', uid, 'exams', courseSlug)
    const snap = await getDoc(ref)
    if (!snap.exists()) return null
    const d = snap.data()
    return {
      score: d.score || 0,
      total: d.total || 0,
      passed: !!d.passed,
      completedAt: d.completedAt || 0,
      certId: d.certId,
    }
  } catch {
    return null
  }
}

export async function getAllExamResults(
  uid: string,
  courseSlugs: string[]
): Promise<Record<string, ExamResult>> {
  const results: Record<string, ExamResult> = {}
  await Promise.all(
    courseSlugs.map(async (slug) => {
      const r = await getExamResult(uid, slug)
      if (r) results[slug] = r
    })
  )
  return results
}