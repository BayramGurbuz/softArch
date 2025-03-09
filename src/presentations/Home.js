import React from 'react';
import Navbar from '../components/Navbar';
import '../ui/styles.css';

function Home() {
  return (
    <div className="home">
      <Navbar />
      <div className="content">
        <div className="meetings">
          <h2>Toplantılar</h2>
          <div className="meeting-list">
            <div className="meeting-item">Devam Eden</div>
            <div className="meeting-item">Henüz Başlamayan</div>
            <div className="meeting-item">Biten</div>
          </div>
        </div>
        <div className="calendar">
          <h2>Takvim</h2>
          {/* Todo: Toplantıları gösteren kişisel takvim eklenecek*/}
        </div>
      </div>
    </div>
  );
}

export default Home;