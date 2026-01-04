import { motion } from "framer-motion";
import { useState } from "react";

export default function Support() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Add your form submission logic here
  };

  const helpCategories = [
    { title: "Getting Started", icon: "🚀", desc: "Learn how to create a profile and post your first job." },
    { title: "Payments & Escrow", icon: "💰", desc: "Understand our secure payment system and milestone releases." },
    { title: "Trust & Safety", icon: "🛡️", desc: "Tips on staying safe and identifying verified freelancers." },
    { title: "Account Settings", icon: "⚙️", desc: "Manage your password, notifications, and profile details." },
  ];

  return (
    <div className="min-h-screen bg-base-100">
      {/* Header Section */}
      <section className="bg-neutral text-neutral-content py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
          >
            How can we <span className="text-primary">help you?</span>
          </motion.h1>
          <div className="max-w-2xl mx-auto relative">
            <input 
              type="text" 
              placeholder="Search for help (e.g. 'how to withdraw money')" 
              className="input input-bordered w-full pl-12 text-gray-800"
            />
            <span className="absolute left-4 top-3.5 opacity-50 text-gray-800">🔍</span>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Help Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {helpCategories.map((cat, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="card bg-base-100 border border-base-300 shadow-sm hover:shadow-md transition-all p-6 text-center"
            >
              <div className="text-4xl mb-4">{cat.icon}</div>
              <h3 className="font-bold text-lg mb-2">{cat.title}</h3>
              <p className="text-sm opacity-70">{cat.desc}</p>
              <button className="btn btn-ghost btn-sm text-primary mt-4">Read Articles</button>
            </motion.div>
          ))}
        </div>

        {/* Contact Form Section */}
        <section className="grid lg:grid-cols-2 gap-16 items-center bg-base-200 rounded-3xl p-8 md:p-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Can't find an answer?</h2>
            <p className="mb-8 opacity-70">
              Our support team is available 24/7. Send us a message and we'll get back to you as soon as possible.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="bg-primary/10 text-primary p-3 rounded-full">✉️</span>
                <div>
                  <p className="font-bold">Email us</p>
                  <p className="text-sm opacity-70">support@freelancehub.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="bg-secondary/10 text-secondary p-3 rounded-full">💬</span>
                <div>
                  <p className="font-bold">Live Chat</p>
                  <p className="text-sm opacity-70">Average response: 5 mins</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-base-100 p-8 rounded-2xl shadow-xl border border-base-300">
            {submitted ? (
              <div className="text-center py-10">
                <div className="text-6xl mb-4 text-success">✅</div>
                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                <p>We'll respond to your email within 24 hours.</p>
                <button onClick={() => setSubmitted(false)} className="btn btn-primary mt-6">Send another message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="form-control">
                  <label className="label"><span className="label-text">Your Name</span></label>
                  <input type="text" placeholder="Mansura" className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label"><span className="label-text">Email Address</span></label>
                  <input type="email" placeholder="mansura@example.com" className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label"><span className="label-text">Message</span></label>
                  <textarea className="textarea textarea-bordered h-32" placeholder="How can we help?" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary btn-block">Send Message</button>
              </form>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}