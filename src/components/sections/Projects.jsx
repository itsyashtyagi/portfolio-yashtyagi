import { StoreButton } from "@/components/common/StoreButton";
import { ArrowRightIcon } from "@/components/common/Icons";

export function Projects({ apps }) {
  if (!apps || apps.length === 0) return null;

  return (
    <section id="apps" className="section-container">
      <div className="section-header">
        <span className="section-eyebrow">Proven Track Record</span>
        <h2 className="section-title">Production Mobile Apps</h2>
        <p className="section-subtitle">
          Live applications engineered from architecture to deployment, actively used by thousands of users.
        </p>
      </div>

      <div className="apps-grid">
        {apps.map((app) => (
          <article key={app.id || app.name} className="app-card">
            <div className="app-card-top">
              <div
                className="app-logo-wrapper"
                style={{
                  boxShadow: `0 8px 24px -6px ${app.accent}33`,
                  borderColor: `${app.accent}40`,
                }}
              >
                <img
                  src={app.logo}
                  alt={`${app.name} icon`}
                  className="app-logo"
                  loading="lazy"
                />
              </div>
              <span className="app-category-badge">{app.category}</span>
            </div>

            <h3 className="app-name">{app.name}</h3>
            <p className="app-desc">{app.desc}</p>

            {/* Clean, Unified Card Actions */}
            <div className="app-card-links">
              <a
                href={`#/project/${app.id}`}
                className="btn-case-study"
                aria-label={`View ${app.name} case study`}
              >
                <span>View Case Study</span>
                <ArrowRightIcon size={15} />
              </a>

              <div className="app-actions">
                <StoreButton platform="play" href={app.playStore} />
                <StoreButton platform="apple" href={app.appStore} />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
