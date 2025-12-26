 
const experiences = [
  {
    period: "2024 – 2025",
    role: "Web Development",
    company: "WINTECH SOFTWARE DEVELOPMENT (Cambodia)co., LTD",
    description:"Built an Education Management System in Laravel, including a Library Management module, and prepared user-friendly documentation for clients, gaining practical experience in web development and system workflows.",
    technologies: ["Laravel", "TypeScript", "jQuery", "MariaDB"],
    current: true,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="experience-section position-relative overflow-hidden py-5">
      {/* Glow background */}
      <div className="experience-glow"></div>

      <div className="container position-relative z-1 px-3">
        {/* Header */}
        <div className="mb-5" style={{ maxWidth: "48rem" }}>
          <span className="section-label animate-fade-in">
            Career Journey
          </span>

          <h2 className="section-title animate-fade-in delay-1">
            Experience that{" "}
            <span className="section-title-accent">speaks volumes.</span>
          </h2>

          <p className="section-description animate-fade-in delay-2">
            A timeline of my professional growth, from curious beginner to
            senior engineer leading teams and building products at scale.
          </p>
        </div>

        {/* Timeline */}
        <div className="timeline position-relative">
          <div className="timeline-line"></div>

          <div className="d-flex flex-column gap-5">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="row position-relative animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="timeline-dot">
                  {exp.current && <span className="timeline-ping"></span>}
                </div>

                {/* Content */}
                <div
                  className={`col-12 col-md-6 ${
                    idx % 2 === 0
                      ? "text-md-end pe-md-5"
                      : "offset-md-6 ps-md-5"
                  }`}
                >
                  <div className="timeline-card">
                    <span className="timeline-period">{exp.period}</span>
                    <h3 className="timeline-role mt-2">{exp.role}</h3>
                    <p className="timeline-company">{exp.company}</p>
                    <p className="timeline-desc mt-3">{exp.description}</p>

                    <div
                      className={`d-flex flex-wrap gap-2 mt-3 ${
                        idx % 2 === 0 ? "justify-content-md-end" : ""
                      }`}
                    >
                      {exp.technologies.map((tech, techIdx) => (
                        <span key={techIdx} className="tech-badge">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

  );
};
