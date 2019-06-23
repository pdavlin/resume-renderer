const basics = require("./basics");
const work = require("./work");
const education = require("./education");
const certifications = require("./certifications");
const projects = require("./projects");

// Thanks 30 seconds of code!
const deepClone = obj => {
  let clone = Object.assign({}, obj);
  Object.keys(clone).forEach(
    key =>
      (clone[key] =
        typeof obj[key] === "object" ? deepClone(obj[key]) : obj[key])
  );
  return Array.isArray(obj) && obj.length
    ? (clone.length = obj.length) && Array.from(clone)
    : Array.isArray(obj)
    ? Array.from(obj)
    : clone;
};

const merge = (...objs) =>
  [...objs].reduce(
    (acc, obj) =>
      Object.keys(obj).reduce((a, k) => {
        acc[k] = acc.hasOwnProperty(k)
          ? [].concat(acc[k]).concat(obj[k])
          : obj[k];
        return acc;
      }, {}),
    {}
  );

const data = {
  basics,
  work,
  education,
  certifications,
  projects
};

const frontEndSkills = {
  languages: [
    "Javascript",
    "HTML5",
    "CSS3",
    "Node.js",
    "Python",
    "Shell Scripting",
    "C#",
    "Java",
    "SQL",
    "C",
    "Assembly"
  ],
  "tools and frameworks": [
    "Vue.js",
    "Vuex",
    "Git",
    "Socket.io",
    "Webpack",
    "Bulma",
    "Bootstrap",
    "Tailwind",
    "D3js",
    "Linux",
    "Docker",
    "Unity",
    "REST APIs"
  ],
  other: [
    "Adobe Illustrator",
    "Technical Writing",
    "Blender",
    "Slack API",
    "Excel",
    "Arduino",
    "Desktop Linux",
    "Improv Comedy"
  ]
};

const backEndSkills = {
  languages: [
    "Node.js",
    "Python",
    "Shell Scripting",
    "C#",
    "Java",
    "SQL",
    "C",
    "HTML5",
    "CSS3",
    "Assembly"
  ],
  "tools and frameworks": [
    "Linux",
    "Git",
    "Docker",
    "REST APIs",
    "Express",
    "Flask",
    "MongoDB",
    "PostgreSQL",
    "Socket.io",
    "Vue.js",
    "Webpack",
    "Rsyslog",
    "Unity",
    "Google Cloud Platform",
    "Azure"
  ],
  other: [
    "Technical Writing",
    "Adobe Illustrator",
    "Blender",
    "Slack API",
    "Excel",
    "Arduino",
    "Desktop Linux",
    "Improv Comedy"
  ]
};

const fullStackSkills = {
  languages: [
    "Node.js",
    "Python",
    "HTML5",
    "CSS3",
    "Shell Scripting",
    "C#",
    "Java",
    "SQL",
    "C",
    "Assembly"
  ],
  "tools and frameworks": [
    "Vue.js",
    "REST APIs",
    "Express",
    "Flask",
    "Linux",
    "Git",
    "Docker",
    "MongoDB",
    "PostgreSQL",
    "Socket.io",
    "Webpack",
    "Rsyslog",
    "Unity",
    "Google Cloud Platform",
    "Azure"
  ],
  other: [
    "Technical Writing",
    "Adobe Illustrator",
    "Blender",
    "Slack API",
    "Excel",
    "Arduino",
    "Desktop Linux",
    "Improv Comedy"
  ]
};

const anonymousBasics = {
  name: "First Surname",
  email: "email@example.com",
  github: "github.com/lab",
  phone: "402-555-5555",
  summary: data.basics.summary
};

const frontEndData = merge(deepClone(data), {
  skills: frontEndSkills,
  themeColor: "#51bb7b"
});
const backEndData = merge(deepClone(data), {
  skills: backEndSkills,
  themeColor: "#6574CD"
});
const fullStackData = merge(deepClone(data), {
  skills: fullStackSkills,
  themeColor: "#05a19c"
});
const anonymousData = Object.assign(deepClone(data), {
  skills: backEndSkills,
  themeColor: "#6574CD",
  basics: anonymousBasics
});

module.exports = {
  frontEndData,
  backEndData,
  anonymousData,
  fullStackData
};
