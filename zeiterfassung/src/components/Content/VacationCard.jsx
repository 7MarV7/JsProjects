export default function VacationCard() {
    return (
      <div className="card vacation-card">
        <h2>Mein Urlaubskonto</h2>
        <p>Urlaubsanspruch: Tage max</p>
        <p>Urlaub genommen: X</p>
        <p>Urlaub geplant: Y</p>
        <p>Resturlaub: Z</p>
        <div className="circle-diagram">Kreissegmentdiagramm</div>
        <button><i className="ri-navigation-line"></i>Urlaubsübersicht öffnen</button>
      </div>
    );
  }
  