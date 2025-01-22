import { useState, useContext } from 'react';
import { LanguageContext } from "../../functions/LanguageContext";

function TerminalCard() {
  const { language } = useContext(LanguageContext);

  // Define text content based on the current language
  const texts = {
    en: {
      title: "Terminal",
      date: "Date",
      status: "Status",
      button: "Change Status",
      alert: "Status changed to: ",
      present: "Present",
      absent: "Absent"
    },
    de: {
      title: "Terminal",
      date: "Datum",
      status: "Status",
      button: "Status ändern",
      alert: "Status geändert auf: ",
      present: "Anwesend",
      absent: "Abwesend"
    }
  };

  const currentTexts = texts[language] || texts.en;

  const [status, setStatus] = useState(currentTexts.present);
  const today = new Date().toLocaleDateString();

  const toggleStatus = () => {
    setStatus((prevStatus) => {
      const newStatus = prevStatus === currentTexts.present ? currentTexts.absent : currentTexts.present;
      alert(`${currentTexts.alert} ${newStatus}`);
      return newStatus;
    });
  };

  return (
    <div className="card-terminal-card">
      <h2>{currentTexts.title}</h2>
      <p>{currentTexts.date}: {today}</p>
      <p>{currentTexts.status}: <strong>{status}</strong></p>
      <button onClick={toggleStatus}>
        <i className="ri-navigation-line"></i>{currentTexts.button}
      </button>
    </div>
  );
}

export default TerminalCard;
