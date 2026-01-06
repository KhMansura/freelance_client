
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import axios from "axios";
import useAuth from "../hooks/useAuth";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { 
  FaCalendarAlt, 
  FaDollarSign, 
  FaTag, 
  FaUserEdit, 
  FaBriefcase, 
  FaArrowLeft, 
  FaShieldAlt, 
  FaInfoCircle 
} from "react-icons/fa";

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const navigate = useNavigate();
  const [relatedJobs, setRelatedJobs] = useState([]);
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
  if (job?.coverImage) {
    setActiveImage(job.coverImage);
  }
}, [job]);

  useEffect(() => {
    let mounted = true;
    const fetchJobData = async () => {
      try {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/jobs/${id}`);
        if (mounted) setJob(data);
      } catch (err) {
        console.error(err);
        toast.error("Failed to load job details");
      } finally {
        if (mounted) setLoading(false);
      }
    };
    fetchJobData();
    return () => (mounted = false);
  }, [id]);

  useEffect(() => {
  if (job?.category) {
    const fetchRelated = async () => {
      try {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/jobs?category=${job.category}`);
        
        const filtered = data.filter(item => item._id !== job._id).slice(0, 4);
        setRelatedJobs(filtered);
      } catch (err) {
        console.error("Related jobs error:", err);
      }
    };
    fetchRelated();
  }
}, [job]);

  const handleAccept = async () => {
    if (!user) return toast.error("Please log in to accept jobs");
    if (job.userEmail === user.email)
      return toast.error("You cannot accept your own job");

    try {
      const token = await user.getIdToken();
      await axios.post(
        `${import.meta.env.VITE_API_URL}/accept-job/${job._id}`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      toast.success("Job accepted successfully!");
      navigate("/dashboard/my-accepted-tasks");
    } catch (err) {
      const msg = err.response?.data?.error || "Failed to accept job";
      toast.error(msg);
    }
  };

  const handleDelete = async () => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#EF4444",
      cancelButtonColor: "#6B7280",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        const token = await user.getIdToken();
        await axios.delete(
          `${import.meta.env.VITE_API_URL}/jobs/${job._id}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        toast.success("Job deleted successfully");
        navigate("/allJobs");
      } catch (err) {
        toast.error("Failed to delete job");
      }
    }
  };

  if (loading) return (
    <div className="flex flex-col justify-center items-center min-h-screen gap-4">
      <span className="loading loading-spinner loading-lg text-primary"></span>
      <p className="font-bold animate-pulse text-primary uppercase tracking-widest text-xs">Fetching Project Details...</p>
    </div>
  );

  if (!job) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Job Not Found</h2>
        <button onClick={() => navigate("/allJobs")} className="btn btn-primary">Back to Listings</button>
      </div>
    </div>
  );

  return (
    <div className="bg-base-200 min-h-screen pt-28 pb-20">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Navigation & Header */}
        <div className="flex items-center justify-between mb-8">
          <button onClick={() => navigate(-1)} className="btn btn-ghost btn-sm gap-2 normal-case">
            <FaArrowLeft /> Back
          </button>
          <div className="badge badge-outline gap-2 opacity-50">
            ID: {job._id.slice(-6).toUpperCase()}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* LEFT: Media & Overview */}
          <div className="lg:col-span-8 space-y-8">
            
            
            {/* Main Large Image */}
<div className="space-y-4">
  {/* Main Large Image */}
  <div className="rounded-3xl overflow-hidden shadow-lg border border-base-300 h-[400px]">
    <img 
      src={activeImage || job.coverImage} 
      className="w-full h-full object-cover transition-all duration-500" 
      alt="Main View" 
    />
  </div>

  {/* Thumbnails  */}
  <div className="flex gap-4 overflow-x-auto pb-2">
    {/* Main Image Thumbnail */}
    <img 
      onClick={() => setActiveImage(job.coverImage)}
      src={job.coverImage} 
      className={`w-24 h-20 rounded-xl object-cover cursor-pointer transition-all ${activeImage === job.coverImage ? 'border-4 border-primary' : 'border border-base-300'}`} 
    />

    {/* Extra Images Loop */}
    {job.extraImages && job.extraImages.map((imgUrl, index) => (
      imgUrl && (
        <img 
          key={index}
          onClick={() => setActiveImage(imgUrl)}
          src={imgUrl} 
          className={`w-24 h-20 rounded-xl object-cover cursor-pointer transition-all ${activeImage === imgUrl ? 'border-4 border-primary' : 'border border-base-300'}`} 
          alt={`Extra ${index + 1}`}
        />
      )
    ))}
  </div>
</div>
            



            {/* Overview Section */}
            <div className="bg-base-100 p-10 rounded-[2rem] shadow-sm border border-base-300">
              <h2 className="text-2xl font-black mb-6 flex items-center gap-3">
                <FaInfoCircle className="text-primary" /> Project Overview
              </h2>
              <div className="prose max-w-none text-base-content/70 leading-relaxed text-lg">
                <p className="whitespace-pre-line">{job.summary}</p>
                <p className="mt-4 italic text-sm">
                  * Note: Applicants are expected to provide a detailed portfolio upon acceptance. 
                  Communication should remain within the platform for safety.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: Key Information & Sidebar  */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Key Specs Card - Requirement: Key Information/Specs */}
            <div className="bg-base-100 p-8 rounded-[2rem] shadow-sm border border-base-300 sticky top-28">
              <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
                <FaBriefcase className="text-primary"/> Project Specs
              </h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center p-4 bg-base-200 rounded-2xl">
                  <span className="flex items-center gap-2 text-sm opacity-60"><FaDollarSign/> Budget</span>
                  <span className="font-black text-primary">${job.minPrice} - ${job.maxPrice}</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-base-200 rounded-2xl">
                  <span className="flex items-center gap-2 text-sm opacity-60"><FaCalendarAlt/> Deadline</span>
                  <span className="font-bold">{new Date(job.deadline).toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-base-200 rounded-2xl">
                  <span className="flex items-center gap-2 text-sm opacity-60"><FaUserEdit/> Buyer</span>
                  <span className="font-bold text-xs truncate">{job.postedBy}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-3">
                <button 
                  onClick={handleAccept} 
                  className="btn btn-primary btn-lg rounded-2xl shadow-lg shadow-primary/20 normal-case"
                >
                  Accept Project
                </button>
                
                {user && job.userEmail === user.email && (
                  <div className="grid grid-cols-2 gap-3 mt-2">
                    <button 
                      onClick={() => navigate(`/updateJob/${job._id}`)} 
                      className="btn btn-outline rounded-2xl"
                    >Edit</button>
                    <button 
                      onClick={handleDelete} 
                      className="btn btn-error btn-outline rounded-2xl"
                    >Delete</button>
                  </div>
                )}
              </div>

              <div className="divider opacity-20 my-8"></div>

              {/* Suggested/Safety Section  */}
              <div className="bg-warning/5 rounded-2xl p-5 border border-warning/20">
                <h4 className="flex items-center gap-2 text-sm font-bold text-warning-content mb-2">
                  <FaShieldAlt /> Safety Guidelines
                </h4>
                <ul className="text-[11px] space-y-2 opacity-70 list-disc pl-4">
                  <li>Payments are held in Escrow for security.</li>
                  <li>Verify the client's rating before starting.</li>
                  <li>Submit work only through the portal.</li>
                </ul>
              </div>
              
            </div>
            
          </div>
          
        </div>
        {/* Related/Suggested Items Section ) */}
<div className="mt-20 border-t border-base-300 pt-16">
  <div className="flex items-center justify-between mb-8">
    <div>
      <h3 className="text-3xl font-black text-base-content">Related <span className="text-primary">Opportunities</span></h3>
      <p className="text-sm opacity-60">Similar projects in the {job.category} category</p>
    </div>
    <button onClick={() => navigate('/allJobs')} className="btn btn-outline btn-sm rounded-full">View All</button>
  </div>

  {relatedJobs.length > 0 ? (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {relatedJobs.map((rJob) => (
        <div 
          key={rJob._id} 
          onClick={() => {
            navigate(`/allJobs/${rJob._id}`);
            window.scrollTo(0, 0);
          }}
          className="bg-base-100 p-4 rounded-2xl border border-base-300 hover:border-primary transition-all cursor-pointer group shadow-sm"
        >
          <img src={rJob.coverImage} className="w-full h-32 object-cover rounded-xl mb-4 group-hover:opacity-80 transition-opacity" />
          <h4 className="font-bold text-base-content line-clamp-1 mb-1">{rJob.title}</h4>
          <div className="flex justify-between items-center mt-3">
            <span className="text-xs font-bold text-primary">${rJob.minPrice}</span>
            <span className="text-[10px] uppercase opacity-50 font-bold">Details →</span>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <div className="bg-base-100 p-10 rounded-3xl text-center border border-dashed border-base-300">
      <p className="opacity-50 italic">No other related projects found in this category.</p>
    </div>
  )}
</div>
      </div>
    </div>
    
  );
};

export default JobDetails;
