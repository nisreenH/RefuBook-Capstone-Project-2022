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
    <footer className="py-10 flex flex-col md:flex-row justify-between gap-3 md:gap-0 px-10">
      <div className="flex items-center justify-evenly">
        <div className="flex items-center gap-3">
          <svg
            className=""
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 12.1722C0 10.2515 1.55983 8.69446 3.48056 8.69446C5.40128 8.69446 6.96111 10.2515 6.96111 12.1722C6.96111 14.093 5.40128 15.65 3.48056 15.65C1.55983 15.65 0 14.093 0 12.1722Z"
              fill="#026FC2"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.70142 20.8667C8.70142 18.946 10.2612 17.3889 12.182 17.3889C14.1027 17.3889 15.6625 18.946 15.6625 20.8667C15.6625 22.7874 14.1027 24.3445 12.182 24.3445C10.2612 24.3445 8.70142 22.7874 8.70142 20.8667Z"
              fill="#21567E"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17.4028 12.1722C17.4028 10.2515 18.9627 8.69446 20.8834 8.69446C22.8041 8.69446 24.3639 10.2515 24.3639 12.1722C24.3639 14.093 22.8041 15.65 20.8834 15.65C18.9627 15.65 17.4028 14.093 17.4028 12.1722Z"
              fill="#026FC2"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.70142 3.47778C8.70142 1.55705 10.2612 0 12.182 0C14.1027 0 15.6625 1.55705 15.6625 3.47778C15.6625 5.3985 14.1027 6.95556 12.182 6.95556C10.2612 6.95556 8.70142 5.3985 8.70142 3.47778Z"
              fill="#21567E"
            />
          </svg>
          <div className=" w-full md:block m-0 transform-all duration-300">
            <ul className="flex flex-row no-underline  mb-0 items-center gap-4 rounded-lg  md:text-md md:font-medium">
              <li>
                <Link
                  to="/"
                  className="text-prim font-bold no-underline hover:text-sky-500 transform-bg duration-300"
                >
                  {t('navbar.home')}
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-prim font-bold no-underline hover:text-sky-500 transform-bg duration-300 md:ml-4"
                >
                  {t('navbar.about')}
                </Link>
              </li>
              <li>
                <Link
                  to="/blogs"
                  className="text-prim font-bold no-underline hover:text-sky-500 transform-bg duration-300 md:ml-4"
                >
                  {t('navbar.blog')}
                </Link>
              </li>
              <li>
                <Link
                  to="/Contact"
                  className="text-prim font-bold no-underline hover:text-sky-500 transform-bg duration-300 md:ml-4"
                >
                  {t('navbar.contact')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* <div className="bg-green-300 flex gap-3 text-lg">
            <Link
              className="no-underline font-medium text-prim hover:bg-whity hover:text-purple-700 hover:scale-105 rounded-md transition duration-150 ease-in-out"
              href="#Home"
            >
              {t('navbar.home')}
            </Link>

            <Link
              className="no-underline font-medium text-prim hover:bg-whity hover:text-purple-700 hover:scale-105 rounded-md transition duration-150 ease-in-out"
              href="/about"
            >
              {t('navbar.about')}
            </Link>
            <Link
              className="no-underline m-0 font-medium text-prim hover:bg-whity hover:text-purple-700 hover:scale-105 rounded-md transition duration-150 ease-in-out"
              href="#C"
            >
              {t('navbar.contact')}
            </Link>
            <Link
              className="no-underline font-medium text-prim hover:bg-whity hover:text-purple-700 hover:scale-105 rounded-md transition duration-150 ease-in-out"
              href="#B"
            >
              {t('navbar.blog')}
            </Link>
          </div> */}
      </div>

      <form className="flex flex-row items-center justify-center gap-6 ">
        {user?.displayName ? (
          <button
            type="button"
            className="bg-prim px-4 md:px-8 py-2 rounded-full text-white font-medium md:text-lg shadow-lg shadow-sky-600"
            onClick={handleSignOut}
          >
            {t('navbar.logOut')}
          </button>
        ) : (
          <Link to="/signup">
            <button
              type="button"
              className="bg-prim px-4 md:px-8 py-2 rounded-full text-white font-medium md:text-lg shadow-lg shadow-sky-600"
            >
              {t('navbar.signUp')}
            </button>
          </Link>
        )}

        <select
          id="mySelect"
          className="bg-white px-4 py-2 rounded-full border-2 border-prim text-prim font-medium md:text-lg shadow-lg shadow-sky-600"
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
