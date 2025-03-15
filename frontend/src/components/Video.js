import React, { useRef, useEffect } from 'react';

function Video({ stream }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (stream) {
      videoRef.current.srcObject = stream;
    }
  }, [stream]);

  return <video ref={videoRef} autoPlay playsInline />;
}

export default Video;