export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12 prose prose-slate">
      <p><strong>Effective Date:</strong> {new Date().getFullYear()}</p>

      <h2>1. Information We Collect</h2>
      <ul>
        <li><strong>Account Data:</strong> Name, email, and login info from Auth0.</li>
        <li><strong>Content:</strong> Contacts, properties, tasks, and conversation logs you create.</li>
        <li><strong>Metadata:</strong> Dates, HID identifiers, and sharing permissions.</li>
        <li><strong>Usage Data:</strong> Logs, device/browser info, analytics.</li>
      </ul>

      <h2>2. How We Use Information</h2>
      <ul>
        <li>Provide, maintain, and improve the Service</li>
        <li>Enable secure login via Auth0</li>
        <li>Facilitate data ownership, sharing, and collaboration</li>
        <li>Communicate with you regarding updates or support</li>
      </ul>

      <h2>3. Sharing of Information</h2>
      <p>
        We do not sell your personal data. Data is shared only:
      </p>
      <ul>
        <li>When you explicitly share records with Readers or Editors</li>
        <li>With vendors who support our infrastructure (e.g., hosting, database)</li>
        <li>As required by law or legal process</li>
      </ul>

      <h2>4. Data Security</h2>
      <p>
        We implement industry-standard measures including encryption, access
        control, and auditing. Each record is HID-bound to ensure privacy.
      </p>

      <h2>5. Data Retention</h2>
      <p>
        We retain data as long as your account is active. You may request data
        deletion or export at any time.
      </p>

      <h2>6. Your Rights</h2>
      <ul>
        <li>Access, correct, or delete your personal data</li>
        <li>Export your records</li>
        <li>Withdraw consent to processing</li>
      </ul>

      <h2>7. International Users</h2>
      <p>
        If you access Hablr.ai outside the U.S., you consent to transferring
        your data to the United States.
      </p>

      <h2>8. Changes</h2>
      <p>
        We may update this Privacy Policy from time to time. We will notify you
        of significant changes.
      </p>

      <h2>9. Contact</h2>
      <p>
        Questions? Contact us at <a href="mailto:support@hablr.ai">support@hablr.ai</a>.
      </p>
    </div>
  );
}
