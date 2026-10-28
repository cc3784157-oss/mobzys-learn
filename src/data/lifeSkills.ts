export type LifeBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] }
  | { type: 'note'; text: string }
  | { type: 'formula'; text: string }
  | { type: 'image'; url: string; alt: string; caption?: string }

export type LifeLesson = {
  slug: string
  title: string
  duration: string
  status: 'complete' | 'in-progress'
  objectives: string[]
  materials: string[]
  content: LifeBlock[]
  steps?: string[]
  exercises: { question: string; answer: string }[]
  safety?: string[]
  notes?: string
  imageUrl?: string
  imageAlt?: string
}

export type LifeSubject = {
  slug: string
  title: string
  tagline: string
  icon: string
  category: 'Survival' | 'Health' | 'Money' | 'Home' | 'Family' | 'Civic'
  lessons: LifeLesson[]
}

// Photo helper — legal Unsplash images, safe for AdSense
const photo = (id: string, w = 800) => `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`

const L = (slug: string, title: string, duration = '30 min'): LifeLesson => ({
  slug, title, duration, status: 'in-progress',
  objectives: [`Understand the fundamentals of "${title}"`, 'Apply the steps safely and correctly', 'Recognise the common mistakes and how to avoid them'],
  materials: ['Notebook', 'Pen', 'Practice materials or scenario'],
  content: [
    { type: 'p', text: `Introduction to "${title}". This lesson covers what you need to know, the step-by-step method, and how to apply it in real situations.` },
    { type: 'h2', text: 'Why this matters' },
    { type: 'p', text: 'Real-life application: this is a skill you will use repeatedly, often under stress. Learning it properly in advance is what separates a prepared person from a helpless one.' },
    { type: 'h2', text: 'Step-by-step method' },
    { type: 'ol', items: ['Assess the situation', 'Gather the right materials', 'Follow the procedure carefully', 'Verify the result', 'Record or share what you learned'] },
    { type: 'note', text: 'The single most important rule: never act in a real emergency before you understand the basics. Practice first.' }
  ],
  exercises: [
    { question: 'What is the first step in this procedure?', answer: 'Assess the situation — understand what is happening before acting.' },
    { question: 'Name two common mistakes.', answer: 'Acting too fast without thinking; skipping preparation.' },
    { question: 'When should you seek professional help?', answer: 'Whenever the situation is beyond your training or feels unsafe.' }
  ],
  safety: ['Never put yourself at risk to help others — you become a second casualty.', 'Call emergency services early, not late.']
})

const F = (data: LifeLesson): LifeLesson => ({ ...data, status: 'complete' })

export const lifeSubjects: LifeSubject[] = [
  // ============ SURVIVAL ============
  {
    slug: 'first-aid', title: 'First Aid & Emergency', tagline: 'Save a life with the right actions in the first minutes.', icon: '🩹', category: 'Survival',
    lessons: [
      F({
        slug: 'cpr-adult', imageUrl: 'https://images.unsplash.com/photo-1622115297822-a3798fdbe1f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTE1NjAyfDB8MXxzZWFyY2h8MXx8Y3ByJTIwdHJhaW5pbmclMjBmaXJzdCUyMGFpZHxlbnwxfDB8fHwxNzkzMTQxNzI1fDA&ixlib=rb-4.1.0&q=80&w=1080', imageAlt: 'man in white t-shirt and blue pants sitting on floor', title: 'CPR for Adults', duration: '20 min', status: 'complete',
        objectives: ['Recognise cardiac arrest', 'Perform chest compressions correctly', 'Know when to call for help', 'Use an AED if available'],
        materials: ['CPR training manikin (if available)', 'Phone to call emergency services', 'Clear space to kneel'],
        content: [
          { type: 'p', text: 'Cardiac arrest means the heart has stopped pumping blood. Brain damage starts within 4 minutes. Every minute without CPR reduces survival by about 10%. Bystander CPR saves lives — and it is simple: hard, fast compressions on the centre of the chest.' },
          { type: 'h2', text: 'Step 1 — Check for danger and response' },
          { type: 'ul', items: ['Ensure the scene is safe for you', 'Tap the person\'s shoulders and shout "Are you OK?"', 'Look for normal breathing for 10 seconds'] },
          { type: 'h2', text: 'Step 2 — Call for help immediately' },
          { type: 'p', text: 'If they do not respond and are not breathing normally, call emergency services IMMEDIATELY (Uganda: 999 or 112). Put your phone on speaker. Do not hang up — the operator will guide you.' },
          { type: 'h2', text: 'Step 3 — Chest compressions' },
          { type: 'ol', items: ['Place the person on their back on a firm surface', 'Place the heel of one hand on the centre of the chest (lower half of the breastbone)', 'Place the other hand on top, fingers interlocked', 'Keep arms straight, shoulders over hands', 'Push down 5–6 cm, 100–120 times per minute', 'Let the chest come all the way back up between compressions'] },
          { type: 'note', text: 'Think of the beat of "Stayin\' Alive" by the Bee Gees — that is 100+ BPM. That is the correct rate.' },
          { type: 'h2', text: 'Step 4 — Continue until help arrives' },
          { type: 'p', text: 'Continue compressions until professional help arrives, an AED is available, or the person starts breathing. Do not stop to check for a pulse repeatedly — keep compressing.' },
          { type: 'h2', text: 'What about rescue breaths?' },
          { type: 'p', text: 'If you are trained and willing, give 2 rescue breaths after every 30 compressions. If not, hands-only CPR (continuous compressions) is still hugely effective — it is far better than doing nothing.' }
        ],
        exercises: [
          { question: 'What is the correct compression rate?', answer: '100–120 per minute — about 2 per second.' },
          { question: 'What is the correct compression depth for an adult?', answer: '5–6 cm — enough to feel resistance.' },
          { question: 'Why should you not stop to check the pulse repeatedly?', answer: 'Every second without compressions reduces blood flow to the brain. Continuous compressions are more important.' },
          { question: 'When should you call emergency services?', answer: 'Immediately after confirming the person is unresponsive and not breathing normally — do not delay.' }
        ],
        safety: ['Ensure the scene is safe for YOU before helping.', 'If the person responds or starts breathing, stop compressions.', 'Do not perform CPR on a conscious person or one who is breathing normally.'],
        notes: 'Hands-only CPR saves lives. Many people hesitate because they are afraid of "doing it wrong." A slightly imperfect compression is infinitely better than no compression.'
      }),
      L('choking-adult', 'Choking First Aid — Adult & Child'),
      L('recovery-position', 'The Recovery Position'),
      L('bleeding-control', 'Bleeding Control'),
      L('burns-treatment', 'Treating Burns'),
      L('shock-management', 'Managing Shock'),
      L('fractures-splints', 'Fractures and Splinting'),
      L('calling-emergency', 'Calling Emergency Services Correctly')
    ]
  },
  {
    slug: 'water-safety', title: 'Water — Finding, Purifying, Storing', tagline: 'The first survival priority.', icon: '💧', category: 'Survival',
    lessons: [
      F({
        slug: 'purify-water', imageUrl: 'https://images.unsplash.com/flagged/photo-1571902241554-82ec31087fe3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTE1NjAyfDB8MXxzZWFyY2h8MXx8Ym9pbGluZyUyMHdhdGVyJTIwcG90fGVufDF8MHx8fDE3OTMxNDE2NTd8MA&ixlib=rb-4.1.0&q=80&w=1080', imageAlt: 'stainless steel cooking pot with lid', title: 'How to Purify Water', duration: '25 min', status: 'complete',
        objectives: ['Explain why water purification matters', 'Boil water correctly', 'Use chemical purification', 'Build a simple filter'],
        materials: ['Clean container with lid', 'Heat source (stove, fire)', 'Water purification tablets or household bleach (unscented, 4–6%)', 'Clean cloth for filtering'],
        content: [
          { type: 'p', text: 'Untreated water contains bacteria, viruses, and parasites that cause cholera, typhoid, dysentery, and giardia. In emergency situations or when travelling, assume all water is contaminated. The three reliable purification methods are boiling, chemical treatment, and filtration (in that order of reliability).' },
          { type: 'h2', text: 'Method 1 — Boiling (most reliable)' },
          { type: 'ol', items: ['Filter visible debris through a clean cloth first', 'Bring the water to a rolling boil', 'Boil for at least 1 minute (3 minutes at high altitude)', 'Let it cool uncovered in the same container', 'Store in a clean, covered container'] },
          { type: 'h2', text: 'Method 2 — Chemical treatment' },
          { type: 'p', text: 'Use purification tablets as directed, OR add 2 drops of unscented household bleach (4–6% sodium hypochlorite) per litre of clear water, or 4 drops if the water is cloudy. Stir and wait 30 minutes before drinking. Wait 60 minutes if the water is cold.' },
          { type: 'h2', text: 'Method 3 — Filtration' },
          { type: 'p', text: 'A simple homemade filter using layers of cloth, sand, charcoal, and gravel removes sediment and some contaminants but does NOT remove bacteria or viruses. Always combine with boiling or chemical treatment for safe drinking water.' },
          { type: 'note', text: 'Rule of thumb: unclear water = always purify. Clear water = still purify unless from a trusted treated source.' }
        ],
        exercises: [
          { question: 'How long should water be boiled?', answer: 'At least 1 minute at sea level. 3 minutes at high altitude.' },
          { question: 'How much unscented household bleach per litre?', answer: '2 drops if clear; 4 drops if cloudy; wait 30–60 minutes before drinking.' },
          { question: 'Does a sand filter make water safe to drink?', answer: 'No. A sand filter removes sediment but not bacteria or viruses. Always boil or chemically treat after filtering.' }
        ],
        safety: ['Never drink water you are unsure about.', 'Do not use scented or splashless bleach for purification.', 'Boiling water causes severe burns — handle carefully.']
      }),
      L('find-water-outdoors', 'Finding Water Outdoors'),
      L('store-water', 'Storing Water Safely'),
      L('waterborne-diseases', 'Waterborne Diseases and Prevention')
    ]
  },
  {
    slug: 'fire-safety', title: 'Fire Safety & Prevention', tagline: 'Prevent fires, control small ones, evacuate safely.', icon: '🔥', category: 'Survival',
    lessons: [
      L('fire-extinguisher-use', 'How to Use a Fire Extinguisher (PASS)'),
      L('prevent-home-fires', 'Preventing Home Fires'),
      L('escape-plan', 'Home Fire Escape Plan'),
      L('kitchen-fires', 'Kitchen Fires — What to Do'),
      L('fire-outdoors', 'Safe Outdoor Fires')
    ]
  },
  {
    slug: 'home-security', title: 'Home & Personal Security', tagline: 'Prevent theft, recognise scams, protect your family.', icon: '🔒', category: 'Survival',
    lessons: [
      L('home-burglary-prevention', 'Home Burglary Prevention'),
      L('scam-recognition', 'Recognising Common Scams'),
      L('emergency-contacts', 'Building an Emergency Contact List'),
      L('neighbourhood-watch', 'Neighbourhood Watch')
    ]
  },
  // ============ HEALTH ============
  {
    slug: 'basic-health', title: 'Basic Health & Hygiene', tagline: 'Prevent disease with simple habits.', icon: '🧼', category: 'Health',
    lessons: [
      F({
        slug: 'handwashing', imageUrl: 'https://images.unsplash.com/photo-1508759073847-9ca702cec7d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTE1NjAyfDB8MXxzZWFyY2h8MXx8d2FzaGluZyUyMGhhbmRzJTIwc29hcHxlbnwxfDB8fHwxNzkzMTQxNjk2fDA&ixlib=rb-4.1.0&q=80&w=1080', imageAlt: 'person holding bubbles', title: 'Handwashing — The Most Important Health Skill', duration: '15 min', status: 'complete',
        objectives: ['Explain why handwashing matters', 'Wash hands correctly', 'Know when to wash hands', 'Build handwashing as a habit'],
        materials: ['Soap', 'Clean water', 'Clean towel or air dryer'],
        content: [
          { type: 'p', text: 'Handwashing with soap prevents more disease than any vaccine or medicine in history. Diarrhoea and respiratory infections — which kill over 3 million children per year globally — are dramatically reduced by proper handwashing. It costs almost nothing and takes 20 seconds.' },
          { type: 'h2', text: 'How to wash hands properly' },
          { type: 'ol', items: ['Wet hands with clean running water', 'Apply soap — enough to lather', 'Rub palms together', 'Rub the back of each hand with the palm of the other', 'Interlace fingers and rub between them', 'Rub the backs of fingers with the opposite palm', 'Rub each thumb with the opposite hand', 'Rub fingertips on the opposite palm', 'Rinse well under running water', 'Dry with a clean towel or air dryer'] },
          { type: 'h2', text: 'When to wash hands' },
          { type: 'ul', items: ['Before preparing or eating food', 'After using the toilet', 'After coughing, sneezing, or blowing your nose', 'After handling animals or waste', 'After caring for a sick person', 'When you arrive home', 'Before touching your face'] },
          { type: 'note', text: '20 seconds is the recommended duration. Sing "Happy Birthday" twice while washing.' }
        ],
        exercises: [
          { question: 'What is the minimum recommended handwashing duration?', answer: '20 seconds — enough to sing "Happy Birthday" twice.' },
          { question: 'Name three critical times to wash hands.', answer: 'Before eating, after using the toilet, after sneezing or coughing.' },
          { question: 'Why is handwashing more effective than hand sanitiser in some cases?', answer: 'Soap removes dirt, oils, and certain pathogens (like norovirus and C. difficile) that alcohol-based sanitisers cannot.' }
        ],
        safety: ['Use running water — not standing water in a basin, which becomes contaminated.', 'Dry hands completely — wet hands transfer germs more easily.']
      }),
      L('tooth-brushing', 'Tooth Brushing and Oral Hygiene'),
      L('food-safety-home', 'Food Safety at Home'),
      L('prevent-malaria', 'Preventing Malaria'),
      L('safe-drinking-water', 'Safe Drinking Water at Home'),
      L('sick-day-care', 'Caring for a Sick Person at Home')
    ]
  },
  {
    slug: 'fitness', title: 'Fitness & Exercise', tagline: 'Move every day for a longer, healthier life.', icon: '🏃', category: 'Health',
    lessons: [
      L('daily-movement', 'Daily Movement — Why and How'),
      L('bodyweight-workout', 'Bodyweight Workouts at Home'),
      L('stretching', 'Basic Stretching Routine'),
      L('walking-program', 'Building a Walking Program')
    ]
  },
  {
    slug: 'mental-health', title: 'Mental Health & Wellbeing', tagline: 'Manage stress, anxiety and depression.', icon: '🧠', category: 'Health',
    lessons: [
      L('stress-management', 'Stress Management Techniques'),
      L('anxiety-basics', 'Understanding Anxiety'),
      L('depression-support', 'Supporting Someone with Depression'),
      L('sleep-hygiene', 'Sleep Hygiene'),
      L('grief-support', 'Coping with Grief'),
      L('when-to-seek-help', 'When to Seek Professional Help')
    ]
  },
  // ============ MONEY ============
  {
    slug: 'personal-finance', title: 'Personal Finance', tagline: 'Budget, save, avoid debt, build wealth.', icon: '💰', category: 'Money',
    lessons: [
      F({
        slug: 'make-a-budget', imageUrl: 'https://images.unsplash.com/photo-1709880945165-d2208c6ad2ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTE1NjAyfDB8MXxzZWFyY2h8MXx8YnVkZ2V0JTIwcGxhbm5pbmclMjBjYWxjdWxhdG9yfGVufDF8MHx8fDE3OTMxNDE2NDB8MA&ixlib=rb-4.1.0&q=80&w=1080', imageAlt: 'a calculator sitting on top of a table next to a laptop', title: 'How to Make a Budget That Works', duration: '30 min', status: 'complete',
        objectives: ['Track income and expenses', 'Build a realistic budget', 'Understand needs vs wants', 'Save at least 10% of income'],
        materials: ['Notebook or spreadsheet', 'Last 3 months of receipts/bank statements', 'Pen'],
        content: [
          { type: 'p', text: 'A budget is a plan for your money. Not a restriction — a plan. People who budget consistently have more money, less stress, and are more likely to achieve their goals. The formula is simple: Income − Expenses = Savings. If savings is negative, you are borrowing from your future.' },
          { type: 'h2', text: 'Step 1 — List all income' },
          { type: 'p', text: 'Include salary, side hustles, gifts, and any other money you receive. Use your average monthly income, not your highest.' },
          { type: 'h2', text: 'Step 2 — List all expenses' },
          { type: 'p', text: 'Go through 3 months of bank statements and receipts. Categorise: rent, food, transport, utilities, phone, internet, debt payments, entertainment, savings. Include irregular expenses (annual insurance, school fees) divided by 12.' },
          { type: 'h2', text: 'Step 3 — Apply the 50/30/20 rule' },
          { type: 'formula', text: '50% needs (rent, food, utilities, transport, insurance)' },
          { type: 'formula', text: '30% wants (dining out, entertainment, shopping, hobbies)' },
          { type: 'formula', text: '20% savings and debt repayment' },
          { type: 'p', text: 'If your needs exceed 50%, you need to reduce expenses or increase income — this is the honest math. Most people need to reduce wants significantly before reducing savings.' },
          { type: 'h2', text: 'Step 4 — Automate savings' },
          { type: 'p', text: 'Transfer savings the day you get paid — before you spend anything else. Pay yourself first. A separate savings account (ideally with a different bank) makes this easier.' },
          { type: 'h2', text: 'Step 5 — Review monthly' },
          { type: 'p', text: 'At the end of each month, compare what you planned to what actually happened. Adjust the plan. Repeat. After 3 months, the budget becomes reality rather than aspiration.' },
          { type: 'note', text: 'Emergency fund first. Save 3–6 months of expenses before any other investing. It is the single greatest source of financial peace of mind.' }
        ],
        exercises: [
          { question: 'What is the 50/30/20 rule?', answer: '50% of income to needs, 30% to wants, 20% to savings and debt repayment.' },
          { question: 'Why is automating savings important?', answer: 'It removes willpower from the equation — you save before spending, not after.' },
          { question: 'How much emergency fund should you build?', answer: '3–6 months of essential living expenses.' }
        ],
        safety: ['If you have high-interest debt (credit cards, mobile loans), pay it off before investing.', 'Do not invest money you cannot afford to lose.']
      }),
      L('emergency-fund', 'Building an Emergency Fund'),
      L('avoid-debt-traps', 'Avoiding Debt Traps'),
      L('understand-loans', 'Understanding Loans and Interest'),
      L('save-for-goals', 'Saving for Specific Goals'),
      L('mobile-money-safety', 'Mobile Money Safety'),
      L('insurance-basics', 'Insurance Basics'),
      L('investing-basics', 'Investing Basics for Beginners')
    ]
  },
  // ============ HOME ============
  {
    slug: 'cooking', title: 'Cooking & Nutrition', tagline: 'Feed yourself well on any budget.', icon: '🍲', category: 'Home',
    lessons: [
      L('basic-food-safety', 'Basic Food Safety'),
      L('meal-planning-budget', 'Meal Planning on a Budget'),
      L('rice-beans', 'Cooking Rice, Beans and Lentils'),
      L('vegetables', 'Cooking Vegetables Well'),
      L('simple-breakfast', 'Simple Healthy Breakfasts'),
      L('one-pot-meals', 'One-Pot Meals for Busy Days'),
      L('bread-baking', 'Simple Bread Baking')
    ]
  },
  {
    slug: 'home-maintenance', title: 'Home Maintenance', tagline: 'Fix things yourself, save money.', icon: '🏠', category: 'Home',
    lessons: [
      L('unclog-drain', 'Unclog a Drain'),
      L('fix-leaking-tap', 'Fix a Leaking Tap'),
      L('replace-light-bulb', 'Replace a Light Bulb or Fitting'),
      L('patch-wall', 'Patch a Hole in a Wall'),
      L('clean-mold', 'Clean and Prevent Mould'),
      L('check-smoke-alarms', 'Check Smoke Alarms'),
      L('basic-toolkit', 'The Basic Home Toolkit')
    ]
  },
  {
    slug: 'gardening', title: 'Gardening & Food Growing', tagline: 'Grow your own food, even in small spaces.', icon: '🌱', category: 'Home',
    lessons: [
      L('container-gardening', 'Container Gardening'),
      L('soil-basics', 'Soil Basics'),
      L('planting-schedule', 'Planting Calendar'),
      L('watering', 'Watering Correctly'),
      L('common-pests', 'Common Pests and Solutions'),
      L('compost', 'Making Compost')
    ]
  },
  // ============ FAMILY ============
  {
    slug: 'parenting', title: 'Parenting & Childcare', tagline: 'Raise healthy, confident children.', icon: '👨‍👩‍👧', category: 'Family',
    lessons: [
      L('newborn-basics', 'Newborn Basics'),
      L('breastfeeding', 'Breastfeeding Basics'),
      L('child-nutrition', 'Child Nutrition'),
      L('discipline-positive', 'Positive Discipline'),
      L('child-safety-home', 'Child Safety at Home'),
      L('talking-to-children', 'Talking to Children About Difficult Topics'),
      L('teen-years', 'Understanding the Teen Years')
    ]
  },
  {
    slug: 'relationships', title: 'Communication & Relationships', tagline: 'Build healthy connections.', icon: '💬', category: 'Family',
    lessons: [
      L('active-listening', 'Active Listening'),
      L('assertive-communication', 'Assertive Communication'),
      L('conflict-resolution', 'Resolving Conflict Calmly'),
      L('setting-boundaries', 'Setting Healthy Boundaries'),
      L('recognising-abuse', 'Recognising Abuse and Getting Help'),
      L('marriage-partnership', 'Building a Strong Partnership')
    ]
  },
  // ============ CIVIC ============
  {
    slug: 'legal-basics', title: 'Legal Basics Everyone Should Know', tagline: 'Know your rights, understand contracts.', icon: '⚖️', category: 'Civic',
    lessons: [
      L('contracts-basics', 'Understanding Contracts Before You Sign'),
      L('tenant-rights', 'Tenant Rights and Responsibilities'),
      L('employment-rights', 'Employment Rights'),
      L('police-rights', 'Your Rights When Stopped by Police'),
      L('land-ownership', 'Land Ownership and Title'),
      L('making-a-will', 'Making a Will'),
      L('when-to-see-lawyer', 'When to See a Lawyer')
    ]
  },
  {
    slug: 'digital-literacy', title: 'Digital Literacy & Online Safety', tagline: 'Use technology safely and effectively.', icon: '📱', category: 'Civic',
    lessons: [
      L('passwords-2fa', 'Strong Passwords and 2FA'),
      L('spot-phishing', 'Spotting Phishing Scams'),
      L('social-media-privacy', 'Social Media Privacy'),
      L('data-backup', 'Backing Up Your Data'),
      L('digital-legacy', 'Digital Legacy and Access'),
      L('avoiding-scams-online', 'Avoiding Online Scams')
    ]
  },
  {
    slug: 'environment', title: 'Environmental Sustainability', tagline: 'Live sustainably, protect your community.', icon: '🌍', category: 'Civic',
    lessons: [
      L('reduce-waste', 'Reduce, Reuse, Recycle'),
      L('water-conservation', 'Water Conservation at Home'),
      L('energy-conservation', 'Saving Energy'),
      L('plastic-free', 'Reducing Single-Use Plastic'),
      L('community-cleaning', 'Organising Community Clean-ups')
    ]
  }
]

export function getLifeSubject(slug: string) { return lifeSubjects.find((s) => s.slug === slug) }
export function getLifeLesson(subjectSlug: string, lessonSlug: string) {
  const subject = getLifeSubject(subjectSlug)
  return subject?.lessons.find((l) => l.slug === lessonSlug)
}

