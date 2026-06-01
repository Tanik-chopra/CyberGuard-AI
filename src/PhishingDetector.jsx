import { useState } from "react";

function PhishingDetector() {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState(null);

  const checkURL = () => {
    let score = 0;

    if (url.includes("http://")) score += 30;
    if (url.includes("@")) score += 20;
    if (url.length > 75) score += 20;
    if (url.includes("login") || url.includes("verify")) score += 20;
    if (!url.includes(".com") && !url.includes(".org")) score += 10;

    if (score === 0) {
      setResult({ status: "SAFE", score: 10 });
    } else if (score < 50) {
      setResult({ status: "SUSPICIOUS", score });
    } else {
      setResult({ status: "DANGEROUS", score });
    }
  };

  return (
    <div
      style={{
        marginTop: "50px",
        padding: "20px",
        backgroundColor: "#111827",
        borderRadius: "10px",
        width: "60%",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <h2>⚠️ Phishing URL Detector</h2>

      <input
        type="text"
        placeholder="Enter URL..."
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        style={{
          padding: "10px",
          width: "80%",
          marginTop: "10px",
        }}
      />

      <br />

      <button
        onClick={checkURL}
        style={{
          marginTop: "15px",
          padding: "10px 20px",
          cursor: "pointer",
        }}
      >
        Check URL
      </button>

      {result && (
        <div style={{ marginTop: "20px" }}>
          <h3>Status: {result.status}</h3>
          <p>Risk Score: {result.score}/100</p>
        </div>
      )}
    </div>
  );
}

export default PhishingDetector;