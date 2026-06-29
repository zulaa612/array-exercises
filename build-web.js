/* ============================================================
   build-web.js — generate a read-only web view of the exercises.
   Single source of truth stays the .js files; rerun to resync.
   Run:  node build-web.js   ->  writes array-exercises.html
   No dependencies. Open the .html by double-clicking (no server).
   ============================================================ */
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const DIR = __dirname;
const OUT = path.join(DIR, "index.html"); // so the bare Pages URL serves it
const ZIP = "array-exercises.zip"; // sits beside the .html so the link is relative

// nice display names per file (fallback = filename)
const NAMES = {
  "1-basics.js": "1 · Basics",
  "2-methods.js": "2 · Methods",
  "3-database-movies.js": "3 · Movies DB",
  "4-database-employees.js": "4 · Employees DB",
  "5-database-products.js": "5 · Products DB",
  "6-database-fifa.js": "6 · FIFA DB",
};

const esc = (s) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// pick numbered exercise files, in order
const files = fs
  .readdirSync(DIR)
  .filter((f) => /^\d.*\.js$/.test(f))
  .sort();

const readme = fs.existsSync(path.join(DIR, "README.md"))
  ? fs.readFileSync(path.join(DIR, "README.md"), "utf8")
  : "";

const slug = (f) => f.replace(/\.js$/, "");
const title = (f) => NAMES[f] || f;

const pills = files
  .map((f) => `<a class="pill" href="#${slug(f)}">${title(f)}</a>`)
  .join("\n        ");

const sections = files
  .map((f) => {
    const code = fs.readFileSync(path.join(DIR, f), "utf8");
    const lines = code.split("\n").length;
    return `
      <section id="${slug(f)}" class="file-card">
        <h2>${title(f)} <span class="meta">${f} · ${lines} lines</span></h2>
        <pre><code class="language-javascript">${esc(code)}</code></pre>
      </section>`;
  })
  .join("\n");

const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Array Exercises — JS Class</title>
    <link rel="stylesheet" href="../styles.css" />
    <link rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/atom-one-dark.min.css" />
    <style>
      .file-card { margin: 24px 0; }
      .file-card h2 { display:flex; align-items:baseline; gap:10px; flex-wrap:wrap; }
      .file-card .meta { font-size:.75rem; font-weight:500; color:var(--muted); }
      .file-card pre {
        background:#282c34; border-radius:var(--radius); padding:18px 20px;
        overflow:auto; box-shadow:var(--shadow); font-size:.82rem; line-height:1.5;
      }
      .file-card code { font-family: ui-monospace, "SF Mono", Menlo, monospace; }
      .intro pre { white-space:pre-wrap; font-size:.85rem; }
    </style>
  </head>
  <body data-lesson="arrays">
    <nav class="topbar">
      <a class="home" href="../index.html">🏫 JS Class</a>
      <span class="spacer"></span>
      <a class="pill" href="../index.html">← Lessons</a>
      ${pills}
    </nav>

    <div class="wrap">
      <header class="hero">
        <span class="emoji">🧮</span>
        <h1>Array Exercises</h1>
        <p>Read-only reference. Do them in your editor — run with
           <code>node &lt;file&gt;</code>. Each exercise has 3 test cases to pass.</p>
        <p><a class="pill" href="${ZIP}" download>⬇️ Download all exercises (.zip)</a></p>
      </header>

      <div class="note intro">
        <h3>📖 How to use</h3>
        <pre>${esc(readme)}</pre>
      </div>
${sections}
    </div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"></script>
    <script>hljs.highlightAll();</script>
  </body>
</html>
`;

fs.writeFileSync(OUT, html);
console.log(`wrote ${path.basename(OUT)} — ${files.length} files, ${html.length} bytes`);

// bundle the folder into a zip the download link points at. Uses the OS `zip`
// (present on macOS/Linux). ponytail: shell out, no zip dependency in node.
const folder = path.basename(DIR);
try {
  execSync(
    `zip -rq "${folder}/${ZIP}" "${folder}" -x "${folder}/${ZIP}" "${folder}/.git/*"`,
    { cwd: path.dirname(DIR) },
  );
  const kb = (fs.statSync(path.join(DIR, ZIP)).size / 1024).toFixed(1);
  console.log(`wrote ${ZIP} — ${kb} KB`);
} catch {
  console.log(`! could not build ${ZIP} (is the 'zip' command installed?)`);
}
