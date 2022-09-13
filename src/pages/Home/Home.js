// Frameworks functions
import React from 'react';
//import { useCallback, useRef, useState } from 'react';
// Frameworks and local styles
import './Home.scss';
import { List, Image } from 'semantic-ui-react'
import ine1 from '../../assets/imagenes-layout/ine-1.png'
import ine2 from '../../assets/imagenes-layout/ine-2.png'


// Components
//import Webcam from 'react-webcam'

export default function Home() {

  return (
    <List>
    <List.Item className='item_list'>
        <Image src={ine1} alt="ine-1" />
         <Image src={ine2} alt="ine-1" />
    </List.Item>
  </List>
  )

  /*
  
    const webcamRef = useRef(null);
    const [imgSrc, setImgSrc] = useState(null);
  
    const capture = useCallback(() => {
      const currentImageSrc = webcamRef.current.getScreenshot();
      setImgSrc(currentImageSrc);
    }, [webcamRef, setImgSrc]);


    //console.log(imgSrc);
  
    return (
      <>
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
        />
        
        <button onClick={capture}>Capture photo</button>
        {imgSrc && (
          <img
            alt='img'
            src={imgSrc}
          />
          
        )}
      </>
    );

    */
  };


