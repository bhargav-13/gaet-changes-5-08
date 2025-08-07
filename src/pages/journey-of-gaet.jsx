import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import ScrollAnimation from 'react-animate-on-scroll';
import { useApi } from '../hooks/useApi';
import { endpoints } from '../services/api';
import Loader from '../components/Loader';
import InsideTopBanner from '../include/InsideTopBanner';
import InsideMobileBlock from '../include/MobileInsideTopBanner';
import AssociationsPhotoBlock from '../components/AssociationsPhotoBlock';
import ApplyEnrolBlock from '../components/ApplyEnrolBlock';
import './JourneyOfGaet.css';
import ProjectUnderWay from './ProjectUnderWay';
import { Helmet } from "react-helmet-async";
import Footer from '../include/Footer';

function JourneyGaetPage() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { data, error, loading } = useApi(endpoints.journey);

    const [isVisible, setIsVisible] = useState(false);
    const oldSchoolPhotoRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.5 } // Trigger when 50% of the element is visible
        );

        if (oldSchoolPhotoRef.current) {
            observer.observe(oldSchoolPhotoRef.current);
        }

        return () => {
            if (oldSchoolPhotoRef.current) {
                observer.unobserve(oldSchoolPhotoRef.current);
            }
        };
    }, []);

    // if (loading) return <div><Loader /></div>;
    if (error) return <div className="error-message">Error: {error.message}</div>;
    if (!data) return null;
    if (loading) return <div><Loader /></div>;

    return (
        <>
            <Helmet>
                {/* <title>{data?.seo?.meta_title || "GAET"}</title> */}
                <meta name="description" content={data?.seo?.meta_description || "GAET"} />
                <meta name="keywords" content={data?.seo?.meta_keywords || "GAET"} />
            </Helmet>

            <InsideTopBanner
                pageTitle={data.top_section.title}
                pageBreadcrumb="Journey Of  GAET"
                BackgrondBack={data.top_section.back_image}
                CircleFront={data.top_section.front_image}
            />
            <InsideMobileBlock
                pageTitle={data.top_section.title}
                pageBreadcrumb="Journey Of GAET"
                BackgrondBack={data.top_section.back_image}
                CircleFront={data.top_section.front_image}
            />

            <div className='breadcrumb-area'>
                <Breadcrumb>
                    <Breadcrumb.Item href="/about">About Us</Breadcrumb.Item>
                    <Breadcrumb.Item active>Journey Of GAET</Breadcrumb.Item>
                </Breadcrumb>
            </div>

            <div className='inner-content-wapper'>
                <section>
                    <div
                        ref={oldSchoolPhotoRef}
                        className={`old-school-photo ${isVisible ? 'new-class' : ''}`}
                        style={{ background: `url(${data.gallery_area.image}) no-repeat fixed top` }}
                    >
                        <div className='center-content'>
                            <ScrollAnimation animateIn="zoomIn" delay={500}>
                                <h2>{data.gallery_area.page_main_title}</h2>
                            </ScrollAnimation>
                        </div>
                    </div>
                </section>

                <section>
                    <div
                        className="gaet-story old369-school-photo"
                        style={{ background: `url(${data.gallery_area.image}) no-repeat fixed top` }}
                    >
                        <Container>
                            <div className='content-blue-part'>
                                <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={200}>

                                    <h2><span dangerouslySetInnerHTML={{ __html: data.gallery_area.title }} /></h2>
                                </ScrollAnimation>
                                <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={400}>
                                    <p><span dangerouslySetInnerHTML={{ __html: data.gallery_area.description }} /></p>

                                </ScrollAnimation>
                                <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={600}>
                                    <Link to={data.gallery_area.link} className='btn-more'>
                                        Photo Gallery
                                    </Link>
                                </ScrollAnimation>
                            </div>
                        </Container>
                    </div>
                </section>

                {/* <section>
                    <div className='inner-blue-content-block'>
                        <Container>
                            <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={500}>
                                <p>
                                    <strong
                                        dangerouslySetInnerHTML={{
                                            __html: data.top_section.story
                                        }}
                                    />
                                </p>
                            </ScrollAnimation>
                        </Container>
                    </div>
                </section> */}

                <section>
                    <div className='school-list-style-two'>
                        <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={500}>
                            <Container>
                                {/* <h2>{data.institution.title}</h2> */}
                                {/* <Link to={data.institution.link} className='btn-more'>
                                    Visit Schools
                                </Link> */}
                            </Container>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={800}>
                            <ul className='school-list'>
                                <li>
                                    <div className='school-img-block'>
                                        <video autoPlay muted loop> <source src={process.env.PUBLIC_URL + "/images/Flip_Animation1.mp4"} type="video/mp4" />  </video>
                                    </div>
                                </li>
                            </ul>
                        </ScrollAnimation>
                    </div>
                </section>

                {/* {data.projects_underway.map((underway, index) => (

                    <section>
                        <div className='project-underway-area'>
                            <Container>
                                <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={700}>
                                    <h2>{underway.title}</h2>
                                </ScrollAnimation>
                                <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={900}>
                                    <strong
                                        dangerouslySetInnerHTML={{
                                            __html: underway.description || '',
                                        }}
                                    />
                                </ScrollAnimation>
                            </Container>
                            <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={500}>
                                <img src="/images/project-underway.png" alt="Project Underway" />
                            </ScrollAnimation>
                        </div>
                    </section>

                ))}     */}

                <ProjectUnderWay />

                <AssociationsPhotoBlock />


                <ApplyEnrolBlock />
            </div>
            <Footer />
        </>
    );
}

export default JourneyGaetPage;