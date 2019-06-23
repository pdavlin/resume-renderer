const express = require("express");
const nunjucks = require("nunjucks");
const fs = require("fs");
const config = require("./renderConfig");

const argv = require("yargs")
  .usage("Usage: $0 [options]")
  .help("h")
  .option("s", {
    alias: "serve",
    type: "boolean",
    default: false,
    describe:
      "Keeps the web server open instead of exiting the program after rendering PDFs. Good for using the web inspector."
  }).argv;

const puppeteer = require("puppeteer");

const outputFolder = "./out";
if (!fs.existsSync(outputFolder)) {
  fs.mkdirSync(outputFolder);
}

var app = express();

nunjucks.configure("resumes", {
  autoescape: true,
  express: app
});

app.use(express.static("static"));

config.renders.forEach(renderConfig => {
  app.get(`/resume/${renderConfig.title}`, (req, res) => {
    res.render(renderConfig.template, renderConfig.data);
  });
});

const port = 3000;
const server = app.listen(port, () => console.log("listening on " + port));

const render = async renderConfig => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(`http://localhost:${port}/resume/${renderConfig.title}`, {
    waitUntil: "networkidle2"
  });
  await page.pdf({
    path: `${outputFolder}/${config.prefix}${renderConfig.title}.pdf`,
    format: "Letter",
    pageRanges: "1"
  });

  await browser.close();
  console.log("rendered", renderConfig.title);
};

async function renderAll(callback) {
  await Promise.all(
    config.renders.map(renderConfig => {
      return render(renderConfig);
    })
  );
  callback();
}

function exitScript() {
  server.close();
  process.exit(0);
}

if (argv.serve) {
  // Keep server up after rendering instead of exiting script
  // This is useful for using browser devtools to inspect rendered doc
  renderAll(() => {});
} else {
  renderAll(exitScript);
}
