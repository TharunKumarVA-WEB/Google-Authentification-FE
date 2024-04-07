// import React from 'react';
// import GoogleLogin from 'react-google-login';
// import { login } from '../api/googleAuth';

// const GoogleLoginComponent = (props) => {
//   const responseGoogle = async (authResult) => {
//     try {
//       if (authResult['code']) {
//         const result = await login(authResult['code']);
//         console.log(authResult);
//         props.login(result);
//       } else {
//         throw new Error(authResult);
//       }
//     } catch (e) {
//       console.log(e);
//     }
//   };
//   const clientId = '364031536665-es893vnbja8h9sbrkheu0lbpqn4uger0.apps.googleusercontent.com';

//   console.log('clientId:', clientId);



//   return (
//     <div className="login-page">
//       <GoogleLogin
//         clientId={clientId}
//         buttonText="Login with Google"
//         onSuccess={responseGoogle}
//         onFailure={responseGoogle}
//         cookiePolicy={'single_host_origin'}
//       />
//     </div>
//   );
// };

// export default GoogleLoginComponent;


import React from 'react';
import GoogleLogin from 'react-google-login';
import { login } from '../api/googleAuth';

const GoogleLoginComponent = (props) => {
  const responseGoogle = async (authResult) => {
    try {
      if (authResult['code']) {
        const result = await login(authResult['code']);
        console.log(authResult);
        props.login(result);
      } else {
        throw new Error(authResult);
      }
    } catch (e) {
      console.log(e);
    }
  };

  // Ensure that clientId is a string enclosed in quotes
  const clientId = '364031536665-es893vnbja8h9sbrkheu0lbpqn4uger0.apps.googleusercontent.com';

  console.log('clientId:', clientId);

  return (
    <div className="login-page">
      <GoogleLogin
        clientId={clientId}
        buttonText="Login with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
};

export default GoogleLoginComponent;
