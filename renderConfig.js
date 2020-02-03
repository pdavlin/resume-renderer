const resumeData = require("./data/resumeData");

const prefix = "price-comstock-";
const renders = [
  // {
  //   title: "frontend-dev-1",
  //   template: "2pretty.html",
  //   data: resumeData.frontEndData
  // },
  // {
  //   title: "backend-dev-1",
  //   template: "2pretty.html",
  //   data: resumeData.backEndData
  // },
  // {
  //   title: "fullstack-dev-1",
  //   template: "2pretty.html",
  //   data: resumeData.fullStackData
  // },
  {
    title: "fullstack-dev",
    template: "plain.html",
    data: resumeData.fullStackData
  },
  {
    title: "security-dev-plain",
    template: "plain.html",
    data: resumeData.securityDevData
  },
  {
    title: "backend-dev-plain",
    template: "plain.html",
    data: resumeData.backEndData
  }
  // {
  //   title: "ANONYMIZED",
  //   template: "2pretty.html",
  //   data: resumeData.anonymousData
  // }
];

module.exports = {
  renders,
  prefix
};
