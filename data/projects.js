const { deepClone } = require("../util");

function replaceHighlights(project, highlights) {
  let newProject = deepClone(project);
  newProject.highlights = highlights;
  return newProject;
}

const powerrank = {
  name: "Powerrank",
  highlights: [
    "Fully responsive Vue.js single page app that calculates aggregate “power rankings” based on ranked-choice poll results.",
    "Uses Node.js REST API backend with MongoDB."
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
    "Socket.io server for real-time communication with Vue.js frontend and D3.js vote visualization."
  ],
  link: "https://vote.pc.codes"
};

const votingFrontEnd = replaceHighlights(voting, [
  "Jackbox-style multiplayer game created with Vue.js, D3.js, and Socket.io to allow live audience voting via smartphone in comedy shows."
]);

const pptxgen = {
  name: "Powerpoint Generator",
  highlights: [
    "Procedurally generates slideshows using a variety of text and image sources."
  ],
  link: "https://pptx.pc.codes"
};

const resumeGenerator = {
  name: "HTML CV Renderer",
  highlights: [
    "Renders pixel-perfect PDF résumés or other documents using Nunjucks, HTML, CSS, and JavaScript."
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

const generalProjects = [powerrank, votingFrontEnd, pptxgen];
const jsProjects = [powerrank, voting, pptxgen];
const pythonProjects = [powerrank, inspopaper, pptxgen]; // uh, as many are as worth showing off
const frontendProjects = [powerrank, votingFrontEnd, resumeGenerator, pptxgen];
const securityDevProjects = [powerrank, votingFrontEnd, pptxgen];

module.exports = {
  generalProjects,
  jsProjects,
  pythonProjects,
  frontendProjects,
  securityDevProjects
};
