import { useState } from "react";
import "./Components Css/general.css";

// TasksCard Component
export default function TasksCard() {
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
      <h2>Meine Aufgaben</h2>
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
          <p>Keine offenen Aufgaben.</p>
        )}
      </div>
      <button onClick={() => alert("Aufgabenübersicht wird geöffnet")}> 
        <i className="ri-navigation-line"></i>Aufgabenübersicht öffnen
      </button>
    </div>
  );
}
