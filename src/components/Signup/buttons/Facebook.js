import React from 'react';
import { GrFacebookOption } from 'react-icons/gr';

export default function Facebook() {
  return (
    <button className="bg-facebookcolor text-white px-16 py-2 flex items-center justify-center rounded-full">
      <GrFacebookOption className="scale-150" />
    </button>
  );
}
