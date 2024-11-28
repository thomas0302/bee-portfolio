import {
  mobile,
  android,
  firebase,
  mysql,
  java,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  inspiringApps,
  episodeSix,
  kunai,
  css,
  scss,
  reactjs,
  redux,
  tailwind,
  nextjs,
  vue,
  nuxt,
  express,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  shopify,
  threejs,
  php,
  fourLaps,
  wyndhamhotels,
  marblesofmumbles,
  moonpig,
  aceable,
  rhone,
  ensorings,
  restorixhelath,
  timeandtide,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "FrontEnd Engineer",
    icon: mobile,
  },
  {
    title: "Software Engineer",
    icon: backend,
  },
  {
    title: "Full Stack Engineer",
    icon: web,
  },
  {
    title: "JavaScript Specialist",
    icon: creator,
  },
];

const technologies = [
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "SCSS",
    icon: scss,
  },
  {
    name: "React",
    icon: reactjs,
  },
  {
    name: "Next",
    icon: nextjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Vue",
    icon: vue,
  },
  {
    name: "Nuxt",
    icon: nuxt,
  },
  {
    name: "Node",
    icon: nodejs,
  },
  {
    name: "Express",
    icon: express,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySql",
    icon: mysql,
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "php",
  //   icon: php,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
  // {
  //   name: "firebase",
  //   icon: firebase,
  // },
  // {
  //   name: "javascript",
  //   icon: javascript,
  // },
  // {
  //   name: "tailwind",
  //   icon: tailwind,
  // },
  // {
  //   name: "shopify",
  //   icon: shopify,
  // },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
];

const experiences = [
  {
    title: "Senior Software Engineer",
    company_name: "RediClinic",
    icon: inspiringApps,
    iconBg: "#FFFFFF",
    date: "Mar 2021 - Present",
    points: [
      "Designed and developed a highly scalable telemedicine platform, integrating React front-end with Node.js and Express.js back-end, resulting in a 40% increase in user satisfaction ratings.",
      "Architected  and  deployed  a  microservices  framework  to  enhance  modularity  and  ease  of updates for core features like appointment scheduling and patient data processing.",
      "Created and optimized MongoDB database schemas, improving  query performance by 35% and reducing data redundancy.",
      "Led cross-functional Agile teams, mentoring developers on clean code principles, and fostering an environment of continuous learning.",
      "Skills: AWS, Next.js, Nuxt.js, Node.js, Nest.js, Tailwind CSS, Shopify Plus, Google Analytics, GTM, ...",
    ],
  },
  {
    title: "Full Stack Web Developer",
    company_name: "Vindicia",
    icon: episodeSix,
    iconBg: "#FFFFFF",
    date: "Sep 2016 - Feb 2021 ",
    points: [
      "Delivered highly optimized SaaS billing solutions by integrating React front-end and Node.js back-end services, increasing customer retention by 20%.",
      "Orchestrated backend migration to serverless AWS Lambda functions, reducing hosting costs by 30%.",
      "Implemented  PostgreSQL  and  DynamoDB  databases  for  dynamic  and  static  data  storage, achieving a fault-tolerant architecture.",
      "Enhanced  cross-browser  and  cross-device  compatibility  through  robust  testing  with  Cypress and BrowserStack.",
      "Skills: TypeScript, React.js, Vue.js, Node.js, Express.js, Redux, WebSocket, ...",
    ],
  },
  {
    title: "Junior Developer",
    company_name: "TMGcore",
    icon: kunai,
    iconBg: "#FFFFFF",
    date: "Jan 2016 - Aug 2016",
    points: [
      "Engineered fully responsive SPAs with React and jQuery, supporting both client and server rendering for optimal performance.",
      "Developed a RESTful API gateway in Node.js to unify multiple data sources and improve system scalability.",
      "Implemented MySQL databases and optimized query performance, reducing report generation time by 50%.",
      "Spearheaded a shift to mobile-first development strategies, improving mobile user engagement by 15%.",
      "Skills: JavaScript, Angular, AngularJS, React.js, HTML, CSS, SCSS, ...",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but thomas proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/7.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like thomas does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/8.jpg",
  },
  {
    testimonial:
      "After thomas optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/9.jpg",
  },
];

const projects = [
  {
    name: "MoonPig",
    description:
      "Moonpig is dedicated to celebrating life's special moments by offering a vast selection of personalized and ready-made cards, all easily accessible through their user-friendly app. With thousands of designs and top-notch technology, Moonpig makes it effortless to connect with loved ones and send heartfelt greetings, ensuring you never miss an occasion.",
    tags: [
      {
        name: "typescript",
        color: "white-text-gradient",
      },
      {
        name: "nextjs",
        color: "white-text-gradient",
      },
      {
        name: "nodejs",
        color: "white-text-gradient",
      },
      {
        name: "graphql",
        color: "white-text-gradient",
      },
      {
        name: "contentful",
        color: "white-text-gradient",
      },
    ],
    image: moonpig,
  },
  {
    name: "Rhone",
    description:
      "Men's high-performance activewear engineered for comfort with anti-stink technology. Buy now with fast shipping and free returns/exchanges!<br></br>",
    tags: [
      {
        name: "vuejs",
        color: "white-text-gradient",
      },
      {
        name: "nuxtjs",
        color: "white-text-gradient",
      },
      {
        name: "shopify",
        color: "white-text-gradient",
      },
      {
        name: "svelte",
        color: "white-text-gradient",
      },
    ],
    image: rhone,
  },
  {
    name: "Aceable",
    description:
      "Aceable is an online education platform that offers a variety of courses, including drivers ed, real estate, and insurance. Aceable's courses are designed to be convenient and affordable, and they can be taken at your own pace. ",
    tags: [
      {
        name: "angular",
        color: "white-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "white-text-gradient",
      },
      {
        name: "express",
        color: "white-text-gradient",
      },
      {
        name: "typescript",
        color: "white-text-gradient",
      },
    ],
    image: aceable,
  },
  {
    name: "Enso Rings",
    description:
      "Enso Rings are stylish, comfortable, and safe silicone rings that are designed to be an active person’s best friend. They are made from a soft, flexible silicone material that is hypoallergenic and easy to clean. They are also designed to break away from the finger when under stress, which can help to prevent ring avulsion, a serious injury that can occur when a ring is caught on something and pulled off the finger. ",
    tags: [
      {
        name: "vuejs",
        color: "white-text-gradient",
      },
      {
        name: "nuxtjs",
        color: "white-text-gradient",
      },
      {
        name: "shopify",
        color: "white-text-gradient",
      },
      {
        name: "storyblok",
        color: "white-text-gradient",
      },
    ],
    image: ensorings,
  },
  {
    name: "Time and Tide Watches",
    description:
      "Time and Tide Watches is an Australian-based online retailer that specializes in luxury watches and accessories, offering a wide selection of brands and services to cater to the needs of watch enthusiasts. ",
    tags: [
      {
        name: "wordpress",
        color: "white-text-gradient",
      },
      {
        name: "php",
        color: "white-text-gradient",
      },
      {
        name: "mysql",
        color: "white-text-gradient",
      },
      {
        name: "wp plugins",
        color: "white-text-gradient",
      },
    ],
    image: timeandtide,
  },
  {
    name: "RestroixHealth",
    description:
      "RestorixHealth is a leading provider of wound care solutions, offering a wide range of services and products to help patients heal and improve their quality of life. The company's services include wound center management, supplies and equipment, and in-home wound care. RestorixHealth is committed to providing high-quality, compassionate care to patients with chronic wounds.",
    tags: [
      {
        name: "vuejs",
        color: "white-text-gradient",
      },
      {
        name: "wordpress",
        color: "white-text-gradient",
      },
      {
        name: "mysql",
        color: "white-text-gradient",
      },
      {
        name: "php",
        color: "white-text-gradient",
      },
    ],
    image: restorixhelath,
  },
];

export { services, technologies, experiences, testimonials, projects };
