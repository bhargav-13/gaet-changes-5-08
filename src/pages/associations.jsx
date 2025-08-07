import React, { useEffect, useState } from 'react';
import ApplyEnrolBlock from '../components/ApplyEnrolBlock';
import AssociationsPhotoBlock from '../components/AssociationsPhotoBlock';
import './Associations.css';
import { endpoints } from '../services/api';
import Loader from '../components/Loader';
import { useApi } from '../hooks/useApi';
import ScrollAnimation from 'react-animate-on-scroll';

import { Helmet } from "react-helmet-async";
import Footer from '../include/Footer';

function AssociationsPage() {

    const { data, error, loading } = useApi(endpoints.association);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (loading) return <div><Loader /></div>;
    if (error) return <div>Error: {error.message}</div>;
    if (!data) return null;

    return (
        <>
            <Helmet>
                {/* <title>{data?.seo?.meta_title || "GAET"}</title> */}
                <meta name="description" content={data?.seo?.meta_description || "GAET"} />
                <meta name="keywords" content={data?.seo?.meta_keywords || "GAET"} />
            </Helmet>

            {/* <div className='associations-top-banner'>
                <img src={process.env.PUBLIC_URL + "/images/associations-top-banner.jpg"} alt="" />
                <h1>Helping The Community Grow</h1>
            </div> */}
            <div className='associations-top-banner'>
                <img src={data?.top_section?.back_image || 'https://gaet.trialview.in/uploads/header_section_image/12_633_1738131967.jpg'} alt="" />
                <div className="content-part">
                    <h1>{data?.top_section?.title || 'Helping The Community Grow'}</h1>
                </div>
            </div>

            <AssociationsPhotoBlock />
            <ApplyEnrolBlock />
            <Footer />
        </>
    );
}
export default AssociationsPage;