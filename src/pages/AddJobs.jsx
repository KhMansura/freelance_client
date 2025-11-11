// import React, { useState } from "react";
// import useAuth from "../hooks/useAuth";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router";

// const AddJobs = () => {
//   const { user } = useAuth();
//   const navigate = useNavigate();

//   const [form, setForm] = useState({
//     title: "",
//     category: "Web Development",
//     summary: "",
//     coverImage: "",
//   });
//   const [submitting, setSubmitting] = useState(false);

//   const handleChange = e => setForm({...form, [e.target.name]: e.target.value});

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!user) return toast.error("You must be logged in to add a job");
//     const payload = {
//       ...form,
//       postedBy: user.displayName || user.email,
//       userEmail: user.email,
//       postedAt: new Date().toISOString(),
//     };
//     try {
//       setSubmitting(true);
//       const { data } = await axios.post("http://localhost:3000/jobs", payload);
//       toast.success("Job posted");
//       navigate(`/allJobs/${data.insertedId || data._id || ""}`, { replace: true });
//     } catch (err) {
//       console.error(err);
//       toast.error("Failed to add job");
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow">
//         <h2 className="text-2xl font-bold mb-4">Add a Job</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <label className="block">
//             <span>Title</span>
//             <input name="title" value={form.title} onChange={handleChange} className="input input-bordered w-full" required />
//           </label>

//           <label className="block">
//             <span>Category</span>
//             <select name="category" value={form.category} onChange={handleChange} className="select select-bordered w-full">
//               <option>Web Development</option>
//               <option>Digital Marketing</option>
//               <option>Graphics Designing</option>
//               <option>Other</option>
//             </select>
//           </label>

//           <label className="block">
//             <span>Summary</span>
//             <textarea name="summary" value={form.summary} onChange={handleChange} className="textarea textarea-bordered w-full" rows="5" required />
//           </label>

//           <label className="block">
//             <span>Cover Image URL</span>
//             <input name="coverImage" value={form.coverImage} onChange={handleChange} className="input input-bordered w-full" />
//             <span className="text-xs text-gray-500">Add an image URL (imgbb or any hosted image)</span>
//           </label>

//           <div className="flex justify-end">
//             <button disabled={submitting} className="btn btn-primary">
//               {submitting ? "Posting..." : "Post Job"}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddJobs;
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
    const newJob = {
      ...form,
      postedBy: user?.displayName,
      userEmail: user?.email,
    };
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/jobs`, newJob);
      toast.success("Job added successfully!");
      setForm({ title: "", category: "", summary: "", coverImage: "" });
    } catch (err) {
      toast.error("Failed to add job.");
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
          onChange={(e) => setForm({ ...form, summary: e.target.value })} className="textarea textarea-bordered w-full" required />
        <input type="text" placeholder="Image URL" value={form.coverImage}
          onChange={(e) => setForm({ ...form, coverImage: e.target.value })} className="input input-bordered w-full" required />
        <button className="btn btn-primary w-full">Add Job</button>
      </form>
    </div>
  );
}
