const express = require('express');
const nunjucks = require('nunjucks');
const fs = require('fs');
const resumeData = JSON.parse(fs.readFileSync('./resumedata.json', 'utf8'));

const puppeteer = require('puppeteer');

var app = express();

nunjucks.configure('resumes', {
    autoescape: true,
    express: app
})



app.get('/', (req, res) => {
    res.render('index.html', resumeData);
})

const port = 3000;
app.listen(port, () => console.log('listening on ' + port));

const render = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(`http://localhost:${port}`, {waitUntil: "networkidle2"});
    await page.pdf({
        path: 'out/out.pdf',
        format: 'Letter',
        pageRanges: '1'
    });

    await browser.close();
    console.log('finished')
}

render();