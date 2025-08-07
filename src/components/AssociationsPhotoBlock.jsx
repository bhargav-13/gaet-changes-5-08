import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';
import './AssociationsPhotoBlock.css';
import { useApi } from '../hooks/useApi';
import { endpoints } from '../services/api';
import Loader from '../components/Loader';

function AssociationsPhotoBlock() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { data, error, loading } = useApi(endpoints.journey);

    if (error) return <div className="error-message">Error: {error.message}</div>;
    if (!data) return null;
    if (loading) return <div><Loader /></div>;

    return (
        <>
            <div className='social-initiatives-area'>
                <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={200}>
                    <h2>Our <span>Social Initiatives</span></h2>
                </ScrollAnimation>
                <div className='d-flex flex-column flex-lg-row'>
                    {data.social_section.map((social, index) => (
                        <div className='half-block' key={index}>
                            <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={400}>
                                <div className={index % 2 === 0 ? 'photo-block' : 'photo-block yellow'}>
                                    <img src={social.image} alt="" />
                                    <div className='bottom-content'>
                                        <h3><span dangerouslySetInnerHTML={{ __html: social.title || 'title' }} /></h3>

                                        <Link to={social.link} className='btn-more'>Know More</Link>
                                    </div>
                                </div>
                            </ScrollAnimation>
                        </div>
                    ))}

                </div>
            </div>
        </>
    );
}
export default AssociationsPhotoBlock;