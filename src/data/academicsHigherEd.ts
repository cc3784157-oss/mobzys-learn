import type { AcademicSubject, AcademicLesson } from './academicsSecondary'

const S = (slug: string, title: string, level = 'Year 1–3', duration = '60 min'): AcademicLesson => ({
  slug, title, level, duration, status: 'in-progress',
  objectives: [
    `Understand "${title}" at university level`,
    'Connect theory to real-world and research applications',
    'Prepare for examinations and further research',
    'Reference at least one standard textbook or paper'
  ],
  materials: ['Recommended textbook', 'Lecture slides', 'Academic papers', 'Past papers'],
  content: [
    { type: 'p', text: `University lesson "${title}". Academic rigor is the standard here — define terms formally, cite standard references, show derivations and proofs, and connect the topic to current research or industry practice. Write 1,500–2,500 words here.` },
    { type: 'h2', text: 'Core theory' },
    { type: 'p', text: 'Formal theory with references to standard texts (e.g. "See Cormen et al., Introduction to Algorithms, 4th ed., Chapter X").' },
    { type: 'h2', text: 'Applied example' },
    { type: 'p', text: 'Real-world or research-level case study, with critical analysis.' },
    { type: 'note', text: 'University tip: connect the theory to at least one published paper or real case study. This is what separates university-level study from lower levels.' }
  ],
  activities: [
    { name: 'Seminar discussion', description: 'Group discussion of a key paper or case study. Students present and critique.' },
    { name: 'Problem set review', description: 'Walk through the week\'s problem set together, focusing on method and rigor.' }
  ],
  exercises: [
    { question: 'Problem 1 — theoretical', answer: 'Detailed solution with proof.' },
    { question: 'Problem 2 — applied', answer: 'Worked solution with real data.' }
  ],
  homework: ['Read the recommended chapter', 'Complete the problem set', 'Prepare for the tutorial by reading the assigned paper'],
  notes: 'University expectation: independent reading, critical thinking, and clear academic writing. Cite sources properly.'
})

export const higherEdSubjects: AcademicSubject[] = [
  { slug: 'computer-science', title: 'Computer Science', tagline: 'Algorithms, systems and software engineering.', icon: '💻', category: 'Computing', terms: [
    { name: 'Core (Year 1–2)', lessons: [{
            slug: 'algorithms-higher', title: 'Algorithms and Complexity', level: 'Year 1–3', duration: '60 min', status: 'complete',
            objectives: ['Analyse time and space complexity using Big-O', 'Distinguish best, average, and worst cases', 'Compare algorithm efficiency by growth rate', 'Apply amortised analysis to dynamic arrays'],
            materials: ['Cormen et al., Introduction to Algorithms (Ch. 3)', 'Graph paper', 'Python interpreter'],
            content: [
              { type: 'p', text: 'An algorithm is a finite sequence of well-defined steps that solves a problem. Two algorithms may both produce correct output, but differ enormously in how long they take and how much memory they use. Big-O notation describes how an algorithm\'s resource usage grows as the input size n grows.' },
              { type: 'svg', caption: 'Growth rates: O(1) is constant regardless of n. O(log n) is logarithmic. O(n) is linear. O(n²) is quadratic — the slowest of these.', svg: '<svg viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto"><line x1="50" y1="200" x2="370" y2="200" stroke="#333" stroke-width="1.5"/><line x1="50" y1="30" x2="50" y2="200" stroke="#333" stroke-width="1.5"/><text x="370" y="220" text-anchor="end" font-size="12" font-weight="bold">n</text><text x="30" y="40" text-anchor="end" font-size="12" font-weight="bold">time</text><line x1="60" y1="185" x2="350" y2="185" stroke="#059669" stroke-width="3"/><text x="355" y="190" font-size="11" fill="#059669" font-weight="bold">O(1)</text><path d="M60,185 Q150,150 350,110" fill="none" stroke="#1a73e8" stroke-width="3"/><text x="355" y="110" font-size="11" fill="#1a73e8" font-weight="bold">O(log n)</text><line x1="60" y1="185" x2="350" y2="80" stroke="#7c3aed" stroke-width="3"/><text x="355" y="80" font-size="11" fill="#7c3aed" font-weight="bold">O(n)</text><path d="M60,185 Q200,180 300,50 Q320,40 340,30" fill="none" stroke="#dc2626" stroke-width="3"/><text x="345" y="35" font-size="11" fill="#dc2626" font-weight="bold">O(n²)</text></svg>' },
              { type: 'h2', text: 'Common complexity classes' },
              { type: 'ul', items: ['O(1) — constant: array indexing, hash table lookup', 'O(log n) — logarithmic: binary search, balanced tree operations', 'O(n) — linear: linear search, single pass through array', 'O(n log n) — linearithmic: merge sort, heap sort (optimal comparison sorts)', 'O(n²) — quadratic: bubble sort, insertion sort, nested loops'] },
              { type: 'note', text: 'Big-O describes an upper bound on growth — it hides constants. An O(n²) algorithm might beat O(n log n) on small inputs. The asymptotic advantage only matters at scale.' }
            ],
            activities: [{ name: 'Sorting benchmark', description: 'Time bubble sort vs merge sort on n = 100, 1000, 10000 elements. Plot on log-log axes.' }],
            exercises: [
              { question: 'What is the Big-O of binary search?', answer: 'O(log n) — the search space halves each iteration.' },
              { question: 'A nested loop where both outer and inner run n times — what is the complexity?', answer: 'O(n²).' },
              { question: 'Is merge sort always O(n log n)?', answer: 'Yes — best, average, and worst cases are all O(n log n). Space is O(n).' }
            ],
            pastPaperQuestions: [{ year: '2024', question: 'Explain why binary search is O(log n). (3 marks)', answer: 'Each comparison halves the search space (1). After k comparisons the search space is n/2^k (1). Since n/2^k = 1 when k = log₂ n, the algorithm terminates in O(log n) (1).' }],
            homework: ['Implement bubble sort, insertion sort, and merge sort', 'Time each on arrays of 100, 1000, 10000 random integers']
          }, S('data-structures-higher', 'Data Structures'), S('operating-systems-higher', 'Operating Systems'), S('databases-higher', 'Databases'), S('networks-higher', 'Computer Networks')] },
    { name: 'Advanced (Year 3)', lessons: [S('machine-learning', 'Machine Learning'), S('distributed-systems', 'Distributed Systems'), S('compiler-design', 'Compiler Design'), S('software-engineering', 'Software Engineering'), S('cybersecurity-higher', 'Cybersecurity')] }
  ]},
  { slug: 'engineering', title: 'Engineering', tagline: 'Mechanical, electrical and civil engineering foundations.', icon: '🔧', category: 'Engineering', terms: [
    { name: 'Core', lessons: [S('engineering-maths', 'Engineering Mathematics'), S('engineering-mechanics', 'Engineering Mechanics'), {
            slug: 'circuit-theory', title: 'Circuit Theory', level: 'Year 1–3', duration: '60 min', status: 'complete',
            objectives: ['Apply Ohm\'s law and Kirchhoff\'s laws', 'Analyse series and parallel circuits', 'Compute equivalent resistance', 'Use the voltage divider and current divider rules'],
            materials: ['Breadboard and components', 'Multimeter', 'Textbook chapter'],
            content: [
              { type: 'p', text: 'Circuit theory is the analysis of electrical networks. Two fundamental laws — Kirchhoff\'s Current Law (KCL) and Kirchhoff\'s Voltage Law (KVL) — plus Ohm\'s Law are sufficient to analyse any DC circuit. Combined with component models (resistors, capacitors, inductors), this framework underpins all of electronics.' },
              { type: 'svg', caption: 'Simple series circuit: battery (V), resistor (R). Current flows clockwise. Ohm\'s law: V = IR. KVL: sum of voltages around loop = 0.', svg: '<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto"><line x1="80" y1="60" x2="320" y2="60" stroke="#333" stroke-width="2.5"/><line x1="320" y1="60" x2="320" y2="150" stroke="#333" stroke-width="2.5"/><line x1="320" y1="150" x2="80" y2="150" stroke="#333" stroke-width="2.5"/><line x1="80" y1="150" x2="80" y2="110" stroke="#333" stroke-width="2.5"/><line x1="80" y1="105" x2="80" y2="60" stroke="#333" stroke-width="2.5"/><rect x="70" y="105" width="20" height="8" fill="#333"/><rect x="70" y="98" width="20" height="4" fill="#333"/><text x="60" y="110" text-anchor="end" font-size="12" font-weight="bold">V</text><rect x="180" y="52" width="60" height="16" fill="#fff" stroke="#1a73e8" stroke-width="2"/><text x="210" y="42" text-anchor="middle" font-size="12" font-weight="bold" fill="#1a73e8">R</text><text x="200" y="180" text-anchor="middle" font-size="11">I →</text><polygon points="200,170 210,166 210,174" fill="#333"/><text x="200" y="30" text-anchor="middle" font-size="12" font-weight="bold">V = IR</text></svg>' },
              { type: 'formula', text: 'V = I · R   (Ohm\'s Law)' },
              { type: 'formula', text: 'ΣI_in = ΣI_out   (Kirchhoff\'s Current Law)' },
              { type: 'formula', text: 'ΣV_loop = 0   (Kirchhoff\'s Voltage Law)' },
              { type: 'h2', text: 'Series vs parallel' },
              { type: 'ul', items: ['Series: R_total = R₁ + R₂ + R₃..., same current everywhere', 'Parallel: 1/R_total = 1/R₁ + 1/R₂..., same voltage everywhere', 'Voltage divider: V_out = V_in · R₂/(R₁+R₂)', 'Current divider: I₁ = I_total · R₂/(R₁+R₂)'] },
              { type: 'note', text: 'Kirchhoff\'s laws are conservation of charge and energy at the circuit level. KCL: no charge accumulates at a node. KVL: energy is conserved around any closed loop.' }
            ],
            activities: [{ name: 'Build and measure', description: 'Breadboard a 3-resistor series-parallel network. Measure voltages and currents. Compare to hand calculations.' }],
            exercises: [
              { question: 'Two resistors R₁=100Ω and R₂=200Ω in series with 12V. Find the current.', answer: 'R_total = 300Ω. I = V/R = 12/300 = 0.04 A = 40 mA.' },
              { question: 'Same resistors in parallel with 12V. Find total current.', answer: 'R_total = (100·200)/(100+200) = 66.7Ω. I = 12/66.7 = 0.18 A = 180 mA.' },
              { question: 'A voltage divider has R₁=10kΩ, R₂=5kΩ, V_in=15V. What is V_out across R₂?', answer: 'V_out = 15 · 5/(10+5) = 15 · 1/3 = 5 V.' }
            ],
            pastPaperQuestions: [{ year: '2023', question: 'A battery of EMF 9V and internal resistance 0.5Ω drives a 4Ω load. Calculate the terminal voltage. (4 marks)', answer: 'Total R = 4.5Ω. I = 9/4.5 = 2 A (2 marks). Terminal V = EMF − Ir = 9 − 2(0.5) = 8 V (2 marks).' }],
            homework: ['Solve 10 KCL/KVL problems', 'Simulate a bridge circuit in LTspice or Falstad']
          }, S('thermodynamics-engineering', 'Thermodynamics'), S('materials-engineering', 'Materials Science')] },
    { name: 'Advanced', lessons: [S('control-systems', 'Control Systems'), S('structural-analysis', 'Structural Analysis'), S('fluid-mechanics', 'Fluid Mechanics')] }
  ]},
  { slug: 'business-administration', title: 'Business Administration', tagline: 'Management, marketing, and strategy.', icon: '💼', category: 'Business', terms: [
    { name: 'Core', lessons: [S('management-principles', 'Principles of Management'), S('marketing-management', 'Marketing Management'), S('financial-accounting-higher', 'Financial Accounting'), S('organisational-behaviour', 'Organisational Behaviour'), S('business-statistics', 'Business Statistics')] },
    { name: 'Advanced', lessons: [S('strategic-management', 'Strategic Management'), S('entrepreneurship-higher', 'Entrepreneurship'), S('international-business', 'International Business')] }
  ]},
  { slug: 'economics-higher', title: 'Economics', tagline: 'Micro, macro, and econometrics.', icon: '📈', category: 'Business', terms: [
    { name: 'Core', lessons: [S('microeconomics-higher', 'Microeconomics'), S('macroeconomics-higher', 'Macroeconomics'), S('econometrics-intro', 'Introduction to Econometrics'), S('development-economics-higher', 'Development Economics')] },
    { name: 'Advanced', lessons: [S('game-theory', 'Game Theory'), S('international-economics', 'International Economics'), S('public-economics', 'Public Economics')] }
  ]},
  { slug: 'accounting-higher', title: 'Accounting & Finance', tagline: 'Financial accounting, management accounting, and auditing.', icon: '📊', category: 'Business', terms: [
    { name: 'Core', lessons: [S('financial-accounting-advanced', 'Advanced Financial Accounting'), S('management-accounting', 'Management Accounting'), S('auditing', 'Auditing'), S('taxation', 'Taxation')] },
    { name: 'Advanced', lessons: [S('financial-management', 'Financial Management'), S('corporate-finance', 'Corporate Finance')] }
  ]},
  { slug: 'mathematics-higher', title: 'Mathematics', tagline: 'Pure and applied mathematics.', icon: '➗', category: 'Mathematics', terms: [
    { name: 'Pure', lessons: [S('real-analysis', 'Real Analysis'), S('abstract-algebra', 'Abstract Algebra'), {
            slug: 'linear-algebra', title: 'Linear Algebra', level: 'Year 1–3', duration: '60 min', status: 'complete',
            objectives: ['Understand vector spaces and subspaces', 'Perform matrix operations (addition, multiplication, inversion)', 'Compute determinants and eigenvalues', 'Apply linear transformations to geometry'],
            materials: ['Strang, Linear Algebra (Ch. 1–2)', 'Graph paper', 'Calculator with matrix support'],
            content: [
              { type: 'p', text: 'Linear algebra is the mathematics of vectors and matrices. It provides the language for solving systems of linear equations, and its concepts underpin everything from computer graphics to machine learning. A matrix is a linear transformation — it maps vectors from one space to another, and its structure tells us everything about that transformation.' },
              { type: 'svg', caption: 'A 2×2 matrix transforms a unit vector. The determinant |A| is the factor by which areas scale (|A| = 2 doubles area; |A| = 0 collapses it to a line).', svg: '<svg viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto"><line x1="40" y1="200" x2="220" y2="200" stroke="#333" stroke-width="1.5"/><line x1="40" y1="30" x2="40" y2="200" stroke="#333" stroke-width="1.5"/><text x="220" y="218" text-anchor="middle" font-size="12">x</text><text x="22" y="40" text-anchor="end" font-size="12">y</text><polygon points="40,200 140,200 140,100 40,100" fill="#eff6ff" stroke="#1a73e8" stroke-width="2"/><text x="90" y="155" text-anchor="middle" font-size="11" fill="#1a73e8">unit square</text><line x1="140" y1="200" x2="140" y2="100" stroke="#1a73e8" stroke-width="1.5"/><line x1="240" y1="200" x2="360" y2="200" stroke="#333" stroke-width="1.5"/><line x1="240" y1="30" x2="240" y2="200" stroke="#333" stroke-width="1.5"/><text x="360" y="218" text-anchor="middle" font-size="12">x\'</text><text x="222" y="40" text-anchor="end" font-size="12">y\'</text><polygon points="240,200 340,200 360,60 240,100" fill="#fef3c7" stroke="#d97706" stroke-width="2"/><text x="290" y="145" text-anchor="middle" font-size="11" fill="#92400e">transformed</text><text x="290" y="158" text-anchor="middle" font-size="10" fill="#92400e">det = 2</text></svg>' },
              { type: 'h2', text: 'Key operations' },
              { type: 'ul', items: ['Matrix addition: element-wise (dimensions must match)', 'Matrix multiplication: (m×n) · (n×p) = (m×p), not commutative', 'Determinant: det(A) ≠ 0 means A is invertible', 'Eigenvalues λ: Av = λv — the vector v is only scaled by A'] },
              { type: 'formula', text: 'For a 2×2 matrix [a b; c d]: det = ad − bc' },
              { type: 'note', text: 'Eigenvalues and eigenvectors reveal the fundamental behaviour of a transformation: eigenvectors are directions preserved by the matrix, and eigenvalues are the scaling factor along those directions. Critical in PCA, quantum mechanics, and stability analysis.' }
            ],
            activities: [{ name: 'Graph transformation', description: 'Apply [[2,1],[0,1]] to the unit square. Draw original and transformed on the same axes.' }],
            exercises: [
              { question: 'Compute det([[3,4],[1,2]]).', answer: 'det = 3(2) − 4(1) = 6 − 4 = 2.' },
              { question: 'Find the eigenvalues of [[4,1],[2,3]].', answer: 'det(A − λI) = (4−λ)(3−λ) − 2 = λ² − 7λ + 10 = (λ−5)(λ−2) = 0 → λ = 5, λ = 2.' },
              { question: 'Is [[1,2],[2,4]] invertible?', answer: 'det = 1(4) − 2(2) = 0. Not invertible (singular matrix).' }
            ],
            pastPaperQuestions: [{ year: '2024', question: 'For A = [[2, 0], [1, 3]], find A². (4 marks)', answer: 'A² = [[2,0],[1,3]] · [[2,0],[1,3]] (1). Row1·col1 = 2·2+0·1 = 4 (1). Row1·col2 = 2·0+0·3 = 0 (1). Row2·col1 = 1·2+3·1 = 5. Row2·col2 = 1·0+3·3 = 9. So A² = [[4,0],[5,9]] (1).' }],
            homework: ['Complete Strang Ch. 1 problems', 'Diagonalise A = [[4,1],[2,3]] using its eigenvalues and eigenvectors']
          }, S('topology', 'Topology'), S('complex-analysis', 'Complex Analysis')] },
    { name: 'Applied', lessons: [S('probability-theory', 'Probability Theory'), S('numerical-analysis', 'Numerical Analysis'), S('optimisation', 'Optimisation')] }
  ]},
  { slug: 'physics-higher', title: 'Physics', tagline: 'Classical and quantum physics.', icon: '⚛️', category: 'Science', terms: [
    { name: 'Core', lessons: [S('classical-mechanics-higher', 'Classical Mechanics'), S('electromagnetism', 'Electromagnetism'), {
            slug: 'quantum-mechanics', title: 'Quantum Mechanics', level: 'Year 1–3', duration: '60 min', status: 'complete',
            objectives: ['Understand wave-particle duality', 'Apply the Schrödinger equation to simple potentials', 'Interpret the wavefunction and probability density', 'Explain quantisation and the uncertainty principle'],
            materials: ['Griffiths, Introduction to Quantum Mechanics (Ch. 1–2)', 'Graph paper', 'Calculator'],
            content: [
              { type: 'p', text: 'Quantum mechanics describes the behaviour of matter and energy at atomic and subatomic scales. Unlike classical physics, where particles have definite positions and velocities, quantum mechanics uses a wavefunction ψ(x,t) whose squared magnitude |ψ|² gives the probability of finding the particle at any location.' },
              { type: 'svg', caption: 'Wavefunction ψ(x) (blue) and probability density |ψ|² (red) for a particle in a box. The particle is never found at the walls — the wavefunction is zero there.', svg: '<svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto"><line x1="40" y1="180" x2="360" y2="180" stroke="#333" stroke-width="1.5"/><line x1="40" y1="20" x2="40" y2="180" stroke="#333" stroke-width="1.5"/><text x="360" y="200" text-anchor="end" font-size="11" font-weight="bold">x</text><text x="25" y="30" text-anchor="end" font-size="11" font-weight="bold">ψ</text><rect x="60" y="30" width="280" height="140" fill="none" stroke="#ccc" stroke-dasharray="3,3"/><path d="M60,110 Q130,50 200,110 Q270,170 340,110" fill="none" stroke="#1a73e8" stroke-width="2.5"/><text x="355" y="105" font-size="11" fill="#1a73e8" font-weight="bold">ψ(x)</text><path d="M60,180 Q130,150 200,180 Q270,210 340,180" fill="none" stroke="#dc2626" stroke-width="2.5" opacity="0.8"/><text x="355" y="200" font-size="11" fill="#dc2626" font-weight="bold">|ψ|²</text><text x="60" y="205" font-size="10" text-anchor="middle">0</text><text x="340" y="205" font-size="10" text-anchor="middle">L</text></svg>' },
              { type: 'formula', text: 'Time-independent Schrödinger: −(ℏ²/2m) d²ψ/dx² + V(x)ψ = Eψ' },
              { type: 'formula', text: 'Probability density: P(x) = |ψ(x)|²' },
              { type: 'formula', text: 'Heisenberg uncertainty: Δx · Δp ≥ ℏ/2' },
              { type: 'h2', text: 'Particle in a box' },
              { type: 'p', text: 'The simplest quantum system: a particle confined to a 1D box of length L with infinite walls. The allowed energies are quantised: Eₙ = n²π²ℏ²/(2mL²) for n = 1, 2, 3... The ground state (n=1) has non-zero energy — this is zero-point energy, a purely quantum effect with no classical analogue.' },
              { type: 'note', text: 'The wavefunction itself is not physical — only |ψ|² is measurable. This is the "collapse" interpretation problem that has driven quantum foundations debate for a century.' }
            ],
            activities: [{ name: 'Particle in a box simulation', description: 'Use an online Schrödinger solver to visualise eigenstates for n = 1, 2, 3.' }],
            exercises: [
              { question: 'For a particle in a box of length L, sketch ψₙ(x) for n = 1, 2, 3.', answer: 'n=1: half sine wave (no nodes). n=2: full sine wave (1 node at centre). n=3: 1.5 sine waves (2 nodes). All zero at x=0 and x=L.' },
              { question: 'What is the physical meaning of |ψ|²?', answer: 'The probability density of finding the particle at position x. Integrated over a region, it gives the probability of finding the particle in that region.' },
              { question: 'State the Heisenberg uncertainty principle.', answer: 'Δx · Δp ≥ ℏ/2. You cannot simultaneously know both position and momentum with arbitrary precision.' }
            ],
            pastPaperQuestions: [{ year: '2024', question: 'Explain why a particle in a box cannot have zero energy. (3 marks)', answer: 'If E = 0, then momentum p = 0 and Δp = 0 (1). This would violate the uncertainty principle Δx·Δp ≥ ℏ/2 (1), since the particle is confined to finite Δx. So the lowest energy state has E₁ > 0 (zero-point energy) (1).' }],
            homework: ['Read Griffiths Ch. 2', 'Calculate E₁ for an electron in a box of L = 1 nm']
          }, S('thermodynamics-statistical', 'Statistical Thermodynamics')] },
    { name: 'Advanced', lessons: [S('solid-state', 'Solid State Physics'), S('particle-physics', 'Particle Physics'), S('general-relativity', 'General Relativity')] }
  ]},
  { slug: 'law', title: 'Law', tagline: 'Constitutional, criminal and contract law.', icon: '⚖️', category: 'Law', terms: [
    { name: 'Core', lessons: [S('constitutional-law', 'Constitutional Law'), S('criminal-law', 'Criminal Law'), S('contract-law', 'Contract Law'), S('tort-law', 'Tort Law')] },
    { name: 'Advanced', lessons: [S('international-law', 'International Law'), S('human-rights-law', 'Human Rights Law')] }
  ]}
]

