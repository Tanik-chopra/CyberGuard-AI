function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#0a0f1f",
        color: "white",
        textAlign: "center",
        padding: "80px 20px",
      }}
    >
      <h1 style={{ fontSize: "4rem" }}>🛡️ CyberGuard AI</h1>

      <p
        style={{
          fontSize: "1.5rem",
          marginTop: "20px",
          color: "#b0b8d1",
        }}
      >
        AI-Powered Cybersecurity Protection Platform
      </p>

      <button
        style={{
          marginTop: "30px",
          padding: "12px 25px",
          fontSize: "18px",
          borderRadius: "10px",
          border: "none",
          cursor: "pointer",
        }}
      >
        Get Started
      </button>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginTop: "80px",
          flexWrap: "wrap",
        }}
      >
        <div>
          <h3>🤖 AI Assistant</h3>
          <p>Cybersecurity help powered by AI</p>
        </div>

        <div>
          <h3>🔒 Password Checker</h3>
          <p>Analyze password strength</p>
        </div>

        <div>
          <h3>⚠️ Phishing Detector</h3>
          <p>Detect suspicious URLs</p>
        </div>
      </div>
    </div>
  );
}

export default App;