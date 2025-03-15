import React, { useState } from 'react';
import { FaMicrophone, FaMicrophoneSlash, FaVideo, FaVideoSlash, FaPhoneSlash } from 'react-icons/fa';
import '../ui/styles.css';

function ControlBar() {
  const [isMicOn, setIsMicOn] = useState(true);
  const [isCamOn, setIsCamOn] = useState(true);

  const toggleMic = () => setIsMicOn(!isMicOn);
  const toggleCam = () => setIsCamOn(!isCamOn);

  return (
    <div className="control-bar">
      <button aria-label="Mikrofonu Aç/Kapat" onClick={toggleMic}>
        {isMicOn ? <FaMicrophone /> : <FaMicrophoneSlash />}
      </button>
      <button aria-label="Aramayı Sonlandır">
        <FaPhoneSlash />
      </button>
      <button aria-label="Kamerayı Aç/Kapat" onClick={toggleCam}>
        {isCamOn ? <FaVideo /> : <FaVideoSlash />}
      </button>
    </div>
  );
}

export default ControlBar;