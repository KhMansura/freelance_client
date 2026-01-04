import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import { toast } from "react-toastify";

const Contact = () => {
  const handleContactSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    
    // For demo purposes, we show a success message
    toast.success(`Thanks ${name}, your message was sent!`);
    form.reset();
  };

  return (
    <div className="bg-base-200 min-h-screen pt-28 pb-20">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black text-base-content mb-4 tracking-tight">
            Get in <span className="text-primary">Touch</span>
          </h1>
          <p className="text-gray-500 max-w-lg mx-auto">
            Have questions about a project or need help with the platform? Our team is here to support you 24/7.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* LEFT: Contact Information (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-base-100 p-8 rounded-[2.5rem] shadow-sm border border-base-300">
              <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-4 rounded-2xl">
                    <FaEnvelope className="text-primary text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold">Email Us</h4>
                    <p className="opacity-60 text-sm">support@freelancehub.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-secondary/10 p-4 rounded-2xl">
                    <FaPhoneAlt className="text-secondary text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold">Call Us</h4>
                    <p className="opacity-60 text-sm">+880 1234-567890</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 p-4 rounded-2xl">
                    <FaMapMarkerAlt className="text-accent text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold">Our Office</h4>
                    <p className="opacity-60 text-sm">Dhaka, Bangladesh</p>
                  </div>
                </div>
              </div>

              {/* Decorative Map Placeholder */}
              <div className="mt-10 h-48 bg-base-200 rounded-3xl overflow-hidden border border-dashed border-base-300 flex items-center justify-center">
                 <p className="text-xs uppercase tracking-widest font-bold opacity-30">Map View Integrated</p>
              </div>
            </div>
          </div>

          {/* RIGHT: Contact Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="bg-base-100 p-10 rounded-[2.5rem] shadow-xl border border-base-300">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              
              <form onSubmit={handleContactSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="form-control">
                    <label className="label-text font-bold mb-2 ml-1 opacity-70">Full Name</label>
                    <input name="name" type="text" placeholder="John Doe" className="input input-bordered w-full rounded-2xl" required />
                  </div>
                  <div className="form-control">
                    <label className="label-text font-bold mb-2 ml-1 opacity-70">Email Address</label>
                    <input name="email" type="email" placeholder="john@example.com" className="input input-bordered w-full rounded-2xl" required />
                  </div>
                </div>

                <div className="form-control">
                  <label className="label-text font-bold mb-2 ml-1 opacity-70">Subject</label>
                  <input name="subject" type="text" placeholder="Inquiry about..." className="input input-bordered w-full rounded-2xl" required />
                </div>

                <div className="form-control">
                  <label className="label-text font-bold mb-2 ml-1 opacity-70">Message</label>
                  <textarea name="message" placeholder="How can we help you?" className="textarea textarea-bordered w-full h-40 rounded-2xl" required></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-lg w-full rounded-2xl gap-3 shadow-lg shadow-primary/20">
                  <FaPaperPlane /> Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;