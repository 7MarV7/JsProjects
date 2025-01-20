import { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { LanguageContext } from "../../functions/LanguageContext";
import "./Navigation.css"; 

function Navigation() {
  const { language } = useContext(LanguageContext);
  const [activeLink, setActiveLink] = useState("Startseite");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className="nav">
      <NavLink
        to="/startseite"
        className={activeLink === "Startseite" ? "active" : ""}
        onClick={() => handleLinkClick("Startseite")}
      >
        <i className="ri-home-line"></i> <span>{language === "de" ? "Startseite" : "Home"}</span>
      </NavLink>
      <NavLink
        to="/mitarbeiter"
        className={activeLink === "Mitarbeiter" ? "active" : ""}
        onClick={() => handleLinkClick("Mitarbeiter")}
      >
        <i className="ri-user-line"></i> <span>{language === "de" ? "Mitarbeiter" : "Employee"}</span>
      </NavLink>
      <NavLink
        to="/zeit"
        className={activeLink === "Zeit" ? "active" : ""}
        onClick={() => handleLinkClick("Zeit")}
      >
        <i className="ri-time-line"></i> <span>{language === "de" ? "Zeit" : "Time"}</span>
      </NavLink>
      <NavLink
        to="/anwesenheitsdisplay"
        className={activeLink === "Anwesenheitsdisplay" ? "active" : ""}
        onClick={() => handleLinkClick("Anwesenheitsdisplay")}
      >
        <i className="ri-dashboard-line"></i> <span>{language === "de" ? "Anwesenheitsdisplay" : "Presence"}</span>
      </NavLink>
      <NavLink
        to="/kalender"
        className={activeLink === "Kalender" ? "active" : ""}
        onClick={() => handleLinkClick("Kalender")}
      >
        <i className="ri-calendar-line"></i> <span>{language === "de" ? "Kalender" : "Calendar"}</span>
      </NavLink>
      <NavLink
        to="/aufgaben"
        className={activeLink === "Aufgaben" ? "active" : ""}
        onClick={() => handleLinkClick("Aufgaben")}
      >
        <i className="ri-task-line"></i> <span>{language === "de" ? "Aufgaben" : "Tasks"}</span>
      </NavLink>
      <NavLink
        to="/ampelkonto"
        className={activeLink === "Ampelkonto" ? "active" : ""}
        onClick={() => handleLinkClick("Ampelkonto")}
      >
        <i className="ri-traffic-light-line"></i> <span>{language === "de" ? "Ampelkonto" : "TLA"}</span>
      </NavLink>
      <NavLink
        to="/urlaub"
        className={activeLink === "Urlaub" ? "active" : ""}
        onClick={() => handleLinkClick("Urlaub")}
      >
        <i className="ri-suitcase-line"></i> <span>{language === "de" ? "Urlaub" : "Vacation"}</span>
      </NavLink>
    </nav>
  );
}

export default Navigation;