import React from 'react';
import { BsGoogle } from 'react-icons/bs';

export default function Google() {
  return (
    <button className="bg-googlecolor h-16 w-52 text-white flex items-center justify-center rounded-full">
      <BsGoogle className="text-2xl" />
    </button>
  );
}
