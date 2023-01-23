import React from 'react';
import One from '../../../../assets/1.png';
import Two from '../../../../assets/2.png';
import Three from '../../../../assets/3.png';
import Four from '../../../../assets/4.png';
import Five from '../../../../assets/5.png';
import Six from '../../../../assets/6.png';
import Seven from '../../../../assets/7.png';

export const testimonialsCarouselSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  arrows: false,
  slidesToScroll: 2,
};
export const OurProductsCarouselSettings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
  ],
};

export const ourPartnersInfo = [
  <div className="flex items-center content-center bg-red-300">
    <img
      alt="Partner"
      className="self-center object-center w-64 content-center bg-red-300"
      src={Seven}
    />
  </div>,
  <div className="flex items-center content-center bg-red-300">
    <img
      alt="Partner"
      className="self-center object-center w-64 content-center "
      src={Six}
    />
  </div>,
  <div className="flex items-center content-center bg-red-300">
    <img
      alt="Partner"
      className="self-center object-center w-64 content-center "
      src={Five}
    />
  </div>,
  <div className="flex items-center content-center bg-red-300">
    <img
      alt="Partner"
      className="self-center object-center w-64 content-center "
      src={Four}
    />
  </div>,
  <div className="flex items-center content-center bg-red-300">
    <img
      alt="Partner"
      className="self-center object-center w-64 content-center "
      src={Three}
    />
  </div>,
  <div className="flex items-center content-center bg-red-300">
    <img
      alt="Partner"
      className="self-center object-center w-64 content-center "
      src={Two}
    />
  </div>,
  <div className="flex items-center content-center bg-red-300">
    <img
      alt="Partner"
      className="self-center object-center w-64 content-center "
      src={One}
    />
  </div>,
];
export const testimonialsInfo = [
  <div>
    <h3 className="text-gray-600 pt-2">
      Two lines of a short testimonial from someone want to say something, and
      can say more to explain.
    </h3>
    <p className="text-gray-600 pt-2">
      Louis Li,<br></br> Trainer at Recoded
    </p>
  </div>,
  <div>
    <h3 className="">
      Two lines of a short testimonial from someone want to say something, and
      can say more to explain.
    </h3>
    <p className="text-gray-600 pt-2">
      Louis Li,<br></br> Trainer at Recoded
    </p>
  </div>,
  <div>
    <h3 className="text-gray-600 pt-2">
      Two lines of a short testimonial from someone want to say something, and
      can say more to explain.
    </h3>
    <p className="text-gray-600 pt-2">
      Louis Li,<br></br> Trainer at Recoded
    </p>
  </div>,
];
