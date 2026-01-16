import { FiArrowRight  } from "react-icons/fi";
import { projects } from "../data/PortfolioData";
import { useNavigate } from "react-router-dom";

const ProjectPage = () => {
  const navigate = useNavigate();

  const showProjectDetail = (project = {}) => {
    if (!project) return;
    console.log(project);
    navigate("/project-detail", {
      state: { projectDetail: project }
    });

  }

  return (
    <section id="projects" className="projects-section py-5 mt-5 position-relative overflow-hidden">
      {/* Background glows */}
      <div className="glow glow-primary"></div>
      <div className="glow glow-highlight"></div>

      <div className="container-fluid px-4 position-relative z-1">
        {/* Section Header */}
        <div className="text-center mx-auto mb-5" style={{ maxWidth: "48rem" }}>
          <h2 className="display-5 fw-bold mt-3 mb-3 fade-in delay-1 text-white ">
            My Projects
          </h2>
          <p className="text-muted fade-in delay-2">
            A collection of projects I built during my first year of experience, focusing on learning, practice, and real-world use.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="row g-4">
          {projects.map((project, idx) => (
            <div className="col-md-6" key={idx}>
              <div
                className="group glass rounded-3 overflow-hidden fade-in p-3 pt-4"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                {/* Image */}
                <div className="position-relative overflow-hidden d-flex justify-content-center  ">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="img-fluid project-img"
                      style={{ height: '360px' }}
                    />
                  <div className="overlay-gradient"></div>

                </div>

                {/* Content */}
                <div className="p-4">
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <h3 className="h5 fw-semibold project-title">{project.title}</h3>
                    <FiArrowRight size={20} className="project-arrow" onClick={()=> showProjectDetail(project)}  />
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

      </div>
    </section>
  );
};

export default ProjectPage;