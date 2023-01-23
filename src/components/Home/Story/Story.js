import React from 'react';
// import pic from './image.jpg';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import { onSnapshot, collection } from 'firebase/firestore';
import { db } from '../../../firebase';

function Story(props) {
  const [blogs, setBlogs] = useState(null);
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'blogs'), (snapshot) => {
      setBlogs(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });

    return unsubscribe;
  }, []);
  // const {label} = props;
  const { t } = useTranslation();
  return (
    <div className="bg-prim px-20">
      <header className="text-white flex flex-col text-left gap-2 items-start pt-14 w-auto sans-Roboto ">
        <h1 className="text-4xl font-normal sans-Roboto md:text-5xl">
          {t('home.stories-section.title')}
        </h1>
        <p className="bg-red-300 text-md md:text-lg lg:text-xl">
          {t('home.stories-section.subtitle')}
        </p>
      </header>

      {blogs
        ? blogs.slice(0, 2).map((ele) => {
            return (
              <div>
                <div>
                  <img src={ele.blogImgUrl} alt={ele.title} />
                </div>
                <div>
                  <label>{ele.categories}</label>
                  <p>{ele.subTitle}</p>
                  <div>
                    <div>
                      <div></div>
                      <p>user name</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        : ''}

      {/* <div className="md:flex items-center p-12 gap-14 text-left text-white">
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
      </div> */}

      {/* <div className="md:flex items-center p-12 gap-14 text-left text-white">
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
      </div> */}
    </div>
  );
}

export default Story;
