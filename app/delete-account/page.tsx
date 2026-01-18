export default function DeleteAccountPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Request Account & Data Deletion</h1>

      <p className="mb-4">
        Ayufinders Jobs respects your privacy and gives you full control over
        your personal data.
      </p>

      <p className="mb-4">
        If you would like to request deletion of your account and all associated
        data, please follow the steps below.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">How to request deletion</h2>

      <ol className="list-decimal pl-6 space-y-2">
        <li>
          Send an email from your registered email address to:
          <br />
          <a
            href="mailto:support@ayufinders.com?subject=Account%20Deletion%20Request"
            className="text-blue-600 underline"
          >
            ayufinders@gmail.com
          </a>
        </li>
        <li>
          Use the subject line: <strong>Account Deletion Request</strong>
        </li>
        <li>
          Include your registered email address or phone number in the message.
        </li>
      </ol>

      <h2 className="text-xl font-semibold mt-6 mb-2">What happens next</h2>

      <ul className="list-disc pl-6 space-y-2">
        <li>Your request will be verified for security purposes</li>
        <li>Your account and associated data will be permanently deleted</li>
        <li>Deletion is completed within <strong>7–14 working days</strong></li>
      </ul>

      <p className="mt-6 text-sm text-gray-600">
        Certain data may be retained if required by law or for legitimate
        business purposes, in accordance with applicable regulations.
      </p>
    </main>
  );
}
