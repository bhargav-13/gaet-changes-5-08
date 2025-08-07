import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import ScrollAnimation from 'react-animate-on-scroll';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectFade, Pagination, Autoplay } from 'swiper/modules';
import { useApi } from '../hooks/useApi';
import { endpoints } from '../services/api';
import Loader from '../components/Loader';
import InsideTopBanner from '../include/InsideTopBanner';
import InsideMobileBlock from '../include/MobileInsideTopBanner';
import ApplyEnrolBlock from '../components/ApplyEnrolBlock';
import Footer from "../include/Footer";


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { Helmet } from "react-helmet-async";

function AboutPage() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { data, error, loading } = useApi(endpoints.about);

    if (loading) return <div><Loader /></div>;
    if (error) return <div className="error-message">Error: {error.message}</div>;
    if (!data) return null;

    return (
        <>

            <Helmet>
                {/* <title>{data?.seo?.meta_title || "GAET"}</title> */}
                <meta name="description" content={data?.seo?.meta_description || "GAET"} />
                <meta name="keywords" content={data?.seo?.meta_keywords || "GAET"} />
            </Helmet>

            <InsideTopBanner
                pageTitle={data.top_section.title}
                pageBreadcrumb="About Us"
                BackgrondBack={data.top_section.back_image}
                CircleFront={data.top_section.front_image}
            />
            <InsideMobileBlock
                pageTitle={data.top_section.title}
                pageBreadcrumb="About Us"
                BackgrondBack={data.top_section.back_image}
                CircleFront={data.top_section.front_image}
            />

            <div className='breadcrumb-area'>
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>About Us</Breadcrumb.Item>
                </Breadcrumb>
            </div>

            <div className='inner-content-wapper'>
                <section>
                    <div className='inner-top-content-block'>
                        <Container>
                            <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={200}>
                                <p>
                                    <strong
                                        dangerouslySetInnerHTML={{
                                            __html: data.top_section?.story || '',
                                        }}
                                    />
                                </p>
                            </ScrollAnimation>
                        </Container>
                    </div>
                </section>

                <div className='slider-style-two-section'>
                    <Swiper
                        navigation={true}
                        loop={true}
                        pagination={{ clickable: true }}
                        effect={'fade'}
                        modules={[Navigation, Pagination, Autoplay, EffectFade]}
                        className="mySwiper"
                        autoplay={{
                            delay: 5500,
                            disableOnInteraction: false
                        }}
                    >
                        {data.vision_mission.map((vision, index) => (
                            <SwiperSlide key={index}>
                                <div className='innerside-area'>
                                    <div className='left-photo'>
                                        <img src={vision.back_image} alt="about" />
                                        <div className='content-area'>
                                            <h3>{vision.title}</h3>
                                            <div className='bottombar'>
                                                <p>{vision.description}</p>
                                                <Link to={vision.link} className='btn-visit'>Know More</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='right-color-part' style={{ background: vision.color }}>
                                        <div className='rays'>
                                            <img src="/images/ray.png" alt="ray" />
                                        </div>
                                    </div>
                                    <div className='upper-photo'>
                                        <div className='bg'>
                                            <img src="/images/bg-vission.png" alt="" />
                                        </div>
                                        <img src={vision.front_image} alt="" />
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

export default AboutPage;