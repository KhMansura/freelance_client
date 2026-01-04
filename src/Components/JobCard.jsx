// src/components/JobCard.jsx
import { Link } from "react-router";
import { FaDollarSign, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
export const JobSkeleton = () => (
  <div className="bg-base-200 rounded-xl p-4 flex flex-col h-[400px] w-full animate-pulse">
    <div className="bg-gray-300 h-44 rounded-lg mb-4"></div>
    <div className="bg-gray-300 h-6 w-3/4 rounded mb-2"></div>
    <div className="bg-gray-300 h-4 w-full rounded mb-1"></div>
    <div className="bg-gray-300 h-4 w-5/6 rounded mb-4"></div>
    <div className="mt-auto bg-gray-300 h-10 w-full rounded"></div>
  </div>
);
export default function JobCard({ job }) {
  return (
    <div className="bg-base-100 rounded-xl shadow-sm border border-base-300 flex flex-col h-full hover:shadow-md transition-all group overflow-hidden">
      {/* Image Section */}
      <div className="relative overflow-hidden h-44">
        <img
          src={job.coverImage || "https://via.placeholder.com/400x200"}
          alt={job.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-2 right-2">
          <span className="badge badge-primary font-semibold">{job.category}</span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="font-bold text-lg mb-2 text-base-content line-clamp-1 group-hover:text-primary transition-colors">
          {job.title}
        </h3>
        
        <p className="text-gray-500 text-sm mb-4 line-clamp-2">
          {job.summary}
        </p>

        {/* Meta Info Section */}
        <div className="grid grid-cols-2 gap-y-2 mb-4 pt-4 border-t border-base-200">
          <div className="flex items-center gap-2 text-xs text-gray-600">
            <FaDollarSign className="text-primary" />
            <span>${job.minPrice} - ${job.maxPrice}</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-600">
            <FaCalendarAlt className="text-primary" />
            <span>{new Date(job.deadline).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-600">
            <FaMapMarkerAlt className="text-primary" />
            <span>Remote</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-600">
             <div className="rating rating-xs">
                <input type="radio" className="mask mask-star-2 bg-orange-400" disabled />
                <span className="ml-1">4.8</span>
             </div>
          </div>
        </div>

        <Link
          to={`/allJobs/${job._id}`}
          className="mt-auto btn btn-primary btn-md w-full rounded-lg"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}