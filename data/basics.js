const basics = {
  name: "Price Comstock",
  label: "Full Stack Software Engineer",
  picture: "",
  email: "price.comstock@gmail.com",
  phone: "(402) 943-7952",
  website: "pc.codes",
  github: "github.com/pricecomstock",
  summary:
    "I am a full-stack developer seeking a software engineering position. I am most proficient in Node.js and Python, and have operations and deployment experience.",
  location: {
    address: "",
    postalCode: "",
    city: "New York",
    state: "NY",
    lockup: "New York City",
    countryCode: "US",
    region: "New York"
  },
  profiles: [
    {
      network: "GitHub",
      username: "pricecomstock",
      url: "github.com/pricecomstock"
    }
  ]
};

const anonymousBasics = {
  name: "First Surname",
  email: "email@example.com",
  github: "github.com/lab",
  phone: "402-555-5555",
  summary: basics.summary // references above object!
};

module.exports = { basics, anonymousBasics };
