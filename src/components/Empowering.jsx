import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";
import { fetchData } from "./Api";
import "./Empowering.css";
import imgOne from "../assets/one.jpg"
import imgTwo from "../assets/two.jpg";
import imgThree from "../assets/three.jpg";
import imgFour from "../assets/four.jpg";
import imgFive from "../assets/five.jpg";
import imgSix from "../assets/six.jpg";

function Empowering() {
  const [aboutUsData, setAboutUsData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // COLORS
  const [boxColors, setBoxColors] = useState([
    "#79519F",
    "#189090",
    "#1C6791",
    "#124066",
    "#cc6728",
    "#69934A",
  ]);
  const colorOptions = ["#189090", "#79519F", "#CC6728", "#69934A"];

  // IMAGES
  const imageOptions = [imgOne, imgTwo, imgThree, imgFour, imgFive, imgSix];
  const [boxImages, setBoxImages] = useState([...imageOptions]); // Initialize with actual images

  // Add transition states for smooth animations
  const [imageTransitions, setImageTransitions] = useState([
    false, false, false, false, false, false
  ]);

  // FETCH API DATA
  useEffect(() => {
    const getAboutUsData = async () => {
      try {
        const response = await fetchData();
        if (response?.data?.about_us_list?.length > 0) {
          setAboutUsData(response.data.about_us_list[0]);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        // Set loaded to true after data fetch attempt
        setIsLoaded(true);
      }
    };

    getAboutUsData();
  }, []);

  // RANDOM COLOR CHANGER with smooth transitions
  useEffect(() => {
    if (!isLoaded) return;

    let lastBoxIndex = -1;
    const interval = setInterval(() => {
      let randomBox;
      do {
        randomBox = Math.floor(Math.random() * boxColors.length);
      } while (randomBox === lastBoxIndex);

      lastBoxIndex = randomBox;
      const randomColor = colorOptions[Math.floor(Math.random() * colorOptions.length)];

      setBoxColors((prevColors) =>
        prevColors.map((color, index) =>
          index === randomBox ? randomColor : color
        )
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [isLoaded]);

  // RANDOM IMAGE CHANGER with fade animation
  useEffect(() => {
    if (!isLoaded) return;

    let lastImageIndex = -1;
    const interval = setInterval(() => {
      let randomBox;
      do {
        randomBox = Math.floor(Math.random() * boxImages.length);
      } while (randomBox === lastImageIndex);

      lastImageIndex = randomBox;
      const currentImage = boxImages[randomBox];
      let newImage;
      do {
        newImage = imageOptions[Math.floor(Math.random() * imageOptions.length)];
      } while (newImage === currentImage);

      // Start fade out animation
      setImageTransitions(prev => 
        prev.map((transition, index) => index === randomBox ? true : transition)
      );

      // After fade out, change image and fade in
      setTimeout(() => {
        setBoxImages(prevImages =>
          prevImages.map((img, index) => (index === randomBox ? newImage : img))
        );

        // Reset transition state after a short delay
        setTimeout(() => {
          setImageTransitions(prev => 
            prev.map((transition, index) => index === randomBox ? false : transition)
          );
        }, 50);
      }, 300); // Wait for fade out to complete

    }, 3000);

    return () => clearInterval(interval);
  }, [boxImages, isLoaded]);

  if (error) return <div>Error: {error}</div>;
  if (!aboutUsData) return null;

  return (
    <div className="empowering-section">
      <div className="content-block">
        <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
          {/* <div dangerouslySetInnerHTML={{ __html: aboutUsData.title }} /> */}
<h2>Growing thinkers with Purpose, Passion and Patience</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={200}>
          <Link to="/about">
            <button className="abt-us-btn">About Us</button>
          </Link>
        </ScrollAnimation>
      </div>

      <ul className="box-layout">
        <li className="line-1">
          <div className="block-1">
            <img
              src={boxImages[0]}
              alt="educational content"
              className={`animated-image ${imageTransitions[0] ? 'fade-out' : 'fade-in'}`}
            />
          </div>
          <div
            className="block-2 animated-bg"
            style={{ backgroundColor: boxColors[0] }}
          ></div>
        </li>
        <li className="line-2">
          <div className="block-1">
            <img
              src={boxImages[1]}
              alt="educational content"
              className={`animated-image ${imageTransitions[1] ? 'fade-out' : 'fade-in'}`}
            />
          </div>
          <div
            className="block-2 animated-bg"
            style={{ backgroundColor: boxColors[1] }}
          ></div>
        </li>
        <li className="line-3">
          <div className="block-1">
            <img
              src={boxImages[2]}
              alt="educational content"
              className={`animated-image ${imageTransitions[2] ? 'fade-out' : 'fade-in'}`}
            />
          </div>
        </li>
        <li className="line-4">
          <div className="block-1">
            <img
              src={boxImages[3]}
              alt="educational content"
              className={`animated-image ${imageTransitions[3] ? 'fade-out' : 'fade-in'}`}
            />
          </div>
        </li>
        <li className="line-5">
          <div className="block-1">
            <img
              src={boxImages[4]}
              alt="educational content"
              className={`animated-image ${imageTransitions[4] ? 'fade-out' : 'fade-in'}`}
            />
          </div>
          <div
            className="block-2 animated-bg"
            style={{ backgroundColor: boxColors[4] }}
          ></div>
        </li>
        <li className="line-6">
          <div className="block-1">
            <img
              src={boxImages[5]}
              alt="educational content"
              className={`animated-image ${imageTransitions[5] ? 'fade-out' : 'fade-in'}`}
            />
          </div>
          <div
            className="block-2 animated-bg"
            style={{ backgroundColor: boxColors[5] }}
          ></div>
        </li>
      </ul>

      <div className="rays">
          <img src="/images/footer-rays.svg" alt="Decorative rays" />
        </div>
    </div>
  );
}

export default Empowering;