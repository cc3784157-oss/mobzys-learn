import type { AcademicSubject, AcademicLesson } from './academicsSecondary'

const S = (slug: string, title: string, level = 'S5–S6', duration = '60 min'): AcademicLesson => ({
  slug, title, level, duration, status: 'in-progress',
  objectives: [
    `Define and apply the key concepts of "${title}" at A-Level depth`,
    `Derive and use the formulas or theories in "${title}"`,
    `Solve complex multi-step problems on "${title}"`,
    `Explain the physical or mathematical reasoning behind "${title}"`
  ],
  materials: ['Recommended A-Level textbook', 'Chalkboard', 'Past-paper booklet', 'Graphing calculator (for maths/physics)'],
  content: [
    { type: 'p', text: `A-Level lesson "${title}". At this level, rigor matters — every definition, formula, and derivation must be stated precisely. Write the full content (1,500–2,500 words) here including formal theory, rigorous derivations, worked examples at A-Level difficulty, and exam technique.` },
    { type: 'h2', text: 'Formal definitions' },
    { type: 'p', text: 'State every formal definition exactly as it should be written in exams. Give the SI units where relevant.' },
    { type: 'h2', text: 'Theory and derivation' },
    { type: 'p', text: 'Derive the key formulas from first principles, showing every step. Show which assumptions are being made.' },
    { type: 'h2', text: 'Worked example' },
    { type: 'p', text: 'Multi-step worked example with full reasoning at each step, in mark-scheme format.' },
    { type: 'note', text: 'A-Level pitfall: students lose marks by skipping steps. Train yourself to write EVERY step the mark scheme expects.' }
  ],
  activities: [
    { name: 'Past-paper practice (20 min)', description: 'Timed past-paper questions from the last 5 years. Review with the mark scheme together.' },
    { name: 'Peer explanation (10 min)', description: 'Students explain the concept to a partner, then swap and critique.' }
  ],
  exercises: [
    { question: 'Question 1 — A-Level past-paper style', answer: 'Full mark-scheme answer with allocation.' },
    { question: 'Question 2 — derivation or proof', answer: 'Step-by-step derivation.' },
    { question: 'Question 3 — application problem', answer: 'Worked solution.' }
  ],
  pastPaperQuestions: [
    { year: '2024', question: 'UACE past-paper question', answer: 'Mark-scheme answer.' },
    { year: '2023', question: 'UACE past-paper question', answer: 'Mark-scheme answer.' }
  ],
  homework: ['Complete 2 past papers this week', 'Review mark schemes and identify patterns'],
  notes: 'A-Level tip: review past-paper mark schemes regularly — they reveal exactly what examiners expect.'
})

export const aLevelSubjects: AcademicSubject[] = [
  { slug: 'chemistry', title: 'Chemistry', tagline: 'Physical, organic and inorganic chemistry at A-Level.', icon: '⚗️', category: 'Science', terms: [
    { name: 'Year 1 (S5)', lessons: [{
            slug: 'atomic-structure', title: 'Atomic Structure', level: 'S5–S6', duration: '60 min', status: 'complete',
            objectives: ['Explain the Bohr and quantum mechanical models of the atom', 'Describe electron shells and subshells (s, p, d, f)', 'Apply the Aufbau principle and Hund\'s rule', 'Relate electron configuration to periodic table position'],
            materials: ['Periodic table', 'Atomic model diagrams', 'Textbook chapter'],
            content: [
              { type: 'p', text: 'The modern model of the atom is built on quantum mechanics. Electrons do not orbit the nucleus in fixed paths — they occupy regions of probability called orbitals. Understanding the arrangement of electrons is the foundation of all chemistry: bonding, reactivity, and the periodic table itself.' },
              { type: 'svg', caption: 'Electron shells: n=1 holds 2 electrons, n=2 holds 8, n=3 holds 18. Electrons fill inner shells first (Aufbau principle).', svg: '<svg viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto"><circle cx="200" cy="120" r="15" fill="#dc2626"/><text x="200" y="125" text-anchor="middle" fill="white" font-size="10" font-weight="bold">+</text><circle cx="200" cy="120" r="45" fill="none" stroke="#1a73e8" stroke-width="2.5"/><text x="255" y="125" font-size="13" fill="#1a73e8" font-weight="bold">n=1</text><text x="255" y="140" font-size="11" fill="#1a73e8">2e⁻ max</text><circle cx="200" cy="120" r="82" fill="none" stroke="#7c3aed" stroke-width="2.5"/><text x="290" y="75" font-size="13" fill="#7c3aed" font-weight="bold">n=2</text><text x="290" y="90" font-size="11" fill="#7c3aed">8e⁻ max</text><circle cx="200" cy="120" r="118" fill="none" stroke="#059669" stroke-width="2.5"/><text x="325" y="120" font-size="13" fill="#059669" font-weight="bold">n=3</text><text x="325" y="135" font-size="11" fill="#059669">18e⁻ max</text></svg>' },
              { type: 'h2', text: 'The four quantum numbers' },
              { type: 'ul', items: ['Principal (n) — the shell, defines energy level', 'Azimuthal (l) — the subshell shape (s, p, d, f)', 'Magnetic (mₗ) — orbital orientation in space', 'Spin (mₛ) — +1/2 or −1/2, two electrons per orbital'] },
              { type: 'note', text: 'Aufbau principle: electrons fill lowest-energy orbitals first. 1s → 2s → 2p → 3s → 3p → 4s → 3d.' }
            ],
            activities: [{ name: 'Electron configuration drill', description: 'Write the configuration for elements 1–30 on the board.' }],
            exercises: [
              { question: 'Write the electron configuration for sodium (Na, Z=11).', answer: '1s² 2s² 2p⁶ 3s¹' },
              { question: 'How many electrons can the 3d subshell hold?', answer: '10 (5 orbitals × 2 electrons each)' },
              { question: 'Why does potassium (Z=19) have its 19th electron in 4s not 3d?', answer: 'The 4s orbital is lower in energy than 3d, so electrons fill 4s first.' }
            ],
            pastPaperQuestions: [{ year: '2023', question: 'Define the term "first ionisation energy". (2 marks)', answer: 'The energy required to remove one mole of electrons from one mole of gaseous atoms (1), to form one mole of gaseous 1+ ions (1).' }],
            homework: ['Write configurations for elements 1–30', 'Read about the s, p, d, f blocks in the periodic table']
          }, S('chemical-bonding', 'Chemical Bonding'), S('thermodynamics-intro', 'Thermodynamics'), S('organic-mechanisms', 'Organic Reaction Mechanisms'), S('kinetics', 'Reaction Kinetics')] },
    { name: 'Year 2 (S6)', lessons: [S('equilibria', 'Chemical Equilibria'), S('electrochemistry', 'Electrochemistry'), S('spectroscopy', 'Spectroscopy'), S('transition-metals', 'Transition Metals'), S('polymers', 'Polymers and Materials')] }
  ]},
  { slug: 'biology', title: 'Biology', tagline: 'Molecules, cells and systems at A-Level.', icon: '🧬', category: 'Science', terms: [
    { name: 'Year 1 (S5)', lessons: [S('biological-molecules', 'Biological Molecules'), {
            slug: 'cell-structure', title: 'Cell Structure', level: 'S5–S6', duration: '60 min', status: 'complete',
            objectives: ['Distinguish prokaryotic and eukaryotic cells', 'Identify organelles and their functions', 'Explain the endosymbiotic theory', 'Describe cell fractionation and microscopy techniques'],
            materials: ['Cell diagram', 'Microscope images', 'Textbook chapter'],
            content: [
              { type: 'p', text: 'All cells share three features: a cell membrane, cytoplasm, and genetic material. Beyond that, cells fall into two categories. Prokaryotes (bacteria and archaea) lack a nucleus and membrane-bound organelles. Eukaryotes (plants, animals, fungi, protists) have a nucleus and internal membrane-bound compartments.' },
              { type: 'svg', caption: 'Eukaryotic cell: nucleus (genetic control), mitochondria (ATP), ER (protein/lipid synthesis), Golgi (packaging), ribosomes (protein synthesis).', svg: '<svg viewBox="0 0 460 240" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto"><ellipse cx="230" cy="120" rx="210" ry="105" fill="#f0f9ff" stroke="#1a73e8" stroke-width="2.5"/><circle cx="230" cy="120" r="38" fill="#fca5a5" stroke="#dc2626" stroke-width="2"/><text x="230" y="124" text-anchor="middle" font-size="11" fill="#7f1d1d" font-weight="bold">Nucleus</text><ellipse cx="110" cy="70" rx="24" ry="11" fill="#fbbf24" stroke="#d97706" stroke-width="1.5"/><text x="110" y="53" text-anchor="middle" font-size="10" font-weight="bold" fill="#92400e">Mitochondria</text><ellipse cx="350" cy="70" rx="24" ry="11" fill="#fbbf24" stroke="#d97706" stroke-width="1.5"/><path d="M300,150 Q340,140 370,160 Q340,180 300,170" fill="none" stroke="#7c3aed" stroke-width="2.5"/><text x="360" y="200" text-anchor="middle" font-size="10" fill="#6b21a8" font-weight="bold">Golgi</text><path d="M90,140 Q70,155 85,175 Q105,180 115,165" fill="none" stroke="#16a34a" stroke-width="2.5"/><text x="80" y="200" text-anchor="middle" font-size="10" fill="#166534" font-weight="bold">ER</text><circle cx="170" cy="170" r="3" fill="#111"/><circle cx="176" cy="176" r="3" fill="#111"/><text x="150" y="205" text-anchor="middle" font-size="10">Ribosomes</text></svg>' },
              { type: 'h2', text: 'Comparing prokaryotes and eukaryotes' },
              { type: 'ul', items: ['Nucleus: prokaryotes lack it, eukaryotes have it', 'Ribosomes: prokaryotes 70S, eukaryotes 80S (mitochondria have 70S)', 'Cell wall: prokaryotes have peptidoglycan (bacteria)', 'Size: prokaryotes 1–5 μm, eukaryotes 10–100 μm'] },
              { type: 'note', text: 'Endosymbiotic theory: mitochondria and chloroplasts were once free-living prokaryotes engulfed by larger cells. Evidence: they have their own circular DNA, 70S ribosomes, and double membranes.' }
            ],
            activities: [{ name: 'Microscope comparison', description: 'View prepared slides of plant and animal cells, draw and label differences.' }],
            exercises: [
              { question: 'Name two features that distinguish prokaryotic from eukaryotic cells.', answer: '(1) Prokaryotes lack a membrane-bound nucleus; (2) Prokaryotes lack membrane-bound organelles like mitochondria and ER.' },
              { question: 'What is the function of the Golgi apparatus?', answer: 'Modify, package, and sort proteins and lipids received from the ER before sending them to their final destination.' },
              { question: 'Give two pieces of evidence for the endosymbiotic theory.', answer: '(1) Mitochondria have their own circular DNA; (2) Mitochondria have 70S ribosomes like bacteria.' }
            ],
            pastPaperQuestions: [{ year: '2024', question: 'Explain why a cell with many mitochondria would be expected to have a high rate of respiration. (3 marks)', answer: 'Mitochondria are the site of aerobic respiration (1). More mitochondria = more capacity to produce ATP (1), so the cell can meet high energy demands (1).' }],
            homework: ['Draw and label both prokaryotic and eukaryotic cell diagrams', 'Read about cell fractionation']
          }, S('enzymes', 'Enzymes'), S('transport-membranes', 'Transport Across Membranes'), S('dna-replication', 'DNA and Replication')] },
    { name: 'Year 2 (S6)', lessons: [S('genetics-alevel', 'Genetics'), S('evolution', 'Evolution and Natural Selection'), S('ecology-alevel', 'Ecology'), S('nervous-system', 'Nervous System'), S('immunology', 'Immunology')] }
  ]},
  { slug: 'physics', title: 'Physics', tagline: 'Mechanics, fields and modern physics.', icon: '⚛️', category: 'Science', terms: [
    { name: 'Year 1 (S5)', lessons: [{
            slug: 'kinematics-alevel', title: 'Kinematics', level: 'S5–S6', duration: '60 min', status: 'complete',
            objectives: ['Distinguish distance, displacement, speed, velocity, acceleration', 'Use the equations of motion (suvat)', 'Interpret velocity-time and displacement-time graphs', 'Solve projectile motion problems'],
            materials: ['Graph paper', 'Calculator', 'Textbook chapter'],
            content: [
              { type: 'p', text: 'Kinematics describes motion without considering the forces causing it. At A-Level, motion problems use the suvat equations, which assume constant acceleration. These equations govern everything from car crashes to rocket launches.' },
              { type: 'svg', caption: 'Velocity-time graph with three phases. Gradient of the line = acceleration. Area under the curve = displacement.', svg: '<svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto"><line x1="50" y1="190" x2="380" y2="190" stroke="#333" stroke-width="1.5"/><line x1="50" y1="20" x2="50" y2="190" stroke="#333" stroke-width="1.5"/><text x="370" y="208" text-anchor="end" font-size="12" font-weight="bold">t (s)</text><text x="38" y="28" text-anchor="end" font-size="12" font-weight="bold">v (m/s)</text><line x1="80" y1="170" x2="180" y2="100" stroke="#1a73e8" stroke-width="3"/><line x1="180" y1="100" x2="250" y2="100" stroke="#1a73e8" stroke-width="3"/><line x1="250" y1="100" x2="330" y2="170" stroke="#dc2626" stroke-width="3"/><polygon points="80,170 180,100 180,170" fill="#1a73e8" opacity="0.15"/><text x="130" y="150" font-size="11" text-anchor="middle" fill="#1a73e8" font-weight="bold">accel</text><text x="215" y="90" font-size="11" text-anchor="middle" fill="#1a73e8" font-weight="bold">constant v</text><text x="295" y="150" font-size="11" text-anchor="middle" fill="#dc2626" font-weight="bold">decel</text></svg>' },
              { type: 'h2', text: 'The suvat equations' },
              { type: 'formula', text: 'v = u + at' },
              { type: 'formula', text: 's = ut + ½at²' },
              { type: 'formula', text: 'v² = u² + 2as' },
              { type: 'formula', text: 's = ½(u + v)t' },
              { type: 'p', text: 'Where: s = displacement, u = initial velocity, v = final velocity, a = acceleration, t = time. Each equation omits one variable — choose the one that matches what you have and what you need.' },
              { type: 'note', text: 'Projectile motion: horizontal and vertical motion are independent. Horizontal velocity is constant (no air resistance). Vertical velocity changes under gravity (a = −9.8 m/s² if up is positive).' }
            ],
            activities: [{ name: 'Graph analysis', description: 'Given a velocity-time graph, calculate total displacement by finding the area under the curve.' }],
            exercises: [
              { question: 'A car accelerates from rest at 3 m/s² for 5 seconds. Find its final velocity.', answer: 'v = u + at = 0 + (3)(5) = 15 m/s' },
              { question: 'A ball is thrown upward at 20 m/s. How high does it go? (g = 9.8 m/s²)', answer: 'v² = u² + 2as → 0 = 400 + 2(−9.8)s → s = 400/19.6 = 20.4 m' },
              { question: 'A train decelerates from 30 m/s to rest in 15 seconds. Find the deceleration.', answer: 'a = (v − u)/t = (0 − 30)/15 = −2 m/s²' }
            ],
            pastPaperQuestions: [{ year: '2024', question: 'A stone is dropped from a cliff 45 m high. Calculate the time taken to reach the ground. (g = 9.8 m/s²) (3 marks)', answer: 's = ut + ½at² → 45 = 0 + ½(9.8)t² (1) → t² = 90/9.8 = 9.18 (1) → t ≈ 3.0 s (1).' }],
            homework: ['Complete 10 suvat problems', 'Draw a velocity-time graph for a ball thrown upward and falling back']
          }, S('dynamics', 'Dynamics and Forces'), S('work-energy-alevel', 'Work, Energy and Power'), S('materials', 'Materials and Deformation'), S('waves-alevel', 'Waves')] },
    { name: 'Year 2 (S6)', lessons: [S('electric-fields', 'Electric Fields'), S('magnetic-fields', 'Magnetic Fields'), S('nuclear-physics', 'Nuclear Physics'), S('thermodynamics-physics', 'Thermodynamics'), S('astrophysics', 'Astrophysics')] }
  ]},
  { slug: 'mathematics', title: 'Mathematics', tagline: 'Pure maths and mechanics.', icon: '➗', category: 'Mathematics', terms: [
    { name: 'Year 1 (S5)', lessons: [S('algebra-alevel', 'Algebra'), {
            slug: 'differentiation', title: 'Differentiation', level: 'S5–S6', duration: '60 min', status: 'complete',
            objectives: ['Understand the derivative as a limit', 'Apply the power, product, quotient, and chain rules', 'Find equations of tangents and normals', 'Locate stationary points and classify them'],
            materials: ['Graph paper', 'Calculator', 'Textbook chapter'],
            content: [
              { type: 'p', text: 'Differentiation measures how a function changes as its input changes. The derivative f\'(x) gives the instantaneous rate of change, which geometrically is the slope of the tangent line at any point. This single concept underpins physics (velocity, acceleration), economics (marginal cost), and engineering (rates of change).' },
              { type: 'svg', caption: 'The derivative f\'(x) at a point equals the slope of the tangent line there. For small Δx, the slope Δy/Δx approaches f\'(x).', svg: '<svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto"><line x1="40" y1="190" x2="380" y2="190" stroke="#333" stroke-width="1.5"/><line x1="40" y1="20" x2="40" y2="190" stroke="#333" stroke-width="1.5"/><text x="370" y="208" text-anchor="end" font-size="12" font-weight="bold">x</text><text x="28" y="28" text-anchor="end" font-size="12" font-weight="bold">y</text><path d="M60,180 Q160,20 340,60" fill="none" stroke="#1a73e8" stroke-width="2.5"/><line x1="100" y1="125" x2="260" y2="70" stroke="#16a34a" stroke-width="2" stroke-dasharray="6,3"/><circle cx="180" cy="95" r="5" fill="#dc2626"/><text x="262" y="68" font-size="11" fill="#16a34a" font-weight="bold">tangent</text><text x="170" y="80" font-size="10" fill="#dc2626" font-weight="bold">(x, f(x))</text><line x1="180" y1="150" x2="220" y2="150" stroke="#666" stroke-width="1"/><line x1="220" y1="150" x2="220" y2="100" stroke="#666" stroke-width="1"/><text x="200" y="165" font-size="11" text-anchor="middle" font-weight="bold">Δx</text><text x="230" y="130" font-size="11" font-weight="bold">Δy</text></svg>' },
              { type: 'formula', text: 'f\'(x) = lim[h→0] (f(x+h) − f(x)) / h' },
              { type: 'h2', text: 'Core rules' },
              { type: 'ul', items: ['Power rule: d/dx(xⁿ) = nxⁿ⁻¹', 'Product rule: d/dx(uv) = u\'v + uv\'', 'Quotient rule: d/dx(u/v) = (u\'v − uv\') / v²', 'Chain rule: d/dx(f(g(x))) = f\'(g(x)) · g\'(x)'] },
              { type: 'note', text: 'Stationary points: solve f\'(x) = 0. Classify with the second derivative: f\'\'(x) > 0 = minimum, f\'\'(x) < 0 = maximum, f\'\'(x) = 0 = point of inflection.' }
            ],
            activities: [{ name: 'Tangent line practice', description: 'For y = x² − 4x + 3, find the tangent at x = 3 and graph both.' }],
            exercises: [
              { question: 'Differentiate y = 3x⁴ − 2x² + 7.', answer: 'dy/dx = 12x³ − 4x' },
              { question: 'Find the equation of the tangent to y = x² at x = 2.', answer: 'dy/dx = 2x = 4 at x = 2. Point (2, 4). Tangent: y − 4 = 4(x − 2), so y = 4x − 4.' },
              { question: 'Find and classify the stationary points of y = x³ − 3x.', answer: 'dy/dx = 3x² − 3 = 0 → x = ±1. d²y/dx² = 6x. At x=1: f\'\'=6 > 0, minimum. At x=−1: f\'\'=−6 < 0, maximum.' }
            ],
            pastPaperQuestions: [{ year: '2023', question: 'Find the gradient of the curve y = x³ − 2x at the point where x = 2. (3 marks)', answer: 'dy/dx = 3x² − 2 (1). At x = 2: dy/dx = 3(4) − 2 = 10 (2).' }],
            homework: ['Complete 10 differentiation problems from the textbook', 'Find stationary points for y = 2x³ − 9x² + 12x']
          }, S('integration', 'Integration'), S('vectors', 'Vectors'), S('statistics-alevel', 'Statistics')] },
    { name: 'Year 2 (S6)', lessons: [S('complex-numbers', 'Complex Numbers'), S('matrices', 'Matrices'), S('differential-equations', 'Differential Equations'), S('probability-alevel', 'Probability'), S('mechanics-maths', 'Mechanics')] }
  ]},
  { slug: 'further-mathematics', title: 'Further Mathematics', tagline: 'Advanced pure and applied maths.', icon: '📐', category: 'Mathematics', terms: [
    { name: 'Pure', lessons: [S('further-algebra', 'Further Algebra'), S('hyperbolic-functions', 'Hyperbolic Functions'), S('polar-coordinates', 'Polar Coordinates'), S('advanced-differential-equations', 'Advanced Differential Equations')] },
    { name: 'Applied', lessons: [S('classical-mechanics', 'Classical Mechanics'), S('advanced-statistics', 'Advanced Statistics'), S('discrete-maths', 'Discrete Mathematics'), S('numerical-methods', 'Numerical Methods')] }
  ]},
  { slug: 'economics', title: 'Economics', tagline: 'Micro, macro and development economics.', icon: '📈', category: 'Business', terms: [
    { name: 'Year 1 (S5)', lessons: [S('microeconomics-intro', 'Microeconomics'), S('demand-supply', 'Demand and Supply'), S('market-failure', 'Market Failure'), S('macroeconomic-indicators', 'Macroeconomic Indicators')] },
    { name: 'Year 2 (S6)', lessons: [S('macroeconomic-policy', 'Macroeconomic Policy'), S('international-trade-alevel', 'International Trade'), S('development-economics', 'Development Economics'), S('economics-uganda', 'The Ugandan Economy')] }
  ]},
  { slug: 'history', title: 'History', tagline: 'African and world history at A-Level.', icon: '📜', category: 'Humanities', terms: [
    { name: 'Year 1 (S5)', lessons: [S('european-history', 'European History'), S('african-nationalism', 'African Nationalism'), S('colonialism-alevel', 'Colonialism in Africa'), S('cold-war-alevel', 'The Cold War')] },
    { name: 'Year 2 (S6)', lessons: [S('post-colonial-africa', 'Post-Colonial Africa'), S('globalisation', 'Globalisation'), S('historiography', 'Historiography')] }
  ]},
  { slug: 'geography', title: 'Geography', tagline: 'Physical and human geography at A-Level.', icon: '🌍', category: 'Humanities', terms: [
    { name: 'Year 1 (S5)', lessons: [S('hydrology', 'Hydrology'), S('geomorphology', 'Geomorphology'), S('climatology', 'Climatology'), S('population-geography', 'Population Geography')] },
    { name: 'Year 2 (S6)', lessons: [S('economic-geography', 'Economic Geography'), S('urban-geography', 'Urban Geography'), S('environmental-geography', 'Environmental Geography')] }
  ]},
  { slug: 'literature', title: 'Literature in English', tagline: 'Prose, poetry and drama at A-Level.', icon: '📚', category: 'Arts', terms: [
    { name: 'Year 1 (S5)', lessons: [S('shakespeare', 'Shakespeare'), S('african-prose', 'African Prose'), S('poetry-alevel', 'Poetry'), S('drama-alevel', 'Drama')] },
    { name: 'Year 2 (S6)', lessons: [S('modern-literature', 'Modern Literature'), S('postcolonial-literature', 'Postcolonial Literature'), S('literary-theory', 'Literary Theory')] }
  ]},
  { slug: 'divinity', title: 'Divinity', tagline: 'Biblical studies and theology.', icon: '🕊️', category: 'Humanities', terms: [
    { name: 'Year 1 (S5)', lessons: [S('old-testament', 'Old Testament'), S('new-testament', 'New Testament'), S('biblical-ethics', 'Biblical Ethics')] },
    { name: 'Year 2 (S6)', lessons: [S('church-history', 'Church History'), S('theology', 'Theology'), S('world-religions-alevel', 'World Religions')] }
  ]}
]

