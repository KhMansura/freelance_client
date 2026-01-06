
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
      {/* SECTION 1: HERO  */}
      <Hero />

      {/* SECTION 2: PARTNERS */}
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

        
        <section className="grid lg:grid-cols-2 gap-10 items-stretch">
{/* Top Categories */}
<div className="bg-white dark:bg-neutral rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-8 transition-colors duration-300">
  <div className="flex items-center mb-6">
    {/* Icon Container with dark mode support */}
    <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg mr-4">
       <span className="text-2xl">🚀</span>
    </div>
    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Top Categories</h3>
  </div>
  
  <div className="grid grid-cols-2 gap-4">
    {[
      { name: "Web Development", icon: "💻", desc: "Build modern apps" },
      { name: "Graphic Design", icon: "🎨", desc: "Creative visuals" },
      { name: "Marketing", icon: "📈", desc: "Grow businesses" },
      { name: "Writing", icon: "✍️", desc: "Content strategy" },
    ].map((cat, i) => (
      <div 
        key={i} 
        className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all border border-transparent hover:border-blue-200 dark:hover:border-blue-700 group"
      >
        <span className="text-2xl block mb-2">{cat.icon}</span>
        <h4 className="font-bold text-sm text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400">
            {cat.name}
        </h4>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{cat.desc}</p>
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

        {/* SECTION 8: ABOUT DETAILED */}
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

        {/* SECTION 11: NEWSLETTER */}
        <Newsletters />

      </div>
    </div>
  );
}
