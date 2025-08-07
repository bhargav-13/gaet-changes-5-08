

import React, { useEffect, useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import ApplyEnrolBlock from '../components/ApplyEnrolBlock';
import './Faq.css';
import { useApi } from '../hooks/useApi';
import { endpoints } from '../services/api';
import Loader from '../components/Loader';
import { Helmet } from "react-helmet-async";
import Footer from '../include/Footer';


function GonekaAssociates() {

    const { data, error, loading } = useApi(endpoints.faq);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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

            <div className='top-title-bar'>
                <h1>Our<br />Social Initiatives</h1>
                <div className='rays'><img src={process.env.PUBLIC_URL + "/images/footer-rays.svg"} alt="ray" /></div>
            </div>

            <div className='faq-page'>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey='0'>
                        <Accordion.Header>
                            Goenka & Associates Medical & Research Centre</Accordion.Header>
                        <Accordion.Body>
                            <div className='inner-block'>
                                <p>
                                    Goenka & Associates Medical & Research Centre also called as Gokuldham Medical Centre established in 1994 is one of the best diagnostic centres in the whole of the suburbs.<br /><br />
                                    Situated in Gokuldham, Goregaon(E), Mumbai
                                    The centre has been consistent towards its commitment to excellence and innovation.<br /><br />
                                    Provides Comprehensive primary health care to the community.<br /><br />
                                    The centre has the latest medical equipments and adheres to various stringent internal and external quality control mechanisms.<br /><br />
                                    Costs of tests are most reasonable, not compromising on cleanliness and hygiene.<br /><br />
                                    Patients are handled with care and courtesy.<br /><br />
                                    Contact :<br />
                                    022 2842 2716, 022 2842 2738, 022 2841 0408</p>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey='1'>
                        <Accordion.Header>
                            Goenka & Associates Social Welfare Trust</Accordion.Header>
                        <Accordion.Body>
                            <div className='inner-block'>
                                <p>
                                    Established for promoting, establishing, maintaining or assisting social & cultural activities and health & welfare of the community.<br /><br />
                                    Under this Trust, 'Krishna Vatika Devasthan' was set-up in Goregoan East so that people dedicate more time to spiritual happiness and find inner peace.<br /><br />
                                    This Temple complex in Gokuldham provides ample area for people to gather, pray, meditate, and attend discourses and functions.</p>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
            <ApplyEnrolBlock />
            <Footer />
        </>
    );
}
export default GonekaAssociates;