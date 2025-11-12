// src/components/Home/Home.jsx
// import { useEffect, useState } from 'react';
// import { Link } from 'react-router';
// import axios from 'axios';
// import { toast } from 'react-toastify';

// const Home = () => {
//   const [jobs, setJobs] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchJobs = async () => {
//       try {
//         const res = await axios.get('/api/jobs');
//         // Take latest 6 jobs
//         setJobs(res.data.slice(0, 6));
//       } catch (err) {
//         toast.error('Failed to load jobs. Is the server running?');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchJobs();
//   }, []);

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-blue-600"></div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Hero Banner */}
//       <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 md:py-28 text-center px-4 relative overflow-hidden">
//         <div className="absolute inset-0 opacity-10">
//           <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-300 rounded-full filter blur-xl"></div>
//           <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-300 rounded-full filter blur-xl"></div>
//         </div>

//         <div className="relative z-10 max-w-4xl mx-auto">
//           <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
//             Find Top Freelancers or Post a Job
//           </h1>
//           <p className="text-lg md:text-xl mb-8 opacity-90">
//             A trusted marketplace connecting skilled professionals with real-world projects — fast, secure, and free to join.
//           </p>
//           <div className="flex flex-col sm:flex-row justify-center gap-4">
//             <Link
//               to="/allJobs"
//               className="px-8 py-3 bg-white text-blue-700 font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
//             >
//               Browse Jobs
//             </Link>
//             <Link
//               to="/addJob"
//               className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 backdrop-blur-sm transition-colors"
//             >
//               Post a Job →
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* Latest Jobs */}
//       <section className="py-16 px-4 bg-white">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-gray-800 mb-4">Latest Opportunities</h2>
//             <p className="text-gray-600 max-w-2xl mx-auto">
//               Handpicked jobs posted in the last 24 hours. New gigs added every minute!
//             </p>
//           </div>

//           {jobs && jobs.length > 0 ? (
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {jobs.map((job) => (
//                 <div
//                   key={job._id}
//                   className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100"
//                 >
//                   {job.coverImage && (
//                     <div className="h-48 overflow-hidden">
//                       <img
//                         src={job.coverImage}
//                         alt={job.title}
//                         className="w-full h-full object-cover"
//                         onError={(e) => {
//                           e.target.onerror = null;
//                           e.target.src = 'https://via.placeholder.com/400x200/e2e8f0/64748b?text=No+Image';
//                         }}
//                       />
//                     </div>
//                   )}
//                   <div className="p-6">
//                     <span className="inline-block px-3 py-1 text-xs font-semibold text-indigo-600 bg-indigo-50 rounded-full mb-3">
//                       {job.category || 'General'}
//                     </span>
//                     <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-1">
//                       {job.title}
//                     </h3>
//                     <p className="text-gray-600 text-sm mb-3">
//                       <span className="font-medium">Posted by:</span> {job.postedBy || 'Anonymous'}
//                     </p>
//                     <p className="text-gray-700 mb-4 line-clamp-3">
//                       {job.summary || 'No description provided.'}
//                     </p>
//                     <Link
//                       to={`/allJobs/${job._id}`}
//                       className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800 transition-colors"
//                     >
//                       View Details →
//                     </Link>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <div className="text-center py-16">
//               <div className="text-5xl mb-6">📭</div>
//               <h3 className="text-2xl font-semibold text-gray-700 mb-3">No Jobs Yet</h3>
//               <p className="text-gray-500 max-w-md mx-auto mb-6">
//                 Be the first to post a job and attract top talent from around the world.
//               </p>
//               <Link
//                 to="/addJob"
//                 className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors shadow-md"
//               >
//                 Post Your First Job
//               </Link>
//             </div>
//           )}
//         </div>
//       </section>

//       {/* Static Sections */}
//       <section className="py-16 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//             {/* Top Categories */}
//             <div className="bg-white p-8 rounded-xl shadow-md">
//               <h2 className="text-2xl font-bold text-gray-800 mb-6">Top Categories</h2>
//               <div className="grid grid-cols-2 gap-4">
//                 {[
//                   { name: 'Web Development', icon: '💻' },
//                   { name: 'Graphics Designing', icon: '🎨' },
//                   { name: 'Digital Marketing', icon: '📈' },
//                   { name: 'Content Writing', icon: '✍️' },
//                   { name: 'Video Editing', icon: '🎥' },
//                   { name: 'Mobile Apps', icon: '📱' },
//                 ].map((cat, i) => (
//                   <div
//                     key={i}
//                     className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
//                   >
//                     <span className="text-2xl">{cat.icon}</span>
//                     <span className="font-medium">{cat.name}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* About The Platform */}
//             <div className="bg-white p-8 rounded-xl shadow-md">
//               <h2 className="text-2xl font-bold text-gray-800 mb-6">About FreelanceHub</h2>
//               <p className="text-gray-700 mb-4">
//                 We connect businesses with top freelance talent worldwide. Post a job, find a pro, and get your project done — fast and easy.
//               </p>
//               <p className="text-gray-700 mb-4">
//                 Our platform is designed for simplicity, security, and speed — no hidden fees, no complicated contracts.
//               </p>
//               <p className="text-gray-700">
//                 Join 10,000+ freelancers and clients who trust us daily.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { Link } from "react-router";
import bannerImg from "../../assets/bannar1.png";

export default function Home() {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/jobs/latest`)
      .then((res) => {
        console.log("Response:", res.data); // 👀 See what the backend sends
        setJobs(res.data);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Banner */}
      <section
        className="text-center w-full mb-12 bg-cover bg-center bg-no-repeat bg-gray-100 py-3"
        style={{ backgroundImage: `url(${bannerImg})`, padding: "10%" }}
      >
        <motion.h1
          className="text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Find Reliable Freelancers Fast
        </motion.h1>
        <motion.p
          className="mb-6 text-gray-950"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Join FreelanceHub — your go-to marketplace for finding and posting
          freelance jobs.
        </motion.p>

        <motion.div
          className="space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <Link to="/addJobs" className="btn btn-primary">
            Create a Job
          </Link>
          <Link to="/allJobs" className="btn btn-secondary">
            Explore Jobs
          </Link>
        </motion.div>
      </section>

      {/* Latest Jobs */}
      <section>
        <h2 className="text-3xl font-bold mb-6 text-center">Latest Jobs</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {Array.isArray(jobs) && jobs.length > 0 ? (
            jobs.map((job) => (
              <div key={job._id} className="job-card">
                <img src={job.coverImage} alt={job.title} />
                <h3>{job.title}</h3>
                <p>{job.summary?.slice(0, 60)}...</p>
                <Link to={`/allJobs/${job._id}`} className="btn btn-primary">
                  View Details
                </Link>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No jobs found.</p>
          )}
        </div>
      </section>
      {/* Two static sections */}
      {/* <section className="grid md:grid-cols-2 gap-6">
        <div className="p-6 bg-white rounded shadow">
          <h3 className="font-semibold text-xl mb-2">Top Categories</h3>
          <div className="grid grid-cols-3 gap-3">
            <div className="text-center">Web Dev</div>
            <div className="text-center">Digital Mkt</div>
            <div className="text-center">Design</div>
          </div>
        </div>

        <div className="p-6 bg-white rounded shadow">
          <h3 className="font-semibold text-xl mb-2">
            About Freelance MarketPlace
          </h3>
          <p className="text-gray-700">
            A simple and secure place for clients and freelancers to post and
            accept tasks easily.
          </p>
        </div>
      </section> */}

      {/* Two Enchanted Static Sections */}
<section className="grid md:grid-cols-2 gap-6 mt-16">
  {/* ✨ Section 1: Top Categories (as Services) */}
  <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-6">
    <div className="flex items-center mb-5">
      <div className="bg-blue-100 p-2 rounded-lg mr-3">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm9-12a2 2 0 01-2-2V5a2 2 0 012-2h4a2 2 0 012 2v2a2 2 0 01-2 2h-4z" />
        </svg>
      </div>
      <h3 className="text-xl font-bold text-gray-800">Top Categories</h3>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {[
        { name: "Web Development", icon: "💻", desc: "Frontend, Backend, Full-stack" },
        { name: "Digital Marketing", icon: "📈", desc: "SEO, Ads, Analytics" },
        { name: "Graphic Design", icon: "🎨", desc: "Branding, UI/UX, Print" },
        { name: "Writing & Translation", icon: "✍️", desc: "Content, Copy, Localization" },
      ].map((cat, i) => (
        <div 
          key={i} 
          className="flex items-start p-3 rounded-lg bg-gray-50 hover:bg-blue-50 transition group"
        >
          <span className="text-xl mr-3 mt-0.5 group-hover:text-blue-600 transition">
            {cat.icon}
          </span>
          <div>
            <h4 className="font-semibold text-gray-800">{cat.name}</h4>
            <p className="text-sm text-gray-600 mt-1">{cat.desc}</p>
          </div>
        </div>
      ))}
    </div>

    <Link 
      to="/allJobs" 
      className="mt-4 inline-flex items-center text-blue-600 font-medium hover:text-blue-800 group"
    >
      Browse all categories
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </Link>
  </div>

  {/* ✨ Section 2: About Freelance MarketPlace (Why Choose Us) */}
  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
    <div className="flex items-center mb-5">
      <div className="bg-indigo-100 p-2 rounded-lg mr-3">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      </div>
      <h3 className="text-xl font-bold text-gray-800">Why FreelanceHub?</h3>
    </div>

    <ul className="space-y-4 mb-6">
      {[
        { title: "Fast Matching", desc: "Get matched with the right freelancer in under 24 hours." },
        { title: "Verified Talent", desc: "All freelancers are manually reviewed for quality & reliability." },
        { title: "Secure Collaboration", desc: "Built-in messaging and milestone tracking for smooth workflows." },
      ].map((item, i) => (
        <li key={i} className="flex">
          <span className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-500 flex items-center justify-center mr-3 mt-0.5">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </span>
          <div>
            <h4 className="font-semibold text-gray-800">{item.title}</h4>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </div>
        </li>
      ))}
    </ul>

    <div className="bg-white rounded-lg p-4 border border-gray-200">
      <p className="text-gray-700 italic">
        <span className="font-semibold text-gray-800">“</span>
        FreelanceHub connects skilled freelancers and clients in a seamless environment where projects come alive.
        <span className="font-semibold text-gray-800">”</span>
      </p>
    </div>
  </div>
</section>

      {/* Static Section: About */}
      {/* About FreelanceHub */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              About <span className="text-blue-600">FreelanceHub</span>
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
            <p className="mt-6 max-w-2xl mx-auto text-gray-600">
              FreelanceHub connects skilled freelancers and clients in a
              seamless environment where projects come alive.
            </p>
          </div>

          {/* Stats / Why Choose Us */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 text-blue-600 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Fast & Reliable
              </h3>
              <p className="text-gray-600">
                Post a job and get matched with vetted freelancers in under 24
                hours.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-green-100 text-green-600 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Secure & Trusted
              </h3>
              <p className="text-gray-600">
                Escrow payments and verified profiles ensure safe collaboration.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-purple-100 text-purple-600 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Global Talent
              </h3>
              <p className="text-gray-600">
                Access 10,000+ vetted freelancers across 80+ countries and
                specialties.
              </p>
            </div>
          </div>

          {/* CTA Banner */}
          <div className="bg-blue-600 rounded-2xl p-8 md:p-12 text-center text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Build Something Amazing?
            </h3>
            <p className="max-w-2xl mx-auto mb-6 opacity-90">
              Join thousands of clients and freelancers who trust FreelanceHub
              for seamless collaboration.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/register"
                className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition"
              >
                Get Started
              </Link>
              <Link
                to="/allJobs"
                className="px-6 py-3 bg-blue-400 border-2 border-white text-gray-700 font-semibold rounded-lg hover:bg-blue-600 transition"
              >
                Explore Jobs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
