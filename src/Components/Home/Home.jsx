// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import axios from "axios";
// import { Link } from "react-router";
// import bannerImg from "../../assets/bannar1.png";
// import Hero from "./Hero";
// import StatsSection from "./StatsSection";
// import FAQ from "./FAQ";
// import Testimonials from "./Testimonials";
// import Newsletters from "./Newsletters";
// import HowItWorks from "./HowItWorks";
// import Partners from "./Partners";

// export default function Home() {
//   const [jobs, setJobs] = useState([]);

// const [loading, setLoading] = useState(true);
// useEffect(() => {
//   axios.get(`${import.meta.env.VITE_API_URL}/jobs/latest`)
//     .then(res => {
//       setJobs(res.data);
//       setLoading(false);
//     })
//     .catch(err => {
//       console.error(err);
//       setLoading(false);
//     });
// }, []);

//   return (
//     <div className="container mx-auto px-4 py-10">
//       {/*1/ Banner */}
//       {/* <section
//         className="text-center w-full mb-12 bg-cover bg-center bg-no-repeat bg-gray-100 py-3"
//         style={{ backgroundImage: `url(${bannerImg})`, padding: "10%" }}
//       >
//         <motion.h1
//           className="text-5xl font-bold mb-4"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           Find Reliable Freelancers Fast
//         </motion.h1>
//         <motion.p
//           className="mb-6 text-gray-950"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.2, duration: 0.6 }}
//         >
//           Join FreelanceHub — your go-to marketplace for finding and posting
//           freelance jobs.
//         </motion.p>

//         <motion.div
//           className="space-x-4"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.4, duration: 0.6 }}
//         >
//           <Link to="/addJobs" className="btn btn-primary">
//             Create a Job
//           </Link>
//           <Link to="/allJobs" className="btn btn-secondary">
//             Explore Jobs
//           </Link>
//         </motion.div>
//       </section> */}
//       <Hero></Hero>
//       {/* 2. Partners / Trusted By (Small, clean logos) */}
//       <Partners></Partners>

//       <div className="container mx-auto px-4 space-y-20 py-16">
//       {/* 3. Statistics Section (Visual impact) */}
//         <StatsSection />

      
//       {/*4. Latest Jobs */}
//       <section>
//         <h2 className="text-3xl font-bold mb-6 text-center">Latest Jobs</h2>
//         {loading ? (
//     <div className="flex justify-center py-12">
//       <span className="loading loading-spinner loading-lg text-blue-600"></span>
//     </div>
//   ) : (
//         <div className="grid md:grid-cols-4 gap-6">
//           {Array.isArray(jobs) && 
//           jobs.length > 0 ? (
//             jobs.map((job) => (
//               <div key={job._id} className="job-card">
//                 <img src={job.coverImage} alt={job.title} />
//                 <h3>{job.title}</h3>
//                 <p>{job.summary?.slice(0, 60)}...</p>
//                 <Link to={`/allJobs/${job._id}`} className="btn btn-primary">
//                   View Details
//                 </Link>
//               </div>
//             ))
//           ) : (
//             <p className="text-center text-gray-500">No jobs found.</p>
//           )}
//         </div>
//   )}
//       </section>

//       {/* Two Enchanted Static Sections */}
// <section className="grid md:grid-cols-2 gap-6 mt-16">
//       {/*5. Top Categories (as Services) */}
//   <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-6">
//     <div className="flex items-center mb-5">
//       <div className="bg-blue-100 p-2 rounded-lg mr-3">
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm9-12a2 2 0 01-2-2V5a2 2 0 012-2h4a2 2 0 012 2v2a2 2 0 01-2 2h-4z" />
//         </svg>
//       </div>
//       <h3 className="text-xl font-bold text-gray-800">Top Categories</h3>
//     </div>

//     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//       {[
//         { name: "Web Development", icon: "💻", desc: "Frontend, Backend, Full-stack" },
//         { name: "Digital Marketing", icon: "📈", desc: "SEO, Ads, Analytics" },
//         { name: "Graphic Design", icon: "🎨", desc: "Branding, UI/UX, Print" },
//         { name: "Writing & Translation", icon: "✍️", desc: "Content, Copy, Localization" },
//       ].map((cat, i) => (
//         <div 
//           key={i} 
//           className="flex items-start p-3 rounded-lg bg-gray-50 hover:bg-blue-50 transition group"
//         >
//           <span className="text-xl mr-3 mt-0.5 group-hover:text-blue-600 transition">
//             {cat.icon}
//           </span>
//           <div>
//             <h4 className="font-semibold text-gray-800">{cat.name}</h4>
//             <p className="text-sm text-gray-600 mt-1">{cat.desc}</p>
//           </div>
//         </div>
//       ))}
//     </div>

//     <Link 
//       to="/allJobs" 
//       className="mt-4 inline-flex items-center text-blue-600 font-medium hover:text-blue-800 group"
//     >
//       Browse all categories
//       <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
//       </svg>
//     </Link>
//   </div>
//       {/* 6. How It Works */}
//         <HowItWorks></HowItWorks>
//       {/* 7. About Freelance MarketPlace (Why Choose Us) */}
  
//   <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
//     <div className="flex items-center mb-5">
//       <div className="bg-indigo-100 p-2 rounded-lg mr-3">
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
//         </svg>
//       </div>
//       <h3 className="text-xl font-bold text-gray-800">Why FreelanceHub?</h3>
//     </div>

//     <ul className="space-y-4 mb-6">
//       {[
//         { title: "Fast Matching", desc: "Get matched with the right freelancer in under 24 hours." },
//         { title: "Verified Talent", desc: "All freelancers are manually reviewed for quality & reliability." },
//         { title: "Secure Collaboration", desc: "Built-in messaging and milestone tracking for smooth workflows." },
//       ].map((item, i) => (
//         <li key={i} className="flex">
//           <span className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-500 flex items-center justify-center mr-3 mt-0.5">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
//               <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//             </svg>
//           </span>
//           <div>
//             <h4 className="font-semibold text-gray-800">{item.title}</h4>
//             <p className="text-gray-600 text-sm">{item.desc}</p>
//           </div>
//         </li>
//       ))}
//     </ul>
  

//     <div className="bg-white rounded-lg p-4 border border-gray-200">
//       <p className="text-gray-700 italic">
//         <span className="font-semibold text-gray-800">“</span>
//         FreelanceHub connects skilled freelancers and clients in a seamless environment where projects come alive.
//         <span className="font-semibold text-gray-800">”</span>
//       </p>
//     </div>
//   </div>
// </section>

//       {/* 8.  Testimonials */}
//         <Testimonials />
//       {/* 9. FAQ Section (Helpful Info) */}
//         <FAQ />
//       {/* 10. Newsletter / CTA (Final Engagement) */}
//         <Newsletters />

//       {/* About FreelanceHub */}
//       <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
//         <div className="container mx-auto px-4">
//           {/* Header */}
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
//               About <span className="text-blue-600">FreelanceHub</span>
//             </h2>
//             <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
//             <p className="mt-6 max-w-2xl mx-auto text-gray-600">
//               FreelanceHub connects skilled freelancers and clients in a
//               seamless environment where projects come alive.
//             </p>
//           </div>

//           {/* Stats / Why Choose Us */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
//             <div className="text-center p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition">
//               <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 text-blue-600 mb-4">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-7 w-7"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M13 10V3L4 14h7v7l9-11h-7z"
//                   />
//                 </svg>
//               </div>
//               <h3 className="text-xl font-semibold text-gray-800 mb-2">
//                 Fast & Reliable
//               </h3>
//               <p className="text-gray-600">
//                 Post a job and get matched with vetted freelancers in under 24
//                 hours.
//               </p>
//             </div>

//             <div className="text-center p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition">
//               <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-green-100 text-green-600 mb-4">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-7 w-7"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
//                   />
//                 </svg>
//               </div>
//               <h3 className="text-xl font-semibold text-gray-800 mb-2">
//                 Secure & Trusted
//               </h3>
//               <p className="text-gray-600">
//                 Escrow payments and verified profiles ensure safe collaboration.
//               </p>
//             </div>

//             <div className="text-center p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition">
//               <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-purple-100 text-purple-600 mb-4">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-7 w-7"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
//                   />
//                 </svg>
//               </div>
//               <h3 className="text-xl font-semibold text-gray-800 mb-2">
//                 Global Talent
//               </h3>
//               <p className="text-gray-600">
//                 Access 10,000+ vetted freelancers across 80+ countries and
//                 specialties.
//               </p>
//             </div>
//           </div>

//           {/* CTA Banner */}
//           <div className="bg-blue-600 rounded-2xl p-8 md:p-12 text-center text-white">
//             <h3 className="text-2xl md:text-3xl font-bold mb-4">
//               Ready to Build Something Amazing?
//             </h3>
//             <p className="max-w-2xl mx-auto mb-6 opacity-90">
//               Join thousands of clients and freelancers who trust FreelanceHub
//               for seamless collaboration.
//             </p>
//             <div className="flex flex-col sm:flex-row justify-center gap-4">
//               <Link
//                 to="/register"
//                 className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition"
//               >
//                 Get Started
//               </Link>
//               <Link
//                 to="/allJobs"
//                 className="px-6 py-3 bg-blue-400 border-2 border-white text-gray-700 font-semibold rounded-lg hover:bg-blue-600 transition"
//               >
//                 Explore Jobs
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//     </div>
//   );
// }
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router";
import Hero from "./Hero";
import StatsSection from "./StatsSection";
import FAQ from "./FAQ";
import Testimonials from "./Testimonials";
import Newsletters from "./Newsletters";
import HowItWorks from "./HowItWorks";
import Partners from "./Partners";
import JobCard from "../JobCard";

export default function Home() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/jobs/latest`)
      .then(res => {
        setJobs(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="bg-base-100">
      {/* SECTION 1: HERO (Full-width) */}
      <Hero />

      {/* SECTION 2: PARTNERS (Full-width, clean) */}
      <Partners />

      <div className="container mx-auto px-4 py-16 space-y-24">
        
        {/* SECTION 3: STATISTICS */}
        <StatsSection />

        {/* SECTION 4: LATEST JOBS */}
        <section>
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-2">Latest Opportunities</h2>
            <p className="text-gray-500">Hand-picked projects just for you</p>
          </div>
          {loading ? (
            <div className="flex justify-center py-12">
              <span className="loading loading-spinner loading-lg text-blue-600"></span>
            </div>
          ) : (
          //   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          //     {jobs.map((job) => (
          //       <div key={job._id} className="card bg-base-100 shadow-sm border border-base-200 hover:shadow-md transition-all h-full">
          //         <figure className="px-4 pt-4">
          //           <img src={job.coverImage} alt={job.title} className="rounded-xl h-40 w-full object-cover" />
          //         </figure>
          //         <div className="card-body p-5">
          //           <h3 className="card-title text-md font-bold truncate">{job.title}</h3>
          //           <p className="text-sm text-gray-500 line-clamp-2">{job.summary}</p>
          //           <div className="card-actions mt-4">
          //             <Link to={`/allJobs/${job._id}`} className="btn btn-primary btn-sm btn-block">
          //               View Details
          //             </Link>
          //           </div>
          //         </div>
          //       </div>
          //     ))}
          //   </div>
          // )}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {jobs.map((job) => (
        <JobCard key={job._id} job={job} />
      ))}
    </div>
  )}
        </section>
        <div className="text-center mt-12">
    <Link to="/allJobs" className="btn btn-primary btn-outline rounded-full px-10">
        Browse All Jobs
    </Link>
</div>

        {/* SECTION 5 & 6: TWO ENCHANTED SECTIONS */}
        <section className="grid lg:grid-cols-2 gap-10 items-stretch">
          {/* Top Categories */}
          <div className="bg-white rounded-2xl shadow-sm border p-8">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-3 rounded-lg mr-4">
                 <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-2xl font-bold">Top Categories</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: "Web Development", icon: "💻", desc: "Build modern apps" },
                { name: "Graphic Design", icon: "🎨", desc: "Creative visuals" },
                { name: "Marketing", icon: "📈", desc: "Grow businesses" },
                { name: "Writing", icon: "✍️", desc: "Content strategy" },
              ].map((cat, i) => (
                <div key={i} className="p-4 rounded-xl bg-gray-50 hover:bg-blue-50 transition border border-transparent hover:border-blue-200">
                  <span className="text-2xl block mb-2">{cat.icon}</span>
                  <h4 className="font-bold text-sm">{cat.name}</h4>
                </div>
              ))}
            </div>
          </div>

          {/* Why FreelanceHub */}
          <div className="bg-gradient-to-br from-blue-600 to-indigo-800 rounded-2xl p-8 text-white">
             <h3 className="text-2xl font-bold mb-6">Why FreelanceHub?</h3>
             <ul className="space-y-6">
                <li className="flex gap-4">
                   <div className="bg-white/20 p-2 rounded-full h-fit">✔️</div>
                   <div><p className="font-bold">Fast Matching</p><p className="text-blue-100 text-sm">Find talent in 24 hours.</p></div>
                </li>
                <li className="flex gap-4">
                   <div className="bg-white/20 p-2 rounded-full h-fit">✔️</div>
                   <div><p className="font-bold">Secure Escrow</p><p className="text-blue-100 text-sm">Payments are always protected.</p></div>
                </li>
                <li className="flex gap-4">
                   <div className="bg-white/20 p-2 rounded-full h-fit">✔️</div>
                   <div><p className="font-bold">Verified Profiles</p><p className="text-blue-100 text-sm">Manual review for every user.</p></div>
                </li>
             </ul>
          </div>
        </section>

        {/* SECTION 7: HOW IT WORKS */}
        <HowItWorks />

        {/* SECTION 8: ABOUT DETAILED (Your bottom About section) */}
        <section className="py-12 border-y">
            <div className="text-center mb-12">
               <h2 className="text-3xl font-bold">About <span className="text-blue-600">FreelanceHub</span></h2>
               <p className="max-w-xl mx-auto mt-4 text-gray-500">Connecting global talent with world-class opportunities in a seamless ecosystem.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
               <div className="p-6 bg-base-200 rounded-xl text-center">
                  <h4 className="font-bold mb-2">Our Mission</h4>
                  <p className="text-sm">To empower independent professionals worldwide.</p>
               </div>
               <div className="p-6 bg-base-200 rounded-xl text-center">
                  <h4 className="font-bold mb-2">Our Vision</h4>
                  <p className="text-sm">To be the most trusted freelance marketplace.</p>
               </div>
               <div className="p-6 bg-base-200 rounded-xl text-center">
                  <h4 className="font-bold mb-2">Our Value</h4>
                  <p className="text-sm">Transparency, security, and global growth.</p>
               </div>
            </div>
        </section>

        {/* SECTION 9: TESTIMONIALS */}
        <Testimonials />

        {/* SECTION 10: FAQ */}
        <FAQ />

        {/* SECTION 11: NEWSLETTER (Final CTA) */}
        <Newsletters />

      </div>
    </div>
  );
}
