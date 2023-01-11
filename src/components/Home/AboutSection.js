import React from 'react';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faCircleDot } from '@fortawesome/free-solid-svg-icons';
import imageSrc from '../../assets/photoCopy.png';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="container_style">
      <div className="main container">
        <div className="text_section">
          <h1>{t('home.about-section.title')}</h1>
          <p>{t('home.about-section.content')}</p>
          <button
            type="button"
            className="custom_button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          >
            {t('home.about-section.button')}
          </button>
        </div>
        <div className="grid_contents">
          <img src={imageSrc} alt="person in mobile" />
          <div className="grid_items">
            <div style={{ display: 'flex' }}>
              <div className="grit_item_row1">
                <div className="grid_item">
                  <div className="grid_header">
                    <i className="fa-duotone fa-circle-star" />
                    <FontAwesomeIcon icon={faCircleDot} />
                    <h1>{t('home.featuresTitle.reliability')}</h1>
                  </div>
                  <p>{t('home.featuresContent.reliability')}</p>
                </div>
                <div className="grid_item dsNone">
                  <div className="grid_header">
                    <FontAwesomeIcon icon={faCircle} />
                    <h1>{t('home.featuresTitle.motivation')}</h1>
                  </div>
                  <p>{t('home.featuresContent.motivation')}</p>
                </div>
              </div>
              <div className="grit_item_row2 dsNone">
                <div className="grid_item">
                  <div className="grid_header">
                    <FontAwesomeIcon icon={faCircle} />
                    <h1>{t('home.featuresTitle.efficiency')}</h1>
                  </div>
                  <p>{t('home.featuresContent.efficiency')}</p>
                </div>
                <div className="grid_item">
                  <div className="grid_header">
                    <FontAwesomeIcon icon={faCircle} />
                    <h1>{t('home.featuresTitle.creativity')}</h1>
                  </div>
                  <p>{t('home.featuresContent.creativity')}</p>
                </div>
              </div>
            </div>
            <div className="dots">
              <div className="circle-dot-fill"></div>
              <div className="circle-dot ml-1"></div>
              <div className="circle-dot ml-1"></div>
              <div className="circle-dot ml-1"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
