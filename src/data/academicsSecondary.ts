export type ContentBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] }
  | { type: 'note'; text: string }
  | { type: 'formula'; text: string }

export type AcademicLesson = {
  slug: string
  title: string
  level: string
  duration: string
  status: 'complete' | 'in-progress'
  objectives: string[]
  materials: string[]
  content: ContentBlock[]
  activities: { name: string; description: string }[]
  exercises: { question: string; answer: string }[]
  pastPaperQuestions?: { year: string; question: string; answer: string }[]
  homework?: string[]
  notes?: string
}

export type Term = { name: string; lessons: AcademicLesson[] }
export type AcademicSubject = {
  slug: string
  title: string
  tagline: string
  icon: string
  category: string
  terms: Term[]
}

// Stub helper — metadata complete, body is starter template
const S = (slug: string, title: string, level = 'S1–S4', duration = '40 min'): AcademicLesson => ({
  slug, title, level, duration, status: 'in-progress',
  objectives: [
    `Define and explain the key terms in "${title}"`,
    `Apply the main idea of "${title}" to two worked examples`,
    `Answer exam-style questions on "${title}" with correct method`,
    `Identify common misconceptions about "${title}"`
  ],
  materials: ['Chalkboard or whiteboard', 'Student notebooks', 'Printed worksheet', 'Textbook chapter'],
  content: [
    { type: 'p', text: `Introduction to "${title}" — connect the topic to something students encounter daily. State the key terms in bold and define each one clearly.` },
    { type: 'h2', text: 'Key concepts' },
    { type: 'p', text: 'Explain the first core idea in 3–4 sentences. Follow with a second core idea. Use the board to write key terms where students can copy them.' },
    { type: 'h2', text: 'Worked example' },
    { type: 'p', text: 'Walk through a full worked example step by step. Show every intermediate calculation so students can follow the reasoning, not just the final answer.' },
    { type: 'h2', text: 'Common mistakes' },
    { type: 'ul', items: ['Mistake 1 — describe and explain how to avoid it', 'Mistake 2 — describe and explain how to avoid it'] },
    { type: 'note', text: 'Teacher tip: pause after the worked example and ask a student to re-explain it in their own words. This immediately reveals who is following and who is lost.' }
  ],
  activities: [
    { name: 'Think-Pair-Share (8 min)', description: 'Students think alone for 2 min, discuss with a partner for 3 min, then share answers with the class.' },
    { name: 'Board work (10 min)', description: 'Three students solve practice questions on the board while the rest work in notebooks. Review together.' }
  ],
  exercises: [
    { question: `Question 1 on "${title}" — recall or definition`, answer: 'Model answer with the key point and any calculation.' },
    { question: `Question 2 on "${title}" — apply the concept`, answer: 'Worked solution showing every step.' },
    { question: `Question 3 on "${title}" — exam-style multi-step`, answer: 'Full mark-scheme-style answer.' },
    { question: `Question 4 on "${title}" — explain the reasoning`, answer: 'Explanation with the scientific or mathematical justification.' },
    { question: `Question 5 on "${title}" — apply to a real-world case`, answer: 'Application answer with reasoning.' }
  ],
  pastPaperQuestions: [
    { year: '2024', question: `A past-paper-style question on "${title}" (2–4 marks)`, answer: 'Mark-scheme-style answer with allocation of marks.' },
    { year: '2023', question: `A longer past-paper-style question on "${title}" (4–6 marks)`, answer: 'Full marking-guide answer.' }
  ],
  homework: ['Complete exercises 1–5 in the workbook', 'Write a one-page summary of today\'s lesson', 'Read the next topic ahead of class'],
  notes: `Common misconception to address explicitly when teaching "${title}". Emphasise the correct terminology and the correct method.`
})

// Full helper — provide actual content for flagship lessons
const F = (data: AcademicLesson): AcademicLesson => ({ ...data, status: 'complete' })

export const secondarySubjects: AcademicSubject[] = [
  // ============ CHEMISTRY ============
  {
    slug: 'chemistry', title: 'Chemistry', tagline: 'Atoms, elements, reactions and the world around us.', icon: '⚗️', category: 'Science',
    terms: [
      { name: 'Term 1 — Foundations of Chemistry', lessons: [
        F({
          slug: 'atoms-and-elements', title: 'Atoms and Elements', level: 'S1–S4', duration: '45 min', status: 'complete',
          objectives: [
            'Define atom, element, compound and mixture with examples',
            'Identify the three subatomic particles and their relative charges and masses',
            'Calculate numbers of protons, neutrons and electrons from atomic and mass numbers',
            'Interpret the position of an element on the periodic table'
          ],
          materials: ['Periodic table (printed per student)', 'Chalkboard with coloured chalk', 'Atom model (optional)', 'Worksheet with 10 practice elements'],
          content: [
            { type: 'svg', svg: '<img src="https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTE1NjAyfDB8MXxzZWFyY2h8MXx8Y2hlbWlzdHJ5JTIwbW9sZWN1bGFyJTIwbW9kZWx8ZW58MXwwfHx8MTc5MzE0MTczMXww&ixlib=rb-4.1.0&q=80&w=1080" alt="A molecular model with black, white, blue, orange, and yellow spheres on a " style="max-width:100%;border-radius:10px" />', caption: 'A molecular model with black, white, blue, orange, and yellow spheres on a  (Photo: Terry Vlisidis / Unsplash)' }, { type: 'p', text: 'Everything around you — the air you breathe, the water you drink, the phone in your pocket — is built from tiny particles called atoms. An atom is the smallest particle of an element that still retains the properties of that element. Atoms are unimaginably small: a single drop of water contains about 1,500,000,000,000,000,000,000 atoms. Even a grain of sand contains billions.' },
            { type: 'p', text: 'The idea that matter is made of tiny indivisible particles was proposed by ancient Greek philosophers over 2,000 years ago, but it was the English chemist John Dalton in 1803 who turned it into a scientific theory. Dalton proposed that all matter is made of atoms, atoms of the same element are identical, atoms of different elements are different, and atoms combine in fixed ratios to form compounds. Although we now know atoms are divisible into smaller particles, Dalton\'s core insight remains the foundation of modern chemistry.' },
            { type: 'h2', text: 'Elements, compounds, and mixtures' },
            { type: 'p', text: 'An element is a pure substance made of only one type of atom. Gold is an element — every atom in a piece of gold is a gold atom. Oxygen is an element — every atom in oxygen gas is an oxygen atom. Carbon, iron, sodium, chlorine — all are elements. There are 118 known elements, and every one is listed in the periodic table. Most elements are metals (like iron and copper), some are non-metals (like oxygen and sulfur), and a few are metalloids with properties in between (like silicon).' },
            { type: 'p', text: 'A compound is a substance made of two or more different elements chemically bonded together in fixed proportions. Water is a compound — its formula is H₂O, meaning exactly two hydrogen atoms for every one oxygen atom. Carbon dioxide is a compound — CO₂, one carbon and two oxygen atoms. Compounds have completely different properties from the elements they contain. Sodium is a metal that explodes in water; chlorine is a toxic gas; but combined in a 1:1 ratio they form sodium chloride — ordinary table salt — which is safe to eat and essential for life.' },
            { type: 'p', text: 'A mixture is two or more substances mixed together but NOT chemically bonded. Salt water is a mixture — the salt and water are mixed but each retains its own properties. Air is a mixture of nitrogen, oxygen, carbon dioxide and other gases. Unlike compounds, mixtures can be separated by physical means (filtration, distillation, evaporation) without breaking chemical bonds.' },
            { type: 'h2', text: 'The three subatomic particles' },
            { type: 'p', text: 'Every atom is made of three smaller particles. Each has a different charge, mass, and location:' },
            { type: 'ul', items: [
              'Protons — positively charged (+1). Found in the nucleus. Mass ≈ 1 atomic mass unit (amu). The number of protons determines the element.',
              'Neutrons — no charge (0). Found in the nucleus. Mass ≈ 1 amu. Stabilise the nucleus.',
              'Electrons — negatively charged (−1). Orbit the nucleus in shells. Mass ≈ 1/1836 amu (almost negligible). Balance the positive charge of the protons in a neutral atom.'
            ]},
            { type: 'p', text: 'The nucleus — the dense core at the centre of the atom — contains the protons and neutrons. Almost all of the mass of an atom is in the nucleus, but the nucleus is incredibly small compared to the overall size of the atom. If an atom were the size of a football stadium, the nucleus would be roughly the size of a pea at the centre.' },
            { type: 'h2', text: 'Atomic number and mass number' },
            { type: 'p', text: 'Two numbers define each element:' },
            { type: 'ul', items: [
              'Atomic number (Z) — the number of protons in the nucleus. This is the identity of the element. Carbon always has 6 protons, oxygen always 8, gold always 79. Change the proton count and you have a different element.',
              'Mass number (A) — the total number of protons plus neutrons. This tells you the weight of the atom.'
            ]},
            { type: 'formula', text: 'Atomic number (Z) = number of protons' },
            { type: 'formula', text: 'Mass number (A) = protons + neutrons' },
            { type: 'formula', text: 'Number of neutrons = Mass number − Atomic number = A − Z' },
            { type: 'formula', text: 'Number of electrons (neutral atom) = number of protons' },
            { type: 'h2', text: 'Worked example' },
            { type: 'p', text: 'A sodium atom has atomic number 11 and mass number 23. How many protons, neutrons and electrons does it have?' },
            { type: 'p', text: 'Answer: Protons = atomic number = 11. Electrons = protons = 11 (because sodium is neutral). Neutrons = mass number − atomic number = 23 − 11 = 12. So a sodium atom has 11 protons, 12 neutrons and 11 electrons.' },
            { type: 'h2', text: 'Isotopes' },
            { type: 'p', text: 'Some elements have atoms with the same number of protons but different numbers of neutrons. These are called isotopes. For example, hydrogen has three isotopes: protium (0 neutrons), deuterium (1 neutron), tritium (2 neutrons). All three are hydrogen because they all have 1 proton, but they have different masses. Carbon has isotopes carbon-12 (6 neutrons) and carbon-14 (8 neutrons). Carbon-14 is radioactive and is used by archaeologists to date ancient objects — this is radiocarbon dating.' },
            { type: 'h2', text: 'The periodic table' },
            { type: 'p', text: 'Every element is listed in the periodic table, arranged by increasing atomic number. Each square shows the element symbol (e.g., Na for sodium), the atomic number (top or bottom depending on the table), and the mass number or relative atomic mass. The elements are arranged in rows called periods (horizontal) and columns called groups (vertical). Elements in the same group have similar chemical properties because they have the same number of electrons in their outermost shell — this outer-shell configuration determines how an element reacts.' },
            { type: 'note', text: 'Teacher tip: bring a real periodic table. Have each student pick one element and write down its symbol, atomic number, mass number, and number of protons, neutrons and electrons. This 5-minute exercise cements the whole concept.' }
          ],
          activities: [
            { name: 'Build an atom (12 min)', description: 'Divide students into groups of 3. Each group picks one element from the periodic table. They draw the atom on the board: nucleus with protons and neutrons labelled, electrons in shells. Each group presents for 60 seconds, explaining what they drew.' },
            { name: 'Element bingo (8 min)', description: 'Call out "atomic number 6" or "mass number 23" and students shout out the element name. Builds fluency with the periodic table.' },
            { name: 'Pair quiz (6 min)', description: 'Students quiz each other: "How many neutrons in oxygen-16?" (8) or "What element has 17 protons?" (chlorine).' }
          ],
          exercises: [
            { question: '1. A carbon atom has atomic number 6 and mass number 12. State the number of protons, neutrons and electrons.', answer: 'Protons = 6. Neutrons = 12 − 6 = 6. Electrons = 6.' },
            { question: '2. An atom has 17 protons and 18 neutrons. What is its atomic number and mass number? Which element is it?', answer: 'Atomic number = 17 (protons). Mass number = 17 + 18 = 35. The element is chlorine (Cl).' },
            { question: '3. An atom has 20 electrons and mass number 40. Identify the element and the number of neutrons.', answer: 'Protons = electrons = 20 → calcium (Ca). Neutrons = 40 − 20 = 20.' },
            { question: '4. Explain the difference between an element, a compound, and a mixture. Give one example of each.', answer: 'Element: pure substance with one type of atom (gold). Compound: elements chemically bonded in fixed ratio (water = H₂O). Mixture: substances mixed but not chemically bonded (salt water).' },
            { question: '5. A potassium atom has 19 electrons filling shells 2, 8, 8, 1. How many outermost electrons does it have, and would it typically lose or gain electrons to form an ion?', answer: '1 outermost electron. Because it has only 1 electron in the outer shell, it will typically LOSE that electron to form a K⁺ ion — reaching the stable electron configuration of the noble gas argon.' }
          ],
          pastPaperQuestions: [
            { year: '2023', question: 'A magnesium atom has 12 protons and 12 neutrons. State its atomic number and mass number. (2 marks)', answer: 'Atomic number = 12 (protons). Mass number = 24 (12 + 12). (1 mark each.)' },
            { year: '2022', question: 'Explain why an atom is electrically neutral. (2 marks)', answer: 'The number of positive protons equals the number of negative electrons, so the charges exactly cancel out.' }
          ],
          homework: [
            'Complete exercises 1–5 in your notebook',
            'Pick one element from the periodic table and write a 5-sentence profile: name, symbol, atomic number, mass number, one use in daily life',
            'Read the next lesson: The Periodic Table'
          ],
          notes: 'Common misconception: students confuse atomic number with mass number. Emphasise repeatedly: atomic number is what defines the element; mass number is just the weight. Another common error: forgetting that electrons equal protons only for NEUTRAL atoms — ions have unequal numbers.'
        }),
        S('periodic-table', 'The Periodic Table'),
        S('chemical-reactions', 'Chemical Reactions'),
        S('acids-bases-salts', 'Acids, Bases and Salts'),
        S('separation-techniques', 'Separation Techniques')
      ]},
      { name: 'Term 2 — Chemical Reactions', lessons: [
        S('chemical-equations', 'Chemical Equations'),
        S('the-mole-concept', 'The Mole Concept'),
        S('states-of-matter', 'States of Matter'),
        S('oxidation-reduction', 'Oxidation and Reduction')
      ]},
      { name: 'Term 3 — Organic and Applied Chemistry', lessons: [
        S('organic-chemistry-intro', 'Introduction to Organic Chemistry'),
        S('fuels-energy', 'Fuels and Energy'),
        S('water-treatment', 'Water Treatment')
      ]}
    ]
  },
  // ============ BIOLOGY ============
  {
    slug: 'biology', title: 'Biology', tagline: 'Cells, life processes, and living things.', icon: '🧬', category: 'Science',
    terms: [
      { name: 'Term 1 — Foundations of Biology', lessons: [
        F({
          slug: 'cells-basic-unit-of-life', title: 'Cells: The Basic Unit of Life', level: 'S1–S4', duration: '45 min', status: 'complete',
          objectives: [
            'State the three principles of cell theory',
            'Identify and label the parts of plant and animal cells',
            'Explain the function of each major organelle',
            'Compare plant and animal cells in a table'
          ],
          materials: ['Cell diagrams (printed)', 'Chalkboard', 'Microscope slides of onion or elodea (optional)', 'Coloured pencils'],
          content: [
            { type: 'svg', svg: '<img src="https://images.unsplash.com/photo-1631556097152-c39479bbff93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTE1NjAyfDB8MXxzZWFyY2h8MXx8bWljcm9zY29wZSUyMGJpb2xvZ3klMjBjZWxsc3xlbnwxfDB8fHwxNzkzMTQxNjc3fDA&ixlib=rb-4.1.0&q=80&w=1080" alt="Fluorescent blue cells with irregular shapes against a dark background" style="max-width:100%;border-radius:10px" />', caption: 'Fluorescent blue cells with irregular shapes against a dark background (Photo: National Cancer Institute / Unsplash)' }, { type: 'p', text: 'Every living thing — from a single-celled bacterium to the largest blue whale — is built from cells. Cells are the fundamental units of life. Some organisms consist of just one cell (bacteria, amoeba, yeast), while others consist of trillions of cells working together (humans have about 37 trillion). But whether an organism has one cell or trillions, each cell follows the same basic blueprint.' },
            { type: 'h2', text: 'The cell theory' },
            { type: 'p', text: 'The cell theory is the foundation of biology. It states three principles:' },
            { type: 'ol', items: [
              'All living organisms are made of one or more cells.',
              'The cell is the basic unit of structure and function in all living things.',
              'All cells arise from pre-existing cells by cell division.'
            ]},
            { type: 'p', text: 'These ideas seem obvious today, but they took centuries to establish. Robert Hooke first observed cells in 1665 when he looked at cork under a microscope. Antonie van Leeuwenhoek observed living cells in pond water shortly after. Matthias Schleiden and Theodor Schwann proposed the first two principles in 1838–1839. Rudolf Virchow added the third principle ("omnis cellula e cellula" — every cell from a cell) in 1855.' },
            { type: 'h2', text: 'The organelles of a cell' },
            { type: 'p', text: 'Inside every cell are specialised structures called organelles, each with a specific job. Think of a cell as a miniature factory — the organelles are the departments and machines.' },
            { type: 'ul', items: [
              'Cell membrane — the outer boundary of the cell. Made of a phospholipid bilayer. Controls what enters and leaves the cell (selective permeability).',
              'Cytoplasm — the jelly-like substance filling the cell. Where most chemical reactions occur.',
              'Nucleus — the control centre. Contains DNA (deoxyribonucleic acid) — the instructions for making proteins and running the cell.',
              'Mitochondria — the powerhouse. Site of aerobic respiration. Produces ATP (adenosine triphosphate) — the cell\'s energy currency. Cells that need lots of energy (muscle cells, nerve cells) have many mitochondria.',
              'Ribosomes — tiny protein factories. Site of protein synthesis. Found free in the cytoplasm or attached to the rough endoplasmic reticulum.',
              'Endoplasmic reticulum (ER) — a network of membranes. Rough ER (with ribosomes) makes proteins. Smooth ER makes lipids.',
              'Golgi apparatus — the post office. Modifies, packages, and ships proteins to their destinations.',
              'Vacuole — storage organelle. Stores water, salts, sugars, and waste products.',
              'Lysosomes — the recycling centre. Contain enzymes that break down waste and worn-out organelles.'
            ]},
            { type: 'p', text: 'Plant cells have three additional structures that animal cells do not:' },
            { type: 'ul', items: [
              'Cell wall — a rigid outer layer made of cellulose. Gives the plant cell its shape and protects it from bursting.',
              'Chloroplasts — the site of photosynthesis. Contain the green pigment chlorophyll that captures light energy and converts it into food (glucose).',
              'Large central vacuole — a single large vacuole that stores water and helps maintain the cell\'s internal pressure (turgor). This is why plant stems stand upright when watered and droop when dry.'
            ]},
            { type: 'h2', text: 'Worked example' },
            { type: 'p', text: 'A student looks at a cell under a microscope and observes: a cell wall, a large central vacuole, and green structures inside. What type of cell is it, and why?' },
            { type: 'p', text: 'Answer: It is a plant cell. The presence of a cell wall (only in plants), a large central vacuole (plant-specific), and green structures (chloroplasts — plants only) all confirm this. An animal cell would lack all three of these features.' },
            { type: 'h2', text: 'Comparing plant and animal cells' },
            { type: 'p', text: 'Both plant and animal cells share: cell membrane, cytoplasm, nucleus, mitochondria, ribosomes, endoplasmic reticulum, Golgi apparatus, and vacuoles (though the vacuoles differ in size). They differ in three key ways: plant cells have a cell wall (animal cells do not); plant cells have chloroplasts (animal cells do not); plant cells typically have one large central vacuole, while animal cells have small temporary vacuoles or none.' },
            { type: 'note', text: 'Teacher tip: bring a real onion cell slide. Peel a thin layer of onion skin, place on a slide with a drop of iodine, and let students see actual cells. Nothing cements the concept of "cells" better than seeing them move under a microscope.' }
          ],
          activities: [
            { name: 'Draw and label (15 min)', description: 'Each student draws a plant and an animal cell side by side, labelling every organelle they can remember. Then exchange notebooks with a partner to peer-check and correct.' },
            { name: 'Organelle match (10 min)', description: 'Prepare two sets of cards — one with organelle names, one with their functions. In groups, students race to match them correctly.' },
            { name: 'Discussion (5 min)', description: 'Ask the class: "Why do you think plant cells need chloroplasts but animal cells do not?" (Answer: plants make their own food via photosynthesis; animals must eat theirs.)' }
          ],
          exercises: [
            { question: '1. Name three structures found in plant cells but not in animal cells.', answer: 'Cell wall, chloroplasts, large central vacuole.' },
            { question: '2. What is the function of the mitochondria?', answer: 'To produce energy (ATP) for the cell through aerobic respiration. It is called the "powerhouse of the cell."' },
            { question: '3. Where is DNA found in a cell?', answer: 'In the nucleus.' },
            { question: '4. Explain why muscle cells contain many more mitochondria than skin cells.', answer: 'Muscle cells require much more energy to contract and move, so they need more mitochondria to produce ATP. Skin cells have low energy demands.' },
            { question: '5. State the three principles of the cell theory.', answer: '(1) All living organisms are made of one or more cells. (2) The cell is the basic unit of structure and function. (3) All cells arise from pre-existing cells by division.' }
          ],
          pastPaperQuestions: [
            { year: '2023', question: 'State two differences between plant and animal cells. (2 marks)', answer: 'Plant cells have a cell wall; animal cells do not. (1 mark). Plant cells have chloroplasts; animal cells do not. (1 mark).' },
            { year: '2022', question: 'A cell is observed to contain many mitochondria. Suggest what type of cell it might be and explain your reasoning. (3 marks)', answer: 'Likely a muscle or nerve cell (1 mark) because these cells require large amounts of energy (1 mark) which mitochondria produce via respiration (1 mark).' }
          ],
          homework: [
            'Complete exercises 1–5',
            'Draw a large, clearly labelled diagram of both plant and animal cells',
            'Research one disease caused by organelle dysfunction (e.g. mitochondrial disease) and write 5 sentences about it'
          ],
          notes: 'Common misconception: students often forget that the cell membrane is present in plants too. The cell wall is OUTSIDE the cell membrane — plants have both. Emphasise: cell wall is a structural layer; cell membrane is the selective barrier.'
        }),
        S('photosynthesis', 'Photosynthesis'),
        S('respiration', 'Respiration'),
        S('cell-division', 'Cell Division'),
        S('classification', 'Classification of Living Things')
      ]},
      { name: 'Term 2 — Body Systems', lessons: [
        S('digestive-system', 'The Digestive System'),
        S('circulatory-system', 'The Circulatory System'),
        S('respiratory-system', 'The Respiratory System'),
        S('excretory-system', 'The Excretory System')
      ]},
      { name: 'Term 3 — Genetics and Ecology', lessons: [
        S('genetics-basics', 'Introduction to Genetics'),
        S('ecology-ecosystems', 'Ecology and Ecosystems'),
        S('human-reproduction', 'Human Reproduction')
      ]}
    ]
  },
  // ============ PHYSICS ============
  {
    slug: 'physics', title: 'Physics', tagline: 'Motion, forces, energy and the laws of the universe.', icon: '⚛️', category: 'Science',
    terms: [
      { name: 'Term 1 — Mechanics', lessons: [
        F({
          slug: 'motion-and-speed', title: 'Motion and Speed', level: 'S1–S4', duration: '45 min', status: 'complete',
          objectives: [
            'Distinguish between distance and displacement',
            'Distinguish between speed and velocity',
            'Calculate speed using the formula speed = distance/time',
            'Calculate acceleration from velocity change',
            'Interpret distance-time graphs'
          ],
          materials: ['Ruler or tape measure', 'Stopwatch (phone works)', 'Chalk or markers for the ground', 'Graph paper'],
          content: [
            { type: 'svg', svg: '<img src="https://images.unsplash.com/photo-1649182325585-27a7d33563b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTE1NjAyfDB8MXxzZWFyY2h8MXx8cGh5c2ljcyUyMG1vdGlvbiUyMHNwZWVkfGVufDF8MHx8fDE3OTMxNDE2ODd8MA&ixlib=rb-4.1.0&q=80&w=1080" alt="a purple and blue background with lines of light" style="max-width:100%;border-radius:10px" />', caption: 'a purple and blue background with lines of light (Photo: Anton Filatov / Unsplash)' }, { type: 'p', text: 'Motion is one of the most fundamental things in physics. From a matatu speeding through Kampala to a planet orbiting the sun, from a falling leaf to an electron inside an atom — everything moves. Physics describes motion using a small set of precisely-defined quantities. Learn these definitions carefully because they are the foundation for everything that follows: Newton\'s laws, momentum, energy, waves.' },
            { type: 'h2', text: 'Distance vs displacement' },
            { type: 'p', text: 'Distance is the total length of the path you travel. It is a scalar quantity — it has magnitude only, no direction. If you walk 5 metres, then walk another 3 metres, your distance travelled is 8 metres. Distance is always positive and always increases.' },
            { type: 'p', text: 'Displacement is how far you are from your starting point, measured in a specific direction. It is a vector quantity — it has both magnitude and direction. If you walk 10 metres east, then 10 metres west, your distance travelled is 20 metres but your displacement is 0 metres, because you are back where you started.' },
            { type: 'p', text: 'This distinction matters in physics because velocity (based on displacement) can be zero even when you have been moving a lot — like a runner going around a circular track. At the end of the lap, distance is 400 metres but displacement is zero.' },
            { type: 'h2', text: 'Speed and velocity' },
            { type: 'formula', text: 'Speed = Distance ÷ Time' },
            { type: 'formula', text: 'Velocity = Displacement ÷ Time' },
            { type: 'p', text: 'Speed tells you how fast you are moving. Velocity tells you how fast AND in what direction. A car travelling at 60 km/h has a speed of 60 km/h. A car travelling at 60 km/h due north has a velocity of 60 km/h due north. If the car turns and continues at 60 km/h due east, its speed stays the same but its velocity has changed — because the direction changed.' },
            { type: 'p', text: 'Units: the SI unit of both speed and velocity is metres per second (m/s). For everyday situations, kilometres per hour (km/h) is more common. To convert: 1 m/s = 3.6 km/h.' },
            { type: 'h2', text: 'Acceleration' },
            { type: 'p', text: 'Acceleration is the rate at which velocity changes. If a car speeds up from 0 to 60 km/h in 10 seconds, it has accelerated. If a car slows down from 60 km/h to 0, it has decelerated — which is negative acceleration.' },
            { type: 'formula', text: 'Acceleration = (Final velocity − Initial velocity) ÷ Time' },
            { type: 'formula', text: 'a = (v − u) ÷ t' },
            { type: 'p', text: 'Where: a = acceleration (m/s²), v = final velocity (m/s), u = initial velocity (m/s), t = time (s). The unit of acceleration is metres per second squared (m/s²).' },
            { type: 'h2', text: 'Worked example 1 — speed' },
            { type: 'p', text: 'A car travels 240 km in 3 hours. What is its average speed?' },
            { type: 'p', text: 'Solution: Speed = Distance ÷ Time = 240 km ÷ 3 h = 80 km/h.' },
            { type: 'h2', text: 'Worked example 2 — acceleration' },
            { type: 'p', text: 'A bicycle speeds up from 4 m/s to 12 m/s in 4 seconds. What is its acceleration?' },
            { type: 'p', text: 'Solution: a = (v − u) ÷ t = (12 − 4) ÷ 4 = 8 ÷ 4 = 2 m/s².' },
            { type: 'h2', text: 'Distance-time graphs' },
            { type: 'p', text: 'A distance-time graph plots distance (vertical axis) against time (horizontal axis). The slope (gradient) of the line represents speed. There are four patterns you must recognise:' },
            { type: 'ul', items: [
              'Flat horizontal line — distance is not changing as time passes → object is at rest (zero speed)',
              'Straight line sloping upward — distance increases at a steady rate → constant speed',
              'Steeper slope — distance increases faster → higher speed',
              'Curved line — slope changes over time → changing speed (acceleration or deceleration)'
            ]},
            { type: 'note', text: 'Teacher tip: take the class outside. Mark 20 metres on the ground. Have students walk, jog, and run that distance while a partner times them. Calculate speeds on the board together. Nothing teaches speed like measuring real motion.' }
          ],
          activities: [
            { name: 'Measure real speed (15 min)', description: 'Mark 20 m on the schoolyard. Students take turns walking, jogging, and running while a partner times them with a stopwatch. Everyone records their times and calculates speeds in m/s and km/h.' },
            { name: 'Graph interpretation (10 min)', description: 'Draw three distance-time graphs on the board: one flat, one sloping upward, one curved. Ask students to describe the motion in each case.' },
            { name: 'Calculation drill (10 min)', description: 'Rapid-fire practice: "150 km in 3 h → speed?" (50 km/h). "50 m in 10 s → speed?" (5 m/s). "At 6 m/s for 12 s → distance?" (72 m).' }
          ],
          exercises: [
            { question: '1. A matatu travels 60 km in 45 minutes. Calculate its average speed in km/h.', answer: 'Time = 45 min = 45/60 h = 0.75 h. Speed = 60 km ÷ 0.75 h = 80 km/h.' },
            { question: '2. A cyclist accelerates from 2 m/s to 10 m/s in 4 seconds. Calculate the acceleration.', answer: 'a = (v − u) ÷ t = (10 − 2) ÷ 4 = 8 ÷ 4 = 2 m/s².' },
            { question: '3. A runner completes 400 m in 50 seconds. Calculate the speed in m/s.', answer: 'Speed = 400 ÷ 50 = 8 m/s.' },
            { question: '4. On a distance-time graph, what does a flat horizontal line mean?', answer: 'The object is at rest — its distance is not changing as time passes, so its speed is zero.' },
            { question: '5. A car travels 150 km at a steady speed of 60 km/h. How long does the journey take?', answer: 'Time = Distance ÷ Speed = 150 ÷ 60 = 2.5 hours (2 hours 30 minutes).' }
          ],
          pastPaperQuestions: [
            { year: '2023', question: 'A car accelerates uniformly from 10 m/s to 30 m/s in 5 seconds. Calculate the acceleration. (2 marks)', answer: 'a = (v − u) ÷ t = (30 − 10) ÷ 5 = 20 ÷ 5 = 4 m/s². (1 mark for substitution, 1 for answer.)' },
            { year: '2022', question: 'Distinguish between speed and velocity. (2 marks)', answer: 'Speed is a scalar quantity with magnitude only (1 mark). Velocity is a vector quantity with both magnitude and direction (1 mark).' }
          ],
          homework: [
            'Complete exercises 1–5',
            'Measure how long it takes you to walk 100 metres, and calculate your walking speed in both m/s and km/h',
            'Draw a distance-time graph showing: (a) 10 s of rest, (b) 20 s of constant motion, (c) 5 s of slower motion'
          ],
          notes: 'Common misconception: students confuse speed with velocity. Emphasise that velocity includes DIRECTION — a car going around a roundabout at constant speed has changing velocity, because the direction changes. Another common error: forgetting units — always write m/s, km/h, or m/s².'
        }),
        S('newtons-laws', 'Newton\'s Laws of Motion'),
        S('forces-and-friction', 'Forces and Friction'),
        S('work-energy-power', 'Work, Energy and Power')
      ]},
      { name: 'Term 2 — Waves and Electricity', lessons: [
        S('waves-sound', 'Waves and Sound'),
        S('light-reflection-refraction', 'Light: Reflection and Refraction'),
        S('electricity-basics', 'Basic Electricity'),
        S('magnetism', 'Magnetism')
      ]},
      { name: 'Term 3 — Modern Physics', lessons: [
        S('pressure-fluids', 'Pressure and Fluids'),
        S('heat-transfer', 'Heat Transfer'),
        S('radioactivity', 'Radioactivity')
      ]}
    ]
  },
  // ============ MATHEMATICS ============
  {
    slug: 'mathematics', title: 'Mathematics', tagline: 'Numbers, algebra, geometry and statistics.', icon: '➗', category: 'Mathematics',
    terms: [
      { name: 'Term 1 — Numbers and Algebra', lessons: [
        F({
          slug: 'fractions-and-decimals', title: 'Fractions and Decimals', level: 'S1–S4', duration: '45 min', status: 'complete',
          objectives: [
            'Convert between fractions, decimals, and percentages',
            'Add, subtract, multiply, and divide fractions',
            'Compare fractions using common denominators',
            'Solve real-world problems involving fractions and decimals'
          ],
          materials: ['Chalkboard', 'Fraction strips or diagrams', 'Calculator (for checking)', 'Worksheets'],
          content: [
            { type: 'svg', svg: '<img src="https://images.unsplash.com/photo-1635372722656-389f87a941b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTE1NjAyfDB8MXxzZWFyY2h8MXx8bWF0aGVtYXRpY3MlMjBjaGFsa2JvYXJkfGVufDF8MHx8fDE3OTMxNDE3MjN8MA&ixlib=rb-4.1.0&q=80&w=1080" alt="a blackboard with a lot of writing on it" style="max-width:100%;border-radius:10px" />', caption: 'a blackboard with a lot of writing on it (Photo: Thomas T / Unsplash)' }, { type: 'p', text: 'Fractions and decimals are two ways of writing the same thing: a number that is not a whole number. Understanding both, and being able to convert between them, is essential for everyday life — calculating discounts, measuring ingredients, sharing money, reading statistics.' },
            { type: 'h2', text: 'What fractions mean' },
            { type: 'p', text: 'A fraction like 3/4 means "3 parts out of 4 equal parts." The top number (3) is the numerator — how many parts you have. The bottom number (4) is the denominator — how many equal parts the whole is divided into. If you cut a cake into 4 equal slices and take 3, you have 3/4 of the cake.' },
            { type: 'h2', text: 'Converting fractions to decimals' },
            { type: 'p', text: 'To convert a fraction to a decimal, divide the numerator by the denominator. 3/4 = 3 ÷ 4 = 0.75. 1/2 = 0.5. 1/4 = 0.25. 3/8 = 3 ÷ 8 = 0.375.' },
            { type: 'formula', text: 'Fraction → Decimal: divide numerator by denominator' },
            { type: 'formula', text: 'Decimal → Fraction: write as fraction over 10, 100, 1000 etc., then simplify' },
            { type: 'h2', text: 'Adding and subtracting fractions' },
            { type: 'p', text: 'When fractions have the same denominator, simply add or subtract the numerators. 2/5 + 1/5 = 3/5. 4/7 − 2/7 = 2/7.' },
            { type: 'p', text: 'When denominators are different, first find a common denominator — the lowest number both denominators divide into. For 1/2 + 1/3: the lowest common denominator is 6. Convert each fraction: 1/2 = 3/6, 1/3 = 2/6. Then add: 3/6 + 2/6 = 5/6.' },
            { type: 'h2', text: 'Multiplying fractions' },
            { type: 'p', text: 'Multiply numerators together and denominators together. Simplify if possible. Example: 2/3 × 3/4 = (2×3)/(3×4) = 6/12 = 1/2.' },
            { type: 'h2', text: 'Dividing fractions' },
            { type: 'p', text: 'Flip the second fraction (find its reciprocal) and multiply. Example: 2/3 ÷ 4/5 = 2/3 × 5/4 = 10/12 = 5/6. The rule "keep, change, flip" — keep the first fraction, change division to multiplication, flip the second fraction.' },
            { type: 'h2', text: 'Worked example' },
            { type: 'p', text: 'A recipe calls for 2/3 cup of sugar. If you are making half the recipe, how much sugar do you need?' },
            { type: 'p', text: 'Solution: Half of 2/3 = 2/3 × 1/2 = (2 × 1)/(3 × 2) = 2/6 = 1/3 cup.' },
            { type: 'h2', text: 'Real-world example' },
            { type: 'p', text: 'A shirt costs 80,000 shillings and is on sale for 25% off. How much do you save, and what is the new price?' },
            { type: 'p', text: 'Solution: 25% = 1/4. 1/4 of 80,000 = 20,000. So the discount is 20,000 shillings. New price = 80,000 − 20,000 = 60,000 shillings.' },
            { type: 'note', text: 'Teacher tip: use physical objects. Bring a pizza box (drawn), cut into 8 slices. Show students how 3/8 + 2/8 = 5/8 works with real slices. Fractions become concrete.' }
          ],
          activities: [
            { name: 'Fraction strips (10 min)', description: 'Give each student paper strips. Ask them to fold into halves, quarters, eighths. Compare — is 2/4 the same as 1/2? This builds intuition.' },
            { name: 'Restaurant math (12 min)', description: 'Present a menu with prices. Students calculate 15% tip, 20% discount, and split the bill 3 ways using fractions.' },
            { name: 'Board work (8 min)', description: 'Solve 5 different fraction problems on the board, calling different students up for each step.' }
          ],
          exercises: [
            { question: '1. Convert 3/8 to a decimal.', answer: '3 ÷ 8 = 0.375' },
            { question: '2. Simplify 18/24.', answer: 'Both divide by 6: 18/24 = 3/4.' },
            { question: '3. Calculate 1/2 + 1/3.', answer: 'Common denominator 6: 3/6 + 2/6 = 5/6.' },
            { question: '4. Calculate 3/4 × 2/5.', answer: '3×2 / 4×5 = 6/20 = 3/10.' },
            { question: '5. Calculate 2/3 ÷ 1/6.', answer: 'Keep, change, flip: 2/3 × 6/1 = 12/3 = 4.' }
          ],
          pastPaperQuestions: [
            { year: '2023', question: 'A shop sells a bag of rice for 60,000 UGX. During a sale, the price is reduced by 20%. Calculate the new price. (3 marks)', answer: '20% of 60,000 = 12,000 (1 mark). New price = 60,000 − 12,000 = 48,000 UGX (2 marks).' }
          ],
          homework: ['Complete exercises 1–5', 'Find one real shopping receipt and calculate the percentage discount on any item', 'Convert these fractions to decimals: 5/8, 7/20, 9/25'],
          notes: 'Common misconception: students add numerators and denominators incorrectly (e.g. 1/2 + 1/3 = 2/5 — WRONG). Emphasise: you must find a common denominator first.'
        }),
        S('integers', 'Integers and Number Line'),
        S('algebra-basics', 'Basic Algebra'),
        S('linear-equations', 'Linear Equations'),
        S('indices-logarithms', 'Indices and Logarithms')
      ]},
      { name: 'Term 2 — Geometry and Trigonometry', lessons: [
        S('angles-polygons', 'Angles and Polygons'),
        S('pythagoras', 'Pythagoras\' Theorem'),
        S('trigonometry-intro', 'Introduction to Trigonometry'),
        S('circles', 'Circles'),
        S('surface-area-volume', 'Surface Area and Volume')
      ]},
      { name: 'Term 3 — Statistics and Probability', lessons: [
        S('statistics-basics', 'Statistics'),
        S('probability', 'Probability'),
        S('linear-inequalities', 'Linear Inequalities'),
        S('graphs-functions', 'Graphs of Functions')
      ]}
    ]
  },
  // ============ ENGLISH ============
  {
    slug: 'english', title: 'English', tagline: 'Grammar, composition and comprehension.', icon: '🗣️', category: 'Languages',
    terms: [
      { name: 'Term 1 — Grammar', lessons: [
        S('parts-of-speech', 'Parts of Speech', 'S1'),
        S('tenses', 'Tenses', 'S1'),
        S('punctuation', 'Punctuation', 'S1'),
        S('sentence-structure', 'Sentence Structure', 'S2'),
        S('direct-indirect-speech', 'Direct and Indirect Speech', 'S2')
      ]},
      { name: 'Term 2 — Composition', lessons: [
        S('narrative-writing', 'Narrative Writing', 'S2'),
        S('descriptive-writing', 'Descriptive Writing', 'S3'),
        S('argumentative-writing', 'Argumentative Writing', 'S3'),
        S('formal-letters', 'Formal Letters', 'S3'),
        S('cv-writing', 'CV and Cover Letters', 'S4')
      ]},
      { name: 'Term 3 — Literature and Comprehension', lessons: [
        S('comprehension', 'Comprehension Passages', 'S3'),
        S('summary-writing', 'Summary Writing', 'S4'),
        S('poetry-intro', 'Introduction to Poetry', 'S4'),
        S('drama-intro', 'Introduction to Drama', 'S4')
      ]}
    ]
  },
  // ============ KISWAHILI ============
  {
    slug: 'kiswahili', title: 'Kiswahili', tagline: 'Lugha, sarufi na fasihi.', icon: '🇹🇿', category: 'Languages',
    terms: [
      { name: 'Muhula wa 1 — Sarufi', lessons: [
        S('sarufi-nomino', 'Sarufi: Nomino', 'S1'),
        S('sarufi-vitenzi', 'Sarufi: Vitenzi', 'S1'),
        S('sarufi-vivumishi', 'Sarufi: Vivumishi', 'S2'),
        S('nyakati', 'Nyakati za Vitenzi', 'S2'),
        S('ngeli', 'Ngeli za Nomino', 'S3')
      ]},
      { name: 'Muhula wa 2 — Insha', lessons: [
        S('insha-methali', 'Insha: Methali', 'S3'),
        S('insha-mazungumzo', 'Insha: Mazungumzo', 'S3'),
        S('insha-barua', 'Barua Rasmi', 'S4'),
        S('uandishi-ripoti', 'Uandishi wa Ripoti', 'S4')
      ]},
      { name: 'Muhula wa 3 — Fasihi', lessons: [
        S('fasihi-simulizi', 'Fasihi Simulizi', 'S3'),
        S('mashairi', 'Mashairi', 'S4'),
        S('riwaya', 'Riwaya', 'S4'),
        S('tamthilia', 'Tamthilia', 'S4')
      ]}
    ]
  },
  // ============ GEOGRAPHY ============
  {
    slug: 'geography', title: 'Geography', tagline: 'Land, climate and the physical world.', icon: '🌍', category: 'Humanities',
    terms: [
      { name: 'Term 1 — Physical Geography', lessons: [
        S('the-earth-structure', 'Structure of the Earth', 'S1'),
        S('map-reading', 'Map Reading', 'S1'),
        S('climate-types', 'Climate Types', 'S2'),
        S('weather-elements', 'Weather Elements', 'S2')
      ]},
      { name: 'Term 2 — Human Geography', lessons: [
        S('population', 'Population Studies', 'S3'),
        S('agriculture-types', 'Types of Agriculture', 'S3'),
        S('urbanisation', 'Urbanisation', 'S4'),
        S('industry', 'Industry and Manufacturing', 'S4')
      ]},
      { name: 'Term 3 — Regional Geography', lessons: [
        S('east-africa', 'East Africa', 'S4'),
        S('uganda-regions', 'Regions of Uganda', 'S4')
      ]}
    ]
  },
  // ============ HISTORY ============
  {
    slug: 'history', title: 'History', tagline: 'Uganda, Africa and the world.', icon: '📜', category: 'Humanities',
    terms: [
      { name: 'Term 1 — Africa Before Colonisation', lessons: [
        S('pre-colonial-uganda', 'Pre-Colonial Uganda', 'S1'),
        S('kingdoms-east-africa', 'Kingdoms of East Africa', 'S2'),
        S('transatlantic-slave-trade', 'Transatlantic Slave Trade', 'S2')
      ]},
      { name: 'Term 2 — Colonial and Independence', lessons: [
        S('scramble-for-africa', 'Scramble for Africa', 'S3'),
        S('colonial-administration', 'Colonial Administration', 'S3'),
        S('uganda-independence', 'Uganda\'s Independence', 'S4'),
        S('post-independence', 'Post-Independence Africa', 'S4')
      ]},
      { name: 'Term 3 — World History', lessons: [
        S('world-war-1', 'World War I', 'S4'),
        S('world-war-2', 'World War II', 'S4'),
        S('cold-war', 'The Cold War', 'S4')
      ]}
    ]
  },
  // ============ RELIGIOUS EDUCATION ============
  {
    slug: 'religious-education', title: 'Religious Education', tagline: 'Faith, ethics and world religions.', icon: '🕊️', category: 'Humanities',
    terms: [
      { name: 'Term 1 — Foundations', lessons: [
        S('world-religions', 'World Religions', 'S1'),
        S('ethics-morality', 'Ethics and Morality', 'S2')
      ]},
      { name: 'Term 2 — Texts and Traditions', lessons: [
        S('religious-texts', 'Religious Texts', 'S2'),
        S('prophets', 'Prophets', 'S3')
      ]},
      { name: 'Term 3 — Applied Religion', lessons: [
        S('religion-society', 'Religion and Society', 'S3'),
        S('religious-holidays', 'Religious Holidays', 'S4')
      ]}
    ]
  },
  // ============ BUSINESS STUDIES ============
  {
    slug: 'business-studies', title: 'Business Studies', tagline: 'Types of business and how they work.', icon: '💼', category: 'Business',
    terms: [
      { name: 'Term 1 — Introduction to Business', lessons: [
        S('business-types', 'Types of Business', 'S1'),
        S('business-environment', 'Business Environment', 'S2')
      ]},
      { name: 'Term 2 — Business Functions', lessons: [
        S('marketing-mix', 'Marketing Mix', 'S3'),
        S('human-resources', 'Human Resources', 'S3'),
        S('business-finance', 'Business Finance', 'S3')
      ]},
      { name: 'Term 3 — Ethics and Trade', lessons: [
        S('business-ethics', 'Business Ethics', 'S4'),
        S('international-trade', 'International Trade', 'S4')
      ]}
    ]
  },
  // ============ ENTREPRENEURSHIP ============
  {
    slug: 'entrepreneurship', title: 'Entrepreneurship', tagline: 'Start and grow your own business.', icon: '🚀', category: 'Business',
    terms: [
      { name: 'Term 1 — Ideas', lessons: [
        S('business-ideas', 'Finding Business Ideas', 'S1'),
        S('market-research', 'Market Research', 'S2')
      ]},
      { name: 'Term 2 — Planning', lessons: [
        S('business-plans', 'Business Plans', 'S2'),
        S('raising-capital', 'Raising Capital', 'S3')
      ]},
      { name: 'Term 3 — Growth', lessons: [
        S('marketing-basics', 'Marketing Basics', 'S3'),
        S('business-growth', 'Business Growth', 'S4')
      ]}
    ]
  },
  // ============ ACCOUNTING ============
  {
    slug: 'accounting', title: 'Accounting', tagline: 'Bookkeeping, ledgers and financial statements.', icon: '📊', category: 'Business',
    terms: [
      { name: 'Term 1 — Basics', lessons: [
        S('double-entry', 'Double-Entry Bookkeeping', 'S1'),
        S('ledgers', 'Ledgers', 'S2')
      ]},
      { name: 'Term 2 — Trial Balance', lessons: [
        S('trial-balance', 'Trial Balance', 'S2'),
        S('trading-profit-loss', 'Trading and Profit & Loss', 'S3')
      ]},
      { name: 'Term 3 — Financial Statements', lessons: [
        S('balance-sheet', 'The Balance Sheet', 'S3'),
        S('cash-flow', 'Cash Flow Statements', 'S4')
      ]}
    ]
  },
  // ============ LITERATURE ============
  {
    slug: 'literature', title: 'Literature', tagline: 'Novels, poetry and drama.', icon: '📚', category: 'Arts',
    terms: [
      { name: 'Term 1 — Poetry', lessons: [
        S('poetry-basics', 'Poetry Basics', 'S1'),
        S('poetry-analysis', 'Poetry Analysis', 'S3')
      ]},
      { name: 'Term 2 — Novels', lessons: [
        S('novel-elements', 'Elements of a Novel', 'S2'),
        S('novel-analysis', 'Novel Analysis', 'S4')
      ]},
      { name: 'Term 3 — Drama', lessons: [
        S('drama-techniques', 'Drama Techniques', 'S3'),
        S('play-analysis', 'Play Analysis', 'S4')
      ]}
    ]
  },
  // ============ FINE ART ============
  {
    slug: 'fine-art', title: 'Fine Art', tagline: 'Drawing, painting and design.', icon: '🎨', category: 'Arts',
    terms: [
      { name: 'Term 1 — Drawing', lessons: [
        S('drawing-basics', 'Drawing Basics', 'S1'),
        S('perspective', 'Perspective', 'S2')
      ]},
      { name: 'Term 2 — Colour', lessons: [
        S('colour-theory', 'Colour Theory', 'S2'),
        S('painting-techniques', 'Painting Techniques', 'S3')
      ]},
      { name: 'Term 3 — Design', lessons: [
        S('design-principles', 'Design Principles', 'S3'),
        S('graphic-design', 'Graphic Design', 'S4')
      ]}
    ]
  },
  // ============ AGRICULTURE ============
  {
    slug: 'agriculture', title: 'Agriculture', tagline: 'Farming, crops and livestock.', icon: '🌾', category: 'Science',
    terms: [
      { name: 'Term 1 — Soil and Crops', lessons: [
        S('types-of-soil', 'Types of Soil', 'S1'),
        S('crop-rotation', 'Crop Rotation', 'S2'),
        S('soil-fertility', 'Soil Fertility', 'S2')
      ]},
      { name: 'Term 2 — Livestock', lessons: [
        S('livestock-basics', 'Livestock Basics', 'S3'),
        S('animal-health', 'Animal Health', 'S3'),
        S('poultry-farming', 'Poultry Farming', 'S3')
      ]},
      { name: 'Term 3 — Farm Management', lessons: [
        S('farm-tools', 'Farm Tools and Equipment', 'S4'),
        S('farm-records', 'Farm Records', 'S4'),
        S('agricultural-marketing', 'Agricultural Marketing', 'S4')
      ]}
    ]
  }
]

export function getSecondarySubject(slug: string) { return secondarySubjects.find((s) => s.slug === slug) }
export function getSecondaryLesson(subjectSlug: string, lessonSlug: string) {
  const subject = getSecondarySubject(subjectSlug)
  if (!subject) return undefined
  for (const term of subject.terms) {
    const lesson = term.lessons.find((l) => l.slug === lessonSlug)
    if (lesson) return { lesson, term: term.name }
  }
  return undefined
}

