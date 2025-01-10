import { useState } from "react";
import "./Content.css";

// TimeAccountsCard Component
export function TimeAccountsCard() {
  const [balance, setBalance] = useState(0); // Balance in hours

  const handleOpenTimeOverview = () => {
    alert("Übersicht erfasste Zeiten wird geöffnet.");
  };

  const increaseBalance = () => {
    setBalance((prevBalance) => prevBalance + 1);
  };

  const formatBalance = (hours) => {
    const sign = hours >= 0 ? "+" : "-";
    const absoluteHours = Math.abs(hours);
    const fullHours = Math.floor(absoluteHours);
    const minutes = Math.round((absoluteHours - fullHours) * 60);
    return `${sign} ${fullHours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')} h`;
  };

  return (
    <div className="card-time-card">
      <h2>Zeitkonten</h2>
      <p>Saldo: {formatBalance(balance)}</p>
      <p>(Über-/Fehlstunden)</p>
      <button onClick={handleOpenTimeOverview}>
        <i className="ri-navigation-line"></i>Übersicht erfasste Zeiten
      </button>
      <button onClick={increaseBalance}>
        <i className="ri-add-line"></i> Stunde hinzufügen
      </button>
    </div>
  );
}
