import React from 'react';
import pic from './image.jpg';
import { useTranslation } from 'react-i18next';

function Story(props) {
  // const {label} = props;
  const { t } = useTranslation();
  return (
    <div className="bg-prim px-20">
      <header className="text-white items-center text-justify pt-14 w-96 ">
        <h1 className="text-4xl font-normal sans-Roboto leading-10 pb-2">
          {t('home.stories-section.title')}
        </h1>
        <p className="">{t('home.stories-section.subtitle')} </p>
      </header>

      <div className="md:flex items-center p-12 gap-14 text-left text-white">
        <div className="w-full">
          <img className="shrink-0 sm:h-full" src={pic} alt="pic" />
        </div>
        <div className=" flex w-full relative p-16 flex-col gap-6">
          <span className="font-bold my-7 bg-amber-200 text-prim text-xs p-2 rounded-md border-solid absolute -top-5 left-10">
            {t('home.stories-section.details.language')}
          </span>
          <p className="w-70 text-2xl">
            {t('home.stories-section.details.language-article-title')}
          </p>
          <div className="flex gap-x-8">
            <img className="rounded-full w-14 h-14" src={pic} alt="pic" />
            <div className="text-left">
              <p className="font-bold text-sm ">
                {t('home.stories-section.details.language-article-author')}
              </p>
              <span className="font-light text-xs">
                {t('home.stories-section.details.language-article-state')}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="md:flex items-center p-12 gap-14 text-left text-white">
        <div className="w-full">
          <img className="shrink-0 sm:h-full" src={pic} alt="pic" />
        </div>
        <div className=" flex w-full relative p-16 flex-col gap-6">
          <span className="font-bold my-7 bg-amber-200 text-prim text-xs p-2 rounded-md border-solid absolute -top-5 left-10">
            {t('home.stories-section.details.job')}
          </span>
          <p className="w-70 text-2xl">
            {t('home.stories-section.details.job-article-title')}
          </p>
          <div className="flex gap-x-8">
            <img className="rounded-full w-14 h-14" src={pic} alt="pic" />
            <div className="text-left">
              <p className="font-bold text-sm ">
                {t('home.stories-section.details.job-article-author')}
              </p>
              <span className="font-light text-xs">
                {t('home.stories-section.details.job-article-state')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Story;
