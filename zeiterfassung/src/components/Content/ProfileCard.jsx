import PropTypes from "prop-types";
import { FaPlane, FaClock, FaUmbrellaBeach, FaCheck } from "react-icons/fa";
import "./Content.css"; 

function ProfileCard({
  name = "John Doe",
  email = "john.doe@example.com",
  department = "Engineering",
  phone = "123-456-7890",
  imageUrl = "/images/istockphoto-1495088043-612x612.jpg", 
  office = "Main Office",
  employeeNumber = "12345",
}) {
  const handleActionClick = (action) => {
    alert(`${action} wird bald verfügbar sein.`);
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
        <button onClick={() => handleActionClick("Urlaub beantragen")}>
          <FaUmbrellaBeach /> Urlaub beantragen
        </button>
        <button onClick={() => handleActionClick("Überstunden eintragen")}>
          <FaClock /> Überstunden eintragen
        </button>
        <button onClick={() => handleActionClick("Dienstreise beantragen")}>
          <FaPlane /> Dienstreise beantragen
        </button>
        <button onClick={() => handleActionClick("Aufgabe abschließen")}>
          <FaCheck /> Aufgabe abschließen
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
  imageUrl: PropTypes.string,
  office: PropTypes.string,
  employeeNumber: PropTypes.string,
};

export default ProfileCard;