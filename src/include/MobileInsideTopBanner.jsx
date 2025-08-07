import React, { useEffect } from 'react';
import './insidetopbanner.css';

function InsideMobileBlock(props) {
  useEffect(() => {
    const mobileTitle = document.getElementById('mobile-title');
    const otherPhoto = document.getElementById('other-photo');

    const titleTimeout = setTimeout(() => {
      if (mobileTitle) mobileTitle.classList.add('show');
    }, 500);

    const photoTimeout = setTimeout(() => {
      if (otherPhoto) otherPhoto.classList.add('show');
    }, 2000);

    
    return () => {
      clearTimeout(titleTimeout);
      clearTimeout(photoTimeout);
    };
  }, []);

  return (
    <div className="inside-mobile-block">
      <div className="white-bg">
        <img src={props.BackgrondBack} alt="back images" />
      </div>
      <h1 id="mobile-title">{props.pageTitle}</h1>
      <div className="center-photo" id="other-photo">
        <img src={props.CircleFront} alt="" />
      </div>
    </div>
  );
};

export default InsideMobileBlock;