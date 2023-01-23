import React from 'react';
import './About.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCircle, faCircleDot } from '@fortawesome/free-solid-svg-icons';
import imageSrc from '../../assets/photoCopy.png';
import { useTranslation } from 'react-i18next';
import Carousel from 'react-elastic-carousel';

const About = () => {
  const { t } = useTranslation();
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 760, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  return (
    <div className="w-auto mb-24">
      <div className="flex flex-col items-center gap-4 lg:px-32">
        <div className="mx-4 my-3 flex flex-col gap-3 items-center">
          <h2 className="text-prim text-4xl">
            {t('home.about-section.title')}
          </h2>
          <p className="text-lg md:text-xl">
            {t('home.about-section.content')}
          </p>
          <button
            type="button"
            className="bg-prim px-4 py-2 rounded-full text-white font-medium md:text-lg hover:-translate-y-1 hover:shadow-lg shadow-sky-600 transform-all duration-500"
          >
            {t('home.about-section.button')}
          </button>
        </div>
        <div className="flex flex-col md:flex-row-reverse md:gap-32 items-center justify-center w-full">
          <img src={imageSrc} alt="person in mobile" />
          <div className="w-96 ">
            <Carousel
              showArrows={false}
              breakPoints={breakPoints}
              className="w-auto"
              autoPlay={true}
              infiniteLoop={true}
            >
              <div className="">
                <div className="flex items-center gap-2 justify-center font-bold">
                  <h1 className="">{t('home.featuresTitle.reliability')}</h1>
                </div>
                <p className="text-lg">
                  {t('home.featuresContent.reliability')}
                </p>
              </div>
              {/*  */}
              <div className="">
                <div className="flex items-center gap-2 justify-center font-bold">
                  <h1>{t('home.featuresTitle.motivation')}</h1>
                </div>
                <p className="text-lg">
                  {t('home.featuresContent.motivation')}
                </p>
              </div>
              {/*  */}
              <div className="">
                <div className="flex items-center gap-2 justify-center font-bold">
                  <h1>{t('home.featuresTitle.efficiency')}</h1>
                </div>
                <p className="text-lg">
                  {t('home.featuresContent.efficiency')}
                </p>
              </div>
              {/*  */}
              <div className="">
                <div className="flex items-center gap-2 justify-center font-bold">
                  <h1>{t('home.featuresTitle.creativity')}</h1>
                </div>
                <p className="text-lg">
                  {t('home.featuresContent.creativity')}
                </p>
              </div>
            </Carousel>
          </div>

          {/* <div className="grid_items bg-blue-300">
           
            <div>
              <div className="grit_item_row1"> */}
          {/* <div className="grid_item">
                  <div className="grid_header">
                    <FontAwesomeIcon icon={faCircleDot} />
                    <h1 className="font-bold">
                      {t('home.featuresTitle.reliability')}
                    </h1>
                  </div>
                  <p>{t('home.featuresContent.reliability')}</p>
                </div> */}
          {/* <div className="grid_item dsNone">
                  <div className="grid_header">
                    <FontAwesomeIcon icon={faCircle} />
                    <h1>{t('home.featuresTitle.motivation')}</h1>
                  </div>
                  <p>{t('home.featuresContent.motivation')}</p>
                </div> */}
          {/* </div>
              <div className="grit_item_row2 dsNone"> */}
          {/* <div className="grid_item">
                  <div className="grid_header">
                    <FontAwesomeIcon icon={faCircle} />
                    <h1>{t('home.featuresTitle.efficiency')}</h1>
                  </div>
                  <p>{t('home.featuresContent.efficiency')}</p>
                </div> */}
          {/* <div className="grid_item">
                  <div className="grid_header">
                    <FontAwesomeIcon icon={faCircle} />
                    <h1>{t('home.featuresTitle.creativity')}</h1>
                  </div>
                  <p>{t('home.featuresContent.creativity')}</p>
                </div> */}
          {/* </div>
            </div> */}
          {/* <div className="dots">
              <div className="circle-dot-fill"></div>
              <div className="circle-dot ml-1"></div>
              <div className="circle-dot ml-1"></div>
              <div className="circle-dot ml-1"></div>
            </div> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default About;
