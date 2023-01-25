import React from 'react';
import Card from './SigninCard/Card';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Signin() {
  const { t } = useTranslation();
  return (
    <div className="flex overflow-hidden relative items-center md:pt-20 md:pb-28 lg:pt-20 lg:pb-28 justify-center mt-16 md:mt-0 flex-col pb-10">
      <Card title={t('logIn.title')} />
      <p className="flex flex-col gap-4 text-xl">
        <span className="text-prim font-medium md:text-lightgreen md:opacity-50 md:text-2xl">
          {t('logIn.signUp')}
        </span>
        <Link
          to="/signup"
          className="bg-prim font-medium rounded-full no-underline md:pl-2 md:text-lightgreen lg:pl-4 text-white py-1 px-4 flex items-center justify-center"
        >
          {t('logIn.signUpBtn')}
        </Link>
      </p>
      <div className="bg-lightgray opacity-20 h-full w-full absolute max-sm:-bottom-1/2 md:-left-3/4 scale-125 -z-10 rounded-full" />
    </div>
  );
}
