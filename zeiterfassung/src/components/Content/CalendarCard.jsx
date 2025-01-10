import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Content.css";

// CalendarCard Component
export default function CalendarCard() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const today = new Date().toLocaleDateString("de-DE", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="card-calendar-card">
      <h2>Heute ist der {today}</h2>
      <div className="calendar">
        <Calendar value={selectedDate} onChange={setSelectedDate} />
      </div>
      <button>
        <i className="ri-navigation-line"></i> Meinen Kalender öffnen
      </button>
    </div>
  );
}

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