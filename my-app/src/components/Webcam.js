import React, { useEffect, useRef } from 'react';

const Webcam = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then((stream) => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
        })
        .catch((err) => {
          console.log("Error accessing the webcam: ", err);
        });
    }
  }, []);

  return <video ref={videoRef} width="1920" height="1080" autoPlay className="w-full h-full object-cover rounded-lg" />;
};

export default Webcam;
