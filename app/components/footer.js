import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid #e5e7eb",
        marginTop: "60px",
        padding: "30px 20px",
        textAlign: "center",
        color: "#6b7280",
      }}
    >
      <p>
        © {new Date().getFullYear()} Anonymous Stories. All rights reserved.
      </p>

      <div
        style={{
          marginTop: "10px",
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/privacy">Privacy Policy</Link>
        <Link href="/terms">Terms of Service</Link>
      </div>
    </footer>
  );
}