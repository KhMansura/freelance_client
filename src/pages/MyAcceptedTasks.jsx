import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import { toast } from "react-toastify";

const MyAcceptedTasks = () => {
  const { user } = useAuth();
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

//   const fetchTasks = async () => {
//     if (!user) return setLoading(false);
//     try {
//       setLoading(true);
//       const { data } = await axios.get(`http://localhost:3000/acceptedTasks?userEmail=${encodeURIComponent(user.email)}`);
//       setTasks(data || []);
//     } catch (err) {
//       console.error(err);
//       toast.error("Failed to fetch accepted tasks");
//     } finally {
//       setLoading(false);
//     }
//   };

const fetchTasks = async () => {
  if (!user) return setLoading(false);
  try {
    setLoading(true);
    // ✅ Use correct route & param: GET /accepted-tasks?email=...
    const { data } = await axios.get(`http://localhost:3000/accepted-tasks`, {
      params: { email: user.email }  // ✅ not `userEmail`
    });
    setTasks(Array.isArray(data) ? data : []);
  } catch (err) {
    console.error("Fetch tasks error:", err);
    toast.error("Failed to load accepted tasks");
  } finally {
    setLoading(false);
  }
};

  useEffect(() => {
    fetchTasks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

//   const handleDoneOrCancel = async (taskId) => {
//     try {
//       await axios.delete(`http://localhost:3000/acceptedTasks/${taskId}`);
//       setTasks(prev => prev.filter(t => t._id !== taskId));
//       toast.success("Task removed");
//     } catch (err) {
//       console.error(err);
//       toast.error("Failed to remove task");
//     }
//   };

// const handleDoneOrCancel = async (taskId) => {
//   if (!taskId) return toast.error("Invalid task ID");

//   try {
//     // ✅ Use correct route: /accepted-tasks/:id (with hyphen)
//     await axios.delete(`http://localhost:3000/accepted-tasks/${taskId}`);
    
//     setTasks(prev => prev.filter(t => t._id !== taskId));
//     toast.success("Task removed");
//   } catch (err) {
//     console.error("Delete task error:", err.response?.data || err.message);
//     const msg = err.response?.data?.error || "Failed to remove task";
//     toast.error(msg);
//   }
// };
const handleDoneOrCancel = async (taskId) => {
  if (!user) return toast.error("You must be logged in");
  if (!taskId) return toast.error("Invalid task ID");

  try {
    const token = await user.getIdToken(); // ✅ get JWT token from Firebase

    await axios.delete(
      `${import.meta.env.VITE_API_URL || "http://localhost:3000"}/accepted-tasks/${taskId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`, // ✅ send token in request header
        },
      }
    );

    // ✅ update UI instantly
    setTasks((prev) => prev.filter((t) => t._id !== taskId));
    toast.success("Removed from your tasks");
  } catch (err) {
    console.error("Delete error:", err.response?.data || err.message);
    toast.error(err.response?.data?.error || "Action failed");
  }
};


  if (loading) return <div className="loader">Loading...</div>;
  if (!user) return <div className="container mx-auto px-4 py-8">
    Please log in to see your accepted tasks.</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-4">My Accepted Tasks</h2>
      {tasks.length === 0 && <p>No accepted tasks yet.</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tasks.map(t => (
          <div key={t._id} className="job-card">
            <h3 className="font-bold">{t.jobTitle}</h3>
            <p className="text-sm text-gray-600">Accepted at: {new Date(t.acceptedAt).toLocaleString()}</p>
            <div className="flex gap-3 mt-3">
              <button onClick={() => handleDoneOrCancel(t._id)} className="btn btn-success">Done</button>
              <button onClick={() => handleDoneOrCancel(t._id)} className="btn btn-error">Cancel</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAcceptedTasks;
