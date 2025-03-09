import React from 'react';
import Navbar from '../components/Navbar';
import VideoArea from '../components/VideoArea';
import ControlBar from '../components/ControlBar';
import MeetingRightPanel from '../components/MeetingRightPanel';
import '../ui/styles.css';

function Meeting() {
  return (
    <div className="meeting-container">
      <div className="meeting-content">
        <div className="video-and-controls-container">
          <VideoArea />
          <ControlBar />
        </div>
        <MeetingRightPanel />
      </div>
    </div>
  );
}

export default Meeting;