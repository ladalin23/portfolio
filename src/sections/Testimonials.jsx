import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";   

const testimonials = [
  {
    quote:
      "Pedro is one of the most talented engineers I've worked with. His attention to detail and ability to translate complex requirements into elegant solutions is remarkable.",
    author: "Sarah Chen",
    role: "CTO, Tech Innovators Inc.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
  {
    quote:
      "Working with Pedro was a game-changer for our project. He delivered ahead of schedule with code quality that set a new standard for our team.",
    author: "Michael Rodriguez",
    role: "Product Manager, Digital Solutions",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
  },
  {
    quote:
      "Pedro's expertise in React and TypeScript helped us rebuild our entire frontend in record time. His architectural decisions continue to pay dividends.",
    author: "Emily Watson",
    role: "Engineering Lead, StartUp Labs",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  },
  {
    quote:
      "Not only is Pedro technically brilliant, but he's also a fantastic communicator and team player. He elevated everyone around him.",
    author: "David Kim",
    role: "CEO, Innovation Hub",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
];

export const Testimonials = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const next = () => {
    setActiveIdx((prev) => (prev + 1) % testimonials.length);
  };

  const previous = () => {
    setActiveIdx(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };
  return (
    <section id="testimonials" className="testimonials-section position-relative overflow-hidden py-5">
      {/* Background Glow */}
      <div className="testimonial-glow"></div>

      <div className="container position-relative z-1 px-4">
        {/* Section Header */}
        <div className="text-center mx-auto mb-5 header">
          <span className="section-badge animate-fade-in">
            What People Say
          </span>

          <h2 className="section-title animate-fade-in delay-1">
            Kind words from{" "}
            <span className="title-highlight">amazing people.</span>
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="testimonial-card glass animate-fade-in delay-2 position-relative glow-border">

              <div className="quote-icon">
                <Quote size={24} />
              </div>

              <blockquote className="testimonial-text">
                "{testimonials[activeIdx].quote}"
              </blockquote>

              <div className="d-flex align-items-center gap-3">
                <img
                  src={testimonials[activeIdx].avatar}
                  alt={testimonials[activeIdx].author}
                  className="avatar"
                />
                <div>
                  <div className="fw-semibold">
                    {testimonials[activeIdx].author}
                  </div>
                  <div className="text-muted small">
                    {testimonials[activeIdx].role}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="d-flex justify-content-center align-items-center gap-3 mt-4">
              <button className="nav-btn glass" onClick={previous}>
                <ChevronLeft />
              </button>

              <div className="d-flex gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIdx(idx)}
                    className={`dot ${idx === activeIdx ? "active" : ""}`}
                  />
                ))}
              </div>

              <button className="nav-btn glass" onClick={next}>
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};
