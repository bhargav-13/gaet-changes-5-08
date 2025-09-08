import React, { useState } from "react";
import "./LegacySpanning.css";

// Images:
import imageOne from "../assets/1981.png";
import imageTwo from "../assets/GHS 3.png";
import imageThree from "../assets/Mask group.png";
import imageFour from "../assets/Mask group (1).png";
import imageFive from "../assets/Mask group (2).png";
import imageSix from "../assets/Mask group (3).png";
import imageSeven from "../assets/Mask group (4).png";


const carouselData = [
  {
    id: 1,
    image: imageOne,
    title: "",
    description:
      "GAET has established the following schools & Institutions located in the buildings constructed from the corpus of the Trust raised by donations received from philanthropic organizations and corporate bodies.",
  },
  {
    id: 2,
    image:imageTwo,
    title: "Goenka & Associates Educational Trust",
    description:"GAET has established the following schools & Institutions located in the buildings constructed from the corpus of",
  },
  {
    id: 3,
    image:imageThree,
    title: "Excellence in Academic Achievement",
    description:
      "Committed to fostering academic excellence and personal growth through innovative teaching methodologies and comprehensive curriculum",
  },
  {
    id: 4,
    image: imageFour,
    title: "Community Impact & Growth",
    description:
      "Building stronger communities through education and creating lasting impact on society through quality educational services",
  },
  {
    id: 5,
    image:imageFive,
    title: "Community Impact & Growth",
    description:
      "Building stronger communities through education and creating lasting impact on society through quality educational services",
  },
  {
    id: 6,
    image: imageSix,
    title: "Community Impact & Growth",
    description:
      "Building stronger communities through education and creating lasting impact on society through quality educational services",
  },
  {
    id: 7,
    image:imageSeven,
    title: "Community Impact & Growth",
    description:
      "Building stronger communities through education and creating lasting impact on society through quality educational services",
  },
  {
    id: 7,
    image:imageSeven,
    title: "CTest",
    description:
      "Test",
  }
];

const timelineYears = ["1981", "1983", "1987", "1990", "2006", "2007", "2008", "2025"];

export default function LegacySpanning() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselData.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + carouselData.length) % carouselData.length
    );
  };

  return (
    <div className="legacy-container">
      <div className="legacy-content">
        <div className="row">
          <div className="col-6">
            <div className="text-section">
              <h1 className="legacy-spanning-main-title">
                <span className="line">A Legacy Spanning</span>
                <span className="line"> Over Years</span>
              </h1>

              <div className="carousel-content">
                <h2 className="carousel-title">
                  {carouselData[currentSlide].title}
                </h2>
                <p className="carousel-description">
                  {carouselData[currentSlide].description}
                </p>
              </div>

              <div className="navigation-controls">
                <span
                  className="arrow prev-arrow"
                  onClick={prevSlide}
                  role="button"
                  aria-label="Previous slide"
                >
                  &#8249;
                </span>
                <span
                  className="arrow next-arrow"
                  onClick={nextSlide}
                  role="button"
                  aria-label="Next slide"
                >
                  &#8250;
                </span>
              </div>
            </div>
          </div>

          <div className="col-6">
            <div className="image-section">
              <div className="image-container">
                <img
                  src={carouselData[currentSlide].image}
                  alt={carouselData[currentSlide].title}
                  className="carousel-image"
                />
              </div>
            </div>
          </div>

          {/* Mobile description section - only visible on mobile */}
          <div className="mobile-description">
            <p className="carousel-description">
              {carouselData[currentSlide].description}
            </p>
            <div className="navigation-controls">
              <span
                className="arrow prev-arrow"
                onClick={prevSlide}
                role="button"
                aria-label="Previous slide"
              >
                &#8249;
              </span>
              <span
                className="arrow next-arrow"
                onClick={nextSlide}
                role="button"
                aria-label="Next slide"
              >
                &#8250;
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="timeline-section">
          <div className="timeline">
          {timelineYears.map((year, index) => (
            <div
              key={year}
              className={`timeline-item ${currentSlide === index ? "active" : ""}`}
              onClick={() => setCurrentSlide(index)} // <-- Add this
              role="button"
              aria-label={`Go to ${year}`}
            >
              <div className="timeline-year">{year}</div>
              <div className="timeline-marker"></div>
            </div>
          ))}
          </div>
      </div>
    </div>
  );
}
