import React from 'react';

const Newsletters = () => {
    return (
        <div>
            <section className="bg-gradient-to-r from-blue-600 to-indigo-700 p-12 rounded-3xl text-center text-white my-16">
    <h2 className="text-3xl font-bold mb-4">Never Miss a Great Opportunity</h2>
    <p className="mb-8 opacity-90">Subscribe to our newsletter and get the latest jobs delivered to your inbox.</p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
      <input type="email" placeholder="Enter your email" className="input input-bordered text-gray-800 w-full" />
      <button className="btn btn-neutral px-8">Subscribe</button>
    </div>
  </section>
        </div>
    );
};

export default Newsletters;