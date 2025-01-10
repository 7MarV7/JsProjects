import { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import "./Content.css";

// Register the required components
ChartJS.register(ArcElement, Tooltip, Legend);

// TimeAccountsCard Component
export default function TimeAccountsCard() {
  const [balance] = useState(0);

  const handleOpenTimeOverview = () => {
    alert("Übersicht erfasste Zeiten wird geöffnet.");
  };

  const data = {
    labels: ["Urlaubsanspruch", "Urlaub genommen", "Urlaub geplant", "Resturlaub"],
    datasets: [
      {
        data: [20, 5, 3, 12], // Beispielwerte
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"]
      }
    ]
  };

  return (
    <div className="card-time-card">
      <h2>Zeitkonten</h2>
      <p>Saldo: {balance}</p>
      <p>(Über-/Fehlstunden)</p>
      <button onClick={handleOpenTimeOverview}>
        <i className="ri-navigation-line"></i>Übersicht erfasste Zeiten
      </button>
      <Doughnut data={data} />
    </div>
  );
}