// const fs = require('fs');
// const util = require('util');

// const inFile = fs.readFileSync('resumedata.json')

// data = JSON.parse(inFile);

// fs.writeFileSync('out.js', util.inspect(data, false, null))

const data = {
  basics: {
    name: "Price Comstock",
    label: "Programmer",
    picture: "",
    email: "price.comstock@gmail.com",
    phone: "(402) 943-7952",
    website: "pc.codes",
    github: "github.com/pricecomstock",
    summary:
      "Richard hails from Tulsa. He has earned degrees from the University of Oklahoma and Stanford. (Go Sooners and Cardinals!) Before starting Pied Piper, he worked for Hooli as a part time software developer. While his work focuses on applied information theory, mostly optimizing lossless compression schema of both the length-limited and adaptive variants, his non-work interests range widely, everything from quantum computing to chaos theory. He could tell you about it, but THAT would NOT be a “length-limited” conversation!",
    location: {
      address: "2215 Howard St",
      postalCode: "NE 68102",
      city: "Omaha",
      state: "NE",
      lockup: "Omaha, NE",
      countryCode: "US",
      region: "Nebraska"
    },
    profiles: [
      {
        network: "GitHub",
        username: "pricecomstock",
        url: "github.com/pricecomstock"
      }
    ]
  },
  work: [
    {
      company: "NTT Security",
      position: "Technology Integration Engineer",
      website: "",
      startDate: "May 2016",
      endDate: "Present",
      location: "Omaha, NE",
      summary: "",
      highlights: [
        "Determined the security relevant components of logs from a wide variety of security and network devices.",
        "Created parsing specifications for new technologies and updated log formats",
        "Composed detailed and consistent technical documents to ensure accurate parsing and future accessibility.",
        "Researched and created specifications for non-Rsyslog transport including REST APIs and database queries.",
        "Directed the design, testing, troubleshooting, and validation of log transports from proof-of-concept to final release.",
        "Created CLI and web utilities with Python and Javascript to automate tasks."
      ]
    },
    {
      company: "First Data",
      position: "Intern, Assoc. Application Developer",
      website: "",
      startDate: "Jul. 2012",
      endDate: "May 2016",
      location: "Omaha, NE",
      summary: "",
      highlights: [
        "Troubleshot production Java business intelligence reporting software to fix bugs and increase reliability.",
        "Reviewed in-house penetration testing results and implemented vulnerability fix patches",
        "Cofounded and tracked stats for intern foosball league and created ongoing simulation for league continuity."
      ]
    }
  ],
  volunteer: [
    {
      organization: "CoderDojo",
      position: "Teacher",
      website: "http://coderdojo.com/",
      startDate: "2012-01-01",
      endDate: "2013-01-01",
      summary: "Global movement of free coding clubs for young people.",
      highlights: ["Awarded 'Teacher of the Month'"]
    }
  ],
  education: [
    {
      institution: "University of Nebraska - Omaha",
      area: "Information Assurance",
      studyType: "Bachelor of Science",
      studyTypeShort: "B.S.",
      startDate: "August 2011",
      endDate: "May 2016",
      gpa: "3.49",
      location: "Omaha, NE",
      courses: [""],
      minors: ["Computer Science", "Mathematics"]
    }
  ],
  awards: [
    {
      title: "Digital Compression Pioneer Award",
      date: "2014-11-01",
      awarder: "Techcrunch",
      summary: "There is no spoon."
    }
  ],
  publications: [
    {
      name: "Video compression for 3d media",
      publisher: "Hooli",
      releaseDate: "2014-10-01",
      website: "http://en.wikipedia.org/wiki/Silicon_Valley_(TV_series)",
      summary:
        "Innovative middle-out compression algorithm that changes the way we store data."
    }
  ],
  certifications: [
    {
      name: "CompTIA Security+",
      date: "June 2018"
    }
  ],
  skills: {},
  projects: [
    {
      name: "Powerrank.io",
      highlights: [
        "Fully responsive web app that calculates aggregate “power rankings” based on ranked-choice poll results.",
        "Vue.js single-page application frontend with Vuex state management and Webpack bundling.",
        "Node.js REST API backend using Mongoose to interface with MongoDB."
      ]
    },
    {
      name: "Inspopaper",
      highlights: [
        "App available on Slack app directory that creates novelty desktop wallpapers on demand from messages posted in Slack.",
        "Serverless architecture using Python Google Cloud Functions and Google Cloud Blob Storage."
      ]
    },
    {
      name: "Live Audience Voting",
      highlights: [
        "Vue.js application using D3.js and Socket.io to collect and visualize audience votes via smartphone."
      ]
    }
  ]
};

const frontEndSkills = {
  languages: [
    "Javascript",
    "HTML5",
    "CSS3",
    "Node.js",
    "Python",
    "Shell Scripting",
    "SQL",
    "C",
    "Assembly"
  ],
  "tools and frameworks": [
    "Vue.js",
    "Vuex",
    "Git",
    "Linux",
    "REST APIs",
    "Socket.io",
    "Webpack",
    "Bulma",
    "Bootstrap",
    "Tailwind"
  ],
  other: [
    "Adobe Illustrator",
    "Technical Writing",
    "Blender",
    "Slack API",
    "Excel",
    "Desktop Linux",
    "Improv Comedy"
  ]
};

const backEndSkills = {
  languages: [
    "Node.js",
    "Python",
    "Shell Scripting",
    "SQL",
    "C",
    "HTML5",
    "CSS3",
    "Assembly"
  ],
  "tools and frameworks": [
    "Linux",
    "Git",
    "REST APIs",
    "Express",
    "Flask",
    "MongoDB",
    "PostgreSQL",
    "Socket.io",
    "Vue.js",
    "Webpack",
    "Rsyslog",
    "Google Cloud Platform"
  ],
  other: [
    "Technical Writing",
    "Adobe Illustrator",
    "Blender",
    "Slack API",
    "Excel",
    "Desktop Linux",
    "Improv Comedy"
  ]
};

function basicData() {
  return data;
}

function frontEndData() {
  return Object.assign(data, {skills: frontEndSkills});
}

function backEndData() {
  return Object.assign(data, {skills: backEndSkills});
}

module.exports = {
  basicData,
  frontEndData,
  backEndData
};
