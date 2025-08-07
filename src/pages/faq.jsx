import React, { useEffect, useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import ApplyEnrolBlock from '../components/ApplyEnrolBlock';
import './Faq.css';
import { useApi } from '../hooks/useApi';
import { endpoints } from '../services/api';
import Loader from '../components/Loader';
import { Helmet } from "react-helmet-async";
import Footer from '../include/Footer';

function FaqPage() {

    const { data, error, loading } = useApi(endpoints.faq);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [openKeys, setOpenKeys] = useState([0]); // No panel is forced open

    const handleSelect = (selectedKey) => {
       setOpenKeys((prev) => prev.includes(selectedKey) ? prev.filter((key) => key !== selectedKey) : [...prev, selectedKey]);
    };


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
                <h1>Frequently Asked<br />Questions</h1>
                <div className='rays'><img src={process.env.PUBLIC_URL + "/images/footer-rays.svg"} alt="ray" /></div>
            </div>

            <div className='faq-page'>
                <Accordion activeKey={openKeys} onSelect={handleSelect}>
                    {data.faq?.slice().reverse().map((faq, index) => (
                        <Accordion.Item eventKey={index.toString()} key={index}>
                            <Accordion.Header>{faq.title}</Accordion.Header>
                            <Accordion.Body>
                                <div className='inner-block'>
                                    <p
                                        dangerouslySetInnerHTML={{
                                            __html: faq.description
                                        }}
                                    />
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    ))}
                </Accordion> 

            </div>
            <ApplyEnrolBlock />
            <Footer />
        </>
    );
}
export default FaqPage;