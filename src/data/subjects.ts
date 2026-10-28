export type SubjectLesson = {
  slug: string
  title: string
  readMin: number
  content: { type: 'p' | 'h2' | 'h3' | 'ul' | 'ol' | 'code' | 'note'; text?: string; items?: string[]; code?: string }[]
}

export type Subject = {
  slug: string
  title: string
  tagline: string
  icon: string
  lessons: SubjectLesson[]
}

export const subjects: Subject[] = [
  // ============ LEARN ENGLISH ============
  {
    slug: 'english',
    title: 'Learn English',
    tagline: 'Grammar, vocabulary and business English for everyday life.',
    icon: '🗣️',
    lessons: [
      {
        slug: 'business-english-phrases',
        title: '10 Business English Phrases Everyone Should Know',
        readMin: 5,
        content: [
          { type: 'p', text: 'Business English is different from everyday English. It is more formal, more polite, and relies on a small set of set phrases that appear again and again. Learn these ten and you will sound professional in emails, meetings and interviews.' },
          { type: 'h2', text: '1. "Please find attached…"' },
          { type: 'p', text: 'Used when you attach a file to an email. Example: "Please find attached my CV for your consideration."' },
          { type: 'h2', text: '2. "I am writing to follow up on…"' },
          { type: 'p', text: 'Used when you are writing to remind someone about something. Example: "I am writing to follow up on my application sent last week."' },
          { type: 'h2', text: '3. "Thank you for your prompt response."' },
          { type: 'p', text: 'A polite way to thank someone for replying quickly.' },
          { type: 'h2', text: '4. "Could you please clarify…?"' },
          { type: 'p', text: 'Asking someone to explain something more clearly without sounding rude. Much better than "I don\'t understand."' },
          { type: 'h2', text: '5. "I look forward to hearing from you."' },
          { type: 'p', text: 'A standard way to end a formal email.' },
          { type: 'h2', text: '6. "Please do not hesitate to contact me if you have any questions."' },
          { type: 'p', text: 'Common closing line. It signals that you are open to further communication.' },
          { type: 'h2', text: '7. "Let\'s schedule a call to discuss this further."' },
          { type: 'p', text: 'Used when a topic is too complex for email. Works well in email and chat.' },
          { type: 'h2', text: '8. "I appreciate your patience."' },
          { type: 'p', text: 'Say this when something has taken longer than expected. It is polite and disarming.' },
          { type: 'h2', text: '9. "Could we push this to next week?"' },
          { type: 'p', text: 'A polite way to postpone something without saying "I cannot do it."' },
          { type: 'h2', text: '10. "Best regards,"' },
          { type: 'p', text: 'The standard sign-off for a formal email. Use "Regards" for slightly less formal, and "Kind regards" for slightly warmer.' },
          { type: 'note', text: 'Practice tip: write one short email per day using at least three of these phrases. In two weeks they will feel natural.' }
        ]
      },
      {
        slug: 'common-grammar-mistakes',
        title: '10 Common English Grammar Mistakes and How to Fix Them',
        readMin: 6,
        content: [
          { type: 'p', text: 'These are the ten grammar mistakes I see most often in emails, CVs and messages. Fixing them takes an afternoon and instantly makes your writing look more professional.' },
          { type: 'h2', text: '1. "Their / There / They\'re"' },
          { type: 'ul', items: [
            'Their = belonging to them ("their book")',
            'There = a place ("over there")',
            'They\'re = they are ("they\'re coming")'
          ]},
          { type: 'h2', text: '2. "Your / You\'re"' },
          { type: 'ul', items: [
            'Your = belonging to you ("your phone")',
            'You\'re = you are ("you\'re right")'
          ]},
          { type: 'h2', text: '3. "Its / It\'s"' },
          { type: 'ul', items: [
            'Its = belonging to it ("the phone lost its signal")',
            'It\'s = it is ("it\'s raining")'
          ]},
          { type: 'h2', text: '4. "Could of / Should of / Would of"' },
          { type: 'p', text: 'These are always wrong. The correct forms are "could have", "should have", "would have". "Of" is not a verb.' },
          { type: 'h2', text: '5. "Me and my friend"' },
          { type: 'p', text: 'When the group is the subject, put yourself second: "My friend and I went to the market." Not "Me and my friend went."' },
          { type: 'h2', text: '6. "I seen it"' },
          { type: 'p', text: 'Correct: "I saw it" (past) or "I have seen it" (present perfect). "I seen it" is never correct in standard English.' },
          { type: 'h2', text: '7. "Less / Fewer"' },
          { type: 'ul', items: [
            'Fewer = countable things ("fewer students")',
            'Less = uncountable things ("less water")'
          ]},
          { type: 'h2', text: '8. "Then / Than"' },
          { type: 'ul', items: [
            'Then = time ("first this, then that")',
            'Than = comparison ("bigger than")'
          ]},
          { type: 'h2', text: '9. "Affect / Effect"' },
          { type: 'ul', items: [
            'Affect = verb, to influence ("the rain affected the game")',
            'Effect = noun, the result ("the effect was huge")'
          ]},
          { type: 'h2', text: '10. Missing commas after introductory phrases' },
          { type: 'p', text: 'If a sentence starts with a phrase like "After the meeting" or "In my opinion", add a comma. Correct: "After the meeting, we went home." Not: "After the meeting we went home."' },
          { type: 'note', text: 'Quick win: read your message out loud before sending. Most grammar mistakes become obvious when spoken.' }
        ]
      },
      {
        slug: 'how-to-write-a-professional-email',
        title: 'How to Write a Professional Email (Step-by-Step)',
        readMin: 4,
        content: [
          { type: 'p', text: 'A professional email is not about big words. It is about clarity, structure, and respect for the reader\'s time. Follow this structure every time and your emails will get answered.' },
          { type: 'h2', text: 'Step 1: Clear subject line' },
          { type: 'p', text: 'The subject line decides whether the email is opened. Be specific. Bad: "Hello". Good: "Application for Junior Developer role – John Okello". Bad: "Question". Good: "Question about invoice #4821 from October 15".' },
          { type: 'h2', text: 'Step 2: Greeting' },
          { type: 'p', text: 'Use "Dear Mr. Okello" or "Dear Ms. Nakato" for formal. Use "Hi John" if you know the person. Never use "Hey" in a professional context.' },
          { type: 'h2', text: 'Step 3: State the purpose in the first sentence' },
          { type: 'p', text: 'Do not build up to your point. State it. Example: "I am writing to apply for the Junior Developer position advertised on LinkedIn."' },
          { type: 'h2', text: 'Step 4: Details in short paragraphs' },
          { type: 'p', text: 'One idea per paragraph. Maximum 3–4 lines per paragraph. Use bullet points for lists. Busy people scan; make it easy.' },
          { type: 'h2', text: 'Step 5: Clear call to action' },
          { type: 'p', text: 'Tell them exactly what you want them to do. "Please let me know if you would like my CV." Not "Looking forward to hearing from you" as the only ask.' },
          { type: 'h2', text: 'Step 6: Professional sign-off' },
          { type: 'p', text: '"Best regards," or "Kind regards," followed by your name. Add your phone number in a signature if it is a business email.' },
          { type: 'note', text: 'Always proofread before sending. Reading the email once out loud catches most errors.' }
        ]
      }
    ]
  },

  // ============ LEARN MATH ============
  {
    slug: 'math',
    title: 'Learn Math',
    tagline: 'Fractions, percentages and exam-ready math.',
    icon: '📐',
    lessons: [
      {
        slug: 'percentages-in-10-minutes',
        title: 'Percentages in 10 Minutes',
        readMin: 4,
        content: [
          { type: 'p', text: 'Percentages appear everywhere: discounts, interest rates, exam marks, tax. Learn the four rules below and you will never be confused again.' },
          { type: 'h2', text: 'Rule 1: "Percent" means "per hundred"' },
          { type: 'p', text: '20% means 20 out of 100, which is the same as 0.20 or 20/100.' },
          { type: 'h2', text: 'Rule 2: To find X% of a number, multiply by X/100' },
          { type: 'p', text: 'Example: 25% of 80 = 80 × 0.25 = 20.' },
          { type: 'h2', text: 'Rule 3: To find what percent A is of B, compute (A/B) × 100' },
          { type: 'p', text: 'Example: 15 out of 60 = (15/60) × 100 = 25%.' },
          { type: 'h2', text: 'Rule 4: Percent change = (new − old) / old × 100' },
          { type: 'p', text: 'Example: price goes from 50,000 to 60,000. Change = (60,000 − 50,000) / 50,000 × 100 = 20% increase.' },
          { type: 'h2', text: 'Quick mental math tricks' },
          { type: 'ul', items: [
            '10% of anything: move decimal one place left (10% of 450 = 45)',
            '5% = half of 10%',
            '15% = 10% + 5%',
            '20% = 2 × 10%',
            '25% = divide by 4'
          ]},
          { type: 'note', text: 'Practice: if a shirt costs 80,000 and is discounted 15%, what is the final price? Answer: 15% of 80,000 = 12,000, so final price = 68,000.' }
        ]
      },
      {
        slug: 'fractions-made-easy',
        title: 'Fractions Made Easy',
        readMin: 5,
        content: [
          { type: 'p', text: 'Fractions are the most misunderstood topic in primary and secondary math. They are actually simple if you learn the four operations one at a time.' },
          { type: 'h2', text: 'What a fraction is' },
          { type: 'p', text: 'A fraction like 3/4 means "3 parts out of 4". The top number (3) is the numerator. The bottom number (4) is the denominator.' },
          { type: 'h2', text: 'Adding and subtracting (same denominator)' },
          { type: 'p', text: 'If the bottoms are the same, just add or subtract the tops: 2/5 + 1/5 = 3/5.' },
          { type: 'h2', text: 'Adding and subtracting (different denominators)' },
          { type: 'p', text: 'Find a common denominator first: 1/2 + 1/3. Common denominator is 6. Convert: 3/6 + 2/6 = 5/6.' },
          { type: 'h2', text: 'Multiplying fractions' },
          { type: 'p', text: 'Multiply tops together, multiply bottoms together. 2/3 × 3/4 = 6/12 = 1/2.' },
          { type: 'h2', text: 'Dividing fractions' },
          { type: 'p', text: 'Flip the second fraction and multiply. 2/3 ÷ 4/5 = 2/3 × 5/4 = 10/12 = 5/6.' },
          { type: 'note', text: 'The flip-and-multiply trick is called "multiplying by the reciprocal". Once you remember it, dividing fractions becomes as easy as multiplying.' }
        ]
      },
      {
        slug: 'algebra-basics',
        title: 'Algebra Basics: Solving for X',
        readMin: 5,
        content: [
          { type: 'p', text: 'Algebra is about finding an unknown number. The unknown is usually written as a letter like x. Solving an equation means finding the value of x that makes the equation true.' },
          { type: 'h2', text: 'The golden rule' },
          { type: 'p', text: 'Whatever you do to one side of the equation, do to the other. This keeps the equation balanced.' },
          { type: 'h2', text: 'Example 1: simple' },
          { type: 'p', text: 'Solve x + 5 = 12. Subtract 5 from both sides: x = 12 − 5 = 7.' },
          { type: 'h2', text: 'Example 2: multiply' },
          { type: 'p', text: 'Solve 3x = 15. Divide both sides by 3: x = 15 / 3 = 5.' },
          { type: 'h2', text: 'Example 3: two steps' },
          { type: 'p', text: 'Solve 2x + 4 = 10. First subtract 4: 2x = 6. Then divide by 2: x = 3.' },
          { type: 'h2', text: 'Example 4: x on both sides' },
          { type: 'p', text: 'Solve 3x + 2 = x + 10. Subtract x from both sides: 2x + 2 = 10. Subtract 2: 2x = 8. Divide by 2: x = 4.' },
          { type: 'note', text: 'Check your answer by substituting x back into the original equation. If both sides match, you are right.' }
        ]
      }
    ]
  },

  // ============ LEARN EXCEL ============
  {
    slug: 'excel',
    title: 'Learn Excel',
    tagline: 'Formulas, charts and shortcuts for real work.',
    icon: '📊',
    lessons: [
      {
        slug: 'excel-vlookup-beginner',
        title: 'VLOOKUP for Beginners',
        readMin: 5,
        content: [
          { type: 'p', text: 'VLOOKUP is the most-used Excel formula in offices around the world. It looks up a value in one column and returns a related value from another column. This single formula saves hours of manual searching.' },
          { type: 'h2', text: 'The syntax' },
          { type: 'p', text: 'VLOOKUP(lookup_value, table_range, column_number, exact_match)' },
          { type: 'ul', items: [
            'lookup_value = what you are searching for (e.g. a name)',
            'table_range = the range where you are searching',
            'column_number = which column of the range to return',
            'exact_match = FALSE for exact match (use this 99% of the time)'
          ]},
          { type: 'h2', text: 'Simple example' },
          { type: 'p', text: 'You have a list of employees in columns A–C: ID (A), Name (B), Salary (C). You want to find the salary of employee "John". Formula: =VLOOKUP("John", A2:C100, 3, FALSE). Excel searches column A for "John", then returns the value in column 3 (Salary).' },
          { type: 'h2', text: 'Common mistake' },
          { type: 'p', text: 'VLOOKUP always searches the FIRST column of your range. If your lookup column is not the first, move it or use INDEX + MATCH.' },
          { type: 'note', text: 'Practice: build a small table of 5 students with names and scores, then use VLOOKUP to look up each score.' }
        ]
      },
      {
        slug: 'excel-charts-beginner',
        title: 'How to Make Your First Excel Chart',
        readMin: 4,
        content: [
          { type: 'p', text: 'Charts turn rows of numbers into something people can actually understand in seconds. Every report, proposal and business plan needs at least one chart.' },
          { type: 'h2', text: 'Step 1: Prepare clean data' },
          { type: 'p', text: 'Your data should be in two columns: labels (e.g. months) and values (e.g. sales). Column A = labels, column B = values. No blank rows inside the data.' },
          { type: 'h2', text: 'Step 2: Select the data' },
          { type: 'p', text: 'Click on the top-left cell and drag to the bottom-right. Include the header row so Excel knows what the chart is about.' },
          { type: 'h2', text: 'Step 3: Insert a chart' },
          { type: 'p', text: 'Go to Insert → Recommended Charts. Excel suggests chart types that fit your data. For monthly sales, a bar chart or column chart works well. For trends over time, a line chart is best.' },
          { type: 'h2', text: 'Step 4: Customize' },
          { type: 'p', text: 'Click the chart title and type a meaningful name. "Monthly Sales 2026" is better than "Chart 1". Add axis labels if helpful.' },
          { type: 'h2', text: 'Which chart for which data?' },
          { type: 'ul', items: [
            'Bar / column chart: comparing categories',
            'Line chart: trends over time',
            'Pie chart: parts of a whole (use sparingly)',
            'Scatter plot: relationship between two variables'
          ]},
          { type: 'note', text: 'Charts are worth more than tables in most reports. If you have numbers, add a chart.' }
        ]
      },
      {
        slug: 'excel-10-shortcuts',
        title: '10 Excel Shortcuts That Save Hours',
        readMin: 3,
        content: [
          { type: 'p', text: 'Excel shortcuts separate beginners from power users. Learn these ten and you will work visibly faster.' },
          { type: 'h2', text: 'The ten shortcuts' },
          { type: 'ol', items: [
            'Ctrl + Arrow key — jump to the edge of data in that direction',
            'Ctrl + Shift + Arrow — select all data in that direction',
            'Ctrl + Home — jump to A1',
            'Ctrl + End — jump to the last used cell',
            'Ctrl + ; — insert today\'s date',
            'Ctrl + Shift + L — toggle filters on',
            'Alt + = — auto-sum the selected column',
            'Ctrl + D — fill down the cell above',
            'F2 — edit the current cell',
            'F4 — repeat the last action, or in a formula, toggle absolute references'
          ]},
          { type: 'h2', text: 'How to learn them fast' },
          { type: 'p', text: 'Do not try to learn all ten at once. Pick one per week. Use it deliberately every day until it is muscle memory, then move to the next. In ten weeks you will be faster than 90% of Excel users.' }
        ]
      }
    ]
  },

  // ============ DIGITAL SKILLS ============
  {
    slug: 'digital-skills',
    title: 'Digital Skills',
    tagline: 'Everyday skills for using the internet safely and effectively.',
    icon: '💻',
    lessons: [
      {
        slug: 'create-professional-email-address',
        title: 'Create a Professional Email Address',
        readMin: 3,
        content: [
          { type: 'p', text: 'Your email address is often the first thing people see when you contact them. An unprofessional email loses opportunities before you write a word.' },
          { type: 'h2', text: 'Rules for a professional email' },
          { type: 'ul', items: [
            'Use your real first name and last name',
            'Separate with a dot or underscore: john.okello@gmail.com',
            'Avoid numbers unless necessary (JohnOkello2004 looks unprofessional)',
            'Avoid nicknames (sweetgirl2003@ is not good for job applications)',
            'Use Gmail or Outlook, not weird domains you do not own'
          ]},
          { type: 'h2', text: 'Examples' },
          { type: 'p', text: 'Good: john.okello@gmail.com, jokello@outlook.com, okello.john@gmail.com. Bad: king_john@gmail.com, johnny99@, sweet_boy_2003@.' },
          { type: 'h2', text: 'If your name is taken' },
          { type: 'p', text: 'Add a middle initial (john.m.okello@gmail.com), add your city (john.okello.ug@gmail.com), or add a very short word like "mail" (john.okello.mail@gmail.com). Do not add random years.' },
          { type: 'note', text: 'This one small change makes a real difference on job applications.' }
        ]
      },
      {
        slug: 'stay-safe-online-basics',
        title: 'How to Stay Safe Online: 7 Essentials',
        readMin: 5,
        content: [
          { type: 'p', text: 'The internet is not dangerous in general — it is dangerous in specific ways that are easy to avoid once you know them. These seven habits prevent almost every attack.' },
          { type: 'h2', text: '1. Use a password manager' },
          { type: 'p', text: 'Bitwarden is free. It generates and stores a random password for every site. You only remember one master password. This alone stops most account theft.' },
          { type: 'h2', text: '2. Turn on 2FA everywhere' },
          { type: 'p', text: 'Two-factor authentication means logging in needs a code from your phone in addition to your password. Enable it on email, banking, Facebook, WhatsApp, GitHub.' },
          { type: 'h2', text: '3. Recognize phishing' },
          { type: 'p', text: 'Phishing is fake messages pretending to be from a bank or company. Red flags: urgency ("act within 24 hours"), a link that asks for your password, unusual sender address, poor spelling.' },
          { type: 'h2', text: '4. Look for HTTPS' },
          { type: 'p', text: 'Before entering a password, check the URL starts with https:// (with the padlock). Never enter personal information on a site that does not use HTTPS.' },
          { type: 'h2', text: '5. Keep software updated' },
          { type: 'p', text: 'Every update patches known security holes. Turn on automatic updates for your phone, laptop, browser and apps.' },
          { type: 'h2', text: '6. Do not reuse passwords' },
          { type: 'p', text: 'When one site is hacked, attackers try your password on every other site. A password manager makes this impossible because every password is different.' },
          { type: 'h2', text: '7. Back up your important files' },
          { type: 'p', text: 'Backups do not prevent an attack but they make it survivable. Keep documents in Google Drive or iCloud, and important photos on an external drive.' },
          { type: 'note', text: 'None of this costs money. All of it takes less than 30 minutes to set up.' }
        ]
      },
      {
        slug: 'google-docs-basics',
        title: 'Google Docs Basics: Write, Share, Comment',
        readMin: 4,
        content: [
          { type: 'p', text: 'Google Docs is a free online word processor. It auto-saves, works from any device, and lets several people edit the same document at once. This is why offices, schools and teams use it.' },
          { type: 'h2', text: 'Creating a document' },
          { type: 'p', text: 'Go to docs.google.com, sign in with your Gmail, and click the "Blank" template. The document opens and saves automatically — there is no Save button.' },
          { type: 'h2', text: 'Sharing' },
          { type: 'p', text: 'Click the blue "Share" button in the top right. You can give someone view-only access, comment access, or edit access. You can share with a specific email address, or make a link that anyone with the link can open.' },
          { type: 'h2', text: 'Comments' },
          { type: 'p', text: 'Select a piece of text and click the "comment" icon. A comment appears in the margin. The other person can reply, and you can resolve the comment when the issue is fixed.' },
          { type: 'h2', text: 'Version history' },
          { type: 'p', text: 'File → Version history → See version history. You can see every change made to the document and restore a previous version if something is broken.' },
          { type: 'h2', text: 'Export to Word or PDF' },
          { type: 'p', text: 'File → Download → choose Microsoft Word (.docx) or PDF. Use this when you need to send a file that is not a Google Doc link.' },
          { type: 'note', text: 'Google Docs is one of the most valuable free tools on the internet. Learn it well.' }
        ]
      }
    ]
  },

  // ============ BUSINESS & CAREER ============
  {
    slug: 'career',
    title: 'Business & Career',
    tagline: 'CVs, interviews and the practical side of earning money.',
    icon: '💼',
    lessons: [
      {
        slug: 'write-1-page-cv',
        title: 'How to Write a One-Page CV That Gets Interviews',
        readMin: 6,
        content: [
          { type: 'p', text: 'Recruiters spend seven seconds scanning a CV. In seven seconds, they either put you in the "interview" pile or the "reject" pile. Your CV needs to pass that seven-second test.' },
          { type: 'h2', text: 'Rule 1: One page' },
          { type: 'p', text: 'For anyone with less than 5 years of experience, one page is enough. Two pages makes you look inexperienced and hides your strengths.' },
          { type: 'h2', text: 'Rule 2: Structure' },
          { type: 'ol', items: [
            'Name + contact info (email, phone, city, LinkedIn)',
            'One-line summary of who you are',
            'Skills (technical and soft)',
            'Experience (most recent first)',
            'Education',
            'Projects or certifications'
          ]},
          { type: 'h2', text: 'Rule 3: Lead with impact, not tasks' },
          { type: 'p', text: 'Bad: "Responsible for managing social media." Good: "Grew Instagram from 200 to 3,200 followers in 4 months by posting 3× weekly and running 2 paid campaigns."' },
          { type: 'h2', text: 'Rule 4: No photo, no age, no marital status' },
          { type: 'p', text: 'Modern CVs do not include these. They invite discrimination and waste space.' },
          { type: 'h2', text: 'Rule 5: Use keywords from the job description' },
          { type: 'p', text: 'Many companies use software to filter CVs by keywords. If the job says "React, TypeScript, REST APIs", those exact words must appear in your CV.' },
          { type: 'h2', text: 'Rule 6: Export as PDF' },
          { type: 'p', text: 'Word files can break formatting on another computer. PDF looks the same everywhere. Name the file "John_Okello_CV.pdf", not "cv.docx".' },
          { type: 'note', text: 'Ask 3 people to read your CV and tell you what they understood in 7 seconds. If they cannot describe your main strength, the CV needs work.' }
        ]
      },
      {
        slug: 'tell-me-about-yourself-answer',
        title: 'How to Answer "Tell Me About Yourself" in Interviews',
        readMin: 4,
        content: [
          { type: 'p', text: 'This is the first question in almost every interview, and most people give a bad answer. They either ramble about their life story or freeze up and give one sentence. There is a formula.' },
          { type: 'h2', text: 'The formula: Present → Past → Future' },
          { type: 'p', text: 'Present: what you do now. Past: how you got here. Future: what you want next. This is what interviewers expect to hear.' },
          { type: 'h2', text: 'Example' },
          { type: 'p', text: '"I am a junior frontend developer based in Kampala. I got into coding during the pandemic by teaching myself JavaScript from free online resources, and I have spent the last two years building React apps. I have shipped 5 personal projects and one for a small local business. I am now looking for a role where I can grow as part of a small team and get real feedback from senior developers."' },
          { type: 'h2', text: 'What not to say' },
          { type: 'ul', items: [
            'Your whole childhood or personal life',
            '"I am a hard worker and I love challenges" — too generic',
            '"I do not know where to start" — kills the interview',
            '"My biggest weakness is that I work too hard" — interviewer has heard this a thousand times'
          ]},
          { type: 'h2', text: 'Length' },
          { type: 'p', text: 'Sixty to ninety seconds. Long enough to show substance, short enough to leave room for questions.' },
          { type: 'note', text: 'Write your answer down and practice it out loud. Not memorized word-for-word — just smooth enough that you are not stumbling.' }
        ]
      },
      {
        slug: 'price-your-product',
        title: 'How to Price Your Product or Service',
        readMin: 5,
        content: [
          { type: 'p', text: 'Most small businesses in Uganda either price too low (and fail slowly) or too high (and never get customers). Correct pricing is a skill, not a guess.' },
          { type: 'h2', text: 'Step 1: Know your cost' },
          { type: 'p', text: 'What does it cost you, in materials and time, to deliver one unit? If you make a bracelet, cost = thread + beads + packaging + (hours × your hourly rate).' },
          { type: 'h2', text: 'Step 2: Know your floor' },
          { type: 'p', text: 'Your price must be at least 2× your cost. If it costs 10,000 UGX, the minimum price is 20,000 UGX. This leaves room for overheads, slow months, and profit.' },
          { type: 'h2', text: 'Step 3: Research your market' },
          { type: 'p', text: 'Look at 5 similar products. What do they charge? If the market price is 15,000 and your floor is 20,000, the business idea does not work — reduce cost or increase value.' },
          { type: 'h2', text: 'Step 4: Position yourself' },
          { type: 'p', text: 'Cheapest is not always best. Premium packaging, faster delivery, and a good story justify a 30–50% higher price.' },
          { type: 'h2', text: 'Step 5: Test and adjust' },
          { type: 'p', text: 'If nobody buys, the price is too high or the value is not clear. If everybody buys instantly, the price is too low. Change the price, watch sales for 2 weeks, adjust again.' },
          { type: 'note', text: 'Pricing is not permanent. Change it based on data, not fear.' }
        ]
      }
    ]
  },

  // ============ AI TOOLS ============
  {
    slug: 'ai-tools',
    title: 'Learn AI Tools',
    tagline: 'Use ChatGPT, Claude and other AI tools effectively.',
    icon: '🤖',
    lessons: [
      {
        slug: 'chatgpt-basics',
        title: 'ChatGPT Basics: What It Is and How to Use It',
        readMin: 4,
        content: [
          { type: 'p', text: 'ChatGPT is a free AI assistant made by OpenAI. You type a message; it types a reply. It can help you write, study, brainstorm, code, plan and translate. Used well, it saves hours per week. Used poorly, it makes you less skilled.' },
          { type: 'h2', text: 'How to use it well' },
          { type: 'ul', items: [
            'Be specific: "Explain how recursion works in JavaScript with an example" beats "help me with JS"',
            'Give context: "I am a beginner learning React. Explain hooks like I am 15."',
            'Ask for structure: "Give me 5 bullet points, each under 15 words"',
            'Follow up: if the answer is confusing, say "That was confusing, try again more simply"'
          ]},
          { type: 'h2', text: 'How to use it badly' },
          { type: 'ul', items: [
            'Asking it to do your homework — you learn nothing',
            'Trusting it without checking — it can be confidently wrong',
            'Using it as a search engine for facts — some answers are out of date or made up'
          ]},
          { type: 'h2', text: 'Free versus paid' },
          { type: 'p', text: 'The free version uses an older model and is slower, but it is excellent for learning. The paid version (ChatGPT Plus) uses newer models, is faster, and can read images and longer documents.' },
          { type: 'note', text: 'The best use of AI while learning: ask it to explain concepts, generate practice problems, review your code, and quiz you.' }
        ]
      },
      {
        slug: 'write-better-prompts',
        title: 'How to Write Better AI Prompts',
        readMin: 5,
        content: [
          { type: 'p', text: 'The difference between a weak AI answer and a strong one is almost always the prompt. Better prompts get better answers, every time.' },
          { type: 'h2', text: 'The four parts of a strong prompt' },
          { type: 'ol', items: [
            'Role: tell the AI who to be ("You are a patient math tutor")',
            'Context: give it relevant information ("I am a 14-year-old student")',
            'Task: what you want ("explain how percentages work")',
            'Format: how you want it ("use an example and give 3 practice questions")'
          ]},
          { type: 'h2', text: 'Weak vs strong prompt' },
          { type: 'p', text: 'Weak: "Help me with percentages." Strong: "You are a patient math tutor. I am a 14-year-old student learning percentages. Explain what a percentage is in 3 sentences, then give me 5 practice questions with answers at the end. Use simple language and one real-life example."' },
          { type: 'h2', text: 'Iterate' },
          { type: 'p', text: 'The first answer is almost never the best. Reply with "Can you make that simpler?", "Can you add an example?", "Can you give 3 more practice questions?" Keep iterating until the answer is exactly what you need.' },
          { type: 'note', text: 'Treat AI like a smart but literal assistant. It does exactly what you ask, not what you meant. Be explicit.' }
        ]
      },
      {
        slug: 'use-ai-to-study',
        title: 'Using AI to Study More Effectively',
        readMin: 4,
        content: [
          { type: 'p', text: 'AI can dramatically speed up learning — if you use it as a tutor, not as a homework machine. Here are the five best study uses.' },
          { type: 'h2', text: '1. Explain concepts at your level' },
          { type: 'p', text: '"Explain photosynthesis as if I am 10" or "explain it as if I am in secondary school" gives you the same concept at the right depth.' },
          { type: 'h2', text: '2. Generate practice questions' },
          { type: 'p', text: '"Give me 10 practice questions on algebra with answers at the end" is a personalized workbook on demand.' },
          { type: 'h2', text: '3. Check your answers' },
          { type: 'p', text: 'Paste your answer and ask "Is this correct? If not, what is wrong?" This catches mistakes immediately, so you do not learn them wrong.' },
          { type: 'h2', text: '4. Summarize long texts' },
          { type: 'p', text: 'Paste a chapter and ask "Summarize this in 5 bullet points." Use this to preview material before reading deeply.' },
          { type: 'h2', text: '5. Quiz yourself' },
          { type: 'p', text: '"Ask me 5 questions on this topic, one at a time. Wait for my answer before giving the next question." This is active recall — one of the most effective study techniques.' },
          { type: 'h2', text: 'The rule that matters' },
          { type: 'p', text: 'Use AI to understand, not to copy. If you copy an answer, you learn nothing. If you read an answer, understand it, and rewrite it in your own words, you learn.' },
          { type: 'note', text: 'AI is the most powerful tutor in history if you use it right. Use it as a tutor, not a cheat code.' }
        ]
      }
    ]
  }
]

export function getSubject(slug: string): Subject | undefined {
  return subjects.find((s) => s.slug === slug)
}

export function getSubjectLesson(subjectSlug: string, lessonSlug: string) {
  const subject = getSubject(subjectSlug)
  if (!subject) return undefined
  return subject.lessons.find((l) => l.slug === lessonSlug)
}
