import PropTypes from "prop-types";
import { FaPlane, FaClock, FaUmbrellaBeach, FaCheck, FaEdit } from "react-icons/fa";
import "./Styles/general.css";


function ActionButton({ icon, label, onClick }) {
  return (
    <button className="profile-action-button" onClick={onClick}>
      {icon} {label}
    </button>
  );
}

ActionButton.propTypes = {
  icon: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};


function ProfileCard({
  name = "John Doe",
  email = "john.doe@example.com",
  department = "Engineering",
  phone = "123-456-7890",
  imageUrlNew = "/images/istockphoto-1495088043-612x612.jpg",
  office = "Main Office",
  employeeNumber = "12345",
}) {
  const actions = [
    { icon: <FaUmbrellaBeach />, label: "Urlaubsantrag", action: "Urlaubsantrag" },
    { icon: <FaClock />, label: "Überstunden eintragen", action: "Überstunden eintragen" },
    { icon: <FaPlane />, label: "Reiseantrag", action: "Reiseantrag" },
    { icon: <FaCheck />, label: "Fortbildungen", action: "Fortbildungen" },
  ];

  const handleActionClick = (action) => {
    alert(`${action} wird bald verfügbar sein.`);
  };

  return (
    <div className="card-profile-card">
      <div className="profile-header">
        <img
          src={imageUrlNew || "/images/default-profile.jpg"}
          alt="Profilbild"
          className="profile-image"
        />
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
        {actions.map((item, index) => (
          <ActionButton
            key={index}
            icon={item.icon}
            label={item.label}
            onClick={() => handleActionClick(item.action)}
          />
        ))}
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
