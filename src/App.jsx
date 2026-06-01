import { useState } from "react";
import PasswordChecker from "./PasswordChecker";
import PhishingDetector from "./PhishingDetector";
import AIAssistant from "./AIAssistant";

import cyber1 from "./assets/cyber1.jpg";
import cyber2 from "./assets/cyber2.jpg";
import cyber3 from "./assets/cyber3.jpg";

function App() {
  const [activeTool, setActiveTool] = useState("home");

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-5 border-b border-slate-800">
        <h1 className="text-3xl font-bold text-cyan-400">
          🛡 CyberGuard AI
        </h1>

        <div className="space-x-4">
          <button
            onClick={() => setActiveTool("home")}
            className="hover:text-cyan-400"
          >
            Home
          </button>

          <button
            onClick={() => setActiveTool("password")}
            className="hover:text-cyan-400"
          >
            Password Checker
          </button>

          <button
            onClick={() => setActiveTool("phishing")}
            className="hover:text-cyan-400"
          >
            Phishing Detector
          </button>

          <button
            onClick={() => setActiveTool("ai")}
            className="hover:text-cyan-400"
          >
            AI Assistant
          </button>
        </div>
      </nav>

      {/* HOME PAGE */}
      {activeTool === "home" && (
        <>
          {/* Hero */}
          <section className="text-center py-16 px-5">
            <h1 className="text-5xl font-bold mb-5">
              AI-Powered Cybersecurity Platform
            </h1>

            <p className="text-slate-400 text-xl max-w-3xl mx-auto">
              Detect phishing links, analyze password strength and learn
              cybersecurity using intelligent tools.
            </p>

            <button
              onClick={() => setActiveTool("password")}
              className="mt-8 bg-cyan-500 px-6 py-3 rounded-xl font-semibold hover:bg-cyan-600"
            >
              Start Protection
            </button>
          </section>

          {/* Images */}
          <section className="flex flex-wrap justify-center gap-6 px-5">
            <img
              src={cyber1}
              alt="Cyber Security"
              className="w-80 h-52 object-cover rounded-xl shadow-lg hover:scale-105 transition"
            />

            <img
              src={cyber2}
              alt="Data Protection"
              className="w-80 h-52 object-cover rounded-xl shadow-lg hover:scale-105 transition"
            />

            <img
              src={cyber3}
              alt="AI Security"
              className="w-80 h-52 object-cover rounded-xl shadow-lg hover:scale-105 transition"
            />
          </section>

          {/* Feature Cards */}
          <section className="flex flex-wrap justify-center gap-6 mt-16 px-5">

            <div className="bg-slate-900 p-6 rounded-xl w-72 hover:scale-105 hover:shadow-cyan-500/50 hover:shadow-2xl transition duration-300">
              <h2 className="text-2xl mb-3">🔐 Password Checker</h2>
              <p className="text-slate-400">
                Analyze password strength instantly.
              </p>
            </div>

            <div className="bg-slate-900 p-6 rounded-xl w-72 hover:scale-105 hover:shadow-cyan-500/50 hover:shadow-2xl transition duration-300">
              <h2 className="text-2xl mb-3">⚠️ Phishing Detector</h2>
              <p className="text-slate-400">
                Detect suspicious URLs and phishing links.
              </p>
            </div>

            <div className="bg-slate-900 p-6 rounded-xl w-72 hover:scale-105 hover:shadow-cyan-500/50 hover:shadow-2xl transition duration-300">
              <h2 className="text-2xl mb-3">🤖 AI Assistant</h2>
              <p className="text-slate-400">
                Learn cybersecurity concepts instantly.
              </p>
            </div>

          </section>

          {/* Dashboard Stats */}
          <section className="flex flex-wrap justify-center gap-6 py-16">

            <div className="bg-slate-900 p-6 rounded-xl w-56 text-center border border-red-500">
              <h2 className="text-3xl font-bold text-red-400">1,247</h2>
              <p>Threats Blocked Today</p>
            </div>

            <div className="bg-slate-900 p-6 rounded-xl w-56 text-center border border-yellow-500">
              <h2 className="text-3xl font-bold text-yellow-400">328</h2>
              <p>Phishing URLs Detected</p>
            </div>

            <div className="bg-slate-900 p-6 rounded-xl w-56 text-center border border-green-500">
              <h2 className="text-3xl font-bold text-green-400">99.8%</h2>
              <p>Protection Score</p>
            </div>

          </section>
        </>
      )}

      {/* PASSWORD CHECKER */}
      {activeTool === "password" && (
        <section className="py-10 px-5">
          <PasswordChecker />
        </section>
      )}

      {/* PHISHING DETECTOR */}
      {activeTool === "phishing" && (
        <section className="py-10 px-5">
          <PhishingDetector />
        </section>
      )}

      {/* AI ASSISTANT */}
      {activeTool === "ai" && (
        <section className="py-10 px-5">
          <AIAssistant />
        </section>
      )}

      {/* Footer */}
      <footer className="text-center py-8 border-t border-slate-800 text-slate-400">
        <h3 className="text-cyan-400 font-bold text-lg">
          🛡 CyberGuard AI
        </h3>

        <p className="mt-2">
          Protecting users against phishing, weak passwords and cyber threats.
        </p>

        <p className="mt-3 text-sm">
          Built by Tanik Chopra • Hackathon Project 2026
        </p>
      </footer>

    </div>
  );
}

export default App;