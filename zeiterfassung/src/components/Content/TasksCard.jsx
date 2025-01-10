import "./Content.css";

function TasksCard() {
  return (
    <div className="card tasks-card">
      <h2>Meine Aufgaben</h2>
      <div className="task-list">Liste der Aufgaben</div>
      <button><i className="ri-navigation-line"></i>Aufgabenübersicht öffnen</button>
    </div>
  );
}

export default TasksCard;
