export type Course = {
  slug: string
  title: string
  category: string
  level: string
  duration: string
  description: string
  objectives: string[]
  curriculum: string[]
  priceUSD: number
  image: string
}

const IMG = {
  code: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=800&q=80&auto=format&fit=crop',
  terminal: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800&q=80&auto=format&fit=crop',
  editor: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80&auto=format&fit=crop',
  react: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80&auto=format&fit=crop',
  server: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80&auto=format&fit=crop',
  security: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80&auto=format&fit=crop',
  network: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80&auto=format&fit=crop',
  git: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&q=80&auto=format&fit=crop',
}

const c = (
  slug: string,
  title: string,
  category: string,
  level: string,
  duration: string,
  priceUSD: number,
  image: string,
  description: string,
  objectives: string[],
  curriculum: string[],
): Course => ({ slug, title, category, level, duration, priceUSD, image, description, objectives, curriculum })

export const courses: Course[] = [
  // ===== Programming =====
  c('javascript-fundamentals', 'JavaScript Fundamentals', 'Programming', 'Beginner', '6 weeks | 24 lessons', 20, IMG.code,
    'Learn the language that powers every website. Variables, functions, arrays, objects, the DOM, and modern syntax.',
    ['Write and debug JavaScript', 'Understand scope and closures', 'Manipulate the DOM', 'Use async/await'],
    ['Getting set up', 'Variables and types', 'Functions and scope', 'Arrays and objects', 'The DOM', 'Async JavaScript', 'Final project']),

  c('python-for-beginners', 'Python for Beginners', 'Programming', 'Beginner', '8 weeks | 32 lessons', 20, IMG.terminal,
    'Python from first principles. Syntax, data structures, file I/O, error handling, and your first real programs.',
    ['Read and write Python fluently', 'Work with lists and dicts', 'Handle exceptions', 'Write small programs'],
    ['Installing Python', 'Your first script', 'Strings and numbers', 'Lists and dictionaries', 'Functions', 'Files', 'Projects']),

  c('typescript-essentials', 'TypeScript Essentials', 'Programming', 'Intermediate', '5 weeks | 20 lessons', 20, IMG.code,
    'Add type safety to JavaScript. Interfaces, generics, unions, and how to structure a TypeScript project.',
    ['Define interfaces and types', 'Use generics', 'Configure tsconfig', 'Migrate JS to TS'],
    ['Why types', 'Basic types', 'Interfaces', 'Generics', 'Union types', 'Tooling', 'Migration project']),

  c('java-programming', 'Java Programming', 'Programming', 'Beginner', '8 weeks | 30 lessons', 20, IMG.code,
    'Object-oriented programming with Java. Classes, inheritance, collections, and building your first real application.',
    ['Understand OOP', 'Use collections', 'Handle exceptions', 'Build a console app'],
    ['Setup and syntax', 'Classes and objects', 'Inheritance', 'Collections', 'Exceptions', 'Streams', 'Project']),

  c('c-programming-basics', 'C Programming Basics', 'Programming', 'Beginner', '4 weeks | 14 lessons', 5, IMG.terminal,
    'A short introduction to C. Pointers, memory, and the fundamentals that underpin every modern operating system.',
    ['Understand pointers', 'Manage memory', 'Compile with gcc', 'Write small C programs'],
    ['Setup and syntax', 'Variables and types', 'Pointers', 'Arrays and strings', 'Functions', 'Mini project']),

  c('cpp-programming', 'C++ Programming', 'Programming', 'Intermediate', '8 weeks | 30 lessons', 20, IMG.code,
    'Modern C++ with classes, templates, and the STL. Write efficient programs and understand memory management.',
    ['Use classes and templates', 'Work with the STL', 'Manage memory safely', 'Build efficient programs'],
    ['Setup', 'Classes', 'Templates', 'STL containers', 'Pointers and refs', 'RAII', 'Project']),

  c('csharp-fundamentals', 'C# Fundamentals', 'Programming', 'Intermediate', '6 weeks | 24 lessons', 20, IMG.code,
    'C# for the .NET ecosystem. Types, classes, LINQ, async, and building a small desktop or web application.',
    ['Understand C# types', 'Use LINQ', 'Write async code', 'Build a .NET app'],
    ['Setup with dotnet', 'Types and classes', 'LINQ basics', 'Async/await', 'File I/O', 'Project']),

  c('go-programming', 'Go Programming', 'Programming', 'Intermediate', '5 weeks | 20 lessons', 20, IMG.code,
    'Go for building fast, concurrent services. Goroutines, channels, and the standard library.',
    ['Write idiomatic Go', 'Use goroutines', 'Work with channels', 'Build a small HTTP server'],
    ['Setup', 'Types and structs', 'Interfaces', 'Goroutines', 'Channels', 'Building a web server']),

  c('rust-programming', 'Rust Programming', 'Programming', 'Advanced', '10 weeks | 40 lessons', 50, IMG.code,
    'Memory-safe systems programming. Ownership, borrowing, lifetimes, and building production-grade Rust.',
    ['Master ownership and borrowing', 'Use lifetimes', 'Write safe concurrent code', 'Build a real CLI tool'],
    ['Setup', 'Ownership', 'Borrowing', 'Structs and enums', 'Traits', 'Lifetimes', 'Concurrency', 'Project']),

  c('php-web-development', 'PHP Web Development', 'Programming', 'Beginner', '6 weeks | 22 lessons', 20, IMG.code,
    'PHP for modern web applications. Syntax, forms, databases, and building dynamic pages without a framework first.',
    ['Write PHP scripts', 'Handle forms safely', 'Connect to MySQL', 'Build dynamic pages'],
    ['Setup', 'Syntax basics', 'Arrays and functions', 'Forms and $_POST', 'MySQL', 'Sessions', 'Project']),

  // ===== Web development =====
  c('html-css-foundations', 'HTML & CSS Foundations', 'Web development', 'Beginner', '5 weeks | 20 lessons', 20, IMG.editor,
    'Build real web pages from scratch. Semantic HTML, modern CSS, flexbox, grid, and responsive design.',
    ['Write semantic HTML', 'Style with modern CSS', 'Use flexbox and grid', 'Make responsive layouts'],
    ['How the web works', 'HTML structure', 'CSS box model', 'Flexbox', 'Grid', 'Responsive design', 'Final page']),

  c('responsive-web-design', 'Responsive Web Design', 'Web development', 'Beginner', '3 weeks | 12 lessons', 10, IMG.editor,
    'A short course on making any layout work on phones, tablets, and desktops. Media queries and mobile-first CSS.',
    ['Write mobile-first CSS', 'Use media queries', 'Test on real devices', 'Debug layout issues'],
    ['Mobile-first thinking', 'Media queries', 'Fluid layouts', 'Testing', 'Common bugs']),

  c('javascript-dom', 'JavaScript and the DOM', 'Web development', 'Beginner', '3 weeks | 12 lessons', 10, IMG.code,
    'Make web pages interactive. Selecting elements, handling events, creating and removing nodes.',
    ['Select DOM elements', 'Handle events', 'Modify the DOM', 'Debug in the browser'],
    ['Selecting elements', 'Events', 'Creating nodes', 'Event delegation', 'Practice project']),

  c('react-essentials', 'React Essentials', 'Web development', 'Intermediate', '7 weeks | 28 lessons', 100, IMG.react,
    'Build modern user interfaces with React. Components, props, state, hooks, forms, and how to structure a real app.',
    ['Think in components', 'Manage state with hooks', 'Handle forms safely', 'Structure multi-page apps'],
    ['Why React', 'Components and props', 'State and events', 'useEffect', 'Forms', 'Routing', 'Project']),

  c('nodejs-backend-apis', 'Node.js and Backend APIs', 'Web development', 'Intermediate', '8 weeks | 30 lessons', 100, IMG.server,
    'Build the server side of a real app. HTTP, Express, REST APIs, JWT authentication, and structuring a maintainable backend.',
    ['Understand HTTP and REST', 'Build APIs with Express', 'Authenticate with JWT', 'Connect a database'],
    ['Node and npm', 'HTTP fundamentals', 'Express basics', 'Routing and middleware', 'Auth', 'Databases', 'Deployment']),

  c('fullstack-development', 'Full-Stack Development', 'Web development', 'Advanced', '12 weeks | 48 lessons', 100, IMG.server,
    'Combine React and Node into a single application. Authentication, deployment, and the patterns that make projects maintainable.',
    ['Build a complete full-stack app', 'Handle authentication end-to-end', 'Deploy frontend and backend', 'Debug production issues'],
    ['Project setup', 'API design', 'Frontend integration', 'Auth flows', 'Deployment', 'Monitoring', 'Final project']),

  c('nextjs-applications', 'Next.js Applications', 'Web development', 'Intermediate', '6 weeks | 24 lessons', 50, IMG.react,
    'Server-side rendering, static generation, and API routes with Next.js. Build production-ready web apps.',
    ['Use file-based routing', 'Understand SSR and SSG', 'Write API routes', 'Deploy to production'],
    ['Next.js basics', 'Routing', 'Data fetching', 'API routes', 'Deployment']),

  c('web-performance', 'Web Performance', 'Web development', 'Intermediate', '4 weeks | 16 lessons', 50, IMG.code,
    'Make websites load fast on slow networks. Bundle analysis, image optimization, caching, and Core Web Vitals.',
    ['Measure performance', 'Optimize bundles', 'Optimize images', 'Improve Core Web Vitals'],
    ['Why performance', 'Lighthouse', 'Bundles', 'Images', 'Caching', 'Web Vitals']),

  // ===== Databases =====
  c('sql-fundamentals', 'SQL Fundamentals', 'Databases', 'Beginner', '5 weeks | 20 lessons', 20, IMG.server,
    'Query and modify relational data. SELECT, JOIN, GROUP BY, and the SQL you will use every day.',
    ['Write SELECT queries', 'Use joins correctly', 'Aggregate with GROUP BY', 'Insert and update data'],
    ['What is SQL', 'SELECT basics', 'WHERE and filtering', 'JOINs', 'GROUP BY', 'INSERT/UPDATE/DELETE']),

  c('database-design', 'Database Design', 'Databases', 'Intermediate', '6 weeks | 24 lessons', 50, IMG.server,
    'Design schemas that scale. Normalisation, relationships, indexes, and modelling real applications.',
    ['Normalise schemas', 'Model relationships', 'Choose indexes', 'Avoid common pitfalls'],
    ['Why design matters', 'Entity relationships', 'Normal forms', 'Indexes', 'Denormalisation', 'Case study']),

  c('postgresql-mastery', 'PostgreSQL Mastery', 'Databases', 'Intermediate', '7 weeks | 28 lessons', 50, IMG.server,
    'PostgreSQL for real applications. Advanced queries, transactions, indexes, and JSON in Postgres.',
    ['Write advanced queries', 'Use transactions safely', 'Optimize with indexes', 'Use JSON in Postgres'],
    ['Setup', 'Advanced queries', 'Transactions', 'Indexes', 'JSON', 'Performance', 'Project']),

  c('mysql-essentials', 'MySQL Essentials', 'Databases', 'Beginner', '4 weeks | 16 lessons', 20, IMG.server,
    'MySQL basics for web developers. Installation, queries, users, backups, and connecting from an application.',
    ['Install and configure MySQL', 'Write queries', 'Manage users', 'Back up a database'],
    ['Installation', 'Queries', 'Users and grants', 'Backups', 'Connecting from code']),

  c('data-modeling', 'Data Modeling', 'Databases', 'Intermediate', '5 weeks | 20 lessons', 50, IMG.server,
    'Turn requirements into schemas. Entity-relationship diagrams, normalization, and modelling real systems.',
    ['Draw ER diagrams', 'Translate requirements to schemas', 'Handle many-to-many relationships', 'Review existing schemas'],
    ['Requirements to models', 'ER diagrams', 'Relationships', 'Normal forms', 'Case study']),

  // ===== Cybersecurity =====
  c('cybersecurity-fundamentals', 'Cybersecurity Fundamentals', 'Cybersecurity', 'Beginner', '6 weeks | 24 lessons', 20, IMG.security,
    'Defensive security from the ground up. Threat models, authentication, password security, and common vulnerabilities.',
    ['Understand threat models', 'Recognize phishing', 'Explain password hashing', 'Identify OWASP Top 10'],
    ['What security means', 'Threat models', 'Authentication', 'Web app security', 'Networking basics', 'Incident response']),

  c('networking-basics', 'Computer Networking Basics', 'Cybersecurity', 'Beginner', '5 weeks | 20 lessons', 20, IMG.network,
    'How data moves across networks. IP addressing, DNS, TCP/UDP, HTTP, and the basics of the internet.',
    ['Explain DNS resolution', 'Describe TCP/IP model', 'Read basic packets', 'Understand HTTP and HTTPS'],
    ['The internet in one page', 'IP addresses', 'DNS', 'TCP and UDP', 'HTTP and HTTPS', 'Diagnostics']),

  c('linux-fundamentals', 'Linux Fundamentals', 'Cybersecurity', 'Beginner', '5 weeks | 20 lessons', 20, IMG.terminal,
    'Use the Linux command line with confidence. Files, permissions, processes, and shell scripting basics.',
    ['Navigate the filesystem', 'Understand permissions', 'Manage processes', 'Write basic shell scripts'],
    ['The terminal', 'Files and directories', 'Permissions', 'Processes', 'Shell scripting', 'Package managers']),

  c('defensive-security', 'Defensive Security', 'Cybersecurity', 'Intermediate', '7 weeks | 28 lessons', 50, IMG.security,
    'Blue-team skills for protecting systems. Firewalls, endpoint protection, patching, and detecting attacks.',
    ['Harden Linux systems', 'Configure firewalls', 'Patch systematically', 'Detect common attack patterns'],
    ['Defense in depth', 'Hardening Linux', 'Firewalls', 'Patch management', 'Detecting attacks', 'Case studies']),

  c('authentication-security', 'Authentication and Password Security', 'Cybersecurity', 'Intermediate', '4 weeks | 16 lessons', 20, IMG.security,
    'How real authentication works. Password hashing, MFA, session security, and the mistakes that get accounts breached.',
    ['Explain password hashing', 'Implement MFA', 'Design secure sessions', 'Recognize auth anti-patterns'],
    ['Passwords done right', 'Hashing algorithms', 'MFA', 'Sessions and cookies', 'OAuth basics', 'Common mistakes']),

  c('web-application-security', 'Web Application Security', 'Cybersecurity', 'Intermediate', '6 weeks | 24 lessons', 50, IMG.security,
    'Find and fix web vulnerabilities in authorized lab environments. XSS, SQL injection, CSRF, and secure coding.',
    ['Test for XSS', 'Test for SQL injection', 'Prevent CSRF', 'Review code for vulnerabilities'],
    ['OWASP Top 10', 'XSS', 'SQL injection', 'CSRF', 'Auth flaws', 'Secure coding review']),

  c('security-monitoring', 'Security Monitoring', 'Cybersecurity', 'Intermediate', '5 weeks | 20 lessons', 50, IMG.security,
    'Watch systems for signs of compromise. Log collection, SIEM basics, and alert triage.',
    ['Collect logs effectively', 'Use a SIEM', 'Triage alerts', 'Reduce false positives'],
    ['Why monitoring', 'Log sources', 'SIEM basics', 'Alert triage', 'Reducing noise', 'Case study']),

  c('incident-response', 'Incident Response', 'Cybersecurity', 'Intermediate', '5 weeks | 20 lessons', 50, IMG.security,
    'Respond to security incidents methodically. Preparation, containment, eradication, recovery, and lessons learned.',
    ['Follow the IR lifecycle', 'Contain an incident', 'Write an incident report', 'Conduct a post-mortem'],
    ['IR lifecycle', 'Preparation', 'Containment', 'Eradication', 'Recovery', 'Post-mortems']),

  c('digital-forensics', 'Digital Forensics Fundamentals', 'Cybersecurity', 'Intermediate', '6 weeks | 24 lessons', 50, IMG.security,
    'Preserve and analyze digital evidence. Chain of custody, disk images, log analysis, and reporting.',
    ['Preserve evidence correctly', 'Image a disk', 'Analyze logs', 'Write a forensics report'],
    ['Chain of custody', 'Acquiring evidence', 'Disk analysis', 'Memory analysis', 'Log forensics', 'Reporting']),

  c('ethical-hacking', 'Ethical Hacking Fundamentals', 'Cybersecurity', 'Advanced', '10 weeks | 40 lessons', 100, IMG.security,
    'Authorized penetration testing in your own lab. Reconnaissance, exploitation, and reporting - for legal, defensive work only.',
    ['Perform reconnaissance', 'Exploit lab environments', 'Document findings', 'Write a professional pentest report'],
    ['Legal and ethical scope', 'Reconnaissance', 'Scanning', 'Exploitation lab', 'Post-exploitation', 'Reporting']),

  // ===== Tools and adjacent =====
  c('git-github-essentials', 'Git and GitHub Essentials', 'Tools', 'Beginner', '3 weeks | 12 lessons', 5, IMG.git,
    'A short, practical introduction to version control. Commits, branches, pull requests, and resolving conflicts.',
    ['Commit confidently', 'Branch and merge', 'Open pull requests', 'Recover from mistakes'],
    ['Why version control', 'Your first repository', 'Commits', 'Branching', 'Pull requests']),

  c('software-testing', 'Software Testing Fundamentals', 'Tools', 'Beginner', '5 weeks | 20 lessons', 20, IMG.code,
    'Write tests that catch real bugs. Unit tests, integration tests, and the patterns that make them maintainable.',
    ['Write unit tests', 'Write integration tests', 'Use test frameworks', 'Structure test suites'],
    ['Why test', 'Unit testing', 'Integration testing', 'Test doubles', 'Test-first thinking', 'Practice project']),

  c('cloud-computing-basics', 'Cloud Computing Basics', 'Tools', 'Beginner', '4 weeks | 16 lessons', 20, IMG.server,
    'Understand cloud platforms. Compute, storage, databases, and deploying a real app to a cloud provider.',
    ['Explain cloud models', 'Deploy to the cloud', 'Use managed services', 'Estimate cloud costs'],
    ['What is the cloud', 'Compute', 'Storage', 'Databases', 'Deploying an app', 'Costs']),

  c('mobile-app-development', 'Mobile App Development', 'Tools', 'Intermediate', '8 weeks | 30 lessons', 50, IMG.react,
    'Build cross-platform mobile apps with React Native. Navigation, storage, device APIs, and publishing.',
    ['Build a mobile app', 'Handle navigation', 'Use device features', 'Publish to a store'],
    ['Setup', 'Core components', 'Navigation', 'Storage', 'Device APIs', 'Publishing']),

  c('artificial-intelligence-intro', 'Artificial Intelligence: Introduction', 'Tools', 'Intermediate', '6 weeks | 24 lessons', 50, IMG.code,
    'What AI actually is and is not. Search, reasoning, and the core algorithms behind modern AI systems.',
    ['Explain AI concepts', 'Implement search algorithms', 'Understand reasoning systems', 'Evaluate AI claims critically'],
    ['What AI is', 'Search algorithms', 'Reasoning', 'Machine learning intro', 'Ethics', 'Case studies']),

  c('machine-learning-fundamentals', 'Machine Learning Fundamentals', 'Tools', 'Advanced', '10 weeks | 40 lessons', 100, IMG.code,
    'Build and evaluate ML models. Regression, classification, evaluation, and the workflow of a real ML project.',
    ['Train and evaluate models', 'Avoid overfitting', 'Choose metrics', 'Deploy a model'],
    ['Setup', 'Regression', 'Classification', 'Evaluation', 'Feature engineering', 'Deployment', 'Project']),

  c('devops-fundamentals', 'DevOps Fundamentals', 'Tools', 'Intermediate', '7 weeks | 28 lessons', 50, IMG.server,
    'Ship software reliably. CI/CD pipelines, infrastructure as code, and monitoring production systems.',
    ['Build CI/CD pipelines', 'Use infrastructure as code', 'Monitor production', 'Respond to outages'],
    ['DevOps overview', 'CI/CD', 'Infrastructure as code', 'Containers', 'Monitoring', 'Incident handling']),

  c('docker-kubernetes', 'Docker and Kubernetes', 'Tools', 'Advanced', '8 weeks | 32 lessons', 50, IMG.server,
    'Containerize applications with Docker and orchestrate them with Kubernetes. Deploy real services.',
    ['Containerize an app', 'Write Dockerfiles', 'Deploy to Kubernetes', 'Debug container issues'],
    ['Why containers', 'Docker basics', 'Dockerfiles', 'Kubernetes', 'Deployments', 'Debugging']),
  c('prompt-engineering-animation', 'Prompt Engineering for Animation', 'Tools', 'Intermediate', '4 weeks | 16 lessons', 50, IMG.code,
    'Learn how to use AI tools like Midjourney, ChatGPT, and Runway to write stories, design characters, and generate animations. Build a complete animated short film.',
    ['Write effective AI prompts', 'Generate consistent characters', 'Create storyboards', 'Animate images with AI'],
    ['Introduction to AI Animation', 'Storytelling basics', 'Writing prompts for characters', 'Generating backgrounds', 'Animating with Runway', 'Final project']),

  c('intro-mechatronics-robotics', 'Introduction to Mechatronics & Robotics', 'Engineering', 'Beginner', '8 weeks | 24 lessons', 50, IMG.server,
    'Learn the fundamentals of building real robots. Combine mechanical engineering, electronics, and programming to build and control your own basic robotic system.',
    ['Understand microcontrollers', 'Wire sensors and actuators', 'Write Arduino C++ code', 'Build a line-following robot'],
    ['What is Mechatronics?', 'Microcontrollers (Arduino)', 'Reading Sensors', 'Controlling Motors', 'Writing the Code', 'Building the Robot']),

]

export const categories = [
  'All',
  ...Array.from(new Set(courses.map((c) => c.category))),
]

export function getCourse(slug: string) {
  return courses.find((c) => c.slug === slug)
}