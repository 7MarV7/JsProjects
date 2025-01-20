import { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { LanguageContext } from './LanguageContext';


export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("de");

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    console.log(`Sprache geändert auf: ${lang === "de" ? "Deutsch" : "Englisch"}`);
  };

  return (
    <LanguageContext.Provider value={{ language, handleLanguageChange }}>
      {children}
    </LanguageContext.Provider>
  );
};

LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

function Header() {
  const { language, handleLanguageChange } = useContext(LanguageContext);

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