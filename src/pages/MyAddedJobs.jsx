import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

export default function MyAddedJobs() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchJobs = async () => {
    if (!user) return setLoading(false);
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/jobs`, {
        params: { email: user.email } // ✅ fetch user's jobs
      });
      setJobs(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Fetch jobs error:", err);
      toast.error("Failed to load your jobs");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, [user]);

  // ✅ DELETE JOB WITH TOKEN
  const handleDelete = async (jobId) => {
    try {
      const token = await user.getIdToken(); // 🔑
      await axios.delete(
        `${import.meta.env.VITE_API_URL}/jobs/${jobId}`,
        { headers: { Authorization: `Bearer ${token}` } } // 🔐
      );
      setJobs(jobs.filter(job => job._id !== jobId));
      toast.success("Job deleted");
    } catch (err) {
      console.error("Delete error:", err.response?.data || err.message);
      const msg = err.response?.data?.error || "Delete failed";
      toast.error(msg);
    }
  };

  // ✅ CONFIRM + DELETE
  const confirmDelete = async (jobId) => {
    const result = await Swal.fire({
      title: "Delete Job?",
      text: "This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete",
      cancelButtonText: "Cancel",
    });
    if (result.isConfirmed) handleDelete(jobId);
  };

  if (loading) return <div className="loader">Loading your jobs...</div>;
  if (!user) return <div className="container mx-auto px-4 py-8">Please log in.</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">My Added Jobs</h1>
      {jobs.length === 0 ? (
        <p className="text-gray-500">You haven’t posted any jobs yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map(job => (
            <div key={job._id} className="job-card">
              {job.coverImage && (
                <img
                  src={job.coverImage}
                  alt={job.title}
                  className="w-full h-40 object-cover rounded mb-3"
                />
              )}
              <h3 className="font-bold text-lg">{job.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{job.category}</p>
              <p className="text-sm mb-3 line-clamp-2">{job.summary}</p>
              <div className="flex gap-2">
                <button
                  onClick={() => navigate(`/updateJob/${job._id}`)}
                  className="btn btn-sm btn-secondary"
                >
                  Edit
                </button>
                <button
                  onClick={() => confirmDelete(job._id)}
                  className="btn btn-sm btn-outline btn-error"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}