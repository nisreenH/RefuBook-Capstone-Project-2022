import React from 'react';
import {
  OurProductsCarouselSettings,
  ourPartnersInfo,
} from './Tconst/TestimonialsConsts';
import Carousel from './carousel/Index';
import WorldMap from '../../../assets/world_map1.jpg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { useTranslation } from 'react-i18next';
const testimonialsCarouselSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 2,
};

function Testimonials() {
  const { t } = useTranslation();
  return (
    <div className="my-8 ">
      <div className='bg-prim '>
      <div className="flex flex-col xl:flex-row justify-evenly items-center py-8 lg:py-24">
        <div className="pb-8 lg:pb-0 flex justify-center items-center">
          <img className="w-1/2 mb-8 xl:mb-0" alt="world Map" src={WorldMap} />
        </div>
        <div className="flex-end text-left w-full xl:w-2/4">
          <Slider {...testimonialsCarouselSettings}>
            <div>
              <h3 className="text-gray-100 xl:w-1/2 text-left mx-auto ">
                {t('home.testimonials.first.text')}
              </h3>
              <p className="text-whity text-left ml-44 pt-2">
                <strong>{t('home.testimonials.first.whoSay')}</strong>
                <br></br> {t('home.testimonials.first.position')}
              </p>
            </div>
            <div>
              <h3 className="text-whity xl:w-1/2 text-left mx-auto">
                {t('home.testimonials.first.text')}
              </h3>
              <p className="text-whity text-left ml-44 pt-2">
                <strong>{t('home.testimonials.second.whoSay')}</strong>
                <br></br> {t('home.testimonials.first.position')}
              </p>
            </div>
            <div>
              <h3 className="text-whity xl:w-1/2 text-left mx-auto">
                {t('home.testimonials.first.text')}
              </h3>
              <p className="text-whity text-left ml-44 pt-2">
                <strong>{t('home.testimonials.first.whoSay')}</strong>
                <br></br> {t('home.testimonials.first.position')}
              </p>
            </div>
          </Slider>
        </div>
      </div>
      </div>
      <div className="grid grid-cols-1 ">
        <div className="pt-16 pl-18 pb-20 sm:pl-10 lg:pl-34">
          <h2 className="capitalize text-center text-blue-700 font-bold text-3xl">
            {t('home.testimonials.global-texts.partners-title')}
          </h2>
        </div>
        <div className="pl-4 pb-6">
          <Carousel
            settings={OurProductsCarouselSettings}
            carouselData={ourPartnersInfo}
          ></Carousel>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
