import React from 'react';
import { Link } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';
import './AssociationsPhotoBlock.css';  

function AssociationsPhotoBlock() {
    return (
        <>
            <div className='social-initiatives-area'>
                <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={200}>
                    <h2>Our <span>Social Initiatives</span></h2>
                </ScrollAnimation>
                <div className='d-flex'>
                    <div className='half-block'>
                        <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={400}>
                            <div className='photo-block'>
                                <img src={process.env.PUBLIC_URL + "/images/research-centre.png"} alt="" />
                                <div className='bottom-content'>
                                    <h3>Goenka & Associates Medical & Research Centre </h3>
                                    <Link to="#" className='btn-more'>Learn More</Link>
                                </div>
                            </div>
                        </ScrollAnimation>
                    </div>
                    {/* <div className='half-block'>
                        <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={600}>
                            <div className='photo-block yellow'>
                                <img src={process.env.PUBLIC_URL + "/images/welfare-trust.png"} alt="" />
                                <div className='bottom-content'>
                                    <h3>Goenka & Associates Social Welfare Trust </h3>
                                    <Link to="#" className='btn-more'>Learn More</Link>
                                </div>
                            </div>
                        </ScrollAnimation>
                    </div> */}
                </div>
            </div>
        </>
    );
}
export default AssociationsPhotoBlock;