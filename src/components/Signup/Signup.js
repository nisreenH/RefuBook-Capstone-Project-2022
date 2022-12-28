import React from 'react';
import Card from './SignupCard/Card';
export default function Signup() {
  return (
    <div className="flex overflow-hidden relative items-center flex-col h-screen">
      <Card title="sign up with" />
      <p className="max-sm:flex max-sm:flex-col max-sm:gap-4">
        <span className="max-sm:text-prim max-sm:font-medium">
          Already a member?
        </span>
        <span className="max-sm:bg-prim max-sm:font-medium max-sm:rounded-full max-sm:text-white max-sm:py-1 max-sm:px-4 max-sm:flex max-sm:items-center max-sm:justify-center">
          Sign in
        </span>
      </p>
      <div className="bg-lightgray opacity-20 h-full w-full absolute max-sm:-bottom-1/2 scale-125 -z-10 rounded-full" />
    </div>
  );
}
