export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I am a Newbie, but still, I can surprise you ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with my work",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently trying to learn new technologies every day",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Hey Give me a chance, react out to me on this mail",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "E-commerse Cart System",
    des: "A simple Cart system with state management library Redux Toolkit",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg"],
    link: "https://amazoon-cart-system-prashant.netlify.app/",
  },
  {
    id: 2,
    title: "Weather Application",
    des: "A simple weather application, with search functionality implemented.",
    img: "/p2.svg",
    iconLists: ["/re.svg", "/tail.svg"],
    link: "https://wolf-dagger.github.io/weatherApp/",
  },
  {
    id: 3,
    title: "ToDo Application",
    des: "A simple Todo application with all the functionlality needed are implemented",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg"],
    link: "https://prashant-todo-app-v2.netlify.app/",
  },
  {
    id: 4,
    title: "CRUD Application",
    des: "A simple crud application where the data is stored in local storage and accessed through it.",
    img: "/p4.svg",
    iconLists: ["/tail.svg", "/re.svg"],
    link: "https://prashant-crud-app.netlify.app/",
  },
];

export const testimonials = [
  {
    quote:
      "I had the pleasure of working with Prashant Sharma during his tenure at Mphasis, where he served as a PeopleSoft Technology Specialist. Prashant consistently demonstrated exceptional technical expertise and a deep understanding of PeopleSoft applications.",
    name: "Subranyam Swami",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "One of Prashant's standout projects was the development of a responsive web interface for our customer portal. This project required meticulous planning, extensive coding, and seamless integration with our existing systems, all of which Prashant managed with remarkable proficiency. ",
    name: "Jaspreet Singh",
    title: "Director of AlphaStream Technologies",
  },
];

// export const companies = [
//   {
//     id: 1,
//     name: "cloudinary",
//     img: "/cloud.svg",
//     nameImg: "/cloudName.svg",
//   },
//   {
//     id: 2,
//     name: "appwrite",
//     img: "/app.svg",
//     nameImg: "/appName.svg",
//   },
//   {
//     id: 3,
//     name: "HOSTINGER",
//     img: "/host.svg",
//     nameImg: "/hostName.svg",
//   },
//   {
//     id: 4,
//     name: "stream",
//     img: "/s.svg",
//     nameImg: "/streamName.svg",
//   },
//   {
//     id: 5,
//     name: "docker.",
//     img: "/dock.svg",
//     nameImg: "/dockerName.svg",
//   },
// ];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity at Omninos Software Solutions",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
    linkto: "",
  },
  {
    id: 2,
    title: "Associate Software Engineer",
    desc: "Worked as a PeopleSoft Developer at Mphasis Pvt. Ltd. and maintained the processes through the tools and maintained database with MySQL ",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
    linkto: "",
  },
  // {
  //   id: 3,
  //   title: "Freelance App Dev Project",
  //   desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
  //   className: "md:col-span-2", // change to md:col-span-2
  //   thumbnail: "/exp3.svg",
  //   linkto: "",
  // },
  {
    id: 4,
    title: "Personal Projects",
    desc: "Developed and maintaining and bulding new personal projects to learn and be relevant in the industry",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
    linkto: "",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    linkk: "https://github.com/wolf-dagger",
  },
  {
    id: 3,
    img: "/link.svg",
    linkk: "https://www.linkedin.com/in/prashant-sharma-43b295137/",
  },
];
