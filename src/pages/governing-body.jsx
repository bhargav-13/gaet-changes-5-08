import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import ScrollAnimation from 'react-animate-on-scroll';
import { useApi } from '../hooks/useApi';
import { endpoints } from '../services/api';
import Loader from '../components/Loader';
import InsideTopBanner from '../include/InsideTopBanner';
import InsideMobileBlock from '../include/MobileInsideTopBanner';
import './GoverningBody.css';
import { Helmet } from "react-helmet-async";
import Footer from '../include/Footer';


function GoverningBodyPage() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { data, error, loading } = useApi(endpoints.governingBody);
    const [isAboutVisible, setAboutVisible] = useState(false);
    const [selectedMember, setSelectedMember] = useState(null);

    // Add or remove class on the body tag
    useEffect(() => {
        if (isAboutVisible) {
            document.body.classList.add('about-open');
        } else {
            document.body.classList.remove('about-open');
        }

        // Cleanup function to remove class when component unmounts
        return () => {
            document.body.classList.remove('about-open');
        };
    }, [isAboutVisible]);

    const handleMoreAboutClick = (member) => {
        setSelectedMember(member);
        setAboutVisible(true);
    };

    const handleCloseAboutClick = () => {
        setAboutVisible(false);
        setSelectedMember(null);
    };

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
                    <Breadcrumb.Item active>Governing Body</Breadcrumb.Item>
                </Breadcrumb>
            </div>

            <div className='inner-content-wapper'>

                <section>
                    <div className='chairperson-area'>
                        <Container>
                            <div className='inner-flex'>
                                <h2>
                                    <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={200}>
                                        Chairperson Of GAET
                                    </ScrollAnimation>
                                </h2>
                                <div className='rightside'>
                                    <div className='photo-area d-none'>
                                        <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={400}>
                                            <img src={data.chair_person.image} alt={data.chair_person.name} />
                                            <div className='gray-bg'>
                                                <div className='rays'>
                                                    <img src="/images/footer-rays.svg" alt="ray" />
                                                </div>
                                            </div>
                                        </ScrollAnimation>
                                    </div>
                                    <div className='content-part'>
                                        <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={500}>
                                            <h3>{data.chair_person.name}</h3>
                                            <p dangerouslySetInnerHTML={{
                                                __html: data.chair_person.about_team_member
                                            }} />
                                        </ScrollAnimation>
                                    </div>
                                </div>
                            </div>
                        </Container>
                    </div>
                </section>

                <section>
                    <div className='board-area board-members-area'>
                        <Container>
                            <div className='inner-flex'>
                                <h2>
                                    <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={500}>
                                        Board Members
                                    </ScrollAnimation>
                                </h2>
                                <div className='rightside'>
                                    <ul className='member-list-three'>
                                        {data.board_member.map((member, index) => (
                                            <li key={index}>
                                                <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={700}>
                                                    <div className='photo-area d-none'>
                                                        <img src={member.image} alt={member.name} />
                                                        <div className='gray-bg'>
                                                            <div className='rays'>
                                                                <img src="/images/ray.png" alt="ray" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h3>{member.name}</h3>
                                                    <Link
                                                        to=""
                                                        className='more-position'
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            handleMoreAboutClick(member);
                                                        }}
                                                    >
                                                        {member.position_name}
                                                    </Link>
                                                    <Link
                                                        to=""
                                                        className='more-about'
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            handleMoreAboutClick(member);
                                                        }}
                                                    >
                                                        About
                                                    </Link>
                                                </ScrollAnimation>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </Container>
                    </div>
                </section>

                <section>
                    <div className='board-area'>
                        <Container>
                            <div className='inner-flex'>
                                <h2>
                                    <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={500}>
                                        Management Team Operating Schools And Junior College
                                    </ScrollAnimation>
                                </h2>
                                <div className='rightside'>
                                    <ul className='member-list-four'>
                                        {data.management_team.map((member, index) => (
                                            <li key={index}>
                                                <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={700}>
                                                    <div className='photo-area d-none'>
                                                        <img src={member.image} alt={member.name} />
                                                        <div className='gray-bg'>
                                                            <div className='rays'>
                                                                <img src="/images/ray.png" alt="ray" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h3>{member.name}</h3>
                                                    {/* <p>{member.about_team_member}</p> */}
                                                    <Link
                                                        to=""
                                                        className='more-about'
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            handleMoreAboutClick(member);
                                                        }}
                                                    >
                                                        About
                                                    </Link>
                                                </ScrollAnimation>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </Container>
                    </div>
                </section>

                <div className={`about-detail-area ${isAboutVisible ? "open" : ""}`}>
                    {selectedMember && (
                        <div className='inside-area'>
                            <div className='titlebar'>
                                <h4>BIOGRAPHY</h4>
                                <Link to="" className='close-about' onClick={handleCloseAboutClick}>
                                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.00855 1.3327L19.3867 19.7113M19.3867 1.33008L1.00854 19.7087" stroke="#09213A" />
                                    </svg>
                                </Link>
                            </div>
                            <div className='d-flex'>
                                <div className='leftside'>
                                    <div className='name'>{selectedMember.name}</div>
                                    {/* <div className='position'>{selectedMember.position || 'Board Member'}</div> */}
                                    <div dangerouslySetInnerHTML={{ __html: selectedMember.about_team_member }} />
                                </div>
                                <div className='photo-area d-none'>
                                    <img src={selectedMember.image} alt={selectedMember.name} />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default GoverningBodyPage;