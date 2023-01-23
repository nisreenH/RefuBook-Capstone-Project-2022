import React, { useEffect, useState } from 'react';
import { db } from '../../../firebase';
import { useNavigate } from 'react-router-dom';
import { getDoc, doc } from 'firebase/firestore';
// import { useTranslation } from 'react-i18next';
// import Spinner from '../../spinner/Spinner';

export default function StoryCard({ props, blogId }) {
  const navigate = useNavigate();
  // const { t } = useTranslation();
  const [users, setUsers] = useState({});
  useEffect(() => {
    async function fetchUser() {
      const docRef = doc(db, 'users', props.userId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setUsers(docSnap.data());
      } else {
        console.log('No such document!');
      }
    }
    fetchUser();
  }, [props.userId]);
  //   console.log(users);

  function handleRedirection() {
    navigate(`/SingleBlog/${blogId}`);
  }

  return (
    // users ?
    <div className="md:flex items-center p-12 gap-14 text-left text-white">
      <div className="w-full">
        <img
          className="shrink-0 sm:h-full"
          src={`${props.blogImgUrl}`}
          alt="pic"
          width="490px"
          height="330px"
        />
      </div>
      <div className=" flex w-full relative p-16 flex-col gap-6">
        <span className="font-bold my-7 bg-amber-200 text-prim text-xs p-2 rounded-md border-solid absolute -top-5 left-10">
          {props.categories}
        </span>
        <p className="w-70 text-2xl" onClick={() => handleRedirection(blogId)}>
          {props.subTitle}
        </p>
        <div className="flex gap-x-8">
          <img
            className="rounded-full w-14 h-14"
            src={users.profilePic}
            alt="pic"
          />
          <div className="text-left">
            <p className="font-bold text-sm ">{users.userName}</p>
            {/* <span className="font-light text-xs">
              {t('home.stories-section.details.language-article-state')}
            </span> */}
          </div>
        </div>
      </div>
    </div>
    // : <Spinner />
  );
}
