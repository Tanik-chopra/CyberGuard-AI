import { useState } from "react";

function PasswordChecker() {
  const [password, setPassword] = useState("");

  const getStrength = () => {
    let score = 0;

    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    if (score <= 1) return "Weak";
    if (score <= 3) return "Medium";
    return "Strong";
  };

  const strength = getStrength();

  return (
    <div
      style={{
        background: "#111827",
        padding: "25px",
        borderRadius: "15px",
        maxWidth: "500px",
        margin: "40px auto",
        boxShadow: "0 0 20px rgba(37,99,235,0.3)",
      }}
    >
      <h2>🔐 Password Strength Checker</h2>

      <input
        type="password"
        placeholder="Enter your password..."
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{
          width: "90%",
          padding: "12px",
          borderRadius: "8px",
          border: "none",
          marginTop: "15px",
          fontSize: "16px",
        }}
      />

      <div
        style={{
          marginTop: "20px",
          padding: "10px",
          borderRadius: "8px",
          background:
            strength === "Strong"
              ? "#065f46"
              : strength === "Medium"
              ? "#92400e"
              : "#7f1d1d",
        }}
      >
        <strong>
          Strength: {password ? strength : "Enter a password"}
        </strong>
      </div>
    </div>
  );
}

export default PasswordChecker;