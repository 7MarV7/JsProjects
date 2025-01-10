import PropTypes from "prop-types";

// ProfileCard Component
export function ProfileCard({ name, email, department, phone }) {
  const handleEditProfile = () => {
    alert("Profil bearbeiten wird bald verfügbar sein.");
  };

  return (
    <div className="card-profile-card">
      <h2>{name}</h2>
      <p>{email}</p>
      <p>Fachbereich: {department}</p>
      <p>Telefon: {phone}</p>
      <div className="profile-links">
        <a href="#">Reiseantrag</a>
        <a href="#">Urlaubsantrag</a>
        <a href="#">Meine Zeiten</a>
        <a href="#">Meine Bewertungen</a>
      </div>
      <button onClick={handleEditProfile}>
        <i className="ri-navigation-line"></i>Profil Bearbeiten
      </button>
    </div>
  );
}

// PropTypes validation
ProfileCard.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  department: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
