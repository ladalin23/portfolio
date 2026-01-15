import { highlights } from "../data/PortfolioData";

export const About = () => {
  return (
    <section id="abouts" className="about-section py-5 position-relative overflow-hidden">
      <div className="container-fluid position-relative z-1 px-4">
        <div className="row align-items-center gx-5">
          {/* Left Column */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h2 className="display-5 text-primary fw-bold mt-3 fade-in delay-1">
              About Me
            </h2>

            <div className="mt-4 text-muted fade-in delay-2">
              <p>
                I am a software engineer specializing in Laravel, React, and full-stack web development, with 1 year of experience contributing to the development of an education management system. 
                I have hands-on experience in web application development, system implementation, and collaborating with clients.
              </p>
              <p>
                I am passionate about building efficient, user-friendly applications and continuously improving my skills in software engineering, web development, and system design. 
                I aim to apply my knowledge to real-world projects, contribute effectively to professional teams, and grow in a dynamic, innovative environment.
              </p>
            </div>

            <div className="glass p-4 rounded-3 fade-in delay-3 glow-border mt-4" style={{ animationDelay: `300ms` }}>
              <p className="fs-5 fst-italic">
                "My mission is to build web applications that are not only efficient and reliable but also intuitive and engaging — solutions that users enjoy and teams enjoy developing and maintaining."
              </p>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="col-lg-6">
            <div className="row g-3">
              {highlights.map((item, idx) => (
                <div className="col-sm-6" key={idx}>
                  <div
                    className="glass p-3 rounded-3 fade-in"
                    style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                  >
                    <div className="icon bg-primary bg-opacity-10 rounded-3 mb-2 d-flex align-items-center justify-content-center">
                      <item.icon className="text-primary fs-4" />
                    </div>
                    <h3 className="h6 fw-semibold mb-1">{item.title}</h3>
                    <p className="small text-muted">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
