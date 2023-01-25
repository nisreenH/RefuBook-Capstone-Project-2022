import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { UserAuth } from '../../context/authContext';
import { useNavigate } from 'react-router-dom';
import { db } from '../../firebase';
import { doc, getDoc } from 'firebase/firestore';
import { useTranslation } from 'react-i18next';

const Index = ({ width, height, margin, isOpenNav }) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const { user, logOut } = UserAuth();
  const [profilePic, setProfileUrl] = useState(null);
  const navigate = useNavigate();
  const isClickProfile = () => {
    setIsOpen(!isOpen);
  };
  const handleSignOut = async () => {
    try {
      await logOut();
      alert('goodbye');
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const getUserAsyncFv = async () => {
      const docRef = doc(db, 'users', user.uid);
      const data = await getDoc(docRef);
      setProfileUrl(data.data().profilePic);
    };
    getUserAsyncFv();
  }, [user]);

  return (
    <Fragment>
      <div className=" " style={{ cursor: 'pointer' }}>
        {profilePic ? (
          <img
            className="w-10 h-10 rounded-full profile_picture"
            src={`${profilePic}`}
            alt=""
            style={{ width, height, margin }}
            onClick={() => isClickProfile()}
          />
        ) : (
          <img
            className="w-10 h-10 rounded-full profile_picture"
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/271deea8-e28c-41a3-aaf5-2913f5f48be6/de7834s-6515bd40-8b2c-4dc6-a843-5ac1a95a8b55.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI3MWRlZWE4LWUyOGMtNDFhMy1hYWY1LTI5MTNmNWY0OGJlNlwvZGU3ODM0cy02NTE1YmQ0MC04YjJjLTRkYzYtYTg0My01YWMxYTk1YThiNTUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.BopkDn1ptIwbmcKHdAOlYHyAOOACXW0Zfgbs0-6BY-E"
            alt=""
            style={{ width, height, margin }}
            onClick={() => isClickProfile()}
          />
        )}

        {/* <span class="bottom-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span> */}
      </div>
      {isOpen & isOpenNav ? (
        <div
          xTransitionEnter="transition ease-out duration-600"
          xTransitionEnter-start="transform opacity-0 scale-95"
          xTransitionEnter-end="transform opacity-100 scale-600"
          xTransitionLeave="transition ease-in duration-75"
          xTransitionLeave-start="transform opacity-100 scale-600"
          xTransitionLeave-end="transform opacity-0 scale-95"
          className="absolute top-20 bg-white w-40 py-6 rounded-lg shadow-lg border z-50 mt-5"
        >
          <ul className="space-y-3 dark:text-white">
            <li className="font-medium">
              <Link
                to="/user-profile"
                className="flex items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-indigo-700"
                onClick={() => setIsOpen(false)}
              >
                <div className="mr-3">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    ></path>
                  </svg>
                </div>
                {t('userProfile.avatar.profile')}
              </Link>
            </li>
            <li className="font-medium">
              <Link
                to="/user-profile/update-profile"
                className="flex items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-indigo-700"
                onClick={() => setIsOpen(false)}
              >
                <div className="mr-3">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    ></path>
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                </div>
                {t('userProfile.avatar.editProfile')}
              </Link>
            </li>
            <hr className="dark:border-gray-700" />
            <li className="font-medium">
              <Link
                onClick={handleSignOut}
                className="flex items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-red-600"
              >
                <div className="mr-3 text-red-600">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    ></path>
                  </svg>
                </div>
                {t('userProfile.avatar.logOut')}
              </Link>
            </li>
          </ul>
        </div>
      ) : (
        ''
      )}
    </Fragment>
  );
};

export default Index;
