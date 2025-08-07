import React, { useEffect, useState } from "react";
import './insidetopbanner.css';
import { Breadcrumb } from "react-bootstrap";

function InsideTopBanner(props) {
  const [circleStyle, setCircleStyle] = useState({
    transform: "translateY(0)",
    width: "600px",
    height: "600px",
    marginBottom: "-600px",
    borderRadius: "50%",
    filter: "grayscale(100%)",
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      if (scrollY < windowHeight / 0.5) {
        const translateY = Math.min(scrollY / 50, windowHeight / 4); // faster movement
        const size = 600 + Math.min(scrollY / 10, 1000);              // grows faster
        const marginBottom = -600 + scrollY / 3;                     // lifts quicker


        setCircleStyle({
          transform: `translateY(-${translateY}px)`,
          width: `${size}px`,
          height: `${size}px`,
          marginBottom: `${marginBottom}px`,
          borderRadius: "50%",
          filter: "grayscale(100%)",
        });
      } else {
        setCircleStyle({
          transform: "translateY(0)",
          width: "100%",
          height: "100%",
          marginBottom: "0",
          borderRadius: "0",
          filter: "grayscale(0)",
        });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* <div className="inner-top-area">
                <div className='bg-img'>
                    <img src={props.BackgrondBack} alt="back images" />
                </div>
                
                <h1>{props.pageTitle}</h1>
                <div className='bottom-circle'>
                    <img src={process.env.PUBLIC_URL + "/images/about-front-img.jpg"} alt="" />
                </div>
                <div className='breadcrumb-area'>
                    <Breadcrumb>
                        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                        <Breadcrumb.Item active>{props.pageBreadcrumb}</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
            </div>  */}


      <div className="circle-container">
        <div className='blue-book-area'></div>
        <div className="red-part">
          <img src={props.BackgrondBack} alt="back images" />
          <h1>{props.pageTitle}</h1>
        </div>
        <div className="circle" style={circleStyle}>
          <img src={props.CircleFront} alt="" />
        </div>
      </div>
    </>
  );
}
export default InsideTopBanner;