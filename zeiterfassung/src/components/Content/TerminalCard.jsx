import { useState } from 'react';

function TerminalCard() {
  const [status, setStatus] = useState("Anwesend"); // Default status is "Anwesend" (Present)
  const today = new Date().toLocaleDateString(); // Get today's date

  // Toggle the status and trigger an alert with the new status
  const toggleStatus = () => {
    setStatus((prevStatus) => {
      const newStatus = prevStatus === "Anwesend" ? "Abwesend" : "Anwesend"; // Toggle status between "Present" and "Absent"
      alert(`Status changed to: ${newStatus}`); // Show an alert with the new status
      return newStatus; // Return the new status
    });
  };

  return (
    <div className="card-terminal-card">
      <h2>Terminal</h2>
      <p>Date: {today}</p> {/* Display today's date */}
      <p>Status: <strong>{status}</strong></p> {/* Display current status */}

      {/* Button to change the status */}
      <button onClick={toggleStatus}>
        <i className="ri-navigation-line"></i>Change Status
      </button>
    </div>
  );
}

export default TerminalCard;
