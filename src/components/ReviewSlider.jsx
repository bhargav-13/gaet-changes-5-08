import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import ScrollAnimation from 'react-animate-on-scroll';
// import required modules
import { Pagination } from 'swiper/modules';
import { Autoplay } from "swiper/modules";
import './ReviewSlider.css';
import { fetchData } from './Api';

function ReviewSlider() {

    const [review, setReview] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadSchoolData = async () => {
            try {
                const result = await fetchData();
                setReview(result.data.testimonial_list);
                setLoading(false);
            } catch (err) {
                console.error("Error fetching data:", err);
                setError(err.message || "Something went wrong");
                setLoading(false);
            }
        };

        loadSchoolData();
    }, []);



    if (error) return <div>Error: {error}</div>;

    // Ensure that testimonial_list is available
    const testimonials = review || [];

    return (
        <>
            <div className='review-slider-section'>
                <Container>
                    <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={0.5}>
                        <h2>What they say?</h2>
                    </ScrollAnimation>
                </Container>
                {testimonials.length > 0 ? (
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    centeredSlides={true}
                    loop={true}
                    autoplay={{ delay: 6000, disableOnInteraction: false, }}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        1024: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                    }}
                    modules={[Pagination,]}
                    className="mySwiper"
                >

                    {testimonials.length > 0 &&
                        testimonials.map((testimonial) => (
                            <SwiperSlide key={testimonial.id}>
                                <div className="review-block">
                                    <div className="msg-block">
                                        <p>{testimonial.description}</p>
                                        <div className="name">
                                            {testimonial.name} <span>{testimonial.designation}</span>
                                        </div>
                                    </div>
                                    <div className="shape-row">
                                        <div className="shape-box" style={{ background: `${testimonial.color}` }}></div>
                                        <div className="shape-box" style={{ background: `${testimonial.color}` }}></div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }


                </Swiper>
                ) : (
                    <div>No reviews to show.</div>
                )}
            </div>
        </>
    );
}
export default ReviewSlider;