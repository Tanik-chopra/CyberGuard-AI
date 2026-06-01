import { useState } from "react";

function SecurityScore() {
  const [password, setPassword] = useState("");
  const [url, setUrl] = useState("");
  const [score, setScore] = useState(null);

  const calculateScore = () => {
    let total = 0;

    // Password Score
    if (password.length >= 8) total += 25;
    if (/[A-Z]/.test(password)) total += 25;
    if (/[0-9]/.test(password)) total += 25;
    if (/[^A-Za-z0-9]/.test(password)) total += 25;

    // URL Score
    const suspiciousWords = [
      "login",
      "verify",
      "secure",
      "bank",
      "update",
      "free",
      "gift",
      "winner",
    ];

    let suspicious = suspiciousWords.some((word) =>
      url.toLowerCase().includes(word)
    );

    if (url.includes("@") || url.includes("bit.ly")) {
      suspicious = true;
    }

    if (!suspicious) {
      total += 20;
    }

    if (total > 100) total = 100;

    setScore(total);
  };

  const getRisk = () => {
    if (score >= 80) return "🟢 LOW RISK";
    if (score >= 50) return "🟡 MEDIUM RISK";
    return "🔴 HIGH RISK";
  };

  return (
    <div
      style={{
        background: "#111827",
        padding: "25px",
        borderRadius: "15px",
        maxWidth: "600px",
        margin: "40px auto",
      }}
    >
      <h2>🛡 Security Score Calculator</h2>

      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{
          width: "90%",
          padding: "12px",
          marginBottom: "15px",
          borderRadius: "8px",
          border: "1px solid #374151",
          backgroundColor: "#1f2937",
          color: "white",
        }}
      />

      <input
        type="text"
        placeholder="Enter Website URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        style={{
          width: "90%",
          padding: "12px",
          borderRadius: "8px",
          border: "1px solid #374151",
          backgroundColor: "#1f2937",
          color: "white",
        }}
      />

      <br />

      <button
        onClick={calculateScore}
        style={{
          marginTop: "15px",
          padding: "10px 20px",
          borderRadius: "8px",
          border: "none",
          background: "#2563eb",
          color: "white",
          cursor: "pointer",
        }}
      >
        Calculate Score
      </button>

      {score !== null && (
        <div style={{ marginTop: "20px" }}>
          <h3>Security Score: {score}/100</h3>
          <h3>{getRisk()}</h3>
        </div>
      )}
    </div>
  );
}

export default SecurityScore;