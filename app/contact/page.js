export const metadata = {
  title: "Contact | Anonymous Stories",
  description: "Contact Anonymous Stories.",
};

export default function ContactPage() {
  return (
    <main
      style={{
        maxWidth: "900px",
        margin: "50px auto",
        padding: "20px",
        lineHeight: "1.8",
      }}
    >
      <h1>Contact Us</h1>

      <p>
        We'd love to hear your feedback, suggestions, or questions.
      </p>

      <p>
        If you'd like to report content, request removal of your own submission,
        or contact us for any other reason, please reach out.
      </p>

      <h2>Email</h2>

      <p>
        <a href="mailto:macdownnout@gmail.com">
          macdownnout@gmail.com
        </a>
      </p>

      <p>
        We aim to respond within 2–3 business days.
      </p>
    </main>
  );
}