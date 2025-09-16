import React, { useEffect, useState } from 'react';
import HomeSlider from '../components/HomeSlider';
import Empowering from '../components/Empowering';
import ChairmanBlock from '../components/ChairmanBlock';
import ReviewSlider from '../components/ReviewSlider';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';
import Footer from '../include/Footer';

import { useApi } from '../hooks/useApi';
import { endpoints } from '../services/api';
import Loader from '../components/Loader';
import { Helmet } from "react-helmet-async";
import './Home.css';
import AdvSchoolSlider from './AdvSchoolSlider';
import AnnouncementEvents from './AnnouncementEvents';



function HomePage() {
  // const { data, error, loading } = useApi(endpoints.home);
  // const [showLoader, setShowLoader] = useState(true);

  // useEffect(() => {
  //   if (!loading) {
  //     // Delay hiding the loader to allow fade-out
  //     const timeout = setTimeout(() => {
  //       setShowLoader(false);
  //     }, 4000); // should match fade-out time

  //     return () => clearTimeout(timeout);
  //   }
  // }, [loading]);


  const { data, error } = useApi(endpoints.home);
  const [loading, setLoading] = useState(true);


  const handleLoaderFinish = () => {
    setLoading(false);
  };



  if (error) return <div className="error-message">Error: {error.message}</div>;
  if (!data) return null;




  return (
    <>
      {/* {showLoader && <Loader onFinish={() => setShowLoader(false)} />} */}

      {loading && <Loader onFinish={handleLoaderFinish} />}

      <Helmet>
        {/* <title>{data.seo.meta_title}</title> */}
        <meta name="description" content={data.seo.meta_description} />
        <meta name="keywords" content={data.seo.meta_keywords} />
      </Helmet>

      <HomeSlider />
      <Empowering />
      <ChairmanBlock />

      <div className='school-slider-sections hp'>
        <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
          <div className="container">
            <h2 className='our-school'>Our Schools</h2>
          </div>
            {/* <Link to="/our-school" className='btn-more'>Visit Schools</Link> */}
        </ScrollAnimation>
        <AdvSchoolSlider />
        <AnnouncementEvents/>
      </div>

      {/* <ReviewSlider /> */}
      <Footer />
    </>
  );
}

export default HomePage;