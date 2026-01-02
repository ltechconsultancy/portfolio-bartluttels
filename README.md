# Bart Luttels - Portfolio

A stunning, modern portfolio website built with React, Three.js, and Framer Motion.

## Features

- 🎨 **3D Particle Field** - Interactive Three.js background
- ✨ **Custom Cursor** - Smooth, animated cursor
- 🌊 **Smooth Animations** - Framer Motion powered transitions
- 📱 **Fully Responsive** - Works on all devices
- 🎭 **Dark Cyber Theme** - Modern, professional design
- 🐳 **Docker Ready** - Deploy anywhere with Docker Compose

## Tech Stack

- **Framework:** React 18 + TypeScript
- **Build Tool:** Vite
- **3D Graphics:** Three.js + React Three Fiber
- **Animations:** Framer Motion + GSAP
- **Styling:** Tailwind CSS
- **Deployment:** Docker + Nginx

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Deploy with Docker

```bash
# Build and run
docker-compose up -d

# Access at http://localhost:3000
```

## Deploy on Coolify

1. Push this repo to GitHub
2. In Coolify, create new resource → Docker Compose
3. Connect your GitHub repository
4. Deploy!

## Structure

```
src/
├── components/
│   ├── Hero.tsx           # 3D animated hero section
│   ├── About.tsx          # About me with stats
│   ├── Experience.tsx     # Timeline of experience
│   ├── Skills.tsx         # Skills visualization
│   ├── Achievements.tsx   # Key achievements
│   ├── Contact.tsx        # Contact form
│   ├── Navigation.tsx     # Animated navigation
│   ├── ParticleField.tsx  # Three.js particles
│   └── CustomCursor.tsx   # Custom animated cursor
├── App.tsx
├── main.tsx
└── index.css
```

## Customization

Edit the data in each component to personalize:
- `Experience.tsx` - Your work history
- `Skills.tsx` - Your skills and levels
- `Achievements.tsx` - Your accomplishments
- `Contact.tsx` - Your contact info & social links

---

Built with 💜 by Bart Luttels
