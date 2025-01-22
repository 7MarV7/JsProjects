import { useState, useContext } from "react";
import { LanguageContext } from "../../functions/LanguageContext";
import "./Styles/general.css";

/*=============>Insert Database later its only a example<=============*/

// TasksCard Component
export default function TasksCard() {
  const { language } = useContext(LanguageContext);

  const texts = {
    en: {
      myTasks: "My Tasks",
      noTasks: "No open tasks.",
      openTasksOverview: "Open Tasks Overview",
      tasks: [
        "Complete project report",
        "Meeting at 2:00 PM",
        "Conduct code review",
      ],
    },
    de: {
      myTasks: "Meine Aufgaben",
      noTasks: "Keine offenen Aufgaben.",
      openTasksOverview: "Aufgabenübersicht öffnen",
      tasks: [
        "Projektbericht abschließen",
        "Meeting um 14:00 Uhr",
        "Code-Review durchführen",
      ],
    },
  };
/* ================================================================= */
  const currentTexts = texts[language] || texts.en;

  const [tasks, setTasks] = useState(currentTexts.tasks);

  const markTaskAsDone = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="card-tasks-card">
      <h2>{currentTexts.myTasks}</h2>
      <div className="task-list">
        {tasks.length > 0 ? (
          <ul>
            {tasks.map((task, index) => (
              <li key={index}>
                {task} <button onClick={() => markTaskAsDone(index)}>Erledigt</button>
              </li>
            ))}
          </ul>
        ) : (
          <p>{currentTexts.noTasks}</p>
        )}
      </div>
      <button onClick={() => alert(currentTexts.openTasksOverview)}>
        <i className="ri-navigation-line"></i> {currentTexts.openTasksOverview}
      </button>
    </div>
  );
}
