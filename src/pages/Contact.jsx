
import { useState } from "react"; 
import emailjs from "@emailjs/browser";
import { contactInfo } from "../data/PortfolioData";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    type: null, // 'success' or 'error'
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });
    try {
      const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
      const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          "EmailJS configuration is missing. Please check your environment variables."
        );
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: "lin280454@gmail.com",
          message: formData.message,
          reply_to: formData.email
        },
        publicKey
      );

      setSubmitStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setSubmitStatus({
        type: "error",
        message:
          err.text || "Failed to send message. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <section id="contact" className="contact-section mt-5 position-relative overflow-hidden py-5">
      {/* Background glows */}
      <div className="position-absolute top-0 start-0 w-100 h-100">
        <div className="glow glow-primary"></div>
        <div className="glow glow-highlight"></div>
      </div>

      <div className="container position-relative z-1 px-4">
        {/* Header */}
        <div className="text-center mx-auto mb-5" style={{ maxWidth: "700px" }}>
          <h2 className="section-title animate-fade delay-1">
            Contact
          </h2>

          <p className="text-muted animate-fade delay-2">
            Interested in working together? Send me a message and let’s get started.
          </p>
        </div>

        <div className="row g-5 justify-content-center">
          {/* Form */}
          <div className="col-lg-6 animate-fade delay-3">
            <div className="glass-card border-primary-soft">
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control custom-input placeholder-color"
                    placeholder="Your name..."
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control custom-input placeholder-color"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label">Message</label>
                  <textarea
                    rows="5"
                    className="form-control custom-input placeholder-color"
                    placeholder="Your message..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                  ></textarea>
                </div>

                <button className="btn btn-primary w-100 btn-lg" disabled={isLoading}>
                  {isLoading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-lg-5 animate-fade delay-4">
            <div className="glass-card mb-4">
              <h5 className="mb-4">Contact Information</h5>

              {contactInfo.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className="contact-item"
                >
                  <div className="icon-box">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <small className="text-muted">{item.label}</small>
                    <div className="fw-medium">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Availability */}
            <div className="glass-card border-primary-soft">
              <div className="d-flex align-items-center gap-2 mb-3">
                <span className="status-dot"></span>
                <strong>Currently Available</strong>
              </div>
              <p className="text-muted small mb-0">
                I’m currently open to full-time software engineering opportunities and eager to contribute to a dynamic, growth-driven team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
