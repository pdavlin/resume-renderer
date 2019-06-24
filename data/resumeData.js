const { deepClone, merge } = require("../util");

const { basics, anonymousBasics } = require("./basics");
const work = require("./work");
const skills = require("./skills");
const education = require("./education");
const certifications = require("./certifications");
const projects = require("./projects");

const data = {
  basics,
  work,
  education,
  certifications
};

const frontEndData = merge(deepClone(data), {
  skills: skills.frontEndSkills,
  projects: projects.frontendProjects,
  themeColor: "#51bb7b" // Green
});

const backEndData = merge(deepClone(data), {
  skills: skills.backEndSkills,
  projects: projects.generalProjects,
  themeColor: "#6574CD" // Indigo
});

const fullStackData = merge(deepClone(data), {
  skills: skills.fullStackSkills,
  projects: projects.generalProjects,
  themeColor: "#05a19c" // Teal
});

const anonymousData = Object.assign(deepClone(data), {
  skills: skills.fullStackSkills,
  projects: projects.generalProjects,
  themeColor: "#6574CD",
  basics: anonymousBasics
});

module.exports = {
  frontEndData,
  backEndData,
  anonymousData,
  fullStackData
};
