import { useState } from "react";
import "./Content.css";

function TimeAccountsCard() {
  const [balance] = useState(0);

  const handleOpenTimeOverview = () => {
    alert("Übersicht erfasste Zeiten wird geöffnet.");
  };

  return (
    <div className="card-time-card">
      <h2>Zeitkonten</h2>
      <p>Saldo: {balance}</p>
      <p>(Über-/Fehlstunden)</p>
      <button onClick={handleOpenTimeOverview}>
        <i className="ri-navigation-line"></i>Übersicht erfasste Zeiten
      </button>
    </div>
  );
}

export default TimeAccountsCard;