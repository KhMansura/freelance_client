
import { Link } from "react-router";
import { motion } from "framer-motion";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-base-200 py-12 px-4 transition-colors duration-300">
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-4xl mx-auto bg-base-100 shadow-2xl rounded-3xl overflow-hidden border border-base-300"
      >
        {/* Top Decorative Header */}
        <div className="bg-primary py-10 px-8 md:px-12 text-primary-content">
          <h1 className="text-4xl font-black tracking-tight mb-2">Terms of Service</h1>
          <p className="opacity-80 text-sm">
            Last updated: {new Date().toLocaleDateString()} • Version 2.1.0
          </p>
        </div>

        <div className="p-8 md:p-12">
          <div className="space-y-12 text-base-content/80 leading-relaxed">
            
            {/* Introduction */}
            <p className="text-lg font-medium text-base-content">
              Welcome to <span className="text-primary">FreelanceHub</span>. By using our platform, you agree to the following terms. Please read them carefully.
            </p>

            {/* Section 1: Acceptance */}
            <section>
              <div className="flex items-center gap-4 mb-4 border-b border-base-200 pb-2">
                <span className="text-2xl">📜</span>
                <h2 className="text-2xl font-bold text-base-content uppercase tracking-wide text-sm">1. Acceptance of Terms</h2>
              </div>
              <p className="pl-2">
                By accessing or using FreelanceHub ("the Platform"), you agree to comply with and be bound by these Terms of Service. This is a legally binding agreement between you and the Platform.
              </p>
            </section>

            {/* Section 2: Service Description */}
            <section>
              <div className="flex items-center gap-4 mb-4 border-b border-base-200 pb-2">
                <span className="text-2xl">🌐</span>
                <h2 className="text-2xl font-bold text-base-content uppercase tracking-wide text-sm">2. Description of Service</h2>
              </div>
              <div className="bg-base-200 p-6 rounded-2xl border-l-4 border-primary">
                <p>
                  FreelanceHub is a digital marketplace connecting <span className="badge badge-primary">Clients</span> and <span className="badge badge-secondary">Freelancers</span>. We facilitate discovery and communication; however, we are not an employer or a party to any agreements made between users.
                </p>
              </div>
            </section>

            {/* Section 3: Responsibilities */}
            <section>
              <div className="flex items-center gap-4 mb-4 border-b border-base-200 pb-2">
                <span className="text-2xl">✅</span>
                <h2 className="text-2xl font-bold text-base-content uppercase tracking-wide text-sm">3. User Responsibilities</h2>
              </div>
              <ul className="grid md:grid-cols-2 gap-4 pl-2">
                {[
                  "Provide accurate registration data.",
                  "Avoid posting fraudulent content.",
                  "Respect intellectual property.",
                  "Maintain professional conduct."
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 p-3 bg-base-200 rounded-xl text-sm font-medium">
                    <span className="text-success">✔</span> {item}
                  </li>
                ))}
              </ul>
            </section>

            {/* Section 4: Payments */}
            <section>
              <div className="flex items-center gap-4 mb-4 border-b border-base-200 pb-2">
                <span className="text-2xl">💳</span>
                <h2 className="text-2xl font-bold text-base-content uppercase tracking-wide text-sm">4. Payments & Liability</h2>
              </div>
              <p className="pl-2 italic opacity-90">
                Note: In this version of the platform, financial arrangements are made directly between users. FreelanceHub is not liable for payment disputes or project outcomes.
              </p>
            </section>

            {/* Section 5: Termination */}
            <section>
              <div className="flex items-center gap-4 mb-4 border-b border-base-200 pb-2">
                <span className="text-2xl">🚫</span>
                <h2 className="text-2xl font-bold text-base-content uppercase tracking-wide text-sm">5. Termination</h2>
              </div>
              <p className="pl-2">
                We reserve the right to suspend or terminate accounts that engage in spam, harassment, or violate these terms to maintain a safe community for all freelancers.
              </p>
            </section>

            {/* Footer and Back Button */}
            <div className="pt-12 border-t border-base-300 mt-12 flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-sm">
                <p className="font-bold text-base-content">Need clarification?</p>
                <a href="mailto:support@freelancehub.com" className="text-primary hover:underline">support@freelancehub.com</a>
              </div>
              
              <Link 
                to="/" 
                className="btn btn-primary px-10 rounded-full hover:shadow-lg transition-all"
              >
                Accept and Return Home
              </Link>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Trust Signal Bar */}
      <div className="max-w-4xl mx-auto mt-10 flex justify-center gap-10 opacity-30 grayscale pointer-events-none">
        <span className="text-xs font-black uppercase tracking-widest">Safe Community</span>
        <span className="text-xs font-black uppercase tracking-widest">Global Marketplace</span>
        <span className="text-xs font-black uppercase tracking-widest">Verified Work</span>
      </div>
    </div>
  );
}