import { useState } from "react";

function PhishingDetector() {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState("");

  const checkURL = () => {
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

    setResult(
      suspicious
        ? "⚠️ Potential Phishing URL Detected"
        : "✅ URL Appears Safe"
    );
  };

  return (
    <div
      style={{
        background: "#111827",
        padding: "25px",
        borderRadius: "12px",
        maxWidth: "600px",
        margin: "40px auto",
      }}
    >
      <h2>⚠️ Phishing URL Detector</h2>

      <input
  type="text"
  placeholder="Paste URL here..."
  value={url}
  onChange={(e) => setUrl(e.target.value)}
  style={{
    width: "90%",
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #374151",
    backgroundColor: "#1f2937",
    color: "white",
    fontSize: "16px",
  }}
/>

      <br />

      <button
        onClick={checkURL}
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
        Scan URL
      </button>

      {result && (
        <h3 style={{ marginTop: "20px" }}>
          {result}
        </h3>
      )}
    </div>
  );
}

export default PhishingDetector;