// import React, { useEffect, useState } from "react";
// import useAuth from "../hooks/useAuth";
// import axios from "axios";
// import { toast } from "react-toastify";

// const MyAcceptedTasks = () => {
//   const { user } = useAuth();
//   const [tasks, setTasks] = useState([]);
//   const [loading, setLoading] = useState(true);

// //   const fetchTasks = async () => {
// //     if (!user) return setLoading(false);
// //     try {
// //       setLoading(true);
// //       const { data } = await axios.get(`http://localhost:3000/acceptedTasks?userEmail=${encodeURIComponent(user.email)}`);
// //       setTasks(data || []);
// //     } catch (err) {
// //       console.error(err);
// //       toast.error("Failed to fetch accepted tasks");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// const fetchTasks = async () => {
//   if (!user) return setLoading(false);
//   try {
//     setLoading(true);
//     // ✅ Use correct route & param: GET /accepted-tasks?email=...
//     const { data } = await axios.get(`http://localhost:3000/accepted-tasks`, {
//       params: { email: user.email }  // ✅ not `userEmail`
//     });
//     setTasks(Array.isArray(data) ? data : []);
//   } catch (err) {
//     console.error("Fetch tasks error:", err);
//     toast.error("Failed to load accepted tasks");
//   } finally {
//     setLoading(false);
//   }
// };

//   useEffect(() => {
//     fetchTasks();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [user]);

// //   const handleDoneOrCancel = async (taskId) => {
// //     try {
// //       await axios.delete(`http://localhost:3000/acceptedTasks/${taskId}`);
// //       setTasks(prev => prev.filter(t => t._id !== taskId));
// //       toast.success("Task removed");
// //     } catch (err) {
// //       console.error(err);
// //       toast.error("Failed to remove task");
// //     }
// //   };

// // const handleDoneOrCancel = async (taskId) => {
// //   if (!taskId) return toast.error("Invalid task ID");

// //   try {
// //     // ✅ Use correct route: /accepted-tasks/:id (with hyphen)
// //     await axios.delete(`http://localhost:3000/accepted-tasks/${taskId}`);
    
// //     setTasks(prev => prev.filter(t => t._id !== taskId));
// //     toast.success("Task removed");
// //   } catch (err) {
// //     console.error("Delete task error:", err.response?.data || err.message);
// //     const msg = err.response?.data?.error || "Failed to remove task";
// //     toast.error(msg);
// //   }
// // };
// const handleDoneOrCancel = async (taskId) => {
//   if (!user) return toast.error("You must be logged in");
//   if (!taskId) return toast.error("Invalid task ID");

//   try {
//     const token = await user.getIdToken(); // ✅ get JWT token from Firebase

//     await axios.delete(
//       `${import.meta.env.VITE_API_URL || "http://localhost:3000"}/accepted-tasks/${taskId}`,
//       {
//         headers: {
//           Authorization: `Bearer ${token}`, // ✅ send token in request header
//         },
//       }
//     );

//     // ✅ update UI instantly
//     setTasks((prev) => prev.filter((t) => t._id !== taskId));
//     toast.success("Removed from your tasks");
//   } catch (err) {
//     console.error("Delete error:", err.response?.data || err.message);
//     toast.error(err.response?.data?.error || "Action failed");
//   }
// };


//   if (loading) return <div className="loader">Loading...</div>;
//   if (!user) return <div className="container mx-auto px-4 py-8">
//     Please log in to see your accepted tasks.</div>;

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h2 className="text-2xl font-semibold mb-4">My Accepted Tasks</h2>
//       {tasks.length === 0 && <p>No accepted tasks yet.</p>}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         {tasks.map(t => (
//           <div key={t._id} className="job-card">
//             <h3 className="font-bold">{t.jobTitle}</h3>
//             <p className="text-sm text-gray-600">Accepted at: {new Date(t.acceptedAt).toLocaleString()}</p>
//             <div className="flex gap-3 mt-3">
//               <button onClick={() => handleDoneOrCancel(t._id)} className="btn btn-success">Done</button>
//               <button onClick={() => handleDoneOrCancel(t._id)} className="btn btn-error">Cancel</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MyAcceptedTasks;
import React, { useEffect, useState } from "react";
// import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { toast } from "react-toastify";
import { FaCheckCircle, FaTimesCircle, FaClock } from "react-icons/fa";
import useAuth from "../hooks/useAuth";

const MyAcceptedTasks = () => {
  const { user } = useAuth();
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTasks = async () => {
    if (!user?.email) return setLoading(false);
    try {
      setLoading(true);
      // Using the dynamic API URL from your .env
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/accepted-tasks`, {
        params: { email: user.email }
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
  }, [user]);

  const handleDoneOrCancel = async (taskId, actionType) => {
    if (!user) return toast.error("You must be logged in");
    
    try {
      // If you are using Firebase JWT, keep this line. 
      // If using custom JWT in cookies, ensure withCredentials: true is set in axios.
      const token = user?.accessToken || (await user.getIdToken()); 

      await axios.delete(
        `${import.meta.env.VITE_API_URL}/accepted-tasks/${taskId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setTasks((prev) => prev.filter((t) => t._id !== taskId));
      toast.success(actionType === 'done' ? "Task completed!" : "Task cancelled");
    } catch (err) {
      console.error("Action error:", err.response?.data || err.message);
      toast.error(err.response?.data?.error || "Action failed");
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-3xl font-black italic uppercase tracking-tighter">
            My <span className="text-primary">Accepted Tasks</span>
          </h2>
          <p className="text-gray-500 text-sm">Track and manage the jobs you've committed to.</p>
        </div>
        <div className="badge badge-outline p-4 font-bold">Total: {tasks.length}</div>
      </div>

      {tasks.length === 0 ? (
        <div className="bg-base-100 border-2 border-dashed border-base-300 rounded-[2rem] p-20 text-center">
          <p className="text-xl font-bold opacity-30">No accepted tasks yet.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tasks.map((t) => (
            <div key={t._id} className="bg-base-100 rounded-[2rem] p-6 shadow-sm border border-base-300 hover:shadow-md transition-all">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-black text-xl leading-tight">{t.jobTitle}</h3>
              </div>
              
              <div className="flex items-center gap-2 text-xs text-gray-500 mb-6">
                <FaClock className="text-primary" />
                <span>Accepted: {new Date(t.acceptedAt).toLocaleDateString()}</span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button 
                  onClick={() => handleDoneOrCancel(t._id, 'done')} 
                  className="btn btn-primary btn-sm rounded-xl gap-2 font-bold"
                >
                  <FaCheckCircle /> Done
                </button>
                <button 
                  onClick={() => handleDoneOrCancel(t._id, 'cancel')} 
                  className="btn btn-outline btn-error btn-sm rounded-xl gap-2 font-bold"
                >
                  <FaTimesCircle /> Cancel
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyAcceptedTasks;
