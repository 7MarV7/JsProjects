import Header from "../Header/header";
import Navigation from "../Navigation/navigation";
import TerminalCard from "../Content/TerminalCard";
import TimeAccountsCard from "../Content/TimeAccountsCard";
import CalendarCard from "../Content/CalendarCard";
import ProfileCard from "../Content/ProfileCard";
import TasksCard from "../Content/TasksCard";
import VacationCard from "../Content/VacationCard"; 
import "./App.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Navigation />
      <main className="content">
        <ProfileCard />
        <TasksCard />
        <VacationCard /> 
        <TerminalCard />
        <TimeAccountsCard />
        <CalendarCard />
      </main>
    </div>
  );
}

export default App;
