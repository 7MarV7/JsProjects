import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Content.css";

export default function CalendarCard() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const today = new Date().toLocaleDateString("de-DE", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const handleOpenCalendar = () => {
    alert("Mein Kalender wird geöffnet.");
  };

  return (
    <div className="card-calendar-card">
      <h2>Heute ist der {today}</h2>
      <div className="calendar">
        <Calendar value={selectedDate} onChange={setSelectedDate} />
      </div>
      <button onClick={handleOpenCalendar}>
        <i className="ri-navigation-line"></i> Meinen Kalender öffnen
      </button> 
    </div>
  );
}