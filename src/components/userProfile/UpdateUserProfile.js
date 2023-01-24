import React, { useState, useEffect } from 'react';
import Avatar from '../Avatar';
import { UserAuth } from '../../context/authContext';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import Spinner from '../spinner/Spinner';
import { AiFillCamera } from 'react-icons/ai';
import { useTranslation } from 'react-i18next';

const UserProfileEdit = (props) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userName, setUsername] = useState('');
  const [bio, setBio] = useState('');
  const [location, setLocation] = useState('');
  const [profilePic, setProfileUrl] = useState('');
  const [isClicked, setIsClicked] = useState(false);
  const [isImgVisible, setIsImgVisible] = useState(false);

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
      setProfileUrl(data.data().profilePic);
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
      profilePic,
    }).then(() => {
      alert('data is updated');
      navigate('/user-profile');
    });
  };

  const handleUserImage = (e) => {
    setIsImgVisible(!isImgVisible);
  };

  return user ? (
    <div className=" h-screen flex flex-col items-center justify-center">
      <div className="userProfile-div relative ">
        <Avatar
          width={'10rem'}
          height={'10rem'}
          margin={'2.256rem 0rem'}
          isOpenNav={false}
        />
        <button onClick={handleUserImage}>
          <div
            className="absolute bottom-20 right-4 rounded-full"
            style={{
              backgroundColor: '#4699C2',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <AiFillCamera size={20} color="white" />
          </div>
        </button>
      </div>

      <div>
        <form name="userProfile" onSubmit={handleSubmit}>
          <div className={`${isImgVisible ? 'visible' : 'hidden'} md:mr-4`}>
            <label
              htmlFor="userImage"
              className="block text-blue-700 text-sm font-bold mb-2"
            >
              {t('userProfile.edit.image')}
            </label>
            <input
              type="text"
              id="userImage"
              className={`shadow appearance-none border rounded 
                          w-full mb-4 py-2 px-3 text-blue-700 leading-tight focus:outline-none focus:shadow-outline`}
              placeholder="www.image.com/path"
              value={profilePic}
              onChange={(e) => setProfileUrl(e.target.value)}
            />
          </div>
          <div className="md:flex block space-between">
            <div className="md:mr-4">
              <label
                htmlFor="first name"
                className="block text-blue-700 text-sm font-bold mb-2"
              >
                {t('userProfile.edit.firstName')}
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
                {t('userProfile.edit.lastName')}
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
              {t('userProfile.edit.username')}
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
              {t('userProfile.edit.biography')}
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
              {t('userProfile.edit.location')}
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
              {t('userProfile.edit.save')}
            </button>
            <button
              className="uppercase md:text-base text-sm bg-transparent border-solid border-2 border-blue-500 text-blue-500 hover:bg-blue-700 hover:text-white font-bold mt-4 py-2 md:px-6 px-4 rounded-full focus:outline-none focus:shadow-outline"
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                setIsClicked(!isClicked);
              }}
            >
              {t('userProfile.edit.cancel')}
            </button>
          </div>
        </form>
      </div>
    </div>
  ) : (
    <Spinner />
  );
};
export default UserProfileEdit;
