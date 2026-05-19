import React from 'react';

const DATA = {
  name: "Yash Tyagi",
  role: "Lead Flutter Engineer",
  company: "Mobilz Pvt Ltd",
  links: {
    github: "https://github.com/itsyashtyagi",
    linkedin: "https://www.linkedin.com/in/itstyagiyash/",
    x: "https://x.com/imYASHTYAGI",
    whatsapp: "https://wa.me/918006402554",
    gmail: "mailto:yashtyagi8006@gmail.com"
  },
  bio: "I am Yash Tyagi, currently working as a Lead Flutter Engineer at Mobilz Pvt Ltd. I have successfully delivered more than 10+ high-performance mobile applications, bridging the gap between complex architectural design and seamless user experiences.",
  skills: [
    { category: "Core", items: ["Flutter", "Dart", "Android", "iOS"] },
    { category: "Logic", items: ["Bloc", "GetX", "Provider"] },
    { category: "Data", items: ["Firebase", "REST APIs", "SQLite", "Hive"] },
    { category: "Tools", items: ["Git", "CI/CD", "Google Play Deployment", "App Store Deployment"] }
  ],
  experience: [
    {
      company: "Mobilz Pvt Ltd",
      isPromoted: true,
      roles: [
        {
          title: "Flutter Lead Engineer",
          period: "April 2025 - Present",
          desc: "Promoted to Lead Engineer to oversee the mobile roadmap, mentor developers, and ensure high-standard code architecture across all Flutter projects."
        },
        {
          title: "Flutter Developer",
          period: "Oct 2024 - March 2025",
          desc: "Developed and optimized several production-level applications, focusing on performance, UI/UX precision, and API integration."
        }
      ]
    },
    {
      company: "Appfoster",
      isPromoted: false,
      role: "Flutter Developer Intern",
      period: "March 2024 - August 2024",
      desc: "Hands-on internship where I built the CloudHR mobile app from scratch and gained expertise in the Flutter ecosystem."
    }
  ],
  apps: [
    {
      name: "Mindto",
      category: "Mental Performance",
      desc: "Helps young athletes develop mental strength, confidence, and overall well-being through sports psychology tools and engaging audio experiences.",
      appStore: "https://apps.apple.com/in/iphone/search?term=Mindto",
      playStore: "#",
      logo: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/d4/15/05/d415054b-9568-afe6-0cac-51739b84c83d/Placeholder.mill/400x400bb-75.webp", 
      accent: "#4ADE80"
    },
    {
      name: "CloudHR",
      category: "HR Management",
      desc: "A comprehensive tool to engage, manage, and grow your team effortlessly while handling HR tasks automatically.",
      playStore: "https://play.google.com/store/apps/details?id=com.cloudhr&hl=en_IN",
      appStore: "https://apps.apple.com/in/app/cloudhr/id6751147780",
      logo: "https://play-lh.googleusercontent.com/Ayf-H5YjMLDLyCAmxBKyBBHUfM-i_gV_NN4PqXSvzf715h_1_WqXMGPP7_t5qHfajg=w480-h960-rw",
      accent: "#1e3a8a"
    },
    {
      name: "LocaFri",
      category: "Car Rental",
      desc: "The all-in-one solution for vehicle rental. Find, book, and drive — all in one simple mobile application.",
      playStore: "https://play.google.com/store/apps/details?id=com.locafri.app&hl=en_IN",
      appStore: "#",
      logo: "https://play-lh.googleusercontent.com/9FzQJbN2y_YCHYdkCB9SUJQR-ZgBNwnCumW6I1UHYR3RNQEcnSG6HnuhsSd_7b093zE=w480-h960-rw",
      accent: "#f97316"
    },
    {
      name: "CCG Athletics",
      category: "Sports & Events",
      desc: "Modern sports platform to discover events, purchase tickets, and shop for sports merchandise in a seamless mobile experience.",
      playStore: "https://play.google.com/store/apps/details?id=com.ccgathletic.customer&hl=en_IN",
      appStore: "https://apps.apple.com/us/app/ccg-collective-city-game/id6753856914",
      logo: "https://play-lh.googleusercontent.com/qBS_AnFHRTDhW-e5M9SLybCBOyaSkJT8rRaKo4SGVnFyIkBRJ0QnoEjZp2_s2CKSxf6JRaymDRGsXrVQ3okUnAY=w480-h960-rw",
      accent: "#000000"
    },
    {
      name: "CCG Guard",
      category: "Utility / Security",
      desc: "Powerful QR-based ticket verification app for event organizers to manage secure and efficient check-ins.",
      playStore: "https://play.google.com/store/apps/details?id=com.ccg.athleticsguard&hl=en_IN",
      appStore: "https://apps.apple.com/us/app/ccg-guard-app/id6753932283",
      logo: "https://play-lh.googleusercontent.com/fGbKs8KuaZk1gBcaVmRhaTxV0ZzsrotSykUgyv9Bwl_ewLbS2HRp7aMVNm-PeCG_1SJFJawy78n7_uQ3LRT6mAo=w480-h960-rw",
      accent: "#374151"
    }
  ]
};

// --- SVG ICON SET ---
const Icons = {
  Github: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>,
  Linkedin: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>,
  X: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>,
  WhatsApp: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>,
  Mail: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>,
  Apple: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.1 2.48-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .76-3.27.82-1.31.05-2.31-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.22-1.98 1.08-3.14-1.03.04-2.27.69-3.01 1.56-.66.76-1.24 1.95-1.08 3.06 1.15.09 2.28-.65 3.01-1.48z" /></svg>,
  PlayStore: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.1-.12L3.5 22.05V1.95l.11-.136zM14.5 12.7l2.29 2.29L4.79 22.14a.8.8 0 0 0 .51.15.75.75 0 0 0 .42-.13L14.5 12.7zm.71-.7l6.54-3.73a.74.74 0 0 0 .4-.67.74.74 0 0 0-.4-.67L15.21 3.2 13.09 5.31 15.21 12zM14.5 11.3l-8.78-5a.75.75 0 0 0-.42-.13.8.8 0 0 0-.51.15L14.5 11.3z" /></svg>
};

export default function App() {
  return (
    <div className="app-container">
      <style>{`
        .app-container { background: #ffffff; color: #1d1d1f; font-family: -apple-system, system-ui, sans-serif; padding: 0; margin: 0; }
        .wrapper { max-width: 900px; margin: 0 auto; padding: 0 24px; }
        
        nav { height: 80px; display: flex; align-items: center; justify-content: space-between; position: sticky; top: 0; background: rgba(255,255,255,0.8); backdrop-filter: blur(20px); z-index: 100; border-bottom: 1px solid #f2f2f2; }
        .logo { font-weight: 800; font-size: 18px; letter-spacing: -0.5px; }
        
        /* SOCIAL ICONS IN NAV */
        .social-nav { display: flex; align-items: center; gap: 15px; }
        .social-nav a { color: #86868b; transition: 0.2s; display: flex; align-items: center; }
        .social-nav a:hover { color: #0071e3; }
        .phone-text { font-size: 13px; font-weight: 600; color: #1d1d1f; margin-right: 10px; border-right: 1px solid #d2d2d7; padding-right: 15px; }

        .hero { padding: 120px 0 80px; }
        .hero h1 { font-size: 64px; font-weight: 800; letter-spacing: -3px; line-height: 1.05; margin-bottom: 24px; color: #000; }
        .hero p { font-size: 21px; color: #6e6e73; line-height: 1.45; max-width: 780px; font-weight: 400; }

        .section-title { font-size: 28px; font-weight: 700; margin: 80px 0 30px; border-top: 1px solid #f5f5f7; padding-top: 50px; color: #1d1d1f; }

        .skill-row { display: flex; align-items: baseline; gap: 24px; padding-bottom: 16px; border-bottom: 1px solid #fbfbfd; margin-bottom: 16px; }
        .skill-cat { font-size: 11px; font-weight: 700; color: #86868b; text-transform: uppercase; letter-spacing: 1px; min-width: 140px; }
        .skill-list { display: flex; flex-wrap: wrap; gap: 12px; }
        .skill-text { font-size: 15px; font-weight: 500; color: #1d1d1f; }
        .skill-text::after { content: '•'; margin-left: 12px; color: #d2d2d7; }
        .skill-text:last-child::after { content: ''; }

        .apps-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; }
        .app-card { background: #ffffff; border-radius: 24px; padding: 32px; border: 1px solid #f2f2f2; transition: all 0.3s ease; display: flex; flex-direction: column; }
        .app-card:hover { transform: translateY(-6px); box-shadow: 0 15px 35px rgba(0,0,0,0.04); }
        .app-logo { width: 52px; height: 52px; border-radius: 12px; margin-bottom: 20px; object-fit: contain; }
        .app-name { font-size: 22px; font-weight: 700; margin-bottom: 12px; }
        .app-desc { font-size: 14px; color: #515154; line-height: 1.6; margin-bottom: 30px; flex-grow: 1; }

        .store-btn { flex: 1; display: flex; align-items: center; justify-content: center; gap: 8px; padding: 12px; border-radius: 12px; font-size: 12px; font-weight: 700; text-decoration: none; transition: 0.2s; }
        .btn-play { background: #1d1d1f; color: #fff; }
        .btn-apple { background: #f5f5f7; color: #1d1d1f; border: 1px solid #d2d2d7; }

        .exp-item { padding: 32px; background: #fbfbfd; border-radius: 24px; margin-bottom: 24px; border: 1px solid #f2f2f2; }
        .company-header { font-size: 19px; font-weight: 800; color: #1d1d1f; margin-bottom: 20px; }
        .promo-container { position: relative; padding-left: 30px; }
        .promo-line { position: absolute; left: 7px; top: 10px; bottom: 10px; width: 2px; background: #e5e5e7; }
        .role-entry { position: relative; margin-bottom: 25px; }
        .role-dot { position: absolute; left: -27px; top: 6px; width: 10px; height: 10px; background: #0071e3; border-radius: 50%; border: 2px solid #fff; z-index: 2; }
        .role-entry.old .role-dot { background: #d2d2d7; }
        .role-title { font-size: 16px; font-weight: 700; color: #1d1d1f; }
        .role-date { font-size: 13px; color: #86868b; margin-bottom: 8px; }

        footer { padding: 80px 0; border-top: 1px solid #f2f2f2; text-align: center; color: #86868b; font-size: 13px; }

        @media (max-width: 768px) {
          .phone-text { display: none; }
          .hero h1 { font-size: 48px; }
          .skill-row { flex-direction: column; gap: 8px; }
        }
      `}</style>

      <nav>
        <div className="wrapper" style={{display:'flex', width:'100%', justifyContent:'space-between', alignItems:'center'}}>
          <div className="logo">Yash Tyagi.</div>
          
          <div className="social-nav">
            <span className="phone-text">{DATA.phone}</span>
            <a href={DATA.links.whatsapp} target="_blank" rel="noreferrer"><Icons.WhatsApp /></a>
            <a href={DATA.links.linkedin} target="_blank" rel="noreferrer"><Icons.Linkedin /></a>
            <a href={DATA.links.github} target="_blank" rel="noreferrer"><Icons.Github /></a>
            <a href={DATA.links.x} target="_blank" rel="noreferrer"><Icons.X /></a>
            <a href={DATA.links.gmail}><Icons.Mail /></a>
          </div>
        </div>
      </nav>

      <main className="wrapper">
        <section className="hero">
          <h1>{DATA.role}.</h1>
          <p>{DATA.bio}</p>
        </section>

        <section id="skills">
          <h2 className="section-title">Technical Expertise</h2>
          <div className="skills-stack">
            {DATA.skills.map((group, i) => (
              <div key={i} className="skill-row">
                <div className="skill-cat">{group.category}</div>
                <div className="skill-list">
                  {group.items.map(skill => (
                    <span key={skill} className="skill-text">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="apps">
          <h2 className="section-title">Live Projects</h2>
          <div className="apps-grid">
            {DATA.apps.map((app, i) => (
              <div key={i} className="app-card">
                <img src={app.logo} alt={app.name} className="app-logo" style={{backgroundColor: `${app.accent}10`}} />
                <div className="app-name">{app.name}</div>
                <div className="app-desc">{app.desc}</div>
                <div style={{display:'flex', gap:'10px'}}>
                  {app.playStore !== "#" && (
                    <a href={app.playStore} target="_blank" rel="noreferrer" className="store-btn btn-play">
                      <Icons.PlayStore /> Play Store
                    </a>
                  )}
                  {app.appStore !== "#" && (
                    <a href={app.appStore} target="_blank" rel="noreferrer" className="store-btn btn-apple">
                      <Icons.Apple /> App Store
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="experience">
          <h2 className="section-title">Professional Path</h2>
          <div className="experience-stack">
            {DATA.experience.map((item, i) => (
              <div key={i} className="exp-item">
                <div className="company-header">{item.company}</div>
                <div className="promo-container">
                  <div className="promo-line"></div>
                  {item.isPromoted ? (
                    item.roles.map((r, idx) => (
                      <div key={idx} className={`role-entry ${idx > 0 ? 'old' : ''}`}>
                        <div className="role-dot"></div>
                        <div className="role-title">{r.title}</div>
                        <div className="role-date">{r.period}</div>
                        <div style={{fontSize:'14px', color:'#515154'}}>{r.desc}</div>
                      </div>
                    ))
                  ) : (
                    <div className="role-entry">
                      <div className="role-dot"></div>
                      <div className="role-title">{item.role}</div>
                      <div className="role-date">{item.period}</div>
                      <div style={{fontSize:'14px', color:'#515154'}}>{item.desc}</div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer>
        <div className="wrapper">
          <p>© {new Date().getFullYear()} {DATA.name}</p>
        </div>
      </footer>
    </div>
  );
}
