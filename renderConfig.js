const resumeData = require("./data/resumeData");

const prefix = "ComstockPrice-";
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
    title: "fullstack-dev-1",
    template: "2pretty.html",
    data: resumeData.fullStackData
  },
  // {
  //     title: "backend-dev-boring",
  //     template: "index.html",
  //     data: resumeData.backEndData
  // },
  {
    title: "ANONYMIZED",
    template: "2pretty.html",
    data: resumeData.anonymousData
  }
];

module.exports = {
  renders,
  prefix
};
