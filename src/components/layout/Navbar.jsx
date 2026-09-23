import {
  GithubIcon,
  LinkedinIcon,
  XIcon,
  WhatsAppIcon,
  MailIcon,
  SunIcon,
  MoonIcon,
} from "@/components/common/Icons";

export function Navbar({ name, links, theme, toggleTheme }) {
  const isDark = theme === "dark";

  return (
    <header className="navbar">
      <div className="wrapper navbar-content">
        <a href="#" className="logo" aria-label="Home">
          <span className="logo-text">{name}</span>
        </a>

        {/* <nav className="nav-links" aria-label="Page Sections">
          <a href="#about" className="nav-link">About</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#apps" className="nav-link">Projects</a>
          <a href="#experience" className="nav-link">Experience</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav> */}

        <div className="nav-right">
          <div className="social-nav">
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

          <a href="#contact" className="nav-cta-btn">
            Hire Me
          </a>
        </div>
      </div>
    </header>
  );
}
