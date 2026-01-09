import React from 'react';

const Testimonials = () => {
    return (
        <div>
            <section className="py-16 bg-transparent rounded-3xl px-6 border-y border-white/10">
                <h2 className="text-3xl font-bold text-center mb-12 text-black dark:text-white">
                    What Our Users Say
                </h2>
                
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-white">
                    {[
                        { name: "Sarah J.", role: "Graphic Designer", text: "FreelanceHub helped me find my first long-term client within a week!" },
                        { name: "David K.", role: "Project Manager", text: "The quality of developers here is top-notch. Highly recommended for startups." },
                        { name: "Alex M.", role: "Full Stack Dev", text: "Secure payments and great support. It's the best platform I've used." }
                    ].map((t, i) => (
                        <div 
                            key={i} 
                            className="bg-base-200 backdrop-blur-md p-6 rounded-xl border border-white/10"
                        >
                            <p className="italic text-gray-400 mb-4">"{t.text}"</p>
                            <h4 className="font-bold text-gray-400 dark:text-white">{t.name}</h4>
                            <p className="text-xs text-gray-500 uppercase tracking-widest">{t.role}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Testimonials;