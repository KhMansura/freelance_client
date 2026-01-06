// src/main.jsx
import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer } from 'react-toastify';
import AuthProvider from './context/AuthProvider';

// Layout & Pages
import RootLayout from './layout/RootLayout';
import Home from './Components/Home/Home';
import AllJobs from './pages/AllJobs';
import Register from './Components/Register/Register';
import Login from './pages/Login';
import JobDetails from './pages/JobDetails';
import AddJobs from './pages/AddJobs';
import MyAddedJobs from './pages/MyPostedJobs';
import MyAcceptedTasks from './pages/MyAcceptedTasks';
import NotFound from './pages/NotFound';
import PrivateRoute from './Components/PrivateRoute';
import UpdateJob from './pages/UpdateJob';
import TermsOfService from './pages/TermsOfServices';
import PrivacyPolicy from './pages/PrivacyPolicy';
import MyPostedJobs from './pages/MyPostedJobs';
import Support from './Components/Footer/Support';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import DashboardLayout from './layout/DashboardLayout';
import ProfilePage from './pages/Dashboard/ProfilePage';
import DashboardHome from './pages/Dashboard/DashboardHome';
import BlogDetails from './pages/BlogDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: 'allJobs', element: <AllJobs /> },
      { path: 'allJobs/:id', element: <JobDetails /> },
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      { path: 'aboutUs', element: <AboutUs /> },
      { path: 'contact', element: <Contact /> },
      { path: 'blog', element: <Blog /> },
      { path: 'blog/:id', element: <BlogDetails /> },
      
      // --- DASHBOARD NESTED ROUTES START ---
      {
        path: 'dashboard',
        element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
        children: [
          { path: 'home', element: <DashboardHome /> }, 
          { path: 'add-job', element: <AddJobs /> },
          { path: 'my-jobs', element: <MyPostedJobs /> },
          {path: 'my-accepted-tasks', element: <MyAcceptedTasks /> },
          { path: 'profile', element: <ProfilePage /> },
          { path: 'updateJob/:id', element: <UpdateJob /> },

        ]
      },
      // --- DASHBOARD NESTED ROUTES END ---

      { path: 'terms', element: <TermsOfService /> },
      { path: 'privacy', element: <PrivacyPolicy /> },
      { path: 'support', element: <Support /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer 
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </AuthProvider>
  </StrictMode>
);
