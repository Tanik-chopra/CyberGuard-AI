import { useState } from "react";

function AIAssistant() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const getAnswer = () => {
    const q = question.toLowerCase();

    if (q.includes("phishing")) {
      setAnswer(
        "Phishing is a cyber attack where attackers trick users into revealing sensitive information through fake emails, websites, or messages."
      );
    } else if (q.includes("password")) {
      setAnswer(
        "A strong password should contain uppercase letters, lowercase letters, numbers, and special characters."
      );
    } else if (q.includes("malware")) {
      setAnswer(
        "Malware is malicious software designed to damage, steal data, or gain unauthorized access to systems."
      );
    } else {
      setAnswer(
        "I can help with cybersecurity topics such as phishing, malware, passwords, ransomware, and online safety."
      );
    }
  };

  return (
    <div
      style={{
        background: "#111827",
        padding: "25px",
        borderRadius: "12px",
        maxWidth: "700px",
        margin: "40px auto",
      }}
    >
      <h2>🤖 AI Cyber Assistant</h2>

      <input
        type="text"
        placeholder="Ask a cybersecurity question..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
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
        onClick={getAnswer}
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
        Ask AI
      </button>

      {answer && (
        <div style={{ marginTop: "20px" }}>
          <h3>Answer:</h3>
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}

export default AIAssistant;