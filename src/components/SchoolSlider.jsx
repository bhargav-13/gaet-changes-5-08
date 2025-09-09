import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';
import { Swiper, SwiperSlide } from 'swiper/react';
import './SchoolSlider.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

// import required modules
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { fetchData } from './Api';

function SchoolSlider() {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadSchoolData = async () => {
            try {
                const result = await fetchData();
                setData(result.data);
            } catch (err) {
                setError(err.message || "Something went wrong");
            }
        };

        loadSchoolData();
    }, []);

    if (error) return <div>Error: {error}</div>;

    return (
        <>
            <div className='school-slider-section'>

                <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
                    <Container>
                        <h2>Our Schools</h2>
                        <Link to="/our-school" className='btn-more'>Visit Schools</Link>
                    </Container>
                </ScrollAnimation>

                <Swiper navigation={true} loop={true} pagination={{ clickable: true, }} effect={'fade'} modules={[Navigation, Pagination, Autoplay, EffectFade]} className="mySwiper" autoplay={{ delay: 6000, disableOnInteraction: false, }}>
                    {data?.school_list?.map((school) => (
                        <SwiperSlide key={school.id}>
                            <div className='school-block'>
                                <div className='leftbg'
                                    style={{
                                        background: `linear-gradient(to top left, ${school.light_color} 0%, ${school.dark_color} 100%)`,
                                    }}>
                                </div>
                                <div className='rays'><img src={process.env.PUBLIC_URL + "/images/ray.png"} alt="ray" /></div>
                                <div className='content-area'>
                                    <h3>{school.name}</h3>
                                    <div className='bottombar'>
                                        <p>{school.address}</p>
                                        <div className='info'>Students: {school.student_count} | Staff: {school.staff_count}</div>
                                        <Link to={school.link} target="_blank" className='btn-visit'>Visit</Link>
                                    </div>
                                </div>
                                <div className='school-photo'>
                                    <img src={school.image}
                                        alt={school.name} />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
}
export default SchoolSlider;