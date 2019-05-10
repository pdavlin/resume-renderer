const resumeData = require('./resumeData');

const prefix = "ComstockPrice-"
const renders = [
    {
        title: "frontend-dev-1",
        template: "2pretty.html",
        data: resumeData.frontEndData
    },
    {
        title: "backend-dev-1",
        template: "2pretty.html",
        data: resumeData.backEndData
    },
    {
        title: "backend-dev-boring",
        template: "index.html",
        data: resumeData.backEndData
    },
]

module.exports = {
    renders,
    prefix
};