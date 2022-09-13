  //React
  import React from 'react';
  import { useCallback, useEffect, useRef, useState } from 'react';
  //Routes
  import Navigation from './routes/Navigation';

  //Components
  import Lists from './components/List/Lists';

  import Webcam from 'react-webcam'


  //amplify frameworks
  import { AmplifyAuthenticator, AmplifySignOut, AmplifySignIn, AmplifySignUp } from '@aws-amplify/ui-react';
  import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
  import awsconfig from './aws-exports';
  import {Amplify, API, graphqlOperation }from 'aws-amplify';

  //Graphql
  import { listLists } from './graphql/queries'
  import './amplify.scss';
  Amplify.configure(awsconfig);



  function App() {

    const [authState, setAuthState] = useState();
    const [user, setUser] = useState();

    const [lists, setLists] = useState([]);


    const webcamRef = useRef(null);
    const [imgSrc, setImgSrc] = useState(null);
  
    const capture = useCallback(() => {
      const currentImageSrc = webcamRef.current.getScreenshot();
      setImgSrc(currentImageSrc);
    }, [webcamRef, setImgSrc]);

    //console.log(imgSrc);


    
    async function fetchList() {
      const {data} = await API.graphql({
        ...graphqlOperation(listLists),
        authMode: "AMAZON_COGNITO_USER_POOLS" });
        setLists(data.listLists.items);

    
      //console.log(result);
      //setList(data.listLists.items)
      //console.log((await (await result).data.listLists.items));
      console.log(data);
      
    }

    useEffect(() => { 
      fetchList()
    }, []);

    console.log(user);


    console.log(AuthState.SignedIn);
    React.useEffect(() => {
      return onAuthUIStateChange((nextAuthState, authData) => {
        setAuthState(nextAuthState);
        setUser(authData)
      });
    }, []);


    return (
      
      authState === AuthState.SignedIn && user ? (


        <div className="App">

       


          <Navigation />

          <div>
            <Webcam
              
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
            />
          
            <button onClick={capture}>Capture photo</button>
              {imgSrc && (
                <img
                  className='img-capture'
                  alt='img'
                  src={imgSrc}
                />

                
              
              )}
          </div>

          <Lists lists={lists} imgSrc={imgSrc}  />



          <AmplifySignOut />

        </div>

      )
        :
        (


          <AmplifyAuthenticator>


            <AmplifySignIn

            

              headerText="Entra con tu Correo y Contraseña"
              slot="sign-in"

            >
            

            </AmplifySignIn>


            <AmplifySignUp
              headerText="Crea tu cuenta para formar parte de los Estudios Prospectivos."
              slot="sign-up"
              formFields={[
                { type: "username" },
                { type: "password" },
                { type: "email" }
              ]}
            >
            </AmplifySignUp>

          </AmplifyAuthenticator>


        )
    );
  }




  export default App;
