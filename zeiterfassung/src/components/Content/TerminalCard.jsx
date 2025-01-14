import { useState } from 'react';

function TerminalCard() {
  const [status, setStatus] = useState("Anwesend"); 
  const today = new Date().toLocaleDateString(); 

 
  const toggleStatus = () => {
    setStatus((prevStatus) => {
      const newStatus = prevStatus === "Anwesend" ? "Abwesend" : "Anwesend"; 
      alert(`Status geändert auf : ${newStatus}`); 
      return newStatus; 
    });
  };

  return (
    <div className="card-terminal-card">
      <h2>Terminal</h2>
      <p>Date: {today}</p> {}
      <p>Status: <strong>{status}</strong></p> {}

      {}
      <button onClick={toggleStatus}>
        <i className="ri-navigation-line"></i>Status ändern
      </button>
    </div>
  );
}

export default TerminalCard;
