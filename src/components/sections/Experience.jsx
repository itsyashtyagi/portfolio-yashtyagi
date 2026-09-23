import { GlobeIcon, LinkedinIcon } from "@/components/common/Icons";

export function Experience({ experience }) {
  if (!experience || experience.length === 0) return null;

  return (
    <section id="experience" className="section-container">
      <div className="section-header">
        <span className="section-eyebrow">Work History</span>
        <h2 className="section-title">Professional Path</h2>
        <p className="section-subtitle">
          Demonstrated engineering leadership and full-cycle mobile app delivery in production environments.
        </p>
      </div>

      <div className="experience-stack">
        {experience.map((item, idx) => {
          const isCurrent = idx === 0;

          return (
            <div key={item.company} className="exp-card">
              <div className="company-header">
                <div className="company-title-wrap">
                  <h3 className="company-name">{item.company}</h3>
                  {isCurrent && <span className="status-badge-current">Current</span>}
                </div>

                <div className="company-links">
                  {item.companyWebsite && (
                    <a
                      href={item.companyWebsite}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${item.company} website`}
                      className="company-link-btn"
                    >
                      <GlobeIcon size={16} />
                      <span>Website</span>
                    </a>
                  )}
                  {item.companyLinkedin && (
                    <a
                      href={item.companyLinkedin}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${item.company} LinkedIn`}
                      className="company-link-btn"
                    >
                      <LinkedinIcon size={16} />
                      <span>LinkedIn</span>
                    </a>
                  )}
                </div>
              </div>

              <div className="promo-container">
                <div className="promo-line" />
                {item.isPromoted ? (
                  item.roles.map((role, rIdx) => (
                    <div
                      key={role.title + role.period}
                      className={`role-entry ${rIdx > 0 ? "role-entry-prev" : ""}`}
                    >
                      <div className="role-dot" />
                      <div className="role-meta">
                        <span className="role-title">{role.title}</span>
                        <span className="role-date-badge">{role.period}</span>
                      </div>
                      <p className="role-desc">{role.desc}</p>
                    </div>
                  ))
                ) : (
                  <div className="role-entry">
                    <div className="role-dot" />
                    <div className="role-meta">
                      <span className="role-title">{item.role}</span>
                      <span className="role-date-badge">{item.period}</span>
                    </div>
                    <p className="role-desc">{item.desc}</p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
