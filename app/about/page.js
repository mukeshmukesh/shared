export const metadata = {
  title: "About | Anonymous Stories",
  description: "Learn about Anonymous Stories and our mission.",
};

export default function AboutPage() {
  return (
    <main
      style={{
        maxWidth: "900px",
        margin: "50px auto",
        padding: "20px",
        lineHeight: "1.8",
      }}
    >
      <h1>About Anonymous Stories</h1>

      <p>
        Anonymous Stories is a safe space where anyone can share their
        experiences without revealing their identity.
      </p>

      <p>
        Whether you're celebrating a success, overcoming a struggle, seeking
        advice, or simply wanting to be heard, your story matters.
      </p>

      <p>
        We believe that sharing experiences helps build empathy, encourages
        meaningful conversations, and reminds people that they are not alone.
      </p>

      <h2>Our Mission</h2>

      <p>
        To create a respectful community where people can express themselves
        freely while maintaining privacy and anonymity.
      </p>

      <p>
        Thank you for being part of Anonymous Stories.
      </p>
    </main>
  );
}