# JDX — Marketing Website

A modern, responsive marketing website for JDX, a software startup, built with React, TypeScript, Tailwind CSS, and Framer Motion.

## Tech Stack
- React 19 + TypeScript
- Vite
- Tailwind CSS
- React Router
- Framer Motion
- Lucide Icons

## Getting Started

npm install
npm run dev

Then open the local URL Vite prints (usually http://localhost:5173).

## Build for production

npm run build
npm run preview

The production build is output to dist/.

## Project Structure

src/components   Reusable UI components (Navbar, Footer, cards, hero graphic, etc.)
src/context      ThemeContext for dark mode
src/data         Central content file (services, projects, testimonials, team)
src/pages        Route-level pages (Home, About, Services, Projects, ProjectDetail, Contact)

## Customizing Content

Almost all copy (services, projects, testimonials, team members, core values) lives in
src/data/content.ts. Update that file to change site content without touching components.

## Notes

- Placeholder images render as gradient panels with an icon; swap them for real photography
  by replacing the relevant divs in ProjectCard.tsx, ProjectDetail.tsx, and About.tsx with img tags.
- The contact form is front-end only (no backend wired up) — connect handleSubmit in
  src/pages/Contact.tsx to your email/API provider of choice.
- Dark mode preference is stored in localStorage and respects the user's system preference
  on first visit.
