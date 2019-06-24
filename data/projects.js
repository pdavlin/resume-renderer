const deepClone = require("../util");

function replaceHighlights(project, highlights) {
  let newProject = deepClone(project);
  newProject.highlights = highlights;
}

const powerrank = {
  name: "Powerrank.io",
  highlights: [
    "Fully responsive web app that calculates aggregate “power rankings” based on ranked-choice poll results.",
    "Vue.js SPA frontend bundled with Webpack. State managed with Vuex. Node.js REST API backend using MongoDB via Mongoose."
  ],
  link: "https://powerrank.pc.codes"
};

const inspopaper = {
  name: "Inspopaper",
  highlights: [
    "Slack app available on store that creates novelty desktop wallpapers on demand from messages posted in Slack.",
    "Serverless architecture using Python Google Cloud Functions and Google Cloud Blob Storage."
  ],
  link: "https://inspopaper.fun"
};

const voting = {
  name: "Live Audience Voting",
  highlights: [
    "Jackbox-style multiplayer game created to allow live audience voting via smartphone in comedy shows.",
    "Socket.io server for real-time communication, with Vue.js frontend showing D3.js physics-based vote visualization."
  ],
  link: "https://testkitchen.fun"
};

const pptxgen = {
  name: "Powerpoint Generator",
  highlights: [
    "Procedurally generates PowerPoint presentations for fun or for important meetings."
  ],
  link: "https://forgotmyslides.xyz"
};

const resumeGenerator = {
  name: "HTML CV Renderer",
  highlights: [
    "Renders pixel-perfect PDF documents using Nunjucks, HTML, CSS, and JavaScript.",
    "Rendered this document."
  ],
  link: "https://github.com/pricecomstock/resume-renderer"
};

const theatreCam = {
  name: "Theatre Recorder",
  highlights: [
    "Web interface served by webcam-equipped Raspberry Pi that allows videos to be easily recorded and uploaded to the cloud.",
    "Meant to reduce friction on recording and sharing videos of live performances."
  ]
};

const generalProjects = [powerrank, voting, pptxgen];
const jsProjects = [powerrank, voting, pptxgen];
const pythonProjects = [powerrank, inspopaper, pptxgen]; // uh, as many are as worth showing off
const frontendProjects = [powerrank, resumeGenerator, pptxgen];

module.exports = {
  generalProjects,
  jsProjects,
  pythonProjects,
  frontendProjects
};
