import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import StoryCard from './StoryCard';
import { db } from '../../../firebase';
import { collection, getDocs } from 'firebase/firestore';
import Spinner from '../../spinner/Spinner';
import shuffle from '../../../shuffle';
function Story() {
  const { t } = useTranslation();

  const [blogs, setBlogs] = useState({});
  useEffect(() => {
    async function fetchBlogs() {
      const querySnapshot = await getDocs(collection(db, 'blogs'));
      querySnapshot.forEach((doc) => {
        setBlogs((prevState) => ({
          ...prevState,
          [doc.id]: doc.data(),
        }));
      });
    }
    fetchBlogs();
  }, []);

  let keys = Object.keys(blogs);
  const indexes = [...Array(keys.length).keys()];
  shuffle(indexes);
  const randomIndex1 = indexes[0];
  const randomKey1 = keys[randomIndex1];
  const randomIndex2 = indexes[1];
  const randomKey2 = keys[randomIndex2];

  return (
    <div className="bg-prim">
      <header className="text-white text-center md:text-left pt-14 px-10">
        <h1 className="text-4xl font-normal md:font-semibold sans-Roboto leading-10 pb-2">
          {t('home.stories-section.title')}
        </h1>
        <p className="text-lg md:text-xl">
          {t('home.stories-section.subtitle')}{' '}
        </p>
      </header>
      {blogs[randomKey1] ? (
        <div className="">
          <StoryCard props={blogs[randomKey1]} blogId={randomKey1} />
          <StoryCard props={blogs[randomKey2]} blogId={randomKey2} />
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
}

export default Story;
