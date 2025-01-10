import "./Content.css";

function TerminalCard() {
  return (
    <div className="card terminal-card">
      <h2>Terminal</h2>
      <p>Datum: Di, 7. Januar 2025</p>
      <p>Status: <span>Anwesend</span></p>
      <button><i className="ri-navigation-line"></i>Status ändern</button>
    </div>
  );
}

export default TerminalCard;
