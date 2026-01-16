import { Button } from "../components/Button";
import { ArrowRight, ChevronDown, Github, Download, Linkedin, Facebook, } from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton"; 
import profile_image from '../assets/images/profile-photo.jpg';
import hero_bg from '../assets/images/hero-bg.jpg';

export const Hero = () => {

  const ConAccont = [
    { Icon: Github, href: "https://github.com/Dalin23Developer" },
    { Icon: Linkedin, href: "https://www.linkedin.com/in/la-dalin-b88829393" },
    { Icon: Facebook, href: "https://web.facebook.com/sok.lin.939283" },
  ] 

  return (
    <section className="hero-section position-relative d-flex align-items-center overflow-hidden px-3" style={{minHeight: '120vh'}} >
      {/* Background */}
      <div className="position-absolute top-0 start-0 w-100 h-100">
        <img
          src={hero_bg}
          alt="Hero background"
          style={{ width: "100%", height: "100%", objectFit: "cover", opacity: '90%', }}
        />
        <div className="hero-overlay" />
      </div>

      {/* Floating Dots */}
      <div className="position-absolute top-0 start-0 w-100 h-100 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <span
            key={i}
            className="position-absolute rounded-circle"
            style={{
              width: '0.375rem', height: '0.375rem', opacity: 0.6,
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${
                15 + Math.random() * 20
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container-fluid position-relative pt-5 mt-5 z-1">
        <div className="row align-items-center gy-5">

          {/* Left */}
          <div className="col-lg-6">

            <span className="d-inline-flex align-items-center my-4 gap-2 px-3 py-2 rounded-pill text-primary glass" style={{fontSize: '0.9rem',}}>
              <span className="pulse-dot"></span>
              Software Engineer
            </span>

            <h1 className="hero-title fade-in delay-1 mt-4">
              Crafting <span className="text-primary glow-text">digital</span><br />
              experiences with<br />
              <span className="hero-serif">precision.</span>
            </h1>

            <p className="hero-text fade-in delay-2 mt-1">
              Hi, I’m La Dalin, a software engineer specializing in Laravel and React, passionate about building efficient, user-friendly applications.
            </p>

            {/* CTA */}
            <div className="d-flex flex-wrap gap-3 fade-in delay-3">
              <Button size="lg">
                <a href="#contact" className="text-decoration-none text-white" >
                  Contact Me <ArrowRight size={20} />
                </a>
              </Button>

              <AnimatedBorderButton className="btn btn-outline-primary btn-lg animated-border">
                <a href="/LA-Dalin-CV.pdf" className="text-decoration-none text-white" download>
                  <Download size={20} /> Download CV
                </a>
              </AnimatedBorderButton>
            </div>

            {/* Social */}
            <div className="d-flex align-items-center gap-3 my-4 fade-in delay-4">
              <span className="small" style={{color: '#7a8491'}} >Follow me:</span>
              {ConAccont.map((Acc, i) => (
                <a key={i} href={Acc.href} className="social-glass">
                  <Acc.Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="col-lg-6 text-center fade-in delay-3">
            <div className="profile-wrapper mx-auto">
              <div className="profile-glow"></div>
              <div className="profile-card">
                <img
                  src={profile_image}
                  alt="Pedro Machado"
                  className="profile-image"
                />

                {/* Status */}
                <div className="badge-floating bottom-right">
                  <span className="dot me-2"></span>
                  Available for work
                </div>

                {/* Experience */}
                <div className="badge-floating top-left delay-float">
                  <div className="fs-4 fw-bold text-primary">1+</div>
                  <small className="text-muted">Years Exp.</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll */}
      <div className="position-absolute bottom-8 start-50 translate-middle-x fade-in delay-800">
        <a href="#about" className="d-flex flex-column align-items-center custom-text text-decoration-none">
          <span>Scroll</span> 
          <ChevronDown className="animate-bounce" />
        </a>
      </div>
    </section>
  );
};
