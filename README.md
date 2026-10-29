# Liche Tsegaye — Software Engineer & AI Developer Portfolio

A clean, modern, and high-performance developer portfolio built with **React 18** and modern design tokens. Designed specifically for AI Engineers, full-stack builders, and systems developers.

---

## ✨ Key Features & Clean UI Upgrades

- **Clean, Professional Aesthetic**: Replaced previous romantic/velvet tones with a modern, high-contrast tech design system (Obsidian Slate `#0b0f17`, Electric Indigo `#6366f1`, and Cyber Cyan `#06b6d4`).
- **Dark & Light Mode Toggle**: Smooth theme switching with persistent storage via `localStorage`.
- **Modular React Architecture**: Full component hierarchy with centralized data management in `src/data/portfolioData.js`.
- **Interactive Projects Showcase**:
  - Filter tabs: *All (7)*, *AI & Multi-Agent (3)*, *Full-Stack & DB (2)*, *Security & Tools (2)*.
  - Real-time live search by keyword (filters across project titles, descriptions, and tech stacks).
  - Direct links to verified repositories on GitHub.
- **Interactive AI Agent Simulator**:
  - Grounded simulator querying Liche's verified background: INSA AI Engineering internship, Agentic RAG architectures, FastAPI voice assistants, Jimma University degree, and job availability.
  - Quick-click query prompt chips and clear chat controls.
- **Interactive Experience & Credentials Timeline**:
  - Highlights from INSA (Information Network Security Administration) 6-month internship, Jimma University 5th-year Software Engineering program, and Prodigy InfoTech.
- **Contact & Channels**:
  - 1-click email copy button (`lichetsega@gmail.com`) with instant feedback toast.
  - Telegram direct channel (`@Lichetsega`), LinkedIn profile, and GitHub link.
  - Functional interactive contact form.

---

## 📁 Project Structure

```
portfolio/
├── package.json              # Project dependencies & scripts (React 18, Vite)
├── vite.config.js            # Vite configuration
├── index.html                # Entry HTML with standalone browser execution
├── style.css                 # Root CSS importing src/index.css
├── script.js                 # Legacy placeholder notice
├── README.md                 # Project documentation
├── assets/
│   ├── avatar.jpg            # Professional avatar portrait
│   └── Liche_Tsegaye_Resume.pdf # Downloadable verified resume PDF
└── src/
    ├── main.jsx              # React 18 DOM mount point
    ├── App.jsx               # Top-level state & layout wrapper
    ├── index.css             # Design tokens, variables & responsive styling
    ├── data/
    │   └── portfolioData.js  # Centralized portfolio data & AI knowledge base
    └── components/
        ├── Navbar.jsx        # Sticky glass navbar, theme switch, mobile menu
        ├── Hero.jsx          # Live status badge, metrics, CTAs, avatar frame
        ├── About.jsx         # Engineering story & core principles
        ├── Experience.jsx    # Professional & education timeline
        ├── Skills.jsx        # Categorized technical skills matrix
        ├── Projects.jsx      # Filterable and searchable projects grid
        ├── AiAssistant.jsx   # Interactive AI chat simulator
        ├── Contact.jsx       # 1-click copy email, social links, contact form
        └── Footer.jsx        # Brand, quick links, scroll-to-top
```

---

## 🚀 Running the Project

### Option 1: Direct Browser Opening (No Build Required)
Simply double-click `index.html` or open it with any web browser (Chrome, Edge, Firefox, Safari). It will run immediately with React 18 and all interactive features active out of the box.

### Option 2: Run with Vite & Node.js
If you have Node.js installed on your machine:
```bash
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view it with live hot module replacement (HMR).

### Option 3: Production Build
```bash
npm run build
```
This generates optimized static production assets in the `dist/` directory ready for deployment on Vercel, Netlify, GitHub Pages, or AWS S3.
