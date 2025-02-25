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
      "Developed interactive data visualization dashboards using D3.js and Highcharts, improving insight generation for healthcare professionals.",
      "Built dynamic UI components using Angular 10+ and TypeScript, ensuring a smooth user experience and scalability.",
      "Integrated RESTful APIs to fetch and display real-time patient data in an efficient and structured manner.",
      "Optimized front-end performance by implementing lazy loading, code splitting, and caching strategies.",
      "Managed version control and code collaboration using Git/Bitbucket to streamline development processes",
      "Implemented security best practices, ensuring secure data transactions within the application.",
      "Skills: JavaScript (ES6+), Angular (10+), TypeScript, HTML5, CSS3, D3.js, Highcharts, D3.js, Highcharts, PowerBI, Tableau, Custom Dashboard Development,  RESTful APIs, Node.js, SQL, Git, Bitbucket",
    ],
  },
  {
    title: "Full Stack Web Developer",
    company_name: "Vindicia",
    icon: episodeSix,
    iconBg: "#FFFFFF",
    date: "Sep 2016 - Feb 2021 ",
    points: [
      "Developed highly interactive Angular 10+ front-end applications for subscription management platforms.",
      "Created complex D3.js and Highcharts visualizations to represent billing trends and payment insights.",
      "Integrated RESTful APIs to fetch transactional and customer data for financial reporting dashboards.",
      "Collaborated with designers to build intuitive UI components that improved user workflow.",
      "Worked with SQL databases to retrieve, process, and display relevant financial data.",
      "Skills: JavaScript (ES6+), Angular (10+), TypeScript, HTML5, CSS3, D3.js, Highcharts, D3.js, Highcharts, PowerBI, Tableau, Custom Dashboard Development,  RESTful APIs, Node.js, SQL, Git, Bitbucket",
    ],
  },
  {
    title: "Junior Developer",
    company_name: "TMGcore",
    icon: kunai,
    iconBg: "#FFFFFF",
    date: "Jan 2016 - Aug 2016",
    points: [
      "Designed and implemented interactive web applications using JavaScript, Angular, and TypeScript.",
      "Developed custom data visualization components using D3.js to present complex datasets effectively.",
      "Integrated third-party APIs to enhance application functionality.",
      "Worked on CSS3 enhancements to improve UI consistency across platforms.",
      "Implemented best practices in front-end development, ensuring scalability and maintainability.",
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
