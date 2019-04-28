const express = require('express');
const nunjucks = require('nunjucks');
const fs = require('fs');
const resumeData = JSON.parse(fs.readFileSync('./resumedata.json', 'utf8'));

var app = express();

nunjucks.configure('resumes', {
    autoescape: true,
    express: app
})



app.get('/', (req, res) => {
    res.render('index.html', resumeData);
})

const port = 3000;
app.listen(port, () => console.log('listening on ' + port))