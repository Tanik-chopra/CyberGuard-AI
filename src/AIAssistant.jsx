import { useState } from "react";

function AIAssistant() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const getAnswer = () => {
    let q = question.toLowerCase();

    if (q.includes("phishing")) {
      setAnswer("Phishing is a cyber attack where attackers trick users into giving personal information like passwords or OTPs.");
    } 
    else if (q.includes("password")) {
      setAnswer("Use strong passwords with uppercase, lowercase, numbers, and symbols. Never reuse passwords.");
    } 
    else if (q.includes("virus")) {
      setAnswer("A computer virus is malicious software that can damage files or steal data.");
    } 
    else if (q.includes("hack")) {
      setAnswer("Hacking is gaining unauthorized access to systems. Always use security tools and 2FA.");
    } 
    else {
      setAnswer("Sorry, I am a simple demo AI. Try asking about phishing, password, virus, or hacking.");
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
      <h2>🤖 AI Cyber Assistant</h2>

      <input
        type="text"
        placeholder="Ask a cybersecurity question..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        style={{
          padding: "10px",
          width: "80%",
          marginTop: "10px",
        }}
      />

      <br />

      <button
        onClick={getAnswer}
        style={{
          marginTop: "15px",
          padding: "10px 20px",
          cursor: "pointer",
        }}
      >
        Ask AI
      </button>

      {answer && (
        <div style={{ marginTop: "20px" }}>
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}

export default AIAssistant;