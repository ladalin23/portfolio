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

import PureCleanWebapp from '../assets/images/projectDetail/Pureclean/HomePage.png';
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
    description: "A complete point-of-sale system designed for retail businesses, featuring sales processing, inventory control, invoice generation, and role-based user access.",
    image: Pos_image,
    tags: ["Laravel", "CSS", "Bootstrap", "jQuery", "MySQL"],
    desc:  `<p>For my technical assignment project, I developed DLPOS, a comprehensive Point of Sale (POS) management system designed to streamline retail operations. My objective was to build a robust, server-side rendered application that handles the complexities of inventory tracking, sales processing, and financial reporting within a single integrated environment.</p>
           <p>I developed this system using the Laravel framework, leveraging its MVC (Model-View-Controller) architecture to ensure the code is organized, scalable, and secure. By utilizing Eloquent ORM, I designed a sophisticated relational database to manage product stocks, categories, and transaction histories. For the interface, I used Blade templating, focusing on creating a clean, responsive layout that allows users to navigate the sales and inventory modules with ease.</p>
           <p>This assignment allowed me to master core backend concepts, such as Middleware for security, Form Validation, and Session Management. I went beyond the basic requirements by implementing an Automated Invoice Generation feature and a centralized Admin Dashboard that tracks daily revenue and low-stock alerts, demonstrating my ability to build a complete business solution from the ground up.</p>`,
    MainImage: MainImagePOS,
    images: [DashboardPOS, ProductList],
    link: "#",
    github: "#",
  },
  {
    title: "Real Estate Platform",
    nameProject: "Real Estate",
    tagPlateform: ["Web Dev", "Full Stack", "UI/UX"],
    description: "A web-based platform for managing property listings, agents, and client inquiries with advanced filtering, dashboards, and admin controls.",
    image: Real_Estate,
    tags: ["Laravel", "React", "Bootstrap", "jQuery", "REST API", "MariaDB"],
    desc: `<p>For my final academic project, I developed Viavi Real Estate, a comprehensive property management system designed to solve real-world challenges in the housing market. My goal was to build a professional-grade platform that handles complex data such as property types, locations, and pricing while maintaining a clean, modern user interface.</p>
           <p>As a full-stack developer, I chose Laravel for the backend due to its robust security and React.js for the frontend to create a fast, single-page application (SPA) experience. I successfully designed and implemented a relational database to manage 7 distinct property categories (Residential, Office, Industrial, etc.) and built a functional Advanced Search Filter that mimics professional real estate sites.</p>
           <p>This project was a significant milestone in my education, allowing me to master the integration of API-driven development. I went beyond basic requirements by building a fully operational Admin Dashboard that tracks site statistics and revenue, demonstrating my ability to handle both user-facing features and backend business logic.</p>`,
    MainImage: MainImageRealEstate,
    images: [RealEstateHome, TypePage, PropertyPage, AboutPage, ContactPage, Dashboard],
    link: "#",
    github: "#",
  },
  {
    title: "Digital Library Platform",
    nameProject: "Digital Library",
    tagPlateform: ["Web Dev", "Full Stack", "UI/UX"],
    description:  "A secure digital library system built for educational institutions, enabling students and teachers to access academic e-books and manage learning resources.",
    image: Educ_Library,
    tags: ["Laravel", "CSS", "Bootstrap", "jQuery", "MySQL"],
    desc: `<p>Following my professional experience in the education sector, I developed Digital Library, a centralized e-resource management system designed to modernize academic research and document accessibility. My primary goal was to create a robust, secure environment where students and educators can seamlessly access a vast collection of digital assets ranging from academic journals and e-books to multimedia learning materials.</p>
           <p>As a full-stack developer, I utilized Laravel as the core framework for both backend logic and frontend rendering. By leveraging Laravel’s Blade Templating Engine, I was able to build a fast, SEO-friendly, and highly responsive interface without the complexity of a separate frontend framework. I architected a complex relational database to handle categorized metadata, user borrowing histories, and digital file storage, ensuring that the system remains performant even with a high volume of concurrent users.</p>
           <p>This project represents a significant evolution in my development career, as it required deep integration of Role-Based Access Control (RBAC) to distinguish between students, faculty, and librarians. I implemented an advanced Global Search Engine using Eloquent ORM, allowing for precision filtering of resources by author, ISBN, and academic discipline. The final product includes a comprehensive Librarian Dashboard for tracking resource circulation and user engagement, proving my ability to deliver enterprise-grade solutions within the educational technology space.</p>`,
    MainImage: MainImageLibrary,
    images: [],
    link: "#",
    github: "#",
  },
  {
    title: "E-Book Publishing Website",
    nameProject: "E-Book",
    tagPlateform: ["Web Dev", "Full Stack", "UI/UX"],
    description: "A modern e-book website that allows authors to publish digital books while users can browse, preview, and download content online.",
    image: E_book,
    tags: ["Laravel", "React", "CSS", "Bootstrap", "jQuery", "MySQL"],
    desc:  `<p>I developed DL E-Book, a comprehensive digital publishing and reading platform designed to bridge the gap between authors and readers in a modern digital environment. My goal was to build a robust, professional grade system that manages a vast library of digital content while providing an intuitive, seamless reading experience for users.</p>
           <p>As a full-stack developer, I utilized Laravel as the primary framework, leveraging its powerful Blade Templating Engine and Eloquent ORM to create a unified, high-performance application. By using Laravel for both the backend logic and frontend rendering, I ensured a highly secure and SEO-optimized platform. I successfully designed a relational database to manage diverse e-book categories, author profiles, and user libraries, allowing for efficient data retrieval and content organization.</p>
           <p>This project served as a major milestone in my development journey, as it required implementing complex file management systems and secure content delivery. I went beyond basic functionality by building a comprehensive Admin Dashboard to monitor book sales, track user subscriptions, and manage digital inventory. This project demonstrates my ability to handle end-to-end development, from architectural design to the delivery of a user-centric business solution.</p>`,
    MainImage: MainImageEBook,
    images: [],
    link: "#",
    github: "#",
  },
  {
    title: "Pureclean Laundry",
    nameProject: "Pureclean Laundry",
    tagPlateform: ["Web App", "Front-end", "UI/UX"],
    description:
      "A high-performance front-end web application for laundry services, featuring a digital loyalty program and a mobile-first user dashboard built with Nuxt.js.",
    image: PureCleanWebapp,
    tags: ["Nuxt.js", "Vue.js", "Tailwind CSS", "Vuetify", "JavaScript"],
    desc: `<p>I developed the front-end of the Pureclean Laundry web application, a modern digital solution designed to streamline the customer experience for laundry services. By leveraging <b>Nuxt.js</b>, I built a highly performant and SEO-friendly application that provides a smooth, single-page application (SPA) feel while maintaining excellent load speeds.</p>
           <p>The user interface was crafted using a unique combination of <b>Tailwind CSS</b> for bespoke layout styling and <b>Vuetify</b> for robust, pre-built material components. This hybrid approach allowed me to maintain strict design consistency while having the flexibility to build custom features like the interactive 'Loyalty Card' system, which tracks user progress toward a free wash (10-wash milestone).</p>
           <p>During development, I focused heavily on mobile responsiveness and state management to ensure that the 'My QR' and 'Rewards' sections function seamlessly across all devices. This project demonstrates my proficiency in modern Vue frameworks and my ability to translate complex business requirements into a clean, user-centric front-end architecture.</p>`,
    MainImage: MainImagePureClean,
    images: [PureCleanWebapp, QRPage, RewardPage, ProfilePage],
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
