import "./Content.css";

function ProfileCard() {
  return (
    <div className="card profile-card">
      <h2>Nachname, Vorname</h2>
      <p>Emailadresse</p>
      <p>Fachbereich: Abteilung</p>
      <p>Telefon: Nummer</p>
      <div className="profile-links">
        <a href="#">Reiseantrag</a>
        <a href="#">Urlaubsantrag</a>
        <a href="#">Meine Zeiten</a>
        <a href="#">Meine Bewertungen</a>
      </div>
      <button><i className="ri-navigation-line"></i>Profil Bearbeiten</button>
    </div>
  );
}

export default ProfileCard;
