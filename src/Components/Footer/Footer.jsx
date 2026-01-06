import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-neutral text-neutral-content pt-16 pb-8 border-t border-base-300">
      <div className="container mx-auto px-4">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand & Tagline */}
          <div className="space-y-4">
            <h3 className="text-white text-2xl font-bold flex items-center">
              <span className="bg-primary w-2 h-8 mr-3 rounded-full"></span>
              Freelance<span className="text-primary">Hub</span>
            </h3>
            <p className="text-sm opacity-70 leading-relaxed text-white">
              The world's most trusted marketplace for elite freelancers and ambitious businesses. 
              Connecting talent with opportunity—one project at a time.
            </p>
          </div>

          {/*  Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-xs opacity-90">Explore</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="hover:text-primary transition-colors opacity-80 hover:opacity-100">Home</Link></li>
              <li><Link to="/allJobs" className="hover:text-primary transition-colors opacity-80 hover:opacity-100">Browse All Jobs</Link></li>
              <li><Link to="/dashboard/add-Job" className="hover:text-primary transition-colors opacity-80 hover:opacity-100">Post a Project</Link></li>
              <li><Link to="/dashboard/my-accepted-tasks" className="hover:text-primary transition-colors opacity-80 hover:opacity-100">Active Tasks</Link></li>
            </ul>
          </div>

          {/*  Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-xs opacity-90">Contact Us</h4>
            <ul className="space-y-3 text-sm opacity-80">
              <li className="flex items-center gap-3 group cursor-default">
  <span className="bg-blue-600/20 text-blue-400 p-2 rounded-lg border border-blue-500/20 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
    📍
  </span> 
  
  <span className="text-gray-200 group-hover:text-white transition-colors font-medium">
    123 Dev Lane, Tech City
  </span>
</li>
              <li className="flex items-center gap-3">
                <span className="bg-white/10 p-1.5 rounded-md">📧</span> 
                <a href="mailto:support@freelancehub.com" className="hover:text-primary transition-colors">support@freelancehub.com</a>
              </li>
              <li className="flex items-center gap-3">
                <span className="bg-white/10 p-1.5 rounded-md">📞</span> 
                <a href="tel:+1234567890" className="hover:text-primary transition-colors">+1 (234) 567-890</a>
              </li>
            </ul>
          </div>

          {/* Legal & Newsletter */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-xs opacity-90">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/terms" className="hover:text-primary transition-colors opacity-80 hover:opacity-100">Terms of Service</Link></li>
              <li><Link to="/privacy" className="hover:text-primary transition-colors opacity-80 hover:opacity-100">Privacy Policy</Link></li>
              <li><Link to="/support" className="hover:text-primary transition-colors opacity-80 hover:opacity-100">Help & Support</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
<p className="text-sm font-medium text-gray-300">
  &copy; {new Date().getFullYear()} 
  <span className="text-blue-500 mx-1">FreelanceHub</span>. 
  <span className="text-white border-l border-gray-600 ml-2 pl-2">
    Built by Khandaker Mansura
  </span>
</p>
          
          {/* Social Icons */}
          <div className="flex space-x-5">
            <a href="https://x.com/freelancehub" target="_blank" rel="noreferrer" className="bg-white/5 p-2 rounded-full hover:bg-primary hover:text-white transition-all duration-300">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            {/* Facebook */}
 <a 
  href="https://www.facebook.com/login.php/" 
  target="_blank" 
  rel="noopener noreferrer"
  className="bg-white/10 p-2 rounded-full hover:bg-[#1877F2] hover:text-white transition-all duration-300"
  aria-label="Login with Facebook"
>
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  </a>

  {/* GitHub  */}
  <a 
    href="https://github.com/KhMansura" 
    target="_blank" 
    rel="noopener noreferrer"
    className="bg-white/10 p-2 rounded-full hover:bg-primary hover:text-white transition-all duration-300 shadow-sm"
    aria-label="Check my GitHub"
  >
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57v-2.205c-3.33.72-4.035-1.41-4.035-1.41-.54-1.38-1.32-1.74-1.32-1.74-1.08-.735.075-.72.075-.72 1.2.09 1.83 1.23 1.83 1.23 1.065 1.815 2.79 1.29 3.465.99.105-.78.42-1.29.765-1.59-2.67-.3-5.475-1.335-5.475-5.94 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.92 1.23 3.225 0 4.62-2.805 5.625-5.475 5.925.435.375.81 1.125.81 2.265v3.36c0 .315.225.69.825.57C20.565 21.795 24 17.31 24 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  </a>
  {/* LinkedIn  */}
  <a 
    href="https://linkedin.com/in/yourusername" 
    target="_blank" 
    rel="noopener noreferrer"
    className="bg-white/10 p-2 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-sm border border-white/5"
    aria-label="Connect on LinkedIn"
  >
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
  </a>
          </div>
        </div>

    
        <div className="mt-8 flex justify-center gap-8 border-t border-white/5 pt-6">
  {/* Secure Signal */}
  <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-gray-300 font-semibold transition-opacity hover:opacity-100">
    <span className="relative flex h-2 w-2">
      {/* Animated */}
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
      <span className="relative inline-flex rounded-full h-2 w-2 bg-success shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
    </span>
    Secure Payment
  </div>

  {/* Verified Signal */}
  <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-gray-300 font-semibold transition-opacity hover:opacity-100">
    <span className="relative flex h-2 w-2">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-info opacity-75"></span>
      <span className="relative inline-flex rounded-full h-2 w-2 bg-info shadow-[0_0_8px_rgba(6,182,212,0.6)]"></span>
    </span>
    Verified Profiles
  </div>
</div>
      </div>
    </footer>
  );
}