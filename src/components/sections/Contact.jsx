import {
  MailIcon,
  WhatsAppIcon,
  LinkedinIcon,
  GithubIcon,
  ArrowRightIcon,
} from "@/components/common/Icons";

export function Contact({ name, phone, links }) {
  return (
    <section id="contact" className="section-container contact-section">
      <div className="contact-card">
        <div className="contact-glow" />

        <div className="contact-content">
          <div className="section-kicker">
            <span className="kicker-badge">04</span>
            <span className="kicker-sep">/</span>
            <span className="kicker-label">Get in Touch</span>
          </div>
          <h2 className="contact-title">
            Have a project in mind or looking for a Mobile Engineer?
          </h2>
          <p className="contact-desc">
            I am currently open to full-time engineering roles, high-impact contract projects, and architecture consulting. Let’s turn your vision into an exceptional, production-ready mobile application.
          </p>

          <div className="contact-actions">
            {links?.gmail && (
              <a
                href={links.gmail}
                className="btn btn-primary contact-btn-main"
              >
                <MailIcon size={18} />
                <span>Email {name ? name.split(" ")[0] : "Me"}</span>
                <ArrowRightIcon />
              </a>
            )}

            {links?.whatsapp && (
              <a
                href={links.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary contact-btn-sub"
              >
                <WhatsAppIcon size={18} />
                <span>Direct WhatsApp</span>
              </a>
            )}
          </div>

          <div className="contact-footer-links">
            {phone && (
              <div className="contact-info-pill">
                <span className="info-label">Phone:</span>
                <a href={`tel:${phone.replace(/\s+/g, "")}`} className="info-value">
                  {phone}
                </a>
              </div>
            )}
            {links?.linkedin && (
              <a
                href={links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="contact-social-pill"
              >
                <LinkedinIcon size={16} />
                <span>LinkedIn</span>
              </a>
            )}
            {links?.github && (
              <a
                href={links.github}
                target="_blank"
                rel="noreferrer"
                className="contact-social-pill"
              >
                <GithubIcon size={16} />
                <span>GitHub</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
