import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import './AdvSchoolSlider.css';

// Import Images:
import rowOneImageOne from '../assets/GHS 3.png';
import rowOneImageTwo from '../assets/Mask group.png';
import rowOneImageThree from '../assets/Mask group (1).png';
import rowTwoImageOne from '../assets/Mask group (2).png';
import rowTwoImageTwo from '../assets/Mask group (3).png';
import rowTwoImageThree from '../assets/Mask group (4).png';
import rowThreeImageOne from '../assets/Mask group (5).png';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

// import required modules
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { fetchData } from '../components/Api';

function AdvSchoolSlider() {

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
            {/* New Template: School Section*/}
            <div className="school-section mb-3 mt-5">
                <div className="container-fluid">
                    {/* First Row */}
                    <div className="row g-2 mb-2 pt-5">
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="school-image-wrapper">
                                <img src={rowOneImageOne} alt="School1" className="img-fluid w-100" />
                                <div className="school-overlay-one school-overlay">
                                    <h3>Gokuldham High School & Junior College
                                        <span className="school-type">(ICSE & ICS)</span>
                                    </h3>

                                    <div className="school-info">
                                        <p>Situated in Goregaon (E)</p>
                                        <p>Estd. 1983</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="school-image-wrapper">
                                <img src={rowOneImageTwo} alt="School2" className="img-fluid w-100" />
                                <div className="school-overlay-two school-overlay">
                                    <h3>Yashodham High School & Junior
                                        <span className="school-type">(ICSE & ICS)</span>
                                    </h3>
                                    <div className="school-info">
                                        <p>Situated in Goregaon (E)</p>
                                        <p>Estd. 1987</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                            <div className="school-image-wrapper">
                                <img src={rowOneImageThree} alt="School3" className="img-fluid w-100" />
                                <div className="school-overlay-three school-overlay">
                                    <h3>Vasant Vihar High School & Junior College
                                        <span className="school-type">(ICSE & ICS)</span>
                                    </h3>
                                    <div className="school-info">
                                        <p>Situated in Thane (W)</p>
                                        <p>Estd. 1990</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Second Row */}
                    <div className="row g-2 mb-2">
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="school-image-wrapper">
                                <img src={rowTwoImageOne} alt="School4" className="img-fluid w-100" />
                                <div className="school-overlay-four school-overlay">
                                    <h3>Thane Police School</h3>
                                    <div className="school-info">
                                        <p>Situated in Thane (W)</p>
                                        <p>Estd. 2006</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="school-image-wrapper">
                                <img src={rowTwoImageTwo} alt="School5" className="img-fluid w-100" />
                                <div className="school-overlay-five school-overlay">
                                    <h3>GAET Counselling Center</h3>
                                    <div className="school-info">
                                        <p>Situated in Goregaon & Thane</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                            <div className="school-image-wrapper">
                                <img src={rowTwoImageThree} alt="School5" className="img-fluid w-100" />
                                <div className="school-overlay-six school-overlay">
                                    <h3>Lakshdham High School</h3>
                                    <div className="school-info">
                                        <p>Situated in Goregaon(E)</p>
                                        <p>Estd. 2008</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Row-3 */}
                    <div className="row g-2 mb-3 pb-5">
                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                            <div className="school-image-wrapper school-overlay">
                                <img src={rowThreeImageOne} alt="School7" className="img-fluid w-100" />
                                <div className="school-overlay-seven">
                                    <h3>GAET International School Aldeia</h3>
                                    <div className="school-info">
                                        <p>Situated in Bambolin, Goa</p>
                                        <p>Estd. 2025</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Education with pupose section */}
            <section>
                <div className='school-slider-sections'>
                    {data?.school_list ? (
                        <Swiper navigation={true} loop={true} pagination={{ clickable: true, }} effect={'fade'} modules={[Navigation, Pagination, Autoplay, EffectFade]} className="mySwiper" autoplay={{ delay: 5500, disableOnInteraction: false, }}>
                            {data?.school_list?.map((school) => (
                                <SwiperSlide key={school.id}>
                                    <div className='school-block container'>
                                        <div className='content-area'>
                                            <h3>Educating with Purpose, Evolving Over Four Decades</h3>
                                            <div className='bottombar'>
                                                <div className='info'>Students: {school.student_count} | Staff: {school.staff_count}</div>
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
                    ) : (
                        <div>Loading...</div>
                    )}
                </div>
            </section>
        </>
    );
}
export default AdvSchoolSlider;