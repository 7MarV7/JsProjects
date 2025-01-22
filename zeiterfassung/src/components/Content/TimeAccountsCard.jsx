import { useState, useContext } from "react";
import "./Styles/general.css";
import { LanguageContext } from "../../functions/LanguageContext";

function TimeAccountsCard() {
  // Initialize balance state with 0
  const [balance] = useState(0);

  // Get the current language from context
  const { language } = useContext(LanguageContext);

  // Define text content based on the current language
  const texts = {
    en: {
      title: "Time Accounts",
      balance: "Balance",
      hours: "(Over/Under hours)",
      button: "Overview of recorded times",
      alert: "Overview of recorded times will be opened."
    },
    de: {
      title: "Zeitkonten",
      balance: "Saldo",
      hours: "(Über-/Fehlstunden)",
      button: "Übersicht erfasste Zeiten",
      alert: "Übersicht erfasste Zeiten wird geöffnet."
    }
  };

  const currentTexts = texts[language] || texts.en;

  // Event handler for button click
  const handleOpenTimeOverview = () => {
    alert(currentTexts.alert);
  };

  // JSX to render the component
  return (
    <div className="card-time-card">
      <h2>{currentTexts.title}</h2>
      <p>{currentTexts.balance}: {balance}</p>
      <p>{currentTexts.hours}</p>
      <button onClick={handleOpenTimeOverview}>
        <i className="ri-navigation-line"></i>{currentTexts.button}
      </button>
    </div>
  );
}

export default TimeAccountsCard;