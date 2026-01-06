# 🛠️ Freelance MarketPlace  
> A modern full‑stack freelance job platform where clients can post jobs and freelancers can accept and manage tasks. Built with MERN stack + Firebase authentication and inspired by modern UI patterns from Uiverse, ThemeForest, and DevMeetsDevs.


🔗 **Live Site**: [https://freelance-hub-a10.netlify.app/](https://freelance-hub-a10.netlify.app/)  
🗃️ **Client Repo:** https://github.com/KhMansura/freelance_client 
🗃️ **Server Repo**: [https://github.com/KhMansura/freelance_server](https://github.com/KhMansura/freelance_server)

---

<!-- ## 🖼️ Screenshot > 
![Project Screenshot](../../Projects11/freelance_client/public/10e78658-8136-4eb0-88a7-bf9e3f069e4b.png) -->
## 🖼️ Screenshot
![Project Screenshot](https://raw.githubusercontent.com/KhMansura/freelance_client/main/public/home.png)


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

### 📊 Dashboard & Data Visualization
- **Dynamic Charts:** Real-time data visualization using **Recharts** to show job distribution by category.
- **Interactive Data Table:** Paginated/scrollable tables fetching real backend data with hover states.
- **Stats Overview:** Personalized cards calculating total jobs and potential revenue dynamically.
- **Instant Profile Sync:** Specialized React state logic to ensure Sidebar/Navbar updates instantly upon profile modification.

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
### 2. Install dependencies
# Client
cd freelance_client && npm install

# Server
cd ../freelance_server && npm install

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
  ## ✅ Assignment Requirements Met
- [x] **Private CRUD:** All edit/delete operations are nested within the protected Dashboard.
- [x] **Real Data Visualization:** No dummy data; charts reflect live MongoDB collection states.
- [x] **Profile Management:** Fully editable and readable profile with full-width layout.
- [x] **UX & Accessibility:** WCAG-compliant contrast, dark mode support, and zero "Lorem Ipsum."
- [x] **Responsiveness:** Tested for Mobile, Tablet, and Desktop using Tailwind breakpoints.







