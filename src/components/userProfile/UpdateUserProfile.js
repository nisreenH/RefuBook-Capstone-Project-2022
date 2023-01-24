import React, { useState, useEffect } from 'react';
import Avatar from '../Avatar';
import { UserAuth } from '../../context/authContext';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import Spinner from '../spinner/Spinner';

const UserProfileEdit = (props) => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userName, setUsername] = useState('');
  const [bio, setBio] = useState('');
  const [location, setLocation] = useState('');
  const [isClicked, setIsClicked] = useState(false);
  const { user } = UserAuth();

  useEffect(() => {
    const getUserAsyncFv = async () => {
      const docRef = doc(db, 'users', user.uid);
      const data = await getDoc(docRef);
      setFirstName(data.data().firstName);
      setLastName(data.data().lastName);
      setUsername(data.data().userName);
      setBio(data.data().bio);
      setLocation(data.data().location);
    };
    getUserAsyncFv();
  }, [user, isClicked]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const docRef = doc(db, 'users', user.uid);
    await updateDoc(docRef, {
      firstName,
      lastName,
      userName,
      bio,
      location,
    }).then(() => {
      alert('data is updated');
      navigate('/user-profile');
    });
  };

  return user ? (
    <div className=" h-screen flex flex-col items-center justify-center">
      <div className="relative md:mb-16 mb-8 flex flex-col items-end w-48">
        <Avatar width="8rem" height="8rem" margin="0" />
      </div>
      <div>
        <form name="userProfile" onSubmit={handleSubmit}>
          <div className="md:flex block space-between">
            <div className="md:mr-4">
              <label
                htmlFor="first name"
                className="block text-blue-700 text-sm font-bold mb-2"
              >
                First Name
              </label>
              <input
                required
                type="text"
                name="first name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="  shadow appearance-none border rounded w-full mb-4 py-2 px-3 text-blue-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div>
              <label
                htmlFor="last name"
                className="block text-blue-700 text-sm font-bold mb-2"
              >
                Last Name
              </label>
              <input
                required
                type="text"
                name="last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="   shadow appearance-none border rounded w-full mb-4 py-2 px-3 text-blue-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>

          <div className="w-full">
          <label
              htmlFor="userName"
              className="block text-blue-700 text-sm font-bold mb-2"
            >
              Location
            </label>
            <input
              required
              type="text"
              name="userName"
              value={userName}
              onChange={(e) => setUsername(e.target.value)}
              className=" shadow appearance-none border rounded w-full mb-4 py-2 px-3 text-blue-700 leading-tight focus:outline-none focus:shadow-outline"
            />

            <label
              htmlFor="biography"
              className="block text-blue-700 text-sm font-bold mb-2"
            >
              Biography
            </label>
            <textarea
              onChange={(e) => setBio(e.target.value)}
              required
              value={bio}
              name="biography"
              cols="30"
              maxLength="140"
              rows="3"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-blue-700 leading-tight focus:outline-none focus:shadow-outline"
            ></textarea>
            <label
              htmlFor="location"
              className="block text-blue-700 text-sm font-bold mb-2"
            >
              Location
            </label>
            <input
              required
              type="text"
              name="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className=" shadow appearance-none border rounded w-full mb-4 py-2 px-3 text-blue-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="flex space-between">
            <button
              className="uppercase md:text-base text-sm bg-blue-500 hover:bg-blue-700 text-white font-bold mt-4 mr-4 py-2 md:px-12 px-6 rounded-full focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Save
            </button>
            <button
              className="uppercase md:text-base text-sm bg-transparent border-solid border-2 border-blue-500 text-blue-500 hover:bg-blue-700 hover:text-white font-bold mt-4 py-2 md:px-6 px-4 rounded-full focus:outline-none focus:shadow-outline"
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                setIsClicked(!isClicked);
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  )
  : (<Spinner />)
};
export default UserProfileEdit;
