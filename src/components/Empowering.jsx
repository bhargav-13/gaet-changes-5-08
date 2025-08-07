import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";
import { fetchData } from "./Api";
import "./Empowering.css";

function Empowering() {

    const [aboutUsData, setAboutUsData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getAboutUsData = async () => {
            try {
                const response = await fetchData();
                if (response && response.data && response.data.about_us_list && response.data.about_us_list.length > 0) {
                    setAboutUsData(response.data.about_us_list[0]);
                } else {
                    console.error("about_us_list is missing or empty");
                }
            } catch (error) {
                setError(error.message);
                console.error("Error fetching About Us data:", error);
            }
        };

        getAboutUsData();
    }, []);

    if (error) return <div>Error: {error}</div>;

    if (!aboutUsData) return null;

    return (
        <>
            <div className='empowering-section'>
                <div className='content-block'>
                    <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
                        <div dangerouslySetInnerHTML={{ __html: aboutUsData.title }} />
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={2}>
                        <Link to={aboutUsData.link} className='btn-more'>About Us</Link>
                    </ScrollAnimation>

                </div>
                <ul className='box-layout'>
                    <li className='line-1'>
                        <div className='block-1 '><img src={aboutUsData.image_one || process.env.PUBLIC_URL + "/images/Mask group.png"} alt="logo" /></div>
                        <div className='block-2 blue' style={{ backgroundColor: '#79519F' }}></div>
                    </li>
                    <li className='line-2'>
                        <div className='block-1'><img src={aboutUsData.image_one || process.env.PUBLIC_URL + "/images/Mask group (1).png"} alt="logo" /></div>
                        <div className='block-2 blue' style={{ backgroundColor: '#189090' }}></div>
                    </li>
                    <li className='line-3'>
                        <div className='block-1'><img src={aboutUsData.image_one || process.env.PUBLIC_URL + "/images/Mask group (2).png"} alt="logo" /></div>
                    </li>
                    <li className='line-4'>
                        <div className='block-1'><img src={aboutUsData.image_one || process.env.PUBLIC_URL + "/images/Mask group (3).png"} alt="logo" /></div>
                    </li>
                    <li className='line-5'>
                        <div className='block-1'><img src={aboutUsData.image_one || process.env.PUBLIC_URL + "/images/Mask group (4).png"} alt="logo" /></div>
                        <div className='block-2 blue' style={{ backgroundColor: '#cc6728' }}></div>
                    </li>
                    <li className='line-6'>
                        <div className='block-1 '><img src={aboutUsData.image_one || process.env.PUBLIC_URL + "/images/Mask group (5).png"} alt="logo" /></div>
                        <div className='block-2 blue' style={{ backgroundColor: '#69934A' }}></div>
                    </li>
                </ul>
            </div>
        </>
    );
}
export default Empowering;