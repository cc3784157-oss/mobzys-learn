export type RepairImage = { url: string; alt: string; caption?: string }
export type RepairStep = { text: string; image?: RepairImage; tip?: string }
export type RepairTool = { name: string; note?: string }
export type RepairCategory = 'Phone' | 'Laptop' | 'PC' | 'Radio' | 'Keyboard' | 'Audio' | 'TV' | 'Accessory' | 'Console'

export type RepairGuide = {
  slug: string
  title: string
  category: RepairCategory
  difficulty: 'Easy' | 'Medium' | 'Hard'
  time: string
  tools: RepairTool[]
  summary: string
  intro: string
  warnings?: string[]
  steps: RepairStep[]
  troubleshooting: { problem: string; fix: string }[]
  faqs: { q: string; a: string }[]
  related?: string[]
}

export const repairGuides: RepairGuide[] = [
  // ============ PHONES ============
  { slug:'replace-phone-screen', heroImage: { url: 'https://images.unsplash.com/photo-1611396000732-f8c9a933424f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTE1NjAyfDB8MXxzZWFyY2h8MXx8cGhvbmUlMjByZXBhaXIlMjBzY3Jld2RyaXZlcnxlbnwxfDB8fHwxNzkzMTQxNzM2fDA&ixlib=rb-4.1.0&q=80&w=1080', alt: 'black and white electronic devices' }, title:'Replace a Phone Screen', category:'Phone', difficulty:'Hard', time:'1–2 hours',
    tools:[{name:'New screen assembly (match model)'},{name:'Heat gun or hairdryer'},{name:'Suction cup'},{name:'Plastic pry tool'},{name:'Adhesive strips'},{name:'Precision screwdrivers'}],
    summary:'Full teardown and screen replacement for modern phones.',
    intro:'A cracked phone screen is the most common smartphone repair. On modern phones the screen is glued with strong adhesive — heat the edges, pry gently, and always disconnect the battery before the screen cable.',
    warnings:['Heating the screen also heats the battery. Stop if you smell a sweet chemical scent.','Disconnect the battery before the screen, never the reverse.'],
    steps:[{text:'Power off. Remove SIM tray.'},{text:'Back up data if the screen responds.'},{text:'Heat screen edges 2–3 minutes.'},{text:'Apply suction cup. Pull gently to create a gap.'},{text:'Insert pry tool. Slide around the edges, reheating as needed.',tip:'Never use metal tools — they scratch the frame.'},{text:'Lift screen like a book from the bottom. Do not fully remove — flex cables attach it.'},{text:'Remove screws over screen connectors.'},{text:'Disconnect battery first, then screen.',tip:'Pull connectors with a spudger, never by wires.'},{text:'Fully remove old screen. Scrape residual adhesive with plastic tool.'},{text:'Test new screen: connect cable, then battery. Verify touch.'},{text:'If working, disconnect battery again. Peel adhesive, press screen into place.'},{text:'Reconnect battery, reinstall shields. Cure adhesive 1 hour.'}],
    troubleshooting:[{problem:'Touch not working',fix:'Screen flex cable loose or damaged. Reseat. If still failing, screen is defective.'},{problem:'Flickering screen',fix:'Flex cable pinched under frame. Remove and verify not folded.'},{problem:'Phone won’t turn on',fix:'Battery connector unseated. Reseat. Charge for 30 min before testing.'}],
    faqs:[{q:'Do I need a heat gun?',a:'A hairdryer works but is slower. An iOpener heat pack is ideal.'},{q:'Can I skip the battery disconnect?',a:'No. Reverse order can destroy the display IC.'},{q:'Where to buy a screen?',a:'iFixit, InjuredGadgets, or Amazon Renewed. Avoid cheapest eBay screens.'}],
    related:['replace-phone-battery','clean-phone-charging-port'] },

  { slug:'replace-phone-battery', heroImage: { url: 'https://images.unsplash.com/photo-1512439408685-2e399291a4e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTE1NjAyfDB8MXxzZWFyY2h8MXx8cGhvbmUlMjBiYXR0ZXJ5JTIwdG9vbHN8ZW58MXwwfHx8MTc5MzE0MTcwNHww&ixlib=rb-4.1.0&q=80&w=1080', alt: 'black smartphone' }, title:'Replace a Phone Battery', category:'Phone', difficulty:'Medium', time:'30–60 min',
    tools:[{name:'Replacement battery (match model)'},{name:'Heat gun'},{name:'Suction cup'},{name:'Plastic pry tool'},{name:'Isopropyl alcohol 99%'},{name:'Adhesive strips'}],
    summary:'Replace a swollen, worn-out, or fast-draining phone battery.',
    intro:'Batteries degrade over 2–4 years. Symptoms: fast drain, shutdowns at 20–30%, or a swollen back cover. A swollen battery is a fire hazard — stop using the phone immediately.',
    warnings:['A swollen battery is dangerous — store it on concrete until replaced.','Never puncture a lithium battery.'],
    steps:[{text:'Power off. Discharge to below 25% before working.'},{text:'Heat edges to soften adhesive.'},{text:'Pry off back cover (or screen, depending on model).'},{text:'Remove battery shield screws. Lift shield.'},{text:'Disconnect battery flex.'},{text:'Apply isopropyl alcohol around battery edges. Wait 1 minute.'},{text:'Slide pry tool under battery. Lever out — never use metal.'},{text:'Place new battery. Apply adhesive strips if needed.'},{text:'Reconnect battery. Click into place.'},{text:'Reassemble. Charge to 100%, drain to 5%, charge again to calibrate.'}],
    troubleshooting:[{problem:'Not charging',fix:'Battery flex unseated. Reseat. If still failing, battery defective.'},{problem:'Wrong percentage shown',fix:'Calibrate: full charge, drain to 5%, charge again.'}],
    faqs:[{q:'How do I know it is swollen?',a:'Back cover bulges or screen lifts at edges. Stop using immediately.'},{q:'Can I use non-OEM?',a:'Yes, but quality varies. Stick with iFixit or InjuredGadgets.'}],
    related:['replace-phone-screen'] },

  { slug:'clean-phone-charging-port', heroImage: { url: 'https://images.unsplash.com/photo-1557767382-97b28f5488e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTE1NjAyfDB8MXxzZWFyY2h8MXx8cGhvbmUlMjBjaGFyZ2luZyUyMGNhYmxlJTIwY2xvc2V1cHxlbnwxfDB8fHwxNzkzMTQxNjg0fDA&ixlib=rb-4.1.0&q=80&w=1080', alt: 'black smartphone with charger cord connected' }, title:'Clean a Phone Charging Port', category:'Phone', difficulty:'Easy', time:'5–10 min',
    tools:[{name:'Wooden toothpick'},{name:'Compressed air'},{name:'Isopropyl alcohol 99%'},{name:'Flashlight'}],
    summary:'Fix slow charging or loose cables by removing lint from the port.',
    intro:'If charging only works at certain angles or the cable feels loose, lint has compacted into the port. Five minutes fixes it. Never use metal — bending the pins destroys the phone.',
    warnings:['Never insert metal into a charging port.','Use short bursts of compressed air at an angle — not directly into the port.'],
    steps:[{text:'Power off. Unplug everything.'},{text:'Shine a bright light into the port.'},{text:'Insert wooden toothpick at an angle. Gently scrape lint out.'},{text:'Blow short bursts of air at 45°.'},{text:'If residue remains, dip toothpick in alcohol and clean.'},{text:'Reinsert cable — should click firmly.'}],
    troubleshooting:[{problem:'Cable still loose',fix:'Port pins bent. Requires port replacement.'},{problem:'Still not charging',fix:'Try a different cable and charger first.'}],
    faqs:[{q:'Can I use a paperclip?',a:'No. Metal bends the pins.'},{q:'How often to clean?',a:'Every 6–12 months.'}],
    related:['replace-phone-battery'] },

  { slug:'replace-phone-camera', heroImage: { url: 'https://images.unsplash.com/photo-1533746228171-962520811097?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTE1NjAyfDB8MXxzZWFyY2h8MXx8c21hcnRwaG9uZSUyMGNhbWVyYSUyMGxlbnMlMjBtYWNyb3xlbnwxfDB8fHwxNzkzMTQxNzExfDA&ixlib=rb-4.1.0&q=80&w=1080', alt: 'a close up of a lens with a blurry background' }, title:'Replace a Phone Camera', category:'Phone', difficulty:'Medium', time:'30–60 min',
    tools:[{name:'Replacement camera module'},{name:'Heat gun'},{name:'Precision screwdrivers'},{name:'Pry tool'},{name:'Tweezers'}],
    summary:'Replace a cracked or blurry phone camera module.',
    intro:'Cameras fail from cracked glass, cracked lens, or a failed module. Replacement is modular — the camera connects via a small flex cable. Handle the new lens by the edges only.',
    warnings:['Do not touch the new camera lens with fingers — oils permanently degrade quality.'],
    steps:[{text:'Power off. Remove SIM tray.'},{text:'Heat back cover to soften adhesive.'},{text:'Pry off back cover.'},{text:'Locate camera module.'},{text:'Disconnect battery first, then camera flex.'},{text:'Remove screws holding camera module.'},{text:'Lift old camera out by the edges.'},{text:'Place new camera. Screw in. Reconnect flex, then battery.'},{text:'Reassemble. Test with camera app.'}],
    troubleshooting:[{problem:'Camera app crashes',fix:'Flex not seated. Reseat.'},{problem:'Blurry photos',fix:'Lens smudge. Clean with lint-free cloth + alcohol.'}],
    faqs:[{q:'Just replace the glass?',a:'Model-specific. Check iFixit for your phone.'},{q:'Will new camera match original?',a:'Only if OEM. Aftermarket often has worse low-light quality.'}],
    related:['replace-phone-screen'] },

  // ============ LAPTOPS ============
  { slug:'replace-laptop-battery', heroImage: { url: 'https://images.unsplash.com/photo-1581621293775-7aac902d7032?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTE1NjAyfDB8MXxzZWFyY2h8MXx8bGFwdG9wJTIwcmVwYWlyJTIwc2NyZXdkcml2ZXJ8ZW58MXwwfHx8MTc5MzE0MTY3NHww&ixlib=rb-4.1.0&q=80&w=1080', alt: 'person holding red and silver screw driver' }, title:'Replace a Laptop Battery', category:'Laptop', difficulty:'Easy', time:'20–30 min',
    tools:[{name:'Replacement battery (match model)'},{name:'Phillips screwdriver'},{name:'Plastic pry tool'},{name:'Small cup for screws'}],
    summary:'Safely replace a swollen, dead, or short-lived laptop battery.',
    intro:'Symptoms of a failing battery: laptop shuts down when unplugged, or the bottom bulges outward. A swollen battery is a fire hazard — stop using the laptop.',
    warnings:['A swollen laptop battery is a fire hazard. Place it on concrete until replaced.'],
    steps:[{text:'Back up important files to cloud or external drive.'},{text:'Shut down. Hold power button 10s. Unplug charger.'},{text:'Remove bottom cover screws into a cup.'},{text:'Pry up the bottom cover around the edges.'},{text:'Locate the battery — large block with a cable.'},{text:'Disconnect the battery connector — pull the plastic, not the wires.'},{text:'Unscrew battery. Lift out.'},{text:'Place new battery. Screw in. Reconnect until click.'},{text:'Replace cover. Press edges. Screw in.'},{text:'Plug in. Verify charging. Charge to 100% before first use.'}],
    troubleshooting:[{problem:'Battery not detected',fix:'Connector not fully seated. Reseat until click.'},{problem:'Laptop won’t turn on',fix:'Battery cable unseated or a screw fell inside.'},{problem:'Drains fast',fix:'Calibrate: full charge, drain to 0%, charge to 100% again.'}],
    faqs:[{q:'How to find the correct battery?',a:'Search "[model] OEM battery". Match voltage and mAh exactly.'},{q:'Voids warranty?',a:'May void the battery warranty. Check your terms.'}],
    related:['clean-laptop-fan','fix-laptop-charging-port'] },

  { slug:'clean-laptop-fan', heroImage: { url: 'https://images.unsplash.com/photo-1769085795297-b45cc8c92f5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTE1NjAyfDB8MXxzZWFyY2h8MXx8bGFwdG9wJTIwaW50ZXJuYWwlMjBmYW58ZW58MXwwfHx8MTc5MzE0MTczM3ww&ixlib=rb-4.1.0&q=80&w=1080', alt: 'Close-up of a computer fan and circuit board' }, title:'Clean a Laptop Fan', category:'Laptop', difficulty:'Easy', time:'15–25 min',
    tools:[{name:'Phillips screwdriver'},{name:'Compressed air'},{name:'Soft brush'},{name:'Thermal paste (if repasting)'}],
    summary:'Reduce overheating and fan noise by clearing dust.',
    intro:'Dust clogs the fan and heatsink over time, causing overheating, loud noise, and thermal throttling. Cleaning is the highest-value maintenance task.',
    warnings:['Never spin fan blades with air — they generate voltage and can damage the motherboard.','Do not use a vacuum — static destroys components.'],
    steps:[{text:'Shut down. Unplug.'},{text:'Remove bottom cover screws. Pry up cover.'},{text:'Locate fan near the copper heatsink.'},{text:'Hold the fan blade with one finger.'},{text:'Spray compressed air in short bursts at fan and fins.',tip:'Hold the can upright so it does not spray liquid.'},{text:'Brush loose dust from blades and vents.'},{text:'Reinstall cover. Turn on. Listen for quieter fan.'}],
    troubleshooting:[{problem:'Still loud',fix:'Fan bearing worn. Replace fan assembly ($5–15).'},{problem:'Still overheating',fix:'Thermal paste may be dry. Repaste CPU.'},{problem:'Fan not spinning',fix:'Connector unseated. Reseat. Replace if dead.'}],
    faqs:[{q:'Can I vacuum?',a:'No. Static risk.'},{q:'How often?',a:'Every 6–12 months.'}],
    related:['upgrade-laptop-ram','replace-hdd-with-ssd'] },

  { slug:'upgrade-laptop-ram', heroImage: { url: 'https://images.unsplash.com/photo-1562976540-1502c2145186?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTE1NjAyfDB8MXxzZWFyY2h8MXx8cmFtJTIwbWVtb3J5JTIwY2hpcHxlbnwxfDB8fHwxNzkzMTQxNzIwfDA&ixlib=rb-4.1.0&q=80&w=1080', alt: 'green circuit board close-up photography' }, title:'Upgrade Laptop RAM', category:'Laptop', difficulty:'Easy', time:'15–20 min',
    tools:[{name:'New RAM module (match DDR + SO-DIMM)'},{name:'Phillips screwdriver'},{name:'Plastic pry tool'}],
    summary:'Speed up a slow laptop by adding or replacing RAM.',
    intro:'Running out of RAM makes the laptop swap to disk, which is 100× slower. Going 4→8 GB or 8→16 GB is the cheapest upgrade and takes 15 minutes.',
    warnings:['RAM is static-sensitive. Touch bare metal on the case before handling.'],
    steps:[{text:'Check current RAM: Task Manager → Performance → Memory.'},{text:'Buy the matching module — same type, form factor, speed.'},{text:'Shut down. Unplug. Remove external battery.'},{text:'Open bottom cover.'},{text:'Push metal clips outward. Module pops up at an angle.'},{text:'Pull old module straight out at that angle.'},{text:'Insert new module at 30°, gold contacts first. Push firmly until gold is almost hidden.'},{text:'Press flat until side clips snap.'},{text:'Reinstall cover. Power on. Verify new RAM is detected.'}],
    troubleshooting:[{problem:'Won’t boot',fix:'RAM not fully seated. Reinstall until clips click.'},{problem:'Only half detected',fix:'Try the other slot for dual-channel pairing.'},{problem:'Beep codes',fix:'Count beeps, look up your laptop model.'}],
    faqs:[{q:'Which RAM does my laptop take?',a:'Search "[model] RAM upgrade" or use Crucial’s memory finder.'},{q:'Can I mix speeds?',a:'Yes — both run at the slower speed. Best to match.'}],
    related:['replace-hdd-with-ssd'] },

  { slug:'replace-hdd-with-ssd', heroImage: { url: 'https://images.unsplash.com/photo-1597852074816-d933c7d2b988?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTE1NjAyfDB8MXxzZWFyY2h8MXx8c3NkJTIwaGFyZCUyMGRyaXZlfGVufDF8MHx8fDE3OTMxNDE2NDd8MA&ixlib=rb-4.1.0&q=80&w=1080', alt: 'black and silver turntable on brown wooden table' }, title:'Replace an HDD with an SSD', category:'Laptop', difficulty:'Medium', time:'40–60 min',
    tools:[{name:'New SSD (SATA 2.5 or NVMe M.2)'},{name:'Phillips screwdriver'},{name:'SATA-to-USB adapter or M.2 enclosure'},{name:'Cloning software'}],
    summary:'The single biggest speed upgrade for any older laptop.',
    intro:'Replacing an HDD with an SSD drops boot from 60s to 10s. Clone the old drive first, then swap. Works on both SATA and NVMe.',
    warnings:['Handle drives by the edges. Never open an HDD.'],
    steps:[{text:'Identify your drive type. Search "[model] SSD upgrade".'},{text:'Buy the correct SSD. SATA 2.5" for older laptops; M.2 NVMe for modern.'},{text:'Connect new SSD via USB adapter. Do not install in the laptop yet.'},{text:'Install cloning software. Macrium Reflect Free or Clonezilla.'},{text:'Clone old drive to new SSD (30 min – 2 hours).'},{text:'Shut down. Unplug. Remove external battery.'},{text:'Open bottom cover. Locate the drive.'},{text:'For 2.5": unscrew caddy, slide out. For M.2: remove one screw, slide out at an angle.'},{text:'Install new SSD. Reverse of removal.'},{text:'Reassemble. Boot. Should be dramatically faster.'}],
    troubleshooting:[{problem:'SSD not detected',fix:'Not fully seated. Reinstall at proper angle.'},{problem:'No bootable device',fix:'Clone failed. Re-clone. Check BIOS boot order.'}],
    faqs:[{q:'Does my laptop support SSD?',a:'Most from 2006 onward support 2.5". Most 2015+ support M.2 NVMe.'},{q:'What do I do with the old drive?',a:'Put it in a USB enclosure as an external backup.'}],
    related:['upgrade-laptop-ram'] },

  { slug:'fix-laptop-charging-port', title:'Fix a Laptop Charging Port', category:'Laptop', difficulty:'Medium', time:'30–60 min',
    tools:[{name:'Replacement port (model-specific)'},{name:'Soldering iron (if soldered)'},{name:'Phillips screwdriver'},{name:'Multimeter'}],
    summary:'Diagnose and repair a laptop that will not charge.',
    intro:'Four causes: bad charger, bad port, bad battery, or dead charging IC. Test the charger first — if voltage is correct, the port is the issue.',
    warnings:['The charging IC holds charge after unplugging. Disconnect the battery first.','If not experienced with soldering, buy a module or pay a shop.'],
    steps:[{text:'Test charger with a multimeter — should read rated voltage (19V typical).'},{text:'Wiggle the cable while watching the charging icon. Flicker = loose port.'},{text:'Shut down. Unplug. Disconnect battery internally.'},{text:'Open bottom cover. Locate the port.'},{text:'Modular module with ribbon cable? Easy. Soldered to motherboard? Requires soldering.'},{text:'If soldered, desolder old port with hot air rework or fine-tip iron.'},{text:'Install new port. Reconnect battery. Test charging.'}],
    troubleshooting:[{problem:'Still not charging',fix:'Charging IC dead. Requires board-level repair.'},{problem:'Slow charge',fix:'Port resistance higher than expected. Verify current rating.'}],
    faqs:[{q:'How do I know if it is the port or charger?',a:'Test charger with a multimeter. Correct voltage = charger fine.'},{q:'USB-C charger on barrel port?',a:'Only if the laptop supports USB-C charging.'}],
    related:['replace-laptop-battery'] },

  // ============ PC ============
  { slug:'clean-desktop-pc', heroImage: { url: 'https://images.unsplash.com/photo-1619597455322-4fbbd820250a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTE1NjAyfDB8MXxzZWFyY2h8MXx8ZGVza3RvcCUyMHBjJTIwZHVzdHxlbnwxfDB8fHwxNzkzMTQxNjYzfDA&ixlib=rb-4.1.0&q=80&w=1080', alt: 'black flat screen computer monitor beside black computer keyboard' }, title:'Clean a Desktop PC', category:'PC', difficulty:'Easy', time:'30–45 min',
    tools:[{name:'Compressed air'},{name:'Soft brush'},{name:'Screwdriver'},{name:'Anti-static wrist strap (optional)'}],
    summary:'Safely clean dust from a desktop PC to reduce heat and noise.',
    intro:'Desktop PCs collect dust faster than laptops. A dusty PC runs hotter, louder, and slower. Cleaning every 6–12 months is the single best maintenance task.',
    warnings:['Unplug from the wall before opening.','Do not vacuum inside the case — static risk.'],
    steps:[{text:'Shut down completely. Unplug the power cable.'},{text:'Press the power button once to discharge capacitors.'},{text:'Take the PC outside or to a well-ventilated room.'},{text:'Remove side panel screws. Slide panel off.'},{text:'Hold each fan blade still. Spray air through both sides.',tip:'Never let fans free-spin — bearings can be damaged.'},{text:'Blow air through CPU cooler fins and GPU heatsink.'},{text:'Clean front intake filter with water or air. Let it dry fully.'},{text:'Reinstall panel. Plug in. Test that fans spin.'}],
    troubleshooting:[{problem:'Still loud',fix:'A fan bearing is worn. Identify by listening or HWMonitor, replace.'},{problem:'Still overheating',fix:'CPU thermal paste may be dry. Repaste.'},{problem:'Won’t power on',fix:'A cable came loose. Check 24-pin and CPU power cables.'}],
    faqs:[{q:'Can I vacuum inside?',a:'No. Vacuums generate static that destroys components.'},{q:'How often?',a:'Every 6–12 months. Every 3 in dusty environments.'}],
    related:['clean-laptop-fan','fix-slow-computer'] },

  // ============ AUDIO ============
  { slug:'fix-scarlett-usb-dropout', heroImage: { url: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTE1NjAyfDB8MXxzZWFyY2h8MXx8YXVkaW8lMjBpbnRlcmZhY2UlMjBzdHVkaW98ZW58MXwwfHx8MTc5MzE0MTY1Mnww&ixlib=rb-4.1.0&q=80&w=1080', alt: 'A music recording studio with guitars on the wall and a large mixing consol' }, title:'Fix Focusrite Scarlett USB Dropouts', category:'Audio', difficulty:'Easy', time:'15–30 min',
    tools:[{name:'Known-good USB cable'},{name:'Powered USB hub (optional)'},{name:'Focusrite Control software'},{name:'Focusrite driver (Windows)'}],
    summary:'Stop the Scarlett from disconnecting or crackling.',
    intro:'Scarlett interfaces (Solo, 2i2, 4i4, etc.) are the most popular home studio interfaces. Dropouts are almost always USB bus issues, drivers, or power — not hardware failure.',
    warnings:['Install the official Focusrite driver. Third-party drivers cause most connection problems.','Use powered hubs only. Passive hubs cause dropouts.'],
    steps:[{text:'Note your model.'},{text:'Update the official driver. Uninstall old driver first.'},{text:'Plug DIRECTLY into the computer. No hub.'},{text:'Try a different USB cable.'},{text:'Windows: disable USB selective suspend in Power Options.',tip:'This one setting fixes most dropouts.'},{text:'In the DAW, increase buffer size to 256 or 512.'},{text:'Device Manager: disable power management for the Scarlett.'},{text:'Laptop: plug the charger in.'},{text:'Try a rear USB port on desktops.'},{text:'Test 10 minutes. If dropouts persist, contact Focusrite support.'}],
    troubleshooting:[{problem:'Still dropping',fix:'USB controller incompatible. A POWERED hub often fixes it.'},{problem:'Crackling on playback',fix:'Increase buffer. Close background apps.'},{problem:'Not detected',fix:'Different USB-C port. Reinstall Focusrite Control.'}],
    faqs:[{q:'Why drops when I plug the charger?',a:'Laptop resets USB power. Use a powered hub or leave plugged in.'},{q:'USB-C compatible?',a:'Newer Scarlett are native USB-C. Older need a USB-C to USB-B cable.'}],
    related:['clean-audio-interface-pots'] },

  { slug:'clean-audio-interface-pots', heroImage: { url: 'https://images.unsplash.com/photo-1618609377864-68609b857e90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTE1NjAyfDB8MXxzZWFyY2h8MXx8YXVkaW8lMjBtaXhlciUyMGtub2JzfGVufDF8MHx8fDE3OTMxNDE2NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080', alt: 'black and green audio mixer' }, title:'Clean Crackly Audio Interface Knobs', category:'Audio', difficulty:'Easy', time:'20–40 min',
    tools:[{name:'DeoxIT D5 or CRC QD Electronic Cleaner'},{name:'Small Phillips screwdriver'},{name:'Cotton swab'}],
    summary:'Fix crackly volume knobs on Scarlett or any audio interface.',
    intro:'Audio interface knobs (pots) crackle over time as dust accumulates on the carbon tracks. Fix with contact cleaner in 20 minutes. Works on Scarlett, mixers, DJ controllers, amps.',
    warnings:['Unplug from USB and power before opening.','Spray only into the pot housing — never on the circuit board.'],
    steps:[{text:'Unplug from everything.'},{text:'Pull the knob upward — press-fit on a D-shaft.'},{text:'Remove bottom screws. Open case.'},{text:'Locate the potentiometer behind the knob.'},{text:'Attach the straw to DeoxIT.'},{text:'Spray 1 second into the gap between shaft and housing. Do not flood.'},{text:'Rotate the knob 30 times, min to max.'},{text:'Wait 5 min to evaporate. Reassemble. Test.'}],
    troubleshooting:[{problem:'Still crackly',fix:'Carbon track worn. Replace pot (requires soldering).'},{problem:'Knob loose after reinstall',fix:'D-shaft alignment off. Push slowly aligning with the flat side.'},{problem:'No audio after cleaning',fix:'Connector unseated. Cleaner may not be fully dry — wait 30 min.'}],
    faqs:[{q:'Can I use WD-40?',a:'No. Leaves oily residue. Use DeoxIT D5 or CRC QD only.'},{q:'Works on DJ mixers?',a:'Yes — same principle for any pot or slider.'}],
    related:['fix-scarlett-usb-dropout'] },

  { slug:'fix-headphone-jack', heroImage: { url: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTE1NjAyfDB8MXxzZWFyY2h8MXx8aGVhZHBob25lcyUyMGF1ZGlvJTIwcGx1Z3xlbnwxfDB8fHwxNzkzMTQxNjUwfDA&ixlib=rb-4.1.0&q=80&w=1080', alt: 'gray and brown corded headphones' }, title:'Fix a Crackly Headphone Jack', category:'Audio', difficulty:'Easy', time:'10–20 min',
    tools:[{name:'Compressed air'},{name:'Cotton swab + isopropyl alcohol'},{name:'Toothpick'},{name:'Flashlight'}],
    summary:'Fix crackly, one-sided, or dead headphone jacks.',
    intro:'90% of "broken" jacks are dirty. Lint, dust, or oxidation inside. Clean first — replacement requires soldering on most devices.',
    warnings:['Unplug the device from power before cleaning.'],
    steps:[{text:'Unplug headphones. Shine a flashlight into the jack.'},{text:'Blow short bursts of air into the jack.'},{text:'If lint remains, scrape with a toothpick — never metal.'},{text:'Dip cotton swab in alcohol. Gently wipe inside.'},{text:'Dry 5 min. Test.'},{text:'If jack is loose (audio cuts when cable wiggles), resoldering is needed.'}],
    troubleshooting:[{problem:'One-sided audio',fix:'Lint in jack. Clean more aggressively.'},{problem:'Crackling when moving',fix:'Loose jack on PCB. Requires resoldering.'},{problem:'No sound',fix:'Verify headphones on another device first.'}],
    faqs:[{q:'Can I just use Bluetooth?',a:'Yes, but wired has zero latency and no battery.'},{q:'Can I replace the jack myself?',a:'Sometimes modular. Most require soldering. Check iFixit for your model.'}],
    related:['clean-phone-charging-port'] },

  // ============ RADIOS ============
  { slug:'fix-radio-no-reception', heroImage: { url: 'https://images.unsplash.com/photo-1623969451926-10c5e52b707a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTE1NjAyfDB8MXxzZWFyY2h8MXx8cmFkaW8lMjBhbnRlbm5hJTIwdmludGFnZXxlbnwxfDB8fHwxNzkzMTQxNzI2fDA&ixlib=rb-4.1.0&q=80&w=1080', alt: 'black radio on brown wooden shelf' }, title:'Fix a Radio With No Reception', category:'Radio', difficulty:'Easy', time:'10–30 min',
    tools:[{name:'Fresh batteries'},{name:'External antenna'},{name:'Multimeter'},{name:'Small Phillips screwdriver'}],
    summary:'Diagnose why a radio gets no signal.',
    intro:'Usually the antenna, batteries, or tuning capacitor. Fixes range from "extend the antenna" to "clean the tuning capacitor with contact cleaner."',
    warnings:['Tube radios hold lethal voltages. Do not open without capacitor discharge knowledge.'],
    steps:[{text:'Replace batteries with fresh ones.'},{text:'Fully extend the antenna. FM needs ~75 cm.'},{text:'Move the radio near a window. Concrete and metal block signals.'},{text:'Try different bands. If only one works, that band circuit is faulty.'},{text:'Open and inspect the antenna wire to the PCB.'},{text:'If the tuning knob feels scratchy, spray contact cleaner into the tuning capacitor.'},{text:'Reassemble. Retest.'}],
    troubleshooting:[{problem:'AM works, no FM',fix:'FM tuner section faulty. Check FM antenna coil solder joint.'},{problem:'Works only near stations',fix:'Antenna disconnected. Solder a new wire.'}],
    faqs:[{q:'Can I use a piece of wire as antenna?',a:'Yes. 75 cm of wire works well for FM.'},{q:'DAB radios same issue?',a:'Similar antenna fixes apply.'}],
    related:['clean-radio-volume-pot'] },

  { slug:'clean-radio-volume-pot', heroImage: { url: 'https://images.unsplash.com/photo-1514451966516-6fa724a62afb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTE1NjAyfDB8MXxzZWFyY2h8MXx8cmFkaW8lMjBrbm9iJTIwY2xvc2V1cHxlbnwxfDB8fHwxNzkzMTQxNjU1fDA&ixlib=rb-4.1.0&q=80&w=1080', alt: 'a black and white photo of a knob on a stove' }, title:'Clean a Crackly Radio Volume Knob', category:'Radio', difficulty:'Easy', time:'15–25 min',
    tools:[{name:'DeoxIT D5 or CRC QD'},{name:'Small Phillips screwdriver'},{name:'Cotton swab'}],
    summary:'Fix scratchy or intermittent volume on old radios.',
    intro:'Volume knobs get crackly from dust and oxidation on the potentiometer. Same fix as any audio pot — contact cleaner + work the knob.',
    warnings:['Unplug radio or remove batteries before opening.'],
    steps:[{text:'Remove batteries or unplug.'},{text:'Remove back cover screws.'},{text:'Locate the volume pot behind the knob.'},{text:'Pull the plastic knob off.'},{text:'Spray 1 second into the shaft gap.'},{text:'Rotate 30 times from min to max.'},{text:'Wait 5 min. Reassemble. Test.'}],
    troubleshooting:[{problem:'Still crackly',fix:'Carbon track worn. Replace pot (~$2, soldering required).'},{problem:'Volume works, no speaker sound',fix:'Speaker wires loose. Check both.'}],
    faqs:[{q:'Can I use hardware-store contact cleaner?',a:'Yes, if labeled "for electronics" and fully evaporates.'}],
    related:['fix-radio-no-reception'] },

  // ============ KEYBOARDS ============
  { slug:'clean-mechanical-keyboard', heroImage: { url: 'https://images.unsplash.com/photo-1595044426077-d36d9236d54a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTE1NjAyfDB8MXxzZWFyY2h8MXx8bWVjaGFuaWNhbCUyMGtleWJvYXJkJTIwY2xlYW5pbmd8ZW58MXwwfHx8MTc5MzE0MTY0NXww&ixlib=rb-4.1.0&q=80&w=1080', alt: 'white green and blue computer keyboard' }, title:'Clean a Mechanical Keyboard', category:'Keyboard', difficulty:'Easy', time:'45–90 min',
    tools:[{name:'Keycap puller'},{name:'Switch puller (if hot-swap)'},{name:'Compressed air'},{name:'Isopropyl alcohol 99%'},{name:'Small bowl for keycaps'}],
    summary:'Deep clean a mechanical keyboard and fix sticky keys.',
    intro:'Mechanical keyboards last 10+ years with cleaning. Deep clean every 6 months, or as soon as a key starts misbehaving.',
    warnings:['Only wash keycaps — never the keyboard body.','Do not remove switches if soldered.'],
    steps:[{text:'Unplug the keyboard.'},{text:'Photograph the layout — you will need it to reassemble.'},{text:'Remove every keycap with the puller.'},{text:'Soak keycaps in warm water with a drop of dish soap for 15 minutes.'},{text:'Blow air across the switch plate.'},{text:'For sticky switches: drop of alcohol into the switch, press 20–30 times, dry 1 hour.'},{text:'Rinse keycaps. Pat dry. Air-dry 2+ hours.'},{text:'Wipe case with alcohol cloth.'},{text:'Reinstall keycaps using the photo.'}],
    troubleshooting:[{problem:'Key still not registering',fix:'Switch dead. Hot-swap: replace. Soldered: desolder or replace the keyboard.'},{problem:'Keycap loose',fix:'Stem cracked. Replace that keycap.'}],
    faqs:[{q:'Dishwasher?',a:'No. Warps or discolors keycaps.'},{q:'How do I know if hot-swap?',a:'Product page, or look for metal sockets under switches.'}],
    related:['fix-keyboard-stuck-key'] },

  { slug:'fix-keyboard-stuck-key', heroImage: { url: 'https://images.unsplash.com/photo-1547394765-185e1e68f34e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTE1NjAyfDB8MXxzZWFyY2h8MXx8a2V5Ym9hcmQlMjBrZXklMjBtYWNyb3xlbnwxfDB8fHwxNzkzMTQxNjgwfDA&ixlib=rb-4.1.0&q=80&w=1080', alt: 'closeup photo of computer keyboard' }, title:'Fix a Stuck Keyboard Key', category:'Keyboard', difficulty:'Easy', time:'10–20 min',
    tools:[{name:'Keycap puller'},{name:'Isopropyl alcohol 99%'},{name:'Cotton swab'},{name:'Compressed air'}],
    summary:'Fix a key that is stuck, repeating, or not registering.',
    intro:'One stuck key is usually debris or oxidation. Mechanical = easy alcohol fix. Membrane = harder, may need dome replacement.',
    warnings:['Unplug the keyboard before working on it.'],
    steps:[{text:'Unplug the keyboard.'},{text:'Remove the keycap.'},{text:'Blow compressed air around the switch.'},{text:'Drop alcohol into the switch, press 30 times, wait 30 min.'},{text:'Membrane keyboards: clean the dome with an alcohol swab.'},{text:'Reinstall the keycap. Test.'}],
    troubleshooting:[{problem:'Still stuck',fix:'Mechanical hot-swap: replace switch. Soldered: desolder or replace keyboard.'},{problem:'Key repeats on its own',fix:'Debris or liquid damage. Clean with alcohol.'}],
    faqs:[{q:'What if I spilled liquid?',a:'Unplug immediately, flip upside down, dry 48 hours. Most keyboards survive if unplugged fast enough.'}],
    related:['clean-mechanical-keyboard'] },

  // ============ TV ============
  { slug:'fix-tv-no-signal', heroImage: { url: 'https://images.unsplash.com/photo-1653998582106-0509104928d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTE1NjAyfDB8MXxzZWFyY2h8MXx8dGVsZXZpc2lvbiUyMGhkbWklMjBjYWJsZXxlbnwxfDB8fHwxNzkzMTQxNzA4fDA&ixlib=rb-4.1.0&q=80&w=1080', alt: 'a close up view of a computer keyboard' }, title:'Fix "No Signal" on a TV', category:'TV', difficulty:'Easy', time:'5–30 min',
    tools:[{name:'Known-good HDMI cable'},{name:'Flashlight'}],
    summary:'Diagnose and fix a TV that shows "no signal" from a device.',
    intro:'90% of "no signal" cases: wrong input, bad cable, or asleep device. Diagnostic order from fastest to slowest fix.',
    warnings:['Unplug devices before inspecting cables.'],
    steps:[{text:'Press Source/Input. Cycle through HDMI inputs.'},{text:'Confirm the device is on and awake.'},{text:'Check both HDMI ends. Unplug and reinsert firmly.'},{text:'Try a different HDMI cable.'},{text:'Try a different TV port.'},{text:'Try a different device on the same port.'},{text:'Unplug the TV for 60 seconds to reset the HDMI handshake.'}],
    troubleshooting:[{problem:'Only one port fails',fix:'That HDMI port is dead. Use another or repair.'},{problem:'Intermittent signal',fix:'Bad cable. Replace — fixes 95% of cases.'},{problem:'Picture but no sound',fix:'Check the audio source on both TV and device.'}],
    faqs:[{q:'Device is on but no signal?',a:'Usually wrong input. Next most common: bad HDMI cable.'},{q:'Can it show no signal even with a working cable?',a:'Yes — HDMI handshake can fail. Unplug TV for 60s to reset.'}],
    related:['replace-monitor-cable'] },

  // ============ ACCESSORIES ============
  { slug:'clean-computer-mouse', heroImage: { url: 'https://images.unsplash.com/photo-1527814050087-3793815479db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTE1NjAyfDB8MXxzZWFyY2h8MXx8Y29tcHV0ZXIlMjBtb3VzZSUyMHdoaXRlfGVufDF8MHx8fDE3OTMxNDE3MDV8MA&ixlib=rb-4.1.0&q=80&w=1080', alt: 'white and grey Logitech G-Series cordless mouse on white surface' }, title:'Clean a Computer Mouse', category:'Accessory', difficulty:'Easy', time:'10–20 min',
    tools:[{name:'Cotton swab'},{name:'Isopropyl alcohol 99%'},{name:'Toothpick'},{name:'Compressed air'}],
    summary:'Fix sticky scroll wheel, double-click, and jittery cursor.',
    intro:'Most "broken" mice are dirty. Dust and skin oils contaminate the encoder and micro-switches. 10-minute clean fixes 80%.',
    warnings:['Unplug the mouse before cleaning.'],
    steps:[{text:'Unplug the mouse.'},{text:'Wipe the surface with an alcohol cloth.'},{text:'Clean the sensor window with an alcohol swab.'},{text:'Blow air into the scroll wheel slot.'},{text:'Rotate the scroll wheel 20 times.'},{text:'If sticky, open the mouse and clean the encoder.'},{text:'If double-click: switch failing. Replace switch (soldering) or replace mouse.'}],
    troubleshooting:[{problem:'Scroll still sticky',fix:'Encoder worn. Replace (soldering) or replace the mouse.'},{problem:'Cursor jitters',fix:'Use a non-reflective mousepad. Glass surfaces confuse optical sensors.'},{problem:'Not detected',fix:'Different USB port. Wireless: replace batteries.'}],
    faqs:[{q:'Can I fix double-click?',a:'Only by replacing the micro-switch (soldering). Consider a new mouse unless it is premium.'}],
    related:['fix-keyboard-stuck-key'] },

  { slug:'fix-game-controller-drift', heroImage: { url: 'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTE1NjAyfDB8MXxzZWFyY2h8MXx8Z2FtZSUyMGNvbnRyb2xsZXIlMjBqb3lzdGlja3xlbnwxfDB8fHwxNzkzMTQxNzI5fDA&ixlib=rb-4.1.0&q=80&w=1080', alt: 'A wireless game controller illuminated by vibrant cyan and magenta neon lig' }, title:'Fix Game Controller Analog Stick Drift', category:'Console', difficulty:'Medium', time:'30–60 min',
    tools:[{name:'Isopropyl alcohol 99%'},{name:'Cotton swab'},{name:'Compressed air'},{name:'Small Phillips screwdriver'},{name:'Replacement stick module (if cleaning fails)'}],
    summary:'Fix PS5, Xbox, or Switch controller stick drift.',
    intro:'Drift means the character moves without input. Caused by dust and wear in the analog stick potentiometer. Cleaning helps temporarily. Long-term fix requires replacing the module.',
    warnings:['Do not spray liquids directly into the controller — spray on a swab first.'],
    steps:[{text:'Power off. Disconnect.'},{text:'Blow compressed air around the base of the stick.'},{text:'Rotate the stick 360° while blowing air.'},{text:'Dip a cotton swab in alcohol. Clean the base ring.'},{text:'Wait 10 min. Test on gamepad-tester.com.'},{text:'If persistent, open the controller and clean inside the pot.'},{text:'Replace the module if drift continues (soldering on most).'}],
    troubleshooting:[{problem:'Drift returns',fix:'Pot worn. Only replacing the module is permanent.'},{problem:'One direction drifts',fix:'Clean that axis specifically by pushing and blowing.'},{problem:'Controller not detected after reassembly',fix:'Flex cable unseated. Check all cables.'}],
    faqs:[{q:'Which controllers have Hall-effect sticks?',a:'PS5 DualSense Edge, some 8BitDo, Nacon. Standard PS5/Xbox/Switch do not.'},{q:'Can I send in for repair?',a:'Yes — shops charge $20–40, cheaper than a new controller.'}],
    related:['clean-computer-mouse'] },

  { slug:'replace-monitor-cable', title:'Replace a Monitor Cable', category:'Accessory', difficulty:'Easy', time:'5–10 min',
    tools:[{name:'New cable (HDMI/DisplayPort/DVI/VGA)'}],
    summary:'Fix flickering, black screen, or resolution limits.',
    intro:'Monitor cables fail silently. Symptoms: flickering, black screens, "no signal", or resolution limits. A new cable is $10 and 5 minutes — try before assuming monitor or GPU failure.',
    warnings:['Unplug both ends before swapping.'],
    steps:[{text:'Identify the cable type on the monitor and GPU.'},{text:'Buy a new cable of the correct type and version.'},{text:'Power off. Unplug the old cable from both ends.'},{text:'Plug in the new cable. Should click or screw in.'},{text:'Power on. If working, done. Otherwise try different ports.'}],
    troubleshooting:[{problem:'Flicker persists',fix:'Monitor or GPU issue. Test on another computer.'},{problem:'Lower resolution than expected',fix:'Cable may be older spec. Verify version supports your resolution.'}],
    faqs:[{q:'Best cable for gaming?',a:'DisplayPort 1.4 for 144Hz+, HDMI 2.1 for 4K120 TVs.'}],
    related:['fix-tv-no-signal'] },

  // ============ SETUP / SOFTWARE ============
  { slug:'fix-wifi-not-connecting', title:'Fix Wi-Fi Not Connecting', category:'Laptop', difficulty:'Easy', time:'5–30 min',
    tools:[{name:'Router'},{name:'Phone (for testing)'},{name:'Ethernet cable (for testing)'}],
    summary:'Diagnose slow, dropping, or non-connecting Wi-Fi on any device.',
    intro:'Wi-Fi failures fall into three categories: router down, device problem, or signal cannot reach. This guide walks the diagnostic order from fastest fixes to deepest.',
    warnings:['Restarting the router fixes 60% of Wi-Fi issues. Do this first.'],
    steps:[{text:'Restart the router. Unplug 30 seconds, plug back in, wait 2 minutes.'},{text:'Fully restart the device (not sleep).'},{text:'Forget the network and reconnect with the password.',tip:'A full reconnect often fixes stale network state.'},{text:'Test on another device. If it works there, the problem is on the original device.'},{text:'Move closer to the router. Concrete and metal block Wi-Fi.'},{text:'Check router lights. Internet light should be green.'},{text:'Try 2.4 GHz vs 5 GHz — 2.4 reaches farther, 5 is faster.'}],
    troubleshooting:[{problem:'Wi-Fi works on phone but not laptop',fix:'Update the Wi-Fi driver. Device Manager → Network adapters → Update.'},{problem:'Signal drops intermittently',fix:'Interference from microwave or cordless phone. Change channel or move router.'},{problem:'Connects but no internet',fix:'Router online but ISP down. Check router lights or call ISP.'}],
    faqs:[{q:'Why does it work sometimes?',a:'Usually interference or weak signal. Try a different channel.'},{q:'Should I buy an extender?',a:'Yes if signal is weak far from the router. Extenders cost $20–40.'}],
    related:['setup-new-laptop','fix-slow-computer'] },

  { slug:'fix-slow-computer', title:'Speed Up a Slow Computer', category:'PC', difficulty:'Easy', time:'30–60 min',
    tools:[{name:'External drive (for backup)'},{name:'Uninstaller software (optional)'}],
    summary:'Simple steps to restore speed on any slow Windows or macOS computer.',
    intro:'A slow computer is rarely the CPU. Almost always it is too many startup programs, a full hard drive, malware, or a failing HDD. Fix in order of impact.',
    warnings:['Back up important files before uninstalling or cleaning.'],
    steps:[{text:'Uninstall unused programs (Control Panel → Programs on Windows).'},{text:'Disable startup programs. Task Manager → Startup tab.'},{text:'Empty Recycle Bin / Trash. Clean temp files.'},{text:'Run a malware scan. Malwarebytes Free on Windows.'},{text:'Check free disk space. Below 10% free is the #1 slowness cause.'},{text:'If you have an HDD, upgrade to SSD — biggest single speed boost.'},{text:'Update the OS.'},{text:'Restart. Test after each step.'}],
    troubleshooting:[{problem:'Still slow',fix:'Hard drive may be failing. Run S.M.A.R.T. check via CrystalDiskInfo.'},{problem:'CPU always at 100%',fix:'Check Task Manager for the culprit process. Search the name online.'},{problem:'Fans loud, hot',fix:'Overheating. Clean fans. Repaste CPU if needed.'}],
    faqs:[{q:'Do I need a new computer?',a:'Only if hardware is over 8 years old. Otherwise SSD + RAM upgrades restore most speed.'},{q:'Is a registry cleaner worth it?',a:'No. They do more harm than good. Skip them.'}],
    related:['clean-desktop-pc','replace-hdd-with-ssd'] },

  { slug:'setup-new-laptop', title:'Set Up a New Laptop', category:'Laptop', difficulty:'Easy', time:'30–60 min',
    tools:[{name:'Internet connection'},{name:'External drive (for backup)'}],
    summary:'Everything to do in the first hour after buying a new laptop.',
    intro:'A new laptop needs about an hour of setup to be safe, fast, and backed up. Do these steps before installing any other software.',
    warnings:['Do not skip OS updates — laptops ship with months of missing patches.'],
    steps:[{text:'Connect to Wi-Fi. Complete the Windows/macOS setup wizard.'},{text:'Run all OS updates. Restart and check again — usually 2–3 rounds.',tip:'Skipping updates is the #1 security mistake.'},{text:'Install a password manager. Bitwarden is free and excellent.'},{text:'Enable full-disk encryption — BitLocker (Windows) or FileVault (macOS).'},{text:'Install Firefox or Brave. Sign in to sync.'},{text:'Set up backup — File History + OneDrive (Windows) or Time Machine + iCloud (macOS).'},{text:'Verify antivirus is active — Windows Defender is enough. macOS: built-in XProtect.'},{text:'Turn on auto-updates for browser and OS.'},{text:'Uninstall vendor trial software (McAfee trial, etc.).'}],
    troubleshooting:[{problem:'Windows Update fails repeatedly',fix:'Free at least 15 GB disk space. Run Windows Update troubleshooter.'},{problem:'Slow after setup',fix:'Background indexing and updates run for 24–48 hours. Normal.'},{problem:'Battery drains fast',fix:'Same — optimization runs for the first 24 hours. Wait before judging.'}],
    faqs:[{q:'Do I need antivirus?',a:'Windows Defender is enough on Windows 10/11. macOS: not needed for typical use.'},{q:'Should I install Linux?',a:'Only if you know Linux. Try in a VM first.'}],
    related:['fix-slow-computer','fix-wifi-not-connecting'] }
]

export const repairCategories: RepairCategory[] = ['Phone','Laptop','PC','Radio','Keyboard','Audio','TV','Accessory','Console']

export function getRepairGuide(slug: string): RepairGuide | undefined {
  return repairGuides.find((g) => g.slug === slug)
}

