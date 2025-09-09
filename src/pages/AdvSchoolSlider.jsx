import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "./AdvSchoolSlider.css";

import rowOneImageOne from "../assets/GHS 3.png";
import rowOneImageTwo from "../assets/Mask group.png";
import rowOneImageThree from "../assets/Mask group (1).png";
import rowTwoImageOne from "../assets/Mask group (2).png";
import rowTwoImageTwo from "../assets/Mask group (3).png";
import rowTwoImageThree from "../assets/Mask group (4).png";
import rowThreeImageOne from "../assets/Mask group (5).png";

import educationOne from "../assets/educationone.png";
import educationTwo from "../assets/educationtwo.png";
import educationThree from "../assets/educationthree.png";
import educationFour from "../assets/educationfour.png";
import educationFive from "../assets/educationfive.png";
import educationSix from "../assets/educationsix.png";

import purposeOne from "../assets/purposeOne.png";
import purposeTwo from "../assets/purposeTwo.png";
import purposeThree from "../assets/purposeThree.png";
import purposeFour from "../assets/purposeFour.png";
import purposeFive from "../assets/purposeFive.png";
import purposeSix from "../assets/purposeSix.png";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { fetchData } from "../components/Api";

const purposeImages = [
  purposeOne,
  purposeTwo,
  purposeThree,
  purposeFour,
  purposeFive,
  purposeSix,
];

function AdvSchoolSlider() {
  const highlights = [
    { id: 1, description: "7 Schools, 3 Cities", image: educationOne },
    {
      id: 2,
      description: "Educating 18,000+ students annually",
      image: educationTwo,
    },
    {
      id: 3,
      description: "Diverse Boards (CBSE, ICSE, ISC and IB)",
      image: educationThree,
    },
    { id: 4, description: "Tech-enabled learning", image: educationFour },
    {
      id: 5,
      description: "Exceptional Sports Infrastructure",
      image: educationFive,
    },
    { id: 6, description: "Learning beyond books", image: educationSix },
  ];
  return (
    <>
      <div className="school-section mb-3 mt-5">
        <div className="container-fluid">
          {/* First Row */}
          <div className="row g-2 mb-2 pt-5">
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="school-image-wrapper">
                <img
                  src={rowOneImageOne}
                  alt="School1"
                  className="img-fluid w-100"
                />
                <div className="school-overlay-one school-overlay">
                  <h3>
                    Gokuldham High School & Junior College
                    <span className="school-type">(ICSE & ICS)</span>
                  </h3>

                  <div className="school-info">
                    <p>Situated in Goregaon (E)</p>
                    <p>Estd. 1983</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="school-image-wrapper">
                <img
                  src={rowOneImageTwo}
                  alt="School2"
                  className="img-fluid w-100"
                />
                <div className="school-overlay-two school-overlay">
                  <h3>
                    Yashodham High School & Junior College
                    <span className="school-type"> (CBSE)</span>
                  </h3>
                  <div className="school-info">
                    <p>Situated in Goregaon (E)</p>
                    <p>Estd. 1987</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
              <div className="school-image-wrapper">
                <img
                  src={rowOneImageThree}
                  alt="School3"
                  className="img-fluid w-100"
                />
                <div className="school-overlay-three school-overlay">
                  <h3>
                    Vasant Vihar High School & Junior College
                    <span className="school-type">(ICSE & ICS)</span>
                  </h3>
                  <div className="school-info">
                    <p>Situated in Thane (W)</p>
                    <p>Estd. 1990</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Second Row */}
          <div className="row g-2 mb-2">
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="school-image-wrapper">
                <img
                  src={rowTwoImageOne}
                  alt="School4"
                  className="img-fluid w-100"
                />
                <div className="school-overlay-four school-overlay">
                  <h3>Thane Police School (CBSE)</h3>
                  <div className="school-info">
                    <p>Situated in Thane (W)</p>
                    <p>Estd. 2006</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="school-image-wrapper">
                <img
                  src={rowTwoImageTwo}
                  alt="School5"
                  className="img-fluid w-100"
                />
                <div className="school-overlay-five school-overlay">
                  <h3>GAET Counselling Center</h3>
                  <div className="school-info">
                    <p>Situated in Goregaon & Thane</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
              <div className="school-image-wrapper">
                <img
                  src={rowTwoImageThree}
                  alt="School5"
                  className="img-fluid w-100"
                />
                <div className="school-overlay-six school-overlay">
                  <h3>Lakshdham High School (ICSE)</h3>
                  <div className="school-info">
                    <p>Situated in Goregaon(E)</p>
                    <p>Estd. 2008</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Row-3 */}
          <div className="row g-2 mb-3 pb-5">
            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
              <div className="school-image-wrapper school-overlay">
                <img
                  src={rowThreeImageOne}
                  alt="School7"
                  className="img-fluid w-100"
                />
                <div className="school-overlay-seven">
                  <h3>GAET International School Aldeia</h3>
                  <div className="school-info">
                    <p>Situated in Bambolin, Goa</p>
                    <p>Estd. 2025</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <section>
                <div className='school-slider-sections'>
                    <Swiper
                        navigation={true}
                        loop={true}
                        pagination={{ clickable: true }}
                        effect={'fade'}
                        modules={[Navigation, Pagination, Autoplay, EffectFade]}
                        className="mySwiper"
                        autoplay={{ delay: 5500, disableOnInteraction: false }}
                    >
                        {highlights.map((item) => {
                            const specialClass = [2, 3, 5].includes(item.id) ? 'adjust-text-slide' : '';
                             const responsiveClass = [4, 6].includes(item.id) ? 'adjust-text-responsive' : '';
                              const idThree = [3].includes(item.id) ? 'adjust-text-three' : '';
                            return (
                                <SwiperSlide key={item.id}>
                                    <div className={`school-block container ${specialClass} ${responsiveClass} ${idThree}`}>
                                        <div className='content-area'>
                                            <h3>Educating with Purpose, Evolving Over Four Decades</h3>
                                            <div className='bottombar'>
                                                <div className='info'>{item.description}</div>
                                            </div>
                                        </div>
                                        <div className='school-photo'>
                                            <img src={item.image} alt={item.description} />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
            </section> */}

      <section>
        <div className="school-slider-sections">
          <Swiper
            navigation={true}
            loop={true}
            pagination={{ clickable: true }}
            effect={"fade"}
            modules={[Navigation, Pagination, Autoplay, EffectFade]}
            className="mySwiper"
            autoplay={{ delay: 5500, disableOnInteraction: false }}
          >
            {highlights.map((item) => {
              const specialClass = [2, 3, 5].includes(item.id)
                ? "adjust-text-slide"
                : "";
              const responsiveClass = [4, 6].includes(item.id)
                ? "adjust-text-responsive"
                : "";
              const idThree = [3].includes(item.id) ? "adjust-text-three" : "";

              return (
                <SwiperSlide key={item.id}>
                  <div
                    className={`school-block container ${specialClass} ${responsiveClass} ${idThree}`}
                  >
                    <div className="content-area">
                      <h3>
                        Educating with Purpose, Evolving Over Four Decades
                      </h3>
                      <div className="school-stats">
                        <div className="school-icon-wrapper">
                          <img
                            src={
                              purposeImages[
                                (item.id - 1) % purposeImages.length
                              ]
                            }
                            alt="Purpose Icon"
                            className="purpose-icon"
                          />
                        </div>
                        <div className="info">{item.description}</div>
                      </div>
                    </div>
                    <div className="school-photo">
                      <img src={item.image} alt={item.description} />
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>
    </>
  );
}
export default AdvSchoolSlider;
