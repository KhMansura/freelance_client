// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// // src/main.jsx (top)
// import 'react-toastify/dist/ReactToastify.css';

// import { createBrowserRouter } from "react-router";
// import { RouterProvider } from "react-router/dom";
// import RootLayout from './layout/RootLayout.jsx';
// import Home from './Components/Home/Home.jsx';
// import AllJobs from './Components/AllJobs/AllJobs.jsx';
// import AuthProvider from './context/AuthProvider.jsx';
// import Register from './Components/Register/Register.jsx';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     Component:RootLayout,
//     children:[
//       {
//         index:true,
//         Component:Home
//       },
//       {
//         path:'allJobs',
//         Component:AllJobs
//       },
//       {
//         path:'register',
//         Component:Register
//       },
//     ]
//   },
// ]);

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <AuthProvider>
//       <RouterProvider router={router} />
//     </AuthProvider>
//   </StrictMode>,
// )

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




const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: 'allJobs', element: <PrivateRoute><AllJobs /></PrivateRoute> },
      { path: 'allJobs/:id', element: <PrivateRoute><JobDetails /></PrivateRoute> },
      { path: 'addJobs', element: <PrivateRoute><AddJobs /></PrivateRoute> },
      { path: 'myPostedJobs', element: <PrivateRoute><MyPostedJobs></MyPostedJobs></PrivateRoute> },
      { path: 'my-accepted-tasks', element: <PrivateRoute><MyAcceptedTasks /></PrivateRoute> },
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      {path: 'terms',element: <TermsOfService />},
      {path: 'privacy',element: <PrivacyPolicy />},
      { path:  'updateJob/:id', element:<PrivateRoute><UpdateJob></UpdateJob></PrivateRoute>},
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
