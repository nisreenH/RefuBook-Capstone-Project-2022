import React, { useState, useEffect } from 'react';
// import Slider from 'react-slick';
import './index.css';
import Card from '../Card/index';
import Avatar from '../Avatar';
import { Link } from 'react-router-dom';
import { db } from '../../firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';
import Carousel from 'react-elastic-carousel';
import Spinner from '../spinner/Spinner';
import { UserAuth } from '../../context/authContext';
import { BsFillPencilFill } from 'react-icons/bs';

const UserProfile = () => {
  const { user } = UserAuth();

  const [blogs, setBlogs] = useState({});
  useEffect(() => {
    async function fetchUserBlogs() {
      if (user) {
        const q = query(
          collection(db, 'blogs'),
          where('userId', '==', `${user.uid}`)
        );
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          setBlogs((prevState) => ({
            ...prevState,
            [doc.id]: doc.data(),
          }));
        });
      }
    }
    fetchUserBlogs();
  }, [user]);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 760, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  // const settings = {
  //   infinite: false,
  //   slidesToShow: 3,
  //   speed: 500,
  //   dots: true,
  //   rows: 2,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 1,
  //       },
  //     },
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //         initialSlide: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         rows: 1,
  //         dots: true,
  //       },
  //     },
  //   ],
  // };
  return blogs && user ? (
    <div className="flex justify-center items-center flex-col">
      <div className="userProfile-div relative ">
        <Avatar
          width={'10rem'}
          height={'10rem'}
          margin={'2.256rem 0rem'}
          isOpenNav={false}
        />
        <Link to={'/user-profile/update-profile'}>
          <div
            className="absolute bottom-12 right-4 rounded-full"
            style={{
              backgroundColor: '#4699C2',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <BsFillPencilFill size={20} color="white" />
          </div>
        </Link>
      </div>

      <h2>{user.displayName}</h2>

      <Carousel
        showArrows={false}
        breakPoints={breakPoints}
        className="w-full text-left p-6 flex items-center justify-center mb-20"
        autoPlay={true}
        infiniteLoop={true}
      >
        {Object.keys(blogs).map((key) => (
          <Card props={blogs[key]} key={key} blogId={key} />
        ))}
      </Carousel>
    </div>
  ) : (
    <Spinner />
  );
};

export default UserProfile;
