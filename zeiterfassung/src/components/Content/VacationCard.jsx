import { useState } from "react";
import "./Content.css";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

function VacationCard() {
  const [vacationData] = useState({
    total: 25,
    taken: 15,
    planned: 5,
  });

  const remaining = vacationData.total - (vacationData.taken + vacationData.planned);

  const data = {
    labels: ["Urlaubsanspruch", "Urlaub genommen", "Urlaub geplant", "Resturlaub"],
    datasets: [
      {
        data: [vacationData.total, vacationData.taken, vacationData.planned, remaining], 
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"]
      }
    ]
  };

  const handleOpenVacationOverview = () => {
    alert("Urlaubsübersicht wird geöffnet.");
  };

  return (
    <div className="card-vacation-card">
      <h2>Urlaubsanspruch</h2>
      <p>Gesamt: {vacationData.total} Tage</p>
      <p>Genommen: {vacationData.taken} Tage</p>
      <p>Geplant: {vacationData.planned} Tage</p>
      <p>Resturlaub: {remaining} Tage</p>
      <Doughnut data={data} />
      <button onClick={handleOpenVacationOverview}>
        <i className="ri-navigation-line"></i>Urlaubsübersicht öffnen
      </button>
    </div>
  );
}

export default VacationCard;
