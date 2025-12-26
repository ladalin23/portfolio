import { Github, Linkedin, Twitter, Heart } from "lucide-react";
import '../assets/css/layout.css'

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
        <div className="container-fluid px-4 py-4">
            <div className="row align-items-center gy-4">

            {/* Logo & Copyright */}
            <div className="col-md-4 text-center text-md-start">
                <a href="#" className="footer-logo text-white">
                PM<span className="text-primary">.</span>
                </a>
                <p className="footer-text mt-2">
                </p>
            </div>

            {/* Links */}
            <div className="col-md-4">
                <nav className="footer-links text-center">
                {footerLinks.map((link) => (
                    <a
                    key={link.href}
                    href={link.href}
                    className="footer-link"
                    >
                    {link.label}
                    </a>
                ))}
                </nav>
            </div>

            {/* Social Links */}
            <div className="col-md-4 text-center text-md-end">
                <div className="footer-social">
                {socialLinks.map((social) => (
                    <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="social-icon"
                    >
                    <social.icon className="icon" />
                    </a>
                ))}
                </div>
            </div>

            </div>
        </div>
    </footer>
  );
};