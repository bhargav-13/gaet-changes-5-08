import React, { useEffect, useState } from 'react';
import InsideTopBanner from '../include/InsideTopBanner';
import InsideMobileBlock from '../include/MobileInsideTopBanner';
import ScrollAnimation from 'react-animate-on-scroll';
import { Container } from 'react-bootstrap';
import ApplyEnrolBlock from '../components/ApplyEnrolBlock';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import './AboutFounder.css';
import { useApi } from '../hooks/useApi';
import { endpoints } from '../services/api';
import Loader from '../components/Loader';
import { Helmet } from "react-helmet-async";
import Footer from '../include/Footer';


function AboutOurFoundersPage() {

    const { data, error, loading } = useApi(endpoints.founder);

    
    if (error) return <div>Error: {error.message}</div>;
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
                pageBreadcrumb="Governing Body"
                BackgrondBack={data.top_section.back_image}
                CircleFront={data.top_section.front_image}
            />
            {/* <InsideMobileBlock
                pageTitle={data.top_section.title}
                pageBreadcrumb="Governing Body"
                BackgrondBack={data.top_section.back_image}
                CircleFront={data.top_section.front_image}
            /> */}

            <div className='breadcrumb-area'>
                <Breadcrumb>
                    <Breadcrumb.Item href="/about">About Us</Breadcrumb.Item>
                    <Breadcrumb.Item active>About Our Founders</Breadcrumb.Item>
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
                                            __html: data.top_section.story || '',
                                        }}
                                    />
                                </p>
                            </ScrollAnimation>
                        </Container>
                    </div>
                </section>

                <section>
                    <div className='founder-list-section'>
                        {data.founder_list.slice().reverse().map((founder, index) => (

                            <div className='founder-block'>
                                <div className='photo-area'>
                                    <img src={founder.image} alt="" />
                                </div>
                                <div className='content-block'>
                                    <div className='arrow'>
                                        <div className='top'></div>
                                        <div className='bottom'></div>
                                    </div>
                                    <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={300}>
                                        <h2>{founder.name}</h2>
                                        <div className='position'>{founder.designation}<br />{founder.title}</div>
                                    </ScrollAnimation>
                                    <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={500}>
                                        {/* <p>Late Shri K.M. Goenka was an inspiration to every life he touched.</p>
                                    <p>Goenkaji established Goenka & Associates Educational Trust (GAET) to impart the best affordable education to students by focussing on giving every child equal opportunities.</p>
                                    <p>Beginning with Gokuldham High School and Junior College, followed by Yashodham High School & Junior College, Vasant Vihar High School & Junior College,Vasant Vihar Playmate Pre-School, Playmate Pre-School, Lakshdham High School and Lakshdham Playmate Pre-School have been established and are being efficiently run by his daughter Ms Sunita Goenka and her professional team.</p>
                                    <p>GAET also runs Thane Police School, a school dedicated to educating the children of men and women in Police Force. It is a unique initiative taken by GAET and Thane's Police Commissionerate.</p> */}
                                        <p>
                                            <strong
                                                dangerouslySetInnerHTML={{
                                                    __html: founder.description
                                                }}
                                            />
                                        </p>
                                    </ScrollAnimation>
                                </div>
                            </div>
                        ))}
                        {/* <div className='founder-block'>
                            <div className='photo-area'>
                                <img src={process.env.PUBLIC_URL + "/images/usha-khandwala.jpg"} alt="" />
                            </div>
                            <div className='content-block'>
                                <div className='arrow'>
                                    <div className='top'></div>
                                    <div className='bottom'></div>
                                </div>
                                <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={300}>
                                    <h2>LATE MRS USHA KHANDWALA</h2>
                                    <div className='position'>Founder - Managing Trustee<br />GAET</div>
                                </ScrollAnimation>
                                <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={500}>
                                    <p>Late Mrs Usha Khandwala played a major role in the establishment of Goenka & Associates Educational Trust in 1981.</p>
                                    <p>With her exceptional experience in teaching and management, she played a key role as a Managing Trustee so efficiently that her work is remembered even today.</p>
                                </ScrollAnimation>
                            </div>
                        </div> */}
                    </div>
                </section>

                <ApplyEnrolBlock />
            </div>
            <Footer />
        </>
    );
}
export default AboutOurFoundersPage;