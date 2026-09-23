export const PORTFOLIO_DATA = {
  name: "Yash Tyagi",
  role: "Mobile Application Engineer",
  company: "Mobilz Pvt Ltd",
  phone: "+91 8006402554",
  links: {
    github: "https://github.com/itsyashtyagi",
    linkedin: "https://www.linkedin.com/in/itstyagiyash/",
    x: "https://x.com/imYASHTYAGI",
    whatsapp: "https://wa.me/918006402554",
    gmail: "mailto:yashtyagi8006@gmail.com",
  },
  bio: "I am Yash Tyagi, currently working as a Software Engineer at Mobilz Pvt Ltd. I have successfully delivered more than 10+ high-performance mobile applications, bridging the gap between complex architectural design and seamless user experiences.",
  skills: [
    {
      category: "Languages",
      items: ["Dart", "Kotlin (basic)", "Swift (basic)", "JavaScript"],
    },
    {
      category: "Cross-Platform Framework",
      items: ["Flutter"],
    },
    {
      category: "Native Platforms",
      items: ["Android SDK (basic)", "iOS / SwiftUI (basic)"],
    },
    {
      category: "State Management & Libraries",
      items: ["Provider", "GetX", "Bloc"],
    },
    {
      category: "App Deployment & Release",
      items: [
        "Google Play Console",
        "App Store Connect",
        "App Signing",
        "Fastlane (basic)",
      ],
    },
    {
      category: "Backend & Integrations",
      items: [
        "RESTful APIs",
        "Firebase (Auth, Firestore, Push Notifications, Crashlytics, Analytics)",
      ],
    },
    {
      category: "Testing & Quality",
      items: [
        "Unit Testing",
        "Widget Testing",
        "Debugging & Crash Analysis",
      ],
    },
    {
      category: "Architecture & Practices",
      items: [
        "MVVM / Clean Architecture",
        "Agile/Scrum",
        "Platform Channels (Flutter–Native bridging)",
      ],
    },
    {
      category: "Dev Tools",
      items: [
        "Git/GitHub",
        "VS Code",
        "Android Studio",
        "Xcode",
        "CI/CD basics (GitHub Actions)",
      ],
    },
  ],
  experience: [
    {
      company: "Mobilz Pvt Ltd",
      companyLinkedin: "https://www.linkedin.com/company/mobrilz/",
      companyWebsite: "https://www.mobrilz.com/",
      isPromoted: true,
      roles: [
        {
          title: "Software Engineer",
          period: "Oct 2024 - Present",
          desc: "Developed and optimized several production-level applications, focusing on performance, UI/UX precision, and API integration, and ensure high-standard code architecture across all Flutter projects.",
        },
      ],
    },
    {
      company: "Appfoster",
      companyLinkedin: "https://www.linkedin.com/company/appfoster/",
      companyWebsite: "https://appfoster.com/",
      isPromoted: false,
      role: "Software Engineer Intern",
      period: "March 2024 - August 2024",
      desc: "Hands-on internship where I built the CloudHR mobile app from scratch and gained expertise in the Flutter ecosystem.",
    },
  ],
  apps: [
    {
      id: "mykoreme",
      name: "myKoreme",
      category: "Healthcare & Wellness",
      tagline: "Secure Patient Wellness & AI-Powered Therapy Companion",
      desc: "Patient portal app for Koreme Anti-aging and Medical Group, designed to securely manage personalized treatments, upload medical records, track therapy schedules, and access an AI wellness assistant.",
      overview:
        "myKoreme is the official patient app for Koreme Anti-aging and Medical Group, engineered to give patients an intuitive, secure way to manage their personalized wellness experience from anywhere. The application bridges the gap between patient care and modern digital convenience, unifying therapy tracking, clinical documentation, and AI-assisted guidance into a single cross-platform mobile experience.",
      howItWorks: [
        {
          step: "01",
          title: "Secure Onboarding & Authentication",
          desc: "Patients access their verified clinical account with biometric security (FaceID/Fingerprint) and encrypted token management.",
        },
        {
          step: "02",
          title: "Care & Document Management",
          desc: "Patients upload bloodwork and clinical documents, review customized treatment plans, and complete medical intake questionnaires directly from mobile.",
        },
        {
          step: "03",
          title: "AI-Powered Wellness Navigation",
          desc: "Patients query an intelligent AI wellness assistant for immediate informational guidance on clinic resources, appointments, and care protocols.",
        },
        {
          step: "04",
          title: "Therapy Reminders & Orders",
          desc: "Automated, push-notification schedules alert patients to upcoming treatment sessions, dose schedules, and exclusive patient specials.",
        },
      ],
      keyFeatures: [
        "Personalized Treatment Management & Therapy Schedules",
        "Encrypted Bloodwork & Medical File Uploads",
        "AI-Powered Wellness Assistant for 24/7 Clinical Guidance",
        "Digital Health Intake Questionnaires & Dynamic Forms",
        "Automated Push Reminders for Medication & Appointments",
        "Exclusive Patient Offers, Clinic Specials & Order Tracking",
      ],
      techStack: [
        "Flutter",
        "Dart",
        "Bloc State Management",
        "Firebase Auth & Cloud Messaging",
        "RESTful APIs (FastAPI / Node)",
        "Biometric Authentication",
        "Google Play Console",
      ],
      playStore:
        "https://play.google.com/store/apps/details?id=com.koreme.app",
      appStore: "#",
      logo: "https://play-lh.googleusercontent.com/7bF79l40minka3JndpRdKgBimZPeMfFfrLiTMOGpZ7dEg23ynR6LnWTg8lWYZUBTYBE3o8ve6D9j7aeVh7Pbm0M=w480-h960",
      accent: "#0ea5e9",
      accentGradient: "linear-gradient(135deg, #0ea5e9 0%, #38bdf8 100%)",
      highlights: {
        platform: "Cross-Platform (Android & iOS Architecture)",
        architecture: "Clean Architecture + Bloc Pattern",
        status: "Production Live",
      },
    },
    {
      id: "mindto",
      name: "Mindto",
      category: "Mental Performance",
      tagline: "Sports Psychology & Mental Toughness Audio Companion",
      desc: "Helps young athletes develop mental strength, confidence, and overall well-being through sports psychology tools and engaging audio experiences.",
      overview:
        "Mindto empowers athletes to build unshakable mental resilience, sharpen pre-game focus, and overcome competitive anxiety. Built with high-fidelity audio streaming, habit streaks, and guided visualization exercises, Mindto delivers science-backed mental conditioning directly into athletes' headphones.",
      howItWorks: [
        {
          step: "01",
          title: "Athlete Assessment",
          desc: "The app personalizes audio journeys according to the athlete's specific sport, competitive level, and psychological goals (focus, calm, confidence).",
        },
        {
          step: "02",
          title: "Curated Audio Sessions",
          desc: "Users stream guided visualization tracks, pre-game focus routines, and post-game decompression sessions optimized for peak athletic performance.",
        },
        {
          step: "03",
          title: "Daily Habit Streaks & Journaling",
          desc: "Athletes log reflection journals, monitor mental score progression over time, and build consistent daily mental training routines.",
        },
        {
          step: "04",
          title: "Offline Sync & Background Playback",
          desc: "Enables seamless background audio playback with lock screen media controls even when training in stadiums without active Wi-Fi.",
        },
      ],
      keyFeatures: [
        "High-Performance Audio Streaming & Offline Caching",
        "Pre-Competition Mental Warm-Up Exercises",
        "Streak Tracking & Habit Formation Analytics",
        "Lock-Screen Media Controls & Platform Channel Integration",
        "Custom Category Playlists for Specific Sports",
        "Interactive Daily Mental Check-In Journal",
      ],
      techStack: [
        "Flutter",
        "Dart",
        "Provider & State Management",
        "Audio Players & Background Audio Bridge",
        "App Store Connect Deployment",
        "SQLite Offline Storage",
      ],
      appStore: "https://apps.apple.com/in/iphone/search?term=Mindto",
      playStore: "#",
      logo: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/d4/15/05/d415054b-9568-afe6-0cac-51739b84c83d/Placeholder.mill/400x400bb-75.webp",
      accent: "#4ADE80",
      accentGradient: "linear-gradient(135deg, #22c55e 0%, #4ade80 100%)",
      highlights: {
        platform: "iOS Optimized (App Store)",
        architecture: "MVVM Architecture + Audio Service Bridge",
        status: "Production Live",
      },
    },
    {
      id: "cloudhr",
      name: "CloudHR",
      category: "HR Management",
      tagline: "Enterprise Workforce Management & Automated HR Operations",
      desc: "A comprehensive tool to engage, manage, and grow your team effortlessly while handling HR tasks automatically.",
      overview:
        "CloudHR solves operational friction for modern distributed workforces. From biometric geofenced attendance to seamless leave approvals, expense claims, and organizational directory lookups, CloudHR replaces cumbersome manual HR paperwork with a sleek, automated mobile portal.",
      howItWorks: [
        {
          step: "01",
          title: "Geo-Fenced Clock In/Out",
          desc: "Employees record daily attendance with verified GPS geolocation and facial recognition to prevent proxy punch-ins.",
        },
        {
          step: "02",
          title: "Leave & Expense Requests",
          desc: "Staff submit vacation requests or upload receipt photos in seconds, routed automatically to their managers for real-time review.",
        },
        {
          step: "03",
          title: "Manager Approval Workflows",
          desc: "Team leaders receive push notifications and approve or decline requests with single-tap actions.",
        },
        {
          step: "04",
          title: "Payroll & Company Directory",
          desc: "Secure self-service access to monthly payslips, tax certificates, holiday calendars, and department directories.",
        },
      ],
      keyFeatures: [
        "Geofenced Location Verification for Attendance",
        "Instant Leave Request & Manager Approval Engine",
        "Receipt Camera Upload & Expense Reimbursement Tracking",
        "Digital Payslip Downloads with Encrypted PDF Viewing",
        "Team Directory with Direct WhatsApp & Phone Links",
        "Enterprise Role-Based Access Control (RBAC)",
      ],
      techStack: [
        "Flutter",
        "Dart",
        "Bloc Architecture",
        "REST APIs & Multipart Uploads",
        "Geolocator & Camera Native Bridges",
        "Google Play & App Store Live",
      ],
      playStore:
        "https://play.google.com/store/apps/details?id=com.cloudhr&hl=en_IN",
      appStore: "https://apps.apple.com/in/app/cloudhr/id6751147780",
      logo: "https://play-lh.googleusercontent.com/Ayf-H5YjMLDLyCAmxBKyBBHUfM-i_gV_NN4PqXSvzf715h_1_WqXMGPP7_t5qHfajg=w480-h960-rw",
      accent: "#3b82f6",
      accentGradient: "linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)",
      highlights: {
        platform: "Dual Store (Play Store & App Store)",
        architecture: "Enterprise Bloc + Clean Domain Layers",
        status: "Production Live",
      },
    },
    {
      id: "locafri",
      name: "LocaFri",
      category: "Car Rental",
      tagline: "Instant On-Demand Vehicle Rental & Booking Platform",
      desc: "The all-in-one solution for vehicle rental. Find, book, and drive — all in one simple mobile application.",
      overview:
        "LocaFri redefines modern car rental with a fluid, booking-first mobile experience. Customers browse vehicle fleets, filter by transmission, fuel type, and passenger count, select pickup/drop-off locations with interactive map pins, and complete verified digital checkouts in minutes.",
      howItWorks: [
        {
          step: "01",
          title: "Vehicle Discovery & Filtering",
          desc: "Users browse available vehicles with real-time fleet availability, high-definition photo galleries, and transparent pricing breakdowns.",
        },
        {
          step: "02",
          title: "Trip Date & Location Selection",
          desc: "Interactive map integration lets travelers pick convenient delivery points or branch pickups across the city.",
        },
        {
          step: "03",
          title: "Driver Verification & Booking",
          desc: "Users upload driver licenses for rapid identity verification and securely confirm reservations via payment gateways.",
        },
        {
          step: "04",
          title: "Digital Key & Trip Management",
          desc: "Access active rental passes, vehicle check-in checklists, roadside assistance contact, and booking history.",
        },
      ],
      keyFeatures: [
        "Real-Time Vehicle Fleet Search & Dynamic Price Calculation",
        "Google Maps & Mapbox Native SDK Integration",
        "Document & Driver License Scanning Verification",
        "Integrated Secure Payment Gateway Support",
        "Digital Vehicle Inspection Checklist with Photo Proof",
        "Push Notifications for Pickup/Drop-off Schedules",
      ],
      techStack: [
        "Flutter",
        "Dart",
        "GetX State Management",
        "Google Maps API",
        "RESTful API Services",
        "Firebase Push Notifications",
      ],
      playStore:
        "https://play.google.com/store/apps/details?id=com.locafri.app&hl=en_IN",
      appStore: "#",
      logo: "https://play-lh.googleusercontent.com/9FzQJbN2y_YCHYdkCB9SUJQR-ZgBNwnCumW6I1UHYR3RNQEcnSG6HnuhsSd_7b093zE=w480-h960-rw",
      accent: "#f97316",
      accentGradient: "linear-gradient(135deg, #ea580c 0%, #f97316 100%)",
      highlights: {
        platform: "Android (Play Store Live)",
        architecture: "Reactive GetX Architecture",
        status: "Production Live",
      },
    },
    {
      id: "ccg-athletics",
      name: "CCG Athletics",
      category: "Sports & Events",
      tagline: "Comprehensive Tournament, Ticketing & Merchandise Ecosystem",
      desc: "Modern sports platform to discover events, purchase tickets, and shop for sports merchandise in a seamless mobile experience.",
      overview:
        "Collective City Game (CCG Athletics) is an end-to-end sports community and event engagement hub. Fans and athletes discover upcoming tournaments, book venue seats, purchase official team jerseys and equipment, and follow live match fixtures with real-time score updates.",
      howItWorks: [
        {
          step: "01",
          title: "Tournament Discovery",
          desc: "Fans browse upcoming city games, league matchups, and athletic showcases filtered by sport category and date.",
        },
        {
          step: "02",
          title: "Interactive Ticketing",
          desc: "Select stadium sections, pick seats, and generate digital barcode tickets with anti-counterfeit QR security.",
        },
        {
          step: "03",
          title: "Official Merchandise Store",
          desc: "Full-featured e-commerce catalog allowing fans to order athletic gear, custom jerseys, and accessories.",
        },
        {
          step: "04",
          title: "Live Fixtures & Digital Wallet",
          desc: "All purchased event passes, order receipts, and live match timings are instantly accessible in an offline-ready digital wallet.",
        },
      ],
      keyFeatures: [
        "Dynamic Event Discovery & Interactive Stadium Seating",
        "Encrypted Digital QR Tickets with Anti-Fraud Tokens",
        "Integrated Sports Apparel & Gear E-Commerce Catalog",
        "Real-Time Match Schedule & Live Score Updates",
        "Seamless Payment Gateway & Digital Passbook",
        "Multi-Platform Availability across iOS and Android",
      ],
      techStack: [
        "Flutter",
        "Dart",
        "Bloc State Pattern",
        "REST APIs & Payment SDKs",
        "QR Code Generators",
        "App Store & Play Store Deployed",
      ],
      playStore:
        "https://play.google.com/store/apps/details?id=com.ccgathletic.customer&hl=en_IN",
      appStore:
        "https://apps.apple.com/us/app/ccg-collective-city-game/id6753856914",
      logo: "https://play-lh.googleusercontent.com/qBS_AnFHRTDhW-e5M9SLybCBOyaSkJT8rRaKo4SGVnFyIkBRJ0QnoEjZp2_s2CKSxf6JRaymDRGsXrVQ3okUnAY=w480-h960-rw",
      accent: "#2563eb",
      accentGradient: "linear-gradient(135deg, #1d4ed8 0%, #3b82f6 100%)",
      highlights: {
        platform: "Dual Store (Play Store & App Store)",
        architecture: "Clean Architecture + Scalable Data Layers",
        status: "Production Live",
      },
    },
    {
      id: "ccg-guard",
      name: "CCG Guard",
      category: "Utility / Security",
      tagline: "High-Speed QR Verification & Organizer Event Access Control",
      desc: "Powerful QR-based ticket verification app for event organizers to manage secure and efficient check-ins.",
      overview:
        "CCG Guard serves as the mission-critical companion app for event security teams and venue gatekeepers. Built for lightning-fast camera scans under varying stadium lighting conditions, CCG Guard verifies attendee QR tickets in milliseconds, prevents duplicate entries, and keeps live check-in telemetry synchronized across all stadium entrance gates.",
      howItWorks: [
        {
          step: "01",
          title: "Organizer Gate Login",
          desc: "Security personnel sign in to assigned stadium gates with scoped permissions and offline sync credentials.",
        },
        {
          step: "02",
          title: "Ultra-Fast QR Scanning",
          desc: "High-frame-rate camera reader scans attendee tickets with instant visual and audio feedback (Valid, Duplicate, or Invalid).",
        },
        {
          step: "03",
          title: "Offline Validation Cache",
          desc: "Maintains local encrypted ticket databases to ensure zero admission delays even if stadium cellular networks drop.",
        },
        {
          step: "04",
          title: "Live Attendance Telemetry",
          desc: "Event organizers monitor real-time entry counts, gate traffic distribution, and capacity limits across all venue points.",
        },
      ],
      keyFeatures: [
        "Sub-100ms QR Code Scanning & Barcode Recognition",
        "Anti-Duplicate Entry Prevention & Fraud Alerting",
        "Offline Validation Mode with Automatic Delta Sync",
        "Haptic & Audio Feedback for Gate Operators",
        "Gate Capacity Telemetry & Live Check-in Metrics",
        "Dual Deployment on Google Play & Apple App Store",
      ],
      techStack: [
        "Flutter",
        "Dart",
        "Fast Camera Scanning Bridge",
        "Local SQLite Verification Cache",
        "WebSockets & REST Sync Engine",
        "Google Play & App Store Live",
      ],
      playStore:
        "https://play.google.com/store/apps/details?id=com.ccg.athleticsguard&hl=en_IN",
      appStore: "https://apps.apple.com/us/app/ccg-guard-app/id6753932283",
      logo: "https://play-lh.googleusercontent.com/fGbKs8KuaZk1gBcaVmRhaTxV0ZzsrotSykUgyv9Bwl_ewLbS2HRp7aMVNm-PeCG_1SJFJawy78n7_uQ3LRT6mAo=w480-h960-rw",
      accent: "#64748b",
      accentGradient: "linear-gradient(135deg, #334155 0%, #64748b 100%)",
      highlights: {
        platform: "Dual Store (Play Store & App Store)",
        architecture: "Performance-Focused Offline Cache",
        status: "Production Live",
      },
    },
  ],
};
