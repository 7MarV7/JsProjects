import { useState, useContext } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Styles/general.css";
import { LanguageContext } from "../../functions/LanguageContext";

export default function CalendarCard() {
  const { language } = useContext(LanguageContext);
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Define text content based on the current language
  const texts = {
    en: {
      today: "Today is",
      openCalendar: "Open my calendar",
      alert: "My calendar will be opened."
    },
    de: {
      today: "Heute ist der",
      openCalendar: "Meinen Kalender öffnen",
      alert: "Mein Kalender wird geöffnet."
    }
  };

  const currentTexts = texts[language] || texts.en;

  const today = new Date().toLocaleDateString(language === "de" ? "de-DE" : "en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const handleOpenCalendar = () => {
    alert(currentTexts.alert);
  };

  return (
    <div className="card-calendar-card">
      <h2>{currentTexts.today} {today}</h2>
      <div className="calendar">
        <Calendar value={selectedDate} onChange={setSelectedDate} />
      </div>
      <button className="open-calendar" onClick={handleOpenCalendar}>
        <i className="ri-navigation-line"></i> {currentTexts.openCalendar}
      </button>
    </div>
  );
}