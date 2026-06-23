export default function Navbar() {
  return (
    <nav
      style={{
        background: "#2563eb",
        color: "white",
        padding: "16px",
        display: "flex",
        gap: "20px",
      }}
    >
      <a href="/">Home</a>
      <a href="/compare">Compare Colleges</a>
    </nav>
  );
}