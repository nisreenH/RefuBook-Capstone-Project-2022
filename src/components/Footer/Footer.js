/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
import { UserAuth } from '../../context/authContext';
import { Link } from 'react-router-dom';
// import { Routes , Route  } from "react-router-dom";
// import About from "./About";
// import Home from "./Home";
// import Content from './Content'

// import 'flag-icon-css/css/flag-icon.min.css';

import Flags, { GB } from 'country-flag-icons/react/3x2';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

function changeLang(code) {
  i18next.changeLanguage(code);
}

window.onload = function () {
  var selectedOption = sessionStorage.getItem('selectedOption');
  console.log(selectedOption);
  const select = document.querySelector('#mySelect');
  if (selectedOption) {
    changeLang(selectedOption);
    select.value = selectedOption;
  }
};

function Footer() {
  const languages = [
    {
      code: 'en',
      name: 'English',
      country_code: 'GB',
      Flag: GB,
    },
    {
      code: 'ar',
      name: 'العربية',
      country_code: 'SA',
      dir: 'rtl',
      Flag: Flags.SA,
    },
    // {
    //   code: 'ku',
    //   name: 'Kurdish',
    //   country_code: 'ku',
    // },
  ];
  const { user, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  const { t } = useTranslation();

  useEffect(() => {
    document.title = t('home.hero.appTitle');
  }, [t]);

  return (
    <footer className="grid flex-col-2 my-5 md:grid-cols-2 md:my-5 md:gap-x-12 grid-cols-1 gap-x-1">
      <div className="md:flex md:row md:justify-start md:mx-10 items-center grid-cols-1 gap-x-1">
        <div className="flex flex-col justify-center md:flex-row md:justify-start">
          <div>
            <svg
              className="w-full"
              width="35"
              height="36"
              viewBox=" 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.5278 12.5056C17.5278 10.5695 19.0973 9 21.0334 9C22.9695 9 24.5389 10.5695 24.5389 12.5056V12.6944C24.5389 14.6305 22.9695 16.2 21.0334 16.2C19.0973 16.2 17.5278 14.6305 17.5278 12.6944V12.5056Z"
                fill="#026FC2"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 12.5056C0 10.5695 1.56949 9 3.50555 9C5.44162 9 7.01111 10.5695 7.01111 12.5056V12.6944C7.01111 14.6305 5.44162 16.2 3.50555 16.2C1.56949 16.2 0 14.6305 0 12.6944V12.5056Z"
                fill="#026FC2"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.76392 21.5056C8.76392 19.5695 10.3334 18 12.2695 18C14.2055 18 15.775 19.5695 15.775 21.5056V21.6944C15.775 23.6305 14.2055 25.2 12.2695 25.2C10.3334 25.2 8.76392 23.6305 8.76392 21.6944V21.5056Z"
                fill="#21567E"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.76392 3.50556C8.76392 1.56949 10.3334 0 12.2695 0C14.2055 0 15.775 1.56949 15.775 3.50555V3.69445C15.775 5.63051 14.2055 7.2 12.2695 7.2C10.3334 7.2 8.76392 5.63051 8.76392 3.69445V3.50556Z"
                fill="#21567E"
              />
            </svg>
          </div>
          <div>
            <a
              className="text-l mx-5 no-underline font-medium text-prim py-2 px-2 hover:bg-whity hover:text-purple-700 hover:scale-105 rounded-md transition duration-150 ease-in-out"
              href="#Home"
            >
              {t('navbar.home')}
            </a>

            <a
              className="text-l mx-5 no-underline font-medium text-prim py-2 px-2 hover:bg-whity hover:text-purple-700 hover:scale-105 rounded-md transition duration-150 ease-in-out"
              href="#A"
            >
              {t('navbar.about')}
            </a>
            <a
              className="text-l mx-5 no-underline font-medium text-prim py-2 px-2 hover:bg-whity hover:text-purple-700 hover:scale-105 rounded-md transition duration-150 ease-in-out"
              href="#C"
            >
              {t('navbar.contact')}
            </a>
            <a
              className="text-l mx-5 no-underline font-medium text-prim py-2 px-2 hover:bg-whity hover:text-purple-700 hover:scale-105 rounded-md transition duration-150 ease-in-out"
              href="#B"
            >
              {t('navbar.blog')}
            </a>
          </div>
        </div>
        {/* <Routes>
    <Route path="/Home" element={<Home/>} />
    <Route path="/About" element={<About/>} />
    <Route path="/Content" element={<Content/>} />
    </Routes>  */}
      </div>

      <form className="flex flex-row my-5 md:my-5 ">
        {user?.displayName ? (
          <button
            type="button"
            className="bg-prim  text-whity
               text-sm rounded-3xl h-12 w-64 p-2 mx-5"
            onClick={handleSignOut}
          >
            {t('navbar.logOut')}
          </button>
        ) : (
          <Link to="/signup">
            <button
              type="button"
              className="bg-prim  text-whity
                text-sm rounded-3xl h-12 w-64 p-2 mx-5"
            >
              {t('navbar.signUp')}
            </button>
          </Link>
        )}

        <select
          id="mySelect"
          className="bg-white border sm:h-12 h-12 border-prim  md:text-gray500 text-sm rounded-3xl focus:ring-blue-500 focus:border-blue-500 block w-64 p-2 px-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray500 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={(e) => {
            sessionStorage.setItem('selectedOption', e.target.value);
            return changeLang(e.target.value);
          }}
        >
          {languages.map(({ code, name, country_code, Flag }) => (
            <option value={code} key={country_code}>
              {/* <span className=" mx-2"> <Flag /> </span> */}

              <Flag className="mx-2" />
              {name}
            </option>
          ))}
        </select>
      </form>
    </footer>
  );
}

export default Footer;
