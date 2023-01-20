import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserAuth } from '../../context/authContext';
//!`fn
const Index = ({ width, height, margin, isOpenNav }) => {
  const [isOpen, setIsOpen] = useState('');
  const { logOut } = UserAuth();

  const { user } = UserAuth();
  const isClickProfile = () => {
    //setState(prevState => [...prevState, 'somedata'] )
    console.log(isOpen);
    setIsOpen((prevState) => !prevState);
  };
  const handleSignOut = async () => {
    try {
      await logOut();
      alert('god bye');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Fragment>
      <div class=" " style={{ cursor: 'pointer' }}>
        <img
          class="w-10 h-10 rounded-full profile_picture"
          src={`${user.photoURL}`}
          alt=""
          style={{ width, height, margin }}
          onClick={() => isClickProfile()}
        />
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
          className="absolute top-20   w-40 py-6 dark:bg-gray-800 bg-white rounded-lg shadow border dark:border-transparent mt-5"
        >
          <ul className="space-y-3 dark:text-white">
            <li className="font-medium">
              <Link
                to="/user-profile"
                className="flex items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-indigo-700"
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
                profile
              </Link>
            </li>
            <li className="font-medium">
              <Link
                // href="#"
                className="flex items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-indigo-700"
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
                Setting
              </Link>
            </li>
            <hr className="dark:border-gray-700" />
            <li className="font-medium">
              <Link
                onClick={() => handleSignOut}
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
                Logout
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
