export type SoftwareItem = {
  name: string
  category: string
  description: string
  platforms: string[]
  license: string
  url: string
  kind: 'software' | 'game'
}

// Only list official, legal, free or open-source products.
// Never add cracked or pirated software — it will get the site banned from AdSense.
export const software: SoftwareItem[] = [
  { name: 'VLC Media Player', category: 'Media', description: 'Plays almost any video or audio format. Free and open source.', platforms: ['Windows', 'macOS', 'Linux', 'Android'], license: 'Open Source', url: 'https://www.videolan.org/vlc/', kind: 'software' },
  { name: '7-Zip', category: 'Utilities', description: 'Open zip, rar and 7z archives. Free and lightweight.', platforms: ['Windows', 'Linux'], license: 'Open Source', url: 'https://www.7-zip.org/', kind: 'software' },
  { name: 'LibreOffice', category: 'Office', description: 'Free office suite. Opens Word, Excel and PowerPoint files.', platforms: ['Windows', 'macOS', 'Linux'], license: 'Open Source', url: 'https://www.libreoffice.org/download/', kind: 'software' },
  { name: 'GIMP', category: 'Design', description: 'Free image editor, Photoshop alternative.', platforms: ['Windows', 'macOS', 'Linux'], license: 'Open Source', url: 'https://www.gimp.org/downloads/', kind: 'software' },
  { name: 'Visual Studio Code', category: 'Development', description: 'Free code editor from Microsoft. Great for web and Python.', platforms: ['Windows', 'macOS', 'Linux'], license: 'Freeware', url: 'https://code.visualstudio.com/', kind: 'software' },
  { name: 'Python', category: 'Development', description: 'Beginner-friendly programming language.', platforms: ['Windows', 'macOS', 'Linux'], license: 'Open Source', url: 'https://www.python.org/downloads/', kind: 'software' },
  { name: 'Brave Browser', category: 'Security', description: 'Privacy-focused browser with built-in ad blocking.', platforms: ['Windows', 'macOS', 'Linux', 'Android'], license: 'Open Source', url: 'https://brave.com/download/', kind: 'software' },
  { name: 'Malwarebytes Free', category: 'Security', description: 'Free malware scanner.', platforms: ['Windows', 'macOS'], license: 'Freeware', url: 'https://www.malwarebytes.com/mwb-download', kind: 'software' },
  { name: 'SuperTuxKart', category: 'Racing', description: 'Free open-source kart racing game.', platforms: ['Windows', 'macOS', 'Linux'], license: 'Open Source', url: 'https://supertuxkart.net/Download', kind: 'game' },
  { name: '0 A.D.', category: 'Strategy', description: 'Free historical real-time strategy game.', platforms: ['Windows', 'macOS', 'Linux'], license: 'Open Source', url: 'https://play0ad.com/download/', kind: 'game' },
  { name: 'Minetest', category: 'Sandbox', description: 'Open-source voxel game similar to Minecraft.', platforms: ['Windows', 'macOS', 'Linux'], license: 'Open Source', url: 'https://www.minetest.net/downloads/', kind: 'game' }
]

// ============================================================
// Helper exports used by ItemDetail.tsx
// ============================================================
export function slugify(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')
}

export function getSoftwareBySlug(slug: string): SoftwareItem | undefined {
  return software.find((s) => slugify(s.name) === slug)
}

