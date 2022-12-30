import React from 'react';
import { GrFacebookOption } from 'react-icons/gr';

export default function Facebook() {
  return (
    <button className="bg-facebookcolor text-white h-16 w-52 flex items-center justify-center rounded-full">
      <GrFacebookOption className="scale-150 text-2xl" />
    </button>
  );
}
