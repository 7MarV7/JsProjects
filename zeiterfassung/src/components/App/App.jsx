import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import Dashboard from "../Content/Dashboard";
import ProfileCard from "../Content/ProfileCard";
import TimeAccountsCard from "../Content/TimeAccountsCard";
import TerminalCard from "../Content/TerminalCard";
import CalendarCard from "../Content/CalendarCard";
import TasksCard from "../Content/TasksCard";
import VacationCard from "../Content/VacationCard";
import ActivityTrafficLight from "../Content/ActivityTrafficLight";
import { LanguageProvider } from "../../functions/LanguageFunction";
import "./App.css";

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="container">
          <div className="header">
            <Header />
          </div>
          <div className="navigation">
            <Navigation />
          </div>
          <div className="dashboard-grid">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/startseite" element={<Dashboard />} />
              <Route path="/mitarbeiter" element={<ProfileCard />} />
              <Route path="/zeit" element={<TimeAccountsCard />} />
              <Route path="/anwesenheitsdisplay" element={<TerminalCard />} />
              <Route path="/kalender" element={<CalendarCard />} />
              <Route path="/aufgaben" element={<TasksCard />} />
              <Route path="/urlaub" element={<VacationCard />} />
              <Route path="/ampelkonto" element={<ActivityTrafficLight />} />
            </Routes>
          </div>
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;