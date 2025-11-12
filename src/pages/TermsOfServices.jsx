// src/pages/TermsOfService.jsx
import { Link } from "react-router";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-sm rounded-lg p-6 md:p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Terms of Service</h1>
        <p className="text-sm text-gray-500 mb-6">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <div className="prose prose-gray max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing or using FreelanceHub ("the Platform"), you agree to comply with and be bound by these Terms of Service. If you do not agree, please do not use this service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">2. Description of Service</h2>
            <p>
              FreelanceHub is a digital marketplace that connects clients ("Clients") with independent service providers ("Freelancers"). The Platform facilitates job posting, discovery, and communication — but does not employ users or guarantee job outcomes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">3. User Responsibilities</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate, current information during registration.</li>
              <li>Do not post illegal, fraudulent, or plagiarized content.</li>
              <li>Respect intellectual property rights of others.</li>
              <li>Communicate professionally and ethically.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">4. Payments & Fees</h2>
            <p>
              FreelanceHub does not handle payments in this version. All financial arrangements are made directly between Clients and Freelancers. The Platform is not liable for payment disputes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">5. Limitation of Liability</h2>
            <p>
              The Platform is provided "as is". FreelanceHub DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED. We are not liable for any indirect, incidental, or consequential damages arising from use of the service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">6. Termination</h2>
            <p>
              We reserve the right to suspend or terminate accounts that violate these terms, engage in spam, or harm the community.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">7. Changes to Terms</h2>
            <p>
              We may update these terms periodically. Continued use after changes constitutes acceptance.
            </p>
          </section>

          <div className="pt-6 border-t border-gray-200 mt-8">
            <p className="text-gray-600">
              Questions? Contact us at <a href="mailto:support@freelancehub.example.com" className="text-blue-600 hover:underline">support@freelancehub.example.com</a>.
            </p>
            <Link 
              to="/" 
              className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}