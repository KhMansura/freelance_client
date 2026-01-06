
import React, { useEffect, useState } from "react";
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
