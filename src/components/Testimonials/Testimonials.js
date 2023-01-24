import React from 'react';

import WorldMap from '../../assets/world_map1.jpg';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import { useTranslation } from 'react-i18next';
import Carousel from 'react-elastic-carousel';
import One from '../../assets/1.png';
import Two from '../../assets/2.png';
import Three from '../../assets/3.png';
import Four from '../../assets/4.png';
import Five from '../../assets/5.png';
import Six from '../../assets/6.png';
import Seven from '../../assets/7.png';

const partners = [
  { id: 1, img: One },
  { id: 2, img: Two },
  { id: 3, img: Three },
  { id: 4, img: Four },
  { id: 5, img: Five },
  { id: 6, img: Six },
  { id: 7, img: Seven },
];
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 760, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];
function Testimonials() {
  const { t } = useTranslation();
  return (
    <div className="my-16 mb-32">
      <h2 className="capitalize text-center text-prim font-bold text-3xl mb-10 xl:pt-20 sm:pt-10">
        {t('home.testimonials.global-texts.testimonial-title')}
      </h2>
      <div className="flex flex-col xl:flex-row justify-around items-center gap-16 py-8 lg:py-24">
        <div className="pb-8 lg:pb-0 flex justify-center items-center">
          <img className="w-full" alt="world Map" src={WorldMap} />
        </div>
        <div className="  text-center flex items-center w-1/2 xl:w-2/4">
          <Carousel showArrows={false} autoPlay={true} infiniteLoop={true}>
            <div>
              <h3 className="text-gray-600 xl:w-1/2 text-center mx-auto">
                {t('home.testimonials.first.text')}
              </h3>
              <p className="text-gray-600 pt-2">
                <strong>{t('home.testimonials.first.whoSay')}</strong>
                <br></br> {t('home.testimonials.first.position')}
              </p>
            </div>
            <div>
              <h3 className="text-gray-600 xl:w-1/2 text-center mx-auto">
                {t('home.testimonials.second.text')}
              </h3>
              <p className="text-gray-600 pt-2">
                <strong>{t('home.testimonials.second.whoSay')}</strong>
                <br></br> {t('home.testimonials.second.position')}
              </p>
            </div>
            <div>
              <h3 className="text-gray-600 xl:w-1/2 text-center mx-auto">
                {t('home.testimonials.second.text')}
              </h3>
              <p className="text-gray-600 pt-2">
                <strong>{t('home.testimonials.second.whoSay')}</strong>
                <br></br> {t('home.testimonials.second.position')}
              </p>
            </div>
          </Carousel>
        </div>
      </div>
      <div className="grid grid-cols-1 ">
        <div className="pt-16 pl-18 pb-20 sm:pl-10 lg:pl-34">
          <h2 className="capitalize text-center text-prim font-bold text-3xl">
            {t('home.testimonials.global-texts.partners-title')}
          </h2>
        </div>
        <div className="pl-4 pb-6">
          <Carousel
            showArrows={false}
            breakPoints={breakPoints}
            className=""
            autoPlay={true}
            infiniteLoop={true}
          >
            {partners.map((ele) => (
              <div className="flex items-center justify-center content-center w-64 h-64">
                <img
                  src={ele.img}
                  key={ele.id}
                  alt={ele.id}
                  className="w-36  self-center content-center"
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
