import { React, useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { UserAuth } from '../../../context/authContext';
export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const [isOpen, setIsOpen] = useState('');
  const { user, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  const isClickProfile = () => {
    //setState(prevState => [...prevState, 'somedata'] )
    console.log(isOpen);
    setIsOpen((prevState) => !prevState);
  };

  return (
    <nav className="w-full bg-white  ">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between md:py-5 md:block">
            <p className="flex items-center gap-3">
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
              <span className="self-center text-xl font-semibold whitespace-nowrap text-prim">
                RefuBook
              </span>
            </p>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
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
            className={`flex-1 justify-self-center w-full  md:block md:pb-0 md:mt-0 ${
              navbar ? 'block' : 'hidden'
            }`}
          >
            <ul className="text-lightgray flex flex-col p-4 mt-4 items-center justify-center  rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
              <li>
                <Link to="/" className="text-prim font-normal hover:font-bold">
                  Home
                </Link>
              </li>
              <li>
                <p className="font-normal hover:font-bold hover:text-gray-300">
                  About
                </p>
              </li>
              <li>
                <Link
                  to="/blogs"
                  className="font-normal hover:font-bold hover:text-gray-300"
                >
                  Blog
                </Link>
              </li>
              <li>
                <p className="font-normal hover:font-bold hover:text-gray-300">
                  Contact
                </p>
              </li>
              <li className="flex flex-col items-center ">
                {user?.displayName ? (
                  <Fragment>
                    {/* <Link
                      to="/signup"
                      className="bg-prim text-white py-1 px-3 rounded-full hover:bg-lightgray "
                    >
                      Profile
                    </Link> */}
                    {/* <button onClick={handleSignOut}>Sign Out</button> */}
                    <div class="relative" style={{ cursor: 'pointer' }}>
                      <img
                        class="w-10 h-10 rounded-full"
                        src="https://img.freepik.com/premium-psd/3d-cartoon-character-isolated-3d-rendering_235528-561.jpg?w=2000"
                        alt=""
                        style={{ width: '4rem', height: '4rem' }}
                        onClick={() => isClickProfile()}
                      />
                      <span class="bottom-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
                    </div>
                    {isOpen ? (
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
                ) : (
                  <Link
                    to="/signup"
                    className="bg-prim text-white py-1 px-3 rounded-full hover:bg-lightgray "
                  >
                    Sign Up
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
