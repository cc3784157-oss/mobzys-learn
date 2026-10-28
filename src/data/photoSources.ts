// Legal photo sources for lesson images
// All these are FREE and commercial-use-OK:
//
// 1. UNSPLASH (unsplash.com) — free forever, no attribution required
//    Use direct hotlink: https://images.unsplash.com/photo-{ID}?w=800
//    Search: https://unsplash.com/s/photos/{topic}
//
// 2. PEXELS (pexels.com) — free forever, no attribution required
//    Use: https://images.pexels.com/photos/{ID}/pexels-photo-{ID}.jpeg
//    Search: https://www.pexels.com/search/{topic}/
//
// 3. PIXABAY (pixabay.com) — free forever, no attribution required
//    Use: https://cdn.pixabay.com/photo/{...}
//
// 4. WIKIMEDIA COMMONS (commons.wikimedia.org) — free, check license
//    Some require attribution. Check each image.
//
// NEVER USE: Google Images, iFixit photos, or any paid/stock preview site
// These will get you banned from AdSense.

// COMMON TOPIC → SEARCH URL (copy and paste to get a free photo)
export const photoSearchUrls: Record<string, string> = {
  // Repair guides
  'replace-phone-screen': 'https://unsplash.com/s/photos/phone-screen-repair',
  'replace-phone-battery': 'https://unsplash.com/s/photos/phone-battery',
  'replace-laptop-battery': 'https://unsplash.com/s/photos/laptop-battery',
  'clean-laptop-fan': 'https://unsplash.com/s/photos/laptop-repair',
  'fix-scarlett-usb-dropout': 'https://unsplash.com/s/photos/audio-interface',
  'clean-mechanical-keyboard': 'https://unsplash.com/s/photos/keyboard-cleaning',
  'fix-tv-no-signal': 'https://unsplash.com/s/photos/tv-repair',
  'clean-computer-mouse': 'https://unsplash.com/s/photos/computer-mouse',

  // Life skills
  'first-aid': 'https://unsplash.com/s/photos/first-aid',
  'cpr-adult': 'https://unsplash.com/s/photos/cpr-training',
  'water-safety': 'https://unsplash.com/s/photos/clean-water',
  'cooking': 'https://unsplash.com/s/photos/home-cooking',
  'gardening': 'https://unsplash.com/s/photos/vegetable-garden',
  'personal-finance': 'https://unsplash.com/s/photos/budget-planning',
  'parenting': 'https://unsplash.com/s/photos/parenting',

  // Academics
  'chemistry': 'https://unsplash.com/s/photos/chemistry-lab',
  'biology': 'https://unsplash.com/s/photos/biology-microscope',
  'physics': 'https://unsplash.com/s/photos/physics',
  'mathematics': 'https://unsplash.com/s/photos/mathematics',

  // Trades
  'auto-mechanics': 'https://unsplash.com/s/photos/car-repair',
  'four-stroke-engine': 'https://unsplash.com/s/photos/car-engine',
  'engine-oil-change': 'https://unsplash.com/s/photos/oil-change',
  'brake-system-basics': 'https://unsplash.com/s/photos/brake-disc',
  'electrical-installation': 'https://unsplash.com/s/photos/electrician',
  'plumbing': 'https://unsplash.com/s/photos/plumber',
  'welding': 'https://unsplash.com/s/photos/welding',
  'carpentry': 'https://unsplash.com/s/photos/carpentry',
  'tailoring': 'https://unsplash.com/s/photos/tailoring',
  'hairdressing': 'https://unsplash.com/s/photos/hairdressing',
  'catering': 'https://unsplash.com/s/photos/chef-cooking',
  'construction': 'https://unsplash.com/s/photos/construction'
}

// HOW TO ADD A PHOTO TO A LESSON
// 1. Open the search URL for your topic
// 2. Right-click the image → Copy image address
// 3. Paste it into the lesson's imageUrl field:
//    { slug: 'my-lesson', imageUrl: 'https://images.unsplash.com/photo-XXXXX', imageAlt: 'Description' }
// 4. Save → rebuild → deploy
