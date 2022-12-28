import React from 'react';
import Google from '../buttons/Google';
import Facebook from '../buttons/Facebook';

export default function Card(props) {
  return (
    <div className="bg-white max-sm:px-8 max-sm:mb-32 py-10 max-sm:w-80 max-sm:my-10 shadow-xl shadow-gray-300 rounded-3xl">
      <h3 className="text-prim uppercase text-sm mb-8">{props.title}</h3>
      <div className="flex max-sm:flex-col items-center max-sm:gap-3 max-sm:justify-center">
        <Google />
        <h3 className="text-prim uppercase text-sm">or</h3>
        <Facebook />
      </div>
    </div>
  );
}
