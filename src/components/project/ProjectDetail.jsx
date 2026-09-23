import { useState, useEffect } from "react";
import { StoreButton } from "@/components/common/StoreButton";
import {
  ArrowRightIcon,
  SparklesIcon,
  GlobeIcon,
} from "@/components/common/Icons";

export function ProjectDetail({ project, allProjects }) {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [project.id]);

  if (!project) return null;

  // Calculate Next and Previous projects for bottom switcher
  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const prevProject =
    currentIndex > 0 ? allProjects[currentIndex - 1] : allProjects[allProjects.length - 1];
  const nextProject =
    currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : allProjects[0];

  return (
    <div className="project-detail-view">
      {/* Top Navigation Bar */}
      <div className="project-top-bar">
        <a href="#apps" className="back-link">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          <span>Back to All Projects</span>
        </a>

        <div className="project-breadcrumbs">
          <span>Home</span>
          <span className="crumb-sep">/</span>
          <span>Projects</span>
          <span className="crumb-sep">/</span>
          <span className="crumb-current">{project.name}</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="project-hero">
        <div className="project-header-left">
          <div className="project-badge-row">
            <span
              className="project-category-pill"
              style={{
                borderColor: `${project.accent}50`,
                backgroundColor: `${project.accent}15`,
                color: project.accent,
              }}
            >
              {project.category}
            </span>
            {project.highlights?.status && (
              <span className="project-status-pill">
                <span className="status-live-dot" />
                {project.highlights.status}
              </span>
            )}
          </div>

          <h1 className="project-title">{project.name}</h1>
          <p className="project-tagline">{project.tagline}</p>

          <div className="project-specs-row">
            {project.highlights?.platform && (
              <div className="spec-badge">
                <GlobeIcon size={14} />
                <span>{project.highlights.platform}</span>
              </div>
            )}
            {project.highlights?.architecture && (
              <div className="spec-badge">
                <SparklesIcon size={14} />
                <span>{project.highlights.architecture}</span>
              </div>
            )}
          </div>

          <div className="project-store-actions">
            <StoreButton platform="play" href={project.playStore} />
            <StoreButton platform="apple" href={project.appStore} />
          </div>
        </div>

        {/* Visual Mockup Card & Presentation */}
        <div className="project-mockup-wrapper">
          <div
            className="mockup-frame"
            style={{
              borderColor: `${project.accent}40`,
              boxShadow: `0 20px 50px -10px ${project.accent}25`,
            }}
          >
            <div className="mockup-header-bar">
              <div className="mockup-dots">
                <span className="mockup-dot dot-red" />
                <span className="mockup-dot dot-yellow" />
                <span className="mockup-dot dot-green" />
              </div>
              <span className="mockup-url-pill">app://{project.id}.live</span>
            </div>

            <div className="mockup-screen-content">
              <div className="mockup-logo-showcase">
                <img
                  src={project.logo}
                  alt={`${project.name} app logo`}
                  className="mockup-app-logo"
                  style={{
                    boxShadow: `0 12px 30px -8px ${project.accent}40`,
                  }}
                />
                <div className="mockup-app-info">
                  <span className="mockup-app-title">{project.name}</span>
                  <span className="mockup-app-cat">{project.category}</span>
                </div>
              </div>

              {/* Graphic Feature Cards Animation */}
              <div className="mockup-feature-carousel">
                <div className="mockup-carousel-card">
                  <div className="carousel-glow" style={{ background: project.accent }} />
                  <span className="carousel-card-step">
                    Step {project.howItWorks[activeStep]?.step || "01"}
                  </span>
                  <h4 className="carousel-card-title">
                    {project.howItWorks[activeStep]?.title || "Core Experience"}
                  </h4>
                  <p className="carousel-card-desc">
                    {project.howItWorks[activeStep]?.desc}
                  </p>
                </div>

                <div className="mockup-step-indicators">
                  {project.howItWorks.map((step, idx) => (
                    <button
                      key={step.step}
                      type="button"
                      className={`step-dot-btn ${activeStep === idx ? "active" : ""}`}
                      onClick={() => setActiveStep(idx)}
                      aria-label={`View step ${step.step}`}
                      style={{
                        backgroundColor: activeStep === idx ? project.accent : undefined,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What It Is Section */}
      <section className="project-detail-section">
        <div className="section-header">
          <span className="section-eyebrow">Product Overview</span>
          <h2 className="section-title">What is {project.name}?</h2>
        </div>
        <div className="project-overview-card">
          <p className="project-overview-text">{project.overview}</p>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="project-detail-section">
        <div className="section-header">
          <span className="section-eyebrow">User Journey & Architecture</span>
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">
            A seamless, end-to-end user workflow engineered for high performance and intuitive mobile interaction.
          </p>
        </div>

        <div className="workflow-steps-grid">
          {project.howItWorks.map((item, idx) => (
            <div
              key={item.step}
              className={`workflow-step-card ${activeStep === idx ? "highlighted" : ""}`}
              onClick={() => setActiveStep(idx)}
            >
              <div
                className="step-badge"
                style={{
                  color: project.accent,
                  borderColor: `${project.accent}40`,
                  backgroundColor: `${project.accent}12`,
                }}
              >
                {item.step}
              </div>
              <h3 className="step-title">{item.title}</h3>
              <p className="step-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Key Features Grid */}
      <section className="project-detail-section">
        <div className="section-header">
          <span className="section-eyebrow">Feature Architecture</span>
          <h2 className="section-title">Key Capabilities & Features</h2>
        </div>

        <div className="features-grid">
          {project.keyFeatures.map((feature, i) => (
            <div key={i} className="feature-item-card">
              <div
                className="feature-icon-wrapper"
                style={{
                  color: project.accent,
                  backgroundColor: `${project.accent}12`,
                  borderColor: `${project.accent}30`,
                }}
              >
                <SparklesIcon size={16} />
              </div>
              <span className="feature-text">{feature}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Technology Stack Used */}
      <section className="project-detail-section">
        <div className="section-header">
          <span className="section-eyebrow">Engineering</span>
          <h2 className="section-title">Tech Stack & Tools</h2>
        </div>

        <div className="project-tech-tags">
          {project.techStack.map((tech) => (
            <span key={tech} className="project-tech-pill">
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Bottom Switcher: Previous & Next Project */}
      <nav className="project-switcher" aria-label="Adjacent Projects">
        <a href={`#/project/${prevProject.id}`} className="switcher-card prev-card">
          <div className="switcher-label">← Previous Project</div>
          <div className="switcher-name">{prevProject.name}</div>
          <span className="switcher-cat">{prevProject.category}</span>
        </a>

        <a href={`#/project/${nextProject.id}`} className="switcher-card next-card">
          <div className="switcher-label">Next Project →</div>
          <div className="switcher-name">{nextProject.name}</div>
          <span className="switcher-cat">{nextProject.category}</span>
        </a>
      </nav>

      {/* Call to Action Banner */}
      <div className="project-cta-banner">
        <div className="cta-banner-content">
          <h3>Interested in building a high-impact app like {project.name}?</h3>
          <p>
            Let's discuss technical architecture, Flutter engineering, or end-to-end store deployment.
          </p>
        </div>
        <a href="#contact" className="btn btn-primary">
          <span>Let's Talk</span>
          <ArrowRightIcon />
        </a>
      </div>
    </div>
  );
}
