# Resume-renderer
It programmatically renders resumes (or other documents) using HTML, CSS, and JS.

More specifically:
* Nunjucks for Templating
* Tailwind.css for easier, faster CSS writing. The utility-based approach seems especially well suited for this project since a single-page document is limited in scope.
* Puppeteer for rendering using headless chromium's PDF output mode.

I don't like WYSIWYG, LaTeX is old and a bit clunky around things like fonts, and I already know CSS for styling.

## Running
`npm run build` will rebuild the Tailwind.css file and render all resumes.
`npm run css` will rebuild the Tailwind.css.
`npm run render` will render all resumes without rebuilding the CSS file.