# 🛠️ Freelance MarketPlace  
> A modern full‑stack freelance job platform where clients can post jobs and freelancers can accept and manage tasks. Built with MERN stack + Firebase authentication and inspired by modern UI patterns from Uiverse, ThemeForest, and DevMeetsDevs.


🔗 **Live Site**: [https://freelance-hub-a10.netlify.app/](https://freelance-hub-a10.netlify.app/)  
🗃️ **Client Repo:** https://github.com/KhMansura/freelance_client 
🗃️ **Server Repo**: [https://github.com/KhMansura/freelance_server](https://github.com/KhMansura/freelance_server)

---

## 🖼️ Screenshot > 
![Project Screenshot]()

## ✨ Key Features
  ### 🔐 Authentication
- Firebase Email/Password login  
- Google Sign‑In  
- Toast notifications (no `alert()`)

### 📋 Job Management
- Create, read, update, delete jobs  
- Users can only edit/delete their own jobs  
- Job acceptance workflow for freelancers  

### 🧑‍💻 Task Workflow
- Accepted tasks appear in **My Tasks**  
- Mark tasks as **Done** or **Cancel**

### 🎨 Modern UI/UX
- Fully responsive layout  
- Gradient navbar, animated hero, clean cards  
- Dark/Light theme toggle (saved in localStorage)

### 🛡️ Protected Routes
- Only logged‑in users can access dashboard pages  
- Role‑based UI elements

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

## 📦 Dependencies

### **Client**
- React  
- React Router DOM  
- Firebase  
- Axios  
- Tailwind CSS  
- DaisyUI  
- Framer Motion  
- React Toastify  

### **Server**
- Express.js  
- MongoDB  
- CORS  
- Dotenv  
- Nodemon  

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

## 🚀 How to Run the Project Locally

### 1. Clone the repositories
```bash
git clone https://github.com/KhMansura/freelance_client.git
git clone https://github.com/KhMansura/freelance_server.git
2. Install dependencies
cd freelance_client
npm install

cd ../freelance_server
npm install
3. Create environment variables
Client (.env)
VITE_apiKey=your_key
VITE_authDomain=your_domain
VITE_projectId=your_id
VITE_server_url=http://localhost:5000
Server (.env)
PORT=5000
MONGO_URI=your_mongo_uri
4. Start the development servers
npm run dev
Server
npm start
5. Open in browser
http://localhost:5173
```
📚 Additional Notes

  - Fully responsive
  - No lorem ipsum
  - Secure authentication
  - Environment variables used
  - Meets all assignment requirements







