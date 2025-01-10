import "./Content.css";

function TimeAccountsCard() {
  return (
    <div className="card time-card">
      <h2>Zeitkonten</h2>
      <p>Saldo: 00:00 h</p>
      <p>(Über-/Fehlstunden)</p>
      <button><i className="ri-navigation-line"></i>Übersicht erfasste Zeiten</button>
    </div>
  );
}

export default TimeAccountsCard;
