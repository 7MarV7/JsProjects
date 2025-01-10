import { useState } from "react";

function Header() {
  const [language, setLanguage] = useState("de");

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    // Hier kannst du die Logik zum Ändern der Sprache implementieren
    console.log(`Sprache geändert auf: ${lang === "de" ? "Deutsch" : "Englisch"}`);
  };

  return (
    <header className="header">
      <h1>{language === "de" ? "Zeiterfassungssoftware" : "Time Tracking Software"}</h1>
      <div className="header-actions">
        <div className="language-selector">
          <button onClick={() => handleLanguageChange("de")}>
            <img src="../zeiterfassung/src/img/germany.png" alt="Deutsch" className="flag" />
          </button>
          <button onClick={() => handleLanguageChange("en")}>
            <img src="../zeiterfassung/src/img/uk.png" alt="English" className="flag" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
