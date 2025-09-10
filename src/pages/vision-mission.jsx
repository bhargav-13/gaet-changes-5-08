import React, { useEffect, useState } from "react";
import InsideTopBanner from "../include/InsideTopBanner";
import InsideMobileBlock from "../include/MobileInsideTopBanner";
import ScrollAnimation from "react-animate-on-scroll";
import { Container } from "react-bootstrap";
import ApplyEnrolBlock from "../components/ApplyEnrolBlock";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { endpoints } from "../services/api";
import Loader from "../components/Loader";
import { useApi } from "../hooks/useApi";
import "./VisionMission.css";
import { Helmet } from "react-helmet-async";
import Footer from "../include/Footer";
import visionOne from "../assets/vissionOne.png";
import visionTwo from "../assets/vissionTwo.png";
import coreValues from "../assets/coreValues.png";

function VisionMissionPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { data, error, loading } = useApi(endpoints.visionMission);
  const [activeindex, setActiveindex] = useState(0);

  // Add event listeners to <li> elements for "open" toggle functionality
  useEffect(() => {
    if (!data) return; // Don't run if data isn't loaded yet

    const listItems = document.querySelectorAll(".rightlist li");

    const handleItemClick = (event) => {
      listItems.forEach((li) => li.classList.remove("open"));
      event.currentTarget.classList.add("open");
    };

    listItems.forEach((item) =>
      item.addEventListener("click", handleItemClick)
    );

    // Cleanup to avoid memory leaks
    return () => {
      listItems.forEach((item) =>
        item.removeEventListener("click", handleItemClick)
      );
    };
  }, [data]); // Only re-run when data changes

  if (loading)
    return (
      <div>
        <Loader />
      </div>
    );
  if (error) return <div className="error-message">Error: {error.message}</div>;
  if (!data) return null;
  const sections = [
    {
      title: "Vision",
      image: visionOne,
      description:
        "To create a generation of thoughtful learners who are curious, capable and confident to grow to become passionate, purposeful and compassionate to make a meaningful difference in the world.",
    },
    {
      title: "Mission",
      image: visionTwo,
      description:
        "To create a place where every child is seen, heard, and supported with true learning experiences, strong relationships and a safe environment, grow at their own pace.",
    },
  ];
  const values = [
    { text: "Real Learning", position: "top-left" },
    { text: "Right Environment", position: "bottom-left" },
    { text: "Honest Growth", position: "top-right" },
    { text: "People before Policies", position: "bottom-right" },
  ];
  return (
    <>
      <Helmet>
        {/* <title>{data?.seo?.meta_title || "GAET"}</title> */}
        <meta
          name="description"
          content={data?.seo?.meta_description || "GAET"}
        />
        <meta name="keywords" content={data?.seo?.meta_keywords || "GAET"} />
      </Helmet>

      <InsideTopBanner
        // pageTitle={data.top_section?.title}
        pageTitle={"Our Vision & Mission"}
        pageBreadcrumb="Vision & Mission"
        BackgrondBack={data.top_section?.back_image}
        CircleFront={data.top_section?.front_image}
      />

      <div className="breadcrumb-area">
        <Breadcrumb>
          <Breadcrumb.Item href="/about">About Us</Breadcrumb.Item>
          <Breadcrumb.Item active>Vision & Mission</Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <div className="inner-content-wapper">
        <div className="core-values-wrapper">
          <div className="title-section">
            <h1 className="main-title">Our Core Values</h1>
          </div>

          <div className="values-section">
            <div className="background-image">
              <img
                src={coreValues}
                alt="Students collaborating"
                className="bg-image"
              />
              <div className="image-overlay"></div>
            </div>

            <div className="values-overlay">
              {values.map((value, index) => (
                <div key={index} className={`value-label ${value.position}`}>
                  <div className="label-bg">
                    <span className="label-text">{value.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <section>
          <div className="vision-mission-wrapper">
            <div className="sections-grid vision-mission-grid">
              {sections.map((section, index) => (
                <div key={index} className="section">
                  <div className="section-content">
                    <h2 className="section-title">{section.title}</h2>
                    <div className="image-container">
                      <img
                        src={section.image}
                        alt={section.title}
                        className="section-image"
                      />
                    </div>
                    <p className="section-description">{section.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ApplyEnrolBlock />
      </div>
      <Footer />
    </>
  );
}

export default VisionMissionPage;
