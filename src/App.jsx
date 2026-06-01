import PasswordChecker from "./PasswordChecker";

import cyber1 from "./assets/cyber1.jpg";
import cyber2 from "./assets/cyber2.jpg";
import cyber3 from "./assets/cyber3.jpg";

function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#0a0f1f",
        color: "white",
        textAlign: "center",
        padding: "40px 20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* HEADER */}
      <h1
        style={{
          fontSize: "4rem",
          marginBottom: "10px",
        }}
      >
        🛡️ CyberGuard AI
      </h1>

      <p
        style={{
          fontSize: "1.3rem",
          color: "#b0b8d1",
        }}
      >
        AI-Powered Cybersecurity Protection Platform
      </p>

      {/* NAVIGATION */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "15px",
          marginTop: "30px",
          flexWrap: "wrap",
        }}
      >
        <button style={buttonStyle}>🏠 Home</button>
        <button style={buttonStyle}>🔐 Password Checker</button>
        <button style={buttonStyle}>⚠️ Phishing Detector</button>
        <button style={buttonStyle}>🤖 AI Assistant</button>
      </div>

      {/* IMAGES */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginTop: "50px",
          flexWrap: "wrap",
        }}
      >
        <img src={cyber1} alt="Cyber Security" style={imageStyle} />
        <img src={cyber2} alt="Data Protection" style={imageStyle} />
        <img src={cyber3} alt="AI Security" style={imageStyle} />
      </div>

      {/* FEATURES */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginTop: "50px",
          flexWrap: "wrap",
        }}
      >
        <div style={cardStyle}>
          <h3>🤖 AI Assistant</h3>
          <p>Ask anything about cybersecurity threats</p>
        </div>

        <div style={cardStyle}>
          <h3>🔐 Password Checker</h3>
          <p>Check strength of your passwords</p>
        </div>

        <div style={cardStyle}>
          <h3>⚠️ Phishing Detector</h3>
          <p>Detect fake and malicious URLs</p>
        </div>
      </div>

      {/* PASSWORD CHECKER */}
      <div style={{ marginTop: "60px" }}>
        <PasswordChecker />
      </div>

      {/* STATS */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          marginTop: "60px",
          flexWrap: "wrap",
        }}
      >
        <div style={cardStyle}>
          <h2>500+</h2>
          <p>Passwords Checked</p>
        </div>

        <div style={cardStyle}>
          <h2>120+</h2>
          <p>Threats Detected</p>
        </div>

        <div style={cardStyle}>
          <h2>99%</h2>
          <p>Security Awareness</p>
        </div>
      </div>

      {/* FOOTER */}
      <footer
        style={{
          marginTop: "80px",
          padding: "20px",
          color: "#94a3b8",
        }}
      >
        © 2026 CyberGuard AI | Built for Hackathon
      </footer>
    </div>
  );
}

const buttonStyle = {
  padding: "12px 20px",
  borderRadius: "8px",
  border: "none",
  cursor: "pointer",
  backgroundColor: "#2563eb",
  color: "white",
  fontWeight: "bold",
};

const cardStyle = {
  backgroundColor: "#111827",
  padding: "20px",
  borderRadius: "12px",
  width: "250px",
  boxShadow: "0 0 15px rgba(37,99,235,0.2)",
};

const imageStyle = {
  width: "300px",
  height: "180px",
  objectFit: "cover",
  borderRadius: "12px",
  boxShadow: "0 0 15px rgba(37,99,235,0.3)",
};

export default App;