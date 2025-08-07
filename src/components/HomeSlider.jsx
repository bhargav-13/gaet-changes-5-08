import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import "./HomeSlider.css";
import { fetchData } from "./Api.jsx";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Loader from "./Loader.jsx";

function HomeSlider() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetchData();
        setData(response.data.slider_list);
      } catch (error) {
        setError(error.message);
      }
    };

    getData();
  }, []);

  if (error) return <div>Error: {error}</div>;

  return (
    <div className="top-slider-area">
      {data.length > 0 ? (
        <Swiper
          navigation={true}
          pagination={true}
          loop={true}
          modules={[Navigation, Pagination, Autoplay]}
          className="mySwiper"
        // autoplay={{ delay: 5500, disableOnInteraction: false }}
        >
          {data.map((slider) => (
            <SwiperSlide
              key={slider.id}
              style={{
                width: "100%",
                height: "900px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
              }}
            >
              <img
                src={slider.image}
                alt={slider.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover", // Ensure image covers the container properly
                  position: "absolute",
                  top: 0,
                  left: 0
                }}
              />
              <div className="bottom-overlay"></div>
              <div className="content-area">
                <Container>
                  <h1>
                    <span dangerouslySetInnerHTML={{ __html: slider.title }} />
                  </h1>
                  <p>
                    <span
                      dangerouslySetInnerHTML={{ __html: slider.description }}
                    />
                  </p>
                  <p>
                    <Link to={slider.link || "/"} className="btn-more">
                      {slider.button_title || "Know More"}
                    </Link>
                  </p>
                </Container>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div><Loader /></div>
      )}
    </div>
  );
}

export default HomeSlider;