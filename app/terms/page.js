export const metadata = {
  title: "Terms of Service | Anonymous Stories",
  description: "Terms and conditions for using Anonymous Stories.",
};

export default function TermsPage() {
  return (
    <main
      style={{
        maxWidth: "900px",
        margin: "50px auto",
        padding: "20px",
        lineHeight: "1.8",
      }}
    >
      <h1>Terms of Service</h1>

      <p>Last updated: July 2026</p>

      <h2>Acceptance of Terms</h2>

      <p>
        By using Anonymous Stories, you agree to use the website responsibly
        and respectfully.
      </p>

      <h2>User Content</h2>

      <p>
        You are responsible for the content you submit. Do not post unlawful,
        abusive, hateful, or harmful material.
      </p>

      <h2>Content Removal</h2>

      <p>
        We reserve the right to remove content that violates these terms or
        disrupts the community.
      </p>

      <h2>Disclaimer</h2>

      <p>
        Stories published on this website reflect the opinions of their
        authors and do not necessarily represent the views of Anonymous
        Stories.
      </p>

      <h2>Changes</h2>

      <p>
        These terms may be updated periodically without prior notice.
      </p>
    </main>
  );
}