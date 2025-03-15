import React, { useState, useEffect } from 'react';
import Video from './Video';
import '../ui/styles.css';

function VideoArea() {
  const [streams, setStreams] = useState([]);

  useEffect(() => {
    // TODO: Backend'den video akışlarını al ve `streams` state'ini güncelle
  }, []);

  return (
    <div className="video-area">
      {streams.map((stream, index) => (
        <Video key={index} stream={stream} />
      ))}
    </div>
  );
}

export default VideoArea;