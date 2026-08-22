# Pari Mittal — Detective Portfolio

A cinematic, narrative-driven developer portfolio built on a detective investigation theme.  
Every section is a case file. Every skill is evidence. Every project is a solved mystery.

**Subject:** Pari Mittal  
**Role:** Full Stack Developer and AI/ML Engineer  
**Base:** Noida, Uttar Pradesh  
**Classification:** Level 5 — Active

**Live Demo:** add-your-vercel-url-here  
**Repository:** https://github.com/parim2250/portfolio

---

## Concept

This is not a traditional skills page. It is a narrative investigation system.

| Layer | Theme | Section |
| --- | --- | --- |
| Identity | Detective dossier | Landing / Hero |
| Case Files | Solved mysteries | Investigation Board / Projects |
| Forensic Lab | Constellation of tools | Evidence Locker / Skills |
| Timeline | Investigation history | Investigation Log / Experience |
| Training | Academic background | Training Records / Education |
| Field Ops | Events and community | Informant Reports / Missions |
| Dispatch | Contact channel | Secure Channel / Contact |

> Every bug is a mystery. Every interface is a puzzle.

---

## Features

- Cinematic intro sequence (terminal boot, once per session)
- Smooth scroll with Lenis
- Evidence constellation skills map with hover panels
- Case file project cards with status stamps and tech tags
- Investigation log experience timeline
- Training records education section
- Field investigations event board
- Mission tracker HUD for scroll progress
- Optional ambient audio dispatch toggle
- Detective hero atmosphere (corkboard, red string, radar)
- Secure dispatch contact form and social links
- Fully responsive layout

---

## Tech Stack

| Category | Technology |
| --- | --- |
| Framework | React 18 |
| Build tool | Vite |
| Animations | Framer Motion |
| Smooth scroll | Lenis |
| Styling | Tailwind CSS v4 and CSS custom properties |
| Icons | Font Awesome 6 |
| Fonts | Playfair Display, Special Elite, Inter, Courier Prime |
| Deployment | Vercel |

---

## Project Structure

```text
portfolio/
├── public/
├── src/
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── LoadingScreen.jsx
│   │   ├── InvestigationStatus.jsx
│   │   ├── NoiseOverlay.jsx
│   │   ├── SmoothScroll.jsx
│   │   └── TwoToneHeading.jsx
│   ├── sections/
│   │   ├── Landing.jsx
│   │   ├── SuspectProfile.jsx
│   │   ├── InvestigationBoard.jsx
│   │   ├── EvidenceLocker.jsx
│   │   ├── InvestigationLog.jsx
│   │   ├── TrainingRecords.jsx
│   │   ├── InformantReports.jsx
│   │   └── SecureChannel.jsx
│   ├── hooks/
│   │   └── useAudio.jsx
│   └── data/
│       ├── projects.js
│       ├── skills.js
│       └── timeline.js
├── index.html
├── package.json
└── vite.config.js
Quick Start
Clone the repository:

Bash

git clone https://github.com/parim2250/portfolio.git
cd portfolio
Install dependencies:

Bash

npm install
Start the development server:

Bash

npm run dev
Open the app at:

text

http://localhost:5173
Start with network access for phone testing:

Bash

npm run dev -- --host
Build and Deploy
Create a production build:

Bash

npm run build
Preview the production build locally:

Bash

npm run preview
Build output folder:

text

dist/
Vercel settings
Setting	Value
Framework Preset	Vite
Build Command	npm run build
Output Directory	dist
Install Command	npm install
Connect the GitHub repo to Vercel and deploy. After deploy, put your live URL at the top of this README.

Design System
Design tokens live in src/index.css.

Token	Value	Use
Background	#0a0c10	Page base
Gold	#c8a44d	Accents and CTAs
Red	#b23a3a	Evidence / stamps
Parchment	#f5f1e8	Case file cards
Heading font	Playfair Display	Titles
Mono font	Special Elite	Labels and HUD
Body font	Inter	Body text
Section Map
Nav label	Anchor ID	Component
Home	#home	Landing
Dossier	#about	SuspectProfile
Case Files	#projects	InvestigationBoard
Toolkit	#skills	EvidenceLocker
Missions	#experience	InvestigationLog
Training	#education	TrainingRecords
Field	#missions	InformantReports
Dispatch	#contact	SecureChannel
Customize
What to change	File to edit
Projects	src/sections/InvestigationBoard.jsx or src/data/projects.js
Skills	src/sections/EvidenceLocker.jsx or src/data/skills.js
Experience	src/sections/InvestigationLog.jsx or src/data/timeline.js
Education	src/sections/TrainingRecords.jsx
Field events	src/sections/InformantReports.jsx
Contact links	src/sections/SecureChannel.jsx and src/components/Footer.jsx
Hero text	src/sections/Landing.jsx
Colors and fonts	src/index.css
Resume	public/resume.pdf
Logo	public/logo-main.png
Secure Channels
Email: parim2250@gmail.com
GitHub: https://github.com/parim2250
LinkedIn: https://www.linkedin.com/in/pari-mittal-b56895318
Instagram: https://www.instagram.com/parimittal504/
Threads: https://www.threads.net/@parimittal504
License
Personal portfolio. All rights reserved.
Copyright 2026 Pari Mittal. All investigations reserved.

Every case has a solution. Every mystery has an answer.