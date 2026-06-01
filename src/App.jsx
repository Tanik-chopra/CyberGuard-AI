import cyber1 from "./assets/cyber1.jpg";
import cyber2 from "./assets/cyber2.jpg";
import cyber3 from "./assets/cyber3.jpg";

function App() {
  return (
    <div style={styles.body}>

      {/* HEADER */}
      <h1 style={styles.title}>🛡️ CyberGuard AI</h1>
      <p style={styles.subtitle}>
        AI-Powered Cybersecurity Protection Platform
      </p>

      <button style={styles.button}>Get Started</button>

      {/* IMAGE SECTION */}
      <div style={styles.imageRow}>
        <img src={cyber1} style={styles.image} />
        <img src={cyber2} style={styles.image} />
        <img src={cyber3} style={styles.image} />
      </div>

      {/* FEATURES */}
      <div style={styles.cardContainer}>
        
        <div style={styles.card}>
          <h2>🤖 AI Assistant</h2>
          <p>Ask anything about cybersecurity threats</p>
        </div>

        <div style={styles.card}>
          <h2>🔐 Password Checker</h2>
          <p>Check strength of your passwords</p>
        </div>

        <div style={styles.card}>
          <h2>⚠️ Phishing Detector</h2>
          <p>Detect fake and malicious URLs</p>
        </div>

      </div>

    </div>
  );
}

const styles = {
  body: {
    minHeight: "100vh",
    background: "radial-gradient(circle at top, #0f172a, #020617)",
    color: "white",
    textAlign: "center",
    padding: "50px",
    fontFamily: "Arial, sans-serif",
  },

  title: {
    fontSize: "3.8rem",
    marginBottom: "10px",
    textShadow: "0 0 20px #3b82f6",
  },

  subtitle: {
    fontSize: "1.3rem",
    color: "#93c5fd",
    marginBottom: "25px",
  },

  button: {
    padding: "12px 28px",
    fontSize: "16px",
    borderRadius: "10px",
    border: "none",
    cursor: "pointer",
    background: "linear-gradient(90deg, #2563eb, #1d4ed8)",
    color: "white",
    marginBottom: "40px",
    boxShadow: "0 0 15px #2563eb",
  },

  imageRow: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
    marginBottom: "50px",
  },

  image: {
    width: "260px",
    height: "170px",
    objectFit: "cover",
    borderRadius: "14px",
    border: "2px solid #1e293b",
    boxShadow: "0 0 15px rgba(37, 99, 235, 0.3)",
  },

  cardContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
  },

  card: {
    background: "rgba(17, 24, 39, 0.8)",
    padding: "22px",
    borderRadius: "15px",
    width: "260px",
    border: "1px solid #1f2937",
    boxShadow: "0 0 10px rgba(0,0,0,0.4)",
  },
};

export default App;