// src/pages/UpdateJob.jsx
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import axios from "axios";
import { toast } from "react-toastify";

const UpdateJob = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    category: "",
    summary: "",
    coverImage: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const { data } = await axios.get(`http://localhost:3000/jobs/${id}`);
        setForm({
          title: data.title,
          category: data.category,
          summary: data.summary,
          coverImage: data.coverImage,
        });
      } catch (err) {
        console.error(err);
        toast.error("Failed to load job");
      } finally {
        setLoading(false);
      }
    };

    fetchJob();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/jobs/${id}`, form);
      toast.success("Job updated!");
      navigate(`/allJobs/${id}`);
    } catch (err) {
      console.error(err);
      toast.error("Failed to update job");
    }
  };

  if (loading) return <div className="loader">Loading...</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Update Job</h2>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
        <input type="text" placeholder="Title" value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })} className="input input-bordered w-full" required />
        <select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} className="select select-bordered w-full" required>
          <option value="">Select Category</option>
          <option>Web Development</option>
          <option>Graphic Design</option>
          <option>Digital Marketing</option>
        </select>
        <textarea placeholder="Summary" value={form.summary}
          onChange={(e) => setForm({ ...form, summary: e.target.value })} className="textarea textarea-bordered w-full" required />
        <input type="text" placeholder="Image URL" value={form.coverImage}
          onChange={(e) => setForm({ ...form, coverImage: e.target.value })} className="input input-bordered w-full" required />
        <button className="btn btn-primary w-full">Update Job</button>
      </form>
    </div>
  );
};

export default UpdateJob;