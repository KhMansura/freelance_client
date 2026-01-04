// import { useState } from "react";
// import { toast } from "react-toastify";
// import useAuth from "../hooks/useAuth";
// import axios from "axios";

// export default function AddJobs() {
//   const { user } = useAuth();
//   const [form, setForm] = useState({
//     title: "",
//     category: "",
//     summary: "",
//     coverImage: "",
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!user) {
//       toast.error("You must be logged in to post a job.");
//       return;
//     }

//     const newJob = {
//     //   ...form,
//     //   postedBy: user?.displayName,
//     //   userEmail: user?.email,
//      ...form,
//       postedBy: user.displayName || user.email.split("@")[0],
//       userEmail: user.email,
//     };
//     try {

// const token = await user.getIdToken();
//       await axios.post(
//         `${import.meta.env.VITE_API_URL}/jobs`,
//         newJob,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       toast.success("✅ Job added successfully!");
//       setForm({ title: "", category: "", summary: "", coverImage: "" });
//     } catch (err) {
//       console.error("Add job error:", err);
//       const msg = err.response?.data?.error || "Failed to add job.";
//       toast.error(`❌ ${msg}`);
//     }
//   };

//   return (
//     <div className="container mx-auto px-4 py-10">
//       <h1 className="text-3xl font-bold mb-6">Add a New Job</h1>
//       <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
//         <input type="text" placeholder="Job Title" value={form.title}
//           onChange={(e) => setForm({ ...form, title: e.target.value })} className="input input-bordered w-full" required />
//         <select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} className="select select-bordered w-full" required>
//           <option value="">Select Category</option>
//           <option>Web Development</option>
//           <option>Graphic Design</option>
//           <option>Digital Marketing</option>
//         </select>
//         <textarea placeholder="Job Summary" value={form.summary}
//           onChange={(e) => setForm({ ...form, summary: e.target.value })}
//            className="textarea textarea-bordered w-full" required />
//       <div className="space-y-2">
//         <div>
//           <label className="label">
//             <span className="label-text">Posted By</span>
//           </label>
//           <input
//             type="text"
//             value={user.displayName || user.email.split("@")[0]}
//             className="input input-bordered w-full bg-gray-100"
//             readOnly
//           />
//         </div>
//         <div>
//           <label className="label">
//             <span className="label-text">Your Email</span>
//           </label>
//           <input
//             type="email"
//             value={user.email}
//             className="input input-bordered w-full bg-gray-100"
//             readOnly
//           />
//         </div>
//       </div> 
//         <input type="text" placeholder="Image URL" value={form.coverImage}
//           onChange={(e) => setForm({ ...form, coverImage: e.target.value })} className="input input-bordered w-full" required />
//         <button className="btn btn-primary w-full">Add Job</button>
//       </form>
//     </div>
//   );
// }
import { useState } from "react";
import { toast } from "react-toastify";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import { FaImage, FaCalendarAlt, FaDollarSign, FaBriefcase } from "react-icons/fa";

export default function AddJobs() {
  const { user } = useAuth();
  const [form, setForm] = useState({
    title: "",
    category: "",
    summary: "",
    coverImage: "",
    image1: "", // Extra Image 1
    image2: "", // Extra Image 2
    minPrice: "",
    maxPrice: "",
    deadline: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      toast.error("You must be logged in to post a job.");
      return;
    }

    // Creating the final object with metadata and multiple images
    const newJob = {
      ...form,
      minPrice: parseFloat(form.minPrice),
      maxPrice: parseFloat(form.maxPrice),
      extraImages: [form.image1, form.image2],
      postedBy: user.displayName || user.email.split("@")[0],
      userEmail: user.email,
      createdAt: new Date(),
    };

    try {
      const token = await user.getIdToken();
      await axios.post(`${import.meta.env.VITE_API_URL}/jobs`, newJob, {
        headers: { Authorization: `Bearer ${token}` },
      });

      toast.success("✅ Job added successfully!");
      // Reset form
      setForm({
        title: "", category: "", summary: "", coverImage: "",
        image1: "", image2: "", minPrice: "", maxPrice: "", deadline: ""
      });
    } catch (err) {
      const msg = err.response?.data?.error || "Failed to add job.";
      toast.error(`❌ ${msg}`);
    }
  };

  return (
    <div className="bg-base-200 min-h-screen pt-28 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-base-100 p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-base-300">
          
          <div className="text-center mb-10">
            <h1 className="text-4xl font-black flex items-center justify-center gap-3">
              <FaBriefcase className="text-primary" /> Post a New Job
            </h1>
            <p className="text-gray-500 mt-2 font-medium">Reach top talent in our community</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Section 1: Basic Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label-text font-bold mb-2 ml-1">Job Title</label>
                <input type="text" placeholder="e.g. MERN Stack Developer" value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })} 
                  className="input input-bordered w-full rounded-2xl" required />
              </div>
              <div className="form-control">
                <label className="label-text font-bold mb-2 ml-1">Category</label>
                <select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} 
                  className="select select-bordered w-full rounded-2xl" required>
                  <option value="">Select Category</option>
                  <option>Web Development</option>
                  <option>Graphic Design</option>
                  <option>Digital Marketing</option>
                  <option>Writing & Translation</option>
                </select>
              </div>
            </div>

            {/* Section 2: Salary & Deadline (Requirement #3 Meta Info) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="form-control">
                <label className="label-text font-bold mb-2 ml-1 flex items-center gap-1">
                  <FaDollarSign className="text-xs"/> Min Price
                </label>
                <input type="number" placeholder="50" value={form.minPrice}
                  onChange={(e) => setForm({ ...form, minPrice: e.target.value })} 
                  className="input input-bordered w-full rounded-2xl" required />
              </div>
              <div className="form-control">
                <label className="label-text font-bold mb-2 ml-1 flex items-center gap-1">
                  <FaDollarSign className="text-xs"/> Max Price
                </label>
                <input type="number" placeholder="500" value={form.maxPrice}
                  onChange={(e) => setForm({ ...form, maxPrice: e.target.value })} 
                  className="input input-bordered w-full rounded-2xl" required />
              </div>
              <div className="form-control">
                <label className="label-text font-bold mb-2 ml-1 flex items-center gap-1">
                  <FaCalendarAlt className="text-xs"/> Deadline
                </label>
                <input type="date" value={form.deadline}
                  onChange={(e) => setForm({ ...form, deadline: e.target.value })} 
                  className="input input-bordered w-full rounded-2xl" required />
              </div>
            </div>

            {/* Section 3: Summary */}
            <div className="form-control">
              <label className="label-text font-bold mb-2 ml-1">Job Description</label>
              <textarea placeholder="Tell us about the project..." value={form.summary}
                onChange={(e) => setForm({ ...form, summary: e.target.value })}
                className="textarea textarea-bordered w-full h-32 rounded-2xl" required />
            </div>

            {/* Section 4: Multiple Images (Requirement #4) */}
            <div className="space-y-4">
              <h3 className="font-bold flex items-center gap-2 border-b pb-2">
                <FaImage className="text-primary"/> Project Media
              </h3>
              <div className="grid grid-cols-1 gap-3">
                <input type="url" placeholder="Main Cover Image URL" value={form.coverImage}
                  onChange={(e) => setForm({ ...form, coverImage: e.target.value })} 
                  className="input input-bordered w-full rounded-2xl" required />
                <input type="url" placeholder="Extra Image URL 1" value={form.image1}
                  onChange={(e) => setForm({ ...form, image1: e.target.value })} 
                  className="input input-bordered w-full rounded-2xl" />
                <input type="url" placeholder="Extra Image URL 2" value={form.image2}
                  onChange={(e) => setForm({ ...form, image2: e.target.value })} 
                  className="input input-bordered w-full rounded-2xl" />
              </div>
            </div>

            <button className="btn btn-primary w-full rounded-2xl h-14 text-lg shadow-lg shadow-primary/20 uppercase font-black">
              Post Job Opportunity
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}