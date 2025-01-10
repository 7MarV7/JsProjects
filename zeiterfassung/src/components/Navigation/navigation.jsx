import { useState } from "react";
import "./navigation.css";

function Navigation() {
  const [activeLink, setActiveLink] = useState("Startseite");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className="nav">
      <a
        href="#"
        className={activeLink === "Startseite" ? "active" : ""}
        onClick={() => handleLinkClick("Startseite")}
      >
        <i className="ri-home-line"></i> <span>Startseite</span>
      </a>
      <a
        href="#"
        className={activeLink === "Mitarbeiter" ? "active" : ""}
        onClick={() => handleLinkClick("Mitarbeiter")}
      >
        <i className="ri-user-line"></i> <span>Mitarbeiter</span>
      </a>
      <a
        href="#"
        className={activeLink === "Zeit" ? "active" : ""}
        onClick={() => handleLinkClick("Zeit")}
      >
        <i className="ri-time-line"></i> <span>Zeit</span>
      </a>
      <a
        href="#"
        className={activeLink === "Anwesenheitsdisplay" ? "active" : ""}
        onClick={() => handleLinkClick("Anwesenheitsdisplay")}
      >
        <i className="ri-layout-grid-line"></i> <span>Anwesenheitsdisplay</span>
      </a>
      <a
        href="#"
        className={activeLink === "Kalender" ? "active" : ""}
        onClick={() => handleLinkClick("Kalender")}
      >
        <i className="ri-calendar-line"></i> <span>Kalender</span>
      </a>
      <a
        href="#"
        className={activeLink === "Ampelkonto" ? "active" : ""}
        onClick={() => handleLinkClick("Ampelkonto")}
      >
        <i className="ri-lightbulb-line"></i> <span>Ampelkonto</span>
      </a>
      <a
        href="#"
        className={activeLink === "Zeiterfassung" ? "active" : ""}
        onClick={() => handleLinkClick("Zeiterfassung")}
      >
        <i className="ri-file-list-line"></i> <span>Zeiterfassung</span>
      </a>
    </nav>
  );
}

export default Navigation;