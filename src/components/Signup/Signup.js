import React from 'react';
import Card from './SignupCard/Card';
export default function Signup() {
  return (
    <div className="flex overflow-hidden relative items-center max-md:pt-20 max-md:pb-28 max-xl:pt-20 max-xl:pb-28 max-2xl:pt-20 max-2xl:pb-28 justify-center flex-col max-sm:pb-10">
      <Card title="sign up with" />
      <p className="max-sm:flex max-sm:flex-col max-sm:gap-4 text-xl">
        <span className="max-sm:text-prim max-sm:font-medium max-md:text-lightgreen max-md:opacity-50 max-xl:text-lightgreen max-xl:opacity-50 max-2xl:text-lightgreen max-2xl:opacity-50">
          Already a member?
        </span>
        <span className="max-sm:bg-prim max-sm:font-medium max-sm:rounded-full max-md:pl-2 max-md:text-lightgreen max-xl:pl-4 max-xl:text-lightgreen max-2xl:pl-4 max-2xl:text-lightgreen max-sm:text-white max-sm:py-1 max-sm:px-4 max-sm:flex max-sm:items-center max-sm:justify-center">
          Sign in
        </span>
      </p>
      <div className="bg-lightgray opacity-20 h-full w-full absolute max-sm:-bottom-1/2 md:-left-3/4 scale-125 -z-10 rounded-full" />
    </div>
  );
}
