import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css"; 

function Navigation() {
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
        <i className="ri-home-line"></i> <span>Startseite</span>
      </NavLink>
      <NavLink
        to="/mitarbeiter"
        className={activeLink === "Mitarbeiter" ? "active" : ""}
        onClick={() => handleLinkClick("Mitarbeiter")}
      >
        <i className="ri-user-line"></i> <span>Mitarbeiter</span>
      </NavLink>
      <NavLink
        to="/zeit"
        className={activeLink === "Zeit" ? "active" : ""}
        onClick={() => handleLinkClick("Zeit")}
      >
        <i className="ri-time-line"></i> <span>Zeit</span>
      </NavLink>
      <NavLink
        to="/anwesenheitsdisplay"
        className={activeLink === "Anwesenheitsdisplay" ? "active" : ""}
        onClick={() => handleLinkClick("Anwesenheitsdisplay")}
      >
        <i className="ri-display-line"></i> <span>Anwesenheitsdisplay</span>
      </NavLink>
    </nav>
  );
}

export default Navigation;