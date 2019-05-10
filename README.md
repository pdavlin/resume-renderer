# Resume-renderer
It programmatically renders PDF resumes (or other documents) using HTML, CSS, and JS.

# Why
I don't like WYSIWYG, LaTeX is old and a bit clunky around things like fonts, and I already know CSS for styling.

# How
More specifically:
* [Nunjucks](https://mozilla.github.io/nunjucks/templating.html) for Templating
* [Tailwind CSS](https://tailwindcss.com/docs/what-is-tailwind/) for easier, faster CSS writing. The utility-based approach seems especially well suited for this project since a single-page document is limited in scope.
* [Puppeteer](https://github.com/GoogleChrome/puppeteer) for rendering using headless chromium's PDF output mode.


## Running
Start with `npm install`. It might take a little bit as Puppeteer will install Chromium.

Then the following commands will work:
`npm run build` will rebuild the Tailwind.css file and render all resumes.
`npm run css` will rebuild the Tailwind.css.
`npm run render` will render all resumes without rebuilding the CSS file.

Try `nodemon index.js` to rerender all pdfs upon saving a file.