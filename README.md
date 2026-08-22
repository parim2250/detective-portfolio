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
🚀 Quick Start
Bash

# Clone
git clone https://github.com/parim2250/portfolio.git
cd portfolio

# Install
npm install

# Dev server
npm run dev

# LAN / mobile testing
npm run dev -- --host
Dev server defaults to http://localhost:5173

🏗️ Build & Deploy
Bash

npm run build
npm run preview
Output: dist/

Vercel settings
Setting	Value
Framework Preset	Vite
Build Command	npm run build
Output Directory	dist
Install Command	npm install
🎨 Design System
Tokens live in src/index.css (@theme + :root):

CSS

--color-bg: #0a0c10;           /* Deep charcoal navy */
--color-bg-light: #12151c;
--color-bg-card: #161a22;
--color-gold: #c8a44d;         /* Aged gold accent */
--color-red: #b23a3a;          /* Evidence red */
--color-parchment: #f5f1e8;    /* Case file parchment */
--font-heading: 'Playfair Display';
--font-mono: 'Special Elite';
--font-body: 'Inter';
🧭 Section IDs (Navigation Map)
Nav Label	Anchor	Component
—	#home	Landing
Dossier	#about	SuspectProfile
Case Files	#projects	InvestigationBoard
Toolkit	#skills	EvidenceLocker
Missions	#experience	InvestigationLog
Training	#education	TrainingRecords
Field	#missions	InformantReports
Dispatch	#contact	SecureChannel
🔧 Customize Your Case
Update this	Edit here
Projects	InvestigationBoard.jsx / data/projects.js
Skills	EvidenceLocker.jsx / data/skills.js
Experience	InvestigationLog.jsx / data/timeline.js
Education	TrainingRecords.jsx
Events / field work	InformantReports.jsx / data/fieldMissions.js
Contact + socials	SecureChannel.jsx, Footer.jsx
Hero copy	Landing.jsx
Theme	index.css
Resume	public/resume.pdf
Logo / favicon	public/logo-main.png
📡 Secure Channels
Channel	Link
Email	parim2250@gmail.com
GitHub	github.com/parim2250
LinkedIn	pari-mittal
Instagram	@parimittal504
Threads	@parimittal504
📸 Preview
(Optional — add a screenshot after deploy)

Markdown

![Portfolio preview](./public/preview.png)
📜 License
Personal portfolio — all rights reserved.
© 2026 Pari Mittal. All investigations reserved.

"Every case has a solution. Every mystery has an answer."