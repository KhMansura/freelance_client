
import { useEffect, useState } from "react";
import axios from "axios";
import { FaSearch, FaFilter, FaSortAmountDown } from "react-icons/fa";
import JobCard , { JobSkeleton } from "../Components/JobCard";


export default function AllJobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  
  //  States
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
        setCurrentPage(1);
      } catch (err) {
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, [search, category, sort]);

  // Client-side Pagination
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
          <p className="text-gray-500 mt-2 italic"> Fully functional search and filtering</p>
        </div>

        {/* 2. Filter Bar */}
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

            {/* Category Filter */}
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

            {/* 4. Pagination */}
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