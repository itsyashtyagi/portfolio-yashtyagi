import {
  ArrowRightIcon,
  MailIcon,
  WhatsAppIcon,
  GithubIcon,
  LinkedinIcon,
} from "@/components/common/Icons";

export function Hero({
  role = "Mobile Application Engineer",
  bio,
  links,
  name = "Yash Tyagi",
  company = "Mobilz Pvt Ltd",
}) {
  return (
    <section id="about" className="hero">
      {/* Bespoke Handcrafted Editorial Eyebrow */}
      <div className="hero-eyebrow-editorial">
        <span className="eyebrow-icon-box" aria-hidden="true">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="5" y="2" width="14" height="20" rx="3" ry="3" />
            <line x1="12" y1="18" x2="12.01" y2="18" />
          </svg>
        </span>
        <span className="eyebrow-role">{role}</span>
        <span className="eyebrow-sep" aria-hidden="true">/</span>
        <span className="eyebrow-stack">Flutter &amp; Native Architecture</span>
        <span className="eyebrow-shipped-tag">10+ Shipped Apps</span>
      </div>

      {/* Main Impact Headline */}
      <h1 className="hero-title">
        Building high-performance <span className="hero-gradient-text">mobile applications</span> that scale.
      </h1>

      {/* Bio / Value Proposition */}
      <p className="hero-bio">
        I&apos;m <strong>{name}</strong>, Software Engineer at <strong>{company}</strong> with 10+ production mobile apps shipped across Google Play &amp; Apple App Store. Specialized in cross-platform architecture, fluid performance, and end-to-end delivery.
      </p>

      {/* Hero CTA Actions */}
      <div className="hero-actions">
        <a href="#apps" className="btn btn-primary">
          <span>Explore Apps</span>
          <ArrowRightIcon size={16} />
        </a>
        <a href="#contact" className="btn btn-secondary">
          <MailIcon size={16} />
          <span>Get in Touch</span>
        </a>
        {links?.whatsapp && (
          <a
            href={links.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="btn btn-ghost"
            title="Direct WhatsApp Chat"
          >
            <WhatsAppIcon size={16} />
            <span>WhatsApp</span>
          </a>
        )}
      </div>

      {/* Credibility Metric Cards */}
      <div className="hero-metrics">
        <div className="metric-chip">
          <span className="metric-number">10+</span>
          <span className="metric-label">Production Apps</span>
          <span className="metric-sub">Shipped to Play &amp; App Store</span>
        </div>
        <div className="metric-chip">
          <span className="metric-number">Cross-Platform</span>
          <span className="metric-label">Flutter, iOS &amp; Android</span>
          <span className="metric-sub">Dart, Kotlin, Swift &amp; SwiftUI</span>
        </div>
        <div className="metric-chip">
          <span className="metric-number">Full Lifecycle</span>
          <span className="metric-label">Architecture to Release</span>
          <span className="metric-sub">CI/CD, APIs &amp; App Store Review</span>
        </div>
      </div>

      {/* Quick Social Verification */}
      <div className="hero-socials">
        <span className="hero-socials-label">Connect</span>
        <div className="hero-socials-links">
          {links?.github && (
            <a
              href={links.github}
              target="_blank"
              rel="noreferrer"
              className="hero-social-link"
              aria-label="GitHub Profile"
              title="GitHub Profile"
            >
              <GithubIcon size={16} />
            </a>
          )}
          {links?.linkedin && (
            <a
              href={links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hero-social-link"
              aria-label="LinkedIn Profile"
              title="LinkedIn Profile"
            >
              <LinkedinIcon size={16} />
            </a>
          )}
          {links?.gmail && (
            <a
              href={links.gmail}
              className="hero-social-link"
              aria-label="Send Email"
              title="Send Email"
            >
              <MailIcon size={16} />
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
