import { useContext, createContext, useEffect, useState } from 'react';
import {
  GoogleAuthProvider,
  signInWithPopup,
  // signInWithRedirect,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { auth } from '../firebase';
import { doc, setDoc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
    // signInWithRedirect(auth, provider);
  };

  const logOut = () => {
    signOut(auth);
    navigate('/');
  };

  const handleUser = useCallback(async () => {
    if(user){
    const fullName = user.displayName.split(' ');
    await setDoc(doc(db, 'users', user.uid), {
      userId: user.uid,
      userName: user.displayName,
      firstName: fullName[0],
      lastName: fullName[1],
      email: user.email,
      profilePic: user.photoURL,
      bio: '',
      location: '',
    });
  }
  }, [user]);

  useEffect(() => {
    if (user) {
      onSnapshot(doc(db, "users", user.uid), (doc) => {
          if(doc.data()){
            console.log("there is a user");
          } else{
            handleUser();
          }
    })
  }
  }, [user,handleUser]);


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      // console.log('User', currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);


  return (
    <AuthContext.Provider value={{ googleSignIn, logOut, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
