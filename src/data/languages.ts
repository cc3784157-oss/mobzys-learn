export type LangBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] }
  | { type: 'note'; text: string }
  | { type: 'table'; rows: string[][] }

export type LangLesson = {
  slug: string
  title: string
  level: 'Beginner' | 'Intermediate'
  duration: string
  objectives: string[]
  content: LangBlock[]
  exercises: { question: string; answer: string }[]
}

export type Language = {
  slug: string
  name: string
  nativeName: string
  flag: string
  description: string
  speakers: string
  lessons: LangLesson[]
}

export const languages: Language[] = [
  {
    slug: 'french', name: 'French', nativeName: 'Français', flag: '🇫🇷',
    description: 'One of the world\'s most-learned languages. Official in 29 countries across Africa, Europe, and the Caribbean.',
    speakers: '300 million',
    lessons: [
      { slug: 'greetings', title: 'Greetings and Introductions', level: 'Beginner', duration: '30 min',
        objectives: ['Say hello and goodbye in French', 'Introduce yourself', 'Ask "how are you?"', 'Use polite expressions'],
        content: [
          { type: 'p', text: 'French greetings change depending on formality. Use "bonjour" for formal or neutral situations and "salut" for friends. "Bonsoir" in the evening.' },
          { type: 'h2', text: 'Basic greetings' },
          { type: 'table', rows: [
            ['French', 'English', 'When to use'],
            ['Bonjour', 'Hello / Good day', 'Any time before 6pm'],
            ['Bonsoir', 'Good evening', 'After 6pm'],
            ['Salut', 'Hi / Bye', 'Informal'],
            ['Au revoir', 'Goodbye', 'Any situation'],
            ['À bientôt', 'See you soon', 'Any situation'],
            ['Merci', 'Thank you', 'Always'],
          ]},
          { type: 'h2', text: 'Introducing yourself' },
          { type: 'p', text: '"Je m\'appelle [name]" = My name is [name]. "Comment vous appelez-vous ?" = What is your name? (formal). "Comment tu t\'appelles ?" = What is your name? (informal).' },
          { type: 'p', text: '"Enchanté(e)" = Nice to meet you. Add the extra "e" if you are female (enchantée).' },
          { type: 'note', text: 'In French, "vous" is formal/plural and "tu" is informal singular. Always use "vous" with strangers, elders, and professionals until they invite you to use "tu".' },
        ],
        exercises: [
          { question: 'How do you say "Good evening" in French?', answer: 'Bonsoir.' },
          { question: 'What is the difference between "bonjour" and "salut"?', answer: 'Bonjour is formal/neutral (any time of day before evening). Salut is informal, used with friends.' },
          { question: 'Say "My name is Alice" in French.', answer: 'Je m\'appelle Alice.' },
          { question: 'Which pronoun would you use with a stranger?', answer: 'Vous (formal).' },
        ],
      },
      { slug: 'numbers-1-100', title: 'Numbers 1–100', level: 'Beginner', duration: '25 min',
        objectives: ['Count from 1 to 20', 'Understand the pattern for 20+', 'Ask and give your age'],
        content: [
          { type: 'h2', text: 'Numbers 1–20' },
          { type: 'table', rows: [
            ['1 un', '6 six', '11 onze', '16 seize'],
            ['2 deux', '7 sept', '12 douze', '17 dix-sept'],
            ['3 trois', '8 huit', '13 treize', '18 dix-huit'],
            ['4 quatre', '9 neuf', '14 quatorze', '19 dix-neuf'],
            ['5 cinq', '10 dix', '15 quinze', '20 vingt'],
          ]},
          { type: 'h2', text: 'From 20 to 100' },
          { type: 'p', text: '21 = vingt et un. 22 = vingt-deux. 30 = trente. 40 = quarante. 50 = cinquante. 60 = soixante. 70 = soixante-dix (60+10). 80 = quatre-vingts (4×20). 90 = quatre-vingt-dix (4×20+10). 100 = cent.' },
          { type: 'note', text: 'The French counting system is decimal up to 60, then combines: 70 = 60+10, 80 = 4×20, 90 = 4×20+10.' },
        ],
        exercises: [
          { question: 'How do you say 5?', answer: 'Cinq.' },
          { question: 'How do you say 17?', answer: 'Dix-sept.' },
          { question: 'How do you say 80?', answer: 'Quatre-vingts (4×20).' },
        ],
      },
      { slug: 'articles', title: 'Articles: le, la, les, un, une', level: 'Beginner', duration: '35 min',
        objectives: ['Use definite articles (le, la, l\', les)', 'Use indefinite articles (un, une, des)', 'Identify noun gender'],
        content: [
          { type: 'p', text: 'Every French noun has a gender — masculine or feminine. The article must match the noun.' },
          { type: 'h2', text: 'Definite articles (the)' },
          { type: 'table', rows: [
            ['Gender', 'Singular', 'Plural', 'Example'],
            ['Masculine', 'le', 'les', 'le livre (the book)'],
            ['Feminine', 'la', 'les', 'la table (the table)'],
            ['Before vowel', 'l\'', 'les', 'l\'arbre (the tree)'],
          ]},
          { type: 'h2', text: 'Indefinite articles (a / an / some)' },
          { type: 'table', rows: [
            ['Gender', 'Singular', 'Plural'],
            ['Masculine', 'un', 'des'],
            ['Feminine', 'une', 'des'],
          ]},
          { type: 'note', text: 'Nouns ending in -e are usually feminine. Nouns ending in -age, -ment, -eau are usually masculine. Learn each noun with its article.' },
        ],
        exercises: [
          { question: 'What is the definite article for "table" (feminine)?', answer: 'La table.' },
          { question: 'What is the indefinite article for "livre" (masculine)?', answer: 'Un livre.' },
          { question: 'What do you use before a vowel?', answer: 'L\' (e.g., l\'arbre).' },
        ],
      },
      { slug: 'present-tense-verbs', title: 'Present Tense: Regular -ER Verbs', level: 'Intermediate', duration: '40 min',
        objectives: ['Conjugate regular -ER verbs', 'Use subject pronouns', 'Form present-tense sentences'],
        content: [
          { type: 'p', text: 'About 90% of French verbs end in -ER and follow a simple pattern. Take "parler" (to speak). Remove -er, add the ending for each pronoun.' },
          { type: 'table', rows: [
            ['Pronoun', 'Ending', 'Parler (to speak)'],
            ['je', '-e', 'je parle'],
            ['tu', '-es', 'tu parles'],
            ['il / elle', '-e', 'il parle / elle parle'],
            ['nous', '-ons', 'nous parlons'],
            ['vous', '-ez', 'vous parlez'],
            ['ils / elles', '-ent', 'ils parlent'],
          ]},
          { type: 'h2', text: 'Common -ER verbs' },
          { type: 'ul', items: ['parler (to speak)', 'aimer (to like / love)', 'donner (to give)', 'travailler (to work)', 'étudier (to study)', 'regarder (to watch)', 'écouter (to listen)'] },
          { type: 'note', text: 'The endings -e, -es, -e, -ent are all silent. "Je parle", "tu parles", "il parle", "ils parlent" sound nearly identical when spoken.' },
        ],
        exercises: [
          { question: 'Conjugate "aimer" (to like) for "je".', answer: 'J\'aime.' },
          { question: 'Conjugate "travailler" for "nous".', answer: 'Nous travaillons.' },
          { question: 'How do you say "They (f) watch"?', answer: 'Elles regardent.' },
        ],
      },
    ],
  },
  {
    slug: 'spanish', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸',
    description: 'Second most spoken language by native speakers. Official in 21 countries.',
    speakers: '500 million',
    lessons: [
      { slug: 'greetings', title: 'Greetings and Introductions', level: 'Beginner', duration: '30 min',
        objectives: ['Say hello and goodbye', 'Introduce yourself', 'Ask how someone is'],
        content: [
          { type: 'table', rows: [
            ['Spanish', 'English', 'When'],
            ['Hola', 'Hello', 'Any time'],
            ['Buenos días', 'Good morning', 'Morning'],
            ['Buenas tardes', 'Good afternoon', 'Afternoon'],
            ['Buenas noches', 'Good night', 'Evening/night'],
            ['Adiós', 'Goodbye', 'Any time'],
            ['Hasta luego', 'See you later', 'Any time'],
            ['Me llamo…', 'My name is…', 'Introduction'],
            ['¿Cómo estás?', 'How are you? (informal)', 'Greeting'],
            ['¿Cómo está usted?', 'How are you? (formal)', 'Greeting'],
            ['Mucho gusto', 'Nice to meet you', 'Introduction'],
          ]},
          { type: 'note', text: 'Spanish has "tú" (informal you) and "usted" (formal you). Use "usted" with strangers, elders, and professionals.' },
        ],
        exercises: [
          { question: 'How do you say "Good morning"?', answer: 'Buenos días.' },
          { question: 'How do you say "My name is Carlos"?', answer: 'Me llamo Carlos.' },
        ],
      },
      { slug: 'numbers', title: 'Numbers 1–100', level: 'Beginner', duration: '25 min',
        objectives: ['Count from 1 to 20', 'Form 21–99', 'Say 100'],
        content: [
          { type: 'table', rows: [
            ['1 uno', '6 seis', '11 once', '16 dieciséis'],
            ['2 dos', '7 siete', '12 doce', '17 diecisiete'],
            ['3 tres', '8 ocho', '13 trece', '18 dieciocho'],
            ['4 cuatro', '9 nueve', '14 catorce', '19 diecinueve'],
            ['5 cinco', '10 diez', '15 quince', '20 veinte'],
          ]},
          { type: 'p', text: '21 = veintiuno, 22 = veintidós, 23 = veintitrés… up to 29 = veintinueve. From 30: treinta, 31 = treinta y uno, 40 = cuarenta, 50 = cincuenta, 60 = sesenta, 70 = setenta, 80 = ochenta, 90 = noventa, 100 = cien.' },
        ],
        exercises: [
          { question: 'How do you say 15?', answer: 'Quince.' },
          { question: 'How do you say 42?', answer: 'Cuarenta y dos.' },
          { question: 'How do you say 100?', answer: 'Cien.' },
        ],
      },
      { slug: 'present-tense-ar', title: 'Present Tense: Regular -AR Verbs', level: 'Intermediate', duration: '35 min',
        objectives: ['Conjugate regular -AR verbs', 'Use subject pronouns', 'Form present-tense sentences'],
        content: [
          { type: 'p', text: 'Take "hablar" (to speak). Remove -ar, add the ending for each pronoun.' },
          { type: 'table', rows: [
            ['Pronoun', 'Ending', 'Hablar'],
            ['yo', '-o', 'yo hablo'],
            ['tú', '-as', 'tú hablas'],
            ['él / ella / usted', '-a', 'él habla'],
            ['nosotros', '-amos', 'nosotros hablamos'],
            ['vosotros', '-áis', 'vosotros habláis'],
            ['ellos / ellas / ustedes', '-an', 'ellos hablan'],
          ]},
          { type: 'p', text: 'Common -AR verbs: hablar (to speak), trabajar (to work), estudiar (to study), escuchar (to listen), mirar (to watch), comprar (to buy), necesitar (to need).' },
          { type: 'note', text: 'In Latin America, "vosotros" is rarely used — "ustedes" takes its place for plural "you".' },
        ],
        exercises: [
          { question: 'Conjugate "estudiar" for "yo".', answer: 'Yo estudio.' },
          { question: 'Conjugate "trabajar" for "nosotros".', answer: 'Nosotros trabajamos.' },
          { question: 'How do you say "She listens"?', answer: 'Ella escucha.' },
        ],
      },
    ],
  },
  {
    slug: 'arabic', name: 'Arabic', nativeName: 'العربية', flag: '🇸🇦',
    description: 'Language of the Quran and over 400 million speakers. Written right-to-left.',
    speakers: '400 million',
    lessons: [
      { slug: 'alphabet-basics', title: 'The Arabic Alphabet (28 Letters)', level: 'Beginner', duration: '40 min',
        objectives: ['Recognise the 28 Arabic letters', 'Understand right-to-left writing', 'Learn the 4 forms of each letter'],
        content: [
          { type: 'p', text: 'Arabic has 28 letters. It is written and read right-to-left. Each letter has up to 4 forms: isolated, initial, medial, final — depending on where it sits in the word.' },
          { type: 'h2', text: 'First 10 letters' },
          { type: 'table', rows: [
            ['Letter', 'Name', 'Sound'],
            ['ا', 'Alif', 'long "a"'],
            ['ب', 'Ba', 'b'],
            ['ت', 'Ta', 't'],
            ['ث', 'Tha', 'th (as in "think")'],
            ['ج', 'Jeem', 'j'],
            ['ح', 'Ha', 'h (breathy)'],
            ['خ', 'Kha', 'kh (as in Scottish "loch")'],
            ['د', 'Dal', 'd'],
            ['ذ', 'Dhal', 'th (as in "this")'],
            ['ر', 'Ra', 'r (rolled)'],
          ]},
          { type: 'note', text: 'The letter ح (Ha) is pronounced from deep in the throat — it is NOT the same as ه (ha). Many learners confuse these.' },
        ],
        exercises: [
          { question: 'How many letters are in the Arabic alphabet?', answer: '28.' },
          { question: 'In which direction is Arabic written?', answer: 'Right to left.' },
          { question: 'What sound does ب (Ba) make?', answer: 'B (like English "b").' },
        ],
      },
      { slug: 'greetings', title: 'Greetings and Common Phrases', level: 'Beginner', duration: '30 min',
        objectives: ['Say hello and goodbye', 'Use polite expressions', 'Introduce yourself'],
        content: [
          { type: 'table', rows: [
            ['Arabic', 'Transliteration', 'English'],
            ['السلام عليكم', 'as-salāmu ʿalaykum', 'Peace be upon you (formal greeting)'],
            ['وعليكم السلام', 'wa ʿalaykumu as-salām', 'And peace be upon you (reply)'],
            ['مرحبا', 'marḥaban', 'Hello / Welcome'],
            ['أهلاً وسهلاً', 'ahlan wa sahlan', 'Welcome (very warm)'],
            ['صباح الخير', 'ṣabāḥ al-khayr', 'Good morning'],
            ['مساء الخير', 'masāʾ al-khayr', 'Good evening'],
            ['مع السلامة', 'maʿa as-salāma', 'Goodbye'],
            ['شكراً', 'shukran', 'Thank you'],
            ['عفواً', 'ʿafwan', 'You\'re welcome / Excuse me'],
          ]},
          { type: 'note', text: 'السلام عليكم is the universal Arabic greeting. Even non-Muslims can use it — it just means "peace be upon you".' },
        ],
        exercises: [
          { question: 'How do you say "Thank you" in Arabic?', answer: 'شكراً (shukran).' },
          { question: 'What is the reply to "as-salāmu ʿalaykum"?', answer: 'wa ʿalaykumu as-salām.' },
        ],
      },
      { slug: 'numbers', title: 'Numbers 1–20', level: 'Beginner', duration: '25 min',
        objectives: ['Count from 1 to 20', 'Recognise Arabic numerals (Western vs Eastern)', 'Ask for a price'],
        content: [
          { type: 'p', text: 'Arabic has two numeral systems: Western (1, 2, 3…) used in most of the Arabic-speaking world, and Eastern Arabic (١, ٢, ٣…) used in the Gulf and Levant.' },
          { type: 'table', rows: [
            ['Number', 'Arabic word', 'Transliteration'],
            ['1', 'واحد', 'wāḥid'],
            ['2', 'اثنان', 'ithnān'],
            ['3', 'ثلاثة', 'thalātha'],
            ['4', 'أربعة', 'arbaʿa'],
            ['5', 'خمسة', 'khamsa'],
            ['6', 'ستة', 'sitta'],
            ['7', 'سبعة', 'sabʿa'],
            ['8', 'ثمانية', 'thamāniya'],
            ['9', 'تسعة', 'tisʿa'],
            ['10', 'عشرة', 'ʿashara'],
          ]},
        ],
        exercises: [
          { question: 'How do you say 5 in Arabic?', answer: 'خمسة (khamsa).' },
          { question: 'What is the Eastern Arabic numeral for 7?', answer: '٧.' },
        ],
      },
    ],
  },
  {
    slug: 'mandarin', name: 'Mandarin Chinese', nativeName: '普通话', flag: '🇨🇳',
    description: 'Most spoken language in the world. Spoken by over 1 billion people in China and Chinese communities worldwide.',
    speakers: '1.1 billion',
    lessons: [
      { slug: 'pinyin-tones', title: 'Pinyin and the 4 Tones', level: 'Beginner', duration: '40 min',
        objectives: ['Understand pinyin romanization', 'Master the 4 tones + neutral tone', 'Read pinyin out loud'],
        content: [
          { type: 'p', text: 'Mandarin uses Chinese characters. Pinyin is the official romanization system to teach pronunciation. Every syllable has a tone — pitch is meaning.' },
          { type: 'h2', text: 'The 4 tones (+ neutral)' },
          { type: 'table', rows: [
            ['Tone', 'Mark', 'Description', 'Example'],
            ['1st', 'ā', 'High, flat', 'mā (mother)'],
            ['2nd', 'á', 'Rising', 'má (hemp)'],
            ['3rd', 'ǎ', 'Dipping (falls then rises)', 'mǎ (horse)'],
            ['4th', 'à', 'Sharp fall', 'mà (scold)'],
            ['Neutral', 'a', 'Short, light', 'ma (question word)'],
          ]},
          { type: 'note', text: 'The same syllable with different tones has completely different meanings. "Mā ma mǎ ma" = "Mother scolds the horse". Tone is not optional.' },
        ],
        exercises: [
          { question: 'How many tones does Mandarin have?', answer: '4 main tones + 1 neutral tone.' },
          { question: 'What does mǎ (third tone) mean?', answer: 'Horse.' },
        ],
      },
      { slug: 'greetings', title: 'Greetings and Common Phrases', level: 'Beginner', duration: '30 min',
        objectives: ['Say hello and goodbye', 'Introduce yourself', 'Ask basic questions'],
        content: [
          { type: 'table', rows: [
            ['Chinese', 'Pinyin', 'English'],
            ['你好', 'nǐ hǎo', 'Hello'],
            ['您好', 'nín hǎo', 'Hello (formal)'],
            ['早上好', 'zǎoshang hǎo', 'Good morning'],
            ['晚安', 'wǎn\'ān', 'Good night'],
            ['再见', 'zàijiàn', 'Goodbye'],
            ['谢谢', 'xièxie', 'Thank you'],
            ['不客气', 'bú kèqì', 'You\'re welcome'],
            ['我叫…', 'wǒ jiào...', 'My name is...'],
            ['你叫什么名字？', 'nǐ jiào shénme míngzi?', 'What is your name?'],
          ]},
        ],
        exercises: [
          { question: 'How do you say "Thank you" in Mandarin?', answer: '谢谢 (xièxie).' },
          { question: 'How do you say "Goodbye"?', answer: '再见 (zàijiàn).' },
        ],
      },
      { slug: 'numbers', title: 'Numbers 1–100', level: 'Beginner', duration: '25 min',
        objectives: ['Count 1–10', 'Form 11–99', 'Say 100 and 1000'],
        content: [
          { type: 'table', rows: [
            ['1 一 yī', '2 二 èr', '3 三 sān', '4 四 sì', '5 五 wǔ'],
            ['6 六 liù', '7 七 qī', '8 八 bā', '9 九 jiǔ', '10 十 shí'],
          ]},
          { type: 'p', text: 'From 11: 十一 (10+1), 十二 (10+2), … 二十 (2×10), 二十一 (2×10+1). 100 = 一百 (yībǎi). 1000 = 一千 (yīqiān). Chinese numbers are mathematical — much easier than European languages.' },
        ],
        exercises: [
          { question: 'How do you say 15?', answer: '十五 (shíwǔ = 10+5).' },
          { question: 'How do you say 42?', answer: '四十二 (sìshí\'èr = 4×10+2).' },
        ],
      },
    ],
  },
  {
    slug: 'swahili', name: 'Swahili', nativeName: 'Kiswahili', flag: '🇹🇿',
    description: 'Most widely spoken language in East Africa. Official in Tanzania, Kenya, and Uganda.',
    speakers: '200 million',
    lessons: [
      { slug: 'greetings', title: 'Greetings (Salamu)', level: 'Beginner', duration: '25 min',
        objectives: ['Say hello and goodbye', 'Ask how someone is', 'Use polite expressions'],
        content: [
          { type: 'table', rows: [
            ['Kiswahili', 'English'],
            ['Habari', 'How are you? / Hello'],
            ['Nzuri', 'Fine / Good'],
            ['Habari ya asubuhi', 'Good morning'],
            ['Habari ya jioni', 'Good evening'],
            ['Kwaheri', 'Goodbye'],
            ['Asante', 'Thank you'],
            ['Karibu', 'Welcome'],
            ['Tafadhali', 'Please'],
            ['Ndiyo', 'Yes'],
            ['Hapana', 'No'],
          ]},
        ],
        exercises: [
          { question: 'How do you say "Thank you" in Swahili?', answer: 'Asante.' },
          { question: 'What does "Karibu" mean?', answer: 'Welcome.' },
        ],
      },
      { slug: 'numbers', title: 'Numbers 1–20 (Nambari)', level: 'Beginner', duration: '25 min',
        objectives: ['Count 1–10', 'Form 11–20'],
        content: [
          { type: 'table', rows: [
            ['1 moja', '2 mbili', '3 tatu', '4 nne', '5 tano'],
            ['6 sita', '7 saba', '8 nane', '9 tisa', '10 kumi'],
            ['11 kumi na moja', '12 kumi na mbili', '15 kumi na tano', '20 ishirini'],
          ]},
          { type: 'p', text: 'From 11 to 19, use "kumi na" (ten and) + the digit. 30 = thelathini, 40 = arobaini, 50 = hamsini, 60 = sitini, 70 = sabini, 80 = themanini, 90 = tisini, 100 = mia moja.' },
        ],
        exercises: [
          { question: 'How do you say 7?', answer: 'Saba.' },
          { question: 'How do you say 15?', answer: 'Kumi na tano (10+5).' },
        ],
      },
      { slug: 'family', title: 'Family Words (Familia)', level: 'Beginner', duration: '30 min',
        objectives: ['Name family members', 'Use possessive markers', 'Describe your family'],
        content: [
          { type: 'table', rows: [
            ['Kiswahili', 'English'],
            ['Baba', 'Father'],
            ['Mama', 'Mother'],
            ['Kaka', 'Brother'],
            ['Dada', 'Sister'],
            ['Babu', 'Grandfather'],
            ['Bibi', 'Grandmother'],
            ['Mtoto', 'Child'],
            ['Mume', 'Husband'],
            ['Mke', 'Wife'],
            ['Familia', 'Family'],
          ]},
          { type: 'p', text: 'Possessives: "yangu" = my, "yako" = your, "yake" = his/her. Example: "Baba yangu" = my father. "Dada yako" = your sister.' },
        ],
        exercises: [
          { question: 'How do you say "my mother"?', answer: 'Mama yangu.' },
          { question: 'What is the Swahili word for "brother"?', answer: 'Kaka.' },
        ],
      },
    ],
  },
  {
    slug: 'luganda', name: 'Luganda', nativeName: 'Oluganda', flag: '🇺🇬',
    description: 'Major language of Uganda, spoken by the Baganda people and used as a lingua franca in central Uganda.',
    speakers: '10 million',
    lessons: [
      { slug: 'greetings', title: 'Greetings (Okulamusa)', level: 'Beginner', duration: '25 min',
        objectives: ['Say hello and goodbye', 'Ask how someone is', 'Use polite expressions'],
        content: [
          { type: 'table', rows: [
            ['Luganda', 'English'],
            ['Oli otya?', 'How are you? (singular)'],
            ['Muli mutya?', 'How are you? (plural/formal)'],
            ['Bulungi', 'Fine / Well'],
            ['Wasuze otya?', 'Good morning (how did you sleep?)'],
            ['Osiibye otya?', 'Good afternoon/evening'],
            ['Weebale', 'Thank you'],
            ['Weebale nnyo', 'Thank you very much'],
            ['Kale', 'Okay / Alright'],
            ['Eeh', 'Yes'],
            ['Nedda', 'No'],
          ]},
          { type: 'note', text: 'The greeting "Wasuze otya?" literally means "How did you spend the night?" — very common in the morning. The reply is "Bulungi" (well).' },
        ],
        exercises: [
          { question: 'How do you say "Thank you" in Luganda?', answer: 'Weebale.' },
          { question: 'What does "Oli otya?" mean?', answer: 'How are you? (singular).' },
        ],
      },
      { slug: 'numbers', title: 'Numbers 1–10 (Ennamba)', level: 'Beginner', duration: '20 min',
        objectives: ['Count 1–10 in Luganda', 'Recognise the class prefix system'],
        content: [
          { type: 'table', rows: [
            ['1 emu', '2 bbiri', '3 ssatu', '4 nnya', '5 ttaano'],
            ['6 mukaaga', '7 musanvu', '8 munaana', '9 mwenda', '10 kkumi'],
          ]},
          { type: 'p', text: 'Luganda numbers depend on the noun class of what you are counting. The numbers above are for counting objects in the basic class. For people, you use "omu" for 1, "babiri" for 2, etc.' },
        ],
        exercises: [
          { question: 'How do you say 5?', answer: 'Ttaano.' },
          { question: 'How do you say 10?', answer: 'Kkumi.' },
        ],
      },
      { slug: 'family', title: 'Family Words (Amaka)', level: 'Beginner', duration: '25 min',
        objectives: ['Name family members', 'Use basic possessive markers'],
        content: [
          { type: 'table', rows: [
            ['Luganda', 'English'],
            ['Taata', 'Father'],
            ['Maama', 'Mother'],
            ['Ow\'oluganda', 'Brother / relative'],
            ['Muganda wange', 'My brother/sister'],
            ['Jjajja', 'Grandparent'],
            ['Omwana', 'Child'],
            ['Omuntu', 'Person'],
            ['Amaka', 'Home / family'],
          ]},
        ],
        exercises: [
          { question: 'How do you say "mother"?', answer: 'Maama.' },
          { question: 'What does "Amaka" mean?', answer: 'Home / family.' },
        ],
      },
    ],
  },
]

export function getLanguage(slug: string) { return languages.find((l) => l.slug === slug) }
export function getLangLesson(langSlug: string, lessonSlug: string) {
  const lang = getLanguage(langSlug)
  return lang?.lessons.find((l) => l.slug === lessonSlug)
}
