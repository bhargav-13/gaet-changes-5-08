import React, { useEffect, useState } from 'react'
import { useApi } from '../hooks/useApi';
import { endpoints } from '../services/api';
import Loader from '../components/Loader';
import InsideMobileBlock from '../include/MobileInsideTopBanner';
import InsideTopBanner from '../include/InsideTopBanner';
import ApplyEnrolBlock from '../components/ApplyEnrolBlock';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Container } from 'react-bootstrap';

import ScrollAnimation from 'react-animate-on-scroll';
import AdvSchoolSlider from './AdvSchoolSlider';
import { Helmet } from "react-helmet-async";
import Footer from '../include/Footer';

const OurSchool = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { data, error, loading } = useApi(endpoints.ourSchool);

    if (error) return <div>Error: {error.message}</div>;
    if (!data) return null;
    if (loading) return <div><Loader /></div>;

    return (
        <div>
            <>

                <Helmet>
                    {/* <title>{data?.seo?.meta_title || "GAET"}</title> */}
                    <meta name="description" content={data?.seo?.meta_description || "GAET"} />
                    <meta name="keywords" content={data?.seo?.meta_keywords || "GAET"} />
                </Helmet>
                <InsideTopBanner
                    pageTitle={data?.top_section?.title}
                    pageBreadcrumb="Governing Body"
                    BackgrondBack={data?.top_section?.back_image}
                    CircleFront={data?.top_section?.front_image}
                />
                <InsideMobileBlock
                    pageTitle={data?.top_section?.title}
                    pageBreadcrumb="Governing Body"
                    BackgrondBack={data?.top_section?.back_image}
                    CircleFront={data?.top_section?.front_image}
                />
                <div className='breadcrumb-area'>
                    <Breadcrumb>
                        <Breadcrumb.Item href="/about">About Us</Breadcrumb.Item>
                        <Breadcrumb.Item active>Our School</Breadcrumb.Item>
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
                                                __html: data?.top_section?.story || '',
                                            }}
                                        />
                                    </p>
                                </ScrollAnimation>
                            </Container>
                        </div>
                    </section>

                    <section>
                        <AdvSchoolSlider />
                    </section>

                    <ApplyEnrolBlock />
                </div>
                <Footer />
            </>
        </div>
    )
}

export default OurSchool
