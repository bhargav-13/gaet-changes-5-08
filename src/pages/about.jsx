import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import ScrollAnimation from "react-animate-on-scroll";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Pagination, Autoplay } from "swiper/modules";
import { useApi } from "../hooks/useApi";
import { endpoints } from "../services/api";
import Loader from "../components/Loader";
import InsideTopBanner from "../include/InsideTopBanner";
import InsideMobileBlock from "../include/MobileInsideTopBanner";
import ApplyEnrolBlock from "../components/ApplyEnrolBlock";
import Footer from "../include/Footer";
import kmGoenka from "../assets/KM-Goenka.jpg";
import ushaKhandwala from "../assets/Usha-Khandwala.png";
import coreBelief from "../assets/CoreBelief.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

function AboutPage() {
const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { data, error, loading } = useApi(endpoints.about);

  if (loading)
    return (
      <div>
        <Loader />
      </div>
    );
  if (error) return <div className="error-message">Error: {error.message}</div>;
  if (!data) return null;

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
        // pageTitle={data.top_section.title}
        pageTitle={"Growing thinkers with Purpose, Passion and Patience"}
        pageBreadcrumb="About Us"
        BackgrondBack={data.top_section.back_image}
        CircleFront={data.top_section.front_image}
      />
      {/* <InsideMobileBlock
        pageTitle={data.top_section.title}
        pageBreadcrumb="About Us"
        BackgrondBack={data.top_section.back_image}
        CircleFront={data.top_section.front_image}
      /> */}

      <div className="breadcrumb-area">
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>About Us</Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <div className="inner-content-wapper">
        <section>
          <div className="inner-top-content-block">
            <Container>
              <ScrollAnimation
                animateIn="fadeInUp"
                animateOnce={true}
                delay={200}
              >
                <p>
                  <strong
                    dangerouslySetInnerHTML={{
                      __html: data.top_section?.story || "",
                    }}
                  />
                  <strong></strong>
                </p>
              </ScrollAnimation>
            </Container>
          </div>
        </section>

        <div className="inner-top-content-block">
          <div className="container">
            <h1 className="our-core-values">Our Core Values</h1>

            <div className="row core-values">
              <div className="col-6 core-card top-left">
                <h2>Real Learning</h2>
                <p className="about-text-align-left">
                  We don't believe in rote learning. We believe in helping
                  children understand, ask questions, and understand the world
                  around them.
                </p>
              </div>

              <div className="col-6 core-card top-right">
                <h2 className="about-text-align-end">Honest Growth</h2>
                <p className="about-text-align-right">
                  We respect that every child learns differently, we believe in
                  steady, meaningful progress that builds confidence from
                  within.
                </p>
              </div>

              <div className="col-6 core-card bottom-left">
                <h2>
                  Right <br /> Environment
                </h2>
                <p className="about-text-align-left">
                  We create spaces that are safe, energising, tech-forward and
                  inclusive to inspire.
                </p>
              </div>

              <div className="col-6 core-card bottom-right">
                <h2 className="about-text-align-end">
                  People before <br />
                  Policies
                </h2>
                <p className="about-text-align-right">
                  We thrive on relationships, not just rules as our people are
                  at the heart of all our decisions.
                </p>
              </div>
            </div>
          </div>
        </div>

        <section className="founders-section" onClick={() => navigate("/about-our-founders")}
        style={{ cursor: "pointer" }}>
          <h2 className="founders-title">Our Founders</h2>

          <div className="founders-grid">
            <div className="founder-card">
              <div className="founder-image-container">
                <img
                  src={kmGoenka}
                  alt="Late Shri K.M Goenka"
                  className="founder-image"
                />
                <div className="founder-info">
                  <h3 className="founder-name">LATE SHRI K.M GOENKA</h3>
                  <p className="founder-title">Founder Chairman</p>
                </div>
              </div>
            </div>

            <div className="founder-card">
              <div className="founder-image-container">
                <img
                  src={ushaKhandwala}
                  alt="Late Mrs Usha Khandwala"
                  className="founder-image"
                />
                <div className="founder-info">
                  <h3 className="founder-name">LATE MRS USHA KHANDWALA</h3>
                  <p className="founder-title">Founder - Managing Trustee</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="core-belief-section">
          <h2 className="section-title">Our Core belief</h2>

          <div className="belief-content">
            <div className="belief-image-container">
              <img
                src={coreBelief}
                alt="Students on colorful stairs - Modesty Adorns Knowledge"
                className="belief-image"
              />
              <div className="belief-overlay">
                <div className="belief-text">
                  <h3 className="belief-heading">Modesty Adorns Knowledge</h3>
                  <p className="belief-subtitle">
                    A strong belief by our founder, we pursue
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ApplyEnrolBlock />
      </div>

      <Footer />
    </>
  );
}

export default AboutPage;
