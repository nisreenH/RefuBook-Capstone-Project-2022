import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Avatar from '../../Avatar';
import { UserAuth } from '../../../context/authContext';

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const { user } = UserAuth();

  const { t } = useTranslation();

  return (
    <nav className=" md:mb-0">
      <div className="justify-between items-center mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between md:py-5 md:block ml-3">
            {/* LOGO DIV */}
            <div className="flex items-center gap-3">
              <svg
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
              <p className="text-2xl font-semibold text-prim mb-0">
                {t('home.hero.appTitle')}
              </p>
            </div>

            <div className="md:hidden ">
              <button
                className="p-2 text-gray-700 rounded-md m-0 outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
                data-collapse-toggle="navbar-default"
                type="button"
                aria-expanded="false"
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center w-full  md:block md:pb-0 md:mt-0 transform-all duration-300  ${
              navbar ? 'block bg-lightgray mt-3' : 'hidden'
            }`}
          >
            <ul className=" flex flex-col no-underline p-4  items-center gap-4  justify-between rounded-lg md:flex-row md:text-md md:font-medium md:mb-0">
              <li>
                <Link
                  to="/"
                  className="text-prim font-bold no-underline hover:text-sky-500 transform-bg duration-300 md:ml-4"
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
              <li className="flex flex-col items-center ">
                {user?.displayName ? (
                  <Avatar
                    width={'4rem'}
                    height={'4rem'}
                    margin={'0'}
                    isOpenNav={true}
                  />
                ) : (
                  <Link
                    to="/signup"
                    className="bg-prim text-white py-1 px-3 rounded-full hover:bg-sky-600 hover:shadow-lg no-underline font-bold capitalize transform-all duration-300 md:ml-4 "
                  >
                    {t('navbar.signUp')}
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
