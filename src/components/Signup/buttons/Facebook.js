import React from 'react';
import { GrFacebookOption } from 'react-icons/gr';
import { signInWithPopup, FacebookAuthProvider } from 'firebase/auth';
import { authentication } from '../../../firebase';

export default function Facebook() {

  const signUpWithFacebook = () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(authentication, provider)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <button
      onClick={signUpWithFacebook}
      className="bg-facebookcolor text-white h-16 w-52 flex items-center justify-center rounded-full"
    >
      <GrFacebookOption className="scale-150 text-2xl" />
    </button>
  );
}
