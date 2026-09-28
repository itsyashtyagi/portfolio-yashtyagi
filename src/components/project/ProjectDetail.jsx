import { useState, useEffect, useRef } from "react";
import { StoreButton } from "@/components/common/StoreButton";
import {
  ArrowRightIcon,
  SparklesIcon,
  GlobeIcon,
  SmartphoneIcon,
} from "@/components/common/Icons";

export function ProjectDetail({ project, allProjects }) {
  const [activeStep, setActiveStep] = useState(0);
  const [activeScreenIndex, setActiveScreenIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const galleryTrackRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setActiveScreenIndex(0);
    setLightboxIndex(null);
  }, [project.id]);

  // Normalize screenshots (supports array of image strings or objects with src/title/caption)
  const normalizedScreenshots = (project.screenshots || []).map((item, idx) => {
    if (typeof item === "string") {
      return {
        id: `screen-${idx + 1}`,
        src: item,
        title: `Screen 0${idx + 1}`,
        caption: `Production mobile screen from ${project.name}`,
      };
    }
    return {
      id: item.id || `screen-${idx + 1}`,
      src: item.src || item,
      title: item.title || `Screen 0${idx + 1}`,
      caption: item.caption || `Production mobile screen from ${project.name}`,
    };
  });

  const handleSelectScreen = (idx) => {
    setActiveScreenIndex(idx);
  };

  // Lightbox keyboard navigation & body scroll locking
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setLightboxIndex(null);
      } else if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) =>
          prev > 0 ? prev - 1 : normalizedScreenshots.length - 1
        );
      } else if (e.key === "ArrowRight") {
        setLightboxIndex((prev) =>
          prev < normalizedScreenshots.length - 1 ? prev + 1 : 0
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [lightboxIndex, normalizedScreenshots.length]);

  const scrollGallery = (direction) => {
    if (!galleryTrackRef.current) return;
    const scrollAmount = 300;
    galleryTrackRef.current.scrollBy({
      left: direction === "next" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

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
          {/* App Brand Header: Static Logo + Category + Live Status */}
          <div className="project-brand-badge">
            <div
              className="project-hero-logo-wrap"
              style={{
                boxShadow: `0 8px 24px -6px ${project.accent}45`,
                borderColor: `${project.accent}50`,
              }}
            >
              <img
                src={project.logo}
                alt={`${project.name} app logo`}
                className="project-hero-logo"
              />
            </div>
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
            {normalizedScreenshots.length > 0 && (
              <div className="spec-badge">
                <SmartphoneIcon size={13} />
                <span>{normalizedScreenshots.length} Production Screens</span>
              </div>
            )}
          </div>

          <div className="project-store-actions">
            <StoreButton platform="play" href={project.playStore} />
            <StoreButton platform="apple" href={project.appStore} />
          </div>
        </div>

        {/* Hero Visual Mockup: Interactive Animated Smartphone Walkthrough */}
        <div className="project-mockup-wrapper">
          {normalizedScreenshots.length > 0 ? (
            <div
              className="phone-showcase-container"
              style={{ "--project-accent": project.accent }}
            >
              {/* Floating Ambient Aura Glow */}
              <div
                className="phone-ambient-aura"
                style={{ background: `radial-gradient(circle, ${project.accent}40 0%, transparent 70%)` }}
              />

              {/* Floating Badges */}
              <div
                className="phone-floating-pill float-top-left"
                style={{
                  borderColor: `${project.accent}40`,
                  boxShadow: `0 8px 20px -4px ${project.accent}30`,
                }}
              >
                <span className="floating-dot" style={{ background: project.accent }} />
                <span>{project.highlights?.platform || "Mobile Production"}</span>
              </div>

              <div
                className="phone-floating-pill float-bottom-right"
                style={{
                  borderColor: `${project.accent}40`,
                  boxShadow: `0 8px 20px -4px ${project.accent}30`,
                }}
              >
                <SmartphoneIcon size={13} />
                <span>{normalizedScreenshots.length} Live UI Screens</span>
              </div>

              {/* Smartphone Chassis */}
              <div
                className="phone-mockup-frame"
                style={{
                  borderColor: `${project.accent}50`,
                  boxShadow: `0 30px 70px -15px ${project.accent}40, 0 0 0 1px rgba(255, 255, 255, 0.1)`,
                }}
              >
                {/* Phone Status Bar & Dynamic Island */}
                <div className="phone-device-header">
                  <span className="phone-time">9:41</span>
                  <div className="phone-dynamic-island">
                    <span className="island-lens" />
                    <span className="island-sensor" />
                  </div>
                  <div className="phone-status-icons">
                    <svg width="13" height="10" viewBox="0 0 16 12" fill="currentColor">
                      <path d="M0 10h2v2H0zm3-3h2v5H3zm3-3h2v8H6zm3-3h2v11H9zm3-1h2v12h-2z" />
                    </svg>
                    <svg width="15" height="10" viewBox="0 0 20 12" fill="currentColor">
                      <rect x="0" y="1" width="16" height="10" rx="3" fill="none" stroke="currentColor" strokeWidth="2" />
                      <rect x="2" y="3" width="10" height="6" rx="1" />
                      <path d="M18 4v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>

                {/* Screen Indicator Segments */}
                <div className="phone-story-progress-bar">
                  {normalizedScreenshots.map((_, i) => (
                    <div
                      key={i}
                      className="story-segment-track"
                      onClick={() => handleSelectScreen(i)}
                      title={`Jump to screen ${i + 1}`}
                    >
                      <div
                        className="story-segment-fill"
                        style={{
                          width: i === activeScreenIndex ? "100%" : "0%",
                          backgroundColor: project.accent,
                        }}
                      />
                    </div>
                  ))}
                </div>

                {/* Screenshot Viewport */}
                <div
                  className="phone-screen-viewport"
                  onClick={() =>
                    handleSelectScreen(
                      activeScreenIndex < normalizedScreenshots.length - 1 ? activeScreenIndex + 1 : 0
                    )
                  }
                  title="Click to view next screen"
                >
                  <img
                    src={normalizedScreenshots[activeScreenIndex]?.src}
                    alt={normalizedScreenshots[activeScreenIndex]?.title}
                    className="phone-screen-image"
                    key={`${activeScreenIndex}-${normalizedScreenshots[activeScreenIndex]?.src}`}
                  />

                  {/* Glass Sheen Reflection */}
                  <div className="phone-glass-sheen" />
                </div>

                {/* Phone Home Bar */}
                <div className="phone-home-indicator" />
              </div>

              {/* Screen Navigation Row */}
              <div className="phone-controls-panel">
                <div className="phone-nav-row">
                  <button
                    type="button"
                    className="phone-arrow-btn"
                    onClick={() =>
                      handleSelectScreen(
                        activeScreenIndex > 0 ? activeScreenIndex - 1 : normalizedScreenshots.length - 1
                      )
                    }
                    aria-label="Previous screen"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="15 18 9 12 15 6" />
                    </svg>
                  </button>

                  <div className="phone-screen-title-tag">
                    <span className="screen-num-pill" style={{ color: project.accent }}>
                      Screen 0{activeScreenIndex + 1} of 0{normalizedScreenshots.length}
                    </span>
                    <span className="screen-title-text">
                      {normalizedScreenshots[activeScreenIndex]?.title}
                    </span>
                  </div>

                  <button
                    type="button"
                    className="phone-arrow-btn"
                    onClick={() =>
                      handleSelectScreen(
                        activeScreenIndex < normalizedScreenshots.length - 1 ? activeScreenIndex + 1 : 0
                      )
                    }
                    aria-label="Next screen"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            /* Fallback Mockup Card when no screenshots yet */
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

                <div className="mockup-feature-carousel">
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
          )}
        </div>
      </section>

      {/* What It Is Section */}
      <section className="project-detail-section">
        <div className="section-header">
          <div className="section-kicker">
            <span className="kicker-badge">SPEC</span>
            <span className="kicker-sep">/</span>
            <span className="kicker-label">Product Overview</span>
          </div>
          <h2 className="section-title">What is {project.name}?</h2>
        </div>
        <div className="project-overview-card">
          <p className="project-overview-text">{project.overview}</p>
        </div>
      </section>

      {/* Production Mobile Screenshots Section (Shown when screenshots are available) */}
      {normalizedScreenshots.length > 0 && (
        <section className="project-detail-section project-screens-section" id="screens">
          <div className="screens-header-row">
            <div className="section-header">
              <div className="section-kicker">
                <span className="kicker-badge">UI/UX</span>
                <span className="kicker-sep">/</span>
                <span className="kicker-label">Visual Interface</span>
              </div>
              <h2 className="section-title">Production Mobile Screens</h2>
              <p className="section-subtitle">
                Authentic screen captures from the live {project.name} application. Tap any screen to inspect in full resolution.
              </p>
            </div>

            <div className="screens-header-actions">

              {normalizedScreenshots.length > 2 && (
                <div className="screens-scroll-controls">
                  <button
                    type="button"
                    className="screens-scroll-btn"
                    onClick={() => scrollGallery("prev")}
                    aria-label="Scroll left"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="15 18 9 12 15 6" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="screens-scroll-btn"
                    onClick={() => scrollGallery("next")}
                    aria-label="Scroll right"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="screens-gallery-track" ref={galleryTrackRef}>
            {normalizedScreenshots.map((item, idx) => (
              <article
                key={item.id}
                className="screen-device-card"
                onClick={() => {
                  setLightboxIndex(idx);
                  setLightboxPlaying(false);
                }}
              >
                {/* Device Chassis */}
                <div
                  className="screen-phone-frame"
                  style={{
                    borderColor: `${project.accent}35`,
                  }}
                >
                  <div className="screen-frame-dynamic-island" />
                  <img
                    src={item.src}
                    alt={item.title}
                    className="screen-frame-img"
                    loading="lazy"
                  />
                  <div className="screen-frame-overlay">
                    <span className="screen-zoom-chip">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                        <line x1="11" y1="8" x2="11" y2="14" />
                        <line x1="8" y1="11" x2="14" y2="11" />
                      </svg>
                      <span>Inspect Screen</span>
                    </span>
                  </div>
                </div>

                {/* Screen Caption & Metadata */}
                <div className="screen-card-meta">
                  <div className="screen-meta-top">
                    <span
                      className="screen-index-badge"
                      style={{
                        color: project.accent,
                        backgroundColor: `${project.accent}15`,
                        borderColor: `${project.accent}30`,
                      }}
                    >
                      Screen 0{idx + 1}
                    </span>
                  </div>
                  <h4 className="screen-card-title">{item.title}</h4>
                  <p className="screen-card-caption">{item.caption}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* How It Works Section */}
      <section className="project-detail-section">
        <div className="section-header">
          <div className="section-kicker">
            <span className="kicker-badge">FLOW</span>
            <span className="kicker-sep">/</span>
            <span className="kicker-label">Architecture</span>
          </div>
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
          <div className="section-kicker">
            <span className="kicker-badge">MODULES</span>
            <span className="kicker-sep">/</span>
            <span className="kicker-label">Capabilities</span>
          </div>
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
          <div className="section-kicker">
            <span className="kicker-badge">STACK</span>
            <span className="kicker-sep">/</span>
            <span className="kicker-label">Engineering</span>
          </div>
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

      {/* Lightbox Modal with Fullscreen Video Walkthrough Mode */}
      {lightboxIndex !== null && normalizedScreenshots[lightboxIndex] && (
        <div
          className="lightbox-overlay"
          onClick={() => {
            setLightboxIndex(null);
            setLightboxPlaying(false);
          }}
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
        >
          <div
            className="lightbox-dialog"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Toolbar: Counter + Close */}
            <div className="lightbox-top-toolbar">
              <div className="lightbox-top-counter">
                <span style={{ color: project.accent, fontWeight: 600 }}>
                  Screen 0{lightboxIndex + 1} of 0{normalizedScreenshots.length}
                </span>
              </div>

              <button
                type="button"
                className="lightbox-close-btn"
                onClick={() => setLightboxIndex(null)}
                aria-label="Close preview (Esc)"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Left Nav Arrow */}
            <button
              type="button"
              className="lightbox-arrow-btn prev"
              onClick={() =>
                setLightboxIndex((prev) =>
                  prev > 0 ? prev - 1 : normalizedScreenshots.length - 1
                )
              }
              aria-label="Previous screenshot (Left arrow)"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            {/* Main Stage */}
            <div className="lightbox-stage">
              <div
                className="lightbox-phone-frame"
                style={{
                  borderColor: `${project.accent}50`,
                  boxShadow: `0 35px 90px -15px ${project.accent}45`,
                }}
              >
                <div className="lightbox-dynamic-island" />
                <img
                  src={normalizedScreenshots[lightboxIndex]?.src}
                  alt={normalizedScreenshots[lightboxIndex]?.title}
                  className="lightbox-image"
                  key={normalizedScreenshots[lightboxIndex]?.src}
                />
              </div>

              {/* Bottom Caption Card */}
              <div className="lightbox-caption-card">
                <div className="lightbox-caption-header">
                  <span
                    className="lightbox-counter-pill"
                    style={{
                      color: project.accent,
                      borderColor: `${project.accent}40`,
                      backgroundColor: `${project.accent}18`,
                    }}
                  >
                    0{lightboxIndex + 1} / 0{normalizedScreenshots.length}
                  </span>
                  <h3 className="lightbox-caption-title">
                    {normalizedScreenshots[lightboxIndex]?.title}
                  </h3>
                </div>
                <p className="lightbox-caption-desc">
                  {normalizedScreenshots[lightboxIndex]?.caption}
                </p>
              </div>
            </div>

            {/* Right Nav Arrow */}
            <button
              type="button"
              className="lightbox-arrow-btn next"
              onClick={() =>
                setLightboxIndex((prev) =>
                  prev < normalizedScreenshots.length - 1 ? prev + 1 : 0
                )
              }
              aria-label="Next screenshot (Right arrow)"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
