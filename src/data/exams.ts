export type Question = {
  q: string
  options: string[]
  correct: number
  explain: string
}

export const exams: Record<string, Question[]> = {
  javascript: [
    { q: 'Which keyword declares a constant variable?', options: ['var', 'let', 'const', 'static'], correct: 2, explain: 'const declares a variable that cannot be reassigned.' },
    { q: 'What does typeof [] return?', options: ['"array"', '"object"', '"list"', '"undefined"'], correct: 1, explain: 'In JavaScript, arrays are objects. typeof [] returns "object".' },
    { q: 'Which of these is a falsy value?', options: ['"0"', '[]', '0', '{}'], correct: 2, explain: '0 (number zero) is falsy. The string "0" and empty array/object are truthy.' },
    { q: 'What does === do?', options: ['Assigns a value', 'Compares value only', 'Compares value AND type', 'Compares type only'], correct: 2, explain: '=== is strict equality — checks both value and type. "5" === 5 is false.' },
    { q: 'How do you write a single-line comment?', options: ['# comment', '<!-- comment -->', '// comment', '-- comment'], correct: 2, explain: 'JavaScript uses // for single-line and /* */ for multi-line comments.' },
    { q: 'Which array method returns a new array with each item transformed?', options: ['forEach()', 'map()', 'filter()', 'find()'], correct: 1, explain: 'map() returns a new array. forEach() returns nothing. filter() keeps items, not transforms.' },
    { q: 'What does the `return` statement do inside a function?', options: ['Prints a value', 'Ends the function and outputs a value to the caller', 'Creates a variable', 'Restarts the function'], correct: 1, explain: 'return ends function execution and sends the value back to the code that called it.' },
    { q: 'How do you check if an array contains a specific value?', options: ['array.has(x)', 'array.contains(x)', 'array.includes(x)', 'array.find(x)'], correct: 2, explain: 'includes() returns true if the value exists in the array.' },
    { q: 'What is the difference between null and undefined?', options: ['They are identical', 'null is intentional empty; undefined means variable declared but not assigned', 'undefined is a type error; null is not', 'Only null exists in JS'], correct: 1, explain: 'null is explicitly set by the programmer to mean "no value". undefined happens automatically when a variable has no assigned value.' },
    { q: 'What will `console.log(2 + "2")` output?', options: ['4', '"22"', '"4"', 'NaN'], correct: 1, explain: 'With + and a string, JavaScript concatenates. 2 + "2" = "22" (string).' },
  ],

  python: [
    { q: 'Which function prints output to the console?', options: ['console.log()', 'echo()', 'print()', 'write()'], correct: 2, explain: 'Python uses print() to output text.' },
    { q: 'Which keyword defines a function?', options: ['function', 'def', 'fun', 'lambda'], correct: 1, explain: 'def defines a function in Python: def my_func(): ...' },
    { q: 'What is the difference between / and // in Python?', options: ['No difference', '/ is float division, // is integer (floor) division', '// is a comment', '/ is deprecated'], correct: 1, explain: '7 / 2 = 3.5; 7 // 2 = 3 (floor).' },
    { q: 'Which is a valid Python list?', options: ['{1, 2, 3}', '[1, 2, 3]', '(1, 2, 3)', '<1, 2, 3>'], correct: 1, explain: 'Lists use square brackets: [1, 2, 3]. Tuples use (), sets use {}.' },
    { q: 'How do you import the math module?', options: ['using math', 'include math', 'import math', 'require math'], correct: 2, explain: 'import math brings the whole module. from math import sqrt imports specific items.' },
    { q: 'What does len("hello") return?', options: ['4', '5', '6', 'error'], correct: 1, explain: '"hello" has 5 characters, so len() returns 5.' },
    { q: 'What does a Python dictionary store?', options: ['Ordered list of items', 'Key-value pairs', 'Only numbers', 'Only strings'], correct: 1, explain: 'dicts store key-value pairs: {"name": "Rayan", "age": 18}.' },
    { q: 'Which block catches errors in Python?', options: ['catch / finally', 'try / except', 'try / catch', 'handle / error'], correct: 1, explain: 'Python uses try/except (not try/catch like other languages).' },
    { q: 'What is pip?', options: ['A Python IDE', 'Python\'s package manager', 'A testing framework', 'A syntax highlighter'], correct: 1, explain: 'pip installs packages from PyPI: pip install requests.' },
    { q: 'Is Python compiled or interpreted?', options: ['Compiled', 'Interpreted', 'Both equally', 'Neither'], correct: 1, explain: 'Python is interpreted (line by line), though it does compile to bytecode internally.' },
  ],

  html: [
    { q: 'What does HTML stand for?', options: ['Hyper Text Markup Language', 'Home Tool Markup Language', 'High Tech Modern Language', 'Hyperlink Text Management Language'], correct: 0, explain: 'HTML = HyperText Markup Language. It describes the structure of web pages.' },
    { q: 'Which tag creates a hyperlink?', options: ['<link>', '<a>', '<href>', '<url>'], correct: 1, explain: '<a href="url">text</a> creates a link. <link> is for stylesheets in the head.' },
    { q: 'What is the correct structure of an HTML document?', options: ['<head><body><html>', '<html><head></head><body></body></html>', '<body><html><head></head></body></html>', '<html><body><head></head></body></html>'], correct: 1, explain: 'The html element wraps head (metadata) and body (visible content).' },
    { q: 'Which tag displays an image?', options: ['<image>', '<picture>', '<img>', '<src>'], correct: 2, explain: '<img src="url" alt="description"> displays an image. It is self-closing.' },
    { q: 'What does semantic HTML mean?', options: ['HTML that looks nice', 'Tags that describe their meaning (e.g., <header>, <article>)', 'HTML with animations', 'Deprecated HTML'], correct: 1, explain: 'Semantic tags like <header>, <nav>, <article> describe the content, helping browsers and search engines.' },
    { q: 'Which tag creates an unordered (bullet) list?', options: ['<ol>', '<ul>', '<li>', '<dl>'], correct: 1, explain: '<ul> creates a bullet list. <ol> creates a numbered list. <li> is each item.' },
    { q: 'What is the default method for a form submission?', options: ['POST', 'PUT', 'GET', 'SUBMIT'], correct: 2, explain: 'Forms default to GET (data in URL). Use method="POST" to send data in the request body.' },
    { q: 'What is the purpose of <meta> tags?', options: ['Add metadata for browsers/SEO', 'Create menu items', 'Make elements responsive', 'Load CSS'], correct: 0, explain: '<meta> provides metadata: character encoding, viewport, description for SEO, etc.' },
    { q: 'What is <div>?', options: ['A form field', 'A generic block container', 'A text element', 'A heading'], correct: 1, explain: '<div> is a generic block-level container for grouping content. Use it with classes for layout.' },
    { q: 'Which is a self-closing tag?', options: ['<div>', '<p>', '<img>', '<a>'], correct: 2, explain: '<img>, <br>, <input>, <meta> do not need closing tags because they have no content.' },
  ],

  css: [
    { q: 'What does CSS stand for?', options: ['Cascading Style Sheets', 'Computer Style System', 'Creative Style Syntax', 'Colorful Style Sheets'], correct: 0, explain: 'CSS = Cascading Style Sheets. It styles HTML content.' },
    { q: 'Which selector targets all elements with class "highlight"?', options: ['#highlight', 'highlight', '.highlight', '*highlight'], correct: 2, explain: '.classname targets classes. #idname targets IDs. Just "highlight" targets <highlight> tags (rare).' },
    { q: 'What are the layers of the CSS box model (inside to outside)?', options: ['margin, border, padding, content', 'content, padding, border, margin', 'border, padding, content, margin', 'content, border, padding, margin'], correct: 1, explain: 'Content is innermost. padding is inside the border. border is the boundary. margin is outside.' },
    { q: 'What is flexbox used for?', options: ['3D animations', '1-dimensional layout (row or column)', 'Gradients', 'Font styling'], correct: 1, explain: 'Flexbox lays out items in a row or column with control over spacing and alignment. Grid handles 2D.' },
    { q: 'How do you make a layout responsive to screen size?', options: ['Using <responsive> tags', 'Using media queries', 'Using JavaScript only', 'It\'s automatic'], correct: 1, explain: '@media (min-width: 768px) { ... } applies styles only when the screen is wide enough.' },
    { q: 'What does display: none do?', options: ['Makes the element invisible but keeps space', 'Hides the element AND removes it from layout', 'Makes it smaller', 'Removes all CSS'], correct: 1, explain: 'display:none removes the element from the layout entirely. visibility:hidden hides it but keeps the space.' },
    { q: 'What is the highest-priority CSS selector method?', options: ['Element selector', 'Class selector', 'ID selector', '!important'], correct: 3, explain: '!important overrides almost everything. Use it as a last resort — it makes CSS harder to maintain.' },
    { q: 'What does box-sizing: border-box do?', options: ['Adds a border', 'Makes width/height include padding and border', 'Makes the box a square', 'Removes the border'], correct: 1, explain: 'With border-box, width: 200px means the total width is 200px (padding and border included). This is the modern standard.' },
    { q: 'What is z-index used for?', options: ['Vertical positioning', 'Stacking order of overlapping elements', 'Zoom level', 'Animation speed'], correct: 1, explain: 'Higher z-index appears on top. Only works on positioned elements (relative, absolute, fixed).' },
    { q: 'What is the difference between em and rem?', options: ['They are identical', 'em is relative to parent font-size; rem is relative to root font-size', 'rem is deprecated', 'em is only for margins'], correct: 1, explain: 'em compounds with parent sizes (tricky). rem always refers to the <html> font-size (predictable).' },
  ],

  react: [
    { q: 'What is a React component?', options: ['A file', 'A reusable UI piece that returns JSX', 'A hook', 'A library'], correct: 1, explain: 'Components are functions (or classes) that return JSX. They\'re the building blocks of any React app.' },
    { q: 'Which hook manages local state?', options: ['useState', 'useEffect', 'useContext', 'useMemo'], correct: 0, explain: 'useState returns [value, setter] to read and update state. Changes trigger a re-render.' },
    { q: 'Which hook runs side effects (fetch, timers)?', options: ['useState', 'useEffect', 'useRef', 'useReducer'], correct: 1, explain: 'useEffect runs after render. The dependency array controls when it re-runs.' },
    { q: 'What is JSX?', options: ['A JavaScript file extension', 'HTML-like syntax inside JavaScript', 'A testing tool', 'A CSS framework'], correct: 1, explain: 'JSX lets you write <div>Hello</div> inside JavaScript. It compiles to React.createElement() calls.' },
    { q: 'What are props?', options: ['Component state', 'Read-only inputs passed from parent to child', 'Global variables', 'Hooks'], correct: 1, explain: 'Props are passed as attributes: <Card title="Hi" />. They are read-only inside the child.' },
    { q: 'What is the "key" prop used for in lists?', options: ['Encrypting data', 'Unique identifier so React can track items', 'Sorting', 'Styling'], correct: 1, explain: 'Keys help React identify which items changed. Use a stable ID (not array index) for performance.' },
    { q: 'What is the virtual DOM?', options: ['A separate browser', 'A JavaScript representation of the real DOM', 'A CSS layout system', 'A testing framework'], correct: 1, explain: 'React keeps a virtual DOM in memory, diffs it against the real DOM, and applies only necessary changes.' },
    { q: 'What happens when you call setState (or useState setter)?', options: ['Nothing', 'The component re-renders with the new value', 'The page reloads', 'Only console shows the change'], correct: 1, explain: 'setState triggers a re-render. React batches updates for performance.' },
    { q: 'What is a controlled component?', options: ['A component with no state', 'A form input whose value is controlled by React state', 'A component with errors', 'A class component'], correct: 1, explain: 'In controlled inputs, the value comes from state: <input value={x} onChange={...} />.' },
    { q: 'What is Context API used for?', options: ['Routing', 'Sharing state without prop drilling', 'HTTP requests', 'Styling'], correct: 1, explain: 'Context shares data (theme, user, language) with many components without passing props through every level.' },
  ],
}

export const PASS_THRESHOLD = 0.7  // 70% needed to pass

export function getExam(slug: string): Question[] | undefined {
  return exams[slug]
}

export function getPassingScore(total: number): number {
  return Math.ceil(total * PASS_THRESHOLD)
}