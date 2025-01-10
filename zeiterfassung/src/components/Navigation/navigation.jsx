import "./navigation.css";

function Navigation() {
  return (
    <nav className="nav">
      <a href="#"><i className="ri-home-line"></i> Startseite</a>
      <a href="#"><i className="ri-user-line"></i> Mitarbeiter</a>
      <a href="#"><i className="ri-time-line"></i> Zeit</a>
      <a href="#"><i className="ri-layout-grid-line"></i> Anwesenheitsdisplay</a>
      <a href="#"><i className="ri-calendar-line"></i> Kalender</a>
      <a href="#"><i className="ri-lightbulb-line"></i> Ampelkonto</a>
      <a href="#"><i className="ri-file-list-line"></i> Zeiterfassung</a>
    </nav>
  );
}

export default Navigation;
