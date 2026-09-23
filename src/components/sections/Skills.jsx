import {
  CodeIcon,
  LayersIcon,
  SmartphoneIcon,
  CpuIcon,
  RocketIcon,
  DatabaseIcon,
  ShieldCheckIcon,
  CubeIcon,
  TerminalIcon,
} from "@/components/common/Icons";

const CATEGORY_META = {
  "Languages": {
    icon: CodeIcon,
    badge: "Core Stack",
  },
  "Cross-Platform Framework": {
    icon: LayersIcon,
    badge: "Primary Engine",
    featured: true,
  },
  "Native Platforms": {
    icon: SmartphoneIcon,
    badge: "Mobile OS",
  },
  "State Management & Libraries": {
    icon: CpuIcon,
    badge: "State & Logic",
  },
  "App Deployment & Release": {
    icon: RocketIcon,
    badge: "Store Release",
  },
  "Backend & Integrations": {
    icon: DatabaseIcon,
    badge: "Cloud & APIs",
  },
  "Testing & Quality": {
    icon: ShieldCheckIcon,
    badge: "Reliability",
  },
  "Architecture & Practices": {
    icon: CubeIcon,
    badge: "Clean Patterns",
  },
  "Dev Tools": {
    icon: TerminalIcon,
    badge: "Workflow",
  },
};

function parseSkill(rawSkill) {
  if (rawSkill.includes("(basic)")) {
    return {
      name: rawSkill.replace("(basic)", "").trim(),
      level: "Basic",
    };
  }
  return {
    name: rawSkill,
    level: null,
  };
}

export function Skills({ skills }) {
  if (!skills || skills.length === 0) return null;

  return (
    <section id="skills" className="section-container skills-section">
      <div className="section-header">
        <span className="section-eyebrow">Technical Mastery</span>
        <h2 className="section-title">Skills &amp; Engineering Stack</h2>
        <p className="section-subtitle">
          Battle-tested toolchain for shipping high-performance, store-ready mobile applications with clean architecture and 60fps fluid UX.
        </p>
      </div>

      <div className="skills-grid">
        {skills.map((group) => {
          const meta = CATEGORY_META[group.category] || {
            icon: CodeIcon,
            badge: "Skills",
            featured: false,
          };
          const Icon = meta.icon;
          const isFeatured = Boolean(meta.featured);

          return (
            <div
              key={group.category}
              className={`skill-card ${isFeatured ? "skill-card-featured" : ""}`}
            >
              {/* Card Header with Icon, Title & Meta Badge */}
              <div className="skill-card-header">
                <div className="skill-card-identity">
                  <div className="skill-icon-wrap">
                    <Icon size={16} />
                  </div>
                  <h3 className="skill-category-title">{group.category}</h3>
                </div>
                <span className="skill-category-badge">{meta.badge}</span>
              </div>

              {/* Skills Tags */}
              <div className="skill-tags">
                {group.items.map((skill) => {
                  const { name, level } = parseSkill(skill);
                  const isPrimary = name === "Flutter";

                  return (
                    <span
                      key={skill}
                      className={`skill-tag ${isPrimary ? "skill-tag-primary" : ""}`}
                    >
                      {isPrimary && <span className="skill-dot-primary" />}
                      <span className="skill-tag-name">{name}</span>
                      {level && <span className="skill-level-badge">{level}</span>}
                    </span>
                  );
                })}
              </div>

              {/* Extra spotlight footer for Cross-Platform Core */}
              {isFeatured && (
                <div className="skill-featured-note">
                  <span>Specialized in Flutter cross-platform architecture with native iOS &amp; Android bridging.</span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
