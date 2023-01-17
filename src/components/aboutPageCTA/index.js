import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';


const AboutPageCTA = () => {
  const { t } = useTranslation();

  return (
    <div
 
      className="text-center border-b-2  p-8 flex flex-column items-center justify-center w-full py-16 md:py-24 lg:py-32"
    >
      <div className="felx-col items-center">
        <h2 className="text-prim font-bold text-2xl pb-8">
          {t('about.aboutPageCTA.title')}
        </h2>
        <p className="mx-auto text-prim xl:w-3/4 lg:px-40 sm:px-20 pb-8">
          {t('about.aboutPageCTA.text')}
        </p>
        <button className="justify-center drop-shadow-2xl text-whity mx-auto appearance-none no-underline bg-blue-700 hover:bg-blue-400 text-whity font-bold py-2 px-8 text-center rounded-full transition duration-500 ease-in-out hover:scale-110 transform">
          <Link className='no-underline drop-shadow-2xl ' to="/signup">{t('about.aboutPageCTA.SignUp')}</Link>
        </button>
      </div>
    </div>
  );
};

export default AboutPageCTA;
