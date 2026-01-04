// src/pages/PrivacyPolicy.jsx
import { Link } from "react-router";
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-base-200 py-12 px-4 transition-colors duration-300">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto bg-base-100 shadow-xl rounded-2xl overflow-hidden border border-base-300"
      >
        {/* Header Ribbon */}
        <div className="h-2 bg-gradient-to-r from-primary via-blue-500 to-secondary"></div>
        
        <div className="p-8 md:p-12">
          <header className="border-b border-base-300 pb-8 mb-8">
            <h1 className="text-4xl font-extrabold text-base-content mb-4 tracking-tight">
              Privacy Policy
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm opacity-60">
              <p>Last updated: {new Date().toLocaleDateString()}</p>
              <span className="hidden md:inline">•</span>
              <p>Version 1.0.2</p>
              <span className="hidden md:inline">•</span>
              <span className="badge badge-outline badge-success font-medium">Official</span>
            </div>
          </header>

          <div className="space-y-10 text-base-content/80 leading-relaxed">
            
            {/* Section 1 */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary font-bold">1</span>
                <h2 className="text-2xl font-bold text-base-content">Information We Collect</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-4 pl-11">
                <div className="p-4 bg-base-200 rounded-xl">
                  <p className="font-bold text-primary mb-1 text-sm">Account</p>
                  <p className="text-xs">Name, email, and photo URL via Google/Email.</p>
                </div>
                <div className="p-4 bg-base-200 rounded-xl">
                  <p className="font-bold text-primary mb-1 text-sm">Content</p>
                  <p className="text-xs">Job titles, descriptions, and bid history.</p>
                </div>
                <div className="p-4 bg-base-200 rounded-xl">
                  <p className="font-bold text-primary mb-1 text-sm">Security</p>
                  <p className="text-xs">Authentication logs and sign-in timestamps.</p>
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary font-bold">2</span>
                <h2 className="text-2xl font-bold text-base-content">Data Usage</h2>
              </div>
              <p className="pl-11 mb-4">We use your information to facilitate the core functions of <span className="text-primary font-semibold">FreelanceHub</span>:</p>
              <ul className="list-none pl-11 space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-success mt-1">✔</span> 
                  <span>Authenticating secure access to your private dashboard.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success mt-1">✔</span> 
                  <span>Publicly displaying job posts to potential freelancers/clients.</span>
                </li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="p-6 bg-info/5 border border-info/20 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-info/10 text-info font-bold">3</span>
                <h2 className="text-2xl font-bold text-base-content">Data Sharing & Privacy</h2>
              </div>
              <p className="text-sm">
                We respect your privacy. We <strong>do not sell</strong> your personal data to third parties. Data is only stored using secure industry providers like <strong>Firebase (Google Cloud)</strong> and <strong>MongoDB Atlas</strong>.
              </p>
            </section>

            {/* Section 4 */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary font-bold">4</span>
                <h2 className="text-2xl font-bold text-base-content">Security Measures</h2>
              </div>
              <p className="pl-11">
                Your data is protected by Google-grade security via Firebase Authentication and end-to-end 
                <strong> SSL/TLS encryption</strong> during transit.
              </p>
            </section>

            {/* Footer Links */}
            <div className="pt-10 border-t border-base-300 flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="avatar placeholder">
                  <div className="bg-neutral text-neutral-content rounded-full w-8">
                    <span>KM</span>
                  </div>
                </div>
                <p className="text-sm italic">
                  Questions? <a href="mailto:privacy@freelancehub.com" className="text-primary hover:underline font-medium">Email Privacy Team</a>
                </p>
              </div>
              
              <Link 
                to="/" 
                className="btn btn-outline btn-primary btn-sm rounded-full px-6"
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Trust Signal Placeholder */}
      <div className="mt-8 text-center opacity-40 grayscale flex justify-center gap-6 text-xs font-bold uppercase tracking-widest">
         <span>GDPR Compliant</span>
         <span>SSL Encrypted</span>
         <span>Firebase Secured</span>
      </div>
    </div>
  );
}