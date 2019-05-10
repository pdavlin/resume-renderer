const express = require("express");
const nunjucks = require("nunjucks");
const fs = require("fs");
const config = require("./renderConfig");

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
  // console.log(renderConfig);

  await browser.close();
  console.log("rendered", renderConfig.title);
};

async function renderAll(callback) {
  for (let index = 0; index < config.renders.length; index++) {
    await render(config.renders[index]);
  }

  // callback();
}

renderAll(() => {
  server.close();
  process.exit(0);
});
