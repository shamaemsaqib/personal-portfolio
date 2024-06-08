/* eslint-disable max-len */
export interface ISocial {
  name: "LinkedIn" | "Behance" | "Github" | "Instagram" | "Facebook";
  url: string;
}

export interface ICertification {
  name: string;
  issuedBy: string;
  verificationURL: string;
}

export interface IProject {
  imageUrl?: string;
  name: string;
  companyName: string;
  url: string;
  code: string;
  description: string[];
  tags: string[];
}

export interface IExperience {
  shortName: string;
  companyName: string;
  endDate: string;
  position: string;
  startDate: string;
  summary: string;
  website: string;
}

export interface ISkill {
  languages: string[];
  frameworks: string[];
  tools: string[];
  design: string[];
  devtools: string[];
}

export interface IStudent {
  avatar: string;
  name: string;
  quote: string;
}

export interface IProfile {
  name: string;
  intro: string;
  skills?: ISkill;
  phone: string;
  email: string;
  resume: string;
  socials: ISocial[];
  bio: string[];
  students?: IStudent[];
  experiences?: IExperience[];
  certifications?: ICertification[];
  projects?: IProject[];
  goodByeText: string;
}

const profile: IProfile = {
  name: "Shamaem Saqib",
  intro: "Front-End/React Developer",

  phone: "+923116464773",
  socials: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/shamaemsaqib",
    },
    {
      name: "Behance",
      url: "http://www.behance.com/shamaemsaqib",
    },
    {
      name: "Github",
      url: "http://www.github.com/shamaemsaqib",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/shamaemsaqib._/",
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/shamaemsaqib",
    },
  ],
  email: "shamaem_saqib@hotmail.com",
  resume:
    "https://drive.google.com/file/d/1Ilgriu72p9EDMiV0riAT5OIHNih6P2uG/view?usp=sharing",
  bio: [
    "I'm a Lahore-based software engineer who specializes in building (and occasionally designing) exceptional digital experiences. Currently, I'm a Front-end developer who is open to work and working on ReactJS Framework.",
  ],
  skills: {
    languages: [
      "Javascript",
      "HTML",
      "CSS",
      "SQL",
      "C/C++",
      "Python",
      "Java",
      "Dart",
    ],
    frameworks: ["React", "MERN", "Flutter"],
    tools: ["Git", "Chrome DevTools"],
    design: [],
    devtools: ["VSCode", "Visual Studio", "Jupyter"],
  },
  experiences: [
    {
      shortName: "SIC",
      companyName: "Samsung Innovation Campus",
      endDate: "Dec 22",
      position: "Artificial Intelligence Intern",
      startDate: "Aug 2022",
      summary:
        "Learned and implemented various algorithms of machine learning and deep learning in this extensive training program. Developed Traffic Sign Recognition System as capstone project using convolutional neural network that detects traffic signs at 98% accuracy and designed documentation for the project. Used the German Traffic Sign Recognition Benchmark (GTSRB) for the project and applied various pre-processing techniques like augmentation and normalization. Designed an interface for the project using Tkinter to test the model real-time.",
      website: "https://www.samsung.com/pk/innovation-campus/",
    },
  ],
  certifications: [
    {
      name: "Artificial  Intelligence Cohort",
      issuedBy: "Samsung Innovation Campus",
      verificationURL:
        "https://drive.google.com/file/d/1vgGit0DPUom99Hm6umkL687lzWNO3Dwx/view?usp=sharing",
    },
  ],
  projects: [
    {
      name: "Cyber Plus | ReactJS based Landing Page",
      imageUrl:
        "https://images.unsplash.com/photo-1488998427799-e3362cec87c3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      companyName: "",
      url: "cyberplus-acm.netlify.app/",
      code: "https://github.com/shamaemsaqib/CyberPlus-ACM",
      description: [
        "Created a basic landing page using ReactJS and implemented the whole app using react components.",
      ],
      tags: ["ReactJS", "HTML", "CSS"],
    },
    {
      name: "Comfy Store | JavaScript based E-Commerce Store",
      imageUrl:
        "https://images.unsplash.com/photo-1524135329990-07660cd5bf10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=701&q=80",
      companyName: "",
      url: "comfy-store-js-project.netlify.app/",
      code: "https://github.com/shamaemsaqib/comfy-store",
      description: [
        "Created the front-end of an E-Commerce Store just using Javascript which has multiple functionalities like dynamic info page for every product and cart and it is fully responsive.",
        "Used WebStorage API to conserve the Cart across the whole multiple page site.",
        "Used a pre-built API to fetch products data and implemented filtered search.",
      ],
      tags: ["JavaScript", "CSS", "JSON", "HMTL", "API"],
    },
    {
      name: "ATM | OOP Based Project in C++",
      imageUrl:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      companyName: "",
      url: "",
      code: "https://github.com/shamaemsaqib/ATM-Machine-Project",
      description: [
        "Created an Automatic Teller Machine (ATM) and implented various functionalities and classes an ATM may have using the concepts of Object Oriented Programming.",
        "Implemented various classes like BankAccount, Person, Card, etc and managed it using inheritence, composition and abstraction",
      ],
      tags: ["C++", "OOP", "Inheritence", "Project"],
    },
    {
      name: "Tea Station | Basic Landing Page",
      imageUrl:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      companyName: "",
      url: "tea-station-csshtml-project.netlify.app/",
      code: "https://github.com/shamaemsaqib/Tea-Station",
      description: [
        "Implemented a static landing page using HTML and CSS only which is optimized and fully responsive.",
      ],
      tags: ["HTML", "CSS", "Responsiveness"],
    },
  ],
  goodByeText:
    "I'm always looking for new career oppurtunities and I'm always willing to help people in my field, so my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
};

const getProfileData = () => profile;

export default getProfileData;
