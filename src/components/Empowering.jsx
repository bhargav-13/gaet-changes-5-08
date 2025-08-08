import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";
import { fetchData } from "./Api";
import "./Empowering.css";
import imgOne from "../assets/one.png";
import imgTwo from "../assets/two.jpg";
import imgThree from "../assets/three.jpg";
import imgFour from "../assets/four.jpg";
import imgFive from "../assets/five.png";
import imgSix from "../assets/six.png";

function Empowering() {
  const [aboutUsData, setAboutUsData] = useState(null);
  const [error, setError] = useState(null);

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
  const [boxImages, setBoxImages] = useState([
    "../assets/one.png",
    "../assets/two.jpg",
    "../assets/three.jpg",
    "../assets/four.jpg",
    "../assets/five.png",
    "../assets/six.png",
  ]);
  const imageOptions = [imgOne, imgTwo, imgThree, imgFour, imgFive, imgSix];

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
      }
    };

    getAboutUsData();
  }, []);

  // RANDOM COLOR CHANGER
  useEffect(() => {
    let lastBoxIndex = -1;

    const interval = setInterval(() => {
      let randomBox;
      do {
        randomBox = Math.floor(Math.random() * boxColors.length);
      } while (randomBox === lastBoxIndex);

      lastBoxIndex = randomBox;

      const randomColor =
        colorOptions[Math.floor(Math.random() * colorOptions.length)];

      setBoxColors((prevColors) =>
        prevColors.map((color, index) =>
          index === randomBox ? randomColor : color
        )
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // RANDOM IMAGE CHANGER
  useEffect(() => {
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
        newImage =
          imageOptions[Math.floor(Math.random() * imageOptions.length)];
      } while (newImage === currentImage);

      setBoxImages((prevImages) =>
        prevImages.map((img, index) => (index === randomBox ? newImage : img))
      );
    }, 3000); // every 3 seconds

    return () => clearInterval(interval);
  }, [boxImages]);

  if (error) return <div>Error: {error}</div>;
  if (!aboutUsData) return null;

  return (
    <div className="empowering-section">
      <div className="content-block">
        <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
          <div dangerouslySetInnerHTML={{ __html: aboutUsData.title }} />
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={2}>
          <Link to={aboutUsData.link} className="btn-more">
            About Us
          </Link>
        </ScrollAnimation>
      </div>

      <ul className="box-layout">
        <li className="line-1">
          <div className="block-1">
            <img src={boxImages[0]} alt="logo" />
          </div>
          <div
            className="block-2"
            style={{ backgroundColor: boxColors[0] }}
          ></div>
        </li>
        <li className="line-2">
          <div className="block-1">
            <img src={boxImages[1]} alt="logo" />
          </div>
          <div
            className="block-2"
            style={{ backgroundColor: boxColors[1] }}
          ></div>
        </li>
        <li className="line-3">
          <div className="block-1">
            <img src={boxImages[2]} alt="logo" />
          </div>
        </li>
        <li className="line-4">
          <div className="block-1">
            <img src={boxImages[3]} alt="logo" />
          </div>
        </li>
        <li className="line-5">
          <div className="block-1">
            <img src={boxImages[4]} alt="logo" />
          </div>
          <div
            className="block-2"
            style={{ backgroundColor: boxColors[4] }}
          ></div>
        </li>
        <li className="line-6">
          <div className="block-1">
            <img src={boxImages[5]} alt="logo" />
          </div>
          <div
            className="block-2"
            style={{ backgroundColor: boxColors[5] }}
          ></div>
        </li>
      </ul>
    </div>
  );
}

export default Empowering;
