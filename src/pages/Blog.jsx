
import React, { useState } from "react";
import { FaCalendarAlt, FaUser, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router"; 
import { toast } from "react-toastify"; 

const blogs = [
  {
    id: 1,
    title: "How to Land Your First High-Paying Freelance Project",
    category: "Career Tips",
    author: "Khandaker Mansura",
    date: "Jan 15, 2026",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80",
    summary: "Winning your first client is the hardest part. Learn the top strategies to build a winning proposal and stand out..."
  },
  {
    id: 2,
    title: "Top 5 MERN Stack Trends to Watch in 2026",
    category: "Technology",
    author: "Tech Team",
    date: "Jan 12, 2026",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80",
    summary: "From AI integration to edge computing, the MERN stack is evolving faster than ever. Stay ahead of the curve with these insights..."
  },
  {
    id: 3,
    title: "Protecting Your Work: A Freelancer's Guide to Security",
    category: "Security",
    author: "Admin",
    date: "Jan 08, 2026",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
    summary: "Your data is your currency. Discover how to use FreelanceHub's built-in tools to protect your payments and intellectual property..."
  }
];

const Blog = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  // Handler for Blog Navigation
  const handleReadMore = (id) => {
    navigate(`/blog/${id}`);
    window.scrollTo(0, 0);
  };

  // Handler for Newsletter
  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter a valid email address.");
      return;
    }
    // Simulate API call
    console.log("Subscribed:", email);
    toast.success("Thanks for subscribing");
    setEmail("");
  };

  return (
    <div className="bg-base-200 min-h-screen pt-28 pb-20">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Blog Header */}
        <div className="text-center mb-16 animate-fadeIn">
          <h1 className="text-5xl font-black text-base-content mb-4 tracking-tight">
            Insights & <span className="text-primary">Resources</span>
          </h1>
          <p className="text-gray-500 max-w-lg mx-auto">
            Stay updated with the latest trends in freelancing, web development, and platform news.
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-12">
          <div className="card lg:card-side bg-base-100 shadow-xl border border-base-300 rounded-[2.5rem] overflow-hidden">
            <figure className="lg:w-1/2">
              <img src={blogs[0].image} alt="Featured" className="h-full w-full object-cover" />
            </figure>
            <div className="card-body lg:w-1/2 p-10 justify-center">
              <div className="badge badge-primary mb-4 uppercase tracking-widest text-[10px] font-bold">
                {blogs[0].category}
              </div>
              <h2 className="card-title text-3xl font-bold mb-4">{blogs[0].title}</h2>
              <p className="text-base-content/70 leading-relaxed mb-6">{blogs[0].summary}</p>
              <div className="flex items-center gap-6 text-sm opacity-60 mb-8">
                <span className="flex items-center gap-2"><FaUser /> {blogs[0].author}</span>
                <span className="flex items-center gap-2"><FaCalendarAlt /> {blogs[0].date}</span>
              </div>
              <div className="card-actions">
                <button 
                  onClick={() => handleReadMore(blogs[0].id)} 
                  className="btn btn-primary rounded-xl px-8 hover:scale-105 transition-transform"
                >
                  Read Article
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((post) => (
            <div key={post.id} className="bg-base-100 rounded-[2rem] overflow-hidden border border-base-300 shadow-sm hover:shadow-md transition-all group">
              <div className="h-52 overflow-hidden cursor-pointer" onClick={() => handleReadMore(post.id)}>
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-bold text-primary uppercase tracking-widest">{post.category}</span>
                  <span className="text-xs opacity-50">{post.date}</span>
                </div>
                <h3 
                  className="text-xl font-bold mb-4 line-clamp-2 group-hover:text-primary transition-colors cursor-pointer"
                  onClick={() => handleReadMore(post.id)}
                >
                  {post.title}
                </h3>
                <p className="text-sm text-base-content/60 line-clamp-3 mb-6">
                  {post.summary}
                </p>
                <button 
                  onClick={() => handleReadMore(post.id)}
                  className="flex items-center gap-2 text-sm font-bold hover:gap-4 transition-all text-primary"
                >
                  Read More <FaArrowRight />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-20 bg-primary/10 rounded-[3rem] p-12 text-center border border-primary/20">
          <h3 className="text-3xl font-black mb-4">Don't miss a beat!</h3>
          <p className="mb-8 opacity-70">Subscribe to our newsletter for weekly career tips and new job alerts.</p>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:sm:flex-row gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email" 
              className="input input-bordered rounded-2xl flex-grow focus:input-primary" 
              required
            />
            <button type="submit" className="btn btn-primary rounded-2xl px-8 font-bold shadow-lg shadow-primary/20">
              Subscribe
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Blog;