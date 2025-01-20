import PropTypes from 'prop-types';
import { FaEdit } from 'react-icons/fa';

function ProfileCard({
  name = 'Unbekannt',
  email = 'Keine E-Mail',
  department = 'Unbekannt',
  phone = 'Keine Telefonnummer',
  imageUrl = 'https://via.placeholder.com/150',  
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
          <strong>Büro</strong>
          <p>{office}</p>
        </div>
        <div>
          <strong>Mitarbeiternummer</strong>
          <p>{employeeNumber}</p>
        </div>
      </div>

      <button onClick={handleEditProfile}>
        <FaEdit /> Profil bearbeiten
      </button>
    </div>
  );
}

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
