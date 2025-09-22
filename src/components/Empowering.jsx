import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";
import { fetchData } from "./Api";
import "./Empowering.css";
import imgOne from "../assets/one.jpg";
import imgTwo from "../assets/two.jpg";
import imgThree from "../assets/three.jpg";
import imgFour from "../assets/four.jpg";
import imgFive from "../assets/five.jpg";
import imgSix from "../assets/six.jpg";

function Empowering() {
  const [aboutUsData, setAboutUsData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const colorPool = [
    "#79519F",
    "#E0B453",
    "#CC6728",
    "#69934A",
    "#189090",
    "#82194F",
    "#A3A582",
  ];

  const imageOptions = [imgOne, imgTwo, imgThree, imgFour, imgFive, imgSix];
  const [boxColors, setBoxColors] = useState(colorPool.slice(0, 4));
  const [boxImages, setBoxImages] = useState(imageOptions.slice(0, 6));
  // Removed imageTransitions state as we're not using fade-out animation anymore
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
        setIsLoaded(true);
      }
    };

    getAboutUsData();
  }, []);

  const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);
  useEffect(() => {
    if (!isLoaded) return;

    const interval = setInterval(() => {
      setBoxColors((prevColors) => {
        const carryOver =
          prevColors[Math.floor(Math.random() * prevColors.length)];
        const newColors = shuffle(
          colorPool.filter((c) => c !== carryOver)
        ).slice(0, 3);
        return shuffle([carryOver, ...newColors]);
      });
    }, 4000); // Slowed down from 2500ms to 4000ms to match image timing

    return () => clearInterval(interval);
  }, [isLoaded]);

  // RANDOM IMAGE CHANGER (unique except 1 carry-over)
  useEffect(() => {
    if (!isLoaded) return;

    const interval = setInterval(() => {
      setBoxImages((prevImages) => {
        const carryOver =
          prevImages[Math.floor(Math.random() * prevImages.length)];
        const newImages = shuffle(
          imageOptions.filter((img) => img !== carryOver)
        ).slice(0, 5); // we need total 6
        return shuffle([carryOver, ...newImages]);
      });
    }, 4000); // Slowed down from 3000ms to 4000ms

    return () => clearInterval(interval);
  }, [isLoaded]);

  if (error) return <div>Error: {error}</div>;
  if (!aboutUsData) return null;

  return (
    <div className="empowering-section">
      <div className="content-block">
        <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
          <h2>
            Growing thinkers with <br /> Purpose, Passion and Patience
          </h2>
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
              className="animated-image"
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
              className="animated-image"
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
              className="animated-image"
            />
          </div>
        </li>
        <li className="line-4">
          <div className="block-1">
            <img
              src={boxImages[3]}
              alt="educational content"
              className="animated-image"
            />
          </div>
        </li>
        <li className="line-5">
          <div className="block-1">
            <img
              src={boxImages[4]}
              alt="educational content"
              className="animated-image"
            />
          </div>
          <div
            className="block-2 animated-bg"
            style={{ backgroundColor: boxColors[2] }}
          ></div>
        </li>
        <li className="line-6">
          <div className="block-1">
            <img
              src={boxImages[5]}
              alt="educational content"
              className="animated-image"
            />
          </div>
          <div
            className="block-2 animated-bg"
            style={{ backgroundColor: boxColors[3] }}
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