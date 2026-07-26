import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid #e5e7eb",
        marginBottom: "30px",
      }}
    >
      <Link
        href="/"
        style={{
          fontSize: "1.5rem",
          fontWeight: "bold",
          textDecoration: "none",
          color: "#2563eb",
        }}
      >
        Anonymous Stories
      </Link>

      <div style={{ display: "flex", gap: "24px" }}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/">Stories</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/privacy">Privacy</Link>
      </div>
    </nav>
  );
}