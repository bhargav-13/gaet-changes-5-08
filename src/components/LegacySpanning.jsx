import React, { useState } from "react";
import "./LegacySpanning.css";

const carouselData = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Goenka & Associates Educational Trust",
    description:
      "GAET has established the following schools & institutions located in the buildings constructed from the corpus of",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Modern Educational Infrastructure",
    description:
      "State-of-the-art facilities designed to provide world-class education with modern amenities and learning environments",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Excellence in Academic Achievement",
    description:
      "Committed to fostering academic excellence and personal growth through innovative teaching methodologies and comprehensive curriculum",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Community Impact & Growth",
    description:
      "Building stronger communities through education and creating lasting impact on society through quality educational services",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Community Impact & Growth",
    description:
      "Building stronger communities through education and creating lasting impact on society through quality educational services",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Community Impact & Growth",
    description:
      "Building stronger communities through education and creating lasting impact on society through quality educational services",
  },
  {
    id: 7,
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Community Impact & Growth",
    description:
      "Building stronger communities through education and creating lasting impact on society through quality educational services",
  },
];

const timelineYears = ["1981", "1983", "1987", "1990", "2006", "2007", "2008"];

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

//   return (
//     <div className="legacy-container">
//       <div className="legacy-content">
//         <div className="row">
//           <div className="col-6">
//             <div className="text-section">
//               <h1 className="legacy-spanning-main-title">
//                 <span className="line">A Legacy Spanning</span>
//                 <br />
//                 <span className="line">Over Years</span>
//               </h1>

//               <div className="carousel-content">
//                 <h2 className="carousel-title">
//                   {carouselData[currentSlide].title}
//                 </h2>
//                 <p className="carousel-description">
//                   {carouselData[currentSlide].description}
//                 </p>
//               </div>

//               <div className="navigation-controls">
//                 <span
//                   className="arrow prev-arrow"
//                   onClick={prevSlide}
//                   role="button"
//                   aria-label="Previous slide"
//                 >
//                   &#8249;
//                 </span>
//                 <span
//                   className="arrow next-arrow"
//                   onClick={nextSlide}
//                   role="button"
//                   aria-label="Next slide"
//                 >
//                   &#8250;
//                 </span>
//               </div>
//             </div>
//           </div>

//           <div className="col-6">
//             <div className="image-section">
//               <div className="image-container">
//                 <img
//                   src={carouselData[currentSlide].image}
//                   alt={carouselData[currentSlide].title}
//                   className="carousel-image"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="timeline-section">
//         <div className="timeline">
//           {timelineYears.map((year, index) => (
//             <div
//               key={year}
//               className={`timeline-item ${
//                 currentSlide === index ? "active" : ""
//               }`}
//             >
//               <div className="timeline-year">{year}</div>
//               <div className="timeline-marker"></div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );

return (
  <div className="legacy-container">
    <div className="legacy-content">
      <div className="row">
        <div className="col-6">
          <div className="text-section">
            <h1 className="legacy-spanning-main-title">
              <span className="line">A Legacy Spanning</span>
              <span className="line">Over Years</span>
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
            className={`timeline-item ${
              currentSlide === index ? "active" : ""
            }`}
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
