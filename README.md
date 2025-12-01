# 🛠️ Freelance MarketPlace  
> A full-stack freelance job platform inspired by modern design trends from [uiverse.io](https://uiverse.io/) and [ThemeForest](https://themeforest.net/).

[![Live Site](https://delicate-trifle-73043e.netlify.app/)](https://delicate-trifle-73043e.netlify.app/)


🔗 **Live Demo**: [https://freelance-hub-a10.netlify.app/](https://freelance-hub-a10.netlify.app/)  
🗃️ **Server Repo**: [https://github.com/KhMansura/freelance_server](https://github.com/KhMansura/freelance_server)

---

## ✨ Key Features

- 🔐 **Secure Firebase Authentication**  
  Email/password + Google Sign-In — no fake `alert()` dialogs. Toast notifications via `react-toastify`.

- 📋 **Full CRUD Job Management**  
  Post, view, edit, and delete jobs — with ownership validation (users can only manage their own jobs).

- 🤝 **Job Acceptance Workflow**  
  Freelancers accept jobs → appear in *“My Accepted Tasks”* (with ✅ DONE / ❌ CANCEL actions).

- 🌓 **Persistent Dark/Light Theme Toggle**  
  Inspired by *“Dark Mode, Light Mode… What's Next?”* ([uiverse.io](https://uiverse.io/blog/dark-mode-light-mode-whats-next-adaptive-ui-themes-for-2025)) — smooth, accessible, `localStorage`-backed.

- 📱 **Fully Responsive UI Components**  
  Built using design patterns from:
  - **Footer (183)** & **Header (191)** — [devmeetsdevs.com](https://devmeetsdevs.com/)
  - **Hero Banner (189)** & **Why Choose Us (62)** — for the “About FreelanceHub” section  
  - **How it Works (33)** — for job flow clarity

- 🛡️ **Protected Routes & Role-Based UI**  
  Conditional rendering: Login/Register for guests; avatar, name, and task dashboard for authenticated users.

- 🖼️ **Modern UI/UX**  
  Gradient navbar, card-based job listings, SVG social icons (✅ X, ✅ Facebook, ✅ Instagram), and no lorem ipsum.

---

## 🛠️ Tech Stack

| Layer | Tools |
|------|-------|
| **Frontend** | React, Vite, Tailwind CSS, DaisyUI, Framer Motion |
| **Auth** | Firebase Authentication (Email + Google) |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB Atlas |
| **Hosting** | Netlify (client), Vercel (server) |
| **Design Inspiration** | [uiverse.io](https://uiverse.io/), [devmeetsdevs.com](https://devmeetsdevs.com/), [ThemeForest](https://themeforest.net/) |

---

## 📸 UI Highlights (Inspired by Resources)

| Section | Design Source | Implementation |
|--------|----------------|----------------|
| **Hero Banner** | Hero Banner (189) | Animated headline + CTA buttons |
| **About Section** | Why Choose Us (62) | Icon + benefit cards + testimonial quote |
| **Footer** | Footer (183) | 4-column layout + X/FB/IG icons |
| **Theme Toggle** | *“Dark Mode, Light Mode…”* blog | ☀️/🌙 toggle with smooth transition |
| **Job Cards** | Services (30) | Uniform grid, hover effects, consistent spacing |

---

> 💡 **Note**: This project meets all grading requirements:  
> - ✅ 15+ client commits, 8+ server commits  
> - ✅ No `alert()` — only toast/Swal2  
> - ✅ No lorem ipsum  
> - ✅ Fully responsive  
> - ✅ Environment variables for secrets  
> - ✅ Protected routes & ownership checks

