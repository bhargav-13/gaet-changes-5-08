import React from "react";
import "./ProjectUnderWay.css";
import { useApi } from "../hooks/useApi";
import { endpoints } from "../services/api";
import Loader from "../components/Loader";

// Swiper Imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const ProjectUnderWay = () => {
  const { data, error, loading } = useApi(endpoints.journey);

  if (error) return <div className="error-message">Error: {error.message}</div>;
  if (!data) return null;
  if (loading)
    return (
      <div>
        <Loader />
      </div>
    );

  return (
    <section>
      <div className="project-underway">
        <div className="left-panel d-flex justify-content-space-between">
          <div className="w-50 left-heading">
            <h1>
              Projects <span className="break">Underway</span>
            </h1>
          </div>
          <div className="w-50 left-content">
            <p
              dangerouslySetInnerHTML={{
                __html: data.projects_underway_description || "description",
              }}
            />
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="right-panel desktop-grid">
          {data.projects_underway.map((underway, index) => (
            <div className="project-card" key={index}>
              <img
                src={
                  underway.image ||
                  process.env.PUBLIC_URL + "/images/DSC08444 1.png"
                }
                alt={underway.title}
              />
              <h2>{underway.title}</h2>
            </div>
          ))}
        </div>

        {/* Mobile/Tablet Carousel */}
        <div className="right-panel mobile-carousel">
          <Swiper
            spaceBetween={20}
            slidesPerView={1.2}
            pagination={{ clickable: false }}
            navigation={true}
            modules={[Pagination, Navigation]}
            breakpoints={{
              640: { slidesPerView: 1.2 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {data.projects_underway.map((underway, index) => (
              <SwiperSlide key={index}>
                <div className="project-card">
                  <img
                    src={
                      underway.image ||
                      process.env.PUBLIC_URL + "/images/DSC08444 1.png"
                    }
                    alt={underway.title}
                  />
                  <h2>{underway.title}</h2>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ProjectUnderWay;
