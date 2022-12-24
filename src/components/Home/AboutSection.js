import React from 'react';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faCircleDot } from '@fortawesome/free-solid-svg-icons';
import imageSrc from '../../assets/photoCopy.png';

const About = () => {
  return (
    <div className="container_style">
      <div className="main container">
        <div className="text_section">
          <h1>About</h1>
          <p>
            In quo quaerimus, non emolumento aliquo, sed ipsius honestatis
            decore laudandis, id est et quas molestias excepturi sint, obcaecati
            cupiditate non numquam eius modi tempora incidunt, ut earum rerum
            hic tenetur a natura ipsa natura incorrupte atque integre iudicante
            itaque aiunt hanc quasi involuta aperiri.
          </p>
          <button
            type="button"
            className="custom_button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          >
            Learn more
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
                    <h1>Reliability</h1>
                  </div>
                  <p>
                    Certe, inquam, pertinax non recusandae itaque earum rerum
                    facilis est consec. Laudem et impetus quo aut in gravissimo
                    bello animadversionis.
                  </p>
                </div>
                <div className="grid_item dsNone">
                  <div className="grid_header">
                    <FontAwesomeIcon icon={faCircle} />
                    <h1>Reliability</h1>
                  </div>
                  <p>
                    Certe, inquam, pertinax non recusandae itaque earum rerum
                    facilis est consec. Laudem et impetus quo aut in gravissimo
                    bello animadversionis.
                  </p>
                </div>
              </div>
              <div className="grit_item_row2 dsNone">
                <div className="grid_item">
                  <div className="grid_header">
                    <FontAwesomeIcon icon={faCircle} />
                    <h1>Reliability</h1>
                  </div>
                  <p>
                    Certe, inquam, pertinax non recusandae itaque earum rerum
                    facilis est consec. Laudem et impetus quo aut in gravissimo
                    bello animadversionis.
                  </p>
                </div>
                <div className="grid_item">
                  <div className="grid_header">
                    <FontAwesomeIcon icon={faCircle} />
                    <h1>Reliability</h1>
                  </div>
                  <p>
                    Certe, inquam, pertinax non recusandae itaque earum rerum
                    facilis est consec. Laudem et impetus quo aut in gravissimo
                    bello animadversionis.
                  </p>
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
