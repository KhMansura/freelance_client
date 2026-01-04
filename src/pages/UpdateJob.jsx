// src/pages/UpdateJob.jsx
// import { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router";
// import axios from "axios";
// import { toast } from "react-toastify";
// import useAuth from "../hooks/useAuth";

// const UpdateJob = () => {
//   const { user } = useAuth();
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [form, setForm] = useState({
//     title: "",
//     category: "",
//     summary: "",
//     coverImage: "",
//   });
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchJob = async () => {
//       try {
//         // const { data } = await axios.get(`http://localhost:3000/jobs/${id}`);
//         const { data } = await axios.get(
//           `${import.meta.env.VITE_API_URL}/jobs/${id}`
//         );
//         setForm({
//           title: data.title,
//           category: data.category,
//           summary: data.summary,
//           coverImage: data.coverImage,
//         });
//       } catch (err) {
//         // console.error(err);
//         toast.error("Failed to load job");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchJob();
//   }, [id]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     //     try {
//     //       await axios.put(`http://localhost:3000/jobs/${id}`, form);
//     //       toast.success("Job updated!");
//     //       navigate(`/allJobs/${id}`);
//     //     } catch (err) {
//     //       console.error(err);
//     //       toast.error("Failed to update job");
//     //     }
//     //   };
//     if (!user) return toast.error("Login required");

//     try {
//       const token = await user.getIdToken();
//       await axios.put(
//         // `${import.meta.env.VITE_API_URL}/jobs/${jobId}`,
//         `${import.meta.env.VITE_API_URL}/jobs/${id}`,
//         form,
//         {
//           headers: { Authorization: `Bearer ${token}` },
//         }
//       );
//       toast.success("Job updated!");
//       navigate("/myPostedJobs");
//     } catch (err) {
//       console.error("Update error:", err.response?.data || err);
//       toast.error(err.response?.data?.error || "Update failed");
//     }
//   };

//   if (loading) return <div className="loader">Loading...</div>;

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h2 className="text-2xl font-bold mb-6">Update Job</h2>
//       <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
//         <input
//           type="text"
//           placeholder="Title"
//           value={form.title}
//           onChange={(e) => setForm({ ...form, title: e.target.value })}
//           className="input input-bordered w-full"
//           required
//         />
//         <select
//           value={form.category}
//           onChange={(e) => setForm({ ...form, category: e.target.value })}
//           className="select select-bordered w-full"
//           required
//         >
//           <option value="">Select Category</option>
//           <option>Web Development</option>
//           <option>Graphic Design</option>
//           <option>Digital Marketing</option>
//         </select>
//         <textarea
//           placeholder="Summary"
//           value={form.summary}
//           onChange={(e) => setForm({ ...form, summary: e.target.value })}
//           className="textarea textarea-bordered w-full"
//           required
//         />
//         <input
//           type="text"
//           placeholder="Image URL"
//           value={form.coverImage}
//           onChange={(e) => setForm({ ...form, coverImage: e.target.value })}
//           className="input input-bordered w-full"
//           required
//         />
//         <button className="btn btn-primary w-full">Update Job</button>
//       </form>
//     </div>
//   );
// };

// export default UpdateJob;
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import axios from "axios";
import { toast } from "react-toastify";
import useAuth from "../hooks/useAuth";
import { FaEdit, FaDollarSign, FaCalendarAlt, FaImage } from "react-icons/fa";

const UpdateJob = () => {
  const { user } = useAuth();
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [form, setForm] = useState({
    title: "",
    category: "",
    summary: "",
    coverImage: "",
    image1: "",
    image2: "",
    minPrice: "",
    maxPrice: "",
    deadline: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/jobs/${id}`);
        setForm({
          title: data.title || "",
          category: data.category || "",
          summary: data.summary || "",
          coverImage: data.coverImage || "",
          image1: data.extraImages?.[0] || "",
          image2: data.extraImages?.[1] || "",
          image1: data.extraImages?.[0] || "",
          image2: data.extraImages?.[1] || "",
          minPrice: data.minPrice || "",
          maxPrice: data.maxPrice || "",
          deadline: data.deadline ? data.deadline.split('T')[0] : "", 
        });
      } catch (err) {
        toast.error("Failed to load job data");
      } finally {
        setLoading(false);
      }
    };
    fetchJob();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) return toast.error("Login required");

    // Prepare data to match the AddJob structure
    const updatedJob = {
      ...form,
      minPrice: parseFloat(form.minPrice),
      maxPrice: parseFloat(form.maxPrice),
      extraImages: [form.image1, form.image2],
    };

    try {
      const token = await user.getIdToken();
      await axios.put(
        `${import.meta.env.VITE_API_URL}/jobs/${id}`,
        updatedJob,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      toast.success("Job updated successfully!");
      navigate("/my-posted-jobs");
    } catch (err) {
      toast.error(err.response?.data?.error || "Update failed");
    }
  };

  if (loading) return (
    <div className="flex justify-center items-center min-h-screen">
      <span className="loading loading-spinner loading-lg text-primary"></span>
    </div>
  );

  return (
    <div className="bg-base-200 min-h-screen pt-28 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-base-100 p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-base-300">
          
          <div className="text-center mb-10">
            <h1 className="text-4xl font-black flex items-center justify-center gap-3">
              <FaEdit className="text-secondary" /> Update Project
            </h1>
            <p className="text-gray-500 mt-2 font-medium">Modify your job posting details</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Title & Category */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label-text font-bold mb-2 ml-1">Job Title</label>
                <input type="text" value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })} 
                  className="input input-bordered w-full rounded-2xl" required />
              </div>
              <div className="form-control">
                <label className="label-text font-bold mb-2 ml-1">Category</label>
                <select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} 
                  className="select select-bordered w-full rounded-2xl" required>
                  <option>Web Development</option>
                  <option>Graphic Design</option>
                  <option>Digital Marketing</option>
                </select>
              </div>
            </div>

            {/* Price & Deadline */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="form-control">
                <label className="label-text font-bold mb-2 ml-1 flex items-center gap-1">
                  <FaDollarSign className="text-xs"/> Min Price
                </label>
                <input type="number" value={form.minPrice}
                  onChange={(e) => setForm({ ...form, minPrice: e.target.value })} 
                  className="input input-bordered w-full rounded-2xl" required />
              </div>
              <div className="form-control">
                <label className="label-text font-bold mb-2 ml-1 flex items-center gap-1">
                  <FaDollarSign className="text-xs"/> Max Price
                </label>
                <input type="number" value={form.maxPrice}
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

            {/* Description */}
            <div className="form-control">
              <label className="label-text font-bold mb-2 ml-1">Summary</label>
              <textarea value={form.summary}
                onChange={(e) => setForm({ ...form, summary: e.target.value })}
                className="textarea textarea-bordered w-full h-32 rounded-2xl" required />
            </div>

            {/* Images */}
            <div className="space-y-4">
              <h3 className="font-bold flex items-center gap-2 border-b pb-2">
                <FaImage className="text-secondary"/> Update Media URLs
              </h3>
              <input type="url" placeholder="Cover Image" value={form.coverImage}
                onChange={(e) => setForm({ ...form, coverImage: e.target.value })} 
                className="input input-bordered w-full rounded-2xl" required />
              <input type="url" placeholder="Extra Image 1" value={form.image1}
                onChange={(e) => setForm({ ...form, image1: e.target.value })} 
                className="input input-bordered w-full rounded-2xl" />
              <input type="url" placeholder="Extra Image 2" value={form.image2}
                onChange={(e) => setForm({ ...form, image2: e.target.value })} 
                className="input input-bordered w-full rounded-2xl" />
            </div>

            <button className="btn btn-secondary w-full rounded-2xl h-14 text-lg shadow-lg shadow-secondary/20 uppercase font-black">
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateJob;
