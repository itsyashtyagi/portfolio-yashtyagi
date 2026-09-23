import { useState, useEffect } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";
import { ProjectDetail } from "@/components/project/ProjectDetail";

export default function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash || "");
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("portfolio-theme");
    if (saved === "light" || saved === "dark") return saved;
    return "dark"; // Default to sleek dark mode
  });

  // Apply theme to <html> tag and persist
  useEffect(() => {
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(theme);
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash || "");
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Match hash route #/project/:id
  const projectMatch = currentHash.match(/^#\/project\/([a-zA-Z0-9_-]+)/);
  const activeProjectId = projectMatch ? projectMatch[1] : null;
  const activeProject = activeProjectId
    ? PORTFOLIO_DATA.apps.find((app) => app.id === activeProjectId)
    : null;

  return (
    <div className="app-container">
      {/* Background ambient lighting glow */}
      <div className="bg-glow bg-glow-1" />
      <div className="bg-glow bg-glow-2" />

      <Navbar
        name={PORTFOLIO_DATA.name}
        phone={PORTFOLIO_DATA.phone}
        links={PORTFOLIO_DATA.links}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      <main className="wrapper">
        {activeProject ? (
          <ProjectDetail
            project={activeProject}
            allProjects={PORTFOLIO_DATA.apps}
          />
        ) : (
          <>
            <Hero
              name={PORTFOLIO_DATA.name}
              company={PORTFOLIO_DATA.company}
              role={PORTFOLIO_DATA.role}
              bio={PORTFOLIO_DATA.bio}
              links={PORTFOLIO_DATA.links}
            />
            <Skills skills={PORTFOLIO_DATA.skills} />
            <Projects apps={PORTFOLIO_DATA.apps} />
            <Experience experience={PORTFOLIO_DATA.experience} />
          </>
        )}

        <Contact
          name={PORTFOLIO_DATA.name}
          phone={PORTFOLIO_DATA.phone}
          links={PORTFOLIO_DATA.links}
        />
      </main>

      <Footer name={PORTFOLIO_DATA.name} role={PORTFOLIO_DATA.role} />
    </div>
  );
}
