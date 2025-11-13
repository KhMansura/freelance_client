import { useEffect, useState } from "react";
import { Link } from "react-router";
import axios from "axios";
import { toast } from "react-toastify";

export default function AllJobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sort, setSort] = useState("newest");

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/jobs`, {
          params: { sort },
        });
        setJobs(res.data || []);
      } catch (err) {
        console.error(err);
        toast.error("Failed to load jobs");
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, [sort]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">All Jobs</h1>
        <div>
          <label className="mr-2 text-gray-700">Sort by:</label>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="select select-bordered select-sm"
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
          </select>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center py-12">
          <span className="loading loading-spinner loading-lg text-blue-600"></span>
        </div>
      ) : jobs.length === 0 ? (
        <p className="text-center text-gray-500">No jobs available.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <div
              key={job._id}
              className="bg-white rounded-lg shadow-md border border-gray-200 flex flex-col h-full"
            >
              {job.coverImage && (
                <img
                  src={job.coverImage}
                  alt={job.title}
                  className="w-full h-40 object-cover rounded-t"
                />
              )}
              <div className="p-4 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-lg line-clamp-1">
                    {job.title}
                  </h3>
                  <span className="badge badge-ghost">{job.category}</span>
                </div>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {job.summary}
                </p>
                <p className="text-xs text-gray-500 mb-3">
                  Posted by <span className="font-medium">{job.postedBy}</span>
                </p>
                <Link
                  to={`/allJobs/${job._id}`}
                  className="mt-auto btn btn-primary btn-sm w-full"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
