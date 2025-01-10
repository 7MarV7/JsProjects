import { useState } from "react";
import "./Content.css";

// VacationCard Component
export function VacationCard() {
  const [vacationData, setVacationData] = useState({
    total: 30,
    taken: 15,
    planned: 5,
  });

  const remaining = vacationData.total - (vacationData.taken + vacationData.planned);

  const handleOpenVacationOverview = () => {
    alert("Urlaubsübersicht wird geöffnet.");
  };

  const addPlannedVacationDay = () => {
    setVacationData((prevData) => ({
      ...prevData,
      planned: prevData.planned + 1,
    }));
  };

  return (
    <div className="card-vacation-card">
      <h2>Mein Urlaubskonto</h2>
      <p>Urlaubsanspruch: {vacationData.total} Tage</p>
      <p>Urlaub genommen: {vacationData.taken} Tage</p>
      <p>Urlaub geplant: {vacationData.planned} Tage</p>
      <p>Resturlaub: {remaining} Tage</p>
      <button onClick={handleOpenVacationOverview}>
        <i className="ri-navigation-line"></i>Urlaubsübersicht öffnen
      </button>
      <button onClick={addPlannedVacationDay}>
        <i className="ri-add-line"></i> Geplanten Urlaubstag hinzufügen
      </button>
    </div>
  );
}
