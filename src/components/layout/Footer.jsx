export function Footer({ name, role = "Mobile Application Engineer" }) {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="wrapper footer-container">
        {/* Top Tier: Brand & Navigation */}
        <div className="footer-top">
          <div className="footer-left">
            <span className="footer-brand">{name}</span>
            <span className="footer-tagline">
              {role} • Flutter &amp; Native Platforms
            </span>
          </div>

          <div className="footer-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#apps">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </div>
        </div>

        {/* Subtle Elegant Divider */}
        <div className="footer-divider" />

        {/* Bottom Tier: Copyright & Back-to-Top */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} {name}. Crafted for high performance and reliability.
          </p>
          <button
            type="button"
            onClick={handleScrollToTop}
            className="footer-top-btn"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="18 15 12 9 6 15" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
