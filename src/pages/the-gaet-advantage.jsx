import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Navigation, EffectFade, Pagination, Autoplay } from 'swiper/modules';
import { useApi } from '../hooks/useApi';
import { endpoints } from '../services/api';
import Loader from '../components/Loader';
import InsideTopBanner from '../include/InsideTopBanner';
import InsideMobileBlock from '../include/MobileInsideTopBanner';
import ApplyEnrolBlock from '../components/ApplyEnrolBlock';
import './TheGeatAdvantage.css';
import { Helmet } from "react-helmet-async";

// Import Images:
import advantageOne from '../assets/advantageOne.png';
import advantageOneRight from '../assets/advantageOneRight.png';
import advantageTwo from '../assets/advantageTwo.png';
import advantageTwoRight from '../assets/advantageTwoRight.png';
import advantageThree from '../assets/advantageThree.png';
import advantageThreeRight from '../assets/advantageThreeRight.png';
import advantageFour from '../assets/advantageFour.png';
import advantageFourRight from '../assets/advantageFourRight.png';
import advantageFive from '../assets/advantageFive.png';
import advantageFiveRight from '../assets/advantageFiveRight.png';
import advantageSix from '../assets/advantageSix.png';
import advantageSixRight from '../assets/advantageSixRight.png';



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import Footer from '../include/Footer';

function TheGaetAdvantagePage() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { data, error, loading } = useApi(endpoints.advantages);

  if (error) return <div>Error: {error.message}</div>;
  if (!data) return null;
  if (loading) return <div><Loader /></div>;
  const slides = [
  {
    id: 1,
    title: "Safe & Reliable Transport",
    description:
      "Our transport services in all our campuses ensure every child travels comfortably and securely with a dedicated lady and gent attendant. All our buses are GPS-enabled buses with clear routes, parents can be assured their child is in safe hands.",
    image: advantageOne,
    illustration: advantageOneRight
  },
  {
    id: 2,
    title: "Building Sportsmanship",
    description:"Our large playgrounds, sports coaching and dedicated PT time encourage students to stay active, build team spirit and develop healthy lifelong habits. Sports is an integral part of our curriculum and all our children are encouraged to choose a sport that resonates with their interest and personality. ",    image: advantageTwo,
    illustration: advantageTwoRight
  },
    {
    id: 3,
    title: "Scholarships",
    description:
    "We offer scholarships and fee support to deserving students because we believe the spark of curiosity mustn't diminish due to restraints in resources. Every child deserves to learn to be ready for the real world.",
    image: advantageThree,
    illustration: advantageThreeRight
  },
    {
    id: 4,
    title: "Guidance Beyond Academics",
    description:"We take pride in having a full-fledged counselling centre that have trained counsellors and special educators. We cater to children in need of special care with specialists like Psychologist, School Counsellors, Remedial Educators, Occupational therapists, Language enhancement therapists and psychiatrists. Every child’s learning pace is respected and cared for.",
    image: advantageFour,
    illustration: advantageFourRight
  },
    {
    id: 5,
    title: "Technology First",
    description:"Our Classrooms are smart classrooms built with interactive tools, and age-appropriate technology to help our students stay informed. We ensure our children have a pleasant and engaging learning experience, while understanding the evolving world around them. Apart from classrooms that are tech-enabled, we also have ERP platforms that are used for various administrative and academic processes in our schools. Parents are also part of this ecosystem.",    image: advantageFive,
    illustration: advantageFiveRight
  },
    {
    id: 6,
    title: "Strong Foundation in Education",
    description:"We believe real learning happens when children understands, ask questions and comprehends the world around them. We respect the learning pace of each child across all boards and ensure our teachers pace lessons to suit every learner, create classrooms rooted in care, and grow confidence without comparison. We lay the foundation for purposeful and lifelong learning.",
    image: advantageSix,
    illustration: advantageSixRight
  },
];

  return (
    <>
      <Helmet>
        {/* <title>{data?.seo?.meta_title || "Default Title"}</title> */}
        <meta name="description" content={data?.seo?.meta_description || "Default Description"} />
        <meta name="keywords" content={data?.seo?.meta_keywords || "Default, Keywords"} />
      </Helmet>


      <InsideTopBanner
        pageTitle={data.top_section.title}
        pageBreadcrumb="Governing Body"
        BackgrondBack={data.top_section.back_image}
        CircleFront={data.top_section.front_image}
      />
      <InsideMobileBlock
        pageTitle={data.top_section.title}
        pageBreadcrumb="Governing Body"
        BackgrondBack={data.top_section.back_image}
        CircleFront={data.top_section.front_image}
      />

      <div className='breadcrumb-area'>
        <Breadcrumb>
          <Breadcrumb.Item href="/about">About Us</Breadcrumb.Item>
          <Breadcrumb.Item active>The GAET Advantage</Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <div className='inner-content-wapper'>
        {/* <div className='slider-style-two-section'>
          <Swiper
            navigation={true}
            loop={true}
            pagination={{ clickable: true }}
            effect={'fade'}
            modules={[Navigation, Pagination, EffectFade]}
            className="mySwiper"
            autoplay={{ delay: 5500, disableOnInteraction: false }}
          >
            {data.quality_education.map((quality, index) => (
              <SwiperSlide key={index}>
                <div className='innerside-area'>
                  <div className='left-photo'>
                    <img src={quality.back_image} alt="about" />
                    <div className='content-area'>
                      <h3>{quality.title}</h3>
                      <div className='bottombar'>
                        <p>{quality.description}</p>
                      </div>
                    </div>
                  </div>
                  <div className='right-color-part' style={{ background: quality.color }}>
                    <div className='rays'>
                      <img src="/images/ray.png" alt="ray" />
                    </div>
                  </div>
                  <div className='upper-photo'>
                    <div className='bg'>
                      <img src="/images/bg-vission.png" alt="" />
                    </div>
                    <img src={quality.front_image} alt="" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div> */}

        <div className='slider-style-two-section'>
          <Swiper
            navigation={true}
            loop={true}
            effect={'fade'}
            modules={[Navigation, EffectFade]}
            className="mySwiper"
            autoplay={{ delay: 5000, disableOnInteraction: false }}
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                  <div className="row align-items-center flex-lg-row">
                    <div className="col-lg-7 text-white">
                      <div className="image-wrapper">
                      <h2 className="image-title mb-3 ">{slide.title}</h2>
                      <img src={slide.image}alt="Slide Image"className="img-fluid"/>
                    </div>
                    </div>

                    {/* Right Side - Image / Illustration */}
                    <div className="col-lg-5">
                      <p className="text-light image-description">{slide.description}</p>
                      <div className="slide-image-container right-image">
                        <img src={slide.illustration} alt="Slide Illustration" className="img-fluid" />
                      </div> 
                    </div>
                  </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <ApplyEnrolBlock />
      </div>
      <Footer />
    </>
  );
}

export default TheGaetAdvantagePage;