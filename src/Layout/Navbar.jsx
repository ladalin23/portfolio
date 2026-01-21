import { Button } from "../components/Button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import '../assets/css/layout.css'

const navLinks = [
  { href: "/abouts", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`main-header ${isScrolled ? "header-scrolled" : ""}`} >
        <nav className="navbar navbar-expand-md">
            <div className="container-fluid px-3">

            {/* Logo */}
            <a className="navbar-brand fw-bold" href="/">
                LA DALIN<span className="text-primary">.</span>
            </a>

            {/* Mobile Toggle */}
            <button
                className={`navbar-toggler text-white border-0 ${isMobileMenuOpen ? "d-none" : ""}`}
                type="button"
                onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            >
                <Menu size={24} />
            </button>

            {/* Desktop Menu */}
            <div className="collapse navbar-collapse d-none d-md-flex justify-content-center">
                <div className="glass d-flex align-items-center gap-1 px-2 py-1 rounded-pill">
                {navLinks.map((link, index) => (
                    <a
                    key={index}
                    href={link.href}
                    className="nav-link-custom"
                    >
                    {link.label}
                    </a>
                ))}
                </div>
            </div>

            {/* CTA Button (Desktop) */}
            <div className="d-none d-md-block">
                <Button size="sm">
                    <a href="/contact" className="text-decoration-none text-white" >
                        Contact Me
                    </a>
                </Button>
            </div>
            </div>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
            <div className="mobile-menu animate-fade">
                <button
                    className='navbar-toggler text-end border-0 me-3 mt-2'
                    type="button"
                    onClick={() => setIsMobileMenuOpen((prev) => !prev)} >
                    <X size={24} />
                </button>
                <div className="container py-2 d-flex flex-column gap-3">
                    {navLinks.map((link, index) => (
                    <a
                        key={index}
                        href={link.href}
                        className="mobile-link"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        {link.label}
                    </a>
                    ))}

                    <button
                    className="btn btn-primary"
                    onClick={() => setIsMobileMenuOpen(false)}
                    >
                    Contact Me
                    </button>
                </div>
            </div>
        )}
    </header>
  );
};
