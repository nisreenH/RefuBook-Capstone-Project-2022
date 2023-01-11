import React from 'react';
import pic from './map.png';
import Carousel from 'react-elastic-carousel';
import { useTranslation } from 'react-i18next';

export default function Testimonials() {
  const { t } = useTranslation();
  return (
    <div className="p-20  align item-center lg:flex flex-row md:flex-col md:inline-block ...">
      <img src={pic} alt="map" className="w-45 h-full md:w-50..." />

      <Carousel showArrows={false} className="w-48 text-left">
        <div className="w-48">
          <p> {t('home.testimonials.first.text')} </p>
          <p className="text-blue-600/50">
            {t('home.testimonials.first.whoSay')}
          </p>
          <p className="text-blue-600/50">
            {t('home.testimonials.first.position')}
          </p>
        </div>
        <div className="w-48">
          <p>{t('home.testimonials.second.text')} </p>
          <p className="text-blue-600/50">
            {t('home.testimonials.second.whoSay')}
          </p>
          <p className="text-blue-600/50">
            {t('home.testimonials.second.position')}
          </p>
        </div>
        <div className="w-48">
          <p>{t('home.testimonials.third.text')} </p>
          <p className="text-blue-600/50">
            {t('home.testimonials.third.whoSay')}
          </p>
          <p className="text-blue-600/50">
            {t('home.testimonials.third.position')}
          </p>
        </div>
      </Carousel>
    </div>
  );
}
