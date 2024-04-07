import React, { useState } from 'react';
import GoogleLoginComponent from '../src/components/GoogleLogin';
import Profile from '../src/components/profile';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userProfile, setUserProfile] = useState(null);

  const login = (userData) => {
    setIsLoggedIn(true);
    setUserProfile(userData.user);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUserProfile(null);
  };

  return (
    <>
      {isLoggedIn ? (
        <Profile user={userProfile} logout={logout} />
      ) : (
        <GoogleLoginComponent login={login} />
      )}
    </>
  );
};

export default App;
