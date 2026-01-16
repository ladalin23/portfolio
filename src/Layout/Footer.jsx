import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import '../assets/css/layout.css'

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Mail, href: "#", label: "Email" },
];

export const Footer = () => {

  return (
    <footer className="footer">
        <div className="container-fluid py-5">
            <div className="row align-items-center gy-4">

            {/* Logo & Copyright */}
            <div className="col-md-3 text-center text-md-start">
            </div>
            
            {/* Social Links */}
            <div className="col-md-6 text-center d-flex justify-content-around">
                <div className="footer-social">
                  {socialLinks.map((social) => (
                      <a key={social.label} href={social.href} aria-label={social.label} className="social-icon" >
                      <social.icon className="icon" />
                      </a>
                  ))}
                </div>
            </div>

            {/* Links */}
            <div className="col-md-3">
            </div>

            </div>
        </div>
    </footer>
  );
};