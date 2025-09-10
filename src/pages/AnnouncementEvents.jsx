import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import './AnnouncementEvents.css';

import rowOneImageOne from '../assets/GHS 3.png';
import rowOneImageTwo from '../assets/Mask group.png';
import rowOneImageThree from '../assets/Mask group (1).png';
import rowTwoImageOne from '../assets/Mask group (2).png';
import rowTwoImageTwo from '../assets/Mask group (3).png';
import rowTwoImageThree from '../assets/Mask group (4).png';
import rowThreeImageOne from '../assets/Mask group (5).png';
import events from '../assets/events line.png';

const images = [
    rowOneImageOne,
    rowOneImageTwo,
    rowOneImageThree,
    rowTwoImageOne,
    rowTwoImageTwo,
    rowTwoImageThree,
    rowThreeImageOne,
];

const contentData = [
    { subtitle: "Rakhi making competition", description: "Lorem rakhi ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque iaculis metus massa, at aliquam dui gravida eget. Mauris a nisi a nibh posuere vestibulum quis ut lectus. Morbi vel libero molestie, dignissim justo eget, tempor erat. Nullam tincidunt, enim quis dignissim hendrerit." },
    { subtitle: "Annual Inter-school Sports", description: "Lorem sports ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque iaculis metus massa, at aliquam dui gravida eget. Mauris a nisi a nibh posuere vestibulum quis ut lectus. Morbi vel libero molestie, dignissim justo eget, tempor erat. Nullam tincidunt, enim quis dignissim hendrerit." },
    { subtitle: "Innovations & Discoveries", description: "Lorem creativity ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque iaculis metus massa, at aliquam dui gravida eget. Mauris a nisi a nibh posuere vestibulum quis ut lectus. Morbi vel libero molestie, dignissim justo eget, tempor erat. Nullam tincidunt, enim quis dignissim hendrerit." },
    { subtitle: "Colors of Creativity", description: "Lorem colors ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque iaculis metus massa, at aliquam dui gravida eget. Mauris a nisi a nibh posuere vestibulum quis ut lectus. Morbi vel libero molestie, dignissim justo eget, tempor erat. Nullam tincidunt, enim quis dignissim hendrerit.Lorem colors ipsum dolor sit amet, consectetur adipiscing elit..." },
    { subtitle: "Harmony & Melodies", description: "Lorem harmony ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque iaculis metus massa, at aliquam dui gravida eget. Mauris a nisi a nibh posuere vestibulum quis ut lectus. Morbi vel libero molestie, dignissim justo eget, tempor erat. Nullam tincidunt, enim quis dignissim hendrerit." },
    { subtitle: "Voices of the Youth", description: "Lorem voices ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque iaculis metus massa, at aliquam dui gravida eget. Mauris a nisi a nibh posuere vestibulum quis ut lectus. Morbi vel libero molestie, dignissim justo eget, tempor erat. Nullam tincidunt, enim quis dignissim hendrerit." },
    { subtitle: "Farewell Batch of 2025", description: "Lorem farewell ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque iaculis metus massa, at aliquam dui gravida eget. Mauris a nisi a nibh posuere vestibulum quis ut lectus. Morbi vel libero molestie, dignissim justo eget, tempor erat. Nullam tincidunt, enim quis dignissim hendrerit." }
];

function AnnouncementEvents() {
    const [activeIndex, setActiveIndex] = useState(0);

    // Refs for custom navigation buttons
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <section className='events-section'>
            <div className="row">
                <div className="container d-flex flex-wrap align-items-start">
                    {/* Left Content */}
                    <div className="col-12 col-md-4 left-content pt-md-4">
                        <div className="content">
                            <div className='content-area'>
                                <h3 className='announcements-events'>Announcements & Events</h3>
                            </div>
                            <h3 className="subtitle">{contentData[activeIndex].subtitle}</h3>
                            <p className="description">{contentData[activeIndex].description}</p>

                            {/* Custom Arrow Buttons */}
                            <div className="custom-nav">
                                <button ref={prevRef} className="custom-prev pe-0 px-0">
                                    <FontAwesomeIcon icon={faAngleLeft} />
                                </button>
                                <button ref={nextRef} className="custom-next">
                                    <FontAwesomeIcon icon={faAngleRight} />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="d-none d-md-block col-md-1 text-center divider pt-3">
                        <img src={events} alt="Events Divider" />
                    </div>

                    {/* Slider */}
                    <div className="col-12 col-md-7 images pt-md-4 pb-md-4">
                        <div className="slider">
                            <Swiper
                                modules={[Navigation, Autoplay, EffectFade]}
                                spaceBetween={20}
                                slidesPerView={1}
                                onBeforeInit={(swiper) => {
                                    swiper.params.navigation.prevEl = prevRef.current;
                                    swiper.params.navigation.nextEl = nextRef.current;
                                }}
                                navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
                                autoplay={{ delay: 3000 }}
                                effect="fade"
                                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                            >
                                {images.map((src, index) => (
                                    <SwiperSlide key={index}>
                                        <img src={src} alt={`Slide ${index + 1}`} className="slide-image" />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default AnnouncementEvents;
