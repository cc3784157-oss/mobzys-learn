import { useEffect, useState, useRef } from 'react'
import { Routes, Route, Link, Outlet, useNavigate } from 'react-router-dom'
import { onAuthStateChanged, signOut, type User } from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore'
import { useTranslation } from 'react-i18next'
import { auth, db } from './lib/firebase'
import Logo from './components/Logo'
import RequireAuth from './components/RequireAuth'
import Home from './pages/Home'
import CourseDetail from './pages/CourseDetail'
import LessonPlayer from './pages/LessonPlayer'
import Exam from './pages/Exam'
import About from './pages/About'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Refunds from './pages/Refunds'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import NotFound from './pages/NotFound'
import SignIn from './pages/SignIn'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Settings from './pages/Settings'
import TikTokGate from './components/TikTokGate'
import AppOpenAd from './components/AppOpenAd'
import './App.css'
import ErrorBoundary from './components/ErrorBoundary'
import LanguagesIndex from './pages/LanguagesIndex'
import LanguageSubjectPage from './pages/LanguageSubjectPage'
import LanguageLessonPage from './pages/LanguageLessonPage'
import LifeIndex from './pages/LifeIndex'
import LifeSubjectPage from './pages/LifeSubjectPage'
import LifeLessonPage from './pages/LifeLessonPage'
import VocIndex from './pages/VocIndex'
import VocSubjectPage from './pages/VocSubjectPage'
import VocLessonPage from './pages/VocLessonPage'
import MainDashboard from './pages/MainDashboard'
import AcademicDashboard from './pages/AcademicDashboard'
import AcademicLevelPage from './pages/AcademicLevelPage'
import AcademicSubjectPage from './pages/AcademicSubjectPage'
import AcademicLessonPage from './pages/AcademicLessonPage'
import PastPapers from './pages/PastPapers'
import TradingHome from './pages/TradingHome'
import TradingAcademy from './pages/TradingAcademy'
import TradingLessonPage from './pages/TradingLessonPage'
import TradingSimulator from './pages/TradingSimulator'
import TradingDemoPlatforms from './pages/TradingDemoPlatforms'
import ItemDetail from './pages/ItemDetail'
import SubjectsIndex from './pages/SubjectsIndex'
import SubjectPage from './pages/SubjectPage'
import SubjectLesson from './pages/SubjectLesson'
import Downloads from './pages/Downloads'
import Repair from './pages/Repair'
import RepairGuide from './pages/RepairGuide'

const AUTH_HINT_KEY = 'mobzy_was_logged_in'

function Layout() {
  const { t } = useTranslation()
  const [user, setUser] = useState<User | null>(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const [photoBase64, setPhotoBase64] = useState<string | null>(null)
  const [showAvatarPlaceholder, setShowAvatarPlaceholder] = useState<boolean>(
    () => localStorage.getItem(AUTH_HINT_KEY) === '1'
  )
  const menuRef = useRef<HTMLDivElement>(null)
  const navigate = useNavigate()

  useEffect(() => {
    const savedTheme = localStorage.getItem('mobzy_theme')
    if (savedTheme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark')
    }
  }, [])

  useEffect(() => {
    return onAuthStateChanged(auth, async (u) => {
      setUser(u)
      setShowAvatarPlaceholder(false)
      if (u) {
        localStorage.setItem(AUTH_HINT_KEY, '1')
        try {
          const snap = await getDoc(doc(db, 'users', u.uid))
          if (snap.exists() && snap.data().photoBase64) {
            setPhotoBase64(snap.data().photoBase64)
          } else {
            setPhotoBase64(null)
          }
        } catch {
          setPhotoBase64(null)
        }
      } else {
        localStorage.removeItem(AUTH_HINT_KEY)
        setPhotoBase64(null)
      }
    })
  }, [])

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setUserMenuOpen(false)
      }
    }
    if (userMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [userMenuOpen])

  async function handleSignOut() {
    await signOut(auth)
    localStorage.removeItem(AUTH_HINT_KEY)
    setMenuOpen(false)
    setUserMenuOpen(false)
    navigate('/')
  }

  const closeMenu = () => {
    setMenuOpen(false)
    setUserMenuOpen(false)
  }

  return (
    <div className="mobzy">
      <AppOpenAd />

      <header className="topbar">
        <Link to="/" className="brand" onClick={closeMenu}>
          <Logo size={36} />
          <span>mobzy<span>.</span>learn</span>
        </Link>

        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>

        <nav className={`top-actions ${menuOpen ? 'open' : ''}`}>
          <Link to="/" onClick={closeMenu}>{t('nav.home')}</Link>
          <Link to="/blog" onClick={closeMenu}>{t('nav.blog')}</Link>
          <Link to="/about" onClick={closeMenu}>{t('nav.about')}</Link>
          <Link to="/contact" onClick={closeMenu}>{t('nav.contact')}</Link>

          {user ? (
            <div className="user-menu" ref={menuRef}>
              <button
                className="user-avatar"
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                aria-label="User menu"
                style={{ padding: 0, overflow: 'hidden' }}
              >
                {photoBase64 ? (
                  <img src={photoBase64} alt="" style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} />
                ) : (
                  (user.displayName || user.email || 'U').charAt(0).toUpperCase()
                )}
              </button>
              {userMenuOpen && (
                <div className="user-dropdown">
                  <div className="user-info">
                    <strong>{user.displayName || 'Student'}</strong>
                    <small>{user.email}</small>
                  </div>
                  <Link to="/dashboard" onClick={closeMenu}>{t('nav.dashboard')}</Link>
                  <Link to="/settings" onClick={closeMenu}>{t('nav.settings')}</Link>
                  <button onClick={handleSignOut}>{t('nav.signOut')}</button>
                </div>
              )}
            </div>
          ) : showAvatarPlaceholder ? (
            <span aria-hidden="true" style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--surface-2)', display: 'inline-block' }} />
          ) : (
            <>
              <Link to="/signin" onClick={closeMenu}>{t('nav.signIn')}</Link>
              <Link to="/register" className="button primary" onClick={closeMenu}>{t('nav.register')}</Link>
            </>
          )}
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <TikTokGate />

      <footer className="footer">
        <span className="brand" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '16px', color: '#fff' }}>
          <Logo size={28} />
          <span style={{ fontSize: '18px' }}>mobzy<span>.</span>learn</span>
        </span>

        <nav><Link to="/learning" style={{color:"#1a73e8",fontWeight:700,marginRight:12}}>🎓 Start Learning</Link>
          <Link to="/blog">{t('footer.blog')}</Link>
          <Link to="/about">{t('footer.about')}</Link>
          <Link to="/contact">{t('footer.contact')}</Link>
          <Link to="/privacy">{t('footer.privacy')}</Link>
          <Link to="/terms">{t('footer.terms')}</Link>
          <Link to="/refunds">{t('footer.refunds')}</Link>
        </nav>

        <div style={{ marginTop: '16px', fontSize: '14px', color: '#c9d6cf' }}>
          {t('footer.support')}: <a href="mailto:mobzysupport@gmail.com" style={{ color: '#fff', fontWeight: '600' }}>mobzysupport@gmail.com</a>
        </div>

        <div style={{ marginTop: '24px', paddingTop: '20px', borderTop: '1px solid #1e293b', fontSize: '13px', color: '#94a3b8' }}>
          {t('footer.copyright')} {new Date().getFullYear()} Mobzy Learn. {t('footer.createdBy')} <strong style={{ color: '#f5a623' }}>RAYAN PRO</strong>.
        </div>
      </footer>
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />

        {/* PUBLIC â€” AdSense crawlable */}
        <Route path="/courses/:slug" element={<CourseDetail />} />
        <Route path="/courses/:slug/lessons/:lessonSlug" element={<LessonPlayer />} />

        {/* AUTH-REQUIRED */}
        <Route path="/courses/:slug/exam" element={<RequireAuth><Exam /></RequireAuth>} />
        <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} />
        <Route path="/settings" element={<RequireAuth><Settings /></RequireAuth>} />

        {/* Public pages */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/refunds" element={<Refunds />} />
        <Route path="/learn" element={<SubjectsIndex />} />
        <Route path="/learn/:subjectSlug" element={<SubjectPage />} />
        <Route path="/learn/:subjectSlug/:lessonSlug" element={<RequireAuth><ErrorBoundary label="Lesson"><SubjectLesson /></ErrorBoundary></RequireAuth>} />
        <Route path="/downloads" element={<Downloads />} />
        <Route path="/repair" element={<Repair />} />
        <Route path="/repair/:slug" element={<RepairGuide />} />
        <Route path="/downloads/:kind/:slug" element={<ItemDetail />} />
        <Route path="/trading" element={<TradingHome />} />
        <Route path="/trading/learn" element={<TradingAcademy />} />
        <Route path="/trading/learn/:slug" element={<RequireAuth><ErrorBoundary label="Trading lesson"><TradingLessonPage /></ErrorBoundary></RequireAuth>} />
        <Route path="/trading/simulator" element={<TradingSimulator />} />
        <Route path="/trading/demo-platforms" element={<TradingDemoPlatforms />} />
        <Route path="/academics" element={<AcademicDashboard />} />
        <Route path="/academics/past-papers" element={<PastPapers />} />
        <Route path="/academics/:level" element={<AcademicLevelPage />} />
        <Route path="/academics/:level/:subjectSlug" element={<AcademicSubjectPage />} />
        <Route path="/academics/:level/:subjectSlug/:lessonSlug" element={<RequireAuth><ErrorBoundary label="Academic lesson"><AcademicLessonPage /></ErrorBoundary></RequireAuth>} />
        <Route path="/learning" element={<MainDashboard />} />
        <Route path="/vocational" element={<VocIndex />} />
        <Route path="/vocational/:subjectSlug" element={<VocSubjectPage />} />
        <Route path="/vocational/:subjectSlug/:lessonSlug" element={<RequireAuth><ErrorBoundary label="Vocational lesson"><VocLessonPage /></ErrorBoundary></RequireAuth>} />
        <Route path="/life" element={<LifeIndex />} />
        <Route path="/life/:subjectSlug" element={<LifeSubjectPage />} />
        <Route path="/life/:subjectSlug/:lessonSlug" element={<RequireAuth><ErrorBoundary label="Life Skills lesson"><LifeLessonPage /></ErrorBoundary></RequireAuth>} />
        <Route path="/languages" element={<LanguagesIndex />} />
        <Route path="/languages/:langSlug" element={<LanguageSubjectPage />} />
        <Route path="/languages/:langSlug/:lessonSlug" element={<LanguageLessonPage />} />






        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}









