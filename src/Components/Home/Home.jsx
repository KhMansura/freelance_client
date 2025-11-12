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
import bannerImg from '../../assets/bannar1.png';

export default function Home() {
  const [jobs, setJobs] = useState([]);

  //   useEffect(() => {
  //     axios.get(`${import.meta.env.VITE_API_URL}/jobs/latest`)
  //       .then(res => setJobs(res.data))
  //       .catch(console.error);
  //   }, []);
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
        style={{ backgroundImage: `url(${bannerImg})`,
        padding:'10%'
     }}
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
          {/* {jobs.map(job => (
            <div key={job._id} className="job-card">
              <img src={job.coverImage} alt={job.title} />
              <h3>{job.title}</h3>
              <p>{job.summary.slice(0, 60)}...</p>
              <Link to={`/allJobs/${job._id}`} className="btn btn-primary">View Details</Link>
            </div> */}
          {/* ))} */}
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
      {/* Latest Jobs */}
      {/* <section>
        <h2 className="text-3xl font-bold mb-6 text-center">Latest Jobs</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {/* 👇 REPLACE THIS BLOCK WITH THE IMPROVED VERSION BELOW 👇 */}

      {/* {jobs.length === 0 ? (
            <p className="text-center text-gray-500 col-span-full">
              No jobs found.
            </p>
          ) : (
            jobs.slice(0, 6).map((job) => (
              <div
                key={job._id}
                className="border rounded-lg p-4 shadow-sm hover:shadow-md transition"
              >
                <img
                  src={job.coverImage || "/placeholder.svg"}
                  alt={job.title}
                  className="w-full h-40 object-cover rounded mb-3"
                  onError={(e) => (e.target.src = "/placeholder.svg")} // fallback
                />
                <h3 className="font-bold text-lg">{job.title}</h3>
                <p className="text-gray-600 text-sm mt-1 line-clamp-2">
                  {job.summary || "No description provided."}
                </p>
                <Link
                  to={`/allJobs/${job._id}`}
                  className="mt-3 inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                >
                  View Details
                </Link>
              </div>
            ))
          )}
        </div>
      </section> */}
      {/* Two static sections */}
      <section className="grid md:grid-cols-2 gap-6">
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
      </section>

      {/* Static Section: About */}
      <section className="mt-16 text-center">
        <h2 className="text-2xl font-semibold mb-4">About FreelanceHub</h2>
        <p className="max-w-2xl mx-auto text-gray-600">
          FreelanceHub connects skilled freelancers and clients in a seamless
          environment where projects come alive.
        </p>
      </section>
    </div>
  );
}
