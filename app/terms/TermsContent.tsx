export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12 prose prose-slate">
      <p><strong>Effective Date:</strong> {new Date().getFullYear()} </p>

      <h2>1. Acceptance of Terms</h2>
      <p>
        By accessing or using Hablr.ai (“Service”), you agree to be bound by
        these Terms of Service. If you do not agree, you may not use the Service.
      </p>

      <h2>2. Description of Service</h2>
      <p>
        Hablr.ai provides an AI-powered lead management platform for capturing,
        sharing, and analyzing contacts, properties, tasks, and conversations.
      </p>

      <h2>3. Eligibility</h2>
      <p>
        You must be at least 18 years old and legally capable of entering into
        contracts to use the Service.
      </p>

      <h2>4. Accounts</h2>
      <p>
        Accounts are authenticated through Auth0. You are responsible for
        maintaining the confidentiality of your login credentials.
      </p>

      <h2>5. Data Ownership & Sharing</h2>
      <p>
        Each record is tied to a unique Hablr Identifier (“HID”). You retain
        ownership of your data. You may share records with others as Readers or
        Editors. You are responsible for any data you choose to share.
      </p>

      <h2>6. Acceptable Use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Misuse the Service for spam or unlawful outreach</li>
        <li>Attempt to breach or circumvent security features</li>
        <li>Reverse engineer, copy, or resell the Service without permission</li>
      </ul>

      <h2>7. Fees & Payments</h2>
      <p>
        Paid plans are billed according to your selected subscription. Fees are
        non-refundable unless required by law.
      </p>

      <h2>8. Termination</h2>
      <p>
        We may suspend or terminate your access if you violate these Terms.
        Upon termination, you may export your data.
      </p>

      <h2>9. Disclaimer of Warranties</h2>
      <p>
        The Service is provided “as is.” We disclaim all warranties, express or
        implied, including merchantability and fitness for a particular purpose.
      </p>

      <h2>10. Limitation of Liability</h2>
      <p>
        To the fullest extent permitted by law, Hablr.ai shall not be liable for
        indirect, incidental, or consequential damages.
      </p>

      <h2>11. Changes to Terms</h2>
      <p>
        We may update these Terms. Continued use after changes constitutes
        acceptance.
      </p>

      <h2>12. Contact</h2>
      <p>
        Questions? Contact us at <a href="mailto:support@hablr.ai">support@hablr.ai</a>.
      </p>
    </div>
  );
}
