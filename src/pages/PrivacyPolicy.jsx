import React from "react";

function PrivacyPolicy() {
  return (
    <div className="max-w-5xl mx-auto p-12 my-20 text-primary shadow-lg shadow-primary">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="italic mb-6">Effective Date: March 2025</p>

      <p className="mb-4 italic text-center">
        This Privacy Policy outlines how <strong>Longevidade360</strong>{" "}
        collects, uses, stores, and protects your personal data when you use our
        services.
      </p>
      <p className="mt-8 font-semibold italic text-center">
        By using our services, you acknowledge that you have read and agreed to
        this Privacy Policy.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        1. Information We Collect
      </h2>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>Your name and contact details (email, WhatsApp number)</li>
        <li>Your health number (Nº de utente), if applicable</li>
        <li>
          Basic health-related information you voluntarily share during
          consultation
        </li>
        <li>Your IP address and browser information (for security purposes)</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        2. How We Use Your Information
      </h2>
      <p className="mb-4">We use your information to:</p>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>Schedule and conduct videocall consultations</li>
        <li>Issue prescriptions if appropriate</li>
        <li>Communicate with you regarding your consultation</li>
        <li>Comply with applicable laws and medical regulations</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">3. Data Retention</h2>
      <p className="mb-4">
        We do <strong>not</strong> store your unnecessary medical history,
        consultation details, or health documents after the consultation ends.
        Only your main health complaints and the doctor's recommendations are
        retained for future reference. Your personal information such as your{" "}
        name, email, and WhatsApp number are retained for future communication
        purposes.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">4. Data Sharing</h2>
      <p className="mb-4">
        We do <strong>not</strong> share your personal or medical information
        with any third parties. Your data is treated confidentially and used
        strictly within the scope of the service.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">5. Security</h2>
      <p className="mb-4">
        We use secure communication platforms (e.g., WhatsApp, Google Meet,
        Zoom, email with two-factor authentication) to ensure your data is
        transmitted safely. All reasonable measures are taken to protect your
        information from unauthorized access.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">6. Your Rights</h2>
      <p className="mb-4">You have the right to:</p>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>Access the personal information we hold about you</li>
        <li>Request corrections to inaccurate data</li>
        <li>Request deletion of your data after service use</li>
        <li>Withdraw your consent at any time (where applicable)</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        7. Cookies and Analytics
      </h2>
      <p className="mb-4">
        Our website may use basic cookies to improve user experience and track
        anonymous usage statistics. No health data is collected through cookies.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        8. Updates to This Policy
      </h2>
      <p className="mb-4">
        <strong>Longevidade360</strong> may update this Privacy Policy as
        needed. Any changes will be posted on this page with the updated
        effective date.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">9. Contact Us</h2>
      <p className="mb-4">
        If you have questions or requests regarding your personal data or this
        Privacy Policy, please contact us:
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>Email: longevidade360.pt@gmail.com</li>
        <li>Website: longevidade360.pt</li>
      </ul>
    </div>
  );
}

export default PrivacyPolicy;
