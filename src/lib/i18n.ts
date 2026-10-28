import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

export const LANGUAGES = [
  { code: 'en', name: 'English', native: 'English' },
  { code: 'fr', name: 'French', native: 'Français' },
  { code: 'sw', name: 'Swahili', native: 'Kiswahili' },
  { code: 'es', name: 'Spanish', native: 'Español' },
  { code: 'pt', name: 'Portuguese', native: 'Português' },
  { code: 'ar', name: 'Arabic', native: 'العربية' },
]

const en = {
  nav: { home: 'Home', blog: 'Blog', about: 'About', contact: 'Contact', signIn: 'Sign In', register: 'Register', dashboard: 'Dashboard', settings: 'Settings', signOut: 'Sign out' },
  hero: { eyebrow: 'Free. Forever. No paywalls.', title: 'Learn to code.', titleAccent: 'Build real things.', subtitle: 'courses in programming, web development, and cybersecurity. Runnable code in every lesson. No credit card. No signup required.', browse: 'Browse Courses', download: 'Download App', courses: 'Courses', lessons: 'Lessons', free: 'Free' },
  home: { coursesTitle: 'What you can learn', welcomeBack: 'Welcome back! Pick a course to continue learning.', guestMessage: 'Every lesson is free. Sign in to save your progress and pick up where you left off.', search: 'Search courses, topics, or keywords...', all: 'All', viewCourse: 'View Course', noResults: 'No courses match', tryDifferent: 'Try a different keyword or clear your filters.' },
  auth: { signInTitle: 'Sign In', registerTitle: 'Create Account', email: 'Email', password: 'Password', fullName: 'Full Name', continueGoogle: 'Continue with Google', signUpGoogle: 'Sign up with Google', or: 'or', signingIn: 'Signing in...', creatingAccount: 'Creating account...', welcomeBack: 'Welcome back. New here?', createAccountLink: 'Create an account', alreadyHaveAccount: 'Already have an account?', signInLink: 'Sign In', showPassword: 'Show password', hidePassword: 'Hide password' },
  footer: { blog: 'Blog', about: 'About', contact: 'Contact', privacy: 'Privacy', terms: 'Terms', refunds: 'Refunds', support: 'Support', copyright: 'Copyright', createdBy: 'Created by' },
  common: { loading: 'Loading...', ad: 'Advertisement', saved: 'Saved!' },
}

const fr = {
  nav: { home: 'Accueil', blog: 'Blog', about: 'À propos', contact: 'Contact', signIn: 'Connexion', register: "S'inscrire", dashboard: 'Tableau de bord', settings: 'Paramètres', signOut: 'Déconnexion' },
  hero: { eyebrow: 'Gratuit. Pour toujours. Sans paywall.', title: 'Apprenez à coder.', titleAccent: 'Construisez de vraies choses.', subtitle: 'cours en programmation, développement web et cybersécurité. Code exécutable à chaque leçon. Sans carte bancaire.', browse: 'Parcourir les cours', download: "Télécharger l'app", courses: 'Cours', lessons: 'Leçons', free: 'Gratuit' },
  home: { coursesTitle: 'Ce que vous pouvez apprendre', welcomeBack: 'Bon retour ! Choisissez un cours pour continuer.', guestMessage: 'Chaque leçon est gratuite. Connectez-vous pour sauvegarder votre progression.', search: 'Rechercher des cours...', all: 'Tous', viewCourse: 'Voir le cours', noResults: 'Aucun cours ne correspond', tryDifferent: 'Essayez un autre mot-clé.' },
  auth: { signInTitle: 'Connexion', registerTitle: 'Créer un compte', email: 'Email', password: 'Mot de passe', fullName: 'Nom complet', continueGoogle: 'Continuer avec Google', signUpGoogle: "S'inscrire avec Google", or: 'ou', signingIn: 'Connexion...', creatingAccount: 'Création du compte...', welcomeBack: 'Bon retour. Nouveau ici ?', createAccountLink: 'Créer un compte', alreadyHaveAccount: 'Vous avez déjà un compte ?', signInLink: 'Connexion', showPassword: 'Afficher le mot de passe', hidePassword: 'Masquer le mot de passe' },
  footer: { blog: 'Blog', about: 'À propos', contact: 'Contact', privacy: 'Confidentialité', terms: 'Conditions', refunds: 'Remboursements', support: 'Support', copyright: 'Copyright', createdBy: 'Créé par' },
  common: { loading: 'Chargement...', ad: 'Publicité', saved: 'Enregistré !' },
}

const sw = {
  nav: { home: 'Nyumbani', blog: 'Blogu', about: 'Kuhusu', contact: 'Mawasiliano', signIn: 'Ingia', register: 'Jiandikishe', dashboard: 'Dashibodi', settings: 'Mipangilio', signOut: 'Toka' },
  hero: { eyebrow: 'Bure. Milele. Hakuna malipo.', title: 'Jifunze kuandika code.', titleAccent: 'Jenga vitu halisi.', subtitle: 'kozi katika programu, ukuzaji wa wavuti, na usalama wa mtandao. Code inayotekelezwa katika kila somo.', browse: 'Vinjari Kozi', download: 'Pakua App', courses: 'Kozi', lessons: 'Masomo', free: 'Bure' },
  home: { coursesTitle: 'Unachoweza kujifunza', welcomeBack: 'Karibu tena! Chagua kozi kuendelea.', guestMessage: 'Kila somo ni bure. Ingia ili kuhifadhi maendeleo yako.', search: 'Tafuta kozi...', all: 'Zote', viewCourse: 'Tazama Kozi', noResults: 'Hakuna kozi zinazolingana', tryDifferent: 'Jaribu neno lingine.' },
  auth: { signInTitle: 'Ingia', registerTitle: 'Unda Akaunti', email: 'Barua pepe', password: 'Nenosiri', fullName: 'Jina Kamili', continueGoogle: 'Endelea na Google', signUpGoogle: 'Jiandikishe na Google', or: 'au', signingIn: 'Inaingia...', creatingAccount: 'Inaunda akaunti...', welcomeBack: 'Karibu tena. Mpya hapa?', createAccountLink: 'Unda akaunti', alreadyHaveAccount: 'Tayari una akaunti?', signInLink: 'Ingia', showPassword: 'Onyesha nenosiri', hidePassword: 'Ficha nenosiri' },
  footer: { blog: 'Blogu', about: 'Kuhusu', contact: 'Mawasiliano', privacy: 'Faragha', terms: 'Masharti', refunds: 'Marejesho', support: 'Msaada', copyright: 'Hakimiliki', createdBy: 'Imeundwa na' },
  common: { loading: 'Inapakia...', ad: 'Tangazo', saved: 'Imehifadhiwa!' },
}

const es = {
  nav: { home: 'Inicio', blog: 'Blog', about: 'Acerca', contact: 'Contacto', signIn: 'Iniciar sesión', register: 'Registrarse', dashboard: 'Panel', settings: 'Ajustes', signOut: 'Salir' },
  hero: { eyebrow: 'Gratis. Para siempre. Sin muros de pago.', title: 'Aprende a programar.', titleAccent: 'Construye cosas reales.', subtitle: 'cursos en programación, desarrollo web y ciberseguridad. Código ejecutable en cada lección.', browse: 'Ver Cursos', download: 'Descargar App', courses: 'Cursos', lessons: 'Lecciones', free: 'Gratis' },
  home: { coursesTitle: 'Lo que puedes aprender', welcomeBack: '¡Bienvenido de nuevo!', guestMessage: 'Todas las lecciones son gratis.', search: 'Buscar cursos...', all: 'Todos', viewCourse: 'Ver Curso', noResults: 'Sin resultados', tryDifferent: 'Prueba con otra palabra.' },
  auth: { signInTitle: 'Iniciar sesión', registerTitle: 'Crear cuenta', email: 'Correo', password: 'Contraseña', fullName: 'Nombre completo', continueGoogle: 'Continuar con Google', signUpGoogle: 'Registrarse con Google', or: 'o', signingIn: 'Iniciando...', creatingAccount: 'Creando cuenta...', welcomeBack: 'Bienvenido. ¿Nuevo?', createAccountLink: 'Crear cuenta', alreadyHaveAccount: '¿Ya tienes cuenta?', signInLink: 'Iniciar sesión', showPassword: 'Mostrar contraseña', hidePassword: 'Ocultar contraseña' },
  footer: { blog: 'Blog', about: 'Acerca', contact: 'Contacto', privacy: 'Privacidad', terms: 'Términos', refunds: 'Reembolsos', support: 'Soporte', copyright: 'Copyright', createdBy: 'Creado por' },
  common: { loading: 'Cargando...', ad: 'Anuncio', saved: '¡Guardado!' },
}

const pt = {
  nav: { home: 'Início', blog: 'Blog', about: 'Sobre', contact: 'Contato', signIn: 'Entrar', register: 'Registrar', dashboard: 'Painel', settings: 'Configurações', signOut: 'Sair' },
  hero: { eyebrow: 'Grátis. Para sempre. Sem paywalls.', title: 'Aprenda a programar.', titleAccent: 'Construa coisas reais.', subtitle: 'cursos em programação, desenvolvimento web e cibersegurança. Código executável em cada lição.', browse: 'Ver Cursos', download: 'Baixar App', courses: 'Cursos', lessons: 'Lições', free: 'Grátis' },
  home: { coursesTitle: 'O que você pode aprender', welcomeBack: 'Bem-vindo de volta!', guestMessage: 'Todas as lições são grátis.', search: 'Buscar cursos...', all: 'Todos', viewCourse: 'Ver Curso', noResults: 'Nenhum curso encontrado', tryDifferent: 'Tente outra palavra.' },
  auth: { signInTitle: 'Entrar', registerTitle: 'Criar Conta', email: 'Email', password: 'Senha', fullName: 'Nome Completo', continueGoogle: 'Continuar com Google', signUpGoogle: 'Cadastrar com Google', or: 'ou', signingIn: 'Entrando...', creatingAccount: 'Criando conta...', welcomeBack: 'Bem-vindo. Novo aqui?', createAccountLink: 'Criar conta', alreadyHaveAccount: 'Já tem uma conta?', signInLink: 'Entrar', showPassword: 'Mostrar senha', hidePassword: 'Ocultar senha' },
  footer: { blog: 'Blog', about: 'Sobre', contact: 'Contato', privacy: 'Privacidade', terms: 'Termos', refunds: 'Reembolsos', support: 'Suporte', copyright: 'Copyright', createdBy: 'Criado por' },
  common: { loading: 'Carregando...', ad: 'Anúncio', saved: 'Salvo!' },
}

const ar = {
  nav: { home: 'الرئيسية', blog: 'المدونة', about: 'حول', contact: 'اتصل', signIn: 'تسجيل الدخول', register: 'التسجيل', dashboard: 'لوحة التحكم', settings: 'الإعدادات', signOut: 'تسجيل الخروج' },
  hero: { eyebrow: 'مجاني. للأبد. بدون جدران دفع.', title: 'تعلم البرمجة.', titleAccent: 'ابنِ أشياء حقيقية.', subtitle: 'دورات في البرمجة وتطوير الويب والأمن السيبراني. كود قابل للتشغيل في كل درس.', browse: 'تصفح الدورات', download: 'تحميل التطبيق', courses: 'الدورات', lessons: 'الدروس', free: 'مجاني' },
  home: { coursesTitle: 'ما يمكنك تعلمه', welcomeBack: 'مرحبًا بعودتك!', guestMessage: 'كل درس مجاني.', search: 'ابحث عن دورات...', all: 'الكل', viewCourse: 'عرض الدورة', noResults: 'لا توجد نتائج', tryDifferent: 'جرب كلمة مختلفة.' },
  auth: { signInTitle: 'تسجيل الدخول', registerTitle: 'إنشاء حساب', email: 'البريد الإلكتروني', password: 'كلمة المرور', fullName: 'الاسم الكامل', continueGoogle: 'المتابعة مع Google', signUpGoogle: 'التسجيل مع Google', or: 'أو', signingIn: 'جاري الدخول...', creatingAccount: 'جاري الإنشاء...', welcomeBack: 'مرحبًا. جديد هنا؟', createAccountLink: 'إنشاء حساب', alreadyHaveAccount: 'لديك حساب بالفعل؟', signInLink: 'تسجيل الدخول', showPassword: 'إظهار كلمة المرور', hidePassword: 'إخفاء كلمة المرور' },
  footer: { blog: 'المدونة', about: 'حول', contact: 'اتصل', privacy: 'الخصوصية', terms: 'الشروط', refunds: 'المبالغ المستردة', support: 'الدعم', copyright: 'حقوق النشر', createdBy: 'أنشأه' },
  common: { loading: 'جاري التحميل...', ad: 'إعلان', saved: 'تم الحفظ!' },
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      fr: { translation: fr },
      sw: { translation: sw },
      es: { translation: es },
      pt: { translation: pt },
      ar: { translation: ar },
    },
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
    detection: {
      order: ['localStorage', 'navigator'],
      lookupLocalStorage: 'mobzy_lang',
      caches: ['localStorage'],
    },
  })

export default i18n