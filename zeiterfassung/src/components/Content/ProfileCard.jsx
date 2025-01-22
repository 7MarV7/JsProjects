import { useContext } from 'react';
import PropTypes from 'prop-types';
import { FaPlane, FaClock, FaUmbrellaBeach, FaCheck, FaEdit} from "react-icons/fa";
import { LanguageContext } from "../../functions/LanguageContext";
import "./Styles/general.css";

// ActionButton-Komponente für Wiederverwendbarkeit
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

// ProfileCard-Komponente
function ProfileCard({
  name = "John Doe",
  email = "john.doe@example.com",
  department = "Engineering",
  phone = "123-456-7890",
  imageUrlNew = "/images/istockphoto-1495088043-612x612.jpg",
  office = "Main Office",
  employeeNumber = "12345",
}) {
  const { language } = useContext(LanguageContext);

  const texts = {
    en: {
      actionAlert: "will be available soon.",
      vacationRequest: "Vacation Request",
      logOvertime: "Log Overtime",
      travelRequest: "Travel Request",
      trainings: "Trainings",
      editProfile: "Edit Profile",
    },
    de: {
      actionAlert: "wird bald verfügbar sein.",
      vacationRequest: "Urlaubsantrag",
      logOvertime: "Überstunden eintragen",
      travelRequest: "Reiseantrag",
      trainings: "Fortbildungen",
      editProfile: "Profil bearbeiten",
    },
  };

  const currentTexts = texts[language] || texts.en;

  const actions = [
    { icon: <FaUmbrellaBeach />, label: currentTexts.vacationRequest, action: "vacationRequest" },
    { icon: <FaClock />, label: currentTexts.logOvertime, action: "logOvertime" },
    { icon: <FaPlane />, label: currentTexts.travelRequest, action: "travelRequest" },
    { icon: <FaCheck />, label: currentTexts.trainings, action: "trainings" },
  ];

  const handleActionClick = (action) => {
    alert(`${currentTexts[action]} ${currentTexts.actionAlert}`);
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
          <strong>{language === 'en' ? 'Department' : 'Fachbereich'}</strong>
          <p>{department}</p>
        </div>
        <div className="detail-item">
          <strong>{language === 'en' ? 'Phone' : 'Telefon'}</strong>
          <p>{phone}</p>
        </div>
        <div className="detail-item">
          <strong>{language === 'en' ? 'Office' : 'Büro'}</strong>
          <p>{office}</p>
        </div>
        <div className="detail-item">
          <strong>{language === 'en' ? 'Employee Number' : 'Mitarbeiternummer'}</strong>
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

      <div className="profile-edit">
        <button onClick={() => handleActionClick("editProfile")}>
          <FaEdit /> {language === 'en' ? 'Edit Profile' : 'Profil bearbeiten'}
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
