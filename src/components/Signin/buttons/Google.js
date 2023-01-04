import React from 'react';
import { BsGoogle } from 'react-icons/bs';
import {UserAuth} from '../../../context/authContext';

export default function Google() {

  const { googleSignIn, user } = UserAuth();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <button className="bg-googlecolor h-16 w-52 text-white flex items-center justify-center rounded-full" onClick={handleGoogleSignIn}>
      <BsGoogle className="text-2xl" />
    </button>
  );
}
