export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

      <p className="text-sm text-gray-500 mb-8">
        Last updated: {new Date().toLocaleDateString()}
      </p>

      <section className="space-y-6 text-gray-800 leading-relaxed">
        <p>
          Ayufinders Jobs ("we", "our", or "us") operates the Ayufinders Jobs
          mobile application (the "App"). This Privacy Policy explains how we
          collect, use, and protect your information when you use our App.
        </p>

        <h2 className="text-xl font-semibold">1. Information We Collect</h2>

        <h3 className="font-semibold">a) Personal Information</h3>
        <ul className="list-disc pl-6">
          <li>Name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Resume / CV details</li>
          <li>Job preferences and profile information</li>
        </ul>

        <h3 className="font-semibold">b) Non-Personal Information</h3>
        <ul className="list-disc pl-6">
          <li>Device type</li>
          <li>Operating system version</li>
          <li>App usage data</li>
          <li>Crash and performance logs</li>
        </ul>

        <h2 className="text-xl font-semibold">2. How We Use Your Information</h2>
        <ul className="list-disc pl-6">
          <li>Provide job listings and application features</li>
          <li>Enable employers to view candidate profiles</li>
          <li>Improve app functionality and user experience</li>
          <li>Communicate important updates</li>
          <li>Prevent misuse and ensure security</li>
        </ul>

        <h2 className="text-xl font-semibold">3. Data Sharing</h2>
        <p>
          We do not sell or rent user data. Information may be shared only with
          employers when you apply for jobs, service providers required for app
          functionality, or when legally required.
        </p>

        <h2 className="text-xl font-semibold">4. Data Security</h2>
        <p>
          We use reasonable security measures to protect your information.
          However, no method of electronic storage or transmission is 100%
          secure.
        </p>

        <h2 className="text-xl font-semibold">5. Children’s Privacy</h2>
        <p>
          Ayufinders Jobs is not intended for children under 13 years of age.
          We do not knowingly collect personal information from children.
        </p>

        <h2 className="text-xl font-semibold">6. Your Rights</h2>
        <ul className="list-disc pl-6">
          <li>Access your personal data</li>
          <li>Update or correct your information</li>
          <li>Request account and data deletion</li>
        </ul>

        <h2 className="text-xl font-semibold">7. Changes</h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page.
        </p>

        <h2 className="text-xl font-semibold">8. Contact Us</h2>
        <p>
          Email: <a href="mailto:support@ayufinders.com" className="text-blue-600 underline">
            support@ayufinders.com
          </a>
        </p>
        <p>
          Website: <a href="https://www.ayufinders.com" className="text-blue-600 underline">
            https://www.ayufinders.com
          </a>
        </p>
      </section>
    </main>
  );
}
