import ProfileCard from "./ProfileCard";
import TasksCard from "./TasksCard";
import VacationCard from "./VacationCard";
import TimeAccountsCard from "./TimeAccountsCard";
import TerminalCard from "./TerminalCard";
import CalendarCard from "./CalendarCard";

const Dashboard = () => {
  return (
    <>
      <ProfileCard 
        name="John Doe"
        email="john.doe@example.com"
        department="Engineering"
        phone="123-456-7890"
        imageUrl="https://via.placeholder.com/150"  
        office="Main Office"
        employeeNumber="12345"
      />
      <TasksCard />
      <VacationCard />
      <TimeAccountsCard />
      <TerminalCard />
      <CalendarCard />
    </>
  );
}

export default Dashboard;