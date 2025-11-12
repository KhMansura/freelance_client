// src/pages/PrivacyPolicy.jsx
import { Link } from "react-router";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-sm rounded-lg p-6 md:p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-6">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <div className="prose prose-gray max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">1. Information We Collect</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Account Information:</strong> Name, email, photo URL (if provided).</li>
              <li><strong>Job Data:</strong> Titles, descriptions, categories, cover image URLs.</li>
              <li><strong>Authentication Logs:</strong> Sign-in method, timestamps (via Firebase).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">2. How We Use Your Data</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To authenticate and personalize your experience.</li>
              <li>To display your jobs and allow others to view them.</li>
              <li>To improve the Platform (e.g., usage analytics via anonymized logs).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">3. Data Sharing</h2>
            <p>
              We do **not** sell or rent your personal data. Information is shared only when necessary:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>With other users:</strong> Your name, photo, and job posts are visible to facilitate collaboration.</li>
              <li><strong>With Firebase & MongoDB:</strong> As backend service providers (data stored securely in compliance with their policies).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">4. Data Security</h2>
            <p>
              We use industry-standard measures including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Firebase Authentication (Google-grade security)</li>
              <li>HTTPS encryption in transit</li>
              <li>Environment variable protection for API keys</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">5. Your Rights</h2>
            <p>
              You may:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Edit or delete your job posts.</li>
              <li>Delete your account (via UI or request).</li>
              <li>Export your data upon request.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">6. Children’s Privacy</h2>
            <p>
              FreelanceHub is not intended for users under 18. We do not knowingly collect data from minors.
            </p>
          </section>

          <div className="pt-6 border-t border-gray-200 mt-8">
            <p className="text-gray-600">
              For privacy concerns, contact: <a href="mailto:privacy@freelancehub.example.com" className="text-blue-600 hover:underline">privacy@freelancehub.example.com</a>
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