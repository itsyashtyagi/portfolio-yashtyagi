import { useState, useEffect } from "react";
import {
  GithubIcon,
  LinkedinIcon,
  XIcon,
  WhatsAppIcon,
  MailIcon,
  SunIcon,
  MoonIcon,
  MenuIcon,
  CloseIcon,
} from "@/components/common/Icons";

export function Navbar({ name, links, theme, toggleTheme }) {
  const isDark = theme === "dark";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile drawer on route hash change
  useEffect(() => {
    const handleHash = () => setMobileMenuOpen(false);
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  // Lock body scroll when mobile menu is open, handle ESC key
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleKey = (e) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    const origOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = origOverflow;
    };
  }, [mobileMenuOpen]);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="wrapper navbar-content">
        <a href="#" className="logo" aria-label="Home" onClick={handleNavClick}>
          <span className="logo-text">{name}</span>
          <span className="logo-dot" />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="nav-links" aria-label="Page Sections">
          <a href="#about" className="nav-link">About</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#apps" className="nav-link">Projects</a>
          <a href="#experience" className="nav-link">Experience</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>

        <div className="nav-right">
          {/* Desktop Only Social Nav Icons */}
          <div className="social-nav">
            {links?.github && (
              <a
                href={links.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="social-btn"
              >
                <GithubIcon size={17} />
              </a>
            )}
            {links?.linkedin && (
              <a
                href={links.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="social-btn"
              >
                <LinkedinIcon size={17} />
              </a>
            )}
            {links?.x && (
              <a
                href={links.x}
                target="_blank"
                rel="noreferrer"
                aria-label="X (Twitter)"
                className="social-btn"
              >
                <XIcon size={15} />
              </a>
            )}
            {links?.whatsapp && (
              <a
                href={links.whatsapp}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="social-btn"
              >
                <WhatsAppIcon size={17} />
              </a>
            )}
            {links?.gmail && (
              <a
                href={links.gmail}
                aria-label="Email"
                className="social-btn"
              >
                <MailIcon size={17} />
              </a>
            )}
          </div>

          {/* Theme Toggle Button */}
          <button
            type="button"
            className="theme-toggle-btn"
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
            title={isDark ? "Switch to Light Theme" : "Switch to Dark Theme"}
          >
            {isDark ? <SunIcon size={18} /> : <MoonIcon size={18} />}
          </button>

          {/* Hire Me CTA Button */}
          <a href="#contact" className="nav-cta-btn" onClick={handleNavClick}>
            Hire Me
          </a>

          {/* Mobile & Tablet Hamburger Toggle */}
          <button
            type="button"
            className={`mobile-menu-btn ${mobileMenuOpen ? "active" : ""}`}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <CloseIcon size={20} /> : <MenuIcon size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Backdrop */}
      <div
        className={`mobile-nav-backdrop ${mobileMenuOpen ? "open" : ""}`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile & Tablet Navigation Drawer */}
      <nav
        className={`mobile-nav-drawer ${mobileMenuOpen ? "open" : ""}`}
        aria-label="Mobile Navigation"
      >
        <div className="mobile-nav-inner">
          <div className="mobile-nav-links">
            <a href="#about" className="mobile-nav-link" onClick={handleNavClick}>
              <span className="mobile-nav-num">01</span>
              <span className="mobile-nav-label">About</span>
            </a>
            <a href="#skills" className="mobile-nav-link" onClick={handleNavClick}>
              <span className="mobile-nav-num">02</span>
              <span className="mobile-nav-label">Skills &amp; Stack</span>
            </a>
            <a href="#apps" className="mobile-nav-link" onClick={handleNavClick}>
              <span className="mobile-nav-num">03</span>
              <span className="mobile-nav-label">Production Apps</span>
            </a>
            <a href="#experience" className="mobile-nav-link" onClick={handleNavClick}>
              <span className="mobile-nav-num">04</span>
              <span className="mobile-nav-label">Experience</span>
            </a>
            <a href="#contact" className="mobile-nav-link" onClick={handleNavClick}>
              <span className="mobile-nav-num">05</span>
              <span className="mobile-nav-label">Get in Touch</span>
            </a>
          </div>

          <div className="mobile-nav-footer">
            <span className="mobile-socials-label">Connect Directly</span>
            <div className="mobile-social-nav">
              {links?.github && (
                <a
                  href={links.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="social-btn"
                >
                  <GithubIcon size={18} />
                </a>
              )}
              {links?.linkedin && (
                <a
                  href={links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="social-btn"
                >
                  <LinkedinIcon size={18} />
                </a>
              )}
              {links?.x && (
                <a
                  href={links.x}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="X (Twitter)"
                  className="social-btn"
                >
                  <XIcon size={16} />
                </a>
              )}
              {links?.whatsapp && (
                <a
                  href={links.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp"
                  className="social-btn"
                >
                  <WhatsAppIcon size={18} />
                </a>
              )}
              {links?.gmail && (
                <a
                  href={links.gmail}
                  aria-label="Email"
                  className="social-btn"
                >
                  <MailIcon size={18} />
                </a>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

