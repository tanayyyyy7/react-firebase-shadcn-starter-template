import React, { createContext, useContext, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth'; 
import { auth } from '../firebase.config';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [uid, setUid] = useState(null);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUid(user.uid);
    } else {
      setUid(null);
    }
  });

  return (
    <AuthContext.Provider value={{ uid, setUid }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);
