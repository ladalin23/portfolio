import { Code2, Lightbulb, Rocket, Users, Mail, Phone, MapPin } from "lucide-react"; 
import { 
  SiLaravel, SiReact, SiNuxtdotjs, SiTypescript, SiJavascript, SiHtml5, 
  SiPostman, SiGithub, SiSwagger, SiCss3, SiBootstrap, SiMysql 
} from "react-icons/si";

// Project Images
import Pos_image from '../assets/images/projects/pos-system.png';
import Real_Estate from '../assets/images/projects/real-estate.png';
import Educ_Library from '../assets/images/projects/education-library.png';
import E_book from '../assets/images/projects/ebook-website.png';
import PureCleanWebapp from '../assets/images/projectDetail/Pureclean/HomePage.png';

// Project Details Images
import MainImageRealEstate from '../assets/images/projectDetail/Real Estate/MainImage.png';
import RealEstateHome from '../assets/images/projectDetail/Real Estate/HomePage.png';
import TypePage from '../assets/images/projectDetail/Real Estate/TypePage.png';
import PropertyPage from '../assets/images/projectDetail/Real Estate/PropertyPage.png';
import AboutPage from '../assets/images/projectDetail/Real Estate/AboutPage.png';
import ContactPage from '../assets/images/projectDetail/Real Estate/ContactPage.png';
import Dashboard from '../assets/images/projectDetail/Real Estate/Dashboard.png';

import MainImagePOS from '../assets/images/projectDetail/POS/MainImagePOS.png';
import DashboardPOS from '../assets/images/projectDetail/POS/Dashboard.png';
import ProductList from '../assets/images/projectDetail/POS/ProductList.png';

import MainImageLibrary from '../assets/images/projectDetail/Library/MainIMageLibrary.png';
import MainImageEBook from '../assets/images/projectDetail/E-Book/MainImageEBook.png';

import MainImagePureClean from '../assets/images/projectDetail/Pureclean/MainImagePureClean.png';
import QRPage from '../assets/images/projectDetail/Pureclean/QR-Page.png';
import ProfilePage from '../assets/images/projectDetail/Pureclean/ProfilePage.png';
import RewardPage from '../assets/images/projectDetail/Pureclean/RewardsPage.png';

// Highlights Section
export const highlights = [
  { icon: Code2, title: "Clean Code", description: "Writing maintainable, scalable code that stands the test of time." },
  { icon: Rocket, title: "Performance", description: "Optimizing for speed and delivering lightning-fast user experiences." },
  { icon: Users, title: "Collaboration", description: "Working closely with teams to bring ideas to life." },
  { icon: Lightbulb, title: "Innovation", description: "Staying ahead with the latest technologies and best practices." },
];

// Skills Section
export const skillsData = [
  { title: "Laravel", desc: "Build robust web applications using MVC architecture, Eloquent ORM, Blade templating, routing, and built-in authentication.", icon: <SiLaravel />, star: 5 },
  { title: "React", desc: "Craft interactive user interfaces using components, state, props, and virtual DOM.", icon: <SiReact />, star: 5 },
  { title: "Nuxt", desc: "Build universal Vue applications with server-side rendering, static sites, and powerful modules.", icon: <SiNuxtdotjs />, star: 5 },
  { title: "Postman", desc: "Test, debug, and document APIs efficiently with collections, environments, and automated testing.", icon: <SiPostman /> },
  { title: "GitHub", desc: "Host, manage, and collaborate on code repositories using version control with Git.", icon: <SiGithub /> },
  { title: "REST API", desc: "Design and consume RESTful APIs to enable communication between client and server applications.", icon: <SiSwagger /> },
  { title: "Database Design", desc: "Model, structure, and normalize data efficiently for relational and NoSQL databases.", icon: <SiMysql /> },
  { title: "Javascript", desc: "Create interactive and dynamic web experiences with JavaScript.", icon: <SiJavascript />, star: 5 },
  { title: "Typescript", desc: "Enhance JavaScript with static types, making code more understandable and reliable.", icon: <SiTypescript />, star: 5 },
  { title: "HTML 5", desc: "Structure web content beautifully with the latest version of HTML.", icon: <SiHtml5 />, star: 4 },
  { title: "CSS 3", desc: "Style web pages creatively with the latest iteration of CSS.", icon: <SiCss3 />, star: 4 },
  { title: "Bootstrap", desc: "Quickly create responsive and appealing web designs using a popular CSS framework.", icon: <SiBootstrap />, star: 2 },
  { title: "MySQL", desc: "Manage and organize relational databases efficiently.", icon: <SiMysql />, star: 2 },
];

// Projects Section
export const projects = [
  {
    title: "POS Management System",
    nameProject: "DLPOS",
    tagPlateform: ["Web Dev", "UI/UX"],
    description: "A complete point-of-sale system designed for retail businesses...",
    image: Pos_image,
    tags: ["Laravel", "CSS", "Bootstrap", "jQuery", "MySQL"],
    desc: `<p>For my technical assignment project, I developed DLPOS...</p>`,
    MainImage: MainImagePOS,
    images: [DashboardPOS, ProductList],
    link: "#",
    github: "#",
  },
  {
    title: "Real Estate Platform",
    nameProject: "Real Estate",
    tagPlateform: ["Web Dev", "Full Stack", "UI/UX"],
    description: "A web-based platform for managing property listings, agents, and client inquiries...",
    image: Real_Estate,
    tags: ["Laravel", "React", "Bootstrap", "jQuery", "REST API", "MariaDB"],
    desc: `<p>For my final academic project, I developed Viavi Real Estate...</p>`,
    MainImage: MainImageRealEstate,
    images: [RealEstateHome, TypePage, PropertyPage, AboutPage, ContactPage, Dashboard],
    link: "#",
    github: "#",
  },
  {
    title: "Digital Library Platform",
    nameProject: "Digital Library",
    tagPlateform: ["Web Dev", "Full Stack", "UI/UX"],
    description: "A secure digital library system built for educational institutions...",
    image: Educ_Library,
    tags: ["Laravel", "CSS", "Bootstrap", "jQuery", "MySQL"],
    desc: `<p>Following my professional experience in the education sector, I developed Digital Library...</p>`,
    MainImage: MainImageLibrary,
    images: [],
    link: "#",
    github: "#",
  },
  {
    title: "E-Book Publishing Website",
    nameProject: "E-Book",
    tagPlateform: ["Web Dev", "Full Stack", "UI/UX"],
    description: "A modern e-book website that allows authors to publish digital books...",
    image: E_book,
    tags: ["Laravel", "React", "CSS", "Bootstrap", "jQuery", "MySQL"],
    desc: `<p>I developed DL E-Book, a comprehensive digital publishing and reading platform...</p>`,
    MainImage: MainImageEBook,
    images: [],
    link: "#",
    github: "#",
  },
];

// Experiences Section
export const experiences = [
  {
    period: "2024 – 2025",
    role: "Web Development",
    company: "WINTECH SOFTWARE DEVELOPMENT (Cambodia)co., LTD",
    description: "Built an Education Management System in Laravel, including a Library Management module...",
    technologies: ["Laravel", "TypeScript", "jQuery", "MariaDB"],
    current: true,
  },
];

// Contact Info Section
export const contactInfo = [
  { icon: Mail, label: "Email", value: "lin280454@gmail.com", href: "mailto:lin280454@gmail.com" },
  { icon: Phone, label: "Phone", value: "+855 71 508 7086", href: "tel:+855715087086" },
  { icon: MapPin, label: "Location", value: "Khan Pou Senchey, Phnom Penh, Cambodia", href: "https://www.google.com/maps/search/?api=1&query=Khan+Pou+Senchey,+Phnom+Penh,+Cambodia" },
];

// Optional Projects Detail (for detailed page)
export const projectsDetail = [
  {
    title: "Real Estate Platform",
    desc: `For my final academic project, I developed Viavi Real Estate, a comprehensive property management system...`,
    images: [MainImageRealEstate, RealEstateHome, TypePage, PropertyPage, AboutPage, ContactPage, Dashboard]
  }
];
