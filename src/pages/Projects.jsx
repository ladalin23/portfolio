import { FiArrowRight } from "react-icons/fi";
import { projects } from "../data/PortfolioData";
import { useNavigate } from "react-router-dom";

const ProjectPage = () => {
  const navigate = useNavigate();

  const showProjectDetail = (project) => {
    if (!project) return;

    navigate("/project-detail", {
      state: { projectDetail: project },
    });
  };

  return (
    <section
      id="projects"
      className="projects-section py-5 mt-5 position-relative overflow-hidden"
    >
      {/* Background glows */}
      <div className="glow glow-primary"></div>
      <div className="glow glow-highlight"></div>

      <div className="container-fluid px-4 position-relative z-1">
        {/* Section Header */}
        <div className="text-center mx-auto mb-5" style={{ maxWidth: "48rem" }}>
          <h2 className="display-5 fw-bold mt-3 mb-3 fade-in delay-1 text-white">
            My Projects
          </h2>
          <p className="text-muted fade-in delay-2">
            A collection of projects I built during my first year of experience,
            focusing on learning, practice, and real-world use.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectPage;
