import Header from "../Header/header";
import Navigation from "../Navigation/navigation";
import ProfileCard from "../Content/ProfileCard";
import TasksCard from "../Content/TasksCard";
import VacationCard from "../Content/VacationCard";
import TimeAccountsCard from "../Content/TimeAccountsCard";
import TerminalCard from "../Content/TerminalCard";
import CalendarCard from "../Content/CalendarCard";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="header">
        <Header />
      </div>
      <div className="navigation">
        <Navigation />
      </div>
      <div className="dashboard-grid">
        <ProfileCard />
        <TasksCard />
        <VacationCard />
        <TimeAccountsCard />
        <TerminalCard />
        <CalendarCard />
      </div>
    </div>
  );
}

export default App;
