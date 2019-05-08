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


app.use(express.static('static'))
app.get('/resume/:template', (req, res) => {
    res.render(req.params.template, resumeData);
})

const port = 3000;
const server = app.listen(port, () => console.log('listening on ' + port));

const render = async (fileName) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
await page.goto(`http://localhost:${port}/resume/${fileName}`, {waitUntil: "networkidle2"});
    await page.pdf({
        path: `out/${fileName.split('.')[0]}.pdf`,
        format: 'Letter',
        pageRanges: '1'
    });

    await browser.close();
    console.log('finished')
}

const renderTemplates = [
    // 'index.html',
    '2pretty.html'
]

async function renderAll (callback) {
    for (let index = 0; index < renderTemplates.length; index++) {
        await render(renderTemplates[index]);
    }
    
    callback();
}

renderAll(() => {
    server.close();
    process.exit(0);
});
