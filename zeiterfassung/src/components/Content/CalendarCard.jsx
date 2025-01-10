import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Content.css';

function CalendarCard() {
  const today = new Date();
  const formattedDate = today.toLocaleDateString('de-DE', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="card calendar-card">
      <h2>Heute ist der {formattedDate}</h2>
      <div className="calendar">
        <Calendar />
      </div>
      <button>
        <i className="ri-navigation-line"></i> Meinen Kalender öffnen
      </button>
    </div>
  );
}

export default CalendarCard;
