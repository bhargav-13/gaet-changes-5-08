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
        <div className='slider-style-two-section'>
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
                        {/* <Link to="about" className='btn-visit'>Read More</Link> */}
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
        </div>
        <ApplyEnrolBlock />
      </div>
      <Footer />
    </>
  );
}

export default TheGaetAdvantagePage;