import { useState } from "react";
import { toast } from "react-toastify";
import useAuth from "../hooks/useAuth";
import axios from "axios";

export default function AddJobs() {
  const { user } = useAuth();
  const [form, setForm] = useState({
    title: "",
    category: "",
    summary: "",
    coverImage: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      toast.error("You must be logged in to post a job.");
      return;
    }

    const newJob = {
    //   ...form,
    //   postedBy: user?.displayName,
    //   userEmail: user?.email,
     ...form,
      postedBy: user.displayName || user.email.split("@")[0],
      userEmail: user.email,
    };
    try {

const token = await user.getIdToken();
      await axios.post(
        `${import.meta.env.VITE_API_URL}/jobs`,
        newJob,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success("✅ Job added successfully!");
      setForm({ title: "", category: "", summary: "", coverImage: "" });
    } catch (err) {
      console.error("Add job error:", err);
      const msg = err.response?.data?.error || "Failed to add job.";
      toast.error(`❌ ${msg}`);
    }
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Add a New Job</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
        <input type="text" placeholder="Job Title" value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })} className="input input-bordered w-full" required />
        <select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} className="select select-bordered w-full" required>
          <option value="">Select Category</option>
          <option>Web Development</option>
          <option>Graphic Design</option>
          <option>Digital Marketing</option>
        </select>
        <textarea placeholder="Job Summary" value={form.summary}
          onChange={(e) => setForm({ ...form, summary: e.target.value })}
           className="textarea textarea-bordered w-full" required />
      <div className="space-y-2">
        <div>
          <label className="label">
            <span className="label-text">Posted By</span>
          </label>
          <input
            type="text"
            value={user.displayName || user.email.split("@")[0]}
            className="input input-bordered w-full bg-gray-100"
            readOnly
          />
        </div>
        <div>
          <label className="label">
            <span className="label-text">Your Email</span>
          </label>
          <input
            type="email"
            value={user.email}
            className="input input-bordered w-full bg-gray-100"
            readOnly
          />
        </div>
      </div> 
        <input type="text" placeholder="Image URL" value={form.coverImage}
          onChange={(e) => setForm({ ...form, coverImage: e.target.value })} className="input input-bordered w-full" required />
        <button className="btn btn-primary w-full">Add Job</button>
      </form>
    </div>
  );
}
