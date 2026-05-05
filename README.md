# Playbooks — Prototype

Standalone React prototype of the Playbooks module, extracted from the Governance Studio prototype.

## Quick Start

### Prerequisites
- Node.js 18+
- npm

### Install & Run
```bash
npm install
npm run dev
```
Opens at http://localhost:5173

### Build for production
```bash
npm run build
npm run preview   # preview production build locally
```

---

## Deploy

### Vercel (recommended)
```bash
npm install -g vercel
vercel login
vercel          # first deploy
vercel --prod   # subsequent deploys
```
`vercel.json` is already configured for SPA routing.

### Netlify
```bash
npm install -g netlify-cli
netlify login
npm run build
netlify deploy --dir=dist --prod
```

---

## Project Structure

```
src/
├── components/
│   ├── layout/Layout.jsx                # Sidebar + top bar
│   ├── ui/index.jsx                     # Reusable UI primitives
│   └── modules/
│       ├── playbooks/
│       │   ├── Playbooks.jsx            # Playbook list
│       │   ├── CreatePlaybook.jsx       # Create entry / template picker
│       │   ├── PlaybookBuilder.jsx      # Step-based builder
│       │   └── PlaybookDetail.jsx       # Playbook detail
│       └── knowledge/
│           └── TruthPackSlideOut.jsx    # Knowledge pack preview (used by builder)
├── data/
│   └── mockKnowledge.js                 # Mock truth-pack catalog
├── App.jsx                              # Routes
├── main.jsx                             # Entry point
└── index.css                            # Design tokens + utility classes
```

---

## Routes

| URL | Component |
|-----|-----------|
| `/` | redirects to `/playbooks` |
| `/playbooks` | Playbook list |
| `/playbooks/create` | Create / template picker |
| `/playbooks/create/scratch` | Step-based builder |
| `/playbooks/:id` | Playbook detail |

---

## Tech Stack
- React 18 + React Router 6
- Vite
- Tailwind CSS 3
- Lucide React (icons)
- clsx
