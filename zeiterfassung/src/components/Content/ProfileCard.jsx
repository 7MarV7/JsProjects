import PropTypes from 'prop-types';
import { FaCar, FaClock, FaCamera, FaCheck, FaEdit } from 'react-icons/fa';

function ProfileCard({
  name = 'Unbekannt',
  email = 'Keine E-Mail',
  department = 'Unbekannt',
  phone = 'Keine Telefonnummer',
  imageUrl = 'https://via.placeholder.com/150',  // Platzhalterbild
  office = 'Unbekannt',
  employeeNumber = 'Keine Nummer',
}) {
  const handleEditProfile = () => {
    alert("Profil bearbeiten wird bald verfügbar sein.");
  };

  return (
    <div className="card-profile-card">
      <div className="profile-header">
        <img src={imageUrl} alt="Profilbild" className="profile-image" />
        <div className="profile-info">
          <h2>{name}</h2>
          <p>{email}</p>
        </div>
      </div>

      <div className="profile-details">
        <div>
          <strong>Fachbereich</strong>
          <p>{department}</p>
        </div>
        <div>
          <strong>Telefon</strong>
          <p>{phone}</p>
        </div>
        <div>
          <strong>Abteilung</strong>
          <p>{office}</p>
        </div>
        <div>
          <strong>Nummer</strong>
          <p>{employeeNumber}</p>
        </div>
      </div>

      <div className="profile-links">
        <a href="#">
          <FaCar /> Reiseantrag
        </a>
        <a href="#">
          <FaClock /> <span className="blue-text">Meine Zeiten</span>
        </a>
        <a href="#">
          <FaCamera /> <span className="blue-text">Urlaubsantrag</span>
        </a>
        <a href="#" className="no-tabstop">
          <FaCheck /> Meine Bewertungen
        </a>
      </div>

      <button onClick={handleEditProfile} className="edit-button">
        <FaEdit /> Profil bearbeiten
      </button>
    </div>
  );
}

// PropTypes-Validierung
ProfileCard.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  department: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  office: PropTypes.string.isRequired,
  employeeNumber: PropTypes.string.isRequired,
};

export default ProfileCard;
