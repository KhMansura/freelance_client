import React from 'react';

const StatsSection = () => {
  return (
    <div>
        <section className="py-12 bg-blue-900 text-white rounded-2xl my-10">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
      <div>
        <h3 className="text-4xl font-bold">12k+</h3>
        <p className="text-blue-200">Active Jobs</p>
      </div>
      <div>
        <h3 className="text-4xl font-bold">45k+</h3>
        <p className="text-blue-200">Freelancers</p>
      </div>
      <div>
        <h3 className="text-4xl font-bold">$20M+</h3>
        <p className="text-blue-200">Paid to Talent</p>
      </div>
      <div>
        <h3 className="text-4xl font-bold">99%</h3>
        <p className="text-blue-200">Client Satisfaction</p>
      </div>
    </div>
  </section>
    </div>
  );
};

export default StatsSection;