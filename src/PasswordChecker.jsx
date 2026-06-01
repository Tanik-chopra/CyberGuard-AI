import { useState } from "react";

function PasswordChecker() {
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState("");

  const checkStrength = (pass) => {
    let score = 0;

    if (pass.length >= 8) score++;
    if (/[A-Z]/.test(pass)) score++;
    if (/[a-z]/.test(pass)) score++;
    if (/[0-9]/.test(pass)) score++;
    if (/[@$!%*?&#]/.test(pass)) score++;

    if (score <= 2) return "Weak 🔴";
    if (score === 3 || score === 4) return "Medium 🟡";
    return "Strong 🟢";
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setStrength(checkStrength(value));
  };

  return (
    <div style={{ padding: "20px", marginTop: "30px" }}>
      <h2>🔐 Password Strength Checker</h2>

      <input
        type="text"
        placeholder="Enter password"
        value={password}
        onChange={handleChange}
        style={{
          padding: "10px",
          width: "250px",
          marginTop: "10px"
        }}
      />

      <h3>Strength: {strength}</h3>
    </div>
  );
}

export default PasswordChecker;