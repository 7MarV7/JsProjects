import PropTypes from "prop-types";
import { FaPlane, FaClock, FaUmbrellaBeach, FaCheck, FaEdit } from "react-icons/fa";
import "./Styles/general.css";

function ProfileCard({
  name = "John Doe",
  email = "john.doe@example.com",
  department = "Engineering",
  phone = "123-456-7890",
  imageUrlNew = "/images/istockphoto-1495088043-612x612.jpg", 
  office = "Main Office",
  employeeNumber = "12345",
}) {
  const handleActionClick = (action) => {
    alert(`${action} wird bald verfügbar sein.`);
  };

  return (
    <div className="card-profile-card">
      <div className="profile-header">
        <img src={imageUrlNew} alt="Profilbild" className="profile-image" />
        <div className="profile-info">
          <h2>{name}</h2>
          <p>{email}</p>
        </div>
      </div>

      <div className="profile-details">
        <div className="detail-item">
          <strong>Fachbereich</strong>
          <p>{department}</p>
        </div>
        <div className="detail-item">
          <strong>Telefon</strong>
          <p>{phone}</p>
        </div>
        <div className="detail-item">
          <strong>Office</strong>
          <p>{office}</p>
        </div>
        <div className="detail-item">
          <strong>Employee Number</strong>
          <p>{employeeNumber}</p>
        </div>
      </div>

      <div className="profile-actions">
        <button  onClick={() => handleActionClick("Urlaubsantrag")}>
          <FaUmbrellaBeach /> Urlaubsantrag
        </button>
        <button  onClick={() => handleActionClick("Überstunden eintragen")}>
          <FaClock /> Überstunden eintragen
        </button>
        <button  onClick={() => handleActionClick("Reiseantrag")}>
          <FaPlane /> Reiseantrag
        </button>
        <button  onClick={() => handleActionClick("Fortbildungen")}>
          <FaCheck /> Fortbildungen
        </button>
      </div>
      
      <div className="profile-edit-button">
        <button onClick={() => handleActionClick("Profil bearbeiten")}>
          <FaEdit /> Profil bearbeiten
        </button>
      </div>
    </div>
  );
}

ProfileCard.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  department: PropTypes.string,
  phone: PropTypes.string,
  imageUrlNew: PropTypes.string,
  office: PropTypes.string,
  employeeNumber: PropTypes.string,
};

export default ProfileCard;