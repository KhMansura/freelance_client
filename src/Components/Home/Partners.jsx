import React from 'react';

const Partners = () => {
    return (
        <div>
            <section className="py-10 border-t border-b border-gray-100">
    <p className="text-center text-gray-400 uppercase tracking-widest text-sm mb-6">Trusted by world-class teams</p>
    <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale">
      {/* Use simple font-logos or icons if you don't have images */}
      <span className="text-2xl font-black">Google</span>
      <span className="text-2xl font-black">NETFLIX</span>
      <span className="text-2xl font-black">Microsoft</span>
      <span className="text-2xl font-black">Airbnb</span>
    </div>
  </section>
        </div>
    );
};

export default Partners;