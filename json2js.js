const fs = require('fs');
const util = require('util');

const inFile = fs.readFileSync('resumedata.json')

data = JSON.parse(inFile);

fs.writeFileSync('out.js', util.inspect(data, false, null))