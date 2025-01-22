import { useContext, useState } from "react";
import "./Styles/general.css";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { LanguageContext } from "../../functions/LanguageContext";

ChartJS.register(ArcElement, Tooltip, Legend);

function VacationCard() {
  const { language } = useContext(LanguageContext);

  const texts = {
    en: {
      vacationEntitlement: "Vacation Entitlement",
      vacationTaken: "Vacation Taken",
      vacationPlanned: "Vacation Planned",
      remainingVacation: "Remaining Vacation",
    },
    de: {
      vacationEntitlement: "Urlaubsanspruch",
      vacationTaken: "Urlaub genommen",
      vacationPlanned: "Urlaub geplant",
      remainingVacation: "Resturlaub",
    },
  };

  const currentTexts = texts[language] || texts.en;

  const labels = [
    currentTexts.vacationEntitlement,
    currentTexts.vacationTaken,
    currentTexts.vacationPlanned,
    currentTexts.remainingVacation,
  ];

  const [vacationData] = useState({
    total: 25,
    taken: 15,
    planned: 5,
  });

  const remaining = vacationData.total - (vacationData.taken + vacationData.planned);

  const data = {
    labels: labels,
    datasets: [
      {
        data: [vacationData.total, vacationData.taken, vacationData.planned, remaining], 
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"]
      }
    ]
  };

  const handleOpenVacationOverview = () => {
    alert(language === "de" ? "Urlaubsübersicht wird geöffnet." : "Vacation overview is opening.");
  };

  return (
    <div className="card-vacation-card">
      <h2>{currentTexts.vacationEntitlement}</h2>
      <p>{language === "de" ? "Gesamt" : "Total"}: {vacationData.total} {language === "de" ? "Tage" : "days"}</p>
      <p>{currentTexts.vacationTaken}: {vacationData.taken} {language === "de" ? "Tage" : "days"}</p>
      <p>{currentTexts.vacationPlanned}: {vacationData.planned} {language === "de" ? "Tage" : "days"}</p>
      <p>{currentTexts.remainingVacation}: {remaining} {language === "de" ? "Tage" : "days"}</p>
      <Doughnut data={data} />
      <button onClick={handleOpenVacationOverview}>
        <i className="ri-navigation-line"></i>{language === "de" ? "Urlaubsübersicht öffnen" : "Open Vacation Overview"}
      </button>
    </div>
  );
}

export default VacationCard;
