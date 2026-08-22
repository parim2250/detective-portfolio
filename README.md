# 🔍 Pari Mittal — Detective Portfolio

A cinematic, narrative-driven developer portfolio built on a **detective investigation** theme.  
Every section is a case file. Every skill is evidence. Every project is a solved mystery.

**Subject:** Pari Mittal · Full Stack Developer & AI/ML Engineer  
**Base:** Noida, Uttar Pradesh · **Classification:** Level 5 — Active

[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white)](https://vitejs.dev)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-11-0055FF?logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Tailwind](https://img.shields.io/badge/Tailwind-v4-38BDF8?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)

🌐 **Live Demo:** *(add your Vercel URL)*  
📂 **Repository:** [github.com/parim2250/portfolio](https://github.com/parim2250/portfolio)

---

## 🎬 Concept

This is not a traditional skills page — it's a **narrative investigation system**:

| Layer | Theme | Your Section |
|--------|--------|----------------|
| 🕵️ Identity | Detective dossier | `Landing` · Hero |
| 🗂️ Case Files | Solved mysteries | `InvestigationBoard` · Projects |
| 🔬 Forensic Lab | Constellation of tools | `EvidenceLocker` · Skills |
| 📜 Timeline | Investigation history | `InvestigationLog` · Experience |
| 🎓 Training | Academic background | `TrainingRecords` · Education |
| 🌍 Field Ops | Events & community | `InformantReports` · Missions |
| 📡 Dispatch | Contact channel | `SecureChannel` · Contact |

> *"Every bug is a mystery. Every interface is a puzzle."*

---

## ✨ Features

- **Cinematic Intro Sequence** — terminal boot text, once per session (`LoadingScreen`)
- **Smooth Scroll** — Lenis-powered buttery navigation
- **Evidence Constellation** — floating tech nodes, hover tooltips, skill detail modal, scanner ring
- **Case File Cards** — parchment project cards with tilt, status stamps, tech tags, live/source links
- **Investigation Log** — animated experience / mission timeline
- **Training Records** — academic progression with completion bars
- **Field Investigations** — mission photo / event board
- **Mission Tracker HUD** — fixed bottom-left scroll progress + files reviewed (`InvestigationStatus`)
- **Ambient Audio System** — optional theme + SFX dispatch toggle (`useAudio`)
- **Detective Hero Atmosphere** — corkboard, red string, dust particles + radar sweep (`NoiseOverlay`)
- **Secure Dispatch** — contact cards + confidential report form
- **Full Mobile Responsive** — collapsible nav, reduced motion layers on small screens

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| Framework | React 18 |
| Build Tool | Vite |
| Animations | Framer Motion |
| Smooth Scroll | Lenis |
| Styling | Tailwind CSS v4 + CSS custom properties |
| Icons | Font Awesome 6 (CDN) |
| Fonts | Playfair Display · Special Elite · Inter · Courier Prime |
| Deployment | Vercel *(recommended)* |

---

## 📁 Project Structure

```text
portfolio/
├── public/                      # logo, resume, static mission assets
├── src/
│   ├── App.jsx                  # Root layout, intro, lazy sections, audio, Lenis
│   ├── index.css                # Design system tokens & global utilities
│   ├── main.jsx                 # React entry
│   ├── components/
│   │   ├── Navbar.jsx           # Fixed pill nav + mobile menu
│   │   ├── Footer.jsx           # Closing brief + social channels
│   │   ├── LoadingScreen.jsx    # Session intro terminal
│   │   ├── InvestigationStatus.jsx  # Scroll HUD / mission tracker
│   │   ├── NoiseOverlay.jsx     # Corkboard + red string + dust
│   │   ├── SmoothScroll.jsx     # Lenis wrapper
│   │   ├── TwoToneHeading.jsx   # Gold/cream section titles
│   │   ├── CustomCursor.jsx
│   │   ├── DustParticles.jsx
│   │   └── CaseFileModal.jsx
│   ├── sections/
│   │   ├── Landing.jsx              # Hero identity + radar
│   │   ├── SuspectProfile.jsx       # About / classified dossier
│   │   ├── InvestigationBoard.jsx   # Projects / case files
│   │   ├── EvidenceLocker.jsx       # Skills constellation
│   │   ├── InvestigationLog.jsx     # Experience timeline
│   │   ├── TrainingRecords.jsx      # Education
│   │   ├── InformantReports.jsx     # Field investigations
│   │   └── SecureChannel.jsx        # Contact / dispatch
│   ├── hooks/
│   │   ├── useAudio.jsx             # Ambient SFX + music provider
│   │   └── useScrollReveal.js
│   └── data/
│       ├── projects.js
│       ├── skills.js
│       ├── timeline.js
│       ├── testimonials.js
│       └── fieldMissions.js
├── index.html
├── package.json
└── vite.config.js