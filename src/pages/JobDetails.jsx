import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import axios from "axios";
import useAuth from "../hooks/useAuth";
import { toast } from "react-toastify";

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const { data } = await axios.get(`http://localhost:3000/jobs/${id}`);
        if (mounted) setJob(data);
      } catch (err) {
        console.error(err);
        toast.error("Failed to load job");
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => (mounted = false);
  }, [id]);

  const handleAccept = async () => {
    if (!user) return toast.error("Please log in to accept jobs");
    if (job.userEmail === user.email) return toast.error("You cannot accept your own job");

    try {
      await axios.post("http://localhost:3000/acceptedTasks", {
        jobId: job._id,
        jobTitle: job.title,
        acceptedBy: user.displayName || user.email,
        userEmail: user.email,
        acceptedAt: new Date().toISOString()
      });
      toast.success("Job accepted — check My Accepted Tasks");
      navigate("/my-accepted-tasks");
    } catch (err) {
      console.error(err);
      toast.error("Failed to accept job");
    }
  };

  const handleDelete = async () => {
    if (!user) return toast.error("Unauthorized");
    if (job.userEmail !== user.email) return toast.error("You can only delete your own job");
    if (!confirm("Delete this job? This cannot be undone.")) return;

    try {
      await axios.delete(`http://localhost:3000/jobs/${job._id}`);
      toast.success("Job deleted");
      navigate("/allJobs");
    } catch (err) {
      console.error(err);
      toast.error("Failed to delete job");
    }
  };

  if (loading) return <div className="loader">Loading...</div>;
  if (!job) return <div className="container mx-auto px-4 py-8">Job not found.</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded shadow p-6">
        {job.coverImage && <img src={job.coverImage} alt={job.title} className="w-full h-64 object-cover rounded mb-4" />}
        <h1 className="text-2xl font-bold mb-2">{job.title}</h1>
        <p className="text-sm text-gray-600 mb-4">{job.category} • Posted by {job.postedBy}</p>
        <p className="mb-4">{job.summary}</p>

        <div className="flex gap-3">
          <button onClick={handleAccept} className="btn btn-primary">Accept</button>
          {user && job.userEmail === user.email && (
            <>
              <button onClick={() => navigate(`/updateJob/${job._id}`)} className="btn btn-secondary">Edit</button>
              <button onClick={handleDelete} className="btn btn-outline">Delete</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
 export default JobDetails;

 // import { useEffect, useState } from "react";
// import { useParams } from "react-router";
// import axios from "axios";
// import { toast } from "react-toastify";
// import useAuth from "../hooks/useAuth";

// export default function JobDetails() {
//   const { id } = useParams();
//   const { user } = useAuth();
//   const [job, setJob] = useState(null);

//   useEffect(() => {
//     axios.get(`${import.meta.env.VITE_API_URL}/jobs/${id}`)
//       .then(res => setJob(res.data))
//       .catch(console.error);
//   }, [id]);

//   const handleAccept = async () => {
//     try {
//       await axios.post(`${import.meta.env.VITE_API_URL}/accept-job/${id}`, {
//         userEmail: user.email,
//       });
//       toast.success("Job accepted successfully!");
//     } catch (err) {
//       toast.error(err.response?.data?.error || "Error accepting job.");
//     }
//   };

//   if (!job) return <div className="text-center mt-20">Loading...</div>;

//   return (
//     <div className="container mx-auto px-4 py-10 max-w-3xl">
//       <img src={job.coverImage} alt={job.title} className="w-full rounded-lg mb-6" />
//       <h1 className="text-4xl font-bold mb-2">{job.title}</h1>
//       <p className="text-gray-600 mb-4">Category: {job.category}</p>
//       <p className="mb-6">{job.summary}</p>
//       {user?.email !== job.userEmail && (
//         <button onClick={handleAccept} className="btn btn-primary">Accept Job</button>
//       )}
//     </div>
//   );
// }
