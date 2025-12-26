import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton"; 
import Pos_image from '../assets/images/projects/pos-system.png';
import Real_Estate from '../assets/images/projects/real-estate.png';
import Educ_Library from '../assets/images/projects/education-library.png';
import E_book from '../assets/images/projects/ebook-website.png';

const projects = [
  {
    title: "POS Management System",
    description:
      "A complete point-of-sale system designed for retail businesses, featuring sales processing, inventory control, invoice generation, and role-based user access.",
    image: Pos_image,
    tags: ["Laravel", "CSS", "Bootstrap", "jQuery", "MySQL"],
    link: "#",
    github: "#",
  },
  {
    title: "Real Estate Platform",
    description:
      "A web-based platform for managing property listings, agents, and client inquiries with advanced filtering, dashboards, and admin controls.",
    image: Real_Estate,
    tags: ["Laravel", "Bootstrap", "CSS", "jQuery", "React", "REST API", "MariaDB"],
    link: "#",
    github: "#",
  },
  {
    title: "Digital Library Platform",
    description:
      "A secure digital library system built for educational institutions, enabling students and teachers to access academic e-books and manage learning resources.",
    image: Educ_Library,
    tags: ["Laravel", "CSS", "Bootstrap", "jQuery", "MySQL"],
    link: "#",
    github: "#",
  },
  {
    title: "E-Book Publishing Website",
    description:
      "A modern e-book website that allows authors to publish digital books while users can browse, preview, and download content online.",
    image: E_book,
    tags: ["Laravel", "React", "CSS", "Bootstrap", "jQuery", "MySQL"],
    link: "#",
    github: "#",
  },
];


export const Projects = () => {
  return (
    <section id="projects" className="projects-section py-5 position-relative overflow-hidden">
      {/* Background glows */}
      <div className="glow glow-primary"></div>
      <div className="glow glow-highlight"></div>

      <div className="container-fluid px-4 position-relative z-1">
        {/* Section Header */}
        <div className="text-center mx-auto mb-5" style={{ maxWidth: "48rem" }}>
          <span className="text-secondary small fw-medium text-uppercase fade-in">
            Featured Work
          </span>
          <h2 className="display-5 fw-bold mt-3 mb-3 fade-in delay-1 text-secondary">
            Projects that
            <span className="font-serif fst-italic fw-normal text-white">
              {" "}make an impact.
            </span>
          </h2>
          <p className="text-muted fade-in delay-2">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="row g-4">
          {projects.map((project, idx) => (
            <div className="col-md-6" key={idx}>
              <div
                className="group glass rounded-3 overflow-hidden fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                {/* Image */}
                <div className="position-relative overflow-hidden ratio ratio-16x9">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="img-fluid project-img"
                  />
                  <div className="overlay-gradient"></div>

                  {/* Overlay Links */}
                  <div className="overlay-links d-flex justify-content-center align-items-center gap-3">
                    <a
                      href={project.link}
                      className="btn-glass d-flex align-items-center justify-content-center"
                    >
                      <ArrowUpRight size={20} style={{color: '#ffffff'}} />
                    </a>
                    <a
                      href={project.github}
                      className="btn-glass d-flex align-items-center justify-content-center"
                    >
                      <Github size={20} style={{color: '#ffffff'}} />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <h3 className="h5 fw-semibold project-title">{project.title}</h3>
                    <ArrowUpRight size={20} className=" project-arrow" />
                  </div>
                  <p className="text-muted small">{project.description}</p>
                  <div className="d-flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIdx) => (
                      <span key={tagIdx} className="badge-custom">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight style={{ width: "1.25rem", height: "1.25rem" }} />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};
