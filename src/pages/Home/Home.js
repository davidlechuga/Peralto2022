// Frameworks functions
import React from 'react';
import { useCallback, useRef, useState } from 'react';
// Frameworks and local styles
import './Home.scss';

import { Container } from 'semantic-ui-react';
// Components
import Webcam from 'react-webcam'

export default function Home() {

    const WebcamComponent = () => <Webcam />;const videoConstraints = {
        width: 220,
        height: 200,
        facingMode: "user"
      };
      
      const WebcamCapture = () => {const webcamRef = React.useRef(null);
      
        const capture = React.useCallback(
          () => {
            const imageSrc = webcamRef.current.getScreenshot();
          },
      
          [webcamRef]
        );
      
        return (
          <div className="webcam-container">
            <Webcam
              audio={false}
              height={200}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              width={220}
              videoConstraints={videoConstraints}
            />
            <button 
            onClick={(e)=>{e.preventDefault();capture()}}>
            Capture</button>
          </div>
        );
      };
}