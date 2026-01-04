// import { useEffect, useState } from "react";
// import { Link } from "react-router";
// import axios from "axios";
// import { toast } from "react-toastify";

// export default function AllJobs() {
//   const [jobs, setJobs] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [sort, setSort] = useState("newest");

//   useEffect(() => {
//     const fetchJobs = async () => {
//       try {
//         const res = await axios.get(`${import.meta.env.VITE_API_URL}/jobs`, {
//           params: { sort },
//         });
//         setJobs(res.data || []);
//       } catch (err) {
//         console.error(err);
//         toast.error("Failed to load jobs");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchJobs();
//   }, [sort]);

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-3xl font-bold">All Jobs</h1>
//         <div>
//           <label className="mr-2 text-gray-700">Sort by:</label>
//           <select
//             value={sort}
//             onChange={(e) => setSort(e.target.value)}
//             className="select select-bordered select-sm"
//           >
//             <option value="newest">Newest First</option>
//             <option value="oldest">Oldest First</option>
//           </select>
//         </div>
//       </div>

//       {loading ? (
//         <div className="flex justify-center py-12">
//           <span className="loading loading-spinner loading-lg text-blue-600"></span>
//         </div>
//       ) : jobs.length === 0 ? (
//         <p className="text-center text-gray-500">No jobs available.</p>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {jobs.map((job) => (
//             <div
//               key={job._id}
//               className="bg-white rounded-lg shadow-md border border-gray-200 flex flex-col h-full"
//             >
//               {job.coverImage && (
//                 <img
//                   src={job.coverImage}
//                   alt={job.title}
//                   className="w-full h-40 object-cover rounded-t"
//                 />
//               )}
//               <div className="p-4 flex flex-col flex-grow">
//                 <div className="flex justify-between items-start mb-2">
//                   <h3 className="font-bold text-lg line-clamp-1">
//                     {job.title}
//                   </h3>
//                   <span className="badge badge-ghost">{job.category}</span>
//                 </div>
//                 <p className="text-gray-600 text-sm mb-3 line-clamp-2">
//                   {job.summary}
//                 </p>
//                 <p className="text-xs text-gray-500 mb-3">
//                   Posted by <span className="font-medium">{job.postedBy}</span>
//                 </p>
//                 <Link
//                   to={`/allJobs/${job._id}`}
//                   className="mt-auto btn btn-primary btn-sm w-full"
//                 >
//                   View Details
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }
// import { useEffect, useState } from "react";
// import axios from "axios";
// import JobCard, { JobSkeleton } from "../Components/JobCard";

// export default function AllJobs() {
//   const [jobs, setJobs] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [search, setSearch] = useState("");
//   const [category, setCategory] = useState("");
//   const [sort, setSort] = useState("newest");

//   // Pagination States
//   const [currentPage, setCurrentPage] = useState(1);
//   const jobsPerPage = 8;

//   useEffect(() => {
//     const fetchJobs = async () => {
//       setLoading(true);
//       try {
//         // Professional MERN approach: Sending queries to the backend
//         const res = await axios.get(`${import.meta.env.VITE_API_URL}/jobs`, {
//           params: { search, category, sort }
//         });
//         setJobs(res.data || []);
//         setCurrentPage(1); // Reset to page 1 on search/filter
//       } catch (err) {
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchJobs();
//   }, [search, category, sort]);

//   // Client-side Pagination Logic
//   const indexOfLastJob = currentPage * jobsPerPage;
//   const indexOfFirstJob = indexOfLastJob - jobsPerPage;
//   const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);
//   const totalPages = Math.ceil(jobs.length / jobsPerPage);

//   const handleReset = () => {
//     setSearch("");
//     setCategory("");
//     setSort("newest");
//   };

//   return (
//     <div className="bg-base-200 min-h-screen pb-20">
//       <div className="container mx-auto px-4 py-12">

//         <div className="text-center mb-10">
//     <h1 className="text-4xl font-extrabold text-base-content tracking-tight">
//       Explore All <span className="text-primary">Opportunities</span>
//     </h1>
//     <p className="text-gray-500 mt-2">Find the perfect project that matches your expertise</p>
//   </div>

        
//         {/* --- Header & Search Section --- */}
//         <div className="bg-base-100 p-6 rounded-2xl shadow-sm border border-base-300 mb-10">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
            
//             {/* 1. Search Bar */}
//             <div className="md:col-span-2 form-control">
//               <label className="label"><span className="label-text font-bold">Search Jobs</span></label>
//               <div className="relative">
//                 <input 
//                   type="text" 
//                   placeholder="e.g. Frontend Developer..." 
//                   className="input input-bordered w-full pl-10"
//                   value={search}
//                   onChange={(e) => setSearch(e.target.value)}
//                 />
//                 <span className="absolute left-3 top-3.5 opacity-40">🔍</span>
//               </div>
//             </div>

//             {/* 2. Category Filter */}
//             <div className="form-control">
//               <label className="label"><span className="label-text font-bold">Category</span></label>
//               <select 
//                 className="select select-bordered w-full"
//                 value={category}
//                 onChange={(e) => setCategory(e.target.value)}
//               >
//                 <option value="">All Categories</option>
//                 <option value="Web Development">Web Development</option>
//                 <option value="Digital Marketing">Digital Marketing</option>
//                 <option value="Graphic Design">Graphic Design</option>
//                 <option value="Writing">Writing</option>
//               </select>
//             </div>

//             {/* 3. Sort */}
//             <div className="form-control">
//               <label className="label"><span className="label-text font-bold">Sort By</span></label>
//               <select 
//                 className="select select-bordered w-full"
//                 value={sort}
//                 onChange={(e) => setSort(e.target.value)}
//               >
//                 <option value="newest">Newest First</option>
//                 <option value="oldest">Oldest First</option>
//                 <option value="price-asc">Price: Low to High</option>
//                 <option value="price-desc">Price: High to Low</option>
//               </select>
//             </div>
//           </div>
          
//           <div className="mt-4 flex justify-between items-center">
//              <p className="text-xs text-gray-500">Showing {jobs.length} total results</p>
//              <button onClick={handleReset} className="btn btn-ghost btn-xs text-primary underline">Reset Filters</button>
//           </div>
//         </div>

//         {/* --- Jobs Grid --- */}
//         {loading ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {[...Array(8)].map((_, n) => <JobSkeleton key={n} />)}
//           </div>
//         ) : jobs.length === 0 ? (
//           <div className="text-center py-20 bg-base-100 rounded-3xl border border-dashed border-base-300">
//              <div className="text-5xl mb-4">🏜️</div>
//              <h2 className="text-xl font-bold">No jobs found</h2>
//              <p className="opacity-60">Try adjusting your search or filters.</p>
//           </div>
//         ) : (
//           <>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//               {currentJobs.map((job) => (
//                 <JobCard key={job._id} job={job} />
//               ))}
//             </div>

//             {/* --- Pagination --- */}
//             {totalPages > 1 && (
//               <div className="flex justify-center mt-12 join shadow-sm">
//                 <button 
//                   disabled={currentPage === 1}
//                   onClick={() => setCurrentPage(p => p - 1)}
//                   className="join-item btn btn-outline border-base-300"
//                 >«</button>
                
//                 {[...Array(totalPages)].map((_, i) => (
//                   <button 
//                     key={i}
//                     onClick={() => setCurrentPage(i + 1)}
//                     className={`join-item btn border-base-300 ${currentPage === i + 1 ? 'btn-primary' : 'btn-outline'}`}
//                   >
//                     {i + 1}
//                   </button>
//                 ))}

//                 <button 
//                   disabled={currentPage === totalPages}
//                   onClick={() => setCurrentPage(p => p + 1)}
//                   className="join-item btn btn-outline border-base-300"
//                 >»</button>
//               </div>
//             )}
//           </>
//         )}
//       </div>
//     </div>
//   );
// }
import { useEffect, useState } from "react";
import axios from "axios";
import { FaSearch, FaFilter, FaSortAmountDown } from "react-icons/fa";
import JobCard, { JobSkeleton } from "../components/JobCard";

export default function AllJobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Requirement #5 States
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("newest");
  
  // Pagination States
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 8; 

  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/jobs`, {
          params: { search, category, sort }
        });
        setJobs(res.data || []);
        setCurrentPage(1); // Reset to page 1 when filters change
      } catch (err) {
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, [search, category, sort]);

  // Client-side Pagination Logic
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);
  const totalPages = Math.ceil(jobs.length / jobsPerPage);

  return (
    <div className="bg-base-200 min-h-screen pt-28 pb-20">
      <div className="container mx-auto px-4">
        
        {/* 1. Page Heading */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-black text-base-content tracking-tight">
            Browse <span className="text-primary">All Jobs</span>
          </h1>
          <p className="text-gray-500 mt-2 italic">Requirement #5: Fully functional search and filtering</p>
        </div>

        {/* 2. Filter Bar (Search + Category + Sort) */}
        <div className="bg-base-100 p-6 rounded-2xl shadow-sm border border-base-300 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 items-end">
            
            {/* Search Input */}
            <div className="lg:col-span-2 relative">
              <label className="label-text font-bold mb-2 block">Search by Title</label>
              <div className="relative">
                <FaSearch className="absolute left-4 top-4 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="e.g. Web Developer..." 
                  className="input input-bordered w-full pl-12"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>

            {/* Category Filter (Field 1) */}
            <div>
              <label className="label-text font-bold mb-2 block">Category</label>
              <select 
                className="select select-bordered w-full"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">All Categories</option>
                <option value="Web Development">Web Development</option>
                <option value="Digital Marketing">Digital Marketing</option>
                <option value="Graphic Design">Graphic Design</option>
              </select>
            </div>

            {/* Sorting Option */}
            <div>
              <label className="label-text font-bold mb-2 block">Sort By</label>
              <select 
                className="select select-bordered w-full"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* 3. Content Grid */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => <JobSkeleton key={i} />)}
          </div>
        ) : jobs.length === 0 ? (
          <div className="text-center py-20 bg-base-100 rounded-3xl border border-dashed border-base-300">
             <h2 className="text-xl font-bold opacity-40 uppercase tracking-widest">No Results Found</h2>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 min-h-[400px]">
              {currentJobs.map((job) => (
                <JobCard key={job._id} job={job} />
              ))}
            </div>

            {/* 4. Pagination (DaisyUI Join Component) */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-12 join shadow-sm">
                <button 
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage(p => p - 1)}
                  className="join-item btn btn-outline"
                >Prev</button>
                
                {[...Array(totalPages)].map((_, i) => (
                  <button 
                    key={i}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`join-item btn ${currentPage === i + 1 ? 'btn-primary' : 'btn-outline'}`}
                  >
                    {i + 1}
                  </button>
                ))}

                <button 
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage(p => p + 1)}
                  className="join-item btn btn-outline"
                >Next</button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}