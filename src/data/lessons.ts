export type Block =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'code'; code: string; language?: 'html' | 'css' | 'js' | 'react' | 'python' | 'c' | 'cpp'; runnable?: boolean }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] }
  | { type: 'note'; text: string }
  | { type: 'exercise'; text: string; solution?: string }
  | { type: 'codeExercise'; exerciseId: string; prompt: string; starter: string; expectedOutput: string; hint?: string; solution?: string }

export type Lesson = {
  slug: string
  title: string
  order: number
  durationMin: number
  blocks: Block[]
}

import { getCourse } from './courses'
import { expandedJsLessons } from './lessons-expanded-js'
import { expandedPyLessons } from './lessons-expanded-py'

type CourseLike = {
  title: string
  description: string
  category?: string
  objectives?: string[]
  curriculum?: string[]
}

const lessonsByCourse: Record<string, Lesson[]> = {
  javascript: [
    {
      slug: 'hello-world', title: 'Hello, World!', order: 1, durationMin: 5,
      blocks: [
        { type: 'p', text: 'JavaScript is the language of the web. It runs in every browser and powers everything from simple buttons to complex web apps. In this lesson, you will write your first line of JavaScript and see it execute live in your browser.' },
        { type: 'h2', text: 'Your first program' },
        { type: 'code', language: 'js', runnable: true, code: 'console.log("Hello, World!")' },
        { type: 'p', text: 'Click Run Code above. The text "Hello, World!" appears in the output below. The console.log() function is your primary debugging tool - it prints values to the developer console.' },
        { type: 'h2', text: 'How it works' },
        { type: 'ul', items: ['console is a built-in object every browser provides', 'log() is a method that takes any value and prints it', 'The string "Hello, World!" is wrapped in double quotes', 'Every statement ends with a semicolon (optional but recommended)'] },
        { type: 'exercise', text: 'Change the message to print your own name. Then try printing a number (like console.log(42)) and a boolean (console.log(true)).' },
      ],
    },
    {
      slug: 'variables', title: 'Variables & Data Types', order: 2, durationMin: 8,
      blocks: [
        { type: 'p', text: 'Variables are containers that store data. In JavaScript, you declare a variable with const (constant), let (changeable), or var (old style - avoid it).' },
        { type: 'h2', text: 'Three ways to declare' },
        { type: 'code', language: 'js', runnable: true, code: 'const name = "Rayan"\nlet age = 18\nage = 19\nconsole.log("Name:", name)\nconsole.log("Age:", age)\nconsole.log("typeof name:", typeof name)\nconsole.log("typeof age:", typeof age)' },
        { type: 'p', text: 'Notice that age changed from 18 to 19 - that works because we used let. Try changing name to something else and see the error. const prevents reassignment by design.' },
        { type: 'h2', text: 'Primitive types' },
        { type: 'ul', items: ['string - text: "hello", \'world\'', 'number - integers and decimals: 42, 3.14', 'boolean - true or false', 'undefined - variable declared but not assigned', 'null - intentional empty value'] },
        { type: 'note', text: 'Rule of thumb: use const by default. Only switch to let when you know the value will change. Never use var in modern code.' },
        { type: 'exercise', text: 'Create three variables: your country (string), your birth year (number), and whether you are a student (boolean). Print all three.' },
      ],
    },
    {
      slug: 'functions', title: 'Functions', order: 3, durationMin: 9,
      blocks: [
        { type: 'p', text: 'Functions are reusable blocks of code. They take input (parameters), do work, and return output. Functions are the building blocks of every JavaScript program.' },
        { type: 'h2', text: 'Two ways to write functions' },
        { type: 'code', language: 'js', runnable: true, code: '// Function declaration\nfunction greet(name) {\n  return "Hello, " + name + "!"\n}\n\n// Arrow function (modern syntax)\nconst add = (a, b) => a + b\n\nconsole.log(greet("Mobzy"))\nconsole.log("2 + 3 =", add(2, 3))' },
        { type: 'h2', text: 'Breaking it down' },
        { type: 'ul', items: ['function declares a named function', 'name is a parameter - a variable that receives input', 'return sends a value back to the caller', 'Arrow functions use => syntax and are shorter', 'Arrow functions without braces auto-return'] },
        { type: 'note', text: 'If a function does not return anything, it returns undefined by default.' },
        { type: 'exercise', text: 'Write a function called double that takes a number and returns n * 2. Test it with double(5). Then write a square function.' },
      ],
    },
    {
      slug: 'conditionals', title: 'If / Else', order: 4, durationMin: 7,
      blocks: [
        { type: 'p', text: 'Conditionals let your code make decisions. The if statement runs code only when a condition is true.' },
        { type: 'code', language: 'js', runnable: true, code: 'const age = 18\n\nif (age >= 18) {\n  console.log("You are an adult")\n} else if (age >= 13) {\n  console.log("You are a teenager")\n} else {\n  console.log("You are a child")\n}\n\n// Ternary operator (short if/else)\nconst label = age >= 18 ? "adult" : "minor"\nconsole.log("Label:", label)' },
        { type: 'h2', text: 'Comparison operators' },
        { type: 'ul', items: ['=== strict equality (recommended)', '== loose equality (avoid)', '!== strict inequality', '> >= < <= comparison', '&& AND, || OR, ! NOT'] },
        { type: 'exercise', text: 'Change age to 12 and re-run. Then to 30. Watch the output change. Then write a check: if a number is even, print "even", otherwise print "odd".' },
      ],
    },
    {
      slug: 'loops', title: 'Loops', order: 5, durationMin: 8,
      blocks: [
        { type: 'p', text: 'Loops repeat code. JavaScript has for, while, and array methods like forEach and map.' },
        { type: 'code', language: 'js', runnable: true, code: '// Classic for loop\nfor (let i = 1; i <= 5; i++) {\n  console.log("Count:", i)\n}\n\n// while loop\nlet n = 3\nwhile (n > 0) {\n  console.log("T-minus", n)\n  n--\n}\n\n// Array iteration\nconst fruits = ["apple", "banana", "cherry"]\nfruits.forEach(f => console.log("Fruit:", f))' },
        { type: 'h2', text: 'When to use which' },
        { type: 'ul', items: ['for - when you know the count', 'while - when you loop until a condition', 'forEach - when iterating an array (no return value)', 'map - when transforming each item into a new array', 'filter - when keeping only items that pass a test'] },
        { type: 'exercise', text: 'Loop from 10 down to 1 and print each number. Then use map on [1,2,3] to make [2,4,6].' },
      ],
    },
    {
      slug: 'arrays', title: 'Arrays', order: 6, durationMin: 10,
      blocks: [
        { type: 'p', text: 'Arrays hold ordered lists of values. They are the most-used data structure in JavaScript.' },
        { type: 'code', language: 'js', runnable: true, code: 'const scores = [95, 82, 77, 100]\nconsole.log("Scores:", scores)\nconsole.log("First:", scores[0])\nconsole.log("Last:", scores[scores.length - 1])\nconsole.log("Length:", scores.length)\n\n// Common methods\nconsole.log("Total:", scores.reduce((a, b) => a + b, 0))\nconsole.log("Doubled:", scores.map(s => s * 2))\nconsole.log("Passing (>=80):", scores.filter(s => s >= 80))\nconsole.log("Average:", scores.reduce((a, b) => a + b, 0) / scores.length)' },
        { type: 'h2', text: 'Essential array methods' },
        { type: 'ul', items: ['push / pop - add/remove at end', 'shift / unshift - add/remove at start', 'map - transform each element', 'filter - keep matching elements', 'reduce - combine into one value', 'find - first match', 'includes - check membership'] },
        { type: 'exercise', text: 'Create an array of 3 countries. Use map to log "I want to visit {country}" for each. Then use filter to keep only countries with more than 5 letters.' },
      ],
    },
    {
      slug: 'objects', title: 'Objects', order: 7, durationMin: 9,
      blocks: [
        { type: 'p', text: 'Objects store key-value pairs. They model real-world things - a user, a product, a course.' },
        { type: 'code', language: 'js', runnable: true, code: 'const user = {\n  name: "Rayan",\n  age: 18,\n  country: "Uganda",\n  isStudent: true,\n  hobbies: ["coding", "reading"]\n}\n\nconsole.log("Name:", user.name)\nconsole.log("Country:", user["country"])\nconsole.log("Hobbies:", user.hobbies.join(", "))\n\n// Add / modify\nuser.city = "Kampala"\nuser.age = 19\nconsole.log("Updated:", user)' },
        { type: 'note', text: 'Use dot notation (user.name) for known keys and bracket notation (user[key]) when the key is dynamic.' },
        { type: 'exercise', text: 'Create a course object with title, lessons, price (0), and tags array. Print each field.' },
      ],
    },
  ],

  python: [
    {
      slug: 'hello-world', title: 'Hello, World!', order: 1, durationMin: 4,
      blocks: [
        { type: 'p', text: 'Python is famous for being readable. Your first program is a single line.' },
        { type: 'code', language: 'python', runnable: true, code: 'print("Hello, World!")' },
        { type: 'p', text: 'Click "Run on Replit" below to try it in a live Python interpreter.' },
        { type: 'exercise', text: 'Print your name, then print your favorite number.' },
      ],
    },
    {
      slug: 'variables', title: 'Variables', order: 2, durationMin: 6,
      blocks: [
        { type: 'p', text: 'Python has no type declarations. Just assign and go.' },
        { type: 'code', language: 'python', runnable: true, code: 'name = "Rayan"\nage = 18\nheight = 1.75\nis_student = True\n\nprint("Name:", name)\nprint("Age:", age)\nprint("Height:", height)\nprint("Student:", is_student)\nprint("type of name:", type(name))\nprint("type of age:", type(age))' },
        { type: 'exercise', text: 'Create city = "Kampala" and country = "Uganda", then print "I live in {city}, {country}" using f-strings.' },
      ],
    },
    {
      slug: 'strings', title: 'Working with Strings', order: 3, durationMin: 7,
      blocks: [
        { type: 'p', text: 'Strings are text. Python gives you many built-in methods to manipulate them.' },
        { type: 'code', language: 'python', runnable: true, code: 'name = "Mobzy Learn"\n\nprint("Original:", name)\nprint("Upper:", name.upper())\nprint("Lower:", name.lower())\nprint("Length:", len(name))\nprint("Replace:", name.replace("Learn", "Academy"))\nprint("Split:", name.split())\n\n# f-strings (modern formatting)\nage = 18\nprint(f"{name} is {age} years old")' },
        { type: 'exercise', text: 'Create a sentence, then print its first word, last word, and total character count.' },
      ],
    },
    {
      slug: 'conditionals', title: 'Conditionals', order: 4, durationMin: 6,
      blocks: [
        { type: 'p', text: 'Python uses indentation (spaces) instead of braces to define code blocks. This is not optional - it is syntax.' },
        { type: 'code', language: 'python', runnable: true, code: 'score = 85\n\nif score >= 90:\n    print("A")\nelif score >= 80:\n    print("B")\nelif score >= 70:\n    print("C")\nelse:\n    print("F")' },
        { type: 'note', text: 'Always use 4 spaces for indentation. Tabs and spaces mixed will cause errors.' },
        { type: 'exercise', text: 'Write a program that checks if a number is even or odd. Try 7 and 10.' },
      ],
    },
    {
      slug: 'loops', title: 'Loops', order: 5, durationMin: 7,
      blocks: [
        { type: 'p', text: 'Python loops are clean and readable.' },
        { type: 'code', language: 'python', runnable: true, code: '# Range loop\nfor i in range(1, 6):\n    print("Count:", i)\n\n# List loop\nfruits = ["apple", "banana", "cherry"]\nfor fruit in fruits:\n    print("Fruit:", fruit)\n\n# Enumerate (index + value)\nfor i, fruit in enumerate(fruits):\n    print(f"{i}: {fruit}")' },
        { type: 'exercise', text: 'Print "Hello!" 5 times using a for loop. Then loop over [10, 20, 30] and print each x 2.' },
      ],
    },
    {
      slug: 'functions', title: 'Functions', order: 6, durationMin: 8,
      blocks: [
        { type: 'p', text: 'Define functions with def, followed by parameters, and return values with return.' },
        { type: 'code', language: 'python', runnable: true, code: 'def greet(name):\n    return f"Hello, {name}!"\n\ndef add(a, b):\n    return a + b\n\ndef power(base, exponent=2):\n    return base ** exponent\n\nprint(greet("Mobzy"))\nprint(add(2, 3))\nprint(power(5))\nprint(power(2, 10))' },
        { type: 'exercise', text: 'Write a function is_even(n) that returns True if n is even, else False. Test it with 4 and 7.' },
      ],
    },
    {
      slug: 'lists', title: 'Lists', order: 7, durationMin: 9,
      blocks: [
        { type: 'p', text: 'Lists are ordered, changeable collections. Similar to arrays in other languages.' },
        { type: 'code', language: 'python', runnable: true, code: 'scores = [95, 82, 77, 100]\n\nprint("Original:", scores)\nprint("First:", scores[0])\nprint("Last:", scores[-1])\nprint("Length:", len(scores))\nprint("Sum:", sum(scores))\nprint("Max:", max(scores))\nprint("Min:", min(scores))\nprint("Sorted:", sorted(scores))\n\n# List comprehension\nsquares = [n ** 2 for n in range(1, 6)]\nprint("Squares:", squares)\n\n# Filter with comprehension\ntop = [s for s in scores if s >= 80]\nprint("Top scores:", top)' },
        { type: 'exercise', text: 'Create a list of 5 numbers. Print the average. Then create a new list with only the numbers above average.' },
      ],
    },
  ],

  html: [
    {
      slug: 'first-page', title: 'Your First Page', order: 1, durationMin: 5,
      blocks: [
        { type: 'p', text: 'HTML is the skeleton of every web page. Elements like h1, p, and button describe the structure and meaning of content.' },
        { type: 'code', language: 'html', runnable: true, code: '<!DOCTYPE html>\n<html>\n<head>\n  <title>My First Page</title>\n</head>\n<body style="font-family: system-ui; padding: 20px">\n  <h1>Welcome!</h1>\n  <p>This is my first web page.</p>\n  <button onclick="alert(\'Clicked!\')">Click me</button>\n</body>\n</html>' },
        { type: 'h2', text: 'Structure of every HTML page' },
        { type: 'ul', items: ['<!DOCTYPE html> - tells the browser this is HTML5', '<html> - root element', '<head> - metadata, title, links to CSS', '<body> - visible content'] },
        { type: 'exercise', text: 'Change the heading to your name. Add a second paragraph describing yourself.' },
      ],
    },
    {
      slug: 'text', title: 'Text & Headings', order: 2, durationMin: 5,
      blocks: [
        { type: 'p', text: 'HTML provides semantic text elements. Browsers and search engines use these to understand the page.' },
        { type: 'code', language: 'html', runnable: true, code: '<!DOCTYPE html>\n<html>\n<body style="font-family: system-ui; padding: 20px">\n  <h1>Main Title</h1>\n  <h2>Section Heading</h2>\n  <h3>Subsection</h3>\n  <p>This is a paragraph with <strong>bold</strong> and <em>italic</em> text.</p>\n  <p>You can also <mark>highlight</mark> text or use <code>inline code</code>.</p>\n  <blockquote>A quote goes here.</blockquote>\n</body>\n</html>' },
        { type: 'exercise', text: 'Add an h2, two more paragraphs, and a blockquote with an inspiring quote.' },
      ],
    },
    {
      slug: 'lists', title: 'Lists & Tables', order: 3, durationMin: 6,
      blocks: [
        { type: 'p', text: 'Lists and tables organize information. Use ul for unordered (bullet) lists, ol for ordered (numbered), and table for tabular data.' },
        { type: 'code', language: 'html', runnable: true, code: '<!DOCTYPE html>\n<html>\n<body style="font-family: system-ui; padding: 20px">\n  <h2>Unordered List</h2>\n  <ul>\n    <li>Apples</li>\n    <li>Bananas</li>\n    <li>Cherries</li>\n  </ul>\n\n  <h2>Ordered List</h2>\n  <ol>\n    <li>First step</li>\n    <li>Second step</li>\n    <li>Third step</li>\n  </ol>\n\n  <h2>Table</h2>\n  <table border="1" cellpadding="8" style="border-collapse: collapse">\n    <tr><th>Name</th><th>Age</th></tr>\n    <tr><td>Rayan</td><td>18</td></tr>\n    <tr><td>Aisha</td><td>20</td></tr>\n  </table>\n</body>\n</html>' },
        { type: 'exercise', text: 'Create a list of your 3 favorite foods (ul) and a table of your daily schedule.' },
      ],
    },
    {
      slug: 'links', title: 'Links & Images', order: 4, durationMin: 6,
      blocks: [
        { type: 'p', text: 'Links connect pages together - they are what makes the web a "web". Images add visual content.' },
        { type: 'code', language: 'html', runnable: true, code: '<!DOCTYPE html>\n<html>\n<body style="font-family: system-ui; padding: 20px">\n  <h2>Links</h2>\n  <p><a href="https://example.com">External link</a></p>\n  <p><a href="#section">Jump to section</a></p>\n  <p><a href="mailto:hello@example.com">Send email</a></p>\n\n  <h2>Images</h2>\n  <img src="https://via.placeholder.com/200x150?text=Demo" alt="Demo image" width="200" />\n\n  <h2 id="section">Section</h2>\n  <p>You jumped here.</p>\n</body>\n</html>' },
        { type: 'note', text: 'Always include alt text on images - it helps screen readers and shows when the image fails to load.' },
        { type: 'exercise', text: 'Add a link to Google, an image from a URL, and an email link.' },
      ],
    },
    {
      slug: 'forms', title: 'Forms', order: 5, durationMin: 7,
      blocks: [
        { type: 'p', text: 'Forms are how users send data to a server. Inputs, buttons, checkboxes, radio buttons, selects.' },
        { type: 'code', language: 'html', runnable: true, code: '<!DOCTYPE html>\n<html>\n<body style="font-family: system-ui; padding: 20px">\n  <h2>Contact Form</h2>\n  <form onsubmit="event.preventDefault(); alert(\'Submitted!\')">\n    <p><label>Name: <input type="text" name="name" required /></label></p>\n    <p><label>Email: <input type="email" name="email" required /></label></p>\n    <p><label>Message: <br /><textarea name="message" rows="3" cols="30"></textarea></label></p>\n    <p>\n      <label><input type="radio" name="gender" value="male" /> Male</label>\n      <label><input type="radio" name="gender" value="female" /> Female</label>\n    </p>\n    <p><label><input type="checkbox" /> Subscribe</label></p>\n    <p><button type="submit">Send</button></p>\n  </form>\n</body>\n</html>' },
        { type: 'exercise', text: 'Add a select dropdown with 3 options (e.g., country), and a number input for age.' },
      ],
    },
  ],

  css: [
    {
      slug: 'selectors', title: 'CSS Selectors', order: 1, durationMin: 5,
      blocks: [
        { type: 'p', text: 'CSS selects HTML elements and styles them. Selectors decide which elements get styled.' },
        { type: 'code', language: 'css', runnable: true, code: '/* Element selector */\nh1 { color: #10b981; font-family: system-ui; }\n\n/* Class selector */\n.highlight { background: #fef3c7; padding: 4px 8px; border-radius: 4px; }\n\n/* ID selector */\n#main { font-size: 24px; font-weight: bold; }\n\n/* Multiple selectors */\nh2, h3 { color: #333; }\n\n/* Descendant */\n.card p { color: #666; }' },
        { type: 'exercise', text: 'Style the h1, p, and button elements differently using element selectors.' },
      ],
    },
    {
      slug: 'colors', title: 'Colors & Text', order: 2, durationMin: 6,
      blocks: [
        { type: 'p', text: 'CSS has many color formats: named colors, hex, RGB, HSL. Text can be styled with font-size, font-weight, text-align, and more.' },
        { type: 'code', language: 'css', runnable: true, code: 'h1 {\n  color: #10b981;             /* green hex */\n  font-size: 42px;\n  font-weight: bold;\n  text-align: center;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n}\n\np {\n  color: rgb(51, 65, 85);\n  font-size: 18px;\n  line-height: 1.6;\n}\n\na { color: hsl(217, 91%, 60%); text-decoration: none; }\na:hover { text-decoration: underline; }' },
        { type: 'exercise', text: 'Change the h1 color to purple using RGB, and to blue using HSL. Notice they look the same.' },
      ],
    },
    {
      slug: 'box-model', title: 'The Box Model', order: 3, durationMin: 7,
      blocks: [
        { type: 'p', text: 'Every element is a box. Each box has content, padding, border, and margin. Understanding these is critical.' },
        { type: 'code', language: 'css', runnable: true, code: '.box {\n  width: 200px;\n  padding: 20px;\n  border: 3px solid #2563eb;\n  margin: 30px;\n  background: #f1f5f9;\n  box-sizing: border-box;\n}' },
        { type: 'h2', text: 'The layers' },
        { type: 'ul', items: ['content - the innermost area (text/image)', 'padding - space inside the border', 'border - visible boundary', 'margin - space outside the border', 'box-sizing: border-box - padding counts inside width (recommended)'] },
        { type: 'exercise', text: 'Create a box with 40px padding, 2px red border, and 20px margin. Then change box-sizing and observe the difference.' },
      ],
    },
    {
      slug: 'flexbox', title: 'Flexbox Layout', order: 4, durationMin: 8,
      blocks: [
        { type: 'p', text: 'Flexbox is the modern way to lay out elements in a row or column. It solves almost every layout problem in 3 lines of CSS.' },
        { type: 'code', language: 'html', runnable: true, code: '<!DOCTYPE html>\n<html>\n<head><style>\n  body { font-family: system-ui; padding: 20px; }\n  .row {\n    display: flex;\n    gap: 12px;\n    justify-content: center;\n    align-items: stretch;\n  }\n  .card {\n    flex: 1;\n    padding: 20px;\n    background: #f1f5f9;\n    border-radius: 12px;\n    text-align: center;\n  }\n</style></head>\n<body>\n  <div class="row">\n    <div class="card"><h3>Card 1</h3></div>\n    <div class="card"><h3>Card 2</h3></div>\n    <div class="card"><h3>Card 3</h3></div>\n  </div>\n</body>\n</html>' },
        { type: 'h2', text: 'Key flexbox properties' },
        { type: 'ul', items: ['display: flex - activates flexbox', 'gap - space between children', 'justify-content - horizontal alignment', 'align-items - vertical alignment', 'flex: 1 - children share space equally'] },
        { type: 'exercise', text: 'Add a 4th card. Change justify-content to "space-between" and see the layout change.' },
      ],
    },
    {
      slug: 'responsive', title: 'Responsive Design', order: 5, durationMin: 7,
      blocks: [
        { type: 'p', text: 'Responsive design adapts your site to different screen sizes. Media queries are the tool.' },
        { type: 'code', language: 'css', runnable: true, code: '.container {\n  padding: 20px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n\n.grid {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 16px;\n}\n\n@media (min-width: 768px) {\n  .grid {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n\n@media (min-width: 1024px) {\n  .grid {\n    grid-template-columns: 1fr 1fr 1fr;\n  }\n}' },
        { type: 'note', text: 'Mobile-first is best: design for small screens first, then add media queries for larger screens.' },
        { type: 'exercise', text: 'Add a media query that makes text 24px on screens wider than 800px.' },
      ],
    },
  ],

  react: [
    {
      slug: 'first-component', title: 'Your First Component', order: 1, durationMin: 6,
      blocks: [
        { type: 'p', text: 'React builds UIs from reusable components. Each component is a JavaScript function that returns JSX (HTML-like syntax).' },
        { type: 'code', language: 'react', runnable: true, code: 'function App() {\n  return (\n    <div style={{ padding: 20, fontFamily: "system-ui" }}>\n      <h1>Hello, React!</h1>\n      <p>This component renders live.</p>\n      <button onClick={() => alert("Clicked!")}>Click me</button>\n    </div>\n  )\n}' },
        { type: 'exercise', text: 'Change the heading text. Add a paragraph describing yourself.' },
      ],
    },
    {
      slug: 'state', title: 'State with useState', order: 2, durationMin: 8,
      blocks: [
        { type: 'p', text: 'State lets components remember values. When state changes, the component re-renders with the new value.' },
        { type: 'code', language: 'react', runnable: true, code: 'function App() {\n  const [count, setCount] = React.useState(0)\n  return (\n    <div style={{ padding: 20, fontFamily: "system-ui" }}>\n      <h1>Count: {count}</h1>\n      <button onClick={() => setCount(count + 1)}>Add</button>\n      <button onClick={() => setCount(count - 1)} style={{ marginLeft: 8 }}>Subtract</button>\n      <button onClick={() => setCount(0)} style={{ marginLeft: 8 }}>Reset</button>\n    </div>\n  )\n}' },
        { type: 'exercise', text: 'Add a "Multiply by 2" button that doubles the count.' },
      ],
    },
    {
      slug: 'props', title: 'Props', order: 3, durationMin: 7,
      blocks: [
        { type: 'p', text: 'Props pass data from a parent component to a child. They are read-only inside the child.' },
        { type: 'code', language: 'react', runnable: true, code: 'function Greeting({ name, age }) {\n  return <p>Hello {name}, you are {age} years old.</p>\n}\n\nfunction App() {\n  return (\n    <div style={{ padding: 20, fontFamily: "system-ui" }}>\n      <h1>Props Demo</h1>\n      <Greeting name="Rayan" age={18} />\n      <Greeting name="Aisha" age={20} />\n    </div>\n  )\n}' },
        { type: 'exercise', text: 'Add a third Greeting with your own name and age.' },
      ],
    },
    {
      slug: 'lists', title: 'Lists & Keys', order: 4, durationMin: 6,
      blocks: [
        { type: 'p', text: 'Render lists by mapping over an array. Every item needs a unique key prop.' },
        { type: 'code', language: 'react', runnable: true, code: 'function App() {\n  const fruits = ["apple", "banana", "cherry"]\n  const users = [\n    { id: 1, name: "Rayan" },\n    { id: 2, name: "Aisha" },\n    { id: 3, name: "Kofi" }\n  ]\n  return (\n    <div style={{ padding: 20, fontFamily: "system-ui" }}>\n      <h2>Fruits</h2>\n      <ul>{fruits.map(f => <li key={f}>{f}</li>)}</ul>\n      <h2>Users</h2>\n      <ul>{users.map(u => <li key={u.id}>{u.name}</li>)}</ul>\n    </div>\n  )\n}' },
        { type: 'note', text: 'Never use array index as key if the list can change. Use a stable ID from your data.' },
        { type: 'exercise', text: 'Add a 4th fruit and a 4th user to the arrays.' },
      ],
    },
    {
      slug: 'effects', title: 'useEffect', order: 5, durationMin: 8,
      blocks: [
        { type: 'p', text: 'useEffect runs side effects after render - fetching data, setting timers, updating the DOM.' },
        { type: 'code', language: 'react', runnable: true, code: 'function App() {\n  const [seconds, setSeconds] = React.useState(0)\n  React.useEffect(() => {\n    const id = setInterval(() => setSeconds(s => s + 1), 1000)\n    return () => clearInterval(id)\n  }, [])\n  return (\n    <div style={{ padding: 20, fontFamily: "system-ui" }}>\n      <h1>Timer</h1>\n      <p>Seconds elapsed: {seconds}</p>\n    </div>\n  )\n}' },
        { type: 'exercise', text: 'Change the interval from 1000ms to 500ms and observe how fast it counts.' },
      ],
    },
  ],

  nodejs: [
    {
      slug: 'intro', title: 'What is Node.js?', order: 1, durationMin: 5,
      blocks: [
        { type: 'p', text: 'Node.js lets you run JavaScript outside the browser - on servers, in scripts, on your computer. Same language, different environment.' },
        { type: 'h2', text: 'What Node gives you' },
        { type: 'ul', items: ['File system access (read/write files)', 'Network access (make HTTP requests, run servers)', 'Process control (spawn programs)', 'Package ecosystem (npm - 2 million+ packages)'] },
        { type: 'code', language: 'js', runnable: true, code: '// Browser version (what you know)\nconsole.log("Hello from browser JS")\n\n// Node.js adds things like:\n// const fs = require("fs")\n// const http = require("http")\n// const path = require("path")\n\n// But the console works the same way:\nconsole.log("Node.js runs this exact line too")' },
        { type: 'exercise', text: 'In a real Node.js environment, install Node from nodejs.org, then create hello.js with console.log("Hi") and run node hello.js.' },
      ],
    },
    {
      slug: 'modules', title: 'Modules & require', order: 2, durationMin: 6,
      blocks: [
        { type: 'p', text: 'Node.js splits code into modules. Every file is a module. You import/export between files.' },
        { type: 'code', language: 'js', runnable: true, code: '// math.js\n// function add(a, b) { return a + b }\n// function multiply(a, b) { return a * b }\n// module.exports = { add, multiply }\n\n// app.js\n// const math = require("./math")\n// console.log(math.add(2, 3))\n// console.log(math.multiply(4, 5))\n\n// Demo:\nconst math = {\n  add: (a, b) => a + b,\n  multiply: (a, b) => a * b\n}\nconsole.log(math.add(2, 3))\nconsole.log(math.multiply(4, 5))' },
        { type: 'note', text: 'Modern Node.js also supports ES modules (import/export) with .mjs extension or "type": "module" in package.json.' },
        { type: 'exercise', text: 'Create a subtract function and export it alongside add and multiply.' },
      ],
    },
    {
      slug: 'http', title: 'Your First Server', order: 3, durationMin: 8,
      blocks: [
        { type: 'p', text: 'Node.js can run a web server with zero dependencies. The built-in http module handles everything.' },
        { type: 'code', language: 'js', runnable: true, code: '// In real Node.js:\n// const http = require("http")\n// const server = http.createServer((req, res) => {\n//   res.writeHead(200, { "Content-Type": "text/plain" })\n//   res.end("Hello from Node.js!")\n// })\n// server.listen(3000, () => console.log("Server on http://localhost:3000"))\n\n// Demo concept:\nconst handler = (request) => {\n  if (request.url === "/") return "Welcome"\n  if (request.url === "/about") return "About page"\n  return "404 Not Found"\n}\nconsole.log(handler({ url: "/" }))\nconsole.log(handler({ url: "/about" }))\nconsole.log(handler({ url: "/xyz" }))' },
        { type: 'exercise', text: 'Add a route for /contact that returns "Contact us at hello@example.com".' },
      ],
    },
    {
      slug: 'npm', title: 'npm & Package Management', order: 4, durationMin: 6,
      blocks: [
        { type: 'p', text: 'npm is Node\'s package manager. It installs libraries other developers built - everything from React to Express to tiny utilities.' },
        { type: 'h2', text: 'Essential npm commands' },
        { type: 'code', language: 'js', runnable: true, code: '// Run these in a real terminal:\n// npm init -y              - create package.json\n// npm install express      - install express\n// npm install --save-dev jest - install dev dependency\n// npm install -g nodemon   - install globally\n// npm uninstall express    - remove\n// npm run <script>         - run a script from package.json\n// npm list                 - list installed packages\n\nconsole.log("npm commands run in terminal, not in this sandbox")' },
        { type: 'exercise', text: 'In your own project folder, run npm init -y, then npm install lodash. Look at package.json and node_modules/.' },
      ],
    },
  ],

  typescript: [
    {
      slug: 'intro', title: 'Why TypeScript?', order: 1, durationMin: 5,
      blocks: [
        { type: 'p', text: 'TypeScript is JavaScript with types. It catches bugs at compile time instead of at runtime. All valid JavaScript is valid TypeScript.' },
        { type: 'code', language: 'js', runnable: true, code: '// JavaScript\nfunction add(a, b) { return a + b }\nconsole.log(add(2, 3))     // 5\nconsole.log(add("2", 3))   // "23" - a bug, but JS does not care\n\n// TypeScript equivalent:\n// function add(a: number, b: number): number { return a + b }\n// add("2", 3)  ->  TypeScript error: Argument of type "string" is not assignable to parameter of type "number"\n\nconsole.log("TypeScript prevents the second call above.")' },
        { type: 'exercise', text: 'In TypeScript, add types to a multiply function. Then try calling it with a string - see the error.' },
      ],
    },
    {
      slug: 'types', title: 'Basic Types', order: 2, durationMin: 6,
      blocks: [
        { type: 'p', text: 'TypeScript has types for everything: primitives, arrays, objects, functions.' },
        { type: 'code', language: 'js', runnable: true, code: '// TypeScript syntax (types stripped for demo):\n// let name: string = "Rayan"\n// let age: number = 18\n// let isStudent: boolean = true\n// let hobbies: string[] = ["coding"]\n// let user: { name: string; age: number } = { name: "Rayan", age: 18 }\n\nconst name = "Rayan"\nconst age = 18\nconst hobbies = ["coding"]\nconst user = { name: "Rayan", age: 18 }\nconsole.log(name, age, hobbies, user)' },
        { type: 'exercise', text: 'Add a "country" field to the user object typed as string. Add a "languages" array typed as string[].' },
      ],
    },
    {
      slug: 'interfaces', title: 'Interfaces', order: 3, durationMin: 7,
      blocks: [
        { type: 'p', text: 'Interfaces describe the shape of an object. They make your code self-documenting and catch mistakes.' },
        { type: 'code', language: 'js', runnable: true, code: '// interface User {\n//   id: number\n//   name: string\n//   email?: string    <- optional\n//   isAdmin: boolean\n// }\n\nconst users = [\n  { id: 1, name: "Rayan", email: "r@example.com", isAdmin: true },\n  { id: 2, name: "Aisha", isAdmin: false }\n]\n\nconsole.log(users)' },
        { type: 'exercise', text: 'Add an optional "age?: number" field. Add a user without age. See that it is allowed.' },
      ],
    },
    {
      slug: 'generics', title: 'Generics', order: 4, durationMin: 7,
      blocks: [
        { type: 'p', text: 'Generics let you write reusable code that works with multiple types.' },
        { type: 'code', language: 'js', runnable: true, code: '// function firstItem<T>(arr: T[]): T {\n//   return arr[0]\n// }\n\nconst firstItem = (arr) => arr[0]\n\nconsole.log(firstItem([1, 2, 3]))\nconsole.log(firstItem(["a", "b"]))\nconsole.log(firstItem([{ id: 1 }]))' },
        { type: 'exercise', text: 'Write a lastItem function following the same pattern.' },
      ],
    },
  ],

  sql: [
    {
      slug: 'select', title: 'SELECT Queries', order: 1, durationMin: 6,
      blocks: [
        { type: 'p', text: 'SQL retrieves data from tables. SELECT is the most-used command.' },
        { type: 'code', language: 'js', runnable: true, code: '// Simulated database\nconst users = [\n  { id: 1, name: "Rayan", country: "Uganda", age: 18 },\n  { id: 2, name: "Aisha", country: "Kenya", age: 20 },\n  { id: 3, name: "Kofi", country: "Ghana", age: 22 }\n]\n\n// SELECT * FROM users\nconsole.log("All users:", users)\n\n// SELECT name, country FROM users\nconsole.log("Names:", users.map(u => ({ name: u.name, country: u.country })))\n\n// SELECT * FROM users WHERE country = "Uganda"\nconsole.log("From Uganda:", users.filter(u => u.country === "Uganda"))' },
        { type: 'exercise', text: 'Filter for users older than 19. Then sort by age descending.' },
      ],
    },
    {
      slug: 'insert', title: 'INSERT & UPDATE', order: 2, durationMin: 6,
      blocks: [
        { type: 'p', text: 'INSERT adds new rows. UPDATE changes existing rows. Both are essential for any database-backed app.' },
        { type: 'code', language: 'js', runnable: true, code: 'let users = [\n  { id: 1, name: "Rayan" },\n  { id: 2, name: "Aisha" }\n]\n\n// INSERT INTO users (id, name) VALUES (3, "Kofi")\nusers = [...users, { id: 3, name: "Kofi" }]\nconsole.log("After insert:", users)\n\n// UPDATE users SET name = "Aisha K." WHERE id = 2\nusers = users.map(u => u.id === 2 ? { ...u, name: "Aisha K." } : u)\nconsole.log("After update:", users)\n\n// DELETE FROM users WHERE id = 1\nusers = users.filter(u => u.id !== 1)\nconsole.log("After delete:", users)' },
        { type: 'exercise', text: 'Insert a 4th user, then update their name, then delete them.' },
      ],
    },
    {
      slug: 'joins', title: 'JOINs', order: 3, durationMin: 8,
      blocks: [
        { type: 'p', text: 'JOIN combines rows from two tables based on a related column. INNER JOIN keeps only matches; LEFT JOIN keeps all rows from the first table.' },
        { type: 'code', language: 'js', runnable: true, code: 'const users = [\n  { id: 1, name: "Rayan" },\n  { id: 2, name: "Aisha" },\n  { id: 3, name: "Kofi" }\n]\nconst orders = [\n  { id: 101, user_id: 1, total: 50 },\n  { id: 102, user_id: 1, total: 30 },\n  { id: 103, user_id: 2, total: 100 }\n]\n\n// SELECT users.name, orders.total FROM users\n// INNER JOIN orders ON orders.user_id = users.id\nconst joined = users.flatMap(u =>\n  orders.filter(o => o.user_id === u.id).map(o => ({\n    name: u.name,\n    total: o.total\n  }))\n)\nconsole.log("INNER JOIN:", joined)' },
        { type: 'exercise', text: 'Add a 4th user (with no orders) and 2 more orders. See which users appear in INNER JOIN.' },
      ],
    },
    {
      slug: 'indexes', title: 'Indexes & Performance', order: 4, durationMin: 6,
      blocks: [
        { type: 'p', text: 'Indexes make queries fast. Without them, every query scans the whole table.' },
        { type: 'h2', text: 'When to add an index' },
        { type: 'ul', items: ['A column used in WHERE clauses often', 'A column used in JOIN conditions', 'A column used in ORDER BY', 'NOT on columns that change constantly'] },
        { type: 'note', text: 'Indexes speed up reads but slow down writes. Only add them where you actually query.' },
        { type: 'exercise', text: 'In a real database, run EXPLAIN before and after adding an index. Compare the plans.' },
      ],
    },
  ],

  cybersecurity: [
    {
      slug: 'intro', title: 'Introduction to Cybersecurity', order: 1, durationMin: 6,
      blocks: [
        { type: 'p', text: 'Cybersecurity is the practice of protecting systems, networks, and data from digital attacks.' },
        { type: 'h2', text: 'The CIA triad' },
        { type: 'ul', items: ['Confidentiality - only authorized people see data', 'Integrity - data is not modified in transit', 'Availability - systems are up when needed'] },
        { type: 'exercise', text: 'Give an example of a real incident that broke each of the CIA triad pillars.' },
      ],
    },
    {
      slug: 'passwords', title: 'Passwords & Hashing', order: 2, durationMin: 7,
      blocks: [
        { type: 'p', text: 'Passwords are never stored in plain text. They are hashed with a one-way function.' },
        { type: 'code', language: 'js', runnable: true, code: 'function simpleHash(str) {\n  let hash = 0\n  for (let i = 0; i < str.length; i++) {\n    hash = ((hash << 5) - hash) + str.charCodeAt(i)\n    hash = hash & hash\n  }\n  return Math.abs(hash).toString(16)\n}\n\nconst password = "mypassword123"\nconsole.log("Password:", password)\nconsole.log("Hash:", simpleHash(password))\nconsole.log("Same input same hash:", simpleHash(password) === simpleHash(password))\nconsole.log("Different input different hash:", simpleHash("other") !== simpleHash(password))' },
        { type: 'note', text: 'Real systems use bcrypt, argon2, or scrypt - never simple hashes. Always add a salt.' },
        { type: 'exercise', text: 'Try different passwords. Notice the hash always looks random. Try passwords that differ by one character - the hash is completely different.' },
      ],
    },
    {
      slug: 'phishing', title: 'Phishing Awareness', order: 3, durationMin: 6,
      blocks: [
        { type: 'p', text: 'Phishing is the #1 way attackers compromise accounts. It exploits human trust, not code.' },
        { type: 'h2', text: 'Red flags in emails and messages' },
        { type: 'ul', items: ['Urgency: "Your account will be deleted in 24 hours"', 'Suspicious sender: not @paypal.com but @paypa1-secure.com', 'Links whose visible text does not match actual URL', 'Requests for passwords, OTPs, or card details'] },
        { type: 'exercise', text: 'Find a suspicious email in your inbox. List 3 red flags you spot.' },
      ],
    },
    {
      slug: 'https', title: 'HTTPS & Encryption', order: 4, durationMin: 6,
      blocks: [
        { type: 'p', text: 'HTTPS encrypts traffic between your browser and the server. Without it, anyone on the network can read your data.' },
        { type: 'h2', text: 'What HTTPS protects' },
        { type: 'ul', items: ['Passwords you type', 'Credit card numbers', 'Messages you send', 'Cookies and session tokens'] },
        { type: 'note', text: 'The padlock in the browser is not enough. Check the domain carefully - phishers also use HTTPS.' },
        { type: 'exercise', text: 'Visit a website and click the padlock. Read the certificate details. Who issued it? When does it expire?' },
      ],
    },
    {
      slug: 'two-factor', title: 'Two-Factor Authentication', order: 5, durationMin: 5,
      blocks: [
        { type: 'p', text: '2FA adds a second proof of identity - usually a code from your phone. Even if your password leaks, attackers still need the second factor.' },
        { type: 'h2', text: 'Types of 2FA (best to worst)' },
        { type: 'ol', items: ['Hardware keys (YubiKey) - near impossible to phish', 'Authenticator apps (Google Authenticator, Authy) - very safe', 'SMS codes - better than nothing, but vulnerable to SIM swapping', 'Email codes - weakest of all'] },
        { type: 'exercise', text: 'Enable 2FA on your Google account, GitHub, or any important service. Use an authenticator app, not SMS.' },
      ],
    },
  ],

  git: [
    {
      slug: 'intro', title: 'What is Git?', order: 1, durationMin: 5,
      blocks: [
        { type: 'p', text: 'Git is a version control system. It tracks changes to your files, lets you revert mistakes, and enables collaboration.' },
        { type: 'h2', text: 'Why everyone uses Git' },
        { type: 'ul', items: ['Every change is saved with a message', 'You can revert to any previous version', 'Multiple people can work on the same project', 'Free, open source, industry standard'] },
        { type: 'exercise', text: 'Install Git from git-scm.com. Run git --version to verify.' },
      ],
    },
    {
      slug: 'basics', title: 'Git Basics', order: 2, durationMin: 7,
      blocks: [
        { type: 'p', text: 'Four commands get you 90% of Git usage: init, add, commit, push.' },
        { type: 'h2', text: 'The essential workflow' },
        { type: 'ul', items: ['git init - start tracking in the current folder', 'git add . - stage all changes', 'git commit -m "message" - save a snapshot', 'git push - send commits to a remote (GitHub)', 'git status - see what has changed', 'git log - see commit history'] },
        { type: 'note', text: 'Commit often with clear messages. "Fix login bug" beats "update code" every time.' },
        { type: 'exercise', text: 'Create a new folder, run git init, create a file, commit it. Then run git log to see the commit.' },
      ],
    },
    {
      slug: 'branches', title: 'Branches', order: 3, durationMin: 6,
      blocks: [
        { type: 'p', text: 'Branches let you work on a feature without breaking the main code. When ready, merge back.' },
        { type: 'code', language: 'js', runnable: true, code: '// In a real terminal:\n// git checkout -b feature-login\n//   -> creates and switches to new branch\n// git add .\n// git commit -m "Add login form"\n// git checkout main\n// git merge feature-login\n//   -> brings feature-login changes into main\n\nconsole.log("Branches let you experiment safely.")' },
        { type: 'exercise', text: 'Create a branch called my-feature. Change a file. Commit. Switch back to main. Notice the file is unchanged. Merge the branch and see the changes come back.' },
      ],
    },
    {
      slug: 'github', title: 'GitHub & Collaboration', order: 4, durationMin: 6,
      blocks: [
        { type: 'p', text: 'GitHub is a cloud hosting service for Git repositories. It adds pull requests, issues, and CI/CD.' },
        { type: 'h2', text: 'Push your first project' },
        { type: 'ul', items: ['Create a repository on github.com', 'git remote add origin https://github.com/YOU/REPO.git', 'git branch -M main', 'git push -u origin main', 'Refresh GitHub - your code is there'] },
        { type: 'exercise', text: 'Create a GitHub account. Push your test project from the last lesson. Confirm it appears on github.com.' },
      ],
    },
  ],

  linux: [
    {
      slug: 'intro', title: 'Introduction to Linux', order: 1, durationMin: 5,
      blocks: [
        { type: 'p', text: 'Linux powers most web servers, Android phones, and cloud infrastructure. Learning the command line makes you more productive everywhere.' },
        { type: 'h2', text: 'Why Linux matters' },
        { type: 'ul', items: ['Free and open source', 'Runs on everything - servers, phones, embedded devices', 'The standard for cloud hosting (AWS, Google Cloud, DigitalOcean)', 'You can automate tasks with scripts'] },
        { type: 'exercise', text: 'Try Linux without installing it: boot a live USB, or use a free cloud server on Oracle Cloud or fly.io.' },
      ],
    },
    {
      slug: 'navigation', title: 'Navigation', order: 2, durationMin: 6,
      blocks: [
        { type: 'p', text: 'Four commands handle file navigation: pwd, ls, cd, and cat.' },
        { type: 'code', language: 'js', runnable: true, code: '// pwd           print working directory\n// ls            list files\n// ls -la        list all files with details\n// cd folder     change directory\n// cd ..         go up one level\n// cat file.txt  print file contents\n// less file.txt scroll through long files\n\nconsole.log("These commands are typed in a Linux terminal.")' },
        { type: 'exercise', text: 'In a Linux terminal, navigate to /etc, list files, then view the contents of /etc/hostname.' },
      ],
    },
    {
      slug: 'files', title: 'Working with Files', order: 3, durationMin: 6,
      blocks: [
        { type: 'p', text: 'Create, copy, move, delete, and edit files from the terminal.' },
        { type: 'code', language: 'js', runnable: true, code: '// touch new.txt          create empty file\n// mkdir myfolder         create folder\n// cp new.txt copy.txt    copy\n// mv copy.txt moved.txt  rename/move\n// rm new.txt             delete file\n// rm -r myfolder         delete folder (recursive)\n// nano file.txt          edit in terminal\n\nconsole.log("File operations from the command line.")' },
        { type: 'note', text: 'rm -rf is dangerous. There is no recycle bin. Double-check before running it.' },
        { type: 'exercise', text: 'Create 3 files. Move them into a folder. Rename one. Delete one.' },
      ],
    },
    {
      slug: 'permissions', title: 'File Permissions', order: 4, durationMin: 7,
      blocks: [
        { type: 'p', text: 'Every file has read (r), write (w), and execute (x) permissions for owner, group, and others.' },
        { type: 'code', language: 'js', runnable: true, code: '// -rw-r--r-- 1 user user 4096 Nov 1 file.txt\n//  ^ ^  ^  ^\n//  | |  |  others\n//  | |  group\n//  | owner\n//  type (- = file, d = directory)\n\n// chmod +x script.sh      add execute permission\n// chmod 755 script.sh     rwxr-xr-x\n// chmod 644 file.txt      rw-r--r--\n\nconsole.log("Permissions control who can read, write, execute.")' },
        { type: 'exercise', text: 'Create a shell script that prints "Hello". Run it with ./script.sh (permission denied). Add execute permission. Run again - it works.' },
      ],
    },
  ],

  java: [
    {
      slug: 'hello', title: 'Hello, World in Java', order: 1, durationMin: 5,
      blocks: [
        { type: 'p', text: 'Java runs on Android, enterprise servers, and banking systems. It is verbose but reliable.' },
        { type: 'code', language: 'js', runnable: true, code: '// Real Java:\n// public class Main {\n//   public static void main(String[] args) {\n//     System.out.println("Hello, World!");\n//   }\n// }\n\n// Demo of the equivalent output:\nconsole.log("Hello, World!")' },
        { type: 'exercise', text: 'Download JDK 21 from adoptium.net. Write Main.java. Compile with javac Main.java. Run with java Main.' },
      ],
    },
    {
      slug: 'types', title: 'Types & Variables', order: 2, durationMin: 6,
      blocks: [
        { type: 'p', text: 'Java requires you to declare the type of every variable. Types cannot change after declaration.' },
        { type: 'code', language: 'js', runnable: true, code: '// int age = 18;\n// double price = 19.99;\n// String name = "Rayan";\n// boolean isStudent = true;\n// char grade = \'A\';\n\n// Java version of same:\nconst age = 18\nconst price = 19.99\nconst name = "Rayan"\nconst isStudent = true\nconst grade = "A"\nconsole.log(age, price, name, isStudent, grade)' },
        { type: 'exercise', text: 'In real Java, declare a variable for your name, age, and country. Print them with System.out.println().' },
      ],
    },
    {
      slug: 'classes', title: 'Classes & Objects', order: 3, durationMin: 8,
      blocks: [
        { type: 'p', text: 'Java is an object-oriented language. Everything lives inside a class. Classes are blueprints; objects are instances.' },
        { type: 'code', language: 'js', runnable: true, code: '// class User {\n//   String name;\n//   int age;\n//   User(String name, int age) { this.name = name; this.age = age; }\n//   void greet() { System.out.println("Hi " + name); }\n// }\n\nclass User {\n  constructor(name, age) {\n    this.name = name\n    this.age = age\n  }\n  greet() { console.log("Hi " + this.name) }\n}\n\nconst u = new User("Rayan", 18)\nu.greet()\nconsole.log(u.name, u.age)' },
        { type: 'exercise', text: 'Add a "country" field to the class. Add a method that prints "I am from {country}".' },
      ],
    },
    {
      slug: 'collections', title: 'Lists & Maps', order: 4, durationMin: 7,
      blocks: [
        { type: 'p', text: 'Java has ArrayList for ordered lists and HashMap for key-value pairs.' },
        { type: 'code', language: 'js', runnable: true, code: '// List<String> fruits = new ArrayList<>();\n// fruits.add("apple");\n// fruits.add("banana");\n\n// Map<String, Integer> ages = new HashMap<>();\n// ages.put("Rayan", 18);\n// ages.put("Aisha", 20);\n\n// Equivalent in JS:\nconst fruits = ["apple", "banana"]\nconst ages = { Rayan: 18, Aisha: 20 }\nconsole.log(fruits)\nconsole.log(ages)' },
        { type: 'exercise', text: 'In real Java, create a List of 5 countries. Print each with a for-each loop.' },
      ],
    },
  ],

  c: [
    {
      slug: 'hello', title: 'Hello, World in C', order: 1, durationMin: 5,
      blocks: [
        { type: 'p', text: 'C is the mother of modern programming. Linux, Windows, databases, and embedded systems are written in C.' },
        { type: 'code', language: 'c', runnable: true, code: '#include <stdio.h>\n\nint main() {\n    printf("Hello, World!\\n");\n    return 0;\n}' },
        { type: 'note', text: 'Click "Run on Replit" to compile and run C online.' },
        { type: 'exercise', text: 'Print your name instead of "World". Print two lines using two printf calls.' },
      ],
    },
    {
      slug: 'variables', title: 'Variables & Types', order: 2, durationMin: 7,
      blocks: [
        { type: 'p', text: 'C requires explicit types for every variable. Size matters - int is 4 bytes, char is 1, double is 8.' },
        { type: 'code', language: 'c', runnable: true, code: '#include <stdio.h>\n\nint main() {\n    int age = 18;\n    float height = 1.75f;\n    char grade = \'A\';\n    double pi = 3.14159;\n\n    printf("Age: %d\\n", age);\n    printf("Height: %.2f\\n", height);\n    printf("Grade: %c\\n", grade);\n    printf("Pi: %.5f\\n", pi);\n    return 0;\n}' },
        { type: 'h2', text: 'Format specifiers' },
        { type: 'ul', items: ['%d - int', '%f - float/double', '%c - char', '%s - string (char array)', '%.2f - double with 2 decimals'] },
        { type: 'exercise', text: 'Declare a variable for your country initial (char). Print it. Then print your birth year (int).' },
      ],
    },
    {
      slug: 'pointers', title: 'Pointers', order: 3, durationMin: 8,
      blocks: [
        { type: 'p', text: 'Pointers are the soul of C. A pointer holds the memory address of another variable. They enable fast data structures and direct memory control.' },
        { type: 'code', language: 'c', runnable: true, code: '#include <stdio.h>\n\nint main() {\n    int x = 42;\n    int *p = &x;    // p holds the address of x\n\n    printf("x = %d\\n", x);\n    printf("&x (address) = %p\\n", (void*)&x);\n    printf("p (pointer) = %p\\n", (void*)p);\n    printf("*p (value at p) = %d\\n", *p);\n\n    *p = 100;       // change x through the pointer\n    printf("x after *p = 100 -> %d\\n", x);\n    return 0;\n}' },
        { type: 'note', text: '& is "address of", * is "value at". These two operators make C both powerful and dangerous.' },
        { type: 'exercise', text: 'Create a variable y = 50. Create a pointer that points to y. Print y through the pointer. Change y through the pointer. Print y.' },
      ],
    },
    {
      slug: 'functions', title: 'Functions', order: 4, durationMin: 6,
      blocks: [
        { type: 'p', text: 'Functions in C must declare their return type and parameter types.' },
        { type: 'code', language: 'c', runnable: true, code: '#include <stdio.h>\n\nint add(int a, int b) {\n    return a + b;\n}\n\nint square(int n) {\n    return n * n;\n}\n\nvoid greet(char *name) {\n    printf("Hello, %s!\\n", name);\n}\n\nint main() {\n    printf("2 + 3 = %d\\n", add(2, 3));\n    printf("5 squared = %d\\n", square(5));\n    greet("Rayan");\n    return 0;\n}' },
        { type: 'exercise', text: 'Write a max(a, b) function that returns the larger number. Test with (10, 20) and (30, 5).' },
      ],
    },
  ],

  cpp: [
    {
      slug: 'hello', title: 'Hello, World in C++', order: 1, durationMin: 5,
      blocks: [
        { type: 'p', text: 'C++ is C with object-oriented features. Used in games, browsers, and high-performance systems.' },
        { type: 'code', language: 'cpp', runnable: true, code: '#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << "Hello, World!" << endl;\n    return 0;\n}' },
        { type: 'exercise', text: 'Print your name, then print a blank line, then print your country.' },
      ],
    },
    {
      slug: 'classes', title: 'Classes', order: 2, durationMin: 8,
      blocks: [
        { type: 'p', text: 'Classes are the foundation of C++. They bundle data and methods together.' },
        { type: 'code', language: 'cpp', runnable: true, code: '#include <iostream>\n#include <string>\nusing namespace std;\n\nclass User {\npublic:\n    string name;\n    int age;\n\n    User(string n, int a) : name(n), age(a) {}\n\n    void greet() {\n        cout << "Hi " << name << ", age " << age << endl;\n    }\n};\n\nint main() {\n    User u("Rayan", 18);\n    u.greet();\n    return 0;\n}' },
        { type: 'exercise', text: 'Add a "country" field. Add a method that prints "I am from {country}".' },
      ],
    },
    {
      slug: 'vectors', title: 'Vectors', order: 3, durationMin: 6,
      blocks: [
        { type: 'p', text: 'Vectors are dynamic arrays - like Java ArrayList or JavaScript arrays.' },
        { type: 'code', language: 'cpp', runnable: true, code: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    vector<int> scores = {95, 82, 77, 100};\n    scores.push_back(88);\n\n    for (int s : scores) {\n        cout << s << " ";\n    }\n    cout << endl;\n    return 0;\n}' },
        { type: 'exercise', text: 'Create a vector of 3 fruits. Add a 4th. Print them all with a loop.' },
      ],
    },
  ],

  go: [
    {
      slug: 'hello', title: 'Hello, World in Go', order: 1, durationMin: 5,
      blocks: [
        { type: 'p', text: 'Go is Google\'s language for cloud infrastructure. Docker, Kubernetes, and Terraform are written in Go.' },
        { type: 'code', language: 'js', runnable: true, code: '// Go version:\n// package main\n// import "fmt"\n// func main() {\n//   fmt.Println("Hello, World!")\n// }\n\nconsole.log("Hello, World!")' },
        { type: 'exercise', text: 'Install Go from go.dev. Create main.go. Run go run main.go.' },
      ],
    },
    {
      slug: 'variables', title: 'Variables', order: 2, durationMin: 6,
      blocks: [
        { type: 'p', text: 'Go has three ways to declare a variable: var, :=, and const.' },
        { type: 'code', language: 'js', runnable: true, code: '// var name string = "Rayan"\n// age := 18\n// const pi = 3.14159\n\nconst name = "Rayan"\nconst age = 18\nconst pi = 3.14159\nconsole.log(name, age, pi)' },
        { type: 'exercise', text: 'Declare variables for your name, age, and country. Print them.' },
      ],
    },
    {
      slug: 'goroutines', title: 'Goroutines', order: 3, durationMin: 7,
      blocks: [
        { type: 'p', text: 'Goroutines are lightweight threads. Start with go func(). They make concurrent code simple.' },
        { type: 'code', language: 'js', runnable: true, code: '// Real Go:\n// go printNumbers()\n// go printLetters()\n// time.Sleep(1 * time.Second)\n\n// Demo concept: two independent tasks\nconst printNumbers = () => console.log("Numbers: 1 2 3")\nconst printLetters = () => console.log("Letters: a b c")\nprintNumbers()\nprintLetters()\nconsole.log("Both ran concurrently in real Go")' },
        { type: 'exercise', text: 'In real Go, spawn 3 goroutines that print different messages. Add time.Sleep so they finish before main exits.' },
      ],
    },
  ],
}

function pickLanguage(course: CourseLike): 'js' | 'python' | 'html' | 'css' {
  const cat = (course.category || '').toLowerCase()
  const title = (course.title || '').toLowerCase()
  if (title.includes('python') || cat.includes('python')) return 'python'
  if (title.includes('html') || cat.includes('html')) return 'html'
  if (title.includes('css') || cat.includes('css')) return 'css'
  return 'js'
}

function buildStarter(course: CourseLike, lang: 'js' | 'python' | 'html' | 'css'): string {
  const firstObj = (course.objectives && course.objectives[0]) || (course.curriculum && course.curriculum[0]) || 'the fundamentals'
  const safe = firstObj.replace(/"/g, "'").replace(/\n/g, ' ')
  if (lang === 'python') return '# ' + course.title + ' - first example\nprint("Welcome to ' + course.title + '!")\nprint("You will learn: ' + safe + '")'
  if (lang === 'html') return '<!DOCTYPE html>\n<html>\n<head><title>' + course.title + '</title></head>\n<body style="font-family: system-ui; padding: 20px">\n<h1>' + course.title + '</h1>\n<p>' + course.description + '</p>\n</body>\n</html>'
  if (lang === 'css') return 'body { font-family: system-ui; padding: 20px; }\nh1 { color: #10b981; }'
  return '// ' + course.title + ' - first example\nconsole.log("Welcome to ' + course.title + '!")\nconsole.log("You will learn: ' + safe + '")'
}
function generateLessons(course: CourseLike): Lesson[] {
  const lang = pickLanguage(course)
  const objectives = (course.objectives && course.objectives.length > 0)
    ? course.objectives
    : ((course.curriculum && course.curriculum.length > 0)
      ? course.curriculum
      : ['The fundamentals'])

  const curriculum = (course.curriculum && course.curriculum.length > 0)
    ? course.curriculum
    : objectives

  return [
    {
      slug: 'overview',
      title: 'Course Overview: ' + course.title,
      order: 1,
      durationMin: 6,
      blocks: [
        { type: 'p', text: course.description },
        { type: 'h2', text: 'What this course covers' },
        { type: 'p', text: 'This course walks you through ' + objectives.length + ' core topics. By the end, you will have a working understanding of ' + course.title + ' and be ready to build real projects.' },
        { type: 'h2', text: 'Topics in order' },
        { type: 'ol', items: curriculum },
        { type: 'h2', text: 'Starter example' },
        { type: 'p', text: 'Here is a simple example to give you a feel for what the code looks like in this area:' },
        { type: 'code', language: lang, runnable: true, code: buildStarter(course, lang) },
        { type: 'p', text: 'Click Run Code above to see the output. This is the pattern we build on throughout the course.' },
        { type: 'exercise', text: 'Change one value in the example and run it again. Notice what happens.' },
      ],
    },
    {
      slug: 'first-topic',
      title: curriculum[0] || 'Getting Started',
      order: 2,
      durationMin: 8,
      blocks: [
        { type: 'p', text: 'We start with ' + (curriculum[0] || 'the fundamentals') + '. This is the foundation everything else builds on, so take your time here.' },
        { type: 'h2', text: 'Why this matters' },
        { type: 'p', text: 'Without ' + (curriculum[0] || 'the fundamentals') + ', the later topics in this course will feel disconnected. Master this first and the rest becomes much easier.' },
        { type: 'h2', text: 'Key ideas' },
        { type: 'ul', items: [
          'Understand what ' + (curriculum[0] || 'this concept') + ' actually solves',
          'See how it fits into the bigger picture of ' + course.title,
          'Practice with a small example before moving on',
        ]},
        { type: 'note', text: 'Take notes in your own words. If you can explain a concept to a friend, you understand it.' },
      ],
    },
    {
      slug: 'next-steps',
      title: 'Next Steps',
      order: 3,
      durationMin: 5,
      blocks: [
        { type: 'p', text: 'You have covered the foundation of ' + course.title + '. Here is how to keep going:' },
        { type: 'h2', text: 'To practice' },
        { type: 'ul', items: [
          'Build one small project using only what you learned in this course',
          'Break something on purpose — then fix it',
          'Read about the next course in the catalogue and see how the topics connect',
        ]},
        { type: 'h2', text: 'Recommended next course' },
        { type: 'p', text: 'After ' + course.title + ', the natural next step is to explore related courses in the catalogue. Every course is free, so you can pick whichever one matches what you want to build.' },
        { type: 'note', text: 'You do not need to finish everything at once. Fifteen minutes a day is enough to make real progress.' },
      ],
    },
  ]
}

const slugMap: Record<string, string> = {
  'javascript-fundamentals': 'javascript',
  'javascript-dom': 'javascript',
  'python-for-beginners': 'python',
  'html-css-foundations': 'html',
  'responsive-web-design': 'css',
  'react-essentials': 'react',
  'nodejs-backend-apis': 'nodejs',
  'typescript-essentials': 'typescript',
  'sql-fundamentals': 'sql',
  'mysql-essentials': 'sql',
  'postgresql-mastery': 'sql',
  'cybersecurity-fundamentals': 'cybersecurity',
  'git-github-essentials': 'git',
  'linux-fundamentals': 'linux',
  'java-programming': 'java',
  'c-programming-basics': 'c',
  'cpp-programming': 'cpp',
  'go-programming': 'go',
}
export function getLessons(slug: string): Lesson[] {
  const key = slugMap[slug] || slug
  // Check expanded lessons FIRST (higher quality, 1,000+ words each)
  if (key === 'javascript') {
    return expandedJsLessons
  }
  if (key === 'python') {
    return expandedPyLessons
  }
  const explicit = lessonsByCourse[key]
  if (explicit && explicit.length > 0) return explicit
  const course = getCourse(slug)
  if (!course) return []
  return generateLessons(course as unknown as CourseLike)
}


export function getLesson(slug: string, lessonSlug: string): Lesson | undefined {
  return getLessons(slug).find((l) => l.slug === lessonSlug)
}

