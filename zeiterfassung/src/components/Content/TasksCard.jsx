import { useState, useContext } from "react";
import "./Styles/general.css";
import { LanguageContext } from "../../functions/LanguageContext";

// TasksCard Component
export default function TasksCard() {
  const { language } = useContext(LanguageContext);

  // Define text content based on the current language
  const texts = {
    en: {
      title: "My Tasks",
      noTasks: "No open tasks.",
      doneButton: "Done",
      overviewButton: "Open task overview",
      alert: "Task overview will be opened"
    },
    de: {
      title: "Meine Aufgaben",
      noTasks: "Keine offenen Aufgaben.",
      doneButton: "Erledigt",
      overviewButton: "Aufgabenübersicht öffnen",
      alert: "Aufgabenübersicht wird geöffnet"
    }
  };

  const currentTexts = texts[language] || texts.en;

  const [tasks, setTasks] = useState([
    "Projektbericht abschließen",
    "Meeting um 14:00 Uhr",
    "Code-Review durchführen",
  ]);

  const markTaskAsDone = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="card-tasks-card">
      <h2>{currentTexts.title}</h2>
      <div className="task-list">
        {tasks.length > 0 ? (
          <ul>
            {tasks.map((task, index) => (
              <li key={index}>
                {task} <button onClick={() => markTaskAsDone(index)}>{currentTexts.doneButton}</button>
              </li>
            ))}
          </ul>
        ) : (
          <p>{currentTexts.noTasks}</p>
        )}
      </div>
      <button onClick={() => alert(currentTexts.alert)}>
        <i className="ri-navigation-line"></i>{currentTexts.overviewButton}
      </button>
    </div>
  );
}
