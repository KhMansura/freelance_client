import { useParams, useNavigate } from "react-router";
import { FaArrowLeft, FaCalendarAlt, FaUser } from "react-icons/fa";


const blogs = [
    { id: 1, title: "How to Land Your First High-Paying Freelance Project", author: "Khandaker Mansura", date: "Jan 15, 2026", image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80", content: "Full article text goes here..." },
    { id: 2, title: "Top 5 MERN Stack Trends to Watch in 2026", author: "Tech Team", date: "Jan 12, 2026", image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80", content: "Full article text goes here..." },
    { id: 3, title: "Protecting Your Work: A Freelancer's Guide to Security", author: "Admin", date: "Jan 08, 2026", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80", content: "Full article text goes here..." }
];

const BlogDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    
    
    const blog = blogs.find(b => b.id === parseInt(id));

    if (!blog) return <div className="text-center py-20">Blog not found.</div>;

    return (
        <div className="bg-base-200 min-h-screen pt-28 pb-20 px-4">
            <div className="max-w-4xl mx-auto bg-base-100 rounded-[2.5rem] overflow-hidden shadow-2xl">
                <img src={blog.image} className="w-full h-96 object-cover" alt={blog.title} />
                
                <div className="p-10">
                    <button onClick={() => navigate(-1)} className="btn btn-ghost gap-2 mb-6">
                        <FaArrowLeft /> Back to Insights
                    </button>
                    
                    <h1 className="text-4xl font-black mb-6">{blog.title}</h1>
                    
                    <div className="flex items-center gap-6 text-sm opacity-60 mb-8 border-b pb-6">
                        <span className="flex items-center gap-2"><FaUser /> {blog.author}</span>
                        <span className="flex items-center gap-2"><FaCalendarAlt /> {blog.date}</span>
                    </div>

                    <div className="prose max-w-none text-lg leading-relaxed text-base-content/80">
                        
                        <p className="mb-4">{blog.content}</p>
                        <p>Khandaker Mansura, this content is now being pulled dynamically from your data based on the ID in the URL!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;