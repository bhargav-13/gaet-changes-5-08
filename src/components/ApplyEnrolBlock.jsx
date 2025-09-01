import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';
import './ApplyEnrol.css';
import { useApi } from '../hooks/useApi';
import { endpoints } from '../services/api';
import Loader from '../components/Loader';
import enrolTo from '../assets/applyToEnrol.png';

function ApplyEnrolBlock() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { data, error, loading } = useApi(endpoints.about);


    if (error) return <div className="error-message">Error: {error.message}</div>;
    if (!data) return null;
    if (loading) return <div><Loader /></div>;
    return (
        <>
            <section>
                <div className='apply-enrol-area'>
                    <div className='content-block'>
                        <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={500}>
                            <h2>Apply to<br />
                                <span dangerouslySetInnerHTML={{ __html: data.enrol_section?.title || 'title' }} />
                            </h2>
                            <p><span dangerouslySetInnerHTML={{ __html: data.enrol_section?.description || 'description' }} /></p>
                            <Link to={data.enrol_section.link} className='apply-btn'>APPLY</Link>

                        </ScrollAnimation>
                    </div>
                    <div className='enrol-img'>
                        <ScrollAnimation animateIn="fadeInRight" animateOnce={true} delay={500}>
                            <img src={enrolTo} alt="vision" />
                        </ScrollAnimation>
                    </div>

                    <ul className='bg-view'>
                        <li className='line1'>

                            <div className='box1'><img src={data.enrol_section.image_one} className='bg' alt="vision" /></div>

                        </li>
                        <li className='line2'>
                            <div className='box1'></div>
                            <div className="box1"
                                style={{
                                    background: "transparent",
                                    transition: "all 0.5s ease",
                                    WebkitTransition: "all 0.5s ease",
                                    MozTransition: "all 0.5s ease",
                                }}
                                onMouseEnter={(e) => (e.target.style.background = data.enrol_section.color_one)}
                                onMouseLeave={(e) => (e.target.style.background = "transparent")}
                            ></div>

                            <div className='box2'><img src={data.enrol_section.image_two} className='bg' alt="vision" /></div>
                        </li>
                        <li className='line3'>
                            <div className='box1'><img src={data.enrol_section.image_three} className='bg' alt="vision" /></div>
                        </li>
                        <li className='line4'>
                            <div className='box1'></div>
                            <div className="box1"
                                style={{
                                    background: "transparent",
                                    transition: "all 0.5s ease",
                                    WebkitTransition: "all 0.5s ease",
                                    MozTransition: "all 0.5s ease",
                                }}
                                onMouseEnter={(e) => (e.target.style.background = data.enrol_section.color_two)}
                                onMouseLeave={(e) => (e.target.style.background = "transparent")}
                            ></div>
                            <div className='box2'><img src={data.enrol_section.image_four} className='bg' alt="vision" /></div>
                        </li>
                        <li className='line5'>
                            <div className='box1'></div>
                            <div className='box2'></div>
                            {/* <div className='box3'></div> */}
                        </li>
                        <li className='line6'>
                            <div className='box1'></div>
                            <div className='box2'></div>
                        </li>
                        <li className='line7'>
                            <div className='box1'></div>
                            <div className="box1"
                                style={{
                                    background: "transparent",
                                    transition: "all 0.5s ease",
                                    WebkitTransition: "all 0.5s ease",
                                    MozTransition: "all 0.5s ease",
                                }}
                                onMouseEnter={(e) => (e.target.style.background = data.enrol_section.color_three)}
                                onMouseLeave={(e) => (e.target.style.background = "transparent")}
                            ></div>
                            <div className='box2'><img src={data.enrol_section.image_five} className='bg' alt="vision" /></div>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    );
}
export default ApplyEnrolBlock;