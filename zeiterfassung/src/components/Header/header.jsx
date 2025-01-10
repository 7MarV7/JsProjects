import { useState } from "react";
import './header.css';

function Header() {
  const [language, setLanguage] = useState("de");

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    console.log(`Sprache geändert auf: ${lang === "de" ? "Deutsch" : "Englisch"}`);
  };

  return (
    <header className="header">
      <h1>{language === "de" ? "Zeiterfassungssoftware" : "Time Tracking Software"}</h1>
      <div className="header-actions">
        <div className="language-selector">
          <button className="languageButton" onClick={() => handleLanguageChange("de")} aria-label="Switch to German">
            <img src="/images/germany.png" alt="Deutsch" className="flag" />
          </button>
          <div className="separator"></div>
          <button className="languageButton" onClick={() => handleLanguageChange("en")} aria-label="Switch to English">
            <img src="/images/united-states.png" alt="English" className="flag" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
