
// // app/dashboard/page.tsx
// export default function DashboardPage() {
//   return (
//     <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
//       <h1>🎉 Welcome to the Dashboard!</h1>
//       <p>Your authentication flow is working perfectly.</p>
//     </div>
//   );
// }

import Link from "next/link";

export default function Home() {
  return (
    <main style={styles.container}>
      <h1 style={styles.title}>🛒 Online Order System</h1>
      <p style={styles.subtitle}>Welcome! Please log in or create a new account to continue.</p>
      
      <div style={styles.buttonGroup}>
        <Link href="/login" style={styles.loginBtn}>
          Log In
        </Link>
        <Link href="/signup" style={styles.signupBtn}>
          Create Account
        </Link>
      </div>
    </main>
  );
}

// Simple layout inline styling
const styles = {
  container: {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    fontFamily: "system-ui, sans-serif",
    backgroundColor: "#fafafa",
    color: "#333",
  },
  title: {
    fontSize: "2.5rem",
    marginBottom: "0.5rem",
  },
  subtitle: {
    fontSize: "1.1rem",
    color: "#666",
    marginBottom: "2rem",
  },
  buttonGroup: {
    display: "flex",
    gap: "1rem",
  },
  loginBtn: {
    padding: "0.75rem 1.5rem",
    backgroundColor: "#0070f3",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "5px",
    fontWeight: "bold",
  },
  signupBtn: {
    padding: "0.75rem 1.5rem",
    backgroundColor: "#eaeaea",
    color: "#333",
    textDecoration: "none",
    borderRadius: "5px",
    fontWeight: "bold",
  },
};
