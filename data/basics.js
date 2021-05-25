const basics = {
  name: "Patrick Davlin",
  label: "Software Engineer",
  picture: "",
  email: "patrick@davlin.io",
  phone: "(402) 612-9050",
  website: "davlin.io",
  profiles: {
    linkedin: "linkedin.com/in/pdavlin",
    github: "github.com/pdavlin"
  },
  summary:
    "I am a full-stack developer seeking a software engineering position. I am most proficient in Node.js and Python, and have operations and deployment experience.",
  location: {
    address: "",
    postalCode: "",
    city: "Omaha",
    state: "NE",
    lockup: "Omaha, NE",
    countryCode: "US",
    region: "USA"
  }
};

const anonymousBasics = {
  name: "First Surname",
  email: "email@example.com",
  profiles: {
    linkedin: "linkedin.com",
    github: "github.com/lab"
  },
  phone: "402-555-5555",
  summary: basics.summary // references above object!
};

module.exports = { basics, anonymousBasics };
