import React from 'react';

const Testimonials = () => {
    return (
        <div>
              <section className="py-16 bg-gray-50 rounded-3xl px-6">
    <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
    <div className="grid md:grid-cols-3 gap-8">
      {[
        { name: "Sarah J.", role: "Graphic Designer", text: "FreelanceHub helped me find my first long-term client within a week!" },
        { name: "David K.", role: "Project Manager", text: "The quality of developers here is top-notch. Highly recommended for startups." },
        { name: "Alex M.", role: "Full Stack Dev", text: "Secure payments and great support. It's the best platform I've used." }
      ].map((t, i) => (
        <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <p className="italic text-gray-600 mb-4">"{t.text}"</p>
          <h4 className="font-bold text-blue-800">{t.name}</h4>
          <p className="text-xs text-gray-400">{t.role}</p>
        </div>
      ))}
    </div>
  </section>
        </div>
    );
};

export default Testimonials;