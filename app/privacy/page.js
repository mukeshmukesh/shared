export const metadata = {
  title: "Privacy Policy | Anonymous Stories",
  description: "Privacy Policy for Anonymous Stories",
};

export default function PrivacyPage() {
  return (
    <main
      style={{
        maxWidth: "900px",
        margin: "50px auto",
        padding: "20px",
        lineHeight: "1.8",
      }}
    >
      <h1>Privacy Policy</h1>

      <p>Last updated: July 2026</p>

      <p>
        Anonymous Stories respects your privacy. We collect only the
        information necessary to operate the website.
      </p>

      <h2>Information We Collect</h2>

      <ul>
        <li>Stories you choose to publish.</li>
        <li>Comments you submit.</li>
        <li>Basic analytics such as page visits.</li>
      </ul>

      <h2>Cookies</h2>

      <p>
        We may use cookies and similar technologies to improve your browsing
        experience and understand how visitors use our website.
      </p>

      <h2>Third-Party Services</h2>

      <p>
        We may use services such as Google Analytics and Google AdSense in the
        future. These services may collect anonymous usage information.
      </p>

      <h2>Your Rights</h2>

      <p>
        If you wish to request removal of content that you submitted, please
        contact us.
      </p>

      <h2>Contact</h2>

      <p>
        For privacy-related questions, please use the Contact page.
      </p>
    </main>
  );
}