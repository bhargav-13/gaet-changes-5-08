import React, { useEffect, useState } from 'react';
import InsideTopBanner from '../include/InsideTopBanner';
import InsideMobileBlock from '../include/MobileInsideTopBanner';
import ScrollAnimation from 'react-animate-on-scroll';
import { Container } from 'react-bootstrap';
import ApplyEnrolBlock from '../components/ApplyEnrolBlock';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { endpoints } from '../services/api';
import Loader from '../components/Loader';
import { useApi } from '../hooks/useApi';
import './VisionMission.css';
import { Helmet } from "react-helmet-async";
import Footer from "../include/Footer";



function VisionMissionPage() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { data, error, loading } = useApi(endpoints.visionMission);
    const [activeindex, setActiveindex] = useState(0);

    // Add event listeners to <li> elements for "open" toggle functionality
    useEffect(() => {
        if (!data) return; // Don't run if data isn't loaded yet

        const listItems = document.querySelectorAll('.rightlist li');

        const handleItemClick = (event) => {
            listItems.forEach((li) => li.classList.remove('open'));
            event.currentTarget.classList.add('open');
        };

        listItems.forEach((item) => item.addEventListener('click', handleItemClick));

        // Cleanup to avoid memory leaks
        return () => {
            listItems.forEach((item) => item.removeEventListener('click', handleItemClick));
        };
    }, [data]); // Only re-run when data changes

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
                pageTitle={data.top_section?.title}
                pageBreadcrumb="Vision & Mission"
                BackgrondBack={data.top_section?.back_image}
                CircleFront={data.top_section?.front_image}
            />
            <InsideMobileBlock
                pageTitle={data.top_section?.title}
                pageBreadcrumb="Vision & Mission"
                BackgrondBack={data.top_section?.back_image}
                CircleFront={data.top_section?.front_image}
            />

            <div className="breadcrumb-area">
                <Breadcrumb>
                    <Breadcrumb.Item href="/about">About Us</Breadcrumb.Item>
                    <Breadcrumb.Item active>Vision & Mission</Breadcrumb.Item>
                </Breadcrumb>
            </div>

            <div className="inner-content-wapper">
                <section>
                    <div className="inner-top-content-block">
                        <Container>
                            <ScrollAnimation animateIn="fadeInUp" animateOnce delay={200}>
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

                <section>
                    <div className="vision-mission-photo">
                        <img
                            src={data.vision_mission_section?.image}
                            className="bg"
                            alt="vision"
                        />
                        <div className="center-content">
                            <ScrollAnimation animateIn="fadeInUp" animateOnce delay={500}>
                                <img
                                    src="/images/vision-title.svg"
                                    alt="vision"
                                />
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="fadeInUp" animateOnce delay={1500}>

                                {/* <h2>{data.vision_mission_section?.title}</h2> */}
                                <h2><span dangerouslySetInnerHTML={{ __html: data.vision_mission_section?.title || '', }} /></h2>
                            </ScrollAnimation>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="vision-tab-area">
                        <Container>
                            <div className="inner-block">
                                <div className="left-part">
                                    <ScrollAnimation animateIn="fadeInUp" animateOnce delay={500}>
                                        <div className="logo">
                                            <img
                                                src="/images/gaet-vertical.png"
                                                alt="logo"
                                            />
                                        </div>
                                    </ScrollAnimation>
                                </div>
                                <ul className="rightlist">
                                    {data.vision_section?.slice().reverse().map((vision, index) => (
                                        <li key={index} className={activeindex === index ? 'open' : ''}
                                        onMouseEnter={() => setActiveindex(index)}
                                        >
                                            <ScrollAnimation animateIn="fadeInUp" animateOnce delay={1000}>
                                                <h3 dangerouslySetInnerHTML={{ __html: vision.title }} />
                                                <div className="bottom-part">
                                                    <div className="left-block">
                                                        <p
                                                            dangerouslySetInnerHTML={{
                                                                __html: vision.description,
                                                            }}
                                                        />
                                                    </div>

                                                    <div className="photo-block">
                                                        <div className="top-left"></div>
                                                        <div className="top-right"></div>
                                                        <img
                                                            src={vision.image}
                                                            alt="vision-mission"
                                                        />
                                                    </div>
                                                </div>
                                            </ScrollAnimation>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Container>
                    </div>
                </section>

                <ApplyEnrolBlock />
            </div>
            <Footer />
        </>
    );
}

export default VisionMissionPage;