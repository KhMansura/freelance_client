import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router";

const AllJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sort, setSort] = useState("newest"); // for challenge sorting

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/jobs");
        if (!mounted) return;
        const sorted = [...data].sort((a,b) => {
          const ta = new Date(a.postedAt || a.createdAt || 0).getTime();
          const tb = new Date(b.postedAt || b.createdAt || 0).getTime();
          return sort === "newest" ? tb - ta : ta - tb;
        });
        setJobs(sorted);
      } catch (err) {
        console.error(err);
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => (mounted = false);
  }, [sort]);

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">All Jobs</h1>
        <div>
          <select value={sort} onChange={(e)=>setSort(e.target.value)} className="select select-bordered">
            <option value="newest">Newest first</option>
            <option value="oldest">Oldest first</option>
          </select>
        </div>
      </div>

      {loading ? (
        <div className="loader">Loading...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {jobs.map(job => (
            <div key={job._id} className="job-card">
              {job.coverImage && <img src={job.coverImage} alt={job.title} />}
              <h3 className="font-bold">{job.title}</h3>
              <p className="text-sm text-gray-600">{job.category} • {job.postedBy}</p>
              <p className="text-sm line-clamp-3 mt-2">{job.summary}</p>
              <div className="flex justify-between mt-4">
                <Link to={`/allJobs/${job._id}`} className="btn btn-primary btn-sm">View Details</Link>
                <span className="text-xs text-gray-500">{new Date(job.postedAt || job.createdAt || Date.now()).toLocaleDateString()}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
};

export default AllJobs;
