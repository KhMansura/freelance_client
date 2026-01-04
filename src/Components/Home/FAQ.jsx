import React from 'react';

const FAQ = () => {
  return (
    <div>
        <section className="py-16 max-w-3xl mx-auto">
    <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
    <div className="join join-vertical w-full">
      <div className="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="my-accordion-4" defaultChecked /> 
        <div className="collapse-title text-xl font-medium">Is there a fee to post a job?</div>
        <div className="collapse-content"><p>No, posting a job is completely free for clients.</p></div>
      </div>
      <div className="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="my-accordion-4" /> 
        <div className="collapse-title text-xl font-medium">How do I get paid?</div>
        <div className="collapse-content"><p>Payments are released via our secure escrow system once milestones are approved.</p></div>
      </div>
    </div>
  </section>
    </div>
  );
};

export default FAQ;