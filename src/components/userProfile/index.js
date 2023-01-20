import React from 'react';
import Slider from 'react-slick';
import './index.css';
import data from '../../utils/data';
import Card from '../Card';
import Avatar from '../Avatar';
import { Link } from 'react-router-dom';

import { UserAuth } from '../../context/authContext';

const UserProfile = () => {
  const blogs = data[0].blogs;
  const { user } = UserAuth();

  const settings = {
    infinite: false,
    slidesToShow: 3,
    speed: 500,
    dots: true,
    rows: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1,
          dots: true,
        },
      },
    ],
  };
  return (
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
            className="absolute bottom-12 right-4 rounded-full  "
            style={{ backgroundColor: '#4699C2' }}
          >
            <div className="updateIcon "></div>
          </div>
        </Link>
      </div>

      <h2>{user.displayName}</h2>
      <Slider {...settings}>
        {blogs.map((ele) => {
          return (
            <Card
              props={{
                title: ele.title,
                text: ele.text,
                userProfilePic: ele.userProfilePic,
                user: ele.user,
              }}
              key={ele.id}
            />
          );
        })}
      </Slider>
    </div>
  );
};

export default UserProfile;
