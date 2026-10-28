export type VocContentBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] }
  | { type: 'note'; text: string }
  | { type: 'formula'; text: string }
  | { type: 'svg'; svg: string; caption?: string }

export type VocLesson = {
  slug: string
  title: string
  level: 'Certificate' | 'Diploma' | 'Beginner'
  duration: string
  status: 'complete' | 'in-progress'
  objectives: string[]
  materials: string[]
  content: VocContentBlock[]
  activities: { name: string; description: string }[]
  exercises: { question: string; answer: string }[]
  homework?: string[]
  safetyNotes?: string[]
  notes?: string
}

export type VocModule = { name: string; lessons: VocLesson[] }
export type VocSubject = {
  slug: string
  title: string
  tagline: string
  icon: string
  category: string
  modules: VocModule[]
}

const S = (slug: string, title: string, level: VocLesson['level'] = 'Beginner', duration = '45 min'): VocLesson => ({
  slug, title, level, duration, status: 'in-progress',
  objectives: [
    `Understand the fundamentals of "${title}"`,
    `Identify and use the correct tools for "${title}"`,
    `Perform the procedure safely and correctly`,
    `Recognise common mistakes and how to avoid them`
  ],
  materials: ['Safety goggles', 'Work gloves', 'Basic tool kit', 'Service manual (for reference)'],
  content: [
    { type: 'p', text: `Introduction to "${title}". Real trade skills come from repeated practice with correct technique and safety discipline. This lesson explains the procedure step by step with reference to standard practice.` },
    { type: 'h2', text: 'What you will learn' },
    { type: 'p', text: 'The theory behind the procedure, the tools you need, the safety precautions you must observe, and the step-by-step method used by professionals.' },
    { type: 'h2', text: 'Step-by-step procedure' },
    { type: 'ol', items: ['Prepare workspace, tools, and safety gear', 'Inspect the component or system', 'Carry out the procedure', 'Verify the result', 'Clean up and record the work'] },
    { type: 'note', text: 'Trade tip: never rush a procedure. Time lost on a mistake is always more than time saved rushing.' }
  ],
  activities: [{ name: 'Supervised practice', description: 'Under supervision, perform the procedure on a practice unit or scrap vehicle/board/wood.' }],
  exercises: [
    { question: 'Name the tools required for this procedure.', answer: 'See "materials" above — list at least 3 and explain each one\'s use.' },
    { question: 'List 3 safety precautions.', answer: 'Answer based on the safety notes for this lesson.' },
    { question: 'Describe the correct order of steps.', answer: 'See "step-by-step procedure" above.' }
  ],
  homework: ['Review the procedure and practise on a scrap unit if available', 'Write a one-page summary of the safety hazards'],
  safetyNotes: ['Always wear PPE (goggles, gloves, sturdy shoes)', 'Never work under an unsupported vehicle — use stands, not just a jack', 'Disconnect the battery or mains supply before starting'],
  notes: 'Supervised practice is essential. Do not attempt this procedure on a customer vehicle or a live circuit until fully trained.'
})

const F = (data: VocLesson): VocLesson => ({ ...data, status: 'complete' })

export const vocSubjects: VocSubject[] = [
  // ============ AUTO MECHANICS (deep) ============
  {
    slug: 'auto-mechanics', title: 'Auto Mechanics', tagline: 'Engine, brakes, suspension and full vehicle service.', icon: '🔧', category: 'Automotive',
    modules: [
      { name: 'Module 1 — Engine Fundamentals', lessons: [
        F({
          slug: 'four-stroke-engine', title: 'The Four-Stroke Engine Cycle', level: 'Certificate', duration: '60 min', status: 'complete',
          objectives: [
            'Explain the four strokes: intake, compression, power, exhaust',
            'Identify the main engine components and their function',
            'Describe the role of the camshaft, crankshaft, valves, and piston',
            'Recognise symptoms of common engine faults'
          ],
          materials: ['Engine cutaway model or diagram', 'Socket set', 'Feeler gauges', 'Service manual for the vehicle'],
          content: [
            { type: 'svg', svg: '<img src="https://images.unsplash.com/photo-1679712547753-eaaf4dad4af8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTE1NjAyfDB8MXxzZWFyY2h8MXx8Y2FyJTIwZW5naW5lJTIwaW50ZXJuYWx8ZW58MXwwfHx8MTc5MzE0MTY4Mnww&ixlib=rb-4.1.0&q=80&w=1080" alt="a close up of a car\'s spark plugs and wire" style="max-width:100%;border-radius:10px" />', caption: 'a close up of a car\'s spark plugs and wire (Photo: Amber Morgan / Unsplash)' }, { type: 'p', text: 'Almost every vehicle on the road uses a four-stroke internal combustion engine. Understanding this cycle is the foundation of all automotive work. A four-stroke engine converts the chemical energy of fuel into mechanical energy through four distinct stages of piston movement.' },
            { type: 'h2', text: 'The four strokes' },
            { type: 'ol', items: [
              'Intake stroke: The piston moves DOWN. The intake valve opens. The fuel-air mixture is drawn into the cylinder.',
              'Compression stroke: The piston moves UP. Both valves are closed. The mixture is compressed to a fraction of its original volume, raising pressure and temperature.',
              'Power stroke: The spark plug fires. The compressed mixture ignites explosively, driving the piston DOWN with great force. This is the only stroke that produces power.',
              'Exhaust stroke: The piston moves UP. The exhaust valve opens. Burnt gases are pushed out into the exhaust system.'
            ]},
            { type: 'svg', caption: 'The four strokes — intake, compression, power, exhaust. Note how the valves open and close at each stage.', svg: '<svg viewBox="0 0 520 260" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto"><g transform="translate(10,10)"><rect x="5" y="5" width="110" height="180" fill="#f3f4f6" stroke="#333" stroke-width="2"/><text x="60" y="25" text-anchor="middle" font-size="11" font-weight="bold">1. INTAKE</text><line x1="15" y1="20" x2="15" y2="35" stroke="#dc2626" stroke-width="3"/><text x="35" y="33" font-size="9" fill="#dc2626">valve open</text><rect x="45" y="120" width="30" height="40" fill="#6b7280" stroke="#333"/><line x1="30" y1="95" x2="30" y2="115" stroke="#1a73e8" stroke-width="2" marker-end="url(#a)"/><line x1="90" y1="95" x2="90" y2="115" stroke="#1a73e8" stroke-width="2" marker-end="url(#a)"/><text x="60" y="195" text-anchor="middle" font-size="10">Piston ↓</text><text x="60" y="210" text-anchor="middle" font-size="9" fill="#666">fuel + air in</text></g><g transform="translate(130,10)"><rect x="5" y="5" width="110" height="180" fill="#f3f4f6" stroke="#333" stroke-width="2"/><text x="60" y="25" text-anchor="middle" font-size="11" font-weight="bold">2. COMPRESS</text><line x1="15" y1="20" x2="15" y2="35" stroke="#9ca3af" stroke-width="3"/><rect x="45" y="80" width="30" height="40" fill="#6b7280" stroke="#333"/><line x1="30" y1="115" x2="30" y2="135" stroke="#1a73e8" stroke-width="2" marker-end="url(#a)"/><line x1="90" y1="115" x2="90" y2="135" stroke="#1a73e8" stroke-width="2" marker-end="url(#a)"/><text x="60" y="195" text-anchor="middle" font-size="10">Piston ↑</text><text x="60" y="210" text-anchor="middle" font-size="9" fill="#666">mixture compressed</text></g><g transform="translate(250,10)"><rect x="5" y="5" width="110" height="180" fill="#fff7ed" stroke="#dc2626" stroke-width="2"/><text x="60" y="25" text-anchor="middle" font-size="11" font-weight="bold" fill="#dc2626">3. POWER</text><line x1="15" y1="20" x2="15" y2="35" stroke="#9ca3af" stroke-width="3"/><rect x="45" y="120" width="30" height="40" fill="#6b7280" stroke="#333"/><line x1="30" y1="95" x2="30" y2="115" stroke="#dc2626" stroke-width="2" marker-end="url(#a)"/><line x1="90" y1="95" x2="90" y2="115" stroke="#dc2626" stroke-width="2" marker-end="url(#a)"/><circle cx="60" cy="70" r="10" fill="#f59e0b"/><text x="60" y="74" text-anchor="middle" font-size="11" font-weight="bold">⚡</text><text x="60" y="195" text-anchor="middle" font-size="10">Piston ↓</text><text x="60" y="210" text-anchor="middle" font-size="9" fill="#dc2626">explosion → power</text></g><g transform="translate(370,10)"><rect x="5" y="5" width="120" height="180" fill="#f3f4f6" stroke="#333" stroke-width="2"/><text x="65" y="25" text-anchor="middle" font-size="11" font-weight="bold">4. EXHAUST</text><line x1="15" y1="20" x2="15" y2="35" stroke="#9ca3af" stroke-width="3"/><line x1="100" y1="20" x2="100" y2="35" stroke="#22c55e" stroke-width="3"/><text x="80" y="33" font-size="9" fill="#22c55e">valve open</text><rect x="50" y="80" width="30" height="40" fill="#6b7280" stroke="#333"/><line x1="40" y1="115" x2="40" y2="135" stroke="#1a73e8" stroke-width="2" marker-end="url(#a)"/><line x1="95" y1="115" x2="95" y2="135" stroke="#1a73e8" stroke-width="2" marker-end="url(#a)"/><text x="65" y="195" text-anchor="middle" font-size="10">Piston ↑</text><text x="65" y="210" text-anchor="middle" font-size="9" fill="#666">exhaust gases out</text></g><defs><marker id="a" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#1a73e8"/></marker></defs></svg>' },
            { type: 'h2', text: 'Main engine components' },
            { type: 'ul', items: [
              'Cylinder block — the main body of the engine. Contains the cylinders and cooling passages.',
              'Piston — moves up and down inside the cylinder. Transfers force to the crankshaft.',
              'Connecting rod — links the piston to the crankshaft.',
              'Crankshaft — converts the up-down motion of the piston into rotation.',
              'Camshaft — operates the intake and exhaust valves at the correct time.',
              'Valves — open and close to admit air/fuel and release exhaust.',
              'Spark plug — ignites the fuel-air mixture in petrol engines.',
              'Cylinder head — sits atop the block, houses the valves and spark plugs.',
              'Oil pan — reservoir of engine oil at the bottom.',
              'Timing belt/chain — synchronises the camshaft and crankshaft.'
            ]},
            { type: 'h2', text: 'Why this matters for diagnostics' },
            { type: 'p', text: 'Most engine problems give you symptoms that map to a specific stroke or component. Rough idle usually means an intake or ignition problem. Blue smoke from the exhaust means oil is burning (worn rings or valve seals). White smoke usually means coolant is entering the combustion chamber (blown head gasket). Knocking under load is often pre-ignition (wrong fuel, carbon buildup, or advanced timing).' },
            { type: 'note', text: 'Trade tip: learn to associate symptoms with faults. That association — gained through experience and reference to the service manual — is what separates a diagnostic mechanic from a part-swapper.' }
          ],
          activities: [
            { name: 'Cutaway inspection (20 min)', description: 'Examine a real engine cutaway or 3D model. Physically rotate the crank and observe each stroke. Identify the intake valve opening, piston position, and spark moment.' },
            { name: 'Component identification quiz (10 min)', description: 'Point to each component on the engine and have students name it and state its function.' }
          ],
          exercises: [
            { question: '1. Name the four strokes in order.', answer: 'Intake, Compression, Power, Exhaust.' },
            { question: '2. Which stroke produces the power?', answer: 'The Power stroke — the spark plug ignites the compressed mixture, driving the piston down.' },
            { question: '3. What are the intake and exhaust valves doing during the compression stroke?', answer: 'Both are CLOSED — the mixture must be trapped and compressed.' },
            { question: '4. What component converts piston motion into rotation?', answer: 'The crankshaft, via the connecting rod.' },
            { question: '5. Blue smoke from the exhaust usually indicates what?', answer: 'Oil is burning — often worn piston rings or valve seals.' }
          ],
          homework: ['Study the four strokes until you can draw and label each from memory', 'Research one common engine fault and the symptom it produces'],
          safetyNotes: ['Never work on an engine while it is hot — allow at least 30 min cool-down', 'Ensure the vehicle is on stands, not just a jack', 'Disconnect the battery before touching electrical components'],
          notes: 'Emphasise to students that the four-stroke cycle is not something to memorise — it is something to understand. If they understand why each stroke happens, all future diagnostics make sense.'
        }),
        F({
          slug: 'engine-components', title: 'Engine Components and Function', level: 'Beginner', duration: '45 min', status: 'complete',
          objectives: ['Identify all major engine components', 'Explain the function of each component', 'Understand how components work together', 'Recognise symptoms of worn components'],
          materials: ['Engine cutaway or diagram', 'Service manual', 'Component samples (if available)'],
          content: [
            { type: 'p', text: 'An engine is a system of hundreds of parts working together. To diagnose faults, you must understand what each component does and how it interacts with others. This lesson covers the major components — from the block and head down to the oil pump and timing system — in enough depth that you can recognise when each one fails.' },
            { type: 'h2', text: 'The core components' },
            { type: 'ul', items: ['Cylinder block — the main body. Contains cylinders, coolant passages, oil galleries', 'Cylinder head — sits atop the block. Houses valves, camshafts, spark plugs', 'Pistons — transfer combustion force to connecting rods', 'Connecting rods — link piston to crankshaft', 'Crankshaft — converts reciprocating motion into rotation', 'Camshaft — opens and closes valves at the correct time', 'Valves — intake admits air/fuel; exhaust releases burnt gas', 'Timing belt or chain — synchronises camshaft and crankshaft rotation', 'Oil pan — reservoir at the bottom, holds 4–6 litres of engine oil', 'Oil pump — circulates oil under pressure through the engine'] },
            { type: 'h2', text: 'Symptoms of worn components' },
            { type: 'ul', items: ['Blue smoke — worn piston rings or valve seals (oil burning)', 'White smoke — coolant entering combustion (head gasket failure)', 'Knocking — pre-ignition, worn bearings, or loose components', 'Low oil pressure light — worn pump, low oil, or blocked passages', 'Ticking from top of engine — worn valvetrain or low oil'] },
            { type: 'note', text: 'Each symptom maps to a specific component. Learn the mapping and diagnosis becomes systematic — you check the most likely causes in order, not by guessing.' }
          ],
          activities: [
            { name: 'Component identification', description: 'Using an engine cutaway or service manual diagram, name every labelled part and state its function.' },
            { name: 'Symptom → Component matching', description: 'Given 5 symptoms, identify which component is most likely at fault.' }
          ],
          exercises: [
            { question: 'What is the function of the camshaft?', answer: 'It opens and closes the intake and exhaust valves at the correct time in the four-stroke cycle, synchronised to the crankshaft by the timing belt or chain.' },
            { question: 'A customer reports blue smoke from the exhaust. What are two likely causes?', answer: 'Worn piston rings (oil passing into combustion chamber) or worn valve stem seals (oil leaking down the valve guides).' },
            { question: 'Why is the timing belt critical?', answer: 'It synchronises the camshaft to the crankshaft so valves open and close at exactly the right piston positions. If it breaks or slips, pistons can hit valves — catastrophic engine damage.' }
          ],
          pastPaperQuestions: [{ year: '2023', question: 'Describe what happens if the timing belt breaks while the engine is running. (3 marks)', answer: 'The camshaft stops rotating (1). Valves stay open at wrong positions (1). Pistons strike the open valves, bending them and often cracking the head (1).' }],
          homework: ['Study a service manual diagram for any engine and label all components', 'List 5 symptoms and the components that cause them'],
          safetyNotes: ['Never work under a vehicle supported only by a jack — always use axle stands', 'Disconnect the battery before touching electrical or fuel components'],
          notes: 'This is the diagnostic foundation — every future lesson builds on knowing these components.'
        }),
        F({
          slug: 'engine-cooling', title: 'Cooling System', level: 'Beginner', duration: '45 min', status: 'complete',
          objectives: ['Explain why engines need cooling', 'Identify radiator, water pump, thermostat, hoses', 'Diagnose overheating causes', 'Understand coolant types and replacement'],
          materials: ['Service manual', 'Coolant tester', 'Basic socket set'],
          content: [
            { type: 'p', text: 'Only about 30% of the energy from burning fuel produces useful work. The rest becomes heat. Without a cooling system, an engine would destroy itself in minutes. The cooling system carries heat away from the combustion chambers and maintains the engine at its optimal operating temperature — usually 80–100°C.' },
            { type: 'h2', text: 'Main components' },
            { type: 'ul', items: ['Radiator — heat exchanger at the front of the vehicle', 'Water pump — circulates coolant through the engine and radiator', 'Thermostat — valve that opens when the engine is warm, closes when cold', 'Hoses — carry coolant between components', 'Cooling fans — pull air through the radiator at low speeds', 'Coolant reservoir — expansion tank for coolant overflow', 'Temperature sensor — feeds coolant temp to the ECU'] },
            { type: 'h2', text: 'How it works' },
            { type: 'ol', items: ['Water pump pushes coolant into the engine block', 'Coolant absorbs heat from the cylinder walls', 'Coolant flows out to the radiator', 'Air passing through the radiator fins cools the coolant', 'Coolant returns to the engine to repeat the cycle', 'The thermostat regulates flow — closed when cold for fast warmup, open when hot for maximum cooling'] },
            { type: 'h2', text: 'Overheating causes' },
            { type: 'ul', items: ['Low coolant level (leak)', 'Failed thermostat (stuck closed)', 'Failed water pump (no circulation)', 'Failed cooling fan (usually at idle)', 'Blocked radiator (debris, internal blockage)', 'Blown head gasket (combustion gases entering cooling system)'] },
            { type: 'note', text: 'Never open the radiator cap on a hot engine — pressurised hot coolant will spray and cause severe burns. Wait for it to cool completely.' }
          ],
          activities: [{ name: 'Coolant check', description: 'Inspect coolant level, colour, and concentration using a hydrometer. Note readings in a service log.' }],
          exercises: [
            { question: 'What is the function of the thermostat?', answer: 'It opens when the coolant reaches operating temperature to allow flow through the radiator, and stays closed when cold to allow the engine to warm up quickly.' },
            { question: 'A vehicle overheats when stopped at traffic lights but cools when driving. What is the most likely cause?', answer: 'Failed cooling fan. At speed, air movement through the radiator cools the engine. When stopped, the fan must pull air through — if it fails, temperature rises at idle.' },
            { question: 'Why is coolant (not water) used?', answer: 'Coolant has a higher boiling point, lower freezing point, and contains anti-corrosion additives. Pure water would boil over and corrode the cooling system.' }
          ],
          pastPaperQuestions: [{ year: '2024', question: 'Describe two causes of overheating and the test you would do to confirm each. (4 marks)', answer: 'Water pump failure — visually inspect for leaks and check belt (2). Thermostat stuck closed — remove and test in hot water; it should open (2).' }],
          homework: ['Check your own vehicle coolant level and colour', 'Locate the radiator, water pump, and thermostat in your vehicle'],
          safetyNotes: ['Never open a hot radiator cap', 'Dispose of used coolant at a recycling centre — it is toxic to animals'],
          notes: 'Overheating is one of the leading causes of engine destruction. Teaching prompt diagnosis is critical.'
        }),
        F({
          slug: 'engine-lubrication', title: 'Lubrication System', level: 'Beginner', duration: '45 min', status: 'complete',
          objectives: ['Explain why engines need oil', 'Identify oil pump, filter, galleries, pan', 'Understand oil grades (5W-30, 10W-40)', 'Diagnose low oil pressure symptoms'],
          materials: ['Service manual', 'Oil filter wrench', 'Oil drain pan'],
          content: [
            { type: 'p', text: 'Engine oil does four jobs: lubricates metal surfaces to reduce friction, cools hot components, cleans internal parts by carrying debris to the filter, and seals gaps between pistons and cylinder walls. Without proper lubrication, metal contacts metal and the engine destroys itself in minutes.' },
            { type: 'h2', text: 'Main components' },
            { type: 'ul', items: ['Oil pan — reservoir at the bottom of the engine', 'Oil pump — draws oil from the pan, pumps it under pressure through the engine', 'Oil filter — removes metal particles and debris from the oil', 'Oil galleries — drilled passages that route oil to critical components', 'Oil pressure sensor — warns when pressure drops below safe threshold', 'Oil filler cap — where new oil is added', 'Dipstick — measures oil level'] },
            { type: 'h2', text: 'Understanding oil grades' },
            { type: 'p', text: 'Oil grade like 5W-30 has two parts. The first number (5W) is the winter (cold) viscosity — lower means thinner in cold, easier to pump at startup. The second number (30) is the operating temperature viscosity — higher means thicker at 100°C. Modern engines usually specify 0W-20 or 5W-30 for fuel efficiency.' },
            { type: 'h2', text: 'Warning signs of oil problems' },
            { type: 'ul', items: ['Oil pressure light on dashboard — STOP driving immediately', 'Ticking or knocking from top of engine — low oil or worn valvetrain', 'Dark, gritty oil — overdue for change', 'Milky oil — coolant mixing (head gasket failure)', 'Oil spots under the car — leak'] },
            { type: 'note', text: 'The oil pressure light is not a suggestion — it means the engine has lost oil pressure. Every second you drive is doing damage. Pull over immediately and check the level.' }
          ],
          activities: [{ name: 'Oil check', description: 'Check oil level with a dipstick (engine cold), inspect colour, and note whether it is due for a change.' }],
          exercises: [
            { question: 'What are the four functions of engine oil?', answer: 'Lubrication (reduce friction), cooling, cleaning (carry debris to filter), and sealing (between piston rings and cylinder walls).' },
            { question: 'What does the "5W" in 5W-30 mean?', answer: 'The winter viscosity rating — a lower number means the oil flows more easily in cold temperatures, which is important for startup protection.' },
            { question: 'A customer\'s oil pressure light comes on while driving. What should they do?', answer: 'Stop driving immediately, pull over safely, and check the oil level. If it is low, add oil. If it is full, the pump or sensor may have failed — the vehicle must not be driven until checked.' }
          ],
          pastPaperQuestions: [{ year: '2023', question: 'Explain why oil pressure warning lights should not be ignored. (3 marks)', answer: 'Loss of oil pressure means metal surfaces are no longer separated by an oil film (1). Friction increases rapidly (1), causing catastrophic engine damage within minutes (1).' }],
          homework: ['Check your own vehicle\'s oil level and colour', 'Read the owner\'s manual for the recommended oil grade'],
          safetyNotes: ['Do not work under a hot engine — allow 30 minutes to cool', 'Dispose of used oil at a recycling centre — never pour it down a drain'],
          notes: 'Explain to students that most engine failures they see are preventable — oil issues are the #1 cause of premature engine destruction in older vehicles.'
        }),
        F({
          slug: 'timing-belt-chain', title: 'Timing Belt and Chain', level: 'Beginner', duration: '45 min', status: 'complete',
          objectives: ['Explain the function of the timing belt or chain', 'Distinguish interference vs non-interference engines', 'Know replacement intervals', 'Recognise warning signs of failure'],
          materials: ['Service manual', 'Timing belt kit (if available)', 'Timing light (if available)'],
          content: [
            { type: 'p', text: 'The timing belt (or chain) synchronises the camshaft with the crankshaft. Every rotation of the crankshaft must correspond to the correct valve opening — half speed for a four-stroke engine. If the timing is even one tooth off, the engine runs poorly. If the belt breaks, the engine may be destroyed instantly.' },
            { type: 'h2', text: 'Belt vs chain' },
            { type: 'ul', items: ['Timing belt — rubber/fabric construction, quieter, requires replacement every 60,000–100,000 km', 'Timing chain — metal links, longer life (often 200,000+ km), noisier, rarely replaced unless worn', 'Interference engine — valves and pistons occupy the same space at different times. If the belt breaks, pistons hit valves → bent valves, cracked head, potentially destroyed engine', 'Non-interference engine — valves and pistons never occupy the same space. If the belt breaks, engine simply stops'] },
            { type: 'h2', text: 'Replacement intervals (rule of thumb)' },
            { type: 'ul', items: ['Timing belt: 60,000–100,000 km or every 5–7 years', 'Always replace with water pump and tensioner together (labor is the same)', 'Timing chain: usually not replaced unless worn, but check the tensioner'] },
            { type: 'h2', text: 'Warning signs before failure' },
            { type: 'ul', items: ['Squeaking or chirping from the belt area', 'Visible cracks, fraying, or glazing on the belt', 'Rough idle or misfiring (late timing)', 'Oil leaks near the timing cover (weakens rubber belt)'] },
            { type: 'note', text: 'Never skip a timing belt replacement. The cost of the belt is $100–200; the cost of a broken belt in an interference engine is $2,000+ — often the entire engine.' }
          ],
          activities: [{ name: 'Timing belt inspection', description: 'On a practice engine (or diagram), locate the timing belt and inspect for cracks, glazing, or oil contamination.' }],
          exercises: [
            { question: 'What is the function of the timing belt or chain?', answer: 'It synchronises the camshaft to the crankshaft so the intake and exhaust valves open and close at exactly the right positions in the four-stroke cycle.' },
            { question: 'What is an interference engine?', answer: 'An engine where the valves and pistons occupy the same space at different times. If the timing belt breaks, the pistons strike the open valves — causing catastrophic damage (bent valves, cracked head, possibly destroyed engine).' },
            { question: 'Should a timing belt be replaced alone or with other parts?', answer: 'Always with the water pump and tensioner. The labor is identical whether you replace one or all three, so doing all three together is standard practice and saves money long-term.' }
          ],
          pastPaperQuestions: [{ year: '2022', question: 'A vehicle has 95,000 km on the odometer and the manufacturer recommends a timing belt change at 100,000 km. Explain why the owner should not delay. (3 marks)', answer: 'The belt is near end of life (1). If it fails, the engine may be destroyed (interference engine) (1), costing thousands instead of a few hundred (1).' }],
          homework: ['Check the owner manual for your vehicle\'s timing belt interval', 'Watch a timing belt replacement video on YouTube'],
          safetyNotes: ['Never turn the engine over by hand without first checking timing marks', 'Disconnect the battery before starting belt work'],
          notes: 'The most common cause of catastrophic engine failure in older cars. Emphasise the "preventable" nature of this failure to students.'
        })
      ]},
      { name: 'Module 2 — Routine Service', lessons: [
        F({
          slug: 'engine-oil-change', title: 'Engine Oil and Filter Change', level: 'Beginner', duration: '45 min', status: 'complete',
          objectives: ['Perform an oil and filter change safely', 'Identify the drain plug, oil filter, and fill cap', 'Understand oil grades and when to change', 'Dispose of used oil correctly'],
          materials: ['Socket set', 'Oil filter wrench', 'Drain pan', 'Funnel', 'New oil filter', 'Correct oil grade for the vehicle', 'Torque wrench', 'Gloves', 'Safety glasses'],
          content: [
            { type: 'svg', svg: '<img src="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTE1NjAyfDB8MXxzZWFyY2h8MXx8bWVjaGFuaWMlMjBvaWwlMjBjaGFuZ2V8ZW58MXwwfHx8MTc5MzE0MTY0Mnww&ixlib=rb-4.1.0&q=80&w=1080" alt="man refilling motor oil on car engine bay" style="max-width:100%;border-radius:10px" />', caption: 'man refilling motor oil on car engine bay (Photo: Tim Mossholder / Unsplash)' }, { type: 'p', text: 'An oil change is the most common routine service. It is simple, cheap, and one of the most important things that extends engine life. Fresh oil lubricates, cools, and cleans the engine internals. Old oil breaks down, becomes contaminated, and accelerates wear.' },
            { type: 'h2', text: 'How often?' },
            { type: 'p', text: 'Follow the manufacturer\'s interval in the service manual — typically 5,000–10,000 km for conventional oil, or 10,000–15,000 km for full synthetic. In dusty or hot conditions (common in Uganda and East Africa), use the shorter end of the range.' },
            { type: 'h2', text: 'Step-by-step procedure' },
            { type: 'ol', items: [
              'Warm the engine for 3–5 minutes (warm oil drains more completely and carries more contaminants out). Then switch off and let it cool for 5 min.',
              'Park on a level surface and apply the handbrake.',
              'Raise the vehicle safely on stands (not just a jack). Never go under a jacked vehicle.',
              'Place a drain pan under the drain plug.',
              'Unscrew the drain plug. Allow the oil to drain completely — usually 5–10 minutes.',
              'Replace the drain plug washer if needed. Screw the plug back and torque to specification (typically 25–35 Nm).',
              'Move the drain pan under the oil filter. Remove the filter using the filter wrench.',
              'Wipe the filter mounting surface clean. Apply a film of new oil to the new filter\'s rubber seal.',
              'Screw the new filter on by hand until it touches, then a further 3/4 turn. Do NOT overtighten.',
              'Remove the oil fill cap on top of the engine. Add the correct quantity and grade of oil using a funnel.',
              'Check the level with the dipstick. Should read between MIN and MAX.',
              'Run the engine for 1 minute. Check for leaks at the drain plug and filter.',
              'Switch off. Wait 2 minutes. Recheck the dipstick. Top up if needed.',
              'Record the date and mileage on a sticker under the bonnet.'
            ]},
            { type: 'note', text: 'Safety: Never dispose of used oil by pouring it down the drain or into the ground. Take it to a recycling centre. Used oil contains heavy metals and is toxic.' }
          ],
          activities: [
            { name: 'Supervised oil change', description: 'Perform a complete oil and filter change on a practice vehicle under supervision. The instructor checks each step before moving to the next.' }
          ],
          exercises: [
            { question: '1. Why should the engine be warm before draining oil?', answer: 'Warm oil flows more completely and carries suspended contaminants out with it. Cold oil drains slowly and leaves residue.' },
            { question: '2. How do you know the correct oil grade for a vehicle?', answer: 'Check the service manual, oil filler cap, or owner\'s handbook. It will specify a grade such as 5W-30 or 10W-40.' },
            { question: '3. What could happen if the oil filter is overtightened?', answer: 'The rubber seal can distort or the filter becomes very difficult to remove next time. Hand-tighten plus 3/4 turn is correct.' },
            { question: '4. Why is it important to run the engine for 1 minute after filling?', answer: 'To circulate oil through the filter and passages, pressurise the system, and check for leaks at the drain plug and filter.' }
          ],
          homework: ['Perform or assist with an oil change on a real vehicle', 'Record the service date and mileage for future reference'],
          safetyNotes: ['Never go under a vehicle supported only by a jack — always use stands', 'Wear gloves — used oil can irritate skin', 'Dispose of used oil at a recycling centre', 'Ensure the engine is warm but not hot — 40-50°C ideal'],
          notes: 'Insist on the stands rule. Many injuries come from vehicles slipping off jacks. It is a habit worth drilling into every student.'
        }),
        S('air-filter-change', 'Air Filter Change'),
        S('spark-plug-service', 'Spark Plug Service'),
        S('coolant-flush', 'Coolant Flush')
      ]},
      { name: 'Module 3 — Brakes and Suspension', lessons: [
        F({
          slug: 'brake-system-basics', title: 'Brake System Basics', level: 'Certificate', duration: '60 min', status: 'complete',
          objectives: ['Identify disc and drum brake components', 'Explain how hydraulic pressure applies brakes', 'Inspect brake pads, discs, and fluid', 'Recognise safety-critical symptoms'],
          materials: ['Brake caliper set for practice', 'Brake pads (new and worn samples)', 'Brake fluid', 'Torque wrench', 'Brake cleaner spray'],
          content: [
            { type: 'svg', svg: '<img src="https://images.unsplash.com/photo-1613214150384-14921ff659b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTE1NjAyfDB8MXxzZWFyY2h8MXx8Y2FyJTIwYnJha2UlMjBkaXNjJTIwcm90b3J8ZW58MXwwfHx8MTc5MzE0MTY5OHww&ixlib=rb-4.1.0&q=80&w=1080" alt="white and silver round device" style="max-width:100%;border-radius:10px" />', caption: 'white and silver round device (Photo: Benjamin Brunner / Unsplash)' }, { type: 'p', text: 'Brakes are the most safety-critical system on any vehicle. A modern passenger car uses hydraulic pressure generated at the brake pedal to squeeze brake pads against rotating discs (or shoes against drums). Understanding the system is essential — a brake failure is a life-or-death event.' },
            { type: 'h2', text: 'How the hydraulic system works' },
            { type: 'ol', items: [
              'Driver presses the brake pedal.',
              'The pedal operates a master cylinder, pressurising the brake fluid.',
              'Fluid travels through brake lines to the wheels.',
              'At each wheel, the pressure operates a caliper piston (or wheel cylinder).',
              'The piston pushes the brake pads against the spinning disc.',
              'Friction slows the disc, which slows the wheel, which slows the vehicle.'
            ]},
            { type: 'svg', caption: 'Disc brake system: hydraulic fluid pushes the piston, which presses the pad against the spinning disc.', svg: '<svg viewBox="0 0 480 240" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto"><circle cx="160" cy="120" r="90" fill="#e5e7eb" stroke="#333" stroke-width="2.5"/><circle cx="160" cy="120" r="30" fill="#9ca3af" stroke="#333" stroke-width="2"/><text x="160" y="124" text-anchor="middle" font-size="10" fill="#333">hub</text><rect x="255" y="60" width="40" height="120" rx="6" fill="#1a73e8" stroke="#1e40af" stroke-width="2"/><text x="275" y="124" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff" transform="rotate(-90 275 124)">CALIPER</text><rect x="240" y="65" width="15" height="110" fill="#dc2626" stroke="#991b1b" stroke-width="1.5"/><text x="247" y="200" text-anchor="middle" font-size="10" fill="#dc2626">pad</text><text x="380" y="100" text-anchor="middle" font-size="11">Brake fluid</text><line x1="360" y1="105" x2="310" y2="120" stroke="#1a73e8" stroke-width="2" marker-end="url(#b)"/><defs><marker id="b" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#1a73e8"/></marker></defs><text x="240" y="230" text-anchor="middle" font-size="11">Spinning disc (rotor)</text></svg>' },
            { type: 'h2', text: 'Disc vs drum brakes' },
            { type: 'ul', items: ['Disc brakes — an exposed disc with pads. Better cooling, easier inspection, most modern cars use them on all four wheels.', 'Drum brakes — a drum enclosing brake shoes. Cheaper, still common on rear wheels of smaller cars. Harder to inspect.' ]},
            { type: 'h2', text: 'Inspection points' },
            { type: 'ul', items: [
              'Pad thickness — replace when under 2 mm (new pads are typically 10–12 mm).',
              'Disc thickness and surface — scoring, deep grooves, or blue heat spots are warning signs.',
              'Brake fluid level — low fluid may mean a leak or worn pads.',
              'Brake fluid colour — dark fluid is contaminated and should be replaced every 2 years.',
              'Rubber hoses — check for cracks, bulges, or leaks.'
            ]},
            { type: 'note', text: 'Safety: Any brake work is safety-critical. When in doubt, replace. Never refit a component you are not sure about. Always test drive at low speed in a safe area before returning a vehicle.' }
          ],
          activities: [
            { name: 'Brake inspection (25 min)', description: 'Jack up a practice vehicle (on stands). Remove a wheel. Measure pad thickness with a caliper. Inspect disc surface. Check fluid level. Document findings.' }
          ],
          exercises: [
            { question: '1. What generates the pressure that applies the brakes?', answer: 'The master cylinder, operated by the brake pedal, pressurises the hydraulic brake fluid.' },
            { question: '2. Minimum safe pad thickness?', answer: '2 mm. Replace below this. New pads are 10–12 mm.' },
            { question: '3. Why change brake fluid every 2 years?', answer: 'Brake fluid is hygroscopic — it absorbs water over time. Water in brake fluid boils under hard braking, causing loss of braking (vapour lock).' },
            { question: '4. A customer says the pedal feels soft and sinks to the floor. What is your first diagnostic?', answer: 'Check brake fluid level first. A soft, sinking pedal usually means low fluid (a leak) or air in the hydraulic system.' }
          ],
          homework: ['Inspect a real vehicle\'s brake pads and report the thickness', 'Study a service manual for a brake job on one specific model'],
          safetyNotes: ['Always use axle stands — never work under a jack', 'Wear gloves and eye protection — brake dust can be hazardous', 'Do not breathe brake dust — use a spray brake cleaner', 'Test drive at low speed after any brake work'],
          notes: 'The "in doubt, replace" rule is non-negotiable in brakes. A student who learns that rule early will be a safe mechanic for life.'
        }),
        S('brake-pad-replacement', 'Brake Pad Replacement'),
        S('brake-fluid-bleeding', 'Brake Fluid Bleeding'),
        S('suspension-shock-absorbers', 'Suspension and Shock Absorbers')
      ]},
      { name: 'Module 4 — Electrical and Diagnostics', lessons: [
        S('car-battery-service', 'Car Battery Service'),
        S('alternator-starter', 'Alternator and Starter Motor'),
        S('obd-diagnostics', 'OBD-II Diagnostics'),
        S('multimeter-use', 'Using a Multimeter'),
        S('wiring-diagrams', 'Reading Wiring Diagrams')
      ]},
      { name: 'Module 5 — Transmission and Drivetrain', lessons: [
        S('manual-transmission', 'Manual Transmission Basics'),
        S('automatic-transmission', 'Automatic Transmission Basics'),
        S('clutch-replacement', 'Clutch Replacement'),
        S('differential-driveshaft', 'Differential and Driveshaft')
      ]}
    ]
  },
  // ============ ELECTRICAL INSTALLATION ============
  {
    slug: 'electrical-installation', title: 'Electrical Installation', tagline: 'Wiring, sockets, lighting, and safety.', icon: '⚡', category: 'Trades',
    modules: [
      { name: 'Module 1 — Fundamentals', lessons: [
        S('electrical-safety', 'Electrical Safety Fundamentals', 'Beginner'),
        S('ohms-law', 'Ohm\'s Law and Basic Circuits', 'Beginner'),
        S('wiring-colours', 'Wiring Colour Codes', 'Beginner'),
        S('tools-of-trade', 'Electrical Tools of the Trade', 'Beginner')
      ]},
      { name: 'Module 2 — Installation', lessons: [
        S('lighting-circuits', 'Lighting Circuits', 'Certificate'),
        S('socket-outlets', 'Socket Outlets and Ring Mains', 'Certificate'),
        S('consumer-unit', 'Consumer Unit and Distribution Board', 'Certificate'),
        S('earthing-bonding', 'Earthing and Bonding', 'Certificate')
      ]},
      { name: 'Module 3 — Advanced', lessons: [
        S('three-phase', 'Three-Phase Power', 'Diploma'),
        S('motor-control', 'Motor Control Circuits', 'Diploma'),
        S('solar-installation', 'Solar PV Installation', 'Diploma'),
        S('fault-finding', 'Fault Finding and Testing', 'Diploma')
      ]}
    ]
  },
  // ============ PLUMBING ============
  {
    slug: 'plumbing', title: 'Plumbing', tagline: 'Water supply, drainage, and pipe systems.', icon: '🚿', category: 'Trades',
    modules: [
      { name: 'Module 1 — Fundamentals', lessons: [
        S('plumbing-safety', 'Plumbing Safety and Tools', 'Beginner'),
        S('pipe-types', 'Pipe Types and Materials', 'Beginner'),
        S('pipe-joints', 'Pipe Joints and Fittings', 'Beginner'),
        S('water-pressure', 'Water Pressure and Flow', 'Beginner')
      ]},
      { name: 'Module 2 — Installation', lessons: [
        S('water-supply-system', 'Water Supply System Design', 'Certificate'),
        S('drainage-system', 'Drainage and Waste Systems', 'Certificate'),
        S('toilet-installation', 'Toilet Installation and Repair', 'Certificate'),
        S('sink-taps', 'Sinks and Taps', 'Certificate')
      ]},
      { name: 'Module 3 — Advanced', lessons: [
        S('water-heater', 'Water Heater Installation', 'Diploma'),
        S('pump-installation', 'Pump Installation', 'Diploma'),
        S('rainwater-harvesting', 'Rainwater Harvesting', 'Diploma')
      ]}
    ]
  },
  // ============ WELDING ============
  {
    slug: 'welding', title: 'Welding and Metalwork', tagline: 'Arc, MIG, TIG, and metal fabrication.', icon: '🔥', category: 'Trades',
    modules: [
      { name: 'Module 1 — Fundamentals', lessons: [
        S('welding-safety', 'Welding Safety and PPE', 'Beginner'),
        S('welding-types', 'Types of Welding', 'Beginner'),
        S('welding-tools', 'Welding Tools and Equipment', 'Beginner'),
        S('metal-types', 'Common Metal Types', 'Beginner')
      ]},
      { name: 'Module 2 — Techniques', lessons: [
        S('arc-welding', 'Arc Welding (Stick)', 'Certificate'),
        S('mig-welding', 'MIG Welding', 'Certificate'),
        S('tig-welding', 'TIG Welding', 'Certificate'),
        S('grinding-finishing', 'Grinding and Finishing', 'Certificate')
      ]},
      { name: 'Module 3 — Fabrication', lessons: [
        S('metal-cutting', 'Metal Cutting', 'Diploma'),
        S('metal-bending', 'Metal Bending and Forming', 'Diploma'),
        S('welding-inspection', 'Weld Inspection and Quality', 'Diploma'),
        S('fabrication-project', 'Fabrication Project', 'Diploma')
      ]}
    ]
  },
  // ============ CARPENTRY ============
  {
    slug: 'carpentry', title: 'Carpentry and Woodwork', tagline: 'Furniture, joinery, and construction.', icon: '🪵', category: 'Trades',
    modules: [
      { name: 'Module 1 — Fundamentals', lessons: [
        S('carpentry-safety', 'Carpentry Safety and PPE', 'Beginner'),
        S('wood-types', 'Types of Wood and Their Uses', 'Beginner'),
        S('carpentry-tools', 'Carpentry Hand Tools', 'Beginner'),
        S('power-tools', 'Power Tools', 'Beginner')
      ]},
      { name: 'Module 2 — Techniques', lessons: [
        S('measuring-marking', 'Measuring and Marking', 'Certificate'),
        S('sawing', 'Sawing Techniques', 'Certificate'),
        S('joining-wood', 'Joining Wood — Joints', 'Certificate'),
        S('sanding-finishing', 'Sanding and Finishing', 'Certificate')
      ]},
      { name: 'Module 3 — Projects', lessons: [
        S('furniture-building', 'Building Simple Furniture', 'Diploma'),
        S('cabinet-making', 'Cabinet Making', 'Diploma'),
        S('roof-framing', 'Roof Framing Basics', 'Diploma'),
        S('door-frames', 'Door and Window Frames', 'Diploma')
      ]}
    ]
  },
  // ============ TAILORING ============
  {
    slug: 'tailoring', title: 'Tailoring and Fashion', tagline: 'Sewing, pattern making, and garment construction.', icon: '✂️', category: 'Trades',
    modules: [
      { name: 'Module 1 — Fundamentals', lessons: [
        S('sewing-machine', 'Sewing Machine Basics', 'Beginner'),
        S('fabrics', 'Fabrics and Their Uses', 'Beginner'),
        S('sewing-tools', 'Sewing Tools and Accessories', 'Beginner'),
        S('stitch-types', 'Stitch Types', 'Beginner')
      ]},
      { name: 'Module 2 — Garment Making', lessons: [
        S('taking-measurements', 'Taking Measurements', 'Certificate'),
        S('pattern-making', 'Basic Pattern Making', 'Certificate'),
        S('cutting-fabric', 'Cutting Fabric', 'Certificate'),
        S('sewing-basics', 'Sewing Basics', 'Certificate')
      ]},
      { name: 'Module 3 — Advanced', lessons: [
        S('skirt-dress', 'Making a Skirt or Dress', 'Diploma'),
        S('shirt-trousers', 'Making Shirts and Trousers', 'Diploma'),
        S('embroidery', 'Embroidery and Decoration', 'Diploma'),
        S('tailoring-business', 'Running a Tailoring Business', 'Diploma')
      ]}
    ]
  },
  // ============ HAIRDRESSING ============
  {
    slug: 'hairdressing', title: 'Hairdressing and Beauty', tagline: 'Cutting, styling, and beauty treatments.', icon: '💇', category: 'Trades',
    modules: [
      { name: 'Module 1 — Fundamentals', lessons: [
        S('hairdressing-safety', 'Hairdressing Safety and Hygiene', 'Beginner'),
        S('hair-types', 'Hair Types and Structure', 'Beginner'),
        S('hairdressing-tools', 'Hairdressing Tools', 'Beginner'),
        S('hair-washing', 'Hair Washing and Conditioning', 'Beginner')
      ]},
      { name: 'Module 2 — Techniques', lessons: [
        S('hair-cutting', 'Hair Cutting Techniques', 'Certificate'),
        S('hair-styling', 'Hair Styling and Blow Dry', 'Certificate'),
        S('hair-colouring', 'Hair Colouring', 'Certificate'),
        S('braiding-plaiting', 'Braiding and Plaiting', 'Certificate')
      ]},
      { name: 'Module 3 — Business', lessons: [
        S('salon-management', 'Running a Salon', 'Diploma'),
        S('customer-service', 'Customer Service', 'Diploma'),
        S('pricing-services', 'Pricing Your Services', 'Diploma')
      ]}
    ]
  },
  // ============ CATERING ============
  {
    slug: 'catering', title: 'Catering and Hospitality', tagline: 'Cooking, food safety, and hospitality.', icon: '🍳', category: 'Trades',
    modules: [
      { name: 'Module 1 — Fundamentals', lessons: [
        S('food-safety', 'Food Safety and Hygiene', 'Beginner'),
        S('kitchen-tools', 'Kitchen Tools and Equipment', 'Beginner'),
        S('food-storage', 'Food Storage and Preservation', 'Beginner'),
        S('knife-skills', 'Basic Knife Skills', 'Beginner')
      ]},
      { name: 'Module 2 — Cooking', lessons: [
        S('cooking-methods', 'Cooking Methods', 'Certificate'),
        S('meal-planning', 'Meal Planning and Nutrition', 'Certificate'),
        S('baking-basics', 'Baking Basics', 'Certificate'),
        S('local-cuisine', 'East African Cuisine', 'Certificate')
      ]},
      { name: 'Module 3 — Business', lessons: [
        S('restaurant-management', 'Restaurant Management', 'Diploma'),
        S('catering-events', 'Event Catering', 'Diploma'),
        S('cost-control', 'Food Cost Control', 'Diploma')
      ]}
    ]
  },
  // ============ CONSTRUCTION ============
  {
    slug: 'construction', title: 'Construction and Masonry', tagline: 'Bricklaying, concrete, and building.', icon: '🧱', category: 'Trades',
    modules: [
      { name: 'Module 1 — Fundamentals', lessons: [
        S('construction-safety', 'Construction Site Safety', 'Beginner'),
        S('building-materials', 'Building Materials', 'Beginner'),
        S('construction-tools', 'Construction Tools', 'Beginner'),
        S('reading-plans', 'Reading Building Plans', 'Beginner')
      ]},
      { name: 'Module 2 — Masonry', lessons: [
        S('bricklaying', 'Bricklaying Techniques', 'Certificate'),
        S('mortar-mixing', 'Mortar and Concrete Mixing', 'Certificate'),
        S('wall-construction', 'Wall Construction', 'Certificate'),
        S('plastering', 'Plastering and Rendering', 'Certificate')
      ]},
      { name: 'Module 3 — Advanced', lessons: [
        S('foundations', 'Foundations', 'Diploma'),
        S('roofing', 'Roofing Basics', 'Diploma'),
        S('tiling', 'Tiling Floors and Walls', 'Diploma')
      ]}
    ]
  }
]

export function getVocSubject(slug: string) { return vocSubjects.find((s) => s.slug === slug) }
export function getVocLesson(subjectSlug: string, lessonSlug: string) {
  const subject = getVocSubject(subjectSlug)
  if (!subject) return undefined
  for (const mod of subject.modules) {
    const lesson = mod.lessons.find((l) => l.slug === lessonSlug)
    if (lesson) return { lesson, module: mod.name }
  }
  return undefined
}


