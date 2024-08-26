export const navItems = [
    { name: "About", link: "#about" },
    { name: "Experience", link: "#experience"},
    { name: "Projects", link: "#projects" },
    // { name: "Contact", link: "#contact" },
  ];
  
export const gridItems = [
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
    id: 6,
    title: "Let's connect!",
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
    title: "xv6 Operating System",
    des: "Implemented a user-space threading library and a login system",
    img: "/OS.svg",
    iconLists: ["/dock.svg", "/assembly.svg", "/c_lang.svg"],
    link: "https://github.com/gilbertmao/xv6-Operating-System-Login",
  },
  {
    id: 2,
    title: "This Full-Stack Website!",
    des: "A personal venture into full stack development with the NextJS framework",
    img: "/Website.svg",
    iconLists: ["/re.svg", "/next.svg", "/tail.svg", "/ts.svg", "/c.svg"],
    link: "https://github.com/gilbertmao/gilbert_mao_portfolio",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Software Engineer Intern",
    desc: "Developed cloud tools to improve the lifecycle of software delivery and release, enhancing inter-organizational processes and customer satisfaction.",
    className: "md:col-span-2",
    thumbnail: "/Ncino_logo.svg",
  },
  {
    id: 2,
    title: "Undergrad Teaching Assistant",
    desc: "Instructed a lab of 50+ students on computer architecture topics and developed course autograders",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/Georgia_Tech_logo.svg",
  },
  {
    id: 3,
    title: "Machine Learning Researcher",
    desc: "Implemented novel machine learning algorithms to discover a new earthquake mechanism, published in esteemed research journal",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/MSU_logo.svg",
  },
  {
    id: 4,
    title: "Regeneron Scientific Talent Search Scholar",
    desc: "Named one of the top 300 scientists for my work in machine learning for seismology.",
    className: "md:col-span-2",
    thumbnail: "/Regeneron.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];