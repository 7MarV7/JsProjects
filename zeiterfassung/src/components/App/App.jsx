import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import Dashboard from "../Content/Dashboard";
import ProfileCard from "../Content/ProfileCard";
import TimeAccountsCard from "../Content/TimeAccountsCard";
import TerminalCard from "../Content/TerminalCard";
import "./App.css";

function App() {
  return (
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
            <Route path="/mitarbeiter" element={
              <ProfileCard 
                name="John Doe"
                email="john.doe@example.com"
                department="Engineering"
                phone="123-456-7890"
                imageUrl="https://via.placeholder.com/150"  
                office="Main Office"
                employeeNumber="12345"
              />
            } />
            <Route path="/zeit" element={<TimeAccountsCard />} />
            <Route path="/anwesenheitsdisplay" element={<TerminalCard />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
