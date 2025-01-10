import { useState } from "react";
import "./Content.css";

// TerminalCard Component
export default function TerminalCard() {
  const [status, setStatus] = useState("Anwesend");
  const today = new Date().toLocaleDateString("de-DE", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const toggleStatus = () => {
    setStatus((prevStatus) => (prevStatus === "Anwesend" ? "Abwesend" : "Anwesend"));
  };

  return (
    <div className="card-terminal-card">
      <h2>Terminal</h2>
      <p>Datum: {today}</p>
      <p>Status: <strong>{status}</strong></p>
      <button onClick={toggleStatus}>
        <i className="ri-navigation-line"></i>Status ändern
      </button>
    </div>
  );
}
