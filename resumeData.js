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

const data = {
  basics: {
    name: "Price Comstock",
    label: "Full Stack Software Engineer",
    picture: "",
    email: "price.comstock@gmail.com",
    phone: "(402) 943-7952",
    website: "pc.codes",
    github: "github.com/pricecomstock",
    summary: "Price is from Omaha.",
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
        "Directed the design, testing, troubleshooting, and validation of log transports from proof-of-concept to final release.",
        "Created processes to parse and analyze security-relevant information in log data from a wide variety of network and security devices.",
        "Researched and created specifications for non-Rsyslog transport including REST APIs and database queries.",
        "Composed detailed and consistent technical documents to ensure accurate parsing and future accessibility.",
        "Created CLI and web utilities to automate tasks using Python and Javascript."
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
  volunteer: [{}],
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
  awards: [],
  publications: [{}],
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
        "Vue.js SPA frontend bundled with Webpack. State managed with Vuex. Node.js REST API backend using MongoDB via Mongoose."
      ],
      link: "https://powerrank.pc.codes"
    },
    {
      name: "Inspopaper",
      highlights: [
        "Slack app available on store that creates novelty desktop wallpapers on demand from messages posted in Slack.",
        "Serverless architecture using Python Google Cloud Functions and Google Cloud Blob Storage."
      ],
      link: "https://inspopaper.fun"
    },
    // {
    //   name: "Live Audience Voting",
    //   highlights: [
    //     "Vue.js application using D3.js and Socket.io to collect and visualize audience votes via smartphone."
    //   ],
    //   link: ""
    // },
    {
      name: "Powerpoint Generator",
      highlights: [
        "Procedurally generates PowerPoint presentations for fun or for important meetings."
      ],
      link: "https://forgotmyslides.xyz"
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
    "C#",
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

const anonymousBasics = {
  name: "First Surname",
  email: "email@example.com",
  github: "github.com/lab",
  phone: "402-555-5555"
};

const frontEndData = Object.assign(deepClone(data), {
  skills: frontEndSkills,
  themeColor: "#51bb7b"
});
const backEndData = Object.assign(deepClone(data), {
  skills: backEndSkills,
  themeColor: "#6574CD"
});
const anonymousData = Object.assign(deepClone(data), {
  skills: backEndSkills,
  themeColor: "#6574CD",
  basics: anonymousBasics
});

module.exports = {
  frontEndData,
  backEndData,
  anonymousData
};
